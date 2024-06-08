"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2662],{64090:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=a(74848),n=a(28453);const s={},r="ChatGPT files",l={id:"integrations/document_loaders/file_loaders/chatgpt",title:"ChatGPT files",description:"This example goes over how to load conversations.json from your ChatGPT data export folder. You can get your data export by email by going to: ChatGPT -> (Profile) - Settings -> Export data -> Confirm export -> Check email.",source:"@site/docs/integrations/document_loaders/file_loaders/chatgpt.mdx",sourceDirName:"integrations/document_loaders/file_loaders",slug:"/integrations/document_loaders/file_loaders/chatgpt",permalink:"/docs/integrations/document_loaders/file_loaders/chatgpt",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/document_loaders/file_loaders/chatgpt.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Folders with multiple files",permalink:"/docs/integrations/document_loaders/file_loaders/directory"},next:{title:"CSV files",permalink:"/docs/integrations/document_loaders/file_loaders/csv"}},i={},d=[{value:"Usage, extracting all logs",id:"usage-extracting-all-logs",level:2},{value:"Usage, extracting a single log",id:"usage-extracting-a-single-log",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"chatgpt-files",children:"ChatGPT files"}),"\n",(0,o.jsx)(t.p,{children:"This example goes over how to load conversations.json from your ChatGPT data export folder. You can get your data export by email by going to: ChatGPT -> (Profile) - Settings -> Export data -> Confirm export -> Check email."}),"\n",(0,o.jsx)(t.h2,{id:"usage-extracting-all-logs",children:"Usage, extracting all logs"}),"\n",(0,o.jsx)(t.p,{children:"Example code:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:'import { ChatGPTLoader } from "langchain/document_loaders/fs/chatgpt";\n\nconst loader = new ChatGPTLoader("./example_data/example_conversations.json");\n\nconst docs = await loader.load();\n\nconsole.log(docs);\n'})}),"\n",(0,o.jsx)(t.h2,{id:"usage-extracting-a-single-log",children:"Usage, extracting a single log"}),"\n",(0,o.jsx)(t.p,{children:"Example code:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:'import { ChatGPTLoader } from "langchain/document_loaders/fs/chatgpt";\n\nconst loader = new ChatGPTLoader(\n  "./example_data/example_conversations.json",\n  1\n);\n\nconst docs = await loader.load();\n\nconsole.log(docs);\n'})})]})}function g(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);