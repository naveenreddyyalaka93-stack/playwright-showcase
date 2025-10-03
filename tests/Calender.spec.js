import { test, expect } from '@playwright/test';

test('Calender validation on greenkart page', async ({ page }) => {

    const monthNumber = "6"; // June
    const date = "15";
    const year = "2026";
    const expectedList = [monthNumber,date,year];


    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label__labelText").click();
    await page.locator(".react-calendar__navigation__label__labelText").click();
    await page.getByRole("button", { name: year }).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber) - 1).click();
    await page.locator(`//abbr[text()='${ date }']`).click();
    const selectedDate = await page.locator(".react-date-picker__inputGroup").textContent();
    console.log("Selected Date:", selectedDate);


    const inputs =  page.locator(".react-date-picker__inputGroup__input");

    for (let i=0; i<expectedList.length ; i++)
    {
        const value = await inputs.nth(i).inputValue();
        expect(value).toEqual(expectedList[i]);
    }
});