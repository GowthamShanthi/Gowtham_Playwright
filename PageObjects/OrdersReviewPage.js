//Namachivaya

const { expect } = require("@playwright/test");

class OrdersReviewPage {


    constructor(page) {

        this.page = page;
        this.country = page.locator("[placeholder*='Country']");
        this.selectindia = page.getByRole("button", { name: 'India' });
        this.emailid = page.locator(".details__user [type='text']").nth(1);
        //Place order button 
        this.placorderbutton = page.getByText('Place Order');

        //thank you text 

        this.thankyoutext = page.getByText('Thankyou for the order.');
        this.orderid = page.locator(".em-spacer-1 .ng-star-inserted");


    }


    async searchCountryAndSelect(countryCode, countryName) {


        //Entering value in the country dropdwon 
        await this.country.pressSequentially("ind", { delay: 150 });
        await this.selectindia.nth(1).waitFor();
        await this.selectindia.nth(1).click();

    }


    async VerifyEmailId(username) {
        await expect(this.emailid).toHaveValue(username);
    }


    async SubmitAndGetOrderId() {
        await this.placorderbutton.click();
        await expect(this.thankyoutext).toHaveText(" Thankyou for the order. ");
        const rawOrderId = await this.orderid.textContent();
        return rawOrderId.replace(/\|/g, '').trim();
    }


    async captureOrderId() {


        const orderid = (await this.orderid.textContent()).trim();
        const cleanOrderId = orderid.replace(/\|/g, '').trim();

        console.log('This is the order Id', orderid);

        return cleanOrderId;

    }

}

module.exports = { OrdersReviewPage };