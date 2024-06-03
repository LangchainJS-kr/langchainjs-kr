(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9825],{53336:(e,o,n)=>{"use strict";n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>g,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var t=n(74848),s=n(28453),l=n(64428),i=n(78847),a=n(65649),r=n.n(a);const c={hide_table_of_contents:!0},g="Google Places Tool",p={id:"integrations/tools/google_places",title:"Google Places Tool",description:"The Google Places Tool allows your agent to utilize the Google Places API in order to find addresses,",source:"@site/docs/integrations/tools/google_places.mdx",sourceDirName:"integrations/tools",slug:"/integrations/tools/google_places",permalink:"/docs/integrations/tools/google_places",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/tools/google_places.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"integrations",previous:{title:"Google Calendar Tool",permalink:"/docs/integrations/tools/google_calendar"},next:{title:"Google Routes Tool",permalink:"/docs/integrations/tools/google_routes"}},d={},u=[{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},...i.toc];function h(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"google-places-tool",children:"Google Places Tool"}),"\n",(0,t.jsx)(o.p,{children:"The Google Places Tool allows your agent to utilize the Google Places API in order to find addresses,\nphone numbers, website, etc. from text about a location listed on Google Places."}),"\n",(0,t.jsx)(o.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(o.p,{children:["You will need to get an API key from ",(0,t.jsx)(o.a,{href:"https://developers.google.com/maps/documentation/places/web-service/overview",children:"Google here"}),"\nand ",(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/apis/library/places.googleapis.com",children:"enable the new Places API"}),". Then, set your API key\nas ",(0,t.jsx)(o.code,{children:"process.env.GOOGLE_PLACES_API_KEY"})," or pass it in as an ",(0,t.jsx)(o.code,{children:"apiKey"})," constructor argument."]}),"\n",(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,t.jsx)(i.default,{}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai @langchain/community\n"})}),"\n","\n",(0,t.jsx)(l.A,{language:"typescript",children:r()})]})}function m(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},65649:e=>{e.exports={content:'import { GooglePlacesAPI } from "@langchain/community/tools/google_places";\nimport { OpenAI } from "@langchain/openai";\nimport { initializeAgentExecutorWithOptions } from "langchain/agents";\n\nexport async function run() {\n  const model = new OpenAI({\n    temperature: 0,\n  });\n\n  const tools = [new GooglePlacesAPI()];\n\n  const executor = await initializeAgentExecutorWithOptions(tools, model, {\n    agentType: "zero-shot-react-description",\n    verbose: true,\n  });\n\n  const res = await executor.invoke({\n    input: "Where is the University of Toronto - Scarborough? ",\n  });\n\n  console.log(res.output);\n}\n',imports:[{local:"GooglePlacesAPI",imported:"GooglePlacesAPI",source:"@langchain/community/tools/google_places"},{local:"OpenAI",imported:"OpenAI",source:"@langchain/openai"},{local:"initializeAgentExecutorWithOptions",imported:"initializeAgentExecutorWithOptions",source:"langchain/agents"}]}}}]);