(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3298],{22922:(e,n,r)=>{"use strict";r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>m,metadata:()=>p,toc:()=>h});var s=r(74848),t=r(28453),o=r(78847),i=r(64428),a=r(81474),l=r.n(a);const m={hide_table_of_contents:!0},c="Zep Retriever",p={id:"integrations/retrievers/zep-retriever",title:"Zep Retriever",description:"Zep is a long-term memory service for AI Assistant apps.",source:"@site/docs/integrations/retrievers/zep-retriever.mdx",sourceDirName:"integrations/retrievers",slug:"/integrations/retrievers/zep-retriever",permalink:"/docs/integrations/retrievers/zep-retriever",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/retrievers/zep-retriever.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"integrations",previous:{title:"Vespa Retriever",permalink:"/docs/integrations/retrievers/vespa-retriever"},next:{title:"Tools",permalink:"/docs/integrations/tools"}},d={},h=[{value:"Setup",id:"setup",level:2},...o.toc,{value:"Usage",id:"usage",level:2}];function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"zep-retriever",children:"Zep Retriever"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.getzep.com",children:"Zep"})," is a long-term memory service for AI Assistant apps.\nWith Zep, you can provide AI assistants with the ability to recall past conversations, no matter how distant,\nwhile also reducing hallucinations, latency, and cost."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Interested in Zep Cloud? See ",(0,s.jsx)(n.a,{href:"https://help.getzep.com/sdks",children:"Zep Cloud Installation Guide"}),", ",(0,s.jsx)(n.a,{href:"https://help.getzep.com/langchain/examples/rag-message-history-example",children:"Zep Cloud Retriever Example"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This example shows how to use the Zep Retriever in a retrieval chain to retrieve documents from Zep memory store."}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n","\n",(0,s.jsx)(o.default,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm i @getzep/zep-js @langchain/community\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,s.jsx)(i.A,{language:"typescript",children:l()})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},81474:e=>{e.exports={content:'import { ZepRetriever } from "@langchain/community/retrievers/zep";\nimport { ZepMemory } from "@langchain/community/memory/zep";\nimport { Memory as MemoryModel, Message } from "@getzep/zep-js";\nimport { randomUUID } from "crypto";\n\nfunction sleep(ms: number) {\n  // eslint-disable-next-line no-promise-executor-return\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\n\nexport const run = async () => {\n  const zepConfig = {\n    url: process.env.ZEP_URL || "http://localhost:8000",\n    sessionId: `session_${randomUUID()}`,\n  };\n\n  console.log(`Zep Config: ${JSON.stringify(zepConfig)}`);\n\n  const memory = new ZepMemory({\n    baseURL: zepConfig.url,\n    sessionId: zepConfig.sessionId,\n  });\n\n  // Generate chat messages about traveling to France\n  const chatMessages = [\n    {\n      role: "AI",\n      message: "Bonjour! How can I assist you with your travel plans today?",\n    },\n    { role: "User", message: "I\'m planning a trip to France." },\n    {\n      role: "AI",\n      message: "That sounds exciting! What cities are you planning to visit?",\n    },\n    { role: "User", message: "I\'m thinking of visiting Paris and Nice." },\n    {\n      role: "AI",\n      message: "Great choices! Are you interested in any specific activities?",\n    },\n    { role: "User", message: "I would love to visit some vineyards." },\n    {\n      role: "AI",\n      message:\n        "France has some of the best vineyards in the world. I can help you find some.",\n    },\n    { role: "User", message: "That would be great!" },\n    { role: "AI", message: "Do you prefer red or white wine?" },\n    { role: "User", message: "I prefer red wine." },\n    {\n      role: "AI",\n      message:\n        "Perfect! I\'ll find some vineyards that are known for their red wines.",\n    },\n    { role: "User", message: "Thank you, that would be very helpful." },\n    {\n      role: "AI",\n      message:\n        "You\'re welcome! I\'ll also look up some French wine etiquette for you.",\n    },\n    {\n      role: "User",\n      message: "That sounds great. I can\'t wait to start my trip!",\n    },\n    {\n      role: "AI",\n      message:\n        "I\'m sure you\'ll have a fantastic time. Do you have any other questions about your trip?",\n    },\n    { role: "User", message: "Not at the moment, thank you for your help!" },\n  ];\n\n  const zepClient = await memory.zepClientPromise;\n  if (!zepClient) {\n    throw new Error("ZepClient is not initialized");\n  }\n\n  // Add chat messages to memory\n  for (const chatMessage of chatMessages) {\n    let m: MemoryModel;\n    if (chatMessage.role === "AI") {\n      m = new MemoryModel({\n        messages: [new Message({ role: "ai", content: chatMessage.message })],\n      });\n    } else {\n      m = new MemoryModel({\n        messages: [\n          new Message({ role: "human", content: chatMessage.message }),\n        ],\n      });\n    }\n\n    await zepClient.memory.addMemory(zepConfig.sessionId, m);\n  }\n\n  // Wait for messages to be summarized, enriched, embedded and indexed.\n  await sleep(10000);\n\n  // Simple similarity search\n  const query = "Can I drive red cars in France?";\n  const retriever = new ZepRetriever({ ...zepConfig, topK: 3 });\n  const docs = await retriever.invoke(query);\n  console.log("Simple similarity search");\n  console.log(JSON.stringify(docs, null, 2));\n\n  // mmr reranking search\n  const mmrRetriever = new ZepRetriever({\n    ...zepConfig,\n    topK: 3,\n    searchType: "mmr",\n    mmrLambda: 0.5,\n  });\n  const mmrDocs = await mmrRetriever.invoke(query);\n  console.log("MMR reranking search");\n  console.log(JSON.stringify(mmrDocs, null, 2));\n\n  // summary search with mmr reranking\n  const mmrSummaryRetriever = new ZepRetriever({\n    ...zepConfig,\n    topK: 3,\n    searchScope: "summary",\n    searchType: "mmr",\n    mmrLambda: 0.5,\n  });\n  const mmrSummaryDocs = await mmrSummaryRetriever.invoke(query);\n  console.log("Summary search with MMR reranking");\n  console.log(JSON.stringify(mmrSummaryDocs, null, 2));\n\n  // Filtered search\n  const filteredRetriever = new ZepRetriever({\n    ...zepConfig,\n    topK: 3,\n    filter: {\n      where: { jsonpath: \'$.system.entities[*] ? (@.Label == "GPE")\' },\n    },\n  });\n  const filteredDocs = await filteredRetriever.invoke(query);\n  console.log("Filtered search");\n  console.log(JSON.stringify(filteredDocs, null, 2));\n};\n',imports:[{local:"ZepRetriever",imported:"ZepRetriever",source:"@langchain/community/retrievers/zep"},{local:"ZepMemory",imported:"ZepMemory",source:"@langchain/community/memory/zep"}]}}}]);