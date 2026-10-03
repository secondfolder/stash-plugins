(function(xt,or){typeof exports=="object"&&typeof module<"u"?or(exports):typeof define=="function"&&define.amd?define(["exports"],or):(xt=typeof globalThis<"u"?globalThis:xt||self,or(xt["Stash TV"]={}))})(this,(function(xt){"use strict";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function or(t,e,r){return(e=Lf(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function hs(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?hs(Object(r),!0).forEach(function(n){or(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):hs(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Mf(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Lf(t){var e=Mf(t,"string");return typeof e=="symbol"?e:e+""}const ms=()=>{};let Vn={},gs={},ys=null,vs={mark:ms,measure:ms};try{typeof window<"u"&&(Vn=window),typeof document<"u"&&(gs=document),typeof MutationObserver<"u"&&(ys=MutationObserver),typeof performance<"u"&&(vs=performance)}catch{}const{userAgent:bs=""}=Vn.navigator||{},Qe=Vn,ie=gs,Ss=ys,qr=vs;Qe.document;const Re=!!ie.documentElement&&!!ie.head&&typeof ie.addEventListener=="function"&&typeof ie.createElement=="function",_s=~bs.indexOf("MSIE")||~bs.indexOf("Trident/");var jf=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,qf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Es={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Uf={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ws=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],he="classic",Ur="duotone",Vf="sharp",Bf="sharp-duotone",Ds=[he,Ur,Vf,Bf],Gf={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},zf={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Qf=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Wf={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Hf=["fak","fa-kit","fakd","fa-kit-duotone"],Ts={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Yf=["kit"],Jf={kit:{"fa-kit":"fak"}},Xf=["fak","fakd"],Kf={kit:{fak:"fa-kit"}},Os={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Vr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zf=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ed=["fak","fa-kit","fakd","fa-kit-duotone"],td={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},rd={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},nd={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Bn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},id=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Gn=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Zf,...id],ad=["solid","regular","light","thin","duotone","brands"],xs=[1,2,3,4,5,6,7,8,9,10],sd=xs.concat([11,12,13,14,15,16,17,18,19,20]),od=[...Object.keys(nd),...ad,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Vr.GROUP,Vr.SWAP_OPACITY,Vr.PRIMARY,Vr.SECONDARY].concat(xs.map(t=>"".concat(t,"x"))).concat(sd.map(t=>"w-".concat(t))),ud={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Me="___FONT_AWESOME___",zn=16,ks="fa",Is="svg-inline--fa",pt="data-fa-i2svg",Qn="data-fa-pseudo-element",cd="data-fa-pseudo-element-pending",Wn="data-prefix",Hn="data-icon",Fs="fontawesome-i2svg",ld="async",fd=["HTML","HEAD","STYLE","SCRIPT"],$s=(()=>{try{return!0}catch{return!1}})();function ur(t){return new Proxy(t,{get(e,r){return r in e?e[r]:e[he]}})}const Cs=k({},Es);Cs[he]=k(k(k(k({},{"fa-duotone":"duotone"}),Es[he]),Ts.kit),Ts["kit-duotone"]);const dd=ur(Cs),Yn=k({},Wf);Yn[he]=k(k(k(k({},{duotone:"fad"}),Yn[he]),Os.kit),Os["kit-duotone"]);const As=ur(Yn),Jn=k({},Bn);Jn[he]=k(k({},Jn[he]),Kf.kit);const Xn=ur(Jn),Kn=k({},rd);Kn[he]=k(k({},Kn[he]),Jf.kit),ur(Kn);const pd=jf,Ps="fa-layers-text",hd=qf,md=k({},Gf);ur(md);const gd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Zn=Uf,yd=[...Yf,...od],cr=Qe.FontAwesomeConfig||{};function vd(t){var e=ie.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function bd(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}ie&&typeof ie.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[r,n]=e;const i=bd(vd(r));i!=null&&(cr[n]=i)});const Ns={styleDefault:"solid",familyDefault:he,cssPrefix:ks,replacementClass:Is,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};cr.familyPrefix&&(cr.cssPrefix=cr.familyPrefix);const kt=k(k({},Ns),cr);kt.autoReplaceSvg||(kt.observeMutations=!1);const N={};Object.keys(Ns).forEach(t=>{Object.defineProperty(N,t,{enumerable:!0,set:function(e){kt[t]=e,lr.forEach(r=>r(N))},get:function(){return kt[t]}})}),Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){kt.cssPrefix=t,lr.forEach(e=>e(N))},get:function(){return kt.cssPrefix}}),Qe.FontAwesomeConfig=N;const lr=[];function Sd(t){return lr.push(t),()=>{lr.splice(lr.indexOf(t),1)}}const We=zn,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _d(t){if(!t||!Re)return;const e=ie.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const r=ie.head.childNodes;let n=null;for(let i=r.length-1;i>-1;i--){const a=r[i],s=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(n=a)}return ie.head.insertBefore(e,n),t}const Ed="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fr(){let t=12,e="";for(;t-- >0;)e+=Ed[Math.random()*62|0];return e}function It(t){const e=[];for(let r=(t||[]).length>>>0;r--;)e[r]=t[r];return e}function ei(t){return t.classList?It(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Rs(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wd(t){return Object.keys(t||{}).reduce((e,r)=>e+"".concat(r,'="').concat(Rs(t[r]),'" '),"").trim()}function Br(t){return Object.keys(t||{}).reduce((e,r)=>e+"".concat(r,": ").concat(t[r].trim(),";"),"")}function ti(t){return t.size!==Fe.size||t.x!==Fe.x||t.y!==Fe.y||t.rotate!==Fe.rotate||t.flipX||t.flipY}function Dd(t){let{transform:e,containerWidth:r,iconWidth:n}=t;const i={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(a," ").concat(s," ").concat(o)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:i,inner:u,path:c}}function Td(t){let{transform:e,width:r=zn,height:n=zn,startCentered:i=!1}=t,a="";return i&&_s?a+="translate(".concat(e.x/We-r/2,"em, ").concat(e.y/We-n/2,"em) "):i?a+="translate(calc(-50% + ".concat(e.x/We,"em), calc(-50% + ").concat(e.y/We,"em)) "):a+="translate(".concat(e.x/We,"em, ").concat(e.y/We,"em) "),a+="scale(".concat(e.size/We*(e.flipX?-1:1),", ").concat(e.size/We*(e.flipY?-1:1),") "),a+="rotate(".concat(e.rotate,"deg) "),a}var Od=`:root, :host {
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
}`;function Ms(){const t=ks,e=Is,r=N.cssPrefix,n=N.replacementClass;let i=Od;if(r!==t||n!==e){const a=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");i=i.replace(a,".".concat(r,"-")).replace(s,"--".concat(r,"-")).replace(o,".".concat(n))}return i}let Ls=!1;function ri(){N.autoAddCss&&!Ls&&(_d(Ms()),Ls=!0)}var xd={mixout(){return{dom:{css:Ms,insertCss:ri}}},hooks(){return{beforeDOMElementCreation(){ri()},beforeI2svg(){ri()}}}};const Le=Qe||{};Le[Me]||(Le[Me]={}),Le[Me].styles||(Le[Me].styles={}),Le[Me].hooks||(Le[Me].hooks={}),Le[Me].shims||(Le[Me].shims=[]);var $e=Le[Me];const js=[],qs=function(){ie.removeEventListener("DOMContentLoaded",qs),Gr=1,js.map(t=>t())};let Gr=!1;Re&&(Gr=(ie.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ie.readyState),Gr||ie.addEventListener("DOMContentLoaded",qs));function kd(t){Re&&(Gr?setTimeout(t,0):js.push(t))}function dr(t){const{tag:e,attributes:r={},children:n=[]}=t;return typeof t=="string"?Rs(t):"<".concat(e," ").concat(wd(r),">").concat(n.map(dr).join(""),"</").concat(e,">")}function Us(t,e,r){if(t&&t[e]&&t[e][r])return{prefix:e,iconName:r,icon:t[e][r]}}var ni=function(e,r,n,i){var a=Object.keys(e),s=a.length,o=r,u,c,l;for(n===void 0?(u=1,l=e[a[0]]):(u=0,l=n);u<s;u++)c=a[u],l=o(l,e[c],c,e);return l};function Id(t){const e=[];let r=0;const n=t.length;for(;r<n;){const i=t.charCodeAt(r++);if(i>=55296&&i<=56319&&r<n){const a=t.charCodeAt(r++);(a&64512)==56320?e.push(((i&1023)<<10)+(a&1023)+65536):(e.push(i),r--)}else e.push(i)}return e}function ii(t){const e=Id(t);return e.length===1?e[0].toString(16):null}function Fd(t,e){const r=t.length;let n=t.charCodeAt(e),i;return n>=55296&&n<=56319&&r>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(n-55296)*1024+i-56320+65536:n}function Vs(t){return Object.keys(t).reduce((e,r)=>{const n=t[r];return!!n.icon?e[n.iconName]=n.icon:e[r]=n,e},{})}function ai(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:n=!1}=r,i=Vs(e);typeof $e.hooks.addPack=="function"&&!n?$e.hooks.addPack(t,Vs(e)):$e.styles[t]=k(k({},$e.styles[t]||{}),i),t==="fas"&&ai("fa",e)}const{styles:pr,shims:$d}=$e,Bs=Object.keys(Xn),Cd=Bs.reduce((t,e)=>(t[e]=Object.keys(Xn[e]),t),{});let si=null,Gs={},zs={},Qs={},Ws={},Hs={};function Ad(t){return~yd.indexOf(t)}function Pd(t,e){const r=e.split("-"),n=r[0],i=r.slice(1).join("-");return n===t&&i!==""&&!Ad(i)?i:null}const Ys=()=>{const t=n=>ni(pr,(i,a,s)=>(i[s]=ni(a,n,{}),i),{});Gs=t((n,i,a)=>(i[3]&&(n[i[3]]=a),i[2]&&i[2].filter(o=>typeof o=="number").forEach(o=>{n[o.toString(16)]=a}),n)),zs=t((n,i,a)=>(n[a]=a,i[2]&&i[2].filter(o=>typeof o=="string").forEach(o=>{n[o]=a}),n)),Hs=t((n,i,a)=>{const s=i[2];return n[a]=a,s.forEach(o=>{n[o]=a}),n});const e="far"in pr||N.autoFetchSvg,r=ni($d,(n,i)=>{const a=i[0];let s=i[1];const o=i[2];return s==="far"&&!e&&(s="fas"),typeof a=="string"&&(n.names[a]={prefix:s,iconName:o}),typeof a=="number"&&(n.unicodes[a.toString(16)]={prefix:s,iconName:o}),n},{names:{},unicodes:{}});Qs=r.names,Ws=r.unicodes,si=zr(N.styleDefault,{family:N.familyDefault})};Sd(t=>{si=zr(t.styleDefault,{family:N.familyDefault})}),Ys();function oi(t,e){return(Gs[t]||{})[e]}function Nd(t,e){return(zs[t]||{})[e]}function ht(t,e){return(Hs[t]||{})[e]}function Js(t){return Qs[t]||{prefix:null,iconName:null}}function Rd(t){const e=Ws[t],r=oi("fas",t);return e||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function He(){return si}const Xs=()=>({prefix:null,iconName:null,rest:[]});function Md(t){let e=he;const r=Bs.reduce((n,i)=>(n[i]="".concat(N.cssPrefix,"-").concat(i),n),{});return Ds.forEach(n=>{(t.includes(r[n])||t.some(i=>Cd[n].includes(i)))&&(e=n)}),e}function zr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:r=he}=e,n=dd[r][t];if(r===Ur&&!t)return"fad";const i=As[r][t]||As[r][n],a=t in $e.styles?t:null;return i||a||null}function Ld(t){let e=[],r=null;return t.forEach(n=>{const i=Pd(N.cssPrefix,n);i?r=i:n&&e.push(n)}),{iconName:r,rest:e}}function Ks(t){return t.sort().filter((e,r,n)=>n.indexOf(e)===r)}function Qr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:r=!1}=e;let n=null;const i=Gn.concat(ed),a=Ks(t.filter(f=>i.includes(f))),s=Ks(t.filter(f=>!Gn.includes(f))),o=a.filter(f=>(n=f,!ws.includes(f))),[u=null]=o,c=Md(a),l=k(k({},Ld(s)),{},{prefix:zr(u,{family:c})});return k(k(k({},l),Vd({values:t,family:c,styles:pr,config:N,canonical:l,givenPrefix:n})),jd(r,n,l))}function jd(t,e,r){let{prefix:n,iconName:i}=r;if(t||!n||!i)return{prefix:n,iconName:i};const a=e==="fa"?Js(i):{},s=ht(n,i);return i=a.iconName||s||i,n=a.prefix||n,n==="far"&&!pr.far&&pr.fas&&!N.autoFetchSvg&&(n="fas"),{prefix:n,iconName:i}}const qd=Ds.filter(t=>t!==he||t!==Ur),Ud=Object.keys(Bn).filter(t=>t!==he).map(t=>Object.keys(Bn[t])).flat();function Vd(t){const{values:e,family:r,canonical:n,givenPrefix:i="",styles:a={},config:s={}}=t,o=r===Ur,u=e.includes("fa-duotone")||e.includes("fad"),c=s.familyDefault==="duotone",l=n.prefix==="fad"||n.prefix==="fa-duotone";if(!o&&(u||c||l)&&(n.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(n.prefix="fab"),!n.prefix&&qd.includes(r)&&(Object.keys(a).find(d=>Ud.includes(d))||s.autoFetchSvg)){const d=Qf.get(r).defaultShortPrefixId;n.prefix=d,n.iconName=ht(n.prefix,n.iconName)||n.iconName}return(n.prefix==="fa"||i==="fa")&&(n.prefix=He()||"fas"),n}class Bd{constructor(){this.definitions={}}add(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];const i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(a=>{this.definitions[a]=k(k({},this.definitions[a]||{}),i[a]),ai(a,i[a]);const s=Xn[he][a];s&&ai(s,i[a]),Ys()})}reset(){this.definitions={}}_pullDefinitions(e,r){const n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(i=>{const{prefix:a,iconName:s,icon:o}=n[i],u=o[2];e[a]||(e[a]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[a][c]=o)}),e[a][s]=o}),e}}let Zs=[],Ft={};const $t={},Gd=Object.keys($t);function zd(t,e){let{mixoutsTo:r}=e;return Zs=t,Ft={},Object.keys($t).forEach(n=>{Gd.indexOf(n)===-1&&delete $t[n]}),Zs.forEach(n=>{const i=n.mixout?n.mixout():{};if(Object.keys(i).forEach(a=>{typeof i[a]=="function"&&(r[a]=i[a]),typeof i[a]=="object"&&Object.keys(i[a]).forEach(s=>{r[a]||(r[a]={}),r[a][s]=i[a][s]})}),n.hooks){const a=n.hooks();Object.keys(a).forEach(s=>{Ft[s]||(Ft[s]=[]),Ft[s].push(a[s])})}n.provides&&n.provides($t)}),r}function ui(t,e){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];return(Ft[t]||[]).forEach(s=>{e=s.apply(null,[e,...n])}),e}function mt(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];(Ft[t]||[]).forEach(a=>{a.apply(null,r)})}function Ye(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return $t[t]?$t[t].apply(null,e):void 0}function ci(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const r=t.prefix||He();if(e)return e=ht(r,e)||e,Us(eo.definitions,r,e)||Us($e.styles,r,e)}const eo=new Bd,Ee={noAuto:()=>{N.autoReplaceSvg=!1,N.observeMutations=!1,mt("noAuto")},config:N,dom:{i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Re?(mt("beforeI2svg",t),Ye("pseudoElements2svg",t),Ye("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,kd(()=>{Qd({autoReplaceSvgRoot:e}),mt("watch",t)})}},parse:{icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ht(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=zr(t[0]);return{prefix:r,iconName:ht(r,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(pd))){const e=Qr(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||He(),iconName:ht(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=He();return{prefix:e,iconName:ht(e,t)||t}}}},library:eo,findIconDefinition:ci,toHtml:dr},Qd=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=ie}=t;(Object.keys($e.styles).length>0||N.autoFetchSvg)&&Re&&N.autoReplaceSvg&&Ee.dom.i2svg({node:e})};function Wr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(r=>dr(r))}}),Object.defineProperty(t,"node",{get:function(){if(!Re)return;const r=ie.createElement("div");return r.innerHTML=t.html,r.children}}),t}function Wd(t){let{children:e,main:r,mask:n,attributes:i,styles:a,transform:s}=t;if(ti(s)&&r.found&&!n.found){const{width:o,height:u}=r,c={x:o/u/2,y:.5};i.style=Br(k(k({},a),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Hd(t){let{prefix:e,iconName:r,children:n,attributes:i,symbol:a}=t;const s=a===!0?"".concat(e,"-").concat(N.cssPrefix,"-").concat(r):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},i),{},{id:s}),children:n}]}]}function li(t){const{icons:{main:e,mask:r},prefix:n,iconName:i,transform:a,symbol:s,title:o,maskId:u,titleId:c,extra:l,watchable:f=!1}=t,{width:d,height:p}=r.found?r:e,y=Xf.includes(n),m=[N.replacementClass,i?"".concat(N.cssPrefix,"-").concat(i):""].filter(D=>l.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(l.classes).join(" ");let v={children:[],attributes:k(k({},l.attributes),{},{"data-prefix":n,"data-icon":i,class:m,role:l.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(p)})};const h=y&&!~l.classes.indexOf("fa-fw")?{width:"".concat(d/p*16*.0625,"em")}:{};f&&(v.attributes[pt]=""),o&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||fr())},children:[o]}),delete v.attributes.title);const b=k(k({},v),{},{prefix:n,iconName:i,main:e,mask:r,maskId:u,transform:a,symbol:s,styles:k(k({},h),l.styles)}),{children:S,attributes:w}=r.found&&e.found?Ye("generateAbstractMask",b)||{children:[],attributes:{}}:Ye("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=S,b.attributes=w,s?Hd(b):Wd(b)}function to(t){const{content:e,width:r,height:n,transform:i,title:a,extra:s,watchable:o=!1}=t,u=k(k(k({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")});o&&(u[pt]="");const c=k({},s.styles);ti(i)&&(c.transform=Td({transform:i,startCentered:!0,width:r,height:n}),c["-webkit-transform"]=c.transform);const l=Br(c);l.length>0&&(u.style=l);const f=[];return f.push({tag:"span",attributes:u,children:[e]}),a&&f.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),f}function Yd(t){const{content:e,title:r,extra:n}=t,i=k(k(k({},n.attributes),r?{title:r}:{}),{},{class:n.classes.join(" ")}),a=Br(n.styles);a.length>0&&(i.style=a);const s=[];return s.push({tag:"span",attributes:i,children:[e]}),r&&s.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),s}const{styles:fi}=$e;function di(t){const e=t[0],r=t[1],[n]=t.slice(4);let i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(Zn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Zn.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Zn.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:r,icon:i}}const Jd={found:!1,width:512,height:512};function Xd(t,e){!$s&&!N.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function pi(t,e){let r=e;return e==="fa"&&N.styleDefault!==null&&(e=He()),new Promise((n,i)=>{if(r==="fa"){const a=Js(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&fi[e]&&fi[e][t]){const a=fi[e][t];return n(di(a))}Xd(t,e),n(k(k({},Jd),{},{icon:N.showMissingIcons&&t?Ye("missingIconAbstract")||{}:{}}))})}const ro=()=>{},hi=N.measurePerformance&&qr&&qr.mark&&qr.measure?qr:{mark:ro,measure:ro},hr='FA "6.7.2"',Kd=t=>(hi.mark("".concat(hr," ").concat(t," begins")),()=>no(t)),no=t=>{hi.mark("".concat(hr," ").concat(t," ends")),hi.measure("".concat(hr," ").concat(t),"".concat(hr," ").concat(t," begins"),"".concat(hr," ").concat(t," ends"))};var mi={begin:Kd,end:no};const Hr=()=>{};function io(t){return typeof(t.getAttribute?t.getAttribute(pt):null)=="string"}function Zd(t){const e=t.getAttribute?t.getAttribute(Wn):null,r=t.getAttribute?t.getAttribute(Hn):null;return e&&r}function ep(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(N.replacementClass)}function tp(){return N.autoReplaceSvg===!0?Yr.replace:Yr[N.autoReplaceSvg]||Yr.replace}function rp(t){return ie.createElementNS("http://www.w3.org/2000/svg",t)}function np(t){return ie.createElement(t)}function ao(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:r=t.tag==="svg"?rp:np}=e;if(typeof t=="string")return ie.createTextNode(t);const n=r(t.tag);return Object.keys(t.attributes||[]).forEach(function(a){n.setAttribute(a,t.attributes[a])}),(t.children||[]).forEach(function(a){n.appendChild(ao(a,{ceFn:r}))}),n}function ip(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Yr={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(r=>{e.parentNode.insertBefore(ao(r),e)}),e.getAttribute(pt)===null&&N.keepOriginalSource){let r=ie.createComment(ip(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(t){const e=t[0],r=t[1];if(~ei(e).indexOf(N.replacementClass))return Yr.replace(t);const n=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){const a=r[0].attributes.class.split(" ").reduce((s,o)=>(o===N.replacementClass||o.match(n)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",a.toNode.join(" "))}const i=r.map(a=>dr(a)).join(`
`);e.setAttribute(pt,""),e.innerHTML=i}};function so(t){t()}function oo(t,e){const r=typeof e=="function"?e:Hr;if(t.length===0)r();else{let n=so;N.mutateApproach===ld&&(n=Qe.requestAnimationFrame||so),n(()=>{const i=tp(),a=mi.begin("mutate");t.map(i),a(),r()})}}let gi=!1;function uo(){gi=!0}function yi(){gi=!1}let Jr=null;function co(t){if(!Ss||!N.observeMutations)return;const{treeCallback:e=Hr,nodeCallback:r=Hr,pseudoElementsCallback:n=Hr,observeMutationsRoot:i=ie}=t;Jr=new Ss(a=>{if(gi)return;const s=He();It(a).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!io(o.addedNodes[0])&&(N.searchPseudoElements&&n(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&N.searchPseudoElements&&n(o.target.parentNode),o.type==="attributes"&&io(o.target)&&~gd.indexOf(o.attributeName))if(o.attributeName==="class"&&Zd(o.target)){const{prefix:u,iconName:c}=Qr(ei(o.target));o.target.setAttribute(Wn,u||s),c&&o.target.setAttribute(Hn,c)}else ep(o.target)&&r(o.target)})}),Re&&Jr.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ap(){Jr&&Jr.disconnect()}function sp(t){const e=t.getAttribute("style");let r=[];return e&&(r=e.split(";").reduce((n,i)=>{const a=i.split(":"),s=a[0],o=a.slice(1);return s&&o.length>0&&(n[s]=o.join(":").trim()),n},{})),r}function op(t){const e=t.getAttribute("data-prefix"),r=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"";let i=Qr(ei(t));return i.prefix||(i.prefix=He()),e&&r&&(i.prefix=e,i.iconName=r),i.iconName&&i.prefix||(i.prefix&&n.length>0&&(i.iconName=Nd(i.prefix,t.innerText)||oi(i.prefix,ii(t.innerText))),!i.iconName&&N.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function up(t){const e=It(t.attributes).reduce((i,a)=>(i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i),{}),r=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return N.autoA11y&&(r?e["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(n||fr()):(e["aria-hidden"]="true",e.focusable="false")),e}function cp(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function lo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:r,prefix:n,rest:i}=op(t),a=up(t),s=ui("parseNodeAttributes",{},t);let o=e.styleParser?sp(t):[];return k({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:n,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:o,attributes:a}},s)}const{styles:lp}=$e;function fo(t){const e=N.autoReplaceSvg==="nest"?lo(t,{styleParser:!1}):lo(t);return~e.extra.classes.indexOf(Ps)?Ye("generateLayersText",t,e):Ye("generateSvgReplacementMutation",t,e)}function fp(){return[...Hf,...Gn]}function po(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Re)return Promise.resolve();const r=ie.documentElement.classList,n=l=>r.add("".concat(Fs,"-").concat(l)),i=l=>r.remove("".concat(Fs,"-").concat(l)),a=N.autoFetchSvg?fp():ws.concat(Object.keys(lp));a.includes("fa")||a.push("fa");const s=[".".concat(Ps,":not([").concat(pt,"])")].concat(a.map(l=>".".concat(l,":not([").concat(pt,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=It(t.querySelectorAll(s))}catch{}if(o.length>0)n("pending"),i("complete");else return Promise.resolve();const u=mi.begin("onTree"),c=o.reduce((l,f)=>{try{const d=fo(f);d&&l.push(d)}catch(d){$s||d.name==="MissingIcon"&&console.error(d)}return l},[]);return new Promise((l,f)=>{Promise.all(c).then(d=>{oo(d,()=>{n("active"),n("complete"),i("pending"),typeof e=="function"&&e(),u(),l()})}).catch(d=>{u(),f(d)})})}function dp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fo(t).then(r=>{r&&oo([r],e)})}function pp(t){return function(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=(e||{}).icon?e:ci(e||{});let{mask:i}=r;return i&&(i=(i||{}).icon?i:ci(i||{})),t(n,k(k({},r),{},{mask:i}))}}const hp=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:r=Fe,symbol:n=!1,mask:i=null,maskId:a=null,title:s=null,titleId:o=null,classes:u=[],attributes:c={},styles:l={}}=e;if(!t)return;const{prefix:f,iconName:d,icon:p}=t;return Wr(k({type:"icon"},t),()=>(mt("beforeDOMElementCreation",{iconDefinition:t,params:e}),N.autoA11y&&(s?c["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(o||fr()):(c["aria-hidden"]="true",c.focusable="false")),li({icons:{main:di(p),mask:i?di(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:k(k({},Fe),r),symbol:n,title:s,maskId:a,titleId:o,extra:{attributes:c,styles:l,classes:u}})))};var mp={mixout(){return{icon:pp(hp)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=po,t.nodeCallback=dp,t}}},provides(t){t.i2svg=function(e){const{node:r=ie,callback:n=()=>{}}=e;return po(r,n)},t.generateSvgReplacementMutation=function(e,r){const{iconName:n,title:i,titleId:a,prefix:s,transform:o,symbol:u,mask:c,maskId:l,extra:f}=r;return new Promise((d,p)=>{Promise.all([pi(n,s),c.iconName?pi(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[m,v]=y;d([e,li({icons:{main:m,mask:v},prefix:s,iconName:n,transform:o,symbol:u,maskId:l,title:i,titleId:a,extra:f,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(e){let{children:r,attributes:n,main:i,transform:a,styles:s}=e;const o=Br(s);o.length>0&&(n.style=o);let u;return ti(a)&&(u=Ye("generateAbstractTransformGrouping",{main:i,transform:a,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:n}}}},gp={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:r=[]}=e;return Wr({type:"layer"},()=>{mt("beforeDOMElementCreation",{assembler:t,params:e});let n=[];return t(i=>{Array.isArray(i)?i.map(a=>{n=n.concat(a.abstract)}):n=n.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers"),...r].join(" ")},children:n}]})}}}},yp={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:r=null,classes:n=[],attributes:i={},styles:a={}}=e;return Wr({type:"counter",content:t},()=>(mt("beforeDOMElementCreation",{content:t,params:e}),Yd({content:t.toString(),title:r,extra:{attributes:i,styles:a,classes:["".concat(N.cssPrefix,"-layers-counter"),...n]}})))}}}},vp={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:r=Fe,title:n=null,classes:i=[],attributes:a={},styles:s={}}=e;return Wr({type:"text",content:t},()=>(mt("beforeDOMElementCreation",{content:t,params:e}),to({content:t,transform:k(k({},Fe),r),title:n,extra:{attributes:a,styles:s,classes:["".concat(N.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,r){const{title:n,transform:i,extra:a}=r;let s=null,o=null;if(_s){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/u,o=c.height/u}return N.autoA11y&&!n&&(a.attributes["aria-hidden"]="true"),Promise.resolve([e,to({content:e.innerHTML,width:s,height:o,transform:i,title:n,extra:a,watchable:!0})])}}};const bp=new RegExp('"',"ug"),ho=[1105920,1112319],mo=k(k(k(k({},{FontAwesome:{normal:"fas",400:"fas"}}),zf),ud),td),vi=Object.keys(mo).reduce((t,e)=>(t[e.toLowerCase()]=mo[e],t),{}),Sp=Object.keys(vi).reduce((t,e)=>{const r=vi[e];return t[e]=r[900]||[...Object.entries(r)][0][1],t},{});function _p(t){const e=t.replace(bp,""),r=Fd(e,0),n=r>=ho[0]&&r<=ho[1],i=e.length===2?e[0]===e[1]:!1;return{value:ii(i?e[0]:e),isSecondary:n||i}}function Ep(t,e){const r=t.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(e),i=isNaN(n)?"normal":n;return(vi[r]||{})[i]||Sp[r]}function go(t,e){const r="".concat(cd).concat(e.replace(":","-"));return new Promise((n,i)=>{if(t.getAttribute(r)!==null)return n();const s=It(t.children).filter(d=>d.getAttribute(Qn)===e)[0],o=Qe.getComputedStyle(t,e),u=o.getPropertyValue("font-family"),c=u.match(hd),l=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(s&&!c)return t.removeChild(s),n();if(c&&f!=="none"&&f!==""){const d=o.getPropertyValue("content");let p=Ep(u,l);const{value:y,isSecondary:m}=_p(d),v=c[0].startsWith("FontAwesome");let h=oi(p,y),b=h;if(v){const S=Rd(y);S.iconName&&S.prefix&&(h=S.iconName,p=S.prefix)}if(h&&!m&&(!s||s.getAttribute(Wn)!==p||s.getAttribute(Hn)!==b)){t.setAttribute(r,b),s&&t.removeChild(s);const S=cp(),{extra:w}=S;w.attributes[Qn]=e,pi(h,p).then(D=>{const x=li(k(k({},S),{},{icons:{main:D,mask:Xs()},prefix:p,iconName:b,extra:w,watchable:!0})),I=ie.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(I,t.firstChild):t.appendChild(I),I.outerHTML=x.map(A=>dr(A)).join(`
`),t.removeAttribute(r),n()}).catch(i)}else n()}else n()})}function wp(t){return Promise.all([go(t,"::before"),go(t,"::after")])}function Dp(t){return t.parentNode!==document.head&&!~fd.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Qn)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function yo(t){if(Re)return new Promise((e,r)=>{const n=It(t.querySelectorAll("*")).filter(Dp).map(wp),i=mi.begin("searchPseudoElements");uo(),Promise.all(n).then(()=>{i(),yi(),e()}).catch(()=>{i(),yi(),r()})})}var Tp={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=yo,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:r=ie}=e;N.searchPseudoElements&&yo(r)}}};let vo=!1;var Op={mixout(){return{dom:{unwatch(){uo(),vo=!0}}}},hooks(){return{bootstrap(){co(ui("mutationObserverCallbacks",{}))},noAuto(){ap()},watch(t){const{observeMutationsRoot:e}=t;vo?yi():co(ui("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const bo=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((r,n)=>{const i=n.toLowerCase().split("-"),a=i[0];let s=i.slice(1).join("-");if(a&&s==="h")return r.flipX=!0,r;if(a&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},e)};var xp={mixout(){return{parse:{transform:t=>bo(t)}}},hooks(){return{parseNodeAttributes(t,e){const r=e.getAttribute("data-fa-transform");return r&&(t.transform=bo(r)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:r,transform:n,containerWidth:i,iconWidth:a}=e;const s={transform:"translate(".concat(i/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(o," ").concat(u," ").concat(c)},f={transform:"translate(".concat(a/2*-1," -256)")},d={outer:s,inner:l,path:f};return{tag:"g",attributes:k({},d.outer),children:[{tag:"g",attributes:k({},d.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:k(k({},r.icon.attributes),d.path)}]}]}}}};const bi={x:0,y:0,width:"100%",height:"100%"};function So(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function kp(t){return t.tag==="g"?t.children:[t]}var Ip={hooks(){return{parseNodeAttributes(t,e){const r=e.getAttribute("data-fa-mask"),n=r?Qr(r.split(" ").map(i=>i.trim())):Xs();return n.prefix||(n.prefix=He()),t.mask=n,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:r,attributes:n,main:i,mask:a,maskId:s,transform:o}=e;const{width:u,icon:c}=i,{width:l,icon:f}=a,d=Dd({transform:o,containerWidth:l,iconWidth:u}),p={tag:"rect",attributes:k(k({},bi),{},{fill:"white"})},y=c.children?{children:c.children.map(So)}:{},m={tag:"g",attributes:k({},d.inner),children:[So(k({tag:c.tag,attributes:k(k({},c.attributes),d.path)},y))]},v={tag:"g",attributes:k({},d.outer),children:[m]},h="mask-".concat(s||fr()),b="clip-".concat(s||fr()),S={tag:"mask",attributes:k(k({},bi),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:kp(f)},S]};return r.push(w,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(h,")")},bi)}),{children:r,attributes:n}}}},Fp={provides(t){let e=!1;Qe.matchMedia&&(e=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:k(k({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const a=k(k({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:k(k({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:k(k({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:k(k({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:k(k({},a),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:k(k({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},$p={hooks(){return{parseNodeAttributes(t,e){const r=e.getAttribute("data-fa-symbol"),n=r===null?!1:r===""?!0:r;return t.symbol=n,t}}}},Cp=[xd,mp,gp,yp,vp,Tp,Op,xp,Ip,Fp,$p];zd(Cp,{mixoutsTo:Ee}),Ee.noAuto,Ee.config,Ee.library,Ee.dom;const Si=Ee.parse;Ee.findIconDefinition,Ee.toHtml;const Ap=Ee.icon;Ee.layer,Ee.text,Ee.counter;function Xr(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _i={exports:{}},Ei,_o;function Pp(){if(_o)return Ei;_o=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ei=t,Ei}var wi,Eo;function Np(){if(Eo)return wi;Eo=1;var t=Pp();function e(){}function r(){}return r.resetWarningCache=e,wi=function(){function n(s,o,u,c,l,f){if(f!==t){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}n.isRequired=n;function i(){return n}var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:i,element:n,elementType:n,instanceOf:i,node:n,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:e};return a.PropTypes=a,a},wi}var wo;function Rp(){return wo||(wo=1,_i.exports=Np()()),_i.exports}var Mp=Rp();const B=Xr(Mp);var Di={exports:{}},z={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ti,Do;function Lp(){if(Do)return Ti;Do=1;var t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function n(a){if(a==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}function i(){try{if(!Object.assign)return!1;var a=new String("abc");if(a[5]="de",Object.getOwnPropertyNames(a)[0]==="5")return!1;for(var s={},o=0;o<10;o++)s["_"+String.fromCharCode(o)]=o;var u=Object.getOwnPropertyNames(s).map(function(l){return s[l]});if(u.join("")!=="0123456789")return!1;var c={};return"abcdefghijklmnopqrst".split("").forEach(function(l){c[l]=l}),Object.keys(Object.assign({},c)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Ti=i()?Object.assign:function(a,s){for(var o,u=n(a),c,l=1;l<arguments.length;l++){o=Object(arguments[l]);for(var f in o)e.call(o,f)&&(u[f]=o[f]);if(t){c=t(o);for(var d=0;d<c.length;d++)r.call(o,c[d])&&(u[c[d]]=o[c[d]])}}return u},Ti}/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var To;function jp(){if(To)return z;To=1;var t=Lp(),e=60103,r=60106;z.Fragment=60107,z.StrictMode=60108,z.Profiler=60114;var n=60109,i=60110,a=60112;z.Suspense=60113;var s=60115,o=60116;if(typeof Symbol=="function"&&Symbol.for){var u=Symbol.for;e=u("react.element"),r=u("react.portal"),z.Fragment=u("react.fragment"),z.StrictMode=u("react.strict_mode"),z.Profiler=u("react.profiler"),n=u("react.provider"),i=u("react.context"),a=u("react.forward_ref"),z.Suspense=u("react.suspense"),s=u("react.memo"),o=u("react.lazy")}var c=typeof Symbol=="function"&&Symbol.iterator;function l(_){return _===null||typeof _!="object"?null:(_=c&&_[c]||_["@@iterator"],typeof _=="function"?_:null)}function f(_){for(var O="https://reactjs.org/docs/error-decoder.html?invariant="+_,$=1;$<arguments.length;$++)O+="&args[]="+encodeURIComponent(arguments[$]);return"Minified React error #"+_+"; visit "+O+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p={};function y(_,O,$){this.props=_,this.context=O,this.refs=p,this.updater=$||d}y.prototype.isReactComponent={},y.prototype.setState=function(_,O){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error(f(85));this.updater.enqueueSetState(this,_,O,"setState")},y.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function m(){}m.prototype=y.prototype;function v(_,O,$){this.props=_,this.context=O,this.refs=p,this.updater=$||d}var h=v.prototype=new m;h.constructor=v,t(h,y.prototype),h.isPureReactComponent=!0;var b={current:null},S=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function D(_,O,$){var V,R={},G=null,X=null;if(O!=null)for(V in O.ref!==void 0&&(X=O.ref),O.key!==void 0&&(G=""+O.key),O)S.call(O,V)&&!w.hasOwnProperty(V)&&(R[V]=O[V]);var Z=arguments.length-2;if(Z===1)R.children=$;else if(1<Z){for(var ee=Array(Z),te=0;te<Z;te++)ee[te]=arguments[te+2];R.children=ee}if(_&&_.defaultProps)for(V in Z=_.defaultProps,Z)R[V]===void 0&&(R[V]=Z[V]);return{$$typeof:e,type:_,key:G,ref:X,props:R,_owner:b.current}}function x(_,O){return{$$typeof:e,type:_.type,key:O,ref:_.ref,props:_.props,_owner:_._owner}}function I(_){return typeof _=="object"&&_!==null&&_.$$typeof===e}function A(_){var O={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function($){return O[$]})}var M=/\/+/g;function U(_,O){return typeof _=="object"&&_!==null&&_.key!=null?A(""+_.key):O.toString(36)}function L(_,O,$,V,R){var G=typeof _;(G==="undefined"||G==="boolean")&&(_=null);var X=!1;if(_===null)X=!0;else switch(G){case"string":case"number":X=!0;break;case"object":switch(_.$$typeof){case e:case r:X=!0}}if(X)return X=_,R=R(X),_=V===""?"."+U(X,0):V,Array.isArray(R)?($="",_!=null&&($=_.replace(M,"$&/")+"/"),L(R,O,$,"",function(te){return te})):R!=null&&(I(R)&&(R=x(R,$+(!R.key||X&&X.key===R.key?"":(""+R.key).replace(M,"$&/")+"/")+_)),O.push(R)),1;if(X=0,V=V===""?".":V+":",Array.isArray(_))for(var Z=0;Z<_.length;Z++){G=_[Z];var ee=V+U(G,Z);X+=L(G,O,$,ee,R)}else if(ee=l(_),typeof ee=="function")for(_=ee.call(_),Z=0;!(G=_.next()).done;)G=G.value,ee=V+U(G,Z++),X+=L(G,O,$,ee,R);else if(G==="object")throw O=""+_,Error(f(31,O==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":O));return X}function se(_,O,$){if(_==null)return _;var V=[],R=0;return L(_,V,"","",function(G){return O.call($,G,R++)}),V}function K(_){if(_._status===-1){var O=_._result;O=O(),_._status=0,_._result=O,O.then(function($){_._status===0&&($=$.default,_._status=1,_._result=$)},function($){_._status===0&&(_._status=2,_._result=$)})}if(_._status===1)return _._result;throw _._result}var ge={current:null};function j(){var _=ge.current;if(_===null)throw Error(f(321));return _}var J={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:t};return z.Children={map:se,forEach:function(_,O,$){se(_,function(){O.apply(this,arguments)},$)},count:function(_){var O=0;return se(_,function(){O++}),O},toArray:function(_){return se(_,function(O){return O})||[]},only:function(_){if(!I(_))throw Error(f(143));return _}},z.Component=y,z.PureComponent=v,z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,z.cloneElement=function(_,O,$){if(_==null)throw Error(f(267,_));var V=t({},_.props),R=_.key,G=_.ref,X=_._owner;if(O!=null){if(O.ref!==void 0&&(G=O.ref,X=b.current),O.key!==void 0&&(R=""+O.key),_.type&&_.type.defaultProps)var Z=_.type.defaultProps;for(ee in O)S.call(O,ee)&&!w.hasOwnProperty(ee)&&(V[ee]=O[ee]===void 0&&Z!==void 0?Z[ee]:O[ee])}var ee=arguments.length-2;if(ee===1)V.children=$;else if(1<ee){Z=Array(ee);for(var te=0;te<ee;te++)Z[te]=arguments[te+2];V.children=Z}return{$$typeof:e,type:_.type,key:R,ref:G,props:V,_owner:X}},z.createContext=function(_,O){return O===void 0&&(O=null),_={$$typeof:i,_calculateChangedBits:O,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider={$$typeof:n,_context:_},_.Consumer=_},z.createElement=D,z.createFactory=function(_){var O=D.bind(null,_);return O.type=_,O},z.createRef=function(){return{current:null}},z.forwardRef=function(_){return{$$typeof:a,render:_}},z.isValidElement=I,z.lazy=function(_){return{$$typeof:o,_payload:{_status:-1,_result:_},_init:K}},z.memo=function(_,O){return{$$typeof:s,type:_,compare:O===void 0?null:O}},z.useCallback=function(_,O){return j().useCallback(_,O)},z.useContext=function(_,O){return j().useContext(_,O)},z.useDebugValue=function(){},z.useEffect=function(_,O){return j().useEffect(_,O)},z.useImperativeHandle=function(_,O,$){return j().useImperativeHandle(_,O,$)},z.useLayoutEffect=function(_,O){return j().useLayoutEffect(_,O)},z.useMemo=function(_,O){return j().useMemo(_,O)},z.useReducer=function(_,O,$){return j().useReducer(_,O,$)},z.useRef=function(_){return j().useRef(_)},z.useState=function(_){return j().useState(_)},z.version="17.0.2",z}var Oo;function Oi(){return Oo||(Oo=1,Di.exports=jp()),Di.exports}var qp=Oi();const xi=Xr(qp);function ki(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function Up(t){if(Array.isArray(t))return t}function Vp(t){if(Array.isArray(t))return ki(t)}function Je(t,e,r){return(e=Jp(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Bp(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Gp(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n,i,a,s,o=[],u=!0,c=!1;try{if(a=(r=r.call(t)).next,e!==0)for(;!(u=(n=a.call(r)).done)&&(o.push(n.value),o.length!==e);u=!0);}catch(l){c=!0,i=l}finally{try{if(!u&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(c)throw i}}return o}}function zp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xo(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function Ce(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?xo(Object(r),!0).forEach(function(n){Je(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):xo(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Wp(t,e){if(t==null)return{};var r,n,i=Hp(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Hp(t,e){if(t==null)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.indexOf(n)!==-1)continue;r[n]=t[n]}return r}function ko(t,e){return Up(t)||Gp(t,e)||Io(t,e)||zp()}function Ii(t){return Vp(t)||Bp(t)||Io(t)||Qp()}function Yp(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Jp(t){var e=Yp(t,"string");return typeof e=="symbol"?e:e+""}function Kr(t){"@babel/helpers - typeof";return Kr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kr(t)}function Io(t,e){if(t){if(typeof t=="string")return ki(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ki(t,e):void 0}}var Xp="7.0.0-alpha1",Fi;try{var Kp=require("@fortawesome/fontawesome-svg-core/package.json");Fi=Kp.version}catch{Fi="sss"}function Zp(t){var e=t.beat,r=t.fade,n=t.beatFade,i=t.bounce,a=t.shake,s=t.flash,o=t.spin,u=t.spinPulse,c=t.spinReverse,l=t.pulse,f=t.fixedWidth,d=t.inverse,p=t.border,y=t.listItem,m=t.flip,v=t.size,h=t.rotation,b=t.pull,S=t.swapOpacity,w=t.rotateBy,D=t.widthAuto,x=eh(Fi,Xp),I=Je(Je(Je(Je(Je(Je({"fa-beat":e,"fa-fade":r,"fa-beat-fade":n,"fa-bounce":i,"fa-shake":a,"fa-flash":s,"fa-spin":o,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":l,"fa-fw":f,"fa-inverse":d,"fa-border":p,"fa-li":y,"fa-flip":m===!0,"fa-flip-horizontal":m==="horizontal"||m==="both","fa-flip-vertical":m==="vertical"||m==="both"},"fa-".concat(v),typeof v<"u"&&v!==null),"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),"fa-pull-".concat(b),typeof b<"u"&&b!==null),"fa-swap-opacity",S),"fa-rotate-by",x&&w),"fa-width-auto",x&&D);return Object.keys(I).map(function(A){return I[A]?A:null}).filter(function(A){return A})}function eh(t,e){for(var r=t.split("-"),n=ko(r,2),i=n[0],a=n[1],s=e.split("-"),o=ko(s,2),u=o[0],c=o[1],l=i.split("."),f=u.split("."),d=0;d<Math.max(l.length,f.length);d++){var p=l[d]||"0",y=f[d]||"0",m=parseInt(p,10),v=parseInt(y,10);if(m!==v)return m>v}for(var h=0;h<Math.max(l.length,f.length);h++){var b=l[h]||"0",S=f[h]||"0";if(b!==S&&b.length!==S.length)return b.length<S.length}return!(a&&!c)}function th(t){return t=t-0,t===t}function Fo(t){return th(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,r){return r?r.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var rh=["style"];function nh(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ih(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,r){var n=r.indexOf(":"),i=Fo(r.slice(0,n)),a=r.slice(n+1).trim();return i.startsWith("webkit")?e[nh(i)]=a:e[i]=a,e},{})}function $o(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var n=(e.children||[]).map(function(u){return $o(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var l=e.attributes[c];switch(c){case"class":u.attrs.className=l,delete e.attributes.class;break;case"style":u.attrs.style=ih(l);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=l:u.attrs[Fo(c)]=l}return u},{attrs:{}}),a=r.style,s=a===void 0?{}:a,o=Wp(r,rh);return i.attrs.style=Ce(Ce({},i.attrs.style),s),t.apply(void 0,[e.tag,Ce(Ce({},i.attrs),o)].concat(Ii(n)))}var Co=!1;try{Co=!0}catch{}function ah(){if(!Co&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ao(t){if(t&&Kr(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Si.icon)return Si.icon(t);if(t===null)return null;if(t&&Kr(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function $i(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Je({},t,e):{}}var Po={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},Zr=xi.forwardRef(function(t,e){var r=Ce(Ce({},Po),t),n=r.icon,i=r.mask,a=r.symbol,s=r.className,o=r.title,u=r.titleId,c=r.maskId,l=Ao(n),f=$i("classes",[].concat(Ii(Zp(r)),Ii((s||"").split(" ")))),d=$i("transform",typeof r.transform=="string"?Si.transform(r.transform):r.transform),p=$i("mask",Ao(i)),y=Ap(l,Ce(Ce(Ce(Ce({},f),d),p),{},{symbol:a,title:o,titleId:u,maskId:c}));if(!y)return ah("Could not find icon",l),null;var m=y.abstract,v={ref:e};return Object.keys(r).forEach(function(h){Po.hasOwnProperty(h)||(v[h]=r[h])}),sh(m[0],v)});Zr.displayName="FontAwesomeIcon",Zr.propTypes={beat:B.bool,border:B.bool,beatFade:B.bool,bounce:B.bool,className:B.string,fade:B.bool,flash:B.bool,mask:B.oneOfType([B.object,B.array,B.string]),maskId:B.string,fixedWidth:B.bool,inverse:B.bool,flip:B.oneOf([!0,!1,"horizontal","vertical","both"]),icon:B.oneOfType([B.object,B.array,B.string]),listItem:B.bool,pull:B.oneOf(["right","left"]),pulse:B.bool,rotation:B.oneOf([0,90,180,270]),rotateBy:B.bool,shake:B.bool,size:B.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:B.bool,spinPulse:B.bool,spinReverse:B.bool,symbol:B.oneOfType([B.bool,B.string]),title:B.string,titleId:B.string,transform:B.oneOfType([B.string,B.object]),swapOpacity:B.bool,widthAuto:B.bool};var sh=$o.bind(null,xi.createElement);const Xe="stash-tv",oh={},No=t=>{let e;const r=new Set,n=(l,f)=>{const d=typeof l=="function"?l(e):l;if(!Object.is(d,e)){const p=e;e=f??(typeof d!="object"||d===null)?d:Object.assign({},e,d),r.forEach(y=>y(e,p))}},i=()=>e,u={setState:n,getState:i,getInitialState:()=>c,subscribe:l=>(r.add(l),()=>r.delete(l)),destroy:()=>{(oh?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},c=e=t(n,i,u);return u},uh=t=>t?No(t):No;var Ci={exports:{}},Ai={},Pi={exports:{}},Ni={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro;function ch(){if(Ro)return Ni;Ro=1;var t=Oi();function e(f,d){return f===d&&(f!==0||1/f===1/d)||f!==f&&d!==d}var r=typeof Object.is=="function"?Object.is:e,n=t.useState,i=t.useEffect,a=t.useLayoutEffect,s=t.useDebugValue;function o(f,d){var p=d(),y=n({inst:{value:p,getSnapshot:d}}),m=y[0].inst,v=y[1];return a(function(){m.value=p,m.getSnapshot=d,u(m)&&v({inst:m})},[f,p,d]),i(function(){return u(m)&&v({inst:m}),f(function(){u(m)&&v({inst:m})})},[f]),s(p),p}function u(f){var d=f.getSnapshot;f=f.value;try{var p=d();return!r(f,p)}catch{return!0}}function c(f,d){return d()}var l=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?c:o;return Ni.useSyncExternalStore=t.useSyncExternalStore!==void 0?t.useSyncExternalStore:l,Ni}var Mo;function lh(){return Mo||(Mo=1,Pi.exports=ch()),Pi.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo;function fh(){if(Lo)return Ai;Lo=1;var t=Oi(),e=lh();function r(c,l){return c===l&&(c!==0||1/c===1/l)||c!==c&&l!==l}var n=typeof Object.is=="function"?Object.is:r,i=e.useSyncExternalStore,a=t.useRef,s=t.useEffect,o=t.useMemo,u=t.useDebugValue;return Ai.useSyncExternalStoreWithSelector=function(c,l,f,d,p){var y=a(null);if(y.current===null){var m={hasValue:!1,value:null};y.current=m}else m=y.current;y=o(function(){function h(x){if(!b){if(b=!0,S=x,x=d(x),p!==void 0&&m.hasValue){var I=m.value;if(p(I,x))return w=I}return w=x}if(I=w,n(S,x))return I;var A=d(x);return p!==void 0&&p(I,A)?(S=x,I):(S=x,w=A)}var b=!1,S,w,D=f===void 0?null:f;return[function(){return h(l())},D===null?void 0:function(){return h(D())}]},[l,f,d,p]);var v=i(c,y[0],y[1]);return s(function(){m.hasValue=!0,m.value=v},[v]),u(v),v},Ai}var jo;function dh(){return jo||(jo=1,Ci.exports=fh()),Ci.exports}var ph=dh();const hh=Xr(ph),qo={},{useDebugValue:mh}=xi,{useSyncExternalStoreWithSelector:gh}=hh;let Uo=!1;const yh=t=>t;function vh(t,e=yh,r){(qo?"production":void 0)!=="production"&&r&&!Uo&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Uo=!0);const n=gh(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,r);return mh(n),n}const bh=t=>{(qo?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?uh(t):t,r=(n,i)=>vh(e,n,i);return Object.assign(r,e),r},Vo=t=>bh,Sh={};function Bo(t,e){let r;try{r=t()}catch{return}return{getItem:i=>{var a;const s=u=>u===null?null:JSON.parse(u,void 0),o=(a=r.getItem(i))!=null?a:null;return o instanceof Promise?o.then(s):s(o)},setItem:(i,a)=>r.setItem(i,JSON.stringify(a,void 0)),removeItem:i=>r.removeItem(i)}}const mr=t=>e=>{try{const r=t(e);return r instanceof Promise?r:{then(n){return mr(n)(r)},catch(n){return this}}}catch(r){return{then(n){return this},catch(n){return mr(n)(r)}}}},_h=(t,e)=>(r,n,i)=>{let a={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:v=>v,version:0,merge:(v,h)=>({...h,...v}),...e},s=!1;const o=new Set,u=new Set;let c;try{c=a.getStorage()}catch{}if(!c)return t((...v)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),r(...v)},n,i);const l=mr(a.serialize),f=()=>{const v=a.partialize({...n()});let h;const b=l({state:v,version:a.version}).then(S=>c.setItem(a.name,S)).catch(S=>{h=S});if(h)throw h;return b},d=i.setState;i.setState=(v,h)=>{d(v,h),f()};const p=t((...v)=>{r(...v),f()},n,i);let y;const m=()=>{var v;if(!c)return;s=!1,o.forEach(b=>b(n()));const h=((v=a.onRehydrateStorage)==null?void 0:v.call(a,n()))||void 0;return mr(c.getItem.bind(c))(a.name).then(b=>{if(b)return a.deserialize(b)}).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==a.version){if(a.migrate)return a.migrate(b.state,b.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return b.state}).then(b=>{var S;return y=a.merge(b,(S=n())!=null?S:p),r(y,!0),f()}).then(()=>{h?.(y,void 0),s=!0,u.forEach(b=>b(y))}).catch(b=>{h?.(void 0,b)})};return i.persist={setOptions:v=>{a={...a,...v},v.getStorage&&(c=v.getStorage())},clearStorage:()=>{c?.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>m(),hasHydrated:()=>s,onHydrate:v=>(o.add(v),()=>{o.delete(v)}),onFinishHydration:v=>(u.add(v),()=>{u.delete(v)})},m(),y||p},Eh=(t,e)=>(r,n,i)=>{let a={storage:Bo(()=>localStorage),partialize:m=>m,version:0,merge:(m,v)=>({...v,...m}),...e},s=!1;const o=new Set,u=new Set;let c=a.storage;if(!c)return t((...m)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),r(...m)},n,i);const l=()=>{const m=a.partialize({...n()});return c.setItem(a.name,{state:m,version:a.version})},f=i.setState;i.setState=(m,v)=>{f(m,v),l()};const d=t((...m)=>{r(...m),l()},n,i);i.getInitialState=()=>d;let p;const y=()=>{var m,v;if(!c)return;s=!1,o.forEach(b=>{var S;return b((S=n())!=null?S:d)});const h=((v=a.onRehydrateStorage)==null?void 0:v.call(a,(m=n())!=null?m:d))||void 0;return mr(c.getItem.bind(c))(a.name).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==a.version){if(a.migrate)return[!0,a.migrate(b.state,b.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,b.state];return[!1,void 0]}).then(b=>{var S;const[w,D]=b;if(p=a.merge(D,(S=n())!=null?S:d),r(p,!0),w)return l()}).then(()=>{h?.(p,void 0),p=n(),s=!0,u.forEach(b=>b(p))}).catch(b=>{h?.(void 0,b)})};return i.persist={setOptions:m=>{a={...a,...m},m.storage&&(c=m.storage)},clearStorage:()=>{c?.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>y(),hasHydrated:()=>s,onHydrate:m=>(o.add(m),()=>{o.delete(m)}),onFinishHydration:m=>(u.add(m),()=>{u.delete(m)})},a.skipHydration||y(),p||d},wh=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((Sh?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),_h(t,e)):Eh(t,e);function Ri(t,e){const r=e?.compact===!0?void 0:2;return JSON.stringify(t,null,r)}const Dh=Object.freeze(Object.defineProperty({__proto__:null,inspect:Ri},Symbol.toStringTag,{value:"Module"})),Go={trace:"TRC",debug:"DBG",info:"INF",warning:"WRN",error:"ERR",fatal:"FTL"},zo=typeof document<"u"||typeof navigator<"u"&&navigator.product==="ReactNative"?t=>JSON.stringify(t):"Deno"in globalThis&&"inspect"in globalThis.Deno&&typeof globalThis.Deno.inspect=="function"?(t,e)=>globalThis.Deno.inspect(t,{strAbbreviateSize:1/0,iterableLimit:1/0,...e}):Dh!=null&&typeof Ri=="function"?(t,e)=>Ri(t,{...e}):t=>JSON.stringify(t);function re(t){return t<10?`0${t}`:`${t}`}function Ct(t){return t<10?`00${t}`:t<100?`0${t}`:`${t}`}const en={"date-time-timezone":t=>{const e=new Date(t),r=e.getUTCFullYear(),n=re(e.getUTCMonth()+1),i=re(e.getUTCDate()),a=re(e.getUTCHours()),s=re(e.getUTCMinutes()),o=re(e.getUTCSeconds()),u=Ct(e.getUTCMilliseconds());return`${r}-${n}-${i} ${a}:${s}:${o}.${u} +00:00`},"date-time-tz":t=>{const e=new Date(t),r=e.getUTCFullYear(),n=re(e.getUTCMonth()+1),i=re(e.getUTCDate()),a=re(e.getUTCHours()),s=re(e.getUTCMinutes()),o=re(e.getUTCSeconds()),u=Ct(e.getUTCMilliseconds());return`${r}-${n}-${i} ${a}:${s}:${o}.${u} +00`},"date-time":t=>{const e=new Date(t),r=e.getUTCFullYear(),n=re(e.getUTCMonth()+1),i=re(e.getUTCDate()),a=re(e.getUTCHours()),s=re(e.getUTCMinutes()),o=re(e.getUTCSeconds()),u=Ct(e.getUTCMilliseconds());return`${r}-${n}-${i} ${a}:${s}:${o}.${u}`},"time-timezone":t=>{const e=new Date(t),r=re(e.getUTCHours()),n=re(e.getUTCMinutes()),i=re(e.getUTCSeconds()),a=Ct(e.getUTCMilliseconds());return`${r}:${n}:${i}.${a} +00:00`},"time-tz":t=>{const e=new Date(t),r=re(e.getUTCHours()),n=re(e.getUTCMinutes()),i=re(e.getUTCSeconds()),a=Ct(e.getUTCMilliseconds());return`${r}:${n}:${i}.${a} +00`},time:t=>{const e=new Date(t),r=re(e.getUTCHours()),n=re(e.getUTCMinutes()),i=re(e.getUTCSeconds()),a=Ct(e.getUTCMilliseconds());return`${r}:${n}:${i}.${a}`},date:t=>{const e=new Date(t),r=e.getUTCFullYear(),n=re(e.getUTCMonth()+1),i=re(e.getUTCDate());return`${r}-${n}-${i}`},rfc3339:t=>new Date(t).toISOString(),none:()=>null},At={ABBR:Go,abbr:{trace:"trc",debug:"dbg",info:"inf",warning:"wrn",error:"err",fatal:"ftl"},FULL:{trace:"TRACE",debug:"DEBUG",info:"INFO",warning:"WARNING",error:"ERROR",fatal:"FATAL"},full:{trace:"trace",debug:"debug",info:"info",warning:"warning",error:"error",fatal:"fatal"},L:{trace:"T",debug:"D",info:"I",warning:"W",error:"E",fatal:"F"},l:{trace:"t",debug:"d",info:"i",warning:"w",error:"e",fatal:"f"}};function Qo(t){return t==="crlf"?`\r
`:`
`}function tn(t,e){if(!(e instanceof Error))return e;const r={name:e.name,message:e.message};typeof e.stack=="string"&&(r.stack=e.stack);const n=e.cause;n!==void 0&&(r.cause=n),typeof AggregateError<"u"&&e instanceof AggregateError&&(r.errors=e.errors);for(const i of Object.keys(e))i in r||(r[i]=e[i]);return r}function Wo(t={}){const e=(()=>{const o=t.timestamp;return o==null?en["date-time-timezone"]:o==="disabled"?en.none:typeof o=="string"&&o in en?en[o]:o})(),r=t.category??"·",n=t.value?o=>t.value(o,zo):zo,i=(()=>{const o=t.level;return o==null||o==="ABBR"?u=>At.ABBR[u]:o==="abbr"?u=>At.abbr[u]:o==="FULL"?u=>At.FULL[u]:o==="full"?u=>At.full[u]:o==="L"?u=>At.L[u]:o==="l"?u=>At.l[u]:o})(),a=Qo(t.lineEnding),s=t.format??(({timestamp:o,level:u,category:c,message:l})=>`${o?`${o} `:""}[${u}] ${c}: ${l}`);return o=>{const u=o.message,c=u.length;let l;if(c===1)l=u[0];else if(c<=6){l="";for(let m=0;m<c;m++)l+=m%2===0?u[m]:n(u[m])}else{const m=new Array(c);for(let v=0;v<c;v++)m[v]=v%2===0?u[v]:n(u[v]);l=m.join("")}const f=e(o.timestamp),d=i(o.level),p=typeof r=="function"?r(o.category):o.category.join(r);return`${s({timestamp:f,level:d,category:p,message:l,record:o})}${a}`}}Wo();const Mi="\x1B[0m",Li={black:"\x1B[30m",red:"\x1B[31m",green:"\x1B[32m",yellow:"\x1B[33m",blue:"\x1B[34m",magenta:"\x1B[35m",cyan:"\x1B[36m",white:"\x1B[37m"},ji={bold:"\x1B[1m",dim:"\x1B[2m",italic:"\x1B[3m",underline:"\x1B[4m",strikethrough:"\x1B[9m"},Th={trace:null,debug:"blue",info:"green",warning:"yellow",error:"red",fatal:"magenta"};function Oh(t={}){const e=t.format,r=typeof t.timestampStyle>"u"?"dim":t.timestampStyle,n=t.timestampColor??null,i=`${r==null?"":ji[r]}${n==null?"":Li[n]}`,a=r==null&&n==null?"":Mi,s=typeof t.levelStyle>"u"?"bold":t.levelStyle,o=t.levelColors??Th,u=typeof t.categoryStyle>"u"?"dim":t.categoryStyle,c=t.categoryColor??null,l=`${u==null?"":ji[u]}${c==null?"":Li[c]}`,f=u==null&&c==null?"":Mi;return Wo({timestamp:"date-time-tz",value(d,p){return p(d,{colors:!0})},...t,format({timestamp:d,level:p,category:y,message:m,record:v}){const h=o[v.level];return d=d==null?null:`${i}${d}${a}`,p=`${s==null?"":ji[s]}${h==null?"":Li[h]}${p}${s==null&&h==null?"":Mi}`,e==null?`${d==null?"":`${d} `}${p} ${l}${y}:${f} ${m}`:e({timestamp:d,level:p,category:`${l}${y}${f}`,message:m,record:v})}})}Oh();function xh(t={}){const e=Qo(t.lineEnding);if(!t.categorySeparator&&!t.message&&!t.properties)return o=>{if(o.message.length===3)return JSON.stringify({"@timestamp":new Date(o.timestamp).toISOString(),level:o.level==="warning"?"WARN":o.level.toUpperCase(),message:o.message[0]+JSON.stringify(o.message[1])+o.message[2],logger:o.category.join("."),properties:o.properties},tn)+e;if(o.message.length===1)return JSON.stringify({"@timestamp":new Date(o.timestamp).toISOString(),level:o.level==="warning"?"WARN":o.level.toUpperCase(),message:o.message[0],logger:o.category.join("."),properties:o.properties},tn)+e;let u=o.message[0];for(let c=1;c<o.message.length;c++)u+=c&1?JSON.stringify(o.message[c]):o.message[c];return JSON.stringify({"@timestamp":new Date(o.timestamp).toISOString(),level:o.level==="warning"?"WARN":o.level.toUpperCase(),message:u,logger:o.category.join("."),properties:o.properties},tn)+e};const r=t.message==="template",n=t.properties??"nest:properties";let i;if(typeof t.categorySeparator=="function")i=t.categorySeparator;else{const o=t.categorySeparator??".";i=u=>u.join(o)}let a;if(n==="flatten")a=o=>o;else if(n.startsWith("prepend:")){const o=n.substring(8);if(o==="")throw new TypeError(`Invalid properties option: ${JSON.stringify(n)}. It must be of the form "prepend:<prefix>" where <prefix> is a non-empty string.`);a=u=>{const c={};for(const l in u)c[`${o}${l}`]=u[l];return c}}else if(n.startsWith("nest:")){const o=n.substring(5);a=u=>({[o]:u})}else throw new TypeError(`Invalid properties option: ${JSON.stringify(n)}. It must be "flatten", "prepend:<prefix>", or "nest:<key>".`);let s;return r?s=o=>{if(typeof o.rawMessage=="string")return o.rawMessage;let u="";for(let c=0;c<o.rawMessage.length;c++)u+=c%2<1?o.rawMessage[c]:"{}";return u}:s=o=>{const u=o.message.length;if(u===1)return o.message[0];let c="";for(let l=0;l<u;l++)c+=l%2<1?o.message[l]:JSON.stringify(o.message[l]);return c},o=>JSON.stringify({"@timestamp":new Date(o.timestamp).toISOString(),level:o.level==="warning"?"WARN":o.level.toUpperCase(),message:s(o),logger:i(o.category),...a(o.properties)},tn)+e}xh();const kh={trace:"background-color: gray; color: white;",debug:"background-color: gray; color: white;",info:"background-color: white; color: black;",warning:"background-color: orange; color: black;",error:"background-color: red; color: white;",fatal:"background-color: maroon; color: white;"};function Ih(t){let e="";const r=[];for(let a=0;a<t.message.length;a++)a%2===0?e+=t.message[a]:(e+="%o",r.push(t.message[a]));const n=new Date(t.timestamp);return[`%c${`${n.getUTCHours().toString().padStart(2,"0")}:${n.getUTCMinutes().toString().padStart(2,"0")}:${n.getUTCSeconds().toString().padStart(2,"0")}.${n.getUTCMilliseconds().toString().padStart(3,"0")}`} %c${Go[t.level]}%c %c${t.category.join("·")} %c${e}`,"color: gray;",kh[t.level],"background-color: default;","color: gray;","color: default;",...r]}function Fh(t={}){const e=t.formatter??Ih,r={trace:"debug",debug:"debug",info:"info",warning:"warn",error:"error",fatal:"error",...t.levelMap??{}},n=t.console??globalThis.console,i=h=>{const b=e(h),S=r[h.level];if(S===void 0)throw new TypeError(`Invalid log level: ${h.level}.`);if(typeof b=="string"){const w=b.replace(/\r?\n$/,"");n[S](w)}else n[S](...b)};if(!t.nonBlocking)return i;const a=t.nonBlocking===!0?{}:t.nonBlocking,s=a.bufferSize??100,o=a.flushInterval??100,u=[];let c=null,l=!1,f=!1;const d=s*2;function p(){if(u.length===0)return;const h=u.splice(0);for(const b of h)try{i(b)}catch{}}function y(){f||(f=!0,setTimeout(()=>{f=!1,p()},0))}function m(){c!==null||l||(c=setInterval(()=>{p()},o))}const v=h=>{l||(u.length>=d&&u.shift(),u.push(h),u.length>=s?y():c===null&&m())};return v[Symbol.dispose]=()=>{l=!0,c!==null&&(clearInterval(c),c=null),p()},v}Fh();const $h="warning";var qi=function(t,e){return qi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])},qi(t,e)};function De(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");qi(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var E=function(){return E=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},E.apply(this,arguments)};function je(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}function Ke(t,e,r,n){function i(a){return a instanceof r?a:new r(function(s){s(a)})}return new(r||(r=Promise))(function(a,s){function o(l){try{c(n.next(l))}catch(f){s(f)}}function u(l){try{c(n.throw(l))}catch(f){s(f)}}function c(l){l.done?a(l.value):i(l.value).then(o,u)}c((n=n.apply(t,e||[])).next())})}function Ze(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=o(0),s.throw=o(1),s.return=o(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(r=0)),r;)try{if(n=1,i&&(a=c[0]&2?i.return:c[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,c[1])).done)return a;switch(i=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,i=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){r.label=c[1];break}if(c[0]===6&&r.label<a[1]){r.label=a[1],a=c;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(c);break}a[2]&&r.ops.pop(),r.trys.pop();continue}c=e.call(t,r)}catch(l){c=[6,l],i=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function me(t,e,r){if(r||arguments.length===2)for(var n=0,i=e.length,a;n<i;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return t.concat(a||Array.prototype.slice.call(e))}typeof SuppressedError=="function"&&SuppressedError;var Ui="Invariant Violation",Ho=Object.setPrototypeOf,Ch=Ho===void 0?function(t,e){return t.__proto__=e,t}:Ho,Yo=(function(t){De(e,t);function e(r){r===void 0&&(r=Ui);var n=t.call(this,typeof r=="number"?Ui+": "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this;return n.framesToPop=1,n.name=Ui,Ch(n,e.prototype),n}return e})(Error);function gt(t,e){if(!t)throw new Yo(e)}var Jo=["debug","log","warn","error","silent"],Ah=Jo.indexOf("log");function rn(t){return function(){if(Jo.indexOf(t)>=Ah){var e=console[t]||console.log;return e.apply(console,arguments)}}}(function(t){t.debug=rn("debug"),t.log=rn("log"),t.warn=rn("warn"),t.error=rn("error")})(gt||(gt={}));var Vi="3.13.9";function Oe(t){try{return t()}catch{}}const Bi=Oe(function(){return globalThis})||Oe(function(){return window})||Oe(function(){return self})||Oe(function(){return global})||Oe(function(){return Oe.constructor("return this")()});var Xo=new Map;function Gi(t){var e=Xo.get(t)||1;return Xo.set(t,e+1),"".concat(t,":").concat(e,":").concat(Math.random().toString(36).slice(2))}function Ko(t,e){e===void 0&&(e=0);var r=Gi("stringifyForDisplay");return JSON.stringify(t,function(n,i){return i===void 0?r:i},e).split(JSON.stringify(r)).join("<undefined>")}function nn(t){return function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];if(typeof e=="number"){var i=e;e=zi(i),e||(e=Qi(i,r),r=[])}t.apply(void 0,[e].concat(r))}}var P=Object.assign(function(e,r){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];e||gt(e,zi(r,n)||Qi(r,n))},{debug:nn(gt.debug),log:nn(gt.log),warn:nn(gt.warn),error:nn(gt.error)});function ye(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Yo(zi(t,e)||Qi(t,e))}var Zo=Symbol.for("ApolloErrorMessageHandler_"+Vi);function eu(t){if(typeof t=="string")return t;try{return Ko(t,2).slice(0,1e3)}catch{return"<non-serializable>"}}function zi(t,e){if(e===void 0&&(e=[]),!!t)return Bi[Zo]&&Bi[Zo](t,e.map(eu))}function Qi(t,e){if(e===void 0&&(e=[]),!!t)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:Vi,message:t,args:e.map(eu)})))}function an(t,e){if(!!!t)throw new Error(e)}function Ph(t){return typeof t=="object"&&t!==null}function Nh(t,e){if(!!!t)throw new Error("Unexpected invariant triggered.")}const Rh=/\r\n|[\n\r]/g;function Wi(t,e){let r=0,n=1;for(const i of t.body.matchAll(Rh)){if(typeof i.index=="number"||Nh(!1),i.index>=e)break;r=i.index+i[0].length,n+=1}return{line:n,column:e+1-r}}function Mh(t){return tu(t.source,Wi(t.source,t.start))}function tu(t,e){const r=t.locationOffset.column-1,n="".padStart(r)+t.body,i=e.line-1,a=t.locationOffset.line-1,s=e.line+a,o=e.line===1?r:0,u=e.column+o,c=`${t.name}:${s}:${u}
`,l=n.split(/\r\n|[\n\r]/g),f=l[i];if(f.length>120){const d=Math.floor(u/80),p=u%80,y=[];for(let m=0;m<f.length;m+=80)y.push(f.slice(m,m+80));return c+ru([[`${s} |`,y[0]],...y.slice(1,d+1).map(m=>["|",m]),["|","^".padStart(p)],["|",y[d+1]]])}return c+ru([[`${s-1} |`,l[i-1]],[`${s} |`,f],["|","^".padStart(u)],[`${s+1} |`,l[i+1]]])}function ru(t){const e=t.filter(([n,i])=>i!==void 0),r=Math.max(...e.map(([n])=>n.length));return e.map(([n,i])=>n.padStart(r)+(i?" "+i:"")).join(`
`)}function Lh(t){const e=t[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:t[1],positions:t[2],path:t[3],originalError:t[4],extensions:t[5]}:e}class Hi extends Error{constructor(e,...r){var n,i,a;const{nodes:s,source:o,positions:u,path:c,originalError:l,extensions:f}=Lh(r);super(e),this.name="GraphQLError",this.path=c??void 0,this.originalError=l??void 0,this.nodes=nu(Array.isArray(s)?s:s?[s]:void 0);const d=nu((n=this.nodes)===null||n===void 0?void 0:n.map(y=>y.loc).filter(y=>y!=null));this.source=o??(d==null||(i=d[0])===null||i===void 0?void 0:i.source),this.positions=u??d?.map(y=>y.start),this.locations=u&&o?u.map(y=>Wi(o,y)):d?.map(y=>Wi(y.source,y.start));const p=Ph(l?.extensions)?l?.extensions:void 0;this.extensions=(a=f??p)!==null&&a!==void 0?a:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),l!=null&&l.stack?Object.defineProperty(this,"stack",{value:l.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,Hi):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const r of this.nodes)r.loc&&(e+=`

`+Mh(r.loc));else if(this.source&&this.locations)for(const r of this.locations)e+=`

`+tu(this.source,r);return e}toJSON(){const e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function nu(t){return t===void 0||t.length===0?void 0:t}function le(t,e,r){return new Hi(`Syntax Error: ${r}`,{source:t,positions:[e]})}class jh{constructor(e,r,n){this.start=e.start,this.end=r.end,this.startToken=e,this.endToken=r,this.source=n}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class iu{constructor(e,r,n,i,a,s){this.kind=e,this.start=r,this.end=n,this.line=i,this.column=a,this.value=s,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const au={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","directives","locations"],SchemaExtension:["directives","operationTypes"],DirectiveExtension:["name","directives"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},qh=new Set(Object.keys(au));function su(t){const e=t?.kind;return typeof e=="string"&&qh.has(e)}var Pt;(function(t){t.QUERY="query",t.MUTATION="mutation",t.SUBSCRIPTION="subscription"})(Pt||(Pt={}));var Yi;(function(t){t.QUERY="QUERY",t.MUTATION="MUTATION",t.SUBSCRIPTION="SUBSCRIPTION",t.FIELD="FIELD",t.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",t.FRAGMENT_SPREAD="FRAGMENT_SPREAD",t.INLINE_FRAGMENT="INLINE_FRAGMENT",t.VARIABLE_DEFINITION="VARIABLE_DEFINITION",t.SCHEMA="SCHEMA",t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.FIELD_DEFINITION="FIELD_DEFINITION",t.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.ENUM_VALUE="ENUM_VALUE",t.INPUT_OBJECT="INPUT_OBJECT",t.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION",t.DIRECTIVE_DEFINITION="DIRECTIVE_DEFINITION"})(Yi||(Yi={}));var F;(function(t){t.NAME="Name",t.DOCUMENT="Document",t.OPERATION_DEFINITION="OperationDefinition",t.VARIABLE_DEFINITION="VariableDefinition",t.SELECTION_SET="SelectionSet",t.FIELD="Field",t.ARGUMENT="Argument",t.FRAGMENT_SPREAD="FragmentSpread",t.INLINE_FRAGMENT="InlineFragment",t.FRAGMENT_DEFINITION="FragmentDefinition",t.VARIABLE="Variable",t.INT="IntValue",t.FLOAT="FloatValue",t.STRING="StringValue",t.BOOLEAN="BooleanValue",t.NULL="NullValue",t.ENUM="EnumValue",t.LIST="ListValue",t.OBJECT="ObjectValue",t.OBJECT_FIELD="ObjectField",t.DIRECTIVE="Directive",t.NAMED_TYPE="NamedType",t.LIST_TYPE="ListType",t.NON_NULL_TYPE="NonNullType",t.SCHEMA_DEFINITION="SchemaDefinition",t.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",t.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",t.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",t.FIELD_DEFINITION="FieldDefinition",t.INPUT_VALUE_DEFINITION="InputValueDefinition",t.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",t.UNION_TYPE_DEFINITION="UnionTypeDefinition",t.ENUM_TYPE_DEFINITION="EnumTypeDefinition",t.ENUM_VALUE_DEFINITION="EnumValueDefinition",t.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",t.DIRECTIVE_DEFINITION="DirectiveDefinition",t.SCHEMA_EXTENSION="SchemaExtension",t.DIRECTIVE_EXTENSION="DirectiveExtension",t.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",t.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",t.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",t.UNION_TYPE_EXTENSION="UnionTypeExtension",t.ENUM_TYPE_EXTENSION="EnumTypeExtension",t.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",t.TYPE_COORDINATE="TypeCoordinate",t.MEMBER_COORDINATE="MemberCoordinate",t.ARGUMENT_COORDINATE="ArgumentCoordinate",t.DIRECTIVE_COORDINATE="DirectiveCoordinate",t.DIRECTIVE_ARGUMENT_COORDINATE="DirectiveArgumentCoordinate"})(F||(F={}));function Ji(t){return t===9||t===32}function gr(t){return t>=48&&t<=57}function ou(t){return t>=97&&t<=122||t>=65&&t<=90}function uu(t){return ou(t)||t===95}function Uh(t){return ou(t)||gr(t)||t===95}function Vh(t){var e;let r=Number.MAX_SAFE_INTEGER,n=null,i=-1;for(let s=0;s<t.length;++s){var a;const o=t[s],u=Bh(o);u!==o.length&&(n=(a=n)!==null&&a!==void 0?a:s,i=s,s!==0&&u<r&&(r=u))}return t.map((s,o)=>o===0?s:s.slice(r)).slice((e=n)!==null&&e!==void 0?e:0,i+1)}function Bh(t){let e=0;for(;e<t.length&&Ji(t.charCodeAt(e));)++e;return e}function Gh(t,e){const r=t.replace(/"""/g,'\\"""'),n=r.split(/\r\n|[\n\r]/g),i=n.length===1,a=n.length>1&&n.slice(1).every(p=>p.length===0||Ji(p.charCodeAt(0))),s=r.endsWith('\\"""'),o=t.endsWith('"')&&!s,u=t.endsWith("\\"),c=o||u,l=!i||t.length>70||c||a||s;let f="";const d=i&&Ji(t.charCodeAt(0));return(l&&!d||a)&&(f+=`
`),f+=r,(l||c)&&(f+=`
`),'"""'+f+'"""'}var T;(function(t){t.SOF="<SOF>",t.EOF="<EOF>",t.BANG="!",t.DOLLAR="$",t.AMP="&",t.PAREN_L="(",t.PAREN_R=")",t.DOT=".",t.SPREAD="...",t.COLON=":",t.EQUALS="=",t.AT="@",t.BRACKET_L="[",t.BRACKET_R="]",t.BRACE_L="{",t.PIPE="|",t.BRACE_R="}",t.NAME="Name",t.INT="Int",t.FLOAT="Float",t.STRING="String",t.BLOCK_STRING="BlockString",t.COMMENT="Comment"})(T||(T={}));class zh{constructor(e){const r=new iu(T.SOF,0,0,0,0);this.source=e,this.lastToken=r,this.token=r,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==T.EOF)do if(e.next)e=e.next;else{const r=Wh(this,e.end);e.next=r,r.prev=e,e=r}while(e.kind===T.COMMENT);return e}}function Qh(t){return t===T.BANG||t===T.DOLLAR||t===T.AMP||t===T.PAREN_L||t===T.PAREN_R||t===T.DOT||t===T.SPREAD||t===T.COLON||t===T.EQUALS||t===T.AT||t===T.BRACKET_L||t===T.BRACKET_R||t===T.BRACE_L||t===T.PIPE||t===T.BRACE_R}function Nt(t){return t>=0&&t<=55295||t>=57344&&t<=1114111}function sn(t,e){return cu(t.charCodeAt(e))&&lu(t.charCodeAt(e+1))}function cu(t){return t>=55296&&t<=56319}function lu(t){return t>=56320&&t<=57343}function yt(t,e){const r=t.source.body.codePointAt(e);if(r===void 0)return T.EOF;if(r>=32&&r<=126){const n=String.fromCodePoint(r);return n==='"'?`'"'`:`"${n}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function ce(t,e,r,n,i){const a=t.line,s=1+r-t.lineStart;return new iu(e,r,n,a,s,i)}function Wh(t,e){const r=t.source.body,n=r.length;let i=e;for(;i<n;){const a=r.charCodeAt(i);switch(a){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++t.line,t.lineStart=i;continue;case 13:r.charCodeAt(i+1)===10?i+=2:++i,++t.line,t.lineStart=i;continue;case 35:return Hh(t,i);case 33:return ce(t,T.BANG,i,i+1);case 36:return ce(t,T.DOLLAR,i,i+1);case 38:return ce(t,T.AMP,i,i+1);case 40:return ce(t,T.PAREN_L,i,i+1);case 41:return ce(t,T.PAREN_R,i,i+1);case 46:if(r.charCodeAt(i+1)===46&&r.charCodeAt(i+2)===46)return ce(t,T.SPREAD,i,i+3);break;case 58:return ce(t,T.COLON,i,i+1);case 61:return ce(t,T.EQUALS,i,i+1);case 64:return ce(t,T.AT,i,i+1);case 91:return ce(t,T.BRACKET_L,i,i+1);case 93:return ce(t,T.BRACKET_R,i,i+1);case 123:return ce(t,T.BRACE_L,i,i+1);case 124:return ce(t,T.PIPE,i,i+1);case 125:return ce(t,T.BRACE_R,i,i+1);case 34:return r.charCodeAt(i+1)===34&&r.charCodeAt(i+2)===34?em(t,i):Jh(t,i)}if(gr(a)||a===45)return Yh(t,i,a);if(uu(a))return tm(t,i);throw le(t.source,i,a===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Nt(a)||sn(r,i)?`Unexpected character: ${yt(t,i)}.`:`Invalid character: ${yt(t,i)}.`)}return ce(t,T.EOF,n,n)}function Hh(t,e){const r=t.source.body,n=r.length;let i=e+1;for(;i<n;){const a=r.charCodeAt(i);if(a===10||a===13)break;if(Nt(a))++i;else if(sn(r,i))i+=2;else break}return ce(t,T.COMMENT,e,i,r.slice(e+1,i))}function Yh(t,e,r){const n=t.source.body;let i=e,a=r,s=!1;if(a===45&&(a=n.charCodeAt(++i)),a===48){if(a=n.charCodeAt(++i),gr(a))throw le(t.source,i,`Invalid number, unexpected digit after 0: ${yt(t,i)}.`)}else i=Xi(t,i,a),a=n.charCodeAt(i);if(a===46&&(s=!0,a=n.charCodeAt(++i),i=Xi(t,i,a),a=n.charCodeAt(i)),(a===69||a===101)&&(s=!0,a=n.charCodeAt(++i),(a===43||a===45)&&(a=n.charCodeAt(++i)),i=Xi(t,i,a),a=n.charCodeAt(i)),a===46||uu(a))throw le(t.source,i,`Invalid number, expected digit but got: ${yt(t,i)}.`);return ce(t,s?T.FLOAT:T.INT,e,i,n.slice(e,i))}function Xi(t,e,r){if(!gr(r))throw le(t.source,e,`Invalid number, expected digit but got: ${yt(t,e)}.`);const n=t.source.body;let i=e+1;for(;gr(n.charCodeAt(i));)++i;return i}function Jh(t,e){const r=t.source.body,n=r.length;let i=e+1,a=i,s="";for(;i<n;){const o=r.charCodeAt(i);if(o===34)return s+=r.slice(a,i),ce(t,T.STRING,e,i+1,s);if(o===92){s+=r.slice(a,i);const u=r.charCodeAt(i+1)===117?r.charCodeAt(i+2)===123?Xh(t,i):Kh(t,i):Zh(t,i);s+=u.value,i+=u.size,a=i;continue}if(o===10||o===13)break;if(Nt(o))++i;else if(sn(r,i))i+=2;else throw le(t.source,i,`Invalid character within String: ${yt(t,i)}.`)}throw le(t.source,i,"Unterminated string.")}function Xh(t,e){const r=t.source.body;let n=0,i=3;for(;i<12;){const a=r.charCodeAt(e+i++);if(a===125){if(i<5||!Nt(n))break;return{value:String.fromCodePoint(n),size:i}}if(n=n<<4|yr(a),n<0)break}throw le(t.source,e,`Invalid Unicode escape sequence: "${r.slice(e,e+i)}".`)}function Kh(t,e){const r=t.source.body,n=fu(r,e+2);if(Nt(n))return{value:String.fromCodePoint(n),size:6};if(cu(n)&&r.charCodeAt(e+6)===92&&r.charCodeAt(e+7)===117){const i=fu(r,e+8);if(lu(i))return{value:String.fromCodePoint(n,i),size:12}}throw le(t.source,e,`Invalid Unicode escape sequence: "${r.slice(e,e+6)}".`)}function fu(t,e){return yr(t.charCodeAt(e))<<12|yr(t.charCodeAt(e+1))<<8|yr(t.charCodeAt(e+2))<<4|yr(t.charCodeAt(e+3))}function yr(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function Zh(t,e){const r=t.source.body;switch(r.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw le(t.source,e,`Invalid character escape sequence: "${r.slice(e,e+2)}".`)}function em(t,e){const r=t.source.body,n=r.length;let i=t.lineStart,a=e+3,s=a,o="";const u=[];for(;a<n;){const c=r.charCodeAt(a);if(c===34&&r.charCodeAt(a+1)===34&&r.charCodeAt(a+2)===34){o+=r.slice(s,a),u.push(o);const l=ce(t,T.BLOCK_STRING,e,a+3,Vh(u).join(`
`));return t.line+=u.length-1,t.lineStart=i,l}if(c===92&&r.charCodeAt(a+1)===34&&r.charCodeAt(a+2)===34&&r.charCodeAt(a+3)===34){o+=r.slice(s,a),s=a+1,a+=4;continue}if(c===10||c===13){o+=r.slice(s,a),u.push(o),c===13&&r.charCodeAt(a+1)===10?a+=2:++a,o="",s=a,i=a;continue}if(Nt(c))++a;else if(sn(r,a))a+=2;else throw le(t.source,a,`Invalid character within String: ${yt(t,a)}.`)}throw le(t.source,a,"Unterminated string.")}function tm(t,e){const r=t.source.body,n=r.length;let i=e+1;for(;i<n;){const a=r.charCodeAt(i);if(Uh(a))++i;else break}return ce(t,T.NAME,e,i,r.slice(e,i))}const rm=10,du=2;function Ki(t){return on(t,[])}function on(t,e){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return nm(t,e);default:return String(t)}}function nm(t,e){if(t===null)return"null";if(e.includes(t))return"[Circular]";const r=[...e,t];if(im(t)){const n=t.toJSON();if(n!==t)return typeof n=="string"?n:on(n,r)}else if(Array.isArray(t))return sm(t,r);return am(t,r)}function im(t){return typeof t.toJSON=="function"}function am(t,e){const r=Object.entries(t);return r.length===0?"{}":e.length>du?"["+om(t)+"]":"{ "+r.map(([i,a])=>i+": "+on(a,e)).join(", ")+" }"}function sm(t,e){if(t.length===0)return"[]";if(e.length>du)return"[Array]";const r=Math.min(rm,t.length),n=t.length-r,i=[];for(let a=0;a<r;++a)i.push(on(t[a],e));return n===1?i.push("... 1 more item"):n>1&&i.push(`... ${n} more items`),"["+i.join(", ")+"]"}function om(t){const e=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof t.constructor=="function"){const r=t.constructor.name;if(typeof r=="string"&&r!=="")return r}return e}const um=globalThis.process&&!0?function(e,r){return e instanceof r}:function(e,r){if(e instanceof r)return!0;if(typeof e=="object"&&e!==null){var n;const i=r.prototype[Symbol.toStringTag],a=Symbol.toStringTag in e?e[Symbol.toStringTag]:(n=e.constructor)===null||n===void 0?void 0:n.name;if(i===a){const s=Ki(e);throw new Error(`Cannot use ${i} "${s}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class pu{constructor(e,r="GraphQL request",n={line:1,column:1}){typeof e=="string"||an(!1,`Body must be a string. Received: ${Ki(e)}.`),this.body=e,this.name=r,this.locationOffset=n,this.locationOffset.line>0||an(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||an(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function cm(t){return um(t,pu)}function lm(t,e){const r=new fm(t,e),n=r.parseDocument();return Object.defineProperty(n,"tokenCount",{enumerable:!1,value:r.tokenCount}),n}class fm{constructor(e,r={}){const{lexer:n,...i}=r;if(n)this._lexer=n;else{const a=cm(e)?e:new pu(e);this._lexer=new zh(a)}this._options=i,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){const e=this.expectToken(T.NAME);return this.node(e,{kind:F.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:F.DOCUMENT,definitions:this.many(T.SOF,this.parseDefinition,T.EOF)})}parseDefinition(){if(this.peek(T.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),r=e?this._lexer.lookahead():this._lexer.token;if(e&&r.kind===T.BRACE_L)throw le(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are not supported on shorthand queries.");if(r.kind===T.NAME){switch(r.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}switch(r.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition()}if(e)throw le(this._lexer.source,this._lexer.token.start,"Unexpected description, only GraphQL definitions support descriptions.");switch(r.value){case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(r)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(T.BRACE_L))return this.node(e,{kind:F.OPERATION_DEFINITION,operation:Pt.QUERY,description:void 0,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const r=this.parseDescription(),n=this.parseOperationType();let i;return this.peek(T.NAME)&&(i=this.parseName()),this.node(e,{kind:F.OPERATION_DEFINITION,operation:n,description:r,name:i,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(T.NAME);switch(e.value){case"query":return Pt.QUERY;case"mutation":return Pt.MUTATION;case"subscription":return Pt.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(T.PAREN_L,this.parseVariableDefinition,T.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:F.VARIABLE_DEFINITION,description:this.parseDescription(),variable:this.parseVariable(),type:(this.expectToken(T.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(T.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(T.DOLLAR),this.node(e,{kind:F.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:F.SELECTION_SET,selections:this.many(T.BRACE_L,this.parseSelection,T.BRACE_R)})}parseSelection(){return this.peek(T.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,r=this.parseName();let n,i;return this.expectOptionalToken(T.COLON)?(n=r,i=this.parseName()):i=r,this.node(e,{kind:F.FIELD,alias:n,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(T.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const r=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(T.PAREN_L,r,T.PAREN_R)}parseArgument(e=!1){const r=this._lexer.token,n=this.parseName();return this.expectToken(T.COLON),this.node(r,{kind:F.ARGUMENT,name:n,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(T.SPREAD);const r=this.expectOptionalKeyword("on");return!r&&this.peek(T.NAME)?this.node(e,{kind:F.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:F.INLINE_FRAGMENT,typeCondition:r?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token,r=this.parseDescription();return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:F.FRAGMENT_DEFINITION,description:r,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:F.FRAGMENT_DEFINITION,description:r,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const r=this._lexer.token;switch(r.kind){case T.BRACKET_L:return this.parseList(e);case T.BRACE_L:return this.parseObject(e);case T.INT:return this.advanceLexer(),this.node(r,{kind:F.INT,value:r.value});case T.FLOAT:return this.advanceLexer(),this.node(r,{kind:F.FLOAT,value:r.value});case T.STRING:case T.BLOCK_STRING:return this.parseStringLiteral();case T.NAME:switch(this.advanceLexer(),r.value){case"true":return this.node(r,{kind:F.BOOLEAN,value:!0});case"false":return this.node(r,{kind:F.BOOLEAN,value:!1});case"null":return this.node(r,{kind:F.NULL});default:return this.node(r,{kind:F.ENUM,value:r.value})}case T.DOLLAR:if(e)if(this.expectToken(T.DOLLAR),this._lexer.token.kind===T.NAME){const n=this._lexer.token.value;throw le(this._lexer.source,r.start,`Unexpected variable "$${n}" in constant value.`)}else throw this.unexpected(r);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:F.STRING,value:e.value,block:e.kind===T.BLOCK_STRING})}parseList(e){const r=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:F.LIST,values:this.any(T.BRACKET_L,r,T.BRACKET_R)})}parseObject(e){const r=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:F.OBJECT,fields:this.any(T.BRACE_L,r,T.BRACE_R)})}parseObjectField(e){const r=this._lexer.token,n=this.parseName();return this.expectToken(T.COLON),this.node(r,{kind:F.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e)})}parseDirectives(e){const r=[];for(;this.peek(T.AT);)r.push(this.parseDirective(e));return r}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const r=this._lexer.token;return this.expectToken(T.AT),this.node(r,{kind:F.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let r;if(this.expectOptionalToken(T.BRACKET_L)){const n=this.parseTypeReference();this.expectToken(T.BRACKET_R),r=this.node(e,{kind:F.LIST_TYPE,type:n})}else r=this.parseNamedType();return this.expectOptionalToken(T.BANG)?this.node(e,{kind:F.NON_NULL_TYPE,type:r}):r}parseNamedType(){return this.node(this._lexer.token,{kind:F.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(T.STRING)||this.peek(T.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("schema");const n=this.parseConstDirectives(),i=this.many(T.BRACE_L,this.parseOperationTypeDefinition,T.BRACE_R);return this.node(e,{kind:F.SCHEMA_DEFINITION,description:r,directives:n,operationTypes:i})}parseOperationTypeDefinition(){const e=this._lexer.token,r=this.parseOperationType();this.expectToken(T.COLON);const n=this.parseNamedType();return this.node(e,{kind:F.OPERATION_TYPE_DEFINITION,operation:r,type:n})}parseScalarTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("scalar");const n=this.parseName(),i=this.parseConstDirectives();return this.node(e,{kind:F.SCALAR_TYPE_DEFINITION,description:r,name:n,directives:i})}parseObjectTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("type");const n=this.parseName(),i=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:F.OBJECT_TYPE_DEFINITION,description:r,name:n,interfaces:i,directives:a,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(T.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(T.BRACE_L,this.parseFieldDefinition,T.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,r=this.parseDescription(),n=this.parseName(),i=this.parseArgumentDefs();this.expectToken(T.COLON);const a=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(e,{kind:F.FIELD_DEFINITION,description:r,name:n,arguments:i,type:a,directives:s})}parseArgumentDefs(){return this.optionalMany(T.PAREN_L,this.parseInputValueDef,T.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,r=this.parseDescription(),n=this.parseName();this.expectToken(T.COLON);const i=this.parseTypeReference();let a;this.expectOptionalToken(T.EQUALS)&&(a=this.parseConstValueLiteral());const s=this.parseConstDirectives();return this.node(e,{kind:F.INPUT_VALUE_DEFINITION,description:r,name:n,type:i,defaultValue:a,directives:s})}parseInterfaceTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("interface");const n=this.parseName(),i=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:F.INTERFACE_TYPE_DEFINITION,description:r,name:n,interfaces:i,directives:a,fields:s})}parseUnionTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("union");const n=this.parseName(),i=this.parseConstDirectives(),a=this.parseUnionMemberTypes();return this.node(e,{kind:F.UNION_TYPE_DEFINITION,description:r,name:n,directives:i,types:a})}parseUnionMemberTypes(){return this.expectOptionalToken(T.EQUALS)?this.delimitedMany(T.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("enum");const n=this.parseName(),i=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();return this.node(e,{kind:F.ENUM_TYPE_DEFINITION,description:r,name:n,directives:i,values:a})}parseEnumValuesDefinition(){return this.optionalMany(T.BRACE_L,this.parseEnumValueDefinition,T.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,r=this.parseDescription(),n=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(e,{kind:F.ENUM_VALUE_DEFINITION,description:r,name:n,directives:i})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw le(this._lexer.source,this._lexer.token.start,`${un(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("input");const n=this.parseName(),i=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();return this.node(e,{kind:F.INPUT_OBJECT_TYPE_DEFINITION,description:r,name:n,directives:i,fields:a})}parseInputFieldsDefinition(){return this.optionalMany(T.BRACE_L,this.parseInputValueDef,T.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===T.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension();case"directive":if(this._options.experimentalDirectivesOnDirectiveDefinitions)return this.parseDirectiveDefinitionExtension();break}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const r=this.parseConstDirectives(),n=this.optionalMany(T.BRACE_L,this.parseOperationTypeDefinition,T.BRACE_R);if(r.length===0&&n.length===0)throw this.unexpected();return this.node(e,{kind:F.SCHEMA_EXTENSION,directives:r,operationTypes:n})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const r=this.parseName(),n=this.parseConstDirectives();if(n.length===0)throw this.unexpected();return this.node(e,{kind:F.SCALAR_TYPE_EXTENSION,name:r,directives:n})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const r=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(n.length===0&&i.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:F.OBJECT_TYPE_EXTENSION,name:r,interfaces:n,directives:i,fields:a})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const r=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(n.length===0&&i.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:F.INTERFACE_TYPE_EXTENSION,name:r,interfaces:n,directives:i,fields:a})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(n.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:F.UNION_TYPE_EXTENSION,name:r,directives:n,types:i})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(n.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:F.ENUM_TYPE_EXTENSION,name:r,directives:n,values:i})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(n.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:F.INPUT_OBJECT_TYPE_EXTENSION,name:r,directives:n,fields:i})}parseDirectiveDefinitionExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("directive"),this.expectToken(T.AT);const r=this.parseName(),n=this.parseConstDirectives();if(n.length===0)throw this.unexpected();return this.node(e,{kind:F.DIRECTIVE_EXTENSION,name:r,directives:n})}parseDirectiveDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("directive"),this.expectToken(T.AT);const n=this.parseName(),i=this.parseArgumentDefs(),a=this._options.experimentalDirectivesOnDirectiveDefinitions?this.parseConstDirectives():[],s=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const o=this.parseDirectiveLocations();return this.node(e,{kind:F.DIRECTIVE_DEFINITION,description:r,name:n,arguments:i,directives:a,repeatable:s,locations:o})}parseDirectiveLocations(){return this.delimitedMany(T.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,r=this.parseName();if(Object.prototype.hasOwnProperty.call(Yi,r.value))return r;throw this.unexpected(e)}parseSchemaCoordinate(){const e=this._lexer.token,r=this.expectOptionalToken(T.AT),n=this.parseName();let i;!r&&this.expectOptionalToken(T.DOT)&&(i=this.parseName());let a;return(r||i)&&this.expectOptionalToken(T.PAREN_L)&&(a=this.parseName(),this.expectToken(T.COLON),this.expectToken(T.PAREN_R)),r?a?this.node(e,{kind:F.DIRECTIVE_ARGUMENT_COORDINATE,name:n,argumentName:a}):this.node(e,{kind:F.DIRECTIVE_COORDINATE,name:n}):i?a?this.node(e,{kind:F.ARGUMENT_COORDINATE,name:n,fieldName:i,argumentName:a}):this.node(e,{kind:F.MEMBER_COORDINATE,name:n,memberName:i}):this.node(e,{kind:F.TYPE_COORDINATE,name:n})}node(e,r){return this._options.noLocation!==!0&&(r.loc=new jh(e,this._lexer.lastToken,this._lexer.source)),r}peek(e){return this._lexer.token.kind===e}expectToken(e){const r=this._lexer.token;if(r.kind===e)return this.advanceLexer(),r;throw le(this._lexer.source,r.start,`Expected ${hu(e)}, found ${un(r)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){const r=this._lexer.token;if(r.kind===T.NAME&&r.value===e)this.advanceLexer();else throw le(this._lexer.source,r.start,`Expected "${e}", found ${un(r)}.`)}expectOptionalKeyword(e){const r=this._lexer.token;return r.kind===T.NAME&&r.value===e?(this.advanceLexer(),!0):!1}unexpected(e){const r=e??this._lexer.token;return le(this._lexer.source,r.start,`Unexpected ${un(r)}.`)}any(e,r,n){this.expectToken(e);const i=[];for(;!this.expectOptionalToken(n);)i.push(r.call(this));return i}optionalMany(e,r,n){if(this.expectOptionalToken(e)){const i=[];do i.push(r.call(this));while(!this.expectOptionalToken(n));return i}return[]}many(e,r,n){this.expectToken(e);const i=[];do i.push(r.call(this));while(!this.expectOptionalToken(n));return i}delimitedMany(e,r){this.expectOptionalToken(e);const n=[];do n.push(r.call(this));while(this.expectOptionalToken(e));return n}advanceLexer(){const{maxTokens:e}=this._options,r=this._lexer.advance();if(r.kind!==T.EOF&&(++this._tokenCounter,e!==void 0&&this._tokenCounter>e))throw le(this._lexer.source,r.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function un(t){const e=t.value;return hu(t.kind)+(e!=null?` "${e}"`:"")}function hu(t){return Qh(t)?`"${t}"`:t}function dm(t){return`"${t.replace(pm,hm)}"`}const pm=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function hm(t){return mm[t.charCodeAt(0)]}const mm=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],cn=Object.freeze({});function xe(t,e,r=au){const n=new Map;for(const h of Object.values(F))n.set(h,gm(e,h));let i,a=Array.isArray(t),s=[t],o=-1,u=[],c=t,l,f;const d=[],p=[];do{o++;const h=o===s.length,b=h&&u.length!==0;if(h){if(l=p.length===0?void 0:d[d.length-1],c=f,f=p.pop(),b)if(a){c=c.slice();let w=0;for(const[D,x]of u){const I=D-w;x===null?(c.splice(I,1),w++):c[I]=x}}else{c={...c};for(const[w,D]of u)c[w]=D}o=i.index,s=i.keys,u=i.edits,a=i.inArray,i=i.prev}else if(f){if(l=a?o:s[o],c=f[l],c==null)continue;d.push(l)}let S;if(!Array.isArray(c)){var y,m;su(c)||an(!1,`Invalid AST Node: ${Ki(c)}.`);const w=h?(y=n.get(c.kind))===null||y===void 0?void 0:y.leave:(m=n.get(c.kind))===null||m===void 0?void 0:m.enter;if(S=w?.call(e,c,l,f,d,p),S===cn)break;if(S===!1){if(!h){d.pop();continue}}else if(S!==void 0&&(u.push([l,S]),!h))if(su(S))c=S;else{d.pop();continue}}if(S===void 0&&b&&u.push([l,c]),h)d.pop();else{var v;i={inArray:a,index:o,keys:s,edits:u,prev:i},a=Array.isArray(c),s=a?c:(v=r[c.kind])!==null&&v!==void 0?v:[],o=-1,u=[],f&&p.push(f),f=c}}while(i!==void 0);return u.length!==0?u[u.length-1][1]:t}function gm(t,e){const r=t[e];return typeof r=="object"?r:typeof r=="function"?{enter:r,leave:void 0}:{enter:t.enter,leave:t.leave}}function ym(t){return xe(t,bm)}const vm=80,bm={Name:{leave:t=>t.value},Variable:{leave:t=>"$"+t.name},Document:{leave:t=>C(t.definitions,`

`)},OperationDefinition:{leave(t){const e=Zi(t.variableDefinitions)?q(`(
`,C(t.variableDefinitions,`
`),`
)`):q("(",C(t.variableDefinitions,", "),")"),r=q("",t.description,`
`)+C([t.operation,C([t.name,e]),C(t.directives," ")]," ");return(r==="query"?"":r+" ")+t.selectionSet}},VariableDefinition:{leave:({variable:t,type:e,defaultValue:r,directives:n,description:i})=>q("",i,`
`)+t+": "+e+q(" = ",r)+q(" ",C(n," "))},SelectionSet:{leave:({selections:t})=>ke(t)},Field:{leave({alias:t,name:e,arguments:r,directives:n,selectionSet:i}){const a=q("",t,": ")+e;let s=a+q("(",C(r,", "),")");return s.length>vm&&(s=a+q(`(
`,ln(C(r,`
`)),`
)`)),C([s,C(n," "),i]," ")}},Argument:{leave:({name:t,value:e})=>t+": "+e},FragmentSpread:{leave:({name:t,directives:e})=>"..."+t+q(" ",C(e," "))},InlineFragment:{leave:({typeCondition:t,directives:e,selectionSet:r})=>C(["...",q("on ",t),C(e," "),r]," ")},FragmentDefinition:{leave:({name:t,typeCondition:e,variableDefinitions:r,directives:n,selectionSet:i,description:a})=>q("",a,`
`)+`fragment ${t}${q("(",C(r,", "),")")} on ${e} ${q("",C(n," ")," ")}`+i},IntValue:{leave:({value:t})=>t},FloatValue:{leave:({value:t})=>t},StringValue:{leave:({value:t,block:e})=>e?Gh(t):dm(t)},BooleanValue:{leave:({value:t})=>t?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:t})=>t},ListValue:{leave:({values:t})=>"["+C(t,", ")+"]"},ObjectValue:{leave:({fields:t})=>"{"+C(t,", ")+"}"},ObjectField:{leave:({name:t,value:e})=>t+": "+e},Directive:{leave:({name:t,arguments:e})=>"@"+t+q("(",C(e,", "),")")},NamedType:{leave:({name:t})=>t},ListType:{leave:({type:t})=>"["+t+"]"},NonNullType:{leave:({type:t})=>t+"!"},SchemaDefinition:{leave:({description:t,directives:e,operationTypes:r})=>q("",t,`
`)+C(["schema",C(e," "),ke(r)]," ")},OperationTypeDefinition:{leave:({operation:t,type:e})=>t+": "+e},ScalarTypeDefinition:{leave:({description:t,name:e,directives:r})=>q("",t,`
`)+C(["scalar",e,C(r," ")]," ")},ObjectTypeDefinition:{leave:({description:t,name:e,interfaces:r,directives:n,fields:i})=>q("",t,`
`)+C(["type",e,q("implements ",C(r," & ")),C(n," "),ke(i)]," ")},FieldDefinition:{leave:({description:t,name:e,arguments:r,type:n,directives:i})=>q("",t,`
`)+e+(Zi(r)?q(`(
`,ln(C(r,`
`)),`
)`):q("(",C(r,", "),")"))+": "+n+q(" ",C(i," "))},InputValueDefinition:{leave:({description:t,name:e,type:r,defaultValue:n,directives:i})=>q("",t,`
`)+C([e+": "+r,q("= ",n),C(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:t,name:e,interfaces:r,directives:n,fields:i})=>q("",t,`
`)+C(["interface",e,q("implements ",C(r," & ")),C(n," "),ke(i)]," ")},UnionTypeDefinition:{leave:({description:t,name:e,directives:r,types:n})=>q("",t,`
`)+C(["union",e,C(r," "),q("= ",C(n," | "))]," ")},EnumTypeDefinition:{leave:({description:t,name:e,directives:r,values:n})=>q("",t,`
`)+C(["enum",e,C(r," "),ke(n)]," ")},EnumValueDefinition:{leave:({description:t,name:e,directives:r})=>q("",t,`
`)+C([e,C(r," ")]," ")},InputObjectTypeDefinition:{leave:({description:t,name:e,directives:r,fields:n})=>q("",t,`
`)+C(["input",e,C(r," "),ke(n)]," ")},DirectiveDefinition:{leave:({description:t,name:e,arguments:r,directives:n,repeatable:i,locations:a})=>q("",t,`
`)+"directive @"+e+(Zi(r)?q(`(
`,ln(C(r,`
`)),`
)`):q("(",C(r,", "),")"))+q(" ",C(n," "))+(i?" repeatable":"")+" on "+C(a," | ")},SchemaExtension:{leave:({directives:t,operationTypes:e})=>C(["extend schema",C(t," "),ke(e)]," ")},ScalarTypeExtension:{leave:({name:t,directives:e})=>C(["extend scalar",t,C(e," ")]," ")},ObjectTypeExtension:{leave:({name:t,interfaces:e,directives:r,fields:n})=>C(["extend type",t,q("implements ",C(e," & ")),C(r," "),ke(n)]," ")},InterfaceTypeExtension:{leave:({name:t,interfaces:e,directives:r,fields:n})=>C(["extend interface",t,q("implements ",C(e," & ")),C(r," "),ke(n)]," ")},UnionTypeExtension:{leave:({name:t,directives:e,types:r})=>C(["extend union",t,C(e," "),q("= ",C(r," | "))]," ")},EnumTypeExtension:{leave:({name:t,directives:e,values:r})=>C(["extend enum",t,C(e," "),ke(r)]," ")},InputObjectTypeExtension:{leave:({name:t,directives:e,fields:r})=>C(["extend input",t,C(e," "),ke(r)]," ")},DirectiveExtension:{leave:({name:t,directives:e})=>C(["extend directive @"+t,C(e," ")]," ")},TypeCoordinate:{leave:({name:t})=>t},MemberCoordinate:{leave:({name:t,memberName:e})=>C([t,q(".",e)])},ArgumentCoordinate:{leave:({name:t,fieldName:e,argumentName:r})=>C([t,q(".",e),q("(",r,":)")])},DirectiveCoordinate:{leave:({name:t})=>C(["@",t])},DirectiveArgumentCoordinate:{leave:({name:t,argumentName:e})=>C(["@",t,q("(",e,":)")])}};function C(t,e=""){var r;return(r=t?.filter(n=>n).join(e))!==null&&r!==void 0?r:""}function ke(t){return q(`{
`,ln(C(t,`
`)),`
}`)}function q(t,e,r=""){return e!=null&&e!==""?t+e+r:""}function ln(t){return q("  ",t.replace(/\n/g,`
  `))}function Zi(t){var e;return(e=t?.some(r=>r.includes(`
`)))!==null&&e!==void 0?e:!1}function mu(t){return t.kind===F.FIELD||t.kind===F.FRAGMENT_SPREAD||t.kind===F.INLINE_FRAGMENT}function vr(t,e){var r=t.directives;return!r||!r.length?!0:Em(r).every(function(n){var i=n.directive,a=n.ifArgument,s=!1;return a.value.kind==="Variable"?(s=e&&e[a.value.name.value],P(s!==void 0,78,i.name.value)):s=a.value.value,i.name.value==="skip"?!s:s})}function br(t,e,r){var n=new Set(t),i=n.size;return xe(e,{Directive:function(a){if(n.delete(a.name.value)&&(!r||!n.size))return cn}}),r?!n.size:n.size<i}function Sm(t){return t&&br(["client","export"],t,!0)}function _m(t){var e=t.name.value;return e==="skip"||e==="include"}function Em(t){var e=[];return t&&t.length&&t.forEach(function(r){if(_m(r)){var n=r.arguments,i=r.name.value;P(n&&n.length===1,79,i);var a=n[0];P(a.name&&a.name.value==="if",80,i);var s=a.value;P(s&&(s.kind==="Variable"||s.kind==="BooleanValue"),81,i),e.push({directive:r,ifArgument:a})}}),e}function wm(t){var e,r,n=(e=t.directives)===null||e===void 0?void 0:e.find(function(a){var s=a.name;return s.value==="unmask"});if(!n)return"mask";var i=(r=n.arguments)===null||r===void 0?void 0:r.find(function(a){var s=a.name;return s.value==="mode"});return globalThis.__DEV__!==!1&&i&&(i.value.kind===F.VARIABLE?globalThis.__DEV__!==!1&&P.warn(82):i.value.kind!==F.STRING?globalThis.__DEV__!==!1&&P.warn(83):i.value.value!=="migrate"&&globalThis.__DEV__!==!1&&P.warn(84,i.value.value)),i&&"value"in i.value&&i.value.value==="migrate"?"migrate":"unmask"}const Dm=()=>Object.create(null),{forEach:Tm,slice:gu}=Array.prototype,{hasOwnProperty:Om}=Object.prototype;class qe{constructor(e=!0,r=Dm){this.weakness=e,this.makeData=r}lookup(){return this.lookupArray(arguments)}lookupArray(e){let r=this;return Tm.call(e,n=>r=r.getChildTrie(n)),Om.call(r,"data")?r.data:r.data=this.makeData(gu.call(e))}peek(){return this.peekArray(arguments)}peekArray(e){let r=this;for(let n=0,i=e.length;r&&n<i;++n){const a=r.mapFor(e[n],!1);r=a&&a.get(e[n])}return r&&r.data}remove(){return this.removeArray(arguments)}removeArray(e){let r;if(e.length){const n=e[0],i=this.mapFor(n,!1),a=i&&i.get(n);a&&(r=a.removeArray(gu.call(e,1)),!a.data&&!a.weak&&!(a.strong&&a.strong.size)&&i.delete(n))}else r=this.data,delete this.data;return r}getChildTrie(e){const r=this.mapFor(e,!0);let n=r.get(e);return n||r.set(e,n=new qe(this.weakness,this.makeData)),n}mapFor(e,r){return this.weakness&&xm(e)?this.weak||(r?this.weak=new WeakMap:void 0):this.strong||(r?this.strong=new Map:void 0)}}function xm(t){switch(typeof t){case"object":if(t===null)break;case"function":return!0}return!1}var km=Oe(function(){return navigator.product})=="ReactNative",vt=typeof WeakMap=="function"&&!(km&&!global.HermesInternal),ea=typeof WeakSet=="function",yu=typeof Symbol=="function"&&typeof Symbol.for=="function",fn=yu&&Symbol.asyncIterator;Oe(function(){return window.document.createElement}),Oe(function(){return navigator.userAgent.indexOf("jsdom")>=0});function ae(t){return t!==null&&typeof t=="object"}function Im(t,e){var r=e,n=[];t.definitions.forEach(function(a){if(a.kind==="OperationDefinition")throw ye(85,a.operation,a.name?" named '".concat(a.name.value,"'"):"");a.kind==="FragmentDefinition"&&n.push(a)}),typeof r>"u"&&(P(n.length===1,86,n.length),r=n[0].name.value);var i=E(E({},t),{definitions:me([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:r}}]}}],t.definitions,!0)});return i}function Rt(t){t===void 0&&(t=[]);var e={};return t.forEach(function(r){e[r.name.value]=r}),e}function dn(t,e){switch(t.kind){case"InlineFragment":return t;case"FragmentSpread":{var r=t.name.value;if(typeof e=="function")return e(r);var n=e&&e[r];return P(n,87,r),n||null}default:return null}}function Fm(t){var e=!0;return xe(t,{FragmentSpread:function(r){if(e=!!r.directives&&r.directives.some(function(n){return n.name.value==="unmask"}),!e)return cn}}),e}function $m(){}class ta{constructor(e=1/0,r=$m){this.max=e,this.dispose=r,this.map=new Map,this.newest=null,this.oldest=null}has(e){return this.map.has(e)}get(e){const r=this.getNode(e);return r&&r.value}get size(){return this.map.size}getNode(e){const r=this.map.get(e);if(r&&r!==this.newest){const{older:n,newer:i}=r;i&&(i.older=n),n&&(n.newer=i),r.older=this.newest,r.older.newer=r,r.newer=null,this.newest=r,r===this.oldest&&(this.oldest=i)}return r}set(e,r){let n=this.getNode(e);return n?n.value=r:(n={key:e,value:r,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.map.set(e,n),n.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(e){const r=this.map.get(e);return r?(r===this.newest&&(this.newest=r.older),r===this.oldest&&(this.oldest=r.newer),r.newer&&(r.newer.older=r.older),r.older&&(r.older.newer=r.newer),this.map.delete(e),this.dispose(r.value,e),!0):!1}}function ra(){}const Cm=ra,Am=typeof WeakRef<"u"?WeakRef:function(t){return{deref:()=>t}},Pm=typeof WeakMap<"u"?WeakMap:Map,Nm=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:ra,unregister:ra}},Rm=10024;class pn{constructor(e=1/0,r=Cm){this.max=e,this.dispose=r,this.map=new Pm,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{const n=this.unfinalizedNodes.values();for(let i=0;i<Rm;i++){const a=n.next().value;if(!a)break;this.unfinalizedNodes.delete(a);const s=a.key;delete a.key,a.keyRef=new Am(s),this.registry.register(s,a,a)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new Nm(this.deleteNode.bind(this))}has(e){return this.map.has(e)}get(e){const r=this.getNode(e);return r&&r.value}getNode(e){const r=this.map.get(e);if(r&&r!==this.newest){const{older:n,newer:i}=r;i&&(i.older=n),n&&(n.newer=i),r.older=this.newest,r.older.newer=r,r.newer=null,this.newest=r,r===this.oldest&&(this.oldest=i)}return r}set(e,r){let n=this.getNode(e);return n?n.value=r:(n={key:e,value:r,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.scheduleFinalization(n),this.map.set(e,n),this.size++,n.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(e){e===this.newest&&(this.newest=e.older),e===this.oldest&&(this.oldest=e.newer),e.newer&&(e.newer.older=e.older),e.older&&(e.older.newer=e.newer),this.size--;const r=e.key||e.keyRef&&e.keyRef.deref();this.dispose(e.value,r),e.keyRef?this.registry.unregister(e):this.unfinalizedNodes.delete(e),r&&this.map.delete(r)}delete(e){const r=this.map.get(e);return r?(this.deleteNode(r),!0):!1}scheduleFinalization(e){this.unfinalizedNodes.add(e),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}}var na=new WeakSet;function vu(t){t.size<=(t.max||-1)||na.has(t)||(na.add(t),setTimeout(function(){t.clean(),na.delete(t)},100))}var bu=function(t,e){var r=new pn(t,e);return r.set=function(n,i){var a=pn.prototype.set.call(this,n,i);return vu(this),a},r},Mm=function(t,e){var r=new ta(t,e);return r.set=function(n,i){var a=ta.prototype.set.call(this,n,i);return vu(this),a},r},Lm=Symbol.for("apollo.cacheSize"),Ue=E({},Bi[Lm]),bt={};function Su(t,e){bt[t]=e}var jm=globalThis.__DEV__!==!1?Bm:void 0,qm=globalThis.__DEV__!==!1?Gm:void 0,Um=globalThis.__DEV__!==!1?_u:void 0;function Vm(){var t={parser:1e3,canonicalStringify:1e3,print:2e3,"documentTransform.cache":2e3,"queryManager.getDocumentInfo":2e3,"PersistedQueryLink.persistedQueryHashes":2e3,"fragmentRegistry.transform":2e3,"fragmentRegistry.lookup":1e3,"fragmentRegistry.findFragmentSpreads":4e3,"cache.fragmentQueryDocuments":1e3,"removeTypenameFromVariables.getVariableDefinitions":2e3,"inMemoryCache.maybeBroadcastWatch":5e3,"inMemoryCache.executeSelectionSet":5e4,"inMemoryCache.executeSubSelectedArray":1e4};return Object.fromEntries(Object.entries(t).map(function(e){var r=e[0],n=e[1];return[r,Ue[r]||n]}))}function Bm(){var t,e,r,n,i;if(globalThis.__DEV__===!1)throw new Error("only supported in development mode");return{limits:Vm(),sizes:E({print:(t=bt.print)===null||t===void 0?void 0:t.call(bt),parser:(e=bt.parser)===null||e===void 0?void 0:e.call(bt),canonicalStringify:(r=bt.canonicalStringify)===null||r===void 0?void 0:r.call(bt),links:aa(this.link),queryManager:{getDocumentInfo:this.queryManager.transformCache.size,documentTransforms:wu(this.queryManager.documentTransform)}},(i=(n=this.cache).getMemoryInternals)===null||i===void 0?void 0:i.call(n))}}function _u(){return{cache:{fragmentQueryDocuments:et(this.getFragmentDoc)}}}function Gm(){var t=this.config.fragments;return E(E({},_u.apply(this)),{addTypenameDocumentTransform:wu(this.addTypenameTransform),inMemoryCache:{executeSelectionSet:et(this.storeReader.executeSelectionSet),executeSubSelectedArray:et(this.storeReader.executeSubSelectedArray),maybeBroadcastWatch:et(this.maybeBroadcastWatch)},fragmentRegistry:{findFragmentSpreads:et(t?.findFragmentSpreads),lookup:et(t?.lookup),transform:et(t?.transform)}})}function zm(t){return!!t&&"dirtyKey"in t}function et(t){return zm(t)?t.size:void 0}function Eu(t){return t!=null}function wu(t){return ia(t).map(function(e){return{cache:e}})}function ia(t){return t?me(me([et(t?.performWork)],ia(t?.left),!0),ia(t?.right),!0).filter(Eu):[]}function aa(t){var e;return t?me(me([(e=t?.getMemoryInternals)===null||e===void 0?void 0:e.call(t)],aa(t?.left),!0),aa(t?.right),!0).filter(Eu):[]}var tt=Object.assign(function(e){return JSON.stringify(e,Qm)},{reset:function(){Mt=new Mm(Ue.canonicalStringify||1e3)}});globalThis.__DEV__!==!1&&Su("canonicalStringify",function(){return Mt.size});var Mt;tt.reset();function Qm(t,e){if(e&&typeof e=="object"){var r=Object.getPrototypeOf(e);if(r===Object.prototype||r===null){var n=Object.keys(e);if(n.every(Wm))return e;var i=JSON.stringify(n),a=Mt.get(i);if(!a){n.sort();var s=JSON.stringify(n);a=Mt.get(s)||n,Mt.set(i,a),Mt.set(s,a)}var o=Object.create(r);return a.forEach(function(u){o[u]=e[u]}),o}}return e}function Wm(t,e,r){return e===0||r[e-1]<=t}function Lt(t){return{__ref:String(t)}}function Q(t){return!!(t&&typeof t=="object"&&typeof t.__ref=="string")}function Hm(t){return ae(t)&&t.kind==="Document"&&Array.isArray(t.definitions)}function Ym(t){return t.kind==="StringValue"}function Jm(t){return t.kind==="BooleanValue"}function Xm(t){return t.kind==="IntValue"}function Km(t){return t.kind==="FloatValue"}function Zm(t){return t.kind==="Variable"}function eg(t){return t.kind==="ObjectValue"}function tg(t){return t.kind==="ListValue"}function rg(t){return t.kind==="EnumValue"}function ng(t){return t.kind==="NullValue"}function jt(t,e,r,n){if(Xm(r)||Km(r))t[e.value]=Number(r.value);else if(Jm(r)||Ym(r))t[e.value]=r.value;else if(eg(r)){var i={};r.fields.map(function(s){return jt(i,s.name,s.value,n)}),t[e.value]=i}else if(Zm(r)){var a=(n||{})[r.name.value];t[e.value]=a}else if(tg(r))t[e.value]=r.values.map(function(s){var o={};return jt(o,e,s,n),o[e.value]});else if(rg(r))t[e.value]=r.value;else if(ng(r))t[e.value]=null;else throw ye(96,e.value,r.kind)}function ig(t,e){var r=null;t.directives&&(r={},t.directives.forEach(function(i){r[i.name.value]={},i.arguments&&i.arguments.forEach(function(a){var s=a.name,o=a.value;return jt(r[i.name.value],s,o,e)})}));var n=null;return t.arguments&&t.arguments.length&&(n={},t.arguments.forEach(function(i){var a=i.name,s=i.value;return jt(n,a,s,e)})),Du(t.name.value,n,r)}var ag=["connection","include","skip","client","rest","export","nonreactive"],Sr=tt,Du=Object.assign(function(t,e,r){if(e&&r&&r.connection&&r.connection.key)if(r.connection.filter&&r.connection.filter.length>0){var n=r.connection.filter?r.connection.filter:[];n.sort();var i={};return n.forEach(function(o){i[o]=e[o]}),"".concat(r.connection.key,"(").concat(Sr(i),")")}else return r.connection.key;var a=t;if(e){var s=Sr(e);a+="(".concat(s,")")}return r&&Object.keys(r).forEach(function(o){ag.indexOf(o)===-1&&(r[o]&&Object.keys(r[o]).length?a+="@".concat(o,"(").concat(Sr(r[o]),")"):a+="@".concat(o))}),a},{setStringify:function(t){var e=Sr;return Sr=t,e}});function hn(t,e){if(t.arguments&&t.arguments.length){var r={};return t.arguments.forEach(function(n){var i=n.name,a=n.value;return jt(r,i,a,e)}),r}return null}function Ve(t){return t.alias?t.alias.value:t.name.value}function sa(t,e,r){for(var n,i=0,a=e.selections;i<a.length;i++){var s=a[i];if(rt(s)){if(s.name.value==="__typename")return t[Ve(s)]}else n?n.push(s):n=[s]}if(typeof t.__typename=="string")return t.__typename;if(n)for(var o=0,u=n;o<u.length;o++){var s=u[o],c=sa(t,dn(s,r).selectionSet,r);if(typeof c=="string")return c}}function rt(t){return t.kind==="Field"}function sg(t){return t.kind==="InlineFragment"}function qt(t){P(t&&t.kind==="Document",88);var e=t.definitions.filter(function(r){return r.kind!=="FragmentDefinition"}).map(function(r){if(r.kind!=="OperationDefinition")throw ye(89,r.kind);return r});return P(e.length<=1,90,e.length),t}function St(t){return qt(t),t.definitions.filter(function(e){return e.kind==="OperationDefinition"})[0]}function _r(t){return t.definitions.filter(function(e){return e.kind==="OperationDefinition"&&!!e.name}).map(function(e){return e.name.value})[0]||null}function Ut(t){return t.definitions.filter(function(e){return e.kind==="FragmentDefinition"})}function Tu(t){var e=St(t);return P(e&&e.operation==="query",91),e}function Ou(t){P(t.kind==="Document",92),P(t.definitions.length<=1,93);var e=t.definitions[0];return P(e.kind==="FragmentDefinition",94),e}function Vt(t){qt(t);for(var e,r=0,n=t.definitions;r<n.length;r++){var i=n[r];if(i.kind==="OperationDefinition"){var a=i.operation;if(a==="query"||a==="mutation"||a==="subscription")return i}i.kind==="FragmentDefinition"&&!e&&(e=i)}if(e)return e;throw ye(95)}function oa(t){var e=Object.create(null),r=t&&t.variableDefinitions;return r&&r.length&&r.forEach(function(n){n.defaultValue&&jt(e,n.variable.name,n.defaultValue)}),e}let de=null;const xu={};let og=1;const ug=()=>class{constructor(){this.id=["slot",og++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let e=de;e;e=e.parent)if(this.id in e.slots){const r=e.slots[this.id];if(r===xu)break;return e!==de&&(de.slots[this.id]=r),!0}return de&&(de.slots[this.id]=xu),!1}getValue(){if(this.hasValue())return de.slots[this.id]}withValue(e,r,n,i){const a={__proto__:null,[this.id]:e},s=de;de={parent:s,slots:a};try{return r.apply(i,n)}finally{de=s}}static bind(e){const r=de;return function(){const n=de;try{return de=r,e.apply(this,arguments)}finally{de=n}}}static noContext(e,r,n){if(de){const i=de;try{return de=null,e.apply(n,r)}finally{de=i}}else return e.apply(n,r)}};function ku(t){try{return t()}catch{}}const ua="@wry/context:Slot",Iu=ku(()=>globalThis)||ku(()=>global)||Object.create(null),Er=Iu[ua]||Array[ua]||(function(t){try{Object.defineProperty(Iu,ua,{value:t,enumerable:!1,writable:!1,configurable:!0})}finally{return t}})(ug()),{bind:$b,noContext:Cb}=Er,mn=new Er,{hasOwnProperty:cg}=Object.prototype,ca=Array.from||function(t){const e=[];return t.forEach(r=>e.push(r)),e};function la(t){const{unsubscribe:e}=t;typeof e=="function"&&(t.unsubscribe=void 0,e())}const wr=[],lg=100;function Bt(t,e){if(!t)throw new Error(e||"assertion failure")}function Fu(t,e){const r=t.length;return r>0&&r===e.length&&t[r-1]===e[r-1]}function $u(t){switch(t.length){case 0:throw new Error("unknown value");case 1:return t[0];case 2:throw t[1]}}function Cu(t){return t.slice(0)}class gn{constructor(e){this.fn=e,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++gn.count}peek(){if(this.value.length===1&&!nt(this))return Au(this),this.value[0]}recompute(e){return Bt(!this.recomputing,"already recomputing"),Au(this),nt(this)?fg(this,e):$u(this.value)}setDirty(){this.dirty||(this.dirty=!0,Pu(this),la(this))}dispose(){this.setDirty(),ju(this),fa(this,(e,r)=>{e.setDirty(),qu(e,this)})}forget(){this.dispose()}dependOn(e){e.add(this),this.deps||(this.deps=wr.pop()||new Set),this.deps.add(e)}forgetDeps(){this.deps&&(ca(this.deps).forEach(e=>e.delete(this)),this.deps.clear(),wr.push(this.deps),this.deps=null)}}gn.count=0;function Au(t){const e=mn.getValue();if(e)return t.parents.add(e),e.childValues.has(t)||e.childValues.set(t,[]),nt(t)?Ru(e,t):Mu(e,t),e}function fg(t,e){return ju(t),mn.withValue(t,dg,[t,e]),hg(t,e)&&pg(t),$u(t.value)}function dg(t,e){t.recomputing=!0;const{normalizeResult:r}=t;let n;r&&t.value.length===1&&(n=Cu(t.value)),t.value.length=0;try{if(t.value[0]=t.fn.apply(null,e),r&&n&&!Fu(n,t.value))try{t.value[0]=r(t.value[0],n[0])}catch{}}catch(i){t.value[1]=i}t.recomputing=!1}function nt(t){return t.dirty||!!(t.dirtyChildren&&t.dirtyChildren.size)}function pg(t){t.dirty=!1,!nt(t)&&Nu(t)}function Pu(t){fa(t,Ru)}function Nu(t){fa(t,Mu)}function fa(t,e){const r=t.parents.size;if(r){const n=ca(t.parents);for(let i=0;i<r;++i)e(n[i],t)}}function Ru(t,e){Bt(t.childValues.has(e)),Bt(nt(e));const r=!nt(t);if(!t.dirtyChildren)t.dirtyChildren=wr.pop()||new Set;else if(t.dirtyChildren.has(e))return;t.dirtyChildren.add(e),r&&Pu(t)}function Mu(t,e){Bt(t.childValues.has(e)),Bt(!nt(e));const r=t.childValues.get(e);r.length===0?t.childValues.set(e,Cu(e.value)):Fu(r,e.value)||t.setDirty(),Lu(t,e),!nt(t)&&Nu(t)}function Lu(t,e){const r=t.dirtyChildren;r&&(r.delete(e),r.size===0&&(wr.length<lg&&wr.push(r),t.dirtyChildren=null))}function ju(t){t.childValues.size>0&&t.childValues.forEach((e,r)=>{qu(t,r)}),t.forgetDeps(),Bt(t.dirtyChildren===null)}function qu(t,e){e.parents.delete(t),t.childValues.delete(e),Lu(t,e)}function hg(t,e){if(typeof t.subscribe=="function")try{la(t),t.unsubscribe=t.subscribe.apply(null,e)}catch{return t.setDirty(),!1}return!0}const mg={setDirty:!0,dispose:!0,forget:!0};function Uu(t){const e=new Map;function r(n){const i=mn.getValue();if(i){let a=e.get(n);a||e.set(n,a=new Set),i.dependOn(a)}}return r.dirty=function(i,a){const s=e.get(i);if(s){const o=a&&cg.call(mg,a)?a:"setDirty";ca(s).forEach(u=>u[o]()),e.delete(i),la(s)}},r}let Vu;function gg(...t){return(Vu||(Vu=new qe(typeof WeakMap=="function"))).lookupArray(t)}const da=new Set;function Dr(t,{max:e=Math.pow(2,16),keyArgs:r,makeCacheKey:n=gg,normalizeResult:i,subscribe:a,cache:s=ta}=Object.create(null)){const o=typeof s=="function"?new s(e,d=>d.dispose()):s,u=function(){const d=n.apply(null,r?r.apply(null,arguments):arguments);if(d===void 0)return t.apply(null,arguments);let p=o.get(d);p||(o.set(d,p=new gn(t)),p.normalizeResult=i,p.subscribe=a,p.forget=()=>o.delete(d));const y=p.recompute(Array.prototype.slice.call(arguments));return o.set(d,p),da.add(o),mn.hasValue()||(da.forEach(m=>m.clean()),da.clear()),y};Object.defineProperty(u,"size",{get:()=>o.size,configurable:!1,enumerable:!1}),Object.freeze(u.options={max:e,keyArgs:r,makeCacheKey:n,normalizeResult:i,subscribe:a,cache:o});function c(d){const p=d&&o.get(d);p&&p.setDirty()}u.dirtyKey=c,u.dirty=function(){c(n.apply(null,arguments))};function l(d){const p=d&&o.get(d);if(p)return p.peek()}u.peekKey=l,u.peek=function(){return l(n.apply(null,arguments))};function f(d){return d?o.delete(d):!1}return u.forgetKey=f,u.forget=function(){return f(n.apply(null,arguments))},u.makeCacheKey=n,u.getKey=r?function(){return n.apply(null,r.apply(null,arguments))}:n,Object.freeze(u)}function yg(t){return t}var Bu=(function(){function t(e,r){r===void 0&&(r=Object.create(null)),this.resultCache=ea?new WeakSet:new Set,this.transform=e,r.getCacheKey&&(this.getCacheKey=r.getCacheKey),this.cached=r.cache!==!1,this.resetCache()}return t.prototype.getCacheKey=function(e){return[e]},t.identity=function(){return new t(yg,{cache:!1})},t.split=function(e,r,n){return n===void 0&&(n=t.identity()),Object.assign(new t(function(i){var a=e(i)?r:n;return a.transformDocument(i)},{cache:!1}),{left:r,right:n})},t.prototype.resetCache=function(){var e=this;if(this.cached){var r=new qe(vt);this.performWork=Dr(t.prototype.performWork.bind(this),{makeCacheKey:function(n){var i=e.getCacheKey(n);if(i)return P(Array.isArray(i),77),r.lookupArray(i)},max:Ue["documentTransform.cache"],cache:pn})}},t.prototype.performWork=function(e){return qt(e),this.transform(e)},t.prototype.transformDocument=function(e){if(this.resultCache.has(e))return e;var r=this.performWork(e);return this.resultCache.add(r),r},t.prototype.concat=function(e){var r=this;return Object.assign(new t(function(n){return e.transformDocument(r.transformDocument(n))},{cache:!1}),{left:this,right:e})},t})(),Tr,it=Object.assign(function(t){var e=Tr.get(t);return e||(e=ym(t),Tr.set(t,e)),e},{reset:function(){Tr=new bu(Ue.print||2e3)}});it.reset(),globalThis.__DEV__!==!1&&Su("print",function(){return Tr?Tr.size:0});var oe=Array.isArray;function Ae(t){return Array.isArray(t)&&t.length>0}var Gu={kind:F.FIELD,name:{kind:F.NAME,value:"__typename"}};function zu(t,e){return!t||t.selectionSet.selections.every(function(r){return r.kind===F.FRAGMENT_SPREAD&&zu(e[r.name.value],e)})}function vg(t){return zu(St(t)||Ou(t),Rt(Ut(t)))?null:t}function bg(t){var e=new Map,r=new Map;return t.forEach(function(n){n&&(n.name?e.set(n.name,n):n.test&&r.set(n.test,n))}),function(n){var i=e.get(n.name.value);return!i&&r.size&&r.forEach(function(a,s){s(n)&&(i=a)}),i}}function Qu(t){var e=new Map;return function(n){n===void 0&&(n=t);var i=e.get(n);return i||e.set(n,i={variables:new Set,fragmentSpreads:new Set}),i}}function Wu(t,e){qt(e);for(var r=Qu(""),n=Qu(""),i=function(h){for(var b=0,S=void 0;b<h.length&&(S=h[b]);++b)if(!oe(S)){if(S.kind===F.OPERATION_DEFINITION)return r(S.name&&S.name.value);if(S.kind===F.FRAGMENT_DEFINITION)return n(S.name.value)}return globalThis.__DEV__!==!1&&P.error(97),null},a=0,s=e.definitions.length-1;s>=0;--s)e.definitions[s].kind===F.OPERATION_DEFINITION&&++a;var o=bg(t),u=function(h){return Ae(h)&&h.map(o).some(function(b){return b&&b.remove})},c=new Map,l=!1,f={enter:function(h){if(u(h.directives))return l=!0,null}},d=xe(e,{Field:f,InlineFragment:f,VariableDefinition:{enter:function(){return!1}},Variable:{enter:function(h,b,S,w,D){var x=i(D);x&&x.variables.add(h.name.value)}},FragmentSpread:{enter:function(h,b,S,w,D){if(u(h.directives))return l=!0,null;var x=i(D);x&&x.fragmentSpreads.add(h.name.value)}},FragmentDefinition:{enter:function(h,b,S,w){c.set(JSON.stringify(w),h)},leave:function(h,b,S,w){var D=c.get(JSON.stringify(w));if(h===D)return h;if(a>0&&h.selectionSet.selections.every(function(x){return x.kind===F.FIELD&&x.name.value==="__typename"}))return n(h.name.value).removed=!0,l=!0,null}},Directive:{leave:function(h){if(o(h))return l=!0,null}}});if(!l)return e;var p=function(h){return h.transitiveVars||(h.transitiveVars=new Set(h.variables),h.removed||h.fragmentSpreads.forEach(function(b){p(n(b)).transitiveVars.forEach(function(S){h.transitiveVars.add(S)})})),h},y=new Set;d.definitions.forEach(function(h){h.kind===F.OPERATION_DEFINITION?p(r(h.name&&h.name.value)).fragmentSpreads.forEach(function(b){y.add(b)}):h.kind===F.FRAGMENT_DEFINITION&&a===0&&!n(h.name.value).removed&&y.add(h.name.value)}),y.forEach(function(h){p(n(h)).fragmentSpreads.forEach(function(b){y.add(b)})});var m=function(h){return!!(!y.has(h)||n(h).removed)},v={enter:function(h){if(m(h.name.value))return null}};return vg(xe(d,{FragmentSpread:v,FragmentDefinition:v,OperationDefinition:{leave:function(h){if(h.variableDefinitions){var b=p(r(h.name&&h.name.value)).transitiveVars;if(b.size<h.variableDefinitions.length)return E(E({},h),{variableDefinitions:h.variableDefinitions.filter(function(S){return b.has(S.variable.name.value)})})}}}}))}var pa=Object.assign(function(t){return xe(t,{SelectionSet:{enter:function(e,r,n){if(!(n&&n.kind===F.OPERATION_DEFINITION)){var i=e.selections;if(i){var a=i.some(function(o){return rt(o)&&(o.name.value==="__typename"||o.name.value.lastIndexOf("__",0)===0)});if(!a){var s=n;if(!(rt(s)&&s.directives&&s.directives.some(function(o){return o.name.value==="export"})))return E(E({},e),{selections:me(me([],i,!0),[Gu],!1)})}}}}}})},{added:function(t){return t===Gu}});function Sg(t){var e=Vt(t),r=e.operation;if(r==="query")return t;var n=xe(t,{OperationDefinition:{enter:function(i){return E(E({},i),{operation:"query"})}}});return n}function Hu(t){qt(t);var e=Wu([{test:function(r){return r.name.value==="client"},remove:!0}],t);return e}function _g(t){return qt(t),xe(t,{FragmentSpread:function(e){var r;if(!(!((r=e.directives)===null||r===void 0)&&r.some(function(n){return n.name.value==="unmask"})))return E(E({},e),{directives:me(me([],e.directives||[],!0),[{kind:F.DIRECTIVE,name:{kind:F.NAME,value:"nonreactive"}}],!1)})}})}var Eg=Object.prototype.hasOwnProperty;function Yu(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return yn(t)}function yn(t){var e=t[0]||{},r=t.length;if(r>1)for(var n=new at,i=1;i<r;++i)e=n.merge(e,t[i]);return e}var wg=function(t,e,r){return this.merge(t[r],e[r])},at=(function(){function t(e){e===void 0&&(e=wg),this.reconciler=e,this.isObject=ae,this.pastCopies=new Set}return t.prototype.merge=function(e,r){for(var n=this,i=[],a=2;a<arguments.length;a++)i[a-2]=arguments[a];return ae(r)&&ae(e)?(Object.keys(r).forEach(function(s){if(Eg.call(e,s)){var o=e[s];if(r[s]!==o){var u=n.reconciler.apply(n,me([e,r,s],i,!1));u!==o&&(e=n.shallowCopyForMerge(e),e[s]=u)}}else e=n.shallowCopyForMerge(e),e[s]=r[s]}),e):r},t.prototype.shallowCopyForMerge=function(e){return ae(e)&&(this.pastCopies.has(e)||(Array.isArray(e)?e=e.slice(0):e=E({__proto__:Object.getPrototypeOf(e)},e),this.pastCopies.add(e))),e},t})();function Dg(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=Tg(t))||e){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tg(t,e){if(t){if(typeof t=="string")return Ju(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ju(t,e)}}function Ju(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Xu(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function ha(t,e,r){return e&&Xu(t.prototype,e),r&&Xu(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var ma=function(){return typeof Symbol=="function"},ga=function(t){return ma()&&!!Symbol[t]},ya=function(t){return ga(t)?Symbol[t]:"@@"+t};ma()&&!ga("observable")&&(Symbol.observable=Symbol("observable"));var Og=ya("iterator"),va=ya("observable"),Ku=ya("species");function vn(t,e){var r=t[e];if(r!=null){if(typeof r!="function")throw new TypeError(r+" is not a function");return r}}function Or(t){var e=t.constructor;return e!==void 0&&(e=e[Ku],e===null&&(e=void 0)),e!==void 0?e:W}function xg(t){return t instanceof W}function Gt(t){Gt.log?Gt.log(t):setTimeout(function(){throw t})}function bn(t){Promise.resolve().then(function(){try{t()}catch(e){Gt(e)}})}function Zu(t){var e=t._cleanup;if(e!==void 0&&(t._cleanup=void 0,!!e))try{if(typeof e=="function")e();else{var r=vn(e,"unsubscribe");r&&r.call(e)}}catch(n){Gt(n)}}function ba(t){t._observer=void 0,t._queue=void 0,t._state="closed"}function kg(t){var e=t._queue;if(e){t._queue=void 0,t._state="ready";for(var r=0;r<e.length&&(ec(t,e[r].type,e[r].value),t._state!=="closed");++r);}}function ec(t,e,r){t._state="running";var n=t._observer;try{var i=vn(n,e);switch(e){case"next":i&&i.call(n,r);break;case"error":if(ba(t),i)i.call(n,r);else throw r;break;case"complete":ba(t),i&&i.call(n);break}}catch(a){Gt(a)}t._state==="closed"?Zu(t):t._state==="running"&&(t._state="ready")}function Sa(t,e,r){if(t._state!=="closed"){if(t._state==="buffering"){t._queue.push({type:e,value:r});return}if(t._state!=="ready"){t._state="buffering",t._queue=[{type:e,value:r}],bn(function(){return kg(t)});return}ec(t,e,r)}}var Ig=(function(){function t(r,n){this._cleanup=void 0,this._observer=r,this._queue=void 0,this._state="initializing";var i=new Fg(this);try{this._cleanup=n.call(void 0,i)}catch(a){i.error(a)}this._state==="initializing"&&(this._state="ready")}var e=t.prototype;return e.unsubscribe=function(){this._state!=="closed"&&(ba(this),Zu(this))},ha(t,[{key:"closed",get:function(){return this._state==="closed"}}]),t})(),Fg=(function(){function t(r){this._subscription=r}var e=t.prototype;return e.next=function(n){Sa(this._subscription,"next",n)},e.error=function(n){Sa(this._subscription,"error",n)},e.complete=function(){Sa(this._subscription,"complete")},ha(t,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),t})(),W=(function(){function t(r){if(!(this instanceof t))throw new TypeError("Observable cannot be called as a function");if(typeof r!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=r}var e=t.prototype;return e.subscribe=function(n){return(typeof n!="object"||n===null)&&(n={next:n,error:arguments[1],complete:arguments[2]}),new Ig(n,this._subscriber)},e.forEach=function(n){var i=this;return new Promise(function(a,s){if(typeof n!="function"){s(new TypeError(n+" is not a function"));return}function o(){u.unsubscribe(),a()}var u=i.subscribe({next:function(c){try{n(c,o)}catch(l){s(l),u.unsubscribe()}},error:s,complete:a})})},e.map=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=Or(this);return new a(function(s){return i.subscribe({next:function(o){try{o=n(o)}catch(u){return s.error(u)}s.next(o)},error:function(o){s.error(o)},complete:function(){s.complete()}})})},e.filter=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=Or(this);return new a(function(s){return i.subscribe({next:function(o){try{if(!n(o))return}catch(u){return s.error(u)}s.next(o)},error:function(o){s.error(o)},complete:function(){s.complete()}})})},e.reduce=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=Or(this),s=arguments.length>1,o=!1,u=arguments[1],c=u;return new a(function(l){return i.subscribe({next:function(f){var d=!o;if(o=!0,!d||s)try{c=n(c,f)}catch(p){return l.error(p)}else c=f},error:function(f){l.error(f)},complete:function(){if(!o&&!s)return l.error(new TypeError("Cannot reduce an empty sequence"));l.next(c),l.complete()}})})},e.concat=function(){for(var n=this,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];var o=Or(this);return new o(function(u){var c,l=0;function f(d){c=d.subscribe({next:function(p){u.next(p)},error:function(p){u.error(p)},complete:function(){l===a.length?(c=void 0,u.complete()):f(o.from(a[l++]))}})}return f(n),function(){c&&(c.unsubscribe(),c=void 0)}})},e.flatMap=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=Or(this);return new a(function(s){var o=[],u=i.subscribe({next:function(l){if(n)try{l=n(l)}catch(d){return s.error(d)}var f=a.from(l).subscribe({next:function(d){s.next(d)},error:function(d){s.error(d)},complete:function(){var d=o.indexOf(f);d>=0&&o.splice(d,1),c()}});o.push(f)},error:function(l){s.error(l)},complete:function(){c()}});function c(){u.closed&&o.length===0&&s.complete()}return function(){o.forEach(function(l){return l.unsubscribe()}),u.unsubscribe()}})},e[va]=function(){return this},t.from=function(n){var i=typeof this=="function"?this:t;if(n==null)throw new TypeError(n+" is not an object");var a=vn(n,va);if(a){var s=a.call(n);if(Object(s)!==s)throw new TypeError(s+" is not an object");return xg(s)&&s.constructor===i?s:new i(function(o){return s.subscribe(o)})}if(ga("iterator")&&(a=vn(n,Og),a))return new i(function(o){bn(function(){if(!o.closed){for(var u=Dg(a.call(n)),c;!(c=u()).done;){var l=c.value;if(o.next(l),o.closed)return}o.complete()}})});if(Array.isArray(n))return new i(function(o){bn(function(){if(!o.closed){for(var u=0;u<n.length;++u)if(o.next(n[u]),o.closed)return;o.complete()}})});throw new TypeError(n+" is not observable")},t.of=function(){for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];var s=typeof this=="function"?this:t;return new s(function(o){bn(function(){if(!o.closed){for(var u=0;u<i.length;++u)if(o.next(i[u]),o.closed)return;o.complete()}})})},ha(t,null,[{key:Ku,get:function(){return this}}]),t})();ma()&&Object.defineProperty(W,Symbol("extensions"),{value:{symbol:va,hostReportError:Gt},configurable:!0});function $g(t){var e,r=t.Symbol;if(typeof r=="function")if(r.observable)e=r.observable;else{typeof r.for=="function"?e=r.for("https://github.com/benlesh/symbol-observable"):e=r("https://github.com/benlesh/symbol-observable");try{r.observable=e}catch{}}else e="@@observable";return e}var zt;typeof self<"u"?zt=self:typeof window<"u"?zt=window:typeof global<"u"?zt=global:typeof module<"u"?zt=module:zt=Function("return this")(),$g(zt);var tc=W.prototype,rc="@@observable";tc[rc]||(tc[rc]=function(){return this});function Cg(t){return t.catch(function(){}),t}var Ag=Object.prototype.toString;function nc(t){return _a(t)}function _a(t,e){switch(Ag.call(t)){case"[object Array]":{if(e=e||new Map,e.has(t))return e.get(t);var r=t.slice(0);return e.set(t,r),r.forEach(function(i,a){r[a]=_a(i,e)}),r}case"[object Object]":{if(e=e||new Map,e.has(t))return e.get(t);var n=Object.create(Object.getPrototypeOf(t));return e.set(t,n),Object.keys(t).forEach(function(i){n[i]=_a(t[i],e)}),n}default:return t}}function Pg(t){var e=new Set([t]);return e.forEach(function(r){ae(r)&&Ng(r)===r&&Object.getOwnPropertyNames(r).forEach(function(n){ae(r[n])&&e.add(r[n])})}),t}function Ng(t){if(globalThis.__DEV__!==!1&&!Object.isFrozen(t))try{Object.freeze(t)}catch(e){if(e instanceof TypeError)return null;throw e}return t}function Sn(t){return globalThis.__DEV__!==!1&&Pg(t),t}function xr(t,e,r){var n=[];t.forEach(function(i){return i[e]&&n.push(i)}),n.forEach(function(i){return i[e](r)})}function Ea(t,e,r){return new W(function(n){var i={then:function(u){return new Promise(function(c){return c(u())})}};function a(u,c){return function(l){if(u){var f=function(){return n.closed?0:u(l)};i=i.then(f,f).then(function(d){return n.next(d)},function(d){return n.error(d)})}else n[c](l)}}var s={next:a(e,"next"),error:a(r,"error"),complete:function(){i.then(function(){return n.complete()})}},o=t.subscribe(s);return function(){return o.unsubscribe()}})}function ic(t){function e(r){Object.defineProperty(t,r,{value:W})}return yu&&Symbol.species&&e(Symbol.species),e("@@species"),t}function ac(t){return t&&typeof t.then=="function"}var Qt=(function(t){De(e,t);function e(r){var n=t.call(this,function(i){return n.addObserver(i),function(){return n.removeObserver(i)}})||this;return n.observers=new Set,n.promise=new Promise(function(i,a){n.resolve=i,n.reject=a}),n.handlers={next:function(i){n.sub!==null&&(n.latest=["next",i],n.notify("next",i),xr(n.observers,"next",i))},error:function(i){var a=n.sub;a!==null&&(a&&setTimeout(function(){return a.unsubscribe()}),n.sub=null,n.latest=["error",i],n.reject(i),n.notify("error",i),xr(n.observers,"error",i))},complete:function(){var i=n,a=i.sub,s=i.sources,o=s===void 0?[]:s;if(a!==null){var u=o.shift();u?ac(u)?u.then(function(c){return n.sub=c.subscribe(n.handlers)},n.handlers.error):n.sub=u.subscribe(n.handlers):(a&&setTimeout(function(){return a.unsubscribe()}),n.sub=null,n.latest&&n.latest[0]==="next"?n.resolve(n.latest[1]):n.resolve(),n.notify("complete"),xr(n.observers,"complete"))}}},n.nextResultListeners=new Set,n.cancel=function(i){n.reject(i),n.sources=[],n.handlers.error(i)},n.promise.catch(function(i){}),typeof r=="function"&&(r=[new W(r)]),ac(r)?r.then(function(i){return n.start(i)},n.handlers.error):n.start(r),n}return e.prototype.start=function(r){this.sub===void 0&&(this.sources=Array.from(r),this.handlers.complete())},e.prototype.deliverLastMessage=function(r){if(this.latest){var n=this.latest[0],i=r[n];i&&i.call(r,this.latest[1]),this.sub===null&&n==="next"&&r.complete&&r.complete()}},e.prototype.addObserver=function(r){this.observers.has(r)||(this.deliverLastMessage(r),this.observers.add(r))},e.prototype.removeObserver=function(r){this.observers.delete(r)&&this.observers.size<1&&this.handlers.complete()},e.prototype.notify=function(r,n){var i=this.nextResultListeners;i.size&&(this.nextResultListeners=new Set,i.forEach(function(a){return a(r,n)}))},e.prototype.beforeNext=function(r){var n=!1;this.nextResultListeners.add(function(i,a){n||(n=!0,r(i,a))})},e})(W);ic(Qt);function Wt(t){return"incremental"in t}function Rg(t){return"hasNext"in t&&"data"in t}function Mg(t){return Wt(t)||Rg(t)}function Lg(t){return ae(t)&&"payload"in t}function sc(t,e){var r=t,n=new at;return Wt(e)&&Ae(e.incremental)&&e.incremental.forEach(function(i){for(var a=i.data,s=i.path,o=s.length-1;o>=0;--o){var u=s[o],c=!isNaN(+u),l=c?[]:{};l[u]=a,a=l}r=n.merge(r,a)}),r}function _n(t){var e=wa(t);return Ae(e)}function wa(t){var e=Ae(t.errors)?t.errors.slice(0):[];return Wt(t)&&Ae(t.incremental)&&t.incremental.forEach(function(r){r.errors&&e.push.apply(e,r.errors)}),e}function Ht(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=Object.create(null);return t.forEach(function(n){n&&Object.keys(n).forEach(function(i){var a=n[i];a!==void 0&&(r[i]=a)})}),r}function Da(t,e){return Ht(t,e,e.variables&&{variables:Ht(E(E({},t&&t.variables),e.variables))})}function Ta(t){return new W(function(e){e.error(t)})}var oc=function(t,e,r){var n=new Error(r);throw n.name="ServerError",n.response=t,n.statusCode=t.status,n.result=e,n};function jg(t){for(var e=["query","operationName","variables","extensions","context"],r=0,n=Object.keys(t);r<n.length;r++){var i=n[r];if(e.indexOf(i)<0)throw ye(46,i)}return t}function qg(t,e){var r=E({},t),n=function(a){typeof a=="function"?r=E(E({},r),a(r)):r=E(E({},r),a)},i=function(){return E({},r)};return Object.defineProperty(e,"setContext",{enumerable:!1,value:n}),Object.defineProperty(e,"getContext",{enumerable:!1,value:i}),e}function Ug(t){var e={variables:t.variables||{},extensions:t.extensions||{},operationName:t.operationName,query:t.query};return e.operationName||(e.operationName=typeof e.query!="string"?_r(e.query)||void 0:""),e}function Vg(t,e){var r=E({},t),n=new Set(Object.keys(t));return xe(e,{Variable:function(i,a,s){s&&s.kind!=="VariableDefinition"&&n.delete(i.name.value)}}),n.forEach(function(i){delete r[i]}),r}function uc(t,e){return e?e(t):W.of()}function kr(t){return typeof t=="function"?new Ie(t):t}function En(t){return t.request.length<=1}var Ie=(function(){function t(e){e&&(this.request=e)}return t.empty=function(){return new t(function(){return W.of()})},t.from=function(e){return e.length===0?t.empty():e.map(kr).reduce(function(r,n){return r.concat(n)})},t.split=function(e,r,n){var i=kr(r),a=kr(n||new t(uc)),s;return En(i)&&En(a)?s=new t(function(o){return e(o)?i.request(o)||W.of():a.request(o)||W.of()}):s=new t(function(o,u){return e(o)?i.request(o,u)||W.of():a.request(o,u)||W.of()}),Object.assign(s,{left:i,right:a})},t.execute=function(e,r){return e.request(qg(r.context,Ug(jg(r))))||W.of()},t.concat=function(e,r){var n=kr(e);if(En(n))return globalThis.__DEV__!==!1&&P.warn(38,n),n;var i=kr(r),a;return En(i)?a=new t(function(s){return n.request(s,function(o){return i.request(o)||W.of()})||W.of()}):a=new t(function(s,o){return n.request(s,function(u){return i.request(u,o)||W.of()})||W.of()}),Object.assign(a,{left:n,right:i})},t.prototype.split=function(e,r,n){return this.concat(t.split(e,r,n||new t(uc)))},t.prototype.concat=function(e){return t.concat(this,e)},t.prototype.request=function(e,r){throw ye(39)},t.prototype.onError=function(e,r){if(r&&r.error)return r.error(e),!1;throw e},t.prototype.setOnError=function(e){return this.onError=e,this},t})(),Bg=Ie.from,Gg=Ie.split,Oa=Ie.execute;function zg(t){var e,r=t[Symbol.asyncIterator]();return e={next:function(){return r.next()}},e[Symbol.asyncIterator]=function(){return this},e}function Qg(t){var e=null,r=null,n=!1,i=[],a=[];function s(f){if(!r){if(a.length){var d=a.shift();if(Array.isArray(d)&&d[0])return d[0]({value:f,done:!1})}i.push(f)}}function o(f){r=f;var d=a.slice();d.forEach(function(p){p[1](f)}),!e||e()}function u(){n=!0;var f=a.slice();f.forEach(function(d){d[0]({value:void 0,done:!0})}),!e||e()}e=function(){e=null,t.removeListener("data",s),t.removeListener("error",o),t.removeListener("end",u),t.removeListener("finish",u),t.removeListener("close",u)},t.on("data",s),t.on("error",o),t.on("end",u),t.on("finish",u),t.on("close",u);function c(){return new Promise(function(f,d){if(r)return d(r);if(i.length)return f({value:i.shift(),done:!1});if(n)return f({value:void 0,done:!0});a.push([f,d])})}var l={next:function(){return c()}};return fn&&(l[Symbol.asyncIterator]=function(){return this}),l}function Wg(t){var e=!1,r={next:function(){return e?Promise.resolve({value:void 0,done:!0}):(e=!0,new Promise(function(n,i){t.then(function(a){n({value:a,done:!1})}).catch(i)}))}};return fn&&(r[Symbol.asyncIterator]=function(){return this}),r}function cc(t){var e={next:function(){return t.read()}};return fn&&(e[Symbol.asyncIterator]=function(){return this}),e}function Hg(t){return!!t.body}function Yg(t){return!!t.getReader}function Jg(t){return!!(fn&&t[Symbol.asyncIterator])}function Xg(t){return!!t.stream}function Kg(t){return!!t.arrayBuffer}function Zg(t){return!!t.pipe}function ey(t){var e=t;if(Hg(t)&&(e=t.body),Jg(e))return zg(e);if(Yg(e))return cc(e.getReader());if(Xg(e))return cc(e.stream().getReader());if(Kg(e))return Wg(e.arrayBuffer());if(Zg(e))return Qg(e);throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")}var wn=Symbol();function lc(t){return t.extensions?Array.isArray(t.extensions[wn]):!1}function fc(t){return t.hasOwnProperty("graphQLErrors")}var ty=function(t){var e=me(me(me([],t.graphQLErrors,!0),t.clientErrors,!0),t.protocolErrors,!0);return t.networkError&&e.push(t.networkError),e.map(function(r){return ae(r)&&r.message||"Error message not found."}).join(`
`)},st=(function(t){De(e,t);function e(r){var n=r.graphQLErrors,i=r.protocolErrors,a=r.clientErrors,s=r.networkError,o=r.errorMessage,u=r.extraInfo,c=t.call(this,o)||this;return c.name="ApolloError",c.graphQLErrors=n||[],c.protocolErrors=i||[],c.clientErrors=a||[],c.networkError=s||null,c.message=o||ty(c),c.extraInfo=u,c.cause=me(me(me([s],n||[],!0),i||[],!0),a||[],!0).find(function(l){return!!l})||null,c.__proto__=e.prototype,c}return e})(Error),dc=Object.prototype.hasOwnProperty;function ry(t,e){return Ke(this,void 0,void 0,function(){var r,n,i,a,s,o,u,c,l,f,d,p,y,m,v,h,b,S,w,D,x,I,A,M;return Ze(this,function(U){switch(U.label){case 0:if(TextDecoder===void 0)throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");r=new TextDecoder("utf-8"),n=(M=t.headers)===null||M===void 0?void 0:M.get("content-type"),i="boundary=",a=n?.includes(i)?n?.substring(n?.indexOf(i)+i.length).replace(/['"]/g,"").replace(/\;(.*)/gm,"").trim():"-",s=`\r
--`.concat(a),o="",u=ey(t),c=!0,U.label=1;case 1:return c?[4,u.next()]:[3,3];case 2:for(l=U.sent(),f=l.value,d=l.done,p=typeof f=="string"?f:r.decode(f),y=o.length-s.length+1,c=!d,o+=p,m=o.indexOf(s,y);m>-1;){if(v=void 0,I=[o.slice(0,m),o.slice(m+s.length)],v=I[0],o=I[1],h=v.indexOf(`\r
\r
`),b=ny(v.slice(0,h)),S=b["content-type"],S&&S.toLowerCase().indexOf("application/json")===-1)throw new Error("Unsupported patch content type: application/json is required.");if(w=v.slice(h),w){if(D=pc(t,w),Object.keys(D).length>1||"data"in D||"incremental"in D||"errors"in D||"payload"in D)if(Lg(D)){if(x={},"payload"in D){if(Object.keys(D).length===1&&D.payload===null)return[2];x=E({},D.payload)}"errors"in D&&(x=E(E({},x),{extensions:E(E({},"extensions"in x?x.extensions:null),(A={},A[wn]=D.errors,A))})),e(x)}else e(D);else if(Object.keys(D).length===1&&"hasNext"in D&&!D.hasNext)return[2]}m=o.indexOf(s)}return[3,1];case 3:return[2]}})})}function ny(t){var e={};return t.split(`
`).forEach(function(r){var n=r.indexOf(":");if(n>-1){var i=r.slice(0,n).trim().toLowerCase(),a=r.slice(n+1).trim();e[i]=a}}),e}function pc(t,e){if(t.status>=300){var r=function(){try{return JSON.parse(e)}catch{return e}};oc(t,r(),"Response not successful: Received status code ".concat(t.status))}try{return JSON.parse(e)}catch(i){var n=i;throw n.name="ServerParseError",n.response=t,n.statusCode=t.status,n.bodyText=e,n}}function iy(t,e){t.result&&t.result.errors&&t.result.data&&e.next(t.result),e.error(t)}function hc(t){return function(e){return e.text().then(function(r){return pc(e,r)}).then(function(r){return!Array.isArray(r)&&!dc.call(r,"data")&&!dc.call(r,"errors")&&oc(e,r,"Server response was missing for query '".concat(Array.isArray(t)?t.map(function(n){return n.operationName}):t.operationName,"'.")),r})}}var Ir=function(t,e){var r;try{r=JSON.stringify(t)}catch(i){var n=ye(42,e,i.message);throw n.parseError=i,n}return r},ay={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},sy={accept:"*/*","content-type":"application/json"},oy={method:"POST"},mc={http:ay,headers:sy,options:oy},gc=function(t,e){return e(t)};function yc(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i={},a={};r.forEach(function(f){i=E(E(E({},i),f.options),{headers:E(E({},i.headers),f.headers)}),f.credentials&&(i.credentials=f.credentials),a=E(E({},a),f.http)}),i.headers&&(i.headers=uy(i.headers,a.preserveHeaderCase));var s=t.operationName,o=t.extensions,u=t.variables,c=t.query,l={operationName:s,variables:u};return a.includeExtensions&&(l.extensions=o),a.includeQuery&&(l.query=e(c,it)),{options:i,body:l}}function uy(t,e){if(!e){var r={};return Object.keys(Object(t)).forEach(function(a){r[a.toLowerCase()]=t[a]}),r}var n={};Object.keys(Object(t)).forEach(function(a){n[a.toLowerCase()]={originalName:a,value:t[a]}});var i={};return Object.keys(n).forEach(function(a){i[n[a].originalName]=n[a].value}),i}var cy=function(t){if(!t&&typeof fetch>"u")throw ye(40)},ly=function(){if(typeof AbortController>"u")return{controller:!1,signal:!1};var t=new AbortController,e=t.signal;return{controller:t,signal:e}},vc=function(t,e){var r=t.getContext(),n=r.uri;return n||(typeof e=="function"?e(t):e||"/graphql")};function bc(t,e){var r=[],n=function(f,d){r.push("".concat(f,"=").concat(encodeURIComponent(d)))};if("query"in e&&n("query",e.query),e.operationName&&n("operationName",e.operationName),e.variables){var i=void 0;try{i=Ir(e.variables,"Variables map")}catch(f){return{parseError:f}}n("variables",i)}if(e.extensions){var a=void 0;try{a=Ir(e.extensions,"Extensions map")}catch(f){return{parseError:f}}n("extensions",a)}var s="",o=t,u=t.indexOf("#");u!==-1&&(s=t.substr(u),o=t.substr(0,u));var c=o.indexOf("?")===-1?"?":"&",l=o+c+r.join("&")+s;return{newURI:l}}var Sc=Oe(function(){return fetch}),fy=function(t){t===void 0&&(t={});var e=t.uri,r=e===void 0?"/graphql":e,n=t.fetch,i=t.print,a=i===void 0?gc:i,s=t.includeExtensions,o=t.preserveHeaderCase,u=t.useGETForQueries,c=t.includeUnusedVariables,l=c===void 0?!1:c,f=je(t,["uri","fetch","print","includeExtensions","preserveHeaderCase","useGETForQueries","includeUnusedVariables"]);globalThis.__DEV__!==!1&&cy(n||Sc);var d={http:{includeExtensions:s,preserveHeaderCase:o},options:f.fetchOptions,credentials:f.credentials,headers:f.headers};return new Ie(function(p){var y=vc(p,r),m=p.getContext(),v={};if(m.clientAwareness){var h=m.clientAwareness,b=h.name,S=h.version;b&&(v["apollographql-client-name"]=b),S&&(v["apollographql-client-version"]=S)}var w=E(E({},v),m.headers),D={http:m.http,options:m.fetchOptions,credentials:m.credentials,headers:w};if(br(["client"],p.query)){var x=Hu(p.query);if(!x)return Ta(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));p.query=x}var I=yc(p,a,mc,d,D),A=I.options,M=I.body;M.variables&&!l&&(M.variables=Vg(M.variables,p.query));var U;!A.signal&&typeof AbortController<"u"&&(U=new AbortController,A.signal=U.signal);var L=function($){return $.kind==="OperationDefinition"&&$.operation==="mutation"},se=function($){return $.kind==="OperationDefinition"&&$.operation==="subscription"},K=se(Vt(p.query)),ge=br(["defer"],p.query);if(u&&!p.query.definitions.some(L)&&(A.method="GET"),ge||K){A.headers=A.headers||{};var j="multipart/mixed;";K&&ge&&globalThis.__DEV__!==!1&&P.warn(41),K?j+="boundary=graphql;subscriptionSpec=1.0,application/json":ge&&(j+="deferSpec=20220824,application/json"),A.headers.accept=j}if(A.method==="GET"){var J=bc(y,M),_=J.newURI,O=J.parseError;if(O)return Ta(O);y=_}else try{A.body=Ir(M,"Payload")}catch($){return Ta($)}return new W(function($){var V=n||Oe(function(){return fetch})||Sc,R=$.next.bind($);return V(y,A).then(function(G){var X;p.setContext({response:G});var Z=(X=G.headers)===null||X===void 0?void 0:X.get("content-type");return Z!==null&&/^multipart\/mixed/i.test(Z)?ry(G,R):hc(p)(G).then(R)}).then(function(){U=void 0,$.complete()}).catch(function(G){U=void 0,iy(G,$)}),function(){U&&U.abort()}})})},dy=(function(t){De(e,t);function e(r){r===void 0&&(r={});var n=t.call(this,fy(r).request)||this;return n.options=r,n}return e})(Ie);const{toString:_c,hasOwnProperty:py}=Object.prototype,Ec=Function.prototype.toString,xa=new Map;function ne(t,e){try{return ka(t,e)}finally{xa.clear()}}function ka(t,e){if(t===e)return!0;const r=_c.call(t),n=_c.call(e);if(r!==n)return!1;switch(r){case"[object Array]":if(t.length!==e.length)return!1;case"[object Object]":{if(Dc(t,e))return!0;const i=wc(t),a=wc(e),s=i.length;if(s!==a.length)return!1;for(let o=0;o<s;++o)if(!py.call(e,i[o]))return!1;for(let o=0;o<s;++o){const u=i[o];if(!ka(t[u],e[u]))return!1}return!0}case"[object Error]":return t.name===e.name&&t.message===e.message;case"[object Number]":if(t!==t)return e!==e;case"[object Boolean]":case"[object Date]":return+t==+e;case"[object RegExp]":case"[object String]":return t==`${e}`;case"[object Map]":case"[object Set]":{if(t.size!==e.size)return!1;if(Dc(t,e))return!0;const i=t.entries(),a=r==="[object Map]";for(;;){const s=i.next();if(s.done)break;const[o,u]=s.value;if(!e.has(o)||a&&!ka(u,e.get(o)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":t=new Uint8Array(t),e=new Uint8Array(e);case"[object DataView]":{let i=t.byteLength;if(i===e.byteLength)for(;i--&&t[i]===e[i];);return i===-1}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{const i=Ec.call(t);return i!==Ec.call(e)?!1:!gy(i,my)}}return!1}function wc(t){return Object.keys(t).filter(hy,t)}function hy(t){return this[t]!==void 0}const my="{ [native code] }";function gy(t,e){const r=t.length-e.length;return r>=0&&t.indexOf(e,r)===r}function Dc(t,e){let r=xa.get(t);if(r){if(r.has(e))return!0}else xa.set(t,r=new Set);return r.add(e),!1}function Tc(t,e,r,n){var i=e.data,a=je(e,["data"]),s=r.data,o=je(r,["data"]);return ne(a,o)&&Dn(Vt(t).selectionSet,i,s,{fragmentMap:Rt(Ut(t)),variables:n})}function Dn(t,e,r,n){if(e===r)return!0;var i=new Set;return t.selections.every(function(a){if(i.has(a)||(i.add(a),!vr(a,n.variables))||Oc(a))return!0;if(rt(a)){var s=Ve(a),o=e&&e[s],u=r&&r[s],c=a.selectionSet;if(!c)return ne(o,u);var l=Array.isArray(o),f=Array.isArray(u);if(l!==f)return!1;if(l&&f){var d=o.length;if(u.length!==d)return!1;for(var p=0;p<d;++p)if(!Dn(c,o[p],u[p],n))return!1;return!0}return Dn(c,o,u,n)}else{var y=dn(a,n.fragmentMap);if(y)return Oc(y)?!0:Dn(y.selectionSet,e,r,n)}})}function Oc(t){return!!t.directives&&t.directives.some(yy)}function yy(t){return t.name.value==="nonreactive"}var xc=vt?WeakMap:Map,kc=ea?WeakSet:Set,Ia=new Er,Ic=!1;function Fc(){Ic||(Ic=!0,globalThis.__DEV__!==!1&&P.warn(52))}function $c(t,e,r){return Ia.withValue(!0,function(){var n=Fr(t,e,r,!1);return Object.isFrozen(t)&&Sn(n),n})}function vy(t,e){if(e.has(t))return e.get(t);var r=Array.isArray(t)?[]:Object.create(null);return e.set(t,r),r}function Fr(t,e,r,n,i){var a,s=r.knownChanged,o=vy(t,r.mutableTargets);if(Array.isArray(t)){for(var u=0,c=Array.from(t.entries());u<c.length;u++){var l=c[u],f=l[0],d=l[1];if(d===null){o[f]=null;continue}var p=Fr(d,e,r,n,globalThis.__DEV__!==!1?"".concat(i||"","[").concat(f,"]"):void 0);s.has(p)&&s.add(o),o[f]=p}return s.has(o)?o:t}for(var y=0,m=e.selections;y<m.length;y++){var v=m[y],h=void 0;if(n&&s.add(o),v.kind===F.FIELD){var b=Ve(v),S=v.selectionSet;if(h=o[b]||t[b],h===void 0)continue;if(S&&h!==null){var p=Fr(t[b],S,r,n,globalThis.__DEV__!==!1?"".concat(i||"",".").concat(b):void 0);s.has(p)&&(h=p)}globalThis.__DEV__===!1&&(o[b]=h),globalThis.__DEV__!==!1&&(n&&b!=="__typename"&&!(!((a=Object.getOwnPropertyDescriptor(o,b))===null||a===void 0)&&a.value)?Object.defineProperty(o,b,by(b,h,i||"",r.operationName,r.operationType)):(delete o[b],o[b]=h))}if(v.kind===F.INLINE_FRAGMENT&&(!v.typeCondition||r.cache.fragmentMatches(v,t.__typename))&&(h=Fr(t,v.selectionSet,r,n,i)),v.kind===F.FRAGMENT_SPREAD){var w=v.name.value,D=r.fragmentMap[w]||(r.fragmentMap[w]=r.cache.lookupFragment(w));P(D,47,w);var x=wm(v);x!=="mask"&&(h=Fr(t,D.selectionSet,r,x==="migrate",i))}s.has(h)&&s.add(o)}return"__typename"in t&&!("__typename"in o)&&(o.__typename=t.__typename),Object.keys(o).length!==Object.keys(t).length&&s.add(o),s.has(o)?o:t}function by(t,e,r,n,i){var a=function(){return Ia.getValue()||(globalThis.__DEV__!==!1&&P.warn(48,n?"".concat(i," '").concat(n,"'"):"anonymous ".concat(i),"".concat(r,".").concat(t).replace(/^\./,"")),a=function(){return e}),e};return{get:function(){return a()},set:function(s){a=function(){return s}},enumerable:!0,configurable:!0}}function Cc(t,e,r,n){if(!r.fragmentMatches)return globalThis.__DEV__!==!1&&Fc(),t;var i=e.definitions.filter(function(s){return s.kind===F.FRAGMENT_DEFINITION});typeof n>"u"&&(P(i.length===1,49,i.length),n=i[0].name.value);var a=i.find(function(s){return s.name.value===n});return P(!!a,50,n),t==null||ne(t,{})?t:$c(t,a.selectionSet,{operationType:"fragment",operationName:a.name.value,fragmentMap:Rt(Ut(e)),cache:r,mutableTargets:new xc,knownChanged:new kc})}function Sy(t,e,r){var n;if(!r.fragmentMatches)return globalThis.__DEV__!==!1&&Fc(),t;var i=St(e);return P(i,51),t==null?t:$c(t,i.selectionSet,{operationType:i.operation,operationName:(n=i.name)===null||n===void 0?void 0:n.value,fragmentMap:Rt(Ut(e)),cache:r,mutableTargets:new xc,knownChanged:new kc})}var Ac=(function(){function t(){this.assumeImmutableResults=!1,this.getFragmentDoc=Dr(Im,{max:Ue["cache.fragmentQueryDocuments"]||1e3,cache:pn})}return t.prototype.lookupFragment=function(e){return null},t.prototype.batch=function(e){var r=this,n=typeof e.optimistic=="string"?e.optimistic:e.optimistic===!1?null:void 0,i;return this.performTransaction(function(){return i=e.update(r)},n),i},t.prototype.recordOptimisticTransaction=function(e,r){this.performTransaction(e,r)},t.prototype.transformDocument=function(e){return e},t.prototype.transformForLink=function(e){return e},t.prototype.identify=function(e){},t.prototype.gc=function(){return[]},t.prototype.modify=function(e){return!1},t.prototype.readQuery=function(e,r){return r===void 0&&(r=!!e.optimistic),this.read(E(E({},e),{rootId:e.id||"ROOT_QUERY",optimistic:r}))},t.prototype.watchFragment=function(e){var r=this,n=e.fragment,i=e.fragmentName,a=e.from,s=e.optimistic,o=s===void 0?!0:s,u=je(e,["fragment","fragmentName","from","optimistic"]),c=this.getFragmentDoc(n,i),l=typeof a>"u"||typeof a=="string"?a:this.identify(a),f=!!e[Symbol.for("apollo.dataMasking")];if(globalThis.__DEV__!==!1){var d=i||Ou(n).name.value;l||globalThis.__DEV__!==!1&&P.warn(1,d)}var p=E(E({},u),{returnPartialData:!0,id:l,query:c,optimistic:o}),y;return new W(function(m){return r.watch(E(E({},p),{immediate:!0,callback:function(v){var h=f?Cc(v.result,n,r,i):v.result;if(!(y&&Tc(c,{data:y.result},{data:h},e.variables))){var b={data:h,complete:!!v.complete};v.missing&&(b.missing=yn(v.missing.map(function(S){return S.missing}))),y=E(E({},v),{result:h}),m.next(b)}}}))})},t.prototype.readFragment=function(e,r){return r===void 0&&(r=!!e.optimistic),this.read(E(E({},e),{query:this.getFragmentDoc(e.fragment,e.fragmentName),rootId:e.id,optimistic:r}))},t.prototype.writeQuery=function(e){var r=e.id,n=e.data,i=je(e,["id","data"]);return this.write(Object.assign(i,{dataId:r||"ROOT_QUERY",result:n}))},t.prototype.writeFragment=function(e){var r=e.id,n=e.data,i=e.fragment,a=e.fragmentName,s=je(e,["id","data","fragment","fragmentName"]);return this.write(Object.assign(s,{query:this.getFragmentDoc(i,a),dataId:r,result:n}))},t.prototype.updateQuery=function(e,r){return this.batch({update:function(n){var i=n.readQuery(e),a=r(i);return a==null?i:(n.writeQuery(E(E({},e),{data:a})),a)}})},t.prototype.updateFragment=function(e,r){return this.batch({update:function(n){var i=n.readFragment(e),a=r(i);return a==null?i:(n.writeFragment(E(E({},e),{data:a})),a)}})},t})();globalThis.__DEV__!==!1&&(Ac.prototype.getMemoryInternals=Um);var Pc=(function(t){De(e,t);function e(r,n,i,a){var s,o=t.call(this,r)||this;if(o.message=r,o.path=n,o.query=i,o.variables=a,Array.isArray(o.path)){o.missing=o.message;for(var u=o.path.length-1;u>=0;--u)o.missing=(s={},s[o.path[u]]=o.missing,s)}else o.missing=o.path;return o.__proto__=e.prototype,o}return e})(Error),fe=Object.prototype.hasOwnProperty;function $r(t){return t==null}function Nc(t,e){var r=t.__typename,n=t.id,i=t._id;if(typeof r=="string"&&(e&&(e.keyObject=$r(n)?$r(i)?void 0:{_id:i}:{id:n}),$r(n)&&!$r(i)&&(n=i),!$r(n)))return"".concat(r,":").concat(typeof n=="number"||typeof n=="string"?n:JSON.stringify(n))}var Rc={dataIdFromObject:Nc,addTypename:!0,resultCaching:!0,canonizeResults:!1};function _y(t){return Ht(Rc,t)}function Mc(t){var e=t.canonizeResults;return e===void 0?Rc.canonizeResults:e}function Ey(t,e){return Q(e)?t.get(e.__ref,"__typename"):e&&e.__typename}var Lc=/^[_a-z][_0-9a-z]*/i;function ot(t){var e=t.match(Lc);return e?e[0]:t}function Fa(t,e,r){return ae(e)?oe(e)?e.every(function(n){return Fa(t,n,r)}):t.selections.every(function(n){if(rt(n)&&vr(n,r)){var i=Ve(n);return fe.call(e,i)&&(!n.selectionSet||Fa(n.selectionSet,e[i],r))}return!0}):!1}function Yt(t){return ae(t)&&!Q(t)&&!oe(t)}function wy(){return new at}function jc(t,e){var r=Rt(Ut(t));return{fragmentMap:r,lookupFragment:function(n){var i=r[n];return!i&&e&&(i=e.lookup(n)),i||null}}}var Tn=Object.create(null),$a=function(){return Tn},qc=Object.create(null),Cr=(function(){function t(e,r){var n=this;this.policies=e,this.group=r,this.data=Object.create(null),this.rootIds=Object.create(null),this.refs=Object.create(null),this.getFieldValue=function(i,a){return Sn(Q(i)?n.get(i.__ref,a):i&&i[a])},this.canRead=function(i){return Q(i)?n.has(i.__ref):typeof i=="object"},this.toReference=function(i,a){if(typeof i=="string")return Lt(i);if(Q(i))return i;var s=n.policies.identify(i)[0];if(s){var o=Lt(s);return a&&n.merge(s,i),o}}}return t.prototype.toObject=function(){return E({},this.data)},t.prototype.has=function(e){return this.lookup(e,!0)!==void 0},t.prototype.get=function(e,r){if(this.group.depend(e,r),fe.call(this.data,e)){var n=this.data[e];if(n&&fe.call(n,r))return n[r]}if(r==="__typename"&&fe.call(this.policies.rootTypenamesById,e))return this.policies.rootTypenamesById[e];if(this instanceof ut)return this.parent.get(e,r)},t.prototype.lookup=function(e,r){if(r&&this.group.depend(e,"__exists"),fe.call(this.data,e))return this.data[e];if(this instanceof ut)return this.parent.lookup(e,r);if(this.policies.rootTypenamesById[e])return Object.create(null)},t.prototype.merge=function(e,r){var n=this,i;Q(e)&&(e=e.__ref),Q(r)&&(r=r.__ref);var a=typeof e=="string"?this.lookup(i=e):e,s=typeof r=="string"?this.lookup(i=r):r;if(s){P(typeof i=="string",2);var o=new at(Ty).merge(a,s);if(this.data[i]=o,o!==a&&(delete this.refs[i],this.group.caching)){var u=Object.create(null);a||(u.__exists=1),Object.keys(s).forEach(function(c){if(!a||a[c]!==o[c]){u[c]=1;var l=ot(c);l!==c&&!n.policies.hasKeyArgs(o.__typename,l)&&(u[l]=1),o[c]===void 0&&!(n instanceof ut)&&delete o[c]}}),u.__typename&&!(a&&a.__typename)&&this.policies.rootTypenamesById[i]===o.__typename&&delete u.__typename,Object.keys(u).forEach(function(c){return n.group.dirty(i,c)})}}},t.prototype.modify=function(e,r){var n=this,i=this.lookup(e);if(i){var a=Object.create(null),s=!1,o=!0,u={DELETE:Tn,INVALIDATE:qc,isReference:Q,toReference:this.toReference,canRead:this.canRead,readField:function(c,l){return n.policies.readField(typeof c=="string"?{fieldName:c,from:l||Lt(e)}:c,{store:n})}};if(Object.keys(i).forEach(function(c){var l=ot(c),f=i[c];if(f!==void 0){var d=typeof r=="function"?r:r[c]||r[l];if(d){var p=d===$a?Tn:d(Sn(f),E(E({},u),{fieldName:l,storeFieldName:c,storage:n.getStorage(e,c)}));if(p===qc)n.group.dirty(e,c);else if(p===Tn&&(p=void 0),p!==f&&(a[c]=p,s=!0,f=p,globalThis.__DEV__!==!1)){var y=function(D){if(n.lookup(D.__ref)===void 0)return globalThis.__DEV__!==!1&&P.warn(3,D),!0};if(Q(p))y(p);else if(Array.isArray(p))for(var m=!1,v=void 0,h=0,b=p;h<b.length;h++){var S=b[h];if(Q(S)){if(m=!0,y(S))break}else if(typeof S=="object"&&S){var w=n.policies.identify(S)[0];w&&(v=S)}if(m&&v!==void 0){globalThis.__DEV__!==!1&&P.warn(4,v);break}}}}f!==void 0&&(o=!1)}}),s)return this.merge(e,a),o&&(this instanceof ut?this.data[e]=void 0:delete this.data[e],this.group.dirty(e,"__exists")),!0}return!1},t.prototype.delete=function(e,r,n){var i,a=this.lookup(e);if(a){var s=this.getFieldValue(a,"__typename"),o=r&&n?this.policies.getStoreFieldName({typename:s,fieldName:r,args:n}):r;return this.modify(e,o?(i={},i[o]=$a,i):$a)}return!1},t.prototype.evict=function(e,r){var n=!1;return e.id&&(fe.call(this.data,e.id)&&(n=this.delete(e.id,e.fieldName,e.args)),this instanceof ut&&this!==r&&(n=this.parent.evict(e,r)||n),(e.fieldName||n)&&this.group.dirty(e.id,e.fieldName||"__exists")),n},t.prototype.clear=function(){this.replace(null)},t.prototype.extract=function(){var e=this,r=this.toObject(),n=[];return this.getRootIdSet().forEach(function(i){fe.call(e.policies.rootTypenamesById,i)||n.push(i)}),n.length&&(r.__META={extraRootIds:n.sort()}),r},t.prototype.replace=function(e){var r=this;if(Object.keys(this.data).forEach(function(a){e&&fe.call(e,a)||r.delete(a)}),e){var n=e.__META,i=je(e,["__META"]);Object.keys(i).forEach(function(a){r.merge(a,i[a])}),n&&n.extraRootIds.forEach(this.retain,this)}},t.prototype.retain=function(e){return this.rootIds[e]=(this.rootIds[e]||0)+1},t.prototype.release=function(e){if(this.rootIds[e]>0){var r=--this.rootIds[e];return r||delete this.rootIds[e],r}return 0},t.prototype.getRootIdSet=function(e){return e===void 0&&(e=new Set),Object.keys(this.rootIds).forEach(e.add,e),this instanceof ut?this.parent.getRootIdSet(e):Object.keys(this.policies.rootTypenamesById).forEach(e.add,e),e},t.prototype.gc=function(){var e=this,r=this.getRootIdSet(),n=this.toObject();r.forEach(function(s){fe.call(n,s)&&(Object.keys(e.findChildRefIds(s)).forEach(r.add,r),delete n[s])});var i=Object.keys(n);if(i.length){for(var a=this;a instanceof ut;)a=a.parent;i.forEach(function(s){return a.delete(s)})}return i},t.prototype.findChildRefIds=function(e){if(!fe.call(this.refs,e)){var r=this.refs[e]=Object.create(null),n=this.data[e];if(!n)return r;var i=new Set([n]);i.forEach(function(a){Q(a)&&(r[a.__ref]=!0),ae(a)&&Object.keys(a).forEach(function(s){var o=a[s];ae(o)&&i.add(o)})})}return this.refs[e]},t.prototype.makeCacheKey=function(){return this.group.keyMaker.lookupArray(arguments)},t})(),Uc=(function(){function t(e,r){r===void 0&&(r=null),this.caching=e,this.parent=r,this.d=null,this.resetCaching()}return t.prototype.resetCaching=function(){this.d=this.caching?Uu():null,this.keyMaker=new qe(vt)},t.prototype.depend=function(e,r){if(this.d){this.d(Ca(e,r));var n=ot(r);n!==r&&this.d(Ca(e,n)),this.parent&&this.parent.depend(e,r)}},t.prototype.dirty=function(e,r){this.d&&this.d.dirty(Ca(e,r),r==="__exists"?"forget":"setDirty")},t})();function Ca(t,e){return e+"#"+t}function Vc(t,e){Ar(t)&&t.group.depend(e,"__exists")}(function(t){var e=(function(r){De(n,r);function n(i){var a=i.policies,s=i.resultCaching,o=s===void 0?!0:s,u=i.seed,c=r.call(this,a,new Uc(o))||this;return c.stump=new Dy(c),c.storageTrie=new qe(vt),u&&c.replace(u),c}return n.prototype.addLayer=function(i,a){return this.stump.addLayer(i,a)},n.prototype.removeLayer=function(){return this},n.prototype.getStorage=function(){return this.storageTrie.lookupArray(arguments)},n})(t);t.Root=e})(Cr||(Cr={}));var ut=(function(t){De(e,t);function e(r,n,i,a){var s=t.call(this,n.policies,a)||this;return s.id=r,s.parent=n,s.replay=i,s.group=a,i(s),s}return e.prototype.addLayer=function(r,n){return new e(r,this,n,this.group)},e.prototype.removeLayer=function(r){var n=this,i=this.parent.removeLayer(r);return r===this.id?(this.group.caching&&Object.keys(this.data).forEach(function(a){var s=n.data[a],o=i.lookup(a);o?s?s!==o&&Object.keys(s).forEach(function(u){ne(s[u],o[u])||n.group.dirty(a,u)}):(n.group.dirty(a,"__exists"),Object.keys(o).forEach(function(u){n.group.dirty(a,u)})):n.delete(a)}),i):i===this.parent?this:i.addLayer(this.id,this.replay)},e.prototype.toObject=function(){return E(E({},this.parent.toObject()),this.data)},e.prototype.findChildRefIds=function(r){var n=this.parent.findChildRefIds(r);return fe.call(this.data,r)?E(E({},n),t.prototype.findChildRefIds.call(this,r)):n},e.prototype.getStorage=function(){for(var r=this.parent;r.parent;)r=r.parent;return r.getStorage.apply(r,arguments)},e})(Cr),Dy=(function(t){De(e,t);function e(r){return t.call(this,"EntityStore.Stump",r,function(){},new Uc(r.group.caching,r.group))||this}return e.prototype.removeLayer=function(){return this},e.prototype.merge=function(r,n){return this.parent.merge(r,n)},e})(ut);function Ty(t,e,r){var n=t[r],i=e[r];return ne(n,i)?n:i}function Ar(t){return!!(t instanceof Cr&&t.group.caching)}function Oy(t){return ae(t)?oe(t)?t.slice(0):E({__proto__:Object.getPrototypeOf(t)},t):t}var Bc=(function(){function t(){this.known=new(ea?WeakSet:Set),this.pool=new qe(vt),this.passes=new WeakMap,this.keysByJSON=new Map,this.empty=this.admit({})}return t.prototype.isKnown=function(e){return ae(e)&&this.known.has(e)},t.prototype.pass=function(e){if(ae(e)){var r=Oy(e);return this.passes.set(r,e),r}return e},t.prototype.admit=function(e){var r=this;if(ae(e)){var n=this.passes.get(e);if(n)return n;var i=Object.getPrototypeOf(e);switch(i){case Array.prototype:{if(this.known.has(e))return e;var a=e.map(this.admit,this),s=this.pool.lookupArray(a);return s.array||(this.known.add(s.array=a),globalThis.__DEV__!==!1&&Object.freeze(a)),s.array}case null:case Object.prototype:{if(this.known.has(e))return e;var o=Object.getPrototypeOf(e),u=[o],c=this.sortedKeys(e);u.push(c.json);var l=u.length;c.sorted.forEach(function(p){u.push(r.admit(e[p]))});var s=this.pool.lookupArray(u);if(!s.object){var f=s.object=Object.create(o);this.known.add(f),c.sorted.forEach(function(p,y){f[p]=u[l+y]}),globalThis.__DEV__!==!1&&Object.freeze(f)}return s.object}}}return e},t.prototype.sortedKeys=function(e){var r=Object.keys(e),n=this.pool.lookupArray(r);if(!n.keys){r.sort();var i=JSON.stringify(r);(n.keys=this.keysByJSON.get(i))||this.keysByJSON.set(i,n.keys={sorted:r,json:i})}return n.keys},t})();function Gc(t){return[t.selectionSet,t.objectOrReference,t.context,t.context.canonizeResults]}var xy=(function(){function t(e){var r=this;this.knownResults=new(vt?WeakMap:Map),this.config=Ht(e,{addTypename:e.addTypename!==!1,canonizeResults:Mc(e)}),this.canon=e.canon||new Bc,this.executeSelectionSet=Dr(function(n){var i,a=n.context.canonizeResults,s=Gc(n);s[3]=!a;var o=(i=r.executeSelectionSet).peek.apply(i,s);return o?a?E(E({},o),{result:r.canon.admit(o.result)}):o:(Vc(n.context.store,n.enclosingRef.__ref),r.execSelectionSetImpl(n))},{max:this.config.resultCacheMaxSize||Ue["inMemoryCache.executeSelectionSet"]||5e4,keyArgs:Gc,makeCacheKey:function(n,i,a,s){if(Ar(a.store))return a.store.makeCacheKey(n,Q(i)?i.__ref:i,a.varString,s)}}),this.executeSubSelectedArray=Dr(function(n){return Vc(n.context.store,n.enclosingRef.__ref),r.execSubSelectedArrayImpl(n)},{max:this.config.resultCacheMaxSize||Ue["inMemoryCache.executeSubSelectedArray"]||1e4,makeCacheKey:function(n){var i=n.field,a=n.array,s=n.context;if(Ar(s.store))return s.store.makeCacheKey(i,a,s.varString)}})}return t.prototype.resetCanon=function(){this.canon=new Bc},t.prototype.diffQueryAgainstStore=function(e){var r=e.store,n=e.query,i=e.rootId,a=i===void 0?"ROOT_QUERY":i,s=e.variables,o=e.returnPartialData,u=o===void 0?!0:o,c=e.canonizeResults,l=c===void 0?this.config.canonizeResults:c,f=this.config.cache.policies;s=E(E({},oa(Tu(n))),s);var d=Lt(a),p=this.executeSelectionSet({selectionSet:Vt(n).selectionSet,objectOrReference:d,enclosingRef:d,context:E({store:r,query:n,policies:f,variables:s,varString:tt(s),canonizeResults:l},jc(n,this.config.fragments))}),y;if(p.missing&&(y=[new Pc(ky(p.missing),p.missing,n,s)],!u))throw y[0];return{result:p.result,complete:!y,missing:y}},t.prototype.isFresh=function(e,r,n,i){if(Ar(i.store)&&this.knownResults.get(e)===n){var a=this.executeSelectionSet.peek(n,r,i,this.canon.isKnown(e));if(a&&e===a.result)return!0}return!1},t.prototype.execSelectionSetImpl=function(e){var r=this,n=e.selectionSet,i=e.objectOrReference,a=e.enclosingRef,s=e.context;if(Q(i)&&!s.policies.rootTypenamesById[i.__ref]&&!s.store.has(i.__ref))return{result:this.canon.empty,missing:"Dangling reference to missing ".concat(i.__ref," object")};var o=s.variables,u=s.policies,c=s.store,l=c.getFieldValue(i,"__typename"),f=[],d,p=new at;this.config.addTypename&&typeof l=="string"&&!u.rootIdsByTypename[l]&&f.push({__typename:l});function y(S,w){var D;return S.missing&&(d=p.merge(d,(D={},D[w]=S.missing,D))),S.result}var m=new Set(n.selections);m.forEach(function(S){var w,D;if(vr(S,o))if(rt(S)){var x=u.readField({fieldName:S.name.value,field:S,variables:s.variables,from:i},s),I=Ve(S);x===void 0?pa.added(S)||(d=p.merge(d,(w={},w[I]="Can't find field '".concat(S.name.value,"' on ").concat(Q(i)?i.__ref+" object":"object "+JSON.stringify(i,null,2)),w))):oe(x)?x.length>0&&(x=y(r.executeSubSelectedArray({field:S,array:x,enclosingRef:a,context:s}),I)):S.selectionSet?x!=null&&(x=y(r.executeSelectionSet({selectionSet:S.selectionSet,objectOrReference:x,enclosingRef:Q(x)?x:a,context:s}),I)):s.canonizeResults&&(x=r.canon.pass(x)),x!==void 0&&f.push((D={},D[I]=x,D))}else{var A=dn(S,s.lookupFragment);if(!A&&S.kind===F.FRAGMENT_SPREAD)throw ye(10,S.name.value);A&&u.fragmentMatches(A,l)&&A.selectionSet.selections.forEach(m.add,m)}});var v=yn(f),h={result:v,missing:d},b=s.canonizeResults?this.canon.admit(h):Sn(h);return b.result&&this.knownResults.set(b.result,n),b},t.prototype.execSubSelectedArrayImpl=function(e){var r=this,n=e.field,i=e.array,a=e.enclosingRef,s=e.context,o,u=new at;function c(l,f){var d;return l.missing&&(o=u.merge(o,(d={},d[f]=l.missing,d))),l.result}return n.selectionSet&&(i=i.filter(s.store.canRead)),i=i.map(function(l,f){return l===null?null:oe(l)?c(r.executeSubSelectedArray({field:n,array:l,enclosingRef:a,context:s}),f):n.selectionSet?c(r.executeSelectionSet({selectionSet:n.selectionSet,objectOrReference:l,enclosingRef:Q(l)?l:a,context:s}),f):(globalThis.__DEV__!==!1&&Iy(s.store,n,l),l)}),{result:s.canonizeResults?this.canon.admit(i):i,missing:o}},t})();function ky(t){try{JSON.stringify(t,function(e,r){if(typeof r=="string")throw r;return r})}catch(e){return e}}function Iy(t,e,r){if(!e.selectionSet){var n=new Set([r]);n.forEach(function(i){ae(i)&&(P(!Q(i),11,Ey(t,i),e.name.value),Object.values(i).forEach(n.add,n))})}}var Aa=new Er,zc=new WeakMap;function Pr(t){var e=zc.get(t);return e||zc.set(t,e={vars:new Set,dep:Uu()}),e}function Qc(t){Pr(t).vars.forEach(function(e){return e.forgetCache(t)})}function Fy(t){Pr(t).vars.forEach(function(e){return e.attachCache(t)})}function $y(t){var e=new Set,r=new Set,n=function(a){if(arguments.length>0){if(t!==a){t=a,e.forEach(function(u){Pr(u).dep.dirty(n),Cy(u)});var s=Array.from(r);r.clear(),s.forEach(function(u){return u(t)})}}else{var o=Aa.getValue();o&&(i(o),Pr(o).dep(n))}return t};n.onNextChange=function(a){return r.add(a),function(){r.delete(a)}};var i=n.attachCache=function(a){return e.add(a),Pr(a).vars.add(n),n};return n.forgetCache=function(a){return e.delete(a)},n}function Cy(t){t.broadcastWatches&&t.broadcastWatches()}var Wc=Object.create(null);function Pa(t){var e=JSON.stringify(t);return Wc[e]||(Wc[e]=Object.create(null))}function Hc(t){var e=Pa(t);return e.keyFieldsFn||(e.keyFieldsFn=function(r,n){var i=function(s,o){return n.readField(o,s)},a=n.keyObject=Na(t,function(s){var o=Jt(n.storeObject,s,i);return o===void 0&&r!==n.storeObject&&fe.call(r,s[0])&&(o=Jt(r,s,Xc)),P(o!==void 0,5,s.join("."),r),o});return"".concat(n.typename,":").concat(JSON.stringify(a))})}function Yc(t){var e=Pa(t);return e.keyArgsFn||(e.keyArgsFn=function(r,n){var i=n.field,a=n.variables,s=n.fieldName,o=Na(t,function(c){var l=c[0],f=l.charAt(0);if(f==="@"){if(i&&Ae(i.directives)){var d=l.slice(1),p=i.directives.find(function(h){return h.name.value===d}),y=p&&hn(p,a);return y&&Jt(y,c.slice(1))}return}if(f==="$"){var m=l.slice(1);if(a&&fe.call(a,m)){var v=c.slice(0);return v[0]=m,Jt(a,v)}return}if(r)return Jt(r,c)}),u=JSON.stringify(o);return(r||u!=="{}")&&(s+=":"+u),s})}function Na(t,e){var r=new at;return Jc(t).reduce(function(n,i){var a,s=e(i);if(s!==void 0){for(var o=i.length-1;o>=0;--o)s=(a={},a[i[o]]=s,a);n=r.merge(n,s)}return n},Object.create(null))}function Jc(t){var e=Pa(t);if(!e.paths){var r=e.paths=[],n=[];t.forEach(function(i,a){oe(i)?(Jc(i).forEach(function(s){return r.push(n.concat(s))}),n.length=0):(n.push(i),oe(t[a+1])||(r.push(n.slice(0)),n.length=0))})}return e.paths}function Xc(t,e){return t[e]}function Jt(t,e,r){return r=r||Xc,Kc(e.reduce(function n(i,a){return oe(i)?i.map(function(s){return n(s,a)}):i&&r(i,a)},t))}function Kc(t){return ae(t)?oe(t)?t.map(Kc):Na(Object.keys(t).sort(),function(e){return Jt(t,e)}):t}function Ra(t){return t.args!==void 0?t.args:t.field?hn(t.field,t.variables):null}var Ay=function(){},Zc=function(t,e){return e.fieldName},el=function(t,e,r){var n=r.mergeObjects;return n(t,e)},tl=function(t,e){return e},Py=(function(){function t(e){this.config=e,this.typePolicies=Object.create(null),this.toBeAdded=Object.create(null),this.supertypeMap=new Map,this.fuzzySubtypes=new Map,this.rootIdsByTypename=Object.create(null),this.rootTypenamesById=Object.create(null),this.usingPossibleTypes=!1,this.config=E({dataIdFromObject:Nc},e),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),e.possibleTypes&&this.addPossibleTypes(e.possibleTypes),e.typePolicies&&this.addTypePolicies(e.typePolicies)}return t.prototype.identify=function(e,r){var n,i=this,a=r&&(r.typename||((n=r.storeObject)===null||n===void 0?void 0:n.__typename))||e.__typename;if(a===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];var s=r&&r.storeObject||e,o=E(E({},r),{typename:a,storeObject:s,readField:r&&r.readField||function(){var f=Ma(arguments,s);return i.readField(f,{store:i.cache.data,variables:f.variables})}}),u,c=a&&this.getTypePolicy(a),l=c&&c.keyFn||this.config.dataIdFromObject;return Ia.withValue(!0,function(){for(;l;){var f=l(E(E({},e),s),o);if(oe(f))l=Hc(f);else{u=f;break}}}),u=u?String(u):void 0,o.keyObject?[u,o.keyObject]:[u]},t.prototype.addTypePolicies=function(e){var r=this;Object.keys(e).forEach(function(n){var i=e[n],a=i.queryType,s=i.mutationType,o=i.subscriptionType,u=je(i,["queryType","mutationType","subscriptionType"]);a&&r.setRootTypename("Query",n),s&&r.setRootTypename("Mutation",n),o&&r.setRootTypename("Subscription",n),fe.call(r.toBeAdded,n)?r.toBeAdded[n].push(u):r.toBeAdded[n]=[u]})},t.prototype.updateTypePolicy=function(e,r){var n=this,i=this.getTypePolicy(e),a=r.keyFields,s=r.fields;function o(u,c){u.merge=typeof c=="function"?c:c===!0?el:c===!1?tl:u.merge}o(i,r.merge),i.keyFn=a===!1?Ay:oe(a)?Hc(a):typeof a=="function"?a:i.keyFn,s&&Object.keys(s).forEach(function(u){var c=n.getFieldPolicy(e,u,!0),l=s[u];if(typeof l=="function")c.read=l;else{var f=l.keyArgs,d=l.read,p=l.merge;c.keyFn=f===!1?Zc:oe(f)?Yc(f):typeof f=="function"?f:c.keyFn,typeof d=="function"&&(c.read=d),o(c,p)}c.read&&c.merge&&(c.keyFn=c.keyFn||Zc)})},t.prototype.setRootTypename=function(e,r){r===void 0&&(r=e);var n="ROOT_"+e.toUpperCase(),i=this.rootTypenamesById[n];r!==i&&(P(!i||i===e,6,e),i&&delete this.rootIdsByTypename[i],this.rootIdsByTypename[r]=n,this.rootTypenamesById[n]=r)},t.prototype.addPossibleTypes=function(e){var r=this;this.usingPossibleTypes=!0,Object.keys(e).forEach(function(n){r.getSupertypeSet(n,!0),e[n].forEach(function(i){r.getSupertypeSet(i,!0).add(n);var a=i.match(Lc);(!a||a[0]!==i)&&r.fuzzySubtypes.set(i,new RegExp(i))})})},t.prototype.getTypePolicy=function(e){var r=this;if(!fe.call(this.typePolicies,e)){var n=this.typePolicies[e]=Object.create(null);n.fields=Object.create(null);var i=this.supertypeMap.get(e);!i&&this.fuzzySubtypes.size&&(i=this.getSupertypeSet(e,!0),this.fuzzySubtypes.forEach(function(s,o){if(s.test(e)){var u=r.supertypeMap.get(o);u&&u.forEach(function(c){return i.add(c)})}})),i&&i.size&&i.forEach(function(s){var o=r.getTypePolicy(s),u=o.fields,c=je(o,["fields"]);Object.assign(n,c),Object.assign(n.fields,u)})}var a=this.toBeAdded[e];return a&&a.length&&a.splice(0).forEach(function(s){r.updateTypePolicy(e,s)}),this.typePolicies[e]},t.prototype.getFieldPolicy=function(e,r,n){if(e){var i=this.getTypePolicy(e).fields;return i[r]||n&&(i[r]=Object.create(null))}},t.prototype.getSupertypeSet=function(e,r){var n=this.supertypeMap.get(e);return!n&&r&&this.supertypeMap.set(e,n=new Set),n},t.prototype.fragmentMatches=function(e,r,n,i){var a=this;if(!e.typeCondition)return!0;if(!r)return!1;var s=e.typeCondition.name.value;if(r===s)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(s))for(var o=this.getSupertypeSet(r,!0),u=[o],c=function(y){var m=a.getSupertypeSet(y,!1);m&&m.size&&u.indexOf(m)<0&&u.push(m)},l=!!(n&&this.fuzzySubtypes.size),f=!1,d=0;d<u.length;++d){var p=u[d];if(p.has(s))return o.has(s)||(f&&globalThis.__DEV__!==!1&&P.warn(7,r,s),o.add(s)),!0;p.forEach(c),l&&d===u.length-1&&Fa(e.selectionSet,n,i)&&(l=!1,f=!0,this.fuzzySubtypes.forEach(function(y,m){var v=r.match(y);v&&v[0]===r&&c(m)}))}return!1},t.prototype.hasKeyArgs=function(e,r){var n=this.getFieldPolicy(e,r,!1);return!!(n&&n.keyFn)},t.prototype.getStoreFieldName=function(e){var r=e.typename,n=e.fieldName,i=this.getFieldPolicy(r,n,!1),a,s=i&&i.keyFn;if(s&&r)for(var o={typename:r,fieldName:n,field:e.field||null,variables:e.variables},u=Ra(e);s;){var c=s(u,o);if(oe(c))s=Yc(c);else{a=c||n;break}}return a===void 0&&(a=e.field?ig(e.field,e.variables):Du(n,Ra(e))),a===!1?n:n===ot(a)?a:n+":"+a},t.prototype.readField=function(e,r){var n=e.from;if(n){var i=e.field||e.fieldName;if(i){if(e.typename===void 0){var a=r.store.getFieldValue(n,"__typename");a&&(e.typename=a)}var s=this.getStoreFieldName(e),o=ot(s),u=r.store.getFieldValue(n,s),c=this.getFieldPolicy(e.typename,o,!1),l=c&&c.read;if(l){var f=rl(this,n,e,r,r.store.getStorage(Q(n)?n.__ref:n,s));return Aa.withValue(this.cache,l,[u,f])}return u}}},t.prototype.getReadFunction=function(e,r){var n=this.getFieldPolicy(e,r,!1);return n&&n.read},t.prototype.getMergeFunction=function(e,r,n){var i=this.getFieldPolicy(e,r,!1),a=i&&i.merge;return!a&&n&&(i=this.getTypePolicy(n),a=i&&i.merge),a},t.prototype.runMergeFunction=function(e,r,n,i,a){var s=n.field,o=n.typename,u=n.merge;return u===el?nl(i.store)(e,r):u===tl?r:(i.overwrite&&(e=void 0),u(e,r,rl(this,void 0,{typename:o,fieldName:s.name.value,field:s,variables:i.variables},i,a||Object.create(null))))},t})();function rl(t,e,r,n,i){var a=t.getStoreFieldName(r),s=ot(a),o=r.variables||n.variables,u=n.store,c=u.toReference,l=u.canRead;return{args:Ra(r),field:r.field||null,fieldName:s,storeFieldName:a,variables:o,isReference:Q,toReference:c,storage:i,cache:t.cache,canRead:l,readField:function(){return t.readField(Ma(arguments,e,o),n)},mergeObjects:nl(n.store)}}function Ma(t,e,r){var n=t[0],i=t[1],a=t.length,s;return typeof n=="string"?s={fieldName:n,from:a>1?i:e}:(s=E({},n),fe.call(s,"from")||(s.from=e)),globalThis.__DEV__!==!1&&s.from===void 0&&globalThis.__DEV__!==!1&&P.warn(8,Ko(Array.from(t))),s.variables===void 0&&(s.variables=r),s}function nl(t){return function(r,n){if(oe(r)||oe(n))throw ye(9);if(ae(r)&&ae(n)){var i=t.getFieldValue(r,"__typename"),a=t.getFieldValue(n,"__typename"),s=i&&a&&i!==a;if(s)return n;if(Q(r)&&Yt(n))return t.merge(r.__ref,n),r;if(Yt(r)&&Q(n))return t.merge(r,n.__ref),n;if(Yt(r)&&Yt(n))return E(E({},r),n)}return n}}function La(t,e,r){var n="".concat(e).concat(r),i=t.flavors.get(n);return i||t.flavors.set(n,i=t.clientOnly===e&&t.deferred===r?t:E(E({},t),{clientOnly:e,deferred:r})),i}var Ny=(function(){function t(e,r,n){this.cache=e,this.reader=r,this.fragments=n}return t.prototype.writeToStore=function(e,r){var n=this,i=r.query,a=r.result,s=r.dataId,o=r.variables,u=r.overwrite,c=St(i),l=wy();o=E(E({},oa(c)),o);var f=E(E({store:e,written:Object.create(null),merge:function(p,y){return l.merge(p,y)},variables:o,varString:tt(o)},jc(i,this.fragments)),{overwrite:!!u,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map}),d=this.processSelectionSet({result:a||Object.create(null),dataId:s,selectionSet:c.selectionSet,mergeTree:{map:new Map},context:f});if(!Q(d))throw ye(12,a);return f.incomingById.forEach(function(p,y){var m=p.storeObject,v=p.mergeTree,h=p.fieldNodeSet,b=Lt(y);if(v&&v.map.size){var S=n.applyMerges(v,b,m,f);if(Q(S))return;m=S}if(globalThis.__DEV__!==!1&&!f.overwrite){var w=Object.create(null);h.forEach(function(I){I.selectionSet&&(w[I.name.value]=!0)});var D=function(I){return w[ot(I)]===!0},x=function(I){var A=v&&v.map.get(I);return!!(A&&A.info&&A.info.merge)};Object.keys(m).forEach(function(I){D(I)&&!x(I)&&Ry(b,m,I,f.store)})}e.merge(y,m)}),e.retain(d.__ref),d},t.prototype.processSelectionSet=function(e){var r=this,n=e.dataId,i=e.result,a=e.selectionSet,s=e.context,o=e.mergeTree,u=this.cache.policies,c=Object.create(null),l=n&&u.rootTypenamesById[n]||sa(i,a,s.fragmentMap)||n&&s.store.get(n,"__typename");typeof l=="string"&&(c.__typename=l);var f=function(){var S=Ma(arguments,c,s.variables);if(Q(S.from)){var w=s.incomingById.get(S.from.__ref);if(w){var D=u.readField(E(E({},S),{from:w.storeObject}),s);if(D!==void 0)return D}}return u.readField(S,s)},d=new Set;this.flattenFields(a,i,s,l).forEach(function(S,w){var D,x=Ve(w),I=i[x];if(d.add(w),I!==void 0){var A=u.getStoreFieldName({typename:l,fieldName:w.name.value,field:w,variables:S.variables}),M=al(o,A),U=r.processFieldValue(I,w,w.selectionSet?La(S,!1,!1):S,M),L=void 0;w.selectionSet&&(Q(U)||Yt(U))&&(L=f("__typename",U));var se=u.getMergeFunction(l,w.name.value,L);se?M.info={field:w,typename:l,merge:se}:sl(o,A),c=S.merge(c,(D={},D[A]=U,D))}else globalThis.__DEV__!==!1&&!S.clientOnly&&!S.deferred&&!pa.added(w)&&!u.getReadFunction(l,w.name.value)&&globalThis.__DEV__!==!1&&P.error(13,Ve(w),i)});try{var p=u.identify(i,{typename:l,selectionSet:a,fragmentMap:s.fragmentMap,storeObject:c,readField:f}),y=p[0],m=p[1];n=n||y,m&&(c=s.merge(c,m))}catch(S){if(!n)throw S}if(typeof n=="string"){var v=Lt(n),h=s.written[n]||(s.written[n]=[]);if(h.indexOf(a)>=0||(h.push(a),this.reader&&this.reader.isFresh(i,v,a,s)))return v;var b=s.incomingById.get(n);return b?(b.storeObject=s.merge(b.storeObject,c),b.mergeTree=ja(b.mergeTree,o),d.forEach(function(S){return b.fieldNodeSet.add(S)})):s.incomingById.set(n,{storeObject:c,mergeTree:On(o)?void 0:o,fieldNodeSet:d}),v}return c},t.prototype.processFieldValue=function(e,r,n,i){var a=this;return!r.selectionSet||e===null?globalThis.__DEV__!==!1?nc(e):e:oe(e)?e.map(function(s,o){var u=a.processFieldValue(s,r,n,al(i,o));return sl(i,o),u}):this.processSelectionSet({result:e,selectionSet:r.selectionSet,context:n,mergeTree:i})},t.prototype.flattenFields=function(e,r,n,i){i===void 0&&(i=sa(r,e,n.fragmentMap));var a=new Map,s=this.cache.policies,o=new qe(!1);return(function u(c,l){var f=o.lookup(c,l.clientOnly,l.deferred);f.visited||(f.visited=!0,c.selections.forEach(function(d){if(vr(d,n.variables)){var p=l.clientOnly,y=l.deferred;if(!(p&&y)&&Ae(d.directives)&&d.directives.forEach(function(h){var b=h.name.value;if(b==="client"&&(p=!0),b==="defer"){var S=hn(h,n.variables);(!S||S.if!==!1)&&(y=!0)}}),rt(d)){var m=a.get(d);m&&(p=p&&m.clientOnly,y=y&&m.deferred),a.set(d,La(n,p,y))}else{var v=dn(d,n.lookupFragment);if(!v&&d.kind===F.FRAGMENT_SPREAD)throw ye(14,d.name.value);v&&s.fragmentMatches(v,i,r,n.variables)&&u(v.selectionSet,La(n,p,y))}}}))})(e,n),a},t.prototype.applyMerges=function(e,r,n,i,a){var s,o=this;if(e.map.size&&!Q(n)){var u=!oe(n)&&(Q(r)||Yt(r))?r:void 0,c=n;u&&!a&&(a=[Q(u)?u.__ref:u]);var l,f=function(d,p){return oe(d)?typeof p=="number"?d[p]:void 0:i.store.getFieldValue(d,String(p))};e.map.forEach(function(d,p){var y=f(u,p),m=f(c,p);if(m!==void 0){a&&a.push(p);var v=o.applyMerges(d,y,m,i,a);v!==m&&(l=l||new Map,l.set(p,v)),a&&P(a.pop()===p)}}),l&&(n=oe(c)?c.slice(0):E({},c),l.forEach(function(d,p){n[p]=d}))}return e.info?this.cache.policies.runMergeFunction(r,n,e.info,i,a&&(s=i.store).getStorage.apply(s,a)):n},t})(),il=[];function al(t,e){var r=t.map;return r.has(e)||r.set(e,il.pop()||{map:new Map}),r.get(e)}function ja(t,e){if(t===e||!e||On(e))return t;if(!t||On(t))return e;var r=t.info&&e.info?E(E({},t.info),e.info):t.info||e.info,n=t.map.size&&e.map.size,i=n?new Map:t.map.size?t.map:e.map,a={info:r,map:i};if(n){var s=new Set(e.map.keys());t.map.forEach(function(o,u){a.map.set(u,ja(o,e.map.get(u))),s.delete(u)}),s.forEach(function(o){a.map.set(o,ja(e.map.get(o),t.map.get(o)))})}return a}function On(t){return!t||!(t.info||t.map.size)}function sl(t,e){var r=t.map,n=r.get(e);n&&On(n)&&(il.push(n),r.delete(e))}var ol=new Set;function Ry(t,e,r,n){var i=function(f){var d=n.getFieldValue(f,r);return typeof d=="object"&&d},a=i(t);if(a){var s=i(e);if(s&&!Q(a)&&!ne(a,s)&&!Object.keys(a).every(function(f){return n.getFieldValue(s,f)!==void 0})){var o=n.getFieldValue(t,"__typename")||n.getFieldValue(e,"__typename"),u=ot(r),c="".concat(o,".").concat(u);if(!ol.has(c)){ol.add(c);var l=[];!oe(a)&&!oe(s)&&[a,s].forEach(function(f){var d=n.getFieldValue(f,"__typename");typeof d=="string"&&!l.includes(d)&&l.push(d)}),globalThis.__DEV__!==!1&&P.warn(15,u,o,l.length?"either ensure all objects of type "+l.join(" and ")+" have an ID or a custom merge function, or ":"",c,E({},a),E({},s))}}}}var qa=(function(t){De(e,t);function e(r){r===void 0&&(r={});var n=t.call(this)||this;return n.watches=new Set,n.addTypenameTransform=new Bu(pa),n.assumeImmutableResults=!0,n.makeVar=$y,n.txCount=0,n.config=_y(r),n.addTypename=!!n.config.addTypename,n.policies=new Py({cache:n,dataIdFromObject:n.config.dataIdFromObject,possibleTypes:n.config.possibleTypes,typePolicies:n.config.typePolicies}),n.init(),n}return e.prototype.init=function(){var r=this.data=new Cr.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=r.stump,this.resetResultCache()},e.prototype.resetResultCache=function(r){var n=this,i=this.storeReader,a=this.config.fragments;this.storeWriter=new Ny(this,this.storeReader=new xy({cache:this,addTypename:this.addTypename,resultCacheMaxSize:this.config.resultCacheMaxSize,canonizeResults:Mc(this.config),canon:r?void 0:i&&i.canon,fragments:a}),a),this.maybeBroadcastWatch=Dr(function(s,o){return n.broadcastWatch(s,o)},{max:this.config.resultCacheMaxSize||Ue["inMemoryCache.maybeBroadcastWatch"]||5e3,makeCacheKey:function(s){var o=s.optimistic?n.optimisticData:n.data;if(Ar(o)){var u=s.optimistic,c=s.id,l=s.variables;return o.makeCacheKey(s.query,s.callback,tt({optimistic:u,id:c,variables:l}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach(function(s){return s.resetCaching()})},e.prototype.restore=function(r){return this.init(),r&&this.data.replace(r),this},e.prototype.extract=function(r){return r===void 0&&(r=!1),(r?this.optimisticData:this.data).extract()},e.prototype.read=function(r){var n=r.returnPartialData,i=n===void 0?!1:n;try{return this.storeReader.diffQueryAgainstStore(E(E({},r),{store:r.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:i})).result||null}catch(a){if(a instanceof Pc)return null;throw a}},e.prototype.write=function(r){try{return++this.txCount,this.storeWriter.writeToStore(this.data,r)}finally{!--this.txCount&&r.broadcast!==!1&&this.broadcastWatches()}},e.prototype.modify=function(r){if(fe.call(r,"id")&&!r.id)return!1;var n=r.optimistic?this.optimisticData:this.data;try{return++this.txCount,n.modify(r.id||"ROOT_QUERY",r.fields)}finally{!--this.txCount&&r.broadcast!==!1&&this.broadcastWatches()}},e.prototype.diff=function(r){return this.storeReader.diffQueryAgainstStore(E(E({},r),{store:r.optimistic?this.optimisticData:this.data,rootId:r.id||"ROOT_QUERY",config:this.config}))},e.prototype.watch=function(r){var n=this;return this.watches.size||Fy(this),this.watches.add(r),r.immediate&&this.maybeBroadcastWatch(r),function(){n.watches.delete(r)&&!n.watches.size&&Qc(n),n.maybeBroadcastWatch.forget(r)}},e.prototype.gc=function(r){var n;tt.reset(),it.reset(),this.addTypenameTransform.resetCache(),(n=this.config.fragments)===null||n===void 0||n.resetCaches();var i=this.optimisticData.gc();return r&&!this.txCount&&(r.resetResultCache?this.resetResultCache(r.resetResultIdentities):r.resetResultIdentities&&this.storeReader.resetCanon()),i},e.prototype.retain=function(r,n){return(n?this.optimisticData:this.data).retain(r)},e.prototype.release=function(r,n){return(n?this.optimisticData:this.data).release(r)},e.prototype.identify=function(r){if(Q(r))return r.__ref;try{return this.policies.identify(r)[0]}catch(n){globalThis.__DEV__!==!1&&P.warn(n)}},e.prototype.evict=function(r){if(!r.id){if(fe.call(r,"id"))return!1;r=E(E({},r),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(r,this.data)}finally{!--this.txCount&&r.broadcast!==!1&&this.broadcastWatches()}},e.prototype.reset=function(r){var n=this;return this.init(),tt.reset(),r&&r.discardWatches?(this.watches.forEach(function(i){return n.maybeBroadcastWatch.forget(i)}),this.watches.clear(),Qc(this)):this.broadcastWatches(),Promise.resolve()},e.prototype.removeOptimistic=function(r){var n=this.optimisticData.removeLayer(r);n!==this.optimisticData&&(this.optimisticData=n,this.broadcastWatches())},e.prototype.batch=function(r){var n=this,i=r.update,a=r.optimistic,s=a===void 0?!0:a,o=r.removeOptimistic,u=r.onWatchUpdated,c,l=function(d){var p=n,y=p.data,m=p.optimisticData;++n.txCount,d&&(n.data=n.optimisticData=d);try{return c=i(n)}finally{--n.txCount,n.data=y,n.optimisticData=m}},f=new Set;return u&&!this.txCount&&this.broadcastWatches(E(E({},r),{onWatchUpdated:function(d){return f.add(d),!1}})),typeof s=="string"?this.optimisticData=this.optimisticData.addLayer(s,l):s===!1?l(this.data):l(),typeof o=="string"&&(this.optimisticData=this.optimisticData.removeLayer(o)),u&&f.size?(this.broadcastWatches(E(E({},r),{onWatchUpdated:function(d,p){var y=u.call(this,d,p);return y!==!1&&f.delete(d),y}})),f.size&&f.forEach(function(d){return n.maybeBroadcastWatch.dirty(d)})):this.broadcastWatches(r),c},e.prototype.performTransaction=function(r,n){return this.batch({update:r,optimistic:n||n!==null})},e.prototype.transformDocument=function(r){return this.addTypenameToDocument(this.addFragmentsToDocument(r))},e.prototype.fragmentMatches=function(r,n){return this.policies.fragmentMatches(r,n)},e.prototype.lookupFragment=function(r){var n;return((n=this.config.fragments)===null||n===void 0?void 0:n.lookup(r))||null},e.prototype.broadcastWatches=function(r){var n=this;this.txCount||this.watches.forEach(function(i){return n.maybeBroadcastWatch(i,r)})},e.prototype.addFragmentsToDocument=function(r){var n=this.config.fragments;return n?n.transform(r):r},e.prototype.addTypenameToDocument=function(r){return this.addTypename?this.addTypenameTransform.transformDocument(r):r},e.prototype.broadcastWatch=function(r,n){var i=r.lastDiff,a=this.diff(r);n&&(r.optimistic&&typeof n.optimistic=="string"&&(a.fromOptimisticTransaction=!0),n.onWatchUpdated&&n.onWatchUpdated.call(this,r,a,i)===!1)||(!i||!ne(i.result,a.result))&&r.callback(r.lastDiff=a,i)},e})(Ac);globalThis.__DEV__!==!1&&(qa.prototype.getMemoryInternals=qm);var H;(function(t){t[t.loading=1]="loading",t[t.setVariables=2]="setVariables",t[t.fetchMore=3]="fetchMore",t[t.refetch=4]="refetch",t[t.poll=6]="poll",t[t.ready=7]="ready",t[t.error=8]="error"})(H||(H={}));function Xt(t){return t?t<7:!1}var ul=Object.assign,My=Object.hasOwnProperty,xn=(function(t){De(e,t);function e(r){var n=r.queryManager,i=r.queryInfo,a=r.options,s=this,o=e.inactiveOnCreation.getValue();s=t.call(this,function(h){s._getOrCreateQuery();try{var b=h._subscription._observer;b&&!b.error&&(b.error=Ly)}catch{}var S=!s.observers.size;s.observers.add(h);var w=s.last;return w&&w.error?h.error&&h.error(w.error):w&&w.result&&h.next&&h.next(s.maskResult(w.result)),S&&s.reobserve().catch(function(){}),function(){s.observers.delete(h)&&!s.observers.size&&s.tearDownQuery()}})||this,s.observers=new Set,s.subscriptions=new Set,s.dirty=!1,s._getOrCreateQuery=function(){return o&&(n.queries.set(s.queryId,i),o=!1),s.queryManager.getOrCreateQuery(s.queryId)},s.queryInfo=i,s.queryManager=n,s.waitForOwnResult=Ua(a.fetchPolicy),s.isTornDown=!1,s.subscribeToMore=s.subscribeToMore.bind(s),s.maskResult=s.maskResult.bind(s);var u=n.defaultOptions.watchQuery,c=u===void 0?{}:u,l=c.fetchPolicy,f=l===void 0?"cache-first":l,d=a.fetchPolicy,p=d===void 0?f:d,y=a.initialFetchPolicy,m=y===void 0?p==="standby"?f:p:y;s.options=E(E({},a),{initialFetchPolicy:m,fetchPolicy:p}),s.queryId=i.queryId||n.generateQueryId();var v=St(s.query);return s.queryName=v&&v.name&&v.name.value,s}return Object.defineProperty(e.prototype,"query",{get:function(){return this.lastQuery||this.options.query},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"variables",{get:function(){return this.options.variables},enumerable:!1,configurable:!0}),e.prototype.result=function(){var r=this;return new Promise(function(n,i){var a={next:function(o){n(o),r.observers.delete(a),r.observers.size||r.queryManager.removeQuery(r.queryId),setTimeout(function(){s.unsubscribe()},0)},error:i},s=r.subscribe(a)})},e.prototype.resetDiff=function(){this.queryInfo.resetDiff()},e.prototype.getCurrentFullResult=function(r){r===void 0&&(r=!0);var n=this.getLastResult(!0),i=this.queryInfo.networkStatus||n&&n.networkStatus||H.ready,a=E(E({},n),{loading:Xt(i),networkStatus:i}),s=this.options.fetchPolicy,o=s===void 0?"cache-first":s;if(!(Ua(o)||this.queryManager.getDocumentInfo(this.query).hasForcedResolvers))if(this.waitForOwnResult)this.queryInfo.updateWatch();else{var u=this.queryInfo.getDiff();(u.complete||this.options.returnPartialData)&&(a.data=u.result),ne(a.data,{})&&(a.data=void 0),u.complete?(delete a.partial,u.complete&&a.networkStatus===H.loading&&(o==="cache-first"||o==="cache-only")&&(a.networkStatus=H.ready,a.loading=!1)):a.partial=!0,a.networkStatus===H.ready&&(a.error||a.errors)&&(a.networkStatus=H.error),globalThis.__DEV__!==!1&&!u.complete&&!this.options.partialRefetch&&!a.loading&&!a.data&&!a.error&&cl(u.missing)}return r&&this.updateLastResult(a),a},e.prototype.getCurrentResult=function(r){return r===void 0&&(r=!0),this.maskResult(this.getCurrentFullResult(r))},e.prototype.isDifferentFromLastResult=function(r,n){if(!this.last)return!0;var i=this.queryManager.getDocumentInfo(this.query),a=this.queryManager.dataMasking,s=a?i.nonReactiveQuery:this.query,o=a||i.hasNonreactiveDirective?!Tc(s,this.last.result,r,this.variables):!ne(this.last.result,r);return o||n&&!ne(this.last.variables,n)},e.prototype.getLast=function(r,n){var i=this.last;if(i&&i[r]&&(!n||ne(i.variables,this.variables)))return i[r]},e.prototype.getLastResult=function(r){return this.getLast("result",r)},e.prototype.getLastError=function(r){return this.getLast("error",r)},e.prototype.resetLastResults=function(){delete this.last,this.isTornDown=!1},e.prototype.resetQueryStoreErrors=function(){this.queryManager.resetErrors(this.queryId)},e.prototype.refetch=function(r){var n,i={pollInterval:0},a=this.options.fetchPolicy;if(a==="no-cache"?i.fetchPolicy="no-cache":i.fetchPolicy="network-only",globalThis.__DEV__!==!1&&r&&My.call(r,"variables")){var s=Tu(this.query),o=s.variableDefinitions;(!o||!o.some(function(u){return u.variable.name.value==="variables"}))&&globalThis.__DEV__!==!1&&P.warn(21,r,((n=s.name)===null||n===void 0?void 0:n.value)||s)}return r&&!ne(this.options.variables,r)&&(i.variables=this.options.variables=E(E({},this.options.variables),r)),this.queryInfo.resetLastWrite(),this.reobserve(i,H.refetch)},e.prototype.fetchMore=function(r){var n=this,i=E(E({},r.query?r:E(E(E(E({},this.options),{query:this.options.query}),r),{variables:E(E({},this.options.variables),r.variables)})),{fetchPolicy:"no-cache"});i.query=this.transformDocument(i.query);var a=this.queryManager.generateQueryId();this.lastQuery=r.query?this.transformDocument(this.options.query):i.query;var s=this.queryInfo,o=s.networkStatus;s.networkStatus=H.fetchMore,i.notifyOnNetworkStatusChange&&this.observe();var u=new Set,c=r?.updateQuery,l=this.options.fetchPolicy!=="no-cache";return l||P(c,22),this.queryManager.fetchQuery(a,i,H.fetchMore).then(function(f){if(n.queryManager.removeQuery(a),s.networkStatus===H.fetchMore&&(s.networkStatus=o),l)n.queryManager.cache.batch({update:function(y){var m=r.updateQuery;m?y.updateQuery({query:n.query,variables:n.variables,returnPartialData:!0,optimistic:!1},function(v){return m(v,{fetchMoreResult:f.data,variables:i.variables})}):y.writeQuery({query:i.query,variables:i.variables,data:f.data})},onWatchUpdated:function(y){u.add(y.query)}});else{var d=n.getLast("result"),p=c(d.data,{fetchMoreResult:f.data,variables:i.variables});n.reportResult(E(E({},d),{networkStatus:o,loading:Xt(o),data:p}),n.variables)}return n.maskResult(f)}).finally(function(){l&&!u.has(n.query)&&n.reobserveCacheFirst()})},e.prototype.subscribeToMore=function(r){var n=this,i=this.queryManager.startGraphQLSubscription({query:r.document,variables:r.variables,context:r.context}).subscribe({next:function(a){var s=r.updateQuery;s&&n.updateQuery(function(o,u){return s(o,E({subscriptionData:a},u))})},error:function(a){if(r.onError){r.onError(a);return}globalThis.__DEV__!==!1&&P.error(23,a)}});return this.subscriptions.add(i),function(){n.subscriptions.delete(i)&&i.unsubscribe()}},e.prototype.setOptions=function(r){return this.reobserve(r)},e.prototype.silentSetOptions=function(r){var n=Ht(this.options,r||{});ul(this.options,n)},e.prototype.setVariables=function(r){return ne(this.variables,r)?this.observers.size?this.result():Promise.resolve():(this.options.variables=r,this.observers.size?this.reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:r},H.setVariables):Promise.resolve())},e.prototype.updateQuery=function(r){var n=this.queryManager,i=n.cache.diff({query:this.options.query,variables:this.variables,returnPartialData:!0,optimistic:!1}),a=i.result,s=i.complete,o=r(a,{variables:this.variables,complete:!!s,previousData:a});o&&(n.cache.writeQuery({query:this.options.query,data:o,variables:this.variables}),n.broadcastQueries())},e.prototype.startPolling=function(r){this.options.pollInterval=r,this.updatePolling()},e.prototype.stopPolling=function(){this.options.pollInterval=0,this.updatePolling()},e.prototype.applyNextFetchPolicy=function(r,n){if(n.nextFetchPolicy){var i=n.fetchPolicy,a=i===void 0?"cache-first":i,s=n.initialFetchPolicy,o=s===void 0?a:s;a==="standby"||(typeof n.nextFetchPolicy=="function"?n.fetchPolicy=n.nextFetchPolicy(a,{reason:r,options:n,observable:this,initialFetchPolicy:o}):r==="variables-changed"?n.fetchPolicy=o:n.fetchPolicy=n.nextFetchPolicy)}return n.fetchPolicy},e.prototype.fetch=function(r,n,i){var a=this._getOrCreateQuery();return a.setObservableQuery(this),this.queryManager.fetchConcastWithInfo(a,r,n,i)},e.prototype.updatePolling=function(){var r=this;if(!this.queryManager.ssrMode){var n=this,i=n.pollingInfo,a=n.options.pollInterval;if(!a||!this.hasObservers()){i&&(clearTimeout(i.timeout),delete this.pollingInfo);return}if(!(i&&i.interval===a)){P(a,24);var s=i||(this.pollingInfo={});s.interval=a;var o=function(){var c,l;r.pollingInfo&&(!Xt(r.queryInfo.networkStatus)&&!(!((l=(c=r.options).skipPollAttempt)===null||l===void 0)&&l.call(c))?r.reobserve({fetchPolicy:r.options.initialFetchPolicy==="no-cache"?"no-cache":"network-only"},H.poll).then(u,u):u())},u=function(){var c=r.pollingInfo;c&&(clearTimeout(c.timeout),c.timeout=setTimeout(o,c.interval))};u()}}},e.prototype.updateLastResult=function(r,n){n===void 0&&(n=this.variables);var i=this.getLastError();return i&&this.last&&!ne(n,this.last.variables)&&(i=void 0),this.last=E({result:this.queryManager.assumeImmutableResults?r:nc(r),variables:n},i?{error:i}:null)},e.prototype.reobserveAsConcast=function(r,n){var i=this;this.isTornDown=!1;var a=n===H.refetch||n===H.fetchMore||n===H.poll,s=this.options.variables,o=this.options.fetchPolicy,u=Ht(this.options,r||{}),c=a?u:ul(this.options,u),l=this.transformDocument(c.query);this.lastQuery=l,a||(this.updatePolling(),r&&r.variables&&!ne(r.variables,s)&&c.fetchPolicy!=="standby"&&(c.fetchPolicy===o||typeof c.nextFetchPolicy=="function")&&(this.applyNextFetchPolicy("variables-changed",c),n===void 0&&(n=H.setVariables))),this.waitForOwnResult&&(this.waitForOwnResult=Ua(c.fetchPolicy));var f=function(){i.concast===y&&(i.waitForOwnResult=!1)},d=c.variables&&E({},c.variables),p=this.fetch(c,n,l),y=p.concast,m=p.fromLink,v={next:function(h){ne(i.variables,d)&&(f(),i.reportResult(h,d))},error:function(h){ne(i.variables,d)&&(fc(h)||(h=new st({networkError:h})),f(),i.reportError(h,d))}};return!a&&(m||!this.concast)&&(this.concast&&this.observer&&this.concast.removeObserver(this.observer),this.concast=y,this.observer=v),y.addObserver(v),y},e.prototype.reobserve=function(r,n){return Cg(this.reobserveAsConcast(r,n).promise.then(this.maskResult))},e.prototype.resubscribeAfterError=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=this.last;this.resetLastResults();var a=this.subscribe.apply(this,r);return this.last=i,a},e.prototype.observe=function(){this.reportResult(this.getCurrentFullResult(!1),this.variables)},e.prototype.reportResult=function(r,n){var i=this.getLastError(),a=this.isDifferentFromLastResult(r,n);(i||!r.partial||this.options.returnPartialData)&&this.updateLastResult(r,n),(i||a)&&xr(this.observers,"next",this.maskResult(r))},e.prototype.reportError=function(r,n){var i=E(E({},this.getLastResult()),{error:r,errors:r.graphQLErrors,networkStatus:H.error,loading:!1});this.updateLastResult(i,n),xr(this.observers,"error",this.last.error=r)},e.prototype.hasObservers=function(){return this.observers.size>0},e.prototype.tearDownQuery=function(){this.isTornDown||(this.concast&&this.observer&&(this.concast.removeObserver(this.observer),delete this.concast,delete this.observer),this.stopPolling(),this.subscriptions.forEach(function(r){return r.unsubscribe()}),this.subscriptions.clear(),this.queryManager.stopQuery(this.queryId),this.observers.clear(),this.isTornDown=!0)},e.prototype.transformDocument=function(r){return this.queryManager.transform(r)},e.prototype.maskResult=function(r){return r&&"data"in r?E(E({},r),{data:this.queryManager.maskOperation({document:this.query,data:r.data,fetchPolicy:this.options.fetchPolicy,id:this.queryId})}):r},e.prototype.resetNotifications=function(){this.cancelNotifyTimeout(),this.dirty=!1},e.prototype.cancelNotifyTimeout=function(){this.notifyTimeout&&(clearTimeout(this.notifyTimeout),this.notifyTimeout=void 0)},e.prototype.scheduleNotify=function(){var r=this;this.dirty||(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(function(){return r.notify()},0)))},e.prototype.notify=function(){if(this.cancelNotifyTimeout(),this.dirty&&(this.options.fetchPolicy=="cache-only"||this.options.fetchPolicy=="cache-and-network"||!Xt(this.queryInfo.networkStatus))){var r=this.queryInfo.getDiff();r.fromOptimisticTransaction?this.observe():this.reobserveCacheFirst()}this.dirty=!1},e.prototype.reobserveCacheFirst=function(){var r=this.options,n=r.fetchPolicy,i=r.nextFetchPolicy;return n==="cache-and-network"||n==="network-only"?this.reobserve({fetchPolicy:"cache-first",nextFetchPolicy:function(a,s){return this.nextFetchPolicy=i,typeof this.nextFetchPolicy=="function"?this.nextFetchPolicy(a,s):n}}):this.reobserve()},e.inactiveOnCreation=new Er,e})(W);ic(xn);function Ly(t){globalThis.__DEV__!==!1&&P.error(25,t.message,t.stack)}function cl(t){globalThis.__DEV__!==!1&&t&&globalThis.__DEV__!==!1&&P.debug(26,t)}function Ua(t){return t==="network-only"||t==="no-cache"||t==="standby"}var Kt=new(vt?WeakMap:Map);function Va(t,e){var r=t[e];typeof r=="function"&&(t[e]=function(){return Kt.set(t,(Kt.get(t)+1)%1e15),r.apply(this,arguments)})}var Ba=(function(){function t(e,r){r===void 0&&(r=e.generateQueryId()),this.queryId=r,this.document=null,this.lastRequestId=1,this.stopped=!1,this.observableQuery=null;var n=this.cache=e.cache;Kt.has(n)||(Kt.set(n,0),Va(n,"evict"),Va(n,"modify"),Va(n,"reset"))}return t.prototype.init=function(e){var r=e.networkStatus||H.loading;return this.variables&&this.networkStatus!==H.loading&&!ne(this.variables,e.variables)&&(r=H.setVariables),ne(e.variables,this.variables)||(this.lastDiff=void 0,this.cancel()),Object.assign(this,{document:e.document,variables:e.variables,networkError:null,graphQLErrors:this.graphQLErrors||[],networkStatus:r}),e.observableQuery&&this.setObservableQuery(e.observableQuery),e.lastRequestId&&(this.lastRequestId=e.lastRequestId),this},t.prototype.resetDiff=function(){this.lastDiff=void 0},t.prototype.getDiff=function(){var e=this.getDiffOptions();if(this.lastDiff&&ne(e,this.lastDiff.options))return this.lastDiff.diff;this.updateWatch(this.variables);var r=this.observableQuery;if(r&&r.options.fetchPolicy==="no-cache")return{complete:!1};var n=this.cache.diff(e);return this.updateLastDiff(n,e),n},t.prototype.updateLastDiff=function(e,r){this.lastDiff=e?{diff:e,options:r||this.getDiffOptions()}:void 0},t.prototype.getDiffOptions=function(e){var r;return e===void 0&&(e=this.variables),{query:this.document,variables:e,returnPartialData:!0,optimistic:!0,canonizeResults:(r=this.observableQuery)===null||r===void 0?void 0:r.options.canonizeResults}},t.prototype.setDiff=function(e){var r,n,i=this.lastDiff&&this.lastDiff.diff;e&&!e.complete&&(!((r=this.observableQuery)===null||r===void 0)&&r.getLastError())||(this.updateLastDiff(e),ne(i&&i.result,e&&e.result)||(n=this.observableQuery)===null||n===void 0||n.scheduleNotify())},t.prototype.setObservableQuery=function(e){e!==this.observableQuery&&(this.observableQuery=e,e&&(e.queryInfo=this))},t.prototype.stop=function(){var e;if(!this.stopped){this.stopped=!0,(e=this.observableQuery)===null||e===void 0||e.resetNotifications(),this.cancel();var r=this.observableQuery;r&&r.stopPolling()}},t.prototype.cancel=function(){var e;(e=this.cancelWatch)===null||e===void 0||e.call(this),this.cancelWatch=void 0},t.prototype.updateWatch=function(e){var r=this;e===void 0&&(e=this.variables);var n=this.observableQuery;if(!(n&&n.options.fetchPolicy==="no-cache")){var i=E(E({},this.getDiffOptions(e)),{watcher:this,callback:function(a){return r.setDiff(a)}});(!this.lastWatch||!ne(i,this.lastWatch))&&(this.cancel(),this.cancelWatch=this.cache.watch(this.lastWatch=i))}},t.prototype.resetLastWrite=function(){this.lastWrite=void 0},t.prototype.shouldWrite=function(e,r){var n=this.lastWrite;return!(n&&n.dmCount===Kt.get(this.cache)&&ne(r,n.variables)&&ne(e.data,n.result.data))},t.prototype.markResult=function(e,r,n,i){var a=this,s,o=new at,u=Ae(e.errors)?e.errors.slice(0):[];if((s=this.observableQuery)===null||s===void 0||s.resetNotifications(),"incremental"in e&&Ae(e.incremental)){var c=sc(this.getDiff().result,e);e.data=c}else if("hasNext"in e&&e.hasNext){var l=this.getDiff();e.data=o.merge(l.result,e.data)}this.graphQLErrors=u,n.fetchPolicy==="no-cache"?this.updateLastDiff({result:e.data,complete:!0},this.getDiffOptions(n.variables)):i!==0&&(Ga(e,n.errorPolicy)?this.cache.performTransaction(function(f){if(a.shouldWrite(e,n.variables))f.writeQuery({query:r,data:e.data,variables:n.variables,overwrite:i===1}),a.lastWrite={result:e,variables:n.variables,dmCount:Kt.get(a.cache)};else if(a.lastDiff&&a.lastDiff.diff.complete){e.data=a.lastDiff.diff.result;return}var d=a.getDiffOptions(n.variables),p=f.diff(d);!a.stopped&&ne(a.variables,n.variables)&&a.updateWatch(n.variables),a.updateLastDiff(p,d),p.complete&&(e.data=p.result)}):this.lastWrite=void 0)},t.prototype.markReady=function(){return this.networkError=null,this.networkStatus=H.ready},t.prototype.markError=function(e){var r;return this.networkStatus=H.error,this.lastWrite=void 0,(r=this.observableQuery)===null||r===void 0||r.resetNotifications(),e.graphQLErrors&&(this.graphQLErrors=e.graphQLErrors),e.networkError&&(this.networkError=e.networkError),e},t})();function Ga(t,e){e===void 0&&(e="none");var r=e==="ignore"||e==="all",n=!_n(t);return!n&&r&&t.data&&(n=!0),n}var jy=Object.prototype.hasOwnProperty,ll=Object.create(null),qy=(function(){function t(e){var r=this;this.clientAwareness={},this.queries=new Map,this.fetchCancelFns=new Map,this.transformCache=new bu(Ue["queryManager.getDocumentInfo"]||2e3),this.queryIdCounter=1,this.requestIdCounter=1,this.mutationIdCounter=1,this.inFlightLinkObservables=new qe(!1),this.noCacheWarningsByQueryId=new Set;var n=new Bu(function(a){return r.cache.transformDocument(a)},{cache:!1});this.cache=e.cache,this.link=e.link,this.defaultOptions=e.defaultOptions,this.queryDeduplication=e.queryDeduplication,this.clientAwareness=e.clientAwareness,this.localState=e.localState,this.ssrMode=e.ssrMode,this.assumeImmutableResults=e.assumeImmutableResults,this.dataMasking=e.dataMasking;var i=e.documentTransform;this.documentTransform=i?n.concat(i).concat(n):n,this.defaultContext=e.defaultContext||Object.create(null),(this.onBroadcast=e.onBroadcast)&&(this.mutationStore=Object.create(null))}return t.prototype.stop=function(){var e=this;this.queries.forEach(function(r,n){e.stopQueryNoBroadcast(n)}),this.cancelPendingFetches(ye(27))},t.prototype.cancelPendingFetches=function(e){this.fetchCancelFns.forEach(function(r){return r(e)}),this.fetchCancelFns.clear()},t.prototype.mutate=function(e){return Ke(this,arguments,void 0,function(r){var n,i,a,s,o,u,c,l=r.mutation,f=r.variables,d=r.optimisticResponse,p=r.updateQueries,y=r.refetchQueries,m=y===void 0?[]:y,v=r.awaitRefetchQueries,h=v===void 0?!1:v,b=r.update,S=r.onQueryUpdated,w=r.fetchPolicy,D=w===void 0?((u=this.defaultOptions.mutate)===null||u===void 0?void 0:u.fetchPolicy)||"network-only":w,x=r.errorPolicy,I=x===void 0?((c=this.defaultOptions.mutate)===null||c===void 0?void 0:c.errorPolicy)||"none":x,A=r.keepRootFields,M=r.context;return Ze(this,function(U){switch(U.label){case 0:return P(l,28),P(D==="network-only"||D==="no-cache",29),n=this.generateMutationId(),l=this.cache.transformForLink(this.transform(l)),i=this.getDocumentInfo(l).hasClientExports,f=this.getVariables(l,f),i?[4,this.localState.addExportedVariables(l,f,M)]:[3,2];case 1:f=U.sent(),U.label=2;case 2:return a=this.mutationStore&&(this.mutationStore[n]={mutation:l,variables:f,loading:!0,error:null}),s=d&&this.markMutationOptimistic(d,{mutationId:n,document:l,variables:f,fetchPolicy:D,errorPolicy:I,context:M,updateQueries:p,update:b,keepRootFields:A}),this.broadcastQueries(),o=this,[2,new Promise(function(L,se){return Ea(o.getObservableFromLink(l,E(E({},M),{optimisticResponse:s?d:void 0}),f,{},!1),function(K){if(_n(K)&&I==="none")throw new st({graphQLErrors:wa(K)});a&&(a.loading=!1,a.error=null);var ge=E({},K);return typeof m=="function"&&(m=m(ge)),I==="ignore"&&_n(ge)&&delete ge.errors,o.markMutationResult({mutationId:n,result:ge,document:l,variables:f,fetchPolicy:D,errorPolicy:I,context:M,update:b,updateQueries:p,awaitRefetchQueries:h,refetchQueries:m,removeOptimistic:s?n:void 0,onQueryUpdated:S,keepRootFields:A})}).subscribe({next:function(K){o.broadcastQueries(),(!("hasNext"in K)||K.hasNext===!1)&&L(E(E({},K),{data:o.maskOperation({document:l,data:K.data,fetchPolicy:D,id:n})}))},error:function(K){a&&(a.loading=!1,a.error=K),s&&o.cache.removeOptimistic(n),o.broadcastQueries(),se(K instanceof st?K:new st({networkError:K}))}})})]}})})},t.prototype.markMutationResult=function(e,r){var n=this;r===void 0&&(r=this.cache);var i=e.result,a=[],s=e.fetchPolicy==="no-cache";if(!s&&Ga(i,e.errorPolicy)){if(Wt(i)||a.push({result:i.data,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}),Wt(i)&&Ae(i.incremental)){var o=r.diff({id:"ROOT_MUTATION",query:this.getDocumentInfo(e.document).asQuery,variables:e.variables,optimistic:!1,returnPartialData:!0}),u=void 0;o.result&&(u=sc(o.result,i)),typeof u<"u"&&(i.data=u,a.push({result:u,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}))}var c=e.updateQueries;c&&this.queries.forEach(function(f,d){var p=f.observableQuery,y=p&&p.queryName;if(!(!y||!jy.call(c,y))){var m=c[y],v=n.queries.get(d),h=v.document,b=v.variables,S=r.diff({query:h,variables:b,returnPartialData:!0,optimistic:!1}),w=S.result,D=S.complete;if(D&&w){var x=m(w,{mutationResult:i,queryName:h&&_r(h)||void 0,queryVariables:b});x&&a.push({result:x,dataId:"ROOT_QUERY",query:h,variables:b})}}})}if(a.length>0||(e.refetchQueries||"").length>0||e.update||e.onQueryUpdated||e.removeOptimistic){var l=[];if(this.refetchQueries({updateCache:function(f){s||a.forEach(function(m){return f.write(m)});var d=e.update,p=!Mg(i)||Wt(i)&&!i.hasNext;if(d){if(!s){var y=f.diff({id:"ROOT_MUTATION",query:n.getDocumentInfo(e.document).asQuery,variables:e.variables,optimistic:!1,returnPartialData:!0});y.complete&&(i=E(E({},i),{data:y.result}),"incremental"in i&&delete i.incremental,"hasNext"in i&&delete i.hasNext)}p&&d(f,i,{context:e.context,variables:e.variables})}!s&&!e.keepRootFields&&p&&f.modify({id:"ROOT_MUTATION",fields:function(m,v){var h=v.fieldName,b=v.DELETE;return h==="__typename"?m:b}})},include:e.refetchQueries,optimistic:!1,removeOptimistic:e.removeOptimistic,onQueryUpdated:e.onQueryUpdated||null}).forEach(function(f){return l.push(f)}),e.awaitRefetchQueries||e.onQueryUpdated)return Promise.all(l).then(function(){return i})}return Promise.resolve(i)},t.prototype.markMutationOptimistic=function(e,r){var n=this,i=typeof e=="function"?e(r.variables,{IGNORE:ll}):e;return i===ll?!1:(this.cache.recordOptimisticTransaction(function(a){try{n.markMutationResult(E(E({},r),{result:{data:i}}),a)}catch(s){globalThis.__DEV__!==!1&&P.error(s)}},r.mutationId),!0)},t.prototype.fetchQuery=function(e,r,n){return this.fetchConcastWithInfo(this.getOrCreateQuery(e),r,n).concast.promise},t.prototype.getQueryStore=function(){var e=Object.create(null);return this.queries.forEach(function(r,n){e[n]={variables:r.variables,networkStatus:r.networkStatus,networkError:r.networkError,graphQLErrors:r.graphQLErrors}}),e},t.prototype.resetErrors=function(e){var r=this.queries.get(e);r&&(r.networkError=void 0,r.graphQLErrors=[])},t.prototype.transform=function(e){return this.documentTransform.transformDocument(e)},t.prototype.getDocumentInfo=function(e){var r=this.transformCache;if(!r.has(e)){var n={hasClientExports:Sm(e),hasForcedResolvers:this.localState.shouldForceResolvers(e),hasNonreactiveDirective:br(["nonreactive"],e),nonReactiveQuery:_g(e),clientQuery:this.localState.clientQuery(e),serverQuery:Wu([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"},{name:"unmask"}],e),defaultVars:oa(St(e)),asQuery:E(E({},e),{definitions:e.definitions.map(function(i){return i.kind==="OperationDefinition"&&i.operation!=="query"?E(E({},i),{operation:"query"}):i})})};r.set(e,n)}return r.get(e)},t.prototype.getVariables=function(e,r){return E(E({},this.getDocumentInfo(e).defaultVars),r)},t.prototype.watchQuery=function(e){var r=this.transform(e.query);e=E(E({},e),{variables:this.getVariables(r,e.variables)}),typeof e.notifyOnNetworkStatusChange>"u"&&(e.notifyOnNetworkStatusChange=!1);var n=new Ba(this),i=new xn({queryManager:this,queryInfo:n,options:e});return i.lastQuery=r,xn.inactiveOnCreation.getValue()||this.queries.set(i.queryId,n),n.init({document:r,observableQuery:i,variables:i.variables}),i},t.prototype.query=function(e,r){var n=this;r===void 0&&(r=this.generateQueryId()),P(e.query,30),P(e.query.kind==="Document",31),P(!e.returnPartialData,32),P(!e.pollInterval,33);var i=this.transform(e.query);return this.fetchQuery(r,E(E({},e),{query:i})).then(function(a){return a&&E(E({},a),{data:n.maskOperation({document:i,data:a.data,fetchPolicy:e.fetchPolicy,id:r})})}).finally(function(){return n.stopQuery(r)})},t.prototype.generateQueryId=function(){return String(this.queryIdCounter++)},t.prototype.generateRequestId=function(){return this.requestIdCounter++},t.prototype.generateMutationId=function(){return String(this.mutationIdCounter++)},t.prototype.stopQueryInStore=function(e){this.stopQueryInStoreNoBroadcast(e),this.broadcastQueries()},t.prototype.stopQueryInStoreNoBroadcast=function(e){var r=this.queries.get(e);r&&r.stop()},t.prototype.clearStore=function(e){return e===void 0&&(e={discardWatches:!0}),this.cancelPendingFetches(ye(34)),this.queries.forEach(function(r){r.observableQuery?r.networkStatus=H.loading:r.stop()}),this.mutationStore&&(this.mutationStore=Object.create(null)),this.cache.reset(e)},t.prototype.getObservableQueries=function(e){var r=this;e===void 0&&(e="active");var n=new Map,i=new Map,a=new Map,s=new Set;return Array.isArray(e)&&e.forEach(function(o){if(typeof o=="string")i.set(o,o),a.set(o,!1);else if(Hm(o)){var u=it(r.transform(o));i.set(u,_r(o)),a.set(u,!1)}else ae(o)&&o.query&&s.add(o)}),this.queries.forEach(function(o,u){var c=o.observableQuery,l=o.document;if(c){if(e==="all"){n.set(u,c);return}var f=c.queryName,d=c.options.fetchPolicy;if(d==="standby"||e==="active"&&!c.hasObservers())return;(e==="active"||f&&a.has(f)||l&&a.has(it(l)))&&(n.set(u,c),f&&a.set(f,!0),l&&a.set(it(l),!0))}}),s.size&&s.forEach(function(o){var u=Gi("legacyOneTimeQuery"),c=r.getOrCreateQuery(u).init({document:o.query,variables:o.variables}),l=new xn({queryManager:r,queryInfo:c,options:E(E({},o),{fetchPolicy:"network-only"})});P(l.queryId===u),c.setObservableQuery(l),n.set(u,l)}),globalThis.__DEV__!==!1&&a.size&&a.forEach(function(o,u){if(!o){var c=i.get(u);c?globalThis.__DEV__!==!1&&P.warn(35,c):globalThis.__DEV__!==!1&&P.warn(36)}}),n},t.prototype.reFetchObservableQueries=function(e){var r=this;e===void 0&&(e=!1);var n=[];return this.getObservableQueries(e?"all":"active").forEach(function(i,a){var s=i.options.fetchPolicy;i.resetLastResults(),(e||s!=="standby"&&s!=="cache-only")&&n.push(i.refetch()),(r.queries.get(a)||i.queryInfo).setDiff(null)}),this.broadcastQueries(),Promise.all(n)},t.prototype.startGraphQLSubscription=function(e){var r=this,n=e.query,i=e.variables,a=e.fetchPolicy,s=e.errorPolicy,o=s===void 0?"none":s,u=e.context,c=u===void 0?{}:u,l=e.extensions,f=l===void 0?{}:l;n=this.transform(n),i=this.getVariables(n,i);var d=function(y){return r.getObservableFromLink(n,c,y,f).map(function(m){a!=="no-cache"&&(Ga(m,o)&&r.cache.write({query:n,result:m.data,dataId:"ROOT_SUBSCRIPTION",variables:y}),r.broadcastQueries());var v=_n(m),h=lc(m);if(v||h){var b={};if(v&&(b.graphQLErrors=m.errors),h&&(b.protocolErrors=m.extensions[wn]),o==="none"||h)throw new st(b)}return o==="ignore"&&delete m.errors,m})};if(this.getDocumentInfo(n).hasClientExports){var p=this.localState.addExportedVariables(n,i,c).then(d);return new W(function(y){var m=null;return p.then(function(v){return m=v.subscribe(y)},y.error),function(){return m&&m.unsubscribe()}})}return d(i)},t.prototype.stopQuery=function(e){this.stopQueryNoBroadcast(e),this.broadcastQueries()},t.prototype.stopQueryNoBroadcast=function(e){this.stopQueryInStoreNoBroadcast(e),this.removeQuery(e)},t.prototype.removeQuery=function(e){var r;this.fetchCancelFns.delete(e),this.queries.has(e)&&((r=this.queries.get(e))===null||r===void 0||r.stop(),this.queries.delete(e))},t.prototype.broadcastQueries=function(){this.onBroadcast&&this.onBroadcast(),this.queries.forEach(function(e){var r;return(r=e.observableQuery)===null||r===void 0?void 0:r.notify()})},t.prototype.getLocalState=function(){return this.localState},t.prototype.getObservableFromLink=function(e,r,n,i,a){var s=this,o;a===void 0&&(a=(o=r?.queryDeduplication)!==null&&o!==void 0?o:this.queryDeduplication);var u,c=this.getDocumentInfo(e),l=c.serverQuery,f=c.clientQuery;if(l){var d=this,p=d.inFlightLinkObservables,y=d.link,m={query:l,variables:n,operationName:_r(l)||void 0,context:this.prepareContext(E(E({},r),{forceFetch:!a})),extensions:i};if(r=m.context,a){var v=it(l),h=tt(n),b=p.lookup(v,h);if(u=b.observable,!u){var S=new Qt([Oa(y,m)]);u=b.observable=S,S.beforeNext(function w(D,x){D==="next"&&"hasNext"in x&&x.hasNext?S.beforeNext(w):p.remove(v,h)})}}else u=new Qt([Oa(y,m)])}else u=new Qt([W.of({data:{}})]),r=this.prepareContext(r);return f&&(u=Ea(u,function(w){return s.localState.runResolvers({document:f,remoteResult:w,context:r,variables:n})})),u},t.prototype.getResultsFromLink=function(e,r,n){var i=e.lastRequestId=this.generateRequestId(),a=this.cache.transformForLink(n.query);return Ea(this.getObservableFromLink(a,n.context,n.variables),function(s){var o=wa(s),u=o.length>0,c=n.errorPolicy;if(i>=e.lastRequestId){if(u&&c==="none")throw e.markError(new st({graphQLErrors:o}));e.markResult(s,a,n,r),e.markReady()}var l={data:s.data,loading:!1,networkStatus:H.ready};return u&&c==="none"&&(l.data=void 0),u&&c!=="ignore"&&(l.errors=o,l.networkStatus=H.error),l},function(s){var o=fc(s)?s:new st({networkError:s});throw i>=e.lastRequestId&&e.markError(o),o})},t.prototype.fetchConcastWithInfo=function(e,r,n,i){var a=this;n===void 0&&(n=H.loading),i===void 0&&(i=r.query);var s=this.getVariables(i,r.variables),o=this.defaultOptions.watchQuery,u=r.fetchPolicy,c=u===void 0?o&&o.fetchPolicy||"cache-first":u,l=r.errorPolicy,f=l===void 0?o&&o.errorPolicy||"none":l,d=r.returnPartialData,p=d===void 0?!1:d,y=r.notifyOnNetworkStatusChange,m=y===void 0?!1:y,v=r.context,h=v===void 0?{}:v,b=Object.assign({},r,{query:i,variables:s,fetchPolicy:c,errorPolicy:f,returnPartialData:p,notifyOnNetworkStatusChange:m,context:h}),S=function(A){b.variables=A;var M=a.fetchQueryByPolicy(e,b,n);return b.fetchPolicy!=="standby"&&M.sources.length>0&&e.observableQuery&&e.observableQuery.applyNextFetchPolicy("after-fetch",r),M},w=function(){return a.fetchCancelFns.delete(e.queryId)};this.fetchCancelFns.set(e.queryId,function(A){w(),setTimeout(function(){return D.cancel(A)})});var D,x;if(this.getDocumentInfo(b.query).hasClientExports)D=new Qt(this.localState.addExportedVariables(b.query,b.variables,b.context).then(S).then(function(A){return A.sources})),x=!0;else{var I=S(b.variables);x=I.fromLink,D=new Qt(I.sources)}return D.promise.then(w,w),{concast:D,fromLink:x}},t.prototype.refetchQueries=function(e){var r=this,n=e.updateCache,i=e.include,a=e.optimistic,s=a===void 0?!1:a,o=e.removeOptimistic,u=o===void 0?s?Gi("refetchQueries"):void 0:o,c=e.onQueryUpdated,l=new Map;i&&this.getObservableQueries(i).forEach(function(d,p){l.set(p,{oq:d,lastDiff:(r.queries.get(p)||d.queryInfo).getDiff()})});var f=new Map;return n&&this.cache.batch({update:n,optimistic:s&&u||!1,removeOptimistic:u,onWatchUpdated:function(d,p,y){var m=d.watcher instanceof Ba&&d.watcher.observableQuery;if(m){if(c){l.delete(m.queryId);var v=c(m,p,y);return v===!0&&(v=m.refetch()),v!==!1&&f.set(m,v),v}c!==null&&l.set(m.queryId,{oq:m,lastDiff:y,diff:p})}}}),l.size&&l.forEach(function(d,p){var y=d.oq,m=d.lastDiff,v=d.diff,h;c&&(v||(v=r.cache.diff(y.queryInfo.getDiffOptions())),h=c(y,v,m)),(!c||h===!0)&&(h=y.refetch()),h!==!1&&f.set(y,h),p.indexOf("legacyOneTimeQuery")>=0&&r.stopQueryNoBroadcast(p)}),u&&this.cache.removeOptimistic(u),f},t.prototype.maskOperation=function(e){var r,n,i,a=e.document,s=e.data;if(globalThis.__DEV__!==!1){var o=e.fetchPolicy,u=e.id,c=(r=St(a))===null||r===void 0?void 0:r.operation,l=((n=c?.[0])!==null&&n!==void 0?n:"o")+u;this.dataMasking&&o==="no-cache"&&!Fm(a)&&!this.noCacheWarningsByQueryId.has(l)&&(this.noCacheWarningsByQueryId.add(l),globalThis.__DEV__!==!1&&P.warn(37,(i=_r(a))!==null&&i!==void 0?i:"Unnamed ".concat(c??"operation")))}return this.dataMasking?Sy(s,a,this.cache):s},t.prototype.maskFragment=function(e){var r=e.data,n=e.fragment,i=e.fragmentName;return this.dataMasking?Cc(r,n,this.cache,i):r},t.prototype.fetchQueryByPolicy=function(e,r,n){var i=this,a=r.query,s=r.variables,o=r.fetchPolicy,u=r.refetchWritePolicy,c=r.errorPolicy,l=r.returnPartialData,f=r.context,d=r.notifyOnNetworkStatusChange,p=e.networkStatus;e.init({document:a,variables:s,networkStatus:n});var y=function(){return e.getDiff()},m=function(w,D){D===void 0&&(D=e.networkStatus||H.loading);var x=w.result;globalThis.__DEV__!==!1&&!l&&!ne(x,{})&&cl(w.missing);var I=function(A){return W.of(E({data:A,loading:Xt(D),networkStatus:D},w.complete?null:{partial:!0}))};return x&&i.getDocumentInfo(a).hasForcedResolvers?i.localState.runResolvers({document:a,remoteResult:{data:x},context:f,variables:s,onlyRunForcedResolvers:!0}).then(function(A){return I(A.data||void 0)}):c==="none"&&D===H.refetch&&Array.isArray(w.missing)?I(void 0):I(x)},v=o==="no-cache"?0:n===H.refetch&&u!=="merge"?1:2,h=function(){return i.getResultsFromLink(e,v,{query:a,variables:s,context:f,fetchPolicy:o,errorPolicy:c})},b=d&&typeof p=="number"&&p!==n&&Xt(n);switch(o){default:case"cache-first":{var S=y();return S.complete?{fromLink:!1,sources:[m(S,e.markReady())]}:l||b?{fromLink:!0,sources:[m(S),h()]}:{fromLink:!0,sources:[h()]}}case"cache-and-network":{var S=y();return S.complete||l||b?{fromLink:!0,sources:[m(S),h()]}:{fromLink:!0,sources:[h()]}}case"cache-only":return{fromLink:!1,sources:[m(y(),e.markReady())]};case"network-only":return b?{fromLink:!0,sources:[m(y()),h()]}:{fromLink:!0,sources:[h()]};case"no-cache":return b?{fromLink:!0,sources:[m(e.getDiff()),h()]}:{fromLink:!0,sources:[h()]};case"standby":return{fromLink:!1,sources:[]}}},t.prototype.getOrCreateQuery=function(e){return e&&!this.queries.has(e)&&this.queries.set(e,new Ba(this,e)),this.queries.get(e)},t.prototype.prepareContext=function(e){e===void 0&&(e={});var r=this.localState.prepareContext(e);return E(E(E({},this.defaultContext),r),{clientAwareness:this.clientAwareness})},t})(),Uy=(function(){function t(e){var r=e.cache,n=e.client,i=e.resolvers,a=e.fragmentMatcher;this.selectionsToResolveCache=new WeakMap,this.cache=r,n&&(this.client=n),i&&this.addResolvers(i),a&&this.setFragmentMatcher(a)}return t.prototype.addResolvers=function(e){var r=this;this.resolvers=this.resolvers||{},Array.isArray(e)?e.forEach(function(n){r.resolvers=Yu(r.resolvers,n)}):this.resolvers=Yu(this.resolvers,e)},t.prototype.setResolvers=function(e){this.resolvers={},this.addResolvers(e)},t.prototype.getResolvers=function(){return this.resolvers||{}},t.prototype.runResolvers=function(e){return Ke(this,arguments,void 0,function(r){var n=r.document,i=r.remoteResult,a=r.context,s=r.variables,o=r.onlyRunForcedResolvers,u=o===void 0?!1:o;return Ze(this,function(c){return n?[2,this.resolveDocument(n,i.data,a,s,this.fragmentMatcher,u).then(function(l){return E(E({},i),{data:l.result})})]:[2,i]})})},t.prototype.setFragmentMatcher=function(e){this.fragmentMatcher=e},t.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},t.prototype.clientQuery=function(e){return br(["client"],e)&&this.resolvers?e:null},t.prototype.serverQuery=function(e){return Hu(e)},t.prototype.prepareContext=function(e){var r=this.cache;return E(E({},e),{cache:r,getCacheKey:function(n){return r.identify(n)}})},t.prototype.addExportedVariables=function(e){return Ke(this,arguments,void 0,function(r,n,i){return n===void 0&&(n={}),i===void 0&&(i={}),Ze(this,function(a){return r?[2,this.resolveDocument(r,this.buildRootValueFromCache(r,n)||{},this.prepareContext(i),n).then(function(s){return E(E({},n),s.exportedVariables)})]:[2,E({},n)]})})},t.prototype.shouldForceResolvers=function(e){var r=!1;return xe(e,{Directive:{enter:function(n){if(n.name.value==="client"&&n.arguments&&(r=n.arguments.some(function(i){return i.name.value==="always"&&i.value.kind==="BooleanValue"&&i.value.value===!0}),r))return cn}}}),r},t.prototype.buildRootValueFromCache=function(e,r){return this.cache.diff({query:Sg(e),variables:r,returnPartialData:!0,optimistic:!1}).result},t.prototype.resolveDocument=function(e,r){return Ke(this,arguments,void 0,function(n,i,a,s,o,u){var c,l,f,d,p,y,m,v,h,b,S;return a===void 0&&(a={}),s===void 0&&(s={}),o===void 0&&(o=function(){return!0}),u===void 0&&(u=!1),Ze(this,function(w){return c=Vt(n),l=Ut(n),f=Rt(l),d=this.collectSelectionsToResolve(c,f),p=c.operation,y=p?p.charAt(0).toUpperCase()+p.slice(1):"Query",m=this,v=m.cache,h=m.client,b={fragmentMap:f,context:E(E({},a),{cache:v,client:h}),variables:s,fragmentMatcher:o,defaultOperationType:y,exportedVariables:{},selectionsToResolve:d,onlyRunForcedResolvers:u},S=!1,[2,this.resolveSelectionSet(c.selectionSet,S,i,b).then(function(D){return{result:D,exportedVariables:b.exportedVariables}})]})})},t.prototype.resolveSelectionSet=function(e,r,n,i){return Ke(this,void 0,void 0,function(){var a,s,o,u,c,l=this;return Ze(this,function(f){return a=i.fragmentMap,s=i.context,o=i.variables,u=[n],c=function(d){return Ke(l,void 0,void 0,function(){var p,y;return Ze(this,function(m){return!r&&!i.selectionsToResolve.has(d)?[2]:vr(d,o)?rt(d)?[2,this.resolveField(d,r,n,i).then(function(v){var h;typeof v<"u"&&u.push((h={},h[Ve(d)]=v,h))})]:(sg(d)?p=d:(p=a[d.name.value],P(p,19,d.name.value)),p&&p.typeCondition&&(y=p.typeCondition.name.value,i.fragmentMatcher(n,y,s))?[2,this.resolveSelectionSet(p.selectionSet,r,n,i).then(function(v){u.push(v)})]:[2]):[2]})})},[2,Promise.all(e.selections.map(c)).then(function(){return yn(u)})]})})},t.prototype.resolveField=function(e,r,n,i){return Ke(this,void 0,void 0,function(){var a,s,o,u,c,l,f,d,p,y=this;return Ze(this,function(m){return n?(a=i.variables,s=e.name.value,o=Ve(e),u=s!==o,c=n[o]||n[s],l=Promise.resolve(c),(!i.onlyRunForcedResolvers||this.shouldForceResolvers(e))&&(f=n.__typename||i.defaultOperationType,d=this.resolvers&&this.resolvers[f],d&&(p=d[u?s:o],p&&(l=Promise.resolve(Aa.withValue(this.cache,p,[n,hn(e,a),i.context,{field:e,fragmentMap:i.fragmentMap}]))))),[2,l.then(function(v){var h,b;if(v===void 0&&(v=c),e.directives&&e.directives.forEach(function(w){w.name.value==="export"&&w.arguments&&w.arguments.forEach(function(D){D.name.value==="as"&&D.value.kind==="StringValue"&&(i.exportedVariables[D.value.value]=v)})}),!e.selectionSet||v==null)return v;var S=(b=(h=e.directives)===null||h===void 0?void 0:h.some(function(w){return w.name.value==="client"}))!==null&&b!==void 0?b:!1;if(Array.isArray(v))return y.resolveSubSelectedArray(e,r||S,v,i);if(e.selectionSet)return y.resolveSelectionSet(e.selectionSet,r||S,v,i)})]):[2,null]})})},t.prototype.resolveSubSelectedArray=function(e,r,n,i){var a=this;return Promise.all(n.map(function(s){if(s===null)return null;if(Array.isArray(s))return a.resolveSubSelectedArray(e,r,s,i);if(e.selectionSet)return a.resolveSelectionSet(e.selectionSet,r,s,i)}))},t.prototype.collectSelectionsToResolve=function(e,r){var n=function(s){return!Array.isArray(s)},i=this.selectionsToResolveCache;function a(s){if(!i.has(s)){var o=new Set;i.set(s,o),xe(s,{Directive:function(u,c,l,f,d){u.name.value==="client"&&d.forEach(function(p){n(p)&&mu(p)&&o.add(p)})},FragmentSpread:function(u,c,l,f,d){var p=r[u.name.value];P(p,20,u.name.value);var y=a(p);y.size>0&&(d.forEach(function(m){n(m)&&mu(m)&&o.add(m)}),o.add(u),y.forEach(function(m){o.add(m)}))}})}return i.get(s)}return a(e)},t})(),fl=!1,za=(function(){function t(e){var r=this,n;if(this.resetStoreCallbacks=[],this.clearStoreCallbacks=[],!e.cache)throw ye(16);var i=e.uri,a=e.credentials,s=e.headers,o=e.cache,u=e.documentTransform,c=e.ssrMode,l=c===void 0?!1:c,f=e.ssrForceFetchDelay,d=f===void 0?0:f,p=e.connectToDevTools,y=e.queryDeduplication,m=y===void 0?!0:y,v=e.defaultOptions,h=e.defaultContext,b=e.assumeImmutableResults,S=b===void 0?o.assumeImmutableResults:b,w=e.resolvers,D=e.typeDefs,x=e.fragmentMatcher,I=e.name,A=e.version,M=e.devtools,U=e.dataMasking,L=e.link;L||(L=i?new dy({uri:i,credentials:a,headers:s}):Ie.empty()),this.link=L,this.cache=o,this.disableNetworkFetches=l||d>0,this.queryDeduplication=m,this.defaultOptions=v||Object.create(null),this.typeDefs=D,this.devtoolsConfig=E(E({},M),{enabled:(n=M?.enabled)!==null&&n!==void 0?n:p}),this.devtoolsConfig.enabled===void 0&&(this.devtoolsConfig.enabled=globalThis.__DEV__!==!1),d&&setTimeout(function(){return r.disableNetworkFetches=!1},d),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.watchFragment=this.watchFragment.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this),this.version=Vi,this.localState=new Uy({cache:o,client:this,resolvers:w,fragmentMatcher:x}),this.queryManager=new qy({cache:this.cache,link:this.link,defaultOptions:this.defaultOptions,defaultContext:h,documentTransform:u,queryDeduplication:m,ssrMode:l,dataMasking:!!U,clientAwareness:{name:I,version:A},localState:this.localState,assumeImmutableResults:S,onBroadcast:this.devtoolsConfig.enabled?function(){r.devToolsHookCb&&r.devToolsHookCb({action:{},state:{queries:r.queryManager.getQueryStore(),mutations:r.queryManager.mutationStore||{}},dataWithOptimisticResults:r.cache.extract(!0)})}:void 0}),this.devtoolsConfig.enabled&&this.connectToDevTools()}return t.prototype.connectToDevTools=function(){if(!(typeof window>"u")){var e=window,r=Symbol.for("apollo.devtools");(e[r]=e[r]||[]).push(this),e.__APOLLO_CLIENT__=this,!fl&&globalThis.__DEV__!==!1&&(fl=!0,window.document&&window.top===window.self&&/^(https?|file):$/.test(window.location.protocol)&&setTimeout(function(){if(!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__){var n=window.navigator,i=n&&n.userAgent,a=void 0;typeof i=="string"&&(i.indexOf("Chrome/")>-1?a="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":i.indexOf("Firefox/")>-1&&(a="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),a&&globalThis.__DEV__!==!1&&P.log("Download the Apollo DevTools for a better development experience: %s",a)}},1e4))}},Object.defineProperty(t.prototype,"documentTransform",{get:function(){return this.queryManager.documentTransform},enumerable:!1,configurable:!0}),t.prototype.stop=function(){this.queryManager.stop()},t.prototype.watchQuery=function(e){return this.defaultOptions.watchQuery&&(e=Da(this.defaultOptions.watchQuery,e)),this.disableNetworkFetches&&(e.fetchPolicy==="network-only"||e.fetchPolicy==="cache-and-network")&&(e=E(E({},e),{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(e)},t.prototype.query=function(e){return this.defaultOptions.query&&(e=Da(this.defaultOptions.query,e)),P(e.fetchPolicy!=="cache-and-network",17),this.disableNetworkFetches&&e.fetchPolicy==="network-only"&&(e=E(E({},e),{fetchPolicy:"cache-first"})),this.queryManager.query(e)},t.prototype.mutate=function(e){return this.defaultOptions.mutate&&(e=Da(this.defaultOptions.mutate,e)),this.queryManager.mutate(e)},t.prototype.subscribe=function(e){var r=this,n=this.queryManager.generateQueryId();return this.queryManager.startGraphQLSubscription(e).map(function(i){return E(E({},i),{data:r.queryManager.maskOperation({document:e.query,data:i.data,fetchPolicy:e.fetchPolicy,id:n})})})},t.prototype.readQuery=function(e,r){return r===void 0&&(r=!1),this.cache.readQuery(e,r)},t.prototype.watchFragment=function(e){var r;return this.cache.watchFragment(E(E({},e),(r={},r[Symbol.for("apollo.dataMasking")]=this.queryManager.dataMasking,r)))},t.prototype.readFragment=function(e,r){return r===void 0&&(r=!1),this.cache.readFragment(e,r)},t.prototype.writeQuery=function(e){var r=this.cache.writeQuery(e);return e.broadcast!==!1&&this.queryManager.broadcastQueries(),r},t.prototype.writeFragment=function(e){var r=this.cache.writeFragment(e);return e.broadcast!==!1&&this.queryManager.broadcastQueries(),r},t.prototype.__actionHookForDevTools=function(e){this.devToolsHookCb=e},t.prototype.__requestRaw=function(e){return Oa(this.link,e)},t.prototype.resetStore=function(){var e=this;return Promise.resolve().then(function(){return e.queryManager.clearStore({discardWatches:!1})}).then(function(){return Promise.all(e.resetStoreCallbacks.map(function(r){return r()}))}).then(function(){return e.reFetchObservableQueries()})},t.prototype.clearStore=function(){var e=this;return Promise.resolve().then(function(){return e.queryManager.clearStore({discardWatches:!0})}).then(function(){return Promise.all(e.clearStoreCallbacks.map(function(r){return r()}))})},t.prototype.onResetStore=function(e){var r=this;return this.resetStoreCallbacks.push(e),function(){r.resetStoreCallbacks=r.resetStoreCallbacks.filter(function(n){return n!==e})}},t.prototype.onClearStore=function(e){var r=this;return this.clearStoreCallbacks.push(e),function(){r.clearStoreCallbacks=r.clearStoreCallbacks.filter(function(n){return n!==e})}},t.prototype.reFetchObservableQueries=function(e){return this.queryManager.reFetchObservableQueries(e)},t.prototype.refetchQueries=function(e){var r=this.queryManager.refetchQueries(e),n=[],i=[];r.forEach(function(s,o){n.push(o),i.push(s)});var a=Promise.all(i);return a.queries=n,a.results=i,a.catch(function(s){globalThis.__DEV__!==!1&&P.debug(18,s)}),a},t.prototype.getObservableQueries=function(e){return e===void 0&&(e="active"),this.queryManager.getObservableQueries(e)},t.prototype.extract=function(e){return this.cache.extract(e)},t.prototype.restore=function(e){return this.cache.restore(e)},t.prototype.addResolvers=function(e){this.localState.addResolvers(e)},t.prototype.setResolvers=function(e){this.localState.setResolvers(e)},t.prototype.getResolvers=function(){return this.localState.getResolvers()},t.prototype.setLocalStateFragmentMatcher=function(e){this.localState.setFragmentMatcher(e)},t.prototype.setLink=function(e){this.link=this.queryManager.link=e},Object.defineProperty(t.prototype,"defaultContext",{get:function(){return this.queryManager.defaultContext},enumerable:!1,configurable:!0}),t})();globalThis.__DEV__!==!1&&(za.prototype.getMemoryInternals=jm);var kn=new Map,Qa=new Map,dl=!0,In=!1;function pl(t){return t.replace(/[\s,]+/g," ").trim()}function Vy(t){return pl(t.source.body.substring(t.start,t.end))}function By(t){var e=new Set,r=[];return t.definitions.forEach(function(n){if(n.kind==="FragmentDefinition"){var i=n.name.value,a=Vy(n.loc),s=Qa.get(i);s&&!s.has(a)?dl&&console.warn("Warning: fragment with name "+i+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):s||Qa.set(i,s=new Set),s.add(a),e.has(a)||(e.add(a),r.push(n))}else r.push(n)}),E(E({},t),{definitions:r})}function Gy(t){var e=new Set(t.definitions);e.forEach(function(n){n.loc&&delete n.loc,Object.keys(n).forEach(function(i){var a=n[i];a&&typeof a=="object"&&e.add(a)})});var r=t.loc;return r&&(delete r.startToken,delete r.endToken),t}function zy(t){var e=pl(t);if(!kn.has(e)){var r=lm(t,{experimentalFragmentVariables:In,allowLegacyFragmentVariables:In});if(!r||r.kind!=="Document")throw new Error("Not a valid GraphQL document.");kn.set(e,Gy(By(r)))}return kn.get(e)}function g(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];typeof t=="string"&&(t=[t]);var n=t[0];return e.forEach(function(i,a){i&&i.kind==="Document"?n+=i.loc.source.body:n+=i,n+=t[a+1]}),zy(n)}function Qy(){kn.clear(),Qa.clear()}function Wy(){dl=!1}function Hy(){In=!0}function Yy(){In=!1}var Nr={gql:g,resetCaches:Qy,disableFragmentWarnings:Wy,enableExperimentalFragmentVariables:Hy,disableExperimentalFragmentVariables:Yy};(function(t){t.gql=Nr.gql,t.resetCaches=Nr.resetCaches,t.disableFragmentWarnings=Nr.disableFragmentWarnings,t.enableExperimentalFragmentVariables=Nr.enableExperimentalFragmentVariables,t.disableExperimentalFragmentVariables=Nr.disableExperimentalFragmentVariables})(g||(g={})),g.default=g;var hl;(function(t){t.Database="DATABASE",t.Filesystem="FILESYSTEM"})(hl||(hl={}));var ml;(function(t){t.Add="ADD",t.Remove="REMOVE",t.Set="SET"})(ml||(ml={}));var gl;(function(t){t.Cut="CUT",t.Uncut="UNCUT"})(gl||(gl={}));var yl;(function(t){t.Between="BETWEEN",t.Equals="EQUALS",t.Excludes="EXCLUDES",t.GreaterThan="GREATER_THAN",t.Includes="INCLUDES",t.IncludesAll="INCLUDES_ALL",t.IsNull="IS_NULL",t.LessThan="LESS_THAN",t.MatchesRegex="MATCHES_REGEX",t.NotBetween="NOT_BETWEEN",t.NotEquals="NOT_EQUALS",t.NotMatchesRegex="NOT_MATCHES_REGEX",t.NotNull="NOT_NULL"})(yl||(yl={}));var vl;(function(t){t.Galleries="GALLERIES",t.Groups="GROUPS",t.Images="IMAGES",t.Movies="MOVIES",t.Performers="PERFORMERS",t.Scenes="SCENES",t.SceneMarkers="SCENE_MARKERS",t.Studios="STUDIOS",t.Tags="TAGS"})(vl||(vl={}));var bl;(function(t){t.Female="FEMALE",t.Intersex="INTERSEX",t.Male="MALE",t.NonBinary="NON_BINARY",t.TransgenderFemale="TRANSGENDER_FEMALE",t.TransgenderMale="TRANSGENDER_MALE"})(bl||(bl={}));var Sl;(function(t){t.Md5="MD5",t.Oshash="OSHASH"})(Sl||(Sl={}));var _l;(function(t){t.Ignore="IGNORE",t.Merge="MERGE",t.Overwrite="OVERWRITE"})(_l||(_l={}));var El;(function(t){t.FitX="FIT_X",t.FitXy="FIT_XY",t.Original="ORIGINAL"})(El||(El={}));var wl;(function(t){t.PanY="PAN_Y",t.Zoom="ZOOM"})(wl||(wl={}));var Dl;(function(t){t.Fail="FAIL",t.Ignore="IGNORE",t.Overwrite="OVERWRITE"})(Dl||(Dl={}));var Tl;(function(t){t.Create="CREATE",t.Fail="FAIL",t.Ignore="IGNORE"})(Tl||(Tl={}));var Ol;(function(t){t.Cancelled="CANCELLED",t.Failed="FAILED",t.Finished="FINISHED",t.Ready="READY",t.Running="RUNNING",t.Stopping="STOPPING"})(Ol||(Ol={}));var xl;(function(t){t.Add="ADD",t.Remove="REMOVE",t.Update="UPDATE"})(xl||(xl={}));var kl;(function(t){t.Debug="Debug",t.Error="Error",t.Info="Info",t.Progress="Progress",t.Trace="Trace",t.Warning="Warning"})(kl||(kl={}));var Il;(function(t){t.Landscape="LANDSCAPE",t.Portrait="PORTRAIT",t.Square="SQUARE"})(Il||(Il={}));var Fl;(function(t){t.Plugin="Plugin",t.Scraper="Scraper"})(Fl||(Fl={}));var $l;(function(t){t.Boolean="BOOLEAN",t.Number="NUMBER",t.String="STRING"})($l||($l={}));var Cl;(function(t){t.Fast="fast",t.Medium="medium",t.Slow="slow",t.Slower="slower",t.Ultrafast="ultrafast",t.Veryfast="veryfast",t.Veryslow="veryslow"})(Cl||(Cl={}));var Al;(function(t){t.EightK="EIGHT_K",t.FiveK="FIVE_K",t.FourK="FOUR_K",t.FullHd="FULL_HD",t.Huge="HUGE",t.Low="LOW",t.QuadHd="QUAD_HD",t.R360P="R360P",t.SevenK="SEVEN_K",t.SixK="SIX_K",t.Standard="STANDARD",t.StandardHd="STANDARD_HD",t.VeryLow="VERY_LOW",t.VrHd="VR_HD",t.WebHd="WEB_HD"})(Al||(Al={}));var Pl;(function(t){t.Gallery="GALLERY",t.Group="GROUP",t.Image="IMAGE",t.Movie="MOVIE",t.Performer="PERFORMER",t.Scene="SCENE"})(Pl||(Pl={}));var Nl;(function(t){t.Fragment="FRAGMENT",t.Name="NAME",t.Url="URL"})(Nl||(Nl={}));var Rl;(function(t){t.Asc="ASC",t.Desc="DESC"})(Rl||(Rl={}));var Ml;(function(t){t.FourK="FOUR_K",t.FullHd="FULL_HD",t.Low="LOW",t.Original="ORIGINAL",t.Standard="STANDARD",t.StandardHd="STANDARD_HD"})(Ml||(Ml={}));var Ll;(function(t){t.NeedsMigration="NEEDS_MIGRATION",t.Ok="OK",t.Setup="SETUP"})(Ll||(Ll={}));const jl=g`
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
    `,ql=g`
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
    `,Ul=g`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  port
  whitelistedIPs
  interfaces
  videoSortOrder
}
    `,Vl=g`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `,Jy=g`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `,Xy=g`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `,Ky=g`
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
    ${Xy}`,Bl=g`
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
    ${Jy}
${Ky}`,Zy=g`
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
    ${jl}
${ql}
${Ul}
${Vl}
${Bl}`;g`
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
    `;const Wa=g`
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
    `,ev=g`
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
    `,tv=g`
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
    `,Gl=g`
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
    `,Fn=g`
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
    ${Gl}`,zl=g`
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
    `,Ql=g`
    fragment FolderData on Folder {
  id
  path
}
    `,Ha=g`
    fragment GalleryChapterData on GalleryChapter {
  id
  title
  image_index
  gallery {
    id
  }
}
    `,$n=g`
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
    `,_t=g`
    fragment SlimTagData on Tag {
  id
  name
  sort_name
  aliases
  image_path
  parent_count
  child_count
}
    `,ct=g`
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
    ${_t}`,Wl=g`
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
    `,Zt=g`
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
    ${Wl}`,er=g`
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
    ${zl}
${Ql}
${Ha}
${$n}
${_t}
${ct}
${Zt}`,rv=g`
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
    ${er}
${$n}
${_t}
${ct}
${Gl}`,Hl=g`
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
    `,Yl=g`
    fragment LogEntryData on LogEntry {
  time
  level
  message
}
    `,tr=g`
    fragment PackageData on Package {
  package_id
  name
  version
  date
  metadata
  sourceURL
}
    `;g`
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
    `;const nv=g`
    fragment SelectPerformerData on Performer {
  id
  name
  disambiguation
  alias_list
  image_path
  birthdate
  death_date
}
    `,iv=g`
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
    `,Et=g`
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
    ${iv}`,Jl=g`
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
    ${zl}
${Ql}
${Zt}`,av=g`
    fragment SlimGroupData on Group {
  id
  name
  front_image_path
  rating100
}
    `,rr=g`
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
    ${$n}
${_t}
${av}`,lt=g`
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
    ${Wl}
${Et}
${Jl}
${$n}
${rr}
${_t}
${ct}`,sv=g`
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
    `,ov=g`
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
    `,ft=g`
    fragment ScrapedSceneTagData on ScrapedTag {
  stored_id
  name
}
    `,Ya=g`
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
    ${ft}`,Xl=g`
    fragment ScrapedGroupStudioData on ScrapedStudio {
  stored_id
  name
  url
}
    `,uv=g`
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
    ${Xl}
${ft}`,Cn=g`
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
    `,Rr=g`
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
    ${ft}`,Kl=g`
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
    ${Xl}
${ft}`,Ja=g`
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
    ${Cn}
${ft}
${Rr}
${Kl}`,Zl=g`
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
    ${Cn}
${ft}
${Rr}`,ef=g`
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
    ${Cn}
${ft}
${Rr}`;g`
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
    ${Cn}
${ft}
${Rr}
${Kl}`,g`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${Rr}`;const An=g`
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
    ${_t}`,cv=g`
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
    `,nr=g`
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
    ${_t}`,lv=g`
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
    `;g`
    mutation Setup($input: SetupInput!) {
  setup(input: $input)
}
    `,g`
    mutation Migrate($input: MigrateInput!) {
  migrate(input: $input)
}
    `,g`
    mutation DownloadFFMpeg {
  downloadFFMpeg
}
    `,g`
    mutation ConfigureGeneral($input: ConfigGeneralInput!) {
  configureGeneral(input: $input) {
    ...ConfigGeneralData
  }
}
    ${jl}`,g`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${ql}`,g`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${Ul}`,g`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${Vl}`,g`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${Bl}`,g`
    mutation ConfigureUI($input: Map, $partial: Map) {
  configureUI(input: $input, partial: $partial)
}
    `,g`
    mutation ConfigureUISetting($key: String!, $value: Any) {
  configureUISetting(key: $key, value: $value)
}
    `,g`
    mutation GenerateAPIKey($input: GenerateAPIKeyInput!) {
  generateAPIKey(input: $input)
}
    `,g`
    mutation EnableDLNA($input: EnableDLNAInput!) {
  enableDLNA(input: $input)
}
    `,g`
    mutation DisableDLNA($input: DisableDLNAInput!) {
  disableDLNA(input: $input)
}
    `,g`
    mutation AddTempDLNAIP($input: AddTempDLNAIPInput!) {
  addTempDLNAIP(input: $input)
}
    `,g`
    mutation RemoveTempDLNAIP($input: RemoveTempDLNAIPInput!) {
  removeTempDLNAIP(input: $input)
}
    `,g`
    mutation DeleteFiles($ids: [ID!]!) {
  deleteFiles(ids: $ids)
}
    `,g`
    mutation SaveFilter($input: SaveFilterInput!) {
  saveFilter(input: $input) {
    ...SavedFilterData
  }
}
    ${Wa}`,g`
    mutation DestroySavedFilter($input: DestroyFilterInput!) {
  destroySavedFilter(input: $input)
}
    `,g`
    mutation GalleryChapterCreate($title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterCreate(
    input: {title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${Ha}`,g`
    mutation GalleryChapterUpdate($id: ID!, $title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterUpdate(
    input: {id: $id, title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${Ha}`,g`
    mutation GalleryChapterDestroy($id: ID!) {
  galleryChapterDestroy(id: $id)
}
    `,g`
    mutation GalleryCreate($input: GalleryCreateInput!) {
  galleryCreate(input: $input) {
    ...GalleryData
  }
}
    ${er}`,g`
    mutation GalleryUpdate($input: GalleryUpdateInput!) {
  galleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${er}`,g`
    mutation BulkGalleryUpdate($input: BulkGalleryUpdateInput!) {
  bulkGalleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${er}`,g`
    mutation GalleriesUpdate($input: [GalleryUpdateInput!]!) {
  galleriesUpdate(input: $input) {
    ...GalleryData
  }
}
    ${er}`,g`
    mutation GalleryDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  galleryDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,g`
    mutation AddGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  addGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `,g`
    mutation RemoveGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  removeGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `,g`
    mutation SetGalleryCover($gallery_id: ID!, $cover_image_id: ID!) {
  setGalleryCover(
    input: {gallery_id: $gallery_id, cover_image_id: $cover_image_id}
  )
}
    `,g`
    mutation ResetGalleryCover($gallery_id: ID!) {
  resetGalleryCover(input: {gallery_id: $gallery_id})
}
    `,g`
    mutation GroupCreate($input: GroupCreateInput!) {
  groupCreate(input: $input) {
    ...GroupData
  }
}
    ${rr}`,g`
    mutation GroupUpdate($input: GroupUpdateInput!) {
  groupUpdate(input: $input) {
    ...GroupData
  }
}
    ${rr}`,g`
    mutation BulkGroupUpdate($input: BulkGroupUpdateInput!) {
  bulkGroupUpdate(input: $input) {
    ...GroupData
  }
}
    ${rr}`,g`
    mutation GroupDestroy($id: ID!) {
  groupDestroy(input: {id: $id})
}
    `,g`
    mutation GroupsDestroy($ids: [ID!]!) {
  groupsDestroy(ids: $ids)
}
    `,g`
    mutation AddGroupSubGroups($input: GroupSubGroupAddInput!) {
  addGroupSubGroups(input: $input)
}
    `,g`
    mutation RemoveGroupSubGroups($input: GroupSubGroupRemoveInput!) {
  removeGroupSubGroups(input: $input)
}
    `,g`
    mutation ReorderSubGroups($input: ReorderSubGroupsInput!) {
  reorderSubGroups(input: $input)
}
    `,g`
    mutation ImageUpdate($input: ImageUpdateInput!) {
  imageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Fn}`,g`
    mutation BulkImageUpdate($input: BulkImageUpdateInput!) {
  bulkImageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Fn}`,g`
    mutation ImagesUpdate($input: [ImageUpdateInput!]!) {
  imagesUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Fn}`,g`
    mutation ImageIncrementO($id: ID!) {
  imageIncrementO(id: $id)
}
    `,g`
    mutation ImageDecrementO($id: ID!) {
  imageDecrementO(id: $id)
}
    `,g`
    mutation ImageResetO($id: ID!) {
  imageResetO(id: $id)
}
    `,g`
    mutation ImageDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  imageDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,g`
    mutation ImagesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  imagesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,g`
    mutation StopJob($job_id: ID!) {
  stopJob(job_id: $job_id)
}
    `,g`
    mutation StopAllJobs {
  stopAllJobs
}
    `,g`
    mutation MetadataImport {
  metadataImport
}
    `,g`
    mutation MetadataExport {
  metadataExport
}
    `,g`
    mutation ExportObjects($input: ExportObjectsInput!) {
  exportObjects(input: $input)
}
    `,g`
    mutation ImportObjects($input: ImportObjectsInput!) {
  importObjects(input: $input)
}
    `,g`
    mutation MetadataScan($input: ScanMetadataInput!) {
  metadataScan(input: $input)
}
    `,g`
    mutation MetadataGenerate($input: GenerateMetadataInput!) {
  metadataGenerate(input: $input)
}
    `,g`
    mutation MetadataAutoTag($input: AutoTagMetadataInput!) {
  metadataAutoTag(input: $input)
}
    `,g`
    mutation MetadataIdentify($input: IdentifyMetadataInput!) {
  metadataIdentify(input: $input)
}
    `,g`
    mutation MetadataClean($input: CleanMetadataInput!) {
  metadataClean(input: $input)
}
    `,g`
    mutation MetadataCleanGenerated($input: CleanGeneratedInput!) {
  metadataCleanGenerated(input: $input)
}
    `,g`
    mutation MigrateHashNaming {
  migrateHashNaming
}
    `,g`
    mutation BackupDatabase($input: BackupDatabaseInput!) {
  backupDatabase(input: $input)
}
    `,g`
    mutation AnonymiseDatabase($input: AnonymiseDatabaseInput!) {
  anonymiseDatabase(input: $input)
}
    `,g`
    mutation OptimiseDatabase {
  optimiseDatabase
}
    `,g`
    mutation MigrateSceneScreenshots($input: MigrateSceneScreenshotsInput!) {
  migrateSceneScreenshots(input: $input)
}
    `,g`
    mutation MigrateBlobs($input: MigrateBlobsInput!) {
  migrateBlobs(input: $input)
}
    `,g`
    mutation PerformerCreate($input: PerformerCreateInput!) {
  performerCreate(input: $input) {
    ...PerformerData
  }
}
    ${ct}`,g`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${ct}`,g`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${ct}`,g`
    mutation PerformerDestroy($id: ID!) {
  performerDestroy(input: {id: $id})
}
    `,g`
    mutation PerformersDestroy($ids: [ID!]!) {
  performersDestroy(ids: $ids)
}
    `,g`
    mutation ReloadPlugins {
  reloadPlugins
}
    `,g`
    mutation RunPluginTask($plugin_id: ID!, $task_name: String!, $args_map: Map) {
  runPluginTask(plugin_id: $plugin_id, task_name: $task_name, args_map: $args_map)
}
    `;const fv=g`
    mutation ConfigurePlugin($plugin_id: ID!, $input: Map!) {
  configurePlugin(plugin_id: $plugin_id, input: $input)
}
    `;g`
    mutation SetPluginsEnabled($enabledMap: BoolMap!) {
  setPluginsEnabled(enabledMap: $enabledMap)
}
    `,g`
    mutation InstallPluginPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Plugin, packages: $packages)
}
    `,g`
    mutation UpdatePluginPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Plugin, packages: $packages)
}
    `,g`
    mutation UninstallPluginPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Plugin, packages: $packages)
}
    `,g`
    mutation SceneMarkerCreate($title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerCreate(
    input: {title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${Et}`,g`
    mutation SceneMarkerUpdate($id: ID!, $title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerUpdate(
    input: {id: $id, title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${Et}`,g`
    mutation SceneMarkerDestroy($id: ID!) {
  sceneMarkerDestroy(id: $id)
}
    `,g`
    mutation SceneMarkersDestroy($ids: [ID!]!) {
  sceneMarkersDestroy(ids: $ids)
}
    `,g`
    mutation SceneCreate($input: SceneCreateInput!) {
  sceneCreate(input: $input) {
    ...SceneData
  }
}
    ${lt}`,g`
    mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${lt}`,g`
    mutation BulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${lt}`,g`
    mutation ScenesUpdate($input: [SceneUpdateInput!]!) {
  scenesUpdate(input: $input) {
    ...SceneData
  }
}
    ${lt}`,g`
    mutation SceneSaveActivity($id: ID!, $resume_time: Float, $playDuration: Float) {
  sceneSaveActivity(
    id: $id
    resume_time: $resume_time
    playDuration: $playDuration
  )
}
    `,g`
    mutation SceneResetActivity($id: ID!, $reset_resume: Boolean!, $reset_duration: Boolean!) {
  sceneResetActivity(
    id: $id
    reset_resume: $reset_resume
    reset_duration: $reset_duration
  )
}
    `,g`
    mutation SceneAddPlay($id: ID!, $times: [Timestamp!]) {
  sceneAddPlay(id: $id, times: $times) {
    count
    history
  }
}
    `,g`
    mutation SceneDeletePlay($id: ID!, $times: [Timestamp!]) {
  sceneDeletePlay(id: $id, times: $times) {
    count
    history
  }
}
    `,g`
    mutation SceneResetPlayCount($id: ID!) {
  sceneResetPlayCount(id: $id)
}
    `,g`
    mutation SceneAddO($id: ID!, $times: [Timestamp!]) {
  sceneAddO(id: $id, times: $times) {
    count
    history
  }
}
    `,g`
    mutation SceneDeleteO($id: ID!, $times: [Timestamp!]) {
  sceneDeleteO(id: $id, times: $times) {
    count
    history
  }
}
    `,g`
    mutation SceneResetO($id: ID!) {
  sceneResetO(id: $id)
}
    `,g`
    mutation SceneDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  sceneDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,g`
    mutation ScenesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  scenesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,g`
    mutation SceneGenerateScreenshot($id: ID!, $at: Float) {
  sceneGenerateScreenshot(id: $id, at: $at)
}
    `,g`
    mutation SceneAssignFile($input: AssignSceneFileInput!) {
  sceneAssignFile(input: $input)
}
    `,g`
    mutation SceneMerge($input: SceneMergeInput!) {
  sceneMerge(input: $input) {
    id
  }
}
    `,g`
    mutation ReloadScrapers {
  reloadScrapers
}
    `,g`
    mutation InstallScraperPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Scraper, packages: $packages)
}
    `,g`
    mutation UpdateScraperPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Scraper, packages: $packages)
}
    `,g`
    mutation UninstallScraperPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Scraper, packages: $packages)
}
    `,g`
    mutation SubmitStashBoxFingerprints($input: StashBoxFingerprintSubmissionInput!) {
  submitStashBoxFingerprints(input: $input)
}
    `,g`
    mutation StashBoxBatchPerformerTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchPerformerTag(input: $input)
}
    `,g`
    mutation StashBoxBatchStudioTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchStudioTag(input: $input)
}
    `,g`
    mutation SubmitStashBoxSceneDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxSceneDraft(input: $input)
}
    `,g`
    mutation SubmitStashBoxPerformerDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxPerformerDraft(input: $input)
}
    `,g`
    mutation StudioCreate($input: StudioCreateInput!) {
  studioCreate(input: $input) {
    ...StudioData
  }
}
    ${An}`,g`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${An}`,g`
    mutation StudioDestroy($id: ID!) {
  studioDestroy(input: {id: $id})
}
    `,g`
    mutation StudiosDestroy($ids: [ID!]!) {
  studiosDestroy(ids: $ids)
}
    `,g`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${nr}`,g`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `,g`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `,g`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${nr}`,g`
    mutation BulkTagUpdate($input: BulkTagUpdateInput!) {
  bulkTagUpdate(input: $input) {
    ...TagData
  }
}
    ${nr}`,g`
    mutation TagsMerge($source: [ID!]!, $destination: ID!) {
  tagsMerge(input: {source: $source, destination: $destination}) {
    ...TagData
  }
}
    ${nr}`,g`
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
    `,g`
    query FindSavedFilter($id: ID!) {
  findSavedFilter(id: $id) {
    ...SavedFilterData
  }
}
    ${Wa}`,g`
    query FindSavedFilters($mode: FilterMode) {
  findSavedFilters(mode: $mode) {
    ...SavedFilterData
  }
}
    ${Wa}`,g`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${Jl}`,g`
    query FindGallery($id: ID!) {
  findGallery(id: $id) {
    ...GalleryData
  }
}
    ${er}`,g`
    query FindGalleriesForSelect($filter: FindFilterType, $gallery_filter: GalleryFilterType, $ids: [ID!]) {
  findGalleries(filter: $filter, gallery_filter: $gallery_filter, ids: $ids) {
    count
    galleries {
      ...SelectGalleryData
    }
  }
}
    ${ev}`,g`
    query FindGalleryImageID($id: ID!, $index: Int!) {
  findGallery(id: $id) {
    image(index: $index) {
      id
    }
  }
}
    `,g`
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
    ${Fn}`,g`
    query FindImage($id: ID!, $checksum: String) {
  findImage(id: $id, checksum: $checksum) {
    ...ImageData
  }
}
    ${rv}`,g`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${Hl}`,g`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${Hl}`,g`
    query SceneWall($q: String) {
  sceneWall(q: $q) {
    ...SceneData
  }
}
    ${lt}`,g`
    query MarkerWall($q: String) {
  markerWall(q: $q) {
    ...SceneMarkerData
  }
}
    ${Et}`,g`
    query MarkerStrings($q: String, $sort: String) {
  markerStrings(q: $q, sort: $sort) {
    id
    count
    title
  }
}
    `,g`
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
    `,g`
    query Logs {
  logs {
    ...LogEntryData
  }
}
    ${Yl}`,g`
    query Version {
  version {
    version
    hash
    build_time
  }
}
    `,g`
    query LatestVersion {
  latestversion {
    version
    shorthash
    release_date
    url
  }
}
    `,g`
    query FindGroups($filter: FindFilterType, $group_filter: GroupFilterType) {
  findGroups(filter: $filter, group_filter: $group_filter) {
    count
    groups {
      ...GroupData
    }
  }
}
    ${rr}`,g`
    query FindGroup($id: ID!) {
  findGroup(id: $id) {
    ...GroupData
  }
}
    ${rr}`,g`
    query FindGroupsForSelect($filter: FindFilterType, $group_filter: GroupFilterType, $ids: [ID!]) {
  findGroups(filter: $filter, group_filter: $group_filter, ids: $ids) {
    count
    groups {
      ...SelectGroupData
    }
  }
}
    ${tv}`,g`
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
    ${ct}`,g`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${ct}`,g`
    query FindPerformersForSelect($filter: FindFilterType, $performer_filter: PerformerFilterType, $ids: [ID!]) {
  findPerformers(filter: $filter, performer_filter: $performer_filter, ids: $ids) {
    count
    performers {
      ...SelectPerformerData
    }
  }
}
    ${nv}`,g`
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
    `,g`
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
    `,g`
    query InstalledPluginPackages {
  installedPackages(type: Plugin) {
    ...PackageData
  }
}
    ${tr}`,g`
    query InstalledPluginPackagesStatus {
  installedPackages(type: Plugin) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${tr}`,g`
    query AvailablePluginPackages($source: String!) {
  availablePackages(source: $source, type: Plugin) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${tr}`,g`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${Et}`,g`
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
    ${Zt}`,g`
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
    ${Zt}`,g`
    query FindDuplicateScenes($distance: Int, $duration_diff: Float) {
  findDuplicateScenes(distance: $distance, duration_diff: $duration_diff) {
    ...SlimSceneData
  }
}
    ${Zt}`,g`
    query FindScene($id: ID!, $checksum: String) {
  findScene(id: $id, checksum: $checksum) {
    ...SceneData
  }
}
    ${lt}`,g`
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
    ${Et}`,g`
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
    ${Zt}`,g`
    query SceneStreams($id: ID!) {
  findScene(id: $id) {
    sceneStreams {
      url
      mime_type
      label
    }
  }
}
    `,g`
    query FindScenesForSelect($filter: FindFilterType, $scene_filter: SceneFilterType, $ids: [ID!]) {
  findScenes(filter: $filter, scene_filter: $scene_filter, ids: $ids) {
    count
    scenes {
      ...SelectSceneData
    }
  }
}
    ${sv}`,g`
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
    `,g`
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
    `,g`
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
    `,g`
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
    `,g`
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
    `,g`
    query ScrapeSingleStudio($source: ScraperSourceInput!, $input: ScrapeSingleStudioInput!) {
  scrapeSingleStudio(source: $source, input: $input) {
    ...ScrapedStudioData
  }
}
    ${ov}`,g`
    query ScrapeSinglePerformer($source: ScraperSourceInput!, $input: ScrapeSinglePerformerInput!) {
  scrapeSinglePerformer(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${Ya}`,g`
    query ScrapeMultiPerformers($source: ScraperSourceInput!, $input: ScrapeMultiPerformersInput!) {
  scrapeMultiPerformers(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${Ya}`,g`
    query ScrapePerformerURL($url: String!) {
  scrapePerformerURL(url: $url) {
    ...ScrapedPerformerData
  }
}
    ${Ya}`,g`
    query ScrapeSingleScene($source: ScraperSourceInput!, $input: ScrapeSingleSceneInput!) {
  scrapeSingleScene(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${Ja}`,g`
    query ScrapeMultiScenes($source: ScraperSourceInput!, $input: ScrapeMultiScenesInput!) {
  scrapeMultiScenes(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${Ja}`,g`
    query ScrapeSceneURL($url: String!) {
  scrapeSceneURL(url: $url) {
    ...ScrapedSceneData
  }
}
    ${Ja}`,g`
    query ScrapeSingleGallery($source: ScraperSourceInput!, $input: ScrapeSingleGalleryInput!) {
  scrapeSingleGallery(source: $source, input: $input) {
    ...ScrapedGalleryData
  }
}
    ${Zl}`,g`
    query ScrapeSingleImage($source: ScraperSourceInput!, $input: ScrapeSingleImageInput!) {
  scrapeSingleImage(source: $source, input: $input) {
    ...ScrapedImageData
  }
}
    ${ef}`,g`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${Zl}`,g`
    query ScrapeImageURL($url: String!) {
  scrapeImageURL(url: $url) {
    ...ScrapedImageData
  }
}
    ${ef}`,g`
    query ScrapeGroupURL($url: String!) {
  scrapeGroupURL(url: $url) {
    ...ScrapedGroupData
  }
}
    ${uv}`,g`
    query InstalledScraperPackages {
  installedPackages(type: Scraper) {
    ...PackageData
  }
}
    ${tr}`,g`
    query InstalledScraperPackagesStatus {
  installedPackages(type: Scraper) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${tr}`,g`
    query AvailableScraperPackages($source: String!) {
  availablePackages(source: $source, type: Scraper) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${tr}`;const dv=g`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${Zy}`;g`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `,g`
    query ValidateStashBox($input: StashBoxInput!) {
  validateStashBoxCredentials(input: $input) {
    valid
    status
  }
}
    `,g`
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
    `,g`
    query FindStudios($filter: FindFilterType, $studio_filter: StudioFilterType) {
  findStudios(filter: $filter, studio_filter: $studio_filter) {
    count
    studios {
      ...StudioData
    }
  }
}
    ${An}`,g`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${An}`,g`
    query FindStudiosForSelect($filter: FindFilterType, $studio_filter: StudioFilterType, $ids: [ID!]) {
  findStudios(filter: $filter, studio_filter: $studio_filter, ids: $ids) {
    count
    studios {
      ...SelectStudioData
    }
  }
}
    ${cv}`,g`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagData
    }
  }
}
    ${nr}`,g`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${nr}`,g`
    query FindTagsForSelect($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...SelectTagData
    }
  }
}
    ${lv}`,g`
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
    ${lt}`,g`
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
    ${Et}
${lt}`,g`
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
    `,g`
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
    `,g`
    subscription LoggingSubscribe {
  loggingSubscribe {
    ...LogEntryData
  }
}
    ${Yl}`;const pv=g`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `;function hv(t){return ae(t)&&"code"in t&&"reason"in t}function mv(t){var e;return ae(t)&&((e=t.target)===null||e===void 0?void 0:e.readyState)===WebSocket.CLOSED}var gv=(function(t){De(e,t);function e(r){var n=t.call(this)||this;return n.client=r,n}return e.prototype.request=function(r){var n=this;return new W(function(i){return n.client.subscribe(E(E({},r),{query:it(r.query)}),{next:i.next.bind(i),complete:i.complete.bind(i),error:function(a){if(a instanceof Error)return i.error(a);var s=hv(a);return s||mv(a)?i.error(new Error("Socket closed".concat(s?" with event ".concat(a.code):"").concat(s?" ".concat(a.reason):""))):i.error(new st({graphQLErrors:Array.isArray(a)?a:[a]}))}})})},e})(Ie);function Se(t){return t===null?"null":Array.isArray(t)?"array":typeof t}function wt(t){return Se(t)==="object"}function yv(t){return Array.isArray(t)&&t.length>0&&t.every(e=>"message"in e)}function tf(t,e){return t.length<124?t:e}const vv="graphql-transport-ws";var we;(function(t){t[t.InternalServerError=4500]="InternalServerError",t[t.InternalClientError=4005]="InternalClientError",t[t.BadRequest=4400]="BadRequest",t[t.BadResponse=4004]="BadResponse",t[t.Unauthorized=4401]="Unauthorized",t[t.Forbidden=4403]="Forbidden",t[t.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",t[t.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",t[t.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",t[t.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",t[t.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(we||(we={}));var ue;(function(t){t.ConnectionInit="connection_init",t.ConnectionAck="connection_ack",t.Ping="ping",t.Pong="pong",t.Subscribe="subscribe",t.Next="next",t.Error="error",t.Complete="complete"})(ue||(ue={}));function rf(t){if(!wt(t))throw new Error(`Message is expected to be an object, but got ${Se(t)}`);if(!t.type)throw new Error("Message is missing the 'type' property");if(typeof t.type!="string")throw new Error(`Message is expects the 'type' property to be a string, but got ${Se(t.type)}`);switch(t.type){case ue.ConnectionInit:case ue.ConnectionAck:case ue.Ping:case ue.Pong:{if(t.payload!=null&&!wt(t.payload))throw new Error(`"${t.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${t.payload}"`);break}case ue.Subscribe:{if(typeof t.id!="string")throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${Se(t.id)}`);if(!t.id)throw new Error(`"${t.type}" message requires a non-empty 'id' property`);if(!wt(t.payload))throw new Error(`"${t.type}" message expects the 'payload' property to be an object, but got ${Se(t.payload)}`);if(typeof t.payload.query!="string")throw new Error(`"${t.type}" message payload expects the 'query' property to be a string, but got ${Se(t.payload.query)}`);if(t.payload.variables!=null&&!wt(t.payload.variables))throw new Error(`"${t.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Se(t.payload.variables)}`);if(t.payload.operationName!=null&&Se(t.payload.operationName)!=="string")throw new Error(`"${t.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Se(t.payload.operationName)}`);if(t.payload.extensions!=null&&!wt(t.payload.extensions))throw new Error(`"${t.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Se(t.payload.extensions)}`);break}case ue.Next:{if(typeof t.id!="string")throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${Se(t.id)}`);if(!t.id)throw new Error(`"${t.type}" message requires a non-empty 'id' property`);if(!wt(t.payload))throw new Error(`"${t.type}" message expects the 'payload' property to be an object, but got ${Se(t.payload)}`);break}case ue.Error:{if(typeof t.id!="string")throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${Se(t.id)}`);if(!t.id)throw new Error(`"${t.type}" message requires a non-empty 'id' property`);if(!yv(t.payload))throw new Error(`"${t.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(t.payload)}`);break}case ue.Complete:{if(typeof t.id!="string")throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${Se(t.id)}`);if(!t.id)throw new Error(`"${t.type}" message requires a non-empty 'id' property`);break}default:throw new Error(`Invalid message 'type' property "${t.type}"`)}return t}function bv(t,e){return rf(typeof t=="string"?JSON.parse(t,e):t)}function Mr(t,e){return rf(t),JSON.stringify(t,e)}var ir=function(t){return this instanceof ir?(this.v=t,this):new ir(t)},Sv=function(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(t,e||[]),i,a=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),o("next"),o("throw"),o("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(p){return function(y){return Promise.resolve(y).then(p,f)}}function o(p,y){n[p]&&(i[p]=function(m){return new Promise(function(v,h){a.push([p,m,v,h])>1||u(p,m)})},y&&(i[p]=y(i[p])))}function u(p,y){try{c(n[p](y))}catch(m){d(a[0][3],m)}}function c(p){p.value instanceof ir?Promise.resolve(p.value.v).then(l,f):d(a[0][2],p)}function l(p){u("next",p)}function f(p){u("throw",p)}function d(p,y){p(y),a.shift(),a.length&&u(a[0][0],a[0][1])}};function _v(t){const{url:e,connectionParams:r,lazy:n=!0,onNonLazyError:i=console.error,lazyCloseTimeout:a=0,keepAlive:s=0,disablePong:o,connectionAckWaitTimeout:u=0,retryAttempts:c=5,retryWait:l=async function(J){let _=1e3;for(let O=0;O<J;O++)_*=2;await new Promise(O=>setTimeout(O,_+Math.floor(Math.random()*2700+300)))},shouldRetry:f=Xa,isFatalConnectionProblem:d,on:p,webSocketImpl:y,generateID:m=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,J=>{const _=Math.random()*16|0;return(J=="x"?_:_&3|8).toString(16)})},jsonMessageReplacer:v,jsonMessageReviver:h}=t;let b;if(y){if(!wv(y))throw new Error("Invalid WebSocket implementation provided");b=y}else typeof WebSocket<"u"?b=WebSocket:typeof global<"u"?b=global.WebSocket||global.MozWebSocket:typeof window<"u"&&(b=window.WebSocket||window.MozWebSocket);if(!b)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const S=b,w=(()=>{const j=(()=>{const _={};return{on(O,$){return _[O]=$,()=>{delete _[O]}},emit(O){var $;"id"in O&&(($=_[O.id])===null||$===void 0||$.call(_,O))}}})(),J={connecting:p?.connecting?[p.connecting]:[],opened:p?.opened?[p.opened]:[],connected:p?.connected?[p.connected]:[],ping:p?.ping?[p.ping]:[],pong:p?.pong?[p.pong]:[],message:p?.message?[j.emit,p.message]:[j.emit],closed:p?.closed?[p.closed]:[],error:p?.error?[p.error]:[]};return{onMessage:j.on,on(_,O){const $=J[_];return $.push(O),()=>{$.splice($.indexOf(O),1)}},emit(_,...O){for(const $ of[...J[_]])$(...O)}}})();function D(j){const J=[w.on("error",_=>{J.forEach(O=>O()),j(_)}),w.on("closed",_=>{J.forEach(O=>O()),j(_)})]}let x,I=0,A,M=!1,U=0,L=!1;async function se(){clearTimeout(A);const[j,J]=await(x??(x=new Promise(($,V)=>(async()=>{if(M){if(await l(U),!I)return x=void 0,V({code:1e3,reason:"All Subscriptions Gone"});U++}w.emit("connecting",M);const R=new S(typeof e=="function"?await e():e,vv);let G,X;function Z(){isFinite(s)&&s>0&&(clearTimeout(X),X=setTimeout(()=>{R.readyState===S.OPEN&&(R.send(Mr({type:ue.Ping})),w.emit("ping",!1,void 0))},s))}D(te=>{x=void 0,clearTimeout(G),clearTimeout(X),V(te),te instanceof nf&&(R.close(4499,"Terminated"),R.onerror=null,R.onclose=null)}),R.onerror=te=>w.emit("error",te),R.onclose=te=>w.emit("closed",te),R.onopen=async()=>{try{w.emit("opened",R);const te=typeof r=="function"?await r():r;if(R.readyState!==S.OPEN)return;R.send(Mr(te?{type:ue.ConnectionInit,payload:te}:{type:ue.ConnectionInit},v)),isFinite(u)&&u>0&&(G=setTimeout(()=>{R.close(we.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},u)),Z()}catch(te){w.emit("error",te),R.close(we.InternalClientError,tf(te instanceof Error?te.message:new Error(te).message,"Internal client error"))}};let ee=!1;R.onmessage=({data:te})=>{try{const pe=bv(te,h);if(w.emit("message",pe),pe.type==="ping"||pe.type==="pong"){w.emit(pe.type,!0,pe.payload),pe.type==="pong"?Z():o||(R.send(Mr(pe.payload?{type:ue.Pong,payload:pe.payload}:{type:ue.Pong})),w.emit("pong",!1,pe.payload));return}if(ee)return;if(pe.type!==ue.ConnectionAck)throw new Error(`First message cannot be of type ${pe.type}`);clearTimeout(G),ee=!0,w.emit("connected",R,pe.payload,M),M=!1,U=0,$([R,new Promise((Pb,Db)=>D(Db))])}catch(pe){R.onmessage=null,w.emit("error",pe),R.close(we.BadResponse,tf(pe instanceof Error?pe.message:new Error(pe).message,"Bad response"))}}})())));j.readyState===S.CLOSING&&await J;let _=()=>{};const O=new Promise($=>_=$);return[j,_,Promise.race([O.then(()=>{if(!I){const $=()=>j.close(1e3,"Normal Closure");isFinite(a)&&a>0?A=setTimeout(()=>{j.readyState===S.OPEN&&$()},a):$()}}),J])]}function K(j){if(Xa(j)&&(Ev(j.code)||[we.InternalServerError,we.InternalClientError,we.BadRequest,we.BadResponse,we.Unauthorized,we.SubprotocolNotAcceptable,we.SubscriberAlreadyExists,we.TooManyInitialisationRequests].includes(j.code)))throw j;if(L)return!1;if(Xa(j)&&j.code===1e3)return I>0;if(!c||U>=c||!f(j)||d?.(j))throw j;return M=!0}n||(async()=>{for(I++;;)try{const[,,j]=await se();await j}catch(j){try{if(!K(j))return}catch(J){return i?.(J)}}})();function ge(j,J){const _=m(j);let O=!1,$=!1,V=()=>{I--,O=!0};return(async()=>{for(I++;;)try{const[R,G,X]=await se();if(O)return G();const Z=w.onMessage(_,ee=>{switch(ee.type){case ue.Next:{J.next(ee.payload);return}case ue.Error:{$=!0,O=!0,J.error(ee.payload),V();return}case ue.Complete:{O=!0,V();return}}});R.send(Mr({id:_,type:ue.Subscribe,payload:j},v)),V=()=>{!O&&R.readyState===S.OPEN&&R.send(Mr({id:_,type:ue.Complete},v)),I--,O=!0,G()},await X.finally(Z);return}catch(R){if(!K(R))return}})().then(()=>{$||J.complete()}).catch(R=>{J.error(R)}),()=>{O||V()}}return{on:w.on,subscribe:ge,iterate(j){const J=[],_={done:!1,error:null,resolve:()=>{}},O=ge(j,{next(V){J.push(V),_.resolve()},error(V){_.done=!0,_.error=V,_.resolve()},complete(){_.done=!0,_.resolve()}}),$=(function(){return Sv(this,arguments,function*(){for(;;){for(J.length||(yield ir(new Promise(G=>_.resolve=G)));J.length;)yield yield ir(J.shift());if(_.error)throw _.error;if(_.done)return yield ir(void 0)}})})();return $.throw=async V=>(_.done||(_.done=!0,_.error=V,_.resolve()),{done:!0,value:void 0}),$.return=async()=>(O(),{done:!0,value:void 0}),$},async dispose(){if(L=!0,x){const[j]=await x;j.close(1e3,"Normal Closure")}},terminate(){x&&w.emit("closed",new nf)}}}class nf extends Error{constructor(){super(...arguments),this.name="TerminatedCloseEvent",this.message="4499: Terminated",this.code=4499,this.reason="Terminated",this.wasClean=!1}}function Xa(t){return wt(t)&&"code"in t&&"reason"in t}function Ev(t){return[1e3,1001,1006,1005,1012,1013,1014].includes(t)?!1:t>=1e3&&t<=1999}function wv(t){return typeof t=="function"&&"constructor"in t&&"CLOSED"in t&&"CLOSING"in t&&"CONNECTING"in t&&"OPEN"in t}function af(t){return new Ie(function(e,r){return new W(function(n){var i,a,s;try{i=r(e).subscribe({next:function(o){if(o.errors?s=t({graphQLErrors:o.errors,response:o,operation:e,forward:r}):lc(o)&&(s=t({protocolErrors:o.extensions[wn],response:o,operation:e,forward:r})),s){a=s.subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return}n.next(o)},error:function(o){if(s=t({operation:e,networkError:o,graphQLErrors:o&&o.result&&o.result.errors||void 0,forward:r}),s){a=s.subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return}n.error(o)},complete:function(){s||n.complete.bind(n)()}})}catch(o){t({networkError:o,operation:e,forward:r}),n.error(o)}return function(){i&&i.unsubscribe(),a&&i.unsubscribe()}})})}(function(t){De(e,t);function e(r){var n=t.call(this)||this;return n.link=af(r),n}return e.prototype.request=function(r,n){return this.link.request(r,n)},e})(Ie);function Dv(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function Tv(t,e,r=""){if(!arguments.length)throw new TypeError("Argument 1 `value` is required.");if(typeof e!="function")throw new TypeError("Argument 2 `isExtractable` must be a function.");if(typeof r!="string")throw new TypeError("Argument 3 `path` must be a string.");const n=new Map,i=new Map;function a(s,o,u){if(e(s)){const f=i.get(s);return f?f.push(o):i.set(s,[o]),null}const c=Array.isArray(s)||typeof FileList<"u"&&s instanceof FileList,l=Dv(s);if(c||l){let f=n.get(s);const d=!f;if(d&&(f=c?[]:s instanceof Object?{}:Object.create(null),n.set(s,f)),!u.has(s)){const p=o?`${o}.`:"",y=new Set(u).add(s);if(c){let m=0;for(const v of s){const h=a(v,p+m++,y);d&&f.push(h)}}else for(const m in s){const v=a(s[m],p+m,y);d&&(f[m]=v)}}return f}return s}return{clone:a(t,r,new Set),files:i}}function Ov(t,e,r){"name"in r?t.append(e,r,r.name):t.append(e,r)}function xv(t){return typeof File<"u"&&t instanceof File||typeof Blob<"u"&&t instanceof Blob}function kv({uri:t="/graphql",useGETForQueries:e,isExtractableFile:r=xv,FormData:n,formDataAppendFile:i=Ov,print:a=gc,fetch:s,fetchOptions:o,credentials:u,headers:c,includeExtensions:l}={}){const f={http:{includeExtensions:l},options:o,credentials:u,headers:c};return new Ie(d=>{const p=d.getContext(),{clientAwareness:{name:y,version:m}={},headers:v}=p,h={http:p.http,options:p.fetchOptions,credentials:p.credentials,headers:{...y&&{"apollographql-client-name":y},...m&&{"apollographql-client-version":m},...v}},{options:b,body:S}=yc(d,a,mc,f,h),{clone:w,files:D}=Tv(S,r,"");let x=vc(d,t);if(D.size){b.headers&&delete b.headers["content-type"];const M=n||FormData,U=new M;U.append("operations",Ir(w,"Payload"));const L={};let se=0;D.forEach(K=>{L[++se]=K}),U.append("map",JSON.stringify(L)),se=0,D.forEach((K,ge)=>{i(U,String(++se),ge)}),b.body=U}else if(e&&!d.query.definitions.some(M=>M.kind==="OperationDefinition"&&M.operation==="mutation")&&(b.method="GET"),b.method==="GET"){const{newURI:M,parseError:U}=bc(x,S);if(U)return new W(L=>{L.error(U)});x=M}else b.body=Ir(w,"Payload");const{controller:I}=ly();typeof I!="boolean"&&(b.signal&&(b.signal.aborted?I.abort():b.signal.addEventListener("abort",()=>{I.abort()},{once:!0})),b.signal=I.signal);const A=s||fetch;return new W(M=>{let U;return A(x,b).then(L=>(d.setContext({response:L}),L)).then(hc(d)).then(L=>{M.next(L),M.complete()}).catch(L=>{U||(L.result&&L.result.errors&&L.result.data&&M.next(L.result),M.error(L))}),()=>{U=!0,typeof I!="boolean"&&I.abort()}})})}var Ka,Za;const dt=t=>(e,{args:r,canRead:n,toReference:i})=>n(e)?e:i({__typename:t,id:r?.id}),Lr=(t,{canRead:e})=>{if(t!==void 0)return e(t)?t:null},Iv={Query:{fields:{findImage:{read:dt("Image")},findPerformer:{read:dt("Performer")},findStudio:{read:dt("Studio")},findGroup:{read:dt("Group")},findGallery:{read:dt("Gallery")},findScene:{read:dt("Scene")},findTag:{read:dt("Tag")},findSavedFilter:{read:dt("SavedFilter")}}},Scene:{fields:{studio:{read:Lr}}},Image:{fields:{studio:{read:Lr},paths:{merge:!1}}},Group:{fields:{studio:{read:Lr}}},Gallery:{fields:{studio:{read:Lr}}},Studio:{fields:{parent_studio:{read:Lr}}}},Fv={BaseFile:["VideoFile","ImageFile","GalleryFile"],VisualFile:["VideoFile","ImageFile"]},$v=(Za=(Ka=document.querySelector("base"))===null||Ka===void 0?void 0:Ka.getAttribute("href"))!==null&&Za!==void 0?Za:"/",es=t=>{let e=new URL(window.location.origin+$v);return t&&(e.pathname+=t),e},Cv=()=>{const t=es("graphql"),e=es("graphql");e.protocol==="https:"?e.protocol="wss:":e.protocol="ws:";const r=kv({uri:t.toString()}),n=_v({url:e.toString(),retryAttempts:1/0,shouldRetry(){return!0}}),i=new gv(n),a=af(({networkError:l})=>{if(l&&l.statusCode===401){const f=new URL(es("login"),window.location.toString());f.searchParams.append("returnURL",window.location.href),window.location.href=f.toString()}}),s=Gg(({query:l})=>{const f=Vt(l);return f.kind==="OperationDefinition"&&f.operation==="subscription"},i,r),o=Bg([a,s]),u=new qa({typePolicies:Iv,possibleTypes:Fv}),c=new za({link:o,cache:u});return c.subscribe({query:pv}).subscribe({next:()=>{c.resetStore()}}),{cache:u,client:c,wsClient:n}},{client:Av}=Cv(),Pv=()=>Av;function Nv(){const t=Pv(),e="config"in t.cache?t.cache.config:{},r=new qa({...e});return new za({link:t.link,cache:r})}let Rv;function sf(){return Rv??=Nv()}const Mv={getItem:async t=>await of().then(e=>e?.[t]||null).catch(console.error),setItem:async(t,e)=>await cf(r=>({...r,[t]:e})).catch(console.error),removeItem:async t=>await cf(e=>{const{[t]:r,...n}=e;return n}).catch(console.error)};async function of(){return(await sf().query({query:dv})).data?.configuration.plugins[Xe]}const uf=new Set;async function cf(t){const e=of().then(r=>sf().mutate({mutation:fv,variables:{plugin_id:Xe,input:t(r)}}));uf.add(e);try{await e}finally{uf.delete(e)}}const ts={showSettings:!1,fullscreen:!1,sceneInfoOpen:!1,sceneInfoDraft:null,sceneInfoEditorPillContent:"names",keyboardShortcutsOpen:!1,tvConfigLoaded:!1},rs=Vo()((t,e)=>({...ts,set:(r,n)=>{if(!e().tvConfigLoaded&&r!=="tvConfigLoaded"){console.warn(`Tried to set ${r} to "${n}" before store was loaded`);return}t(i=>{const a=typeof n=="function"?n(i[r]):n;return{[r]:a}})},setToDefault:r=>{if(!e().tvConfigLoaded){console.warn(`Tried to set ${r} to default before store was loaded`);return}t(n=>({[r]:ts[r]}))},getDefault:r=>ts[r],get:r=>e()[r]}));var ns,lf;function Lv(){if(lf)return ns;lf=1;function t(h){this._maxSize=h,this.clear()}t.prototype.clear=function(){this._size=0,this._values=Object.create(null)},t.prototype.get=function(h){return this._values[h]},t.prototype.set=function(h,b){return this._size>=this._maxSize&&this.clear(),h in this._values||this._size++,this._values[h]=b};var e=/[^.^\]^[]+|(?=\[\]|\.\.)/g,r=/^\d+$/,n=/^\d/,i=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,a=/^\s*(['"]?)(.*?)(\1)\s*$/,s=512,o=new t(s),u=new t(s),c=new t(s);ns={Cache:t,split:f,normalizePath:l,setter:function(h){var b=l(h);return u.get(h)||u.set(h,function(w,D){for(var x=0,I=b.length,A=w;x<I-1;){var M=b[x];if(M==="__proto__"||M==="constructor"||M==="prototype")return w;A=A[b[x++]]}A[b[x]]=D})},getter:function(h,b){var S=l(h);return c.get(h)||c.set(h,function(D){for(var x=0,I=S.length;x<I;)if(D!=null||!b)D=D[S[x++]];else return;return D})},join:function(h){return h.reduce(function(b,S){return b+(p(S)||r.test(S)?"["+S+"]":(b?".":"")+S)},"")},forEach:function(h,b,S){d(Array.isArray(h)?h:f(h),b,S)}};function l(h){return o.get(h)||o.set(h,f(h).map(function(b){return b.replace(a,"$2")}))}function f(h){return h.match(e)||[""]}function d(h,b,S){var w=h.length,D,x,I,A;for(x=0;x<w;x++)D=h[x],D&&(v(D)&&(D='"'+D+'"'),A=p(D),I=!A&&/^\d+$/.test(D),b.call(S,D,A,I,x,h))}function p(h){return typeof h=="string"&&h&&["'",'"'].indexOf(h.charAt(0))!==-1}function y(h){return h.match(n)&&!h.match(r)}function m(h){return i.test(h)}function v(h){return!p(h)&&(y(h)||m(h))}return ns}var Dt=Lv(),is,ff;function jv(){if(ff)return is;ff=1;const t=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,e=l=>l.match(t)||[],r=l=>l[0].toUpperCase()+l.slice(1),n=(l,f)=>e(l).join(f).toLowerCase(),i=l=>e(l).reduce((f,d)=>`${f}${f?d[0].toUpperCase()+d.slice(1).toLowerCase():d.toLowerCase()}`,"");return is={words:e,upperFirst:r,camelCase:i,pascalCase:l=>r(i(l)),snakeCase:l=>n(l,"_"),kebabCase:l=>n(l,"-"),sentenceCase:l=>r(n(l," ")),titleCase:l=>e(l).map(r).join(" ")},is}var as=jv(),Pn={exports:{}},df;function qv(){if(df)return Pn.exports;df=1,Pn.exports=function(i){return t(e(i),i)},Pn.exports.array=t;function t(i,a){var s=i.length,o=new Array(s),u={},c=s,l=r(a),f=n(i);for(a.forEach(function(p){if(!f.has(p[0])||!f.has(p[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});c--;)u[c]||d(i[c],c,new Set);return o;function d(p,y,m){if(m.has(p)){var v;try{v=", node was:"+JSON.stringify(p)}catch{v=""}throw new Error("Cyclic dependency"+v)}if(!f.has(p))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(p));if(!u[y]){u[y]=!0;var h=l.get(p)||new Set;if(h=Array.from(h),y=h.length){m.add(p);do{var b=h[--y];d(b,f.get(b),m)}while(y);m.delete(p)}o[--s]=p}}}function e(i){for(var a=new Set,s=0,o=i.length;s<o;s++){var u=i[s];a.add(u[0]),a.add(u[1])}return Array.from(a)}function r(i){for(var a=new Map,s=0,o=i.length;s<o;s++){var u=i[s];a.has(u[0])||a.set(u[0],new Set),a.has(u[1])||a.set(u[1],new Set),a.get(u[0]).add(u[1])}return a}function n(i){for(var a=new Map,s=0,o=i.length;s<o;s++)a.set(i[s],s);return a}return Pn.exports}var Uv=qv();const Vv=Xr(Uv),Bv=Object.prototype.toString,Gv=Error.prototype.toString,zv=RegExp.prototype.toString,Qv=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",Wv=/^Symbol\((.*)\)(.*)$/;function Hv(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function pf(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const r=typeof t;if(r==="number")return Hv(t);if(r==="string")return e?`"${t}"`:t;if(r==="function")return"[Function "+(t.name||"anonymous")+"]";if(r==="symbol")return Qv.call(t).replace(Wv,"Symbol($1)");const n=Bv.call(t).slice(8,-1);return n==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):n==="Error"||t instanceof Error?"["+Gv.call(t)+"]":n==="RegExp"?zv.call(t):null}function Be(t,e){let r=pf(t,e);return r!==null?r:JSON.stringify(t,function(n,i){let a=pf(this[n],e);return a!==null?a:i},2)}function hf(t){return t==null?[]:[].concat(t)}let mf,gf,yf,Yv=/\$\{\s*(\w+)\s*\}/g;mf=Symbol.toStringTag;class vf{constructor(e,r,n,i){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[mf]="Error",this.name="ValidationError",this.value=r,this.path=n,this.type=i,this.errors=[],this.inner=[],hf(e).forEach(a=>{if(ve.isError(a)){this.errors.push(...a.errors);const s=a.inner.length?a.inner:[a];this.inner.push(...s)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}gf=Symbol.hasInstance,yf=Symbol.toStringTag;class ve extends Error{static formatError(e,r){const n=r.label||r.path||"this";return r=Object.assign({},r,{path:n,originalPath:r.path}),typeof e=="string"?e.replace(Yv,(i,a)=>Be(r[a])):typeof e=="function"?e(r):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,r,n,i,a){const s=new vf(e,r,n,i);if(a)return s;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[yf]="Error",this.name=s.name,this.message=s.message,this.type=s.type,this.value=s.value,this.path=s.path,this.errors=s.errors,this.inner=s.inner,Error.captureStackTrace&&Error.captureStackTrace(this,ve)}static[gf](e){return vf[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let Pe={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:r,originalValue:n})=>{const i=n!=null&&n!==r?` (cast from the value \`${Be(n,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${Be(r,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${Be(r,!0)}\``+i}},_e={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Jv={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},ss={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},os={isValue:"${path} field must be ${value}"},Nn={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},Rn={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:Pe,string:_e,number:Jv,date:ss,object:Nn,array:Rn,boolean:os,tuple:{notType:t=>{const{path:e,value:r,spec:n}=t,i=n.types.length;if(Array.isArray(r)){if(r.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${r.length} for value: \`${Be(r,!0)}\``;if(r.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${r.length} for value: \`${Be(r,!0)}\``}return ve.formatError(Pe.notType,t)}}});const Mn=t=>t&&t.__isYupSchema__;class Ln{static fromOptions(e,r){if(!r.then&&!r.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:n,then:i,otherwise:a}=r,s=typeof n=="function"?n:(...o)=>o.every(u=>u===n);return new Ln(e,(o,u)=>{var c;let l=s(...o)?i:a;return(c=l?.(u))!=null?c:u})}constructor(e,r){this.fn=void 0,this.refs=e,this.refs=e,this.fn=r}resolve(e,r){let n=this.refs.map(a=>a.getValue(r?.value,r?.parent,r?.context)),i=this.fn(n,e,r);if(i===void 0||i===e)return e;if(!Mn(i))throw new TypeError("conditions must return a schema object");return i.resolve(r)}}const jn={context:"$",value:"."};class Tt{constructor(e,r={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===jn.context,this.isValue=this.key[0]===jn.value,this.isSibling=!this.isContext&&!this.isValue;let n=this.isContext?jn.context:this.isValue?jn.value:"";this.path=this.key.slice(n.length),this.getter=this.path&&Dt.getter(this.path,!0),this.map=r.map}getValue(e,r,n){let i=this.isContext?n:this.isValue?e:r;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,r){return this.getValue(e,r?.parent,r?.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}Tt.prototype.__isYupRef=!0;const Ge=t=>t==null;function ar(t){function e({value:r,path:n="",options:i,originalValue:a,schema:s},o,u){const{name:c,test:l,params:f,message:d,skipAbsent:p}=t;let{parent:y,context:m,abortEarly:v=s.spec.abortEarly,disableStackTrace:h=s.spec.disableStackTrace}=i;const b={value:r,parent:y,context:m};function S(L={}){const se=bf(Object.assign({value:r,originalValue:a,label:s.spec.label,path:L.path||n,spec:s.spec,disableStackTrace:L.disableStackTrace||h},f,L.params),b),K=new ve(ve.formatError(L.message||d,se),r,se.path,L.type||c,se.disableStackTrace);return K.params=se,K}const w=v?o:u;let D={path:n,parent:y,type:c,from:i.from,createError:S,resolve(L){return Sf(L,b)},options:i,originalValue:a,schema:s};const x=L=>{ve.isError(L)?w(L):L?u(null):w(S())},I=L=>{ve.isError(L)?w(L):o(L)};if(p&&Ge(r))return x(!0);let M;try{var U;if(M=l.call(D,r,D),typeof((U=M)==null?void 0:U.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${D.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(M).then(x,I)}}catch(L){I(L);return}x(M)}return e.OPTIONS=t,e}function bf(t,e){if(!t)return t;for(const r of Object.keys(t))t[r]=Sf(t[r],e);return t}function Sf(t,e){return Tt.isRef(t)?t.getValue(e.value,e.parent,e.context):t}function Xv(t,e,r,n=r){let i,a,s;return e?(Dt.forEach(e,(o,u,c)=>{let l=u?o.slice(1,o.length-1):o;t=t.resolve({context:n,parent:i,value:r});let f=t.type==="tuple",d=c?parseInt(l,10):0;if(t.innerType||f){if(f&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);if(r&&d>=r.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${e}. because there is no value at that index. `);i=r,r=r&&r[d],t=f?t.spec.types[d]:t.innerType}if(!c){if(!t.fields||!t.fields[l])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${s} which is a type: "${t.type}")`);i=r,r=r&&r[l],t=t.fields[l]}a=l,s=u?"["+o+"]":"."+o}),{schema:t,parent:i,parentPath:a}):{parent:i,parentPath:e,schema:t}}class qn extends Set{describe(){const e=[];for(const r of this.values())e.push(Tt.isRef(r)?r.describe():r);return e}resolveAll(e){let r=[];for(const n of this.values())r.push(e(n));return r}clone(){return new qn(this.values())}merge(e,r){const n=this.clone();return e.forEach(i=>n.add(i)),r.forEach(i=>n.delete(i)),n}}function sr(t,e=new Map){if(Mn(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let r;if(t instanceof Date)r=new Date(t.getTime()),e.set(t,r);else if(t instanceof RegExp)r=new RegExp(t),e.set(t,r);else if(Array.isArray(t)){r=new Array(t.length),e.set(t,r);for(let n=0;n<t.length;n++)r[n]=sr(t[n],e)}else if(t instanceof Map){r=new Map,e.set(t,r);for(const[n,i]of t.entries())r.set(n,sr(i,e))}else if(t instanceof Set){r=new Set,e.set(t,r);for(const n of t)r.add(sr(n,e))}else if(t instanceof Object){r={},e.set(t,r);for(const[n,i]of Object.entries(t))r[n]=sr(i,e)}else throw Error(`Unable to clone ${t}`);return r}function Kv(t){if(!(t!=null&&t.length))return;const e=[];let r="",n=!1,i=!1;for(let a=0;a<t.length;a++){const s=t[a];if(s==="["&&!i){r&&(e.push(...r.split(".").filter(Boolean)),r=""),n=!0;continue}if(s==="]"&&!i){r&&(/^\d+$/.test(r)?e.push(r):e.push(r.replace(/^"|"$/g,"")),r=""),n=!1;continue}if(s==='"'){i=!i;continue}if(s==="."&&!n&&!i){r&&(e.push(r),r="");continue}r+=s}return r&&e.push(...r.split(".").filter(Boolean)),e}function Zv(t,e){const r=e?`${e}.${t.path}`:t.path;return t.errors.map(n=>({message:n,path:Kv(r)}))}function _f(t,e){var r;if(!((r=t.inner)!=null&&r.length)&&t.errors.length)return Zv(t,e);const n=e?`${e}.${t.path}`:t.path;return t.inner.flatMap(i=>_f(i,n))}class Te{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new qn,this._blacklist=new qn,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Pe.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e?.spec),this.withMutation(r=>{r.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const r=Object.create(Object.getPrototypeOf(this));return r.type=this.type,r._typeCheck=this._typeCheck,r._whitelist=this._whitelist.clone(),r._blacklist=this._blacklist.clone(),r.internalTests=Object.assign({},this.internalTests),r.exclusiveTests=Object.assign({},this.exclusiveTests),r.deps=[...this.deps],r.conditions=[...this.conditions],r.tests=[...this.tests],r.transforms=[...this.transforms],r.spec=sr(Object.assign({},this.spec,e)),r}label(e){let r=this.clone();return r.spec.label=e,r}meta(...e){if(e.length===0)return this.spec.meta;let r=this.clone();return r.spec.meta=Object.assign(r.spec.meta||{},e[0]),r}withMutation(e){let r=this._mutate;this._mutate=!0;let n=e(this);return this._mutate=r,n}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let r=this,n=e.clone();const i=Object.assign({},r.spec,n.spec);return n.spec=i,n.internalTests=Object.assign({},r.internalTests,n.internalTests),n._whitelist=r._whitelist.merge(e._whitelist,e._blacklist),n._blacklist=r._blacklist.merge(e._blacklist,e._whitelist),n.tests=r.tests,n.exclusiveTests=r.exclusiveTests,n.withMutation(a=>{e.tests.forEach(s=>{a.test(s.OPTIONS)})}),n.transforms=[...r.transforms,...n.transforms],n}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let r=this;if(r.conditions.length){let n=r.conditions;r=r.clone(),r.conditions=[],r=n.reduce((i,a)=>a.resolve(i,e),r),r=r.resolve(e)}return r}resolveOptions(e){var r,n,i,a;return Object.assign({},e,{from:e.from||[],strict:(r=e.strict)!=null?r:this.spec.strict,abortEarly:(n=e.abortEarly)!=null?n:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(a=e.disableStackTrace)!=null?a:this.spec.disableStackTrace})}cast(e,r={}){let n=this.resolve(Object.assign({value:e},r)),i=r.assert==="ignore-optionality",a=n._cast(e,r);if(r.assert!==!1&&!n.isType(a)){if(i&&Ge(a))return a;let s=Be(e),o=Be(a);throw new TypeError(`The value of ${r.path||"field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${s} 
`+(o!==s?`result of cast: ${o}`:""))}return a}_cast(e,r){let n=e===void 0?e:this.transforms.reduce((i,a)=>a.call(this,i,e,this),e);return n===void 0&&(n=this.getDefault(r)),n}_validate(e,r={},n,i){let{path:a,originalValue:s=e,strict:o=this.spec.strict}=r,u=e;o||(u=this._cast(u,Object.assign({assert:!1},r)));let c=[];for(let l of Object.values(this.internalTests))l&&c.push(l);this.runTests({path:a,value:u,originalValue:s,options:r,tests:c},n,l=>{if(l.length)return i(l,u);this.runTests({path:a,value:u,originalValue:s,options:r,tests:this.tests},n,i)})}runTests(e,r,n){let i=!1,{tests:a,value:s,originalValue:o,path:u,options:c}=e,l=m=>{i||(i=!0,r(m,s))},f=m=>{i||(i=!0,n(m,s))},d=a.length,p=[];if(!d)return f([]);let y={value:s,originalValue:o,path:u,options:c,schema:this};for(let m=0;m<a.length;m++){const v=a[m];v(y,l,function(b){b&&(Array.isArray(b)?p.push(...b):p.push(b)),--d<=0&&f(p)})}}asNestedTest({key:e,index:r,parent:n,parentPath:i,originalParent:a,options:s}){const o=e??r;if(o==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof o=="number";let c=n[o];const l=Object.assign({},s,{strict:!0,parent:n,value:c,originalValue:a[o],key:void 0,[u?"index":"key"]:o,path:u||o.includes(".")?`${i||""}[${u?o:`"${o}"`}]`:(i?`${i}.`:"")+e});return(f,d,p)=>this.resolve(l)._validate(c,l,d,p)}validate(e,r){var n;let i=this.resolve(Object.assign({},r,{value:e})),a=(n=r?.disableStackTrace)!=null?n:i.spec.disableStackTrace;return new Promise((s,o)=>i._validate(e,r,(u,c)=>{ve.isError(u)&&(u.value=c),o(u)},(u,c)=>{u.length?o(new ve(u,c,void 0,void 0,a)):s(c)}))}validateSync(e,r){var n;let i=this.resolve(Object.assign({},r,{value:e})),a,s=(n=r?.disableStackTrace)!=null?n:i.spec.disableStackTrace;return i._validate(e,Object.assign({},r,{sync:!0}),(o,u)=>{throw ve.isError(o)&&(o.value=u),o},(o,u)=>{if(o.length)throw new ve(o,e,void 0,void 0,s);a=u}),a}isValid(e,r){return this.validate(e,r).then(()=>!0,n=>{if(ve.isError(n))return!1;throw n})}isValidSync(e,r){try{return this.validateSync(e,r),!0}catch(n){if(ve.isError(n))return!1;throw n}}_getDefault(e){let r=this.spec.default;return r==null?r:typeof r=="function"?r.call(this,e):sr(r)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,r){const n=this.clone({nullable:e});return n.internalTests.nullable=ar({message:r,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),n}optionality(e,r){const n=this.clone({optional:e});return n.internalTests.optionality=ar({message:r,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),n}optional(){return this.optionality(!0)}defined(e=Pe.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=Pe.notNull){return this.nullability(!1,e)}required(e=Pe.required){return this.clone().withMutation(r=>r.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let r=this.clone();return r.transforms.push(e),r}test(...e){let r;if(e.length===1?typeof e[0]=="function"?r={test:e[0]}:r=e[0]:e.length===2?r={name:e[0],test:e[1]}:r={name:e[0],message:e[1],test:e[2]},r.message===void 0&&(r.message=Pe.default),typeof r.test!="function")throw new TypeError("`test` is a required parameters");let n=this.clone(),i=ar(r),a=r.exclusive||r.name&&n.exclusiveTests[r.name]===!0;if(r.exclusive&&!r.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return r.name&&(n.exclusiveTests[r.name]=!!r.exclusive),n.tests=n.tests.filter(s=>!(s.OPTIONS.name===r.name&&(a||s.OPTIONS.test===i.OPTIONS.test))),n.tests.push(i),n}when(e,r){!Array.isArray(e)&&typeof e!="string"&&(r=e,e=".");let n=this.clone(),i=hf(e).map(a=>new Tt(a));return i.forEach(a=>{a.isSibling&&n.deps.push(a.key)}),n.conditions.push(typeof r=="function"?new Ln(i,r):Ln.fromOptions(i,r)),n}typeError(e){let r=this.clone();return r.internalTests.typeError=ar({message:e,name:"typeError",skipAbsent:!0,test(n){return this.schema._typeCheck(n)?!0:this.createError({params:{type:this.schema.type}})}}),r}oneOf(e,r=Pe.oneOf){let n=this.clone();return e.forEach(i=>{n._whitelist.add(i),n._blacklist.delete(i)}),n.internalTests.whiteList=ar({message:r,name:"oneOf",skipAbsent:!0,test(i){let a=this.schema._whitelist,s=a.resolveAll(this.resolve);return s.includes(i)?!0:this.createError({params:{values:Array.from(a).join(", "),resolved:s}})}}),n}notOneOf(e,r=Pe.notOneOf){let n=this.clone();return e.forEach(i=>{n._blacklist.add(i),n._whitelist.delete(i)}),n.internalTests.blacklist=ar({message:r,name:"notOneOf",test(i){let a=this.schema._blacklist,s=a.resolveAll(this.resolve);return s.includes(i)?this.createError({params:{values:Array.from(a).join(", "),resolved:s}}):!0}}),n}strip(e=!0){let r=this.clone();return r.spec.strip=e,r}describe(e){const r=(e?this.resolve(e):this).clone(),{label:n,meta:i,optional:a,nullable:s}=r.spec;return{meta:i,label:n,optional:a,nullable:s,default:r.getDefault(e),type:r.type,oneOf:r._whitelist.describe(),notOneOf:r._blacklist.describe(),tests:r.tests.filter((u,c,l)=>l.findIndex(f=>f.OPTIONS.name===u.OPTIONS.name)===c).map(u=>{const c=u.OPTIONS.params&&e?bf(Object.assign({},u.OPTIONS.params),e):u.OPTIONS.params;return{name:u.OPTIONS.name,params:c}})}}get"~standard"(){const e=this;return{version:1,vendor:"yup",async validate(n){try{return{value:await e.validate(n,{abortEarly:!1})}}catch(i){if(i instanceof ve)return{issues:_f(i)};throw i}}}}}Te.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])Te.prototype[`${t}At`]=function(e,r,n={}){const{parent:i,parentPath:a,schema:s}=Xv(this,e,r,n.context);return s[t](i&&i[a],Object.assign({},n,{parent:i,path:e}))};for(const t of["equals","is"])Te.prototype[t]=Te.prototype.oneOf;for(const t of["not","nope"])Te.prototype[t]=Te.prototype.notOneOf;function Ef(){return new wf}class wf extends Te{constructor(){super({type:"boolean",check(e){return e instanceof Boolean&&(e=e.valueOf()),typeof e=="boolean"}}),this.withMutation(()=>{this.transform((e,r,n)=>{if(n.spec.coerce&&!n.isType(e)){if(/^(true|1)$/i.test(String(e)))return!0;if(/^(false|0)$/i.test(String(e)))return!1}return e})})}isTrue(e=os.isValue){return this.test({message:e,name:"is-value",exclusive:!0,params:{value:"true"},test(r){return Ge(r)||r===!0}})}isFalse(e=os.isValue){return this.test({message:e,name:"is-value",exclusive:!0,params:{value:"false"},test(r){return Ge(r)||r===!1}})}default(e){return super.default(e)}defined(e){return super.defined(e)}optional(){return super.optional()}required(e){return super.required(e)}notRequired(){return super.notRequired()}nullable(){return super.nullable()}nonNullable(e){return super.nonNullable(e)}strip(e){return super.strip(e)}}Ef.prototype=wf.prototype;const eb=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function tb(t){const e=us(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let r=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(r=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(r=0-r)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+r,e.second,e.millisecond)}function us(t){var e,r;const n=eb.exec(t);return n?{year:ze(n[1]),month:ze(n[2],1)-1,day:ze(n[3],1),hour:ze(n[4]),minute:ze(n[5]),second:ze(n[6]),millisecond:n[7]?ze(n[7].substring(0,3)):0,precision:(e=(r=n[7])==null?void 0:r.length)!=null?e:void 0,z:n[8]||void 0,plusMinus:n[9]||void 0,hourOffset:ze(n[10]),minuteOffset:ze(n[11])}:null}function ze(t,e=0){return Number(t)||e}let rb=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,nb=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,ib=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,ab="^\\d{4}-\\d{2}-\\d{2}",sb="\\d{2}:\\d{2}:\\d{2}",ob="(([+-]\\d{2}(:?\\d{2})?)|Z)",ub=new RegExp(`${ab}T${sb}(\\.\\d+)?${ob}$`),cb=t=>Ge(t)||t===t.trim(),lb={}.toString();function jr(){return new Df}class Df extends Te{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,r,n)=>{if(!n.spec.coerce||n.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===lb?e:i})})}required(e){return super.required(e).withMutation(r=>r.test({message:e||Pe.required,name:"required",skipAbsent:!0,test:n=>!!n.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(r=>r.OPTIONS.name!=="required"),e))}length(e,r=_e.length){return this.test({message:r,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(n){return n.length===this.resolve(e)}})}min(e,r=_e.min){return this.test({message:r,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(n){return n.length>=this.resolve(e)}})}max(e,r=_e.max){return this.test({name:"max",exclusive:!0,message:r,params:{max:e},skipAbsent:!0,test(n){return n.length<=this.resolve(e)}})}matches(e,r){let n=!1,i,a;return r&&(typeof r=="object"?{excludeEmptyString:n=!1,message:i,name:a}=r:i=r),this.test({name:a||"matches",message:i||_e.matches,params:{regex:e},skipAbsent:!0,test:s=>s===""&&n||s.search(e)!==-1})}email(e=_e.email){return this.matches(rb,{name:"email",message:e,excludeEmptyString:!0})}url(e=_e.url){return this.matches(nb,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=_e.uuid){return this.matches(ib,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let r="",n,i;return e&&(typeof e=="object"?{message:r="",allowOffset:n=!1,precision:i=void 0}=e:r=e),this.matches(ub,{name:"datetime",message:r||_e.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:r||_e.datetime_offset,params:{allowOffset:n},skipAbsent:!0,test:a=>{if(!a||n)return!0;const s=us(a);return s?!!s.z:!1}}).test({name:"datetime_precision",message:r||_e.datetime_precision,params:{precision:i},skipAbsent:!0,test:a=>{if(!a||i==null)return!0;const s=us(a);return s?s.precision===i:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=_e.trim){return this.transform(r=>r!=null?r.trim():r).test({message:e,name:"trim",test:cb})}lowercase(e=_e.lowercase){return this.transform(r=>Ge(r)?r:r.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>Ge(r)||r===r.toLowerCase()})}uppercase(e=_e.uppercase){return this.transform(r=>Ge(r)?r:r.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>Ge(r)||r===r.toUpperCase()})}}jr.prototype=Df.prototype;let fb=new Date(""),db=t=>Object.prototype.toString.call(t)==="[object Date]";class cs extends Te{constructor(){super({type:"date",check(e){return db(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,r,n)=>!n.spec.coerce||n.isType(e)||e===null?e:(e=tb(e),isNaN(e)?cs.INVALID_DATE:new Date(e)))})}prepareParam(e,r){let n;if(Tt.isRef(e))n=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);n=i}return n}min(e,r=ss.min){let n=this.prepareParam(e,"min");return this.test({message:r,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(n)}})}max(e,r=ss.max){let n=this.prepareParam(e,"max");return this.test({message:r,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(n)}})}}cs.INVALID_DATE=fb;function pb(t,e=[]){let r=[],n=new Set,i=new Set(e.map(([s,o])=>`${s}-${o}`));function a(s,o){let u=Dt.split(s)[0];n.add(u),i.has(`${o}-${u}`)||r.push([o,u])}for(const s of Object.keys(t)){let o=t[s];n.add(s),Tt.isRef(o)&&o.isSibling?a(o.path,s):Mn(o)&&"deps"in o&&o.deps.forEach(u=>a(u,s))}return Vv.array(Array.from(n),r).reverse()}function Tf(t,e){let r=1/0;return t.some((n,i)=>{var a;if((a=e.path)!=null&&a.includes(n))return r=i,!0}),r}function Of(t){return(e,r)=>Tf(t,e)-Tf(t,r)}const xf=(t,e,r)=>{if(typeof t!="string")return t;let n=t;try{n=JSON.parse(t)}catch{}return r.isType(n)?n:t};function Un(t){if("fields"in t){const e={};for(const[r,n]of Object.entries(t.fields))e[r]=Un(n);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=Un(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(Un)}):"optional"in t?t.optional():t}const hb=(t,e)=>{const r=[...Dt.normalizePath(e)];if(r.length===1)return r[0]in t;let n=r.pop(),i=Dt.getter(Dt.join(r),!0)(t);return!!(i&&n in i)};let kf=t=>Object.prototype.toString.call(t)==="[object Object]";function If(t,e){let r=Object.keys(t.fields);return Object.keys(e).filter(n=>r.indexOf(n)===-1)}const mb=Of([]);function ls(t){return new Ff(t)}class Ff extends Te{constructor(e){super({type:"object",check(r){return kf(r)||typeof r=="function"}}),this.fields=Object.create(null),this._sortErrors=mb,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,r={}){var n;let i=super._cast(e,r);if(i===void 0)return this.getDefault(r);if(!this._typeCheck(i))return i;let a=this.fields,s=(n=r.stripUnknown)!=null?n:this.spec.noUnknown,o=[].concat(this._nodes,Object.keys(i).filter(f=>!this._nodes.includes(f))),u={},c=Object.assign({},r,{parent:u,__validating:r.__validating||!1}),l=!1;for(const f of o){let d=a[f],p=f in i;if(d){let y,m=i[f];c.path=(r.path?`${r.path}.`:"")+f,d=d.resolve({value:m,context:r.context,parent:u});let v=d instanceof Te?d.spec:void 0,h=v?.strict;if(v!=null&&v.strip){l=l||f in i;continue}y=!r.__validating||!h?d.cast(i[f],c):i[f],y!==void 0&&(u[f]=y)}else p&&!s&&(u[f]=i[f]);(p!==f in u||u[f]!==i[f])&&(l=!0)}return l?u:i}_validate(e,r={},n,i){let{from:a=[],originalValue:s=e,recursive:o=this.spec.recursive}=r;r.from=[{schema:this,value:s},...a],r.__validating=!0,r.originalValue=s,super._validate(e,r,n,(u,c)=>{if(!o||!kf(c)){i(u,c);return}s=s||c;let l=[];for(let f of this._nodes){let d=this.fields[f];!d||Tt.isRef(d)||l.push(d.asNestedTest({options:r,key:f,parent:c,parentPath:r.path,originalParent:s}))}this.runTests({tests:l,value:c,originalValue:s,options:r},n,f=>{i(f.sort(this._sortErrors).concat(u),c)})})}clone(e){const r=super.clone(e);return r.fields=Object.assign({},this.fields),r._nodes=this._nodes,r._excludedEdges=this._excludedEdges,r._sortErrors=this._sortErrors,r}concat(e){let r=super.concat(e),n=r.fields;for(let[i,a]of Object.entries(this.fields)){const s=n[i];n[i]=s===void 0?a:s}return r.withMutation(i=>i.setFields(n,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let r={};return this._nodes.forEach(n=>{var i;const a=this.fields[n];let s=e;(i=s)!=null&&i.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[n]})),r[n]=a&&"getDefault"in a?a.getDefault(s):void 0}),r}setFields(e,r){let n=this.clone();return n.fields=e,n._nodes=pb(e,r),n._sortErrors=Of(Object.keys(e)),r&&(n._excludedEdges=r),n}shape(e,r=[]){return this.clone().withMutation(n=>{let i=n._excludedEdges;return r.length&&(Array.isArray(r[0])||(r=[r]),i=[...n._excludedEdges,...r]),n.setFields(Object.assign(n.fields,e),i)})}partial(){const e={};for(const[r,n]of Object.entries(this.fields))e[r]="optional"in n&&n.optional instanceof Function?n.optional():n;return this.setFields(e)}deepPartial(){return Un(this)}pick(e){const r={};for(const n of e)this.fields[n]&&(r[n]=this.fields[n]);return this.setFields(r,this._excludedEdges.filter(([n,i])=>e.includes(n)&&e.includes(i)))}omit(e){const r=[];for(const n of Object.keys(this.fields))e.includes(n)||r.push(n);return this.pick(r)}from(e,r,n){let i=Dt.getter(e,!0);return this.transform(a=>{if(!a)return a;let s=a;return hb(a,e)&&(s=Object.assign({},a),n||delete s[e],s[r]=i(a)),s})}json(){return this.transform(xf)}exact(e){return this.test({name:"exact",exclusive:!0,message:e||Nn.exact,test(r){if(r==null)return!0;const n=If(this.schema,r);return n.length===0||this.createError({params:{properties:n.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(e=!0,r=Nn.noUnknown){typeof e!="boolean"&&(r=e,e=!0);let n=this.test({name:"noUnknown",exclusive:!0,message:r,test(i){if(i==null)return!0;const a=If(this.schema,i);return!e||a.length===0||this.createError({params:{unknown:a.join(", ")}})}});return n.spec.noUnknown=e,n}unknown(e=!0,r=Nn.noUnknown){return this.noUnknown(!e,r)}transformKeys(e){return this.transform(r=>{if(!r)return r;const n={};for(const i of Object.keys(r))n[e(i)]=r[i];return n})}camelCase(){return this.transformKeys(as.camelCase)}snakeCase(){return this.transformKeys(as.snakeCase)}constantCase(){return this.transformKeys(e=>as.snakeCase(e).toUpperCase())}describe(e){const r=(e?this.resolve(e):this).clone(),n=super.describe(e);n.fields={};for(const[a,s]of Object.entries(r.fields)){var i;let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[a]})),n.fields[a]=s.describe(o)}return n}}ls.prototype=Ff.prototype;function $f(t){return new Cf(t)}class Cf extends Te{constructor(e){super({type:"array",spec:{types:e},check(r){return Array.isArray(r)}}),this.innerType=void 0,this.innerType=e}_cast(e,r){const n=super._cast(e,r);if(!this._typeCheck(n)||!this.innerType)return n;let i=!1;const a=n.map((s,o)=>{const u=this.innerType.cast(s,Object.assign({},r,{path:`${r.path||""}[${o}]`}));return u!==s&&(i=!0),u});return i?a:n}_validate(e,r={},n,i){var a;let s=this.innerType,o=(a=r.recursive)!=null?a:this.spec.recursive;r.originalValue!=null&&r.originalValue,super._validate(e,r,n,(u,c)=>{var l;if(!o||!s||!this._typeCheck(c)){i(u,c);return}let f=new Array(c.length);for(let p=0;p<c.length;p++){var d;f[p]=s.asNestedTest({options:r,index:p,parent:c,parentPath:r.path,originalParent:(d=r.originalValue)!=null?d:e})}this.runTests({value:c,tests:f,originalValue:(l=r.originalValue)!=null?l:e,options:r},n,p=>i(p.concat(u),c))})}clone(e){const r=super.clone(e);return r.innerType=this.innerType,r}json(){return this.transform(xf)}concat(e){let r=super.concat(e);return r.innerType=this.innerType,e.innerType&&(r.innerType=r.innerType?r.innerType.concat(e.innerType):e.innerType),r}of(e){let r=this.clone();if(!Mn(e))throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: "+Be(e));return r.innerType=e,r.spec=Object.assign({},r.spec,{types:e}),r}length(e,r=Rn.length){return this.test({message:r,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(n){return n.length===this.resolve(e)}})}min(e,r){return r=r||Rn.min,this.test({message:r,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(n){return n.length>=this.resolve(e)}})}max(e,r){return r=r||Rn.max,this.test({message:r,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(n){return n.length<=this.resolve(e)}})}ensure(){return this.default(()=>[]).transform((e,r)=>this._typeCheck(e)?e:r==null?[]:[].concat(r))}compact(e){let r=e?(n,i,a)=>!e(n,i,a):n=>!!n;return this.transform(n=>n!=null?n.filter(r):n)}describe(e){const r=(e?this.resolve(e):this).clone(),n=super.describe(e);if(r.innerType){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[0]})),n.innerType=r.innerType.describe(a)}return n}}$f.prototype=Cf.prototype;function gb(){return`${Date.now()}-${Math.random().toString().slice(2)}`}function Af(t){return t.sources.some(e=>e.type==="temporary-filter")}function Pf(t){return t.filter(e=>!Af(e))}function yb(t){const e=t.findLast(Af),r=Pf(t);return e?[...r,e]:r}const vb=ls({type:jr().oneOf(["stash-saved-filter","all"]).required(),randomise:Ef().required(),savedFilterId:jr().when("type",{is:"stash-saved-filter",then:t=>t.required("Choose a filter"),otherwise:t=>t.strip()}),entityType:jr().when("type",{is:"all",then:t=>t.oneOf(["scene","marker"]).required(),otherwise:t=>t.strip()})});ls({id:jr().required(),sources:$f().of(vb).min(1,"Choose a filter").max(1).required()});function Ot(t,e){return{field:"spacer",id:`default-${t}`,options:{size:e}}}const bb=[["studio"],["title"],[Ot(1,"medium")],{left:["date"],right:["resolution",Ot(2,"small"),"frame-rate"]},[Ot(3,"small")],{left:["rating"],right:["o-count",Ot(4,"medium"),"play-count"]},[Ot(5,"medium")],["performers"],[Ot(6,"small")],["tags"],[Ot(7,"small")],["details"]],Ne="app-state",fs={volume:0,showSubtitles:!1,letterboxing:!1,forceLandscape:!1,looping:!1,uiVisible:!0,crtEffect:!1,crtEffectStrength:1,scenePreviewOnly:!1,markerPreviewOnly:!1,preferredStreamLabel:void 0,onlyShowMatchingOrientation:!1,maxMedia:void 0,autoPlay:!0,startPosition:"resume",endPosition:"video-end",showGuideOverlay:!0,showDevOptions:!1,logLevel:$h,pageSize:5,loggersToShow:[],loggersToHide:[],showDebuggingInfo:[],renderedMediaItemsBuffer:2,videoJsEventsToLog:[],actionButtonStackConfig:[{id:"1",type:"button",buttonType:"ui-visibility",pinned:!0},{id:"2",type:"button",buttonType:"settings",pinned:!1},{id:"3",type:"button",buttonType:"show-scene-info",pinned:!1},{id:"12",type:"folder",pinned:!1,contents:[{id:"12.1",type:"button",buttonType:"rate-scene",pinned:!1},{id:"12.2",type:"button",buttonType:"o-counter",pinned:!1},{id:"12.3",type:"button",buttonType:"set-organized",pinned:!1},{id:"12.4",type:"button",buttonType:"edit-tags",pinned:!1,pinnedTagIds:[]},{id:"12.5",type:"button",buttonType:"delete-media-item",pinned:!1}]},{id:"6",type:"button",buttonType:"force-landscape",pinned:!1},{id:"8",type:"button",buttonType:"volume",pinned:!1},{id:"9",type:"button",buttonType:"letterboxing",pinned:!1},{id:"14",type:"button",buttonType:"change-channel",pinned:!1},{id:"13",type:"folder",pinned:!1,contents:[{id:"13.1",type:"button",buttonType:"loop",pinned:!1},{id:"13.2",type:"button",buttonType:"playback-rate",pinned:!1},{id:"13.3",type:"button",buttonType:"subtitles",pinned:!1},{id:"13.4",type:"button",buttonType:"fullscreen",pinned:!1},{id:"13.5",type:"button",buttonType:"resolution",pinned:!1}]}],sceneInfoLayout:bb,sceneInfoFieldOptions:{},channels:[{id:"all-scenes",sources:[{type:"all",entityType:"scene",randomise:!1}]}],startupChannel:"last-viewed",playbackRate:1},Sb=["forceLandscape"],_b=()=>{const t=Mv,e=localStorage;return{getItem:async r=>{const[n,i]=await Promise.all([t.getItem(r),Promise.resolve(e.getItem(`${r}-local`))]);if(!n&&!i)return null;const a=n?JSON.parse(n).state:{},s=i?JSON.parse(i).state:{};return JSON.stringify({state:{...a,...s},version:a?.version??s?.version??0})},setItem:async(r,n)=>{const i=JSON.parse(n),a=i.state,s={},o={};for(const[c,l]of Object.entries(a))Sb.includes(c)?o[c]=l:s[c]=l;const u=[];Object.keys(s).length>0&&u.push(t.setItem(r,JSON.stringify({...i,state:s}))),Object.keys(o).length>0&&u.push(Promise.resolve(e.setItem(`${r}-local`,JSON.stringify({...i,state:o})))),await Promise.all(u)},removeItem:async r=>{await Promise.all([t.removeItem(r),Promise.resolve(e.removeItem(`${r}-local`))])}}};Vo()(wh((t,e)=>({...fs,set:(r,n)=>{if(!rs.getState().tvConfigLoaded){console.warn(`Tried to set ${r} to "${n}" before config was loaded`);return}t(i=>{let a=typeof n=="function"?n(i[r]):n;if(r==="channels"&&(a=yb(a)),r==="showDebuggingInfo"){const s=a.includes("render-debugging");localStorage.getItem("enableRenderDebugging")==="true"!==s&&setTimeout(()=>{localStorage.setItem("enableRenderDebugging",JSON.stringify(s)),window.location.reload()},300)}return{[r]:a}})},setToDefault:r=>{if(!rs.getState().tvConfigLoaded){console.warn(`Tried to set ${r} to default before store was loaded`);return}t(n=>({[r]:fs[r]}))},getDefault:r=>fs[r],get:r=>e()[r]}),{name:Ne,storage:Bo(()=>_b()),partialize:t=>({...t,channels:Pf(t.channels)}),onRehydrateStorage:t=>()=>rs.setState({tvConfigLoaded:!0}),version:3,migrate:(t,e)=>{if(e===0&&t&&typeof t=="object"&&("audioMuted"in t&&(t.volume=t.audioMuted?0:1,delete t.audioMuted),"actionButtonsConfig"in t&&Array.isArray(t.actionButtonsConfig)))for(const r of t.actionButtonsConfig)r.type==="mute"&&(r.type="volume");if(e<2&&t&&typeof t=="object"&&"actionButtonsConfig"in t&&Array.isArray(t.actionButtonsConfig)){const r=t.actionButtonsConfig;t.actionButtonStackConfig=r,delete t.actionButtonsConfig;for(const n of r)n.buttonType=n.type,n.type="button"}if(e<3&&t&&typeof t=="object"){const r=t;if(typeof r.currentFilterId=="string"&&r.currentFilterId){const n={id:gb(),sources:[{type:"stash-saved-filter",savedFilterId:r.currentFilterId,randomise:!!r.isRandomised}]};r.channels=[n],r.lastViewedChannelId=n.id}delete r.currentFilterId,delete r.isRandomised}return t}}));const{PluginApi:be}=window,{React:Y}=be,ds=be.utils.StashService.getClient();Nf(async t=>t?.initialSetupComplete?null:(await Rf(),{...t,initialSetupComplete:!0})),be.patch.instead("PluginSettings",function(t,e,r){const[n,i]=Y.useState(!1),[a,s]=be.React.useState(null);if(t.pluginID!==Xe)return Y.createElement(r,{...t});const o=async()=>{i(!1),await Nf(()=>({})),s(null),i(!0)};be.React.useEffect(()=>{ps().then(c=>s(c.plugins[Xe]))},[]);const u=be.React.useMemo(()=>JSON.parse(a&&Ne in a&&typeof a[Ne]=="string"?a[Ne]:"{}")?.state?.showDevOptions,[a]);return[Y.createElement(r,{...t}),Y.createElement("div",{className:"plugin-settings"},Y.createElement("div",{className:"setting"})," ",Y.createElement("div",{className:"setting"},Y.createElement("div",null,Y.createElement("h3",null,"Reset all Stash TV settings"),Y.createElement("div",{className:"sub-heading"},"Stash TV has its own settings which are configurable from the settings panel in the Stash TV interface. This resets those settings to default.")),Y.createElement("div",null,Y.createElement(be.libraries.Bootstrap.Button,{onClick:o,variant:"warning"},n&&Y.createElement(Y.Fragment,null,Y.createElement(Zr,{icon:be.libraries.FontAwesomeSolid.faCheck})," "),"Reset"))),u&&Y.createElement("div",{className:"setting"},Y.createElement("div",null,Y.createElement("details",null,Y.createElement("summary",null,Y.createElement("h3",{style:{display:"inline"}},"Stash TV settings JSON")),Y.createElement("pre",null,JSON.stringify(a&&Ne in a&&typeof a[Ne]=="string"?{...a,[Ne]:"<app state data>"}:a,null,2)),a&&Ne in a&&typeof a[Ne]=="string"&&Y.createElement(Y.Fragment,null,"App state stored in Stash TV config:",Y.createElement("pre",null,JSON.stringify(JSON.parse(a[Ne]),null,2))))),Y.createElement("div",null)," "))]}),be.patch.instead("MainNavBar.MenuItems",function({children:t,...e},r,n){const{data:i,loading:a}=be.GQL.useConfigurationQuery(),s=i?.configuration?.interface?.menuItems?.includes("tv");return[Y.createElement(n,{...e},t,!a&&s&&Y.createElement(Eb,null))]}),be.patch.before("CheckboxGroup",function(...t){const[e,...r]=t;return e.groupId!=="menu-items"?[e,...r]:[{...e,items:[...e.items,{id:"tv",headingID:"TV"}]},...r]});const Eb=()=>{const t="/plugin/"+Xe+"/assets/app/";return Y.createElement("div",{"data-rb-event-key":t,className:"col-4 col-sm-3 col-md-2 col-lg-auto nav-link",id:"StashTVButton"},Y.createElement("a",{href:t,className:"minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center btn btn-primary",target:"_blank"},Y.createElement(Zr,{className:"fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0",icon:be.libraries.FontAwesomeSolid.faTelevision}),Y.createElement("span",null,"TV")))};async function Nf(t){ps().then(async e=>typeof t=="function"?await t(e.plugins[Xe],e):{...e.plugins[Xe],...t}).then(e=>{if(e)return ds.mutate({mutation:be.GQL.ConfigurePluginDocument,variables:{plugin_id:Xe,input:e}})})}async function wb(t){ps().then(e=>typeof t=="function"?t(e.interface):{...e.interface,...t}).then(e=>ds.mutate({mutation:be.GQL.ConfigureInterfaceDocument,variables:{input:e}}))}async function ps(){return(await ds.query({query:be.GQL.ConfigurationDocument})).data?.configuration}async function Rf(){wb(t=>({...t,menuItems:Array.from(new Set([...t.menuItems||[],"tv"]))}))}xt.setupPlugin=Rf,Object.defineProperty(xt,Symbol.toStringTag,{value:"Module"})}));
