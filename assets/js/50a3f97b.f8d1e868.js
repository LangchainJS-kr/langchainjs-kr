(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32],{95320:(e,n,a)=>{"use strict";a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var t=a(74848),r=a(28453),o=a(64428),s=a(10583),c=a.n(s);const i={sidebar_class_name:"node-only"},d="Vectara",l={id:"integrations/vectorstores/vectara",title:"Vectara",description:"Vectara is a platform for building GenAI applications. It provides an easy-to-use API for document indexing and querying that is managed by Vectara and is optimized for performance and accuracy.",source:"@site/docs/integrations/vectorstores/vectara.mdx",sourceDirName:"integrations/vectorstores",slug:"/integrations/vectorstores/vectara",permalink:"/docs/integrations/vectorstores/vectara",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/vectorstores/vectara.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"node-only"},sidebar:"integrations",previous:{title:"USearch",permalink:"/docs/integrations/vectorstores/usearch"},next:{title:"Vercel Postgres",permalink:"/docs/integrations/vectorstores/vercel_postgres"}},h={},m=[{value:"\ud83d\udc49 Embeddings Included",id:"-embeddings-included",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"APIs",id:"apis",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"vectara",children:"Vectara"}),"\n",(0,t.jsx)(n.p,{children:"Vectara is a platform for building GenAI applications. It provides an easy-to-use API for document indexing and querying that is managed by Vectara and is optimized for performance and accuracy."}),"\n",(0,t.jsx)(n.p,{children:"You can use Vectara as a vector store with LangChain.js."}),"\n",(0,t.jsx)(n.h2,{id:"-embeddings-included",children:"\ud83d\udc49 Embeddings Included"}),"\n",(0,t.jsx)(n.p,{children:"Vectara uses its own embeddings under the hood, so you don't have to provide any yourself or call another service to obtain embeddings."}),"\n",(0,t.jsx)(n.p,{children:"This also means that if you provide your own embeddings, they'll be a no-op."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const store = await VectaraStore.fromTexts(\n  ["hello world", "hi there"],\n  [{ foo: "bar" }, { foo: "baz" }],\n  // This won\'t have an effect. Provide a FakeEmbeddings instance instead for clarity.\n  new OpenAIEmbeddings(),\n  args\n);\n'})}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.p,{children:"You'll need to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a ",(0,t.jsx)(n.a,{href:"https://vectara.com/integrations/langchain",children:"free Vectara account"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a ",(0,t.jsx)(n.a,{href:"https://docs.vectara.com/docs/console-ui/creating-a-corpus",children:"corpus"})," to store your data"]}),"\n",(0,t.jsxs)(n.li,{children:["Create an ",(0,t.jsx)(n.a,{href:"https://docs.vectara.com/docs/common-use-cases/app-authn-authz/api-keys",children:"API key"})," with QueryService and IndexService access so you can access this corpus"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Configure your ",(0,t.jsx)(n.code,{children:".env"})," file or provide args to connect LangChain to your Vectara corpus:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"VECTARA_CUSTOMER_ID=your_customer_id\nVECTARA_CORPUS_ID=your_corpus_id\nVECTARA_API_KEY=your-vectara-api-key\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that you can provide multiple corpus IDs separated by commas for querying multiple corpora at once. For example: ",(0,t.jsx)(n.code,{children:"VECTARA_CORPUS_ID=3,8,9,43"}),".\nFor indexing multiple corpora, you'll need to create a separate VectaraStore instance for each corpus."]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,t.jsx)(o.A,{language:"typescript",children:c()}),"\n",(0,t.jsxs)(n.p,{children:["Note that ",(0,t.jsx)(n.code,{children:"lambda"})," is a parameter related to Vectara's hybrid search capbility, providing a tradeoff between neural search and boolean/exact match as described ",(0,t.jsx)(n.a,{href:"https://docs.vectara.com/docs/api-reference/search-apis/lexical-matching",children:"here"}),". We recommend the value of 0.025 as a default, while providing a way for advanced users to customize this value if needed."]}),"\n",(0,t.jsx)(n.h2,{id:"apis",children:"APIs"}),"\n",(0,t.jsx)(n.p,{children:"Vectara's LangChain vector store consumes Vectara's core APIs:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.vectara.com/docs/indexing-apis/indexing",children:"Indexing API"})," for storing documents in a Vectara corpus."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.vectara.com/docs/search-apis/search",children:"Search API"})," for querying this data. This API supports hybrid search."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},10583:e=>{e.exports={content:'import { VectaraStore } from "@langchain/community/vectorstores/vectara";\nimport { VectaraSummaryRetriever } from "@langchain/community/retrievers/vectara_summary";\nimport { Document } from "@langchain/core/documents";\n\n// Create the Vectara store.\nconst store = new VectaraStore({\n  customerId: Number(process.env.VECTARA_CUSTOMER_ID),\n  corpusId: Number(process.env.VECTARA_CORPUS_ID),\n  apiKey: String(process.env.VECTARA_API_KEY),\n  verbose: true,\n});\n\n// Add two documents with some metadata.\nconst doc_ids = await store.addDocuments([\n  new Document({\n    pageContent: "Do I dare to eat a peach?",\n    metadata: {\n      foo: "baz",\n    },\n  }),\n  new Document({\n    pageContent: "In the room the women come and go talking of Michelangelo",\n    metadata: {\n      foo: "bar",\n    },\n  }),\n]);\n\n// Perform a similarity search.\nconst resultsWithScore = await store.similaritySearchWithScore(\n  "What were the women talking about?",\n  1,\n  {\n    lambda: 0.025,\n  }\n);\n\n// Print the results.\nconsole.log(JSON.stringify(resultsWithScore, null, 2));\n/*\n[\n  [\n    {\n      "pageContent": "In the room the women come and go talking of Michelangelo",\n      "metadata": {\n        "lang": "eng",\n        "offset": "0",\n        "len": "57",\n        "foo": "bar"\n      }\n    },\n    0.4678752\n  ]\n]\n*/\n\nconst retriever = new VectaraSummaryRetriever({ vectara: store, topK: 3 });\nconst documents = await retriever.invoke("What were the women talking about?");\n\nconsole.log(JSON.stringify(documents, null, 2));\n/*\n[\n  {\n    "pageContent": "<b>In the room the women come and go talking of Michelangelo</b>",\n    "metadata": {\n      "lang": "eng",\n      "offset": "0",\n      "len": "57",\n      "foo": "bar"\n    }\n  },\n  {\n    "pageContent": "<b>In the room the women come and go talking of Michelangelo</b>",\n    "metadata": {\n      "lang": "eng",\n      "offset": "0",\n      "len": "57",\n      "foo": "bar"\n    }\n  },\n  {\n    "pageContent": "<b>In the room the women come and go talking of Michelangelo</b>",\n    "metadata": {\n      "lang": "eng",\n      "offset": "0",\n      "len": "57",\n      "foo": "bar"\n    }\n  }\n]\n*/\n\n// Delete the documents.\nawait store.deleteDocuments(doc_ids);\n',imports:[{local:"VectaraStore",imported:"VectaraStore",source:"@langchain/community/vectorstores/vectara"},{local:"VectaraSummaryRetriever",imported:"VectaraSummaryRetriever",source:"@langchain/community/retrievers/vectara_summary"},{local:"Document",imported:"Document",source:"@langchain/core/documents"}]}}}]);