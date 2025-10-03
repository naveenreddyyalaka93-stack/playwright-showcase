import { test, expect } from '@playwright/test';

test('First Playwright test', async ({ page }) => {
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://playwright.dev");

});

test('First Playwright second', async ({ page }) => {
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://www.google.com/");
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle(/google/i);
    const url = page.url();
    console.log(url);
    await expect(page).toHaveURL(/Google/i);;

});

test("test login practice page grab error text", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacadem");
    await page.locator("[type='password']").fill("learning");
    await page.getByRole('button', { name: 'Sign In' }).click();
    //const errorMessage = page.locator("[style='display: block;']");
    const errorMessage = page.locator("[style*='block']");
    await expect(errorMessage).toHaveText("Incorrect username/password.");
    const erroerMessageText = await errorMessage.textContent();
    console.log(erroerMessageText);

});

test("test login practice page", async ({ page }) => {
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

test("rahulshettyacademy.com registration page", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/register");

    const randomFirstName = `User${Math.floor(Math.random() * 1000)}`;
    const randomLastName = `Test${Math.floor(Math.random() * 1000)}`;
    const randomEmail = `user${Date.now()}@example.com`;
    const randomMobile = `9${Math.floor(100000000 + Math.random() * 900000000)}`;

    await page.getByPlaceholder("First Name").fill(randomFirstName);
    await page.getByPlaceholder("Last Name").fill(randomLastName);
    await page.getByPlaceholder("email@example.com").fill(randomEmail);
    await page.locator("#userMobile").fill(randomMobile);
    await page.locator(".custom-select").selectOption({ label: "Engineer" });
    await page.getByRole("radio", { name: 'Male', exact: true }).check();
    await page.getByPlaceholder("Passsword").first().fill("Y@laka1993");
    await page.getByPlaceholder("Confirm Passsword").fill("Y@laka1993");
    await page.getByRole('checkbox', { label: " I am 18 year or Older " }).check();
    await page.locator("#login").click();
});

test('Login page and checkout and orderid validation', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("naveenreddy098@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("N@veen1993");
    await page.getByText("Login").click();
    await page.locator(".card-body").first().waitFor();
    const firstProduct = await page.locator(".card-body b").first().textContent();
    console.log(firstProduct);
    const prodTitles = await page.locator(".card-body b").allTextContents();
    console.log(prodTitles);

});

test("test login practice page blinking text", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const blinkingLink = await page.getByRole("link", { name: 'Free Access to InterviewQues/' });
    await expect(blinkingLink).toHaveAttribute("class", "blinkingText");
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        blinkingLink.click()
    ]);
    await expect(newPage.locator(".red")).toBeVisible();
    const text = await newPage.locator(".red").textContent();
    console.log(text);
    const arrayText = text.split("@");
    console.log(arrayText);
    const domain = arrayText[1].split(" ")[0]?.trim();
    console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
});

test("playwright special locators", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    //await page.getByPlaceholder("Password").fill("N@veen1993");
    await page.getByLabel("Password").fill("N@veen1993");
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();
    const vis = await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    expect(vis).toBeTruthy();
    await page.getByRole("link", { name: "Shop" }).click();
    await page.locator("app-card").filter({ hasText: "Samsung Note 8" }).getByRole("button").click();

});

test("youtube special locators", async ({ page }) => {
    await page.goto("https://www.youtube.com/");
    await page.getByRole("combobox", { name: "Search" }).fill(' They call him OG Trailer Analysis');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.getByTitle('They call him OG Trailer Analysis', { exact: true }).click();
    await page.goto('https://www.youtube.com/');
    await page.pause();

});




