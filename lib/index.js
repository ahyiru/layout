import{useState as Ca,useEffect as za,useCallback as Ha,useRef as _a}from"react";var Vn=n=>Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),H=Vn;var qn=n=>H(n)==="array",w=qn;var Jn=n=>H(n)==="object",g=Jn;var Gn=n=>n?.$$typeof&&typeof n.$$typeof=="symbol"&&n.$$typeof.description?.indexOf("react.")===0,Y=Gn;var Qn=n=>n?.__v_isVNode,dn=Qn;var Zn=(n,e)=>Object.prototype.hasOwnProperty.call(n??{},e),L=Zn;var sn=n=>{if(!w(n)&&!g(n))return n;let e=w(n)?[]:{};for(let t in n)if(L(n,t)){let r=n[t];e[t]=Y(r)||dn(r)||typeof r!="object"?r:r!==n?sn(r):"cyclic"}else Object.setPrototypeOf(e,{[t]:n[t]});return e},N=sn;import{jsx as Zt}from"react/jsx-runtime";import{jsxs as rr}from"react/jsx-runtime";var ne=n=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(n),$=ne;var ee=()=>{let n={};return{on:(o,a)=>{n[o]||(n[o]=[]),n[o].indexOf(a)===-1&&n[o].push(a)},emit:(o,a)=>{n[o]&&n[o].map(l=>l(a))},off:(o,a=null)=>{if(n[o]){if(typeof a!="function")return delete n[o];let l=n[o].indexOf(a);l>-1&&(n[o].splice(l,1),n[o].length||delete n[o])}}}},C=ee;var fn=n=>{let e={};for(let t in n)L(n,t)||(e[t]=n[t]);return e},te=(n,e)=>{if(!g(n))return e;if(!g(e))return n;let t={...fn(n),...fn(e)},r={...n,...e};return Object.keys(t).map(o=>{Object.setPrototypeOf(r,{[o]:t[o]})}),r},xn=te;var re=(n=C())=>{let{on:e,emit:t,off:r}=n,o={};return{getState:h=>N(o[h]),setState:(h,s=!1)=>{if(typeof h=="function"&&(h=h(N(o))),!g(h))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");let x=N(h);Object.keys(x).map(c=>{let f=o[c],p=x[c],v=g(p)&&g(f)?xn(f,p):p;!s&&t(c,v),o[c]=v})},subscribe:(h,s)=>(e(h,s),()=>r(h,s)),unsubscribe:r,clean:h=>{typeof h=="string"?o[h]=void 0:Array.isArray(h)?h.map(s=>o[s]=void 0):Object.keys(o).map(s=>o[s]=void 0)}}},_=re;import{useState as oe,useEffect as ae,useCallback as Z}from"react";var ie=n=>(e,t)=>{let[r,o]=oe(()=>{let i=n?.getState(e);return i!==void 0?i:(t!==void 0&&n?.setState({[e]:t},!0),t)}),a=Z(i=>n?.setState({[e]:typeof i=="function"?i(n?.getState(e)):i}),[]),l=Z(i=>n?.subscribe(e,i),[]),u=Z((i=i)=>n?.clean(i),[]);return ae(()=>{n?.subscribe(e,i=>o(i))},[]),[r,a,l,u]},F=ie;var le=_(),kr=F(le),br=C(),wr=C();var ce=n=>w(n)&&!!n.length,K=ce;var se=C(),pe=n=>{let{on:e,emit:t,off:r}=se;return{on:o=>e(n,o),emit:o=>t(n,o),off:o=>r(n,o)}},nn=pe;var fe=(n=_())=>(e,t)=>{let{getState:r,setState:o,subscribe:a,unsubscribe:l,clean:u}=n;return t!==void 0&&o({[e]:t},!0),{getState:()=>r(e),setState:(i,h)=>o({[e]:i},h),subscribe:i=>a(e,i),unsubscribe:()=>l(e),clean:()=>u(e)}},X=fe;var xe=_(),ge=X(xe),gn=ge;var yn=nn("push-emitter"),ye=nn("replace-emitter"),B=gn("route-store"),mn=C(),vn=_(mn),en=X(vn),A=F(vn);var me=()=>![typeof window,typeof document].includes("undefined"),tn=me;import{Suspense as Vo}from"react";import ve from"react";var D=class extends ve.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){let{errorReport:r}=this.props;typeof r=="function"&&r({error:e,info:t.componentStack})}componentDidUpdate(e,t){t.error&&this.setState({error:null})}render(){let{error:e}=this.state,{fallback:t,children:r}=this.props;return e?t?.(e)??e:r}};import{jsx as xo}from"react/jsx-runtime";if(typeof document<"u"&&!window.__HUXY__?.has("cab66a")){window.__HUXY__=window.__HUXY__||new Set;let n=document.createElement("style");n.textContent=`@keyframes before {
  0% {
    width: 0.6rem;
    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;
  }
  35% {
    width: 3rem;
    box-shadow: 0 -0.6rem #ff3e38, 0 0.6rem #318ffa;
  }
  70% {
    width: 0.6rem;
    box-shadow: -1.2rem -0.6rem #ff3e38, 1.2rem 0.6rem #318ffa;
  }
  100% {
    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;
  }
}
@keyframes after {
  0% {
    height: 0.6rem;
    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;
  }
  35% {
    height: 3rem;
    box-shadow: 0.6rem 0 #6ce581, -0.6rem 0 #fecb2e;
  }
  70% {
    height: 0.6rem;
    box-shadow: 0.6rem -1.2rem #6ce581, -0.6rem 1.2rem #fecb2e;
  }
  100% {
    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;
  }
}
.spinner {
  position: relative;
  height: 100%;
  min-height: 100px;
  display: block;
  overflow: hidden;
  pointer-events: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: hsla(0, 0%, 72%, 0.24);
}
.spinner.absolute {
  position: absolute;
  min-height: auto;
}
.spinner.global {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.spinner .spinning {
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(165deg);
  margin: 0;
}
.spinner .spinning::before,
.spinner .spinning::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.3rem;
  transform: translate(-50%, -50%);
}
.spinner .spinning::before {
  animation: before 1.5s infinite;
}
.spinner .spinning::after {
  animation: after 1.5s infinite;
}
`,document.head.appendChild(n),window.__HUXY__.add("cab66a")}import{jsx as ko}from"react/jsx-runtime";import{useEffect as Ao}from"react";import{useState as Po,useRef as Lo,useCallback as Bo}from"react";import{useEffect as Co,useRef as zo,useCallback as Ho}from"react";import{jsx as To}from"react/jsx-runtime";import{jsx as na}from"react/jsx-runtime";if(typeof document<"u"&&!window.__HUXY__?.has("5c4655")){window.__HUXY__=window.__HUXY__||new Set;let n=document.createElement("style");n.textContent=`.hy-5c4655-link {
  text-decoration: none;
  cursor: pointer;
  color: var(--linkColor);
  background-color: transparent;
  font-weight: 500;
  transition: color 0.3s;
}
.hy-5c4655-link:active,
.hy-5c4655-link.hy-5c4655-active {
  color: var(--linkActiveColor, #42a5f5);
}
.hy-5c4655-link:hover {
  color: var(--linkHoverColor, #2196f3);
}
.hy-5c4655-link[disabled] {
  cursor: not-allowed;
  opacity: 0.7;
}
.hy-5c4655-link[disabled]:active,
.hy-5c4655-link[disabled].hy-5c4655-active,
.hy-5c4655-link[disabled]:hover {
  color: var(--linkColor);
}
`,document.head.appendChild(n),window.__HUXY__.add("5c4655")}import{jsx as Ga}from"react/jsx-runtime";import{useState as Ka,useEffect as ni}from"react";var ui=B.getState,di=B.subscribe;import{useEffect as Pe}from"react";var Ce=n=>H(n).indexOf("element")>-1,kn=Ce;var ze=(n=null)=>tn()?kn(n)?{width:n.clientWidth,height:n.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},rn=ze;import{useEffect as He,useState as _e,useCallback as We,useRef as Ie}from"react";var Se=(n={})=>{let e=Ie(0),[t,r]=_e(n),o=We(a=>{cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>r(a))},[]);return He(()=>()=>cancelAnimationFrame(e.current),[]),[t,o]},bn=Se;var Le=()=>{let[n,e]=bn(rn());return Pe(()=>{let t=()=>e(rn());return window.addEventListener("resize",t,!1),()=>window.removeEventListener("resize",t,!1)},[]),n},j=Le;import{useMemo as ct}from"react";import{useEffect as Ye,useRef as In}from"react";var Be=(n,e,t="id",r="children")=>{if(!w(n))return null;let o=a=>{for(let l=0,u=a.length;l<u;l++){let i=a[l];if(i[t]===e)return[i];if(w(i[r])){let h=o(i[r]);if(h)return[i].concat(h)}}};return o(n)},wn=Be;import{useCallback as Re,useState as Ee}from"react";var Ne=n=>++n,$e=()=>{let[,n]=Ee(0);return Re(()=>n(Ne),[])},Cn=$e;import{jsx as m,jsxs as on}from"react/jsx-runtime";var Ae=({to:n,preventDefault:e,stopPropagation:t,...r})=>e?m("span",{...r}):m("a",{href:n,...r}),Me=({item:n,...e})=>m("ul",{...e}),Oe=(n,...e)=>{let t={};return Object.keys(n).filter(Boolean).map(r=>{t[r]=o=>n[r](o,...e)}),t},zn=({data:n=[],events:e={},List:t=Me,Link:r=Ae,leftIcon:o,rightIcon:a,isHorizontal:l,isCollapsed:u,level:i=0,parentOpen:h=!0})=>{let s=u&&!i,x=!l&&!u&&!h;return n.map(c=>{let{name:f,path:p,icon:v,rightIcon:k,active:y,open:O,children:U,linkProps:R}=c,Q=K(U),z=c.id||`${p}${c.childSameRouteLevel??""}`,T=s?c.title??f:void 0,P=x?"hidden":"",I=v??o,b=k??a,E=I?m("div",{className:"node-left-icon",children:I===!0?m("i",{className:"default-left-icon"}):I}):null,un=f?m("div",{className:"node-text",children:m("span",{children:f})}):null;if(Q){let Dn=Oe(e,c,i),jn=[P,O?"open":""].filter(Boolean).join(" ");return on("li",{className:jn,"has-children":"true",...Dn,children:[on(r,{title:T,className:`link${y?" active":""}`,to:p,preventDefault:!0,stopPropagation:!1,...R,children:[E,un,b?m("div",{className:"node-right-icon",children:b===!0?m("i",{className:"default-right-icon"}):b}):null]}),m(t,{item:c,children:zn({data:U,events:e,List:t,Link:r,leftIcon:o,rightIcon:a,isHorizontal:l,isCollapsed:u,level:i+1,parentOpen:!!O})})]},z)}return m("li",{className:P,children:on(r,{title:T,className:`link${y?" active":""}`,to:p,...R,children:[E,un]})},z)})},Hn=zn;import{jsx as Te}from"react/jsx-runtime";var _n=n=>{let{children:e,open:t}=n,r=0;if(t&&e?.length){r=e.length;let o=0;return e.map(a=>o+=_n(a)),r+o}return r},Ue=({item:n,style:e,...t})=>Te("ul",{style:{...e,"--count":_n(n)},...t}),Wn=Ue;if(typeof document<"u"&&!window.__HUXY__?.has("e6480a")){window.__HUXY__=window.__HUXY__||new Set;let n=document.createElement("style");n.textContent=`.node-right-icon-close {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.node-right-icon-close .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.node-right-icon-close .default-right-icon::before,
.node-right-icon-close .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.node-right-icon-close .default-right-icon::before {
  left: 0;
}
.node-right-icon-close .default-right-icon::after {
  left: calc(1px * 0.7);
}
.node-right-icon-close .default-right-icon::before,
.node-right-icon-close .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.node-right-icon-close .default-right-icon::before {
  transform: rotate(135deg);
}
.node-right-icon-close .default-right-icon::after {
  transform: rotate(45deg);
}
.node-right-icon-open {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.node-right-icon-open .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.node-right-icon-open .default-right-icon::before,
.node-right-icon-open .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.node-right-icon-open .default-right-icon::before {
  left: 0;
}
.node-right-icon-open .default-right-icon::after {
  left: calc(1px * 0.7);
}
.node-right-icon-open .default-right-icon::before,
.node-right-icon-open .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.node-right-icon-open .default-right-icon::before {
  transform: rotate(225deg);
}
.node-right-icon-open .default-right-icon::after {
  transform: rotate(-45deg);
}
.hide-scrollbar {
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.huxy-tree {
  --topBar: 0px;
  --downBar: var(--footerHeight, 0);
  --width: var(--menuWidth, 100%);
  --bgColor: var(--menuBgColor, transparent);
  --itemHeight: var(--menuItemHeight, 40px);
  --nodeListWidth: var(--collapseMenuWidth, 200px);
  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));
  --subItemHeight: calc(var(--itemHeight) - 3px);
  --leftIconWidth: 38px;
  --rightIconWidth: 24px;
  --trackWidth: 15px;
  --collapsedWidth: var(--collapseWidth, 60px);
  --ulPadding: 2px 0;
  --ulPosition: calc(100% + 8px);
  --arrowPosition: 16px;
  position: relative;
  height: calc(100% - var(--topBar) - var(--downBar));
  overflow: hidden;
}
.huxy-tree .huxy-tree-track {
  width: calc(100% + var(--trackWidth));
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.huxy-tree .huxy-tree-track::-webkit-scrollbar {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root {
  width: calc(100% - var(--trackWidth));
  min-height: 100%;
  padding: var(--ulPadding);
  margin: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link {
  padding-left: 6px;
  font-size: 1.3rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > .link {
  padding-left: 22px;
  font-size: 1.2rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > .link {
  padding-left: 38px;
  font-size: 1.1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > .link {
  padding-left: 54px;
  font-size: 1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > .link {
  padding-left: 70px;
  font-size: 0.9rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li {
  user-select: none;
  position: relative;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link.active::after {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  content: '';
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  left: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 3px;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon .default-left-icon:after {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: currentColor;
  opacity: 0.7;
  left: 50%;
  top: 50%;
  transform: translate(-2px, -2px);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon > * {
  vertical-align: middle;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text {
  display: block;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon {
  right: 0;
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > ul {
  height: calc(var(--subItemHeight) * var(--count));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.hidden {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  --count: 0;
  overflow: hidden;
  height: 0;
  transition: height 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link {
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.collapsed.huxy-tree {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link {
  padding-left: 0px;
  position: relative;
  /*&:hover,*/
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  content: '';
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  overflow: visible;
  height: auto;
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: 0;
  left: var(--ulPosition);
  width: var(--nodeListWidth);
  padding: var(--ulPadding);
  opacity: 0.99;
  border-radius: 2px;
  transform: scale(0);
  transform-origin: 0 0;
  transition: 0.3s transform;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  border-width: 6px;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  border-width: 5px;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  left: auto;
  right: 100%;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  top: var(--arrowPosition);
  border-right-color: var(--treeBorderColor);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  top: calc(var(--arrowPosition) + 1px);
  border-right-color: var(--bgColor);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li {
  z-index: 10001;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-text,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-right-icon {
  display: none;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
  width: var(--collapsedWidth);
  font-size: 1.6rem;
}
.huxy-horizontal-tree {
  --bgColor: var(--navBgColor, transparent);
  --itemHeight: var(--menuItemHeight, 40px);
  --nodeListWidth: var(--collapseMenuWidth, 200px);
  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));
  --subItemHeight: calc(var(--itemHeight) - 3px);
  --leftIconWidth: 38px;
  --rightIconWidth: 24px;
  --itemPadding: 0 8px;
  --nodeFloat: auto;
  --ulPadding: 2px 0;
  --ulPosition: calc(100% + 8px);
  --arrowPosition: 16px;
  position: relative;
  border-top: 1px solid var(--treeBorderColor);
  float: var(--nodeFloat);
}
.huxy-horizontal-tree .huxy-tree-track {
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.huxy-horizontal-tree .huxy-tree-track::-webkit-scrollbar {
  display: none;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root {
  float: var(--nodeFloat);
  width: max-content;
  padding: 0 10px;
  margin: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li {
  user-select: none;
  position: relative;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link.active::after {
  display: none;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  content: '';
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon .default-left-icon:after {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: currentColor;
  opacity: 0.7;
  left: 50%;
  top: 50%;
  transform: translate(-2px, -2px);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon > * {
  vertical-align: middle;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
  right: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: 0;
  left: var(--ulPosition);
  right: auto;
  width: var(--nodeListWidth);
  padding: var(--ulPadding);
  opacity: 0.99;
  transform: scale(0);
  transform-origin: 0 0;
  transition: 0.3s transform;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  left: auto;
  right: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  top: var(--arrowPosition);
  border-right-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  top: calc(var(--arrowPosition) + 1px);
  border-right-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  left: auto;
  right: var(--ulPosition);
  position: absolute;
  transform-origin: 100% 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  right: auto;
  left: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {
  top: var(--arrowPosition);
  border-left-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  top: calc(var(--arrowPosition) + 1px);
  border-left-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li {
  float: left;
  padding: var(--itemPadding);
  z-index: 10001;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li::before {
  content: '';
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
  height: 20px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > .link {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: var(--ulPosition);
  left: 0;
  transform-origin: 50% 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {
  border-width: 8px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  border-width: 7px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  top: auto;
  bottom: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {
  left: 16px;
  border-bottom-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  left: calc(16px + 1px);
  border-bottom-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  left: auto;
  right: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  left: auto;
  top: auto;
  bottom: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {
  right: 10px;
  border-bottom-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  right: calc(10px + 1px);
  border-bottom-color: var(--bgColor);
}
`,document.head.appendChild(n),window.__HUXY__.add("e6480a")}import{jsx as M}from"react/jsx-runtime";var Fe=n=>M("ul",{...n}),Xe=(n,e)=>n?Wn:({item:t,...r})=>M(Fe,{className:e==="right"?"left":"",...r}),De=n=>{let{data:e=[],collapsed:t=!1,type:r="vertical",Link:o,width:a,bgColor:l,itemHeight:u,collapsedWidth:i,itemPadding:h,style:s,className:x,...c}=n,f=In(),p=In();Ye(()=>()=>clearTimeout(f.current),[]);let v=Cn(),k=r==="horizontal",y=!k&&t,O={onClick:(P,I)=>{if(P.stopPropagation(),!k&&!y){let b=wn(e,I.path,"path"),E=b[b.length-1];E.open=!E.open,v()}},onMouseEnter:(P,I,b)=>{y&&!b&&(clearTimeout(f.current),p.current.style.width="var(--maxWidth)")},onMouseLeave:(P,I,b)=>{y&&!b&&(f.current=setTimeout(()=>p.current.style.width="",200))}},U=(k?["huxy-horizontal-tree",x]:["huxy-tree",x,y?"collapsed":""]).filter(Boolean).join(" "),{float:R,...Q}=c?.style??{},z={"--bgColor":l,"--itemHeight":u,"--nodeListWidth":a,...Q};k?(z["--itemPadding"]=h,z["--nodeFloat"]=R):(z["--width"]=a,z["--collapsedWidth"]=i);let T=Xe(!k&&!y,R);return M("div",{ref:p,className:U,style:z,...c,children:M("div",{className:"huxy-tree-track",children:M("ul",{className:"huxy-tree-root",children:Hn({data:e,events:O,List:T,Link:o,leftIcon:!0,rightIcon:!0,isHorizontal:k,isCollapsed:y})})})})},V=De;import{useState as tt,useRef as rt}from"react";import{useEffect as Ve}from"react";var je=n=>{let e=typeof n=="function"?n():n;return L(e,"current")},Sn=je;var qe=(n,e,t="click")=>{Ve(()=>{let r=a=>{let l=typeof n=="function"?n():n,u=Sn(l)?l.current:l;u?.contains&&!u.contains(a.target)&&e(a)},o=typeof t=="string"?[t]:t;return o.map(a=>{document.addEventListener(a,r,!1)}),()=>{o.map(a=>{document.removeEventListener(a,r,!1)})}},[n])},q=qe;import{useState as Qe,useEffect as Ze}from"react";var Je=n=>new Promise((e,t)=>{let r=new FileReader;r.readAsDataURL(n),r.addEventListener("load",()=>e(r.result)),r.addEventListener("error",o=>t(o))}),Pn=Je;var Ge=async n=>{if(!$(n))return n;let t=await(await fetch(decodeURIComponent(n))).blob();return await Pn(t)},Ln=Ge;var Ke=n=>{let[e,t]=Qe(n);return Ze(()=>{(async o=>{let a=await Ln(o);t(a)})(n)},[n]),e},Bn=Ke;import{jsx as et}from"react/jsx-runtime";var nt=({src:n,...e})=>{let t=Bn(n);return et("img",{...e,src:t})},Rn=nt;import{Fragment as lt,jsx as d,jsxs as J}from"react/jsx-runtime";var En=({Ricon:n,open:e})=>n===!0?d("i",{className:`huxy-header-angle-${e?"top":"bt"}`}):d(n,{status:e}),ot=({img:n,name:e,icon:t,Ricon:r,open:o})=>n?J("div",{className:"avatar",children:[d("div",{className:"img",children:d(Rn,{src:n,width:"1",height:"1",crossOrigin:"anonymous",alt:"avatar"})}),e?d("span",{className:"txt",children:e}):null,r?d("span",{className:"node-icon",children:d(En,{Ricon:r,open:o})}):null]}):J(lt,{children:[t?d("span",{className:"node-icon",children:t}):null,e?d("span",{className:"txt",children:e}):null,r?d("span",{className:"node-icon",children:d(En,{Ricon:r,open:o})}):null]}),Nn=({item:n,open:e})=>{let{Custom:t,img:r,name:o,icon:a,Ricon:l,active:u}=n;return typeof t=="function"?d(t,{item:n,className:"link"}):d("span",{className:`link${u?" active":""}`,title:n.title||o,children:d(ot,{img:r,name:o,icon:a,Ricon:l,open:e})})},at=({item:n,click:e})=>{let t=rt(),[r,o]=tt(!1);q(()=>t,c=>r&&o(!1));let{arrowDir:a,ChildRender:l,children:u,smShow:i}=n,h=u?.length,s=(c,f,p=null)=>{p===!1&&o(v=>!v),p&&(c.stopPropagation(),o(!1)),e(f,p)},x=i?"sm-show":"";return h||l?J("li",{ref:t,className:`${x} ${r?"open":""}`,onClick:c=>s(c,n,!1),children:[d(Nn,{item:n,open:r}),d("ul",{className:`huxy-header-arrow-${a||"rt"}`,children:h?u.map((c,f)=>d("li",{className:c.divider?"divider":"",children:J("span",{onClick:p=>s(p,c,!0),className:`link${c.active?" active":""}`,children:[c.icon?d("span",{className:"node-icon",children:c.icon}):null,d("span",{className:"drop-label",children:c.name})]})},`subItem-${f}-${c.key||c.name}`)):d("li",{children:d(l,{item:n,close:()=>o(!1)})})})]}):d("li",{onClick:c=>s(c,n),className:x,children:d(Nn,{item:n,open:r})})},it=({list:n,click:e})=>d("ul",{children:n.map((t,r)=>d(at,{click:e,item:t},`navItem-${r}-${t.key||t.name}`))}),an=it;import{jsx as W,jsxs as ln}from"react/jsx-runtime";var ht=n=>{let{leftList:e,rightList:t,handleNavClick:r,logo:o,title:a,Link:l}=n;return ln("div",{className:"header",children:[ln(l,{className:"banner",to:"/",children:[o?W("div",{className:"logo",children:W("img",{width:"1",height:"1",src:o,alt:"logo"})}):null,W("div",{className:"title",children:a??"Dashboard"})]}),W("div",{className:"nav",children:ln("div",{className:"nav-wrap",children:[W("div",{className:"nav-left",children:W(an,{list:e,click:r})}),W("div",{className:"nav-right",children:W(an,{list:t,click:r})})]})})]})},$n=ht;if(typeof document<"u"&&!window.__HUXY__?.has("9b0694")){window.__HUXY__=window.__HUXY__||new Set;let n=document.createElement("style");n.textContent=`.clear::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
@keyframes huxy-header-animate-bottom-in {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0, 25px, 0);
  }
  100% {
    opacity: 0.98;
    visibility: visible;
    transform: translate3d(0, 2px, 0);
  }
}
.huxy-header-angle-top {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
}
.huxy-header-angle-top::before,
.huxy-header-angle-top::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-header-angle-top::before {
  left: 0;
}
.huxy-header-angle-top::after {
  left: calc(1px * 0.7);
}
.huxy-header-angle-top::before,
.huxy-header-angle-top::after {
  top: calc(50% - var(--pos));
}
.huxy-header-angle-top::before {
  transform: rotate(225deg);
}
.huxy-header-angle-top::after {
  transform: rotate(-45deg);
}
.huxy-header-angle-bt {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
}
.huxy-header-angle-bt::before,
.huxy-header-angle-bt::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-header-angle-bt::before {
  left: 0;
}
.huxy-header-angle-bt::after {
  left: calc(1px * 0.7);
}
.huxy-header-angle-bt::before,
.huxy-header-angle-bt::after {
  top: calc(50% + var(--pos));
}
.huxy-header-angle-bt::before {
  transform: rotate(135deg);
}
.huxy-header-angle-bt::after {
  transform: rotate(45deg);
}
.huxy-header-arrow-lt {
  position: relative;
  background: var(--navBgColor);
  border: 1px solid var(--borderColor);
  right: auto;
  left: 0;
  z-index: 10000;
}
.huxy-header-arrow-lt::before,
.huxy-header-arrow-lt::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-header-arrow-lt::before {
  border-width: 8px;
}
.huxy-header-arrow-lt::after {
  border-width: 7px;
}
.huxy-header-arrow-lt::before,
.huxy-header-arrow-lt::after {
  top: auto;
  bottom: 100%;
}
.huxy-header-arrow-lt::before {
  left: 16px;
  border-bottom-color: var(--borderColor);
}
.huxy-header-arrow-lt::after {
  left: calc(16px + 1px);
  border-bottom-color: var(--navBgColor);
}
.huxy-header-arrow-rt {
  position: relative;
  background: var(--navBgColor);
  border: 1px solid var(--borderColor);
  right: 0;
  left: auto;
  z-index: 10000;
}
.huxy-header-arrow-rt::before,
.huxy-header-arrow-rt::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-header-arrow-rt::before {
  border-width: 8px;
}
.huxy-header-arrow-rt::after {
  border-width: 7px;
}
.huxy-header-arrow-rt::before,
.huxy-header-arrow-rt::after {
  left: auto;
  top: auto;
  bottom: 100%;
}
.huxy-header-arrow-rt::before {
  right: 16px;
  border-bottom-color: var(--borderColor);
}
.huxy-header-arrow-rt::after {
  right: calc(16px + 1px);
  border-bottom-color: var(--navBgColor);
}
.header {
  --subMenuItemHeight: 40px;
  max-width: var(--maxWidth);
  height: var(--headerHeight);
  line-height: var(--headerHeight);
  margin: 0 auto;
  position: relative;
}
.header .banner {
  color: var(--bannerLinkColor, var(--appLinkColor));
  position: absolute;
  top: 0;
  left: 0;
  width: var(--menuWidth);
  background: var(--bannerBgColor);
  z-index: 1;
  height: 100%;
  padding-left: 15px;
  padding-right: 10px;
  display: flex;
  transition: width 0.3s;
}
.header .banner:hover {
  color: var(--bannerLinkColor, var(--appLinkColor));
}
.header .banner .logo {
  height: 100%;
  font-size: 0;
}
.header .banner .logo > img {
  height: 55%;
  width: auto;
}
.header .banner .title {
  padding-left: 5px;
  font-size: 1.6rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.header .nav {
  padding-left: var(--menuWidth);
  transition: padding-left 0.3s;
}
.header .nav .nav-wrap {
  padding: 0 10px;
  position: relative;
  display: flex;
  box-shadow: var(--boxShadow);
}
.header .nav .nav-wrap::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
.header .nav .nav-wrap .nav-left > ul,
.header .nav .nav-wrap .nav-right > ul {
  margin: 0;
}
.header .nav .nav-wrap .nav-left > ul::after,
.header .nav .nav-wrap .nav-right > ul::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
.header .nav .nav-wrap .nav-left > ul > li,
.header .nav .nav-wrap .nav-right > ul > li {
  position: relative;
  user-select: none;
}
.header .nav .nav-wrap .nav-left > ul > li > .link,
.header .nav .nav-wrap .nav-right > ul > li > .link {
  height: var(--headerHeight);
  display: block;
  text-align: center;
  cursor: pointer;
  padding: 0 1.2rem;
  position: relative;
  transition: color 0.3s;
}
.header .nav .nav-wrap .nav-left > ul > li > .link::before,
.header .nav .nav-wrap .nav-right > ul > li > .link::before {
  content: '';
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
  height: 20px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.02);
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar {
  font-size: 0;
  height: 100%;
  display: flex;
  align-items: center;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .img,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .img {
  height: 48%;
  max-height: 46px;
  border-radius: 100%;
  background-color: #f0f0f0f0;
  padding: 1px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  position: relative;
  transform-origin: 50% 50%;
  transform: rotate(-42deg);
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .img::after,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .img::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  bottom: -3px;
  left: calc(50% - 2px);
  background-color: #21d86e;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .img img,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .img img {
  height: 100%;
  width: auto;
  border-radius: 100%;
  display: block;
  transform-origin: 50% 50%;
  transform: rotate(42deg);
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .txt,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .txt {
  max-width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .icon,
.header .nav .nav-wrap .nav-right > ul > li > .link .icon {
  font-size: 0;
  height: 100%;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .icon img,
.header .nav .nav-wrap .nav-right > ul > li > .link .icon img {
  height: 25%;
  width: auto;
  max-height: 24px;
  min-height: 16px;
  filter: grayscale(0.1);
}
.header .nav .nav-wrap .nav-left > ul > li > .link .node-icon,
.header .nav .nav-wrap .nav-right > ul > li > .link .node-icon,
.header .nav .nav-wrap .nav-left > ul > li > .link .img,
.header .nav .nav-wrap .nav-right > ul > li > .link .img {
  height: 100%;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .node-icon + .txt,
.header .nav .nav-wrap .nav-right > ul > li > .link .node-icon + .txt,
.header .nav .nav-wrap .nav-left > ul > li > .link .img + .txt,
.header .nav .nav-wrap .nav-right > ul > li > .link .img + .txt {
  margin-left: 1rem;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .node-icon > *,
.header .nav .nav-wrap .nav-right > ul > li > .link .node-icon > *,
.header .nav .nav-wrap .nav-left > ul > li > .link .img > *,
.header .nav .nav-wrap .nav-right > ul > li > .link .img > * {
  font-size: 1.6rem;
  vertical-align: middle;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .txt,
.header .nav .nav-wrap .nav-right > ul > li > .link .txt {
  display: inline-block;
  font-size: 1.3rem;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .txt + .node-icon,
.header .nav .nav-wrap .nav-right > ul > li > .link .txt + .node-icon {
  margin-left: 1rem;
}
.header .nav .nav-wrap .nav-left > ul > li ul,
.header .nav .nav-wrap .nav-right > ul > li ul {
  position: absolute;
  top: 100%;
  right: 0;
  width: max-content;
  min-width: 130px;
  box-shadow: 0 2px 6px var(--borderColor);
  padding: 2px 0;
  border-radius: 2px;
  opacity: 0;
  visibility: hidden;
  display: none;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li,
.header .nav .nav-wrap .nav-right > ul > li ul > li {
  user-select: none;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li.divider,
.header .nav .nav-wrap .nav-right > ul > li ul > li.divider {
  margin-top: 4px;
  padding-top: 4px;
  border-top: 1px solid var(--borderColor);
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link {
  display: flex;
  align-items: center;
  height: var(--subMenuItemHeight);
  line-height: var(--subMenuItemHeight);
  cursor: pointer;
  padding: 0 1.5rem;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link .img,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link .img {
  font-size: 0;
  height: 100%;
  margin-right: 1rem;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link .img img,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link .img img {
  height: 40%;
  width: auto;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link .node-icon,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link .node-icon {
  display: inline-block;
  height: 100%;
  margin-right: 1rem;
  text-align: center;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link .node-icon img,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link .node-icon img {
  height: 34%;
  width: auto;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link > .drop-label,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link > .drop-label {
  display: inline-block;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link:hover,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link:hover {
  background-color: #e6f7ff;
  color: #666;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link.active,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link.active {
  background-color: #e6f7ff;
  color: #666;
}
.header .nav .nav-wrap .nav-left > ul > li.open ul,
.header .nav .nav-wrap .nav-right > ul > li.open ul {
  display: block;
  animation: huxy-header-animate-bottom-in 0.22s forwards;
}
.header .nav .nav-wrap .nav-left {
  float: left;
}
.header .nav .nav-wrap .nav-left > ul {
  float: left;
}
.header .nav .nav-wrap .nav-left > ul > li {
  float: left;
  /*> .link {
              // border-left:1px solid rgba(0, 0, 0, 0.1);
              &::before {
                content: "";
                position: absolute;
                left: 0;
                top: calc(@headerHeight / 2 - 10px);
                height: 20px;
                width: 1px;
                background-color: rgba(0, 0, 0, 0.1);
              }
            }*/
}
.header .nav .nav-wrap .nav-right {
  flex: 1;
  float: right;
}
.header .nav .nav-wrap .nav-right > ul {
  float: right;
}
.header .nav .nav-wrap .nav-right > ul > li {
  float: right;
}
.collapsed .frame-header .header .banner {
  width: var(--collapseWidth);
  padding: 0;
  justify-content: center;
  transition: width 0.3s;
}
.collapsed .frame-header .header .banner .title {
  display: none;
}
.collapsed .frame-header .header .nav {
  padding-left: var(--collapseWidth);
  transition: padding-left 0.3s;
}
@media screen and (max-width: 1024px) {
  .header .banner {
    display: none;
  }
  .header .nav {
    padding-left: 0 !important;
  }
  .header .nav .nav-wrap .nav-right > ul > li .link .avatar .txt {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .header .nav {
    padding-left: 0 !important;
  }
  .header .nav .nav-wrap .nav-left > ul > li:not(.sm-show) {
    display: none;
  }
  .header .nav .nav-wrap .nav-right > ul > li:not(.sm-show) {
    display: none;
  }
  .header .nav .nav-wrap .nav-right > ul > li .link .avatar .txt {
    display: none;
  }
}
`,document.head.appendChild(n),window.__HUXY__.add("9b0694")}import{jsx as hn,jsxs as st}from"react/jsx-runtime";var ut=({language:n,...e})=>ct(()=>hn($n,{...e}),[n]),dt=n=>{let{navMenu:e,headerStyle:t,navMenuStyle:r,Link:o,leftList:a,rightList:l,handleNavClick:u,logo:i,title:h,language:s}=n;return st("header",{className:"frame-header",style:t,children:[a?.length||l?.length?hn(ut,{Link:o,leftList:a,rightList:l,handleNavClick:(x,c)=>u(n,x,c),logo:i,title:h,language:s}):null,e?.length?hn(V,{data:e,type:"horizontal",Link:o,style:r}):null]})},An=dt;if(typeof document<"u"&&!window.__HUXY__?.has("f16dd5")){window.__HUXY__=window.__HUXY__||new Set;let n=document.createElement("style");n.textContent=`.footer {
  height: var(--footerHeight);
  line-height: var(--footerHeight);
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  max-width: var(--maxWidth);
}
`,document.head.appendChild(n),window.__HUXY__.add("f16dd5")}import{jsx as Mn}from"react/jsx-runtime";var pt=({Footer:n})=>Mn("div",{className:"footer",children:n?Mn(n,{}):"copyright \xA9 2020-2022"}),On=pt;import{useRef as ft,useEffect as xt}from"react";import{jsx as G,jsxs as yt}from"react/jsx-runtime";var gt=n=>{let{menu:e,MenuTop:t,MenuBottom:r,Link:o,inputPath:a,asideStyle:l}=n,[u,i]=A("huxy-collapse"),{width:h}=j(),s=ft();return q(()=>s,x=>{h<=1024&&u&&i(!1)}),xt(()=>{h<=1024&&u&&i(!1)},[a]),G("aside",{className:"frame-aside",style:l,children:yt("div",{ref:s,style:{height:"100%"},children:[t&&G(t,{...n}),G(V,{data:e,collapsed:u&&h>1024,Link:o}),r&&G(r,{collapsed:u,isSmall:h<=1024,setCollapsed:i})]})})},Un=gt;import{useEffect as mt,useRef as Tn,useState as vt}from"react";import{jsx as Ct}from"react/jsx-runtime";var kt=380,bt=({inputPath:n,menuAnimate:e="ani-in"})=>{let t=Tn(n.split("?")[0]),r=Tn(),[o,a]=vt("");return mt(()=>{let l=n.split("?")[0];return l!==t.current&&(t.current=l,a(` ${e}`),r.current=setTimeout(()=>{a("")},kt)),()=>{clearTimeout(r.current),a("")}},[n]),o},wt=n=>{let{inputPath:e,contentStyle:t,menuAnimate:r,children:o}=n,a=bt({inputPath:e,menuAnimate:r});return Ct("div",{className:`page-content${a}`,style:t,children:o})},Yn=wt;if(typeof document<"u"&&!window.__HUXY__?.has("8c4c16")){window.__HUXY__=window.__HUXY__||new Set;let n=document.createElement("style");n.textContent=`@keyframes ani-fade-in {
  0% {
    opacity: 0;
    display: none;
  }
  1% {
    opacity: 0;
    display: block;
  }
  100% {
    opacity: 1;
    display: block;
  }
}
@keyframes ani-fade-out {
  0% {
    opacity: 1;
    display: block;
  }
  99% {
    opacity: 0;
    display: block;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
@keyframes ani-scale-in {
  0% {
    transform: scale(0);
    display: none;
  }
  1% {
    transform: scale(0);
    display: block;
  }
  100% {
    transform: scale(1);
    display: block;
  }
}
@keyframes ani-scale-out {
  0% {
    transform: scale(1);
    display: block;
  }
  99% {
    transform: scale(0);
    display: block;
  }
  100% {
    transform: scale(0);
    display: none;
  }
}
@keyframes ani-left-in {
  0% {
    opacity: 0;
    transform: translate3d(-72px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes ani-left-out {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(72px, 0, 0);
  }
}
@keyframes ani-top-in {
  0% {
    opacity: 0.4;
    transform: translate(0, -72px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.page-container {
  --pageHeight: calc(var(--containerHeight) - var(--footerHeight) - var(--topHeight));
  min-height: var(--pageHeight);
  position: relative;
  background: var(--pageBgColor);
}
.page-container .page-content {
  --contentHeight: calc(var(--pageHeight) - var(--breadHeight) - var(--frame-spacing) * 2);
  padding: var(--frame-spacing);
}
.page-container .page-content.ani-in {
  overflow: hidden;
  animation: ani-left-in 0.4s forwards;
}
.page-container .page-content.ani-out {
  overflow: hidden;
  animation: ani-left-out 0.4s forwards;
}
`,document.head.appendChild(n),window.__HUXY__.add("8c4c16")}import{jsx as S,jsxs as Fn}from"react/jsx-runtime";var zt=n=>{let{menu:e,current:t,MainTop:r,children:o,inputPath:a,contentStyle:l,menuAnimate:u}=n,i=e?.length,h=u?u===!0?"ani-in":u:"";return Fn("div",{className:`frame-container${i?"":" no-sidebar"}`,children:[i?S(Un,{...n}):null,S("div",{className:"frame-view",children:Fn("div",{className:"page-container",children:[r&&S(r,{current:t}),h?S(Yn,{inputPath:a,contentStyle:l,menuAnimate:h,children:o}):S("div",{className:"page-content",style:l,children:o})]})}),S("footer",{className:"frame-footer",children:S(On,{...n})})]})},Xn=zt;if(typeof document<"u"&&!window.__HUXY__?.has("a8e05b")){window.__HUXY__=window.__HUXY__||new Set;let n=document.createElement("style");n.textContent=`.frame {
  --frame-spacing: 1rem;
  --frame-radius: 4px;
  --boxShadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
  transform: none;
  --topHeight: var(--headerHeight);
  --blur: 0.3rem;
  --opacity: 0.75;
  background: var(--appBgColor);
  color: var(--appColor);
}
.frame.no-header {
  --headerHeight: 0px;
}
.frame .frame-header {
  --linkColor: var(--headerLinkColor, var(--appLinkColor));
  --linkActiveColor: var(--headerLinkActiveColor, var(--appLinkActiveColor));
  --linkHoverColor: var(--headerLinkHoverColor, var(--appLinkHoverColor));
  backdrop-filter: blur(var(--blur));
  background: var(--navBgColor);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.frame .frame-main {
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding-top: var(--topHeight);
  z-index: 5;
}
.frame .frame-main .frame-container {
  position: relative;
}
.frame .frame-main .frame-container .frame-aside {
  --linkColor: var(--asideLinkColor, var(--appLinkColor));
  --linkActiveColor: var(--asideLinkActiveColor, var(--appLinkActiveColor));
  --linkHoverColor: var(--asideLinkHoverColor, var(--appLinkHoverColor));
  position: fixed;
  width: var(--menuWidth);
  top: var(--topHeight);
  bottom: 0;
  z-index: 6;
  background: var(--menuBgColor);
  transform: translate3d(0, 0, 0);
  transition: width 0.3s;
}
.frame .frame-main .frame-container .frame-view {
  padding-left: calc(var(--menuWidth));
  transition: padding-left 0.3s;
}
.frame .frame-main .frame-container .frame-footer {
  padding-left: calc(var(--menuWidth));
  transition: padding-left 0.3s;
  background: var(--panelBgColor);
}
.frame .frame-main .frame-container.no-sidebar .frame-view {
  padding-left: 0;
}
.frame .frame-main .frame-container.no-sidebar .frame-footer {
  padding-left: 0;
  margin-left: calc(var(--maxWidth) / 2 - 50vw);
  margin-right: calc(var(--maxWidth) / 2 - 50vw);
}
.frame.collapsed .frame-main .frame-container .frame-aside,
.frame.composeCollapsed .frame-main .frame-container .frame-aside {
  width: var(--collapseWidth);
  transition: width 0.3s;
}
.frame.collapsed .frame-main .frame-container .frame-view,
.frame.composeCollapsed .frame-main .frame-container .frame-view {
  padding-left: var(--collapseWidth);
  transition: padding-left 0.3s;
}
.frame.collapsed .frame-main .frame-container .frame-footer,
.frame.composeCollapsed .frame-main .frame-container .frame-footer {
  padding-left: calc(var(--collapseWidth));
  transition: padding-left 0.3s;
}
.frame.horizontal,
.frame.compose {
  --topHeight: calc(var(--headerHeight) + var(--menuItemHeight));
}
.frame.horizontal .frame-header .header .banner,
.frame.compose .frame-header .header .banner {
  background: transparent;
  color: var(--linkColor);
}
.frame.horizontal .frame-header .header .banner:hover,
.frame.compose .frame-header .header .banner:hover {
  color: var(--linkColor);
}
.frame.detached {
  --frame-spacing: 0.8rem;
  --frame-radius: 4px;
}
@media screen and (max-width: 1024px) {
  .frame .frame-main .frame-container .frame-aside {
    width: 0;
  }
  .frame .frame-main .frame-container .frame-view {
    padding-left: 0;
  }
  .frame .frame-main .frame-container .frame-footer {
    padding-left: 0;
  }
  .frame.collapsed .frame-main .frame-container .frame-aside {
    width: var(--menuWidth);
    backdrop-filter: blur(var(--blur));
    background: var(--menuBgColor);
  }
  .frame.collapsed .frame-main .frame-container .frame-view {
    padding-left: 0;
  }
  .frame.collapsed .frame-main .frame-container .frame-footer {
    padding-left: 0;
  }
}
/*@media screen and (max-width: env(--viewport-1)) {
  .frame {
    .frame-main {
      .frame-container {
        .frame-aside {
          // left: 0;
        }
      }
    }
  }
}*/
`,document.head.appendChild(n),window.__HUXY__.add("a8e05b")}import{jsx as cn,jsxs as Wt}from"react/jsx-runtime";var Ht=n=>{let{vertical:e,horizontal:t,menu:r,leftList:o,rightList:a}=n,{width:l}=j(),[u]=A("huxy-collapse"),i=l<=1024,h=i?r:e,s=i?[]:t,x=h?.length,c=s?.length,f=c&&x,p=f?"compose":c?"horizontal":u?"collapsed":"",v=f&&u?"composeCollapsed":"",k=o?.length||a?.length?"":"no-header",y=["frame",p,v,k].filter(Boolean).join(" ");return Wt("div",{className:y,children:[cn(An,{...n,navMenu:s}),cn("main",{className:"frame-main",children:cn(Xn,{...n,menu:h})})]})},_t=Ht;export{_t as default};
