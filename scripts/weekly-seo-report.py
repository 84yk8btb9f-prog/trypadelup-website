#!/usr/bin/env python3
"""
Weekly SEO report generator for trypadelup.com.
Runs in GitHub Actions. All credentials come from env vars (GitHub Secrets).
Writes seo-reports/YYYY-MM-DD.md; caller commits + pushes.
"""

import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone
from pathlib import Path

SITE = "https://www.trypadelup.com"
REPO_ROOT = Path(__file__).resolve().parent.parent
REPORTS_DIR = REPO_ROOT / "seo-reports"
REPORTS_DIR.mkdir(parents=True, exist_ok=True)

now = datetime.now(timezone.utc)
TODAY = now.strftime("%Y-%m-%d")
WEEK_AGO = (now - timedelta(days=7)).strftime("%Y-%m-%d")
GSC_END = (now - timedelta(days=3)).strftime("%Y-%m-%d")
GSC_START = (now - timedelta(days=10)).strftime("%Y-%m-%d")
GSC_PRIOR_END = (now - timedelta(days=11)).strftime("%Y-%m-%d")
GSC_PRIOR_START = (now - timedelta(days=17)).strftime("%Y-%m-%d")

KEYWORDS = [
    "AI padel coach",
    "AI padel coach app",
    "padel coaching app",
    "padel video analysis",
    "padel training app",
    "best padel app",
    "padel app for beginners",
    "padel app for intermediate players",
    "padel app for advanced players",
    "padel app for coaches",
    "padel app for clubs",
    "padel shot analysis",
    "padel technique analysis",
    "PadelUp vs Playtomic",
    "PadelUp vs SwingVision",
    "padel rules",
    "bandeja technique",
    "padel vs tennis",
    "best padel coaching app",
    "AI padel training",
]

errors: list[str] = []


def env(name: str, required: bool = True) -> str:
    val = os.environ.get(name, "")
    if required and not val:
        errors.append(f"Missing env var: {name}")
    return val


SERPAPI_KEY = env("SERPAPI_KEY")
BING_WMT_KEY = env("BING_WMT_KEY")
CLARITY_TOKEN = env("CLARITY_TOKEN")
GSC_CLIENT_ID = env("GSC_CLIENT_ID")
GSC_CLIENT_SECRET = env("GSC_CLIENT_SECRET")
GSC_REFRESH_TOKEN = env("GSC_REFRESH_TOKEN")


def http(method: str, url: str, headers=None, body=None, timeout=30):
    data = None
    if body is not None:
        data = body if isinstance(body, bytes) else body.encode()
    req = urllib.request.Request(url, method=method, data=data)
    for k, v in (headers or {}).items():
        req.add_header(k, v)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.status, r.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as e:
        try:
            body_text = e.read().decode("utf-8", errors="replace")
        except Exception:
            body_text = ""
        return e.code, body_text
    except Exception as e:
        return None, f"exception: {e}"


# ---------------------------------------------------------------------------
# Google Search Console
# ---------------------------------------------------------------------------
def gsc_access_token() -> str | None:
    form = urllib.parse.urlencode({
        "client_id": GSC_CLIENT_ID,
        "client_secret": GSC_CLIENT_SECRET,
        "refresh_token": GSC_REFRESH_TOKEN,
        "grant_type": "refresh_token",
    })
    status, body = http("POST", "https://oauth2.googleapis.com/token",
                        headers={"Content-Type": "application/x-www-form-urlencoded"},
                        body=form)
    if status != 200:
        errors.append(f"GSC token exchange failed (HTTP {status}): {body[:200]}")
        return None
    try:
        return json.loads(body)["access_token"]
    except Exception as e:
        errors.append(f"GSC token parse failed: {e}")
        return None


def gsc_query(token: str, site_encoded: str, payload: dict):
    url = f"https://searchconsole.googleapis.com/webmasters/v3/sites/{site_encoded}/searchAnalytics/query"
    status, body = http("POST", url,
                        headers={
                            "Authorization": f"Bearer {token}",
                            "Content-Type": "application/json",
                        },
                        body=json.dumps(payload))
    if status == 404:
        return 404, None
    if status != 200:
        return status, body
    try:
        return 200, json.loads(body)
    except Exception as e:
        return None, f"parse error: {e}"


