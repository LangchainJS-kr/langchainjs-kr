"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7820],{38877:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(74848),a=t(28453),s=t(78847),o=t(27846);const i={sidebar_class_name:"hidden",title:"How to construct knowledge graphs"},l=void 0,c={id:"how_to/graph_constructing",title:"How to construct knowledge graphs",description:"In this guide we\u2019ll go over the basic ways of constructing a knowledge",source:"@site/docs/how_to/graph_constructing.mdx",sourceDirName:"how_to",slug:"/how_to/graph_constructing",permalink:"/docs/how_to/graph_constructing",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/graph_constructing.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden",title:"How to construct knowledge graphs"},sidebar:"tutorialSidebar",previous:{title:"How to run custom functions",permalink:"/docs/how_to/functions"},next:{title:"How to map values to a database",permalink:"/docs/how_to/graph_mapping"}},u={},d=[{value:"Setup",id:"setup",level:2},{value:"Install dependencies",id:"install-dependencies",level:4},...s.toc,{value:"Set environment variables",id:"set-environment-variables",level:4},{value:"LLM Graph Transformer",id:"llm-graph-transformer",level:2},{value:"Storing to graph database",id:"storing-to-graph-database",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"In this guide we\u2019ll go over the basic ways of constructing a knowledge\ngraph based on unstructured text. The constructed graph can then be used\nas knowledge base in a RAG application. At a high-level, the steps of\nconstructing a knowledge are from text are:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Extracting structured information from text: Model is used to\nextract structured graph information from text."}),"\n",(0,r.jsx)(n.li,{children:"Storing into graph database: Storing the extracted structured graph\ninformation into a graph database enables downstream RAG\napplications"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.h4,{id:"install-dependencies",children:"Install dependencies"}),"\n","\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(n.p,{children:"langchain @langchain/community @langchain/openai neo4j-driver zod"})}),"\n",(0,r.jsx)(n.h4,{id:"set-environment-variables",children:"Set environment variables"}),"\n",(0,r.jsx)(n.p,{children:"We\u2019ll use OpenAI in this example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-env",children:"OPENAI_API_KEY=your-api-key\n\n# Optional, use LangSmith for best-in-class observability\nLANGSMITH_API_KEY=your-api-key\nLANGCHAIN_TRACING_V2=true\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Next, we need to define Neo4j credentials. Follow ",(0,r.jsx)(n.a,{href:"https://neo4j.com/docs/operations-manual/current/installation/",children:"these installation\nsteps"}),"\nto set up a Neo4j database."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-env",children:'NEO4J_URI="bolt://localhost:7687"\nNEO4J_USERNAME="neo4j"\nNEO4J_PASSWORD="password"\n'})}),"\n",(0,r.jsx)(n.p,{children:"The below example will create a connection with a Neo4j database."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import "neo4j-driver";\nimport { Neo4jGraph } from "@langchain/community/graphs/neo4j_graph";\n\nconst url = Deno.env.get("NEO4J_URI");\nconst username = Deno.env.get("NEO4J_USER");\nconst password = Deno.env.get("NEO4J_PASSWORD");\nconst graph = await Neo4jGraph.initialize({ url, username, password });\n'})}),"\n",(0,r.jsx)(n.h2,{id:"llm-graph-transformer",children:"LLM Graph Transformer"}),"\n",(0,r.jsx)(n.p,{children:"Extracting graph data from text enables the transformation of\nunstructured information into structured formats, facilitating deeper\ninsights and more efficient navigation through complex relationships and\npatterns. The LLMGraphTransformer converts text documents into\nstructured graph documents by leveraging a LLM to parse and categorize\nentities and their relationships. The selection of the LLM model\nsignificantly influences the output by determining the accuracy and\nnuance of the extracted graph data."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { ChatOpenAI } from "@langchain/openai";\nimport { LLMGraphTransformer } from "@langchain/community/experimental/graph_transformers/llm";\n\nconst model = new ChatOpenAI({\n  temperature: 0,\n  model: "gpt-4-turbo-preview",\n});\n\nconst llmGraphTransformer = new LLMGraphTransformer({\n  llm: model,\n});\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now we can pass in example text and examine the results."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { Document } from "@langchain/core/documents";\n\nlet text = `\nMarie Curie, was a Polish and naturalised-French physicist and chemist who conducted pioneering research on radioactivity.\nShe was the first woman to win a Nobel Prize, the first person to win a Nobel Prize twice, and the only person to win a Nobel Prize in two scientific fields.\nHer husband, Pierre Curie, was a co-winner of her first Nobel Prize, making them the first-ever married couple to win the Nobel Prize and launching the Curie family legacy of five Nobel Prizes.\nShe was, in 1906, the first woman to become a professor at the University of Paris.\n`;\n\nconst result = await llmGraphTransformer.convertToGraphDocuments([\n  new Document({ pageContent: text }),\n]);\n\nconsole.log(`Nodes: ${result[0].nodes.length}`);\nconsole.log(`Relationships:${result[0].relationships.length}`);\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"Nodes: 8\nRelationships:7\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note that the graph construction process is non-deterministic since we\nare using LLM. Therefore, you might get slightly different results on\neach execution. Examine the following image to better grasp the\nstructure of the generated knowledge graph."}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:"../../static/img/graph_construction1.png",alt:"graph_construction1.png"}),(0,r.jsx)("figcaption",{"aria-hidden":"true",children:"graph_construction1.png"})]}),"\n",(0,r.jsx)(n.p,{children:"Additionally, you have the flexibility to define specific types of nodes\nand relationships for extraction according to your requirements."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'const llmGraphTransformerFiltered = new LLMGraphTransformer({\n  llm: model,\n  allowedNodes: ["PERSON", "COUNTRY", "ORGANIZATION"],\n  allowedRelationships: ["NATIONALITY", "LOCATED_IN", "WORKED_AT", "SPOUSE"],\n  strictMode: false,\n});\n\nconst result_filtered =\n  await llmGraphTransformerFiltered.convertToGraphDocuments([\n    new Document({ pageContent: text }),\n  ]);\n\nconsole.log(`Nodes: ${result_filtered[0].nodes.length}`);\nconsole.log(`Relationships:${result_filtered[0].relationships.length}`);\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"Nodes: 6\nRelationships:4\n"})}),"\n",(0,r.jsx)(n.p,{children:"For a better understanding of the generated graph, we can again\nvisualize it."}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:"../../static/img/graph_construction2.png",alt:"graph_construction1.png"}),(0,r.jsx)("figcaption",{"aria-hidden":"true",children:"graph_construction1.png"})]}),"\n",(0,r.jsx)(n.h2,{id:"storing-to-graph-database",children:"Storing to graph database"}),"\n",(0,r.jsxs)(n.p,{children:["The generated graph documents can be stored to a graph database using\nthe ",(0,r.jsx)(n.code,{children:"addGraphDocuments"})," method."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"await graph.addGraphDocuments(result_filtered);\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(34164),s=t(23104),o=t(56347),i=t(205),l=t(57485),c=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=g({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(w,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},27846:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(11470),a=t(19365),s=t(21432),o=t(74848);function i(e){let{children:n}=e;return(0,o.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,o.jsx)(a.A,{value:"npm",label:"npm",children:(0,o.jsxs)(s.A,{language:"bash",children:["npm i ",n]})}),(0,o.jsx)(a.A,{value:"yarn",label:"yarn",default:!0,children:(0,o.jsxs)(s.A,{language:"bash",children:["yarn add ",n]})}),(0,o.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,o.jsxs)(s.A,{language:"bash",children:["pnpm add ",n]})})]})}}}]);