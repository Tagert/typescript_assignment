import { Animal } from "./Animal";
import { ElephantType } from "./animal.types";

export class Elephant extends Animal {
  weight: number;

  constructor({ name, age, weight }: ElephantType) {
    super({ name, age });

    this.weight = weight;
  }

  makeSound(): void {
    console.log("Elephant sound");
  }
}
