import test, { Browser, chromium, Page } from "@playwright/test";

test('Single file Upload', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html")

   //Single Upload file
    await page.locator("input[name='upfile']").setInputFiles('./files-to-upload/Example_PNG.png')

    await page.waitForTimeout(5000)
})