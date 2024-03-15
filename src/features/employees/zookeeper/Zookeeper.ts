import { Employee } from "../Employee";
import { EmployeeType } from "../employees.types";
import { Animal } from "../../animals/Animal";

export class Zookeeper extends Employee {
  constructor({
    employeeOccupation,
    isEmployeeAtZoo,
    safetyTrainingCompletion,
    safetyTrainingCompletionDate,
  }: EmployeeType) {
    super({
      employeeOccupation,
      isEmployeeAtZoo,
      safetyTrainingCompletion,
      safetyTrainingCompletionDate,
    });
  }

  takeSafetyTrainings(): void {
    this.safetyTrainingCompletionDate = new Date().toLocaleString("lt-LT", {
      timeZone: "Europe/Vilnius",
    });
    console.log("Zookeeper completed safety trainings.");
  }

  feedAnimal(animal: Animal): void {
    const feedingTime = new Date().toLocaleString("lt-LT", {
      timeZone: "Europe/Vilnius",
    });

    console.log(`Zookeeper fed a ${animal.name} at ${feedingTime}.`);
  }
}

export const feedingTime = new Date().toLocaleString("lt-LT", {
  timeZone: "Europe/Vilnius",
});
