interface Credentials {
  linkedinUsername: string;
  linkedinPassword: string;
}

interface Viewport {
  width: number;
  height: number;
}

interface BrowserConfig {
  headlessMode: boolean;
  defaultViewport: Viewport;
  userAgent: string;
  timeout: number;
}

interface JobSearchConfig {
  keywords: string[];
  location: string;
  jobType: (
    | "Full-time"
    | "Part-time"
    | "Contract"
    | "Temporary"
    | "Internship"
    | "Volunteer"
  )[];
  experienceLevel: (
    | "Entry-Level"
    | "Mid-Level"
    | "Senior-Level"
    | "Director"
    | "Executive"
  )[];
  companySize: (
    | "1-10 employees"
    | "11-50 employees"
    | "51-200 employees"
    | "201-500 employees"
    | "501-1000 employees"
    | "1001-5000 employees"
    | "5001-10,000 employees"
    | "10,001+ employees"
  )[];
  industries: (
    | string
    | "Tech"
    | "Finance"
    | "Healthcare"
    | "Education"
    | "Manufacturing"
    | "Retail"
    | "Real Estate"
    | "Entertainment"
    | "Government"
    | "Non-Profit"
  )[]; // Expanded with more specific industries
  jobFunction: (
    | "Engineering"
    | "Sales"
    | "Marketing"
    | "IT"
    | "Human Resources"
    | "Finance"
    | "Product Management"
    | "Consulting"
    | "Administrative"
    | "Arts"
  )[]; // Job functions as seen on LinkedIn
  datePosted: ("Past 24 hours" | "Past Week" | "Past Month" | "Any Time")[]; // Filter based on when the job was posted
  remoteOptions: ("Remote" | "On-Site" | "Hybrid")[]; // Job's remote work options
}

interface JobMatchConfig {
  minimumPercentageMatch: number;
}

interface ApplicationConfig {
  maxApplicationsPerDay: number;
  easyApplyWaitTime: number;
  externalWebsiteWaitTime: number;
}

interface CSVConfig {
  confirmValuesPath: string;
  implementSequencePath: string;
}

interface ErrorHandlingConfig {
  maxConsecutiveErrors: number;
  errorLogPath: string;
}

export interface BotConfigInterface {
  credentials: Credentials;
  browser: BrowserConfig;
  jobSearch: JobSearchConfig;
  jobMatch: JobMatchConfig;
  application: ApplicationConfig;
  csv: CSVConfig;
  errorHandling: ErrorHandlingConfig;
}
