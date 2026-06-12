//Namachivaya

const {test,expect} = require('@playwright/test');


test('Products',async({page})=>{


//Login using valid credentials 

await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.locator('#userEmail').fill('gowtham.shanthi@gmail.com');
  await page.locator('#userPassword').fill('May2321%^%^');
  await  page.locator('#login').click();


//COllect all the product names and print it 


  await page.waitForLoadState("networkidle");
  await page.locator(".card-body").nth(2).waitFor();

  const allproducts =    page.locator(".card-body");

   




    console.log('The titles are', await allproducts.allTextContents());


    const count =  await allproducts.count();

 

    

    


//Adding the Requied item to cart 

    for(let i=0 ;i < count ; ++i )
    {

        if (await allproducts.nth(i).locator("h5 b").textContent() === 'ZARA COAT 3')
        {

            await allproducts.nth(i).locator("text = Add To Cart").click();
            break;
            

        }


 

    }



  //Navigating to cart page 
  
  await page.locator("[routerlink*='cart']").click();

  //Waiting for all the elements to be loaded in the cart page 

  await page.locator("[class*='cartWrap']").waitFor();

  // Verifying the product name in the cart

   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();

   expect(bool).toBeTruthy();


   //Locating and clicking checkout button 

   page.locator("[type='button']").nth(1).click();



   //Entering value in the country dropdwon 
   
   await page.locator('[placeholder="Select Country"]').pressSequentially("ind",{delay: 150});
   



   //Selecting the result from dropdwon 
   const dropdown = page.locator('.ta-results');

 

   await dropdown.waitFor();

   const ddcount = await dropdown.locator("[type='button']").count();


   for(let i=0;i<ddcount;++i){

if(await dropdown.locator("[type='button']").nth(i).textContent() === ' India')
{

    await dropdown.locator("[type='button']").nth(i).click();
    break;
}



   }


   //Getting Title text form shipping ifnormation text box

   const emailtext = await page.locator(".details__user [type='text']").nth(0);

   expect(emailtext).toHaveText('gowtham.shanthi@gmail.com');


await page.locator(".details__user [type='text']").nth(1).fill('gowtham.shanthi@gmail.com.au');



    const emailtexttyped = await page.locator(".details__user [type='text']").nth(1).inputValue();
 


await expect(emailtexttyped).toContain('gowtham.shanthi@gmail.com.au');



//CLicking the place order button 

await page.locator("[class*=btnn]").click();

//Capturing thank you text from thankyou page 

const thankyoutext = await page.locator(".hero-primary");

expect(thankyoutext).toHaveText(' Thankyou for the order. ');


//Capturing the oorder id 

const orderid = (await page.locator(".em-spacer-1 .ng-star-inserted").textContent());
console.log('This is the order Id', orderid);





//Clicking the "Orders" option in the top 

await page.locator("button[routerlink*='/dashboard/myorders']").click();
 await page.locator("tbody").waitFor();


//Collecting the orderid's
const allorders = page.locator("tbody tr");

 

const ordercount = await allorders.count();


for(let j=0;j<ordercount;++j){

    const currentorderrow = (await allorders.nth(j).locator("th").textContent());
    if(orderid.includes(currentorderrow)){

        await console.log('The order id found in track page ',currentorderrow);
        await allorders.nth(j).locator("button").first().click();

break;

    }


    
}

 const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderid.includes(orderIdDetails)).toBeTruthy();













     


   

   


   

   

  
  
  

  





  



  
  

    await page.pause();


  
}



);


 
 


