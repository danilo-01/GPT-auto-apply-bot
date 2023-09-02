import puppeteer, { Page } from "puppeteer";
import { botConfig } from "../bot-config";
import { randomDelay } from "../helpers/rrandom-delay";

export async function searchJobs(page: Page): Promise<void> {
  // Input the job keywords from the config
  await page.type(
    "#jobs-search-box-keyword-id-ember25",
    botConfig.jobSearch.keywords.join(", ")
  );
  await randomDelay();
  await page.keyboard.press("Enter");
}

export async function applyFilters(page: Page): Promise<void> {
  // Here, you'd interact with the filter UI elements on LinkedIn's job search page.
  // This is a basic example for location, but you'd need to expand this for other filters.
  await page.click(".location-filter__input"); // This is a placeholder selector; the actual selector might differ
  await page.type(".location-filter__input", botConfig.jobSearch.location);
  await page.keyboard.press("Enter");
}

export async function getAllJobs(
  page: Page
): Promise<{ jobs: string[]; nextPageLink: string }> {
  // Scrape job listings from the current page
  const jobs = await page.$$eval(".job-card-list__title", (elements) =>
    elements.map((e) => e.textContent || "")
  );

  // Get the link to the next page
  const nextPageLink = await page.$eval(
    ".next-page",
    (el) => (el as HTMLAnchorElement).href
  ); // Placeholder selector; the actual selector might differ

  return { jobs, nextPageLink };
}
