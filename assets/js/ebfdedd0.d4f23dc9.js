"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7107],{997:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=s(74848),r=s(28453);const i={sidebar_class_name:"hidden"},a="Stores",o={id:"integrations/stores/index",title:"Stores",description:"Storing data in key value format is quick and efficient, and can be a powerful tool for LLM applications. The BaseStore class provides a simple interface for getting, setting, deleting and iterating over lists of key value pairs.",source:"@site/docs/integrations/stores/index.mdx",sourceDirName:"integrations/stores",slug:"/integrations/stores/",permalink:"/docs/integrations/stores/",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/stores/index.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden"},sidebar:"integrations",previous:{title:"VectorStore Agent Toolkit",permalink:"/docs/integrations/toolkits/vectorstore"},next:{title:"Cassandra KV",permalink:"/docs/integrations/stores/cassandra_storage"}},c={},d=[{value:"Use Cases",id:"use-cases",level:2},{value:"Chat history",id:"chat-history",level:3},{value:"Caching",id:"caching",level:3},{value:"Reading Data",id:"reading-data",level:2},{value:"In Memory",id:"in-memory",level:3},{value:"File System",id:"file-system",level:3},{value:"Writing Data",id:"writing-data",level:2},{value:"In Memory",id:"in-memory-1",level:3},{value:"File System",id:"file-system-1",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"stores",children:"Stores"}),"\n",(0,t.jsxs)(n.p,{children:["Storing data in key value format is quick and efficient, and can be a powerful tool for LLM applications. The ",(0,t.jsx)(n.code,{children:"BaseStore"})," class provides a simple interface for getting, setting, deleting and iterating over lists of key value pairs."]}),"\n",(0,t.jsxs)(n.p,{children:["The public API of ",(0,t.jsx)(n.code,{children:"BaseStore"})," in LangChain JS offers four main methods:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"abstract mget(keys: K[]): Promise<(V | undefined)[]>;\n\nabstract mset(keyValuePairs: [K, V][]): Promise<void>;\n\nabstract mdelete(keys: K[]): Promise<void>;\n\nabstract yieldKeys(prefix?: string): AsyncGenerator<K | string>;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"m"})," prefix stands for multiple, and indicates that these methods can be used to get, set and delete multiple key value pairs at once.\nThe ",(0,t.jsx)(n.code,{children:"yieldKeys"})," method is a generator function that can be used to iterate over all keys in the store, or all keys with a given prefix."]}),"\n",(0,t.jsx)(n.p,{children:"It's that simple!"}),"\n",(0,t.jsxs)(n.p,{children:["So far LangChain.js has two base integrations for ",(0,t.jsx)(n.code,{children:"BaseStore"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/integrations/stores/in_memory",children:(0,t.jsx)(n.code,{children:"InMemoryStore"})})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/integrations/stores/file_system",children:(0,t.jsx)(n.code,{children:"LocalFileStore"})})," (Node.js only)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,t.jsx)(n.h3,{id:"chat-history",children:"Chat history"}),"\n",(0,t.jsxs)(n.p,{children:["If you're building web apps with chat, the ",(0,t.jsx)(n.code,{children:"BaseStore"})," family of integrations can come in very handy for storing and retrieving chat history."]}),"\n",(0,t.jsx)(n.h3,{id:"caching",children:"Caching"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"BaseStore"})," family can be a useful alternative to our other caching integrations.\nFor example the ",(0,t.jsx)(n.a,{href:"/docs/integrations/stores/file_system",children:(0,t.jsx)(n.code,{children:"LocalFileStore"})})," allows for persisting data through the file system. It also is incredibly fast, so your users will be able to access cached data in a snap."]}),"\n",(0,t.jsx)(n.p,{children:"See the individual sections for deeper dives on specific storage providers."}),"\n",(0,t.jsx)(n.h2,{id:"reading-data",children:"Reading Data"}),"\n",(0,t.jsx)(n.h3,{id:"in-memory",children:"In Memory"}),"\n",(0,t.jsxs)(n.p,{children:["Reading data is simple with KV stores. Below is an example using the ",(0,t.jsx)(n.a,{href:"/docs/integrations/stores/in_memory",children:(0,t.jsx)(n.code,{children:"InMemoryStore"})})," and the ",(0,t.jsx)(n.code,{children:".mget()"})," method.\nWe'll also set our generic value type to ",(0,t.jsx)(n.code,{children:"string"})," so we can have type safety setting our strings."]}),"\n",(0,t.jsxs)(n.p,{children:["Import the ",(0,t.jsx)(n.a,{href:"/docs/integrations/stores/in_memory",children:(0,t.jsx)(n.code,{children:"InMemoryStore"})})," class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { InMemoryStore } from "langchain/storage/in_memory";\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Instantiate a new instance and pass ",(0,t.jsx)(n.code,{children:"string"})," as our generic for the value type."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const store = new InMemoryStore<string>();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next we can call ",(0,t.jsx)(n.code,{children:".mset()"})," to write multiple values at once."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const data: [string, string][] = [\n  ["key1", "value1"],\n  ["key2", "value2"],\n];\n\nawait store.mset(data);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Finally, call the ",(0,t.jsx)(n.code,{children:".mget()"})," method to retrieve the values from our store."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const data = await store.mget(["key1", "key2"]);\n\nconsole.log(data);\n/**\n * ["value1", "value2"]\n */\n'})}),"\n",(0,t.jsx)(n.h3,{id:"file-system",children:"File System"}),"\n",(0,t.jsxs)(n.p,{children:["When using the file system integration we need to instantiate via the ",(0,t.jsx)(n.code,{children:"fromPath"})," method. This is required because it needs to preform checks to ensure the directory exists and is readable/writable.\nYou also must use a directory when using ",(0,t.jsx)(n.a,{href:"/docs/integrations/stores/file_system",children:(0,t.jsx)(n.code,{children:"LocalFileStore"})})," because each entry is stored as a unique file in the directory."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { LocalFileStore } from "langchain/storage/file_system";\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const pathToStore = "./my-store-directory";\nconst store = await LocalFileStore.fromPath(pathToStore);\n'})}),"\n",(0,t.jsx)(n.p,{children:"To do this we can define an encoder for initially setting our data, and a decoder for when we retrieve data."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const encoder = new TextEncoder();\nconst decoder = new TextDecoder();\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const data: [string, Uint8Array][] = [\n  ["key1", encoder.encode(new Date().toDateString())],\n  ["key2", encoder.encode(new Date().toDateString())],\n];\n\nawait store.mset(data);\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const data = await store.mget([\"key1\", \"key2\"]);\n\nconsole.log(data.map((v) => decoder.decode(v)));\n/**\n * [ 'Wed Jan 03 2024', 'Wed Jan 03 2024' ]\n */\n"})}),"\n",(0,t.jsx)(n.h2,{id:"writing-data",children:"Writing Data"}),"\n",(0,t.jsx)(n.h3,{id:"in-memory-1",children:"In Memory"}),"\n",(0,t.jsxs)(n.p,{children:["Writing data is simple with KV stores. Below is an example using the ",(0,t.jsx)(n.a,{href:"/docs/integrations/stores/in_memory",children:(0,t.jsx)(n.code,{children:"InMemoryStore"})})," and the ",(0,t.jsx)(n.code,{children:".mset()"})," method.\nWe'll also set our generic value type to ",(0,t.jsx)(n.code,{children:"Date"})," so we can have type safety setting our dates."]}),"\n",(0,t.jsxs)(n.p,{children:["Import the ",(0,t.jsx)(n.a,{href:"/docs/integrations/stores/in_memory",children:(0,t.jsx)(n.code,{children:"InMemoryStore"})})," class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { InMemoryStore } from "langchain/storage/in_memory";\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Instantiate a new instance and pass ",(0,t.jsx)(n.code,{children:"Date"})," as our generic for the value type."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const store = new InMemoryStore<Date>();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Finally we can call ",(0,t.jsx)(n.code,{children:".mset()"})," to write multiple values at once."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const data: [string, Date][] = [\n  ["date1", new Date()],\n  ["date2", new Date()],\n];\n\nawait store.mset(data);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"file-system-1",children:"File System"}),"\n",(0,t.jsxs)(n.p,{children:["When using the file system integration we need to instantiate via the ",(0,t.jsx)(n.code,{children:"fromPath"})," method. This is required because it needs to preform checks to ensure the directory exists and is readable/writable.\nYou also must use a directory when using ",(0,t.jsx)(n.a,{href:"/docs/integrations/stores/file_system",children:(0,t.jsx)(n.code,{children:"LocalFileStore"})})," because each entry is stored as a unique file in the directory."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { LocalFileStore } from "langchain/storage/file_system";\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const pathToStore = "./my-store-directory";\nconst store = await LocalFileStore.fromPath(pathToStore);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When defining our data we must convert the values to ",(0,t.jsx)(n.code,{children:"Uint8Array"})," because the file system integration only supports binary data."]}),"\n",(0,t.jsx)(n.p,{children:"To do this we can define an encoder for initially setting our data, and a decoder for when we retrieve data."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const encoder = new TextEncoder();\nconst decoder = new TextDecoder();\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const data: [string, Uint8Array][] = [\n  ["key1", encoder.encode(new Date().toDateString())],\n  ["key2", encoder.encode(new Date().toDateString())],\n];\n\nawait store.mset(data);\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);