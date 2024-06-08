(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4005,7817],{63954:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>f,default:()=>q,frontMatter:()=>y,metadata:()=>w,toc:()=>I});var o=t(74848),a=t(28453),s=t(64428),r=t(78847),i=t(2280),l=t(61065),c=t.n(l),p=t(60408),m=t.n(p),h=t(88413),u=t.n(h),d=t(40926),g=t.n(d);const y={sidebar_label:"Groq"},f="ChatGroq",w={id:"integrations/chat/groq",title:"ChatGroq",description:"Setup",source:"@site/docs/integrations/chat/groq.mdx",sourceDirName:"integrations/chat",slug:"/integrations/chat/groq",permalink:"/docs/integrations/chat/groq",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/chat/groq.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Groq"},sidebar:"integrations",previous:{title:"Google Vertex AI",permalink:"/docs/integrations/chat/google_vertex_ai"},next:{title:"Llama CPP",permalink:"/docs/integrations/chat/llama_cpp"}},x={},I=[{value:"Setup",id:"setup",level:2},...r.toc,...i.toc,{value:"Usage",id:"usage",level:2},{value:"Tool calling",id:"tool-calling",level:2},{value:"<code>.withStructuredOutput({ ... })</code>",id:"withstructuredoutput--",level:3},{value:"Streaming",id:"streaming",level:2}];function j(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"chatgroq",children:"ChatGroq"}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(n.p,{children:["In order to use the Groq API you'll need an API key. You can sign up for a Groq account and create an API key ",(0,o.jsx)(n.a,{href:"https://wow.groq.com/",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You'll first need to install the ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/@langchain/groq",children:(0,o.jsx)(n.code,{children:"@langchain/groq"})})," package:"]}),"\n","\n",(0,o.jsx)(r.default,{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/groq\n"})}),"\n","\n",(0,o.jsx)(i.default,{}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,o.jsx)(s.A,{language:"typescript",children:c()}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["You can see a LangSmith trace of this example ",(0,o.jsx)(n.a,{href:"https://smith.langchain.com/public/2ba59207-1383-4e42-b6a6-c1ddcfcd5710/r",children:"here"})]})}),"\n",(0,o.jsx)(n.h2,{id:"tool-calling",children:"Tool calling"}),"\n",(0,o.jsx)(n.p,{children:"Groq chat models support calling multiple functions to get all required data to answer a question.\nHere's an example:"}),"\n","\n",(0,o.jsx)(s.A,{language:"typescript",children:m()}),"\n",(0,o.jsx)(n.h3,{id:"withstructuredoutput--",children:(0,o.jsx)(n.code,{children:".withStructuredOutput({ ... })"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:".withStructuredOutput"})," method is in beta. It is actively being worked on, so the API may change."]})}),"\n",(0,o.jsxs)(n.p,{children:["You can also use the ",(0,o.jsx)(n.code,{children:".withStructuredOutput({ ... })"})," method to coerce ",(0,o.jsx)(n.code,{children:"ChatGroq"})," into returning a structured output."]}),"\n",(0,o.jsxs)(n.p,{children:["The method allows for passing in either a Zod object, or a valid JSON schema (like what is returned from ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/zod-to-json-schema",children:(0,o.jsx)(n.code,{children:"zodToJsonSchema"})}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["Using the method is simple. Just define your LLM and call ",(0,o.jsx)(n.code,{children:".withStructuredOutput({ ... })"})," on it, passing the desired schema."]}),"\n",(0,o.jsxs)(n.p,{children:["Here is an example using a Zod schema and the ",(0,o.jsx)(n.code,{children:"functionCalling"})," mode (default mode):"]}),"\n","\n",(0,o.jsx)(s.A,{language:"typescript",children:u()}),"\n",(0,o.jsx)(n.h2,{id:"streaming",children:"Streaming"}),"\n",(0,o.jsx)(n.p,{children:"Groq's API also supports streaming token responses. The example below demonstrates how to use this feature."}),"\n","\n",(0,o.jsx)(s.A,{language:"typescript",children:g()}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["You can see a LangSmith trace of this example ",(0,o.jsx)(n.a,{href:"https://smith.langchain.com/public/72832eb5-b9ae-4ce0-baa2-c2e95eca61a7/r",children:"here"})]})})]})}function q(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}},2280:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=t(74848),a=t(28453);const s={},r=void 0,i={id:"mdx_components/unified_model_params_tooltip",title:"unified_model_params_tooltip",description:"We're unifying model params across all packages. We now suggest using model instead of modelName, and apiKey for API keys.",source:"@site/docs/mdx_components/unified_model_params_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/unified_model_params_tooltip",permalink:"/docs/mdx_components/unified_model_params_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/unified_model_params_tooltip.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[];function p(e){const n={admonition:"admonition",code:"code",p:"p",...(0,a.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["We're unifying model params across all packages. We now suggest using ",(0,o.jsx)(n.code,{children:"model"})," instead of ",(0,o.jsx)(n.code,{children:"modelName"}),", and ",(0,o.jsx)(n.code,{children:"apiKey"})," for API keys."]})})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},61065:e=>{e.exports={content:'import { ChatGroq } from "@langchain/groq";\nimport { ChatPromptTemplate } from "@langchain/core/prompts";\n\nconst model = new ChatGroq({\n  apiKey: process.env.GROQ_API_KEY,\n});\nconst prompt = ChatPromptTemplate.fromMessages([\n  ["system", "You are a helpful assistant"],\n  ["human", "{input}"],\n]);\nconst chain = prompt.pipe(model);\nconst response = await chain.invoke({\n  input: "Hello",\n});\nconsole.log("response", response);\n/**\nresponse AIMessage {\n  content: "Hello! I\'m happy to assist you in any way I can. Is there something specific you need help with or a question you have?",\n}\n */\n',imports:[{local:"ChatGroq",imported:"ChatGroq",source:"@langchain/groq"},{local:"ChatPromptTemplate",imported:"ChatPromptTemplate",source:"@langchain/core/prompts"}]}},40926:e=>{e.exports={content:"import { ChatGroq } from \"@langchain/groq\";\nimport { ChatPromptTemplate } from \"@langchain/core/prompts\";\nimport { StringOutputParser } from \"@langchain/core/output_parsers\";\n\nconst model = new ChatGroq({\n  apiKey: process.env.GROQ_API_KEY,\n});\nconst prompt = ChatPromptTemplate.fromMessages([\n  [\"system\", \"You are a helpful assistant\"],\n  [\"human\", \"{input}\"],\n]);\nconst outputParser = new StringOutputParser();\nconst chain = prompt.pipe(model).pipe(outputParser);\nconst response = await chain.stream({\n  input: \"Hello\",\n});\nlet res = \"\";\nfor await (const item of response) {\n  res += item;\n  console.log(\"stream:\", res);\n}\n/**\nstream: Hello\nstream: Hello!\nstream: Hello! I\nstream: Hello! I'\nstream: Hello! I'm\nstream: Hello! I'm happy\nstream: Hello! I'm happy to\nstream: Hello! I'm happy to assist\nstream: Hello! I'm happy to assist you\nstream: Hello! I'm happy to assist you in\nstream: Hello! I'm happy to assist you in any\nstream: Hello! I'm happy to assist you in any way\nstream: Hello! I'm happy to assist you in any way I\nstream: Hello! I'm happy to assist you in any way I can\nstream: Hello! I'm happy to assist you in any way I can.\nstream: Hello! I'm happy to assist you in any way I can. Is\nstream: Hello! I'm happy to assist you in any way I can. Is there\nstream: Hello! I'm happy to assist you in any way I can. Is there something\nstream: Hello! I'm happy to assist you in any way I can. Is there something specific\nstream: Hello! I'm happy to assist you in any way I can. Is there something specific you\nstream: Hello! I'm happy to assist you in any way I can. Is there something specific you need\nstream: Hello! I'm happy to assist you in any way I can. Is there something specific you need help\nstream: Hello! I'm happy to assist you in any way I can. Is there something specific you need help with\nstream: Hello! I'm happy to assist you in any way I can. Is there something specific you need help with or\nstream: Hello! I'm happy to assist you in any way I can. Is there something specific you need help with or a\nstream: Hello! I'm happy to assist you in any way I can. Is there something specific you need help with or a question\nstream: Hello! I'm happy to assist you in any way I can. Is there something specific you need help with or a question you\nstream: Hello! I'm happy to assist you in any way I can. Is there something specific you need help with or a question you have\nstream: Hello! I'm happy to assist you in any way I can. Is there something specific you need help with or a question you have?\n */\n",imports:[{local:"ChatGroq",imported:"ChatGroq",source:"@langchain/groq"},{local:"ChatPromptTemplate",imported:"ChatPromptTemplate",source:"@langchain/core/prompts"},{local:"StringOutputParser",imported:"StringOutputParser",source:"@langchain/core/output_parsers"}]}},60408:e=>{e.exports={content:'import { ChatGroq } from "@langchain/groq";\n\n// Mocked out function, could be a database/API call in production\nfunction getCurrentWeather(location: string, _unit?: string) {\n  if (location.toLowerCase().includes("tokyo")) {\n    return JSON.stringify({ location, temperature: "10", unit: "celsius" });\n  } else if (location.toLowerCase().includes("san francisco")) {\n    return JSON.stringify({\n      location,\n      temperature: "72",\n      unit: "fahrenheit",\n    });\n  } else {\n    return JSON.stringify({ location, temperature: "22", unit: "celsius" });\n  }\n}\n\n// Bind function to the model as a tool\nconst chat = new ChatGroq({\n  model: "mixtral-8x7b-32768",\n  maxTokens: 128,\n}).bind({\n  tools: [\n    {\n      type: "function",\n      function: {\n        name: "get_current_weather",\n        description: "Get the current weather in a given location",\n        parameters: {\n          type: "object",\n          properties: {\n            location: {\n              type: "string",\n              description: "The city and state, e.g. San Francisco, CA",\n            },\n            unit: { type: "string", enum: ["celsius", "fahrenheit"] },\n          },\n          required: ["location"],\n        },\n      },\n    },\n  ],\n  tool_choice: "auto",\n});\n\nconst res = await chat.invoke([\n  ["human", "What\'s the weather like in San Francisco?"],\n]);\nconsole.log(res.additional_kwargs.tool_calls);\n/*\n  [\n    {\n      id: \'call_01htk055jpftwbb9tvphyf9bnf\',\n      type: \'function\',\n      function: {\n        name: \'get_current_weather\',\n        arguments: \'{"location":"San Francisco, CA"}\'\n      }\n    }\n  ]\n*/\n',imports:[{local:"ChatGroq",imported:"ChatGroq",source:"@langchain/groq"}]}},88413:e=>{e.exports={content:'import { ChatPromptTemplate } from "@langchain/core/prompts";\nimport { ChatGroq } from "@langchain/groq";\nimport { z } from "zod";\n\nconst model = new ChatGroq({\n  temperature: 0,\n  model: "mixtral-8x7b-32768",\n});\n\nconst calculatorSchema = z.object({\n  operation: z.enum(["add", "subtract", "multiply", "divide"]),\n  number1: z.number(),\n  number2: z.number(),\n});\n\nconst modelWithStructuredOutput = model.withStructuredOutput(calculatorSchema);\n\nconst prompt = ChatPromptTemplate.fromMessages([\n  ["system", "You are VERY bad at math and must always use a calculator."],\n  ["human", "Please help me!! What is 2 + 2?"],\n]);\nconst chain = prompt.pipe(modelWithStructuredOutput);\nconst result = await chain.invoke({});\nconsole.log(result);\n/*\n  { operation: \'add\', number1: 2, number2: 2 }\n*/\n\n/**\n * You can also specify \'includeRaw\' to return the parsed\n * and raw output in the result.\n */\nconst includeRawModel = model.withStructuredOutput(calculatorSchema, {\n  name: "calculator",\n  includeRaw: true,\n});\n\nconst includeRawChain = prompt.pipe(includeRawModel);\nconst includeRawResult = await includeRawChain.invoke({});\nconsole.log(includeRawResult);\n/*\n  {\n    raw: AIMessage {\n      content: \'\',\n      additional_kwargs: {\n        tool_calls: [\n          {\n            "id": "call_01htk094ktfgxtkwj40n0ehg61",\n            "type": "function",\n            "function": {\n              "name": "calculator",\n              "arguments": "{\\"operation\\": \\"add\\", \\"number1\\": 2, \\"number2\\": 2}"\n            }\n          }\n        ]\n      },\n      response_metadata: {\n        "tokenUsage": {\n          "completionTokens": 197,\n          "promptTokens": 1214,\n          "totalTokens": 1411\n        },\n        "finish_reason": "tool_calls"\n      }\n    },\n    parsed: { operation: \'add\', number1: 2, number2: 2 }\n  }\n*/\n',imports:[{local:"ChatPromptTemplate",imported:"ChatPromptTemplate",source:"@langchain/core/prompts"},{local:"ChatGroq",imported:"ChatGroq",source:"@langchain/groq"}]}}}]);