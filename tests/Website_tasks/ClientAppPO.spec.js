//Namachivaya

//Namachivaya

const { test, expect } = require('@playwright/test');
const { POManager } = require('../../PageObjects/POManager');
const { OrderHistoryPage } = require('../../PageObjects/OrderHistoryPage');





//Json - > String --> JS object 
const dataset = JSON.parse(JSON.stringify(require('../../utils/ClientAppPOTestData.json')));


const { log } = require('node:console');



for (const data of dataset) {

    test(`Client App Test for  - ${data.username}`, async ({ page }) => {

        const username = data.username;

        const password = data.password;

        const poManager = new POManager(page);

        const productname = data.productname;

        //Login using Page objects
        const loginpage = poManager.getLoginPage();
        await loginpage.goto();
        await loginpage.validLogin(username, password);

        //Collect all the product names and print it from pageobjects
        const dashboardPage = poManager.getDashboardPage();
        await dashboardPage.searchProductAddtocart(productname);
        await dashboardPage.gotoCart();

        //Verify product display in cart and goto checkout page
        const cartPage = poManager.getCartPage();
        const returnedProduct = await cartPage.verifyProductinCart(productname);
        await expect(returnedProduct).toBe(productname);

        //clicking goto checkout page
        await cartPage.gotoCheckout();

        //Submitting order using POM
        const ordersReviewPage = poManager.getOrdersReviewPage();
        await ordersReviewPage.searchCountryAndSelect("ind", "India");

        //Verifying email id
        await ordersReviewPage.VerifyEmailId(username);

        //Capturing the order id
        const cleanOrderId = await ordersReviewPage.SubmitAndGetOrderId();
        console.log('This is the clean order Id', cleanOrderId);

        //Verifying orders in the order history page using POM
        const orderHistoryPage = poManager.getOrderHistoryPage();
        orderHistoryPage.gotoOrders();

        //Collecting the orderid's
        orderHistoryPage.clickViewOrderFromList(cleanOrderId);

        const orderIdDetails = await page.getByText(cleanOrderId).textContent() ?? '';
        expect(orderIdDetails.includes(cleanOrderId)).toBeTruthy();

    });

}






