"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[787],{18028:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=a(74848),r=a(28453),o=a(78847),s=a(27846);const i={sidebar_class_name:"hidden",title:"How to improve results with prompting"},l=void 0,c={id:"how_to/graph_prompting",title:"How to improve results with prompting",description:"In this guide we\u2019ll go over prompting strategies to improve graph",source:"@site/docs/how_to/graph_prompting.mdx",sourceDirName:"how_to",slug:"/how_to/graph_prompting",permalink:"/docs/how_to/graph_prompting",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/graph_prompting.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden",title:"How to improve results with prompting"},sidebar:"tutorialSidebar",previous:{title:"How to map values to a database",permalink:"/docs/how_to/graph_mapping"},next:{title:"How to add a semantic layer over the database",permalink:"/docs/how_to/graph_semantic"}},m={},h=[{value:"Setup",id:"setup",level:2},{value:"Install dependencies",id:"install-dependencies",level:4},...o.toc,{value:"Set environment variables",id:"set-environment-variables",level:4},{value:"Few-shot examples",id:"few-shot-examples",level:2},{value:"Dynamic few-shot examples",id:"dynamic-few-shot-examples",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In this guide we\u2019ll go over prompting strategies to improve graph\ndatabase query generation. We\u2019ll largely focus on methods for getting\nrelevant database-specific information in your prompt."}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.h4,{id:"install-dependencies",children:"Install dependencies"}),"\n","\n",(0,t.jsx)(o.default,{}),"\n",(0,t.jsx)(s.A,{children:(0,t.jsx)(n.p,{children:"langchain @langchain/community @langchain/openai neo4j-driver"})}),"\n",(0,t.jsx)(n.h4,{id:"set-environment-variables",children:"Set environment variables"}),"\n",(0,t.jsx)(n.p,{children:"We\u2019ll use OpenAI in this example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-env",children:"OPENAI_API_KEY=your-api-key\n\n# Optional, use LangSmith for best-in-class observability\nLANGSMITH_API_KEY=your-api-key\nLANGCHAIN_TRACING_V2=true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next, we need to define Neo4j credentials. Follow ",(0,t.jsx)(n.a,{href:"https://neo4j.com/docs/operations-manual/current/installation/",children:"these installation\nsteps"}),"\nto set up a Neo4j database."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-env",children:'NEO4J_URI="bolt://localhost:7687"\nNEO4J_USERNAME="neo4j"\nNEO4J_PASSWORD="password"\n'})}),"\n",(0,t.jsx)(n.p,{children:"The below example will create a connection with a Neo4j database and\nwill populate it with example data about movies and their actors."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const url = Deno.env.get("NEO4J_URI");\nconst username = Deno.env.get("NEO4J_USER");\nconst password = Deno.env.get("NEO4J_PASSWORD");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import \"neo4j-driver\";\nimport { Neo4jGraph } from \"@langchain/community/graphs/neo4j_graph\";\n\nconst graph = await Neo4jGraph.initialize({ url, username, password });\n\n// Import movie information\nconst moviesQuery = `LOAD CSV WITH HEADERS FROM \n'https://raw.githubusercontent.com/tomasonjo/blog-datasets/main/movies/movies_small.csv'\nAS row\nMERGE (m:Movie {id:row.movieId})\nSET m.released = date(row.released),\n    m.title = row.title,\n    m.imdbRating = toFloat(row.imdbRating)\nFOREACH (director in split(row.director, '|') | \n    MERGE (p:Person {name:trim(director)})\n    MERGE (p)-[:DIRECTED]->(m))\nFOREACH (actor in split(row.actors, '|') | \n    MERGE (p:Person {name:trim(actor)})\n    MERGE (p)-[:ACTED_IN]->(m))\nFOREACH (genre in split(row.genres, '|') | \n    MERGE (g:Genre {name:trim(genre)})\n    MERGE (m)-[:IN_GENRE]->(g))`;\n\nawait graph.query(moviesQuery);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Schema refreshed successfully.\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"[]\n"})}),"\n",(0,t.jsx)(n.h1,{id:"filtering-graph-schema",children:"Filtering graph schema"}),"\n",(0,t.jsx)(n.p,{children:"At times, you may need to focus on a specific subset of the graph schema\nwhile generating Cypher statements. Let\u2019s say we are dealing with the\nfollowing graph schema:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"await graph.refreshSchema();\nconsole.log(graph.schema);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Node properties are the following:\nMovie {imdbRating: FLOAT, id: STRING, released: DATE, title: STRING}, Person {name: STRING}, Genre {name: STRING}, Chunk {embedding: LIST, id: STRING, text: STRING}\nRelationship properties are the following:\n\nThe relationships are the following:\n(:Movie)-[:IN_GENRE]->(:Genre), (:Person)-[:DIRECTED]->(:Movie), (:Person)-[:ACTED_IN]->(:Movie)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"few-shot-examples",children:"Few-shot examples"}),"\n",(0,t.jsx)(n.p,{children:"Including examples of natural language questions being converted to\nvalid Cypher queries against our database in the prompt will often\nimprove model performance, especially for complex queries."}),"\n",(0,t.jsx)(n.p,{children:"Let\u2019s say we have the following examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const examples = [\n  {\n    question: "How many artists are there?",\n    query: "MATCH (a:Person)-[:ACTED_IN]->(:Movie) RETURN count(DISTINCT a)",\n  },\n  {\n    question: "Which actors played in the movie Casino?",\n    query: "MATCH (m:Movie {{title: \'Casino\'}})<-[:ACTED_IN]-(a) RETURN a.name",\n  },\n  {\n    question: "How many movies has Tom Hanks acted in?",\n    query:\n      "MATCH (a:Person {{name: \'Tom Hanks\'}})-[:ACTED_IN]->(m:Movie) RETURN count(m)",\n  },\n  {\n    question: "List all the genres of the movie Schindler\'s List",\n    query:\n      "MATCH (m:Movie {{title: \'Schindler\\\\\'s List\'}})-[:IN_GENRE]->(g:Genre) RETURN g.name",\n  },\n  {\n    question:\n      "Which actors have worked in movies from both the comedy and action genres?",\n    query:\n      "MATCH (a:Person)-[:ACTED_IN]->(:Movie)-[:IN_GENRE]->(g1:Genre), (a)-[:ACTED_IN]->(:Movie)-[:IN_GENRE]->(g2:Genre) WHERE g1.name = \'Comedy\' AND g2.name = \'Action\' RETURN DISTINCT a.name",\n  },\n  {\n    question:\n      "Which directors have made movies with at least three different actors named \'John\'?",\n    query:\n      "MATCH (d:Person)-[:DIRECTED]->(m:Movie)<-[:ACTED_IN]-(a:Person) WHERE a.name STARTS WITH \'John\' WITH d, COUNT(DISTINCT a) AS JohnsCount WHERE JohnsCount >= 3 RETURN d.name",\n  },\n  {\n    question: "Identify movies where directors also played a role in the film.",\n    query:\n      "MATCH (p:Person)-[:DIRECTED]->(m:Movie), (p)-[:ACTED_IN]->(m) RETURN m.title, p.name",\n  },\n  {\n    question:\n      "Find the actor with the highest number of movies in the database.",\n    query:\n      "MATCH (a:Actor)-[:ACTED_IN]->(m:Movie) RETURN a.name, COUNT(m) AS movieCount ORDER BY movieCount DESC LIMIT 1",\n  },\n];\n'})}),"\n",(0,t.jsx)(n.p,{children:"We can create a few-shot prompt with them like so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { FewShotPromptTemplate, PromptTemplate } from "@langchain/core/prompts";\n\nconst examplePrompt = PromptTemplate.fromTemplate(\n  "User input: {question}\\nCypher query: {query}"\n);\nconst prompt = new FewShotPromptTemplate({\n  examples: examples.slice(0, 5),\n  examplePrompt,\n  prefix:\n    "You are a Neo4j expert. Given an input question, create a syntactically correct Cypher query to run.\\n\\nHere is the schema information\\n{schema}.\\n\\nBelow are a number of examples of questions and their corresponding Cypher queries.",\n  suffix: "User input: {question}\\nCypher query: ",\n  inputVariables: ["question", "schema"],\n});\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'console.log(\n  await prompt.format({\n    question: "How many artists are there?",\n    schema: "foo",\n  })\n);\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"You are a Neo4j expert. Given an input question, create a syntactically correct Cypher query to run.\n\nHere is the schema information\nfoo.\n\nBelow are a number of examples of questions and their corresponding Cypher queries.\n\nUser input: How many artists are there?\nCypher query: MATCH (a:Person)-[:ACTED_IN]->(:Movie) RETURN count(DISTINCT a)\n\nUser input: Which actors played in the movie Casino?\nCypher query: MATCH (m:Movie {title: 'Casino'})<-[:ACTED_IN]-(a) RETURN a.name\n\nUser input: How many movies has Tom Hanks acted in?\nCypher query: MATCH (a:Person {name: 'Tom Hanks'})-[:ACTED_IN]->(m:Movie) RETURN count(m)\n\nUser input: List all the genres of the movie Schindler's List\nCypher query: MATCH (m:Movie {title: 'Schindler\\'s List'})-[:IN_GENRE]->(g:Genre) RETURN g.name\n\nUser input: Which actors have worked in movies from both the comedy and action genres?\nCypher query: MATCH (a:Person)-[:ACTED_IN]->(:Movie)-[:IN_GENRE]->(g1:Genre), (a)-[:ACTED_IN]->(:Movie)-[:IN_GENRE]->(g2:Genre) WHERE g1.name = 'Comedy' AND g2.name = 'Action' RETURN DISTINCT a.name\n\nUser input: How many artists are there?\nCypher query:\n"})}),"\n",(0,t.jsx)(n.h2,{id:"dynamic-few-shot-examples",children:"Dynamic few-shot examples"}),"\n",(0,t.jsx)(n.p,{children:"If we have enough examples, we may want to only include the most\nrelevant ones in the prompt, either because they don\u2019t fit in the\nmodel\u2019s context window or because the long tail of examples distracts\nthe model. And specifically, given any input we want to include the\nexamples most relevant to that input."}),"\n",(0,t.jsxs)(n.p,{children:["We can do just this using an ExampleSelector. In this case we\u2019ll use a\n",(0,t.jsx)(n.a,{href:"https://v02.api.js.langchain.com/classes/langchain_core_example_selectors.SemanticSimilarityExampleSelector.html",children:"SemanticSimilarityExampleSelector"}),",\nwhich will store the examples in the vector database of our choosing. At\nruntime it will perform a similarity search between the input and our\nexamples, and return the most semantically similar ones:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { OpenAIEmbeddings } from "@langchain/openai";\nimport { SemanticSimilarityExampleSelector } from "@langchain/core/example_selectors";\nimport { Neo4jVectorStore } from "@langchain/community/vectorstores/neo4j_vector";\n\nconst exampleSelector = await SemanticSimilarityExampleSelector.fromExamples(\n  examples,\n  new OpenAIEmbeddings(),\n  Neo4jVectorStore,\n  {\n    k: 5,\n    inputKeys: ["question"],\n    preDeleteCollection: true,\n    url,\n    username,\n    password,\n  }\n);\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'await exampleSelector.selectExamples({\n  question: "how many artists are there?",\n});\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'[\n  {\n    query: "MATCH (a:Person)-[:ACTED_IN]->(:Movie) RETURN count(DISTINCT a)",\n    question: "How many artists are there?"\n  },\n  {\n    query: "MATCH (a:Person {{name: \'Tom Hanks\'}})-[:ACTED_IN]->(m:Movie) RETURN count(m)",\n    question: "How many movies has Tom Hanks acted in?"\n  },\n  {\n    query: "MATCH (a:Person)-[:ACTED_IN]->(:Movie)-[:IN_GENRE]->(g1:Genre), (a)-[:ACTED_IN]->(:Movie)-[:IN_GENRE"... 84 more characters,\n    question: "Which actors have worked in movies from both the comedy and action genres?"\n  },\n  {\n    query: "MATCH (d:Person)-[:DIRECTED]->(m:Movie)<-[:ACTED_IN]-(a:Person) WHERE a.name STARTS WITH \'John\' WITH"... 71 more characters,\n    question: "Which directors have made movies with at least three different actors named \'John\'?"\n  },\n  {\n    query: "MATCH (a:Actor)-[:ACTED_IN]->(m:Movie) RETURN a.name, COUNT(m) AS movieCount ORDER BY movieCount DES"... 9 more characters,\n    question: "Find the actor with the highest number of movies in the database."\n  }\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"To use it, we can pass the ExampleSelector directly in to our\nFewShotPromptTemplate:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const prompt = new FewShotPromptTemplate({\n  exampleSelector,\n  examplePrompt,\n  prefix:\n    "You are a Neo4j expert. Given an input question, create a syntactically correct Cypher query to run.\\n\\nHere is the schema information\\n{schema}.\\n\\nBelow are a number of examples of questions and their corresponding Cypher queries.",\n  suffix: "User input: {question}\\nCypher query: ",\n  inputVariables: ["question", "schema"],\n});\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'console.log(\n  await prompt.format({\n    question: "how many artists are there?",\n    schema: "foo",\n  })\n);\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"You are a Neo4j expert. Given an input question, create a syntactically correct Cypher query to run.\n\nHere is the schema information\nfoo.\n\nBelow are a number of examples of questions and their corresponding Cypher queries.\n\nUser input: How many artists are there?\nCypher query: MATCH (a:Person)-[:ACTED_IN]->(:Movie) RETURN count(DISTINCT a)\n\nUser input: How many movies has Tom Hanks acted in?\nCypher query: MATCH (a:Person {name: 'Tom Hanks'})-[:ACTED_IN]->(m:Movie) RETURN count(m)\n\nUser input: Which actors have worked in movies from both the comedy and action genres?\nCypher query: MATCH (a:Person)-[:ACTED_IN]->(:Movie)-[:IN_GENRE]->(g1:Genre), (a)-[:ACTED_IN]->(:Movie)-[:IN_GENRE]->(g2:Genre) WHERE g1.name = 'Comedy' AND g2.name = 'Action' RETURN DISTINCT a.name\n\nUser input: Which directors have made movies with at least three different actors named 'John'?\nCypher query: MATCH (d:Person)-[:DIRECTED]->(m:Movie)<-[:ACTED_IN]-(a:Person) WHERE a.name STARTS WITH 'John' WITH d, COUNT(DISTINCT a) AS JohnsCount WHERE JohnsCount >= 3 RETURN d.name\n\nUser input: Find the actor with the highest number of movies in the database.\nCypher query: MATCH (a:Actor)-[:ACTED_IN]->(m:Movie) RETURN a.name, COUNT(m) AS movieCount ORDER BY movieCount DESC LIMIT 1\n\nUser input: how many artists are there?\nCypher query:\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { ChatOpenAI } from "@langchain/openai";\nimport { GraphCypherQAChain } from "langchain/chains/graph_qa/cypher";\n\nconst llm = new ChatOpenAI({\n  model: "gpt-3.5-turbo",\n  temperature: 0,\n});\nconst chain = GraphCypherQAChain.fromLLM({\n  graph,\n  llm,\n  cypherPrompt: prompt,\n});\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'await chain.invoke({\n  query: "How many actors are in the graph?",\n});\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'{ result: "There are 967 actors in the graph." }\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>s});a(96540);var t=a(34164);const r={tabItem:"tabItem_Ymn6"};var o=a(74848);function s(e){let{children:n,hidden:a,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,s),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>N});var t=a(96540),r=a(34164),o=a(23104),s=a(56347),i=a(205),l=a(57485),c=a(31682),m=a(89466);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:a}=e;const r=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,o=u(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[c,h]=d({queryString:a,groupId:r}),[g,y]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,m.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),v=(()=>{const e=c??g;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),y(e)}),[h,y,o]),tabValues:o}}var y=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var E=a(74848);function T(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),m=e=>{const n=e.currentTarget,a=l.indexOf(n),r=i[a].value;r!==t&&(c(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,E.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:o}=e;return(0,E.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:h,onClick:m,...o,className:(0,r.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function f(e){let{lazy:n,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,E.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function x(e){const n=g(e);return(0,E.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,E.jsx)(T,{...n,...e}),(0,E.jsx)(f,{...n,...e})]})}function N(e){const n=(0,y.A)();return(0,E.jsx)(x,{...e,children:h(e.children)},String(n))}},27846:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var t=a(11470),r=a(19365),o=a(21432),s=a(74848);function i(e){let{children:n}=e;return(0,s.jsxs)(t.A,{groupId:"npm2yarn",children:[(0,s.jsx)(r.A,{value:"npm",label:"npm",children:(0,s.jsxs)(o.A,{language:"bash",children:["npm i ",n]})}),(0,s.jsx)(r.A,{value:"yarn",label:"yarn",default:!0,children:(0,s.jsxs)(o.A,{language:"bash",children:["yarn add ",n]})}),(0,s.jsx)(r.A,{value:"pnpm",label:"pnpm",children:(0,s.jsxs)(o.A,{language:"bash",children:["pnpm add ",n]})})]})}}}]);