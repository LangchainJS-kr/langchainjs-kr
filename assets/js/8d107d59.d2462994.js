(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9787],{81836:(e,n,s)=>{"use strict";s.r(n),s.d(n,{assets:()=>g,contentTitle:()=>u,default:()=>C,frontMatter:()=>p,metadata:()=>y,toc:()=>f});var i=s(74848),o=s(28453),t=s(64428),a=s(78847),r=s(93218),c=s.n(r),d=s(39609),m=s.n(d),l=s(19759),h=s.n(l);const p={hide_table_of_contents:!0},u="Redis-Backed Chat Memory",y={id:"integrations/chat_memory/redis",title:"Redis-Backed Chat Memory",description:"For longer-term persistence across chat sessions, you can swap out the default in-memory chatHistory that backs chat memory classes like BufferMemory for a Redis instance.",source:"@site/docs/integrations/chat_memory/redis.mdx",sourceDirName:"integrations/chat_memory",slug:"/integrations/chat_memory/redis",permalink:"/docs/integrations/chat_memory/redis",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/chat_memory/redis.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},g={},f=[{value:"Setup",id:"setup",level:2},...a.toc,{value:"Usage",id:"usage",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Redis Sentinel Support",id:"redis-sentinel-support",level:3}];function x(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"redis-backed-chat-memory",children:"Redis-Backed Chat Memory"}),"\n",(0,i.jsxs)(n.p,{children:["For longer-term persistence across chat sessions, you can swap out the default in-memory ",(0,i.jsx)(n.code,{children:"chatHistory"})," that backs chat memory classes like ",(0,i.jsx)(n.code,{children:"BufferMemory"})," for a ",(0,i.jsx)(n.a,{href:"https://redis.io/",children:"Redis"})," instance."]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.p,{children:["You will need to install ",(0,i.jsx)(n.a,{href:"https://github.com/redis/node-redis",children:"node-redis"})," in your project:"]}),"\n","\n",(0,i.jsx)(a.default,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai redis @langchain/community\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You will also need a Redis instance to connect to. See instructions on ",(0,i.jsx)(n.a,{href:"https://redis.io/docs/getting-started/",children:"the official Redis website"})," for running the server locally."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["Each chat history session stored in Redis must have a unique id. You can provide an optional ",(0,i.jsx)(n.code,{children:"sessionTTL"})," to make sessions expire after a give number of seconds.\nThe ",(0,i.jsx)(n.code,{children:"config"})," parameter is passed directly into the ",(0,i.jsx)(n.code,{children:"createClient"})," method of ",(0,i.jsx)(n.a,{href:"https://github.com/redis/node-redis",children:"node-redis"}),", and takes all the same arguments."]}),"\n","\n",(0,i.jsx)(t.A,{language:"typescript",children:c()}),"\n",(0,i.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,i.jsxs)(n.p,{children:["You can also directly pass in a previously created ",(0,i.jsx)(n.a,{href:"https://github.com/redis/node-redis",children:"node-redis"})," client instance:"]}),"\n","\n",(0,i.jsx)(t.A,{language:"typescript",children:m()}),"\n",(0,i.jsx)(n.h3,{id:"redis-sentinel-support",children:"Redis Sentinel Support"}),"\n",(0,i.jsxs)(n.p,{children:["You can enable a Redis Sentinel backed cache using ",(0,i.jsx)(n.a,{href:"https://github.com/redis/ioredis",children:"ioredis"})]}),"\n",(0,i.jsxs)(n.p,{children:["This will require the installation of ",(0,i.jsx)(n.a,{href:"https://github.com/redis/ioredis",children:"ioredis"})," in your project."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install ioredis\n"})}),"\n","\n",(0,i.jsx)(t.A,{language:"typescript",children:h()})]})}function C(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},39609:e=>{e.exports={content:'import { Redis } from "ioredis";\nimport { BufferMemory } from "langchain/memory/index";\nimport { RedisChatMessageHistory } from "@langchain/community/stores/message/ioredis";\nimport { ChatOpenAI } from "@langchain/openai";\nimport { ConversationChain } from "langchain/chains";\n\nconst client = new Redis("redis://localhost:6379");\n\nconst memory = new BufferMemory({\n  chatHistory: new RedisChatMessageHistory({\n    sessionId: new Date().toISOString(),\n    sessionTTL: 300,\n    client,\n  }),\n});\n\nconst model = new ChatOpenAI({\n  model: "gpt-3.5-turbo",\n  temperature: 0,\n});\n\nconst chain = new ConversationChain({ llm: model, memory });\n\nconst res1 = await chain.invoke({ input: "Hi! I\'m Jim." });\nconsole.log({ res1 });\n/*\n{\n  res1: {\n    text: "Hello Jim! It\'s nice to meet you. My name is AI. How may I assist you today?"\n  }\n}\n*/\n\nconst res2 = await chain.invoke({ input: "What did I just say my name was?" });\nconsole.log({ res2 });\n\n/*\n{\n  res1: {\n    text: "You said your name was Jim."\n  }\n}\n*/\n',imports:[{local:"BufferMemory",imported:"BufferMemory",source:"langchain/memory/index"},{local:"RedisChatMessageHistory",imported:"RedisChatMessageHistory",source:"@langchain/community/stores/message/ioredis"},{local:"ChatOpenAI",imported:"ChatOpenAI",source:"@langchain/openai"},{local:"ConversationChain",imported:"ConversationChain",source:"langchain/chains"}]}},19759:e=>{e.exports={content:'import { Redis } from "ioredis";\nimport { BufferMemory } from "langchain/memory/index";\nimport { RedisChatMessageHistory } from "@langchain/community/stores/message/ioredis";\nimport { ChatOpenAI } from "@langchain/openai";\nimport { ConversationChain } from "langchain/chains";\n\n// Uses ioredis to facilitate Sentinel Connections see their docs for details on setting up more complex Sentinels: https://github.com/redis/ioredis#sentinel\nconst client = new Redis({\n  sentinels: [\n    { host: "localhost", port: 26379 },\n    { host: "localhost", port: 26380 },\n  ],\n  name: "mymaster",\n});\n\nconst memory = new BufferMemory({\n  chatHistory: new RedisChatMessageHistory({\n    sessionId: new Date().toISOString(),\n    sessionTTL: 300,\n    client,\n  }),\n});\n\nconst model = new ChatOpenAI({ temperature: 0.5 });\n\nconst chain = new ConversationChain({ llm: model, memory });\n\nconst res1 = await chain.invoke({ input: "Hi! I\'m Jim." });\nconsole.log({ res1 });\n/*\n{\n  res1: {\n    text: "Hello Jim! It\'s nice to meet you. My name is AI. How may I assist you today?"\n  }\n}\n*/\n\nconst res2 = await chain.invoke({ input: "What did I just say my name was?" });\nconsole.log({ res2 });\n\n/*\n{\n  res1: {\n    text: "You said your name was Jim."\n  }\n}\n*/\n',imports:[{local:"BufferMemory",imported:"BufferMemory",source:"langchain/memory/index"},{local:"RedisChatMessageHistory",imported:"RedisChatMessageHistory",source:"@langchain/community/stores/message/ioredis"},{local:"ChatOpenAI",imported:"ChatOpenAI",source:"@langchain/openai"},{local:"ConversationChain",imported:"ConversationChain",source:"langchain/chains"}]}},93218:e=>{e.exports={content:'import { BufferMemory } from "langchain/memory/index";\nimport { RedisChatMessageHistory } from "@langchain/redis";\nimport { ChatOpenAI } from "@langchain/openai";\nimport { ConversationChain } from "langchain/chains";\n\nconst memory = new BufferMemory({\n  chatHistory: new RedisChatMessageHistory({\n    sessionId: new Date().toISOString(), // Or some other unique identifier for the conversation\n    sessionTTL: 300, // 5 minutes, omit this parameter to make sessions never expire\n  }),\n});\n\nconst model = new ChatOpenAI({\n  model: "gpt-3.5-turbo",\n  temperature: 0,\n});\n\nconst chain = new ConversationChain({ llm: model, memory });\n\nconst res1 = await chain.invoke({ input: "Hi! I\'m Jim." });\nconsole.log({ res1 });\n/*\n{\n  res1: {\n    text: "Hello Jim! It\'s nice to meet you. My name is AI. How may I assist you today?"\n  }\n}\n*/\n\nconst res2 = await chain.invoke({ input: "What did I just say my name was?" });\nconsole.log({ res2 });\n\n/*\n{\n  res1: {\n    text: "You said your name was Jim."\n  }\n}\n*/\n',imports:[{local:"BufferMemory",imported:"BufferMemory",source:"langchain/memory/index"},{local:"RedisChatMessageHistory",imported:"RedisChatMessageHistory",source:"@langchain/redis"},{local:"ChatOpenAI",imported:"ChatOpenAI",source:"@langchain/openai"},{local:"ConversationChain",imported:"ConversationChain",source:"langchain/chains"}]}}}]);