(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4972,65],{40781:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>m,default:()=>f,frontMatter:()=>h,metadata:()=>p,toc:()=>g});var o=t(74848),a=t(28453),r=t(64428),s=t(78847),i=t(84980),c=t.n(i),l=t(10916),d=t.n(l);const h={sidebar_class_name:"node-only"},m="USearch",p={id:"integrations/vectorstores/usearch",title:"USearch",description:"Only available on Node.js.",source:"@site/docs/integrations/vectorstores/usearch.mdx",sourceDirName:"integrations/vectorstores",slug:"/integrations/vectorstores/usearch",permalink:"/docs/integrations/vectorstores/usearch",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/vectorstores/usearch.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"node-only"},sidebar:"integrations",previous:{title:"Upstash Vector",permalink:"/docs/integrations/vectorstores/upstash"},next:{title:"Vectara",permalink:"/docs/integrations/vectorstores/vectara"}},u={},g=[{value:"Setup",id:"setup",level:2},...s.toc,{value:"Usage",id:"usage",level:2},{value:"Create a new index from texts",id:"create-a-new-index-from-texts",level:3},{value:"Create a new index from a loader",id:"create-a-new-index-from-a-loader",level:3}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"usearch",children:"USearch"}),"\n",(0,o.jsx)(n.admonition,{title:"Compatibility",type:"tip",children:(0,o.jsx)(n.p,{children:"Only available on Node.js."})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/unum-cloud/usearch",children:"USearch"})," is a library for efficient similarity search and clustering of dense vectors."]}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(n.p,{children:["Install the ",(0,o.jsx)(n.a,{href:"https://github.com/unum-cloud/usearch/tree/main/javascript",children:"usearch"})," package, which is a Node.js binding for ",(0,o.jsx)(n.a,{href:"https://github.com/unum-cloud/usearch",children:"USearch"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install -S usearch\n"})}),"\n","\n",(0,o.jsx)(s.default,{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai @langchain/community\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.h3,{id:"create-a-new-index-from-texts",children:"Create a new index from texts"}),"\n","\n",(0,o.jsx)(r.A,{language:"typescript",children:c()}),"\n",(0,o.jsx)(n.h3,{id:"create-a-new-index-from-a-loader",children:"Create a new index from a loader"}),"\n","\n",(0,o.jsx)(r.A,{language:"typescript",children:d()})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},78847:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(74848),a=t(28453);const r={},s=void 0,i={id:"mdx_components/integration_install_tooltip",title:"integration_install_tooltip",description:"See this section for general instructions on installing integration packages.",source:"@site/docs/mdx_components/integration_install_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/integration_install_tooltip",permalink:"/docs/mdx_components/integration_install_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/integration_install_tooltip.mdx",tags:[],version:"current",frontMatter:{}},c={},l=[];function d(e){const n={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/how_to/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},84980:e=>{e.exports={content:'import { USearch } from "@langchain/community/vectorstores/usearch";\nimport { OpenAIEmbeddings } from "@langchain/openai";\n\nconst vectorStore = await USearch.fromTexts(\n  ["Hello world", "Bye bye", "hello nice world"],\n  [{ id: 2 }, { id: 1 }, { id: 3 }],\n  new OpenAIEmbeddings()\n);\n\nconst resultOne = await vectorStore.similaritySearch("hello world", 1);\nconsole.log(resultOne);\n',imports:[{local:"USearch",imported:"USearch",source:"@langchain/community/vectorstores/usearch"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"}]}},10916:e=>{e.exports={content:'import { USearch } from "@langchain/community/vectorstores/usearch";\nimport { OpenAIEmbeddings } from "@langchain/openai";\nimport { TextLoader } from "langchain/document_loaders/fs/text";\n\n// Create docs with a loader\nconst loader = new TextLoader("src/document_loaders/example_data/example.txt");\nconst docs = await loader.load();\n\n// Load the docs into the vector store\nconst vectorStore = await USearch.fromDocuments(docs, new OpenAIEmbeddings());\n\n// Search for the most similar document\nconst resultOne = await vectorStore.similaritySearch("hello world", 1);\nconsole.log(resultOne);\n',imports:[{local:"USearch",imported:"USearch",source:"@langchain/community/vectorstores/usearch"},{local:"OpenAIEmbeddings",imported:"OpenAIEmbeddings",source:"@langchain/openai"},{local:"TextLoader",imported:"TextLoader",source:"langchain/document_loaders/fs/text"}]}}}]);