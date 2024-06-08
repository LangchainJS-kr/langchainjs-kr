(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5321],{90240:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>x,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var o=n(74848),s=n(28453),r=n(78847),a=n(64428),i=n(5862),c=n.n(i),p=n(25483),d=n.n(p);const l={},h="TypeORM",m={id:"integrations/vectorstores/typeorm",title:"TypeORM",description:"To enable vector search in a generic PostgreSQL database, LangChain.js supports using TypeORM with the pgvector Postgres extension.",source:"@site/docs/integrations/vectorstores/typeorm.mdx",sourceDirName:"integrations/vectorstores",slug:"/integrations/vectorstores/typeorm",permalink:"/docs/integrations/vectorstores/typeorm",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/vectorstores/typeorm.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Turbopuffer",permalink:"/docs/integrations/vectorstores/turbopuffer"},next:{title:"Typesense",permalink:"/docs/integrations/vectorstores/typesense"}},g={},u=[{value:"Setup",id:"setup",level:2},...r.toc,{value:"Setup a <code>pgvector</code> self hosted instance with <code>docker-compose</code>",id:"setup-a-pgvector-self-hosted-instance-with-docker-compose",level:3},{value:"Usage",id:"usage",level:2}];function y(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"typeorm",children:"TypeORM"}),"\n",(0,o.jsxs)(t.p,{children:["To enable vector search in a generic PostgreSQL database, LangChain.js supports using ",(0,o.jsx)(t.a,{href:"https://typeorm.io/",children:"TypeORM"})," with the ",(0,o.jsx)(t.a,{href:"https://github.com/pgvector/pgvector",children:(0,o.jsx)(t.code,{children:"pgvector"})})," Postgres extension."]}),"\n",(0,o.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(t.p,{children:["To work with TypeORM, you need to install the ",(0,o.jsx)(t.code,{children:"typeorm"})," and ",(0,o.jsx)(t.code,{children:"pg"})," packages:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install typeorm\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install pg\n"})}),"\n","\n",(0,o.jsx)(r.default,{}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai @langchain/community\n"})}),"\n",(0,o.jsxs)(t.h3,{id:"setup-a-pgvector-self-hosted-instance-with-docker-compose",children:["Setup a ",(0,o.jsx)(t.code,{children:"pgvector"})," self hosted instance with ",(0,o.jsx)(t.code,{children:"docker-compose"})]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"pgvector"})," provides a prebuilt Docker image that can be used to quickly setup a self-hosted Postgres instance.\nCreate a file below named ",(0,o.jsx)(t.code,{children:"docker-compose.yml"}),":"]}),"\n","\n",(0,o.jsx)(a.A,{language:"yml",name:"docker-compose.yml",children:c()}),"\n",(0,o.jsxs)(t.p,{children:["And then in the same directory, run ",(0,o.jsx)(t.code,{children:"docker compose up"})," to start the container."]}),"\n",(0,o.jsxs)(t.p,{children:["You can find more information on how to setup ",(0,o.jsx)(t.code,{children:"pgvector"})," in the ",(0,o.jsx)(t.a,{href:"https://github.com/pgvector/pgvector",children:"official repository"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,o.jsxs)(t.p,{children:["One complete example of using ",(0,o.jsx)(t.code,{children:"TypeORMVectorStore"})," is the following:"]}),"\n",(0,o.jsx)(a.A,{language:"typescript",children:d()})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(y,{...e})}):y(e)}},25483:e=>{e.exports={content:'import { DataSourceOptions } from "typeorm";\nimport { OpenAIEmbeddings } from "@langchain/openai";\nimport { TypeORMVectorStore } from "@langchain/community/vectorstores/typeorm";\n\n// First, follow set-up instructions at\n// https://js.langchain.com/docs/modules/indexes/vector_stores/integrations/typeorm\n\nexport const run = async () => {\n  const args = {\n    postgresConnectionOptions: {\n      type: "postgres",\n      host: "localhost",\n      port: 5432,\n      username: "myuser",\n      password: "ChangeMe",\n      database: "api",\n    } as DataSourceOptions,\n  };\n\n  const typeormVectorStore = await TypeORMVectorStore.fromDataSource(\n    new OpenAIEmbeddings(),\n    args\n  );\n\n  await typeormVectorStore.ensureTableInDatabase();\n\n  await typeormVectorStore.addDocuments([\n    { pageContent: "what\'s this", metadata: { a: 2 } },\n    { pageContent: "Cat drinks milk", metadata: { a: 1 } },\n  ]);\n\n  const results = await typeormVectorStore.similaritySearch("hello", 2);\n\n  console.log(results);\n};\n',imports:[{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"},{local:"TypeORMVectorStore",imported:"TypeORMVectorStore",source:"@langchain/community/vectorstores/typeorm"}]}},5862:e=>{e.exports={content:"export default {services:{db:{image:'ankane/pgvector',ports:['5432:5432'],volumes:['./data:/var/lib/postgresql/data'],environment:['POSTGRES_PASSWORD=ChangeMe','POSTGRES_USER=myuser','POSTGRES_DB=api']}}};",imports:[]}}}]);