import { test, expect, request } from '@playwright/test';

test('Security test request intercept', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder("email@example.com").fill("naveenreddy098@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("N@veen1993");
    await page.getByRole("button", { name: "Login" }).click();
    await page.locator(".card-body").first().waitFor();
    await page.getByRole("listitem").getByRole("button", { name: "ORDERS" }).click();
    await page.locator("tbody tr").first().waitFor();
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*", route =>
        route.continue({ url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6" })
    );
    await page.getByRole('button', { name: 'View' }).first().click();
    const errorMessage = await page.locator(".blink_me").textContent();
    console.log(errorMessage);
    expect(errorMessage).toBe("You are not authorize to view this order");

});

test("abort test login practice page without css", async ({ page }) => {

    page.route('**/*.css', route => route.abort());
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await page.getByRole('radio', { name: ' User' }).check();
    await page.getByRole("button", { name: "Okay" }).click();
    await expect(page.getByRole('radio', { name: ' User' })).toBeChecked();
    await page.locator("select.form-control").selectOption('consult');
    await page.getByRole('checkbox', { name: ' I Agree to the terms and conditions' }).check();
    await expect(page.getByRole('checkbox', { name: 'I Agree to the terms and conditions' })).toBeChecked();
    await page.getByRole('button', { name: 'Sign In' }).click();
    const errorMessage = page.locator("[style*='block']");
    await expect(errorMessage).toHaveText("Incorrect username/password.");
    await page.locator("#username").fill("");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator(".card-body a").first().waitFor();
    const productTitles = await page.locator(".card-body a").allTextContents();
    console.log(productTitles[0]);
    console.log(await page.locator(".card-body a").first().textContent());
    console.log(await page.locator(".card-body a").nth(1).textContent());
});

test("abort test login practice page without images", async ({ page }) => {

    page.route('**/*.{png,jpeg,jpg}', route => route.abort());
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await page.getByRole('radio', { name: ' User' }).check();
    await page.getByRole("button", { name: "Okay" }).click();
    await expect(page.getByRole('radio', { name: ' User' })).toBeChecked();
    await page.locator("select.form-control").selectOption('consult');
    await page.getByRole('checkbox', { name: ' I Agree to the terms and conditions' }).check();
    await expect(page.getByRole('checkbox', { name: 'I Agree to the terms and conditions' })).toBeChecked();
    await page.getByRole('button', { name: 'Sign In' }).click();
    const errorMessage = page.locator("[style*='block']");
    await expect(errorMessage).toHaveText("Incorrect username/password.");
    await page.locator("#username").fill("");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator(".card-body a").first().waitFor();
    console.log(await page.locator(".card-body a").first().textContent());
    //console.log(await page.locator(".card-body a").nth(1).textContent());
    const productTitles = await page.locator(".card-body a").allTextContents();
    console.log("product name:" ,productTitles[0]);
});

test("abort test login practice page without request and response calls", async ({ page }) => {

    page.on('request', request => console.log(request.url()));
    page.on('response', response => console.log(response.url(), response.status()));
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await page.getByRole('radio', { name: ' User' }).check();
    await page.getByRole("button", { name: "Okay" }).click();
    await expect(page.getByRole('radio', { name: ' User' })).toBeChecked();
    await page.locator("select.form-control").selectOption('consult');
    await page.getByRole('checkbox', { name: ' I Agree to the terms and conditions' }).check();
    await expect(page.getByRole('checkbox', { name: 'I Agree to the terms and conditions' })).toBeChecked();
    await page.getByRole('button', { name: 'Sign In' }).click();
    const errorMessage = page.locator("[style*='block']");
    await expect(errorMessage).toHaveText("Incorrect username/password.");
    await page.locator("#username").fill("");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator(".card-body a").first().waitFor();
    console.log(await page.locator(".card-body a").first().textContent());
    //console.log(await page.locator(".card-body a").nth(1).textContent());
    const productTitles = await page.locator(".card-body a").allTextContents();
    console.log("product name:" ,productTitles[0]);

});