import { Builder, By } from 'selenium-webdriver';
import { BASE_URL } from './url.js';

const uploadFile = async () => {
  const DRIVER = await new Builder().forBrowser('chrome').build();

  try {
    const uploadBtn = DRIVER.findElement(By.id('photo-upload'));
    const filePath =
      '/Users/rosscumming/Documents/testing-pathway/the-kitchen/selenium/images/beach.jpeg';
    const URL = await DRIVER.get(`${BASE_URL}/file-picker`);

    await URL;
    await uploadBtn.sendKeys(filePath);
  } finally {
    await DRIVER.quit();
  }
};

uploadFile();
