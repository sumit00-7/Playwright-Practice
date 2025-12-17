import test, { Browser, chromium, Page } from "@playwright/test";

test('locator test', async () => {
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("http://127.0.0.1:5500/app.html")

    // await page.locator("[data-sumitid=username]").fill("Sumit Bhatt")

    await page.getByTestId('username').fill('Sumit Bhatt')
    await page.getByTestId('password').fill('Test@123')
    await page.getByTestId('loginbtn').click()



    await new Promise(()=>{})
})