import { AnimalType, AnimalTypeMethods } from "./animal.types";

export abstract class Animal implements AnimalType, AnimalTypeMethods {
  name: string;
  age: number;

  constructor({ name, age }: AnimalType) {
    this.name = name;
    this.age = age;
  }

  abstract makeSound(): void;
}
