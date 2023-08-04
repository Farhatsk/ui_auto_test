//Using Mocha framework
require('dotenv').config();
const assert = require('assert');
const webdriverio = require('webdriverio');

const applicationUrl = process.env.APPLICATION_URL + "/login";
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

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

  it('should display an error message for invalid credentials', async function () {
    await client.$('[name="username"]').setValue(username);
    await client.$('[name="password"]').setValue(password);
    await client.$('button[type="submit"]').click();

    const errorMessage = await client.$('.error-message').getText();
    assert.strictEqual(errorMessage, 'Invalid username or password');
  });


  // it('should display an error message for invalid credentials', async function () {
  //   await client.findElement(By.name('username')).sendKeys('invalid');
  //   await client.findElement(By.name('password')).sendKeys('invalid');
  //   await client.findElement(By.css('button[type="submit"]')).click();

  //   const errorMessage = await client.findElement(By.css('.error-message')).getText();
  //   assert.strictEqual(errorMessage, 'Invalid username or password');
  // });
});
