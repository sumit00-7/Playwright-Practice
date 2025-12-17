import test, { Browser, BrowserContext, chromium, firefox, Page } from "@playwright/test";

test('No Icognito test', async()=>{

    // const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});

    // run browaser in non icognito mode
    const browser:BrowserContext = await chromium.launchPersistentContext('', {headless: false, channel: 'chrome'})
    // const browser:BrowserContext = await firefox.launchPersistentContext('', {headless: false})

    const pages: Page[] = browser.pages() //2

    const page: Page = pages[0]

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    await page.locator("id=input-firstname").fill('Sumit')
    await page.locator("id=input-lastname").fill('Bhatt')


    await page.waitForTimeout(3000)
})