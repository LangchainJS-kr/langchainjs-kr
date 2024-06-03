"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8047],{52783:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=r(74848),s=r(28453),o=r(5871);const i={label:"Web Loaders",hide_table_of_contents:!0},l="Web Loaders",a={id:"integrations/document_loaders/web_loaders/index",title:"Web Loaders",description:"These loaders are used to load web resources.",source:"@site/docs/integrations/document_loaders/web_loaders/index.mdx",sourceDirName:"integrations/document_loaders/web_loaders",slug:"/integrations/document_loaders/web_loaders/",permalink:"/docs/integrations/document_loaders/web_loaders/",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/integrations/document_loaders/web_loaders/index.mdx",tags:[],version:"current",frontMatter:{label:"Web Loaders",hide_table_of_contents:!0},sidebar:"integrations",previous:{title:"Unstructured",permalink:"/docs/integrations/document_loaders/file_loaders/unstructured"},next:{title:"Cheerio",permalink:"/docs/integrations/document_loaders/web_loaders/web_cheerio"}},c={},d=[];function u(e){const t={h1:"h1",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"web-loaders",children:"Web Loaders"}),"\n",(0,n.jsx)(t.p,{children:"These loaders are used to load web resources."}),"\n","\n",(0,n.jsx)(o.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},5871:(e,t,r)=>{r.d(t,{A:()=>N});var n=r(96540),s=r(34164),o=r(84142),i=r(28774),l=r(44586);const a=["zero","one","two","few","many","other"];function c(e){return a.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,l.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function m(){const e=u();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),o=r.pluralForms.indexOf(s);return n[Math.min(o,n.length-1)]}(r,t,e)}}var h=r(16654),f=r(21312),p=r(51107);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var b=r(74848);function x(e){let{href:t,children:r}=e;return(0,b.jsx)(i.A,{href:t,className:(0,s.A)("card padding--lg",g.cardContainer),children:r})}function _(e){let{href:t,icon:r,title:n,description:o}=e;return(0,b.jsxs)(x,{href:t,children:[(0,b.jsxs)(p.A,{as:"h2",className:(0,s.A)("text--truncate",g.cardTitle),title:n,children:[r," ",n]}),o&&(0,b.jsx)("p",{className:(0,s.A)("text--truncate",g.cardDescription),title:o,children:o})]})}function w(e){let{item:t}=e;const r=(0,o.Nr)(t),n=function(){const{selectMessage:e}=m();return t=>e(t,(0,f.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,b.jsx)(_,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function j(e){let{item:t}=e;const r=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.cC)(t.docId??void 0);return(0,b.jsx)(_,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return(0,b.jsx)(j,{item:t});case"category":return(0,b.jsx)(w,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,o.$S)();return(0,b.jsx)(N,{items:r.items,className:t})}function N(e){const{items:t,className:r}=e;if(!t)return(0,b.jsx)(y,{...e});const n=(0,o.d1)(t);return(0,b.jsx)("section",{className:(0,s.A)("row",r),children:n.map(((e,t)=>(0,b.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,b.jsx)(k,{item:e})},t)))})}}}]);