def pull_gsc():
    if any("GSC_" in err for err in errors):
        return None
    token = gsc_access_token()
    if not token:
        return None

    # Try URL-prefix first, fall back to sc-domain
    candidates = [
        urllib.parse.quote("https://www.trypadelup.com/", safe=""),
        urllib.parse.quote("sc-domain:trypadelup.com", safe=""),
    ]

    site_encoded = None
    probe = {"startDate": GSC_START, "endDate": GSC_END, "dimensions": []}
    probe_errors = []
    for c in candidates:
        status, data = gsc_query(token, c, probe)
        if status == 200:
            site_encoded = c
            break
        probe_errors.append(f"{c} HTTP {status}")

    if not site_encoded:
        errors.append(f"GSC: no accessible property format. Tried: {'; '.join(probe_errors)}")
        return None

    def q(payload):
        s, d = gsc_query(token, site_encoded, payload)
        if s != 200:
            errors.append(f"GSC query HTTP {s}: {str(d)[:200]}")
            return {}
        return d

    totals = q({"startDate": GSC_START, "endDate": GSC_END, "dimensions": []})
    prior = q({"startDate": GSC_PRIOR_START, "endDate": GSC_PRIOR_END, "dimensions": []})
    queries = q({"startDate": GSC_START, "endDate": GSC_END, "dimensions": ["query"], "rowLimit": 25})
    pages = q({"startDate": GSC_START, "endDate": GSC_END, "dimensions": ["page"], "rowLimit": 25})

    def first_row(d):
        rows = (d or {}).get("rows") or []
        return rows[0] if rows else None

    return {
        "totals": first_row(totals),
        "prior": first_row(prior),
        "queries": (queries or {}).get("rows") or [],
        "pages": (pages or {}).get("rows") or [],
        "window": (GSC_START, GSC_END),
    }


# ---------------------------------------------------------------------------
# Bing Webmaster
# ---------------------------------------------------------------------------
def bing_call(endpoint: str):
    url = (f"https://ssl.bing.com/webmaster/api.svc/json/{endpoint}"
           f"?siteUrl={urllib.parse.quote(SITE, safe='')}&apikey={BING_WMT_KEY}")
    status, body = http("GET", url)
    if status != 200:
        errors.append(f"Bing {endpoint} HTTP {status}: {body[:200]}")
        return None
    try:
        return json.loads(body)
    except Exception as e:
        errors.append(f"Bing {endpoint} parse: {e}")
        return None


def pull_bing():
    if not BING_WMT_KEY:
        return None
    rank = bing_call("GetRankAndTrafficStats")
    queries = bing_call("GetQueryStats")
    pages = bing_call("GetPageStats")
    return {"rank": rank, "queries": queries, "pages": pages}


# ---------------------------------------------------------------------------
# Microsoft Clarity
# ---------------------------------------------------------------------------
CLARITY_DAILY_DIR = REPO_ROOT / "seo-reports" / "clarity-daily"


def _clarity_live(num_days: int = 3):
    """Fetch Clarity insights for the last N days (1, 2, or 3 per API cap)."""
    if not CLARITY_TOKEN:
        return None
    url = f"https://www.clarity.ms/export-data/api/v1/project-live-insights?numOfDays={num_days}&dimension1=URL"
    status, body = http("GET", url, headers={"Authorization": f"Bearer {CLARITY_TOKEN}"})
    if status != 200:
        errors.append(f"Clarity live HTTP {status}: {body[:200]}")
        return None
    try:
        return json.loads(body)
    except Exception as e:
        errors.append(f"Clarity live parse: {e}")
        return None


def _aggregate_clarity(snapshots_by_date: dict):
    """Aggregate a {date_str: raw_metrics_list} dict into a 7-day rollup."""
    total_sessions = 0
    total_bot = 0
    per_url_sessions: dict[str, int] = {}
    hotspots = {"rage": {}, "dead": {}, "quick": {}}
    per_day_sessions: dict[str, int] = {}

    name_to_bucket = {
        "rageclickcount": "rage",
        "rageclicks": "rage",
        "deadclickcount": "dead",
        "deadclicks": "dead",
        "quickbackclick": "quick",
        "quickbackclicks": "quick",
        "quickbackclickcount": "quick",
    }

    for date, metrics in snapshots_by_date.items():
        day_sessions = 0
        if not isinstance(metrics, list):
            continue
        for m in metrics:
            name = (m.get("metricName") or "").strip()
            key = name.lower().replace(" ", "")
            rows = m.get("information") or []
            for info in rows:
                url = info.get("Url") or info.get("URL") or ""
                if key == "traffic":
                    s = int(info.get("totalSessionCount") or 0)
                    b = int(info.get("totalBotSessionCount") or 0)
                    total_sessions += s
                    total_bot += b
                    day_sessions += s
                    if url:
                        per_url_sessions[url] = per_url_sessions.get(url, 0) + s
                elif key in ("popularpages",):
                    s = int(info.get("totalSessionCount") or info.get("sessionsCount") or 0)
                    if url:
                        per_url_sessions[url] = per_url_sessions.get(url, 0) + s
                bucket = name_to_bucket.get(key)
                if bucket and url:
                    # subTotal = actual count of the metric (e.g. dead clicks).
                    # sessionsCount on these rows is just page visits and would
                    # overstate severity, so we ignore it here.
                    c = int(info.get("subTotal") or 0)
                    if c > 0:
                        hotspots[bucket][url] = hotspots[bucket].get(url, 0) + c
        per_day_sessions[date] = day_sessions

    return {
        "snapshot_dates": sorted(snapshots_by_date.keys()),
        "sessions": total_sessions,
        "bot_sessions": total_bot,
        "per_url_sessions": per_url_sessions,
        "per_day_sessions": per_day_sessions,
        "hotspots": hotspots,
    }


