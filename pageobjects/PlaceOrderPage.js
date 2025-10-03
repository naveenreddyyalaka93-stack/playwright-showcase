import {expect} from '@playwright/test';

class PlaceOrderPage
{
    constructor(page)
    {
        this.page = page;
        this.countryInput = page.getByPlaceholder("Select Country");
        this.countryButton = page.getByRole("button", {name:"India"}).last();
        this.userEmailField = page.locator(".user__name [type='text']").first();
        this.placeOrderButton = page.getByText("PLACE ORDER");

    }

    async selectCountry(prefix)
    {
            await this.countryInput.pressSequentially(prefix);
            await this.countryButton.click();

    }
    async validateUserEmail(useremail)
    {
        await expect(this.userEmailField).toHaveText(useremail);
    }
    async placeOrder()
    {
         await this.placeOrderButton.click();
    }
}

export {PlaceOrderPage};