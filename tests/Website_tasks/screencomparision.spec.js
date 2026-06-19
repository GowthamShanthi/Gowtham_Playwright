//Namachivaya


const{test,expect} = require('@playwright/test');

test('snapshottest',async({page})=>{

await page.goto('https://www.flightaware.com/');

  expect(await page.screenshot()).toMatchSnapshot('Namachivaya.png');
 




});