"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
/*
// src/utils/logger.ts
export class AppLogger {
  private static logs: string[] = [];

  static log(message: string) {
    const timestamp = new Date().toISOString();
    this.logs.push(`[${timestamp}] ${message}`);
  }

  static getLogs() {
    return this.logs;
  }
}
*/
/*
export const logger = {
  log: (message: string) => console.log(`[LOG] ${message}`),
  error: (message: string) => console.error(`[ERROR] ${message}`),
};
*/
exports.logger = {
    logs: [],
    log: function (message) {
        this.logs.push(message);
        console.log(message);
    },
    error: function (message) {
        this.logs.push("ERROR: ".concat(message));
        console.error(message);
    },
    getLogs: function () {
        return this.logs;
    },
};
