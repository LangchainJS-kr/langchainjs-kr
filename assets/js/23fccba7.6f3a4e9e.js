(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2156],{26478:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>w,frontMatter:()=>c,metadata:()=>h,toc:()=>g});var a=t(74848),i=t(28453),o=t(64428),r=t(34543),s=t.n(r),d=t(64999),l=t.n(d);const c={},p="Sitemap Loader",h={id:"integrations/document_loaders/web_loaders/sitemap",title:"Sitemap Loader",description:"This notebook goes over how to use the SitemapLoader class to load sitemaps into Documents.",source:"@site/docs/integrations/document_loaders/web_loaders/sitemap.mdx",sourceDirName:"integrations/document_loaders/web_loaders",slug:"/integrations/document_loaders/web_loaders/sitemap",permalink:"/docs/integrations/document_loaders/web_loaders/sitemap",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/document_loaders/web_loaders/sitemap.mdx",tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"SerpAPI Loader",permalink:"/docs/integrations/document_loaders/web_loaders/serpapi"},next:{title:"Sonix Audio",permalink:"/docs/integrations/document_loaders/web_loaders/sonix_audio_transcription"}},m={},g=[{value:"Setup",id:"setup",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"sitemap-loader",children:"Sitemap Loader"}),"\n",(0,a.jsxs)(n.p,{children:["This notebook goes over how to use the ",(0,a.jsx)(n.a,{href:"https://v02.api.js.langchain.com/classes/langchain_document_loaders_web_sitemap.SitemapLoader.html",children:(0,a.jsx)(n.code,{children:"SitemapLoader"})})," class to load sitemaps into ",(0,a.jsx)(n.code,{children:"Document"}),"s."]}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsxs)(n.p,{children:["First, we need to install the ",(0,a.jsx)(n.code,{children:"langchain"})," package:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install --save langchain\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The URL passed in must either contain the ",(0,a.jsx)(n.code,{children:".xml"})," path to the sitemap, or a default ",(0,a.jsx)(n.code,{children:"/sitemap.xml"})," will be appended to the URL."]}),"\n","\n",(0,a.jsx)(o.A,{language:"typescript",children:s()}),"\n",(0,a.jsxs)(n.p,{children:["Or, if you want to only load the sitemap and not the contents of each page from the sitemap, you can use the ",(0,a.jsx)(n.code,{children:"parseSitemap"})," method:"]}),"\n","\n",(0,a.jsx)(o.A,{language:"typescript",children:l()})]})}function w(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},64999:e=>{e.exports={content:"import { SitemapLoader } from \"langchain/document_loaders/web/sitemap\";\n\nconst loader = new SitemapLoader(\"https://www.langchain.com/\");\n\nconst sitemap = await loader.parseSitemap();\nconsole.log(sitemap);\n/**\n[\n  {\n    loc: 'https://www.langchain.com/blog-detail/starting-a-career-in-design',\n    changefreq: '',\n    lastmod: '',\n    priority: ''\n  },\n  {\n    loc: 'https://www.langchain.com/blog-detail/building-a-navigation-component',\n    changefreq: '',\n    lastmod: '',\n    priority: ''\n  },\n  {\n    loc: 'https://www.langchain.com/blog-detail/guide-to-creating-a-website',\n    changefreq: '',\n    lastmod: '',\n    priority: ''\n  },\n  {\n    loc: 'https://www.langchain.com/page-1/terms-and-conditions',\n    changefreq: '',\n    lastmod: '',\n    priority: ''\n  },\n...42 more items\n]\n */\n",imports:[{local:"SitemapLoader",imported:"SitemapLoader",source:"langchain/document_loaders/web/sitemap"}]}},34543:e=>{e.exports={content:"import { SitemapLoader } from \"langchain/document_loaders/web/sitemap\";\n\nconst loader = new SitemapLoader(\"https://www.langchain.com/\");\n\nconst docs = await loader.load();\nconsole.log(docs.length);\n/**\n26\n */\nconsole.log(docs[0]);\n/**\nDocument {\n  pageContent: '\\n' +\n    '    \\n' +\n    '\\n' +\n    '    \\n' +\n    '    \\n' +\n    '    Blog ArticleApr 8, 2022As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development. The prediction is that by 2029, the job outlook for these two fields will grow by 8%\u2014significantly faster than average. Whether you\u2019re seeking salaried employment or aiming to work in a freelance capacity, a career in web design can offer a variety of employment arrangements, competitive salaries, and opportunities to utilize both technical and creative skill sets.What does a career in web design involve?A career in website design can involve the design, creation, and coding of a range of website types. Other tasks will typically include liaising with clients and discussing website specifications, incorporating feedback, working on graphic design and image editing, and enabling multimedia features such as audio and video.  Requiring a range of creative and technical skills, web designers may be involved in work across a range of industries, including software companies, IT consultancies, web design companies, corporate organizations, and more. In contrast with web developers, web designers tend to play a more creative role, crafting the overall vision and design of a site, and determining how to best incorporate the necessary functionality. However, there can be significant overlap between the roles.Full-stack, back-end, and front-end web developmentThe U.S. Bureau of Labor Statistics (BLS) Occupational Outlook Handbook tends to group web developers and digital designers into one category. However, they define them separately, stating that web developers create and maintain websites and are responsible for the technical aspects including performance and capacity.  Web or digital designers, on the other hand, are responsible for the look and functionality of websites and interfaces. They develop, create, and test the layout, functions, and navigation for usability. Web developers can focus on the back-end, front-end, or full-stack development, and typically utilize a range of programming languages, libraries, and frameworks to do so. Web designers may work more closely with front-end engineers to establish the user-end functionality and appearance of a site.Are web designers in demand in 2022?In our ever-increasingly digital environment, there is a constant need for websites\u2014and therefore for web designers and developers. With 17.4 billion websites in existence as of January 2020, the demand for web developers is only expected to rise.Web designers with significant coding experience are typically in higher demand, and can usually expect a higher salary. Like all jobs, there are likely to be a range of opportunities, some of which are better paid than others. But certain skill sets are basic to web design, most of which are key to how to become a web designer in 2022.const removeHiddenBreakpointLayers = function ie(e){function t(){for(let{hash:r,mediaQuery:i}of e){if(!i)continue;if(window.matchMedia(i).matches)return r}return e[0]?.hash}let o=t();if(o)for(let r of document.querySelectorAll(\".hidden-\"+o))r.parentNode?.removeChild(r);for(let r of document.querySelectorAll(\".ssr-variant\")){for(;r.firstChild;)r.parentNode?.insertBefore(r.firstChild,r);r.parentNode?.removeChild(r)}for(let r of document.querySelectorAll(\"[data-framer-original-sizes]\")){let i=r.getAttribute(\"data-framer-original-sizes\");i===\"\"?r.removeAttribute(\"sizes\"):r.setAttribute(\"sizes\",i),r.removeAttribute(\"data-framer-original-sizes\")}};removeHiddenBreakpointLayers([{\"hash\":\"1ksv3g6\"}])\\n' +\n    '\\n' +\n    '    \\n' +\n    '    \\n' +\n    '    \\n' +\n    '    \\n' +\n    '    \\n' +\n    '\\n' +\n    '\\n',\n  metadata: {\n    changefreq: '',\n    lastmod: '',\n    priority: '',\n    source: 'https://www.langchain.com/blog-detail/starting-a-career-in-design'\n  }\n}\n */\n",imports:[{local:"SitemapLoader",imported:"SitemapLoader",source:"langchain/document_loaders/web/sitemap"}]}}}]);