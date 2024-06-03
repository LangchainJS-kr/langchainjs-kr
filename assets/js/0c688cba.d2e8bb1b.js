(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5190,65],{86815:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>g,default:()=>x,frontMatter:()=>p,metadata:()=>h,toc:()=>u});var o=t(74848),s=t(28453),r=t(64428),i=t(78847),a=t(70142),l=t.n(a),c=t(9678),d=t.n(c);const p={sidebar_class_name:"node-only"},g="SingleStore",h={id:"integrations/vectorstores/singlestore",title:"SingleStore",description:"SingleStoreDB is a high-performance distributed SQL database that supports deployment both in the cloud and on-premise. It provides vector storage, as well as vector functions like dotproduct and euclideandistance, thereby supporting AI applications that require text similarity matching.",source:"@site/docs/integrations/vectorstores/singlestore.mdx",sourceDirName:"integrations/vectorstores",slug:"/integrations/vectorstores/singlestore",permalink:"/docs/integrations/vectorstores/singlestore",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/vectorstores/singlestore.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"node-only"},sidebar:"integrations",previous:{title:"Rockset",permalink:"/docs/integrations/vectorstores/rockset"},next:{title:"Supabase",permalink:"/docs/integrations/vectorstores/supabase"}},m={},u=[{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Standard usage",id:"standard-usage",level:3},...i.toc,{value:"Metadata Filtering",id:"metadata-filtering",level:3}];function S(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"singlestore",children:"SingleStore"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://singlestore.com/",children:"SingleStoreDB"})," is a high-performance distributed SQL database that supports deployment both in the ",(0,o.jsx)(n.a,{href:"https://www.singlestore.com/cloud/",children:"cloud"})," and on-premise. It provides vector storage, as well as vector functions like ",(0,o.jsx)(n.a,{href:"https://docs.singlestore.com/managed-service/en/reference/sql-reference/vector-functions/dot_product.html",children:"dot_product"})," and ",(0,o.jsx)(n.a,{href:"https://docs.singlestore.com/managed-service/en/reference/sql-reference/vector-functions/euclidean_distance.html",children:"euclidean_distance"}),", thereby supporting AI applications that require text similarity matching."]}),"\n",(0,o.jsx)(n.admonition,{title:"Compatibility",type:"tip",children:(0,o.jsx)(n.p,{children:"Only available on Node.js."})}),"\n",(0,o.jsxs)(n.p,{children:["LangChain.js requires the ",(0,o.jsx)(n.code,{children:"mysql2"})," library to create a connection to a SingleStoreDB instance."]}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Establish a SingleStoreDB environment. You have the flexibility to choose between ",(0,o.jsx)(n.a,{href:"https://docs.singlestore.com/managed-service/en/getting-started-with-singlestoredb-cloud.html",children:"Cloud-based"})," or ",(0,o.jsx)(n.a,{href:"https://docs.singlestore.com/db/v8.1/en/developer-resources/get-started-using-singlestoredb-for-free.html",children:"On-Premise"})," editions."]}),"\n",(0,o.jsx)(n.li,{children:"Install the mysql2 JS client"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install -S mysql2\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"SingleStoreVectorStore"})," manages a connection pool. It is recommended to call ",(0,o.jsx)(n.code,{children:"await store.end();"})," before terminating your application to assure all connections are appropriately closed and prevent any possible resource leaks."]}),"\n",(0,o.jsx)(n.h3,{id:"standard-usage",children:"Standard usage"}),"\n","\n",(0,o.jsx)(i.default,{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai @langchain/community\n"})}),"\n","\n",(0,o.jsxs)(n.p,{children:["Below is a straightforward example showcasing how to import the relevant module and perform a base similarity search using the ",(0,o.jsx)(n.code,{children:"SingleStoreVectorStore"}),":"]}),"\n",(0,o.jsx)(r.A,{language:"typescript",children:l()}),"\n",(0,o.jsx)(n.h3,{id:"metadata-filtering",children:"Metadata Filtering"}),"\n","\n",(0,o.jsx)(n.p,{children:"If it is needed to filter results based on specific metadata fields, you can pass a filter parameter to narrow down your search to the documents that match all specified fields in the filter object:"}),"\n",(0,o.jsx)(r.A,{language:"typescript",children:d()})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(S,{...e})}):S(e)}},78847:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(74848),s=t(28453);const r={},i=void 0,a={id:"mdx_components/integration_install_tooltip",title:"integration_install_tooltip",description:"See this section for general instructions on installing integration packages.",source:"@site/docs/mdx_components/integration_install_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/integration_install_tooltip",permalink:"/docs/mdx_components/integration_install_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/integration_install_tooltip.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/how_to/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},70142:e=>{e.exports={content:'import { SingleStoreVectorStore } from "@langchain/community/vectorstores/singlestore";\nimport { OpenAIEmbeddings } from "@langchain/openai";\n\nexport const run = async () => {\n  const vectorStore = await SingleStoreVectorStore.fromTexts(\n    ["Hello world", "Bye bye", "hello nice world"],\n    [{ id: 2 }, { id: 1 }, { id: 3 }],\n    new OpenAIEmbeddings(),\n    {\n      connectionOptions: {\n        host: process.env.SINGLESTORE_HOST,\n        port: Number(process.env.SINGLESTORE_PORT),\n        user: process.env.SINGLESTORE_USERNAME,\n        password: process.env.SINGLESTORE_PASSWORD,\n        database: process.env.SINGLESTORE_DATABASE,\n      },\n    }\n  );\n\n  const resultOne = await vectorStore.similaritySearch("hello world", 1);\n  console.log(resultOne);\n  await vectorStore.end();\n};\n',imports:[{local:"SingleStoreVectorStore",imported:"SingleStoreVectorStore",source:"@langchain/community/vectorstores/singlestore"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"}]}},9678:e=>{e.exports={content:'import { SingleStoreVectorStore } from "@langchain/community/vectorstores/singlestore";\nimport { OpenAIEmbeddings } from "@langchain/openai";\n\nexport const run = async () => {\n  const vectorStore = await SingleStoreVectorStore.fromTexts(\n    ["Good afternoon", "Bye bye", "Boa tarde!", "At\xe9 logo!"],\n    [\n      { id: 1, language: "English" },\n      { id: 2, language: "English" },\n      { id: 3, language: "Portugese" },\n      { id: 4, language: "Portugese" },\n    ],\n    new OpenAIEmbeddings(),\n    {\n      connectionOptions: {\n        host: process.env.SINGLESTORE_HOST,\n        port: Number(process.env.SINGLESTORE_PORT),\n        user: process.env.SINGLESTORE_USERNAME,\n        password: process.env.SINGLESTORE_PASSWORD,\n        database: process.env.SINGLESTORE_DATABASE,\n      },\n      distanceMetric: "EUCLIDEAN_DISTANCE",\n    }\n  );\n\n  const resultOne = await vectorStore.similaritySearch("greetings", 1, {\n    language: "Portugese",\n  });\n  console.log(resultOne);\n  await vectorStore.end();\n};\n',imports:[{local:"SingleStoreVectorStore",imported:"SingleStoreVectorStore",source:"@langchain/community/vectorstores/singlestore"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"}]}}}]);