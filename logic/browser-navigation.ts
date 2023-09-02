import puppeteer, { Browser, Page } from "puppeteer";
import { randomDelay } from "../helpers/rrandom-delay";
import { botConfig } from "../bot-config";

export async function createBrowserInstance(): Promise<Browser> {
  // Launch the browser in maximized mode
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null, // Important: set the defaultViewport to null
    args: ["--start-maximized"], // Start the browser maximized
  });

  // Get the first page and set its viewport to match the browser window size
  const [page] = await browser.pages();
  const windowSize = await page.evaluate(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));
  await page.setViewport(windowSize);

  return browser;
}

export async function loginToLinkedIn(page: Page): Promise<void> {
  const { linkedinUsername, linkedinPassword } = botConfig.credentials;

  await page.goto("https://www.linkedin.com/login");

  await randomDelay();
  await page.type("#username", linkedinUsername);

  await randomDelay();
  await page.type("#password", linkedinPassword);

  await randomDelay();
  await page.click(".login__form_action_container"); // This is a generic selector for the login button, you might need to adjust based on LinkedIn's actual structure

  // Wait for navigation to complete
  await page.waitForNavigation();
}

export async function navigateToJobsPage(page: Page): Promise<void> {
  await page.goto("https://www.linkedin.com/jobs");
  await randomDelay();
}
