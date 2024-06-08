(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9319,7817],{60695:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>m,toc:()=>h});var s=n(74848),i=n(28453),o=n(64428),r=n(78847),a=n(2280),d=n(79548),c=n.n(d);const l={sidebar_label:"Fireworks"},p="ChatFireworks",m={id:"integrations/chat/fireworks",title:"ChatFireworks",description:"You can use models provided by Fireworks AI as follows:",source:"@site/docs/integrations/chat/fireworks.mdx",sourceDirName:"integrations/chat",slug:"/integrations/chat/fireworks",permalink:"/docs/integrations/chat/fireworks",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/chat/fireworks.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Fireworks"},sidebar:"integrations",previous:{title:"Fake LLM",permalink:"/docs/integrations/chat/fake"},next:{title:"Friendli",permalink:"/docs/integrations/chat/friendli"}},u={},h=[...r.toc,...a.toc];function f(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"chatfireworks",children:"ChatFireworks"}),"\n",(0,s.jsx)(t.p,{children:"You can use models provided by Fireworks AI as follows:"}),"\n","\n",(0,s.jsx)(r.default,{}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community\n"})}),"\n","\n",(0,s.jsx)(a.default,{}),"\n","\n",(0,s.jsx)(o.A,{language:"typescript",children:c()}),"\n",(0,s.jsx)(t.p,{children:"Behind the scenes, Fireworks AI uses the OpenAI SDK and OpenAI compatible API, with some caveats:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Certain properties are not supported by the Fireworks API, see ",(0,s.jsx)(t.a,{href:"https://readme.fireworks.ai/docs/openai-compatibility#api-compatibility",children:"here"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Generation using multiple prompts is not supported."}),"\n"]})]})}function k(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},2280:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(74848),i=n(28453);const o={},r=void 0,a={id:"mdx_components/unified_model_params_tooltip",title:"unified_model_params_tooltip",description:"We're unifying model params across all packages. We now suggest using model instead of modelName, and apiKey for API keys.",source:"@site/docs/mdx_components/unified_model_params_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/unified_model_params_tooltip",permalink:"/docs/mdx_components/unified_model_params_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/unified_model_params_tooltip.mdx",tags:[],version:"current",frontMatter:{}},d={},c=[];function l(e){const t={admonition:"admonition",code:"code",p:"p",...(0,i.R)(),...e.components};return(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["We're unifying model params across all packages. We now suggest using ",(0,s.jsx)(t.code,{children:"model"})," instead of ",(0,s.jsx)(t.code,{children:"modelName"}),", and ",(0,s.jsx)(t.code,{children:"apiKey"})," for API keys."]})})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},79548:e=>{e.exports={content:'import { ChatFireworks } from "@langchain/community/chat_models/fireworks";\n\nconst model = new ChatFireworks({\n  temperature: 0.9,\n  // In Node.js defaults to process.env.FIREWORKS_API_KEY\n  apiKey: "YOUR-API-KEY",\n});\n',imports:[{local:"ChatFireworks",imported:"ChatFireworks",source:"@langchain/community/chat_models/fireworks"}]}}}]);