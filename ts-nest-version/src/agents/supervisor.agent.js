"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.supervisorChain = exports.llm = exports.members = void 0;
var openai_1 = require("@langchain/openai");
var prompts_1 = require("@langchain/core/prompts");
var output_parsers_1 = require("langchain/output_parsers");
var zod_1 = require("zod");
var langgraph_1 = require("@langchain/langgraph");
exports.members = ["researcher", "cart_manager"];
var systemPrompt = "You are a supervisor tasked with managing a conversation between the" +
    " following workers: {members}. Given the following user request," +
    " respond with the worker to act next. Each worker will perform a" +
    " task and respond with their results and status. When finished," +
    " respond with FINISH.";
var options = __spreadArray([langgraph_1.END], exports.members, true);
// Define the routing function
var routingTool = {
    name: "route",
    description: "Select the next role.",
    schema: zod_1.z.object({
        next: zod_1.z.enum(__spreadArray([langgraph_1.END], exports.members, true)),
    }),
};
var prompt = prompts_1.ChatPromptTemplate.fromMessages([
    ["system", systemPrompt],
    new prompts_1.MessagesPlaceholder("messages"),
    [
        "system",
        "Given the conversation above, who should act next?" +
            " Or should we FINISH? Select one of: {options}",
    ],
]);
var formattedPrompt = await prompt.partial({
    options: options.join(", "),
    members: exports.members.join(", "),
});
exports.llm = new openai_1.ChatOpenAI({
    modelName: "gpt-4o",
    temperature: 0,
});
exports.supervisorChain = formattedPrompt
    .pipe(exports.llm.bindTools([routingTool], {
    tool_choice: "route",
}))
    .pipe(new output_parsers_1.JsonOutputToolsParser())
    // select the first one
    .pipe(function (x) { return (x[0].args); });
