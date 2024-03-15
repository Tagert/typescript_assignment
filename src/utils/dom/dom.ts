import {
  cardsBox,
  logMessagesAnimalDiv,
  employeeCardsBox,
  logMessagesEmployeeDiv,
  activeJumpRun,
  activeSleepWalk,
  activeSwimHunt,
} from "./htmlConstants";

import { AnimalType } from "../../features/animals/animal.types";

import { EmployeeType } from "../../features/employees/employees.types";
import { feedingTime } from "../../features/employees/zookeeper/Zookeeper";

import { logger } from "../log-activity/Logger";
import { validateClicked } from "../functionalities/validateClicked";
import { appendAnimalProperties } from "../functionalities/appendAnimalProperties";
import { appendEmployeeDetails } from "../functionalities/appendEmployeeDetails";

export const handleDisplay = (selectedValue: string) => {
  if (selectedValue === "jump-run") {
    activeJumpRun.style.display = "flex";
    activeSleepWalk.style.display = "none";
    activeSwimHunt.style.display = "none";
  } else if (selectedValue === "sleep-walk") {
    activeJumpRun.style.display = "none";
    activeSleepWalk.style.display = "flex";
    activeSwimHunt.style.display = "none";
  } else if (selectedValue === "swim-hunt") {
    activeJumpRun.style.display = "none";
    activeSleepWalk.style.display = "none";
    activeSwimHunt.style.display = "flex";
  }
};

export const addAnimalToScreen = (animals: AnimalType[]) => {
  cardsBox.innerHTML = "";
  logMessagesAnimalDiv.innerHTML = "";

  animals.forEach((animal) => {
    const wrapper = document.createElement("div") as HTMLDivElement;
    wrapper.classList.add("wrapper");

    wrapper.setAttribute("data-name", animal.name);
    wrapper.setAttribute("data-age", animal.age.toString());

    appendAnimalProperties(wrapper, animal);

    wrapper.addEventListener("click", () => {
      validateClicked(wrapper, animals);
    });

    cardsBox.append(wrapper);

    logger.logAnimal(
      `Added new animal: ${animal.name}, created: ${feedingTime} `,
    );
  });
};

export const addEmployeeToScreen = (employees: EmployeeType[]) => {
  employeeCardsBox.innerHTML = "";
  logMessagesEmployeeDiv.innerHTML = "";

  employees.forEach((employee) => {
    const wrapper = document.createElement("div") as HTMLDivElement;
    wrapper.classList.add("wrapper");

    appendEmployeeDetails(wrapper, employee);

    employeeCardsBox.append(wrapper);

    logger.logEmployee(
      `Added new employee: ${employee.employeeOccupation}, created: ${feedingTime} `,
    );
  });
};
