(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[583,65],{94278:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=n(74848),a=n(28453),o=n(78847),i=n(64428),s=n(71357),c=n.n(s);const l={},d="Vectara Self Query Retriever",u={id:"integrations/retrievers/self_query/vectara",title:"Vectara Self Query Retriever",description:"This example shows how to use a self query retriever with a Vectara vector store.",source:"@site/docs/integrations/retrievers/self_query/vectara.mdx",sourceDirName:"integrations/retrievers/self_query",slug:"/integrations/retrievers/self_query/vectara",permalink:"/docs/integrations/retrievers/self_query/vectara",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/retrievers/self_query/vectara.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Supabase Self Query Retriever",permalink:"/docs/integrations/retrievers/self_query/supabase"},next:{title:"Weaviate Self Query Retriever",permalink:"/docs/integrations/retrievers/self_query/weaviate"}},h={},m=[{value:"Usage",id:"usage",level:2},...o.toc];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"vectara-self-query-retriever",children:"Vectara Self Query Retriever"}),"\n",(0,r.jsxs)(t.p,{children:["This example shows how to use a self query retriever with a ",(0,r.jsx)(t.a,{href:"https://vectara.com/",children:"Vectara"})," vector store."]}),"\n",(0,r.jsxs)(t.p,{children:["If you haven't already set up Vectara, please ",(0,r.jsx)(t.a,{href:"/docs/integrations/vectorstores/vectara",children:"follow the instructions here"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai @langchain/community\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This example shows how to intialize a ",(0,r.jsx)(t.code,{children:"SelfQueryRetriever"})," with a vector store:"]}),"\n","\n",(0,r.jsx)(i.A,{language:"typescript",children:c()}),"\n",(0,r.jsx)(t.p,{children:"You can also initialize the retriever with default search parameters that apply in\naddition to the generated query:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'const selfQueryRetriever = SelfQueryRetriever.fromLLM({\n  llm,\n  vectorStore,\n  documentContents,\n  attributeInfo,\n  /**\n   * We need to use a translator that translates the queries into a\n   * filter format that the vector store can understand. LangChain provides one here.\n   */\n  structuredQueryTranslator: new VectaraTranslator()(),\n  searchParams: {\n    filter: {\n      filter: "( doc.genre = \'science fiction\' ) and ( doc.rating > 8.5 )",\n    },\n    mergeFiltersOperator: "and",\n  },\n});\n'})}),"\n",(0,r.jsxs)(t.p,{children:["See the ",(0,r.jsx)(t.a,{href:"https://docs.vectara.com/",children:"official docs"})," for more on how to construct metadata filters."]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},78847:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(74848),a=n(28453);const o={},i=void 0,s={id:"mdx_components/integration_install_tooltip",title:"integration_install_tooltip",description:"See this section for general instructions on installing integration packages.",source:"@site/docs/mdx_components/integration_install_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/integration_install_tooltip",permalink:"/docs/mdx_components/integration_install_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/integration_install_tooltip.mdx",tags:[],version:"current",frontMatter:{}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"/docs/how_to/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},71357:e=>{e.exports={content:'import { SelfQueryRetriever } from "langchain/retrievers/self_query";\nimport { OpenAI } from "@langchain/openai";\nimport { VectaraStore } from "@langchain/community/vectorstores/vectara";\nimport { FakeEmbeddings } from "@langchain/core/utils/testing";\nimport { Document } from "@langchain/core/documents";\nimport { VectaraTranslator } from "@langchain/community/structured_query/vectara";\nimport type { AttributeInfo } from "langchain/chains/query_constructor";\n\n/**\n * First, we create a bunch of documents. You can load your own documents here instead.\n * Each document has a pageContent and a metadata field. Make sure your metadata matches the AttributeInfo below.\n */\nconst docs = [\n  new Document({\n    pageContent:\n      "A bunch of scientists bring back dinosaurs and mayhem breaks loose",\n    metadata: { year: 1993, rating: 7.7, genre: "science fiction" },\n  }),\n  new Document({\n    pageContent:\n      "Leo DiCaprio gets lost in a dream within a dream within a dream within a ...",\n    metadata: { year: 2010, director: "Christopher Nolan", rating: 8.2 },\n  }),\n  new Document({\n    pageContent:\n      "A psychologist / detective gets lost in a series of dreams within dreams within dreams and Inception reused the idea",\n    metadata: { year: 2006, director: "Satoshi Kon", rating: 8.6 },\n  }),\n  new Document({\n    pageContent:\n      "A bunch of normal-sized women are supremely wholesome and some men pine after them",\n    metadata: { year: 2019, director: "Greta Gerwig", rating: 8.3 },\n  }),\n  new Document({\n    pageContent: "Toys come alive and have a blast doing so",\n    metadata: { year: 1995, genre: "animated" },\n  }),\n  new Document({\n    pageContent: "Three men walk into the Zone, three men walk out of the Zone",\n    metadata: {\n      year: 1979,\n      rating: 9.9,\n      director: "Andrei Tarkovsky",\n      genre: "science fiction",\n    },\n  }),\n];\n\n/**\n * Next, we define the attributes we want to be able to query on.\n * in this case, we want to be able to query on the genre, year, director, rating, and length of the movie.\n * We also provide a description of each attribute and the type of the attribute.\n * This is used to generate the query prompts.\n *\n * We need to setup the filters in the vectara as well otherwise filter won\'t work.\n * To setup the filter in vectara, go to Data -> {your_created_corpus} -> overview\n * In the overview section edit the filters section and all the following attributes in\n * the filters.\n */\nconst attributeInfo: AttributeInfo[] = [\n  {\n    name: "genre",\n    description: "The genre of the movie",\n    type: "string or array of strings",\n  },\n  {\n    name: "year",\n    description: "The year the movie was released",\n    type: "number",\n  },\n  {\n    name: "director",\n    description: "The director of the movie",\n    type: "string",\n  },\n  {\n    name: "rating",\n    description: "The rating of the movie (1-10)",\n    type: "number",\n  },\n];\n\n/**\n * Next, we instantiate a vector store. This is where we store the embeddings of the documents.\n * We also need to provide an embeddings object. This is used to embed the documents.\n */\n\nconst config = {\n  customerId: Number(process.env.VECTARA_CUSTOMER_ID),\n  corpusId: Number(process.env.VECTARA_CORPUS_ID),\n  apiKey: String(process.env.VECTARA_API_KEY),\n  verbose: true,\n};\n\nconst vectorStore = await VectaraStore.fromDocuments(\n  docs,\n  new FakeEmbeddings(),\n  config\n);\n\nconst llm = new OpenAI();\nconst documentContents = "Brief summary of a movie";\n\nconst selfQueryRetriever = SelfQueryRetriever.fromLLM({\n  llm,\n  vectorStore,\n  documentContents,\n  attributeInfo,\n  /**\n   * We need to create a basic translator that translates the queries into a\n   * filter format that the vector store can understand. We provide a basic translator\n   * here, but you can create your own translator by extending BaseTranslator\n   * abstract class. Note that the vector store needs to support filtering on the metadata\n   * attributes you want to query on.\n   */\n  structuredQueryTranslator: new VectaraTranslator<VectaraStore>(),\n});\n\n/**\n * Now we can query the vector store.\n * We can ask questions like "Which movies are less than 90 minutes?" or "Which movies are rated higher than 8.5?".\n * We can also ask questions like "Which movies are either comedy or drama and are less than 90 minutes?".\n * The retriever will automatically convert these questions into queries that can be used to retrieve documents.\n */\nconst query1 = await selfQueryRetriever.invoke(\n  "What are some movies about dinosaurs"\n);\nconst query2 = await selfQueryRetriever.invoke(\n  "I want to watch a movie rated higher than 8.5"\n);\nconst query3 = await selfQueryRetriever.invoke(\n  "Which movies are directed by Greta Gerwig?"\n);\nconst query4 = await selfQueryRetriever.invoke(\n  "Which movies are either comedy or science fiction and are rated higher than 8.5?"\n);\nconsole.log(query1, query2, query3, query4);\n',imports:[{local:"SelfQueryRetriever",imported:"SelfQueryRetriever",source:"langchain/retrievers/self_query"},{local:"OpenAI",imported:"OpenAI",source:"@langchain/openai"},{local:"VectaraStore",imported:"VectaraStore",source:"@langchain/community/vectorstores/vectara"},{local:"FakeEmbeddings",imported:"FakeEmbeddings",source:"@langchain/core/utils/testing"},{local:"Document",imported:"Document",source:"@langchain/core/documents"},{local:"VectaraTranslator",imported:"VectaraTranslator",source:"@langchain/community/structured_query/vectara"},{local:"AttributeInfo",imported:"AttributeInfo",source:"langchain/chains/query_constructor"}]}}}]);