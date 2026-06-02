//Namachivaya

const{test,expect} = require('@playwright/test');


test('indbuiltlocatortest',async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            





// // 1.  getbby alttext locator

//   const logo = await page.getByAltText('company-branding');

//  await expect(logo).toBeVisible();

//   //2.get by placeholder locator

//   await page.getByPlaceholder('Username').fill('Admin');


// //3.get by role locator

// await page.getByRole('button',{type:'submit'}).click();


// //4.get by text locator

// await expect(page.getByText('Login')).toBeVisible();


// //4.get by text locator

await page.getByText('Forgot your password? ').click();














}

);