(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7275],{16781:(e,n,i)=>{"use strict";i.r(n),i.d(n,{assets:()=>b,contentTitle:()=>g,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var a=i(74848),t=i(28453),s=i(78847),o=i(64428),d=i(23947),l=i.n(d);const r={sidebar_class_name:"node-only"},g="Alibaba Tongyi",c={id:"integrations/text_embedding/alibaba_tongyi",title:"Alibaba Tongyi",description:"The AlibabaTongyiEmbeddings class uses the Alibaba Tongyi API to generate embeddings for a given text.",source:"@site/docs/integrations/text_embedding/alibaba_tongyi.mdx",sourceDirName:"integrations/text_embedding",slug:"/integrations/text_embedding/alibaba_tongyi",permalink:"/docs/integrations/text_embedding/alibaba_tongyi",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/text_embedding/alibaba_tongyi.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"node-only"},sidebar:"integrations",previous:{title:"Embedding models",permalink:"/docs/integrations/text_embedding"},next:{title:"Azure OpenAI",permalink:"/docs/integrations/text_embedding/azure_openai"}},b={},m=[{value:"Setup",id:"setup",level:2},...s.toc,{value:"Usage",id:"usage",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"alibaba-tongyi",children:"Alibaba Tongyi"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"AlibabaTongyiEmbeddings"})," class uses the Alibaba Tongyi API to generate embeddings for a given text."]}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsxs)(n.p,{children:["You'll need to sign up for an Alibaba API key and set it as an environment variable named ",(0,a.jsx)(n.code,{children:"ALIBABA_API_KEY"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Then, you'll need to install the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@langchain/community",children:(0,a.jsx)(n.code,{children:"@langchain/community"})})," package:"]}),"\n","\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community\n"})}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,a.jsx)(o.A,{language:"typescript",children:l()})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},23947:e=>{e.exports={content:'import { AlibabaTongyiEmbeddings } from "@langchain/community/embeddings/alibaba_tongyi";\n\nconst model = new AlibabaTongyiEmbeddings({});\nconst res = await model.embedQuery(\n  "What would be a good company name a company that makes colorful socks?"\n);\nconsole.log({ res });\n',imports:[{local:"AlibabaTongyiEmbeddings",imported:"AlibabaTongyiEmbeddings",source:"@langchain/community/embeddings/alibaba_tongyi"}]}}}]);