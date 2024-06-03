(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4718,7817],{5166:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>j,default:()=>w,frontMatter:()=>b,metadata:()=>v,toc:()=>A});var o=t(74848),a=t(28453),r=t(64428),i=t(78847),l=t(2280),s=t(36763),c=t.n(s),d=t(8234),h=t.n(d),m=t(75173),p=t.n(m),g=t(79355),u=t.n(g),x=t(64549),f=t.n(x);const b={sidebar_label:"Google Vertex AI",keywords:["gemini","gemini-pro","ChatVertexAI","vertex"]},j="ChatVertexAI",v={id:"integrations/chat/google_vertex_ai",title:"ChatVertexAI",description:"LangChain.js supports Google Vertex AI chat models as an integration.",source:"@site/docs/integrations/chat/google_vertex_ai.mdx",sourceDirName:"integrations/chat",slug:"/integrations/chat/google_vertex_ai",permalink:"/docs/integrations/chat/google_vertex_ai",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/chat/google_vertex_ai.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Google Vertex AI",keywords:["gemini","gemini-pro","ChatVertexAI","vertex"]},sidebar:"integrations",previous:{title:"(Legacy) Google PaLM/VertexAI",permalink:"/docs/integrations/chat/google_palm"},next:{title:"Groq",permalink:"/docs/integrations/chat/groq"}},y={},A=[{value:"Setup",id:"setup",level:2},{value:"Node",id:"node",level:3},...i.toc,...l.toc,...i.toc,{value:"Web",id:"web",level:3},{value:"Usage",id:"usage",level:2},{value:"Streaming",id:"streaming",level:3},{value:"Tool calling",id:"tool-calling",level:3},{value:"<code>withStructuredOutput</code>",id:"withstructuredoutput",level:3},{value:"VertexAI tools agent",id:"vertexai-tools-agent",level:3}];function _(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"chatvertexai",children:"ChatVertexAI"}),"\n",(0,o.jsx)(n.p,{children:"LangChain.js supports Google Vertex AI chat models as an integration.\nIt supports two different methods of authentication based on whether you're running\nin a Node environment or a web environment."}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsx)(n.h3,{id:"node",children:"Node"}),"\n",(0,o.jsxs)(n.p,{children:["To call Vertex AI models in Node, you'll need to install the ",(0,o.jsx)(n.code,{children:"@langchain/google-vertexai"})," package:"]}),"\n","\n",(0,o.jsx)(i.default,{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/google-vertexai\n"})}),"\n","\n",(0,o.jsx)(l.default,{}),"\n",(0,o.jsx)(n.p,{children:"You should make sure the Vertex AI API is\nenabled for the relevant project and that you've authenticated to\nGoogle Cloud using one of these methods:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["You are logged into an account (using ",(0,o.jsx)(n.code,{children:"gcloud auth application-default login"}),")\npermitted to that project."]}),"\n",(0,o.jsx)(n.li,{children:"You are running on a machine using a service account that is permitted\nto the project."}),"\n",(0,o.jsxs)(n.li,{children:["You have downloaded the credentials for a service account that is permitted\nto the project and set the ",(0,o.jsx)(n.code,{children:"GOOGLE_APPLICATION_CREDENTIALS"})," environment\nvariable to the path of this file."]}),"\n"]}),"\n",(0,o.jsx)(i.default,{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/google-vertexai\n"})}),"\n",(0,o.jsx)(n.h3,{id:"web",children:"Web"}),"\n",(0,o.jsxs)(n.p,{children:["To call Vertex AI models in web environments (like Edge functions), you'll need to install\nthe ",(0,o.jsx)(n.code,{children:"@langchain/google-vertexai-web"})," package:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/google-vertexai-web\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then, you'll need to add your service account credentials directly as a ",(0,o.jsx)(n.code,{children:"GOOGLE_VERTEX_AI_WEB_CREDENTIALS"})," environment variable:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'GOOGLE_VERTEX_AI_WEB_CREDENTIALS={"type":"service_account","project_id":"YOUR_PROJECT-12345",...}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Lastly, you may also pass your credentials directly in code like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:'import { ChatVertexAI } from "@langchain/google-vertexai-web";\n\nconst model = new ChatVertexAI({\n  authOptions: {\n    credentials: {"type":"service_account","project_id":"YOUR_PROJECT-12345",...},\n  },\n});\n'})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["The entire family of ",(0,o.jsx)(n.code,{children:"gemini"})," models are available by specifying the ",(0,o.jsx)(n.code,{children:"modelName"})," parameter."]}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n","\n",(0,o.jsx)(r.A,{language:"typescript",children:c()}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["See the LangSmith trace for the example above ",(0,o.jsx)(n.a,{href:"https://smith.langchain.com/public/9fb579d8-4987-4302-beca-29a684ae2f4c/r",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"streaming",children:"Streaming"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ChatVertexAI"})," also supports streaming in multiple chunks for faster responses:"]}),"\n","\n",(0,o.jsx)(r.A,{language:"typescript",children:h()}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["See the LangSmith trace for the example above ",(0,o.jsx)(n.a,{href:"https://smith.langchain.com/public/ba4cb190-3f60-49aa-a6f8-7d31316d94cf/r",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"tool-calling",children:"Tool calling"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ChatVertexAI"})," also supports calling the model with a tool:"]}),"\n","\n",(0,o.jsx)(r.A,{language:"typescript",children:p()}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["See the LangSmith trace for the example above ",(0,o.jsx)(n.a,{href:"https://smith.langchain.com/public/49e1c32c-395a-45e2-afba-913aa3389137/r",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"withstructuredoutput",children:(0,o.jsx)(n.code,{children:"withStructuredOutput"})}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, you can also use the ",(0,o.jsx)(n.code,{children:"withStructuredOutput"})," method:"]}),"\n","\n",(0,o.jsx)(r.A,{language:"typescript",children:u()}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["See the LangSmith trace for the example above ",(0,o.jsx)(n.a,{href:"https://smith.langchain.com/public/41bbbddb-f357-4bfa-a111-def8294a4514/r",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"vertexai-tools-agent",children:"VertexAI tools agent"}),"\n",(0,o.jsx)(n.p,{children:"The Gemini family of models not only support tool calling, but can also be used in the Tool Calling agent.\nHere's an example:"}),"\n","\n",(0,o.jsx)(r.A,{language:"typescript",children:f()}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["See the LangSmith trace for the agent example above ",(0,o.jsx)(n.a,{href:"https://smith.langchain.com/public/5615ee35-ba76-433b-8639-9b321cb6d4bf/r",children:"here"}),"."]})})]})}function w(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(_,{...e})}):_(e)}},2280:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(74848),a=t(28453);const r={},i=void 0,l={id:"mdx_components/unified_model_params_tooltip",title:"unified_model_params_tooltip",description:"We're unifying model params across all packages. We now suggest using model instead of modelName, and apiKey for API keys.",source:"@site/docs/mdx_components/unified_model_params_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/unified_model_params_tooltip",permalink:"/docs/mdx_components/unified_model_params_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/unified_model_params_tooltip.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[];function d(e){const n={admonition:"admonition",code:"code",p:"p",...(0,a.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["We're unifying model params across all packages. We now suggest using ",(0,o.jsx)(n.code,{children:"model"})," instead of ",(0,o.jsx)(n.code,{children:"modelName"}),", and ",(0,o.jsx)(n.code,{children:"apiKey"})," for API keys."]})})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},64549:e=>{e.exports={content:'import { z } from "zod";\n\nimport { DynamicStructuredTool } from "@langchain/core/tools";\nimport { AgentExecutor, createToolCallingAgent } from "langchain/agents";\n\nimport { ChatPromptTemplate } from "@langchain/core/prompts";\nimport { ChatVertexAI } from "@langchain/google-vertexai";\n// Uncomment this if you\'re running inside a web/edge environment.\n// import { ChatVertexAI } from "@langchain/google-vertexai-web";\n\nconst llm: any = new ChatVertexAI({\n  temperature: 0,\n});\n\n// Prompt template must have "input" and "agent_scratchpad input variables"\nconst prompt = ChatPromptTemplate.fromMessages([\n  ["system", "You are a helpful assistant"],\n  ["placeholder", "{chat_history}"],\n  ["human", "{input}"],\n  ["placeholder", "{agent_scratchpad}"],\n]);\n\nconst currentWeatherTool = new DynamicStructuredTool({\n  name: "get_current_weather",\n  description: "Get the current weather in a given location",\n  schema: z.object({\n    location: z.string().describe("The city and state, e.g. San Francisco, CA"),\n  }),\n  func: async () => Promise.resolve("28 \xb0C"),\n});\n\nconst agent = await createToolCallingAgent({\n  llm,\n  tools: [currentWeatherTool],\n  prompt,\n});\n\nconst agentExecutor = new AgentExecutor({\n  agent,\n  tools: [currentWeatherTool],\n});\n\nconst input = "What\'s the weather like in Paris?";\nconst { output } = await agentExecutor.invoke({ input });\n\nconsole.log(output);\n\n/* \nIt\'s 28 degrees Celsius in Paris.\n*/\n',imports:[{local:"DynamicStructuredTool",imported:"DynamicStructuredTool",source:"@langchain/core/tools"},{local:"AgentExecutor",imported:"AgentExecutor",source:"langchain/agents"},{local:"createToolCallingAgent",imported:"createToolCallingAgent",source:"langchain/agents"},{local:"ChatPromptTemplate",imported:"ChatPromptTemplate",source:"@langchain/core/prompts"},{local:"ChatVertexAI",imported:"ChatVertexAI",source:"@langchain/google-vertexai"}]}},8234:e=>{e.exports={content:'import { ChatVertexAI } from "@langchain/google-vertexai";\n// Or, if using the web entrypoint:\n// import { ChatVertexAI } from "@langchain/google-vertexai-web";\n\nconst model = new ChatVertexAI({\n  temperature: 0.7,\n});\nconst stream = await model.stream([\n  ["system", "You are a funny assistant that answers in pirate language."],\n  ["human", "What is your favorite food?"],\n]);\n\nfor await (const chunk of stream) {\n  console.log(chunk);\n}\n\n/*\nAIMessageChunk {\n  content: [{ type: \'text\', text: \'Ahoy there, matey! Me favorite grub be fish and chips, with\' }],\n  additional_kwargs: {},\n  response_metadata: { data: { candidates: [Array], promptFeedback: [Object] } }\n}\nAIMessageChunk {\n  content: [{ type: \'text\', text: " a hearty pint o\' grog to wash it down. What be yer fancy, landlubber?" }],\n  additional_kwargs: {},\n  response_metadata: { data: { candidates: [Array] } }\n}\nAIMessageChunk {\n  content: \'\',\n  additional_kwargs: {},\n  response_metadata: { finishReason: \'stop\' }\n}\n*/\n',imports:[{local:"ChatVertexAI",imported:"ChatVertexAI",source:"@langchain/google-vertexai"}]}},75173:e=>{e.exports={content:'import { ChatVertexAI } from "@langchain/google-vertexai";\nimport { type GeminiTool } from "@langchain/google-vertexai/types";\nimport { zodToGeminiParameters } from "@langchain/google-vertexai/utils";\nimport { z } from "zod";\n// Or, if using the web entrypoint:\n// import { ChatVertexAI } from "@langchain/google-vertexai-web";\n\nconst calculatorSchema = z.object({\n  operation: z\n    .enum(["add", "subtract", "multiply", "divide"])\n    .describe("The type of operation to execute"),\n  number1: z.number().describe("The first number to operate on."),\n  number2: z.number().describe("The second number to operate on."),\n});\n\nconst geminiCalculatorTool: GeminiTool = {\n  functionDeclarations: [\n    {\n      name: "calculator",\n      description: "A simple calculator tool",\n      parameters: zodToGeminiParameters(calculatorSchema),\n    },\n  ],\n};\n\nconst model = new ChatVertexAI({\n  temperature: 0.7,\n  model: "gemini-1.0-pro",\n}).bind({\n  tools: [geminiCalculatorTool],\n});\n\nconst response = await model.invoke("What is 1628253239 times 81623836?");\nconsole.log(JSON.stringify(response.additional_kwargs, null, 2));\n/*\n{\n  "tool_calls": [\n    {\n      "id": "calculator",\n      "type": "function",\n      "function": {\n        "name": "calculator",\n        "arguments": "{\\"number2\\":81623836,\\"number1\\":1628253239,\\"operation\\":\\"multiply\\"}"\n      }\n    }\n  ],\n}\n */\n',imports:[{local:"ChatVertexAI",imported:"ChatVertexAI",source:"@langchain/google-vertexai"},{local:"GeminiTool",imported:"GeminiTool",source:"@langchain/google-vertexai/types"},{local:"zodToGeminiParameters",imported:"zodToGeminiParameters",source:"@langchain/google-vertexai/utils"}]}},79355:e=>{e.exports={content:'import { ChatVertexAI } from "@langchain/google-vertexai";\nimport { z } from "zod";\n// Or, if using the web entrypoint:\n// import { ChatVertexAI } from "@langchain/google-vertexai-web";\n\nconst calculatorSchema = z.object({\n  operation: z\n    .enum(["add", "subtract", "multiply", "divide"])\n    .describe("The type of operation to execute"),\n  number1: z.number().describe("The first number to operate on."),\n  number2: z.number().describe("The second number to operate on."),\n});\n\nconst model = new ChatVertexAI({\n  temperature: 0.7,\n  model: "gemini-1.0-pro",\n}).withStructuredOutput(calculatorSchema);\n\nconst response = await model.invoke("What is 1628253239 times 81623836?");\nconsole.log(response);\n/*\n{ operation: \'multiply\', number1: 1628253239, number2: 81623836 }\n */\n',imports:[{local:"ChatVertexAI",imported:"ChatVertexAI",source:"@langchain/google-vertexai"}]}},36763:e=>{e.exports={content:'import { ChatVertexAI } from "@langchain/google-vertexai";\n// Or, if using the web entrypoint:\n// import { ChatVertexAI } from "@langchain/google-vertexai-web";\n\nconst model = new ChatVertexAI({\n  temperature: 0.7,\n  model: "gemini-1.0-pro",\n});\n\nconst response = await model.invoke("Why is the ocean blue?");\nconsole.log(response);\n/*\nAIMessageChunk {\n  content: [{ type: \'text\', text: \'The ocean appears blue due to a phenomenon called Rayleigh scattering. This occurs when sunlight\' }],\n  additional_kwargs: {},\n  response_metadata: {}\n}\n */\n',imports:[{local:"ChatVertexAI",imported:"ChatVertexAI",source:"@langchain/google-vertexai"}]}}}]);