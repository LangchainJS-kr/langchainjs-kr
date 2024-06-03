(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7313,7817,65],{55266:(n,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>m,default:()=>f,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var o=t(74848),a=t(28453),s=t(78847),r=t(64428),i=t(39213),l=t.n(i),c=t(2280);const d={sidebar_label:"Cloudflare Workers AI"},m="ChatCloudflareWorkersAI",u={id:"integrations/chat/cloudflare_workersai",title:"ChatCloudflareWorkersAI",description:"Workers AI allows you to run machine learning models, on the Cloudflare network, from your own code.",source:"@site/docs/integrations/chat/cloudflare_workersai.mdx",sourceDirName:"integrations/chat",slug:"/integrations/chat/cloudflare_workersai",permalink:"/docs/integrations/chat/cloudflare_workersai",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/chat/cloudflare_workersai.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Cloudflare Workers AI"},sidebar:"integrations",previous:{title:"Bedrock",permalink:"/docs/integrations/chat/bedrock"},next:{title:"Cohere",permalink:"/docs/integrations/chat/cohere"}},p={},g=[{value:"Usage",id:"usage",level:2},...s.toc,...c.toc];function h(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"chatcloudflareworkersai",children:"ChatCloudflareWorkersAI"}),"\n",(0,o.jsx)(e.p,{children:"Workers AI allows you to run machine learning models, on the Cloudflare network, from your own code."}),"\n",(0,o.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(e.p,{children:"You'll first need to install the LangChain Cloudflare integration package:"}),"\n","\n",(0,o.jsx)(s.default,{}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/cloudflare\n"})}),"\n","\n","\n",(0,o.jsx)(c.default,{}),"\n",(0,o.jsx)(r.A,{language:"typescript",children:l()})]})}function f(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(h,{...n})}):h(n)}},78847:(n,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=t(74848),a=t(28453);const s={},r=void 0,i={id:"mdx_components/integration_install_tooltip",title:"integration_install_tooltip",description:"See this section for general instructions on installing integration packages.",source:"@site/docs/mdx_components/integration_install_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/integration_install_tooltip",permalink:"/docs/mdx_components/integration_install_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/integration_install_tooltip.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(n){const e={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...n.components};return(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsxs)(e.p,{children:["See ",(0,o.jsx)(e.a,{href:"/docs/how_to/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})})}function m(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},2280:(n,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=t(74848),a=t(28453);const s={},r=void 0,i={id:"mdx_components/unified_model_params_tooltip",title:"unified_model_params_tooltip",description:"We're unifying model params across all packages. We now suggest using model instead of modelName, and apiKey for API keys.",source:"@site/docs/mdx_components/unified_model_params_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/unified_model_params_tooltip",permalink:"/docs/mdx_components/unified_model_params_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/unified_model_params_tooltip.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(n){const e={admonition:"admonition",code:"code",p:"p",...(0,a.R)(),...n.components};return(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsxs)(e.p,{children:["We're unifying model params across all packages. We now suggest using ",(0,o.jsx)(e.code,{children:"model"})," instead of ",(0,o.jsx)(e.code,{children:"modelName"}),", and ",(0,o.jsx)(e.code,{children:"apiKey"})," for API keys."]})})}function m(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},39213:n=>{n.exports={content:'import { ChatCloudflareWorkersAI } from "@langchain/cloudflare";\n\nconst model = new ChatCloudflareWorkersAI({\n  model: "@cf/meta/llama-2-7b-chat-int8", // Default value\n  cloudflareAccountId: process.env.CLOUDFLARE_ACCOUNT_ID,\n  cloudflareApiToken: process.env.CLOUDFLARE_API_TOKEN,\n  // Pass a custom base URL to use Cloudflare AI Gateway\n  // baseUrl: `https://gateway.ai.cloudflare.com/v1/{YOUR_ACCOUNT_ID}/{GATEWAY_NAME}/workers-ai/`,\n});\n\nconst response = await model.invoke([\n  ["system", "You are a helpful assistant that translates English to German."],\n  ["human", `Translate "I love programming".`],\n]);\n\nconsole.log(response);\n\n/*\nAIMessage {\n  content: `Sure! Here\'s the translation of "I love programming" into German:\\n` +\n    \'\\n\' +\n    \'"Ich liebe Programmieren."\\n\' +\n    \'\\n\' +\n    \'In this sentence, "Ich" means "I," "liebe" means "love," and "Programmieren" means "programming."\',\n  additional_kwargs: {}\n}\n*/\n\nconst stream = await model.stream([\n  ["system", "You are a helpful assistant that translates English to German."],\n  ["human", `Translate "I love programming".`],\n]);\n\nfor await (const chunk of stream) {\n  console.log(chunk);\n}\n\n/*\n  AIMessageChunk {\n    content: \'S\',\n    additional_kwargs: {}\n  }\n  AIMessageChunk {\n    content: \'ure\',\n    additional_kwargs: {}\n  }\n  AIMessageChunk {\n    content: \'!\',\n    additional_kwargs: {}\n  }\n  AIMessageChunk {\n    content: \' Here\',\n    additional_kwargs: {}\n  }\n  ...\n*/\n',imports:[{local:"ChatCloudflareWorkersAI",imported:"ChatCloudflareWorkersAI",source:"@langchain/cloudflare"}]}}}]);