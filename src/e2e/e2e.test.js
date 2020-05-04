import puppetteer from 'puppeteer';
const puppeteer = require('puppeteer');


jest.setTimeout(30000); // default puppeteer timeout

describe('validation form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => { // открыть браузер
    browser = await puppeteer.launch({
      // headless: false, // show gui
      // slowMo: 100,
      // devtools: true, // show devTools
    });

    page = await browser.newPage();
  });

  afterAll(async () => { 
    await browser.close();
  });

  describe('Test', () => {
    test('should show popup', async () => {
      await page.goto(baseUrl);
      const button = await page.$('.button');
      button.click();
      await page.waitForSelector('.popovers');
    });
  });
});
