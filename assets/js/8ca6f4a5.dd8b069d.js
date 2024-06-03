(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1549,65],{6874:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>h});var o=t(74848),s=t(28453),i=t(78847),a=t(64428),r=t(16702),c=t.n(r);const l={},d="Neon Postgres",p={id:"integrations/vectorstores/neon",title:"Neon Postgres",description:"Neon is a fully managed serverless PostgreSQL database. It separates storage and compute to offer",source:"@site/docs/integrations/vectorstores/neon.mdx",sourceDirName:"integrations/vectorstores",slug:"/integrations/vectorstores/neon",permalink:"/docs/integrations/vectorstores/neon",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/vectorstores/neon.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Neo4j Vector Index",permalink:"/docs/integrations/vectorstores/neo4jvector"},next:{title:"OpenSearch",permalink:"/docs/integrations/vectorstores/opensearch"}},g={},h=[{value:"Setup",id:"setup",level:2},{value:"Select a Neon project",id:"select-a-neon-project",level:3},{value:"Application code",id:"application-code",level:3},...i.toc,{value:"Usage",id:"usage",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"neon-postgres",children:"Neon Postgres"}),"\n",(0,o.jsx)(n.p,{children:"Neon is a fully managed serverless PostgreSQL database. It separates storage and compute to offer\nfeatures such as instant branching and automatic scaling."}),"\n",(0,o.jsxs)(n.p,{children:["With the ",(0,o.jsx)(n.code,{children:"pgvector"})," extension, Neon provides a vector store that can be used with LangChain.js to store and query embeddings."]}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsx)(n.h3,{id:"select-a-neon-project",children:"Select a Neon project"}),"\n",(0,o.jsxs)(n.p,{children:["If you do not have a Neon account, sign up for one at ",(0,o.jsx)(n.a,{href:"https://neon.tech",children:"Neon"}),". After logging into the Neon Console, proceed\nto the ",(0,o.jsx)(n.a,{href:"https://console.neon.tech/app/projects",children:"Projects"})," section and select an existing project or create a new one."]}),"\n",(0,o.jsxs)(n.p,{children:["Your Neon project comes with a ready-to-use Postgres database named ",(0,o.jsx)(n.code,{children:"neondb"})," that you can use to store embeddings. Navigate to\nthe Connection Details section to find your database connection string. It should look similar to this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"postgres://alex:AbC123dEf@ep-cool-darkness-123456.us-east-2.aws.neon.tech/dbname?sslmode=require\n"})}),"\n",(0,o.jsx)(n.p,{children:"Keep your connection string handy for later use."}),"\n",(0,o.jsx)(n.h3,{id:"application-code",children:"Application code"}),"\n",(0,o.jsxs)(n.p,{children:["To work with Neon Postgres, you need to install the ",(0,o.jsx)(n.code,{children:"@neondatabase/serverless"})," package which provides a JavaScript/TypeScript\ndriver to connect to the database."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @neondatabase/serverless\n"})}),"\n","\n",(0,o.jsx)(i.default,{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To initialize a ",(0,o.jsx)(n.code,{children:"NeonPostgres"})," vectorstore, you need to provide your Neon database connection string. You can use the connection string\nwe fetched above directly, or store it as an environment variable and use it in your code."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"const vectorStore = await NeonPostgres.initialize(embeddings, {\n  connectionString: NEON_POSTGRES_CONNECTION_STRING,\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,o.jsx)(a.A,{language:"typescript",children:c()})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},78847:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=t(74848),s=t(28453);const i={},a=void 0,r={id:"mdx_components/integration_install_tooltip",title:"integration_install_tooltip",description:"See this section for general instructions on installing integration packages.",source:"@site/docs/mdx_components/integration_install_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/integration_install_tooltip",permalink:"/docs/mdx_components/integration_install_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/integration_install_tooltip.mdx",tags:[],version:"current",frontMatter:{}},c={},l=[];function d(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/how_to/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},16702:e=>{e.exports={content:'import { OpenAIEmbeddings } from "@langchain/openai";\nimport { NeonPostgres } from "@langchain/community/vectorstores/neon";\n\n// Initialize an embeddings instance\nconst embeddings = new OpenAIEmbeddings({\n  apiKey: process.env.OPENAI_API_KEY,\n  dimensions: 256,\n  model: "text-embedding-3-small",\n});\n\n// Initialize a NeonPostgres instance to store embedding vectors\nconst vectorStore = await NeonPostgres.initialize(embeddings, {\n  connectionString: process.env.DATABASE_URL as string,\n});\n\n// You can add documents to the store, strings in the `pageContent` field will be embedded\n// and stored in the database\nconst documents = [\n  { pageContent: "Hello world", metadata: { topic: "greeting" } },\n  { pageContent: "Bye bye", metadata: { topic: "greeting" } },\n  {\n    pageContent: "Mitochondria is the powerhouse of the cell",\n    metadata: { topic: "science" },\n  },\n];\nconst idsInserted = await vectorStore.addDocuments(documents);\n\n// You can now query the store for similar documents to the input query\nconst resultOne = await vectorStore.similaritySearch("hola", 1);\nconsole.log(resultOne);\n/*\n[\n  Document {\n    pageContent: \'Hello world\',\n    metadata: { topic: \'greeting\' }\n  }\n]\n*/\n\n// You can also filter by metadata\nconst resultTwo = await vectorStore.similaritySearch("Irrelevant query", 2, {\n  topic: "science",\n});\nconsole.log(resultTwo);\n/*\n[\n  Document {\n    pageContent: \'Mitochondria is the powerhouse of the cell\',\n    metadata: { topic: \'science\' }\n  }\n]\n*/\n\n// Metadata filtering with IN-filters works as well\nconst resultsThree = await vectorStore.similaritySearch("Irrelevant query", 2, {\n  topic: { in: ["greeting"] },\n});\nconsole.log(resultsThree);\n/*\n[\n  Document { pageContent: \'Bye bye\', metadata: { topic: \'greeting\' } },\n  Document {\n    pageContent: \'Hello world\',\n    metadata: { topic: \'greeting\' }\n  }\n]\n*/\n\n// Upserting is supported as well\nawait vectorStore.addDocuments(\n  [\n    {\n      pageContent: "ATP is the powerhouse of the cell",\n      metadata: { topic: "science" },\n    },\n  ],\n  { ids: [idsInserted[2]] }\n);\n\nconst resultsFour = await vectorStore.similaritySearch(\n  "powerhouse of the cell",\n  1\n);\nconsole.log(resultsFour);\n/*\n[\n  Document {\n    pageContent: \'ATP is the powerhouse of the cell\',\n    metadata: { topic: \'science\' }\n  }\n]\n*/\n',imports:[{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"},{local:"NeonPostgres",imported:"NeonPostgres",source:"@langchain/community/vectorstores/neon"}]}}}]);