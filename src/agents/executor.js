import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { model } from "../models/ollamaModel.js";
import { calendarTool } from "../tools/calendarTool.js";
import { context } from "../states/context.js";

export const executor = createReactAgent({
  llm: model,
  tools: [calendarTool],
  agentType: "tool",
});

export async function executeAction(confirm) {
  if (!context.decision) return "No decision to execute";

  if (!confirm) return "Action cancelled";

  const result = await executor.invoke({
    messages: [
      { role: "system", content: "Execute the following action." },
      { role: "user", content: JSON.stringify(context.decision) },
    ],
  });

  context.lastAction = result;
  return result;
}
