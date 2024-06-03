"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8098],{17615:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var t=o(74848),l=o(28453);const a={hide_table_of_contents:!0},i="College Confidential",s={id:"integrations/document_loaders/web_loaders/college_confidential",title:"College Confidential",description:"This example goes over how to load data from the college confidential website, using Cheerio. One document will be created for each page.",source:"@site/docs/integrations/document_loaders/web_loaders/college_confidential.mdx",sourceDirName:"integrations/document_loaders/web_loaders",slug:"/integrations/document_loaders/web_loaders/college_confidential",permalink:"/docs/integrations/document_loaders/web_loaders/college_confidential",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/document_loaders/web_loaders/college_confidential.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"integrations",previous:{title:"Browserbase Loader",permalink:"/docs/integrations/document_loaders/web_loaders/browserbase"},next:{title:"Confluence",permalink:"/docs/integrations/document_loaders/web_loaders/confluence"}},r={},d=[{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"college-confidential",children:"College Confidential"}),"\n",(0,t.jsx)(n.p,{children:"This example goes over how to load data from the college confidential website, using Cheerio. One document will be created for each page."}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install cheerio\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { CollegeConfidentialLoader } from "langchain/document_loaders/web/college_confidential";\n\nconst loader = new CollegeConfidentialLoader(\n  "https://www.collegeconfidential.com/colleges/brown-university/"\n);\n\nconst docs = await loader.load();\n'})})]})}function g(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);