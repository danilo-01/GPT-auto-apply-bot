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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigateToJobsPage = exports.loginToLinkedIn = exports.createBrowserInstance = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const rrandom_delay_1 = require("../helpers/rrandom-delay");
const bot_config_1 = require("../bot-config");
function createBrowserInstance() {
    return __awaiter(this, void 0, void 0, function* () {
        // Launch the browser in maximized mode
        const browser = yield puppeteer_1.default.launch({
            executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"],
        });
        // Get the first page and set its viewport to match the browser window size
        const [page] = yield browser.pages();
        const windowSize = yield page.evaluate(() => ({
            width: window.innerWidth,
            height: window.innerHeight,
        }));
        yield page.setViewport(windowSize);
        return browser;
    });
}
exports.createBrowserInstance = createBrowserInstance;
function loginToLinkedIn(page) {
    return __awaiter(this, void 0, void 0, function* () {
        const { linkedinUsername, linkedinPassword } = bot_config_1.botConfig.credentials;
        yield page.goto("https://www.linkedin.com/login");
        yield (0, rrandom_delay_1.randomDelay)();
        yield page.type("#username", linkedinUsername);
        yield (0, rrandom_delay_1.randomDelay)();
        yield page.type("#password", linkedinPassword);
        yield (0, rrandom_delay_1.randomDelay)();
        yield page.click(".login__form_action_container"); // This is a generic selector for the login button, you might need to adjust based on LinkedIn's actual structure
        // Wait for navigation to complete
        yield page.waitForNavigation();
    });
}
exports.loginToLinkedIn = loginToLinkedIn;
function navigateToJobsPage(page) {
    return __awaiter(this, void 0, void 0, function* () {
        yield page.goto("https://www.linkedin.com/jobs");
        yield (0, rrandom_delay_1.randomDelay)();
    });
}
exports.navigateToJobsPage = navigateToJobsPage;
