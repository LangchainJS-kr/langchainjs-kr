(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3629,7817],{34353:(e,n,o)=>{"use strict";o.r(n),o.d(n,{assets:()=>j,contentTitle:()=>f,default:()=>v,frontMatter:()=>x,metadata:()=>y,toc:()=>_});var a=o(74848),t=o(28453),s=o(64428),i=o(78847),r=o(2280),l=o(44543),c=o.n(l),d=o(78001),h=o.n(d),g=o(15506),m=o.n(g),p=o(96645),u=o.n(p);const x={sidebar_label:"(Legacy) Google PaLM/VertexAI",sidebar_class_name:"hidden"},f="ChatGooglePaLM",y={id:"integrations/chat/google_palm",title:"ChatGooglePaLM",description:"This integration does not support gemini-* models. Check Google GenAI or VertexAI.",source:"@site/docs/integrations/chat/google_palm.mdx",sourceDirName:"integrations/chat",slug:"/integrations/chat/google_palm",permalink:"/docs/integrations/chat/google_palm",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/chat/google_palm.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"(Legacy) Google PaLM/VertexAI",sidebar_class_name:"hidden"},sidebar:"integrations",previous:{title:"Google GenAI",permalink:"/docs/integrations/chat/google_generativeai"},next:{title:"Google Vertex AI",permalink:"/docs/integrations/chat/google_vertex_ai"}},j={},_=[...i.toc,...r.toc,{value:"Setup",id:"setup",level:2},{value:"Node",id:"node",level:3},...i.toc,{value:"Web",id:"web",level:3},{value:"Usage",id:"usage",level:2},{value:"Streaming",id:"streaming",level:3},{value:"Examples",id:"examples",level:3}];function A(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"chatgooglepalm",children:"ChatGooglePaLM"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["This integration does not support ",(0,a.jsx)(n.code,{children:"gemini-*"})," models. Check Google ",(0,a.jsx)(n.a,{href:"/docs/integrations/chat/google_generativeai",children:"GenAI"})," or ",(0,a.jsx)(n.a,{href:"/docs/integrations/chat/google_vertex_ai",children:"VertexAI"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://developers.generativeai.google/products/palm",children:"Google PaLM API"})," can be integrated by first\ninstalling the required packages:"]}),"\n","\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install google-auth-library @google-ai/generativelanguage @langchain/community\n"})}),"\n","\n",(0,a.jsx)(r.default,{}),"\n",(0,a.jsxs)(n.p,{children:["Create an ",(0,a.jsx)(n.strong,{children:"API key"})," from ",(0,a.jsx)(n.a,{href:"https://makersuite.google.com/app/apikey",children:"Google MakerSuite"}),". You can then set\nthe key as ",(0,a.jsx)(n.code,{children:"GOOGLE_PALM_API_KEY"})," environment variable or pass it as ",(0,a.jsx)(n.code,{children:"apiKey"})," parameter while instantiating\nthe model."]}),"\n","\n",(0,a.jsx)(s.A,{language:"typescript",children:c()}),"\n",(0,a.jsx)(n.h1,{id:"chatgooglepalm-1",children:"ChatGooglePaLM"}),"\n",(0,a.jsx)(n.p,{children:"LangChain.js supports Google Vertex AI chat models as an integration.\nIt supports two different methods of authentication based on whether you're running\nin a Node environment or a web environment."}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(n.h3,{id:"node",children:"Node"}),"\n",(0,a.jsxs)(n.p,{children:["To call Vertex AI models in Node, you'll need to install ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/google-auth-library",children:"Google's official auth client"})," as a peer dependency."]}),"\n",(0,a.jsx)(n.p,{children:"You should make sure the Vertex AI API is\nenabled for the relevant project and that you've authenticated to\nGoogle Cloud using one of these methods:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["You are logged into an account (using ",(0,a.jsx)(n.code,{children:"gcloud auth application-default login"}),")\npermitted to that project."]}),"\n",(0,a.jsx)(n.li,{children:"You are running on a machine using a service account that is permitted\nto the project."}),"\n",(0,a.jsxs)(n.li,{children:["You have downloaded the credentials for a service account that is permitted\nto the project and set the ",(0,a.jsx)(n.code,{children:"GOOGLE_APPLICATION_CREDENTIALS"})," environment\nvariable to the path of this file."]}),"\n"]}),"\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install google-auth-library @langchain/community\n"})}),"\n",(0,a.jsx)(n.h3,{id:"web",children:"Web"}),"\n",(0,a.jsxs)(n.p,{children:["To call Vertex AI models in web environments (like Edge functions), you'll need to install\nthe ",(0,a.jsx)(n.a,{href:"https://github.com/kriasoft/web-auth-library",children:(0,a.jsx)(n.code,{children:"web-auth-library"})})," pacakge as a peer dependency:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install web-auth-library\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Then, you'll need to add your service account credentials directly as a ",(0,a.jsx)(n.code,{children:"GOOGLE_VERTEX_AI_WEB_CREDENTIALS"})," environment variable:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'GOOGLE_VERTEX_AI_WEB_CREDENTIALS={"type":"service_account","project_id":"YOUR_PROJECT-12345",...}\n'})}),"\n",(0,a.jsx)(n.p,{children:"You can also pass your credentials directly in code like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import { ChatGoogleVertexAI } from "@langchain/community/chat_models/googlevertexai";\n\nconst model = new ChatGoogleVertexAI({\n  authOptions: {\n    credentials: {"type":"service_account","project_id":"YOUR_PROJECT-12345",...},\n  },\n});\n'})}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:["Several models are available and can be specified by the ",(0,a.jsx)(n.code,{children:"model"})," attribute\nin the constructor. These include:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"code-bison (default)"}),"\n",(0,a.jsx)(n.li,{children:"code-bison-32k"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The ChatGoogleVertexAI class works just like other chat-based LLMs,\nwith a few exceptions:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["The first ",(0,a.jsx)(n.code,{children:"SystemMessage"}),' passed in is mapped to the "context" parameter that the PaLM model expects.\nNo other ',(0,a.jsx)(n.code,{children:"SystemMessages"})," are allowed."]}),"\n",(0,a.jsxs)(n.li,{children:["After the first ",(0,a.jsx)(n.code,{children:"SystemMessage"}),", there must be an odd number of messages, representing a conversation between a human and the model."]}),"\n",(0,a.jsx)(n.li,{children:"Human messages must alternate with AI messages."}),"\n"]}),"\n","\n",(0,a.jsx)(s.A,{language:"typescript",children:h()}),"\n",(0,a.jsx)(n.h3,{id:"streaming",children:"Streaming"}),"\n",(0,a.jsx)(n.p,{children:"ChatGoogleVertexAI also supports streaming in multiple chunks for faster responses:"}),"\n","\n",(0,a.jsx)(s.A,{language:"typescript",children:m()}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.p,{children:["There is also an optional ",(0,a.jsx)(n.code,{children:"examples"})," constructor parameter that can help the model understand what an appropriate response\nlooks like."]}),"\n","\n",(0,a.jsx)(s.A,{language:"typescript",children:u()})]})}function v(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(A,{...e})}):A(e)}},2280:(e,n,o)=>{"use strict";o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=o(74848),t=o(28453);const s={},i=void 0,r={id:"mdx_components/unified_model_params_tooltip",title:"unified_model_params_tooltip",description:"We're unifying model params across all packages. We now suggest using model instead of modelName, and apiKey for API keys.",source:"@site/docs/mdx_components/unified_model_params_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/unified_model_params_tooltip",permalink:"/docs/mdx_components/unified_model_params_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/unified_model_params_tooltip.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const n={admonition:"admonition",code:"code",p:"p",...(0,t.R)(),...e.components};return(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["We're unifying model params across all packages. We now suggest using ",(0,a.jsx)(n.code,{children:"model"})," instead of ",(0,a.jsx)(n.code,{children:"modelName"}),", and ",(0,a.jsx)(n.code,{children:"apiKey"})," for API keys."]})})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},44543:e=>{e.exports={content:'import { ChatGooglePaLM } from "@langchain/community/chat_models/googlepalm";\nimport {\n  AIMessage,\n  HumanMessage,\n  SystemMessage,\n} from "@langchain/core/messages";\n\nexport const run = async () => {\n  const model = new ChatGooglePaLM({\n    apiKey: "<YOUR API KEY>", // or set it in environment variable as `GOOGLE_PALM_API_KEY`\n    temperature: 0.7, // OPTIONAL\n    model: "models/chat-bison-001", // OPTIONAL\n    topK: 40, // OPTIONAL\n    topP: 1, // OPTIONAL\n    examples: [\n      // OPTIONAL\n      {\n        input: new HumanMessage("What is your favorite sock color?"),\n        output: new AIMessage("My favorite sock color be arrrr-ange!"),\n      },\n    ],\n  });\n\n  // ask questions\n  const questions = [\n    new SystemMessage(\n      "You are a funny assistant that answers in pirate language."\n    ),\n    new HumanMessage("What is your favorite food?"),\n  ];\n\n  // You can also use the model as part of a chain\n  const res = await model.invoke(questions);\n  console.log({ res });\n};\n',imports:[{local:"ChatGooglePaLM",imported:"ChatGooglePaLM",source:"@langchain/community/chat_models/googlepalm"},{local:"AIMessage",imported:"AIMessage",source:"@langchain/core/messages"},{local:"HumanMessage",imported:"HumanMessage",source:"@langchain/core/messages"},{local:"SystemMessage",imported:"SystemMessage",source:"@langchain/core/messages"}]}},96645:e=>{e.exports={content:'import { ChatGoogleVertexAI } from "@langchain/community/chat_models/googlevertexai";\nimport {\n  AIMessage,\n  HumanMessage,\n  SystemMessage,\n} from "@langchain/core/messages";\n\n// Or, if using the web entrypoint:\n// import { ChatGoogleVertexAI } from "@langchain/community/chat_models/googlevertexai/web";\n\nconst examples = [\n  {\n    input: new HumanMessage("What is your favorite sock color?"),\n    output: new AIMessage("My favorite sock color be arrrr-ange!"),\n  },\n];\nconst model = new ChatGoogleVertexAI({\n  temperature: 0.7,\n  examples,\n});\nconst questions = [\n  new SystemMessage(\n    "You are a funny assistant that answers in pirate language."\n  ),\n  new HumanMessage("What is your favorite food?"),\n];\n// You can also use the model as part of a chain\nconst res = await model.invoke(questions);\nconsole.log({ res });\n',imports:[{local:"ChatGoogleVertexAI",imported:"ChatGoogleVertexAI",source:"@langchain/community/chat_models/googlevertexai"},{local:"AIMessage",imported:"AIMessage",source:"@langchain/core/messages"},{local:"HumanMessage",imported:"HumanMessage",source:"@langchain/core/messages"},{local:"SystemMessage",imported:"SystemMessage",source:"@langchain/core/messages"}]}},15506:e=>{e.exports={content:'import { ChatGoogleVertexAI } from "@langchain/community/chat_models/googlevertexai";\n// Or, if using the web entrypoint:\n// import { ChatGoogleVertexAI } from "@langchain/community/chat_models/googlevertexai/web";\n\nconst model = new ChatGoogleVertexAI({\n  temperature: 0.7,\n});\nconst stream = await model.stream([\n  ["system", "You are a funny assistant that answers in pirate language."],\n  ["human", "What is your favorite food?"],\n]);\n\nfor await (const chunk of stream) {\n  console.log(chunk);\n}\n\n/*\nAIMessageChunk {\n  content: \' Ahoy there, matey! My favorite food be fish, cooked any way ye \',\n  additional_kwargs: {}\n}\nAIMessageChunk {\n  content: \'like!\',\n  additional_kwargs: {}\n}\nAIMessageChunk {\n  content: \'\',\n  name: undefined,\n  additional_kwargs: {}\n}\n*/\n',imports:[{local:"ChatGoogleVertexAI",imported:"ChatGoogleVertexAI",source:"@langchain/community/chat_models/googlevertexai"}]}},78001:e=>{e.exports={content:'import { ChatGoogleVertexAI } from "@langchain/community/chat_models/googlevertexai";\n// Or, if using the web entrypoint:\n// import { ChatGoogleVertexAI } from "@langchain/community/chat_models/googlevertexai/web";\n\nconst model = new ChatGoogleVertexAI({\n  temperature: 0.7,\n});\n',imports:[{local:"ChatGoogleVertexAI",imported:"ChatGoogleVertexAI",source:"@langchain/community/chat_models/googlevertexai"}]}}}]);