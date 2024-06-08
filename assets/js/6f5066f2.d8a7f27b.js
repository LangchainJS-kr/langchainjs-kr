"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4548],{86358:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>t,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>o});var l=a(74848),r=a(28453);const c={sidebar_class_name:"hidden",title:"LangChain Expression Language Cheatsheet"},i=void 0,s={id:"how_to/lcel_cheatsheet",title:"LangChain Expression Language Cheatsheet",description:"This is a quick reference for all the most important LCEL primitives.",source:"@site/docs/how_to/lcel_cheatsheet.mdx",sourceDirName:"how_to",slug:"/how_to/lcel_cheatsheet",permalink:"/docs/how_to/lcel_cheatsheet",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/lcel_cheatsheet.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden",title:"LangChain Expression Language Cheatsheet"},sidebar:"tutorialSidebar",previous:{title:"How to reindex data to keep your vectorstore in-sync with the underlying data source",permalink:"/docs/how_to/indexing"},next:{title:"How to get log probabilities",permalink:"/docs/how_to/logprobs"}},t={},o=[{value:"Invoke a runnable",id:"invoke-a-runnable",level:3},{value:"runnable.invoke()",id:"runnable.invoke",level:4},{value:"Batch a runnable",id:"batch-a-runnable",level:3},{value:"runnable.batch()",id:"runnable.batch",level:4},{value:"Stream a runnable",id:"stream-a-runnable",level:3},{value:"runnable.stream()",id:"runnable.stream",level:4},{value:"Compose runnables",id:"compose-runnables",level:3},{value:"runnable.pipe()",id:"runnable.pipe",level:4},{value:"RunnableSequence.from()",id:"runnablesequence.from",level:4},{value:"Invoke runnables in parallel",id:"invoke-runnables-in-parallel",level:3},{value:"RunnableParallel",id:"runnableparallel",level:4},{value:"Turn a function into a runnable",id:"turn-a-function-into-a-runnable",level:3},{value:"RunnableLambda",id:"runnablelambda",level:4},{value:"Merge input and output dicts",id:"merge-input-and-output-dicts",level:3},{value:"RunnablePassthrough.assign()",id:"runnablepassthrough.assign",level:4},{value:"Include input dict in output dict",id:"include-input-dict-in-output-dict",level:3},{value:"RunnablePassthrough",id:"runnablepassthrough",level:4},{value:"Add default invocation args",id:"add-default-invocation-args",level:3},{value:"runnable.bind()",id:"runnable.bind",level:4},{value:"Add fallbacks",id:"add-fallbacks",level:3},{value:"runnable.withFallbacks()",id:"runnable.withfallbacks",level:4},{value:"Add retries",id:"add-retries",level:3},{value:"runnable.withRetry()",id:"runnable.withretry",level:4},{value:"Configure runnable execution",id:"configure-runnable-execution",level:3},{value:"RunnableConfig",id:"runnableconfig",level:4},{value:"Add default config to runnable",id:"add-default-config-to-runnable",level:3},{value:"runnable.withConfig()",id:"runnable.withconfig",level:4},{value:"Build a chain dynamically based on input",id:"build-a-chain-dynamically-based-on-input",level:3},{value:"Generate a stream of internal events",id:"generate-a-stream-of-internal-events",level:3},{value:"runnable.streamEvents()",id:"runnable.streamevents",level:4},{value:"Return a subset of keys from output object",id:"return-a-subset-of-keys-from-output-object",level:3},{value:"runnable.pick()",id:"runnable.pick",level:4},{value:"Declaratively make a batched version of a runnable",id:"declaratively-make-a-batched-version-of-a-runnable",level:3},{value:"<code>runnable.map()</code>",id:"runnable.map",level:4},{value:"Get a graph representation of a runnable",id:"get-a-graph-representation-of-a-runnable",level:3},{value:"runnable.getGraph()",id:"runnable.getgraph",level:4}];function u(n){const e={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:["This is a quick reference for all the most important LCEL primitives.\nFor more advanced usage see the ",(0,l.jsx)(e.a,{href:"../../docs/how_to/#langchain-expression-language-lcel",children:"LCEL how-to\nguides"})," and the\n",(0,l.jsx)(e.a,{href:"https://api.js.langchain.com/classes/langchain_core_runnables.Runnable.html",children:"full API\nreference"}),"."]}),"\n",(0,l.jsx)(e.h3,{id:"invoke-a-runnable",children:"Invoke a runnable"}),"\n",(0,l.jsx)(e.h4,{id:"runnable.invoke",children:(0,l.jsx)(e.a,{href:"https://api.js.langchain.com/classes/langchain_core_runnables.Runnable.html#invoke",children:"runnable.invoke()"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { RunnableLambda } from "@langchain/core/runnables";\n\nconst runnable = RunnableLambda.from((x: number) => x.toString());\n\nawait runnable.invoke(5);\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:'"5"\n'})}),"\n",(0,l.jsx)(e.h3,{id:"batch-a-runnable",children:"Batch a runnable"}),"\n",(0,l.jsx)(e.h4,{id:"runnable.batch",children:(0,l.jsx)(e.a,{href:"hhttps://api.js.langchain.com/classes/langchain_core_runnables.Runnable.html#batch",children:"runnable.batch()"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { RunnableLambda } from "@langchain/core/runnables";\n\nconst runnable = RunnableLambda.from((x: number) => x.toString());\n\nawait runnable.batch([7, 8, 9]);\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:'[ "7", "8", "9" ]\n'})}),"\n",(0,l.jsx)(e.h3,{id:"stream-a-runnable",children:"Stream a runnable"}),"\n",(0,l.jsx)(e.h4,{id:"runnable.stream",children:(0,l.jsx)(e.a,{href:"https://api.js.langchain.com/classes/langchain_core_runnables.Runnable.html#stream",children:"runnable.stream()"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { RunnableLambda } from "@langchain/core/runnables";\n\nasync function* generatorFn(x: number[]) {\n  for (const i of x) {\n    yield i.toString();\n  }\n}\n\nconst runnable = RunnableLambda.from(generatorFn);\n\nconst stream = await runnable.stream([0, 1, 2, 3, 4]);\n\nfor await (const chunk of stream) {\n  console.log(chunk);\n  console.log("---");\n}\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"0\n---\n1\n---\n2\n---\n3\n---\n4\n---\n"})}),"\n",(0,l.jsx)(e.h3,{id:"compose-runnables",children:"Compose runnables"}),"\n",(0,l.jsx)(e.h4,{id:"runnable.pipe",children:(0,l.jsx)(e.a,{href:"https://api.js.langchain.com/classes/langchain_core_runnables.Runnable.html#pipe",children:"runnable.pipe()"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { RunnableLambda } from "@langchain/core/runnables";\n\nconst runnable1 = RunnableLambda.from((x: any) => {\n  return { foo: x };\n});\n\nconst runnable2 = RunnableLambda.from((x: any) => [x].concat([x]));\n\nconst chain = runnable1.pipe(runnable2);\n\nawait chain.invoke(2);\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"[ { foo: 2 }, { foo: 2 } ]\n"})}),"\n",(0,l.jsx)(e.h4,{id:"runnablesequence.from",children:(0,l.jsx)(e.a,{href:"https://api.js.langchain.com/classes/langchain_core_runnables.RunnableSequence.html#from",children:"RunnableSequence.from()"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { RunnableLambda, RunnableSequence } from "@langchain/core/runnables";\n\nconst runnable1 = RunnableLambda.from((x: any) => {\n  return { foo: x };\n});\n\nconst runnable2 = RunnableLambda.from((x: any) => [x].concat([x]));\n\nconst chain = RunnableSequence.from([runnable1, runnable2]);\n\nawait chain.invoke(2);\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"[ { foo: 2 }, { foo: 2 } ]\n"})}),"\n",(0,l.jsx)(e.h3,{id:"invoke-runnables-in-parallel",children:"Invoke runnables in parallel"}),"\n",(0,l.jsx)(e.h4,{id:"runnableparallel",children:(0,l.jsx)(e.a,{href:"https://api.js.langchain.com/classes/langchain_core_runnables.RunnableParallel.html",children:"RunnableParallel"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { RunnableLambda, RunnableParallel } from "@langchain/core/runnables";\n\nconst runnable1 = RunnableLambda.from((x: any) => {\n  return { foo: x };\n});\n\nconst runnable2 = RunnableLambda.from((x: any) => [x].concat([x]));\n\nconst chain = RunnableParallel.from({\n  first: runnable1,\n  second: runnable2,\n});\n\nawait chain.invoke(2);\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"{ first: { foo: 2 }, second: [ 2, 2 ] }\n"})}),"\n",(0,l.jsx)(e.h3,{id:"turn-a-function-into-a-runnable",children:"Turn a function into a runnable"}),"\n",(0,l.jsx)(e.h4,{id:"runnablelambda",children:(0,l.jsx)(e.a,{href:"https://api.js.langchain.com/classes/langchain_core_runnables.RunnableLambda.html",children:"RunnableLambda"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { RunnableLambda } from "@langchain/core/runnables";\n\nconst adder = (x: number) => {\n  return x + 5;\n};\n\nconst runnable = RunnableLambda.from(adder);\n\nawait runnable.invoke(5);\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"10\n"})}),"\n",(0,l.jsx)(e.h3,{id:"merge-input-and-output-dicts",children:"Merge input and output dicts"}),"\n",(0,l.jsx)(e.h4,{id:"runnablepassthrough.assign",children:(0,l.jsx)(e.a,{href:"https://api.js.langchain.com/classes/langchain_core_runnables.RunnablePassthrough.html#assign",children:"RunnablePassthrough.assign()"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { RunnableLambda, RunnablePassthrough } from "@langchain/core/runnables";\n\nconst runnable = RunnableLambda.from((x: { foo: number }) => {\n  return x.foo + 7;\n});\n\nconst chain = RunnablePassthrough.assign({\n  bar: runnable,\n});\n\nawait chain.invoke({ foo: 10 });\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"{ foo: 10, bar: 17 }\n"})}),"\n",(0,l.jsx)(e.h3,{id:"include-input-dict-in-output-dict",children:"Include input dict in output dict"}),"\n",(0,l.jsx)(e.h4,{id:"runnablepassthrough",children:(0,l.jsx)(e.a,{href:"https://api.js.langchain.com/classes/langchain_core_runnables.RunnablePassthrough.html",children:"RunnablePassthrough"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import {\n  RunnableLambda,\n  RunnableParallel,\n  RunnablePassthrough,\n} from "@langchain/core/runnables";\n\nconst runnable = RunnableLambda.from((x: { foo: number }) => {\n  return x.foo + 7;\n});\n\nconst chain = RunnableParallel.from({\n  bar: runnable,\n  baz: new RunnablePassthrough(),\n});\n\nawait chain.invoke({ foo: 10 });\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"{ baz: { foo: 10 }, bar: 17 }\n"})}),"\n",(0,l.jsx)(e.h3,{id:"add-default-invocation-args",children:"Add default invocation args"}),"\n",(0,l.jsx)(e.h4,{id:"runnable.bind",children:(0,l.jsx)(e.a,{href:"https://api.js.langchain.com/classes/langchain_core_runnables.Runnable.html#bind",children:"runnable.bind()"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { type RunnableConfig, RunnableLambda } from "@langchain/core/runnables";\n\nconst branchedFn = (mainArg: Record<string, any>, config?: RunnableConfig) => {\n  if (config?.configurable?.boundKey !== undefined) {\n    return { ...mainArg, boundKey: config?.configurable?.boundKey };\n  }\n  return mainArg;\n};\n\nconst runnable = RunnableLambda.from(branchedFn);\nconst boundRunnable = runnable.bind({ configurable: { boundKey: "goodbye!" } });\n\nawait boundRunnable.invoke({ bar: "hello" });\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:'{ bar: "hello", boundKey: "goodbye!" }\n'})}),"\n",(0,l.jsx)(e.h3,{id:"add-fallbacks",children:"Add fallbacks"}),"\n",(0,l.jsx)(e.h4,{id:"runnable.withfallbacks",children:(0,l.jsx)(e.a,{href:"https://api.js.langchain.com/classes/langchain_core_runnables.Runnable.html#withFallbacks",children:"runnable.withFallbacks()"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { RunnableLambda } from "@langchain/core/runnables";\n\nconst runnable = RunnableLambda.from((x: any) => {\n  throw new Error("Error case");\n});\n\nconst fallback = RunnableLambda.from((x: any) => x + x);\n\nconst chain = runnable.withFallbacks({ fallbacks: [fallback] });\n\nawait chain.invoke("foo");\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:'"foofoo"\n'})}),"\n",(0,l.jsx)(e.h3,{id:"add-retries",children:"Add retries"}),"\n",(0,l.jsx)(e.h4,{id:"runnable.withretry",children:(0,l.jsx)(e.a,{href:"https://api.js.langchain.com/classes/langchain_core_runnables.Runnable.html#withRetry",children:"runnable.withRetry()"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { RunnableLambda } from "@langchain/core/runnables";\n\nlet counter = 0;\n\nconst retryFn = (_: any) => {\n  counter++;\n  console.log(`attempt with counter ${counter}`);\n  throw new Error("Expected error");\n};\n\nconst chain = RunnableLambda.from(retryFn).withRetry({\n  stopAfterAttempt: 2,\n});\n\nawait chain.invoke(2);\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"attempt with counter 1\nattempt with counter 2\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"Error: Expected error\n"})}),"\n",(0,l.jsx)(e.h3,{id:"configure-runnable-execution",children:"Configure runnable execution"}),"\n",(0,l.jsx)(e.h4,{id:"runnableconfig",children:(0,l.jsx)(e.a,{href:"https://api.js.langchain.com/interfaces/langchain_core_runnables.RunnableConfig.html",children:"RunnableConfig"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { RunnableLambda } from "@langchain/core/runnables";\n\nconst runnable1 = RunnableLambda.from(async (x: any) => {\n  await new Promise((resolve) => setTimeout(resolve, 2000));\n  return { foo: x };\n});\n\n// Takes 4 seconds\nawait runnable1.batch([1, 2, 3], { maxConcurrency: 2 });\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"[ { foo: 1 }, { foo: 2 }, { foo: 3 } ]\n"})}),"\n",(0,l.jsx)(e.h3,{id:"add-default-config-to-runnable",children:"Add default config to runnable"}),"\n",(0,l.jsx)(e.h4,{id:"runnable.withconfig",children:(0,l.jsx)(e.a,{href:"https://api.js.langchain.com/classes/langchain_core_runnables.Runnable.html#withConfig",children:"runnable.withConfig()"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { RunnableLambda } from "@langchain/core/runnables";\n\nconst runnable1 = RunnableLambda.from(async (x: any) => {\n  await new Promise((resolve) => setTimeout(resolve, 2000));\n  return { foo: x };\n}).withConfig({\n  maxConcurrency: 2,\n});\n\n// Takes 4 seconds\nawait runnable1.batch([1, 2, 3]);\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"[ { foo: 1 }, { foo: 2 }, { foo: 3 } ]\n"})}),"\n",(0,l.jsx)(e.h3,{id:"build-a-chain-dynamically-based-on-input",children:"Build a chain dynamically based on input"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { RunnableLambda } from "@langchain/core/runnables";\n\nconst runnable1 = RunnableLambda.from((x: any) => {\n  return { foo: x };\n});\n\nconst runnable2 = RunnableLambda.from((x: any) => [x].concat([x]));\n\nconst chain = RunnableLambda.from((x: number): any => {\n  if (x > 6) {\n    return runnable1;\n  }\n  return runnable2;\n});\n\nawait chain.invoke(7);\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"{ foo: 7 }\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:"await chain.invoke(5);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"[ 5, 5 ]\n"})}),"\n",(0,l.jsx)(e.h3,{id:"generate-a-stream-of-internal-events",children:"Generate a stream of internal events"}),"\n",(0,l.jsx)(e.h4,{id:"runnable.streamevents",children:(0,l.jsx)(e.a,{href:"https://v02.api.js.langchain.com/classes/langchain_core_runnables.Runnable.html#streamEvents",children:"runnable.streamEvents()"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { RunnableLambda } from "@langchain/core/runnables";\n\nconst runnable1 = RunnableLambda.from((x: number) => {\n  return {\n    foo: x,\n  };\n}).withConfig({\n  runName: "first",\n});\n\nasync function* generatorFn(x: { foo: number }) {\n  for (let i = 0; i < x.foo; i++) {\n    yield i.toString();\n  }\n}\n\nconst runnable2 = RunnableLambda.from(generatorFn).withConfig({\n  runName: "second",\n});\n\nconst chain = runnable1.pipe(runnable2);\n\nfor await (const event of chain.streamEvents(2, { version: "v1" })) {\n  console.log(\n    `event=${event.event} | name=${event.name} | data=${JSON.stringify(\n      event.data\n    )}`\n  );\n}\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:'event=on_chain_start | name=RunnableSequence | data={"input":2}\nevent=on_chain_start | name=first | data={}\nevent=on_chain_stream | name=first | data={"chunk":{"foo":2}}\nevent=on_chain_start | name=second | data={}\nevent=on_chain_end | name=first | data={"input":2,"output":{"foo":2}}\nevent=on_chain_stream | name=second | data={"chunk":"0"}\nevent=on_chain_stream | name=RunnableSequence | data={"chunk":"0"}\nevent=on_chain_stream | name=second | data={"chunk":"1"}\nevent=on_chain_stream | name=RunnableSequence | data={"chunk":"1"}\nevent=on_chain_end | name=second | data={"output":"01"}\nevent=on_chain_end | name=RunnableSequence | data={"output":"01"}\n'})}),"\n",(0,l.jsx)(e.h3,{id:"return-a-subset-of-keys-from-output-object",children:"Return a subset of keys from output object"}),"\n",(0,l.jsx)(e.h4,{id:"runnable.pick",children:(0,l.jsx)(e.a,{href:"https://api.js.langchain.com/classes/langchain_core_runnables.Runnable.html#pick",children:"runnable.pick()"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { RunnableLambda, RunnablePassthrough } from "@langchain/core/runnables";\n\nconst runnable = RunnableLambda.from((x: { baz: number }) => {\n  return x.baz + 5;\n});\n\nconst chain = RunnablePassthrough.assign({\n  foo: runnable,\n}).pick(["foo", "bar"]);\n\nawait chain.invoke({ bar: "hi", baz: 2 });\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:'{ foo: 7, bar: "hi" }\n'})}),"\n",(0,l.jsx)(e.h3,{id:"declaratively-make-a-batched-version-of-a-runnable",children:"Declaratively make a batched version of a runnable"}),"\n",(0,l.jsx)(e.h4,{id:"runnable.map",children:(0,l.jsx)(e.a,{href:"https://api.js.langchain.com/classes/langchain_core_runnables.Runnable.html#map",children:(0,l.jsx)(e.code,{children:"runnable.map()"})})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { RunnableLambda } from "@langchain/core/runnables";\n\nconst runnable1 = RunnableLambda.from((x: number) => [...Array(x).keys()]);\nconst runnable2 = RunnableLambda.from((x: number) => x + 5);\n\nconst chain = runnable1.pipe(runnable2.map());\n\nawait chain.invoke(3);\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"[ 5, 6, 7 ]\n"})}),"\n",(0,l.jsx)(e.h3,{id:"get-a-graph-representation-of-a-runnable",children:"Get a graph representation of a runnable"}),"\n",(0,l.jsx)(e.h4,{id:"runnable.getgraph",children:(0,l.jsx)(e.a,{href:"https://api.js.langchain.com/classes/langchain_core_runnables.Runnable.html#getGraph",children:"runnable.getGraph()"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:'import { RunnableLambda, RunnableSequence } from "@langchain/core/runnables";\n\nconst runnable1 = RunnableLambda.from((x: any) => {\n  return { foo: x };\n});\n\nconst runnable2 = RunnableLambda.from((x: any) => [x].concat([x]));\n\nconst runnable3 = RunnableLambda.from((x: any) => x.toString());\n\nconst chain = RunnableSequence.from([\n  runnable1,\n  {\n    second: runnable2,\n    third: runnable3,\n  },\n]);\n\nawait chain.getGraph();\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:'Graph {\n  nodes: {\n    "935c67df-7ae3-4853-9d26-579003c08407": {\n      id: "935c67df-7ae3-4853-9d26-579003c08407",\n      data: {\n        name: "RunnableLambdaInput",\n        schema: ZodAny {\n          spa: [Function: bound safeParseAsync] AsyncFunction,\n          _def: [Object],\n          parse: [Function: bound parse],\n          safeParse: [Function: bound safeParse],\n          parseAsync: [Function: bound parseAsync] AsyncFunction,\n          safeParseAsync: [Function: bound safeParseAsync] AsyncFunction,\n          refine: [Function: bound refine],\n          refinement: [Function: bound refinement],\n          superRefine: [Function: bound superRefine],\n          optional: [Function: bound optional],\n          nullable: [Function: bound nullable],\n          nullish: [Function: bound nullish],\n          array: [Function: bound array],\n          promise: [Function: bound promise],\n          or: [Function: bound or],\n          and: [Function: bound and],\n          transform: [Function: bound transform],\n          brand: [Function: bound brand],\n          default: [Function: bound default],\n          catch: [Function: bound catch],\n          describe: [Function: bound describe],\n          pipe: [Function: bound pipe],\n          readonly: [Function: bound readonly],\n          isNullable: [Function: bound isNullable],\n          isOptional: [Function: bound isOptional],\n          _any: true\n        }\n      }\n    },\n    "a73d7b3e-0ed7-46cf-b141-de64ea1e12de": {\n      id: "a73d7b3e-0ed7-46cf-b141-de64ea1e12de",\n      data: RunnableLambda {\n        lc_serializable: false,\n        lc_kwargs: { func: [Function (anonymous)] },\n        lc_runnable: true,\n        name: undefined,\n        lc_namespace: [ "langchain_core", "runnables" ],\n        func: [Function (anonymous)]\n      }\n    },\n    "ff104b34-c13b-4677-8b82-af70d3548e12": {\n      id: "ff104b34-c13b-4677-8b82-af70d3548e12",\n      data: RunnableMap {\n        lc_serializable: true,\n        lc_kwargs: { steps: [Object] },\n        lc_runnable: true,\n        name: undefined,\n        lc_namespace: [ "langchain_core", "runnables" ],\n        steps: { second: [RunnableLambda], third: [RunnableLambda] }\n      }\n    },\n    "2dc627dc-1c06-45b1-b14f-bb1f6e689f83": {\n      id: "2dc627dc-1c06-45b1-b14f-bb1f6e689f83",\n      data: {\n        name: "RunnableMapOutput",\n        schema: ZodAny {\n          spa: [Function: bound safeParseAsync] AsyncFunction,\n          _def: [Object],\n          parse: [Function: bound parse],\n          safeParse: [Function: bound safeParse],\n          parseAsync: [Function: bound parseAsync] AsyncFunction,\n          safeParseAsync: [Function: bound safeParseAsync] AsyncFunction,\n          refine: [Function: bound refine],\n          refinement: [Function: bound refinement],\n          superRefine: [Function: bound superRefine],\n          optional: [Function: bound optional],\n          nullable: [Function: bound nullable],\n          nullish: [Function: bound nullish],\n          array: [Function: bound array],\n          promise: [Function: bound promise],\n          or: [Function: bound or],\n          and: [Function: bound and],\n          transform: [Function: bound transform],\n          brand: [Function: bound brand],\n          default: [Function: bound default],\n          catch: [Function: bound catch],\n          describe: [Function: bound describe],\n          pipe: [Function: bound pipe],\n          readonly: [Function: bound readonly],\n          isNullable: [Function: bound isNullable],\n          isOptional: [Function: bound isOptional],\n          _any: true\n        }\n      }\n    }\n  },\n  edges: [\n    {\n      source: "935c67df-7ae3-4853-9d26-579003c08407",\n      target: "a73d7b3e-0ed7-46cf-b141-de64ea1e12de",\n      data: undefined\n    },\n    {\n      source: "ff104b34-c13b-4677-8b82-af70d3548e12",\n      target: "2dc627dc-1c06-45b1-b14f-bb1f6e689f83",\n      data: undefined\n    },\n    {\n      source: "a73d7b3e-0ed7-46cf-b141-de64ea1e12de",\n      target: "ff104b34-c13b-4677-8b82-af70d3548e12",\n      data: undefined\n    }\n  ]\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}}}]);