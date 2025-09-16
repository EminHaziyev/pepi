import { ChatOllama } from "@langchain/ollama";

export const model = new ChatOllama({
  model: "llama3.1",
  temperature: 0,
});
