"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4903],{1533:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=s(74848),n=s(28453);const a={hide_table_of_contents:!0},d="Docx files",r={id:"integrations/document_loaders/file_loaders/docx",title:"Docx files",description:"This example goes over how to load data from docx files.",source:"@site/docs/integrations/document_loaders/file_loaders/docx.mdx",sourceDirName:"integrations/document_loaders/file_loaders",slug:"/integrations/document_loaders/file_loaders/docx",permalink:"/docs/integrations/document_loaders/file_loaders/docx",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/document_loaders/file_loaders/docx.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"integrations",previous:{title:"CSV files",permalink:"/docs/integrations/document_loaders/file_loaders/csv"},next:{title:"EPUB files",permalink:"/docs/integrations/document_loaders/file_loaders/epub"}},i={},l=[];function c(e){const o={code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"docx-files",children:"Docx files"}),"\n",(0,t.jsx)(o.p,{children:"This example goes over how to load data from docx files."}),"\n",(0,t.jsx)(o.h1,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install mammoth\n"})}),"\n",(0,t.jsx)(o.h1,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:'import { DocxLoader } from "langchain/document_loaders/fs/docx";\n\nconst loader = new DocxLoader(\n  "src/document_loaders/tests/example_data/attention.docx"\n);\n\nconst docs = await loader.load();\n'})})]})}function m(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);