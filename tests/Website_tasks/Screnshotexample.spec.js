//Namachivaya

const {test,expect} = require('@playwright/test');


test('Validations',async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
 

//Dismiss the dialog alert / dialog box
await expect (page.locator("#displayed-text")).toBeVisible();

 
await page.screenshot({path:'C:/Users/gowthamv/Desktop/Project_Docs/Playwright/PlayWrightAutomation/tests/Screenshots/fullpage.png'});

await page.locator('#mousehover').screenshot({path:'C:/Users/gowthamv/Desktop/Project_Docs/Playwright/PlayWrightAutomation/tests/Screenshots/onlylocator.png'});


await page.locator('#hide-textbox').click();

await expect (page.locator("#displayed-text")).toBeHidden();

  



await page.locator('#confirmbtn').click();
page.on('dialog',dialog => dialog.dismiss());

//Mouse hover


await page.locator('#mousehover').hover();
await page.locator('#mousehover').screenshot({path:'C:/Users/gowthamv/Desktop/Project_Docs/Playwright/PlayWrightAutomation/tests/Screenshots/onlylocator.png'});

 
  







});

