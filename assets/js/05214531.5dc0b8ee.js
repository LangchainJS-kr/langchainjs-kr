(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8140],{30436:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>v,default:()=>b,frontMatter:()=>u,metadata:()=>w,toc:()=>y});var a=t(74848),i=t(28453),o=t(64428),s=t(78847),r=t(94922),l=t.n(r),c=t(93084),d=t.n(c),p=t(62154),h=t.n(p),m=t(46311),g=t.n(m);const u={hide_table_of_contents:!0},v="Weaviate",w={id:"integrations/vectorstores/weaviate",title:"Weaviate",description:"Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering.",source:"@site/docs/integrations/vectorstores/weaviate.mdx",sourceDirName:"integrations/vectorstores",slug:"/integrations/vectorstores/weaviate",permalink:"/docs/integrations/vectorstores/weaviate",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/vectorstores/weaviate.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"integrations",previous:{title:"Voy",permalink:"/docs/integrations/vectorstores/voy"},next:{title:"Xata",permalink:"/docs/integrations/vectorstores/xata"}},f={},y=[{value:"Setup",id:"setup",level:2},...s.toc,{value:"Usage, insert documents",id:"usage-insert-documents",level:2},{value:"Usage, query documents",id:"usage-query-documents",level:2},{value:"Usage, maximal marginal relevance",id:"usage-maximal-marginal-relevance",level:2},{value:"Usage, delete documents",id:"usage-delete-documents",level:2}];function x(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"weaviate",children:"Weaviate"}),"\n",(0,a.jsxs)(n.p,{children:["Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering.\nLangChain connects to Weaviate via the ",(0,a.jsx)(n.code,{children:"weaviate-ts-client"})," package, the official Typescript client for Weaviate."]}),"\n",(0,a.jsx)(n.p,{children:"LangChain inserts vectors directly to Weaviate, and queries Weaviate for the nearest neighbors of a given vector, so that you can use all the LangChain Embeddings integrations with Weaviate."}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsxs)(n.p,{children:["Weaviate has their own standalone integration package with LangChain, accessible via ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@langchain/weaviate",children:(0,a.jsx)(n.code,{children:"@langchain/weaviate"})})," on NPM!"]}),"\n","\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/weaviate @langchain/openai @langchain/community\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You'll need to run Weaviate either locally or on a server, see ",(0,a.jsx)(n.a,{href:"https://weaviate.io/developers/weaviate/installation",children:"the Weaviate documentation"})," for more information."]}),"\n",(0,a.jsx)(n.h2,{id:"usage-insert-documents",children:"Usage, insert documents"}),"\n","\n",(0,a.jsx)(o.A,{language:"typescript",children:l()}),"\n",(0,a.jsx)(n.h2,{id:"usage-query-documents",children:"Usage, query documents"}),"\n","\n",(0,a.jsx)(o.A,{language:"typescript",children:d()}),"\n",(0,a.jsx)(n.h2,{id:"usage-maximal-marginal-relevance",children:"Usage, maximal marginal relevance"}),"\n","\n",(0,a.jsx)(n.p,{children:"You can use maximal marginal relevance search, which optimizes for similarity to the query AND diversity."}),"\n",(0,a.jsx)(o.A,{language:"typescript",children:h()}),"\n",(0,a.jsx)(n.h2,{id:"usage-delete-documents",children:"Usage, delete documents"}),"\n","\n",(0,a.jsx)(o.A,{language:"typescript",children:g()})]})}function b(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},46311:e=>{e.exports={content:'/* eslint-disable @typescript-eslint/no-explicit-any */\nimport weaviate, { ApiKey } from "weaviate-ts-client";\nimport { WeaviateStore } from "@langchain/weaviate";\nimport { OpenAIEmbeddings } from "@langchain/openai";\n\nexport async function run() {\n  // Something wrong with the weaviate-ts-client types, so we need to disable\n  const client = (weaviate as any).client({\n    scheme: process.env.WEAVIATE_SCHEME || "https",\n    host: process.env.WEAVIATE_HOST || "localhost",\n    apiKey: new ApiKey(process.env.WEAVIATE_API_KEY || "default"),\n  });\n\n  // Create a store for an existing index\n  const store = await WeaviateStore.fromExistingIndex(new OpenAIEmbeddings(), {\n    client,\n    indexName: "Test",\n    metadataKeys: ["foo"],\n  });\n\n  const docs = [{ pageContent: "see ya!", metadata: { foo: "bar" } }];\n\n  // Also supports an additional {ids: []} parameter for upsertion\n  const ids = await store.addDocuments(docs);\n\n  // Search the index without any filters\n  const results = await store.similaritySearch("see ya!", 1);\n  console.log(results);\n  /*\n  [ Document { pageContent: \'see ya!\', metadata: { foo: \'bar\' } } ]\n  */\n\n  // Delete documents with ids\n  await store.delete({ ids });\n\n  const results2 = await store.similaritySearch("see ya!", 1);\n  console.log(results2);\n  /*\n  []\n  */\n\n  const docs2 = [\n    { pageContent: "hello world", metadata: { foo: "bar" } },\n    { pageContent: "hi there", metadata: { foo: "baz" } },\n    { pageContent: "how are you", metadata: { foo: "qux" } },\n    { pageContent: "hello world", metadata: { foo: "bar" } },\n    { pageContent: "bye now", metadata: { foo: "bar" } },\n  ];\n\n  await store.addDocuments(docs2);\n\n  const results3 = await store.similaritySearch("hello world", 1);\n  console.log(results3);\n  /*\n  [ Document { pageContent: \'hello world\', metadata: { foo: \'bar\' } } ]\n  */\n\n  // delete documents with filter\n  await store.delete({\n    filter: {\n      where: {\n        operator: "Equal",\n        path: ["foo"],\n        valueText: "bar",\n      },\n    },\n  });\n\n  const results4 = await store.similaritySearch("hello world", 1, {\n    where: {\n      operator: "Equal",\n      path: ["foo"],\n      valueText: "bar",\n    },\n  });\n  console.log(results4);\n  /*\n  []\n  */\n}\n',imports:[{local:"WeaviateStore",imported:"WeaviateStore",source:"@langchain/weaviate"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"}]}},94922:e=>{e.exports={content:'/* eslint-disable @typescript-eslint/no-explicit-any */\nimport weaviate, { ApiKey } from "weaviate-ts-client";\nimport { WeaviateStore } from "@langchain/weaviate";\nimport { OpenAIEmbeddings } from "@langchain/openai";\n\nexport async function run() {\n  // Something wrong with the weaviate-ts-client types, so we need to disable\n  const client = (weaviate as any).client({\n    scheme: process.env.WEAVIATE_SCHEME || "https",\n    host: process.env.WEAVIATE_HOST || "localhost",\n    apiKey: new ApiKey(process.env.WEAVIATE_API_KEY || "default"),\n  });\n\n  // Create a store and fill it with some texts + metadata\n  await WeaviateStore.fromTexts(\n    ["hello world", "hi there", "how are you", "bye now"],\n    [{ foo: "bar" }, { foo: "baz" }, { foo: "qux" }, { foo: "bar" }],\n    new OpenAIEmbeddings(),\n    {\n      client,\n      indexName: "Test",\n      textKey: "text",\n      metadataKeys: ["foo"],\n    }\n  );\n}\n',imports:[{local:"WeaviateStore",imported:"WeaviateStore",source:"@langchain/weaviate"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"}]}},62154:e=>{e.exports={content:'/* eslint-disable @typescript-eslint/no-explicit-any */\nimport weaviate, { ApiKey } from "weaviate-ts-client";\nimport { WeaviateStore } from "@langchain/weaviate";\nimport { OpenAIEmbeddings } from "@langchain/openai";\n\nexport async function run() {\n  // Something wrong with the weaviate-ts-client types, so we need to disable\n  const client = (weaviate as any).client({\n    scheme: process.env.WEAVIATE_SCHEME || "https",\n    host: process.env.WEAVIATE_HOST || "localhost",\n    apiKey: new ApiKey(process.env.WEAVIATE_API_KEY || "default"),\n  });\n\n  // Create a store for an existing index\n  const store = await WeaviateStore.fromExistingIndex(new OpenAIEmbeddings(), {\n    client,\n    indexName: "Test",\n    metadataKeys: ["foo"],\n  });\n\n  const resultOne = await store.maxMarginalRelevanceSearch("Hello world", {\n    k: 1,\n  });\n\n  console.log(resultOne);\n}\n',imports:[{local:"WeaviateStore",imported:"WeaviateStore",source:"@langchain/weaviate"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"}]}},93084:e=>{e.exports={content:'/* eslint-disable @typescript-eslint/no-explicit-any */\nimport weaviate, { ApiKey } from "weaviate-ts-client";\nimport { WeaviateStore } from "@langchain/weaviate";\nimport { OpenAIEmbeddings } from "@langchain/openai";\n\nexport async function run() {\n  // Something wrong with the weaviate-ts-client types, so we need to disable\n  const client = (weaviate as any).client({\n    scheme: process.env.WEAVIATE_SCHEME || "https",\n    host: process.env.WEAVIATE_HOST || "localhost",\n    apiKey: new ApiKey(process.env.WEAVIATE_API_KEY || "default"),\n  });\n\n  // Create a store for an existing index\n  const store = await WeaviateStore.fromExistingIndex(new OpenAIEmbeddings(), {\n    client,\n    indexName: "Test",\n    metadataKeys: ["foo"],\n  });\n\n  // Search the index without any filters\n  const results = await store.similaritySearch("hello world", 1);\n  console.log(results);\n  /*\n  [ Document { pageContent: \'hello world\', metadata: { foo: \'bar\' } } ]\n  */\n\n  // Search the index with a filter, in this case, only return results where\n  // the "foo" metadata key is equal to "baz", see the Weaviate docs for more\n  // https://weaviate.io/developers/weaviate/api/graphql/filters\n  const results2 = await store.similaritySearch("hello world", 1, {\n    where: {\n      operator: "Equal",\n      path: ["foo"],\n      valueText: "baz",\n    },\n  });\n  console.log(results2);\n  /*\n  [ Document { pageContent: \'hi there\', metadata: { foo: \'baz\' } } ]\n  */\n}\n',imports:[{local:"WeaviateStore",imported:"WeaviateStore",source:"@langchain/weaviate"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"}]}}}]);