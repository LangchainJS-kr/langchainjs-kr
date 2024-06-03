(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9401],{81279:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var o=t(74848),d=t(28453),r=t(64428),s=t(61254),i=t.n(s);const a={sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},c="How to reindex data to keep your vectorstore in-sync with the underlying data source",l={id:"how_to/indexing",title:"How to reindex data to keep your vectorstore in-sync with the underlying data source",description:"This guide assumes familiarity with the following concepts:",source:"@site/docs/how_to/indexing.mdx",sourceDirName:"how_to",slug:"/how_to/indexing",permalink:"/docs/how_to/indexing",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/indexing.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},u={},h=[{value:"How it works",id:"how-it-works",level:2},{value:"Deletion Modes",id:"deletion-modes",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Caution",id:"caution",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Next steps",id:"next-steps",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"how-to-reindex-data-to-keep-your-vectorstore-in-sync-with-the-underlying-data-source",children:"How to reindex data to keep your vectorstore in-sync with the underlying data source"}),"\n",(0,o.jsxs)(n.admonition,{title:"Prerequisites",type:"info",children:[(0,o.jsx)(n.p,{children:"This guide assumes familiarity with the following concepts:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/tutorials/rag/",children:"Retrieval-augmented generation (RAG)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/concepts/#vectorstores",children:"Vector stores"})}),"\n"]})]}),"\n",(0,o.jsx)(n.p,{children:"Here, we will look at a basic indexing workflow using the LangChain indexing API."}),"\n",(0,o.jsx)(n.p,{children:"The indexing API lets you load and keep in sync documents from any source into a vector store. Specifically, it helps:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Avoid writing duplicated content into the vector store"}),"\n",(0,o.jsx)(n.li,{children:"Avoid re-writing unchanged content"}),"\n",(0,o.jsx)(n.li,{children:"Avoid re-computing embeddings over unchanged content"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"All of which should save you time and money, as well as improve your vector search results."}),"\n",(0,o.jsx)(n.p,{children:"Crucially, the indexing API will work even with documents that have gone through several transformation steps (e.g., via text chunking) with respect to the original source documents."}),"\n",(0,o.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,o.jsxs)(n.p,{children:["LangChain indexing makes use of a record manager (",(0,o.jsx)(n.code,{children:"RecordManager"}),") that keeps track of document writes into the vector store."]}),"\n",(0,o.jsx)(n.p,{children:"When indexing content, hashes are computed for each document, and the following information is stored in the record manager:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"the document hash (hash of both page content and metadata)"}),"\n",(0,o.jsx)(n.li,{children:"write time"}),"\n",(0,o.jsx)(n.li,{children:"the source ID - each document should include information in its metadata to allow us to determine the ultimate source of this document"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"deletion-modes",children:"Deletion Modes"}),"\n",(0,o.jsx)(n.p,{children:"When indexing documents into a vector store, it's possible that some existing documents in the vector store should be deleted.\nIn certain situations you may want to remove any existing documents that are derived from the same sources as the new documents being indexed.\nIn others you may want to delete all existing documents wholesale. The indexing API deletion modes let you pick the behavior you want:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Cleanup Mode"}),(0,o.jsx)(n.th,{children:"De-Duplicates Content"}),(0,o.jsx)(n.th,{children:"Parallelizable"}),(0,o.jsx)(n.th,{children:"Cleans Up Deleted Source Docs"}),(0,o.jsx)(n.th,{children:"Cleans Up Mutations of Source Docs and/or Derived Docs"}),(0,o.jsx)(n.th,{children:"Clean Up Timing"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"None"}),(0,o.jsx)(n.td,{children:"\u2705"}),(0,o.jsx)(n.td,{children:"\u2705"}),(0,o.jsx)(n.td,{children:"\u274c"}),(0,o.jsx)(n.td,{children:"\u274c"}),(0,o.jsx)(n.td,{children:"-"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Incremental"}),(0,o.jsx)(n.td,{children:"\u2705"}),(0,o.jsx)(n.td,{children:"\u2705"}),(0,o.jsx)(n.td,{children:"\u274c"}),(0,o.jsx)(n.td,{children:"\u2705"}),(0,o.jsx)(n.td,{children:"Continuously"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Full"}),(0,o.jsx)(n.td,{children:"\u2705"}),(0,o.jsx)(n.td,{children:"\u274c"}),(0,o.jsx)(n.td,{children:"\u2705"}),(0,o.jsx)(n.td,{children:"\u2705"}),(0,o.jsx)(n.td,{children:"At end of indexing"})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"None"})," does not do any automatic clean up, allowing the user to manually do clean up of old content."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"incremental"})," and ",(0,o.jsx)(n.code,{children:"full"})," offer the following automated clean up:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If the content of the source document or derived documents has changed, both ",(0,o.jsx)(n.code,{children:"incremental"})," or ",(0,o.jsx)(n.code,{children:"full"})," modes will clean up (delete) previous versions of the content."]}),"\n",(0,o.jsxs)(n.li,{children:["If the source document has been deleted (meaning it is not included in the documents currently being indexed), the full cleanup mode will delete it from the vector store correctly, but the ",(0,o.jsx)(n.code,{children:"incremental"})," mode will not."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"When content is mutated (e.g., the source PDF file was revised) there will be a period of time during indexing when both the new and old versions may be returned to the user. This happens after the new content was written, but before the old version was deleted."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"incremental"})," indexing minimizes this period of time as it is able to do clean up continuously, as it writes."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"full"})," mode does the clean up after all batches have been written."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Do not use with a store that has been pre-populated with content independently of the indexing API, as the record manager will not know that records have been inserted previously."}),"\n",(0,o.jsxs)(n.li,{children:["Only works with LangChain ",(0,o.jsx)(n.code,{children:"vectorstore"}),"'s that support:\na). document addition by id (",(0,o.jsx)(n.code,{children:"addDocuments"})," method with ids argument)\nb). delete by id (delete method with ids argument)"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Compatible Vectorstores: ",(0,o.jsx)(n.a,{href:"/docs/integrations/vectorstores/pgvector",children:(0,o.jsx)(n.code,{children:"PGVector"})}),", ",(0,o.jsx)(n.a,{href:"/docs/integrations/vectorstores/chroma",children:(0,o.jsx)(n.code,{children:"Chroma"})}),", ",(0,o.jsx)(n.a,{href:"/docs/integrations/vectorstores/cloudflare_vectorize",children:(0,o.jsx)(n.code,{children:"CloudflareVectorize"})}),",\n",(0,o.jsx)(n.a,{href:"/docs/integrations/vectorstores/elasticsearch",children:(0,o.jsx)(n.code,{children:"ElasticVectorSearch"})}),", ",(0,o.jsx)(n.a,{href:"/docs/integrations/vectorstores/faiss",children:(0,o.jsx)(n.code,{children:"FAISS"})}),", ",(0,o.jsx)(n.a,{href:"/docs/integrations/vectorstores/momento_vector_index",children:(0,o.jsx)(n.code,{children:"MomentoVectorIndex"})}),",\n",(0,o.jsx)(n.a,{href:"/docs/integrations/vectorstores/pinecone",children:(0,o.jsx)(n.code,{children:"Pinecone"})}),", ",(0,o.jsx)(n.a,{href:"/docs/integrations/vectorstores/supabase",children:(0,o.jsx)(n.code,{children:"SupabaseVectorStore"})}),", ",(0,o.jsx)(n.a,{href:"/docs/integrations/vectorstores/vercel_postgres",children:(0,o.jsx)(n.code,{children:"VercelPostgresVectorStore"})}),",\n",(0,o.jsx)(n.a,{href:"/docs/integrations/vectorstores/weaviate",children:(0,o.jsx)(n.code,{children:"Weaviate"})}),", ",(0,o.jsx)(n.a,{href:"/docs/integrations/vectorstores/xata",children:(0,o.jsx)(n.code,{children:"Xata"})})]}),"\n",(0,o.jsx)(n.h2,{id:"caution",children:"Caution"}),"\n",(0,o.jsxs)(n.p,{children:["The record manager relies on a time-based mechanism to determine what content can be cleaned up (when using ",(0,o.jsx)(n.code,{children:"full"})," or ",(0,o.jsx)(n.code,{children:"incremental"})," cleanup modes)."]}),"\n",(0,o.jsx)(n.p,{children:"If two tasks run back-to-back, and the first task finishes before the clock time changes, then the second task may not be able to clean up content."}),"\n",(0,o.jsx)(n.p,{children:"This is unlikely to be an issue in actual settings for the following reasons:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"RecordManager"})," uses higher resolution timestamps."]}),"\n",(0,o.jsx)(n.li,{children:"The data would need to change between the first and the second tasks runs, which becomes unlikely if the time interval between the tasks is small."}),"\n",(0,o.jsx)(n.li,{children:"Indexing tasks typically take more than a few ms."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"quickstart",children:"Quickstart"}),"\n","\n",(0,o.jsx)(r.A,{language:"typescript",children:i()}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,o.jsx)(n.p,{children:"You've now learned how to use indexing in your RAG pipelines."}),"\n",(0,o.jsx)(n.p,{children:"Next, check out some of the other sections on retrieval."})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},61254:e=>{e.exports={content:'import { PostgresRecordManager } from "@langchain/community/indexes/postgres";\nimport { index } from "langchain/indexes";\nimport { PGVectorStore } from "@langchain/community/vectorstores/pgvector";\nimport { PoolConfig } from "pg";\nimport { OpenAIEmbeddings } from "@langchain/openai";\nimport { CharacterTextSplitter } from "@langchain/textsplitters";\nimport { BaseDocumentLoader } from "langchain/document_loaders/base";\n\n// First, follow set-up instructions at\n// https://js.langchain.com/docs/modules/indexes/vector_stores/integrations/pgvector\n\nconst config = {\n  postgresConnectionOptions: {\n    type: "postgres",\n    host: "127.0.0.1",\n    port: 5432,\n    user: "myuser",\n    password: "ChangeMe",\n    database: "api",\n  } as PoolConfig,\n  tableName: "testlangchain",\n  columns: {\n    idColumnName: "id",\n    vectorColumnName: "vector",\n    contentColumnName: "content",\n    metadataColumnName: "metadata",\n  },\n};\n\nconst vectorStore = await PGVectorStore.initialize(\n  new OpenAIEmbeddings(),\n  config\n);\n\n// Create a new record manager\nconst recordManagerConfig = {\n  postgresConnectionOptions: {\n    type: "postgres",\n    host: "127.0.0.1",\n    port: 5432,\n    user: "myuser",\n    password: "ChangeMe",\n    database: "api",\n  } as PoolConfig,\n  tableName: "upsertion_records",\n};\nconst recordManager = new PostgresRecordManager(\n  "test_namespace",\n  recordManagerConfig\n);\n\n// Create the schema if it doesn\'t exist\nawait recordManager.createSchema();\n\n// Index some documents\nconst doc1 = {\n  pageContent: "kitty",\n  metadata: { source: "kitty.txt" },\n};\n\nconst doc2 = {\n  pageContent: "doggy",\n  metadata: { source: "doggy.txt" },\n};\n\n/**\n * Hacky helper method to clear content. See the `full` mode section to to understand why it works.\n */\nasync function clear() {\n  await index({\n    docsSource: [],\n    recordManager,\n    vectorStore,\n    options: {\n      cleanup: "full",\n      sourceIdKey: "source",\n    },\n  });\n}\n\n// No cleanup\nawait clear();\n// This mode does not do automatic clean up of old versions of content; however, it still takes care of content de-duplication.\n\nconsole.log(\n  await index({\n    docsSource: [doc1, doc1, doc1, doc1, doc1, doc1],\n    recordManager,\n    vectorStore,\n    options: {\n      cleanup: undefined,\n      sourceIdKey: "source",\n    },\n  })\n);\n\n/*\n    {\n        numAdded: 1,\n        numUpdated: 0,\n        numDeleted: 0,\n        numSkipped: 0,\n    }\n*/\n\nawait clear();\n\nconsole.log(\n  await index({\n    docsSource: [doc1, doc2],\n    recordManager,\n    vectorStore,\n    options: {\n      cleanup: undefined,\n      sourceIdKey: "source",\n    },\n  })\n);\n\n/*\n    {\n        numAdded: 2,\n        numUpdated: 0,\n        numDeleted: 0,\n        numSkipped: 0,\n    }\n*/\n\n// Second time around all content will be skipped\n\nconsole.log(\n  await index({\n    docsSource: [doc1, doc2],\n    recordManager,\n    vectorStore,\n    options: {\n      cleanup: undefined,\n      sourceIdKey: "source",\n    },\n  })\n);\n\n/*\n    {\n        numAdded: 0,\n        numUpdated: 0,\n        numDeleted: 0,\n        numSkipped: 2,\n    }\n*/\n\n// Updated content will be added, but old won\'t be deleted\n\nconst doc1Updated = {\n  pageContent: "kitty updated",\n  metadata: { source: "kitty.txt" },\n};\n\nconsole.log(\n  await index({\n    docsSource: [doc1Updated, doc2],\n    recordManager,\n    vectorStore,\n    options: {\n      cleanup: undefined,\n      sourceIdKey: "source",\n    },\n  })\n);\n\n/*\n    {\n        numAdded: 1,\n        numUpdated: 0,\n        numDeleted: 0,\n        numSkipped: 1,\n    }\n*/\n\n/*\nResulting records in the database:\n    [\n        {\n            pageContent: "kitty",\n            metadata: { source: "kitty.txt" },\n        },\n        {\n            pageContent: "doggy",\n            metadata: { source: "doggy.txt" },\n        },\n        {\n            pageContent: "kitty updated",\n            metadata: { source: "kitty.txt" },\n        }\n    ]\n*/\n\n// Incremental mode\nawait clear();\n\nconsole.log(\n  await index({\n    docsSource: [doc1, doc2],\n    recordManager,\n    vectorStore,\n    options: {\n      cleanup: "incremental",\n      sourceIdKey: "source",\n    },\n  })\n);\n\n/*\n    {\n        numAdded: 2,\n        numUpdated: 0,\n        numDeleted: 0,\n        numSkipped: 0,\n    }\n*/\n\n// Indexing again should result in both documents getting skipped \u2013 also skipping the embedding operation!\n\nconsole.log(\n  await index({\n    docsSource: [doc1, doc2],\n    recordManager,\n    vectorStore,\n    options: {\n      cleanup: "incremental",\n      sourceIdKey: "source",\n    },\n  })\n);\n\n/*\n    {\n        numAdded: 0,\n        numUpdated: 0,\n        numDeleted: 0,\n        numSkipped: 2,\n    }\n*/\n\n// If we provide no documents with incremental indexing mode, nothing will change.\nconsole.log(\n  await index({\n    docsSource: [],\n    recordManager,\n    vectorStore,\n    options: {\n      cleanup: "incremental",\n      sourceIdKey: "source",\n    },\n  })\n);\n\n/*\n    {\n        numAdded: 0,\n        numUpdated: 0,\n        numDeleted: 0,\n        numSkipped: 0,\n    }\n*/\n\n// If we mutate a document, the new version will be written and all old versions sharing the same source will be deleted.\n// This only affects the documents with the same source id!\n\nconst changedDoc1 = {\n  pageContent: "kitty updated",\n  metadata: { source: "kitty.txt" },\n};\nconsole.log(\n  await index({\n    docsSource: [changedDoc1],\n    recordManager,\n    vectorStore,\n    options: {\n      cleanup: "incremental",\n      sourceIdKey: "source",\n    },\n  })\n);\n\n/*\n    {\n        numAdded: 1,\n        numUpdated: 0,\n        numDeleted: 1,\n        numSkipped: 0,\n    }\n*/\n\n// Full mode\nawait clear();\n// In full mode the user should pass the full universe of content that should be indexed into the indexing function.\n\n// Any documents that are not passed into the indexing function and are present in the vectorStore will be deleted!\n\n// This behavior is useful to handle deletions of source documents.\nconst allDocs = [doc1, doc2];\nconsole.log(\n  await index({\n    docsSource: allDocs,\n    recordManager,\n    vectorStore,\n    options: {\n      cleanup: "full",\n      sourceIdKey: "source",\n    },\n  })\n);\n\n/*\n    {\n        numAdded: 2,\n        numUpdated: 0,\n        numDeleted: 0,\n        numSkipped: 0,\n    }\n*/\n\n// Say someone deleted the first doc:\n\nconst doc2Only = [doc2];\n\n// Using full mode will clean up the deleted content as well.\n// This afffects all documents regardless of source id!\n\nconsole.log(\n  await index({\n    docsSource: doc2Only,\n    recordManager,\n    vectorStore,\n    options: {\n      cleanup: "full",\n      sourceIdKey: "source",\n    },\n  })\n);\n\n/*\n    {\n        numAdded: 0,\n        numUpdated: 0,\n        numDeleted: 1,\n        numSkipped: 1,\n    }\n*/\n\nawait clear();\n\nconst newDoc1 = {\n  pageContent: "kitty kitty kitty kitty kitty",\n  metadata: { source: "kitty.txt" },\n};\n\nconst newDoc2 = {\n  pageContent: "doggy doggy the doggy",\n  metadata: { source: "doggy.txt" },\n};\n\nconst splitter = new CharacterTextSplitter({\n  separator: "t",\n  keepSeparator: true,\n  chunkSize: 12,\n  chunkOverlap: 2,\n});\n\nconst newDocs = await splitter.splitDocuments([newDoc1, newDoc2]);\nconsole.log(newDocs);\n/*\n[\n  {\n    pageContent: \'kitty kit\',\n    metadata: {source: \'kitty.txt\'}\n  },\n  {\n    pageContent: \'tty kitty ki\',\n    metadata: {source: \'kitty.txt\'}\n  },\n  {\n    pageContent: \'tty kitty\',\n    metadata: {source: \'kitty.txt\'},\n  },\n  {\n    pageContent: \'doggy doggy\',\n    metadata: {source: \'doggy.txt\'},\n  {\n    pageContent: \'the doggy\',\n    metadata: {source: \'doggy.txt\'},\n  }\n]\n*/\n\nconsole.log(\n  await index({\n    docsSource: newDocs,\n    recordManager,\n    vectorStore,\n    options: {\n      cleanup: "incremental",\n      sourceIdKey: "source",\n    },\n  })\n);\n/*\n{\n    numAdded: 5,\n    numUpdated: 0,\n    numDeleted: 0,\n    numSkipped: 0,\n}\n*/\n\nconst changedDoggyDocs = [\n  {\n    pageContent: "woof woof",\n    metadata: { source: "doggy.txt" },\n  },\n  {\n    pageContent: "woof woof woof",\n    metadata: { source: "doggy.txt" },\n  },\n];\n\nconsole.log(\n  await index({\n    docsSource: changedDoggyDocs,\n    recordManager,\n    vectorStore,\n    options: {\n      cleanup: "incremental",\n      sourceIdKey: "source",\n    },\n  })\n);\n\n/*\n{\n    numAdded: 2,\n    numUpdated: 0,\n    numDeleted: 2,\n    numSkipped: 0,\n}\n*/\n\n// Usage with document loaders\n\n// Create a document loader\nclass MyCustomDocumentLoader extends BaseDocumentLoader {\n  load() {\n    return Promise.resolve([\n      {\n        pageContent: "kitty",\n        metadata: { source: "kitty.txt" },\n      },\n      {\n        pageContent: "doggy",\n        metadata: { source: "doggy.txt" },\n      },\n    ]);\n  }\n}\n\nawait clear();\n\nconst loader = new MyCustomDocumentLoader();\n\nconsole.log(\n  await index({\n    docsSource: loader,\n    recordManager,\n    vectorStore,\n    options: {\n      cleanup: "incremental",\n      sourceIdKey: "source",\n    },\n  })\n);\n\n/*\n{\n    numAdded: 2,\n    numUpdated: 0,\n    numDeleted: 0,\n    numSkipped: 0,\n}\n*/\n\n// Closing resources\nawait recordManager.end();\nawait vectorStore.end();\n',imports:[{local:"PostgresRecordManager",imported:"PostgresRecordManager",source:"@langchain/community/indexes/postgres"},{local:"index",imported:"index",source:"langchain/indexes"},{local:"PGVectorStore",imported:"PGVectorStore",source:"@langchain/community/vectorstores/pgvector"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"},{local:"CharacterTextSplitter",imported:"CharacterTextSplitter",source:"@langchain/textsplitters"},{local:"BaseDocumentLoader",imported:"BaseDocumentLoader",source:"langchain/document_loaders/base"}]}}}]);