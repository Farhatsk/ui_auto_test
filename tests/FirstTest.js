const { Builder, By, Key, until } = require('selenium-webdriver');

const assert = require('assert');

const browsers = ['chrome', 'firefox', 'MicrosoftEdge'];

for (const browser of browsers) {
    describe(`Login (${browser})`, function () {
        let driver;

        before(async function () {
            this.timeout(70000); // increase timeout to 5 seconds

            driver = await new Builder().forBrowser(browser).build();
        });

        after(async function () {

            this.timeout(70000); // increase timeout to 5 seconds

            if (driver !== undefined) {
                await driver.quit();
            }
        });


        it('should display the search value', async function () {
            this.timeout(20000); // increase timeout to 10 seconds
            await driver.get('https://www.google.com');
            await driver.findElement(By.css('[name="q"]')).sendKeys('Learn Selenium', Key.RETURN);
            await driver.wait(until.titleIs('Learn Selenium - Google Search'), 20000);
        });


        it('should display the search value', async function () {
            this.timeout(20000); // increase timeout to 10 seconds
            await driver.get('https://www.google.com');
            await driver.findElement(By.css('[name="q"]')).sendKeys('ReactJS', Key.RETURN);
            await driver.wait(until.titleIs('React JS - Google Search'), 20000);
        });
    });
}
