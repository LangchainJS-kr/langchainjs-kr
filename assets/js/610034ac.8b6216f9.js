(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7313,7817],{55266:(e,n,a)=>{"use strict";a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var o=a(74848),t=a(28453),r=a(78847),s=a(64428),l=a(39213),i=a.n(l),d=a(2280);const c={sidebar_label:"Cloudflare Workers AI"},m="ChatCloudflareWorkersAI",u={id:"integrations/chat/cloudflare_workersai",title:"ChatCloudflareWorkersAI",description:"Workers AI allows you to run machine learning models, on the Cloudflare network, from your own code.",source:"@site/docs/integrations/chat/cloudflare_workersai.mdx",sourceDirName:"integrations/chat",slug:"/integrations/chat/cloudflare_workersai",permalink:"/docs/integrations/chat/cloudflare_workersai",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/chat/cloudflare_workersai.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Cloudflare Workers AI"},sidebar:"integrations",previous:{title:"Bedrock",permalink:"/docs/integrations/chat/bedrock"},next:{title:"Cohere",permalink:"/docs/integrations/chat/cohere"}},p={},h=[{value:"Usage",id:"usage",level:2},...r.toc,...d.toc];function g(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"chatcloudflareworkersai",children:"ChatCloudflareWorkersAI"}),"\n",(0,o.jsx)(n.p,{children:"Workers AI allows you to run machine learning models, on the Cloudflare network, from your own code."}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.p,{children:"You'll first need to install the LangChain Cloudflare integration package:"}),"\n","\n",(0,o.jsx)(r.default,{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/cloudflare\n"})}),"\n","\n","\n",(0,o.jsx)(d.default,{}),"\n",(0,o.jsx)(s.A,{language:"typescript",children:i()})]})}function f(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},2280:(e,n,a)=>{"use strict";a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=a(74848),t=a(28453);const r={},s=void 0,l={id:"mdx_components/unified_model_params_tooltip",title:"unified_model_params_tooltip",description:"We're unifying model params across all packages. We now suggest using model instead of modelName, and apiKey for API keys.",source:"@site/docs/mdx_components/unified_model_params_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/unified_model_params_tooltip",permalink:"/docs/mdx_components/unified_model_params_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/unified_model_params_tooltip.mdx",tags:[],version:"current",frontMatter:{}},i={},d=[];function c(e){const n={admonition:"admonition",code:"code",p:"p",...(0,t.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["We're unifying model params across all packages. We now suggest using ",(0,o.jsx)(n.code,{children:"model"})," instead of ",(0,o.jsx)(n.code,{children:"modelName"}),", and ",(0,o.jsx)(n.code,{children:"apiKey"})," for API keys."]})})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},39213:e=>{e.exports={content:'import { ChatCloudflareWorkersAI } from "@langchain/cloudflare";\n\nconst model = new ChatCloudflareWorkersAI({\n  model: "@cf/meta/llama-2-7b-chat-int8", // Default value\n  cloudflareAccountId: process.env.CLOUDFLARE_ACCOUNT_ID,\n  cloudflareApiToken: process.env.CLOUDFLARE_API_TOKEN,\n  // Pass a custom base URL to use Cloudflare AI Gateway\n  // baseUrl: `https://gateway.ai.cloudflare.com/v1/{YOUR_ACCOUNT_ID}/{GATEWAY_NAME}/workers-ai/`,\n});\n\nconst response = await model.invoke([\n  ["system", "You are a helpful assistant that translates English to German."],\n  ["human", `Translate "I love programming".`],\n]);\n\nconsole.log(response);\n\n/*\nAIMessage {\n  content: `Sure! Here\'s the translation of "I love programming" into German:\\n` +\n    \'\\n\' +\n    \'"Ich liebe Programmieren."\\n\' +\n    \'\\n\' +\n    \'In this sentence, "Ich" means "I," "liebe" means "love," and "Programmieren" means "programming."\',\n  additional_kwargs: {}\n}\n*/\n\nconst stream = await model.stream([\n  ["system", "You are a helpful assistant that translates English to German."],\n  ["human", `Translate "I love programming".`],\n]);\n\nfor await (const chunk of stream) {\n  console.log(chunk);\n}\n\n/*\n  AIMessageChunk {\n    content: \'S\',\n    additional_kwargs: {}\n  }\n  AIMessageChunk {\n    content: \'ure\',\n    additional_kwargs: {}\n  }\n  AIMessageChunk {\n    content: \'!\',\n    additional_kwargs: {}\n  }\n  AIMessageChunk {\n    content: \' Here\',\n    additional_kwargs: {}\n  }\n  ...\n*/\n',imports:[{local:"ChatCloudflareWorkersAI",imported:"ChatCloudflareWorkersAI",source:"@langchain/cloudflare"}]}}}]);