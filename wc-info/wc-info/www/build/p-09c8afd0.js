const e=window,t=document,n={t:0,s:"",raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s)},s=!!t.documentElement.attachShadow,o=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),l=new WeakMap,i=e=>l.get(e),c=(e,t)=>l.set(t.o=e,t),r=(e,t)=>t in e,a=e=>console.error(e),f=new Map,u=e.__stencil_cssshim;let $=0,d=!1;const w=[],p=[],m=[],h=e=>t=>{e.push(t),d||(d=!0,n.raf(v))},y=(e,t)=>{let n=0,s=0;for(;n<e.length&&(s=performance.now())<t;)try{e[n++](s)}catch(e){a(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},v=()=>{$++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){a(e)}e.length=0})(w);const e=2==(6&n.t)?performance.now()+7*Math.ceil($*(1/22)):1/0;y(p,e),y(m,e),p.length>0&&(m.push(...p),p.length=0),(d=w.length+p.length+m.length>0)?n.raf(v):$=0},g=h(p),b={},_=e=>null!=e,j=e=>e.toLowerCase(),S=e=>["object","function"].includes(typeof e),k=()=>e.CSS&&e.CSS.supports&&e.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_wc_video("./p-229ebf7a.js"),M=async()=>{{const n=Array.from(t.querySelectorAll("script")).find(e=>e.src.includes("/wc-video.esm.js")||"wc-video"===e.getAttribute("data-namespace")),s=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,e.location.href));return O(s.href),window.customElements||await __sc_import_wc_video("./p-a0c82e31.js"),s.href}},O=n=>{const s=`__sc_import_${"wc-video".replace(/\s|-/g,"_")}`;try{e[s]=new Function("w","return import(w);")}catch(o){const l=new Map;e[s]=o=>{const i=new URL(o,n).href;let c=l.get(i);if(!c){const n=t.createElement("script");n.type="module",n.src=URL.createObjectURL(new Blob([`import * as m from '${i}'; window.${s}.m = m;`],{type:"application/javascript"})),c=new Promise(t=>{n.onload=()=>{t(e[s].m),n.remove()}}),l.set(i,c),t.head.appendChild(n)}return c}}},x="http://www.w3.org/1999/xlink",R=new WeakMap,U=e=>"sc-"+e,L=(e,t,...n)=>{let s,o=null,l=!1,i=!1,c=[];const r=t=>{for(let n=0;n<t.length;n++)o=t[n],Array.isArray(o)?r(o):null!=o&&"boolean"!=typeof o&&((l="function"!=typeof e&&!S(o))&&(o=String(o)),l&&i?c[c.length-1].l+=o:c.push(l?{t:0,l:o}:o),i=l)};if(r(n),t){s=t.key||void 0;{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,E);const a={t:0,i:e,u:c.length>0?c:null,$:void 0,p:t};return a.h=s,a},C={},E={forEach:(e,t)=>e.map(A).forEach(t),map:(e,t)=>e.map(A).map(t).map(P)},A=e=>({vattrs:e.p,vchildren:e.u,vkey:e.h,vname:e.v,vtag:e.i,vtext:e.l}),P=e=>({t:0,p:e.vattrs,u:e.vchildren,h:e.vkey,v:e.vname,i:e.vtag,l:e.vtext}),F=(e,t,s,o,l,i)=>{if(s!==o)if("class"!==t||l)if("style"===t){for(const t in s)o&&null!=o[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in o)s&&o[t]===s[t]||(t.includes("-")?e.style.setProperty(t,o[t]):e.style[t]=o[t])}else if("key"===t);else if("ref"===t)o&&o(e);else if(t.startsWith("on")&&!r(e,t))t=r(e,j(t))?j(t.substring(2)):j(t[2])+t.substring(3),s&&n.rel(e,t,s,!1),o&&n.ael(e,t,o,!1);else{const n=r(e,t),s=S(o);if((n||s&&null!==o)&&!l)try{e[t]=null==o&&-1===e.tagName.indexOf("-")?"":o}catch(e){}const c=!(!l||t===(t=t.replace(/^xlink\:?/,"")));null==o||!1===o?c?e.removeAttributeNS(x,j(t)):e.removeAttribute(t):(!n||4&i||l)&&!s&&(o=!0===o?"":o.toString(),c?e.setAttributeNS(x,j(t),o):e.setAttribute(t,o))}else{const t=T(s),n=T(e.className).filter(e=>!t.includes(e));e.className=n.concat(T(o).filter(e=>!n.includes(e))).join(" ")}},T=e=>e?e.split(" "):[],W=(e,t,n,s)=>{const o=11===t.$.nodeType&&t.$.host?t.$.host:t.$,l=e&&e.p||b,i=t.p||b;for(s in l)null==i[s]&&null!=l[s]&&F(o,s,l[s],void 0,n,t.t);for(s in i)F(o,s,l[s],i[s],n,t.t)};let q,B,H=!1;const N=(e,n,s)=>{let o,l,i=n.u[s],c=0;if(_(i.l))i.$=t.createTextNode(i.l);else{if(o=i.$=H||"svg"===i.i?t.createElementNS("http://www.w3.org/2000/svg",i.i):t.createElement(i.i),W(null,i,H="svg"===i.i||"foreignObject"!==i.i&&H),_(q)&&o["s-si"]!==q&&o.classList.add(o["s-si"]=q),i.u)for(c=0;c<i.u.length;++c)(l=N(e,i,c,o))&&o.appendChild(l);"svg"===i.i&&(H=!1)}return i.$},V=(e,t,n,s,o,l)=>{let i,c=e;for(c.shadowRoot&&j(c.tagName)===B&&(c=c.shadowRoot);o<=l;++o)s[o]&&(i=N(null,n,o,e))&&(s[o].$=i,c.insertBefore(i,t))},z=(e,t,n,s)=>{for(;t<=n;++t)_(e[t])&&(s=e[t].$,I(e[t],!0),s.remove())},D=(e,t)=>e.i===t.i&&e.h===t.h,G=(e,t)=>{const n=t.$=e.$,s=e.u,o=t.u;H=n&&_(n.parentNode)&&void 0!==n.ownerSVGElement,H="svg"===t.i||"foreignObject"!==t.i&&H,_(t.l)?e.l!==t.l&&(n.textContent=t.l):(W(e,t,H),_(s)&&_(o)?((e,t,n,s)=>{let o,l,i=0,c=0,r=0,a=0,f=t.length-1,u=t[0],$=t[f],d=s.length-1,w=s[0],p=s[d];for(;i<=f&&c<=d;)if(null==u)u=t[++i];else if(null==$)$=t[--f];else if(null==w)w=s[++c];else if(null==p)p=s[--d];else if(D(u,w))G(u,w),u=t[++i],w=s[++c];else if(D($,p))G($,p),$=t[--f],p=s[--d];else if(D(u,p))G(u,p),e.insertBefore(u.$,$.$.nextSibling),u=t[++i],p=s[--d];else if(D($,w))G($,w),e.insertBefore($.$,u.$),$=t[--f],w=s[++c];else{for(r=-1,a=i;a<=f;++a)if(t[a]&&_(t[a].h)&&t[a].h===w.h){r=a;break}r>=0?((l=t[r]).i!==w.i?o=N(t&&t[c],n,r,e):(G(l,w),t[r]=void 0,o=l.$),w=s[++c]):(o=N(t&&t[c],n,c,e),w=s[++c]),o&&u.$.parentNode.insertBefore(o,u.$)}i>f?V(e,null==s[d+1]?null:s[d+1].$,n,s,c,d):c>d&&z(t,i,f)})(n,s,t,o):_(o)?(_(e.l)&&(n.textContent=""),V(n,null,t,o,0,o.length-1)):_(s)&&z(s,0,s.length-1)),H&&"svg"===t.i&&(H=!1)},I=(e,t)=>{e&&(e.p&&e.p.ref&&e.p.ref(t?null:e.$),e.u&&e.u.forEach(e=>{I(e,t)}))},J=async(e,t,n,s)=>{t.t|=16;const o=t.o;g(()=>K(e,t,n,o,s))},K=(e,n,o,l,i)=>{n.t&=-17,i&&((e,n)=>{const o=((e,s,o,l)=>{let i=U(n.g),c=f.get(i);if(e=11===e.nodeType?e:t,c)if("string"==typeof c){let n,s=R.get(e=e.head||e);if(s||R.set(e,s=new Set),!s.has(i)){if(u){const e=(n=u.createHostStyle(l,i,c))["s-sc"];e&&(i=e,s=null)}else(n=t.createElement("style")).innerHTML=c;e.appendChild(n),s&&s.add(i)}}else e.adoptedStyleSheets.includes(c)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,c]);return i})(s&&e.shadowRoot?e.shadowRoot:e.getRootNode(),0,0,e);10&n.t&&(e["s-sc"]=o,e.classList.add(o+"-h"))})(e,o),n.t|=4;try{((e,t,n,s)=>{const o=t._||{t:0};B=j(e.tagName),(e=>e&&e.i===C)(s)?s.i=null:s=L(null,null,s),s.t|=4,t._=s,s.$=o.$=e.shadowRoot||e,q=e["s-sc"],G(o,s)})(e,n,0,l.render())}catch(e){a(e)}n.t&=-5,u&&u.updateHost(e),n.t|=2,Q(e,n)},Q=(e,s)=>{if(!e["s-al"]){const o=s.j;512&s.t||(s.t|=512,e.classList.add("hydrated"),s.S(e),o||(t.documentElement.classList.add("hydrated"),setTimeout(()=>n.t|=2,999)))}},X=(e,t,n)=>{if(t.k){const s=Object.entries(t.k),o=e.prototype;if(s.forEach(([e,[s]])=>{(31&s||2&n&&32&s)&&Object.defineProperty(o,e,{get(){return((e,t)=>i(e).M.get(t))(this,e)},set(n){((e,t,n,s)=>{const o=i(this),l=o.O,c=o.M.get(t),r=o.t;(n=((e,t)=>null==e||S(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?String(e):e)(n,s.k[t][0]))===c||8&r&&void 0!==c||(o.M.set(t,n),o.o&&2==(22&r)&&J(l,o,s,!1))})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,s){const o=t.get(e);this[o]=(null!==s||"boolean"!=typeof this[o])&&s},e.observedAttributes=s.filter(([e,t])=>15&t[0]).map(([e,n])=>{const s=n[1]||e;return t.set(s,e),s})}}return e},Y=(c,r={})=>{const $=[],d=r.exclude||[],w=t.head,p=e.customElements,m=w.querySelector("meta[charset]"),h=t.createElement("style");Object.assign(n,r),n.s=new URL(r.resourcesUrl||"/",e.location.href).href,r.syncQueue&&(n.t|=4),c.forEach(e=>e[1].forEach(t=>{const c={t:t[0],g:t[1],k:t[2],R:t[3]};!s&&1&c.t&&(c.t|=8);const r=c.g;c.U=e[0],d.includes(r)||p.get(r)||($.push(r),p.define(r,X(class extends HTMLElement{constructor(e){super(e),(e=>{{const t={t:0,O:e,M:new Map};t.L=new Promise(e=>t.S=e),l.set(e,t)}})(e=this),1&c.t&&(s?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){((e,t)=>{if(0==(1&n.t)){const n=i(e);1&n.t||(n.t|=1,t.k&&Object.entries(t.k).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),(async(e,t,n,s,l)=>{if(0==(256&t.t)){t.t|=256,(l=await(e=>__sc_import_wc_video(`./${e.U}.entry.js`).then(t=>t[e.g.replace(/-/g,"_")],a))(n)).isProxied||(X(l,n,2),l.isProxied=!0),t.t|=8;try{new l(t)}catch(e){a(e)}if(t.t&=-9,!l.isStyleRegistered&&l.style){let e=l.style,t=U(n.g);8&n.t&&(e=await __sc_import_wc_video("./p-549b16dd.js").then(n=>n.scopeCss(e,t,!1))),((e,t)=>{let n=f.get(e);o?(n=n||new CSSStyleSheet).replace(t):n=t,f.set(e,n)})(t,e),l.isStyleRegistered=!0}}J(e,t,n,!0)})(e,n,t))}})(this,c)}disconnectedCallback(){0==(1&n.t)&&u&&u.removeHost(this)}"s-init"(){const e=i(this);e.o&&Q(this,e)}"s-hmr"(e){}forceUpdate(){J(this,i(this),c,!1)}componentOnReady(){return i(this).L}},c,1)))})),h.innerHTML=$+"{visibility:hidden}.hydrated{visibility:inherit}",h.setAttribute("data-styles",""),w.insertBefore(h,m?m.nextSibling:w.firstChild)},Z=(e,t,n)=>{const s=ee(e);return{emit:e=>s.dispatchEvent(new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},ee=e=>i(e).O;export{M as a,Y as b,k as c,c as d,Z as e,L as f,ee as g};