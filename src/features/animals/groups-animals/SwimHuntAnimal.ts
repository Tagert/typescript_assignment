import { Animal } from "../Animal";
import { TigerType } from "../animal.types";

export class SwimHuntAnimal extends Animal {
  statusMoreThan8Hours: boolean = false;

  constructor({ name, age, statusMoreThan8Hours }: TigerType) {
    super({ name, age });
    this.statusMoreThan8Hours = statusMoreThan8Hours;
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
