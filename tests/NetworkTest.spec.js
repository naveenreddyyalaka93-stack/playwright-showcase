import { test, expect, request } from '@playwright/test';
import { APIUtils } from '../utils/APIUtils.js';   // ✅ fixed path (no ./ before ../)

const loginPayLoad = { userEmail: "naveenreddy098@gmail.com", userPassword: "N@veen1993" };
const orderPayLoad = { orders: [{ country: "India", productOrderedId: "68a961959320a140fe1ca57e" }] };
let response;
const fakePayLoadOrders = { data: [], message: "No Orders" };

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext, loginPayLoad);
  response = await apiUtils.createOrder(orderPayLoad);
});

test('route.fulfill - Client App login through api', async ({ page }) => {
  // Inject token into localStorage
  await page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, response.token);

  await page.goto("https://rahulshettyacademy.com/client");

  // Intercept and mock API
  await page.route("**/api/ecom/order/get-orders-for-customer/*", async route => {
    const originalResponse = await route.fetch();   // fetch original request
    await route.fulfill({
      response: originalResponse,
      body: JSON.stringify(fakePayLoadOrders),
    });
  });

  await page.getByRole("listitem").getByRole("button", { name: "ORDERS" }).click();
  await page.waitForResponse("**/api/ecom/order/get-orders-for-customer/*");

  console.log(await page.locator(".mt-4").textContent());
});
