#!/usr/bin/env python3
"""
Daily Microsoft Clarity snapshot.
Runs in GitHub Actions every morning. Pulls the last-24h window (numOfDays=1)
and writes the raw response to seo-reports/clarity-daily/YYYY-MM-DD.json.

Clarity API caps at 1/2/3 days per call with 10 calls/project/day. To build a
rolling 7-day view, we accumulate 1-day snapshots and aggregate in the weekly
report.
"""

import json
import os
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = REPO_ROOT / "seo-reports" / "clarity-daily"
OUT_DIR.mkdir(parents=True, exist_ok=True)

CLARITY_TOKEN = os.environ.get("CLARITY_TOKEN", "")
if not CLARITY_TOKEN:
    print("Missing CLARITY_TOKEN env var", file=sys.stderr)
    sys.exit(2)

TODAY = datetime.now(timezone.utc).strftime("%Y-%m-%d")
URL = "https://www.clarity.ms/export-data/api/v1/project-live-insights?numOfDays=1&dimension1=URL"

req = urllib.request.Request(URL, headers={"Authorization": f"Bearer {CLARITY_TOKEN}"})
try:
    with urllib.request.urlopen(req, timeout=30) as r:
        status = r.status
        body = r.read().decode("utf-8", errors="replace")
except urllib.error.HTTPError as e:
    status = e.code
    body = e.read().decode("utf-8", errors="replace")
except Exception as e:
    print(f"Clarity fetch failed: {e}", file=sys.stderr)
    sys.exit(1)

if status != 200:
    print(f"Clarity HTTP {status}: {body[:300]}", file=sys.stderr)
    sys.exit(1)

try:
    data = json.loads(body)
except Exception as e:
    print(f"Clarity parse failed: {e}", file=sys.stderr)
    sys.exit(1)

snapshot = {
    "captured_at": datetime.now(timezone.utc).isoformat(),
    "window": "last 24h (numOfDays=1)",
    "metrics": data,
}

out_path = OUT_DIR / f"{TODAY}.json"
out_path.write_text(json.dumps(snapshot, indent=2), encoding="utf-8")
print(f"Wrote {out_path} ({len(body)} bytes, {len(data)} metrics)")
