class DashboardPage
{
    constructor(page)
    {
        this.products = page.locator(".card-body");
        this.productText = page.locator(".card-body b");
        this.cart = page.getByRole("listitem").getByRole("button", {name:"Cart"});

    }

    async searchProductAddtoCart(productName)
    {
            await this.products.first().waitFor();
            const firstProduct = await this.productText.first().textContent();
            console.log(firstProduct);
            const titles = await this.productText.allTextContents();
            console.log(titles);
            await this.products.filter({hasText:productName}).getByRole("button", {name:" Add To Cart"}).click();
            
    }
    async navigateToCart()
    {
        await this.cart.click();
    }
}

export {DashboardPage};