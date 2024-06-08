"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7104],{44075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(74848),a=t(28453);const o={},c="CSV files",i={id:"integrations/document_loaders/file_loaders/csv",title:"CSV files",description:"This example goes over how to load data from CSV files. The second argument is the column name to extract from the CSV file. One document will be created for each row in the CSV file. When column is not specified, each row is converted into a key/value pair with each key/value pair outputted to a new line in the document's pageContent. When column is specified, one document is created for each row, and the value of the specified column is used as the document's pageContent.",source:"@site/docs/integrations/document_loaders/file_loaders/csv.mdx",sourceDirName:"integrations/document_loaders/file_loaders",slug:"/integrations/document_loaders/file_loaders/csv",permalink:"/docs/integrations/document_loaders/file_loaders/csv",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/document_loaders/file_loaders/csv.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"ChatGPT files",permalink:"/docs/integrations/document_loaders/file_loaders/chatgpt"},next:{title:"Docx files",permalink:"/docs/integrations/document_loaders/file_loaders/docx"}},l={},d=[{value:"Setup",id:"setup",level:2},{value:"Usage, extracting all columns",id:"usage-extracting-all-columns",level:2},{value:"Usage, extracting a single column",id:"usage-extracting-a-single-column",level:2}];function r(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"csv-files",children:"CSV files"}),"\n",(0,s.jsxs)(n.p,{children:["This example goes over how to load data from CSV files. The second argument is the ",(0,s.jsx)(n.code,{children:"column"})," name to extract from the CSV file. One document will be created for each row in the CSV file. When ",(0,s.jsx)(n.code,{children:"column"})," is not specified, each row is converted into a key/value pair with each key/value pair outputted to a new line in the document's ",(0,s.jsx)(n.code,{children:"pageContent"}),". When ",(0,s.jsx)(n.code,{children:"column"})," is specified, one document is created for each row, and the value of the specified column is used as the document's pageContent."]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install d3-dsv@2\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage-extracting-all-columns",children:"Usage, extracting all columns"}),"\n",(0,s.jsx)(n.p,{children:"Example CSV file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csv",children:"id,text\n1,This is a sentence.\n2,This is another sentence.\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { CSVLoader } from "langchain/document_loaders/fs/csv";\n\nconst loader = new CSVLoader("src/document_loaders/example_data/example.csv");\n\nconst docs = await loader.load();\n/*\n[\n  Document {\n    "metadata": {\n      "line": 1,\n      "source": "src/document_loaders/example_data/example.csv",\n    },\n    "pageContent": "id: 1\ntext: This is a sentence.",\n  },\n  Document {\n    "metadata": {\n      "line": 2,\n      "source": "src/document_loaders/example_data/example.csv",\n    },\n    "pageContent": "id: 2\ntext: This is another sentence.",\n  },\n]\n*/\n'})}),"\n",(0,s.jsx)(n.h2,{id:"usage-extracting-a-single-column",children:"Usage, extracting a single column"}),"\n",(0,s.jsx)(n.p,{children:"Example CSV file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csv",children:"id,text\n1,This is a sentence.\n2,This is another sentence.\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { CSVLoader } from "langchain/document_loaders/fs/csv";\n\nconst loader = new CSVLoader(\n  "src/document_loaders/example_data/example.csv",\n  "text"\n);\n\nconst docs = await loader.load();\n/*\n[\n  Document {\n    "metadata": {\n      "line": 1,\n      "source": "src/document_loaders/example_data/example.csv",\n    },\n    "pageContent": "This is a sentence.",\n  },\n  Document {\n    "metadata": {\n      "line": 2,\n      "source": "src/document_loaders/example_data/example.csv",\n    },\n    "pageContent": "This is another sentence.",\n  },\n]\n*/\n'})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}}}]);