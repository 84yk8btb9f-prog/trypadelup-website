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
def pull_clarity():
    if not CLARITY_TOKEN:
        return None
    url = "https://www.clarity.ms/export-data/api/v1/project-live-insights?numOfDays=3&dimension1=URL"
    status, body = http("GET", url, headers={"Authorization": f"Bearer {CLARITY_TOKEN}"})
    print(f"Clarity debug: status={status} bodylen={len(body) if body else 0} first400={(body or '')[:400]}")
    if status != 200:
        errors.append(f"Clarity HTTP {status}: {body[:200]}")
        return None
    try:
        return json.loads(body)
    except Exception as e:
        errors.append(f"Clarity parse: {e}")
        return None


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
    lines = ["## Microsoft Clarity (last 3 days)\n"]
    if not clarity:
        lines.append("(no data yet)\n")
        return "\n".join(lines)

    # Expected shape: list of {metricName, information: [{Url, SessionsCount, ...}]}
    sessions_total = 0
    per_url_sessions: dict[str, int] = {}
    rage: list[tuple[str, int]] = []
    dead: list[tuple[str, int]] = []
    quick: list[tuple[str, int]] = []

    if isinstance(clarity, list):
        for m in clarity:
            name = m.get("metricName") or ""
            for info in m.get("information") or []:
                url = info.get("Url") or info.get("URL") or "?"
                if name == "Sessions":
                    c = int(info.get("SessionsCount") or 0)
                    sessions_total += c
                    per_url_sessions[url] = per_url_sessions.get(url, 0) + c
                for key, bucket in (("RageClicksCount", rage),
                                    ("DeadClicksCount", dead),
                                    ("QuickbackClicksCount", quick)):
                    v = info.get(key)
                    if v:
                        bucket.append((url, int(v)))

    lines.append(f"- Sessions: {sessions_total if sessions_total else '(no data yet)'}")
    lines.append("- Top pages by sessions:")
    if per_url_sessions:
        top = sorted(per_url_sessions.items(), key=lambda x: x[1], reverse=True)[:5]
        for url, c in top:
            lines.append(f"  - `{url}` — {c} sessions")
    else:
        lines.append("  - (no data yet)")

    def fmt_bucket(title, items):
        if not items:
            lines.append(f"- {title}: none")
            return
        items.sort(key=lambda x: x[1], reverse=True)
        hot = ", ".join(f"`{u}` ({c})" for u, c in items[:5])
        lines.append(f"- {title}: {hot}")

    fmt_bucket("Rage-click hotspots", rage)
    fmt_bucket("Dead-click hotspots", dead)
    fmt_bucket("Quickback (possible bounces)", quick)
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
