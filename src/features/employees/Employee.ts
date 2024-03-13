import { EmployeeType, EmployeeMethods } from "./employees.types";

export abstract class Employee implements EmployeeType, EmployeeMethods {
  employeeOccupation: string;
  isEmployeeAtZoo: boolean = false;
  safetyTrainingCompletion: boolean = false;
  safetyTrainingCompletionDate?: string | null;

  constructor({
    employeeOccupation,
    isEmployeeAtZoo,
    safetyTrainingCompletion,
    safetyTrainingCompletionDate,
  }: EmployeeType) {
    this.employeeOccupation = employeeOccupation;
    this.isEmployeeAtZoo = isEmployeeAtZoo;
    this.safetyTrainingCompletion = safetyTrainingCompletion;
    this.safetyTrainingCompletionDate = safetyTrainingCompletionDate;
  }

  enterZoo(): void {
    this.isEmployeeAtZoo = true;
    console.log(`${this.employeeOccupation} entered the zoo.`);
  }

  leaveZoo(): void {
    this.isEmployeeAtZoo = false;
    console.log(`${this.employeeOccupation} left the zoo.`);
  }

  abstract takeSafetyTrainings(): void;
}
