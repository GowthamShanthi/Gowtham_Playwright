//Namachivaya

// @ts-check

const { expect, test, request } = require('@playwright/test');
 

const {APiUtils} = require('../../utils/ApiUtils');

let  response1;

const payload = { userEmail: "gowtham.shanthi@gmail.com", userPassword: "May2321%^%^" };
const orderpayload = { orders: [{ country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] };

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
    await page.locator(".card-body").nth(2).waitFor();
/*
    // Add ZARA COAT 3 to cart
    await page.locator(".card-body").filter({ hasText: 'ZARA COAT 3' }).getByRole("button", { name: ' Add To Cart' }).click();

    await page.getByRole("listitem").getByRole("button", { name: 'Cart' }).click();
    await page.locator("[class*='cartWrap']").waitFor();

    const bool = await page.getByText('ZARA COAT 3').isVisible();
    expect(bool).toBeTruthy();

    await page.getByRole("button", { name: 'Checkout' }).click();

    // pressSequentially with delay simulates real typing for the autocomplete
    await page.locator('[placeholder="Select Country"]').pressSequentially("ind", { delay: 150 });
    await page.getByRole("button", { name: 'India' }).nth(1).click();

    await page.getByText('Place Order').click();

    await expect(page.getByText('Thankyou for the order.')).toBeVisible();
*/
    await page.getByRole("listitem").getByRole("button", { name: 'ORDERS' }).click();
    await page.locator("tbody").waitFor();

    await page.getByRole("row", { name: response1.orderid.trim() }).getByRole("button", { name: 'View' }).click();

    await expect(page.getByText(response1.orderid)).toBeVisible();
});
