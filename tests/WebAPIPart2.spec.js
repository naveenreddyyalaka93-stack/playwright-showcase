import { test, expect, request } from '@playwright/test';
const email = "naveenreddy098@gmail.com";
let webContext;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill("N@veen1993");
    await page.getByRole("button", { name: "Login" }).click();
    await page.locator(".card-body").first().waitFor();
    await context.storageState({ path: 'state.json' });
    webContext = await browser.newContext({ storageState: "state.json" });
    await page.close();

});

test('Login page and checkout and orderid validation1', async () => {

    const page = await webContext.newPage()

    const productName = "ADIDAS ORIGINAL";
    const products = page.locator(".card-body");



    await page.goto("https://rahulshettyacademy.com/client");
    const firstProduct = await page.locator(".card-body b").first().textContent();
    console.log(firstProduct);
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    await page.locator(".card-body").filter({ hasText: productName }).getByRole("button", { name: " Add To Cart" }).click();
    await page.getByRole("listitem").getByRole("button", { name: "Cart" }).click();
    await page.locator("div li").first().waitFor();
    await expect(page.getByText(productName)).toBeVisible();
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.getByPlaceholder("Select Country").pressSequentially("ind");
    await page.getByRole("button", { name: "India" }).last().click();
    await expect(page.locator(".user__name [type='text']").first()).toHaveText("naveenreddy098@gmail.com");
    await page.getByText("PLACE ORDER").click();
    await expect(page.getByText("Thankyou for the order.")).toBeVisible();
    const rawOrderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log("Raw:", rawOrderId);
    const orderId = rawOrderId?.match(/[a-f0-9]{24}/)?.[0];
    console.log("Cleaned Order Id:", orderId);
    await page.getByRole("listitem").getByRole("button", { name: "ORDERS" }).click();
    await page.locator("tbody tr").first().waitFor();
    await page.locator("tbody tr").filter({ hasText: orderId }).getByRole("button", { name: "View" }).click();
    await expect(page.getByText("Thank you for Shopping With Us")).toBeVisible();
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();

});

test('Login page and checkout and orderid validation2', async () => {

    const page = await webContext.newPage();

    await page.goto("https://rahulshettyacademy.com/client");
    const firstProduct = await page.locator(".card-body b").first().textContent();
    console.log(firstProduct);
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

});