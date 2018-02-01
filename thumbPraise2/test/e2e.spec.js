const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('http://localhost:3000/index/index');
        await driver.findElement(By.id('hand')).click();
        const addNumber = driver.findElement(By.id('counter'));
        await driver.wait(addNumber.isDisplayed(),1000);
    } finally {
        await driver.quit();
    }
})();