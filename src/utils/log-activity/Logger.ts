import { logMessagesAnimalDiv } from "../dom/htmlConstants";
import { logMessagesEmployeeDiv } from "../dom/htmlConstants";

export class Logger {
  private static instance: Logger;
  private animalLogs: string[];
  private employeeLogs: string[];

  private constructor() {
    this.animalLogs = [];
    this.employeeLogs = [];
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  logAnimal(message: string): void {
    this.animalLogs.push(message);
    console.log(message);
    this.render(message, logMessagesAnimalDiv);
  }

  logEmployee(message: string): void {
    this.employeeLogs.push(message);
    console.log(message);
    this.render(message, logMessagesEmployeeDiv);
  }

  render(message: string, logDiv: HTMLDivElement): void {
    const logEntry = document.createElement("p");
    logEntry.textContent = message;
    logDiv.append(logEntry);
  }

  getAnimalLogs(): string[] {
    return this.animalLogs;
  }

  getEmployeeLogs(): string[] {
    return this.employeeLogs;
  }
}

export const logger = Logger.getInstance();
