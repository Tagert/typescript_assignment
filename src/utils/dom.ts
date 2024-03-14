import {
  AnimalType,
  ZebraType,
  ElephantType,
} from "../features/animals/animal.types";
import { EmployeeType } from "../features/employees/employees.types";
import { zooKeeper } from "../main";

import { addLogMessageToScreen } from "./logActivity";
import { logger } from "../main";

const activeJumpRun = document.querySelector(
  ".active-jump-run",
) as HTMLDivElement;
const activeSleepWalk = document.querySelector(
  ".active-sleep-walk",
) as HTMLDivElement;
const activeSwimHunt = document.querySelector(
  ".active-swim-hunt",
) as HTMLDivElement;
const cardsBox = document.querySelector(".cards-box") as HTMLDivElement;
const employeeCardsBox = document.querySelector(
  ".employees-cards-box",
) as HTMLDivElement;
const feedingTime = new Date().toLocaleString("lt-LT", {
  timeZone: "Europe/Vilnius",
});
export const logMessagesAnimalDiv = document.querySelector(
  ".log-messages-animal",
) as HTMLDivElement;
export const logMessagesEmployeeDiv = document.querySelector(
  ".log-messages-employee",
) as HTMLDivElement;
export const logEventDiv = document.querySelector(
  ".log-event",
) as HTMLDivElement;

export function handleDisplay(selectedValue: string) {
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
}

export const addAnimalToScreen = (animals: AnimalType[]) => {
  cardsBox.innerHTML = "";
  logMessagesAnimalDiv.innerHTML = "";

  animals.forEach((animal) => {
    const wrapper = document.createElement("div") as HTMLDivElement;
    wrapper.classList.add("wrapper");

    const name = document.createElement("h4") as HTMLHeadingElement;
    const age = document.createElement("h4") as HTMLHeadingElement;
    const maxSpeed = document.createElement("h4") as HTMLHeadingElement;
    const origin = document.createElement("h4") as HTMLHeadingElement;
    const weight = document.createElement("h4") as HTMLHeadingElement;
    const fedStatus = document.createElement("h4") as HTMLHeadingElement;

    name.textContent = `Animal: ${animal.name}`;
    age.textContent = `Age: ${animal.age.toString()} years`;

    if ("maxSpeed" in animal) {
      maxSpeed.textContent = `Max speed: ${(animal as ZebraType).maxSpeed.toString()} Km/h`;
      origin.textContent = `Origin: ${(animal as ZebraType).origin}`;
    } else if ("weight" in animal) {
      weight.textContent = `Weight: ${(animal as ElephantType).weight.toString()} Kg`;
    } else if ("statusMoreThan8Hours" in animal) {
      fedStatus.textContent = animal.statusMoreThan8Hours
        ? "The animal is fed"
        : "The animal is not fed";
    }

    wrapper.setAttribute("data-name", animal.name);
    wrapper.setAttribute("data-age", animal.age.toString());

    wrapper.addEventListener("click", () => {
      const clickedName = wrapper.getAttribute("data-name");
      const clickedAge = parseInt(wrapper.getAttribute("data-age") || "0");
      const clickedAnimal: any = animals.find(
        (a) => a.name === clickedName && a.age === clickedAge,
      );

      if (clickedAnimal) {
        zooKeeper.feedAnimal(clickedAnimal);
        addLogMessageToScreen(
          `${zooKeeper.employeeOccupation} fed a ${clickedAnimal.name} at ${feedingTime}.`,
        );
      }
    });

    wrapper.append(name, age, maxSpeed, origin, weight, fedStatus);

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
    safetyTrainingCompletion.textContent = `Safety completed: ${
      employee.safetyTrainingCompletion ? "Yes" : "No"
    }`;
    safetyTrainingCompletionDate.textContent = `Date: ${employee.safetyTrainingCompletionDate}`;

    wrapper.append(
      occupation,
      isEmployeeAtZoo,
      safetyTrainingCompletion,
      safetyTrainingCompletionDate,
    );

    employeeCardsBox.append(wrapper);

    logger.logEmployee(
      `Added new employee: ${employee.employeeOccupation}, created: ${feedingTime} `,
    );
  });
};
