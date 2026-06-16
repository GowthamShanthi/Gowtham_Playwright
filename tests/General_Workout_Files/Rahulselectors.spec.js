//Namachivaya

const{expect,test}=require('@playwright/test');


test('rahulloct',async({page})=>{

await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

//Using id with tag name 
await page.locator('input#username').type('rahulshettyacademy ');

//Using attribute and its value await  
await  page.locator("[id='password']").fill('Learning@830$3mK2');

//Using class name with tag name

await  page.locator("[class='btn btn-info btn-md']").click();


//capyture the error message and print in console with ssertion 

   const errmsg =  await page.locator("[style*='block']").textContent();


console.log('Error message is :',errmsg);

// Adding ssetionin single line 

   await expect(page.locator("[style*='block']")).toContainText('Incorrect');
   






}

);
