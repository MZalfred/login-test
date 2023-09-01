const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');

let driver = new Builder().forBrowser('chrome').build();

Given('the user navigates to the login page', async function () {
  await driver.get('https://app.staging.auxeris.io/login');
});

When('the user enters their username and password', async function () {
  await driver.findElement(By.id('username')).sendKeys('your-username');
  await driver.findElement(By.id('password')).sendKeys('your-password');
});

When('clicks on the "Login" button', async function () {
  await driver.findElement(By.css('button[data-action-button-primary="true"]')).click();
});

Then('the user should be redirected to the dashboard page', async function () {
  // ... code ...
});


