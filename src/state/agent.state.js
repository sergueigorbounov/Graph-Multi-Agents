"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentState = void 0;
var langgraph_1 = require("@langchain/langgraph");
exports.AgentState = langgraph_1.Annotation.Root({
    messages: (0, langgraph_1.Annotation)({
        reducer: function (x, y) { return x.concat(y); },
        default: function () { return []; },
    }),
    next: (0, langgraph_1.Annotation)({
        reducer: function (x, y) { var _a; return (_a = y !== null && y !== void 0 ? y : x) !== null && _a !== void 0 ? _a : langgraph_1.END; },
        default: function () { return langgraph_1.END; },
    }),
});
