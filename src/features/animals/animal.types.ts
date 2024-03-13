export type AnimalType = {
  name: string;
  age: number;
};

export type AnimalTypeMethods = {
  makeSound(): void;
};

export type ZebraType = AnimalType & {
  maxSpeed: number;
  origin: string;
};

export type ElephantType = AnimalType & {
  weight: number;
};

export type TigerType = AnimalType & {
  statusMoreThan8Hours: boolean;
};
