//Namachivaya
// Import test and expect from the playwright test package



const { test, expect } = require('@playwright/test');






//import { test, expect } from "@playwright/test";


test('Home Page', async ({ page }) => {


    await page.goto('https://demoblaze.com/');

    const pageTitle = await  page.title();

    console.log('Page title is:', pageTitle);


    //Assertion for expecting page titile 
    await expect(page).toHaveTitle('STORE');

   



    await expect(page).toHaveURL('https://demoblaze.com/');



const pageurl = page.url();

await console.log('Page url is:', pageurl);
 



});



// Type 1: Not using any browser context 
test('first playwright test - No Browser Fixture', async ({ page }) => //ananonymous function
{
    await page.goto('https://rahulshettyacademy.com/');




});




// Type 2:  using any browser context 
test('first playwright test - Using browser fixture ', async ({ browser }) => //ananonymous function

{


    const context = await browser.newContext();

    const page = await context.newPage();


    await page.goto('https://google.com/');

    console.log(await page.title());




    await expect(page).toHaveTitle('Google');

    //  await page.pause();

    // Namachivaya



});




