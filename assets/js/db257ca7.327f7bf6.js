(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6040,65],{91342:(n,t,e)=>{"use strict";e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var i=e(74848),s=e(28453),a=e(78847),o=e(64428),l=e(79953),r=e.n(l);const c={},m="AI21",d={id:"integrations/llms/ai21",title:"AI21",description:"You can get started with AI21Labs' Jurassic family of models, as well as see a full list of available foundational models, by signing up for an API key on their website.",source:"@site/docs/integrations/llms/ai21.mdx",sourceDirName:"integrations/llms",slug:"/integrations/llms/ai21",permalink:"/docs/integrations/llms/ai21",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/llms/ai21.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"LLMs",permalink:"/docs/integrations/llms/"},next:{title:"AlephAlpha",permalink:"/docs/integrations/llms/aleph_alpha"}},p={},g=[...a.toc];function u(n){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"ai21",children:"AI21"}),"\n",(0,i.jsxs)(t.p,{children:["You can get started with AI21Labs' Jurassic family of models, as well as see a full list of available foundational models, by signing up for an API key ",(0,i.jsx)(t.a,{href:"https://www.ai21.com/",children:"on their website"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Here's an example of initializing an instance in LangChain.js:"}),"\n","\n",(0,i.jsx)(a.default,{}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community\n"})}),"\n","\n",(0,i.jsx)(o.A,{language:"typescript",children:r()})]})}function h(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},78847:(n,t,e)=>{"use strict";e.r(t),e.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=e(74848),s=e(28453);const a={},o=void 0,l={id:"mdx_components/integration_install_tooltip",title:"integration_install_tooltip",description:"See this section for general instructions on installing integration packages.",source:"@site/docs/mdx_components/integration_install_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/integration_install_tooltip",permalink:"/docs/mdx_components/integration_install_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/integration_install_tooltip.mdx",tags:[],version:"current",frontMatter:{}},r={},c=[];function m(n){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...n.components};return(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"/docs/how_to/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})})}function d(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(m,{...n})}):m(n)}},79953:n=>{n.exports={content:'import { AI21 } from "@langchain/community/llms/ai21";\n\nconst model = new AI21({\n  ai21ApiKey: "YOUR_AI21_API_KEY", // Or set as process.env.AI21_API_KEY\n});\n\nconst res = await model.invoke(`Translate "I love programming" into German.`);\n\nconsole.log({ res });\n\n/*\n  {\n    res: "\\nIch liebe das Programmieren."\n  }\n */\n',imports:[{local:"AI21",imported:"AI21",source:"@langchain/community/llms/ai21"}]}}}]);