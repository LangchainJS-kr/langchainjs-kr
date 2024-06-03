(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3227,65],{25738:(e,n,o)=>{"use strict";o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>g,toc:()=>u});var t=o(74848),a=o(28453),l=o(64428),i=o(77439),s=o.n(i),r=o(78847);const c={hide_table_of_contents:!0},d="Google Calendar Tool",g={id:"integrations/tools/google_calendar",title:"Google Calendar Tool",description:"The Google Calendar Tools allow your agent to create and view Google Calendar events from a linked calendar.",source:"@site/docs/integrations/tools/google_calendar.mdx",sourceDirName:"integrations/tools",slug:"/integrations/tools/google_calendar",permalink:"/docs/integrations/tools/google_calendar",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/tools/google_calendar.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"integrations",previous:{title:"Gmail Tool",permalink:"/docs/integrations/tools/gmail"},next:{title:"Google Places Tool",permalink:"/docs/integrations/tools/google_places"}},p={},u=[{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},...r.toc];function m(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"google-calendar-tool",children:"Google Calendar Tool"}),"\n",(0,t.jsx)(n.p,{children:"The Google Calendar Tools allow your agent to create and view Google Calendar events from a linked calendar."}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.p,{children:"To use the Google Calendar Tools you need to install the following official peer dependency:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install googleapis\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n","\n","\n",(0,t.jsx)(r.default,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai\n"})}),"\n",(0,t.jsx)(l.A,{language:"typescript",children:s()})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},78847:(e,n,o)=>{"use strict";o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=o(74848),a=o(28453);const l={},i=void 0,s={id:"mdx_components/integration_install_tooltip",title:"integration_install_tooltip",description:"See this section for general instructions on installing integration packages.",source:"@site/docs/mdx_components/integration_install_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/integration_install_tooltip",permalink:"/docs/mdx_components/integration_install_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/integration_install_tooltip.mdx",tags:[],version:"current",frontMatter:{}},r={},c=[];function d(e){const n={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/docs/how_to/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},77439:e=>{e.exports={content:'import { initializeAgentExecutorWithOptions } from "langchain/agents";\nimport { OpenAI } from "@langchain/openai";\nimport { Calculator } from "@langchain/community/tools/calculator";\nimport {\n  GoogleCalendarCreateTool,\n  GoogleCalendarViewTool,\n} from "@langchain/community/tools/google_calendar";\n\nexport async function run() {\n  const model = new OpenAI({\n    temperature: 0,\n    apiKey: process.env.OPENAI_API_KEY,\n  });\n\n  const googleCalendarParams = {\n    credentials: {\n      clientEmail: process.env.GOOGLE_CALENDAR_CLIENT_EMAIL,\n      privateKey: process.env.GOOGLE_CALENDAR_PRIVATE_KEY,\n      calendarId: process.env.GOOGLE_CALENDAR_CALENDAR_ID,\n    },\n    scopes: [\n      "https://www.googleapis.com/auth/calendar",\n      "https://www.googleapis.com/auth/calendar.events",\n    ],\n    model,\n  };\n\n  const tools = [\n    new Calculator(),\n    new GoogleCalendarCreateTool(googleCalendarParams),\n    new GoogleCalendarViewTool(googleCalendarParams),\n  ];\n\n  const calendarAgent = await initializeAgentExecutorWithOptions(tools, model, {\n    agentType: "zero-shot-react-description",\n    verbose: true,\n  });\n\n  const createInput = `Create a meeting with John Doe next Friday at 4pm - adding to the agenda of it the result of 99 + 99`;\n\n  const createResult = await calendarAgent.invoke({ input: createInput });\n  //   Create Result {\n  //     output: \'A meeting with John Doe on 29th September at 4pm has been created and the result of 99 + 99 has been added to the agenda.\'\n  //   }\n  console.log("Create Result", createResult);\n\n  const viewInput = `What meetings do I have this week?`;\n\n  const viewResult = await calendarAgent.invoke({ input: viewInput });\n  //   View Result {\n  //     output: "You have no meetings this week between 8am and 8pm."\n  //   }\n  console.log("View Result", viewResult);\n}\n',imports:[{local:"initializeAgentExecutorWithOptions",imported:"initializeAgentExecutorWithOptions",source:"langchain/agents"},{local:"OpenAI",imported:"OpenAI",source:"@langchain/openai"},{local:"Calculator",imported:"Calculator",source:"@langchain/community/tools/calculator"},{local:"GoogleCalendarCreateTool",imported:"GoogleCalendarCreateTool",source:"@langchain/community/tools/google_calendar"},{local:"GoogleCalendarViewTool",imported:"GoogleCalendarViewTool",source:"@langchain/community/tools/google_calendar"}]}}}]);