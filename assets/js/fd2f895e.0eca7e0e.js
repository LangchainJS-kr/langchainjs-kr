(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2714],{79123:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>f,frontMatter:()=>m,metadata:()=>g,toc:()=>u});var i=t(74848),s=t(28453),a=t(64428),o=t(72795),d=t.n(o),c=t(24507),r=t.n(c),l=t(78847);const m={sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},h="How to cache embedding results",g={id:"how_to/caching_embeddings",title:"How to cache embedding results",description:"This guide assumes familiarity with the following concepts:",source:"@site/docs/how_to/caching_embeddings.mdx",sourceDirName:"how_to",slug:"/how_to/caching_embeddings",permalink:"/docs/how_to/caching_embeddings",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/caching_embeddings.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},p={},u=[{value:"In-memory",id:"in-memory",level:2},...l.toc,{value:"Redis",id:"redis",level:2},{value:"Next steps",id:"next-steps",level:2}];function b(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"how-to-cache-embedding-results",children:"How to cache embedding results"}),"\n",(0,i.jsxs)(n.admonition,{title:"Prerequisites",type:"info",children:[(0,i.jsx)(n.p,{children:"This guide assumes familiarity with the following concepts:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/concepts/#embedding-models",children:"Embeddings"})}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:"Embeddings can be stored or temporarily cached to avoid needing to recompute them."}),"\n",(0,i.jsxs)(n.p,{children:["Caching embeddings can be done using a ",(0,i.jsx)(n.code,{children:"CacheBackedEmbeddings"})," instance."]}),"\n",(0,i.jsx)(n.p,{children:"The cache backed embedder is a wrapper around an embedder that caches embeddings in a key-value store."}),"\n",(0,i.jsx)(n.p,{children:"The text is hashed and the hash is used as the key in the cache."}),"\n",(0,i.jsxs)(n.p,{children:["The main supported way to initialized a ",(0,i.jsx)(n.code,{children:"CacheBackedEmbeddings"})," is the ",(0,i.jsx)(n.code,{children:"fromBytesStore"})," static method. This takes in the following parameters:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"underlyingEmbeddings"}),": The embeddings model to use."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"documentEmbeddingCache"}),": The cache to use for storing document embeddings."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"namespace"}),': (optional, defaults to "") The namespace to use for document cache. This namespace is used to avoid collisions with other caches. For example, you could set it to the name of the embedding model used.']}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Attention:"})," Be sure to set the namespace parameter to avoid collisions of the same text embedded using different embeddings models."]}),"\n",(0,i.jsx)(n.h2,{id:"in-memory",children:"In-memory"}),"\n","\n",(0,i.jsx)(l.default,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai @langchain/community\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here's a basic test example with an in memory cache. This type of cache is primarily useful for unit tests or prototyping.\nDo not use this cache if you need to actually store the embeddings for an extended period of time:"}),"\n",(0,i.jsx)(a.A,{language:"typescript",children:d()}),"\n",(0,i.jsx)(n.h2,{id:"redis",children:"Redis"}),"\n",(0,i.jsx)(n.p,{children:"Here's an example with a Redis cache."}),"\n",(0,i.jsxs)(n.p,{children:["You'll first need to install ",(0,i.jsx)(n.code,{children:"ioredis"})," as a peer dependency and pass in an initialized client:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install ioredis\n"})}),"\n",(0,i.jsx)(a.A,{language:"typescript",children:r()}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsx)(n.p,{children:"You've now learned how to use caching to avoid recomputing embeddings."}),"\n",(0,i.jsxs)(n.p,{children:["Next, check out the ",(0,i.jsx)(n.a,{href:"/docs/tutorials/rag",children:"full tutorial on retrieval-augmented generation"}),"."]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},72795:e=>{e.exports={content:'import { OpenAIEmbeddings } from "@langchain/openai";\nimport { CacheBackedEmbeddings } from "langchain/embeddings/cache_backed";\nimport { InMemoryStore } from "@langchain/core/stores";\nimport { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";\nimport { FaissStore } from "@langchain/community/vectorstores/faiss";\nimport { TextLoader } from "langchain/document_loaders/fs/text";\n\nconst underlyingEmbeddings = new OpenAIEmbeddings();\n\nconst inMemoryStore = new InMemoryStore();\n\nconst cacheBackedEmbeddings = CacheBackedEmbeddings.fromBytesStore(\n  underlyingEmbeddings,\n  inMemoryStore,\n  {\n    namespace: underlyingEmbeddings.modelName,\n  }\n);\n\nconst loader = new TextLoader("./state_of_the_union.txt");\nconst rawDocuments = await loader.load();\nconst splitter = new RecursiveCharacterTextSplitter({\n  chunkSize: 1000,\n  chunkOverlap: 0,\n});\nconst documents = await splitter.splitDocuments(rawDocuments);\n\n// No keys logged yet since the cache is empty\nfor await (const key of inMemoryStore.yieldKeys()) {\n  console.log(key);\n}\n\nlet time = Date.now();\nconst vectorstore = await FaissStore.fromDocuments(\n  documents,\n  cacheBackedEmbeddings\n);\nconsole.log(`Initial creation time: ${Date.now() - time}ms`);\n/*\n  Initial creation time: 1905ms\n*/\n\n// The second time is much faster since the embeddings for the input docs have already been added to the cache\ntime = Date.now();\nconst vectorstore2 = await FaissStore.fromDocuments(\n  documents,\n  cacheBackedEmbeddings\n);\nconsole.log(`Cached creation time: ${Date.now() - time}ms`);\n/*\n  Cached creation time: 8ms\n*/\n\n// Many keys logged with hashed values\nconst keys = [];\nfor await (const key of inMemoryStore.yieldKeys()) {\n  keys.push(key);\n}\n\nconsole.log(keys.slice(0, 5));\n/*\n  [\n    \'text-embedding-ada-002ea9b59e760e64bec6ee9097b5a06b0d91cb3ab64\',\n    \'text-embedding-ada-0023b424f5ed1271a6f5601add17c1b58b7c992772e\',\n    \'text-embedding-ada-002fec5d021611e1527297c5e8f485876ea82dcb111\',\n    \'text-embedding-ada-00262f72e0c2d711c6b861714ee624b28af639fdb13\',\n    \'text-embedding-ada-00262d58882330038a4e6e25ea69a938f4391541874\'\n  ]\n*/\n',imports:[{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"},{local:"CacheBackedEmbeddings",imported:"CacheBackedEmbeddings",source:"langchain/embeddings/cache_backed"},{local:"InMemoryStore",imported:"InMemoryStore",source:"@langchain/core/stores"},{local:"RecursiveCharacterTextSplitter",imported:"RecursiveCharacterTextSplitter",source:"@langchain/textsplitters"},{local:"FaissStore",imported:"FaissStore",source:"@langchain/community/vectorstores/faiss"},{local:"TextLoader",imported:"TextLoader",source:"langchain/document_loaders/fs/text"}]}},24507:e=>{e.exports={content:'import { Redis } from "ioredis";\n\nimport { OpenAIEmbeddings } from "@langchain/openai";\nimport { CacheBackedEmbeddings } from "langchain/embeddings/cache_backed";\nimport { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";\nimport { FaissStore } from "@langchain/community/vectorstores/faiss";\nimport { TextLoader } from "langchain/document_loaders/fs/text";\nimport { RedisByteStore } from "@langchain/community/storage/ioredis";\n\nconst underlyingEmbeddings = new OpenAIEmbeddings();\n\n// Requires a Redis instance running at http://localhost:6379.\n// See https://github.com/redis/ioredis for full config options.\nconst redisClient = new Redis();\nconst redisStore = new RedisByteStore({\n  client: redisClient,\n});\n\nconst cacheBackedEmbeddings = CacheBackedEmbeddings.fromBytesStore(\n  underlyingEmbeddings,\n  redisStore,\n  {\n    namespace: underlyingEmbeddings.modelName,\n  }\n);\n\nconst loader = new TextLoader("./state_of_the_union.txt");\nconst rawDocuments = await loader.load();\nconst splitter = new RecursiveCharacterTextSplitter({\n  chunkSize: 1000,\n  chunkOverlap: 0,\n});\nconst documents = await splitter.splitDocuments(rawDocuments);\n\nlet time = Date.now();\nconst vectorstore = await FaissStore.fromDocuments(\n  documents,\n  cacheBackedEmbeddings\n);\nconsole.log(`Initial creation time: ${Date.now() - time}ms`);\n/*\n  Initial creation time: 1808ms\n*/\n\n// The second time is much faster since the embeddings for the input docs have already been added to the cache\ntime = Date.now();\nconst vectorstore2 = await FaissStore.fromDocuments(\n  documents,\n  cacheBackedEmbeddings\n);\nconsole.log(`Cached creation time: ${Date.now() - time}ms`);\n/*\n  Cached creation time: 33ms\n*/\n\n// Many keys logged with hashed values\nconst keys = [];\nfor await (const key of redisStore.yieldKeys()) {\n  keys.push(key);\n}\n\nconsole.log(keys.slice(0, 5));\n/*\n  [\n    \'text-embedding-ada-002fa9ac80e1bf226b7b4dfc03ea743289a65a727b2\',\n    \'text-embedding-ada-0027dbf9c4b36e12fe1768300f145f4640342daaf22\',\n    \'text-embedding-ada-002ea9b59e760e64bec6ee9097b5a06b0d91cb3ab64\',\n    \'text-embedding-ada-002fec5d021611e1527297c5e8f485876ea82dcb111\',\n    \'text-embedding-ada-002c00f818c345da13fed9f2697b4b689338143c8c7\'\n  ]\n*/\n',imports:[{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"},{local:"CacheBackedEmbeddings",imported:"CacheBackedEmbeddings",source:"langchain/embeddings/cache_backed"},{local:"RecursiveCharacterTextSplitter",imported:"RecursiveCharacterTextSplitter",source:"@langchain/textsplitters"},{local:"FaissStore",imported:"FaissStore",source:"@langchain/community/vectorstores/faiss"},{local:"TextLoader",imported:"TextLoader",source:"langchain/document_loaders/fs/text"},{local:"RedisByteStore",imported:"RedisByteStore",source:"@langchain/community/storage/ioredis"}]}}}]);