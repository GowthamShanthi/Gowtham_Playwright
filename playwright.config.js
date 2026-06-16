const { defineConfig } = require('@playwright/test');

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
    trace : 'on', //on,off,retain-on-failure
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
  ],
});

module.exports = config;
