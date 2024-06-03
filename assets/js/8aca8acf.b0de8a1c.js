"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6784],{17836:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(74848),o=t(28453),i=t(63142);const s={sidebar_class_name:"hidden",title:"How to use a chat model to call tools"},l=void 0,r={id:"how_to/tool_calling",title:"How to use a chat model to call tools",description:"This guide assumes familiarity with the following concepts:",source:"@site/docs/how_to/tool_calling.mdx",sourceDirName:"how_to",slug:"/how_to/tool_calling",permalink:"/docs/how_to/tool_calling",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/tool_calling.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden",title:"How to use a chat model to call tools"},sidebar:"tutorialSidebar",previous:{title:"How to create a time-weighted retriever",permalink:"/docs/how_to/time_weighted_vectorstore"},next:{title:"How to call tools with multi-modal data",permalink:"/docs/how_to/tool_calls_multi_modal"}},c={},d=[{value:"Passing tools to LLMs",id:"passing-tools-to-llms",level:2},{value:"Streaming",id:"streaming",level:3},{value:"Few shotting with tools",id:"few-shotting-with-tools",level:2},{value:"Binding model-specific formats (advanced)",id:"binding-model-specific-formats-advanced",level:2},{value:"Next steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.admonition,{title:"Prerequisites",type:"info",children:[(0,a.jsx)(n.p,{children:"This guide assumes familiarity with the following concepts:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../../docs/concepts/#chat-models",children:"Chat models"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../../docs/concepts/#tools",children:"LangChain Tools"})}),"\n"]})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"We use the term tool calling interchangeably with function calling. Although\nfunction calling is sometimes meant to refer to invocations of a single function,\nwe treat all models as though they can return multiple tool or function calls in\neach message."})}),"\n",(0,a.jsxs)(n.p,{children:["Tool calling allows a chat model to respond to a given prompt by\n\u201ccalling a tool\u201d. While the name implies that the model is performing\nsome action, this is actually not the case! The model generates the\narguments to a tool, and actually running the tool (or not) is up to the\nuser. For example, if you want to ",(0,a.jsx)(n.a,{href:"../../docs/how_to/structured_output/",children:"extract output matching some\nschema"})," from unstructured text,\nyou could give the model an \u201cextraction\u201d tool that takes parameters\nmatching the desired schema, then treat the generated output as your\nfinal result."]}),"\n",(0,a.jsxs)(n.p,{children:["However, tool calling goes beyond ",(0,a.jsx)(n.a,{href:"../../docs/how_to/structured_output/",children:"structured\noutput"})," since you can pass\nresponses to caled tools back to the model to create longer\ninteractions. For instance, given a search engine tool, an LLM might\nhandle a query by first issuing a call to the search engine with\narguments. The system calling the LLM can receive the tool call, execute\nit, and return the output to the LLM to inform its response. LangChain\nincludes a suite of ",(0,a.jsx)(n.a,{href:"../../docs/integrations/tools/",children:"built-in tools"})," and\nsupports several methods for defining your own ",(0,a.jsx)(n.a,{href:"../../docs/how_to/custom_tools",children:"custom\ntools"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Tool calling is not universal, but many popular LLM providers, including\n",(0,a.jsx)(n.a,{href:"https://www.anthropic.com/",children:"Anthropic"}),", ",(0,a.jsx)(n.a,{href:"https://cohere.com/",children:"Cohere"}),",\n",(0,a.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai",children:"Google"}),",\n",(0,a.jsx)(n.a,{href:"https://mistral.ai/",children:"Mistral"}),", ",(0,a.jsx)(n.a,{href:"https://openai.com/",children:"OpenAI"}),", and\nothers, support variants of a tool calling feature."]}),"\n",(0,a.jsx)(n.p,{children:"LangChain implements standard interfaces for defining tools, passing\nthem to LLMs, and representing tool calls. This guide will show you how\nto use them."}),"\n",(0,a.jsx)(n.h2,{id:"passing-tools-to-llms",children:"Passing tools to LLMs"}),"\n",(0,a.jsxs)(n.p,{children:["Chat models that support tool calling features implement a\n",(0,a.jsx)(n.a,{href:"https://v02.api.js.langchain.com/classes/langchain_core_language_models_chat_models.BaseChatModel.html#bindTools",children:(0,a.jsx)(n.code,{children:".bindTools()"})}),"\nmethod, which receives a list of LangChain ",(0,a.jsx)(n.a,{href:"https://v02.api.js.langchain.com/classes/langchain_core_tools.StructuredTool.html",children:"tool\nobjects"}),"\nand binds them to the chat model in its expected format. Subsequent\ninvocations of the chat model will include tool schemas in its calls to\nthe LLM."]}),"\n",(0,a.jsx)(n.p,{children:"Let\u2019s walk through a few examples:"}),"\n","\n",(0,a.jsx)(i.A,{customVarName:"llm",providers:["anthropic","openai","mistral","fireworks"],additionalDependencies:"@langchain/core"}),"\n",(0,a.jsx)(n.p,{children:"A number of models implement helper methods that will take care of\nformatting and binding different function-like objects to the model.\nLet\u2019s take a look at how we might take the following Zod function schema\nand get different models to invoke it:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import { z } from "zod";\n\n/**\n * Note that the descriptions here are crucial, as they will be passed along\n * to the model along with the class name.\n */\nconst calculatorSchema = z.object({\n  operation: z\n    .enum(["add", "subtract", "multiply", "divide"])\n    .describe("The type of operation to execute."),\n  number1: z.number().describe("The first number to operate on."),\n  number2: z.number().describe("The second number to operate on."),\n});\n'})}),"\n",(0,a.jsxs)(n.p,{children:["We can use the ",(0,a.jsx)(n.code,{children:".bindTools()"})," method to handle the conversion from\nLangChain tool to our model provider\u2019s specific format and bind it to\nthe model (i.e., passing it in each time the model is invoked). Let\u2019s\ncreate a ",(0,a.jsx)(n.code,{children:"DynamicStructuredTool"})," implementing a tool based on the above\nschema, then bind it to the model:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import { ChatOpenAI } from "@langchain/openai";\nimport { DynamicStructuredTool } from "@langchain/core/tools";\n\nconst calculatorTool = new DynamicStructuredTool({\n  name: "calculator",\n  description: "Can perform mathematical operations.",\n  schema: calculatorSchema,\n  func: async ({ operation, number1, number2 }) => {\n    // Functions must return strings\n    if (operation === "add") {\n      return `${number1 + number2}`;\n    } else if (operation === "subtract") {\n      return `${number1 - number2}`;\n    } else if (operation === "multiply") {\n      return `${number1 * number2}`;\n    } else if (operation === "divide") {\n      return `${number1 / number2}`;\n    } else {\n      throw new Error("Invalid operation.");\n    }\n  },\n});\n\nconst llmWithTools = llm.bindTools([calculatorTool]);\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now, let\u2019s invoke it! We expect the model to use the calculator to\nanswer the question:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'const res = await llmWithTools.invoke("What is 3 * 12");\n\nconsole.log(res.tool_calls);\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'[\n  {\n    name: "calculator",\n    args: { operation: "multiply", number1: 3, number2: 12 },\n    id: "call_Ri9s27J17B224FEHrFGkLdxH"\n  }\n]\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["See a LangSmith trace for the above ",(0,a.jsx)(n.a,{href:"https://smith.langchain.com/public/14e4b50c-c6cf-4c53-b3ef-da550edb6d66/r",children:"here"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["We can see that the response message contains a ",(0,a.jsx)(n.code,{children:"tool_calls"})," field when\nthe model decides to call the tool. This will be in LangChain\u2019s\nstandardized format."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:".tool_calls"})," attribute should contain valid tool calls. Note that\non occasion, model providers may output malformed tool calls (e.g.,\narguments that are not valid JSON). When parsing fails in these cases,\nthe message will contain instances of of\n",(0,a.jsx)(n.a,{href:"https://v02.api.js.langchain.com/types/langchain_core_messages_tool.InvalidToolCall.html",children:"InvalidToolCall"}),"\nobjects in the ",(0,a.jsx)(n.code,{children:".invalid_tool_calls"})," attribute. An ",(0,a.jsx)(n.code,{children:"InvalidToolCall"})," can\nhave a name, string arguments, identifier, and error message."]}),"\n",(0,a.jsx)(n.h3,{id:"streaming",children:"Streaming"}),"\n",(0,a.jsxs)(n.p,{children:["When tools are called in a streaming context, ",(0,a.jsx)(n.a,{href:"https://v02.api.js.langchain.com/classes/langchain_core_messages.BaseMessageChunk.html",children:"message\nchunks"}),"\nwill be populated with ",(0,a.jsx)(n.a,{href:"https://v02.api.js.langchain.com/types/langchain_core_messages_tool.ToolCallChunk.html",children:"tool call\nchunk"}),"\nobjects in a list via the ",(0,a.jsx)(n.code,{children:".tool_call_chunks"})," attribute. A\n",(0,a.jsx)(n.code,{children:"ToolCallChunk"})," includes optional string fields for the tool ",(0,a.jsx)(n.code,{children:"name"}),",\n",(0,a.jsx)(n.code,{children:"args"}),", and ",(0,a.jsx)(n.code,{children:"id"}),", and includes an optional integer field ",(0,a.jsx)(n.code,{children:"index"})," that\ncan be used to join chunks together. Fields are optional because\nportions of a tool call may be streamed across different chunks (e.g., a\nchunk that includes a substring of the arguments may have null values\nfor the tool name and id)."]}),"\n",(0,a.jsxs)(n.p,{children:["Because message chunks inherit from their parent message class, an\n",(0,a.jsx)(n.a,{href:"https://v02.api.js.langchain.com/classes/langchain_core_messages.AIMessageChunk.html",children:"AIMessageChunk"}),"\nwith tool call chunks will also include ",(0,a.jsx)(n.code,{children:".tool_calls"})," and\n",(0,a.jsx)(n.code,{children:".invalid_tool_calls"})," fields. These fields are parsed best-effort from\nthe message\u2019s tool call chunks."]}),"\n",(0,a.jsxs)(n.p,{children:["Note that not all providers currently support streaming for tool calls.\nIf this is the case for your specific provider, the model will yield a\nsingle chunk with the entire call when you call ",(0,a.jsx)(n.code,{children:".stream()"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'const stream = await llmWithTools.stream("What is 308 / 29");\n\nfor await (const chunk of stream) {\n  console.log(chunk.tool_call_chunks);\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'[\n  {\n    name: "calculator",\n    args: "",\n    id: "call_rGqPR1ivppYUeBb0iSAF8HGP",\n    index: 0\n  }\n]\n[ { name: undefined, args: \'{"\', id: undefined, index: 0 } ]\n[ { name: undefined, args: "operation", id: undefined, index: 0 } ]\n[ { name: undefined, args: \'":"\', id: undefined, index: 0 } ]\n[ { name: undefined, args: "divide", id: undefined, index: 0 } ]\n[ { name: undefined, args: \'","\', id: undefined, index: 0 } ]\n[ { name: undefined, args: "number", id: undefined, index: 0 } ]\n[ { name: undefined, args: "1", id: undefined, index: 0 } ]\n[ { name: undefined, args: \'":\', id: undefined, index: 0 } ]\n[ { name: undefined, args: "308", id: undefined, index: 0 } ]\n[ { name: undefined, args: \',"\', id: undefined, index: 0 } ]\n[ { name: undefined, args: "number", id: undefined, index: 0 } ]\n[ { name: undefined, args: "2", id: undefined, index: 0 } ]\n[ { name: undefined, args: \'":\', id: undefined, index: 0 } ]\n[ { name: undefined, args: "29", id: undefined, index: 0 } ]\n[ { name: undefined, args: "}", id: undefined, index: 0 } ]\n[]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Note that using the ",(0,a.jsx)(n.code,{children:"concat"})," method on message chunks will merge their\ncorresponding tool call chunks. This is the principle by which\nLangChain\u2019s various ",(0,a.jsx)(n.a,{href:"../../docs/how_to/output_parser_structured/",children:"tool output\nparsers"})," support streaming."]}),"\n",(0,a.jsx)(n.p,{children:"For example, below we accumulate tool call chunks:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'const streamWithAccumulation = await llmWithTools.stream(\n  "What is 32993 - 2339"\n);\n\nlet final;\nfor await (const chunk of streamWithAccumulation) {\n  if (!final) {\n    final = chunk;\n  } else {\n    final = final.concat(chunk);\n  }\n}\n\nconsole.log(final.tool_calls);\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'[\n  {\n    name: "calculator",\n    args: { operation: "subtract", number1: 32993, number2: 2339 },\n    id: "call_WMhL5X0fMBBZPNeyUZY53Xuw"\n  }\n]\n'})}),"\n",(0,a.jsx)(n.h2,{id:"few-shotting-with-tools",children:"Few shotting with tools"}),"\n",(0,a.jsxs)(n.p,{children:["You can give the model examples of how you would like tools to be called\nin order to guide generation by inputting manufactured tool call turns.\nFor example, given the above calculator tool, we could define a new\noperator, ",(0,a.jsx)(n.code,{children:"\ud83e\udd9c"}),". Let\u2019s see what happens when we use it naively:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'const res = await llmWithTools.invoke("What is 3 \ud83e\udd9c 12");\n\nconsole.log(res.content);\nconsole.log(res.tool_calls);\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"It seems like you've used an emoji (\ud83e\udd9c) in your expression, which I'm not familiar with in a mathematical context. Could you clarify what operation you meant by using the parrot emoji? For example, did you mean addition, subtraction, multiplication, or division?\n[]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["It doesn\u2019t quite know how to interpret ",(0,a.jsx)(n.code,{children:"\ud83e\udd9c"})," as an operation. Now, let\u2019s\ntry giving it an example in the form of a manufactured messages to steer\nit towards ",(0,a.jsx)(n.code,{children:"divide"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import { HumanMessage, AIMessage, ToolMessage } from "@langchain/core/messages";\n\nconst res = await llmWithTools.invoke([\n  new HumanMessage("What is 333382 \ud83e\udd9c 1932?"),\n  new AIMessage({\n    content: "",\n    tool_calls: [\n      {\n        id: "12345",\n        name: "calulator",\n        args: {\n          number1: 333382,\n          number2: 1932,\n          operation: "divide",\n        },\n      },\n    ],\n  }),\n  new ToolMessage({\n    tool_call_id: "12345",\n    content: "The answer is 172.558.",\n  }),\n  new AIMessage("The answer is 172.558."),\n  new HumanMessage("What is 3 \ud83e\udd9c 12"),\n]);\nconsole.log(res.tool_calls);\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'[\n  {\n    name: "calculator",\n    args: { operation: "divide", number1: 3, number2: 12 },\n    id: "call_BDuJv8QkDZ7N7Wsd6v5VDeVa"\n  }\n]\n'})}),"\n",(0,a.jsx)(n.h2,{id:"binding-model-specific-formats-advanced",children:"Binding model-specific formats (advanced)"}),"\n",(0,a.jsx)(n.p,{children:"Providers adopt different conventions for formatting tool schemas. For\ninstance, OpenAI uses a format like this:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"type"}),": The type of the tool. At the time of writing, this is always\n\u201cfunction\u201d."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"function"}),": An object containing tool parameters."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"function.name"}),": The name of the schema to output."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"function.description"}),": A high level description of the schema to\noutput."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"function.parameters"}),": The nested details of the schema you want to\nextract, formatted as a ",(0,a.jsx)(n.a,{href:"https://json-schema.org/",children:"JSON schema"}),"\nobject."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"We can bind this model-specific format directly to the model if needed.\nHere\u2019s an example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import { ChatOpenAI } from "@langchain/openai";\n\nconst model = new ChatOpenAI({ model: "gpt-4o" });\n\nconst modelWithTools = model.bind({\n  tools: [\n    {\n      type: "function",\n      function: {\n        name: "calculator",\n        description: "Can perform mathematical operations.",\n        parameters: {\n          type: "object",\n          properties: {\n            operation: {\n              type: "string",\n              description: "The type of operation to execute.",\n              enum: ["add", "subtract", "multiply", "divide"],\n            },\n            number1: { type: "number", description: "First integer" },\n            number2: { type: "number", description: "Second integer" },\n          },\n          required: ["number1", "number2"],\n        },\n      },\n    },\n  ],\n});\n\nawait modelWithTools.invoke(`Whats 119 times 8?`);\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'AIMessage {\n  lc_serializable: true,\n  lc_kwargs: {\n    content: "",\n    tool_calls: [\n      {\n        name: "calculator",\n        args: { operation: "multiply", number1: 119, number2: 8 },\n        id: "call_pBlKOPNMRN4AAMkPaOKLLcyj"\n      }\n    ],\n    invalid_tool_calls: [],\n    additional_kwargs: {\n      function_call: undefined,\n      tool_calls: [\n        {\n          id: "call_pBlKOPNMRN4AAMkPaOKLLcyj",\n          type: "function",\n          function: [Object]\n        }\n      ]\n    },\n    response_metadata: {}\n  },\n  lc_namespace: [ "langchain_core", "messages" ],\n  content: "",\n  name: undefined,\n  additional_kwargs: {\n    function_call: undefined,\n    tool_calls: [\n      {\n        id: "call_pBlKOPNMRN4AAMkPaOKLLcyj",\n        type: "function",\n        function: {\n          name: "calculator",\n          arguments: \'{"operation":"multiply","number1":119,"number2":8}\'\n        }\n      }\n    ]\n  },\n  response_metadata: {\n    tokenUsage: { completionTokens: 24, promptTokens: 85, totalTokens: 109 },\n    finish_reason: "tool_calls"\n  },\n  tool_calls: [\n    {\n      name: "calculator",\n      args: { operation: "multiply", number1: 119, number2: 8 },\n      id: "call_pBlKOPNMRN4AAMkPaOKLLcyj"\n    }\n  ],\n  invalid_tool_calls: []\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This is functionally equivalent to the ",(0,a.jsx)(n.code,{children:"bind_tools()"})," calls above."]}),"\n",(0,a.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,a.jsx)(n.p,{children:"Now you\u2019ve learned how to bind tool schemas to a chat model and to call\nthose tools. Next, check out some more specific uses of tool calling:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../../docs/how_to/#tools",children:"Building tool-using chains and agents"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../../docs/how_to/structured_output/",children:"Getting structured outputs from\nmodels"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},63142:(e,n,t)=>{t.d(n,{A:()=>m});t(96540);var a=t(11470),o=t(19365),i=t(21432),s=t(27846),l=t(27293),r=t(74848);function c(e){let{children:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A,{type:"tip",children:(0,r.jsxs)("p",{children:["See"," ",(0,r.jsx)("a",{href:"/docs/get_started/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})}),(0,r.jsx)(s.A,{children:n})]})}const d={openaiParams:'{\n  model: "gpt-3.5-turbo",\n  temperature: 0\n}',anthropicParams:'{\n  model: "claude-3-sonnet-20240229",\n  temperature: 0\n}',fireworksParams:'{\n  model: "accounts/fireworks/models/firefunction-v1",\n  temperature: 0\n}',mistralParams:'{\n  model: "mistral-large-latest",\n  temperature: 0\n}',groqParams:'{\n  model: "mixtral-8x7b-32768",\n  temperature: 0\n}',vertexParams:'{\n  model: "gemini-1.5-pro",\n  temperature: 0\n}'},h=["openai","anthropic","mistral","groq","vertex"];function m(e){const{customVarName:n,additionalDependencies:t}=e,s=n??"model",l=e.openaiParams??d.openaiParams,m=e.anthropicParams??d.anthropicParams,u=e.fireworksParams??d.fireworksParams,p=e.mistralParams??d.mistralParams,g=e.groqParams??d.groqParams,f=e.vertexParams??d.vertexParams,x=e.providers??["openai","anthropic","fireworks","mistral","groq","vertex"],j={openai:{value:"openai",label:"OpenAI",default:!0,text:`import { ChatOpenAI } from "@langchain/openai";\n\nconst ${s} = new ChatOpenAI(${l});`,envs:"OPENAI_API_KEY=your-api-key",dependencies:"@langchain/openai"},anthropic:{value:"anthropic",label:"Anthropic",default:!1,text:`import { ChatAnthropic } from "@langchain/anthropic";\n\nconst ${s} = new ChatAnthropic(${m});`,envs:"ANTHROPIC_API_KEY=your-api-key",dependencies:"@langchain/anthropic"},fireworks:{value:"fireworks",label:"FireworksAI",default:!1,text:`import { ChatFireworks } from "@langchain/community/chat_models/fireworks";\n\nconst ${s} = new ChatFireworks(${u});`,envs:"FIREWORKS_API_KEY=your-api-key",dependencies:"@langchain/community"},mistral:{value:"mistral",label:"MistralAI",default:!1,text:`import { ChatMistralAI } from "@langchain/mistralai";\n\nconst ${s} = new ChatMistralAI(${p});`,envs:"MISTRAL_API_KEY=your-api-key",dependencies:"@langchain/mistralai"},groq:{value:"groq",label:"Groq",default:!1,text:`import { ChatGroq } from "@langchain/groq";\n\nconst ${s} = new ChatGroq(${g});`,envs:"GROQ_API_KEY=your-api-key",dependencies:"@langchain/groq"},vertex:{value:"vertex",label:"VertexAI",default:!1,text:`import { ChatVertexAI } from "@langchain/google-vertexai";\n\nconst ${s} = new ChatVertexAI(${f});`,envs:"GOOGLE_APPLICATION_CREDENTIALS=credentials.json",dependencies:"@langchain/google-vertexai"}},w=(e.onlyWso?h:x).map((e=>j[e]));return(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Pick your chat model:"}),(0,r.jsx)(a.A,{groupId:"modelTabs",children:w.map((e=>(0,r.jsxs)(o.A,{value:e.value,label:e.label,children:[(0,r.jsx)("h4",{children:"Install dependencies"}),(0,r.jsx)(c,{children:[e.dependencies,t].join(" ")}),(0,r.jsx)("h4",{children:"Add environment variables"}),(0,r.jsx)(i.A,{language:"bash",children:e.envs}),(0,r.jsx)("h4",{children:"Instantiate the model"}),(0,r.jsx)(i.A,{language:"typescript",children:e.text})]},e.value)))})]})}},27846:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var a=t(11470),o=t(19365),i=t(21432),s=t(74848);function l(e){let{children:n}=e;return(0,s.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,s.jsx)(o.A,{value:"npm",label:"npm",children:(0,s.jsxs)(i.A,{language:"bash",children:["npm i ",n]})}),(0,s.jsx)(o.A,{value:"yarn",label:"yarn",default:!0,children:(0,s.jsxs)(i.A,{language:"bash",children:["yarn add ",n]})}),(0,s.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,s.jsxs)(i.A,{language:"bash",children:["pnpm add ",n]})})]})}}}]);