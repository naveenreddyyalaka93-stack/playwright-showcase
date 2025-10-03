# Bug: Newly placed order not visible in Order History without manual refresh

**Impact:** Users may assume their order wasn't placed successfully, leading to confusion or duplicate attempts.

**Steps to Reproduce:**
1. Login and place an order using valid credentials.
2. After seeing the success message, navigate to the Order History page.
3. Observe that the newly placed order is missing.
4. Manually refresh the page.

**Expected Behavior:** The latest order should appear immediately in the Order History without requiring a refresh.

**Actual Behavior:** The order only appears after manually refreshing the page.

**Environment:** Chrome (Playwright), Windows 11, Node.js v18.x

**Suggested Fix:** Trigger a data refresh or re-fetch on navigation to Order History.