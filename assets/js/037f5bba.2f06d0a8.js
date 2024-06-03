(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6813,65],{92865:(n,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>m,metadata:()=>d,toc:()=>y});var a=t(74848),o=t(28453),s=t(64428),i=t(78847),r=t(7737),c=t.n(r);const m={hide_table_of_contents:!0},l="DynamoDB-Backed Chat Memory",d={id:"integrations/chat_memory/dynamodb",title:"DynamoDB-Backed Chat Memory",description:"For longer-term persistence across chat sessions, you can swap out the default in-memory chatHistory that backs chat memory classes like BufferMemory for a DynamoDB instance.",source:"@site/docs/integrations/chat_memory/dynamodb.mdx",sourceDirName:"integrations/chat_memory",slug:"/integrations/chat_memory/dynamodb",permalink:"/docs/integrations/chat_memory/dynamodb",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/chat_memory/dynamodb.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},h={},y=[{value:"Setup",id:"setup",level:2},...i.toc,{value:"Usage",id:"usage",level:2}];function p(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"dynamodb-backed-chat-memory",children:"DynamoDB-Backed Chat Memory"}),"\n",(0,a.jsxs)(e.p,{children:["For longer-term persistence across chat sessions, you can swap out the default in-memory ",(0,a.jsx)(e.code,{children:"chatHistory"})," that backs chat memory classes like ",(0,a.jsx)(e.code,{children:"BufferMemory"})," for a DynamoDB instance."]}),"\n",(0,a.jsx)(e.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(e.p,{children:"First, install the AWS DynamoDB client in your project:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @aws-sdk/client-dynamodb\n"})}),"\n","\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai @langchain/community\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Next, sign into your AWS account and create a DynamoDB table. Name the table ",(0,a.jsx)(e.code,{children:"langchain"}),", and name your partition key ",(0,a.jsx)(e.code,{children:"id"}),". Make sure your partition key is a string. You can leave sort key and the other settings alone."]}),"\n",(0,a.jsx)(e.p,{children:"You'll also need to retrieve an AWS access key and secret key for a role or user that has access to the table and add them to your environment variables."}),"\n",(0,a.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,a.jsx)(s.A,{language:"typescript",children:c()})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},78847:(n,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>m});var a=t(74848),o=t(28453);const s={},i=void 0,r={id:"mdx_components/integration_install_tooltip",title:"integration_install_tooltip",description:"See this section for general instructions on installing integration packages.",source:"@site/docs/mdx_components/integration_install_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/integration_install_tooltip",permalink:"/docs/mdx_components/integration_install_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/integration_install_tooltip.mdx",tags:[],version:"current",frontMatter:{}},c={},m=[];function l(n){const e={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...n.components};return(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsxs)(e.p,{children:["See ",(0,a.jsx)(e.a,{href:"/docs/how_to/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},7737:n=>{n.exports={content:'import { BufferMemory } from "langchain/memory/index";\nimport { DynamoDBChatMessageHistory } from "@langchain/community/stores/message/dynamodb";\nimport { ChatOpenAI } from "@langchain/openai";\nimport { ConversationChain } from "langchain/chains";\n\nconst memory = new BufferMemory({\n  chatHistory: new DynamoDBChatMessageHistory({\n    tableName: "langchain",\n    partitionKey: "id",\n    sessionId: new Date().toISOString(), // Or some other unique identifier for the conversation\n    config: {\n      region: "us-east-2",\n      credentials: {\n        accessKeyId: "<your AWS access key id>",\n        secretAccessKey: "<your AWS secret access key>",\n      },\n    },\n  }),\n});\n\nconst model = new ChatOpenAI();\nconst chain = new ConversationChain({ llm: model, memory });\n\nconst res1 = await chain.invoke({ input: "Hi! I\'m Jim." });\nconsole.log({ res1 });\n/*\n{\n  res1: {\n    text: "Hello Jim! It\'s nice to meet you. My name is AI. How may I assist you today?"\n  }\n}\n*/\n\nconst res2 = await chain.invoke({ input: "What did I just say my name was?" });\nconsole.log({ res2 });\n\n/*\n{\n  res1: {\n    text: "You said your name was Jim."\n  }\n}\n*/\n',imports:[{local:"BufferMemory",imported:"BufferMemory",source:"langchain/memory/index"},{local:"DynamoDBChatMessageHistory",imported:"DynamoDBChatMessageHistory",source:"@langchain/community/stores/message/dynamodb"},{local:"ChatOpenAI",imported:"ChatOpenAI",source:"@langchain/openai"},{local:"ConversationChain",imported:"ConversationChain",source:"langchain/chains"}]}}}]);