def pull_clarity():
    """Build a 7-day Clarity rollup:
      - Live numOfDays=3 fetch covers the most recent 72h (today + 2 days back).
      - Daily snapshots in seo-reports/clarity-daily/ cover days 4–7.
    Clarity API caps at 1/2/3 days per call and 10 calls/project/day, so a
    single call cannot return 7 days. During the first week after deployment,
    only the 3-day live window is available; the daily snapshot workflow
    (00:30 UTC) accumulates older days over the following week."""
    snapshots: dict[str, list] = {}

    # Live 3-day window — primary source for the 3 most recent days.
    live3 = _clarity_live(3)
    if isinstance(live3, list):
        snapshots["live-3d"] = live3

    # Historical daily snapshots older than 3 days — fill in days 4–7.
    if CLARITY_DAILY_DIR.is_dir():
        cutoff = (now - timedelta(days=3)).date()
        files = sorted(CLARITY_DAILY_DIR.glob("*.json"))
        for f in files:
            try:
                snap_date = datetime.strptime(f.stem, "%Y-%m-%d").date()
            except ValueError:
                continue
            if snap_date >= cutoff:
                continue  # already covered by live 3-day fetch
            try:
                snap = json.loads(f.read_text(encoding="utf-8"))
                metrics = snap.get("metrics") if isinstance(snap, dict) else snap
                if isinstance(metrics, list):
                    snapshots[f.stem] = metrics
            except Exception as e:
                errors.append(f"Clarity snapshot {f.name} unreadable: {e}")

        # Keep only the 4 most recent historical days (days 4-7 of the window).
        historical = {k: v for k, v in snapshots.items() if k != "live-3d"}
        keep = dict(sorted(historical.items())[-4:])
        snapshots = {"live-3d": snapshots.get("live-3d")} if "live-3d" in snapshots else {}
        snapshots.update(keep)
        snapshots = {k: v for k, v in snapshots.items() if v is not None}

    if not snapshots:
        return None
    return _aggregate_clarity(snapshots)


# ---------------------------------------------------------------------------
# Google Suggest — trending padel queries (dependency-free; no API key)
# ---------------------------------------------------------------------------
SUGGEST_DIR = REPO_ROOT / "seo-reports" / "suggest-snapshots"
SUGGEST_DIR.mkdir(parents=True, exist_ok=True)

# Seed terms — Google's autocomplete completes from each seed, surfacing what
# people are actively searching. Pick seeds broad enough to capture the niche
# but specific enough to avoid noise.
SUGGEST_SEEDS = [
    "padel",
    "padel tips",
    "padel coach",
    "padel app",
    "padel training",
    "padel rules",
    "padel racket",
    "best padel",
    "how to padel",
    "padel vs",
]


def _suggest_one(seed: str) -> list[str]:
    """Hit Google's public suggest endpoint. Returns a list of suggestion strings."""
    qs = urllib.parse.urlencode({"client": "firefox", "q": seed, "hl": "en"})
    url = f"https://suggestqueries.google.com/complete/search?{qs}"
    status, body = http("GET", url,
                        headers={"User-Agent": "PadelUp-SEO-Report/1.0"},
                        timeout=15)
    if status != 200:
        errors.append(f"Suggest '{seed}' HTTP {status}: {str(body)[:120]}")
        return []
    try:
        data = json.loads(body)
        return [s for s in (data[1] if len(data) > 1 else []) if isinstance(s, str)]
    except Exception as e:
        errors.append(f"Suggest '{seed}' parse: {e}")
        return []


def pull_suggest():
    """Fetch suggestions for each seed. Persist this week's snapshot.
    Diff against most recent prior snapshot to flag NEW queries."""
    current: dict[str, list[str]] = {}
    for seed in SUGGEST_SEEDS:
        current[seed] = _suggest_one(seed)
        time.sleep(0.4)

    if not any(current.values()):
        return None

    # Load most recent prior snapshot for diffing.
    prior_files = sorted(SUGGEST_DIR.glob("*.json"))
    prior_files = [p for p in prior_files if p.stem != TODAY]
    prior: dict[str, list[str]] = {}
    if prior_files:
        try:
            prior = json.loads(prior_files[-1].read_text(encoding="utf-8"))
        except Exception as e:
            errors.append(f"Suggest prior snapshot parse: {e}")

    # Persist current snapshot for next run.
    try:
        (SUGGEST_DIR / f"{TODAY}.json").write_text(
            json.dumps(current, indent=2, ensure_ascii=False), encoding="utf-8")
    except Exception as e:
        errors.append(f"Suggest snapshot write: {e}")

    # Compute new queries (in current, not in prior — across all seeds).
    prior_flat = {q.lower() for qs in prior.values() for q in qs}
    new_queries: list[tuple[str, str]] = []  # (seed, suggestion)
    for seed, sugs in current.items():
        for s in sugs:
            if s.lower() not in prior_flat:
                new_queries.append((seed, s))

    return {
        "current": current,
        "new_queries": new_queries,
        "had_prior": bool(prior),
    }


