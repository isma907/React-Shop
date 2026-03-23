import{A as e,B as t,C as n,D as r,E as i,F as a,G as o,H as s,I as c,J as l,K as u,L as d,M as f,N as p,P as m,Q as h,R as g,S as _,T as v,U as y,V as b,W as x,X as S,Y as C,Z as w,_ as T,a as E,b as D,c as ee,d as O,f as k,g as A,h as j,i as te,j as M,k as ne,l as re,m as N,n as ie,o as ae,p as P,q as F,r as oe,s as I,t as se,u as ce,v as L,w as le,x as R,y as z,z as B}from"./index-D9WBmOjp.js";var ue=!1,de=e=>e!=null,fe=e=>e.filter(de);function pe(e){return(...t)=>{for(let n of e)n&&n(...t)}}var V=e=>typeof e==`function`&&!e.length?e():e,me=e=>Array.isArray(e)?e:e?[e]:[];function he(e,...t){return typeof e==`function`?e(...t):e}var ge=ue?e=>r()?g(e):e:g;function _e(e,t,n,r){let i=e.length,a=t.length,o=0;if(!a){for(;o<i;o++)n(e[o]);return}if(!i){for(;o<a;o++)r(t[o]);return}for(;o<a&&t[o]===e[o];o++);let s,c;t=t.slice(o),e=e.slice(o);for(s of t)e.includes(s)||r(s);for(c of e)t.includes(c)||n(c)}function ve(e){let[t,n]=R(),r=e?.throw?(e,t)=>{throw n(e instanceof Error?e:Error(t)),e}:(e,t)=>{n(e instanceof Error?e:Error(t))},i=e?.api?Array.isArray(e.api)?e.api:[e.api]:[globalThis.localStorage].filter(Boolean),a=e?.prefix?`${e.prefix}.`:``,o=new Map,s=new Proxy({},{get(t,n){let s=o.get(n);s||(s=R(void 0,{equals:!1}),o.set(n,s)),s[0]();let c=i.reduce((e,t)=>{if(e!==null||!t)return e;try{return t.getItem(`${a}${n}`)}catch(e){return r(e,`Error reading ${a}${n} from ${t.name}`),null}},null);return c!==null&&e?.deserializer?e.deserializer(c,n,e.options):c}});return e?.sync!==!1&&B(()=>{let e=e=>{let t=!1;i.forEach(n=>{try{n!==e.storageArea&&e.key&&e.newValue!==n.getItem(e.key)&&(e.newValue?n.setItem(e.key,e.newValue):n.removeItem(e.key),t=!0)}catch(t){r(t,`Error synching api ${n.name} from storage event (${e.key}=${e.newValue})`)}}),t&&e.key&&o.get(e.key)?.[1]()};`addEventListener`in globalThis?(globalThis.addEventListener(`storage`,e),g(()=>globalThis.removeEventListener(`storage`,e))):(i.forEach(t=>t.addEventListener?.(`storage`,e)),g(()=>i.forEach(t=>t.removeEventListener?.(`storage`,e))))}),[s,(t,n,s)=>{let c=e?.serializer?e.serializer(n,t,s??e.options):n,l=`${a}${t}`;i.forEach(e=>{try{e.getItem(l)!==c&&e.setItem(l,c)}catch(n){r(n,`Error setting ${a}${t} to ${c} in ${e.name}`)}});let u=o.get(t);u&&u[1]()},{clear:()=>i.forEach(e=>{try{e.clear()}catch(t){r(t,`Error clearing ${e.name}`)}}),error:t,remove:e=>i.forEach(t=>{try{t.removeItem(`${a}${e}`)}catch(n){r(n,`Error removing ${a}${e} from ${t.name}`)}}),toJSON:()=>{let t={},n=(n,r)=>{if(!t.hasOwnProperty(n)){let i=r&&e?.deserializer?e.deserializer(r,n,e.options):r;i&&(t[n]=i)}};return i.forEach(e=>{if(typeof e.getAll==`function`){let t;try{t=e.getAll()}catch(t){r(t,`Error getting all values from in ${e.name}`)}for(let e of t)n(e,t[e])}else{let i=0,a;try{for(;a=e.key(i++);)t.hasOwnProperty(a)||n(a,e.getItem(a))}catch(t){r(t,`Error getting all values from ${e.name}`)}}}),t}}]}var ye=ve,be=e=>(typeof e.clear==`function`||(e.clear=()=>{let t;for(;t=e.key(0);)e.removeItem(t)}),e),xe=e=>{if(!e)return``;let t=``;for(let n in e){if(!e.hasOwnProperty(n))continue;let r=e[n];t+=r instanceof Date?`; ${n}=${r.toUTCString()}`:typeof r==`boolean`?`; ${n}`:`; ${n}=${r}`}return t},Se=be({_cookies:[globalThis.document,`cookie`],getItem:e=>Se._cookies[0][Se._cookies[1]].match(`(^|;)\\s*`+e+`\\s*=\\s*([^;]+)`)?.pop()??null,setItem:(e,t,n)=>{let r=Se.getItem(e);Se._cookies[0][Se._cookies[1]]=`${e}=${t}${xe(n)}`;let i=Object.assign(new Event(`storage`),{key:e,oldValue:r,newValue:t,url:globalThis.document.URL,storageArea:Se});window.dispatchEvent(i)},removeItem:e=>{Se._cookies[0][Se._cookies[1]]=`${e}=deleted${xe({expires:new Date(0)})}`},key:e=>{let t=null,n=0;return Se._cookies[0][Se._cookies[1]].replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,(r,i)=>(!t&&i&&n++===e&&(t=i),``)),t},get length(){let e=0;return Se._cookies[0][Se._cookies[1]].replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g,t=>(e+=t?1:0,``)),e}}),Ce=1024,we=796,Te=700,Ee=`bottom-right`,De=`bottom`,Oe=`system`,ke=!1,Ae=500,je=500,Me=500,Ne=Object.keys(y)[0],Pe=1,Fe=Object.keys(c)[0],Ie=A({client:void 0,onlineManager:void 0,queryFlavor:``,version:``,shadowDOMTarget:void 0});function H(){return w(Ie)}var Le=class extends Error{},Re=A(void 0),ze=e=>{let[t,r]=R(null),i=()=>{let e=t();e!=null&&(e.close(),r(null))},a=(i,a)=>{if(t()!=null)return;let o=window.open(``,`TSQD-Devtools-Panel`,`width=${i},height=${a},popup`);if(!o)throw new Le(`Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.`);o.document.head.innerHTML=``,o.document.body.innerHTML=``,k(o.document),o.document.title=`TanStack Query Devtools`,o.document.body.style.margin=`0`,o.addEventListener(`pagehide`,()=>{e.setLocalStore(`pip_open`,`false`),r(null)}),[...(H().shadowDOMTarget||document).styleSheets].forEach(e=>{try{let t=[...e.cssRules].map(e=>e.cssText).join(``),n=document.createElement(`style`),r=e.ownerNode,i=``;r&&`id`in r&&(i=r.id),i&&n.setAttribute(`id`,i),n.textContent=t,o.document.head.appendChild(n)}catch{let t=document.createElement(`link`);if(e.href==null)return;t.rel=`stylesheet`,t.type=e.type,t.media=e.media.toString(),t.href=e.href,o.document.head.appendChild(t)}}),n([`focusin`,`focusout`,`pointermove`,`keydown`,`pointerdown`,`pointerup`,`click`,`mousedown`,`input`],o.document),e.setLocalStore(`pip_open`,`true`),r(o)};T(()=>{if((e.localStore.pip_open??`false`)===`true`&&!e.disabled)try{a(Number(window.innerWidth),Number(e.localStore.height||je))}catch(t){if(t instanceof Le){e.setLocalStore(`pip_open`,`false`),e.setLocalStore(`open`,`false`);return}throw t}}),T(()=>{let e=(H().shadowDOMTarget||document).querySelector(`#_goober`),n=t();if(e&&n){let t=new MutationObserver(()=>{let t=(H().shadowDOMTarget||n.document).querySelector(`#_goober`);t&&(t.textContent=e.textContent)});t.observe(e,{childList:!0,subtree:!0,characterDataOldValue:!0}),g(()=>{t.disconnect()})}});let o=L(()=>({pipWindow:t(),requestPipWindow:a,closePipWindow:i,disabled:e.disabled??!1}));return N(Re.Provider,{value:o,get children(){return e.children}})},Be=()=>L(()=>{let e=w(Re);if(!e)throw Error(`usePiPWindow must be used within a PiPProvider`);return e()}),Ve=A(()=>`dark`);function U(){return w(Ve)}var He={À:`A`,Á:`A`,Â:`A`,Ã:`A`,Ä:`A`,Å:`A`,Ấ:`A`,Ắ:`A`,Ẳ:`A`,Ẵ:`A`,Ặ:`A`,Æ:`AE`,Ầ:`A`,Ằ:`A`,Ȃ:`A`,Ç:`C`,Ḉ:`C`,È:`E`,É:`E`,Ê:`E`,Ë:`E`,Ế:`E`,Ḗ:`E`,Ề:`E`,Ḕ:`E`,Ḝ:`E`,Ȇ:`E`,Ì:`I`,Í:`I`,Î:`I`,Ï:`I`,Ḯ:`I`,Ȋ:`I`,Ð:`D`,Ñ:`N`,Ò:`O`,Ó:`O`,Ô:`O`,Õ:`O`,Ö:`O`,Ø:`O`,Ố:`O`,Ṍ:`O`,Ṓ:`O`,Ȏ:`O`,Ù:`U`,Ú:`U`,Û:`U`,Ü:`U`,Ý:`Y`,à:`a`,á:`a`,â:`a`,ã:`a`,ä:`a`,å:`a`,ấ:`a`,ắ:`a`,ẳ:`a`,ẵ:`a`,ặ:`a`,æ:`ae`,ầ:`a`,ằ:`a`,ȃ:`a`,ç:`c`,ḉ:`c`,è:`e`,é:`e`,ê:`e`,ë:`e`,ế:`e`,ḗ:`e`,ề:`e`,ḕ:`e`,ḝ:`e`,ȇ:`e`,ì:`i`,í:`i`,î:`i`,ï:`i`,ḯ:`i`,ȋ:`i`,ð:`d`,ñ:`n`,ò:`o`,ó:`o`,ô:`o`,õ:`o`,ö:`o`,ø:`o`,ố:`o`,ṍ:`o`,ṓ:`o`,ȏ:`o`,ù:`u`,ú:`u`,û:`u`,ü:`u`,ý:`y`,ÿ:`y`,Ā:`A`,ā:`a`,Ă:`A`,ă:`a`,Ą:`A`,ą:`a`,Ć:`C`,ć:`c`,Ĉ:`C`,ĉ:`c`,Ċ:`C`,ċ:`c`,Č:`C`,č:`c`,C̆:`C`,c̆:`c`,Ď:`D`,ď:`d`,Đ:`D`,đ:`d`,Ē:`E`,ē:`e`,Ĕ:`E`,ĕ:`e`,Ė:`E`,ė:`e`,Ę:`E`,ę:`e`,Ě:`E`,ě:`e`,Ĝ:`G`,Ǵ:`G`,ĝ:`g`,ǵ:`g`,Ğ:`G`,ğ:`g`,Ġ:`G`,ġ:`g`,Ģ:`G`,ģ:`g`,Ĥ:`H`,ĥ:`h`,Ħ:`H`,ħ:`h`,Ḫ:`H`,ḫ:`h`,Ĩ:`I`,ĩ:`i`,Ī:`I`,ī:`i`,Ĭ:`I`,ĭ:`i`,Į:`I`,į:`i`,İ:`I`,ı:`i`,Ĳ:`IJ`,ĳ:`ij`,Ĵ:`J`,ĵ:`j`,Ķ:`K`,ķ:`k`,Ḱ:`K`,ḱ:`k`,K̆:`K`,k̆:`k`,Ĺ:`L`,ĺ:`l`,Ļ:`L`,ļ:`l`,Ľ:`L`,ľ:`l`,Ŀ:`L`,ŀ:`l`,Ł:`l`,ł:`l`,Ḿ:`M`,ḿ:`m`,M̆:`M`,m̆:`m`,Ń:`N`,ń:`n`,Ņ:`N`,ņ:`n`,Ň:`N`,ň:`n`,ŉ:`n`,N̆:`N`,n̆:`n`,Ō:`O`,ō:`o`,Ŏ:`O`,ŏ:`o`,Ő:`O`,ő:`o`,Œ:`OE`,œ:`oe`,P̆:`P`,p̆:`p`,Ŕ:`R`,ŕ:`r`,Ŗ:`R`,ŗ:`r`,Ř:`R`,ř:`r`,R̆:`R`,r̆:`r`,Ȓ:`R`,ȓ:`r`,Ś:`S`,ś:`s`,Ŝ:`S`,ŝ:`s`,Ş:`S`,Ș:`S`,ș:`s`,ş:`s`,Š:`S`,š:`s`,Ţ:`T`,ţ:`t`,ț:`t`,Ț:`T`,Ť:`T`,ť:`t`,Ŧ:`T`,ŧ:`t`,T̆:`T`,t̆:`t`,Ũ:`U`,ũ:`u`,Ū:`U`,ū:`u`,Ŭ:`U`,ŭ:`u`,Ů:`U`,ů:`u`,Ű:`U`,ű:`u`,Ų:`U`,ų:`u`,Ȗ:`U`,ȗ:`u`,V̆:`V`,v̆:`v`,Ŵ:`W`,ŵ:`w`,Ẃ:`W`,ẃ:`w`,X̆:`X`,x̆:`x`,Ŷ:`Y`,ŷ:`y`,Ÿ:`Y`,Y̆:`Y`,y̆:`y`,Ź:`Z`,ź:`z`,Ż:`Z`,ż:`z`,Ž:`Z`,ž:`z`,ſ:`s`,ƒ:`f`,Ơ:`O`,ơ:`o`,Ư:`U`,ư:`u`,Ǎ:`A`,ǎ:`a`,Ǐ:`I`,ǐ:`i`,Ǒ:`O`,ǒ:`o`,Ǔ:`U`,ǔ:`u`,Ǖ:`U`,ǖ:`u`,Ǘ:`U`,ǘ:`u`,Ǚ:`U`,ǚ:`u`,Ǜ:`U`,ǜ:`u`,Ứ:`U`,ứ:`u`,Ṹ:`U`,ṹ:`u`,Ǻ:`A`,ǻ:`a`,Ǽ:`AE`,ǽ:`ae`,Ǿ:`O`,ǿ:`o`,Þ:`TH`,þ:`th`,Ṕ:`P`,ṕ:`p`,Ṥ:`S`,ṥ:`s`,X́:`X`,x́:`x`,Ѓ:`Г`,ѓ:`г`,Ќ:`К`,ќ:`к`,A̋:`A`,a̋:`a`,E̋:`E`,e̋:`e`,I̋:`I`,i̋:`i`,Ǹ:`N`,ǹ:`n`,Ồ:`O`,ồ:`o`,Ṑ:`O`,ṑ:`o`,Ừ:`U`,ừ:`u`,Ẁ:`W`,ẁ:`w`,Ỳ:`Y`,ỳ:`y`,Ȁ:`A`,ȁ:`a`,Ȅ:`E`,ȅ:`e`,Ȉ:`I`,ȉ:`i`,Ȍ:`O`,ȍ:`o`,Ȑ:`R`,ȑ:`r`,Ȕ:`U`,ȕ:`u`,B̌:`B`,b̌:`b`,Č̣:`C`,č̣:`c`,Ê̌:`E`,ê̌:`e`,F̌:`F`,f̌:`f`,Ǧ:`G`,ǧ:`g`,Ȟ:`H`,ȟ:`h`,J̌:`J`,ǰ:`j`,Ǩ:`K`,ǩ:`k`,M̌:`M`,m̌:`m`,P̌:`P`,p̌:`p`,Q̌:`Q`,q̌:`q`,Ř̩:`R`,ř̩:`r`,Ṧ:`S`,ṧ:`s`,V̌:`V`,v̌:`v`,W̌:`W`,w̌:`w`,X̌:`X`,x̌:`x`,Y̌:`Y`,y̌:`y`,A̧:`A`,a̧:`a`,B̧:`B`,b̧:`b`,Ḑ:`D`,ḑ:`d`,Ȩ:`E`,ȩ:`e`,Ɛ̧:`E`,ɛ̧:`e`,Ḩ:`H`,ḩ:`h`,I̧:`I`,i̧:`i`,Ɨ̧:`I`,ɨ̧:`i`,M̧:`M`,m̧:`m`,O̧:`O`,o̧:`o`,Q̧:`Q`,q̧:`q`,U̧:`U`,u̧:`u`,X̧:`X`,x̧:`x`,Z̧:`Z`,z̧:`z`},Ue=Object.keys(He).join(`|`),We=new RegExp(Ue,`g`);function Ge(e){return e.replace(We,e=>He[e])}var Ke={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function qe(e,t,n){if(n||={},n.threshold=n.threshold??Ke.MATCHES,!n.accessors){let r=Je(e,t,n);return{rankedValue:e,rank:r,accessorIndex:-1,accessorThreshold:n.threshold,passed:r>=n.threshold}}let r=$e(e,n.accessors),i={rankedValue:e,rank:Ke.NO_MATCH,accessorIndex:-1,accessorThreshold:n.threshold,passed:!1};for(let e=0;e<r.length;e++){let a=r[e],o=Je(a.itemValue,t,n),{minRanking:s,maxRanking:c,threshold:l=n.threshold}=a.attributes;o<s&&o>=Ke.MATCHES?o=s:o>c&&(o=c),o=Math.min(o,c),o>=l&&o>i.rank&&(i.rank=o,i.passed=!0,i.accessorIndex=e,i.accessorThreshold=l,i.rankedValue=a.itemValue)}return i}function Je(e,t,n){return e=Ze(e,n),t=Ze(t,n),t.length>e.length?Ke.NO_MATCH:e===t?Ke.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),t=t.toLowerCase(),e===t?Ke.EQUAL:e.startsWith(t)?Ke.STARTS_WITH:e.includes(` ${t}`)?Ke.WORD_STARTS_WITH:e.includes(t)?Ke.CONTAINS:t.length===1?Ke.NO_MATCH:Ye(e).includes(t)?Ke.ACRONYM:Xe(e,t))}function Ye(e){let t=``;return e.split(` `).forEach(e=>{e.split(`-`).forEach(e=>{t+=e.substr(0,1)})}),t}function Xe(e,t){let n=0,r=0;function i(e,t,r){for(let i=r,a=t.length;i<a;i++)if(t[i]===e)return n+=1,i+1;return-1}function a(e){let r=1/e,i=n/t.length;return Ke.MATCHES+i*r}let o=i(t[0],e,0);if(o<0)return Ke.NO_MATCH;r=o;for(let n=1,a=t.length;n<a;n++){let a=t[n];if(r=i(a,e,r),!(r>-1))return Ke.NO_MATCH}return a(r-o)}function Ze(e,t){let{keepDiacritics:n}=t;return e=`${e}`,n||(e=Ge(e)),e}function Qe(e,t){let n=t;typeof t==`object`&&(n=t.accessor);let r=n(e);return r==null?[]:Array.isArray(r)?r:[String(r)]}function $e(e,t){let n=[];for(let r=0,i=t.length;r<i;r++){let i=t[r],a=tt(i),o=Qe(e,i);for(let e=0,t=o.length;e<t;e++)n.push({itemValue:o[e],attributes:a})}return n}var et={maxRanking:1/0,minRanking:-1/0};function tt(e){return typeof e==`function`?et:{...et,...e}}var nt={data:``},rt=e=>{if(typeof window==`object`){let t=(e?e.querySelector(`#_goober`):window._goober)||Object.assign(document.createElement(`style`),{innerHTML:` `,id:`_goober`});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||nt},it=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,at=/\/\*[^]*?\*\/|  +/g,ot=/\n+/g,st=(e,t)=>{let n=``,r=``,i=``;for(let a in e){let o=e[a];a[0]==`@`?a[1]==`i`?n=a+` `+o+`;`:r+=a[1]==`f`?st(o,a):a+`{`+st(o,a[1]==`k`?``:t)+`}`:typeof o==`object`?r+=st(o,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+` `+t:t)):a):o!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,`-$&`).toLowerCase(),i+=st.p?st.p(a,o):a+`:`+o+`;`)}return n+(t&&i?t+`{`+i+`}`:i)+r},ct={},lt=e=>{if(typeof e==`object`){let t=``;for(let n in e)t+=n+lt(e[n]);return t}return e},ut=(e,t,n,r,i)=>{let a=lt(e),o=ct[a]||(ct[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return`go`+n})(a));if(!ct[o]){let t=a===e?(e=>{let t,n,r=[{}];for(;t=it.exec(e.replace(at,``));)t[4]?r.shift():t[3]?(n=t[3].replace(ot,` `).trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(ot,` `).trim();return r[0]})(e):e;ct[o]=st(i?{[`@keyframes `+o]:t}:t,n?``:`.`+o)}let s=n&&ct.g?ct.g:null;return n&&(ct.g=ct[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):t.data.indexOf(e)===-1&&(t.data=n?e+t.data:t.data+e)})(ct[o],t,r,s),o},dt=(e,t,n)=>e.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?`.`+t:e&&typeof e==`object`?e.props?``:st(e,``):!1===e?``:e}return e+r+(a??``)},``);function W(e){let t=this||{},n=e.call?e(t.p):e;return ut(n.unshift?n.raw?dt(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,rt(t.target),t.g,t.o,t.k)}W.bind({g:1}),W.bind({k:1});function ft(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=ft(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function G(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=ft(e))&&(r&&(r+=` `),r+=t);return r}function pt(e,t){let n=l(e),{onChange:r}=t,i=new Set(t.appear?void 0:n),a=new WeakSet,[o,s]=R([],{equals:!1}),[c]=h(),u=e=>{s(t=>(t.push.apply(t,e),t));for(let t of e)a.delete(t)},d=(e,t,n)=>e.splice(n,0,t);return L(t=>{let n=o(),s=e();if(s[se],l(c))return c(),t;if(n.length){let e=t.filter(e=>!n.includes(e));return n.length=0,r({list:e,added:[],removed:[],unchanged:e,finishRemoved:u}),e}return l(()=>{let e=new Set(s),n=s.slice(),o=[],c=[],l=[];for(let e of s)(i.has(e)?l:o).push(e);let f=!o.length;for(let r=0;r<t.length;r++){let i=t[r];e.has(i)||(a.has(i)||(c.push(i),a.add(i)),d(n,i,r)),f&&i!==n[r]&&(f=!1)}return!c.length&&f?t:(r({list:n,added:o,removed:c,unchanged:l,finishRemoved:u}),i=e,n)})},t.appear?[]:n.slice())}function mt(...e){return pe(e)}var ht=e=>e instanceof Element;function gt(e,t){if(t(e))return e;if(typeof e==`function`&&!e.length)return gt(e(),t);if(Array.isArray(e)){let n=[];for(let r of e){let e=gt(r,t);e&&(Array.isArray(e)?n.push.apply(n,e):n.push(e))}return n.length?n:null}return null}function _t(e,t=ht,n=ht){let r=L(e),i=L(()=>gt(r(),t));return i.toArray=()=>{let e=i();return Array.isArray(e)?e:e?[e]:[]},i}function vt(e){return L(()=>{let t=e.name||`s`;return{enterActive:(e.enterActiveClass||t+`-enter-active`).split(` `),enter:(e.enterClass||t+`-enter`).split(` `),enterTo:(e.enterToClass||t+`-enter-to`).split(` `),exitActive:(e.exitActiveClass||t+`-exit-active`).split(` `),exit:(e.exitClass||t+`-exit`).split(` `),exitTo:(e.exitToClass||t+`-exit-to`).split(` `),move:(e.moveClass||t+`-move`).split(` `)}})}function yt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function bt(e,t,n,r){let{onBeforeEnter:i,onEnter:a,onAfterEnter:o}=t;i?.(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return r?.();a?.(n,()=>s())}),yt(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!a||a.length<2)&&(n.addEventListener(`transitionend`,s),n.addEventListener(`animationend`,s))});function s(t){(!t||t.target===n)&&(n.removeEventListener(`transitionend`,s),n.removeEventListener(`animationend`,s),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),o?.(n))}}function xt(e,t,n,r){let{onBeforeExit:i,onExit:a,onAfterExit:o}=t;if(!n.parentNode)return r?.();i?.(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),a?.(n,()=>s()),yt(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!a||a.length<2)&&(n.addEventListener(`transitionend`,s),n.addEventListener(`animationend`,s))});function s(t){(!t||t.target===n)&&(r?.(),n.removeEventListener(`transitionend`,s),n.removeEventListener(`animationend`,s),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),o?.(n))}}var St=e=>{let t=vt(e);return pt(_t(()=>e.children).toArray,{appear:e.appear,onChange({added:n,removed:r,finishRemoved:i,list:a}){let o=t();for(let t of n)bt(o,e,t);let s=[];for(let e of a)e.isConnected&&(e instanceof HTMLElement||e instanceof SVGElement)&&s.push({el:e,rect:e.getBoundingClientRect()});queueMicrotask(()=>{let e=[];for(let{el:t,rect:n}of s)if(t.isConnected){let r=t.getBoundingClientRect(),i=n.left-r.left,a=n.top-r.top;(i||a)&&(t.style.transform=`translate(${i}px, ${a}px)`,t.style.transitionDuration=`0s`,e.push(t))}document.body.offsetHeight;for(let t of e){let e=function(n){(n.target===t||/transform$/.test(n.propertyName))&&(t.removeEventListener(`transitionend`,e),t.classList.remove(...o.move))};t.classList.add(...o.move),t.style.transform=t.style.transitionDuration=``,t.addEventListener(`transitionend`,e)}});for(let t of r)xt(o,e,t,()=>i([t]))}})},Ct=Symbol(`fallback`);function wt(e){for(let t of e)t.dispose()}function Tt(e,t,n,r={}){let i=new Map;return g(()=>wt(i.values())),()=>{let n=e()||[];return n[se],l(()=>{if(!n.length)return wt(i.values()),i.clear(),r.fallback?[D(e=>(i.set(Ct,{dispose:e}),r.fallback()))]:[];let e=Array(n.length),o=i.get(Ct);if(!i.size||o){o?.dispose(),i.delete(Ct);for(let r=0;r<n.length;r++){let i=n[r],o=t(i,r);a(e,i,r,o)}return e}let s=new Set(i.keys());for(let r=0;r<n.length;r++){let o=n[r],c=t(o,r);s.delete(c);let l=i.get(c);l?(e[r]=l.mapped,l.setIndex?.(r),l.setItem(()=>o)):a(e,o,r,c)}for(let e of s)i.get(e)?.dispose(),i.delete(e);return e})};function a(e,t,r,a){D(o=>{let[s,c]=R(t),l={setItem:c,dispose:o};if(n.length>1){let[e,t]=R(r);l.setIndex=t,l.mapped=n(s,e)}else l.mapped=n(s);i.set(a,l),e[r]=l.mapped})}}function Et(e){let{by:t}=e;return L(Tt(()=>e.each,typeof t==`function`?t:e=>e[t],e.children,`fallback`in e?{fallback:()=>e.fallback}:void 0))}function Dt(e,t,n,r){return e.addEventListener(t,n,r),ge(e.removeEventListener.bind(e,t,n,r))}function Ot(e,t,n,r){let i=()=>{me(V(e)).forEach(e=>{e&&me(V(t)).forEach(t=>Dt(e,t,n,r))})};typeof e==`function`?T(i):z(i)}function kt(e,t){let n=new ResizeObserver(e);return g(n.disconnect.bind(n)),{observe:e=>n.observe(e,t),unobserve:n.unobserve.bind(n)}}function At(e,t,n){let r=new WeakMap,{observe:i,unobserve:a}=kt(e=>{for(let n of e){let{contentRect:e,target:i}=n,a=Math.round(e.width),o=Math.round(e.height),s=r.get(i);(!s||s.width!==a||s.height!==o)&&(t(e,i,n),r.set(i,{width:a,height:o}))}},n);T(t=>{let n=fe(me(V(e)));return _e(n,t,i,a),n},[])}var jt=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function Mt(e){let t={},n;for(;n=jt.exec(e);)t[n[1]]=n[2];return t}function Nt(e,t){if(typeof e==`string`){if(typeof t==`string`)return`${e};${t}`;e=Mt(e)}else typeof t==`string`&&(t=Mt(t));return{...e,...t}}function Pt(e,t,n=-1){return n in e?[...e.slice(0,n),t,...e.slice(n)]:[...e,t]}function Ft(e,t){let n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function It(e){return typeof e==`number`}function Lt(e){return Object.prototype.toString.call(e)===`[object String]`}function Rt(e){return typeof e==`function`}function zt(e){return t=>`${e()}-${t}`}function Bt(e,t){return e?e===t||e.contains(t):!1}function Vt(e,t=!1){let{activeElement:n}=Ut(e);if(!n?.nodeName)return null;if(Wt(n)&&n.contentDocument)return Vt(n.contentDocument.body,t);if(t){let e=n.getAttribute(`aria-activedescendant`);if(e){let t=Ut(n).getElementById(e);if(t)return t}}return n}function Ht(e){return Ut(e).defaultView||window}function Ut(e){return e?e.ownerDocument||e:document}function Wt(e){return e.tagName===`IFRAME`}var Gt=(e=>(e.Escape=`Escape`,e.Enter=`Enter`,e.Tab=`Tab`,e.Space=` `,e.ArrowDown=`ArrowDown`,e.ArrowLeft=`ArrowLeft`,e.ArrowRight=`ArrowRight`,e.ArrowUp=`ArrowUp`,e.End=`End`,e.Home=`Home`,e.PageDown=`PageDown`,e.PageUp=`PageUp`,e))(Gt||{});function Kt(e){return typeof window<`u`&&window.navigator!=null?e.test(window.navigator.userAgentData?.platform||window.navigator.platform):!1}function qt(){return Kt(/^Mac/i)}function Jt(){return Kt(/^iPhone/i)}function Yt(){return Kt(/^iPad/i)||qt()&&navigator.maxTouchPoints>1}function Xt(){return Jt()||Yt()}function Zt(){return qt()||Xt()}function K(e,t){return t&&(Rt(t)?t(e):t[0](t[1],e)),e?.defaultPrevented}function q(e){return t=>{for(let n of e)K(t,n)}}function Qt(e){return qt()?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey}function J(e){if(e)if(en())e.focus({preventScroll:!0});else{let t=tn(e);e.focus(),nn(t)}}var $t=null;function en(){if($t==null){$t=!1;try{document.createElement(`div`).focus({get preventScroll(){return $t=!0,!0}})}catch{}}return $t}function tn(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}function nn(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}var rn=[`input:not([type='hidden']):not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`button:not([disabled])`,`a[href]`,`area[href]`,`[tabindex]`,`iframe`,`object`,`embed`,`audio[controls]`,`video[controls]`,`[contenteditable]:not([contenteditable='false'])`],an=[...rn,`[tabindex]:not([tabindex="-1"]):not([disabled])`],on=`${rn.join(`:not([hidden]),`)},[tabindex]:not([disabled]):not([hidden])`,sn=an.join(`:not([hidden]):not([tabindex="-1"]),`);function cn(e,t){let n=Array.from(e.querySelectorAll(on)).filter(ln);return t&&ln(e)&&n.unshift(e),n.forEach((e,t)=>{if(Wt(e)&&e.contentDocument){let r=e.contentDocument.body,i=cn(r,!1);n.splice(t,1,...i)}}),n}function ln(e){return un(e)&&!dn(e)}function un(e){return e.matches(on)&&fn(e)}function dn(e){return Number.parseInt(e.getAttribute(`tabindex`)||`0`,10)<0}function fn(e,t){return e.nodeName!==`#comment`&&pn(e)&&mn(e,t)&&(!e.parentElement||fn(e.parentElement,e))}function pn(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;let{display:t,visibility:n}=e.style,r=t!==`none`&&n!==`hidden`&&n!==`collapse`;if(r){if(!e.ownerDocument.defaultView)return r;let{getComputedStyle:t}=e.ownerDocument.defaultView,{display:n,visibility:i}=t(e);r=n!==`none`&&i!==`hidden`&&i!==`collapse`}return r}function mn(e,t){return!e.hasAttribute(`hidden`)&&(e.nodeName===`DETAILS`&&t&&t.nodeName!==`SUMMARY`?e.hasAttribute(`open`):!0)}function hn(e,t,n){let r=t?.tabbable?sn:on,i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){return t?.from?.contains(e)?NodeFilter.FILTER_REJECT:e.matches(r)&&fn(e)&&(!t?.accept||t.accept(e))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t?.from&&(i.currentNode=t.from),i}function gn(e){let t=e;for(;t&&!_n(t);)t=t.parentElement;return t||document.scrollingElement||document.documentElement}function _n(e){let t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function vn(){}function yn(e,t){let[n,r]=e,i=!1,a=t.length;for(let e=a,o=0,s=e-1;o<e;s=o++){let[a,c]=t[o],[l,u]=t[s],[,d]=t[s===0?e-1:s-1]||[0,0],f=(c-u)*(n-a)-(a-l)*(r-c);if(u<c){if(r>=u&&r<c){if(f===0)return!0;f>0&&(r===u?r>d&&(i=!i):i=!i)}}else if(c<u){if(r>c&&r<=u){if(f===0)return!0;f<0&&(r===u?r<d&&(i=!i):i=!i)}}else if(r===c&&(n>=l&&n<=a||n>=a&&n<=l))return!0}return i}function Y(e,t){return a(e,t)}var bn=new Map,xn=new Set;function Sn(){if(typeof window>`u`)return;let e=e=>{if(!e.target)return;let n=bn.get(e.target);n||(n=new Set,bn.set(e.target,n),e.target.addEventListener(`transitioncancel`,t)),n.add(e.propertyName)},t=e=>{if(!e.target)return;let n=bn.get(e.target);if(n&&(n.delete(e.propertyName),n.size===0&&(e.target.removeEventListener(`transitioncancel`,t),bn.delete(e.target)),bn.size===0)){for(let e of xn)e();xn.clear()}};document.body.addEventListener(`transitionrun`,e),document.body.addEventListener(`transitionend`,t)}typeof document<`u`&&(document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,Sn):Sn());function Cn(e,t){let n=wn(e,t,`left`),r=wn(e,t,`top`),i=t.offsetWidth,a=t.offsetHeight,o=e.scrollLeft,s=e.scrollTop,c=o+e.offsetWidth,l=s+e.offsetHeight;n<=o?o=n:n+i>c&&(o+=n+i-c),r<=s?s=r:r+a>l&&(s+=r+a-l),e.scrollLeft=o,e.scrollTop=s}function wn(e,t,n){let r=n===`left`?`offsetLeft`:`offsetTop`,i=0;for(;t.offsetParent&&(i+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){i-=e[r];break}t=t.offsetParent}return i}function Tn(e,t){if(document.contains(e)){let t=document.scrollingElement||document.documentElement;if(window.getComputedStyle(t).overflow!==`hidden`){let{left:t,top:n}=e.getBoundingClientRect();e?.scrollIntoView?.({block:`nearest`});let{left:r,top:i}=e.getBoundingClientRect();(Math.abs(t-r)>1||Math.abs(n-i)>1)&&e.scrollIntoView?.({block:`nearest`})}else{let n=gn(e);for(;e&&n&&e!==t&&n!==t;)Cn(n,e),e=n,n=gn(e)}}}var En={border:`0`,clip:`rect(0 0 0 0)`,"clip-path":`inset(50%)`,height:`1px`,margin:`0 -1px -1px 0`,overflow:`hidden`,padding:`0`,position:`absolute`,width:`1px`,"white-space":`nowrap`};function Dn(e,t){let[n,r]=R(On(t?.()));return T(()=>{r(e()?.tagName.toLowerCase()||On(t?.()))}),n}function On(e){return Lt(e)?e:void 0}function X(e){let[t,n]=x(e,[`as`]);if(!t.as)throw Error("[kobalte]: Polymorphic is missing the required `as` prop.");return N(ie,a(n,{get component(){return t.as}}))}var kn=Object.defineProperty,An=(e,t)=>{for(var n in t)kn(e,n,{get:t[n],enumerable:!0})};An({},{Button:()=>Pn,Root:()=>Nn});var jn=[`button`,`color`,`file`,`image`,`reset`,`submit`];function Mn(e){let t=e.tagName.toLowerCase();return t===`button`?!0:t===`input`&&e.type?jn.indexOf(e.type)!==-1:!1}function Nn(e){let t,[n,r]=x(Y({type:`button`},e),[`ref`,`type`,`disabled`]),i=Dn(()=>t,()=>`button`),o=L(()=>{let e=i();return e==null?!1:Mn({tagName:e,type:n.type})}),s=L(()=>i()===`input`),c=L(()=>i()===`a`&&t?.getAttribute(`href`)!=null);return N(X,a({as:`button`,ref(e){let r=mt(e=>t=e,n.ref);typeof r==`function`&&r(e)},get type(){return o()||s()?n.type:void 0},get role(){return!o()&&!c()?`button`:void 0},get tabIndex(){return!o()&&!c()&&!n.disabled?0:void 0},get disabled(){return o()||s()?n.disabled:void 0},get"aria-disabled"(){return!o()&&!s()&&n.disabled?!0:void 0},get"data-disabled"(){return n.disabled?``:void 0}},r))}var Pn=Nn;function Fn(e){let[t,n]=R(e.defaultValue?.()),r=L(()=>e.value?.()!==void 0),i=L(()=>r()?e.value?.():t());return[i,t=>{l(()=>{let a=he(t,i());return Object.is(a,i())||(r()||n(a),e.onChange?.(a)),a})}]}function In(e){let[t,n]=Fn(e);return[()=>t()??!1,n]}function Ln(e){let[t,n]=Fn(e);return[()=>t()??[],n]}function Rn(e={}){let[t,n]=In({value:()=>V(e.isSelected),defaultValue:()=>!!V(e.defaultIsSelected),onChange:t=>e.onSelectedChange?.(t)});return{isSelected:t,setIsSelected:t=>{!V(e.isReadOnly)&&!V(e.isDisabled)&&n(t)},toggle:()=>{!V(e.isReadOnly)&&!V(e.isDisabled)&&n(!t())}}}function zn(e){let t=e.startIndex??0,n=e.startLevel??0,r=[],i=t=>{if(t==null)return``;let n=e.getKey??`key`,r=Lt(n)?t[n]:n(t);return r==null?``:String(r)},a=t=>{if(t==null)return``;let n=e.getTextValue??`textValue`,r=Lt(n)?t[n]:n(t);return r==null?``:String(r)},o=t=>{if(t==null)return!1;let n=e.getDisabled??`disabled`;return(Lt(n)?t[n]:n(t))??!1},s=t=>{if(t!=null)return Lt(e.getSectionChildren)?t[e.getSectionChildren]:e.getSectionChildren?.(t)};for(let c of e.dataSource){if(Lt(c)||It(c)){r.push({type:`item`,rawValue:c,key:String(c),textValue:String(c),disabled:o(c),level:n,index:t}),t++;continue}if(s(c)!=null){r.push({type:`section`,rawValue:c,key:``,textValue:``,disabled:!1,level:n,index:t}),t++;let i=s(c)??[];if(i.length>0){let a=zn({dataSource:i,getKey:e.getKey,getTextValue:e.getTextValue,getDisabled:e.getDisabled,getSectionChildren:e.getSectionChildren,startIndex:t,startLevel:n+1});r.push(...a),t+=a.length}}else r.push({type:`item`,rawValue:c,key:i(c),textValue:a(c),disabled:o(c),level:n,index:t}),t++}return r}function Bn(e,t=[]){return L(()=>{let n=zn({dataSource:V(e.dataSource),getKey:V(e.getKey),getTextValue:V(e.getTextValue),getDisabled:V(e.getDisabled),getSectionChildren:V(e.getSectionChildren)});for(let e=0;e<t.length;e++)t[e]();return e.factory(n)})}var Vn=new Set([`Avst`,`Arab`,`Armi`,`Syrc`,`Samr`,`Mand`,`Thaa`,`Mend`,`Nkoo`,`Adlm`,`Rohg`,`Hebr`]),Hn=new Set([`ae`,`ar`,`arc`,`bcc`,`bqi`,`ckb`,`dv`,`fa`,`glk`,`he`,`ku`,`mzn`,`nqo`,`pnb`,`ps`,`sd`,`ug`,`ur`,`yi`]);function Un(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize().script??``;return Vn.has(t)}let t=e.split(`-`)[0];return Hn.has(t)}function Wn(e){return Un(e)?`rtl`:`ltr`}function Gn(){let e=typeof navigator<`u`&&(navigator.language||navigator.userLanguage)||`en-US`;return{locale:e,direction:Wn(e)}}var Kn=Gn(),qn=new Set;function Jn(){Kn=Gn();for(let e of qn)e(Kn)}function Yn(){let[e,t]=R(Kn),n=L(()=>e());return B(()=>{qn.size===0&&window.addEventListener(`languagechange`,Jn),qn.add(t),g(()=>{qn.delete(t),qn.size===0&&window.removeEventListener(`languagechange`,Jn)})}),{locale:()=>n().locale,direction:()=>n().direction}}var Xn=A();function Zn(){let e=Yn();return w(Xn)||e}var Qn=new Map;function $n(e){let{locale:t}=Zn(),n=L(()=>t()+(e?Object.entries(e).sort((e,t)=>e[0]<t[0]?-1:1).join():``));return L(()=>{let r=n(),i;return Qn.has(r)&&(i=Qn.get(r)),i||(i=new Intl.Collator(t(),e),Qn.set(r,i)),i})}var er=class e extends Set{anchorKey;currentKey;constructor(t,n,r){super(t),t instanceof e?(this.anchorKey=n||t.anchorKey,this.currentKey=r||t.currentKey):(this.anchorKey=n,this.currentKey=r)}};function tr(e){let[t,n]=Fn(e);return[()=>t()??new er,n]}function nr(e){return Zt()?e.altKey:e.ctrlKey}function rr(e){return qt()?e.metaKey:e.ctrlKey}function ir(e){return new er(e)}function ar(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function or(e){let t=Y({selectionMode:`none`,selectionBehavior:`toggle`},e),[n,r]=R(!1),[i,a]=R(),[o,s]=tr({value:L(()=>{let e=V(t.selectedKeys);return e==null?e:ir(e)}),defaultValue:L(()=>{let e=V(t.defaultSelectedKeys);return e==null?new er:ir(e)}),onChange:e=>t.onSelectionChange?.(e)}),[c,l]=R(V(t.selectionBehavior));return T(()=>{let e=o();V(t.selectionBehavior)===`replace`&&c()===`toggle`&&typeof e==`object`&&e.size===0&&l(`replace`)}),T(()=>{l(V(t.selectionBehavior)??`toggle`)}),{selectionMode:()=>V(t.selectionMode),disallowEmptySelection:()=>V(t.disallowEmptySelection)??!1,selectionBehavior:c,setSelectionBehavior:l,isFocused:n,setFocused:r,focusedKey:i,setFocusedKey:a,selectedKeys:o,setSelectedKeys:e=>{(V(t.allowDuplicateSelectionEvents)||!ar(e,o()))&&s(e)}}}function sr(e){let[t,n]=R(``),[r,i]=R(-1);return{typeSelectHandlers:{onKeyDown:a=>{if(V(e.isDisabled))return;let o=V(e.keyboardDelegate),s=V(e.selectionManager);if(!o.getKeyForSearch)return;let c=cr(a.key);if(!c||a.ctrlKey||a.metaKey)return;c===` `&&t().trim().length>0&&(a.preventDefault(),a.stopPropagation());let l=n(e=>e+c),u=o.getKeyForSearch(l,s.focusedKey())??o.getKeyForSearch(l);u==null&&lr(l)&&(l=l[0],u=o.getKeyForSearch(l,s.focusedKey())??o.getKeyForSearch(l)),u!=null&&(s.setFocusedKey(u),e.onTypeSelect?.(u)),clearTimeout(r()),i(window.setTimeout(()=>n(``),500))}}}}function cr(e){return e.length===1||!/^[A-Z]/i.test(e)?e:``}function lr(e){return e.split(``).every(t=>t===e[0])}function ur(e,t,n){let r=a({selectOnFocus:()=>V(e.selectionManager).selectionBehavior()===`replace`},e),i=()=>t(),{direction:o}=Zn(),s={top:0,left:0};Ot(()=>V(r.isVirtualized)?void 0:i(),`scroll`,()=>{let e=i();e&&(s={top:e.scrollTop,left:e.scrollLeft})});let{typeSelectHandlers:c}=sr({isDisabled:()=>V(r.disallowTypeAhead),keyboardDelegate:()=>V(r.keyboardDelegate),selectionManager:()=>V(r.selectionManager)}),l=()=>V(r.orientation)??`vertical`,u=e=>{K(e,c.onKeyDown),e.altKey&&e.key===`Tab`&&e.preventDefault();let n=t();if(!n?.contains(e.target))return;let i=V(r.selectionManager),a=V(r.selectOnFocus),s=t=>{t!=null&&(i.setFocusedKey(t),e.shiftKey&&i.selectionMode()===`multiple`?i.extendSelection(t):a&&!nr(e)&&i.replaceSelection(t))},u=V(r.keyboardDelegate),d=V(r.shouldFocusWrap),f=i.focusedKey();switch(e.key){case l()===`vertical`?`ArrowDown`:`ArrowRight`:if(u.getKeyBelow){e.preventDefault();let t;t=f==null?u.getFirstKey?.():u.getKeyBelow(f),t==null&&d&&(t=u.getFirstKey?.(f)),s(t)}break;case l()===`vertical`?`ArrowUp`:`ArrowLeft`:if(u.getKeyAbove){e.preventDefault();let t;t=f==null?u.getLastKey?.():u.getKeyAbove(f),t==null&&d&&(t=u.getLastKey?.(f)),s(t)}break;case l()===`vertical`?`ArrowLeft`:`ArrowUp`:if(u.getKeyLeftOf){e.preventDefault();let t=o()===`rtl`,n;n=f==null?t?u.getFirstKey?.():u.getLastKey?.():u.getKeyLeftOf(f),s(n)}break;case l()===`vertical`?`ArrowRight`:`ArrowDown`:if(u.getKeyRightOf){e.preventDefault();let t=o()===`rtl`,n;n=f==null?t?u.getLastKey?.():u.getFirstKey?.():u.getKeyRightOf(f),s(n)}break;case`Home`:if(u.getFirstKey){e.preventDefault();let t=u.getFirstKey(f,rr(e));t!=null&&(i.setFocusedKey(t),rr(e)&&e.shiftKey&&i.selectionMode()===`multiple`?i.extendSelection(t):a&&i.replaceSelection(t))}break;case`End`:if(u.getLastKey){e.preventDefault();let t=u.getLastKey(f,rr(e));t!=null&&(i.setFocusedKey(t),rr(e)&&e.shiftKey&&i.selectionMode()===`multiple`?i.extendSelection(t):a&&i.replaceSelection(t))}break;case`PageDown`:u.getKeyPageBelow&&f!=null&&(e.preventDefault(),s(u.getKeyPageBelow(f)));break;case`PageUp`:u.getKeyPageAbove&&f!=null&&(e.preventDefault(),s(u.getKeyPageAbove(f)));break;case`a`:rr(e)&&i.selectionMode()===`multiple`&&V(r.disallowSelectAll)!==!0&&(e.preventDefault(),i.selectAll());break;case`Escape`:e.defaultPrevented||(e.preventDefault(),V(r.disallowEmptySelection)||i.clearSelection());break;case`Tab`:if(!V(r.allowsTabNavigation)){if(e.shiftKey)n.focus();else{let e=hn(n,{tabbable:!0}),t,r;do r=e.lastChild(),r&&(t=r);while(r);t&&!t.contains(document.activeElement)&&J(t)}break}}},f=e=>{let t=V(r.selectionManager),n=V(r.keyboardDelegate),a=V(r.selectOnFocus);if(t.isFocused()){e.currentTarget.contains(e.target)||t.setFocused(!1);return}if(e.currentTarget.contains(e.target)){if(t.setFocused(!0),t.focusedKey()==null){let r=e=>{e!=null&&(t.setFocusedKey(e),a&&t.replaceSelection(e))},i=e.relatedTarget;i&&e.currentTarget.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING?r(t.lastSelectedKey()??n.getLastKey?.()):r(t.firstSelectedKey()??n.getFirstKey?.())}else if(!V(r.isVirtualized)){let e=i();if(e){e.scrollTop=s.top,e.scrollLeft=s.left;let n=e.querySelector(`[data-key="${t.focusedKey()}"]`);n&&(J(n),Cn(e,n))}}}},p=e=>{let t=V(r.selectionManager);e.currentTarget.contains(e.relatedTarget)||t.setFocused(!1)},m=e=>{i()===e.target&&e.preventDefault()},h=()=>{let e=V(r.autoFocus);if(!e)return;let n=V(r.selectionManager),i=V(r.keyboardDelegate),a;e===`first`&&(a=i.getFirstKey?.()),e===`last`&&(a=i.getLastKey?.());let o=n.selectedKeys();o.size&&(a=o.values().next().value),n.setFocused(!0),n.setFocusedKey(a);let s=t();s&&a==null&&!V(r.shouldUseVirtualFocus)&&J(s)};return B(()=>{r.deferAutoFocus?setTimeout(h,0):h()}),T(d([i,()=>V(r.isVirtualized),()=>V(r.selectionManager).focusedKey()],e=>{let[t,n,i]=e;if(n)i&&r.scrollToKey?.(i);else if(i&&t){let e=t.querySelector(`[data-key="${i}"]`);e&&Cn(t,e)}})),{tabIndex:L(()=>{if(!V(r.shouldUseVirtualFocus))return V(r.selectionManager).focusedKey()==null?0:-1}),onKeyDown:u,onMouseDown:m,onFocusIn:f,onFocusOut:p}}function dr(e,t){let n=()=>V(e.selectionManager),r=()=>V(e.key),i=()=>V(e.shouldUseVirtualFocus),a=e=>{n().selectionMode()!==`none`&&(n().selectionMode()===`single`?n().isSelected(r())&&!n().disallowEmptySelection()?n().toggleSelection(r()):n().replaceSelection(r()):e?.shiftKey?n().extendSelection(r()):n().selectionBehavior()===`toggle`||rr(e)||`pointerType`in e&&e.pointerType===`touch`?n().toggleSelection(r()):n().replaceSelection(r()))},o=()=>n().isSelected(r()),s=()=>V(e.disabled)||n().isDisabled(r()),c=()=>!s()&&n().canSelectItem(r()),l=null,u=t=>{c()&&(l=t.pointerType,t.pointerType===`mouse`&&t.button===0&&!V(e.shouldSelectOnPressUp)&&a(t))},f=t=>{c()&&t.pointerType===`mouse`&&t.button===0&&V(e.shouldSelectOnPressUp)&&V(e.allowsDifferentPressOrigin)&&a(t)},p=t=>{c()&&(V(e.shouldSelectOnPressUp)&&!V(e.allowsDifferentPressOrigin)||l!==`mouse`)&&a(t)},m=e=>{!c()||![`Enter`,` `].includes(e.key)||(nr(e)?n().toggleSelection(r()):a(e))},h=e=>{s()&&e.preventDefault()},g=e=>{let a=t();i()||s()||!a||e.target===a&&n().setFocusedKey(r())},_=L(()=>{if(!(i()||s()))return r()===n().focusedKey()?0:-1}),v=L(()=>V(e.virtualized)?void 0:r());return T(d([t,r,i,()=>n().focusedKey(),()=>n().isFocused()],([t,n,r,i,a])=>{t&&n===i&&a&&!r&&document.activeElement!==t&&(e.focus?e.focus():J(t))})),{isSelected:o,isDisabled:s,allowsSelection:c,tabIndex:_,dataKey:v,onPointerDown:u,onPointerUp:f,onClick:p,onKeyDown:m,onMouseDown:h,onFocus:g}}var fr=class{collection;state;constructor(e,t){this.collection=e,this.state=t}selectionMode(){return this.state.selectionMode()}disallowEmptySelection(){return this.state.disallowEmptySelection()}selectionBehavior(){return this.state.selectionBehavior()}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}isFocused(){return this.state.isFocused()}setFocused(e){this.state.setFocused(e)}focusedKey(){return this.state.focusedKey()}setFocusedKey(e){(e==null||this.collection().getItem(e))&&this.state.setFocusedKey(e)}selectedKeys(){return this.state.selectedKeys()}isSelected(e){if(this.state.selectionMode()===`none`)return!1;let t=this.getKey(e);return t==null?!1:this.state.selectedKeys().has(t)}isEmpty(){return this.state.selectedKeys().size===0}isSelectAll(){if(this.isEmpty())return!1;let e=this.state.selectedKeys();return this.getAllSelectableKeys().every(t=>e.has(t))}firstSelectedKey(){let e;for(let t of this.state.selectedKeys()){let n=this.collection().getItem(t),r=n?.index!=null&&e?.index!=null&&n.index<e.index;(!e||r)&&(e=n)}return e?.key}lastSelectedKey(){let e;for(let t of this.state.selectedKeys()){let n=this.collection().getItem(t),r=n?.index!=null&&e?.index!=null&&n.index>e.index;(!e||r)&&(e=n)}return e?.key}extendSelection(e){if(this.selectionMode()===`none`)return;if(this.selectionMode()===`single`){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n=this.state.selectedKeys(),r=n.anchorKey||t,i=new er(n,r,t);for(let e of this.getKeyRange(r,n.currentKey||t))i.delete(e);for(let e of this.getKeyRange(t,r))this.canSelectItem(e)&&i.add(e);this.state.setSelectedKeys(i)}getKeyRange(e,t){let n=this.collection().getItem(e),r=this.collection().getItem(t);return n&&r?n.index!=null&&r.index!=null&&n.index<=r.index?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let n=[],r=e;for(;r!=null;){let e=this.collection().getItem(r);if(e&&e.type===`item`&&n.push(r),r===t)return n;r=this.collection().getKeyAfter(r)}return[]}getKey(e){let t=this.collection().getItem(e);return t?!t||t.type!==`item`?null:t.key:e}toggleSelection(e){if(this.selectionMode()===`none`)return;if(this.selectionMode()===`single`&&!this.isSelected(e)){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n=new er(this.state.selectedKeys());n.has(t)?n.delete(t):this.canSelectItem(t)&&(n.add(t),n.anchorKey=t,n.currentKey=t),!(this.disallowEmptySelection()&&n.size===0)&&this.state.setSelectedKeys(n)}replaceSelection(e){if(this.selectionMode()===`none`)return;let t=this.getKey(e);if(t==null)return;let n=this.canSelectItem(t)?new er([t],t,t):new er;this.state.setSelectedKeys(n)}setSelectedKeys(e){if(this.selectionMode()===`none`)return;let t=new er;for(let n of e){let e=this.getKey(n);if(e!=null&&(t.add(e),this.selectionMode()===`single`))break}this.state.setSelectedKeys(t)}selectAll(){this.selectionMode()===`multiple`&&this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()))}clearSelection(){let e=this.state.selectedKeys();!this.disallowEmptySelection()&&e.size>0&&this.state.setSelectedKeys(new er)}toggleSelectAll(){this.isSelectAll()?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode()!==`none`&&(this.selectionMode()===`single`?this.isSelected(e)&&!this.disallowEmptySelection()?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior()===`toggle`||t&&t.pointerType===`touch`?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys())return!0;let t=this.selectedKeys();if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;for(let n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){if(this.state.selectionMode()===`none`)return!1;let t=this.collection().getItem(e);return t!=null&&!t.disabled}isDisabled(e){let t=this.collection().getItem(e);return!t||t.disabled}getAllSelectableKeys(){let e=[];return(t=>{for(;t!=null;){if(this.canSelectItem(t)){let n=this.collection().getItem(t);if(!n)continue;n.type===`item`&&e.push(t)}t=this.collection().getKeyAfter(t)}})(this.collection().getFirstKey()),e}},pr=class{keyMap=new Map;iterable;firstKey;lastKey;constructor(e){this.iterable=e;for(let t of e)this.keyMap.set(t.key,t);if(this.keyMap.size===0)return;let t,n=0;for(let[e,r]of this.keyMap)t?(t.nextKey=e,r.prevKey=t.key):(this.firstKey=e,r.prevKey=void 0),r.type===`item`&&(r.index=n++),t=r,t.nextKey=void 0;this.lastKey=t.key}*[Symbol.iterator](){yield*this.iterable}getSize(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){return this.keyMap.get(e)?.prevKey}getKeyAfter(e){return this.keyMap.get(e)?.nextKey}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}};function mr(e){let t=or(e),n=Bn({dataSource:()=>V(e.dataSource),getKey:()=>V(e.getKey),getTextValue:()=>V(e.getTextValue),getDisabled:()=>V(e.getDisabled),getSectionChildren:()=>V(e.getSectionChildren),factory:t=>e.filter?new pr(e.filter(t)):new pr(t)},[()=>e.filter]),r=new fr(n,t);return j(()=>{let e=t.focusedKey();e!=null&&!n().getItem(e)&&t.setFocusedKey(void 0)}),{collection:n,selectionManager:()=>r}}var hr=A();function gr(){return w(hr)}function _r(){let e=gr();if(e===void 0)throw Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");return e}function vr(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}function yr(e,t){let n=t.ref();if(!n)return-1;let r=e.length;if(!r)return-1;for(;r--;){let t=e[r]?.ref();if(t&&vr(t,n))return r+1}return 0}function br(e){let t=e.map((e,t)=>[t,e]),n=!1;return t.sort(([e,t],[r,i])=>{let a=t.ref(),o=i.ref();return a===o||!a||!o?0:vr(a,o)?(e>r&&(n=!0),-1):(e<r&&(n=!0),1)}),n?t.map(([e,t])=>t):e}function xr(e,t){let n=br(e);e!==n&&t(n)}function Sr(e){let t=e[0],n=e[e.length-1]?.ref(),r=t?.ref()?.parentElement;for(;r;){if(n&&r.contains(n))return r;r=r.parentElement}return Ut(r).body}function Cr(e,t){T(()=>{let n=setTimeout(()=>{xr(e(),t)});g(()=>clearTimeout(n))})}function wr(e,t){if(typeof IntersectionObserver!=`function`){Cr(e,t);return}let n=[];T(()=>{let r=()=>{let r=!!n.length;n=e(),r&&xr(e(),t)},i=Sr(e()),a=new IntersectionObserver(r,{root:i});for(let t of e()){let e=t.ref();e&&a.observe(e)}g(()=>a.disconnect())})}function Tr(e={}){let[t,n]=Ln({value:()=>V(e.items),onChange:t=>e.onItemsChange?.(t)});wr(t,n);let r=e=>(n(t=>Pt(t,e,yr(t,e))),()=>{n(t=>{let n=t.filter(t=>t.ref()!==e.ref());return t.length===n.length?t:n})});return{DomCollectionProvider:e=>N(hr.Provider,{value:{registerItem:r},get children(){return e.children}})}}function Er(e){let t=_r(),n=Y({shouldRegisterItem:!0},e);T(()=>{n.shouldRegisterItem&&g(t.registerItem(n.getItem()))})}var Dr=[`top`,`right`,`bottom`,`left`],Or=Math.min,kr=Math.max,Ar=Math.round,jr=Math.floor,Mr=e=>({x:e,y:e}),Nr={left:`right`,right:`left`,bottom:`top`,top:`bottom`},Pr={start:`end`,end:`start`};function Fr(e,t,n){return kr(e,Or(t,n))}function Ir(e,t){return typeof e==`function`?e(t):e}function Lr(e){return e.split(`-`)[0]}function Rr(e){return e.split(`-`)[1]}function zr(e){return e===`x`?`y`:`x`}function Br(e){return e===`y`?`height`:`width`}var Vr=new Set([`top`,`bottom`]);function Hr(e){return Vr.has(Lr(e))?`y`:`x`}function Ur(e){return zr(Hr(e))}function Wr(e,t,n){n===void 0&&(n=!1);let r=Rr(e),i=Ur(e),a=Br(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=$r(o)),[o,$r(o)]}function Gr(e){let t=$r(e);return[Kr(e),t,Kr(t)]}function Kr(e){return e.replace(/start|end/g,e=>Pr[e])}var qr=[`left`,`right`],Jr=[`right`,`left`],Yr=[`top`,`bottom`],Xr=[`bottom`,`top`];function Zr(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Jr:qr:t?qr:Jr;case`left`:case`right`:return t?Yr:Xr;default:return[]}}function Qr(e,t,n,r){let i=Rr(e),a=Zr(Lr(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Kr)))),a}function $r(e){return e.replace(/left|right|bottom|top/g,e=>Nr[e])}function ei(e){return{top:0,right:0,bottom:0,left:0,...e}}function ti(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:ei(e)}function ni(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function ri(e,t,n){let{reference:r,floating:i}=e,a=Hr(t),o=Ur(t),s=Br(o),c=Lr(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Rr(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}async function ii(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Ir(t,e),p=ti(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=ni(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=ni(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var ai=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=ri(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:{...o,detectOverflow:o.detectOverflow??ii},elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=ri(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}},oi=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Ir(e,t)||{};if(l==null)return{};let d=ti(u),f={x:n,y:r},p=Ur(i),m=Br(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),C=S?S[y]:0;(!C||!await(o.isElement==null?void 0:o.isElement(S)))&&(C=s.floating[y]||a.floating[m]);let w=b/2-x/2,T=C/2-h[m]/2-1,E=Or(d[_],T),D=Or(d[v],T),ee=E,O=C-h[m]-D,k=C/2-h[m]/2+w,A=Fr(ee,k,O),j=!c.arrow&&Rr(i)!=null&&k!==A&&a.reference[m]/2-(k<ee?E:D)-h[m]/2<0,te=j?k<ee?k-ee:k-O:0;return{[p]:f[p]+te,data:{[p]:A,centerOffset:k-A-te,...j&&{alignmentOffset:te}},reset:j}}}),si=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Ir(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Lr(r),_=Hr(o),v=Lr(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[$r(o)]:Gr(o)),x=p!==`none`;!d&&x&&b.push(...Qr(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=Wr(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(!(u===`alignment`&&_!==Hr(t))||T.every(e=>Hr(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=Hr(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}};function ci(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function li(e){return Dr.some(t=>e[t]>=0)}var ui=function(e){return e===void 0&&(e={}),{name:`hide`,options:e,async fn(t){let{rects:n,platform:r}=t,{strategy:i=`referenceHidden`,...a}=Ir(e,t);switch(i){case`referenceHidden`:{let e=ci(await r.detectOverflow(t,{...a,elementContext:`reference`}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:li(e)}}}case`escaped`:{let e=ci(await r.detectOverflow(t,{...a,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:li(e)}}}default:return{}}}}},di=new Set([`left`,`top`]);async function fi(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Lr(n),s=Rr(n),c=Hr(n)===`y`,l=di.has(o)?-1:1,u=a&&c?-1:1,d=Ir(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var pi=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await fi(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},mi=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Ir(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Hr(Lr(i)),p=zr(f),m=u[p],h=u[f];if(o){let e=p===`y`?`top`:`left`,t=p===`y`?`bottom`:`right`,n=m+d[e],r=m-d[t];m=Fr(n,m,r)}if(s){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=h+d[e],r=h-d[t];h=Fr(n,h,r)}let g=c.fn({...t,[p]:m,[f]:h});return{...g,data:{x:g.x-n,y:g.y-r,enabled:{[p]:o,[f]:s}}}}}},hi=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=Ir(e,t),u=await o.detectOverflow(t,l),d=Lr(i),f=Rr(i),p=Hr(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,b=Or(h-u[g],v),x=Or(m-u[_],y),S=!t.middlewareData.shift,C=b,w=x;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(w=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(C=v),S&&!f){let e=kr(u.left,0),t=kr(u.right,0),n=kr(u.top,0),r=kr(u.bottom,0);p?w=m-2*(e!==0||t!==0?e+t:kr(u.left,u.right)):C=h-2*(n!==0||r!==0?n+r:kr(u.top,u.bottom))}await c({...t,availableWidth:w,availableHeight:C});let T=await o.getDimensions(s.floating);return m!==T.width||h!==T.height?{reset:{rects:!0}}:{}}}};function gi(){return typeof window<`u`}function _i(e){return bi(e)?(e.nodeName||``).toLowerCase():`#document`}function vi(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function yi(e){return((bi(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function bi(e){return gi()?e instanceof Node||e instanceof vi(e).Node:!1}function xi(e){return gi()?e instanceof Element||e instanceof vi(e).Element:!1}function Si(e){return gi()?e instanceof HTMLElement||e instanceof vi(e).HTMLElement:!1}function Ci(e){return!gi()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof vi(e).ShadowRoot}var wi=new Set([`inline`,`contents`]);function Ti(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Ri(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!wi.has(i)}var Ei=new Set([`table`,`td`,`th`]);function Di(e){return Ei.has(_i(e))}var Oi=[`:popover-open`,`:modal`];function ki(e){return Oi.some(t=>{try{return e.matches(t)}catch{return!1}})}var Ai=[`transform`,`translate`,`scale`,`rotate`,`perspective`],ji=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],Mi=[`paint`,`layout`,`strict`,`content`];function Ni(e){let t=Fi(),n=xi(e)?Ri(e):e;return Ai.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||ji.some(e=>(n.willChange||``).includes(e))||Mi.some(e=>(n.contain||``).includes(e))}function Pi(e){let t=Bi(e);for(;Si(t)&&!Li(t);){if(Ni(t))return t;if(ki(t))return null;t=Bi(t)}return null}function Fi(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}var Ii=new Set([`html`,`body`,`#document`]);function Li(e){return Ii.has(_i(e))}function Ri(e){return vi(e).getComputedStyle(e)}function zi(e){return xi(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Bi(e){if(_i(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Ci(e)&&e.host||yi(e);return Ci(t)?t.host:t}function Vi(e){let t=Bi(e);return Li(t)?e.ownerDocument?e.ownerDocument.body:e.body:Si(t)&&Ti(t)?t:Vi(t)}function Hi(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Vi(e),i=r===e.ownerDocument?.body,a=vi(r);if(i){let e=Ui(a);return t.concat(a,a.visualViewport||[],Ti(r)?r:[],e&&n?Hi(e):[])}return t.concat(r,Hi(r,[],n))}function Ui(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Wi(e){let t=Ri(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Si(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Ar(n)!==a||Ar(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Gi(e){return xi(e)?e:e.contextElement}function Ki(e){let t=Gi(e);if(!Si(t))return Mr(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Wi(t),o=(a?Ar(n.width):n.width)/r,s=(a?Ar(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var qi=Mr(0);function Ji(e){let t=vi(e);return!Fi()||!t.visualViewport?qi:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Yi(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==vi(e)?!1:t}function Xi(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Gi(e),o=Mr(1);t&&(r?xi(r)&&(o=Ki(r)):o=Ki(e));let s=Yi(a,n,r)?Ji(a):Mr(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=vi(a),t=r&&xi(r)?vi(r):r,n=e,i=Ui(n);for(;i&&r&&t!==n;){let e=Ki(i),t=i.getBoundingClientRect(),r=Ri(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=vi(i),i=Ui(n)}}return ni({width:u,height:d,x:c,y:l})}function Zi(e,t){let n=zi(e).scrollLeft;return t?t.left+n:Xi(yi(e)).left+n}function Qi(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Zi(e,n),y:n.top+t.scrollTop}}function $i(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=yi(r),s=t?ki(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Mr(1),u=Mr(0),d=Si(r);if((d||!d&&!a)&&((_i(r)!==`body`||Ti(o))&&(c=zi(r)),Si(r))){let e=Xi(r);l=Ki(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Qi(o,c):Mr(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ea(e){return Array.from(e.getClientRects())}function ta(e){let t=yi(e),n=zi(e),r=e.ownerDocument.body,i=kr(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=kr(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+Zi(e),s=-n.scrollTop;return Ri(r).direction===`rtl`&&(o+=kr(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}var na=25;function ra(e,t){let n=vi(e),r=yi(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Fi();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=Zi(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=na&&(a-=o)}else l<=na&&(a+=l);return{width:a,height:o,x:s,y:c}}var ia=new Set([`absolute`,`fixed`]);function aa(e,t){let n=Xi(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Si(e)?Ki(e):Mr(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function oa(e,t,n){let r;if(t===`viewport`)r=ra(e,n);else if(t===`document`)r=ta(yi(e));else if(xi(t))r=aa(t,n);else{let n=Ji(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return ni(r)}function sa(e,t){let n=Bi(e);return n===t||!xi(n)||Li(n)?!1:Ri(n).position===`fixed`||sa(n,t)}function ca(e,t){let n=t.get(e);if(n)return n;let r=Hi(e,[],!1).filter(e=>xi(e)&&_i(e)!==`body`),i=null,a=Ri(e).position===`fixed`,o=a?Bi(e):e;for(;xi(o)&&!Li(o);){let t=Ri(o),n=Ni(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&ia.has(i.position)||Ti(o)&&!n&&sa(e,o))?r=r.filter(e=>e!==o):i=t,o=Bi(o)}return t.set(e,r),r}function la(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?ki(t)?[]:ca(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=oa(t,n,i);return e.top=kr(r.top,e.top),e.right=Or(r.right,e.right),e.bottom=Or(r.bottom,e.bottom),e.left=kr(r.left,e.left),e},oa(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function ua(e){let{width:t,height:n}=Wi(e);return{width:t,height:n}}function da(e,t,n){let r=Si(t),i=yi(t),a=n===`fixed`,o=Xi(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Mr(0);function l(){c.x=Zi(i)}if(r||!r&&!a)if((_i(t)!==`body`||Ti(i))&&(s=zi(t)),r){let e=Xi(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?Qi(i,s):Mr(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function fa(e){return Ri(e).position===`static`}function pa(e,t){if(!Si(e)||Ri(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return yi(e)===n&&(n=n.ownerDocument.body),n}function ma(e,t){let n=vi(e);if(ki(e))return n;if(!Si(e)){let t=Bi(e);for(;t&&!Li(t);){if(xi(t)&&!fa(t))return t;t=Bi(t)}return n}let r=pa(e,t);for(;r&&Di(r)&&fa(r);)r=pa(r,t);return r&&Li(r)&&fa(r)&&!Ni(r)?n:r||Pi(e)||n}var ha=async function(e){let t=this.getOffsetParent||ma,n=this.getDimensions,r=await n(e.floating);return{reference:da(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function ga(e){return Ri(e).direction===`rtl`}var _a={convertOffsetParentRelativeRectToViewportRelativeRect:$i,getDocumentElement:yi,getClippingRect:la,getOffsetParent:ma,getElementRects:ha,getClientRects:ea,getDimensions:ua,getScale:Ki,isElement:xi,isRTL:ga};function va(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ya(e,t){let n=null,r,i=yi(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=jr(d),h=jr(i.clientWidth-(u+f)),g=jr(i.clientHeight-(d+p)),_=jr(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:kr(0,Or(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!va(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,v)}n.observe(e)}return o(!0),a}function ba(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Gi(e),u=i||a?[...l?Hi(l):[],...Hi(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?ya(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?Xi(e):null;c&&g();function g(){let t=Xi(e);h&&!va(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var xa=pi,Sa=mi,Ca=si,wa=hi,Ta=ui,Ea=oi,Da=(e,t,n)=>{let r=new Map,i={platform:_a,...n},a={...i.platform,_c:r};return ai(e,t,{...i,platform:a})},Oa=A();function ka(){let e=w(Oa);if(e===void 0)throw Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");return e}var Aa=F(`<svg display="block" viewBox="0 0 30 30" style="transform:scale(1.02)"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">`),ja=30,Ma=ja/2,Na={top:180,right:-90,bottom:0,left:90};function Pa(e){let t=ka(),[n,r]=x(Y({size:ja},e),[`ref`,`style`,`size`]),i=()=>t.currentPlacement().split(`-`)[0],o=Fa(t.contentRef),s=()=>o()?.getPropertyValue(`background-color`)||`none`,c=()=>o()?.getPropertyValue(`border-${i()}-color`)||`none`,l=()=>o()?.getPropertyValue(`border-${i()}-width`)||`0px`,u=()=>Number.parseInt(l())*2*(ja/n.size),d=()=>`rotate(${Na[i()]} ${Ma} ${Ma}) translate(0 2)`;return N(X,a({as:`div`,ref(e){let r=mt(t.setArrowRef,n.ref);typeof r==`function`&&r(e)},"aria-hidden":`true`,get style(){return Nt({position:`absolute`,"font-size":`${n.size}px`,width:`1em`,height:`1em`,"pointer-events":`none`,fill:s(),stroke:c(),"stroke-width":u()},n.style)}},r,{get children(){let e=Aa(),t=e.firstChild;return z(()=>b(t,`transform`,d())),e}}))}function Fa(e){let[t,n]=R();return T(()=>{let t=e();t&&n(Ht(t).getComputedStyle(t))}),t}function Ia(e){let t=ka(),[n,r]=x(e,[`ref`,`style`]);return N(X,a({as:`div`,ref(e){let r=mt(t.setPositionerRef,n.ref);typeof r==`function`&&r(e)},"data-popper-positioner":``,get style(){return Nt({position:`absolute`,top:0,left:0,"min-width":`max-content`},n.style)}},r))}function La(e){let{x:t=0,y:n=0,width:r=0,height:i=0}=e??{};if(typeof DOMRect==`function`)return new DOMRect(t,n,r,i);let a={x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:n+i,left:t};return{...a,toJSON:()=>a}}function Ra(e,t){return{contextElement:e,getBoundingClientRect:()=>{let n=t(e);return n?La(n):e?e.getBoundingClientRect():La()}}}function za(e){return/^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e)}var Ba={top:`bottom`,right:`left`,bottom:`top`,left:`right`};function Va(e,t){let[n,r]=e.split(`-`),i=Ba[n];return r?n===`left`||n===`right`?`${i} ${r===`start`?`top`:`bottom`}`:r===`start`?`${i} ${t===`rtl`?`right`:`left`}`:`${i} ${t===`rtl`?`left`:`right`}`:`${i} center`}function Ha(e){let t=Y({getAnchorRect:e=>e?.getBoundingClientRect(),placement:`bottom`,gutter:0,shift:0,flip:!0,slide:!0,overlap:!1,sameWidth:!1,fitViewport:!1,hideWhenDetached:!1,detachedPadding:0,arrowPadding:4,overflowPadding:8},e),[n,r]=R(),[i,a]=R(),[o,s]=R(t.placement),c=()=>Ra(t.anchorRef?.(),t.getAnchorRect),{direction:l}=Zn();async function u(){let e=c(),r=n(),a=i();if(!e||!r)return;let o=(a?.clientHeight||0)/2,u=typeof t.gutter==`number`?t.gutter+o:t.gutter??o;r.style.setProperty(`--kb-popper-content-overflow-padding`,`${t.overflowPadding}px`),e.getBoundingClientRect();let d=[xa(({placement:e})=>({mainAxis:u,crossAxis:e.split(`-`)[1]?void 0:t.shift,alignmentAxis:t.shift}))];if(t.flip!==!1){let e=typeof t.flip==`string`?t.flip.split(` `):void 0;if(e!==void 0&&!e.every(za))throw Error("`flip` expects a spaced-delimited list of placements");d.push(Ca({padding:t.overflowPadding,fallbackPlacements:e}))}(t.slide||t.overlap)&&d.push(Sa({mainAxis:t.slide,crossAxis:t.overlap,padding:t.overflowPadding})),d.push(wa({padding:t.overflowPadding,apply({availableWidth:e,availableHeight:n,rects:i}){let a=Math.round(i.reference.width);e=Math.floor(e),n=Math.floor(n),r.style.setProperty(`--kb-popper-anchor-width`,`${a}px`),r.style.setProperty(`--kb-popper-content-available-width`,`${e}px`),r.style.setProperty(`--kb-popper-content-available-height`,`${n}px`),t.sameWidth&&(r.style.width=`${a}px`),t.fitViewport&&(r.style.maxWidth=`${e}px`,r.style.maxHeight=`${n}px`)}})),t.hideWhenDetached&&d.push(Ta({padding:t.detachedPadding})),a&&d.push(Ea({element:a,padding:t.arrowPadding}));let f=await Da(e,r,{placement:t.placement,strategy:`absolute`,middleware:d,platform:{..._a,isRTL:()=>l()===`rtl`}});if(s(f.placement),t.onCurrentPlacementChange?.(f.placement),!r)return;r.style.setProperty(`--kb-popper-content-transform-origin`,Va(f.placement,l()));let p=Math.round(f.x),m=Math.round(f.y),h;if(t.hideWhenDetached&&(h=f.middlewareData.hide?.referenceHidden?`hidden`:`visible`),Object.assign(r.style,{top:`0`,left:`0`,transform:`translate3d(${p}px, ${m}px, 0)`,visibility:h}),a&&f.middlewareData.arrow){let{x:e,y:t}=f.middlewareData.arrow,n=f.placement.split(`-`)[0];Object.assign(a.style,{left:e==null?``:`${e}px`,top:t==null?``:`${t}px`,[n]:`100%`})}}T(()=>{let e=c(),t=n();!e||!t||g(ba(e,t,u,{elementResize:typeof ResizeObserver==`function`}))}),T(()=>{let e=n(),r=t.contentRef?.();!e||!r||queueMicrotask(()=>{e.style.zIndex=getComputedStyle(r).zIndex})});let d={currentPlacement:o,contentRef:()=>t.contentRef?.(),setPositionerRef:r,setArrowRef:a};return N(Oa.Provider,{value:d,get children(){return t.children}})}var Ua=Object.assign(Ha,{Arrow:Pa,Context:Oa,usePopperContext:ka,Positioner:Ia}),Wa=`data-kb-top-layer`,Ga,Ka=!1,qa=[];function Ja(e){return qa.findIndex(t=>t.node===e)}function Ya(e){return qa[Ja(e)]}function Xa(e){return qa[qa.length-1].node===e}function Za(){return qa.filter(e=>e.isPointerBlocking)}function Qa(){return[...Za()].slice(-1)[0]}function $a(){return Za().length>0}function eo(e){let t=Ja(Qa()?.node);return Ja(e)<t}function to(e){qa.push(e)}function no(e){let t=Ja(e);t<0||qa.splice(t,1)}function ro(){for(let{node:e}of qa)e.style.pointerEvents=eo(e)?`none`:`auto`}function io(e){if($a()&&!Ka){let t=Ut(e);Ga=document.body.style.pointerEvents,t.body.style.pointerEvents=`none`,Ka=!0}}function ao(e){if($a())return;let t=Ut(e);t.body.style.pointerEvents=Ga,t.body.style.length===0&&t.body.removeAttribute(`style`),Ka=!1}var oo={layers:qa,isTopMostLayer:Xa,hasPointerBlockingLayer:$a,isBelowPointerBlockingLayer:eo,addLayer:to,removeLayer:no,indexOf:Ja,find:Ya,assignPointerEventToLayers:ro,disableBodyPointerEvents:io,restoreBodyPointerEvents:ao},so=`interactOutside.pointerDownOutside`,co=`interactOutside.focusOutside`;function lo(e,t){let n,r=vn,i=()=>Ut(t()),a=t=>e.onPointerDownOutside?.(t),o=t=>e.onFocusOutside?.(t),s=t=>e.onInteractOutside?.(t),c=n=>{let r=n.target;return!(r instanceof Element)||r.closest(`[${Wa}]`)||!Bt(i(),r)||Bt(t(),r)?!1:!e.shouldExcludeElement?.(r)},l=e=>{function n(){let n=t(),r=e.target;if(!n||!r||!c(e))return;let i=q([a,s]);r.addEventListener(so,i,{once:!0});let o=new CustomEvent(so,{bubbles:!1,cancelable:!0,detail:{originalEvent:e,isContextMenu:e.button===2||Qt(e)&&e.button===0}});r.dispatchEvent(o)}e.pointerType===`touch`?(i().removeEventListener(`click`,n),r=n,i().addEventListener(`click`,n,{once:!0})):n()},u=e=>{let n=t(),r=e.target;if(!n||!r||!c(e))return;let i=q([o,s]);r.addEventListener(co,i,{once:!0});let a=new CustomEvent(co,{bubbles:!1,cancelable:!0,detail:{originalEvent:e,isContextMenu:!1}});r.dispatchEvent(a)};T(()=>{V(e.isDisabled)||(n=window.setTimeout(()=>{i().addEventListener(`pointerdown`,l,!0)},0),i().addEventListener(`focusin`,u,!0),g(()=>{window.clearTimeout(n),i().removeEventListener(`click`,r),i().removeEventListener(`pointerdown`,l,!0),i().removeEventListener(`focusin`,u,!0)}))})}function uo(e){let t=t=>{t.key===Gt.Escape&&e.onEscapeKeyDown?.(t)};T(()=>{if(V(e.isDisabled))return;let n=e.ownerDocument?.()??Ut();n.addEventListener(`keydown`,t),g(()=>{n.removeEventListener(`keydown`,t)})})}var fo=A();function po(){return w(fo)}function mo(e){let t,n=po(),[r,i]=x(e,[`ref`,`disableOutsidePointerEvents`,`excludedElements`,`onEscapeKeyDown`,`onPointerDownOutside`,`onFocusOutside`,`onInteractOutside`,`onDismiss`,`bypassTopMostLayerCheck`]),o=new Set([]),s=e=>{o.add(e);let t=n?.registerNestedLayer(e);return()=>{o.delete(e),t?.()}};lo({shouldExcludeElement:e=>t?r.excludedElements?.some(t=>Bt(t(),e))||[...o].some(t=>Bt(t,e)):!1,onPointerDownOutside:e=>{!t||oo.isBelowPointerBlockingLayer(t)||!r.bypassTopMostLayerCheck&&!oo.isTopMostLayer(t)||(r.onPointerDownOutside?.(e),r.onInteractOutside?.(e),e.defaultPrevented||r.onDismiss?.())},onFocusOutside:e=>{r.onFocusOutside?.(e),r.onInteractOutside?.(e),e.defaultPrevented||r.onDismiss?.()}},()=>t),uo({ownerDocument:()=>Ut(t),onEscapeKeyDown:e=>{!t||!oo.isTopMostLayer(t)||(r.onEscapeKeyDown?.(e),!e.defaultPrevented&&r.onDismiss&&(e.preventDefault(),r.onDismiss()))}}),B(()=>{if(!t)return;oo.addLayer({node:t,isPointerBlocking:r.disableOutsidePointerEvents,dismiss:r.onDismiss});let e=n?.registerNestedLayer(t);oo.assignPointerEventToLayers(),oo.disableBodyPointerEvents(t),g(()=>{t&&(oo.removeLayer(t),e?.(),oo.assignPointerEventToLayers(),oo.restoreBodyPointerEvents(t))})}),T(d([()=>t,()=>r.disableOutsidePointerEvents],([e,t])=>{if(!e)return;let n=oo.find(e);n&&n.isPointerBlocking!==t&&(n.isPointerBlocking=t,oo.assignPointerEventToLayers()),t&&oo.disableBodyPointerEvents(e),g(()=>{oo.restoreBodyPointerEvents(e)})},{defer:!0}));let c={registerNestedLayer:s};return N(fo.Provider,{value:c,get children(){return N(X,a({as:`div`,ref(e){let n=mt(e=>t=e,r.ref);typeof n==`function`&&n(e)}},i))}})}function ho(e={}){let[t,n]=In({value:()=>V(e.open),defaultValue:()=>!!V(e.defaultOpen),onChange:t=>e.onOpenChange?.(t)}),r=()=>{n(!0)},i=()=>{n(!1)};return{isOpen:t,setIsOpen:n,open:r,close:i,toggle:()=>{t()?i():r()}}}function go(e){return t=>(e(t),()=>e(void 0))}var _o=e=>typeof e==`function`?e():e,vo=e=>{let t=L(()=>{let t=_o(e.element);if(t)return getComputedStyle(t)}),n=()=>t()?.animationName??`none`,[r,i]=R(_o(e.show)?`present`:`hidden`),a=`none`;return T(r=>{let o=_o(e.show);return l(()=>{if(r===o)return o;let e=a,s=n();o?i(`present`):s===`none`||t()?.display===`none`?i(`hidden`):i(r===!0&&e!==s?`hiding`:`hidden`)}),o}),T(()=>{let t=_o(e.element);if(!t)return;let o=e=>{e.target===t&&(a=n())},s=e=>{let a=n().includes(e.animationName);e.target===t&&a&&r()===`hiding`&&i(`hidden`)};t.addEventListener(`animationstart`,o),t.addEventListener(`animationcancel`,s),t.addEventListener(`animationend`,s),g(()=>{t.removeEventListener(`animationstart`,o),t.removeEventListener(`animationcancel`,s),t.removeEventListener(`animationend`,s)})}),{present:()=>r()===`present`||r()===`hiding`,state:r,setState:i}},yo=[`id`,`name`,`validationState`,`required`,`disabled`,`readOnly`];function bo(e){let t=Y({id:`form-control-${_()}`},e),[n,r]=R(),[i,a]=R(),[o,s]=R(),[c,l]=R();return{formControlContext:{name:()=>V(t.name)??V(t.id),dataset:L(()=>({"data-valid":V(t.validationState)===`valid`?``:void 0,"data-invalid":V(t.validationState)===`invalid`?``:void 0,"data-required":V(t.required)?``:void 0,"data-disabled":V(t.disabled)?``:void 0,"data-readonly":V(t.readOnly)?``:void 0})),validationState:()=>V(t.validationState),isRequired:()=>V(t.required),isDisabled:()=>V(t.disabled),isReadOnly:()=>V(t.readOnly),labelId:n,fieldId:i,descriptionId:o,errorMessageId:c,getAriaLabelledBy:(e,t,r)=>{let i=r!=null||n()!=null;return[r,n(),i&&t!=null?e:void 0].filter(Boolean).join(` `)||void 0},getAriaDescribedBy:e=>[o(),c(),e].filter(Boolean).join(` `)||void 0,generateId:zt(()=>V(t.id)),registerLabel:go(r),registerField:go(a),registerDescription:go(s),registerErrorMessage:go(l)}}}var xo=A();function So(){let e=w(xo);if(e===void 0)throw Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");return e}function Co(e){let t=So(),n=Y({id:t.generateId(`description`)},e);return T(()=>g(t.registerDescription(n.id))),N(X,a({as:`div`},()=>t.dataset(),n))}function wo(e){let t,n=So(),[r,i]=x(Y({id:n.generateId(`label`)},e),[`ref`]),o=Dn(()=>t,()=>`label`);return T(()=>g(n.registerLabel(i.id))),N(X,a({as:`label`,ref(e){let n=mt(e=>t=e,r.ref);typeof n==`function`&&n(e)},get for(){return m(()=>o()===`label`)()?n.fieldId():void 0}},()=>n.dataset(),i))}function To(e,t){T(d(e,e=>{if(e==null)return;let n=Eo(e);n!=null&&(n.addEventListener(`reset`,t,{passive:!0}),g(()=>{n.removeEventListener(`reset`,t)}))}))}function Eo(e){return Do(e)?e.form:e.closest(`form`)}function Do(e){return e.matches(`textarea, input, select, button`)}function Oo(e){let t=So(),[n,r]=x(Y({id:t.generateId(`error-message`)},e),[`forceMount`]),i=()=>t.validationState()===`invalid`;return T(()=>{i()&&g(t.registerErrorMessage(r.id))}),N(I,{get when(){return n.forceMount||i()},get children(){return N(X,a({as:`div`},()=>t.dataset(),r))}})}var ko=`focusScope.autoFocusOnMount`,Ao=`focusScope.autoFocusOnUnmount`,jo={bubbles:!1,cancelable:!0},Mo={stack:[],active(){return this.stack[0]},add(e){e!==this.active()&&this.active()?.pause(),this.stack=Ft(this.stack,e),this.stack.unshift(e)},remove(e){this.stack=Ft(this.stack,e),this.active()?.resume()}};function No(e,t){let[n,r]=R(!1),i={pause(){r(!0)},resume(){r(!1)}},a=null,o=t=>e.onMountAutoFocus?.(t),s=t=>e.onUnmountAutoFocus?.(t),c=()=>Ut(t()),l=()=>{let e=c().createElement(`span`);return e.setAttribute(`data-focus-trap`,``),e.tabIndex=0,Object.assign(e.style,En),e},u=()=>{let e=t();return e?cn(e,!0).filter(e=>!e.hasAttribute(`data-focus-trap`)):[]},d=()=>{let e=u();return e.length>0?e[0]:null},f=()=>{let e=u();return e.length>0?e[e.length-1]:null},p=()=>{let e=t();if(!e)return!1;let n=Vt(e);return!n||Bt(e,n)?!1:un(n)};T(()=>{let e=t();if(!e)return;Mo.add(i);let n=Vt(e);if(!Bt(e,n)){let t=new CustomEvent(ko,jo);e.addEventListener(ko,o),e.dispatchEvent(t),t.defaultPrevented||setTimeout(()=>{J(d()),Vt(e)===n&&J(e)},0)}g(()=>{e.removeEventListener(ko,o),setTimeout(()=>{let t=new CustomEvent(Ao,jo);p()&&t.preventDefault(),e.addEventListener(Ao,s),e.dispatchEvent(t),t.defaultPrevented||J(n??c().body),e.removeEventListener(Ao,s),Mo.remove(i)},0)})}),T(()=>{let r=t();if(!r||!V(e.trapFocus)||n())return;let i=e=>{let t=e.target;t?.closest(`[${Wa}]`)||(Bt(r,t)?a=t:J(a))},o=e=>{let t=e.relatedTarget??Vt(r);t?.closest(`[${Wa}]`)||Bt(r,t)||J(a)};c().addEventListener(`focusin`,i),c().addEventListener(`focusout`,o),g(()=>{c().removeEventListener(`focusin`,i),c().removeEventListener(`focusout`,o)})}),T(()=>{let r=t();if(!r||!V(e.trapFocus)||n())return;let i=l();r.insertAdjacentElement(`afterbegin`,i);let a=l();r.insertAdjacentElement(`beforeend`,a);function o(e){let t=d(),n=f();e.relatedTarget===t?J(n):J(t)}i.addEventListener(`focusin`,o),a.addEventListener(`focusin`,o);let s=new MutationObserver(e=>{for(let t of e)t.previousSibling===a&&(a.remove(),r.insertAdjacentElement(`beforeend`,a)),t.nextSibling===i&&(i.remove(),r.insertAdjacentElement(`afterbegin`,i))});s.observe(r,{childList:!0,subtree:!1}),g(()=>{i.removeEventListener(`focusin`,o),a.removeEventListener(`focusin`,o),i.remove(),a.remove(),s.disconnect()})})}var Po=`data-live-announcer`;function Fo(e){T(()=>{V(e.isDisabled)||g(Ro(V(e.targets),V(e.root)))})}var Io=new WeakMap,Lo=[];function Ro(e,t=document.body){let n=new Set(e),r=new Set,i=e=>{for(let t of e.querySelectorAll(`[${Po}], [${Wa}]`))n.add(t);let t=e=>{if(n.has(e)||e.parentElement&&r.has(e.parentElement)&&e.parentElement.getAttribute(`role`)!==`row`)return NodeFilter.FILTER_REJECT;for(let t of n)if(e.contains(t))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t}),o=t(e);if(o===NodeFilter.FILTER_ACCEPT&&a(e),o!==NodeFilter.FILTER_REJECT){let e=i.nextNode();for(;e!=null;)a(e),e=i.nextNode()}},a=e=>{let t=Io.get(e)??0;e.getAttribute(`aria-hidden`)===`true`&&t===0||(t===0&&e.setAttribute(`aria-hidden`,`true`),r.add(e),Io.set(e,t+1))};Lo.length&&Lo[Lo.length-1].disconnect(),i(t);let o=new MutationObserver(e=>{for(let t of e)if(!(t.type!==`childList`||t.addedNodes.length===0)&&![...n,...r].some(e=>e.contains(t.target))){for(let e of t.removedNodes)e instanceof Element&&(n.delete(e),r.delete(e));for(let e of t.addedNodes)(e instanceof HTMLElement||e instanceof SVGElement)&&(e.dataset.liveAnnouncer===`true`||e.dataset.reactAriaTopLayer===`true`)?n.add(e):e instanceof Element&&i(e)}});o.observe(t,{childList:!0,subtree:!0});let s={observe(){o.observe(t,{childList:!0,subtree:!0})},disconnect(){o.disconnect()}};return Lo.push(s),()=>{o.disconnect();for(let e of r){let t=Io.get(e);if(t==null)return;t===1?(e.removeAttribute(`aria-hidden`),Io.delete(e)):Io.set(e,t-1)}s===Lo[Lo.length-1]?(Lo.pop(),Lo.length&&Lo[Lo.length-1].observe()):Lo.splice(Lo.indexOf(s),1)}}var zo=(e,t)=>{if(e.contains(t))return!0;let n=t;for(;n;){if(n===e)return!0;n=n._$host??n.parentElement}return!1},Bo=new Map,Vo=e=>{T(()=>{let t=_o(e.style)??{},n=_o(e.properties)??[],r={};for(let n in t)r[n]=e.element.style[n];let i=Bo.get(e.key);i?i.activeCount++:Bo.set(e.key,{activeCount:1,originalStyles:r,properties:n.map(e=>e.key)}),Object.assign(e.element.style,e.style);for(let t of n)e.element.style.setProperty(t.key,t.value);g(()=>{let t=Bo.get(e.key);if(t){if(t.activeCount!==1){t.activeCount--;return}Bo.delete(e.key);for(let[n,r]of Object.entries(t.originalStyles))e.element.style[n]=r;for(let n of t.properties)e.element.style.removeProperty(n);e.element.style.length===0&&e.element.removeAttribute(`style`),e.cleanup?.()}})})},Ho=(e,t)=>{switch(t){case`x`:return[e.clientWidth,e.scrollLeft,e.scrollWidth];case`y`:return[e.clientHeight,e.scrollTop,e.scrollHeight]}},Uo=(e,t)=>{let n=getComputedStyle(e),r=t===`x`?n.overflowX:n.overflowY;return r===`auto`||r===`scroll`||e.tagName===`HTML`&&r===`visible`},Wo=(e,t,n)=>{let r=t===`x`&&window.getComputedStyle(e).direction===`rtl`?-1:1,i=e,a=0,o=0,s=!1;do{let[e,c,l]=Ho(i,t),u=l-e-r*c;(c!==0||u!==0)&&Uo(i,t)&&(a+=u,o+=c),i===(n??document.documentElement)?s=!0:i=i._$host??i.parentElement}while(i&&!s);return[a,o]},[Go,Ko]=R([]),qo=e=>Go().indexOf(e)===Go().length-1,Jo=e=>{let t=a({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:`padding`,restoreScrollPosition:!0,allowPinchZoom:!1},e),n=_(),r=[0,0],i=null,o=null;T(()=>{_o(t.enabled)&&(Ko(e=>[...e,n]),g(()=>{Ko(e=>e.filter(e=>e!==n))}))}),T(()=>{if(!_o(t.enabled)||!_o(t.hideScrollbar))return;let{body:e}=document,n=window.innerWidth-e.offsetWidth;if(_o(t.preventScrollbarShift)){let r={overflow:`hidden`},i=[];n>0&&(_o(t.preventScrollbarShiftMode)===`padding`?r.paddingRight=`calc(${window.getComputedStyle(e).paddingRight} + ${n}px)`:r.marginRight=`calc(${window.getComputedStyle(e).marginRight} + ${n}px)`,i.push({key:`--scrollbar-width`,value:`${n}px`}));let a=window.scrollY,o=window.scrollX;Vo({key:`prevent-scroll`,element:e,style:r,properties:i,cleanup:()=>{_o(t.restoreScrollPosition)&&n>0&&window.scrollTo(o,a)}})}else Vo({key:`prevent-scroll`,element:e,style:{overflow:`hidden`}})}),T(()=>{!qo(n)||!_o(t.enabled)||(document.addEventListener(`wheel`,c,{passive:!1}),document.addEventListener(`touchstart`,s,{passive:!1}),document.addEventListener(`touchmove`,l,{passive:!1}),g(()=>{document.removeEventListener(`wheel`,c),document.removeEventListener(`touchstart`,s),document.removeEventListener(`touchmove`,l)}))});let s=e=>{r=Xo(e),i=null,o=null},c=e=>{let n=e.target,r=_o(t.element),i=Yo(e),a=Math.abs(i[0])>Math.abs(i[1])?`x`:`y`,o=Zo(n,a,a===`x`?i[0]:i[1],r),s;s=r&&zo(r,n)?!o:!0,s&&e.cancelable&&e.preventDefault()},l=e=>{let n=_o(t.element),a=e.target,s;if(e.touches.length===2)s=!_o(t.allowPinchZoom);else{if(i==null||o===null){let t=Xo(e).map((e,t)=>r[t]-e),n=Math.abs(t[0])>Math.abs(t[1])?`x`:`y`;i=n,o=n===`x`?t[0]:t[1]}if(a.type===`range`)s=!1;else{let e=Zo(a,i,o,n);s=n&&zo(n,a)?!e:!0}}s&&e.cancelable&&e.preventDefault()}},Yo=e=>[e.deltaX,e.deltaY],Xo=e=>e.changedTouches[0]?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0],Zo=(e,t,n,r)=>{let[i,a]=Wo(e,t,r!==null&&zo(r,e)?r:void 0);return!(n>0&&Math.abs(i)<=1||n<0&&Math.abs(a)<1)},Qo=Jo,$o={};An($o,{Description:()=>Co,ErrorMessage:()=>Oo,Item:()=>is,ItemControl:()=>as,ItemDescription:()=>os,ItemIndicator:()=>ss,ItemInput:()=>cs,ItemLabel:()=>ls,Label:()=>us,RadioGroup:()=>fs,Root:()=>ds,useRadioGroupContext:()=>ts});var es=A();function ts(){let e=w(es);if(e===void 0)throw Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");return e}var ns=A();function rs(){let e=w(ns);if(e===void 0)throw Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");return e}function is(e){let t=So(),n=ts(),[r,i]=x(Y({id:`${t.generateId(`item`)}-${_()}`},e),[`value`,`disabled`,`onPointerDown`]),[o,s]=R(),[c,l]=R(),[u,d]=R(),[f,p]=R(),[m,h]=R(!1),g=L(()=>n.isDefaultValue(r.value)),v=L(()=>n.isSelectedValue(r.value)),y=L(()=>r.disabled||t.isDisabled()||!1),b=e=>{K(e,r.onPointerDown),m()&&e.preventDefault()},S=L(()=>({...t.dataset(),"data-disabled":y()?``:void 0,"data-checked":v()?``:void 0})),C={value:()=>r.value,dataset:S,isDefault:g,isSelected:v,isDisabled:y,inputId:o,labelId:c,descriptionId:u,inputRef:f,select:()=>n.setSelectedValue(r.value),generateId:zt(()=>i.id),registerInput:go(s),registerLabel:go(l),registerDescription:go(d),setIsFocused:h,setInputRef:p};return N(ns.Provider,{value:C,get children(){return N(X,a({as:`div`,role:`group`,onPointerDown:b},S,i))}})}function as(e){let t=rs(),[n,r]=x(Y({id:t.generateId(`control`)},e),[`onClick`,`onKeyDown`]);return N(X,a({as:`div`,onClick:e=>{K(e,n.onClick),t.select(),t.inputRef()?.focus()},onKeyDown:e=>{K(e,n.onKeyDown),e.key===Gt.Space&&(t.select(),t.inputRef()?.focus())}},()=>t.dataset(),r))}function os(e){let t=rs(),n=Y({id:t.generateId(`description`)},e);return T(()=>g(t.registerDescription(n.id))),N(X,a({as:`div`},()=>t.dataset(),n))}function ss(e){let t=rs(),[n,r]=x(Y({id:t.generateId(`indicator`)},e),[`ref`,`forceMount`]),[i,o]=R(),{present:s}=vo({show:()=>n.forceMount||t.isSelected(),element:()=>i()??null});return N(I,{get when(){return s()},get children(){return N(X,a({as:`div`,ref(e){let t=mt(o,n.ref);typeof t==`function`&&t(e)}},()=>t.dataset(),r))}})}function cs(e){let t=So(),n=ts(),r=rs(),[i,o]=x(Y({id:r.generateId(`input`)},e),[`ref`,`style`,`aria-labelledby`,`aria-describedby`,`onChange`,`onFocus`,`onBlur`]),s=()=>[i[`aria-labelledby`],r.labelId(),i[`aria-labelledby`]!=null&&o[`aria-label`]!=null?o.id:void 0].filter(Boolean).join(` `)||void 0,c=()=>[i[`aria-describedby`],r.descriptionId(),n.ariaDescribedBy()].filter(Boolean).join(` `)||void 0,[l,u]=R(!1),f=e=>{if(K(e,i.onChange),e.stopPropagation(),!l()){n.setSelectedValue(r.value());let t=e.target;t.checked=r.isSelected()}u(!1)},p=e=>{K(e,i.onFocus),r.setIsFocused(!0)},m=e=>{K(e,i.onBlur),r.setIsFocused(!1)};return T(d([()=>r.isSelected(),()=>r.value()],e=>{if(!e[0]&&e[1]===r.value())return;u(!0);let t=r.inputRef();t?.dispatchEvent(new Event(`input`,{bubbles:!0,cancelable:!0})),t?.dispatchEvent(new Event(`change`,{bubbles:!0,cancelable:!0}))},{defer:!0})),T(()=>g(r.registerInput(o.id))),N(X,a({as:`input`,ref(e){let t=mt(r.setInputRef,i.ref);typeof t==`function`&&t(e)},type:`radio`,get name(){return t.name()},get value(){return r.value()},get checked(){return r.isSelected()},get required(){return t.isRequired()},get disabled(){return r.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return Nt({...En},i.style)},get"aria-labelledby"(){return s()},get"aria-describedby"(){return c()},onChange:f,onFocus:p,onBlur:m},()=>r.dataset(),o))}function ls(e){let t=rs(),n=Y({id:t.generateId(`label`)},e);return T(()=>g(t.registerLabel(n.id))),N(X,a({as:`label`,get for(){return t.inputId()}},()=>t.dataset(),n))}function us(e){return N(wo,a({as:`span`},e))}function ds(e){let t,[n,r,i]=x(Y({id:`radiogroup-${_()}`,orientation:`vertical`},e),[`ref`,`value`,`defaultValue`,`onChange`,`orientation`,`aria-labelledby`,`aria-describedby`],yo),[o,s]=Fn({value:()=>n.value,defaultValue:()=>n.defaultValue,onChange:e=>n.onChange?.(e)}),{formControlContext:c}=bo(r);To(()=>t,()=>s(n.defaultValue??``));let l=()=>c.getAriaLabelledBy(V(r.id),i[`aria-label`],n[`aria-labelledby`]),u=()=>c.getAriaDescribedBy(n[`aria-describedby`]),d=t=>t===e.defaultValue,f=e=>e===o(),p={ariaDescribedBy:u,isDefaultValue:d,isSelectedValue:f,setSelectedValue:e=>{if(!(c.isReadOnly()||c.isDisabled())&&(s(e),t))for(let e of t.querySelectorAll(`[type='radio']`)){let t=e;t.checked=f(t.value)}}};return N(xo.Provider,{value:c,get children(){return N(es.Provider,{value:p,get children(){return N(X,a({as:`div`,ref(e){let r=mt(e=>t=e,n.ref);typeof r==`function`&&r(e)},role:`radiogroup`,get id(){return V(r.id)},get"aria-invalid"(){return c.validationState()===`invalid`||void 0},get"aria-required"(){return c.isRequired()||void 0},get"aria-disabled"(){return c.isDisabled()||void 0},get"aria-readonly"(){return c.isReadOnly()||void 0},get"aria-orientation"(){return n.orientation},get"aria-labelledby"(){return l()},get"aria-describedby"(){return u()}},()=>c.dataset(),i))}})}})}var fs=Object.assign(ds,{Description:Co,ErrorMessage:Oo,Item:is,ItemControl:as,ItemDescription:os,ItemIndicator:ss,ItemInput:cs,ItemLabel:ls,Label:us}),ps=class{collection;ref;collator;constructor(e,t,n){this.collection=e,this.ref=t,this.collator=n}getKeyBelow(e){let t=this.collection().getKeyAfter(e);for(;t!=null;){let e=this.collection().getItem(t);if(e&&e.type===`item`&&!e.disabled)return t;t=this.collection().getKeyAfter(t)}}getKeyAbove(e){let t=this.collection().getKeyBefore(e);for(;t!=null;){let e=this.collection().getItem(t);if(e&&e.type===`item`&&!e.disabled)return t;t=this.collection().getKeyBefore(t)}}getFirstKey(){let e=this.collection().getFirstKey();for(;e!=null;){let t=this.collection().getItem(e);if(t&&t.type===`item`&&!t.disabled)return e;e=this.collection().getKeyAfter(e)}}getLastKey(){let e=this.collection().getLastKey();for(;e!=null;){let t=this.collection().getItem(e);if(t&&t.type===`item`&&!t.disabled)return e;e=this.collection().getKeyBefore(e)}}getItem(e){return this.ref?.()?.querySelector(`[data-key="${e}"]`)??null}getKeyPageAbove(e){let t=this.ref?.(),n=this.getItem(e);if(!t||!n)return;let r=Math.max(0,n.offsetTop+n.offsetHeight-t.offsetHeight),i=e;for(;i&&n&&n.offsetTop>r;)i=this.getKeyAbove(i),n=i==null?null:this.getItem(i);return i}getKeyPageBelow(e){let t=this.ref?.(),n=this.getItem(e);if(!t||!n)return;let r=Math.min(t.scrollHeight,n.offsetTop-n.offsetHeight+t.offsetHeight),i=e;for(;i&&n&&n.offsetTop<r;)i=this.getKeyBelow(i),n=i==null?null:this.getItem(i);return i}getKeyForSearch(e,t){let n=this.collator?.();if(!n)return;let r=t==null?this.getFirstKey():this.getKeyBelow(t);for(;r!=null;){let t=this.collection().getItem(r);if(t){let i=t.textValue.slice(0,e.length);if(t.textValue&&n.compare(i,e)===0)return r}r=this.getKeyBelow(r)}}};function ms(e,t,n){let r=$n({usage:`search`,sensitivity:`base`});return ur({selectionManager:()=>V(e.selectionManager),keyboardDelegate:L(()=>V(e.keyboardDelegate)||new ps(e.collection,t,r)),autoFocus:()=>V(e.autoFocus),deferAutoFocus:()=>V(e.deferAutoFocus),shouldFocusWrap:()=>V(e.shouldFocusWrap),disallowEmptySelection:()=>V(e.disallowEmptySelection),selectOnFocus:()=>V(e.selectOnFocus),disallowTypeAhead:()=>V(e.disallowTypeAhead),shouldUseVirtualFocus:()=>V(e.shouldUseVirtualFocus),allowsTabNavigation:()=>V(e.allowsTabNavigation),isVirtualized:()=>V(e.isVirtualized),scrollToKey:t=>V(e.scrollToKey)?.(t),orientation:()=>V(e.orientation)},t)}var hs=A();function gs(){return w(hs)}var _s=A();function vs(){return w(_s)}var ys=A();function bs(){return w(ys)}function xs(){let e=bs();if(e===void 0)throw Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");return e}var Ss=A();function Cs(){let e=w(Ss);if(e===void 0)throw Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");return e}var ws=A();function Ts(){let e=w(ws);if(e===void 0)throw Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");return e}function Es(e){let t,n=Ts(),r=xs(),[i,o]=x(Y({id:n.generateId(`item-${_()}`)},e),[`ref`,`textValue`,`disabled`,`closeOnSelect`,`checked`,`indeterminate`,`onSelect`,`onPointerMove`,`onPointerLeave`,`onPointerDown`,`onPointerUp`,`onClick`,`onKeyDown`,`onMouseDown`,`onFocus`]),[s,c]=R(),[l,u]=R(),[d,f]=R(),p=()=>r.listState().selectionManager(),m=()=>o.id,h=()=>p().focusedKey()===m(),g=()=>{i.onSelect?.(),i.closeOnSelect&&setTimeout(()=>{r.close(!0)})};Er({getItem:()=>({ref:()=>t,type:`item`,key:m(),textValue:i.textValue??d()?.textContent??t?.textContent??``,disabled:i.disabled??!1})});let v=dr({key:m,selectionManager:p,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>i.disabled},()=>t),y=e=>{K(e,i.onPointerMove),e.pointerType===`mouse`&&(i.disabled?r.onItemLeave(e):(r.onItemEnter(e),e.defaultPrevented||(J(e.currentTarget),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(m()))))},b=e=>{K(e,i.onPointerLeave),e.pointerType===`mouse`&&r.onItemLeave(e)},S=e=>{K(e,i.onPointerUp),!i.disabled&&e.button===0&&g()},C=e=>{if(K(e,i.onKeyDown),!e.repeat&&!i.disabled)switch(e.key){case`Enter`:case` `:g();break}},w=L(()=>{if(i.indeterminate)return`mixed`;if(i.checked!=null)return i.checked}),T=L(()=>({"data-indeterminate":i.indeterminate?``:void 0,"data-checked":i.checked&&!i.indeterminate?``:void 0,"data-disabled":i.disabled?``:void 0,"data-highlighted":h()?``:void 0})),E={isChecked:()=>i.checked,dataset:T,setLabelRef:f,generateId:zt(()=>o.id),registerLabel:go(c),registerDescription:go(u)};return N(Ss.Provider,{value:E,get children(){return N(X,a({as:`div`,ref(e){let n=mt(e=>t=e,i.ref);typeof n==`function`&&n(e)},get tabIndex(){return v.tabIndex()},get"aria-checked"(){return w()},get"aria-disabled"(){return i.disabled},get"aria-labelledby"(){return s()},get"aria-describedby"(){return l()},get"data-key"(){return v.dataKey()},get onPointerDown(){return q([i.onPointerDown,v.onPointerDown])},get onPointerUp(){return q([S,v.onPointerUp])},get onClick(){return q([i.onClick,v.onClick])},get onKeyDown(){return q([C,v.onKeyDown])},get onMouseDown(){return q([i.onMouseDown,v.onMouseDown])},get onFocus(){return q([i.onFocus,v.onFocus])},onPointerMove:y,onPointerLeave:b},T,o))}})}function Ds(e){let[t,n]=x(Y({closeOnSelect:!1},e),[`checked`,`defaultChecked`,`onChange`,`onSelect`]),r=Rn({isSelected:()=>t.checked,defaultIsSelected:()=>t.defaultChecked,onSelectedChange:e=>t.onChange?.(e),isDisabled:()=>n.disabled});return N(Es,a({role:`menuitemcheckbox`,get checked(){return r.isSelected()},onSelect:()=>{t.onSelect?.(),r.toggle()}},n))}var Os={next:(e,t)=>e===`ltr`?t===`horizontal`?`ArrowRight`:`ArrowDown`:t===`horizontal`?`ArrowLeft`:`ArrowUp`,previous:(e,t)=>Os.next(e===`ltr`?`rtl`:`ltr`,t)},ks={first:e=>e===`horizontal`?`ArrowDown`:`ArrowRight`,last:e=>e===`horizontal`?`ArrowUp`:`ArrowLeft`};function As(e){let t=Ts(),n=xs(),r=gs(),{direction:i}=Zn(),[o,s]=x(Y({id:t.generateId(`trigger`)},e),[`ref`,`id`,`disabled`,`onPointerDown`,`onClick`,`onKeyDown`,`onMouseOver`,`onFocus`]),c=()=>t.value();r!==void 0&&(c=()=>t.value()??o.id,r.lastValue()===void 0&&r.setLastValue(c));let l=Dn(()=>n.triggerRef(),()=>`button`),u=L(()=>l()===`a`&&n.triggerRef()?.getAttribute(`href`)!=null);T(d(()=>r?.value(),e=>{u()&&e===c()&&n.triggerRef()?.focus()}));let f=()=>{r===void 0?n.toggle(!0):n.isOpen()?r.value()===c()&&r.closeMenu():(r.autoFocusMenu()||r.setAutoFocusMenu(!0),n.open(!1))},p=e=>{K(e,o.onPointerDown),e.currentTarget.dataset.pointerType=e.pointerType,!o.disabled&&e.pointerType!==`touch`&&e.button===0&&f()},h=e=>{K(e,o.onClick),o.disabled||e.currentTarget.dataset.pointerType===`touch`&&f()},_=e=>{if(K(e,o.onKeyDown),!o.disabled){if(u())switch(e.key){case`Enter`:case` `:return}switch(e.key){case`Enter`:case` `:case ks.first(t.orientation()):e.stopPropagation(),e.preventDefault(),Tn(e.currentTarget),n.open(`first`),r?.setAutoFocusMenu(!0),r?.setValue(c);break;case ks.last(t.orientation()):e.stopPropagation(),e.preventDefault(),n.open(`last`);break;case Os.next(i(),t.orientation()):if(r===void 0)break;e.stopPropagation(),e.preventDefault(),r.nextMenu();break;case Os.previous(i(),t.orientation()):if(r===void 0)break;e.stopPropagation(),e.preventDefault(),r.previousMenu();break}}},v=e=>{K(e,o.onMouseOver),n.triggerRef()?.dataset.pointerType!==`touch`&&!o.disabled&&r!==void 0&&r.value()!==void 0&&r.setValue(c)},y=e=>{K(e,o.onFocus),r!==void 0&&e.currentTarget.dataset.pointerType!==`touch`&&r.setValue(c)};return T(()=>g(n.registerTriggerId(o.id))),N(Nn,a({ref(e){let t=mt(n.setTriggerRef,o.ref);typeof t==`function`&&t(e)},get"data-kb-menu-value-trigger"(){return t.value()},get id(){return o.id},get disabled(){return o.disabled},"aria-haspopup":`true`,get"aria-expanded"(){return n.isOpen()},get"aria-controls"(){return m(()=>!!n.isOpen())()?n.contentId():void 0},get"data-highlighted"(){return c()!==void 0&&r?.value()===c()?!0:void 0},get tabIndex(){return r===void 0?void 0:r.value()===c()||r.lastValue()===c()?0:-1},onPointerDown:p,onMouseOver:v,onClick:h,onKeyDown:_,onFocus:y,role:r===void 0?void 0:`menuitem`},()=>n.dataset(),s))}function js(e){let t,n=Ts(),r=xs(),i=gs(),o=vs(),{direction:s}=Zn(),[c,l]=x(Y({id:n.generateId(`content-${_()}`)},e),[`ref`,`id`,`style`,`onOpenAutoFocus`,`onCloseAutoFocus`,`onEscapeKeyDown`,`onFocusOutside`,`onPointerEnter`,`onPointerMove`,`onKeyDown`,`onMouseDown`,`onFocusIn`,`onFocusOut`]),u=0,d=()=>r.parentMenuContext()==null&&i===void 0&&n.isModal(),f=ms({selectionManager:r.listState().selectionManager,collection:r.listState().collection,autoFocus:r.autoFocus,deferAutoFocus:!0,shouldFocusWrap:!0,disallowTypeAhead:()=>!r.listState().selectionManager().isFocused(),orientation:()=>n.orientation()===`horizontal`?`vertical`:`horizontal`},()=>t);No({trapFocus:()=>d()&&r.isOpen(),onMountAutoFocus:e=>{i===void 0&&c.onOpenAutoFocus?.(e)},onUnmountAutoFocus:c.onCloseAutoFocus},()=>t);let p=e=>{if(Bt(e.currentTarget,e.target)&&(e.key===`Tab`&&r.isOpen()&&e.preventDefault(),i!==void 0&&e.currentTarget.getAttribute(`aria-haspopup`)!==`true`))switch(e.key){case Os.next(s(),n.orientation()):e.stopPropagation(),e.preventDefault(),r.close(!0),i.setAutoFocusMenu(!0),i.nextMenu();break;case Os.previous(s(),n.orientation()):if(e.currentTarget.hasAttribute(`data-closed`))break;e.stopPropagation(),e.preventDefault(),r.close(!0),i.setAutoFocusMenu(!0),i.previousMenu();break}},h=e=>{c.onEscapeKeyDown?.(e),i?.setAutoFocusMenu(!1),r.close(!0)},v=e=>{c.onFocusOutside?.(e),n.isModal()&&e.preventDefault()},y=e=>{K(e,c.onPointerEnter),r.isOpen()&&(r.parentMenuContext()?.listState().selectionManager().setFocused(!1),r.parentMenuContext()?.listState().selectionManager().setFocusedKey(void 0))},b=e=>{if(K(e,c.onPointerMove),e.pointerType!==`mouse`)return;let t=e.target,n=u!==e.clientX;Bt(e.currentTarget,t)&&n&&(r.setPointerDir(e.clientX>u?`right`:`left`),u=e.clientX)};T(()=>g(r.registerContentId(c.id))),g(()=>r.setContentRef(void 0));let S={ref:mt(e=>{r.setContentRef(e),t=e},c.ref),role:`menu`,get id(){return c.id},get tabIndex(){return f.tabIndex()},get"aria-labelledby"(){return r.triggerId()},onKeyDown:q([c.onKeyDown,f.onKeyDown,p]),onMouseDown:q([c.onMouseDown,f.onMouseDown]),onFocusIn:q([c.onFocusIn,f.onFocusIn]),onFocusOut:q([c.onFocusOut,f.onFocusOut]),onPointerEnter:y,onPointerMove:b,get"data-orientation"(){return n.orientation()}};return N(I,{get when(){return r.contentPresent()},get children(){return N(I,{get when(){return o===void 0||r.parentMenuContext()!=null},get fallback(){return N(X,a({as:`div`},()=>r.dataset(),S,l))},get children(){return N(Ua.Positioner,{get children(){return N(mo,a({get disableOutsidePointerEvents(){return m(()=>!!d())()&&r.isOpen()},get excludedElements(){return[r.triggerRef]},bypassTopMostLayerCheck:!0,get style(){return Nt({"--kb-menu-content-transform-origin":`var(--kb-popper-content-transform-origin)`,position:`relative`},c.style)},onEscapeKeyDown:h,onFocusOutside:v,get onDismiss(){return r.close}},()=>r.dataset(),S,l))}})}})}})}function Ms(e){let t,n=Ts(),r=xs(),[i,o]=x(e,[`ref`]);return Qo({element:()=>t??null,enabled:()=>r.contentPresent()&&n.preventScroll()}),N(js,a({ref(e){let n=mt(e=>{t=e},i.ref);typeof n==`function`&&n(e)}},o))}var Ns=A();function Ps(){let e=w(Ns);if(e===void 0)throw Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");return e}function Fs(e){let t=Y({id:Ts().generateId(`group-${_()}`)},e),[n,r]=R(),i={generateId:zt(()=>t.id),registerLabelId:go(r)};return N(Ns.Provider,{value:i,get children(){return N(X,a({as:`div`,role:`group`,get"aria-labelledby"(){return n()}},t))}})}function Is(e){let t=Ps(),[n,r]=x(Y({id:t.generateId(`label`)},e),[`id`]);return T(()=>g(t.registerLabelId(n.id))),N(X,a({as:`span`,get id(){return n.id},"aria-hidden":`true`},r))}function Ls(e){let t=xs(),n=Y({children:`▼`},e);return N(X,a({as:`span`,"aria-hidden":`true`},()=>t.dataset(),n))}function Rs(e){return N(Es,a({role:`menuitem`,closeOnSelect:!0},e))}function zs(e){let t=Cs(),[n,r]=x(Y({id:t.generateId(`description`)},e),[`id`]);return T(()=>g(t.registerDescription(n.id))),N(X,a({as:`div`,get id(){return n.id}},()=>t.dataset(),r))}function Bs(e){let t=Cs(),[n,r]=x(Y({id:t.generateId(`indicator`)},e),[`forceMount`]);return N(I,{get when(){return n.forceMount||t.isChecked()},get children(){return N(X,a({as:`div`},()=>t.dataset(),r))}})}function Vs(e){let t=Cs(),[n,r]=x(Y({id:t.generateId(`label`)},e),[`ref`,`id`]);return T(()=>g(t.registerLabel(n.id))),N(X,a({as:`div`,ref(e){let r=mt(t.setLabelRef,n.ref);typeof r==`function`&&r(e)},get id(){return n.id}},()=>t.dataset(),r))}function Hs(e){let t=xs();return N(I,{get when(){return t.contentPresent()},get children(){return N(ae,e)}})}var Us=A();function Ws(){let e=w(Us);if(e===void 0)throw Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");return e}function Gs(e){let[t,n]=x(Y({id:Ts().generateId(`radiogroup-${_()}`)},e),[`value`,`defaultValue`,`onChange`,`disabled`]),[r,i]=Fn({value:()=>t.value,defaultValue:()=>t.defaultValue,onChange:e=>t.onChange?.(e)});return N(Us.Provider,{value:{isDisabled:()=>t.disabled,isSelectedValue:e=>e===r(),setSelectedValue:e=>i(e)},get children(){return N(Fs,n)}})}function Ks(e){let t=Ws(),[n,r]=x(Y({closeOnSelect:!1},e),[`value`,`onSelect`]);return N(Es,a({role:`menuitemradio`,get checked(){return t.isSelectedValue(n.value)},onSelect:()=>{n.onSelect?.(),t.setSelectedValue(n.value)}},r))}function qs(e,t,n){let r=e.split(`-`)[0],i=n.getBoundingClientRect(),a=[],o=t.clientX,s=t.clientY;switch(r){case`top`:a.push([o,s+5]),a.push([i.left,i.bottom]),a.push([i.left,i.top]),a.push([i.right,i.top]),a.push([i.right,i.bottom]);break;case`right`:a.push([o-5,s]),a.push([i.left,i.top]),a.push([i.right,i.top]),a.push([i.right,i.bottom]),a.push([i.left,i.bottom]);break;case`bottom`:a.push([o,s-5]),a.push([i.right,i.top]),a.push([i.right,i.bottom]),a.push([i.left,i.bottom]),a.push([i.left,i.top]);break;case`left`:a.push([o+5,s]),a.push([i.right,i.bottom]),a.push([i.left,i.bottom]),a.push([i.left,i.top]),a.push([i.right,i.top]);break}return a}function Js(e,t){return t?yn([e.clientX,e.clientY],t):!1}function Ys(e){let t=Ts(),n=gr(),r=bs(),i=gs(),o=vs(),[s,c]=x(Y({placement:t.orientation()===`horizontal`?`bottom-start`:`right-start`},e),[`open`,`defaultOpen`,`onOpenChange`]),l=0,u=null,d=`right`,[f,p]=R(),[m,h]=R(),[_,v]=R(),[y,b]=R(),[S,C]=R(!0),[w,E]=R(c.placement),[D,ee]=R([]),[O,k]=R([]),{DomCollectionProvider:A}=Tr({items:O,onItemsChange:k}),j=ho({open:()=>s.open,defaultOpen:()=>s.defaultOpen,onOpenChange:e=>s.onOpenChange?.(e)}),{present:te}=vo({show:()=>t.forceMount()||j.isOpen(),element:()=>y()??null}),M=mr({selectionMode:`none`,dataSource:O}),ne=e=>{C(e),j.open()},re=(e=!1)=>{j.close(),e&&r&&r.close(!0)},ie=e=>{C(e),j.toggle()},ae=()=>{let e=y();e&&(J(e),M.selectionManager().setFocused(!0),M.selectionManager().setFocusedKey(void 0))},P=()=>{o==null?ae():setTimeout(()=>ae())},F=e=>{ee(t=>[...t,e]);let t=r?.registerNestedMenu(e);return()=>{ee(t=>Ft(t,e)),t?.()}},oe=e=>d===u?.side&&Js(e,u?.area),se=e=>{oe(e)&&e.preventDefault()},ce=e=>{oe(e)||P()},le=e=>{oe(e)&&e.preventDefault()};Fo({isDisabled:()=>!(r==null&&j.isOpen()&&t.isModal()),targets:()=>[y(),...D()].filter(Boolean)}),T(()=>{let e=y();if(!e||!r)return;let t=r.registerNestedMenu(e);g(()=>{t()})}),T(()=>{r===void 0&&i?.registerMenu(t.value(),[y(),...D()])}),T(()=>{r!==void 0||i===void 0||(i.value()===t.value()?(_()?.focus(),i.autoFocusMenu()&&ne(!0)):re())}),T(()=>{r!==void 0||i===void 0||j.isOpen()&&i.setValue(t.value())}),g(()=>{r===void 0&&i?.unregisterMenu(t.value())});let z={dataset:L(()=>({"data-expanded":j.isOpen()?``:void 0,"data-closed":j.isOpen()?void 0:``})),isOpen:j.isOpen,contentPresent:te,nestedMenus:D,currentPlacement:w,pointerGraceTimeoutId:()=>l,autoFocus:S,listState:()=>M,parentMenuContext:()=>r,triggerRef:_,contentRef:y,triggerId:f,contentId:m,setTriggerRef:v,setContentRef:b,open:ne,close:re,toggle:ie,focusContent:P,onItemEnter:se,onItemLeave:ce,onTriggerLeave:le,setPointerDir:e=>d=e,setPointerGraceTimeoutId:e=>l=e,setPointerGraceIntent:e=>u=e,registerNestedMenu:F,registerItemToParentDomCollection:n?.registerItem,registerTriggerId:go(p),registerContentId:go(h)};return N(A,{get children(){return N(ys.Provider,{value:z,get children(){return N(I,{when:o===void 0,get fallback(){return c.children},get children(){return N(Ua,a({anchorRef:_,contentRef:y,onCurrentPlacementChange:E},c))}})}})}})}function Xs(e){let{direction:t}=Zn();return N(Ys,a({get placement(){return t()===`rtl`?`left-start`:`right-start`},flip:!0},e))}var Zs={close:(e,t)=>e===`ltr`?[t===`horizontal`?`ArrowLeft`:`ArrowUp`]:[t===`horizontal`?`ArrowRight`:`ArrowDown`]};function Qs(e){let t=xs(),n=Ts(),[r,i]=x(e,[`onFocusOutside`,`onKeyDown`]),{direction:o}=Zn();return N(js,a({onOpenAutoFocus:e=>{e.preventDefault()},onCloseAutoFocus:e=>{e.preventDefault()},onFocusOutside:e=>{r.onFocusOutside?.(e);let n=e.target;Bt(t.triggerRef(),n)||t.close()},onKeyDown:e=>{K(e,r.onKeyDown);let i=Bt(e.currentTarget,e.target),a=Zs.close(o(),n.orientation()).includes(e.key),s=t.parentMenuContext()!=null;i&&a&&s&&(t.close(),J(t.triggerRef()))}},i))}var $s=[`Enter`,` `],ec={open:(e,t)=>e===`ltr`?[...$s,t===`horizontal`?`ArrowRight`:`ArrowDown`]:[...$s,t===`horizontal`?`ArrowLeft`:`ArrowUp`]};function tc(e){let t,n=Ts(),r=xs(),[i,o]=x(Y({id:n.generateId(`sub-trigger-${_()}`)},e),[`ref`,`id`,`textValue`,`disabled`,`onPointerMove`,`onPointerLeave`,`onPointerDown`,`onPointerUp`,`onClick`,`onKeyDown`,`onMouseDown`,`onFocus`]),s=null,c=()=>{s&&window.clearTimeout(s),s=null},{direction:l}=Zn(),u=()=>i.id,f=()=>{let e=r.parentMenuContext();if(e==null)throw Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");return e.listState().selectionManager()},p=()=>r.listState().collection(),h=()=>f().focusedKey()===u(),v=dr({key:u,selectionManager:f,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>i.disabled},()=>t),y=e=>{K(e,i.onClick),!r.isOpen()&&!i.disabled&&r.open(!0)},b=e=>{if(K(e,i.onPointerMove),e.pointerType!==`mouse`)return;let t=r.parentMenuContext();if(t?.onItemEnter(e),!e.defaultPrevented){if(i.disabled){t?.onItemLeave(e);return}!r.isOpen()&&!s&&(r.parentMenuContext()?.setPointerGraceIntent(null),s=window.setTimeout(()=>{r.open(!1),c()},100)),t?.onItemEnter(e),e.defaultPrevented||(r.listState().selectionManager().isFocused()&&(r.listState().selectionManager().setFocused(!1),r.listState().selectionManager().setFocusedKey(void 0)),J(e.currentTarget),t?.listState().selectionManager().setFocused(!0),t?.listState().selectionManager().setFocusedKey(u()))}},S=e=>{if(K(e,i.onPointerLeave),e.pointerType!==`mouse`)return;c();let t=r.parentMenuContext(),n=r.contentRef();if(n){t?.setPointerGraceIntent({area:qs(r.currentPlacement(),e,n),side:r.currentPlacement().split(`-`)[0]}),window.clearTimeout(t?.pointerGraceTimeoutId());let i=window.setTimeout(()=>{t?.setPointerGraceIntent(null)},300);t?.setPointerGraceTimeoutId(i)}else{if(t?.onTriggerLeave(e),e.defaultPrevented)return;t?.setPointerGraceIntent(null)}t?.onItemLeave(e)},C=e=>{K(e,i.onKeyDown),!e.repeat&&(i.disabled||ec.open(l(),n.orientation()).includes(e.key)&&(e.stopPropagation(),e.preventDefault(),f().setFocused(!1),f().setFocusedKey(void 0),r.isOpen()||r.open(`first`),r.focusContent(),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(p().getFirstKey())))};return T(()=>{if(r.registerItemToParentDomCollection==null)throw Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");g(r.registerItemToParentDomCollection({ref:()=>t,type:`item`,key:u(),textValue:i.textValue??t?.textContent??``,disabled:i.disabled??!1}))}),T(d(()=>r.parentMenuContext()?.pointerGraceTimeoutId(),e=>{g(()=>{window.clearTimeout(e),r.parentMenuContext()?.setPointerGraceIntent(null)})})),T(()=>g(r.registerTriggerId(i.id))),g(()=>{c()}),N(X,a({as:`div`,ref(e){let n=mt(e=>{r.setTriggerRef(e),t=e},i.ref);typeof n==`function`&&n(e)},get id(){return i.id},role:`menuitem`,get tabIndex(){return v.tabIndex()},"aria-haspopup":`true`,get"aria-expanded"(){return r.isOpen()},get"aria-controls"(){return m(()=>!!r.isOpen())()?r.contentId():void 0},get"aria-disabled"(){return i.disabled},get"data-key"(){return v.dataKey()},get"data-highlighted"(){return h()?``:void 0},get"data-disabled"(){return i.disabled?``:void 0},get onPointerDown(){return q([i.onPointerDown,v.onPointerDown])},get onPointerUp(){return q([i.onPointerUp,v.onPointerUp])},get onClick(){return q([y,v.onClick])},get onKeyDown(){return q([C,v.onKeyDown])},get onMouseDown(){return q([i.onMouseDown,v.onMouseDown])},get onFocus(){return q([i.onFocus,v.onFocus])},onPointerMove:b,onPointerLeave:S},()=>r.dataset(),o))}function nc(e){let t=gs(),[n,r]=x(Y({id:`menu-${_()}`,modal:!0},e),[`id`,`modal`,`preventScroll`,`forceMount`,`open`,`defaultOpen`,`onOpenChange`,`value`,`orientation`]),i=ho({open:()=>n.open,defaultOpen:()=>n.defaultOpen,onOpenChange:e=>n.onOpenChange?.(e)}),o={isModal:()=>n.modal??!0,preventScroll:()=>n.preventScroll??o.isModal(),forceMount:()=>n.forceMount??!1,generateId:zt(()=>n.id),value:()=>n.value,orientation:()=>n.orientation??t?.orientation()??`horizontal`};return N(ws.Provider,{value:o,get children(){return N(Ys,a({get open(){return i.isOpen()},get onOpenChange(){return i.setIsOpen}},r))}})}An({},{Root:()=>rc,Separator:()=>ic});function rc(e){let t,[n,r]=x(Y({orientation:`horizontal`},e),[`ref`,`orientation`]),i=Dn(()=>t,()=>`hr`);return N(X,a({as:`hr`,ref(e){let r=mt(e=>t=e,n.ref);typeof r==`function`&&r(e)},get role(){return i()===`hr`?void 0:`separator`},get"aria-orientation"(){return n.orientation===`vertical`?`vertical`:void 0},get"data-orientation"(){return n.orientation}},r))}var ic=rc,Z={};An(Z,{Arrow:()=>Pa,CheckboxItem:()=>Ds,Content:()=>ac,DropdownMenu:()=>sc,Group:()=>Fs,GroupLabel:()=>Is,Icon:()=>Ls,Item:()=>Rs,ItemDescription:()=>zs,ItemIndicator:()=>Bs,ItemLabel:()=>Vs,Portal:()=>Hs,RadioGroup:()=>Gs,RadioItem:()=>Ks,Root:()=>oc,Separator:()=>rc,Sub:()=>Xs,SubContent:()=>Qs,SubTrigger:()=>tc,Trigger:()=>As});function ac(e){let t=Ts(),n=xs(),[r,i]=x(e,[`onCloseAutoFocus`,`onInteractOutside`]),o=!1;return N(Ms,a({onCloseAutoFocus:e=>{r.onCloseAutoFocus?.(e),o||J(n.triggerRef()),o=!1,e.preventDefault()},onInteractOutside:e=>{r.onInteractOutside?.(e),(!t.isModal()||e.detail.isContextMenu)&&(o=!0)}},i))}function oc(e){return N(nc,Y({id:`dropdownmenu-${_()}`},e))}var sc=Object.assign(oc,{Arrow:Pa,CheckboxItem:Ds,Content:ac,Group:Fs,GroupLabel:Is,Icon:Ls,Item:Rs,ItemDescription:zs,ItemIndicator:Bs,ItemLabel:Vs,Portal:Hs,RadioGroup:Gs,RadioItem:Ks,Separator:rc,Sub:Xs,SubContent:Qs,SubTrigger:tc,Trigger:As}),Q={colors:{inherit:`inherit`,current:`currentColor`,transparent:`transparent`,black:`#000000`,white:`#ffffff`,neutral:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},darkGray:{50:`#525c7a`,100:`#49536e`,200:`#414962`,300:`#394056`,400:`#313749`,500:`#292e3d`,600:`#212530`,700:`#191c24`,800:`#111318`,900:`#0b0d10`},gray:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},blue:{25:`#F5FAFF`,50:`#EFF8FF`,100:`#D1E9FF`,200:`#B2DDFF`,300:`#84CAFF`,400:`#53B1FD`,500:`#2E90FA`,600:`#1570EF`,700:`#175CD3`,800:`#1849A9`,900:`#194185`},green:{25:`#F6FEF9`,50:`#ECFDF3`,100:`#D1FADF`,200:`#A6F4C5`,300:`#6CE9A6`,400:`#32D583`,500:`#12B76A`,600:`#039855`,700:`#027A48`,800:`#05603A`,900:`#054F31`},red:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`,950:`#450a0a`},yellow:{25:`#FFFCF5`,50:`#FFFAEB`,100:`#FEF0C7`,200:`#FEDF89`,300:`#FEC84B`,400:`#FDB022`,500:`#F79009`,600:`#DC6803`,700:`#B54708`,800:`#93370D`,900:`#7A2E0E`},purple:{25:`#FAFAFF`,50:`#F4F3FF`,100:`#EBE9FE`,200:`#D9D6FE`,300:`#BDB4FE`,400:`#9B8AFB`,500:`#7A5AF8`,600:`#6938EF`,700:`#5925DC`,800:`#4A1FB8`,900:`#3E1C96`},teal:{25:`#F6FEFC`,50:`#F0FDF9`,100:`#CCFBEF`,200:`#99F6E0`,300:`#5FE9D0`,400:`#2ED3B7`,500:`#15B79E`,600:`#0E9384`,700:`#107569`,800:`#125D56`,900:`#134E48`},pink:{25:`#fdf2f8`,50:`#fce7f3`,100:`#fbcfe8`,200:`#f9a8d4`,300:`#f472b6`,400:`#ec4899`,500:`#db2777`,600:`#be185d`,700:`#9d174d`,800:`#831843`,900:`#500724`},cyan:{25:`#ecfeff`,50:`#cffafe`,100:`#a5f3fc`,200:`#67e8f9`,300:`#22d3ee`,400:`#06b6d4`,500:`#0891b2`,600:`#0e7490`,700:`#155e75`,800:`#164e63`,900:`#083344`}},alpha:{100:`ff`,90:`e5`,80:`cc`,70:`b3`,60:`99`,50:`80`,40:`66`,30:`4d`,20:`33`,10:`1a`,0:`00`},font:{size:{"2xs":`calc(var(--tsqd-font-size) * 0.625)`,xs:`calc(var(--tsqd-font-size) * 0.75)`,sm:`calc(var(--tsqd-font-size) * 0.875)`,md:`var(--tsqd-font-size)`,lg:`calc(var(--tsqd-font-size) * 1.125)`,xl:`calc(var(--tsqd-font-size) * 1.25)`,"2xl":`calc(var(--tsqd-font-size) * 1.5)`,"3xl":`calc(var(--tsqd-font-size) * 1.875)`,"4xl":`calc(var(--tsqd-font-size) * 2.25)`,"5xl":`calc(var(--tsqd-font-size) * 3)`,"6xl":`calc(var(--tsqd-font-size) * 3.75)`,"7xl":`calc(var(--tsqd-font-size) * 4.5)`,"8xl":`calc(var(--tsqd-font-size) * 6)`,"9xl":`calc(var(--tsqd-font-size) * 8)`},lineHeight:{xs:`calc(var(--tsqd-font-size) * 1)`,sm:`calc(var(--tsqd-font-size) * 1.25)`,md:`calc(var(--tsqd-font-size) * 1.5)`,lg:`calc(var(--tsqd-font-size) * 1.75)`,xl:`calc(var(--tsqd-font-size) * 2)`,"2xl":`calc(var(--tsqd-font-size) * 2.25)`,"3xl":`calc(var(--tsqd-font-size) * 2.5)`,"4xl":`calc(var(--tsqd-font-size) * 2.75)`,"5xl":`calc(var(--tsqd-font-size) * 3)`,"6xl":`calc(var(--tsqd-font-size) * 3.25)`,"7xl":`calc(var(--tsqd-font-size) * 3.5)`,"8xl":`calc(var(--tsqd-font-size) * 3.75)`,"9xl":`calc(var(--tsqd-font-size) * 4)`},weight:{thin:`100`,extralight:`200`,light:`300`,normal:`400`,medium:`500`,semibold:`600`,bold:`700`,extrabold:`800`,black:`900`}},breakpoints:{xs:`320px`,sm:`640px`,md:`768px`,lg:`1024px`,xl:`1280px`,"2xl":`1536px`},border:{radius:{none:`0px`,xs:`calc(var(--tsqd-font-size) * 0.125)`,sm:`calc(var(--tsqd-font-size) * 0.25)`,md:`calc(var(--tsqd-font-size) * 0.375)`,lg:`calc(var(--tsqd-font-size) * 0.5)`,xl:`calc(var(--tsqd-font-size) * 0.75)`,"2xl":`calc(var(--tsqd-font-size) * 1)`,"3xl":`calc(var(--tsqd-font-size) * 1.5)`,full:`9999px`}},size:{0:`0px`,.25:`calc(var(--tsqd-font-size) * 0.0625)`,.5:`calc(var(--tsqd-font-size) * 0.125)`,1:`calc(var(--tsqd-font-size) * 0.25)`,1.5:`calc(var(--tsqd-font-size) * 0.375)`,2:`calc(var(--tsqd-font-size) * 0.5)`,2.5:`calc(var(--tsqd-font-size) * 0.625)`,3:`calc(var(--tsqd-font-size) * 0.75)`,3.5:`calc(var(--tsqd-font-size) * 0.875)`,4:`calc(var(--tsqd-font-size) * 1)`,4.5:`calc(var(--tsqd-font-size) * 1.125)`,5:`calc(var(--tsqd-font-size) * 1.25)`,5.5:`calc(var(--tsqd-font-size) * 1.375)`,6:`calc(var(--tsqd-font-size) * 1.5)`,6.5:`calc(var(--tsqd-font-size) * 1.625)`,7:`calc(var(--tsqd-font-size) * 1.75)`,8:`calc(var(--tsqd-font-size) * 2)`,9:`calc(var(--tsqd-font-size) * 2.25)`,10:`calc(var(--tsqd-font-size) * 2.5)`,11:`calc(var(--tsqd-font-size) * 2.75)`,12:`calc(var(--tsqd-font-size) * 3)`,14:`calc(var(--tsqd-font-size) * 3.5)`,16:`calc(var(--tsqd-font-size) * 4)`,20:`calc(var(--tsqd-font-size) * 5)`,24:`calc(var(--tsqd-font-size) * 6)`,28:`calc(var(--tsqd-font-size) * 7)`,32:`calc(var(--tsqd-font-size) * 8)`,36:`calc(var(--tsqd-font-size) * 9)`,40:`calc(var(--tsqd-font-size) * 10)`,44:`calc(var(--tsqd-font-size) * 11)`,48:`calc(var(--tsqd-font-size) * 12)`,52:`calc(var(--tsqd-font-size) * 13)`,56:`calc(var(--tsqd-font-size) * 14)`,60:`calc(var(--tsqd-font-size) * 15)`,64:`calc(var(--tsqd-font-size) * 16)`,72:`calc(var(--tsqd-font-size) * 18)`,80:`calc(var(--tsqd-font-size) * 20)`,96:`calc(var(--tsqd-font-size) * 24)`},shadow:{xs:(e=`rgb(0 0 0 / 0.1)`)=>`0 1px 2px 0 rgb(0 0 0 / 0.05)`,sm:(e=`rgb(0 0 0 / 0.1)`)=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e=`rgb(0 0 0 / 0.1)`)=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e=`rgb(0 0 0 / 0.1)`)=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e=`rgb(0 0 0 / 0.1)`)=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e=`rgb(0 0 0 / 0.25)`)=>`0 25px 50px -12px ${e}`,inner:(e=`rgb(0 0 0 / 0.05)`)=>`inset 0 2px 4px 0 ${e}`,none:()=>`none`},zIndices:{hide:-1,auto:`auto`,base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},cc=F(`<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`),lc=F(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),uc=F(`<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`),dc=F(`<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`),fc=F(`<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`),pc=F(`<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg style=transform:rotate(90deg)><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`),mc=F(`<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg style=transform:rotate(-90deg)><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`),hc=F(`<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),gc=F(`<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),_c=F(`<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),vc=F(`<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">`),yc=F(`<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">`),bc=F(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),xc=F(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),Sc=F(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>`),Cc=F(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),wc=F(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),Tc=F(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),Ec=F(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>`),Dc=F(`<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),Oc=F(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),kc=F(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>`),Ac=F(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),jc=F(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),Mc=F(`<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>`);function Nc(){return cc()}function Pc(){return lc()}function Fc(){return uc()}function Ic(){return dc()}function Lc(){return fc()}function Rc(){return pc()}function zc(){return mc()}function Bc(){return hc()}function Vc(){return gc()}function Hc(){return _c()}function Uc(){return vc()}function Wc(){return yc()}function Gc(){return bc()}function Kc(){return xc()}function qc(){return Sc()}function Jc(){return Cc()}function Yc(e){return(()=>{var t=wc(),n=t.firstChild;return z(()=>b(n,`stroke`,e.theme===`dark`?`#12B76A`:`#027A48`)),t})()}function Xc(){return Tc()}function Zc(){return Ec()}function Qc(e){return[N(I,{get when(){return e.checked},get children(){var t=wc(),n=t.firstChild;return z(()=>b(n,`stroke`,e.theme===`dark`?`#9B8AFB`:`#6938EF`)),t}}),N(I,{get when(){return!e.checked},get children(){var t=Dc(),n=t.firstChild;return z(()=>b(n,`stroke`,e.theme===`dark`?`#9B8AFB`:`#6938EF`)),t}})]}function $c(){return Oc()}function el(){return kc()}function tl(){return Ac()}function nl(){return jc()}function rl(){let e=_();return(()=>{var t=Mc(),n=t.firstChild,r=n.nextSibling,i=r.nextSibling,a=i.firstChild,o=i.nextSibling,s=o.firstChild,c=o.nextSibling,l=c.nextSibling,u=l.firstChild,d=l.nextSibling,f=d.firstChild,p=d.nextSibling,m=p.nextSibling,h=m.firstChild,g=m.nextSibling,_=g.firstChild,v=g.nextSibling,y=v.nextSibling,x=y.firstChild,S=y.nextSibling,C=S.firstChild,w=S.nextSibling,T=w.nextSibling,E=T.firstChild,D=T.nextSibling,ee=D.firstChild,O=D.nextSibling,k=O.nextSibling,A=k.firstChild,j=k.nextSibling,te=j.firstChild,M=j.nextSibling,ne=M.nextSibling,re=ne.firstChild,N=ne.nextSibling,ie=N.firstChild,ae=N.nextSibling,P=ae.firstChild.nextSibling.nextSibling.nextSibling,F=P.nextSibling,oe=ae.nextSibling,I=oe.firstChild,se=oe.nextSibling,ce=se.firstChild,L=se.nextSibling,le=L.firstChild,R=le.nextSibling,z=R.nextSibling.firstChild,B=z.nextSibling,ue=B.nextSibling,de=ue.nextSibling,fe=de.nextSibling,pe=fe.nextSibling,V=pe.nextSibling,me=V.nextSibling,he=me.nextSibling,ge=he.nextSibling,_e=ge.nextSibling,ve=_e.nextSibling,ye=L.nextSibling,be=ye.firstChild,xe=ye.nextSibling,Se=xe.firstChild,Ce=xe.nextSibling,we=Ce.firstChild,Te=we.nextSibling,Ee=Ce.nextSibling,De=Ee.firstChild,Oe=Ee.nextSibling,ke=Oe.firstChild,Ae=Oe.nextSibling,je=Ae.firstChild,Me=je.nextSibling,Ne=Me.nextSibling,Pe=Ne.nextSibling,Fe=Pe.nextSibling,Ie=Fe.nextSibling,H=Ie.nextSibling,Le=H.nextSibling,Re=Le.nextSibling,ze=Re.nextSibling,Be=ze.nextSibling,Ve=Be.nextSibling,U=Ve.nextSibling,He=U.nextSibling,Ue=He.nextSibling,We=Ue.nextSibling,Ge=We.nextSibling,Ke=Ge.nextSibling;return b(n,`id`,`a-${e}`),b(r,`fill`,`url(#a-${e})`),b(a,`id`,`am-${e}`),b(o,`id`,`b-${e}`),b(s,`filter`,`url(#am-${e})`),b(c,`mask`,`url(#b-${e})`),b(u,`id`,`ah-${e}`),b(d,`id`,`k-${e}`),b(f,`filter`,`url(#ah-${e})`),b(p,`mask`,`url(#k-${e})`),b(h,`id`,`ae-${e}`),b(g,`id`,`j-${e}`),b(_,`filter`,`url(#ae-${e})`),b(v,`mask`,`url(#j-${e})`),b(x,`id`,`ai-${e}`),b(S,`id`,`i-${e}`),b(C,`filter`,`url(#ai-${e})`),b(w,`mask`,`url(#i-${e})`),b(E,`id`,`aj-${e}`),b(D,`id`,`h-${e}`),b(ee,`filter`,`url(#aj-${e})`),b(O,`mask`,`url(#h-${e})`),b(A,`id`,`ag-${e}`),b(j,`id`,`g-${e}`),b(te,`filter`,`url(#ag-${e})`),b(M,`mask`,`url(#g-${e})`),b(re,`id`,`af-${e}`),b(N,`id`,`f-${e}`),b(ie,`filter`,`url(#af-${e})`),b(ae,`mask`,`url(#f-${e})`),b(P,`id`,`m-${e}`),b(F,`fill`,`url(#m-${e})`),b(I,`id`,`ak-${e}`),b(se,`id`,`e-${e}`),b(ce,`filter`,`url(#ak-${e})`),b(L,`mask`,`url(#e-${e})`),b(le,`id`,`n-${e}`),b(R,`fill`,`url(#n-${e})`),b(z,`id`,`r-${e}`),b(B,`fill`,`url(#r-${e})`),b(ue,`id`,`s-${e}`),b(de,`fill`,`url(#s-${e})`),b(fe,`id`,`q-${e}`),b(pe,`fill`,`url(#q-${e})`),b(V,`id`,`p-${e}`),b(me,`fill`,`url(#p-${e})`),b(he,`id`,`o-${e}`),b(ge,`fill`,`url(#o-${e})`),b(_e,`id`,`l-${e}`),b(ve,`fill`,`url(#l-${e})`),b(be,`id`,`al-${e}`),b(xe,`id`,`d-${e}`),b(Se,`filter`,`url(#al-${e})`),b(Ce,`mask`,`url(#d-${e})`),b(we,`id`,`u-${e}`),b(Te,`fill`,`url(#u-${e})`),b(De,`id`,`ad-${e}`),b(Oe,`id`,`c-${e}`),b(ke,`filter`,`url(#ad-${e})`),b(Ae,`mask`,`url(#c-${e})`),b(je,`id`,`t-${e}`),b(Me,`fill`,`url(#t-${e})`),b(Ne,`id`,`v-${e}`),b(Pe,`stroke`,`url(#v-${e})`),b(Fe,`id`,`aa-${e}`),b(Ie,`stroke`,`url(#aa-${e})`),b(H,`id`,`w-${e}`),b(Le,`stroke`,`url(#w-${e})`),b(Re,`id`,`ac-${e}`),b(ze,`stroke`,`url(#ac-${e})`),b(Be,`id`,`ab-${e}`),b(Ve,`stroke`,`url(#ab-${e})`),b(U,`id`,`y-${e}`),b(He,`stroke`,`url(#y-${e})`),b(Ue,`id`,`x-${e}`),b(We,`stroke`,`url(#x-${e})`),b(Ge,`id`,`z-${e}`),b(Ke,`stroke`,`url(#z-${e})`),t})()}var il=F(`<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),al=F(`<button title="Copy object to clipboard">`),ol=F(`<button title="Remove all items"aria-label="Remove all items">`),sl=F(`<button title="Delete item"aria-label="Delete item">`),cl=F(`<button title="Toggle value"aria-label="Toggle value">`),ll=F(`<button title="Bulk Edit Data"aria-label="Bulk Edit Data">`),ul=F(`<div>`),dl=F(`<div><button> <span></span> <span> `),fl=F(`<input>`),pl=F(`<span>`),ml=F(`<div><label>:`),hl=F(`<div><div><button> [<!>...<!>]`);function gl(e,t){let n=0,r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n+=t;return r}var _l=e=>{let t=U(),n=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,r=L(()=>t()===`dark`?El(n):Tl(n));return(()=>{var t=il();return z(()=>O(t,G(r().expander,n`
          transform: rotate(${e.expanded?90:0}deg);
        `,e.expanded&&n`
            & svg {
              top: -1px;
            }
          `))),t})()},vl=e=>{let t=U(),n=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,r=L(()=>t()===`dark`?El(n):Tl(n)),[i,a]=R(`NoCopy`);return(()=>{var n=al();return re(n,`click`,i()===`NoCopy`?()=>{navigator.clipboard.writeText(u(e.value)).then(()=>{a(`SuccessCopy`),setTimeout(()=>{a(`NoCopy`)},1500)},e=>{a(`ErrorCopy`),setTimeout(()=>{a(`NoCopy`)},1500)})}:void 0,!0),p(n,N(ee,{get children(){return[N(E,{get when(){return i()===`NoCopy`},get children(){return N(qc,{})}}),N(E,{get when(){return i()===`SuccessCopy`},get children(){return N(Yc,{get theme(){return t()}})}}),N(E,{get when(){return i()===`ErrorCopy`},get children(){return N(Xc,{})}})]}})),z(e=>{var t=r().actionButton,a=`${i()===`NoCopy`?`Copy object to clipboard`:i()===`SuccessCopy`?`Object copied to clipboard`:`Error copying object to clipboard`}`;return t!==e.e&&O(n,e.e=t),a!==e.t&&b(n,`aria-label`,e.t=a),e},{e:void 0,t:void 0}),n})()},yl=e=>{let t=U(),n=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,r=L(()=>t()===`dark`?El(n):Tl(n)),i=H().client;return(()=>{var t=ol();return t.$$click=()=>{let t=e.activeQuery.state.data,n=C(t,e.dataPath,[]);i.setQueryData(e.activeQuery.queryKey,n)},p(t,N(Zc,{})),z(()=>O(t,r().actionButton)),t})()},bl=e=>{let t=U(),n=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,r=L(()=>t()===`dark`?El(n):Tl(n)),i=H().client;return(()=>{var t=sl();return t.$$click=()=>{let t=e.activeQuery.state.data,n=le(t,e.dataPath);i.setQueryData(e.activeQuery.queryKey,n)},p(t,N(Pc,{})),z(()=>O(t,G(r().actionButton))),t})()},xl=e=>{let t=U(),n=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,r=L(()=>t()===`dark`?El(n):Tl(n)),i=H().client;return(()=>{var a=cl();return a.$$click=()=>{let t=e.activeQuery.state.data,n=C(t,e.dataPath,!e.value);i.setQueryData(e.activeQuery.queryKey,n)},p(a,N(Qc,{get theme(){return t()},get checked(){return e.value}})),z(()=>O(a,G(r().actionButton,n`
          width: ${Q.size[3.5]};
          height: ${Q.size[3.5]};
        `))),a})()};function Sl(e){return Symbol.iterator in e}function Cl(e){let n=U(),r=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,i=L(()=>n()===`dark`?El(r):Tl(r)),a=H().client,[o,s]=R((e.defaultExpanded||[]).includes(e.label)),c=()=>s(e=>!e),[l,u]=R([]),d=L(()=>Array.isArray(e.value)?e.value.map((e,t)=>({label:t.toString(),value:e})):e.value!==null&&typeof e.value==`object`&&Sl(e.value)&&typeof e.value[Symbol.iterator]==`function`?e.value instanceof Map?Array.from(e.value,([e,t])=>({label:e,value:t})):Array.from(e.value,(e,t)=>({label:t.toString(),value:e})):typeof e.value==`object`&&e.value!==null?Object.entries(e.value).map(([e,t])=>({label:e,value:t})):[]),f=L(()=>Array.isArray(e.value)?`array`:e.value!==null&&typeof e.value==`object`&&Sl(e.value)&&typeof e.value[Symbol.iterator]==`function`?`Iterable`:typeof e.value==`object`&&e.value!==null?`object`:typeof e.value),h=L(()=>gl(d(),100)),g=e.dataPath??[],y=_();return(()=>{var n=ul();return p(n,N(I,{get when(){return h().length},get children(){return[(()=>{var n=dl(),r=n.firstChild,a=r.firstChild,s=a.nextSibling,l=s.nextSibling.nextSibling,u=l.firstChild;return r.$$click=()=>c(),p(r,N(_l,{get expanded(){return o()}}),a),p(s,()=>e.label),p(l,()=>String(f()).toLowerCase()===`iterable`?`(Iterable) `:``,u),p(l,()=>d().length,u),p(l,()=>d().length>1?`items`:`item`,null),p(n,N(I,{get when(){return e.editable},get children(){var n=ul();return p(n,N(vl,{get value(){return e.value}}),null),p(n,N(I,{get when(){return m(()=>!!e.itemsDeletable)()&&e.activeQuery!==void 0},get children(){return N(bl,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),p(n,N(I,{get when(){return m(()=>f()===`array`)()&&e.activeQuery!==void 0},get children(){return N(yl,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),p(n,N(I,{get when(){return m(()=>!!e.onEdit)()&&!t(e.value).meta},get children(){var t=ll();return t.$$click=()=>{e.onEdit?.()},p(t,N(Jc,{})),z(()=>O(t,i().actionButton)),t}}),null),z(()=>O(n,i().actions)),n}}),null),z(e=>{var t=i().expanderButtonContainer,a=i().expanderButton,s=o()?`true`:`false`,c=i().info;return t!==e.e&&O(n,e.e=t),a!==e.t&&O(r,e.t=a),s!==e.a&&b(r,`aria-expanded`,e.a=s),c!==e.o&&O(l,e.o=c),e},{e:void 0,t:void 0,a:void 0,o:void 0}),n})(),N(I,{get when(){return o()},get children(){return[N(I,{get when(){return h().length===1},get children(){var t=ul();return p(t,N(Et,{get each(){return d()},by:e=>e.label,children:t=>N(Cl,{get defaultExpanded(){return e.defaultExpanded},get label(){return t().label},get value(){return t().value},get editable(){return e.editable},get dataPath(){return[...g,t().label]},get activeQuery(){return e.activeQuery},get itemsDeletable(){return f()===`array`||f()===`Iterable`||f()===`object`}})})),z(()=>O(t,i().subEntry)),t}}),N(I,{get when(){return h().length>1},get children(){var t=ul();return p(t,N(te,{get each(){return h()},children:(t,n)=>(()=>{var r=hl(),a=r.firstChild,o=a.firstChild,s=o.firstChild,c=s.nextSibling,d=c.nextSibling.nextSibling;return d.nextSibling,o.$$click=()=>u(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n]),p(o,N(_l,{get expanded(){return l().includes(n)}}),s),p(o,n*100,c),p(o,n*100+100-1,d),p(a,N(I,{get when(){return l().includes(n)},get children(){var n=ul();return p(n,N(Et,{get each(){return t()},by:e=>e.label,children:t=>N(Cl,{get defaultExpanded(){return e.defaultExpanded},get label(){return t().label},get value(){return t().value},get editable(){return e.editable},get dataPath(){return[...g,t().label]},get activeQuery(){return e.activeQuery}})})),z(()=>O(n,i().subEntry)),n}}),null),z(e=>{var t=i().entry,n=i().expanderButton;return t!==e.e&&O(a,e.e=t),n!==e.t&&O(o,e.t=n),e},{e:void 0,t:void 0}),r})()})),z(()=>O(t,i().subEntry)),t}})]}})]}}),null),p(n,N(I,{get when(){return h().length===0},get children(){var t=ml(),n=t.firstChild,r=n.firstChild;return b(n,`for`,y),p(n,()=>e.label,r),p(t,N(I,{get when(){return m(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(f()===`string`||f()===`number`||f()===`boolean`)},get fallback(){return(()=>{var t=pl();return p(t,()=>v(e.value)),z(()=>O(t,i().value)),t})()},get children(){return[N(I,{get when(){return m(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(f()===`string`||f()===`number`)},get children(){var t=fl();return t.addEventListener(`change`,t=>{let n=e.activeQuery.state.data,r=C(n,g,f()===`number`?t.target.valueAsNumber:t.target.value);a.setQueryData(e.activeQuery.queryKey,r)}),b(t,`id`,y),z(e=>{var n=f()===`number`?`number`:`text`,r=G(i().value,i().editableInput);return n!==e.e&&b(t,`type`,e.e=n),r!==e.t&&O(t,e.t=r),e},{e:void 0,t:void 0}),z(()=>t.value=e.value),t}}),N(I,{get when(){return f()===`boolean`},get children(){var t=pl();return p(t,N(xl,{get activeQuery(){return e.activeQuery},dataPath:g,get value(){return e.value}}),null),p(t,()=>v(e.value),null),z(()=>O(t,G(i().value,i().actions,i().editableInput))),t}})]}}),null),p(t,N(I,{get when(){return m(()=>!!(e.editable&&e.itemsDeletable))()&&e.activeQuery!==void 0},get children(){return N(bl,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),z(e=>{var r=i().row,a=i().label;return r!==e.e&&O(t,e.e=r),a!==e.t&&O(n,e.t=a),e},{e:void 0,t:void 0}),t}}),null),z(()=>O(n,i().entry)),n})()}var wl=(e,t)=>{let{colors:n,font:r,size:i,border:a}=Q,o=(t,n)=>e===`light`?t:n;return{entry:t`
      & * {
        font-size: ${r.size.xs};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,subEntry:t`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${o(n.gray[300],n.darkGray[400])};
      /* outline: 1px solid ${n.teal[400]}; */
    `,expander:t`
      & path {
        stroke: ${n.gray[400]};
      }
      & svg {
        width: ${i[3]};
        height: ${i[3]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
      /* outline: 1px solid ${n.blue[400]}; */
    `,expanderButtonContainer:t`
      display: flex;
      align-items: center;
      line-height: ${i[4]};
      min-height: ${i[4]};
      gap: ${i[2]};
    `,expanderButton:t`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      height: ${i[5]};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${i[1]};
      position: relative;
      /* outline: 1px solid ${n.green[400]}; */

      &:focus-visible {
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }

      & svg {
        position: relative;
        left: 1px;
      }
    `,info:t`
      color: ${o(n.gray[500],n.gray[500])};
      font-size: ${r.size.xs};
      margin-left: ${i[1]};
      /* outline: 1px solid ${n.yellow[400]}; */
    `,label:t`
      color: ${o(n.gray[700],n.gray[300])};
      white-space: nowrap;
    `,value:t`
      color: ${o(n.purple[600],n.purple[400])};
      flex-grow: 1;
    `,actions:t`
      display: inline-flex;
      gap: ${i[2]};
      align-items: center;
    `,row:t`
      display: inline-flex;
      gap: ${i[2]};
      width: 100%;
      margin: ${i[.25]} 0px;
      line-height: ${i[4.5]};
      align-items: center;
    `,editableInput:t`
      border: none;
      padding: ${i[.5]} ${i[1]} ${i[.5]} ${i[1.5]};
      flex-grow: 1;
      border-radius: ${a.radius.xs};
      background-color: ${o(n.gray[200],n.darkGray[500])};

      &:hover {
        background-color: ${o(n.gray[300],n.darkGray[600])};
      }
    `,actionButton:t`
      background-color: transparent;
      color: ${o(n.gray[500],n.gray[500])};
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${i[3]};
      height: ${i[3]};
      position: relative;
      z-index: 1;

      &:hover svg {
        color: ${o(n.gray[600],n.gray[400])};
      }

      &:focus-visible {
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
        outline-offset: 2px;
      }
    `}},Tl=e=>wl(`light`,e),El=e=>wl(`dark`,e);n([`click`]);var Dl=F(`<div><div aria-hidden=true></div><button type=button aria-label="Open Tanstack query devtools"class=tsqd-open-btn>`),Ol=F(`<div>`),kl=F(`<div style=--tsqd-font-size:16px;max-height:100vh;height:100vh;width:100vw>`),Al=F(`<div style=--tsqd-font-size:16px>`),jl=F(`<aside aria-label="Tanstack query devtools"><div role=separator aria-label="Resize devtools panel"tabindex=0></div><button aria-label="Close tanstack query devtools">`),Ml=F(`<select name=tsqd-queries-filter-sort aria-label="Sort queries by">`),Nl=F(`<select name=tsqd-mutations-filter-sort aria-label="Sort mutations by">`),Pl=F(`<span>Asc`),Fl=F(`<span>Desc`),Il=F(`<button aria-label="Open in picture-in-picture mode"title="Open in picture-in-picture mode">`),Ll=F(`<div>Settings`),Rl=F(`<span>Position`),zl=F(`<span>Top`),Bl=F(`<span>Bottom`),Vl=F(`<span>Left`),Hl=F(`<span>Right`),Ul=F(`<span>Theme`),Wl=F(`<span>Light`),Gl=F(`<span>Dark`),Kl=F(`<span>System`),ql=F(`<span>Disabled Queries`),Jl=F(`<span>Show`),Yl=F(`<span>Hide`),Xl=F(`<div><div class=tsqd-queries-container>`),Zl=F(`<div><div class=tsqd-mutations-container>`),Ql=F(`<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter name=tsqd-query-filter-input></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>`),$l=F(`<option>Sort by `),eu=F(`<div class=tsqd-query-disabled-indicator aria-hidden=true>disabled`),tu=F(`<div class=tsqd-query-static-indicator aria-hidden=true>static`),nu=F(`<button><div></div><code class=tsqd-query-hash>`),ru=F(`<div role=tooltip id=tsqd-status-tooltip>`),iu=F(`<span>`),au=F(`<button><span aria-hidden=true></span><span>`),ou=F(`<button><span aria-hidden=true></span> Error`),su=F(`<div><span aria-hidden=true></span>Trigger Error<select aria-label="Select error type to trigger"><option value disabled selected>`),cu=F(`<div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer">`),lu=F(`<form><textarea name=data aria-label="Edit query data as JSON"></textarea><div><span></span><div><button type=button>Cancel</button><button>Save`),uu=F(`<div><div role=heading aria-level=2>Query Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span role=status aria-live=polite></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div role=heading aria-level=2>Actions</div><div><button><span aria-hidden=true></span>Refetch</button><button><span aria-hidden=true></span>Invalidate</button><button><span aria-hidden=true></span>Reset</button><button><span aria-hidden=true></span>Remove</button><button><span aria-hidden=true></span> Loading</button></div><div role=heading aria-level=2>Data </div><div role=heading aria-level=2>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">`),du=F(`<option>`),fu=F(`<div><div role=heading aria-level=2>Mutation Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span role=status aria-live=polite></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div role=heading aria-level=2>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">`),[pu,mu]=R(null),[hu,gu]=R(null),[_u,vu]=R(0),[yu,bu]=R(!1),xu=e=>{let t=U(),n=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,r=L(()=>t()===`dark`?Hu(n):Vu(n)),i=L(()=>H().onlineManager);B(()=>{let e=i().subscribe(e=>{bu(!e)});g(()=>{e()})});let a=Be(),o=L(()=>H().buttonPosition||Ee),s=L(()=>e.localStore.open===`true`?!0:e.localStore.open===`false`?!1:H().initialIsOpen||ke),c=L(()=>e.localStore.position||H().position||De),l;T(()=>{let t=l.parentElement,n=e.localStore.height||Ae,r=e.localStore.width||Me,i=c();t.style.setProperty(`--tsqd-panel-height`,`${i===`top`?`-`:``}${n}px`),t.style.setProperty(`--tsqd-panel-width`,`${i===`left`?`-`:``}${r}px`)}),B(()=>{let e=()=>{let e=l.parentElement,t=getComputedStyle(e).fontSize;e.style.setProperty(`--tsqd-font-size`,t)};e(),window.addEventListener(`focus`,e),g(()=>{window.removeEventListener(`focus`,e)})});let u=L(()=>e.localStore.pip_open??`false`);return[N(I,{get when(){return m(()=>!!a().pipWindow)()&&u()==`true`},get children(){return N(ae,{get mount(){return a().pipWindow?.document.body},get children(){return N(Su,{get children(){return N(Tu,e)}})}})}}),(()=>{var t=Ol(),i=l;return typeof i==`function`?S(i,t):l=t,p(t,N(St,{name:`tsqd-panel-transition`,get children(){return N(I,{get when(){return m(()=>!!(s()&&!a().pipWindow))()&&u()==`false`},get children(){return N(wu,{get localStore(){return e.localStore},get setLocalStore(){return e.setLocalStore}})}})}}),null),p(t,N(St,{name:`tsqd-button-transition`,get children(){return N(I,{get when(){return!s()},get children(){var t=Dl(),n=t.firstChild,i=n.nextSibling;return p(n,N(rl,{})),i.$$click=()=>e.setLocalStore(`open`,`true`),p(i,N(rl,{})),z(()=>O(t,G(r().devtoolsBtn,r()[`devtoolsBtn-position-${o()}`],`tsqd-open-btn-container`))),t}})}}),null),z(()=>O(t,G(n`
            & .tsqd-panel-transition-exit-active,
            & .tsqd-panel-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
            }

            & .tsqd-panel-transition-exit-to,
            & .tsqd-panel-transition-enter {
              ${c()===`top`||c()===`bottom`?`transform: translateY(var(--tsqd-panel-height));`:`transform: translateX(var(--tsqd-panel-width));`}
            }

            & .tsqd-button-transition-exit-active,
            & .tsqd-button-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
              opacity: 1;
            }

            & .tsqd-button-transition-exit-to,
            & .tsqd-button-transition-enter {
              transform: ${o()===`relative`?`none;`:o()===`top-left`?`translateX(-72px);`:o()===`top-right`?`translateX(72px);`:`translateY(72px);`};
              opacity: 0;
            }
          `,`tsqd-transitions-container`))),t})()]},Su=e=>{let t=Be(),n=U(),r=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,i=L(()=>n()===`dark`?Hu(r):Vu(r)),a=()=>{let{colors:e}=Q,t=(e,t)=>n()===`dark`?t:e;return _u()<we?r`
        flex-direction: column;
        background-color: ${t(e.gray[300],e.gray[600])};
      `:r`
      flex-direction: row;
      background-color: ${t(e.gray[200],e.darkGray[900])};
    `};return T(()=>{let e=t().pipWindow,n=()=>{e&&vu(e.innerWidth)};e&&(e.addEventListener(`resize`,n),n()),g(()=>{e&&e.removeEventListener(`resize`,n)})}),(()=>{var t=kl();return p(t,()=>e.children),z(()=>O(t,G(i().panel,a(),{[r`
            min-width: min-content;
          `]:_u()<Te},`tsqd-main-panel`))),t})()},Cu=e=>{let t=U(),n=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,r=L(()=>t()===`dark`?Hu(n):Vu(n)),i;B(()=>{At(i,({width:e},t)=>{t===i&&vu(e)})});let a=()=>{let{colors:e}=Q,r=(e,n)=>t()===`dark`?n:e;return _u()<we?n`
        flex-direction: column;
        background-color: ${r(e.gray[300],e.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${r(e.gray[200],e.darkGray[900])};
    `};return(()=>{var t=Al(),o=i;return typeof o==`function`?S(o,t):i=t,p(t,()=>e.children),z(()=>O(t,G(r().parentPanel,a(),{[n`
            min-width: min-content;
          `]:_u()<Te},`tsqd-main-panel`))),t})()},wu=e=>{let t=U(),n=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,r=L(()=>t()===`dark`?Hu(n):Vu(n)),i;B(()=>{i.focus()});let[a,o]=R(!1),c=L(()=>e.localStore.position||H().position||De),l=t=>{let n=t.currentTarget.parentElement;if(!n)return;o(!0);let{height:r,width:i}=n.getBoundingClientRect(),s=t.clientX,l=t.clientY,u=0,d=P(3.5),f=P(12),p=t=>{if(t.preventDefault(),c()===`left`||c()===`right`){let r=c()===`right`?s-t.clientX:t.clientX-s;u=Math.round(i+r),u<f&&(u=f),e.setLocalStore(`width`,String(Math.round(u)));let a=n.getBoundingClientRect().width;Number(e.localStore.width)<a&&e.setLocalStore(`width`,String(a))}else{let n=c()===`bottom`?l-t.clientY:t.clientY-l;u=Math.round(r+n),u<d&&(u=d,mu(null)),e.setLocalStore(`height`,String(Math.round(u)))}},m=()=>{a()&&o(!1),document.removeEventListener(`mousemove`,p,!1),document.removeEventListener(`mouseup`,m,!1)};document.addEventListener(`mousemove`,p,!1),document.addEventListener(`mouseup`,m,!1)},u;B(()=>{At(u,({width:e},t)=>{t===u&&vu(e)})}),T(()=>{let t=u.parentElement?.parentElement?.parentElement;if(!t)return;let n=f(`padding`,e.localStore.position||De),r=e.localStore.position===`left`||e.localStore.position===`right`,i=(({padding:e,paddingTop:t,paddingBottom:n,paddingLeft:r,paddingRight:i})=>({padding:e,paddingTop:t,paddingBottom:n,paddingLeft:r,paddingRight:i}))(t.style);t.style[n]=`${r?e.localStore.width:e.localStore.height}px`,g(()=>{Object.entries(i).forEach(([e,n])=>{t.style[e]=n})})});let d=()=>{let{colors:e}=Q,r=(e,n)=>t()===`dark`?n:e;return _u()<we?n`
        flex-direction: column;
        background-color: ${r(e.gray[300],e.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${r(e.gray[200],e.darkGray[900])};
    `};return(()=>{var t=jl(),a=t.firstChild,o=a.nextSibling,f=u;typeof f==`function`?S(f,t):u=t,a.$$keydown=t=>{let n=P(3.5),r=P(12);if(c()===`top`||c()===`bottom`){if(t.key===`ArrowUp`||t.key===`ArrowDown`){t.preventDefault();let r=Number(e.localStore.height||Ae),i=c()===`bottom`?t.key===`ArrowUp`?10:-10:t.key===`ArrowDown`?10:-10,a=Math.max(n,r+i);e.setLocalStore(`height`,String(a))}}else if(t.key===`ArrowLeft`||t.key===`ArrowRight`){t.preventDefault();let n=Number(e.localStore.width||Me),i=c()===`right`?t.key===`ArrowLeft`?10:-10:t.key===`ArrowRight`?10:-10,a=Math.max(r,n+i);e.setLocalStore(`width`,String(a))}},a.$$mousedown=l,o.$$click=()=>e.setLocalStore(`open`,`false`);var m=i;return typeof m==`function`?S(m,o):i=o,p(o,N(Fc,{})),p(t,N(Tu,e),null),z(i=>{var l=G(r().panel,r()[`panel-position-${c()}`],d(),{[n`
            min-width: min-content;
          `]:_u()<Te&&(c()===`right`||c()===`left`)},`tsqd-main-panel`),u=c()===`bottom`||c()===`top`?`${e.localStore.height||Ae}px`:`auto`,f=c()===`right`||c()===`left`?`${e.localStore.width||Me}px`:`auto`,p=c()===`top`||c()===`bottom`?`horizontal`:`vertical`,m=c()===`top`||c()===`bottom`?P(3.5):P(12),h=c()===`top`||c()===`bottom`?Number(e.localStore.height||Ae):Number(e.localStore.width||Me),g=G(r().dragHandle,r()[`dragHandle-position-${c()}`],`tsqd-drag-handle`),_=G(r().closeBtn,r()[`closeBtn-position-${c()}`],`tsqd-minimize-btn`);return l!==i.e&&O(t,i.e=l),u!==i.t&&s(t,`height`,i.t=u),f!==i.a&&s(t,`width`,i.a=f),p!==i.o&&b(a,`aria-orientation`,i.o=p),m!==i.i&&b(a,`aria-valuemin`,i.i=m),h!==i.n&&b(a,`aria-valuenow`,i.n=h),g!==i.s&&O(a,i.s=g),_!==i.h&&O(o,i.h=_),i},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),t})()},Tu=e=>{Pu(),Iu();let t,n=U(),r=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,i=L(()=>n()===`dark`?Hu(r):Vu(r)),a=Be(),[o,s]=R(`queries`),l=L(()=>e.localStore.sort||Ne),u=L(()=>Number(e.localStore.sortOrder)||Pe),f=L(()=>e.localStore.mutationSort||Fe),h=L(()=>Number(e.localStore.mutationSortOrder)||Pe),g=L(()=>y[l()]),_=L(()=>c[f()]),v=L(()=>H().onlineManager),x=L(()=>H().client.getQueryCache()),C=L(()=>H().client.getMutationCache()),w=$(e=>e().getAll().length,!1),T=L(d(()=>[w(),e.localStore.filter,l(),u(),e.localStore.hideDisabledQueries],()=>{let t=x().getAll(),n=e.localStore.filter?t.filter(t=>qe(t.queryHash,e.localStore.filter||``).passed):[...t];return e.localStore.hideDisabledQueries===`true`&&(n=n.filter(e=>!e.isDisabled())),g()?n.sort((e,t)=>g()(e,t)*u()):n})),E=Lu(e=>e().getAll().length,!1),D=L(d(()=>[E(),e.localStore.mutationFilter,f(),h()],()=>{let t=C().getAll(),n=e.localStore.mutationFilter?t.filter(t=>qe(`${t.options.mutationKey?JSON.stringify(t.options.mutationKey)+` - `:``}${new Date(t.state.submittedAt).toLocaleString()}`,e.localStore.mutationFilter||``).passed):[...t];return _()?n.sort((e,t)=>_()(e,t)*h()):n})),ee=t=>{e.setLocalStore(`position`,t)},k=e=>{let n=getComputedStyle(t).getPropertyValue(`--tsqd-font-size`);e.style.setProperty(`--tsqd-font-size`,n)};return[(()=>{var n=Ql(),d=n.firstChild,g=d.firstChild,_=g.firstChild,w=_.firstChild,E=w.nextSibling,A=E.firstChild,j=d.nextSibling,te=j.firstChild,M=te.firstChild,ne=M.firstChild,re=M.nextSibling,ie=re.nextSibling,ae=te.nextSibling,P=ae.firstChild,F=P.nextSibling,oe=t;return typeof oe==`function`?S(oe,n):t=n,_.$$click=()=>{if(!a().pipWindow&&!e.showPanelViewOnly){e.setLocalStore(`open`,`false`);return}e.onClose&&e.onClose()},p(E,()=>H().queryFlavor,A),p(E,()=>H().version,null),p(g,N($o.Root,{get class(){return G(i().viewToggle)},get value(){return o()},"aria-label":`Toggle between queries and mutations view`,onChange:e=>{s(e),mu(null),gu(null)},get children(){return[N($o.Item,{value:`queries`,class:`tsqd-radio-toggle`,get children(){return[N($o.ItemInput,{}),N($o.ItemControl,{get children(){return N($o.ItemIndicator,{})}}),N($o.ItemLabel,{title:`Toggle Queries View`,children:`Queries`})]}}),N($o.Item,{value:`mutations`,class:`tsqd-radio-toggle`,get children(){return[N($o.ItemInput,{}),N($o.ItemControl,{get children(){return N($o.ItemIndicator,{})}}),N($o.ItemLabel,{title:`Toggle Mutations View`,children:`Mutations`})]}})]}}),null),p(d,N(I,{get when(){return o()===`queries`},get children(){return N(Ou,{})}}),null),p(d,N(I,{get when(){return o()===`mutations`},get children(){return N(ku,{})}}),null),p(M,N(Nc,{}),ne),ne.$$input=t=>{o()===`queries`?e.setLocalStore(`filter`,t.currentTarget.value):e.setLocalStore(`mutationFilter`,t.currentTarget.value)},p(re,N(I,{get when(){return o()===`queries`},get children(){var t=Ml();return t.addEventListener(`change`,t=>{e.setLocalStore(`sort`,t.currentTarget.value)}),p(t,()=>Object.keys(y).map(e=>(()=>{var t=$l();return t.firstChild,t.value=e,p(t,e,null),t})())),z(()=>t.value=l()),t}}),null),p(re,N(I,{get when(){return o()===`mutations`},get children(){var t=Nl();return t.addEventListener(`change`,t=>{e.setLocalStore(`mutationSort`,t.currentTarget.value)}),p(t,()=>Object.keys(c).map(e=>(()=>{var t=$l();return t.firstChild,t.value=e,p(t,e,null),t})())),z(()=>t.value=f()),t}}),null),p(re,N(Fc,{}),null),ie.$$click=()=>{o()===`queries`?e.setLocalStore(`sortOrder`,String(u()*-1)):e.setLocalStore(`mutationSortOrder`,String(h()*-1))},p(ie,N(I,{get when(){return(o()===`queries`?u():h())===1},get children(){return[Pl(),N(Ic,{})]}}),null),p(ie,N(I,{get when(){return(o()===`queries`?u():h())===-1},get children(){return[Fl(),N(Lc,{})]}}),null),P.$$click=()=>{o()===`queries`?(zu({type:`CLEAR_QUERY_CACHE`}),x().clear()):(zu({type:`CLEAR_MUTATION_CACHE`}),C().clear())},p(P,N(Pc,{})),F.$$click=()=>{v().setOnline(!v().isOnline())},p(F,(()=>{var e=m(()=>!!yu());return()=>e()?N(Wc,{}):N(Uc,{})})()),p(ae,N(I,{get when(){return m(()=>!a().pipWindow)()&&!a().disabled},get children(){var t=Il();return t.$$click=()=>{a().requestPipWindow(Number(window.innerWidth),Number(e.localStore.height??500))},p(t,N(Kc,{})),z(()=>O(t,G(i().actionsBtn,`tsqd-actions-btn`,`tsqd-action-open-pip`))),t}}),null),p(ae,N(Z.Root,{gutter:4,get children(){return[N(Z.Trigger,{get class(){return G(i().actionsBtn,`tsqd-actions-btn`,`tsqd-action-settings`)},"aria-label":`Open settings menu`,title:`Open settings menu`,get children(){return N(Gc,{})}}),N(Z.Portal,{ref:e=>k(e),get mount(){return m(()=>!!a().pipWindow)()?a().pipWindow.document.body:document.body},get children(){return N(Z.Content,{get class(){return G(i().settingsMenu,`tsqd-settings-menu`)},get children(){return[(()=>{var e=Ll();return z(()=>O(e,G(i().settingsMenuHeader,`tsqd-settings-menu-header`))),e})(),N(I,{get when(){return!e.showPanelViewOnly},get children(){return N(Z.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[N(Z.SubTrigger,{get class(){return G(i().settingsSubTrigger,`tsqd-settings-menu-sub-trigger`,`tsqd-settings-menu-sub-trigger-position`)},get children(){return[Rl(),N(Fc,{})]}}),N(Z.Portal,{ref:e=>k(e),get mount(){return m(()=>!!a().pipWindow)()?a().pipWindow.document.body:document.body},get children(){return N(Z.SubContent,{get class(){return G(i().settingsMenu,`tsqd-settings-submenu`)},get children(){return N(Z.RadioGroup,{"aria-label":`Position settings`,get value(){return e.localStore.position},onChange:e=>ee(e),get children(){return[N(Z.RadioItem,{value:`top`,get class(){return G(i().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-top`)},get children(){return[zl(),N(Ic,{})]}}),N(Z.RadioItem,{value:`bottom`,get class(){return G(i().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-bottom`)},get children(){return[Bl(),N(Lc,{})]}}),N(Z.RadioItem,{value:`left`,get class(){return G(i().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-left`)},get children(){return[Vl(),N(Rc,{})]}}),N(Z.RadioItem,{value:`right`,get class(){return G(i().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-right`)},get children(){return[Hl(),N(zc,{})]}})]}})}})}})]}})}}),N(Z.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[N(Z.SubTrigger,{get class(){return G(i().settingsSubTrigger,`tsqd-settings-menu-sub-trigger`,`tsqd-settings-menu-sub-trigger-position`)},get children(){return[Ul(),N(Fc,{})]}}),N(Z.Portal,{ref:e=>k(e),get mount(){return m(()=>!!a().pipWindow)()?a().pipWindow.document.body:document.body},get children(){return N(Z.SubContent,{get class(){return G(i().settingsMenu,`tsqd-settings-submenu`)},get children(){return N(Z.RadioGroup,{get value(){return e.localStore.theme_preference},onChange:t=>{e.setLocalStore(`theme_preference`,t)},"aria-label":`Theme preference`,get children(){return[N(Z.RadioItem,{value:`light`,get class(){return G(i().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-top`)},get children(){return[Wl(),N(Bc,{})]}}),N(Z.RadioItem,{value:`dark`,get class(){return G(i().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-bottom`)},get children(){return[Gl(),N(Vc,{})]}}),N(Z.RadioItem,{value:`system`,get class(){return G(i().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-left`)},get children(){return[Kl(),N(Hc,{})]}})]}})}})}})]}}),N(Z.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[N(Z.SubTrigger,{get class(){return G(i().settingsSubTrigger,`tsqd-settings-menu-sub-trigger`,`tsqd-settings-menu-sub-trigger-disabled-queries`)},get children(){return[ql(),N(Fc,{})]}}),N(Z.Portal,{ref:e=>k(e),get mount(){return m(()=>!!a().pipWindow)()?a().pipWindow.document.body:document.body},get children(){return N(Z.SubContent,{get class(){return G(i().settingsMenu,`tsqd-settings-submenu`)},get children(){return N(Z.RadioGroup,{get value(){return e.localStore.hideDisabledQueries},"aria-label":`Hide disabled queries setting`,onChange:t=>e.setLocalStore(`hideDisabledQueries`,t),get children(){return[N(Z.RadioItem,{value:`false`,get class(){return G(i().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-show`)},get children(){return[Jl(),N(I,{get when(){return e.localStore.hideDisabledQueries!==`true`},get children(){return N($c,{})}})]}}),N(Z.RadioItem,{value:`true`,get class(){return G(i().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-hide`)},get children(){return[Yl(),N(I,{get when(){return e.localStore.hideDisabledQueries===`true`},get children(){return N($c,{})}})]}})]}})}})}})]}})]}})}})]}}),null),p(n,N(I,{get when(){return o()===`queries`},get children(){var e=Xl(),t=e.firstChild;return p(t,N(Et,{by:e=>e.queryHash,get each(){return T()},children:e=>N(Eu,{get query(){return e()}})})),z(()=>O(e,G(i().overflowQueryContainer,`tsqd-queries-overflow-container`))),e}}),null),p(n,N(I,{get when(){return o()===`mutations`},get children(){var e=Zl(),t=e.firstChild;return p(t,N(Et,{by:e=>e.mutationId,get each(){return D()},children:e=>N(Du,{get mutation(){return e()}})})),z(()=>O(e,G(i().overflowQueryContainer,`tsqd-mutations-overflow-container`))),e}}),null),z(e=>{var t=G(i().queriesContainer,_u()<we&&(pu()||hu())&&r`
              height: 50%;
              max-height: 50%;
            `,_u()<we&&!(pu()||hu())&&r`
              height: 100%;
              max-height: 100%;
            `,`tsqd-queries-container`),a=G(i().row,`tsqd-header`),s=i().logoAndToggleContainer,c=G(i().logo,`tsqd-text-logo-container`),l=G(i().tanstackLogo,`tsqd-text-logo-tanstack`),f=G(i().queryFlavorLogo,`tsqd-text-logo-query-flavor`),p=G(i().row,`tsqd-filters-actions-container`),m=G(i().filtersContainer,`tsqd-filters-container`),v=G(i().filterInput,`tsqd-query-filter-textfield-container`),y=G(`tsqd-query-filter-textfield`),x=G(i().filterSelect,`tsqd-query-filter-sort-container`),S=`Sort order ${(o()===`queries`?u():h())===-1?`descending`:`ascending`}`,C=(o()===`queries`?u():h())===-1,T=G(i().actionsContainer,`tsqd-actions-container`),D=G(i().actionsBtn,`tsqd-actions-btn`,`tsqd-action-clear-cache`),ee=`Clear ${o()} cache`,k=G(i().actionsBtn,yu()&&i().actionsBtnOffline,`tsqd-actions-btn`,`tsqd-action-mock-offline-behavior`),A=`${yu()?`Unset offline mocking behavior`:`Mock offline behavior`}`,N=yu(),oe=`${yu()?`Unset offline mocking behavior`:`Mock offline behavior`}`;return t!==e.e&&O(n,e.e=t),a!==e.t&&O(d,e.t=a),s!==e.a&&O(g,e.a=s),c!==e.o&&O(_,e.o=c),l!==e.i&&O(w,e.i=l),f!==e.n&&O(E,e.n=f),p!==e.s&&O(j,e.s=p),m!==e.h&&O(te,e.h=m),v!==e.r&&O(M,e.r=v),y!==e.d&&O(ne,e.d=y),x!==e.l&&O(re,e.l=x),S!==e.u&&b(ie,`aria-label`,e.u=S),C!==e.c&&b(ie,`aria-pressed`,e.c=C),T!==e.w&&O(ae,e.w=T),D!==e.m&&O(P,e.m=D),ee!==e.f&&b(P,`title`,e.f=ee),k!==e.y&&O(F,e.y=k),A!==e.g&&b(F,`aria-label`,e.g=A),N!==e.p&&b(F,`aria-pressed`,e.p=N),oe!==e.b&&b(F,`title`,e.b=oe),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),z(()=>ne.value=o()===`queries`?e.localStore.filter||``:e.localStore.mutationFilter||``),n})(),N(I,{get when(){return m(()=>o()===`queries`)()&&pu()},get children(){return N(ju,{})}}),N(I,{get when(){return m(()=>o()===`mutations`)()&&hu()},get children(){return N(Mu,{})}})]},Eu=e=>{let t=U(),n=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,r=L(()=>t()===`dark`?Hu(n):Vu(n)),{colors:i,alpha:a}=Q,o=(e,n)=>t()===`dark`?n:e,s=$(t=>t().find({queryKey:e.query.queryKey})?.state,!0,t=>t.query.queryHash===e.query.queryHash),c=$(t=>t().find({queryKey:e.query.queryKey})?.isDisabled()??!1,!0,t=>t.query.queryHash===e.query.queryHash),l=$(t=>t().find({queryKey:e.query.queryKey})?.isStatic()??!1,!0,t=>t.query.queryHash===e.query.queryHash),u=$(t=>t().find({queryKey:e.query.queryKey})?.isStale()??!1,!0,t=>t.query.queryHash===e.query.queryHash),d=$(t=>t().find({queryKey:e.query.queryKey})?.getObserversCount()??0,!0,t=>t.query.queryHash===e.query.queryHash),f=L(()=>ne({queryState:s(),observerCount:d(),isStale:u()})),m=()=>f()===`gray`?n`
        background-color: ${o(i[f()][200],i[f()][700])};
        color: ${o(i[f()][700],i[f()][300])};
      `:n`
      background-color: ${o(i[f()][200]+a[80],i[f()][900])};
      color: ${o(i[f()][800],i[f()][300])};
    `;return N(I,{get when(){return s()},get children(){var t=nu(),n=t.firstChild,i=n.nextSibling;return t.$$click=()=>mu(e.query.queryHash===pu()?null:e.query.queryHash),p(n,d),p(i,()=>e.query.queryHash),p(t,N(I,{get when(){return c()},get children(){return eu()}}),null),p(t,N(I,{get when(){return l()},get children(){return tu()}}),null),z(i=>{var a=G(r().queryRow,pu()===e.query.queryHash&&r().selectedQueryRow,`tsqd-query-row`),o=`Query key ${e.query.queryHash}${c()?`, disabled`:``}${l()?`, static`:``}`,s=G(m(),`tsqd-query-observer-count`);return a!==i.e&&O(t,i.e=a),o!==i.t&&b(t,`aria-label`,i.t=o),s!==i.a&&O(n,i.a=s),i},{e:void 0,t:void 0,a:void 0}),t}})},Du=e=>{let t=U(),n=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,r=L(()=>t()===`dark`?Hu(n):Vu(n)),{colors:a,alpha:o}=Q,s=(e,n)=>t()===`dark`?n:e,c=Lu(t=>t().getAll().find(t=>t.mutationId===e.mutation.mutationId)?.state),l=Lu(t=>{let n=t().getAll().find(t=>t.mutationId===e.mutation.mutationId);return n?n.state.isPaused:!1}),u=Lu(t=>{let n=t().getAll().find(t=>t.mutationId===e.mutation.mutationId);return n?n.state.status:`idle`}),d=L(()=>i({isPaused:l(),status:u()})),f=()=>d()===`gray`?n`
        background-color: ${s(a[d()][200],a[d()][700])};
        color: ${s(a[d()][700],a[d()][300])};
      `:n`
      background-color: ${s(a[d()][200]+o[80],a[d()][900])};
      color: ${s(a[d()][800],a[d()][300])};
    `;return N(I,{get when(){return c()},get children(){var t=nu(),n=t.firstChild,i=n.nextSibling;return t.$$click=()=>{gu(e.mutation.mutationId===hu()?null:e.mutation.mutationId)},p(n,N(I,{get when(){return d()===`purple`},get children(){return N(nl,{})}}),null),p(n,N(I,{get when(){return d()===`green`},get children(){return N($c,{})}}),null),p(n,N(I,{get when(){return d()===`red`},get children(){return N(tl,{})}}),null),p(n,N(I,{get when(){return d()===`yellow`},get children(){return N(el,{})}}),null),p(i,N(I,{get when(){return e.mutation.options.mutationKey},get children(){return[m(()=>JSON.stringify(e.mutation.options.mutationKey)),` -`,` `]}}),null),p(i,()=>new Date(e.mutation.state.submittedAt).toLocaleString(),null),z(i=>{var a=G(r().queryRow,hu()===e.mutation.mutationId&&r().selectedQueryRow,`tsqd-query-row`),o=`Mutation submitted at ${new Date(e.mutation.state.submittedAt).toLocaleString()}`,s=G(f(),`tsqd-query-observer-count`);return a!==i.e&&O(t,i.e=a),o!==i.t&&b(t,`aria-label`,i.t=o),s!==i.a&&O(n,i.a=s),i},{e:void 0,t:void 0,a:void 0}),t}})},Ou=()=>{let e=$(e=>e().getAll().filter(e=>M(e)===`stale`).length),t=$(e=>e().getAll().filter(e=>M(e)===`fresh`).length),n=$(e=>e().getAll().filter(e=>M(e)===`fetching`).length),r=$(e=>e().getAll().filter(e=>M(e)===`paused`).length),i=$(e=>e().getAll().filter(e=>M(e)===`inactive`).length),a=U(),o=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,s=L(()=>a()===`dark`?Hu(o):Vu(o));return(()=>{var a=Ol();return p(a,N(Au,{label:`Fresh`,color:`green`,get count(){return t()}}),null),p(a,N(Au,{label:`Fetching`,color:`blue`,get count(){return n()}}),null),p(a,N(Au,{label:`Paused`,color:`purple`,get count(){return r()}}),null),p(a,N(Au,{label:`Stale`,color:`yellow`,get count(){return e()}}),null),p(a,N(Au,{label:`Inactive`,color:`gray`,get count(){return i()}}),null),z(()=>O(a,G(s().queryStatusContainer,`tsqd-query-status-container`))),a})()},ku=()=>{let e=Lu(e=>e().getAll().filter(e=>i({isPaused:e.state.isPaused,status:e.state.status})===`green`).length),t=Lu(e=>e().getAll().filter(e=>i({isPaused:e.state.isPaused,status:e.state.status})===`yellow`).length),n=Lu(e=>e().getAll().filter(e=>i({isPaused:e.state.isPaused,status:e.state.status})===`purple`).length),r=Lu(e=>e().getAll().filter(e=>i({isPaused:e.state.isPaused,status:e.state.status})===`red`).length),a=U(),o=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,s=L(()=>a()===`dark`?Hu(o):Vu(o));return(()=>{var i=Ol();return p(i,N(Au,{label:`Paused`,color:`purple`,get count(){return n()}}),null),p(i,N(Au,{label:`Pending`,color:`yellow`,get count(){return t()}}),null),p(i,N(Au,{label:`Success`,color:`green`,get count(){return e()}}),null),p(i,N(Au,{label:`Error`,color:`red`,get count(){return r()}}),null),z(()=>O(i,G(s().queryStatusContainer,`tsqd-query-status-container`))),i})()},Au=e=>{let t=U(),n=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,r=L(()=>t()===`dark`?Hu(n):Vu(n)),{colors:i,alpha:s}=Q,c=(e,n)=>t()===`dark`?n:e,l,[u,d]=R(!1),[f,h]=R(!1),g=L(()=>!(pu()&&_u()<Ce&&_u()>we||_u()<we));return(()=>{var t=au(),_=t.firstChild,v=_.nextSibling,y=l;return typeof y==`function`?S(y,t):l=t,t.addEventListener(`mouseleave`,()=>{d(!1),h(!1)}),t.addEventListener(`mouseenter`,()=>d(!0)),t.addEventListener(`blur`,()=>h(!1)),t.addEventListener(`focus`,()=>h(!0)),o(t,a({get disabled(){return g()},get"aria-label"(){return`${e.label}: ${e.count}`},get class(){return G(r().queryStatusTag,!g()&&n`
            cursor: pointer;
            &:hover {
              background: ${c(i.gray[200],i.darkGray[400])}${s[80]};
            }
          `,`tsqd-query-status-tag`,`tsqd-query-status-tag-${e.label.toLowerCase()}`)}},()=>u()||f()?{"aria-describedby":`tsqd-status-tooltip`}:{}),!1,!0),p(t,N(I,{get when(){return m(()=>!g())()&&(u()||f())},get children(){var t=ru();return p(t,()=>e.label),z(()=>O(t,G(r().statusTooltip,`tsqd-query-status-tooltip`))),t}}),_),p(t,N(I,{get when(){return g()},get children(){var t=iu();return p(t,()=>e.label),z(()=>O(t,G(r().queryStatusTagLabel,`tsqd-query-status-tag-label`))),t}}),v),p(v,()=>e.count),z(t=>{var a=G(n`
            width: ${Q.size[1.5]};
            height: ${Q.size[1.5]};
            border-radius: ${Q.border.radius.full};
            background-color: ${Q.colors[e.color][500]};
          `,`tsqd-query-status-tag-dot`),o=G(r().queryStatusCount,e.count>0&&e.color!==`gray`&&n`
              background-color: ${c(i[e.color][100],i[e.color][900])};
              color: ${c(i[e.color][700],i[e.color][300])};
            `,`tsqd-query-status-tag-count`);return a!==t.e&&O(_,t.e=a),o!==t.t&&O(v,t.t=o),t},{e:void 0,t:void 0}),t})()},ju=()=>{let t=U(),n=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,r=L(()=>t()===`dark`?Hu(n):Vu(n)),{colors:i}=Q,a=(e,n)=>t()===`dark`?n:e,o=H().client,[c,l]=R(!1),[u,d]=R(`view`),[f,h]=R(!1),g=L(()=>H().errorTypes||[]),_=$(e=>e().getAll().find(e=>e.queryHash===pu()),!1),y=$(e=>e().getAll().find(e=>e.queryHash===pu()),!1),x=$(e=>e().getAll().find(e=>e.queryHash===pu())?.state,!1),S=$(e=>e().getAll().find(e=>e.queryHash===pu())?.state.data,!1),C=$(e=>{let t=e().getAll().find(e=>e.queryHash===pu());return t?M(t):`inactive`}),w=$(e=>{let t=e().getAll().find(e=>e.queryHash===pu());return t?t.state.status:`pending`}),E=$(e=>e().getAll().find(e=>e.queryHash===pu())?.getObserversCount()??0),D=L(()=>e(C())),ee=()=>{zu({type:`REFETCH`,queryHash:_()?.queryHash}),(_()?.fetch())?.catch(()=>{})},k=e=>{let t=_();if(!t)return;zu({type:`TRIGGER_ERROR`,queryHash:t.queryHash,metadata:{error:e?.name}});let n=e?.initializer(t)??Error(`Unknown error from devtools`),r=t.options;t.setState({data:void 0,status:`error`,error:n,fetchMeta:{...t.state.fetchMeta,__previousQueryOptions:r}})},A=()=>{let e=_();if(!e)return;zu({type:`RESTORE_LOADING`,queryHash:e.queryHash});let t=e.state,n=e.state.fetchMeta?e.state.fetchMeta.__previousQueryOptions:null;e.cancel({silent:!0}),e.setState({...t,fetchStatus:`idle`,fetchMeta:null}),n&&e.fetch(n)};T(()=>{C()!==`fetching`&&l(!1)});let j=()=>D()===`gray`?n`
        background-color: ${a(i[D()][200],i[D()][700])};
        color: ${a(i[D()][700],i[D()][300])};
        border-color: ${a(i[D()][400],i[D()][600])};
      `:n`
      background-color: ${a(i[D()][100],i[D()][900])};
      color: ${a(i[D()][700],i[D()][300])};
      border-color: ${a(i[D()][400],i[D()][600])};
    `;return N(I,{get when(){return m(()=>!!_())()&&x()},get children(){var e=uu(),t=e.firstChild,m=t.nextSibling,T=m.firstChild,D=T.firstChild,te=D.firstChild,M=D.nextSibling,ne=T.nextSibling,re=ne.firstChild.nextSibling,ie=ne.nextSibling.firstChild.nextSibling,ae=m.nextSibling,P=ae.nextSibling,F=P.firstChild,se=F.firstChild,ce=F.nextSibling,L=ce.firstChild,le=ce.nextSibling,R=le.firstChild,B=le.nextSibling,ue=B.firstChild,de=B.nextSibling,fe=de.firstChild,pe=fe.nextSibling,V=P.nextSibling;V.firstChild;var me=V.nextSibling,he=me.nextSibling;return p(te,()=>v(_().queryKey,!0)),p(M,C),p(re,E),p(ie,()=>new Date(x().dataUpdatedAt).toLocaleTimeString()),F.$$click=ee,ce.$$click=()=>{zu({type:`INVALIDATE`,queryHash:_()?.queryHash}),o.invalidateQueries(_())},le.$$click=()=>{zu({type:`RESET`,queryHash:_()?.queryHash}),o.resetQueries(_())},B.$$click=()=>{zu({type:`REMOVE`,queryHash:_()?.queryHash}),o.removeQueries(_()),mu(null)},de.$$click=()=>{if(_()?.state.data===void 0)l(!0),A();else{let e=_();if(!e)return;zu({type:`TRIGGER_LOADING`,queryHash:e.queryHash});let t=e.options;e.fetch({...t,queryFn:()=>new Promise(()=>{}),gcTime:-1}),e.setState({data:void 0,status:`pending`,fetchMeta:{...e.state.fetchMeta,__previousQueryOptions:t}})}},p(de,()=>w()===`pending`?`Restore`:`Trigger`,pe),p(P,N(I,{get when(){return g().length===0||w()===`error`},get children(){var e=ou(),t=e.firstChild,r=t.nextSibling;return e.$$click=()=>{_().state.error?(zu({type:`RESTORE_ERROR`,queryHash:_()?.queryHash}),o.resetQueries(_())):k()},p(e,()=>w()===`error`?`Restore`:`Trigger`,r),z(r=>{var o=G(n`
                  color: ${a(i.red[500],i.red[400])};
                `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-error`),s=w()===`pending`,c=n`
                  background-color: ${a(i.red[500],i.red[400])};
                `;return o!==r.e&&O(e,r.e=o),s!==r.t&&(e.disabled=r.t=s),c!==r.a&&O(t,r.a=c),r},{e:void 0,t:void 0,a:void 0}),e}}),null),p(P,N(I,{get when(){return!(g().length===0||w()===`error`)},get children(){var e=su(),t=e.firstChild,i=t.nextSibling.nextSibling;return i.firstChild,i.addEventListener(`change`,e=>{k(g().find(t=>t.name===e.currentTarget.value))}),p(i,N(oe,{get each(){return g()},children:e=>(()=>{var t=du();return p(t,()=>e.name),z(()=>t.value=e.name),t})()}),null),p(e,N(Fc,{}),null),z(a=>{var o=G(r().actionsSelect,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-error-multiple`),s=n`
                  background-color: ${Q.colors.red[400]};
                `,c=w()===`pending`;return o!==a.e&&O(e,a.e=o),s!==a.t&&O(t,a.t=s),c!==a.a&&(i.disabled=a.a=c),a},{e:void 0,t:void 0,a:void 0}),e}}),null),p(V,()=>u()===`view`?`Explorer`:`Editor`,null),p(e,N(I,{get when(){return u()===`view`},get children(){var e=cu();return p(e,N(Cl,{label:`Data`,defaultExpanded:[`Data`],get value(){return S()},editable:!0,onEdit:()=>d(`edit`),get activeQuery(){return _()}})),z(t=>s(e,`padding`,Q.size[2])),e}}),me),p(e,N(I,{get when(){return u()===`edit`},get children(){var e=lu(),t=e.firstChild,o=t.nextSibling,s=o.firstChild,c=s.nextSibling,l=c.firstChild,u=l.nextSibling;return e.addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(e.currentTarget).get(`data`);try{let e=JSON.parse(t);_().setState({..._().state,data:e}),d(`view`)}catch{h(!0)}}),t.addEventListener(`focus`,()=>h(!1)),p(s,()=>f()?`Invalid Value`:``),l.$$click=()=>d(`view`),z(d=>{var p=G(r().devtoolsEditForm,`tsqd-query-details-data-editor`),m=r().devtoolsEditTextarea,h=f(),g=r().devtoolsEditFormActions,_=r().devtoolsEditFormError,v=r().devtoolsEditFormActionContainer,y=G(r().devtoolsEditFormAction,n`
                      color: ${a(i.gray[600],i.gray[300])};
                    `),x=G(r().devtoolsEditFormAction,n`
                      color: ${a(i.blue[600],i.blue[400])};
                    `);return p!==d.e&&O(e,d.e=p),m!==d.t&&O(t,d.t=m),h!==d.a&&b(t,`data-error`,d.a=h),g!==d.o&&O(o,d.o=g),_!==d.i&&O(s,d.i=_),v!==d.n&&O(c,d.n=v),y!==d.s&&O(l,d.s=y),x!==d.h&&O(u,d.h=x),d},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),z(()=>t.value=JSON.stringify(S(),null,2)),e}}),me),p(he,N(Cl,{label:`Query`,defaultExpanded:[`Query`,`queryKey`],get value(){return y()}})),z(o=>{var l=G(r().detailsContainer,`tsqd-query-details-container`),u=G(r().detailsHeader,`tsqd-query-details-header`),d=G(r().detailsBody,`tsqd-query-details-summary-container`),f=G(r().queryDetailsStatus,j()),p=G(r().detailsHeader,`tsqd-query-details-header`),h=G(r().actionsBody,`tsqd-query-details-actions-container`),g=G(n`
                color: ${a(i.blue[600],i.blue[400])};
              `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-refetch`),_=C()===`fetching`,v=n`
                background-color: ${a(i.blue[600],i.blue[400])};
              `,y=G(n`
                color: ${a(i.yellow[600],i.yellow[400])};
              `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-invalidate`),b=w()===`pending`,x=n`
                background-color: ${a(i.yellow[600],i.yellow[400])};
              `,S=G(n`
                color: ${a(i.gray[600],i.gray[300])};
              `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-reset`),T=w()===`pending`,E=n`
                background-color: ${a(i.gray[600],i.gray[400])};
              `,D=G(n`
                color: ${a(i.pink[500],i.pink[400])};
              `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-remove`),ee=C()===`fetching`,k=n`
                background-color: ${a(i.pink[500],i.pink[400])};
              `,A=G(n`
                color: ${a(i.cyan[500],i.cyan[400])};
              `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-loading`),te=c(),ne=n`
                background-color: ${a(i.cyan[500],i.cyan[400])};
              `,re=G(r().detailsHeader,`tsqd-query-details-header`),N=G(r().detailsHeader,`tsqd-query-details-header`),ie=Q.size[2];return l!==o.e&&O(e,o.e=l),u!==o.t&&O(t,o.t=u),d!==o.a&&O(m,o.a=d),f!==o.o&&O(M,o.o=f),p!==o.i&&O(ae,o.i=p),h!==o.n&&O(P,o.n=h),g!==o.s&&O(F,o.s=g),_!==o.h&&(F.disabled=o.h=_),v!==o.r&&O(se,o.r=v),y!==o.d&&O(ce,o.d=y),b!==o.l&&(ce.disabled=o.l=b),x!==o.u&&O(L,o.u=x),S!==o.c&&O(le,o.c=S),T!==o.w&&(le.disabled=o.w=T),E!==o.m&&O(R,o.m=E),D!==o.f&&O(B,o.f=D),ee!==o.y&&(B.disabled=o.y=ee),k!==o.g&&O(ue,o.g=k),A!==o.p&&O(de,o.p=A),te!==o.b&&(de.disabled=o.b=te),ne!==o.T&&O(fe,o.T=ne),re!==o.A&&O(V,o.A=re),N!==o.O&&O(me,o.O=N),ie!==o.I&&s(he,`padding`,o.I=ie),o},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0,T:void 0,A:void 0,O:void 0,I:void 0}),e}})},Mu=()=>{let e=U(),t=H().shadowDOMTarget?W.bind({target:H().shadowDOMTarget}):W,n=L(()=>e()===`dark`?Hu(t):Vu(t)),{colors:r}=Q,a=(t,n)=>e()===`dark`?n:t,o=Lu(e=>{let t=e().getAll().find(e=>e.mutationId===hu());return t?t.state.isPaused:!1}),c=Lu(e=>{let t=e().getAll().find(e=>e.mutationId===hu());return t?t.state.status:`idle`}),l=L(()=>i({isPaused:o(),status:c()})),u=Lu(e=>e().getAll().find(e=>e.mutationId===hu()),!1),d=()=>l()===`gray`?t`
        background-color: ${a(r[l()][200],r[l()][700])};
        color: ${a(r[l()][700],r[l()][300])};
        border-color: ${a(r[l()][400],r[l()][600])};
      `:t`
      background-color: ${a(r[l()][100],r[l()][900])};
      color: ${a(r[l()][700],r[l()][300])};
      border-color: ${a(r[l()][400],r[l()][600])};
    `;return N(I,{get when(){return u()},get children(){var e=fu(),t=e.firstChild,r=t.nextSibling,i=r.firstChild,a=i.firstChild,o=a.firstChild,f=a.nextSibling,m=i.nextSibling.firstChild.nextSibling,h=r.nextSibling,g=h.nextSibling,_=g.nextSibling,y=_.nextSibling,b=y.nextSibling,x=b.nextSibling,S=x.nextSibling,C=S.nextSibling;return p(o,N(I,{get when(){return u().options.mutationKey},fallback:`No mutationKey found`,get children(){return v(u().options.mutationKey,!0)}})),p(f,N(I,{get when(){return l()===`purple`},children:`pending`}),null),p(f,N(I,{get when(){return l()!==`purple`},get children(){return c()}}),null),p(m,()=>new Date(u().state.submittedAt).toLocaleTimeString()),p(g,N(Cl,{label:`Variables`,defaultExpanded:[`Variables`],get value(){return u().state.variables}})),p(y,N(Cl,{label:`Context`,defaultExpanded:[`Context`],get value(){return u().state.context}})),p(x,N(Cl,{label:`Data`,defaultExpanded:[`Data`],get value(){return u().state.data}})),p(C,N(Cl,{label:`Mutation`,defaultExpanded:[`Mutation`],get value(){return u()}})),z(i=>{var a=G(n().detailsContainer,`tsqd-query-details-container`),o=G(n().detailsHeader,`tsqd-query-details-header`),c=G(n().detailsBody,`tsqd-query-details-summary-container`),l=G(n().queryDetailsStatus,d()),u=G(n().detailsHeader,`tsqd-query-details-header`),p=Q.size[2],m=G(n().detailsHeader,`tsqd-query-details-header`),v=Q.size[2],w=G(n().detailsHeader,`tsqd-query-details-header`),T=Q.size[2],E=G(n().detailsHeader,`tsqd-query-details-header`),D=Q.size[2];return a!==i.e&&O(e,i.e=a),o!==i.t&&O(t,i.t=o),c!==i.a&&O(r,i.a=c),l!==i.o&&O(f,i.o=l),u!==i.i&&O(h,i.i=u),p!==i.n&&s(g,`padding`,i.n=p),m!==i.s&&O(_,i.s=m),v!==i.h&&s(y,`padding`,i.h=v),w!==i.r&&O(b,i.r=w),T!==i.d&&s(x,`padding`,i.d=T),E!==i.l&&O(S,i.l=E),D!==i.u&&s(C,`padding`,i.u=D),i},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),e}})},Nu=new Map,Pu=()=>{let e=L(()=>H().client.getQueryCache()),t=e().subscribe(t=>{ce(()=>{for(let[n,r]of Nu.entries())r.shouldUpdate(t)&&r.setter(n(e))})});return g(()=>{Nu.clear(),t()}),t},$=(e,t=!0,n=()=>!0)=>{let r=L(()=>H().client.getQueryCache()),[i,a]=R(e(r),t?void 0:{equals:!1});return T(()=>{a(e(r))}),Nu.set(e,{setter:a,shouldUpdate:n}),g(()=>{Nu.delete(e)}),i},Fu=new Map,Iu=()=>{let e=L(()=>H().client.getMutationCache()),t=e().subscribe(()=>{for(let[t,n]of Fu.entries())queueMicrotask(()=>{n(t(e))})});return g(()=>{Fu.clear(),t()}),t},Lu=(e,t=!0)=>{let n=L(()=>H().client.getMutationCache()),[r,i]=R(e(n),t?void 0:{equals:!1});return T(()=>{i(e(n))}),Fu.set(e,i),g(()=>{Fu.delete(e)}),r},Ru=`@tanstack/query-devtools-event`,zu=({type:e,queryHash:t,metadata:n})=>{let r=new CustomEvent(Ru,{detail:{type:e,queryHash:t,metadata:n},bubbles:!0,cancelable:!0});window.dispatchEvent(r)},Bu=(e,t)=>{let{colors:n,font:r,size:i,alpha:a,shadow:o,border:s}=Q,c=(t,n)=>e===`light`?t:n;return{devtoolsBtn:t`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${o.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${n.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `,panel:t`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${Q.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${c(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${c(n.gray[400],n.darkGray[300])};
      }
    `,parentPanel:t`
      z-index: 9999;
      display: flex;
      height: 100%;
      gap: ${Q.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${c(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${c(n.gray[400],n.darkGray[300])};
      }
    `,"devtoolsBtn-position-bottom-right":t`
      bottom: 12px;
      right: 12px;
    `,"devtoolsBtn-position-bottom-left":t`
      bottom: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-left":t`
      top: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-right":t`
      top: 12px;
      right: 12px;
    `,"devtoolsBtn-position-relative":t`
      position: relative;
    `,"panel-position-top":t`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${i[14]};
      border-bottom: ${c(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-bottom":t`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${i[14]};
      border-top: ${c(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-right":t`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,"panel-position-left":t`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,closeBtn:t`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${c(n.gray[50],n.darkGray[700])};
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${n.blue[600]};
      }
      & svg {
        color: ${c(n.gray[600],n.gray[400])};
        width: ${i[2]};
        height: ${i[2]};
      }
    `,"closeBtn-position-top":t`
      bottom: 0;
      right: ${i[2]};
      transform: translate(0, 100%);
      border-right: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px 0px ${s.radius.sm} ${s.radius.sm};
      padding: ${i[.5]} ${i[1.5]} ${i[1]} ${i[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${i[2.5]};
        height: ${i[1.5]};
        width: calc(100% + ${i[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `,"closeBtn-position-bottom":t`
      top: 0;
      right: ${i[2]};
      transform: translate(0, -100%);
      border-right: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: none;
      border-radius: ${s.radius.sm} ${s.radius.sm} 0px 0px;
      padding: ${i[1]} ${i[1.5]} ${i[.5]} ${i[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${i[2.5]};
        height: ${i[1.5]};
        width: calc(100% + ${i[5]});
      }
    `,"closeBtn-position-right":t`
      bottom: ${i[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: ${s.radius.sm} 0px 0px ${s.radius.sm};
      padding: ${i[1.5]} ${i[.5]} ${i[1.5]} ${i[1]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${i[5]});
        width: ${i[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `,"closeBtn-position-left":t`
      bottom: ${i[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px ${s.radius.sm} ${s.radius.sm} 0px;
      padding: ${i[1.5]} ${i[1]} ${i[1.5]} ${i[.5]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${i[5]});
        width: ${i[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `,queriesContainer:t`
      flex: 1 1 700px;
      background-color: ${c(n.gray[50],n.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
    `,dragHandle:t`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${n.purple[400]}${c(``,a[90])};
      }
      &:focus {
        outline: none;
        background-color: ${n.purple[400]}${c(``,a[90])};
      }
      &:focus-visible {
        outline: 2px solid ${n.blue[800]};
        outline-offset: -2px;
        background-color: ${n.purple[400]}${c(``,a[90])};
      }
      z-index: 4;
    `,"dragHandle-position-top":t`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-bottom":t`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-right":t`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,"dragHandle-position-left":t`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,row:t`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${Q.size[2]} ${Q.size[2.5]};
      gap: ${Q.size[2.5]};
      border-bottom: ${c(n.gray[300],n.darkGray[500])} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        gap: ${i[.5]};
        flex-direction: column;
      }
    `,logoAndToggleContainer:t`
      display: flex;
      gap: ${Q.size[3]};
      align-items: center;
    `,logo:t`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${Q.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,tanstackLogo:t`
      font-size: ${r.size.md};
      font-weight: ${r.weight.bold};
      line-height: ${r.lineHeight.xs};
      white-space: nowrap;
      color: ${c(n.gray[600],n.gray[300])};
    `,queryFlavorLogo:t`
      font-weight: ${r.weight.semibold};
      font-size: ${r.size.xs};
      background: linear-gradient(
        to right,
        ${c(`#ea4037, #ff9b11`,`#dd524b, #e9a03b`)}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,queryStatusContainer:t`
      display: flex;
      gap: ${Q.size[2]};
      height: min-content;
    `,queryStatusTag:t`
      display: flex;
      gap: ${Q.size[1.5]};
      box-sizing: border-box;
      height: ${Q.size[6.5]};
      background: ${c(n.gray[50],n.darkGray[500])};
      color: ${c(n.gray[700],n.gray[300])};
      border-radius: ${Q.border.radius.sm};
      font-size: ${r.size.sm};
      padding: ${Q.size[1]};
      padding-left: ${Q.size[1.5]};
      align-items: center;
      font-weight: ${r.weight.medium};
      border: ${c(`1px solid `+n.gray[300],`1px solid transparent`)};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,queryStatusTagLabel:t`
      font-size: ${r.size.xs};
    `,queryStatusCount:t`
      font-size: ${r.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${c(n.gray[500],n.gray[400])};
      background-color: ${c(n.gray[200],n.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${Q.size[4.5]};
    `,statusTooltip:t`
      position: absolute;
      z-index: 1;
      background-color: ${c(n.gray[50],n.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${Q.size[2]}));
      padding: ${Q.size[.5]} ${Q.size[2]};
      border-radius: ${Q.border.radius.sm};
      font-size: ${r.size.xs};
      border: 1px solid ${c(n.gray[400],n.gray[600])};
      color: ${c(n.gray[600],n.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${c(n.gray[400],n.gray[600])} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2px));
        position: absolute;
        border-color: transparent transparent
          ${c(n.gray[100],n.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,filtersContainer:t`
      display: flex;
      gap: ${Q.size[2]};
      & > button {
        cursor: pointer;
        padding: ${Q.size[.5]} ${Q.size[1.5]} ${Q.size[.5]}
          ${Q.size[2]};
        border-radius: ${Q.border.radius.sm};
        background-color: ${c(n.gray[100],n.darkGray[400])};
        border: 1px solid ${c(n.gray[300],n.darkGray[200])};
        color: ${c(n.gray[700],n.gray[300])};
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        line-height: ${r.lineHeight.sm};
        gap: ${Q.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${s.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        & svg {
          width: ${Q.size[3]};
          height: ${Q.size[3]};
          color: ${c(n.gray[500],n.gray[400])};
        }
      }
    `,filterInput:t`
      padding: ${i[.5]} ${i[2]};
      border-radius: ${Q.border.radius.sm};
      background-color: ${c(n.gray[100],n.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${Q.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${c(n.gray[300],n.darkGray[200])};
      height: min-content;
      color: ${c(n.gray[600],n.gray[400])};
      & > svg {
        width: ${i[3]};
        height: ${i[3]};
      }
      & input {
        font-size: ${r.size.xs};
        width: 100%;
        background-color: ${c(n.gray[100],n.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${r.lineHeight.sm};
        color: ${c(n.gray[700],n.gray[300])};
        &::placeholder {
          color: ${c(n.gray[700],n.gray[300])};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,filterSelect:t`
      padding: ${Q.size[.5]} ${Q.size[2]};
      border-radius: ${Q.border.radius.sm};
      background-color: ${c(n.gray[100],n.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${Q.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${c(n.gray[300],n.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${c(n.gray[600],n.gray[400])};
        width: ${Q.size[2]};
        height: ${Q.size[2]};
      }
      & > select {
        appearance: none;
        color: ${c(n.gray[700],n.gray[300])};
        min-width: 100px;
        line-height: ${r.lineHeight.sm};
        font-size: ${r.size.xs};
        background-color: ${c(n.gray[100],n.darkGray[400])};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsContainer:t`
      display: flex;
      gap: ${Q.size[2]};
    `,actionsBtn:t`
      border-radius: ${Q.border.radius.sm};
      background-color: ${c(n.gray[100],n.darkGray[400])};
      border: 1px solid ${c(n.gray[300],n.darkGray[200])};
      width: ${Q.size[6.5]};
      height: ${Q.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${Q.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }
      & svg {
        color: ${c(n.gray[700],n.gray[300])};
        width: ${Q.size[3]};
        height: ${Q.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsBtnOffline:t`
      & svg {
        stroke: ${c(n.yellow[700],n.yellow[500])};
        fill: ${c(n.yellow[700],n.yellow[500])};
      }
    `,overflowQueryContainer:t`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,queryRow:t`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${c(n.gray[700],n.gray[300])};
      background-color: ${c(n.gray[50],n.darkGray[700])};
      line-height: 1;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover .tsqd-query-hash {
        background-color: ${c(n.gray[200],n.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${Q.size[1]};
        user-select: none;
        min-width: ${Q.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${r.size.xs};
        font-weight: ${r.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${c(n.gray[300],n.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        min-height: ${Q.size[6]};
        flex: 1;
        padding: ${Q.size[1]} ${Q.size[2]};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        border-bottom: 1px solid ${c(n.gray[300],n.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${Q.size[2]};
        color: ${c(n.gray[800],n.gray[300])};
        background-color: ${c(n.gray[300],n.darkGray[600])};
        border-bottom: 1px solid ${c(n.gray[300],n.darkGray[400])};
        font-size: ${r.size.xs};
      }

      & .tsqd-query-static-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${Q.size[2]};
        color: ${c(n.teal[800],n.teal[300])};
        background-color: ${c(n.teal[100],n.teal[900])};
        border-bottom: 1px solid ${c(n.teal[300],n.teal[700])};
        font-size: ${r.size.xs};
      }
    `,selectedQueryRow:t`
      background-color: ${c(n.gray[200],n.darkGray[500])};
    `,detailsContainer:t`
      flex: 1 1 700px;
      background-color: ${c(n.gray[50],n.darkGray[700])};
      color: ${c(n.gray[700],n.gray[300])};
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `,detailsHeader:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${c(n.gray[200],n.darkGray[600])};
      padding: ${Q.size[1.5]} ${Q.size[2]};
      font-weight: ${r.weight.medium};
      font-size: ${r.size.xs};
      line-height: ${r.lineHeight.xs};
      text-align: left;
    `,detailsBody:t`
      margin: ${Q.size[1.5]} 0px ${Q.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${Q.size[2]};
        line-height: ${r.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${r.size.xs};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${Q.size[1.5]};
      }

      & code {
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        margin: 0;
        font-size: ${r.size.xs};
        line-height: ${r.lineHeight.xs};
        max-width: 100%;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      & pre {
        margin: 0;
        display: flex;
        align-items: center;
      }
    `,queryDetailsStatus:t`
      border: 1px solid ${n.darkGray[200]};
      border-radius: ${Q.border.radius.sm};
      font-weight: ${r.weight.medium};
      padding: ${Q.size[1]} ${Q.size[2.5]};
    `,actionsBody:t`
      flex-wrap: wrap;
      margin: ${Q.size[2]} 0px ${Q.size[2]} 0px;
      display: flex;
      gap: ${Q.size[2]};
      padding: 0px ${Q.size[2]};
      & > button {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
        font-size: ${r.size.xs};
        padding: ${Q.size[1]} ${Q.size[2]};
        display: flex;
        border-radius: ${Q.border.radius.sm};
        background-color: ${c(n.gray[100],n.darkGray[600])};
        border: 1px solid ${c(n.gray[300],n.darkGray[400])};
        align-items: center;
        gap: ${Q.size[2]};
        font-weight: ${r.weight.medium};
        line-height: ${r.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${s.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        &:hover {
          background-color: ${c(n.gray[200],n.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${i[1.5]};
          height: ${i[1.5]};
          border-radius: ${Q.border.radius.full};
        }
      }
    `,actionsSelect:t`
      font-size: ${r.size.xs};
      padding: ${Q.size[.5]} ${Q.size[2]};
      display: flex;
      border-radius: ${Q.border.radius.sm};
      overflow: hidden;
      background-color: ${c(n.gray[100],n.darkGray[600])};
      border: 1px solid ${c(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${Q.size[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.sm};
      color: ${c(n.red[500],n.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }
      & > span {
        width: ${i[1.5]};
        height: ${i[1.5]};
        border-radius: ${Q.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${Q.colors.red[400]};
      }
      & svg {
        width: ${Q.size[2]};
        height: ${Q.size[2]};
      }
    `,settingsMenu:t`
      display: flex;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
      flex-direction: column;
      gap: ${i[.5]};
      border-radius: ${Q.border.radius.sm};
      border: 1px solid ${c(n.gray[300],n.gray[700])};
      background-color: ${c(n.gray[50],n.darkGray[600])};
      font-size: ${r.size.xs};
      color: ${c(n.gray[700],n.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${i[.5]};
    `,settingsSubTrigger:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${Q.border.radius.xs};
      padding: ${Q.size[1]} ${Q.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${c(n.gray[700],n.gray[300])};
      & svg {
        color: ${c(n.gray[600],n.gray[400])};
        transform: rotate(-90deg);
        width: ${Q.size[2]};
        height: ${Q.size[2]};
      }
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
      &.data-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,settingsMenuHeader:t`
      padding: ${Q.size[1]} ${Q.size[1]};
      font-weight: ${r.weight.medium};
      border-bottom: 1px solid ${c(n.gray[300],n.darkGray[400])};
      color: ${c(n.gray[500],n.gray[400])};
      font-size: ${r.size.xs};
    `,settingsSubButton:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${c(n.gray[700],n.gray[300])};
      font-size: ${r.size.xs};
      border-radius: ${Q.border.radius.xs};
      padding: ${Q.size[1]} ${Q.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${c(n.gray[600],n.gray[400])};
      }
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
      &[data-checked] {
        background-color: ${c(n.purple[100],n.purple[900])};
        color: ${c(n.purple[700],n.purple[300])};
        & svg {
          color: ${c(n.purple[700],n.purple[300])};
        }
        &:hover {
          background-color: ${c(n.purple[100],n.purple[900])};
        }
      }
    `,viewToggle:t`
      border-radius: ${Q.border.radius.sm};
      background-color: ${c(n.gray[200],n.darkGray[600])};
      border: 1px solid ${c(n.gray[300],n.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${r.size.xs};
      color: ${c(n.gray[700],n.gray[300])};
      overflow: hidden;

      &:has(:focus-visible) {
        outline: 2px solid ${n.blue[800]};
      }

      & .tsqd-radio-toggle {
        opacity: 0.5;
        display: flex;
        & label {
          display: flex;
          align-items: center;
          cursor: pointer;
          line-height: ${r.lineHeight.md};
        }

        & label:hover {
          background-color: ${c(n.gray[100],n.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${c(n.gray[100],n.darkGray[400])};
        & label:hover {
          background-color: ${c(n.gray[100],n.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${Q.size[1.5]} 0 ${Q.size[2]};
        }
        border-right: 1px solid ${c(n.gray[300],n.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${Q.size[2]} 0 ${Q.size[1.5]};
        }
      }
    `,devtoolsEditForm:t`
      padding: ${i[2]};
      & > [data-error='true'] {
        outline: 2px solid ${c(n.red[200],n.red[800])};
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
      }
    `,devtoolsEditTextarea:t`
      width: 100%;
      max-height: 500px;
      font-family: 'Fira Code', monospace;
      font-size: ${r.size.xs};
      border-radius: ${s.radius.sm};
      field-sizing: content;
      padding: ${i[2]};
      background-color: ${c(n.gray[100],n.darkGray[800])};
      color: ${c(n.gray[900],n.gray[100])};
      border: 1px solid ${c(n.gray[200],n.gray[700])};
      resize: none;
      &:focus {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${c(n.blue[200],n.blue[800])};
      }
    `,devtoolsEditFormActions:t`
      display: flex;
      justify-content: space-between;
      gap: ${i[2]};
      align-items: center;
      padding-top: ${i[1]};
      font-size: ${r.size.xs};
    `,devtoolsEditFormError:t`
      color: ${c(n.red[700],n.red[500])};
    `,devtoolsEditFormActionContainer:t`
      display: flex;
      gap: ${i[2]};
    `,devtoolsEditFormAction:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      font-size: ${r.size.xs};
      padding: ${i[1]} ${Q.size[2]};
      display: flex;
      border-radius: ${s.radius.sm};
      background-color: ${c(n.gray[100],n.darkGray[600])};
      border: 1px solid ${c(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${i[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.xs};
      cursor: pointer;
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `}},Vu=e=>Bu(`light`,e),Hu=e=>Bu(`dark`,e);n([`click`,`mousedown`,`keydown`,`input`]);export{Ie as a,ye as c,ze as i,xu as n,Oe as o,Cu as r,Ve as s,Tu as t};