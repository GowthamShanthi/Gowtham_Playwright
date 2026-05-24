// @ts-check
const { defineConfig } = require('@playwright/test');

const config = defineConfig({

  testDir: './tests',
  timeout: 40 * 1000,
  reporter: 'html',

  // assertion timeout
  expect: {
    timeout: 50 * 1000,
  },

  use: {
    browserName: 'firefox',
    headless: false,
  },

});

module.exports = config;