# ---------------------------------------------------------------------------
# YouTube Suggest — trending padel video queries (dependency-free; no API key)
# ---------------------------------------------------------------------------
YT_SUGGEST_DIR = REPO_ROOT / "seo-reports" / "yt-suggest-snapshots"
YT_SUGGEST_DIR.mkdir(parents=True, exist_ok=True)

# YouTube users phrase queries differently — heavier on tutorial/how-to/best.
YT_SUGGEST_SEEDS = [
    "padel",
    "padel tutorial",
    "padel tips",
    "how to padel",
    "padel technique",
    "padel drills",
    "best padel",
    "padel for beginners",
    "padel bandeja",
    "padel smash",
]


def _yt_suggest_one(seed: str) -> list[str]:
    """YouTube autocomplete via the same suggest endpoint with ds=yt."""
    qs = urllib.parse.urlencode({"client": "firefox", "ds": "yt", "q": seed, "hl": "en"})
    url = f"https://suggestqueries.google.com/complete/search?{qs}"
    status, body = http("GET", url,
                        headers={"User-Agent": "PadelUp-SEO-Report/1.0"},
                        timeout=15)
    if status != 200:
        errors.append(f"YT Suggest '{seed}' HTTP {status}: {str(body)[:120]}")
        return []
    try:
        data = json.loads(body)
        return [s for s in (data[1] if len(data) > 1 else []) if isinstance(s, str)]
    except Exception as e:
        errors.append(f"YT Suggest '{seed}' parse: {e}")
        return []


def pull_yt_suggest():
    current: dict[str, list[str]] = {}
    for seed in YT_SUGGEST_SEEDS:
        current[seed] = _yt_suggest_one(seed)
        time.sleep(0.4)
    if not any(current.values()):
        return None
    prior_files = sorted(YT_SUGGEST_DIR.glob("*.json"))
    prior_files = [p for p in prior_files if p.stem != TODAY]
    prior: dict[str, list[str]] = {}
    if prior_files:
        try:
            prior = json.loads(prior_files[-1].read_text(encoding="utf-8"))
        except Exception as e:
            errors.append(f"YT Suggest prior snapshot parse: {e}")
    try:
        (YT_SUGGEST_DIR / f"{TODAY}.json").write_text(
            json.dumps(current, indent=2, ensure_ascii=False), encoding="utf-8")
    except Exception as e:
        errors.append(f"YT Suggest snapshot write: {e}")
    prior_flat = {q.lower() for qs in prior.values() for q in qs}
    new_queries: list[tuple[str, str]] = []
    for seed, sugs in current.items():
        for s in sugs:
            if s.lower() not in prior_flat:
                new_queries.append((seed, s))
    return {
        "current": current,
        "new_queries": new_queries,
        "had_prior": bool(prior),
    }


# ---------------------------------------------------------------------------
# Reddit — r/padel hot posts (content-idea signal)
# ---------------------------------------------------------------------------
REDDIT_CLIENT_ID = os.environ.get("REDDIT_CLIENT_ID", "")
REDDIT_CLIENT_SECRET = os.environ.get("REDDIT_CLIENT_SECRET", "")
REDDIT_USERNAME = os.environ.get("REDDIT_USERNAME", "padelup")
# Reddit's required UA format: <platform>:<app-id>:<version> (by /u/<username>)
REDDIT_USER_AGENT = f"script:padelup-seo-report:v1.0 (by /u/{REDDIT_USERNAME})"
_reddit_token_cache: dict = {}


def _reddit_token() -> str | None:
    """Get OAuth token via 'script' app credentials. Cached per-process."""
    if _reddit_token_cache.get("token"):
        return _reddit_token_cache["token"]
    if not (REDDIT_CLIENT_ID and REDDIT_CLIENT_SECRET):
        return None
    import base64
    auth = base64.b64encode(f"{REDDIT_CLIENT_ID}:{REDDIT_CLIENT_SECRET}".encode()).decode()
    status, body = http(
        "POST", "https://www.reddit.com/api/v1/access_token",
        headers={
            "Authorization": f"Basic {auth}",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": REDDIT_USER_AGENT,
        },
        body="grant_type=client_credentials",
        timeout=20,
    )
    if status != 200:
        errors.append(f"Reddit OAuth HTTP {status}: {str(body)[:160]}")
        return None
    try:
        token = json.loads(body).get("access_token")
        _reddit_token_cache["token"] = token
        return token
    except Exception as e:
        errors.append(f"Reddit OAuth parse: {e}")
        return None


