"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3484],{10287:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=a(74848),d=a(28453);const o={sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},t="How to load PDF files",i={id:"how_to/document_loader_pdf",title:"How to load PDF files",description:"Portable Document Format (PDF), standardized as ISO 32000, is a file format developed by Adobe in 1992 to present documents, including text formatting and images, in a manner independent of application software, hardware, and operating systems.",source:"@site/docs/how_to/document_loader_pdf.mdx",sourceDirName:"how_to",slug:"/how_to/document_loader_pdf",permalink:"/docs/how_to/document_loader_pdf",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/document_loader_pdf.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},r={},l=[{value:"Setup",id:"setup",level:2},{value:"Usage, one document per page",id:"usage-one-document-per-page",level:2},{value:"Usage, one document per file",id:"usage-one-document-per-file",level:2},{value:"Usage, custom <code>pdfjs</code> build",id:"usage-custom-pdfjs-build",level:2},{value:"Eliminating extra spaces",id:"eliminating-extra-spaces",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"how-to-load-pdf-files",children:"How to load PDF files"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/PDF",children:"Portable Document Format (PDF)"}),", standardized as ISO 32000, is a file format developed by Adobe in 1992 to present documents, including text formatting and images, in a manner independent of application software, hardware, and operating systems."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This covers how to load ",(0,s.jsx)(n.code,{children:"PDF"})," documents into the Document format that we use downstream."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, one document will be created for each page in the PDF file. You can change this behavior by setting the ",(0,s.jsx)(n.code,{children:"splitPages"})," option to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install pdf-parse\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage-one-document-per-page",children:"Usage, one document per page"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { PDFLoader } from "langchain/document_loaders/fs/pdf";\n// Or, in web environments:\n// import { WebPDFLoader } from "langchain/document_loaders/web/pdf";\n// const blob = new Blob(); // e.g. from a file input\n// const loader = new WebPDFLoader(blob);\n\nconst loader = new PDFLoader("src/document_loaders/example_data/example.pdf");\n\nconst docs = await loader.load();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"usage-one-document-per-file",children:"Usage, one document per file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { PDFLoader } from "langchain/document_loaders/fs/pdf";\n\nconst loader = new PDFLoader("src/document_loaders/example_data/example.pdf", {\n  splitPages: false,\n});\n\nconst docs = await loader.load();\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"usage-custom-pdfjs-build",children:["Usage, custom ",(0,s.jsx)(n.code,{children:"pdfjs"})," build"]}),"\n",(0,s.jsxs)(n.p,{children:["By default we use the ",(0,s.jsx)(n.code,{children:"pdfjs"})," build bundled with ",(0,s.jsx)(n.code,{children:"pdf-parse"}),", which is compatible with most environments, including Node.js and modern browsers. If you want to use a more recent version of ",(0,s.jsx)(n.code,{children:"pdfjs-dist"})," or if you want to use a custom build of ",(0,s.jsx)(n.code,{children:"pdfjs-dist"}),", you can do so by providing a custom ",(0,s.jsx)(n.code,{children:"pdfjs"})," function that returns a promise that resolves to the ",(0,s.jsx)(n.code,{children:"PDFJS"})," object."]}),"\n",(0,s.jsxs)(n.p,{children:['In the following example we use the "legacy" (see ',(0,s.jsx)(n.a,{href:"https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#which-browsersenvironments-are-supported",children:"pdfjs docs"}),") build of ",(0,s.jsx)(n.code,{children:"pdfjs-dist"}),", which includes several polyfills not included in the default build."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install pdfjs-dist\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { PDFLoader } from "langchain/document_loaders/fs/pdf";\n\nconst loader = new PDFLoader("src/document_loaders/example_data/example.pdf", {\n  // you may need to add `.then(m => m.default)` to the end of the import\n  pdfjs: () => import("pdfjs-dist/legacy/build/pdf.js"),\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"eliminating-extra-spaces",children:"Eliminating extra spaces"}),"\n",(0,s.jsx)(n.p,{children:"PDFs come in many varieties, which makes reading them a challenge. The loader parses individual text elements and joins them together with a space by default, but\nif you are seeing excessive spaces, this may not be the desired behavior. In that case, you can override the separator with an empty string like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { PDFLoader } from "langchain/document_loaders/fs/pdf";\n\nconst loader = new PDFLoader("src/document_loaders/example_data/example.pdf", {\n  parsedItemSeparator: "",\n});\n\nconst docs = await loader.load();\n'})})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);