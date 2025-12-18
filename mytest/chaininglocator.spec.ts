import test, { Browser, chromium, Page } from "@playwright/test";
import { pathToFileURL } from "url";

test('Locator test', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("https://www.orangehrm.com/en/30-day-free-trial");

    // await page.locator('form#Form_getForm >> #Form_getForm_Name').fill("Sumit Bhatt")
    // await page.locator('form#Form_getForm >> text=Get Your Free Trial').click()

    // const form = page.locator('form#Form_getForm')
    // const getYourFreeTrButton = page.getByRole('button', {name: 'Get Your Free Trial'})

    await page.locator('form#Form_getForm').locator('#Form_getForm_Name').fill('Sumit Bhatt')
    await page.locator('form#Form_getForm').getByRole('button', {name: 'Get Your Free Trial'}).click()
    // await form.locator(getYourFreeTrButton).click()
    

    await page.waitForTimeout(3000)
})