"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5221],{30917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>x});var l=n(74848),i=n(28453);const s={sidebar_position:1,sidebar_class_name:"hidden"},r="Chat models",d={id:"integrations/chat/index",title:"Chat models",description:"Features (natively supported)",source:"@site/docs/integrations/chat/index.mdx",sourceDirName:"integrations/chat",slug:"/integrations/chat/",permalink:"/docs/integrations/chat/",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/chat/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_class_name:"hidden"},sidebar:"integrations",previous:{title:"Components",permalink:"/docs/integrations/components"},next:{title:"Chat models",permalink:"/docs/integrations/chat/"}},c={},x=[{value:"Features (natively supported)",id:"features-natively-supported",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"chat-models",children:"Chat models"}),"\n",(0,l.jsx)(t.h2,{id:"features-natively-supported",children:"Features (natively supported)"}),"\n",(0,l.jsxs)(t.p,{children:["All ChatModels implement the Runnable interface, which comes with default implementations of all methods, ie. ",(0,l.jsx)(t.code,{children:"invoke"}),", ",(0,l.jsx)(t.code,{children:"batch"}),", ",(0,l.jsx)(t.code,{children:"stream"}),". This gives all ChatModels basic support for invoking, streaming and batching, which by default is implemented as below:"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.em,{children:"Streaming"})," support defaults to returning an ",(0,l.jsx)(t.code,{children:"AsyncIterator"})," of a single value, the final result returned by the underlying ChatModel provider. This obviously doesn't give you token-by-token streaming, which requires native support from the ChatModel provider, but ensures your code that expects an iterator of tokens can work for any of our ChatModel integrations."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.em,{children:"Batch"})," support defaults to calling the underlying ChatModel in parallel for each input. The concurrency can be controlled with the ",(0,l.jsx)(t.code,{children:"maxConcurrency"})," key in ",(0,l.jsx)(t.code,{children:"RunnableConfig"}),"."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.em,{children:"Map"})," support defaults to calling ",(0,l.jsx)(t.code,{children:".invoke"})," across all instances of the array which it was called on."]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Each ChatModel integration can optionally provide native implementations to truly enable invoke, streaming or batching requests."}),"\n",(0,l.jsxs)(t.p,{children:["Additionally, some chat models support additional ways of guaranteeing structure in their outputs by allowing you to pass in a defined schema.\n",(0,l.jsx)(t.a,{href:"/docs/how_to/tool_calling",children:"Function calling and parallel function calling"})," (tool calling) are two common ones, and those capabilities allow you to use the chat model as the LLM in certain types of agents.\nSome models in LangChain have also implemented a ",(0,l.jsx)(t.code,{children:"withStructuredOutput()"})," method that unifies many of these different ways of constraining output to a schema."]}),"\n",(0,l.jsx)(t.p,{children:"The table shows, for each integration, which features have been implemented with native support. Yellow circles (\ud83d\udfe1) indicates partial support - for example, if the model supports tool calling but not tool messages for agents."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Model"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Invoke"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Stream"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Batch"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Function Calling"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Tool Calling"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"withStructuredOutput()"})})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"BedrockChat"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatAlibabaTongyi"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatAnthropic"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatBaiduWenxin"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatCloudflareWorkersAI"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatCohere"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatFireworks"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatGoogleGenerativeAI"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatGoogleVertexAI"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatVertexAI"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatGooglePaLM"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatGroq"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udfe1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatLlamaCpp"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatMinimax"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatMistralAI"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatOllama"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatOpenAI"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatTogetherAI"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatYandexGPT"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ChatZhipuAI"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}}}]);