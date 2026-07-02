//Namachivaya

class CartPage {

    constructor(page) {

        this.page = page;

        this.allproducts = page.locator("[class*='cartWrap']");

        //Expected productname
        //this.expectedproductname = page.getByText(productname);

        //checkoutbutton 
        this.checkoutbutton = page.getByRole("button", { name: 'Checkout' });
    }


    async verifyProductinCart(productname) {

        //Waiting for all the elements to be loaded in the cart page 
        await this.allproducts.waitFor();

        if (await this.page.getByText(productname).isVisible()) {
            return productname;
        }


    }


    async gotoCheckout() {


        await this.checkoutbutton.click();


    }


}

module.exports = { CartPage };