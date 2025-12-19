import test, { Browser, chromium, Locator, Page } from "@playwright/test";

test('Select Drop Down test', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("https://www.magupdate.co.uk/reader-enquiry/PATI/254");

    const countryDropDown = "select#Contact_CountryCode"

    // await page.selectOption(countryDropDown, {value: 'AD'})
    // await page.selectOption(countryDropDown, {label: 'Australia'})
    // await page.selectOption(countryDropDown, {index: 5})

    const allOptions = await page.$$(countryDropDown + ' > option')
    console.log(allOptions.length)

    for(const e of allOptions){
        const text = await e.textContent()
        console.log(text);
        if(text === 'India'){
            await page.selectOption(countryDropDown, {label: text})
            break
        }
    }

    await page.waitForTimeout(10000)

})