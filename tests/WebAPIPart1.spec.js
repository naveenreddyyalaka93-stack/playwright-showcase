import { test, expect, request } from '@playwright/test';
import { APIUtils } from './../utils/APIUtils.js';


const loginPayLoad = { userEmail: "naveenreddy098@gmail.com", userPassword: "N@veen1993" };
const orderPayLoad = { orders: [{ country: "India", productOrderedId: "68a961959320a140fe1ca57e" }] };
let response;

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext, loginPayLoad);
    response = await apiUtils.createOrder(orderPayLoad);

});


test('Client App login through api', async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, response.token);
    await page.goto("https://rahulshettyacademy.com/client");
    await page.getByRole("listitem").getByRole("button", { name: "ORDERS" }).click();
    await page.locator("tbody tr").first().waitFor();
    await page.locator("tbody tr").filter({ hasText: response.orderId }).getByRole("button", { name: "View" }).click();
    await expect(page.getByText("Thank you for Shopping With Us")).toBeVisible();
    const orderIdDetails = await page.locator(".col-text").textContent();
    console.log("OrderId details on history page:", orderIdDetails);
    expect(response.orderId.includes(orderIdDetails)).toBeTruthy();

}); 