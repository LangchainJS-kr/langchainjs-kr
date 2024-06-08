"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3531],{47341:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>h,toc:()=>m});var t=a(74848),s=a(28453),r=a(78847),i=a(27846),o=a(63142);const l={sidebar_class_name:"hidden",title:"How to deal with high cardinality categorical variables"},c=void 0,h={id:"how_to/query_high_cardinality",title:"How to deal with high cardinality categorical variables",description:"This guide assumes familiarity with the following:",source:"@site/docs/how_to/query_high_cardinality.mdx",sourceDirName:"how_to",slug:"/how_to/query_high_cardinality",permalink:"/docs/how_to/query_high_cardinality",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/query_high_cardinality.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden",title:"How to deal with high cardinality categorical variables"},sidebar:"tutorialSidebar",previous:{title:"How to add examples to the prompt",permalink:"/docs/how_to/query_few_shot"},next:{title:"How to handle multiple queries",permalink:"/docs/how_to/query_multiple_queries"}},d={},m=[{value:"Setup",id:"setup",level:2},{value:"Install dependencies",id:"install-dependencies",level:3},...r.toc,{value:"Set environment variables",id:"set-environment-variables",level:3},{value:"Set up data",id:"set-up-data",level:4},{value:"Query Analysis",id:"query-analysis",level:2},{value:"Add in all values",id:"add-in-all-values",level:3},{value:"Find and all relevant values",id:"find-and-all-relevant-values",level:3},{value:"Next steps",id:"next-steps",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{title:"Prerequisites",type:"info",children:[(0,t.jsx)(n.p,{children:"This guide assumes familiarity with the following:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../../docs/tutorials/query_analysis",children:"Query analysis"})}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"High cardinality data refers to columns in a dataset that contain a\nlarge number of unique values. This guide demonstrates some techniques\nfor dealing with these inputs."}),"\n",(0,t.jsx)(n.p,{children:"For example, you may want to do query analysis to create a filter on a\ncategorical column. One of the difficulties here is that you usually\nneed to specify the EXACT categorical value. The issue is you need to\nmake sure the LLM generates that categorical value exactly. This can be\ndone relatively easy with prompting when there are only a few values\nthat are valid. When there are a high number of valid values then it\nbecomes more difficult, as those values may not fit in the LLM context,\nor (if they do) there may be too many for the LLM to properly attend to."}),"\n",(0,t.jsx)(n.p,{children:"In this notebook we take a look at how to approach this."}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.h3,{id:"install-dependencies",children:"Install dependencies"}),"\n","\n",(0,t.jsx)(r.default,{}),"\n",(0,t.jsx)(i.A,{children:(0,t.jsx)(n.p,{children:"@langchain/community zod @faker-js/faker"})}),"\n",(0,t.jsx)(n.h3,{id:"set-environment-variables",children:"Set environment variables"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"# Optional, use LangSmith for best-in-class observability\nLANGSMITH_API_KEY=your-api-key\nLANGCHAIN_TRACING_V2=true\n"})}),"\n",(0,t.jsx)(n.h4,{id:"set-up-data",children:"Set up data"}),"\n",(0,t.jsx)(n.p,{children:"We will generate a bunch of fake names"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { faker } from "@faker-js/faker";\n\nconst names = Array.from({ length: 10000 }, () => faker.person.fullName());\n'})}),"\n",(0,t.jsx)(n.p,{children:"Let\u2019s look at some of the names"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"names[0];\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'"Rolando Wilkinson"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"names[567];\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'"Homer Harber"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"query-analysis",children:"Query Analysis"}),"\n",(0,t.jsx)(n.p,{children:"We can now set up a baseline query analysis"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { z } from "zod";\n\nconst searchSchema = z.object({\n  query: z.string(),\n  author: z.string(),\n});\n'})}),"\n","\n",(0,t.jsx)(o.A,{customVarName:"llm"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { ChatPromptTemplate } from "@langchain/core/prompts";\nimport {\n  RunnablePassthrough,\n  RunnableSequence,\n} from "@langchain/core/runnables";\n\nconst system = `Generate a relevant search query for a library system`;\nconst prompt = ChatPromptTemplate.fromMessages([\n  ["system", system],\n  ["human", "{question}"],\n]);\nconst llmWithTools = llm.withStructuredOutput(searchSchema, {\n  name: "Search",\n});\nconst queryAnalyzer = RunnableSequence.from([\n  {\n    question: new RunnablePassthrough(),\n  },\n  prompt,\n  llmWithTools,\n]);\n'})}),"\n",(0,t.jsx)(n.p,{children:"We can see that if we spell the name exactly correctly, it knows how to\nhandle it"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'await queryAnalyzer.invoke("what are books about aliens by Jesse Knight");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'{ query: "aliens", author: "Jesse Knight" }\n'})}),"\n",(0,t.jsx)(n.p,{children:"The issue is that the values you want to filter on may NOT be spelled\nexactly correctly"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'await queryAnalyzer.invoke("what are books about aliens by jess knight");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'{ query: "books about aliens", author: "jess knight" }\n'})}),"\n",(0,t.jsx)(n.h3,{id:"add-in-all-values",children:"Add in all values"}),"\n",(0,t.jsx)(n.p,{children:"One way around this is to add ALL possible values to the prompt. That\nwill generally guide the query in the right direction"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const system = `Generate a relevant search query for a library system using the \'search\' tool.\n\nThe \'author\' you return to the user MUST be one of the following authors:\n\n{authors}\n\nDo NOT hallucinate author name!`;\nconst basePrompt = ChatPromptTemplate.fromMessages([\n  ["system", system],\n  ["human", "{question}"],\n]);\nconst prompt = await basePrompt.partial({ authors: names.join(", ") });\n\nconst queryAnalyzerAll = RunnableSequence.from([\n  {\n    question: new RunnablePassthrough(),\n  },\n  prompt,\n  llmWithTools,\n]);\n'})}),"\n",(0,t.jsx)(n.p,{children:"However\u2026 if the list of categoricals is long enough, it may error!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'try {\n  const res = await queryAnalyzerAll.invoke(\n    "what are books about aliens by jess knight"\n  );\n} catch (e) {\n  console.error(e);\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'Error: 400 This model\'s maximum context length is 16385 tokens. However, your messages resulted in 50197 tokens (50167 in the messages, 30 in the functions). Please reduce the length of the messages or functions.\n    at Function.generate (file:///Users/jacoblee/Library/Caches/deno/npm/registry.npmjs.org/openai/4.47.1/error.mjs:41:20)\n    at OpenAI.makeStatusError (file:///Users/jacoblee/Library/Caches/deno/npm/registry.npmjs.org/openai/4.47.1/core.mjs:256:25)\n    at OpenAI.makeRequest (file:///Users/jacoblee/Library/Caches/deno/npm/registry.npmjs.org/openai/4.47.1/core.mjs:299:30)\n    at eventLoopTick (ext:core/01_core.js:63:7)\n    at async file:///Users/jacoblee/Library/Caches/deno/npm/registry.npmjs.org/@langchain/openai/0.0.31/dist/chat_models.js:756:29\n    at async RetryOperation._fn (file:///Users/jacoblee/Library/Caches/deno/npm/registry.npmjs.org/p-retry/4.6.2/index.js:50:12) {\n  status: 400,\n  headers: {\n    "alt-svc": \'h3=":443"; ma=86400\',\n    "cf-cache-status": "DYNAMIC",\n    "cf-ray": "885f794b3df4fa52-SJC",\n    "content-length": "340",\n    "content-type": "application/json",\n    date: "Sat, 18 May 2024 23:02:16 GMT",\n    "openai-organization": "langchain",\n    "openai-processing-ms": "230",\n    "openai-version": "2020-10-01",\n    server: "cloudflare",\n    "set-cookie": "_cfuvid=F_c9lnRuQDUhKiUE2eR2PlsxHPldf1OAVMonLlHTjzM-1716073336256-0.0.1.1-604800000; path=/; domain="... 48 more characters,\n    "strict-transport-security": "max-age=15724800; includeSubDomains",\n    "x-ratelimit-limit-requests": "10000",\n    "x-ratelimit-limit-tokens": "2000000",\n    "x-ratelimit-remaining-requests": "9999",\n    "x-ratelimit-remaining-tokens": "1958402",\n    "x-ratelimit-reset-requests": "6ms",\n    "x-ratelimit-reset-tokens": "1.247s",\n    "x-request-id": "req_7b88677d6883fac1520e44543f68c839"\n  },\n  request_id: "req_7b88677d6883fac1520e44543f68c839",\n  error: {\n    message: "This model\'s maximum context length is 16385 tokens. However, your messages resulted in 50197 tokens"... 101 more characters,\n    type: "invalid_request_error",\n    param: "messages",\n    code: "context_length_exceeded"\n  },\n  code: "context_length_exceeded",\n  param: "messages",\n  type: "invalid_request_error",\n  attemptNumber: 1,\n  retriesLeft: 6\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"We can try to use a longer context window\u2026 but with so much information\nin there, it is not guaranteed to pick it up reliably"}),"\n",(0,t.jsx)(o.A,{customVarName:"llmLong",openaiParams:'{ model: "gpt-4-turbo-preview" }'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const structuredLlmLong = llmLong.withStructuredOutput(searchSchema, {\n  name: "Search",\n});\nconst queryAnalyzerAll = RunnableSequence.from([\n  {\n    question: new RunnablePassthrough(),\n  },\n  prompt,\n  structuredLlmLong,\n]);\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'await queryAnalyzerAll.invoke("what are books about aliens by jess knight");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'{ query: "aliens", author: "jess knight" }\n'})}),"\n",(0,t.jsx)(n.h3,{id:"find-and-all-relevant-values",children:"Find and all relevant values"}),"\n",(0,t.jsxs)(n.p,{children:["Instead, what we can do is create a ",(0,t.jsx)(n.a,{href:"../../docs/concepts#vectorstores",children:"vector store\nindex"})," over the relevant values and\nthen query that for the N most relevant values,"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { OpenAIEmbeddings } from "@langchain/openai";\nimport { MemoryVectorStore } from "langchain/vectorstores/memory";\n\nconst embeddings = new OpenAIEmbeddings({\n  model: "text-embedding-3-small",\n});\nconst vectorstore = await MemoryVectorStore.fromTexts(names, {}, embeddings);\n\nconst selectNames = async (question: string) => {\n  const _docs = await vectorstore.similaritySearch(question, 10);\n  const _names = _docs.map((d) => d.pageContent);\n  return _names.join(", ");\n};\n\nconst createPrompt = RunnableSequence.from([\n  {\n    question: new RunnablePassthrough(),\n    authors: selectNames,\n  },\n  basePrompt,\n]);\n\nawait createPrompt.invoke("what are books by jess knight");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'ChatPromptValue {\n  lc_serializable: true,\n  lc_kwargs: {\n    messages: [\n      SystemMessage {\n        lc_serializable: true,\n        lc_kwargs: {\n          content: "Generate a relevant search query for a library system using the \'search\' tool.\\n" +\n            "\\n" +\n            "The \'author\' you ret"... 243 more characters,\n          additional_kwargs: {},\n          response_metadata: {}\n        },\n        lc_namespace: [ "langchain_core", "messages" ],\n        content: "Generate a relevant search query for a library system using the \'search\' tool.\\n" +\n          "\\n" +\n          "The \'author\' you ret"... 243 more characters,\n        name: undefined,\n        additional_kwargs: {},\n        response_metadata: {}\n      },\n      HumanMessage {\n        lc_serializable: true,\n        lc_kwargs: {\n          content: "what are books by jess knight",\n          additional_kwargs: {},\n          response_metadata: {}\n        },\n        lc_namespace: [ "langchain_core", "messages" ],\n        content: "what are books by jess knight",\n        name: undefined,\n        additional_kwargs: {},\n        response_metadata: {}\n      }\n    ]\n  },\n  lc_namespace: [ "langchain_core", "prompt_values" ],\n  messages: [\n    SystemMessage {\n      lc_serializable: true,\n      lc_kwargs: {\n        content: "Generate a relevant search query for a library system using the \'search\' tool.\\n" +\n          "\\n" +\n          "The \'author\' you ret"... 243 more characters,\n        additional_kwargs: {},\n        response_metadata: {}\n      },\n      lc_namespace: [ "langchain_core", "messages" ],\n      content: "Generate a relevant search query for a library system using the \'search\' tool.\\n" +\n        "\\n" +\n        "The \'author\' you ret"... 243 more characters,\n      name: undefined,\n      additional_kwargs: {},\n      response_metadata: {}\n    },\n    HumanMessage {\n      lc_serializable: true,\n      lc_kwargs: {\n        content: "what are books by jess knight",\n        additional_kwargs: {},\n        response_metadata: {}\n      },\n      lc_namespace: [ "langchain_core", "messages" ],\n      content: "what are books by jess knight",\n      name: undefined,\n      additional_kwargs: {},\n      response_metadata: {}\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const queryAnalyzerSelect = createPrompt.pipe(llmWithTools);\n\nawait queryAnalyzerSelect.invoke("what are books about aliens by jess knight");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'{ query: "aliens", author: "Jess Knight" }\n'})}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsx)(n.p,{children:"You\u2019ve now learned how to deal with high cardinality data when\nconstructing queries."}),"\n",(0,t.jsxs)(n.p,{children:["Next, check out some of the other query analysis guides in this section,\nlike ",(0,t.jsx)(n.a,{href:"../../docs/how_to/query_no_queries",children:"how to use few-shotting\xa0to improve\nperformance"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},63142:(e,n,a)=>{a.d(n,{A:()=>m});a(96540);var t=a(11470),s=a(19365),r=a(21432),i=a(27846),o=a(27293),l=a(74848);function c(e){let{children:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.A,{type:"tip",children:(0,l.jsxs)("p",{children:["See"," ",(0,l.jsx)("a",{href:"/docs/get_started/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})}),(0,l.jsx)(i.A,{children:n})]})}const h={openaiParams:'{\n  model: "gpt-3.5-turbo",\n  temperature: 0\n}',anthropicParams:'{\n  model: "claude-3-sonnet-20240229",\n  temperature: 0\n}',fireworksParams:'{\n  model: "accounts/fireworks/models/firefunction-v1",\n  temperature: 0\n}',mistralParams:'{\n  model: "mistral-large-latest",\n  temperature: 0\n}',groqParams:'{\n  model: "mixtral-8x7b-32768",\n  temperature: 0\n}',vertexParams:'{\n  model: "gemini-1.5-pro",\n  temperature: 0\n}'},d=["openai","anthropic","mistral","groq","vertex"];function m(e){const{customVarName:n,additionalDependencies:a}=e,i=n??"model",o=e.openaiParams??h.openaiParams,m=e.anthropicParams??h.anthropicParams,u=e.fireworksParams??h.fireworksParams,p=e.mistralParams??h.mistralParams,g=e.groqParams??h.groqParams,y=e.vertexParams??h.vertexParams,x=e.providers??["openai","anthropic","fireworks","mistral","groq","vertex"],j={openai:{value:"openai",label:"OpenAI",default:!0,text:`import { ChatOpenAI } from "@langchain/openai";\n\nconst ${i} = new ChatOpenAI(${o});`,envs:"OPENAI_API_KEY=your-api-key",dependencies:"@langchain/openai"},anthropic:{value:"anthropic",label:"Anthropic",default:!1,text:`import { ChatAnthropic } from "@langchain/anthropic";\n\nconst ${i} = new ChatAnthropic(${m});`,envs:"ANTHROPIC_API_KEY=your-api-key",dependencies:"@langchain/anthropic"},fireworks:{value:"fireworks",label:"FireworksAI",default:!1,text:`import { ChatFireworks } from "@langchain/community/chat_models/fireworks";\n\nconst ${i} = new ChatFireworks(${u});`,envs:"FIREWORKS_API_KEY=your-api-key",dependencies:"@langchain/community"},mistral:{value:"mistral",label:"MistralAI",default:!1,text:`import { ChatMistralAI } from "@langchain/mistralai";\n\nconst ${i} = new ChatMistralAI(${p});`,envs:"MISTRAL_API_KEY=your-api-key",dependencies:"@langchain/mistralai"},groq:{value:"groq",label:"Groq",default:!1,text:`import { ChatGroq } from "@langchain/groq";\n\nconst ${i} = new ChatGroq(${g});`,envs:"GROQ_API_KEY=your-api-key",dependencies:"@langchain/groq"},vertex:{value:"vertex",label:"VertexAI",default:!1,text:`import { ChatVertexAI } from "@langchain/google-vertexai";\n\nconst ${i} = new ChatVertexAI(${y});`,envs:"GOOGLE_APPLICATION_CREDENTIALS=credentials.json",dependencies:"@langchain/google-vertexai"}},f=(e.onlyWso?d:x).map((e=>j[e]));return(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"\uc0ac\uc6a9\ud560 \ucc44\ud305 \ubaa8\ub378 \uc120\ud0dd:"}),(0,l.jsx)(t.A,{groupId:"modelTabs",children:f.map((e=>(0,l.jsxs)(s.A,{value:e.value,label:e.label,children:[(0,l.jsx)("h4",{children:"\uc758\uc874\uc131 \ucd94\uac00"}),(0,l.jsx)(c,{children:[e.dependencies,a].join(" ")}),(0,l.jsx)("h4",{children:"\ud658\uacbd\ubcc0\uc218 \ucd94\uac00"}),(0,l.jsx)(r.A,{language:"bash",children:e.envs}),(0,l.jsx)("h4",{children:"\ubaa8\ub378 \uc778\uc2a4\ud134\uc2a4\ud654"}),(0,l.jsx)(r.A,{language:"typescript",children:e.text})]},e.value)))})]})}},27846:(e,n,a)=>{a.d(n,{A:()=>o});a(96540);var t=a(11470),s=a(19365),r=a(21432),i=a(74848);function o(e){let{children:n}=e;return(0,i.jsxs)(t.A,{groupId:"npm2yarn",children:[(0,i.jsx)(s.A,{value:"npm",label:"npm",children:(0,i.jsxs)(r.A,{language:"bash",children:["npm i ",n]})}),(0,i.jsx)(s.A,{value:"yarn",label:"yarn",default:!0,children:(0,i.jsxs)(r.A,{language:"bash",children:["yarn add ",n]})}),(0,i.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,i.jsxs)(r.A,{language:"bash",children:["pnpm add ",n]})})]})}}}]);