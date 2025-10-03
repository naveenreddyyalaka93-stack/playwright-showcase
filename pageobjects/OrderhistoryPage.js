import { expect } from '@playwright/test';
class OrderhistoryPage {
    constructor(page) {
        this.page = page;
        this.ordersTable = page.locator("tbody tr");
        this.confirmationMessage = page.getByText("Thank you for Shopping With Us");
        this.orderIdDetails = page.locator(".col-text");
    }
    async viewOrderById(orderId) {
        await this.ordersTable.first().waitFor();
        await this.ordersTable.filter({ hasText: orderId }).getByRole("button", { name: "View" }).click();
    }
    async validateConfirmationMessage() {
        await expect(this.confirmationMessage).toBeVisible();
    }
    async extractOrderIdDetails() {
        return await this.orderIdDetails.textContent();
    }
}


export { OrderhistoryPage };


