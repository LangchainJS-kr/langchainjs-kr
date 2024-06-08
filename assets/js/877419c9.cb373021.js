(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9947],{63610:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>h,default:()=>v,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=t(74848),r=t(28453),i=t(78847),o=t(64428),s=t(15251),c=t.n(s);const l={},h="Weaviate Self Query Retriever",d={id:"integrations/retrievers/self_query/weaviate",title:"Weaviate Self Query Retriever",description:"This example shows how to use a self query retriever with a Weaviate vector store.",source:"@site/docs/integrations/retrievers/self_query/weaviate.mdx",sourceDirName:"integrations/retrievers/self_query",slug:"/integrations/retrievers/self_query/weaviate",permalink:"/docs/integrations/retrievers/self_query/weaviate",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/retrievers/self_query/weaviate.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Vectara Self Query Retriever",permalink:"/docs/integrations/retrievers/self_query/vectara"},next:{title:"Supabase Hybrid Search",permalink:"/docs/integrations/retrievers/supabase-hybrid"}},u={},m=[{value:"Usage",id:"usage",level:2},...i.toc];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"weaviate-self-query-retriever",children:"Weaviate Self Query Retriever"}),"\n",(0,a.jsxs)(n.p,{children:["This example shows how to use a self query retriever with a ",(0,a.jsx)(n.a,{href:"https://weaviate.io/",children:"Weaviate"})," vector store."]}),"\n",(0,a.jsxs)(n.p,{children:["If you haven't already set up Weaviate, please ",(0,a.jsx)(n.a,{href:"/docs/integrations/vectorstores/weaviate",children:"follow the instructions here"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:["This example shows how to intialize a ",(0,a.jsx)(n.code,{children:"SelfQueryRetriever"})," with a vector store:"]}),"\n",(0,a.jsxs)(n.p,{children:["Weaviate has their own standalone integration package with LangChain, accessible via ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@langchain/weaviate",children:(0,a.jsx)(n.code,{children:"@langchain/weaviate"})})," on NPM!"]}),"\n","\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/weaviate @langchain/openai\n"})}),"\n","\n",(0,a.jsx)(o.A,{language:"typescript",children:c()}),"\n",(0,a.jsx)(n.p,{children:"You can also initialize the retriever with default search parameters that apply in\naddition to the generated query:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'const selfQueryRetriever = SelfQueryRetriever.fromLLM({\n  llm,\n  vectorStore,\n  documentContents,\n  attributeInfo,\n  /**\n   * We need to use a translator that translates the queries into a\n   * filter format that the vector store can understand. LangChain provides one here.\n   */\n  structuredQueryTranslator: new WeaviateTranslator(),\n  searchParams: {\n    filter: {\n      where: {\n        operator: "Equal",\n        path: ["type"],\n        valueText: "movie",\n      },\n    },\n    mergeFiltersOperator: "or",\n  },\n});\n'})}),"\n",(0,a.jsxs)(n.p,{children:["See the ",(0,a.jsx)(n.a,{href:"https://weaviate.io/developers/weaviate/api/graphql/filters",children:"official docs"})," for more on how to construct metadata filters."]})]})}function v(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},15251:e=>{e.exports={content:'import weaviate from "weaviate-ts-client";\n\nimport { OpenAIEmbeddings, OpenAI } from "@langchain/openai";\nimport { SelfQueryRetriever } from "langchain/retrievers/self_query";\nimport { WeaviateStore, WeaviateTranslator } from "@langchain/weaviate";\nimport { Document } from "@langchain/core/documents";\nimport { AttributeInfo } from "langchain/chains/query_constructor";\n\n/**\n * First, we create a bunch of documents. You can load your own documents here instead.\n * Each document has a pageContent and a metadata field. Make sure your metadata matches the AttributeInfo below.\n */\nconst docs = [\n  new Document({\n    pageContent:\n      "A bunch of scientists bring back dinosaurs and mayhem breaks loose",\n    metadata: { year: 1993, rating: 7.7, genre: "science fiction" },\n  }),\n  new Document({\n    pageContent:\n      "Leo DiCaprio gets lost in a dream within a dream within a dream within a ...",\n    metadata: { year: 2010, director: "Christopher Nolan", rating: 8.2 },\n  }),\n  new Document({\n    pageContent:\n      "A psychologist / detective gets lost in a series of dreams within dreams within dreams and Inception reused the idea",\n    metadata: { year: 2006, director: "Satoshi Kon", rating: 8.6 },\n  }),\n  new Document({\n    pageContent:\n      "A bunch of normal-sized women are supremely wholesome and some men pine after them",\n    metadata: { year: 2019, director: "Greta Gerwig", rating: 8.3 },\n  }),\n  new Document({\n    pageContent: "Toys come alive and have a blast doing so",\n    metadata: { year: 1995, genre: "animated" },\n  }),\n  new Document({\n    pageContent: "Three men walk into the Zone, three men walk out of the Zone",\n    metadata: {\n      year: 1979,\n      director: "Andrei Tarkovsky",\n      genre: "science fiction",\n      rating: 9.9,\n    },\n  }),\n];\n\n/**\n * Next, we define the attributes we want to be able to query on.\n * in this case, we want to be able to query on the genre, year, director, rating, and length of the movie.\n * We also provide a description of each attribute and the type of the attribute.\n * This is used to generate the query prompts.\n */\nconst attributeInfo: AttributeInfo[] = [\n  {\n    name: "genre",\n    description: "The genre of the movie",\n    type: "string or array of strings",\n  },\n  {\n    name: "year",\n    description: "The year the movie was released",\n    type: "number",\n  },\n  {\n    name: "director",\n    description: "The director of the movie",\n    type: "string",\n  },\n  {\n    name: "rating",\n    description: "The rating of the movie (1-10)",\n    type: "number",\n  },\n  {\n    name: "length",\n    description: "The length of the movie in minutes",\n    type: "number",\n  },\n];\n\n/**\n * Next, we instantiate a vector store. This is where we store the embeddings of the documents.\n */\nconst embeddings = new OpenAIEmbeddings();\nconst llm = new OpenAI();\nconst documentContents = "Brief summary of a movie";\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nconst client = (weaviate as any).client({\n  scheme: process.env.WEAVIATE_SCHEME || "https",\n  host: process.env.WEAVIATE_HOST || "localhost",\n  apiKey: process.env.WEAVIATE_API_KEY\n    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any\n      new (weaviate as any).ApiKey(process.env.WEAVIATE_API_KEY)\n    : undefined,\n});\n\nconst vectorStore = await WeaviateStore.fromDocuments(docs, embeddings, {\n  client,\n  indexName: "Test",\n  textKey: "text",\n  metadataKeys: ["year", "director", "rating", "genre"],\n});\nconst selfQueryRetriever = SelfQueryRetriever.fromLLM({\n  llm,\n  vectorStore,\n  documentContents,\n  attributeInfo,\n  /**\n   * We need to use a translator that translates the queries into a\n   * filter format that the vector store can understand. LangChain provides one here.\n   */\n  structuredQueryTranslator: new WeaviateTranslator<WeaviateStore>(),\n});\n\n/**\n * Now we can query the vector store.\n * We can ask questions like "Which movies are less than 90 minutes?" or "Which movies are rated higher than 8.5?".\n * We can also ask questions like "Which movies are either comedy or drama and are less than 90 minutes?".\n * The retriever will automatically convert these questions into queries that can be used to retrieve documents.\n *\n * Note that unlike other vector stores, you have to make sure each metadata keys are actually presnt in the database,\n * meaning that Weaviate will throw an error if the self query chain generate a query with a metadata key that does\n * not exist in your Weaviate database.\n */\nconst query1 = await selfQueryRetriever.invoke(\n  "Which movies are rated higher than 8.5?"\n);\nconst query2 = await selfQueryRetriever.invoke(\n  "Which movies are directed by Greta Gerwig?"\n);\nconsole.log(query1, query2);\n',imports:[{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"},{local:"OpenAI",imported:"OpenAI",source:"@langchain/openai"},{local:"SelfQueryRetriever",imported:"SelfQueryRetriever",source:"langchain/retrievers/self_query"},{local:"WeaviateStore",imported:"WeaviateStore",source:"@langchain/weaviate"},{local:"WeaviateTranslator",imported:"WeaviateTranslator",source:"@langchain/weaviate"},{local:"Document",imported:"Document",source:"@langchain/core/documents"},{local:"AttributeInfo",imported:"AttributeInfo",source:"langchain/chains/query_constructor"}]}}}]);