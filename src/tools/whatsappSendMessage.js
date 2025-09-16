import { tool } from "@langchain/core/tools";
import { z } from "zod";

export const whatsappSendMessage = tool(
  async ({ contact }) => {
    console.log("sent message to" + contact);
  },
  {
    name: "whatsappSendMessage",
    description: "Use to send message from whatsapp to anyone",
    schema: z.object({
      contact: z.string().describe("Who you are gonna send the message"),
    }),
  }
);
