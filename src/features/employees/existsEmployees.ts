import { Employee } from "./Employee";
import { Zookeeper } from "./zookeeper/Zookeeper";

import { tiger } from "../animals/existsAnimals";

export const zooKeeper = new Zookeeper({
  employeeOccupation: "Zookeeper",
  isEmployeeAtZoo: true,
  safetyTrainingCompletion: true,
  safetyTrainingCompletionDate: "2008-08-10",
});

export const existsEmployees: Employee[] = [zooKeeper];

zooKeeper.feedAnimal(tiger);
