import test, { Browser, chromium, Page } from "@playwright/test";

test('move to element test', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    // await page.goto("https://www.spicejet.com/");
    // await page.getByText('Add-ons').first().hover()
    // await page.getByText('Taxi').first().click()
    // await page.getByText('Visa Services').first().click()

    await page.goto("https://www.bigbasket.com/",  {waitUntil: 'domcontentloaded'})
    await page.getByRole('button', { name: 'Shop by Category' }).last().click();
    await page.getByText('Beverages').hover()
    await page.getByText('Fruit Juices & Drinks').hover()
    await page.getByRole('link', {name:'Juices'}).click()


    await page.waitForTimeout(5000)
})