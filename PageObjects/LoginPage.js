//Namachivaya

class LoginPage {


    constructor(page) {

        this.page = page;

        this.username = page.getByPlaceholder('email@example.com');
        this.password = page.getByPlaceholder('enter your passsword');
        this.signInbutton = page.getByRole('button', { name: 'Login' });



    }


    async goto() {

        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    }


    async validLogin() {

        await this.username.fill('gowtham.shanthi@gmail.com');
        await this.password.fill('May2321%^%^');
        await this.signInbutton.click();


    }


}

module.exports = { LoginPage };