(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2076],{78847:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(74848),s=n(28453);const r={},c=void 0,a={id:"mdx_components/integration_install_tooltip",title:"integration_install_tooltip",description:"See this section for general instructions on installing integration packages.",source:"@site/docs/mdx_components/integration_install_tooltip.mdx",sourceDirName:"mdx_components",slug:"/mdx_components/integration_install_tooltip",permalink:"/docs/mdx_components/integration_install_tooltip",draft:!1,unlisted:!1,editUrl:"https://langchainjs-kr.site/docs/mdx_components/integration_install_tooltip.mdx",tags:[],version:"current",frontMatter:{}},i={},l=[];function d(e){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"/docs/how_to/installation#installing-integration-packages",children:"this section for general instructions on installing integration packages"}),"."]})})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},21432:(e,t,n)=>{"use strict";n.d(t,{A:()=>P});var o=n(96540),s=n(92303),r=n(34164),c=n(95293),a=n(6342);function i(){const{prism:e}=(0,a.p)(),{colorMode:t}=(0,c.G)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var l=n(17559),d=n(18426),u=n.n(d);const m=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,h={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},f={...h,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},b=Object.keys(h);function g(e,t){const n=e.map((e=>{const{start:n,end:o}=f[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function x(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:s,metastring:r}=t;if(r&&p.test(r)){const e=r.match(p).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,o=u()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return g(["tex"],t);case"lua":case"haskell":case"sql":return g(["lua"],t);case"wasm":return g(["wasm"],t);case"vb":case"vba":case"visual-basic":return g(["vb","rem"],t);case"vbnet":return g(["vbnet","rem"],t);case"batch":return g(["rem"],t);case"basic":return g(["rem","f90"],t);case"fsharp":return g(["js","ml"],t);case"ocaml":case"sml":return g(["ml"],t);case"fortran":return g(["f90"],t);case"cobol":return g(["cobol"],t);default:return g(b,t)}}(o,s),a=n.split("\n"),i=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let u=0;u<a.length;){const e=a[u].match(c);if(!e){u+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?i[l[t]].range+=`${u},`:d[t]?i[d[t]].start=u:m[t]&&(i[m[t]].range+=`${i[m[t]].start}-${u-1},`),a.splice(u,1)}n=a.join("\n");const h={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;u()(n).forEach((e=>{h[e]??=[],h[e].push(t)}))})),{lineClassNames:h,code:n}}const j={codeBlockContainer:"codeBlockContainer_Ckt0"};var k=n(74848);function v(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,s]=e;const r=t[o];r&&"string"==typeof s&&(n[r]=s)})),n}(i());return(0,k.jsx)(t,{...n,style:o,className:(0,r.A)(n.className,j.codeBlockContainer,l.G.common.codeBlock)})}const B={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function y(e){let{children:t,className:n}=e;return(0,k.jsx)(v,{as:"pre",tabIndex:0,className:(0,r.A)(B.codeBlockStandalone,"thin-scrollbar",n),children:(0,k.jsx)("code",{className:B.codeBlockLines,children:t})})}var w=n(89532);const N={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){const[n,s]=(0,o.useState)(),r=(0,o.useCallback)((()=>{s(e.current?.closest("[role=tabpanel][hidden]"))}),[e,s]);(0,o.useEffect)((()=>{r()}),[r]),function(e,t,n){void 0===n&&(n=N);const s=(0,w._q)(t),r=(0,w.Be)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(s);return e&&t.observe(e,r),()=>t.disconnect()}),[e,s,r])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var _=n(71765);const L={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function E(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:s,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=s({line:t,className:(0,r.A)(n,o&&L.codeLine)}),i=t.map(((e,t)=>(0,k.jsx)("span",{...c({token:e})},t)));return(0,k.jsxs)("span",{...a,children:[o?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("span",{className:L.codeLineNumber}),(0,k.jsx)("span",{className:L.codeLineContent,children:i})]}):i,(0,k.jsx)("br",{})]})}var A=n(21312);function S(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function T(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const I={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function R(e){let{code:t,className:n}=e;const[s,c]=(0,o.useState)(!1),a=(0,o.useRef)(void 0),i=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),s=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const r=document.getSelection(),c=r.rangeCount>0&&r.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}o.remove(),c&&(r.removeAllRanges(),r.addRange(c)),s&&s.focus()}(t),c(!0),a.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,k.jsx)("button",{type:"button","aria-label":s?(0,A.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,A.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,A.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.A)("clean-btn",n,I.copyButton,s&&I.copyButtonCopied),onClick:i,children:(0,k.jsxs)("span",{className:I.copyButtonIcons,"aria-hidden":"true",children:[(0,k.jsx)(S,{className:I.copyButtonIcon}),(0,k.jsx)(T,{className:I.copyButtonSuccessIcon})]})})}function M(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const $={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function W(e){let{className:t,onClick:n,isEnabled:o}=e;const s=(0,A.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,k.jsx)("button",{type:"button",onClick:n,className:(0,r.A)("clean-btn",t,o&&$.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,k.jsx)(M,{className:$.wordWrapButtonIcon,"aria-hidden":"true"})})}function H(e){let{children:t,className:n="",metastring:s,title:c,showLineNumbers:l,language:d}=e;const{prism:{defaultLanguage:u,magicComments:p}}=(0,a.p)(),h=function(e){return e?.toLowerCase()}(d??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u),f=i(),b=function(){const[e,t]=(0,o.useState)(!1),[n,s]=(0,o.useState)(!1),r=(0,o.useRef)(null),c=(0,o.useCallback)((()=>{const n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[r,e]),a=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=r.current,n=e>t||r.current.querySelector("code").hasAttribute("style");s(n)}),[r]);return C(r,a),(0,o.useEffect)((()=>{a()}),[e,a]),(0,o.useEffect)((()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)})),[a]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:c}}(),g=function(e){return e?.match(m)?.groups.title??""}(s)||c,{lineClassNames:j,code:y}=x(t,{metastring:s,language:h,magicComments:p}),w=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(s);return(0,k.jsxs)(v,{as:"div",className:(0,r.A)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`),children:[g&&(0,k.jsx)("div",{className:B.codeBlockTitle,children:g}),(0,k.jsxs)("div",{className:B.codeBlockContent,children:[(0,k.jsx)(_.f4,{theme:f,code:y,language:h??"text",children:e=>{let{className:t,style:n,tokens:o,getLineProps:s,getTokenProps:c}=e;return(0,k.jsx)("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,r.A)(t,B.codeBlock,"thin-scrollbar"),style:n,children:(0,k.jsx)("code",{className:(0,r.A)(B.codeBlockLines,w&&B.codeBlockLinesWithNumbering),children:o.map(((e,t)=>(0,k.jsx)(E,{line:e,getLineProps:s,getTokenProps:c,classNames:j[t],showLineNumbers:w},t)))})})}}),(0,k.jsxs)("div",{className:B.buttonGroup,children:[(b.isEnabled||b.isCodeScrollable)&&(0,k.jsx)(W,{className:B.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),(0,k.jsx)(R,{className:B.codeButton,code:y})]})]})]})}function P(e){let{children:t,...n}=e;const r=(0,s.A)(),c=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),a="string"==typeof c?H:y;return(0,k.jsx)(a,{...n,children:c},String(r))}},64428:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(96540);var o=n(21432),s=n(74848);function r(e){let{imports:t}=e;return(0,s.jsxs)("div",{style:{paddingTop:"1.3rem",background:"var(--prism-background-color)",color:"var(--prism-color)",marginTop:"calc(-1 * var(--ifm-leading) - 5px)",marginBottom:"var(--ifm-leading)",boxShadow:"var(--ifm-global-shadow-lw)",borderBottomLeftRadius:"var(--ifm-code-border-radius)",borderBottomRightRadius:"var(--ifm-code-border-radius)"},children:[(0,s.jsx)("h4",{style:{paddingLeft:"0.65rem",marginBottom:"0.45rem"},children:"API Reference:"}),(0,s.jsx)("ul",{style:{paddingBottom:"1rem"},children:t.map((e=>{let{imported:t,source:n,docs:o}=e;return(0,s.jsxs)("li",{children:[(0,s.jsx)("a",{href:o,children:(0,s.jsx)("span",{children:t})})," ","from ",(0,s.jsx)("code",{children:n})]},t)}))})]})}function c(e){let{children:t,...n}=e;return"string"==typeof t?(0,s.jsx)(o.A,{...n,children:t}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{...n,children:t.content}),(0,s.jsx)(r,{imports:t.imports})]})}},18426:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,s,r]=t;if(o&&r){o=parseInt(o),r=parseInt(r);const e=o<r?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(r+=e);for(let t=o;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},28453:(e,t,n)=>{"use strict";n.d(t,{R:()=>c,x:()=>a});var o=n(96540);const s={},r=o.createContext(s);function c(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);