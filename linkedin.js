const puppeteer = require("puppeteer");

const LINKEDIN_URL = "https://www.linkedin.com/login";
const LINKEDIN_JOBS_URL = "https://www.linkedin.com/jobs";

// Note: The selectors below are based on your provided code. They might need adjustment based on LinkedIn's actual structure.
const EMAIL_SELECTOR = "#username";
const PASSWORD_SELECTOR = "#password";
const SUBMIT_BUTTON_SELECTOR = 'button[type="submit"]';
const JOB_SEARCH_INPUT_SELECTOR = ".jobs-search-box__text-input";
const JOB_LIST_SELECTOR = ".job-card-container";

async function initializeBrowser(username, password) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 1280, height: 800 }); // You can adjust this size based on your needs

  return { browser, page };
}

async function searchJobs(page, jobTitle) {
  await page.goto(LINKEDIN_JOBS_URL);
  await page.waitForSelector(JOB_SEARCH_INPUT_SELECTOR);
  await page.type(JOB_SEARCH_INPUT_SELECTOR, jobTitle);
  await page.keyboard.press("Enter");

  // Introducing better wait logic here
  await page.waitForSelector(JOB_LIST_SELECTOR);

  const jobs = await page.$$eval(JOB_LIST_SELECTOR, (jobCards) => {
    return jobCards.map((card) => {
      // Make sure to handle potential null values or missing elements here
      const titleElement = card.querySelector(".job-card-list__title");
      const linkElement = card.querySelector(".job-card-container__link");
      return {
        title: titleElement ? titleElement.innerText : "Unknown Title",
        link: linkElement ? linkElement.href : "#",
      };
    });
  });

  return jobs;
}

const EASY_APPLY_SELECTOR = ".job-card-container__easy-apply-label";

async function searchEasyApplyJobs(page, jobTitle) {
  await page.goto(LINKEDIN_JOBS_URL);
  await page.waitForSelector(JOB_SEARCH_INPUT_SELECTOR);

  //   I have two of these because when the input is first selected the messages will popup and stop the script from focusing on the input
  await new Promise((r) => setTimeout(r, 2000)); // Wait for 2 seconds.
  await page.type(JOB_SEARCH_INPUT_SELECTOR, " ");

  await new Promise((r) => setTimeout(r, 3000)); // Wait for 2 seconds.
  await page.type(JOB_SEARCH_INPUT_SELECTOR, jobTitle);

  await page.keyboard.press("Enter");
  // Get only those jobs that have the "Easy Apply" label
  const jobs = await page.$$eval(JOB_LIST_SELECTOR, (jobCards) => {
    return jobCards
      .filter((card) => card.querySelector(EASY_APPLY_SELECTOR))
      .map((card) => {
        return {
          title: card.querySelector(".job-card-list__title").innerText,
          link: card.querySelector(".job-card-container__link").href,
        };
      });
  });

  return jobs;
}

const EASY_APPLY_BUTTON_SELECTOR =
  'button[data-control-name="jobdetails_topcard_inapply"]';
// You might need to refine the selectors for the application form fields based on the actual form structure.
const APPLY_NAME_SELECTOR = "#YOUR_NAME_FIELD_SELECTOR"; // Placeholder
const APPLY_EMAIL_SELECTOR = "#YOUR_EMAIL_FIELD_SELECTOR"; // Placeholder
const APPLY_SUBMIT_SELECTOR = "#YOUR_SUBMIT_BUTTON_SELECTOR"; // Placeholder

async function applyEasyApply(page, jobLink) {
  await page.goto(jobLink);

  const isEasyApplyAvailable = await page.$(EASY_APPLY_BUTTON_SELECTOR);
  if (!isEasyApplyAvailable) return; // If no Easy Apply button, just return

  await page.click(EASY_APPLY_BUTTON_SELECTOR);
  await page.waitForSelector(APPLY_NAME_SELECTOR);

  await page.type(APPLY_NAME_SELECTOR, "Danilo Costilla");
  await page.type(APPLY_EMAIL_SELECTOR, "Danilo.01@live.com");

  await page.click(APPLY_SUBMIT_SELECTOR);
}

module.exports = {
  loginToLinkedIn,
  searchJobs,
  searchEasyApplyJobs,
  applyEasyApply,
};
