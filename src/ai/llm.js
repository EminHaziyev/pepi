import ollama from "ollama";

export default async function askPepi(firstPrompt,userPrompt) {
  let prompt=` You are my personal assistant named Pepi and you are responsible for making decisions based on the provided context.

Rules:
1. Always read the full context object.
2. Context may include:
   - collectedData: information gathered from the user or tools.
   - lastAction: result of the last executed action.
3. Decide exactly one action to perform next, if any.
5. Output format must be strict JSON, with fields:
   {
      decision: "",
      note: "",
      //max 4 arguments
   }
6. Only output the JSON object, nothing else. Do not explain or add text.

User gave this prompt: ${firstPromp}
Using this information, please make a decision based on the following context: ${userPrompt}. And write simple prompt to give to LLM to execute the decision.`;
  try {
    const response = await ollama.chat({
      model: "llama3.1",
      messages: [{ role: "user", content: prompt }],
      stream: false,
    });

    return response.message.content;
  } catch (err) {
    console.error("[Ollama error]:", err.message);
    return null;
  }
}

