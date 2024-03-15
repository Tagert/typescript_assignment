import { AnimalType } from "../../features/animals/animal.types";
import {
  ZebraType,
  ElephantType,
  TigerType,
} from "../../features/animals/animal.types";

export const appendAnimalProperties = (
  wrapper: HTMLDivElement,
  animal: AnimalType,
) => {
  const name = document.createElement("h4") as HTMLHeadingElement;
  const age = document.createElement("h4") as HTMLHeadingElement;

  name.textContent = `Animal: ${animal.name}`;
  age.textContent = `Age: ${animal.age.toString()} years`;

  wrapper.append(name, age);

  if ("maxSpeed" in animal) {
    const maxSpeed = document.createElement("h4") as HTMLHeadingElement;
    const origin = document.createElement("h4") as HTMLHeadingElement;
    maxSpeed.textContent = `Max speed: ${(animal as ZebraType).maxSpeed.toString()} Km/h`;
    origin.textContent = `Origin: ${(animal as ZebraType).origin}`;
    wrapper.append(maxSpeed, origin);
  } else if ("weight" in animal) {
    const weight = document.createElement("h4") as HTMLHeadingElement;
    weight.textContent = `Weight: ${(animal as ElephantType).weight.toString()} Kg`;
    wrapper.append(weight);
  } else if ("statusMoreThan8Hours" in animal) {
    const fedStatus = document.createElement("h4") as HTMLHeadingElement;
    fedStatus.textContent = (animal as TigerType).statusMoreThan8Hours
      ? "The animal is fed"
      : "The animal is not fed";
    wrapper.append(fedStatus);
  }
};
