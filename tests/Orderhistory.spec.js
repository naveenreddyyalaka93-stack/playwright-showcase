import { test, expect } from '@playwright/test';

test('Login page and checkout and orderid validation', async ({ page }) => {
    const productName = "ADIDAS ORIGINAL";
    const products = page.locator(".card-body");
    const email = "naveenreddy098@gmail.com";

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("N@veen1993");
    await page.getByText("Login").click();
    await page.locator(".card-body").first().waitFor();
    const firstProduct = await page.locator(".card-body b").first().textContent();
    console.log(firstProduct);
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();

    for (let i = 0; i < count; ++i) {
        if (await products.nth(i).locator("b").textContent() === productName) {
            await products.nth(i).locator("text =  Add To Cart").click();
            break;
        }
    }

    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    //await expect(page.locator("h3")).toHaveText("ADIDAS ORIGINAL");
    const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
    expect(bool).toBeTruthy();
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.getByPlaceholder("Select Country").pressSequentially("ind");
    const dropDown = page.locator(".ta-results");
    await dropDown.waitFor();
    const optionsCount  = await dropDown.locator("button").count();

    for(let i=0;i<optionsCount;i++)
    {
        const text = await dropDown.locator("button").nth(i).textContent()
        if(text === " India")
        {
            await dropDown.locator("button").nth(i).click();
            break;

        }
    };

    await expect(page.locator(".user__name [type='text']").first()).toHaveText("naveenreddy098@gmail.com");
    await page.locator(".action__submit").click();
    await expect(page.locator("h1")).toHaveText("Thankyou for the order.");












});