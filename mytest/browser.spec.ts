import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, firefox, chromium } from '@playwright/test';

test('login test', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});

    // Browser Context 1
    const browserContext_1:BrowserContext = await browser.newContext();
    const page1:Page = await browserContext_1.newPage();

    // Browser Context 2
    const browserContext_2:BrowserContext = await browser.newContext();
    const page2:Page = await browserContext_2.newPage();

    // Browser 1
    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailId1:Locator = await page1.locator('#input-email');
    const password1:Locator = await page1.locator('#input-password');
    const loginButton1:Locator = await page1.locator('[value="Login"]');

    await emailId1.fill('sumitbhatt@pw.com');
    await password1.fill('Test@123');
    await loginButton1.click();

    // Browser 2
    await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailId2:Locator = await page2.locator('#input-email');
    const password2:Locator = await page2.locator('#input-password');
    const loginButton2:Locator = await page2.locator('[value="Login"]');

    await emailId2.fill('userpw@pw.com');
    await password2.fill('Test@123');
    await loginButton2.click();

    // await browserContext_1.close();
    // await browserContext_2.close();
    // browser.close();

    await new Promise(()=>{});
});