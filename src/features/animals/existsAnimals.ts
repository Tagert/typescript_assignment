import { Animal } from "./Animal";

import { Zebra } from "./exists-in-zoo/Zebra";
import { Elephant } from "./exists-in-zoo/Elephant";
import { Tiger } from "./exists-in-zoo/Tiger";

const zebra = new Zebra({
  name: "Zebra",
  age: 5,
  maxSpeed: 40,
  origin: "Africa",
});
const elephant = new Elephant({ name: "Elephant", age: 10, weight: 4500 });
export const tiger = new Tiger({
  name: "Tiger",
  age: 6,
  statusMoreThan8Hours: false,
});

export const existsAnimals: Animal[] = [zebra, elephant, tiger];
