import { Animal } from "../Animal";
import { ZebraType } from "../animal.types";

export class JumpRunAnimal extends Animal {
  maxSpeed: number;
  origin: string;

  constructor({ name, age, maxSpeed, origin }: ZebraType) {
    super({ name, age });

    this.maxSpeed = maxSpeed;
    this.origin = origin;
  }

  makeSound(): void {
    console.log("Some generic sound");
  }

  jump(): void {
    console.log(`${this.name} is jumping`);
  }

  run(): void {
    console.log(`${this.name} is running`);
  }
}
