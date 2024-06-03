(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1807],{58551:(e,r,t)=>{"use strict";t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>h,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var i=t(74848),n=t(28453),s=t(78847),a=t(64428),o=t(18117),d=t.n(o);const c={},h="Chaindesk Retriever",l={id:"integrations/retrievers/chaindesk-retriever",title:"Chaindesk Retriever",description:"This example shows how to use the Chaindesk Retriever in a retrieval chain to retrieve documents from a Chaindesk.ai datastore.",source:"@site/docs/integrations/retrievers/chaindesk-retriever.mdx",sourceDirName:"integrations/retrievers",slug:"/integrations/retrievers/chaindesk-retriever",permalink:"/docs/integrations/retrievers/chaindesk-retriever",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/retrievers/chaindesk-retriever.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Knowledge Bases for Amazon Bedrock",permalink:"/docs/integrations/retrievers/bedrock-knowledge-bases"},next:{title:"ChatGPT Plugin Retriever",permalink:"/docs/integrations/retrievers/chatgpt-retriever-plugin"}},v={},p=[{value:"Usage",id:"usage",level:2},...s.toc];function m(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"chaindesk-retriever",children:"Chaindesk Retriever"}),"\n",(0,i.jsx)(r.p,{children:"This example shows how to use the Chaindesk Retriever in a retrieval chain to retrieve documents from a Chaindesk.ai datastore."}),"\n",(0,i.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,i.jsx)(s.default,{}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community\n"})}),"\n","\n",(0,i.jsx)(a.A,{language:"typescript",children:d()})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},18117:e=>{e.exports={content:'import { ChaindeskRetriever } from "@langchain/community/retrievers/chaindesk";\n\nconst retriever = new ChaindeskRetriever({\n  datastoreId: "DATASTORE_ID",\n  apiKey: "CHAINDESK_API_KEY", // optional: needed for private datastores\n  topK: 8, // optional: default value is 3\n});\n\nconst docs = await retriever.invoke("hello");\n\nconsole.log(docs);\n',imports:[{local:"ChaindeskRetriever",imported:"ChaindeskRetriever",source:"@langchain/community/retrievers/chaindesk"}]}}}]);