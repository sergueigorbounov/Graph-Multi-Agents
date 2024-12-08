import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { graph } from "./workflow/workflow.js";
import { HumanMessage } from "@langchain/core/messages";

@Injectable()
export class AppService {
  async handleQuery(query: string): Promise<string> {
    if (!query || typeof query !== 'string') {
      throw new BadRequestException("Query must be a non-empty string.");
    }

    try {
      const streamResults = await graph.stream({
        messages: [new HumanMessage({ content: query })],
      });

      for await (const output of streamResults) {
        if (output?.messages) {
          return output.messages[output.messages.length - 1]?.content || "No response.";
        }
      }

      return "Workflow completed.";
    } catch (error) {
      console.error("Error in handleQuery:", error);
      throw new InternalServerErrorException("Failed to process query.");
    }
  }
}
