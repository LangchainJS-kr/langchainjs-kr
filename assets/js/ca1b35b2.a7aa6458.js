(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7182],{37698:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>g});var o=t(74848),a=t(28453),r=t(78847),i=t(64428),l=t(45461),s=t.n(l),c=t(32286),h=t.n(c);const p={sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},u="How to invoke runnables in parallel",m={id:"how_to/parallel",title:"How to invoke runnables in parallel",description:"This guide assumes familiarity with the following concepts:",source:"@site/docs/how_to/parallel.mdx",sourceDirName:"how_to",slug:"/how_to/parallel",permalink:"/docs/how_to/parallel",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/parallel.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},d={},g=[{value:"Formatting with <code>RunnableParallels</code>",id:"formatting-with-runnableparallels",level:2},...r.toc,{value:"Manipulating outputs/inputs",id:"manipulating-outputsinputs",level:2},{value:"Next steps",id:"next-steps",level:2}];function b(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"how-to-invoke-runnables-in-parallel",children:"How to invoke runnables in parallel"}),"\n",(0,o.jsxs)(n.admonition,{title:"Prerequisites",type:"info",children:[(0,o.jsx)(n.p,{children:"This guide assumes familiarity with the following concepts:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/concepts/#langchain-expression-language",children:"LangChain Expression Language (LCEL)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/how_to/sequence/",children:"Chaining runnables"})}),"\n"]})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://v02.api.js.langchain.com/classes/langchain_core_runnables.RunnableParallel.html",children:(0,o.jsx)(n.code,{children:"RunnableParallel"})})," (also known as a ",(0,o.jsx)(n.code,{children:"RunnableMap"}),") primitive is an object whose values are runnables (or things that can be coerced to runnables, like functions).\nIt runs all of its values in parallel, and each value is called with the initial input to the ",(0,o.jsx)(n.code,{children:"RunnableParallel"}),". The final return value is an object with the results of each value under its appropriate key."]}),"\n",(0,o.jsxs)(n.h2,{id:"formatting-with-runnableparallels",children:["Formatting with ",(0,o.jsx)(n.code,{children:"RunnableParallels"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"RunnableParallels"})," are useful for parallelizing operations, but can also be useful for manipulating the output of one Runnable to match the input format of the next Runnable in a sequence. You can use them to split or fork the chain so that multiple components can process the input in parallel. Later, other components can join or merge the results to synthesize a final response. This type of chain creates a computation graph that looks like the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"     Input\n      / \\\n     /   \\\n Branch1 Branch2\n     \\   /\n      \\ /\n      Combine\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Below, the input to each chain in the ",(0,o.jsx)(n.code,{children:"RunnableParallel"})," is expected to be an object with a key for ",(0,o.jsx)(n.code,{children:'"topic"'}),".\nWe can satisfy that requirement by invoking our chain with an object matching that structure."]}),"\n","\n",(0,o.jsx)(r.default,{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/anthropic @langchain/cohere\n"})}),"\n","\n",(0,o.jsx)(i.A,{language:"typescript",children:s()}),"\n",(0,o.jsx)(n.h2,{id:"manipulating-outputsinputs",children:"Manipulating outputs/inputs"}),"\n",(0,o.jsx)(n.p,{children:"Maps can be useful for manipulating the output of one Runnable to match the input format of the next Runnable in a sequence."}),"\n",(0,o.jsxs)(n.p,{children:["Note below that the object within the ",(0,o.jsx)(n.code,{children:"RunnableSequence.from()"})," call is automatically coerced into a runnable map. All keys of the object must\nhave values that are runnables or can be themselves coerced to runnables (functions to ",(0,o.jsx)(n.code,{children:"RunnableLambda"}),"s or objects to ",(0,o.jsx)(n.code,{children:"RunnableMap"}),"s).\nThis coercion will also occur when composing chains via the ",(0,o.jsx)(n.code,{children:".pipe()"})," method."]}),"\n","\n",(0,o.jsx)(i.A,{language:"typescript",children:h()}),"\n",(0,o.jsx)(n.p,{children:'Here the input to prompt is expected to be a map with keys "context" and "question". The user input is just the question. So we need to get the context using our retriever and passthrough the user input under the "question" key.'}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,o.jsxs)(n.p,{children:["You now know some ways to format and parallelize chain steps with ",(0,o.jsx)(n.code,{children:"RunnableParallel"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Next, you might be interested in ",(0,o.jsx)(n.a,{href:"/docs/how_to/functions/",children:"using custom logic"})," in your chains."]})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},45461:e=>{e.exports={content:"import { PromptTemplate } from \"@langchain/core/prompts\";\nimport { RunnableMap } from \"@langchain/core/runnables\";\nimport { ChatAnthropic } from \"@langchain/anthropic\";\n\nconst model = new ChatAnthropic({});\nconst jokeChain = PromptTemplate.fromTemplate(\n  \"Tell me a joke about {topic}\"\n).pipe(model);\nconst poemChain = PromptTemplate.fromTemplate(\n  \"write a 2-line poem about {topic}\"\n).pipe(model);\n\nconst mapChain = RunnableMap.from({\n  joke: jokeChain,\n  poem: poemChain,\n});\n\nconst result = await mapChain.invoke({ topic: \"bear\" });\nconsole.log(result);\n/*\n  {\n    joke: AIMessage {\n      content: \" Here's a silly joke about a bear:\\n\" +\n        '\\n' +\n        'What do you call a bear with no teeth?\\n' +\n        'A gummy bear!',\n      additional_kwargs: {}\n    },\n    poem: AIMessage {\n      content: ' Here is a 2-line poem about a bear:\\n' +\n        '\\n' +\n        'Furry and wild, the bear roams free  \\n' +\n        'Foraging the forest, strong as can be',\n      additional_kwargs: {}\n    }\n  }\n*/\n",imports:[{local:"PromptTemplate",imported:"PromptTemplate",source:"@langchain/core/prompts"},{local:"RunnableMap",imported:"RunnableMap",source:"@langchain/core/runnables"},{local:"ChatAnthropic",imported:"ChatAnthropic",source:"@langchain/anthropic"}]}},32286:e=>{e.exports={content:'import { CohereEmbeddings } from "@langchain/cohere";\nimport { PromptTemplate } from "@langchain/core/prompts";\nimport { StringOutputParser } from "@langchain/core/output_parsers";\nimport {\n  RunnablePassthrough,\n  RunnableSequence,\n} from "@langchain/core/runnables";\nimport { Document } from "@langchain/core/documents";\nimport { ChatAnthropic } from "@langchain/anthropic";\nimport { MemoryVectorStore } from "langchain/vectorstores/memory";\n\nconst model = new ChatAnthropic();\nconst vectorstore = await MemoryVectorStore.fromDocuments(\n  [{ pageContent: "mitochondria is the powerhouse of the cell", metadata: {} }],\n  new CohereEmbeddings()\n);\nconst retriever = vectorstore.asRetriever();\nconst template = `Answer the question based only on the following context:\n{context}\n\nQuestion: {question}`;\n\nconst prompt = PromptTemplate.fromTemplate(template);\n\nconst formatDocs = (docs: Document[]) => docs.map((doc) => doc.pageContent);\n\nconst retrievalChain = RunnableSequence.from([\n  { context: retriever.pipe(formatDocs), question: new RunnablePassthrough() },\n  prompt,\n  model,\n  new StringOutputParser(),\n]);\n\nconst result = await retrievalChain.invoke(\n  "what is the powerhouse of the cell?"\n);\nconsole.log(result);\n\n/*\n Based on the given context, the powerhouse of the cell is mitochondria.\n*/\n',imports:[{local:"CohereEmbeddings",imported:"CohereEmbeddings",source:"@langchain/cohere"},{local:"PromptTemplate",imported:"PromptTemplate",source:"@langchain/core/prompts"},{local:"StringOutputParser",imported:"StringOutputParser",source:"@langchain/core/output_parsers"},{local:"RunnablePassthrough",imported:"RunnablePassthrough",source:"@langchain/core/runnables"},{local:"RunnableSequence",imported:"RunnableSequence",source:"@langchain/core/runnables"},{local:"Document",imported:"Document",source:"@langchain/core/documents"},{local:"ChatAnthropic",imported:"ChatAnthropic",source:"@langchain/anthropic"},{local:"MemoryVectorStore",imported:"MemoryVectorStore",source:"langchain/vectorstores/memory"}]}}}]);