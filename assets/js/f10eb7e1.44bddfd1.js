(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5225],{94328:(e,r,t)=>{"use strict";t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>d,default:()=>v,frontMatter:()=>l,metadata:()=>h,toc:()=>u});var i=t(74848),n=t(28453),a=t(78847),s=t(64428),o=t(83809),c=t.n(o);const l={hide_table_of_contents:!0},d="Dria Retriever",h={id:"integrations/retrievers/dria",title:"Dria Retriever",description:"The Dria retriever allows an agent to perform a text-based search across a comprehensive knowledge hub.",source:"@site/docs/integrations/retrievers/dria.mdx",sourceDirName:"integrations/retrievers",slug:"/integrations/retrievers/dria",permalink:"/docs/integrations/retrievers/dria",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/retrievers/dria.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"integrations",previous:{title:"ChatGPT Plugin Retriever",permalink:"/docs/integrations/retrievers/chatgpt-retriever-plugin"},next:{title:"Exa Search",permalink:"/docs/integrations/retrievers/exa"}},p={},u=[{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},...a.toc];function g(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"dria-retriever",children:"Dria Retriever"}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.a,{href:"https://dria.co/profile",children:"Dria"})," retriever allows an agent to perform a text-based search across a comprehensive knowledge hub."]}),"\n",(0,i.jsx)(r.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(r.p,{children:"To use Dria retriever, first install Dria JS client:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install dria\n"})}),"\n",(0,i.jsx)(r.p,{children:"You need to provide two things to the retriever:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"API Key"}),": you can get yours at your ",(0,i.jsx)(r.a,{href:"https://dria.co/profile",children:"profile page"})," when you create an account."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Contract ID"}),": accessible at the top of the page when viewing a knowledge or in its URL.\nFor example, the Bitcoin whitepaper is uploaded on Dria at ",(0,i.jsx)(r.a,{href:"https://dria.co/knowledge/2KxNbEb040GKQ1DSDNDsA-Fsj_BlQIEAlzBNuiapBR0",children:"https://dria.co/knowledge/2KxNbEb040GKQ1DSDNDsA-Fsj_BlQIEAlzBNuiapBR0"}),", so its contract ID is ",(0,i.jsx)(r.code,{children:"2KxNbEb040GKQ1DSDNDsA-Fsj_BlQIEAlzBNuiapBR0"}),".\nContract ID can be omitted during instantiation, and later be set via ",(0,i.jsx)(r.code,{children:'dria.contractId = "your-contract"'})]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Dria retriever exposes the underlying ",(0,i.jsx)(r.a,{href:"https://npmjs.com/package/dria",children:"Dria client"})," as well, refer to the ",(0,i.jsx)(r.a,{href:"https://github.com/firstbatchxyz/dria-js-client?tab=readme-ov-file#usage",children:"Dria documentation"})," to learn more about the client."]}),"\n",(0,i.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,i.jsx)(a.default,{}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install dria @langchain/community\n"})}),"\n","\n",(0,i.jsx)(s.A,{language:"typescript",children:c()})]})}function v(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},83809:e=>{e.exports={content:'import { DriaRetriever } from "@langchain/community/retrievers/dria";\n\n// contract of TypeScript Handbook v4.9 uploaded to Dria\n// https://dria.co/knowledge/-B64DjhUtCwBdXSpsRytlRQCu-bie-vSTvTIT8Ap3g0\nconst contractId = "-B64DjhUtCwBdXSpsRytlRQCu-bie-vSTvTIT8Ap3g0";\n\nconst retriever = new DriaRetriever({\n  contractId, // a knowledge to connect to\n  apiKey: "DRIA_API_KEY", // if not provided, will check env for `DRIA_API_KEY`\n  topK: 15, // optional: default value is 10\n});\n\nconst docs = await retriever.invoke("What is a union type?");\nconsole.log(docs);\n',imports:[{local:"DriaRetriever",imported:"DriaRetriever",source:"@langchain/community/retrievers/dria"}]}}}]);