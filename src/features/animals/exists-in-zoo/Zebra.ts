import { Animal } from "../Animal";
import { ZebraType } from "../animal.types";
// import { JumpRunAnimal } from "./groups-animals/JumpRunAnimal";

export class Zebra extends Animal {
  maxSpeed: number;
  origin: string;

  constructor({ name, age, maxSpeed, origin }: ZebraType) {
    super({ name, age });

    this.maxSpeed = maxSpeed;
    this.origin = origin;
  }

  makeSound(): void {
    console.log("Zebra sound");
  }
}
