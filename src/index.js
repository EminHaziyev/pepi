import  {collectData}  from "./agents/collector.js";
import  {executeAction}  from "./agents/executor.js";
import  {context}  from "./states/context.js";
import askPepi from "./ai/llm.js";

console.log("=== Step 1: Collect Data ===");
let prompt = "Get Rza's last message about his free times today from whatsapp and create calendar event with him today."
await collectData(prompt);
console.log("Collected Data:", context.collectedData);

console.log("\n=== Step 2: Decide ===");
// Let Ollama decide (here simulated manually)
context.decision = await askPepi(prompt, JSON.stringify(context, null, 2))
console.log("Decision:", context.decision);

console.log("\n=== Step 3: User Confirmation ===");
const userConfirmed = true; // simulate you confirming
console.log("User confirmed:", userConfirmed);

console.log("\n=== Step 4: Execute Action ===");
const result = await executeAction(userConfirmed);
// console.log("Action Result:", result);
