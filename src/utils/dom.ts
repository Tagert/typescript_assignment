const activeJumpRun = document.querySelector(
  ".active-jump-run",
) as HTMLDivElement;
const activeSleepWalk = document.querySelector(
  ".active-sleep-walk",
) as HTMLDivElement;
const activeSwimHunt = document.querySelector(
  ".active-swim-hunt",
) as HTMLDivElement;

export function handleDisplay(selectedValue: string) {
  if (selectedValue === "jump-run") {
    activeJumpRun.style.display = "flex";
    activeSleepWalk.style.display = "none";
    activeSwimHunt.style.display = "none";
  } else if (selectedValue === "sleep-walk") {
    activeJumpRun.style.display = "none";
    activeSleepWalk.style.display = "flex";
    activeSwimHunt.style.display = "none";
  } else if (selectedValue === "swim-hunt") {
    activeJumpRun.style.display = "none";
    activeSleepWalk.style.display = "none";
    activeSwimHunt.style.display = "flex";
  }
}
