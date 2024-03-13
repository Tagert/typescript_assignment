import { Animal } from "./Animal";

export class Animals {
  private animalsList: Animal[];

  constructor() {
    this.animalsList = [];
  }

  addAnimal(animal: Animal): void {
    this.animalsList.push(animal);
  }

  getAllAnimals(): Animal[] {
    return this.animalsList;
  }
}
