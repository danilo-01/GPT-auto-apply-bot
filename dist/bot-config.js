"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.botConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.botConfig = {
    // User credentials
    credentials: {
        linkedinUsername: process.env.LINKEDIN_USERNAME,
        linkedinPassword: process.env.LINKEDIN_PASSWORD,
    },
    // Browser Configuration
    browser: {
        headlessMode: true,
        defaultViewport: { width: 1280, height: 720 },
        userAgent: "Your User Agent String Here",
        timeout: 30000, // Default timeout for browser operations in milliseconds
    },
    // Job Search Configuration
    jobSearch: {
        keywords: ["Software Engineer", "Data Scientist"],
        location: "San Francisco, CA",
        jobType: ["Full-time"],
        experienceLevel: ["Mid-Level"],
        companySize: ["51-200 employees"],
        industries: ["Tech", "Finance"],
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
        maxApplicationsPerDay: 10,
        easyApplyWaitTime: 5000,
        externalWebsiteWaitTime: 10000, // Wait time in milliseconds for external websites to load
    },
    // CSV Files Configuration
    csv: {
        confirmValuesPath: "./confirm_Values.csv",
        implementSequencePath: "./implement_sequence.csv",
    },
    // Error Handling and Logging
    errorHandling: {
        maxConsecutiveErrors: 5,
        errorLogPath: "./error_log.txt", // Path to save error logs
    },
};
