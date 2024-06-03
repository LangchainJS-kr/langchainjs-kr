(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9835,7817],{57617:(e,n,o)=>{"use strict";o.r(n),o.d(n,{assets:()=>f,contentTitle:()=>A,default:()=>j,frontMatter:()=>m,metadata:()=>g,toc:()=>x});var r=o(74848),s=o(28453),a=o(64428),t=o(78847),i=o(95816),c=o.n(i),d=o(2280),l=o(98773),u=o.n(l),p=o(26706),h=o.n(p);const m={},A="Microsoft",g={id:"integrations/platforms/microsoft",title:"Microsoft",description:"All functionality related to Microsoft Azure and other Microsoft products.",source:"@site/docs/integrations/platforms/microsoft.mdx",sourceDirName:"integrations/platforms",slug:"/integrations/platforms/microsoft",permalink:"/docs/integrations/platforms/microsoft",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/platforms/microsoft.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Google",permalink:"/docs/integrations/platforms/google"},next:{title:"OpenAI",permalink:"/docs/integrations/platforms/openai"}},f={},x=[{value:"LLM",id:"llm",level:2},{value:"Azure OpenAI",id:"azure-openai",level:3},...t.toc,...d.toc,{value:"Text Embedding Models",id:"text-embedding-models",level:2},{value:"Azure OpenAI",id:"azure-openai-1",level:3},...d.toc,{value:"Chat Models",id:"chat-models",level:2},{value:"Azure OpenAI",id:"azure-openai-2",level:3},...d.toc,{value:"Vector stores",id:"vector-stores",level:2},{value:"Azure AI Search",id:"azure-ai-search",level:3},...t.toc,{value:"Azure Cosmos DB for MongoDB vCore",id:"azure-cosmos-db-for-mongodb-vcore",level:3},...t.toc,{value:"Document loaders",id:"document-loaders",level:2},{value:"Azure Blob Storage",id:"azure-blob-storage",level:3},...t.toc];function _(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"microsoft",children:"Microsoft"}),"\n",(0,r.jsxs)(n.p,{children:["All functionality related to ",(0,r.jsx)(n.code,{children:"Microsoft Azure"})," and other ",(0,r.jsx)(n.code,{children:"Microsoft"})," products."]}),"\n",(0,r.jsx)(n.h2,{id:"llm",children:"LLM"}),"\n",(0,r.jsx)(n.h3,{id:"azure-openai",children:"Azure OpenAI"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Microsoft_Azure",children:"Microsoft Azure"}),", often referred to as ",(0,r.jsx)(n.code,{children:"Azure"})," is a cloud computing platform run by ",(0,r.jsx)(n.code,{children:"Microsoft"}),", which offers access, management, and development of applications and services through global data centers. It provides a range of capabilities, including software as a service (SaaS), platform as a service (PaaS), and infrastructure as a service (IaaS). ",(0,r.jsx)(n.code,{children:"Microsoft Azure"})," supports many programming languages, tools, and frameworks, including Microsoft-specific and third-party software and systems."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://azure.microsoft.com/products/ai-services/openai-service/",children:"Azure OpenAI"})," is a cloud service to help you quickly develop generative AI experiences with a diverse set of prebuilt and curated models from OpenAI, Meta and beyond."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["LangChain.js supports integration with ",(0,r.jsx)(n.a,{href:"https://azure.microsoft.com/products/ai-services/openai-service/",children:"Azure OpenAI"})," using the new Azure integration in the ",(0,r.jsx)(n.a,{href:"https://github.com/openai/openai-node",children:"OpenAI SDK"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You can learn more about Azure OpenAI and its difference with the OpenAI API on ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/overview",children:"this page"}),". If you don't have an Azure account, you can ",(0,r.jsx)(n.a,{href:"https://azure.microsoft.com/free/",children:"create a free account"})," to get started."]}),"\n",(0,r.jsxs)(n.p,{children:["You'll need to have an Azure OpenAI instance deployed. You can deploy a version on Azure Portal following ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/how-to/create-resource?pivots=web-portal",children:"this guide"}),"."]}),"\n",(0,r.jsx)(n.p,{children:'Once you have your instance running, make sure you have the name of your instance and key. You can find the key in the Azure Portal, under the "Keys and Endpoint" section of your instance.'}),"\n",(0,r.jsx)(n.p,{children:"If you're using Node.js, you can define the following environment variables to use the service:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'AZURE_OPENAI_API_INSTANCE_NAME=<YOUR_INSTANCE_NAME>\nAZURE_OPENAI_API_DEPLOYMENT_NAME=<YOUR_DEPLOYMENT_NAME>\nAZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME=<YOUR_EMBEDDINGS_DEPLOYMENT_NAME>\nAZURE_OPENAI_API_KEY=<YOUR_KEY>\nAZURE_OPENAI_API_VERSION="2024-02-01"\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["You can find the list of supported API versions in the ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/reference",children:"Azure OpenAI documentation"}),"."]})}),"\n","\n",(0,r.jsx)(t.default,{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See a ",(0,r.jsx)(n.a,{href:"/docs/integrations/llms/azure",children:"usage example"}),"."]}),"\n","\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsx)(a.A,{language:"typescript",children:c()}),"\n",(0,r.jsx)(n.h2,{id:"text-embedding-models",children:"Text Embedding Models"}),"\n",(0,r.jsx)(n.h3,{id:"azure-openai-1",children:"Azure OpenAI"}),"\n",(0,r.jsxs)(n.p,{children:["See a ",(0,r.jsx)(n.a,{href:"/docs/integrations/text_embedding/azure_openai",children:"usage example"})]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsx)(a.A,{language:"typescript",children:u()}),"\n",(0,r.jsx)(n.h2,{id:"chat-models",children:"Chat Models"}),"\n",(0,r.jsx)(n.h3,{id:"azure-openai-2",children:"Azure OpenAI"}),"\n",(0,r.jsxs)(n.p,{children:["See a ",(0,r.jsx)(n.a,{href:"/docs/integrations/chat/azure",children:"usage example"})]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsx)(a.A,{language:"typescript",children:h()}),"\n",(0,r.jsx)(n.h2,{id:"vector-stores",children:"Vector stores"}),"\n",(0,r.jsx)(n.h3,{id:"azure-ai-search",children:"Azure AI Search"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://azure.microsoft.com/products/ai-services/ai-search",children:"Azure AI Search"})," (formerly known as Azure Search and Azure Cognitive Search) is a distributed, RESTful search engine optimized for speed and relevance on production-scale workloads on Azure. It supports also vector search using the ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Nearest_neighbor_search",children:"k-nearest neighbor"})," (kNN) algorithm and also ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/azure/search/semantic-search-overview",children:"semantic search"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.default,{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install -S @langchain/community @azure/search-documents\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See a ",(0,r.jsx)(n.a,{href:"/docs/integrations/vectorstores/azure_aisearch",children:"usage example"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { AzureAISearchVectorStore } from "@langchain/community/vectorstores/azure_aisearch";\n'})}),"\n",(0,r.jsx)(n.h3,{id:"azure-cosmos-db-for-mongodb-vcore",children:"Azure Cosmos DB for MongoDB vCore"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/cosmos-db/mongodb/vcore/",children:"Azure Cosmos DB for MongoDB vCore"})," makes it easy to create a database with full native MongoDB support. You can apply your MongoDB experience and continue to use your favorite MongoDB drivers, SDKs, and tools by pointing your application to the API for MongoDB vCore account\u2019s connection string. Use vector search in Azure Cosmos DB for MongoDB vCore to seamlessly integrate your AI-based applications with your data that\u2019s stored in Azure Cosmos DB."]}),"\n"]}),"\n",(0,r.jsx)(t.default,{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community mongodb\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See a ",(0,r.jsx)(n.a,{href:"/docs/integrations/vectorstores/azure_cosmosdb",children:"usage example"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { AzureCosmosDBVectorStore } from "@langchain/community/vectorstores/azure_cosmosdb";\n'})}),"\n",(0,r.jsx)(n.h2,{id:"document-loaders",children:"Document loaders"}),"\n",(0,r.jsx)(n.h3,{id:"azure-blob-storage",children:"Azure Blob Storage"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/azure/storage/blobs/storage-blobs-introduction",children:"Azure Blob Storage"})," is Microsoft's object storage solution for the cloud. Blob Storage is optimized for storing massive amounts of unstructured data. Unstructured data is data that doesn't adhere to a particular data model or definition, such as text or binary data."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/azure/storage/files/storage-files-introduction",children:"Azure Files"})," offers fully managed\nfile shares in the cloud that are accessible via the industry standard Server Message Block (",(0,r.jsx)(n.code,{children:"SMB"}),") protocol,\nNetwork File System (",(0,r.jsx)(n.code,{children:"NFS"}),") protocol, and ",(0,r.jsx)(n.code,{children:"Azure Files REST API"}),". ",(0,r.jsx)(n.code,{children:"Azure Files"})," are based on the ",(0,r.jsx)(n.code,{children:"Azure Blob Storage"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Azure Blob Storage"})," is designed for:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Serving images or documents directly to a browser."}),"\n",(0,r.jsx)(n.li,{children:"Storing files for distributed access."}),"\n",(0,r.jsx)(n.li,{children:"Streaming video and audio."}),"\n",(0,r.jsx)(n.li,{children:"Writing to log files."}),"\n",(0,r.jsx)(n.li,{children:"Storing data for backup and restore, disaster recovery, and archiving."}),"\n",(0,r.jsx)(n.li,{children:"Storing data for analysis by an on-premises or Azure-hosted service."}),"\n"]}),"\n",(0,r.jsx)(t.default,{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community @azure/storage-blob\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See a ",(0,r.jsx)(n.a,{href:"/docs/integrations/document_loaders/web_loaders/azure_blob_storage_container",children:"usage example for the Azure Blob Storage"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { AzureBlobStorageContainerLoader } from "@langchain/community/document_loaders/web/azure_blob_storage_container";\n'})}),"\n",(0,r.jsxs)(n.p,{children:["See a ",(0,r.jsx)(n.a,{href:"/docs/integrations/document_loaders/web_loaders/azure_blob_storage_file",children:"usage example for the Azure Files"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { AzureBlobStorageFileLoader } from "@langchain/community/document_loaders/web/azure_blob_storage_file";\n'})})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(_,{...e})}):_(e)}},2280:(e,n,o)=>{"use strict";o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=o(74848),s=o(28453);const a={},t=void 0,i={id:"mdx_components/unified_model_params_tooltip",title:"unified_model_params_tooltip",description:"We're unifying model params across all packages. We now suggest using model instead of modelName, and apiKey for API keys.",source:"@site/docs/mdx_components/unified_model_params_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/unified_model_params_tooltip",permalink:"/docs/mdx_components/unified_model_params_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/unified_model_params_tooltip.mdx",tags:[],version:"current",frontMatter:{}},c={},d=[];function l(e){const n={admonition:"admonition",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["We're unifying model params across all packages. We now suggest using ",(0,r.jsx)(n.code,{children:"model"})," instead of ",(0,r.jsx)(n.code,{children:"modelName"}),", and ",(0,r.jsx)(n.code,{children:"apiKey"})," for API keys."]})})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},26706:e=>{e.exports={content:'import { AzureChatOpenAI } from "@langchain/openai";\n\nconst model = new AzureChatOpenAI({\n  temperature: 0.9,\n  azureOpenAIApiKey: "<your_key>", // In Node.js defaults to process.env.AZURE_OPENAI_API_KEY\n  azureOpenAIApiInstanceName: "<your_instance_name>", // In Node.js defaults to process.env.AZURE_OPENAI_API_INSTANCE_NAME\n  azureOpenAIApiDeploymentName: "<your_deployment_name>", // In Node.js defaults to process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME\n  azureOpenAIApiVersion: "<api_version>", // In Node.js defaults to process.env.AZURE_OPENAI_API_VERSION\n});\n',imports:[{local:"AzureChatOpenAI",imported:"AzureChatOpenAI",source:"@langchain/openai"}]}},98773:e=>{e.exports={content:'import { AzureOpenAIEmbeddings } from "@langchain/openai";\n\nconst model = new AzureOpenAIEmbeddings({\n  azureOpenAIApiKey: "<your_key>", // In Node.js defaults to process.env.AZURE_OPENAI_API_KEY\n  azureOpenAIApiInstanceName: "<your_instance_name>", // In Node.js defaults to process.env.AZURE_OPENAI_API_INSTANCE_NAME\n  azureOpenAIApiEmbeddingsDeploymentName: "<your_embeddings_deployment_name>", // In Node.js defaults to process.env.AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME\n  azureOpenAIApiVersion: "<api_version>", // In Node.js defaults to process.env.AZURE_OPENAI_API_VERSION\n});\n',imports:[{local:"AzureOpenAIEmbeddings",imported:"AzureOpenAIEmbeddings",source:"@langchain/openai"}]}},95816:e=>{e.exports={content:'import { AzureOpenAI } from "@langchain/openai";\n\nconst model = new AzureOpenAI({\n  azureOpenAIApiKey: "<your_key>", // In Node.js defaults to process.env.AZURE_OPENAI_API_KEY\n  azureOpenAIApiInstanceName: "<your_instance_name>", // In Node.js defaults to process.env.AZURE_OPENAI_API_INSTANCE_NAME\n  azureOpenAIApiDeploymentName: "<your_deployment_name>", // In Node.js defaults to process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME\n  azureOpenAIApiVersion: "<api_version>", // In Node.js defaults to process.env.AZURE_OPENAI_API_VERSION\n});\n',imports:[{local:"AzureOpenAI",imported:"AzureOpenAI",source:"@langchain/openai"}]}}}]);