import{g as D,r as c,j as o}from"./ssg-client-2b666cc8.js";var y={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function r(){for(var n=[],s=0;s<arguments.length;s++){var a=arguments[s];if(a){var d=typeof a;if(d==="string"||d==="number")n.push(a);else if(Array.isArray(a)){if(a.length){var u=r.apply(null,a);u&&n.push(u)}}else if(d==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){n.push(a.toString());continue}for(var f in a)e.call(a,f)&&a[f]&&n.push(f)}}}return n.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r})()})(y);var A=y.exports;const l=D(A),E=["xxl","xl","lg","md","sm","xs"],F="xs",_=c.createContext({prefixes:{},breakpoints:E,minBreakpoint:F});function i(t,e){const{prefixes:r}=c.useContext(_);return t||r[e]||e}const v=t=>c.forwardRef((e,r)=>o.jsx("div",{...e,ref:r,className:l(e.className,t)})),L=["as","disabled"];function K(t,e){if(t==null)return{};var r={},n=Object.keys(t),s,a;for(a=0;a<n.length;a++)s=n[a],!(e.indexOf(s)>=0)&&(r[s]=t[s]);return r}function M(t){return!t||t.trim()==="#"}function N({tagName:t,disabled:e,href:r,target:n,rel:s,role:a,onClick:d,tabIndex:u=0,type:f}){t||(r!=null||n!=null||s!=null?t="a":t="button");const p={tagName:t};if(t==="button")return[{type:f||"button",disabled:e},p];const x=m=>{if((e||t==="a"&&M(r))&&m.preventDefault(),e){m.stopPropagation();return}d==null||d(m)},j=m=>{m.key===" "&&(m.preventDefault(),x(m))};return t==="a"&&(r||(r="#"),e&&(r=void 0)),[{role:a??"button",disabled:void 0,tabIndex:e?void 0:u,href:r,target:t==="a"?n:void 0,"aria-disabled":e||void 0,rel:t==="a"?s:void 0,onClick:x,onKeyDown:j},p]}const U=c.forwardRef((t,e)=>{let{as:r,disabled:n}=t,s=K(t,L);const[a,{tagName:d}]=N(Object.assign({tagName:r,disabled:n},s));return o.jsx(d,Object.assign({},s,a,{ref:e}))});U.displayName="Button";const h=c.forwardRef(({as:t,bsPrefix:e,variant:r="primary",size:n,active:s=!1,disabled:a=!1,className:d,...u},f)=>{const p=i(e,"btn"),[x,{tagName:j}]=N({tagName:t,disabled:a,...u}),m=j;return o.jsx(m,{...x,...u,ref:f,disabled:a,className:l(d,p,s&&"active",r&&`${p}-${r}`,n&&`${p}-${n}`,u.href&&a&&"disabled")})});h.displayName="Button";const W=h,$=c.forwardRef(({className:t,bsPrefix:e,as:r="div",...n},s)=>(e=i(e,"card-body"),o.jsx(r,{ref:s,className:l(t,e),...n})));$.displayName="CardBody";const w=$,B=c.forwardRef(({className:t,bsPrefix:e,as:r="div",...n},s)=>(e=i(e,"card-footer"),o.jsx(r,{ref:s,className:l(t,e),...n})));B.displayName="CardFooter";const V=B,g=c.createContext(null);g.displayName="CardHeaderContext";const q=g,O=c.forwardRef(({bsPrefix:t,className:e,as:r="div",...n},s)=>{const a=i(t,"card-header"),d=c.useMemo(()=>({cardHeaderBsPrefix:a}),[a]);return o.jsx(q.Provider,{value:d,children:o.jsx(r,{ref:s,...n,className:l(e,a)})})});O.displayName="CardHeader";const z=O,R=c.forwardRef(({bsPrefix:t,className:e,variant:r,as:n="img",...s},a)=>{const d=i(t,"card-img");return o.jsx(n,{ref:a,className:l(r?`${d}-${r}`:d,e),...s})});R.displayName="CardImg";const G=R,S=c.forwardRef(({className:t,bsPrefix:e,as:r="div",...n},s)=>(e=i(e,"card-img-overlay"),o.jsx(r,{ref:s,className:l(t,e),...n})));S.displayName="CardImgOverlay";const J=S,T=c.forwardRef(({className:t,bsPrefix:e,as:r="a",...n},s)=>(e=i(e,"card-link"),o.jsx(r,{ref:s,className:l(t,e),...n})));T.displayName="CardLink";const Q=T,X=v("h6"),H=c.forwardRef(({className:t,bsPrefix:e,as:r=X,...n},s)=>(e=i(e,"card-subtitle"),o.jsx(r,{ref:s,className:l(t,e),...n})));H.displayName="CardSubtitle";const Y=H,k=c.forwardRef(({className:t,bsPrefix:e,as:r="p",...n},s)=>(e=i(e,"card-text"),o.jsx(r,{ref:s,className:l(t,e),...n})));k.displayName="CardText";const Z=k,P=v("h5"),I=c.forwardRef(({className:t,bsPrefix:e,as:r=P,...n},s)=>(e=i(e,"card-title"),o.jsx(r,{ref:s,className:l(t,e),...n})));I.displayName="CardTitle";const ee=I,b=c.forwardRef(({bsPrefix:t,className:e,bg:r,text:n,border:s,body:a=!1,children:d,as:u="div",...f},p)=>{const x=i(t,"card");return o.jsx(u,{ref:p,...f,className:l(e,x,r&&`bg-${r}`,n&&`text-${n}`,s&&`border-${s}`),children:a?o.jsx(w,{children:d}):d})});b.displayName="Card";const C=Object.assign(b,{Img:G,Title:ee,Subtitle:Y,Body:w,Link:Q,Text:Z,Header:z,Footer:V,ImgOverlay:J});function te(){const[t,e]=c.useState(0);return o.jsx(o.Fragment,{children:o.jsxs("html",{children:[o.jsx("head",{children:o.jsx("title",{children:"Hello"})}),o.jsx("body",{children:o.jsxs("div",{children:[o.jsxs(C,{children:[o.jsx(C.Header,{children:"Hello"}),o.jsxs(C.Body,{children:[o.jsx(C.Title,{children:"Button Counter"}),o.jsxs(C.Text,{children:["Count:$",t]})]})]}),o.jsx(W,{variant:"dark",onClick:()=>{e(t+1)},children:"Click"})]})})]})})}const re=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"})),ne={};ne.main=re;export{ne as default};