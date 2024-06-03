(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8818,65],{40768:(e,n,o)=>{"use strict";o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>A,frontMatter:()=>m,metadata:()=>p,toc:()=>g});var t=o(74848),s=o(28453),r=o(78847),a=o(64428),i=o(37709),c=o.n(i),l=o(46202),u=o.n(l);const m={},d="Azure Cosmos DB",p={id:"integrations/vectorstores/azure_cosmosdb",title:"Azure Cosmos DB",description:"Azure Cosmos DB for MongoDB vCore makes it easy to create a database with full native MongoDB support. You can apply your MongoDB experience and continue to use your favorite MongoDB drivers, SDKs, and tools by pointing your application to the API for MongoDB vCore account\u2019s connection string. Use vector search in Azure Cosmos DB for MongoDB vCore to seamlessly integrate your AI-based applications with your data that\u2019s stored in Azure Cosmos DB.",source:"@site/docs/integrations/vectorstores/azure_cosmosdb.mdx",sourceDirName:"integrations/vectorstores",slug:"/integrations/vectorstores/azure_cosmosdb",permalink:"/docs/integrations/vectorstores/azure_cosmosdb",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/vectorstores/azure_cosmosdb.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Azure AI Search",permalink:"/docs/integrations/vectorstores/azure_aisearch"},next:{title:"Cassandra",permalink:"/docs/integrations/vectorstores/cassandra"}},h={},g=[{value:"Setup",id:"setup",level:2},...r.toc,{value:"Example",id:"example",level:2}];function f(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"azure-cosmos-db",children:"Azure Cosmos DB"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/cosmos-db/mongodb/vcore/",children:"Azure Cosmos DB for MongoDB vCore"})," makes it easy to create a database with full native MongoDB support. You can apply your MongoDB experience and continue to use your favorite MongoDB drivers, SDKs, and tools by pointing your application to the API for MongoDB vCore account\u2019s connection string. Use vector search in Azure Cosmos DB for MongoDB vCore to seamlessly integrate your AI-based applications with your data that\u2019s stored in Azure Cosmos DB."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Azure Cosmos DB for MongoDB vCore provides developers with a fully managed MongoDB-compatible database service for building modern applications with a familiar architecture."}),"\n",(0,t.jsxs)(n.p,{children:["Learn how to leverage the vector search capabilities of Azure Cosmos DB for MongoDB vCore from ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/cosmos-db/mongodb/vcore/vector-search",children:"this page"}),". If you don't have an Azure account, you can ",(0,t.jsx)(n.a,{href:"https://azure.microsoft.com/free/",children:"create a free account"})," to get started."]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.p,{children:["You'll first need to install the ",(0,t.jsx)(n.code,{children:"mongodb"})," SDK and the ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@langchain/community",children:(0,t.jsx)(n.code,{children:"@langchain/community"})})," package:"]}),"\n","\n",(0,t.jsx)(r.default,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community mongodb\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You'll also need to have an Azure Cosmos DB for MongoDB vCore instance running. You can deploy a free version on Azure Portal without any cost, following ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/cosmos-db/mongodb/vcore/quickstart-portal",children:"this guide"}),"."]}),"\n",(0,t.jsx)(n.p,{children:'Once you have your instance running, make sure you have the connection string and the admin key. You can find them in the Azure Portal, under the "Connection strings" section of your instance. Then you need to set the following environment variables:'}),"\n","\n",(0,t.jsx)(a.A,{language:"text",children:c()}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Below is an example that indexes documents from a file in Azure Cosmos DB for MongoDB vCore, runs a vector search query, and finally uses a chain to answer a question in natural language\nbased on the retrieved documents."}),"\n","\n",(0,t.jsx)(a.A,{language:"typescript",children:u()})]})}function A(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},78847:(e,n,o)=>{"use strict";o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=o(74848),s=o(28453);const r={},a=void 0,i={id:"mdx_components/integration_install_tooltip",title:"integration_install_tooltip",description:"See this section for general instructions on installing integration packages.",source:"@site/docs/mdx_components/integration_install_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/integration_install_tooltip",permalink:"/docs/mdx_components/integration_install_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/integration_install_tooltip.mdx",tags:[],version:"current",frontMatter:{}},c={},l=[];function u(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/docs/how_to/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},46202:e=>{e.exports={content:'import {\n  AzureCosmosDBVectorStore,\n  AzureCosmosDBSimilarityType,\n} from "@langchain/community/vectorstores/azure_cosmosdb";\nimport { ChatPromptTemplate } from "@langchain/core/prompts";\nimport { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";\nimport { createStuffDocumentsChain } from "langchain/chains/combine_documents";\nimport { createRetrievalChain } from "langchain/chains/retrieval";\nimport { TextLoader } from "langchain/document_loaders/fs/text";\nimport { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";\n\n// Load documents from file\nconst loader = new TextLoader("./state_of_the_union.txt");\nconst rawDocuments = await loader.load();\nconst splitter = new RecursiveCharacterTextSplitter({\n  chunkSize: 1000,\n  chunkOverlap: 0,\n});\nconst documents = await splitter.splitDocuments(rawDocuments);\n\n// Create Azure Cosmos DB vector store\nconst store = await AzureCosmosDBVectorStore.fromDocuments(\n  documents,\n  new OpenAIEmbeddings(),\n  {\n    databaseName: "langchain",\n    collectionName: "documents",\n    indexOptions: {\n      numLists: 100,\n      dimensions: 1536,\n      similarity: AzureCosmosDBSimilarityType.COS,\n    },\n  }\n);\n\n// Performs a similarity search\nconst resultDocuments = await store.similaritySearch(\n  "What did the president say about Ketanji Brown Jackson?"\n);\n\nconsole.log("Similarity search results:");\nconsole.log(resultDocuments[0].pageContent);\n/*\n  Tonight. I call on the Senate to: Pass the Freedom to Vote Act. Pass the John Lewis Voting Rights Act. And while you\u2019re at it, pass the Disclose Act so Americans can know who is funding our elections. \n\n  Tonight, I\u2019d like to honor someone who has dedicated his life to serve this country: Justice Stephen Breyer\u2014an Army veteran, Constitutional scholar, and retiring Justice of the United States Supreme Court. Justice Breyer, thank you for your service. \n\n  One of the most serious constitutional responsibilities a President has is nominating someone to serve on the United States Supreme Court. \n\n  And I did that 4 days ago, when I nominated Circuit Court of Appeals Judge Ketanji Brown Jackson. One of our nation\u2019s top legal minds, who will continue Justice Breyer\u2019s legacy of excellence.\n*/\n\n// Use the store as part of a chain\nconst model = new ChatOpenAI({ model: "gpt-3.5-turbo-1106" });\nconst questionAnsweringPrompt = ChatPromptTemplate.fromMessages([\n  [\n    "system",\n    "Answer the user\'s questions based on the below context:\\n\\n{context}",\n  ],\n  ["human", "{input}"],\n]);\n\nconst combineDocsChain = await createStuffDocumentsChain({\n  llm: model,\n  prompt: questionAnsweringPrompt,\n});\n\nconst chain = await createRetrievalChain({\n  retriever: store.asRetriever(),\n  combineDocsChain,\n});\n\nconst res = await chain.invoke({\n  input: "What is the president\'s top priority regarding prices?",\n});\n\nconsole.log("Chain response:");\nconsole.log(res.answer);\n/*\n  The president\'s top priority is getting prices under control.\n*/\n\n// Clean up\nawait store.delete();\n\nawait store.close();\n',imports:[{local:"AzureCosmosDBVectorStore",imported:"AzureCosmosDBVectorStore",source:"@langchain/community/vectorstores/azure_cosmosdb"},{local:"AzureCosmosDBSimilarityType",imported:"AzureCosmosDBSimilarityType",source:"@langchain/community/vectorstores/azure_cosmosdb"},{local:"ChatPromptTemplate",imported:"ChatPromptTemplate",source:"@langchain/core/prompts"},{local:"ChatOpenAI",imported:"ChatOpenAI",source:"@langchain/openai"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"},{local:"createStuffDocumentsChain",imported:"createStuffDocumentsChain",source:"langchain/chains/combine_documents"},{local:"createRetrievalChain",imported:"createRetrievalChain",source:"langchain/chains/retrieval"},{local:"TextLoader",imported:"TextLoader",source:"langchain/document_loaders/fs/text"},{local:"RecursiveCharacterTextSplitter",imported:"RecursiveCharacterTextSplitter",source:"@langchain/textsplitters"}]}},37709:e=>{e.exports={content:"# Azure CosmosDB for MongoDB vCore connection string\nAZURE_COSMOSDB_CONNECTION_STRING=\n\n# If you're using Azure OpenAI API, you'll need to set these variables\nAZURE_OPENAI_API_KEY=\nAZURE_OPENAI_API_INSTANCE_NAME=\nAZURE_OPENAI_API_DEPLOYMENT_NAME=\nAZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME=\nAZURE_OPENAI_API_VERSION=\n\n# Or you can use the OpenAI API directly\nOPENAI_API_KEY=\n",imports:[]}}}]);