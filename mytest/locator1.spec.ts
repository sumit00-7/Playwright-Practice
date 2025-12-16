import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, firefox, chromium } from '@playwright/test';

test('Locator test', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    //create a web element(locator) + perform action on it (click, fill)
    //1. Id: unique
    const firstName: Locator = page.locator("id=input-firstname")
    const lastName: Locator = page.locator("id=input-lastname")
    
    await firstName.fill("Sumit")
    await lastName.fill("Bhatt")

    //2. class name

    const logo: Locator = page.locator(".img-responsive")
    const logoExist = await logo.isEnabled()
    console.log(logoExist);
    
    //3. Text
    const header: Locator = page.locator("text=Register Account")
    const headerExist = await header.isEnabled()
    console.log(headerExist);
    
    const continueBtn: Locator = page.locator("text=Continue")
    const continueBtnExist = await header.isEnabled()
    console.log(continueBtnExist);

    const forgotPwdLink: Locator = page.locator("text=Forgotton Password")
    const forgotPwdLinkExist = await header.isEnabled()
    console.log(forgotPwdLinkExist);

})