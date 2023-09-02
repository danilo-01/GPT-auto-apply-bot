import { BotConfigInterface } from "./models/bot-config-interface";
import dotenv from "dotenv";
dotenv.config();

export const botConfig: BotConfigInterface = {
  // User credentials
  credentials: {
    linkedinUsername: process.env.LINKEDIN_USERNAME!,
    linkedinPassword: process.env.LINKEDIN_PASSWORD!,
  },

  // Browser Configuration
  browser: {
    headlessMode: true, // Set to false if you want to see the browser in action
    defaultViewport: { width: 1280, height: 720 }, // Default viewport size for the browser
    userAgent: "Your User Agent String Here", // To mimic a real browser request
    timeout: 30000, // Default timeout for browser operations in milliseconds
  },

  // Job Search Configuration
  jobSearch: {
    keywords: ["Software Engineer", "Data Scientist"], // Job titles or keywords you're interested in
    location: "San Francisco, CA", // Preferred job location
    jobType: ["Full-time"], // 'Part-time', 'Contract', etc.
    experienceLevel: ["Mid-Level"], // 'Entry-Level', 'Senior-Level', etc.
    companySize: ["51-200 employees"], // Preferred company size
    industries: ["Tech", "Finance"], // Preferred industries
    jobFunction: [],
    datePosted: [],
    remoteOptions: [],
  },

  // Job Matching Configuration
  jobMatch: {
    minimumPercentageMatch: 80, // Minimum % match for a job listing to be considered
  },

  // Job Application Configuration
  application: {
    maxApplicationsPerDay: 10, // Limit the number of applications per day to avoid being flagged
    easyApplyWaitTime: 5000, // Wait time in milliseconds between steps in the Easy Apply process
    externalWebsiteWaitTime: 10000, // Wait time in milliseconds for external websites to load
  },

  // CSV Files Configuration
  csv: {
    confirmValuesPath: "./confirm_Values.csv",
    implementSequencePath: "./implement_sequence.csv",
  },

  // Error Handling and Logging
  errorHandling: {
    maxConsecutiveErrors: 5, // Stop the bot after 'n' consecutive errors to avoid being flagged or banned
    errorLogPath: "./error_log.txt", // Path to save error logs
  },
};
