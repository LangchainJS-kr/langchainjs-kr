(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2203],{74684:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>j,contentTitle:()=>x,default:()=>v,frontMatter:()=>g,metadata:()=>y,toc:()=>f});var o=t(74848),a=t(28453),s=t(64428),i=t(78847),r=t(77827),c=t.n(r),l=t(76134),d=t.n(l),h=t(55320),m=t.n(h),p=t(21147),u=t.n(p);const g={},x="Chroma",y={id:"integrations/vectorstores/chroma",title:"Chroma",description:"Chroma is a AI-native open-source vector database focused on developer productivity and happiness. Chroma is licensed under Apache 2.0.",source:"@site/docs/integrations/vectorstores/chroma.mdx",sourceDirName:"integrations/vectorstores",slug:"/integrations/vectorstores/chroma",permalink:"/docs/integrations/vectorstores/chroma",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/vectorstores/chroma.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Cassandra",permalink:"/docs/integrations/vectorstores/cassandra"},next:{title:"ClickHouse",permalink:"/docs/integrations/vectorstores/clickhouse"}},j={},f=[{value:"Setup",id:"setup",level:2},{value:"Usage, Index and query Documents",id:"usage-index-and-query-documents",level:2},...i.toc,{value:"Usage, Index and query texts",id:"usage-index-and-query-texts",level:2},{value:"Usage, Query docs from existing collection",id:"usage-query-docs-from-existing-collection",level:2},{value:"Usage, delete docs",id:"usage-delete-docs",level:2}];function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"chroma",children:"Chroma"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://docs.trychroma.com/getting-started",children:"Chroma"})," is a AI-native open-source vector database focused on developer productivity and happiness. Chroma is licensed under Apache 2.0."]}),"\n"]}),"\n",(0,o.jsx)("a",{href:"https://discord.gg/MMeYNTmh3x",target:"_blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/discord/1073293645303795742",alt:"Discord"})}),"\n",(0,o.jsx)(n.p,{children:"\xa0\xa0"}),"\n",(0,o.jsx)("a",{href:"https://github.com/chroma-core/chroma/blob/master/LICENSE",target:"_blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/static/v1?label=license&message=Apache 2.0&color=white",alt:"License"})}),"\n",(0,o.jsx)(n.p,{children:"\xa0\xa0"}),"\n",(0,o.jsx)("img",{src:"https://github.com/chroma-core/chroma/actions/workflows/chroma-integration-test.yml/badge.svg?branch=main",alt:"Integration Tests"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.trychroma.com/",children:"Website"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.trychroma.com/",children:"Documentation"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://twitter.com/trychroma",children:"Twitter"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://discord.gg/MMeYNTmh3x",children:"Discord"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Run Chroma with Docker on your computer"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"git clone git@github.com:chroma-core/chroma.git\ncd chroma\ndocker-compose up -d --build\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Install the Chroma JS SDK."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install -S chromadb\n"})}),"\n",(0,o.jsx)(n.p,{children:"Chroma is fully-typed, fully-tested and fully-documented."}),"\n",(0,o.jsx)(n.p,{children:"Like any other database, you can:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:".add"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:".get"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:".update"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:".upsert"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:".delete"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:".peek"})}),"\n",(0,o.jsxs)(n.li,{children:["and ",(0,o.jsx)(n.code,{children:".query"})," runs the similarity search."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["View full docs at ",(0,o.jsx)(n.a,{href:"https://docs.trychroma.com/js_reference/Collection",children:"docs"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"usage-index-and-query-documents",children:"Usage, Index and query Documents"}),"\n","\n",(0,o.jsx)(i.default,{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai @langchain/community\n"})}),"\n","\n",(0,o.jsx)(s.A,{language:"typescript",children:c()}),"\n",(0,o.jsx)(n.h2,{id:"usage-index-and-query-texts",children:"Usage, Index and query texts"}),"\n","\n",(0,o.jsx)(s.A,{language:"typescript",children:d()}),"\n",(0,o.jsx)(n.h2,{id:"usage-query-docs-from-existing-collection",children:"Usage, Query docs from existing collection"}),"\n","\n",(0,o.jsx)(s.A,{language:"typescript",children:m()}),"\n",(0,o.jsx)(n.h2,{id:"usage-delete-docs",children:"Usage, delete docs"}),"\n","\n",(0,o.jsx)(s.A,{language:"typescript",children:u()})]})}function v(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},21147:e=>{e.exports={content:'import { Chroma } from "@langchain/community/vectorstores/chroma";\nimport { OpenAIEmbeddings } from "@langchain/openai";\n\nconst embeddings = new OpenAIEmbeddings();\nconst vectorStore = new Chroma(embeddings, {\n  collectionName: "test-deletion",\n});\n\nconst documents = [\n  {\n    pageContent: `Tortoise: Labyrinth? Labyrinth? Could it Are we in the notorious Little\n    Harmonic Labyrinth of the dreaded Majotaur?`,\n    metadata: {\n      speaker: "Tortoise",\n    },\n  },\n  {\n    pageContent: "Achilles: Yiikes! What is that?",\n    metadata: {\n      speaker: "Achilles",\n    },\n  },\n  {\n    pageContent: `Tortoise: They say-although I person never believed it myself-that an I\n    Majotaur has created a tiny labyrinth sits in a pit in the middle of\n    it, waiting innocent victims to get lost in its fears complexity.\n    Then, when they wander and dazed into the center, he laughs and\n    laughs at them-so hard, that he laughs them to death!`,\n    metadata: {\n      speaker: "Tortoise",\n    },\n  },\n  {\n    pageContent: "Achilles: Oh, no!",\n    metadata: {\n      speaker: "Achilles",\n    },\n  },\n  {\n    pageContent: "Tortoise: But it\'s only a myth. Courage, Achilles.",\n    metadata: {\n      speaker: "Tortoise",\n    },\n  },\n];\n\n// Also supports an additional {ids: []} parameter for upsertion\nconst ids = await vectorStore.addDocuments(documents);\n\nconst response = await vectorStore.similaritySearch("scared", 2);\nconsole.log(response);\n/*\n[\n  Document { pageContent: \'Achilles: Oh, no!\', metadata: {} },\n  Document {\n    pageContent: \'Achilles: Yiikes! What is that?\',\n    metadata: { id: 1 }\n  }\n]\n*/\n\n// You can also pass a "filter" parameter instead\nawait vectorStore.delete({ ids });\n\nconst response2 = await vectorStore.similaritySearch("scared", 2);\nconsole.log(response2);\n\n/*\n  []\n*/\n',imports:[{local:"Chroma",imported:"Chroma",source:"@langchain/community/vectorstores/chroma"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"}]}},77827:e=>{e.exports={content:'import { Chroma } from "@langchain/community/vectorstores/chroma";\nimport { OpenAIEmbeddings } from "@langchain/openai";\nimport { TextLoader } from "langchain/document_loaders/fs/text";\n\n// Create docs with a loader\nconst loader = new TextLoader("src/document_loaders/example_data/example.txt");\nconst docs = await loader.load();\n\n// Create vector store and index the docs\nconst vectorStore = await Chroma.fromDocuments(docs, new OpenAIEmbeddings(), {\n  collectionName: "a-test-collection",\n  url: "http://localhost:8000", // Optional, will default to this value\n  collectionMetadata: {\n    "hnsw:space": "cosine",\n  }, // Optional, can be used to specify the distance method of the embedding space https://docs.trychroma.com/usage-guide#changing-the-distance-function\n});\n\n// Search for the most similar document\nconst response = await vectorStore.similaritySearch("hello", 1);\n\nconsole.log(response);\n/*\n[\n  Document {\n    pageContent: \'Foo\\nBar\\nBaz\\n\\n\',\n    metadata: { source: \'src/document_loaders/example_data/example.txt\' }\n  }\n]\n*/\n',imports:[{local:"Chroma",imported:"Chroma",source:"@langchain/community/vectorstores/chroma"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"},{local:"TextLoader",imported:"TextLoader",source:"langchain/document_loaders/fs/text"}]}},76134:e=>{e.exports={content:'import { Chroma } from "@langchain/community/vectorstores/chroma";\nimport { OpenAIEmbeddings } from "@langchain/openai";\n\n// text sample from Godel, Escher, Bach\nconst vectorStore = await Chroma.fromTexts(\n  [\n    `Tortoise: Labyrinth? Labyrinth? Could it Are we in the notorious Little\n        Harmonic Labyrinth of the dreaded Majotaur?`,\n    "Achilles: Yiikes! What is that?",\n    `Tortoise: They say-although I person never believed it myself-that an I\n        Majotaur has created a tiny labyrinth sits in a pit in the middle of\n        it, waiting innocent victims to get lost in its fears complexity.\n        Then, when they wander and dazed into the center, he laughs and\n        laughs at them-so hard, that he laughs them to death!`,\n    "Achilles: Oh, no!",\n    "Tortoise: But it\'s only a myth. Courage, Achilles.",\n  ],\n  [{ id: 2 }, { id: 1 }, { id: 3 }],\n  new OpenAIEmbeddings(),\n  {\n    collectionName: "godel-escher-bach",\n  }\n);\n\nconst response = await vectorStore.similaritySearch("scared", 2);\n\nconsole.log(response);\n/*\n[\n  Document { pageContent: \'Achilles: Oh, no!\', metadata: {} },\n  Document {\n    pageContent: \'Achilles: Yiikes! What is that?\',\n    metadata: { id: 1 }\n  }\n]\n*/\n\n// You can also filter by metadata\nconst filteredResponse = await vectorStore.similaritySearch("scared", 2, {\n  id: 1,\n});\n\nconsole.log(filteredResponse);\n/*\n[\n  Document {\n    pageContent: \'Achilles: Yiikes! What is that?\',\n    metadata: { id: 1 }\n  }\n]\n*/\n',imports:[{local:"Chroma",imported:"Chroma",source:"@langchain/community/vectorstores/chroma"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"}]}},55320:e=>{e.exports={content:'import { Chroma } from "@langchain/community/vectorstores/chroma";\nimport { OpenAIEmbeddings } from "@langchain/openai";\n\nconst vectorStore = await Chroma.fromExistingCollection(\n  new OpenAIEmbeddings(),\n  { collectionName: "godel-escher-bach" }\n);\n\nconst response = await vectorStore.similaritySearch("scared", 2);\nconsole.log(response);\n/*\n[\n  Document { pageContent: \'Achilles: Oh, no!\', metadata: {} },\n  Document {\n    pageContent: \'Achilles: Yiikes! What is that?\',\n    metadata: { id: 1 }\n  }\n]\n*/\n',imports:[{local:"Chroma",imported:"Chroma",source:"@langchain/community/vectorstores/chroma"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"}]}}}]);