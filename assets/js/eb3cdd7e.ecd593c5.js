"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1044],{82752:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=t(74848),a=t(28453);const r={sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},d="How to load data from a directory",s={id:"how_to/document_loader_directory",title:"How to load data from a directory",description:"This covers how to load all documents in a directory.",source:"@site/docs/how_to/document_loader_directory.mdx",sourceDirName:"how_to",slug:"/how_to/document_loader_directory",permalink:"/docs/how_to/document_loader_directory",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/document_loader_directory.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},c={},l=[];function i(e){const o={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"how-to-load-data-from-a-directory",children:"How to load data from a directory"}),"\n",(0,n.jsx)(o.p,{children:"This covers how to load all documents in a directory."}),"\n",(0,n.jsx)(o.p,{children:"The second argument is a map of file extensions to loader factories. Each file will be passed to the matching loader, and the resulting documents will be concatenated together."}),"\n",(0,n.jsx)(o.p,{children:"Example folder:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-text",children:"src/document_loaders/example_data/example/\n\u251c\u2500\u2500 example.json\n\u251c\u2500\u2500 example.jsonl\n\u251c\u2500\u2500 example.txt\n\u2514\u2500\u2500 example.csv\n"})}),"\n",(0,n.jsx)(o.p,{children:"Example code:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-typescript",children:'import { DirectoryLoader } from "langchain/document_loaders/fs/directory";\nimport {\n  JSONLoader,\n  JSONLinesLoader,\n} from "langchain/document_loaders/fs/json";\nimport { TextLoader } from "langchain/document_loaders/fs/text";\nimport { CSVLoader } from "langchain/document_loaders/fs/csv";\n\nconst loader = new DirectoryLoader(\n  "src/document_loaders/example_data/example",\n  {\n    ".json": (path) => new JSONLoader(path, "/texts"),\n    ".jsonl": (path) => new JSONLinesLoader(path, "/html"),\n    ".txt": (path) => new TextLoader(path),\n    ".csv": (path) => new CSVLoader(path, "text"),\n  }\n);\nconst docs = await loader.load();\nconsole.log({ docs });\n'})})]})}function m(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}}}]);