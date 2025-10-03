# Bug: `./ci.sh` fails on fresh machines due to missing browser binaries

**Impact:** First-time contributors or reviewers cannot run tests without manually installing Playwright browsers, breaking CI flow.

**Steps to Reproduce:**
1. Clone the repository on a clean machine.
2. Run `npm install` followed by `./ci.sh`.
3. Observe error: `Error: browser not found`.

**Expected Behavior:** `./ci.sh` should install required browsers automatically.

**Actual Behavior:** Script fails unless `npx playwright install` is run manually.

**Fix Applied:** Updated `ci.sh` to include:
```bash
npx playwright install --with-deps