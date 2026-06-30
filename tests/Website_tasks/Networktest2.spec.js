//Namachivaya

const { test, expect } = require('@playwright/test');


test('Security test request intercept', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client", { waitUntil: 'domcontentloaded' });

    await page.locator("#userEmail").fill("gowtham.shanthi@gmail.com");
    await page.locator("#userPassword").fill("May2321%^%^");
    await page.locator("[value='Login']").click();
    await page.locator(".card-body").first().waitFor();

    //Navigating to my order page 
    await page.getByRole("listitem").getByRole("button", { name: 'ORDERS' }).click();





    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",

        async route => {

            await route.continue({

                url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6'

            });
        }

    );


    //CLicking view button
    await page.locator('button').filter({ hasText: 'View' }).first().click();

    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");

    await page.pause();















}


);