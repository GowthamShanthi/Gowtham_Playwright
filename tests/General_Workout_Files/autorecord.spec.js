import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.locator('#recipient-email').click();
  await page.locator('#recipient-email').fill('elcomtest1');
  await page.getByRole('textbox', { name: 'Contact Email: Contact Name:' }).click();
  await page.getByRole('textbox', { name: 'Contact Email: Contact Name:' }).fill('23');
  await page.locator('#recipient-email').click();
  await page.locator('#recipient-email').fill('');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Send message' }).click();
});