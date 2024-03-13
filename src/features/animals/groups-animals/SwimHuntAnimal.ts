import { Animal } from "../Animal";
import { AnimalType } from "../animal.types";

export class SwimHuntAnimal extends Animal {
  constructor({ name, age }: AnimalType) {
    super({ name, age });
  }

  makeSound(): void {
    console.log("Some generic sound");
  }

  swim(): void {
    console.log(`${this.name} is swimming`);
  }

  hunt(): void {
    console.log(`${this.name} is hunting`);
  }
}
