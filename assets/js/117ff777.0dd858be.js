"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5997],{90201:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=a(74848),s=a(28453),i=a(27846),l=(a(19365),a(64428),a(63142));const r={sidebar_position:0,title:"\uac04\ub2e8\ud55c LLM \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub9cc\ub4e4\uae30",sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},o=void 0,c={id:"tutorials/llm_chain",title:"\uac04\ub2e8\ud55c LLM \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub9cc\ub4e4\uae30",description:"In this quickstart we\u2019ll show you how to build a simple LLM application.",source:"@site/docs/tutorials/llm_chain.mdx",sourceDirName:"tutorials",slug:"/tutorials/llm_chain",permalink:"/docs/tutorials/llm_chain",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/tutorials/llm_chain.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"\uac04\ub2e8\ud55c LLM \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub9cc\ub4e4\uae30",sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},h={},d=[{value:"Concepts",id:"concepts",level:2},{value:"Setup",id:"setup",level:2},{value:"Installation",id:"installation",level:3},{value:"LangSmith",id:"langsmith",level:3},{value:"Detailed walkthrough",id:"detailed-walkthrough",level:2},{value:"Using Language Models",id:"using-language-models",level:2},{value:"OutputParsers",id:"outputparsers",level:2},{value:"Prompt Templates",id:"prompt-templates",level:2},{value:"Conclusion",id:"conclusion",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In this quickstart we\u2019ll show you how to build a simple LLM application.\nThis application will translate text from English into another language.\nThis is a relatively simple LLM application - it\u2019s just a single LLM\ncall plus some prompting. Still, this is a great way to get started with\nLangChain - a lot of features can be built with just some prompting and\nan LLM call!"}),"\n",(0,t.jsx)(n.h2,{id:"concepts",children:"Concepts"}),"\n",(0,t.jsx)(n.p,{children:"Concepts we will cover are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.a,{href:"../../docs/concepts/#chat-models",children:"language models"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.a,{href:"../../docs/concepts/#prompt-templates",children:"PromptTemplates"})," and\n",(0,t.jsx)(n.a,{href:"../../docs/concepts/#output-parsers",children:"OutputParsers"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"../../docs/concepts/#langchain-expression-language",children:"Chaining"})," a\nPromptTemplate + LLM + OutputParser using LangChain"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Debugging and tracing your application using\n",(0,t.jsx)(n.a,{href:"../../docs/concepts/#langsmith",children:"LangSmith"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"That\u2019s a fair amount to cover! Let\u2019s dive in."}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"To install LangChain run:"}),"\n","\n",(0,t.jsx)(i.A,{children:"langchain"}),"\n",(0,t.jsxs)(n.p,{children:["For more details, see our ",(0,t.jsx)(n.a,{href:"../../docs/how_to/installation/",children:"Installation\nguide"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"langsmith",children:"LangSmith"}),"\n",(0,t.jsxs)(n.p,{children:["Many of the applications you build with LangChain will contain multiple\nsteps with multiple invocations of LLM calls. As these applications get\nmore and more complex, it becomes crucial to be able to inspect what\nexactly is going on inside your chain or agent. The best way to do this\nis with ",(0,t.jsx)(n.a,{href:"https://smith.langchain.com",children:"LangSmith"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"After you sign up at the link above, make sure to set your environment\nvariables to start logging traces:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'export LANGCHAIN_TRACING_V2="true"\nexport LANGCHAIN_API_KEY="..."\n'})}),"\n",(0,t.jsx)(n.h2,{id:"detailed-walkthrough",children:"Detailed walkthrough"}),"\n",(0,t.jsx)(n.p,{children:"In this guide we will build an application to translate user input from\none language to another."}),"\n",(0,t.jsx)(n.h2,{id:"using-language-models",children:"Using Language Models"}),"\n",(0,t.jsx)(n.p,{children:"First up, let\u2019s learn how to use a language model by itself. LangChain\nsupports many different language models that you can use\ninterchangably - select the one you want to use below!"}),"\n","\n",(0,t.jsx)(l.A,{openaiParams:'model: "gpt-4"'}),"\n",(0,t.jsxs)(n.p,{children:["Let\u2019s first use the model directly. ",(0,t.jsx)(n.code,{children:"ChatModel"}),"s are instances of\nLangChain \u201cRunnables\u201d, which means they expose a standard interface for\ninteracting with them. To just simply call the model, we can pass in a\nlist of messages to the ",(0,t.jsx)(n.code,{children:".invoke"})," method."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { HumanMessage, SystemMessage } from "@langchain/core/messages";\n\nconst messages = [\n  new SystemMessage("Translate the following from English into Italian"),\n  new HumanMessage("hi!"),\n];\n\nawait model.invoke(messages);\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'AIMessage {\n  lc_serializable: true,\n  lc_kwargs: {\n    content: "ciao!",\n    tool_calls: [],\n    invalid_tool_calls: [],\n    additional_kwargs: { function_call: undefined, tool_calls: undefined },\n    response_metadata: {}\n  },\n  lc_namespace: [ "langchain_core", "messages" ],\n  content: "ciao!",\n  name: undefined,\n  additional_kwargs: { function_call: undefined, tool_calls: undefined },\n  response_metadata: {\n    tokenUsage: { completionTokens: 3, promptTokens: 20, totalTokens: 23 },\n    finish_reason: "stop"\n  },\n  tool_calls: [],\n  invalid_tool_calls: []\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If we\u2019ve enable LangSmith, we can see that this run is logged to\nLangSmith, and can see the ",(0,t.jsx)(n.a,{href:"https://smith.langchain.com/public/45f1a650-38fb-41e1-9b61-becc0684f2ce/r",children:"LangSmith\ntrace"})]}),"\n",(0,t.jsx)(n.h2,{id:"outputparsers",children:"OutputParsers"}),"\n",(0,t.jsxs)(n.p,{children:["Notice that the response from the model is an ",(0,t.jsx)(n.code,{children:"AIMessage"}),". This contains\na string response along with other metadata about the response.\nOftentimes we may just want to work with the string response. We can\nparse out just this response by using a simple output parser."]}),"\n",(0,t.jsx)(n.p,{children:"We first import the simple output parser."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { StringOutputParser } from "@langchain/core/output_parsers";\n\nconst parser = new StringOutputParser();\n'})}),"\n",(0,t.jsx)(n.p,{children:"One way to use it is to use it by itself. For example, we could save the\nresult of the language model call and then pass it to the parser."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const result = await model.invoke(messages);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"await parser.invoke(result);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'"ciao!"\n'})}),"\n",(0,t.jsx)(n.p,{children:"More commonly, we can \u201cchain\u201d the model with this output parser. This\nmeans this output parser will get called every time in this chain. This\nchain takes on the input type of the language model (string or list of\nmessage) and returns the output type of the output parser (string)."}),"\n",(0,t.jsxs)(n.p,{children:["We can easily create the chain using the ",(0,t.jsx)(n.code,{children:".pipe"})," method. The ",(0,t.jsx)(n.code,{children:".pipe"}),"\nmethod is used in LangChain to combine two elements together."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const chain = model.pipe(parser);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"await chain.invoke(messages);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'"Ciao!"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If we now look at LangSmith, we can see that the chain has two steps:\nfirst the language model is called, then the result of that is passed to\nthe output parser. We can see the ",(0,t.jsx)(n.a,{href:"https://smith.langchain.com/public/05bec1c1-fc51-4b2c-ab3b-4b63709e4462/r",children:"LangSmith\ntrace"})]}),"\n",(0,t.jsx)(n.h2,{id:"prompt-templates",children:"Prompt Templates"}),"\n",(0,t.jsx)(n.p,{children:"Right now we are passing a list of messages directly into the language\nmodel. Where does this list of messages come from? Usually it\nconstructed from a combination of user input and application logic. This\napplication logic usually takes the raw user input and transforms it\ninto a list of messages ready to pass to the language model. Common\ntransformations include adding a system message or formatting a template\nwith the user input."}),"\n",(0,t.jsx)(n.p,{children:"PromptTemplates are a concept in LangChain designed to assist with this\ntransformation. They take in raw user input and return data (a prompt)\nthat is ready to pass into a language model."}),"\n",(0,t.jsx)(n.p,{children:"Let\u2019s create a PromptTemplate here. It will take in two user variables:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"language"}),": The language to translate text into"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"text"}),": The text to translate"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { ChatPromptTemplate } from "@langchain/core/prompts";\n'})}),"\n",(0,t.jsx)(n.p,{children:"First, let\u2019s create a string that we will format to be the system\nmessage:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const systemTemplate = "Translate the following into {language}:";\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Next, we can create the PromptTemplate. This will be a combination of\nthe ",(0,t.jsx)(n.code,{children:"systemTemplate"})," as well as a simpler template for where the put the\ntext"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const promptTemplate = ChatPromptTemplate.fromMessages([\n  ["system", systemTemplate],\n  ["user", "{text}"],\n]);\n'})}),"\n",(0,t.jsx)(n.p,{children:"The input to this prompt template is a dictionary. We can play around\nwith this prompt template by itself to see what it does by itself"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const result = await promptTemplate.invoke({ language: "italian", text: "hi" });\n\nresult;\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'ChatPromptValue {\n  lc_serializable: true,\n  lc_kwargs: {\n    messages: [\n      SystemMessage {\n        lc_serializable: true,\n        lc_kwargs: {\n          content: "Translate the following into italian:",\n          additional_kwargs: {},\n          response_metadata: {}\n        },\n        lc_namespace: [ "langchain_core", "messages" ],\n        content: "Translate the following into italian:",\n        name: undefined,\n        additional_kwargs: {},\n        response_metadata: {}\n      },\n      HumanMessage {\n        lc_serializable: true,\n        lc_kwargs: { content: "hi", additional_kwargs: {}, response_metadata: {} },\n        lc_namespace: [ "langchain_core", "messages" ],\n        content: "hi",\n        name: undefined,\n        additional_kwargs: {},\n        response_metadata: {}\n      }\n    ]\n  },\n  lc_namespace: [ "langchain_core", "prompt_values" ],\n  messages: [\n    SystemMessage {\n      lc_serializable: true,\n      lc_kwargs: {\n        content: "Translate the following into italian:",\n        additional_kwargs: {},\n        response_metadata: {}\n      },\n      lc_namespace: [ "langchain_core", "messages" ],\n      content: "Translate the following into italian:",\n      name: undefined,\n      additional_kwargs: {},\n      response_metadata: {}\n    },\n    HumanMessage {\n      lc_serializable: true,\n      lc_kwargs: { content: "hi", additional_kwargs: {}, response_metadata: {} },\n      lc_namespace: [ "langchain_core", "messages" ],\n      content: "hi",\n      name: undefined,\n      additional_kwargs: {},\n      response_metadata: {}\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We can see that it returns a ",(0,t.jsx)(n.code,{children:"ChatPromptValue"})," that consists of two\nmessages. If we want to access the messages directly we do:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"result.toChatMessages();\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'[\n  SystemMessage {\n    lc_serializable: true,\n    lc_kwargs: {\n      content: "Translate the following into italian:",\n      additional_kwargs: {},\n      response_metadata: {}\n    },\n    lc_namespace: [ "langchain_core", "messages" ],\n    content: "Translate the following into italian:",\n    name: undefined,\n    additional_kwargs: {},\n    response_metadata: {}\n  },\n  HumanMessage {\n    lc_serializable: true,\n    lc_kwargs: { content: "hi", additional_kwargs: {}, response_metadata: {} },\n    lc_namespace: [ "langchain_core", "messages" ],\n    content: "hi",\n    name: undefined,\n    additional_kwargs: {},\n    response_metadata: {}\n  }\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"We can now combine this with the model and the output parser from above.\nThis will chain all three components together."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const chain = promptTemplate.pipe(model).pipe(parser);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'await chain.invoke({ language: "italian", text: "hi" });\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'"ciao"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If we take a look at the LangSmith trace, we can see all three\ncomponents show up in the ",(0,t.jsx)(n.a,{href:"https://smith.langchain.com/public/cef6edcd-39ed-4c1e-86f7-491a1b611aeb/r",children:"LangSmith\ntrace"})]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"That\u2019s it! In this tutorial we\u2019ve walked through creating our first\nsimple LLM application. We\u2019ve learned how to work with language models,\nhow to parse their outputs, how to create a prompt template, and how to\nget great observability into chains you create with LangSmith."}),"\n",(0,t.jsx)(n.p,{children:"This just scratches the surface of what you will want to learn to become\na proficient AI Engineer. Luckily - we\u2019ve got a lot of other resources!"}),"\n",(0,t.jsxs)(n.p,{children:["For more in-depth tutorials, check out out\n",(0,t.jsx)(n.a,{href:"../../docs/tutorials",children:"Tutorials"})," section."]}),"\n",(0,t.jsxs)(n.p,{children:["If you have specific questions on how to accomplish particular tasks,\nsee our ",(0,t.jsx)(n.a,{href:"../../docs/how_to",children:"How-To Guides"})," section."]}),"\n",(0,t.jsxs)(n.p,{children:["For reading up on the core concepts of LangChain, we\u2019ve got detailed\n",(0,t.jsx)(n.a,{href:"../../docs/concepts",children:"Conceptual Guides"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},63142:(e,n,a)=>{a.d(n,{A:()=>p});a(96540);var t=a(11470),s=a(19365),i=a(21432),l=a(27846),r=a(27293),o=a(74848);function c(e){let{children:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{type:"tip",children:(0,o.jsxs)("p",{children:["See"," ",(0,o.jsx)("a",{href:"/docs/get_started/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})}),(0,o.jsx)(l.A,{children:n})]})}const h={openaiParams:'{\n  model: "gpt-3.5-turbo",\n  temperature: 0\n}',anthropicParams:'{\n  model: "claude-3-sonnet-20240229",\n  temperature: 0\n}',fireworksParams:'{\n  model: "accounts/fireworks/models/firefunction-v1",\n  temperature: 0\n}',mistralParams:'{\n  model: "mistral-large-latest",\n  temperature: 0\n}',groqParams:'{\n  model: "mixtral-8x7b-32768",\n  temperature: 0\n}',vertexParams:'{\n  model: "gemini-1.5-pro",\n  temperature: 0\n}'},d=["openai","anthropic","mistral","groq","vertex"];function p(e){const{customVarName:n,additionalDependencies:a}=e,l=n??"model",r=e.openaiParams??h.openaiParams,p=e.anthropicParams??h.anthropicParams,m=e.fireworksParams??h.fireworksParams,u=e.mistralParams??h.mistralParams,g=e.groqParams??h.groqParams,x=e.vertexParams??h.vertexParams,w=e.providers??["openai","anthropic","fireworks","mistral","groq","vertex"],j={openai:{value:"openai",label:"OpenAI",default:!0,text:`import { ChatOpenAI } from "@langchain/openai";\n\nconst ${l} = new ChatOpenAI(${r});`,envs:"OPENAI_API_KEY=your-api-key",dependencies:"@langchain/openai"},anthropic:{value:"anthropic",label:"Anthropic",default:!1,text:`import { ChatAnthropic } from "@langchain/anthropic";\n\nconst ${l} = new ChatAnthropic(${p});`,envs:"ANTHROPIC_API_KEY=your-api-key",dependencies:"@langchain/anthropic"},fireworks:{value:"fireworks",label:"FireworksAI",default:!1,text:`import { ChatFireworks } from "@langchain/community/chat_models/fireworks";\n\nconst ${l} = new ChatFireworks(${m});`,envs:"FIREWORKS_API_KEY=your-api-key",dependencies:"@langchain/community"},mistral:{value:"mistral",label:"MistralAI",default:!1,text:`import { ChatMistralAI } from "@langchain/mistralai";\n\nconst ${l} = new ChatMistralAI(${u});`,envs:"MISTRAL_API_KEY=your-api-key",dependencies:"@langchain/mistralai"},groq:{value:"groq",label:"Groq",default:!1,text:`import { ChatGroq } from "@langchain/groq";\n\nconst ${l} = new ChatGroq(${g});`,envs:"GROQ_API_KEY=your-api-key",dependencies:"@langchain/groq"},vertex:{value:"vertex",label:"VertexAI",default:!1,text:`import { ChatVertexAI } from "@langchain/google-vertexai";\n\nconst ${l} = new ChatVertexAI(${x});`,envs:"GOOGLE_APPLICATION_CREDENTIALS=credentials.json",dependencies:"@langchain/google-vertexai"}},f=(e.onlyWso?d:w).map((e=>j[e]));return(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Pick your chat model:"}),(0,o.jsx)(t.A,{groupId:"modelTabs",children:f.map((e=>(0,o.jsxs)(s.A,{value:e.value,label:e.label,children:[(0,o.jsx)("h4",{children:"Install dependencies"}),(0,o.jsx)(c,{children:[e.dependencies,a].join(" ")}),(0,o.jsx)("h4",{children:"Add environment variables"}),(0,o.jsx)(i.A,{language:"bash",children:e.envs}),(0,o.jsx)("h4",{children:"Instantiate the model"}),(0,o.jsx)(i.A,{language:"typescript",children:e.text})]},e.value)))})]})}},27846:(e,n,a)=>{a.d(n,{A:()=>r});a(96540);var t=a(11470),s=a(19365),i=a(21432),l=a(74848);function r(e){let{children:n}=e;return(0,l.jsxs)(t.A,{groupId:"npm2yarn",children:[(0,l.jsx)(s.A,{value:"npm",label:"npm",children:(0,l.jsxs)(i.A,{language:"bash",children:["npm i ",n]})}),(0,l.jsx)(s.A,{value:"yarn",label:"yarn",default:!0,children:(0,l.jsxs)(i.A,{language:"bash",children:["yarn add ",n]})}),(0,l.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,l.jsxs)(i.A,{language:"bash",children:["pnpm add ",n]})})]})}}}]);