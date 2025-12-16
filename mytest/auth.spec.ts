import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, firefox, chromium } from '@playwright/test';

test('login test', async()=>{
    const browser:Browser = await firefox.launch({headless: false});
    // Browser Context
    const browserContext:BrowserContext = await browser.newContext();
    const page:Page = await browserContext.newPage();

    const userName = 'admin';
    const password = 'admin';
    page.setExtraHTTPHeaders({Authorization : createAuthHeader(userName, password)});

    await page.goto("https://the-internet.herokuapp.com/basic_auth");



    await new Promise(() => {});

});

function createAuthHeader(userName:any, password:any){
    return "Basic " + btoa(userName+":"+password);
}