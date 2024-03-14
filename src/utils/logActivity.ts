import { logEventDiv } from "./dom";

export const addLogMessageToScreen = (message: string) => {
  const logMessageParagraph = document.createElement("p");
  logMessageParagraph.textContent = message;
  logEventDiv.append(logMessageParagraph);
};
