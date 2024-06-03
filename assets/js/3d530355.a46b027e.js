(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1459],{93908:(e,r,s)=>{"use strict";s.r(r),s.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var n=s(74848),t=s(28453),i=s(64428),o=s(38015),a=s.n(o);const d={hide_table_of_contents:!0},l="Spider",c={id:"integrations/document_loaders/web_loaders/spider",title:"Spider",description:"Spider is the fastest crawler. It converts any website into pure HTML, markdown, metadata or text while enabling you to crawl with custom actions using AI.",source:"@site/docs/integrations/document_loaders/web_loaders/spider.mdx",sourceDirName:"integrations/document_loaders/web_loaders",slug:"/integrations/document_loaders/web_loaders/spider",permalink:"/docs/integrations/document_loaders/web_loaders/spider",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/document_loaders/web_loaders/spider.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"integrations",previous:{title:"Blockchain Data",permalink:"/docs/integrations/document_loaders/web_loaders/sort_xyz_blockchain"},next:{title:"YouTube transcripts",permalink:"/docs/integrations/document_loaders/web_loaders/youtube"}},p={},h=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Additional Parameters",id:"additional-parameters",level:3}];function u(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"spider",children:"Spider"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://spider.cloud/?ref=langchainjs",children:"Spider"})," is the ",(0,n.jsx)(r.a,{href:"https://github.com/spider-rs/spider/blob/main/benches/BENCHMARKS.md#benchmark-results",children:"fastest"})," crawler. It converts any website into pure HTML, markdown, metadata or text while enabling you to crawl with custom actions using AI."]}),"\n",(0,n.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(r.p,{children:"Spider allows you to use high performance proxies to prevent detection, caches AI actions, webhooks for crawling status, scheduled crawls etc..."}),"\n",(0,n.jsxs)(r.p,{children:["This guide shows how to crawl/scrape a website using ",(0,n.jsx)(r.a,{href:"https://spider.cloud/",children:"Spider"})," and loading the LLM-ready documents with ",(0,n.jsx)(r.code,{children:"SpiderLoader"})," in LanghChain."]}),"\n",(0,n.jsx)(r.h2,{id:"setup",children:"Setup"}),"\n",(0,n.jsxs)(r.p,{children:["Get your own Spider API key on ",(0,n.jsx)(r.a,{href:"https://spider.cloud/",children:"spider.cloud"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(r.p,{children:["Here's an example of how to use the ",(0,n.jsx)(r.code,{children:"SpiderLoader"}),":"]}),"\n",(0,n.jsxs)(r.p,{children:["Spider offers two scraping modes ",(0,n.jsx)(r.code,{children:"scrape"})," and ",(0,n.jsx)(r.code,{children:"crawl"}),". Scrape only gets the content of the url provided while crawl gets the content of the url provided and crawls deeper following subpages."]}),"\n","\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @spider-cloud/spider-client\n"})}),"\n",(0,n.jsx)(i.A,{language:"typescript",children:a()}),"\n",(0,n.jsx)(r.h3,{id:"additional-parameters",children:"Additional Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["See the ",(0,n.jsx)(r.a,{href:"https://spider.cloud/docs/api",children:"Spider documentation"})," for all the available ",(0,n.jsx)(r.code,{children:"params"}),"."]})]})}function m(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},38015:e=>{e.exports={content:'import { SpiderLoader } from "@langchain/community/document_loaders/web/spider";\n\nconst loader = new SpiderLoader({\n  url: "https://spider.cloud", // The URL to scrape\n  apiKey: process.env.SPIDER_API_KEY, // Optional, defaults to `SPIDER_API_KEY` in your env.\n  mode: "scrape", // The mode to run the crawler in. Can be "scrape" for single urls or "crawl" for deeper scraping following subpages\n  // params: {\n  //   // optional parameters based on Spider API docs\n  //   // For API documentation, visit https://spider.cloud/docs/api\n  // },\n});\n\nconst docs = await loader.load();\n',imports:[{local:"SpiderLoader",imported:"SpiderLoader",source:"@langchain/community/document_loaders/web/spider"}]}}}]);