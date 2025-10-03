class CheckoutPage {
    constructor(page) {
        this.cartList = page.locator("div li");
        this.checkOutbutton = page.getByRole('button', { name: 'Checkout' });
    }
    async clickOnCheckout() {
        await this.cartList.first().waitFor();
        await this.checkOutbutton.click();
    }
};

export {CheckoutPage};