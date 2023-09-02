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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllJobs = exports.searchJobs = void 0;
const bot_config_1 = require("../bot-config");
const rrandom_delay_1 = require("../helpers/rrandom-delay");
function searchJobs(page) {
    return __awaiter(this, void 0, void 0, function* () {
        // Construct the search URL from the keywords
        const keywords = bot_config_1.botConfig.jobSearch.keywords.join("%20");
        // Construct the final search URL
        const searchURL = `https://www.linkedin.com/jobs/search/?f_WT=2&keywords=${keywords}&refresh=true`;
        // Navigate directly to the search results page
        yield page.goto(searchURL);
        yield (0, rrandom_delay_1.randomDelay)();
    });
}
exports.searchJobs = searchJobs;
// export async function applyFilters(page: Page): Promise<void> {
//   // Here, you'd interact with the filter UI elements on LinkedIn's job search page.
//   // This is a basic example for location, but you'd need to expand this for other filters.
//   await page.click(".location-filter__input"); // This is a placeholder selector; the actual selector might differ
//   await page.type(".location-filter__input", botConfig.jobSearch.location);
//   await page.keyboard.press("Enter");
// }
// // List of jobs container
// document.querySelector(".scaffold-layout__list-container");
// // Apply button inside of <li> element
// document.querySelector(
//   `.jobs-apply-button.artdeco-button.artdeco-button--icon-right.artdeco-button--3.artdeco-button--primary.ember-view`
// );
// // Page list <ul> element
// document.querySelector(
//   ".artdeco-pagination__pages.artdeco-pagination__pages--number"
// );
function getAllJobs(page) {
    return __awaiter(this, void 0, void 0, function* () {
        // Extract job listings from the current page using the provided selector
        const jobs = yield page.$$eval(".scaffold-layout__list-container .job-card-list__title", (elements) => elements.map((e) => e.textContent.trim()));
        // Get the current page number from the pagination
        const currentPageNumber = yield page.$eval(".artdeco-pagination__indicator--active span", (el) => parseInt(el.textContent, 10));
        // Try to get the link to the next page using the provided selector
        let nextPageLink = null;
        try {
            nextPageLink = yield page.$eval(`[data-test-pagination-page-btn="${currentPageNumber + 1}"] button`, (btn) => btn.getAttribute("aria-label"));
        }
        catch (error) {
            console.log("No next page found.");
        }
        return { jobs, nextPageLink };
    });
}
exports.getAllJobs = getAllJobs;
