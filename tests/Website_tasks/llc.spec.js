//Namachivaya

const {expect,test} =  require('@playwright/test');

test('Playwright special locators', async({page})=>{


await page.goto('https://rahulshettyacademy.com/angularpractice/');

//page.getby label

await page.getByLabel('Check me out if you Love IceCreams!').check();

await page.getByLabel('Gender').selectOption('Female');

//page.getby placeholder 

await page.getByPlaceholder('Password').fill("Namachivaya")


//page.get by role - button 
await page.getByRole('button',{name: 'Submit'}).click();


//page.getbytext

const subtxt = await page.getByText('Success! The Form has been submitted successfully!.').isVisible();

await expect(subtxt).toBeTruthy();


//page .get by role - link 

await page.getByRole("link", {name:'Shop'}).click();

//Filteringa nd clcking 

await page.locator('.h-100').filter({hasText:'Samsung Note 8'}).getByRole("button").click();







await page.pause();








});






