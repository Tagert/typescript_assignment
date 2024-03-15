import {
  addAnimalButton,
  addEmployeeButton,
  typeSelect,
  logAnimalButton,
  logEmployeeButton,
} from "./utils/dom/htmlConstants";

import {
  addAnimalForm,
  animals,
} from "./utils/add-elements-to-objects/addAnimal";
import {
  addEmployeeForm,
  employees,
} from "./utils/add-elements-to-objects/addEmployee";

import { handleDisplay } from "./utils/dom/dom";

import { logger } from "./utils/log-activity/Logger";

import { existsEmployees } from "./features/employees/existsEmployees";
import { existsAnimals } from "./features/animals/existsAnimals";

console.log(existsAnimals);

console.log(existsEmployees);

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

const animalLogs = logger.getAnimalLogs();
console.log(animalLogs);

const employeeLogs = logger.getEmployeeLogs();
console.log(employeeLogs);
