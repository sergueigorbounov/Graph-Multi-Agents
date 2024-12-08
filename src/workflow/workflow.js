"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graph = void 0;
var supervisor_agent_1 = require("../agents/supervisor.agent"); // Import nodes
var agent_state_1 = require("../state/agent.state"); // Import state
var supervisor_agent_2 = require("../agents/supervisor.agent");
var langgraph_1 = require("@langchain/langgraph");
var tavily_agent_1 = require("../agents/tavily.agent");
var cartManager_agent_1 = require("../agents/cartManager.agent");
// 1. Create the graph
var workflow = new langgraph_1.StateGraph(agent_state_1.AgentState)
    // 2. Add the nodes; these will do the work
    .addNode("researcher", tavily_agent_1.tavilyNode)
    .addNode("cart_manager", cartManager_agent_1.cartManagerNode)
    .addNode("supervisor", supervisor_agent_1.supervisorChain);
// 3. Define the edges. We will define both regular and conditional ones
// After a worker completes, report to supervisor
supervisor_agent_2.members.forEach(function (member) {
    workflow.addEdge(member, "supervisor");
});
workflow.addConditionalEdges("supervisor", function (x) { return x.next; });
workflow.addEdge(langgraph_1.START, "supervisor");
exports.graph = workflow.compile();
