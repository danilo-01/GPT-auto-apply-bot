import { Request, Response } from "express";
import { Browser, Page } from "puppeteer";
import express from "express";

import {
  createBrowserInstance,
  loginToLinkedIn,
  navigateToJobsPage,
} from "./logic/browser-navigation";
import { getAllJobs, searchJobs } from "./logic/job-search-logic";

const app = express();
const PORT = 3000;

app.get("/auto-apply", async (req: Request, res: Response) => {
  try {
    const browser: Browser = await createBrowserInstance();
    const page: Page = await browser.newPage();
    // await loginToLinkedIn(page);
    // await navigateToJobsPage(page);
    await searchJobs(page);

    const { jobs, nextPageLink } = await getAllJobs(page);

    console.log(jobs, nextPageLink);
    // Create browser instance
    // Log into linkedin
    // Navigate to jobs page

    // START LOOP
    // Search jobs based off of search queries in configuration
    //    search within each job listing,
    //         determine if listing is above a % match (specified in config file)
    //          IF JOB CANNOT BE COMPLETED, REVERT BACK TO LISTING AND MARK THAT LISTING AS "CANNOT_COMPLETE"
    //              proceed to apply for job
    //              IF JOB IS EASY APPLY
    //                Follow easy apply navigation sequence
    //                use field-to-value mapping from database
    //                IF MAPPING DOESNT EXIST
    //                  append its value to the "confirm_Values.csv" (this will be a csv file that holds the label of the field, its my job to manually put what it should be)
    //              IF JOB IS EXTERNAL WEBSITE
    //                Follow <EXTERNAL_WEBSITE> navigation sequence
    //                IF EXTERNAL_WEBSITE NAVIGATION SEQUENCE DOESNT EXIST
    //                append its value to the "implement_sequence.csv"
    //                Follow form, use field-to-value mapping from database
    //                IF MAPPING DOESNT EXIST
    //                  append its value to the "confirm_Values.csv" (this will be a csv file that holds the label of the field, its my job to manually put what it should be)
    //              REVERT BACK TO LISTING AND MARK THAT LISTING AS "COMPLETE" IF NO ERROR ELSE "CANNOT_COMPLETE"
    // END LOOP

    // const { browser, page } = await loginToLinkedIn(
    //   process.env.LINKEDIN_USERNAME,
    //   process.env.LINKEDIN_PASSWORD
    // );

    // function sequence(action: "LOG_INTO_LINKEDIN") {
    //   switch (action) {
    //     case "LOG_INTO_LINKEDIN":
    //       break;
    //   }
    // }

    // sequence("LOG_INTO_LINKEDIN");

    // const jobs = await searchEasyApplyJobs(page, "Web Developer"); // Or use your desired job title.
    // console.log(jobs);
    // for (let job of jobs) {
    //   await applyEasyApply(page, job.link);
    //   await new Promise((r) => setTimeout(r, 5000)); // A delay to prevent overly rapid form submissions.
    // }

    // res.send("Finished applying to 'Easy Apply' jobs!");

    // await page.close();
    // await browser.close();
  } catch (error) {
    res.send(
      "Error auto-applying to 'Easy Apply' jobs. Check the server console for details."
    );
    console.error("Auto-Apply Error:", error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
