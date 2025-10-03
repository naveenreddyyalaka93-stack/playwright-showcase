import { test, expect } from '@playwright/test';

//test.describe.configure({mode:"parallel"});
test.describe.configure({mode:"serial"});

test('Popup validations', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
    // await page.goBack();
    // await page.goForward();
    // await page.goBack();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    //page.on("dialog", dialog => dialog.accept());
    //await page.locator("#alertbtn").click();
    await page.locator("#confirmbtn").click();
    page.on("dialog", dialog => dialog.dismiss());

    await page.locator("#mousehover").hover();

    const framesPage = page.frameLocator("#courses-iframe");
    await framesPage.locator("li a[href='lifetime-access']:visible").click();
    const textCheck = await framesPage.locator("div.text h2").textContent();
    console.log(textCheck);
    console.log(textCheck.split(" ")[1]);


});

test('Screenshot & visual comparison', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#displayed-text").screenshot({path:'partialscreenshot.png'});
    await page.locator("#hide-textbox").click();
    await page.screenshot({path:'screenshot.png'});
    await expect(page.locator("#displayed-text")).toBeHidden();
    

});

// screenshot -store --> screenshot --> 

test('visula testing comparing screenshot', async ({page}) => {
    await page.goto("https://www.google.com/");
    expect(await page.screenshot()).not.toMatchSnapshot('landing.png');

});