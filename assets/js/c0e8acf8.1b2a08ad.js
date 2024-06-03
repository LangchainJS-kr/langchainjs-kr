"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5003],{72738:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=a(74848),t=a(28453),s=a(78847),i=a(27846);const l={sidebar_position:0,title:"\uadf8\ub798\ud504 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \ud1b5\ud55c \uc9c8\ubb38/\ub2f5\ubcc0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub9cc\ub4e4\uae30",sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},o=void 0,c={id:"tutorials/graph",title:"\uadf8\ub798\ud504 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \ud1b5\ud55c \uc9c8\ubb38/\ub2f5\ubcc0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub9cc\ub4e4\uae30",description:"In this guide we\u2019ll go over the basic ways to create a Q&A chain over a",source:"@site/docs/tutorials/graph.mdx",sourceDirName:"tutorials",slug:"/tutorials/graph",permalink:"/docs/tutorials/graph",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/tutorials/graph.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"\uadf8\ub798\ud504 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \ud1b5\ud55c \uc9c8\ubb38/\ub2f5\ubcc0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub9cc\ub4e4\uae30",sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},u={},h=[{value:"\u26a0\ufe0f Security note \u26a0\ufe0f",id:"security-note",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Setup",id:"setup",level:2},{value:"Install dependencies",id:"install-dependencies",level:4},...s.toc,{value:"Set environment variables",id:"set-environment-variables",level:4},{value:"Graph schema",id:"graph-schema",level:2},{value:"Chain",id:"chain",level:2},{value:"Next steps",id:"next-steps",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"In this guide we\u2019ll go over the basic ways to create a Q&A chain over a\ngraph database. These systems will allow us to ask a question about the\ndata in a graph database and get back a natural language answer."}),"\n",(0,r.jsx)(n.h2,{id:"security-note",children:"\u26a0\ufe0f Security note \u26a0\ufe0f"}),"\n",(0,r.jsxs)(n.p,{children:["Building Q&A systems of graph databases requires executing\nmodel-generated graph queries. There are inherent risks in doing this.\nMake sure that your database connection permissions are always scoped as\nnarrowly as possible for your chain/agent\u2019s needs. This will mitigate\nthough not eliminate the risks of building a model-driven system. For\nmore on general security best practices, ",(0,r.jsx)(n.a,{href:"../../docs/security",children:"see\nhere"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,r.jsx)(n.p,{children:"At a high-level, the steps of most graph chains are:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Convert question to a graph database query"}),": Model converts user\ninput to a graph database query (e.g.\xa0Cypher)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Execute graph database query"}),": Execute the graph database query."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Answer the question"}),": Model responds to user input using the\nquery results."]}),"\n"]}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:"../../static/img/graph_usecase.png",alt:"sql_usecase.png"}),(0,r.jsx)("figcaption",{"aria-hidden":"true",children:"sql_usecase.png"})]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.h4,{id:"install-dependencies",children:"Install dependencies"}),"\n","\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsx)(i.A,{children:(0,r.jsx)(n.p,{children:"langchain @langchain/community @langchain/openai neo4j-driver"})}),"\n",(0,r.jsx)(n.h4,{id:"set-environment-variables",children:"Set environment variables"}),"\n",(0,r.jsx)(n.p,{children:"We\u2019ll use OpenAI in this example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-env",children:"OPENAI_API_KEY=your-api-key\n\n# Optional, use LangSmith for best-in-class observability\nLANGSMITH_API_KEY=your-api-key\nLANGCHAIN_TRACING_V2=true\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Next, we need to define Neo4j credentials. Follow ",(0,r.jsx)(n.a,{href:"https://neo4j.com/docs/operations-manual/current/installation/",children:"these installation\nsteps"}),"\nto set up a Neo4j database."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-env",children:'NEO4J_URI="bolt://localhost:7687"\nNEO4J_USERNAME="neo4j"\nNEO4J_PASSWORD="password"\n'})}),"\n",(0,r.jsx)(n.p,{children:"The below example will create a connection with a Neo4j database and\nwill populate it with example data about movies and their actors."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import "neo4j-driver";\nimport { Neo4jGraph } from "@langchain/community/graphs/neo4j_graph";\n\nconst url = Deno.env.get("NEO4J_URI");\nconst username = Deno.env.get("NEO4J_USER");\nconst password = Deno.env.get("NEO4J_PASSWORD");\nconst graph = await Neo4jGraph.initialize({ url, username, password });\n\n// Import movie information\nconst moviesQuery = `LOAD CSV WITH HEADERS FROM \n\'https://raw.githubusercontent.com/tomasonjo/blog-datasets/main/movies/movies_small.csv\'\nAS row\nMERGE (m:Movie {id:row.movieId})\nSET m.released = date(row.released),\n    m.title = row.title,\n    m.imdbRating = toFloat(row.imdbRating)\nFOREACH (director in split(row.director, \'|\') | \n    MERGE (p:Person {name:trim(director)})\n    MERGE (p)-[:DIRECTED]->(m))\nFOREACH (actor in split(row.actors, \'|\') | \n    MERGE (p:Person {name:trim(actor)})\n    MERGE (p)-[:ACTED_IN]->(m))\nFOREACH (genre in split(row.genres, \'|\') | \n    MERGE (g:Genre {name:trim(genre)})\n    MERGE (m)-[:IN_GENRE]->(g))`;\n\nawait graph.query(moviesQuery);\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"Schema refreshed successfully.\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"[]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"graph-schema",children:"Graph schema"}),"\n",(0,r.jsxs)(n.p,{children:["In order for an LLM to be able to generate a Cypher statement, it needs\ninformation about the graph schema. When you instantiate a graph object,\nit retrieves the information about the graph schema. If you later make\nany changes to the graph, you can run the ",(0,r.jsx)(n.code,{children:"refreshSchema"})," method to\nrefresh the schema information."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"await graph.refreshSchema();\nconsole.log(graph.schema);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"Node properties are the following:\nMovie {imdbRating: FLOAT, id: STRING, released: DATE, title: STRING}, Person {name: STRING}, Genre {name: STRING}\nRelationship properties are the following:\n\nThe relationships are the following:\n(:Movie)-[:IN_GENRE]->(:Genre), (:Person)-[:DIRECTED]->(:Movie), (:Person)-[:ACTED_IN]->(:Movie)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Great! We\u2019ve got a graph database that we can query. Now let\u2019s try\nhooking it up to an LLM."}),"\n",(0,r.jsx)(n.h2,{id:"chain",children:"Chain"}),"\n",(0,r.jsx)(n.p,{children:"Let\u2019s use a simple chain that takes a question, turns it into a Cypher\nquery, executes the query, and uses the result to answer the original\nquestion."}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:"../../static/img/graph_chain.webp",alt:"graph_chain.webp"}),(0,r.jsx)("figcaption",{"aria-hidden":"true",children:"graph_chain.webp"})]}),"\n",(0,r.jsxs)(n.p,{children:["LangChain comes with a built-in chain for this workflow that is designed\nto work with Neo4j:\n",(0,r.jsx)(n.a,{href:"https://python.langchain.com/docs/use_cases/graph/graph_cypher_qa",children:"GraphCypherQAChain"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { GraphCypherQAChain } from "langchain/chains/graph_qa/cypher";\nimport { ChatOpenAI } from "@langchain/openai";\n\nconst llm = new ChatOpenAI({ model: "gpt-3.5-turbo", temperature: 0 });\nconst chain = GraphCypherQAChain.fromLLM({\n  llm,\n  graph,\n});\nconst response = await chain.invoke({\n  query: "What was the cast of the Casino?",\n});\nresponse;\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'{ result: "James Woods, Joe Pesci, Robert De Niro, Sharon Stone" }\n'})}),"\n",(0,r.jsx)(n.h3,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsx)(n.p,{children:"For more complex query-generation, we may want to create few-shot\nprompts or add query-checking steps. For advanced techniques like this\nand more check out:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../../docs/how_to/graph_prompting",children:"Prompting strategies"}),": Advanced\nprompt engineering techniques."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../../docs/how_to/graph_mapping/",children:"Mapping values"}),": Techniques for\nmapping values from questions to database."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../../docs/how_to/graph_semantic",children:"Semantic layer"}),": Techniques for\nworking implementing semantic layers."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../../docs/how_to/graph_constructing",children:"Constructing graphs"}),":\nTechniques for constructing knowledge graphs."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var r=a(34164);const t={tabItem:"tabItem_Ymn6"};var s=a(74848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,i),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>w});var r=a(96540),t=a(34164),s=a(23104),i=a(56347),l=a(205),o=a(57485),c=a(31682),u=a(89466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}}))}(a);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:a}=e;const t=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,s=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,h]=g({queryString:a,groupId:t}),[m,b]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,u.Dv)(a);return[t,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:t}),x=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),b(e)}),[h,b,s]),tabValues:s}}var b=a(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(74848);function v(e){let{className:n,block:a,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,a=o.indexOf(n),t=l[a].value;t!==r&&(c(n),i(t))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:h,onClick:u,...s,className:(0,t.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:t}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(j,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(n))}},27846:(e,n,a)=>{a.d(n,{A:()=>l});a(96540);var r=a(11470),t=a(19365),s=a(21432),i=a(74848);function l(e){let{children:n}=e;return(0,i.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,i.jsx)(t.A,{value:"npm",label:"npm",children:(0,i.jsxs)(s.A,{language:"bash",children:["npm i ",n]})}),(0,i.jsx)(t.A,{value:"yarn",label:"yarn",default:!0,children:(0,i.jsxs)(s.A,{language:"bash",children:["yarn add ",n]})}),(0,i.jsx)(t.A,{value:"pnpm",label:"pnpm",children:(0,i.jsxs)(s.A,{language:"bash",children:["pnpm add ",n]})})]})}}}]);