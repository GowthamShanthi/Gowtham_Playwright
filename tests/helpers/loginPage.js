// Namachivaya

const LOGIN_URL = 'https://rahulshettyacademy.com/client/#/auth/login';

/**
 * Logs into the client app and waits for the dashboard to load.
 * @param {import('@playwright/test').Page} page
 * @param {string} email
 * @param {string} password
 */
async function login(page, email = 'gowtham.shanthi@gmail.com', password = 'May2321%^%^') {
    await page.goto(LOGIN_URL);
    await page.getByPlaceholder('email@example.com').fill(email);
    await page.getByPlaceholder('enter your passsword').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForLoadState('networkidle');
}

module.exports = { login };
