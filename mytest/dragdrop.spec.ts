import test, { Browser, chromium, Page } from "@playwright/test";

test('move to element', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("https://jqueryui.com/droppable/")

    //Draggable and Droppable elements are inside an <iframe>, not on the main page.
    const frame = page.frameLocator(".demo-frame");
    
    // await frame.getByText('Drag me to my target').first().dragTo(frame.getByText('Drop here').first())

    await frame.locator("//div[@id='draggable']").hover();
    await page.mouse.down();
    await frame.locator("//div[@id='droppable']").hover();
    await page.mouse.up();



})