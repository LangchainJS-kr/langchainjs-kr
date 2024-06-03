"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9515],{11362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(74848),o=t(28453),i=t(78847);const r={},c="Typesense",a={id:"integrations/vectorstores/typesense",title:"Typesense",description:"Vector store that utilizes the Typesense search engine.",source:"@site/docs/integrations/vectorstores/typesense.mdx",sourceDirName:"integrations/vectorstores",slug:"/integrations/vectorstores/typesense",permalink:"/docs/integrations/vectorstores/typesense",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/vectorstores/typesense.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"TypeORM",permalink:"/docs/integrations/vectorstores/typeorm"},next:{title:"Upstash Vector",permalink:"/docs/integrations/vectorstores/upstash"}},d={},l=[{value:"Basic Usage",id:"basic-usage",level:3},...i.toc,{value:"Constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:3}];function m(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"typesense",children:"Typesense"}),"\n",(0,s.jsx)(n.p,{children:"Vector store that utilizes the Typesense search engine."}),"\n",(0,s.jsx)(n.h3,{id:"basic-usage",children:"Basic Usage"}),"\n","\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { Typesense, TypesenseConfig } from "langchain/vectorstores/typesense";\nimport { OpenAIEmbeddings } from "@langchain/openai";\nimport { Client } from "typesense";\nimport { Document } from "langchain/document";\n\nconst vectorTypesenseClient = new Client({\n  nodes: [\n    {\n      // Ideally should come from your .env file\n      host: "...",\n      port: 123,\n      protocol: "https",\n    },\n  ],\n  // Ideally should come from your .env file\n  apiKey: "...",\n  numRetries: 3,\n  connectionTimeoutSeconds: 60,\n});\n\nconst typesenseVectorStoreConfig = {\n  // Typesense client\n  typesenseClient: vectorTypesenseClient,\n  // Name of the collection to store the vectors in\n  schemaName: "your_schema_name",\n  // Optional column names to be used in Typesense\n  columnNames: {\n    // "vec" is the default name for the vector column in Typesense but you can change it to whatever you want\n    vector: "vec",\n    // "text" is the default name for the text column in Typesense but you can change it to whatever you want\n    pageContent: "text",\n    // Names of the columns that you will save in your typesense schema and need to be retrieved as metadata when searching\n    metadataColumnNames: ["foo", "bar", "baz"],\n  },\n  // Optional search parameters to be passed to Typesense when searching\n  searchParams: {\n    q: "*",\n    filter_by: "foo:[fooo]",\n    query_by: "",\n  },\n  // You can override the default Typesense import function if you want to do something more complex\n  // Default import function:\n  // async importToTypesense<\n  //   T extends Record<string, unknown> = Record<string, unknown>\n  // >(data: T[], collectionName: string) {\n  //   const chunkSize = 2000;\n  //   for (let i = 0; i < data.length; i += chunkSize) {\n  //     const chunk = data.slice(i, i + chunkSize);\n\n  //     await this.caller.call(async () => {\n  //       await this.client\n  //         .collections<T>(collectionName)\n  //         .documents()\n  //         .import(chunk, { action: "emplace", dirty_values: "drop" });\n  //     });\n  //   }\n  // }\n  import: async (data, collectionName) => {\n    await vectorTypesenseClient\n      .collections(collectionName)\n      .documents()\n      .import(data, { action: "emplace", dirty_values: "drop" });\n  },\n} satisfies TypesenseConfig;\n\n/**\n * Creates a Typesense vector store from a list of documents.\n * Will update documents if there is a document with the same id, at least with the default import function.\n * @param documents list of documents to create the vector store from\n * @returns Typesense vector store\n */\nconst createVectorStoreWithTypesense = async (documents: Document[] = []) =>\n  Typesense.fromDocuments(\n    documents,\n    new OpenAIEmbeddings(),\n    typesenseVectorStoreConfig\n  );\n\n/**\n * Returns a Typesense vector store from an existing index.\n * @returns Typesense vector store\n */\nconst getVectorStoreWithTypesense = async () =>\n  new Typesense(new OpenAIEmbeddings(), typesenseVectorStoreConfig);\n\n// Do a similarity search\nconst vectorStore = await getVectorStoreWithTypesense();\nconst documents = await vectorStore.similaritySearch("hello world");\n\n// Add filters based on metadata with the search parameters of Typesense\n// will exclude documents with author:JK Rowling, so if Joe Rowling & JK Rowling exists, only Joe Rowling will be returned\nvectorStore.similaritySearch("Rowling", undefined, {\n  filter_by: "author:!=JK Rowling",\n});\n\n// Delete a document\nvectorStore.deleteDocuments(["document_id_1", "document_id_2"]);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"constructor",children:"Constructor"}),"\n",(0,s.jsx)(n.p,{children:"Before starting, create a schema in Typesense with an id, a field for the vector and a field for the text. Add as many other fields as needed for the metadata."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"constructor(embeddings: Embeddings, config: TypesenseConfig)"}),": Constructs a new instance of the ",(0,s.jsx)(n.code,{children:"Typesense"})," class.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"embeddings"}),": An instance of the ",(0,s.jsx)(n.code,{children:"Embeddings"})," class used for embedding documents."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"config"}),": Configuration object for the Typesense vector store.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"typesenseClient"}),": Typesense client instance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"schemaName"}),": Name of the Typesense schema in which documents will be stored and searched."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"searchParams"})," (optional): Typesense search parameters. Default is ",(0,s.jsx)(n.code,{children:"{ q: '*', per_page: 5, query_by: '' }"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"columnNames"})," (optional): Column names configuration.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"vector"})," (optional): Vector column name. Default is ",(0,s.jsx)(n.code,{children:"'vec'"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pageContent"})," (optional): Page content column name. Default is ",(0,s.jsx)(n.code,{children:"'text'"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"metadataColumnNames"})," (optional): Metadata column names. Default is an empty array ",(0,s.jsx)(n.code,{children:"[]"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"import"})," (optional): Replace the default import function for importing data to Typesense. This can affect the functionality of updating documents."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"async addDocuments(documents: Document[]): Promise<void>"}),": Adds documents to the vector store. The documents will be updated if there is a document with the same ID."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"static async fromDocuments(docs: Document[], embeddings: Embeddings, config: TypesenseConfig): Promise<Typesense>"}),": Creates a Typesense vector store from a list of documents. Documents are added to the vector store during construction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"static async fromTexts(texts: string[], metadatas: object[], embeddings: Embeddings, config: TypesenseConfig): Promise<Typesense>"}),": Creates a Typesense vector store from a list of texts and associated metadata. Texts are converted to documents and added to the vector store during construction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"async similaritySearch(query: string, k?: number, filter?: Record<string, unknown>): Promise<Document[]>"}),": Searches for similar documents based on a query. Returns an array of similar documents."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"async deleteDocuments(documentIds: string[]): Promise<void>"}),": Deletes documents from the vector store based on their IDs."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}}}]);