def _reddit_hot(subreddit: str, limit: int = 10) -> list[dict]:
    """Try OAuth-authed call first (datacenter-friendly), fall back to public
    JSON with browser-like UA."""
    token = _reddit_token()
    if token:
        url = f"https://oauth.reddit.com/r/{subreddit}/hot?limit={limit}&raw_json=1"
        status, body = http("GET", url,
                            headers={
                                "Authorization": f"Bearer {token}",
                                "User-Agent": REDDIT_USER_AGENT,
                            },
                            timeout=20)
    else:
        # Fallback: public JSON with realistic UA. Often blocked from GH Actions IPs.
        url = f"https://old.reddit.com/r/{subreddit}/hot.json?limit={limit}&raw_json=1"
        status, body = http("GET", url,
                            headers={
                                "User-Agent": (
                                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                                    "AppleWebKit/537.36 (KHTML, like Gecko) "
                                    "Chrome/126.0.0.0 Safari/537.36"
                                ),
                                "Accept": "application/json, text/javascript, */*",
                            },
                            timeout=20)
    if status != 200:
        snippet = str(body)[:160].replace("\n", " ")
        errors.append(f"Reddit r/{subreddit} HTTP {status}: {snippet}")
        return []
    try:
        data = json.loads(body)
        return [c["data"] for c in (data.get("data", {}).get("children") or []) if c.get("data")]
    except Exception as e:
        errors.append(f"Reddit r/{subreddit} parse: {e}")
        return []


def pull_reddit():
    posts: list[dict] = []
    for sub in ("padel", "padelinternational"):
        rows = _reddit_hot(sub, limit=10)
        # Skip stickied mod posts — they're not organic content signal.
        rows = [r for r in rows if not r.get("stickied")]
        for r in rows:
            posts.append({
                "subreddit": sub,
                "title": r.get("title") or "",
                "permalink": "https://www.reddit.com" + (r.get("permalink") or ""),
                "score": int(r.get("score") or 0),
                "comments": int(r.get("num_comments") or 0),
                "url": r.get("url") or "",
                "self_text_short": (r.get("selftext") or "")[:200],
            })
    if not posts:
        return None
    posts.sort(key=lambda p: p["score"], reverse=True)
    return posts[:12]


# ---------------------------------------------------------------------------
# SerpAPI — rank tracking
# ---------------------------------------------------------------------------
def serpapi_rank(keyword: str):
    if not SERPAPI_KEY:
        return None
    qs = urllib.parse.urlencode({
        "engine": "google",
        "q": keyword,
        "api_key": SERPAPI_KEY,
        "location": "United States",
        "hl": "en",
        "gl": "us",
        "num": 20,
    })
    url = f"https://serpapi.com/search?{qs}"
    status, body = http("GET", url, timeout=40)
    if status != 200:
        errors.append(f"SerpAPI '{keyword}' HTTP {status}: {body[:120]}")
        return None
    try:
        data = json.loads(body)
    except Exception as e:
        errors.append(f"SerpAPI '{keyword}' parse: {e}")
        return None
    for r in data.get("organic_results") or []:
        link = r.get("link") or ""
        if "trypadelup.com" in link:
            return r.get("position")
    return None


def pull_ranks():
    results = {}
    for kw in KEYWORDS:
        results[kw] = serpapi_rank(kw)
        time.sleep(0.5)
    return results


# ---------------------------------------------------------------------------
# Diff vs previous report
# ---------------------------------------------------------------------------
RANK_ROW = re.compile(r"^\|\s*\d+\s*\|\s*(.+?)\s*\|\s*(—|\d+)\s*\|", re.MULTILINE)


def load_previous_ranks():
    files = sorted(REPORTS_DIR.glob("*.md"))
    prior = [p for p in files if p.stem != TODAY]
    if not prior:
        return {}
    text = prior[-1].read_text(encoding="utf-8", errors="replace")
    # Grab the Rank tracking block
    m = re.search(r"## Rank tracking.*?(?=\n## |\Z)", text, re.DOTALL)
    if not m:
        return {}
    block = m.group(0)
    out = {}
    for match in RANK_ROW.finditer(block):
        kw = match.group(1).strip()
        pos = match.group(2).strip()
        out[kw] = None if pos == "—" else int(pos)
    return out


def delta_arrow(cur, prev):
    if prev is None and cur is None:
        return "—"
    if prev is None:
        return "new" if cur is not None else "—"
    if cur is None:
        return "fell out"
    diff = prev - cur  # lower position is better
    if diff == 0:
        return "→"
    if diff > 0:
        return f"↑{diff}"
    return f"↓{-diff}"


# ---------------------------------------------------------------------------
# Report rendering
# ---------------------------------------------------------------------------
def fmt_num(n, none="(no data yet)"):
    return none if n is None else f"{n}"


def fmt_pct(x, none="—"):
    if x is None:
        return none
    return f"{x * 100:.2f}%"


def fmt_pos(x, none="—"):
    if x is None:
        return none
    return f"{x:.1f}"


