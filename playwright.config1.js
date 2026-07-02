const { defineConfig, devices } = require('@playwright/test');

const config = defineConfig({
  testDir: './tests',
  timeout: 50 * 1000,
  reporter: 'html',
  expect: {
    timeout: 10 * 1000,
  },
  use: {
    headless: false,
    screenshot: 'on',
    trace: 'on', //on,off,retain-on-failure
  },
  projects: [
    {
      name: 'chromium',
      use: {

        browserName: 'chromium',
        screenshot: 'on',
        trace: 'on', //on,off,retain-on-failure
        video: 'retain-on-failure', //on,off,retain-on-failure,on-first-retry
        //viewport: { width: 720, height: 720 },//iphone
        ...devices['iPhone 11'],
        ignoreHTTPSErrors: true, // Ignores httpps SSL cert  error
        permissions: ['geolocation'], // Auto-grants location permission, skips the popup
        launchOptions: {
          args: ['--start-maximized'] // Chromium-only flag
        },

      }

    },

    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        screenshot: 'only-on-failure',
        trace: 'on', //on,off,retain-on-failure
        video: 'retain-on-failure', //on,off,retain-on-failure,on-first-retry
        viewport: { width: 1920, height: 1080 }, // Firefox has no maximize flag, so size it explicitly
        ignoreHTTPSErrors: true, // Ignores httpps SSL cert error
        permissions: ['geolocation'], // Auto-grants location permission, skips the popup

        launchOptions: {
          args: ['--start-maximized']
        },
      },



    },



  ],
});

module.exports = config;
