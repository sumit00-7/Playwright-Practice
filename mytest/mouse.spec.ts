import test, { Browser, chromium, Page } from "@playwright/test";

test('move to element test', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    //Double Click
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    await page.getByText("Double-Click Me To See Alert").dblclick()
    await page.waitForTimeout(3000)

    //Right Click/ Context Click
    await page.getByText("right click me").click({ button: 'right' })
    await page.waitForTimeout(3000)

    //Shift Click
    await page.goto("https://the-internet.herokuapp.com/shifting_content")
    await page.getByText("Example 1: Menu Element").click({modifiers:['Shift']})

    await page.waitForTimeout(3000)
    browser.close()

})