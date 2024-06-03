(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4873],{76388:(e,o,t)=>{"use strict";t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>m,default:()=>x,frontMatter:()=>h,metadata:()=>u,toc:()=>f});var r=t(74848),n=t(28453),s=t(7752),i=t.n(s),a=t(64428),c=t(73712),d=t.n(c),l=t(78847);const h={sidebar_class_name:"hidden",keywords:["similaritySearchWithScore"]},m="How to create and query vector stores",u={id:"how_to/vectorstores",title:"How to create and query vector stores",description:"Head to Integrations for documentation on built-in integrations with vectorstore providers.",source:"@site/docs/how_to/vectorstores.mdx",sourceDirName:"how_to",slug:"/how_to/vectorstores",permalink:"/docs/how_to/vectorstores",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/vectorstores.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden",keywords:["similaritySearchWithScore"]},sidebar:"tutorialSidebar",previous:{title:"How use a vector store to retrieve data",permalink:"/docs/how_to/vectorstore_retriever"},next:{title:"\uac1c\ub150 \uac00\uc774\ub4dc",permalink:"/docs/concepts"}},p={},f=[{value:"Creating a new index",id:"creating-a-new-index",level:2},{value:"Creating a new index from texts",id:"creating-a-new-index-from-texts",level:2},...l.toc,{value:"Which one to pick?",id:"which-one-to-pick",level:2},{value:"Next steps",id:"next-steps",level:2}];function g(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"how-to-create-and-query-vector-stores",children:"How to create and query vector stores"}),"\n",(0,r.jsx)(o.admonition,{type:"info",children:(0,r.jsxs)(o.p,{children:["Head to ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores",children:"Integrations"})," for documentation on built-in integrations with vectorstore providers."]})}),"\n",(0,r.jsxs)(o.admonition,{title:"Prerequisites",type:"info",children:[(0,r.jsx)(o.p,{children:"This guide assumes familiarity with the following concepts:"}),(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/docs/concepts/#vectorstores",children:"Vector stores"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/docs/concepts/#embedding-models",children:"Embeddings"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/docs/concepts#document-loaders",children:"Document loaders"})}),"\n"]})]}),"\n",(0,r.jsx)(o.p,{children:"One of the most common ways to store and search over unstructured data is to embed it and store the resulting embedding\nvectors, and then at query time to embed the unstructured query and retrieve the embedding vectors that are\n'most similar' to the embedded query. A vector store takes care of storing embedded data and performing vector search\nfor you."}),"\n",(0,r.jsxs)(o.p,{children:["This walkthrough uses a basic, unoptimized implementation called ",(0,r.jsx)(o.a,{href:"https://v02.api.js.langchain.com/classes/langchain_vectorstores_memory.MemoryVectorStore.html",children:(0,r.jsx)(o.code,{children:"MemoryVectorStore"})})," that stores embeddings in-memory and does an exact, linear search for the most similar embeddings.\nLangChain contains many built-in integrations - see ",(0,r.jsx)(o.a,{href:"/docs/how_to/vectorstores/#which-one-to-pick",children:"this section"})," for more, or the ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/",children:"full list of integrations"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"creating-a-new-index",children:"Creating a new index"}),"\n",(0,r.jsx)(o.p,{children:"Most of the time, you'll need to load and prepare the data you want to search over. Here's an example that loads a recent speech from a file:"}),"\n","\n",(0,r.jsx)(a.A,{language:"typescript",children:i()}),"\n",(0,r.jsxs)(o.p,{children:["Most of the time, you'll need to split the loaded text as a preparation step. See ",(0,r.jsx)(o.a,{href:"/docs/concepts/#text-splitters",children:"this section"})," to learn more about text splitters."]}),"\n",(0,r.jsx)(o.h2,{id:"creating-a-new-index-from-texts",children:"Creating a new index from texts"}),"\n",(0,r.jsx)(o.p,{children:"If you have already prepared the data you want to search over, you can initialize a vector store directly from text chunks:"}),"\n","\n","\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai\n"})}),"\n",(0,r.jsx)(a.A,{language:"typescript",children:d()}),"\n",(0,r.jsx)(o.h2,{id:"which-one-to-pick",children:"Which one to pick?"}),"\n",(0,r.jsx)(o.p,{children:"Here's a quick guide to help you pick the right vector store for your use case:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["If you're after something that can just run inside your Node.js application, in-memory, without any other servers to stand up, then go for ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/hnswlib",children:"HNSWLib"}),", ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/faiss",children:"Faiss"}),", ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/lancedb",children:"LanceDB"})," or ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/closevector",children:"CloseVector"})]}),"\n",(0,r.jsxs)(o.li,{children:["If you're looking for something that can run in-memory in browser-like environments, then go for ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/memory",children:"MemoryVectorStore"})," or ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/closevector",children:"CloseVector"})]}),"\n",(0,r.jsxs)(o.li,{children:["If you come from Python and you were looking for something similar to FAISS, try ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/hnswlib",children:"HNSWLib"})," or ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/faiss",children:"Faiss"})]}),"\n",(0,r.jsxs)(o.li,{children:["If you're looking for an open-source full-featured vector database that you can run locally in a docker container, then go for ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/chroma",children:"Chroma"})]}),"\n",(0,r.jsxs)(o.li,{children:["If you're looking for an open-source vector database that offers low-latency, local embedding of documents and supports apps on the edge, then go for ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/zep",children:"Zep"})]}),"\n",(0,r.jsxs)(o.li,{children:["If you're looking for an open-source production-ready vector database that you can run locally (in a docker container) or hosted in the cloud, then go for ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/weaviate",children:"Weaviate"}),"."]}),"\n",(0,r.jsxs)(o.li,{children:["If you're using Supabase already then look at the ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/supabase",children:"Supabase"})," vector store to use the same Postgres database for your embeddings too"]}),"\n",(0,r.jsxs)(o.li,{children:["If you're looking for a production-ready vector store you don't have to worry about hosting yourself, then go for ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/pinecone",children:"Pinecone"})]}),"\n",(0,r.jsxs)(o.li,{children:["If you are already utilizing SingleStore, or if you find yourself in need of a distributed, high-performance database, you might want to consider the ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/singlestore",children:"SingleStore"})," vector store."]}),"\n",(0,r.jsxs)(o.li,{children:["If you are looking for an online MPP (Massively Parallel Processing) data warehousing service, you might want to consider the ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/analyticdb",children:"AnalyticDB"})," vector store."]}),"\n",(0,r.jsxs)(o.li,{children:["If you're in search of a cost-effective vector database that allows run vector search with SQL, look no further than ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/myscale",children:"MyScale"}),"."]}),"\n",(0,r.jsxs)(o.li,{children:["If you're in search of a vector database that you can load from both the browser and server side, check out ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/closevector",children:"CloseVector"}),". It's a vector database that aims to be cross-platform."]}),"\n",(0,r.jsxs)(o.li,{children:["If you're looking for a scalable, open-source columnar database with excellent performance for analytical queries, then consider ",(0,r.jsx)(o.a,{href:"/docs/integrations/vectorstores/clickhouse",children:"ClickHouse"}),"."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsx)(o.p,{children:"You've now learned how to load data into a vectorstore."}),"\n",(0,r.jsxs)(o.p,{children:["Next, check out the ",(0,r.jsx)(o.a,{href:"/docs/tutorials/rag",children:"full tutorial on retrieval-augmented generation"}),"."]})]})}function x(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},73712:e=>{e.exports={content:'import { MemoryVectorStore } from "langchain/vectorstores/memory";\nimport { OpenAIEmbeddings } from "@langchain/openai";\n\nconst vectorStore = await MemoryVectorStore.fromTexts(\n  ["Hello world", "Bye bye", "hello nice world"],\n  [{ id: 2 }, { id: 1 }, { id: 3 }],\n  new OpenAIEmbeddings()\n);\n\nconst resultOne = await vectorStore.similaritySearch("hello world", 1);\nconsole.log(resultOne);\n\n/*\n  [\n    Document {\n      pageContent: "Hello world",\n      metadata: { id: 2 }\n    }\n  ]\n*/\n',imports:[{local:"MemoryVectorStore",imported:"MemoryVectorStore",source:"langchain/vectorstores/memory"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"}]}},7752:e=>{e.exports={content:'import { MemoryVectorStore } from "langchain/vectorstores/memory";\nimport { OpenAIEmbeddings } from "@langchain/openai";\nimport { TextLoader } from "langchain/document_loaders/fs/text";\n\n// Create docs with a loader\nconst loader = new TextLoader("src/document_loaders/example_data/example.txt");\nconst docs = await loader.load();\n\n// Load the docs into the vector store\nconst vectorStore = await MemoryVectorStore.fromDocuments(\n  docs,\n  new OpenAIEmbeddings()\n);\n\n// Search for the most similar document\nconst resultOne = await vectorStore.similaritySearch("hello world", 1);\n\nconsole.log(resultOne);\n\n/*\n  [\n    Document {\n      pageContent: "Hello world",\n      metadata: { id: 2 }\n    }\n  ]\n*/\n',imports:[{local:"MemoryVectorStore",imported:"MemoryVectorStore",source:"langchain/vectorstores/memory"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"},{local:"TextLoader",imported:"TextLoader",source:"langchain/document_loaders/fs/text"}]}}}]);