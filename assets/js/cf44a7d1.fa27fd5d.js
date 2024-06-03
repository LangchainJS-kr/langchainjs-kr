(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6605,65],{32382:(n,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var i=t(74848),s=t(28453),a=t(64428),o=t(78847),r=t(3404),d=t.n(r);const c={sidebar_label:"Baidu Wenxin"},l="ChatBaiduWenxin",u={id:"integrations/chat/baidu_wenxin",title:"ChatBaiduWenxin",description:"LangChain.js supports Baidu's ERNIE-bot family of models. Here's an example:",source:"@site/docs/integrations/chat/baidu_wenxin.mdx",sourceDirName:"integrations/chat",slug:"/integrations/chat/baidu_wenxin",permalink:"/docs/integrations/chat/baidu_wenxin",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/chat/baidu_wenxin.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Baidu Wenxin"},sidebar:"integrations",previous:{title:"Azure OpenAI",permalink:"/docs/integrations/chat/azure"},next:{title:"Bedrock",permalink:"/docs/integrations/chat/bedrock"}},m={},p=[...o.toc];function h(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"chatbaiduwenxin",children:"ChatBaiduWenxin"}),"\n",(0,i.jsx)(e.p,{children:"LangChain.js supports Baidu's ERNIE-bot family of models. Here's an example:"}),"\n","\n",(0,i.jsx)(o.default,{}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Available models: ",(0,i.jsx)(e.code,{children:"ERNIE-Bot"}),",",(0,i.jsx)(e.code,{children:"ERNIE-Bot-turbo"}),",",(0,i.jsx)(e.code,{children:"ERNIE-Bot-4"}),",",(0,i.jsx)(e.code,{children:"ERNIE-Speed-8K"}),",",(0,i.jsx)(e.code,{children:"ERNIE-Speed-128K"}),",",(0,i.jsx)(e.code,{children:"ERNIE-4.0-8K"}),",\n",(0,i.jsx)(e.code,{children:"ERNIE-4.0-8K-Preview"}),",",(0,i.jsx)(e.code,{children:"ERNIE-3.5-8K"}),",",(0,i.jsx)(e.code,{children:"ERNIE-3.5-8K-Preview"}),",",(0,i.jsx)(e.code,{children:"ERNIE-Lite-8K"}),",",(0,i.jsx)(e.code,{children:"ERNIE-Tiny-8K"}),",",(0,i.jsx)(e.code,{children:"ERNIE-Character-8K"}),",\n",(0,i.jsx)(e.code,{children:"ERNIE Speed-AppBuilder"})]}),"\n","\n",(0,i.jsx)(a.A,{language:"typescript",children:d()})]})}function x(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},78847:(n,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(74848),s=t(28453);const a={},o=void 0,r={id:"mdx_components/integration_install_tooltip",title:"integration_install_tooltip",description:"See this section for general instructions on installing integration packages.",source:"@site/docs/mdx_components/integration_install_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/integration_install_tooltip",permalink:"/docs/mdx_components/integration_install_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/integration_install_tooltip.mdx",tags:[],version:"current",frontMatter:{}},d={},c=[];function l(n){const e={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...n.components};return(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["See ",(0,i.jsx)(e.a,{href:"/docs/how_to/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},3404:n=>{n.exports={content:'import { ChatBaiduWenxin } from "@langchain/community/chat_models/baiduwenxin";\nimport { HumanMessage } from "@langchain/core/messages";\n\n// Default model is ERNIE-Bot-turbo\nconst ernieTurbo = new ChatBaiduWenxin({\n  baiduApiKey: "YOUR-API-KEY", // In Node.js defaults to process.env.BAIDU_API_KEY\n  baiduSecretKey: "YOUR-SECRET-KEY", // In Node.js defaults to process.env.BAIDU_SECRET_KEY\n});\n\n// Use ERNIE-Bot\nconst ernie = new ChatBaiduWenxin({\n  model: "ERNIE-Bot", // Available models are shown above\n  temperature: 1,\n  baiduApiKey: "YOUR-API-KEY", // In Node.js defaults to process.env.BAIDU_API_KEY\n  baiduSecretKey: "YOUR-SECRET-KEY", // In Node.js defaults to process.env.BAIDU_SECRET_KEY\n});\n\nconst messages = [new HumanMessage("Hello")];\n\nlet res = await ernieTurbo.invoke(messages);\n/*\nAIChatMessage {\n  text: \'Hello! How may I assist you today?\',\n  name: undefined,\n  additional_kwargs: {}\n  }\n}\n*/\n\nres = await ernie.invoke(messages);\n/*\nAIChatMessage {\n  text: \'Hello! How may I assist you today?\',\n  name: undefined,\n  additional_kwargs: {}\n  }\n}\n*/\n',imports:[{local:"ChatBaiduWenxin",imported:"ChatBaiduWenxin",source:"@langchain/community/chat_models/baiduwenxin"},{local:"HumanMessage",imported:"HumanMessage",source:"@langchain/core/messages"}]}}}]);