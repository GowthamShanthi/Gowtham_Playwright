//Namachivaya

const { LoginPage } = require('./LoginPage');
const { DashboardPage } = require('./DashboardPage');
const { CartPage } = require('./CartPage');
const { OrdersReviewPage } = require('./OrdersReviewPage');
const { OrderHistoryPage } = require('./OrderHistoryPage');


class POManager {

    constructor(page) {


        this.page = page;
        this.LoginPage = new LoginPage(this.page);
        this.DashboardPage = new DashboardPage(this.page);
        this.OrdersReviewPage = new OrdersReviewPage(page);
        this.CartPage = new CartPage(this.page);

        this.OrderHistoryPage = new OrderHistoryPage(page);
    }


    getLoginPage() {

        return this.LoginPage;



    }

    // POManager.js
    getCartPage() {
        return this.CartPage;
    }


    getDashboardPage() {

        return this.DashboardPage;



    }

    getOrdersReviewPage() {

        return this.OrdersReviewPage;

    }

    getOrderHistoryPage() {


        return this.OrderHistoryPage;


    }




}

module.exports = { POManager };


