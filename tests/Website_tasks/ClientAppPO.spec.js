//Namachivaya

//Namachivaya

const { test, expect } = require('@playwright/test');
const { POManager } = require('../../PageObjects/POManager');

const { log } = require('node:console');



test('Products', async ({ page }) => {

    const username = "gowtham.shanthi@gmail.com";

    const poManager = new POManager(page);

    const productname = 'ZARA COAT 3';



    //Login using Page objects 
    const loginpage = poManager.getLoginPage();
    await loginpage.goto();
    await loginpage.validLogin();


    //Collect all the product names and print it from pageobjects 

    const dashboardPage = poManager.getDashboardPage();

    await dashboardPage.searchProductAddtocart(productname);

    await dashboardPage.gotoCart();

    //Verify product display in cart and goto checkout page 

    const cartPage = poManager.getCartPage(productname);

    const returnedProduct = await cartPage.verifyProductinCart(productname);

    // Verifying the product name in the cart
    await expect(returnedProduct).toBe(productname);

    //clicking goto checkout page 
    await cartPage.gotoCheckout();






    //Entering value in the country dropdwon 


    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");

    //Verifying email id
    await ordersReviewPage.VerifyEmailId(username);




    //CLicking the place order button ,Capturing thank you text from thankyou page 



    //Capturing the order id 

    const cleanOrderId = await ordersReviewPage.SubmitAndGetOrderId();

    console.log('This is the order Id', cleanOrderId);







    //Clicking the "Orders" option in the top 

    await page.getByRole("listitem").getByRole("button", { name: 'ORDERS' }).click();
    await page.locator("tbody").waitFor();


    //Collecting the orderid's
    const allorders = page.locator("tbody tr");

    await page.getByRole("row", { name: cleanOrderId.trim() }).getByRole("button", { name: 'View' }).click();

    //const orderid = (await page.locator(".em-spacer-1 .ng-star-inserted").textContent()).trim();










    const orderIdDetails = await page.getByText(cleanOrderId).textContent() ?? '';
    expect(orderIdDetails.includes(cleanOrderId)).toBeTruthy();



    //await page.pause();







































    //await page.pause();



}



);






