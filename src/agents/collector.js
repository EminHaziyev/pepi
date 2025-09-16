import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { model } from "../models/ollamaModel.js";
import { whatsappGetMessage } from "../tools/whatsappGetMessage.js";
import { context } from "../states/context.js";

export const collector = createReactAgent({
  llm: model,
  tools: [whatsappGetMessage],
  agentType: "tool",
});

export async function collectData(userMessage) {
  const result = await collector.invoke({
    messages: [{ role: "user", content: userMessage }],
  });

  
  return result;
}
