import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { context } from "../states/context.js";
export const whatsappGetMessage = tool(
  async ({ contact }) => {
    console.log(context);
    console.log("get the message from " + contact);
    context.collectedData.push("message from " + contact+": I'm free today 13:00-14:00");
    console.log(context);
    return "message from " + contact+": I'm free today 13:00-14:00"; 
  },
  {
    name: "whatsappGetMessage",
    description: "Use to get message from someone at whatsapp",
    schema: z.object({
        contact: z.string().describe("Whose message you are gonna accept"),
    }),
  }
);
