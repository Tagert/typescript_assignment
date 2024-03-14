import { Animals } from "../features/animals/Animals";

import { JumpRunAnimal } from "../features/animals/groups-animals//JumpRunAnimal";
import { SleepWalkAnimal } from "../features/animals/groups-animals/SleepWalkAnimal";
import { SwimHuntAnimal } from "../features/animals/groups-animals/SwimHuntAnimal";

import { addAnimalToScreen } from "./dom";
import { typeSelect } from "../main";

export const animals = new Animals();

export const addAnimalForm = (event: Event) => {
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
  const fedCheckbox = document.getElementById(
    "animal-status",
  ) as HTMLInputElement;

  const name = nameInput.value;
  const age = Number(ageInput.value);

  const maxSpeed = Number(maxSpeedInput.value);
  const origin = originInput.value;

  const weight = Number(weightInput.value);
  const statusMoreThan8Hours = fedCheckbox.checked;

  const animalType = typeSelect.value;

  let newAnimal: JumpRunAnimal | SleepWalkAnimal | SwimHuntAnimal | null = null;

  if (animalType === "jump-run") {
    newAnimal = new JumpRunAnimal({ name, age, maxSpeed, origin });
  } else if (animalType === "sleep-walk") {
    newAnimal = new SleepWalkAnimal({ name, age, weight });
  } else if (animalType === "swim-hunt") {
    newAnimal = new SwimHuntAnimal({ name, age, statusMoreThan8Hours });
  } else {
    console.error("Invalid animal group selected");
  }

  if (newAnimal !== null) {
    animals.addAnimal(newAnimal);

    console.log("New animal added:", newAnimal);
    addAnimalToScreen(animals.getAllAnimals());
  }

  nameInput.value = "";
  ageInput.value = "";
  maxSpeedInput.value = "";
  originInput.value = "";
  weightInput.value = "";
  fedCheckbox.checked = false;
};
