import test, { Browser, chromium, Page } from "@playwright/test";

test('Type characters sequentilly', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("https://www.flipkart.com/")

    await page.getByPlaceholder('Search for Products, Brands and More').pressSequentially('macbook',{delay:100})


    await page.waitForTimeout(5000)
})