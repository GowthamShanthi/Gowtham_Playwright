const{test,expect} = require ('playwright/test');



test('Multiplelocatorstest',async({page})=>{

await page.goto("https://demoblaze.com/");


//Collect and print all the product names on the homepage 

//Sometimes product may not loaded, so writing tis line to wait for the product list to be visible before collecting the names
await page.waitForSelector("//div[@id='tbodyid']/div//div/h4");



const productlist = await page.locator("//div[@id='tbodyid']/div//div/h4");

await expect(productlist).toHaveCount(9);


//   for(const links of await productlist.all()){

//   console.log(await links.textContent());



//   }


//Getting only th eitem in specific index and printing in console


const sixthproduct = await productlist.nth(5).textContent();


console.log('Sixth product is :',sixthproduct);


//Getting all product names 

const allproductname = await page.locator("//div[@id='tbodyid']/div//div/h4").allTextContents();

console.log('All product names are :',allproductname);












});