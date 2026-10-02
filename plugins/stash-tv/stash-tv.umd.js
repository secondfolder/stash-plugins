(function(vt,Jt){typeof exports=="object"&&typeof module<"u"?Jt(exports):typeof define=="function"&&define.amd?define(["exports"],Jt):(vt=typeof globalThis<"u"?globalThis:vt||self,Jt(vt["Stash TV"]={}))})(this,(function(vt){"use strict";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Jt(e,t,n){return(t=Ll(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qa(Object(n),!0).forEach(function(r){Jt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ml(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ll(e){var t=Ml(e,"string");return typeof t=="symbol"?t:t+""}const Ua=()=>{};let _r={},Va={},Ba=null,Ga={mark:Ua,measure:Ua};try{typeof window<"u"&&(_r=window),typeof document<"u"&&(Va=document),typeof MutationObserver<"u"&&(Ba=MutationObserver),typeof performance<"u"&&(Ga=performance)}catch{}const{userAgent:za=""}=_r.navigator||{},je=_r,re=Va,Qa=Ba,xn=Ga;je.document;const Ae=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",Wa=~za.indexOf("MSIE")||~za.indexOf("Trident/");var jl=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ql=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ha={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Ul={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ya=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],he="classic",Cn="duotone",Vl="sharp",Bl="sharp-duotone",Ja=[he,Cn,Vl,Bl],Gl={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},zl={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Ql=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Wl={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Hl=["fak","fa-kit","fakd","fa-kit-duotone"],Xa={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Yl=["kit"],Jl={kit:{"fa-kit":"fak"}},Xl=["fak","fakd"],Kl={kit:{fak:"fa-kit"}},Ka={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Fn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zl=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ef=["fak","fa-kit","fakd","fa-kit-duotone"],tf={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},nf={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},rf={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Er={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},af=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Dr=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Zl,...af],of=["solid","regular","light","thin","duotone","brands"],Za=[1,2,3,4,5,6,7,8,9,10],sf=Za.concat([11,12,13,14,15,16,17,18,19,20]),uf=[...Object.keys(rf),...of,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fn.GROUP,Fn.SWAP_OPACITY,Fn.PRIMARY,Fn.SECONDARY].concat(Za.map(e=>"".concat(e,"x"))).concat(sf.map(e=>"w-".concat(e))),cf={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const $e="___FONT_AWESOME___",wr=16,eo="fa",to="svg-inline--fa",ot="data-fa-i2svg",Tr="data-fa-pseudo-element",lf="data-fa-pseudo-element-pending",Ir="data-prefix",Or="data-icon",no="fontawesome-i2svg",ff="async",df=["HTML","HEAD","STYLE","SCRIPT"],ro=(()=>{try{return!0}catch{return!1}})();function Xt(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[he]}})}const io=k({},Ha);io[he]=k(k(k(k({},{"fa-duotone":"duotone"}),Ha[he]),Xa.kit),Xa["kit-duotone"]);const pf=Xt(io),kr=k({},Wl);kr[he]=k(k(k(k({},{duotone:"fad"}),kr[he]),Ka.kit),Ka["kit-duotone"]);const ao=Xt(kr),xr=k({},Er);xr[he]=k(k({},xr[he]),Kl.kit);const Cr=Xt(xr),Fr=k({},nf);Fr[he]=k(k({},Fr[he]),Jl.kit),Xt(Fr);const hf=jl,oo="fa-layers-text",mf=ql,gf=k({},Gl);Xt(gf);const yf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ar=Ul,vf=[...Yl,...uf],Kt=je.FontAwesomeConfig||{};function bf(e){var t=re.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Sf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}re&&typeof re.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=Sf(bf(n));i!=null&&(Kt[r]=i)});const so={styleDefault:"solid",familyDefault:he,cssPrefix:eo,replacementClass:to,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Kt.familyPrefix&&(Kt.cssPrefix=Kt.familyPrefix);const bt=k(k({},so),Kt);bt.autoReplaceSvg||(bt.observeMutations=!1);const P={};Object.keys(so).forEach(e=>{Object.defineProperty(P,e,{enumerable:!0,set:function(t){bt[e]=t,Zt.forEach(n=>n(P))},get:function(){return bt[e]}})}),Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(e){bt.cssPrefix=e,Zt.forEach(t=>t(P))},get:function(){return bt.cssPrefix}}),je.FontAwesomeConfig=P;const Zt=[];function _f(e){return Zt.push(e),()=>{Zt.splice(Zt.indexOf(e),1)}}const qe=wr,Oe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ef(e){if(!e||!Ae)return;const t=re.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=re.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return re.head.insertBefore(t,r),e}const Df="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function en(){let e=12,t="";for(;e-- >0;)t+=Df[Math.random()*62|0];return t}function St(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function $r(e){return e.classList?St(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function uo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wf(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(uo(e[n]),'" '),"").trim()}function An(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Pr(e){return e.size!==Oe.size||e.x!==Oe.x||e.y!==Oe.y||e.rotate!==Oe.rotate||e.flipX||e.flipY}function Tf(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function If(e){let{transform:t,width:n=wr,height:r=wr,startCentered:i=!1}=e,a="";return i&&Wa?a+="translate(".concat(t.x/qe-n/2,"em, ").concat(t.y/qe-r/2,"em) "):i?a+="translate(calc(-50% + ".concat(t.x/qe,"em), calc(-50% + ").concat(t.y/qe,"em)) "):a+="translate(".concat(t.x/qe,"em, ").concat(t.y/qe,"em) "),a+="scale(".concat(t.size/qe*(t.flipX?-1:1),", ").concat(t.size/qe*(t.flipY?-1:1),") "),a+="rotate(".concat(t.rotate,"deg) "),a}var Of=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function co(){const e=eo,t=to,n=P.cssPrefix,r=P.replacementClass;let i=Of;if(n!==e||r!==t){const a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}let lo=!1;function Nr(){P.autoAddCss&&!lo&&(Ef(co()),lo=!0)}var kf={mixout(){return{dom:{css:co,insertCss:Nr}}},hooks(){return{beforeDOMElementCreation(){Nr()},beforeI2svg(){Nr()}}}};const Pe=je||{};Pe[$e]||(Pe[$e]={}),Pe[$e].styles||(Pe[$e].styles={}),Pe[$e].hooks||(Pe[$e].hooks={}),Pe[$e].shims||(Pe[$e].shims=[]);var ke=Pe[$e];const fo=[],po=function(){re.removeEventListener("DOMContentLoaded",po),$n=1,fo.map(e=>e())};let $n=!1;Ae&&($n=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),$n||re.addEventListener("DOMContentLoaded",po));function xf(e){Ae&&($n?setTimeout(e,0):fo.push(e))}function tn(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?uo(e):"<".concat(t," ").concat(wf(n),">").concat(r.map(tn).join(""),"</").concat(t,">")}function ho(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Rr=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=n,u,c,l;for(r===void 0?(u=1,l=t[a[0]]):(u=0,l=r);u<o;u++)c=a[u],l=s(l,t[c],c,t);return l};function Cf(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Mr(e){const t=Cf(e);return t.length===1?t[0].toString(16):null}function Ff(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function mo(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Lr(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=mo(t);typeof ke.hooks.addPack=="function"&&!r?ke.hooks.addPack(e,mo(t)):ke.styles[e]=k(k({},ke.styles[e]||{}),i),e==="fas"&&Lr("fa",t)}const{styles:nn,shims:Af}=ke,go=Object.keys(Cr),$f=go.reduce((e,t)=>(e[t]=Object.keys(Cr[t]),e),{});let jr=null,yo={},vo={},bo={},So={},_o={};function Pf(e){return~vf.indexOf(e)}function Nf(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Pf(i)?i:null}const Eo=()=>{const e=r=>Rr(nn,(i,a,o)=>(i[o]=Rr(a,r,{}),i),{});yo=e((r,i,a)=>(i[3]&&(r[i[3]]=a),i[2]&&i[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=a}),r)),vo=e((r,i,a)=>(r[a]=a,i[2]&&i[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=a}),r)),_o=e((r,i,a)=>{const o=i[2];return r[a]=a,o.forEach(s=>{r[s]=a}),r});const t="far"in nn||P.autoFetchSvg,n=Rr(Af,(r,i)=>{const a=i[0];let o=i[1];const s=i[2];return o==="far"&&!t&&(o="fas"),typeof a=="string"&&(r.names[a]={prefix:o,iconName:s}),typeof a=="number"&&(r.unicodes[a.toString(16)]={prefix:o,iconName:s}),r},{names:{},unicodes:{}});bo=n.names,So=n.unicodes,jr=Pn(P.styleDefault,{family:P.familyDefault})};_f(e=>{jr=Pn(e.styleDefault,{family:P.familyDefault})}),Eo();function qr(e,t){return(yo[e]||{})[t]}function Rf(e,t){return(vo[e]||{})[t]}function st(e,t){return(_o[e]||{})[t]}function Do(e){return bo[e]||{prefix:null,iconName:null}}function Mf(e){const t=So[e],n=qr("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ue(){return jr}const wo=()=>({prefix:null,iconName:null,rest:[]});function Lf(e){let t=he;const n=go.reduce((r,i)=>(r[i]="".concat(P.cssPrefix,"-").concat(i),r),{});return Ja.forEach(r=>{(e.includes(n[r])||e.some(i=>$f[r].includes(i)))&&(t=r)}),t}function Pn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=he}=t,r=pf[n][e];if(n===Cn&&!e)return"fad";const i=ao[n][e]||ao[n][r],a=e in ke.styles?e:null;return i||a||null}function jf(e){let t=[],n=null;return e.forEach(r=>{const i=Nf(P.cssPrefix,r);i?n=i:r&&t.push(r)}),{iconName:n,rest:t}}function To(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function Nn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const i=Dr.concat(ef),a=To(e.filter(d=>i.includes(d))),o=To(e.filter(d=>!Dr.includes(d))),s=a.filter(d=>(r=d,!Ya.includes(d))),[u=null]=s,c=Lf(a),l=k(k({},jf(o)),{},{prefix:Pn(u,{family:c})});return k(k(k({},l),Bf({values:e,family:c,styles:nn,config:P,canonical:l,givenPrefix:r})),qf(n,r,l))}function qf(e,t,n){let{prefix:r,iconName:i}=n;if(e||!r||!i)return{prefix:r,iconName:i};const a=t==="fa"?Do(i):{},o=st(r,i);return i=a.iconName||o||i,r=a.prefix||r,r==="far"&&!nn.far&&nn.fas&&!P.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}const Uf=Ja.filter(e=>e!==he||e!==Cn),Vf=Object.keys(Er).filter(e=>e!==he).map(e=>Object.keys(Er[e])).flat();function Bf(e){const{values:t,family:n,canonical:r,givenPrefix:i="",styles:a={},config:o={}}=e,s=n===Cn,u=t.includes("fa-duotone")||t.includes("fad"),c=o.familyDefault==="duotone",l=r.prefix==="fad"||r.prefix==="fa-duotone";if(!s&&(u||c||l)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Uf.includes(n)&&(Object.keys(a).find(f=>Vf.includes(f))||o.autoFetchSvg)){const f=Ql.get(n).defaultShortPrefixId;r.prefix=f,r.iconName=st(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||i==="fa")&&(r.prefix=Ue()||"fas"),r}class Gf{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(a=>{this.definitions[a]=k(k({},this.definitions[a]||{}),i[a]),Lr(a,i[a]);const o=Cr[he][a];o&&Lr(o,i[a]),Eo()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:a,iconName:o,icon:s}=r[i],u=s[2];t[a]||(t[a]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(t[a][c]=s)}),t[a][o]=s}),t}}let Io=[],_t={};const Et={},zf=Object.keys(Et);function Qf(e,t){let{mixoutsTo:n}=t;return Io=e,_t={},Object.keys(Et).forEach(r=>{zf.indexOf(r)===-1&&delete Et[r]}),Io.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(a=>{typeof i[a]=="function"&&(n[a]=i[a]),typeof i[a]=="object"&&Object.keys(i[a]).forEach(o=>{n[a]||(n[a]={}),n[a][o]=i[a][o]})}),r.hooks){const a=r.hooks();Object.keys(a).forEach(o=>{_t[o]||(_t[o]=[]),_t[o].push(a[o])})}r.provides&&r.provides(Et)}),n}function Ur(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(_t[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function ut(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(_t[e]||[]).forEach(a=>{a.apply(null,n)})}function Ve(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Et[e]?Et[e].apply(null,t):void 0}function Vr(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Ue();if(t)return t=st(n,t)||t,ho(Oo.definitions,n,t)||ho(ke.styles,n,t)}const Oo=new Gf,Se={noAuto:()=>{P.autoReplaceSvg=!1,P.observeMutations=!1,ut("noAuto")},config:P,dom:{i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ae?(ut("beforeI2svg",e),Ve("pseudoElements2svg",e),Ve("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,xf(()=>{Wf({autoReplaceSvgRoot:t}),ut("watch",e)})}},parse:{icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:st(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Pn(e[0]);return{prefix:n,iconName:st(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(P.cssPrefix,"-"))>-1||e.match(hf))){const t=Nn(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Ue(),iconName:st(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Ue();return{prefix:t,iconName:st(t,e)||e}}}},library:Oo,findIconDefinition:Vr,toHtml:tn},Wf=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=re}=e;(Object.keys(ke.styles).length>0||P.autoFetchSvg)&&Ae&&P.autoReplaceSvg&&Se.dom.i2svg({node:t})};function Rn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>tn(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Ae)return;const n=re.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Hf(e){let{children:t,main:n,mask:r,attributes:i,styles:a,transform:o}=e;if(Pr(o)&&n.found&&!r.found){const{width:s,height:u}=n,c={x:s/u/2,y:.5};i.style=An(k(k({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Yf(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:a}=e;const o=a===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},i),{},{id:o}),children:r}]}]}function Br(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:a,symbol:o,title:s,maskId:u,titleId:c,extra:l,watchable:d=!1}=e,{width:f,height:p}=n.found?n:t,y=Xl.includes(r),m=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(I=>l.classes.indexOf(I)===-1).filter(I=>I!==""||!!I).concat(l.classes).join(" ");let v={children:[],attributes:k(k({},l.attributes),{},{"data-prefix":r,"data-icon":i,class:m,role:l.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(p)})};const g=y&&!~l.classes.indexOf("fa-fw")?{width:"".concat(f/p*16*.0625,"em")}:{};d&&(v.attributes[ot]=""),s&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||en())},children:[s]}),delete v.attributes.title);const b=k(k({},v),{},{prefix:r,iconName:i,main:t,mask:n,maskId:u,transform:a,symbol:o,styles:k(k({},g),l.styles)}),{children:E,attributes:D}=n.found&&t.found?Ve("generateAbstractMask",b)||{children:[],attributes:{}}:Ve("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=E,b.attributes=D,o?Yf(b):Hf(b)}function ko(e){const{content:t,width:n,height:r,transform:i,title:a,extra:o,watchable:s=!1}=e,u=k(k(k({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(u[ot]="");const c=k({},o.styles);Pr(i)&&(c.transform=If({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const l=An(c);l.length>0&&(u.style=l);const d=[];return d.push({tag:"span",attributes:u,children:[t]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function Jf(e){const{content:t,title:n,extra:r}=e,i=k(k(k({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=An(r.styles);a.length>0&&(i.style=a);const o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Gr}=ke;function zr(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(Ar.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(Ar.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(Ar.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const Xf={found:!1,width:512,height:512};function Kf(e,t){!ro&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Qr(e,t){let n=t;return t==="fa"&&P.styleDefault!==null&&(t=Ue()),new Promise((r,i)=>{if(n==="fa"){const a=Do(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Gr[t]&&Gr[t][e]){const a=Gr[t][e];return r(zr(a))}Kf(e,t),r(k(k({},Xf),{},{icon:P.showMissingIcons&&e?Ve("missingIconAbstract")||{}:{}}))})}const xo=()=>{},Wr=P.measurePerformance&&xn&&xn.mark&&xn.measure?xn:{mark:xo,measure:xo},rn='FA "6.7.2"',Zf=e=>(Wr.mark("".concat(rn," ").concat(e," begins")),()=>Co(e)),Co=e=>{Wr.mark("".concat(rn," ").concat(e," ends")),Wr.measure("".concat(rn," ").concat(e),"".concat(rn," ").concat(e," begins"),"".concat(rn," ").concat(e," ends"))};var Hr={begin:Zf,end:Co};const Mn=()=>{};function Fo(e){return typeof(e.getAttribute?e.getAttribute(ot):null)=="string"}function ed(e){const t=e.getAttribute?e.getAttribute(Ir):null,n=e.getAttribute?e.getAttribute(Or):null;return t&&n}function td(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function nd(){return P.autoReplaceSvg===!0?Ln.replace:Ln[P.autoReplaceSvg]||Ln.replace}function rd(e){return re.createElementNS("http://www.w3.org/2000/svg",e)}function id(e){return re.createElement(e)}function Ao(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?rd:id}=t;if(typeof e=="string")return re.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(a){r.setAttribute(a,e.attributes[a])}),(e.children||[]).forEach(function(a){r.appendChild(Ao(a,{ceFn:n}))}),r}function ad(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Ln={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Ao(n),t)}),t.getAttribute(ot)===null&&P.keepOriginalSource){let n=re.createComment(ad(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~$r(t).indexOf(P.replacementClass))return Ln.replace(e);const r=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const a=n[0].attributes.class.split(" ").reduce((o,s)=>(s===P.replacementClass||s.match(r)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",a.toNode.join(" "))}const i=n.map(a=>tn(a)).join(`
`);t.setAttribute(ot,""),t.innerHTML=i}};function $o(e){e()}function Po(e,t){const n=typeof t=="function"?t:Mn;if(e.length===0)n();else{let r=$o;P.mutateApproach===ff&&(r=je.requestAnimationFrame||$o),r(()=>{const i=nd(),a=Hr.begin("mutate");e.map(i),a(),n()})}}let Yr=!1;function No(){Yr=!0}function Jr(){Yr=!1}let jn=null;function Ro(e){if(!Qa||!P.observeMutations)return;const{treeCallback:t=Mn,nodeCallback:n=Mn,pseudoElementsCallback:r=Mn,observeMutationsRoot:i=re}=e;jn=new Qa(a=>{if(Yr)return;const o=Ue();St(a).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Fo(s.addedNodes[0])&&(P.searchPseudoElements&&r(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&P.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&Fo(s.target)&&~yf.indexOf(s.attributeName))if(s.attributeName==="class"&&ed(s.target)){const{prefix:u,iconName:c}=Nn($r(s.target));s.target.setAttribute(Ir,u||o),c&&s.target.setAttribute(Or,c)}else td(s.target)&&n(s.target)})}),Ae&&jn.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function od(){jn&&jn.disconnect()}function sd(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ud(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=Nn($r(e));return i.prefix||(i.prefix=Ue()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Rf(i.prefix,e.innerText)||qr(i.prefix,Mr(e.innerText))),!i.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function cd(e){const t=St(e.attributes).reduce((i,a)=>(i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||en()):(t["aria-hidden"]="true",t.focusable="false")),t}function ld(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Oe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=ud(e),a=cd(e),o=Ur("parseNodeAttributes",{},e);let s=t.styleParser?sd(e):[];return k({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Oe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:a}},o)}const{styles:fd}=ke;function Lo(e){const t=P.autoReplaceSvg==="nest"?Mo(e,{styleParser:!1}):Mo(e);return~t.extra.classes.indexOf(oo)?Ve("generateLayersText",e,t):Ve("generateSvgReplacementMutation",e,t)}function dd(){return[...Hl,...Dr]}function jo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ae)return Promise.resolve();const n=re.documentElement.classList,r=l=>n.add("".concat(no,"-").concat(l)),i=l=>n.remove("".concat(no,"-").concat(l)),a=P.autoFetchSvg?dd():Ya.concat(Object.keys(fd));a.includes("fa")||a.push("fa");const o=[".".concat(oo,":not([").concat(ot,"])")].concat(a.map(l=>".".concat(l,":not([").concat(ot,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=St(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();const u=Hr.begin("onTree"),c=s.reduce((l,d)=>{try{const f=Lo(d);f&&l.push(f)}catch(f){ro||f.name==="MissingIcon"&&console.error(f)}return l},[]);return new Promise((l,d)=>{Promise.all(c).then(f=>{Po(f,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),u(),l()})}).catch(f=>{u(),d(f)})})}function pd(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Lo(e).then(n=>{n&&Po([n],t)})}function hd(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Vr(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Vr(i||{})),e(r,k(k({},n),{},{mask:i}))}}const md=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Oe,symbol:r=!1,mask:i=null,maskId:a=null,title:o=null,titleId:s=null,classes:u=[],attributes:c={},styles:l={}}=t;if(!e)return;const{prefix:d,iconName:f,icon:p}=e;return Rn(k({type:"icon"},e),()=>(ut("beforeDOMElementCreation",{iconDefinition:e,params:t}),P.autoA11y&&(o?c["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(s||en()):(c["aria-hidden"]="true",c.focusable="false")),Br({icons:{main:zr(p),mask:i?zr(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:k(k({},Oe),n),symbol:r,title:o,maskId:a,titleId:s,extra:{attributes:c,styles:l,classes:u}})))};var gd={mixout(){return{icon:hd(md)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=jo,e.nodeCallback=pd,e}}},provides(e){e.i2svg=function(t){const{node:n=re,callback:r=()=>{}}=t;return jo(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:a,prefix:o,transform:s,symbol:u,mask:c,maskId:l,extra:d}=n;return new Promise((f,p)=>{Promise.all([Qr(r,o),c.iconName?Qr(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[m,v]=y;f([t,Br({icons:{main:m,mask:v},prefix:o,iconName:r,transform:s,symbol:u,maskId:l,title:i,titleId:a,extra:d,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:a,styles:o}=t;const s=An(o);s.length>0&&(r.style=s);let u;return Pr(a)&&(u=Ve("generateAbstractTransformGrouping",{main:i,transform:a,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},yd={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Rn({type:"layer"},()=>{ut("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(a=>{r=r.concat(a.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},vd={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:a={}}=t;return Rn({type:"counter",content:e},()=>(ut("beforeDOMElementCreation",{content:e,params:t}),Jf({content:e.toString(),title:n,extra:{attributes:i,styles:a,classes:["".concat(P.cssPrefix,"-layers-counter"),...r]}})))}}}},bd={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Oe,title:r=null,classes:i=[],attributes:a={},styles:o={}}=t;return Rn({type:"text",content:e},()=>(ut("beforeDOMElementCreation",{content:e,params:t}),ko({content:e,transform:k(k({},Oe),n),title:r,extra:{attributes:a,styles:o,classes:["".concat(P.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:a}=n;let o=null,s=null;if(Wa){const u=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/u,s=c.height/u}return P.autoA11y&&!r&&(a.attributes["aria-hidden"]="true"),Promise.resolve([t,ko({content:t.innerHTML,width:o,height:s,transform:i,title:r,extra:a,watchable:!0})])}}};const Sd=new RegExp('"',"ug"),qo=[1105920,1112319],Uo=k(k(k(k({},{FontAwesome:{normal:"fas",400:"fas"}}),zl),cf),tf),Xr=Object.keys(Uo).reduce((e,t)=>(e[t.toLowerCase()]=Uo[t],e),{}),_d=Object.keys(Xr).reduce((e,t)=>{const n=Xr[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Ed(e){const t=e.replace(Sd,""),n=Ff(t,0),r=n>=qo[0]&&n<=qo[1],i=t.length===2?t[0]===t[1]:!1;return{value:Mr(i?t[0]:t),isSecondary:r||i}}function Dd(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(Xr[n]||{})[i]||_d[n]}function Vo(e,t){const n="".concat(lf).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const o=St(e.children).filter(f=>f.getAttribute(Tr)===t)[0],s=je.getComputedStyle(e,t),u=s.getPropertyValue("font-family"),c=u.match(mf),l=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&d!=="none"&&d!==""){const f=s.getPropertyValue("content");let p=Dd(u,l);const{value:y,isSecondary:m}=Ed(f),v=c[0].startsWith("FontAwesome");let g=qr(p,y),b=g;if(v){const E=Mf(y);E.iconName&&E.prefix&&(g=E.iconName,p=E.prefix)}if(g&&!m&&(!o||o.getAttribute(Ir)!==p||o.getAttribute(Or)!==b)){e.setAttribute(n,b),o&&e.removeChild(o);const E=ld(),{extra:D}=E;D.attributes[Tr]=t,Qr(g,p).then(I=>{const O=Br(k(k({},E),{},{icons:{main:I,mask:wo()},prefix:p,iconName:b,extra:D,watchable:!0})),C=re.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(C,e.firstChild):e.appendChild(C),C.outerHTML=O.map(N=>tn(N)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function wd(e){return Promise.all([Vo(e,"::before"),Vo(e,"::after")])}function Td(e){return e.parentNode!==document.head&&!~df.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Tr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Bo(e){if(Ae)return new Promise((t,n)=>{const r=St(e.querySelectorAll("*")).filter(Td).map(wd),i=Hr.begin("searchPseudoElements");No(),Promise.all(r).then(()=>{i(),Jr(),t()}).catch(()=>{i(),Jr(),n()})})}var Id={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Bo,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=re}=t;P.searchPseudoElements&&Bo(n)}}};let Go=!1;var Od={mixout(){return{dom:{unwatch(){No(),Go=!0}}}},hooks(){return{bootstrap(){Ro(Ur("mutationObserverCallbacks",{}))},noAuto(){od()},watch(e){const{observeMutationsRoot:t}=e;Go?Jr():Ro(Ur("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const zo=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),a=i[0];let o=i.slice(1).join("-");if(a&&o==="h")return n.flipX=!0,n;if(a&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(a){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var kd={mixout(){return{parse:{transform:e=>zo(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=zo(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:a}=t;const o={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),l={transform:"".concat(s," ").concat(u," ").concat(c)},d={transform:"translate(".concat(a/2*-1," -256)")},f={outer:o,inner:l,path:d};return{tag:"g",attributes:k({},f.outer),children:[{tag:"g",attributes:k({},f.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:k(k({},n.icon.attributes),f.path)}]}]}}}};const Kr={x:0,y:0,width:"100%",height:"100%"};function Qo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function xd(e){return e.tag==="g"?e.children:[e]}var Cd={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Nn(n.split(" ").map(i=>i.trim())):wo();return r.prefix||(r.prefix=Ue()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:a,maskId:o,transform:s}=t;const{width:u,icon:c}=i,{width:l,icon:d}=a,f=Tf({transform:s,containerWidth:l,iconWidth:u}),p={tag:"rect",attributes:k(k({},Kr),{},{fill:"white"})},y=c.children?{children:c.children.map(Qo)}:{},m={tag:"g",attributes:k({},f.inner),children:[Qo(k({tag:c.tag,attributes:k(k({},c.attributes),f.path)},y))]},v={tag:"g",attributes:k({},f.outer),children:[m]},g="mask-".concat(o||en()),b="clip-".concat(o||en()),E={tag:"mask",attributes:k(k({},Kr),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:xd(d)},E]};return n.push(D,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(g,")")},Kr)}),{children:n,attributes:r}}}},Fd={provides(e){let t=!1;je.matchMedia&&(t=je.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:k(k({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const a=k(k({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:k(k({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:k(k({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},a),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:k(k({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:k(k({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:k(k({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ad={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},$d=[kf,gd,yd,vd,bd,Id,Od,kd,Cd,Fd,Ad];Qf($d,{mixoutsTo:Se}),Se.noAuto,Se.config,Se.library,Se.dom;const Zr=Se.parse;Se.findIconDefinition,Se.toHtml;const Pd=Se.icon;Se.layer,Se.text,Se.counter;function ei(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ti={exports:{}},ni,Wo;function Nd(){if(Wo)return ni;Wo=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ni=e,ni}var ri,Ho;function Rd(){if(Ho)return ri;Ho=1;var e=Nd();function t(){}function n(){}return n.resetWarningCache=t,ri=function(){function r(o,s,u,c,l,d){if(d!==e){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}r.isRequired=r;function i(){return r}var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:t};return a.PropTypes=a,a},ri}var Yo;function Md(){return Yo||(Yo=1,ti.exports=Rd()()),ti.exports}var Ld=Md();const V=ei(Ld);var ii={exports:{}},G={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ai,Jo;function jd(){if(Jo)return ai;Jo=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function r(a){if(a==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}function i(){try{if(!Object.assign)return!1;var a=new String("abc");if(a[5]="de",Object.getOwnPropertyNames(a)[0]==="5")return!1;for(var o={},s=0;s<10;s++)o["_"+String.fromCharCode(s)]=s;var u=Object.getOwnPropertyNames(o).map(function(l){return o[l]});if(u.join("")!=="0123456789")return!1;var c={};return"abcdefghijklmnopqrst".split("").forEach(function(l){c[l]=l}),Object.keys(Object.assign({},c)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return ai=i()?Object.assign:function(a,o){for(var s,u=r(a),c,l=1;l<arguments.length;l++){s=Object(arguments[l]);for(var d in s)t.call(s,d)&&(u[d]=s[d]);if(e){c=e(s);for(var f=0;f<c.length;f++)n.call(s,c[f])&&(u[c[f]]=s[c[f]])}}return u},ai}/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo;function qd(){if(Xo)return G;Xo=1;var e=jd(),t=60103,n=60106;G.Fragment=60107,G.StrictMode=60108,G.Profiler=60114;var r=60109,i=60110,a=60112;G.Suspense=60113;var o=60115,s=60116;if(typeof Symbol=="function"&&Symbol.for){var u=Symbol.for;t=u("react.element"),n=u("react.portal"),G.Fragment=u("react.fragment"),G.StrictMode=u("react.strict_mode"),G.Profiler=u("react.profiler"),r=u("react.provider"),i=u("react.context"),a=u("react.forward_ref"),G.Suspense=u("react.suspense"),o=u("react.memo"),s=u("react.lazy")}var c=typeof Symbol=="function"&&Symbol.iterator;function l(S){return S===null||typeof S!="object"?null:(S=c&&S[c]||S["@@iterator"],typeof S=="function"?S:null)}function d(S){for(var T="https://reactjs.org/docs/error-decoder.html?invariant="+S,F=1;F<arguments.length;F++)T+="&args[]="+encodeURIComponent(arguments[F]);return"Minified React error #"+S+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p={};function y(S,T,F){this.props=S,this.context=T,this.refs=p,this.updater=F||f}y.prototype.isReactComponent={},y.prototype.setState=function(S,T){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error(d(85));this.updater.enqueueSetState(this,S,T,"setState")},y.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function m(){}m.prototype=y.prototype;function v(S,T,F){this.props=S,this.context=T,this.refs=p,this.updater=F||f}var g=v.prototype=new m;g.constructor=v,e(g,y.prototype),g.isPureReactComponent=!0;var b={current:null},E=Object.prototype.hasOwnProperty,D={key:!0,ref:!0,__self:!0,__source:!0};function I(S,T,F){var q,R={},B=null,X=null;if(T!=null)for(q in T.ref!==void 0&&(X=T.ref),T.key!==void 0&&(B=""+T.key),T)E.call(T,q)&&!D.hasOwnProperty(q)&&(R[q]=T[q]);var K=arguments.length-2;if(K===1)R.children=F;else if(1<K){for(var Z=Array(K),ee=0;ee<K;ee++)Z[ee]=arguments[ee+2];R.children=Z}if(S&&S.defaultProps)for(q in K=S.defaultProps,K)R[q]===void 0&&(R[q]=K[q]);return{$$typeof:t,type:S,key:B,ref:X,props:R,_owner:b.current}}function O(S,T){return{$$typeof:t,type:S.type,key:T,ref:S.ref,props:S.props,_owner:S._owner}}function C(S){return typeof S=="object"&&S!==null&&S.$$typeof===t}function N(S){var T={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(F){return T[F]})}var L=/\/+/g;function U(S,T){return typeof S=="object"&&S!==null&&S.key!=null?N(""+S.key):T.toString(36)}function z(S,T,F,q,R){var B=typeof S;(B==="undefined"||B==="boolean")&&(S=null);var X=!1;if(S===null)X=!0;else switch(B){case"string":case"number":X=!0;break;case"object":switch(S.$$typeof){case t:case n:X=!0}}if(X)return X=S,R=R(X),S=q===""?"."+U(X,0):q,Array.isArray(R)?(F="",S!=null&&(F=S.replace(L,"$&/")+"/"),z(R,T,F,"",function(ee){return ee})):R!=null&&(C(R)&&(R=O(R,F+(!R.key||X&&X.key===R.key?"":(""+R.key).replace(L,"$&/")+"/")+S)),T.push(R)),1;if(X=0,q=q===""?".":q+":",Array.isArray(S))for(var K=0;K<S.length;K++){B=S[K];var Z=q+U(B,K);X+=z(B,T,F,Z,R)}else if(Z=l(S),typeof Z=="function")for(S=Z.call(S),K=0;!(B=S.next()).done;)B=B.value,Z=q+U(B,K++),X+=z(B,T,F,Z,R);else if(B==="object")throw T=""+S,Error(d(31,T==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":T));return X}function fe(S,T,F){if(S==null)return S;var q=[],R=0;return z(S,q,"","",function(B){return T.call(F,B,R++)}),q}function ie(S){if(S._status===-1){var T=S._result;T=T(),S._status=0,S._result=T,T.then(function(F){S._status===0&&(F=F.default,S._status=1,S._result=F)},function(F){S._status===0&&(S._status=2,S._result=F)})}if(S._status===1)return S._result;throw S._result}var ge={current:null};function M(){var S=ge.current;if(S===null)throw Error(d(321));return S}var J={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:e};return G.Children={map:fe,forEach:function(S,T,F){fe(S,function(){T.apply(this,arguments)},F)},count:function(S){var T=0;return fe(S,function(){T++}),T},toArray:function(S){return fe(S,function(T){return T})||[]},only:function(S){if(!C(S))throw Error(d(143));return S}},G.Component=y,G.PureComponent=v,G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,G.cloneElement=function(S,T,F){if(S==null)throw Error(d(267,S));var q=e({},S.props),R=S.key,B=S.ref,X=S._owner;if(T!=null){if(T.ref!==void 0&&(B=T.ref,X=b.current),T.key!==void 0&&(R=""+T.key),S.type&&S.type.defaultProps)var K=S.type.defaultProps;for(Z in T)E.call(T,Z)&&!D.hasOwnProperty(Z)&&(q[Z]=T[Z]===void 0&&K!==void 0?K[Z]:T[Z])}var Z=arguments.length-2;if(Z===1)q.children=F;else if(1<Z){K=Array(Z);for(var ee=0;ee<Z;ee++)K[ee]=arguments[ee+2];q.children=K}return{$$typeof:t,type:S.type,key:R,ref:B,props:q,_owner:X}},G.createContext=function(S,T){return T===void 0&&(T=null),S={$$typeof:i,_calculateChangedBits:T,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider={$$typeof:r,_context:S},S.Consumer=S},G.createElement=I,G.createFactory=function(S){var T=I.bind(null,S);return T.type=S,T},G.createRef=function(){return{current:null}},G.forwardRef=function(S){return{$$typeof:a,render:S}},G.isValidElement=C,G.lazy=function(S){return{$$typeof:s,_payload:{_status:-1,_result:S},_init:ie}},G.memo=function(S,T){return{$$typeof:o,type:S,compare:T===void 0?null:T}},G.useCallback=function(S,T){return M().useCallback(S,T)},G.useContext=function(S,T){return M().useContext(S,T)},G.useDebugValue=function(){},G.useEffect=function(S,T){return M().useEffect(S,T)},G.useImperativeHandle=function(S,T,F){return M().useImperativeHandle(S,T,F)},G.useLayoutEffect=function(S,T){return M().useLayoutEffect(S,T)},G.useMemo=function(S,T){return M().useMemo(S,T)},G.useReducer=function(S,T,F){return M().useReducer(S,T,F)},G.useRef=function(S){return M().useRef(S)},G.useState=function(S){return M().useState(S)},G.version="17.0.2",G}var Ko;function oi(){return Ko||(Ko=1,ii.exports=qd()),ii.exports}var Ud=oi();const si=ei(Ud);function ui(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Vd(e){if(Array.isArray(e))return e}function Bd(e){if(Array.isArray(e))return ui(e)}function Be(e,t,n){return(t=Xd(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,o,s=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(u=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);u=!0);}catch(l){c=!0,i=l}finally{try{if(!u&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw i}}return s}}function Qd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zo(Object(n),!0).forEach(function(r){Be(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hd(e,t){if(e==null)return{};var n,r,i=Yd(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Yd(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function es(e,t){return Vd(e)||zd(e,t)||ts(e,t)||Qd()}function ci(e){return Bd(e)||Gd(e)||ts(e)||Wd()}function Jd(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Xd(e){var t=Jd(e,"string");return typeof t=="symbol"?t:t+""}function qn(e){"@babel/helpers - typeof";return qn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qn(e)}function ts(e,t){if(e){if(typeof e=="string")return ui(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ui(e,t):void 0}}var Kd="7.0.0-alpha1",li;try{var Zd=require("@fortawesome/fontawesome-svg-core/package.json");li=Zd.version}catch{li="sss"}function ep(e){var t=e.beat,n=e.fade,r=e.beatFade,i=e.bounce,a=e.shake,o=e.flash,s=e.spin,u=e.spinPulse,c=e.spinReverse,l=e.pulse,d=e.fixedWidth,f=e.inverse,p=e.border,y=e.listItem,m=e.flip,v=e.size,g=e.rotation,b=e.pull,E=e.swapOpacity,D=e.rotateBy,I=e.widthAuto,O=tp(li,Kd),C=Be(Be(Be(Be(Be(Be({"fa-beat":t,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":a,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":l,"fa-fw":d,"fa-inverse":f,"fa-border":p,"fa-li":y,"fa-flip":m===!0,"fa-flip-horizontal":m==="horizontal"||m==="both","fa-flip-vertical":m==="vertical"||m==="both"},"fa-".concat(v),typeof v<"u"&&v!==null),"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),"fa-pull-".concat(b),typeof b<"u"&&b!==null),"fa-swap-opacity",E),"fa-rotate-by",O&&D),"fa-width-auto",O&&I);return Object.keys(C).map(function(N){return C[N]?N:null}).filter(function(N){return N})}function tp(e,t){for(var n=e.split("-"),r=es(n,2),i=r[0],a=r[1],o=t.split("-"),s=es(o,2),u=s[0],c=s[1],l=i.split("."),d=u.split("."),f=0;f<Math.max(l.length,d.length);f++){var p=l[f]||"0",y=d[f]||"0",m=parseInt(p,10),v=parseInt(y,10);if(m!==v)return m>v}for(var g=0;g<Math.max(l.length,d.length);g++){var b=l[g]||"0",E=d[g]||"0";if(b!==E&&b.length!==E.length)return b.length<E.length}return!(a&&!c)}function np(e){return e=e-0,e===e}function ns(e){return np(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var rp=["style"];function ip(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ap(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=ns(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[ip(i)]=a:t[i]=a,t},{})}function rs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return rs(e,u)}),i=Object.keys(t.attributes||{}).reduce(function(u,c){var l=t.attributes[c];switch(c){case"class":u.attrs.className=l,delete t.attributes.class;break;case"style":u.attrs.style=ap(l);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=l:u.attrs[ns(c)]=l}return u},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=Hd(n,rp);return i.attrs.style=xe(xe({},i.attrs.style),o),e.apply(void 0,[t.tag,xe(xe({},i.attrs),s)].concat(ci(r)))}var is=!1;try{is=!0}catch{}function op(){if(!is&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function as(e){if(e&&qn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Zr.icon)return Zr.icon(e);if(e===null)return null;if(e&&qn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function fi(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Be({},e,t):{}}var os={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},Un=si.forwardRef(function(e,t){var n=xe(xe({},os),e),r=n.icon,i=n.mask,a=n.symbol,o=n.className,s=n.title,u=n.titleId,c=n.maskId,l=as(r),d=fi("classes",[].concat(ci(ep(n)),ci((o||"").split(" ")))),f=fi("transform",typeof n.transform=="string"?Zr.transform(n.transform):n.transform),p=fi("mask",as(i)),y=Pd(l,xe(xe(xe(xe({},d),f),p),{},{symbol:a,title:s,titleId:u,maskId:c}));if(!y)return op("Could not find icon",l),null;var m=y.abstract,v={ref:t};return Object.keys(n).forEach(function(g){os.hasOwnProperty(g)||(v[g]=n[g])}),sp(m[0],v)});Un.displayName="FontAwesomeIcon",Un.propTypes={beat:V.bool,border:V.bool,beatFade:V.bool,bounce:V.bool,className:V.string,fade:V.bool,flash:V.bool,mask:V.oneOfType([V.object,V.array,V.string]),maskId:V.string,fixedWidth:V.bool,inverse:V.bool,flip:V.oneOf([!0,!1,"horizontal","vertical","both"]),icon:V.oneOfType([V.object,V.array,V.string]),listItem:V.bool,pull:V.oneOf(["right","left"]),pulse:V.bool,rotation:V.oneOf([0,90,180,270]),rotateBy:V.bool,shake:V.bool,size:V.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:V.bool,spinPulse:V.bool,spinReverse:V.bool,symbol:V.oneOfType([V.bool,V.string]),title:V.string,titleId:V.string,transform:V.oneOfType([V.string,V.object]),swapOpacity:V.bool,widthAuto:V.bool};var sp=rs.bind(null,si.createElement);const Ge="stash-tv",up={},ss=e=>{let t;const n=new Set,r=(l,d)=>{const f=typeof l=="function"?l(t):l;if(!Object.is(f,t)){const p=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(y=>y(t,p))}},i=()=>t,u={setState:r,getState:i,getInitialState:()=>c,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{(up?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=t=e(r,i,u);return u},cp=e=>e?ss(e):ss;var di={exports:{}},pi={},hi={exports:{}},mi={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var us;function lp(){if(us)return mi;us=1;var e=oi();function t(d,f){return d===f&&(d!==0||1/d===1/f)||d!==d&&f!==f}var n=typeof Object.is=="function"?Object.is:t,r=e.useState,i=e.useEffect,a=e.useLayoutEffect,o=e.useDebugValue;function s(d,f){var p=f(),y=r({inst:{value:p,getSnapshot:f}}),m=y[0].inst,v=y[1];return a(function(){m.value=p,m.getSnapshot=f,u(m)&&v({inst:m})},[d,p,f]),i(function(){return u(m)&&v({inst:m}),d(function(){u(m)&&v({inst:m})})},[d]),o(p),p}function u(d){var f=d.getSnapshot;d=d.value;try{var p=f();return!n(d,p)}catch{return!0}}function c(d,f){return f()}var l=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?c:s;return mi.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:l,mi}var cs;function fp(){return cs||(cs=1,hi.exports=lp()),hi.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ls;function dp(){if(ls)return pi;ls=1;var e=oi(),t=fp();function n(c,l){return c===l&&(c!==0||1/c===1/l)||c!==c&&l!==l}var r=typeof Object.is=="function"?Object.is:n,i=t.useSyncExternalStore,a=e.useRef,o=e.useEffect,s=e.useMemo,u=e.useDebugValue;return pi.useSyncExternalStoreWithSelector=function(c,l,d,f,p){var y=a(null);if(y.current===null){var m={hasValue:!1,value:null};y.current=m}else m=y.current;y=s(function(){function g(O){if(!b){if(b=!0,E=O,O=f(O),p!==void 0&&m.hasValue){var C=m.value;if(p(C,O))return D=C}return D=O}if(C=D,r(E,O))return C;var N=f(O);return p!==void 0&&p(C,N)?(E=O,C):(E=O,D=N)}var b=!1,E,D,I=d===void 0?null:d;return[function(){return g(l())},I===null?void 0:function(){return g(I())}]},[l,d,f,p]);var v=i(c,y[0],y[1]);return o(function(){m.hasValue=!0,m.value=v},[v]),u(v),v},pi}var fs;function pp(){return fs||(fs=1,di.exports=dp()),di.exports}var hp=pp();const mp=ei(hp),ds={},{useDebugValue:gp}=si,{useSyncExternalStoreWithSelector:yp}=mp;let ps=!1;const vp=e=>e;function bp(e,t=vp,n){(ds?"production":void 0)!=="production"&&n&&!ps&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),ps=!0);const r=yp(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return gp(r),r}const Sp=e=>{(ds?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?cp(e):e,n=(r,i)=>bp(t,r,i);return Object.assign(n,t),n},hs=e=>Sp,_p={};function ms(e,t){let n;try{n=e()}catch{return}return{getItem:i=>{var a;const o=u=>u===null?null:JSON.parse(u,void 0),s=(a=n.getItem(i))!=null?a:null;return s instanceof Promise?s.then(o):o(s)},setItem:(i,a)=>n.setItem(i,JSON.stringify(a,void 0)),removeItem:i=>n.removeItem(i)}}const an=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(r){return an(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return an(r)(n)}}}},Ep=(e,t)=>(n,r,i)=>{let a={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:v=>v,version:0,merge:(v,g)=>({...g,...v}),...t},o=!1;const s=new Set,u=new Set;let c;try{c=a.getStorage()}catch{}if(!c)return e((...v)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...v)},r,i);const l=an(a.serialize),d=()=>{const v=a.partialize({...r()});let g;const b=l({state:v,version:a.version}).then(E=>c.setItem(a.name,E)).catch(E=>{g=E});if(g)throw g;return b},f=i.setState;i.setState=(v,g)=>{f(v,g),d()};const p=e((...v)=>{n(...v),d()},r,i);let y;const m=()=>{var v;if(!c)return;o=!1,s.forEach(b=>b(r()));const g=((v=a.onRehydrateStorage)==null?void 0:v.call(a,r()))||void 0;return an(c.getItem.bind(c))(a.name).then(b=>{if(b)return a.deserialize(b)}).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==a.version){if(a.migrate)return a.migrate(b.state,b.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return b.state}).then(b=>{var E;return y=a.merge(b,(E=r())!=null?E:p),n(y,!0),d()}).then(()=>{g?.(y,void 0),o=!0,u.forEach(b=>b(y))}).catch(b=>{g?.(void 0,b)})};return i.persist={setOptions:v=>{a={...a,...v},v.getStorage&&(c=v.getStorage())},clearStorage:()=>{c?.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>m(),hasHydrated:()=>o,onHydrate:v=>(s.add(v),()=>{s.delete(v)}),onFinishHydration:v=>(u.add(v),()=>{u.delete(v)})},m(),y||p},Dp=(e,t)=>(n,r,i)=>{let a={storage:ms(()=>localStorage),partialize:m=>m,version:0,merge:(m,v)=>({...v,...m}),...t},o=!1;const s=new Set,u=new Set;let c=a.storage;if(!c)return e((...m)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...m)},r,i);const l=()=>{const m=a.partialize({...r()});return c.setItem(a.name,{state:m,version:a.version})},d=i.setState;i.setState=(m,v)=>{d(m,v),l()};const f=e((...m)=>{n(...m),l()},r,i);i.getInitialState=()=>f;let p;const y=()=>{var m,v;if(!c)return;o=!1,s.forEach(b=>{var E;return b((E=r())!=null?E:f)});const g=((v=a.onRehydrateStorage)==null?void 0:v.call(a,(m=r())!=null?m:f))||void 0;return an(c.getItem.bind(c))(a.name).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==a.version){if(a.migrate)return[!0,a.migrate(b.state,b.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,b.state];return[!1,void 0]}).then(b=>{var E;const[D,I]=b;if(p=a.merge(I,(E=r())!=null?E:f),n(p,!0),D)return l()}).then(()=>{g?.(p,void 0),p=r(),o=!0,u.forEach(b=>b(p))}).catch(b=>{g?.(void 0,b)})};return i.persist={setOptions:m=>{a={...a,...m},m.storage&&(c=m.storage)},clearStorage:()=>{c?.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>y(),hasHydrated:()=>o,onHydrate:m=>(s.add(m),()=>{s.delete(m)}),onFinishHydration:m=>(u.add(m),()=>{u.delete(m)})},a.skipHydration||y(),p||f},wp=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((_p?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Ep(e,t)):Dp(e,t);function gi(e,t){const n=t?.compact===!0?void 0:2;return JSON.stringify(e,null,n)}const Tp=Object.freeze(Object.defineProperty({__proto__:null,inspect:gi},Symbol.toStringTag,{value:"Module"})),gs={trace:"TRC",debug:"DBG",info:"INF",warning:"WRN",error:"ERR",fatal:"FTL"},ys=typeof document<"u"||typeof navigator<"u"&&navigator.product==="ReactNative"?e=>JSON.stringify(e):"Deno"in globalThis&&"inspect"in globalThis.Deno&&typeof globalThis.Deno.inspect=="function"?(e,t)=>globalThis.Deno.inspect(e,{strAbbreviateSize:1/0,iterableLimit:1/0,...t}):Tp!=null&&typeof gi=="function"?(e,t)=>gi(e,{...t}):e=>JSON.stringify(e);function te(e){return e<10?`0${e}`:`${e}`}function Dt(e){return e<10?`00${e}`:e<100?`0${e}`:`${e}`}const Vn={"date-time-timezone":e=>{const t=new Date(e),n=t.getUTCFullYear(),r=te(t.getUTCMonth()+1),i=te(t.getUTCDate()),a=te(t.getUTCHours()),o=te(t.getUTCMinutes()),s=te(t.getUTCSeconds()),u=Dt(t.getUTCMilliseconds());return`${n}-${r}-${i} ${a}:${o}:${s}.${u} +00:00`},"date-time-tz":e=>{const t=new Date(e),n=t.getUTCFullYear(),r=te(t.getUTCMonth()+1),i=te(t.getUTCDate()),a=te(t.getUTCHours()),o=te(t.getUTCMinutes()),s=te(t.getUTCSeconds()),u=Dt(t.getUTCMilliseconds());return`${n}-${r}-${i} ${a}:${o}:${s}.${u} +00`},"date-time":e=>{const t=new Date(e),n=t.getUTCFullYear(),r=te(t.getUTCMonth()+1),i=te(t.getUTCDate()),a=te(t.getUTCHours()),o=te(t.getUTCMinutes()),s=te(t.getUTCSeconds()),u=Dt(t.getUTCMilliseconds());return`${n}-${r}-${i} ${a}:${o}:${s}.${u}`},"time-timezone":e=>{const t=new Date(e),n=te(t.getUTCHours()),r=te(t.getUTCMinutes()),i=te(t.getUTCSeconds()),a=Dt(t.getUTCMilliseconds());return`${n}:${r}:${i}.${a} +00:00`},"time-tz":e=>{const t=new Date(e),n=te(t.getUTCHours()),r=te(t.getUTCMinutes()),i=te(t.getUTCSeconds()),a=Dt(t.getUTCMilliseconds());return`${n}:${r}:${i}.${a} +00`},time:e=>{const t=new Date(e),n=te(t.getUTCHours()),r=te(t.getUTCMinutes()),i=te(t.getUTCSeconds()),a=Dt(t.getUTCMilliseconds());return`${n}:${r}:${i}.${a}`},date:e=>{const t=new Date(e),n=t.getUTCFullYear(),r=te(t.getUTCMonth()+1),i=te(t.getUTCDate());return`${n}-${r}-${i}`},rfc3339:e=>new Date(e).toISOString(),none:()=>null},wt={ABBR:gs,abbr:{trace:"trc",debug:"dbg",info:"inf",warning:"wrn",error:"err",fatal:"ftl"},FULL:{trace:"TRACE",debug:"DEBUG",info:"INFO",warning:"WARNING",error:"ERROR",fatal:"FATAL"},full:{trace:"trace",debug:"debug",info:"info",warning:"warning",error:"error",fatal:"fatal"},L:{trace:"T",debug:"D",info:"I",warning:"W",error:"E",fatal:"F"},l:{trace:"t",debug:"d",info:"i",warning:"w",error:"e",fatal:"f"}};function vs(e){return e==="crlf"?`\r
`:`
`}function Bn(e,t){if(!(t instanceof Error))return t;const n={name:t.name,message:t.message};typeof t.stack=="string"&&(n.stack=t.stack);const r=t.cause;r!==void 0&&(n.cause=r),typeof AggregateError<"u"&&t instanceof AggregateError&&(n.errors=t.errors);for(const i of Object.keys(t))i in n||(n[i]=t[i]);return n}function bs(e={}){const t=(()=>{const s=e.timestamp;return s==null?Vn["date-time-timezone"]:s==="disabled"?Vn.none:typeof s=="string"&&s in Vn?Vn[s]:s})(),n=e.category??"·",r=e.value?s=>e.value(s,ys):ys,i=(()=>{const s=e.level;return s==null||s==="ABBR"?u=>wt.ABBR[u]:s==="abbr"?u=>wt.abbr[u]:s==="FULL"?u=>wt.FULL[u]:s==="full"?u=>wt.full[u]:s==="L"?u=>wt.L[u]:s==="l"?u=>wt.l[u]:s})(),a=vs(e.lineEnding),o=e.format??(({timestamp:s,level:u,category:c,message:l})=>`${s?`${s} `:""}[${u}] ${c}: ${l}`);return s=>{const u=s.message,c=u.length;let l;if(c===1)l=u[0];else if(c<=6){l="";for(let m=0;m<c;m++)l+=m%2===0?u[m]:r(u[m])}else{const m=new Array(c);for(let v=0;v<c;v++)m[v]=v%2===0?u[v]:r(u[v]);l=m.join("")}const d=t(s.timestamp),f=i(s.level),p=typeof n=="function"?n(s.category):s.category.join(n);return`${o({timestamp:d,level:f,category:p,message:l,record:s})}${a}`}}bs();const yi="\x1B[0m",vi={black:"\x1B[30m",red:"\x1B[31m",green:"\x1B[32m",yellow:"\x1B[33m",blue:"\x1B[34m",magenta:"\x1B[35m",cyan:"\x1B[36m",white:"\x1B[37m"},bi={bold:"\x1B[1m",dim:"\x1B[2m",italic:"\x1B[3m",underline:"\x1B[4m",strikethrough:"\x1B[9m"},Ip={trace:null,debug:"blue",info:"green",warning:"yellow",error:"red",fatal:"magenta"};function Op(e={}){const t=e.format,n=typeof e.timestampStyle>"u"?"dim":e.timestampStyle,r=e.timestampColor??null,i=`${n==null?"":bi[n]}${r==null?"":vi[r]}`,a=n==null&&r==null?"":yi,o=typeof e.levelStyle>"u"?"bold":e.levelStyle,s=e.levelColors??Ip,u=typeof e.categoryStyle>"u"?"dim":e.categoryStyle,c=e.categoryColor??null,l=`${u==null?"":bi[u]}${c==null?"":vi[c]}`,d=u==null&&c==null?"":yi;return bs({timestamp:"date-time-tz",value(f,p){return p(f,{colors:!0})},...e,format({timestamp:f,level:p,category:y,message:m,record:v}){const g=s[v.level];return f=f==null?null:`${i}${f}${a}`,p=`${o==null?"":bi[o]}${g==null?"":vi[g]}${p}${o==null&&g==null?"":yi}`,t==null?`${f==null?"":`${f} `}${p} ${l}${y}:${d} ${m}`:t({timestamp:f,level:p,category:`${l}${y}${d}`,message:m,record:v})}})}Op();function kp(e={}){const t=vs(e.lineEnding);if(!e.categorySeparator&&!e.message&&!e.properties)return s=>{if(s.message.length===3)return JSON.stringify({"@timestamp":new Date(s.timestamp).toISOString(),level:s.level==="warning"?"WARN":s.level.toUpperCase(),message:s.message[0]+JSON.stringify(s.message[1])+s.message[2],logger:s.category.join("."),properties:s.properties},Bn)+t;if(s.message.length===1)return JSON.stringify({"@timestamp":new Date(s.timestamp).toISOString(),level:s.level==="warning"?"WARN":s.level.toUpperCase(),message:s.message[0],logger:s.category.join("."),properties:s.properties},Bn)+t;let u=s.message[0];for(let c=1;c<s.message.length;c++)u+=c&1?JSON.stringify(s.message[c]):s.message[c];return JSON.stringify({"@timestamp":new Date(s.timestamp).toISOString(),level:s.level==="warning"?"WARN":s.level.toUpperCase(),message:u,logger:s.category.join("."),properties:s.properties},Bn)+t};const n=e.message==="template",r=e.properties??"nest:properties";let i;if(typeof e.categorySeparator=="function")i=e.categorySeparator;else{const s=e.categorySeparator??".";i=u=>u.join(s)}let a;if(r==="flatten")a=s=>s;else if(r.startsWith("prepend:")){const s=r.substring(8);if(s==="")throw new TypeError(`Invalid properties option: ${JSON.stringify(r)}. It must be of the form "prepend:<prefix>" where <prefix> is a non-empty string.`);a=u=>{const c={};for(const l in u)c[`${s}${l}`]=u[l];return c}}else if(r.startsWith("nest:")){const s=r.substring(5);a=u=>({[s]:u})}else throw new TypeError(`Invalid properties option: ${JSON.stringify(r)}. It must be "flatten", "prepend:<prefix>", or "nest:<key>".`);let o;return n?o=s=>{if(typeof s.rawMessage=="string")return s.rawMessage;let u="";for(let c=0;c<s.rawMessage.length;c++)u+=c%2<1?s.rawMessage[c]:"{}";return u}:o=s=>{const u=s.message.length;if(u===1)return s.message[0];let c="";for(let l=0;l<u;l++)c+=l%2<1?s.message[l]:JSON.stringify(s.message[l]);return c},s=>JSON.stringify({"@timestamp":new Date(s.timestamp).toISOString(),level:s.level==="warning"?"WARN":s.level.toUpperCase(),message:o(s),logger:i(s.category),...a(s.properties)},Bn)+t}kp();const xp={trace:"background-color: gray; color: white;",debug:"background-color: gray; color: white;",info:"background-color: white; color: black;",warning:"background-color: orange; color: black;",error:"background-color: red; color: white;",fatal:"background-color: maroon; color: white;"};function Cp(e){let t="";const n=[];for(let a=0;a<e.message.length;a++)a%2===0?t+=e.message[a]:(t+="%o",n.push(e.message[a]));const r=new Date(e.timestamp);return[`%c${`${r.getUTCHours().toString().padStart(2,"0")}:${r.getUTCMinutes().toString().padStart(2,"0")}:${r.getUTCSeconds().toString().padStart(2,"0")}.${r.getUTCMilliseconds().toString().padStart(3,"0")}`} %c${gs[e.level]}%c %c${e.category.join("·")} %c${t}`,"color: gray;",xp[e.level],"background-color: default;","color: gray;","color: default;",...n]}function Fp(e={}){const t=e.formatter??Cp,n={trace:"debug",debug:"debug",info:"info",warning:"warn",error:"error",fatal:"error",...e.levelMap??{}},r=e.console??globalThis.console,i=g=>{const b=t(g),E=n[g.level];if(E===void 0)throw new TypeError(`Invalid log level: ${g.level}.`);if(typeof b=="string"){const D=b.replace(/\r?\n$/,"");r[E](D)}else r[E](...b)};if(!e.nonBlocking)return i;const a=e.nonBlocking===!0?{}:e.nonBlocking,o=a.bufferSize??100,s=a.flushInterval??100,u=[];let c=null,l=!1,d=!1;const f=o*2;function p(){if(u.length===0)return;const g=u.splice(0);for(const b of g)try{i(b)}catch{}}function y(){d||(d=!0,setTimeout(()=>{d=!1,p()},0))}function m(){c!==null||l||(c=setInterval(()=>{p()},s))}const v=g=>{l||(u.length>=f&&u.shift(),u.push(g),u.length>=o?y():c===null&&m())};return v[Symbol.dispose]=()=>{l=!0,c!==null&&(clearInterval(c),c=null),p()},v}Fp();const Ap="warning";var Si=function(e,t){return Si=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Si(e,t)};function Ee(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Si(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var _=function(){return _=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},_.apply(this,arguments)};function Ne(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function ze(e,t,n,r){function i(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function s(l){try{c(r.next(l))}catch(d){o(d)}}function u(l){try{c(r.throw(l))}catch(d){o(d)}}function c(l){l.done?a(l.value):i(l.value).then(s,u)}c((r=r.apply(e,t||[])).next())})}function Qe(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(c){return function(l){return u([c,l])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(n=0)),n;)try{if(r=1,i&&(a=c[0]&2?i.return:c[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,c[1])).done)return a;switch(i=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){n.label=c[1];break}if(c[0]===6&&n.label<a[1]){n.label=a[1],a=c;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(c);break}a[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(l){c=[6,l],i=0}finally{r=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function me(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}typeof SuppressedError=="function"&&SuppressedError;var _i="Invariant Violation",Ss=Object.setPrototypeOf,$p=Ss===void 0?function(e,t){return e.__proto__=t,e}:Ss,_s=(function(e){Ee(t,e);function t(n){n===void 0&&(n=_i);var r=e.call(this,typeof n=="number"?_i+": "+n+" (see https://github.com/apollographql/invariant-packages)":n)||this;return r.framesToPop=1,r.name=_i,$p(r,t.prototype),r}return t})(Error);function ct(e,t){if(!e)throw new _s(t)}var Es=["debug","log","warn","error","silent"],Pp=Es.indexOf("log");function Gn(e){return function(){if(Es.indexOf(e)>=Pp){var t=console[e]||console.log;return t.apply(console,arguments)}}}(function(e){e.debug=Gn("debug"),e.log=Gn("log"),e.warn=Gn("warn"),e.error=Gn("error")})(ct||(ct={}));var Ei="3.13.9";function De(e){try{return e()}catch{}}const Di=De(function(){return globalThis})||De(function(){return window})||De(function(){return self})||De(function(){return global})||De(function(){return De.constructor("return this")()});var Ds=new Map;function wi(e){var t=Ds.get(e)||1;return Ds.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function ws(e,t){t===void 0&&(t=0);var n=wi("stringifyForDisplay");return JSON.stringify(e,function(r,i){return i===void 0?n:i},t).split(JSON.stringify(n)).join("<undefined>")}function zn(e){return function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(typeof t=="number"){var i=t;t=Ti(i),t||(t=Ii(i,n),n=[])}e.apply(void 0,[t].concat(n))}}var $=Object.assign(function(t,n){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];t||ct(t,Ti(n,r)||Ii(n,r))},{debug:zn(ct.debug),log:zn(ct.log),warn:zn(ct.warn),error:zn(ct.error)});function ye(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new _s(Ti(e,t)||Ii(e,t))}var Ts=Symbol.for("ApolloErrorMessageHandler_"+Ei);function Is(e){if(typeof e=="string")return e;try{return ws(e,2).slice(0,1e3)}catch{return"<non-serializable>"}}function Ti(e,t){if(t===void 0&&(t=[]),!!e)return Di[Ts]&&Di[Ts](e,t.map(Is))}function Ii(e,t){if(t===void 0&&(t=[]),!!e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:Ei,message:e,args:t.map(Is)})))}function Qn(e,t){if(!!!e)throw new Error(t)}function Np(e){return typeof e=="object"&&e!==null}function Rp(e,t){if(!!!e)throw new Error("Unexpected invariant triggered.")}const Mp=/\r\n|[\n\r]/g;function Oi(e,t){let n=0,r=1;for(const i of e.body.matchAll(Mp)){if(typeof i.index=="number"||Rp(!1),i.index>=t)break;n=i.index+i[0].length,r+=1}return{line:r,column:t+1-n}}function Lp(e){return Os(e.source,Oi(e.source,e.start))}function Os(e,t){const n=e.locationOffset.column-1,r="".padStart(n)+e.body,i=t.line-1,a=e.locationOffset.line-1,o=t.line+a,s=t.line===1?n:0,u=t.column+s,c=`${e.name}:${o}:${u}
`,l=r.split(/\r\n|[\n\r]/g),d=l[i];if(d.length>120){const f=Math.floor(u/80),p=u%80,y=[];for(let m=0;m<d.length;m+=80)y.push(d.slice(m,m+80));return c+ks([[`${o} |`,y[0]],...y.slice(1,f+1).map(m=>["|",m]),["|","^".padStart(p)],["|",y[f+1]]])}return c+ks([[`${o-1} |`,l[i-1]],[`${o} |`,d],["|","^".padStart(u)],[`${o+1} |`,l[i+1]]])}function ks(e){const t=e.filter(([r,i])=>i!==void 0),n=Math.max(...t.map(([r])=>r.length));return t.map(([r,i])=>r.padStart(n)+(i?" "+i:"")).join(`
`)}function jp(e){const t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}class ki extends Error{constructor(t,...n){var r,i,a;const{nodes:o,source:s,positions:u,path:c,originalError:l,extensions:d}=jp(n);super(t),this.name="GraphQLError",this.path=c??void 0,this.originalError=l??void 0,this.nodes=xs(Array.isArray(o)?o:o?[o]:void 0);const f=xs((r=this.nodes)===null||r===void 0?void 0:r.map(y=>y.loc).filter(y=>y!=null));this.source=s??(f==null||(i=f[0])===null||i===void 0?void 0:i.source),this.positions=u??f?.map(y=>y.start),this.locations=u&&s?u.map(y=>Oi(s,y)):f?.map(y=>Oi(y.source,y.start));const p=Np(l?.extensions)?l?.extensions:void 0;this.extensions=(a=d??p)!==null&&a!==void 0?a:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),l!=null&&l.stack?Object.defineProperty(this,"stack",{value:l.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,ki):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(t+=`

`+Lp(n.loc));else if(this.source&&this.locations)for(const n of this.locations)t+=`

`+Os(this.source,n);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}}function xs(e){return e===void 0||e.length===0?void 0:e}function ce(e,t,n){return new ki(`Syntax Error: ${n}`,{source:e,positions:[t]})}class qp{constructor(t,n,r){this.start=t.start,this.end=n.end,this.startToken=t,this.endToken=n,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Cs{constructor(t,n,r,i,a,o){this.kind=t,this.start=n,this.end=r,this.line=i,this.column=a,this.value=o,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Fs={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","directives","locations"],SchemaExtension:["directives","operationTypes"],DirectiveExtension:["name","directives"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},Up=new Set(Object.keys(Fs));function As(e){const t=e?.kind;return typeof t=="string"&&Up.has(t)}var Tt;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(Tt||(Tt={}));var xi;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION",e.DIRECTIVE_DEFINITION="DIRECTIVE_DEFINITION"})(xi||(xi={}));var x;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.DIRECTIVE_EXTENSION="DirectiveExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",e.TYPE_COORDINATE="TypeCoordinate",e.MEMBER_COORDINATE="MemberCoordinate",e.ARGUMENT_COORDINATE="ArgumentCoordinate",e.DIRECTIVE_COORDINATE="DirectiveCoordinate",e.DIRECTIVE_ARGUMENT_COORDINATE="DirectiveArgumentCoordinate"})(x||(x={}));function Ci(e){return e===9||e===32}function on(e){return e>=48&&e<=57}function $s(e){return e>=97&&e<=122||e>=65&&e<=90}function Ps(e){return $s(e)||e===95}function Vp(e){return $s(e)||on(e)||e===95}function Bp(e){var t;let n=Number.MAX_SAFE_INTEGER,r=null,i=-1;for(let o=0;o<e.length;++o){var a;const s=e[o],u=Gp(s);u!==s.length&&(r=(a=r)!==null&&a!==void 0?a:o,i=o,o!==0&&u<n&&(n=u))}return e.map((o,s)=>s===0?o:o.slice(n)).slice((t=r)!==null&&t!==void 0?t:0,i+1)}function Gp(e){let t=0;for(;t<e.length&&Ci(e.charCodeAt(t));)++t;return t}function zp(e,t){const n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),i=r.length===1,a=r.length>1&&r.slice(1).every(p=>p.length===0||Ci(p.charCodeAt(0))),o=n.endsWith('\\"""'),s=e.endsWith('"')&&!o,u=e.endsWith("\\"),c=s||u,l=!i||e.length>70||c||a||o;let d="";const f=i&&Ci(e.charCodeAt(0));return(l&&!f||a)&&(d+=`
`),d+=n,(l||c)&&(d+=`
`),'"""'+d+'"""'}var w;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.DOT=".",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(w||(w={}));class Qp{constructor(t){const n=new Cs(w.SOF,0,0,0,0);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==w.EOF)do if(t.next)t=t.next;else{const n=Hp(this,t.end);t.next=n,n.prev=t,t=n}while(t.kind===w.COMMENT);return t}}function Wp(e){return e===w.BANG||e===w.DOLLAR||e===w.AMP||e===w.PAREN_L||e===w.PAREN_R||e===w.DOT||e===w.SPREAD||e===w.COLON||e===w.EQUALS||e===w.AT||e===w.BRACKET_L||e===w.BRACKET_R||e===w.BRACE_L||e===w.PIPE||e===w.BRACE_R}function It(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function Wn(e,t){return Ns(e.charCodeAt(t))&&Rs(e.charCodeAt(t+1))}function Ns(e){return e>=55296&&e<=56319}function Rs(e){return e>=56320&&e<=57343}function lt(e,t){const n=e.source.body.codePointAt(t);if(n===void 0)return w.EOF;if(n>=32&&n<=126){const r=String.fromCodePoint(n);return r==='"'?`'"'`:`"${r}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function ue(e,t,n,r,i){const a=e.line,o=1+n-e.lineStart;return new Cs(t,n,r,a,o,i)}function Hp(e,t){const n=e.source.body,r=n.length;let i=t;for(;i<r;){const a=n.charCodeAt(i);switch(a){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++e.line,e.lineStart=i;continue;case 13:n.charCodeAt(i+1)===10?i+=2:++i,++e.line,e.lineStart=i;continue;case 35:return Yp(e,i);case 33:return ue(e,w.BANG,i,i+1);case 36:return ue(e,w.DOLLAR,i,i+1);case 38:return ue(e,w.AMP,i,i+1);case 40:return ue(e,w.PAREN_L,i,i+1);case 41:return ue(e,w.PAREN_R,i,i+1);case 46:if(n.charCodeAt(i+1)===46&&n.charCodeAt(i+2)===46)return ue(e,w.SPREAD,i,i+3);break;case 58:return ue(e,w.COLON,i,i+1);case 61:return ue(e,w.EQUALS,i,i+1);case 64:return ue(e,w.AT,i,i+1);case 91:return ue(e,w.BRACKET_L,i,i+1);case 93:return ue(e,w.BRACKET_R,i,i+1);case 123:return ue(e,w.BRACE_L,i,i+1);case 124:return ue(e,w.PIPE,i,i+1);case 125:return ue(e,w.BRACE_R,i,i+1);case 34:return n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34?th(e,i):Xp(e,i)}if(on(a)||a===45)return Jp(e,i,a);if(Ps(a))return nh(e,i);throw ce(e.source,i,a===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:It(a)||Wn(n,i)?`Unexpected character: ${lt(e,i)}.`:`Invalid character: ${lt(e,i)}.`)}return ue(e,w.EOF,r,r)}function Yp(e,t){const n=e.source.body,r=n.length;let i=t+1;for(;i<r;){const a=n.charCodeAt(i);if(a===10||a===13)break;if(It(a))++i;else if(Wn(n,i))i+=2;else break}return ue(e,w.COMMENT,t,i,n.slice(t+1,i))}function Jp(e,t,n){const r=e.source.body;let i=t,a=n,o=!1;if(a===45&&(a=r.charCodeAt(++i)),a===48){if(a=r.charCodeAt(++i),on(a))throw ce(e.source,i,`Invalid number, unexpected digit after 0: ${lt(e,i)}.`)}else i=Fi(e,i,a),a=r.charCodeAt(i);if(a===46&&(o=!0,a=r.charCodeAt(++i),i=Fi(e,i,a),a=r.charCodeAt(i)),(a===69||a===101)&&(o=!0,a=r.charCodeAt(++i),(a===43||a===45)&&(a=r.charCodeAt(++i)),i=Fi(e,i,a),a=r.charCodeAt(i)),a===46||Ps(a))throw ce(e.source,i,`Invalid number, expected digit but got: ${lt(e,i)}.`);return ue(e,o?w.FLOAT:w.INT,t,i,r.slice(t,i))}function Fi(e,t,n){if(!on(n))throw ce(e.source,t,`Invalid number, expected digit but got: ${lt(e,t)}.`);const r=e.source.body;let i=t+1;for(;on(r.charCodeAt(i));)++i;return i}function Xp(e,t){const n=e.source.body,r=n.length;let i=t+1,a=i,o="";for(;i<r;){const s=n.charCodeAt(i);if(s===34)return o+=n.slice(a,i),ue(e,w.STRING,t,i+1,o);if(s===92){o+=n.slice(a,i);const u=n.charCodeAt(i+1)===117?n.charCodeAt(i+2)===123?Kp(e,i):Zp(e,i):eh(e,i);o+=u.value,i+=u.size,a=i;continue}if(s===10||s===13)break;if(It(s))++i;else if(Wn(n,i))i+=2;else throw ce(e.source,i,`Invalid character within String: ${lt(e,i)}.`)}throw ce(e.source,i,"Unterminated string.")}function Kp(e,t){const n=e.source.body;let r=0,i=3;for(;i<12;){const a=n.charCodeAt(t+i++);if(a===125){if(i<5||!It(r))break;return{value:String.fromCodePoint(r),size:i}}if(r=r<<4|sn(a),r<0)break}throw ce(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+i)}".`)}function Zp(e,t){const n=e.source.body,r=Ms(n,t+2);if(It(r))return{value:String.fromCodePoint(r),size:6};if(Ns(r)&&n.charCodeAt(t+6)===92&&n.charCodeAt(t+7)===117){const i=Ms(n,t+8);if(Rs(i))return{value:String.fromCodePoint(r,i),size:12}}throw ce(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function Ms(e,t){return sn(e.charCodeAt(t))<<12|sn(e.charCodeAt(t+1))<<8|sn(e.charCodeAt(t+2))<<4|sn(e.charCodeAt(t+3))}function sn(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function eh(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw ce(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function th(e,t){const n=e.source.body,r=n.length;let i=e.lineStart,a=t+3,o=a,s="";const u=[];for(;a<r;){const c=n.charCodeAt(a);if(c===34&&n.charCodeAt(a+1)===34&&n.charCodeAt(a+2)===34){s+=n.slice(o,a),u.push(s);const l=ue(e,w.BLOCK_STRING,t,a+3,Bp(u).join(`
`));return e.line+=u.length-1,e.lineStart=i,l}if(c===92&&n.charCodeAt(a+1)===34&&n.charCodeAt(a+2)===34&&n.charCodeAt(a+3)===34){s+=n.slice(o,a),o=a+1,a+=4;continue}if(c===10||c===13){s+=n.slice(o,a),u.push(s),c===13&&n.charCodeAt(a+1)===10?a+=2:++a,s="",o=a,i=a;continue}if(It(c))++a;else if(Wn(n,a))a+=2;else throw ce(e.source,a,`Invalid character within String: ${lt(e,a)}.`)}throw ce(e.source,a,"Unterminated string.")}function nh(e,t){const n=e.source.body,r=n.length;let i=t+1;for(;i<r;){const a=n.charCodeAt(i);if(Vp(a))++i;else break}return ue(e,w.NAME,t,i,n.slice(t,i))}const rh=10,Ls=2;function Ai(e){return Hn(e,[])}function Hn(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return ih(e,t);default:return String(e)}}function ih(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(ah(e)){const r=e.toJSON();if(r!==e)return typeof r=="string"?r:Hn(r,n)}else if(Array.isArray(e))return sh(e,n);return oh(e,n)}function ah(e){return typeof e.toJSON=="function"}function oh(e,t){const n=Object.entries(e);return n.length===0?"{}":t.length>Ls?"["+uh(e)+"]":"{ "+n.map(([i,a])=>i+": "+Hn(a,t)).join(", ")+" }"}function sh(e,t){if(e.length===0)return"[]";if(t.length>Ls)return"[Array]";const n=Math.min(rh,e.length),r=e.length-n,i=[];for(let a=0;a<n;++a)i.push(Hn(e[a],t));return r===1?i.push("... 1 more item"):r>1&&i.push(`... ${r} more items`),"["+i.join(", ")+"]"}function uh(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}const ch=globalThis.process&&!0?function(t,n){return t instanceof n}:function(t,n){if(t instanceof n)return!0;if(typeof t=="object"&&t!==null){var r;const i=n.prototype[Symbol.toStringTag],a=Symbol.toStringTag in t?t[Symbol.toStringTag]:(r=t.constructor)===null||r===void 0?void 0:r.name;if(i===a){const o=Ai(t);throw new Error(`Cannot use ${i} "${o}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class js{constructor(t,n="GraphQL request",r={line:1,column:1}){typeof t=="string"||Qn(!1,`Body must be a string. Received: ${Ai(t)}.`),this.body=t,this.name=n,this.locationOffset=r,this.locationOffset.line>0||Qn(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||Qn(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function lh(e){return ch(e,js)}function fh(e,t){const n=new dh(e,t),r=n.parseDocument();return Object.defineProperty(r,"tokenCount",{enumerable:!1,value:n.tokenCount}),r}class dh{constructor(t,n={}){const{lexer:r,...i}=n;if(r)this._lexer=r;else{const a=lh(t)?t:new js(t);this._lexer=new Qp(a)}this._options=i,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){const t=this.expectToken(w.NAME);return this.node(t,{kind:x.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:x.DOCUMENT,definitions:this.many(w.SOF,this.parseDefinition,w.EOF)})}parseDefinition(){if(this.peek(w.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),n=t?this._lexer.lookahead():this._lexer.token;if(t&&n.kind===w.BRACE_L)throw ce(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are not supported on shorthand queries.");if(n.kind===w.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition()}if(t)throw ce(this._lexer.source,this._lexer.token.start,"Unexpected description, only GraphQL definitions support descriptions.");switch(n.value){case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(w.BRACE_L))return this.node(t,{kind:x.OPERATION_DEFINITION,operation:Tt.QUERY,description:void 0,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const n=this.parseDescription(),r=this.parseOperationType();let i;return this.peek(w.NAME)&&(i=this.parseName()),this.node(t,{kind:x.OPERATION_DEFINITION,operation:r,description:n,name:i,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(w.NAME);switch(t.value){case"query":return Tt.QUERY;case"mutation":return Tt.MUTATION;case"subscription":return Tt.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(w.PAREN_L,this.parseVariableDefinition,w.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:x.VARIABLE_DEFINITION,description:this.parseDescription(),variable:this.parseVariable(),type:(this.expectToken(w.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(w.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(w.DOLLAR),this.node(t,{kind:x.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:x.SELECTION_SET,selections:this.many(w.BRACE_L,this.parseSelection,w.BRACE_R)})}parseSelection(){return this.peek(w.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,n=this.parseName();let r,i;return this.expectOptionalToken(w.COLON)?(r=n,i=this.parseName()):i=n,this.node(t,{kind:x.FIELD,alias:r,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(w.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){const n=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(w.PAREN_L,n,w.PAREN_R)}parseArgument(t=!1){const n=this._lexer.token,r=this.parseName();return this.expectToken(w.COLON),this.node(n,{kind:x.ARGUMENT,name:r,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(w.SPREAD);const n=this.expectOptionalKeyword("on");return!n&&this.peek(w.NAME)?this.node(t,{kind:x.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:x.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const t=this._lexer.token,n=this.parseDescription();return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:x.FRAGMENT_DEFINITION,description:n,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:x.FRAGMENT_DEFINITION,description:n,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){const n=this._lexer.token;switch(n.kind){case w.BRACKET_L:return this.parseList(t);case w.BRACE_L:return this.parseObject(t);case w.INT:return this.advanceLexer(),this.node(n,{kind:x.INT,value:n.value});case w.FLOAT:return this.advanceLexer(),this.node(n,{kind:x.FLOAT,value:n.value});case w.STRING:case w.BLOCK_STRING:return this.parseStringLiteral();case w.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:x.BOOLEAN,value:!0});case"false":return this.node(n,{kind:x.BOOLEAN,value:!1});case"null":return this.node(n,{kind:x.NULL});default:return this.node(n,{kind:x.ENUM,value:n.value})}case w.DOLLAR:if(t)if(this.expectToken(w.DOLLAR),this._lexer.token.kind===w.NAME){const r=this._lexer.token.value;throw ce(this._lexer.source,n.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:x.STRING,value:t.value,block:t.kind===w.BLOCK_STRING})}parseList(t){const n=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:x.LIST,values:this.any(w.BRACKET_L,n,w.BRACKET_R)})}parseObject(t){const n=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:x.OBJECT,fields:this.any(w.BRACE_L,n,w.BRACE_R)})}parseObjectField(t){const n=this._lexer.token,r=this.parseName();return this.expectToken(w.COLON),this.node(n,{kind:x.OBJECT_FIELD,name:r,value:this.parseValueLiteral(t)})}parseDirectives(t){const n=[];for(;this.peek(w.AT);)n.push(this.parseDirective(t));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const n=this._lexer.token;return this.expectToken(w.AT),this.node(n,{kind:x.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let n;if(this.expectOptionalToken(w.BRACKET_L)){const r=this.parseTypeReference();this.expectToken(w.BRACKET_R),n=this.node(t,{kind:x.LIST_TYPE,type:r})}else n=this.parseNamedType();return this.expectOptionalToken(w.BANG)?this.node(t,{kind:x.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:x.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(w.STRING)||this.peek(w.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");const r=this.parseConstDirectives(),i=this.many(w.BRACE_L,this.parseOperationTypeDefinition,w.BRACE_R);return this.node(t,{kind:x.SCHEMA_DEFINITION,description:n,directives:r,operationTypes:i})}parseOperationTypeDefinition(){const t=this._lexer.token,n=this.parseOperationType();this.expectToken(w.COLON);const r=this.parseNamedType();return this.node(t,{kind:x.OPERATION_TYPE_DEFINITION,operation:n,type:r})}parseScalarTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");const r=this.parseName(),i=this.parseConstDirectives();return this.node(t,{kind:x.SCALAR_TYPE_DEFINITION,description:n,name:r,directives:i})}parseObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");const r=this.parseName(),i=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(t,{kind:x.OBJECT_TYPE_DEFINITION,description:n,name:r,interfaces:i,directives:a,fields:o})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(w.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(w.BRACE_L,this.parseFieldDefinition,w.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseName(),i=this.parseArgumentDefs();this.expectToken(w.COLON);const a=this.parseTypeReference(),o=this.parseConstDirectives();return this.node(t,{kind:x.FIELD_DEFINITION,description:n,name:r,arguments:i,type:a,directives:o})}parseArgumentDefs(){return this.optionalMany(w.PAREN_L,this.parseInputValueDef,w.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseName();this.expectToken(w.COLON);const i=this.parseTypeReference();let a;this.expectOptionalToken(w.EQUALS)&&(a=this.parseConstValueLiteral());const o=this.parseConstDirectives();return this.node(t,{kind:x.INPUT_VALUE_DEFINITION,description:n,name:r,type:i,defaultValue:a,directives:o})}parseInterfaceTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");const r=this.parseName(),i=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(t,{kind:x.INTERFACE_TYPE_DEFINITION,description:n,name:r,interfaces:i,directives:a,fields:o})}parseUnionTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");const r=this.parseName(),i=this.parseConstDirectives(),a=this.parseUnionMemberTypes();return this.node(t,{kind:x.UNION_TYPE_DEFINITION,description:n,name:r,directives:i,types:a})}parseUnionMemberTypes(){return this.expectOptionalToken(w.EQUALS)?this.delimitedMany(w.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");const r=this.parseName(),i=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();return this.node(t,{kind:x.ENUM_TYPE_DEFINITION,description:n,name:r,directives:i,values:a})}parseEnumValuesDefinition(){return this.optionalMany(w.BRACE_L,this.parseEnumValueDefinition,w.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(t,{kind:x.ENUM_VALUE_DEFINITION,description:n,name:r,directives:i})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw ce(this._lexer.source,this._lexer.token.start,`${Yn(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");const r=this.parseName(),i=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();return this.node(t,{kind:x.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:r,directives:i,fields:a})}parseInputFieldsDefinition(){return this.optionalMany(w.BRACE_L,this.parseInputValueDef,w.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===w.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension();case"directive":if(this._options.experimentalDirectivesOnDirectiveDefinitions)return this.parseDirectiveDefinitionExtension();break}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const n=this.parseConstDirectives(),r=this.optionalMany(w.BRACE_L,this.parseOperationTypeDefinition,w.BRACE_R);if(n.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:x.SCHEMA_EXTENSION,directives:n,operationTypes:r})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const n=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(t,{kind:x.SCALAR_TYPE_EXTENSION,name:n,directives:r})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(r.length===0&&i.length===0&&a.length===0)throw this.unexpected();return this.node(t,{kind:x.OBJECT_TYPE_EXTENSION,name:n,interfaces:r,directives:i,fields:a})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(r.length===0&&i.length===0&&a.length===0)throw this.unexpected();return this.node(t,{kind:x.INTERFACE_TYPE_EXTENSION,name:n,interfaces:r,directives:i,fields:a})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:x.UNION_TYPE_EXTENSION,name:n,directives:r,types:i})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:x.ENUM_TYPE_EXTENSION,name:n,directives:r,values:i})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:x.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:r,fields:i})}parseDirectiveDefinitionExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("directive"),this.expectToken(w.AT);const n=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(t,{kind:x.DIRECTIVE_EXTENSION,name:n,directives:r})}parseDirectiveDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(w.AT);const r=this.parseName(),i=this.parseArgumentDefs(),a=this._options.experimentalDirectivesOnDirectiveDefinitions?this.parseConstDirectives():[],o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const s=this.parseDirectiveLocations();return this.node(t,{kind:x.DIRECTIVE_DEFINITION,description:n,name:r,arguments:i,directives:a,repeatable:o,locations:s})}parseDirectiveLocations(){return this.delimitedMany(w.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(xi,n.value))return n;throw this.unexpected(t)}parseSchemaCoordinate(){const t=this._lexer.token,n=this.expectOptionalToken(w.AT),r=this.parseName();let i;!n&&this.expectOptionalToken(w.DOT)&&(i=this.parseName());let a;return(n||i)&&this.expectOptionalToken(w.PAREN_L)&&(a=this.parseName(),this.expectToken(w.COLON),this.expectToken(w.PAREN_R)),n?a?this.node(t,{kind:x.DIRECTIVE_ARGUMENT_COORDINATE,name:r,argumentName:a}):this.node(t,{kind:x.DIRECTIVE_COORDINATE,name:r}):i?a?this.node(t,{kind:x.ARGUMENT_COORDINATE,name:r,fieldName:i,argumentName:a}):this.node(t,{kind:x.MEMBER_COORDINATE,name:r,memberName:i}):this.node(t,{kind:x.TYPE_COORDINATE,name:r})}node(t,n){return this._options.noLocation!==!0&&(n.loc=new qp(t,this._lexer.lastToken,this._lexer.source)),n}peek(t){return this._lexer.token.kind===t}expectToken(t){const n=this._lexer.token;if(n.kind===t)return this.advanceLexer(),n;throw ce(this._lexer.source,n.start,`Expected ${qs(t)}, found ${Yn(n)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){const n=this._lexer.token;if(n.kind===w.NAME&&n.value===t)this.advanceLexer();else throw ce(this._lexer.source,n.start,`Expected "${t}", found ${Yn(n)}.`)}expectOptionalKeyword(t){const n=this._lexer.token;return n.kind===w.NAME&&n.value===t?(this.advanceLexer(),!0):!1}unexpected(t){const n=t??this._lexer.token;return ce(this._lexer.source,n.start,`Unexpected ${Yn(n)}.`)}any(t,n,r){this.expectToken(t);const i=[];for(;!this.expectOptionalToken(r);)i.push(n.call(this));return i}optionalMany(t,n,r){if(this.expectOptionalToken(t)){const i=[];do i.push(n.call(this));while(!this.expectOptionalToken(r));return i}return[]}many(t,n,r){this.expectToken(t);const i=[];do i.push(n.call(this));while(!this.expectOptionalToken(r));return i}delimitedMany(t,n){this.expectOptionalToken(t);const r=[];do r.push(n.call(this));while(this.expectOptionalToken(t));return r}advanceLexer(){const{maxTokens:t}=this._options,n=this._lexer.advance();if(n.kind!==w.EOF&&(++this._tokenCounter,t!==void 0&&this._tokenCounter>t))throw ce(this._lexer.source,n.start,`Document contains more that ${t} tokens. Parsing aborted.`)}}function Yn(e){const t=e.value;return qs(e.kind)+(t!=null?` "${t}"`:"")}function qs(e){return Wp(e)?`"${e}"`:e}function ph(e){return`"${e.replace(hh,mh)}"`}const hh=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function mh(e){return gh[e.charCodeAt(0)]}const gh=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],Jn=Object.freeze({});function we(e,t,n=Fs){const r=new Map;for(const g of Object.values(x))r.set(g,yh(t,g));let i,a=Array.isArray(e),o=[e],s=-1,u=[],c=e,l,d;const f=[],p=[];do{s++;const g=s===o.length,b=g&&u.length!==0;if(g){if(l=p.length===0?void 0:f[f.length-1],c=d,d=p.pop(),b)if(a){c=c.slice();let D=0;for(const[I,O]of u){const C=I-D;O===null?(c.splice(C,1),D++):c[C]=O}}else{c={...c};for(const[D,I]of u)c[D]=I}s=i.index,o=i.keys,u=i.edits,a=i.inArray,i=i.prev}else if(d){if(l=a?s:o[s],c=d[l],c==null)continue;f.push(l)}let E;if(!Array.isArray(c)){var y,m;As(c)||Qn(!1,`Invalid AST Node: ${Ai(c)}.`);const D=g?(y=r.get(c.kind))===null||y===void 0?void 0:y.leave:(m=r.get(c.kind))===null||m===void 0?void 0:m.enter;if(E=D?.call(t,c,l,d,f,p),E===Jn)break;if(E===!1){if(!g){f.pop();continue}}else if(E!==void 0&&(u.push([l,E]),!g))if(As(E))c=E;else{f.pop();continue}}if(E===void 0&&b&&u.push([l,c]),g)f.pop();else{var v;i={inArray:a,index:s,keys:o,edits:u,prev:i},a=Array.isArray(c),o=a?c:(v=n[c.kind])!==null&&v!==void 0?v:[],s=-1,u=[],d&&p.push(d),d=c}}while(i!==void 0);return u.length!==0?u[u.length-1][1]:e}function yh(e,t){const n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function vh(e){return we(e,Sh)}const bh=80,Sh={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>A(e.definitions,`

`)},OperationDefinition:{leave(e){const t=$i(e.variableDefinitions)?j(`(
`,A(e.variableDefinitions,`
`),`
)`):j("(",A(e.variableDefinitions,", "),")"),n=j("",e.description,`
`)+A([e.operation,A([e.name,t]),A(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r,description:i})=>j("",i,`
`)+e+": "+t+j(" = ",n)+j(" ",A(r," "))},SelectionSet:{leave:({selections:e})=>Te(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:i}){const a=j("",e,": ")+t;let o=a+j("(",A(n,", "),")");return o.length>bh&&(o=a+j(`(
`,Xn(A(n,`
`)),`
)`)),A([o,A(r," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+j(" ",A(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>A(["...",j("on ",e),A(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:i,description:a})=>j("",a,`
`)+`fragment ${e}${j("(",A(n,", "),")")} on ${t} ${j("",A(r," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?zp(e):ph(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+A(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+A(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+j("(",A(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>j("",e,`
`)+A(["schema",A(t," "),Te(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>j("",e,`
`)+A(["scalar",t,A(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>j("",e,`
`)+A(["type",t,j("implements ",A(n," & ")),A(r," "),Te(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:i})=>j("",e,`
`)+t+($i(n)?j(`(
`,Xn(A(n,`
`)),`
)`):j("(",A(n,", "),")"))+": "+r+j(" ",A(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:i})=>j("",e,`
`)+A([t+": "+n,j("= ",r),A(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>j("",e,`
`)+A(["interface",t,j("implements ",A(n," & ")),A(r," "),Te(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>j("",e,`
`)+A(["union",t,A(n," "),j("= ",A(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>j("",e,`
`)+A(["enum",t,A(n," "),Te(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>j("",e,`
`)+A([t,A(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>j("",e,`
`)+A(["input",t,A(n," "),Te(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,directives:r,repeatable:i,locations:a})=>j("",e,`
`)+"directive @"+t+($i(n)?j(`(
`,Xn(A(n,`
`)),`
)`):j("(",A(n,", "),")"))+j(" ",A(r," "))+(i?" repeatable":"")+" on "+A(a," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>A(["extend schema",A(e," "),Te(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>A(["extend scalar",e,A(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>A(["extend type",e,j("implements ",A(t," & ")),A(n," "),Te(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>A(["extend interface",e,j("implements ",A(t," & ")),A(n," "),Te(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>A(["extend union",e,A(t," "),j("= ",A(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>A(["extend enum",e,A(t," "),Te(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>A(["extend input",e,A(t," "),Te(n)]," ")},DirectiveExtension:{leave:({name:e,directives:t})=>A(["extend directive @"+e,A(t," ")]," ")},TypeCoordinate:{leave:({name:e})=>e},MemberCoordinate:{leave:({name:e,memberName:t})=>A([e,j(".",t)])},ArgumentCoordinate:{leave:({name:e,fieldName:t,argumentName:n})=>A([e,j(".",t),j("(",n,":)")])},DirectiveCoordinate:{leave:({name:e})=>A(["@",e])},DirectiveArgumentCoordinate:{leave:({name:e,argumentName:t})=>A(["@",e,j("(",t,":)")])}};function A(e,t=""){var n;return(n=e?.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function Te(e){return j(`{
`,Xn(A(e,`
`)),`
}`)}function j(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function Xn(e){return j("  ",e.replace(/\n/g,`
  `))}function $i(e){var t;return(t=e?.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}function Us(e){return e.kind===x.FIELD||e.kind===x.FRAGMENT_SPREAD||e.kind===x.INLINE_FRAGMENT}function un(e,t){var n=e.directives;return!n||!n.length?!0:Dh(n).every(function(r){var i=r.directive,a=r.ifArgument,o=!1;return a.value.kind==="Variable"?(o=t&&t[a.value.name.value],$(o!==void 0,78,i.name.value)):o=a.value.value,i.name.value==="skip"?!o:o})}function cn(e,t,n){var r=new Set(e),i=r.size;return we(t,{Directive:function(a){if(r.delete(a.name.value)&&(!n||!r.size))return Jn}}),n?!r.size:r.size<i}function _h(e){return e&&cn(["client","export"],e,!0)}function Eh(e){var t=e.name.value;return t==="skip"||t==="include"}function Dh(e){var t=[];return e&&e.length&&e.forEach(function(n){if(Eh(n)){var r=n.arguments,i=n.name.value;$(r&&r.length===1,79,i);var a=r[0];$(a.name&&a.name.value==="if",80,i);var o=a.value;$(o&&(o.kind==="Variable"||o.kind==="BooleanValue"),81,i),t.push({directive:n,ifArgument:a})}}),t}function wh(e){var t,n,r=(t=e.directives)===null||t===void 0?void 0:t.find(function(a){var o=a.name;return o.value==="unmask"});if(!r)return"mask";var i=(n=r.arguments)===null||n===void 0?void 0:n.find(function(a){var o=a.name;return o.value==="mode"});return globalThis.__DEV__!==!1&&i&&(i.value.kind===x.VARIABLE?globalThis.__DEV__!==!1&&$.warn(82):i.value.kind!==x.STRING?globalThis.__DEV__!==!1&&$.warn(83):i.value.value!=="migrate"&&globalThis.__DEV__!==!1&&$.warn(84,i.value.value)),i&&"value"in i.value&&i.value.value==="migrate"?"migrate":"unmask"}const Th=()=>Object.create(null),{forEach:Ih,slice:Vs}=Array.prototype,{hasOwnProperty:Oh}=Object.prototype;class Re{constructor(t=!0,n=Th){this.weakness=t,this.makeData=n}lookup(){return this.lookupArray(arguments)}lookupArray(t){let n=this;return Ih.call(t,r=>n=n.getChildTrie(r)),Oh.call(n,"data")?n.data:n.data=this.makeData(Vs.call(t))}peek(){return this.peekArray(arguments)}peekArray(t){let n=this;for(let r=0,i=t.length;n&&r<i;++r){const a=n.mapFor(t[r],!1);n=a&&a.get(t[r])}return n&&n.data}remove(){return this.removeArray(arguments)}removeArray(t){let n;if(t.length){const r=t[0],i=this.mapFor(r,!1),a=i&&i.get(r);a&&(n=a.removeArray(Vs.call(t,1)),!a.data&&!a.weak&&!(a.strong&&a.strong.size)&&i.delete(r))}else n=this.data,delete this.data;return n}getChildTrie(t){const n=this.mapFor(t,!0);let r=n.get(t);return r||n.set(t,r=new Re(this.weakness,this.makeData)),r}mapFor(t,n){return this.weakness&&kh(t)?this.weak||(n?this.weak=new WeakMap:void 0):this.strong||(n?this.strong=new Map:void 0)}}function kh(e){switch(typeof e){case"object":if(e===null)break;case"function":return!0}return!1}var xh=De(function(){return navigator.product})=="ReactNative",ft=typeof WeakMap=="function"&&!(xh&&!global.HermesInternal),Pi=typeof WeakSet=="function",Bs=typeof Symbol=="function"&&typeof Symbol.for=="function",Kn=Bs&&Symbol.asyncIterator;De(function(){return window.document.createElement}),De(function(){return navigator.userAgent.indexOf("jsdom")>=0});function ae(e){return e!==null&&typeof e=="object"}function Ch(e,t){var n=t,r=[];e.definitions.forEach(function(a){if(a.kind==="OperationDefinition")throw ye(85,a.operation,a.name?" named '".concat(a.name.value,"'"):"");a.kind==="FragmentDefinition"&&r.push(a)}),typeof n>"u"&&($(r.length===1,86,r.length),n=r[0].name.value);var i=_(_({},e),{definitions:me([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:n}}]}}],e.definitions,!0)});return i}function Ot(e){e===void 0&&(e=[]);var t={};return e.forEach(function(n){t[n.name.value]=n}),t}function Zn(e,t){switch(e.kind){case"InlineFragment":return e;case"FragmentSpread":{var n=e.name.value;if(typeof t=="function")return t(n);var r=t&&t[n];return $(r,87,n),r||null}default:return null}}function Fh(e){var t=!0;return we(e,{FragmentSpread:function(n){if(t=!!n.directives&&n.directives.some(function(r){return r.name.value==="unmask"}),!t)return Jn}}),t}function Ah(){}class Ni{constructor(t=1/0,n=Ah){this.max=t,this.dispose=n,this.map=new Map,this.newest=null,this.oldest=null}has(t){return this.map.has(t)}get(t){const n=this.getNode(t);return n&&n.value}get size(){return this.map.size}getNode(t){const n=this.map.get(t);if(n&&n!==this.newest){const{older:r,newer:i}=n;i&&(i.older=r),r&&(r.newer=i),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=i)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(t,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(t){const n=this.map.get(t);return n?(n===this.newest&&(this.newest=n.older),n===this.oldest&&(this.oldest=n.newer),n.newer&&(n.newer.older=n.older),n.older&&(n.older.newer=n.newer),this.map.delete(t),this.dispose(n.value,t),!0):!1}}function Ri(){}const $h=Ri,Ph=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},Nh=typeof WeakMap<"u"?WeakMap:Map,Rh=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:Ri,unregister:Ri}},Mh=10024;class er{constructor(t=1/0,n=$h){this.max=t,this.dispose=n,this.map=new Nh,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{const r=this.unfinalizedNodes.values();for(let i=0;i<Mh;i++){const a=r.next().value;if(!a)break;this.unfinalizedNodes.delete(a);const o=a.key;delete a.key,a.keyRef=new Ph(o),this.registry.register(o,a,a)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new Rh(this.deleteNode.bind(this))}has(t){return this.map.has(t)}get(t){const n=this.getNode(t);return n&&n.value}getNode(t){const n=this.map.get(t);if(n&&n!==this.newest){const{older:r,newer:i}=n;i&&(i.older=r),r&&(r.newer=i),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=i)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(t,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(t){t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.size--;const n=t.key||t.keyRef&&t.keyRef.deref();this.dispose(t.value,n),t.keyRef?this.registry.unregister(t):this.unfinalizedNodes.delete(t),n&&this.map.delete(n)}delete(t){const n=this.map.get(t);return n?(this.deleteNode(n),!0):!1}scheduleFinalization(t){this.unfinalizedNodes.add(t),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}}var Mi=new WeakSet;function Gs(e){e.size<=(e.max||-1)||Mi.has(e)||(Mi.add(e),setTimeout(function(){e.clean(),Mi.delete(e)},100))}var zs=function(e,t){var n=new er(e,t);return n.set=function(r,i){var a=er.prototype.set.call(this,r,i);return Gs(this),a},n},Lh=function(e,t){var n=new Ni(e,t);return n.set=function(r,i){var a=Ni.prototype.set.call(this,r,i);return Gs(this),a},n},jh=Symbol.for("apollo.cacheSize"),Me=_({},Di[jh]),dt={};function Qs(e,t){dt[e]=t}var qh=globalThis.__DEV__!==!1?Gh:void 0,Uh=globalThis.__DEV__!==!1?zh:void 0,Vh=globalThis.__DEV__!==!1?Ws:void 0;function Bh(){var e={parser:1e3,canonicalStringify:1e3,print:2e3,"documentTransform.cache":2e3,"queryManager.getDocumentInfo":2e3,"PersistedQueryLink.persistedQueryHashes":2e3,"fragmentRegistry.transform":2e3,"fragmentRegistry.lookup":1e3,"fragmentRegistry.findFragmentSpreads":4e3,"cache.fragmentQueryDocuments":1e3,"removeTypenameFromVariables.getVariableDefinitions":2e3,"inMemoryCache.maybeBroadcastWatch":5e3,"inMemoryCache.executeSelectionSet":5e4,"inMemoryCache.executeSubSelectedArray":1e4};return Object.fromEntries(Object.entries(e).map(function(t){var n=t[0],r=t[1];return[n,Me[n]||r]}))}function Gh(){var e,t,n,r,i;if(globalThis.__DEV__===!1)throw new Error("only supported in development mode");return{limits:Bh(),sizes:_({print:(e=dt.print)===null||e===void 0?void 0:e.call(dt),parser:(t=dt.parser)===null||t===void 0?void 0:t.call(dt),canonicalStringify:(n=dt.canonicalStringify)===null||n===void 0?void 0:n.call(dt),links:ji(this.link),queryManager:{getDocumentInfo:this.queryManager.transformCache.size,documentTransforms:Ys(this.queryManager.documentTransform)}},(i=(r=this.cache).getMemoryInternals)===null||i===void 0?void 0:i.call(r))}}function Ws(){return{cache:{fragmentQueryDocuments:We(this.getFragmentDoc)}}}function zh(){var e=this.config.fragments;return _(_({},Ws.apply(this)),{addTypenameDocumentTransform:Ys(this.addTypenameTransform),inMemoryCache:{executeSelectionSet:We(this.storeReader.executeSelectionSet),executeSubSelectedArray:We(this.storeReader.executeSubSelectedArray),maybeBroadcastWatch:We(this.maybeBroadcastWatch)},fragmentRegistry:{findFragmentSpreads:We(e?.findFragmentSpreads),lookup:We(e?.lookup),transform:We(e?.transform)}})}function Qh(e){return!!e&&"dirtyKey"in e}function We(e){return Qh(e)?e.size:void 0}function Hs(e){return e!=null}function Ys(e){return Li(e).map(function(t){return{cache:t}})}function Li(e){return e?me(me([We(e?.performWork)],Li(e?.left),!0),Li(e?.right),!0).filter(Hs):[]}function ji(e){var t;return e?me(me([(t=e?.getMemoryInternals)===null||t===void 0?void 0:t.call(e)],ji(e?.left),!0),ji(e?.right),!0).filter(Hs):[]}var He=Object.assign(function(t){return JSON.stringify(t,Wh)},{reset:function(){kt=new Lh(Me.canonicalStringify||1e3)}});globalThis.__DEV__!==!1&&Qs("canonicalStringify",function(){return kt.size});var kt;He.reset();function Wh(e,t){if(t&&typeof t=="object"){var n=Object.getPrototypeOf(t);if(n===Object.prototype||n===null){var r=Object.keys(t);if(r.every(Hh))return t;var i=JSON.stringify(r),a=kt.get(i);if(!a){r.sort();var o=JSON.stringify(r);a=kt.get(o)||r,kt.set(i,a),kt.set(o,a)}var s=Object.create(n);return a.forEach(function(u){s[u]=t[u]}),s}}return t}function Hh(e,t,n){return t===0||n[t-1]<=e}function xt(e){return{__ref:String(e)}}function Q(e){return!!(e&&typeof e=="object"&&typeof e.__ref=="string")}function Yh(e){return ae(e)&&e.kind==="Document"&&Array.isArray(e.definitions)}function Jh(e){return e.kind==="StringValue"}function Xh(e){return e.kind==="BooleanValue"}function Kh(e){return e.kind==="IntValue"}function Zh(e){return e.kind==="FloatValue"}function em(e){return e.kind==="Variable"}function tm(e){return e.kind==="ObjectValue"}function nm(e){return e.kind==="ListValue"}function rm(e){return e.kind==="EnumValue"}function im(e){return e.kind==="NullValue"}function Ct(e,t,n,r){if(Kh(n)||Zh(n))e[t.value]=Number(n.value);else if(Xh(n)||Jh(n))e[t.value]=n.value;else if(tm(n)){var i={};n.fields.map(function(o){return Ct(i,o.name,o.value,r)}),e[t.value]=i}else if(em(n)){var a=(r||{})[n.name.value];e[t.value]=a}else if(nm(n))e[t.value]=n.values.map(function(o){var s={};return Ct(s,t,o,r),s[t.value]});else if(rm(n))e[t.value]=n.value;else if(im(n))e[t.value]=null;else throw ye(96,t.value,n.kind)}function am(e,t){var n=null;e.directives&&(n={},e.directives.forEach(function(i){n[i.name.value]={},i.arguments&&i.arguments.forEach(function(a){var o=a.name,s=a.value;return Ct(n[i.name.value],o,s,t)})}));var r=null;return e.arguments&&e.arguments.length&&(r={},e.arguments.forEach(function(i){var a=i.name,o=i.value;return Ct(r,a,o,t)})),Js(e.name.value,r,n)}var om=["connection","include","skip","client","rest","export","nonreactive"],ln=He,Js=Object.assign(function(e,t,n){if(t&&n&&n.connection&&n.connection.key)if(n.connection.filter&&n.connection.filter.length>0){var r=n.connection.filter?n.connection.filter:[];r.sort();var i={};return r.forEach(function(s){i[s]=t[s]}),"".concat(n.connection.key,"(").concat(ln(i),")")}else return n.connection.key;var a=e;if(t){var o=ln(t);a+="(".concat(o,")")}return n&&Object.keys(n).forEach(function(s){om.indexOf(s)===-1&&(n[s]&&Object.keys(n[s]).length?a+="@".concat(s,"(").concat(ln(n[s]),")"):a+="@".concat(s))}),a},{setStringify:function(e){var t=ln;return ln=e,t}});function tr(e,t){if(e.arguments&&e.arguments.length){var n={};return e.arguments.forEach(function(r){var i=r.name,a=r.value;return Ct(n,i,a,t)}),n}return null}function Le(e){return e.alias?e.alias.value:e.name.value}function qi(e,t,n){for(var r,i=0,a=t.selections;i<a.length;i++){var o=a[i];if(Ye(o)){if(o.name.value==="__typename")return e[Le(o)]}else r?r.push(o):r=[o]}if(typeof e.__typename=="string")return e.__typename;if(r)for(var s=0,u=r;s<u.length;s++){var o=u[s],c=qi(e,Zn(o,n).selectionSet,n);if(typeof c=="string")return c}}function Ye(e){return e.kind==="Field"}function sm(e){return e.kind==="InlineFragment"}function Ft(e){$(e&&e.kind==="Document",88);var t=e.definitions.filter(function(n){return n.kind!=="FragmentDefinition"}).map(function(n){if(n.kind!=="OperationDefinition")throw ye(89,n.kind);return n});return $(t.length<=1,90,t.length),e}function pt(e){return Ft(e),e.definitions.filter(function(t){return t.kind==="OperationDefinition"})[0]}function fn(e){return e.definitions.filter(function(t){return t.kind==="OperationDefinition"&&!!t.name}).map(function(t){return t.name.value})[0]||null}function At(e){return e.definitions.filter(function(t){return t.kind==="FragmentDefinition"})}function Xs(e){var t=pt(e);return $(t&&t.operation==="query",91),t}function Ks(e){$(e.kind==="Document",92),$(e.definitions.length<=1,93);var t=e.definitions[0];return $(t.kind==="FragmentDefinition",94),t}function $t(e){Ft(e);for(var t,n=0,r=e.definitions;n<r.length;n++){var i=r[n];if(i.kind==="OperationDefinition"){var a=i.operation;if(a==="query"||a==="mutation"||a==="subscription")return i}i.kind==="FragmentDefinition"&&!t&&(t=i)}if(t)return t;throw ye(95)}function Ui(e){var t=Object.create(null),n=e&&e.variableDefinitions;return n&&n.length&&n.forEach(function(r){r.defaultValue&&Ct(t,r.variable.name,r.defaultValue)}),t}let de=null;const Zs={};let um=1;const cm=()=>class{constructor(){this.id=["slot",um++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=de;t;t=t.parent)if(this.id in t.slots){const n=t.slots[this.id];if(n===Zs)break;return t!==de&&(de.slots[this.id]=n),!0}return de&&(de.slots[this.id]=Zs),!1}getValue(){if(this.hasValue())return de.slots[this.id]}withValue(t,n,r,i){const a={__proto__:null,[this.id]:t},o=de;de={parent:o,slots:a};try{return n.apply(i,r)}finally{de=o}}static bind(t){const n=de;return function(){const r=de;try{return de=n,t.apply(this,arguments)}finally{de=r}}}static noContext(t,n,r){if(de){const i=de;try{return de=null,t.apply(r,n)}finally{de=i}}else return t.apply(r,n)}};function eu(e){try{return e()}catch{}}const Vi="@wry/context:Slot",tu=eu(()=>globalThis)||eu(()=>global)||Object.create(null),dn=tu[Vi]||Array[Vi]||(function(e){try{Object.defineProperty(tu,Vi,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}})(cm()),{bind:Ky,noContext:Zy}=dn,nr=new dn,{hasOwnProperty:lm}=Object.prototype,Bi=Array.from||function(e){const t=[];return e.forEach(n=>t.push(n)),t};function Gi(e){const{unsubscribe:t}=e;typeof t=="function"&&(e.unsubscribe=void 0,t())}const pn=[],fm=100;function Pt(e,t){if(!e)throw new Error(t||"assertion failure")}function nu(e,t){const n=e.length;return n>0&&n===t.length&&e[n-1]===t[n-1]}function ru(e){switch(e.length){case 0:throw new Error("unknown value");case 1:return e[0];case 2:throw e[1]}}function iu(e){return e.slice(0)}class rr{constructor(t){this.fn=t,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++rr.count}peek(){if(this.value.length===1&&!Je(this))return au(this),this.value[0]}recompute(t){return Pt(!this.recomputing,"already recomputing"),au(this),Je(this)?dm(this,t):ru(this.value)}setDirty(){this.dirty||(this.dirty=!0,ou(this),Gi(this))}dispose(){this.setDirty(),fu(this),zi(this,(t,n)=>{t.setDirty(),du(t,this)})}forget(){this.dispose()}dependOn(t){t.add(this),this.deps||(this.deps=pn.pop()||new Set),this.deps.add(t)}forgetDeps(){this.deps&&(Bi(this.deps).forEach(t=>t.delete(this)),this.deps.clear(),pn.push(this.deps),this.deps=null)}}rr.count=0;function au(e){const t=nr.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),Je(e)?uu(t,e):cu(t,e),t}function dm(e,t){return fu(e),nr.withValue(e,pm,[e,t]),mm(e,t)&&hm(e),ru(e.value)}function pm(e,t){e.recomputing=!0;const{normalizeResult:n}=e;let r;n&&e.value.length===1&&(r=iu(e.value)),e.value.length=0;try{if(e.value[0]=e.fn.apply(null,t),n&&r&&!nu(r,e.value))try{e.value[0]=n(e.value[0],r[0])}catch{}}catch(i){e.value[1]=i}e.recomputing=!1}function Je(e){return e.dirty||!!(e.dirtyChildren&&e.dirtyChildren.size)}function hm(e){e.dirty=!1,!Je(e)&&su(e)}function ou(e){zi(e,uu)}function su(e){zi(e,cu)}function zi(e,t){const n=e.parents.size;if(n){const r=Bi(e.parents);for(let i=0;i<n;++i)t(r[i],e)}}function uu(e,t){Pt(e.childValues.has(t)),Pt(Je(t));const n=!Je(e);if(!e.dirtyChildren)e.dirtyChildren=pn.pop()||new Set;else if(e.dirtyChildren.has(t))return;e.dirtyChildren.add(t),n&&ou(e)}function cu(e,t){Pt(e.childValues.has(t)),Pt(!Je(t));const n=e.childValues.get(t);n.length===0?e.childValues.set(t,iu(t.value)):nu(n,t.value)||e.setDirty(),lu(e,t),!Je(e)&&su(e)}function lu(e,t){const n=e.dirtyChildren;n&&(n.delete(t),n.size===0&&(pn.length<fm&&pn.push(n),e.dirtyChildren=null))}function fu(e){e.childValues.size>0&&e.childValues.forEach((t,n)=>{du(e,n)}),e.forgetDeps(),Pt(e.dirtyChildren===null)}function du(e,t){t.parents.delete(e),e.childValues.delete(t),lu(e,t)}function mm(e,t){if(typeof e.subscribe=="function")try{Gi(e),e.unsubscribe=e.subscribe.apply(null,t)}catch{return e.setDirty(),!1}return!0}const gm={setDirty:!0,dispose:!0,forget:!0};function pu(e){const t=new Map;function n(r){const i=nr.getValue();if(i){let a=t.get(r);a||t.set(r,a=new Set),i.dependOn(a)}}return n.dirty=function(i,a){const o=t.get(i);if(o){const s=a&&lm.call(gm,a)?a:"setDirty";Bi(o).forEach(u=>u[s]()),t.delete(i),Gi(o)}},n}let hu;function ym(...e){return(hu||(hu=new Re(typeof WeakMap=="function"))).lookupArray(e)}const Qi=new Set;function hn(e,{max:t=Math.pow(2,16),keyArgs:n,makeCacheKey:r=ym,normalizeResult:i,subscribe:a,cache:o=Ni}=Object.create(null)){const s=typeof o=="function"?new o(t,f=>f.dispose()):o,u=function(){const f=r.apply(null,n?n.apply(null,arguments):arguments);if(f===void 0)return e.apply(null,arguments);let p=s.get(f);p||(s.set(f,p=new rr(e)),p.normalizeResult=i,p.subscribe=a,p.forget=()=>s.delete(f));const y=p.recompute(Array.prototype.slice.call(arguments));return s.set(f,p),Qi.add(s),nr.hasValue()||(Qi.forEach(m=>m.clean()),Qi.clear()),y};Object.defineProperty(u,"size",{get:()=>s.size,configurable:!1,enumerable:!1}),Object.freeze(u.options={max:t,keyArgs:n,makeCacheKey:r,normalizeResult:i,subscribe:a,cache:s});function c(f){const p=f&&s.get(f);p&&p.setDirty()}u.dirtyKey=c,u.dirty=function(){c(r.apply(null,arguments))};function l(f){const p=f&&s.get(f);if(p)return p.peek()}u.peekKey=l,u.peek=function(){return l(r.apply(null,arguments))};function d(f){return f?s.delete(f):!1}return u.forgetKey=d,u.forget=function(){return d(r.apply(null,arguments))},u.makeCacheKey=r,u.getKey=n?function(){return r.apply(null,n.apply(null,arguments))}:r,Object.freeze(u)}function vm(e){return e}var mu=(function(){function e(t,n){n===void 0&&(n=Object.create(null)),this.resultCache=Pi?new WeakSet:new Set,this.transform=t,n.getCacheKey&&(this.getCacheKey=n.getCacheKey),this.cached=n.cache!==!1,this.resetCache()}return e.prototype.getCacheKey=function(t){return[t]},e.identity=function(){return new e(vm,{cache:!1})},e.split=function(t,n,r){return r===void 0&&(r=e.identity()),Object.assign(new e(function(i){var a=t(i)?n:r;return a.transformDocument(i)},{cache:!1}),{left:n,right:r})},e.prototype.resetCache=function(){var t=this;if(this.cached){var n=new Re(ft);this.performWork=hn(e.prototype.performWork.bind(this),{makeCacheKey:function(r){var i=t.getCacheKey(r);if(i)return $(Array.isArray(i),77),n.lookupArray(i)},max:Me["documentTransform.cache"],cache:er})}},e.prototype.performWork=function(t){return Ft(t),this.transform(t)},e.prototype.transformDocument=function(t){if(this.resultCache.has(t))return t;var n=this.performWork(t);return this.resultCache.add(n),n},e.prototype.concat=function(t){var n=this;return Object.assign(new e(function(r){return t.transformDocument(n.transformDocument(r))},{cache:!1}),{left:this,right:t})},e})(),mn,Xe=Object.assign(function(e){var t=mn.get(e);return t||(t=vh(e),mn.set(e,t)),t},{reset:function(){mn=new zs(Me.print||2e3)}});Xe.reset(),globalThis.__DEV__!==!1&&Qs("print",function(){return mn?mn.size:0});var oe=Array.isArray;function Ce(e){return Array.isArray(e)&&e.length>0}var gu={kind:x.FIELD,name:{kind:x.NAME,value:"__typename"}};function yu(e,t){return!e||e.selectionSet.selections.every(function(n){return n.kind===x.FRAGMENT_SPREAD&&yu(t[n.name.value],t)})}function bm(e){return yu(pt(e)||Ks(e),Ot(At(e)))?null:e}function Sm(e){var t=new Map,n=new Map;return e.forEach(function(r){r&&(r.name?t.set(r.name,r):r.test&&n.set(r.test,r))}),function(r){var i=t.get(r.name.value);return!i&&n.size&&n.forEach(function(a,o){o(r)&&(i=a)}),i}}function vu(e){var t=new Map;return function(r){r===void 0&&(r=e);var i=t.get(r);return i||t.set(r,i={variables:new Set,fragmentSpreads:new Set}),i}}function bu(e,t){Ft(t);for(var n=vu(""),r=vu(""),i=function(g){for(var b=0,E=void 0;b<g.length&&(E=g[b]);++b)if(!oe(E)){if(E.kind===x.OPERATION_DEFINITION)return n(E.name&&E.name.value);if(E.kind===x.FRAGMENT_DEFINITION)return r(E.name.value)}return globalThis.__DEV__!==!1&&$.error(97),null},a=0,o=t.definitions.length-1;o>=0;--o)t.definitions[o].kind===x.OPERATION_DEFINITION&&++a;var s=Sm(e),u=function(g){return Ce(g)&&g.map(s).some(function(b){return b&&b.remove})},c=new Map,l=!1,d={enter:function(g){if(u(g.directives))return l=!0,null}},f=we(t,{Field:d,InlineFragment:d,VariableDefinition:{enter:function(){return!1}},Variable:{enter:function(g,b,E,D,I){var O=i(I);O&&O.variables.add(g.name.value)}},FragmentSpread:{enter:function(g,b,E,D,I){if(u(g.directives))return l=!0,null;var O=i(I);O&&O.fragmentSpreads.add(g.name.value)}},FragmentDefinition:{enter:function(g,b,E,D){c.set(JSON.stringify(D),g)},leave:function(g,b,E,D){var I=c.get(JSON.stringify(D));if(g===I)return g;if(a>0&&g.selectionSet.selections.every(function(O){return O.kind===x.FIELD&&O.name.value==="__typename"}))return r(g.name.value).removed=!0,l=!0,null}},Directive:{leave:function(g){if(s(g))return l=!0,null}}});if(!l)return t;var p=function(g){return g.transitiveVars||(g.transitiveVars=new Set(g.variables),g.removed||g.fragmentSpreads.forEach(function(b){p(r(b)).transitiveVars.forEach(function(E){g.transitiveVars.add(E)})})),g},y=new Set;f.definitions.forEach(function(g){g.kind===x.OPERATION_DEFINITION?p(n(g.name&&g.name.value)).fragmentSpreads.forEach(function(b){y.add(b)}):g.kind===x.FRAGMENT_DEFINITION&&a===0&&!r(g.name.value).removed&&y.add(g.name.value)}),y.forEach(function(g){p(r(g)).fragmentSpreads.forEach(function(b){y.add(b)})});var m=function(g){return!!(!y.has(g)||r(g).removed)},v={enter:function(g){if(m(g.name.value))return null}};return bm(we(f,{FragmentSpread:v,FragmentDefinition:v,OperationDefinition:{leave:function(g){if(g.variableDefinitions){var b=p(n(g.name&&g.name.value)).transitiveVars;if(b.size<g.variableDefinitions.length)return _(_({},g),{variableDefinitions:g.variableDefinitions.filter(function(E){return b.has(E.variable.name.value)})})}}}}))}var Wi=Object.assign(function(e){return we(e,{SelectionSet:{enter:function(t,n,r){if(!(r&&r.kind===x.OPERATION_DEFINITION)){var i=t.selections;if(i){var a=i.some(function(s){return Ye(s)&&(s.name.value==="__typename"||s.name.value.lastIndexOf("__",0)===0)});if(!a){var o=r;if(!(Ye(o)&&o.directives&&o.directives.some(function(s){return s.name.value==="export"})))return _(_({},t),{selections:me(me([],i,!0),[gu],!1)})}}}}}})},{added:function(e){return e===gu}});function _m(e){var t=$t(e),n=t.operation;if(n==="query")return e;var r=we(e,{OperationDefinition:{enter:function(i){return _(_({},i),{operation:"query"})}}});return r}function Su(e){Ft(e);var t=bu([{test:function(n){return n.name.value==="client"},remove:!0}],e);return t}function Em(e){return Ft(e),we(e,{FragmentSpread:function(t){var n;if(!(!((n=t.directives)===null||n===void 0)&&n.some(function(r){return r.name.value==="unmask"})))return _(_({},t),{directives:me(me([],t.directives||[],!0),[{kind:x.DIRECTIVE,name:{kind:x.NAME,value:"nonreactive"}}],!1)})}})}var Dm=Object.prototype.hasOwnProperty;function _u(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ir(e)}function ir(e){var t=e[0]||{},n=e.length;if(n>1)for(var r=new Ke,i=1;i<n;++i)t=r.merge(t,e[i]);return t}var wm=function(e,t,n){return this.merge(e[n],t[n])},Ke=(function(){function e(t){t===void 0&&(t=wm),this.reconciler=t,this.isObject=ae,this.pastCopies=new Set}return e.prototype.merge=function(t,n){for(var r=this,i=[],a=2;a<arguments.length;a++)i[a-2]=arguments[a];return ae(n)&&ae(t)?(Object.keys(n).forEach(function(o){if(Dm.call(t,o)){var s=t[o];if(n[o]!==s){var u=r.reconciler.apply(r,me([t,n,o],i,!1));u!==s&&(t=r.shallowCopyForMerge(t),t[o]=u)}}else t=r.shallowCopyForMerge(t),t[o]=n[o]}),t):n},e.prototype.shallowCopyForMerge=function(t){return ae(t)&&(this.pastCopies.has(t)||(Array.isArray(t)?t=t.slice(0):t=_({__proto__:Object.getPrototypeOf(t)},t),this.pastCopies.add(t))),t},e})();function Tm(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=Im(e))||t){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Im(e,t){if(e){if(typeof e=="string")return Eu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Eu(e,t)}}function Eu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Du(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Hi(e,t,n){return t&&Du(e.prototype,t),n&&Du(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Yi=function(){return typeof Symbol=="function"},Ji=function(e){return Yi()&&!!Symbol[e]},Xi=function(e){return Ji(e)?Symbol[e]:"@@"+e};Yi()&&!Ji("observable")&&(Symbol.observable=Symbol("observable"));var Om=Xi("iterator"),Ki=Xi("observable"),wu=Xi("species");function ar(e,t){var n=e[t];if(n!=null){if(typeof n!="function")throw new TypeError(n+" is not a function");return n}}function gn(e){var t=e.constructor;return t!==void 0&&(t=t[wu],t===null&&(t=void 0)),t!==void 0?t:W}function km(e){return e instanceof W}function Nt(e){Nt.log?Nt.log(e):setTimeout(function(){throw e})}function or(e){Promise.resolve().then(function(){try{e()}catch(t){Nt(t)}})}function Tu(e){var t=e._cleanup;if(t!==void 0&&(e._cleanup=void 0,!!t))try{if(typeof t=="function")t();else{var n=ar(t,"unsubscribe");n&&n.call(t)}}catch(r){Nt(r)}}function Zi(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function xm(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var n=0;n<t.length&&(Iu(e,t[n].type,t[n].value),e._state!=="closed");++n);}}function Iu(e,t,n){e._state="running";var r=e._observer;try{var i=ar(r,t);switch(t){case"next":i&&i.call(r,n);break;case"error":if(Zi(e),i)i.call(r,n);else throw n;break;case"complete":Zi(e),i&&i.call(r);break}}catch(a){Nt(a)}e._state==="closed"?Tu(e):e._state==="running"&&(e._state="ready")}function ea(e,t,n){if(e._state!=="closed"){if(e._state==="buffering"){e._queue.push({type:t,value:n});return}if(e._state!=="ready"){e._state="buffering",e._queue=[{type:t,value:n}],or(function(){return xm(e)});return}Iu(e,t,n)}}var Cm=(function(){function e(n,r){this._cleanup=void 0,this._observer=n,this._queue=void 0,this._state="initializing";var i=new Fm(this);try{this._cleanup=r.call(void 0,i)}catch(a){i.error(a)}this._state==="initializing"&&(this._state="ready")}var t=e.prototype;return t.unsubscribe=function(){this._state!=="closed"&&(Zi(this),Tu(this))},Hi(e,[{key:"closed",get:function(){return this._state==="closed"}}]),e})(),Fm=(function(){function e(n){this._subscription=n}var t=e.prototype;return t.next=function(r){ea(this._subscription,"next",r)},t.error=function(r){ea(this._subscription,"error",r)},t.complete=function(){ea(this._subscription,"complete")},Hi(e,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),e})(),W=(function(){function e(n){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if(typeof n!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=n}var t=e.prototype;return t.subscribe=function(r){return(typeof r!="object"||r===null)&&(r={next:r,error:arguments[1],complete:arguments[2]}),new Cm(r,this._subscriber)},t.forEach=function(r){var i=this;return new Promise(function(a,o){if(typeof r!="function"){o(new TypeError(r+" is not a function"));return}function s(){u.unsubscribe(),a()}var u=i.subscribe({next:function(c){try{r(c,s)}catch(l){o(l),u.unsubscribe()}},error:o,complete:a})})},t.map=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=gn(this);return new a(function(o){return i.subscribe({next:function(s){try{s=r(s)}catch(u){return o.error(u)}o.next(s)},error:function(s){o.error(s)},complete:function(){o.complete()}})})},t.filter=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=gn(this);return new a(function(o){return i.subscribe({next:function(s){try{if(!r(s))return}catch(u){return o.error(u)}o.next(s)},error:function(s){o.error(s)},complete:function(){o.complete()}})})},t.reduce=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=gn(this),o=arguments.length>1,s=!1,u=arguments[1],c=u;return new a(function(l){return i.subscribe({next:function(d){var f=!s;if(s=!0,!f||o)try{c=r(c,d)}catch(p){return l.error(p)}else c=d},error:function(d){l.error(d)},complete:function(){if(!s&&!o)return l.error(new TypeError("Cannot reduce an empty sequence"));l.next(c),l.complete()}})})},t.concat=function(){for(var r=this,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];var s=gn(this);return new s(function(u){var c,l=0;function d(f){c=f.subscribe({next:function(p){u.next(p)},error:function(p){u.error(p)},complete:function(){l===a.length?(c=void 0,u.complete()):d(s.from(a[l++]))}})}return d(r),function(){c&&(c.unsubscribe(),c=void 0)}})},t.flatMap=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=gn(this);return new a(function(o){var s=[],u=i.subscribe({next:function(l){if(r)try{l=r(l)}catch(f){return o.error(f)}var d=a.from(l).subscribe({next:function(f){o.next(f)},error:function(f){o.error(f)},complete:function(){var f=s.indexOf(d);f>=0&&s.splice(f,1),c()}});s.push(d)},error:function(l){o.error(l)},complete:function(){c()}});function c(){u.closed&&s.length===0&&o.complete()}return function(){s.forEach(function(l){return l.unsubscribe()}),u.unsubscribe()}})},t[Ki]=function(){return this},e.from=function(r){var i=typeof this=="function"?this:e;if(r==null)throw new TypeError(r+" is not an object");var a=ar(r,Ki);if(a){var o=a.call(r);if(Object(o)!==o)throw new TypeError(o+" is not an object");return km(o)&&o.constructor===i?o:new i(function(s){return o.subscribe(s)})}if(Ji("iterator")&&(a=ar(r,Om),a))return new i(function(s){or(function(){if(!s.closed){for(var u=Tm(a.call(r)),c;!(c=u()).done;){var l=c.value;if(s.next(l),s.closed)return}s.complete()}})});if(Array.isArray(r))return new i(function(s){or(function(){if(!s.closed){for(var u=0;u<r.length;++u)if(s.next(r[u]),s.closed)return;s.complete()}})});throw new TypeError(r+" is not observable")},e.of=function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=typeof this=="function"?this:e;return new o(function(s){or(function(){if(!s.closed){for(var u=0;u<i.length;++u)if(s.next(i[u]),s.closed)return;s.complete()}})})},Hi(e,null,[{key:wu,get:function(){return this}}]),e})();Yi()&&Object.defineProperty(W,Symbol("extensions"),{value:{symbol:Ki,hostReportError:Nt},configurable:!0});function Am(e){var t,n=e.Symbol;if(typeof n=="function")if(n.observable)t=n.observable;else{typeof n.for=="function"?t=n.for("https://github.com/benlesh/symbol-observable"):t=n("https://github.com/benlesh/symbol-observable");try{n.observable=t}catch{}}else t="@@observable";return t}var Rt;typeof self<"u"?Rt=self:typeof window<"u"?Rt=window:typeof global<"u"?Rt=global:typeof module<"u"?Rt=module:Rt=Function("return this")(),Am(Rt);var Ou=W.prototype,ku="@@observable";Ou[ku]||(Ou[ku]=function(){return this});function $m(e){return e.catch(function(){}),e}var Pm=Object.prototype.toString;function xu(e){return ta(e)}function ta(e,t){switch(Pm.call(e)){case"[object Array]":{if(t=t||new Map,t.has(e))return t.get(e);var n=e.slice(0);return t.set(e,n),n.forEach(function(i,a){n[a]=ta(i,t)}),n}case"[object Object]":{if(t=t||new Map,t.has(e))return t.get(e);var r=Object.create(Object.getPrototypeOf(e));return t.set(e,r),Object.keys(e).forEach(function(i){r[i]=ta(e[i],t)}),r}default:return e}}function Nm(e){var t=new Set([e]);return t.forEach(function(n){ae(n)&&Rm(n)===n&&Object.getOwnPropertyNames(n).forEach(function(r){ae(n[r])&&t.add(n[r])})}),e}function Rm(e){if(globalThis.__DEV__!==!1&&!Object.isFrozen(e))try{Object.freeze(e)}catch(t){if(t instanceof TypeError)return null;throw t}return e}function sr(e){return globalThis.__DEV__!==!1&&Nm(e),e}function yn(e,t,n){var r=[];e.forEach(function(i){return i[t]&&r.push(i)}),r.forEach(function(i){return i[t](n)})}function na(e,t,n){return new W(function(r){var i={then:function(u){return new Promise(function(c){return c(u())})}};function a(u,c){return function(l){if(u){var d=function(){return r.closed?0:u(l)};i=i.then(d,d).then(function(f){return r.next(f)},function(f){return r.error(f)})}else r[c](l)}}var o={next:a(t,"next"),error:a(n,"error"),complete:function(){i.then(function(){return r.complete()})}},s=e.subscribe(o);return function(){return s.unsubscribe()}})}function Cu(e){function t(n){Object.defineProperty(e,n,{value:W})}return Bs&&Symbol.species&&t(Symbol.species),t("@@species"),e}function Fu(e){return e&&typeof e.then=="function"}var Mt=(function(e){Ee(t,e);function t(n){var r=e.call(this,function(i){return r.addObserver(i),function(){return r.removeObserver(i)}})||this;return r.observers=new Set,r.promise=new Promise(function(i,a){r.resolve=i,r.reject=a}),r.handlers={next:function(i){r.sub!==null&&(r.latest=["next",i],r.notify("next",i),yn(r.observers,"next",i))},error:function(i){var a=r.sub;a!==null&&(a&&setTimeout(function(){return a.unsubscribe()}),r.sub=null,r.latest=["error",i],r.reject(i),r.notify("error",i),yn(r.observers,"error",i))},complete:function(){var i=r,a=i.sub,o=i.sources,s=o===void 0?[]:o;if(a!==null){var u=s.shift();u?Fu(u)?u.then(function(c){return r.sub=c.subscribe(r.handlers)},r.handlers.error):r.sub=u.subscribe(r.handlers):(a&&setTimeout(function(){return a.unsubscribe()}),r.sub=null,r.latest&&r.latest[0]==="next"?r.resolve(r.latest[1]):r.resolve(),r.notify("complete"),yn(r.observers,"complete"))}}},r.nextResultListeners=new Set,r.cancel=function(i){r.reject(i),r.sources=[],r.handlers.error(i)},r.promise.catch(function(i){}),typeof n=="function"&&(n=[new W(n)]),Fu(n)?n.then(function(i){return r.start(i)},r.handlers.error):r.start(n),r}return t.prototype.start=function(n){this.sub===void 0&&(this.sources=Array.from(n),this.handlers.complete())},t.prototype.deliverLastMessage=function(n){if(this.latest){var r=this.latest[0],i=n[r];i&&i.call(n,this.latest[1]),this.sub===null&&r==="next"&&n.complete&&n.complete()}},t.prototype.addObserver=function(n){this.observers.has(n)||(this.deliverLastMessage(n),this.observers.add(n))},t.prototype.removeObserver=function(n){this.observers.delete(n)&&this.observers.size<1&&this.handlers.complete()},t.prototype.notify=function(n,r){var i=this.nextResultListeners;i.size&&(this.nextResultListeners=new Set,i.forEach(function(a){return a(n,r)}))},t.prototype.beforeNext=function(n){var r=!1;this.nextResultListeners.add(function(i,a){r||(r=!0,n(i,a))})},t})(W);Cu(Mt);function Lt(e){return"incremental"in e}function Mm(e){return"hasNext"in e&&"data"in e}function Lm(e){return Lt(e)||Mm(e)}function jm(e){return ae(e)&&"payload"in e}function Au(e,t){var n=e,r=new Ke;return Lt(t)&&Ce(t.incremental)&&t.incremental.forEach(function(i){for(var a=i.data,o=i.path,s=o.length-1;s>=0;--s){var u=o[s],c=!isNaN(+u),l=c?[]:{};l[u]=a,a=l}n=r.merge(n,a)}),n}function ur(e){var t=ra(e);return Ce(t)}function ra(e){var t=Ce(e.errors)?e.errors.slice(0):[];return Lt(e)&&Ce(e.incremental)&&e.incremental.forEach(function(n){n.errors&&t.push.apply(t,n.errors)}),t}function jt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Object.create(null);return e.forEach(function(r){r&&Object.keys(r).forEach(function(i){var a=r[i];a!==void 0&&(n[i]=a)})}),n}function ia(e,t){return jt(e,t,t.variables&&{variables:jt(_(_({},e&&e.variables),t.variables))})}function aa(e){return new W(function(t){t.error(e)})}var $u=function(e,t,n){var r=new Error(n);throw r.name="ServerError",r.response=e,r.statusCode=e.status,r.result=t,r};function qm(e){for(var t=["query","operationName","variables","extensions","context"],n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];if(t.indexOf(i)<0)throw ye(46,i)}return e}function Um(e,t){var n=_({},e),r=function(a){typeof a=="function"?n=_(_({},n),a(n)):n=_(_({},n),a)},i=function(){return _({},n)};return Object.defineProperty(t,"setContext",{enumerable:!1,value:r}),Object.defineProperty(t,"getContext",{enumerable:!1,value:i}),t}function Vm(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName=typeof t.query!="string"?fn(t.query)||void 0:""),t}function Bm(e,t){var n=_({},e),r=new Set(Object.keys(e));return we(t,{Variable:function(i,a,o){o&&o.kind!=="VariableDefinition"&&r.delete(i.name.value)}}),r.forEach(function(i){delete n[i]}),n}function Pu(e,t){return t?t(e):W.of()}function vn(e){return typeof e=="function"?new Ie(e):e}function cr(e){return e.request.length<=1}var Ie=(function(){function e(t){t&&(this.request=t)}return e.empty=function(){return new e(function(){return W.of()})},e.from=function(t){return t.length===0?e.empty():t.map(vn).reduce(function(n,r){return n.concat(r)})},e.split=function(t,n,r){var i=vn(n),a=vn(r||new e(Pu)),o;return cr(i)&&cr(a)?o=new e(function(s){return t(s)?i.request(s)||W.of():a.request(s)||W.of()}):o=new e(function(s,u){return t(s)?i.request(s,u)||W.of():a.request(s,u)||W.of()}),Object.assign(o,{left:i,right:a})},e.execute=function(t,n){return t.request(Um(n.context,Vm(qm(n))))||W.of()},e.concat=function(t,n){var r=vn(t);if(cr(r))return globalThis.__DEV__!==!1&&$.warn(38,r),r;var i=vn(n),a;return cr(i)?a=new e(function(o){return r.request(o,function(s){return i.request(s)||W.of()})||W.of()}):a=new e(function(o,s){return r.request(o,function(u){return i.request(u,s)||W.of()})||W.of()}),Object.assign(a,{left:r,right:i})},e.prototype.split=function(t,n,r){return this.concat(e.split(t,n,r||new e(Pu)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(t,n){throw ye(39)},e.prototype.onError=function(t,n){if(n&&n.error)return n.error(t),!1;throw t},e.prototype.setOnError=function(t){return this.onError=t,this},e})(),Gm=Ie.from,zm=Ie.split,oa=Ie.execute;function Qm(e){var t,n=e[Symbol.asyncIterator]();return t={next:function(){return n.next()}},t[Symbol.asyncIterator]=function(){return this},t}function Wm(e){var t=null,n=null,r=!1,i=[],a=[];function o(d){if(!n){if(a.length){var f=a.shift();if(Array.isArray(f)&&f[0])return f[0]({value:d,done:!1})}i.push(d)}}function s(d){n=d;var f=a.slice();f.forEach(function(p){p[1](d)}),!t||t()}function u(){r=!0;var d=a.slice();d.forEach(function(f){f[0]({value:void 0,done:!0})}),!t||t()}t=function(){t=null,e.removeListener("data",o),e.removeListener("error",s),e.removeListener("end",u),e.removeListener("finish",u),e.removeListener("close",u)},e.on("data",o),e.on("error",s),e.on("end",u),e.on("finish",u),e.on("close",u);function c(){return new Promise(function(d,f){if(n)return f(n);if(i.length)return d({value:i.shift(),done:!1});if(r)return d({value:void 0,done:!0});a.push([d,f])})}var l={next:function(){return c()}};return Kn&&(l[Symbol.asyncIterator]=function(){return this}),l}function Hm(e){var t=!1,n={next:function(){return t?Promise.resolve({value:void 0,done:!0}):(t=!0,new Promise(function(r,i){e.then(function(a){r({value:a,done:!1})}).catch(i)}))}};return Kn&&(n[Symbol.asyncIterator]=function(){return this}),n}function Nu(e){var t={next:function(){return e.read()}};return Kn&&(t[Symbol.asyncIterator]=function(){return this}),t}function Ym(e){return!!e.body}function Jm(e){return!!e.getReader}function Xm(e){return!!(Kn&&e[Symbol.asyncIterator])}function Km(e){return!!e.stream}function Zm(e){return!!e.arrayBuffer}function eg(e){return!!e.pipe}function tg(e){var t=e;if(Ym(e)&&(t=e.body),Xm(t))return Qm(t);if(Jm(t))return Nu(t.getReader());if(Km(t))return Nu(t.stream().getReader());if(Zm(t))return Hm(t.arrayBuffer());if(eg(t))return Wm(t);throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")}var lr=Symbol();function Ru(e){return e.extensions?Array.isArray(e.extensions[lr]):!1}function Mu(e){return e.hasOwnProperty("graphQLErrors")}var ng=function(e){var t=me(me(me([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(n){return ae(n)&&n.message||"Error message not found."}).join(`
`)},Ze=(function(e){Ee(t,e);function t(n){var r=n.graphQLErrors,i=n.protocolErrors,a=n.clientErrors,o=n.networkError,s=n.errorMessage,u=n.extraInfo,c=e.call(this,s)||this;return c.name="ApolloError",c.graphQLErrors=r||[],c.protocolErrors=i||[],c.clientErrors=a||[],c.networkError=o||null,c.message=s||ng(c),c.extraInfo=u,c.cause=me(me(me([o],r||[],!0),i||[],!0),a||[],!0).find(function(l){return!!l})||null,c.__proto__=t.prototype,c}return t})(Error),Lu=Object.prototype.hasOwnProperty;function rg(e,t){return ze(this,void 0,void 0,function(){var n,r,i,a,o,s,u,c,l,d,f,p,y,m,v,g,b,E,D,I,O,C,N,L;return Qe(this,function(U){switch(U.label){case 0:if(TextDecoder===void 0)throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");n=new TextDecoder("utf-8"),r=(L=e.headers)===null||L===void 0?void 0:L.get("content-type"),i="boundary=",a=r?.includes(i)?r?.substring(r?.indexOf(i)+i.length).replace(/['"]/g,"").replace(/\;(.*)/gm,"").trim():"-",o=`\r
--`.concat(a),s="",u=tg(e),c=!0,U.label=1;case 1:return c?[4,u.next()]:[3,3];case 2:for(l=U.sent(),d=l.value,f=l.done,p=typeof d=="string"?d:n.decode(d),y=s.length-o.length+1,c=!f,s+=p,m=s.indexOf(o,y);m>-1;){if(v=void 0,C=[s.slice(0,m),s.slice(m+o.length)],v=C[0],s=C[1],g=v.indexOf(`\r
\r
`),b=ig(v.slice(0,g)),E=b["content-type"],E&&E.toLowerCase().indexOf("application/json")===-1)throw new Error("Unsupported patch content type: application/json is required.");if(D=v.slice(g),D){if(I=ju(e,D),Object.keys(I).length>1||"data"in I||"incremental"in I||"errors"in I||"payload"in I)if(jm(I)){if(O={},"payload"in I){if(Object.keys(I).length===1&&I.payload===null)return[2];O=_({},I.payload)}"errors"in I&&(O=_(_({},O),{extensions:_(_({},"extensions"in O?O.extensions:null),(N={},N[lr]=I.errors,N))})),t(O)}else t(I);else if(Object.keys(I).length===1&&"hasNext"in I&&!I.hasNext)return[2]}m=s.indexOf(o)}return[3,1];case 3:return[2]}})})}function ig(e){var t={};return e.split(`
`).forEach(function(n){var r=n.indexOf(":");if(r>-1){var i=n.slice(0,r).trim().toLowerCase(),a=n.slice(r+1).trim();t[i]=a}}),t}function ju(e,t){if(e.status>=300){var n=function(){try{return JSON.parse(t)}catch{return t}};$u(e,n(),"Response not successful: Received status code ".concat(e.status))}try{return JSON.parse(t)}catch(i){var r=i;throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}}function ag(e,t){e.result&&e.result.errors&&e.result.data&&t.next(e.result),t.error(e)}function qu(e){return function(t){return t.text().then(function(n){return ju(t,n)}).then(function(n){return!Array.isArray(n)&&!Lu.call(n,"data")&&!Lu.call(n,"errors")&&$u(t,n,"Server response was missing for query '".concat(Array.isArray(e)?e.map(function(r){return r.operationName}):e.operationName,"'.")),n})}}var bn=function(e,t){var n;try{n=JSON.stringify(e)}catch(i){var r=ye(42,t,i.message);throw r.parseError=i,r}return n},og={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},sg={accept:"*/*","content-type":"application/json"},ug={method:"POST"},Uu={http:og,headers:sg,options:ug},Vu=function(e,t){return t(e)};function Bu(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={},a={};n.forEach(function(d){i=_(_(_({},i),d.options),{headers:_(_({},i.headers),d.headers)}),d.credentials&&(i.credentials=d.credentials),a=_(_({},a),d.http)}),i.headers&&(i.headers=cg(i.headers,a.preserveHeaderCase));var o=e.operationName,s=e.extensions,u=e.variables,c=e.query,l={operationName:o,variables:u};return a.includeExtensions&&(l.extensions=s),a.includeQuery&&(l.query=t(c,Xe)),{options:i,body:l}}function cg(e,t){if(!t){var n={};return Object.keys(Object(e)).forEach(function(a){n[a.toLowerCase()]=e[a]}),n}var r={};Object.keys(Object(e)).forEach(function(a){r[a.toLowerCase()]={originalName:a,value:e[a]}});var i={};return Object.keys(r).forEach(function(a){i[r[a].originalName]=r[a].value}),i}var lg=function(e){if(!e&&typeof fetch>"u")throw ye(40)},fg=function(){if(typeof AbortController>"u")return{controller:!1,signal:!1};var e=new AbortController,t=e.signal;return{controller:e,signal:t}},Gu=function(e,t){var n=e.getContext(),r=n.uri;return r||(typeof t=="function"?t(e):t||"/graphql")};function zu(e,t){var n=[],r=function(d,f){n.push("".concat(d,"=").concat(encodeURIComponent(f)))};if("query"in t&&r("query",t.query),t.operationName&&r("operationName",t.operationName),t.variables){var i=void 0;try{i=bn(t.variables,"Variables map")}catch(d){return{parseError:d}}r("variables",i)}if(t.extensions){var a=void 0;try{a=bn(t.extensions,"Extensions map")}catch(d){return{parseError:d}}r("extensions",a)}var o="",s=e,u=e.indexOf("#");u!==-1&&(o=e.substr(u),s=e.substr(0,u));var c=s.indexOf("?")===-1?"?":"&",l=s+c+n.join("&")+o;return{newURI:l}}var Qu=De(function(){return fetch}),dg=function(e){e===void 0&&(e={});var t=e.uri,n=t===void 0?"/graphql":t,r=e.fetch,i=e.print,a=i===void 0?Vu:i,o=e.includeExtensions,s=e.preserveHeaderCase,u=e.useGETForQueries,c=e.includeUnusedVariables,l=c===void 0?!1:c,d=Ne(e,["uri","fetch","print","includeExtensions","preserveHeaderCase","useGETForQueries","includeUnusedVariables"]);globalThis.__DEV__!==!1&&lg(r||Qu);var f={http:{includeExtensions:o,preserveHeaderCase:s},options:d.fetchOptions,credentials:d.credentials,headers:d.headers};return new Ie(function(p){var y=Gu(p,n),m=p.getContext(),v={};if(m.clientAwareness){var g=m.clientAwareness,b=g.name,E=g.version;b&&(v["apollographql-client-name"]=b),E&&(v["apollographql-client-version"]=E)}var D=_(_({},v),m.headers),I={http:m.http,options:m.fetchOptions,credentials:m.credentials,headers:D};if(cn(["client"],p.query)){var O=Su(p.query);if(!O)return aa(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));p.query=O}var C=Bu(p,a,Uu,f,I),N=C.options,L=C.body;L.variables&&!l&&(L.variables=Bm(L.variables,p.query));var U;!N.signal&&typeof AbortController<"u"&&(U=new AbortController,N.signal=U.signal);var z=function(F){return F.kind==="OperationDefinition"&&F.operation==="mutation"},fe=function(F){return F.kind==="OperationDefinition"&&F.operation==="subscription"},ie=fe($t(p.query)),ge=cn(["defer"],p.query);if(u&&!p.query.definitions.some(z)&&(N.method="GET"),ge||ie){N.headers=N.headers||{};var M="multipart/mixed;";ie&&ge&&globalThis.__DEV__!==!1&&$.warn(41),ie?M+="boundary=graphql;subscriptionSpec=1.0,application/json":ge&&(M+="deferSpec=20220824,application/json"),N.headers.accept=M}if(N.method==="GET"){var J=zu(y,L),S=J.newURI,T=J.parseError;if(T)return aa(T);y=S}else try{N.body=bn(L,"Payload")}catch(F){return aa(F)}return new W(function(F){var q=r||De(function(){return fetch})||Qu,R=F.next.bind(F);return q(y,N).then(function(B){var X;p.setContext({response:B});var K=(X=B.headers)===null||X===void 0?void 0:X.get("content-type");return K!==null&&/^multipart\/mixed/i.test(K)?rg(B,R):qu(p)(B).then(R)}).then(function(){U=void 0,F.complete()}).catch(function(B){U=void 0,ag(B,F)}),function(){U&&U.abort()}})})},pg=(function(e){Ee(t,e);function t(n){n===void 0&&(n={});var r=e.call(this,dg(n).request)||this;return r.options=n,r}return t})(Ie);const{toString:Wu,hasOwnProperty:hg}=Object.prototype,Hu=Function.prototype.toString,sa=new Map;function ne(e,t){try{return ua(e,t)}finally{sa.clear()}}function ua(e,t){if(e===t)return!0;const n=Wu.call(e),r=Wu.call(t);if(n!==r)return!1;switch(n){case"[object Array]":if(e.length!==t.length)return!1;case"[object Object]":{if(Ju(e,t))return!0;const i=Yu(e),a=Yu(t),o=i.length;if(o!==a.length)return!1;for(let s=0;s<o;++s)if(!hg.call(t,i[s]))return!1;for(let s=0;s<o;++s){const u=i[s];if(!ua(e[u],t[u]))return!1}return!0}case"[object Error]":return e.name===t.name&&e.message===t.message;case"[object Number]":if(e!==e)return t!==t;case"[object Boolean]":case"[object Date]":return+e==+t;case"[object RegExp]":case"[object String]":return e==`${t}`;case"[object Map]":case"[object Set]":{if(e.size!==t.size)return!1;if(Ju(e,t))return!0;const i=e.entries(),a=n==="[object Map]";for(;;){const o=i.next();if(o.done)break;const[s,u]=o.value;if(!t.has(s)||a&&!ua(u,t.get(s)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":e=new Uint8Array(e),t=new Uint8Array(t);case"[object DataView]":{let i=e.byteLength;if(i===t.byteLength)for(;i--&&e[i]===t[i];);return i===-1}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{const i=Hu.call(e);return i!==Hu.call(t)?!1:!yg(i,gg)}}return!1}function Yu(e){return Object.keys(e).filter(mg,e)}function mg(e){return this[e]!==void 0}const gg="{ [native code] }";function yg(e,t){const n=e.length-t.length;return n>=0&&e.indexOf(t,n)===n}function Ju(e,t){let n=sa.get(e);if(n){if(n.has(t))return!0}else sa.set(e,n=new Set);return n.add(t),!1}function Xu(e,t,n,r){var i=t.data,a=Ne(t,["data"]),o=n.data,s=Ne(n,["data"]);return ne(a,s)&&fr($t(e).selectionSet,i,o,{fragmentMap:Ot(At(e)),variables:r})}function fr(e,t,n,r){if(t===n)return!0;var i=new Set;return e.selections.every(function(a){if(i.has(a)||(i.add(a),!un(a,r.variables))||Ku(a))return!0;if(Ye(a)){var o=Le(a),s=t&&t[o],u=n&&n[o],c=a.selectionSet;if(!c)return ne(s,u);var l=Array.isArray(s),d=Array.isArray(u);if(l!==d)return!1;if(l&&d){var f=s.length;if(u.length!==f)return!1;for(var p=0;p<f;++p)if(!fr(c,s[p],u[p],r))return!1;return!0}return fr(c,s,u,r)}else{var y=Zn(a,r.fragmentMap);if(y)return Ku(y)?!0:fr(y.selectionSet,t,n,r)}})}function Ku(e){return!!e.directives&&e.directives.some(vg)}function vg(e){return e.name.value==="nonreactive"}var Zu=ft?WeakMap:Map,ec=Pi?WeakSet:Set,ca=new dn,tc=!1;function nc(){tc||(tc=!0,globalThis.__DEV__!==!1&&$.warn(52))}function rc(e,t,n){return ca.withValue(!0,function(){var r=Sn(e,t,n,!1);return Object.isFrozen(e)&&sr(r),r})}function bg(e,t){if(t.has(e))return t.get(e);var n=Array.isArray(e)?[]:Object.create(null);return t.set(e,n),n}function Sn(e,t,n,r,i){var a,o=n.knownChanged,s=bg(e,n.mutableTargets);if(Array.isArray(e)){for(var u=0,c=Array.from(e.entries());u<c.length;u++){var l=c[u],d=l[0],f=l[1];if(f===null){s[d]=null;continue}var p=Sn(f,t,n,r,globalThis.__DEV__!==!1?"".concat(i||"","[").concat(d,"]"):void 0);o.has(p)&&o.add(s),s[d]=p}return o.has(s)?s:e}for(var y=0,m=t.selections;y<m.length;y++){var v=m[y],g=void 0;if(r&&o.add(s),v.kind===x.FIELD){var b=Le(v),E=v.selectionSet;if(g=s[b]||e[b],g===void 0)continue;if(E&&g!==null){var p=Sn(e[b],E,n,r,globalThis.__DEV__!==!1?"".concat(i||"",".").concat(b):void 0);o.has(p)&&(g=p)}globalThis.__DEV__===!1&&(s[b]=g),globalThis.__DEV__!==!1&&(r&&b!=="__typename"&&!(!((a=Object.getOwnPropertyDescriptor(s,b))===null||a===void 0)&&a.value)?Object.defineProperty(s,b,Sg(b,g,i||"",n.operationName,n.operationType)):(delete s[b],s[b]=g))}if(v.kind===x.INLINE_FRAGMENT&&(!v.typeCondition||n.cache.fragmentMatches(v,e.__typename))&&(g=Sn(e,v.selectionSet,n,r,i)),v.kind===x.FRAGMENT_SPREAD){var D=v.name.value,I=n.fragmentMap[D]||(n.fragmentMap[D]=n.cache.lookupFragment(D));$(I,47,D);var O=wh(v);O!=="mask"&&(g=Sn(e,I.selectionSet,n,O==="migrate",i))}o.has(g)&&o.add(s)}return"__typename"in e&&!("__typename"in s)&&(s.__typename=e.__typename),Object.keys(s).length!==Object.keys(e).length&&o.add(s),o.has(s)?s:e}function Sg(e,t,n,r,i){var a=function(){return ca.getValue()||(globalThis.__DEV__!==!1&&$.warn(48,r?"".concat(i," '").concat(r,"'"):"anonymous ".concat(i),"".concat(n,".").concat(e).replace(/^\./,"")),a=function(){return t}),t};return{get:function(){return a()},set:function(o){a=function(){return o}},enumerable:!0,configurable:!0}}function ic(e,t,n,r){if(!n.fragmentMatches)return globalThis.__DEV__!==!1&&nc(),e;var i=t.definitions.filter(function(o){return o.kind===x.FRAGMENT_DEFINITION});typeof r>"u"&&($(i.length===1,49,i.length),r=i[0].name.value);var a=i.find(function(o){return o.name.value===r});return $(!!a,50,r),e==null||ne(e,{})?e:rc(e,a.selectionSet,{operationType:"fragment",operationName:a.name.value,fragmentMap:Ot(At(t)),cache:n,mutableTargets:new Zu,knownChanged:new ec})}function _g(e,t,n){var r;if(!n.fragmentMatches)return globalThis.__DEV__!==!1&&nc(),e;var i=pt(t);return $(i,51),e==null?e:rc(e,i.selectionSet,{operationType:i.operation,operationName:(r=i.name)===null||r===void 0?void 0:r.value,fragmentMap:Ot(At(t)),cache:n,mutableTargets:new Zu,knownChanged:new ec})}var ac=(function(){function e(){this.assumeImmutableResults=!1,this.getFragmentDoc=hn(Ch,{max:Me["cache.fragmentQueryDocuments"]||1e3,cache:er})}return e.prototype.lookupFragment=function(t){return null},e.prototype.batch=function(t){var n=this,r=typeof t.optimistic=="string"?t.optimistic:t.optimistic===!1?null:void 0,i;return this.performTransaction(function(){return i=t.update(n)},r),i},e.prototype.recordOptimisticTransaction=function(t,n){this.performTransaction(t,n)},e.prototype.transformDocument=function(t){return t},e.prototype.transformForLink=function(t){return t},e.prototype.identify=function(t){},e.prototype.gc=function(){return[]},e.prototype.modify=function(t){return!1},e.prototype.readQuery=function(t,n){return n===void 0&&(n=!!t.optimistic),this.read(_(_({},t),{rootId:t.id||"ROOT_QUERY",optimistic:n}))},e.prototype.watchFragment=function(t){var n=this,r=t.fragment,i=t.fragmentName,a=t.from,o=t.optimistic,s=o===void 0?!0:o,u=Ne(t,["fragment","fragmentName","from","optimistic"]),c=this.getFragmentDoc(r,i),l=typeof a>"u"||typeof a=="string"?a:this.identify(a),d=!!t[Symbol.for("apollo.dataMasking")];if(globalThis.__DEV__!==!1){var f=i||Ks(r).name.value;l||globalThis.__DEV__!==!1&&$.warn(1,f)}var p=_(_({},u),{returnPartialData:!0,id:l,query:c,optimistic:s}),y;return new W(function(m){return n.watch(_(_({},p),{immediate:!0,callback:function(v){var g=d?ic(v.result,r,n,i):v.result;if(!(y&&Xu(c,{data:y.result},{data:g},t.variables))){var b={data:g,complete:!!v.complete};v.missing&&(b.missing=ir(v.missing.map(function(E){return E.missing}))),y=_(_({},v),{result:g}),m.next(b)}}}))})},e.prototype.readFragment=function(t,n){return n===void 0&&(n=!!t.optimistic),this.read(_(_({},t),{query:this.getFragmentDoc(t.fragment,t.fragmentName),rootId:t.id,optimistic:n}))},e.prototype.writeQuery=function(t){var n=t.id,r=t.data,i=Ne(t,["id","data"]);return this.write(Object.assign(i,{dataId:n||"ROOT_QUERY",result:r}))},e.prototype.writeFragment=function(t){var n=t.id,r=t.data,i=t.fragment,a=t.fragmentName,o=Ne(t,["id","data","fragment","fragmentName"]);return this.write(Object.assign(o,{query:this.getFragmentDoc(i,a),dataId:n,result:r}))},e.prototype.updateQuery=function(t,n){return this.batch({update:function(r){var i=r.readQuery(t),a=n(i);return a==null?i:(r.writeQuery(_(_({},t),{data:a})),a)}})},e.prototype.updateFragment=function(t,n){return this.batch({update:function(r){var i=r.readFragment(t),a=n(i);return a==null?i:(r.writeFragment(_(_({},t),{data:a})),a)}})},e})();globalThis.__DEV__!==!1&&(ac.prototype.getMemoryInternals=Vh);var oc=(function(e){Ee(t,e);function t(n,r,i,a){var o,s=e.call(this,n)||this;if(s.message=n,s.path=r,s.query=i,s.variables=a,Array.isArray(s.path)){s.missing=s.message;for(var u=s.path.length-1;u>=0;--u)s.missing=(o={},o[s.path[u]]=s.missing,o)}else s.missing=s.path;return s.__proto__=t.prototype,s}return t})(Error),le=Object.prototype.hasOwnProperty;function _n(e){return e==null}function sc(e,t){var n=e.__typename,r=e.id,i=e._id;if(typeof n=="string"&&(t&&(t.keyObject=_n(r)?_n(i)?void 0:{_id:i}:{id:r}),_n(r)&&!_n(i)&&(r=i),!_n(r)))return"".concat(n,":").concat(typeof r=="number"||typeof r=="string"?r:JSON.stringify(r))}var uc={dataIdFromObject:sc,addTypename:!0,resultCaching:!0,canonizeResults:!1};function Eg(e){return jt(uc,e)}function cc(e){var t=e.canonizeResults;return t===void 0?uc.canonizeResults:t}function Dg(e,t){return Q(t)?e.get(t.__ref,"__typename"):t&&t.__typename}var lc=/^[_a-z][_0-9a-z]*/i;function et(e){var t=e.match(lc);return t?t[0]:e}function la(e,t,n){return ae(t)?oe(t)?t.every(function(r){return la(e,r,n)}):e.selections.every(function(r){if(Ye(r)&&un(r,n)){var i=Le(r);return le.call(t,i)&&(!r.selectionSet||la(r.selectionSet,t[i],n))}return!0}):!1}function qt(e){return ae(e)&&!Q(e)&&!oe(e)}function wg(){return new Ke}function fc(e,t){var n=Ot(At(e));return{fragmentMap:n,lookupFragment:function(r){var i=n[r];return!i&&t&&(i=t.lookup(r)),i||null}}}var dr=Object.create(null),fa=function(){return dr},dc=Object.create(null),En=(function(){function e(t,n){var r=this;this.policies=t,this.group=n,this.data=Object.create(null),this.rootIds=Object.create(null),this.refs=Object.create(null),this.getFieldValue=function(i,a){return sr(Q(i)?r.get(i.__ref,a):i&&i[a])},this.canRead=function(i){return Q(i)?r.has(i.__ref):typeof i=="object"},this.toReference=function(i,a){if(typeof i=="string")return xt(i);if(Q(i))return i;var o=r.policies.identify(i)[0];if(o){var s=xt(o);return a&&r.merge(o,i),s}}}return e.prototype.toObject=function(){return _({},this.data)},e.prototype.has=function(t){return this.lookup(t,!0)!==void 0},e.prototype.get=function(t,n){if(this.group.depend(t,n),le.call(this.data,t)){var r=this.data[t];if(r&&le.call(r,n))return r[n]}if(n==="__typename"&&le.call(this.policies.rootTypenamesById,t))return this.policies.rootTypenamesById[t];if(this instanceof tt)return this.parent.get(t,n)},e.prototype.lookup=function(t,n){if(n&&this.group.depend(t,"__exists"),le.call(this.data,t))return this.data[t];if(this instanceof tt)return this.parent.lookup(t,n);if(this.policies.rootTypenamesById[t])return Object.create(null)},e.prototype.merge=function(t,n){var r=this,i;Q(t)&&(t=t.__ref),Q(n)&&(n=n.__ref);var a=typeof t=="string"?this.lookup(i=t):t,o=typeof n=="string"?this.lookup(i=n):n;if(o){$(typeof i=="string",2);var s=new Ke(Ig).merge(a,o);if(this.data[i]=s,s!==a&&(delete this.refs[i],this.group.caching)){var u=Object.create(null);a||(u.__exists=1),Object.keys(o).forEach(function(c){if(!a||a[c]!==s[c]){u[c]=1;var l=et(c);l!==c&&!r.policies.hasKeyArgs(s.__typename,l)&&(u[l]=1),s[c]===void 0&&!(r instanceof tt)&&delete s[c]}}),u.__typename&&!(a&&a.__typename)&&this.policies.rootTypenamesById[i]===s.__typename&&delete u.__typename,Object.keys(u).forEach(function(c){return r.group.dirty(i,c)})}}},e.prototype.modify=function(t,n){var r=this,i=this.lookup(t);if(i){var a=Object.create(null),o=!1,s=!0,u={DELETE:dr,INVALIDATE:dc,isReference:Q,toReference:this.toReference,canRead:this.canRead,readField:function(c,l){return r.policies.readField(typeof c=="string"?{fieldName:c,from:l||xt(t)}:c,{store:r})}};if(Object.keys(i).forEach(function(c){var l=et(c),d=i[c];if(d!==void 0){var f=typeof n=="function"?n:n[c]||n[l];if(f){var p=f===fa?dr:f(sr(d),_(_({},u),{fieldName:l,storeFieldName:c,storage:r.getStorage(t,c)}));if(p===dc)r.group.dirty(t,c);else if(p===dr&&(p=void 0),p!==d&&(a[c]=p,o=!0,d=p,globalThis.__DEV__!==!1)){var y=function(I){if(r.lookup(I.__ref)===void 0)return globalThis.__DEV__!==!1&&$.warn(3,I),!0};if(Q(p))y(p);else if(Array.isArray(p))for(var m=!1,v=void 0,g=0,b=p;g<b.length;g++){var E=b[g];if(Q(E)){if(m=!0,y(E))break}else if(typeof E=="object"&&E){var D=r.policies.identify(E)[0];D&&(v=E)}if(m&&v!==void 0){globalThis.__DEV__!==!1&&$.warn(4,v);break}}}}d!==void 0&&(s=!1)}}),o)return this.merge(t,a),s&&(this instanceof tt?this.data[t]=void 0:delete this.data[t],this.group.dirty(t,"__exists")),!0}return!1},e.prototype.delete=function(t,n,r){var i,a=this.lookup(t);if(a){var o=this.getFieldValue(a,"__typename"),s=n&&r?this.policies.getStoreFieldName({typename:o,fieldName:n,args:r}):n;return this.modify(t,s?(i={},i[s]=fa,i):fa)}return!1},e.prototype.evict=function(t,n){var r=!1;return t.id&&(le.call(this.data,t.id)&&(r=this.delete(t.id,t.fieldName,t.args)),this instanceof tt&&this!==n&&(r=this.parent.evict(t,n)||r),(t.fieldName||r)&&this.group.dirty(t.id,t.fieldName||"__exists")),r},e.prototype.clear=function(){this.replace(null)},e.prototype.extract=function(){var t=this,n=this.toObject(),r=[];return this.getRootIdSet().forEach(function(i){le.call(t.policies.rootTypenamesById,i)||r.push(i)}),r.length&&(n.__META={extraRootIds:r.sort()}),n},e.prototype.replace=function(t){var n=this;if(Object.keys(this.data).forEach(function(a){t&&le.call(t,a)||n.delete(a)}),t){var r=t.__META,i=Ne(t,["__META"]);Object.keys(i).forEach(function(a){n.merge(a,i[a])}),r&&r.extraRootIds.forEach(this.retain,this)}},e.prototype.retain=function(t){return this.rootIds[t]=(this.rootIds[t]||0)+1},e.prototype.release=function(t){if(this.rootIds[t]>0){var n=--this.rootIds[t];return n||delete this.rootIds[t],n}return 0},e.prototype.getRootIdSet=function(t){return t===void 0&&(t=new Set),Object.keys(this.rootIds).forEach(t.add,t),this instanceof tt?this.parent.getRootIdSet(t):Object.keys(this.policies.rootTypenamesById).forEach(t.add,t),t},e.prototype.gc=function(){var t=this,n=this.getRootIdSet(),r=this.toObject();n.forEach(function(o){le.call(r,o)&&(Object.keys(t.findChildRefIds(o)).forEach(n.add,n),delete r[o])});var i=Object.keys(r);if(i.length){for(var a=this;a instanceof tt;)a=a.parent;i.forEach(function(o){return a.delete(o)})}return i},e.prototype.findChildRefIds=function(t){if(!le.call(this.refs,t)){var n=this.refs[t]=Object.create(null),r=this.data[t];if(!r)return n;var i=new Set([r]);i.forEach(function(a){Q(a)&&(n[a.__ref]=!0),ae(a)&&Object.keys(a).forEach(function(o){var s=a[o];ae(s)&&i.add(s)})})}return this.refs[t]},e.prototype.makeCacheKey=function(){return this.group.keyMaker.lookupArray(arguments)},e})(),pc=(function(){function e(t,n){n===void 0&&(n=null),this.caching=t,this.parent=n,this.d=null,this.resetCaching()}return e.prototype.resetCaching=function(){this.d=this.caching?pu():null,this.keyMaker=new Re(ft)},e.prototype.depend=function(t,n){if(this.d){this.d(da(t,n));var r=et(n);r!==n&&this.d(da(t,r)),this.parent&&this.parent.depend(t,n)}},e.prototype.dirty=function(t,n){this.d&&this.d.dirty(da(t,n),n==="__exists"?"forget":"setDirty")},e})();function da(e,t){return t+"#"+e}function hc(e,t){Dn(e)&&e.group.depend(t,"__exists")}(function(e){var t=(function(n){Ee(r,n);function r(i){var a=i.policies,o=i.resultCaching,s=o===void 0?!0:o,u=i.seed,c=n.call(this,a,new pc(s))||this;return c.stump=new Tg(c),c.storageTrie=new Re(ft),u&&c.replace(u),c}return r.prototype.addLayer=function(i,a){return this.stump.addLayer(i,a)},r.prototype.removeLayer=function(){return this},r.prototype.getStorage=function(){return this.storageTrie.lookupArray(arguments)},r})(e);e.Root=t})(En||(En={}));var tt=(function(e){Ee(t,e);function t(n,r,i,a){var o=e.call(this,r.policies,a)||this;return o.id=n,o.parent=r,o.replay=i,o.group=a,i(o),o}return t.prototype.addLayer=function(n,r){return new t(n,this,r,this.group)},t.prototype.removeLayer=function(n){var r=this,i=this.parent.removeLayer(n);return n===this.id?(this.group.caching&&Object.keys(this.data).forEach(function(a){var o=r.data[a],s=i.lookup(a);s?o?o!==s&&Object.keys(o).forEach(function(u){ne(o[u],s[u])||r.group.dirty(a,u)}):(r.group.dirty(a,"__exists"),Object.keys(s).forEach(function(u){r.group.dirty(a,u)})):r.delete(a)}),i):i===this.parent?this:i.addLayer(this.id,this.replay)},t.prototype.toObject=function(){return _(_({},this.parent.toObject()),this.data)},t.prototype.findChildRefIds=function(n){var r=this.parent.findChildRefIds(n);return le.call(this.data,n)?_(_({},r),e.prototype.findChildRefIds.call(this,n)):r},t.prototype.getStorage=function(){for(var n=this.parent;n.parent;)n=n.parent;return n.getStorage.apply(n,arguments)},t})(En),Tg=(function(e){Ee(t,e);function t(n){return e.call(this,"EntityStore.Stump",n,function(){},new pc(n.group.caching,n.group))||this}return t.prototype.removeLayer=function(){return this},t.prototype.merge=function(n,r){return this.parent.merge(n,r)},t})(tt);function Ig(e,t,n){var r=e[n],i=t[n];return ne(r,i)?r:i}function Dn(e){return!!(e instanceof En&&e.group.caching)}function Og(e){return ae(e)?oe(e)?e.slice(0):_({__proto__:Object.getPrototypeOf(e)},e):e}var mc=(function(){function e(){this.known=new(Pi?WeakSet:Set),this.pool=new Re(ft),this.passes=new WeakMap,this.keysByJSON=new Map,this.empty=this.admit({})}return e.prototype.isKnown=function(t){return ae(t)&&this.known.has(t)},e.prototype.pass=function(t){if(ae(t)){var n=Og(t);return this.passes.set(n,t),n}return t},e.prototype.admit=function(t){var n=this;if(ae(t)){var r=this.passes.get(t);if(r)return r;var i=Object.getPrototypeOf(t);switch(i){case Array.prototype:{if(this.known.has(t))return t;var a=t.map(this.admit,this),o=this.pool.lookupArray(a);return o.array||(this.known.add(o.array=a),globalThis.__DEV__!==!1&&Object.freeze(a)),o.array}case null:case Object.prototype:{if(this.known.has(t))return t;var s=Object.getPrototypeOf(t),u=[s],c=this.sortedKeys(t);u.push(c.json);var l=u.length;c.sorted.forEach(function(p){u.push(n.admit(t[p]))});var o=this.pool.lookupArray(u);if(!o.object){var d=o.object=Object.create(s);this.known.add(d),c.sorted.forEach(function(p,y){d[p]=u[l+y]}),globalThis.__DEV__!==!1&&Object.freeze(d)}return o.object}}}return t},e.prototype.sortedKeys=function(t){var n=Object.keys(t),r=this.pool.lookupArray(n);if(!r.keys){n.sort();var i=JSON.stringify(n);(r.keys=this.keysByJSON.get(i))||this.keysByJSON.set(i,r.keys={sorted:n,json:i})}return r.keys},e})();function gc(e){return[e.selectionSet,e.objectOrReference,e.context,e.context.canonizeResults]}var kg=(function(){function e(t){var n=this;this.knownResults=new(ft?WeakMap:Map),this.config=jt(t,{addTypename:t.addTypename!==!1,canonizeResults:cc(t)}),this.canon=t.canon||new mc,this.executeSelectionSet=hn(function(r){var i,a=r.context.canonizeResults,o=gc(r);o[3]=!a;var s=(i=n.executeSelectionSet).peek.apply(i,o);return s?a?_(_({},s),{result:n.canon.admit(s.result)}):s:(hc(r.context.store,r.enclosingRef.__ref),n.execSelectionSetImpl(r))},{max:this.config.resultCacheMaxSize||Me["inMemoryCache.executeSelectionSet"]||5e4,keyArgs:gc,makeCacheKey:function(r,i,a,o){if(Dn(a.store))return a.store.makeCacheKey(r,Q(i)?i.__ref:i,a.varString,o)}}),this.executeSubSelectedArray=hn(function(r){return hc(r.context.store,r.enclosingRef.__ref),n.execSubSelectedArrayImpl(r)},{max:this.config.resultCacheMaxSize||Me["inMemoryCache.executeSubSelectedArray"]||1e4,makeCacheKey:function(r){var i=r.field,a=r.array,o=r.context;if(Dn(o.store))return o.store.makeCacheKey(i,a,o.varString)}})}return e.prototype.resetCanon=function(){this.canon=new mc},e.prototype.diffQueryAgainstStore=function(t){var n=t.store,r=t.query,i=t.rootId,a=i===void 0?"ROOT_QUERY":i,o=t.variables,s=t.returnPartialData,u=s===void 0?!0:s,c=t.canonizeResults,l=c===void 0?this.config.canonizeResults:c,d=this.config.cache.policies;o=_(_({},Ui(Xs(r))),o);var f=xt(a),p=this.executeSelectionSet({selectionSet:$t(r).selectionSet,objectOrReference:f,enclosingRef:f,context:_({store:n,query:r,policies:d,variables:o,varString:He(o),canonizeResults:l},fc(r,this.config.fragments))}),y;if(p.missing&&(y=[new oc(xg(p.missing),p.missing,r,o)],!u))throw y[0];return{result:p.result,complete:!y,missing:y}},e.prototype.isFresh=function(t,n,r,i){if(Dn(i.store)&&this.knownResults.get(t)===r){var a=this.executeSelectionSet.peek(r,n,i,this.canon.isKnown(t));if(a&&t===a.result)return!0}return!1},e.prototype.execSelectionSetImpl=function(t){var n=this,r=t.selectionSet,i=t.objectOrReference,a=t.enclosingRef,o=t.context;if(Q(i)&&!o.policies.rootTypenamesById[i.__ref]&&!o.store.has(i.__ref))return{result:this.canon.empty,missing:"Dangling reference to missing ".concat(i.__ref," object")};var s=o.variables,u=o.policies,c=o.store,l=c.getFieldValue(i,"__typename"),d=[],f,p=new Ke;this.config.addTypename&&typeof l=="string"&&!u.rootIdsByTypename[l]&&d.push({__typename:l});function y(E,D){var I;return E.missing&&(f=p.merge(f,(I={},I[D]=E.missing,I))),E.result}var m=new Set(r.selections);m.forEach(function(E){var D,I;if(un(E,s))if(Ye(E)){var O=u.readField({fieldName:E.name.value,field:E,variables:o.variables,from:i},o),C=Le(E);O===void 0?Wi.added(E)||(f=p.merge(f,(D={},D[C]="Can't find field '".concat(E.name.value,"' on ").concat(Q(i)?i.__ref+" object":"object "+JSON.stringify(i,null,2)),D))):oe(O)?O.length>0&&(O=y(n.executeSubSelectedArray({field:E,array:O,enclosingRef:a,context:o}),C)):E.selectionSet?O!=null&&(O=y(n.executeSelectionSet({selectionSet:E.selectionSet,objectOrReference:O,enclosingRef:Q(O)?O:a,context:o}),C)):o.canonizeResults&&(O=n.canon.pass(O)),O!==void 0&&d.push((I={},I[C]=O,I))}else{var N=Zn(E,o.lookupFragment);if(!N&&E.kind===x.FRAGMENT_SPREAD)throw ye(10,E.name.value);N&&u.fragmentMatches(N,l)&&N.selectionSet.selections.forEach(m.add,m)}});var v=ir(d),g={result:v,missing:f},b=o.canonizeResults?this.canon.admit(g):sr(g);return b.result&&this.knownResults.set(b.result,r),b},e.prototype.execSubSelectedArrayImpl=function(t){var n=this,r=t.field,i=t.array,a=t.enclosingRef,o=t.context,s,u=new Ke;function c(l,d){var f;return l.missing&&(s=u.merge(s,(f={},f[d]=l.missing,f))),l.result}return r.selectionSet&&(i=i.filter(o.store.canRead)),i=i.map(function(l,d){return l===null?null:oe(l)?c(n.executeSubSelectedArray({field:r,array:l,enclosingRef:a,context:o}),d):r.selectionSet?c(n.executeSelectionSet({selectionSet:r.selectionSet,objectOrReference:l,enclosingRef:Q(l)?l:a,context:o}),d):(globalThis.__DEV__!==!1&&Cg(o.store,r,l),l)}),{result:o.canonizeResults?this.canon.admit(i):i,missing:s}},e})();function xg(e){try{JSON.stringify(e,function(t,n){if(typeof n=="string")throw n;return n})}catch(t){return t}}function Cg(e,t,n){if(!t.selectionSet){var r=new Set([n]);r.forEach(function(i){ae(i)&&($(!Q(i),11,Dg(e,i),t.name.value),Object.values(i).forEach(r.add,r))})}}var pa=new dn,yc=new WeakMap;function wn(e){var t=yc.get(e);return t||yc.set(e,t={vars:new Set,dep:pu()}),t}function vc(e){wn(e).vars.forEach(function(t){return t.forgetCache(e)})}function Fg(e){wn(e).vars.forEach(function(t){return t.attachCache(e)})}function Ag(e){var t=new Set,n=new Set,r=function(a){if(arguments.length>0){if(e!==a){e=a,t.forEach(function(u){wn(u).dep.dirty(r),$g(u)});var o=Array.from(n);n.clear(),o.forEach(function(u){return u(e)})}}else{var s=pa.getValue();s&&(i(s),wn(s).dep(r))}return e};r.onNextChange=function(a){return n.add(a),function(){n.delete(a)}};var i=r.attachCache=function(a){return t.add(a),wn(a).vars.add(r),r};return r.forgetCache=function(a){return t.delete(a)},r}function $g(e){e.broadcastWatches&&e.broadcastWatches()}var bc=Object.create(null);function ha(e){var t=JSON.stringify(e);return bc[t]||(bc[t]=Object.create(null))}function Sc(e){var t=ha(e);return t.keyFieldsFn||(t.keyFieldsFn=function(n,r){var i=function(o,s){return r.readField(s,o)},a=r.keyObject=ma(e,function(o){var s=Ut(r.storeObject,o,i);return s===void 0&&n!==r.storeObject&&le.call(n,o[0])&&(s=Ut(n,o,Dc)),$(s!==void 0,5,o.join("."),n),s});return"".concat(r.typename,":").concat(JSON.stringify(a))})}function _c(e){var t=ha(e);return t.keyArgsFn||(t.keyArgsFn=function(n,r){var i=r.field,a=r.variables,o=r.fieldName,s=ma(e,function(c){var l=c[0],d=l.charAt(0);if(d==="@"){if(i&&Ce(i.directives)){var f=l.slice(1),p=i.directives.find(function(g){return g.name.value===f}),y=p&&tr(p,a);return y&&Ut(y,c.slice(1))}return}if(d==="$"){var m=l.slice(1);if(a&&le.call(a,m)){var v=c.slice(0);return v[0]=m,Ut(a,v)}return}if(n)return Ut(n,c)}),u=JSON.stringify(s);return(n||u!=="{}")&&(o+=":"+u),o})}function ma(e,t){var n=new Ke;return Ec(e).reduce(function(r,i){var a,o=t(i);if(o!==void 0){for(var s=i.length-1;s>=0;--s)o=(a={},a[i[s]]=o,a);r=n.merge(r,o)}return r},Object.create(null))}function Ec(e){var t=ha(e);if(!t.paths){var n=t.paths=[],r=[];e.forEach(function(i,a){oe(i)?(Ec(i).forEach(function(o){return n.push(r.concat(o))}),r.length=0):(r.push(i),oe(e[a+1])||(n.push(r.slice(0)),r.length=0))})}return t.paths}function Dc(e,t){return e[t]}function Ut(e,t,n){return n=n||Dc,wc(t.reduce(function r(i,a){return oe(i)?i.map(function(o){return r(o,a)}):i&&n(i,a)},e))}function wc(e){return ae(e)?oe(e)?e.map(wc):ma(Object.keys(e).sort(),function(t){return Ut(e,t)}):e}function ga(e){return e.args!==void 0?e.args:e.field?tr(e.field,e.variables):null}var Pg=function(){},Tc=function(e,t){return t.fieldName},Ic=function(e,t,n){var r=n.mergeObjects;return r(e,t)},Oc=function(e,t){return t},Ng=(function(){function e(t){this.config=t,this.typePolicies=Object.create(null),this.toBeAdded=Object.create(null),this.supertypeMap=new Map,this.fuzzySubtypes=new Map,this.rootIdsByTypename=Object.create(null),this.rootTypenamesById=Object.create(null),this.usingPossibleTypes=!1,this.config=_({dataIdFromObject:sc},t),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),t.possibleTypes&&this.addPossibleTypes(t.possibleTypes),t.typePolicies&&this.addTypePolicies(t.typePolicies)}return e.prototype.identify=function(t,n){var r,i=this,a=n&&(n.typename||((r=n.storeObject)===null||r===void 0?void 0:r.__typename))||t.__typename;if(a===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];var o=n&&n.storeObject||t,s=_(_({},n),{typename:a,storeObject:o,readField:n&&n.readField||function(){var d=ya(arguments,o);return i.readField(d,{store:i.cache.data,variables:d.variables})}}),u,c=a&&this.getTypePolicy(a),l=c&&c.keyFn||this.config.dataIdFromObject;return ca.withValue(!0,function(){for(;l;){var d=l(_(_({},t),o),s);if(oe(d))l=Sc(d);else{u=d;break}}}),u=u?String(u):void 0,s.keyObject?[u,s.keyObject]:[u]},e.prototype.addTypePolicies=function(t){var n=this;Object.keys(t).forEach(function(r){var i=t[r],a=i.queryType,o=i.mutationType,s=i.subscriptionType,u=Ne(i,["queryType","mutationType","subscriptionType"]);a&&n.setRootTypename("Query",r),o&&n.setRootTypename("Mutation",r),s&&n.setRootTypename("Subscription",r),le.call(n.toBeAdded,r)?n.toBeAdded[r].push(u):n.toBeAdded[r]=[u]})},e.prototype.updateTypePolicy=function(t,n){var r=this,i=this.getTypePolicy(t),a=n.keyFields,o=n.fields;function s(u,c){u.merge=typeof c=="function"?c:c===!0?Ic:c===!1?Oc:u.merge}s(i,n.merge),i.keyFn=a===!1?Pg:oe(a)?Sc(a):typeof a=="function"?a:i.keyFn,o&&Object.keys(o).forEach(function(u){var c=r.getFieldPolicy(t,u,!0),l=o[u];if(typeof l=="function")c.read=l;else{var d=l.keyArgs,f=l.read,p=l.merge;c.keyFn=d===!1?Tc:oe(d)?_c(d):typeof d=="function"?d:c.keyFn,typeof f=="function"&&(c.read=f),s(c,p)}c.read&&c.merge&&(c.keyFn=c.keyFn||Tc)})},e.prototype.setRootTypename=function(t,n){n===void 0&&(n=t);var r="ROOT_"+t.toUpperCase(),i=this.rootTypenamesById[r];n!==i&&($(!i||i===t,6,t),i&&delete this.rootIdsByTypename[i],this.rootIdsByTypename[n]=r,this.rootTypenamesById[r]=n)},e.prototype.addPossibleTypes=function(t){var n=this;this.usingPossibleTypes=!0,Object.keys(t).forEach(function(r){n.getSupertypeSet(r,!0),t[r].forEach(function(i){n.getSupertypeSet(i,!0).add(r);var a=i.match(lc);(!a||a[0]!==i)&&n.fuzzySubtypes.set(i,new RegExp(i))})})},e.prototype.getTypePolicy=function(t){var n=this;if(!le.call(this.typePolicies,t)){var r=this.typePolicies[t]=Object.create(null);r.fields=Object.create(null);var i=this.supertypeMap.get(t);!i&&this.fuzzySubtypes.size&&(i=this.getSupertypeSet(t,!0),this.fuzzySubtypes.forEach(function(o,s){if(o.test(t)){var u=n.supertypeMap.get(s);u&&u.forEach(function(c){return i.add(c)})}})),i&&i.size&&i.forEach(function(o){var s=n.getTypePolicy(o),u=s.fields,c=Ne(s,["fields"]);Object.assign(r,c),Object.assign(r.fields,u)})}var a=this.toBeAdded[t];return a&&a.length&&a.splice(0).forEach(function(o){n.updateTypePolicy(t,o)}),this.typePolicies[t]},e.prototype.getFieldPolicy=function(t,n,r){if(t){var i=this.getTypePolicy(t).fields;return i[n]||r&&(i[n]=Object.create(null))}},e.prototype.getSupertypeSet=function(t,n){var r=this.supertypeMap.get(t);return!r&&n&&this.supertypeMap.set(t,r=new Set),r},e.prototype.fragmentMatches=function(t,n,r,i){var a=this;if(!t.typeCondition)return!0;if(!n)return!1;var o=t.typeCondition.name.value;if(n===o)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(o))for(var s=this.getSupertypeSet(n,!0),u=[s],c=function(y){var m=a.getSupertypeSet(y,!1);m&&m.size&&u.indexOf(m)<0&&u.push(m)},l=!!(r&&this.fuzzySubtypes.size),d=!1,f=0;f<u.length;++f){var p=u[f];if(p.has(o))return s.has(o)||(d&&globalThis.__DEV__!==!1&&$.warn(7,n,o),s.add(o)),!0;p.forEach(c),l&&f===u.length-1&&la(t.selectionSet,r,i)&&(l=!1,d=!0,this.fuzzySubtypes.forEach(function(y,m){var v=n.match(y);v&&v[0]===n&&c(m)}))}return!1},e.prototype.hasKeyArgs=function(t,n){var r=this.getFieldPolicy(t,n,!1);return!!(r&&r.keyFn)},e.prototype.getStoreFieldName=function(t){var n=t.typename,r=t.fieldName,i=this.getFieldPolicy(n,r,!1),a,o=i&&i.keyFn;if(o&&n)for(var s={typename:n,fieldName:r,field:t.field||null,variables:t.variables},u=ga(t);o;){var c=o(u,s);if(oe(c))o=_c(c);else{a=c||r;break}}return a===void 0&&(a=t.field?am(t.field,t.variables):Js(r,ga(t))),a===!1?r:r===et(a)?a:r+":"+a},e.prototype.readField=function(t,n){var r=t.from;if(r){var i=t.field||t.fieldName;if(i){if(t.typename===void 0){var a=n.store.getFieldValue(r,"__typename");a&&(t.typename=a)}var o=this.getStoreFieldName(t),s=et(o),u=n.store.getFieldValue(r,o),c=this.getFieldPolicy(t.typename,s,!1),l=c&&c.read;if(l){var d=kc(this,r,t,n,n.store.getStorage(Q(r)?r.__ref:r,o));return pa.withValue(this.cache,l,[u,d])}return u}}},e.prototype.getReadFunction=function(t,n){var r=this.getFieldPolicy(t,n,!1);return r&&r.read},e.prototype.getMergeFunction=function(t,n,r){var i=this.getFieldPolicy(t,n,!1),a=i&&i.merge;return!a&&r&&(i=this.getTypePolicy(r),a=i&&i.merge),a},e.prototype.runMergeFunction=function(t,n,r,i,a){var o=r.field,s=r.typename,u=r.merge;return u===Ic?xc(i.store)(t,n):u===Oc?n:(i.overwrite&&(t=void 0),u(t,n,kc(this,void 0,{typename:s,fieldName:o.name.value,field:o,variables:i.variables},i,a||Object.create(null))))},e})();function kc(e,t,n,r,i){var a=e.getStoreFieldName(n),o=et(a),s=n.variables||r.variables,u=r.store,c=u.toReference,l=u.canRead;return{args:ga(n),field:n.field||null,fieldName:o,storeFieldName:a,variables:s,isReference:Q,toReference:c,storage:i,cache:e.cache,canRead:l,readField:function(){return e.readField(ya(arguments,t,s),r)},mergeObjects:xc(r.store)}}function ya(e,t,n){var r=e[0],i=e[1],a=e.length,o;return typeof r=="string"?o={fieldName:r,from:a>1?i:t}:(o=_({},r),le.call(o,"from")||(o.from=t)),globalThis.__DEV__!==!1&&o.from===void 0&&globalThis.__DEV__!==!1&&$.warn(8,ws(Array.from(e))),o.variables===void 0&&(o.variables=n),o}function xc(e){return function(n,r){if(oe(n)||oe(r))throw ye(9);if(ae(n)&&ae(r)){var i=e.getFieldValue(n,"__typename"),a=e.getFieldValue(r,"__typename"),o=i&&a&&i!==a;if(o)return r;if(Q(n)&&qt(r))return e.merge(n.__ref,r),n;if(qt(n)&&Q(r))return e.merge(n,r.__ref),r;if(qt(n)&&qt(r))return _(_({},n),r)}return r}}function va(e,t,n){var r="".concat(t).concat(n),i=e.flavors.get(r);return i||e.flavors.set(r,i=e.clientOnly===t&&e.deferred===n?e:_(_({},e),{clientOnly:t,deferred:n})),i}var Rg=(function(){function e(t,n,r){this.cache=t,this.reader=n,this.fragments=r}return e.prototype.writeToStore=function(t,n){var r=this,i=n.query,a=n.result,o=n.dataId,s=n.variables,u=n.overwrite,c=pt(i),l=wg();s=_(_({},Ui(c)),s);var d=_(_({store:t,written:Object.create(null),merge:function(p,y){return l.merge(p,y)},variables:s,varString:He(s)},fc(i,this.fragments)),{overwrite:!!u,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map}),f=this.processSelectionSet({result:a||Object.create(null),dataId:o,selectionSet:c.selectionSet,mergeTree:{map:new Map},context:d});if(!Q(f))throw ye(12,a);return d.incomingById.forEach(function(p,y){var m=p.storeObject,v=p.mergeTree,g=p.fieldNodeSet,b=xt(y);if(v&&v.map.size){var E=r.applyMerges(v,b,m,d);if(Q(E))return;m=E}if(globalThis.__DEV__!==!1&&!d.overwrite){var D=Object.create(null);g.forEach(function(C){C.selectionSet&&(D[C.name.value]=!0)});var I=function(C){return D[et(C)]===!0},O=function(C){var N=v&&v.map.get(C);return!!(N&&N.info&&N.info.merge)};Object.keys(m).forEach(function(C){I(C)&&!O(C)&&Mg(b,m,C,d.store)})}t.merge(y,m)}),t.retain(f.__ref),f},e.prototype.processSelectionSet=function(t){var n=this,r=t.dataId,i=t.result,a=t.selectionSet,o=t.context,s=t.mergeTree,u=this.cache.policies,c=Object.create(null),l=r&&u.rootTypenamesById[r]||qi(i,a,o.fragmentMap)||r&&o.store.get(r,"__typename");typeof l=="string"&&(c.__typename=l);var d=function(){var E=ya(arguments,c,o.variables);if(Q(E.from)){var D=o.incomingById.get(E.from.__ref);if(D){var I=u.readField(_(_({},E),{from:D.storeObject}),o);if(I!==void 0)return I}}return u.readField(E,o)},f=new Set;this.flattenFields(a,i,o,l).forEach(function(E,D){var I,O=Le(D),C=i[O];if(f.add(D),C!==void 0){var N=u.getStoreFieldName({typename:l,fieldName:D.name.value,field:D,variables:E.variables}),L=Fc(s,N),U=n.processFieldValue(C,D,D.selectionSet?va(E,!1,!1):E,L),z=void 0;D.selectionSet&&(Q(U)||qt(U))&&(z=d("__typename",U));var fe=u.getMergeFunction(l,D.name.value,z);fe?L.info={field:D,typename:l,merge:fe}:Ac(s,N),c=E.merge(c,(I={},I[N]=U,I))}else globalThis.__DEV__!==!1&&!E.clientOnly&&!E.deferred&&!Wi.added(D)&&!u.getReadFunction(l,D.name.value)&&globalThis.__DEV__!==!1&&$.error(13,Le(D),i)});try{var p=u.identify(i,{typename:l,selectionSet:a,fragmentMap:o.fragmentMap,storeObject:c,readField:d}),y=p[0],m=p[1];r=r||y,m&&(c=o.merge(c,m))}catch(E){if(!r)throw E}if(typeof r=="string"){var v=xt(r),g=o.written[r]||(o.written[r]=[]);if(g.indexOf(a)>=0||(g.push(a),this.reader&&this.reader.isFresh(i,v,a,o)))return v;var b=o.incomingById.get(r);return b?(b.storeObject=o.merge(b.storeObject,c),b.mergeTree=ba(b.mergeTree,s),f.forEach(function(E){return b.fieldNodeSet.add(E)})):o.incomingById.set(r,{storeObject:c,mergeTree:pr(s)?void 0:s,fieldNodeSet:f}),v}return c},e.prototype.processFieldValue=function(t,n,r,i){var a=this;return!n.selectionSet||t===null?globalThis.__DEV__!==!1?xu(t):t:oe(t)?t.map(function(o,s){var u=a.processFieldValue(o,n,r,Fc(i,s));return Ac(i,s),u}):this.processSelectionSet({result:t,selectionSet:n.selectionSet,context:r,mergeTree:i})},e.prototype.flattenFields=function(t,n,r,i){i===void 0&&(i=qi(n,t,r.fragmentMap));var a=new Map,o=this.cache.policies,s=new Re(!1);return(function u(c,l){var d=s.lookup(c,l.clientOnly,l.deferred);d.visited||(d.visited=!0,c.selections.forEach(function(f){if(un(f,r.variables)){var p=l.clientOnly,y=l.deferred;if(!(p&&y)&&Ce(f.directives)&&f.directives.forEach(function(g){var b=g.name.value;if(b==="client"&&(p=!0),b==="defer"){var E=tr(g,r.variables);(!E||E.if!==!1)&&(y=!0)}}),Ye(f)){var m=a.get(f);m&&(p=p&&m.clientOnly,y=y&&m.deferred),a.set(f,va(r,p,y))}else{var v=Zn(f,r.lookupFragment);if(!v&&f.kind===x.FRAGMENT_SPREAD)throw ye(14,f.name.value);v&&o.fragmentMatches(v,i,n,r.variables)&&u(v.selectionSet,va(r,p,y))}}}))})(t,r),a},e.prototype.applyMerges=function(t,n,r,i,a){var o,s=this;if(t.map.size&&!Q(r)){var u=!oe(r)&&(Q(n)||qt(n))?n:void 0,c=r;u&&!a&&(a=[Q(u)?u.__ref:u]);var l,d=function(f,p){return oe(f)?typeof p=="number"?f[p]:void 0:i.store.getFieldValue(f,String(p))};t.map.forEach(function(f,p){var y=d(u,p),m=d(c,p);if(m!==void 0){a&&a.push(p);var v=s.applyMerges(f,y,m,i,a);v!==m&&(l=l||new Map,l.set(p,v)),a&&$(a.pop()===p)}}),l&&(r=oe(c)?c.slice(0):_({},c),l.forEach(function(f,p){r[p]=f}))}return t.info?this.cache.policies.runMergeFunction(n,r,t.info,i,a&&(o=i.store).getStorage.apply(o,a)):r},e})(),Cc=[];function Fc(e,t){var n=e.map;return n.has(t)||n.set(t,Cc.pop()||{map:new Map}),n.get(t)}function ba(e,t){if(e===t||!t||pr(t))return e;if(!e||pr(e))return t;var n=e.info&&t.info?_(_({},e.info),t.info):e.info||t.info,r=e.map.size&&t.map.size,i=r?new Map:e.map.size?e.map:t.map,a={info:n,map:i};if(r){var o=new Set(t.map.keys());e.map.forEach(function(s,u){a.map.set(u,ba(s,t.map.get(u))),o.delete(u)}),o.forEach(function(s){a.map.set(s,ba(t.map.get(s),e.map.get(s)))})}return a}function pr(e){return!e||!(e.info||e.map.size)}function Ac(e,t){var n=e.map,r=n.get(t);r&&pr(r)&&(Cc.push(r),n.delete(t))}var $c=new Set;function Mg(e,t,n,r){var i=function(d){var f=r.getFieldValue(d,n);return typeof f=="object"&&f},a=i(e);if(a){var o=i(t);if(o&&!Q(a)&&!ne(a,o)&&!Object.keys(a).every(function(d){return r.getFieldValue(o,d)!==void 0})){var s=r.getFieldValue(e,"__typename")||r.getFieldValue(t,"__typename"),u=et(n),c="".concat(s,".").concat(u);if(!$c.has(c)){$c.add(c);var l=[];!oe(a)&&!oe(o)&&[a,o].forEach(function(d){var f=r.getFieldValue(d,"__typename");typeof f=="string"&&!l.includes(f)&&l.push(f)}),globalThis.__DEV__!==!1&&$.warn(15,u,s,l.length?"either ensure all objects of type "+l.join(" and ")+" have an ID or a custom merge function, or ":"",c,_({},a),_({},o))}}}}var Sa=(function(e){Ee(t,e);function t(n){n===void 0&&(n={});var r=e.call(this)||this;return r.watches=new Set,r.addTypenameTransform=new mu(Wi),r.assumeImmutableResults=!0,r.makeVar=Ag,r.txCount=0,r.config=Eg(n),r.addTypename=!!r.config.addTypename,r.policies=new Ng({cache:r,dataIdFromObject:r.config.dataIdFromObject,possibleTypes:r.config.possibleTypes,typePolicies:r.config.typePolicies}),r.init(),r}return t.prototype.init=function(){var n=this.data=new En.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=n.stump,this.resetResultCache()},t.prototype.resetResultCache=function(n){var r=this,i=this.storeReader,a=this.config.fragments;this.storeWriter=new Rg(this,this.storeReader=new kg({cache:this,addTypename:this.addTypename,resultCacheMaxSize:this.config.resultCacheMaxSize,canonizeResults:cc(this.config),canon:n?void 0:i&&i.canon,fragments:a}),a),this.maybeBroadcastWatch=hn(function(o,s){return r.broadcastWatch(o,s)},{max:this.config.resultCacheMaxSize||Me["inMemoryCache.maybeBroadcastWatch"]||5e3,makeCacheKey:function(o){var s=o.optimistic?r.optimisticData:r.data;if(Dn(s)){var u=o.optimistic,c=o.id,l=o.variables;return s.makeCacheKey(o.query,o.callback,He({optimistic:u,id:c,variables:l}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach(function(o){return o.resetCaching()})},t.prototype.restore=function(n){return this.init(),n&&this.data.replace(n),this},t.prototype.extract=function(n){return n===void 0&&(n=!1),(n?this.optimisticData:this.data).extract()},t.prototype.read=function(n){var r=n.returnPartialData,i=r===void 0?!1:r;try{return this.storeReader.diffQueryAgainstStore(_(_({},n),{store:n.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:i})).result||null}catch(a){if(a instanceof oc)return null;throw a}},t.prototype.write=function(n){try{return++this.txCount,this.storeWriter.writeToStore(this.data,n)}finally{!--this.txCount&&n.broadcast!==!1&&this.broadcastWatches()}},t.prototype.modify=function(n){if(le.call(n,"id")&&!n.id)return!1;var r=n.optimistic?this.optimisticData:this.data;try{return++this.txCount,r.modify(n.id||"ROOT_QUERY",n.fields)}finally{!--this.txCount&&n.broadcast!==!1&&this.broadcastWatches()}},t.prototype.diff=function(n){return this.storeReader.diffQueryAgainstStore(_(_({},n),{store:n.optimistic?this.optimisticData:this.data,rootId:n.id||"ROOT_QUERY",config:this.config}))},t.prototype.watch=function(n){var r=this;return this.watches.size||Fg(this),this.watches.add(n),n.immediate&&this.maybeBroadcastWatch(n),function(){r.watches.delete(n)&&!r.watches.size&&vc(r),r.maybeBroadcastWatch.forget(n)}},t.prototype.gc=function(n){var r;He.reset(),Xe.reset(),this.addTypenameTransform.resetCache(),(r=this.config.fragments)===null||r===void 0||r.resetCaches();var i=this.optimisticData.gc();return n&&!this.txCount&&(n.resetResultCache?this.resetResultCache(n.resetResultIdentities):n.resetResultIdentities&&this.storeReader.resetCanon()),i},t.prototype.retain=function(n,r){return(r?this.optimisticData:this.data).retain(n)},t.prototype.release=function(n,r){return(r?this.optimisticData:this.data).release(n)},t.prototype.identify=function(n){if(Q(n))return n.__ref;try{return this.policies.identify(n)[0]}catch(r){globalThis.__DEV__!==!1&&$.warn(r)}},t.prototype.evict=function(n){if(!n.id){if(le.call(n,"id"))return!1;n=_(_({},n),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(n,this.data)}finally{!--this.txCount&&n.broadcast!==!1&&this.broadcastWatches()}},t.prototype.reset=function(n){var r=this;return this.init(),He.reset(),n&&n.discardWatches?(this.watches.forEach(function(i){return r.maybeBroadcastWatch.forget(i)}),this.watches.clear(),vc(this)):this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(n){var r=this.optimisticData.removeLayer(n);r!==this.optimisticData&&(this.optimisticData=r,this.broadcastWatches())},t.prototype.batch=function(n){var r=this,i=n.update,a=n.optimistic,o=a===void 0?!0:a,s=n.removeOptimistic,u=n.onWatchUpdated,c,l=function(f){var p=r,y=p.data,m=p.optimisticData;++r.txCount,f&&(r.data=r.optimisticData=f);try{return c=i(r)}finally{--r.txCount,r.data=y,r.optimisticData=m}},d=new Set;return u&&!this.txCount&&this.broadcastWatches(_(_({},n),{onWatchUpdated:function(f){return d.add(f),!1}})),typeof o=="string"?this.optimisticData=this.optimisticData.addLayer(o,l):o===!1?l(this.data):l(),typeof s=="string"&&(this.optimisticData=this.optimisticData.removeLayer(s)),u&&d.size?(this.broadcastWatches(_(_({},n),{onWatchUpdated:function(f,p){var y=u.call(this,f,p);return y!==!1&&d.delete(f),y}})),d.size&&d.forEach(function(f){return r.maybeBroadcastWatch.dirty(f)})):this.broadcastWatches(n),c},t.prototype.performTransaction=function(n,r){return this.batch({update:n,optimistic:r||r!==null})},t.prototype.transformDocument=function(n){return this.addTypenameToDocument(this.addFragmentsToDocument(n))},t.prototype.fragmentMatches=function(n,r){return this.policies.fragmentMatches(n,r)},t.prototype.lookupFragment=function(n){var r;return((r=this.config.fragments)===null||r===void 0?void 0:r.lookup(n))||null},t.prototype.broadcastWatches=function(n){var r=this;this.txCount||this.watches.forEach(function(i){return r.maybeBroadcastWatch(i,n)})},t.prototype.addFragmentsToDocument=function(n){var r=this.config.fragments;return r?r.transform(n):n},t.prototype.addTypenameToDocument=function(n){return this.addTypename?this.addTypenameTransform.transformDocument(n):n},t.prototype.broadcastWatch=function(n,r){var i=n.lastDiff,a=this.diff(n);r&&(n.optimistic&&typeof r.optimistic=="string"&&(a.fromOptimisticTransaction=!0),r.onWatchUpdated&&r.onWatchUpdated.call(this,n,a,i)===!1)||(!i||!ne(i.result,a.result))&&n.callback(n.lastDiff=a,i)},t})(ac);globalThis.__DEV__!==!1&&(Sa.prototype.getMemoryInternals=Uh);var H;(function(e){e[e.loading=1]="loading",e[e.setVariables=2]="setVariables",e[e.fetchMore=3]="fetchMore",e[e.refetch=4]="refetch",e[e.poll=6]="poll",e[e.ready=7]="ready",e[e.error=8]="error"})(H||(H={}));function Vt(e){return e?e<7:!1}var Pc=Object.assign,Lg=Object.hasOwnProperty,hr=(function(e){Ee(t,e);function t(n){var r=n.queryManager,i=n.queryInfo,a=n.options,o=this,s=t.inactiveOnCreation.getValue();o=e.call(this,function(g){o._getOrCreateQuery();try{var b=g._subscription._observer;b&&!b.error&&(b.error=jg)}catch{}var E=!o.observers.size;o.observers.add(g);var D=o.last;return D&&D.error?g.error&&g.error(D.error):D&&D.result&&g.next&&g.next(o.maskResult(D.result)),E&&o.reobserve().catch(function(){}),function(){o.observers.delete(g)&&!o.observers.size&&o.tearDownQuery()}})||this,o.observers=new Set,o.subscriptions=new Set,o.dirty=!1,o._getOrCreateQuery=function(){return s&&(r.queries.set(o.queryId,i),s=!1),o.queryManager.getOrCreateQuery(o.queryId)},o.queryInfo=i,o.queryManager=r,o.waitForOwnResult=_a(a.fetchPolicy),o.isTornDown=!1,o.subscribeToMore=o.subscribeToMore.bind(o),o.maskResult=o.maskResult.bind(o);var u=r.defaultOptions.watchQuery,c=u===void 0?{}:u,l=c.fetchPolicy,d=l===void 0?"cache-first":l,f=a.fetchPolicy,p=f===void 0?d:f,y=a.initialFetchPolicy,m=y===void 0?p==="standby"?d:p:y;o.options=_(_({},a),{initialFetchPolicy:m,fetchPolicy:p}),o.queryId=i.queryId||r.generateQueryId();var v=pt(o.query);return o.queryName=v&&v.name&&v.name.value,o}return Object.defineProperty(t.prototype,"query",{get:function(){return this.lastQuery||this.options.query},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"variables",{get:function(){return this.options.variables},enumerable:!1,configurable:!0}),t.prototype.result=function(){var n=this;return new Promise(function(r,i){var a={next:function(s){r(s),n.observers.delete(a),n.observers.size||n.queryManager.removeQuery(n.queryId),setTimeout(function(){o.unsubscribe()},0)},error:i},o=n.subscribe(a)})},t.prototype.resetDiff=function(){this.queryInfo.resetDiff()},t.prototype.getCurrentFullResult=function(n){n===void 0&&(n=!0);var r=this.getLastResult(!0),i=this.queryInfo.networkStatus||r&&r.networkStatus||H.ready,a=_(_({},r),{loading:Vt(i),networkStatus:i}),o=this.options.fetchPolicy,s=o===void 0?"cache-first":o;if(!(_a(s)||this.queryManager.getDocumentInfo(this.query).hasForcedResolvers))if(this.waitForOwnResult)this.queryInfo.updateWatch();else{var u=this.queryInfo.getDiff();(u.complete||this.options.returnPartialData)&&(a.data=u.result),ne(a.data,{})&&(a.data=void 0),u.complete?(delete a.partial,u.complete&&a.networkStatus===H.loading&&(s==="cache-first"||s==="cache-only")&&(a.networkStatus=H.ready,a.loading=!1)):a.partial=!0,a.networkStatus===H.ready&&(a.error||a.errors)&&(a.networkStatus=H.error),globalThis.__DEV__!==!1&&!u.complete&&!this.options.partialRefetch&&!a.loading&&!a.data&&!a.error&&Nc(u.missing)}return n&&this.updateLastResult(a),a},t.prototype.getCurrentResult=function(n){return n===void 0&&(n=!0),this.maskResult(this.getCurrentFullResult(n))},t.prototype.isDifferentFromLastResult=function(n,r){if(!this.last)return!0;var i=this.queryManager.getDocumentInfo(this.query),a=this.queryManager.dataMasking,o=a?i.nonReactiveQuery:this.query,s=a||i.hasNonreactiveDirective?!Xu(o,this.last.result,n,this.variables):!ne(this.last.result,n);return s||r&&!ne(this.last.variables,r)},t.prototype.getLast=function(n,r){var i=this.last;if(i&&i[n]&&(!r||ne(i.variables,this.variables)))return i[n]},t.prototype.getLastResult=function(n){return this.getLast("result",n)},t.prototype.getLastError=function(n){return this.getLast("error",n)},t.prototype.resetLastResults=function(){delete this.last,this.isTornDown=!1},t.prototype.resetQueryStoreErrors=function(){this.queryManager.resetErrors(this.queryId)},t.prototype.refetch=function(n){var r,i={pollInterval:0},a=this.options.fetchPolicy;if(a==="no-cache"?i.fetchPolicy="no-cache":i.fetchPolicy="network-only",globalThis.__DEV__!==!1&&n&&Lg.call(n,"variables")){var o=Xs(this.query),s=o.variableDefinitions;(!s||!s.some(function(u){return u.variable.name.value==="variables"}))&&globalThis.__DEV__!==!1&&$.warn(21,n,((r=o.name)===null||r===void 0?void 0:r.value)||o)}return n&&!ne(this.options.variables,n)&&(i.variables=this.options.variables=_(_({},this.options.variables),n)),this.queryInfo.resetLastWrite(),this.reobserve(i,H.refetch)},t.prototype.fetchMore=function(n){var r=this,i=_(_({},n.query?n:_(_(_(_({},this.options),{query:this.options.query}),n),{variables:_(_({},this.options.variables),n.variables)})),{fetchPolicy:"no-cache"});i.query=this.transformDocument(i.query);var a=this.queryManager.generateQueryId();this.lastQuery=n.query?this.transformDocument(this.options.query):i.query;var o=this.queryInfo,s=o.networkStatus;o.networkStatus=H.fetchMore,i.notifyOnNetworkStatusChange&&this.observe();var u=new Set,c=n?.updateQuery,l=this.options.fetchPolicy!=="no-cache";return l||$(c,22),this.queryManager.fetchQuery(a,i,H.fetchMore).then(function(d){if(r.queryManager.removeQuery(a),o.networkStatus===H.fetchMore&&(o.networkStatus=s),l)r.queryManager.cache.batch({update:function(y){var m=n.updateQuery;m?y.updateQuery({query:r.query,variables:r.variables,returnPartialData:!0,optimistic:!1},function(v){return m(v,{fetchMoreResult:d.data,variables:i.variables})}):y.writeQuery({query:i.query,variables:i.variables,data:d.data})},onWatchUpdated:function(y){u.add(y.query)}});else{var f=r.getLast("result"),p=c(f.data,{fetchMoreResult:d.data,variables:i.variables});r.reportResult(_(_({},f),{networkStatus:s,loading:Vt(s),data:p}),r.variables)}return r.maskResult(d)}).finally(function(){l&&!u.has(r.query)&&r.reobserveCacheFirst()})},t.prototype.subscribeToMore=function(n){var r=this,i=this.queryManager.startGraphQLSubscription({query:n.document,variables:n.variables,context:n.context}).subscribe({next:function(a){var o=n.updateQuery;o&&r.updateQuery(function(s,u){return o(s,_({subscriptionData:a},u))})},error:function(a){if(n.onError){n.onError(a);return}globalThis.__DEV__!==!1&&$.error(23,a)}});return this.subscriptions.add(i),function(){r.subscriptions.delete(i)&&i.unsubscribe()}},t.prototype.setOptions=function(n){return this.reobserve(n)},t.prototype.silentSetOptions=function(n){var r=jt(this.options,n||{});Pc(this.options,r)},t.prototype.setVariables=function(n){return ne(this.variables,n)?this.observers.size?this.result():Promise.resolve():(this.options.variables=n,this.observers.size?this.reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:n},H.setVariables):Promise.resolve())},t.prototype.updateQuery=function(n){var r=this.queryManager,i=r.cache.diff({query:this.options.query,variables:this.variables,returnPartialData:!0,optimistic:!1}),a=i.result,o=i.complete,s=n(a,{variables:this.variables,complete:!!o,previousData:a});s&&(r.cache.writeQuery({query:this.options.query,data:s,variables:this.variables}),r.broadcastQueries())},t.prototype.startPolling=function(n){this.options.pollInterval=n,this.updatePolling()},t.prototype.stopPolling=function(){this.options.pollInterval=0,this.updatePolling()},t.prototype.applyNextFetchPolicy=function(n,r){if(r.nextFetchPolicy){var i=r.fetchPolicy,a=i===void 0?"cache-first":i,o=r.initialFetchPolicy,s=o===void 0?a:o;a==="standby"||(typeof r.nextFetchPolicy=="function"?r.fetchPolicy=r.nextFetchPolicy(a,{reason:n,options:r,observable:this,initialFetchPolicy:s}):n==="variables-changed"?r.fetchPolicy=s:r.fetchPolicy=r.nextFetchPolicy)}return r.fetchPolicy},t.prototype.fetch=function(n,r,i){var a=this._getOrCreateQuery();return a.setObservableQuery(this),this.queryManager.fetchConcastWithInfo(a,n,r,i)},t.prototype.updatePolling=function(){var n=this;if(!this.queryManager.ssrMode){var r=this,i=r.pollingInfo,a=r.options.pollInterval;if(!a||!this.hasObservers()){i&&(clearTimeout(i.timeout),delete this.pollingInfo);return}if(!(i&&i.interval===a)){$(a,24);var o=i||(this.pollingInfo={});o.interval=a;var s=function(){var c,l;n.pollingInfo&&(!Vt(n.queryInfo.networkStatus)&&!(!((l=(c=n.options).skipPollAttempt)===null||l===void 0)&&l.call(c))?n.reobserve({fetchPolicy:n.options.initialFetchPolicy==="no-cache"?"no-cache":"network-only"},H.poll).then(u,u):u())},u=function(){var c=n.pollingInfo;c&&(clearTimeout(c.timeout),c.timeout=setTimeout(s,c.interval))};u()}}},t.prototype.updateLastResult=function(n,r){r===void 0&&(r=this.variables);var i=this.getLastError();return i&&this.last&&!ne(r,this.last.variables)&&(i=void 0),this.last=_({result:this.queryManager.assumeImmutableResults?n:xu(n),variables:r},i?{error:i}:null)},t.prototype.reobserveAsConcast=function(n,r){var i=this;this.isTornDown=!1;var a=r===H.refetch||r===H.fetchMore||r===H.poll,o=this.options.variables,s=this.options.fetchPolicy,u=jt(this.options,n||{}),c=a?u:Pc(this.options,u),l=this.transformDocument(c.query);this.lastQuery=l,a||(this.updatePolling(),n&&n.variables&&!ne(n.variables,o)&&c.fetchPolicy!=="standby"&&(c.fetchPolicy===s||typeof c.nextFetchPolicy=="function")&&(this.applyNextFetchPolicy("variables-changed",c),r===void 0&&(r=H.setVariables))),this.waitForOwnResult&&(this.waitForOwnResult=_a(c.fetchPolicy));var d=function(){i.concast===y&&(i.waitForOwnResult=!1)},f=c.variables&&_({},c.variables),p=this.fetch(c,r,l),y=p.concast,m=p.fromLink,v={next:function(g){ne(i.variables,f)&&(d(),i.reportResult(g,f))},error:function(g){ne(i.variables,f)&&(Mu(g)||(g=new Ze({networkError:g})),d(),i.reportError(g,f))}};return!a&&(m||!this.concast)&&(this.concast&&this.observer&&this.concast.removeObserver(this.observer),this.concast=y,this.observer=v),y.addObserver(v),y},t.prototype.reobserve=function(n,r){return $m(this.reobserveAsConcast(n,r).promise.then(this.maskResult))},t.prototype.resubscribeAfterError=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=this.last;this.resetLastResults();var a=this.subscribe.apply(this,n);return this.last=i,a},t.prototype.observe=function(){this.reportResult(this.getCurrentFullResult(!1),this.variables)},t.prototype.reportResult=function(n,r){var i=this.getLastError(),a=this.isDifferentFromLastResult(n,r);(i||!n.partial||this.options.returnPartialData)&&this.updateLastResult(n,r),(i||a)&&yn(this.observers,"next",this.maskResult(n))},t.prototype.reportError=function(n,r){var i=_(_({},this.getLastResult()),{error:n,errors:n.graphQLErrors,networkStatus:H.error,loading:!1});this.updateLastResult(i,r),yn(this.observers,"error",this.last.error=n)},t.prototype.hasObservers=function(){return this.observers.size>0},t.prototype.tearDownQuery=function(){this.isTornDown||(this.concast&&this.observer&&(this.concast.removeObserver(this.observer),delete this.concast,delete this.observer),this.stopPolling(),this.subscriptions.forEach(function(n){return n.unsubscribe()}),this.subscriptions.clear(),this.queryManager.stopQuery(this.queryId),this.observers.clear(),this.isTornDown=!0)},t.prototype.transformDocument=function(n){return this.queryManager.transform(n)},t.prototype.maskResult=function(n){return n&&"data"in n?_(_({},n),{data:this.queryManager.maskOperation({document:this.query,data:n.data,fetchPolicy:this.options.fetchPolicy,id:this.queryId})}):n},t.prototype.resetNotifications=function(){this.cancelNotifyTimeout(),this.dirty=!1},t.prototype.cancelNotifyTimeout=function(){this.notifyTimeout&&(clearTimeout(this.notifyTimeout),this.notifyTimeout=void 0)},t.prototype.scheduleNotify=function(){var n=this;this.dirty||(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(function(){return n.notify()},0)))},t.prototype.notify=function(){if(this.cancelNotifyTimeout(),this.dirty&&(this.options.fetchPolicy=="cache-only"||this.options.fetchPolicy=="cache-and-network"||!Vt(this.queryInfo.networkStatus))){var n=this.queryInfo.getDiff();n.fromOptimisticTransaction?this.observe():this.reobserveCacheFirst()}this.dirty=!1},t.prototype.reobserveCacheFirst=function(){var n=this.options,r=n.fetchPolicy,i=n.nextFetchPolicy;return r==="cache-and-network"||r==="network-only"?this.reobserve({fetchPolicy:"cache-first",nextFetchPolicy:function(a,o){return this.nextFetchPolicy=i,typeof this.nextFetchPolicy=="function"?this.nextFetchPolicy(a,o):r}}):this.reobserve()},t.inactiveOnCreation=new dn,t})(W);Cu(hr);function jg(e){globalThis.__DEV__!==!1&&$.error(25,e.message,e.stack)}function Nc(e){globalThis.__DEV__!==!1&&e&&globalThis.__DEV__!==!1&&$.debug(26,e)}function _a(e){return e==="network-only"||e==="no-cache"||e==="standby"}var Bt=new(ft?WeakMap:Map);function Ea(e,t){var n=e[t];typeof n=="function"&&(e[t]=function(){return Bt.set(e,(Bt.get(e)+1)%1e15),n.apply(this,arguments)})}var Da=(function(){function e(t,n){n===void 0&&(n=t.generateQueryId()),this.queryId=n,this.document=null,this.lastRequestId=1,this.stopped=!1,this.observableQuery=null;var r=this.cache=t.cache;Bt.has(r)||(Bt.set(r,0),Ea(r,"evict"),Ea(r,"modify"),Ea(r,"reset"))}return e.prototype.init=function(t){var n=t.networkStatus||H.loading;return this.variables&&this.networkStatus!==H.loading&&!ne(this.variables,t.variables)&&(n=H.setVariables),ne(t.variables,this.variables)||(this.lastDiff=void 0,this.cancel()),Object.assign(this,{document:t.document,variables:t.variables,networkError:null,graphQLErrors:this.graphQLErrors||[],networkStatus:n}),t.observableQuery&&this.setObservableQuery(t.observableQuery),t.lastRequestId&&(this.lastRequestId=t.lastRequestId),this},e.prototype.resetDiff=function(){this.lastDiff=void 0},e.prototype.getDiff=function(){var t=this.getDiffOptions();if(this.lastDiff&&ne(t,this.lastDiff.options))return this.lastDiff.diff;this.updateWatch(this.variables);var n=this.observableQuery;if(n&&n.options.fetchPolicy==="no-cache")return{complete:!1};var r=this.cache.diff(t);return this.updateLastDiff(r,t),r},e.prototype.updateLastDiff=function(t,n){this.lastDiff=t?{diff:t,options:n||this.getDiffOptions()}:void 0},e.prototype.getDiffOptions=function(t){var n;return t===void 0&&(t=this.variables),{query:this.document,variables:t,returnPartialData:!0,optimistic:!0,canonizeResults:(n=this.observableQuery)===null||n===void 0?void 0:n.options.canonizeResults}},e.prototype.setDiff=function(t){var n,r,i=this.lastDiff&&this.lastDiff.diff;t&&!t.complete&&(!((n=this.observableQuery)===null||n===void 0)&&n.getLastError())||(this.updateLastDiff(t),ne(i&&i.result,t&&t.result)||(r=this.observableQuery)===null||r===void 0||r.scheduleNotify())},e.prototype.setObservableQuery=function(t){t!==this.observableQuery&&(this.observableQuery=t,t&&(t.queryInfo=this))},e.prototype.stop=function(){var t;if(!this.stopped){this.stopped=!0,(t=this.observableQuery)===null||t===void 0||t.resetNotifications(),this.cancel();var n=this.observableQuery;n&&n.stopPolling()}},e.prototype.cancel=function(){var t;(t=this.cancelWatch)===null||t===void 0||t.call(this),this.cancelWatch=void 0},e.prototype.updateWatch=function(t){var n=this;t===void 0&&(t=this.variables);var r=this.observableQuery;if(!(r&&r.options.fetchPolicy==="no-cache")){var i=_(_({},this.getDiffOptions(t)),{watcher:this,callback:function(a){return n.setDiff(a)}});(!this.lastWatch||!ne(i,this.lastWatch))&&(this.cancel(),this.cancelWatch=this.cache.watch(this.lastWatch=i))}},e.prototype.resetLastWrite=function(){this.lastWrite=void 0},e.prototype.shouldWrite=function(t,n){var r=this.lastWrite;return!(r&&r.dmCount===Bt.get(this.cache)&&ne(n,r.variables)&&ne(t.data,r.result.data))},e.prototype.markResult=function(t,n,r,i){var a=this,o,s=new Ke,u=Ce(t.errors)?t.errors.slice(0):[];if((o=this.observableQuery)===null||o===void 0||o.resetNotifications(),"incremental"in t&&Ce(t.incremental)){var c=Au(this.getDiff().result,t);t.data=c}else if("hasNext"in t&&t.hasNext){var l=this.getDiff();t.data=s.merge(l.result,t.data)}this.graphQLErrors=u,r.fetchPolicy==="no-cache"?this.updateLastDiff({result:t.data,complete:!0},this.getDiffOptions(r.variables)):i!==0&&(wa(t,r.errorPolicy)?this.cache.performTransaction(function(d){if(a.shouldWrite(t,r.variables))d.writeQuery({query:n,data:t.data,variables:r.variables,overwrite:i===1}),a.lastWrite={result:t,variables:r.variables,dmCount:Bt.get(a.cache)};else if(a.lastDiff&&a.lastDiff.diff.complete){t.data=a.lastDiff.diff.result;return}var f=a.getDiffOptions(r.variables),p=d.diff(f);!a.stopped&&ne(a.variables,r.variables)&&a.updateWatch(r.variables),a.updateLastDiff(p,f),p.complete&&(t.data=p.result)}):this.lastWrite=void 0)},e.prototype.markReady=function(){return this.networkError=null,this.networkStatus=H.ready},e.prototype.markError=function(t){var n;return this.networkStatus=H.error,this.lastWrite=void 0,(n=this.observableQuery)===null||n===void 0||n.resetNotifications(),t.graphQLErrors&&(this.graphQLErrors=t.graphQLErrors),t.networkError&&(this.networkError=t.networkError),t},e})();function wa(e,t){t===void 0&&(t="none");var n=t==="ignore"||t==="all",r=!ur(e);return!r&&n&&e.data&&(r=!0),r}var qg=Object.prototype.hasOwnProperty,Rc=Object.create(null),Ug=(function(){function e(t){var n=this;this.clientAwareness={},this.queries=new Map,this.fetchCancelFns=new Map,this.transformCache=new zs(Me["queryManager.getDocumentInfo"]||2e3),this.queryIdCounter=1,this.requestIdCounter=1,this.mutationIdCounter=1,this.inFlightLinkObservables=new Re(!1),this.noCacheWarningsByQueryId=new Set;var r=new mu(function(a){return n.cache.transformDocument(a)},{cache:!1});this.cache=t.cache,this.link=t.link,this.defaultOptions=t.defaultOptions,this.queryDeduplication=t.queryDeduplication,this.clientAwareness=t.clientAwareness,this.localState=t.localState,this.ssrMode=t.ssrMode,this.assumeImmutableResults=t.assumeImmutableResults,this.dataMasking=t.dataMasking;var i=t.documentTransform;this.documentTransform=i?r.concat(i).concat(r):r,this.defaultContext=t.defaultContext||Object.create(null),(this.onBroadcast=t.onBroadcast)&&(this.mutationStore=Object.create(null))}return e.prototype.stop=function(){var t=this;this.queries.forEach(function(n,r){t.stopQueryNoBroadcast(r)}),this.cancelPendingFetches(ye(27))},e.prototype.cancelPendingFetches=function(t){this.fetchCancelFns.forEach(function(n){return n(t)}),this.fetchCancelFns.clear()},e.prototype.mutate=function(t){return ze(this,arguments,void 0,function(n){var r,i,a,o,s,u,c,l=n.mutation,d=n.variables,f=n.optimisticResponse,p=n.updateQueries,y=n.refetchQueries,m=y===void 0?[]:y,v=n.awaitRefetchQueries,g=v===void 0?!1:v,b=n.update,E=n.onQueryUpdated,D=n.fetchPolicy,I=D===void 0?((u=this.defaultOptions.mutate)===null||u===void 0?void 0:u.fetchPolicy)||"network-only":D,O=n.errorPolicy,C=O===void 0?((c=this.defaultOptions.mutate)===null||c===void 0?void 0:c.errorPolicy)||"none":O,N=n.keepRootFields,L=n.context;return Qe(this,function(U){switch(U.label){case 0:return $(l,28),$(I==="network-only"||I==="no-cache",29),r=this.generateMutationId(),l=this.cache.transformForLink(this.transform(l)),i=this.getDocumentInfo(l).hasClientExports,d=this.getVariables(l,d),i?[4,this.localState.addExportedVariables(l,d,L)]:[3,2];case 1:d=U.sent(),U.label=2;case 2:return a=this.mutationStore&&(this.mutationStore[r]={mutation:l,variables:d,loading:!0,error:null}),o=f&&this.markMutationOptimistic(f,{mutationId:r,document:l,variables:d,fetchPolicy:I,errorPolicy:C,context:L,updateQueries:p,update:b,keepRootFields:N}),this.broadcastQueries(),s=this,[2,new Promise(function(z,fe){return na(s.getObservableFromLink(l,_(_({},L),{optimisticResponse:o?f:void 0}),d,{},!1),function(ie){if(ur(ie)&&C==="none")throw new Ze({graphQLErrors:ra(ie)});a&&(a.loading=!1,a.error=null);var ge=_({},ie);return typeof m=="function"&&(m=m(ge)),C==="ignore"&&ur(ge)&&delete ge.errors,s.markMutationResult({mutationId:r,result:ge,document:l,variables:d,fetchPolicy:I,errorPolicy:C,context:L,update:b,updateQueries:p,awaitRefetchQueries:g,refetchQueries:m,removeOptimistic:o?r:void 0,onQueryUpdated:E,keepRootFields:N})}).subscribe({next:function(ie){s.broadcastQueries(),(!("hasNext"in ie)||ie.hasNext===!1)&&z(_(_({},ie),{data:s.maskOperation({document:l,data:ie.data,fetchPolicy:I,id:r})}))},error:function(ie){a&&(a.loading=!1,a.error=ie),o&&s.cache.removeOptimistic(r),s.broadcastQueries(),fe(ie instanceof Ze?ie:new Ze({networkError:ie}))}})})]}})})},e.prototype.markMutationResult=function(t,n){var r=this;n===void 0&&(n=this.cache);var i=t.result,a=[],o=t.fetchPolicy==="no-cache";if(!o&&wa(i,t.errorPolicy)){if(Lt(i)||a.push({result:i.data,dataId:"ROOT_MUTATION",query:t.document,variables:t.variables}),Lt(i)&&Ce(i.incremental)){var s=n.diff({id:"ROOT_MUTATION",query:this.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0}),u=void 0;s.result&&(u=Au(s.result,i)),typeof u<"u"&&(i.data=u,a.push({result:u,dataId:"ROOT_MUTATION",query:t.document,variables:t.variables}))}var c=t.updateQueries;c&&this.queries.forEach(function(d,f){var p=d.observableQuery,y=p&&p.queryName;if(!(!y||!qg.call(c,y))){var m=c[y],v=r.queries.get(f),g=v.document,b=v.variables,E=n.diff({query:g,variables:b,returnPartialData:!0,optimistic:!1}),D=E.result,I=E.complete;if(I&&D){var O=m(D,{mutationResult:i,queryName:g&&fn(g)||void 0,queryVariables:b});O&&a.push({result:O,dataId:"ROOT_QUERY",query:g,variables:b})}}})}if(a.length>0||(t.refetchQueries||"").length>0||t.update||t.onQueryUpdated||t.removeOptimistic){var l=[];if(this.refetchQueries({updateCache:function(d){o||a.forEach(function(m){return d.write(m)});var f=t.update,p=!Lm(i)||Lt(i)&&!i.hasNext;if(f){if(!o){var y=d.diff({id:"ROOT_MUTATION",query:r.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0});y.complete&&(i=_(_({},i),{data:y.result}),"incremental"in i&&delete i.incremental,"hasNext"in i&&delete i.hasNext)}p&&f(d,i,{context:t.context,variables:t.variables})}!o&&!t.keepRootFields&&p&&d.modify({id:"ROOT_MUTATION",fields:function(m,v){var g=v.fieldName,b=v.DELETE;return g==="__typename"?m:b}})},include:t.refetchQueries,optimistic:!1,removeOptimistic:t.removeOptimistic,onQueryUpdated:t.onQueryUpdated||null}).forEach(function(d){return l.push(d)}),t.awaitRefetchQueries||t.onQueryUpdated)return Promise.all(l).then(function(){return i})}return Promise.resolve(i)},e.prototype.markMutationOptimistic=function(t,n){var r=this,i=typeof t=="function"?t(n.variables,{IGNORE:Rc}):t;return i===Rc?!1:(this.cache.recordOptimisticTransaction(function(a){try{r.markMutationResult(_(_({},n),{result:{data:i}}),a)}catch(o){globalThis.__DEV__!==!1&&$.error(o)}},n.mutationId),!0)},e.prototype.fetchQuery=function(t,n,r){return this.fetchConcastWithInfo(this.getOrCreateQuery(t),n,r).concast.promise},e.prototype.getQueryStore=function(){var t=Object.create(null);return this.queries.forEach(function(n,r){t[r]={variables:n.variables,networkStatus:n.networkStatus,networkError:n.networkError,graphQLErrors:n.graphQLErrors}}),t},e.prototype.resetErrors=function(t){var n=this.queries.get(t);n&&(n.networkError=void 0,n.graphQLErrors=[])},e.prototype.transform=function(t){return this.documentTransform.transformDocument(t)},e.prototype.getDocumentInfo=function(t){var n=this.transformCache;if(!n.has(t)){var r={hasClientExports:_h(t),hasForcedResolvers:this.localState.shouldForceResolvers(t),hasNonreactiveDirective:cn(["nonreactive"],t),nonReactiveQuery:Em(t),clientQuery:this.localState.clientQuery(t),serverQuery:bu([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"},{name:"unmask"}],t),defaultVars:Ui(pt(t)),asQuery:_(_({},t),{definitions:t.definitions.map(function(i){return i.kind==="OperationDefinition"&&i.operation!=="query"?_(_({},i),{operation:"query"}):i})})};n.set(t,r)}return n.get(t)},e.prototype.getVariables=function(t,n){return _(_({},this.getDocumentInfo(t).defaultVars),n)},e.prototype.watchQuery=function(t){var n=this.transform(t.query);t=_(_({},t),{variables:this.getVariables(n,t.variables)}),typeof t.notifyOnNetworkStatusChange>"u"&&(t.notifyOnNetworkStatusChange=!1);var r=new Da(this),i=new hr({queryManager:this,queryInfo:r,options:t});return i.lastQuery=n,hr.inactiveOnCreation.getValue()||this.queries.set(i.queryId,r),r.init({document:n,observableQuery:i,variables:i.variables}),i},e.prototype.query=function(t,n){var r=this;n===void 0&&(n=this.generateQueryId()),$(t.query,30),$(t.query.kind==="Document",31),$(!t.returnPartialData,32),$(!t.pollInterval,33);var i=this.transform(t.query);return this.fetchQuery(n,_(_({},t),{query:i})).then(function(a){return a&&_(_({},a),{data:r.maskOperation({document:i,data:a.data,fetchPolicy:t.fetchPolicy,id:n})})}).finally(function(){return r.stopQuery(n)})},e.prototype.generateQueryId=function(){return String(this.queryIdCounter++)},e.prototype.generateRequestId=function(){return this.requestIdCounter++},e.prototype.generateMutationId=function(){return String(this.mutationIdCounter++)},e.prototype.stopQueryInStore=function(t){this.stopQueryInStoreNoBroadcast(t),this.broadcastQueries()},e.prototype.stopQueryInStoreNoBroadcast=function(t){var n=this.queries.get(t);n&&n.stop()},e.prototype.clearStore=function(t){return t===void 0&&(t={discardWatches:!0}),this.cancelPendingFetches(ye(34)),this.queries.forEach(function(n){n.observableQuery?n.networkStatus=H.loading:n.stop()}),this.mutationStore&&(this.mutationStore=Object.create(null)),this.cache.reset(t)},e.prototype.getObservableQueries=function(t){var n=this;t===void 0&&(t="active");var r=new Map,i=new Map,a=new Map,o=new Set;return Array.isArray(t)&&t.forEach(function(s){if(typeof s=="string")i.set(s,s),a.set(s,!1);else if(Yh(s)){var u=Xe(n.transform(s));i.set(u,fn(s)),a.set(u,!1)}else ae(s)&&s.query&&o.add(s)}),this.queries.forEach(function(s,u){var c=s.observableQuery,l=s.document;if(c){if(t==="all"){r.set(u,c);return}var d=c.queryName,f=c.options.fetchPolicy;if(f==="standby"||t==="active"&&!c.hasObservers())return;(t==="active"||d&&a.has(d)||l&&a.has(Xe(l)))&&(r.set(u,c),d&&a.set(d,!0),l&&a.set(Xe(l),!0))}}),o.size&&o.forEach(function(s){var u=wi("legacyOneTimeQuery"),c=n.getOrCreateQuery(u).init({document:s.query,variables:s.variables}),l=new hr({queryManager:n,queryInfo:c,options:_(_({},s),{fetchPolicy:"network-only"})});$(l.queryId===u),c.setObservableQuery(l),r.set(u,l)}),globalThis.__DEV__!==!1&&a.size&&a.forEach(function(s,u){if(!s){var c=i.get(u);c?globalThis.__DEV__!==!1&&$.warn(35,c):globalThis.__DEV__!==!1&&$.warn(36)}}),r},e.prototype.reFetchObservableQueries=function(t){var n=this;t===void 0&&(t=!1);var r=[];return this.getObservableQueries(t?"all":"active").forEach(function(i,a){var o=i.options.fetchPolicy;i.resetLastResults(),(t||o!=="standby"&&o!=="cache-only")&&r.push(i.refetch()),(n.queries.get(a)||i.queryInfo).setDiff(null)}),this.broadcastQueries(),Promise.all(r)},e.prototype.startGraphQLSubscription=function(t){var n=this,r=t.query,i=t.variables,a=t.fetchPolicy,o=t.errorPolicy,s=o===void 0?"none":o,u=t.context,c=u===void 0?{}:u,l=t.extensions,d=l===void 0?{}:l;r=this.transform(r),i=this.getVariables(r,i);var f=function(y){return n.getObservableFromLink(r,c,y,d).map(function(m){a!=="no-cache"&&(wa(m,s)&&n.cache.write({query:r,result:m.data,dataId:"ROOT_SUBSCRIPTION",variables:y}),n.broadcastQueries());var v=ur(m),g=Ru(m);if(v||g){var b={};if(v&&(b.graphQLErrors=m.errors),g&&(b.protocolErrors=m.extensions[lr]),s==="none"||g)throw new Ze(b)}return s==="ignore"&&delete m.errors,m})};if(this.getDocumentInfo(r).hasClientExports){var p=this.localState.addExportedVariables(r,i,c).then(f);return new W(function(y){var m=null;return p.then(function(v){return m=v.subscribe(y)},y.error),function(){return m&&m.unsubscribe()}})}return f(i)},e.prototype.stopQuery=function(t){this.stopQueryNoBroadcast(t),this.broadcastQueries()},e.prototype.stopQueryNoBroadcast=function(t){this.stopQueryInStoreNoBroadcast(t),this.removeQuery(t)},e.prototype.removeQuery=function(t){var n;this.fetchCancelFns.delete(t),this.queries.has(t)&&((n=this.queries.get(t))===null||n===void 0||n.stop(),this.queries.delete(t))},e.prototype.broadcastQueries=function(){this.onBroadcast&&this.onBroadcast(),this.queries.forEach(function(t){var n;return(n=t.observableQuery)===null||n===void 0?void 0:n.notify()})},e.prototype.getLocalState=function(){return this.localState},e.prototype.getObservableFromLink=function(t,n,r,i,a){var o=this,s;a===void 0&&(a=(s=n?.queryDeduplication)!==null&&s!==void 0?s:this.queryDeduplication);var u,c=this.getDocumentInfo(t),l=c.serverQuery,d=c.clientQuery;if(l){var f=this,p=f.inFlightLinkObservables,y=f.link,m={query:l,variables:r,operationName:fn(l)||void 0,context:this.prepareContext(_(_({},n),{forceFetch:!a})),extensions:i};if(n=m.context,a){var v=Xe(l),g=He(r),b=p.lookup(v,g);if(u=b.observable,!u){var E=new Mt([oa(y,m)]);u=b.observable=E,E.beforeNext(function D(I,O){I==="next"&&"hasNext"in O&&O.hasNext?E.beforeNext(D):p.remove(v,g)})}}else u=new Mt([oa(y,m)])}else u=new Mt([W.of({data:{}})]),n=this.prepareContext(n);return d&&(u=na(u,function(D){return o.localState.runResolvers({document:d,remoteResult:D,context:n,variables:r})})),u},e.prototype.getResultsFromLink=function(t,n,r){var i=t.lastRequestId=this.generateRequestId(),a=this.cache.transformForLink(r.query);return na(this.getObservableFromLink(a,r.context,r.variables),function(o){var s=ra(o),u=s.length>0,c=r.errorPolicy;if(i>=t.lastRequestId){if(u&&c==="none")throw t.markError(new Ze({graphQLErrors:s}));t.markResult(o,a,r,n),t.markReady()}var l={data:o.data,loading:!1,networkStatus:H.ready};return u&&c==="none"&&(l.data=void 0),u&&c!=="ignore"&&(l.errors=s,l.networkStatus=H.error),l},function(o){var s=Mu(o)?o:new Ze({networkError:o});throw i>=t.lastRequestId&&t.markError(s),s})},e.prototype.fetchConcastWithInfo=function(t,n,r,i){var a=this;r===void 0&&(r=H.loading),i===void 0&&(i=n.query);var o=this.getVariables(i,n.variables),s=this.defaultOptions.watchQuery,u=n.fetchPolicy,c=u===void 0?s&&s.fetchPolicy||"cache-first":u,l=n.errorPolicy,d=l===void 0?s&&s.errorPolicy||"none":l,f=n.returnPartialData,p=f===void 0?!1:f,y=n.notifyOnNetworkStatusChange,m=y===void 0?!1:y,v=n.context,g=v===void 0?{}:v,b=Object.assign({},n,{query:i,variables:o,fetchPolicy:c,errorPolicy:d,returnPartialData:p,notifyOnNetworkStatusChange:m,context:g}),E=function(N){b.variables=N;var L=a.fetchQueryByPolicy(t,b,r);return b.fetchPolicy!=="standby"&&L.sources.length>0&&t.observableQuery&&t.observableQuery.applyNextFetchPolicy("after-fetch",n),L},D=function(){return a.fetchCancelFns.delete(t.queryId)};this.fetchCancelFns.set(t.queryId,function(N){D(),setTimeout(function(){return I.cancel(N)})});var I,O;if(this.getDocumentInfo(b.query).hasClientExports)I=new Mt(this.localState.addExportedVariables(b.query,b.variables,b.context).then(E).then(function(N){return N.sources})),O=!0;else{var C=E(b.variables);O=C.fromLink,I=new Mt(C.sources)}return I.promise.then(D,D),{concast:I,fromLink:O}},e.prototype.refetchQueries=function(t){var n=this,r=t.updateCache,i=t.include,a=t.optimistic,o=a===void 0?!1:a,s=t.removeOptimistic,u=s===void 0?o?wi("refetchQueries"):void 0:s,c=t.onQueryUpdated,l=new Map;i&&this.getObservableQueries(i).forEach(function(f,p){l.set(p,{oq:f,lastDiff:(n.queries.get(p)||f.queryInfo).getDiff()})});var d=new Map;return r&&this.cache.batch({update:r,optimistic:o&&u||!1,removeOptimistic:u,onWatchUpdated:function(f,p,y){var m=f.watcher instanceof Da&&f.watcher.observableQuery;if(m){if(c){l.delete(m.queryId);var v=c(m,p,y);return v===!0&&(v=m.refetch()),v!==!1&&d.set(m,v),v}c!==null&&l.set(m.queryId,{oq:m,lastDiff:y,diff:p})}}}),l.size&&l.forEach(function(f,p){var y=f.oq,m=f.lastDiff,v=f.diff,g;c&&(v||(v=n.cache.diff(y.queryInfo.getDiffOptions())),g=c(y,v,m)),(!c||g===!0)&&(g=y.refetch()),g!==!1&&d.set(y,g),p.indexOf("legacyOneTimeQuery")>=0&&n.stopQueryNoBroadcast(p)}),u&&this.cache.removeOptimistic(u),d},e.prototype.maskOperation=function(t){var n,r,i,a=t.document,o=t.data;if(globalThis.__DEV__!==!1){var s=t.fetchPolicy,u=t.id,c=(n=pt(a))===null||n===void 0?void 0:n.operation,l=((r=c?.[0])!==null&&r!==void 0?r:"o")+u;this.dataMasking&&s==="no-cache"&&!Fh(a)&&!this.noCacheWarningsByQueryId.has(l)&&(this.noCacheWarningsByQueryId.add(l),globalThis.__DEV__!==!1&&$.warn(37,(i=fn(a))!==null&&i!==void 0?i:"Unnamed ".concat(c??"operation")))}return this.dataMasking?_g(o,a,this.cache):o},e.prototype.maskFragment=function(t){var n=t.data,r=t.fragment,i=t.fragmentName;return this.dataMasking?ic(n,r,this.cache,i):n},e.prototype.fetchQueryByPolicy=function(t,n,r){var i=this,a=n.query,o=n.variables,s=n.fetchPolicy,u=n.refetchWritePolicy,c=n.errorPolicy,l=n.returnPartialData,d=n.context,f=n.notifyOnNetworkStatusChange,p=t.networkStatus;t.init({document:a,variables:o,networkStatus:r});var y=function(){return t.getDiff()},m=function(D,I){I===void 0&&(I=t.networkStatus||H.loading);var O=D.result;globalThis.__DEV__!==!1&&!l&&!ne(O,{})&&Nc(D.missing);var C=function(N){return W.of(_({data:N,loading:Vt(I),networkStatus:I},D.complete?null:{partial:!0}))};return O&&i.getDocumentInfo(a).hasForcedResolvers?i.localState.runResolvers({document:a,remoteResult:{data:O},context:d,variables:o,onlyRunForcedResolvers:!0}).then(function(N){return C(N.data||void 0)}):c==="none"&&I===H.refetch&&Array.isArray(D.missing)?C(void 0):C(O)},v=s==="no-cache"?0:r===H.refetch&&u!=="merge"?1:2,g=function(){return i.getResultsFromLink(t,v,{query:a,variables:o,context:d,fetchPolicy:s,errorPolicy:c})},b=f&&typeof p=="number"&&p!==r&&Vt(r);switch(s){default:case"cache-first":{var E=y();return E.complete?{fromLink:!1,sources:[m(E,t.markReady())]}:l||b?{fromLink:!0,sources:[m(E),g()]}:{fromLink:!0,sources:[g()]}}case"cache-and-network":{var E=y();return E.complete||l||b?{fromLink:!0,sources:[m(E),g()]}:{fromLink:!0,sources:[g()]}}case"cache-only":return{fromLink:!1,sources:[m(y(),t.markReady())]};case"network-only":return b?{fromLink:!0,sources:[m(y()),g()]}:{fromLink:!0,sources:[g()]};case"no-cache":return b?{fromLink:!0,sources:[m(t.getDiff()),g()]}:{fromLink:!0,sources:[g()]};case"standby":return{fromLink:!1,sources:[]}}},e.prototype.getOrCreateQuery=function(t){return t&&!this.queries.has(t)&&this.queries.set(t,new Da(this,t)),this.queries.get(t)},e.prototype.prepareContext=function(t){t===void 0&&(t={});var n=this.localState.prepareContext(t);return _(_(_({},this.defaultContext),n),{clientAwareness:this.clientAwareness})},e})(),Vg=(function(){function e(t){var n=t.cache,r=t.client,i=t.resolvers,a=t.fragmentMatcher;this.selectionsToResolveCache=new WeakMap,this.cache=n,r&&(this.client=r),i&&this.addResolvers(i),a&&this.setFragmentMatcher(a)}return e.prototype.addResolvers=function(t){var n=this;this.resolvers=this.resolvers||{},Array.isArray(t)?t.forEach(function(r){n.resolvers=_u(n.resolvers,r)}):this.resolvers=_u(this.resolvers,t)},e.prototype.setResolvers=function(t){this.resolvers={},this.addResolvers(t)},e.prototype.getResolvers=function(){return this.resolvers||{}},e.prototype.runResolvers=function(t){return ze(this,arguments,void 0,function(n){var r=n.document,i=n.remoteResult,a=n.context,o=n.variables,s=n.onlyRunForcedResolvers,u=s===void 0?!1:s;return Qe(this,function(c){return r?[2,this.resolveDocument(r,i.data,a,o,this.fragmentMatcher,u).then(function(l){return _(_({},i),{data:l.result})})]:[2,i]})})},e.prototype.setFragmentMatcher=function(t){this.fragmentMatcher=t},e.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},e.prototype.clientQuery=function(t){return cn(["client"],t)&&this.resolvers?t:null},e.prototype.serverQuery=function(t){return Su(t)},e.prototype.prepareContext=function(t){var n=this.cache;return _(_({},t),{cache:n,getCacheKey:function(r){return n.identify(r)}})},e.prototype.addExportedVariables=function(t){return ze(this,arguments,void 0,function(n,r,i){return r===void 0&&(r={}),i===void 0&&(i={}),Qe(this,function(a){return n?[2,this.resolveDocument(n,this.buildRootValueFromCache(n,r)||{},this.prepareContext(i),r).then(function(o){return _(_({},r),o.exportedVariables)})]:[2,_({},r)]})})},e.prototype.shouldForceResolvers=function(t){var n=!1;return we(t,{Directive:{enter:function(r){if(r.name.value==="client"&&r.arguments&&(n=r.arguments.some(function(i){return i.name.value==="always"&&i.value.kind==="BooleanValue"&&i.value.value===!0}),n))return Jn}}}),n},e.prototype.buildRootValueFromCache=function(t,n){return this.cache.diff({query:_m(t),variables:n,returnPartialData:!0,optimistic:!1}).result},e.prototype.resolveDocument=function(t,n){return ze(this,arguments,void 0,function(r,i,a,o,s,u){var c,l,d,f,p,y,m,v,g,b,E;return a===void 0&&(a={}),o===void 0&&(o={}),s===void 0&&(s=function(){return!0}),u===void 0&&(u=!1),Qe(this,function(D){return c=$t(r),l=At(r),d=Ot(l),f=this.collectSelectionsToResolve(c,d),p=c.operation,y=p?p.charAt(0).toUpperCase()+p.slice(1):"Query",m=this,v=m.cache,g=m.client,b={fragmentMap:d,context:_(_({},a),{cache:v,client:g}),variables:o,fragmentMatcher:s,defaultOperationType:y,exportedVariables:{},selectionsToResolve:f,onlyRunForcedResolvers:u},E=!1,[2,this.resolveSelectionSet(c.selectionSet,E,i,b).then(function(I){return{result:I,exportedVariables:b.exportedVariables}})]})})},e.prototype.resolveSelectionSet=function(t,n,r,i){return ze(this,void 0,void 0,function(){var a,o,s,u,c,l=this;return Qe(this,function(d){return a=i.fragmentMap,o=i.context,s=i.variables,u=[r],c=function(f){return ze(l,void 0,void 0,function(){var p,y;return Qe(this,function(m){return!n&&!i.selectionsToResolve.has(f)?[2]:un(f,s)?Ye(f)?[2,this.resolveField(f,n,r,i).then(function(v){var g;typeof v<"u"&&u.push((g={},g[Le(f)]=v,g))})]:(sm(f)?p=f:(p=a[f.name.value],$(p,19,f.name.value)),p&&p.typeCondition&&(y=p.typeCondition.name.value,i.fragmentMatcher(r,y,o))?[2,this.resolveSelectionSet(p.selectionSet,n,r,i).then(function(v){u.push(v)})]:[2]):[2]})})},[2,Promise.all(t.selections.map(c)).then(function(){return ir(u)})]})})},e.prototype.resolveField=function(t,n,r,i){return ze(this,void 0,void 0,function(){var a,o,s,u,c,l,d,f,p,y=this;return Qe(this,function(m){return r?(a=i.variables,o=t.name.value,s=Le(t),u=o!==s,c=r[s]||r[o],l=Promise.resolve(c),(!i.onlyRunForcedResolvers||this.shouldForceResolvers(t))&&(d=r.__typename||i.defaultOperationType,f=this.resolvers&&this.resolvers[d],f&&(p=f[u?o:s],p&&(l=Promise.resolve(pa.withValue(this.cache,p,[r,tr(t,a),i.context,{field:t,fragmentMap:i.fragmentMap}]))))),[2,l.then(function(v){var g,b;if(v===void 0&&(v=c),t.directives&&t.directives.forEach(function(D){D.name.value==="export"&&D.arguments&&D.arguments.forEach(function(I){I.name.value==="as"&&I.value.kind==="StringValue"&&(i.exportedVariables[I.value.value]=v)})}),!t.selectionSet||v==null)return v;var E=(b=(g=t.directives)===null||g===void 0?void 0:g.some(function(D){return D.name.value==="client"}))!==null&&b!==void 0?b:!1;if(Array.isArray(v))return y.resolveSubSelectedArray(t,n||E,v,i);if(t.selectionSet)return y.resolveSelectionSet(t.selectionSet,n||E,v,i)})]):[2,null]})})},e.prototype.resolveSubSelectedArray=function(t,n,r,i){var a=this;return Promise.all(r.map(function(o){if(o===null)return null;if(Array.isArray(o))return a.resolveSubSelectedArray(t,n,o,i);if(t.selectionSet)return a.resolveSelectionSet(t.selectionSet,n,o,i)}))},e.prototype.collectSelectionsToResolve=function(t,n){var r=function(o){return!Array.isArray(o)},i=this.selectionsToResolveCache;function a(o){if(!i.has(o)){var s=new Set;i.set(o,s),we(o,{Directive:function(u,c,l,d,f){u.name.value==="client"&&f.forEach(function(p){r(p)&&Us(p)&&s.add(p)})},FragmentSpread:function(u,c,l,d,f){var p=n[u.name.value];$(p,20,u.name.value);var y=a(p);y.size>0&&(f.forEach(function(m){r(m)&&Us(m)&&s.add(m)}),s.add(u),y.forEach(function(m){s.add(m)}))}})}return i.get(o)}return a(t)},e})(),Mc=!1,Ta=(function(){function e(t){var n=this,r;if(this.resetStoreCallbacks=[],this.clearStoreCallbacks=[],!t.cache)throw ye(16);var i=t.uri,a=t.credentials,o=t.headers,s=t.cache,u=t.documentTransform,c=t.ssrMode,l=c===void 0?!1:c,d=t.ssrForceFetchDelay,f=d===void 0?0:d,p=t.connectToDevTools,y=t.queryDeduplication,m=y===void 0?!0:y,v=t.defaultOptions,g=t.defaultContext,b=t.assumeImmutableResults,E=b===void 0?s.assumeImmutableResults:b,D=t.resolvers,I=t.typeDefs,O=t.fragmentMatcher,C=t.name,N=t.version,L=t.devtools,U=t.dataMasking,z=t.link;z||(z=i?new pg({uri:i,credentials:a,headers:o}):Ie.empty()),this.link=z,this.cache=s,this.disableNetworkFetches=l||f>0,this.queryDeduplication=m,this.defaultOptions=v||Object.create(null),this.typeDefs=I,this.devtoolsConfig=_(_({},L),{enabled:(r=L?.enabled)!==null&&r!==void 0?r:p}),this.devtoolsConfig.enabled===void 0&&(this.devtoolsConfig.enabled=globalThis.__DEV__!==!1),f&&setTimeout(function(){return n.disableNetworkFetches=!1},f),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.watchFragment=this.watchFragment.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this),this.version=Ei,this.localState=new Vg({cache:s,client:this,resolvers:D,fragmentMatcher:O}),this.queryManager=new Ug({cache:this.cache,link:this.link,defaultOptions:this.defaultOptions,defaultContext:g,documentTransform:u,queryDeduplication:m,ssrMode:l,dataMasking:!!U,clientAwareness:{name:C,version:N},localState:this.localState,assumeImmutableResults:E,onBroadcast:this.devtoolsConfig.enabled?function(){n.devToolsHookCb&&n.devToolsHookCb({action:{},state:{queries:n.queryManager.getQueryStore(),mutations:n.queryManager.mutationStore||{}},dataWithOptimisticResults:n.cache.extract(!0)})}:void 0}),this.devtoolsConfig.enabled&&this.connectToDevTools()}return e.prototype.connectToDevTools=function(){if(!(typeof window>"u")){var t=window,n=Symbol.for("apollo.devtools");(t[n]=t[n]||[]).push(this),t.__APOLLO_CLIENT__=this,!Mc&&globalThis.__DEV__!==!1&&(Mc=!0,window.document&&window.top===window.self&&/^(https?|file):$/.test(window.location.protocol)&&setTimeout(function(){if(!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__){var r=window.navigator,i=r&&r.userAgent,a=void 0;typeof i=="string"&&(i.indexOf("Chrome/")>-1?a="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":i.indexOf("Firefox/")>-1&&(a="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),a&&globalThis.__DEV__!==!1&&$.log("Download the Apollo DevTools for a better development experience: %s",a)}},1e4))}},Object.defineProperty(e.prototype,"documentTransform",{get:function(){return this.queryManager.documentTransform},enumerable:!1,configurable:!0}),e.prototype.stop=function(){this.queryManager.stop()},e.prototype.watchQuery=function(t){return this.defaultOptions.watchQuery&&(t=ia(this.defaultOptions.watchQuery,t)),this.disableNetworkFetches&&(t.fetchPolicy==="network-only"||t.fetchPolicy==="cache-and-network")&&(t=_(_({},t),{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(t)},e.prototype.query=function(t){return this.defaultOptions.query&&(t=ia(this.defaultOptions.query,t)),$(t.fetchPolicy!=="cache-and-network",17),this.disableNetworkFetches&&t.fetchPolicy==="network-only"&&(t=_(_({},t),{fetchPolicy:"cache-first"})),this.queryManager.query(t)},e.prototype.mutate=function(t){return this.defaultOptions.mutate&&(t=ia(this.defaultOptions.mutate,t)),this.queryManager.mutate(t)},e.prototype.subscribe=function(t){var n=this,r=this.queryManager.generateQueryId();return this.queryManager.startGraphQLSubscription(t).map(function(i){return _(_({},i),{data:n.queryManager.maskOperation({document:t.query,data:i.data,fetchPolicy:t.fetchPolicy,id:r})})})},e.prototype.readQuery=function(t,n){return n===void 0&&(n=!1),this.cache.readQuery(t,n)},e.prototype.watchFragment=function(t){var n;return this.cache.watchFragment(_(_({},t),(n={},n[Symbol.for("apollo.dataMasking")]=this.queryManager.dataMasking,n)))},e.prototype.readFragment=function(t,n){return n===void 0&&(n=!1),this.cache.readFragment(t,n)},e.prototype.writeQuery=function(t){var n=this.cache.writeQuery(t);return t.broadcast!==!1&&this.queryManager.broadcastQueries(),n},e.prototype.writeFragment=function(t){var n=this.cache.writeFragment(t);return t.broadcast!==!1&&this.queryManager.broadcastQueries(),n},e.prototype.__actionHookForDevTools=function(t){this.devToolsHookCb=t},e.prototype.__requestRaw=function(t){return oa(this.link,t)},e.prototype.resetStore=function(){var t=this;return Promise.resolve().then(function(){return t.queryManager.clearStore({discardWatches:!1})}).then(function(){return Promise.all(t.resetStoreCallbacks.map(function(n){return n()}))}).then(function(){return t.reFetchObservableQueries()})},e.prototype.clearStore=function(){var t=this;return Promise.resolve().then(function(){return t.queryManager.clearStore({discardWatches:!0})}).then(function(){return Promise.all(t.clearStoreCallbacks.map(function(n){return n()}))})},e.prototype.onResetStore=function(t){var n=this;return this.resetStoreCallbacks.push(t),function(){n.resetStoreCallbacks=n.resetStoreCallbacks.filter(function(r){return r!==t})}},e.prototype.onClearStore=function(t){var n=this;return this.clearStoreCallbacks.push(t),function(){n.clearStoreCallbacks=n.clearStoreCallbacks.filter(function(r){return r!==t})}},e.prototype.reFetchObservableQueries=function(t){return this.queryManager.reFetchObservableQueries(t)},e.prototype.refetchQueries=function(t){var n=this.queryManager.refetchQueries(t),r=[],i=[];n.forEach(function(o,s){r.push(s),i.push(o)});var a=Promise.all(i);return a.queries=r,a.results=i,a.catch(function(o){globalThis.__DEV__!==!1&&$.debug(18,o)}),a},e.prototype.getObservableQueries=function(t){return t===void 0&&(t="active"),this.queryManager.getObservableQueries(t)},e.prototype.extract=function(t){return this.cache.extract(t)},e.prototype.restore=function(t){return this.cache.restore(t)},e.prototype.addResolvers=function(t){this.localState.addResolvers(t)},e.prototype.setResolvers=function(t){this.localState.setResolvers(t)},e.prototype.getResolvers=function(){return this.localState.getResolvers()},e.prototype.setLocalStateFragmentMatcher=function(t){this.localState.setFragmentMatcher(t)},e.prototype.setLink=function(t){this.link=this.queryManager.link=t},Object.defineProperty(e.prototype,"defaultContext",{get:function(){return this.queryManager.defaultContext},enumerable:!1,configurable:!0}),e})();globalThis.__DEV__!==!1&&(Ta.prototype.getMemoryInternals=qh);var mr=new Map,Ia=new Map,Lc=!0,gr=!1;function jc(e){return e.replace(/[\s,]+/g," ").trim()}function Bg(e){return jc(e.source.body.substring(e.start,e.end))}function Gg(e){var t=new Set,n=[];return e.definitions.forEach(function(r){if(r.kind==="FragmentDefinition"){var i=r.name.value,a=Bg(r.loc),o=Ia.get(i);o&&!o.has(a)?Lc&&console.warn("Warning: fragment with name "+i+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):o||Ia.set(i,o=new Set),o.add(a),t.has(a)||(t.add(a),n.push(r))}else n.push(r)}),_(_({},e),{definitions:n})}function zg(e){var t=new Set(e.definitions);t.forEach(function(r){r.loc&&delete r.loc,Object.keys(r).forEach(function(i){var a=r[i];a&&typeof a=="object"&&t.add(a)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}function Qg(e){var t=jc(e);if(!mr.has(t)){var n=fh(e,{experimentalFragmentVariables:gr,allowLegacyFragmentVariables:gr});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");mr.set(t,zg(Gg(n)))}return mr.get(t)}function h(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];typeof e=="string"&&(e=[e]);var r=e[0];return t.forEach(function(i,a){i&&i.kind==="Document"?r+=i.loc.source.body:r+=i,r+=e[a+1]}),Qg(r)}function Wg(){mr.clear(),Ia.clear()}function Hg(){Lc=!1}function Yg(){gr=!0}function Jg(){gr=!1}var Tn={gql:h,resetCaches:Wg,disableFragmentWarnings:Hg,enableExperimentalFragmentVariables:Yg,disableExperimentalFragmentVariables:Jg};(function(e){e.gql=Tn.gql,e.resetCaches=Tn.resetCaches,e.disableFragmentWarnings=Tn.disableFragmentWarnings,e.enableExperimentalFragmentVariables=Tn.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=Tn.disableExperimentalFragmentVariables})(h||(h={})),h.default=h;var qc;(function(e){e.Database="DATABASE",e.Filesystem="FILESYSTEM"})(qc||(qc={}));var Uc;(function(e){e.Add="ADD",e.Remove="REMOVE",e.Set="SET"})(Uc||(Uc={}));var Vc;(function(e){e.Cut="CUT",e.Uncut="UNCUT"})(Vc||(Vc={}));var Bc;(function(e){e.Between="BETWEEN",e.Equals="EQUALS",e.Excludes="EXCLUDES",e.GreaterThan="GREATER_THAN",e.Includes="INCLUDES",e.IncludesAll="INCLUDES_ALL",e.IsNull="IS_NULL",e.LessThan="LESS_THAN",e.MatchesRegex="MATCHES_REGEX",e.NotBetween="NOT_BETWEEN",e.NotEquals="NOT_EQUALS",e.NotMatchesRegex="NOT_MATCHES_REGEX",e.NotNull="NOT_NULL"})(Bc||(Bc={}));var Gc;(function(e){e.Galleries="GALLERIES",e.Groups="GROUPS",e.Images="IMAGES",e.Movies="MOVIES",e.Performers="PERFORMERS",e.Scenes="SCENES",e.SceneMarkers="SCENE_MARKERS",e.Studios="STUDIOS",e.Tags="TAGS"})(Gc||(Gc={}));var zc;(function(e){e.Female="FEMALE",e.Intersex="INTERSEX",e.Male="MALE",e.NonBinary="NON_BINARY",e.TransgenderFemale="TRANSGENDER_FEMALE",e.TransgenderMale="TRANSGENDER_MALE"})(zc||(zc={}));var Qc;(function(e){e.Md5="MD5",e.Oshash="OSHASH"})(Qc||(Qc={}));var Wc;(function(e){e.Ignore="IGNORE",e.Merge="MERGE",e.Overwrite="OVERWRITE"})(Wc||(Wc={}));var Hc;(function(e){e.FitX="FIT_X",e.FitXy="FIT_XY",e.Original="ORIGINAL"})(Hc||(Hc={}));var Yc;(function(e){e.PanY="PAN_Y",e.Zoom="ZOOM"})(Yc||(Yc={}));var Jc;(function(e){e.Fail="FAIL",e.Ignore="IGNORE",e.Overwrite="OVERWRITE"})(Jc||(Jc={}));var Xc;(function(e){e.Create="CREATE",e.Fail="FAIL",e.Ignore="IGNORE"})(Xc||(Xc={}));var Kc;(function(e){e.Cancelled="CANCELLED",e.Failed="FAILED",e.Finished="FINISHED",e.Ready="READY",e.Running="RUNNING",e.Stopping="STOPPING"})(Kc||(Kc={}));var Zc;(function(e){e.Add="ADD",e.Remove="REMOVE",e.Update="UPDATE"})(Zc||(Zc={}));var el;(function(e){e.Debug="Debug",e.Error="Error",e.Info="Info",e.Progress="Progress",e.Trace="Trace",e.Warning="Warning"})(el||(el={}));var tl;(function(e){e.Landscape="LANDSCAPE",e.Portrait="PORTRAIT",e.Square="SQUARE"})(tl||(tl={}));var nl;(function(e){e.Plugin="Plugin",e.Scraper="Scraper"})(nl||(nl={}));var rl;(function(e){e.Boolean="BOOLEAN",e.Number="NUMBER",e.String="STRING"})(rl||(rl={}));var il;(function(e){e.Fast="fast",e.Medium="medium",e.Slow="slow",e.Slower="slower",e.Ultrafast="ultrafast",e.Veryfast="veryfast",e.Veryslow="veryslow"})(il||(il={}));var al;(function(e){e.EightK="EIGHT_K",e.FiveK="FIVE_K",e.FourK="FOUR_K",e.FullHd="FULL_HD",e.Huge="HUGE",e.Low="LOW",e.QuadHd="QUAD_HD",e.R360P="R360P",e.SevenK="SEVEN_K",e.SixK="SIX_K",e.Standard="STANDARD",e.StandardHd="STANDARD_HD",e.VeryLow="VERY_LOW",e.VrHd="VR_HD",e.WebHd="WEB_HD"})(al||(al={}));var ol;(function(e){e.Gallery="GALLERY",e.Group="GROUP",e.Image="IMAGE",e.Movie="MOVIE",e.Performer="PERFORMER",e.Scene="SCENE"})(ol||(ol={}));var sl;(function(e){e.Fragment="FRAGMENT",e.Name="NAME",e.Url="URL"})(sl||(sl={}));var ul;(function(e){e.Asc="ASC",e.Desc="DESC"})(ul||(ul={}));var cl;(function(e){e.FourK="FOUR_K",e.FullHd="FULL_HD",e.Low="LOW",e.Original="ORIGINAL",e.Standard="STANDARD",e.StandardHd="STANDARD_HD"})(cl||(cl={}));var ll;(function(e){e.NeedsMigration="NEEDS_MIGRATION",e.Ok="OK",e.Setup="SETUP"})(ll||(ll={}));const fl=h`
    fragment ConfigGeneralData on ConfigGeneralResult {
  stashes {
    path
    excludeVideo
    excludeImage
  }
  databasePath
  backupDirectoryPath
  generatedPath
  metadataPath
  scrapersPath
  pluginsPath
  cachePath
  blobsPath
  blobsStorage
  ffmpegPath
  ffprobePath
  calculateMD5
  videoFileNamingAlgorithm
  parallelTasks
  previewAudio
  previewSegments
  previewSegmentDuration
  previewExcludeStart
  previewExcludeEnd
  previewPreset
  transcodeHardwareAcceleration
  maxTranscodeSize
  maxStreamingTranscodeSize
  writeImageThumbnails
  createImageClipsFromVideos
  apiKey
  username
  password
  maxSessionAge
  logFile
  logOut
  logLevel
  logAccess
  createGalleriesFromFolders
  galleryCoverRegex
  videoExtensions
  imageExtensions
  galleryExtensions
  excludes
  imageExcludes
  customPerformerImageLocation
  stashBoxes {
    name
    endpoint
    api_key
  }
  pythonPath
  transcodeInputArgs
  transcodeOutputArgs
  liveTranscodeInputArgs
  liveTranscodeOutputArgs
  drawFunscriptHeatmapRange
  scraperPackageSources {
    name
    url
    local_path
  }
  pluginPackageSources {
    name
    url
    local_path
  }
}
    `,dl=h`
    fragment ConfigInterfaceData on ConfigInterfaceResult {
  menuItems
  soundOnPreview
  wallShowTitle
  wallPlayback
  showScrubber
  maximumLoopDuration
  noBrowser
  notificationsEnabled
  autostartVideo
  autostartVideoOnPlaySelected
  continuePlaylistDefault
  showStudioAsText
  css
  cssEnabled
  javascript
  javascriptEnabled
  customLocales
  customLocalesEnabled
  language
  imageLightbox {
    slideshowDelay
    displayMode
    scaleUp
    resetZoomOnNav
    scrollMode
    scrollAttemptsBeforeChange
  }
  disableDropdownCreate {
    performer
    tag
    studio
    movie
  }
  handyKey
  funscriptOffset
  useStashHostedFunscript
}
    `,pl=h`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  port
  whitelistedIPs
  interfaces
  videoSortOrder
}
    `,hl=h`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `,Xg=h`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `,Kg=h`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `,Zg=h`
    fragment IdentifyMetadataOptionsData on IdentifyMetadataOptions {
  fieldOptions {
    ...IdentifyFieldOptionsData
  }
  setCoverImage
  setOrganized
  includeMalePerformers
  skipMultipleMatches
  skipMultipleMatchTag
  skipSingleNamePerformers
  skipSingleNamePerformerTag
}
    ${Kg}`,ml=h`
    fragment ConfigDefaultSettingsData on ConfigDefaultSettingsResult {
  scan {
    scanGenerateCovers
    scanGeneratePreviews
    scanGenerateImagePreviews
    scanGenerateSprites
    scanGeneratePhashes
    scanGenerateThumbnails
    scanGenerateClipPreviews
  }
  identify {
    sources {
      source {
        ...ScraperSourceData
      }
      options {
        ...IdentifyMetadataOptionsData
      }
    }
    options {
      ...IdentifyMetadataOptionsData
    }
  }
  autoTag {
    performers
    studios
    tags
  }
  generate {
    covers
    sprites
    previews
    imagePreviews
    previewOptions {
      previewSegments
      previewSegmentDuration
      previewExcludeStart
      previewExcludeEnd
      previewPreset
    }
    markers
    markerImagePreviews
    markerScreenshots
    transcodes
    phashes
    interactiveHeatmapsSpeeds
    clipPreviews
    imageThumbnails
  }
  deleteFile
  deleteGenerated
}
    ${Xg}
${Zg}`,ey=h`
    fragment ConfigData on ConfigResult {
  general {
    ...ConfigGeneralData
  }
  interface {
    ...ConfigInterfaceData
  }
  dlna {
    ...ConfigDLNAData
  }
  scraping {
    ...ConfigScrapingData
  }
  defaults {
    ...ConfigDefaultSettingsData
  }
  ui
  plugins
}
    ${fl}
${dl}
${pl}
${hl}
${ml}`;h`
    fragment ImageFileData on ImageFile {
  id
  path
  size
  mod_time
  width
  height
  fingerprints {
    type
    value
  }
}
    `;const Oa=h`
    fragment SavedFilterData on SavedFilter {
  id
  mode
  name
  find_filter {
    q
    page
    per_page
    sort
    direction
  }
  object_filter
  ui_options
}
    `,ty=h`
    fragment SelectGalleryData on Gallery {
  id
  title
  date
  code
  studio {
    name
  }
  cover {
    paths {
      thumbnail
    }
  }
  paths {
    preview
  }
  files {
    path
  }
  folder {
    path
  }
}
    `,ny=h`
    fragment SelectGroupData on Group {
  id
  name
  aliases
  date
  studio {
    name
  }
  front_image_path
}
    `,gl=h`
    fragment VisualFileData on VisualFile {
  ... on BaseFile {
    id
    path
    size
    mod_time
    fingerprints {
      type
      value
    }
  }
  ... on ImageFile {
    id
    path
    size
    mod_time
    width
    height
    fingerprints {
      type
      value
    }
  }
  ... on VideoFile {
    id
    path
    size
    mod_time
    duration
    video_codec
    audio_codec
    width
    height
    frame_rate
    bit_rate
    fingerprints {
      type
      value
    }
  }
}
    `,yr=h`
    fragment SlimImageData on Image {
  id
  title
  code
  date
  urls
  details
  photographer
  rating100
  organized
  o_counter
  paths {
    thumbnail
    preview
    image
  }
  galleries {
    id
    title
    files {
      path
    }
    folder {
      path
    }
  }
  studio {
    id
    name
    image_path
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    gender
    favorite
    image_path
  }
  visual_files {
    ...VisualFileData
  }
}
    ${gl}`,yl=h`
    fragment GalleryFileData on GalleryFile {
  id
  path
  size
  mod_time
  fingerprints {
    type
    value
  }
}
    `,vl=h`
    fragment FolderData on Folder {
  id
  path
}
    `,ka=h`
    fragment GalleryChapterData on GalleryChapter {
  id
  title
  image_index
  gallery {
    id
  }
}
    `,vr=h`
    fragment SlimStudioData on Studio {
  id
  name
  image_path
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
  parent_studio {
    id
  }
  details
  rating100
  aliases
  tags {
    id
    name
  }
}
    `,ht=h`
    fragment SlimTagData on Tag {
  id
  name
  sort_name
  aliases
  image_path
  parent_count
  child_count
}
    `,nt=h`
    fragment PerformerData on Performer {
  id
  name
  disambiguation
  urls
  gender
  birthdate
  ethnicity
  country
  eye_color
  height_cm
  measurements
  fake_tits
  penis_length
  circumcised
  career_length
  tattoos
  piercings
  alias_list
  favorite
  ignore_auto_tag
  image_path
  scene_count
  image_count
  gallery_count
  group_count
  performer_count
  o_counter
  tags {
    ...SlimTagData
  }
  stash_ids {
    stash_id
    endpoint
    updated_at
  }
  rating100
  details
  death_date
  hair_color
  weight
  custom_fields
}
    ${ht}`,bl=h`
    fragment VideoFileData on VideoFile {
  id
  path
  size
  mod_time
  duration
  video_codec
  audio_codec
  width
  height
  frame_rate
  bit_rate
  fingerprints {
    type
    value
  }
}
    `,Gt=h`
    fragment SlimSceneData on Scene {
  id
  title
  code
  details
  director
  urls
  date
  rating100
  o_counter
  organized
  interactive
  interactive_speed
  resume_time
  play_duration
  play_count
  files {
    ...VideoFileData
  }
  paths {
    screenshot
    preview
    stream
    webp
    vtt
    sprite
    funscript
    interactive_heatmap
    caption
  }
  scene_markers {
    id
    title
    seconds
    primary_tag {
      id
      name
    }
  }
  galleries {
    id
    files {
      path
    }
    folder {
      path
    }
    title
  }
  studio {
    id
    name
    image_path
  }
  groups {
    group {
      id
      name
      front_image_path
    }
    scene_index
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    disambiguation
    gender
    favorite
    image_path
  }
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
}
    ${bl}`,zt=h`
    fragment GalleryData on Gallery {
  id
  created_at
  updated_at
  title
  code
  date
  urls
  details
  photographer
  rating100
  organized
  paths {
    cover
    preview
  }
  files {
    ...GalleryFileData
  }
  folder {
    ...FolderData
  }
  chapters {
    ...GalleryChapterData
  }
  studio {
    ...SlimStudioData
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
  scenes {
    ...SlimSceneData
  }
}
    ${yl}
${vl}
${ka}
${vr}
${ht}
${nt}
${Gt}`,ry=h`
    fragment ImageData on Image {
  id
  title
  code
  rating100
  date
  urls
  details
  photographer
  organized
  o_counter
  created_at
  updated_at
  paths {
    thumbnail
    preview
    image
  }
  galleries {
    ...GalleryData
  }
  studio {
    ...SlimStudioData
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
  visual_files {
    ...VisualFileData
  }
}
    ${zt}
${vr}
${ht}
${nt}
${gl}`,Sl=h`
    fragment JobData on Job {
  id
  status
  subTasks
  description
  progress
  startTime
  endTime
  addTime
  error
}
    `,_l=h`
    fragment LogEntryData on LogEntry {
  time
  level
  message
}
    `,Qt=h`
    fragment PackageData on Package {
  package_id
  name
  version
  date
  metadata
  sourceURL
}
    `;h`
    fragment SlimPerformerData on Performer {
  id
  name
  disambiguation
  gender
  urls
  image_path
  favorite
  ignore_auto_tag
  country
  birthdate
  ethnicity
  hair_color
  eye_color
  height_cm
  fake_tits
  penis_length
  circumcised
  career_length
  tattoos
  piercings
  alias_list
  tags {
    id
    name
  }
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
  rating100
  death_date
  weight
}
    `;const iy=h`
    fragment SelectPerformerData on Performer {
  id
  name
  disambiguation
  alias_list
  image_path
  birthdate
  death_date
}
    `,ay=h`
    fragment SceneMarkerSceneData on Scene {
  id
  title
  files {
    width
    height
    path
  }
  performers {
    id
    name
    image_path
  }
}
    `,mt=h`
    fragment SceneMarkerData on SceneMarker {
  id
  title
  seconds
  end_seconds
  stream
  preview
  screenshot
  scene {
    ...SceneMarkerSceneData
  }
  primary_tag {
    id
    name
  }
  tags {
    id
    name
  }
}
    ${ay}`,El=h`
    fragment SlimGalleryData on Gallery {
  id
  title
  code
  date
  urls
  details
  photographer
  rating100
  organized
  files {
    ...GalleryFileData
  }
  folder {
    ...FolderData
  }
  image_count
  chapters {
    id
    title
    image_index
  }
  studio {
    id
    name
    image_path
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    gender
    favorite
    image_path
  }
  scenes {
    ...SlimSceneData
  }
  paths {
    cover
    preview
  }
}
    ${yl}
${vl}
${Gt}`,oy=h`
    fragment SlimGroupData on Group {
  id
  name
  front_image_path
  rating100
}
    `,Wt=h`
    fragment GroupData on Group {
  id
  name
  aliases
  duration
  date
  rating100
  director
  studio {
    ...SlimStudioData
  }
  tags {
    ...SlimTagData
  }
  containing_groups {
    group {
      ...SlimGroupData
    }
    description
  }
  synopsis
  urls
  front_image_path
  back_image_path
  scene_count
  scene_count_all: scene_count(depth: -1)
  sub_group_count
  sub_group_count_all: sub_group_count(depth: -1)
  scenes {
    id
    title
  }
}
    ${vr}
${ht}
${oy}`,rt=h`
    fragment SceneData on Scene {
  id
  title
  code
  details
  director
  urls
  date
  rating100
  o_counter
  organized
  interactive
  interactive_speed
  captions {
    language_code
    caption_type
  }
  created_at
  updated_at
  resume_time
  last_played_at
  play_duration
  play_count
  play_history
  o_history
  files {
    ...VideoFileData
  }
  paths {
    screenshot
    preview
    stream
    webp
    vtt
    sprite
    funscript
    interactive_heatmap
    caption
  }
  scene_markers {
    ...SceneMarkerData
  }
  galleries {
    ...SlimGalleryData
  }
  studio {
    ...SlimStudioData
  }
  groups {
    group {
      ...GroupData
    }
    scene_index
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
  sceneStreams {
    url
    mime_type
    label
  }
}
    ${bl}
${mt}
${El}
${vr}
${Wt}
${ht}
${nt}`,sy=h`
    fragment SelectSceneData on Scene {
  id
  title
  date
  code
  studio {
    name
  }
  files {
    path
  }
  paths {
    screenshot
  }
}
    `,uy=h`
    fragment ScrapedStudioData on ScrapedStudio {
  stored_id
  name
  url
  parent {
    stored_id
    name
    url
    image
    remote_site_id
  }
  image
  remote_site_id
}
    `,it=h`
    fragment ScrapedSceneTagData on ScrapedTag {
  stored_id
  name
}
    `,xa=h`
    fragment ScrapedPerformerData on ScrapedPerformer {
  stored_id
  name
  disambiguation
  gender
  urls
  birthdate
  ethnicity
  country
  eye_color
  height
  measurements
  fake_tits
  penis_length
  circumcised
  career_length
  tattoos
  piercings
  aliases
  tags {
    ...ScrapedSceneTagData
  }
  images
  details
  death_date
  hair_color
  weight
  remote_site_id
}
    ${it}`,Dl=h`
    fragment ScrapedGroupStudioData on ScrapedStudio {
  stored_id
  name
  url
}
    `,cy=h`
    fragment ScrapedGroupData on ScrapedGroup {
  name
  aliases
  duration
  date
  rating
  director
  urls
  synopsis
  front_image
  back_image
  studio {
    ...ScrapedGroupStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
}
    ${Dl}
${it}`,br=h`
    fragment ScrapedSceneStudioData on ScrapedStudio {
  stored_id
  name
  url
  parent {
    stored_id
    name
    url
    image
    remote_site_id
  }
  image
  remote_site_id
}
    `,In=h`
    fragment ScrapedScenePerformerData on ScrapedPerformer {
  stored_id
  name
  disambiguation
  gender
  urls
  birthdate
  ethnicity
  country
  eye_color
  height
  measurements
  fake_tits
  penis_length
  circumcised
  career_length
  tattoos
  piercings
  aliases
  tags {
    ...ScrapedSceneTagData
  }
  remote_site_id
  images
  details
  death_date
  hair_color
  weight
}
    ${it}`,wl=h`
    fragment ScrapedSceneGroupData on ScrapedGroup {
  stored_id
  name
  aliases
  duration
  date
  rating
  director
  urls
  synopsis
  front_image
  back_image
  studio {
    ...ScrapedGroupStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
}
    ${Dl}
${it}`,Ca=h`
    fragment ScrapedSceneData on ScrapedScene {
  title
  code
  details
  director
  urls
  date
  image
  remote_site_id
  file {
    size
    duration
    video_codec
    audio_codec
    width
    height
    framerate
    bitrate
  }
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
  groups {
    ...ScrapedSceneGroupData
  }
  fingerprints {
    hash
    algorithm
    duration
  }
}
    ${br}
${it}
${In}
${wl}`,Tl=h`
    fragment ScrapedGalleryData on ScrapedGallery {
  title
  code
  details
  urls
  photographer
  date
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
}
    ${br}
${it}
${In}`,Il=h`
    fragment ScrapedImageData on ScrapedImage {
  title
  code
  details
  photographer
  urls
  date
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
}
    ${br}
${it}
${In}`;h`
    fragment ScrapedStashBoxSceneData on ScrapedScene {
  title
  code
  details
  director
  url
  date
  image
  remote_site_id
  duration
  file {
    size
    duration
    video_codec
    audio_codec
    width
    height
    framerate
    bitrate
  }
  fingerprints {
    hash
    algorithm
    duration
  }
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
  groups {
    ...ScrapedSceneGroupData
  }
}
    ${br}
${it}
${In}
${wl}`,h`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${In}`;const Sr=h`
    fragment StudioData on Studio {
  id
  name
  url
  parent_studio {
    id
    name
    url
    image_path
  }
  child_studios {
    id
    name
    image_path
  }
  ignore_auto_tag
  image_path
  scene_count
  scene_count_all: scene_count(depth: -1)
  image_count
  image_count_all: image_count(depth: -1)
  gallery_count
  gallery_count_all: gallery_count(depth: -1)
  performer_count
  performer_count_all: performer_count(depth: -1)
  group_count
  group_count_all: group_count(depth: -1)
  stash_ids {
    stash_id
    endpoint
    updated_at
  }
  details
  rating100
  favorite
  aliases
  tags {
    ...SlimTagData
  }
}
    ${ht}`,ly=h`
    fragment SelectStudioData on Studio {
  id
  name
  aliases
  details
  image_path
  parent_studio {
    id
    name
  }
}
    `,Ht=h`
    fragment TagData on Tag {
  id
  name
  sort_name
  description
  aliases
  ignore_auto_tag
  favorite
  image_path
  scene_count
  scene_count_all: scene_count(depth: -1)
  scene_marker_count
  scene_marker_count_all: scene_marker_count(depth: -1)
  image_count
  image_count_all: image_count(depth: -1)
  gallery_count
  gallery_count_all: gallery_count(depth: -1)
  performer_count
  performer_count_all: performer_count(depth: -1)
  studio_count
  studio_count_all: studio_count(depth: -1)
  group_count
  group_count_all: group_count(depth: -1)
  parents {
    ...SlimTagData
  }
  children {
    ...SlimTagData
  }
}
    ${ht}`,fy=h`
    fragment SelectTagData on Tag {
  id
  name
  sort_name
  favorite
  description
  aliases
  image_path
  parents {
    id
    name
    sort_name
  }
}
    `;h`
    mutation Setup($input: SetupInput!) {
  setup(input: $input)
}
    `,h`
    mutation Migrate($input: MigrateInput!) {
  migrate(input: $input)
}
    `,h`
    mutation DownloadFFMpeg {
  downloadFFMpeg
}
    `,h`
    mutation ConfigureGeneral($input: ConfigGeneralInput!) {
  configureGeneral(input: $input) {
    ...ConfigGeneralData
  }
}
    ${fl}`,h`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${dl}`,h`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${pl}`,h`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${hl}`,h`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${ml}`,h`
    mutation ConfigureUI($input: Map, $partial: Map) {
  configureUI(input: $input, partial: $partial)
}
    `,h`
    mutation ConfigureUISetting($key: String!, $value: Any) {
  configureUISetting(key: $key, value: $value)
}
    `,h`
    mutation GenerateAPIKey($input: GenerateAPIKeyInput!) {
  generateAPIKey(input: $input)
}
    `,h`
    mutation EnableDLNA($input: EnableDLNAInput!) {
  enableDLNA(input: $input)
}
    `,h`
    mutation DisableDLNA($input: DisableDLNAInput!) {
  disableDLNA(input: $input)
}
    `,h`
    mutation AddTempDLNAIP($input: AddTempDLNAIPInput!) {
  addTempDLNAIP(input: $input)
}
    `,h`
    mutation RemoveTempDLNAIP($input: RemoveTempDLNAIPInput!) {
  removeTempDLNAIP(input: $input)
}
    `,h`
    mutation DeleteFiles($ids: [ID!]!) {
  deleteFiles(ids: $ids)
}
    `,h`
    mutation SaveFilter($input: SaveFilterInput!) {
  saveFilter(input: $input) {
    ...SavedFilterData
  }
}
    ${Oa}`,h`
    mutation DestroySavedFilter($input: DestroyFilterInput!) {
  destroySavedFilter(input: $input)
}
    `,h`
    mutation GalleryChapterCreate($title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterCreate(
    input: {title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${ka}`,h`
    mutation GalleryChapterUpdate($id: ID!, $title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterUpdate(
    input: {id: $id, title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${ka}`,h`
    mutation GalleryChapterDestroy($id: ID!) {
  galleryChapterDestroy(id: $id)
}
    `,h`
    mutation GalleryCreate($input: GalleryCreateInput!) {
  galleryCreate(input: $input) {
    ...GalleryData
  }
}
    ${zt}`,h`
    mutation GalleryUpdate($input: GalleryUpdateInput!) {
  galleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${zt}`,h`
    mutation BulkGalleryUpdate($input: BulkGalleryUpdateInput!) {
  bulkGalleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${zt}`,h`
    mutation GalleriesUpdate($input: [GalleryUpdateInput!]!) {
  galleriesUpdate(input: $input) {
    ...GalleryData
  }
}
    ${zt}`,h`
    mutation GalleryDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  galleryDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,h`
    mutation AddGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  addGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `,h`
    mutation RemoveGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  removeGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `,h`
    mutation SetGalleryCover($gallery_id: ID!, $cover_image_id: ID!) {
  setGalleryCover(
    input: {gallery_id: $gallery_id, cover_image_id: $cover_image_id}
  )
}
    `,h`
    mutation ResetGalleryCover($gallery_id: ID!) {
  resetGalleryCover(input: {gallery_id: $gallery_id})
}
    `,h`
    mutation GroupCreate($input: GroupCreateInput!) {
  groupCreate(input: $input) {
    ...GroupData
  }
}
    ${Wt}`,h`
    mutation GroupUpdate($input: GroupUpdateInput!) {
  groupUpdate(input: $input) {
    ...GroupData
  }
}
    ${Wt}`,h`
    mutation BulkGroupUpdate($input: BulkGroupUpdateInput!) {
  bulkGroupUpdate(input: $input) {
    ...GroupData
  }
}
    ${Wt}`,h`
    mutation GroupDestroy($id: ID!) {
  groupDestroy(input: {id: $id})
}
    `,h`
    mutation GroupsDestroy($ids: [ID!]!) {
  groupsDestroy(ids: $ids)
}
    `,h`
    mutation AddGroupSubGroups($input: GroupSubGroupAddInput!) {
  addGroupSubGroups(input: $input)
}
    `,h`
    mutation RemoveGroupSubGroups($input: GroupSubGroupRemoveInput!) {
  removeGroupSubGroups(input: $input)
}
    `,h`
    mutation ReorderSubGroups($input: ReorderSubGroupsInput!) {
  reorderSubGroups(input: $input)
}
    `,h`
    mutation ImageUpdate($input: ImageUpdateInput!) {
  imageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${yr}`,h`
    mutation BulkImageUpdate($input: BulkImageUpdateInput!) {
  bulkImageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${yr}`,h`
    mutation ImagesUpdate($input: [ImageUpdateInput!]!) {
  imagesUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${yr}`,h`
    mutation ImageIncrementO($id: ID!) {
  imageIncrementO(id: $id)
}
    `,h`
    mutation ImageDecrementO($id: ID!) {
  imageDecrementO(id: $id)
}
    `,h`
    mutation ImageResetO($id: ID!) {
  imageResetO(id: $id)
}
    `,h`
    mutation ImageDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  imageDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,h`
    mutation ImagesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  imagesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,h`
    mutation StopJob($job_id: ID!) {
  stopJob(job_id: $job_id)
}
    `,h`
    mutation StopAllJobs {
  stopAllJobs
}
    `,h`
    mutation MetadataImport {
  metadataImport
}
    `,h`
    mutation MetadataExport {
  metadataExport
}
    `,h`
    mutation ExportObjects($input: ExportObjectsInput!) {
  exportObjects(input: $input)
}
    `,h`
    mutation ImportObjects($input: ImportObjectsInput!) {
  importObjects(input: $input)
}
    `,h`
    mutation MetadataScan($input: ScanMetadataInput!) {
  metadataScan(input: $input)
}
    `,h`
    mutation MetadataGenerate($input: GenerateMetadataInput!) {
  metadataGenerate(input: $input)
}
    `,h`
    mutation MetadataAutoTag($input: AutoTagMetadataInput!) {
  metadataAutoTag(input: $input)
}
    `,h`
    mutation MetadataIdentify($input: IdentifyMetadataInput!) {
  metadataIdentify(input: $input)
}
    `,h`
    mutation MetadataClean($input: CleanMetadataInput!) {
  metadataClean(input: $input)
}
    `,h`
    mutation MetadataCleanGenerated($input: CleanGeneratedInput!) {
  metadataCleanGenerated(input: $input)
}
    `,h`
    mutation MigrateHashNaming {
  migrateHashNaming
}
    `,h`
    mutation BackupDatabase($input: BackupDatabaseInput!) {
  backupDatabase(input: $input)
}
    `,h`
    mutation AnonymiseDatabase($input: AnonymiseDatabaseInput!) {
  anonymiseDatabase(input: $input)
}
    `,h`
    mutation OptimiseDatabase {
  optimiseDatabase
}
    `,h`
    mutation MigrateSceneScreenshots($input: MigrateSceneScreenshotsInput!) {
  migrateSceneScreenshots(input: $input)
}
    `,h`
    mutation MigrateBlobs($input: MigrateBlobsInput!) {
  migrateBlobs(input: $input)
}
    `,h`
    mutation PerformerCreate($input: PerformerCreateInput!) {
  performerCreate(input: $input) {
    ...PerformerData
  }
}
    ${nt}`,h`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${nt}`,h`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${nt}`,h`
    mutation PerformerDestroy($id: ID!) {
  performerDestroy(input: {id: $id})
}
    `,h`
    mutation PerformersDestroy($ids: [ID!]!) {
  performersDestroy(ids: $ids)
}
    `,h`
    mutation ReloadPlugins {
  reloadPlugins
}
    `,h`
    mutation RunPluginTask($plugin_id: ID!, $task_name: String!, $args_map: Map) {
  runPluginTask(plugin_id: $plugin_id, task_name: $task_name, args_map: $args_map)
}
    `;const dy=h`
    mutation ConfigurePlugin($plugin_id: ID!, $input: Map!) {
  configurePlugin(plugin_id: $plugin_id, input: $input)
}
    `;h`
    mutation SetPluginsEnabled($enabledMap: BoolMap!) {
  setPluginsEnabled(enabledMap: $enabledMap)
}
    `,h`
    mutation InstallPluginPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Plugin, packages: $packages)
}
    `,h`
    mutation UpdatePluginPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Plugin, packages: $packages)
}
    `,h`
    mutation UninstallPluginPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Plugin, packages: $packages)
}
    `,h`
    mutation SceneMarkerCreate($title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerCreate(
    input: {title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${mt}`,h`
    mutation SceneMarkerUpdate($id: ID!, $title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerUpdate(
    input: {id: $id, title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${mt}`,h`
    mutation SceneMarkerDestroy($id: ID!) {
  sceneMarkerDestroy(id: $id)
}
    `,h`
    mutation SceneMarkersDestroy($ids: [ID!]!) {
  sceneMarkersDestroy(ids: $ids)
}
    `,h`
    mutation SceneCreate($input: SceneCreateInput!) {
  sceneCreate(input: $input) {
    ...SceneData
  }
}
    ${rt}`,h`
    mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${rt}`,h`
    mutation BulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${rt}`,h`
    mutation ScenesUpdate($input: [SceneUpdateInput!]!) {
  scenesUpdate(input: $input) {
    ...SceneData
  }
}
    ${rt}`,h`
    mutation SceneSaveActivity($id: ID!, $resume_time: Float, $playDuration: Float) {
  sceneSaveActivity(
    id: $id
    resume_time: $resume_time
    playDuration: $playDuration
  )
}
    `,h`
    mutation SceneResetActivity($id: ID!, $reset_resume: Boolean!, $reset_duration: Boolean!) {
  sceneResetActivity(
    id: $id
    reset_resume: $reset_resume
    reset_duration: $reset_duration
  )
}
    `,h`
    mutation SceneAddPlay($id: ID!, $times: [Timestamp!]) {
  sceneAddPlay(id: $id, times: $times) {
    count
    history
  }
}
    `,h`
    mutation SceneDeletePlay($id: ID!, $times: [Timestamp!]) {
  sceneDeletePlay(id: $id, times: $times) {
    count
    history
  }
}
    `,h`
    mutation SceneResetPlayCount($id: ID!) {
  sceneResetPlayCount(id: $id)
}
    `,h`
    mutation SceneAddO($id: ID!, $times: [Timestamp!]) {
  sceneAddO(id: $id, times: $times) {
    count
    history
  }
}
    `,h`
    mutation SceneDeleteO($id: ID!, $times: [Timestamp!]) {
  sceneDeleteO(id: $id, times: $times) {
    count
    history
  }
}
    `,h`
    mutation SceneResetO($id: ID!) {
  sceneResetO(id: $id)
}
    `,h`
    mutation SceneDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  sceneDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,h`
    mutation ScenesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  scenesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,h`
    mutation SceneGenerateScreenshot($id: ID!, $at: Float) {
  sceneGenerateScreenshot(id: $id, at: $at)
}
    `,h`
    mutation SceneAssignFile($input: AssignSceneFileInput!) {
  sceneAssignFile(input: $input)
}
    `,h`
    mutation SceneMerge($input: SceneMergeInput!) {
  sceneMerge(input: $input) {
    id
  }
}
    `,h`
    mutation ReloadScrapers {
  reloadScrapers
}
    `,h`
    mutation InstallScraperPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Scraper, packages: $packages)
}
    `,h`
    mutation UpdateScraperPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Scraper, packages: $packages)
}
    `,h`
    mutation UninstallScraperPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Scraper, packages: $packages)
}
    `,h`
    mutation SubmitStashBoxFingerprints($input: StashBoxFingerprintSubmissionInput!) {
  submitStashBoxFingerprints(input: $input)
}
    `,h`
    mutation StashBoxBatchPerformerTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchPerformerTag(input: $input)
}
    `,h`
    mutation StashBoxBatchStudioTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchStudioTag(input: $input)
}
    `,h`
    mutation SubmitStashBoxSceneDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxSceneDraft(input: $input)
}
    `,h`
    mutation SubmitStashBoxPerformerDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxPerformerDraft(input: $input)
}
    `,h`
    mutation StudioCreate($input: StudioCreateInput!) {
  studioCreate(input: $input) {
    ...StudioData
  }
}
    ${Sr}`,h`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${Sr}`,h`
    mutation StudioDestroy($id: ID!) {
  studioDestroy(input: {id: $id})
}
    `,h`
    mutation StudiosDestroy($ids: [ID!]!) {
  studiosDestroy(ids: $ids)
}
    `,h`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${Ht}`,h`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `,h`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `,h`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${Ht}`,h`
    mutation BulkTagUpdate($input: BulkTagUpdateInput!) {
  bulkTagUpdate(input: $input) {
    ...TagData
  }
}
    ${Ht}`,h`
    mutation TagsMerge($source: [ID!]!, $destination: ID!) {
  tagsMerge(input: {source: $source, destination: $destination}) {
    ...TagData
  }
}
    ${Ht}`,h`
    query DLNAStatus {
  dlnaStatus {
    running
    until
    recentIPAddresses
    allowedIPAddresses {
      ipAddress
      until
    }
  }
}
    `,h`
    query FindSavedFilter($id: ID!) {
  findSavedFilter(id: $id) {
    ...SavedFilterData
  }
}
    ${Oa}`,h`
    query FindSavedFilters($mode: FilterMode) {
  findSavedFilters(mode: $mode) {
    ...SavedFilterData
  }
}
    ${Oa}`,h`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${El}`,h`
    query FindGallery($id: ID!) {
  findGallery(id: $id) {
    ...GalleryData
  }
}
    ${zt}`,h`
    query FindGalleriesForSelect($filter: FindFilterType, $gallery_filter: GalleryFilterType, $ids: [ID!]) {
  findGalleries(filter: $filter, gallery_filter: $gallery_filter, ids: $ids) {
    count
    galleries {
      ...SelectGalleryData
    }
  }
}
    ${ty}`,h`
    query FindGalleryImageID($id: ID!, $index: Int!) {
  findGallery(id: $id) {
    image(index: $index) {
      id
    }
  }
}
    `,h`
    query FindImages($filter: FindFilterType, $image_filter: ImageFilterType, $image_ids: [Int!]) {
  findImages(filter: $filter, image_filter: $image_filter, image_ids: $image_ids) {
    count
    megapixels
    filesize
    images {
      ...SlimImageData
    }
  }
}
    ${yr}`,h`
    query FindImage($id: ID!, $checksum: String) {
  findImage(id: $id, checksum: $checksum) {
    ...ImageData
  }
}
    ${ry}`,h`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${Sl}`,h`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${Sl}`,h`
    query SceneWall($q: String) {
  sceneWall(q: $q) {
    ...SceneData
  }
}
    ${rt}`,h`
    query MarkerWall($q: String) {
  markerWall(q: $q) {
    ...SceneMarkerData
  }
}
    ${mt}`,h`
    query MarkerStrings($q: String, $sort: String) {
  markerStrings(q: $q, sort: $sort) {
    id
    count
    title
  }
}
    `,h`
    query Stats {
  stats {
    scene_count
    scenes_size
    scenes_duration
    image_count
    images_size
    gallery_count
    performer_count
    studio_count
    group_count
    tag_count
    total_o_count
    total_play_duration
    total_play_count
    scenes_played
  }
}
    `,h`
    query Logs {
  logs {
    ...LogEntryData
  }
}
    ${_l}`,h`
    query Version {
  version {
    version
    hash
    build_time
  }
}
    `,h`
    query LatestVersion {
  latestversion {
    version
    shorthash
    release_date
    url
  }
}
    `,h`
    query FindGroups($filter: FindFilterType, $group_filter: GroupFilterType) {
  findGroups(filter: $filter, group_filter: $group_filter) {
    count
    groups {
      ...GroupData
    }
  }
}
    ${Wt}`,h`
    query FindGroup($id: ID!) {
  findGroup(id: $id) {
    ...GroupData
  }
}
    ${Wt}`,h`
    query FindGroupsForSelect($filter: FindFilterType, $group_filter: GroupFilterType, $ids: [ID!]) {
  findGroups(filter: $filter, group_filter: $group_filter, ids: $ids) {
    count
    groups {
      ...SelectGroupData
    }
  }
}
    ${ny}`,h`
    query FindPerformers($filter: FindFilterType, $performer_filter: PerformerFilterType, $performer_ids: [Int!]) {
  findPerformers(
    filter: $filter
    performer_filter: $performer_filter
    performer_ids: $performer_ids
  ) {
    count
    performers {
      ...PerformerData
    }
  }
}
    ${nt}`,h`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${nt}`,h`
    query FindPerformersForSelect($filter: FindFilterType, $performer_filter: PerformerFilterType, $ids: [ID!]) {
  findPerformers(filter: $filter, performer_filter: $performer_filter, ids: $ids) {
    count
    performers {
      ...SelectPerformerData
    }
  }
}
    ${iy}`,h`
    query Plugins {
  plugins {
    id
    name
    enabled
    description
    url
    version
    tasks {
      name
      description
    }
    hooks {
      name
      description
      hooks
    }
    settings {
      name
      display_name
      description
      type
    }
    requires
    paths {
      css
      javascript
    }
  }
}
    `,h`
    query PluginTasks {
  pluginTasks {
    name
    description
    plugin {
      id
      name
      enabled
    }
  }
}
    `,h`
    query InstalledPluginPackages {
  installedPackages(type: Plugin) {
    ...PackageData
  }
}
    ${Qt}`,h`
    query InstalledPluginPackagesStatus {
  installedPackages(type: Plugin) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${Qt}`,h`
    query AvailablePluginPackages($source: String!) {
  availablePackages(source: $source, type: Plugin) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${Qt}`,h`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${mt}`,h`
    query FindScenes($filter: FindFilterType, $scene_filter: SceneFilterType, $scene_ids: [Int!]) {
  findScenes(filter: $filter, scene_filter: $scene_filter, scene_ids: $scene_ids) {
    count
    filesize
    duration
    scenes {
      ...SlimSceneData
    }
  }
}
    ${Gt}`,h`
    query FindScenesByPathRegex($filter: FindFilterType) {
  findScenesByPathRegex(filter: $filter) {
    count
    filesize
    duration
    scenes {
      ...SlimSceneData
    }
  }
}
    ${Gt}`,h`
    query FindDuplicateScenes($distance: Int, $duration_diff: Float) {
  findDuplicateScenes(distance: $distance, duration_diff: $duration_diff) {
    ...SlimSceneData
  }
}
    ${Gt}`,h`
    query FindScene($id: ID!, $checksum: String) {
  findScene(id: $id, checksum: $checksum) {
    ...SceneData
  }
}
    ${rt}`,h`
    query FindSceneMarkerTags($id: ID!) {
  sceneMarkerTags(scene_id: $id) {
    tag {
      id
      name
    }
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${mt}`,h`
    query ParseSceneFilenames($filter: FindFilterType!, $config: SceneParserInput!) {
  parseSceneFilenames(filter: $filter, config: $config) {
    count
    results {
      scene {
        ...SlimSceneData
      }
      title
      code
      details
      director
      url
      date
      rating
      studio_id
      gallery_ids
      movies {
        movie_id
      }
      performer_ids
      tag_ids
    }
  }
}
    ${Gt}`,h`
    query SceneStreams($id: ID!) {
  findScene(id: $id) {
    sceneStreams {
      url
      mime_type
      label
    }
  }
}
    `,h`
    query FindScenesForSelect($filter: FindFilterType, $scene_filter: SceneFilterType, $ids: [ID!]) {
  findScenes(filter: $filter, scene_filter: $scene_filter, ids: $ids) {
    count
    scenes {
      ...SelectSceneData
    }
  }
}
    ${sy}`,h`
    query ListPerformerScrapers {
  listScrapers(types: [PERFORMER]) {
    id
    name
    performer {
      urls
      supported_scrapes
    }
  }
}
    `,h`
    query ListSceneScrapers {
  listScrapers(types: [SCENE]) {
    id
    name
    scene {
      urls
      supported_scrapes
    }
  }
}
    `,h`
    query ListGalleryScrapers {
  listScrapers(types: [GALLERY]) {
    id
    name
    gallery {
      urls
      supported_scrapes
    }
  }
}
    `,h`
    query ListImageScrapers {
  listScrapers(types: [IMAGE]) {
    id
    name
    image {
      urls
      supported_scrapes
    }
  }
}
    `,h`
    query ListGroupScrapers {
  listScrapers(types: [GROUP]) {
    id
    name
    group {
      urls
      supported_scrapes
    }
  }
}
    `,h`
    query ScrapeSingleStudio($source: ScraperSourceInput!, $input: ScrapeSingleStudioInput!) {
  scrapeSingleStudio(source: $source, input: $input) {
    ...ScrapedStudioData
  }
}
    ${uy}`,h`
    query ScrapeSinglePerformer($source: ScraperSourceInput!, $input: ScrapeSinglePerformerInput!) {
  scrapeSinglePerformer(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${xa}`,h`
    query ScrapeMultiPerformers($source: ScraperSourceInput!, $input: ScrapeMultiPerformersInput!) {
  scrapeMultiPerformers(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${xa}`,h`
    query ScrapePerformerURL($url: String!) {
  scrapePerformerURL(url: $url) {
    ...ScrapedPerformerData
  }
}
    ${xa}`,h`
    query ScrapeSingleScene($source: ScraperSourceInput!, $input: ScrapeSingleSceneInput!) {
  scrapeSingleScene(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${Ca}`,h`
    query ScrapeMultiScenes($source: ScraperSourceInput!, $input: ScrapeMultiScenesInput!) {
  scrapeMultiScenes(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${Ca}`,h`
    query ScrapeSceneURL($url: String!) {
  scrapeSceneURL(url: $url) {
    ...ScrapedSceneData
  }
}
    ${Ca}`,h`
    query ScrapeSingleGallery($source: ScraperSourceInput!, $input: ScrapeSingleGalleryInput!) {
  scrapeSingleGallery(source: $source, input: $input) {
    ...ScrapedGalleryData
  }
}
    ${Tl}`,h`
    query ScrapeSingleImage($source: ScraperSourceInput!, $input: ScrapeSingleImageInput!) {
  scrapeSingleImage(source: $source, input: $input) {
    ...ScrapedImageData
  }
}
    ${Il}`,h`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${Tl}`,h`
    query ScrapeImageURL($url: String!) {
  scrapeImageURL(url: $url) {
    ...ScrapedImageData
  }
}
    ${Il}`,h`
    query ScrapeGroupURL($url: String!) {
  scrapeGroupURL(url: $url) {
    ...ScrapedGroupData
  }
}
    ${cy}`,h`
    query InstalledScraperPackages {
  installedPackages(type: Scraper) {
    ...PackageData
  }
}
    ${Qt}`,h`
    query InstalledScraperPackagesStatus {
  installedPackages(type: Scraper) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${Qt}`,h`
    query AvailableScraperPackages($source: String!) {
  availablePackages(source: $source, type: Scraper) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${Qt}`;const py=h`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${ey}`;h`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `,h`
    query ValidateStashBox($input: StashBoxInput!) {
  validateStashBoxCredentials(input: $input) {
    valid
    status
  }
}
    `,h`
    query SystemStatus {
  systemStatus {
    databaseSchema
    databasePath
    appSchema
    status
    configPath
    os
    workingDir
    homeDir
    ffmpegPath
    ffprobePath
  }
}
    `,h`
    query FindStudios($filter: FindFilterType, $studio_filter: StudioFilterType) {
  findStudios(filter: $filter, studio_filter: $studio_filter) {
    count
    studios {
      ...StudioData
    }
  }
}
    ${Sr}`,h`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${Sr}`,h`
    query FindStudiosForSelect($filter: FindFilterType, $studio_filter: StudioFilterType, $ids: [ID!]) {
  findStudios(filter: $filter, studio_filter: $studio_filter, ids: $ids) {
    count
    studios {
      ...SelectStudioData
    }
  }
}
    ${ly}`,h`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagData
    }
  }
}
    ${Ht}`,h`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${Ht}`,h`
    query FindTagsForSelect($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...SelectTagData
    }
  }
}
    ${fy}`,h`
    query FindFullScenes($filter: FindFilterType, $scene_filter: SceneFilterType, $ids: [ID!]) {
  findScenes(filter: $filter, scene_filter: $scene_filter, ids: $ids) {
    count
    filesize
    duration
    scenes {
      ...SceneData
    }
  }
}
    ${rt}`,h`
    query FindSceneMarkersForTv($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType, $ids: [ID!]) {
  findSceneMarkers(
    scene_marker_filter: $scene_marker_filter
    filter: $filter
    ids: $ids
  ) {
    count
    scene_markers {
      ...SceneMarkerData
      scene {
        ...SceneData
      }
    }
  }
}
    ${mt}
${rt}`,h`
    query GetStashConfigForTv {
  configuration {
    plugins
    ui
  }
  availableSavedSceneFilters: findSavedFilters(mode: SCENES) {
    id
    name
  }
  availableSavedMarkerFilters: findSavedFilters(mode: SCENE_MARKERS) {
    id
    name
  }
}
    `,h`
    subscription JobsSubscribe {
  jobsSubscribe {
    type
    job {
      id
      status
      subTasks
      description
      progress
      error
      startTime
    }
  }
}
    `,h`
    subscription LoggingSubscribe {
  loggingSubscribe {
    ...LogEntryData
  }
}
    ${_l}`;const hy=h`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `;function my(e){return ae(e)&&"code"in e&&"reason"in e}function gy(e){var t;return ae(e)&&((t=e.target)===null||t===void 0?void 0:t.readyState)===WebSocket.CLOSED}var yy=(function(e){Ee(t,e);function t(n){var r=e.call(this)||this;return r.client=n,r}return t.prototype.request=function(n){var r=this;return new W(function(i){return r.client.subscribe(_(_({},n),{query:Xe(n.query)}),{next:i.next.bind(i),complete:i.complete.bind(i),error:function(a){if(a instanceof Error)return i.error(a);var o=my(a);return o||gy(a)?i.error(new Error("Socket closed".concat(o?" with event ".concat(a.code):"").concat(o?" ".concat(a.reason):""))):i.error(new Ze({graphQLErrors:Array.isArray(a)?a:[a]}))}})})},t})(Ie);function be(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function gt(e){return be(e)==="object"}function vy(e){return Array.isArray(e)&&e.length>0&&e.every(t=>"message"in t)}function Ol(e,t){return e.length<124?e:t}const by="graphql-transport-ws";var _e;(function(e){e[e.InternalServerError=4500]="InternalServerError",e[e.InternalClientError=4005]="InternalClientError",e[e.BadRequest=4400]="BadRequest",e[e.BadResponse=4004]="BadResponse",e[e.Unauthorized=4401]="Unauthorized",e[e.Forbidden=4403]="Forbidden",e[e.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",e[e.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",e[e.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",e[e.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",e[e.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(_e||(_e={}));var se;(function(e){e.ConnectionInit="connection_init",e.ConnectionAck="connection_ack",e.Ping="ping",e.Pong="pong",e.Subscribe="subscribe",e.Next="next",e.Error="error",e.Complete="complete"})(se||(se={}));function kl(e){if(!gt(e))throw new Error(`Message is expected to be an object, but got ${be(e)}`);if(!e.type)throw new Error("Message is missing the 'type' property");if(typeof e.type!="string")throw new Error(`Message is expects the 'type' property to be a string, but got ${be(e.type)}`);switch(e.type){case se.ConnectionInit:case se.ConnectionAck:case se.Ping:case se.Pong:{if(e.payload!=null&&!gt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);break}case se.Subscribe:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${be(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!gt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${be(e.payload)}`);if(typeof e.payload.query!="string")throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${be(e.payload.query)}`);if(e.payload.variables!=null&&!gt(e.payload.variables))throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${be(e.payload.variables)}`);if(e.payload.operationName!=null&&be(e.payload.operationName)!=="string")throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${be(e.payload.operationName)}`);if(e.payload.extensions!=null&&!gt(e.payload.extensions))throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${be(e.payload.extensions)}`);break}case se.Next:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${be(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!gt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${be(e.payload)}`);break}case se.Error:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${be(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!vy(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);break}case se.Complete:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${be(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);break}default:throw new Error(`Invalid message 'type' property "${e.type}"`)}return e}function Sy(e,t){return kl(typeof e=="string"?JSON.parse(e,t):e)}function On(e,t){return kl(e),JSON.stringify(e,t)}var Yt=function(e){return this instanceof Yt?(this.v=e,this):new Yt(e)},_y=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,a=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",o),i[Symbol.asyncIterator]=function(){return this},i;function o(p){return function(y){return Promise.resolve(y).then(p,d)}}function s(p,y){r[p]&&(i[p]=function(m){return new Promise(function(v,g){a.push([p,m,v,g])>1||u(p,m)})},y&&(i[p]=y(i[p])))}function u(p,y){try{c(r[p](y))}catch(m){f(a[0][3],m)}}function c(p){p.value instanceof Yt?Promise.resolve(p.value.v).then(l,d):f(a[0][2],p)}function l(p){u("next",p)}function d(p){u("throw",p)}function f(p,y){p(y),a.shift(),a.length&&u(a[0][0],a[0][1])}};function Ey(e){const{url:t,connectionParams:n,lazy:r=!0,onNonLazyError:i=console.error,lazyCloseTimeout:a=0,keepAlive:o=0,disablePong:s,connectionAckWaitTimeout:u=0,retryAttempts:c=5,retryWait:l=async function(J){let S=1e3;for(let T=0;T<J;T++)S*=2;await new Promise(T=>setTimeout(T,S+Math.floor(Math.random()*2700+300)))},shouldRetry:d=Fa,isFatalConnectionProblem:f,on:p,webSocketImpl:y,generateID:m=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,J=>{const S=Math.random()*16|0;return(J=="x"?S:S&3|8).toString(16)})},jsonMessageReplacer:v,jsonMessageReviver:g}=e;let b;if(y){if(!wy(y))throw new Error("Invalid WebSocket implementation provided");b=y}else typeof WebSocket<"u"?b=WebSocket:typeof global<"u"?b=global.WebSocket||global.MozWebSocket:typeof window<"u"&&(b=window.WebSocket||window.MozWebSocket);if(!b)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const E=b,D=(()=>{const M=(()=>{const S={};return{on(T,F){return S[T]=F,()=>{delete S[T]}},emit(T){var F;"id"in T&&((F=S[T.id])===null||F===void 0||F.call(S,T))}}})(),J={connecting:p?.connecting?[p.connecting]:[],opened:p?.opened?[p.opened]:[],connected:p?.connected?[p.connected]:[],ping:p?.ping?[p.ping]:[],pong:p?.pong?[p.pong]:[],message:p?.message?[M.emit,p.message]:[M.emit],closed:p?.closed?[p.closed]:[],error:p?.error?[p.error]:[]};return{onMessage:M.on,on(S,T){const F=J[S];return F.push(T),()=>{F.splice(F.indexOf(T),1)}},emit(S,...T){for(const F of[...J[S]])F(...T)}}})();function I(M){const J=[D.on("error",S=>{J.forEach(T=>T()),M(S)}),D.on("closed",S=>{J.forEach(T=>T()),M(S)})]}let O,C=0,N,L=!1,U=0,z=!1;async function fe(){clearTimeout(N);const[M,J]=await(O??(O=new Promise((F,q)=>(async()=>{if(L){if(await l(U),!C)return O=void 0,q({code:1e3,reason:"All Subscriptions Gone"});U++}D.emit("connecting",L);const R=new E(typeof t=="function"?await t():t,by);let B,X;function K(){isFinite(o)&&o>0&&(clearTimeout(X),X=setTimeout(()=>{R.readyState===E.OPEN&&(R.send(On({type:se.Ping})),D.emit("ping",!1,void 0))},o))}I(ee=>{O=void 0,clearTimeout(B),clearTimeout(X),q(ee),ee instanceof xl&&(R.close(4499,"Terminated"),R.onerror=null,R.onclose=null)}),R.onerror=ee=>D.emit("error",ee),R.onclose=ee=>D.emit("closed",ee),R.onopen=async()=>{try{D.emit("opened",R);const ee=typeof n=="function"?await n():n;if(R.readyState!==E.OPEN)return;R.send(On(ee?{type:se.ConnectionInit,payload:ee}:{type:se.ConnectionInit},v)),isFinite(u)&&u>0&&(B=setTimeout(()=>{R.close(_e.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},u)),K()}catch(ee){D.emit("error",ee),R.close(_e.InternalClientError,Ol(ee instanceof Error?ee.message:new Error(ee).message,"Internal client error"))}};let Z=!1;R.onmessage=({data:ee})=>{try{const pe=Sy(ee,g);if(D.emit("message",pe),pe.type==="ping"||pe.type==="pong"){D.emit(pe.type,!0,pe.payload),pe.type==="pong"?K():s||(R.send(On(pe.payload?{type:se.Pong,payload:pe.payload}:{type:se.Pong})),D.emit("pong",!1,pe.payload));return}if(Z)return;if(pe.type!==se.ConnectionAck)throw new Error(`First message cannot be of type ${pe.type}`);clearTimeout(B),Z=!0,D.emit("connected",R,pe.payload,L),L=!1,U=0,F([R,new Promise((ev,zy)=>I(zy))])}catch(pe){R.onmessage=null,D.emit("error",pe),R.close(_e.BadResponse,Ol(pe instanceof Error?pe.message:new Error(pe).message,"Bad response"))}}})())));M.readyState===E.CLOSING&&await J;let S=()=>{};const T=new Promise(F=>S=F);return[M,S,Promise.race([T.then(()=>{if(!C){const F=()=>M.close(1e3,"Normal Closure");isFinite(a)&&a>0?N=setTimeout(()=>{M.readyState===E.OPEN&&F()},a):F()}}),J])]}function ie(M){if(Fa(M)&&(Dy(M.code)||[_e.InternalServerError,_e.InternalClientError,_e.BadRequest,_e.BadResponse,_e.Unauthorized,_e.SubprotocolNotAcceptable,_e.SubscriberAlreadyExists,_e.TooManyInitialisationRequests].includes(M.code)))throw M;if(z)return!1;if(Fa(M)&&M.code===1e3)return C>0;if(!c||U>=c||!d(M)||f?.(M))throw M;return L=!0}r||(async()=>{for(C++;;)try{const[,,M]=await fe();await M}catch(M){try{if(!ie(M))return}catch(J){return i?.(J)}}})();function ge(M,J){const S=m(M);let T=!1,F=!1,q=()=>{C--,T=!0};return(async()=>{for(C++;;)try{const[R,B,X]=await fe();if(T)return B();const K=D.onMessage(S,Z=>{switch(Z.type){case se.Next:{J.next(Z.payload);return}case se.Error:{F=!0,T=!0,J.error(Z.payload),q();return}case se.Complete:{T=!0,q();return}}});R.send(On({id:S,type:se.Subscribe,payload:M},v)),q=()=>{!T&&R.readyState===E.OPEN&&R.send(On({id:S,type:se.Complete},v)),C--,T=!0,B()},await X.finally(K);return}catch(R){if(!ie(R))return}})().then(()=>{F||J.complete()}).catch(R=>{J.error(R)}),()=>{T||q()}}return{on:D.on,subscribe:ge,iterate(M){const J=[],S={done:!1,error:null,resolve:()=>{}},T=ge(M,{next(q){J.push(q),S.resolve()},error(q){S.done=!0,S.error=q,S.resolve()},complete(){S.done=!0,S.resolve()}}),F=(function(){return _y(this,arguments,function*(){for(;;){for(J.length||(yield Yt(new Promise(B=>S.resolve=B)));J.length;)yield yield Yt(J.shift());if(S.error)throw S.error;if(S.done)return yield Yt(void 0)}})})();return F.throw=async q=>(S.done||(S.done=!0,S.error=q,S.resolve()),{done:!0,value:void 0}),F.return=async()=>(T(),{done:!0,value:void 0}),F},async dispose(){if(z=!0,O){const[M]=await O;M.close(1e3,"Normal Closure")}},terminate(){O&&D.emit("closed",new xl)}}}class xl extends Error{constructor(){super(...arguments),this.name="TerminatedCloseEvent",this.message="4499: Terminated",this.code=4499,this.reason="Terminated",this.wasClean=!1}}function Fa(e){return gt(e)&&"code"in e&&"reason"in e}function Dy(e){return[1e3,1001,1006,1005,1012,1013,1014].includes(e)?!1:e>=1e3&&e<=1999}function wy(e){return typeof e=="function"&&"constructor"in e&&"CLOSED"in e&&"CLOSING"in e&&"CONNECTING"in e&&"OPEN"in e}function Cl(e){return new Ie(function(t,n){return new W(function(r){var i,a,o;try{i=n(t).subscribe({next:function(s){if(s.errors?o=e({graphQLErrors:s.errors,response:s,operation:t,forward:n}):Ru(s)&&(o=e({protocolErrors:s.extensions[lr],response:s,operation:t,forward:n})),o){a=o.subscribe({next:r.next.bind(r),error:r.error.bind(r),complete:r.complete.bind(r)});return}r.next(s)},error:function(s){if(o=e({operation:t,networkError:s,graphQLErrors:s&&s.result&&s.result.errors||void 0,forward:n}),o){a=o.subscribe({next:r.next.bind(r),error:r.error.bind(r),complete:r.complete.bind(r)});return}r.error(s)},complete:function(){o||r.complete.bind(r)()}})}catch(s){e({networkError:s,operation:t,forward:n}),r.error(s)}return function(){i&&i.unsubscribe(),a&&i.unsubscribe()}})})}(function(e){Ee(t,e);function t(n){var r=e.call(this)||this;return r.link=Cl(n),r}return t.prototype.request=function(n,r){return this.link.request(n,r)},t})(Ie);function Ty(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Iy(e,t,n=""){if(!arguments.length)throw new TypeError("Argument 1 `value` is required.");if(typeof t!="function")throw new TypeError("Argument 2 `isExtractable` must be a function.");if(typeof n!="string")throw new TypeError("Argument 3 `path` must be a string.");const r=new Map,i=new Map;function a(o,s,u){if(t(o)){const d=i.get(o);return d?d.push(s):i.set(o,[s]),null}const c=Array.isArray(o)||typeof FileList<"u"&&o instanceof FileList,l=Ty(o);if(c||l){let d=r.get(o);const f=!d;if(f&&(d=c?[]:o instanceof Object?{}:Object.create(null),r.set(o,d)),!u.has(o)){const p=s?`${s}.`:"",y=new Set(u).add(o);if(c){let m=0;for(const v of o){const g=a(v,p+m++,y);f&&d.push(g)}}else for(const m in o){const v=a(o[m],p+m,y);f&&(d[m]=v)}}return d}return o}return{clone:a(e,n,new Set),files:i}}function Oy(e,t,n){"name"in n?e.append(t,n,n.name):e.append(t,n)}function ky(e){return typeof File<"u"&&e instanceof File||typeof Blob<"u"&&e instanceof Blob}function xy({uri:e="/graphql",useGETForQueries:t,isExtractableFile:n=ky,FormData:r,formDataAppendFile:i=Oy,print:a=Vu,fetch:o,fetchOptions:s,credentials:u,headers:c,includeExtensions:l}={}){const d={http:{includeExtensions:l},options:s,credentials:u,headers:c};return new Ie(f=>{const p=f.getContext(),{clientAwareness:{name:y,version:m}={},headers:v}=p,g={http:p.http,options:p.fetchOptions,credentials:p.credentials,headers:{...y&&{"apollographql-client-name":y},...m&&{"apollographql-client-version":m},...v}},{options:b,body:E}=Bu(f,a,Uu,d,g),{clone:D,files:I}=Iy(E,n,"");let O=Gu(f,e);if(I.size){b.headers&&delete b.headers["content-type"];const L=r||FormData,U=new L;U.append("operations",bn(D,"Payload"));const z={};let fe=0;I.forEach(ie=>{z[++fe]=ie}),U.append("map",JSON.stringify(z)),fe=0,I.forEach((ie,ge)=>{i(U,String(++fe),ge)}),b.body=U}else if(t&&!f.query.definitions.some(L=>L.kind==="OperationDefinition"&&L.operation==="mutation")&&(b.method="GET"),b.method==="GET"){const{newURI:L,parseError:U}=zu(O,E);if(U)return new W(z=>{z.error(U)});O=L}else b.body=bn(D,"Payload");const{controller:C}=fg();typeof C!="boolean"&&(b.signal&&(b.signal.aborted?C.abort():b.signal.addEventListener("abort",()=>{C.abort()},{once:!0})),b.signal=C.signal);const N=o||fetch;return new W(L=>{let U;return N(O,b).then(z=>(f.setContext({response:z}),z)).then(qu(f)).then(z=>{L.next(z),L.complete()}).catch(z=>{U||(z.result&&z.result.errors&&z.result.data&&L.next(z.result),L.error(z))}),()=>{U=!0,typeof C!="boolean"&&C.abort()}})})}var Aa,$a;const at=e=>(t,{args:n,canRead:r,toReference:i})=>r(t)?t:i({__typename:e,id:n?.id}),kn=(e,{canRead:t})=>{if(e!==void 0)return t(e)?e:null},Cy={Query:{fields:{findImage:{read:at("Image")},findPerformer:{read:at("Performer")},findStudio:{read:at("Studio")},findGroup:{read:at("Group")},findGallery:{read:at("Gallery")},findScene:{read:at("Scene")},findTag:{read:at("Tag")},findSavedFilter:{read:at("SavedFilter")}}},Scene:{fields:{studio:{read:kn}}},Image:{fields:{studio:{read:kn},paths:{merge:!1}}},Group:{fields:{studio:{read:kn}}},Gallery:{fields:{studio:{read:kn}}},Studio:{fields:{parent_studio:{read:kn}}}},Fy={BaseFile:["VideoFile","ImageFile","GalleryFile"],VisualFile:["VideoFile","ImageFile"]},Ay=($a=(Aa=document.querySelector("base"))===null||Aa===void 0?void 0:Aa.getAttribute("href"))!==null&&$a!==void 0?$a:"/",Pa=e=>{let t=new URL(window.location.origin+Ay);return e&&(t.pathname+=e),t},$y=()=>{const e=Pa("graphql"),t=Pa("graphql");t.protocol==="https:"?t.protocol="wss:":t.protocol="ws:";const n=xy({uri:e.toString()}),r=Ey({url:t.toString(),retryAttempts:1/0,shouldRetry(){return!0}}),i=new yy(r),a=Cl(({networkError:l})=>{if(l&&l.statusCode===401){const d=new URL(Pa("login"),window.location.toString());d.searchParams.append("returnURL",window.location.href),window.location.href=d.toString()}}),o=zm(({query:l})=>{const d=$t(l);return d.kind==="OperationDefinition"&&d.operation==="subscription"},i,n),s=Gm([a,o]),u=new Sa({typePolicies:Cy,possibleTypes:Fy}),c=new Ta({link:s,cache:u});return c.subscribe({query:hy}).subscribe({next:()=>{c.resetStore()}}),{cache:u,client:c,wsClient:r}},{client:Py}=$y(),Ny=()=>Py;function Ry(){const e=Ny(),t="config"in e.cache?e.cache.config:{},n=new Sa({...t});return new Ta({link:e.link,cache:n})}let My;function Fl(){return My??=Ry()}const Ly={getItem:async e=>await Al().then(t=>t?.[e]||null).catch(console.error),setItem:async(e,t)=>await Pl(n=>({...n,[e]:t})).catch(console.error),removeItem:async e=>await Pl(t=>{const{[e]:n,...r}=t;return r}).catch(console.error)};async function Al(){return(await Fl().query({query:py})).data?.configuration.plugins[Ge]}const $l=new Set;async function Pl(e){const t=Al().then(n=>Fl().mutate({mutation:dy,variables:{plugin_id:Ge,input:e(n)}}));$l.add(t);try{await t}finally{$l.delete(t)}}const Na={showSettings:!1,fullscreen:!1,sceneInfoOpen:!1,sceneInfoDraft:null,sceneInfoEditorPillContent:"names",keyboardShortcutsOpen:!1,tvConfigLoaded:!1},Ra=hs()((e,t)=>({...Na,set:(n,r)=>{if(!t().tvConfigLoaded&&n!=="tvConfigLoaded"){console.warn(`Tried to set ${n} to "${r}" before store was loaded`);return}e(i=>{const a=typeof r=="function"?r(i[n]):r;return{[n]:a}})},setToDefault:n=>{if(!t().tvConfigLoaded){console.warn(`Tried to set ${n} to default before store was loaded`);return}e(r=>({[n]:Na[n]}))},getDefault:n=>Na[n],get:n=>t()[n]}));function jy(){return`${Date.now()}-${Math.random().toString().slice(2)}`}function yt(e,t){return{field:"spacer",id:`default-${e}`,options:{size:t}}}const qy=[["studio"],["title"],[yt(1,"medium")],{left:["date"],right:["resolution",yt(2,"small"),"frame-rate"]},[yt(3,"small")],{left:["rating"],right:["o-count",yt(4,"medium"),"play-count"]},[yt(5,"medium")],["performers"],[yt(6,"small")],["tags"],[yt(7,"small")],["details"]],Fe="app-state",Ma={volume:0,showSubtitles:!1,letterboxing:!1,forceLandscape:!1,looping:!1,uiVisible:!0,crtEffect:!1,crtEffectStrength:1,scenePreviewOnly:!1,markerPreviewOnly:!1,preferredStreamLabel:void 0,onlyShowMatchingOrientation:!1,maxMedia:void 0,autoPlay:!0,startPosition:"resume",endPosition:"video-end",showGuideOverlay:!0,showDevOptions:!1,logLevel:Ap,pageSize:5,loggersToShow:[],loggersToHide:[],showDebuggingInfo:[],renderedMediaItemsBuffer:2,videoJsEventsToLog:[],actionButtonStackConfig:[{id:"1",type:"button",buttonType:"ui-visibility",pinned:!0},{id:"2",type:"button",buttonType:"settings",pinned:!1},{id:"3",type:"button",buttonType:"show-scene-info",pinned:!1},{id:"12",type:"folder",pinned:!1,contents:[{id:"12.1",type:"button",buttonType:"rate-scene",pinned:!1},{id:"12.2",type:"button",buttonType:"o-counter",pinned:!1},{id:"12.3",type:"button",buttonType:"set-organized",pinned:!1},{id:"12.4",type:"button",buttonType:"edit-tags",pinned:!1,pinnedTagIds:[]},{id:"12.5",type:"button",buttonType:"delete-media-item",pinned:!1}]},{id:"6",type:"button",buttonType:"force-landscape",pinned:!1},{id:"8",type:"button",buttonType:"volume",pinned:!1},{id:"9",type:"button",buttonType:"letterboxing",pinned:!1},{id:"14",type:"button",buttonType:"change-channel",pinned:!1},{id:"13",type:"folder",pinned:!1,contents:[{id:"13.1",type:"button",buttonType:"loop",pinned:!1},{id:"13.2",type:"button",buttonType:"playback-rate",pinned:!1},{id:"13.3",type:"button",buttonType:"subtitles",pinned:!1},{id:"13.4",type:"button",buttonType:"fullscreen",pinned:!1},{id:"13.5",type:"button",buttonType:"resolution",pinned:!1}]}],sceneInfoLayout:qy,sceneInfoFieldOptions:{},channels:[{id:"all-scenes",sources:[{type:"all",entityType:"scene",randomise:!1}]}],startupChannel:"last-viewed",playbackRate:1},Uy=["forceLandscape"],Vy=()=>{const e=Ly,t=localStorage;return{getItem:async n=>{const[r,i]=await Promise.all([e.getItem(n),Promise.resolve(t.getItem(`${n}-local`))]);if(!r&&!i)return null;const a=r?JSON.parse(r).state:{},o=i?JSON.parse(i).state:{};return JSON.stringify({state:{...a,...o},version:a?.version??o?.version??0})},setItem:async(n,r)=>{const i=JSON.parse(r),a=i.state,o={},s={};for(const[c,l]of Object.entries(a))Uy.includes(c)?s[c]=l:o[c]=l;const u=[];Object.keys(o).length>0&&u.push(e.setItem(n,JSON.stringify({...i,state:o}))),Object.keys(s).length>0&&u.push(Promise.resolve(t.setItem(`${n}-local`,JSON.stringify({...i,state:s})))),await Promise.all(u)},removeItem:async n=>{await Promise.all([e.removeItem(n),Promise.resolve(t.removeItem(`${n}-local`))])}}};hs()(wp((e,t)=>({...Ma,set:(n,r)=>{if(!Ra.getState().tvConfigLoaded){console.warn(`Tried to set ${n} to "${r}" before config was loaded`);return}e(i=>{const a=typeof r=="function"?r(i[n]):r;if(n==="showDebuggingInfo"){const o=a.includes("render-debugging");localStorage.getItem("enableRenderDebugging")==="true"!==o&&setTimeout(()=>{localStorage.setItem("enableRenderDebugging",JSON.stringify(o)),window.location.reload()},300)}return{[n]:a}})},setToDefault:n=>{if(!Ra.getState().tvConfigLoaded){console.warn(`Tried to set ${n} to default before store was loaded`);return}e(r=>({[n]:Ma[n]}))},getDefault:n=>Ma[n],get:n=>t()[n]}),{name:Fe,storage:ms(()=>Vy()),onRehydrateStorage:e=>()=>Ra.setState({tvConfigLoaded:!0}),version:3,migrate:(e,t)=>{if(t===0&&e&&typeof e=="object"&&("audioMuted"in e&&(e.volume=e.audioMuted?0:1,delete e.audioMuted),"actionButtonsConfig"in e&&Array.isArray(e.actionButtonsConfig)))for(const n of e.actionButtonsConfig)n.type==="mute"&&(n.type="volume");if(t<2&&e&&typeof e=="object"&&"actionButtonsConfig"in e&&Array.isArray(e.actionButtonsConfig)){const n=e.actionButtonsConfig;e.actionButtonStackConfig=n,delete e.actionButtonsConfig;for(const r of n)r.buttonType=r.type,r.type="button"}if(t<3&&e&&typeof e=="object"){const n=e;if(typeof n.currentFilterId=="string"&&n.currentFilterId){const r={id:jy(),sources:[{type:"stash-saved-filter",savedFilterId:n.currentFilterId,randomise:!!n.isRandomised}]};n.channels=[r],n.lastViewedChannelId=r.id}delete n.currentFilterId,delete n.isRandomised}return e}}));const{PluginApi:ve}=window,{React:Y}=ve,La=ve.utils.StashService.getClient();Nl(async e=>e?.initialSetupComplete?null:(await Rl(),{...e,initialSetupComplete:!0})),ve.patch.instead("PluginSettings",function(e,t,n){const[r,i]=Y.useState(!1),[a,o]=ve.React.useState(null);if(e.pluginID!==Ge)return Y.createElement(n,{...e});const s=async()=>{i(!1),await Nl(()=>({})),o(null),i(!0)};ve.React.useEffect(()=>{ja().then(c=>o(c.plugins[Ge]))},[]);const u=ve.React.useMemo(()=>JSON.parse(a&&Fe in a&&typeof a[Fe]=="string"?a[Fe]:"{}")?.state?.showDevOptions,[a]);return[Y.createElement(n,{...e}),Y.createElement("div",{className:"plugin-settings"},Y.createElement("div",{className:"setting"})," ",Y.createElement("div",{className:"setting"},Y.createElement("div",null,Y.createElement("h3",null,"Reset all Stash TV settings"),Y.createElement("div",{className:"sub-heading"},"Stash TV has its own settings which are configurable from the settings panel in the Stash TV interface. This resets those settings to default.")),Y.createElement("div",null,Y.createElement(ve.libraries.Bootstrap.Button,{onClick:s,variant:"warning"},r&&Y.createElement(Y.Fragment,null,Y.createElement(Un,{icon:ve.libraries.FontAwesomeSolid.faCheck})," "),"Reset"))),u&&Y.createElement("div",{className:"setting"},Y.createElement("div",null,Y.createElement("details",null,Y.createElement("summary",null,Y.createElement("h3",{style:{display:"inline"}},"Stash TV settings JSON")),Y.createElement("pre",null,JSON.stringify(a&&Fe in a&&typeof a[Fe]=="string"?{...a,[Fe]:"<app state data>"}:a,null,2)),a&&Fe in a&&typeof a[Fe]=="string"&&Y.createElement(Y.Fragment,null,"App state stored in Stash TV config:",Y.createElement("pre",null,JSON.stringify(JSON.parse(a[Fe]),null,2))))),Y.createElement("div",null)," "))]}),ve.patch.instead("MainNavBar.MenuItems",function({children:e,...t},n,r){const{data:i,loading:a}=ve.GQL.useConfigurationQuery(),o=i?.configuration?.interface?.menuItems?.includes("tv");return[Y.createElement(r,{...t},e,!a&&o&&Y.createElement(By,null))]}),ve.patch.before("CheckboxGroup",function(...e){const[t,...n]=e;return t.groupId!=="menu-items"?[t,...n]:[{...t,items:[...t.items,{id:"tv",headingID:"TV"}]},...n]});const By=()=>{const e="/plugin/"+Ge+"/assets/app/";return Y.createElement("div",{"data-rb-event-key":e,className:"col-4 col-sm-3 col-md-2 col-lg-auto nav-link",id:"StashTVButton"},Y.createElement("a",{href:e,className:"minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center btn btn-primary",target:"_blank"},Y.createElement(Un,{className:"fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0",icon:ve.libraries.FontAwesomeSolid.faTelevision}),Y.createElement("span",null,"TV")))};async function Nl(e){ja().then(async t=>typeof e=="function"?await e(t.plugins[Ge],t):{...t.plugins[Ge],...e}).then(t=>{if(t)return La.mutate({mutation:ve.GQL.ConfigurePluginDocument,variables:{plugin_id:Ge,input:t}})})}async function Gy(e){ja().then(t=>typeof e=="function"?e(t.interface):{...t.interface,...e}).then(t=>La.mutate({mutation:ve.GQL.ConfigureInterfaceDocument,variables:{input:t}}))}async function ja(){return(await La.query({query:ve.GQL.ConfigurationDocument})).data?.configuration}async function Rl(){Gy(e=>({...e,menuItems:Array.from(new Set([...e.menuItems||[],"tv"]))}))}vt.setupPlugin=Rl,Object.defineProperty(vt,Symbol.toStringTag,{value:"Module"})}));
