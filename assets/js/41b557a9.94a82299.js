(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2707],{13748:(n,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>h,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var s=t(74848),a=t(28453),o=t(64428),i=t(78847),r=t(5678),c=t.n(r);const l={hide_table_of_contents:!0},h="Astra DB Chat Memory",d={id:"integrations/chat_memory/astradb",title:"Astra DB Chat Memory",description:"For longer-term persistence across chat sessions, you can swap out the default in-memory chatHistory that backs chat memory classes like BufferMemory for Astra DB.",source:"@site/docs/integrations/chat_memory/astradb.mdx",sourceDirName:"integrations/chat_memory",slug:"/integrations/chat_memory/astradb",permalink:"/docs/integrations/chat_memory/astradb",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/chat_memory/astradb.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},p={},m=[{value:"Setup",id:"setup",level:2},...i.toc,{value:"Configuration and Initalization",id:"configuration-and-initalization",level:2},{value:"Usage",id:"usage",level:2}];function u(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"astra-db-chat-memory",children:"Astra DB Chat Memory"}),"\n",(0,s.jsxs)(e.p,{children:["For longer-term persistence across chat sessions, you can swap out the default in-memory ",(0,s.jsx)(e.code,{children:"chatHistory"})," that backs chat memory classes like ",(0,s.jsx)(e.code,{children:"BufferMemory"})," for Astra DB."]}),"\n",(0,s.jsx)(e.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(e.p,{children:"You need to install the Astra DB TS client:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @datastax/astra-db-ts\n"})}),"\n","\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai @langchain/community\n"})}),"\n",(0,s.jsx)(e.h2,{id:"configuration-and-initalization",children:"Configuration and Initalization"}),"\n",(0,s.jsxs)(e.p,{children:["There are two ways to inialize your ",(0,s.jsx)(e.code,{children:"AstraDBChatMessageHistory"})]}),"\n",(0,s.jsxs)(e.p,{children:["If you already have an instance of the ",(0,s.jsx)(e.code,{children:"AstraDB"})," client defined you can connect to your collection and initialize an instance of the ",(0,s.jsx)(e.code,{children:"ChatMessageHistory"})," using the constuctor."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:'const client = (client = new AstraDB(\n  process.env.ASTRA_DB_APPLICATION_TOKEN,\n  process.env.ASTRA_DB_ENDPOINT,\n  process.env.ASTRA_DB_NAMESPACE\n));\n\nconst collection = await client.collection("YOUR_COLLECTION_NAME");\n\nconst chatHistory = new AstraDBChatMessageHistory({\n  collection,\n  sessionId: "YOUR_SESSION_ID",\n});\n'})}),"\n",(0,s.jsxs)(e.p,{children:["If you don't already have an instance of an ",(0,s.jsx)(e.code,{children:"AstraDB"})," client you can use the ",(0,s.jsx)(e.code,{children:"initialize"})," method."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:'const chatHistory = await AstraDBChatMessageHistory.initialize({\n  token: process.env.ASTRA_DB_APPLICATION_TOKEN ?? "token",\n  endpoint: process.env.ASTRA_DB_ENDPOINT ?? "endpoint",\n  namespace: process.env.ASTRA_DB_NAMESPACE,\n  collectionName: "YOUR_COLLECTION_NAME",\n  sessionId: "YOUR_SESSION_ID",\n});\n'})}),"\n",(0,s.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(e.admonition,{title:"Tip",type:"tip",children:(0,s.jsx)(e.p,{children:"Your collection must already exist"})}),"\n","\n",(0,s.jsx)(o.A,{language:"typescript",children:c()})]})}function g(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},5678:n=>{n.exports={content:'import { RunnableWithMessageHistory } from "@langchain/core/runnables";\nimport {\n  ChatPromptTemplate,\n  MessagesPlaceholder,\n} from "@langchain/core/prompts";\nimport { StringOutputParser } from "@langchain/core/output_parsers";\nimport { ChatOpenAI } from "@langchain/openai";\nimport { AstraDBChatMessageHistory } from "@langchain/community/stores/message/astradb";\n\nconst model = new ChatOpenAI({\n  model: "gpt-3.5-turbo",\n  temperature: 0,\n});\n\nconst prompt = ChatPromptTemplate.fromMessages([\n  [\n    "system",\n    "You are a helpful assistant. Answer all questions to the best of your ability.",\n  ],\n  new MessagesPlaceholder("chat_history"),\n  ["human", "{input}"],\n]);\n\nconst chain = prompt.pipe(model).pipe(new StringOutputParser());\n\nconst chainWithHistory = new RunnableWithMessageHistory({\n  runnable: chain,\n  inputMessagesKey: "input",\n  historyMessagesKey: "chat_history",\n  getMessageHistory: async (sessionId) => {\n    const chatHistory = await AstraDBChatMessageHistory.initialize({\n      token: process.env.ASTRA_DB_APPLICATION_TOKEN as string,\n      endpoint: process.env.ASTRA_DB_ENDPOINT as string,\n      namespace: process.env.ASTRA_DB_NAMESPACE,\n      collectionName: "YOUR_COLLECTION_NAME",\n      sessionId,\n    });\n    return chatHistory;\n  },\n});\n\nconst res1 = await chainWithHistory.invoke(\n  {\n    input: "Hi! I\'m Jim.",\n  },\n  { configurable: { sessionId: "langchain-test-session" } }\n);\nconsole.log({ res1 });\n/*\n{\n  res1: {\n    text: "Hello Jim! It\'s nice to meet you. My name is AI. How may I assist you today?"\n  }\n}\n*/\n\nconst res2 = await chainWithHistory.invoke(\n  { input: "What did I just say my name was?" },\n  { configurable: { sessionId: "langchain-test-session" } }\n);\nconsole.log({ res2 });\n\n/*\n{\n  res2: {\n    text: "You said your name was Jim."\n  }\n}\n*/\n',imports:[{local:"RunnableWithMessageHistory",imported:"RunnableWithMessageHistory",source:"@langchain/core/runnables"},{local:"ChatPromptTemplate",imported:"ChatPromptTemplate",source:"@langchain/core/prompts"},{local:"MessagesPlaceholder",imported:"MessagesPlaceholder",source:"@langchain/core/prompts"},{local:"StringOutputParser",imported:"StringOutputParser",source:"@langchain/core/output_parsers"},{local:"ChatOpenAI",imported:"ChatOpenAI",source:"@langchain/openai"},{local:"AstraDBChatMessageHistory",imported:"AstraDBChatMessageHistory",source:"@langchain/community/stores/message/astradb"}]}}}]);