(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6814],{51343:(t,n,e)=>{"use strict";e.r(n),e.d(n,{assets:()=>g,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>h,toc:()=>k});var a=e(74848),o=e(28453),c=e(64428),s=e(8396),i=e.n(s);const l={hide_table_of_contents:!0},r="StackExchange Tool",h={id:"integrations/tools/stackexchange",title:"StackExchange Tool",description:"The StackExchange tool connects your agents and chains to StackExchange's API.",source:"@site/docs/integrations/tools/stackexchange.mdx",sourceDirName:"integrations/tools",slug:"/integrations/tools/stackexchange",permalink:"/docs/integrations/tools/stackexchange",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/tools/stackexchange.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"integrations",previous:{title:"Searxng Search tool",permalink:"/docs/integrations/tools/searxng"},next:{title:"Tavily Search",permalink:"/docs/integrations/tools/tavily_search"}},g={},k=[{value:"Usage",id:"usage",level:2}];function x(t){const n={h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"stackexchange-tool",children:"StackExchange Tool"}),"\n",(0,a.jsx)(n.p,{children:"The StackExchange tool connects your agents and chains to StackExchange's API."}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,a.jsx)(c.A,{language:"typescript",children:i()})]})}function d(t={}){const{wrapper:n}={...(0,o.R)(),...t.components};return n?(0,a.jsx)(n,{...t,children:(0,a.jsx)(x,{...t})}):x(t)}},8396:t=>{t.exports={content:'import { StackExchangeAPI } from "@langchain/community/tools/stackexchange";\n\n// Get results from StackExchange API\nconst stackExchangeTool = new StackExchangeAPI();\nconst result = await stackExchangeTool.invoke("zsh: command not found: python");\nconsole.log(result);\n\n// Get results from StackExchange API with title query\nconst stackExchangeTitleTool = new StackExchangeAPI({\n  queryType: "title",\n});\nconst titleResult = await stackExchangeTitleTool.invoke(\n  "zsh: command not found: python"\n);\nconsole.log(titleResult);\n\n// Get results from StackExchange API with bad query\nconst stackExchangeBadTool = new StackExchangeAPI();\nconst badResult = await stackExchangeBadTool.invoke(\n  "sjefbsmnazdkhbazkbdoaencopebfoubaef"\n);\nconsole.log(badResult);\n',imports:[{local:"StackExchangeAPI",imported:"StackExchangeAPI",source:"@langchain/community/tools/stackexchange"}]}}}]);