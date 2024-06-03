"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8536],{48184:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var t=a(74848),s=a(28453),r=a(63142);const i={sidebar_class_name:"hidden",sidebar_position:3,title:"How to use output parsers to parse an LLM response into structured format"},o=void 0,c={id:"how_to/output_parser_structured",title:"How to use output parsers to parse an LLM response into structured format",description:"This guide assumes familiarity with the following concepts:",source:"@site/docs/how_to/output_parser_structured.mdx",sourceDirName:"how_to",slug:"/how_to/output_parser_structured",permalink:"/docs/how_to/output_parser_structured",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/output_parser_structured.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_class_name:"hidden",sidebar_position:3,title:"How to use output parsers to parse an LLM response into structured format"},sidebar:"tutorialSidebar",previous:{title:"How to use few shot examples",permalink:"/docs/how_to/few_shot_examples"},next:{title:"How to return structured data from a model",permalink:"/docs/how_to/structured_output"}},h={},p=[{value:"Get started",id:"get-started",level:2},{value:"Validation",id:"validation",level:2},{value:"Streaming",id:"streaming",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{title:"Prerequisites",type:"info",children:[(0,t.jsx)(n.p,{children:"This guide assumes familiarity with the following concepts:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../../docs/concepts#output-parsers",children:"Output parsers"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../../docs/concepts#chat-models",children:"Chat models"})}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["Language models output text. But there are times where you want to get\nmore structured information than just text back. While some model\nproviders support ",(0,t.jsx)(n.a,{href:"../../docs/how_to/structured_output",children:"built-in ways to return structured\noutput"}),", not all do. For these\nproviders, you must use prompting to encourage the model to return\nstructured data in the desired format."]}),"\n",(0,t.jsxs)(n.p,{children:["LangChain has ",(0,t.jsx)(n.a,{href:"../../docs/concepts#output-parsers",children:"output parsers"})," which\ncan help parse model outputs into usable objects. We\u2019ll go over a few\nexamples below."]}),"\n",(0,t.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,t.jsxs)(n.p,{children:["The primary type of output parser for working with structured data in\nmodel responses is the\n",(0,t.jsx)(n.a,{href:"https://api.js.langchain.com/classes/langchain_core_output_parsers.StructuredOutputParser.html",children:(0,t.jsx)(n.code,{children:"StructuredOutputParser"})}),".\nIn the below example, we define a schema for the type of output we\nexpect from the model using ",(0,t.jsx)(n.a,{href:"https://zod.dev",children:(0,t.jsx)(n.code,{children:"zod"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"First, let\u2019s see the default formatting instructions we\u2019ll plug into the\nprompt:"}),"\n","\n",(0,t.jsx)(r.A,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { z } from "zod";\nimport { RunnableSequence } from "@langchain/core/runnables";\nimport { StructuredOutputParser } from "@langchain/core/output_parsers";\nimport { ChatPromptTemplate } from "@langchain/core/prompts";\n\nconst zodSchema = z.object({\n  answer: z.string().describe("answer to the user\'s question"),\n  source: z\n    .string()\n    .describe(\n      "source used to answer the user\'s question, should be a website."\n    ),\n});\n\nconst parser = StructuredOutputParser.fromZodSchema(zodSchema);\n\nconst chain = RunnableSequence.from([\n  ChatPromptTemplate.fromTemplate(\n    "Answer the users question as best as possible.\\n{format_instructions}\\n{question}"\n  ),\n  model,\n  parser,\n]);\n\nconsole.log(parser.getFormatInstructions());\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'You must format your output as a JSON value that adheres to a given "JSON Schema" instance.\n\n"JSON Schema" is a declarative language that allows you to annotate and validate JSON documents.\n\nFor example, the example "JSON Schema" instance {{"properties": {{"foo": {{"description": "a list of test words", "type": "array", "items": {{"type": "string"}}}}}}, "required": ["foo"]}}}}\nwould match an object with one required property, "foo". The "type" property specifies "foo" must be an "array", and the "description" property semantically describes it as "a list of test words". The items within "foo" must be strings.\nThus, the object {{"foo": ["bar", "baz"]}} is a well-formatted instance of this example "JSON Schema". The object {{"properties": {{"foo": ["bar", "baz"]}}}} is not well-formatted.\n\nYour output will be parsed and type-checked according to the provided schema instance, so make sure all fields in your output match the schema exactly and there are no trailing commas!\n\nHere is the JSON Schema instance your output must adhere to. Include the enclosing markdown codeblock:\n```json\n{"type":"object","properties":{"answer":{"type":"string","description":"answer to the user\'s question"},"source":{"type":"string","description":"source used to answer the user\'s question, should be a website."}},"required":["answer","source"],"additionalProperties":false,"$schema":"http://json-schema.org/draft-07/schema#"}\n```\n'})}),"\n",(0,t.jsx)(n.p,{children:"Next, let\u2019s invoke the chain:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const response = await chain.invoke({\n  question: "What is the capital of France?",\n  format_instructions: parser.getFormatInstructions(),\n});\n\nconsole.log(response);\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'{\n  answer: "The capital of France is Paris.",\n  source: "https://en.wikipedia.org/wiki/Paris"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Output parsers implement the ",(0,t.jsx)(n.a,{href:"../../docs/how_to/#langchain-expression-language-lcel",children:"Runnable\ninterface"}),", the\nbasic building block of the ",(0,t.jsx)(n.a,{href:"../../docs/how_to/#langchain-expression-language-lcel",children:"LangChain Expression Language\n(LCEL)"}),". This\nmeans they support ",(0,t.jsx)(n.code,{children:"invoke"}),", ",(0,t.jsx)(n.code,{children:"stream"}),", ",(0,t.jsx)(n.code,{children:"batch"}),", ",(0,t.jsx)(n.code,{children:"streamLog"})," calls."]}),"\n",(0,t.jsx)(n.h2,{id:"validation",children:"Validation"}),"\n",(0,t.jsxs)(n.p,{children:["One feature of the ",(0,t.jsx)(n.code,{children:"StructuredOutputParser"})," is that it supports stricter\nZod validations. For example, if you pass a simulated model output that\ndoes not conform to the schema, we get a detailed type error:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { AIMessage } from "@langchain/core/messages";\n\nawait parser.invoke(new AIMessage(`{"badfield": "foo"}`));\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'Error: Failed to parse. Text: "{"badfield": "foo"}". Error: [\n  {\n    "code": "invalid_type",\n    "expected": "string",\n    "received": "undefined",\n    "path": [\n      "answer"\n    ],\n    "message": "Required"\n  },\n  {\n    "code": "invalid_type",\n    "expected": "string",\n    "received": "undefined",\n    "path": [\n      "source"\n    ],\n    "message": "Required"\n  }\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"Compared to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'await parser.invoke(\n  new AIMessage(`{"answer": "Paris", "source": "I made it up"}`)\n);\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'{ answer: "Paris", source: "I made it up" }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["More advanced Zod validations are supported as well. To learn more,\ncheck out the ",(0,t.jsx)(n.a,{href:"https://zod.dev",children:"Zod documentation"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"streaming",children:"Streaming"}),"\n",(0,t.jsxs)(n.p,{children:["While all parsers are runnables and support the streaming interface,\nonly certain parsers can stream through partially parsed objects, since\nthis is highly dependent on the output type. The\n",(0,t.jsx)(n.code,{children:"StructuredOutputParser"})," does not support partial streaming because it\nvalidates the output at each step. If you try to stream using a chain\nwith this output parser, the chain will simply yield the fully parsed\noutput:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const stream = await chain.stream({\n  question: "What is the capital of France?",\n  format_instructions: parser.getFormatInstructions(),\n});\n\nfor await (const s of stream) {\n  console.log(s);\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'{\n  answer: "The capital of France is Paris.",\n  source: "https://en.wikipedia.org/wiki/Paris"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The simpler\n",(0,t.jsx)(n.a,{href:"https://api.js.langchain.com/classes/langchain_core_output_parsers.JsonOutputParser.html",children:(0,t.jsx)(n.code,{children:"JsonOutputParser"})}),",\nhowever, supports streaming through partial outputs:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { JsonOutputParser } from "@langchain/core/output_parsers";\n\nconst template = `Return a JSON object with a single key named "answer" that answers the following question: {question}.\nDo not wrap the JSON output in markdown blocks.`;\n\nconst jsonPrompt = ChatPromptTemplate.fromTemplate(template);\nconst jsonParser = new JsonOutputParser();\nconst jsonChain = jsonPrompt.pipe(model).pipe(jsonParser);\n\nconst stream = await jsonChain.stream({\n  question: "Who invented the microscope?",\n});\n\nfor await (const s of stream) {\n  console.log(s);\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'{}\n{ answer: "" }\n{ answer: "The" }\n{ answer: "The invention" }\n{ answer: "The invention of" }\n{ answer: "The invention of the" }\n{ answer: "The invention of the microscope" }\n{ answer: "The invention of the microscope is" }\n{ answer: "The invention of the microscope is attributed" }\n{ answer: "The invention of the microscope is attributed to" }\n{ answer: "The invention of the microscope is attributed to Hans" }\n{ answer: "The invention of the microscope is attributed to Hans L" }\n{\n  answer: "The invention of the microscope is attributed to Hans Lippers"\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey"\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey,"\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zach"\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias"\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Jans"\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen"\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen,"\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and"\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Anton"\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie"\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 4 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 8 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 12 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 13 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 18 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 20 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 26 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 29 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 33 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 38 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 43 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 48 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 51 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 52 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 57 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 63 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 73 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 80 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 81 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 85 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 94 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 99 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 108 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 112 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 118 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 127 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 138 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 145 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 149 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 150 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 151 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 157 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 159 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 163 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 167 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 171 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 175 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 176 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 181 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 186 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 190 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 202 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 203 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 209 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 214 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 226 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 239 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 242 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 246 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 253 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 257 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 262 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 265 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 268 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 273 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 288 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 300 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 303 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 311 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 316 more characters\n}\n{\n  answer: "The invention of the microscope is attributed to Hans Lippershey, Zacharias Janssen, and Antonie van"... 317 more characters\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsx)(n.p,{children:"You\u2019ve learned about using output parsers to parse structured outputs\nfrom prompted model outputs."}),"\n",(0,t.jsxs)(n.p,{children:["Next, check out the ",(0,t.jsx)(n.a,{href:"../../docs/how_to/tool_calling",children:"guide on tool\ncalling"}),", a more built-in way of\nobtaining structured output that some model providers support, or read\nmore about output parsers for other types of structured data like\n",(0,t.jsx)(n.a,{href:"../../docs/how_to/output_parser_xml",children:"XML"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},63142:(e,n,a)=>{a.d(n,{A:()=>u});a(96540);var t=a(11470),s=a(19365),r=a(21432),i=a(27846),o=a(27293),c=a(74848);function h(e){let{children:n}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.A,{type:"tip",children:(0,c.jsxs)("p",{children:["See"," ",(0,c.jsx)("a",{href:"/docs/get_started/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})}),(0,c.jsx)(i.A,{children:n})]})}const p={openaiParams:'{\n  model: "gpt-3.5-turbo",\n  temperature: 0\n}',anthropicParams:'{\n  model: "claude-3-sonnet-20240229",\n  temperature: 0\n}',fireworksParams:'{\n  model: "accounts/fireworks/models/firefunction-v1",\n  temperature: 0\n}',mistralParams:'{\n  model: "mistral-large-latest",\n  temperature: 0\n}',groqParams:'{\n  model: "mixtral-8x7b-32768",\n  temperature: 0\n}',vertexParams:'{\n  model: "gemini-1.5-pro",\n  temperature: 0\n}'},d=["openai","anthropic","mistral","groq","vertex"];function u(e){const{customVarName:n,additionalDependencies:a}=e,i=n??"model",o=e.openaiParams??p.openaiParams,u=e.anthropicParams??p.anthropicParams,l=e.fireworksParams??p.fireworksParams,m=e.mistralParams??p.mistralParams,v=e.groqParams??p.groqParams,f=e.vertexParams??p.vertexParams,w=e.providers??["openai","anthropic","fireworks","mistral","groq","vertex"],g={openai:{value:"openai",label:"OpenAI",default:!0,text:`import { ChatOpenAI } from "@langchain/openai";\n\nconst ${i} = new ChatOpenAI(${o});`,envs:"OPENAI_API_KEY=your-api-key",dependencies:"@langchain/openai"},anthropic:{value:"anthropic",label:"Anthropic",default:!1,text:`import { ChatAnthropic } from "@langchain/anthropic";\n\nconst ${i} = new ChatAnthropic(${u});`,envs:"ANTHROPIC_API_KEY=your-api-key",dependencies:"@langchain/anthropic"},fireworks:{value:"fireworks",label:"FireworksAI",default:!1,text:`import { ChatFireworks } from "@langchain/community/chat_models/fireworks";\n\nconst ${i} = new ChatFireworks(${l});`,envs:"FIREWORKS_API_KEY=your-api-key",dependencies:"@langchain/community"},mistral:{value:"mistral",label:"MistralAI",default:!1,text:`import { ChatMistralAI } from "@langchain/mistralai";\n\nconst ${i} = new ChatMistralAI(${m});`,envs:"MISTRAL_API_KEY=your-api-key",dependencies:"@langchain/mistralai"},groq:{value:"groq",label:"Groq",default:!1,text:`import { ChatGroq } from "@langchain/groq";\n\nconst ${i} = new ChatGroq(${v});`,envs:"GROQ_API_KEY=your-api-key",dependencies:"@langchain/groq"},vertex:{value:"vertex",label:"VertexAI",default:!1,text:`import { ChatVertexAI } from "@langchain/google-vertexai";\n\nconst ${i} = new ChatVertexAI(${f});`,envs:"GOOGLE_APPLICATION_CREDENTIALS=credentials.json",dependencies:"@langchain/google-vertexai"}},b=(e.onlyWso?d:w).map((e=>g[e]));return(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{children:"Pick your chat model:"}),(0,c.jsx)(t.A,{groupId:"modelTabs",children:b.map((e=>(0,c.jsxs)(s.A,{value:e.value,label:e.label,children:[(0,c.jsx)("h4",{children:"Install dependencies"}),(0,c.jsx)(h,{children:[e.dependencies,a].join(" ")}),(0,c.jsx)("h4",{children:"Add environment variables"}),(0,c.jsx)(r.A,{language:"bash",children:e.envs}),(0,c.jsx)("h4",{children:"Instantiate the model"}),(0,c.jsx)(r.A,{language:"typescript",children:e.text})]},e.value)))})]})}},27846:(e,n,a)=>{a.d(n,{A:()=>o});a(96540);var t=a(11470),s=a(19365),r=a(21432),i=a(74848);function o(e){let{children:n}=e;return(0,i.jsxs)(t.A,{groupId:"npm2yarn",children:[(0,i.jsx)(s.A,{value:"npm",label:"npm",children:(0,i.jsxs)(r.A,{language:"bash",children:["npm i ",n]})}),(0,i.jsx)(s.A,{value:"yarn",label:"yarn",default:!0,children:(0,i.jsxs)(r.A,{language:"bash",children:["yarn add ",n]})}),(0,i.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,i.jsxs)(r.A,{language:"bash",children:["pnpm add ",n]})})]})}}}]);