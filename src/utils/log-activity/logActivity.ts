import { logEventDiv } from "../dom/htmlConstants";

export const addLogMessageToScreen = (message: string) => {
  const logMessageParagraph = document.createElement("p");
  logMessageParagraph.textContent = message;
  logEventDiv.append(logMessageParagraph);
};
