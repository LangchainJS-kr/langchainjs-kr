(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1356],{73170:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>h,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var o=t(74848),s=t(28453),i=t(64428),a=t(44161),l=t.n(a),r=t(78847);const c={sidebar_class_name:"hidden",sidebar_position:5},h="How to track token usage",p={id:"how_to/llm_token_usage_tracking",title:"How to track token usage",description:"This guide assumes familiarity with the following concepts:",source:"@site/docs/how_to/llm_token_usage_tracking.mdx",sourceDirName:"how_to",slug:"/how_to/llm_token_usage_tracking",permalink:"/docs/how_to/llm_token_usage_tracking",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/llm_token_usage_tracking.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_class_name:"hidden",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to track token usage",permalink:"/docs/how_to/chat_token_usage_tracking"},next:{title:"How to pass through arguments from one step to the next",permalink:"/docs/how_to/passthrough"}},d={},u=[...r.toc,{value:"Next steps",id:"next-steps",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"how-to-track-token-usage",children:"How to track token usage"}),"\n",(0,o.jsxs)(n.admonition,{title:"Prerequisites",type:"info",children:[(0,o.jsx)(n.p,{children:"This guide assumes familiarity with the following concepts:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/concepts/#llms",children:"LLMs"})}),"\n"]})]}),"\n",(0,o.jsx)(n.p,{children:"This notebook goes over how to track your token usage for specific LLM calls. This is only implemented by some providers, including OpenAI."}),"\n",(0,o.jsx)(n.p,{children:"Here's an example of tracking token usage for a single LLM call via a callback:"}),"\n","\n","\n",(0,o.jsx)(r.default,{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai\n"})}),"\n",(0,o.jsx)(i.A,{language:"typescript",children:l()}),"\n",(0,o.jsx)(n.p,{children:"If this model is passed to a chain or agent that calls it multiple times, it will log an output each time."}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,o.jsx)(n.p,{children:"You've now seen how to get token usage for supported LLM providers."}),"\n",(0,o.jsxs)(n.p,{children:["Next, check out the other how-to guides in this section, like ",(0,o.jsx)(n.a,{href:"/docs/how_to/custom_llm",children:"how to implement your own custom LLM"}),"."]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},44161:e=>{e.exports={content:'import { OpenAI } from "@langchain/openai";\n\nconst llm = new OpenAI({\n  model: "gpt-3.5-turbo-instruct",\n  callbacks: [\n    {\n      handleLLMEnd(output) {\n        console.log(JSON.stringify(output, null, 2));\n      },\n    },\n  ],\n});\n\nawait llm.invoke("Tell me a joke.");\n\n/*\n  {\n    "generations": [\n      [\n        {\n          "text": "\\n\\nWhy don\'t scientists trust atoms?\\n\\nBecause they make up everything.",\n          "generationInfo": {\n            "finishReason": "stop",\n            "logprobs": null\n          }\n        }\n      ]\n    ],\n    "llmOutput": {\n      "tokenUsage": {\n        "completionTokens": 14,\n        "promptTokens": 5,\n        "totalTokens": 19\n      }\n    }\n  }\n*/\n',imports:[{local:"OpenAI",imported:"OpenAI",source:"@langchain/openai"}]}}}]);