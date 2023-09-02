import puppeteer, { Page } from "puppeteer";
import { botConfig } from "../bot-config";
import { randomDelay } from "../helpers/rrandom-delay";

export async function searchJobs(page: Page): Promise<void> {
  // Construct the search URL from the keywords
  const keywords = botConfig.jobSearch.keywords.join("%20");

  // Construct the final search URL
  const searchURL = `https://www.linkedin.com/jobs/search/?f_WT=2&keywords=${keywords}&refresh=true`;

  // Navigate directly to the search results page
  await page.goto(searchURL);
  await randomDelay();
}

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
export async function getAllJobs(
  page: Page
): Promise<{ jobs: string[]; nextPageLink: string | null }> {
  // Extract job listings from the current page using the provided selector
  const jobs = await page.$$eval(
    ".scaffold-layout__list-container .job-card-list__title",
    (elements) => elements.map((e) => e.textContent!.trim())
  );

  // Get the current page number from the pagination
  const currentPageNumber = await page.$eval(
    ".artdeco-pagination__indicator--active span",
    (el) => parseInt(el.textContent!, 10)
  );

  // Try to get the link to the next page using the provided selector
  let nextPageLink: string | null = null;
  try {
    nextPageLink = await page.$eval(
      `[data-test-pagination-page-btn="${currentPageNumber + 1}"] button`,
      (btn) => (btn as HTMLElement).getAttribute("aria-label")
    );
  } catch (error) {
    console.log("No next page found.");
  }

  return { jobs, nextPageLink };
}
