(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5900],{53152:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var a=t(74848),o=t(28453),i=t(78847),s=t(64428),r=t(43601),l=t.n(r);const c={},m="@mozilla/readability",d={id:"integrations/document_transformers/mozilla_readability",title:"@mozilla/readability",description:"When ingesting HTML documents for later retrieval, we are often interested only in the actual content of the webpage rather than semantics.",source:"@site/docs/integrations/document_transformers/mozilla_readability.mdx",sourceDirName:"integrations/document_transformers",slug:"/integrations/document_transformers/mozilla_readability",permalink:"/docs/integrations/document_transformers/mozilla_readability",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/document_transformers/mozilla_readability.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"html-to-text",permalink:"/docs/integrations/document_transformers/html-to-text"},next:{title:"OpenAI functions metadata tagger",permalink:"/docs/integrations/document_transformers/openai_metadata_tagger"}},h={},u=[{value:"Setup",id:"setup",level:2},...i.toc,{value:"Usage",id:"usage",level:2},{value:"Customization",id:"customization",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"mozillareadability",children:"@mozilla/readability"}),"\n",(0,a.jsx)(n.p,{children:"When ingesting HTML documents for later retrieval, we are often interested only in the actual content of the webpage rather than semantics.\nStripping HTML tags from documents with the MozillaReadabilityTransformer can result in more content-rich chunks, making retrieval more effective."}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsxs)(n.p,{children:["You'll need to install the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@mozilla/readability",children:(0,a.jsx)(n.code,{children:"@mozilla/readability"})})," and the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/jsdom",children:(0,a.jsx)(n.code,{children:"jsdom"})})," npm package:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @mozilla/readability jsdom\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Though not required for the transformer by itself, the below usage examples require ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/cheerio",children:(0,a.jsx)(n.code,{children:"cheerio"})})," for scraping:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install cheerio\n"})}),"\n","\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @langchain/community\n"})}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.p,{children:"The below example scrapes a Hacker News thread, splits it based on HTML tags to group chunks based on the semantic information from the tags,\nthen extracts content from the individual chunks:"}),"\n","\n",(0,a.jsx)(s.A,{language:"typescript",children:l()}),"\n",(0,a.jsx)(n.h2,{id:"customization",children:"Customization"}),"\n",(0,a.jsxs)(n.p,{children:["You can pass the transformer any ",(0,a.jsxs)(n.a,{href:"https://www.npmjs.com/package/@mozilla/readability",children:["arguments accepted by the ",(0,a.jsx)(n.code,{children:"@mozilla/readability"})," package"]})," to customize how it works."]})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},43601:e=>{e.exports={content:"import { CheerioWebBaseLoader } from \"langchain/document_loaders/web/cheerio\";\nimport { MozillaReadabilityTransformer } from \"@langchain/community/document_transformers/mozilla_readability\";\nimport { RecursiveCharacterTextSplitter } from \"@langchain/textsplitters\";\n\nconst loader = new CheerioWebBaseLoader(\n  \"https://news.ycombinator.com/item?id=34817881\"\n);\n\nconst docs = await loader.load();\n\nconst splitter = RecursiveCharacterTextSplitter.fromLanguage(\"html\");\nconst transformer = new MozillaReadabilityTransformer();\n\nconst sequence = splitter.pipe(transformer);\n\nconst newDocuments = await sequence.invoke(docs);\n\nconsole.log(newDocuments);\n\n/*\n  [\n    Document {\n      pageContent: 'Hacker News new | past | comments | ask | show | jobs | submit login What Lights\\n' +\n        'the Universe\u2019s Standard Candles? (quantamagazine.org) 75 points by Amorymeltzer\\n' +\n        '5 months ago | hide | past | favorite | 6 comments delta_p_delta_x 5 months ago\\n' +\n        '| next [\u2013] Astrophysical and cosmological simulations are often insightful.\\n' +\n        \"They're also very cross-disciplinary; besides the obvious astrophysics, there's\\n\" +\n        'networking and sysadmin, parallel computing and algorithm theory (so that the\\n' +\n        'simulation programs are actually fast but still accurate), systems design, and\\n' +\n        'even a bit of graphic design for the visualisations.Some of my favourite\\n' +\n        'simulation projects:- IllustrisTNG:',\n      metadata: {\n        source: 'https://news.ycombinator.com/item?id=34817881',\n        loc: [Object]\n      }\n    },\n    Document {\n      pageContent: 'that the simulation programs are actually fast but still accurate), systems\\n' +\n        'design, and even a bit of graphic design for the visualisations.Some of my\\n' +\n        'favourite simulation projects:- IllustrisTNG: https://www.tng-project.org/-\\n' +\n        'SWIFT: https://swift.dur.ac.uk/- CO5BOLD:\\n' +\n        'https://www.astro.uu.se/~bf/co5bold_main.html (which produced these animations\\n' +\n        'of a red-giant star: https://www.astro.uu.se/~bf/movie/AGBmovie.html)-\\n' +\n        'AbacusSummit: https://abacussummit.readthedocs.io/en/latest/And I can add the\\n' +\n        'simulations in the article, too. froeb 5 months ago | parent | next [\u2013]\\n' +\n        'Supernova simulations are especially interesting too. I have heard them\\n' +\n        'described as the only time in physics when all 4 of the fundamental forces are\\n' +\n        'important. The explosion can be quite finicky too. If I remember right, you\\n' +\n        \"can't get supernova to explode\",\n      metadata: {\n        source: 'https://news.ycombinator.com/item?id=34817881',\n        loc: [Object]\n      }\n    },\n    Document {\n      pageContent: 'heard them described as the only time in physics when all 4 of the fundamental\\n' +\n        'forces are important. The explosion can be quite finicky too. If I remember\\n' +\n        \"right, you can't get supernova to explode properly in 1D simulations, only in\\n\" +\n        'higher dimensions. This was a mystery until the realization that turbulence is\\n' +\n        'necessary for supernova to trigger--there is no turbulent flow in 1D. andrewflnr\\n' +\n        \"5 months ago | prev | next [\u2013] Whoa. I didn't know the accretion theory of Ia\\n\" +\n        'supernovae was dead, much less that it had been since 2011. andreareina 5 months\\n' +\n        'ago | prev | next [\u2013] This seems to be the paper',\n      metadata: {\n        source: 'https://news.ycombinator.com/item?id=34817881',\n        loc: [Object]\n      }\n    },\n    Document {\n      pageContent: 'andreareina 5 months ago | prev | next [\u2013] This seems to be the paper\\n' +\n        'https://academic.oup.com/mnras/article/517/4/5260/6779709 andreareina 5 months\\n' +\n        \"ago | prev [\u2013] Wouldn't double detonation show up as variance in the brightness?\\n\" +\n        'yencabulator 5 months ago | parent [\u2013] Or widening of the peak. If one type Ia\\n' +\n        'supernova goes 1,2,3,2,1, the sum of two could go 1+0=1 2+1=3 3+2=5 2+3=5 1+2=3\\n' +\n        '0+1=1 Guidelines | FAQ | Lists |',\n      metadata: {\n        source: 'https://news.ycombinator.com/item?id=34817881',\n        loc: [Object]\n      }\n    },\n    Document {\n      pageContent: 'the sum of two could go 1+0=1 2+1=3 3+2=5 2+3=5 1+2=3 0+1=1 Guidelines | FAQ |\\n' +\n        'Lists | API | Security | Legal | Apply to YC | Contact Search:',\n      metadata: {\n        source: 'https://news.ycombinator.com/item?id=34817881',\n        loc: [Object]\n      }\n    }\n  ]\n*/\n",imports:[{local:"CheerioWebBaseLoader",imported:"CheerioWebBaseLoader",source:"langchain/document_loaders/web/cheerio"},{local:"MozillaReadabilityTransformer",imported:"MozillaReadabilityTransformer",source:"@langchain/community/document_transformers/mozilla_readability"},{local:"RecursiveCharacterTextSplitter",imported:"RecursiveCharacterTextSplitter",source:"@langchain/textsplitters"}]}}}]);