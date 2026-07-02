//Namachivaya

class OrderHistoryPage {

    constructor(page, cleanOrderId) {

        this.page = page;

        this.ordersoption = page.getByRole("listitem").getByRole("button", { name: 'ORDERS' });
        this.orderbody = page.locator("tbody");
        this.allorderids = page.locator("tbody tr");






    }



    async gotoOrders() {

        await this.ordersoption.click();
        await this.orderbody.waitFor();
    }


    async clickViewOrderFromList(cleanOrderId) {


        //Clicking corresponding order>view button 

        await this.page.getByRole("row", { name: cleanOrderId.trim() }).getByRole("button", { name: 'View' }).click();




    }




}



module.exports = { OrderHistoryPage };
