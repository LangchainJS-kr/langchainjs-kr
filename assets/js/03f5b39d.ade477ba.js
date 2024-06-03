(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2513],{26389:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var a=t(74848),s=t(28453),o=t(64428),r=t(78847),i=t(78078),c=t.n(i);const l={sidebar_class_name:"node-only"},d="AnalyticDB",p={id:"integrations/vectorstores/analyticdb",title:"AnalyticDB",description:"AnalyticDB for PostgreSQL is a massively parallel processing (MPP) data warehousing service that is designed to analyze large volumes of data online.",source:"@site/docs/integrations/vectorstores/analyticdb.mdx",sourceDirName:"integrations/vectorstores",slug:"/integrations/vectorstores/analyticdb",permalink:"/docs/integrations/vectorstores/analyticdb",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/vectorstores/analyticdb.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"node-only"},sidebar:"integrations",previous:{title:"Memory",permalink:"/docs/integrations/vectorstores/memory"},next:{title:"Astra DB",permalink:"/docs/integrations/vectorstores/astradb"}},h={},g=[{value:"Setup",id:"setup",level:2},...r.toc,{value:"Usage",id:"usage",level:2}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"analyticdb",children:"AnalyticDB"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://www.alibabacloud.com/help/en/analyticdb-for-postgresql/latest/product-introduction-overview",children:"AnalyticDB for PostgreSQL"})," is a massively parallel processing (MPP) data warehousing service that is designed to analyze large volumes of data online."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"AnalyticDB for PostgreSQL"})," is developed based on the open source ",(0,a.jsx)(n.code,{children:"Greenplum Database"})," project and is enhanced with in-depth extensions by ",(0,a.jsx)(n.code,{children:"Alibaba Cloud"}),". AnalyticDB for PostgreSQL is compatible with the ANSI SQL 2003 syntax and the PostgreSQL and Oracle database ecosystems. AnalyticDB for PostgreSQL also supports row store and column store. AnalyticDB for PostgreSQL processes petabytes of data offline at a high performance level and supports highly concurrent online queries."]}),"\n",(0,a.jsxs)(n.p,{children:["This notebook shows how to use functionality related to the ",(0,a.jsx)(n.code,{children:"AnalyticDB"})," vector database."]}),"\n",(0,a.jsxs)(n.p,{children:["To run, you should have an ",(0,a.jsx)(n.a,{href:"https://www.alibabacloud.com/help/en/analyticdb-for-postgresql/latest/product-introduction-overview",children:"AnalyticDB"})," instance up and running:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Using ",(0,a.jsx)(n.a,{href:"https://www.alibabacloud.com/product/hybriddb-postgresql",children:"AnalyticDB Cloud Vector Database"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"Compatibility",type:"tip",children:(0,a.jsx)(n.p,{children:"Only available on Node.js."})}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsxs)(n.p,{children:["LangChain.js accepts ",(0,a.jsx)(n.a,{href:"https://node-postgres.com/",children:"node-postgres"})," as the connections pool for AnalyticDB vectorstore."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install -S pg\n"})}),"\n",(0,a.jsxs)(n.p,{children:["And we need ",(0,a.jsx)(n.a,{href:"https://github.com/brianc/node-pg-copy-streams",children:"pg-copy-streams"})," to add batch vectors quickly."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install -S pg-copy-streams\n"})}),"\n","\n",(0,a.jsx)(r.default,{}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai @langchain/community\n"})}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.admonition,{title:"Security",type:"danger",children:(0,a.jsxs)(n.p,{children:["User-generated data such as usernames should not be used as input for the collection name.",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"This may lead to SQL Injection!"})]})}),"\n","\n",(0,a.jsx)(o.A,{language:"typescript",children:c()})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},78078:e=>{e.exports={content:'import { AnalyticDBVectorStore } from "@langchain/community/vectorstores/analyticdb";\nimport { OpenAIEmbeddings } from "@langchain/openai";\n\nconst connectionOptions = {\n  host: process.env.ANALYTICDB_HOST || "localhost",\n  port: Number(process.env.ANALYTICDB_PORT) || 5432,\n  database: process.env.ANALYTICDB_DATABASE || "your_database",\n  user: process.env.ANALYTICDB_USERNAME || "username",\n  password: process.env.ANALYTICDB_PASSWORD || "password",\n};\n\nconst vectorStore = await AnalyticDBVectorStore.fromTexts(\n  ["foo", "bar", "baz"],\n  [{ page: 1 }, { page: 2 }, { page: 3 }],\n  new OpenAIEmbeddings(),\n  { connectionOptions }\n);\nconst result = await vectorStore.similaritySearch("foo", 1);\nconsole.log(JSON.stringify(result));\n// [{"pageContent":"foo","metadata":{"page":1}}]\n\nawait vectorStore.addDocuments([{ pageContent: "foo", metadata: { page: 4 } }]);\n\nconst filterResult = await vectorStore.similaritySearch("foo", 1, {\n  page: 4,\n});\nconsole.log(JSON.stringify(filterResult));\n// [{"pageContent":"foo","metadata":{"page":4}}]\n\nconst filterWithScoreResult = await vectorStore.similaritySearchWithScore(\n  "foo",\n  1,\n  { page: 3 }\n);\nconsole.log(JSON.stringify(filterWithScoreResult));\n// [[{"pageContent":"baz","metadata":{"page":3}},0.26075905561447144]]\n\nconst filterNoMatchResult = await vectorStore.similaritySearchWithScore(\n  "foo",\n  1,\n  { page: 5 }\n);\nconsole.log(JSON.stringify(filterNoMatchResult));\n// []\n\n// need to manually close the Connection pool\nawait vectorStore.end();\n',imports:[{local:"AnalyticDBVectorStore",imported:"AnalyticDBVectorStore",source:"@langchain/community/vectorstores/analyticdb"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"}]}}}]);