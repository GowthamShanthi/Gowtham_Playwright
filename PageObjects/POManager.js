//Namachivaya

const { LoginPage } = require('./LoginPage');
const { DashboardPage } = require('./DashboardPage');
const { CartPage } = require('./CartPage');
const { OrdersReviewPage } = require('./OrdersReviewPage');


class POManager {

    constructor(page) {


        this.page = page;
        this.LoginPage = new LoginPage(this.page);
        this.DashboardPage = new DashboardPage(this.page);
        this.OrdersReviewPage = new OrdersReviewPage(page);
        //this.CartPage = new CartPage(this.page);
    }


    getLoginPage() {

        return this.LoginPage;



    }

    // POManager.js
    getCartPage(productname) {
        return new CartPage(this.page, productname);  // productname passed here
    }


    getDashboardPage() {

        return this.DashboardPage;



    }

    getOrdersReviewPage() {

        return this.OrdersReviewPage;

    }




}

module.exports = { POManager };


