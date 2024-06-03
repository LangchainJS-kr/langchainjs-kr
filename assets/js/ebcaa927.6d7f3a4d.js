"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8065],{45430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var o=t(74848),a=t(28453);const s={sidebar_class_name:"hidden",sidebar_position:3,title:"How to use few shot examples"},r=void 0,l={id:"how_to/few_shot_examples",title:"How to use few shot examples",description:"In this guide, we\u2019ll learn how to create a simple prompt template that",source:"@site/docs/how_to/few_shot_examples.mdx",sourceDirName:"how_to",slug:"/how_to/few_shot_examples",permalink:"/docs/how_to/few_shot_examples",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/how_to/few_shot_examples.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_class_name:"hidden",sidebar_position:3,title:"How to use few shot examples"},sidebar:"tutorialSidebar",previous:{title:"How to create a custom LLM class",permalink:"/docs/how_to/custom_llm"},next:{title:"How to use output parsers to parse an LLM response into structured format",permalink:"/docs/how_to/output_parser_structured"}},i={},h=[{value:"Create a formatter for the few-shot examples",id:"create-a-formatter-for-the-few-shot-examples",level:2},{value:"Creating the example set",id:"creating-the-example-set",level:2},{value:"Pass the examples and formatter to <code>FewShotPromptTemplate</code>",id:"pass-the-examples-and-formatter-to-fewshotprompttemplate",level:3},{value:"Using an example selector",id:"using-an-example-selector",level:2},{value:"Next steps",id:"next-steps",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In this guide, we\u2019ll learn how to create a simple prompt template that\nprovides the model with example inputs and outputs when generating.\nProviding the LLM with a few such examples is called few-shotting, and\nis a simple yet powerful way to guide generation and in some cases\ndrastically improve model performance."}),"\n",(0,o.jsxs)(n.p,{children:["A few-shot prompt template can be constructed from either a set of\nexamples, or from an ",(0,o.jsx)(n.a,{href:"https://v02.api.js.langchain.com/classes/langchain_core_example_selectors.BaseExampleSelector.html",children:"Example\nSelector"}),"\nclass responsible for choosing a subset of examples from the defined\nset."]}),"\n",(0,o.jsxs)(n.p,{children:["This guide will cover few-shotting with string prompt templates. For a\nguide on few-shotting with chat messages for chat models, see\n",(0,o.jsx)(n.a,{href:"../../docs/how_to/few_shot_examples_chat/",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.admonition,{title:"Prerequisites",type:"info",children:[(0,o.jsx)(n.p,{children:"This guide assumes familiarity with the following concepts:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../../docs/concepts/#prompt-templates",children:"Prompt templates"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../../docs/concepts/#example-selectors",children:"Example selectors"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../../docs/concepts/#llms",children:"LLMs"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../../docs/concepts/#vectorstores",children:"Vectorstores"})}),"\n"]})]}),"\n",(0,o.jsx)(n.h2,{id:"create-a-formatter-for-the-few-shot-examples",children:"Create a formatter for the few-shot examples"}),"\n",(0,o.jsxs)(n.p,{children:["Configure a formatter that will format the few-shot examples into a\nstring. This formatter should be a ",(0,o.jsx)(n.code,{children:"PromptTemplate"})," object."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:'import { PromptTemplate } from "@langchain/core/prompts";\n\nconst examplePrompt = PromptTemplate.fromTemplate(\n  "Question: {question}\\n{answer}"\n);\n'})}),"\n",(0,o.jsx)(n.h2,{id:"creating-the-example-set",children:"Creating the example set"}),"\n",(0,o.jsx)(n.p,{children:"Next, we\u2019ll create a list of few-shot examples. Each example should be a\ndictionary representing an example input to the formatter prompt we\ndefined above."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:'const examples = [\n  {\n    question: "Who lived longer, Muhammad Ali or Alan Turing?",\n    answer: `\n  Are follow up questions needed here: Yes.\n  Follow up: How old was Muhammad Ali when he died?\n  Intermediate answer: Muhammad Ali was 74 years old when he died.\n  Follow up: How old was Alan Turing when he died?\n  Intermediate answer: Alan Turing was 41 years old when he died.\n  So the final answer is: Muhammad Ali\n  `,\n  },\n  {\n    question: "When was the founder of craigslist born?",\n    answer: `\n  Are follow up questions needed here: Yes.\n  Follow up: Who was the founder of craigslist?\n  Intermediate answer: Craigslist was founded by Craig Newmark.\n  Follow up: When was Craig Newmark born?\n  Intermediate answer: Craig Newmark was born on December 6, 1952.\n  So the final answer is: December 6, 1952\n  `,\n  },\n  {\n    question: "Who was the maternal grandfather of George Washington?",\n    answer: `\n  Are follow up questions needed here: Yes.\n  Follow up: Who was the mother of George Washington?\n  Intermediate answer: The mother of George Washington was Mary Ball Washington.\n  Follow up: Who was the father of Mary Ball Washington?\n  Intermediate answer: The father of Mary Ball Washington was Joseph Ball.\n  So the final answer is: Joseph Ball\n  `,\n  },\n  {\n    question:\n      "Are both the directors of Jaws and Casino Royale from the same country?",\n    answer: `\n  Are follow up questions needed here: Yes.\n  Follow up: Who is the director of Jaws?\n  Intermediate Answer: The director of Jaws is Steven Spielberg.\n  Follow up: Where is Steven Spielberg from?\n  Intermediate Answer: The United States.\n  Follow up: Who is the director of Casino Royale?\n  Intermediate Answer: The director of Casino Royale is Martin Campbell.\n  Follow up: Where is Martin Campbell from?\n  Intermediate Answer: New Zealand.\n  So the final answer is: No\n  `,\n  },\n];\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"pass-the-examples-and-formatter-to-fewshotprompttemplate",children:["Pass the examples and formatter to ",(0,o.jsx)(n.code,{children:"FewShotPromptTemplate"})]}),"\n",(0,o.jsxs)(n.p,{children:["Finally, create a\n",(0,o.jsx)(n.a,{href:"https://v02.api.js.langchain.com/classes/langchain_core_prompts.FewShotPromptTemplate.html",children:(0,o.jsx)(n.code,{children:"FewShotPromptTemplate"})}),"\nobject. This object takes in the few-shot examples and the formatter for\nthe few-shot examples. When this ",(0,o.jsx)(n.code,{children:"FewShotPromptTemplate"})," is formatted,\nit formats the passed examples using the ",(0,o.jsx)(n.code,{children:"examplePrompt"}),", then and adds\nthem to the final prompt before ",(0,o.jsx)(n.code,{children:"suffix"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:'import { FewShotPromptTemplate } from "@langchain/core/prompts";\n\nconst prompt = new FewShotPromptTemplate({\n  examples,\n  examplePrompt,\n  suffix: "Question: {input}",\n  inputVariables: ["input"],\n});\n\nconst formatted = await prompt.format({\n  input: "Who was the father of Mary Ball Washington?",\n});\nconsole.log(formatted.toString());\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"\n\nQuestion: Who lived longer, Muhammad Ali or Alan Turing?\n\n  Are follow up questions needed here: Yes.\n  Follow up: How old was Muhammad Ali when he died?\n  Intermediate answer: Muhammad Ali was 74 years old when he died.\n  Follow up: How old was Alan Turing when he died?\n  Intermediate answer: Alan Turing was 41 years old when he died.\n  So the final answer is: Muhammad Ali\n\n\nQuestion: When was the founder of craigslist born?\n\n  Are follow up questions needed here: Yes.\n  Follow up: Who was the founder of craigslist?\n  Intermediate answer: Craigslist was founded by Craig Newmark.\n  Follow up: When was Craig Newmark born?\n  Intermediate answer: Craig Newmark was born on December 6, 1952.\n  So the final answer is: December 6, 1952\n\n\nQuestion: Who was the maternal grandfather of George Washington?\n\n  Are follow up questions needed here: Yes.\n  Follow up: Who was the mother of George Washington?\n  Intermediate answer: The mother of George Washington was Mary Ball Washington.\n  Follow up: Who was the father of Mary Ball Washington?\n  Intermediate answer: The father of Mary Ball Washington was Joseph Ball.\n  So the final answer is: Joseph Ball\n\n\nQuestion: Are both the directors of Jaws and Casino Royale from the same country?\n\n  Are follow up questions needed here: Yes.\n  Follow up: Who is the director of Jaws?\n  Intermediate Answer: The director of Jaws is Steven Spielberg.\n  Follow up: Where is Steven Spielberg from?\n  Intermediate Answer: The United States.\n  Follow up: Who is the director of Casino Royale?\n  Intermediate Answer: The director of Casino Royale is Martin Campbell.\n  Follow up: Where is Martin Campbell from?\n  Intermediate Answer: New Zealand.\n  So the final answer is: No\n\n\nQuestion: Who was the father of Mary Ball Washington?\n"})}),"\n",(0,o.jsx)(n.p,{children:"By providing the model with examples like this, we can guide the model\nto a better response."}),"\n",(0,o.jsx)(n.h2,{id:"using-an-example-selector",children:"Using an example selector"}),"\n",(0,o.jsxs)(n.p,{children:["We will reuse the example set and the formatter from the previous\nsection. However, instead of feeding the examples directly into the\n",(0,o.jsx)(n.code,{children:"FewShotPromptTemplate"})," object, we will feed them into an implementation\nof ",(0,o.jsx)(n.code,{children:"ExampleSelector"})," called\n",(0,o.jsx)(n.a,{href:"https://v02.api.js.langchain.com/classes/langchain_core_example_selectors.SemanticSimilarityExampleSelector.html",children:(0,o.jsx)(n.code,{children:"SemanticSimilarityExampleSelector"})}),"\ninstance. This class selects few-shot examples from the initial set\nbased on their similarity to the input. It uses an embedding model to\ncompute the similarity between the input and the few-shot examples, as\nwell as a vector store to perform the nearest neighbor search."]}),"\n",(0,o.jsx)(n.p,{children:"To show what it looks like, let\u2019s initialize an instance and call it in\nisolation:"}),"\n",(0,o.jsx)(n.p,{children:"Set your OpenAI API key for the embeddings model"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'export OPENAI_API_KEY="..."\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:'import { SemanticSimilarityExampleSelector } from "@langchain/core/example_selectors";\nimport { MemoryVectorStore } from "langchain/vectorstores/memory";\nimport { OpenAIEmbeddings } from "@langchain/openai";\n\nconst exampleSelector = await SemanticSimilarityExampleSelector.fromExamples(\n  // This is the list of examples available to select from.\n  examples,\n  // This is the embedding class used to produce embeddings which are used to measure semantic similarity.\n  new OpenAIEmbeddings(),\n  // This is the VectorStore class that is used to store the embeddings and do a similarity search over.\n  MemoryVectorStore,\n  {\n    // This is the number of examples to produce.\n    k: 1,\n  }\n);\n\n// Select the most similar example to the input.\nconst question = "Who was the father of Mary Ball Washington?";\nconst selectedExamples = await exampleSelector.selectExamples({ question });\nconsole.log(`Examples most similar to the input: ${question}`);\nfor (const example of selectedExamples) {\n  console.log("\\n");\n  console.log(\n    Object.entries(example)\n      .map(([k, v]) => `${k}: ${v}`)\n      .join("\\n")\n  );\n}\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Examples most similar to the input: Who was the father of Mary Ball Washington?\n\n\nquestion: Who was the maternal grandfather of George Washington?\nanswer:\n  Are follow up questions needed here: Yes.\n  Follow up: Who was the mother of George Washington?\n  Intermediate answer: The mother of George Washington was Mary Ball Washington.\n  Follow up: Who was the father of Mary Ball Washington?\n  Intermediate answer: The father of Mary Ball Washington was Joseph Ball.\n  So the final answer is: Joseph Ball\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now, let\u2019s create a ",(0,o.jsx)(n.code,{children:"FewShotPromptTemplate"})," object. This object takes in\nthe example selector and the formatter prompt for the few-shot examples."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:'const prompt = new FewShotPromptTemplate({\n  exampleSelector,\n  examplePrompt,\n  suffix: "Question: {input}",\n  inputVariables: ["input"],\n});\n\nconst formatted = await prompt.invoke({\n  input: "Who was the father of Mary Ball Washington?",\n});\nconsole.log(formatted.toString());\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"\n\nQuestion: Who was the maternal grandfather of George Washington?\n\n  Are follow up questions needed here: Yes.\n  Follow up: Who was the mother of George Washington?\n  Intermediate answer: The mother of George Washington was Mary Ball Washington.\n  Follow up: Who was the father of Mary Ball Washington?\n  Intermediate answer: The father of Mary Ball Washington was Joseph Ball.\n  So the final answer is: Joseph Ball\n\n\nQuestion: Who was the father of Mary Ball Washington?\n"})}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,o.jsx)(n.p,{children:"You\u2019ve now learned how to add few-shot examples to your prompts."}),"\n",(0,o.jsxs)(n.p,{children:["Next, check out the other how-to guides on prompt templates in this\nsection, the related how-to guide on ",(0,o.jsx)(n.a,{href:"../../docs/how_to/few_shot_examples_chat",children:"few shotting with chat\nmodels"}),", or the other ",(0,o.jsx)(n.a,{href:"../../docs/how_to/example_selectors/",children:"example\nselector how-to guides"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}}}]);