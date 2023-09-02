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
exports.randomDelay = void 0;
// Helper function to introduce a random delay between 0.2 to 1 second
function randomDelay() {
    return __awaiter(this, void 0, void 0, function* () {
        const min = 200; // 0.2 seconds
        const max = 1000; // 1 second
        const delay = Math.random() * (max - min) + min;
        return new Promise((resolve) => setTimeout(resolve, delay));
    });
}
exports.randomDelay = randomDelay;
