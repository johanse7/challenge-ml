export default class Logger {
  static consoleType = (message: any, currentDate: number, type: string): void => {
    if (typeof message === "string") {
      console.log(`[${currentDate}]  [${type}] ${message}`)
    } else {
      console.log(`[${currentDate}]  [${type}]`, message)
    }
  }

  static info(message: any): void {
    this.consoleType(message, new Date().getTime(), "INFO")
  }

  static warn(message: any): void {
    this.consoleType(message, new Date().getTime(), "WARN")
  }

  static error(message: any): void {
    this.consoleType(message, new Date().getTime(), "ERROR")
  }
}
