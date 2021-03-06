import { createBrowser, createReportWithBrowser } from "./lighthouse.mjs";
import fs from "fs";
import Assert from "assert";


    (async()=>{
        const browser = await createBrowser();
        const result = await createReportWithBrowser(
            browser, 
            "http://localhost:3000/story/",
            {
                output:"html"
            }
        );

        Assert(result.report, "No report returned");

        fs.writeFileSync("reportbezhydro.html", result.report, "utf-8");

        await browser.close();

    })()
    .catch(console.error)
    .then(()=>{console.log("Finished! ")});