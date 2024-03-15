import { EmployeeType } from "../../features/employees/employees.types";

export const appendEmployeeDetails = (
  wrapper: HTMLDivElement,
  employee: EmployeeType,
) => {
  const occupation = document.createElement("h4") as HTMLHeadingElement;
  const isEmployeeAtZoo = document.createElement("h4") as HTMLHeadingElement;
  const safetyTrainingCompletion = document.createElement(
    "h4",
  ) as HTMLHeadingElement;
  const safetyTrainingCompletionDate = document.createElement(
    "h4",
  ) as HTMLHeadingElement;

  occupation.textContent = `Occupation: ${employee.employeeOccupation}`;
  isEmployeeAtZoo.textContent = `At zoo: ${employee.isEmployeeAtZoo ? "Yes" : "No"}`;
  safetyTrainingCompletion.textContent = `Safety completed: ${employee.safetyTrainingCompletion ? "Yes" : "No"}`;
  safetyTrainingCompletionDate.textContent = `Date: ${employee.safetyTrainingCompletionDate}`;

  wrapper.append(
    occupation,
    isEmployeeAtZoo,
    safetyTrainingCompletion,
    safetyTrainingCompletionDate,
  );
};
