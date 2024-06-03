(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7867],{54196:(n,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>h,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var o=t(74848),i=t(28453),r=t(64428),s=t(8609),a=t.n(s),c=t(78847);const l={},h="Connery Action Tool",u={id:"integrations/tools/connery",title:"Connery Action Tool",description:"Using this tool, you can integrate individual Connery Action into your LangChain agent.",source:"@site/docs/integrations/tools/connery.mdx",sourceDirName:"integrations/tools",slug:"/integrations/tools/connery",permalink:"/docs/integrations/tools/connery",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/tools/connery.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"ChatGPT Plugins",permalink:"/docs/integrations/tools/aiplugin-tool"},next:{title:"Dall-E Tool",permalink:"/docs/integrations/tools/dalle"}},d={},p=[{value:"What is Connery?",id:"what-is-connery",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example of using Connery Action Tool",id:"example-of-using-connery-action-tool",level:2},{value:"Setup",id:"setup",level:3},...c.toc,{value:"Usage",id:"usage",level:3}];function m(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"connery-action-tool",children:"Connery Action Tool"}),"\n",(0,o.jsx)(e.p,{children:"Using this tool, you can integrate individual Connery Action into your LangChain agent."}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.p,{children:["If you want to use more than one Connery Action in your agent,\ncheck out the ",(0,o.jsx)(e.a,{href:"/docs/integrations/toolkits/connery",children:"Connery Toolkit"})," documentation."]})}),"\n",(0,o.jsx)(e.h2,{id:"what-is-connery",children:"What is Connery?"}),"\n",(0,o.jsx)(e.p,{children:"Connery is an open-source plugin infrastructure for AI."}),"\n",(0,o.jsx)(e.p,{children:"With Connery, you can easily create a custom plugin with a set of actions and seamlessly integrate them into your LangChain agent.\nConnery will take care of critical aspects such as runtime, authorization, secret management, access management, audit logs, and other vital features."}),"\n",(0,o.jsx)(e.p,{children:"Furthermore, Connery, supported by our community, provides a diverse collection of ready-to-use open-source plugins for added convenience."}),"\n",(0,o.jsx)(e.p,{children:"Learn more about Connery:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["GitHub: ",(0,o.jsx)(e.a,{href:"https://github.com/connery-io/connery",children:"https://github.com/connery-io/connery"})]}),"\n",(0,o.jsxs)(e.li,{children:["Documentation: ",(0,o.jsx)(e.a,{href:"https://docs.connery.io",children:"https://docs.connery.io"})]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(e.p,{children:"To use Connery Actions in your LangChain agent, you need to do some preparation:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["Set up the Connery runner using the ",(0,o.jsx)(e.a,{href:"https://docs.connery.io/docs/runner/quick-start/",children:"Quickstart"})," guide."]}),"\n",(0,o.jsx)(e.li,{children:"Install all the plugins with the actions you want to use in your agent."}),"\n",(0,o.jsxs)(e.li,{children:["Set environment variables ",(0,o.jsx)(e.code,{children:"CONNERY_RUNNER_URL"})," and ",(0,o.jsx)(e.code,{children:"CONNERY_RUNNER_API_KEY"})," so the toolkit can communicate with the Connery Runner."]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"example-of-using-connery-action-tool",children:"Example of using Connery Action Tool"}),"\n",(0,o.jsx)(e.h3,{id:"setup",children:"Setup"}),"\n",(0,o.jsx)(e.p,{children:"To use the Connery Action Tool you need to install the following official peer dependency:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community\n"})}),"\n",(0,o.jsx)(c.default,{}),"\n",(0,o.jsx)(e.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(e.p,{children:"In the example below, we fetch action by its ID from the Connery Runner and then call it with the specified parameters."}),"\n",(0,o.jsxs)(e.p,{children:["Here, we use the ID of the ",(0,o.jsx)(e.strong,{children:"Send email"})," action from the ",(0,o.jsx)(e.a,{href:"https://github.com/connery-io/gmail",children:"Gmail"})," plugin."]}),"\n",(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.p,{children:["You can see a LangSmith trace of this example ",(0,o.jsx)(e.a,{href:"https://smith.langchain.com/public/c4b6723d-f91c-440c-8682-16ec8297a602/r",children:"here"}),"."]})}),"\n",(0,o.jsx)(r.A,{language:"typescript",children:a()}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"Connery Action is a structured tool, so you can only use it in the agents supporting structured tools."})})]})}function y(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(m,{...n})}):m(n)}},8609:n=>{n.exports={content:'import { ConneryService } from "@langchain/community/tools/connery";\nimport { ChatOpenAI } from "@langchain/openai";\nimport { initializeAgentExecutorWithOptions } from "langchain/agents";\n\n// Specify your Connery Runner credentials.\nprocess.env.CONNERY_RUNNER_URL = "";\nprocess.env.CONNERY_RUNNER_API_KEY = "";\n\n// Specify OpenAI API key.\nprocess.env.OPENAI_API_KEY = "";\n\n// Specify your email address to receive the emails from examples below.\nconst recepientEmail = "test@example.com";\n\n// Get the SendEmail action from the Connery Runner by ID.\nconst conneryService = new ConneryService();\nconst sendEmailAction = await conneryService.getAction(\n  "CABC80BB79C15067CA983495324AE709"\n);\n\n// Run the action manually.\nconst manualRunResult = await sendEmailAction.invoke({\n  recipient: recepientEmail,\n  subject: "Test email",\n  body: "This is a test email sent by Connery.",\n});\nconsole.log(manualRunResult);\n\n// Run the action using the OpenAI Functions agent.\nconst llm = new ChatOpenAI({ temperature: 0 });\nconst agent = await initializeAgentExecutorWithOptions([sendEmailAction], llm, {\n  agentType: "openai-functions",\n  verbose: true,\n});\nconst agentRunResult = await agent.invoke({\n  input: `Send an email to the ${recepientEmail} and say that I will be late for the meeting.`,\n});\nconsole.log(agentRunResult);\n',imports:[{local:"ConneryService",imported:"ConneryService",source:"@langchain/community/tools/connery"},{local:"ChatOpenAI",imported:"ChatOpenAI",source:"@langchain/openai"},{local:"initializeAgentExecutorWithOptions",imported:"initializeAgentExecutorWithOptions",source:"langchain/agents"}]}}}]);