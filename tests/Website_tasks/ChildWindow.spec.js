//Namachivaya

const { test } = require('@playwright/test');

test('handlewindow', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const childlink = page.locator(".blinkingText[href='https://rahulshettyacademy.com/documents-request']");

    const [childpage] = await Promise.all([
        context.waitForEvent('page'),
        childlink.click(),
    ]);

    const wholetext = await childpage.locator(".red").textContent();

    const splittext = wholetext.split("@");
    console.log('The splitted text is ', splittext);

    const domain = splittext[1].split(" ")[0];
    console.log(domain);


//User name fiels i parent page 

 const usrname= await page.locator("[id='username']");
 await usrname.fill(domain);

 await page.pause();


 console.log('this is filled value',await usrname.inputValue());






});
