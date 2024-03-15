import { Employees } from "../../features/employees/Employees";
import { Zookeeper } from "../../features/employees/zookeeper/Zookeeper";

import { addEmployeeToScreen } from "../dom/dom";

export const employees = new Employees();

export const addEmployeeForm = () => {
  const occupationInput = document.getElementById(
    "employee-occupation",
  ) as HTMLInputElement;
  const zooCheckbox = document.getElementById(
    "employee-zoo",
  ) as HTMLInputElement;
  const safetyCheckbox = document.getElementById(
    "employee-safety",
  ) as HTMLInputElement;
  const dateInput = document.getElementById(
    "employee-date",
  ) as HTMLInputElement;

  const occupation = occupationInput.value;
  const isEmployeeAtZoo = zooCheckbox.checked;
  const safetyTrainingCompletion = safetyCheckbox.checked;
  const safetyTrainingCompletionDate = dateInput.value;

  const newEmployee = new Zookeeper({
    employeeOccupation: occupation,
    isEmployeeAtZoo: isEmployeeAtZoo,
    safetyTrainingCompletion: safetyTrainingCompletion,
    safetyTrainingCompletionDate: safetyTrainingCompletionDate,
  });

  employees.addEmployee(newEmployee);

  console.log("New employee added:", newEmployee);
  addEmployeeToScreen(employees.getAllEmployees());

  occupationInput.value = "";
  zooCheckbox.checked = false;
  safetyCheckbox.checked = false;
  dateInput.value = "";
};
