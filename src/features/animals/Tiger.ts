import { Animal } from "./Animal";
import { TigerType } from "./animal.types";
// import { SwimHuntAnimal } from "./groups-animals/SwimHuntAnimal";

export class Tiger extends Animal {
  statusMoreThan8Hours: boolean = false;

  constructor({ name, age, statusMoreThan8Hours }: TigerType) {
    super({ name, age });
    this.statusMoreThan8Hours = statusMoreThan8Hours;
  }

  makeSound(): void {
    console.log("Tiger sound");
  }
}
