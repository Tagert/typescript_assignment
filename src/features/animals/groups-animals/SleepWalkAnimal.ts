import { Animal } from "../Animal";
import { ElephantType } from "../animal.types";

export class SleepWalkAnimal extends Animal {
  weight: number;

  constructor({ name, age, weight }: ElephantType) {
    super({ name, age });

    this.weight = weight;
  }

  makeSound(): void {
    console.log("Some generic sound");
  }

  sleep(): void {
    console.log(`${this.name} is sleeping`);
  }

  walk(): void {
    console.log(`${this.name} is walking`);
  }
}