def delta_metric(cur, prev, pct=False):
    if cur is None or prev is None:
        return "—"
    if pct:
        diff = (cur - prev) * 100
        return f"{'+' if diff >= 0 else ''}{diff:.2f}pt"
    diff = cur - prev
    if isinstance(cur, float) or isinstance(prev, float):
        return f"{'+' if diff >= 0 else ''}{diff:.1f}"
    return f"{'+' if diff >= 0 else ''}{int(diff)}"


def render_gsc(gsc):
    lines = [f"## Google Search Console (7d, {GSC_START} — {GSC_END})\n"]
    if not gsc or not gsc.get("totals"):
        lines.append("(no data yet)\n")
        return "\n".join(lines)
    t = gsc["totals"]
    p = gsc.get("prior") or {}
    clicks_d = delta_metric(t.get("clicks"), p.get("clicks"))
    impr_d = delta_metric(t.get("impressions"), p.get("impressions"))
    ctr_d = delta_metric(t.get("ctr"), p.get("ctr"), pct=True)
    pos_d = delta_metric(t.get("position"), p.get("position"))
    lines.append("| Metric | 7d | Δ vs prior 7d |")
    lines.append("|---|---|---|")
    lines.append(f"| Clicks | {int(t.get('clicks', 0))} | {clicks_d} |")
    lines.append(f"| Impressions | {int(t.get('impressions', 0))} | {impr_d} |")
    lines.append(f"| Avg CTR | {fmt_pct(t.get('ctr'))} | {ctr_d} |")
    lines.append(f"| Avg position | {fmt_pos(t.get('position'))} | {pos_d} |")
    lines.append("")

    lines.append("### Top queries")
    lines.append("| Query | Impressions | Clicks | CTR | Pos |")
    lines.append("|---|---|---|---|---|")
    rows = gsc.get("queries") or []
    if not rows:
        lines.append("| (none) |  |  |  |  |")
    for r in rows[:10]:
        k = (r.get("keys") or [""])[0]
        lines.append(f"| {k} | {int(r.get('impressions', 0))} | {int(r.get('clicks', 0))} | "
                     f"{fmt_pct(r.get('ctr'))} | {fmt_pos(r.get('position'))} |")
    lines.append("")

    lines.append("### Top pages")
    lines.append("| Page | Clicks | Impressions | CTR |")
    lines.append("|---|---|---|---|")
    prows = gsc.get("pages") or []
    if not prows:
        lines.append("| (none) |  |  |  |")
    for r in prows[:10]:
        k = (r.get("keys") or [""])[0].replace(SITE, "") or "/"
        lines.append(f"| {k} | {int(r.get('clicks', 0))} | {int(r.get('impressions', 0))} | "
                     f"{fmt_pct(r.get('ctr'))} |")
    lines.append("")

    lines.append("### CTR-fix candidates (≥100 impressions, <2% CTR)")
    fixes = [r for r in prows if (r.get("impressions") or 0) >= 100 and (r.get("ctr") or 0) < 0.02]
    if not fixes:
        lines.append("- none yet")
    else:
        for r in fixes:
            k = (r.get("keys") or [""])[0].replace(SITE, "") or "/"
            lines.append(f"- `{k}` — {int(r.get('impressions', 0))} impr, {fmt_pct(r.get('ctr'))} CTR, "
                         f"pos {fmt_pos(r.get('position'))} → rewrite title/description")
    lines.append("")
    return "\n".join(lines)


def render_bing(bing):
    lines = ["## Bing Webmaster (7d)\n"]
    if not bing or not bing.get("rank") or not (bing["rank"].get("d") or []):
        lines.append("(no data yet)\n")
        return "\n".join(lines)
    # Bing returns arrays in {"d": [...]} — pick last 7 days by Date
    d = bing["rank"]["d"]
    lines.append(f"- Rank/traffic rows: {len(d)} (7-day aggregates incoming; full parsing once data exists)")
    lines.append("")
    return "\n".join(lines)


