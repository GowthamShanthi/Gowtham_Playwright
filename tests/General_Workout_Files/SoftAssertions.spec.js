//namachivaya

const{expect,test} = require('@playwright/test')

test('asserttest',async({page})=>{


  await page.goto('https://automation-115-to-120.staging.elcomcms.com/');


//  Assertion for expecting page URL 
await expect.soft(page).toHaveURL('https://automation-115-to-120.staging.elcomcms.com/');

//Assertion for expecting page title
await expect.soft(page).toHaveTitle('Edit an article | Deployment Site');


//Asserttion for expecting element to be visible
const loginbutton =  page.getByRole('link', { name: 'Login' }).first();
await expect.soft(loginbutton).toBeVisible();



}
);
