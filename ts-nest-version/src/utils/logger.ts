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
export const logger = {
  logs: [] as string[],
  log(message: string) {
    this.logs.push(message);
    console.log(message);
  },
  error(message: string) {
    this.logs.push(`ERROR: ${message}`);
    console.error(message);
  },
  getLogs() {
    return this.logs;
  },
};
