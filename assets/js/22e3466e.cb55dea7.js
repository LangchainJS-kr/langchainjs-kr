"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[874],{32586:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=t(74848),a=t(28453),o=t(78847),s=t(27846);const i={sidebar_class_name:"hidden",title:"How to parse XML output"},l=void 0,u={id:"how_to/output_parser_xml",title:"How to parse XML output",description:"This guide assumes familiarity with the following concepts: - [Chat",source:"@site/docs/how_to/output_parser_xml.mdx",sourceDirName:"how_to",slug:"/how_to/output_parser_xml",permalink:"/docs/how_to/output_parser_xml",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/output_parser_xml.mdx",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden",title:"How to parse XML output"},sidebar:"tutorialSidebar",previous:{title:"How to parse JSON output",permalink:"/docs/how_to/output_parser_json"},next:{title:"How to invoke runnables in parallel",permalink:"/docs/how_to/parallel"}},c={},p=[...o.toc,{value:"Next steps",id:"next-steps",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"Prerequisites",type:"info",children:(0,r.jsxs)(n.p,{children:["This guide assumes familiarity with the following concepts: - ",(0,r.jsx)(n.a,{href:"../../docs/concepts/#chat-models",children:"Chat\nmodels"})," - ",(0,r.jsx)(n.a,{href:"../../docs/concepts/#output-parsers",children:"Output\nparsers"})," - ",(0,r.jsx)(n.a,{href:"../../docs/concepts/#prompt-templates",children:"Prompt\ntemplates"})," - ",(0,r.jsx)(n.a,{href:"../../docs/how_to/structured_output",children:"Structured\noutput"})," - ",(0,r.jsx)(n.a,{href:"../../docs/how_to/sequence/",children:"Chaining runnables\ntogether"})]})}),"\n",(0,r.jsx)(n.p,{children:"LLMs from different providers often have different strengths depending\non the specific data they are trianed on. This also means that some may\nbe \u201cbetter\u201d and more reliable at generating output in formats other than\nJSON."}),"\n",(0,r.jsxs)(n.p,{children:["This guide shows you how to use the\n",(0,r.jsx)(n.a,{href:"https://api.js.langchain.com/classes/langchain_core_output_parsers.XMLOutputParser.html",children:(0,r.jsx)(n.code,{children:"XMLOutputParser"})}),"\nto prompt models for XML output, then and parse that output into a\nusable format."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Keep in mind that large language models are leaky abstractions! You\u2019ll\nhave to use an LLM with sufficient capacity to generate well-formed XML."})}),"\n",(0,r.jsxs)(n.p,{children:["In the following examples, we use Anthropic\u2019s Claude\n(",(0,r.jsx)(n.a,{href:"https://docs.anthropic.com/claude/docs",children:"https://docs.anthropic.com/claude/docs"}),"), which is one such model that\nis optimized for XML tags."]}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(n.p,{children:"@langchain/anthropic"})}),"\n",(0,r.jsx)(n.p,{children:"Let\u2019s start with a simple request to the model."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { ChatAnthropic } from "@langchain/anthropic";\n\nconst model = new ChatAnthropic({\n  model: "claude-3-sonnet-20240229",\n  maxTokens: 512,\n  temperature: 0.1,\n});\n\nconst query = `Generate the shortened filmograph for Tom Hanks.`;\n\nconst result = await model.invoke(\n  query + ` Please enclose the movies in "movie" tags.`\n);\n\nconsole.log(result.content);\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'Here is the shortened filmography for Tom Hanks, with movies enclosed in "movie" tags:\n\n<movie>Forrest Gump</movie>\n<movie>Saving Private Ryan</movie>\n<movie>Cast Away</movie>\n<movie>Apollo 13</movie>\n<movie>Catch Me If You Can</movie>\n<movie>The Green Mile</movie>\n<movie>Toy Story</movie>\n<movie>Toy Story 2</movie>\n<movie>Toy Story 3</movie>\n<movie>Toy Story 4</movie>\n<movie>Philadelphia</movie>\n<movie>Big</movie>\n<movie>Sleepless in Seattle</movie>\n<movie>You\'ve Got Mail</movie>\n<movie>The Terminal</movie>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This actually worked pretty well! But it would be nice to parse that XML\ninto a more easily usable format. We can use the ",(0,r.jsx)(n.code,{children:"XMLOutputParser"})," to\nboth add default format instructions to the prompt and parse outputted\nXML into a dict:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { XMLOutputParser } from "@langchain/core/output_parsers";\n\n// We will add these instructions to the prompt below\nconst parser = new XMLOutputParser();\n\nparser.getFormatInstructions();\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'"The output should be formatted as a XML file.\\n" +\n  "1. Output should conform to the tags below. \\n" +\n  "2. If tag"... 434 more characters\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { ChatPromptTemplate } from "@langchain/core/prompts";\n\nconst prompt = ChatPromptTemplate.fromTemplate(\n  `{query}\\n{format_instructions}`\n);\nconst partialedPrompt = await prompt.partial({\n  format_instructions: parser.getFormatInstructions(),\n});\n\nconst chain = partialedPrompt.pipe(model).pipe(parser);\n\nconst output = await chain.invoke({\n  query: "Generate the shortened filmograph for Tom Hanks.",\n});\n\nconsole.log(JSON.stringify(output, null, 2));\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'{\n  "filmography": [\n    {\n      "actor": [\n        {\n          "name": "Tom Hanks"\n        },\n        {\n          "films": [\n            {\n              "film": [\n                {\n                  "title": "Forrest Gump"\n                },\n                {\n                  "year": "1994"\n                },\n                {\n                  "role": "Forrest Gump"\n                }\n              ]\n            },\n            {\n              "film": [\n                {\n                  "title": "Saving Private Ryan"\n                },\n                {\n                  "year": "1998"\n                },\n                {\n                  "role": "Captain Miller"\n                }\n              ]\n            },\n            {\n              "film": [\n                {\n                  "title": "Cast Away"\n                },\n                {\n                  "year": "2000"\n                },\n                {\n                  "role": "Chuck Noland"\n                }\n              ]\n            },\n            {\n              "film": [\n                {\n                  "title": "Catch Me If You Can"\n                },\n                {\n                  "year": "2002"\n                },\n                {\n                  "role": "Carl Hanratty"\n                }\n              ]\n            },\n            {\n              "film": [\n                {\n                  "title": "The Terminal"\n                },\n                {\n                  "year": "2004"\n                },\n                {\n                  "role": "Viktor Navorski"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You\u2019ll notice above that our output is no longer just between ",(0,r.jsx)(n.code,{children:"movie"}),"\ntags. We can also add some tags to tailor the output to our needs:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'const parser = new XMLOutputParser({\n  tags: ["movies", "actor", "film", "name", "genre"],\n});\n\n// We will add these instructions to the prompt below\nparser.getFormatInstructions();\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'"The output should be formatted as a XML file.\\n" +\n  "1. Output should conform to the tags below. \\n" +\n  "2. If tag"... 460 more characters\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can and should experiment with adding your own formatting hints in\nthe other parts of your prompt to either augment or replace the default\ninstructions."}),"\n",(0,r.jsx)(n.p,{children:"Here\u2019s the result when we invoke it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { ChatPromptTemplate } from "@langchain/core/prompts";\n\nconst prompt = ChatPromptTemplate.fromTemplate(\n  `{query}\\n{format_instructions}`\n);\nconst partialedPrompt = await prompt.partial({\n  format_instructions: parser.getFormatInstructions(),\n});\n\nconst chain = partialedPrompt.pipe(model).pipe(parser);\n\nconst output = await chain.invoke({\n  query: "Generate the shortened filmograph for Tom Hanks.",\n});\n\nconsole.log(JSON.stringify(output, null, 2));\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'{\n  "movies": [\n    {\n      "actor": [\n        {\n          "film": [\n            {\n              "name": "Forrest Gump"\n            },\n            {\n              "genre": "Drama"\n            }\n          ]\n        },\n        {\n          "film": [\n            {\n              "name": "Saving Private Ryan"\n            },\n            {\n              "genre": "War"\n            }\n          ]\n        },\n        {\n          "film": [\n            {\n              "name": "Cast Away"\n            },\n            {\n              "genre": "Drama"\n            }\n          ]\n        },\n        {\n          "film": [\n            {\n              "name": "Catch Me If You Can"\n            },\n            {\n              "genre": "Biography"\n            }\n          ]\n        },\n        {\n          "film": [\n            {\n              "name": "The Terminal"\n            },\n            {\n              "genre": "Comedy-drama"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsxs)(n.p,{children:["You\u2019ve now learned how to prompt a model to return XML. Next, check out\nthe ",(0,r.jsx)(n.a,{href:"../../docs/how_to/structured_output",children:"broader guide on obtaining structured\noutput"})," for other related\ntechniques."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(96540),a=t(34164),o=t(23104),s=t(56347),i=t(205),l=t(57485),u=t(31682),c=t(89466);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=d(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[u,p]=m({queryString:t,groupId:a}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),v=(()=>{const e=u??f;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,o]),tabValues:o}}var g=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(u(n),s(a))},p=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:p,onClick:c,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,b.jsx)(x,{...n,...e}),(0,b.jsx)(w,{...n,...e})]})}function j(e){const n=(0,g.A)();return(0,b.jsx)(y,{...e,children:p(e.children)},String(n))}},27846:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(11470),a=t(19365),o=t(21432),s=t(74848);function i(e){let{children:n}=e;return(0,s.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,s.jsx)(a.A,{value:"npm",label:"npm",children:(0,s.jsxs)(o.A,{language:"bash",children:["npm i ",n]})}),(0,s.jsx)(a.A,{value:"yarn",label:"yarn",default:!0,children:(0,s.jsxs)(o.A,{language:"bash",children:["yarn add ",n]})}),(0,s.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,s.jsxs)(o.A,{language:"bash",children:["pnpm add ",n]})})]})}}}]);