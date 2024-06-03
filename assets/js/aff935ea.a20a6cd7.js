(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4103,65],{44302:(t,n,e)=>{"use strict";e.r(n),e.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>g});var i=e(74848),s=e(28453),r=e(78847),o=e(64428),a=e(58289),l=e.n(a);const c={},d="Writer",p={id:"integrations/llms/writer",title:"Writer",description:"LangChain.js supports calling Writer LLMs.",source:"@site/docs/integrations/llms/writer.mdx",sourceDirName:"integrations/llms",slug:"/integrations/llms/writer",permalink:"/docs/integrations/llms/writer",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/llms/writer.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"WatsonX AI",permalink:"/docs/integrations/llms/watsonx_ai"},next:{title:"YandexGPT",permalink:"/docs/integrations/llms/yandex"}},m={},g=[{value:"Setup",id:"setup",level:2},...r.toc,{value:"Usage",id:"usage",level:2}];function u(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"writer",children:"Writer"}),"\n",(0,i.jsxs)(n.p,{children:["LangChain.js supports calling ",(0,i.jsx)(n.a,{href:"https://writer.com/",children:"Writer"})," LLMs."]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.p,{children:["First, you'll need to sign up for an account at ",(0,i.jsx)(n.a,{href:"https://writer.com/",children:"https://writer.com/"}),". Create a service account and note your API key."]}),"\n",(0,i.jsx)(n.p,{children:"Next, you'll need to install the official package as a peer dependency:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"yarn add @writerai/writer-sdk\n"})}),"\n","\n",(0,i.jsx)(r.default,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,i.jsx)(o.A,{language:"typescript",children:l()})]})}function h(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},78847:(t,n,e)=>{"use strict";e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=e(74848),s=e(28453);const r={},o=void 0,a={id:"mdx_components/integration_install_tooltip",title:"integration_install_tooltip",description:"See this section for general instructions on installing integration packages.",source:"@site/docs/mdx_components/integration_install_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/integration_install_tooltip",permalink:"/docs/mdx_components/integration_install_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/integration_install_tooltip.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(t){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...t.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/how_to/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})})}function p(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},58289:t=>{t.exports={content:'import { Writer } from "@langchain/community/llms/writer";\n\nconst model = new Writer({\n  maxTokens: 20,\n  apiKey: "YOUR-API-KEY", // In Node.js defaults to process.env.WRITER_API_KEY\n  orgId: "YOUR-ORGANIZATION-ID", // In Node.js defaults to process.env.WRITER_ORG_ID\n});\nconst res = await model.invoke(\n  "What would be a good company name a company that makes colorful socks?"\n);\nconsole.log({ res });\n',imports:[{local:"Writer",imported:"Writer",source:"@langchain/community/llms/writer"}]}}}]);