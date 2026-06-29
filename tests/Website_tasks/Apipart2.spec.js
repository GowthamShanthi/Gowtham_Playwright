const { test,expect } = require('@playwright/test');

let webcontext;


test.beforeAll(async({browser})=>
{

const context = await browser.newContext();
 

const page =  await context.newPage();

await page.goto("https://rahulshettyacademy.com/client", { waitUntil: 'domcontentloaded' });

    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
  await page.locator(".card-body").first().waitFor();

    //await context.tracing.stop({ path: 'test-results/beforeAll-trace.zip' });

    await context.storageState({path : 'state.json'});

    
webcontext = await browser.newContext({ storageState: 'state.json' });

 





}
);

 



test('createorder',async()=>{


const page = await webcontext.newPage();


await page.goto("https://rahulshettyacademy.com/client", { waitUntil: 'domcontentloaded' });


    

 

     
    await page.locator(".card-body").nth(2).waitFor();

 
    // Add ZARA COAT 3 to cart
    await page.locator(".card-body").filter({ hasText: 'ZARA COAT 3' }).getByRole("button", { name: ' Add To Cart' }).click();
    await page.waitForLoadState('networkidle');

    await page.getByRole("listitem").getByRole("button", { name: 'Cart' }).click();
    await page.locator("[class*='cartWrap']").waitFor();

    const bool = await page.getByText('ZARA COAT 3').isVisible();
    expect(bool).toBeTruthy();

    await page.getByRole("button", { name: 'Checkout' }).click();

    // pressSequentially with delay simulates real typing for the autocomplete
    await page.locator('[placeholder="Select Country"]').pressSequentially("ind", { delay: 150 });
    await page.getByRole("button", { name: 'India' }).nth(1).click();

    await page.getByText('Place Order').click();

    await expect(page.getByText('Thankyou for the order.')).toBeVisible();
 
    await page.getByRole("listitem").getByRole("button", { name: 'ORDERS' }).click();
    await page.locator("tbody").waitFor();

    //await page.getByRole("row", { name: response1.orderid.trim() }).getByRole("button", { name: 'View' }).click();

    //await expect(page.getByText(response1.orderid)).toBeVisible();

});


test('Goto Orders page',async()=>{



    const page = await webcontext.newPage();

    await page.goto("https://rahulshettyacademy.com/client", { waitUntil: 'domcontentloaded' });

        await page.getByRole("listitem").getByRole("button", { name: 'ORDERS' }).click();
    await page.locator("tbody").waitFor();



    
}




);

