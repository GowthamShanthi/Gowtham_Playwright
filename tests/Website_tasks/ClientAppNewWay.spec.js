//Namachivaya

const {test,expect} = require('@playwright/test');


test('Products',async({page})=>{


//Login using valid credentials 

await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
 
await page.getByPlaceholder('email@example.com').fill('gowtham.shanthi@gmail.com');
await page.getByPlaceholder('enter your passsword').fill('May2321%^%^');
await page.getByRole("button",{name:'Login'}).click();




 


//COllect all the product names and print it 


  await page.waitForLoadState("networkidle");
  await page.locator(".card-body").nth(2).waitFor();

  const allproducts =    page.locator(".card-body");

 console.log('The titles are', await allproducts.allTextContents());


    const count =  await allproducts.count();
    


//Adding the Requied item to cart 
 await page.locator(".card-body").filter({hasText:'ZARA COAT 3'}).getByRole("button",{name:' Add To Cart'}).click();
 



  //Navigating to cart page 
  
  await page.getByRole("listitem").getByRole("button",{name:'Cart'}).click();
  

  //Waiting for all the elements to be loaded in the cart page 

  await page.locator("[class*='cartWrap']").waitFor();

  // Verifying the product name in the cart

   const bool = await page.getByText('ZARA COAT 3').isVisible();

   expect(bool).toBeTruthy();


   //Locating and clicking checkout button 

   page.getByRole("button",{name:'Checkout'}).click();



   //Entering value in the country dropdwon 
   
   await page.locator('[placeholder="Select Country"]').pressSequentially("ind",{delay: 150});
   
    await page.getByRole("button",{name:'India'}).nth(1).click();

   //Getting Title text form shipping ifnormation text box

   const emailtext = await page.locator(".details__user [type='text']").nth(0);

   expect(emailtext).toHaveText('gowtham.shanthi@gmail.com');


await page.locator(".details__user [type='text']").nth(1).fill('gowtham.shanthi@gmail.com.au');



    const emailtexttyped = await page.locator(".details__user [type='text']").nth(1).inputValue();
 


await expect(emailtexttyped).toContain('gowtham.shanthi@gmail.com.au');



//CLicking the place order button 

 await page.getByText('Place Order').click();




//Capturing thank you text from thankyou page 

const thankyoutext = await page.getByText('Thankyou for the order.');

expect(thankyoutext).toHaveText(' Thankyou for the order. ');


//Capturing the oorder id 

const orderid = (await page.locator(".em-spacer-1 .ng-star-inserted").textContent()).trim();
const cleanOrderId = orderid.replace(/\|/g, '').trim();

console.log('This is the order Id', orderid);





//Clicking the "Orders" option in the top 

await page.getByRole("listitem").getByRole("button",{name:'ORDERS'}).click();
 await page.locator("tbody").waitFor();


//Collecting the orderid's
const allorders = page.locator("tbody tr");

 await page.getByRole("row",{name:cleanOrderId.trim()}).getByRole("button",{name:'View'}).click();

 //const orderid = (await page.locator(".em-spacer-1 .ng-star-inserted").textContent()).trim();



 




 

 const orderIdDetails = await page.getByText(cleanOrderId).textContent();
   expect(orderid.includes(orderIdDetails)).toBeTruthy();













     


   

   


   

   

  
  
  

  





  



  
  

    await page.pause();


  
}



);


 
 


