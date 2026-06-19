//Namachivaya

const {test,expect} = require('@playwright/test');


test('Validations',async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await page.goto('https://www.google.com/');
//await page.pause();
await page.goBack();
await page.goForward();
await page.goBack();

//Dismiss the dialog alert / dialog box
await expect (page.locator("#displayed-text")).toBeVisible();

await page.locator('#hide-textbox').click();

await expect (page.locator("#displayed-text")).toBeHidden();

  



await page.locator('#confirmbtn').click();
page.on('dialog',dialog => dialog.dismiss());

//Mouse hover


await page.locator('#mousehover').hover();


//Switch to a frame

const framepage =   page.frameLocator("iframe[name='iframe-name']");




await framepage.locator('li a[href*="lifetime-access"]:visible').click();


 const jointext = await  framepage.locator(".text h2").textContent();

console.log(jointext.split(" ")[1]);

 

 

await page.locator('#mousehover').hover();











});

