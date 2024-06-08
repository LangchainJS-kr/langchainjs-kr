"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5839],{25919:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(74848),a=t(28453),s=t(78847),o=t(27846);const i={sidebar_class_name:"hidden",sidebar_position:4,title:"How to do per-user retrieval"},l=void 0,c={id:"how_to/qa_per_user",title:"How to do per-user retrieval",description:"This guide assumes familiarity with the following:",source:"@site/docs/how_to/qa_per_user.mdx",sourceDirName:"how_to",slug:"/how_to/qa_per_user",permalink:"/docs/how_to/qa_per_user",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/qa_per_user.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_class_name:"hidden",sidebar_position:4,title:"How to do per-user retrieval"},sidebar:"tutorialSidebar",previous:{title:"How to create a custom chat model class",permalink:"/docs/how_to/custom_chat"},next:{title:"How to track token usage",permalink:"/docs/how_to/chat_token_usage_tracking"}},u={},d=[{value:"Code Example",id:"code-example",level:2},{value:"Setup",id:"setup",level:2},{value:"Install dependencies",id:"install-dependencies",level:3},...s.toc,{value:"Set environment variables",id:"set-environment-variables",level:3},{value:"Next steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{title:"Prerequisites",type:"info",children:[(0,r.jsx)(n.p,{children:"This guide assumes familiarity with the following:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../docs/tutorials/rag/",children:"Retrieval-augmented generation"})}),"\n"]})]}),"\n",(0,r.jsx)(n.p,{children:"When building a retrieval app, you often have to build it with multiple\nusers in mind. This means that you may be storing data not just for one\nuser, but for many different users, and they should not be able to see\neach other\u2019s data. This means that you need to be able to configure your\nretrieval chain to only retrieve certain information. This generally\ninvolves two steps."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Step 1: Make sure the retriever you are using supports multiple\nusers"})}),"\n",(0,r.jsxs)(n.p,{children:["At the moment, there is no unified flag or filter for this in LangChain.\nRather, each vectorstore and retriever may have their own, and may be\ncalled different things (namespaces, multi-tenancy, etc). For\nvectorstores, this is generally exposed as a keyword argument that is\npassed in during ",(0,r.jsx)(n.code,{children:"similaritySearch"}),". By reading the documentation or\nsource code, figure out whether the retriever you are using supports\nmultiple users, and, if so, how to use it."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Step 2: Add that parameter as a configurable field for the chain"})}),"\n",(0,r.jsxs)(n.p,{children:["The LangChain ",(0,r.jsx)(n.code,{children:"config"})," object is passed through to every Runnable. Here\nyou can add any fields you\u2019d like to the ",(0,r.jsx)(n.code,{children:"configurable"})," object. Later,\ninside the chain we can extract these fields."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Step 3: Call the chain with that configurable field"})}),"\n",(0,r.jsx)(n.p,{children:"Now, at runtime you can call this chain with configurable field."}),"\n",(0,r.jsx)(n.h2,{id:"code-example",children:"Code Example"}),"\n",(0,r.jsx)(n.p,{children:"Let\u2019s see a concrete example of what this looks like in code. We will\nuse Pinecone for this example."}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.h3,{id:"install-dependencies",children:"Install dependencies"}),"\n","\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(n.p,{children:"@langchain/pinecone @langchain/openai @pinecone-database/pinecone @langchain/core"})}),"\n",(0,r.jsx)(n.h3,{id:"set-environment-variables",children:"Set environment variables"}),"\n",(0,r.jsx)(n.p,{children:"We\u2019ll use OpenAI and Pinecone in this example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-env",children:"OPENAI_API_KEY=your-api-key\n\nPINECONE_API_KEY=your-api-key\nPINECONE_INDEX=your-index-name\n\n# Optional, use LangSmith for best-in-class observability\nLANGSMITH_API_KEY=your-api-key\nLANGCHAIN_TRACING_V2=true\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { OpenAIEmbeddings } from "@langchain/openai";\nimport { PineconeStore } from "@langchain/pinecone";\nimport { Pinecone } from "@pinecone-database/pinecone";\nimport { Document } from "@langchain/core/documents";\n\nconst embeddings = new OpenAIEmbeddings();\n\nconst pinecone = new Pinecone();\n\nconst pineconeIndex = pinecone.Index(Deno.env.get("PINECONE_INDEX"));\n\nconst vectorStore = await PineconeStore.fromExistingIndex(\n  new OpenAIEmbeddings(),\n  { pineconeIndex }\n);\n\nawait vectorStore.addDocuments(\n  [new Document({ pageContent: "i worked at kensho" })],\n  { namespace: "harrison" }\n);\n\nawait vectorStore.addDocuments(\n  [new Document({ pageContent: "i worked at facebook" })],\n  { namespace: "ankush" }\n);\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'[ "77b8f174-9d89-4c6c-b2ab-607fe3913b2d" ]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The pinecone kwarg for ",(0,r.jsx)(n.code,{children:"namespace"})," can be used to separate documents"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'// This will only get documents for Ankush\nconst ankushRetriever = vectorStore.asRetriever({\n  filter: {\n    namespace: "ankush",\n  },\n});\n\nawait ankushRetriever.invoke("where did i work?");\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'[ Document { pageContent: "i worked at facebook", metadata: {} } ]\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'// This will only get documents for Harrison\nconst harrisonRetriever = vectorStore.asRetriever({\n  filter: {\n    namespace: "harrison",\n  },\n});\n\nawait harrisonRetriever.invoke("where did i work?");\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'[ Document { pageContent: "i worked at kensho", metadata: {} } ]\n'})}),"\n",(0,r.jsx)(n.p,{children:"We can now create the chain that we will use to perform\nquestion-answering."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { StringOutputParser } from "@langchain/core/output_parsers";\nimport { ChatPromptTemplate } from "@langchain/core/prompts";\nimport {\n  RunnableBinding,\n  RunnableLambda,\n  RunnablePassthrough,\n} from "@langchain/core/runnables";\nimport { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";\n\nconst template = `Answer the question based only on the following context:\n{context}\nQuestion: {question}`;\n\nconst prompt = ChatPromptTemplate.fromTemplate(template);\n\nconst model = new ChatOpenAI({\n  model: "gpt-3.5-turbo-0125",\n  temperature: 0,\n});\n'})}),"\n",(0,r.jsx)(n.p,{children:"We can now create the chain using our configurable retriever. It is\nconfigurable because we can define any object which will be passed to\nthe chain. From there, we extract the configurable object and pass it to\nthe vectorstore."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import {\n  RunnablePassthrough,\n  RunnableSequence,\n} from "@langchain/core/runnables";\n\nconst chain = RunnableSequence.from([\n  RunnablePassthrough.assign({\n    context: async (input, config) => {\n      if (!config || !("configurable" in config)) {\n        throw new Error("No config");\n      }\n      const { configurable } = config;\n      const documents = await vectorStore\n        .asRetriever(configurable)\n        .invoke(input.question, config);\n      return documents.map((doc) => doc.pageContent).join("\\n\\n");\n    },\n  }),\n  prompt,\n  model,\n  new StringOutputParser(),\n]);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["We can now invoke the chain with configurable options. ",(0,r.jsx)(n.code,{children:"search_kwargs"}),"\nis the id of the configurable field. The value is the search kwargs to\nuse for Pinecone"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'await chain.invoke(\n  { question: "where did the user work?" },\n  { configurable: { filter: { namespace: "harrison" } } }\n);\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'"The user worked at Kensho."\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'await chain.invoke(\n  { question: "where did the user work?" },\n  { configurable: { filter: { namespace: "ankush" } } }\n);\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'"The user worked at Facebook."\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For more vector store implementations that can support multiple users,\nplease refer to specific pages, such as\n",(0,r.jsx)(n.a,{href:"../../docs/integrations/vectorstores/milvus",children:"Milvus"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsx)(n.p,{children:"You\u2019ve now seen one approach for supporting retrieval with data from\nmultiple users."}),"\n",(0,r.jsxs)(n.p,{children:["Next, check out some of the other how-to guides on RAG, such as\n",(0,r.jsx)(n.a,{href:"../../docs/how_to/qa_sources",children:"returning sources"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(34164),s=t(23104),o=t(56347),i=t(205),l=t(57485),c=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:t,groupId:a}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(w,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},27846:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(11470),a=t(19365),s=t(21432),o=t(74848);function i(e){let{children:n}=e;return(0,o.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,o.jsx)(a.A,{value:"npm",label:"npm",children:(0,o.jsxs)(s.A,{language:"bash",children:["npm i ",n]})}),(0,o.jsx)(a.A,{value:"yarn",label:"yarn",default:!0,children:(0,o.jsxs)(s.A,{language:"bash",children:["yarn add ",n]})}),(0,o.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,o.jsxs)(s.A,{language:"bash",children:["pnpm add ",n]})})]})}}}]);