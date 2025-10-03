class LoginPage {
    constructor(page) {
        this.page = page;
        this.userName = page.getByPlaceholder("email@example.com");
        this.passWord = page.getByPlaceholder("enter your passsword");
        this.signInbutton = page.getByRole("button", { name: "Login" });
    }
    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }
    async validLogin(useremail, password) {
        await this.userName.fill(useremail);
        await this.passWord.fill(password);
        await this.signInbutton.click();
    }
}

export {LoginPage};