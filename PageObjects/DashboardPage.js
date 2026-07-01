//Namachivaya

class DashboardPage {

    constructor(page) {


        this.page = page;
        //All products locator
        this.products = page.locator(".card-body");
        //Navigating to cart page button
        this.cart = page.getByRole("listitem").getByRole("button", { name: 'Cart' });

    }


    async searchProductAddtocart(productname) {
        await this.page.waitForLoadState("networkidle");
        await this.products.nth(1).waitFor();
        const productstext = await this.products.allTextContents();
        console.log('The titles are', productstext);
        const count = await this.products.count();
        console.log('The number of products displayed in the page is', count);

        //Adding the Requied item to cart 
        await this.page.locator(".card-body").filter({ hasText: productname }).getByRole("button", { name: ' Add To Cart' }).click();





    }

    async gotoCart() {


        //Navigating to cart page 

        await this.cart.click();



    }










}

module.exports = { DashboardPage };