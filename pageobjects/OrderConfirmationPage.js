import {expect} from '@playwright/test';
class OrderConfirmationPage {
    constructor(page) {
        this.page = page;
        this.confirmationMessage = page.getByText("Thankyou for the order.");
        this.orderIdLocator = page.locator(".em-spacer-1 .ng-star-inserted");
        this.ordersButton = page.getByRole("listitem").getByRole("button", { name: "ORDERS" });

    }

    async validateOrderSuccessMessage() {
        await expect(this.confirmationMessage).toBeVisible();
    }
    async extractOrderId() {
        const rawOrderId = await this.orderIdLocator.textContent();
        console.log("Raw:", rawOrderId);
        const orderId = rawOrderId?.match(/[a-f0-9]{24}/)?.[0];
        console.log("Cleaned Order Id:", orderId);
        return orderId;
    }
    async navigateToOrdersHistory()
    {
         await this.ordersButton.click();
    }
}


export {OrderConfirmationPage};