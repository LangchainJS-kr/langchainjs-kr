(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8281,7817],{46965:(n,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>_,contentTitle:()=>x,default:()=>w,frontMatter:()=>f,metadata:()=>T,toc:()=>y});var o=t(74848),a=t(28453),i=t(78847),r=t(2280),s=t(64428),l=t(30995),c=t.n(l),p=t(34659),h=t.n(p),d=t(3608),m=t.n(d),u=t(79029),g=t.n(u);const f={sidebar_label:"Anthropic Tools",sidebar_class_name:"hidden"},x="Anthropic Tools",T={id:"integrations/chat/anthropic_tools",title:"anthropic_tools",description:"This API is deprecated as Anthropic now officially supports tools. Click here to read the documentation.",source:"@site/docs/integrations/chat/anthropic_tools.mdx",sourceDirName:"integrations/chat",slug:"/integrations/chat/anthropic_tools",permalink:"/docs/integrations/chat/anthropic_tools",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/chat/anthropic_tools.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Anthropic Tools",sidebar_class_name:"hidden"},sidebar:"integrations",previous:{title:"Anthropic",permalink:"/docs/integrations/chat/anthropic"},next:{title:"Azure OpenAI",permalink:"/docs/integrations/chat/azure"}},_={},y=[{value:"Setup",id:"setup",level:2},...i.toc,{value:"Initialize model",id:"initialize-model",level:2},...r.toc,{value:"Passing in tools",id:"passing-in-tools",level:2},{value:"Parallel tool calling",id:"parallel-tool-calling",level:2},{value:"<code>.withStructuredOutput({ ... })</code>",id:"withstructuredoutput--",level:2},{value:"Using JSON schema:",id:"using-json-schema",level:3}];function A(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.admonition,{type:"warning",children:(0,o.jsxs)(e.p,{children:["This API is deprecated as Anthropic now officially supports tools. ",(0,o.jsx)(e.a,{href:"/docs/integrations/chat/anthropic#tools",children:"Click here to read the documentation"}),"."]})}),"\n",(0,o.jsx)(e.h1,{id:"anthropic-tools",children:"Anthropic Tools"}),"\n",(0,o.jsx)(e.p,{children:"LangChain offers an experimental wrapper around Anthropic that gives it the same API as OpenAI Functions."}),"\n",(0,o.jsx)(e.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(e.p,{children:["To start, install the ",(0,o.jsx)(e.code,{children:"@langchain/anthropic"})," integration package."]}),"\n","\n",(0,o.jsx)(i.default,{}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/anthropic\n"})}),"\n",(0,o.jsx)(e.h2,{id:"initialize-model",children:"Initialize model"}),"\n",(0,o.jsxs)(e.p,{children:["You can initialize this wrapper the same way you'd initialize a standard ",(0,o.jsx)(e.code,{children:"ChatAnthropic"})," instance:"]}),"\n","\n",(0,o.jsx)(r.default,{}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typescript",children:'import { ChatAnthropicTools } from "@langchain/anthropic/experimental";\n\nconst model = new ChatAnthropicTools({\n  temperature: 0.1,\n  model: "claude-3-sonnet-20240229",\n  apiKey: "YOUR-API-KEY", // In Node.js defaults to process.env.ANTHROPIC_API_KEY\n});\n'})}),"\n",(0,o.jsx)(e.h2,{id:"passing-in-tools",children:"Passing in tools"}),"\n",(0,o.jsx)(e.p,{children:"You can now pass in tools the same way as OpenAI:"}),"\n","\n",(0,o.jsx)(s.A,{language:"typescript",children:c()}),"\n",(0,o.jsx)(e.h2,{id:"parallel-tool-calling",children:"Parallel tool calling"}),"\n",(0,o.jsx)(e.p,{children:"The model may choose to call multiple tools. Here is an example using an extraction use-case:"}),"\n","\n",(0,o.jsx)(s.A,{language:"typescript",children:h()}),"\n",(0,o.jsx)(e.h2,{id:"withstructuredoutput--",children:(0,o.jsx)(e.code,{children:".withStructuredOutput({ ... })"})}),"\n",(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:".withStructuredOutput"})," method is in beta. It is actively being worked on, so the API may change."]})}),"\n",(0,o.jsxs)(e.p,{children:["Using the ",(0,o.jsx)(e.code,{children:".withStructuredOutput"})," method, you can make the LLM return structured output, given only a Zod or JSON schema:"]}),"\n","\n",(0,o.jsx)(s.A,{language:"typescript",children:m()}),"\n",(0,o.jsx)(e.h3,{id:"using-json-schema",children:"Using JSON schema:"}),"\n","\n",(0,o.jsx)(s.A,{language:"typescript",children:g()})]})}function w(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(A,{...n})}):A(n)}},2280:(n,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(74848),a=t(28453);const i={},r=void 0,s={id:"mdx_components/unified_model_params_tooltip",title:"unified_model_params_tooltip",description:"We're unifying model params across all packages. We now suggest using model instead of modelName, and apiKey for API keys.",source:"@site/docs/mdx_components/unified_model_params_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/unified_model_params_tooltip",permalink:"/docs/mdx_components/unified_model_params_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/unified_model_params_tooltip.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[];function p(n){const e={admonition:"admonition",code:"code",p:"p",...(0,a.R)(),...n.components};return(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsxs)(e.p,{children:["We're unifying model params across all packages. We now suggest using ",(0,o.jsx)(e.code,{children:"model"})," instead of ",(0,o.jsx)(e.code,{children:"modelName"}),", and ",(0,o.jsx)(e.code,{children:"apiKey"})," for API keys."]})})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},34659:n=>{n.exports={content:'import { z } from "zod";\nimport { zodToJsonSchema } from "zod-to-json-schema";\n\nimport { ChatAnthropicTools } from "@langchain/anthropic/experimental";\nimport { PromptTemplate } from "@langchain/core/prompts";\nimport { JsonOutputToolsParser } from "@langchain/core/output_parsers/openai_tools";\n\nconst EXTRACTION_TEMPLATE = `Extract and save the relevant entities mentioned in the following passage together with their properties.\n\nPassage:\n{input}\n`;\n\nconst prompt = PromptTemplate.fromTemplate(EXTRACTION_TEMPLATE);\n\n// Use Zod for easier schema declaration\nconst schema = z.object({\n  name: z.string().describe("The name of a person"),\n  height: z.number().describe("The person\'s height"),\n  hairColor: z.optional(z.string()).describe("The person\'s hair color"),\n});\n\nconst model = new ChatAnthropicTools({\n  temperature: 0.1,\n  model: "claude-3-sonnet-20240229",\n}).bind({\n  tools: [\n    {\n      type: "function",\n      function: {\n        name: "person",\n        description: "Extracts the relevant people from the passage.",\n        parameters: zodToJsonSchema(schema),\n      },\n    },\n  ],\n  // Can also set to "auto" to let the model choose a tool\n  tool_choice: {\n    type: "function",\n    function: {\n      name: "person",\n    },\n  },\n});\n\n// Use a JsonOutputToolsParser to get the parsed JSON response directly.\nconst chain = await prompt.pipe(model).pipe(new JsonOutputToolsParser());\n\nconst response = await chain.invoke({\n  input:\n    "Alex is 5 feet tall. Claudia is 1 foot taller than Alex and jumps higher than him. Claudia is a brunette and Alex is blonde.",\n});\n\nconsole.log(JSON.stringify(response, null, 2));\n\n/*\n  [\n    {\n      "type": "person",\n      "args": {\n        "name": "Alex",\n        "height": 5,\n        "hairColor": "blonde"\n      }\n    },\n    {\n      "type": "person",\n      "args": {\n        "name": "Claudia",\n        "height": 6,\n        "hairColor": "brunette"\n      }\n    }\n  ]\n*/\n',imports:[{local:"ChatAnthropicTools",imported:"ChatAnthropicTools",source:"@langchain/anthropic/experimental"},{local:"PromptTemplate",imported:"PromptTemplate",source:"@langchain/core/prompts"},{local:"JsonOutputToolsParser",imported:"JsonOutputToolsParser",source:"@langchain/core/output_parsers/openai_tools"}]}},30995:n=>{n.exports={content:'import { ChatAnthropicTools } from "@langchain/anthropic/experimental";\nimport { HumanMessage } from "@langchain/core/messages";\n\nconst model = new ChatAnthropicTools({\n  temperature: 0.1,\n  model: "claude-3-sonnet-20240229",\n}).bind({\n  tools: [\n    {\n      type: "function",\n      function: {\n        name: "get_current_weather",\n        description: "Get the current weather in a given location",\n        parameters: {\n          type: "object",\n          properties: {\n            location: {\n              type: "string",\n              description: "The city and state, e.g. San Francisco, CA",\n            },\n            unit: { type: "string", enum: ["celsius", "fahrenheit"] },\n          },\n          required: ["location"],\n        },\n      },\n    },\n  ],\n  // You can set the `function_call` arg to force the model to use a function\n  tool_choice: {\n    type: "function",\n    function: {\n      name: "get_current_weather",\n    },\n  },\n});\n\nconst response = await model.invoke([\n  new HumanMessage({\n    content: "What\'s the weather in Boston?",\n  }),\n]);\n\nconsole.log(response);\n\n/*\n  AIMessage {\n    lc_serializable: true,\n    lc_kwargs: { content: \'\', additional_kwargs: { tool_calls: [Array] } },\n    lc_namespace: [ \'langchain_core\', \'messages\' ],\n    content: \'\',\n    name: undefined,\n    additional_kwargs: { tool_calls: [ [Object] ] }\n  }\n*/\n\nconsole.log(response.additional_kwargs.tool_calls);\n\n/*\n  [\n    {\n      id: \'0\',\n      type: \'function\',\n      function: {\n        name: \'get_current_weather\',\n        arguments: \'{"location":"Boston, MA","unit":"fahrenheit"}\'\n      }\n    }\n  ]\n*/\n',imports:[{local:"ChatAnthropicTools",imported:"ChatAnthropicTools",source:"@langchain/anthropic/experimental"},{local:"HumanMessage",imported:"HumanMessage",source:"@langchain/core/messages"}]}},3608:n=>{n.exports={content:'import { z } from "zod";\nimport { ChatAnthropicTools } from "@langchain/anthropic/experimental";\nimport { ChatPromptTemplate } from "@langchain/core/prompts";\n\nconst calculatorSchema = z.object({\n  operation: z\n    .enum(["add", "subtract", "multiply", "divide"])\n    .describe("The type of operation to execute"),\n  number1: z.number().describe("The first number to operate on."),\n  number2: z.number().describe("The second number to operate on."),\n});\n\nconst model = new ChatAnthropicTools({\n  model: "claude-3-sonnet-20240229",\n  temperature: 0.1,\n});\n\n// Pass the schema and tool name to the withStructuredOutput method\nconst modelWithTool = model.withStructuredOutput(calculatorSchema);\n\n// You can also set force: false to allow the model scratchpad space.\n// This may improve reasoning capabilities.\n// const modelWithTool = model.withStructuredOutput(calculatorSchema, {\n//   force: false,\n// });\n\nconst prompt = ChatPromptTemplate.fromMessages([\n  [\n    "system",\n    "You are a helpful assistant who always needs to use a calculator.",\n  ],\n  ["human", "{input}"],\n]);\n\n// Chain your prompt and model together\nconst chain = prompt.pipe(modelWithTool);\n\nconst response = await chain.invoke({\n  input: "What is 2 + 2?",\n});\nconsole.log(response);\n/*\n  { operation: \'add\', number1: 2, number2: 2 }\n*/\n',imports:[{local:"ChatAnthropicTools",imported:"ChatAnthropicTools",source:"@langchain/anthropic/experimental"},{local:"ChatPromptTemplate",imported:"ChatPromptTemplate",source:"@langchain/core/prompts"}]}},79029:n=>{n.exports={content:'import { ChatAnthropicTools } from "@langchain/anthropic/experimental";\nimport { ChatPromptTemplate } from "@langchain/core/prompts";\n\nconst calculatorJsonSchema = {\n  type: "object",\n  properties: {\n    operation: {\n      type: "string",\n      enum: ["add", "subtract", "multiply", "divide"],\n      description: "The type of operation to execute.",\n    },\n    number1: { type: "number", description: "The first number to operate on." },\n    number2: {\n      type: "number",\n      description: "The second number to operate on.",\n    },\n  },\n  required: ["operation", "number1", "number2"],\n  description: "A simple calculator tool",\n};\n\nconst model = new ChatAnthropicTools({\n  model: "claude-3-sonnet-20240229",\n  temperature: 0.1,\n});\n\n// Pass the schema and optionally, the tool name to the withStructuredOutput method\nconst modelWithTool = model.withStructuredOutput(calculatorJsonSchema, {\n  name: "calculator",\n});\n\nconst prompt = ChatPromptTemplate.fromMessages([\n  [\n    "system",\n    "You are a helpful assistant who always needs to use a calculator.",\n  ],\n  ["human", "{input}"],\n]);\n\n// Chain your prompt and model together\nconst chain = prompt.pipe(modelWithTool);\n\nconst response = await chain.invoke({\n  input: "What is 2 + 2?",\n});\nconsole.log(response);\n/*\n  { operation: \'add\', number1: 2, number2: 2 }\n*/\n',imports:[{local:"ChatAnthropicTools",imported:"ChatAnthropicTools",source:"@langchain/anthropic/experimental"},{local:"ChatPromptTemplate",imported:"ChatPromptTemplate",source:"@langchain/core/prompts"}]}}}]);