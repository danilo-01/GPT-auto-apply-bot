"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const browser_navigation_1 = require("./logic/browser-navigation");
const job_search_logic_1 = require("./logic/job-search-logic");
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/auto-apply", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const browser = yield (0, browser_navigation_1.createBrowserInstance)();
        const page = yield browser.newPage();
        // await loginToLinkedIn(page);
        // await navigateToJobsPage(page);
        yield (0, job_search_logic_1.searchJobs)(page);
        const { jobs, nextPageLink } = yield (0, job_search_logic_1.getAllJobs)(page);
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
    }
    catch (error) {
        res.send("Error auto-applying to 'Easy Apply' jobs. Check the server console for details.");
        console.error("Auto-Apply Error:", error);
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
