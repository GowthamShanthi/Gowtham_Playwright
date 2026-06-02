const{test,expect} = require ('playwright/test');



test('Multiplelocatorstest',async({page})=>{

await page.goto("https://demoblaze.com/");


//Collect and print all the product names on the homepage 

//Sometimes product may not loaded, so writing tis line to wait for the product list to be visible before collecting the names
page.waitForSelector("//div[@id='tbodyid']/div//div/h4");



const productlist = await page.$$("//div[@id='tbodyid']/div//div/h4");


for(const links of productlist){

console.log(await links.textContent());


}





});