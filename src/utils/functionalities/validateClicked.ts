import { addLogMessageToScreen } from "../log-activity/logActivity";
import { zooKeeper } from "../../features/employees/existsEmployees";
import { feedingTime } from "../../features/employees/zookeeper/Zookeeper";
import { AnimalType } from "../../features/animals/animal.types";

export const validateClicked = (
  wrapper: HTMLDivElement,
  animals: AnimalType[],
) => {
  const clickedName = wrapper.getAttribute("data-name");
  const clickedAge = parseInt(wrapper.getAttribute("data-age") || "0");
  const clickedAnimal: any = animals.find(
    (a) => a.name === clickedName && a.age === clickedAge,
  );

  if (clickedAnimal) {
    zooKeeper.feedAnimal(clickedAnimal);
    addLogMessageToScreen(
      `${zooKeeper.employeeOccupation} fed a ${clickedAnimal.name} at ${feedingTime}.`,
    );
  }
};
