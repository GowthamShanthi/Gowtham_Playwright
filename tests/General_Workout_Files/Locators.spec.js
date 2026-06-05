//namachivaya

//const {test,expect} = require ('@playwright/test');


import {test,expect} from '@playwright/test';
 
test('Locatorsexmp',async ({page})=>{

await page.goto('https://demoblaze.com/');


// Using Property based locator - click login button 

await page.locator("id=login2").click();


//Using Css selector based locator - fill username 

await page.fill('#loginusername','pavanol');


//Using CSS selector based locator - fill password

await page.locator('#loginpassword').fill('test@123');


//Using Xpath based locator - click login button


await page.locator("//button[normalize-space()='Log in']").click();


//Using Xpath based loactor - verify login success by checking the presence of logout button
 const logoutbutton =  await page.locator("(//a[normalize-space()='Log out'])[1]");


await expect(logoutbutton).toBeVisible();












}



)

 
