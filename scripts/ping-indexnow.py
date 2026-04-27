#!/usr/bin/env python3
"""
IndexNow pinger for trypadelup.com.

Reads the live sitemap.xml, extracts URLs, and POSTs them to IndexNow.
Bing, Yandex, and other IndexNow-participating engines re-crawl within
hours instead of waiting for their normal cycle.

Triggered by GitHub Action after each push to main.
"""

import json
import re
import sys
import urllib.error
import urllib.request

HOST = "www.trypadelup.com"
SITE = f"https://{HOST}"
KEY = "f4a8b2c9d1e7f3a6b5c8d4e9f1a7b3c6"  # gitleaks:allow — IndexNow keys are public
KEY_LOCATION = f"{SITE}/{KEY}.txt"
SITEMAP_URL = f"{SITE}/sitemap.xml"
INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"


def fetch(url: str, timeout: int = 30) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "PadelUp-IndexNow/1.0"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode("utf-8", errors="replace")


def extract_urls(sitemap_xml: str) -> list[str]:
    return re.findall(r"<loc>(https?://[^<]+)</loc>", sitemap_xml)


def post(url: str, body: dict, timeout: int = 30) -> tuple[int, str]:
    data = json.dumps(body).encode()
    req = urllib.request.Request(
        url,
        method="POST",
        data=data,
        headers={
            "Content-Type": "application/json; charset=utf-8",
            "Accept": "application/json",
            "User-Agent": "PadelUp-IndexNow/1.0",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.status, r.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", errors="replace")
    except Exception as e:
        return 0, f"exception: {e}"


def main() -> int:
    print(f"Fetching sitemap from {SITEMAP_URL}")
    try:
        sitemap = fetch(SITEMAP_URL)
    except Exception as e:
        print(f"ERROR fetching sitemap: {e}")
        return 1

    urls = extract_urls(sitemap)
    if not urls:
        print("ERROR: no URLs found in sitemap")
        return 1

    print(f"Found {len(urls)} URLs in sitemap")

    # IndexNow limits: 10,000 URLs per request, no rate limit if under that.
    body = {
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    }

    print(f"Submitting {len(urls)} URLs to IndexNow")
    status, response = post(INDEXNOW_ENDPOINT, body)

    # IndexNow success codes: 200 OK, 202 Accepted (most common — queued)
    if status in (200, 202):
        print(f"OK (HTTP {status}): IndexNow accepted {len(urls)} URLs")
        return 0
    else:
        print(f"FAILED (HTTP {status}): {response[:500]}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
