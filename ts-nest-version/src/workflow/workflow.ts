import { supervisorChain } from "../agents/supervisor.agent.js"; // Import nodes
import { AgentState } from "../state/agent.state.js"; // Import state
import { members } from '../agents/supervisor.agent.js'
import { START, StateGraph } from "@langchain/langgraph";
import { tavilyNode } from "../agents/tavily.agent.js";
import { cartManagerNode } from "../agents/cartManager.agent.js";

// 1. Create the graph
const workflow = new StateGraph(AgentState)
  // 2. Add the nodes; these will do the work
  .addNode("researcher", tavilyNode)
  .addNode("cart_manager", cartManagerNode)
  .addNode("supervisor", supervisorChain);
// 3. Define the edges. We will define both regular and conditional ones
// After a worker completes, report to supervisor
members.forEach((member) => {
  workflow.addEdge(member, "supervisor");
});

workflow.addConditionalEdges(
  "supervisor",
  (x: typeof AgentState.State) => x.next,
);

workflow.addEdge(START, "supervisor");

export const graph = workflow.compile();