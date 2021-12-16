import { Builder, By } from 'selenium-webdriver';
import { BASE_URL } from './url.js';
import assert from 'assert';

const openNewTab = async () => {
  const DRIVER = await new Builder().forBrowser('chrome').build();

  try {
    const kitchenBtnLink = DRIVER.findElement(
      By.id('button-the-kitchen-table')
    );
    const URL = DRIVER.get(`${BASE_URL}/links`);

    await URL;
    await kitchenBtnLink.click();
    await DRIVER.getWindowHandle().forEach(tab =>
      DRIVER.switchTo().window(tab)
    );

    const tableCheck = DRIVER.findElement(
      By.id('fruits-vegetables')
    ).isDisplayed();
    assert.strictEqual();

    // DRIVER.findElement(By.id('fruits-vegetables')).isDisplayed()
  } finally {
    await DRIVER.quit();
  }
};
