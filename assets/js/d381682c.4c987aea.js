(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[590],{4704:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>h,metadata:()=>c,toc:()=>p});var o=t(74848),a=t(28453),r=t(64428),s=t(7742),i=t.n(s),m=t(78847);const h={hide_table_of_contents:!0},l="Mot\xf6rhead Memory",c={id:"integrations/chat_memory/motorhead_memory",title:"Mot\xf6rhead Memory",description:"Mot\xf6rhead is a memory server implemented in Rust. It automatically handles incremental summarization in the background and allows for stateless applications.",source:"@site/docs/integrations/chat_memory/motorhead_memory.mdx",sourceDirName:"integrations/chat_memory",slug:"/integrations/chat_memory/motorhead_memory",permalink:"/docs/integrations/chat_memory/motorhead_memory",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/chat_memory/motorhead_memory.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},d={},p=[{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},...m.toc];function y(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"mot\xf6rhead-memory",children:"Mot\xf6rhead Memory"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/getmetal/motorhead",children:"Mot\xf6rhead"})," is a memory server implemented in Rust. It automatically handles incremental summarization in the background and allows for stateless applications."]}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(n.p,{children:["See instructions at ",(0,o.jsx)(n.a,{href:"https://github.com/getmetal/motorhead",children:"Mot\xf6rhead"})," for running the server locally, or ",(0,o.jsx)(n.a,{href:"https://getmetal.io",children:"https://getmetal.io"})," to get API keys for the hosted version."]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n","\n","\n",(0,o.jsx)(m.default,{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai\n"})}),"\n",(0,o.jsx)(r.A,{language:"typescript",children:i()})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(y,{...e})}):y(e)}},7742:e=>{e.exports={content:'import { ChatOpenAI } from "@langchain/openai";\nimport { ConversationChain } from "langchain/chains";\nimport { MotorheadMemory } from "@langchain/community/memory/motorhead_memory";\n\n// Managed Example (visit https://getmetal.io to get your keys)\n// const managedMemory = new MotorheadMemory({\n//   memoryKey: "chat_history",\n//   sessionId: "test",\n//   apiKey: "MY_API_KEY",\n//   clientId: "MY_CLIENT_ID",\n// });\n\n// Self Hosted Example\nconst memory = new MotorheadMemory({\n  memoryKey: "chat_history",\n  sessionId: "test",\n  url: "localhost:8080", // Required for self hosted\n});\n\nconst model = new ChatOpenAI({\n  model: "gpt-3.5-turbo",\n  temperature: 0,\n});\n\nconst chain = new ConversationChain({ llm: model, memory });\n\nconst res1 = await chain.invoke({ input: "Hi! I\'m Jim." });\nconsole.log({ res1 });\n/*\n{\n  res1: {\n    text: "Hello Jim! It\'s nice to meet you. My name is AI. How may I assist you today?"\n  }\n}\n*/\n\nconst res2 = await chain.invoke({ input: "What did I just say my name was?" });\nconsole.log({ res2 });\n\n/*\n{\n  res1: {\n    text: "You said your name was Jim."\n  }\n}\n*/\n',imports:[{local:"ChatOpenAI",imported:"ChatOpenAI",source:"@langchain/openai"},{local:"ConversationChain",imported:"ConversationChain",source:"langchain/chains"},{local:"MotorheadMemory",imported:"MotorheadMemory",source:"@langchain/community/memory/motorhead_memory"}]}}}]);