"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15],{25782:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var t=a(74848),s=a(28453);const l={sidebar_class_name:"hidden",title:"How to make callbacks run in the background"},i=void 0,c={id:"how_to/callbacks_backgrounding",title:"How to make callbacks run in the background",description:"This guide assumes familiarity with the following concepts:",source:"@site/docs/how_to/callbacks_backgrounding.mdx",sourceDirName:"how_to",slug:"/how_to/callbacks_backgrounding",permalink:"/docs/how_to/callbacks_backgrounding",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/callbacks_backgrounding.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden",title:"How to make callbacks run in the background"},sidebar:"tutorialSidebar",previous:{title:"How to attach callbacks to a module",permalink:"/docs/how_to/callbacks_attach"},next:{title:"How to pass callbacks into a module constructor",permalink:"/docs/how_to/callbacks_constructor"}},o={},r=[{value:"Next steps",id:"next-steps",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{title:"Prerequisites",type:"info",children:[(0,t.jsx)(n.p,{children:"This guide assumes familiarity with the following concepts:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../../docs/concepts/#callbacks",children:"Callbacks"})}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["By default, LangChain.js callbacks are blocking. This means that\nexecution will wait for the callback to either return or timeout before\ncontinuing. This is to help ensure that if you are running code in\n",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Serverless_computing",children:"serverless\nenvironments"})," such\nas ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/pm/lambda/",children:"AWS Lambda"})," or ",(0,t.jsx)(n.a,{href:"https://workers.cloudflare.com/",children:"Cloudflare\nWorkers"}),", these callbacks always finish\nbefore the execution context ends."]}),"\n",(0,t.jsxs)(n.p,{children:["However, this can add unnecessary latency if you are running in\ntraditional stateful environments. If desired, you can set your\ncallbacks to run in the background to avoid this additional latency by\nsetting the ",(0,t.jsx)(n.code,{children:"LANGCHAIN_CALLBACKS_BACKGROUND"})," environment variable to\n",(0,t.jsx)(n.code,{children:'"true"'}),". You can then import the global\n",(0,t.jsx)(n.a,{href:"https://api.js.langchain.com/functions/langchain_core_callbacks_promises.awaitAllCallbacks.html",children:(0,t.jsx)(n.code,{children:"awaitAllCallbacks"})}),"\nmethod to ensure all callbacks finish if necessary."]}),"\n",(0,t.jsxs)(n.p,{children:["To illustrate this, we\u2019ll create a ",(0,t.jsx)(n.a,{href:"../../docs/how_to/custom_callbacks",children:"custom callback\nhandler"})," that takes some time to\nresolve, and show the timing with and without\n",(0,t.jsx)(n.code,{children:"LANGCHAIN_CALLBACKS_BACKGROUND"})," set. Here it is without the variable\nset:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { RunnableLambda } from "@langchain/core/runnables";\n\nDeno.env.set("LANGCHAIN_CALLBACKS_BACKGROUND", "false");\n\nconst runnable = RunnableLambda.from(() => "hello!");\n\nconst customHandler = {\n  handleChainEnd: async () => {\n    await new Promise((resolve) => setTimeout(resolve, 2000));\n    console.log("Call finished");\n  },\n};\n\nconst startTime = new Date().getTime();\n\nawait runnable.invoke({ number: "2" }, { callbacks: [customHandler] });\n\nconsole.log(`Elapsed time: ${new Date().getTime() - startTime}ms`);\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Call finished\nElapsed time: 2005ms\n"})}),"\n",(0,t.jsx)(n.p,{children:"And here it is with backgrounding on:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { awaitAllCallbacks } from "@langchain/core/callbacks/promises";\n\nDeno.env.set("LANGCHAIN_CALLBACKS_BACKGROUND", "true");\n\nconst startTime = new Date().getTime();\n\nawait runnable.invoke({ number: "2" }, { callbacks: [customHandler] });\n\nconsole.log(`Initial elapsed time: ${new Date().getTime() - startTime}ms`);\n\nawait awaitAllCallbacks();\n\nconsole.log(`Final elapsed time: ${new Date().getTime() - startTime}ms`);\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Initial elapsed time: 0ms\nCall finished\nFinal elapsed time: 2098ms\n"})}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsx)(n.p,{children:"You\u2019ve now learned how to run callbacks in the background to reduce\nlatency."}),"\n",(0,t.jsxs)(n.p,{children:["Next, check out the other how-to guides in this section, such as ",(0,t.jsx)(n.a,{href:"../../docs/how_to/custom_callbacks",children:"how to\ncreate custom callback handlers"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);