def render_clarity(clarity):
    if not clarity:
        return (
            "## Microsoft Clarity (last 7 days)\n\n"
            "(no data yet — snapshots accumulate daily; first week will ramp up from 3 days)\n\n"
        )

    dates = clarity.get("snapshot_dates") or []
    has_live = "live-3d" in dates
    historical = [d for d in dates if d != "live-3d"]
    if has_live and historical:
        window_label = f"last 72h live + {len(historical)} historical day{'s' if len(historical) != 1 else ''} ({historical[0]} → {historical[-1]})"
    elif has_live:
        window_label = "last 72h (live fetch; historical snapshots accumulating daily)"
    elif historical:
        window_label = f"{len(historical)} historical day{'s' if len(historical) != 1 else ''} ({historical[0]} → {historical[-1]}) — live fetch failed"
    else:
        window_label = "no data yet"
    lines = [f"## Microsoft Clarity ({window_label})\n"]

    sessions = clarity.get("sessions") or 0
    bots = clarity.get("bot_sessions") or 0
    human = max(sessions - bots, 0)
    lines.append(f"- Sessions (human): {human if human else '(no data yet)'}")
    if bots:
        lines.append(f"- Bot sessions excluded: {bots}")

    per_day = clarity.get("per_day_sessions") or {}
    if per_day and any(per_day.values()):
        lines.append("- Sessions per window:")
        for d in sorted(per_day.keys()):
            label = "last 72h (live)" if d == "live-3d" else d
            lines.append(f"  - {label}: {per_day[d]}")

    per_url = clarity.get("per_url_sessions") or {}
    lines.append("- Top pages by sessions:")
    if per_url:
        top = sorted(per_url.items(), key=lambda x: x[1], reverse=True)[:5]
        for url, c in top:
            lines.append(f"  - `{url}` — {c} sessions")
    else:
        lines.append("  - (no Traffic/Popular Pages data in snapshots yet)")

    hotspots = clarity.get("hotspots") or {}

    def fmt_bucket(title: str, key: str):
        items = list((hotspots.get(key) or {}).items())
        if not items:
            lines.append(f"- {title}: none")
            return
        items.sort(key=lambda x: x[1], reverse=True)
        hot = ", ".join(f"`{u}` ({c})" for u, c in items[:5])
        lines.append(f"- {title}: {hot}")

    fmt_bucket("Rage-click hotspots", "rage")
    fmt_bucket("Dead-click hotspots", "dead")
    fmt_bucket("Quickback (possible bounces)", "quick")
    lines.append("")
    return "\n".join(lines)


def render_suggest(sg):
    lines = ["## Trending padel searches (Google Suggest)\n"]
    if not sg or not sg.get("current"):
        lines.append("(no data yet)\n")
        return "\n".join(lines)

    if not sg.get("had_prior"):
        lines.append("_No prior snapshot to diff against — this week's snapshot is the baseline. From next week, this section will list NEW queries that weren't suggested before._")
        lines.append("")
    elif sg.get("new_queries"):
        lines.append("### NEW this week (not in last week's snapshot)")
        lines.append("Content-idea candidates — Google is actively suggesting these to users this week.")
        lines.append("")
        # Dedupe across seeds.
        seen = set()
        for seed, q in sg["new_queries"]:
            key = q.lower()
            if key in seen:
                continue
            seen.add(key)
            lines.append(f"- **{q}**  ·  seed: `{seed}`")
        lines.append("")
    else:
        lines.append("_No new queries vs last week — suggestions are stable._")
        lines.append("")

    lines.append("### All current suggestions (by seed)")
    lines.append("")
    for seed, sugs in (sg.get("current") or {}).items():
        if not sugs:
            continue
        joined = ", ".join(f"`{s}`" for s in sugs[:8])
        lines.append(f"- **{seed}** → {joined}")
    lines.append("")
    return "\n".join(lines)


def render_yt_suggest(yt):
    lines = ["## Trending padel videos (YouTube Suggest)\n"]
    if not yt or not yt.get("current"):
        lines.append("(no data yet)\n")
        return "\n".join(lines)
    if not yt.get("had_prior"):
        lines.append("_Baseline snapshot — diff begins next week._")
        lines.append("")
    elif yt.get("new_queries"):
        lines.append("### NEW this week (YouTube)")
        lines.append("Video-content candidates — what people are actively searching on YouTube this week.")
        lines.append("")
        seen = set()
        for seed, q in yt["new_queries"]:
            key = q.lower()
            if key in seen:
                continue
            seen.add(key)
            lines.append(f"- **{q}**  ·  seed: `{seed}`")
        lines.append("")
    else:
        lines.append("_No new queries vs last week — suggestions are stable._")
        lines.append("")
    lines.append("### All current YouTube suggestions (by seed)")
    lines.append("")
    for seed, sugs in (yt.get("current") or {}).items():
        if not sugs:
            continue
        joined = ", ".join(f"`{s}`" for s in sugs[:8])
        lines.append(f"- **{seed}** → {joined}")
    lines.append("")
    return "\n".join(lines)


def render_reddit(posts):
    # Reddit deferred — their Data API now requires explicit approval ahead of
    # app creation, which isn't worth the friction for ~2 calls/week of internal
    # research. Section is kept dormant: code lights up automatically if
    # REDDIT_CLIENT_ID/SECRET ever get configured.
    if not posts and not (REDDIT_CLIENT_ID and REDDIT_CLIENT_SECRET):
        return ""  # Hide the section entirely while no credentials are set.
    lines = ["## Reddit — r/padel + r/padelinternational hot posts\n"]
    if not posts:
        lines.append("(no data — see Notes / errors)\n")
        return "\n".join(lines)
    lines.append("Sorted by upvotes. Use as content-idea signal — pain points, questions, debates the community cares about right now.")
    lines.append("")
    lines.append("| Sub | Score | Comments | Title |")
    lines.append("|---|---|---|---|")
    for p in posts:
        title = (p["title"] or "").replace("|", "\\|")[:120]
        lines.append(f"| r/{p['subreddit']} | {p['score']} | {p['comments']} | [{title}]({p['permalink']}) |")
    lines.append("")
    return "\n".join(lines)


