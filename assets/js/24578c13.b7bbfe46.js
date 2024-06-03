(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4426],{49526:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>m,default:()=>f,frontMatter:()=>d,metadata:()=>p,toc:()=>g});var a=t(74848),s=t(28453),r=t(64428),o=t(85963),i=t.n(o),l=t(45760),c=t.n(l),h=t(61504),u=t.n(h);const d={sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},m="How to deal with large databases",p={id:"how_to/sql_large_db",title:"How to deal with large databases",description:"This guide assumes familiarity with the following:",source:"@site/docs/how_to/sql_large_db.mdx",sourceDirName:"how_to",slug:"/how_to/sql_large_db",permalink:"/docs/how_to/sql_large_db",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/sql_large_db.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},b={},g=[{value:"Setup",id:"setup",level:2},{value:"Many tables",id:"many-tables",level:2},{value:"High-cardinality columns",id:"high-cardinality-columns",level:2},{value:"Next steps",id:"next-steps",level:2}];function y(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-deal-with-large-databases",children:"How to deal with large databases"}),"\n",(0,a.jsxs)(n.admonition,{title:"Prerequisites",type:"info",children:[(0,a.jsx)(n.p,{children:"This guide assumes familiarity with the following:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/tutorials/sql_qa",children:"Question answering over SQL data"})}),"\n"]})]}),"\n",(0,a.jsx)(n.p,{children:"In order to write valid queries against a database, we need to feed the model the table names, table schemas, and feature values for it to query over.\nWhen there are many tables, columns, and/or high-cardinality columns, it becomes impossible for us to dump the full information about our database in every prompt.\nInstead, we must find ways to dynamically insert into the prompt only the most relevant information. Let's take a look at some techniques for doing this."}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(n.p,{children:"First, install the required packages and set your environment variables. This example will use OpenAI as the LLM."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install langchain @langchain/community @langchain/openai typeorm sqlite3\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'export OPENAI_API_KEY="your api key"\n# Uncomment the below to use LangSmith. Not required.\n# export LANGCHAIN_API_KEY="your api key"\n# export LANGCHAIN_TRACING_V2=true\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The below example will use a SQLite connection with Chinook database. Follow these ",(0,a.jsx)(n.a,{href:"https://database.guide/2-sample-databases-sqlite/",children:"installation steps"})," to create ",(0,a.jsx)(n.code,{children:"Chinook.db"})," in the same directory as this notebook:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Save ",(0,a.jsx)(n.a,{href:"https://raw.githubusercontent.com/lerocha/chinook-database/master/ChinookDatabase/DataSources/Chinook_Sqlite.sql",children:"this"})," file as ",(0,a.jsx)(n.code,{children:"Chinook_Sqlite.sql"})]}),"\n",(0,a.jsxs)(n.li,{children:["Run sqlite3 ",(0,a.jsx)(n.code,{children:"Chinook.db"})]}),"\n",(0,a.jsxs)(n.li,{children:["Run ",(0,a.jsx)(n.code,{children:".read Chinook_Sqlite.sql"})]}),"\n",(0,a.jsxs)(n.li,{children:["Test ",(0,a.jsx)(n.code,{children:"SELECT * FROM Artist LIMIT 10;"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Now, ",(0,a.jsx)(n.code,{children:"Chinhook.db"})," is in our directory and we can interface with it using the Typeorm-driven ",(0,a.jsx)(n.code,{children:"SqlDatabase"})," class:"]}),"\n","\n",(0,a.jsx)(r.A,{language:"typescript",children:i()}),"\n",(0,a.jsx)(n.h2,{id:"many-tables",children:"Many tables"}),"\n",(0,a.jsx)(n.p,{children:"One of the main pieces of information we need to include in our prompt is the schemas of the relevant tables.\nWhen we have very many tables, we can't fit all of the schemas in a single prompt.\nWhat we can do in such cases is first extract the names of the tables related to the user input, and then include only their schemas."}),"\n",(0,a.jsxs)(n.p,{children:["One easy and reliable way to do this is using OpenAI function-calling and Zod models. LangChain comes with a built-in ",(0,a.jsx)(n.code,{children:"createExtractionChainZod"})," chain that lets us do just this:"]}),"\n","\n",(0,a.jsx)(r.A,{language:"typescript",children:c()}),"\n",(0,a.jsx)(n.p,{children:"We've seen how to dynamically include a subset of table schemas in a prompt within a chain.\nAnother possible approach to this problem is to let an Agent decide for itself when to look up tables by giving it a Tool to do so."}),"\n",(0,a.jsx)(n.h2,{id:"high-cardinality-columns",children:"High-cardinality columns"}),"\n",(0,a.jsx)(n.p,{children:"High-cardinality refers to columns in a database that have a vast range of unique values.\nThese columns are characterized by a high level of uniqueness in their data entries, such as individual names, addresses, or product serial numbers.\nHigh-cardinality data can pose challenges for indexing and querying, as it requires more sophisticated strategies to efficiently filter and retrieve specific entries."}),"\n",(0,a.jsx)(n.p,{children:"In order to filter columns that contain proper nouns such as addresses, song names or artists, we first need to double-check the spelling in order to filter the data correctly."}),"\n",(0,a.jsx)(n.p,{children:"One naive strategy it to create a vector store with all the distinct proper nouns that exist in the database.\nWe can then query that vector store each user input and inject the most relevant proper nouns into the prompt."}),"\n",(0,a.jsx)(n.p,{children:"First we need the unique values for each entity we want, for which we define a function that parses the result into a list of elements:"}),"\n","\n",(0,a.jsx)(r.A,{language:"typescript",children:u()}),"\n",(0,a.jsx)(n.p,{children:"We can see that with retrieval we're able to correct the spelling and get back a valid result."}),"\n",(0,a.jsx)(n.p,{children:"Another possible approach to this problem is to let an Agent decide for itself when to look up proper nouns."}),"\n",(0,a.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,a.jsx)(n.p,{children:"You've now learned about some prompting strategies to improve SQL generation."}),"\n",(0,a.jsxs)(n.p,{children:["Next, check out some of the other guides in this section, like ",(0,a.jsx)(n.a,{href:"/docs/how_to/sql_query_checking",children:"how to validate queries"}),".\nYou might also be interested in the query analysis guide ",(0,a.jsx)(n.a,{href:"/docs/how_to/query_high_cardinality",children:"on handling high cardinality"}),"."]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}},85963:e=>{e.exports={content:"import { SqlDatabase } from \"langchain/sql_db\";\nimport { DataSource } from \"typeorm\";\n\nconst datasource = new DataSource({\n  type: \"sqlite\",\n  database: \"../../../../Chinook.db\",\n});\nconst db = await SqlDatabase.fromDataSourceParams({\n  appDataSource: datasource,\n});\nconsole.log(db.allTables.map((t) => t.tableName));\n/**\n[\n  'Album',       'Artist',\n  'Customer',    'Employee',\n  'Genre',       'Invoice',\n  'InvoiceLine', 'MediaType',\n  'Playlist',    'PlaylistTrack',\n  'Track'\n]\n */\n",imports:[{local:"SqlDatabase",imported:"SqlDatabase",source:"langchain/sql_db"}]}},45760:e=>{e.exports={content:'import { ChatPromptTemplate } from "@langchain/core/prompts";\nimport {\n  RunnablePassthrough,\n  RunnableSequence,\n} from "@langchain/core/runnables";\nimport { ChatOpenAI } from "@langchain/openai";\nimport { createSqlQueryChain } from "langchain/chains/sql_db";\nimport { SqlDatabase } from "langchain/sql_db";\nimport { DataSource } from "typeorm";\nimport { z } from "zod";\n\nconst datasource = new DataSource({\n  type: "sqlite",\n  database: "../../../../Chinook.db",\n});\nconst db = await SqlDatabase.fromDataSourceParams({\n  appDataSource: datasource,\n});\nconst llm = new ChatOpenAI({ model: "gpt-4", temperature: 0 });\n\nconst Table = z.object({\n  names: z.array(z.string()).describe("Names of tables in SQL database"),\n});\n\nconst tableNames = db.allTables.map((t) => t.tableName).join("\\n");\nconst system = `Return the names of ALL the SQL tables that MIGHT be relevant to the user question.\nThe tables are:\n\n${tableNames}\n\nRemember to include ALL POTENTIALLY RELEVANT tables, even if you\'re not sure that they\'re needed.`;\n\nconst prompt = ChatPromptTemplate.fromMessages([\n  ["system", system],\n  ["human", "{input}"],\n]);\nconst tableChain = prompt.pipe(llm.withStructuredOutput(Table));\n\nconsole.log(\n  await tableChain.invoke({\n    input: "What are all the genres of Alanis Morisette songs?",\n  })\n);\n/**\n{ names: [ \'Artist\', \'Track\', \'Genre\' ] }\n */\n\n// -------------\n\n// You can see a LangSmith trace of the above chain here:\n// https://smith.langchain.com/public/5ca0c91e-4a40-44ef-8c45-9a4247dc474c/r\n\n// -------------\n\n/**\nThis works pretty well! Except, as we\u2019ll see below, we actually need a few other tables as well.\nThis would be pretty difficult for the model to know based just on the user question.\nIn this case, we might think to simplify our model\u2019s job by grouping the tables together.\nWe\u2019ll just ask the model to choose between categories \u201cMusic\u201d and \u201cBusiness\u201d, and then take care of selecting all the relevant tables from there:\n */\n\nconst prompt2 = ChatPromptTemplate.fromMessages([\n  [\n    "system",\n    `Return the names of the SQL tables that are relevant to the user question.\n  The tables are:\n  \n  Music\n  Business`,\n  ],\n  ["human", "{input}"],\n]);\nconst categoryChain = prompt2.pipe(llm.withStructuredOutput(Table));\nconsole.log(\n  await categoryChain.invoke({\n    input: "What are all the genres of Alanis Morisette songs?",\n  })\n);\n/**\n{ names: [ \'Music\' ] }\n */\n\n// -------------\n\n// You can see a LangSmith trace of the above chain here:\n// https://smith.langchain.com/public/12b62e78-bfbe-42ff-86f2-ad738a476554/r\n\n// -------------\n\nconst getTables = (categories: z.infer<typeof Table>): Array<string> => {\n  let tables: Array<string> = [];\n  for (const category of categories.names) {\n    if (category === "Music") {\n      tables = tables.concat([\n        "Album",\n        "Artist",\n        "Genre",\n        "MediaType",\n        "Playlist",\n        "PlaylistTrack",\n        "Track",\n      ]);\n    } else if (category === "Business") {\n      tables = tables.concat([\n        "Customer",\n        "Employee",\n        "Invoice",\n        "InvoiceLine",\n      ]);\n    }\n  }\n  return tables;\n};\n\nconst tableChain2 = categoryChain.pipe(getTables);\nconsole.log(\n  await tableChain2.invoke({\n    input: "What are all the genres of Alanis Morisette songs?",\n  })\n);\n/**\n[\n  \'Album\',\n  \'Artist\',\n  \'Genre\',\n  \'MediaType\',\n  \'Playlist\',\n  \'PlaylistTrack\',\n  \'Track\'\n]\n */\n\n// -------------\n\n// You can see a LangSmith trace of the above chain here:\n// https://smith.langchain.com/public/e78c10aa-e923-4a24-b0c8-f7a6f5d316ce/r\n\n// -------------\n\n// Now that we\u2019ve got a chain that can output the relevant tables for any query we can combine this with our createSqlQueryChain, which can accept a list of tableNamesToUse to determine which table schemas are included in the prompt:\n\nconst queryChain = await createSqlQueryChain({\n  llm,\n  db,\n  dialect: "sqlite",\n});\n\nconst tableChain3 = RunnableSequence.from([\n  {\n    input: (i: { question: string }) => i.question,\n  },\n  tableChain2,\n]);\n\nconst fullChain = RunnablePassthrough.assign({\n  tableNamesToUse: tableChain3,\n}).pipe(queryChain);\nconst query = await fullChain.invoke({\n  question: "What are all the genres of Alanis Morisette songs?",\n});\nconsole.log(query);\n/**\nSELECT DISTINCT "Genre"."Name"\nFROM "Genre"\nJOIN "Track" ON "Genre"."GenreId" = "Track"."GenreId"\nJOIN "Album" ON "Track"."AlbumId" = "Album"."AlbumId"\nJOIN "Artist" ON "Album"."ArtistId" = "Artist"."ArtistId"\nWHERE "Artist"."Name" = \'Alanis Morissette\'\nLIMIT 5;\n */\n\nconsole.log(await db.run(query));\n/**\n[{"Name":"Rock"}]\n */\n\n// -------------\n\n// You can see a LangSmith trace of the above chain here:\n// https://smith.langchain.com/public/c7d576d0-3462-40db-9edc-5492f10555bf/r\n\n// -------------\n\n// We might rephrase our question slightly to remove redundancy in the answer\nconst query2 = await fullChain.invoke({\n  question: "What is the set of all unique genres of Alanis Morisette songs?",\n});\nconsole.log(query2);\n/**\nSELECT DISTINCT Genre.Name FROM Genre\nJOIN Track ON Genre.GenreId = Track.GenreId\nJOIN Album ON Track.AlbumId = Album.AlbumId\nJOIN Artist ON Album.ArtistId = Artist.ArtistId\nWHERE Artist.Name = \'Alanis Morissette\'\n */\nconsole.log(await db.run(query2));\n/**\n[{"Name":"Rock"}]\n */\n\n// -------------\n\n// You can see a LangSmith trace of the above chain here:\n// https://smith.langchain.com/public/6e80087d-e930-4f22-9b40-f7edb95a2145/r\n\n// -------------\n',imports:[{local:"ChatPromptTemplate",imported:"ChatPromptTemplate",source:"@langchain/core/prompts"},{local:"RunnablePassthrough",imported:"RunnablePassthrough",source:"@langchain/core/runnables"},{local:"RunnableSequence",imported:"RunnableSequence",source:"@langchain/core/runnables"},{local:"ChatOpenAI",imported:"ChatOpenAI",source:"@langchain/openai"},{local:"createSqlQueryChain",imported:"createSqlQueryChain",source:"langchain/chains/sql_db"},{local:"SqlDatabase",imported:"SqlDatabase",source:"langchain/sql_db"}]}},61504:e=>{e.exports={content:'import { DocumentInterface } from "@langchain/core/documents";\nimport { ChatPromptTemplate } from "@langchain/core/prompts";\nimport {\n  RunnablePassthrough,\n  RunnableSequence,\n} from "@langchain/core/runnables";\nimport { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";\nimport { createSqlQueryChain } from "langchain/chains/sql_db";\nimport { SqlDatabase } from "langchain/sql_db";\nimport { MemoryVectorStore } from "langchain/vectorstores/memory";\nimport { DataSource } from "typeorm";\n\nconst datasource = new DataSource({\n  type: "sqlite",\n  database: "../../../../Chinook.db",\n});\nconst db = await SqlDatabase.fromDataSourceParams({\n  appDataSource: datasource,\n});\n\nasync function queryAsList(database: any, query: string): Promise<string[]> {\n  const res: Array<{ [key: string]: string }> = JSON.parse(\n    await database.run(query)\n  )\n    .flat()\n    .filter((el: any) => el != null);\n  const justValues: Array<string> = res.map((item) =>\n    Object.values(item)[0]\n      .replace(/\\b\\d+\\b/g, "")\n      .trim()\n  );\n  return justValues;\n}\n\nlet properNouns: string[] = await queryAsList(db, "SELECT Name FROM Artist");\nproperNouns = properNouns.concat(\n  await queryAsList(db, "SELECT Title FROM Album")\n);\nproperNouns = properNouns.concat(\n  await queryAsList(db, "SELECT Name FROM Genre")\n);\n\nconsole.log(properNouns.length);\n/**\n647\n */\nconsole.log(properNouns.slice(0, 5));\n/**\n[\n  \'AC/DC\',\n  \'Accept\',\n  \'Aerosmith\',\n  \'Alanis Morissette\',\n  \'Alice In Chains\'\n]\n */\n\n// Now we can embed and store all of our values in a vector database:\n\nconst vectorDb = await MemoryVectorStore.fromTexts(\n  properNouns,\n  {},\n  new OpenAIEmbeddings()\n);\nconst retriever = vectorDb.asRetriever(15);\n\n// And put together a query construction chain that first retrieves values from the database and inserts them into the prompt:\n\nconst system = `You are a SQLite expert. Given an input question, create a syntactically correct SQLite query to run.\nUnless otherwise specified, do not return more than {top_k} rows.\n\nHere is the relevant table info: {table_info}\n\nHere is a non-exhaustive list of possible feature values.\nIf filtering on a feature value make sure to check its spelling against this list first:\n\n{proper_nouns}`;\nconst prompt = ChatPromptTemplate.fromMessages([\n  ["system", system],\n  ["human", "{input}"],\n]);\n\nconst llm = new ChatOpenAI({ model: "gpt-4", temperature: 0 });\n\nconst queryChain = await createSqlQueryChain({\n  llm,\n  db,\n  prompt,\n  dialect: "sqlite",\n});\nconst retrieverChain = RunnableSequence.from([\n  (i: { question: string }) => i.question,\n  retriever,\n  (docs: Array<DocumentInterface>) =>\n    docs.map((doc) => doc.pageContent).join("\\n"),\n]);\nconst chain = RunnablePassthrough.assign({\n  proper_nouns: retrieverChain,\n}).pipe(queryChain);\n\n// To try out our chain, let\u2019s see what happens when we try filtering on \u201celenis moriset\u201d, a misspelling of Alanis Morissette, without and with retrieval:\n\n// Without retrieval\nconst query = await queryChain.invoke({\n  question: "What are all the genres of Elenis Moriset songs?",\n  proper_nouns: "",\n});\nconsole.log("query", query);\n/**\nquery SELECT DISTINCT Genre.Name\nFROM Genre\nJOIN Track ON Genre.GenreId = Track.GenreId\nJOIN Album ON Track.AlbumId = Album.AlbumId\nJOIN Artist ON Album.ArtistId = Artist.ArtistId\nWHERE Artist.Name = \'Elenis Moriset\'\nLIMIT 5;\n */\nconsole.log("db query results", await db.run(query));\n/**\ndb query results []\n */\n\n// -------------\n\n// You can see a LangSmith trace of the above chain here:\n// https://smith.langchain.com/public/b153cb9b-6fbb-43a8-b2ba-4c86715183b9/r\n\n// -------------\n\n// With retrieval:\nconst query2 = await chain.invoke({\n  question: "What are all the genres of Elenis Moriset songs?",\n});\nconsole.log("query2", query2);\n/**\nquery2 SELECT DISTINCT Genre.Name\nFROM Genre\nJOIN Track ON Genre.GenreId = Track.GenreId\nJOIN Album ON Track.AlbumId = Album.AlbumId\nJOIN Artist ON Album.ArtistId = Artist.ArtistId\nWHERE Artist.Name = \'Alanis Morissette\';\n */\nconsole.log("db query results", await db.run(query2));\n/**\ndb query results [{"Name":"Rock"}]\n */\n\n// -------------\n\n// You can see a LangSmith trace of the above chain here:\n// https://smith.langchain.com/public/2f4f0e37-3b7f-47b5-837c-e2952489cac0/r\n\n// -------------\n',imports:[{local:"DocumentInterface",imported:"DocumentInterface",source:"@langchain/core/documents"},{local:"ChatPromptTemplate",imported:"ChatPromptTemplate",source:"@langchain/core/prompts"},{local:"RunnablePassthrough",imported:"RunnablePassthrough",source:"@langchain/core/runnables"},{local:"RunnableSequence",imported:"RunnableSequence",source:"@langchain/core/runnables"},{local:"ChatOpenAI",imported:"ChatOpenAI",source:"@langchain/openai"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"},{local:"createSqlQueryChain",imported:"createSqlQueryChain",source:"langchain/chains/sql_db"},{local:"SqlDatabase",imported:"SqlDatabase",source:"langchain/sql_db"},{local:"MemoryVectorStore",imported:"MemoryVectorStore",source:"langchain/vectorstores/memory"}]}}}]);