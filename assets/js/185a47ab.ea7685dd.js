(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[748],{64576:(e,s,n)=>{"use strict";n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>m,metadata:()=>c,toc:()=>g});var t=n(74848),o=n(28453),a=n(64428),r=n(76181),i=n.n(r);const m={},l="In Memory Store",c={id:"integrations/stores/in_memory",title:"In Memory Store",description:"This example demonstrates how to setup chat history storage using the InMemoryStore KV store integration.",source:"@site/docs/integrations/stores/in_memory.mdx",sourceDirName:"integrations/stores",slug:"/integrations/stores/in_memory",permalink:"/docs/integrations/stores/in_memory",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/stores/in_memory.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"File System Store",permalink:"/docs/integrations/stores/file_system"},next:{title:"Stores",permalink:"/docs/integrations/stores/"}},d={},g=[{value:"Usage",id:"usage",level:2}];function h(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"in-memory-store",children:"In Memory Store"}),"\n",(0,t.jsxs)(s.p,{children:["This example demonstrates how to setup chat history storage using the ",(0,t.jsx)(s.code,{children:"InMemoryStore"})," KV store integration."]}),"\n",(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"InMemoryStore"})," allows for a generic type to be assigned to the values in the store.\nWe'll assign type ",(0,t.jsx)(s.code,{children:"BaseMessage"})," as the type of our values, keeping with the theme of a chat history store."]}),"\n","\n",(0,t.jsx)(a.A,{language:"typescript",children:i()})]})}function y(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},76181:e=>{e.exports={content:"import { InMemoryStore } from \"@langchain/core/stores\";\nimport { AIMessage, BaseMessage, HumanMessage } from \"@langchain/core/messages\";\n\n// Instantiate the store using the `fromPath` method.\nconst store = new InMemoryStore<BaseMessage>();\n/**\n * Here you would define your LLM and chat chain, call\n * the LLM and eventually get a list of messages.\n * For this example, we'll assume we already have a list.\n */\nconst messages = Array.from({ length: 5 }).map((_, index) => {\n  if (index % 2 === 0) {\n    return new AIMessage(\"ai stuff...\");\n  }\n  return new HumanMessage(\"human stuff...\");\n});\n// Set your messages in the store\n// The key will be prefixed with `message:id:` and end\n// with the index.\nawait store.mset(\n  messages.map((message, index) => [`message:id:${index}`, message])\n);\n// Now you can get your messages from the store\nconst retrievedMessages = await store.mget([\"message:id:0\", \"message:id:1\"]);\nconsole.log(retrievedMessages.map((v) => v));\n/**\n[\n  AIMessage {\n    lc_kwargs: { content: 'ai stuff...', additional_kwargs: {} },\n    content: 'ai stuff...',\n    ...\n  },\n  HumanMessage {\n    lc_kwargs: { content: 'human stuff...', additional_kwargs: {} },\n    content: 'human stuff...',\n    ...\n  }\n]\n */\n// Or, if you want to get back all the keys you can call\n// the `yieldKeys` method.\n// Optionally, you can pass a key prefix to only get back\n// keys which match that prefix.\nconst yieldedKeys = [];\nfor await (const key of store.yieldKeys(\"message:id:\")) {\n  yieldedKeys.push(key);\n}\n// The keys are not encoded, so no decoding is necessary\nconsole.log(yieldedKeys);\n/**\n[\n  'message:id:0',\n  'message:id:1',\n  'message:id:2',\n  'message:id:3',\n  'message:id:4'\n]\n */\n// Finally, let's delete the keys from the store\nawait store.mdelete(yieldedKeys);\n",imports:[{local:"InMemoryStore",imported:"InMemoryStore",source:"@langchain/core/stores"},{local:"AIMessage",imported:"AIMessage",source:"@langchain/core/messages"},{local:"BaseMessage",imported:"BaseMessage",source:"@langchain/core/messages"},{local:"HumanMessage",imported:"HumanMessage",source:"@langchain/core/messages"}]}}}]);