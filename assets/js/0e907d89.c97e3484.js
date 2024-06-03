(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6325,7817,65],{28230:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>m,default:()=>x,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var i=t(74848),o=t(28453),s=t(78847),r=t(2280),d=t(64428),a=t(33562),c=t.n(a);const l={hide_table_of_contents:!0},m="Bedrock",p={id:"integrations/text_embedding/bedrock",title:"Bedrock",description:"Amazon Bedrock is a fully managed service that makes base models from Amazon and third-party model providers accessible through an API.",source:"@site/docs/integrations/text_embedding/bedrock.mdx",sourceDirName:"integrations/text_embedding",slug:"/integrations/text_embedding/bedrock",permalink:"/docs/integrations/text_embedding/bedrock",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/text_embedding/bedrock.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"integrations",previous:{title:"Baidu Qianfan",permalink:"/docs/integrations/text_embedding/baidu_qianfan"},next:{title:"Cloudflare Workers AI",permalink:"/docs/integrations/text_embedding/cloudflare_ai"}},u={},g=[{value:"Setup",id:"setup",level:2},...s.toc,...r.toc,{value:"Usage",id:"usage",level:2},{value:"Configuring the Bedrock Runtime Client",id:"configuring-the-bedrock-runtime-client",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"bedrock",children:"Bedrock"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html",children:"Amazon Bedrock"})," is a fully managed service that makes base models from Amazon and third-party model providers accessible through an API."]}),"\n",(0,i.jsx)(n.p,{children:"When this documentation was written, Bedrock supports one model for text embeddings, the Titan Embeddings G1 - Text model (amazon.titan-embed-text-v1). This model supports text retrieval, semantic similarity, and clustering. The maximum input text is 8K tokens and the maximum output vector length is 1536."}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(n.p,{children:"To use this embedding, please ensure you have the Bedrock runtime client installed in your project."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm i @aws-sdk/client-bedrock-runtime@^3.422.0\n"})}),"\n","\n",(0,i.jsx)(s.default,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community\n"})}),"\n","\n",(0,i.jsx)(r.default,{}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"BedrockEmbeddings"})," class uses the AWS Bedrock API to generate embeddings for a given text. It strips new line characters from the text as recommended."]}),"\n","\n",(0,i.jsx)(d.A,{language:"typescript",children:c()}),"\n",(0,i.jsx)(n.h2,{id:"configuring-the-bedrock-runtime-client",children:"Configuring the Bedrock Runtime Client"}),"\n",(0,i.jsxs)(n.p,{children:["You can pass in your own instance of the ",(0,i.jsx)(n.code,{children:"BedrockRuntimeClient"})," if you want to customize options like\n",(0,i.jsx)(n.code,{children:"credentials"}),", ",(0,i.jsx)(n.code,{children:"region"}),", ",(0,i.jsx)(n.code,{children:"retryPolicy"}),", etc."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'import { BedrockRuntimeClient } from "@aws-sdk/client-bedrock-runtime";\nimport { BedrockEmbeddings } from "langchain/embeddings/bedrock";\n\nconst client = new BedrockRuntimeClient({\n  region: "us-east-1",\n  credentials: getCredentials(),\n});\n\nconst embeddings = new BedrockEmbeddings({\n  client,\n});\n'})})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},78847:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=t(74848),o=t(28453);const s={},r=void 0,d={id:"mdx_components/integration_install_tooltip",title:"integration_install_tooltip",description:"See this section for general instructions on installing integration packages.",source:"@site/docs/mdx_components/integration_install_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/integration_install_tooltip",permalink:"/docs/mdx_components/integration_install_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/integration_install_tooltip.mdx",tags:[],version:"current",frontMatter:{}},a={},c=[];function l(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/how_to/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},2280:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=t(74848),o=t(28453);const s={},r=void 0,d={id:"mdx_components/unified_model_params_tooltip",title:"unified_model_params_tooltip",description:"We're unifying model params across all packages. We now suggest using model instead of modelName, and apiKey for API keys.",source:"@site/docs/mdx_components/unified_model_params_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/unified_model_params_tooltip",permalink:"/docs/mdx_components/unified_model_params_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/unified_model_params_tooltip.mdx",tags:[],version:"current",frontMatter:{}},a={},c=[];function l(e){const n={admonition:"admonition",code:"code",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["We're unifying model params across all packages. We now suggest using ",(0,i.jsx)(n.code,{children:"model"})," instead of ",(0,i.jsx)(n.code,{children:"modelName"}),", and ",(0,i.jsx)(n.code,{children:"apiKey"})," for API keys."]})})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},33562:e=>{e.exports={content:'/* eslint-disable @typescript-eslint/no-non-null-assertion */\nimport { BedrockEmbeddings } from "@langchain/community/embeddings/bedrock";\n\nconst embeddings = new BedrockEmbeddings({\n  region: process.env.BEDROCK_AWS_REGION!,\n  credentials: {\n    accessKeyId: process.env.BEDROCK_AWS_ACCESS_KEY_ID!,\n    secretAccessKey: process.env.BEDROCK_AWS_SECRET_ACCESS_KEY!,\n  },\n  model: "amazon.titan-embed-text-v1", // Default value\n});\n\nconst res = await embeddings.embedQuery(\n  "What would be a good company name a company that makes colorful socks?"\n);\nconsole.log({ res });\n',imports:[{local:"BedrockEmbeddings",imported:"BedrockEmbeddings",source:"@langchain/community/embeddings/bedrock"}]}}}]);