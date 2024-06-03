(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8038,65],{25944:(e,n,s)=>{"use strict";s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>c,metadata:()=>h,toc:()=>g});var t=s(74848),o=s(28453),a=s(64428),i=s(78847),r=s(64382),l=s.n(r);const c={hide_table_of_contents:!0,sidebar_class_name:"node-only"},p="Postgres Chat Memory",h={id:"integrations/chat_memory/postgres",title:"Postgres Chat Memory",description:"For longer-term persistence across chat sessions, you can swap out the default in-memory chatHistory for a Postgres Database.",source:"@site/docs/integrations/chat_memory/postgres.mdx",sourceDirName:"integrations/chat_memory",slug:"/integrations/chat_memory/postgres",permalink:"/docs/integrations/chat_memory/postgres",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/chat_memory/postgres.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0,sidebar_class_name:"node-only"}},d={},g=[{value:"Setup",id:"setup",level:2},...i.toc,{value:"Usage",id:"usage",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"postgres-chat-memory",children:"Postgres Chat Memory"}),"\n",(0,t.jsxs)(n.p,{children:["For longer-term persistence across chat sessions, you can swap out the default in-memory ",(0,t.jsx)(n.code,{children:"chatHistory"})," for a ",(0,t.jsx)(n.a,{href:"https://www.postgresql.org/",children:"Postgres"})," Database."]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.p,{children:["First install the ",(0,t.jsx)(n.a,{href:"https://node-postgres.com/",children:"node-postgres"})," package:"]}),"\n","\n",(0,t.jsx)(i.default,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai @langchain/community pg\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"Each chat history session is stored in a Postgres database and requires a session id."}),"\n",(0,t.jsxs)(n.p,{children:["The connection to postgres is handled through a pool. You can either pass an instance of a pool via the ",(0,t.jsx)(n.code,{children:"pool"})," parameter or pass a pool config via the ",(0,t.jsx)(n.code,{children:"poolConfig"})," parameter. See ",(0,t.jsx)(n.a,{href:"https://node-postgres.com/apis/pool",children:"pg-node docs on pools"}),"\nfor more information. A provided pool takes precedence, thus if both a pool instance and a pool config are passed, only the pool will be used."]}),"\n","\n",(0,t.jsx)(a.A,{language:"typescript",children:l()})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},78847:(e,n,s)=>{"use strict";s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=s(74848),o=s(28453);const a={},i=void 0,r={id:"mdx_components/integration_install_tooltip",title:"integration_install_tooltip",description:"See this section for general instructions on installing integration packages.",source:"@site/docs/mdx_components/integration_install_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/integration_install_tooltip",permalink:"/docs/mdx_components/integration_install_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/integration_install_tooltip.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[];function p(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/docs/how_to/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},64382:e=>{e.exports={content:'import pg from "pg";\n\nimport { PostgresChatMessageHistory } from "@langchain/community/stores/message/postgres";\nimport { ChatOpenAI } from "@langchain/openai";\nimport { RunnableWithMessageHistory } from "@langchain/core/runnables";\nimport {\n  ChatPromptTemplate,\n  MessagesPlaceholder,\n} from "@langchain/core/prompts";\nimport { StringOutputParser } from "@langchain/core/output_parsers";\n\nconst poolConfig = {\n  host: "127.0.0.1",\n  port: 5432,\n  user: "myuser",\n  password: "ChangeMe",\n  database: "api",\n};\n\nconst pool = new pg.Pool(poolConfig);\n\nconst model = new ChatOpenAI();\n\nconst prompt = ChatPromptTemplate.fromMessages([\n  [\n    "system",\n    "You are a helpful assistant. Answer all questions to the best of your ability.",\n  ],\n  new MessagesPlaceholder("chat_history"),\n  ["human", "{input}"],\n]);\n\nconst chain = prompt.pipe(model).pipe(new StringOutputParser());\n\nconst chainWithHistory = new RunnableWithMessageHistory({\n  runnable: chain,\n  inputMessagesKey: "input",\n  historyMessagesKey: "chat_history",\n  getMessageHistory: async (sessionId) => {\n    const chatHistory = new PostgresChatMessageHistory({\n      sessionId,\n      pool,\n      // Can also pass `poolConfig` to initialize the pool internally,\n      // but easier to call `.end()` at the end later.\n    });\n    return chatHistory;\n  },\n});\n\nconst res1 = await chainWithHistory.invoke(\n  {\n    input: "Hi! I\'m MJDeligan.",\n  },\n  { configurable: { sessionId: "langchain-test-session" } }\n);\nconsole.log(res1);\n/*\n  "Hello MJDeligan! It\'s nice to meet you. My name is AI. How may I assist you today?"\n*/\n\nconst res2 = await chainWithHistory.invoke(\n  { input: "What did I just say my name was?" },\n  { configurable: { sessionId: "langchain-test-session" } }\n);\nconsole.log(res2);\n\n/*\n  "You said your name was MJDeligan."\n*/\n\n// If you provided a pool config you should close the created pool when you are done\nawait pool.end();\n',imports:[{local:"PostgresChatMessageHistory",imported:"PostgresChatMessageHistory",source:"@langchain/community/stores/message/postgres"},{local:"ChatOpenAI",imported:"ChatOpenAI",source:"@langchain/openai"},{local:"RunnableWithMessageHistory",imported:"RunnableWithMessageHistory",source:"@langchain/core/runnables"},{local:"ChatPromptTemplate",imported:"ChatPromptTemplate",source:"@langchain/core/prompts"},{local:"MessagesPlaceholder",imported:"MessagesPlaceholder",source:"@langchain/core/prompts"},{local:"StringOutputParser",imported:"StringOutputParser",source:"@langchain/core/output_parsers"}]}}}]);