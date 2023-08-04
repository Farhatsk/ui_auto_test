// file: profile.test.js
require('dotenv').config();
const assert = require('assert');
const { Builder, By } = require('selenium-webdriver');
const webdriverio = require('webdriverio');

const applicationUrl = process.env.APPLICATION_URL+"/profile";

describe('Login', function () {
  let client;

  before(async function () {
    client = await webdriverio.remote({
      capabilities: {
        browserName: this.browser.name
      }
    });
    await client.url(applicationUrl);
  });

  after(async function () {
    await client.deleteSession();
  });

  it('should display the user\'s name', async function () {
    const nameElement = await client.findElement(By.css('.name'));
    const name = await nameElement.getText();
    assert.strictEqual(name, 'John Doe', 'The name should be equal to John Doe');
  });

  it('should allow the user to edit their profile', async function () {
    await client.findElement(By.css('.edit-button')).click();
    await client.findElement(By.name('name')).clear();
    await client.findElement(By.name('name')).sendKeys('Jane Doe');
    await client.findElement(By.css('.save-button')).click();

    const nameElement = await client.findElement(By.css('.name'));
    const name = await nameElement.getText();
    assert.strictEqual(name,'Jane Doe', 'The name should be equal to Jane Doe');
  });
});