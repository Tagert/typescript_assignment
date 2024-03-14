import { Animal } from "./features/animals/Animal";

import { Zebra } from "./features/animals/exists-in-zoo/Zebra";
import { Elephant } from "./features/animals/exists-in-zoo/Elephant";
import { Tiger } from "./features/animals/exists-in-zoo/Tiger";

import { addAnimalForm, animals } from "./utils/addAnimal";
import { addEmployeeForm, employees } from "./utils/addEmployee";

import { handleDisplay } from "./utils/dom";
import { Zookeeper } from "./features/employees/zookeeper/Zookeeper";

import { Logger } from "./utils/Logger";
import { Employee } from "./features/employees/Employee";

const addAnimalButton = document.getElementById(
  "animal-btn",
) as HTMLButtonElement;
const addEmployeeButton = document.getElementById(
  "employee-btn",
) as HTMLButtonElement;

const logAnimalButton = document.getElementById(
  "log-animal-btn",
) as HTMLButtonElement;
const logEmployeeButton = document.getElementById(
  "log-employee-btn",
) as HTMLButtonElement;

export const typeSelect = document.getElementById(
  "animal-type",
) as HTMLSelectElement;

const zebra = new Zebra({
  name: "Zebra",
  age: 5,
  maxSpeed: 40,
  origin: "Africa",
});
const elephant = new Elephant({ name: "Elephant", age: 10, weight: 4500 });
const tiger = new Tiger({ name: "Tiger", age: 6, statusMoreThan8Hours: false });

export const existsAnimals: Animal[] = [zebra, elephant, tiger];

console.log(existsAnimals);

export const zooKeeper = new Zookeeper({
  employeeOccupation: "Zookeeper",
  isEmployeeAtZoo: true,
  safetyTrainingCompletion: true,
  safetyTrainingCompletionDate: "2008-08-10",
});

export const existsEmployees: Employee[] = [zooKeeper];

console.log(existsEmployees);

zooKeeper.feedAnimal(tiger);

//

addAnimalButton.addEventListener("click", addAnimalForm);
addEmployeeButton.addEventListener("click", addEmployeeForm);

typeSelect.addEventListener("change", () => {
  const selectedValue = typeSelect.value;
  handleDisplay(selectedValue);
});

logAnimalButton.addEventListener("click", () => {
  const logAnimals = animals.getAllAnimals();
  console.log(logAnimals);
});

logEmployeeButton.addEventListener("click", () => {
  const logEmployees = employees.getAllEmployees();
  console.log(logEmployees);
});

export const logger = Logger.getInstance();

const animalLogs = logger.getAnimalLogs();
console.log(animalLogs);

const employeeLogs = logger.getEmployeeLogs();
console.log(employeeLogs);
