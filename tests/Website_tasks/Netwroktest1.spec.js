const { expect, test, request } = require('@playwright/test');
 

const {APiUtils} = require('../utils/ApiUtils');

let  response1;

const payload = { userEmail: "gowtham.shanthi@gmail.com", userPassword: "May2321%^%^" };
const orderpayload = { orders: [{ country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] };
const fakePayLoadOrders = { data: [], message: "No Orders" };

// Runs once before all tests — logs in and creates order via API
test.beforeAll(async () => {

    const apicontext = await request.newContext();

    const apiutils = new APiUtils(apicontext, payload);
    //token1 = await apiutils.getTokens();             // login → stores this.token on instance
    response1 = await apiutils.getorder(orderpayload); // create order → returns order ID
});

 
test('order', async ({ page }) => {

    // Inject token into localStorage to bypass login UI
    // eslint-disable-next-line no-undef
    await page.addInitScript(value => { window.localStorage.setItem('token', value); }, response1.token);

    await page.goto('https://rahulshettyacademy.com/client');

    //intercepting response -fetch APi response-> { playwright fakeresponse}->browser->render data on front end
    
    await page.route
    
("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",

    async route=>{


        //fetch APi response-
        const response  = await page.request.fetch(route.request());

        //COnstructing fake boday 
        let body = JSON.stringify(fakePayLoadOrders);

        //Sending fake body to the browser 
        route.fulfill(
        {
          response,
          body, 
 
        });


    }




        
    );

    //Navigating to my order page 
  await page.getByRole("listitem").getByRole("button", { name: 'ORDERS' }).click();

  //Waiting for response 
  await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");


    console.log(await page.locator(".mt-4").textContent());


  





});



