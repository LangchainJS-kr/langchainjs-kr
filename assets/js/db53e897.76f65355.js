(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5170],{66677:(a,n,e)=>{"use strict";e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var l=e(74848),o=e(28453),t=e(78847),s=e(64428),i=e(56512),r=e.n(i),m=e(83621),c=e.n(m);const d={},h="Ollama",u={id:"integrations/llms/ollama",title:"Ollama",description:"Ollama allows you to run open-source large language models, such as Llama 2, locally.",source:"@site/docs/integrations/llms/ollama.mdx",sourceDirName:"integrations/llms",slug:"/integrations/llms/ollama",permalink:"/docs/integrations/llms/ollama",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/llms/ollama.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"NIBittensor",permalink:"/docs/integrations/llms/ni_bittensor"},next:{title:"OpenAI",permalink:"/docs/integrations/llms/openai"}},p={},g=[{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},...t.toc,{value:"Multimodal models",id:"multimodal-models",level:2}];function f(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...a.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"ollama",children:"Ollama"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://ollama.ai/",children:"Ollama"})," allows you to run open-source large language models, such as Llama 2, locally."]}),"\n",(0,l.jsx)(n.p,{children:"Ollama bundles model weights, configuration, and data into a single package, defined by a Modelfile. It optimizes setup and configuration details, including GPU usage."}),"\n",(0,l.jsxs)(n.p,{children:["This example goes over how to use LangChain to interact with an Ollama-run Llama 2 7b instance.\nFor a complete list of supported models and model variants, see the ",(0,l.jsx)(n.a,{href:"https://github.com/jmorganca/ollama#model-library",children:"Ollama model library"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,l.jsxs)(n.p,{children:["Follow ",(0,l.jsx)(n.a,{href:"https://github.com/jmorganca/ollama",children:"these instructions"})," to set up and run a local Ollama instance."]}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,l.jsx)(t.default,{}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community\n"})}),"\n","\n",(0,l.jsx)(s.A,{language:"typescript",children:r()}),"\n",(0,l.jsx)(n.h2,{id:"multimodal-models",children:"Multimodal models"}),"\n",(0,l.jsxs)(n.p,{children:["Ollama supports open source multimodal models like ",(0,l.jsx)(n.a,{href:"https://ollama.ai/library/llava",children:"LLaVA"})," in versions 0.1.15 and up.\nYou can bind base64 encoded image data to multimodal-capable models to use as context like this:"]}),"\n","\n",(0,l.jsx)(s.A,{language:"typescript",children:c()})]})}function b(a={}){const{wrapper:n}={...(0,o.R)(),...a.components};return n?(0,l.jsx)(n,{...a,children:(0,l.jsx)(f,{...a})}):f(a)}},56512:a=>{a.exports={content:'import { Ollama } from "@langchain/community/llms/ollama";\n\nconst ollama = new Ollama({\n  baseUrl: "http://localhost:11434", // Default value\n  model: "llama2", // Default value\n});\n\nconst stream = await ollama.stream(\n  `Translate "I love programming" into German.`\n);\n\nconst chunks = [];\nfor await (const chunk of stream) {\n  chunks.push(chunk);\n}\n\nconsole.log(chunks.join(""));\n\n/*\n  I\'m glad to help! "I love programming" can be translated to German as "Ich liebe Programmieren."\n\n  It\'s important to note that the translation of "I love" in German is "ich liebe," which is a more formal and polite way of saying "I love." In informal situations, people might use "mag ich" or "m\xf6chte ich" instead.\n\n  Additionally, the word "Programmieren" is the correct term for "programming" in German. It\'s a combination of two words: "Programm" and "-ieren," which means "to do something." So, the full translation of "I love programming" would be "Ich liebe Programmieren.\n*/\n',imports:[{local:"Ollama",imported:"Ollama",source:"@langchain/community/llms/ollama"}]}},83621:a=>{a.exports={content:'import { Ollama } from "@langchain/community/llms/ollama";\nimport * as fs from "node:fs/promises";\n\nconst imageData = await fs.readFile("./hotdog.jpg");\nconst model = new Ollama({\n  model: "llava",\n  baseUrl: "http://127.0.0.1:11434",\n}).bind({\n  images: [imageData.toString("base64")],\n});\nconst res = await model.invoke("What\'s in this image?");\nconsole.log({ res });\n\n/*\n  {\n    res: \' The image displays a hot dog sitting on top of a bun, which is placed directly on the table. The hot dog has a striped pattern on it and looks ready to be eaten.\'\n  }\n*/\n',imports:[{local:"Ollama",imported:"Ollama",source:"@langchain/community/llms/ollama"}]}}}]);