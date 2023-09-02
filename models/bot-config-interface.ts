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

  jobType: {
    fullTime: boolean;
    partTime: boolean;
    contract: boolean;
    temporary: boolean;
    internship: boolean;
    volunteer: boolean;
  };

  companySize: {
    "1-10 employees": boolean;
    "11-50 employees": boolean;
    "51-200 employees": boolean;
    "201-500 employees": boolean;
    "501-1000 employees": boolean;
    "1001-5000 employees": boolean;
    "5001-10,000 employees": boolean;
    "10,001+ employees": boolean;
  };

  industries: {
    tech: boolean;
    finance: boolean;
    healthcare: boolean;
    education: boolean;
    manufacturing: boolean;
    retail: boolean;
    realEstate: boolean;
    entertainment: boolean;
    government: boolean;
    nonProfit: boolean;
    [key: string]: boolean; // This allows for additional industries as strings
  };

  jobFunction: {
    engineering: boolean;
    sales: boolean;
    marketing: boolean;
    IT: boolean;
    humanResources: boolean;
    finance: boolean;
    productManagement: boolean;
    consulting: boolean;
    administrative: boolean;
    arts: boolean;
  };

  datePosted: {
    past24Hours: boolean;
    pastWeek: boolean;
    pastMonth: boolean;
    anyTime: boolean;
  };

  remoteOptions: {
    onSite: boolean;
    remote: boolean;
    hybrid: boolean;
  };

  experienceLevel: {
    internship: boolean;
    entryLevel: boolean;
    associate: boolean;
    midSeniorLevel: boolean;
    director: boolean;
    executive: boolean;
  };
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
