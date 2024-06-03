(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6040],{91342:(n,e,s)=>{"use strict";s.r(e),s.d(e,{assets:()=>p,contentTitle:()=>m,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var a=s(74848),i=s(28453),t=s(78847),l=s(64428),r=s(79953),o=s.n(r);const c={},m="AI21",d={id:"integrations/llms/ai21",title:"AI21",description:"You can get started with AI21Labs' Jurassic family of models, as well as see a full list of available foundational models, by signing up for an API key on their website.",source:"@site/docs/integrations/llms/ai21.mdx",sourceDirName:"integrations/llms",slug:"/integrations/llms/ai21",permalink:"/docs/integrations/llms/ai21",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/llms/ai21.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"LLMs",permalink:"/docs/integrations/llms/"},next:{title:"AlephAlpha",permalink:"/docs/integrations/llms/aleph_alpha"}},p={},g=[...t.toc];function h(n){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"ai21",children:"AI21"}),"\n",(0,a.jsxs)(e.p,{children:["You can get started with AI21Labs' Jurassic family of models, as well as see a full list of available foundational models, by signing up for an API key ",(0,a.jsx)(e.a,{href:"https://www.ai21.com/",children:"on their website"}),"."]}),"\n",(0,a.jsx)(e.p,{children:"Here's an example of initializing an instance in LangChain.js:"}),"\n","\n",(0,a.jsx)(t.default,{}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community\n"})}),"\n","\n",(0,a.jsx)(l.A,{language:"typescript",children:o()})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(h,{...n})}):h(n)}},79953:n=>{n.exports={content:'import { AI21 } from "@langchain/community/llms/ai21";\n\nconst model = new AI21({\n  ai21ApiKey: "YOUR_AI21_API_KEY", // Or set as process.env.AI21_API_KEY\n});\n\nconst res = await model.invoke(`Translate "I love programming" into German.`);\n\nconsole.log({ res });\n\n/*\n  {\n    res: "\\nIch liebe das Programmieren."\n  }\n */\n',imports:[{local:"AI21",imported:"AI21",source:"@langchain/community/llms/ai21"}]}}}]);