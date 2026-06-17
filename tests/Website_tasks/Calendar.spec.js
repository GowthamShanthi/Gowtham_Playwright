//Namachivaya

const {expect,test} = require('@playwright/test');


test('calendar validation',async({page}) =>{


const day = "23";
const month = "5";
const year = "2027";

const expecteddate=[month,day,year];

await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');



await page.locator('.react-date-picker__wrapper').click();


await page.locator('.react-calendar__navigation__label__labelText').click();
await page.locator('.react-calendar__navigation__label__labelText').click();


await page.locator('.react-calendar__tile').getByText(year).click();

await page.locator('.react-calendar__year-view__months__month').nth(Number(month-1)).click();



await page.locator("//abbr[text()='23']").click();


const datei= await page.locator("input[name='date']").inputValue();
console.log('this is date received',datei);

const inputs = page.locator('.react-date-picker__inputGroup input').filter({ visible: true });



 for(let i=0;i<expecteddate.length;i++ )
 {

     const value =  await inputs.nth(i).inputValue();
     await expect(value).toEqual(expecteddate[i]);
 
 }





 









});