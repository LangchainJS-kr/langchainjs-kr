"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[914],{4447:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=s(4848),n=s(8453);const r={sidebar_position:0,sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},l="How-to guides",i={id:"how_to/index",title:"How-to guides",description:"Here you'll find answers to \u201cHow do I\u2026.?\u201d types of questions.",source:"@site/docs/how_to/index.mdx",sourceDirName:"how_to",slug:"/how_to/",permalink:"/docs/how_to/",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/index.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_class_name:"hidden",pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},a={},c=[{value:"Installation",id:"installation",level:2},{value:"Key features",id:"key-features",level:2},{value:"LangChain Expression Language (LCEL)",id:"langchain-expression-language-lcel",level:2},{value:"Components",id:"components",level:2},{value:"Prompt templates",id:"prompt-templates",level:3},{value:"Example selectors",id:"example-selectors",level:3},{value:"Chat models",id:"chat-models",level:3},{value:"LLMs",id:"llms",level:3},{value:"Output parsers",id:"output-parsers",level:3},{value:"Document loaders",id:"document-loaders",level:3},{value:"Text splitters",id:"text-splitters",level:3},{value:"Embedding models",id:"embedding-models",level:3},{value:"Vector stores",id:"vector-stores",level:3},{value:"Retrievers",id:"retrievers",level:3},{value:"Indexing",id:"indexing",level:3},{value:"Tools",id:"tools",level:3},{value:"Agents",id:"agents",level:3},{value:"Callbacks",id:"callbacks",level:3},{value:"Custom",id:"custom",level:3},{value:"Use cases",id:"use-cases",level:2},{value:"Q&amp;A with RAG",id:"qa-with-rag",level:3},{value:"Extraction",id:"extraction",level:3},{value:"Chatbots",id:"chatbots",level:3},{value:"Query analysis",id:"query-analysis",level:3},{value:"Q&amp;A over SQL + CSV",id:"qa-over-sql--csv",level:3},{value:"Q&amp;A over graph databases",id:"qa-over-graph-databases",level:3}];function h(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"how-to-guides",children:"How-to guides"}),"\n",(0,t.jsxs)(o.p,{children:["Here you'll find answers to \u201cHow do I\u2026.?\u201d types of questions.\nThese guides are ",(0,t.jsx)(o.em,{children:"goal-oriented"})," and ",(0,t.jsx)(o.em,{children:"concrete"}),"; they're meant to help you complete a specific task.\nFor conceptual explanations see ",(0,t.jsx)(o.a,{href:"/docs/concepts/",children:"Conceptual Guides"}),".\nFor end-to-end walkthroughs see ",(0,t.jsx)(o.a,{href:"/docs/tutorials",children:"Tutorials"}),".\nFor comprehensive descriptions of every class and function see ",(0,t.jsx)(o.a,{href:"https://v2.v02.api.js.langchain.com/",children:"API Reference"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/installation/",children:"How to: install LangChain packages"})}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"key-features",children:"Key features"}),"\n",(0,t.jsx)(o.p,{children:"This highlights functionality that is core to using LangChain."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/structured_output/",children:"How to: return structured data from an LLM"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/tool_calling/",children:"How to: use a chat model to call tools"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/streaming",children:"How to: stream runnables"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/debugging/",children:"How to: debug your LLM apps"})}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"langchain-expression-language-lcel",children:"LangChain Expression Language (LCEL)"}),"\n",(0,t.jsxs)(o.p,{children:["LangChain Expression Language is a way to create arbitrary custom chains. It is built on the ",(0,t.jsx)(o.a,{href:"https://api.js.langchain.com/classes/langchain_core_runnables.Runnable.html",children:(0,t.jsx)(o.code,{children:"Runnable"})})," protocol."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/docs/how_to/lcel_cheatsheet/",children:(0,t.jsx)(o.strong,{children:"LCEL cheatsheet"})}),": For a quick overview of how to use the main LCEL primitives."]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/sequence",children:"How to: chain runnables"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/streaming",children:"How to: stream runnables"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/parallel/",children:"How to: invoke runnables in parallel"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/binding/",children:"How to: attach runtime arguments to a runnable"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/functions",children:"How to: run custom functions"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/passthrough",children:"How to: pass through arguments from one step to the next"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/assign",children:"How to: add values to a chain's state"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/message_history",children:"How to: add message history"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/routing",children:"How to: route execution within a chain"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/fallbacks",children:"How to: add fallbacks"})}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"components",children:"Components"}),"\n",(0,t.jsx)(o.p,{children:"These are the core building blocks you can use when building applications."}),"\n",(0,t.jsx)(o.h3,{id:"prompt-templates",children:"Prompt templates"}),"\n",(0,t.jsx)(o.p,{children:"Prompt Templates are responsible for formatting user input into a format that can be passed to a language model."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/few_shot_examples",children:"How to: use few shot examples"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/few_shot_examples_chat/",children:"How to: use few shot examples in chat models"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/prompts_partial",children:"How to: partially format prompt templates"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/prompts_composition",children:"How to: compose prompts together"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"example-selectors",children:"Example selectors"}),"\n",(0,t.jsx)(o.p,{children:"Example Selectors are responsible for selecting the correct few shot examples to pass to the prompt."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/example_selectors",children:"How to: use example selectors"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/example_selectors_length_based",children:"How to: select examples by length"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/example_selectors_similarity",children:"How to: select examples by semantic similarity"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"chat-models",children:"Chat models"}),"\n",(0,t.jsx)(o.p,{children:"Chat Models are newer forms of language models that take messages in and output a message."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/tool_calling",children:"How to: do function/tool calling"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/structured_output",children:"How to: get models to return structured output"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/chat_model_caching",children:"How to: cache model responses"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/custom_chat",children:"How to: create a custom chat model class"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/logprobs",children:"How to: get log probabilities"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/chat_streaming",children:"How to: stream a response back"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/chat_token_usage_tracking",children:"How to: track token usage"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"llms",children:"LLMs"}),"\n",(0,t.jsx)(o.p,{children:"What LangChain calls LLMs are older forms of language models that take a string in and output a string."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/llm_caching",children:"How to: cache model responses"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/custom_llm",children:"How to: create a custom LLM class"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/streaming_llm",children:"How to: stream a response back"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/llm_token_usage_tracking",children:"How to: track token usage"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"output-parsers",children:"Output parsers"}),"\n",(0,t.jsx)(o.p,{children:"Output Parsers are responsible for taking the output of an LLM and parsing into more structured format."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/output_parser_structured",children:"How to: use output parsers to parse an LLM response into structured format"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/output_parser_json",children:"How to: parse JSON output"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/output_parser_xml",children:"How to: parse XML output"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/output_parser_fixing/",children:"How to: try to fix errors in output parsing"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"document-loaders",children:"Document loaders"}),"\n",(0,t.jsx)(o.p,{children:"Document Loaders are responsible for loading documents from a variety of sources."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/document_loader_csv",children:"How to: load CSV data"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/document_loader_directory",children:"How to: load data from a directory"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/document_loader_pdf",children:"How to: load PDF files"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/document_loader_custom",children:"How to: write a custom document loader"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/document_loader_html",children:"How to: load HTML data"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/document_loader_markdown",children:"How to: load Markdown data"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"text-splitters",children:"Text splitters"}),"\n",(0,t.jsx)(o.p,{children:"Text Splitters take a document and split into chunks that can be used for retrieval."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/recursive_text_splitter",children:"How to: recursively split text"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/character_text_splitter",children:"How to: split by character"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/code_splitter",children:"How to: split code"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/split_by_token",children:"How to: split by tokens"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"embedding-models",children:"Embedding models"}),"\n",(0,t.jsx)(o.p,{children:"Embedding Models take a piece of text and create a numerical representation of it."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/embed_text",children:"How to: embed text data"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/caching_embeddings",children:"How to: cache embedding results"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"vector-stores",children:"Vector stores"}),"\n",(0,t.jsx)(o.p,{children:"Vector stores are databases that can efficiently store and retrieve embeddings."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/vectorstores",children:"How to: create and query vector stores"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"retrievers",children:"Retrievers"}),"\n",(0,t.jsx)(o.p,{children:"Retrievers are responsible for taking a query and returning relevant documents."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/vectorstore_retriever",children:"How to: use a vector store to retrieve data"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/multiple_queries",children:"How to: generate multiple queries to retrieve data for"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/contextual_compression",children:"How to: use contextual compression to compress the data retrieved"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/custom_retriever",children:"How to: write a custom retriever class"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/multi_vector",children:"How to: generate multiple embeddings per document"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/parent_document_retriever",children:"How to: retrieve the whole document for a chunk"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/self_query",children:"How to: generate metadata filters"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/time_weighted_vectorstore",children:"How to: create a time-weighted retriever"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/reduce_retrieval_latency",children:"How to: reduce retrieval latency"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"indexing",children:"Indexing"}),"\n",(0,t.jsx)(o.p,{children:"Indexing is the process of keeping your vectorstore in-sync with the underlying data source."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/indexing",children:"How to: reindex data to keep your vectorstore in-sync with the underlying data source"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"tools",children:"Tools"}),"\n",(0,t.jsx)(o.p,{children:"LangChain Tools contain a description of the tool (to pass to the language model) as well as the implementation of the function to call)."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/custom_tools",children:"How to: create custom tools"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/tools_builtin",children:"How to: use built-in tools and built-in toolkits"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/tool_calling/",children:"How to: use a chat model to call tools"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/tools_prompting",children:"How to: add ad-hoc tool calling capability to LLMs and Chat Models"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/tool_calls_multi_modal",children:"How to: call tools using multi-modal data"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"agents",children:"Agents"}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsxs)(o.p,{children:["For in depth how-to guides for agents, please check out ",(0,t.jsx)(o.a,{href:"https://langchain-ai.github.io/langgraphjs/",children:"LangGraph"})," documentation."]})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/agent_executor",children:"How to: use legacy LangChain Agents (AgentExecutor)"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"callbacks",children:"Callbacks"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/callbacks_runtime",children:"How to: pass in callbacks at runtime"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/callbacks_attach",children:"How to: attach callbacks to a module"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/callbacks_constructor",children:"How to: pass callbacks into a module constructor"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/custom_callbacks",children:"How to: create custom callback handlers"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/callbacks_backgrounding",children:"How to: make callbacks run in the background"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"custom",children:"Custom"}),"\n",(0,t.jsx)(o.p,{children:"All of LangChain components can easily be extended to support your own versions."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/custom_chat",children:"How to: create a custom chat model class"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/custom_llm",children:"How to: create a custom LLM class"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/custom_retriever",children:"How to: write a custom retriever class"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/document_loader_custom",children:"How to: write a custom document loader"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/custom_tools",children:"How to: define a custom tool"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/custom_callbacks",children:"How to: create custom callback handlers"})}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,t.jsx)(o.p,{children:"These guides cover use-case specific details."}),"\n",(0,t.jsx)(o.h3,{id:"qa-with-rag",children:"Q&A with RAG"}),"\n",(0,t.jsx)(o.p,{children:"Retrieval Augmented Generation (RAG) is a way to connect LLMs to external sources of data."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/qa_chat_history_how_to/",children:"How to: add chat history"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/qa_streaming/",children:"How to: stream"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/qa_sources/",children:"How to: return sources"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/qa_citations/",children:"How to: return citations"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/qa_per_user/",children:"How to: do per-user retrieval"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"extraction",children:"Extraction"}),"\n",(0,t.jsx)(o.p,{children:"Extraction is when you use LLMs to extract structured information from unstructured text."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/extraction_examples/",children:"How to: use reference examples"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/extraction_long_text/",children:"How to: handle long text"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/extraction_parse",children:"How to: do extraction without using function calling"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"chatbots",children:"Chatbots"}),"\n",(0,t.jsx)(o.p,{children:"Chatbots involve using an LLM to have a conversation."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/chatbots_memory",children:"How to: manage memory"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/chatbots_retrieval",children:"How to: do retrieval"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/chatbots_tools",children:"How to: use tools"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"query-analysis",children:"Query analysis"}),"\n",(0,t.jsx)(o.p,{children:"Query Analysis is the task of using an LLM to generate a query to send to a retriever."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/query_few_shot",children:"How to: add examples to the prompt"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/query_no_queries",children:"How to: handle cases where no queries are generated"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/query_multiple_queries",children:"How to: handle multiple queries"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/query_multiple_retrievers",children:"How to: handle multiple retrievers"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/query_constructing_filters",children:"How to: construct filters"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/query_high_cardinality",children:"How to: deal with high cardinality categorical variables"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"qa-over-sql--csv",children:"Q&A over SQL + CSV"}),"\n",(0,t.jsx)(o.p,{children:"You can use LLMs to do question answering over tabular data."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/sql_prompting",children:"How to: use prompting to improve results"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/sql_query_checking",children:"How to: do query validation"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/sql_large_db",children:"How to: deal with large databases"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"qa-over-graph-databases",children:"Q&A over graph databases"}),"\n",(0,t.jsx)(o.p,{children:"You can use an LLM to do question answering over graph databases."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/graph_mapping",children:"How to: map values to a database"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/graph_semantic",children:"How to: add a semantic layer over the database"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/graph_prompting",children:"How to: improve results with prompting"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/how_to/graph_constructing",children:"How to: construct knowledge graphs"})}),"\n"]})]})}function d(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,o,s)=>{s.d(o,{R:()=>l,x:()=>i});var t=s(6540);const n={},r=t.createContext(n);function l(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);