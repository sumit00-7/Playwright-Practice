import test, { Browser, chromium, Page } from "@playwright/test";

test('Focus Element Test', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("https://www.orangehrm.com/en/30-day-free-trial")
    // await page.getByText("Allow all").focus()
    // await page.getByText("Allow all").click()

    const text = page.locator('#Form_getForm_Name')
    await text.focus()
    await text.fill('Sumit Bhatt')

    await page.waitForTimeout(5000)

})