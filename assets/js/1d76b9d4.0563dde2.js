(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2840],{2088:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var i=t(74848),o=t(28453),a=t(64428),s=t(78847),g=t(84620),r=t.n(g);const l={sidebar_label:"Google AI"},d="Google Generative AI",c={id:"integrations/text_embedding/google_generativeai",title:"Google Generative AI",description:"You can access Google's generative AI embeddings models through",source:"@site/docs/integrations/text_embedding/google_generativeai.mdx",sourceDirName:"integrations/text_embedding",slug:"/integrations/text_embedding/google_generativeai",permalink:"/docs/integrations/text_embedding/google_generativeai",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/text_embedding/google_generativeai.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Google AI"},sidebar:"integrations",previous:{title:"Fireworks",permalink:"/docs/integrations/text_embedding/fireworks"},next:{title:"Google PaLM",permalink:"/docs/integrations/text_embedding/google_palm"}},m={},h=[...s.toc,{value:"Usage",id:"usage",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"google-generative-ai",children:"Google Generative AI"}),"\n",(0,i.jsxs)(n.p,{children:["You can access Google's generative AI embeddings models through\n",(0,i.jsx)(n.code,{children:"@langchain/google-genai"})," integration package."]}),"\n",(0,i.jsxs)(n.p,{children:["Get an API key here: ",(0,i.jsx)(n.a,{href:"https://ai.google.dev/tutorials/setup",children:"https://ai.google.dev/tutorials/setup"})]}),"\n",(0,i.jsxs)(n.p,{children:["You'll need to install the ",(0,i.jsx)(n.code,{children:"@langchain/google-genai"})," package:"]}),"\n","\n",(0,i.jsx)(s.default,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/google-genai\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,i.jsx)(a.A,{language:"typescript",children:r()})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},84620:e=>{e.exports={content:'import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";\nimport { TaskType } from "@google/generative-ai";\n\n/*\n * Before running this, you should make sure you have created a\n * Google Cloud Project that has `generativelanguage` API enabled.\n *\n * You will also need to generate an API key and set\n * an environment variable GOOGLE_API_KEY\n *\n */\n\nconst embeddings = new GoogleGenerativeAIEmbeddings({\n  model: "embedding-001", // 768 dimensions\n  taskType: TaskType.RETRIEVAL_DOCUMENT,\n  title: "Document title",\n});\n\nconst res = await embeddings.embedQuery("OK Google");\n\nconsole.log(res, res.length);\n\n/*\n  [\n      0.010467986,  -0.052334797,   -0.05164676,  -0.0092885755,   0.037551474,\n      0.007278041, -0.0014511136, -0.0002727135,    -0.01205141,  -0.028824795,\n      0.022447161,   0.032513272, -0.0075029004,    0.013371749,    0.03725578,\n      -0.0179886,  -0.032127254,  -0.019804858,   -0.035530213,  -0.057539217,\n      0.030938378,   0.022367297,  -0.024294581,    0.011045744,  0.0026335048,\n    -0.018090524,  0.0066266404,   -0.05072178,   -0.025432976,    0.04673682,\n    -0.044976745,   0.009511519,  -0.030653704,   0.0066106077,   -0.03870159,\n      -0.04239313,   0.016969211,     -0.015911,    0.020452755,   0.033449557,\n    -0.002724189,  -0.049285132,  -0.016055783,  -0.0016474632,   0.013622627,\n    -0.012853559,   -0.00383113,  0.0047683385,    0.029007262,  -0.082496256,\n      0.055966448,   0.011457588,    0.04426033,   -0.043971397,   0.029413547,\n      0.012740723,    0.03243298,  -0.005483601,    -0.01973574,  -0.027495336,\n    0.0031939305,    0.02392931,  -0.011409592,    0.053490978,   -0.03130516,\n    -0.037364446,  -0.028803863,   0.019082755, -0.00075289875,   0.015987953,\n      0.005136402,  -0.045040093,   0.051010687,    -0.06252348,   -0.09334517,\n      -0.11461444,  -0.007226655,   0.034570504,    0.017628446,    0.02613834,\n    -0.0043784343,  -0.022333296,  -0.053109482,   -0.018441308,   -0.10350664,\n      0.048912525,  -0.042917475, -0.0014399975,    0.023028672, 0.00041137074,\n      0.019345555,  -0.023254089,   0.060004912,    -0.07684076,   -0.04034909,\n      0.05221485,  -0.015773885,  -0.029030964,     0.02586164,    -0.0401004,\n    ... 668 more items\n  ]\n*/\n',imports:[{local:"GoogleGenerativeAIEmbeddings",imported:"GoogleGenerativeAIEmbeddings",source:"@langchain/google-genai"}]}}}]);