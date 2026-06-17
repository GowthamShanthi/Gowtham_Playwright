//Namachivaya

const {expect,test} = require('@playwright/test');
// CLEANUP: 'text' from 'node:stream/consumers' is unused — remove this import
const { text } = require('node:stream/consumers');
// NOTE: The login() helper in tests/helpers/loginPage.js is never used here.
// The assignment asks to call login(page) at the start — import and use it instead of the inline login block below.



test('Assignement1',async({page})=>{


    
 
//Step 1 — Login
await page.goto('https://eventhub.rahulshettyacademy.com');
await page.getByPlaceholder('you@email.com').fill('gowtham.shanthi@gmail.com');
await page.locator('input#password').fill('May2321%^%^');
await page.getByRole('button',{name:'Sign In'}).click();
await page.waitForLoadState("networkidle");
await page.locator('#event-card').first().waitFor();
 


//Step 2 — Create a new event
await page.getByText('Admin').click();
await page.locator('.absolute').getByRole("link",{name:'Manage Events'}).click();


const eventtitle = 'Test Event' + Date.now(); 

await page.locator('input#event-title-input').fill(eventtitle);
await page.getByPlaceholder('Describe the event…').fill('This is description Text ');
await page.locator('#category').selectOption('Concert');
await page.getByLabel('City').fill('Coimbatore');
await page.getByPlaceholder('Venue name & address').fill('Meeting Hall');

const future = new Date();
future.setDate(future.getDate() + 30);
const dateStr = future.toISOString().slice(0, 16); // format: YYYY-MM-DDTHH:MM

await page.locator('input[id="event-date-&-time"]').fill(dateStr);
await page.getByPlaceholder('0.00').fill('50');
await page.getByLabel('Total Seats').fill('50'); 
await page.locator('#add-event-btn').click();
await expect(page.getByText('Event created!')).toBeVisible();



//Step 3 — Find the event card and capture seats
await page.locator('#nav-events').click();
await page.waitForLoadState("networkidle");
const firstcardstate = await expect (page.locator('#event-card').nth(0)).toBeVisible();
await expect (page.locator('#event-card').getByRole('link',{name:eventtitle})).toBeVisible();
const eventCard = await page.locator('#event-card').filter({hasText:eventtitle});
const seatsText = await eventCard.getByText(/seats available/).innerText();
console.log('The whle text is ',seatsText);
const seatsCountbeforebooking  = parseInt(seatsText);
console.log("The trimmed text is",seatsCountbeforebooking);



//Step 4 — Start booking

 await eventCard.getByRole('link',{name:'Book Now'}).click();

 //Step5 — Fill booking form
 // MISSING ASSERTION (Step 5): Should assert default ticket count is 1 before filling the form
 // await expect(page.locator('#ticket-count')).toHaveText('1');

 await page.getByLabel('Full Name').fill('Gowtham');

 await page.locator('#customer-email').fill('gowtham.shanthi@gmail.com');

await page.getByPlaceholder('+91 98765 43210').fill('+91 9600486615');

await page.getByText('Confirm Booking').click();


//Step 6 — Verify booking confirmation
 



// Assert the element is visible (use the locator, not the string)
await expect(page.locator('.booking-ref')).toBeVisible();

//Store the innertext
const bokref = (await page.locator('.booking-ref').innerText()).trim();


//Step 7 — Verify in My Bookings
await page.getByRole("button",{name:'View My Bookings'}).click();

const baseurl = "https://eventhub.rahulshettyacademy.com";

await expect(page).toHaveURL(baseurl + '/bookings');


const crds = page.locator('#booking-card');
await crds.first().waitFor();
await expect(crds.first()).toBeVisible();

//- Filter booking cards for the one that contains an element with class .booking-ref matching your bookingRef text
const bkref = crds.filter({hasText: bokref});

//- Assert that matched card is visible
await expect(bkref).toBeVisible();






//- Assert that matched card contains your eventTitle text
 const beventtitle = crds.filter({hasText: eventtitle});

await expect(beventtitle).toBeVisible();


//Step 8 — Verify seat reduction

//- Navigate back to /events
await page.locator('#nav-events').click();
await page.waitForLoadState("networkidle");
const firstcardstate1 = await expect (page.locator('#event-card').nth(0)).toBeVisible();
await expect (page.locator('#event-card').getByRole('link',{name:eventtitle})).toBeVisible();
const eventCard1 = await page.locator('#event-card').filter({hasText:eventtitle});
// BUG (Step 8): Should use 'eventCard1' here, not 'eventCard' — eventCard is the old Step 3 locator
const seatsText1 = await eventCard1.getByText(/seats available/).innerText();
 const seatsCountbeforebooking1  = parseInt(seatsText1);


// BUG (Step 8): expect(boolean) does nothing — use .toBe() for a real assertion
// await expect(seatsCountbeforebooking1 === seatsCountbeforebooking-1 );
expect(seatsCountbeforebooking1).toBe(seatsCountbeforebooking - 1);

// CLEANUP: Remove page.pause() — this halts the test runner in CI
// await page.pause();








 
 





 

 



 










 




});

