//Namachivaya
// Import test and expect from the playwright test package



const { test, expect } = require('@playwright/test');


// Type 1: Not using any browser context 
test('first playwright test - No Browser Fixture', async ({ page }) => //ananonymous function
{
    await page.goto('https://rahulshettyacademy.com/');
    await page.pause();



});




// Type 2:  using any browser context 
test.only('first playwright test - Using browser fixture ', async ({ browser }) => //ananonymous function

{


    const context = await browser.newContext();

    const page = await context.newPage();


    await page.goto('https://google.com/');

      console.log( await page.title());



  await    expect(page).toHaveTitle('Google');

    await page.pause();



});




