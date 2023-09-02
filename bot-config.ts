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
    keywords: ["Software Engineer"],
    location: "Austin",
    jobType: {
      fullTime: true,
      partTime: true,
      contract: true,
      temporary: false,
      internship: false,
      volunteer: false,
    },
    companySize: {
      "1-10 employees": true,
      "11-50 employees": true,
      "51-200 employees": true,
      "201-500 employees": true,
      "501-1000 employees": true,
      "1001-5000 employees": true,
      "5001-10,000 employees": true,
      "10,001+ employees": true,
    },
    industries: {
      tech: true,
      finance: true,
      healthcare: false,
      education: false,
      manufacturing: false,
      retail: false,
      realEstate: false,
      entertainment: false,
      government: false,
      nonProfit: false,
    },
    jobFunction: {
      engineering: false,
      sales: false,
      marketing: false,
      IT: false,
      humanResources: false,
      finance: false,
      productManagement: false,
      consulting: false,
      administrative: false,
      arts: false,
    },
    datePosted: {
      past24Hours: false,
      pastWeek: false,
      pastMonth: false,
      anyTime: false,
    },
    remoteOptions: {
      onSite: false,
      remote: true,
      hybrid: false,
    },
    experienceLevel: {
      internship: false,
      entryLevel: false,
      associate: false,
      midSeniorLevel: false,
      director: false,
      executive: false,
    },
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
