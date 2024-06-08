"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7609],{19049:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=t(74848),s=t(28453),a=t(78847);const r={},c="HuggingFace Inference",d={id:"integrations/text_embedding/hugging_face_inference",title:"HuggingFace Inference",description:"This Embeddings integration uses the HuggingFace Inference API to generate embeddings for a given text using by default the sentence-transformers/distilbert-base-nli-mean-tokens model. You can pass a different model name to the constructor to use a different model.",source:"@site/docs/integrations/text_embedding/hugging_face_inference.mdx",sourceDirName:"integrations/text_embedding",slug:"/integrations/text_embedding/hugging_face_inference",permalink:"/docs/integrations/text_embedding/hugging_face_inference",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/text_embedding/hugging_face_inference.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Gradient AI",permalink:"/docs/integrations/text_embedding/gradient_ai"},next:{title:"Llama CPP",permalink:"/docs/integrations/text_embedding/llama_cpp"}},g={},o=[{value:"Setup",id:"setup",level:2},...a.toc,{value:"Usage",id:"usage",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"huggingface-inference",children:"HuggingFace Inference"}),"\n",(0,i.jsxs)(n.p,{children:["This Embeddings integration uses the HuggingFace Inference API to generate embeddings for a given text using by default the ",(0,i.jsx)(n.code,{children:"sentence-transformers/distilbert-base-nli-mean-tokens"})," model. You can pass a different model name to the constructor to use a different model."]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.p,{children:["You'll first need to install the ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/@langchain/community",children:(0,i.jsx)(n.code,{children:"@langchain/community"})})," package and the required peer dep:"]}),"\n","\n",(0,i.jsx)(a.default,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community @huggingface/inference@2\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";\n\nconst embeddings = new HuggingFaceInferenceEmbeddings({\n  apiKey: "YOUR-API-KEY", // In Node.js defaults to process.env.HUGGINGFACEHUB_API_KEY\n});\n'})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);