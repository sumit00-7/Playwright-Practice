import test, { Browser, chromium, Page } from "@playwright/test";

test('move to element test', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("https://www.spicejet.com/");
    await page.getByText('Add-ons').first().hover()
    // await page.getByText('Taxi').first().click()
    await page.getByText('Visa Services').first().click()


    await page.waitForTimeout(5000)
})