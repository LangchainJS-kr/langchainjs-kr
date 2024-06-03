(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7957],{48125:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>g});var o=t(74848),a=t(28453),c=t(64428),r=t(78847),s=t(74755),i=t.n(s),l=t(42600),h=t.n(l);const u={hide_table_of_contents:!0},p="DuckDuckGoSearch",d={id:"integrations/tools/duckduckgo_search",title:"DuckDuckGoSearch",description:"DuckDuckGoSearch offers a privacy-focused search API designed for LLM Agents. It provides seamless integration with a wide range of data sources, prioritizing user privacy and relevant search results.",source:"@site/docs/integrations/tools/duckduckgo_search.mdx",sourceDirName:"integrations/tools",slug:"/integrations/tools/duckduckgo_search",permalink:"/docs/integrations/tools/duckduckgo_search",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/tools/duckduckgo_search.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"integrations",previous:{title:"Discord Tool",permalink:"/docs/integrations/tools/discord"},next:{title:"Exa Search",permalink:"/docs/integrations/tools/exa_search"}},m={},g=[{value:"Setup",id:"setup",level:2},...r.toc,{value:"Usage",id:"usage",level:2},{value:"With an agent",id:"with-an-agent",level:3}];function k(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"duckduckgosearch",children:"DuckDuckGoSearch"}),"\n",(0,o.jsx)(n.p,{children:"DuckDuckGoSearch offers a privacy-focused search API designed for LLM Agents. It provides seamless integration with a wide range of data sources, prioritizing user privacy and relevant search results."}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(n.p,{children:["Install the ",(0,o.jsx)(n.code,{children:"@langchain/community"})," package, along with the ",(0,o.jsx)(n.code,{children:"duck-duck-scrape"})," dependency:"]}),"\n","\n",(0,o.jsx)(r.default,{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install duck-duck-scrape\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["You can call ",(0,o.jsx)(n.code,{children:".invoke"})," on ",(0,o.jsx)(n.code,{children:"DuckDuckGoSearch"})," to search for a query:"]}),"\n","\n",(0,o.jsx)(c.A,{language:"typescript",children:i()}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["See the LangSmith trace ",(0,o.jsx)(n.a,{href:"https://smith.langchain.com/public/c352faaf-e617-4779-a943-96f963dc19a5/r",children:"here"})]})}),"\n",(0,o.jsx)(n.h3,{id:"with-an-agent",children:"With an agent"}),"\n","\n",(0,o.jsx)(c.A,{language:"typescript",children:h()}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["See the LangSmith trace for the Agent example ",(0,o.jsx)(n.a,{href:"https://smith.langchain.com/public/48f84a32-4fb5-4863-a8cd-324abebfce91/r",children:"here"})]})})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(k,{...e})}):k(e)}},42600:e=>{e.exports={content:'import { DuckDuckGoSearch } from "@langchain/community/tools/duckduckgo_search";\nimport { ChatOpenAI } from "@langchain/openai";\nimport type { ChatPromptTemplate } from "@langchain/core/prompts";\n\nimport { pull } from "langchain/hub";\nimport { AgentExecutor, createOpenAIFunctionsAgent } from "langchain/agents";\n\n// Define the tools the agent will have access to.\nconst tools = [new DuckDuckGoSearch({ maxResults: 1 })];\n\n// Get the prompt to use - you can modify this!\n// If you want to see the prompt in full, you can at:\n// https://smith.langchain.com/hub/hwchase17/openai-functions-agent\nconst prompt = await pull<ChatPromptTemplate>(\n  "hwchase17/openai-functions-agent"\n);\nconst llm = new ChatOpenAI({\n  model: "gpt-4-turbo-preview",\n  temperature: 0,\n});\nconst agent = await createOpenAIFunctionsAgent({\n  llm,\n  tools,\n  prompt,\n});\nconst agentExecutor = new AgentExecutor({\n  agent,\n  tools,\n});\nconst result = await agentExecutor.invoke({\n  input: "What is Anthropic\'s estimated revenue for 2024?",\n});\n\nconsole.log(result);\n/*\n{\n  input: "What is Anthropic\'s estimated revenue for 2024?",\n  output: \'Anthropic has projected that it will generate more than $850 million in annualized revenue by the end of 2024. For more details, you can refer to the [Reuters article](https://www.reuters.com/technology/anthropic-forecasts-more-than-850-mln-annualized-revenue-rate-by-2024-end-report-2023-12-26/).\'\n}\n*/\n',imports:[{local:"DuckDuckGoSearch",imported:"DuckDuckGoSearch",source:"@langchain/community/tools/duckduckgo_search"},{local:"ChatOpenAI",imported:"ChatOpenAI",source:"@langchain/openai"},{local:"ChatPromptTemplate",imported:"ChatPromptTemplate",source:"@langchain/core/prompts"},{local:"pull",imported:"pull",source:"langchain/hub"},{local:"AgentExecutor",imported:"AgentExecutor",source:"langchain/agents"},{local:"createOpenAIFunctionsAgent",imported:"createOpenAIFunctionsAgent",source:"langchain/agents"}]}},74755:e=>{e.exports={content:'import { DuckDuckGoSearch } from "@langchain/community/tools/duckduckgo_search";\n\n// Instantiate the DuckDuckGoSearch tool.\nconst tool = new DuckDuckGoSearch({ maxResults: 1 });\n\n// Get the results of a query by calling .invoke on the tool.\nconst result = await tool.invoke(\n  "What is Anthropic\'s estimated revenue for 2024?"\n);\n\nconsole.log(result);\n/*\n[{\n  "title": "Anthropic forecasts more than $850 mln in annualized revenue rate by ...",\n  "link": "https://www.reuters.com/technology/anthropic-forecasts-more-than-850-mln-annualized-revenue-rate-by-2024-end-report-2023-12-26/",\n  "snippet": "Dec 26 (Reuters) - Artificial intelligence startup <b>Anthropic</b> has projected it will generate more than $850 million in annualized <b>revenue</b> by the end of <b>2024</b>, the Information reported on Tuesday ..."\n}]\n*/\n',imports:[{local:"DuckDuckGoSearch",imported:"DuckDuckGoSearch",source:"@langchain/community/tools/duckduckgo_search"}]}}}]);