// @ts-check
//Namachivaya

const { expect, test } = require('@playwright/test');

test('Gettingproductnames', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator("[id='userEmail']").type('gowtham.shanthi@gmail.com');
    await page.locator('input#userPassword').type('May2321%^%^');
    await page.click("[id='login']");


    //locating all the products

    //await page.waitForLoadState('networkidle');

    await page.locator('.card-body').waitFor();
    const allproductds = await page.locator('.card-body').allTextContents();
    console.log(allproductds);


});


test.only('Ui COntrol', async ({ page }) => {

     await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    // Locating all dropdown option and storing it in variable 
    const dropdownall = await page.locator('select.form-control');
    await dropdownall.selectOption('consult');
    //Locating radiobutton
    await page.locator('label.customradio').last().click();
     await  page.locator("[id='okayBtn']").click();
    //await page.pause();

    //Assertion to veriy whether the radio button is checked 
        console.log ("This isthe value",await page.locator('label.customradio').last().isChecked());

     await expect(page.locator("label.customradio").last()).toBeChecked();

     //Locating the I agree checkbox > clcking it and verifying if it is checked 
        await page.locator('input#terms').click();
        await expect (page.locator('input#terms')).toBeChecked();

        //TO make the checkbox uncheck 
        await page.locator('input#terms').uncheck();
        await expect (page.locator('input#terms')).not.toBeChecked();
        expect (await page.locator('input#terms').isChecked()).toBeFalsy();


        //locating the blinking text - adding to have assertion attribute

        await expect (page.locator('a.blinkingText').first()).toHaveAttribute("class","blinkingText");









       


       await page.pause();

     








    





    

    
 




    
    







}

);

















