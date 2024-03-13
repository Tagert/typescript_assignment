import { Animals } from "./features/animals/Animals";
import { JumpRunAnimal } from "./features/animals/groups-animals/JumpRunAnimal";
import { SleepWalkAnimal } from "./features/animals/groups-animals/SleepWalkAnimal";
import { SwimHuntAnimal } from "./features/animals/groups-animals/SwimHuntAnimal";
import { Employees } from "./features/employees/Employees";
import { Zookeeper } from "./features/employees/zookeeper/Zookeeper";
import { handleDisplay } from "./utils/dom";

const addAnimalButton = document.getElementById(
  "animal-btn",
) as HTMLButtonElement;

const addEmployeeButton = document.getElementById(
  "employee-btn",
) as HTMLButtonElement;

const typeSelect = document.getElementById("animal-type") as HTMLSelectElement;

const animals = new Animals();
const employees = new Employees();

export function addAnimalForm(event: Event) {
  event.preventDefault();

  const nameInput = document.getElementById("animal-name") as HTMLInputElement;
  const ageInput = document.getElementById("animal-age") as HTMLInputElement;
  const maxSpeedInput = document.getElementById(
    "animal-max-speed",
  ) as HTMLInputElement;
  const originInput = document.getElementById(
    "animal-origin",
  ) as HTMLInputElement;
  const weightInput = document.getElementById(
    "animal-weight",
  ) as HTMLInputElement;

  const name = nameInput.value;
  const age = Number(ageInput.value);
  const maxSpeed = Number(maxSpeedInput.value);
  const origin = originInput.value;
  const weight = Number(weightInput.value);

  const animalType = typeSelect.value;

  let newAnimal: JumpRunAnimal | SleepWalkAnimal | SwimHuntAnimal | null = null;

  if (animalType === "jump-run") {
    newAnimal = new JumpRunAnimal({ name, age, maxSpeed, origin });
  } else if (animalType === "sleep-walk") {
    newAnimal = new SleepWalkAnimal({ name, age, weight });
  } else if (animalType === "swim-hunt") {
    newAnimal = new SwimHuntAnimal({ name, age });
  } else {
    console.error("Invalid animal group selected");
  }

  if (newAnimal !== null) {
    animals.addAnimal(newAnimal);

    console.log("New animal added:", newAnimal);
    console.log(animals.getAllAnimals());
  }

  nameInput.value = "";
  ageInput.value = "";
  maxSpeedInput.value = "";
  originInput.value = "";
  weightInput.value = "";
}

export function addEmployeeForm(event: Event) {
  event.preventDefault();

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
  console.log(employees.getAllEmployees());

  occupationInput.value = "";
  zooCheckbox.checked = false;
  safetyCheckbox.checked = false;
  dateInput.value = "";
}

addEmployeeButton.addEventListener("click", addEmployeeForm);

addAnimalButton.addEventListener("click", addAnimalForm);
typeSelect.addEventListener("change", () => {
  const selectedValue = typeSelect.value;
  handleDisplay(selectedValue);
});
