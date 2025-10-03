# Bug 2 — README missing Playwright browser install step

**Impact:** New user runs `./ci.sh` and fails due to missing browsers.  

**Repro:**
1. Clone repo on new machine.
2. Run `./ci.sh` → Error: browser not found.  

**Fix:** Added `npx playwright install --with-deps` inside `ci.sh`.
