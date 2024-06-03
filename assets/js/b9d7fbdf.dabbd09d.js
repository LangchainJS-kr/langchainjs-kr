"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3294],{26744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(74848),r=t(28453);const o={sidebar_label:"PromptLayer OpenAI"},s="PromptLayerChatOpenAI",i={id:"integrations/chat/prompt_layer_openai",title:"PromptLayerChatOpenAI",description:"You can pass in the optional returnPromptLayerId boolean to get a promptLayerRequestId like below. Here is an example of getting the PromptLayerChatOpenAI requestID:",source:"@site/docs/integrations/chat/prompt_layer_openai.mdx",sourceDirName:"integrations/chat",slug:"/integrations/chat/prompt_layer_openai",permalink:"/docs/integrations/chat/prompt_layer_openai",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/chat/prompt_layer_openai.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"PromptLayer OpenAI"},sidebar:"integrations",previous:{title:"PremAI",permalink:"/docs/integrations/chat/premai"},next:{title:"TogetherAI",permalink:"/docs/integrations/chat/togetherai"}},p={},l=[];function u(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"promptlayerchatopenai",children:"PromptLayerChatOpenAI"}),"\n",(0,a.jsxs)(n.p,{children:["You can pass in the optional ",(0,a.jsx)(n.code,{children:"returnPromptLayerId"})," boolean to get a ",(0,a.jsx)(n.code,{children:"promptLayerRequestId"})," like below. Here is an example of getting the PromptLayerChatOpenAI requestID:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import { PromptLayerChatOpenAI } from "langchain/llms/openai";\n\nconst chat = new PromptLayerChatOpenAI({\n  returnPromptLayerId: true,\n});\n\nconst respA = await chat.generate([\n  [\n    new SystemMessage(\n      "You are a helpful assistant that translates English to French."\n    ),\n  ],\n]);\n\nconsole.log(JSON.stringify(respA, null, 3));\n\n/*\n  {\n    "generations": [\n      [\n        {\n          "text": "Bonjour! Je suis un assistant utile qui peut vous aider \xe0 traduire de l\'anglais vers le fran\xe7ais. Que puis-je faire pour vous aujourd\'hui?",\n          "message": {\n            "type": "ai",\n            "data": {\n              "content": "Bonjour! Je suis un assistant utile qui peut vous aider \xe0 traduire de l\'anglais vers le fran\xe7ais. Que puis-je faire pour vous aujourd\'hui?"\n            }\n          },\n          "generationInfo": {\n            "promptLayerRequestId": 2300682\n          }\n        }\n      ]\n    ],\n    "llmOutput": {\n      "tokenUsage": {\n        "completionTokens": 35,\n        "promptTokens": 19,\n        "totalTokens": 54\n      }\n    }\n  }\n*/\n'})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}}}]);