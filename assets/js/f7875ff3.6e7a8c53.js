"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4037],{53702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=t(74848),r=t(28453),o=t(27846);const s={sidebar_class_name:"hidden",title:"How to load Markdown"},l=void 0,i={id:"how_to/document_loader_markdown",title:"How to load Markdown",description:"Markdown is a lightweight",source:"@site/docs/how_to/document_loader_markdown.mdx",sourceDirName:"how_to",slug:"/how_to/document_loader_markdown",permalink:"/docs/how_to/document_loader_markdown",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/document_loader_markdown.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden",title:"How to load Markdown"},sidebar:"tutorialSidebar",previous:{title:"How to load HTML",permalink:"/docs/how_to/document_loader_html"},next:{title:"How to load PDF files",permalink:"/docs/how_to/document_loader_pdf"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"Retain Elements",id:"retain-elements",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Markdown",children:"Markdown"})," is a lightweight\nmarkup language for creating formatted text using a plain-text editor."]}),"\n",(0,a.jsxs)(n.p,{children:["Here we cover how to load ",(0,a.jsx)(n.code,{children:"Markdown"})," documents into LangChain\n",(0,a.jsx)(n.a,{href:"https://v02.api.js.langchain.com/classes/langchain_core_documents.Document.html",children:"Document"}),"\nobjects that we can use downstream."]}),"\n",(0,a.jsx)(n.p,{children:"We will cover:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Basic usage;"}),"\n",(0,a.jsx)(n.li,{children:"Parsing of Markdown into elements such as titles, list items, and\ntext."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["LangChain implements an\n",(0,a.jsx)(n.a,{href:"https://v02.api.js.langchain.com/classes/langchain_document_loaders_fs_unstructured.UnstructuredLoader.html",children:"UnstructuredLoader"}),"\nclass."]}),"\n",(0,a.jsxs)(n.admonition,{title:"Prerequisites",type:"info",children:[(0,a.jsx)(n.p,{children:"This guide assumes familiarity with the following concepts:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../../docs/concepts#document",children:"Documents"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../../docs/concepts#document-loaders",children:"Document Loaders"})}),"\n"]})]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,a.jsx)(o.A,{children:(0,a.jsx)(n.p,{children:"@langchain/community"})}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(n.p,{children:"Although Unstructured has an open source offering, you\u2019re still required\nto provide an API key to access the service. To get everything up and\nrunning, follow these two steps:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Download & start the Docker container:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run -p 8000:8000 -d --rm --name unstructured-api quay.io/unstructured-io/unstructured-api:latest --port 8000 --host 0.0.0.0\n"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Get a free API key & API URL\n",(0,a.jsx)(n.a,{href:"https://unstructured.io/api-key",children:"here"}),", and set it in your\nenvironment (as per the Unstructured website, it may take up to an\nhour to allocate your API key & URL.):"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'export UNSTRUCTURED_API_KEY="..."\n# Replace with your `Full URL` from the email\nexport UNSTRUCTURED_API_URL="https://<ORG_NAME>-<SECRET>.api.unstructuredapp.io/general/v0/general"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Basic usage will ingest a Markdown file to a single document. Here we\ndemonstrate on LangChain\u2019s readme:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import { UnstructuredLoader } from "@langchain/community/document_loaders/fs/unstructured";\n\nconst markdownPath = "../../../../README.md";\n\nconst loader = new UnstructuredLoader(markdownPath, {\n  apiKey: process.env.UNSTRUCTURED_API_KEY,\n  apiUrl: process.env.UNSTRUCTURED_API_URL,\n});\n\nconst data = await loader.load();\nconsole.log(data.slice(0, 5));\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"[\n  Document {\n    pageContent: '\ud83e\udd9c\ufe0f\ud83d\udd17 LangChain.js',\n    metadata: {\n      languages: [Array],\n      filename: 'README.md',\n      filetype: 'text/markdown',\n      category: 'Title'\n    }\n  },\n  Document {\n    pageContent: '\u26a1 Building applications with LLMs through composability \u26a1',\n    metadata: {\n      languages: [Array],\n      filename: 'README.md',\n      filetype: 'text/markdown',\n      category: 'Title'\n    }\n  },\n  Document {\n    pageContent: 'Looking for the Python version? Check out LangChain.',\n    metadata: {\n      languages: [Array],\n      parent_id: '7ea17bcb17b10f303cbb93b4cb95de93',\n      filename: 'README.md',\n      filetype: 'text/markdown',\n      category: 'NarrativeText'\n    }\n  },\n  Document {\n    pageContent: 'To help you ship LangChain apps to production faster, check out LangSmith.\\n' +\n      'LangSmith is a unified developer platform for building, testing, and monitoring LLM applications.\\n' +\n      'Fill out this form to get on the waitlist or speak with our sales team.',\n    metadata: {\n      languages: [Array],\n      parent_id: '7ea17bcb17b10f303cbb93b4cb95de93',\n      filename: 'README.md',\n      filetype: 'text/markdown',\n      category: 'NarrativeText'\n    }\n  },\n  Document {\n    pageContent: '\u26a1\ufe0f Quick Install',\n    metadata: {\n      languages: [Array],\n      filename: 'README.md',\n      filetype: 'text/markdown',\n      category: 'Title'\n    }\n  }\n]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"retain-elements",children:"Retain Elements"}),"\n",(0,a.jsxs)(n.p,{children:["Under the hood, Unstructured creates different \u201celements\u201d for different\nchunks of text. By default we combine those together, but you can easily\nkeep that separation by specifying ",(0,a.jsx)(n.code,{children:'chunkingStrategy: "by_title"'}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'const loader = new UnstructuredLoader(markdownPath, {\n  chunkingStrategy: "by_title",\n});\n\nconst data = await loader.load();\n\nconsole.log(`Number of documents: ${data.length}\\n`);\n\nfor (const doc of data.slice(0, 2)) {\n  console.log(doc);\n  console.log("\\n");\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Number of documents: 13\n\nDocument {\n  pageContent: '\ud83e\udd9c\ufe0f\ud83d\udd17 LangChain.js\\n' +\n    '\\n' +\n    '\u26a1 Building applications with LLMs through composability \u26a1\\n' +\n    '\\n' +\n    'Looking for the Python version? Check out LangChain.\\n' +\n    '\\n' +\n    'To help you ship LangChain apps to production faster, check out LangSmith.\\n' +\n    'LangSmith is a unified developer platform for building, testing, and monitoring LLM applications.\\n' +\n    'Fill out this form to get on the waitlist or speak with our sales team.',\n  metadata: {\n    filename: 'README.md',\n    filetype: 'text/markdown',\n    languages: [ 'eng' ],\n    orig_elements: 'eJzNUtuO0zAQ/ZVRnquSS3PjBcGyPHURgr5tV2hijxNTJ45ip0u14t8Zp1y6CCF4ACFLlufuc+bcPkRkqKfBv9cyegpREWNZosxS0RRVzmeTCiFlnmRUFZmQ0QqinjxK9Mj5D5HShgbsKRS/vX7+8uZ63S9ZIeBP4xLw9NE/6XxvQsDg0M7YkuPIbURDG919Wp1zQu5+llVGfMta7GdFsVo8MniSErZcfdWhHtYfXOj2dcROe0MRN/oRUUmYlI1o+EpilcWZaJo6azaiqXNJdfYvEKUFJvBi1kbqoQUcR6MFem0HB/fad7Dd3jjw3WTntgNh+9E6bLTR/gTn4t9CmhHFTc1w80oKSUlTpFWaFKWsVR5nFf0dpOwdcfoDvi+p2Vp7CJQoOzF+gjcn39kBjjQ5ZucZXHUkDmBnf7H3Sy5e4zQxkUfahYY/4UQqVcZJpSpspKqSMslVllWJzDdMC6XVf8jJzkJHZoSTncF1evwOPSiHdWJhnKycRRAQKHSephWIR0y961lW6/3w7Q3aAcI8aKVJgqQjGTvSBKNBz+T3ywaaLwpdgSfnlwcOEno7aG+nsCcW6iP58ohX2phlru94xtKLf9iSB/5d2Ok9smC1Y3sCNxIezpq3M5toiAER9r/a6t1n6BJ/zg==',\n    category: 'CompositeElement'\n  }\n}\n\n\nDocument {\n  pageContent: '\u26a1\ufe0f Quick Install\\n' +\n    '\\n' +\n    'You can use npm, yarn, or pnpm to install LangChain.js\\n' +\n    '\\n' +\n    'npm install -S langchain or yarn add langchain or pnpm add langchain\\n' +\n    '\\n' +\n    'typescript\\n' +\n    'import { ChatOpenAI } from \"langchain/chat_models/openai\";\\n' +\n    '\\n' +\n    '\ud83c\udf10 Supported Environments\\n' +\n    '\\n' +\n    'LangChain is written in TypeScript and can be used in:\\n' +\n    '\\n' +\n    'Node.js (ESM and CommonJS) - 18.x, 19.x, 20.x\\n' +\n    '\\n' +\n    'Cloudflare Workers\\n' +\n    '\\n' +\n    'Vercel / Next.js (Browser, Serverless and Edge functions)\\n' +\n    '\\n' +\n    'Supabase Edge Functions\\n' +\n    '\\n' +\n    'Browser\\n' +\n    '\\n' +\n    'Deno',\n  metadata: {\n    filename: 'README.md',\n    filetype: 'text/markdown',\n    languages: [ 'eng' ],\n    orig_elements: 'eJzNlm1v2zYQx7/KQa9WwE1Iik/qXnWpB2RoM2wOOgx1URzJY6pVogyJTlME/e6j3KZIhgBzULjIG0Li3VH+/e/BfHNdUUc9pfyuDdUzqGzUjUUda1ZbL7R1UQetnNdMK9swVy2g6iljwIzF/7qKbUcJe5qD/1w+f/FqedSH2Ws25E+bnSHTVT5+n/tuNnSYLrZ4QVOxvKkoXVRvPy+++My+663QyNfbSCzCH9vWf4DTNGXsdsE3J563uaOqxP0XIDSxCdobSZIYd9w7JpQlLU3TaKf4YQDK7gbHB8h4m/jvYQseE2wngrTpF/AJx7SAYYRNeYU8QPtFAHhZvnzyHtt09M90W40zHEfM7SWdz0fep0otuUISLBqMjfNFjMYzI6SWFFWQj1CVGf2G++kK5uP9jD7rMgsEGMLd3Z1ad3YfpJHWsubSchGQeNRItUGPElF7wck2hy/9OWbyY7vJ69T2m2HMcA0l3/n3DaXnp/AZ4jj0sK6+AR6XNb/rh0DddDwUL2zX1c97NUpjVAEOxkh0tbOaN1qU1vG8VtYGe6CSuNvpwda+rJEzWG03MzAFWKbLdhzS/FOnvUhcdChlNC6iKBWuJVrCGMhxIaKMP6i4/1fP2+jfGhnaCT6Obc5UHhOcl4+vdhUAmMJuKjiaB0Mo1mcPKmdBvlFWK6ZMaXfNI2ojIvNORMsUHWiSf5cqZ6WOy2SDn5arVzv+k6Hvh/Tb6gk8BW6PrhbAm3kV7Ojqthgv2ymfZurvrQ4hvRLCSaUEj8YG77TzQTNriYv6B/0hPEiHk24oTdGVePhrGD/QOO0LyxRHKZivAxldS41akzXcxELPm/oxJv01jZ46OIazsrHL/i/j8HGicQErGi9p7GiadtWwDBcEcZt8boc0PdlXE9KlAoSkZh4PtUBZ5oRjTAbiSgd3oLn+XZqUYYgOy3Vgh/zrDfK+xA0rqY6GaQrGo5JM1azcgawzjeOa2CMk/przvXMayvXQEA8meEmCsxiDrkO54/iAVvtHSPiC0nA/3tt/AY+igwk=',\n    category: 'CompositeElement'\n  }\n}\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"Note that in this case we recover just one distinct element type:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const categories = new Set(data.map((document) => document.metadata.category));\nconsole.log(categories);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Set(1) { 'CompositeElement' }\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var a=t(96540),r=t(34164),o=t(23104),s=t(56347),l=t(205),i=t(57485),c=t(31682),d=t(89466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,u]=m({queryString:t,groupId:r}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),b=(()=>{const e=c??g;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function w(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==a&&(c(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(w,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function v(e){const n=(0,f.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},27846:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var a=t(11470),r=t(19365),o=t(21432),s=t(74848);function l(e){let{children:n}=e;return(0,s.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,s.jsx)(r.A,{value:"npm",label:"npm",children:(0,s.jsxs)(o.A,{language:"bash",children:["npm i ",n]})}),(0,s.jsx)(r.A,{value:"yarn",label:"yarn",default:!0,children:(0,s.jsxs)(o.A,{language:"bash",children:["yarn add ",n]})}),(0,s.jsx)(r.A,{value:"pnpm",label:"pnpm",children:(0,s.jsxs)(o.A,{language:"bash",children:["pnpm add ",n]})})]})}}}]);