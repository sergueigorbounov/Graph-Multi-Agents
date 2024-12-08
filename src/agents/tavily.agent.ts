import { RunnableConfig } from "@langchain/core/runnables";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { SystemMessage } from "@langchain/core/messages";
import { TavilySearchResults } from   '@langchain/community/tools/tavily_search';
import { llm } from "./supervisor.agent.js";
import { AgentState } from "../state/agent.state.js";
import { HumanMessage } from "@langchain/core/messages";
const tavilyTool = new TavilySearchResults();
  const tavilyAgent = createReactAgent({
  llm,
  tools: [tavilyTool],
  stateModifier: new SystemMessage("You are a web researcher. You may use the Tavily search engine to search the web for" +
    " important information, so the Chart Generator in your team can make useful plots.")
})

export const tavilyNode = async (
  state: typeof AgentState.State,
  config?: RunnableConfig,
) => {
  const result = await tavilyAgent.invoke(state, config);
  const lastMessage = result.messages[result.messages.length - 1];
  return {
    messages: [
      new HumanMessage({ content: lastMessage.content, name: "Researcher" }),
    ],
  };
};