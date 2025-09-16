import { tool } from "@langchain/core/tools";
import { z } from "zod";

export const calendarTool = tool(
  async ({ action, time }) => {
    if (action === "create") {
      return `Created calendar event at ${time}`;
    }
    return `Unknown calendar action: ${action}`;
  },
  {
    name: "calendar",
    description: "Manage calendar events.",
    schema: z.object({
      action: z.string().describe("Action to perform, e.g. 'create'."),
      time: z.string().describe("Time of the event."),
    }),
  }
);
