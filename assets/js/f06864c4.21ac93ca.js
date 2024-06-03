"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3216],{45178:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(74848),o=t(28453);const a={sidebar_class_name:"hidden",title:"How to return sources"},i=void 0,r={id:"how_to/qa_sources",title:"How to return sources",description:"This guide assumes familiarity with the following:",source:"@site/docs/how_to/qa_sources.mdx",sourceDirName:"how_to",slug:"/how_to/qa_sources",permalink:"/docs/how_to/qa_sources",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/qa_sources.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden",title:"How to return sources"},sidebar:"tutorialSidebar",previous:{title:"How to return citations",permalink:"/docs/how_to/qa_citations"},next:{title:"How to stream from a question-answering chain",permalink:"/docs/how_to/qa_streaming"}},c={},l=[{value:"Setup",id:"setup",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"LangSmith",id:"langsmith",level:3},{value:"Chain without sources",id:"chain-without-sources",level:2},{value:"Adding sources",id:"adding-sources",level:2},{value:"Next steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.admonition,{title:"Prerequisites",type:"info",children:[(0,s.jsx)(n.p,{children:"This guide assumes familiarity with the following:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../../docs/tutorials/rag/",children:"Retrieval-augmented generation"})}),"\n"]})]}),"\n",(0,s.jsx)(n.p,{children:"Often in Q&A applications it\u2019s important to show users the sources that\nwere used to generate the answer. The simplest way to do this is for the\nchain to return the Documents that were retrieved in each generation."}),"\n",(0,s.jsxs)(n.p,{children:["We\u2019ll be using the ",(0,s.jsx)(n.a,{href:"https://lilianweng.github.io/posts/2023-06-23-agent/",children:"LLM Powered Autonomous\nAgents"})," blog post\nby Lilian Weng for retrieval content this notebook."]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(n.p,{children:["We\u2019ll use an OpenAI chat model and embeddings and a Memory vector store\nin this walkthrough, but everything shown here works with any\n",(0,s.jsx)(n.a,{href:"../../docs/concepts/#chat-models",children:"ChatModel"})," or\n",(0,s.jsx)(n.a,{href:"../../docs/concepts#llms",children:"LLM"}),",\n",(0,s.jsx)(n.a,{href:"../../docs/concepts#embedding-models",children:"Embeddings"}),", and\n",(0,s.jsx)(n.a,{href:"../../docs/concepts#vectorstores",children:"VectorStore"})," or\n",(0,s.jsx)(n.a,{href:"../../docs/concepts#retrievers",children:"Retriever"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"We\u2019ll use the following packages:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install --save langchain @langchain/openai cheerio\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We need to set environment variable ",(0,s.jsx)(n.code,{children:"OPENAI_API_KEY"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export OPENAI_API_KEY=YOUR_KEY\n"})}),"\n",(0,s.jsx)(n.h3,{id:"langsmith",children:"LangSmith"}),"\n",(0,s.jsxs)(n.p,{children:["Many of the applications you build with LangChain will contain multiple\nsteps with multiple invocations of LLM calls. As these applications get\nmore and more complex, it becomes crucial to be able to inspect what\nexactly is going on inside your chain or agent. The best way to do this\nis with ",(0,s.jsx)(n.a,{href:"https://smith.langchain.com/",children:"LangSmith"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Note that LangSmith is not needed, but it is helpful. If you do want to\nuse LangSmith, after you sign up at the link above, make sure to set\nyour environment variables to start logging traces:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export LANGCHAIN_TRACING_V2=true\nexport LANGCHAIN_API_KEY=YOUR_KEY\n"})}),"\n",(0,s.jsx)(n.h2,{id:"chain-without-sources",children:"Chain without sources"}),"\n",(0,s.jsxs)(n.p,{children:["Here is the Q&A app we built over the ",(0,s.jsx)(n.a,{href:"https://lilianweng.github.io/posts/2023-06-23-agent/",children:"LLM Powered Autonomous\nAgents"})," blog post\nby Lilian Weng in the\n",(0,s.jsx)(n.a,{href:"../../docs/tutorials/qa_chat_history/",children:"Quickstart"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import "cheerio";\nimport { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";\nimport { RecursiveCharacterTextSplitter } from "langchain/text_splitter";\nimport { MemoryVectorStore } from "langchain/vectorstores/memory";\nimport { OpenAIEmbeddings, ChatOpenAI } from "@langchain/openai";\nimport { pull } from "langchain/hub";\nimport { ChatPromptTemplate } from "@langchain/core/prompts";\nimport { formatDocumentsAsString } from "langchain/util/document";\nimport {\n  RunnableSequence,\n  RunnablePassthrough,\n} from "@langchain/core/runnables";\nimport { StringOutputParser } from "@langchain/core/output_parsers";\n\nconst loader = new CheerioWebBaseLoader(\n  "https://lilianweng.github.io/posts/2023-06-23-agent/"\n);\n\nconst docs = await loader.load();\n\nconst textSplitter = new RecursiveCharacterTextSplitter({\n  chunkSize: 1000,\n  chunkOverlap: 200,\n});\nconst splits = await textSplitter.splitDocuments(docs);\nconst vectorStore = await MemoryVectorStore.fromDocuments(\n  splits,\n  new OpenAIEmbeddings()\n);\n\n// Retrieve and generate using the relevant snippets of the blog.\nconst retriever = vectorStore.asRetriever();\nconst prompt = await pull<ChatPromptTemplate>("rlm/rag-prompt");\nconst llm = new ChatOpenAI({ model: "gpt-3.5-turbo", temperature: 0 });\n\nconst ragChain = RunnableSequence.from([\n  {\n    context: retriever.pipe(formatDocumentsAsString),\n    question: new RunnablePassthrough(),\n  },\n  prompt,\n  llm,\n  new StringOutputParser(),\n]);\n'})}),"\n",(0,s.jsx)(n.p,{children:"Let\u2019s see what this prompt actually looks like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'console.log(prompt.promptMessages.map((msg) => msg.prompt.template).join("\\n"));\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"You are an assistant for question-answering tasks. Use the following pieces of retrieved context to answer the question. If you don't know the answer, just say that you don't know. Use three sentences maximum and keep the answer concise.\nQuestion: {question}\nContext: {context}\nAnswer:\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'await ragChain.invoke("What is task decomposition?");\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'"Task decomposition is a technique used to break down complex tasks into smaller and simpler steps. I"... 208 more characters\n'})}),"\n",(0,s.jsx)(n.h2,{id:"adding-sources",children:"Adding sources"}),"\n",(0,s.jsx)(n.p,{children:"With LCEL, we can easily pass the retrieved documents through the chain\nand return them in the final response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import {\n  RunnableMap,\n  RunnablePassthrough,\n  RunnableSequence,\n} from "@langchain/core/runnables";\nimport { formatDocumentsAsString } from "langchain/util/document";\n\nconst ragChainFromDocs = RunnableSequence.from([\n  RunnablePassthrough.assign({\n    context: (input) => formatDocumentsAsString(input.context),\n  }),\n  prompt,\n  llm,\n  new StringOutputParser(),\n]);\n\nlet ragChainWithSource = new RunnableMap({\n  steps: { context: retriever, question: new RunnablePassthrough() },\n});\nragChainWithSource = ragChainWithSource.assign({ answer: ragChainFromDocs });\n\nawait ragChainWithSource.invoke("What is Task Decomposition");\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'{\n  question: "What is Task Decomposition",\n  context: [\n    Document {\n      pageContent: "Fig. 1. Overview of a LLM-powered autonomous agent system.\\n" +\n        "Component One: Planning#\\n" +\n        "A complicated ta"... 898 more characters,\n      metadata: {\n        source: "https://lilianweng.github.io/posts/2023-06-23-agent/",\n        loc: { lines: [Object] }\n      }\n    },\n    Document {\n      pageContent: \'Task decomposition can be done (1) by LLM with simple prompting like "Steps for XYZ.\\\\n1.", "What are\'... 887 more characters,\n      metadata: {\n        source: "https://lilianweng.github.io/posts/2023-06-23-agent/",\n        loc: { lines: [Object] }\n      }\n    },\n    Document {\n      pageContent: "Agent System Overview\\n" +\n        "                \\n" +\n        "                    Component One: Planning\\n" +\n        "                 "... 850 more characters,\n      metadata: {\n        source: "https://lilianweng.github.io/posts/2023-06-23-agent/",\n        loc: { lines: [Object] }\n      }\n    },\n    Document {\n      pageContent: "Resources:\\n" +\n        "1. Internet access for searches and information gathering.\\n" +\n        "2. Long Term memory management"... 456 more characters,\n      metadata: {\n        source: "https://lilianweng.github.io/posts/2023-06-23-agent/",\n        loc: { lines: [Object] }\n      }\n    }\n  ],\n  answer: "Task decomposition is a technique used to break down complex tasks into smaller and simpler steps. I"... 256 more characters\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Check out the ",(0,s.jsx)(n.a,{href:"https://smith.langchain.com/public/f07e78b6-cafc-41fd-af54-892c92263b09/r",children:"LangSmith\ntrace"}),"\nhere to see the internals of the chain."]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsx)(n.p,{children:"You\u2019ve now learned how to return sources from your QA chains."}),"\n",(0,s.jsxs)(n.p,{children:["Next, check out some of the other guides around RAG, such as ",(0,s.jsx)(n.a,{href:"../../docs/how_to/qa_streaming",children:"how to\nstream responses"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);