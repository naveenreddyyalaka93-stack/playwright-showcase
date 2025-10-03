import { LoginPage } from './LoginPage';
import { DashboardPage } from './DashboardPage';
import { CheckoutPage } from './CheckoutPage';
import { PlaceOrderPage } from './PlaceOrderPage';
import { OrderConfirmationPage } from './OrderConfirmationPage';
import { OrderhistoryPage } from './OrderhistoryPage';

class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.placeOrderPage = new PlaceOrderPage(this.page);
        this.orderConfirmationPage = new OrderConfirmationPage(this.page);
        this.orderhistoryPage = new OrderhistoryPage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }
    getDashboardPage() {
        return this.dashboardPage;
    }
    getCheckoutPage() {
        return this.checkoutPage;
    }
    getPlaceOrderPage() {
        return this.placeOrderPage;
    }
    getOrderConfirmationPage() {
        return this.orderConfirmationPage;
    }
    getOrderhistoryPage() {
        return this.orderhistoryPage;
    }
}

export { POManager };