def render_ranks(ranks, prior_ranks):
    lines = ["## Rank tracking (Google, United States)\n"]
    lines.append("| # | Keyword | Pos | Δ |")
    lines.append("|---|---|---|---|")
    for i, kw in enumerate(KEYWORDS, 1):
        pos = ranks.get(kw)
        arrow = delta_arrow(pos, prior_ranks.get(kw))
        lines.append(f"| {i} | {kw} | {pos if pos is not None else '—'} | {arrow} |")
    lines.append("")
    lines.append("(Use `—` when not in top 20.)")
    lines.append("")
    return "\n".join(lines)


def render_actions(gsc, ranks):
    actions: list[str] = []

    fixes = []
    if gsc and gsc.get("pages"):
        for r in gsc["pages"]:
            if (r.get("impressions") or 0) >= 100 and (r.get("ctr") or 0) < 0.02:
                fixes.append(r)

    if fixes:
        top = fixes[0]
        k = (top.get("keys") or [""])[0].replace(SITE, "") or "/"
        actions.append(f"Rewrite title/description on `{k}` — {int(top.get('impressions', 0))} "
                       f"impressions but only {fmt_pct(top.get('ctr'))} CTR.")

    ranked = [(kw, p) for kw, p in ranks.items() if p is not None]
    if ranked:
        ranked.sort(key=lambda x: x[1])
        best = ranked[0]
        actions.append(f"Push on '{best[0]}' (currently position {best[1]}) — closest to page 1, biggest next win.")

    if not ranked and not fixes:
        actions = [
            "Submit the sitemap (`https://www.trypadelup.com/sitemap.xml`) to Google Search Console + Bing Webmaster + Yandex if not yet done.",
            "Use Search Console URL Inspection to request indexing of the home + 4 hubs + highest-priority child pages.",
            "Seed backlinks: submit the site to padel sport directories (FIP, Padel News, Playtomic-adjacent blogs).",
        ]

    while len(actions) < 3:
        actions.append("Review last week's data and pick one under-performing page to refresh.")

    lines = ["## Actionable items\n"]
    for i, a in enumerate(actions[:3], 1):
        lines.append(f"{i}. {a}")
    lines.append("")
    return "\n".join(lines)


def render_errors():
    if not errors:
        return "## Notes / errors\n\nnone.\n"
    lines = ["## Notes / errors\n"]
    for e in errors:
        lines.append(f"- {e}")
    lines.append("")
    return "\n".join(lines)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main():
    prior_ranks = load_previous_ranks()

    print("Pulling GSC...")
    gsc = pull_gsc()
    print("Pulling Bing...")
    bing = pull_bing()
    print("Pulling Clarity...")
    clarity = pull_clarity()
    print("Pulling SerpAPI ranks...")
    ranks = pull_ranks()
    print("Pulling Google Suggest...")
    suggest = pull_suggest()
    print("Pulling YouTube Suggest...")
    yt_suggest = pull_yt_suggest()
    print("Pulling Reddit...")
    reddit = pull_reddit()

    front = (
        "---\n"
        f"date: {TODAY}\n"
        f"period: {WEEK_AGO} — {TODAY}\n"
        f"site: {SITE}\n"
        "---\n\n"
    )

    headline_bits = []
    if gsc and gsc.get("totals") and gsc["totals"].get("clicks"):
        headline_bits.append(f"GSC clicks: {int(gsc['totals']['clicks'])}")
    ranked = [p for p in ranks.values() if p is not None]
    if ranked:
        headline_bits.append(f"{len(ranked)}/{len(KEYWORDS)} tracked keywords in top 20")
    headline = ", ".join(headline_bits) if headline_bits else "Data collection running; nothing ranked yet — baseline period."

    body = (
        f"# trypadelup.com SEO — Week of {TODAY}\n\n"
        f"## Headline\n\n{headline}.\n\n"
        f"{render_gsc(gsc)}\n"
        f"{render_bing(bing)}\n"
        f"{render_clarity(clarity)}\n"
        f"{render_ranks(ranks, prior_ranks)}\n"
        f"{render_suggest(suggest)}\n"
        f"{render_yt_suggest(yt_suggest)}\n"
        f"{render_reddit(reddit)}\n"
        f"{render_actions(gsc, ranks)}\n"
        f"{render_errors()}"
    )

    out = REPORTS_DIR / f"{TODAY}.md"
    out.write_text(front + body, encoding="utf-8")
    print(f"Wrote {out}")
    # Fail the job if a critical credential was missing; otherwise succeed
    critical = [e for e in errors if e.startswith("Missing env var")]
    if critical:
        print("CRITICAL:", *critical, sep="\n  ")
        sys.exit(2)


if __name__ == "__main__":
    main()
