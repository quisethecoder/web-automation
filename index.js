const puppeteer = require('puppeteer-extra')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())


async function run(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://fill.dev/form/credit-card-simple")

    let selector = "input[id='cc-name']";
    await page.waitForSelector(selector);
    await page.type(selector, "Michael Kyle");

    selector = "select[id='cc-type']";
    await page.select(selector, "mc");

    selector = "input[id='cc-number']";
    await page.type(selector, "1234123412341234");
   
    selector = "input[id='cc-csc']";
    await page.type(selector, "388");

    selector = "select[id='cc-exp-month']";
    await page.select(selector, "7");

    selector = "select[id='cc-exp-year']";
    await page.select(selector, "2025")

    selector = "button[type='submit']";
    await page.click(selector)

}


run();