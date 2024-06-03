"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6639],{18642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(74848),i=t(28453),s=t(78847);const a={},r="OpenAPI Agent Toolkit",l={id:"integrations/toolkits/openapi",title:"OpenAPI Agent Toolkit",description:"This example shows how to load and use an agent with a OpenAPI toolkit.",source:"@site/docs/integrations/toolkits/openapi.mdx",sourceDirName:"integrations/toolkits",slug:"/integrations/toolkits/openapi",permalink:"/docs/integrations/toolkits/openapi",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/toolkits/openapi.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"JSON Agent Toolkit",permalink:"/docs/integrations/toolkits/json"},next:{title:"AWS Step Functions Toolkit",permalink:"/docs/integrations/toolkits/sfn_agent"}},c={},p=[...s.toc];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"openapi-agent-toolkit",children:"OpenAPI Agent Toolkit"}),"\n",(0,o.jsx)(n.p,{children:"This example shows how to load and use an agent with a OpenAPI toolkit."}),"\n","\n",(0,o.jsx)(s.default,{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/openai\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:'import * as fs from "fs";\nimport * as yaml from "js-yaml";\nimport { OpenAI } from "@langchain/openai";\nimport { JsonSpec, JsonObject } from "langchain/tools";\nimport { createOpenApiAgent, OpenApiToolkit } from "langchain/agents";\n\nexport const run = async () => {\n  let data: JsonObject;\n  try {\n    const yamlFile = fs.readFileSync("openai_openapi.yaml", "utf8");\n    data = yaml.load(yamlFile) as JsonObject;\n    if (!data) {\n      throw new Error("Failed to load OpenAPI spec");\n    }\n  } catch (e) {\n    console.error(e);\n    return;\n  }\n\n  const headers = {\n    "Content-Type": "application/json",\n    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,\n  };\n  const model = new OpenAI({ temperature: 0 });\n  const toolkit = new OpenApiToolkit(new JsonSpec(data), model, headers);\n  const executor = createOpenApiAgent(model, toolkit);\n\n  const input = `Make a POST request to openai /completions. The prompt should be \'tell me a joke.\'`;\n  console.log(`Executing with input "${input}"...`);\n\n  const result = await executor.invoke({ input });\n  console.log(`Got output ${result.output}`);\n\n  console.log(\n    `Got intermediate steps ${JSON.stringify(\n      result.intermediateSteps,\n      null,\n      2\n    )}`\n  );\n};\n'})}),"\n",(0,o.jsx)(n.h1,{id:"disclaimer-\ufe0f",children:"Disclaimer \u26a0\ufe0f"}),"\n",(0,o.jsx)(n.p,{children:"This agent can make requests to external APIs. Use with caution, especially when granting access to users."}),"\n",(0,o.jsx)(n.p,{children:"Be aware that this agent could theoretically send requests with provided credentials or other sensitive data to unverified or potentially malicious URLs --although it should never in theory."}),"\n",(0,o.jsx)(n.p,{children:"Consider adding limitations to what actions can be performed via the agent, what APIs it can access, what headers can be passed, and more."}),"\n",(0,o.jsx)(n.p,{children:"In addition, consider implementing measures to validate URLs before sending requests, and to securely handle and protect sensitive data such as credentials."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);