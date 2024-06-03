(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1979],{83946:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>h,default:()=>v,frontMatter:()=>m,metadata:()=>p,toc:()=>g});var s=t(74848),a=t(28453),r=t(78847),i=t(64428),o=t(94571),c=t.n(o),d=t(25275),l=t.n(d);const m={sidebar_class_name:"node-only"},h="Prisma",p={id:"integrations/vectorstores/prisma",title:"Prisma",description:"For augmenting existing models in PostgreSQL database with vector search, Langchain supports using Prisma together with PostgreSQL and pgvector Postgres extension.",source:"@site/docs/integrations/vectorstores/prisma.mdx",sourceDirName:"integrations/vectorstores",slug:"/integrations/vectorstores/prisma",permalink:"/docs/integrations/vectorstores/prisma",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/vectorstores/prisma.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"node-only"},sidebar:"integrations",previous:{title:"Pinecone",permalink:"/docs/integrations/vectorstores/pinecone"},next:{title:"Qdrant",permalink:"/docs/integrations/vectorstores/qdrant"}},u={},g=[{value:"Setup",id:"setup",level:2},{value:"Setup database instance with Supabase",id:"setup-database-instance-with-supabase",level:3},{value:"Install Prisma",id:"install-prisma",level:3},{value:"Setup <code>pgvector</code> self hosted instance with <code>docker-compose</code>",id:"setup-pgvector-self-hosted-instance-with-docker-compose",level:3},{value:"Create a new schema",id:"create-a-new-schema",level:3},{value:"Usage",id:"usage",level:2},...r.toc];function x(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"prisma",children:"Prisma"}),"\n",(0,s.jsxs)(n.p,{children:["For augmenting existing models in PostgreSQL database with vector search, Langchain supports using ",(0,s.jsx)(n.a,{href:"https://www.prisma.io/",children:"Prisma"})," together with PostgreSQL and ",(0,s.jsx)(n.a,{href:"https://github.com/pgvector/pgvector",children:(0,s.jsx)(n.code,{children:"pgvector"})})," Postgres extension."]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.h3,{id:"setup-database-instance-with-supabase",children:"Setup database instance with Supabase"}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the ",(0,s.jsx)(n.a,{href:"https://supabase.com/docs/guides/integrations/prisma",children:"Prisma and Supabase integration guide"})," to setup a new database instance with Supabase and Prisma."]}),"\n",(0,s.jsx)(n.h3,{id:"install-prisma",children:"Install Prisma"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install prisma\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"setup-pgvector-self-hosted-instance-with-docker-compose",children:["Setup ",(0,s.jsx)(n.code,{children:"pgvector"})," self hosted instance with ",(0,s.jsx)(n.code,{children:"docker-compose"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pgvector"})," provides a prebuilt Docker image that can be used to quickly setup a self-hosted Postgres instance."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"services:\n  db:\n    image: ankane/pgvector\n    ports:\n      - 5432:5432\n    volumes:\n      - db:/var/lib/postgresql/data\n    environment:\n      - POSTGRES_PASSWORD=\n      - POSTGRES_USER=\n      - POSTGRES_DB=\n\nvolumes:\n  db:\n"})}),"\n",(0,s.jsx)(n.h3,{id:"create-a-new-schema",children:"Create a new schema"}),"\n",(0,s.jsxs)(n.p,{children:["Assuming you haven't created a schema yet, create a new model with a ",(0,s.jsx)(n.code,{children:"vector"})," field of type ",(0,s.jsx)(n.code,{children:'Unsupported("vector")'}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-prisma",children:'model Document {\n  id      String                 @id @default(cuid())\n  content String\n  vector  Unsupported("vector")?\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Afterwards, create a new migration with ",(0,s.jsx)(n.code,{children:"--create-only"})," to avoid running the migration directly."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npx prisma migrate dev --create-only\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Add the following line to the newly created migration to enable ",(0,s.jsx)(n.code,{children:"pgvector"})," extension if it hasn't been enabled yet:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE EXTENSION IF NOT EXISTS vector;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Run the migration afterwards:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npx prisma migrate dev\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,s.jsx)(r.default,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai @langchain/community\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Table names and column names (in fields such as ",(0,s.jsx)(n.code,{children:"tableName"}),", ",(0,s.jsx)(n.code,{children:"vectorColumnName"}),", ",(0,s.jsx)(n.code,{children:"columns"})," and ",(0,s.jsx)(n.code,{children:"filter"}),") are passed into SQL queries directly without parametrisation.\nThese fields must be sanitized beforehand to avoid SQL injection."]})}),"\n","\n",(0,s.jsx)(i.A,{language:"typescript",children:c()}),"\n",(0,s.jsxs)(n.p,{children:["The following SQL operators are available as filters: ",(0,s.jsx)(n.code,{children:"equals"}),", ",(0,s.jsx)(n.code,{children:"in"}),", ",(0,s.jsx)(n.code,{children:"isNull"}),", ",(0,s.jsx)(n.code,{children:"isNotNull"}),", ",(0,s.jsx)(n.code,{children:"like"}),", ",(0,s.jsx)(n.code,{children:"lt"}),", ",(0,s.jsx)(n.code,{children:"lte"}),", ",(0,s.jsx)(n.code,{children:"gt"}),", ",(0,s.jsx)(n.code,{children:"gte"}),", ",(0,s.jsx)(n.code,{children:"not"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The samples above uses the following schema:"}),"\n",(0,s.jsx)(i.A,{language:"prisma",children:l()}),"\n",(0,s.jsxs)(n.p,{children:["You can remove ",(0,s.jsx)(n.code,{children:"namespace"})," if you don't need it."]})]})}function v(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},94571:e=>{e.exports={content:'import { PrismaVectorStore } from "@langchain/community/vectorstores/prisma";\nimport { OpenAIEmbeddings } from "@langchain/openai";\nimport { PrismaClient, Prisma, Document } from "@prisma/client";\n\nexport const run = async () => {\n  const db = new PrismaClient();\n\n  // Use the `withModel` method to get proper type hints for `metadata` field:\n  const vectorStore = PrismaVectorStore.withModel<Document>(db).create(\n    new OpenAIEmbeddings(),\n    {\n      prisma: Prisma,\n      tableName: "Document",\n      vectorColumnName: "vector",\n      columns: {\n        id: PrismaVectorStore.IdColumn,\n        content: PrismaVectorStore.ContentColumn,\n      },\n    }\n  );\n\n  const texts = ["Hello world", "Bye bye", "What\'s this?"];\n  await vectorStore.addModels(\n    await db.$transaction(\n      texts.map((content) => db.document.create({ data: { content } }))\n    )\n  );\n\n  const resultOne = await vectorStore.similaritySearch("Hello world", 1);\n  console.log(resultOne);\n\n  // create an instance with default filter\n  const vectorStore2 = PrismaVectorStore.withModel<Document>(db).create(\n    new OpenAIEmbeddings(),\n    {\n      prisma: Prisma,\n      tableName: "Document",\n      vectorColumnName: "vector",\n      columns: {\n        id: PrismaVectorStore.IdColumn,\n        content: PrismaVectorStore.ContentColumn,\n      },\n      filter: {\n        content: {\n          equals: "default",\n        },\n      },\n    }\n  );\n\n  await vectorStore2.addModels(\n    await db.$transaction(\n      texts.map((content) => db.document.create({ data: { content } }))\n    )\n  );\n\n  // Use the default filter a.k.a {"content": "default"}\n  const resultTwo = await vectorStore.similaritySearch("Hello world", 1);\n  console.log(resultTwo);\n};\n',imports:[{local:"PrismaVectorStore",imported:"PrismaVectorStore",source:"@langchain/community/vectorstores/prisma"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"}]}},25275:e=>{e.exports={content:'// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\nmodel Document {\n  id        String                 @id @default(cuid())\n  content   String\n  namespace String?                @default("default")\n  vector    Unsupported("vector")?\n}\n',imports:[]}}}]);