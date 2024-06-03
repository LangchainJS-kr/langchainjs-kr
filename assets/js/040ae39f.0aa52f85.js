(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8027,65],{48092:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>p,toc:()=>h});var i=t(74848),s=t(28453),o=t(78847),a=t(64428),r=t(54320),d=t.n(r);const c={sidebar_class_name:"node-only"},l="ZhipuAI",p={id:"integrations/text_embedding/zhipuai",title:"ZhipuAI",description:"The ZhipuAIEmbeddings class uses the ZhipuAI API to generate embeddings for a given text.",source:"@site/docs/integrations/text_embedding/zhipuai.mdx",sourceDirName:"integrations/text_embedding",slug:"/integrations/text_embedding/zhipuai",permalink:"/docs/integrations/text_embedding/zhipuai",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/text_embedding/zhipuai.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"node-only"},sidebar:"integrations",previous:{title:"Voyage AI",permalink:"/docs/integrations/text_embedding/voyageai"},next:{title:"Document loaders",permalink:"/docs/integrations/document_loaders"}},m={},h=[{value:"Setup",id:"setup",level:2},...o.toc,{value:"Usage",id:"usage",level:2}];function g(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"zhipuai",children:"ZhipuAI"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ZhipuAIEmbeddings"})," class uses the ZhipuAI API to generate embeddings for a given text."]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.p,{children:["You'll need to sign up for an ZhipuAI API key and set it as an environment variable named ",(0,i.jsx)(n.code,{children:"ZHIPUAI_API_KEY"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://open.bigmodel.cn",children:"https://open.bigmodel.cn"})}),"\n",(0,i.jsxs)(n.p,{children:["Then, you'll need to install the ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/@langchain/community",children:(0,i.jsx)(n.code,{children:"@langchain/community"})})," package:"]}),"\n","\n",(0,i.jsx)(o.default,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community jsonwebtoken\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,i.jsx)(a.A,{language:"typescript",children:d()})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},78847:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(74848),s=t(28453);const o={},a=void 0,r={id:"mdx_components/integration_install_tooltip",title:"integration_install_tooltip",description:"See this section for general instructions on installing integration packages.",source:"@site/docs/mdx_components/integration_install_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/integration_install_tooltip",permalink:"/docs/mdx_components/integration_install_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/integration_install_tooltip.mdx",tags:[],version:"current",frontMatter:{}},d={},c=[];function l(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/how_to/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},54320:e=>{e.exports={content:'import { ZhipuAIEmbeddings } from "@langchain/community/embeddings/zhipuai";\n\nconst model = new ZhipuAIEmbeddings({});\nconst res = await model.embedQuery(\n  "What would be a good company name a company that makes colorful socks?"\n);\nconsole.log({ res });\n',imports:[{local:"ZhipuAIEmbeddings",imported:"ZhipuAIEmbeddings",source:"@langchain/community/embeddings/zhipuai"}]}}}]);