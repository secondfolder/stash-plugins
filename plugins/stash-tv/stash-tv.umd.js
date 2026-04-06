(function(qr){typeof define=="function"&&define.amd?define(qr):qr()})((function(){"use strict";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function qr(e,t,r){return(t=tf(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function to(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?to(Object(r),!0).forEach(function(n){qr(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):to(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ef(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function tf(e){var t=ef(e,"string");return typeof t=="symbol"?t:t+""}const ro=()=>{};let Mn={},no={},io=null,ao={mark:ro,measure:ro};try{typeof window<"u"&&(Mn=window),typeof document<"u"&&(no=document),typeof MutationObserver<"u"&&(io=MutationObserver),typeof performance<"u"&&(ao=performance)}catch{}const{userAgent:oo=""}=Mn.navigator||{},et=Mn,he=no,so=io,Br=ao;et.document;const We=!!he.documentElement&&!!he.head&&typeof he.addEventListener=="function"&&typeof he.createElement=="function",uo=~oo.indexOf("MSIE")||~oo.indexOf("Trident/");var rf=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,nf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,co={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},af={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},lo=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ke="classic",Vr="duotone",of="sharp",sf="sharp-duotone",fo=[ke,Vr,of,sf],uf={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},cf={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},lf=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ff={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},df=["fak","fa-kit","fakd","fa-kit-duotone"],po={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},pf=["kit"],hf={kit:{"fa-kit":"fak"}},mf=["fak","fakd"],gf={kit:{fak:"fa-kit"}},ho={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Gr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yf=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],vf=["fak","fa-kit","fakd","fa-kit-duotone"],bf={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Sf={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},_f={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ln={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},wf=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],jn=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...yf,...wf],Ef=["solid","regular","light","thin","duotone","brands"],mo=[1,2,3,4,5,6,7,8,9,10],Df=mo.concat([11,12,13,14,15,16,17,18,19,20]),If=[...Object.keys(_f),...Ef,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Gr.GROUP,Gr.SWAP_OPACITY,Gr.PRIMARY,Gr.SECONDARY].concat(mo.map(e=>"".concat(e,"x"))).concat(Df.map(e=>"w-".concat(e))),Tf={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Ye="___FONT_AWESOME___",Un=16,go="fa",yo="svg-inline--fa",_t="data-fa-i2svg",qn="data-fa-pseudo-element",kf="data-fa-pseudo-element-pending",Bn="data-prefix",Vn="data-icon",vo="fontawesome-i2svg",Of="async",xf=["HTML","HEAD","STYLE","SCRIPT"],bo=(()=>{try{return!0}catch{return!1}})();function lr(e){return new Proxy(e,{get(t,r){return r in t?t[r]:t[ke]}})}const So=L({},co);So[ke]=L(L(L(L({},{"fa-duotone":"duotone"}),co[ke]),po.kit),po["kit-duotone"]);const Af=lr(So),Gn=L({},ff);Gn[ke]=L(L(L(L({},{duotone:"fad"}),Gn[ke]),ho.kit),ho["kit-duotone"]);const _o=lr(Gn),zn=L({},Ln);zn[ke]=L(L({},zn[ke]),gf.kit);const Qn=lr(zn),Wn=L({},Sf);Wn[ke]=L(L({},Wn[ke]),hf.kit),lr(Wn);const Cf=rf,wo="fa-layers-text",Ff=nf,$f=L({},uf);lr($f);const Pf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yn=af,Nf=[...pf,...If],fr=et.FontAwesomeConfig||{};function Rf(e){var t=he.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Mf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}he&&typeof he.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[r,n]=t;const i=Mf(Rf(r));i!=null&&(fr[n]=i)});const Eo={styleDefault:"solid",familyDefault:ke,cssPrefix:go,replacementClass:yo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};fr.familyPrefix&&(fr.cssPrefix=fr.familyPrefix);const Ft=L(L({},Eo),fr);Ft.autoReplaceSvg||(Ft.observeMutations=!1);const X={};Object.keys(Eo).forEach(e=>{Object.defineProperty(X,e,{enumerable:!0,set:function(t){Ft[e]=t,dr.forEach(r=>r(X))},get:function(){return Ft[e]}})}),Object.defineProperty(X,"familyPrefix",{enumerable:!0,set:function(e){Ft.cssPrefix=e,dr.forEach(t=>t(X))},get:function(){return Ft.cssPrefix}}),et.FontAwesomeConfig=X;const dr=[];function Lf(e){return dr.push(e),()=>{dr.splice(dr.indexOf(e),1)}}const tt=Un,Be={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jf(e){if(!e||!We)return;const t=he.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const r=he.head.childNodes;let n=null;for(let i=r.length-1;i>-1;i--){const a=r[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=a)}return he.head.insertBefore(t,n),e}const Uf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pr(){let e=12,t="";for(;e-- >0;)t+=Uf[Math.random()*62|0];return t}function $t(e){const t=[];for(let r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function Hn(e){return e.classList?$t(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Do(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qf(e){return Object.keys(e||{}).reduce((t,r)=>t+"".concat(r,'="').concat(Do(e[r]),'" '),"").trim()}function zr(e){return Object.keys(e||{}).reduce((t,r)=>t+"".concat(r,": ").concat(e[r].trim(),";"),"")}function Jn(e){return e.size!==Be.size||e.x!==Be.x||e.y!==Be.y||e.rotate!==Be.rotate||e.flipX||e.flipY}function Bf(e){let{transform:t,containerWidth:r,iconWidth:n}=e;const i={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:i,inner:u,path:c}}function Vf(e){let{transform:t,width:r=Un,height:n=Un,startCentered:i=!1}=e,a="";return i&&uo?a+="translate(".concat(t.x/tt-r/2,"em, ").concat(t.y/tt-n/2,"em) "):i?a+="translate(calc(-50% + ".concat(t.x/tt,"em), calc(-50% + ").concat(t.y/tt,"em)) "):a+="translate(".concat(t.x/tt,"em, ").concat(t.y/tt,"em) "),a+="scale(".concat(t.size/tt*(t.flipX?-1:1),", ").concat(t.size/tt*(t.flipY?-1:1),") "),a+="rotate(".concat(t.rotate,"deg) "),a}var Gf=`:root, :host {
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
}`;function Io(){const e=go,t=yo,r=X.cssPrefix,n=X.replacementClass;let i=Gf;if(r!==e||n!==t){const a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(r,"-")).replace(o,"--".concat(r,"-")).replace(s,".".concat(n))}return i}let To=!1;function Kn(){X.autoAddCss&&!To&&(jf(Io()),To=!0)}var zf={mixout(){return{dom:{css:Io,insertCss:Kn}}},hooks(){return{beforeDOMElementCreation(){Kn()},beforeI2svg(){Kn()}}}};const He=et||{};He[Ye]||(He[Ye]={}),He[Ye].styles||(He[Ye].styles={}),He[Ye].hooks||(He[Ye].hooks={}),He[Ye].shims||(He[Ye].shims=[]);var Ve=He[Ye];const ko=[],Oo=function(){he.removeEventListener("DOMContentLoaded",Oo),Qr=1,ko.map(e=>e())};let Qr=!1;We&&(Qr=(he.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(he.readyState),Qr||he.addEventListener("DOMContentLoaded",Oo));function Qf(e){We&&(Qr?setTimeout(e,0):ko.push(e))}function hr(e){const{tag:t,attributes:r={},children:n=[]}=e;return typeof e=="string"?Do(e):"<".concat(t," ").concat(qf(r),">").concat(n.map(hr).join(""),"</").concat(t,">")}function xo(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}var Xn=function(t,r,n,i){var a=Object.keys(t),o=a.length,s=r,u,c,l;for(n===void 0?(u=1,l=t[a[0]]):(u=0,l=n);u<o;u++)c=a[u],l=s(l,t[c],c,t);return l};function Wf(e){const t=[];let r=0;const n=e.length;for(;r<n;){const i=e.charCodeAt(r++);if(i>=55296&&i<=56319&&r<n){const a=e.charCodeAt(r++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),r--)}else t.push(i)}return t}function Zn(e){const t=Wf(e);return t.length===1?t[0].toString(16):null}function Yf(e,t){const r=e.length;let n=e.charCodeAt(t),i;return n>=55296&&n<=56319&&r>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(n-55296)*1024+i-56320+65536:n}function Ao(e){return Object.keys(e).reduce((t,r)=>{const n=e[r];return!!n.icon?t[n.iconName]=n.icon:t[r]=n,t},{})}function ei(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:n=!1}=r,i=Ao(t);typeof Ve.hooks.addPack=="function"&&!n?Ve.hooks.addPack(e,Ao(t)):Ve.styles[e]=L(L({},Ve.styles[e]||{}),i),e==="fas"&&ei("fa",t)}const{styles:mr,shims:Hf}=Ve,Co=Object.keys(Qn),Jf=Co.reduce((e,t)=>(e[t]=Object.keys(Qn[t]),e),{});let ti=null,Fo={},$o={},Po={},No={},Ro={};function Kf(e){return~Nf.indexOf(e)}function Xf(e,t){const r=t.split("-"),n=r[0],i=r.slice(1).join("-");return n===e&&i!==""&&!Kf(i)?i:null}const Mo=()=>{const e=n=>Xn(mr,(i,a,o)=>(i[o]=Xn(a,n,{}),i),{});Fo=e((n,i,a)=>(i[3]&&(n[i[3]]=a),i[2]&&i[2].filter(s=>typeof s=="number").forEach(s=>{n[s.toString(16)]=a}),n)),$o=e((n,i,a)=>(n[a]=a,i[2]&&i[2].filter(s=>typeof s=="string").forEach(s=>{n[s]=a}),n)),Ro=e((n,i,a)=>{const o=i[2];return n[a]=a,o.forEach(s=>{n[s]=a}),n});const t="far"in mr||X.autoFetchSvg,r=Xn(Hf,(n,i)=>{const a=i[0];let o=i[1];const s=i[2];return o==="far"&&!t&&(o="fas"),typeof a=="string"&&(n.names[a]={prefix:o,iconName:s}),typeof a=="number"&&(n.unicodes[a.toString(16)]={prefix:o,iconName:s}),n},{names:{},unicodes:{}});Po=r.names,No=r.unicodes,ti=Wr(X.styleDefault,{family:X.familyDefault})};Lf(e=>{ti=Wr(e.styleDefault,{family:X.familyDefault})}),Mo();function ri(e,t){return(Fo[e]||{})[t]}function Zf(e,t){return($o[e]||{})[t]}function wt(e,t){return(Ro[e]||{})[t]}function Lo(e){return Po[e]||{prefix:null,iconName:null}}function ed(e){const t=No[e],r=ri("fas",e);return t||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function rt(){return ti}const jo=()=>({prefix:null,iconName:null,rest:[]});function td(e){let t=ke;const r=Co.reduce((n,i)=>(n[i]="".concat(X.cssPrefix,"-").concat(i),n),{});return fo.forEach(n=>{(e.includes(r[n])||e.some(i=>Jf[n].includes(i)))&&(t=n)}),t}function Wr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:r=ke}=t,n=Af[r][e];if(r===Vr&&!e)return"fad";const i=_o[r][e]||_o[r][n],a=e in Ve.styles?e:null;return i||a||null}function rd(e){let t=[],r=null;return e.forEach(n=>{const i=Xf(X.cssPrefix,n);i?r=i:n&&t.push(n)}),{iconName:r,rest:t}}function Uo(e){return e.sort().filter((t,r,n)=>n.indexOf(t)===r)}function Yr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:r=!1}=t;let n=null;const i=jn.concat(vf),a=Uo(e.filter(d=>i.includes(d))),o=Uo(e.filter(d=>!jn.includes(d))),s=a.filter(d=>(n=d,!lo.includes(d))),[u=null]=s,c=td(a),l=L(L({},rd(o)),{},{prefix:Wr(u,{family:c})});return L(L(L({},l),od({values:e,family:c,styles:mr,config:X,canonical:l,givenPrefix:n})),nd(r,n,l))}function nd(e,t,r){let{prefix:n,iconName:i}=r;if(e||!n||!i)return{prefix:n,iconName:i};const a=t==="fa"?Lo(i):{},o=wt(n,i);return i=a.iconName||o||i,n=a.prefix||n,n==="far"&&!mr.far&&mr.fas&&!X.autoFetchSvg&&(n="fas"),{prefix:n,iconName:i}}const id=fo.filter(e=>e!==ke||e!==Vr),ad=Object.keys(Ln).filter(e=>e!==ke).map(e=>Object.keys(Ln[e])).flat();function od(e){const{values:t,family:r,canonical:n,givenPrefix:i="",styles:a={},config:o={}}=e,s=r===Vr,u=t.includes("fa-duotone")||t.includes("fad"),c=o.familyDefault==="duotone",l=n.prefix==="fad"||n.prefix==="fa-duotone";if(!s&&(u||c||l)&&(n.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab"),!n.prefix&&id.includes(r)&&(Object.keys(a).find(f=>ad.includes(f))||o.autoFetchSvg)){const f=lf.get(r).defaultShortPrefixId;n.prefix=f,n.iconName=wt(n.prefix,n.iconName)||n.iconName}return(n.prefix==="fa"||i==="fa")&&(n.prefix=rt()||"fas"),n}class sd{constructor(){this.definitions={}}add(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];const i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(a=>{this.definitions[a]=L(L({},this.definitions[a]||{}),i[a]),ei(a,i[a]);const o=Qn[ke][a];o&&ei(o,i[a]),Mo()})}reset(){this.definitions={}}_pullDefinitions(t,r){const n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(i=>{const{prefix:a,iconName:o,icon:s}=n[i],u=s[2];t[a]||(t[a]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(t[a][c]=s)}),t[a][o]=s}),t}}let qo=[],Pt={};const Nt={},ud=Object.keys(Nt);function cd(e,t){let{mixoutsTo:r}=t;return qo=e,Pt={},Object.keys(Nt).forEach(n=>{ud.indexOf(n)===-1&&delete Nt[n]}),qo.forEach(n=>{const i=n.mixout?n.mixout():{};if(Object.keys(i).forEach(a=>{typeof i[a]=="function"&&(r[a]=i[a]),typeof i[a]=="object"&&Object.keys(i[a]).forEach(o=>{r[a]||(r[a]={}),r[a][o]=i[a][o]})}),n.hooks){const a=n.hooks();Object.keys(a).forEach(o=>{Pt[o]||(Pt[o]=[]),Pt[o].push(a[o])})}n.provides&&n.provides(Nt)}),r}function ni(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];return(Pt[e]||[]).forEach(o=>{t=o.apply(null,[t,...n])}),t}function Et(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];(Pt[e]||[]).forEach(a=>{a.apply(null,r)})}function nt(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Nt[e]?Nt[e].apply(null,t):void 0}function ii(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const r=e.prefix||rt();if(t)return t=wt(r,t)||t,xo(Bo.definitions,r,t)||xo(Ve.styles,r,t)}const Bo=new sd,Pe={noAuto:()=>{X.autoReplaceSvg=!1,X.observeMutations=!1,Et("noAuto")},config:X,dom:{i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return We?(Et("beforeI2svg",e),nt("pseudoElements2svg",e),nt("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;X.autoReplaceSvg===!1&&(X.autoReplaceSvg=!0),X.observeMutations=!0,Qf(()=>{ld({autoReplaceSvgRoot:t}),Et("watch",e)})}},parse:{icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:wt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Wr(e[0]);return{prefix:r,iconName:wt(r,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(X.cssPrefix,"-"))>-1||e.match(Cf))){const t=Yr(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||rt(),iconName:wt(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=rt();return{prefix:t,iconName:wt(t,e)||e}}}},library:Bo,findIconDefinition:ii,toHtml:hr},ld=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=he}=e;(Object.keys(Ve.styles).length>0||X.autoFetchSvg)&&We&&X.autoReplaceSvg&&Pe.dom.i2svg({node:t})};function Hr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(r=>hr(r))}}),Object.defineProperty(e,"node",{get:function(){if(!We)return;const r=he.createElement("div");return r.innerHTML=e.html,r.children}}),e}function fd(e){let{children:t,main:r,mask:n,attributes:i,styles:a,transform:o}=e;if(Jn(o)&&r.found&&!n.found){const{width:s,height:u}=r,c={x:s/u/2,y:.5};i.style=zr(L(L({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function dd(e){let{prefix:t,iconName:r,children:n,attributes:i,symbol:a}=e;const o=a===!0?"".concat(t,"-").concat(X.cssPrefix,"-").concat(r):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:o}),children:n}]}]}function ai(e){const{icons:{main:t,mask:r},prefix:n,iconName:i,transform:a,symbol:o,title:s,maskId:u,titleId:c,extra:l,watchable:d=!1}=e,{width:f,height:p}=r.found?r:t,y=mf.includes(n),S=[X.replacementClass,i?"".concat(X.cssPrefix,"-").concat(i):""].filter($=>l.classes.indexOf($)===-1).filter($=>$!==""||!!$).concat(l.classes).join(" ");let h={children:[],attributes:L(L({},l.attributes),{},{"data-prefix":n,"data-icon":i,class:S,role:l.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(p)})};const g=y&&!~l.classes.indexOf("fa-fw")?{width:"".concat(f/p*16*.0625,"em")}:{};d&&(h.attributes[_t]=""),s&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||pr())},children:[s]}),delete h.attributes.title);const _=L(L({},h),{},{prefix:n,iconName:i,main:t,mask:r,maskId:u,transform:a,symbol:o,styles:L(L({},g),l.styles)}),{children:I,attributes:k}=r.found&&t.found?nt("generateAbstractMask",_)||{children:[],attributes:{}}:nt("generateAbstractIcon",_)||{children:[],attributes:{}};return _.children=I,_.attributes=k,o?dd(_):fd(_)}function Vo(e){const{content:t,width:r,height:n,transform:i,title:a,extra:o,watchable:s=!1}=e,u=L(L(L({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(u[_t]="");const c=L({},o.styles);Jn(i)&&(c.transform=Vf({transform:i,startCentered:!0,width:r,height:n}),c["-webkit-transform"]=c.transform);const l=zr(c);l.length>0&&(u.style=l);const d=[];return d.push({tag:"span",attributes:u,children:[t]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function pd(e){const{content:t,title:r,extra:n}=e,i=L(L(L({},n.attributes),r?{title:r}:{}),{},{class:n.classes.join(" ")}),a=zr(n.styles);a.length>0&&(i.style=a);const o=[];return o.push({tag:"span",attributes:i,children:[t]}),r&&o.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),o}const{styles:oi}=Ve;function si(e){const t=e[0],r=e[1],[n]=e.slice(4);let i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(X.cssPrefix,"-").concat(Yn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(X.cssPrefix,"-").concat(Yn.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(X.cssPrefix,"-").concat(Yn.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:t,height:r,icon:i}}const hd={found:!1,width:512,height:512};function md(e,t){!bo&&!X.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ui(e,t){let r=t;return t==="fa"&&X.styleDefault!==null&&(t=rt()),new Promise((n,i)=>{if(r==="fa"){const a=Lo(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&oi[t]&&oi[t][e]){const a=oi[t][e];return n(si(a))}md(e,t),n(L(L({},hd),{},{icon:X.showMissingIcons&&e?nt("missingIconAbstract")||{}:{}}))})}const Go=()=>{},ci=X.measurePerformance&&Br&&Br.mark&&Br.measure?Br:{mark:Go,measure:Go},gr='FA "6.7.2"',gd=e=>(ci.mark("".concat(gr," ").concat(e," begins")),()=>zo(e)),zo=e=>{ci.mark("".concat(gr," ").concat(e," ends")),ci.measure("".concat(gr," ").concat(e),"".concat(gr," ").concat(e," begins"),"".concat(gr," ").concat(e," ends"))};var li={begin:gd,end:zo};const Jr=()=>{};function Qo(e){return typeof(e.getAttribute?e.getAttribute(_t):null)=="string"}function yd(e){const t=e.getAttribute?e.getAttribute(Bn):null,r=e.getAttribute?e.getAttribute(Vn):null;return t&&r}function vd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(X.replacementClass)}function bd(){return X.autoReplaceSvg===!0?Kr.replace:Kr[X.autoReplaceSvg]||Kr.replace}function Sd(e){return he.createElementNS("http://www.w3.org/2000/svg",e)}function _d(e){return he.createElement(e)}function Wo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:r=e.tag==="svg"?Sd:_d}=t;if(typeof e=="string")return he.createTextNode(e);const n=r(e.tag);return Object.keys(e.attributes||[]).forEach(function(a){n.setAttribute(a,e.attributes[a])}),(e.children||[]).forEach(function(a){n.appendChild(Wo(a,{ceFn:r}))}),n}function wd(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Kr={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(r=>{t.parentNode.insertBefore(Wo(r),t)}),t.getAttribute(_t)===null&&X.keepOriginalSource){let r=he.createComment(wd(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(e){const t=e[0],r=e[1];if(~Hn(t).indexOf(X.replacementClass))return Kr.replace(e);const n=new RegExp("".concat(X.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){const a=r[0].attributes.class.split(" ").reduce((o,s)=>(s===X.replacementClass||s.match(n)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",a.toNode.join(" "))}const i=r.map(a=>hr(a)).join(`
`);t.setAttribute(_t,""),t.innerHTML=i}};function Yo(e){e()}function Ho(e,t){const r=typeof t=="function"?t:Jr;if(e.length===0)r();else{let n=Yo;X.mutateApproach===Of&&(n=et.requestAnimationFrame||Yo),n(()=>{const i=bd(),a=li.begin("mutate");e.map(i),a(),r()})}}let fi=!1;function Jo(){fi=!0}function di(){fi=!1}let Xr=null;function Ko(e){if(!so||!X.observeMutations)return;const{treeCallback:t=Jr,nodeCallback:r=Jr,pseudoElementsCallback:n=Jr,observeMutationsRoot:i=he}=e;Xr=new so(a=>{if(fi)return;const o=rt();$t(a).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Qo(s.addedNodes[0])&&(X.searchPseudoElements&&n(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&X.searchPseudoElements&&n(s.target.parentNode),s.type==="attributes"&&Qo(s.target)&&~Pf.indexOf(s.attributeName))if(s.attributeName==="class"&&yd(s.target)){const{prefix:u,iconName:c}=Yr(Hn(s.target));s.target.setAttribute(Bn,u||o),c&&s.target.setAttribute(Vn,c)}else vd(s.target)&&r(s.target)})}),We&&Xr.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ed(){Xr&&Xr.disconnect()}function Dd(e){const t=e.getAttribute("style");let r=[];return t&&(r=t.split(";").reduce((n,i)=>{const a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),r}function Id(e){const t=e.getAttribute("data-prefix"),r=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"";let i=Yr(Hn(e));return i.prefix||(i.prefix=rt()),t&&r&&(i.prefix=t,i.iconName=r),i.iconName&&i.prefix||(i.prefix&&n.length>0&&(i.iconName=Zf(i.prefix,e.innerText)||ri(i.prefix,Zn(e.innerText))),!i.iconName&&X.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Td(e){const t=$t(e.attributes).reduce((i,a)=>(i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i),{}),r=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return X.autoA11y&&(r?t["aria-labelledby"]="".concat(X.replacementClass,"-title-").concat(n||pr()):(t["aria-hidden"]="true",t.focusable="false")),t}function kd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Be,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:r,prefix:n,rest:i}=Id(e),a=Td(e),o=ni("parseNodeAttributes",{},e);let s=t.styleParser?Dd(e):[];return L({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:n,transform:Be,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:a}},o)}const{styles:Od}=Ve;function Zo(e){const t=X.autoReplaceSvg==="nest"?Xo(e,{styleParser:!1}):Xo(e);return~t.extra.classes.indexOf(wo)?nt("generateLayersText",e,t):nt("generateSvgReplacementMutation",e,t)}function xd(){return[...df,...jn]}function es(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!We)return Promise.resolve();const r=he.documentElement.classList,n=l=>r.add("".concat(vo,"-").concat(l)),i=l=>r.remove("".concat(vo,"-").concat(l)),a=X.autoFetchSvg?xd():lo.concat(Object.keys(Od));a.includes("fa")||a.push("fa");const o=[".".concat(wo,":not([").concat(_t,"])")].concat(a.map(l=>".".concat(l,":not([").concat(_t,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=$t(e.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),i("complete");else return Promise.resolve();const u=li.begin("onTree"),c=s.reduce((l,d)=>{try{const f=Zo(d);f&&l.push(f)}catch(f){bo||f.name==="MissingIcon"&&console.error(f)}return l},[]);return new Promise((l,d)=>{Promise.all(c).then(f=>{Ho(f,()=>{n("active"),n("complete"),i("pending"),typeof t=="function"&&t(),u(),l()})}).catch(f=>{u(),d(f)})})}function Ad(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zo(e).then(r=>{r&&Ho([r],t)})}function Cd(e){return function(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=(t||{}).icon?t:ii(t||{});let{mask:i}=r;return i&&(i=(i||{}).icon?i:ii(i||{})),e(n,L(L({},r),{},{mask:i}))}}const Fd=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:r=Be,symbol:n=!1,mask:i=null,maskId:a=null,title:o=null,titleId:s=null,classes:u=[],attributes:c={},styles:l={}}=t;if(!e)return;const{prefix:d,iconName:f,icon:p}=e;return Hr(L({type:"icon"},e),()=>(Et("beforeDOMElementCreation",{iconDefinition:e,params:t}),X.autoA11y&&(o?c["aria-labelledby"]="".concat(X.replacementClass,"-title-").concat(s||pr()):(c["aria-hidden"]="true",c.focusable="false")),ai({icons:{main:si(p),mask:i?si(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:L(L({},Be),r),symbol:n,title:o,maskId:a,titleId:s,extra:{attributes:c,styles:l,classes:u}})))};var $d={mixout(){return{icon:Cd(Fd)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=es,e.nodeCallback=Ad,e}}},provides(e){e.i2svg=function(t){const{node:r=he,callback:n=()=>{}}=t;return es(r,n)},e.generateSvgReplacementMutation=function(t,r){const{iconName:n,title:i,titleId:a,prefix:o,transform:s,symbol:u,mask:c,maskId:l,extra:d}=r;return new Promise((f,p)=>{Promise.all([ui(n,o),c.iconName?ui(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[S,h]=y;f([t,ai({icons:{main:S,mask:h},prefix:o,iconName:n,transform:s,symbol:u,maskId:l,title:i,titleId:a,extra:d,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(t){let{children:r,attributes:n,main:i,transform:a,styles:o}=t;const s=zr(o);s.length>0&&(n.style=s);let u;return Jn(a)&&(u=nt("generateAbstractTransformGrouping",{main:i,transform:a,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:n}}}},Pd={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:r=[]}=t;return Hr({type:"layer"},()=>{Et("beforeDOMElementCreation",{assembler:e,params:t});let n=[];return e(i=>{Array.isArray(i)?i.map(a=>{n=n.concat(a.abstract)}):n=n.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(X.cssPrefix,"-layers"),...r].join(" ")},children:n}]})}}}},Nd={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:r=null,classes:n=[],attributes:i={},styles:a={}}=t;return Hr({type:"counter",content:e},()=>(Et("beforeDOMElementCreation",{content:e,params:t}),pd({content:e.toString(),title:r,extra:{attributes:i,styles:a,classes:["".concat(X.cssPrefix,"-layers-counter"),...n]}})))}}}},Rd={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:r=Be,title:n=null,classes:i=[],attributes:a={},styles:o={}}=t;return Hr({type:"text",content:e},()=>(Et("beforeDOMElementCreation",{content:e,params:t}),Vo({content:e,transform:L(L({},Be),r),title:n,extra:{attributes:a,styles:o,classes:["".concat(X.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,r){const{title:n,transform:i,extra:a}=r;let o=null,s=null;if(uo){const u=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/u,s=c.height/u}return X.autoA11y&&!n&&(a.attributes["aria-hidden"]="true"),Promise.resolve([t,Vo({content:t.innerHTML,width:o,height:s,transform:i,title:n,extra:a,watchable:!0})])}}};const Md=new RegExp('"',"ug"),ts=[1105920,1112319],rs=L(L(L(L({},{FontAwesome:{normal:"fas",400:"fas"}}),cf),Tf),bf),pi=Object.keys(rs).reduce((e,t)=>(e[t.toLowerCase()]=rs[t],e),{}),Ld=Object.keys(pi).reduce((e,t)=>{const r=pi[t];return e[t]=r[900]||[...Object.entries(r)][0][1],e},{});function jd(e){const t=e.replace(Md,""),r=Yf(t,0),n=r>=ts[0]&&r<=ts[1],i=t.length===2?t[0]===t[1]:!1;return{value:Zn(i?t[0]:t),isSecondary:n||i}}function Ud(e,t){const r=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),i=isNaN(n)?"normal":n;return(pi[r]||{})[i]||Ld[r]}function ns(e,t){const r="".concat(kf).concat(t.replace(":","-"));return new Promise((n,i)=>{if(e.getAttribute(r)!==null)return n();const o=$t(e.children).filter(f=>f.getAttribute(qn)===t)[0],s=et.getComputedStyle(e,t),u=s.getPropertyValue("font-family"),c=u.match(Ff),l=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),n();if(c&&d!=="none"&&d!==""){const f=s.getPropertyValue("content");let p=Ud(u,l);const{value:y,isSecondary:S}=jd(f),h=c[0].startsWith("FontAwesome");let g=ri(p,y),_=g;if(h){const I=ed(y);I.iconName&&I.prefix&&(g=I.iconName,p=I.prefix)}if(g&&!S&&(!o||o.getAttribute(Bn)!==p||o.getAttribute(Vn)!==_)){e.setAttribute(r,_),o&&e.removeChild(o);const I=kd(),{extra:k}=I;k.attributes[qn]=t,ui(g,p).then($=>{const E=ai(L(L({},I),{},{icons:{main:$,mask:jo()},prefix:p,iconName:_,extra:k,watchable:!0})),x=he.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(x,e.firstChild):e.appendChild(x),x.outerHTML=E.map(v=>hr(v)).join(`
`),e.removeAttribute(r),n()}).catch(i)}else n()}else n()})}function qd(e){return Promise.all([ns(e,"::before"),ns(e,"::after")])}function Bd(e){return e.parentNode!==document.head&&!~xf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(qn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function is(e){if(We)return new Promise((t,r)=>{const n=$t(e.querySelectorAll("*")).filter(Bd).map(qd),i=li.begin("searchPseudoElements");Jo(),Promise.all(n).then(()=>{i(),di(),t()}).catch(()=>{i(),di(),r()})})}var Vd={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=is,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:r=he}=t;X.searchPseudoElements&&is(r)}}};let as=!1;var Gd={mixout(){return{dom:{unwatch(){Jo(),as=!0}}}},hooks(){return{bootstrap(){Ko(ni("mutationObserverCallbacks",{}))},noAuto(){Ed()},watch(e){const{observeMutationsRoot:t}=e;as?di():Ko(ni("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const os=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((r,n)=>{const i=n.toLowerCase().split("-"),a=i[0];let o=i.slice(1).join("-");if(a&&o==="h")return r.flipX=!0,r;if(a&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(a){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},t)};var zd={mixout(){return{parse:{transform:e=>os(e)}}},hooks(){return{parseNodeAttributes(e,t){const r=t.getAttribute("data-fa-transform");return r&&(e.transform=os(r)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:r,transform:n,containerWidth:i,iconWidth:a}=t;const o={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(s," ").concat(u," ").concat(c)},d={transform:"translate(".concat(a/2*-1," -256)")},f={outer:o,inner:l,path:d};return{tag:"g",attributes:L({},f.outer),children:[{tag:"g",attributes:L({},f.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),f.path)}]}]}}}};const hi={x:0,y:0,width:"100%",height:"100%"};function ss(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Qd(e){return e.tag==="g"?e.children:[e]}var Wd={hooks(){return{parseNodeAttributes(e,t){const r=t.getAttribute("data-fa-mask"),n=r?Yr(r.split(" ").map(i=>i.trim())):jo();return n.prefix||(n.prefix=rt()),e.mask=n,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:r,attributes:n,main:i,mask:a,maskId:o,transform:s}=t;const{width:u,icon:c}=i,{width:l,icon:d}=a,f=Bf({transform:s,containerWidth:l,iconWidth:u}),p={tag:"rect",attributes:L(L({},hi),{},{fill:"white"})},y=c.children?{children:c.children.map(ss)}:{},S={tag:"g",attributes:L({},f.inner),children:[ss(L({tag:c.tag,attributes:L(L({},c.attributes),f.path)},y))]},h={tag:"g",attributes:L({},f.outer),children:[S]},g="mask-".concat(o||pr()),_="clip-".concat(o||pr()),I={tag:"mask",attributes:L(L({},hi),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,h]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:Qd(d)},I]};return r.push(k,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(g,")")},hi)}),{children:r,attributes:n}}}},Yd={provides(e){let t=!1;et.matchMedia&&(t=et.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const a=L(L({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:L(L({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:L(L({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:L(L({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:L(L({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||r.push({tag:"path",attributes:L(L({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Hd={hooks(){return{parseNodeAttributes(e,t){const r=t.getAttribute("data-fa-symbol"),n=r===null?!1:r===""?!0:r;return e.symbol=n,e}}}},Jd=[zf,$d,Pd,Nd,Rd,Vd,Gd,zd,Wd,Yd,Hd];cd(Jd,{mixoutsTo:Pe}),Pe.noAuto,Pe.config,Pe.library,Pe.dom;const mi=Pe.parse;Pe.findIconDefinition,Pe.toHtml;const Kd=Pe.icon;Pe.layer,Pe.text,Pe.counter;function Zr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gi={exports:{}},yi,us;function Xd(){if(us)return yi;us=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return yi=e,yi}var vi,cs;function Zd(){if(cs)return vi;cs=1;var e=Xd();function t(){}function r(){}return r.resetWarningCache=t,vi=function(){function n(o,s,u,c,l,d){if(d!==e){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}n.isRequired=n;function i(){return n}var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:i,element:n,elementType:n,instanceOf:i,node:n,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:t};return a.PropTypes=a,a},vi}var ls;function ep(){return ls||(ls=1,gi.exports=Zd()()),gi.exports}var tp=ep();const Z=Zr(tp);var bi={exports:{}},ne={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Si,fs;function rp(){if(fs)return Si;fs=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function n(a){if(a==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}function i(){try{if(!Object.assign)return!1;var a=new String("abc");if(a[5]="de",Object.getOwnPropertyNames(a)[0]==="5")return!1;for(var o={},s=0;s<10;s++)o["_"+String.fromCharCode(s)]=s;var u=Object.getOwnPropertyNames(o).map(function(l){return o[l]});if(u.join("")!=="0123456789")return!1;var c={};return"abcdefghijklmnopqrst".split("").forEach(function(l){c[l]=l}),Object.keys(Object.assign({},c)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Si=i()?Object.assign:function(a,o){for(var s,u=n(a),c,l=1;l<arguments.length;l++){s=Object(arguments[l]);for(var d in s)t.call(s,d)&&(u[d]=s[d]);if(e){c=e(s);for(var f=0;f<c.length;f++)r.call(s,c[f])&&(u[c[f]]=s[c[f]])}}return u},Si}/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ds;function np(){if(ds)return ne;ds=1;var e=rp(),t=60103,r=60106;ne.Fragment=60107,ne.StrictMode=60108,ne.Profiler=60114;var n=60109,i=60110,a=60112;ne.Suspense=60113;var o=60115,s=60116;if(typeof Symbol=="function"&&Symbol.for){var u=Symbol.for;t=u("react.element"),r=u("react.portal"),ne.Fragment=u("react.fragment"),ne.StrictMode=u("react.strict_mode"),ne.Profiler=u("react.profiler"),n=u("react.provider"),i=u("react.context"),a=u("react.forward_ref"),ne.Suspense=u("react.suspense"),o=u("react.memo"),s=u("react.lazy")}var c=typeof Symbol=="function"&&Symbol.iterator;function l(O){return O===null||typeof O!="object"?null:(O=c&&O[c]||O["@@iterator"],typeof O=="function"?O:null)}function d(O){for(var N="https://reactjs.org/docs/error-decoder.html?invariant="+O,M=1;M<arguments.length;M++)N+="&args[]="+encodeURIComponent(arguments[M]);return"Minified React error #"+O+"; visit "+N+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p={};function y(O,N,M){this.props=O,this.context=N,this.refs=p,this.updater=M||f}y.prototype.isReactComponent={},y.prototype.setState=function(O,N){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error(d(85));this.updater.enqueueSetState(this,O,N,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=y.prototype;function h(O,N,M){this.props=O,this.context=N,this.refs=p,this.updater=M||f}var g=h.prototype=new S;g.constructor=h,e(g,y.prototype),g.isPureReactComponent=!0;var _={current:null},I=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function $(O,N,M){var W,Y={},ee=null,ie=null;if(N!=null)for(W in N.ref!==void 0&&(ie=N.ref),N.key!==void 0&&(ee=""+N.key),N)I.call(N,W)&&!k.hasOwnProperty(W)&&(Y[W]=N[W]);var se=arguments.length-2;if(se===1)Y.children=M;else if(1<se){for(var ae=Array(se),oe=0;oe<se;oe++)ae[oe]=arguments[oe+2];Y.children=ae}if(O&&O.defaultProps)for(W in se=O.defaultProps,se)Y[W]===void 0&&(Y[W]=se[W]);return{$$typeof:t,type:O,key:ee,ref:ie,props:Y,_owner:_.current}}function E(O,N){return{$$typeof:t,type:O.type,key:N,ref:O.ref,props:O.props,_owner:O._owner}}function x(O){return typeof O=="object"&&O!==null&&O.$$typeof===t}function v(O){var N={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(M){return N[M]})}var D=/\/+/g;function b(O,N){return typeof O=="object"&&O!==null&&O.key!=null?v(""+O.key):N.toString(36)}function A(O,N,M,W,Y){var ee=typeof O;(ee==="undefined"||ee==="boolean")&&(O=null);var ie=!1;if(O===null)ie=!0;else switch(ee){case"string":case"number":ie=!0;break;case"object":switch(O.$$typeof){case t:case r:ie=!0}}if(ie)return ie=O,Y=Y(ie),O=W===""?"."+b(ie,0):W,Array.isArray(Y)?(M="",O!=null&&(M=O.replace(D,"$&/")+"/"),A(Y,N,M,"",function(oe){return oe})):Y!=null&&(x(Y)&&(Y=E(Y,M+(!Y.key||ie&&ie.key===Y.key?"":(""+Y.key).replace(D,"$&/")+"/")+O)),N.push(Y)),1;if(ie=0,W=W===""?".":W+":",Array.isArray(O))for(var se=0;se<O.length;se++){ee=O[se];var ae=W+b(ee,se);ie+=A(ee,N,M,ae,Y)}else if(ae=l(O),typeof ae=="function")for(O=ae.call(O),se=0;!(ee=O.next()).done;)ee=ee.value,ae=W+b(ee,se++),ie+=A(ee,N,M,ae,Y);else if(ee==="object")throw N=""+O,Error(d(31,N==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":N));return ie}function P(O,N,M){if(O==null)return O;var W=[],Y=0;return A(O,W,"","",function(ee){return N.call(M,ee,Y++)}),W}function Q(O){if(O._status===-1){var N=O._result;N=N(),O._status=0,O._result=N,N.then(function(M){O._status===0&&(M=M.default,O._status=1,O._result=M)},function(M){O._status===0&&(O._status=2,O._result=M)})}if(O._status===1)return O._result;throw O._result}var J={current:null};function j(){var O=J.current;if(O===null)throw Error(d(321));return O}var q={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:e};return ne.Children={map:P,forEach:function(O,N,M){P(O,function(){N.apply(this,arguments)},M)},count:function(O){var N=0;return P(O,function(){N++}),N},toArray:function(O){return P(O,function(N){return N})||[]},only:function(O){if(!x(O))throw Error(d(143));return O}},ne.Component=y,ne.PureComponent=h,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,ne.cloneElement=function(O,N,M){if(O==null)throw Error(d(267,O));var W=e({},O.props),Y=O.key,ee=O.ref,ie=O._owner;if(N!=null){if(N.ref!==void 0&&(ee=N.ref,ie=_.current),N.key!==void 0&&(Y=""+N.key),O.type&&O.type.defaultProps)var se=O.type.defaultProps;for(ae in N)I.call(N,ae)&&!k.hasOwnProperty(ae)&&(W[ae]=N[ae]===void 0&&se!==void 0?se[ae]:N[ae])}var ae=arguments.length-2;if(ae===1)W.children=M;else if(1<ae){se=Array(ae);for(var oe=0;oe<ae;oe++)se[oe]=arguments[oe+2];W.children=se}return{$$typeof:t,type:O.type,key:Y,ref:ee,props:W,_owner:ie}},ne.createContext=function(O,N){return N===void 0&&(N=null),O={$$typeof:i,_calculateChangedBits:N,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider={$$typeof:n,_context:O},O.Consumer=O},ne.createElement=$,ne.createFactory=function(O){var N=$.bind(null,O);return N.type=O,N},ne.createRef=function(){return{current:null}},ne.forwardRef=function(O){return{$$typeof:a,render:O}},ne.isValidElement=x,ne.lazy=function(O){return{$$typeof:s,_payload:{_status:-1,_result:O},_init:Q}},ne.memo=function(O,N){return{$$typeof:o,type:O,compare:N===void 0?null:N}},ne.useCallback=function(O,N){return j().useCallback(O,N)},ne.useContext=function(O,N){return j().useContext(O,N)},ne.useDebugValue=function(){},ne.useEffect=function(O,N){return j().useEffect(O,N)},ne.useImperativeHandle=function(O,N,M){return j().useImperativeHandle(O,N,M)},ne.useLayoutEffect=function(O,N){return j().useLayoutEffect(O,N)},ne.useMemo=function(O,N){return j().useMemo(O,N)},ne.useReducer=function(O,N,M){return j().useReducer(O,N,M)},ne.useRef=function(O){return j().useRef(O)},ne.useState=function(O){return j().useState(O)},ne.version="17.0.2",ne}var ps;function _i(){return ps||(ps=1,bi.exports=np()),bi.exports}var ip=_i();const wi=Zr(ip);function Ei(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function ap(e){if(Array.isArray(e))return e}function op(e){if(Array.isArray(e))return Ei(e)}function it(e,t,r){return(t=hp(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function sp(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function up(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,a,o,s=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(u=(n=a.call(r)).done)&&(s.push(n.value),s.length!==t);u=!0);}catch(l){c=!0,i=l}finally{try{if(!u&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw i}}return s}}function cp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hs(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Ge(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?hs(Object(r),!0).forEach(function(n){it(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):hs(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function fp(e,t){if(e==null)return{};var r,n,i=dp(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function dp(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function ms(e,t){return ap(e)||up(e,t)||gs(e,t)||cp()}function Di(e){return op(e)||sp(e)||gs(e)||lp()}function pp(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function hp(e){var t=pp(e,"string");return typeof t=="symbol"?t:t+""}function en(e){"@babel/helpers - typeof";return en=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},en(e)}function gs(e,t){if(e){if(typeof e=="string")return Ei(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ei(e,t):void 0}}var mp="7.0.0-alpha1",Ii;try{var gp=require("@fortawesome/fontawesome-svg-core/package.json");Ii=gp.version}catch{Ii="sss"}function yp(e){var t=e.beat,r=e.fade,n=e.beatFade,i=e.bounce,a=e.shake,o=e.flash,s=e.spin,u=e.spinPulse,c=e.spinReverse,l=e.pulse,d=e.fixedWidth,f=e.inverse,p=e.border,y=e.listItem,S=e.flip,h=e.size,g=e.rotation,_=e.pull,I=e.swapOpacity,k=e.rotateBy,$=e.widthAuto,E=vp(Ii,mp),x=it(it(it(it(it(it({"fa-beat":t,"fa-fade":r,"fa-beat-fade":n,"fa-bounce":i,"fa-shake":a,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":l,"fa-fw":d,"fa-inverse":f,"fa-border":p,"fa-li":y,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},"fa-".concat(h),typeof h<"u"&&h!==null),"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),"fa-pull-".concat(_),typeof _<"u"&&_!==null),"fa-swap-opacity",I),"fa-rotate-by",E&&k),"fa-width-auto",E&&$);return Object.keys(x).map(function(v){return x[v]?v:null}).filter(function(v){return v})}function vp(e,t){for(var r=e.split("-"),n=ms(r,2),i=n[0],a=n[1],o=t.split("-"),s=ms(o,2),u=s[0],c=s[1],l=i.split("."),d=u.split("."),f=0;f<Math.max(l.length,d.length);f++){var p=l[f]||"0",y=d[f]||"0",S=parseInt(p,10),h=parseInt(y,10);if(S!==h)return S>h}for(var g=0;g<Math.max(l.length,d.length);g++){var _=l[g]||"0",I=d[g]||"0";if(_!==I&&_.length!==I.length)return _.length<I.length}return!(a&&!c)}function bp(e){return e=e-0,e===e}function ys(e){return bp(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,r){return r?r.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Sp=["style"];function _p(e){return e.charAt(0).toUpperCase()+e.slice(1)}function wp(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,r){var n=r.indexOf(":"),i=ys(r.slice(0,n)),a=r.slice(n+1).trim();return i.startsWith("webkit")?t[_p(i)]=a:t[i]=a,t},{})}function vs(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var n=(t.children||[]).map(function(u){return vs(e,u)}),i=Object.keys(t.attributes||{}).reduce(function(u,c){var l=t.attributes[c];switch(c){case"class":u.attrs.className=l,delete t.attributes.class;break;case"style":u.attrs.style=wp(l);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=l:u.attrs[ys(c)]=l}return u},{attrs:{}}),a=r.style,o=a===void 0?{}:a,s=fp(r,Sp);return i.attrs.style=Ge(Ge({},i.attrs.style),o),e.apply(void 0,[t.tag,Ge(Ge({},i.attrs),s)].concat(Di(n)))}var bs=!1;try{bs=!0}catch{}function Ep(){if(!bs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ss(e){if(e&&en(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(mi.icon)return mi.icon(e);if(e===null)return null;if(e&&en(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ti(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?it({},e,t):{}}var _s={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},tn=wi.forwardRef(function(e,t){var r=Ge(Ge({},_s),e),n=r.icon,i=r.mask,a=r.symbol,o=r.className,s=r.title,u=r.titleId,c=r.maskId,l=Ss(n),d=Ti("classes",[].concat(Di(yp(r)),Di((o||"").split(" ")))),f=Ti("transform",typeof r.transform=="string"?mi.transform(r.transform):r.transform),p=Ti("mask",Ss(i)),y=Kd(l,Ge(Ge(Ge(Ge({},d),f),p),{},{symbol:a,title:s,titleId:u,maskId:c}));if(!y)return Ep("Could not find icon",l),null;var S=y.abstract,h={ref:t};return Object.keys(r).forEach(function(g){_s.hasOwnProperty(g)||(h[g]=r[g])}),Dp(S[0],h)});tn.displayName="FontAwesomeIcon",tn.propTypes={beat:Z.bool,border:Z.bool,beatFade:Z.bool,bounce:Z.bool,className:Z.string,fade:Z.bool,flash:Z.bool,mask:Z.oneOfType([Z.object,Z.array,Z.string]),maskId:Z.string,fixedWidth:Z.bool,inverse:Z.bool,flip:Z.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Z.oneOfType([Z.object,Z.array,Z.string]),listItem:Z.bool,pull:Z.oneOf(["right","left"]),pulse:Z.bool,rotation:Z.oneOf([0,90,180,270]),rotateBy:Z.bool,shake:Z.bool,size:Z.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Z.bool,spinPulse:Z.bool,spinReverse:Z.bool,symbol:Z.oneOfType([Z.bool,Z.string]),title:Z.string,titleId:Z.string,transform:Z.oneOfType([Z.string,Z.object]),swapOpacity:Z.bool,widthAuto:Z.bool};var Dp=vs.bind(null,wi.createElement);const at="stash-tv",Ip={},ws=e=>{let t;const r=new Set,n=(l,d)=>{const f=typeof l=="function"?l(t):l;if(!Object.is(f,t)){const p=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),r.forEach(y=>y(t,p))}},i=()=>t,u={setState:n,getState:i,getInitialState:()=>c,subscribe:l=>(r.add(l),()=>r.delete(l)),destroy:()=>{(Ip?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},c=t=e(n,i,u);return u},Tp=e=>e?ws(e):ws;var ki={exports:{}},Oi={},xi={exports:{}},Ai={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Es;function kp(){if(Es)return Ai;Es=1;var e=_i();function t(d,f){return d===f&&(d!==0||1/d===1/f)||d!==d&&f!==f}var r=typeof Object.is=="function"?Object.is:t,n=e.useState,i=e.useEffect,a=e.useLayoutEffect,o=e.useDebugValue;function s(d,f){var p=f(),y=n({inst:{value:p,getSnapshot:f}}),S=y[0].inst,h=y[1];return a(function(){S.value=p,S.getSnapshot=f,u(S)&&h({inst:S})},[d,p,f]),i(function(){return u(S)&&h({inst:S}),d(function(){u(S)&&h({inst:S})})},[d]),o(p),p}function u(d){var f=d.getSnapshot;d=d.value;try{var p=f();return!r(d,p)}catch{return!0}}function c(d,f){return f()}var l=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?c:s;return Ai.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:l,Ai}var Ds;function Op(){return Ds||(Ds=1,xi.exports=kp()),xi.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Is;function xp(){if(Is)return Oi;Is=1;var e=_i(),t=Op();function r(c,l){return c===l&&(c!==0||1/c===1/l)||c!==c&&l!==l}var n=typeof Object.is=="function"?Object.is:r,i=t.useSyncExternalStore,a=e.useRef,o=e.useEffect,s=e.useMemo,u=e.useDebugValue;return Oi.useSyncExternalStoreWithSelector=function(c,l,d,f,p){var y=a(null);if(y.current===null){var S={hasValue:!1,value:null};y.current=S}else S=y.current;y=s(function(){function g(E){if(!_){if(_=!0,I=E,E=f(E),p!==void 0&&S.hasValue){var x=S.value;if(p(x,E))return k=x}return k=E}if(x=k,n(I,E))return x;var v=f(E);return p!==void 0&&p(x,v)?(I=E,x):(I=E,k=v)}var _=!1,I,k,$=d===void 0?null:d;return[function(){return g(l())},$===null?void 0:function(){return g($())}]},[l,d,f,p]);var h=i(c,y[0],y[1]);return o(function(){S.hasValue=!0,S.value=h},[h]),u(h),h},Oi}var Ts;function Ap(){return Ts||(Ts=1,ki.exports=xp()),ki.exports}var Cp=Ap();const Fp=Zr(Cp),ks={},{useDebugValue:$p}=wi,{useSyncExternalStoreWithSelector:Pp}=Fp;let Os=!1;const Np=e=>e;function Rp(e,t=Np,r){(ks?"production":void 0)!=="production"&&r&&!Os&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Os=!0);const n=Pp(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return $p(n),n}const Mp=e=>{(ks?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?Tp(e):e,r=(n,i)=>Rp(t,n,i);return Object.assign(r,t),r},xs=e=>Mp,Lp={};function As(e,t){let r;try{r=e()}catch{return}return{getItem:i=>{var a;const o=u=>u===null?null:JSON.parse(u,void 0),s=(a=r.getItem(i))!=null?a:null;return s instanceof Promise?s.then(o):o(s)},setItem:(i,a)=>r.setItem(i,JSON.stringify(a,void 0)),removeItem:i=>r.removeItem(i)}}const yr=e=>t=>{try{const r=e(t);return r instanceof Promise?r:{then(n){return yr(n)(r)},catch(n){return this}}}catch(r){return{then(n){return this},catch(n){return yr(n)(r)}}}},jp=(e,t)=>(r,n,i)=>{let a={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:h=>h,version:0,merge:(h,g)=>({...g,...h}),...t},o=!1;const s=new Set,u=new Set;let c;try{c=a.getStorage()}catch{}if(!c)return e((...h)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),r(...h)},n,i);const l=yr(a.serialize),d=()=>{const h=a.partialize({...n()});let g;const _=l({state:h,version:a.version}).then(I=>c.setItem(a.name,I)).catch(I=>{g=I});if(g)throw g;return _},f=i.setState;i.setState=(h,g)=>{f(h,g),d()};const p=e((...h)=>{r(...h),d()},n,i);let y;const S=()=>{var h;if(!c)return;o=!1,s.forEach(_=>_(n()));const g=((h=a.onRehydrateStorage)==null?void 0:h.call(a,n()))||void 0;return yr(c.getItem.bind(c))(a.name).then(_=>{if(_)return a.deserialize(_)}).then(_=>{if(_)if(typeof _.version=="number"&&_.version!==a.version){if(a.migrate)return a.migrate(_.state,_.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return _.state}).then(_=>{var I;return y=a.merge(_,(I=n())!=null?I:p),r(y,!0),d()}).then(()=>{g?.(y,void 0),o=!0,u.forEach(_=>_(y))}).catch(_=>{g?.(void 0,_)})};return i.persist={setOptions:h=>{a={...a,...h},h.getStorage&&(c=h.getStorage())},clearStorage:()=>{c?.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>S(),hasHydrated:()=>o,onHydrate:h=>(s.add(h),()=>{s.delete(h)}),onFinishHydration:h=>(u.add(h),()=>{u.delete(h)})},S(),y||p},Up=(e,t)=>(r,n,i)=>{let a={storage:As(()=>localStorage),partialize:S=>S,version:0,merge:(S,h)=>({...h,...S}),...t},o=!1;const s=new Set,u=new Set;let c=a.storage;if(!c)return e((...S)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),r(...S)},n,i);const l=()=>{const S=a.partialize({...n()});return c.setItem(a.name,{state:S,version:a.version})},d=i.setState;i.setState=(S,h)=>{d(S,h),l()};const f=e((...S)=>{r(...S),l()},n,i);i.getInitialState=()=>f;let p;const y=()=>{var S,h;if(!c)return;o=!1,s.forEach(_=>{var I;return _((I=n())!=null?I:f)});const g=((h=a.onRehydrateStorage)==null?void 0:h.call(a,(S=n())!=null?S:f))||void 0;return yr(c.getItem.bind(c))(a.name).then(_=>{if(_)if(typeof _.version=="number"&&_.version!==a.version){if(a.migrate)return[!0,a.migrate(_.state,_.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,_.state];return[!1,void 0]}).then(_=>{var I;const[k,$]=_;if(p=a.merge($,(I=n())!=null?I:f),r(p,!0),k)return l()}).then(()=>{g?.(p,void 0),p=n(),o=!0,u.forEach(_=>_(p))}).catch(_=>{g?.(void 0,_)})};return i.persist={setOptions:S=>{a={...a,...S},S.storage&&(c=S.storage)},clearStorage:()=>{c?.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>y(),hasHydrated:()=>o,onHydrate:S=>(s.add(S),()=>{s.delete(S)}),onFinishHydration:S=>(u.add(S),()=>{u.delete(S)})},a.skipHydration||y(),p||f},qp=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((Lp?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),jp(e,t)):Up(e,t);function Ci(e,t){const r=t?.compact===!0?void 0:2;return JSON.stringify(e,null,r)}const Bp=Object.freeze(Object.defineProperty({__proto__:null,inspect:Ci},Symbol.toStringTag,{value:"Module"})),Cs={trace:"TRC",debug:"DBG",info:"INF",warning:"WRN",error:"ERR",fatal:"FTL"},Fs=typeof document<"u"||typeof navigator<"u"&&navigator.product==="ReactNative"?e=>JSON.stringify(e):"Deno"in globalThis&&"inspect"in globalThis.Deno&&typeof globalThis.Deno.inspect=="function"?(e,t)=>globalThis.Deno.inspect(e,{strAbbreviateSize:1/0,iterableLimit:1/0,...t}):Bp!=null&&typeof Ci=="function"?(e,t)=>Ci(e,{...t}):e=>JSON.stringify(e);function de(e){return e<10?`0${e}`:`${e}`}function Rt(e){return e<10?`00${e}`:e<100?`0${e}`:`${e}`}const rn={"date-time-timezone":e=>{const t=new Date(e),r=t.getUTCFullYear(),n=de(t.getUTCMonth()+1),i=de(t.getUTCDate()),a=de(t.getUTCHours()),o=de(t.getUTCMinutes()),s=de(t.getUTCSeconds()),u=Rt(t.getUTCMilliseconds());return`${r}-${n}-${i} ${a}:${o}:${s}.${u} +00:00`},"date-time-tz":e=>{const t=new Date(e),r=t.getUTCFullYear(),n=de(t.getUTCMonth()+1),i=de(t.getUTCDate()),a=de(t.getUTCHours()),o=de(t.getUTCMinutes()),s=de(t.getUTCSeconds()),u=Rt(t.getUTCMilliseconds());return`${r}-${n}-${i} ${a}:${o}:${s}.${u} +00`},"date-time":e=>{const t=new Date(e),r=t.getUTCFullYear(),n=de(t.getUTCMonth()+1),i=de(t.getUTCDate()),a=de(t.getUTCHours()),o=de(t.getUTCMinutes()),s=de(t.getUTCSeconds()),u=Rt(t.getUTCMilliseconds());return`${r}-${n}-${i} ${a}:${o}:${s}.${u}`},"time-timezone":e=>{const t=new Date(e),r=de(t.getUTCHours()),n=de(t.getUTCMinutes()),i=de(t.getUTCSeconds()),a=Rt(t.getUTCMilliseconds());return`${r}:${n}:${i}.${a} +00:00`},"time-tz":e=>{const t=new Date(e),r=de(t.getUTCHours()),n=de(t.getUTCMinutes()),i=de(t.getUTCSeconds()),a=Rt(t.getUTCMilliseconds());return`${r}:${n}:${i}.${a} +00`},time:e=>{const t=new Date(e),r=de(t.getUTCHours()),n=de(t.getUTCMinutes()),i=de(t.getUTCSeconds()),a=Rt(t.getUTCMilliseconds());return`${r}:${n}:${i}.${a}`},date:e=>{const t=new Date(e),r=t.getUTCFullYear(),n=de(t.getUTCMonth()+1),i=de(t.getUTCDate());return`${r}-${n}-${i}`},rfc3339:e=>new Date(e).toISOString(),none:()=>null},Mt={ABBR:Cs,abbr:{trace:"trc",debug:"dbg",info:"inf",warning:"wrn",error:"err",fatal:"ftl"},FULL:{trace:"TRACE",debug:"DEBUG",info:"INFO",warning:"WARNING",error:"ERROR",fatal:"FATAL"},full:{trace:"trace",debug:"debug",info:"info",warning:"warning",error:"error",fatal:"fatal"},L:{trace:"T",debug:"D",info:"I",warning:"W",error:"E",fatal:"F"},l:{trace:"t",debug:"d",info:"i",warning:"w",error:"e",fatal:"f"}};function $s(e){return e==="crlf"?`\r
`:`
`}function nn(e,t){if(!(t instanceof Error))return t;const r={name:t.name,message:t.message};typeof t.stack=="string"&&(r.stack=t.stack);const n=t.cause;n!==void 0&&(r.cause=n),typeof AggregateError<"u"&&t instanceof AggregateError&&(r.errors=t.errors);for(const i of Object.keys(t))i in r||(r[i]=t[i]);return r}function Ps(e={}){const t=(()=>{const s=e.timestamp;return s==null?rn["date-time-timezone"]:s==="disabled"?rn.none:typeof s=="string"&&s in rn?rn[s]:s})(),r=e.category??"·",n=e.value?s=>e.value(s,Fs):Fs,i=(()=>{const s=e.level;return s==null||s==="ABBR"?u=>Mt.ABBR[u]:s==="abbr"?u=>Mt.abbr[u]:s==="FULL"?u=>Mt.FULL[u]:s==="full"?u=>Mt.full[u]:s==="L"?u=>Mt.L[u]:s==="l"?u=>Mt.l[u]:s})(),a=$s(e.lineEnding),o=e.format??(({timestamp:s,level:u,category:c,message:l})=>`${s?`${s} `:""}[${u}] ${c}: ${l}`);return s=>{const u=s.message,c=u.length;let l;if(c===1)l=u[0];else if(c<=6){l="";for(let S=0;S<c;S++)l+=S%2===0?u[S]:n(u[S])}else{const S=new Array(c);for(let h=0;h<c;h++)S[h]=h%2===0?u[h]:n(u[h]);l=S.join("")}const d=t(s.timestamp),f=i(s.level),p=typeof r=="function"?r(s.category):s.category.join(r);return`${o({timestamp:d,level:f,category:p,message:l,record:s})}${a}`}}Ps();const Fi="\x1B[0m",$i={black:"\x1B[30m",red:"\x1B[31m",green:"\x1B[32m",yellow:"\x1B[33m",blue:"\x1B[34m",magenta:"\x1B[35m",cyan:"\x1B[36m",white:"\x1B[37m"},Pi={bold:"\x1B[1m",dim:"\x1B[2m",italic:"\x1B[3m",underline:"\x1B[4m",strikethrough:"\x1B[9m"},Vp={trace:null,debug:"blue",info:"green",warning:"yellow",error:"red",fatal:"magenta"};function Gp(e={}){const t=e.format,r=typeof e.timestampStyle>"u"?"dim":e.timestampStyle,n=e.timestampColor??null,i=`${r==null?"":Pi[r]}${n==null?"":$i[n]}`,a=r==null&&n==null?"":Fi,o=typeof e.levelStyle>"u"?"bold":e.levelStyle,s=e.levelColors??Vp,u=typeof e.categoryStyle>"u"?"dim":e.categoryStyle,c=e.categoryColor??null,l=`${u==null?"":Pi[u]}${c==null?"":$i[c]}`,d=u==null&&c==null?"":Fi;return Ps({timestamp:"date-time-tz",value(f,p){return p(f,{colors:!0})},...e,format({timestamp:f,level:p,category:y,message:S,record:h}){const g=s[h.level];return f=f==null?null:`${i}${f}${a}`,p=`${o==null?"":Pi[o]}${g==null?"":$i[g]}${p}${o==null&&g==null?"":Fi}`,t==null?`${f==null?"":`${f} `}${p} ${l}${y}:${d} ${S}`:t({timestamp:f,level:p,category:`${l}${y}${d}`,message:S,record:h})}})}Gp();function zp(e={}){const t=$s(e.lineEnding);if(!e.categorySeparator&&!e.message&&!e.properties)return s=>{if(s.message.length===3)return JSON.stringify({"@timestamp":new Date(s.timestamp).toISOString(),level:s.level==="warning"?"WARN":s.level.toUpperCase(),message:s.message[0]+JSON.stringify(s.message[1])+s.message[2],logger:s.category.join("."),properties:s.properties},nn)+t;if(s.message.length===1)return JSON.stringify({"@timestamp":new Date(s.timestamp).toISOString(),level:s.level==="warning"?"WARN":s.level.toUpperCase(),message:s.message[0],logger:s.category.join("."),properties:s.properties},nn)+t;let u=s.message[0];for(let c=1;c<s.message.length;c++)u+=c&1?JSON.stringify(s.message[c]):s.message[c];return JSON.stringify({"@timestamp":new Date(s.timestamp).toISOString(),level:s.level==="warning"?"WARN":s.level.toUpperCase(),message:u,logger:s.category.join("."),properties:s.properties},nn)+t};const r=e.message==="template",n=e.properties??"nest:properties";let i;if(typeof e.categorySeparator=="function")i=e.categorySeparator;else{const s=e.categorySeparator??".";i=u=>u.join(s)}let a;if(n==="flatten")a=s=>s;else if(n.startsWith("prepend:")){const s=n.substring(8);if(s==="")throw new TypeError(`Invalid properties option: ${JSON.stringify(n)}. It must be of the form "prepend:<prefix>" where <prefix> is a non-empty string.`);a=u=>{const c={};for(const l in u)c[`${s}${l}`]=u[l];return c}}else if(n.startsWith("nest:")){const s=n.substring(5);a=u=>({[s]:u})}else throw new TypeError(`Invalid properties option: ${JSON.stringify(n)}. It must be "flatten", "prepend:<prefix>", or "nest:<key>".`);let o;return r?o=s=>{if(typeof s.rawMessage=="string")return s.rawMessage;let u="";for(let c=0;c<s.rawMessage.length;c++)u+=c%2<1?s.rawMessage[c]:"{}";return u}:o=s=>{const u=s.message.length;if(u===1)return s.message[0];let c="";for(let l=0;l<u;l++)c+=l%2<1?s.message[l]:JSON.stringify(s.message[l]);return c},s=>JSON.stringify({"@timestamp":new Date(s.timestamp).toISOString(),level:s.level==="warning"?"WARN":s.level.toUpperCase(),message:o(s),logger:i(s.category),...a(s.properties)},nn)+t}zp();const Qp={trace:"background-color: gray; color: white;",debug:"background-color: gray; color: white;",info:"background-color: white; color: black;",warning:"background-color: orange; color: black;",error:"background-color: red; color: white;",fatal:"background-color: maroon; color: white;"};function Wp(e){let t="";const r=[];for(let a=0;a<e.message.length;a++)a%2===0?t+=e.message[a]:(t+="%o",r.push(e.message[a]));const n=new Date(e.timestamp);return[`%c${`${n.getUTCHours().toString().padStart(2,"0")}:${n.getUTCMinutes().toString().padStart(2,"0")}:${n.getUTCSeconds().toString().padStart(2,"0")}.${n.getUTCMilliseconds().toString().padStart(3,"0")}`} %c${Cs[e.level]}%c %c${e.category.join("·")} %c${t}`,"color: gray;",Qp[e.level],"background-color: default;","color: gray;","color: default;",...r]}function Yp(e={}){const t=e.formatter??Wp,r={trace:"debug",debug:"debug",info:"info",warning:"warn",error:"error",fatal:"error",...e.levelMap??{}},n=e.console??globalThis.console,i=g=>{const _=t(g),I=r[g.level];if(I===void 0)throw new TypeError(`Invalid log level: ${g.level}.`);if(typeof _=="string"){const k=_.replace(/\r?\n$/,"");n[I](k)}else n[I](..._)};if(!e.nonBlocking)return i;const a=e.nonBlocking===!0?{}:e.nonBlocking,o=a.bufferSize??100,s=a.flushInterval??100,u=[];let c=null,l=!1,d=!1;const f=o*2;function p(){if(u.length===0)return;const g=u.splice(0);for(const _ of g)try{i(_)}catch{}}function y(){d||(d=!0,setTimeout(()=>{d=!1,p()},0))}function S(){c!==null||l||(c=setInterval(()=>{p()},s))}const h=g=>{l||(u.length>=f&&u.shift(),u.push(g),u.length>=o?y():c===null&&S())};return h[Symbol.dispose]=()=>{l=!0,c!==null&&(clearInterval(c),c=null),p()},h}Yp();const Hp="warning";var Ni=function(e,t){return Ni=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])},Ni(e,t)};function Re(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Ni(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var C=function(){return C=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},C.apply(this,arguments)};function Je(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function ot(e,t,r,n){function i(a){return a instanceof r?a:new r(function(o){o(a)})}return new(r||(r=Promise))(function(a,o){function s(l){try{c(n.next(l))}catch(d){o(d)}}function u(l){try{c(n.throw(l))}catch(d){o(d)}}function c(l){l.done?a(l.value):i(l.value).then(s,u)}c((n=n.apply(e,t||[])).next())})}function st(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(r=0)),r;)try{if(n=1,i&&(a=c[0]&2?i.return:c[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,c[1])).done)return a;switch(i=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,i=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){r.label=c[1];break}if(c[0]===6&&r.label<a[1]){r.label=a[1],a=c;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(c);break}a[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(l){c=[6,l],i=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Oe(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}typeof SuppressedError=="function"&&SuppressedError;var Ri="Invariant Violation",Ns=Object.setPrototypeOf,Jp=Ns===void 0?function(e,t){return e.__proto__=t,e}:Ns,Rs=(function(e){Re(t,e);function t(r){r===void 0&&(r=Ri);var n=e.call(this,typeof r=="number"?Ri+": "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this;return n.framesToPop=1,n.name=Ri,Jp(n,t.prototype),n}return t})(Error);function Dt(e,t){if(!e)throw new Rs(t)}var Ms=["debug","log","warn","error","silent"],Kp=Ms.indexOf("log");function an(e){return function(){if(Ms.indexOf(e)>=Kp){var t=console[e]||console.log;return t.apply(console,arguments)}}}(function(e){e.debug=an("debug"),e.log=an("log"),e.warn=an("warn"),e.error=an("error")})(Dt||(Dt={}));var Mi="3.13.9";function Me(e){try{return e()}catch{}}const Li=Me(function(){return globalThis})||Me(function(){return window})||Me(function(){return self})||Me(function(){return global})||Me(function(){return Me.constructor("return this")()});var Ls=new Map;function ji(e){var t=Ls.get(e)||1;return Ls.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function js(e,t){t===void 0&&(t=0);var r=ji("stringifyForDisplay");return JSON.stringify(e,function(n,i){return i===void 0?r:i},t).split(JSON.stringify(r)).join("<undefined>")}function on(e){return function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];if(typeof t=="number"){var i=t;t=Ui(i),t||(t=qi(i,r),r=[])}e.apply(void 0,[t].concat(r))}}var K=Object.assign(function(t,r){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];t||Dt(t,Ui(r,n)||qi(r,n))},{debug:on(Dt.debug),log:on(Dt.log),warn:on(Dt.warn),error:on(Dt.error)});function Ae(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Rs(Ui(e,t)||qi(e,t))}var Us=Symbol.for("ApolloErrorMessageHandler_"+Mi);function qs(e){if(typeof e=="string")return e;try{return js(e,2).slice(0,1e3)}catch{return"<non-serializable>"}}function Ui(e,t){if(t===void 0&&(t=[]),!!e)return Li[Us]&&Li[Us](e,t.map(qs))}function qi(e,t){if(t===void 0&&(t=[]),!!e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:Mi,message:e,args:t.map(qs)})))}function sn(e,t){if(!!!e)throw new Error(t)}function Xp(e){return typeof e=="object"&&e!==null}function Zp(e,t){if(!!!e)throw new Error("Unexpected invariant triggered.")}const eh=/\r\n|[\n\r]/g;function Bi(e,t){let r=0,n=1;for(const i of e.body.matchAll(eh)){if(typeof i.index=="number"||Zp(!1),i.index>=t)break;r=i.index+i[0].length,n+=1}return{line:n,column:t+1-r}}function th(e){return Bs(e.source,Bi(e.source,e.start))}function Bs(e,t){const r=e.locationOffset.column-1,n="".padStart(r)+e.body,i=t.line-1,a=e.locationOffset.line-1,o=t.line+a,s=t.line===1?r:0,u=t.column+s,c=`${e.name}:${o}:${u}
`,l=n.split(/\r\n|[\n\r]/g),d=l[i];if(d.length>120){const f=Math.floor(u/80),p=u%80,y=[];for(let S=0;S<d.length;S+=80)y.push(d.slice(S,S+80));return c+Vs([[`${o} |`,y[0]],...y.slice(1,f+1).map(S=>["|",S]),["|","^".padStart(p)],["|",y[f+1]]])}return c+Vs([[`${o-1} |`,l[i-1]],[`${o} |`,d],["|","^".padStart(u)],[`${o+1} |`,l[i+1]]])}function Vs(e){const t=e.filter(([n,i])=>i!==void 0),r=Math.max(...t.map(([n])=>n.length));return t.map(([n,i])=>n.padStart(r)+(i?" "+i:"")).join(`
`)}function rh(e){const t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}class Vi extends Error{constructor(t,...r){var n,i,a;const{nodes:o,source:s,positions:u,path:c,originalError:l,extensions:d}=rh(r);super(t),this.name="GraphQLError",this.path=c??void 0,this.originalError=l??void 0,this.nodes=Gs(Array.isArray(o)?o:o?[o]:void 0);const f=Gs((n=this.nodes)===null||n===void 0?void 0:n.map(y=>y.loc).filter(y=>y!=null));this.source=s??(f==null||(i=f[0])===null||i===void 0?void 0:i.source),this.positions=u??f?.map(y=>y.start),this.locations=u&&s?u.map(y=>Bi(s,y)):f?.map(y=>Bi(y.source,y.start));const p=Xp(l?.extensions)?l?.extensions:void 0;this.extensions=(a=d??p)!==null&&a!==void 0?a:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),l!=null&&l.stack?Object.defineProperty(this,"stack",{value:l.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,Vi):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const r of this.nodes)r.loc&&(t+=`

`+th(r.loc));else if(this.source&&this.locations)for(const r of this.locations)t+=`

`+Bs(this.source,r);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}}function Gs(e){return e===void 0||e.length===0?void 0:e}function we(e,t,r){return new Vi(`Syntax Error: ${r}`,{source:e,positions:[t]})}class nh{constructor(t,r,n){this.start=t.start,this.end=r.end,this.startToken=t,this.endToken=r,this.source=n}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class zs{constructor(t,r,n,i,a,o){this.kind=t,this.start=r,this.end=n,this.line=i,this.column=a,this.value=o,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Qs={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},ih=new Set(Object.keys(Qs));function Ws(e){const t=e?.kind;return typeof t=="string"&&ih.has(t)}var Lt;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(Lt||(Lt={}));var Gi;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(Gi||(Gi={}));var G;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(G||(G={}));function zi(e){return e===9||e===32}function vr(e){return e>=48&&e<=57}function Ys(e){return e>=97&&e<=122||e>=65&&e<=90}function Hs(e){return Ys(e)||e===95}function ah(e){return Ys(e)||vr(e)||e===95}function oh(e){var t;let r=Number.MAX_SAFE_INTEGER,n=null,i=-1;for(let o=0;o<e.length;++o){var a;const s=e[o],u=sh(s);u!==s.length&&(n=(a=n)!==null&&a!==void 0?a:o,i=o,o!==0&&u<r&&(r=u))}return e.map((o,s)=>s===0?o:o.slice(r)).slice((t=n)!==null&&t!==void 0?t:0,i+1)}function sh(e){let t=0;for(;t<e.length&&zi(e.charCodeAt(t));)++t;return t}function uh(e,t){const r=e.replace(/"""/g,'\\"""'),n=r.split(/\r\n|[\n\r]/g),i=n.length===1,a=n.length>1&&n.slice(1).every(p=>p.length===0||zi(p.charCodeAt(0))),o=r.endsWith('\\"""'),s=e.endsWith('"')&&!o,u=e.endsWith("\\"),c=s||u,l=!i||e.length>70||c||a||o;let d="";const f=i&&zi(e.charCodeAt(0));return(l&&!f||a)&&(d+=`
`),d+=r,(l||c)&&(d+=`
`),'"""'+d+'"""'}var R;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(R||(R={}));class ch{constructor(t){const r=new zs(R.SOF,0,0,0,0);this.source=t,this.lastToken=r,this.token=r,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==R.EOF)do if(t.next)t=t.next;else{const r=fh(this,t.end);t.next=r,r.prev=t,t=r}while(t.kind===R.COMMENT);return t}}function lh(e){return e===R.BANG||e===R.DOLLAR||e===R.AMP||e===R.PAREN_L||e===R.PAREN_R||e===R.SPREAD||e===R.COLON||e===R.EQUALS||e===R.AT||e===R.BRACKET_L||e===R.BRACKET_R||e===R.BRACE_L||e===R.PIPE||e===R.BRACE_R}function jt(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function un(e,t){return Js(e.charCodeAt(t))&&Ks(e.charCodeAt(t+1))}function Js(e){return e>=55296&&e<=56319}function Ks(e){return e>=56320&&e<=57343}function It(e,t){const r=e.source.body.codePointAt(t);if(r===void 0)return R.EOF;if(r>=32&&r<=126){const n=String.fromCodePoint(r);return n==='"'?`'"'`:`"${n}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function be(e,t,r,n,i){const a=e.line,o=1+r-e.lineStart;return new zs(t,r,n,a,o,i)}function fh(e,t){const r=e.source.body,n=r.length;let i=t;for(;i<n;){const a=r.charCodeAt(i);switch(a){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++e.line,e.lineStart=i;continue;case 13:r.charCodeAt(i+1)===10?i+=2:++i,++e.line,e.lineStart=i;continue;case 35:return dh(e,i);case 33:return be(e,R.BANG,i,i+1);case 36:return be(e,R.DOLLAR,i,i+1);case 38:return be(e,R.AMP,i,i+1);case 40:return be(e,R.PAREN_L,i,i+1);case 41:return be(e,R.PAREN_R,i,i+1);case 46:if(r.charCodeAt(i+1)===46&&r.charCodeAt(i+2)===46)return be(e,R.SPREAD,i,i+3);break;case 58:return be(e,R.COLON,i,i+1);case 61:return be(e,R.EQUALS,i,i+1);case 64:return be(e,R.AT,i,i+1);case 91:return be(e,R.BRACKET_L,i,i+1);case 93:return be(e,R.BRACKET_R,i,i+1);case 123:return be(e,R.BRACE_L,i,i+1);case 124:return be(e,R.PIPE,i,i+1);case 125:return be(e,R.BRACE_R,i,i+1);case 34:return r.charCodeAt(i+1)===34&&r.charCodeAt(i+2)===34?vh(e,i):hh(e,i)}if(vr(a)||a===45)return ph(e,i,a);if(Hs(a))return bh(e,i);throw we(e.source,i,a===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:jt(a)||un(r,i)?`Unexpected character: ${It(e,i)}.`:`Invalid character: ${It(e,i)}.`)}return be(e,R.EOF,n,n)}function dh(e,t){const r=e.source.body,n=r.length;let i=t+1;for(;i<n;){const a=r.charCodeAt(i);if(a===10||a===13)break;if(jt(a))++i;else if(un(r,i))i+=2;else break}return be(e,R.COMMENT,t,i,r.slice(t+1,i))}function ph(e,t,r){const n=e.source.body;let i=t,a=r,o=!1;if(a===45&&(a=n.charCodeAt(++i)),a===48){if(a=n.charCodeAt(++i),vr(a))throw we(e.source,i,`Invalid number, unexpected digit after 0: ${It(e,i)}.`)}else i=Qi(e,i,a),a=n.charCodeAt(i);if(a===46&&(o=!0,a=n.charCodeAt(++i),i=Qi(e,i,a),a=n.charCodeAt(i)),(a===69||a===101)&&(o=!0,a=n.charCodeAt(++i),(a===43||a===45)&&(a=n.charCodeAt(++i)),i=Qi(e,i,a),a=n.charCodeAt(i)),a===46||Hs(a))throw we(e.source,i,`Invalid number, expected digit but got: ${It(e,i)}.`);return be(e,o?R.FLOAT:R.INT,t,i,n.slice(t,i))}function Qi(e,t,r){if(!vr(r))throw we(e.source,t,`Invalid number, expected digit but got: ${It(e,t)}.`);const n=e.source.body;let i=t+1;for(;vr(n.charCodeAt(i));)++i;return i}function hh(e,t){const r=e.source.body,n=r.length;let i=t+1,a=i,o="";for(;i<n;){const s=r.charCodeAt(i);if(s===34)return o+=r.slice(a,i),be(e,R.STRING,t,i+1,o);if(s===92){o+=r.slice(a,i);const u=r.charCodeAt(i+1)===117?r.charCodeAt(i+2)===123?mh(e,i):gh(e,i):yh(e,i);o+=u.value,i+=u.size,a=i;continue}if(s===10||s===13)break;if(jt(s))++i;else if(un(r,i))i+=2;else throw we(e.source,i,`Invalid character within String: ${It(e,i)}.`)}throw we(e.source,i,"Unterminated string.")}function mh(e,t){const r=e.source.body;let n=0,i=3;for(;i<12;){const a=r.charCodeAt(t+i++);if(a===125){if(i<5||!jt(n))break;return{value:String.fromCodePoint(n),size:i}}if(n=n<<4|br(a),n<0)break}throw we(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+i)}".`)}function gh(e,t){const r=e.source.body,n=Xs(r,t+2);if(jt(n))return{value:String.fromCodePoint(n),size:6};if(Js(n)&&r.charCodeAt(t+6)===92&&r.charCodeAt(t+7)===117){const i=Xs(r,t+8);if(Ks(i))return{value:String.fromCodePoint(n,i),size:12}}throw we(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+6)}".`)}function Xs(e,t){return br(e.charCodeAt(t))<<12|br(e.charCodeAt(t+1))<<8|br(e.charCodeAt(t+2))<<4|br(e.charCodeAt(t+3))}function br(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function yh(e,t){const r=e.source.body;switch(r.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw we(e.source,t,`Invalid character escape sequence: "${r.slice(t,t+2)}".`)}function vh(e,t){const r=e.source.body,n=r.length;let i=e.lineStart,a=t+3,o=a,s="";const u=[];for(;a<n;){const c=r.charCodeAt(a);if(c===34&&r.charCodeAt(a+1)===34&&r.charCodeAt(a+2)===34){s+=r.slice(o,a),u.push(s);const l=be(e,R.BLOCK_STRING,t,a+3,oh(u).join(`
`));return e.line+=u.length-1,e.lineStart=i,l}if(c===92&&r.charCodeAt(a+1)===34&&r.charCodeAt(a+2)===34&&r.charCodeAt(a+3)===34){s+=r.slice(o,a),o=a+1,a+=4;continue}if(c===10||c===13){s+=r.slice(o,a),u.push(s),c===13&&r.charCodeAt(a+1)===10?a+=2:++a,s="",o=a,i=a;continue}if(jt(c))++a;else if(un(r,a))a+=2;else throw we(e.source,a,`Invalid character within String: ${It(e,a)}.`)}throw we(e.source,a,"Unterminated string.")}function bh(e,t){const r=e.source.body,n=r.length;let i=t+1;for(;i<n;){const a=r.charCodeAt(i);if(ah(a))++i;else break}return be(e,R.NAME,t,i,r.slice(t,i))}const Sh=10,Zs=2;function Wi(e){return cn(e,[])}function cn(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return _h(e,t);default:return String(e)}}function _h(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const r=[...t,e];if(wh(e)){const n=e.toJSON();if(n!==e)return typeof n=="string"?n:cn(n,r)}else if(Array.isArray(e))return Dh(e,r);return Eh(e,r)}function wh(e){return typeof e.toJSON=="function"}function Eh(e,t){const r=Object.entries(e);return r.length===0?"{}":t.length>Zs?"["+Ih(e)+"]":"{ "+r.map(([i,a])=>i+": "+cn(a,t)).join(", ")+" }"}function Dh(e,t){if(e.length===0)return"[]";if(t.length>Zs)return"[Array]";const r=Math.min(Sh,e.length),n=e.length-r,i=[];for(let a=0;a<r;++a)i.push(cn(e[a],t));return n===1?i.push("... 1 more item"):n>1&&i.push(`... ${n} more items`),"["+i.join(", ")+"]"}function Ih(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const r=e.constructor.name;if(typeof r=="string"&&r!=="")return r}return t}const Th=globalThis.process&&!0?function(t,r){return t instanceof r}:function(t,r){if(t instanceof r)return!0;if(typeof t=="object"&&t!==null){var n;const i=r.prototype[Symbol.toStringTag],a=Symbol.toStringTag in t?t[Symbol.toStringTag]:(n=t.constructor)===null||n===void 0?void 0:n.name;if(i===a){const o=Wi(t);throw new Error(`Cannot use ${i} "${o}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class eu{constructor(t,r="GraphQL request",n={line:1,column:1}){typeof t=="string"||sn(!1,`Body must be a string. Received: ${Wi(t)}.`),this.body=t,this.name=r,this.locationOffset=n,this.locationOffset.line>0||sn(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||sn(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function kh(e){return Th(e,eu)}function Oh(e,t){const r=new xh(e,t),n=r.parseDocument();return Object.defineProperty(n,"tokenCount",{enumerable:!1,value:r.tokenCount}),n}class xh{constructor(t,r={}){const n=kh(t)?t:new eu(t);this._lexer=new ch(n),this._options=r,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){const t=this.expectToken(R.NAME);return this.node(t,{kind:G.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:G.DOCUMENT,definitions:this.many(R.SOF,this.parseDefinition,R.EOF)})}parseDefinition(){if(this.peek(R.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),r=t?this._lexer.lookahead():this._lexer.token;if(r.kind===R.NAME){switch(r.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw we(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(r.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(r)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(R.BRACE_L))return this.node(t,{kind:G.OPERATION_DEFINITION,operation:Lt.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const r=this.parseOperationType();let n;return this.peek(R.NAME)&&(n=this.parseName()),this.node(t,{kind:G.OPERATION_DEFINITION,operation:r,name:n,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(R.NAME);switch(t.value){case"query":return Lt.QUERY;case"mutation":return Lt.MUTATION;case"subscription":return Lt.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(R.PAREN_L,this.parseVariableDefinition,R.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:G.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(R.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(R.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(R.DOLLAR),this.node(t,{kind:G.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:G.SELECTION_SET,selections:this.many(R.BRACE_L,this.parseSelection,R.BRACE_R)})}parseSelection(){return this.peek(R.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,r=this.parseName();let n,i;return this.expectOptionalToken(R.COLON)?(n=r,i=this.parseName()):i=r,this.node(t,{kind:G.FIELD,alias:n,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(R.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){const r=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(R.PAREN_L,r,R.PAREN_R)}parseArgument(t=!1){const r=this._lexer.token,n=this.parseName();return this.expectToken(R.COLON),this.node(r,{kind:G.ARGUMENT,name:n,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(R.SPREAD);const r=this.expectOptionalKeyword("on");return!r&&this.peek(R.NAME)?this.node(t,{kind:G.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:G.INLINE_FRAGMENT,typeCondition:r?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:G.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:G.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){const r=this._lexer.token;switch(r.kind){case R.BRACKET_L:return this.parseList(t);case R.BRACE_L:return this.parseObject(t);case R.INT:return this.advanceLexer(),this.node(r,{kind:G.INT,value:r.value});case R.FLOAT:return this.advanceLexer(),this.node(r,{kind:G.FLOAT,value:r.value});case R.STRING:case R.BLOCK_STRING:return this.parseStringLiteral();case R.NAME:switch(this.advanceLexer(),r.value){case"true":return this.node(r,{kind:G.BOOLEAN,value:!0});case"false":return this.node(r,{kind:G.BOOLEAN,value:!1});case"null":return this.node(r,{kind:G.NULL});default:return this.node(r,{kind:G.ENUM,value:r.value})}case R.DOLLAR:if(t)if(this.expectToken(R.DOLLAR),this._lexer.token.kind===R.NAME){const n=this._lexer.token.value;throw we(this._lexer.source,r.start,`Unexpected variable "$${n}" in constant value.`)}else throw this.unexpected(r);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:G.STRING,value:t.value,block:t.kind===R.BLOCK_STRING})}parseList(t){const r=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:G.LIST,values:this.any(R.BRACKET_L,r,R.BRACKET_R)})}parseObject(t){const r=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:G.OBJECT,fields:this.any(R.BRACE_L,r,R.BRACE_R)})}parseObjectField(t){const r=this._lexer.token,n=this.parseName();return this.expectToken(R.COLON),this.node(r,{kind:G.OBJECT_FIELD,name:n,value:this.parseValueLiteral(t)})}parseDirectives(t){const r=[];for(;this.peek(R.AT);)r.push(this.parseDirective(t));return r}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const r=this._lexer.token;return this.expectToken(R.AT),this.node(r,{kind:G.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let r;if(this.expectOptionalToken(R.BRACKET_L)){const n=this.parseTypeReference();this.expectToken(R.BRACKET_R),r=this.node(t,{kind:G.LIST_TYPE,type:n})}else r=this.parseNamedType();return this.expectOptionalToken(R.BANG)?this.node(t,{kind:G.NON_NULL_TYPE,type:r}):r}parseNamedType(){return this.node(this._lexer.token,{kind:G.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(R.STRING)||this.peek(R.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("schema");const n=this.parseConstDirectives(),i=this.many(R.BRACE_L,this.parseOperationTypeDefinition,R.BRACE_R);return this.node(t,{kind:G.SCHEMA_DEFINITION,description:r,directives:n,operationTypes:i})}parseOperationTypeDefinition(){const t=this._lexer.token,r=this.parseOperationType();this.expectToken(R.COLON);const n=this.parseNamedType();return this.node(t,{kind:G.OPERATION_TYPE_DEFINITION,operation:r,type:n})}parseScalarTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("scalar");const n=this.parseName(),i=this.parseConstDirectives();return this.node(t,{kind:G.SCALAR_TYPE_DEFINITION,description:r,name:n,directives:i})}parseObjectTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("type");const n=this.parseName(),i=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(t,{kind:G.OBJECT_TYPE_DEFINITION,description:r,name:n,interfaces:i,directives:a,fields:o})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(R.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(R.BRACE_L,this.parseFieldDefinition,R.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,r=this.parseDescription(),n=this.parseName(),i=this.parseArgumentDefs();this.expectToken(R.COLON);const a=this.parseTypeReference(),o=this.parseConstDirectives();return this.node(t,{kind:G.FIELD_DEFINITION,description:r,name:n,arguments:i,type:a,directives:o})}parseArgumentDefs(){return this.optionalMany(R.PAREN_L,this.parseInputValueDef,R.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,r=this.parseDescription(),n=this.parseName();this.expectToken(R.COLON);const i=this.parseTypeReference();let a;this.expectOptionalToken(R.EQUALS)&&(a=this.parseConstValueLiteral());const o=this.parseConstDirectives();return this.node(t,{kind:G.INPUT_VALUE_DEFINITION,description:r,name:n,type:i,defaultValue:a,directives:o})}parseInterfaceTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("interface");const n=this.parseName(),i=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(t,{kind:G.INTERFACE_TYPE_DEFINITION,description:r,name:n,interfaces:i,directives:a,fields:o})}parseUnionTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("union");const n=this.parseName(),i=this.parseConstDirectives(),a=this.parseUnionMemberTypes();return this.node(t,{kind:G.UNION_TYPE_DEFINITION,description:r,name:n,directives:i,types:a})}parseUnionMemberTypes(){return this.expectOptionalToken(R.EQUALS)?this.delimitedMany(R.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("enum");const n=this.parseName(),i=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();return this.node(t,{kind:G.ENUM_TYPE_DEFINITION,description:r,name:n,directives:i,values:a})}parseEnumValuesDefinition(){return this.optionalMany(R.BRACE_L,this.parseEnumValueDefinition,R.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,r=this.parseDescription(),n=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(t,{kind:G.ENUM_VALUE_DEFINITION,description:r,name:n,directives:i})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw we(this._lexer.source,this._lexer.token.start,`${ln(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("input");const n=this.parseName(),i=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();return this.node(t,{kind:G.INPUT_OBJECT_TYPE_DEFINITION,description:r,name:n,directives:i,fields:a})}parseInputFieldsDefinition(){return this.optionalMany(R.BRACE_L,this.parseInputValueDef,R.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===R.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const r=this.parseConstDirectives(),n=this.optionalMany(R.BRACE_L,this.parseOperationTypeDefinition,R.BRACE_R);if(r.length===0&&n.length===0)throw this.unexpected();return this.node(t,{kind:G.SCHEMA_EXTENSION,directives:r,operationTypes:n})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const r=this.parseName(),n=this.parseConstDirectives();if(n.length===0)throw this.unexpected();return this.node(t,{kind:G.SCALAR_TYPE_EXTENSION,name:r,directives:n})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const r=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(n.length===0&&i.length===0&&a.length===0)throw this.unexpected();return this.node(t,{kind:G.OBJECT_TYPE_EXTENSION,name:r,interfaces:n,directives:i,fields:a})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const r=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(n.length===0&&i.length===0&&a.length===0)throw this.unexpected();return this.node(t,{kind:G.INTERFACE_TYPE_EXTENSION,name:r,interfaces:n,directives:i,fields:a})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(n.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:G.UNION_TYPE_EXTENSION,name:r,directives:n,types:i})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(n.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:G.ENUM_TYPE_EXTENSION,name:r,directives:n,values:i})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(n.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:G.INPUT_OBJECT_TYPE_EXTENSION,name:r,directives:n,fields:i})}parseDirectiveDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("directive"),this.expectToken(R.AT);const n=this.parseName(),i=this.parseArgumentDefs(),a=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const o=this.parseDirectiveLocations();return this.node(t,{kind:G.DIRECTIVE_DEFINITION,description:r,name:n,arguments:i,repeatable:a,locations:o})}parseDirectiveLocations(){return this.delimitedMany(R.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,r=this.parseName();if(Object.prototype.hasOwnProperty.call(Gi,r.value))return r;throw this.unexpected(t)}node(t,r){return this._options.noLocation!==!0&&(r.loc=new nh(t,this._lexer.lastToken,this._lexer.source)),r}peek(t){return this._lexer.token.kind===t}expectToken(t){const r=this._lexer.token;if(r.kind===t)return this.advanceLexer(),r;throw we(this._lexer.source,r.start,`Expected ${tu(t)}, found ${ln(r)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){const r=this._lexer.token;if(r.kind===R.NAME&&r.value===t)this.advanceLexer();else throw we(this._lexer.source,r.start,`Expected "${t}", found ${ln(r)}.`)}expectOptionalKeyword(t){const r=this._lexer.token;return r.kind===R.NAME&&r.value===t?(this.advanceLexer(),!0):!1}unexpected(t){const r=t??this._lexer.token;return we(this._lexer.source,r.start,`Unexpected ${ln(r)}.`)}any(t,r,n){this.expectToken(t);const i=[];for(;!this.expectOptionalToken(n);)i.push(r.call(this));return i}optionalMany(t,r,n){if(this.expectOptionalToken(t)){const i=[];do i.push(r.call(this));while(!this.expectOptionalToken(n));return i}return[]}many(t,r,n){this.expectToken(t);const i=[];do i.push(r.call(this));while(!this.expectOptionalToken(n));return i}delimitedMany(t,r){this.expectOptionalToken(t);const n=[];do n.push(r.call(this));while(this.expectOptionalToken(t));return n}advanceLexer(){const{maxTokens:t}=this._options,r=this._lexer.advance();if(r.kind!==R.EOF&&(++this._tokenCounter,t!==void 0&&this._tokenCounter>t))throw we(this._lexer.source,r.start,`Document contains more that ${t} tokens. Parsing aborted.`)}}function ln(e){const t=e.value;return tu(e.kind)+(t!=null?` "${t}"`:"")}function tu(e){return lh(e)?`"${e}"`:e}function Ah(e){return`"${e.replace(Ch,Fh)}"`}const Ch=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Fh(e){return $h[e.charCodeAt(0)]}const $h=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],fn=Object.freeze({});function Le(e,t,r=Qs){const n=new Map;for(const g of Object.values(G))n.set(g,Ph(t,g));let i,a=Array.isArray(e),o=[e],s=-1,u=[],c=e,l,d;const f=[],p=[];do{s++;const g=s===o.length,_=g&&u.length!==0;if(g){if(l=p.length===0?void 0:f[f.length-1],c=d,d=p.pop(),_)if(a){c=c.slice();let k=0;for(const[$,E]of u){const x=$-k;E===null?(c.splice(x,1),k++):c[x]=E}}else{c={...c};for(const[k,$]of u)c[k]=$}s=i.index,o=i.keys,u=i.edits,a=i.inArray,i=i.prev}else if(d){if(l=a?s:o[s],c=d[l],c==null)continue;f.push(l)}let I;if(!Array.isArray(c)){var y,S;Ws(c)||sn(!1,`Invalid AST Node: ${Wi(c)}.`);const k=g?(y=n.get(c.kind))===null||y===void 0?void 0:y.leave:(S=n.get(c.kind))===null||S===void 0?void 0:S.enter;if(I=k?.call(t,c,l,d,f,p),I===fn)break;if(I===!1){if(!g){f.pop();continue}}else if(I!==void 0&&(u.push([l,I]),!g))if(Ws(I))c=I;else{f.pop();continue}}if(I===void 0&&_&&u.push([l,c]),g)f.pop();else{var h;i={inArray:a,index:s,keys:o,edits:u,prev:i},a=Array.isArray(c),o=a?c:(h=r[c.kind])!==null&&h!==void 0?h:[],s=-1,u=[],d&&p.push(d),d=c}}while(i!==void 0);return u.length!==0?u[u.length-1][1]:e}function Ph(e,t){const r=e[t];return typeof r=="object"?r:typeof r=="function"?{enter:r,leave:void 0}:{enter:e.enter,leave:e.leave}}function Nh(e){return Le(e,Mh)}const Rh=80,Mh={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>H(e.definitions,`

`)},OperationDefinition:{leave(e){const t=te("(",H(e.variableDefinitions,", "),")"),r=H([e.operation,H([e.name,t]),H(e.directives," ")]," ");return(r==="query"?"":r+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:r,directives:n})=>e+": "+t+te(" = ",r)+te(" ",H(n," "))},SelectionSet:{leave:({selections:e})=>je(e)},Field:{leave({alias:e,name:t,arguments:r,directives:n,selectionSet:i}){const a=te("",e,": ")+t;let o=a+te("(",H(r,", "),")");return o.length>Rh&&(o=a+te(`(
`,dn(H(r,`
`)),`
)`)),H([o,H(n," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+te(" ",H(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:r})=>H(["...",te("on ",e),H(t," "),r]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:r,directives:n,selectionSet:i})=>`fragment ${e}${te("(",H(r,", "),")")} on ${t} ${te("",H(n," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?uh(e):Ah(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+H(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+H(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+te("(",H(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:r})=>te("",e,`
`)+H(["schema",H(t," "),je(r)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:r})=>te("",e,`
`)+H(["scalar",t,H(r," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:i})=>te("",e,`
`)+H(["type",t,te("implements ",H(r," & ")),H(n," "),je(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:r,type:n,directives:i})=>te("",e,`
`)+t+(ru(r)?te(`(
`,dn(H(r,`
`)),`
)`):te("(",H(r,", "),")"))+": "+n+te(" ",H(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:r,defaultValue:n,directives:i})=>te("",e,`
`)+H([t+": "+r,te("= ",n),H(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:i})=>te("",e,`
`)+H(["interface",t,te("implements ",H(r," & ")),H(n," "),je(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:r,types:n})=>te("",e,`
`)+H(["union",t,H(r," "),te("= ",H(n," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:r,values:n})=>te("",e,`
`)+H(["enum",t,H(r," "),je(n)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:r})=>te("",e,`
`)+H([t,H(r," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:r,fields:n})=>te("",e,`
`)+H(["input",t,H(r," "),je(n)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:r,repeatable:n,locations:i})=>te("",e,`
`)+"directive @"+t+(ru(r)?te(`(
`,dn(H(r,`
`)),`
)`):te("(",H(r,", "),")"))+(n?" repeatable":"")+" on "+H(i," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>H(["extend schema",H(e," "),je(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>H(["extend scalar",e,H(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>H(["extend type",e,te("implements ",H(t," & ")),H(r," "),je(n)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>H(["extend interface",e,te("implements ",H(t," & ")),H(r," "),je(n)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:r})=>H(["extend union",e,H(t," "),te("= ",H(r," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:r})=>H(["extend enum",e,H(t," "),je(r)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:r})=>H(["extend input",e,H(t," "),je(r)]," ")}};function H(e,t=""){var r;return(r=e?.filter(n=>n).join(t))!==null&&r!==void 0?r:""}function je(e){return te(`{
`,dn(H(e,`
`)),`
}`)}function te(e,t,r=""){return t!=null&&t!==""?e+t+r:""}function dn(e){return te("  ",e.replace(/\n/g,`
  `))}function ru(e){var t;return(t=e?.some(r=>r.includes(`
`)))!==null&&t!==void 0?t:!1}function nu(e){return e.kind===G.FIELD||e.kind===G.FRAGMENT_SPREAD||e.kind===G.INLINE_FRAGMENT}function Sr(e,t){var r=e.directives;return!r||!r.length?!0:Uh(r).every(function(n){var i=n.directive,a=n.ifArgument,o=!1;return a.value.kind==="Variable"?(o=t&&t[a.value.name.value],K(o!==void 0,78,i.name.value)):o=a.value.value,i.name.value==="skip"?!o:o})}function _r(e,t,r){var n=new Set(e),i=n.size;return Le(t,{Directive:function(a){if(n.delete(a.name.value)&&(!r||!n.size))return fn}}),r?!n.size:n.size<i}function Lh(e){return e&&_r(["client","export"],e,!0)}function jh(e){var t=e.name.value;return t==="skip"||t==="include"}function Uh(e){var t=[];return e&&e.length&&e.forEach(function(r){if(jh(r)){var n=r.arguments,i=r.name.value;K(n&&n.length===1,79,i);var a=n[0];K(a.name&&a.name.value==="if",80,i);var o=a.value;K(o&&(o.kind==="Variable"||o.kind==="BooleanValue"),81,i),t.push({directive:r,ifArgument:a})}}),t}function qh(e){var t,r,n=(t=e.directives)===null||t===void 0?void 0:t.find(function(a){var o=a.name;return o.value==="unmask"});if(!n)return"mask";var i=(r=n.arguments)===null||r===void 0?void 0:r.find(function(a){var o=a.name;return o.value==="mode"});return globalThis.__DEV__!==!1&&i&&(i.value.kind===G.VARIABLE?globalThis.__DEV__!==!1&&K.warn(82):i.value.kind!==G.STRING?globalThis.__DEV__!==!1&&K.warn(83):i.value.value!=="migrate"&&globalThis.__DEV__!==!1&&K.warn(84,i.value.value)),i&&"value"in i.value&&i.value.value==="migrate"?"migrate":"unmask"}const Bh=()=>Object.create(null),{forEach:Vh,slice:iu}=Array.prototype,{hasOwnProperty:Gh}=Object.prototype;class Ke{constructor(t=!0,r=Bh){this.weakness=t,this.makeData=r}lookup(){return this.lookupArray(arguments)}lookupArray(t){let r=this;return Vh.call(t,n=>r=r.getChildTrie(n)),Gh.call(r,"data")?r.data:r.data=this.makeData(iu.call(t))}peek(){return this.peekArray(arguments)}peekArray(t){let r=this;for(let n=0,i=t.length;r&&n<i;++n){const a=r.mapFor(t[n],!1);r=a&&a.get(t[n])}return r&&r.data}remove(){return this.removeArray(arguments)}removeArray(t){let r;if(t.length){const n=t[0],i=this.mapFor(n,!1),a=i&&i.get(n);a&&(r=a.removeArray(iu.call(t,1)),!a.data&&!a.weak&&!(a.strong&&a.strong.size)&&i.delete(n))}else r=this.data,delete this.data;return r}getChildTrie(t){const r=this.mapFor(t,!0);let n=r.get(t);return n||r.set(t,n=new Ke(this.weakness,this.makeData)),n}mapFor(t,r){return this.weakness&&zh(t)?this.weak||(r?this.weak=new WeakMap:void 0):this.strong||(r?this.strong=new Map:void 0)}}function zh(e){switch(typeof e){case"object":if(e===null)break;case"function":return!0}return!1}var Qh=Me(function(){return navigator.product})=="ReactNative",Tt=typeof WeakMap=="function"&&!(Qh&&!global.HermesInternal),Yi=typeof WeakSet=="function",au=typeof Symbol=="function"&&typeof Symbol.for=="function",pn=au&&Symbol.asyncIterator;Me(function(){return window.document.createElement}),Me(function(){return navigator.userAgent.indexOf("jsdom")>=0});function me(e){return e!==null&&typeof e=="object"}function Wh(e,t){var r=t,n=[];e.definitions.forEach(function(a){if(a.kind==="OperationDefinition")throw Ae(85,a.operation,a.name?" named '".concat(a.name.value,"'"):"");a.kind==="FragmentDefinition"&&n.push(a)}),typeof r>"u"&&(K(n.length===1,86,n.length),r=n[0].name.value);var i=C(C({},e),{definitions:Oe([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:r}}]}}],e.definitions,!0)});return i}function Ut(e){e===void 0&&(e=[]);var t={};return e.forEach(function(r){t[r.name.value]=r}),t}function hn(e,t){switch(e.kind){case"InlineFragment":return e;case"FragmentSpread":{var r=e.name.value;if(typeof t=="function")return t(r);var n=t&&t[r];return K(n,87,r),n||null}default:return null}}function Yh(e){var t=!0;return Le(e,{FragmentSpread:function(r){if(t=!!r.directives&&r.directives.some(function(n){return n.name.value==="unmask"}),!t)return fn}}),t}function Hh(){}class Hi{constructor(t=1/0,r=Hh){this.max=t,this.dispose=r,this.map=new Map,this.newest=null,this.oldest=null}has(t){return this.map.has(t)}get(t){const r=this.getNode(t);return r&&r.value}get size(){return this.map.size}getNode(t){const r=this.map.get(t);if(r&&r!==this.newest){const{older:n,newer:i}=r;i&&(i.older=n),n&&(n.newer=i),r.older=this.newest,r.older.newer=r,r.newer=null,this.newest=r,r===this.oldest&&(this.oldest=i)}return r}set(t,r){let n=this.getNode(t);return n?n.value=r:(n={key:t,value:r,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.map.set(t,n),n.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(t){const r=this.map.get(t);return r?(r===this.newest&&(this.newest=r.older),r===this.oldest&&(this.oldest=r.newer),r.newer&&(r.newer.older=r.older),r.older&&(r.older.newer=r.newer),this.map.delete(t),this.dispose(r.value,t),!0):!1}}function Ji(){}const Jh=Ji,Kh=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},Xh=typeof WeakMap<"u"?WeakMap:Map,Zh=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:Ji,unregister:Ji}},em=10024;class mn{constructor(t=1/0,r=Jh){this.max=t,this.dispose=r,this.map=new Xh,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{const n=this.unfinalizedNodes.values();for(let i=0;i<em;i++){const a=n.next().value;if(!a)break;this.unfinalizedNodes.delete(a);const o=a.key;delete a.key,a.keyRef=new Kh(o),this.registry.register(o,a,a)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new Zh(this.deleteNode.bind(this))}has(t){return this.map.has(t)}get(t){const r=this.getNode(t);return r&&r.value}getNode(t){const r=this.map.get(t);if(r&&r!==this.newest){const{older:n,newer:i}=r;i&&(i.older=n),n&&(n.newer=i),r.older=this.newest,r.older.newer=r,r.newer=null,this.newest=r,r===this.oldest&&(this.oldest=i)}return r}set(t,r){let n=this.getNode(t);return n?n.value=r:(n={key:t,value:r,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.scheduleFinalization(n),this.map.set(t,n),this.size++,n.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(t){t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.size--;const r=t.key||t.keyRef&&t.keyRef.deref();this.dispose(t.value,r),t.keyRef?this.registry.unregister(t):this.unfinalizedNodes.delete(t),r&&this.map.delete(r)}delete(t){const r=this.map.get(t);return r?(this.deleteNode(r),!0):!1}scheduleFinalization(t){this.unfinalizedNodes.add(t),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}}var Ki=new WeakSet;function ou(e){e.size<=(e.max||-1)||Ki.has(e)||(Ki.add(e),setTimeout(function(){e.clean(),Ki.delete(e)},100))}var su=function(e,t){var r=new mn(e,t);return r.set=function(n,i){var a=mn.prototype.set.call(this,n,i);return ou(this),a},r},tm=function(e,t){var r=new Hi(e,t);return r.set=function(n,i){var a=Hi.prototype.set.call(this,n,i);return ou(this),a},r},rm=Symbol.for("apollo.cacheSize"),Xe=C({},Li[rm]),kt={};function uu(e,t){kt[e]=t}var nm=globalThis.__DEV__!==!1?sm:void 0,im=globalThis.__DEV__!==!1?um:void 0,am=globalThis.__DEV__!==!1?cu:void 0;function om(){var e={parser:1e3,canonicalStringify:1e3,print:2e3,"documentTransform.cache":2e3,"queryManager.getDocumentInfo":2e3,"PersistedQueryLink.persistedQueryHashes":2e3,"fragmentRegistry.transform":2e3,"fragmentRegistry.lookup":1e3,"fragmentRegistry.findFragmentSpreads":4e3,"cache.fragmentQueryDocuments":1e3,"removeTypenameFromVariables.getVariableDefinitions":2e3,"inMemoryCache.maybeBroadcastWatch":5e3,"inMemoryCache.executeSelectionSet":5e4,"inMemoryCache.executeSubSelectedArray":1e4};return Object.fromEntries(Object.entries(e).map(function(t){var r=t[0],n=t[1];return[r,Xe[r]||n]}))}function sm(){var e,t,r,n,i;if(globalThis.__DEV__===!1)throw new Error("only supported in development mode");return{limits:om(),sizes:C({print:(e=kt.print)===null||e===void 0?void 0:e.call(kt),parser:(t=kt.parser)===null||t===void 0?void 0:t.call(kt),canonicalStringify:(r=kt.canonicalStringify)===null||r===void 0?void 0:r.call(kt),links:Zi(this.link),queryManager:{getDocumentInfo:this.queryManager.transformCache.size,documentTransforms:fu(this.queryManager.documentTransform)}},(i=(n=this.cache).getMemoryInternals)===null||i===void 0?void 0:i.call(n))}}function cu(){return{cache:{fragmentQueryDocuments:ut(this.getFragmentDoc)}}}function um(){var e=this.config.fragments;return C(C({},cu.apply(this)),{addTypenameDocumentTransform:fu(this.addTypenameTransform),inMemoryCache:{executeSelectionSet:ut(this.storeReader.executeSelectionSet),executeSubSelectedArray:ut(this.storeReader.executeSubSelectedArray),maybeBroadcastWatch:ut(this.maybeBroadcastWatch)},fragmentRegistry:{findFragmentSpreads:ut(e?.findFragmentSpreads),lookup:ut(e?.lookup),transform:ut(e?.transform)}})}function cm(e){return!!e&&"dirtyKey"in e}function ut(e){return cm(e)?e.size:void 0}function lu(e){return e!=null}function fu(e){return Xi(e).map(function(t){return{cache:t}})}function Xi(e){return e?Oe(Oe([ut(e?.performWork)],Xi(e?.left),!0),Xi(e?.right),!0).filter(lu):[]}function Zi(e){var t;return e?Oe(Oe([(t=e?.getMemoryInternals)===null||t===void 0?void 0:t.call(e)],Zi(e?.left),!0),Zi(e?.right),!0).filter(lu):[]}var ct=Object.assign(function(t){return JSON.stringify(t,lm)},{reset:function(){qt=new tm(Xe.canonicalStringify||1e3)}});globalThis.__DEV__!==!1&&uu("canonicalStringify",function(){return qt.size});var qt;ct.reset();function lm(e,t){if(t&&typeof t=="object"){var r=Object.getPrototypeOf(t);if(r===Object.prototype||r===null){var n=Object.keys(t);if(n.every(fm))return t;var i=JSON.stringify(n),a=qt.get(i);if(!a){n.sort();var o=JSON.stringify(n);a=qt.get(o)||n,qt.set(i,a),qt.set(o,a)}var s=Object.create(r);return a.forEach(function(u){s[u]=t[u]}),s}}return t}function fm(e,t,r){return t===0||r[t-1]<=e}function Bt(e){return{__ref:String(e)}}function ue(e){return!!(e&&typeof e=="object"&&typeof e.__ref=="string")}function dm(e){return me(e)&&e.kind==="Document"&&Array.isArray(e.definitions)}function pm(e){return e.kind==="StringValue"}function hm(e){return e.kind==="BooleanValue"}function mm(e){return e.kind==="IntValue"}function gm(e){return e.kind==="FloatValue"}function ym(e){return e.kind==="Variable"}function vm(e){return e.kind==="ObjectValue"}function bm(e){return e.kind==="ListValue"}function Sm(e){return e.kind==="EnumValue"}function _m(e){return e.kind==="NullValue"}function Vt(e,t,r,n){if(mm(r)||gm(r))e[t.value]=Number(r.value);else if(hm(r)||pm(r))e[t.value]=r.value;else if(vm(r)){var i={};r.fields.map(function(o){return Vt(i,o.name,o.value,n)}),e[t.value]=i}else if(ym(r)){var a=(n||{})[r.name.value];e[t.value]=a}else if(bm(r))e[t.value]=r.values.map(function(o){var s={};return Vt(s,t,o,n),s[t.value]});else if(Sm(r))e[t.value]=r.value;else if(_m(r))e[t.value]=null;else throw Ae(96,t.value,r.kind)}function wm(e,t){var r=null;e.directives&&(r={},e.directives.forEach(function(i){r[i.name.value]={},i.arguments&&i.arguments.forEach(function(a){var o=a.name,s=a.value;return Vt(r[i.name.value],o,s,t)})}));var n=null;return e.arguments&&e.arguments.length&&(n={},e.arguments.forEach(function(i){var a=i.name,o=i.value;return Vt(n,a,o,t)})),du(e.name.value,n,r)}var Em=["connection","include","skip","client","rest","export","nonreactive"],wr=ct,du=Object.assign(function(e,t,r){if(t&&r&&r.connection&&r.connection.key)if(r.connection.filter&&r.connection.filter.length>0){var n=r.connection.filter?r.connection.filter:[];n.sort();var i={};return n.forEach(function(s){i[s]=t[s]}),"".concat(r.connection.key,"(").concat(wr(i),")")}else return r.connection.key;var a=e;if(t){var o=wr(t);a+="(".concat(o,")")}return r&&Object.keys(r).forEach(function(s){Em.indexOf(s)===-1&&(r[s]&&Object.keys(r[s]).length?a+="@".concat(s,"(").concat(wr(r[s]),")"):a+="@".concat(s))}),a},{setStringify:function(e){var t=wr;return wr=e,t}});function gn(e,t){if(e.arguments&&e.arguments.length){var r={};return e.arguments.forEach(function(n){var i=n.name,a=n.value;return Vt(r,i,a,t)}),r}return null}function Ze(e){return e.alias?e.alias.value:e.name.value}function ea(e,t,r){for(var n,i=0,a=t.selections;i<a.length;i++){var o=a[i];if(lt(o)){if(o.name.value==="__typename")return e[Ze(o)]}else n?n.push(o):n=[o]}if(typeof e.__typename=="string")return e.__typename;if(n)for(var s=0,u=n;s<u.length;s++){var o=u[s],c=ea(e,hn(o,r).selectionSet,r);if(typeof c=="string")return c}}function lt(e){return e.kind==="Field"}function Dm(e){return e.kind==="InlineFragment"}function Gt(e){K(e&&e.kind==="Document",88);var t=e.definitions.filter(function(r){return r.kind!=="FragmentDefinition"}).map(function(r){if(r.kind!=="OperationDefinition")throw Ae(89,r.kind);return r});return K(t.length<=1,90,t.length),e}function Ot(e){return Gt(e),e.definitions.filter(function(t){return t.kind==="OperationDefinition"})[0]}function Er(e){return e.definitions.filter(function(t){return t.kind==="OperationDefinition"&&!!t.name}).map(function(t){return t.name.value})[0]||null}function zt(e){return e.definitions.filter(function(t){return t.kind==="FragmentDefinition"})}function pu(e){var t=Ot(e);return K(t&&t.operation==="query",91),t}function hu(e){K(e.kind==="Document",92),K(e.definitions.length<=1,93);var t=e.definitions[0];return K(t.kind==="FragmentDefinition",94),t}function Qt(e){Gt(e);for(var t,r=0,n=e.definitions;r<n.length;r++){var i=n[r];if(i.kind==="OperationDefinition"){var a=i.operation;if(a==="query"||a==="mutation"||a==="subscription")return i}i.kind==="FragmentDefinition"&&!t&&(t=i)}if(t)return t;throw Ae(95)}function ta(e){var t=Object.create(null),r=e&&e.variableDefinitions;return r&&r.length&&r.forEach(function(n){n.defaultValue&&Vt(t,n.variable.name,n.defaultValue)}),t}let Te=null;const mu={};let Im=1;const Tm=()=>class{constructor(){this.id=["slot",Im++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=Te;t;t=t.parent)if(this.id in t.slots){const r=t.slots[this.id];if(r===mu)break;return t!==Te&&(Te.slots[this.id]=r),!0}return Te&&(Te.slots[this.id]=mu),!1}getValue(){if(this.hasValue())return Te.slots[this.id]}withValue(t,r,n,i){const a={__proto__:null,[this.id]:t},o=Te;Te={parent:o,slots:a};try{return r.apply(i,n)}finally{Te=o}}static bind(t){const r=Te;return function(){const n=Te;try{return Te=r,t.apply(this,arguments)}finally{Te=n}}}static noContext(t,r,n){if(Te){const i=Te;try{return Te=null,t.apply(n,r)}finally{Te=i}}else return t.apply(n,r)}};function gu(e){try{return e()}catch{}}const ra="@wry/context:Slot",yu=gu(()=>globalThis)||gu(()=>global)||Object.create(null),Dr=yu[ra]||Array[ra]||(function(e){try{Object.defineProperty(yu,ra,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}})(Tm()),{bind:hv,noContext:mv}=Dr,yn=new Dr,{hasOwnProperty:km}=Object.prototype,na=Array.from||function(e){const t=[];return e.forEach(r=>t.push(r)),t};function ia(e){const{unsubscribe:t}=e;typeof t=="function"&&(e.unsubscribe=void 0,t())}const Ir=[],Om=100;function Wt(e,t){if(!e)throw new Error(t||"assertion failure")}function vu(e,t){const r=e.length;return r>0&&r===t.length&&e[r-1]===t[r-1]}function bu(e){switch(e.length){case 0:throw new Error("unknown value");case 1:return e[0];case 2:throw e[1]}}function Su(e){return e.slice(0)}class vn{constructor(t){this.fn=t,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++vn.count}peek(){if(this.value.length===1&&!ft(this))return _u(this),this.value[0]}recompute(t){return Wt(!this.recomputing,"already recomputing"),_u(this),ft(this)?xm(this,t):bu(this.value)}setDirty(){this.dirty||(this.dirty=!0,wu(this),ia(this))}dispose(){this.setDirty(),ku(this),aa(this,(t,r)=>{t.setDirty(),Ou(t,this)})}forget(){this.dispose()}dependOn(t){t.add(this),this.deps||(this.deps=Ir.pop()||new Set),this.deps.add(t)}forgetDeps(){this.deps&&(na(this.deps).forEach(t=>t.delete(this)),this.deps.clear(),Ir.push(this.deps),this.deps=null)}}vn.count=0;function _u(e){const t=yn.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),ft(e)?Du(t,e):Iu(t,e),t}function xm(e,t){return ku(e),yn.withValue(e,Am,[e,t]),Fm(e,t)&&Cm(e),bu(e.value)}function Am(e,t){e.recomputing=!0;const{normalizeResult:r}=e;let n;r&&e.value.length===1&&(n=Su(e.value)),e.value.length=0;try{if(e.value[0]=e.fn.apply(null,t),r&&n&&!vu(n,e.value))try{e.value[0]=r(e.value[0],n[0])}catch{}}catch(i){e.value[1]=i}e.recomputing=!1}function ft(e){return e.dirty||!!(e.dirtyChildren&&e.dirtyChildren.size)}function Cm(e){e.dirty=!1,!ft(e)&&Eu(e)}function wu(e){aa(e,Du)}function Eu(e){aa(e,Iu)}function aa(e,t){const r=e.parents.size;if(r){const n=na(e.parents);for(let i=0;i<r;++i)t(n[i],e)}}function Du(e,t){Wt(e.childValues.has(t)),Wt(ft(t));const r=!ft(e);if(!e.dirtyChildren)e.dirtyChildren=Ir.pop()||new Set;else if(e.dirtyChildren.has(t))return;e.dirtyChildren.add(t),r&&wu(e)}function Iu(e,t){Wt(e.childValues.has(t)),Wt(!ft(t));const r=e.childValues.get(t);r.length===0?e.childValues.set(t,Su(t.value)):vu(r,t.value)||e.setDirty(),Tu(e,t),!ft(e)&&Eu(e)}function Tu(e,t){const r=e.dirtyChildren;r&&(r.delete(t),r.size===0&&(Ir.length<Om&&Ir.push(r),e.dirtyChildren=null))}function ku(e){e.childValues.size>0&&e.childValues.forEach((t,r)=>{Ou(e,r)}),e.forgetDeps(),Wt(e.dirtyChildren===null)}function Ou(e,t){t.parents.delete(e),e.childValues.delete(t),Tu(e,t)}function Fm(e,t){if(typeof e.subscribe=="function")try{ia(e),e.unsubscribe=e.subscribe.apply(null,t)}catch{return e.setDirty(),!1}return!0}const $m={setDirty:!0,dispose:!0,forget:!0};function xu(e){const t=new Map;function r(n){const i=yn.getValue();if(i){let a=t.get(n);a||t.set(n,a=new Set),i.dependOn(a)}}return r.dirty=function(i,a){const o=t.get(i);if(o){const s=a&&km.call($m,a)?a:"setDirty";na(o).forEach(u=>u[s]()),t.delete(i),ia(o)}},r}let Au;function Pm(...e){return(Au||(Au=new Ke(typeof WeakMap=="function"))).lookupArray(e)}const oa=new Set;function Tr(e,{max:t=Math.pow(2,16),keyArgs:r,makeCacheKey:n=Pm,normalizeResult:i,subscribe:a,cache:o=Hi}=Object.create(null)){const s=typeof o=="function"?new o(t,f=>f.dispose()):o,u=function(){const f=n.apply(null,r?r.apply(null,arguments):arguments);if(f===void 0)return e.apply(null,arguments);let p=s.get(f);p||(s.set(f,p=new vn(e)),p.normalizeResult=i,p.subscribe=a,p.forget=()=>s.delete(f));const y=p.recompute(Array.prototype.slice.call(arguments));return s.set(f,p),oa.add(s),yn.hasValue()||(oa.forEach(S=>S.clean()),oa.clear()),y};Object.defineProperty(u,"size",{get:()=>s.size,configurable:!1,enumerable:!1}),Object.freeze(u.options={max:t,keyArgs:r,makeCacheKey:n,normalizeResult:i,subscribe:a,cache:s});function c(f){const p=f&&s.get(f);p&&p.setDirty()}u.dirtyKey=c,u.dirty=function(){c(n.apply(null,arguments))};function l(f){const p=f&&s.get(f);if(p)return p.peek()}u.peekKey=l,u.peek=function(){return l(n.apply(null,arguments))};function d(f){return f?s.delete(f):!1}return u.forgetKey=d,u.forget=function(){return d(n.apply(null,arguments))},u.makeCacheKey=n,u.getKey=r?function(){return n.apply(null,r.apply(null,arguments))}:n,Object.freeze(u)}function Nm(e){return e}var Cu=(function(){function e(t,r){r===void 0&&(r=Object.create(null)),this.resultCache=Yi?new WeakSet:new Set,this.transform=t,r.getCacheKey&&(this.getCacheKey=r.getCacheKey),this.cached=r.cache!==!1,this.resetCache()}return e.prototype.getCacheKey=function(t){return[t]},e.identity=function(){return new e(Nm,{cache:!1})},e.split=function(t,r,n){return n===void 0&&(n=e.identity()),Object.assign(new e(function(i){var a=t(i)?r:n;return a.transformDocument(i)},{cache:!1}),{left:r,right:n})},e.prototype.resetCache=function(){var t=this;if(this.cached){var r=new Ke(Tt);this.performWork=Tr(e.prototype.performWork.bind(this),{makeCacheKey:function(n){var i=t.getCacheKey(n);if(i)return K(Array.isArray(i),77),r.lookupArray(i)},max:Xe["documentTransform.cache"],cache:mn})}},e.prototype.performWork=function(t){return Gt(t),this.transform(t)},e.prototype.transformDocument=function(t){if(this.resultCache.has(t))return t;var r=this.performWork(t);return this.resultCache.add(r),r},e.prototype.concat=function(t){var r=this;return Object.assign(new e(function(n){return t.transformDocument(r.transformDocument(n))},{cache:!1}),{left:this,right:t})},e})(),kr,dt=Object.assign(function(e){var t=kr.get(e);return t||(t=Nh(e),kr.set(e,t)),t},{reset:function(){kr=new su(Xe.print||2e3)}});dt.reset(),globalThis.__DEV__!==!1&&uu("print",function(){return kr?kr.size:0});var ge=Array.isArray;function ze(e){return Array.isArray(e)&&e.length>0}var Fu={kind:G.FIELD,name:{kind:G.NAME,value:"__typename"}};function $u(e,t){return!e||e.selectionSet.selections.every(function(r){return r.kind===G.FRAGMENT_SPREAD&&$u(t[r.name.value],t)})}function Rm(e){return $u(Ot(e)||hu(e),Ut(zt(e)))?null:e}function Mm(e){var t=new Map,r=new Map;return e.forEach(function(n){n&&(n.name?t.set(n.name,n):n.test&&r.set(n.test,n))}),function(n){var i=t.get(n.name.value);return!i&&r.size&&r.forEach(function(a,o){o(n)&&(i=a)}),i}}function Pu(e){var t=new Map;return function(n){n===void 0&&(n=e);var i=t.get(n);return i||t.set(n,i={variables:new Set,fragmentSpreads:new Set}),i}}function Nu(e,t){Gt(t);for(var r=Pu(""),n=Pu(""),i=function(g){for(var _=0,I=void 0;_<g.length&&(I=g[_]);++_)if(!ge(I)){if(I.kind===G.OPERATION_DEFINITION)return r(I.name&&I.name.value);if(I.kind===G.FRAGMENT_DEFINITION)return n(I.name.value)}return globalThis.__DEV__!==!1&&K.error(97),null},a=0,o=t.definitions.length-1;o>=0;--o)t.definitions[o].kind===G.OPERATION_DEFINITION&&++a;var s=Mm(e),u=function(g){return ze(g)&&g.map(s).some(function(_){return _&&_.remove})},c=new Map,l=!1,d={enter:function(g){if(u(g.directives))return l=!0,null}},f=Le(t,{Field:d,InlineFragment:d,VariableDefinition:{enter:function(){return!1}},Variable:{enter:function(g,_,I,k,$){var E=i($);E&&E.variables.add(g.name.value)}},FragmentSpread:{enter:function(g,_,I,k,$){if(u(g.directives))return l=!0,null;var E=i($);E&&E.fragmentSpreads.add(g.name.value)}},FragmentDefinition:{enter:function(g,_,I,k){c.set(JSON.stringify(k),g)},leave:function(g,_,I,k){var $=c.get(JSON.stringify(k));if(g===$)return g;if(a>0&&g.selectionSet.selections.every(function(E){return E.kind===G.FIELD&&E.name.value==="__typename"}))return n(g.name.value).removed=!0,l=!0,null}},Directive:{leave:function(g){if(s(g))return l=!0,null}}});if(!l)return t;var p=function(g){return g.transitiveVars||(g.transitiveVars=new Set(g.variables),g.removed||g.fragmentSpreads.forEach(function(_){p(n(_)).transitiveVars.forEach(function(I){g.transitiveVars.add(I)})})),g},y=new Set;f.definitions.forEach(function(g){g.kind===G.OPERATION_DEFINITION?p(r(g.name&&g.name.value)).fragmentSpreads.forEach(function(_){y.add(_)}):g.kind===G.FRAGMENT_DEFINITION&&a===0&&!n(g.name.value).removed&&y.add(g.name.value)}),y.forEach(function(g){p(n(g)).fragmentSpreads.forEach(function(_){y.add(_)})});var S=function(g){return!!(!y.has(g)||n(g).removed)},h={enter:function(g){if(S(g.name.value))return null}};return Rm(Le(f,{FragmentSpread:h,FragmentDefinition:h,OperationDefinition:{leave:function(g){if(g.variableDefinitions){var _=p(r(g.name&&g.name.value)).transitiveVars;if(_.size<g.variableDefinitions.length)return C(C({},g),{variableDefinitions:g.variableDefinitions.filter(function(I){return _.has(I.variable.name.value)})})}}}}))}var sa=Object.assign(function(e){return Le(e,{SelectionSet:{enter:function(t,r,n){if(!(n&&n.kind===G.OPERATION_DEFINITION)){var i=t.selections;if(i){var a=i.some(function(s){return lt(s)&&(s.name.value==="__typename"||s.name.value.lastIndexOf("__",0)===0)});if(!a){var o=n;if(!(lt(o)&&o.directives&&o.directives.some(function(s){return s.name.value==="export"})))return C(C({},t),{selections:Oe(Oe([],i,!0),[Fu],!1)})}}}}}})},{added:function(e){return e===Fu}});function Lm(e){var t=Qt(e),r=t.operation;if(r==="query")return e;var n=Le(e,{OperationDefinition:{enter:function(i){return C(C({},i),{operation:"query"})}}});return n}function Ru(e){Gt(e);var t=Nu([{test:function(r){return r.name.value==="client"},remove:!0}],e);return t}function jm(e){return Gt(e),Le(e,{FragmentSpread:function(t){var r;if(!(!((r=t.directives)===null||r===void 0)&&r.some(function(n){return n.name.value==="unmask"})))return C(C({},t),{directives:Oe(Oe([],t.directives||[],!0),[{kind:G.DIRECTIVE,name:{kind:G.NAME,value:"nonreactive"}}],!1)})}})}var Um=Object.prototype.hasOwnProperty;function Mu(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return bn(e)}function bn(e){var t=e[0]||{},r=e.length;if(r>1)for(var n=new pt,i=1;i<r;++i)t=n.merge(t,e[i]);return t}var qm=function(e,t,r){return this.merge(e[r],t[r])},pt=(function(){function e(t){t===void 0&&(t=qm),this.reconciler=t,this.isObject=me,this.pastCopies=new Set}return e.prototype.merge=function(t,r){for(var n=this,i=[],a=2;a<arguments.length;a++)i[a-2]=arguments[a];return me(r)&&me(t)?(Object.keys(r).forEach(function(o){if(Um.call(t,o)){var s=t[o];if(r[o]!==s){var u=n.reconciler.apply(n,Oe([t,r,o],i,!1));u!==s&&(t=n.shallowCopyForMerge(t),t[o]=u)}}else t=n.shallowCopyForMerge(t),t[o]=r[o]}),t):r},e.prototype.shallowCopyForMerge=function(t){return me(t)&&(this.pastCopies.has(t)||(Array.isArray(t)?t=t.slice(0):t=C({__proto__:Object.getPrototypeOf(t)},t),this.pastCopies.add(t))),t},e})();function Bm(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=Vm(e))||t){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vm(e,t){if(e){if(typeof e=="string")return Lu(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Lu(e,t)}}function Lu(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ju(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ua(e,t,r){return t&&ju(e.prototype,t),r&&ju(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var ca=function(){return typeof Symbol=="function"},la=function(e){return ca()&&!!Symbol[e]},fa=function(e){return la(e)?Symbol[e]:"@@"+e};ca()&&!la("observable")&&(Symbol.observable=Symbol("observable"));var Gm=fa("iterator"),da=fa("observable"),Uu=fa("species");function Sn(e,t){var r=e[t];if(r!=null){if(typeof r!="function")throw new TypeError(r+" is not a function");return r}}function Or(e){var t=e.constructor;return t!==void 0&&(t=t[Uu],t===null&&(t=void 0)),t!==void 0?t:ce}function zm(e){return e instanceof ce}function Yt(e){Yt.log?Yt.log(e):setTimeout(function(){throw e})}function _n(e){Promise.resolve().then(function(){try{e()}catch(t){Yt(t)}})}function qu(e){var t=e._cleanup;if(t!==void 0&&(e._cleanup=void 0,!!t))try{if(typeof t=="function")t();else{var r=Sn(t,"unsubscribe");r&&r.call(t)}}catch(n){Yt(n)}}function pa(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function Qm(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var r=0;r<t.length&&(Bu(e,t[r].type,t[r].value),e._state!=="closed");++r);}}function Bu(e,t,r){e._state="running";var n=e._observer;try{var i=Sn(n,t);switch(t){case"next":i&&i.call(n,r);break;case"error":if(pa(e),i)i.call(n,r);else throw r;break;case"complete":pa(e),i&&i.call(n);break}}catch(a){Yt(a)}e._state==="closed"?qu(e):e._state==="running"&&(e._state="ready")}function ha(e,t,r){if(e._state!=="closed"){if(e._state==="buffering"){e._queue.push({type:t,value:r});return}if(e._state!=="ready"){e._state="buffering",e._queue=[{type:t,value:r}],_n(function(){return Qm(e)});return}Bu(e,t,r)}}var Wm=(function(){function e(r,n){this._cleanup=void 0,this._observer=r,this._queue=void 0,this._state="initializing";var i=new Ym(this);try{this._cleanup=n.call(void 0,i)}catch(a){i.error(a)}this._state==="initializing"&&(this._state="ready")}var t=e.prototype;return t.unsubscribe=function(){this._state!=="closed"&&(pa(this),qu(this))},ua(e,[{key:"closed",get:function(){return this._state==="closed"}}]),e})(),Ym=(function(){function e(r){this._subscription=r}var t=e.prototype;return t.next=function(n){ha(this._subscription,"next",n)},t.error=function(n){ha(this._subscription,"error",n)},t.complete=function(){ha(this._subscription,"complete")},ua(e,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),e})(),ce=(function(){function e(r){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if(typeof r!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=r}var t=e.prototype;return t.subscribe=function(n){return(typeof n!="object"||n===null)&&(n={next:n,error:arguments[1],complete:arguments[2]}),new Wm(n,this._subscriber)},t.forEach=function(n){var i=this;return new Promise(function(a,o){if(typeof n!="function"){o(new TypeError(n+" is not a function"));return}function s(){u.unsubscribe(),a()}var u=i.subscribe({next:function(c){try{n(c,s)}catch(l){o(l),u.unsubscribe()}},error:o,complete:a})})},t.map=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=Or(this);return new a(function(o){return i.subscribe({next:function(s){try{s=n(s)}catch(u){return o.error(u)}o.next(s)},error:function(s){o.error(s)},complete:function(){o.complete()}})})},t.filter=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=Or(this);return new a(function(o){return i.subscribe({next:function(s){try{if(!n(s))return}catch(u){return o.error(u)}o.next(s)},error:function(s){o.error(s)},complete:function(){o.complete()}})})},t.reduce=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=Or(this),o=arguments.length>1,s=!1,u=arguments[1],c=u;return new a(function(l){return i.subscribe({next:function(d){var f=!s;if(s=!0,!f||o)try{c=n(c,d)}catch(p){return l.error(p)}else c=d},error:function(d){l.error(d)},complete:function(){if(!s&&!o)return l.error(new TypeError("Cannot reduce an empty sequence"));l.next(c),l.complete()}})})},t.concat=function(){for(var n=this,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];var s=Or(this);return new s(function(u){var c,l=0;function d(f){c=f.subscribe({next:function(p){u.next(p)},error:function(p){u.error(p)},complete:function(){l===a.length?(c=void 0,u.complete()):d(s.from(a[l++]))}})}return d(n),function(){c&&(c.unsubscribe(),c=void 0)}})},t.flatMap=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=Or(this);return new a(function(o){var s=[],u=i.subscribe({next:function(l){if(n)try{l=n(l)}catch(f){return o.error(f)}var d=a.from(l).subscribe({next:function(f){o.next(f)},error:function(f){o.error(f)},complete:function(){var f=s.indexOf(d);f>=0&&s.splice(f,1),c()}});s.push(d)},error:function(l){o.error(l)},complete:function(){c()}});function c(){u.closed&&s.length===0&&o.complete()}return function(){s.forEach(function(l){return l.unsubscribe()}),u.unsubscribe()}})},t[da]=function(){return this},e.from=function(n){var i=typeof this=="function"?this:e;if(n==null)throw new TypeError(n+" is not an object");var a=Sn(n,da);if(a){var o=a.call(n);if(Object(o)!==o)throw new TypeError(o+" is not an object");return zm(o)&&o.constructor===i?o:new i(function(s){return o.subscribe(s)})}if(la("iterator")&&(a=Sn(n,Gm),a))return new i(function(s){_n(function(){if(!s.closed){for(var u=Bm(a.call(n)),c;!(c=u()).done;){var l=c.value;if(s.next(l),s.closed)return}s.complete()}})});if(Array.isArray(n))return new i(function(s){_n(function(){if(!s.closed){for(var u=0;u<n.length;++u)if(s.next(n[u]),s.closed)return;s.complete()}})});throw new TypeError(n+" is not observable")},e.of=function(){for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];var o=typeof this=="function"?this:e;return new o(function(s){_n(function(){if(!s.closed){for(var u=0;u<i.length;++u)if(s.next(i[u]),s.closed)return;s.complete()}})})},ua(e,null,[{key:Uu,get:function(){return this}}]),e})();ca()&&Object.defineProperty(ce,Symbol("extensions"),{value:{symbol:da,hostReportError:Yt},configurable:!0});function Hm(e){var t,r=e.Symbol;if(typeof r=="function")if(r.observable)t=r.observable;else{typeof r.for=="function"?t=r.for("https://github.com/benlesh/symbol-observable"):t=r("https://github.com/benlesh/symbol-observable");try{r.observable=t}catch{}}else t="@@observable";return t}var Ht;typeof self<"u"?Ht=self:typeof window<"u"?Ht=window:typeof global<"u"?Ht=global:typeof module<"u"?Ht=module:Ht=Function("return this")(),Hm(Ht);var Vu=ce.prototype,Gu="@@observable";Vu[Gu]||(Vu[Gu]=function(){return this});function Jm(e){return e.catch(function(){}),e}var Km=Object.prototype.toString;function zu(e){return ma(e)}function ma(e,t){switch(Km.call(e)){case"[object Array]":{if(t=t||new Map,t.has(e))return t.get(e);var r=e.slice(0);return t.set(e,r),r.forEach(function(i,a){r[a]=ma(i,t)}),r}case"[object Object]":{if(t=t||new Map,t.has(e))return t.get(e);var n=Object.create(Object.getPrototypeOf(e));return t.set(e,n),Object.keys(e).forEach(function(i){n[i]=ma(e[i],t)}),n}default:return e}}function Xm(e){var t=new Set([e]);return t.forEach(function(r){me(r)&&Zm(r)===r&&Object.getOwnPropertyNames(r).forEach(function(n){me(r[n])&&t.add(r[n])})}),e}function Zm(e){if(globalThis.__DEV__!==!1&&!Object.isFrozen(e))try{Object.freeze(e)}catch(t){if(t instanceof TypeError)return null;throw t}return e}function wn(e){return globalThis.__DEV__!==!1&&Xm(e),e}function xr(e,t,r){var n=[];e.forEach(function(i){return i[t]&&n.push(i)}),n.forEach(function(i){return i[t](r)})}function ga(e,t,r){return new ce(function(n){var i={then:function(u){return new Promise(function(c){return c(u())})}};function a(u,c){return function(l){if(u){var d=function(){return n.closed?0:u(l)};i=i.then(d,d).then(function(f){return n.next(f)},function(f){return n.error(f)})}else n[c](l)}}var o={next:a(t,"next"),error:a(r,"error"),complete:function(){i.then(function(){return n.complete()})}},s=e.subscribe(o);return function(){return s.unsubscribe()}})}function Qu(e){function t(r){Object.defineProperty(e,r,{value:ce})}return au&&Symbol.species&&t(Symbol.species),t("@@species"),e}function Wu(e){return e&&typeof e.then=="function"}var Jt=(function(e){Re(t,e);function t(r){var n=e.call(this,function(i){return n.addObserver(i),function(){return n.removeObserver(i)}})||this;return n.observers=new Set,n.promise=new Promise(function(i,a){n.resolve=i,n.reject=a}),n.handlers={next:function(i){n.sub!==null&&(n.latest=["next",i],n.notify("next",i),xr(n.observers,"next",i))},error:function(i){var a=n.sub;a!==null&&(a&&setTimeout(function(){return a.unsubscribe()}),n.sub=null,n.latest=["error",i],n.reject(i),n.notify("error",i),xr(n.observers,"error",i))},complete:function(){var i=n,a=i.sub,o=i.sources,s=o===void 0?[]:o;if(a!==null){var u=s.shift();u?Wu(u)?u.then(function(c){return n.sub=c.subscribe(n.handlers)},n.handlers.error):n.sub=u.subscribe(n.handlers):(a&&setTimeout(function(){return a.unsubscribe()}),n.sub=null,n.latest&&n.latest[0]==="next"?n.resolve(n.latest[1]):n.resolve(),n.notify("complete"),xr(n.observers,"complete"))}}},n.nextResultListeners=new Set,n.cancel=function(i){n.reject(i),n.sources=[],n.handlers.error(i)},n.promise.catch(function(i){}),typeof r=="function"&&(r=[new ce(r)]),Wu(r)?r.then(function(i){return n.start(i)},n.handlers.error):n.start(r),n}return t.prototype.start=function(r){this.sub===void 0&&(this.sources=Array.from(r),this.handlers.complete())},t.prototype.deliverLastMessage=function(r){if(this.latest){var n=this.latest[0],i=r[n];i&&i.call(r,this.latest[1]),this.sub===null&&n==="next"&&r.complete&&r.complete()}},t.prototype.addObserver=function(r){this.observers.has(r)||(this.deliverLastMessage(r),this.observers.add(r))},t.prototype.removeObserver=function(r){this.observers.delete(r)&&this.observers.size<1&&this.handlers.complete()},t.prototype.notify=function(r,n){var i=this.nextResultListeners;i.size&&(this.nextResultListeners=new Set,i.forEach(function(a){return a(r,n)}))},t.prototype.beforeNext=function(r){var n=!1;this.nextResultListeners.add(function(i,a){n||(n=!0,r(i,a))})},t})(ce);Qu(Jt);function Kt(e){return"incremental"in e}function eg(e){return"hasNext"in e&&"data"in e}function tg(e){return Kt(e)||eg(e)}function rg(e){return me(e)&&"payload"in e}function Yu(e,t){var r=e,n=new pt;return Kt(t)&&ze(t.incremental)&&t.incremental.forEach(function(i){for(var a=i.data,o=i.path,s=o.length-1;s>=0;--s){var u=o[s],c=!isNaN(+u),l=c?[]:{};l[u]=a,a=l}r=n.merge(r,a)}),r}function En(e){var t=ya(e);return ze(t)}function ya(e){var t=ze(e.errors)?e.errors.slice(0):[];return Kt(e)&&ze(e.incremental)&&e.incremental.forEach(function(r){r.errors&&t.push.apply(t,r.errors)}),t}function Xt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=Object.create(null);return e.forEach(function(n){n&&Object.keys(n).forEach(function(i){var a=n[i];a!==void 0&&(r[i]=a)})}),r}function va(e,t){return Xt(e,t,t.variables&&{variables:Xt(C(C({},e&&e.variables),t.variables))})}function ba(e){return new ce(function(t){t.error(e)})}var Hu=function(e,t,r){var n=new Error(r);throw n.name="ServerError",n.response=e,n.statusCode=e.status,n.result=t,n};function ng(e){for(var t=["query","operationName","variables","extensions","context"],r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];if(t.indexOf(i)<0)throw Ae(46,i)}return e}function ig(e,t){var r=C({},e),n=function(a){typeof a=="function"?r=C(C({},r),a(r)):r=C(C({},r),a)},i=function(){return C({},r)};return Object.defineProperty(t,"setContext",{enumerable:!1,value:n}),Object.defineProperty(t,"getContext",{enumerable:!1,value:i}),t}function ag(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName=typeof t.query!="string"?Er(t.query)||void 0:""),t}function og(e,t){var r=C({},e),n=new Set(Object.keys(e));return Le(t,{Variable:function(i,a,o){o&&o.kind!=="VariableDefinition"&&n.delete(i.name.value)}}),n.forEach(function(i){delete r[i]}),r}function Ju(e,t){return t?t(e):ce.of()}function Ar(e){return typeof e=="function"?new Ue(e):e}function Dn(e){return e.request.length<=1}var Ue=(function(){function e(t){t&&(this.request=t)}return e.empty=function(){return new e(function(){return ce.of()})},e.from=function(t){return t.length===0?e.empty():t.map(Ar).reduce(function(r,n){return r.concat(n)})},e.split=function(t,r,n){var i=Ar(r),a=Ar(n||new e(Ju)),o;return Dn(i)&&Dn(a)?o=new e(function(s){return t(s)?i.request(s)||ce.of():a.request(s)||ce.of()}):o=new e(function(s,u){return t(s)?i.request(s,u)||ce.of():a.request(s,u)||ce.of()}),Object.assign(o,{left:i,right:a})},e.execute=function(t,r){return t.request(ig(r.context,ag(ng(r))))||ce.of()},e.concat=function(t,r){var n=Ar(t);if(Dn(n))return globalThis.__DEV__!==!1&&K.warn(38,n),n;var i=Ar(r),a;return Dn(i)?a=new e(function(o){return n.request(o,function(s){return i.request(s)||ce.of()})||ce.of()}):a=new e(function(o,s){return n.request(o,function(u){return i.request(u,s)||ce.of()})||ce.of()}),Object.assign(a,{left:n,right:i})},e.prototype.split=function(t,r,n){return this.concat(e.split(t,r,n||new e(Ju)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(t,r){throw Ae(39)},e.prototype.onError=function(t,r){if(r&&r.error)return r.error(t),!1;throw t},e.prototype.setOnError=function(t){return this.onError=t,this},e})(),sg=Ue.from,ug=Ue.split,Sa=Ue.execute;function cg(e){var t,r=e[Symbol.asyncIterator]();return t={next:function(){return r.next()}},t[Symbol.asyncIterator]=function(){return this},t}function lg(e){var t=null,r=null,n=!1,i=[],a=[];function o(d){if(!r){if(a.length){var f=a.shift();if(Array.isArray(f)&&f[0])return f[0]({value:d,done:!1})}i.push(d)}}function s(d){r=d;var f=a.slice();f.forEach(function(p){p[1](d)}),!t||t()}function u(){n=!0;var d=a.slice();d.forEach(function(f){f[0]({value:void 0,done:!0})}),!t||t()}t=function(){t=null,e.removeListener("data",o),e.removeListener("error",s),e.removeListener("end",u),e.removeListener("finish",u),e.removeListener("close",u)},e.on("data",o),e.on("error",s),e.on("end",u),e.on("finish",u),e.on("close",u);function c(){return new Promise(function(d,f){if(r)return f(r);if(i.length)return d({value:i.shift(),done:!1});if(n)return d({value:void 0,done:!0});a.push([d,f])})}var l={next:function(){return c()}};return pn&&(l[Symbol.asyncIterator]=function(){return this}),l}function fg(e){var t=!1,r={next:function(){return t?Promise.resolve({value:void 0,done:!0}):(t=!0,new Promise(function(n,i){e.then(function(a){n({value:a,done:!1})}).catch(i)}))}};return pn&&(r[Symbol.asyncIterator]=function(){return this}),r}function Ku(e){var t={next:function(){return e.read()}};return pn&&(t[Symbol.asyncIterator]=function(){return this}),t}function dg(e){return!!e.body}function pg(e){return!!e.getReader}function hg(e){return!!(pn&&e[Symbol.asyncIterator])}function mg(e){return!!e.stream}function gg(e){return!!e.arrayBuffer}function yg(e){return!!e.pipe}function vg(e){var t=e;if(dg(e)&&(t=e.body),hg(t))return cg(t);if(pg(t))return Ku(t.getReader());if(mg(t))return Ku(t.stream().getReader());if(gg(t))return fg(t.arrayBuffer());if(yg(t))return lg(t);throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")}var In=Symbol();function Xu(e){return e.extensions?Array.isArray(e.extensions[In]):!1}function Zu(e){return e.hasOwnProperty("graphQLErrors")}var bg=function(e){var t=Oe(Oe(Oe([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(r){return me(r)&&r.message||"Error message not found."}).join(`
`)},ht=(function(e){Re(t,e);function t(r){var n=r.graphQLErrors,i=r.protocolErrors,a=r.clientErrors,o=r.networkError,s=r.errorMessage,u=r.extraInfo,c=e.call(this,s)||this;return c.name="ApolloError",c.graphQLErrors=n||[],c.protocolErrors=i||[],c.clientErrors=a||[],c.networkError=o||null,c.message=s||bg(c),c.extraInfo=u,c.cause=Oe(Oe(Oe([o],n||[],!0),i||[],!0),a||[],!0).find(function(l){return!!l})||null,c.__proto__=t.prototype,c}return t})(Error),ec=Object.prototype.hasOwnProperty;function Sg(e,t){return ot(this,void 0,void 0,function(){var r,n,i,a,o,s,u,c,l,d,f,p,y,S,h,g,_,I,k,$,E,x,v,D;return st(this,function(b){switch(b.label){case 0:if(TextDecoder===void 0)throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");r=new TextDecoder("utf-8"),n=(D=e.headers)===null||D===void 0?void 0:D.get("content-type"),i="boundary=",a=n?.includes(i)?n?.substring(n?.indexOf(i)+i.length).replace(/['"]/g,"").replace(/\;(.*)/gm,"").trim():"-",o=`\r
--`.concat(a),s="",u=vg(e),c=!0,b.label=1;case 1:return c?[4,u.next()]:[3,3];case 2:for(l=b.sent(),d=l.value,f=l.done,p=typeof d=="string"?d:r.decode(d),y=s.length-o.length+1,c=!f,s+=p,S=s.indexOf(o,y);S>-1;){if(h=void 0,x=[s.slice(0,S),s.slice(S+o.length)],h=x[0],s=x[1],g=h.indexOf(`\r
\r
`),_=_g(h.slice(0,g)),I=_["content-type"],I&&I.toLowerCase().indexOf("application/json")===-1)throw new Error("Unsupported patch content type: application/json is required.");if(k=h.slice(g),k){if($=tc(e,k),Object.keys($).length>1||"data"in $||"incremental"in $||"errors"in $||"payload"in $)if(rg($)){if(E={},"payload"in $){if(Object.keys($).length===1&&$.payload===null)return[2];E=C({},$.payload)}"errors"in $&&(E=C(C({},E),{extensions:C(C({},"extensions"in E?E.extensions:null),(v={},v[In]=$.errors,v))})),t(E)}else t($);else if(Object.keys($).length===1&&"hasNext"in $&&!$.hasNext)return[2]}S=s.indexOf(o)}return[3,1];case 3:return[2]}})})}function _g(e){var t={};return e.split(`
`).forEach(function(r){var n=r.indexOf(":");if(n>-1){var i=r.slice(0,n).trim().toLowerCase(),a=r.slice(n+1).trim();t[i]=a}}),t}function tc(e,t){if(e.status>=300){var r=function(){try{return JSON.parse(t)}catch{return t}};Hu(e,r(),"Response not successful: Received status code ".concat(e.status))}try{return JSON.parse(t)}catch(i){var n=i;throw n.name="ServerParseError",n.response=e,n.statusCode=e.status,n.bodyText=t,n}}function wg(e,t){e.result&&e.result.errors&&e.result.data&&t.next(e.result),t.error(e)}function rc(e){return function(t){return t.text().then(function(r){return tc(t,r)}).then(function(r){return!Array.isArray(r)&&!ec.call(r,"data")&&!ec.call(r,"errors")&&Hu(t,r,"Server response was missing for query '".concat(Array.isArray(e)?e.map(function(n){return n.operationName}):e.operationName,"'.")),r})}}var Cr=function(e,t){var r;try{r=JSON.stringify(e)}catch(i){var n=Ae(42,t,i.message);throw n.parseError=i,n}return r},Eg={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},Dg={accept:"*/*","content-type":"application/json"},Ig={method:"POST"},nc={http:Eg,headers:Dg,options:Ig},ic=function(e,t){return t(e)};function ac(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i={},a={};r.forEach(function(d){i=C(C(C({},i),d.options),{headers:C(C({},i.headers),d.headers)}),d.credentials&&(i.credentials=d.credentials),a=C(C({},a),d.http)}),i.headers&&(i.headers=Tg(i.headers,a.preserveHeaderCase));var o=e.operationName,s=e.extensions,u=e.variables,c=e.query,l={operationName:o,variables:u};return a.includeExtensions&&(l.extensions=s),a.includeQuery&&(l.query=t(c,dt)),{options:i,body:l}}function Tg(e,t){if(!t){var r={};return Object.keys(Object(e)).forEach(function(a){r[a.toLowerCase()]=e[a]}),r}var n={};Object.keys(Object(e)).forEach(function(a){n[a.toLowerCase()]={originalName:a,value:e[a]}});var i={};return Object.keys(n).forEach(function(a){i[n[a].originalName]=n[a].value}),i}var kg=function(e){if(!e&&typeof fetch>"u")throw Ae(40)},Og=function(){if(typeof AbortController>"u")return{controller:!1,signal:!1};var e=new AbortController,t=e.signal;return{controller:e,signal:t}},oc=function(e,t){var r=e.getContext(),n=r.uri;return n||(typeof t=="function"?t(e):t||"/graphql")};function sc(e,t){var r=[],n=function(d,f){r.push("".concat(d,"=").concat(encodeURIComponent(f)))};if("query"in t&&n("query",t.query),t.operationName&&n("operationName",t.operationName),t.variables){var i=void 0;try{i=Cr(t.variables,"Variables map")}catch(d){return{parseError:d}}n("variables",i)}if(t.extensions){var a=void 0;try{a=Cr(t.extensions,"Extensions map")}catch(d){return{parseError:d}}n("extensions",a)}var o="",s=e,u=e.indexOf("#");u!==-1&&(o=e.substr(u),s=e.substr(0,u));var c=s.indexOf("?")===-1?"?":"&",l=s+c+r.join("&")+o;return{newURI:l}}var uc=Me(function(){return fetch}),xg=function(e){e===void 0&&(e={});var t=e.uri,r=t===void 0?"/graphql":t,n=e.fetch,i=e.print,a=i===void 0?ic:i,o=e.includeExtensions,s=e.preserveHeaderCase,u=e.useGETForQueries,c=e.includeUnusedVariables,l=c===void 0?!1:c,d=Je(e,["uri","fetch","print","includeExtensions","preserveHeaderCase","useGETForQueries","includeUnusedVariables"]);globalThis.__DEV__!==!1&&kg(n||uc);var f={http:{includeExtensions:o,preserveHeaderCase:s},options:d.fetchOptions,credentials:d.credentials,headers:d.headers};return new Ue(function(p){var y=oc(p,r),S=p.getContext(),h={};if(S.clientAwareness){var g=S.clientAwareness,_=g.name,I=g.version;_&&(h["apollographql-client-name"]=_),I&&(h["apollographql-client-version"]=I)}var k=C(C({},h),S.headers),$={http:S.http,options:S.fetchOptions,credentials:S.credentials,headers:k};if(_r(["client"],p.query)){var E=Ru(p.query);if(!E)return ba(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));p.query=E}var x=ac(p,a,nc,f,$),v=x.options,D=x.body;D.variables&&!l&&(D.variables=og(D.variables,p.query));var b;!v.signal&&typeof AbortController<"u"&&(b=new AbortController,v.signal=b.signal);var A=function(M){return M.kind==="OperationDefinition"&&M.operation==="mutation"},P=function(M){return M.kind==="OperationDefinition"&&M.operation==="subscription"},Q=P(Qt(p.query)),J=_r(["defer"],p.query);if(u&&!p.query.definitions.some(A)&&(v.method="GET"),J||Q){v.headers=v.headers||{};var j="multipart/mixed;";Q&&J&&globalThis.__DEV__!==!1&&K.warn(41),Q?j+="boundary=graphql;subscriptionSpec=1.0,application/json":J&&(j+="deferSpec=20220824,application/json"),v.headers.accept=j}if(v.method==="GET"){var q=sc(y,D),O=q.newURI,N=q.parseError;if(N)return ba(N);y=O}else try{v.body=Cr(D,"Payload")}catch(M){return ba(M)}return new ce(function(M){var W=n||Me(function(){return fetch})||uc,Y=M.next.bind(M);return W(y,v).then(function(ee){var ie;p.setContext({response:ee});var se=(ie=ee.headers)===null||ie===void 0?void 0:ie.get("content-type");return se!==null&&/^multipart\/mixed/i.test(se)?Sg(ee,Y):rc(p)(ee).then(Y)}).then(function(){b=void 0,M.complete()}).catch(function(ee){b=void 0,wg(ee,M)}),function(){b&&b.abort()}})})},Ag=(function(e){Re(t,e);function t(r){r===void 0&&(r={});var n=e.call(this,xg(r).request)||this;return n.options=r,n}return t})(Ue);const{toString:cc,hasOwnProperty:Cg}=Object.prototype,lc=Function.prototype.toString,_a=new Map;function pe(e,t){try{return wa(e,t)}finally{_a.clear()}}function wa(e,t){if(e===t)return!0;const r=cc.call(e),n=cc.call(t);if(r!==n)return!1;switch(r){case"[object Array]":if(e.length!==t.length)return!1;case"[object Object]":{if(dc(e,t))return!0;const i=fc(e),a=fc(t),o=i.length;if(o!==a.length)return!1;for(let s=0;s<o;++s)if(!Cg.call(t,i[s]))return!1;for(let s=0;s<o;++s){const u=i[s];if(!wa(e[u],t[u]))return!1}return!0}case"[object Error]":return e.name===t.name&&e.message===t.message;case"[object Number]":if(e!==e)return t!==t;case"[object Boolean]":case"[object Date]":return+e==+t;case"[object RegExp]":case"[object String]":return e==`${t}`;case"[object Map]":case"[object Set]":{if(e.size!==t.size)return!1;if(dc(e,t))return!0;const i=e.entries(),a=r==="[object Map]";for(;;){const o=i.next();if(o.done)break;const[s,u]=o.value;if(!t.has(s)||a&&!wa(u,t.get(s)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":e=new Uint8Array(e),t=new Uint8Array(t);case"[object DataView]":{let i=e.byteLength;if(i===t.byteLength)for(;i--&&e[i]===t[i];);return i===-1}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{const i=lc.call(e);return i!==lc.call(t)?!1:!Pg(i,$g)}}return!1}function fc(e){return Object.keys(e).filter(Fg,e)}function Fg(e){return this[e]!==void 0}const $g="{ [native code] }";function Pg(e,t){const r=e.length-t.length;return r>=0&&e.indexOf(t,r)===r}function dc(e,t){let r=_a.get(e);if(r){if(r.has(t))return!0}else _a.set(e,r=new Set);return r.add(t),!1}function pc(e,t,r,n){var i=t.data,a=Je(t,["data"]),o=r.data,s=Je(r,["data"]);return pe(a,s)&&Tn(Qt(e).selectionSet,i,o,{fragmentMap:Ut(zt(e)),variables:n})}function Tn(e,t,r,n){if(t===r)return!0;var i=new Set;return e.selections.every(function(a){if(i.has(a)||(i.add(a),!Sr(a,n.variables))||hc(a))return!0;if(lt(a)){var o=Ze(a),s=t&&t[o],u=r&&r[o],c=a.selectionSet;if(!c)return pe(s,u);var l=Array.isArray(s),d=Array.isArray(u);if(l!==d)return!1;if(l&&d){var f=s.length;if(u.length!==f)return!1;for(var p=0;p<f;++p)if(!Tn(c,s[p],u[p],n))return!1;return!0}return Tn(c,s,u,n)}else{var y=hn(a,n.fragmentMap);if(y)return hc(y)?!0:Tn(y.selectionSet,t,r,n)}})}function hc(e){return!!e.directives&&e.directives.some(Ng)}function Ng(e){return e.name.value==="nonreactive"}var mc=Tt?WeakMap:Map,gc=Yi?WeakSet:Set,Ea=new Dr,yc=!1;function vc(){yc||(yc=!0,globalThis.__DEV__!==!1&&K.warn(52))}function bc(e,t,r){return Ea.withValue(!0,function(){var n=Fr(e,t,r,!1);return Object.isFrozen(e)&&wn(n),n})}function Rg(e,t){if(t.has(e))return t.get(e);var r=Array.isArray(e)?[]:Object.create(null);return t.set(e,r),r}function Fr(e,t,r,n,i){var a,o=r.knownChanged,s=Rg(e,r.mutableTargets);if(Array.isArray(e)){for(var u=0,c=Array.from(e.entries());u<c.length;u++){var l=c[u],d=l[0],f=l[1];if(f===null){s[d]=null;continue}var p=Fr(f,t,r,n,globalThis.__DEV__!==!1?"".concat(i||"","[").concat(d,"]"):void 0);o.has(p)&&o.add(s),s[d]=p}return o.has(s)?s:e}for(var y=0,S=t.selections;y<S.length;y++){var h=S[y],g=void 0;if(n&&o.add(s),h.kind===G.FIELD){var _=Ze(h),I=h.selectionSet;if(g=s[_]||e[_],g===void 0)continue;if(I&&g!==null){var p=Fr(e[_],I,r,n,globalThis.__DEV__!==!1?"".concat(i||"",".").concat(_):void 0);o.has(p)&&(g=p)}globalThis.__DEV__===!1&&(s[_]=g),globalThis.__DEV__!==!1&&(n&&_!=="__typename"&&!(!((a=Object.getOwnPropertyDescriptor(s,_))===null||a===void 0)&&a.value)?Object.defineProperty(s,_,Mg(_,g,i||"",r.operationName,r.operationType)):(delete s[_],s[_]=g))}if(h.kind===G.INLINE_FRAGMENT&&(!h.typeCondition||r.cache.fragmentMatches(h,e.__typename))&&(g=Fr(e,h.selectionSet,r,n,i)),h.kind===G.FRAGMENT_SPREAD){var k=h.name.value,$=r.fragmentMap[k]||(r.fragmentMap[k]=r.cache.lookupFragment(k));K($,47,k);var E=qh(h);E!=="mask"&&(g=Fr(e,$.selectionSet,r,E==="migrate",i))}o.has(g)&&o.add(s)}return"__typename"in e&&!("__typename"in s)&&(s.__typename=e.__typename),Object.keys(s).length!==Object.keys(e).length&&o.add(s),o.has(s)?s:e}function Mg(e,t,r,n,i){var a=function(){return Ea.getValue()||(globalThis.__DEV__!==!1&&K.warn(48,n?"".concat(i," '").concat(n,"'"):"anonymous ".concat(i),"".concat(r,".").concat(e).replace(/^\./,"")),a=function(){return t}),t};return{get:function(){return a()},set:function(o){a=function(){return o}},enumerable:!0,configurable:!0}}function Sc(e,t,r,n){if(!r.fragmentMatches)return globalThis.__DEV__!==!1&&vc(),e;var i=t.definitions.filter(function(o){return o.kind===G.FRAGMENT_DEFINITION});typeof n>"u"&&(K(i.length===1,49,i.length),n=i[0].name.value);var a=i.find(function(o){return o.name.value===n});return K(!!a,50,n),e==null||pe(e,{})?e:bc(e,a.selectionSet,{operationType:"fragment",operationName:a.name.value,fragmentMap:Ut(zt(t)),cache:r,mutableTargets:new mc,knownChanged:new gc})}function Lg(e,t,r){var n;if(!r.fragmentMatches)return globalThis.__DEV__!==!1&&vc(),e;var i=Ot(t);return K(i,51),e==null?e:bc(e,i.selectionSet,{operationType:i.operation,operationName:(n=i.name)===null||n===void 0?void 0:n.value,fragmentMap:Ut(zt(t)),cache:r,mutableTargets:new mc,knownChanged:new gc})}var _c=(function(){function e(){this.assumeImmutableResults=!1,this.getFragmentDoc=Tr(Wh,{max:Xe["cache.fragmentQueryDocuments"]||1e3,cache:mn})}return e.prototype.lookupFragment=function(t){return null},e.prototype.batch=function(t){var r=this,n=typeof t.optimistic=="string"?t.optimistic:t.optimistic===!1?null:void 0,i;return this.performTransaction(function(){return i=t.update(r)},n),i},e.prototype.recordOptimisticTransaction=function(t,r){this.performTransaction(t,r)},e.prototype.transformDocument=function(t){return t},e.prototype.transformForLink=function(t){return t},e.prototype.identify=function(t){},e.prototype.gc=function(){return[]},e.prototype.modify=function(t){return!1},e.prototype.readQuery=function(t,r){return r===void 0&&(r=!!t.optimistic),this.read(C(C({},t),{rootId:t.id||"ROOT_QUERY",optimistic:r}))},e.prototype.watchFragment=function(t){var r=this,n=t.fragment,i=t.fragmentName,a=t.from,o=t.optimistic,s=o===void 0?!0:o,u=Je(t,["fragment","fragmentName","from","optimistic"]),c=this.getFragmentDoc(n,i),l=typeof a>"u"||typeof a=="string"?a:this.identify(a),d=!!t[Symbol.for("apollo.dataMasking")];if(globalThis.__DEV__!==!1){var f=i||hu(n).name.value;l||globalThis.__DEV__!==!1&&K.warn(1,f)}var p=C(C({},u),{returnPartialData:!0,id:l,query:c,optimistic:s}),y;return new ce(function(S){return r.watch(C(C({},p),{immediate:!0,callback:function(h){var g=d?Sc(h.result,n,r,i):h.result;if(!(y&&pc(c,{data:y.result},{data:g},t.variables))){var _={data:g,complete:!!h.complete};h.missing&&(_.missing=bn(h.missing.map(function(I){return I.missing}))),y=C(C({},h),{result:g}),S.next(_)}}}))})},e.prototype.readFragment=function(t,r){return r===void 0&&(r=!!t.optimistic),this.read(C(C({},t),{query:this.getFragmentDoc(t.fragment,t.fragmentName),rootId:t.id,optimistic:r}))},e.prototype.writeQuery=function(t){var r=t.id,n=t.data,i=Je(t,["id","data"]);return this.write(Object.assign(i,{dataId:r||"ROOT_QUERY",result:n}))},e.prototype.writeFragment=function(t){var r=t.id,n=t.data,i=t.fragment,a=t.fragmentName,o=Je(t,["id","data","fragment","fragmentName"]);return this.write(Object.assign(o,{query:this.getFragmentDoc(i,a),dataId:r,result:n}))},e.prototype.updateQuery=function(t,r){return this.batch({update:function(n){var i=n.readQuery(t),a=r(i);return a==null?i:(n.writeQuery(C(C({},t),{data:a})),a)}})},e.prototype.updateFragment=function(t,r){return this.batch({update:function(n){var i=n.readFragment(t),a=r(i);return a==null?i:(n.writeFragment(C(C({},t),{data:a})),a)}})},e})();globalThis.__DEV__!==!1&&(_c.prototype.getMemoryInternals=am);var wc=(function(e){Re(t,e);function t(r,n,i,a){var o,s=e.call(this,r)||this;if(s.message=r,s.path=n,s.query=i,s.variables=a,Array.isArray(s.path)){s.missing=s.message;for(var u=s.path.length-1;u>=0;--u)s.missing=(o={},o[s.path[u]]=s.missing,o)}else s.missing=s.path;return s.__proto__=t.prototype,s}return t})(Error),Ee=Object.prototype.hasOwnProperty;function $r(e){return e==null}function Ec(e,t){var r=e.__typename,n=e.id,i=e._id;if(typeof r=="string"&&(t&&(t.keyObject=$r(n)?$r(i)?void 0:{_id:i}:{id:n}),$r(n)&&!$r(i)&&(n=i),!$r(n)))return"".concat(r,":").concat(typeof n=="number"||typeof n=="string"?n:JSON.stringify(n))}var Dc={dataIdFromObject:Ec,addTypename:!0,resultCaching:!0,canonizeResults:!1};function jg(e){return Xt(Dc,e)}function Ic(e){var t=e.canonizeResults;return t===void 0?Dc.canonizeResults:t}function Ug(e,t){return ue(t)?e.get(t.__ref,"__typename"):t&&t.__typename}var Tc=/^[_a-z][_0-9a-z]*/i;function mt(e){var t=e.match(Tc);return t?t[0]:e}function Da(e,t,r){return me(t)?ge(t)?t.every(function(n){return Da(e,n,r)}):e.selections.every(function(n){if(lt(n)&&Sr(n,r)){var i=Ze(n);return Ee.call(t,i)&&(!n.selectionSet||Da(n.selectionSet,t[i],r))}return!0}):!1}function Zt(e){return me(e)&&!ue(e)&&!ge(e)}function qg(){return new pt}function kc(e,t){var r=Ut(zt(e));return{fragmentMap:r,lookupFragment:function(n){var i=r[n];return!i&&t&&(i=t.lookup(n)),i||null}}}var kn=Object.create(null),Ia=function(){return kn},Oc=Object.create(null),Pr=(function(){function e(t,r){var n=this;this.policies=t,this.group=r,this.data=Object.create(null),this.rootIds=Object.create(null),this.refs=Object.create(null),this.getFieldValue=function(i,a){return wn(ue(i)?n.get(i.__ref,a):i&&i[a])},this.canRead=function(i){return ue(i)?n.has(i.__ref):typeof i=="object"},this.toReference=function(i,a){if(typeof i=="string")return Bt(i);if(ue(i))return i;var o=n.policies.identify(i)[0];if(o){var s=Bt(o);return a&&n.merge(o,i),s}}}return e.prototype.toObject=function(){return C({},this.data)},e.prototype.has=function(t){return this.lookup(t,!0)!==void 0},e.prototype.get=function(t,r){if(this.group.depend(t,r),Ee.call(this.data,t)){var n=this.data[t];if(n&&Ee.call(n,r))return n[r]}if(r==="__typename"&&Ee.call(this.policies.rootTypenamesById,t))return this.policies.rootTypenamesById[t];if(this instanceof gt)return this.parent.get(t,r)},e.prototype.lookup=function(t,r){if(r&&this.group.depend(t,"__exists"),Ee.call(this.data,t))return this.data[t];if(this instanceof gt)return this.parent.lookup(t,r);if(this.policies.rootTypenamesById[t])return Object.create(null)},e.prototype.merge=function(t,r){var n=this,i;ue(t)&&(t=t.__ref),ue(r)&&(r=r.__ref);var a=typeof t=="string"?this.lookup(i=t):t,o=typeof r=="string"?this.lookup(i=r):r;if(o){K(typeof i=="string",2);var s=new pt(Vg).merge(a,o);if(this.data[i]=s,s!==a&&(delete this.refs[i],this.group.caching)){var u=Object.create(null);a||(u.__exists=1),Object.keys(o).forEach(function(c){if(!a||a[c]!==s[c]){u[c]=1;var l=mt(c);l!==c&&!n.policies.hasKeyArgs(s.__typename,l)&&(u[l]=1),s[c]===void 0&&!(n instanceof gt)&&delete s[c]}}),u.__typename&&!(a&&a.__typename)&&this.policies.rootTypenamesById[i]===s.__typename&&delete u.__typename,Object.keys(u).forEach(function(c){return n.group.dirty(i,c)})}}},e.prototype.modify=function(t,r){var n=this,i=this.lookup(t);if(i){var a=Object.create(null),o=!1,s=!0,u={DELETE:kn,INVALIDATE:Oc,isReference:ue,toReference:this.toReference,canRead:this.canRead,readField:function(c,l){return n.policies.readField(typeof c=="string"?{fieldName:c,from:l||Bt(t)}:c,{store:n})}};if(Object.keys(i).forEach(function(c){var l=mt(c),d=i[c];if(d!==void 0){var f=typeof r=="function"?r:r[c]||r[l];if(f){var p=f===Ia?kn:f(wn(d),C(C({},u),{fieldName:l,storeFieldName:c,storage:n.getStorage(t,c)}));if(p===Oc)n.group.dirty(t,c);else if(p===kn&&(p=void 0),p!==d&&(a[c]=p,o=!0,d=p,globalThis.__DEV__!==!1)){var y=function($){if(n.lookup($.__ref)===void 0)return globalThis.__DEV__!==!1&&K.warn(3,$),!0};if(ue(p))y(p);else if(Array.isArray(p))for(var S=!1,h=void 0,g=0,_=p;g<_.length;g++){var I=_[g];if(ue(I)){if(S=!0,y(I))break}else if(typeof I=="object"&&I){var k=n.policies.identify(I)[0];k&&(h=I)}if(S&&h!==void 0){globalThis.__DEV__!==!1&&K.warn(4,h);break}}}}d!==void 0&&(s=!1)}}),o)return this.merge(t,a),s&&(this instanceof gt?this.data[t]=void 0:delete this.data[t],this.group.dirty(t,"__exists")),!0}return!1},e.prototype.delete=function(t,r,n){var i,a=this.lookup(t);if(a){var o=this.getFieldValue(a,"__typename"),s=r&&n?this.policies.getStoreFieldName({typename:o,fieldName:r,args:n}):r;return this.modify(t,s?(i={},i[s]=Ia,i):Ia)}return!1},e.prototype.evict=function(t,r){var n=!1;return t.id&&(Ee.call(this.data,t.id)&&(n=this.delete(t.id,t.fieldName,t.args)),this instanceof gt&&this!==r&&(n=this.parent.evict(t,r)||n),(t.fieldName||n)&&this.group.dirty(t.id,t.fieldName||"__exists")),n},e.prototype.clear=function(){this.replace(null)},e.prototype.extract=function(){var t=this,r=this.toObject(),n=[];return this.getRootIdSet().forEach(function(i){Ee.call(t.policies.rootTypenamesById,i)||n.push(i)}),n.length&&(r.__META={extraRootIds:n.sort()}),r},e.prototype.replace=function(t){var r=this;if(Object.keys(this.data).forEach(function(a){t&&Ee.call(t,a)||r.delete(a)}),t){var n=t.__META,i=Je(t,["__META"]);Object.keys(i).forEach(function(a){r.merge(a,i[a])}),n&&n.extraRootIds.forEach(this.retain,this)}},e.prototype.retain=function(t){return this.rootIds[t]=(this.rootIds[t]||0)+1},e.prototype.release=function(t){if(this.rootIds[t]>0){var r=--this.rootIds[t];return r||delete this.rootIds[t],r}return 0},e.prototype.getRootIdSet=function(t){return t===void 0&&(t=new Set),Object.keys(this.rootIds).forEach(t.add,t),this instanceof gt?this.parent.getRootIdSet(t):Object.keys(this.policies.rootTypenamesById).forEach(t.add,t),t},e.prototype.gc=function(){var t=this,r=this.getRootIdSet(),n=this.toObject();r.forEach(function(o){Ee.call(n,o)&&(Object.keys(t.findChildRefIds(o)).forEach(r.add,r),delete n[o])});var i=Object.keys(n);if(i.length){for(var a=this;a instanceof gt;)a=a.parent;i.forEach(function(o){return a.delete(o)})}return i},e.prototype.findChildRefIds=function(t){if(!Ee.call(this.refs,t)){var r=this.refs[t]=Object.create(null),n=this.data[t];if(!n)return r;var i=new Set([n]);i.forEach(function(a){ue(a)&&(r[a.__ref]=!0),me(a)&&Object.keys(a).forEach(function(o){var s=a[o];me(s)&&i.add(s)})})}return this.refs[t]},e.prototype.makeCacheKey=function(){return this.group.keyMaker.lookupArray(arguments)},e})(),xc=(function(){function e(t,r){r===void 0&&(r=null),this.caching=t,this.parent=r,this.d=null,this.resetCaching()}return e.prototype.resetCaching=function(){this.d=this.caching?xu():null,this.keyMaker=new Ke(Tt)},e.prototype.depend=function(t,r){if(this.d){this.d(Ta(t,r));var n=mt(r);n!==r&&this.d(Ta(t,n)),this.parent&&this.parent.depend(t,r)}},e.prototype.dirty=function(t,r){this.d&&this.d.dirty(Ta(t,r),r==="__exists"?"forget":"setDirty")},e})();function Ta(e,t){return t+"#"+e}function Ac(e,t){Nr(e)&&e.group.depend(t,"__exists")}(function(e){var t=(function(r){Re(n,r);function n(i){var a=i.policies,o=i.resultCaching,s=o===void 0?!0:o,u=i.seed,c=r.call(this,a,new xc(s))||this;return c.stump=new Bg(c),c.storageTrie=new Ke(Tt),u&&c.replace(u),c}return n.prototype.addLayer=function(i,a){return this.stump.addLayer(i,a)},n.prototype.removeLayer=function(){return this},n.prototype.getStorage=function(){return this.storageTrie.lookupArray(arguments)},n})(e);e.Root=t})(Pr||(Pr={}));var gt=(function(e){Re(t,e);function t(r,n,i,a){var o=e.call(this,n.policies,a)||this;return o.id=r,o.parent=n,o.replay=i,o.group=a,i(o),o}return t.prototype.addLayer=function(r,n){return new t(r,this,n,this.group)},t.prototype.removeLayer=function(r){var n=this,i=this.parent.removeLayer(r);return r===this.id?(this.group.caching&&Object.keys(this.data).forEach(function(a){var o=n.data[a],s=i.lookup(a);s?o?o!==s&&Object.keys(o).forEach(function(u){pe(o[u],s[u])||n.group.dirty(a,u)}):(n.group.dirty(a,"__exists"),Object.keys(s).forEach(function(u){n.group.dirty(a,u)})):n.delete(a)}),i):i===this.parent?this:i.addLayer(this.id,this.replay)},t.prototype.toObject=function(){return C(C({},this.parent.toObject()),this.data)},t.prototype.findChildRefIds=function(r){var n=this.parent.findChildRefIds(r);return Ee.call(this.data,r)?C(C({},n),e.prototype.findChildRefIds.call(this,r)):n},t.prototype.getStorage=function(){for(var r=this.parent;r.parent;)r=r.parent;return r.getStorage.apply(r,arguments)},t})(Pr),Bg=(function(e){Re(t,e);function t(r){return e.call(this,"EntityStore.Stump",r,function(){},new xc(r.group.caching,r.group))||this}return t.prototype.removeLayer=function(){return this},t.prototype.merge=function(r,n){return this.parent.merge(r,n)},t})(gt);function Vg(e,t,r){var n=e[r],i=t[r];return pe(n,i)?n:i}function Nr(e){return!!(e instanceof Pr&&e.group.caching)}function Gg(e){return me(e)?ge(e)?e.slice(0):C({__proto__:Object.getPrototypeOf(e)},e):e}var Cc=(function(){function e(){this.known=new(Yi?WeakSet:Set),this.pool=new Ke(Tt),this.passes=new WeakMap,this.keysByJSON=new Map,this.empty=this.admit({})}return e.prototype.isKnown=function(t){return me(t)&&this.known.has(t)},e.prototype.pass=function(t){if(me(t)){var r=Gg(t);return this.passes.set(r,t),r}return t},e.prototype.admit=function(t){var r=this;if(me(t)){var n=this.passes.get(t);if(n)return n;var i=Object.getPrototypeOf(t);switch(i){case Array.prototype:{if(this.known.has(t))return t;var a=t.map(this.admit,this),o=this.pool.lookupArray(a);return o.array||(this.known.add(o.array=a),globalThis.__DEV__!==!1&&Object.freeze(a)),o.array}case null:case Object.prototype:{if(this.known.has(t))return t;var s=Object.getPrototypeOf(t),u=[s],c=this.sortedKeys(t);u.push(c.json);var l=u.length;c.sorted.forEach(function(p){u.push(r.admit(t[p]))});var o=this.pool.lookupArray(u);if(!o.object){var d=o.object=Object.create(s);this.known.add(d),c.sorted.forEach(function(p,y){d[p]=u[l+y]}),globalThis.__DEV__!==!1&&Object.freeze(d)}return o.object}}}return t},e.prototype.sortedKeys=function(t){var r=Object.keys(t),n=this.pool.lookupArray(r);if(!n.keys){r.sort();var i=JSON.stringify(r);(n.keys=this.keysByJSON.get(i))||this.keysByJSON.set(i,n.keys={sorted:r,json:i})}return n.keys},e})();function Fc(e){return[e.selectionSet,e.objectOrReference,e.context,e.context.canonizeResults]}var zg=(function(){function e(t){var r=this;this.knownResults=new(Tt?WeakMap:Map),this.config=Xt(t,{addTypename:t.addTypename!==!1,canonizeResults:Ic(t)}),this.canon=t.canon||new Cc,this.executeSelectionSet=Tr(function(n){var i,a=n.context.canonizeResults,o=Fc(n);o[3]=!a;var s=(i=r.executeSelectionSet).peek.apply(i,o);return s?a?C(C({},s),{result:r.canon.admit(s.result)}):s:(Ac(n.context.store,n.enclosingRef.__ref),r.execSelectionSetImpl(n))},{max:this.config.resultCacheMaxSize||Xe["inMemoryCache.executeSelectionSet"]||5e4,keyArgs:Fc,makeCacheKey:function(n,i,a,o){if(Nr(a.store))return a.store.makeCacheKey(n,ue(i)?i.__ref:i,a.varString,o)}}),this.executeSubSelectedArray=Tr(function(n){return Ac(n.context.store,n.enclosingRef.__ref),r.execSubSelectedArrayImpl(n)},{max:this.config.resultCacheMaxSize||Xe["inMemoryCache.executeSubSelectedArray"]||1e4,makeCacheKey:function(n){var i=n.field,a=n.array,o=n.context;if(Nr(o.store))return o.store.makeCacheKey(i,a,o.varString)}})}return e.prototype.resetCanon=function(){this.canon=new Cc},e.prototype.diffQueryAgainstStore=function(t){var r=t.store,n=t.query,i=t.rootId,a=i===void 0?"ROOT_QUERY":i,o=t.variables,s=t.returnPartialData,u=s===void 0?!0:s,c=t.canonizeResults,l=c===void 0?this.config.canonizeResults:c,d=this.config.cache.policies;o=C(C({},ta(pu(n))),o);var f=Bt(a),p=this.executeSelectionSet({selectionSet:Qt(n).selectionSet,objectOrReference:f,enclosingRef:f,context:C({store:r,query:n,policies:d,variables:o,varString:ct(o),canonizeResults:l},kc(n,this.config.fragments))}),y;if(p.missing&&(y=[new wc(Qg(p.missing),p.missing,n,o)],!u))throw y[0];return{result:p.result,complete:!y,missing:y}},e.prototype.isFresh=function(t,r,n,i){if(Nr(i.store)&&this.knownResults.get(t)===n){var a=this.executeSelectionSet.peek(n,r,i,this.canon.isKnown(t));if(a&&t===a.result)return!0}return!1},e.prototype.execSelectionSetImpl=function(t){var r=this,n=t.selectionSet,i=t.objectOrReference,a=t.enclosingRef,o=t.context;if(ue(i)&&!o.policies.rootTypenamesById[i.__ref]&&!o.store.has(i.__ref))return{result:this.canon.empty,missing:"Dangling reference to missing ".concat(i.__ref," object")};var s=o.variables,u=o.policies,c=o.store,l=c.getFieldValue(i,"__typename"),d=[],f,p=new pt;this.config.addTypename&&typeof l=="string"&&!u.rootIdsByTypename[l]&&d.push({__typename:l});function y(I,k){var $;return I.missing&&(f=p.merge(f,($={},$[k]=I.missing,$))),I.result}var S=new Set(n.selections);S.forEach(function(I){var k,$;if(Sr(I,s))if(lt(I)){var E=u.readField({fieldName:I.name.value,field:I,variables:o.variables,from:i},o),x=Ze(I);E===void 0?sa.added(I)||(f=p.merge(f,(k={},k[x]="Can't find field '".concat(I.name.value,"' on ").concat(ue(i)?i.__ref+" object":"object "+JSON.stringify(i,null,2)),k))):ge(E)?E.length>0&&(E=y(r.executeSubSelectedArray({field:I,array:E,enclosingRef:a,context:o}),x)):I.selectionSet?E!=null&&(E=y(r.executeSelectionSet({selectionSet:I.selectionSet,objectOrReference:E,enclosingRef:ue(E)?E:a,context:o}),x)):o.canonizeResults&&(E=r.canon.pass(E)),E!==void 0&&d.push(($={},$[x]=E,$))}else{var v=hn(I,o.lookupFragment);if(!v&&I.kind===G.FRAGMENT_SPREAD)throw Ae(10,I.name.value);v&&u.fragmentMatches(v,l)&&v.selectionSet.selections.forEach(S.add,S)}});var h=bn(d),g={result:h,missing:f},_=o.canonizeResults?this.canon.admit(g):wn(g);return _.result&&this.knownResults.set(_.result,n),_},e.prototype.execSubSelectedArrayImpl=function(t){var r=this,n=t.field,i=t.array,a=t.enclosingRef,o=t.context,s,u=new pt;function c(l,d){var f;return l.missing&&(s=u.merge(s,(f={},f[d]=l.missing,f))),l.result}return n.selectionSet&&(i=i.filter(o.store.canRead)),i=i.map(function(l,d){return l===null?null:ge(l)?c(r.executeSubSelectedArray({field:n,array:l,enclosingRef:a,context:o}),d):n.selectionSet?c(r.executeSelectionSet({selectionSet:n.selectionSet,objectOrReference:l,enclosingRef:ue(l)?l:a,context:o}),d):(globalThis.__DEV__!==!1&&Wg(o.store,n,l),l)}),{result:o.canonizeResults?this.canon.admit(i):i,missing:s}},e})();function Qg(e){try{JSON.stringify(e,function(t,r){if(typeof r=="string")throw r;return r})}catch(t){return t}}function Wg(e,t,r){if(!t.selectionSet){var n=new Set([r]);n.forEach(function(i){me(i)&&(K(!ue(i),11,Ug(e,i),t.name.value),Object.values(i).forEach(n.add,n))})}}var ka=new Dr,$c=new WeakMap;function Rr(e){var t=$c.get(e);return t||$c.set(e,t={vars:new Set,dep:xu()}),t}function Pc(e){Rr(e).vars.forEach(function(t){return t.forgetCache(e)})}function Yg(e){Rr(e).vars.forEach(function(t){return t.attachCache(e)})}function Hg(e){var t=new Set,r=new Set,n=function(a){if(arguments.length>0){if(e!==a){e=a,t.forEach(function(u){Rr(u).dep.dirty(n),Jg(u)});var o=Array.from(r);r.clear(),o.forEach(function(u){return u(e)})}}else{var s=ka.getValue();s&&(i(s),Rr(s).dep(n))}return e};n.onNextChange=function(a){return r.add(a),function(){r.delete(a)}};var i=n.attachCache=function(a){return t.add(a),Rr(a).vars.add(n),n};return n.forgetCache=function(a){return t.delete(a)},n}function Jg(e){e.broadcastWatches&&e.broadcastWatches()}var Nc=Object.create(null);function Oa(e){var t=JSON.stringify(e);return Nc[t]||(Nc[t]=Object.create(null))}function Rc(e){var t=Oa(e);return t.keyFieldsFn||(t.keyFieldsFn=function(r,n){var i=function(o,s){return n.readField(s,o)},a=n.keyObject=xa(e,function(o){var s=er(n.storeObject,o,i);return s===void 0&&r!==n.storeObject&&Ee.call(r,o[0])&&(s=er(r,o,jc)),K(s!==void 0,5,o.join("."),r),s});return"".concat(n.typename,":").concat(JSON.stringify(a))})}function Mc(e){var t=Oa(e);return t.keyArgsFn||(t.keyArgsFn=function(r,n){var i=n.field,a=n.variables,o=n.fieldName,s=xa(e,function(c){var l=c[0],d=l.charAt(0);if(d==="@"){if(i&&ze(i.directives)){var f=l.slice(1),p=i.directives.find(function(g){return g.name.value===f}),y=p&&gn(p,a);return y&&er(y,c.slice(1))}return}if(d==="$"){var S=l.slice(1);if(a&&Ee.call(a,S)){var h=c.slice(0);return h[0]=S,er(a,h)}return}if(r)return er(r,c)}),u=JSON.stringify(s);return(r||u!=="{}")&&(o+=":"+u),o})}function xa(e,t){var r=new pt;return Lc(e).reduce(function(n,i){var a,o=t(i);if(o!==void 0){for(var s=i.length-1;s>=0;--s)o=(a={},a[i[s]]=o,a);n=r.merge(n,o)}return n},Object.create(null))}function Lc(e){var t=Oa(e);if(!t.paths){var r=t.paths=[],n=[];e.forEach(function(i,a){ge(i)?(Lc(i).forEach(function(o){return r.push(n.concat(o))}),n.length=0):(n.push(i),ge(e[a+1])||(r.push(n.slice(0)),n.length=0))})}return t.paths}function jc(e,t){return e[t]}function er(e,t,r){return r=r||jc,Uc(t.reduce(function n(i,a){return ge(i)?i.map(function(o){return n(o,a)}):i&&r(i,a)},e))}function Uc(e){return me(e)?ge(e)?e.map(Uc):xa(Object.keys(e).sort(),function(t){return er(e,t)}):e}function Aa(e){return e.args!==void 0?e.args:e.field?gn(e.field,e.variables):null}var Kg=function(){},qc=function(e,t){return t.fieldName},Bc=function(e,t,r){var n=r.mergeObjects;return n(e,t)},Vc=function(e,t){return t},Xg=(function(){function e(t){this.config=t,this.typePolicies=Object.create(null),this.toBeAdded=Object.create(null),this.supertypeMap=new Map,this.fuzzySubtypes=new Map,this.rootIdsByTypename=Object.create(null),this.rootTypenamesById=Object.create(null),this.usingPossibleTypes=!1,this.config=C({dataIdFromObject:Ec},t),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),t.possibleTypes&&this.addPossibleTypes(t.possibleTypes),t.typePolicies&&this.addTypePolicies(t.typePolicies)}return e.prototype.identify=function(t,r){var n,i=this,a=r&&(r.typename||((n=r.storeObject)===null||n===void 0?void 0:n.__typename))||t.__typename;if(a===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];var o=r&&r.storeObject||t,s=C(C({},r),{typename:a,storeObject:o,readField:r&&r.readField||function(){var d=Ca(arguments,o);return i.readField(d,{store:i.cache.data,variables:d.variables})}}),u,c=a&&this.getTypePolicy(a),l=c&&c.keyFn||this.config.dataIdFromObject;return Ea.withValue(!0,function(){for(;l;){var d=l(C(C({},t),o),s);if(ge(d))l=Rc(d);else{u=d;break}}}),u=u?String(u):void 0,s.keyObject?[u,s.keyObject]:[u]},e.prototype.addTypePolicies=function(t){var r=this;Object.keys(t).forEach(function(n){var i=t[n],a=i.queryType,o=i.mutationType,s=i.subscriptionType,u=Je(i,["queryType","mutationType","subscriptionType"]);a&&r.setRootTypename("Query",n),o&&r.setRootTypename("Mutation",n),s&&r.setRootTypename("Subscription",n),Ee.call(r.toBeAdded,n)?r.toBeAdded[n].push(u):r.toBeAdded[n]=[u]})},e.prototype.updateTypePolicy=function(t,r){var n=this,i=this.getTypePolicy(t),a=r.keyFields,o=r.fields;function s(u,c){u.merge=typeof c=="function"?c:c===!0?Bc:c===!1?Vc:u.merge}s(i,r.merge),i.keyFn=a===!1?Kg:ge(a)?Rc(a):typeof a=="function"?a:i.keyFn,o&&Object.keys(o).forEach(function(u){var c=n.getFieldPolicy(t,u,!0),l=o[u];if(typeof l=="function")c.read=l;else{var d=l.keyArgs,f=l.read,p=l.merge;c.keyFn=d===!1?qc:ge(d)?Mc(d):typeof d=="function"?d:c.keyFn,typeof f=="function"&&(c.read=f),s(c,p)}c.read&&c.merge&&(c.keyFn=c.keyFn||qc)})},e.prototype.setRootTypename=function(t,r){r===void 0&&(r=t);var n="ROOT_"+t.toUpperCase(),i=this.rootTypenamesById[n];r!==i&&(K(!i||i===t,6,t),i&&delete this.rootIdsByTypename[i],this.rootIdsByTypename[r]=n,this.rootTypenamesById[n]=r)},e.prototype.addPossibleTypes=function(t){var r=this;this.usingPossibleTypes=!0,Object.keys(t).forEach(function(n){r.getSupertypeSet(n,!0),t[n].forEach(function(i){r.getSupertypeSet(i,!0).add(n);var a=i.match(Tc);(!a||a[0]!==i)&&r.fuzzySubtypes.set(i,new RegExp(i))})})},e.prototype.getTypePolicy=function(t){var r=this;if(!Ee.call(this.typePolicies,t)){var n=this.typePolicies[t]=Object.create(null);n.fields=Object.create(null);var i=this.supertypeMap.get(t);!i&&this.fuzzySubtypes.size&&(i=this.getSupertypeSet(t,!0),this.fuzzySubtypes.forEach(function(o,s){if(o.test(t)){var u=r.supertypeMap.get(s);u&&u.forEach(function(c){return i.add(c)})}})),i&&i.size&&i.forEach(function(o){var s=r.getTypePolicy(o),u=s.fields,c=Je(s,["fields"]);Object.assign(n,c),Object.assign(n.fields,u)})}var a=this.toBeAdded[t];return a&&a.length&&a.splice(0).forEach(function(o){r.updateTypePolicy(t,o)}),this.typePolicies[t]},e.prototype.getFieldPolicy=function(t,r,n){if(t){var i=this.getTypePolicy(t).fields;return i[r]||n&&(i[r]=Object.create(null))}},e.prototype.getSupertypeSet=function(t,r){var n=this.supertypeMap.get(t);return!n&&r&&this.supertypeMap.set(t,n=new Set),n},e.prototype.fragmentMatches=function(t,r,n,i){var a=this;if(!t.typeCondition)return!0;if(!r)return!1;var o=t.typeCondition.name.value;if(r===o)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(o))for(var s=this.getSupertypeSet(r,!0),u=[s],c=function(y){var S=a.getSupertypeSet(y,!1);S&&S.size&&u.indexOf(S)<0&&u.push(S)},l=!!(n&&this.fuzzySubtypes.size),d=!1,f=0;f<u.length;++f){var p=u[f];if(p.has(o))return s.has(o)||(d&&globalThis.__DEV__!==!1&&K.warn(7,r,o),s.add(o)),!0;p.forEach(c),l&&f===u.length-1&&Da(t.selectionSet,n,i)&&(l=!1,d=!0,this.fuzzySubtypes.forEach(function(y,S){var h=r.match(y);h&&h[0]===r&&c(S)}))}return!1},e.prototype.hasKeyArgs=function(t,r){var n=this.getFieldPolicy(t,r,!1);return!!(n&&n.keyFn)},e.prototype.getStoreFieldName=function(t){var r=t.typename,n=t.fieldName,i=this.getFieldPolicy(r,n,!1),a,o=i&&i.keyFn;if(o&&r)for(var s={typename:r,fieldName:n,field:t.field||null,variables:t.variables},u=Aa(t);o;){var c=o(u,s);if(ge(c))o=Mc(c);else{a=c||n;break}}return a===void 0&&(a=t.field?wm(t.field,t.variables):du(n,Aa(t))),a===!1?n:n===mt(a)?a:n+":"+a},e.prototype.readField=function(t,r){var n=t.from;if(n){var i=t.field||t.fieldName;if(i){if(t.typename===void 0){var a=r.store.getFieldValue(n,"__typename");a&&(t.typename=a)}var o=this.getStoreFieldName(t),s=mt(o),u=r.store.getFieldValue(n,o),c=this.getFieldPolicy(t.typename,s,!1),l=c&&c.read;if(l){var d=Gc(this,n,t,r,r.store.getStorage(ue(n)?n.__ref:n,o));return ka.withValue(this.cache,l,[u,d])}return u}}},e.prototype.getReadFunction=function(t,r){var n=this.getFieldPolicy(t,r,!1);return n&&n.read},e.prototype.getMergeFunction=function(t,r,n){var i=this.getFieldPolicy(t,r,!1),a=i&&i.merge;return!a&&n&&(i=this.getTypePolicy(n),a=i&&i.merge),a},e.prototype.runMergeFunction=function(t,r,n,i,a){var o=n.field,s=n.typename,u=n.merge;return u===Bc?zc(i.store)(t,r):u===Vc?r:(i.overwrite&&(t=void 0),u(t,r,Gc(this,void 0,{typename:s,fieldName:o.name.value,field:o,variables:i.variables},i,a||Object.create(null))))},e})();function Gc(e,t,r,n,i){var a=e.getStoreFieldName(r),o=mt(a),s=r.variables||n.variables,u=n.store,c=u.toReference,l=u.canRead;return{args:Aa(r),field:r.field||null,fieldName:o,storeFieldName:a,variables:s,isReference:ue,toReference:c,storage:i,cache:e.cache,canRead:l,readField:function(){return e.readField(Ca(arguments,t,s),n)},mergeObjects:zc(n.store)}}function Ca(e,t,r){var n=e[0],i=e[1],a=e.length,o;return typeof n=="string"?o={fieldName:n,from:a>1?i:t}:(o=C({},n),Ee.call(o,"from")||(o.from=t)),globalThis.__DEV__!==!1&&o.from===void 0&&globalThis.__DEV__!==!1&&K.warn(8,js(Array.from(e))),o.variables===void 0&&(o.variables=r),o}function zc(e){return function(r,n){if(ge(r)||ge(n))throw Ae(9);if(me(r)&&me(n)){var i=e.getFieldValue(r,"__typename"),a=e.getFieldValue(n,"__typename"),o=i&&a&&i!==a;if(o)return n;if(ue(r)&&Zt(n))return e.merge(r.__ref,n),r;if(Zt(r)&&ue(n))return e.merge(r,n.__ref),n;if(Zt(r)&&Zt(n))return C(C({},r),n)}return n}}function Fa(e,t,r){var n="".concat(t).concat(r),i=e.flavors.get(n);return i||e.flavors.set(n,i=e.clientOnly===t&&e.deferred===r?e:C(C({},e),{clientOnly:t,deferred:r})),i}var Zg=(function(){function e(t,r,n){this.cache=t,this.reader=r,this.fragments=n}return e.prototype.writeToStore=function(t,r){var n=this,i=r.query,a=r.result,o=r.dataId,s=r.variables,u=r.overwrite,c=Ot(i),l=qg();s=C(C({},ta(c)),s);var d=C(C({store:t,written:Object.create(null),merge:function(p,y){return l.merge(p,y)},variables:s,varString:ct(s)},kc(i,this.fragments)),{overwrite:!!u,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map}),f=this.processSelectionSet({result:a||Object.create(null),dataId:o,selectionSet:c.selectionSet,mergeTree:{map:new Map},context:d});if(!ue(f))throw Ae(12,a);return d.incomingById.forEach(function(p,y){var S=p.storeObject,h=p.mergeTree,g=p.fieldNodeSet,_=Bt(y);if(h&&h.map.size){var I=n.applyMerges(h,_,S,d);if(ue(I))return;S=I}if(globalThis.__DEV__!==!1&&!d.overwrite){var k=Object.create(null);g.forEach(function(x){x.selectionSet&&(k[x.name.value]=!0)});var $=function(x){return k[mt(x)]===!0},E=function(x){var v=h&&h.map.get(x);return!!(v&&v.info&&v.info.merge)};Object.keys(S).forEach(function(x){$(x)&&!E(x)&&ey(_,S,x,d.store)})}t.merge(y,S)}),t.retain(f.__ref),f},e.prototype.processSelectionSet=function(t){var r=this,n=t.dataId,i=t.result,a=t.selectionSet,o=t.context,s=t.mergeTree,u=this.cache.policies,c=Object.create(null),l=n&&u.rootTypenamesById[n]||ea(i,a,o.fragmentMap)||n&&o.store.get(n,"__typename");typeof l=="string"&&(c.__typename=l);var d=function(){var I=Ca(arguments,c,o.variables);if(ue(I.from)){var k=o.incomingById.get(I.from.__ref);if(k){var $=u.readField(C(C({},I),{from:k.storeObject}),o);if($!==void 0)return $}}return u.readField(I,o)},f=new Set;this.flattenFields(a,i,o,l).forEach(function(I,k){var $,E=Ze(k),x=i[E];if(f.add(k),x!==void 0){var v=u.getStoreFieldName({typename:l,fieldName:k.name.value,field:k,variables:I.variables}),D=Wc(s,v),b=r.processFieldValue(x,k,k.selectionSet?Fa(I,!1,!1):I,D),A=void 0;k.selectionSet&&(ue(b)||Zt(b))&&(A=d("__typename",b));var P=u.getMergeFunction(l,k.name.value,A);P?D.info={field:k,typename:l,merge:P}:Yc(s,v),c=I.merge(c,($={},$[v]=b,$))}else globalThis.__DEV__!==!1&&!I.clientOnly&&!I.deferred&&!sa.added(k)&&!u.getReadFunction(l,k.name.value)&&globalThis.__DEV__!==!1&&K.error(13,Ze(k),i)});try{var p=u.identify(i,{typename:l,selectionSet:a,fragmentMap:o.fragmentMap,storeObject:c,readField:d}),y=p[0],S=p[1];n=n||y,S&&(c=o.merge(c,S))}catch(I){if(!n)throw I}if(typeof n=="string"){var h=Bt(n),g=o.written[n]||(o.written[n]=[]);if(g.indexOf(a)>=0||(g.push(a),this.reader&&this.reader.isFresh(i,h,a,o)))return h;var _=o.incomingById.get(n);return _?(_.storeObject=o.merge(_.storeObject,c),_.mergeTree=$a(_.mergeTree,s),f.forEach(function(I){return _.fieldNodeSet.add(I)})):o.incomingById.set(n,{storeObject:c,mergeTree:On(s)?void 0:s,fieldNodeSet:f}),h}return c},e.prototype.processFieldValue=function(t,r,n,i){var a=this;return!r.selectionSet||t===null?globalThis.__DEV__!==!1?zu(t):t:ge(t)?t.map(function(o,s){var u=a.processFieldValue(o,r,n,Wc(i,s));return Yc(i,s),u}):this.processSelectionSet({result:t,selectionSet:r.selectionSet,context:n,mergeTree:i})},e.prototype.flattenFields=function(t,r,n,i){i===void 0&&(i=ea(r,t,n.fragmentMap));var a=new Map,o=this.cache.policies,s=new Ke(!1);return(function u(c,l){var d=s.lookup(c,l.clientOnly,l.deferred);d.visited||(d.visited=!0,c.selections.forEach(function(f){if(Sr(f,n.variables)){var p=l.clientOnly,y=l.deferred;if(!(p&&y)&&ze(f.directives)&&f.directives.forEach(function(g){var _=g.name.value;if(_==="client"&&(p=!0),_==="defer"){var I=gn(g,n.variables);(!I||I.if!==!1)&&(y=!0)}}),lt(f)){var S=a.get(f);S&&(p=p&&S.clientOnly,y=y&&S.deferred),a.set(f,Fa(n,p,y))}else{var h=hn(f,n.lookupFragment);if(!h&&f.kind===G.FRAGMENT_SPREAD)throw Ae(14,f.name.value);h&&o.fragmentMatches(h,i,r,n.variables)&&u(h.selectionSet,Fa(n,p,y))}}}))})(t,n),a},e.prototype.applyMerges=function(t,r,n,i,a){var o,s=this;if(t.map.size&&!ue(n)){var u=!ge(n)&&(ue(r)||Zt(r))?r:void 0,c=n;u&&!a&&(a=[ue(u)?u.__ref:u]);var l,d=function(f,p){return ge(f)?typeof p=="number"?f[p]:void 0:i.store.getFieldValue(f,String(p))};t.map.forEach(function(f,p){var y=d(u,p),S=d(c,p);if(S!==void 0){a&&a.push(p);var h=s.applyMerges(f,y,S,i,a);h!==S&&(l=l||new Map,l.set(p,h)),a&&K(a.pop()===p)}}),l&&(n=ge(c)?c.slice(0):C({},c),l.forEach(function(f,p){n[p]=f}))}return t.info?this.cache.policies.runMergeFunction(r,n,t.info,i,a&&(o=i.store).getStorage.apply(o,a)):n},e})(),Qc=[];function Wc(e,t){var r=e.map;return r.has(t)||r.set(t,Qc.pop()||{map:new Map}),r.get(t)}function $a(e,t){if(e===t||!t||On(t))return e;if(!e||On(e))return t;var r=e.info&&t.info?C(C({},e.info),t.info):e.info||t.info,n=e.map.size&&t.map.size,i=n?new Map:e.map.size?e.map:t.map,a={info:r,map:i};if(n){var o=new Set(t.map.keys());e.map.forEach(function(s,u){a.map.set(u,$a(s,t.map.get(u))),o.delete(u)}),o.forEach(function(s){a.map.set(s,$a(t.map.get(s),e.map.get(s)))})}return a}function On(e){return!e||!(e.info||e.map.size)}function Yc(e,t){var r=e.map,n=r.get(t);n&&On(n)&&(Qc.push(n),r.delete(t))}var Hc=new Set;function ey(e,t,r,n){var i=function(d){var f=n.getFieldValue(d,r);return typeof f=="object"&&f},a=i(e);if(a){var o=i(t);if(o&&!ue(a)&&!pe(a,o)&&!Object.keys(a).every(function(d){return n.getFieldValue(o,d)!==void 0})){var s=n.getFieldValue(e,"__typename")||n.getFieldValue(t,"__typename"),u=mt(r),c="".concat(s,".").concat(u);if(!Hc.has(c)){Hc.add(c);var l=[];!ge(a)&&!ge(o)&&[a,o].forEach(function(d){var f=n.getFieldValue(d,"__typename");typeof f=="string"&&!l.includes(f)&&l.push(f)}),globalThis.__DEV__!==!1&&K.warn(15,u,s,l.length?"either ensure all objects of type "+l.join(" and ")+" have an ID or a custom merge function, or ":"",c,C({},a),C({},o))}}}}var Pa=(function(e){Re(t,e);function t(r){r===void 0&&(r={});var n=e.call(this)||this;return n.watches=new Set,n.addTypenameTransform=new Cu(sa),n.assumeImmutableResults=!0,n.makeVar=Hg,n.txCount=0,n.config=jg(r),n.addTypename=!!n.config.addTypename,n.policies=new Xg({cache:n,dataIdFromObject:n.config.dataIdFromObject,possibleTypes:n.config.possibleTypes,typePolicies:n.config.typePolicies}),n.init(),n}return t.prototype.init=function(){var r=this.data=new Pr.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=r.stump,this.resetResultCache()},t.prototype.resetResultCache=function(r){var n=this,i=this.storeReader,a=this.config.fragments;this.storeWriter=new Zg(this,this.storeReader=new zg({cache:this,addTypename:this.addTypename,resultCacheMaxSize:this.config.resultCacheMaxSize,canonizeResults:Ic(this.config),canon:r?void 0:i&&i.canon,fragments:a}),a),this.maybeBroadcastWatch=Tr(function(o,s){return n.broadcastWatch(o,s)},{max:this.config.resultCacheMaxSize||Xe["inMemoryCache.maybeBroadcastWatch"]||5e3,makeCacheKey:function(o){var s=o.optimistic?n.optimisticData:n.data;if(Nr(s)){var u=o.optimistic,c=o.id,l=o.variables;return s.makeCacheKey(o.query,o.callback,ct({optimistic:u,id:c,variables:l}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach(function(o){return o.resetCaching()})},t.prototype.restore=function(r){return this.init(),r&&this.data.replace(r),this},t.prototype.extract=function(r){return r===void 0&&(r=!1),(r?this.optimisticData:this.data).extract()},t.prototype.read=function(r){var n=r.returnPartialData,i=n===void 0?!1:n;try{return this.storeReader.diffQueryAgainstStore(C(C({},r),{store:r.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:i})).result||null}catch(a){if(a instanceof wc)return null;throw a}},t.prototype.write=function(r){try{return++this.txCount,this.storeWriter.writeToStore(this.data,r)}finally{!--this.txCount&&r.broadcast!==!1&&this.broadcastWatches()}},t.prototype.modify=function(r){if(Ee.call(r,"id")&&!r.id)return!1;var n=r.optimistic?this.optimisticData:this.data;try{return++this.txCount,n.modify(r.id||"ROOT_QUERY",r.fields)}finally{!--this.txCount&&r.broadcast!==!1&&this.broadcastWatches()}},t.prototype.diff=function(r){return this.storeReader.diffQueryAgainstStore(C(C({},r),{store:r.optimistic?this.optimisticData:this.data,rootId:r.id||"ROOT_QUERY",config:this.config}))},t.prototype.watch=function(r){var n=this;return this.watches.size||Yg(this),this.watches.add(r),r.immediate&&this.maybeBroadcastWatch(r),function(){n.watches.delete(r)&&!n.watches.size&&Pc(n),n.maybeBroadcastWatch.forget(r)}},t.prototype.gc=function(r){var n;ct.reset(),dt.reset(),this.addTypenameTransform.resetCache(),(n=this.config.fragments)===null||n===void 0||n.resetCaches();var i=this.optimisticData.gc();return r&&!this.txCount&&(r.resetResultCache?this.resetResultCache(r.resetResultIdentities):r.resetResultIdentities&&this.storeReader.resetCanon()),i},t.prototype.retain=function(r,n){return(n?this.optimisticData:this.data).retain(r)},t.prototype.release=function(r,n){return(n?this.optimisticData:this.data).release(r)},t.prototype.identify=function(r){if(ue(r))return r.__ref;try{return this.policies.identify(r)[0]}catch(n){globalThis.__DEV__!==!1&&K.warn(n)}},t.prototype.evict=function(r){if(!r.id){if(Ee.call(r,"id"))return!1;r=C(C({},r),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(r,this.data)}finally{!--this.txCount&&r.broadcast!==!1&&this.broadcastWatches()}},t.prototype.reset=function(r){var n=this;return this.init(),ct.reset(),r&&r.discardWatches?(this.watches.forEach(function(i){return n.maybeBroadcastWatch.forget(i)}),this.watches.clear(),Pc(this)):this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(r){var n=this.optimisticData.removeLayer(r);n!==this.optimisticData&&(this.optimisticData=n,this.broadcastWatches())},t.prototype.batch=function(r){var n=this,i=r.update,a=r.optimistic,o=a===void 0?!0:a,s=r.removeOptimistic,u=r.onWatchUpdated,c,l=function(f){var p=n,y=p.data,S=p.optimisticData;++n.txCount,f&&(n.data=n.optimisticData=f);try{return c=i(n)}finally{--n.txCount,n.data=y,n.optimisticData=S}},d=new Set;return u&&!this.txCount&&this.broadcastWatches(C(C({},r),{onWatchUpdated:function(f){return d.add(f),!1}})),typeof o=="string"?this.optimisticData=this.optimisticData.addLayer(o,l):o===!1?l(this.data):l(),typeof s=="string"&&(this.optimisticData=this.optimisticData.removeLayer(s)),u&&d.size?(this.broadcastWatches(C(C({},r),{onWatchUpdated:function(f,p){var y=u.call(this,f,p);return y!==!1&&d.delete(f),y}})),d.size&&d.forEach(function(f){return n.maybeBroadcastWatch.dirty(f)})):this.broadcastWatches(r),c},t.prototype.performTransaction=function(r,n){return this.batch({update:r,optimistic:n||n!==null})},t.prototype.transformDocument=function(r){return this.addTypenameToDocument(this.addFragmentsToDocument(r))},t.prototype.fragmentMatches=function(r,n){return this.policies.fragmentMatches(r,n)},t.prototype.lookupFragment=function(r){var n;return((n=this.config.fragments)===null||n===void 0?void 0:n.lookup(r))||null},t.prototype.broadcastWatches=function(r){var n=this;this.txCount||this.watches.forEach(function(i){return n.maybeBroadcastWatch(i,r)})},t.prototype.addFragmentsToDocument=function(r){var n=this.config.fragments;return n?n.transform(r):r},t.prototype.addTypenameToDocument=function(r){return this.addTypename?this.addTypenameTransform.transformDocument(r):r},t.prototype.broadcastWatch=function(r,n){var i=r.lastDiff,a=this.diff(r);n&&(r.optimistic&&typeof n.optimistic=="string"&&(a.fromOptimisticTransaction=!0),n.onWatchUpdated&&n.onWatchUpdated.call(this,r,a,i)===!1)||(!i||!pe(i.result,a.result))&&r.callback(r.lastDiff=a,i)},t})(_c);globalThis.__DEV__!==!1&&(Pa.prototype.getMemoryInternals=im);var le;(function(e){e[e.loading=1]="loading",e[e.setVariables=2]="setVariables",e[e.fetchMore=3]="fetchMore",e[e.refetch=4]="refetch",e[e.poll=6]="poll",e[e.ready=7]="ready",e[e.error=8]="error"})(le||(le={}));function tr(e){return e?e<7:!1}var Jc=Object.assign,ty=Object.hasOwnProperty,xn=(function(e){Re(t,e);function t(r){var n=r.queryManager,i=r.queryInfo,a=r.options,o=this,s=t.inactiveOnCreation.getValue();o=e.call(this,function(g){o._getOrCreateQuery();try{var _=g._subscription._observer;_&&!_.error&&(_.error=ry)}catch{}var I=!o.observers.size;o.observers.add(g);var k=o.last;return k&&k.error?g.error&&g.error(k.error):k&&k.result&&g.next&&g.next(o.maskResult(k.result)),I&&o.reobserve().catch(function(){}),function(){o.observers.delete(g)&&!o.observers.size&&o.tearDownQuery()}})||this,o.observers=new Set,o.subscriptions=new Set,o.dirty=!1,o._getOrCreateQuery=function(){return s&&(n.queries.set(o.queryId,i),s=!1),o.queryManager.getOrCreateQuery(o.queryId)},o.queryInfo=i,o.queryManager=n,o.waitForOwnResult=Na(a.fetchPolicy),o.isTornDown=!1,o.subscribeToMore=o.subscribeToMore.bind(o),o.maskResult=o.maskResult.bind(o);var u=n.defaultOptions.watchQuery,c=u===void 0?{}:u,l=c.fetchPolicy,d=l===void 0?"cache-first":l,f=a.fetchPolicy,p=f===void 0?d:f,y=a.initialFetchPolicy,S=y===void 0?p==="standby"?d:p:y;o.options=C(C({},a),{initialFetchPolicy:S,fetchPolicy:p}),o.queryId=i.queryId||n.generateQueryId();var h=Ot(o.query);return o.queryName=h&&h.name&&h.name.value,o}return Object.defineProperty(t.prototype,"query",{get:function(){return this.lastQuery||this.options.query},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"variables",{get:function(){return this.options.variables},enumerable:!1,configurable:!0}),t.prototype.result=function(){var r=this;return new Promise(function(n,i){var a={next:function(s){n(s),r.observers.delete(a),r.observers.size||r.queryManager.removeQuery(r.queryId),setTimeout(function(){o.unsubscribe()},0)},error:i},o=r.subscribe(a)})},t.prototype.resetDiff=function(){this.queryInfo.resetDiff()},t.prototype.getCurrentFullResult=function(r){r===void 0&&(r=!0);var n=this.getLastResult(!0),i=this.queryInfo.networkStatus||n&&n.networkStatus||le.ready,a=C(C({},n),{loading:tr(i),networkStatus:i}),o=this.options.fetchPolicy,s=o===void 0?"cache-first":o;if(!(Na(s)||this.queryManager.getDocumentInfo(this.query).hasForcedResolvers))if(this.waitForOwnResult)this.queryInfo.updateWatch();else{var u=this.queryInfo.getDiff();(u.complete||this.options.returnPartialData)&&(a.data=u.result),pe(a.data,{})&&(a.data=void 0),u.complete?(delete a.partial,u.complete&&a.networkStatus===le.loading&&(s==="cache-first"||s==="cache-only")&&(a.networkStatus=le.ready,a.loading=!1)):a.partial=!0,a.networkStatus===le.ready&&(a.error||a.errors)&&(a.networkStatus=le.error),globalThis.__DEV__!==!1&&!u.complete&&!this.options.partialRefetch&&!a.loading&&!a.data&&!a.error&&Kc(u.missing)}return r&&this.updateLastResult(a),a},t.prototype.getCurrentResult=function(r){return r===void 0&&(r=!0),this.maskResult(this.getCurrentFullResult(r))},t.prototype.isDifferentFromLastResult=function(r,n){if(!this.last)return!0;var i=this.queryManager.getDocumentInfo(this.query),a=this.queryManager.dataMasking,o=a?i.nonReactiveQuery:this.query,s=a||i.hasNonreactiveDirective?!pc(o,this.last.result,r,this.variables):!pe(this.last.result,r);return s||n&&!pe(this.last.variables,n)},t.prototype.getLast=function(r,n){var i=this.last;if(i&&i[r]&&(!n||pe(i.variables,this.variables)))return i[r]},t.prototype.getLastResult=function(r){return this.getLast("result",r)},t.prototype.getLastError=function(r){return this.getLast("error",r)},t.prototype.resetLastResults=function(){delete this.last,this.isTornDown=!1},t.prototype.resetQueryStoreErrors=function(){this.queryManager.resetErrors(this.queryId)},t.prototype.refetch=function(r){var n,i={pollInterval:0},a=this.options.fetchPolicy;if(a==="no-cache"?i.fetchPolicy="no-cache":i.fetchPolicy="network-only",globalThis.__DEV__!==!1&&r&&ty.call(r,"variables")){var o=pu(this.query),s=o.variableDefinitions;(!s||!s.some(function(u){return u.variable.name.value==="variables"}))&&globalThis.__DEV__!==!1&&K.warn(21,r,((n=o.name)===null||n===void 0?void 0:n.value)||o)}return r&&!pe(this.options.variables,r)&&(i.variables=this.options.variables=C(C({},this.options.variables),r)),this.queryInfo.resetLastWrite(),this.reobserve(i,le.refetch)},t.prototype.fetchMore=function(r){var n=this,i=C(C({},r.query?r:C(C(C(C({},this.options),{query:this.options.query}),r),{variables:C(C({},this.options.variables),r.variables)})),{fetchPolicy:"no-cache"});i.query=this.transformDocument(i.query);var a=this.queryManager.generateQueryId();this.lastQuery=r.query?this.transformDocument(this.options.query):i.query;var o=this.queryInfo,s=o.networkStatus;o.networkStatus=le.fetchMore,i.notifyOnNetworkStatusChange&&this.observe();var u=new Set,c=r?.updateQuery,l=this.options.fetchPolicy!=="no-cache";return l||K(c,22),this.queryManager.fetchQuery(a,i,le.fetchMore).then(function(d){if(n.queryManager.removeQuery(a),o.networkStatus===le.fetchMore&&(o.networkStatus=s),l)n.queryManager.cache.batch({update:function(y){var S=r.updateQuery;S?y.updateQuery({query:n.query,variables:n.variables,returnPartialData:!0,optimistic:!1},function(h){return S(h,{fetchMoreResult:d.data,variables:i.variables})}):y.writeQuery({query:i.query,variables:i.variables,data:d.data})},onWatchUpdated:function(y){u.add(y.query)}});else{var f=n.getLast("result"),p=c(f.data,{fetchMoreResult:d.data,variables:i.variables});n.reportResult(C(C({},f),{networkStatus:s,loading:tr(s),data:p}),n.variables)}return n.maskResult(d)}).finally(function(){l&&!u.has(n.query)&&n.reobserveCacheFirst()})},t.prototype.subscribeToMore=function(r){var n=this,i=this.queryManager.startGraphQLSubscription({query:r.document,variables:r.variables,context:r.context}).subscribe({next:function(a){var o=r.updateQuery;o&&n.updateQuery(function(s,u){return o(s,C({subscriptionData:a},u))})},error:function(a){if(r.onError){r.onError(a);return}globalThis.__DEV__!==!1&&K.error(23,a)}});return this.subscriptions.add(i),function(){n.subscriptions.delete(i)&&i.unsubscribe()}},t.prototype.setOptions=function(r){return this.reobserve(r)},t.prototype.silentSetOptions=function(r){var n=Xt(this.options,r||{});Jc(this.options,n)},t.prototype.setVariables=function(r){return pe(this.variables,r)?this.observers.size?this.result():Promise.resolve():(this.options.variables=r,this.observers.size?this.reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:r},le.setVariables):Promise.resolve())},t.prototype.updateQuery=function(r){var n=this.queryManager,i=n.cache.diff({query:this.options.query,variables:this.variables,returnPartialData:!0,optimistic:!1}),a=i.result,o=i.complete,s=r(a,{variables:this.variables,complete:!!o,previousData:a});s&&(n.cache.writeQuery({query:this.options.query,data:s,variables:this.variables}),n.broadcastQueries())},t.prototype.startPolling=function(r){this.options.pollInterval=r,this.updatePolling()},t.prototype.stopPolling=function(){this.options.pollInterval=0,this.updatePolling()},t.prototype.applyNextFetchPolicy=function(r,n){if(n.nextFetchPolicy){var i=n.fetchPolicy,a=i===void 0?"cache-first":i,o=n.initialFetchPolicy,s=o===void 0?a:o;a==="standby"||(typeof n.nextFetchPolicy=="function"?n.fetchPolicy=n.nextFetchPolicy(a,{reason:r,options:n,observable:this,initialFetchPolicy:s}):r==="variables-changed"?n.fetchPolicy=s:n.fetchPolicy=n.nextFetchPolicy)}return n.fetchPolicy},t.prototype.fetch=function(r,n,i){var a=this._getOrCreateQuery();return a.setObservableQuery(this),this.queryManager.fetchConcastWithInfo(a,r,n,i)},t.prototype.updatePolling=function(){var r=this;if(!this.queryManager.ssrMode){var n=this,i=n.pollingInfo,a=n.options.pollInterval;if(!a||!this.hasObservers()){i&&(clearTimeout(i.timeout),delete this.pollingInfo);return}if(!(i&&i.interval===a)){K(a,24);var o=i||(this.pollingInfo={});o.interval=a;var s=function(){var c,l;r.pollingInfo&&(!tr(r.queryInfo.networkStatus)&&!(!((l=(c=r.options).skipPollAttempt)===null||l===void 0)&&l.call(c))?r.reobserve({fetchPolicy:r.options.initialFetchPolicy==="no-cache"?"no-cache":"network-only"},le.poll).then(u,u):u())},u=function(){var c=r.pollingInfo;c&&(clearTimeout(c.timeout),c.timeout=setTimeout(s,c.interval))};u()}}},t.prototype.updateLastResult=function(r,n){n===void 0&&(n=this.variables);var i=this.getLastError();return i&&this.last&&!pe(n,this.last.variables)&&(i=void 0),this.last=C({result:this.queryManager.assumeImmutableResults?r:zu(r),variables:n},i?{error:i}:null)},t.prototype.reobserveAsConcast=function(r,n){var i=this;this.isTornDown=!1;var a=n===le.refetch||n===le.fetchMore||n===le.poll,o=this.options.variables,s=this.options.fetchPolicy,u=Xt(this.options,r||{}),c=a?u:Jc(this.options,u),l=this.transformDocument(c.query);this.lastQuery=l,a||(this.updatePolling(),r&&r.variables&&!pe(r.variables,o)&&c.fetchPolicy!=="standby"&&(c.fetchPolicy===s||typeof c.nextFetchPolicy=="function")&&(this.applyNextFetchPolicy("variables-changed",c),n===void 0&&(n=le.setVariables))),this.waitForOwnResult&&(this.waitForOwnResult=Na(c.fetchPolicy));var d=function(){i.concast===y&&(i.waitForOwnResult=!1)},f=c.variables&&C({},c.variables),p=this.fetch(c,n,l),y=p.concast,S=p.fromLink,h={next:function(g){pe(i.variables,f)&&(d(),i.reportResult(g,f))},error:function(g){pe(i.variables,f)&&(Zu(g)||(g=new ht({networkError:g})),d(),i.reportError(g,f))}};return!a&&(S||!this.concast)&&(this.concast&&this.observer&&this.concast.removeObserver(this.observer),this.concast=y,this.observer=h),y.addObserver(h),y},t.prototype.reobserve=function(r,n){return Jm(this.reobserveAsConcast(r,n).promise.then(this.maskResult))},t.prototype.resubscribeAfterError=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=this.last;this.resetLastResults();var a=this.subscribe.apply(this,r);return this.last=i,a},t.prototype.observe=function(){this.reportResult(this.getCurrentFullResult(!1),this.variables)},t.prototype.reportResult=function(r,n){var i=this.getLastError(),a=this.isDifferentFromLastResult(r,n);(i||!r.partial||this.options.returnPartialData)&&this.updateLastResult(r,n),(i||a)&&xr(this.observers,"next",this.maskResult(r))},t.prototype.reportError=function(r,n){var i=C(C({},this.getLastResult()),{error:r,errors:r.graphQLErrors,networkStatus:le.error,loading:!1});this.updateLastResult(i,n),xr(this.observers,"error",this.last.error=r)},t.prototype.hasObservers=function(){return this.observers.size>0},t.prototype.tearDownQuery=function(){this.isTornDown||(this.concast&&this.observer&&(this.concast.removeObserver(this.observer),delete this.concast,delete this.observer),this.stopPolling(),this.subscriptions.forEach(function(r){return r.unsubscribe()}),this.subscriptions.clear(),this.queryManager.stopQuery(this.queryId),this.observers.clear(),this.isTornDown=!0)},t.prototype.transformDocument=function(r){return this.queryManager.transform(r)},t.prototype.maskResult=function(r){return r&&"data"in r?C(C({},r),{data:this.queryManager.maskOperation({document:this.query,data:r.data,fetchPolicy:this.options.fetchPolicy,id:this.queryId})}):r},t.prototype.resetNotifications=function(){this.cancelNotifyTimeout(),this.dirty=!1},t.prototype.cancelNotifyTimeout=function(){this.notifyTimeout&&(clearTimeout(this.notifyTimeout),this.notifyTimeout=void 0)},t.prototype.scheduleNotify=function(){var r=this;this.dirty||(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(function(){return r.notify()},0)))},t.prototype.notify=function(){if(this.cancelNotifyTimeout(),this.dirty&&(this.options.fetchPolicy=="cache-only"||this.options.fetchPolicy=="cache-and-network"||!tr(this.queryInfo.networkStatus))){var r=this.queryInfo.getDiff();r.fromOptimisticTransaction?this.observe():this.reobserveCacheFirst()}this.dirty=!1},t.prototype.reobserveCacheFirst=function(){var r=this.options,n=r.fetchPolicy,i=r.nextFetchPolicy;return n==="cache-and-network"||n==="network-only"?this.reobserve({fetchPolicy:"cache-first",nextFetchPolicy:function(a,o){return this.nextFetchPolicy=i,typeof this.nextFetchPolicy=="function"?this.nextFetchPolicy(a,o):n}}):this.reobserve()},t.inactiveOnCreation=new Dr,t})(ce);Qu(xn);function ry(e){globalThis.__DEV__!==!1&&K.error(25,e.message,e.stack)}function Kc(e){globalThis.__DEV__!==!1&&e&&globalThis.__DEV__!==!1&&K.debug(26,e)}function Na(e){return e==="network-only"||e==="no-cache"||e==="standby"}var rr=new(Tt?WeakMap:Map);function Ra(e,t){var r=e[t];typeof r=="function"&&(e[t]=function(){return rr.set(e,(rr.get(e)+1)%1e15),r.apply(this,arguments)})}var Ma=(function(){function e(t,r){r===void 0&&(r=t.generateQueryId()),this.queryId=r,this.document=null,this.lastRequestId=1,this.stopped=!1,this.observableQuery=null;var n=this.cache=t.cache;rr.has(n)||(rr.set(n,0),Ra(n,"evict"),Ra(n,"modify"),Ra(n,"reset"))}return e.prototype.init=function(t){var r=t.networkStatus||le.loading;return this.variables&&this.networkStatus!==le.loading&&!pe(this.variables,t.variables)&&(r=le.setVariables),pe(t.variables,this.variables)||(this.lastDiff=void 0,this.cancel()),Object.assign(this,{document:t.document,variables:t.variables,networkError:null,graphQLErrors:this.graphQLErrors||[],networkStatus:r}),t.observableQuery&&this.setObservableQuery(t.observableQuery),t.lastRequestId&&(this.lastRequestId=t.lastRequestId),this},e.prototype.resetDiff=function(){this.lastDiff=void 0},e.prototype.getDiff=function(){var t=this.getDiffOptions();if(this.lastDiff&&pe(t,this.lastDiff.options))return this.lastDiff.diff;this.updateWatch(this.variables);var r=this.observableQuery;if(r&&r.options.fetchPolicy==="no-cache")return{complete:!1};var n=this.cache.diff(t);return this.updateLastDiff(n,t),n},e.prototype.updateLastDiff=function(t,r){this.lastDiff=t?{diff:t,options:r||this.getDiffOptions()}:void 0},e.prototype.getDiffOptions=function(t){var r;return t===void 0&&(t=this.variables),{query:this.document,variables:t,returnPartialData:!0,optimistic:!0,canonizeResults:(r=this.observableQuery)===null||r===void 0?void 0:r.options.canonizeResults}},e.prototype.setDiff=function(t){var r,n,i=this.lastDiff&&this.lastDiff.diff;t&&!t.complete&&(!((r=this.observableQuery)===null||r===void 0)&&r.getLastError())||(this.updateLastDiff(t),pe(i&&i.result,t&&t.result)||(n=this.observableQuery)===null||n===void 0||n.scheduleNotify())},e.prototype.setObservableQuery=function(t){t!==this.observableQuery&&(this.observableQuery=t,t&&(t.queryInfo=this))},e.prototype.stop=function(){var t;if(!this.stopped){this.stopped=!0,(t=this.observableQuery)===null||t===void 0||t.resetNotifications(),this.cancel();var r=this.observableQuery;r&&r.stopPolling()}},e.prototype.cancel=function(){var t;(t=this.cancelWatch)===null||t===void 0||t.call(this),this.cancelWatch=void 0},e.prototype.updateWatch=function(t){var r=this;t===void 0&&(t=this.variables);var n=this.observableQuery;if(!(n&&n.options.fetchPolicy==="no-cache")){var i=C(C({},this.getDiffOptions(t)),{watcher:this,callback:function(a){return r.setDiff(a)}});(!this.lastWatch||!pe(i,this.lastWatch))&&(this.cancel(),this.cancelWatch=this.cache.watch(this.lastWatch=i))}},e.prototype.resetLastWrite=function(){this.lastWrite=void 0},e.prototype.shouldWrite=function(t,r){var n=this.lastWrite;return!(n&&n.dmCount===rr.get(this.cache)&&pe(r,n.variables)&&pe(t.data,n.result.data))},e.prototype.markResult=function(t,r,n,i){var a=this,o,s=new pt,u=ze(t.errors)?t.errors.slice(0):[];if((o=this.observableQuery)===null||o===void 0||o.resetNotifications(),"incremental"in t&&ze(t.incremental)){var c=Yu(this.getDiff().result,t);t.data=c}else if("hasNext"in t&&t.hasNext){var l=this.getDiff();t.data=s.merge(l.result,t.data)}this.graphQLErrors=u,n.fetchPolicy==="no-cache"?this.updateLastDiff({result:t.data,complete:!0},this.getDiffOptions(n.variables)):i!==0&&(La(t,n.errorPolicy)?this.cache.performTransaction(function(d){if(a.shouldWrite(t,n.variables))d.writeQuery({query:r,data:t.data,variables:n.variables,overwrite:i===1}),a.lastWrite={result:t,variables:n.variables,dmCount:rr.get(a.cache)};else if(a.lastDiff&&a.lastDiff.diff.complete){t.data=a.lastDiff.diff.result;return}var f=a.getDiffOptions(n.variables),p=d.diff(f);!a.stopped&&pe(a.variables,n.variables)&&a.updateWatch(n.variables),a.updateLastDiff(p,f),p.complete&&(t.data=p.result)}):this.lastWrite=void 0)},e.prototype.markReady=function(){return this.networkError=null,this.networkStatus=le.ready},e.prototype.markError=function(t){var r;return this.networkStatus=le.error,this.lastWrite=void 0,(r=this.observableQuery)===null||r===void 0||r.resetNotifications(),t.graphQLErrors&&(this.graphQLErrors=t.graphQLErrors),t.networkError&&(this.networkError=t.networkError),t},e})();function La(e,t){t===void 0&&(t="none");var r=t==="ignore"||t==="all",n=!En(e);return!n&&r&&e.data&&(n=!0),n}var ny=Object.prototype.hasOwnProperty,Xc=Object.create(null),iy=(function(){function e(t){var r=this;this.clientAwareness={},this.queries=new Map,this.fetchCancelFns=new Map,this.transformCache=new su(Xe["queryManager.getDocumentInfo"]||2e3),this.queryIdCounter=1,this.requestIdCounter=1,this.mutationIdCounter=1,this.inFlightLinkObservables=new Ke(!1),this.noCacheWarningsByQueryId=new Set;var n=new Cu(function(a){return r.cache.transformDocument(a)},{cache:!1});this.cache=t.cache,this.link=t.link,this.defaultOptions=t.defaultOptions,this.queryDeduplication=t.queryDeduplication,this.clientAwareness=t.clientAwareness,this.localState=t.localState,this.ssrMode=t.ssrMode,this.assumeImmutableResults=t.assumeImmutableResults,this.dataMasking=t.dataMasking;var i=t.documentTransform;this.documentTransform=i?n.concat(i).concat(n):n,this.defaultContext=t.defaultContext||Object.create(null),(this.onBroadcast=t.onBroadcast)&&(this.mutationStore=Object.create(null))}return e.prototype.stop=function(){var t=this;this.queries.forEach(function(r,n){t.stopQueryNoBroadcast(n)}),this.cancelPendingFetches(Ae(27))},e.prototype.cancelPendingFetches=function(t){this.fetchCancelFns.forEach(function(r){return r(t)}),this.fetchCancelFns.clear()},e.prototype.mutate=function(t){return ot(this,arguments,void 0,function(r){var n,i,a,o,s,u,c,l=r.mutation,d=r.variables,f=r.optimisticResponse,p=r.updateQueries,y=r.refetchQueries,S=y===void 0?[]:y,h=r.awaitRefetchQueries,g=h===void 0?!1:h,_=r.update,I=r.onQueryUpdated,k=r.fetchPolicy,$=k===void 0?((u=this.defaultOptions.mutate)===null||u===void 0?void 0:u.fetchPolicy)||"network-only":k,E=r.errorPolicy,x=E===void 0?((c=this.defaultOptions.mutate)===null||c===void 0?void 0:c.errorPolicy)||"none":E,v=r.keepRootFields,D=r.context;return st(this,function(b){switch(b.label){case 0:return K(l,28),K($==="network-only"||$==="no-cache",29),n=this.generateMutationId(),l=this.cache.transformForLink(this.transform(l)),i=this.getDocumentInfo(l).hasClientExports,d=this.getVariables(l,d),i?[4,this.localState.addExportedVariables(l,d,D)]:[3,2];case 1:d=b.sent(),b.label=2;case 2:return a=this.mutationStore&&(this.mutationStore[n]={mutation:l,variables:d,loading:!0,error:null}),o=f&&this.markMutationOptimistic(f,{mutationId:n,document:l,variables:d,fetchPolicy:$,errorPolicy:x,context:D,updateQueries:p,update:_,keepRootFields:v}),this.broadcastQueries(),s=this,[2,new Promise(function(A,P){return ga(s.getObservableFromLink(l,C(C({},D),{optimisticResponse:o?f:void 0}),d,{},!1),function(Q){if(En(Q)&&x==="none")throw new ht({graphQLErrors:ya(Q)});a&&(a.loading=!1,a.error=null);var J=C({},Q);return typeof S=="function"&&(S=S(J)),x==="ignore"&&En(J)&&delete J.errors,s.markMutationResult({mutationId:n,result:J,document:l,variables:d,fetchPolicy:$,errorPolicy:x,context:D,update:_,updateQueries:p,awaitRefetchQueries:g,refetchQueries:S,removeOptimistic:o?n:void 0,onQueryUpdated:I,keepRootFields:v})}).subscribe({next:function(Q){s.broadcastQueries(),(!("hasNext"in Q)||Q.hasNext===!1)&&A(C(C({},Q),{data:s.maskOperation({document:l,data:Q.data,fetchPolicy:$,id:n})}))},error:function(Q){a&&(a.loading=!1,a.error=Q),o&&s.cache.removeOptimistic(n),s.broadcastQueries(),P(Q instanceof ht?Q:new ht({networkError:Q}))}})})]}})})},e.prototype.markMutationResult=function(t,r){var n=this;r===void 0&&(r=this.cache);var i=t.result,a=[],o=t.fetchPolicy==="no-cache";if(!o&&La(i,t.errorPolicy)){if(Kt(i)||a.push({result:i.data,dataId:"ROOT_MUTATION",query:t.document,variables:t.variables}),Kt(i)&&ze(i.incremental)){var s=r.diff({id:"ROOT_MUTATION",query:this.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0}),u=void 0;s.result&&(u=Yu(s.result,i)),typeof u<"u"&&(i.data=u,a.push({result:u,dataId:"ROOT_MUTATION",query:t.document,variables:t.variables}))}var c=t.updateQueries;c&&this.queries.forEach(function(d,f){var p=d.observableQuery,y=p&&p.queryName;if(!(!y||!ny.call(c,y))){var S=c[y],h=n.queries.get(f),g=h.document,_=h.variables,I=r.diff({query:g,variables:_,returnPartialData:!0,optimistic:!1}),k=I.result,$=I.complete;if($&&k){var E=S(k,{mutationResult:i,queryName:g&&Er(g)||void 0,queryVariables:_});E&&a.push({result:E,dataId:"ROOT_QUERY",query:g,variables:_})}}})}if(a.length>0||(t.refetchQueries||"").length>0||t.update||t.onQueryUpdated||t.removeOptimistic){var l=[];if(this.refetchQueries({updateCache:function(d){o||a.forEach(function(S){return d.write(S)});var f=t.update,p=!tg(i)||Kt(i)&&!i.hasNext;if(f){if(!o){var y=d.diff({id:"ROOT_MUTATION",query:n.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0});y.complete&&(i=C(C({},i),{data:y.result}),"incremental"in i&&delete i.incremental,"hasNext"in i&&delete i.hasNext)}p&&f(d,i,{context:t.context,variables:t.variables})}!o&&!t.keepRootFields&&p&&d.modify({id:"ROOT_MUTATION",fields:function(S,h){var g=h.fieldName,_=h.DELETE;return g==="__typename"?S:_}})},include:t.refetchQueries,optimistic:!1,removeOptimistic:t.removeOptimistic,onQueryUpdated:t.onQueryUpdated||null}).forEach(function(d){return l.push(d)}),t.awaitRefetchQueries||t.onQueryUpdated)return Promise.all(l).then(function(){return i})}return Promise.resolve(i)},e.prototype.markMutationOptimistic=function(t,r){var n=this,i=typeof t=="function"?t(r.variables,{IGNORE:Xc}):t;return i===Xc?!1:(this.cache.recordOptimisticTransaction(function(a){try{n.markMutationResult(C(C({},r),{result:{data:i}}),a)}catch(o){globalThis.__DEV__!==!1&&K.error(o)}},r.mutationId),!0)},e.prototype.fetchQuery=function(t,r,n){return this.fetchConcastWithInfo(this.getOrCreateQuery(t),r,n).concast.promise},e.prototype.getQueryStore=function(){var t=Object.create(null);return this.queries.forEach(function(r,n){t[n]={variables:r.variables,networkStatus:r.networkStatus,networkError:r.networkError,graphQLErrors:r.graphQLErrors}}),t},e.prototype.resetErrors=function(t){var r=this.queries.get(t);r&&(r.networkError=void 0,r.graphQLErrors=[])},e.prototype.transform=function(t){return this.documentTransform.transformDocument(t)},e.prototype.getDocumentInfo=function(t){var r=this.transformCache;if(!r.has(t)){var n={hasClientExports:Lh(t),hasForcedResolvers:this.localState.shouldForceResolvers(t),hasNonreactiveDirective:_r(["nonreactive"],t),nonReactiveQuery:jm(t),clientQuery:this.localState.clientQuery(t),serverQuery:Nu([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"},{name:"unmask"}],t),defaultVars:ta(Ot(t)),asQuery:C(C({},t),{definitions:t.definitions.map(function(i){return i.kind==="OperationDefinition"&&i.operation!=="query"?C(C({},i),{operation:"query"}):i})})};r.set(t,n)}return r.get(t)},e.prototype.getVariables=function(t,r){return C(C({},this.getDocumentInfo(t).defaultVars),r)},e.prototype.watchQuery=function(t){var r=this.transform(t.query);t=C(C({},t),{variables:this.getVariables(r,t.variables)}),typeof t.notifyOnNetworkStatusChange>"u"&&(t.notifyOnNetworkStatusChange=!1);var n=new Ma(this),i=new xn({queryManager:this,queryInfo:n,options:t});return i.lastQuery=r,xn.inactiveOnCreation.getValue()||this.queries.set(i.queryId,n),n.init({document:r,observableQuery:i,variables:i.variables}),i},e.prototype.query=function(t,r){var n=this;r===void 0&&(r=this.generateQueryId()),K(t.query,30),K(t.query.kind==="Document",31),K(!t.returnPartialData,32),K(!t.pollInterval,33);var i=this.transform(t.query);return this.fetchQuery(r,C(C({},t),{query:i})).then(function(a){return a&&C(C({},a),{data:n.maskOperation({document:i,data:a.data,fetchPolicy:t.fetchPolicy,id:r})})}).finally(function(){return n.stopQuery(r)})},e.prototype.generateQueryId=function(){return String(this.queryIdCounter++)},e.prototype.generateRequestId=function(){return this.requestIdCounter++},e.prototype.generateMutationId=function(){return String(this.mutationIdCounter++)},e.prototype.stopQueryInStore=function(t){this.stopQueryInStoreNoBroadcast(t),this.broadcastQueries()},e.prototype.stopQueryInStoreNoBroadcast=function(t){var r=this.queries.get(t);r&&r.stop()},e.prototype.clearStore=function(t){return t===void 0&&(t={discardWatches:!0}),this.cancelPendingFetches(Ae(34)),this.queries.forEach(function(r){r.observableQuery?r.networkStatus=le.loading:r.stop()}),this.mutationStore&&(this.mutationStore=Object.create(null)),this.cache.reset(t)},e.prototype.getObservableQueries=function(t){var r=this;t===void 0&&(t="active");var n=new Map,i=new Map,a=new Map,o=new Set;return Array.isArray(t)&&t.forEach(function(s){if(typeof s=="string")i.set(s,s),a.set(s,!1);else if(dm(s)){var u=dt(r.transform(s));i.set(u,Er(s)),a.set(u,!1)}else me(s)&&s.query&&o.add(s)}),this.queries.forEach(function(s,u){var c=s.observableQuery,l=s.document;if(c){if(t==="all"){n.set(u,c);return}var d=c.queryName,f=c.options.fetchPolicy;if(f==="standby"||t==="active"&&!c.hasObservers())return;(t==="active"||d&&a.has(d)||l&&a.has(dt(l)))&&(n.set(u,c),d&&a.set(d,!0),l&&a.set(dt(l),!0))}}),o.size&&o.forEach(function(s){var u=ji("legacyOneTimeQuery"),c=r.getOrCreateQuery(u).init({document:s.query,variables:s.variables}),l=new xn({queryManager:r,queryInfo:c,options:C(C({},s),{fetchPolicy:"network-only"})});K(l.queryId===u),c.setObservableQuery(l),n.set(u,l)}),globalThis.__DEV__!==!1&&a.size&&a.forEach(function(s,u){if(!s){var c=i.get(u);c?globalThis.__DEV__!==!1&&K.warn(35,c):globalThis.__DEV__!==!1&&K.warn(36)}}),n},e.prototype.reFetchObservableQueries=function(t){var r=this;t===void 0&&(t=!1);var n=[];return this.getObservableQueries(t?"all":"active").forEach(function(i,a){var o=i.options.fetchPolicy;i.resetLastResults(),(t||o!=="standby"&&o!=="cache-only")&&n.push(i.refetch()),(r.queries.get(a)||i.queryInfo).setDiff(null)}),this.broadcastQueries(),Promise.all(n)},e.prototype.startGraphQLSubscription=function(t){var r=this,n=t.query,i=t.variables,a=t.fetchPolicy,o=t.errorPolicy,s=o===void 0?"none":o,u=t.context,c=u===void 0?{}:u,l=t.extensions,d=l===void 0?{}:l;n=this.transform(n),i=this.getVariables(n,i);var f=function(y){return r.getObservableFromLink(n,c,y,d).map(function(S){a!=="no-cache"&&(La(S,s)&&r.cache.write({query:n,result:S.data,dataId:"ROOT_SUBSCRIPTION",variables:y}),r.broadcastQueries());var h=En(S),g=Xu(S);if(h||g){var _={};if(h&&(_.graphQLErrors=S.errors),g&&(_.protocolErrors=S.extensions[In]),s==="none"||g)throw new ht(_)}return s==="ignore"&&delete S.errors,S})};if(this.getDocumentInfo(n).hasClientExports){var p=this.localState.addExportedVariables(n,i,c).then(f);return new ce(function(y){var S=null;return p.then(function(h){return S=h.subscribe(y)},y.error),function(){return S&&S.unsubscribe()}})}return f(i)},e.prototype.stopQuery=function(t){this.stopQueryNoBroadcast(t),this.broadcastQueries()},e.prototype.stopQueryNoBroadcast=function(t){this.stopQueryInStoreNoBroadcast(t),this.removeQuery(t)},e.prototype.removeQuery=function(t){var r;this.fetchCancelFns.delete(t),this.queries.has(t)&&((r=this.queries.get(t))===null||r===void 0||r.stop(),this.queries.delete(t))},e.prototype.broadcastQueries=function(){this.onBroadcast&&this.onBroadcast(),this.queries.forEach(function(t){var r;return(r=t.observableQuery)===null||r===void 0?void 0:r.notify()})},e.prototype.getLocalState=function(){return this.localState},e.prototype.getObservableFromLink=function(t,r,n,i,a){var o=this,s;a===void 0&&(a=(s=r?.queryDeduplication)!==null&&s!==void 0?s:this.queryDeduplication);var u,c=this.getDocumentInfo(t),l=c.serverQuery,d=c.clientQuery;if(l){var f=this,p=f.inFlightLinkObservables,y=f.link,S={query:l,variables:n,operationName:Er(l)||void 0,context:this.prepareContext(C(C({},r),{forceFetch:!a})),extensions:i};if(r=S.context,a){var h=dt(l),g=ct(n),_=p.lookup(h,g);if(u=_.observable,!u){var I=new Jt([Sa(y,S)]);u=_.observable=I,I.beforeNext(function k($,E){$==="next"&&"hasNext"in E&&E.hasNext?I.beforeNext(k):p.remove(h,g)})}}else u=new Jt([Sa(y,S)])}else u=new Jt([ce.of({data:{}})]),r=this.prepareContext(r);return d&&(u=ga(u,function(k){return o.localState.runResolvers({document:d,remoteResult:k,context:r,variables:n})})),u},e.prototype.getResultsFromLink=function(t,r,n){var i=t.lastRequestId=this.generateRequestId(),a=this.cache.transformForLink(n.query);return ga(this.getObservableFromLink(a,n.context,n.variables),function(o){var s=ya(o),u=s.length>0,c=n.errorPolicy;if(i>=t.lastRequestId){if(u&&c==="none")throw t.markError(new ht({graphQLErrors:s}));t.markResult(o,a,n,r),t.markReady()}var l={data:o.data,loading:!1,networkStatus:le.ready};return u&&c==="none"&&(l.data=void 0),u&&c!=="ignore"&&(l.errors=s,l.networkStatus=le.error),l},function(o){var s=Zu(o)?o:new ht({networkError:o});throw i>=t.lastRequestId&&t.markError(s),s})},e.prototype.fetchConcastWithInfo=function(t,r,n,i){var a=this;n===void 0&&(n=le.loading),i===void 0&&(i=r.query);var o=this.getVariables(i,r.variables),s=this.defaultOptions.watchQuery,u=r.fetchPolicy,c=u===void 0?s&&s.fetchPolicy||"cache-first":u,l=r.errorPolicy,d=l===void 0?s&&s.errorPolicy||"none":l,f=r.returnPartialData,p=f===void 0?!1:f,y=r.notifyOnNetworkStatusChange,S=y===void 0?!1:y,h=r.context,g=h===void 0?{}:h,_=Object.assign({},r,{query:i,variables:o,fetchPolicy:c,errorPolicy:d,returnPartialData:p,notifyOnNetworkStatusChange:S,context:g}),I=function(v){_.variables=v;var D=a.fetchQueryByPolicy(t,_,n);return _.fetchPolicy!=="standby"&&D.sources.length>0&&t.observableQuery&&t.observableQuery.applyNextFetchPolicy("after-fetch",r),D},k=function(){return a.fetchCancelFns.delete(t.queryId)};this.fetchCancelFns.set(t.queryId,function(v){k(),setTimeout(function(){return $.cancel(v)})});var $,E;if(this.getDocumentInfo(_.query).hasClientExports)$=new Jt(this.localState.addExportedVariables(_.query,_.variables,_.context).then(I).then(function(v){return v.sources})),E=!0;else{var x=I(_.variables);E=x.fromLink,$=new Jt(x.sources)}return $.promise.then(k,k),{concast:$,fromLink:E}},e.prototype.refetchQueries=function(t){var r=this,n=t.updateCache,i=t.include,a=t.optimistic,o=a===void 0?!1:a,s=t.removeOptimistic,u=s===void 0?o?ji("refetchQueries"):void 0:s,c=t.onQueryUpdated,l=new Map;i&&this.getObservableQueries(i).forEach(function(f,p){l.set(p,{oq:f,lastDiff:(r.queries.get(p)||f.queryInfo).getDiff()})});var d=new Map;return n&&this.cache.batch({update:n,optimistic:o&&u||!1,removeOptimistic:u,onWatchUpdated:function(f,p,y){var S=f.watcher instanceof Ma&&f.watcher.observableQuery;if(S){if(c){l.delete(S.queryId);var h=c(S,p,y);return h===!0&&(h=S.refetch()),h!==!1&&d.set(S,h),h}c!==null&&l.set(S.queryId,{oq:S,lastDiff:y,diff:p})}}}),l.size&&l.forEach(function(f,p){var y=f.oq,S=f.lastDiff,h=f.diff,g;c&&(h||(h=r.cache.diff(y.queryInfo.getDiffOptions())),g=c(y,h,S)),(!c||g===!0)&&(g=y.refetch()),g!==!1&&d.set(y,g),p.indexOf("legacyOneTimeQuery")>=0&&r.stopQueryNoBroadcast(p)}),u&&this.cache.removeOptimistic(u),d},e.prototype.maskOperation=function(t){var r,n,i,a=t.document,o=t.data;if(globalThis.__DEV__!==!1){var s=t.fetchPolicy,u=t.id,c=(r=Ot(a))===null||r===void 0?void 0:r.operation,l=((n=c?.[0])!==null&&n!==void 0?n:"o")+u;this.dataMasking&&s==="no-cache"&&!Yh(a)&&!this.noCacheWarningsByQueryId.has(l)&&(this.noCacheWarningsByQueryId.add(l),globalThis.__DEV__!==!1&&K.warn(37,(i=Er(a))!==null&&i!==void 0?i:"Unnamed ".concat(c??"operation")))}return this.dataMasking?Lg(o,a,this.cache):o},e.prototype.maskFragment=function(t){var r=t.data,n=t.fragment,i=t.fragmentName;return this.dataMasking?Sc(r,n,this.cache,i):r},e.prototype.fetchQueryByPolicy=function(t,r,n){var i=this,a=r.query,o=r.variables,s=r.fetchPolicy,u=r.refetchWritePolicy,c=r.errorPolicy,l=r.returnPartialData,d=r.context,f=r.notifyOnNetworkStatusChange,p=t.networkStatus;t.init({document:a,variables:o,networkStatus:n});var y=function(){return t.getDiff()},S=function(k,$){$===void 0&&($=t.networkStatus||le.loading);var E=k.result;globalThis.__DEV__!==!1&&!l&&!pe(E,{})&&Kc(k.missing);var x=function(v){return ce.of(C({data:v,loading:tr($),networkStatus:$},k.complete?null:{partial:!0}))};return E&&i.getDocumentInfo(a).hasForcedResolvers?i.localState.runResolvers({document:a,remoteResult:{data:E},context:d,variables:o,onlyRunForcedResolvers:!0}).then(function(v){return x(v.data||void 0)}):c==="none"&&$===le.refetch&&Array.isArray(k.missing)?x(void 0):x(E)},h=s==="no-cache"?0:n===le.refetch&&u!=="merge"?1:2,g=function(){return i.getResultsFromLink(t,h,{query:a,variables:o,context:d,fetchPolicy:s,errorPolicy:c})},_=f&&typeof p=="number"&&p!==n&&tr(n);switch(s){default:case"cache-first":{var I=y();return I.complete?{fromLink:!1,sources:[S(I,t.markReady())]}:l||_?{fromLink:!0,sources:[S(I),g()]}:{fromLink:!0,sources:[g()]}}case"cache-and-network":{var I=y();return I.complete||l||_?{fromLink:!0,sources:[S(I),g()]}:{fromLink:!0,sources:[g()]}}case"cache-only":return{fromLink:!1,sources:[S(y(),t.markReady())]};case"network-only":return _?{fromLink:!0,sources:[S(y()),g()]}:{fromLink:!0,sources:[g()]};case"no-cache":return _?{fromLink:!0,sources:[S(t.getDiff()),g()]}:{fromLink:!0,sources:[g()]};case"standby":return{fromLink:!1,sources:[]}}},e.prototype.getOrCreateQuery=function(t){return t&&!this.queries.has(t)&&this.queries.set(t,new Ma(this,t)),this.queries.get(t)},e.prototype.prepareContext=function(t){t===void 0&&(t={});var r=this.localState.prepareContext(t);return C(C(C({},this.defaultContext),r),{clientAwareness:this.clientAwareness})},e})(),ay=(function(){function e(t){var r=t.cache,n=t.client,i=t.resolvers,a=t.fragmentMatcher;this.selectionsToResolveCache=new WeakMap,this.cache=r,n&&(this.client=n),i&&this.addResolvers(i),a&&this.setFragmentMatcher(a)}return e.prototype.addResolvers=function(t){var r=this;this.resolvers=this.resolvers||{},Array.isArray(t)?t.forEach(function(n){r.resolvers=Mu(r.resolvers,n)}):this.resolvers=Mu(this.resolvers,t)},e.prototype.setResolvers=function(t){this.resolvers={},this.addResolvers(t)},e.prototype.getResolvers=function(){return this.resolvers||{}},e.prototype.runResolvers=function(t){return ot(this,arguments,void 0,function(r){var n=r.document,i=r.remoteResult,a=r.context,o=r.variables,s=r.onlyRunForcedResolvers,u=s===void 0?!1:s;return st(this,function(c){return n?[2,this.resolveDocument(n,i.data,a,o,this.fragmentMatcher,u).then(function(l){return C(C({},i),{data:l.result})})]:[2,i]})})},e.prototype.setFragmentMatcher=function(t){this.fragmentMatcher=t},e.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},e.prototype.clientQuery=function(t){return _r(["client"],t)&&this.resolvers?t:null},e.prototype.serverQuery=function(t){return Ru(t)},e.prototype.prepareContext=function(t){var r=this.cache;return C(C({},t),{cache:r,getCacheKey:function(n){return r.identify(n)}})},e.prototype.addExportedVariables=function(t){return ot(this,arguments,void 0,function(r,n,i){return n===void 0&&(n={}),i===void 0&&(i={}),st(this,function(a){return r?[2,this.resolveDocument(r,this.buildRootValueFromCache(r,n)||{},this.prepareContext(i),n).then(function(o){return C(C({},n),o.exportedVariables)})]:[2,C({},n)]})})},e.prototype.shouldForceResolvers=function(t){var r=!1;return Le(t,{Directive:{enter:function(n){if(n.name.value==="client"&&n.arguments&&(r=n.arguments.some(function(i){return i.name.value==="always"&&i.value.kind==="BooleanValue"&&i.value.value===!0}),r))return fn}}}),r},e.prototype.buildRootValueFromCache=function(t,r){return this.cache.diff({query:Lm(t),variables:r,returnPartialData:!0,optimistic:!1}).result},e.prototype.resolveDocument=function(t,r){return ot(this,arguments,void 0,function(n,i,a,o,s,u){var c,l,d,f,p,y,S,h,g,_,I;return a===void 0&&(a={}),o===void 0&&(o={}),s===void 0&&(s=function(){return!0}),u===void 0&&(u=!1),st(this,function(k){return c=Qt(n),l=zt(n),d=Ut(l),f=this.collectSelectionsToResolve(c,d),p=c.operation,y=p?p.charAt(0).toUpperCase()+p.slice(1):"Query",S=this,h=S.cache,g=S.client,_={fragmentMap:d,context:C(C({},a),{cache:h,client:g}),variables:o,fragmentMatcher:s,defaultOperationType:y,exportedVariables:{},selectionsToResolve:f,onlyRunForcedResolvers:u},I=!1,[2,this.resolveSelectionSet(c.selectionSet,I,i,_).then(function($){return{result:$,exportedVariables:_.exportedVariables}})]})})},e.prototype.resolveSelectionSet=function(t,r,n,i){return ot(this,void 0,void 0,function(){var a,o,s,u,c,l=this;return st(this,function(d){return a=i.fragmentMap,o=i.context,s=i.variables,u=[n],c=function(f){return ot(l,void 0,void 0,function(){var p,y;return st(this,function(S){return!r&&!i.selectionsToResolve.has(f)?[2]:Sr(f,s)?lt(f)?[2,this.resolveField(f,r,n,i).then(function(h){var g;typeof h<"u"&&u.push((g={},g[Ze(f)]=h,g))})]:(Dm(f)?p=f:(p=a[f.name.value],K(p,19,f.name.value)),p&&p.typeCondition&&(y=p.typeCondition.name.value,i.fragmentMatcher(n,y,o))?[2,this.resolveSelectionSet(p.selectionSet,r,n,i).then(function(h){u.push(h)})]:[2]):[2]})})},[2,Promise.all(t.selections.map(c)).then(function(){return bn(u)})]})})},e.prototype.resolveField=function(t,r,n,i){return ot(this,void 0,void 0,function(){var a,o,s,u,c,l,d,f,p,y=this;return st(this,function(S){return n?(a=i.variables,o=t.name.value,s=Ze(t),u=o!==s,c=n[s]||n[o],l=Promise.resolve(c),(!i.onlyRunForcedResolvers||this.shouldForceResolvers(t))&&(d=n.__typename||i.defaultOperationType,f=this.resolvers&&this.resolvers[d],f&&(p=f[u?o:s],p&&(l=Promise.resolve(ka.withValue(this.cache,p,[n,gn(t,a),i.context,{field:t,fragmentMap:i.fragmentMap}]))))),[2,l.then(function(h){var g,_;if(h===void 0&&(h=c),t.directives&&t.directives.forEach(function(k){k.name.value==="export"&&k.arguments&&k.arguments.forEach(function($){$.name.value==="as"&&$.value.kind==="StringValue"&&(i.exportedVariables[$.value.value]=h)})}),!t.selectionSet||h==null)return h;var I=(_=(g=t.directives)===null||g===void 0?void 0:g.some(function(k){return k.name.value==="client"}))!==null&&_!==void 0?_:!1;if(Array.isArray(h))return y.resolveSubSelectedArray(t,r||I,h,i);if(t.selectionSet)return y.resolveSelectionSet(t.selectionSet,r||I,h,i)})]):[2,null]})})},e.prototype.resolveSubSelectedArray=function(t,r,n,i){var a=this;return Promise.all(n.map(function(o){if(o===null)return null;if(Array.isArray(o))return a.resolveSubSelectedArray(t,r,o,i);if(t.selectionSet)return a.resolveSelectionSet(t.selectionSet,r,o,i)}))},e.prototype.collectSelectionsToResolve=function(t,r){var n=function(o){return!Array.isArray(o)},i=this.selectionsToResolveCache;function a(o){if(!i.has(o)){var s=new Set;i.set(o,s),Le(o,{Directive:function(u,c,l,d,f){u.name.value==="client"&&f.forEach(function(p){n(p)&&nu(p)&&s.add(p)})},FragmentSpread:function(u,c,l,d,f){var p=r[u.name.value];K(p,20,u.name.value);var y=a(p);y.size>0&&(f.forEach(function(S){n(S)&&nu(S)&&s.add(S)}),s.add(u),y.forEach(function(S){s.add(S)}))}})}return i.get(o)}return a(t)},e})(),Zc=!1,ja=(function(){function e(t){var r=this,n;if(this.resetStoreCallbacks=[],this.clearStoreCallbacks=[],!t.cache)throw Ae(16);var i=t.uri,a=t.credentials,o=t.headers,s=t.cache,u=t.documentTransform,c=t.ssrMode,l=c===void 0?!1:c,d=t.ssrForceFetchDelay,f=d===void 0?0:d,p=t.connectToDevTools,y=t.queryDeduplication,S=y===void 0?!0:y,h=t.defaultOptions,g=t.defaultContext,_=t.assumeImmutableResults,I=_===void 0?s.assumeImmutableResults:_,k=t.resolvers,$=t.typeDefs,E=t.fragmentMatcher,x=t.name,v=t.version,D=t.devtools,b=t.dataMasking,A=t.link;A||(A=i?new Ag({uri:i,credentials:a,headers:o}):Ue.empty()),this.link=A,this.cache=s,this.disableNetworkFetches=l||f>0,this.queryDeduplication=S,this.defaultOptions=h||Object.create(null),this.typeDefs=$,this.devtoolsConfig=C(C({},D),{enabled:(n=D?.enabled)!==null&&n!==void 0?n:p}),this.devtoolsConfig.enabled===void 0&&(this.devtoolsConfig.enabled=globalThis.__DEV__!==!1),f&&setTimeout(function(){return r.disableNetworkFetches=!1},f),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.watchFragment=this.watchFragment.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this),this.version=Mi,this.localState=new ay({cache:s,client:this,resolvers:k,fragmentMatcher:E}),this.queryManager=new iy({cache:this.cache,link:this.link,defaultOptions:this.defaultOptions,defaultContext:g,documentTransform:u,queryDeduplication:S,ssrMode:l,dataMasking:!!b,clientAwareness:{name:x,version:v},localState:this.localState,assumeImmutableResults:I,onBroadcast:this.devtoolsConfig.enabled?function(){r.devToolsHookCb&&r.devToolsHookCb({action:{},state:{queries:r.queryManager.getQueryStore(),mutations:r.queryManager.mutationStore||{}},dataWithOptimisticResults:r.cache.extract(!0)})}:void 0}),this.devtoolsConfig.enabled&&this.connectToDevTools()}return e.prototype.connectToDevTools=function(){if(!(typeof window>"u")){var t=window,r=Symbol.for("apollo.devtools");(t[r]=t[r]||[]).push(this),t.__APOLLO_CLIENT__=this,!Zc&&globalThis.__DEV__!==!1&&(Zc=!0,window.document&&window.top===window.self&&/^(https?|file):$/.test(window.location.protocol)&&setTimeout(function(){if(!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__){var n=window.navigator,i=n&&n.userAgent,a=void 0;typeof i=="string"&&(i.indexOf("Chrome/")>-1?a="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":i.indexOf("Firefox/")>-1&&(a="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),a&&globalThis.__DEV__!==!1&&K.log("Download the Apollo DevTools for a better development experience: %s",a)}},1e4))}},Object.defineProperty(e.prototype,"documentTransform",{get:function(){return this.queryManager.documentTransform},enumerable:!1,configurable:!0}),e.prototype.stop=function(){this.queryManager.stop()},e.prototype.watchQuery=function(t){return this.defaultOptions.watchQuery&&(t=va(this.defaultOptions.watchQuery,t)),this.disableNetworkFetches&&(t.fetchPolicy==="network-only"||t.fetchPolicy==="cache-and-network")&&(t=C(C({},t),{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(t)},e.prototype.query=function(t){return this.defaultOptions.query&&(t=va(this.defaultOptions.query,t)),K(t.fetchPolicy!=="cache-and-network",17),this.disableNetworkFetches&&t.fetchPolicy==="network-only"&&(t=C(C({},t),{fetchPolicy:"cache-first"})),this.queryManager.query(t)},e.prototype.mutate=function(t){return this.defaultOptions.mutate&&(t=va(this.defaultOptions.mutate,t)),this.queryManager.mutate(t)},e.prototype.subscribe=function(t){var r=this,n=this.queryManager.generateQueryId();return this.queryManager.startGraphQLSubscription(t).map(function(i){return C(C({},i),{data:r.queryManager.maskOperation({document:t.query,data:i.data,fetchPolicy:t.fetchPolicy,id:n})})})},e.prototype.readQuery=function(t,r){return r===void 0&&(r=!1),this.cache.readQuery(t,r)},e.prototype.watchFragment=function(t){var r;return this.cache.watchFragment(C(C({},t),(r={},r[Symbol.for("apollo.dataMasking")]=this.queryManager.dataMasking,r)))},e.prototype.readFragment=function(t,r){return r===void 0&&(r=!1),this.cache.readFragment(t,r)},e.prototype.writeQuery=function(t){var r=this.cache.writeQuery(t);return t.broadcast!==!1&&this.queryManager.broadcastQueries(),r},e.prototype.writeFragment=function(t){var r=this.cache.writeFragment(t);return t.broadcast!==!1&&this.queryManager.broadcastQueries(),r},e.prototype.__actionHookForDevTools=function(t){this.devToolsHookCb=t},e.prototype.__requestRaw=function(t){return Sa(this.link,t)},e.prototype.resetStore=function(){var t=this;return Promise.resolve().then(function(){return t.queryManager.clearStore({discardWatches:!1})}).then(function(){return Promise.all(t.resetStoreCallbacks.map(function(r){return r()}))}).then(function(){return t.reFetchObservableQueries()})},e.prototype.clearStore=function(){var t=this;return Promise.resolve().then(function(){return t.queryManager.clearStore({discardWatches:!0})}).then(function(){return Promise.all(t.clearStoreCallbacks.map(function(r){return r()}))})},e.prototype.onResetStore=function(t){var r=this;return this.resetStoreCallbacks.push(t),function(){r.resetStoreCallbacks=r.resetStoreCallbacks.filter(function(n){return n!==t})}},e.prototype.onClearStore=function(t){var r=this;return this.clearStoreCallbacks.push(t),function(){r.clearStoreCallbacks=r.clearStoreCallbacks.filter(function(n){return n!==t})}},e.prototype.reFetchObservableQueries=function(t){return this.queryManager.reFetchObservableQueries(t)},e.prototype.refetchQueries=function(t){var r=this.queryManager.refetchQueries(t),n=[],i=[];r.forEach(function(o,s){n.push(s),i.push(o)});var a=Promise.all(i);return a.queries=n,a.results=i,a.catch(function(o){globalThis.__DEV__!==!1&&K.debug(18,o)}),a},e.prototype.getObservableQueries=function(t){return t===void 0&&(t="active"),this.queryManager.getObservableQueries(t)},e.prototype.extract=function(t){return this.cache.extract(t)},e.prototype.restore=function(t){return this.cache.restore(t)},e.prototype.addResolvers=function(t){this.localState.addResolvers(t)},e.prototype.setResolvers=function(t){this.localState.setResolvers(t)},e.prototype.getResolvers=function(){return this.localState.getResolvers()},e.prototype.setLocalStateFragmentMatcher=function(t){this.localState.setFragmentMatcher(t)},e.prototype.setLink=function(t){this.link=this.queryManager.link=t},Object.defineProperty(e.prototype,"defaultContext",{get:function(){return this.queryManager.defaultContext},enumerable:!1,configurable:!0}),e})();globalThis.__DEV__!==!1&&(ja.prototype.getMemoryInternals=nm);var An=new Map,Ua=new Map,el=!0,Cn=!1;function tl(e){return e.replace(/[\s,]+/g," ").trim()}function oy(e){return tl(e.source.body.substring(e.start,e.end))}function sy(e){var t=new Set,r=[];return e.definitions.forEach(function(n){if(n.kind==="FragmentDefinition"){var i=n.name.value,a=oy(n.loc),o=Ua.get(i);o&&!o.has(a)?el&&console.warn("Warning: fragment with name "+i+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):o||Ua.set(i,o=new Set),o.add(a),t.has(a)||(t.add(a),r.push(n))}else r.push(n)}),C(C({},e),{definitions:r})}function uy(e){var t=new Set(e.definitions);t.forEach(function(n){n.loc&&delete n.loc,Object.keys(n).forEach(function(i){var a=n[i];a&&typeof a=="object"&&t.add(a)})});var r=e.loc;return r&&(delete r.startToken,delete r.endToken),e}function cy(e){var t=tl(e);if(!An.has(t)){var r=Oh(e,{experimentalFragmentVariables:Cn,allowLegacyFragmentVariables:Cn});if(!r||r.kind!=="Document")throw new Error("Not a valid GraphQL document.");An.set(t,uy(sy(r)))}return An.get(t)}function w(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];typeof e=="string"&&(e=[e]);var n=e[0];return t.forEach(function(i,a){i&&i.kind==="Document"?n+=i.loc.source.body:n+=i,n+=e[a+1]}),cy(n)}function ly(){An.clear(),Ua.clear()}function fy(){el=!1}function dy(){Cn=!0}function py(){Cn=!1}var Mr={gql:w,resetCaches:ly,disableFragmentWarnings:fy,enableExperimentalFragmentVariables:dy,disableExperimentalFragmentVariables:py};(function(e){e.gql=Mr.gql,e.resetCaches=Mr.resetCaches,e.disableFragmentWarnings=Mr.disableFragmentWarnings,e.enableExperimentalFragmentVariables=Mr.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=Mr.disableExperimentalFragmentVariables})(w||(w={})),w.default=w;var rl;(function(e){e.Database="DATABASE",e.Filesystem="FILESYSTEM"})(rl||(rl={}));var nl;(function(e){e.Add="ADD",e.Remove="REMOVE",e.Set="SET"})(nl||(nl={}));var il;(function(e){e.Cut="CUT",e.Uncut="UNCUT"})(il||(il={}));var al;(function(e){e.Between="BETWEEN",e.Equals="EQUALS",e.Excludes="EXCLUDES",e.GreaterThan="GREATER_THAN",e.Includes="INCLUDES",e.IncludesAll="INCLUDES_ALL",e.IsNull="IS_NULL",e.LessThan="LESS_THAN",e.MatchesRegex="MATCHES_REGEX",e.NotBetween="NOT_BETWEEN",e.NotEquals="NOT_EQUALS",e.NotMatchesRegex="NOT_MATCHES_REGEX",e.NotNull="NOT_NULL"})(al||(al={}));var ol;(function(e){e.Galleries="GALLERIES",e.Groups="GROUPS",e.Images="IMAGES",e.Movies="MOVIES",e.Performers="PERFORMERS",e.Scenes="SCENES",e.SceneMarkers="SCENE_MARKERS",e.Studios="STUDIOS",e.Tags="TAGS"})(ol||(ol={}));var sl;(function(e){e.Female="FEMALE",e.Intersex="INTERSEX",e.Male="MALE",e.NonBinary="NON_BINARY",e.TransgenderFemale="TRANSGENDER_FEMALE",e.TransgenderMale="TRANSGENDER_MALE"})(sl||(sl={}));var ul;(function(e){e.Md5="MD5",e.Oshash="OSHASH"})(ul||(ul={}));var cl;(function(e){e.Ignore="IGNORE",e.Merge="MERGE",e.Overwrite="OVERWRITE"})(cl||(cl={}));var ll;(function(e){e.FitX="FIT_X",e.FitXy="FIT_XY",e.Original="ORIGINAL"})(ll||(ll={}));var fl;(function(e){e.PanY="PAN_Y",e.Zoom="ZOOM"})(fl||(fl={}));var dl;(function(e){e.Fail="FAIL",e.Ignore="IGNORE",e.Overwrite="OVERWRITE"})(dl||(dl={}));var pl;(function(e){e.Create="CREATE",e.Fail="FAIL",e.Ignore="IGNORE"})(pl||(pl={}));var hl;(function(e){e.Cancelled="CANCELLED",e.Failed="FAILED",e.Finished="FINISHED",e.Ready="READY",e.Running="RUNNING",e.Stopping="STOPPING"})(hl||(hl={}));var ml;(function(e){e.Add="ADD",e.Remove="REMOVE",e.Update="UPDATE"})(ml||(ml={}));var gl;(function(e){e.Debug="Debug",e.Error="Error",e.Info="Info",e.Progress="Progress",e.Trace="Trace",e.Warning="Warning"})(gl||(gl={}));var yl;(function(e){e.Landscape="LANDSCAPE",e.Portrait="PORTRAIT",e.Square="SQUARE"})(yl||(yl={}));var vl;(function(e){e.Plugin="Plugin",e.Scraper="Scraper"})(vl||(vl={}));var bl;(function(e){e.Boolean="BOOLEAN",e.Number="NUMBER",e.String="STRING"})(bl||(bl={}));var Sl;(function(e){e.Fast="fast",e.Medium="medium",e.Slow="slow",e.Slower="slower",e.Ultrafast="ultrafast",e.Veryfast="veryfast",e.Veryslow="veryslow"})(Sl||(Sl={}));var _l;(function(e){e.EightK="EIGHT_K",e.FiveK="FIVE_K",e.FourK="FOUR_K",e.FullHd="FULL_HD",e.Huge="HUGE",e.Low="LOW",e.QuadHd="QUAD_HD",e.R360P="R360P",e.SevenK="SEVEN_K",e.SixK="SIX_K",e.Standard="STANDARD",e.StandardHd="STANDARD_HD",e.VeryLow="VERY_LOW",e.VrHd="VR_HD",e.WebHd="WEB_HD"})(_l||(_l={}));var wl;(function(e){e.Gallery="GALLERY",e.Group="GROUP",e.Image="IMAGE",e.Movie="MOVIE",e.Performer="PERFORMER",e.Scene="SCENE"})(wl||(wl={}));var El;(function(e){e.Fragment="FRAGMENT",e.Name="NAME",e.Url="URL"})(El||(El={}));var Dl;(function(e){e.Asc="ASC",e.Desc="DESC"})(Dl||(Dl={}));var Il;(function(e){e.FourK="FOUR_K",e.FullHd="FULL_HD",e.Low="LOW",e.Original="ORIGINAL",e.Standard="STANDARD",e.StandardHd="STANDARD_HD"})(Il||(Il={}));var Tl;(function(e){e.NeedsMigration="NEEDS_MIGRATION",e.Ok="OK",e.Setup="SETUP"})(Tl||(Tl={}));const kl=w`
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
    `,Ol=w`
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
    `,xl=w`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  port
  whitelistedIPs
  interfaces
  videoSortOrder
}
    `,Al=w`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `,hy=w`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `,my=w`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `,gy=w`
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
    ${my}`,Cl=w`
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
    ${hy}
${gy}`,yy=w`
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
    ${kl}
${Ol}
${xl}
${Al}
${Cl}`;w`
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
    `;const qa=w`
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
    `,vy=w`
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
    `,by=w`
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
    `,Fl=w`
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
    `,Fn=w`
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
    ${Fl}`,$l=w`
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
    `,Pl=w`
    fragment FolderData on Folder {
  id
  path
}
    `,Ba=w`
    fragment GalleryChapterData on GalleryChapter {
  id
  title
  image_index
  gallery {
    id
  }
}
    `,$n=w`
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
    `,xt=w`
    fragment SlimTagData on Tag {
  id
  name
  sort_name
  aliases
  image_path
  parent_count
  child_count
}
    `,yt=w`
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
    ${xt}`,Nl=w`
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
    `,nr=w`
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
    ${Nl}`,ir=w`
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
    ${$l}
${Pl}
${Ba}
${$n}
${xt}
${yt}
${nr}`,Sy=w`
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
    ${ir}
${$n}
${xt}
${yt}
${Fl}`,Rl=w`
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
    `,Ml=w`
    fragment LogEntryData on LogEntry {
  time
  level
  message
}
    `,ar=w`
    fragment PackageData on Package {
  package_id
  name
  version
  date
  metadata
  sourceURL
}
    `;w`
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
    `;const _y=w`
    fragment SelectPerformerData on Performer {
  id
  name
  disambiguation
  alias_list
  image_path
  birthdate
  death_date
}
    `,wy=w`
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
    `,At=w`
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
    ${wy}`,Ll=w`
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
    ${$l}
${Pl}
${nr}`,Ey=w`
    fragment SlimGroupData on Group {
  id
  name
  front_image_path
  rating100
}
    `,or=w`
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
${xt}
${Ey}`,vt=w`
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
    ${Nl}
${At}
${Ll}
${$n}
${or}
${xt}
${yt}`,Dy=w`
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
    `,Iy=w`
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
    `,bt=w`
    fragment ScrapedSceneTagData on ScrapedTag {
  stored_id
  name
}
    `,Va=w`
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
    ${bt}`,jl=w`
    fragment ScrapedGroupStudioData on ScrapedStudio {
  stored_id
  name
  url
}
    `,Ty=w`
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
    ${jl}
${bt}`,Pn=w`
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
    `,Lr=w`
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
    ${bt}`,Ul=w`
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
    ${jl}
${bt}`,Ga=w`
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
    ${Pn}
${bt}
${Lr}
${Ul}`,ql=w`
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
    ${Pn}
${bt}
${Lr}`,Bl=w`
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
    ${Pn}
${bt}
${Lr}`;w`
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
    ${Pn}
${bt}
${Lr}
${Ul}`,w`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${Lr}`;const Nn=w`
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
    ${xt}`,ky=w`
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
    `,sr=w`
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
    ${xt}`,Oy=w`
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
    `;w`
    mutation Setup($input: SetupInput!) {
  setup(input: $input)
}
    `,w`
    mutation Migrate($input: MigrateInput!) {
  migrate(input: $input)
}
    `,w`
    mutation DownloadFFMpeg {
  downloadFFMpeg
}
    `,w`
    mutation ConfigureGeneral($input: ConfigGeneralInput!) {
  configureGeneral(input: $input) {
    ...ConfigGeneralData
  }
}
    ${kl}`,w`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${Ol}`,w`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${xl}`,w`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${Al}`,w`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${Cl}`,w`
    mutation ConfigureUI($input: Map, $partial: Map) {
  configureUI(input: $input, partial: $partial)
}
    `,w`
    mutation ConfigureUISetting($key: String!, $value: Any) {
  configureUISetting(key: $key, value: $value)
}
    `,w`
    mutation GenerateAPIKey($input: GenerateAPIKeyInput!) {
  generateAPIKey(input: $input)
}
    `,w`
    mutation EnableDLNA($input: EnableDLNAInput!) {
  enableDLNA(input: $input)
}
    `,w`
    mutation DisableDLNA($input: DisableDLNAInput!) {
  disableDLNA(input: $input)
}
    `,w`
    mutation AddTempDLNAIP($input: AddTempDLNAIPInput!) {
  addTempDLNAIP(input: $input)
}
    `,w`
    mutation RemoveTempDLNAIP($input: RemoveTempDLNAIPInput!) {
  removeTempDLNAIP(input: $input)
}
    `,w`
    mutation DeleteFiles($ids: [ID!]!) {
  deleteFiles(ids: $ids)
}
    `,w`
    mutation SaveFilter($input: SaveFilterInput!) {
  saveFilter(input: $input) {
    ...SavedFilterData
  }
}
    ${qa}`,w`
    mutation DestroySavedFilter($input: DestroyFilterInput!) {
  destroySavedFilter(input: $input)
}
    `,w`
    mutation GalleryChapterCreate($title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterCreate(
    input: {title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${Ba}`,w`
    mutation GalleryChapterUpdate($id: ID!, $title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterUpdate(
    input: {id: $id, title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${Ba}`,w`
    mutation GalleryChapterDestroy($id: ID!) {
  galleryChapterDestroy(id: $id)
}
    `,w`
    mutation GalleryCreate($input: GalleryCreateInput!) {
  galleryCreate(input: $input) {
    ...GalleryData
  }
}
    ${ir}`,w`
    mutation GalleryUpdate($input: GalleryUpdateInput!) {
  galleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${ir}`,w`
    mutation BulkGalleryUpdate($input: BulkGalleryUpdateInput!) {
  bulkGalleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${ir}`,w`
    mutation GalleriesUpdate($input: [GalleryUpdateInput!]!) {
  galleriesUpdate(input: $input) {
    ...GalleryData
  }
}
    ${ir}`,w`
    mutation GalleryDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  galleryDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,w`
    mutation AddGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  addGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `,w`
    mutation RemoveGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  removeGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `,w`
    mutation SetGalleryCover($gallery_id: ID!, $cover_image_id: ID!) {
  setGalleryCover(
    input: {gallery_id: $gallery_id, cover_image_id: $cover_image_id}
  )
}
    `,w`
    mutation ResetGalleryCover($gallery_id: ID!) {
  resetGalleryCover(input: {gallery_id: $gallery_id})
}
    `,w`
    mutation GroupCreate($input: GroupCreateInput!) {
  groupCreate(input: $input) {
    ...GroupData
  }
}
    ${or}`,w`
    mutation GroupUpdate($input: GroupUpdateInput!) {
  groupUpdate(input: $input) {
    ...GroupData
  }
}
    ${or}`,w`
    mutation BulkGroupUpdate($input: BulkGroupUpdateInput!) {
  bulkGroupUpdate(input: $input) {
    ...GroupData
  }
}
    ${or}`,w`
    mutation GroupDestroy($id: ID!) {
  groupDestroy(input: {id: $id})
}
    `,w`
    mutation GroupsDestroy($ids: [ID!]!) {
  groupsDestroy(ids: $ids)
}
    `,w`
    mutation AddGroupSubGroups($input: GroupSubGroupAddInput!) {
  addGroupSubGroups(input: $input)
}
    `,w`
    mutation RemoveGroupSubGroups($input: GroupSubGroupRemoveInput!) {
  removeGroupSubGroups(input: $input)
}
    `,w`
    mutation ReorderSubGroups($input: ReorderSubGroupsInput!) {
  reorderSubGroups(input: $input)
}
    `,w`
    mutation ImageUpdate($input: ImageUpdateInput!) {
  imageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Fn}`,w`
    mutation BulkImageUpdate($input: BulkImageUpdateInput!) {
  bulkImageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Fn}`,w`
    mutation ImagesUpdate($input: [ImageUpdateInput!]!) {
  imagesUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Fn}`,w`
    mutation ImageIncrementO($id: ID!) {
  imageIncrementO(id: $id)
}
    `,w`
    mutation ImageDecrementO($id: ID!) {
  imageDecrementO(id: $id)
}
    `,w`
    mutation ImageResetO($id: ID!) {
  imageResetO(id: $id)
}
    `,w`
    mutation ImageDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  imageDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,w`
    mutation ImagesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  imagesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,w`
    mutation StopJob($job_id: ID!) {
  stopJob(job_id: $job_id)
}
    `,w`
    mutation StopAllJobs {
  stopAllJobs
}
    `,w`
    mutation MetadataImport {
  metadataImport
}
    `,w`
    mutation MetadataExport {
  metadataExport
}
    `,w`
    mutation ExportObjects($input: ExportObjectsInput!) {
  exportObjects(input: $input)
}
    `,w`
    mutation ImportObjects($input: ImportObjectsInput!) {
  importObjects(input: $input)
}
    `,w`
    mutation MetadataScan($input: ScanMetadataInput!) {
  metadataScan(input: $input)
}
    `,w`
    mutation MetadataGenerate($input: GenerateMetadataInput!) {
  metadataGenerate(input: $input)
}
    `,w`
    mutation MetadataAutoTag($input: AutoTagMetadataInput!) {
  metadataAutoTag(input: $input)
}
    `,w`
    mutation MetadataIdentify($input: IdentifyMetadataInput!) {
  metadataIdentify(input: $input)
}
    `,w`
    mutation MetadataClean($input: CleanMetadataInput!) {
  metadataClean(input: $input)
}
    `,w`
    mutation MetadataCleanGenerated($input: CleanGeneratedInput!) {
  metadataCleanGenerated(input: $input)
}
    `,w`
    mutation MigrateHashNaming {
  migrateHashNaming
}
    `,w`
    mutation BackupDatabase($input: BackupDatabaseInput!) {
  backupDatabase(input: $input)
}
    `,w`
    mutation AnonymiseDatabase($input: AnonymiseDatabaseInput!) {
  anonymiseDatabase(input: $input)
}
    `,w`
    mutation OptimiseDatabase {
  optimiseDatabase
}
    `,w`
    mutation MigrateSceneScreenshots($input: MigrateSceneScreenshotsInput!) {
  migrateSceneScreenshots(input: $input)
}
    `,w`
    mutation MigrateBlobs($input: MigrateBlobsInput!) {
  migrateBlobs(input: $input)
}
    `,w`
    mutation PerformerCreate($input: PerformerCreateInput!) {
  performerCreate(input: $input) {
    ...PerformerData
  }
}
    ${yt}`,w`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${yt}`,w`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${yt}`,w`
    mutation PerformerDestroy($id: ID!) {
  performerDestroy(input: {id: $id})
}
    `,w`
    mutation PerformersDestroy($ids: [ID!]!) {
  performersDestroy(ids: $ids)
}
    `,w`
    mutation ReloadPlugins {
  reloadPlugins
}
    `,w`
    mutation RunPluginTask($plugin_id: ID!, $task_name: String!, $args_map: Map) {
  runPluginTask(plugin_id: $plugin_id, task_name: $task_name, args_map: $args_map)
}
    `;const xy=w`
    mutation ConfigurePlugin($plugin_id: ID!, $input: Map!) {
  configurePlugin(plugin_id: $plugin_id, input: $input)
}
    `;w`
    mutation SetPluginsEnabled($enabledMap: BoolMap!) {
  setPluginsEnabled(enabledMap: $enabledMap)
}
    `,w`
    mutation InstallPluginPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Plugin, packages: $packages)
}
    `,w`
    mutation UpdatePluginPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Plugin, packages: $packages)
}
    `,w`
    mutation UninstallPluginPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Plugin, packages: $packages)
}
    `,w`
    mutation SceneMarkerCreate($title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerCreate(
    input: {title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${At}`,w`
    mutation SceneMarkerUpdate($id: ID!, $title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerUpdate(
    input: {id: $id, title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${At}`,w`
    mutation SceneMarkerDestroy($id: ID!) {
  sceneMarkerDestroy(id: $id)
}
    `,w`
    mutation SceneMarkersDestroy($ids: [ID!]!) {
  sceneMarkersDestroy(ids: $ids)
}
    `,w`
    mutation SceneCreate($input: SceneCreateInput!) {
  sceneCreate(input: $input) {
    ...SceneData
  }
}
    ${vt}`,w`
    mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${vt}`,w`
    mutation BulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${vt}`,w`
    mutation ScenesUpdate($input: [SceneUpdateInput!]!) {
  scenesUpdate(input: $input) {
    ...SceneData
  }
}
    ${vt}`,w`
    mutation SceneSaveActivity($id: ID!, $resume_time: Float, $playDuration: Float) {
  sceneSaveActivity(
    id: $id
    resume_time: $resume_time
    playDuration: $playDuration
  )
}
    `,w`
    mutation SceneResetActivity($id: ID!, $reset_resume: Boolean!, $reset_duration: Boolean!) {
  sceneResetActivity(
    id: $id
    reset_resume: $reset_resume
    reset_duration: $reset_duration
  )
}
    `,w`
    mutation SceneAddPlay($id: ID!, $times: [Timestamp!]) {
  sceneAddPlay(id: $id, times: $times) {
    count
    history
  }
}
    `,w`
    mutation SceneDeletePlay($id: ID!, $times: [Timestamp!]) {
  sceneDeletePlay(id: $id, times: $times) {
    count
    history
  }
}
    `,w`
    mutation SceneResetPlayCount($id: ID!) {
  sceneResetPlayCount(id: $id)
}
    `,w`
    mutation SceneAddO($id: ID!, $times: [Timestamp!]) {
  sceneAddO(id: $id, times: $times) {
    count
    history
  }
}
    `,w`
    mutation SceneDeleteO($id: ID!, $times: [Timestamp!]) {
  sceneDeleteO(id: $id, times: $times) {
    count
    history
  }
}
    `,w`
    mutation SceneResetO($id: ID!) {
  sceneResetO(id: $id)
}
    `,w`
    mutation SceneDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  sceneDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,w`
    mutation ScenesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  scenesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,w`
    mutation SceneGenerateScreenshot($id: ID!, $at: Float) {
  sceneGenerateScreenshot(id: $id, at: $at)
}
    `,w`
    mutation SceneAssignFile($input: AssignSceneFileInput!) {
  sceneAssignFile(input: $input)
}
    `,w`
    mutation SceneMerge($input: SceneMergeInput!) {
  sceneMerge(input: $input) {
    id
  }
}
    `,w`
    mutation ReloadScrapers {
  reloadScrapers
}
    `,w`
    mutation InstallScraperPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Scraper, packages: $packages)
}
    `,w`
    mutation UpdateScraperPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Scraper, packages: $packages)
}
    `,w`
    mutation UninstallScraperPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Scraper, packages: $packages)
}
    `,w`
    mutation SubmitStashBoxFingerprints($input: StashBoxFingerprintSubmissionInput!) {
  submitStashBoxFingerprints(input: $input)
}
    `,w`
    mutation StashBoxBatchPerformerTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchPerformerTag(input: $input)
}
    `,w`
    mutation StashBoxBatchStudioTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchStudioTag(input: $input)
}
    `,w`
    mutation SubmitStashBoxSceneDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxSceneDraft(input: $input)
}
    `,w`
    mutation SubmitStashBoxPerformerDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxPerformerDraft(input: $input)
}
    `,w`
    mutation StudioCreate($input: StudioCreateInput!) {
  studioCreate(input: $input) {
    ...StudioData
  }
}
    ${Nn}`,w`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${Nn}`,w`
    mutation StudioDestroy($id: ID!) {
  studioDestroy(input: {id: $id})
}
    `,w`
    mutation StudiosDestroy($ids: [ID!]!) {
  studiosDestroy(ids: $ids)
}
    `,w`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${sr}`,w`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `,w`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `,w`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${sr}`,w`
    mutation BulkTagUpdate($input: BulkTagUpdateInput!) {
  bulkTagUpdate(input: $input) {
    ...TagData
  }
}
    ${sr}`,w`
    mutation TagsMerge($source: [ID!]!, $destination: ID!) {
  tagsMerge(input: {source: $source, destination: $destination}) {
    ...TagData
  }
}
    ${sr}`,w`
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
    `,w`
    query FindSavedFilter($id: ID!) {
  findSavedFilter(id: $id) {
    ...SavedFilterData
  }
}
    ${qa}`,w`
    query FindSavedFilters($mode: FilterMode) {
  findSavedFilters(mode: $mode) {
    ...SavedFilterData
  }
}
    ${qa}`,w`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${Ll}`,w`
    query FindGallery($id: ID!) {
  findGallery(id: $id) {
    ...GalleryData
  }
}
    ${ir}`,w`
    query FindGalleriesForSelect($filter: FindFilterType, $gallery_filter: GalleryFilterType, $ids: [ID!]) {
  findGalleries(filter: $filter, gallery_filter: $gallery_filter, ids: $ids) {
    count
    galleries {
      ...SelectGalleryData
    }
  }
}
    ${vy}`,w`
    query FindGalleryImageID($id: ID!, $index: Int!) {
  findGallery(id: $id) {
    image(index: $index) {
      id
    }
  }
}
    `,w`
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
    ${Fn}`,w`
    query FindImage($id: ID!, $checksum: String) {
  findImage(id: $id, checksum: $checksum) {
    ...ImageData
  }
}
    ${Sy}`,w`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${Rl}`,w`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${Rl}`,w`
    query SceneWall($q: String) {
  sceneWall(q: $q) {
    ...SceneData
  }
}
    ${vt}`,w`
    query MarkerWall($q: String) {
  markerWall(q: $q) {
    ...SceneMarkerData
  }
}
    ${At}`,w`
    query MarkerStrings($q: String, $sort: String) {
  markerStrings(q: $q, sort: $sort) {
    id
    count
    title
  }
}
    `,w`
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
    `,w`
    query Logs {
  logs {
    ...LogEntryData
  }
}
    ${Ml}`,w`
    query Version {
  version {
    version
    hash
    build_time
  }
}
    `,w`
    query LatestVersion {
  latestversion {
    version
    shorthash
    release_date
    url
  }
}
    `,w`
    query FindGroups($filter: FindFilterType, $group_filter: GroupFilterType) {
  findGroups(filter: $filter, group_filter: $group_filter) {
    count
    groups {
      ...GroupData
    }
  }
}
    ${or}`,w`
    query FindGroup($id: ID!) {
  findGroup(id: $id) {
    ...GroupData
  }
}
    ${or}`,w`
    query FindGroupsForSelect($filter: FindFilterType, $group_filter: GroupFilterType, $ids: [ID!]) {
  findGroups(filter: $filter, group_filter: $group_filter, ids: $ids) {
    count
    groups {
      ...SelectGroupData
    }
  }
}
    ${by}`,w`
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
    ${yt}`,w`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${yt}`,w`
    query FindPerformersForSelect($filter: FindFilterType, $performer_filter: PerformerFilterType, $ids: [ID!]) {
  findPerformers(filter: $filter, performer_filter: $performer_filter, ids: $ids) {
    count
    performers {
      ...SelectPerformerData
    }
  }
}
    ${_y}`,w`
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
    `,w`
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
    `,w`
    query InstalledPluginPackages {
  installedPackages(type: Plugin) {
    ...PackageData
  }
}
    ${ar}`,w`
    query InstalledPluginPackagesStatus {
  installedPackages(type: Plugin) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${ar}`,w`
    query AvailablePluginPackages($source: String!) {
  availablePackages(source: $source, type: Plugin) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${ar}`,w`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${At}`,w`
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
    ${nr}`,w`
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
    ${nr}`,w`
    query FindDuplicateScenes($distance: Int, $duration_diff: Float) {
  findDuplicateScenes(distance: $distance, duration_diff: $duration_diff) {
    ...SlimSceneData
  }
}
    ${nr}`,w`
    query FindScene($id: ID!, $checksum: String) {
  findScene(id: $id, checksum: $checksum) {
    ...SceneData
  }
}
    ${vt}`,w`
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
    ${At}`,w`
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
    ${nr}`,w`
    query SceneStreams($id: ID!) {
  findScene(id: $id) {
    sceneStreams {
      url
      mime_type
      label
    }
  }
}
    `,w`
    query FindScenesForSelect($filter: FindFilterType, $scene_filter: SceneFilterType, $ids: [ID!]) {
  findScenes(filter: $filter, scene_filter: $scene_filter, ids: $ids) {
    count
    scenes {
      ...SelectSceneData
    }
  }
}
    ${Dy}`,w`
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
    `,w`
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
    `,w`
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
    `,w`
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
    `,w`
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
    `,w`
    query ScrapeSingleStudio($source: ScraperSourceInput!, $input: ScrapeSingleStudioInput!) {
  scrapeSingleStudio(source: $source, input: $input) {
    ...ScrapedStudioData
  }
}
    ${Iy}`,w`
    query ScrapeSinglePerformer($source: ScraperSourceInput!, $input: ScrapeSinglePerformerInput!) {
  scrapeSinglePerformer(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${Va}`,w`
    query ScrapeMultiPerformers($source: ScraperSourceInput!, $input: ScrapeMultiPerformersInput!) {
  scrapeMultiPerformers(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${Va}`,w`
    query ScrapePerformerURL($url: String!) {
  scrapePerformerURL(url: $url) {
    ...ScrapedPerformerData
  }
}
    ${Va}`,w`
    query ScrapeSingleScene($source: ScraperSourceInput!, $input: ScrapeSingleSceneInput!) {
  scrapeSingleScene(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${Ga}`,w`
    query ScrapeMultiScenes($source: ScraperSourceInput!, $input: ScrapeMultiScenesInput!) {
  scrapeMultiScenes(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${Ga}`,w`
    query ScrapeSceneURL($url: String!) {
  scrapeSceneURL(url: $url) {
    ...ScrapedSceneData
  }
}
    ${Ga}`,w`
    query ScrapeSingleGallery($source: ScraperSourceInput!, $input: ScrapeSingleGalleryInput!) {
  scrapeSingleGallery(source: $source, input: $input) {
    ...ScrapedGalleryData
  }
}
    ${ql}`,w`
    query ScrapeSingleImage($source: ScraperSourceInput!, $input: ScrapeSingleImageInput!) {
  scrapeSingleImage(source: $source, input: $input) {
    ...ScrapedImageData
  }
}
    ${Bl}`,w`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${ql}`,w`
    query ScrapeImageURL($url: String!) {
  scrapeImageURL(url: $url) {
    ...ScrapedImageData
  }
}
    ${Bl}`,w`
    query ScrapeGroupURL($url: String!) {
  scrapeGroupURL(url: $url) {
    ...ScrapedGroupData
  }
}
    ${Ty}`,w`
    query InstalledScraperPackages {
  installedPackages(type: Scraper) {
    ...PackageData
  }
}
    ${ar}`,w`
    query InstalledScraperPackagesStatus {
  installedPackages(type: Scraper) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${ar}`,w`
    query AvailableScraperPackages($source: String!) {
  availablePackages(source: $source, type: Scraper) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${ar}`;const Ay=w`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${yy}`;w`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `,w`
    query ValidateStashBox($input: StashBoxInput!) {
  validateStashBoxCredentials(input: $input) {
    valid
    status
  }
}
    `,w`
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
    `,w`
    query FindStudios($filter: FindFilterType, $studio_filter: StudioFilterType) {
  findStudios(filter: $filter, studio_filter: $studio_filter) {
    count
    studios {
      ...StudioData
    }
  }
}
    ${Nn}`,w`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${Nn}`,w`
    query FindStudiosForSelect($filter: FindFilterType, $studio_filter: StudioFilterType, $ids: [ID!]) {
  findStudios(filter: $filter, studio_filter: $studio_filter, ids: $ids) {
    count
    studios {
      ...SelectStudioData
    }
  }
}
    ${ky}`,w`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagData
    }
  }
}
    ${sr}`,w`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${sr}`,w`
    query FindTagsForSelect($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...SelectTagData
    }
  }
}
    ${Oy}`,w`
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
    ${vt}`,w`
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
    ${At}
${vt}`,w`
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
    `,w`
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
    `,w`
    subscription LoggingSubscribe {
  loggingSubscribe {
    ...LogEntryData
  }
}
    ${Ml}`;const Cy=w`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `;function Fy(e){return me(e)&&"code"in e&&"reason"in e}function $y(e){var t;return me(e)&&((t=e.target)===null||t===void 0?void 0:t.readyState)===WebSocket.CLOSED}var Py=(function(e){Re(t,e);function t(r){var n=e.call(this)||this;return n.client=r,n}return t.prototype.request=function(r){var n=this;return new ce(function(i){return n.client.subscribe(C(C({},r),{query:dt(r.query)}),{next:i.next.bind(i),complete:i.complete.bind(i),error:function(a){if(a instanceof Error)return i.error(a);var o=Fy(a);return o||$y(a)?i.error(new Error("Socket closed".concat(o?" with event ".concat(a.code):"").concat(o?" ".concat(a.reason):""))):i.error(new ht({graphQLErrors:Array.isArray(a)?a:[a]}))}})})},t})(Ue);function Ce(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function Ct(e){return Ce(e)==="object"}function Ny(e){return Array.isArray(e)&&e.length>0&&e.every(t=>"message"in t)}function Vl(e,t){return e.length<124?e:t}const Ry="graphql-transport-ws";var Ne;(function(e){e[e.InternalServerError=4500]="InternalServerError",e[e.InternalClientError=4005]="InternalClientError",e[e.BadRequest=4400]="BadRequest",e[e.BadResponse=4004]="BadResponse",e[e.Unauthorized=4401]="Unauthorized",e[e.Forbidden=4403]="Forbidden",e[e.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",e[e.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",e[e.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",e[e.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",e[e.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(Ne||(Ne={}));var ve;(function(e){e.ConnectionInit="connection_init",e.ConnectionAck="connection_ack",e.Ping="ping",e.Pong="pong",e.Subscribe="subscribe",e.Next="next",e.Error="error",e.Complete="complete"})(ve||(ve={}));function Gl(e){if(!Ct(e))throw new Error(`Message is expected to be an object, but got ${Ce(e)}`);if(!e.type)throw new Error("Message is missing the 'type' property");if(typeof e.type!="string")throw new Error(`Message is expects the 'type' property to be a string, but got ${Ce(e.type)}`);switch(e.type){case ve.ConnectionInit:case ve.ConnectionAck:case ve.Ping:case ve.Pong:{if(e.payload!=null&&!Ct(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);break}case ve.Subscribe:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ce(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!Ct(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Ce(e.payload)}`);if(typeof e.payload.query!="string")throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${Ce(e.payload.query)}`);if(e.payload.variables!=null&&!Ct(e.payload.variables))throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Ce(e.payload.variables)}`);if(e.payload.operationName!=null&&Ce(e.payload.operationName)!=="string")throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Ce(e.payload.operationName)}`);if(e.payload.extensions!=null&&!Ct(e.payload.extensions))throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Ce(e.payload.extensions)}`);break}case ve.Next:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ce(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!Ct(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Ce(e.payload)}`);break}case ve.Error:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ce(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!Ny(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);break}case ve.Complete:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ce(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);break}default:throw new Error(`Invalid message 'type' property "${e.type}"`)}return e}function My(e,t){return Gl(typeof e=="string"?JSON.parse(e,t):e)}function jr(e,t){return Gl(e),JSON.stringify(e,t)}var ur=function(e){return this instanceof ur?(this.v=e,this):new ur(e)},Ly=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(e,t||[]),i,a=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",o),i[Symbol.asyncIterator]=function(){return this},i;function o(p){return function(y){return Promise.resolve(y).then(p,d)}}function s(p,y){n[p]&&(i[p]=function(S){return new Promise(function(h,g){a.push([p,S,h,g])>1||u(p,S)})},y&&(i[p]=y(i[p])))}function u(p,y){try{c(n[p](y))}catch(S){f(a[0][3],S)}}function c(p){p.value instanceof ur?Promise.resolve(p.value.v).then(l,d):f(a[0][2],p)}function l(p){u("next",p)}function d(p){u("throw",p)}function f(p,y){p(y),a.shift(),a.length&&u(a[0][0],a[0][1])}};function jy(e){const{url:t,connectionParams:r,lazy:n=!0,onNonLazyError:i=console.error,lazyCloseTimeout:a=0,keepAlive:o=0,disablePong:s,connectionAckWaitTimeout:u=0,retryAttempts:c=5,retryWait:l=async function(q){let O=1e3;for(let N=0;N<q;N++)O*=2;await new Promise(N=>setTimeout(N,O+Math.floor(Math.random()*2700+300)))},shouldRetry:d=za,isFatalConnectionProblem:f,on:p,webSocketImpl:y,generateID:S=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,q=>{const O=Math.random()*16|0;return(q=="x"?O:O&3|8).toString(16)})},jsonMessageReplacer:h,jsonMessageReviver:g}=e;let _;if(y){if(!qy(y))throw new Error("Invalid WebSocket implementation provided");_=y}else typeof WebSocket<"u"?_=WebSocket:typeof global<"u"?_=global.WebSocket||global.MozWebSocket:typeof window<"u"&&(_=window.WebSocket||window.MozWebSocket);if(!_)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const I=_,k=(()=>{const j=(()=>{const O={};return{on(N,M){return O[N]=M,()=>{delete O[N]}},emit(N){var M;"id"in N&&((M=O[N.id])===null||M===void 0||M.call(O,N))}}})(),q={connecting:p?.connecting?[p.connecting]:[],opened:p?.opened?[p.opened]:[],connected:p?.connected?[p.connected]:[],ping:p?.ping?[p.ping]:[],pong:p?.pong?[p.pong]:[],message:p?.message?[j.emit,p.message]:[j.emit],closed:p?.closed?[p.closed]:[],error:p?.error?[p.error]:[]};return{onMessage:j.on,on(O,N){const M=q[O];return M.push(N),()=>{M.splice(M.indexOf(N),1)}},emit(O,...N){for(const M of[...q[O]])M(...N)}}})();function $(j){const q=[k.on("error",O=>{q.forEach(N=>N()),j(O)}),k.on("closed",O=>{q.forEach(N=>N()),j(O)})]}let E,x=0,v,D=!1,b=0,A=!1;async function P(){clearTimeout(v);const[j,q]=await(E??(E=new Promise((M,W)=>(async()=>{if(D){if(await l(b),!x)return E=void 0,W({code:1e3,reason:"All Subscriptions Gone"});b++}k.emit("connecting",D);const Y=new I(typeof t=="function"?await t():t,Ry);let ee,ie;function se(){isFinite(o)&&o>0&&(clearTimeout(ie),ie=setTimeout(()=>{Y.readyState===I.OPEN&&(Y.send(jr({type:ve.Ping})),k.emit("ping",!1,void 0))},o))}$(oe=>{E=void 0,clearTimeout(ee),clearTimeout(ie),W(oe),oe instanceof zl&&(Y.close(4499,"Terminated"),Y.onerror=null,Y.onclose=null)}),Y.onerror=oe=>k.emit("error",oe),Y.onclose=oe=>k.emit("closed",oe),Y.onopen=async()=>{try{k.emit("opened",Y);const oe=typeof r=="function"?await r():r;if(Y.readyState!==I.OPEN)return;Y.send(jr(oe?{type:ve.ConnectionInit,payload:oe}:{type:ve.ConnectionInit},h)),isFinite(u)&&u>0&&(ee=setTimeout(()=>{Y.close(Ne.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},u)),se()}catch(oe){k.emit("error",oe),Y.close(Ne.InternalClientError,Vl(oe instanceof Error?oe.message:new Error(oe).message,"Internal client error"))}};let ae=!1;Y.onmessage=({data:oe})=>{try{const Se=My(oe,g);if(k.emit("message",Se),Se.type==="ping"||Se.type==="pong"){k.emit(Se.type,!0,Se.payload),Se.type==="pong"?se():s||(Y.send(jr(Se.payload?{type:ve.Pong,payload:Se.payload}:{type:ve.Pong})),k.emit("pong",!1,Se.payload));return}if(ae)return;if(Se.type!==ve.ConnectionAck)throw new Error(`First message cannot be of type ${Se.type}`);clearTimeout(ee),ae=!0,k.emit("connected",Y,Se.payload,D),D=!1,b=0,M([Y,new Promise((V,m)=>$(m))])}catch(Se){Y.onmessage=null,k.emit("error",Se),Y.close(Ne.BadResponse,Vl(Se instanceof Error?Se.message:new Error(Se).message,"Bad response"))}}})())));j.readyState===I.CLOSING&&await q;let O=()=>{};const N=new Promise(M=>O=M);return[j,O,Promise.race([N.then(()=>{if(!x){const M=()=>j.close(1e3,"Normal Closure");isFinite(a)&&a>0?v=setTimeout(()=>{j.readyState===I.OPEN&&M()},a):M()}}),q])]}function Q(j){if(za(j)&&(Uy(j.code)||[Ne.InternalServerError,Ne.InternalClientError,Ne.BadRequest,Ne.BadResponse,Ne.Unauthorized,Ne.SubprotocolNotAcceptable,Ne.SubscriberAlreadyExists,Ne.TooManyInitialisationRequests].includes(j.code)))throw j;if(A)return!1;if(za(j)&&j.code===1e3)return x>0;if(!c||b>=c||!d(j)||f?.(j))throw j;return D=!0}n||(async()=>{for(x++;;)try{const[,,j]=await P();await j}catch(j){try{if(!Q(j))return}catch(q){return i?.(q)}}})();function J(j,q){const O=S(j);let N=!1,M=!1,W=()=>{x--,N=!0};return(async()=>{for(x++;;)try{const[Y,ee,ie]=await P();if(N)return ee();const se=k.onMessage(O,ae=>{switch(ae.type){case ve.Next:{q.next(ae.payload);return}case ve.Error:{M=!0,N=!0,q.error(ae.payload),W();return}case ve.Complete:{N=!0,W();return}}});Y.send(jr({id:O,type:ve.Subscribe,payload:j},h)),W=()=>{!N&&Y.readyState===I.OPEN&&Y.send(jr({id:O,type:ve.Complete},h)),x--,N=!0,ee()},await ie.finally(se);return}catch(Y){if(!Q(Y))return}})().then(()=>{M||q.complete()}).catch(Y=>{q.error(Y)}),()=>{N||W()}}return{on:k.on,subscribe:J,iterate(j){const q=[],O={done:!1,error:null,resolve:()=>{}},N=J(j,{next(W){q.push(W),O.resolve()},error(W){O.done=!0,O.error=W,O.resolve()},complete(){O.done=!0,O.resolve()}}),M=(function(){return Ly(this,arguments,function*(){for(;;){for(q.length||(yield ur(new Promise(ee=>O.resolve=ee)));q.length;)yield yield ur(q.shift());if(O.error)throw O.error;if(O.done)return yield ur(void 0)}})})();return M.throw=async W=>(O.done||(O.done=!0,O.error=W,O.resolve()),{done:!0,value:void 0}),M.return=async()=>(N(),{done:!0,value:void 0}),M},async dispose(){if(A=!0,E){const[j]=await E;j.close(1e3,"Normal Closure")}},terminate(){E&&k.emit("closed",new zl)}}}class zl extends Error{constructor(){super(...arguments),this.name="TerminatedCloseEvent",this.message="4499: Terminated",this.code=4499,this.reason="Terminated",this.wasClean=!1}}function za(e){return Ct(e)&&"code"in e&&"reason"in e}function Uy(e){return[1e3,1001,1006,1005,1012,1013,1014].includes(e)?!1:e>=1e3&&e<=1999}function qy(e){return typeof e=="function"&&"constructor"in e&&"CLOSED"in e&&"CLOSING"in e&&"CONNECTING"in e&&"OPEN"in e}function Ql(e){return new Ue(function(t,r){return new ce(function(n){var i,a,o;try{i=r(t).subscribe({next:function(s){if(s.errors?o=e({graphQLErrors:s.errors,response:s,operation:t,forward:r}):Xu(s)&&(o=e({protocolErrors:s.extensions[In],response:s,operation:t,forward:r})),o){a=o.subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return}n.next(s)},error:function(s){if(o=e({operation:t,networkError:s,graphQLErrors:s&&s.result&&s.result.errors||void 0,forward:r}),o){a=o.subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return}n.error(s)},complete:function(){o||n.complete.bind(n)()}})}catch(s){e({networkError:s,operation:t,forward:r}),n.error(s)}return function(){i&&i.unsubscribe(),a&&i.unsubscribe()}})})}(function(e){Re(t,e);function t(r){var n=e.call(this)||this;return n.link=Ql(r),n}return t.prototype.request=function(r,n){return this.link.request(r,n)},t})(Ue);function By(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Vy(e,t,r=""){if(!arguments.length)throw new TypeError("Argument 1 `value` is required.");if(typeof t!="function")throw new TypeError("Argument 2 `isExtractable` must be a function.");if(typeof r!="string")throw new TypeError("Argument 3 `path` must be a string.");const n=new Map,i=new Map;function a(o,s,u){if(t(o)){const d=i.get(o);return d?d.push(s):i.set(o,[s]),null}const c=Array.isArray(o)||typeof FileList<"u"&&o instanceof FileList,l=By(o);if(c||l){let d=n.get(o);const f=!d;if(f&&(d=c?[]:o instanceof Object?{}:Object.create(null),n.set(o,d)),!u.has(o)){const p=s?`${s}.`:"",y=new Set(u).add(o);if(c){let S=0;for(const h of o){const g=a(h,p+S++,y);f&&d.push(g)}}else for(const S in o){const h=a(o[S],p+S,y);f&&(d[S]=h)}}return d}return o}return{clone:a(e,r,new Set),files:i}}function Gy(e,t,r){"name"in r?e.append(t,r,r.name):e.append(t,r)}function zy(e){return typeof File<"u"&&e instanceof File||typeof Blob<"u"&&e instanceof Blob}function Qy({uri:e="/graphql",useGETForQueries:t,isExtractableFile:r=zy,FormData:n,formDataAppendFile:i=Gy,print:a=ic,fetch:o,fetchOptions:s,credentials:u,headers:c,includeExtensions:l}={}){const d={http:{includeExtensions:l},options:s,credentials:u,headers:c};return new Ue(f=>{const p=f.getContext(),{clientAwareness:{name:y,version:S}={},headers:h}=p,g={http:p.http,options:p.fetchOptions,credentials:p.credentials,headers:{...y&&{"apollographql-client-name":y},...S&&{"apollographql-client-version":S},...h}},{options:_,body:I}=ac(f,a,nc,d,g),{clone:k,files:$}=Vy(I,r,"");let E=oc(f,e);if($.size){_.headers&&delete _.headers["content-type"];const D=n||FormData,b=new D;b.append("operations",Cr(k,"Payload"));const A={};let P=0;$.forEach(Q=>{A[++P]=Q}),b.append("map",JSON.stringify(A)),P=0,$.forEach((Q,J)=>{i(b,String(++P),J)}),_.body=b}else if(t&&!f.query.definitions.some(D=>D.kind==="OperationDefinition"&&D.operation==="mutation")&&(_.method="GET"),_.method==="GET"){const{newURI:D,parseError:b}=sc(E,I);if(b)return new ce(A=>{A.error(b)});E=D}else _.body=Cr(k,"Payload");const{controller:x}=Og();typeof x!="boolean"&&(_.signal&&(_.signal.aborted?x.abort():_.signal.addEventListener("abort",()=>{x.abort()},{once:!0})),_.signal=x.signal);const v=o||fetch;return new ce(D=>{let b;return v(E,_).then(A=>(f.setContext({response:A}),A)).then(rc(f)).then(A=>{D.next(A),D.complete()}).catch(A=>{b||(A.result&&A.result.errors&&A.result.data&&D.next(A.result),D.error(A))}),()=>{b=!0,typeof x!="boolean"&&x.abort()}})})}var Qa,Wa;const St=e=>(t,{args:r,canRead:n,toReference:i})=>n(t)?t:i({__typename:e,id:r?.id}),Ur=(e,{canRead:t})=>{if(e!==void 0)return t(e)?e:null},Wy={Query:{fields:{findImage:{read:St("Image")},findPerformer:{read:St("Performer")},findStudio:{read:St("Studio")},findGroup:{read:St("Group")},findGallery:{read:St("Gallery")},findScene:{read:St("Scene")},findTag:{read:St("Tag")},findSavedFilter:{read:St("SavedFilter")}}},Scene:{fields:{studio:{read:Ur}}},Image:{fields:{studio:{read:Ur},paths:{merge:!1}}},Group:{fields:{studio:{read:Ur}}},Gallery:{fields:{studio:{read:Ur}}},Studio:{fields:{parent_studio:{read:Ur}}}},Yy={BaseFile:["VideoFile","ImageFile","GalleryFile"],VisualFile:["VideoFile","ImageFile"]},Hy=(Wa=(Qa=document.querySelector("base"))===null||Qa===void 0?void 0:Qa.getAttribute("href"))!==null&&Wa!==void 0?Wa:"/",Ya=e=>{let t=new URL(window.location.origin+Hy);return e&&(t.pathname+=e),t},Jy=()=>{const e=Ya("graphql"),t=Ya("graphql");t.protocol==="https:"?t.protocol="wss:":t.protocol="ws:";const r=Qy({uri:e.toString()}),n=jy({url:t.toString(),retryAttempts:1/0,shouldRetry(){return!0}}),i=new Py(n),a=Ql(({networkError:l})=>{if(l&&l.statusCode===401){const d=new URL(Ya("login"),window.location.toString());d.searchParams.append("returnURL",window.location.href),window.location.href=d.toString()}}),o=ug(({query:l})=>{const d=Qt(l);return d.kind==="OperationDefinition"&&d.operation==="subscription"},i,r),s=sg([a,o]),u=new Pa({typePolicies:Wy,possibleTypes:Yy}),c=new ja({link:s,cache:u});return c.subscribe({query:Cy}).subscribe({next:()=>{c.resetStore()}}),{cache:u,client:c,wsClient:n}},{client:Ky}=Jy(),Xy=()=>Ky;function Rn(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ha={exports:{}},Wl;function Zy(){return Wl||(Wl=1,(function(e,t){(function(r){e.exports=r()})(function(){return(function r(n,i,a){function o(c,l){if(!i[c]){if(!n[c]){var d=typeof Rn=="function"&&Rn;if(!l&&d)return d(c,!0);if(s)return s(c,!0);throw new Error("Cannot find module '"+c+"'")}l=i[c]={exports:{}},n[c][0].call(l.exports,function(f){var p=n[c][1][f];return o(p||f)},l,l.exports,r,n,i,a)}return i[c].exports}for(var s=typeof Rn=="function"&&Rn,u=0;u<a.length;u++)o(a[u]);return o})({1:[function(r,n,i){(function(a,o,s,u,c,l,d,f,p){var y=r("crypto");function S(E,x){x=_(E,x);var v;return(v=x.algorithm!=="passthrough"?y.createHash(x.algorithm):new $).write===void 0&&(v.write=v.update,v.end=v.update),k(x,v).dispatch(E),v.update||v.end(""),v.digest?v.digest(x.encoding==="buffer"?void 0:x.encoding):(E=v.read(),x.encoding!=="buffer"?E.toString(x.encoding):E)}(i=n.exports=S).sha1=function(E){return S(E)},i.keys=function(E){return S(E,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},i.MD5=function(E){return S(E,{algorithm:"md5",encoding:"hex"})},i.keysMD5=function(E){return S(E,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var h=y.getHashes?y.getHashes().slice():["sha1","md5"],g=(h.push("passthrough"),["buffer","hex","binary","base64"]);function _(E,x){var v={};if(v.algorithm=(x=x||{}).algorithm||"sha1",v.encoding=x.encoding||"hex",v.excludeValues=!!x.excludeValues,v.algorithm=v.algorithm.toLowerCase(),v.encoding=v.encoding.toLowerCase(),v.ignoreUnknown=x.ignoreUnknown===!0,v.respectType=x.respectType!==!1,v.respectFunctionNames=x.respectFunctionNames!==!1,v.respectFunctionProperties=x.respectFunctionProperties!==!1,v.unorderedArrays=x.unorderedArrays===!0,v.unorderedSets=x.unorderedSets!==!1,v.unorderedObjects=x.unorderedObjects!==!1,v.replacer=x.replacer||void 0,v.excludeKeys=x.excludeKeys||void 0,E===void 0)throw new Error("Object argument required.");for(var D=0;D<h.length;++D)h[D].toLowerCase()===v.algorithm.toLowerCase()&&(v.algorithm=h[D]);if(h.indexOf(v.algorithm)===-1)throw new Error('Algorithm "'+v.algorithm+'"  not supported. supported values: '+h.join(", "));if(g.indexOf(v.encoding)===-1&&v.algorithm!=="passthrough")throw new Error('Encoding "'+v.encoding+'"  not supported. supported values: '+g.join(", "));return v}function I(E){if(typeof E=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(E))!=null}function k(E,x,v){v=v||[];function D(b){return x.update?x.update(b,"utf8"):x.write(b,"utf8")}return{dispatch:function(b){return this["_"+((b=E.replacer?E.replacer(b):b)===null?"null":typeof b)](b)},_object:function(b){var A,P=Object.prototype.toString.call(b),Q=/\[object (.*)\]/i.exec(P);if(Q=(Q=Q?Q[1]:"unknown:["+P+"]").toLowerCase(),0<=(P=v.indexOf(b)))return this.dispatch("[CIRCULAR:"+P+"]");if(v.push(b),s!==void 0&&s.isBuffer&&s.isBuffer(b))return D("buffer:"),D(b);if(Q==="object"||Q==="function"||Q==="asyncfunction")return P=Object.keys(b),E.unorderedObjects&&(P=P.sort()),E.respectType===!1||I(b)||P.splice(0,0,"prototype","__proto__","constructor"),E.excludeKeys&&(P=P.filter(function(J){return!E.excludeKeys(J)})),D("object:"+P.length+":"),A=this,P.forEach(function(J){A.dispatch(J),D(":"),E.excludeValues||A.dispatch(b[J]),D(",")});if(!this["_"+Q]){if(E.ignoreUnknown)return D("["+Q+"]");throw new Error('Unknown object type "'+Q+'"')}this["_"+Q](b)},_array:function(b,J){J=J!==void 0?J:E.unorderedArrays!==!1;var P=this;if(D("array:"+b.length+":"),!J||b.length<=1)return b.forEach(function(j){return P.dispatch(j)});var Q=[],J=b.map(function(j){var q=new $,O=v.slice();return k(E,q,O).dispatch(j),Q=Q.concat(O.slice(v.length)),q.read().toString()});return v=v.concat(Q),J.sort(),this._array(J,!1)},_date:function(b){return D("date:"+b.toJSON())},_symbol:function(b){return D("symbol:"+b.toString())},_error:function(b){return D("error:"+b.toString())},_boolean:function(b){return D("bool:"+b.toString())},_string:function(b){D("string:"+b.length+":"),D(b.toString())},_function:function(b){D("fn:"),I(b)?this.dispatch("[native]"):this.dispatch(b.toString()),E.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(b.name)),E.respectFunctionProperties&&this._object(b)},_number:function(b){return D("number:"+b.toString())},_xml:function(b){return D("xml:"+b.toString())},_null:function(){return D("Null")},_undefined:function(){return D("Undefined")},_regexp:function(b){return D("regex:"+b.toString())},_uint8array:function(b){return D("uint8array:"),this.dispatch(Array.prototype.slice.call(b))},_uint8clampedarray:function(b){return D("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(b))},_int8array:function(b){return D("int8array:"),this.dispatch(Array.prototype.slice.call(b))},_uint16array:function(b){return D("uint16array:"),this.dispatch(Array.prototype.slice.call(b))},_int16array:function(b){return D("int16array:"),this.dispatch(Array.prototype.slice.call(b))},_uint32array:function(b){return D("uint32array:"),this.dispatch(Array.prototype.slice.call(b))},_int32array:function(b){return D("int32array:"),this.dispatch(Array.prototype.slice.call(b))},_float32array:function(b){return D("float32array:"),this.dispatch(Array.prototype.slice.call(b))},_float64array:function(b){return D("float64array:"),this.dispatch(Array.prototype.slice.call(b))},_arraybuffer:function(b){return D("arraybuffer:"),this.dispatch(new Uint8Array(b))},_url:function(b){return D("url:"+b.toString())},_map:function(b){return D("map:"),b=Array.from(b),this._array(b,E.unorderedSets!==!1)},_set:function(b){return D("set:"),b=Array.from(b),this._array(b,E.unorderedSets!==!1)},_file:function(b){return D("file:"),this.dispatch([b.name,b.size,b.type,b.lastModfied])},_blob:function(){if(E.ignoreUnknown)return D("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return D("domwindow")},_bigint:function(b){return D("bigint:"+b.toString())},_process:function(){return D("process")},_timer:function(){return D("timer")},_pipe:function(){return D("pipe")},_tcp:function(){return D("tcp")},_udp:function(){return D("udp")},_tty:function(){return D("tty")},_statwatcher:function(){return D("statwatcher")},_securecontext:function(){return D("securecontext")},_connection:function(){return D("connection")},_zlib:function(){return D("zlib")},_context:function(){return D("context")},_nodescript:function(){return D("nodescript")},_httpparser:function(){return D("httpparser")},_dataview:function(){return D("dataview")},_signal:function(){return D("signal")},_fsevent:function(){return D("fsevent")},_tlswrap:function(){return D("tlswrap")}}}function $(){return{buf:"",write:function(E){this.buf+=E},end:function(E){this.buf+=E},read:function(){return this.buf}}}i.writeToStream=function(E,x,v){return v===void 0&&(v=x,x={}),k(x=_(E,x),v).dispatch(E)}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(r,n,i){(function(a,o,s,u,c,l,d,f,p){(function(y){var S=typeof Uint8Array<"u"?Uint8Array:Array,h=43,g=47,_=48,I=97,k=65,$=45,E=95;function x(v){return v=v.charCodeAt(0),v===h||v===$?62:v===g||v===E?63:v<_?-1:v<_+10?v-_+26+26:v<k+26?v-k:v<I+26?v-I+26:void 0}y.toByteArray=function(v){var D,b;if(0<v.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var A=v.length,A=v.charAt(A-2)==="="?2:v.charAt(A-1)==="="?1:0,P=new S(3*v.length/4-A),Q=0<A?v.length-4:v.length,J=0;function j(q){P[J++]=q}for(D=0;D<Q;D+=4,0)j((16711680&(b=x(v.charAt(D))<<18|x(v.charAt(D+1))<<12|x(v.charAt(D+2))<<6|x(v.charAt(D+3))))>>16),j((65280&b)>>8),j(255&b);return A==2?j(255&(b=x(v.charAt(D))<<2|x(v.charAt(D+1))>>4)):A==1&&(j((b=x(v.charAt(D))<<10|x(v.charAt(D+1))<<4|x(v.charAt(D+2))>>2)>>8&255),j(255&b)),P},y.fromByteArray=function(v){var D,b,A,P,Q=v.length%3,J="";function j(q){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(q)}for(D=0,A=v.length-Q;D<A;D+=3)b=(v[D]<<16)+(v[D+1]<<8)+v[D+2],J+=j((P=b)>>18&63)+j(P>>12&63)+j(P>>6&63)+j(63&P);switch(Q){case 1:J=(J+=j((b=v[v.length-1])>>2))+j(b<<4&63)+"==";break;case 2:J=(J=(J+=j((b=(v[v.length-2]<<8)+v[v.length-1])>>10))+j(b>>4&63))+j(b<<2&63)+"="}return J}})(i===void 0?this.base64js={}:i)}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(r,n,i){(function(a,o,h,u,c,l,d,f,p){var y=r("base64-js"),S=r("ieee754");function h(m,T,F){if(!(this instanceof h))return new h(m,T,F);var B,U,z,re,ye=typeof m;if(T==="base64"&&ye=="string")for(m=(re=m).trim?re.trim():re.replace(/^\s+|\s+$/g,"");m.length%4!=0;)m+="=";if(ye=="number")B=N(m);else if(ye=="string")B=h.byteLength(m,T);else{if(ye!="object")throw new Error("First argument needs to be a number, array or string.");B=N(m.length)}if(h._useTypedArrays?U=h._augment(new Uint8Array(B)):((U=this).length=B,U._isBuffer=!0),h._useTypedArrays&&typeof m.byteLength=="number")U._set(m);else if(M(re=m)||h.isBuffer(re)||re&&typeof re=="object"&&typeof re.length=="number")for(z=0;z<B;z++)h.isBuffer(m)?U[z]=m.readUInt8(z):U[z]=m[z];else if(ye=="string")U.write(m,0,T);else if(ye=="number"&&!h._useTypedArrays&&!F)for(z=0;z<B;z++)U[z]=0;return U}function g(m,T,F,B){return h._charsWritten=ie((function(U){for(var z=[],re=0;re<U.length;re++)z.push(255&U.charCodeAt(re));return z})(T),m,F,B)}function _(m,T,F,B){return h._charsWritten=ie((function(U){for(var z,re,ye=[],De=0;De<U.length;De++)re=U.charCodeAt(De),z=re>>8,re=re%256,ye.push(re),ye.push(z);return ye})(T),m,F,B)}function I(m,T,F){var B="";F=Math.min(m.length,F);for(var U=T;U<F;U++)B+=String.fromCharCode(m[U]);return B}function k(m,T,F,z){z||(V(typeof F=="boolean","missing or invalid endian"),V(T!=null,"missing offset"),V(T+1<m.length,"Trying to read beyond buffer length"));var U,z=m.length;if(!(z<=T))return F?(U=m[T],T+1<z&&(U|=m[T+1]<<8)):(U=m[T]<<8,T+1<z&&(U|=m[T+1])),U}function $(m,T,F,z){z||(V(typeof F=="boolean","missing or invalid endian"),V(T!=null,"missing offset"),V(T+3<m.length,"Trying to read beyond buffer length"));var U,z=m.length;if(!(z<=T))return F?(T+2<z&&(U=m[T+2]<<16),T+1<z&&(U|=m[T+1]<<8),U|=m[T],T+3<z&&(U+=m[T+3]<<24>>>0)):(T+1<z&&(U=m[T+1]<<16),T+2<z&&(U|=m[T+2]<<8),T+3<z&&(U|=m[T+3]),U+=m[T]<<24>>>0),U}function E(m,T,F,B){if(B||(V(typeof F=="boolean","missing or invalid endian"),V(T!=null,"missing offset"),V(T+1<m.length,"Trying to read beyond buffer length")),!(m.length<=T))return B=k(m,T,F,!0),32768&B?-1*(65535-B+1):B}function x(m,T,F,B){if(B||(V(typeof F=="boolean","missing or invalid endian"),V(T!=null,"missing offset"),V(T+3<m.length,"Trying to read beyond buffer length")),!(m.length<=T))return B=$(m,T,F,!0),2147483648&B?-1*(4294967295-B+1):B}function v(m,T,F,B){return B||(V(typeof F=="boolean","missing or invalid endian"),V(T+3<m.length,"Trying to read beyond buffer length")),S.read(m,T,F,23,4)}function D(m,T,F,B){return B||(V(typeof F=="boolean","missing or invalid endian"),V(T+7<m.length,"Trying to read beyond buffer length")),S.read(m,T,F,52,8)}function b(m,T,F,B,U){if(U||(V(T!=null,"missing value"),V(typeof B=="boolean","missing or invalid endian"),V(F!=null,"missing offset"),V(F+1<m.length,"trying to write beyond buffer length"),ae(T,65535)),U=m.length,!(U<=F))for(var z=0,re=Math.min(U-F,2);z<re;z++)m[F+z]=(T&255<<8*(B?z:1-z))>>>8*(B?z:1-z)}function A(m,T,F,B,U){if(U||(V(T!=null,"missing value"),V(typeof B=="boolean","missing or invalid endian"),V(F!=null,"missing offset"),V(F+3<m.length,"trying to write beyond buffer length"),ae(T,4294967295)),U=m.length,!(U<=F))for(var z=0,re=Math.min(U-F,4);z<re;z++)m[F+z]=T>>>8*(B?z:3-z)&255}function P(m,T,F,B,U){U||(V(T!=null,"missing value"),V(typeof B=="boolean","missing or invalid endian"),V(F!=null,"missing offset"),V(F+1<m.length,"Trying to write beyond buffer length"),oe(T,32767,-32768)),m.length<=F||b(m,0<=T?T:65535+T+1,F,B,U)}function Q(m,T,F,B,U){U||(V(T!=null,"missing value"),V(typeof B=="boolean","missing or invalid endian"),V(F!=null,"missing offset"),V(F+3<m.length,"Trying to write beyond buffer length"),oe(T,2147483647,-2147483648)),m.length<=F||A(m,0<=T?T:4294967295+T+1,F,B,U)}function J(m,T,F,B,U){U||(V(T!=null,"missing value"),V(typeof B=="boolean","missing or invalid endian"),V(F!=null,"missing offset"),V(F+3<m.length,"Trying to write beyond buffer length"),Se(T,34028234663852886e22,-34028234663852886e22)),m.length<=F||S.write(m,T,F,B,23,4)}function j(m,T,F,B,U){U||(V(T!=null,"missing value"),V(typeof B=="boolean","missing or invalid endian"),V(F!=null,"missing offset"),V(F+7<m.length,"Trying to write beyond buffer length"),Se(T,17976931348623157e292,-17976931348623157e292)),m.length<=F||S.write(m,T,F,B,52,8)}i.Buffer=h,i.SlowBuffer=h,i.INSPECT_MAX_BYTES=50,h.poolSize=8192,h._useTypedArrays=(function(){try{var m=new ArrayBuffer(0),T=new Uint8Array(m);return T.foo=function(){return 42},T.foo()===42&&typeof T.subarray=="function"}catch{return!1}})(),h.isEncoding=function(m){switch(String(m).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.isBuffer=function(m){return!(m==null||!m._isBuffer)},h.byteLength=function(m,T){var F;switch(m+="",T||"utf8"){case"hex":F=m.length/2;break;case"utf8":case"utf-8":F=Y(m).length;break;case"ascii":case"binary":case"raw":F=m.length;break;case"base64":F=ee(m).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":F=2*m.length;break;default:throw new Error("Unknown encoding")}return F},h.concat=function(m,T){if(V(M(m),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),m.length===0)return new h(0);if(m.length===1)return m[0];if(typeof T!="number")for(U=T=0;U<m.length;U++)T+=m[U].length;for(var F=new h(T),B=0,U=0;U<m.length;U++){var z=m[U];z.copy(F,B),B+=z.length}return F},h.prototype.write=function(m,T,F,B){isFinite(T)?isFinite(F)||(B=F,F=void 0):(De=B,B=T,T=F,F=De),T=Number(T)||0;var U,z,re,ye,De=this.length-T;switch((!F||De<(F=Number(F)))&&(F=De),B=String(B||"utf8").toLowerCase()){case"hex":U=(function(qe,Fe,$e,Ie){$e=Number($e)||0;var _e=qe.length-$e;(!Ie||_e<(Ie=Number(Ie)))&&(Ie=_e),V((_e=Fe.length)%2==0,"Invalid hex string"),_e/2<Ie&&(Ie=_e/2);for(var cr=0;cr<Ie;cr++){var Zl=parseInt(Fe.substr(2*cr,2),16);V(!isNaN(Zl),"Invalid hex string"),qe[$e+cr]=Zl}return h._charsWritten=2*cr,cr})(this,m,T,F);break;case"utf8":case"utf-8":z=this,re=T,ye=F,U=h._charsWritten=ie(Y(m),z,re,ye);break;case"ascii":case"binary":U=g(this,m,T,F);break;case"base64":z=this,re=T,ye=F,U=h._charsWritten=ie(ee(m),z,re,ye);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":U=_(this,m,T,F);break;default:throw new Error("Unknown encoding")}return U},h.prototype.toString=function(m,T,F){var B,U,z,re,ye=this;if(m=String(m||"utf8").toLowerCase(),T=Number(T)||0,(F=F!==void 0?Number(F):ye.length)===T)return"";switch(m){case"hex":B=(function(De,qe,Fe){var $e=De.length;(!qe||qe<0)&&(qe=0),(!Fe||Fe<0||$e<Fe)&&(Fe=$e);for(var Ie="",_e=qe;_e<Fe;_e++)Ie+=W(De[_e]);return Ie})(ye,T,F);break;case"utf8":case"utf-8":B=(function(De,qe,Fe){var $e="",Ie="";Fe=Math.min(De.length,Fe);for(var _e=qe;_e<Fe;_e++)De[_e]<=127?($e+=se(Ie)+String.fromCharCode(De[_e]),Ie=""):Ie+="%"+De[_e].toString(16);return $e+se(Ie)})(ye,T,F);break;case"ascii":case"binary":B=I(ye,T,F);break;case"base64":U=ye,re=F,B=(z=T)===0&&re===U.length?y.fromByteArray(U):y.fromByteArray(U.slice(z,re));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":B=(function(De,qe,Fe){for(var $e=De.slice(qe,Fe),Ie="",_e=0;_e<$e.length;_e+=2)Ie+=String.fromCharCode($e[_e]+256*$e[_e+1]);return Ie})(ye,T,F);break;default:throw new Error("Unknown encoding")}return B},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},h.prototype.copy=function(m,T,F,B){if(T=T||0,(B=B||B===0?B:this.length)!==(F=F||0)&&m.length!==0&&this.length!==0){V(F<=B,"sourceEnd < sourceStart"),V(0<=T&&T<m.length,"targetStart out of bounds"),V(0<=F&&F<this.length,"sourceStart out of bounds"),V(0<=B&&B<=this.length,"sourceEnd out of bounds"),B>this.length&&(B=this.length);var U=(B=m.length-T<B-F?m.length-T+F:B)-F;if(U<100||!h._useTypedArrays)for(var z=0;z<U;z++)m[z+T]=this[z+F];else m._set(this.subarray(F,F+U),T)}},h.prototype.slice=function(m,T){var F=this.length;if(m=O(m,F,0),T=O(T,F,F),h._useTypedArrays)return h._augment(this.subarray(m,T));for(var B=T-m,U=new h(B,void 0,!0),z=0;z<B;z++)U[z]=this[z+m];return U},h.prototype.get=function(m){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(m)},h.prototype.set=function(m,T){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(m,T)},h.prototype.readUInt8=function(m,T){if(T||(V(m!=null,"missing offset"),V(m<this.length,"Trying to read beyond buffer length")),!(m>=this.length))return this[m]},h.prototype.readUInt16LE=function(m,T){return k(this,m,!0,T)},h.prototype.readUInt16BE=function(m,T){return k(this,m,!1,T)},h.prototype.readUInt32LE=function(m,T){return $(this,m,!0,T)},h.prototype.readUInt32BE=function(m,T){return $(this,m,!1,T)},h.prototype.readInt8=function(m,T){if(T||(V(m!=null,"missing offset"),V(m<this.length,"Trying to read beyond buffer length")),!(m>=this.length))return 128&this[m]?-1*(255-this[m]+1):this[m]},h.prototype.readInt16LE=function(m,T){return E(this,m,!0,T)},h.prototype.readInt16BE=function(m,T){return E(this,m,!1,T)},h.prototype.readInt32LE=function(m,T){return x(this,m,!0,T)},h.prototype.readInt32BE=function(m,T){return x(this,m,!1,T)},h.prototype.readFloatLE=function(m,T){return v(this,m,!0,T)},h.prototype.readFloatBE=function(m,T){return v(this,m,!1,T)},h.prototype.readDoubleLE=function(m,T){return D(this,m,!0,T)},h.prototype.readDoubleBE=function(m,T){return D(this,m,!1,T)},h.prototype.writeUInt8=function(m,T,F){F||(V(m!=null,"missing value"),V(T!=null,"missing offset"),V(T<this.length,"trying to write beyond buffer length"),ae(m,255)),T>=this.length||(this[T]=m)},h.prototype.writeUInt16LE=function(m,T,F){b(this,m,T,!0,F)},h.prototype.writeUInt16BE=function(m,T,F){b(this,m,T,!1,F)},h.prototype.writeUInt32LE=function(m,T,F){A(this,m,T,!0,F)},h.prototype.writeUInt32BE=function(m,T,F){A(this,m,T,!1,F)},h.prototype.writeInt8=function(m,T,F){F||(V(m!=null,"missing value"),V(T!=null,"missing offset"),V(T<this.length,"Trying to write beyond buffer length"),oe(m,127,-128)),T>=this.length||(0<=m?this.writeUInt8(m,T,F):this.writeUInt8(255+m+1,T,F))},h.prototype.writeInt16LE=function(m,T,F){P(this,m,T,!0,F)},h.prototype.writeInt16BE=function(m,T,F){P(this,m,T,!1,F)},h.prototype.writeInt32LE=function(m,T,F){Q(this,m,T,!0,F)},h.prototype.writeInt32BE=function(m,T,F){Q(this,m,T,!1,F)},h.prototype.writeFloatLE=function(m,T,F){J(this,m,T,!0,F)},h.prototype.writeFloatBE=function(m,T,F){J(this,m,T,!1,F)},h.prototype.writeDoubleLE=function(m,T,F){j(this,m,T,!0,F)},h.prototype.writeDoubleBE=function(m,T,F){j(this,m,T,!1,F)},h.prototype.fill=function(m,T,F){if(T=T||0,F=F||this.length,V(typeof(m=typeof(m=m||0)=="string"?m.charCodeAt(0):m)=="number"&&!isNaN(m),"value is not a number"),V(T<=F,"end < start"),F!==T&&this.length!==0){V(0<=T&&T<this.length,"start out of bounds"),V(0<=F&&F<=this.length,"end out of bounds");for(var B=T;B<F;B++)this[B]=m}},h.prototype.inspect=function(){for(var m=[],T=this.length,F=0;F<T;F++)if(m[F]=W(this[F]),F===i.INSPECT_MAX_BYTES){m[F+1]="...";break}return"<Buffer "+m.join(" ")+">"},h.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(h._useTypedArrays)return new h(this).buffer;for(var m=new Uint8Array(this.length),T=0,F=m.length;T<F;T+=1)m[T]=this[T];return m.buffer};var q=h.prototype;function O(m,T,F){return typeof m!="number"?F:T<=(m=~~m)?T:0<=m||0<=(m+=T)?m:0}function N(m){return(m=~~Math.ceil(+m))<0?0:m}function M(m){return(Array.isArray||function(T){return Object.prototype.toString.call(T)==="[object Array]"})(m)}function W(m){return m<16?"0"+m.toString(16):m.toString(16)}function Y(m){for(var T=[],F=0;F<m.length;F++){var B=m.charCodeAt(F);if(B<=127)T.push(m.charCodeAt(F));else for(var U=F,z=(55296<=B&&B<=57343&&F++,encodeURIComponent(m.slice(U,F+1)).substr(1).split("%")),re=0;re<z.length;re++)T.push(parseInt(z[re],16))}return T}function ee(m){return y.toByteArray(m)}function ie(m,T,F,B){for(var U=0;U<B&&!(U+F>=T.length||U>=m.length);U++)T[U+F]=m[U];return U}function se(m){try{return decodeURIComponent(m)}catch{return"�"}}function ae(m,T){V(typeof m=="number","cannot write a non-number as a number"),V(0<=m,"specified a negative value for writing an unsigned value"),V(m<=T,"value is larger than maximum value for type"),V(Math.floor(m)===m,"value has a fractional component")}function oe(m,T,F){V(typeof m=="number","cannot write a non-number as a number"),V(m<=T,"value larger than maximum allowed value"),V(F<=m,"value smaller than minimum allowed value"),V(Math.floor(m)===m,"value has a fractional component")}function Se(m,T,F){V(typeof m=="number","cannot write a non-number as a number"),V(m<=T,"value larger than maximum allowed value"),V(F<=m,"value smaller than minimum allowed value")}function V(m,T){if(!m)throw new Error(T||"Failed assertion")}h._augment=function(m){return m._isBuffer=!0,m._get=m.get,m._set=m.set,m.get=q.get,m.set=q.set,m.write=q.write,m.toString=q.toString,m.toLocaleString=q.toString,m.toJSON=q.toJSON,m.copy=q.copy,m.slice=q.slice,m.readUInt8=q.readUInt8,m.readUInt16LE=q.readUInt16LE,m.readUInt16BE=q.readUInt16BE,m.readUInt32LE=q.readUInt32LE,m.readUInt32BE=q.readUInt32BE,m.readInt8=q.readInt8,m.readInt16LE=q.readInt16LE,m.readInt16BE=q.readInt16BE,m.readInt32LE=q.readInt32LE,m.readInt32BE=q.readInt32BE,m.readFloatLE=q.readFloatLE,m.readFloatBE=q.readFloatBE,m.readDoubleLE=q.readDoubleLE,m.readDoubleBE=q.readDoubleBE,m.writeUInt8=q.writeUInt8,m.writeUInt16LE=q.writeUInt16LE,m.writeUInt16BE=q.writeUInt16BE,m.writeUInt32LE=q.writeUInt32LE,m.writeUInt32BE=q.writeUInt32BE,m.writeInt8=q.writeInt8,m.writeInt16LE=q.writeInt16LE,m.writeInt16BE=q.writeInt16BE,m.writeInt32LE=q.writeInt32LE,m.writeInt32BE=q.writeInt32BE,m.writeFloatLE=q.writeFloatLE,m.writeFloatBE=q.writeFloatBE,m.writeDoubleLE=q.writeDoubleLE,m.writeDoubleBE=q.writeDoubleBE,m.fill=q.fill,m.inspect=q.inspect,m.toArrayBuffer=q.toArrayBuffer,m}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(r,n,i){(function(a,o,y,u,c,l,d,f,p){var y=r("buffer").Buffer,S=4,h=new y(S);h.fill(0),n.exports={hash:function(g,_,I,k){for(var $=_((function(b,A){b.length%S!=0&&(P=b.length+(S-b.length%S),b=y.concat([b,h],P));for(var P,Q=[],J=A?b.readInt32BE:b.readInt32LE,j=0;j<b.length;j+=S)Q.push(J.call(b,j));return Q})(g=y.isBuffer(g)?g:new y(g),k),8*g.length),_=k,E=new y(I),x=_?E.writeInt32BE:E.writeInt32LE,v=0;v<$.length;v++)x.call(E,$[v],4*v,!0);return E}}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(r,n,i){(function(a,o,y,u,c,l,d,f,p){var y=r("buffer").Buffer,S=r("./sha"),h=r("./sha256"),g=r("./rng"),_={sha1:S,sha256:h,md5:r("./md5")},I=64,k=new y(I);function $(b,A){var P=_[b=b||"sha1"],Q=[];return P||E("algorithm:",b,"is not yet supported"),{update:function(J){return y.isBuffer(J)||(J=new y(J)),Q.push(J),J.length,this},digest:function(J){var j=y.concat(Q),j=A?(function(q,O,N){y.isBuffer(O)||(O=new y(O)),y.isBuffer(N)||(N=new y(N)),O.length>I?O=q(O):O.length<I&&(O=y.concat([O,k],I));for(var M=new y(I),W=new y(I),Y=0;Y<I;Y++)M[Y]=54^O[Y],W[Y]=92^O[Y];return N=q(y.concat([M,N])),q(y.concat([W,N]))})(P,A,j):P(j);return Q=null,J?j.toString(J):j}}}function E(){var b=[].slice.call(arguments).join(" ");throw new Error([b,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}k.fill(0),i.createHash=function(b){return $(b)},i.createHmac=$,i.randomBytes=function(b,A){if(!A||!A.call)return new y(g(b));try{A.call(this,void 0,new y(g(b)))}catch(P){A(P)}};var x,v=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],D=function(b){i[b]=function(){E("sorry,",b,"is not implemented yet")}};for(x in v)D(v[x])}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(r,n,i){(function(a,o,s,u,c,l,d,f,p){var y=r("./helpers");function S(E,x){E[x>>5]|=128<<x%32,E[14+(x+64>>>9<<4)]=x;for(var v=1732584193,D=-271733879,b=-1732584194,A=271733878,P=0;P<E.length;P+=16){var Q=v,J=D,j=b,q=A,v=g(v,D,b,A,E[P+0],7,-680876936),A=g(A,v,D,b,E[P+1],12,-389564586),b=g(b,A,v,D,E[P+2],17,606105819),D=g(D,b,A,v,E[P+3],22,-1044525330);v=g(v,D,b,A,E[P+4],7,-176418897),A=g(A,v,D,b,E[P+5],12,1200080426),b=g(b,A,v,D,E[P+6],17,-1473231341),D=g(D,b,A,v,E[P+7],22,-45705983),v=g(v,D,b,A,E[P+8],7,1770035416),A=g(A,v,D,b,E[P+9],12,-1958414417),b=g(b,A,v,D,E[P+10],17,-42063),D=g(D,b,A,v,E[P+11],22,-1990404162),v=g(v,D,b,A,E[P+12],7,1804603682),A=g(A,v,D,b,E[P+13],12,-40341101),b=g(b,A,v,D,E[P+14],17,-1502002290),v=_(v,D=g(D,b,A,v,E[P+15],22,1236535329),b,A,E[P+1],5,-165796510),A=_(A,v,D,b,E[P+6],9,-1069501632),b=_(b,A,v,D,E[P+11],14,643717713),D=_(D,b,A,v,E[P+0],20,-373897302),v=_(v,D,b,A,E[P+5],5,-701558691),A=_(A,v,D,b,E[P+10],9,38016083),b=_(b,A,v,D,E[P+15],14,-660478335),D=_(D,b,A,v,E[P+4],20,-405537848),v=_(v,D,b,A,E[P+9],5,568446438),A=_(A,v,D,b,E[P+14],9,-1019803690),b=_(b,A,v,D,E[P+3],14,-187363961),D=_(D,b,A,v,E[P+8],20,1163531501),v=_(v,D,b,A,E[P+13],5,-1444681467),A=_(A,v,D,b,E[P+2],9,-51403784),b=_(b,A,v,D,E[P+7],14,1735328473),v=I(v,D=_(D,b,A,v,E[P+12],20,-1926607734),b,A,E[P+5],4,-378558),A=I(A,v,D,b,E[P+8],11,-2022574463),b=I(b,A,v,D,E[P+11],16,1839030562),D=I(D,b,A,v,E[P+14],23,-35309556),v=I(v,D,b,A,E[P+1],4,-1530992060),A=I(A,v,D,b,E[P+4],11,1272893353),b=I(b,A,v,D,E[P+7],16,-155497632),D=I(D,b,A,v,E[P+10],23,-1094730640),v=I(v,D,b,A,E[P+13],4,681279174),A=I(A,v,D,b,E[P+0],11,-358537222),b=I(b,A,v,D,E[P+3],16,-722521979),D=I(D,b,A,v,E[P+6],23,76029189),v=I(v,D,b,A,E[P+9],4,-640364487),A=I(A,v,D,b,E[P+12],11,-421815835),b=I(b,A,v,D,E[P+15],16,530742520),v=k(v,D=I(D,b,A,v,E[P+2],23,-995338651),b,A,E[P+0],6,-198630844),A=k(A,v,D,b,E[P+7],10,1126891415),b=k(b,A,v,D,E[P+14],15,-1416354905),D=k(D,b,A,v,E[P+5],21,-57434055),v=k(v,D,b,A,E[P+12],6,1700485571),A=k(A,v,D,b,E[P+3],10,-1894986606),b=k(b,A,v,D,E[P+10],15,-1051523),D=k(D,b,A,v,E[P+1],21,-2054922799),v=k(v,D,b,A,E[P+8],6,1873313359),A=k(A,v,D,b,E[P+15],10,-30611744),b=k(b,A,v,D,E[P+6],15,-1560198380),D=k(D,b,A,v,E[P+13],21,1309151649),v=k(v,D,b,A,E[P+4],6,-145523070),A=k(A,v,D,b,E[P+11],10,-1120210379),b=k(b,A,v,D,E[P+2],15,718787259),D=k(D,b,A,v,E[P+9],21,-343485551),v=$(v,Q),D=$(D,J),b=$(b,j),A=$(A,q)}return Array(v,D,b,A)}function h(E,x,v,D,b,A){return $((x=$($(x,E),$(D,A)))<<b|x>>>32-b,v)}function g(E,x,v,D,b,A,P){return h(x&v|~x&D,E,x,b,A,P)}function _(E,x,v,D,b,A,P){return h(x&D|v&~D,E,x,b,A,P)}function I(E,x,v,D,b,A,P){return h(x^v^D,E,x,b,A,P)}function k(E,x,v,D,b,A,P){return h(v^(x|~D),E,x,b,A,P)}function $(E,x){var v=(65535&E)+(65535&x);return(E>>16)+(x>>16)+(v>>16)<<16|65535&v}n.exports=function(E){return y.hash(E,S,16)}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(r,n,i){(function(a,o,s,u,c,l,d,f,p){n.exports=function(y){for(var S,h=new Array(y),g=0;g<y;g++)(3&g)==0&&(S=4294967296*Math.random()),h[g]=S>>>((3&g)<<3)&255;return h}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(r,n,i){(function(a,o,s,u,c,l,d,f,p){var y=r("./helpers");function S(_,I){_[I>>5]|=128<<24-I%32,_[15+(I+64>>9<<4)]=I;for(var k,$,E,x=Array(80),v=1732584193,D=-271733879,b=-1732584194,A=271733878,P=-1009589776,Q=0;Q<_.length;Q+=16){for(var J=v,j=D,q=b,O=A,N=P,M=0;M<80;M++){x[M]=M<16?_[Q+M]:g(x[M-3]^x[M-8]^x[M-14]^x[M-16],1);var W=h(h(g(v,5),(W=D,$=b,E=A,(k=M)<20?W&$|~W&E:!(k<40)&&k<60?W&$|W&E|$&E:W^$^E)),h(h(P,x[M]),(k=M)<20?1518500249:k<40?1859775393:k<60?-1894007588:-899497514)),P=A,A=b,b=g(D,30),D=v,v=W}v=h(v,J),D=h(D,j),b=h(b,q),A=h(A,O),P=h(P,N)}return Array(v,D,b,A,P)}function h(_,I){var k=(65535&_)+(65535&I);return(_>>16)+(I>>16)+(k>>16)<<16|65535&k}function g(_,I){return _<<I|_>>>32-I}n.exports=function(_){return y.hash(_,S,20,!0)}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(r,n,i){(function(a,o,s,u,c,l,d,f,p){function y(I,k){var $=(65535&I)+(65535&k);return(I>>16)+(k>>16)+($>>16)<<16|65535&$}function S(I,k){var $,E=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),x=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),v=new Array(64);I[k>>5]|=128<<24-k%32,I[15+(k+64>>9<<4)]=k;for(var D,b,A=0;A<I.length;A+=16){for(var P=x[0],Q=x[1],J=x[2],j=x[3],q=x[4],O=x[5],N=x[6],M=x[7],W=0;W<64;W++)v[W]=W<16?I[W+A]:y(y(y((b=v[W-2],g(b,17)^g(b,19)^_(b,10)),v[W-7]),(b=v[W-15],g(b,7)^g(b,18)^_(b,3))),v[W-16]),$=y(y(y(y(M,g(b=q,6)^g(b,11)^g(b,25)),q&O^~q&N),E[W]),v[W]),D=y(g(D=P,2)^g(D,13)^g(D,22),P&Q^P&J^Q&J),M=N,N=O,O=q,q=y(j,$),j=J,J=Q,Q=P,P=y($,D);x[0]=y(P,x[0]),x[1]=y(Q,x[1]),x[2]=y(J,x[2]),x[3]=y(j,x[3]),x[4]=y(q,x[4]),x[5]=y(O,x[5]),x[6]=y(N,x[6]),x[7]=y(M,x[7])}return x}var h=r("./helpers"),g=function(I,k){return I>>>k|I<<32-k},_=function(I,k){return I>>>k};n.exports=function(I){return h.hash(I,S,32,!0)}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(r,n,i){(function(a,o,s,u,c,l,d,f,p){i.read=function(y,S,h,g,A){var I,k,$=8*A-g-1,E=(1<<$)-1,x=E>>1,v=-7,D=h?A-1:0,b=h?-1:1,A=y[S+D];for(D+=b,I=A&(1<<-v)-1,A>>=-v,v+=$;0<v;I=256*I+y[S+D],D+=b,v-=8);for(k=I&(1<<-v)-1,I>>=-v,v+=g;0<v;k=256*k+y[S+D],D+=b,v-=8);if(I===0)I=1-x;else{if(I===E)return k?NaN:1/0*(A?-1:1);k+=Math.pow(2,g),I-=x}return(A?-1:1)*k*Math.pow(2,I-g)},i.write=function(y,S,h,g,_,P){var k,$,E=8*P-_-1,x=(1<<E)-1,v=x>>1,D=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=g?0:P-1,A=g?1:-1,P=S<0||S===0&&1/S<0?1:0;for(S=Math.abs(S),isNaN(S)||S===1/0?($=isNaN(S)?1:0,k=x):(k=Math.floor(Math.log(S)/Math.LN2),S*(g=Math.pow(2,-k))<1&&(k--,g*=2),2<=(S+=1<=k+v?D/g:D*Math.pow(2,1-v))*g&&(k++,g/=2),x<=k+v?($=0,k=x):1<=k+v?($=(S*g-1)*Math.pow(2,_),k+=v):($=S*Math.pow(2,v-1)*Math.pow(2,_),k=0));8<=_;y[h+b]=255&$,b+=A,$/=256,_-=8);for(k=k<<_|$,E+=_;0<E;y[h+b]=255&k,b+=A,k/=256,E-=8);y[h+b-A]|=128*P}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(r,n,i){(function(a,o,s,u,c,l,d,f,p){var y,S,h;function g(){}(a=n.exports={}).nextTick=(S=typeof window<"u"&&window.setImmediate,h=typeof window<"u"&&window.postMessage&&window.addEventListener,S?function(_){return window.setImmediate(_)}:h?(y=[],window.addEventListener("message",function(_){var I=_.source;I!==window&&I!==null||_.data!=="process-tick"||(_.stopPropagation(),0<y.length&&y.shift()())},!0),function(_){y.push(_),window.postMessage("process-tick","*")}):function(_){setTimeout(_,0)}),a.title="browser",a.browser=!0,a.env={},a.argv=[],a.on=g,a.addListener=g,a.once=g,a.off=g,a.removeListener=g,a.removeAllListeners=g,a.emit=g,a.binding=function(_){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(_){throw new Error("process.chdir is not supported")}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(Ha)),Ha.exports}var ev=Zy();const Yl=Zr(ev);function tv(){const e=Xy(),t="config"in e.cache?e.cache.config:{},r=new Pa({...t,typePolicies:{...t.typePolicies,Query:{...t.typePolicies?.Query,fields:{...t.typePolicies?.Query.fields,findScenes:{...t.typePolicies?.Query.fields?.findScenes,keyArgs:a=>Yl({...a,filter:{...a?.filter,page:void 0,per_page:void 0}}),merge(a={scenes:[]},o){return{...a,...o,scenes:[...a.scenes,...o.scenes.filter(s=>!a.scenes.some(u=>u.__ref===s.__ref))]}}},findSceneMarkers:{...t.typePolicies?.Query.fields?.findSceneMarkers,keyArgs:a=>Yl({...a,filter:{...a?.filter,page:void 0,per_page:void 0}}),merge(a={scene_markers:[]},o){return{...a,...o,scene_markers:[...a.scene_markers,...o.scene_markers.filter(s=>!a.scene_markers.some(u=>u.__ref===s.__ref))]}}}}}}}),n=new ja({link:e.link,cache:r}),i=r.modify;return r.modify=(a,...o)=>{const{fields:s={}}=a;if("findScenes"in s&&typeof s.findScenes=="function"){const u=s.findScenes;s.findScenes=(...c)=>{const[l,{DELETE:d}]=c,f=u(...c);return f===d?l:f}}return i.apply(r,[a,...o])},n}const Hl=tv(),rv={getItem:async e=>await Jl().then(t=>t?.[e]||null).catch(console.error),setItem:async(e,t)=>await Kl(r=>({...r,[e]:t})).catch(console.error),removeItem:async e=>{await Kl(t=>{const{[e]:r,...n}=t;return n})}};async function Jl(){return(await Hl.query({query:Ay})).data?.configuration.plugins[at]}async function Kl(e){Jl().then(t=>Hl.mutate({mutation:xy,variables:{plugin_id:at,input:e(t)}}))}const Ja={showSettings:!1,fullscreen:!1,tvConfigLoaded:!1},Ka=xs()((e,t)=>({...Ja,set:(r,n)=>{if(!t().tvConfigLoaded&&r!=="tvConfigLoaded"){console.warn(`Tried to set ${r} to "${n}" before store was loaded`);return}e(i=>{const a=typeof n=="function"?n(i[r]):n;return{[r]:a}})},setToDefault:r=>{if(!t().tvConfigLoaded){console.warn(`Tried to set ${r} to default before store was loaded`);return}e(n=>({[r]:Ja[r]}))},getDefault:r=>Ja[r],get:r=>t()[r]})),Qe="app-state",Xa={volume:0,showSubtitles:!1,letterboxing:!1,forceLandscape:!1,looping:!1,uiVisible:!0,isRandomised:!1,crtEffect:!1,crtEffectStrength:1,scenePreviewOnly:!1,markerPreviewOnly:!1,onlyShowMatchingOrientation:!1,maxMedia:void 0,autoPlay:!0,startPosition:"resume",endPosition:"video-end",showGuideOverlay:!0,showDevOptions:!1,logLevel:Hp,pageSize:5,loggersToShow:[],loggersToHide:[],showDebuggingInfo:[],renderedMediaItemsBuffer:2,videoJsEventsToLog:[],actionButtonStackConfig:[{id:"1",type:"button",buttonType:"ui-visibility",pinned:!0},{id:"2",type:"button",buttonType:"settings",pinned:!1},{id:"3",type:"button",buttonType:"show-scene-info",pinned:!1},{id:"12",type:"folder",pinned:!1,contents:[{id:"12.1",type:"button",buttonType:"rate-scene",pinned:!1},{id:"12.2",type:"button",buttonType:"o-counter",pinned:!1},{id:"12.3",type:"button",buttonType:"set-organized",pinned:!1},{id:"12.4",type:"button",buttonType:"edit-tags",pinned:!1,pinnedTagIds:[]},{id:"12.5",type:"button",buttonType:"delete-media-item",pinned:!1}]},{id:"6",type:"button",buttonType:"force-landscape",pinned:!1},{id:"8",type:"button",buttonType:"volume",pinned:!1},{id:"9",type:"button",buttonType:"letterboxing",pinned:!1},{id:"13",type:"folder",pinned:!1,contents:[{id:"13.1",type:"button",buttonType:"loop",pinned:!1},{id:"13.2",type:"button",buttonType:"playback-rate",pinned:!1},{id:"13.3",type:"button",buttonType:"subtitles",pinned:!1},{id:"13.4",type:"button",buttonType:"fullscreen",pinned:!1}]}],playbackRate:1},nv=["forceLandscape"],iv=()=>{const e=rv,t=localStorage;return{getItem:async r=>{const[n,i]=await Promise.all([e.getItem(r),Promise.resolve(t.getItem(`${r}-local`))]);if(!n&&!i)return null;const a=n?JSON.parse(n).state:{},o=i?JSON.parse(i).state:{};return JSON.stringify({state:{...a,...o},version:a?.version??o?.version??0})},setItem:async(r,n)=>{const i=JSON.parse(n),a=i.state,o={},s={};for(const[c,l]of Object.entries(a))nv.includes(c)?s[c]=l:o[c]=l;const u=[];Object.keys(o).length>0&&u.push(e.setItem(r,JSON.stringify({...i,state:o}))),Object.keys(s).length>0&&u.push(Promise.resolve(t.setItem(`${r}-local`,JSON.stringify({...i,state:s})))),await Promise.all(u)},removeItem:async r=>{await Promise.all([e.removeItem(r),Promise.resolve(t.removeItem(`${r}-local`))])}}};xs()(qp((e,t)=>({...Xa,set:(r,n)=>{if(!Ka.getState().tvConfigLoaded){console.warn(`Tried to set ${r} to "${n}" before config was loaded`);return}e(i=>{const a=typeof n=="function"?n(i[r]):n;if(r==="showDebuggingInfo"){const o=a.includes("render-debugging");localStorage.getItem("enableRenderDebugging")==="true"!==o&&setTimeout(()=>{localStorage.setItem("enableRenderDebugging",JSON.stringify(o)),window.location.reload()},300)}return{[r]:a}})},setToDefault:r=>{if(!Ka.getState().tvConfigLoaded){console.warn(`Tried to set ${r} to default before store was loaded`);return}e(n=>({[r]:Xa[r]}))},getDefault:r=>Xa[r],get:r=>t()[r]}),{name:Qe,storage:As(()=>iv()),onRehydrateStorage:e=>()=>Ka.setState({tvConfigLoaded:!0}),version:2,migrate:(e,t)=>{if(t===0&&e&&typeof e=="object"&&("audioMuted"in e&&(e.volume=e.audioMuted?0:1,delete e.audioMuted),"actionButtonsConfig"in e&&Array.isArray(e.actionButtonsConfig)))for(const r of e.actionButtonsConfig)r.type==="mute"&&(r.type="volume");if(t<2&&e&&typeof e=="object"&&"actionButtonsConfig"in e&&Array.isArray(e.actionButtonsConfig)){const r=e.actionButtonsConfig;e.actionButtonStackConfig=r,delete e.actionButtonsConfig;for(const n of r)n.buttonType=n.type,n.type="button"}return e}}));const{PluginApi:xe}=window,{React:fe}=xe,Za=xe.utils.StashService.getClient();Xl(async e=>e?.initialSetupComplete?null:(await sv(),{...e,initialSetupComplete:!0})),xe.patch.instead("PluginSettings",function(e,t,r){const[n,i]=fe.useState(!1),[a,o]=xe.React.useState(null);if(e.pluginID!==at)return fe.createElement(r,{...e});const s=async()=>{i(!1),await Xl(()=>({})),o(null),i(!0)};xe.React.useEffect(()=>{eo().then(c=>o(c.plugins[at]))},[]);const u=xe.React.useMemo(()=>JSON.parse(a&&Qe in a&&typeof a[Qe]=="string"?a[Qe]:"{}")?.state?.showDevOptions,[a]);return[fe.createElement(r,{...e}),fe.createElement("div",{className:"plugin-settings"},fe.createElement("div",{className:"setting"})," ",fe.createElement("div",{className:"setting"},fe.createElement("div",null,fe.createElement("h3",null,"Reset all Stash TV settings"),fe.createElement("div",{className:"sub-heading"},"Stash TV has its own settings which are configurable from the settings panel in the Stash TV interface. This resets those settings to default.")),fe.createElement("div",null,fe.createElement(xe.libraries.Bootstrap.Button,{onClick:s,variant:"warning"},n&&fe.createElement(fe.Fragment,null,fe.createElement(tn,{icon:xe.libraries.FontAwesomeSolid.faCheck})," "),"Reset"))),u&&fe.createElement("div",{className:"setting"},fe.createElement("div",null,fe.createElement("details",null,fe.createElement("summary",null,fe.createElement("h3",{style:{display:"inline"}},"Stash TV settings JSON")),fe.createElement("pre",null,JSON.stringify(a&&Qe in a&&typeof a[Qe]=="string"?{...a,[Qe]:"<app state data>"}:a,null,2)),a&&Qe in a&&typeof a[Qe]=="string"&&fe.createElement(fe.Fragment,null,"App state stored in Stash TV config:",fe.createElement("pre",null,JSON.stringify(JSON.parse(a[Qe]),null,2))))),fe.createElement("div",null)," "))]}),xe.patch.instead,xe.patch.instead("MainNavBar.MenuItems",function({children:e,...t},r,n){const{data:i,loading:a}=xe.GQL.useConfigurationQuery(),o=i?.configuration?.interface?.menuItems?.includes("tv");return[fe.createElement(n,{...t},e,!a&&o&&fe.createElement(av,null))]}),xe.patch.before("CheckboxGroup",function(...e){const[t,...r]=e;return t.groupId!=="menu-items"?[t,...r]:[{...t,items:[...t.items,{id:"tv",headingID:"TV"}]},...r]});const av=()=>{const e="/plugin/"+at+"/assets/app/";return fe.createElement("div",{"data-rb-event-key":e,className:"col-4 col-sm-3 col-md-2 col-lg-auto nav-link",id:"StashTVButton"},fe.createElement("a",{href:e,className:"minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center btn btn-primary",target:"_blank"},fe.createElement(tn,{className:"fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0",icon:xe.libraries.FontAwesomeSolid.faTelevision}),fe.createElement("span",null,"TV")))};async function Xl(e){eo().then(async t=>typeof e=="function"?await e(t.plugins[at],t):{...t.plugins[at],...e}).then(t=>{if(t)return Za.mutate({mutation:xe.GQL.ConfigurePluginDocument,variables:{plugin_id:at,input:t}})})}async function ov(e){eo().then(t=>typeof e=="function"?e(t.interface):{...t.interface,...e}).then(t=>Za.mutate({mutation:xe.GQL.ConfigureInterfaceDocument,variables:{input:t}}))}async function eo(){return(await Za.query({query:xe.GQL.ConfigurationDocument})).data?.configuration}async function sv(){ov(e=>({...e,menuItems:Array.from(new Set([...e.menuItems||[],"tv"]))}))}}));
