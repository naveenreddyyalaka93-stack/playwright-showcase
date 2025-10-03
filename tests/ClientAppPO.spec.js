import { test, expect } from '@playwright/test';
import { POManager } from '../pageobjects/POManager.js';
import testData from "../utils/placeorderTestData.json" assert { type: "json" };


for(const data of testData) {
    test(`Login, checkout, and verify order for ${data.productName}`, async ({ page }) => {

        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(data.useremail, data.password);
        await expect(page).toHaveURL(/.*client/);

        const dashboardPage = poManager.getDashboardPage();
        await dashboardPage.searchProductAddtoCart(data.productName);
        await dashboardPage.navigateToCart();

        const checkoutPage = poManager.getCheckoutPage();
        await expect(page.getByText(data.productName)).toBeVisible();
        await checkoutPage.clickOnCheckout();

        const placeOrderPage = poManager.getPlaceOrderPage();
        await placeOrderPage.selectCountry("ind");
        await placeOrderPage.validateUserEmail(data.useremail);
        await placeOrderPage.placeOrder();

        const orderConfirmationPage = poManager.getOrderConfirmationPage();
        await orderConfirmationPage.validateOrderSuccessMessage();
        const orderId = await orderConfirmationPage.extractOrderId();

        await orderConfirmationPage.navigateToOrdersHistory();

        const orderhistoryPage = poManager.getOrderhistoryPage();
        await orderhistoryPage.viewOrderById(orderId);
        await orderhistoryPage.validateConfirmationMessage();
        const orderIdDetails = await orderhistoryPage.extractOrderIdDetails();

        expect(orderIdDetails).toBe(orderId);
    });
};

