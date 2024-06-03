(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7514,65],{8675:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=t(74848),a=t(28453),o=t(78847),i=t(64428),s=t(50464),c=t.n(s);const l={},u="HNSWLib Self Query Retriever",d={id:"integrations/retrievers/self_query/hnswlib",title:"HNSWLib Self Query Retriever",description:"This example shows how to use a self query retriever with an HNSWLib vector store.",source:"@site/docs/integrations/retrievers/self_query/hnswlib.mdx",sourceDirName:"integrations/retrievers/self_query",slug:"/integrations/retrievers/self_query/hnswlib",permalink:"/docs/integrations/retrievers/self_query/hnswlib",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/retrievers/self_query/hnswlib.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Chroma Self Query Retriever",permalink:"/docs/integrations/retrievers/self_query/chroma"},next:{title:"Memory Vector Store Self Query Retriever",permalink:"/docs/integrations/retrievers/self_query/memory"}},m={},h=[{value:"Usage",id:"usage",level:2},...o.toc];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"hnswlib-self-query-retriever",children:"HNSWLib Self Query Retriever"}),"\n",(0,r.jsx)(n.p,{children:"This example shows how to use a self query retriever with an HNSWLib vector store."}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai @langchain/community\n"})}),"\n","\n",(0,r.jsx)(i.A,{language:"typescript",children:c()}),"\n",(0,r.jsx)(n.p,{children:"You can also initialize the retriever with default search parameters that apply in\naddition to the generated query:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'const selfQueryRetriever = SelfQueryRetriever.fromLLM({\n  llm,\n  vectorStore,\n  documentContents,\n  attributeInfo,\n  /**\n   * We need to use a translator that translates the queries into a\n   * filter format that the vector store can understand. We provide a basic translator\n   * translator here, but you can create your own translator by extending BaseTranslator\n   * abstract class. Note that the vector store needs to support filtering on the metadata\n   * attributes you want to query on.\n   */\n  structuredQueryTranslator: new FunctionalTranslator(),\n  searchParams: {\n    filter: (doc: Document) => doc.metadata && doc.metadata.rating > 8.5,\n    mergeFiltersOperator: "and",\n  },\n});\n'})})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},78847:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(74848),a=t(28453);const o={},i=void 0,s={id:"mdx_components/integration_install_tooltip",title:"integration_install_tooltip",description:"See this section for general instructions on installing integration packages.",source:"@site/docs/mdx_components/integration_install_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/integration_install_tooltip",permalink:"/docs/mdx_components/integration_install_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/integration_install_tooltip.mdx",tags:[],version:"current",frontMatter:{}},c={},l=[];function u(e){const n={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/how_to/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},50464:e=>{e.exports={content:'import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";\nimport { OpenAIEmbeddings, OpenAI } from "@langchain/openai";\nimport { SelfQueryRetriever } from "langchain/retrievers/self_query";\nimport { FunctionalTranslator } from "@langchain/core/structured_query";\nimport { Document } from "@langchain/core/documents";\nimport type { AttributeInfo } from "langchain/chains/query_constructor";\n\n/**\n * First, we create a bunch of documents. You can load your own documents here instead.\n * Each document has a pageContent and a metadata field. Make sure your metadata matches the AttributeInfo below.\n */\nconst docs = [\n  new Document({\n    pageContent:\n      "A bunch of scientists bring back dinosaurs and mayhem breaks loose",\n    metadata: { year: 1993, rating: 7.7, genre: "science fiction" },\n  }),\n  new Document({\n    pageContent:\n      "Leo DiCaprio gets lost in a dream within a dream within a dream within a ...",\n    metadata: { year: 2010, director: "Christopher Nolan", rating: 8.2 },\n  }),\n  new Document({\n    pageContent:\n      "A psychologist / detective gets lost in a series of dreams within dreams within dreams and Inception reused the idea",\n    metadata: { year: 2006, director: "Satoshi Kon", rating: 8.6 },\n  }),\n  new Document({\n    pageContent:\n      "A bunch of normal-sized women are supremely wholesome and some men pine after them",\n    metadata: { year: 2019, director: "Greta Gerwig", rating: 8.3 },\n  }),\n  new Document({\n    pageContent: "Toys come alive and have a blast doing so",\n    metadata: { year: 1995, genre: "animated" },\n  }),\n  new Document({\n    pageContent: "Three men walk into the Zone, three men walk out of the Zone",\n    metadata: {\n      year: 1979,\n      director: "Andrei Tarkovsky",\n      genre: "science fiction",\n      rating: 9.9,\n    },\n  }),\n];\n\n/**\n * Next, we define the attributes we want to be able to query on.\n * in this case, we want to be able to query on the genre, year, director, rating, and length of the movie.\n * We also provide a description of each attribute and the type of the attribute.\n * This is used to generate the query prompts.\n */\nconst attributeInfo: AttributeInfo[] = [\n  {\n    name: "genre",\n    description: "The genre of the movie",\n    type: "string or array of strings",\n  },\n  {\n    name: "year",\n    description: "The year the movie was released",\n    type: "number",\n  },\n  {\n    name: "director",\n    description: "The director of the movie",\n    type: "string",\n  },\n  {\n    name: "rating",\n    description: "The rating of the movie (1-10)",\n    type: "number",\n  },\n  {\n    name: "length",\n    description: "The length of the movie in minutes",\n    type: "number",\n  },\n];\n\n/**\n * Next, we instantiate a vector store. This is where we store the embeddings of the documents.\n * We also need to provide an embeddings object. This is used to embed the documents.\n */\nconst embeddings = new OpenAIEmbeddings();\nconst llm = new OpenAI();\nconst documentContents = "Brief summary of a movie";\nconst vectorStore = await HNSWLib.fromDocuments(docs, embeddings);\nconst selfQueryRetriever = SelfQueryRetriever.fromLLM({\n  llm,\n  vectorStore,\n  documentContents,\n  attributeInfo,\n  /**\n   * We need to use a translator that translates the queries into a\n   * filter format that the vector store can understand. We provide a basic translator\n   * translator here, but you can create your own translator by extending BaseTranslator\n   * abstract class. Note that the vector store needs to support filtering on the metadata\n   * attributes you want to query on.\n   */\n  structuredQueryTranslator: new FunctionalTranslator(),\n});\n\n/**\n * Now we can query the vector store.\n * We can ask questions like "Which movies are less than 90 minutes?" or "Which movies are rated higher than 8.5?".\n * We can also ask questions like "Which movies are either comedy or drama and are less than 90 minutes?".\n * The retriever will automatically convert these questions into queries that can be used to retrieve documents.\n */\nconst query1 = await selfQueryRetriever.invoke(\n  "Which movies are less than 90 minutes?"\n);\nconst query2 = await selfQueryRetriever.invoke(\n  "Which movies are rated higher than 8.5?"\n);\nconst query3 = await selfQueryRetriever.invoke(\n  "Which movies are directed by Greta Gerwig?"\n);\nconst query4 = await selfQueryRetriever.invoke(\n  "Which movies are either comedy or drama and are less than 90 minutes?"\n);\nconsole.log(query1, query2, query3, query4);\n',imports:[{local:"HNSWLib",imported:"HNSWLib",source:"@langchain/community/vectorstores/hnswlib"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"},{local:"OpenAI",imported:"OpenAI",source:"@langchain/openai"},{local:"SelfQueryRetriever",imported:"SelfQueryRetriever",source:"langchain/retrievers/self_query"},{local:"FunctionalTranslator",imported:"FunctionalTranslator",source:"@langchain/core/structured_query"},{local:"Document",imported:"Document",source:"@langchain/core/documents"},{local:"AttributeInfo",imported:"AttributeInfo",source:"langchain/chains/query_constructor"}]}}}]);