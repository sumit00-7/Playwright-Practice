import test, { Browser, chromium, Page } from "@playwright/test";
import path from "path";

test('Mutilple File Upload', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    // //Mutilple Upload file
    // await page.locator("input[name='filesToUpload']")
    //     .setInputFiles([
    //         path.join('./files-to-upload/Example_PNG.png'),
    //         path.join('./files-to-upload/sample-local-pdf.pdf'),
    //         path.join('./files-to-upload/simple.txt')
    //     ])

    // await page.waitForTimeout(4000)

    // //Deselcts All the files
    // await page.locator("input[name='filesToUpload']").setInputFiles([])

    //Upload file from Buffer memory
    await page.locator("input[name='filesToUpload']").setInputFiles({
        name: 'sumit_resume.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from("this is Sumit's Resume")
    })

    await page.waitForTimeout(5000)
})