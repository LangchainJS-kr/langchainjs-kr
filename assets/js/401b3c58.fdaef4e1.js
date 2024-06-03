(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6475],{13016:(e,n,r)=>{"use strict";r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>A,frontMatter:()=>u,metadata:()=>m,toc:()=>g});var t=r(74848),a=r(28453),o=r(78847),s=r(64428),i=r(81469),c=r.n(i),h=r(5922),l=r.n(h);const u={},d="Azure AI Search",m={id:"integrations/vectorstores/azure_aisearch",title:"Azure AI Search",description:"Azure AI Search (formerly known as Azure Search and Azure Cognitive Search) is a distributed, RESTful search engine optimized for speed and relevance on production-scale workloads on Azure. It supports also vector search using the k-nearest neighbor (kNN) algorithm and also semantic search.",source:"@site/docs/integrations/vectorstores/azure_aisearch.mdx",sourceDirName:"integrations/vectorstores",slug:"/integrations/vectorstores/azure_aisearch",permalink:"/docs/integrations/vectorstores/azure_aisearch",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/vectorstores/azure_aisearch.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Astra DB",permalink:"/docs/integrations/vectorstores/astradb"},next:{title:"Azure Cosmos DB",permalink:"/docs/integrations/vectorstores/azure_cosmosdb"}},p={},g=[{value:"Setup",id:"setup",level:2},...o.toc,{value:"About hybrid search",id:"about-hybrid-search",level:2},{value:"Example: index docs, vector search and LLM integration",id:"example-index-docs-vector-search-and-llm-integration",level:2}];function f(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"azure-ai-search",children:"Azure AI Search"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://azure.microsoft.com/products/ai-services/ai-search",children:"Azure AI Search"})," (formerly known as Azure Search and Azure Cognitive Search) is a distributed, RESTful search engine optimized for speed and relevance on production-scale workloads on Azure. It supports also vector search using the ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Nearest_neighbor_search",children:"k-nearest neighbor"})," (kNN) algorithm and also ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/search/semantic-search-overview",children:"semantic search"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This vector store integration supports full text search, vector search and ",(0,t.jsx)(n.a,{href:"https://techcommunity.microsoft.com/t5/ai-azure-ai-services-blog/azure-cognitive-search-outperforming-vector-search-with-hybrid/ba-p/3929167",children:"hybrid search for best ranking performance"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Learn how to leverage the vector search capabilities of Azure AI Search from ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/search/vector-search-overview",children:"this page"}),". If you don't have an Azure account, you can ",(0,t.jsx)(n.a,{href:"https://azure.microsoft.com/free/",children:"create a free account"})," to get started."]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.p,{children:["You'll first need to install the ",(0,t.jsx)(n.code,{children:"@azure/search-documents"})," SDK and the ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@langchain/community",children:(0,t.jsx)(n.code,{children:"@langchain/community"})})," package:"]}),"\n","\n",(0,t.jsx)(o.default,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install -S @langchain/community @azure/search-documents\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You'll also need to have an Azure AI Search instance running. You can deploy a free version on Azure Portal without any cost, following ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/search/search-create-service-portal",children:"this guide"}),"."]}),"\n",(0,t.jsx)(n.p,{children:'Once you have your instance running, make sure you have the endpoint and the admin key (query keys can be used only to search document, not to index, update or delete). The endpoint is the URL of your instance which you can find in the Azure Portal, under the "Overview" section of your instance. The admin key can be found under the "Keys" section of your instance. Then you need to set the following environment variables:'}),"\n","\n",(0,t.jsx)(s.A,{language:"text",children:c()}),"\n",(0,t.jsx)(n.h2,{id:"about-hybrid-search",children:"About hybrid search"}),"\n",(0,t.jsxs)(n.p,{children:["Hybrid search is a feature that combines the strengths of full text search and vector search to provide the best ranking performance. It's enabled by default in Azure AI Search vector stores, but you can select a different search query type by setting the ",(0,t.jsx)(n.code,{children:"search.type"})," property when creating the vector store."]}),"\n",(0,t.jsxs)(n.p,{children:["You can read more about hybrid search and how it may improve your search results in the ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/search/hybrid-search-overview",children:"official documentation"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In some scenarios like retrieval-augmented generation (RAG), you may want to enable ",(0,t.jsx)(n.strong,{children:"semantic ranking"})," in addition to hybrid search to improve the relevance of the search results. You can enable semantic ranking by setting the ",(0,t.jsx)(n.code,{children:"search.type"})," property to ",(0,t.jsx)(n.code,{children:"AzureAISearchQueryType.SemanticHybrid"})," when creating the vector store.\nNote that semantic ranking capabilities are only available in the Basic and higher pricing tiers, and subject to ",(0,t.jsx)(n.a,{href:"https://azure.microsoft.com/en-us/explore/global-infrastructure/products-by-region/?products=search",children:"regional availability"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can read more about the performance of using semantic ranking with hybrid search in ",(0,t.jsx)(n.a,{href:"https://techcommunity.microsoft.com/t5/ai-azure-ai-services-blog/azure-cognitive-search-outperforming-vector-search-with-hybrid/ba-p/3929167",children:"this blog post"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"example-index-docs-vector-search-and-llm-integration",children:"Example: index docs, vector search and LLM integration"}),"\n",(0,t.jsx)(n.p,{children:"Below is an example that indexes documents from a file in Azure AI Search, runs a hybrid search query, and finally uses a chain to answer a question in natural language based on the retrieved documents."}),"\n","\n",(0,t.jsx)(s.A,{language:"typescript",children:l()})]})}function A(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},5922:e=>{e.exports={content:'import {\n  AzureAISearchVectorStore,\n  AzureAISearchQueryType,\n} from "@langchain/community/vectorstores/azure_aisearch";\nimport { ChatPromptTemplate } from "@langchain/core/prompts";\nimport { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";\nimport { createStuffDocumentsChain } from "langchain/chains/combine_documents";\nimport { createRetrievalChain } from "langchain/chains/retrieval";\nimport { TextLoader } from "langchain/document_loaders/fs/text";\nimport { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";\n\n// Load documents from file\nconst loader = new TextLoader("./state_of_the_union.txt");\nconst rawDocuments = await loader.load();\nconst splitter = new RecursiveCharacterTextSplitter({\n  chunkSize: 1000,\n  chunkOverlap: 0,\n});\nconst documents = await splitter.splitDocuments(rawDocuments);\n\n// Create Azure AI Search vector store\nconst store = await AzureAISearchVectorStore.fromDocuments(\n  documents,\n  new OpenAIEmbeddings(),\n  {\n    search: {\n      type: AzureAISearchQueryType.SimilarityHybrid,\n    },\n  }\n);\n\n// The first time you run this, the index will be created.\n// You may need to wait a bit for the index to be created before you can perform\n// a search, or you can create the index manually beforehand.\n\n// Performs a similarity search\nconst resultDocuments = await store.similaritySearch(\n  "What did the president say about Ketanji Brown Jackson?"\n);\n\nconsole.log("Similarity search results:");\nconsole.log(resultDocuments[0].pageContent);\n/*\n  Tonight. I call on the Senate to: Pass the Freedom to Vote Act. Pass the John Lewis Voting Rights Act. And while you\u2019re at it, pass the Disclose Act so Americans can know who is funding our elections. \n\n  Tonight, I\u2019d like to honor someone who has dedicated his life to serve this country: Justice Stephen Breyer\u2014an Army veteran, Constitutional scholar, and retiring Justice of the United States Supreme Court. Justice Breyer, thank you for your service. \n\n  One of the most serious constitutional responsibilities a President has is nominating someone to serve on the United States Supreme Court. \n\n  And I did that 4 days ago, when I nominated Circuit Court of Appeals Judge Ketanji Brown Jackson. One of our nation\u2019s top legal minds, who will continue Justice Breyer\u2019s legacy of excellence.\n*/\n\n// Use the store as part of a chain\nconst model = new ChatOpenAI({ model: "gpt-3.5-turbo-1106" });\nconst questionAnsweringPrompt = ChatPromptTemplate.fromMessages([\n  [\n    "system",\n    "Answer the user\'s questions based on the below context:\\n\\n{context}",\n  ],\n  ["human", "{input}"],\n]);\n\nconst combineDocsChain = await createStuffDocumentsChain({\n  llm: model,\n  prompt: questionAnsweringPrompt,\n});\n\nconst chain = await createRetrievalChain({\n  retriever: store.asRetriever(),\n  combineDocsChain,\n});\n\nconst response = await chain.invoke({\n  input: "What is the president\'s top priority regarding prices?",\n});\n\nconsole.log("Chain response:");\nconsole.log(response.answer);\n/*\n  The president\'s top priority is getting prices under control.\n*/\n',imports:[{local:"AzureAISearchVectorStore",imported:"AzureAISearchVectorStore",source:"@langchain/community/vectorstores/azure_aisearch"},{local:"AzureAISearchQueryType",imported:"AzureAISearchQueryType",source:"@langchain/community/vectorstores/azure_aisearch"},{local:"ChatPromptTemplate",imported:"ChatPromptTemplate",source:"@langchain/core/prompts"},{local:"ChatOpenAI",imported:"ChatOpenAI",source:"@langchain/openai"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"},{local:"createStuffDocumentsChain",imported:"createStuffDocumentsChain",source:"langchain/chains/combine_documents"},{local:"createRetrievalChain",imported:"createRetrievalChain",source:"langchain/chains/retrieval"},{local:"TextLoader",imported:"TextLoader",source:"langchain/document_loaders/fs/text"},{local:"RecursiveCharacterTextSplitter",imported:"RecursiveCharacterTextSplitter",source:"@langchain/textsplitters"}]}},81469:e=>{e.exports={content:"# Azure AI Search connection settings\nAZURE_AISEARCH_ENDPOINT=\nAZURE_AISEARCH_KEY=\n\n# If you're using Azure OpenAI API, you'll need to set these variables\nAZURE_OPENAI_API_KEY=\nAZURE_OPENAI_API_INSTANCE_NAME=\nAZURE_OPENAI_API_DEPLOYMENT_NAME=\nAZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME=\nAZURE_OPENAI_API_VERSION=\n\n# Or you can use the OpenAI API directly\nOPENAI_API_KEY=\n",imports:[]}}}]);