(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3588],{34463:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>h,metadata:()=>p,toc:()=>g});var r=n(74848),a=n(28453),s=n(64428),i=n(52782),o=n.n(i),m=n(36857),l=n.n(m);const h={},c="Together AI",p={id:"integrations/llms/togetherai",title:"Together AI",description:"Here's an example of calling a Together AI model as an LLM:",source:"@site/docs/integrations/llms/togetherai.mdx",sourceDirName:"integrations/llms",slug:"/integrations/llms/togetherai",permalink:"/docs/integrations/llms/togetherai",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/llms/togetherai.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Replicate",permalink:"/docs/integrations/llms/replicate"},next:{title:"WatsonX AI",permalink:"/docs/integrations/llms/watsonx_ai"}},d={},g=[{value:"Streaming",id:"streaming",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"together-ai",children:"Together AI"}),"\n",(0,r.jsx)(t.p,{children:"Here's an example of calling a Together AI model as an LLM:"}),"\n","\n",(0,r.jsx)(s.A,{language:"typescript",children:o()}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["You can see a LangSmith trace of this example ",(0,r.jsx)(t.a,{href:"https://smith.langchain.com/public/f49160bd-a6cd-4234-96de-b8106a9e08a7/r",children:"here"})]})}),"\n",(0,r.jsxs)(t.p,{children:["You can run other models through Together by changing the ",(0,r.jsx)(t.code,{children:"modelName"})," parameter."]}),"\n",(0,r.jsxs)(t.p,{children:["You can find a full list of models on ",(0,r.jsx)(t.a,{href:"https://api.together.xyz/playground",children:"Together's website"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"streaming",children:"Streaming"}),"\n",(0,r.jsx)(t.p,{children:"Together AI also supports streaming, this example demonstrates how to use this feature."}),"\n",(0,r.jsx)(s.A,{language:"typescript",children:l()}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["You can see a LangSmith trace of this example ",(0,r.jsx)(t.a,{href:"https://smith.langchain.com/public/26b5716e-6f00-47c1-aa71-1838a1eddbd1/r",children:"here"})]})})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},52782:e=>{e.exports={content:'import { TogetherAI } from "@langchain/community/llms/togetherai";\nimport { PromptTemplate } from "@langchain/core/prompts";\n\nconst model = new TogetherAI({\n  model: "mistralai/Mixtral-8x7B-Instruct-v0.1",\n});\nconst prompt = PromptTemplate.fromTemplate(`System: You are a helpful assistant.\nUser: {input}.\nAssistant:`);\nconst chain = prompt.pipe(model);\nconst response = await chain.invoke({\n  input: `Tell me a joke about bears`,\n});\nconsole.log("response", response);\n/**\nresponse Sure, here\'s a bear joke for you: Why do bears hate shoes so much? Because they like to run around in their bear feet!\n */\n',imports:[{local:"TogetherAI",imported:"TogetherAI",source:"@langchain/community/llms/togetherai"},{local:"PromptTemplate",imported:"PromptTemplate",source:"@langchain/core/prompts"}]}},36857:e=>{e.exports={content:'import { TogetherAI } from "@langchain/community/llms/togetherai";\nimport { ChatPromptTemplate } from "@langchain/core/prompts";\n\nconst model = new TogetherAI({\n  model: "mistralai/Mixtral-8x7B-Instruct-v0.1",\n  streaming: true,\n});\nconst prompt = ChatPromptTemplate.fromMessages([\n  ["ai", "You are a helpful assistant."],\n  [\n    "human",\n    `Tell me a joke about bears.\nAssistant:`,\n  ],\n]);\nconst chain = prompt.pipe(model);\nconst result = await chain.stream({});\nlet fullText = "";\nfor await (const item of result) {\n  console.log("stream item:", item);\n  fullText += item;\n}\nconsole.log(fullText);\n/**\nstream item:  Sure\nstream item: ,\nstream item:  here\nstream item: \'\nstream item: s\nstream item:  a\nstream item:  light\nstream item: -\nstream item: heart\nstream item: ed\nstream item:  bear\nstream item:  joke\nstream item:  for\nstream item:  you\nstream item: :\nstream item:\n\nstream item:\n\nstream item: Why\nstream item:  do\nstream item:  bears\nstream item:  hate\nstream item:  shoes\nstream item:  so\nstream item:  much\nstream item: ?\nstream item:\n\nstream item:\n\nstream item: Because\nstream item:  they\nstream item:  like\nstream item:  to\nstream item:  run\nstream item:  around\nstream item:  in\nstream item:  their\nstream item:  bear\nstream item:  feet\nstream item: !\nstream item: </s>\n Sure, here\'s a light-hearted bear joke for you:\n\nWhy do bears hate shoes so much?\n\nBecause they like to run around in their bear feet!</s>\n */\n',imports:[{local:"TogetherAI",imported:"TogetherAI",source:"@langchain/community/llms/togetherai"},{local:"ChatPromptTemplate",imported:"ChatPromptTemplate",source:"@langchain/core/prompts"}]}}}]);