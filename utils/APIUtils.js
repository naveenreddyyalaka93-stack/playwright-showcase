class APIUtils {

    constructor(apiContext, loginPayLoad) {
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;

    }
    async getToken() {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.loginPayLoad
            }
        );
        const loginResponseJson = await loginResponse.json();
        console.log(loginResponseJson);
        const token = loginResponseJson.token;
        console.log("Login token:", token);
        return token;
    }

    async createOrder(orderPayLoad) {
        let response = {};
        response.token = await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayLoad,
                headers: {
                    "authorization": response.token,
                    "content-type": "application/json"
                }
            }
        );

        const orderResponseJson = await orderResponse.json();
        const orderId = await orderResponseJson.orders[0];
        response.orderId = orderId;
        console.log('order id through api:', orderId);

        return response;
    }
};


export { APIUtils };

