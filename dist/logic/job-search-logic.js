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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllJobs = exports.applyFilters = exports.searchJobs = void 0;
const bot_config_1 = require("../bot-config");
const rrandom_delay_1 = require("../helpers/rrandom-delay");
function searchJobs(page) {
    return __awaiter(this, void 0, void 0, function* () {
        // Input the job keywords from the config
        yield page.type("#jobs-search-box-keyword-id-ember25", bot_config_1.botConfig.jobSearch.keywords.join(", "));
        yield (0, rrandom_delay_1.randomDelay)();
        yield page.keyboard.press("Enter");
    });
}
exports.searchJobs = searchJobs;
function applyFilters(page) {
    return __awaiter(this, void 0, void 0, function* () {
        // Here, you'd interact with the filter UI elements on LinkedIn's job search page.
        // This is a basic example for location, but you'd need to expand this for other filters.
        yield page.click(".location-filter__input"); // This is a placeholder selector; the actual selector might differ
        yield page.type(".location-filter__input", bot_config_1.botConfig.jobSearch.location);
        yield page.keyboard.press("Enter");
    });
}
exports.applyFilters = applyFilters;
function getAllJobs(page) {
    return __awaiter(this, void 0, void 0, function* () {
        // Scrape job listings from the current page
        const jobs = yield page.$$eval(".job-card-list__title", (elements) => elements.map((e) => e.textContent || ""));
        // Get the link to the next page
        const nextPageLink = yield page.$eval(".next-page", (el) => el.href); // Placeholder selector; the actual selector might differ
        return { jobs, nextPageLink };
    });
}
exports.getAllJobs = getAllJobs;
