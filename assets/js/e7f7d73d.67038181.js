(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6600,65],{89554:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>h,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var a=n(74848),o=n(28453),i=n(64428),s=n(78847),r=n(73327),l=n.n(r);const c={hide_table_of_contents:!0},h="Tavily Search",p={id:"integrations/tools/tavily_search",title:"Tavily Search",description:"Tavily Search is a robust search API tailored specifically for LLM Agents. It seamlessly integrates with diverse data sources to ensure a superior, relevant search experience.",source:"@site/docs/integrations/tools/tavily_search.mdx",sourceDirName:"integrations/tools",slug:"/integrations/tools/tavily_search",permalink:"/docs/integrations/tools/tavily_search",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/tools/tavily_search.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"integrations",previous:{title:"StackExchange Tool",permalink:"/docs/integrations/tools/stackexchange"},next:{title:"Web Browser Tool",permalink:"/docs/integrations/tools/webbrowser"}},d={},u=[{value:"Setup",id:"setup",level:2},...s.toc,{value:"Usage",id:"usage",level:2}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"tavily-search",children:"Tavily Search"}),"\n",(0,a.jsx)(t.p,{children:"Tavily Search is a robust search API tailored specifically for LLM Agents. It seamlessly integrates with diverse data sources to ensure a superior, relevant search experience."}),"\n",(0,a.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsxs)(t.p,{children:["Set up an API key ",(0,a.jsx)(t.a,{href:"https://app.tavily.com",children:"here"})," and set it as an environment variable named ",(0,a.jsx)(t.code,{children:"TAVILY_API_KEY"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["You'll also need to install the ",(0,a.jsx)(t.code,{children:"@langchain/community"})," package:"]}),"\n","\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai @langchain/community\n"})}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,a.jsx)(i.A,{language:"typescript",children:l()})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},78847:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(74848),o=n(28453);const i={},s=void 0,r={id:"mdx_components/integration_install_tooltip",title:"integration_install_tooltip",description:"See this section for general instructions on installing integration packages.",source:"@site/docs/mdx_components/integration_install_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/integration_install_tooltip",permalink:"/docs/mdx_components/integration_install_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/integration_install_tooltip.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[];function h(e){const t={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["See ",(0,a.jsx)(t.a,{href:"/docs/how_to/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},73327:e=>{e.exports={content:'import { TavilySearchResults } from "@langchain/community/tools/tavily_search";\nimport { ChatOpenAI } from "@langchain/openai";\nimport type { ChatPromptTemplate } from "@langchain/core/prompts";\n\nimport { pull } from "langchain/hub";\nimport { AgentExecutor, createOpenAIFunctionsAgent } from "langchain/agents";\n\n// Define the tools the agent will have access to.\nconst tools = [new TavilySearchResults({ maxResults: 1 })];\n\n// Get the prompt to use - you can modify this!\n// If you want to see the prompt in full, you can at:\n// https://smith.langchain.com/hub/hwchase17/openai-functions-agent\nconst prompt = await pull<ChatPromptTemplate>(\n  "hwchase17/openai-functions-agent"\n);\n\nconst llm = new ChatOpenAI({\n  model: "gpt-3.5-turbo-1106",\n  temperature: 0,\n});\n\nconst agent = await createOpenAIFunctionsAgent({\n  llm,\n  tools,\n  prompt,\n});\n\nconst agentExecutor = new AgentExecutor({\n  agent,\n  tools,\n});\n\nconst result = await agentExecutor.invoke({\n  input: "what is the weather in wailea?",\n});\n\nconsole.log(result);\n\n/*\n  {\n    input: \'what is the weather in wailea?\',\n    output: "The current weather in Wailea, HI is 64\xb0F with clear skies. The high for today is 82\xb0F and the low is 66\xb0F. If you\'d like more detailed information, you can visit [The Weather Channel](https://weather.com/weather/today/l/Wailea+HI?canonicalCityId=ffa9df9f7220c7e22cbcca3dc0a6c402d9c740c755955db833ea32a645b2bcab)."\n  }\n*/\n',imports:[{local:"TavilySearchResults",imported:"TavilySearchResults",source:"@langchain/community/tools/tavily_search"},{local:"ChatOpenAI",imported:"ChatOpenAI",source:"@langchain/openai"},{local:"ChatPromptTemplate",imported:"ChatPromptTemplate",source:"@langchain/core/prompts"},{local:"pull",imported:"pull",source:"langchain/hub"},{local:"AgentExecutor",imported:"AgentExecutor",source:"langchain/agents"},{local:"createOpenAIFunctionsAgent",imported:"createOpenAIFunctionsAgent",source:"langchain/agents"}]}}}]);