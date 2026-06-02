const { defineConfig } = require('@playwright/test');

const config = defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,
  reporter: 'html',
  expect: {
    timeout: 50 * 1000,
  },
  use: {
    headless: false,
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
