/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function $l(e, t, r) {
  return (t = Nl(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Ra(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ra(Object(r), !0).forEach(function(n) {
      $l(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ra(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Pl(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Nl(e) {
  var t = Pl(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const Ma = () => {
};
let Hi = {}, Zs = {}, eu = null, tu = {
  mark: Ma,
  measure: Ma
};
try {
  typeof window < "u" && (Hi = window), typeof document < "u" && (Zs = document), typeof MutationObserver < "u" && (eu = MutationObserver), typeof performance < "u" && (tu = performance);
} catch {
}
const {
  userAgent: La = ""
} = Hi.navigator || {}, Je = Hi, ie = Zs, ja = eu, Tr = tu;
Je.document;
const Me = !!ie.documentElement && !!ie.head && typeof ie.addEventListener == "function" && typeof ie.createElement == "function", ru = ~La.indexOf("MSIE") || ~La.indexOf("Trident/");
var Rl = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Ml = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, nu = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, Ll = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, iu = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], ye = "classic", Kr = "duotone", jl = "sharp", ql = "sharp-duotone", au = [ye, Kr, jl, ql], Ul = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, Vl = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, Bl = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), Gl = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, zl = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], qa = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Ql = ["kit"], Wl = {
  kit: {
    "fa-kit": "fak"
  }
}, Hl = ["fak", "fakd"], Yl = {
  kit: {
    fak: "fa-kit"
  }
}, Ua = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Ir = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Jl = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Kl = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Xl = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Zl = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, ef = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, ii = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, tf = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], ai = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Jl, ...tf], rf = ["solid", "regular", "light", "thin", "duotone", "brands"], ou = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], nf = ou.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), af = [...Object.keys(ef), ...rf, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ir.GROUP, Ir.SWAP_OPACITY, Ir.PRIMARY, Ir.SECONDARY].concat(ou.map((e) => "".concat(e, "x"))).concat(nf.map((e) => "w-".concat(e))), of = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const $e = "___FONT_AWESOME___", oi = 16, su = "fa", uu = "svg-inline--fa", lt = "data-fa-i2svg", si = "data-fa-pseudo-element", sf = "data-fa-pseudo-element-pending", Yi = "data-prefix", Ji = "data-icon", Va = "fontawesome-i2svg", uf = "async", cf = ["HTML", "HEAD", "STYLE", "SCRIPT"], cu = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
function Sr(e) {
  return new Proxy(e, {
    get(t, r) {
      return r in t ? t[r] : t[ye];
    }
  });
}
const lu = k({}, nu);
lu[ye] = k(k(k(k({}, {
  "fa-duotone": "duotone"
}), nu[ye]), qa.kit), qa["kit-duotone"]);
const lf = Sr(lu), ui = k({}, Gl);
ui[ye] = k(k(k(k({}, {
  duotone: "fad"
}), ui[ye]), Ua.kit), Ua["kit-duotone"]);
const Ba = Sr(ui), ci = k({}, ii);
ci[ye] = k(k({}, ci[ye]), Yl.kit);
const Ki = Sr(ci), li = k({}, Zl);
li[ye] = k(k({}, li[ye]), Wl.kit);
Sr(li);
const ff = Rl, fu = "fa-layers-text", df = Ml, pf = k({}, Ul);
Sr(pf);
const hf = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], vn = Ll, mf = [...Ql, ...af], ar = Je.FontAwesomeConfig || {};
function gf(e) {
  var t = ie.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function yf(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ie && typeof ie.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [r, n] = t;
  const i = yf(gf(r));
  i != null && (ar[n] = i);
});
const du = {
  styleDefault: "solid",
  familyDefault: ye,
  cssPrefix: su,
  replacementClass: uu,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
ar.familyPrefix && (ar.cssPrefix = ar.familyPrefix);
const At = k(k({}, du), ar);
At.autoReplaceSvg || (At.observeMutations = !1);
const R = {};
Object.keys(du).forEach((e) => {
  Object.defineProperty(R, e, {
    enumerable: !0,
    set: function(t) {
      At[e] = t, or.forEach((r) => r(R));
    },
    get: function() {
      return At[e];
    }
  });
});
Object.defineProperty(R, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    At.cssPrefix = e, or.forEach((t) => t(R));
  },
  get: function() {
    return At.cssPrefix;
  }
});
Je.FontAwesomeConfig = R;
const or = [];
function vf(e) {
  return or.push(e), () => {
    or.splice(or.indexOf(e), 1);
  };
}
const je = oi, xe = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function bf(e) {
  if (!e || !Me)
    return;
  const t = ie.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const r = ie.head.childNodes;
  let n = null;
  for (let i = r.length - 1; i > -1; i--) {
    const a = r[i], o = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (n = a);
  }
  return ie.head.insertBefore(t, n), e;
}
const Sf = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function fr() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Sf[Math.random() * 62 | 0];
  return t;
}
function Mt(e) {
  const t = [];
  for (let r = (e || []).length >>> 0; r--; )
    t[r] = e[r];
  return t;
}
function Xi(e) {
  return e.classList ? Mt(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function pu(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function _f(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, '="').concat(pu(e[r]), '" '), "").trim();
}
function Xr(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, ": ").concat(e[r].trim(), ";"), "");
}
function Zi(e) {
  return e.size !== xe.size || e.x !== xe.x || e.y !== xe.y || e.rotate !== xe.rotate || e.flipX || e.flipY;
}
function Ef(e) {
  let {
    transform: t,
    containerWidth: r,
    iconWidth: n
  } = e;
  const i = {
    transform: "translate(".concat(r / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), u = {
    transform: "".concat(a, " ").concat(o, " ").concat(s)
  }, c = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: u,
    path: c
  };
}
function Df(e) {
  let {
    transform: t,
    width: r = oi,
    height: n = oi,
    startCentered: i = !1
  } = e, a = "";
  return i && ru ? a += "translate(".concat(t.x / je - r / 2, "em, ").concat(t.y / je - n / 2, "em) ") : i ? a += "translate(calc(-50% + ".concat(t.x / je, "em), calc(-50% + ").concat(t.y / je, "em)) ") : a += "translate(".concat(t.x / je, "em, ").concat(t.y / je, "em) "), a += "scale(".concat(t.size / je * (t.flipX ? -1 : 1), ", ").concat(t.size / je * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var wf = `:root, :host {
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
}`;
function hu() {
  const e = su, t = uu, r = R.cssPrefix, n = R.replacementClass;
  let i = wf;
  if (r !== e || n !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(s, ".".concat(n));
  }
  return i;
}
let Ga = !1;
function bn() {
  R.autoAddCss && !Ga && (bf(hu()), Ga = !0);
}
var Tf = {
  mixout() {
    return {
      dom: {
        css: hu,
        insertCss: bn
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        bn();
      },
      beforeI2svg() {
        bn();
      }
    };
  }
};
const Pe = Je || {};
Pe[$e] || (Pe[$e] = {});
Pe[$e].styles || (Pe[$e].styles = {});
Pe[$e].hooks || (Pe[$e].hooks = {});
Pe[$e].shims || (Pe[$e].shims = []);
var Fe = Pe[$e];
const mu = [], gu = function() {
  ie.removeEventListener("DOMContentLoaded", gu), Br = 1, mu.map((e) => e());
};
let Br = !1;
Me && (Br = (ie.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ie.readyState), Br || ie.addEventListener("DOMContentLoaded", gu));
function If(e) {
  Me && (Br ? setTimeout(e, 0) : mu.push(e));
}
function _r(e) {
  const {
    tag: t,
    attributes: r = {},
    children: n = []
  } = e;
  return typeof e == "string" ? pu(e) : "<".concat(t, " ").concat(_f(r), ">").concat(n.map(_r).join(""), "</").concat(t, ">");
}
function za(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var Sn = function(t, r, n, i) {
  var a = Object.keys(t), o = a.length, s = r, u, c, l;
  for (n === void 0 ? (u = 1, l = t[a[0]]) : (u = 0, l = n); u < o; u++)
    c = a[u], l = s(l, t[c], c, t);
  return l;
};
function Of(e) {
  const t = [];
  let r = 0;
  const n = e.length;
  for (; r < n; ) {
    const i = e.charCodeAt(r++);
    if (i >= 55296 && i <= 56319 && r < n) {
      const a = e.charCodeAt(r++);
      (a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i), r--);
    } else
      t.push(i);
  }
  return t;
}
function fi(e) {
  const t = Of(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function kf(e, t) {
  const r = e.length;
  let n = e.charCodeAt(t), i;
  return n >= 55296 && n <= 56319 && r > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (n - 55296) * 1024 + i - 56320 + 65536 : n;
}
function Qa(e) {
  return Object.keys(e).reduce((t, r) => {
    const n = e[r];
    return !!n.icon ? t[n.iconName] = n.icon : t[r] = n, t;
  }, {});
}
function di(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: n = !1
  } = r, i = Qa(t);
  typeof Fe.hooks.addPack == "function" && !n ? Fe.hooks.addPack(e, Qa(t)) : Fe.styles[e] = k(k({}, Fe.styles[e] || {}), i), e === "fas" && di("fa", t);
}
const {
  styles: dr,
  shims: xf
} = Fe, yu = Object.keys(Ki), Ff = yu.reduce((e, t) => (e[t] = Object.keys(Ki[t]), e), {});
let ea = null, vu = {}, bu = {}, Su = {}, _u = {}, Eu = {};
function Cf(e) {
  return ~mf.indexOf(e);
}
function Af(e, t) {
  const r = t.split("-"), n = r[0], i = r.slice(1).join("-");
  return n === e && i !== "" && !Cf(i) ? i : null;
}
const Du = () => {
  const e = (n) => Sn(dr, (i, a, o) => (i[o] = Sn(a, n, {}), i), {});
  vu = e((n, i, a) => (i[3] && (n[i[3]] = a), i[2] && i[2].filter((s) => typeof s == "number").forEach((s) => {
    n[s.toString(16)] = a;
  }), n)), bu = e((n, i, a) => (n[a] = a, i[2] && i[2].filter((s) => typeof s == "string").forEach((s) => {
    n[s] = a;
  }), n)), Eu = e((n, i, a) => {
    const o = i[2];
    return n[a] = a, o.forEach((s) => {
      n[s] = a;
    }), n;
  });
  const t = "far" in dr || R.autoFetchSvg, r = Sn(xf, (n, i) => {
    const a = i[0];
    let o = i[1];
    const s = i[2];
    return o === "far" && !t && (o = "fas"), typeof a == "string" && (n.names[a] = {
      prefix: o,
      iconName: s
    }), typeof a == "number" && (n.unicodes[a.toString(16)] = {
      prefix: o,
      iconName: s
    }), n;
  }, {
    names: {},
    unicodes: {}
  });
  Su = r.names, _u = r.unicodes, ea = Zr(R.styleDefault, {
    family: R.familyDefault
  });
};
vf((e) => {
  ea = Zr(e.styleDefault, {
    family: R.familyDefault
  });
});
Du();
function ta(e, t) {
  return (vu[e] || {})[t];
}
function $f(e, t) {
  return (bu[e] || {})[t];
}
function ct(e, t) {
  return (Eu[e] || {})[t];
}
function wu(e) {
  return Su[e] || {
    prefix: null,
    iconName: null
  };
}
function Pf(e) {
  const t = _u[e], r = ta("fas", e);
  return t || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Ke() {
  return ea;
}
const Tu = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Nf(e) {
  let t = ye;
  const r = yu.reduce((n, i) => (n[i] = "".concat(R.cssPrefix, "-").concat(i), n), {});
  return au.forEach((n) => {
    (e.includes(r[n]) || e.some((i) => Ff[n].includes(i))) && (t = n);
  }), t;
}
function Zr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: r = ye
  } = t, n = lf[r][e];
  if (r === Kr && !e)
    return "fad";
  const i = Ba[r][e] || Ba[r][n], a = e in Fe.styles ? e : null;
  return i || a || null;
}
function Rf(e) {
  let t = [], r = null;
  return e.forEach((n) => {
    const i = Af(R.cssPrefix, n);
    i ? r = i : n && t.push(n);
  }), {
    iconName: r,
    rest: t
  };
}
function Wa(e) {
  return e.sort().filter((t, r, n) => n.indexOf(t) === r);
}
function en(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: r = !1
  } = t;
  let n = null;
  const i = ai.concat(Kl), a = Wa(e.filter((d) => i.includes(d))), o = Wa(e.filter((d) => !ai.includes(d))), s = a.filter((d) => (n = d, !iu.includes(d))), [u = null] = s, c = Nf(a), l = k(k({}, Rf(o)), {}, {
    prefix: Zr(u, {
      family: c
    })
  });
  return k(k(k({}, l), qf({
    values: e,
    family: c,
    styles: dr,
    config: R,
    canonical: l,
    givenPrefix: n
  })), Mf(r, n, l));
}
function Mf(e, t, r) {
  let {
    prefix: n,
    iconName: i
  } = r;
  if (e || !n || !i)
    return {
      prefix: n,
      iconName: i
    };
  const a = t === "fa" ? wu(i) : {}, o = ct(n, i);
  return i = a.iconName || o || i, n = a.prefix || n, n === "far" && !dr.far && dr.fas && !R.autoFetchSvg && (n = "fas"), {
    prefix: n,
    iconName: i
  };
}
const Lf = au.filter((e) => e !== ye || e !== Kr), jf = Object.keys(ii).filter((e) => e !== ye).map((e) => Object.keys(ii[e])).flat();
function qf(e) {
  const {
    values: t,
    family: r,
    canonical: n,
    givenPrefix: i = "",
    styles: a = {},
    config: o = {}
  } = e, s = r === Kr, u = t.includes("fa-duotone") || t.includes("fad"), c = o.familyDefault === "duotone", l = n.prefix === "fad" || n.prefix === "fa-duotone";
  if (!s && (u || c || l) && (n.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (n.prefix = "fab"), !n.prefix && Lf.includes(r) && (Object.keys(a).find((f) => jf.includes(f)) || o.autoFetchSvg)) {
    const f = Bl.get(r).defaultShortPrefixId;
    n.prefix = f, n.iconName = ct(n.prefix, n.iconName) || n.iconName;
  }
  return (n.prefix === "fa" || i === "fa") && (n.prefix = Ke() || "fas"), n;
}
class Uf {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    const i = r.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((a) => {
      this.definitions[a] = k(k({}, this.definitions[a] || {}), i[a]), di(a, i[a]);
      const o = Ki[ye][a];
      o && di(o, i[a]), Du();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, r) {
    const n = r.prefix && r.iconName && r.icon ? {
      0: r
    } : r;
    return Object.keys(n).map((i) => {
      const {
        prefix: a,
        iconName: o,
        icon: s
      } = n[i], u = s[2];
      t[a] || (t[a] = {}), u.length > 0 && u.forEach((c) => {
        typeof c == "string" && (t[a][c] = s);
      }), t[a][o] = s;
    }), t;
  }
}
let Ha = [], _t = {};
const Ot = {}, Vf = Object.keys(Ot);
function Bf(e, t) {
  let {
    mixoutsTo: r
  } = t;
  return Ha = e, _t = {}, Object.keys(Ot).forEach((n) => {
    Vf.indexOf(n) === -1 && delete Ot[n];
  }), Ha.forEach((n) => {
    const i = n.mixout ? n.mixout() : {};
    if (Object.keys(i).forEach((a) => {
      typeof i[a] == "function" && (r[a] = i[a]), typeof i[a] == "object" && Object.keys(i[a]).forEach((o) => {
        r[a] || (r[a] = {}), r[a][o] = i[a][o];
      });
    }), n.hooks) {
      const a = n.hooks();
      Object.keys(a).forEach((o) => {
        _t[o] || (_t[o] = []), _t[o].push(a[o]);
      });
    }
    n.provides && n.provides(Ot);
  }), r;
}
function pi(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  return (_t[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...n]);
  }), t;
}
function ft(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  (_t[e] || []).forEach((a) => {
    a.apply(null, r);
  });
}
function Xe() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Ot[e] ? Ot[e].apply(null, t) : void 0;
}
function hi(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const r = e.prefix || Ke();
  if (t)
    return t = ct(r, t) || t, za(Iu.definitions, r, t) || za(Fe.styles, r, t);
}
const Iu = new Uf(), Gf = () => {
  R.autoReplaceSvg = !1, R.observeMutations = !1, ft("noAuto");
}, zf = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Me ? (ft("beforeI2svg", e), Xe("pseudoElements2svg", e), Xe("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    R.autoReplaceSvg === !1 && (R.autoReplaceSvg = !0), R.observeMutations = !0, If(() => {
      Wf({
        autoReplaceSvgRoot: t
      }), ft("watch", e);
    });
  }
}, Qf = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: ct(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], r = Zr(e[0]);
      return {
        prefix: r,
        iconName: ct(r, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(R.cssPrefix, "-")) > -1 || e.match(ff))) {
      const t = en(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Ke(),
        iconName: ct(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Ke();
      return {
        prefix: t,
        iconName: ct(t, e) || e
      };
    }
  }
}, _e = {
  noAuto: Gf,
  config: R,
  dom: zf,
  parse: Qf,
  library: Iu,
  findIconDefinition: hi,
  toHtml: _r
}, Wf = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = ie
  } = e;
  (Object.keys(Fe.styles).length > 0 || R.autoFetchSvg) && Me && R.autoReplaceSvg && _e.dom.i2svg({
    node: t
  });
};
function tn(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((r) => _r(r));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!Me) return;
      const r = ie.createElement("div");
      return r.innerHTML = e.html, r.children;
    }
  }), e;
}
function Hf(e) {
  let {
    children: t,
    main: r,
    mask: n,
    attributes: i,
    styles: a,
    transform: o
  } = e;
  if (Zi(o) && r.found && !n.found) {
    const {
      width: s,
      height: u
    } = r, c = {
      x: s / u / 2,
      y: 0.5
    };
    i.style = Xr(k(k({}, a), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function Yf(e) {
  let {
    prefix: t,
    iconName: r,
    children: n,
    attributes: i,
    symbol: a
  } = e;
  const o = a === !0 ? "".concat(t, "-").concat(R.cssPrefix, "-").concat(r) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: k(k({}, i), {}, {
        id: o
      }),
      children: n
    }]
  }];
}
function ra(e) {
  const {
    icons: {
      main: t,
      mask: r
    },
    prefix: n,
    iconName: i,
    transform: a,
    symbol: o,
    title: s,
    maskId: u,
    titleId: c,
    extra: l,
    watchable: d = !1
  } = e, {
    width: f,
    height: p
  } = r.found ? r : t, y = Hl.includes(n), m = [R.replacementClass, i ? "".concat(R.cssPrefix, "-").concat(i) : ""].filter((I) => l.classes.indexOf(I) === -1).filter((I) => I !== "" || !!I).concat(l.classes).join(" ");
  let v = {
    children: [],
    attributes: k(k({}, l.attributes), {}, {
      "data-prefix": n,
      "data-icon": i,
      class: m,
      role: l.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(f, " ").concat(p)
    })
  };
  const g = y && !~l.classes.indexOf("fa-fw") ? {
    width: "".concat(f / p * 16 * 0.0625, "em")
  } : {};
  d && (v.attributes[lt] = ""), s && (v.children.push({
    tag: "title",
    attributes: {
      id: v.attributes["aria-labelledby"] || "title-".concat(c || fr())
    },
    children: [s]
  }), delete v.attributes.title);
  const b = k(k({}, v), {}, {
    prefix: n,
    iconName: i,
    main: t,
    mask: r,
    maskId: u,
    transform: a,
    symbol: o,
    styles: k(k({}, g), l.styles)
  }), {
    children: E,
    attributes: D
  } = r.found && t.found ? Xe("generateAbstractMask", b) || {
    children: [],
    attributes: {}
  } : Xe("generateAbstractIcon", b) || {
    children: [],
    attributes: {}
  };
  return b.children = E, b.attributes = D, o ? Yf(b) : Hf(b);
}
function Ya(e) {
  const {
    content: t,
    width: r,
    height: n,
    transform: i,
    title: a,
    extra: o,
    watchable: s = !1
  } = e, u = k(k(k({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  s && (u[lt] = "");
  const c = k({}, o.styles);
  Zi(i) && (c.transform = Df({
    transform: i,
    startCentered: !0,
    width: r,
    height: n
  }), c["-webkit-transform"] = c.transform);
  const l = Xr(c);
  l.length > 0 && (u.style = l);
  const d = [];
  return d.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), a && d.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), d;
}
function Jf(e) {
  const {
    content: t,
    title: r,
    extra: n
  } = e, i = k(k(k({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), a = Xr(n.styles);
  a.length > 0 && (i.style = a);
  const o = [];
  return o.push({
    tag: "span",
    attributes: i,
    children: [t]
  }), r && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), o;
}
const {
  styles: _n
} = Fe;
function mi(e) {
  const t = e[0], r = e[1], [n] = e.slice(4);
  let i = null;
  return Array.isArray(n) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(R.cssPrefix, "-").concat(vn.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(R.cssPrefix, "-").concat(vn.SECONDARY),
        fill: "currentColor",
        d: n[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(R.cssPrefix, "-").concat(vn.PRIMARY),
        fill: "currentColor",
        d: n[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: n
    }
  }, {
    found: !0,
    width: t,
    height: r,
    icon: i
  };
}
const Kf = {
  found: !1,
  width: 512,
  height: 512
};
function Xf(e, t) {
  !cu && !R.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function gi(e, t) {
  let r = t;
  return t === "fa" && R.styleDefault !== null && (t = Ke()), new Promise((n, i) => {
    if (r === "fa") {
      const a = wu(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && _n[t] && _n[t][e]) {
      const a = _n[t][e];
      return n(mi(a));
    }
    Xf(e, t), n(k(k({}, Kf), {}, {
      icon: R.showMissingIcons && e ? Xe("missingIconAbstract") || {} : {}
    }));
  });
}
const Ja = () => {
}, yi = R.measurePerformance && Tr && Tr.mark && Tr.measure ? Tr : {
  mark: Ja,
  measure: Ja
}, tr = 'FA "6.7.2"', Zf = (e) => (yi.mark("".concat(tr, " ").concat(e, " begins")), () => Ou(e)), Ou = (e) => {
  yi.mark("".concat(tr, " ").concat(e, " ends")), yi.measure("".concat(tr, " ").concat(e), "".concat(tr, " ").concat(e, " begins"), "".concat(tr, " ").concat(e, " ends"));
};
var na = {
  begin: Zf,
  end: Ou
};
const $r = () => {
};
function Ka(e) {
  return typeof (e.getAttribute ? e.getAttribute(lt) : null) == "string";
}
function ed(e) {
  const t = e.getAttribute ? e.getAttribute(Yi) : null, r = e.getAttribute ? e.getAttribute(Ji) : null;
  return t && r;
}
function td(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(R.replacementClass);
}
function rd() {
  return R.autoReplaceSvg === !0 ? Pr.replace : Pr[R.autoReplaceSvg] || Pr.replace;
}
function nd(e) {
  return ie.createElementNS("http://www.w3.org/2000/svg", e);
}
function id(e) {
  return ie.createElement(e);
}
function ku(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: r = e.tag === "svg" ? nd : id
  } = t;
  if (typeof e == "string")
    return ie.createTextNode(e);
  const n = r(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    n.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    n.appendChild(ku(a, {
      ceFn: r
    }));
  }), n;
}
function ad(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Pr = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((r) => {
        t.parentNode.insertBefore(ku(r), t);
      }), t.getAttribute(lt) === null && R.keepOriginalSource) {
        let r = ie.createComment(ad(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], r = e[1];
    if (~Xi(t).indexOf(R.replacementClass))
      return Pr.replace(e);
    const n = new RegExp("".concat(R.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      const a = r[0].attributes.class.split(" ").reduce((o, s) => (s === R.replacementClass || s.match(n) ? o.toSvg.push(s) : o.toNode.push(s), o), {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const i = r.map((a) => _r(a)).join(`
`);
    t.setAttribute(lt, ""), t.innerHTML = i;
  }
};
function Xa(e) {
  e();
}
function xu(e, t) {
  const r = typeof t == "function" ? t : $r;
  if (e.length === 0)
    r();
  else {
    let n = Xa;
    R.mutateApproach === uf && (n = Je.requestAnimationFrame || Xa), n(() => {
      const i = rd(), a = na.begin("mutate");
      e.map(i), a(), r();
    });
  }
}
let ia = !1;
function Fu() {
  ia = !0;
}
function vi() {
  ia = !1;
}
let Gr = null;
function Za(e) {
  if (!ja || !R.observeMutations)
    return;
  const {
    treeCallback: t = $r,
    nodeCallback: r = $r,
    pseudoElementsCallback: n = $r,
    observeMutationsRoot: i = ie
  } = e;
  Gr = new ja((a) => {
    if (ia) return;
    const o = Ke();
    Mt(a).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !Ka(s.addedNodes[0]) && (R.searchPseudoElements && n(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && R.searchPseudoElements && n(s.target.parentNode), s.type === "attributes" && Ka(s.target) && ~hf.indexOf(s.attributeName))
        if (s.attributeName === "class" && ed(s.target)) {
          const {
            prefix: u,
            iconName: c
          } = en(Xi(s.target));
          s.target.setAttribute(Yi, u || o), c && s.target.setAttribute(Ji, c);
        } else td(s.target) && r(s.target);
    });
  }), Me && Gr.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function od() {
  Gr && Gr.disconnect();
}
function sd(e) {
  const t = e.getAttribute("style");
  let r = [];
  return t && (r = t.split(";").reduce((n, i) => {
    const a = i.split(":"), o = a[0], s = a.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), r;
}
function ud(e) {
  const t = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = en(Xi(e));
  return i.prefix || (i.prefix = Ke()), t && r && (i.prefix = t, i.iconName = r), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = $f(i.prefix, e.innerText) || ta(i.prefix, fi(e.innerText))), !i.iconName && R.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function cd(e) {
  const t = Mt(e.attributes).reduce((i, a) => (i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i), {}), r = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return R.autoA11y && (r ? t["aria-labelledby"] = "".concat(R.replacementClass, "-title-").concat(n || fr()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function ld() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: xe,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function eo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: r,
    prefix: n,
    rest: i
  } = ud(e), a = cd(e), o = pi("parseNodeAttributes", {}, e);
  let s = t.styleParser ? sd(e) : [];
  return k({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: n,
    transform: xe,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: s,
      attributes: a
    }
  }, o);
}
const {
  styles: fd
} = Fe;
function Cu(e) {
  const t = R.autoReplaceSvg === "nest" ? eo(e, {
    styleParser: !1
  }) : eo(e);
  return ~t.extra.classes.indexOf(fu) ? Xe("generateLayersText", e, t) : Xe("generateSvgReplacementMutation", e, t);
}
function dd() {
  return [...zl, ...ai];
}
function to(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Me) return Promise.resolve();
  const r = ie.documentElement.classList, n = (l) => r.add("".concat(Va, "-").concat(l)), i = (l) => r.remove("".concat(Va, "-").concat(l)), a = R.autoFetchSvg ? dd() : iu.concat(Object.keys(fd));
  a.includes("fa") || a.push("fa");
  const o = [".".concat(fu, ":not([").concat(lt, "])")].concat(a.map((l) => ".".concat(l, ":not([").concat(lt, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = Mt(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    n("pending"), i("complete");
  else
    return Promise.resolve();
  const u = na.begin("onTree"), c = s.reduce((l, d) => {
    try {
      const f = Cu(d);
      f && l.push(f);
    } catch (f) {
      cu || f.name === "MissingIcon" && console.error(f);
    }
    return l;
  }, []);
  return new Promise((l, d) => {
    Promise.all(c).then((f) => {
      xu(f, () => {
        n("active"), n("complete"), i("pending"), typeof t == "function" && t(), u(), l();
      });
    }).catch((f) => {
      u(), d(f);
    });
  });
}
function pd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Cu(e).then((r) => {
    r && xu([r], t);
  });
}
function hd(e) {
  return function(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = (t || {}).icon ? t : hi(t || {});
    let {
      mask: i
    } = r;
    return i && (i = (i || {}).icon ? i : hi(i || {})), e(n, k(k({}, r), {}, {
      mask: i
    }));
  };
}
const md = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: r = xe,
    symbol: n = !1,
    mask: i = null,
    maskId: a = null,
    title: o = null,
    titleId: s = null,
    classes: u = [],
    attributes: c = {},
    styles: l = {}
  } = t;
  if (!e) return;
  const {
    prefix: d,
    iconName: f,
    icon: p
  } = e;
  return tn(k({
    type: "icon"
  }, e), () => (ft("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), R.autoA11y && (o ? c["aria-labelledby"] = "".concat(R.replacementClass, "-title-").concat(s || fr()) : (c["aria-hidden"] = "true", c.focusable = "false")), ra({
    icons: {
      main: mi(p),
      mask: i ? mi(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: d,
    iconName: f,
    transform: k(k({}, xe), r),
    symbol: n,
    title: o,
    maskId: a,
    titleId: s,
    extra: {
      attributes: c,
      styles: l,
      classes: u
    }
  })));
};
var gd = {
  mixout() {
    return {
      icon: hd(md)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = to, e.nodeCallback = pd, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: r = ie,
        callback: n = () => {
        }
      } = t;
      return to(r, n);
    }, e.generateSvgReplacementMutation = function(t, r) {
      const {
        iconName: n,
        title: i,
        titleId: a,
        prefix: o,
        transform: s,
        symbol: u,
        mask: c,
        maskId: l,
        extra: d
      } = r;
      return new Promise((f, p) => {
        Promise.all([gi(n, o), c.iconName ? gi(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((y) => {
          let [m, v] = y;
          f([t, ra({
            icons: {
              main: m,
              mask: v
            },
            prefix: o,
            iconName: n,
            transform: s,
            symbol: u,
            maskId: l,
            title: i,
            titleId: a,
            extra: d,
            watchable: !0
          })]);
        }).catch(p);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: r,
        attributes: n,
        main: i,
        transform: a,
        styles: o
      } = t;
      const s = Xr(o);
      s.length > 0 && (n.style = s);
      let u;
      return Zi(a) && (u = Xe("generateAbstractTransformGrouping", {
        main: i,
        transform: a,
        containerWidth: i.width,
        iconWidth: i.width
      })), r.push(u || i.icon), {
        children: r,
        attributes: n
      };
    };
  }
}, yd = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: r = []
        } = t;
        return tn({
          type: "layer"
        }, () => {
          ft("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let n = [];
          return e((i) => {
            Array.isArray(i) ? i.map((a) => {
              n = n.concat(a.abstract);
            }) : n = n.concat(i.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(R.cssPrefix, "-layers"), ...r].join(" ")
            },
            children: n
          }];
        });
      }
    };
  }
}, vd = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: r = null,
          classes: n = [],
          attributes: i = {},
          styles: a = {}
        } = t;
        return tn({
          type: "counter",
          content: e
        }, () => (ft("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Jf({
          content: e.toString(),
          title: r,
          extra: {
            attributes: i,
            styles: a,
            classes: ["".concat(R.cssPrefix, "-layers-counter"), ...n]
          }
        })));
      }
    };
  }
}, bd = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: r = xe,
          title: n = null,
          classes: i = [],
          attributes: a = {},
          styles: o = {}
        } = t;
        return tn({
          type: "text",
          content: e
        }, () => (ft("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Ya({
          content: e,
          transform: k(k({}, xe), r),
          title: n,
          extra: {
            attributes: a,
            styles: o,
            classes: ["".concat(R.cssPrefix, "-layers-text"), ...i]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, r) {
      const {
        title: n,
        transform: i,
        extra: a
      } = r;
      let o = null, s = null;
      if (ru) {
        const u = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        o = c.width / u, s = c.height / u;
      }
      return R.autoA11y && !n && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, Ya({
        content: t.innerHTML,
        width: o,
        height: s,
        transform: i,
        title: n,
        extra: a,
        watchable: !0
      })]);
    };
  }
};
const Sd = new RegExp('"', "ug"), ro = [1105920, 1112319], no = k(k(k(k({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Vl), of), Xl), bi = Object.keys(no).reduce((e, t) => (e[t.toLowerCase()] = no[t], e), {}), _d = Object.keys(bi).reduce((e, t) => {
  const r = bi[t];
  return e[t] = r[900] || [...Object.entries(r)][0][1], e;
}, {});
function Ed(e) {
  const t = e.replace(Sd, ""), r = kf(t, 0), n = r >= ro[0] && r <= ro[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: fi(i ? t[0] : t),
    isSecondary: n || i
  };
}
function Dd(e, t) {
  const r = e.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(t), i = isNaN(n) ? "normal" : n;
  return (bi[r] || {})[i] || _d[r];
}
function io(e, t) {
  const r = "".concat(sf).concat(t.replace(":", "-"));
  return new Promise((n, i) => {
    if (e.getAttribute(r) !== null)
      return n();
    const o = Mt(e.children).filter((f) => f.getAttribute(si) === t)[0], s = Je.getComputedStyle(e, t), u = s.getPropertyValue("font-family"), c = u.match(df), l = s.getPropertyValue("font-weight"), d = s.getPropertyValue("content");
    if (o && !c)
      return e.removeChild(o), n();
    if (c && d !== "none" && d !== "") {
      const f = s.getPropertyValue("content");
      let p = Dd(u, l);
      const {
        value: y,
        isSecondary: m
      } = Ed(f), v = c[0].startsWith("FontAwesome");
      let g = ta(p, y), b = g;
      if (v) {
        const E = Pf(y);
        E.iconName && E.prefix && (g = E.iconName, p = E.prefix);
      }
      if (g && !m && (!o || o.getAttribute(Yi) !== p || o.getAttribute(Ji) !== b)) {
        e.setAttribute(r, b), o && e.removeChild(o);
        const E = ld(), {
          extra: D
        } = E;
        D.attributes[si] = t, gi(g, p).then((I) => {
          const O = ra(k(k({}, E), {}, {
            icons: {
              main: I,
              mask: Tu()
            },
            prefix: p,
            iconName: b,
            extra: D,
            watchable: !0
          })), x = ie.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(x, e.firstChild) : e.appendChild(x), x.outerHTML = O.map((P) => _r(P)).join(`
`), e.removeAttribute(r), n();
        }).catch(i);
      } else
        n();
    } else
      n();
  });
}
function wd(e) {
  return Promise.all([io(e, "::before"), io(e, "::after")]);
}
function Td(e) {
  return e.parentNode !== document.head && !~cf.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(si) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function ao(e) {
  if (Me)
    return new Promise((t, r) => {
      const n = Mt(e.querySelectorAll("*")).filter(Td).map(wd), i = na.begin("searchPseudoElements");
      Fu(), Promise.all(n).then(() => {
        i(), vi(), t();
      }).catch(() => {
        i(), vi(), r();
      });
    });
}
var Id = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = ao, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: r = ie
      } = t;
      R.searchPseudoElements && ao(r);
    };
  }
};
let oo = !1;
var Od = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Fu(), oo = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Za(pi("mutationObserverCallbacks", {}));
      },
      noAuto() {
        od();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        oo ? vi() : Za(pi("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const so = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((r, n) => {
    const i = n.toLowerCase().split("-"), a = i[0];
    let o = i.slice(1).join("-");
    if (a && o === "h")
      return r.flipX = !0, r;
    if (a && o === "v")
      return r.flipY = !0, r;
    if (o = parseFloat(o), isNaN(o))
      return r;
    switch (a) {
      case "grow":
        r.size = r.size + o;
        break;
      case "shrink":
        r.size = r.size - o;
        break;
      case "left":
        r.x = r.x - o;
        break;
      case "right":
        r.x = r.x + o;
        break;
      case "up":
        r.y = r.y - o;
        break;
      case "down":
        r.y = r.y + o;
        break;
      case "rotate":
        r.rotate = r.rotate + o;
        break;
    }
    return r;
  }, t);
};
var kd = {
  mixout() {
    return {
      parse: {
        transform: (e) => so(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-transform");
        return r && (e.transform = so(r)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: r,
        transform: n,
        containerWidth: i,
        iconWidth: a
      } = t;
      const o = {
        transform: "translate(".concat(i / 2, " 256)")
      }, s = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "), u = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), c = "rotate(".concat(n.rotate, " 0 0)"), l = {
        transform: "".concat(s, " ").concat(u, " ").concat(c)
      }, d = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, f = {
        outer: o,
        inner: l,
        path: d
      };
      return {
        tag: "g",
        attributes: k({}, f.outer),
        children: [{
          tag: "g",
          attributes: k({}, f.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: k(k({}, r.icon.attributes), f.path)
          }]
        }]
      };
    };
  }
};
const En = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function uo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function xd(e) {
  return e.tag === "g" ? e.children : [e];
}
var Fd = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-mask"), n = r ? en(r.split(" ").map((i) => i.trim())) : Tu();
        return n.prefix || (n.prefix = Ke()), e.mask = n, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: r,
        attributes: n,
        main: i,
        mask: a,
        maskId: o,
        transform: s
      } = t;
      const {
        width: u,
        icon: c
      } = i, {
        width: l,
        icon: d
      } = a, f = Ef({
        transform: s,
        containerWidth: l,
        iconWidth: u
      }), p = {
        tag: "rect",
        attributes: k(k({}, En), {}, {
          fill: "white"
        })
      }, y = c.children ? {
        children: c.children.map(uo)
      } : {}, m = {
        tag: "g",
        attributes: k({}, f.inner),
        children: [uo(k({
          tag: c.tag,
          attributes: k(k({}, c.attributes), f.path)
        }, y))]
      }, v = {
        tag: "g",
        attributes: k({}, f.outer),
        children: [m]
      }, g = "mask-".concat(o || fr()), b = "clip-".concat(o || fr()), E = {
        tag: "mask",
        attributes: k(k({}, En), {}, {
          id: g,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [p, v]
      }, D = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: b
          },
          children: xd(d)
        }, E]
      };
      return r.push(D, {
        tag: "rect",
        attributes: k({
          fill: "currentColor",
          "clip-path": "url(#".concat(b, ")"),
          mask: "url(#".concat(g, ")")
        }, En)
      }), {
        children: r,
        attributes: n
      };
    };
  }
}, Cd = {
  provides(e) {
    let t = !1;
    Je.matchMedia && (t = Je.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const r = [], n = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: k(k({}, n), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = k(k({}, i), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: k(k({}, n), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || o.children.push({
        tag: "animate",
        attributes: k(k({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: k(k({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(o), r.push({
        tag: "path",
        attributes: k(k({}, n), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: k(k({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || r.push({
        tag: "path",
        attributes: k(k({}, n), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: k(k({}, a), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, Ad = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-symbol"), n = r === null ? !1 : r === "" ? !0 : r;
        return e.symbol = n, e;
      }
    };
  }
}, $d = [Tf, gd, yd, vd, bd, Id, Od, kd, Fd, Cd, Ad];
Bf($d, {
  mixoutsTo: _e
});
_e.noAuto;
_e.config;
_e.library;
_e.dom;
const Si = _e.parse;
_e.findIconDefinition;
_e.toHtml;
const Pd = _e.icon;
_e.layer;
_e.text;
_e.counter;
function aa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dn = { exports: {} }, wn, co;
function Nd() {
  if (co) return wn;
  co = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wn = e, wn;
}
var Tn, lo;
function Rd() {
  if (lo) return Tn;
  lo = 1;
  var e = /* @__PURE__ */ Nd();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Tn = function() {
    function n(o, s, u, c, l, d) {
      if (d !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Tn;
}
var fo;
function Md() {
  return fo || (fo = 1, Dn.exports = /* @__PURE__ */ Rd()()), Dn.exports;
}
var Ld = /* @__PURE__ */ Md();
const U = /* @__PURE__ */ aa(Ld);
var In = { exports: {} }, z = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var On, po;
function jd() {
  if (po) return On;
  po = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(o).map(function(l) {
        return o[l];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        c[l] = l;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return On = i() ? Object.assign : function(a, o) {
    for (var s, u = n(a), c, l = 1; l < arguments.length; l++) {
      s = Object(arguments[l]);
      for (var d in s)
        t.call(s, d) && (u[d] = s[d]);
      if (e) {
        c = e(s);
        for (var f = 0; f < c.length; f++)
          r.call(s, c[f]) && (u[c[f]] = s[c[f]]);
      }
    }
    return u;
  }, On;
}
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ho;
function qd() {
  if (ho) return z;
  ho = 1;
  var e = jd(), t = 60103, r = 60106;
  z.Fragment = 60107, z.StrictMode = 60108, z.Profiler = 60114;
  var n = 60109, i = 60110, a = 60112;
  z.Suspense = 60113;
  var o = 60115, s = 60116;
  if (typeof Symbol == "function" && Symbol.for) {
    var u = Symbol.for;
    t = u("react.element"), r = u("react.portal"), z.Fragment = u("react.fragment"), z.StrictMode = u("react.strict_mode"), z.Profiler = u("react.profiler"), n = u("react.provider"), i = u("react.context"), a = u("react.forward_ref"), z.Suspense = u("react.suspense"), o = u("react.memo"), s = u("react.lazy");
  }
  var c = typeof Symbol == "function" && Symbol.iterator;
  function l(S) {
    return S === null || typeof S != "object" ? null : (S = c && S[c] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  function d(S) {
    for (var w = "https://reactjs.org/docs/error-decoder.html?invariant=" + S, F = 1; F < arguments.length; F++) w += "&args[]=" + encodeURIComponent(arguments[F]);
    return "Minified React error #" + S + "; visit " + w + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var f = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, p = {};
  function y(S, w, F) {
    this.props = S, this.context = w, this.refs = p, this.updater = F || f;
  }
  y.prototype.isReactComponent = {}, y.prototype.setState = function(S, w) {
    if (typeof S != "object" && typeof S != "function" && S != null) throw Error(d(85));
    this.updater.enqueueSetState(this, S, w, "setState");
  }, y.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function m() {
  }
  m.prototype = y.prototype;
  function v(S, w, F) {
    this.props = S, this.context = w, this.refs = p, this.updater = F || f;
  }
  var g = v.prototype = new m();
  g.constructor = v, e(g, y.prototype), g.isPureReactComponent = !0;
  var b = { current: null }, E = Object.prototype.hasOwnProperty, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(S, w, F) {
    var j, N = {}, V = null, K = null;
    if (w != null) for (j in w.ref !== void 0 && (K = w.ref), w.key !== void 0 && (V = "" + w.key), w) E.call(w, j) && !D.hasOwnProperty(j) && (N[j] = w[j]);
    var X = arguments.length - 2;
    if (X === 1) N.children = F;
    else if (1 < X) {
      for (var Z = Array(X), ee = 0; ee < X; ee++) Z[ee] = arguments[ee + 2];
      N.children = Z;
    }
    if (S && S.defaultProps) for (j in X = S.defaultProps, X) N[j] === void 0 && (N[j] = X[j]);
    return { $$typeof: t, type: S, key: V, ref: K, props: N, _owner: b.current };
  }
  function O(S, w) {
    return { $$typeof: t, type: S.type, key: w, ref: S.ref, props: S.props, _owner: S._owner };
  }
  function x(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }
  function P(S) {
    var w = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(F) {
      return w[F];
    });
  }
  var L = /\/+/g;
  function q(S, w) {
    return typeof S == "object" && S !== null && S.key != null ? P("" + S.key) : w.toString(36);
  }
  function G(S, w, F, j, N) {
    var V = typeof S;
    (V === "undefined" || V === "boolean") && (S = null);
    var K = !1;
    if (S === null) K = !0;
    else switch (V) {
      case "string":
      case "number":
        K = !0;
        break;
      case "object":
        switch (S.$$typeof) {
          case t:
          case r:
            K = !0;
        }
    }
    if (K) return K = S, N = N(K), S = j === "" ? "." + q(K, 0) : j, Array.isArray(N) ? (F = "", S != null && (F = S.replace(L, "$&/") + "/"), G(N, w, F, "", function(ee) {
      return ee;
    })) : N != null && (x(N) && (N = O(N, F + (!N.key || K && K.key === N.key ? "" : ("" + N.key).replace(L, "$&/") + "/") + S)), w.push(N)), 1;
    if (K = 0, j = j === "" ? "." : j + ":", Array.isArray(S)) for (var X = 0; X < S.length; X++) {
      V = S[X];
      var Z = j + q(V, X);
      K += G(V, w, F, Z, N);
    }
    else if (Z = l(S), typeof Z == "function") for (S = Z.call(S), X = 0; !(V = S.next()).done; ) V = V.value, Z = j + q(V, X++), K += G(V, w, F, Z, N);
    else if (V === "object") throw w = "" + S, Error(d(31, w === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : w));
    return K;
  }
  function ce(S, w, F) {
    if (S == null) return S;
    var j = [], N = 0;
    return G(S, j, "", "", function(V) {
      return w.call(F, V, N++);
    }), j;
  }
  function ne(S) {
    if (S._status === -1) {
      var w = S._result;
      w = w(), S._status = 0, S._result = w, w.then(function(F) {
        S._status === 0 && (F = F.default, S._status = 1, S._result = F);
      }, function(F) {
        S._status === 0 && (S._status = 2, S._result = F);
      });
    }
    if (S._status === 1) return S._result;
    throw S._result;
  }
  var he = { current: null };
  function M() {
    var S = he.current;
    if (S === null) throw Error(d(321));
    return S;
  }
  var J = { ReactCurrentDispatcher: he, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: b, IsSomeRendererActing: { current: !1 }, assign: e };
  return z.Children = { map: ce, forEach: function(S, w, F) {
    ce(S, function() {
      w.apply(this, arguments);
    }, F);
  }, count: function(S) {
    var w = 0;
    return ce(S, function() {
      w++;
    }), w;
  }, toArray: function(S) {
    return ce(S, function(w) {
      return w;
    }) || [];
  }, only: function(S) {
    if (!x(S)) throw Error(d(143));
    return S;
  } }, z.Component = y, z.PureComponent = v, z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J, z.cloneElement = function(S, w, F) {
    if (S == null) throw Error(d(267, S));
    var j = e({}, S.props), N = S.key, V = S.ref, K = S._owner;
    if (w != null) {
      if (w.ref !== void 0 && (V = w.ref, K = b.current), w.key !== void 0 && (N = "" + w.key), S.type && S.type.defaultProps) var X = S.type.defaultProps;
      for (Z in w) E.call(w, Z) && !D.hasOwnProperty(Z) && (j[Z] = w[Z] === void 0 && X !== void 0 ? X[Z] : w[Z]);
    }
    var Z = arguments.length - 2;
    if (Z === 1) j.children = F;
    else if (1 < Z) {
      X = Array(Z);
      for (var ee = 0; ee < Z; ee++) X[ee] = arguments[ee + 2];
      j.children = X;
    }
    return {
      $$typeof: t,
      type: S.type,
      key: N,
      ref: V,
      props: j,
      _owner: K
    };
  }, z.createContext = function(S, w) {
    return w === void 0 && (w = null), S = { $$typeof: i, _calculateChangedBits: w, _currentValue: S, _currentValue2: S, _threadCount: 0, Provider: null, Consumer: null }, S.Provider = { $$typeof: n, _context: S }, S.Consumer = S;
  }, z.createElement = I, z.createFactory = function(S) {
    var w = I.bind(null, S);
    return w.type = S, w;
  }, z.createRef = function() {
    return { current: null };
  }, z.forwardRef = function(S) {
    return { $$typeof: a, render: S };
  }, z.isValidElement = x, z.lazy = function(S) {
    return { $$typeof: s, _payload: { _status: -1, _result: S }, _init: ne };
  }, z.memo = function(S, w) {
    return { $$typeof: o, type: S, compare: w === void 0 ? null : w };
  }, z.useCallback = function(S, w) {
    return M().useCallback(S, w);
  }, z.useContext = function(S, w) {
    return M().useContext(S, w);
  }, z.useDebugValue = function() {
  }, z.useEffect = function(S, w) {
    return M().useEffect(S, w);
  }, z.useImperativeHandle = function(S, w, F) {
    return M().useImperativeHandle(S, w, F);
  }, z.useLayoutEffect = function(S, w) {
    return M().useLayoutEffect(S, w);
  }, z.useMemo = function(S, w) {
    return M().useMemo(S, w);
  }, z.useReducer = function(S, w, F) {
    return M().useReducer(S, w, F);
  }, z.useRef = function(S) {
    return M().useRef(S);
  }, z.useState = function(S) {
    return M().useState(S);
  }, z.version = "17.0.2", z;
}
var mo;
function oa() {
  return mo || (mo = 1, In.exports = qd()), In.exports;
}
var Ud = oa();
const sa = /* @__PURE__ */ aa(Ud);
function _i(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Vd(e) {
  if (Array.isArray(e)) return e;
}
function Bd(e) {
  if (Array.isArray(e)) return _i(e);
}
function Ve(e, t, r) {
  return (t = Kd(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Gd(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function zd(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], u = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(u = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (l) {
      c = !0, i = l;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return s;
  }
}
function Qd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function go(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? go(Object(r), !0).forEach(function(n) {
      Ve(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : go(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hd(e, t) {
  if (e == null) return {};
  var r, n, i = Yd(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Yd(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function yo(e, t) {
  return Vd(e) || zd(e, t) || Au(e, t) || Qd();
}
function Ei(e) {
  return Bd(e) || Gd(e) || Au(e) || Wd();
}
function Jd(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Kd(e) {
  var t = Jd(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function zr(e) {
  "@babel/helpers - typeof";
  return zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zr(e);
}
function Au(e, t) {
  if (e) {
    if (typeof e == "string") return _i(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _i(e, t) : void 0;
  }
}
var Xd = "7.0.0-alpha1", Di;
try {
  var Zd = require("@fortawesome/fontawesome-svg-core/package.json");
  Di = Zd.version;
} catch {
  Di = "sss";
}
function ep(e) {
  var t = e.beat, r = e.fade, n = e.beatFade, i = e.bounce, a = e.shake, o = e.flash, s = e.spin, u = e.spinPulse, c = e.spinReverse, l = e.pulse, d = e.fixedWidth, f = e.inverse, p = e.border, y = e.listItem, m = e.flip, v = e.size, g = e.rotation, b = e.pull, E = e.swapOpacity, D = e.rotateBy, I = e.widthAuto, O = tp(Di, Xd), x = Ve(Ve(Ve(Ve(Ve(Ve({
    "fa-beat": t,
    "fa-fade": r,
    "fa-beat-fade": n,
    "fa-bounce": i,
    "fa-shake": a,
    "fa-flash": o,
    "fa-spin": s,
    "fa-spin-reverse": c,
    "fa-spin-pulse": u,
    "fa-pulse": l,
    "fa-fw": d,
    "fa-inverse": f,
    "fa-border": p,
    "fa-li": y,
    "fa-flip": m === !0,
    "fa-flip-horizontal": m === "horizontal" || m === "both",
    "fa-flip-vertical": m === "vertical" || m === "both"
  }, "fa-".concat(v), typeof v < "u" && v !== null), "fa-rotate-".concat(g), typeof g < "u" && g !== null && g !== 0), "fa-pull-".concat(b), typeof b < "u" && b !== null), "fa-swap-opacity", E), "fa-rotate-by", O && D), "fa-width-auto", O && I);
  return Object.keys(x).map(function(P) {
    return x[P] ? P : null;
  }).filter(function(P) {
    return P;
  });
}
function tp(e, t) {
  for (var r = e.split("-"), n = yo(r, 2), i = n[0], a = n[1], o = t.split("-"), s = yo(o, 2), u = s[0], c = s[1], l = i.split("."), d = u.split("."), f = 0; f < Math.max(l.length, d.length); f++) {
    var p = l[f] || "0", y = d[f] || "0", m = parseInt(p, 10), v = parseInt(y, 10);
    if (m !== v)
      return m > v;
  }
  for (var g = 0; g < Math.max(l.length, d.length); g++) {
    var b = l[g] || "0", E = d[g] || "0";
    if (b !== E && b.length !== E.length)
      return b.length < E.length;
  }
  return !(a && !c);
}
function rp(e) {
  return e = e - 0, e === e;
}
function $u(e) {
  return rp(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, r) {
    return r ? r.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var np = ["style"];
function ip(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ap(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, r) {
    var n = r.indexOf(":"), i = $u(r.slice(0, n)), a = r.slice(n + 1).trim();
    return i.startsWith("webkit") ? t[ip(i)] = a : t[i] = a, t;
  }, {});
}
function Pu(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var n = (t.children || []).map(function(u) {
    return Pu(e, u);
  }), i = Object.keys(t.attributes || {}).reduce(function(u, c) {
    var l = t.attributes[c];
    switch (c) {
      case "class":
        u.attrs.className = l, delete t.attributes.class;
        break;
      case "style":
        u.attrs.style = ap(l);
        break;
      default:
        c.indexOf("aria-") === 0 || c.indexOf("data-") === 0 ? u.attrs[c.toLowerCase()] = l : u.attrs[$u(c)] = l;
    }
    return u;
  }, {
    attrs: {}
  }), a = r.style, o = a === void 0 ? {} : a, s = Hd(r, np);
  return i.attrs.style = ke(ke({}, i.attrs.style), o), e.apply(void 0, [t.tag, ke(ke({}, i.attrs), s)].concat(Ei(n)));
}
var Nu = !1;
try {
  Nu = !0;
} catch {
}
function op() {
  if (!Nu && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function vo(e) {
  if (e && zr(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Si.icon)
    return Si.icon(e);
  if (e === null)
    return null;
  if (e && zr(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function kn(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Ve({}, e, t) : {};
}
var bo = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  // the fixedWidth property has been deprecated as of version 7
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  rotateBy: !1,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1,
  widthAuto: !1
}, rn = /* @__PURE__ */ sa.forwardRef(function(e, t) {
  var r = ke(ke({}, bo), e), n = r.icon, i = r.mask, a = r.symbol, o = r.className, s = r.title, u = r.titleId, c = r.maskId, l = vo(n), d = kn("classes", [].concat(Ei(ep(r)), Ei((o || "").split(" ")))), f = kn("transform", typeof r.transform == "string" ? Si.transform(r.transform) : r.transform), p = kn("mask", vo(i)), y = Pd(l, ke(ke(ke(ke({}, d), f), p), {}, {
    symbol: a,
    title: s,
    titleId: u,
    maskId: c
  }));
  if (!y)
    return op("Could not find icon", l), null;
  var m = y.abstract, v = {
    ref: t
  };
  return Object.keys(r).forEach(function(g) {
    bo.hasOwnProperty(g) || (v[g] = r[g]);
  }), sp(m[0], v);
});
rn.displayName = "FontAwesomeIcon";
rn.propTypes = {
  beat: U.bool,
  border: U.bool,
  beatFade: U.bool,
  bounce: U.bool,
  className: U.string,
  fade: U.bool,
  flash: U.bool,
  mask: U.oneOfType([U.object, U.array, U.string]),
  maskId: U.string,
  // the fixedWidth property has been deprecated as of version 7
  fixedWidth: U.bool,
  inverse: U.bool,
  flip: U.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: U.oneOfType([U.object, U.array, U.string]),
  listItem: U.bool,
  pull: U.oneOf(["right", "left"]),
  pulse: U.bool,
  rotation: U.oneOf([0, 90, 180, 270]),
  rotateBy: U.bool,
  shake: U.bool,
  size: U.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: U.bool,
  spinPulse: U.bool,
  spinReverse: U.bool,
  symbol: U.oneOfType([U.bool, U.string]),
  title: U.string,
  titleId: U.string,
  transform: U.oneOfType([U.string, U.object]),
  swapOpacity: U.bool,
  widthAuto: U.bool
};
var sp = Pu.bind(null, sa.createElement);
const He = "stash-tv", up = {}, So = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (l, d) => {
    const f = typeof l == "function" ? l(t) : l;
    if (!Object.is(f, t)) {
      const p = t;
      t = d ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), r.forEach((y) => y(t, p));
    }
  }, i = () => t, u = { setState: n, getState: i, getInitialState: () => c, subscribe: (l) => (r.add(l), () => r.delete(l)), destroy: () => {
    (up ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } }, c = t = e(n, i, u);
  return u;
}, cp = (e) => e ? So(e) : So;
var xn = { exports: {} }, Fn = {}, Cn = { exports: {} }, An = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _o;
function lp() {
  if (_o) return An;
  _o = 1;
  var e = oa();
  function t(d, f) {
    return d === f && (d !== 0 || 1 / d === 1 / f) || d !== d && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, a = e.useLayoutEffect, o = e.useDebugValue;
  function s(d, f) {
    var p = f(), y = n({ inst: { value: p, getSnapshot: f } }), m = y[0].inst, v = y[1];
    return a(
      function() {
        m.value = p, m.getSnapshot = f, u(m) && v({ inst: m });
      },
      [d, p, f]
    ), i(
      function() {
        return u(m) && v({ inst: m }), d(function() {
          u(m) && v({ inst: m });
        });
      },
      [d]
    ), o(p), p;
  }
  function u(d) {
    var f = d.getSnapshot;
    d = d.value;
    try {
      var p = f();
      return !r(d, p);
    } catch {
      return !0;
    }
  }
  function c(d, f) {
    return f();
  }
  var l = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : s;
  return An.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l, An;
}
var Eo;
function fp() {
  return Eo || (Eo = 1, Cn.exports = lp()), Cn.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Do;
function dp() {
  if (Do) return Fn;
  Do = 1;
  var e = oa(), t = fp();
  function r(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, a = e.useRef, o = e.useEffect, s = e.useMemo, u = e.useDebugValue;
  return Fn.useSyncExternalStoreWithSelector = function(c, l, d, f, p) {
    var y = a(null);
    if (y.current === null) {
      var m = { hasValue: !1, value: null };
      y.current = m;
    } else m = y.current;
    y = s(
      function() {
        function g(O) {
          if (!b) {
            if (b = !0, E = O, O = f(O), p !== void 0 && m.hasValue) {
              var x = m.value;
              if (p(x, O))
                return D = x;
            }
            return D = O;
          }
          if (x = D, n(E, O)) return x;
          var P = f(O);
          return p !== void 0 && p(x, P) ? (E = O, x) : (E = O, D = P);
        }
        var b = !1, E, D, I = d === void 0 ? null : d;
        return [
          function() {
            return g(l());
          },
          I === null ? void 0 : function() {
            return g(I());
          }
        ];
      },
      [l, d, f, p]
    );
    var v = i(c, y[0], y[1]);
    return o(
      function() {
        m.hasValue = !0, m.value = v;
      },
      [v]
    ), u(v), v;
  }, Fn;
}
var wo;
function pp() {
  return wo || (wo = 1, xn.exports = dp()), xn.exports;
}
var hp = pp();
const mp = /* @__PURE__ */ aa(hp), Ru = {}, { useDebugValue: gp } = sa, { useSyncExternalStoreWithSelector: yp } = mp;
let To = !1;
const vp = (e) => e;
function bp(e, t = vp, r) {
  (Ru ? "production" : void 0) !== "production" && r && !To && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), To = !0);
  const n = yp(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r
  );
  return gp(n), n;
}
const Sp = (e) => {
  (Ru ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? cp(e) : e, r = (n, i) => bp(t, n, i);
  return Object.assign(r, t), r;
}, Mu = (e) => Sp, _p = {};
function Lu(e, t) {
  let r;
  try {
    r = e();
  } catch {
    return;
  }
  return {
    getItem: (i) => {
      var a;
      const o = (u) => u === null ? null : JSON.parse(u, void 0), s = (a = r.getItem(i)) != null ? a : null;
      return s instanceof Promise ? s.then(o) : o(s);
    },
    setItem: (i, a) => r.setItem(
      i,
      JSON.stringify(a, void 0)
    ),
    removeItem: (i) => r.removeItem(i)
  };
}
const pr = (e) => (t) => {
  try {
    const r = e(t);
    return r instanceof Promise ? r : {
      then(n) {
        return pr(n)(r);
      },
      catch(n) {
        return this;
      }
    };
  } catch (r) {
    return {
      then(n) {
        return this;
      },
      catch(n) {
        return pr(n)(r);
      }
    };
  }
}, Ep = (e, t) => (r, n, i) => {
  let a = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (v) => v,
    version: 0,
    merge: (v, g) => ({
      ...g,
      ...v
    }),
    ...t
  }, o = !1;
  const s = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let c;
  try {
    c = a.getStorage();
  } catch {
  }
  if (!c)
    return e(
      (...v) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), r(...v);
      },
      n,
      i
    );
  const l = pr(a.serialize), d = () => {
    const v = a.partialize({ ...n() });
    let g;
    const b = l({ state: v, version: a.version }).then(
      (E) => c.setItem(a.name, E)
    ).catch((E) => {
      g = E;
    });
    if (g)
      throw g;
    return b;
  }, f = i.setState;
  i.setState = (v, g) => {
    f(v, g), d();
  };
  const p = e(
    (...v) => {
      r(...v), d();
    },
    n,
    i
  );
  let y;
  const m = () => {
    var v;
    if (!c) return;
    o = !1, s.forEach((b) => b(n()));
    const g = ((v = a.onRehydrateStorage) == null ? void 0 : v.call(a, n())) || void 0;
    return pr(c.getItem.bind(c))(a.name).then((b) => {
      if (b)
        return a.deserialize(b);
    }).then((b) => {
      if (b)
        if (typeof b.version == "number" && b.version !== a.version) {
          if (a.migrate)
            return a.migrate(
              b.state,
              b.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return b.state;
    }).then((b) => {
      var E;
      return y = a.merge(
        b,
        (E = n()) != null ? E : p
      ), r(y, !0), d();
    }).then(() => {
      g?.(y, void 0), o = !0, u.forEach((b) => b(y));
    }).catch((b) => {
      g?.(void 0, b);
    });
  };
  return i.persist = {
    setOptions: (v) => {
      a = {
        ...a,
        ...v
      }, v.getStorage && (c = v.getStorage());
    },
    clearStorage: () => {
      c?.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => m(),
    hasHydrated: () => o,
    onHydrate: (v) => (s.add(v), () => {
      s.delete(v);
    }),
    onFinishHydration: (v) => (u.add(v), () => {
      u.delete(v);
    })
  }, m(), y || p;
}, Dp = (e, t) => (r, n, i) => {
  let a = {
    storage: Lu(() => localStorage),
    partialize: (m) => m,
    version: 0,
    merge: (m, v) => ({
      ...v,
      ...m
    }),
    ...t
  }, o = !1;
  const s = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let c = a.storage;
  if (!c)
    return e(
      (...m) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), r(...m);
      },
      n,
      i
    );
  const l = () => {
    const m = a.partialize({ ...n() });
    return c.setItem(a.name, {
      state: m,
      version: a.version
    });
  }, d = i.setState;
  i.setState = (m, v) => {
    d(m, v), l();
  };
  const f = e(
    (...m) => {
      r(...m), l();
    },
    n,
    i
  );
  i.getInitialState = () => f;
  let p;
  const y = () => {
    var m, v;
    if (!c) return;
    o = !1, s.forEach((b) => {
      var E;
      return b((E = n()) != null ? E : f);
    });
    const g = ((v = a.onRehydrateStorage) == null ? void 0 : v.call(a, (m = n()) != null ? m : f)) || void 0;
    return pr(c.getItem.bind(c))(a.name).then((b) => {
      if (b)
        if (typeof b.version == "number" && b.version !== a.version) {
          if (a.migrate)
            return [
              !0,
              a.migrate(
                b.state,
                b.version
              )
            ];
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, b.state];
      return [!1, void 0];
    }).then((b) => {
      var E;
      const [D, I] = b;
      if (p = a.merge(
        I,
        (E = n()) != null ? E : f
      ), r(p, !0), D)
        return l();
    }).then(() => {
      g?.(p, void 0), p = n(), o = !0, u.forEach((b) => b(p));
    }).catch((b) => {
      g?.(void 0, b);
    });
  };
  return i.persist = {
    setOptions: (m) => {
      a = {
        ...a,
        ...m
      }, m.storage && (c = m.storage);
    },
    clearStorage: () => {
      c?.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => y(),
    hasHydrated: () => o,
    onHydrate: (m) => (s.add(m), () => {
      s.delete(m);
    }),
    onFinishHydration: (m) => (u.add(m), () => {
      u.delete(m);
    })
  }, a.skipHydration || y(), p || f;
}, wp = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ((_p ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), Ep(e, t)) : Dp(e, t), Tp = wp;
function wi(e, t) {
  const r = t?.compact === !0 ? void 0 : 2;
  return JSON.stringify(e, null, r);
}
const Ip = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  inspect: wi
}, Symbol.toStringTag, { value: "Module" })), ju = {
  trace: "TRC",
  debug: "DBG",
  info: "INF",
  warning: "WRN",
  error: "ERR",
  fatal: "FTL"
}, Io = typeof document < "u" || typeof navigator < "u" && navigator.product === "ReactNative" ? (e) => JSON.stringify(e) : "Deno" in globalThis && "inspect" in globalThis.Deno && typeof globalThis.Deno.inspect == "function" ? (e, t) => globalThis.Deno.inspect(e, {
  strAbbreviateSize: 1 / 0,
  iterableLimit: 1 / 0,
  ...t
}) : Ip != null && typeof wi == "function" ? (e, t) => wi(e, {
  ...t
}) : (e) => JSON.stringify(e);
function te(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function yt(e) {
  return e < 10 ? `00${e}` : e < 100 ? `0${e}` : `${e}`;
}
const Or = {
  "date-time-timezone": (e) => {
    const t = new Date(e), r = t.getUTCFullYear(), n = te(t.getUTCMonth() + 1), i = te(t.getUTCDate()), a = te(t.getUTCHours()), o = te(t.getUTCMinutes()), s = te(t.getUTCSeconds()), u = yt(t.getUTCMilliseconds());
    return `${r}-${n}-${i} ${a}:${o}:${s}.${u} +00:00`;
  },
  "date-time-tz": (e) => {
    const t = new Date(e), r = t.getUTCFullYear(), n = te(t.getUTCMonth() + 1), i = te(t.getUTCDate()), a = te(t.getUTCHours()), o = te(t.getUTCMinutes()), s = te(t.getUTCSeconds()), u = yt(t.getUTCMilliseconds());
    return `${r}-${n}-${i} ${a}:${o}:${s}.${u} +00`;
  },
  "date-time": (e) => {
    const t = new Date(e), r = t.getUTCFullYear(), n = te(t.getUTCMonth() + 1), i = te(t.getUTCDate()), a = te(t.getUTCHours()), o = te(t.getUTCMinutes()), s = te(t.getUTCSeconds()), u = yt(t.getUTCMilliseconds());
    return `${r}-${n}-${i} ${a}:${o}:${s}.${u}`;
  },
  "time-timezone": (e) => {
    const t = new Date(e), r = te(t.getUTCHours()), n = te(t.getUTCMinutes()), i = te(t.getUTCSeconds()), a = yt(t.getUTCMilliseconds());
    return `${r}:${n}:${i}.${a} +00:00`;
  },
  "time-tz": (e) => {
    const t = new Date(e), r = te(t.getUTCHours()), n = te(t.getUTCMinutes()), i = te(t.getUTCSeconds()), a = yt(t.getUTCMilliseconds());
    return `${r}:${n}:${i}.${a} +00`;
  },
  time: (e) => {
    const t = new Date(e), r = te(t.getUTCHours()), n = te(t.getUTCMinutes()), i = te(t.getUTCSeconds()), a = yt(t.getUTCMilliseconds());
    return `${r}:${n}:${i}.${a}`;
  },
  date: (e) => {
    const t = new Date(e), r = t.getUTCFullYear(), n = te(t.getUTCMonth() + 1), i = te(t.getUTCDate());
    return `${r}-${n}-${i}`;
  },
  rfc3339: (e) => new Date(e).toISOString(),
  none: () => null
}, vt = {
  ABBR: ju,
  abbr: {
    trace: "trc",
    debug: "dbg",
    info: "inf",
    warning: "wrn",
    error: "err",
    fatal: "ftl"
  },
  FULL: {
    trace: "TRACE",
    debug: "DEBUG",
    info: "INFO",
    warning: "WARNING",
    error: "ERROR",
    fatal: "FATAL"
  },
  full: {
    trace: "trace",
    debug: "debug",
    info: "info",
    warning: "warning",
    error: "error",
    fatal: "fatal"
  },
  L: {
    trace: "T",
    debug: "D",
    info: "I",
    warning: "W",
    error: "E",
    fatal: "F"
  },
  l: {
    trace: "t",
    debug: "d",
    info: "i",
    warning: "w",
    error: "e",
    fatal: "f"
  }
};
function qu(e) {
  return e === "crlf" ? `\r
` : `
`;
}
function kr(e, t) {
  if (!(t instanceof Error)) return t;
  const r = {
    name: t.name,
    message: t.message
  };
  typeof t.stack == "string" && (r.stack = t.stack);
  const n = t.cause;
  n !== void 0 && (r.cause = n), typeof AggregateError < "u" && t instanceof AggregateError && (r.errors = t.errors);
  for (const i of Object.keys(t)) i in r || (r[i] = t[i]);
  return r;
}
function Uu(e = {}) {
  const t = (() => {
    const s = e.timestamp;
    return s == null ? Or["date-time-timezone"] : s === "disabled" ? Or.none : typeof s == "string" && s in Or ? Or[s] : s;
  })(), r = e.category ?? "·", n = e.value ? (s) => e.value(s, Io) : Io, i = (() => {
    const s = e.level;
    return s == null || s === "ABBR" ? (u) => vt.ABBR[u] : s === "abbr" ? (u) => vt.abbr[u] : s === "FULL" ? (u) => vt.FULL[u] : s === "full" ? (u) => vt.full[u] : s === "L" ? (u) => vt.L[u] : s === "l" ? (u) => vt.l[u] : s;
  })(), a = qu(e.lineEnding), o = e.format ?? (({ timestamp: s, level: u, category: c, message: l }) => `${s ? `${s} ` : ""}[${u}] ${c}: ${l}`);
  return (s) => {
    const u = s.message, c = u.length;
    let l;
    if (c === 1) l = u[0];
    else if (c <= 6) {
      l = "";
      for (let m = 0; m < c; m++) l += m % 2 === 0 ? u[m] : n(u[m]);
    } else {
      const m = new Array(c);
      for (let v = 0; v < c; v++) m[v] = v % 2 === 0 ? u[v] : n(u[v]);
      l = m.join("");
    }
    const d = t(s.timestamp), f = i(s.level), p = typeof r == "function" ? r(s.category) : s.category.join(r);
    return `${o({
      timestamp: d,
      level: f,
      category: p,
      message: l,
      record: s
    })}${a}`;
  };
}
Uu();
const $n = "\x1B[0m", Pn = {
  black: "\x1B[30m",
  red: "\x1B[31m",
  green: "\x1B[32m",
  yellow: "\x1B[33m",
  blue: "\x1B[34m",
  magenta: "\x1B[35m",
  cyan: "\x1B[36m",
  white: "\x1B[37m"
}, Nn = {
  bold: "\x1B[1m",
  dim: "\x1B[2m",
  italic: "\x1B[3m",
  underline: "\x1B[4m",
  strikethrough: "\x1B[9m"
}, Op = {
  trace: null,
  debug: "blue",
  info: "green",
  warning: "yellow",
  error: "red",
  fatal: "magenta"
};
function kp(e = {}) {
  const t = e.format, r = typeof e.timestampStyle > "u" ? "dim" : e.timestampStyle, n = e.timestampColor ?? null, i = `${r == null ? "" : Nn[r]}${n == null ? "" : Pn[n]}`, a = r == null && n == null ? "" : $n, o = typeof e.levelStyle > "u" ? "bold" : e.levelStyle, s = e.levelColors ?? Op, u = typeof e.categoryStyle > "u" ? "dim" : e.categoryStyle, c = e.categoryColor ?? null, l = `${u == null ? "" : Nn[u]}${c == null ? "" : Pn[c]}`, d = u == null && c == null ? "" : $n;
  return Uu({
    timestamp: "date-time-tz",
    value(f, p) {
      return p(f, { colors: !0 });
    },
    ...e,
    format({ timestamp: f, level: p, category: y, message: m, record: v }) {
      const g = s[v.level];
      return f = f == null ? null : `${i}${f}${a}`, p = `${o == null ? "" : Nn[o]}${g == null ? "" : Pn[g]}${p}${o == null && g == null ? "" : $n}`, t == null ? `${f == null ? "" : `${f} `}${p} ${l}${y}:${d} ${m}` : t({
        timestamp: f,
        level: p,
        category: `${l}${y}${d}`,
        message: m,
        record: v
      });
    }
  });
}
kp();
function xp(e = {}) {
  const t = qu(e.lineEnding);
  if (!e.categorySeparator && !e.message && !e.properties) return (s) => {
    if (s.message.length === 3) return JSON.stringify({
      "@timestamp": new Date(s.timestamp).toISOString(),
      level: s.level === "warning" ? "WARN" : s.level.toUpperCase(),
      message: s.message[0] + JSON.stringify(s.message[1]) + s.message[2],
      logger: s.category.join("."),
      properties: s.properties
    }, kr) + t;
    if (s.message.length === 1) return JSON.stringify({
      "@timestamp": new Date(s.timestamp).toISOString(),
      level: s.level === "warning" ? "WARN" : s.level.toUpperCase(),
      message: s.message[0],
      logger: s.category.join("."),
      properties: s.properties
    }, kr) + t;
    let u = s.message[0];
    for (let c = 1; c < s.message.length; c++) u += c & 1 ? JSON.stringify(s.message[c]) : s.message[c];
    return JSON.stringify({
      "@timestamp": new Date(s.timestamp).toISOString(),
      level: s.level === "warning" ? "WARN" : s.level.toUpperCase(),
      message: u,
      logger: s.category.join("."),
      properties: s.properties
    }, kr) + t;
  };
  const r = e.message === "template", n = e.properties ?? "nest:properties";
  let i;
  if (typeof e.categorySeparator == "function") i = e.categorySeparator;
  else {
    const s = e.categorySeparator ?? ".";
    i = (u) => u.join(s);
  }
  let a;
  if (n === "flatten") a = (s) => s;
  else if (n.startsWith("prepend:")) {
    const s = n.substring(8);
    if (s === "") throw new TypeError(`Invalid properties option: ${JSON.stringify(n)}. It must be of the form "prepend:<prefix>" where <prefix> is a non-empty string.`);
    a = (u) => {
      const c = {};
      for (const l in u) c[`${s}${l}`] = u[l];
      return c;
    };
  } else if (n.startsWith("nest:")) {
    const s = n.substring(5);
    a = (u) => ({ [s]: u });
  } else throw new TypeError(`Invalid properties option: ${JSON.stringify(n)}. It must be "flatten", "prepend:<prefix>", or "nest:<key>".`);
  let o;
  return r ? o = (s) => {
    if (typeof s.rawMessage == "string") return s.rawMessage;
    let u = "";
    for (let c = 0; c < s.rawMessage.length; c++) u += c % 2 < 1 ? s.rawMessage[c] : "{}";
    return u;
  } : o = (s) => {
    const u = s.message.length;
    if (u === 1) return s.message[0];
    let c = "";
    for (let l = 0; l < u; l++) c += l % 2 < 1 ? s.message[l] : JSON.stringify(s.message[l]);
    return c;
  }, (s) => JSON.stringify({
    "@timestamp": new Date(s.timestamp).toISOString(),
    level: s.level === "warning" ? "WARN" : s.level.toUpperCase(),
    message: o(s),
    logger: i(s.category),
    ...a(s.properties)
  }, kr) + t;
}
xp();
const Fp = {
  trace: "background-color: gray; color: white;",
  debug: "background-color: gray; color: white;",
  info: "background-color: white; color: black;",
  warning: "background-color: orange; color: black;",
  error: "background-color: red; color: white;",
  fatal: "background-color: maroon; color: white;"
};
function Cp(e) {
  let t = "";
  const r = [];
  for (let a = 0; a < e.message.length; a++) a % 2 === 0 ? t += e.message[a] : (t += "%o", r.push(e.message[a]));
  const n = new Date(e.timestamp);
  return [
    `%c${`${n.getUTCHours().toString().padStart(2, "0")}:${n.getUTCMinutes().toString().padStart(2, "0")}:${n.getUTCSeconds().toString().padStart(2, "0")}.${n.getUTCMilliseconds().toString().padStart(3, "0")}`} %c${ju[e.level]}%c %c${e.category.join("·")} %c${t}`,
    "color: gray;",
    Fp[e.level],
    "background-color: default;",
    "color: gray;",
    "color: default;",
    ...r
  ];
}
function Ap(e = {}) {
  const t = e.formatter ?? Cp, r = {
    trace: "debug",
    debug: "debug",
    info: "info",
    warning: "warn",
    error: "error",
    fatal: "error",
    ...e.levelMap ?? {}
  }, n = e.console ?? globalThis.console, i = (g) => {
    const b = t(g), E = r[g.level];
    if (E === void 0) throw new TypeError(`Invalid log level: ${g.level}.`);
    if (typeof b == "string") {
      const D = b.replace(/\r?\n$/, "");
      n[E](D);
    } else n[E](...b);
  };
  if (!e.nonBlocking) return i;
  const a = e.nonBlocking === !0 ? {} : e.nonBlocking, o = a.bufferSize ?? 100, s = a.flushInterval ?? 100, u = [];
  let c = null, l = !1, d = !1;
  const f = o * 2;
  function p() {
    if (u.length === 0) return;
    const g = u.splice(0);
    for (const b of g) try {
      i(b);
    } catch {
    }
  }
  function y() {
    d || (d = !0, setTimeout(() => {
      d = !1, p();
    }, 0));
  }
  function m() {
    c !== null || l || (c = setInterval(() => {
      p();
    }, s));
  }
  const v = (g) => {
    l || (u.length >= f && u.shift(), u.push(g), u.length >= o ? y() : c === null && m());
  };
  return v[Symbol.dispose] = () => {
    l = !0, c !== null && (clearInterval(c), c = null), p();
  }, v;
}
Ap();
const $p = "warning";
var Ti = function(e, t) {
  return Ti = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Ti(e, t);
};
function Ee(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ti(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var _ = function() {
  return _ = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, _.apply(this, arguments);
};
function Ae(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function Be(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function s(l) {
      try {
        c(n.next(l));
      } catch (d) {
        o(d);
      }
    }
    function u(l) {
      try {
        c(n.throw(l));
      } catch (d) {
        o(d);
      }
    }
    function c(l) {
      l.done ? a(l.value) : i(l.value).then(s, u);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function Ge(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(c) {
    return function(l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (r = 0)), r; ) try {
      if (n = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done) return a;
      switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
        case 0:
        case 1:
          a = c;
          break;
        case 4:
          return r.label++, { value: c[1], done: !1 };
        case 5:
          r.label++, i = c[1], c = [0];
          continue;
        case 7:
          c = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            r = 0;
            continue;
          }
          if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
            r.label = c[1];
            break;
          }
          if (c[0] === 6 && r.label < a[1]) {
            r.label = a[1], a = c;
            break;
          }
          if (a && r.label < a[2]) {
            r.label = a[2], r.ops.push(c);
            break;
          }
          a[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      c = t.call(e, r);
    } catch (l) {
      c = [6, l], i = 0;
    } finally {
      n = a = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function ge(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, a; n < i; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Rn = "Invariant Violation", Oo = Object.setPrototypeOf, Pp = Oo === void 0 ? function(e, t) {
  return e.__proto__ = t, e;
} : Oo, Vu = (
  /** @class */
  (function(e) {
    Ee(t, e);
    function t(r) {
      r === void 0 && (r = Rn);
      var n = e.call(this, typeof r == "number" ? Rn + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
      return n.framesToPop = 1, n.name = Rn, Pp(n, t.prototype), n;
    }
    return t;
  })(Error)
);
function ut(e, t) {
  if (!e)
    throw new Vu(t);
}
var Bu = ["debug", "log", "warn", "error", "silent"], Np = Bu.indexOf("log");
function xr(e) {
  return function() {
    if (Bu.indexOf(e) >= Np) {
      var t = console[e] || console.log;
      return t.apply(console, arguments);
    }
  };
}
(function(e) {
  e.debug = xr("debug"), e.log = xr("log"), e.warn = xr("warn"), e.error = xr("error");
})(ut || (ut = {}));
var ua = "3.13.9";
function we(e) {
  try {
    return e();
  } catch {
  }
}
const Ii = we(function() {
  return globalThis;
}) || we(function() {
  return window;
}) || we(function() {
  return self;
}) || we(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
we(function() {
  return we.constructor("return this")();
});
var ko = /* @__PURE__ */ new Map();
function Oi(e) {
  var t = ko.get(e) || 1;
  return ko.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2));
}
function Gu(e, t) {
  t === void 0 && (t = 0);
  var r = Oi("stringifyForDisplay");
  return JSON.stringify(e, function(n, i) {
    return i === void 0 ? r : i;
  }, t).split(JSON.stringify(r)).join("<undefined>");
}
function Fr(e) {
  return function(t) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    if (typeof t == "number") {
      var i = t;
      t = ca(i), t || (t = la(i, r), r = []);
    }
    e.apply(void 0, [t].concat(r));
  };
}
var $ = Object.assign(function(t, r) {
  for (var n = [], i = 2; i < arguments.length; i++)
    n[i - 2] = arguments[i];
  t || ut(t, ca(r, n) || la(r, n));
}, {
  debug: Fr(ut.debug),
  log: Fr(ut.log),
  warn: Fr(ut.warn),
  error: Fr(ut.error)
});
function ve(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return new Vu(ca(e, t) || la(e, t));
}
var xo = Symbol.for("ApolloErrorMessageHandler_" + ua);
function zu(e) {
  if (typeof e == "string")
    return e;
  try {
    return Gu(e, 2).slice(0, 1e3);
  } catch {
    return "<non-serializable>";
  }
}
function ca(e, t) {
  if (t === void 0 && (t = []), !!e)
    return Ii[xo] && Ii[xo](e, t.map(zu));
}
function la(e, t) {
  if (t === void 0 && (t = []), !!e)
    return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
      version: ua,
      message: e,
      args: t.map(zu)
    })));
}
function Nr(e, t) {
  if (!!!e)
    throw new Error(t);
}
function Rp(e) {
  return typeof e == "object" && e !== null;
}
function Mp(e, t) {
  if (!!!e)
    throw new Error(
      "Unexpected invariant triggered."
    );
}
const Lp = /\r\n|[\n\r]/g;
function ki(e, t) {
  let r = 0, n = 1;
  for (const i of e.body.matchAll(Lp)) {
    if (typeof i.index == "number" || Mp(!1), i.index >= t)
      break;
    r = i.index + i[0].length, n += 1;
  }
  return {
    line: n,
    column: t + 1 - r
  };
}
function jp(e) {
  return Qu(
    e.source,
    ki(e.source, e.start)
  );
}
function Qu(e, t) {
  const r = e.locationOffset.column - 1, n = "".padStart(r) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, o = t.line + a, s = t.line === 1 ? r : 0, u = t.column + s, c = `${e.name}:${o}:${u}
`, l = n.split(/\r\n|[\n\r]/g), d = l[i];
  if (d.length > 120) {
    const f = Math.floor(u / 80), p = u % 80, y = [];
    for (let m = 0; m < d.length; m += 80)
      y.push(d.slice(m, m + 80));
    return c + Fo([
      [`${o} |`, y[0]],
      ...y.slice(1, f + 1).map((m) => ["|", m]),
      ["|", "^".padStart(p)],
      ["|", y[f + 1]]
    ]);
  }
  return c + Fo([
    // Lines specified like this: ["prefix", "string"],
    [`${o - 1} |`, l[i - 1]],
    [`${o} |`, d],
    ["|", "^".padStart(u)],
    [`${o + 1} |`, l[i + 1]]
  ]);
}
function Fo(e) {
  const t = e.filter(([n, i]) => i !== void 0), r = Math.max(...t.map(([n]) => n.length));
  return t.map(([n, i]) => n.padStart(r) + (i ? " " + i : "")).join(`
`);
}
function qp(e) {
  const t = e[0];
  return t == null || "kind" in t || "length" in t ? {
    nodes: t,
    source: e[1],
    positions: e[2],
    path: e[3],
    originalError: e[4],
    extensions: e[5]
  } : t;
}
class fa extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  /**
   * The original error thrown from a field resolver during execution.
   */
  /**
   * Extension fields to add to the formatted error.
   */
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(t, ...r) {
    var n, i, a;
    const { nodes: o, source: s, positions: u, path: c, originalError: l, extensions: d } = qp(r);
    super(t), this.name = "GraphQLError", this.path = c ?? void 0, this.originalError = l ?? void 0, this.nodes = Co(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const f = Co(
      (n = this.nodes) === null || n === void 0 ? void 0 : n.map((y) => y.loc).filter((y) => y != null)
    );
    this.source = s ?? (f == null || (i = f[0]) === null || i === void 0 ? void 0 : i.source), this.positions = u ?? f?.map((y) => y.start), this.locations = u && s ? u.map((y) => ki(s, y)) : f?.map((y) => ki(y.source, y.start));
    const p = Rp(
      l?.extensions
    ) ? l?.extensions : void 0;
    this.extensions = (a = d ?? p) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
      message: {
        writable: !0,
        enumerable: !0
      },
      name: {
        enumerable: !1
      },
      nodes: {
        enumerable: !1
      },
      source: {
        enumerable: !1
      },
      positions: {
        enumerable: !1
      },
      originalError: {
        enumerable: !1
      }
    }), l != null && l.stack ? Object.defineProperty(this, "stack", {
      value: l.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, fa) : Object.defineProperty(this, "stack", {
      value: Error().stack,
      writable: !0,
      configurable: !0
    });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let t = this.message;
    if (this.nodes)
      for (const r of this.nodes)
        r.loc && (t += `

` + jp(r.loc));
    else if (this.source && this.locations)
      for (const r of this.locations)
        t += `

` + Qu(this.source, r);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function Co(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
function fe(e, t, r) {
  return new fa(`Syntax Error: ${r}`, {
    source: e,
    positions: [t]
  });
}
class Up {
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The Token at which this Node begins.
   */
  /**
   * The Token at which this Node ends.
   */
  /**
   * The Source document the AST represents.
   */
  constructor(t, r, n) {
    this.start = t.start, this.end = r.end, this.startToken = t, this.endToken = r, this.source = n;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
}
class Wu {
  /**
   * The kind of Token.
   */
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The 1-indexed line number on which this Token appears.
   */
  /**
   * The 1-indexed column number at which this Token begins.
   */
  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(t, r, n, i, a, o) {
    this.kind = t, this.start = r, this.end = n, this.line = i, this.column = a, this.value = o, this.prev = null, this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
}
const Hu = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
}, Vp = new Set(Object.keys(Hu));
function Ao(e) {
  const t = e?.kind;
  return typeof t == "string" && Vp.has(t);
}
var Et;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(Et || (Et = {}));
var xi;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(xi || (xi = {}));
var C;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(C || (C = {}));
function Fi(e) {
  return e === 9 || e === 32;
}
function hr(e) {
  return e >= 48 && e <= 57;
}
function Yu(e) {
  return e >= 97 && e <= 122 || // A-Z
  e >= 65 && e <= 90;
}
function Ju(e) {
  return Yu(e) || e === 95;
}
function Bp(e) {
  return Yu(e) || hr(e) || e === 95;
}
function Gp(e) {
  var t;
  let r = Number.MAX_SAFE_INTEGER, n = null, i = -1;
  for (let o = 0; o < e.length; ++o) {
    var a;
    const s = e[o], u = zp(s);
    u !== s.length && (n = (a = n) !== null && a !== void 0 ? a : o, i = o, o !== 0 && u < r && (r = u));
  }
  return e.map((o, s) => s === 0 ? o : o.slice(r)).slice(
    (t = n) !== null && t !== void 0 ? t : 0,
    i + 1
  );
}
function zp(e) {
  let t = 0;
  for (; t < e.length && Fi(e.charCodeAt(t)); )
    ++t;
  return t;
}
function Qp(e, t) {
  const r = e.replace(/"""/g, '\\"""'), n = r.split(/\r\n|[\n\r]/g), i = n.length === 1, a = n.length > 1 && n.slice(1).every((p) => p.length === 0 || Fi(p.charCodeAt(0))), o = r.endsWith('\\"""'), s = e.endsWith('"') && !o, u = e.endsWith("\\"), c = s || u, l = (
    // add leading and trailing new lines only if it improves readability
    !i || e.length > 70 || c || a || o
  );
  let d = "";
  const f = i && Fi(e.charCodeAt(0));
  return (l && !f || a) && (d += `
`), d += r, (l || c) && (d += `
`), '"""' + d + '"""';
}
var T;
(function(e) {
  e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
})(T || (T = {}));
class Wp {
  /**
   * The previously focused non-ignored token.
   */
  /**
   * The currently focused non-ignored token.
   */
  /**
   * The (1-indexed) line containing the current token.
   */
  /**
   * The character offset at which the current line begins.
   */
  constructor(t) {
    const r = new Wu(T.SOF, 0, 0, 0, 0);
    this.source = t, this.lastToken = r, this.token = r, this.line = 1, this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance() {
    return this.lastToken = this.token, this.token = this.lookahead();
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  lookahead() {
    let t = this.token;
    if (t.kind !== T.EOF)
      do
        if (t.next)
          t = t.next;
        else {
          const r = Yp(this, t.end);
          t.next = r, r.prev = t, t = r;
        }
      while (t.kind === T.COMMENT);
    return t;
  }
}
function Hp(e) {
  return e === T.BANG || e === T.DOLLAR || e === T.AMP || e === T.PAREN_L || e === T.PAREN_R || e === T.SPREAD || e === T.COLON || e === T.EQUALS || e === T.AT || e === T.BRACKET_L || e === T.BRACKET_R || e === T.BRACE_L || e === T.PIPE || e === T.BRACE_R;
}
function Lt(e) {
  return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
}
function nn(e, t) {
  return Ku(e.charCodeAt(t)) && Xu(e.charCodeAt(t + 1));
}
function Ku(e) {
  return e >= 55296 && e <= 56319;
}
function Xu(e) {
  return e >= 56320 && e <= 57343;
}
function dt(e, t) {
  const r = e.source.body.codePointAt(t);
  if (r === void 0)
    return T.EOF;
  if (r >= 32 && r <= 126) {
    const n = String.fromCodePoint(r);
    return n === '"' ? `'"'` : `"${n}"`;
  }
  return "U+" + r.toString(16).toUpperCase().padStart(4, "0");
}
function ue(e, t, r, n, i) {
  const a = e.line, o = 1 + r - e.lineStart;
  return new Wu(t, r, n, a, o, i);
}
function Yp(e, t) {
  const r = e.source.body, n = r.length;
  let i = t;
  for (; i < n; ) {
    const a = r.charCodeAt(i);
    switch (a) {
      // Ignored ::
      //   - UnicodeBOM
      //   - WhiteSpace
      //   - LineTerminator
      //   - Comment
      //   - Comma
      //
      // UnicodeBOM :: "Byte Order Mark (U+FEFF)"
      //
      // WhiteSpace ::
      //   - "Horizontal Tab (U+0009)"
      //   - "Space (U+0020)"
      //
      // Comma :: ,
      case 65279:
      // <BOM>
      case 9:
      // \t
      case 32:
      // <space>
      case 44:
        ++i;
        continue;
      // LineTerminator ::
      //   - "New Line (U+000A)"
      //   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
      //   - "Carriage Return (U+000D)" "New Line (U+000A)"
      case 10:
        ++i, ++e.line, e.lineStart = i;
        continue;
      case 13:
        r.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++e.line, e.lineStart = i;
        continue;
      // Comment
      case 35:
        return Jp(e, i);
      // Token ::
      //   - Punctuator
      //   - Name
      //   - IntValue
      //   - FloatValue
      //   - StringValue
      //
      // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }
      case 33:
        return ue(e, T.BANG, i, i + 1);
      case 36:
        return ue(e, T.DOLLAR, i, i + 1);
      case 38:
        return ue(e, T.AMP, i, i + 1);
      case 40:
        return ue(e, T.PAREN_L, i, i + 1);
      case 41:
        return ue(e, T.PAREN_R, i, i + 1);
      case 46:
        if (r.charCodeAt(i + 1) === 46 && r.charCodeAt(i + 2) === 46)
          return ue(e, T.SPREAD, i, i + 3);
        break;
      case 58:
        return ue(e, T.COLON, i, i + 1);
      case 61:
        return ue(e, T.EQUALS, i, i + 1);
      case 64:
        return ue(e, T.AT, i, i + 1);
      case 91:
        return ue(e, T.BRACKET_L, i, i + 1);
      case 93:
        return ue(e, T.BRACKET_R, i, i + 1);
      case 123:
        return ue(e, T.BRACE_L, i, i + 1);
      case 124:
        return ue(e, T.PIPE, i, i + 1);
      case 125:
        return ue(e, T.BRACE_R, i, i + 1);
      // StringValue
      case 34:
        return r.charCodeAt(i + 1) === 34 && r.charCodeAt(i + 2) === 34 ? rh(e, i) : Xp(e, i);
    }
    if (hr(a) || a === 45)
      return Kp(e, i, a);
    if (Ju(a))
      return nh(e, i);
    throw fe(
      e.source,
      i,
      a === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : Lt(a) || nn(r, i) ? `Unexpected character: ${dt(e, i)}.` : `Invalid character: ${dt(e, i)}.`
    );
  }
  return ue(e, T.EOF, n, n);
}
function Jp(e, t) {
  const r = e.source.body, n = r.length;
  let i = t + 1;
  for (; i < n; ) {
    const a = r.charCodeAt(i);
    if (a === 10 || a === 13)
      break;
    if (Lt(a))
      ++i;
    else if (nn(r, i))
      i += 2;
    else
      break;
  }
  return ue(
    e,
    T.COMMENT,
    t,
    i,
    r.slice(t + 1, i)
  );
}
function Kp(e, t, r) {
  const n = e.source.body;
  let i = t, a = r, o = !1;
  if (a === 45 && (a = n.charCodeAt(++i)), a === 48) {
    if (a = n.charCodeAt(++i), hr(a))
      throw fe(
        e.source,
        i,
        `Invalid number, unexpected digit after 0: ${dt(
          e,
          i
        )}.`
      );
  } else
    i = Mn(e, i, a), a = n.charCodeAt(i);
  if (a === 46 && (o = !0, a = n.charCodeAt(++i), i = Mn(e, i, a), a = n.charCodeAt(i)), (a === 69 || a === 101) && (o = !0, a = n.charCodeAt(++i), (a === 43 || a === 45) && (a = n.charCodeAt(++i)), i = Mn(e, i, a), a = n.charCodeAt(i)), a === 46 || Ju(a))
    throw fe(
      e.source,
      i,
      `Invalid number, expected digit but got: ${dt(
        e,
        i
      )}.`
    );
  return ue(
    e,
    o ? T.FLOAT : T.INT,
    t,
    i,
    n.slice(t, i)
  );
}
function Mn(e, t, r) {
  if (!hr(r))
    throw fe(
      e.source,
      t,
      `Invalid number, expected digit but got: ${dt(
        e,
        t
      )}.`
    );
  const n = e.source.body;
  let i = t + 1;
  for (; hr(n.charCodeAt(i)); )
    ++i;
  return i;
}
function Xp(e, t) {
  const r = e.source.body, n = r.length;
  let i = t + 1, a = i, o = "";
  for (; i < n; ) {
    const s = r.charCodeAt(i);
    if (s === 34)
      return o += r.slice(a, i), ue(e, T.STRING, t, i + 1, o);
    if (s === 92) {
      o += r.slice(a, i);
      const u = r.charCodeAt(i + 1) === 117 ? r.charCodeAt(i + 2) === 123 ? Zp(e, i) : eh(e, i) : th(e, i);
      o += u.value, i += u.size, a = i;
      continue;
    }
    if (s === 10 || s === 13)
      break;
    if (Lt(s))
      ++i;
    else if (nn(r, i))
      i += 2;
    else
      throw fe(
        e.source,
        i,
        `Invalid character within String: ${dt(
          e,
          i
        )}.`
      );
  }
  throw fe(e.source, i, "Unterminated string.");
}
function Zp(e, t) {
  const r = e.source.body;
  let n = 0, i = 3;
  for (; i < 12; ) {
    const a = r.charCodeAt(t + i++);
    if (a === 125) {
      if (i < 5 || !Lt(n))
        break;
      return {
        value: String.fromCodePoint(n),
        size: i
      };
    }
    if (n = n << 4 | rr(a), n < 0)
      break;
  }
  throw fe(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${r.slice(
      t,
      t + i
    )}".`
  );
}
function eh(e, t) {
  const r = e.source.body, n = $o(r, t + 2);
  if (Lt(n))
    return {
      value: String.fromCodePoint(n),
      size: 6
    };
  if (Ku(n) && r.charCodeAt(t + 6) === 92 && r.charCodeAt(t + 7) === 117) {
    const i = $o(r, t + 8);
    if (Xu(i))
      return {
        value: String.fromCodePoint(n, i),
        size: 12
      };
  }
  throw fe(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${r.slice(t, t + 6)}".`
  );
}
function $o(e, t) {
  return rr(e.charCodeAt(t)) << 12 | rr(e.charCodeAt(t + 1)) << 8 | rr(e.charCodeAt(t + 2)) << 4 | rr(e.charCodeAt(t + 3));
}
function rr(e) {
  return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function th(e, t) {
  const r = e.source.body;
  switch (r.charCodeAt(t + 1)) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: `
`,
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw fe(
    e.source,
    t,
    `Invalid character escape sequence: "${r.slice(
      t,
      t + 2
    )}".`
  );
}
function rh(e, t) {
  const r = e.source.body, n = r.length;
  let i = e.lineStart, a = t + 3, o = a, s = "";
  const u = [];
  for (; a < n; ) {
    const c = r.charCodeAt(a);
    if (c === 34 && r.charCodeAt(a + 1) === 34 && r.charCodeAt(a + 2) === 34) {
      s += r.slice(o, a), u.push(s);
      const l = ue(
        e,
        T.BLOCK_STRING,
        t,
        a + 3,
        // Return a string of the lines joined with U+000A.
        Gp(u).join(`
`)
      );
      return e.line += u.length - 1, e.lineStart = i, l;
    }
    if (c === 92 && r.charCodeAt(a + 1) === 34 && r.charCodeAt(a + 2) === 34 && r.charCodeAt(a + 3) === 34) {
      s += r.slice(o, a), o = a + 1, a += 4;
      continue;
    }
    if (c === 10 || c === 13) {
      s += r.slice(o, a), u.push(s), c === 13 && r.charCodeAt(a + 1) === 10 ? a += 2 : ++a, s = "", o = a, i = a;
      continue;
    }
    if (Lt(c))
      ++a;
    else if (nn(r, a))
      a += 2;
    else
      throw fe(
        e.source,
        a,
        `Invalid character within String: ${dt(
          e,
          a
        )}.`
      );
  }
  throw fe(e.source, a, "Unterminated string.");
}
function nh(e, t) {
  const r = e.source.body, n = r.length;
  let i = t + 1;
  for (; i < n; ) {
    const a = r.charCodeAt(i);
    if (Bp(a))
      ++i;
    else
      break;
  }
  return ue(
    e,
    T.NAME,
    t,
    i,
    r.slice(t, i)
  );
}
const ih = 10, Zu = 2;
function da(e) {
  return an(e, []);
}
function an(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return ah(e, t);
    default:
      return String(e);
  }
}
function ah(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const r = [...t, e];
  if (oh(e)) {
    const n = e.toJSON();
    if (n !== e)
      return typeof n == "string" ? n : an(n, r);
  } else if (Array.isArray(e))
    return uh(e, r);
  return sh(e, r);
}
function oh(e) {
  return typeof e.toJSON == "function";
}
function sh(e, t) {
  const r = Object.entries(e);
  return r.length === 0 ? "{}" : t.length > Zu ? "[" + ch(e) + "]" : "{ " + r.map(
    ([i, a]) => i + ": " + an(a, t)
  ).join(", ") + " }";
}
function uh(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > Zu)
    return "[Array]";
  const r = Math.min(ih, e.length), n = e.length - r, i = [];
  for (let a = 0; a < r; ++a)
    i.push(an(e[a], t));
  return n === 1 ? i.push("... 1 more item") : n > 1 && i.push(`... ${n} more items`), "[" + i.join(", ") + "]";
}
function ch(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const r = e.constructor.name;
    if (typeof r == "string" && r !== "")
      return r;
  }
  return t;
}
const lh = globalThis.process && // eslint-disable-next-line no-undef
!0, fh = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  lh ? function(t, r) {
    return t instanceof r;
  } : function(t, r) {
    if (t instanceof r)
      return !0;
    if (typeof t == "object" && t !== null) {
      var n;
      const i = r.prototype[Symbol.toStringTag], a = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in t ? t[Symbol.toStringTag] : (n = t.constructor) === null || n === void 0 ? void 0 : n.name
      );
      if (i === a) {
        const o = da(t);
        throw new Error(`Cannot use ${i} "${o}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return !1;
  }
);
class ec {
  constructor(t, r = "GraphQL request", n = {
    line: 1,
    column: 1
  }) {
    typeof t == "string" || Nr(!1, `Body must be a string. Received: ${da(t)}.`), this.body = t, this.name = r, this.locationOffset = n, this.locationOffset.line > 0 || Nr(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || Nr(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function dh(e) {
  return fh(e, ec);
}
function ph(e, t) {
  const r = new hh(e, t), n = r.parseDocument();
  return Object.defineProperty(n, "tokenCount", {
    enumerable: !1,
    value: r.tokenCount
  }), n;
}
class hh {
  constructor(t, r = {}) {
    const n = dh(t) ? t : new ec(t);
    this._lexer = new Wp(n), this._options = r, this._tokenCounter = 0;
  }
  get tokenCount() {
    return this._tokenCounter;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const t = this.expectToken(T.NAME);
    return this.node(t, {
      kind: C.NAME,
      value: t.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: C.DOCUMENT,
      definitions: this.many(
        T.SOF,
        this.parseDefinition,
        T.EOF
      )
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  parseDefinition() {
    if (this.peek(T.BRACE_L))
      return this.parseOperationDefinition();
    const t = this.peekDescription(), r = t ? this._lexer.lookahead() : this._lexer.token;
    if (r.kind === T.NAME) {
      switch (r.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (t)
        throw fe(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      switch (r.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(r);
  }
  // Implements the parsing rules in the Operations section.
  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  parseOperationDefinition() {
    const t = this._lexer.token;
    if (this.peek(T.BRACE_L))
      return this.node(t, {
        kind: C.OPERATION_DEFINITION,
        operation: Et.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    const r = this.parseOperationType();
    let n;
    return this.peek(T.NAME) && (n = this.parseName()), this.node(t, {
      kind: C.OPERATION_DEFINITION,
      operation: r,
      name: n,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType() {
    const t = this.expectToken(T.NAME);
    switch (t.value) {
      case "query":
        return Et.QUERY;
      case "mutation":
        return Et.MUTATION;
      case "subscription":
        return Et.SUBSCRIPTION;
    }
    throw this.unexpected(t);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      T.PAREN_L,
      this.parseVariableDefinition,
      T.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: C.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(T.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(T.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const t = this._lexer.token;
    return this.expectToken(T.DOLLAR), this.node(t, {
      kind: C.VARIABLE,
      name: this.parseName()
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: C.SELECTION_SET,
      selections: this.many(
        T.BRACE_L,
        this.parseSelection,
        T.BRACE_R
      )
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  parseSelection() {
    return this.peek(T.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const t = this._lexer.token, r = this.parseName();
    let n, i;
    return this.expectOptionalToken(T.COLON) ? (n = r, i = this.parseName()) : i = r, this.node(t, {
      kind: C.FIELD,
      alias: n,
      name: i,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek(T.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(t) {
    const r = t ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(T.PAREN_L, r, T.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(t = !1) {
    const r = this._lexer.token, n = this.parseName();
    return this.expectToken(T.COLON), this.node(r, {
      kind: C.ARGUMENT,
      name: n,
      value: this.parseValueLiteral(t)
    });
  }
  parseConstArgument() {
    return this.parseArgument(!0);
  }
  // Implements the parsing rules in the Fragments section.
  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  parseFragment() {
    const t = this._lexer.token;
    this.expectToken(T.SPREAD);
    const r = this.expectOptionalKeyword("on");
    return !r && this.peek(T.NAME) ? this.node(t, {
      kind: C.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1)
    }) : this.node(t, {
      kind: C.INLINE_FRAGMENT,
      typeCondition: r ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  parseFragmentDefinition() {
    const t = this._lexer.token;
    return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(t, {
      kind: C.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      variableDefinitions: this.parseVariableDefinitions(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    }) : this.node(t, {
      kind: C.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentName : Name but not `on`
   */
  parseFragmentName() {
    if (this._lexer.token.value === "on")
      throw this.unexpected();
    return this.parseName();
  }
  // Implements the parsing rules in the Values section.
  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseValueLiteral(t) {
    const r = this._lexer.token;
    switch (r.kind) {
      case T.BRACKET_L:
        return this.parseList(t);
      case T.BRACE_L:
        return this.parseObject(t);
      case T.INT:
        return this.advanceLexer(), this.node(r, {
          kind: C.INT,
          value: r.value
        });
      case T.FLOAT:
        return this.advanceLexer(), this.node(r, {
          kind: C.FLOAT,
          value: r.value
        });
      case T.STRING:
      case T.BLOCK_STRING:
        return this.parseStringLiteral();
      case T.NAME:
        switch (this.advanceLexer(), r.value) {
          case "true":
            return this.node(r, {
              kind: C.BOOLEAN,
              value: !0
            });
          case "false":
            return this.node(r, {
              kind: C.BOOLEAN,
              value: !1
            });
          case "null":
            return this.node(r, {
              kind: C.NULL
            });
          default:
            return this.node(r, {
              kind: C.ENUM,
              value: r.value
            });
        }
      case T.DOLLAR:
        if (t)
          if (this.expectToken(T.DOLLAR), this._lexer.token.kind === T.NAME) {
            const n = this._lexer.token.value;
            throw fe(
              this._lexer.source,
              r.start,
              `Unexpected variable "$${n}" in constant value.`
            );
          } else
            throw this.unexpected(r);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0);
  }
  parseStringLiteral() {
    const t = this._lexer.token;
    return this.advanceLexer(), this.node(t, {
      kind: C.STRING,
      value: t.value,
      block: t.kind === T.BLOCK_STRING
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  parseList(t) {
    const r = () => this.parseValueLiteral(t);
    return this.node(this._lexer.token, {
      kind: C.LIST,
      values: this.any(T.BRACKET_L, r, T.BRACKET_R)
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */
  parseObject(t) {
    const r = () => this.parseObjectField(t);
    return this.node(this._lexer.token, {
      kind: C.OBJECT,
      fields: this.any(T.BRACE_L, r, T.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(t) {
    const r = this._lexer.token, n = this.parseName();
    return this.expectToken(T.COLON), this.node(r, {
      kind: C.OBJECT_FIELD,
      name: n,
      value: this.parseValueLiteral(t)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(t) {
    const r = [];
    for (; this.peek(T.AT); )
      r.push(this.parseDirective(t));
    return r;
  }
  parseConstDirectives() {
    return this.parseDirectives(!0);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */
  parseDirective(t) {
    const r = this._lexer.token;
    return this.expectToken(T.AT), this.node(r, {
      kind: C.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(t)
    });
  }
  // Implements the parsing rules in the Types section.
  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  parseTypeReference() {
    const t = this._lexer.token;
    let r;
    if (this.expectOptionalToken(T.BRACKET_L)) {
      const n = this.parseTypeReference();
      this.expectToken(T.BRACKET_R), r = this.node(t, {
        kind: C.LIST_TYPE,
        type: n
      });
    } else
      r = this.parseNamedType();
    return this.expectOptionalToken(T.BANG) ? this.node(t, {
      kind: C.NON_NULL_TYPE,
      type: r
    }) : r;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: C.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(T.STRING) || this.peek(T.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  parseDescription() {
    if (this.peekDescription())
      return this.parseStringLiteral();
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */
  parseSchemaDefinition() {
    const t = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("schema");
    const n = this.parseConstDirectives(), i = this.many(
      T.BRACE_L,
      this.parseOperationTypeDefinition,
      T.BRACE_R
    );
    return this.node(t, {
      kind: C.SCHEMA_DEFINITION,
      description: r,
      directives: n,
      operationTypes: i
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const t = this._lexer.token, r = this.parseOperationType();
    this.expectToken(T.COLON);
    const n = this.parseNamedType();
    return this.node(t, {
      kind: C.OPERATION_TYPE_DEFINITION,
      operation: r,
      type: n
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const t = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("scalar");
    const n = this.parseName(), i = this.parseConstDirectives();
    return this.node(t, {
      kind: C.SCALAR_TYPE_DEFINITION,
      description: r,
      name: n,
      directives: i
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition() {
    const t = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("type");
    const n = this.parseName(), i = this.parseImplementsInterfaces(), a = this.parseConstDirectives(), o = this.parseFieldsDefinition();
    return this.node(t, {
      kind: C.OBJECT_TYPE_DEFINITION,
      description: r,
      name: n,
      interfaces: i,
      directives: a,
      fields: o
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(T.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      T.BRACE_L,
      this.parseFieldDefinition,
      T.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const t = this._lexer.token, r = this.parseDescription(), n = this.parseName(), i = this.parseArgumentDefs();
    this.expectToken(T.COLON);
    const a = this.parseTypeReference(), o = this.parseConstDirectives();
    return this.node(t, {
      kind: C.FIELD_DEFINITION,
      description: r,
      name: n,
      arguments: i,
      type: a,
      directives: o
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  parseArgumentDefs() {
    return this.optionalMany(
      T.PAREN_L,
      this.parseInputValueDef,
      T.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const t = this._lexer.token, r = this.parseDescription(), n = this.parseName();
    this.expectToken(T.COLON);
    const i = this.parseTypeReference();
    let a;
    this.expectOptionalToken(T.EQUALS) && (a = this.parseConstValueLiteral());
    const o = this.parseConstDirectives();
    return this.node(t, {
      kind: C.INPUT_VALUE_DEFINITION,
      description: r,
      name: n,
      type: i,
      defaultValue: a,
      directives: o
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition() {
    const t = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("interface");
    const n = this.parseName(), i = this.parseImplementsInterfaces(), a = this.parseConstDirectives(), o = this.parseFieldsDefinition();
    return this.node(t, {
      kind: C.INTERFACE_TYPE_DEFINITION,
      description: r,
      name: n,
      interfaces: i,
      directives: a,
      fields: o
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  parseUnionTypeDefinition() {
    const t = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("union");
    const n = this.parseName(), i = this.parseConstDirectives(), a = this.parseUnionMemberTypes();
    return this.node(t, {
      kind: C.UNION_TYPE_DEFINITION,
      description: r,
      name: n,
      directives: i,
      types: a
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  parseUnionMemberTypes() {
    return this.expectOptionalToken(T.EQUALS) ? this.delimitedMany(T.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition() {
    const t = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("enum");
    const n = this.parseName(), i = this.parseConstDirectives(), a = this.parseEnumValuesDefinition();
    return this.node(t, {
      kind: C.ENUM_TYPE_DEFINITION,
      description: r,
      name: n,
      directives: i,
      values: a
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */
  parseEnumValuesDefinition() {
    return this.optionalMany(
      T.BRACE_L,
      this.parseEnumValueDefinition,
      T.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const t = this._lexer.token, r = this.parseDescription(), n = this.parseEnumValueName(), i = this.parseConstDirectives();
    return this.node(t, {
      kind: C.ENUM_VALUE_DEFINITION,
      description: r,
      name: n,
      directives: i
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
      throw fe(
        this._lexer.source,
        this._lexer.token.start,
        `${Cr(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  parseInputObjectTypeDefinition() {
    const t = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("input");
    const n = this.parseName(), i = this.parseConstDirectives(), a = this.parseInputFieldsDefinition();
    return this.node(t, {
      kind: C.INPUT_OBJECT_TYPE_DEFINITION,
      description: r,
      name: n,
      directives: i,
      fields: a
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */
  parseInputFieldsDefinition() {
    return this.optionalMany(
      T.BRACE_L,
      this.parseInputValueDef,
      T.BRACE_R
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  parseTypeSystemExtension() {
    const t = this._lexer.lookahead();
    if (t.kind === T.NAME)
      switch (t.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(t);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */
  parseSchemaExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    const r = this.parseConstDirectives(), n = this.optionalMany(
      T.BRACE_L,
      this.parseOperationTypeDefinition,
      T.BRACE_R
    );
    if (r.length === 0 && n.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: C.SCHEMA_EXTENSION,
      directives: r,
      operationTypes: n
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const r = this.parseName(), n = this.parseConstDirectives();
    if (n.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: C.SCALAR_TYPE_EXTENSION,
      name: r,
      directives: n
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  parseObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    const r = this.parseName(), n = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), a = this.parseFieldsDefinition();
    if (n.length === 0 && i.length === 0 && a.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: C.OBJECT_TYPE_EXTENSION,
      name: r,
      interfaces: n,
      directives: i,
      fields: a
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  parseInterfaceTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    const r = this.parseName(), n = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), a = this.parseFieldsDefinition();
    if (n.length === 0 && i.length === 0 && a.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: C.INTERFACE_TYPE_EXTENSION,
      name: r,
      interfaces: n,
      directives: i,
      fields: a
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  parseUnionTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    const r = this.parseName(), n = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
    if (n.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: C.UNION_TYPE_EXTENSION,
      name: r,
      directives: n,
      types: i
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  parseEnumTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    const r = this.parseName(), n = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
    if (n.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: C.ENUM_TYPE_EXTENSION,
      name: r,
      directives: n,
      values: i
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  parseInputObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    const r = this.parseName(), n = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
    if (n.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: C.INPUT_OBJECT_TYPE_EXTENSION,
      name: r,
      directives: n,
      fields: i
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */
  parseDirectiveDefinition() {
    const t = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(T.AT);
    const n = this.parseName(), i = this.parseArgumentDefs(), a = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const o = this.parseDirectiveLocations();
    return this.node(t, {
      kind: C.DIRECTIVE_DEFINITION,
      description: r,
      name: n,
      arguments: i,
      repeatable: a,
      locations: o
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  parseDirectiveLocations() {
    return this.delimitedMany(T.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  parseDirectiveLocation() {
    const t = this._lexer.token, r = this.parseName();
    if (Object.prototype.hasOwnProperty.call(xi, r.value))
      return r;
    throw this.unexpected(t);
  }
  // Core parsing utility functions
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node(t, r) {
    return this._options.noLocation !== !0 && (r.loc = new Up(
      t,
      this._lexer.lastToken,
      this._lexer.source
    )), r;
  }
  /**
   * Determines if the next token is of a given kind
   */
  peek(t) {
    return this._lexer.token.kind === t;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectToken(t) {
    const r = this._lexer.token;
    if (r.kind === t)
      return this.advanceLexer(), r;
    throw fe(
      this._lexer.source,
      r.start,
      `Expected ${tc(t)}, found ${Cr(r)}.`
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalToken(t) {
    return this._lexer.token.kind === t ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectKeyword(t) {
    const r = this._lexer.token;
    if (r.kind === T.NAME && r.value === t)
      this.advanceLexer();
    else
      throw fe(
        this._lexer.source,
        r.start,
        `Expected "${t}", found ${Cr(r)}.`
      );
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(t) {
    const r = this._lexer.token;
    return r.kind === T.NAME && r.value === t ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(t) {
    const r = t ?? this._lexer.token;
    return fe(
      this._lexer.source,
      r.start,
      `Unexpected ${Cr(r)}.`
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(t, r, n) {
    this.expectToken(t);
    const i = [];
    for (; !this.expectOptionalToken(n); )
      i.push(r.call(this));
    return i;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(t, r, n) {
    if (this.expectOptionalToken(t)) {
      const i = [];
      do
        i.push(r.call(this));
      while (!this.expectOptionalToken(n));
      return i;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(t, r, n) {
    this.expectToken(t);
    const i = [];
    do
      i.push(r.call(this));
    while (!this.expectOptionalToken(n));
    return i;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(t, r) {
    this.expectOptionalToken(t);
    const n = [];
    do
      n.push(r.call(this));
    while (this.expectOptionalToken(t));
    return n;
  }
  advanceLexer() {
    const { maxTokens: t } = this._options, r = this._lexer.advance();
    if (r.kind !== T.EOF && (++this._tokenCounter, t !== void 0 && this._tokenCounter > t))
      throw fe(
        this._lexer.source,
        r.start,
        `Document contains more that ${t} tokens. Parsing aborted.`
      );
  }
}
function Cr(e) {
  const t = e.value;
  return tc(e.kind) + (t != null ? ` "${t}"` : "");
}
function tc(e) {
  return Hp(e) ? `"${e}"` : e;
}
function mh(e) {
  return `"${e.replace(gh, yh)}"`;
}
const gh = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function yh(e) {
  return vh[e.charCodeAt(0)];
}
const vh = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // 5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
], on = Object.freeze({});
function Te(e, t, r = Hu) {
  const n = /* @__PURE__ */ new Map();
  for (const g of Object.values(C))
    n.set(g, bh(t, g));
  let i, a = Array.isArray(e), o = [e], s = -1, u = [], c = e, l, d;
  const f = [], p = [];
  do {
    s++;
    const g = s === o.length, b = g && u.length !== 0;
    if (g) {
      if (l = p.length === 0 ? void 0 : f[f.length - 1], c = d, d = p.pop(), b)
        if (a) {
          c = c.slice();
          let D = 0;
          for (const [I, O] of u) {
            const x = I - D;
            O === null ? (c.splice(x, 1), D++) : c[x] = O;
          }
        } else {
          c = { ...c };
          for (const [D, I] of u)
            c[D] = I;
        }
      s = i.index, o = i.keys, u = i.edits, a = i.inArray, i = i.prev;
    } else if (d) {
      if (l = a ? s : o[s], c = d[l], c == null)
        continue;
      f.push(l);
    }
    let E;
    if (!Array.isArray(c)) {
      var y, m;
      Ao(c) || Nr(!1, `Invalid AST Node: ${da(c)}.`);
      const D = g ? (y = n.get(c.kind)) === null || y === void 0 ? void 0 : y.leave : (m = n.get(c.kind)) === null || m === void 0 ? void 0 : m.enter;
      if (E = D?.call(t, c, l, d, f, p), E === on)
        break;
      if (E === !1) {
        if (!g) {
          f.pop();
          continue;
        }
      } else if (E !== void 0 && (u.push([l, E]), !g))
        if (Ao(E))
          c = E;
        else {
          f.pop();
          continue;
        }
    }
    if (E === void 0 && b && u.push([l, c]), g)
      f.pop();
    else {
      var v;
      i = {
        inArray: a,
        index: s,
        keys: o,
        edits: u,
        prev: i
      }, a = Array.isArray(c), o = a ? c : (v = r[c.kind]) !== null && v !== void 0 ? v : [], s = -1, u = [], d && p.push(d), d = c;
    }
  } while (i !== void 0);
  return u.length !== 0 ? u[u.length - 1][1] : e;
}
function bh(e, t) {
  const r = e[t];
  return typeof r == "object" ? r : typeof r == "function" ? {
    enter: r,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function Sh(e) {
  return Te(e, Eh);
}
const _h = 80, Eh = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => A(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const t = B("(", A(e.variableDefinitions, ", "), ")"), r = A(
        [
          e.operation,
          A([e.name, t]),
          A(e.directives, " ")
        ],
        " "
      );
      return (r === "query" ? "" : r + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: r, directives: n }) => e + ": " + t + B(" = ", r) + B(" ", A(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => De(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: r, directives: n, selectionSet: i }) {
      const a = B("", e, ": ") + t;
      let o = a + B("(", A(r, ", "), ")");
      return o.length > _h && (o = a + B(`(
`, Rr(A(r, `
`)), `
)`)), A([o, A(n, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + B(" ", A(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: r }) => A(
      [
        "...",
        B("on ", e),
        A(t, " "),
        r
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: r, directives: n, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${e}${B("(", A(r, ", "), ")")} on ${t} ${B("", A(n, " "), " ")}` + i
    )
  },
  // Value
  IntValue: {
    leave: ({ value: e }) => e
  },
  FloatValue: {
    leave: ({ value: e }) => e
  },
  StringValue: {
    leave: ({ value: e, block: t }) => t ? Qp(e) : mh(e)
  },
  BooleanValue: {
    leave: ({ value: e }) => e ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value: e }) => e
  },
  ListValue: {
    leave: ({ values: e }) => "[" + A(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + A(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + B("(", A(t, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name: e }) => e
  },
  ListType: {
    leave: ({ type: e }) => "[" + e + "]"
  },
  NonNullType: {
    leave: ({ type: e }) => e + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description: e, directives: t, operationTypes: r }) => B("", e, `
`) + A(["schema", A(t, " "), De(r)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: r }) => B("", e, `
`) + A(["scalar", t, A(r, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => B("", e, `
`) + A(
      [
        "type",
        t,
        B("implements ", A(r, " & ")),
        A(n, " "),
        De(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: r, type: n, directives: i }) => B("", e, `
`) + t + (Po(r) ? B(`(
`, Rr(A(r, `
`)), `
)`) : B("(", A(r, ", "), ")")) + ": " + n + B(" ", A(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: r, defaultValue: n, directives: i }) => B("", e, `
`) + A(
      [t + ": " + r, B("= ", n), A(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => B("", e, `
`) + A(
      [
        "interface",
        t,
        B("implements ", A(r, " & ")),
        A(n, " "),
        De(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, types: n }) => B("", e, `
`) + A(
      ["union", t, A(r, " "), B("= ", A(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, values: n }) => B("", e, `
`) + A(["enum", t, A(r, " "), De(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: r }) => B("", e, `
`) + A([t, A(r, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, fields: n }) => B("", e, `
`) + A(["input", t, A(r, " "), De(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: r, repeatable: n, locations: i }) => B("", e, `
`) + "directive @" + t + (Po(r) ? B(`(
`, Rr(A(r, `
`)), `
)`) : B("(", A(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + A(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => A(
      ["extend schema", A(e, " "), De(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => A(["extend scalar", e, A(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => A(
      [
        "extend type",
        e,
        B("implements ", A(t, " & ")),
        A(r, " "),
        De(n)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => A(
      [
        "extend interface",
        e,
        B("implements ", A(t, " & ")),
        A(r, " "),
        De(n)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: r }) => A(
      [
        "extend union",
        e,
        A(t, " "),
        B("= ", A(r, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: r }) => A(["extend enum", e, A(t, " "), De(r)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: r }) => A(["extend input", e, A(t, " "), De(r)], " ")
  }
};
function A(e, t = "") {
  var r;
  return (r = e?.filter((n) => n).join(t)) !== null && r !== void 0 ? r : "";
}
function De(e) {
  return B(`{
`, Rr(A(e, `
`)), `
}`);
}
function B(e, t, r = "") {
  return t != null && t !== "" ? e + t + r : "";
}
function Rr(e) {
  return B("  ", e.replace(/\n/g, `
  `));
}
function Po(e) {
  var t;
  return (t = e?.some((r) => r.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function No(e) {
  return e.kind === C.FIELD || e.kind === C.FRAGMENT_SPREAD || e.kind === C.INLINE_FRAGMENT;
}
function Er(e, t) {
  var r = e.directives;
  return !r || !r.length ? !0 : Th(r).every(function(n) {
    var i = n.directive, a = n.ifArgument, o = !1;
    return a.value.kind === "Variable" ? (o = t && t[a.value.name.value], $(o !== void 0, 78, i.name.value)) : o = a.value.value, i.name.value === "skip" ? !o : o;
  });
}
function mr(e, t, r) {
  var n = new Set(e), i = n.size;
  return Te(t, {
    Directive: function(a) {
      if (n.delete(a.name.value) && (!r || !n.size))
        return on;
    }
  }), r ? !n.size : n.size < i;
}
function Dh(e) {
  return e && mr(["client", "export"], e, !0);
}
function wh(e) {
  var t = e.name.value;
  return t === "skip" || t === "include";
}
function Th(e) {
  var t = [];
  return e && e.length && e.forEach(function(r) {
    if (wh(r)) {
      var n = r.arguments, i = r.name.value;
      $(n && n.length === 1, 79, i);
      var a = n[0];
      $(a.name && a.name.value === "if", 80, i);
      var o = a.value;
      $(o && (o.kind === "Variable" || o.kind === "BooleanValue"), 81, i), t.push({ directive: r, ifArgument: a });
    }
  }), t;
}
function Ih(e) {
  var t, r, n = (t = e.directives) === null || t === void 0 ? void 0 : t.find(function(a) {
    var o = a.name;
    return o.value === "unmask";
  });
  if (!n)
    return "mask";
  var i = (r = n.arguments) === null || r === void 0 ? void 0 : r.find(function(a) {
    var o = a.name;
    return o.value === "mode";
  });
  return globalThis.__DEV__ !== !1 && i && (i.value.kind === C.VARIABLE ? globalThis.__DEV__ !== !1 && $.warn(82) : i.value.kind !== C.STRING ? globalThis.__DEV__ !== !1 && $.warn(83) : i.value.value !== "migrate" && globalThis.__DEV__ !== !1 && $.warn(84, i.value.value)), i && "value" in i.value && i.value.value === "migrate" ? "migrate" : "unmask";
}
const Oh = () => /* @__PURE__ */ Object.create(null), { forEach: kh, slice: Ro } = Array.prototype, { hasOwnProperty: xh } = Object.prototype;
class Le {
  constructor(t = !0, r = Oh) {
    this.weakness = t, this.makeData = r;
  }
  lookup() {
    return this.lookupArray(arguments);
  }
  lookupArray(t) {
    let r = this;
    return kh.call(t, (n) => r = r.getChildTrie(n)), xh.call(r, "data") ? r.data : r.data = this.makeData(Ro.call(t));
  }
  peek() {
    return this.peekArray(arguments);
  }
  peekArray(t) {
    let r = this;
    for (let n = 0, i = t.length; r && n < i; ++n) {
      const a = r.mapFor(t[n], !1);
      r = a && a.get(t[n]);
    }
    return r && r.data;
  }
  remove() {
    return this.removeArray(arguments);
  }
  removeArray(t) {
    let r;
    if (t.length) {
      const n = t[0], i = this.mapFor(n, !1), a = i && i.get(n);
      a && (r = a.removeArray(Ro.call(t, 1)), !a.data && !a.weak && !(a.strong && a.strong.size) && i.delete(n));
    } else
      r = this.data, delete this.data;
    return r;
  }
  getChildTrie(t) {
    const r = this.mapFor(t, !0);
    let n = r.get(t);
    return n || r.set(t, n = new Le(this.weakness, this.makeData)), n;
  }
  mapFor(t, r) {
    return this.weakness && Fh(t) ? this.weak || (r ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (r ? this.strong = /* @__PURE__ */ new Map() : void 0);
  }
}
function Fh(e) {
  switch (typeof e) {
    case "object":
      if (e === null)
        break;
    // Fall through to return true...
    case "function":
      return !0;
  }
  return !1;
}
var Ch = we(function() {
  return navigator.product;
}) == "ReactNative", ht = typeof WeakMap == "function" && !(Ch && !global.HermesInternal), pa = typeof WeakSet == "function", rc = typeof Symbol == "function" && typeof Symbol.for == "function", sn = rc && Symbol.asyncIterator;
we(function() {
  return window.document.createElement;
});
we(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function ae(e) {
  return e !== null && typeof e == "object";
}
function Ah(e, t) {
  var r = t, n = [];
  e.definitions.forEach(function(a) {
    if (a.kind === "OperationDefinition")
      throw ve(
        85,
        a.operation,
        a.name ? " named '".concat(a.name.value, "'") : ""
      );
    a.kind === "FragmentDefinition" && n.push(a);
  }), typeof r > "u" && ($(n.length === 1, 86, n.length), r = n[0].name.value);
  var i = _(_({}, e), { definitions: ge([
    {
      kind: "OperationDefinition",
      // OperationTypeNode is an enum
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: r
            }
          }
        ]
      }
    }
  ], e.definitions, !0) });
  return i;
}
function jt(e) {
  e === void 0 && (e = []);
  var t = {};
  return e.forEach(function(r) {
    t[r.name.value] = r;
  }), t;
}
function un(e, t) {
  switch (e.kind) {
    case "InlineFragment":
      return e;
    case "FragmentSpread": {
      var r = e.name.value;
      if (typeof t == "function")
        return t(r);
      var n = t && t[r];
      return $(n, 87, r), n || null;
    }
    default:
      return null;
  }
}
function $h(e) {
  var t = !0;
  return Te(e, {
    FragmentSpread: function(r) {
      if (t = !!r.directives && r.directives.some(function(n) {
        return n.name.value === "unmask";
      }), !t)
        return on;
    }
  }), t;
}
function Ph() {
}
class Ci {
  constructor(t = 1 / 0, r = Ph) {
    this.max = t, this.dispose = r, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
  }
  has(t) {
    return this.map.has(t);
  }
  get(t) {
    const r = this.getNode(t);
    return r && r.value;
  }
  get size() {
    return this.map.size;
  }
  getNode(t) {
    const r = this.map.get(t);
    if (r && r !== this.newest) {
      const { older: n, newer: i } = r;
      i && (i.older = n), n && (n.newer = i), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = i);
    }
    return r;
  }
  set(t, r) {
    let n = this.getNode(t);
    return n ? n.value = r : (n = {
      key: t,
      value: r,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(t, n), n.value);
  }
  clean() {
    for (; this.oldest && this.map.size > this.max; )
      this.delete(this.oldest.key);
  }
  delete(t) {
    const r = this.map.get(t);
    return r ? (r === this.newest && (this.newest = r.older), r === this.oldest && (this.oldest = r.newer), r.newer && (r.newer.older = r.older), r.older && (r.older.newer = r.newer), this.map.delete(t), this.dispose(r.value, t), !0) : !1;
  }
}
function Ai() {
}
const Nh = Ai, Rh = typeof WeakRef < "u" ? WeakRef : function(e) {
  return { deref: () => e };
}, Mh = typeof WeakMap < "u" ? WeakMap : Map, Lh = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
  return {
    register: Ai,
    unregister: Ai
  };
}, jh = 10024;
class Qr {
  constructor(t = 1 / 0, r = Nh) {
    this.max = t, this.dispose = r, this.map = new Mh(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
      const n = this.unfinalizedNodes.values();
      for (let i = 0; i < jh; i++) {
        const a = n.next().value;
        if (!a)
          break;
        this.unfinalizedNodes.delete(a);
        const o = a.key;
        delete a.key, a.keyRef = new Rh(o), this.registry.register(o, a, a);
      }
      this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
    }, this.registry = new Lh(this.deleteNode.bind(this));
  }
  has(t) {
    return this.map.has(t);
  }
  get(t) {
    const r = this.getNode(t);
    return r && r.value;
  }
  getNode(t) {
    const r = this.map.get(t);
    if (r && r !== this.newest) {
      const { older: n, newer: i } = r;
      i && (i.older = n), n && (n.newer = i), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = i);
    }
    return r;
  }
  set(t, r) {
    let n = this.getNode(t);
    return n ? n.value = r : (n = {
      key: t,
      value: r,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.scheduleFinalization(n), this.map.set(t, n), this.size++, n.value);
  }
  clean() {
    for (; this.oldest && this.size > this.max; )
      this.deleteNode(this.oldest);
  }
  deleteNode(t) {
    t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.size--;
    const r = t.key || t.keyRef && t.keyRef.deref();
    this.dispose(t.value, r), t.keyRef ? this.registry.unregister(t) : this.unfinalizedNodes.delete(t), r && this.map.delete(r);
  }
  delete(t) {
    const r = this.map.get(t);
    return r ? (this.deleteNode(r), !0) : !1;
  }
  scheduleFinalization(t) {
    this.unfinalizedNodes.add(t), this.finalizationScheduled || (this.finalizationScheduled = !0, queueMicrotask(this.finalize));
  }
}
var Ln = /* @__PURE__ */ new WeakSet();
function nc(e) {
  e.size <= (e.max || -1) || Ln.has(e) || (Ln.add(e), setTimeout(function() {
    e.clean(), Ln.delete(e);
  }, 100));
}
var ic = function(e, t) {
  var r = new Qr(e, t);
  return r.set = function(n, i) {
    var a = Qr.prototype.set.call(this, n, i);
    return nc(this), a;
  }, r;
}, qh = function(e, t) {
  var r = new Ci(e, t);
  return r.set = function(n, i) {
    var a = Ci.prototype.set.call(this, n, i);
    return nc(this), a;
  }, r;
}, Uh = Symbol.for("apollo.cacheSize"), Ne = _({}, Ii[Uh]), ot = {};
function ac(e, t) {
  ot[e] = t;
}
var Vh = globalThis.__DEV__ !== !1 ? Qh : void 0, Bh = globalThis.__DEV__ !== !1 ? Wh : void 0, Gh = globalThis.__DEV__ !== !1 ? oc : void 0;
function zh() {
  var e = {
    parser: 1e3,
    canonicalStringify: 1e3,
    print: 2e3,
    "documentTransform.cache": 2e3,
    "queryManager.getDocumentInfo": 2e3,
    "PersistedQueryLink.persistedQueryHashes": 2e3,
    "fragmentRegistry.transform": 2e3,
    "fragmentRegistry.lookup": 1e3,
    "fragmentRegistry.findFragmentSpreads": 4e3,
    "cache.fragmentQueryDocuments": 1e3,
    "removeTypenameFromVariables.getVariableDefinitions": 2e3,
    "inMemoryCache.maybeBroadcastWatch": 5e3,
    "inMemoryCache.executeSelectionSet": 5e4,
    "inMemoryCache.executeSubSelectedArray": 1e4
  };
  return Object.fromEntries(Object.entries(e).map(function(t) {
    var r = t[0], n = t[1];
    return [
      r,
      Ne[r] || n
    ];
  }));
}
function Qh() {
  var e, t, r, n, i;
  if (globalThis.__DEV__ === !1)
    throw new Error("only supported in development mode");
  return {
    limits: zh(),
    sizes: _({ print: (e = ot.print) === null || e === void 0 ? void 0 : e.call(ot), parser: (t = ot.parser) === null || t === void 0 ? void 0 : t.call(ot), canonicalStringify: (r = ot.canonicalStringify) === null || r === void 0 ? void 0 : r.call(ot), links: Pi(this.link), queryManager: {
      getDocumentInfo: this.queryManager.transformCache.size,
      documentTransforms: uc(this.queryManager.documentTransform)
    } }, (i = (n = this.cache).getMemoryInternals) === null || i === void 0 ? void 0 : i.call(n))
  };
}
function oc() {
  return {
    cache: {
      fragmentQueryDocuments: ze(this.getFragmentDoc)
    }
  };
}
function Wh() {
  var e = this.config.fragments;
  return _(_({}, oc.apply(this)), { addTypenameDocumentTransform: uc(this.addTypenameTransform), inMemoryCache: {
    executeSelectionSet: ze(this.storeReader.executeSelectionSet),
    executeSubSelectedArray: ze(this.storeReader.executeSubSelectedArray),
    maybeBroadcastWatch: ze(this.maybeBroadcastWatch)
  }, fragmentRegistry: {
    findFragmentSpreads: ze(e?.findFragmentSpreads),
    lookup: ze(e?.lookup),
    transform: ze(e?.transform)
  } });
}
function Hh(e) {
  return !!e && "dirtyKey" in e;
}
function ze(e) {
  return Hh(e) ? e.size : void 0;
}
function sc(e) {
  return e != null;
}
function uc(e) {
  return $i(e).map(function(t) {
    return { cache: t };
  });
}
function $i(e) {
  return e ? ge(ge([
    ze(e?.performWork)
  ], $i(e?.left), !0), $i(e?.right), !0).filter(sc) : [];
}
function Pi(e) {
  var t;
  return e ? ge(ge([
    (t = e?.getMemoryInternals) === null || t === void 0 ? void 0 : t.call(e)
  ], Pi(e?.left), !0), Pi(e?.right), !0).filter(sc) : [];
}
var Ye = Object.assign(function(t) {
  return JSON.stringify(t, Yh);
}, {
  reset: function() {
    Dt = new qh(
      Ne.canonicalStringify || 1e3
      /* defaultCacheSizes.canonicalStringify */
    );
  }
});
globalThis.__DEV__ !== !1 && ac("canonicalStringify", function() {
  return Dt.size;
});
var Dt;
Ye.reset();
function Yh(e, t) {
  if (t && typeof t == "object") {
    var r = Object.getPrototypeOf(t);
    if (r === Object.prototype || r === null) {
      var n = Object.keys(t);
      if (n.every(Jh))
        return t;
      var i = JSON.stringify(n), a = Dt.get(i);
      if (!a) {
        n.sort();
        var o = JSON.stringify(n);
        a = Dt.get(o) || n, Dt.set(i, a), Dt.set(o, a);
      }
      var s = Object.create(r);
      return a.forEach(function(u) {
        s[u] = t[u];
      }), s;
    }
  }
  return t;
}
function Jh(e, t, r) {
  return t === 0 || r[t - 1] <= e;
}
function kt(e) {
  return { __ref: String(e) };
}
function Y(e) {
  return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function Kh(e) {
  return ae(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function Xh(e) {
  return e.kind === "StringValue";
}
function Zh(e) {
  return e.kind === "BooleanValue";
}
function em(e) {
  return e.kind === "IntValue";
}
function tm(e) {
  return e.kind === "FloatValue";
}
function rm(e) {
  return e.kind === "Variable";
}
function nm(e) {
  return e.kind === "ObjectValue";
}
function im(e) {
  return e.kind === "ListValue";
}
function am(e) {
  return e.kind === "EnumValue";
}
function om(e) {
  return e.kind === "NullValue";
}
function $t(e, t, r, n) {
  if (em(r) || tm(r))
    e[t.value] = Number(r.value);
  else if (Zh(r) || Xh(r))
    e[t.value] = r.value;
  else if (nm(r)) {
    var i = {};
    r.fields.map(function(o) {
      return $t(i, o.name, o.value, n);
    }), e[t.value] = i;
  } else if (rm(r)) {
    var a = (n || {})[r.name.value];
    e[t.value] = a;
  } else if (im(r))
    e[t.value] = r.values.map(function(o) {
      var s = {};
      return $t(s, t, o, n), s[t.value];
    });
  else if (am(r))
    e[t.value] = r.value;
  else if (om(r))
    e[t.value] = null;
  else
    throw ve(96, t.value, r.kind);
}
function sm(e, t) {
  var r = null;
  e.directives && (r = {}, e.directives.forEach(function(i) {
    r[i.name.value] = {}, i.arguments && i.arguments.forEach(function(a) {
      var o = a.name, s = a.value;
      return $t(r[i.name.value], o, s, t);
    });
  }));
  var n = null;
  return e.arguments && e.arguments.length && (n = {}, e.arguments.forEach(function(i) {
    var a = i.name, o = i.value;
    return $t(n, a, o, t);
  })), cc(e.name.value, n, r);
}
var um = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
], Ht = Ye, cc = Object.assign(function(e, t, r) {
  if (t && r && r.connection && r.connection.key)
    if (r.connection.filter && r.connection.filter.length > 0) {
      var n = r.connection.filter ? r.connection.filter : [];
      n.sort();
      var i = {};
      return n.forEach(function(s) {
        i[s] = t[s];
      }), "".concat(r.connection.key, "(").concat(Ht(i), ")");
    } else
      return r.connection.key;
  var a = e;
  if (t) {
    var o = Ht(t);
    a += "(".concat(o, ")");
  }
  return r && Object.keys(r).forEach(function(s) {
    um.indexOf(s) === -1 && (r[s] && Object.keys(r[s]).length ? a += "@".concat(s, "(").concat(Ht(r[s]), ")") : a += "@".concat(s));
  }), a;
}, {
  setStringify: function(e) {
    var t = Ht;
    return Ht = e, t;
  }
});
function cn(e, t) {
  if (e.arguments && e.arguments.length) {
    var r = {};
    return e.arguments.forEach(function(n) {
      var i = n.name, a = n.value;
      return $t(r, i, a, t);
    }), r;
  }
  return null;
}
function Re(e) {
  return e.alias ? e.alias.value : e.name.value;
}
function Ni(e, t, r) {
  for (var n, i = 0, a = t.selections; i < a.length; i++) {
    var o = a[i];
    if (Ze(o)) {
      if (o.name.value === "__typename")
        return e[Re(o)];
    } else n ? n.push(o) : n = [o];
  }
  if (typeof e.__typename == "string")
    return e.__typename;
  if (n)
    for (var s = 0, u = n; s < u.length; s++) {
      var o = u[s], c = Ni(e, un(o, r).selectionSet, r);
      if (typeof c == "string")
        return c;
    }
}
function Ze(e) {
  return e.kind === "Field";
}
function cm(e) {
  return e.kind === "InlineFragment";
}
function qt(e) {
  $(e && e.kind === "Document", 88);
  var t = e.definitions.filter(function(r) {
    return r.kind !== "FragmentDefinition";
  }).map(function(r) {
    if (r.kind !== "OperationDefinition")
      throw ve(89, r.kind);
    return r;
  });
  return $(t.length <= 1, 90, t.length), e;
}
function pt(e) {
  return qt(e), e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition";
  })[0];
}
function nr(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition" && !!t.name;
  }).map(function(t) {
    return t.name.value;
  })[0] || null;
}
function Ut(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "FragmentDefinition";
  });
}
function lc(e) {
  var t = pt(e);
  return $(t && t.operation === "query", 91), t;
}
function fc(e) {
  $(e.kind === "Document", 92), $(e.definitions.length <= 1, 93);
  var t = e.definitions[0];
  return $(t.kind === "FragmentDefinition", 94), t;
}
function Vt(e) {
  qt(e);
  for (var t, r = 0, n = e.definitions; r < n.length; r++) {
    var i = n[r];
    if (i.kind === "OperationDefinition") {
      var a = i.operation;
      if (a === "query" || a === "mutation" || a === "subscription")
        return i;
    }
    i.kind === "FragmentDefinition" && !t && (t = i);
  }
  if (t)
    return t;
  throw ve(95);
}
function ha(e) {
  var t = /* @__PURE__ */ Object.create(null), r = e && e.variableDefinitions;
  return r && r.length && r.forEach(function(n) {
    n.defaultValue && $t(t, n.variable.name, n.defaultValue);
  }), t;
}
let pe = null;
const Mo = {};
let lm = 1;
const fm = () => class {
  constructor() {
    this.id = [
      "slot",
      lm++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let t = pe; t; t = t.parent)
      if (this.id in t.slots) {
        const r = t.slots[this.id];
        if (r === Mo)
          break;
        return t !== pe && (pe.slots[this.id] = r), !0;
      }
    return pe && (pe.slots[this.id] = Mo), !1;
  }
  getValue() {
    if (this.hasValue())
      return pe.slots[this.id];
  }
  withValue(t, r, n, i) {
    const a = {
      __proto__: null,
      [this.id]: t
    }, o = pe;
    pe = { parent: o, slots: a };
    try {
      return r.apply(i, n);
    } finally {
      pe = o;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(t) {
    const r = pe;
    return function() {
      const n = pe;
      try {
        return pe = r, t.apply(this, arguments);
      } finally {
        pe = n;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(t, r, n) {
    if (pe) {
      const i = pe;
      try {
        return pe = null, t.apply(n, r);
      } finally {
        pe = i;
      }
    } else
      return t.apply(n, r);
  }
};
function Lo(e) {
  try {
    return e();
  } catch {
  }
}
const jn = "@wry/context:Slot", dm = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Lo(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Lo(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), jo = dm, Dr = jo[jn] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[jn] || (function(e) {
  try {
    Object.defineProperty(jo, jn, {
      value: e,
      enumerable: !1,
      writable: !1,
      // When it was possible for globalHost to be the Array constructor (a
      // legacy Slot dedup strategy), it was important for the property to be
      // configurable:true so it could be deleted. That does not seem to be as
      // important when globalHost is the global object, but I don't want to
      // cause similar problems again, and configurable:true seems safest.
      // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
      configurable: !0
    });
  } finally {
    return e;
  }
})(fm()), { bind: Hy, noContext: Yy } = Dr, ln = new Dr(), { hasOwnProperty: pm } = Object.prototype, ma = Array.from || function(e) {
  const t = [];
  return e.forEach((r) => t.push(r)), t;
};
function ga(e) {
  const { unsubscribe: t } = e;
  typeof t == "function" && (e.unsubscribe = void 0, t());
}
const gr = [], hm = 100;
function Pt(e, t) {
  if (!e)
    throw new Error(t || "assertion failure");
}
function dc(e, t) {
  const r = e.length;
  return (
    // Unknown values are not equal to each other.
    r > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    r === t.length && // The underlying value or exception must be the same.
    e[r - 1] === t[r - 1]
  );
}
function pc(e) {
  switch (e.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return e[0];
    case 2:
      throw e[1];
  }
}
function hc(e) {
  return e.slice(0);
}
class fn {
  constructor(t) {
    this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++fn.count;
  }
  peek() {
    if (this.value.length === 1 && !et(this))
      return qo(this), this.value[0];
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(t) {
    return Pt(!this.recomputing, "already recomputing"), qo(this), et(this) ? mm(this, t) : pc(this.value);
  }
  setDirty() {
    this.dirty || (this.dirty = !0, mc(this), ga(this));
  }
  dispose() {
    this.setDirty(), Sc(this), ya(this, (t, r) => {
      t.setDirty(), _c(t, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(t) {
    t.add(this), this.deps || (this.deps = gr.pop() || /* @__PURE__ */ new Set()), this.deps.add(t);
  }
  forgetDeps() {
    this.deps && (ma(this.deps).forEach((t) => t.delete(this)), this.deps.clear(), gr.push(this.deps), this.deps = null);
  }
}
fn.count = 0;
function qo(e) {
  const t = ln.getValue();
  if (t)
    return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), et(e) ? yc(t, e) : vc(t, e), t;
}
function mm(e, t) {
  return Sc(e), ln.withValue(e, gm, [e, t]), vm(e, t) && ym(e), pc(e.value);
}
function gm(e, t) {
  e.recomputing = !0;
  const { normalizeResult: r } = e;
  let n;
  r && e.value.length === 1 && (n = hc(e.value)), e.value.length = 0;
  try {
    if (e.value[0] = e.fn.apply(null, t), r && n && !dc(n, e.value))
      try {
        e.value[0] = r(e.value[0], n[0]);
      } catch {
      }
  } catch (i) {
    e.value[1] = i;
  }
  e.recomputing = !1;
}
function et(e) {
  return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function ym(e) {
  e.dirty = !1, !et(e) && gc(e);
}
function mc(e) {
  ya(e, yc);
}
function gc(e) {
  ya(e, vc);
}
function ya(e, t) {
  const r = e.parents.size;
  if (r) {
    const n = ma(e.parents);
    for (let i = 0; i < r; ++i)
      t(n[i], e);
  }
}
function yc(e, t) {
  Pt(e.childValues.has(t)), Pt(et(t));
  const r = !et(e);
  if (!e.dirtyChildren)
    e.dirtyChildren = gr.pop() || /* @__PURE__ */ new Set();
  else if (e.dirtyChildren.has(t))
    return;
  e.dirtyChildren.add(t), r && mc(e);
}
function vc(e, t) {
  Pt(e.childValues.has(t)), Pt(!et(t));
  const r = e.childValues.get(t);
  r.length === 0 ? e.childValues.set(t, hc(t.value)) : dc(r, t.value) || e.setDirty(), bc(e, t), !et(e) && gc(e);
}
function bc(e, t) {
  const r = e.dirtyChildren;
  r && (r.delete(t), r.size === 0 && (gr.length < hm && gr.push(r), e.dirtyChildren = null));
}
function Sc(e) {
  e.childValues.size > 0 && e.childValues.forEach((t, r) => {
    _c(e, r);
  }), e.forgetDeps(), Pt(e.dirtyChildren === null);
}
function _c(e, t) {
  t.parents.delete(e), e.childValues.delete(t), bc(e, t);
}
function vm(e, t) {
  if (typeof e.subscribe == "function")
    try {
      ga(e), e.unsubscribe = e.subscribe.apply(null, t);
    } catch {
      return e.setDirty(), !1;
    }
  return !0;
}
const bm = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function Ec(e) {
  const t = /* @__PURE__ */ new Map();
  function r(n) {
    const i = ln.getValue();
    if (i) {
      let a = t.get(n);
      a || t.set(n, a = /* @__PURE__ */ new Set()), i.dependOn(a);
    }
  }
  return r.dirty = function(i, a) {
    const o = t.get(i);
    if (o) {
      const s = a && pm.call(bm, a) ? a : "setDirty";
      ma(o).forEach((u) => u[s]()), t.delete(i), ga(o);
    }
  }, r;
}
let Uo;
function Sm(...e) {
  return (Uo || (Uo = new Le(typeof WeakMap == "function"))).lookupArray(e);
}
const qn = /* @__PURE__ */ new Set();
function yr(e, { max: t = Math.pow(2, 16), keyArgs: r, makeCacheKey: n = Sm, normalizeResult: i, subscribe: a, cache: o = Ci } = /* @__PURE__ */ Object.create(null)) {
  const s = typeof o == "function" ? new o(t, (f) => f.dispose()) : o, u = function() {
    const f = n.apply(null, r ? r.apply(null, arguments) : arguments);
    if (f === void 0)
      return e.apply(null, arguments);
    let p = s.get(f);
    p || (s.set(f, p = new fn(e)), p.normalizeResult = i, p.subscribe = a, p.forget = () => s.delete(f));
    const y = p.recompute(Array.prototype.slice.call(arguments));
    return s.set(f, p), qn.add(s), ln.hasValue() || (qn.forEach((m) => m.clean()), qn.clear()), y;
  };
  Object.defineProperty(u, "size", {
    get: () => s.size,
    configurable: !1,
    enumerable: !1
  }), Object.freeze(u.options = {
    max: t,
    keyArgs: r,
    makeCacheKey: n,
    normalizeResult: i,
    subscribe: a,
    cache: s
  });
  function c(f) {
    const p = f && s.get(f);
    p && p.setDirty();
  }
  u.dirtyKey = c, u.dirty = function() {
    c(n.apply(null, arguments));
  };
  function l(f) {
    const p = f && s.get(f);
    if (p)
      return p.peek();
  }
  u.peekKey = l, u.peek = function() {
    return l(n.apply(null, arguments));
  };
  function d(f) {
    return f ? s.delete(f) : !1;
  }
  return u.forgetKey = d, u.forget = function() {
    return d(n.apply(null, arguments));
  }, u.makeCacheKey = n, u.getKey = r ? function() {
    return n.apply(null, r.apply(null, arguments));
  } : n, Object.freeze(u);
}
function _m(e) {
  return e;
}
var Dc = (
  /** @class */
  (function() {
    function e(t, r) {
      r === void 0 && (r = /* @__PURE__ */ Object.create(null)), this.resultCache = pa ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = t, r.getCacheKey && (this.getCacheKey = r.getCacheKey), this.cached = r.cache !== !1, this.resetCache();
    }
    return e.prototype.getCacheKey = function(t) {
      return [t];
    }, e.identity = function() {
      return new e(_m, { cache: !1 });
    }, e.split = function(t, r, n) {
      return n === void 0 && (n = e.identity()), Object.assign(new e(
        function(i) {
          var a = t(i) ? r : n;
          return a.transformDocument(i);
        },
        // Reasonably assume both `left` and `right` transforms handle their own caching
        { cache: !1 }
      ), { left: r, right: n });
    }, e.prototype.resetCache = function() {
      var t = this;
      if (this.cached) {
        var r = new Le(ht);
        this.performWork = yr(e.prototype.performWork.bind(this), {
          makeCacheKey: function(n) {
            var i = t.getCacheKey(n);
            if (i)
              return $(Array.isArray(i), 77), r.lookupArray(i);
          },
          max: Ne["documentTransform.cache"],
          cache: Qr
        });
      }
    }, e.prototype.performWork = function(t) {
      return qt(t), this.transform(t);
    }, e.prototype.transformDocument = function(t) {
      if (this.resultCache.has(t))
        return t;
      var r = this.performWork(t);
      return this.resultCache.add(r), r;
    }, e.prototype.concat = function(t) {
      var r = this;
      return Object.assign(new e(
        function(n) {
          return t.transformDocument(r.transformDocument(n));
        },
        // Reasonably assume both transforms handle their own caching
        { cache: !1 }
      ), {
        left: this,
        right: t
      });
    }, e;
  })()
), sr, We = Object.assign(function(e) {
  var t = sr.get(e);
  return t || (t = Sh(e), sr.set(e, t)), t;
}, {
  reset: function() {
    sr = new ic(
      Ne.print || 2e3
      /* defaultCacheSizes.print */
    );
  }
});
We.reset();
globalThis.__DEV__ !== !1 && ac("print", function() {
  return sr ? sr.size : 0;
});
var oe = Array.isArray;
function Ce(e) {
  return Array.isArray(e) && e.length > 0;
}
var Vo = {
  kind: C.FIELD,
  name: {
    kind: C.NAME,
    value: "__typename"
  }
};
function wc(e, t) {
  return !e || e.selectionSet.selections.every(function(r) {
    return r.kind === C.FRAGMENT_SPREAD && wc(t[r.name.value], t);
  });
}
function Em(e) {
  return wc(pt(e) || fc(e), jt(Ut(e))) ? null : e;
}
function Dm(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  return e.forEach(function(n) {
    n && (n.name ? t.set(n.name, n) : n.test && r.set(n.test, n));
  }), function(n) {
    var i = t.get(n.name.value);
    return !i && r.size && r.forEach(function(a, o) {
      o(n) && (i = a);
    }), i;
  };
}
function Bo(e) {
  var t = /* @__PURE__ */ new Map();
  return function(n) {
    n === void 0 && (n = e);
    var i = t.get(n);
    return i || t.set(n, i = {
      // Variable and fragment spread names used directly within this
      // operation or fragment definition, as identified by key. These sets
      // will be populated during the first traversal of the document in
      // removeDirectivesFromDocument below.
      variables: /* @__PURE__ */ new Set(),
      fragmentSpreads: /* @__PURE__ */ new Set()
    }), i;
  };
}
function Tc(e, t) {
  qt(t);
  for (var r = Bo(""), n = Bo(""), i = function(g) {
    for (var b = 0, E = void 0; b < g.length && (E = g[b]); ++b)
      if (!oe(E)) {
        if (E.kind === C.OPERATION_DEFINITION)
          return r(E.name && E.name.value);
        if (E.kind === C.FRAGMENT_DEFINITION)
          return n(E.name.value);
      }
    return globalThis.__DEV__ !== !1 && $.error(97), null;
  }, a = 0, o = t.definitions.length - 1; o >= 0; --o)
    t.definitions[o].kind === C.OPERATION_DEFINITION && ++a;
  var s = Dm(e), u = function(g) {
    return Ce(g) && g.map(s).some(function(b) {
      return b && b.remove;
    });
  }, c = /* @__PURE__ */ new Map(), l = !1, d = {
    enter: function(g) {
      if (u(g.directives))
        return l = !0, null;
    }
  }, f = Te(t, {
    // These two AST node types share the same implementation, defined above.
    Field: d,
    InlineFragment: d,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(g, b, E, D, I) {
        var O = i(I);
        O && O.variables.add(g.name.value);
      }
    },
    FragmentSpread: {
      enter: function(g, b, E, D, I) {
        if (u(g.directives))
          return l = !0, null;
        var O = i(I);
        O && O.fragmentSpreads.add(g.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(g, b, E, D) {
        c.set(JSON.stringify(D), g);
      },
      leave: function(g, b, E, D) {
        var I = c.get(JSON.stringify(D));
        if (g === I)
          return g;
        if (
          // This logic applies only if the document contains one or more
          // operations, since removing all fragments from a document containing
          // only fragments makes the document useless.
          a > 0 && g.selectionSet.selections.every(function(O) {
            return O.kind === C.FIELD && O.name.value === "__typename";
          })
        )
          return n(g.name.value).removed = !0, l = !0, null;
      }
    },
    Directive: {
      leave: function(g) {
        if (s(g))
          return l = !0, null;
      }
    }
  });
  if (!l)
    return t;
  var p = function(g) {
    return g.transitiveVars || (g.transitiveVars = new Set(g.variables), g.removed || g.fragmentSpreads.forEach(function(b) {
      p(n(b)).transitiveVars.forEach(function(E) {
        g.transitiveVars.add(E);
      });
    })), g;
  }, y = /* @__PURE__ */ new Set();
  f.definitions.forEach(function(g) {
    g.kind === C.OPERATION_DEFINITION ? p(r(g.name && g.name.value)).fragmentSpreads.forEach(function(b) {
      y.add(b);
    }) : g.kind === C.FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
    // definitions count as usages of their own fragment names. This heuristic
    // prevents accidentally removing all fragment definitions from the
    // document just because it contains no operations that use the fragments.
    a === 0 && !n(g.name.value).removed && y.add(g.name.value);
  }), y.forEach(function(g) {
    p(n(g)).fragmentSpreads.forEach(function(b) {
      y.add(b);
    });
  });
  var m = function(g) {
    return !!// A fragment definition will be removed if there are no spreads that refer
    // to it, or the fragment was explicitly removed because it had no fields
    // other than __typename.
    (!y.has(g) || n(g).removed);
  }, v = {
    enter: function(g) {
      if (m(g.name.value))
        return null;
    }
  };
  return Em(Te(f, {
    // If the fragment is going to be removed, then leaving any dangling
    // FragmentSpread nodes with the same name would be a mistake.
    FragmentSpread: v,
    // This is where the fragment definition is actually removed.
    FragmentDefinition: v,
    OperationDefinition: {
      leave: function(g) {
        if (g.variableDefinitions) {
          var b = p(
            // If an operation is anonymous, we use the empty string as its key.
            r(g.name && g.name.value)
          ).transitiveVars;
          if (b.size < g.variableDefinitions.length)
            return _(_({}, g), { variableDefinitions: g.variableDefinitions.filter(function(E) {
              return b.has(E.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var va = Object.assign(function(e) {
  return Te(e, {
    SelectionSet: {
      enter: function(t, r, n) {
        if (!(n && n.kind === C.OPERATION_DEFINITION)) {
          var i = t.selections;
          if (i) {
            var a = i.some(function(s) {
              return Ze(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!a) {
              var o = n;
              if (!(Ze(o) && o.directives && o.directives.some(function(s) {
                return s.name.value === "export";
              })))
                return _(_({}, t), { selections: ge(ge([], i, !0), [Vo], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(e) {
    return e === Vo;
  }
});
function wm(e) {
  var t = Vt(e), r = t.operation;
  if (r === "query")
    return e;
  var n = Te(e, {
    OperationDefinition: {
      enter: function(i) {
        return _(_({}, i), { operation: "query" });
      }
    }
  });
  return n;
}
function Ic(e) {
  qt(e);
  var t = Tc([
    {
      test: function(r) {
        return r.name.value === "client";
      },
      remove: !0
    }
  ], e);
  return t;
}
function Tm(e) {
  return qt(e), Te(e, {
    FragmentSpread: function(t) {
      var r;
      if (!(!((r = t.directives) === null || r === void 0) && r.some(function(n) {
        return n.name.value === "unmask";
      })))
        return _(_({}, t), { directives: ge(ge([], t.directives || [], !0), [
          {
            kind: C.DIRECTIVE,
            name: { kind: C.NAME, value: "nonreactive" }
          }
        ], !1) });
    }
  });
}
var Im = Object.prototype.hasOwnProperty;
function Go() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return dn(e);
}
function dn(e) {
  var t = e[0] || {}, r = e.length;
  if (r > 1)
    for (var n = new tt(), i = 1; i < r; ++i)
      t = n.merge(t, e[i]);
  return t;
}
var Om = function(e, t, r) {
  return this.merge(e[r], t[r]);
}, tt = (
  /** @class */
  (function() {
    function e(t) {
      t === void 0 && (t = Om), this.reconciler = t, this.isObject = ae, this.pastCopies = /* @__PURE__ */ new Set();
    }
    return e.prototype.merge = function(t, r) {
      for (var n = this, i = [], a = 2; a < arguments.length; a++)
        i[a - 2] = arguments[a];
      return ae(r) && ae(t) ? (Object.keys(r).forEach(function(o) {
        if (Im.call(t, o)) {
          var s = t[o];
          if (r[o] !== s) {
            var u = n.reconciler.apply(n, ge([
              t,
              r,
              o
            ], i, !1));
            u !== s && (t = n.shallowCopyForMerge(t), t[o] = u);
          }
        } else
          t = n.shallowCopyForMerge(t), t[o] = r[o];
      }), t) : r;
    }, e.prototype.shallowCopyForMerge = function(t) {
      return ae(t) && (this.pastCopies.has(t) || (Array.isArray(t) ? t = t.slice(0) : t = _({ __proto__: Object.getPrototypeOf(t) }, t), this.pastCopies.add(t))), t;
    }, e;
  })()
);
function km(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = xm(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xm(e, t) {
  if (e) {
    if (typeof e == "string") return zo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zo(e, t);
  }
}
function zo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Qo(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ba(e, t, r) {
  return t && Qo(e.prototype, t), r && Qo(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Sa = function() {
  return typeof Symbol == "function";
}, _a = function(e) {
  return Sa() && !!Symbol[e];
}, Ea = function(e) {
  return _a(e) ? Symbol[e] : "@@" + e;
};
Sa() && !_a("observable") && (Symbol.observable = Symbol("observable"));
var Fm = Ea("iterator"), Ri = Ea("observable"), Oc = Ea("species");
function Wr(e, t) {
  var r = e[t];
  if (r != null) {
    if (typeof r != "function") throw new TypeError(r + " is not a function");
    return r;
  }
}
function Yt(e) {
  var t = e.constructor;
  return t !== void 0 && (t = t[Oc], t === null && (t = void 0)), t !== void 0 ? t : H;
}
function Cm(e) {
  return e instanceof H;
}
function Nt(e) {
  Nt.log ? Nt.log(e) : setTimeout(function() {
    throw e;
  });
}
function Mr(e) {
  Promise.resolve().then(function() {
    try {
      e();
    } catch (t) {
      Nt(t);
    }
  });
}
function kc(e) {
  var t = e._cleanup;
  if (t !== void 0 && (e._cleanup = void 0, !!t))
    try {
      if (typeof t == "function")
        t();
      else {
        var r = Wr(t, "unsubscribe");
        r && r.call(t);
      }
    } catch (n) {
      Nt(n);
    }
}
function Mi(e) {
  e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function Am(e) {
  var t = e._queue;
  if (t) {
    e._queue = void 0, e._state = "ready";
    for (var r = 0; r < t.length && (xc(e, t[r].type, t[r].value), e._state !== "closed"); ++r)
      ;
  }
}
function xc(e, t, r) {
  e._state = "running";
  var n = e._observer;
  try {
    var i = Wr(n, t);
    switch (t) {
      case "next":
        i && i.call(n, r);
        break;
      case "error":
        if (Mi(e), i) i.call(n, r);
        else throw r;
        break;
      case "complete":
        Mi(e), i && i.call(n);
        break;
    }
  } catch (a) {
    Nt(a);
  }
  e._state === "closed" ? kc(e) : e._state === "running" && (e._state = "ready");
}
function Un(e, t, r) {
  if (e._state !== "closed") {
    if (e._state === "buffering") {
      e._queue.push({
        type: t,
        value: r
      });
      return;
    }
    if (e._state !== "ready") {
      e._state = "buffering", e._queue = [{
        type: t,
        value: r
      }], Mr(function() {
        return Am(e);
      });
      return;
    }
    xc(e, t, r);
  }
}
var $m = /* @__PURE__ */ (function() {
  function e(r, n) {
    this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
    var i = new Pm(this);
    try {
      this._cleanup = n.call(void 0, i);
    } catch (a) {
      i.error(a);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var t = e.prototype;
  return t.unsubscribe = function() {
    this._state !== "closed" && (Mi(this), kc(this));
  }, ba(e, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), e;
})(), Pm = /* @__PURE__ */ (function() {
  function e(r) {
    this._subscription = r;
  }
  var t = e.prototype;
  return t.next = function(n) {
    Un(this._subscription, "next", n);
  }, t.error = function(n) {
    Un(this._subscription, "error", n);
  }, t.complete = function() {
    Un(this._subscription, "complete");
  }, ba(e, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), e;
})(), H = /* @__PURE__ */ (function() {
  function e(r) {
    if (!(this instanceof e)) throw new TypeError("Observable cannot be called as a function");
    if (typeof r != "function") throw new TypeError("Observable initializer must be a function");
    this._subscriber = r;
  }
  var t = e.prototype;
  return t.subscribe = function(n) {
    return (typeof n != "object" || n === null) && (n = {
      next: n,
      error: arguments[1],
      complete: arguments[2]
    }), new $m(n, this._subscriber);
  }, t.forEach = function(n) {
    var i = this;
    return new Promise(function(a, o) {
      if (typeof n != "function") {
        o(new TypeError(n + " is not a function"));
        return;
      }
      function s() {
        u.unsubscribe(), a();
      }
      var u = i.subscribe({
        next: function(c) {
          try {
            n(c, s);
          } catch (l) {
            o(l), u.unsubscribe();
          }
        },
        error: o,
        complete: a
      });
    });
  }, t.map = function(n) {
    var i = this;
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    var a = Yt(this);
    return new a(function(o) {
      return i.subscribe({
        next: function(s) {
          try {
            s = n(s);
          } catch (u) {
            return o.error(u);
          }
          o.next(s);
        },
        error: function(s) {
          o.error(s);
        },
        complete: function() {
          o.complete();
        }
      });
    });
  }, t.filter = function(n) {
    var i = this;
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    var a = Yt(this);
    return new a(function(o) {
      return i.subscribe({
        next: function(s) {
          try {
            if (!n(s)) return;
          } catch (u) {
            return o.error(u);
          }
          o.next(s);
        },
        error: function(s) {
          o.error(s);
        },
        complete: function() {
          o.complete();
        }
      });
    });
  }, t.reduce = function(n) {
    var i = this;
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    var a = Yt(this), o = arguments.length > 1, s = !1, u = arguments[1], c = u;
    return new a(function(l) {
      return i.subscribe({
        next: function(d) {
          var f = !s;
          if (s = !0, !f || o)
            try {
              c = n(c, d);
            } catch (p) {
              return l.error(p);
            }
          else
            c = d;
        },
        error: function(d) {
          l.error(d);
        },
        complete: function() {
          if (!s && !o) return l.error(new TypeError("Cannot reduce an empty sequence"));
          l.next(c), l.complete();
        }
      });
    });
  }, t.concat = function() {
    for (var n = this, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    var s = Yt(this);
    return new s(function(u) {
      var c, l = 0;
      function d(f) {
        c = f.subscribe({
          next: function(p) {
            u.next(p);
          },
          error: function(p) {
            u.error(p);
          },
          complete: function() {
            l === a.length ? (c = void 0, u.complete()) : d(s.from(a[l++]));
          }
        });
      }
      return d(n), function() {
        c && (c.unsubscribe(), c = void 0);
      };
    });
  }, t.flatMap = function(n) {
    var i = this;
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    var a = Yt(this);
    return new a(function(o) {
      var s = [], u = i.subscribe({
        next: function(l) {
          if (n)
            try {
              l = n(l);
            } catch (f) {
              return o.error(f);
            }
          var d = a.from(l).subscribe({
            next: function(f) {
              o.next(f);
            },
            error: function(f) {
              o.error(f);
            },
            complete: function() {
              var f = s.indexOf(d);
              f >= 0 && s.splice(f, 1), c();
            }
          });
          s.push(d);
        },
        error: function(l) {
          o.error(l);
        },
        complete: function() {
          c();
        }
      });
      function c() {
        u.closed && s.length === 0 && o.complete();
      }
      return function() {
        s.forEach(function(l) {
          return l.unsubscribe();
        }), u.unsubscribe();
      };
    });
  }, t[Ri] = function() {
    return this;
  }, e.from = function(n) {
    var i = typeof this == "function" ? this : e;
    if (n == null) throw new TypeError(n + " is not an object");
    var a = Wr(n, Ri);
    if (a) {
      var o = a.call(n);
      if (Object(o) !== o) throw new TypeError(o + " is not an object");
      return Cm(o) && o.constructor === i ? o : new i(function(s) {
        return o.subscribe(s);
      });
    }
    if (_a("iterator") && (a = Wr(n, Fm), a))
      return new i(function(s) {
        Mr(function() {
          if (!s.closed) {
            for (var u = km(a.call(n)), c; !(c = u()).done; ) {
              var l = c.value;
              if (s.next(l), s.closed) return;
            }
            s.complete();
          }
        });
      });
    if (Array.isArray(n))
      return new i(function(s) {
        Mr(function() {
          if (!s.closed) {
            for (var u = 0; u < n.length; ++u)
              if (s.next(n[u]), s.closed) return;
            s.complete();
          }
        });
      });
    throw new TypeError(n + " is not observable");
  }, e.of = function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = typeof this == "function" ? this : e;
    return new o(function(s) {
      Mr(function() {
        if (!s.closed) {
          for (var u = 0; u < i.length; ++u)
            if (s.next(i[u]), s.closed) return;
          s.complete();
        }
      });
    });
  }, ba(e, null, [{
    key: Oc,
    get: function() {
      return this;
    }
  }]), e;
})();
Sa() && Object.defineProperty(H, Symbol("extensions"), {
  value: {
    symbol: Ri,
    hostReportError: Nt
  },
  configurable: !0
});
function Nm(e) {
  var t, r = e.Symbol;
  if (typeof r == "function")
    if (r.observable)
      t = r.observable;
    else {
      typeof r.for == "function" ? t = r.for("https://github.com/benlesh/symbol-observable") : t = r("https://github.com/benlesh/symbol-observable");
      try {
        r.observable = t;
      } catch {
      }
    }
  else
    t = "@@observable";
  return t;
}
var bt;
typeof self < "u" ? bt = self : typeof window < "u" ? bt = window : typeof global < "u" ? bt = global : typeof module < "u" ? bt = module : bt = Function("return this")();
Nm(bt);
var Wo = H.prototype, Ho = "@@observable";
Wo[Ho] || (Wo[Ho] = function() {
  return this;
});
function Rm(e) {
  return e.catch(function() {
  }), e;
}
var Mm = Object.prototype.toString;
function Fc(e) {
  return Li(e);
}
function Li(e, t) {
  switch (Mm.call(e)) {
    case "[object Array]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var r = e.slice(0);
      return t.set(e, r), r.forEach(function(i, a) {
        r[a] = Li(i, t);
      }), r;
    }
    case "[object Object]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var n = Object.create(Object.getPrototypeOf(e));
      return t.set(e, n), Object.keys(e).forEach(function(i) {
        n[i] = Li(e[i], t);
      }), n;
    }
    default:
      return e;
  }
}
function Lm(e) {
  var t = /* @__PURE__ */ new Set([e]);
  return t.forEach(function(r) {
    ae(r) && jm(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
      ae(r[n]) && t.add(r[n]);
    });
  }), e;
}
function jm(e) {
  if (globalThis.__DEV__ !== !1 && !Object.isFrozen(e))
    try {
      Object.freeze(e);
    } catch (t) {
      if (t instanceof TypeError)
        return null;
      throw t;
    }
  return e;
}
function Hr(e) {
  return globalThis.__DEV__ !== !1 && Lm(e), e;
}
function ur(e, t, r) {
  var n = [];
  e.forEach(function(i) {
    return i[t] && n.push(i);
  }), n.forEach(function(i) {
    return i[t](r);
  });
}
function Vn(e, t, r) {
  return new H(function(n) {
    var i = {
      // Normally we would initialize promiseQueue to Promise.resolve(), but
      // in this case, for backwards compatibility, we need to be careful to
      // invoke the first callback synchronously.
      then: function(u) {
        return new Promise(function(c) {
          return c(u());
        });
      }
    };
    function a(u, c) {
      return function(l) {
        if (u) {
          var d = function() {
            return n.closed ? (
              /* will be swallowed */
              0
            ) : u(l);
          };
          i = i.then(d, d).then(function(f) {
            return n.next(f);
          }, function(f) {
            return n.error(f);
          });
        } else
          n[c](l);
      };
    }
    var o = {
      next: a(t, "next"),
      error: a(r, "error"),
      complete: function() {
        i.then(function() {
          return n.complete();
        });
      }
    }, s = e.subscribe(o);
    return function() {
      return s.unsubscribe();
    };
  });
}
function Cc(e) {
  function t(r) {
    Object.defineProperty(e, r, { value: H });
  }
  return rc && Symbol.species && t(Symbol.species), t("@@species"), e;
}
function Yo(e) {
  return e && typeof e.then == "function";
}
var St = (
  /** @class */
  (function(e) {
    Ee(t, e);
    function t(r) {
      var n = e.call(this, function(i) {
        return n.addObserver(i), function() {
          return n.removeObserver(i);
        };
      }) || this;
      return n.observers = /* @__PURE__ */ new Set(), n.promise = new Promise(function(i, a) {
        n.resolve = i, n.reject = a;
      }), n.handlers = {
        next: function(i) {
          n.sub !== null && (n.latest = ["next", i], n.notify("next", i), ur(n.observers, "next", i));
        },
        error: function(i) {
          var a = n.sub;
          a !== null && (a && setTimeout(function() {
            return a.unsubscribe();
          }), n.sub = null, n.latest = ["error", i], n.reject(i), n.notify("error", i), ur(n.observers, "error", i));
        },
        complete: function() {
          var i = n, a = i.sub, o = i.sources, s = o === void 0 ? [] : o;
          if (a !== null) {
            var u = s.shift();
            u ? Yo(u) ? u.then(function(c) {
              return n.sub = c.subscribe(n.handlers);
            }, n.handlers.error) : n.sub = u.subscribe(n.handlers) : (a && setTimeout(function() {
              return a.unsubscribe();
            }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), ur(n.observers, "complete"));
          }
        }
      }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(i) {
        n.reject(i), n.sources = [], n.handlers.error(i);
      }, n.promise.catch(function(i) {
      }), typeof r == "function" && (r = [new H(r)]), Yo(r) ? r.then(function(i) {
        return n.start(i);
      }, n.handlers.error) : n.start(r), n;
    }
    return t.prototype.start = function(r) {
      this.sub === void 0 && (this.sources = Array.from(r), this.handlers.complete());
    }, t.prototype.deliverLastMessage = function(r) {
      if (this.latest) {
        var n = this.latest[0], i = r[n];
        i && i.call(r, this.latest[1]), this.sub === null && n === "next" && r.complete && r.complete();
      }
    }, t.prototype.addObserver = function(r) {
      this.observers.has(r) || (this.deliverLastMessage(r), this.observers.add(r));
    }, t.prototype.removeObserver = function(r) {
      this.observers.delete(r) && this.observers.size < 1 && this.handlers.complete();
    }, t.prototype.notify = function(r, n) {
      var i = this.nextResultListeners;
      i.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), i.forEach(function(a) {
        return a(r, n);
      }));
    }, t.prototype.beforeNext = function(r) {
      var n = !1;
      this.nextResultListeners.add(function(i, a) {
        n || (n = !0, r(i, a));
      });
    }, t;
  })(H)
);
Cc(St);
function xt(e) {
  return "incremental" in e;
}
function qm(e) {
  return "hasNext" in e && "data" in e;
}
function Um(e) {
  return xt(e) || qm(e);
}
function Vm(e) {
  return ae(e) && "payload" in e;
}
function Ac(e, t) {
  var r = e, n = new tt();
  return xt(t) && Ce(t.incremental) && t.incremental.forEach(function(i) {
    for (var a = i.data, o = i.path, s = o.length - 1; s >= 0; --s) {
      var u = o[s], c = !isNaN(+u), l = c ? [] : {};
      l[u] = a, a = l;
    }
    r = n.merge(r, a);
  }), r;
}
function Lr(e) {
  var t = ji(e);
  return Ce(t);
}
function ji(e) {
  var t = Ce(e.errors) ? e.errors.slice(0) : [];
  return xt(e) && Ce(e.incremental) && e.incremental.forEach(function(r) {
    r.errors && t.push.apply(t, r.errors);
  }), t;
}
function Rt() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = /* @__PURE__ */ Object.create(null);
  return e.forEach(function(n) {
    n && Object.keys(n).forEach(function(i) {
      var a = n[i];
      a !== void 0 && (r[i] = a);
    });
  }), r;
}
function Bn(e, t) {
  return Rt(e, t, t.variables && {
    variables: Rt(_(_({}, e && e.variables), t.variables))
  });
}
function Gn(e) {
  return new H(function(t) {
    t.error(e);
  });
}
var $c = function(e, t, r) {
  var n = new Error(r);
  throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = t, n;
};
function Bm(e) {
  for (var t = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], r = 0, n = Object.keys(e); r < n.length; r++) {
    var i = n[r];
    if (t.indexOf(i) < 0)
      throw ve(46, i);
  }
  return e;
}
function Gm(e, t) {
  var r = _({}, e), n = function(a) {
    typeof a == "function" ? r = _(_({}, r), a(r)) : r = _(_({}, r), a);
  }, i = function() {
    return _({}, r);
  };
  return Object.defineProperty(t, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(t, "getContext", {
    enumerable: !1,
    value: i
  }), t;
}
function zm(e) {
  var t = {
    variables: e.variables || {},
    extensions: e.extensions || {},
    operationName: e.operationName,
    query: e.query
  };
  return t.operationName || (t.operationName = typeof t.query != "string" ? nr(t.query) || void 0 : ""), t;
}
function Qm(e, t) {
  var r = _({}, e), n = new Set(Object.keys(e));
  return Te(t, {
    Variable: function(i, a, o) {
      o && o.kind !== "VariableDefinition" && n.delete(i.name.value);
    }
  }), n.forEach(function(i) {
    delete r[i];
  }), r;
}
function Jo(e, t) {
  return t ? t(e) : H.of();
}
function Jt(e) {
  return typeof e == "function" ? new Ie(e) : e;
}
function Ar(e) {
  return e.request.length <= 1;
}
var Ie = (
  /** @class */
  (function() {
    function e(t) {
      t && (this.request = t);
    }
    return e.empty = function() {
      return new e(function() {
        return H.of();
      });
    }, e.from = function(t) {
      return t.length === 0 ? e.empty() : t.map(Jt).reduce(function(r, n) {
        return r.concat(n);
      });
    }, e.split = function(t, r, n) {
      var i = Jt(r), a = Jt(n || new e(Jo)), o;
      return Ar(i) && Ar(a) ? o = new e(function(s) {
        return t(s) ? i.request(s) || H.of() : a.request(s) || H.of();
      }) : o = new e(function(s, u) {
        return t(s) ? i.request(s, u) || H.of() : a.request(s, u) || H.of();
      }), Object.assign(o, { left: i, right: a });
    }, e.execute = function(t, r) {
      return t.request(Gm(r.context, zm(Bm(r)))) || H.of();
    }, e.concat = function(t, r) {
      var n = Jt(t);
      if (Ar(n))
        return globalThis.__DEV__ !== !1 && $.warn(38, n), n;
      var i = Jt(r), a;
      return Ar(i) ? a = new e(function(o) {
        return n.request(o, function(s) {
          return i.request(s) || H.of();
        }) || H.of();
      }) : a = new e(function(o, s) {
        return n.request(o, function(u) {
          return i.request(u, s) || H.of();
        }) || H.of();
      }), Object.assign(a, { left: n, right: i });
    }, e.prototype.split = function(t, r, n) {
      return this.concat(e.split(t, r, n || new e(Jo)));
    }, e.prototype.concat = function(t) {
      return e.concat(this, t);
    }, e.prototype.request = function(t, r) {
      throw ve(39);
    }, e.prototype.onError = function(t, r) {
      if (r && r.error)
        return r.error(t), !1;
      throw t;
    }, e.prototype.setOnError = function(t) {
      return this.onError = t, this;
    }, e;
  })()
), Wm = Ie.from, Hm = Ie.split, qi = Ie.execute;
function Ym(e) {
  var t, r = e[Symbol.asyncIterator]();
  return t = {
    next: function() {
      return r.next();
    }
  }, t[Symbol.asyncIterator] = function() {
    return this;
  }, t;
}
function Jm(e) {
  var t = null, r = null, n = !1, i = [], a = [];
  function o(d) {
    if (!r) {
      if (a.length) {
        var f = a.shift();
        if (Array.isArray(f) && f[0])
          return f[0]({ value: d, done: !1 });
      }
      i.push(d);
    }
  }
  function s(d) {
    r = d;
    var f = a.slice();
    f.forEach(function(p) {
      p[1](d);
    }), !t || t();
  }
  function u() {
    n = !0;
    var d = a.slice();
    d.forEach(function(f) {
      f[0]({ value: void 0, done: !0 });
    }), !t || t();
  }
  t = function() {
    t = null, e.removeListener("data", o), e.removeListener("error", s), e.removeListener("end", u), e.removeListener("finish", u), e.removeListener("close", u);
  }, e.on("data", o), e.on("error", s), e.on("end", u), e.on("finish", u), e.on("close", u);
  function c() {
    return new Promise(function(d, f) {
      if (r)
        return f(r);
      if (i.length)
        return d({ value: i.shift(), done: !1 });
      if (n)
        return d({ value: void 0, done: !0 });
      a.push([d, f]);
    });
  }
  var l = {
    next: function() {
      return c();
    }
  };
  return sn && (l[Symbol.asyncIterator] = function() {
    return this;
  }), l;
}
function Km(e) {
  var t = !1, r = {
    next: function() {
      return t ? Promise.resolve({
        value: void 0,
        done: !0
      }) : (t = !0, new Promise(function(n, i) {
        e.then(function(a) {
          n({ value: a, done: !1 });
        }).catch(i);
      }));
    }
  };
  return sn && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
function Ko(e) {
  var t = {
    next: function() {
      return e.read();
    }
  };
  return sn && (t[Symbol.asyncIterator] = function() {
    return this;
  }), t;
}
function Xm(e) {
  return !!e.body;
}
function Zm(e) {
  return !!e.getReader;
}
function eg(e) {
  return !!(sn && e[Symbol.asyncIterator]);
}
function tg(e) {
  return !!e.stream;
}
function rg(e) {
  return !!e.arrayBuffer;
}
function ng(e) {
  return !!e.pipe;
}
function ig(e) {
  var t = e;
  if (Xm(e) && (t = e.body), eg(t))
    return Ym(t);
  if (Zm(t))
    return Ko(t.getReader());
  if (tg(t))
    return Ko(t.stream().getReader());
  if (rg(t))
    return Km(t.arrayBuffer());
  if (ng(t))
    return Jm(t);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var pn = Symbol();
function Pc(e) {
  return e.extensions ? Array.isArray(e.extensions[pn]) : !1;
}
function Nc(e) {
  return e.hasOwnProperty("graphQLErrors");
}
var ag = function(e) {
  var t = ge(ge(ge([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
  return e.networkError && t.push(e.networkError), t.map(function(r) {
    return ae(r) && r.message || "Error message not found.";
  }).join(`
`);
}, Qe = (
  /** @class */
  (function(e) {
    Ee(t, e);
    function t(r) {
      var n = r.graphQLErrors, i = r.protocolErrors, a = r.clientErrors, o = r.networkError, s = r.errorMessage, u = r.extraInfo, c = e.call(this, s) || this;
      return c.name = "ApolloError", c.graphQLErrors = n || [], c.protocolErrors = i || [], c.clientErrors = a || [], c.networkError = o || null, c.message = s || ag(c), c.extraInfo = u, c.cause = ge(ge(ge([
        o
      ], n || [], !0), i || [], !0), a || [], !0).find(function(l) {
        return !!l;
      }) || null, c.__proto__ = t.prototype, c;
    }
    return t;
  })(Error)
), Xo = Object.prototype.hasOwnProperty;
function og(e, t) {
  return Be(this, void 0, void 0, function() {
    var r, n, i, a, o, s, u, c, l, d, f, p, y, m, v, g, b, E, D, I, O, x, P, L;
    return Ge(this, function(q) {
      switch (q.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          r = new TextDecoder("utf-8"), n = (L = e.headers) === null || L === void 0 ? void 0 : L.get("content-type"), i = "boundary=", a = n?.includes(i) ? n?.substring(n?.indexOf(i) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", o = `\r
--`.concat(a), s = "", u = ig(e), c = !0, q.label = 1;
        case 1:
          return c ? [4, u.next()] : [3, 3];
        case 2:
          for (l = q.sent(), d = l.value, f = l.done, p = typeof d == "string" ? d : r.decode(d), y = s.length - o.length + 1, c = !f, s += p, m = s.indexOf(o, y); m > -1; ) {
            if (v = void 0, x = [
              s.slice(0, m),
              s.slice(m + o.length)
            ], v = x[0], s = x[1], g = v.indexOf(`\r
\r
`), b = sg(v.slice(0, g)), E = b["content-type"], E && E.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (D = v.slice(g), D) {
              if (I = Rc(e, D), Object.keys(I).length > 1 || "data" in I || "incremental" in I || "errors" in I || "payload" in I)
                if (Vm(I)) {
                  if (O = {}, "payload" in I) {
                    if (Object.keys(I).length === 1 && I.payload === null)
                      return [
                        2
                        /*return*/
                      ];
                    O = _({}, I.payload);
                  }
                  "errors" in I && (O = _(_({}, O), { extensions: _(_({}, "extensions" in O ? O.extensions : null), (P = {}, P[pn] = I.errors, P)) })), t(O);
                } else
                  t(I);
              else if (
                // If the chunk contains only a "hasNext: false", we can call
                // observer.complete() immediately.
                Object.keys(I).length === 1 && "hasNext" in I && !I.hasNext
              )
                return [
                  2
                  /*return*/
                ];
            }
            m = s.indexOf(o);
          }
          return [3, 1];
        case 3:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function sg(e) {
  var t = {};
  return e.split(`
`).forEach(function(r) {
    var n = r.indexOf(":");
    if (n > -1) {
      var i = r.slice(0, n).trim().toLowerCase(), a = r.slice(n + 1).trim();
      t[i] = a;
    }
  }), t;
}
function Rc(e, t) {
  if (e.status >= 300) {
    var r = function() {
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    };
    $c(e, r(), "Response not successful: Received status code ".concat(e.status));
  }
  try {
    return JSON.parse(t);
  } catch (i) {
    var n = i;
    throw n.name = "ServerParseError", n.response = e, n.statusCode = e.status, n.bodyText = t, n;
  }
}
function ug(e, t) {
  e.result && e.result.errors && e.result.data && t.next(e.result), t.error(e);
}
function Mc(e) {
  return function(t) {
    return t.text().then(function(r) {
      return Rc(t, r);
    }).then(function(r) {
      return !Array.isArray(r) && !Xo.call(r, "data") && !Xo.call(r, "errors") && $c(t, r, "Server response was missing for query '".concat(Array.isArray(e) ? e.map(function(n) {
        return n.operationName;
      }) : e.operationName, "'.")), r;
    });
  };
}
var vr = function(e, t) {
  var r;
  try {
    r = JSON.stringify(e);
  } catch (i) {
    var n = ve(42, t, i.message);
    throw n.parseError = i, n;
  }
  return r;
}, cg = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, lg = {
  // headers are case insensitive (https://stackoverflow.com/a/5259004)
  accept: "*/*",
  // The content-type header describes the type of the body of the request, and
  // so it typically only is sent with requests that actually have bodies. One
  // could imagine that Apollo Client would remove this header when constructing
  // a GET request (which has no body), but we historically have not done that.
  // This means that browsers will preflight all Apollo Client requests (even
  // GET requests). Apollo Server's CSRF prevention feature (introduced in
  // AS3.7) takes advantage of this fact and does not block requests with this
  // header. If you want to drop this header from GET requests, then you should
  // probably replace it with a `apollo-require-preflight` header, or servers
  // with CSRF prevention enabled might block your GET request. See
  // https://www.apollographql.com/docs/apollo-server/security/cors/#preventing-cross-site-request-forgery-csrf
  // for more details.
  "content-type": "application/json"
}, fg = {
  method: "POST"
}, Lc = {
  http: cg,
  headers: lg,
  options: fg
}, jc = function(e, t) {
  return t(e);
};
function qc(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = {}, a = {};
  r.forEach(function(d) {
    i = _(_(_({}, i), d.options), { headers: _(_({}, i.headers), d.headers) }), d.credentials && (i.credentials = d.credentials), a = _(_({}, a), d.http);
  }), i.headers && (i.headers = dg(i.headers, a.preserveHeaderCase));
  var o = e.operationName, s = e.extensions, u = e.variables, c = e.query, l = { operationName: o, variables: u };
  return a.includeExtensions && (l.extensions = s), a.includeQuery && (l.query = t(c, We)), {
    options: i,
    body: l
  };
}
function dg(e, t) {
  if (!t) {
    var r = {};
    return Object.keys(Object(e)).forEach(function(a) {
      r[a.toLowerCase()] = e[a];
    }), r;
  }
  var n = {};
  Object.keys(Object(e)).forEach(function(a) {
    n[a.toLowerCase()] = {
      originalName: a,
      value: e[a]
    };
  });
  var i = {};
  return Object.keys(n).forEach(function(a) {
    i[n[a].originalName] = n[a].value;
  }), i;
}
var pg = function(e) {
  if (!e && typeof fetch > "u")
    throw ve(40);
}, hg = function() {
  if (typeof AbortController > "u")
    return { controller: !1, signal: !1 };
  var e = new AbortController(), t = e.signal;
  return { controller: e, signal: t };
}, Uc = function(e, t) {
  var r = e.getContext(), n = r.uri;
  return n || (typeof t == "function" ? t(e) : t || "/graphql");
};
function Vc(e, t) {
  var r = [], n = function(d, f) {
    r.push("".concat(d, "=").concat(encodeURIComponent(f)));
  };
  if ("query" in t && n("query", t.query), t.operationName && n("operationName", t.operationName), t.variables) {
    var i = void 0;
    try {
      i = vr(t.variables, "Variables map");
    } catch (d) {
      return { parseError: d };
    }
    n("variables", i);
  }
  if (t.extensions) {
    var a = void 0;
    try {
      a = vr(t.extensions, "Extensions map");
    } catch (d) {
      return { parseError: d };
    }
    n("extensions", a);
  }
  var o = "", s = e, u = e.indexOf("#");
  u !== -1 && (o = e.substr(u), s = e.substr(0, u));
  var c = s.indexOf("?") === -1 ? "?" : "&", l = s + c + r.join("&") + o;
  return { newURI: l };
}
var Zo = we(function() {
  return fetch;
}), mg = function(e) {
  e === void 0 && (e = {});
  var t = e.uri, r = t === void 0 ? "/graphql" : t, n = e.fetch, i = e.print, a = i === void 0 ? jc : i, o = e.includeExtensions, s = e.preserveHeaderCase, u = e.useGETForQueries, c = e.includeUnusedVariables, l = c === void 0 ? !1 : c, d = Ae(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  globalThis.__DEV__ !== !1 && pg(n || Zo);
  var f = {
    http: { includeExtensions: o, preserveHeaderCase: s },
    options: d.fetchOptions,
    credentials: d.credentials,
    headers: d.headers
  };
  return new Ie(function(p) {
    var y = Uc(p, r), m = p.getContext(), v = {};
    if (m.clientAwareness) {
      var g = m.clientAwareness, b = g.name, E = g.version;
      b && (v["apollographql-client-name"] = b), E && (v["apollographql-client-version"] = E);
    }
    var D = _(_({}, v), m.headers), I = {
      http: m.http,
      options: m.fetchOptions,
      credentials: m.credentials,
      headers: D
    };
    if (mr(["client"], p.query)) {
      var O = Ic(p.query);
      if (!O)
        return Gn(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      p.query = O;
    }
    var x = qc(p, a, Lc, f, I), P = x.options, L = x.body;
    L.variables && !l && (L.variables = Qm(L.variables, p.query));
    var q;
    !P.signal && typeof AbortController < "u" && (q = new AbortController(), P.signal = q.signal);
    var G = function(F) {
      return F.kind === "OperationDefinition" && F.operation === "mutation";
    }, ce = function(F) {
      return F.kind === "OperationDefinition" && F.operation === "subscription";
    }, ne = ce(Vt(p.query)), he = mr(["defer"], p.query);
    if (u && !p.query.definitions.some(G) && (P.method = "GET"), he || ne) {
      P.headers = P.headers || {};
      var M = "multipart/mixed;";
      ne && he && globalThis.__DEV__ !== !1 && $.warn(41), ne ? M += "boundary=graphql;subscriptionSpec=1.0,application/json" : he && (M += "deferSpec=20220824,application/json"), P.headers.accept = M;
    }
    if (P.method === "GET") {
      var J = Vc(y, L), S = J.newURI, w = J.parseError;
      if (w)
        return Gn(w);
      y = S;
    } else
      try {
        P.body = vr(L, "Payload");
      } catch (F) {
        return Gn(F);
      }
    return new H(function(F) {
      var j = n || we(function() {
        return fetch;
      }) || Zo, N = F.next.bind(F);
      return j(y, P).then(function(V) {
        var K;
        p.setContext({ response: V });
        var X = (K = V.headers) === null || K === void 0 ? void 0 : K.get("content-type");
        return X !== null && /^multipart\/mixed/i.test(X) ? og(V, N) : Mc(p)(V).then(N);
      }).then(function() {
        q = void 0, F.complete();
      }).catch(function(V) {
        q = void 0, ug(V, F);
      }), function() {
        q && q.abort();
      };
    });
  });
}, gg = (
  /** @class */
  (function(e) {
    Ee(t, e);
    function t(r) {
      r === void 0 && (r = {});
      var n = e.call(this, mg(r).request) || this;
      return n.options = r, n;
    }
    return t;
  })(Ie)
);
const { toString: es, hasOwnProperty: yg } = Object.prototype, ts = Function.prototype.toString, Ui = /* @__PURE__ */ new Map();
function re(e, t) {
  try {
    return Vi(e, t);
  } finally {
    Ui.clear();
  }
}
function Vi(e, t) {
  if (e === t)
    return !0;
  const r = es.call(e), n = es.call(t);
  if (r !== n)
    return !1;
  switch (r) {
    case "[object Array]":
      if (e.length !== t.length)
        return !1;
    // Fall through to object case...
    case "[object Object]": {
      if (ns(e, t))
        return !0;
      const i = rs(e), a = rs(t), o = i.length;
      if (o !== a.length)
        return !1;
      for (let s = 0; s < o; ++s)
        if (!yg.call(t, i[s]))
          return !1;
      for (let s = 0; s < o; ++s) {
        const u = i[s];
        if (!Vi(e[u], t[u]))
          return !1;
      }
      return !0;
    }
    case "[object Error]":
      return e.name === t.name && e.message === t.message;
    case "[object Number]":
      if (e !== e)
        return t !== t;
    // Fall through to shared +a === +b case...
    case "[object Boolean]":
    case "[object Date]":
      return +e == +t;
    case "[object RegExp]":
    case "[object String]":
      return e == `${t}`;
    case "[object Map]":
    case "[object Set]": {
      if (e.size !== t.size)
        return !1;
      if (ns(e, t))
        return !0;
      const i = e.entries(), a = r === "[object Map]";
      for (; ; ) {
        const o = i.next();
        if (o.done)
          break;
        const [s, u] = o.value;
        if (!t.has(s) || a && !Vi(u, t.get(s)))
          return !1;
      }
      return !0;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    // Buffer, in Node.js.
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      e = new Uint8Array(e), t = new Uint8Array(t);
    // Fall through...
    case "[object DataView]": {
      let i = e.byteLength;
      if (i === t.byteLength)
        for (; i-- && e[i] === t[i]; )
          ;
      return i === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const i = ts.call(e);
      return i !== ts.call(t) ? !1 : !Sg(i, bg);
    }
  }
  return !1;
}
function rs(e) {
  return Object.keys(e).filter(vg, e);
}
function vg(e) {
  return this[e] !== void 0;
}
const bg = "{ [native code] }";
function Sg(e, t) {
  const r = e.length - t.length;
  return r >= 0 && e.indexOf(t, r) === r;
}
function ns(e, t) {
  let r = Ui.get(e);
  if (r) {
    if (r.has(t))
      return !0;
  } else
    Ui.set(e, r = /* @__PURE__ */ new Set());
  return r.add(t), !1;
}
function Bc(e, t, r, n) {
  var i = t.data, a = Ae(t, ["data"]), o = r.data, s = Ae(r, ["data"]);
  return re(a, s) && jr(Vt(e).selectionSet, i, o, {
    fragmentMap: jt(Ut(e)),
    variables: n
  });
}
function jr(e, t, r, n) {
  if (t === r)
    return !0;
  var i = /* @__PURE__ */ new Set();
  return e.selections.every(function(a) {
    if (i.has(a) || (i.add(a), !Er(a, n.variables)) || is(a))
      return !0;
    if (Ze(a)) {
      var o = Re(a), s = t && t[o], u = r && r[o], c = a.selectionSet;
      if (!c)
        return re(s, u);
      var l = Array.isArray(s), d = Array.isArray(u);
      if (l !== d)
        return !1;
      if (l && d) {
        var f = s.length;
        if (u.length !== f)
          return !1;
        for (var p = 0; p < f; ++p)
          if (!jr(c, s[p], u[p], n))
            return !1;
        return !0;
      }
      return jr(c, s, u, n);
    } else {
      var y = un(a, n.fragmentMap);
      if (y)
        return is(y) ? !0 : jr(
          y.selectionSet,
          // Notice that we reuse the same aResult and bResult values here,
          // since the fragment ...spread does not specify a field name, but
          // consists of multiple fields (within the fragment's selection set)
          // that should be applied to the current result value(s).
          t,
          r,
          n
        );
    }
  });
}
function is(e) {
  return !!e.directives && e.directives.some(_g);
}
function _g(e) {
  return e.name.value === "nonreactive";
}
var Gc = ht ? WeakMap : Map, zc = pa ? WeakSet : Set, Da = new Dr(), as = !1;
function Qc() {
  as || (as = !0, globalThis.__DEV__ !== !1 && $.warn(52));
}
function Wc(e, t, r) {
  return Da.withValue(!0, function() {
    var n = ir(e, t, r, !1);
    return Object.isFrozen(e) && Hr(n), n;
  });
}
function Eg(e, t) {
  if (t.has(e))
    return t.get(e);
  var r = Array.isArray(e) ? [] : /* @__PURE__ */ Object.create(null);
  return t.set(e, r), r;
}
function ir(e, t, r, n, i) {
  var a, o = r.knownChanged, s = Eg(e, r.mutableTargets);
  if (Array.isArray(e)) {
    for (var u = 0, c = Array.from(e.entries()); u < c.length; u++) {
      var l = c[u], d = l[0], f = l[1];
      if (f === null) {
        s[d] = null;
        continue;
      }
      var p = ir(f, t, r, n, globalThis.__DEV__ !== !1 ? "".concat(i || "", "[").concat(d, "]") : void 0);
      o.has(p) && o.add(s), s[d] = p;
    }
    return o.has(s) ? s : e;
  }
  for (var y = 0, m = t.selections; y < m.length; y++) {
    var v = m[y], g = void 0;
    if (n && o.add(s), v.kind === C.FIELD) {
      var b = Re(v), E = v.selectionSet;
      if (g = s[b] || e[b], g === void 0)
        continue;
      if (E && g !== null) {
        var p = ir(e[b], E, r, n, globalThis.__DEV__ !== !1 ? "".concat(i || "", ".").concat(b) : void 0);
        o.has(p) && (g = p);
      }
      globalThis.__DEV__ === !1 && (s[b] = g), globalThis.__DEV__ !== !1 && (n && b !== "__typename" && // either the field is not present in the memo object
      // or it has a `get` descriptor, not a `value` descriptor
      // => it is a warning accessor and we can overwrite it
      // with another accessor
      !(!((a = Object.getOwnPropertyDescriptor(s, b)) === null || a === void 0) && a.value) ? Object.defineProperty(s, b, Dg(b, g, i || "", r.operationName, r.operationType)) : (delete s[b], s[b] = g));
    }
    if (v.kind === C.INLINE_FRAGMENT && (!v.typeCondition || r.cache.fragmentMatches(v, e.__typename)) && (g = ir(e, v.selectionSet, r, n, i)), v.kind === C.FRAGMENT_SPREAD) {
      var D = v.name.value, I = r.fragmentMap[D] || (r.fragmentMap[D] = r.cache.lookupFragment(D));
      $(I, 47, D);
      var O = Ih(v);
      O !== "mask" && (g = ir(e, I.selectionSet, r, O === "migrate", i));
    }
    o.has(g) && o.add(s);
  }
  return "__typename" in e && !("__typename" in s) && (s.__typename = e.__typename), Object.keys(s).length !== Object.keys(e).length && o.add(s), o.has(s) ? s : e;
}
function Dg(e, t, r, n, i) {
  var a = function() {
    return Da.getValue() || (globalThis.__DEV__ !== !1 && $.warn(48, n ? "".concat(i, " '").concat(n, "'") : "anonymous ".concat(i), "".concat(r, ".").concat(e).replace(/^\./, "")), a = function() {
      return t;
    }), t;
  };
  return {
    get: function() {
      return a();
    },
    set: function(o) {
      a = function() {
        return o;
      };
    },
    enumerable: !0,
    configurable: !0
  };
}
function Hc(e, t, r, n) {
  if (!r.fragmentMatches)
    return globalThis.__DEV__ !== !1 && Qc(), e;
  var i = t.definitions.filter(function(o) {
    return o.kind === C.FRAGMENT_DEFINITION;
  });
  typeof n > "u" && ($(i.length === 1, 49, i.length), n = i[0].name.value);
  var a = i.find(function(o) {
    return o.name.value === n;
  });
  return $(!!a, 50, n), e == null || re(e, {}) ? e : Wc(e, a.selectionSet, {
    operationType: "fragment",
    operationName: a.name.value,
    fragmentMap: jt(Ut(t)),
    cache: r,
    mutableTargets: new Gc(),
    knownChanged: new zc()
  });
}
function wg(e, t, r) {
  var n;
  if (!r.fragmentMatches)
    return globalThis.__DEV__ !== !1 && Qc(), e;
  var i = pt(t);
  return $(i, 51), e == null ? e : Wc(e, i.selectionSet, {
    operationType: i.operation,
    operationName: (n = i.name) === null || n === void 0 ? void 0 : n.value,
    fragmentMap: jt(Ut(t)),
    cache: r,
    mutableTargets: new Gc(),
    knownChanged: new zc()
  });
}
var Yc = (
  /** @class */
  (function() {
    function e() {
      this.assumeImmutableResults = !1, this.getFragmentDoc = yr(Ah, {
        max: Ne["cache.fragmentQueryDocuments"] || 1e3,
        cache: Qr
      });
    }
    return e.prototype.lookupFragment = function(t) {
      return null;
    }, e.prototype.batch = function(t) {
      var r = this, n = typeof t.optimistic == "string" ? t.optimistic : t.optimistic === !1 ? null : void 0, i;
      return this.performTransaction(function() {
        return i = t.update(r);
      }, n), i;
    }, e.prototype.recordOptimisticTransaction = function(t, r) {
      this.performTransaction(t, r);
    }, e.prototype.transformDocument = function(t) {
      return t;
    }, e.prototype.transformForLink = function(t) {
      return t;
    }, e.prototype.identify = function(t) {
    }, e.prototype.gc = function() {
      return [];
    }, e.prototype.modify = function(t) {
      return !1;
    }, e.prototype.readQuery = function(t, r) {
      return r === void 0 && (r = !!t.optimistic), this.read(_(_({}, t), { rootId: t.id || "ROOT_QUERY", optimistic: r }));
    }, e.prototype.watchFragment = function(t) {
      var r = this, n = t.fragment, i = t.fragmentName, a = t.from, o = t.optimistic, s = o === void 0 ? !0 : o, u = Ae(t, ["fragment", "fragmentName", "from", "optimistic"]), c = this.getFragmentDoc(n, i), l = typeof a > "u" || typeof a == "string" ? a : this.identify(a), d = !!t[Symbol.for("apollo.dataMasking")];
      if (globalThis.__DEV__ !== !1) {
        var f = i || fc(n).name.value;
        l || globalThis.__DEV__ !== !1 && $.warn(1, f);
      }
      var p = _(_({}, u), { returnPartialData: !0, id: l, query: c, optimistic: s }), y;
      return new H(function(m) {
        return r.watch(_(_({}, p), { immediate: !0, callback: function(v) {
          var g = d ? Hc(v.result, n, r, i) : v.result;
          if (
            // Always ensure we deliver the first result
            !(y && Bc(
              c,
              { data: y.result },
              { data: g },
              // TODO: Fix the type on WatchFragmentOptions so that TVars
              // extends OperationVariables
              t.variables
            ))
          ) {
            var b = {
              data: g,
              complete: !!v.complete
            };
            v.missing && (b.missing = dn(v.missing.map(function(E) {
              return E.missing;
            }))), y = _(_({}, v), { result: g }), m.next(b);
          }
        } }));
      });
    }, e.prototype.readFragment = function(t, r) {
      return r === void 0 && (r = !!t.optimistic), this.read(_(_({}, t), { query: this.getFragmentDoc(t.fragment, t.fragmentName), rootId: t.id, optimistic: r }));
    }, e.prototype.writeQuery = function(t) {
      var r = t.id, n = t.data, i = Ae(t, ["id", "data"]);
      return this.write(Object.assign(i, {
        dataId: r || "ROOT_QUERY",
        result: n
      }));
    }, e.prototype.writeFragment = function(t) {
      var r = t.id, n = t.data, i = t.fragment, a = t.fragmentName, o = Ae(t, ["id", "data", "fragment", "fragmentName"]);
      return this.write(Object.assign(o, {
        query: this.getFragmentDoc(i, a),
        dataId: r,
        result: n
      }));
    }, e.prototype.updateQuery = function(t, r) {
      return this.batch({
        update: function(n) {
          var i = n.readQuery(t), a = r(i);
          return a == null ? i : (n.writeQuery(_(_({}, t), { data: a })), a);
        }
      });
    }, e.prototype.updateFragment = function(t, r) {
      return this.batch({
        update: function(n) {
          var i = n.readFragment(t), a = r(i);
          return a == null ? i : (n.writeFragment(_(_({}, t), { data: a })), a);
        }
      });
    }, e;
  })()
);
globalThis.__DEV__ !== !1 && (Yc.prototype.getMemoryInternals = Gh);
var Jc = (
  /** @class */
  (function(e) {
    Ee(t, e);
    function t(r, n, i, a) {
      var o, s = e.call(this, r) || this;
      if (s.message = r, s.path = n, s.query = i, s.variables = a, Array.isArray(s.path)) {
        s.missing = s.message;
        for (var u = s.path.length - 1; u >= 0; --u)
          s.missing = (o = {}, o[s.path[u]] = s.missing, o);
      } else
        s.missing = s.path;
      return s.__proto__ = t.prototype, s;
    }
    return t;
  })(Error)
), le = Object.prototype.hasOwnProperty;
function Kt(e) {
  return e == null;
}
function Kc(e, t) {
  var r = e.__typename, n = e.id, i = e._id;
  if (typeof r == "string" && (t && (t.keyObject = Kt(n) ? Kt(i) ? void 0 : { _id: i } : { id: n }), Kt(n) && !Kt(i) && (n = i), !Kt(n)))
    return "".concat(r, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var Xc = {
  dataIdFromObject: Kc,
  addTypename: !0,
  resultCaching: !0,
  // Thanks to the shouldCanonizeResults helper, this should be the only line
  // you have to change to reenable canonization by default in the future.
  canonizeResults: !1
};
function Tg(e) {
  return Rt(Xc, e);
}
function Zc(e) {
  var t = e.canonizeResults;
  return t === void 0 ? Xc.canonizeResults : t;
}
function Ig(e, t) {
  return Y(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
}
var el = /^[_a-z][_0-9a-z]*/i;
function rt(e) {
  var t = e.match(el);
  return t ? t[0] : e;
}
function Bi(e, t, r) {
  return ae(t) ? oe(t) ? t.every(function(n) {
    return Bi(e, n, r);
  }) : e.selections.every(function(n) {
    if (Ze(n) && Er(n, r)) {
      var i = Re(n);
      return le.call(t, i) && (!n.selectionSet || Bi(n.selectionSet, t[i], r));
    }
    return !0;
  }) : !1;
}
function wt(e) {
  return ae(e) && !Y(e) && !oe(e);
}
function Og() {
  return new tt();
}
function tl(e, t) {
  var r = jt(Ut(e));
  return {
    fragmentMap: r,
    lookupFragment: function(n) {
      var i = r[n];
      return !i && t && (i = t.lookup(n)), i || null;
    }
  };
}
var qr = /* @__PURE__ */ Object.create(null), zn = function() {
  return qr;
}, os = /* @__PURE__ */ Object.create(null), br = (
  /** @class */
  (function() {
    function e(t, r) {
      var n = this;
      this.policies = t, this.group = r, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(i, a) {
        return Hr(Y(i) ? n.get(i.__ref, a) : i && i[a]);
      }, this.canRead = function(i) {
        return Y(i) ? n.has(i.__ref) : typeof i == "object";
      }, this.toReference = function(i, a) {
        if (typeof i == "string")
          return kt(i);
        if (Y(i))
          return i;
        var o = n.policies.identify(i)[0];
        if (o) {
          var s = kt(o);
          return a && n.merge(o, i), s;
        }
      };
    }
    return e.prototype.toObject = function() {
      return _({}, this.data);
    }, e.prototype.has = function(t) {
      return this.lookup(t, !0) !== void 0;
    }, e.prototype.get = function(t, r) {
      if (this.group.depend(t, r), le.call(this.data, t)) {
        var n = this.data[t];
        if (n && le.call(n, r))
          return n[r];
      }
      if (r === "__typename" && le.call(this.policies.rootTypenamesById, t))
        return this.policies.rootTypenamesById[t];
      if (this instanceof Ue)
        return this.parent.get(t, r);
    }, e.prototype.lookup = function(t, r) {
      if (r && this.group.depend(t, "__exists"), le.call(this.data, t))
        return this.data[t];
      if (this instanceof Ue)
        return this.parent.lookup(t, r);
      if (this.policies.rootTypenamesById[t])
        return /* @__PURE__ */ Object.create(null);
    }, e.prototype.merge = function(t, r) {
      var n = this, i;
      Y(t) && (t = t.__ref), Y(r) && (r = r.__ref);
      var a = typeof t == "string" ? this.lookup(i = t) : t, o = typeof r == "string" ? this.lookup(i = r) : r;
      if (o) {
        $(typeof i == "string", 2);
        var s = new tt(xg).merge(a, o);
        if (this.data[i] = s, s !== a && (delete this.refs[i], this.group.caching)) {
          var u = /* @__PURE__ */ Object.create(null);
          a || (u.__exists = 1), Object.keys(o).forEach(function(c) {
            if (!a || a[c] !== s[c]) {
              u[c] = 1;
              var l = rt(c);
              l !== c && !n.policies.hasKeyArgs(s.__typename, l) && (u[l] = 1), s[c] === void 0 && !(n instanceof Ue) && delete s[c];
            }
          }), u.__typename && !(a && a.__typename) && // Since we return default root __typename strings
          // automatically from store.get, we don't need to dirty the
          // ROOT_QUERY.__typename field if merged.__typename is equal
          // to the default string (usually "Query").
          this.policies.rootTypenamesById[i] === s.__typename && delete u.__typename, Object.keys(u).forEach(function(c) {
            return n.group.dirty(i, c);
          });
        }
      }
    }, e.prototype.modify = function(t, r) {
      var n = this, i = this.lookup(t);
      if (i) {
        var a = /* @__PURE__ */ Object.create(null), o = !1, s = !0, u = {
          DELETE: qr,
          INVALIDATE: os,
          isReference: Y,
          toReference: this.toReference,
          canRead: this.canRead,
          readField: function(c, l) {
            return n.policies.readField(typeof c == "string" ? {
              fieldName: c,
              from: l || kt(t)
            } : c, { store: n });
          }
        };
        if (Object.keys(i).forEach(function(c) {
          var l = rt(c), d = i[c];
          if (d !== void 0) {
            var f = typeof r == "function" ? r : r[c] || r[l];
            if (f) {
              var p = f === zn ? qr : f(Hr(d), _(_({}, u), { fieldName: l, storeFieldName: c, storage: n.getStorage(t, c) }));
              if (p === os)
                n.group.dirty(t, c);
              else if (p === qr && (p = void 0), p !== d && (a[c] = p, o = !0, d = p, globalThis.__DEV__ !== !1)) {
                var y = function(I) {
                  if (n.lookup(I.__ref) === void 0)
                    return globalThis.__DEV__ !== !1 && $.warn(3, I), !0;
                };
                if (Y(p))
                  y(p);
                else if (Array.isArray(p))
                  for (var m = !1, v = void 0, g = 0, b = p; g < b.length; g++) {
                    var E = b[g];
                    if (Y(E)) {
                      if (m = !0, y(E))
                        break;
                    } else if (typeof E == "object" && E) {
                      var D = n.policies.identify(E)[0];
                      D && (v = E);
                    }
                    if (m && v !== void 0) {
                      globalThis.__DEV__ !== !1 && $.warn(4, v);
                      break;
                    }
                  }
              }
            }
            d !== void 0 && (s = !1);
          }
        }), o)
          return this.merge(t, a), s && (this instanceof Ue ? this.data[t] = void 0 : delete this.data[t], this.group.dirty(t, "__exists")), !0;
      }
      return !1;
    }, e.prototype.delete = function(t, r, n) {
      var i, a = this.lookup(t);
      if (a) {
        var o = this.getFieldValue(a, "__typename"), s = r && n ? this.policies.getStoreFieldName({ typename: o, fieldName: r, args: n }) : r;
        return this.modify(t, s ? (i = {}, i[s] = zn, i) : zn);
      }
      return !1;
    }, e.prototype.evict = function(t, r) {
      var n = !1;
      return t.id && (le.call(this.data, t.id) && (n = this.delete(t.id, t.fieldName, t.args)), this instanceof Ue && this !== r && (n = this.parent.evict(t, r) || n), (t.fieldName || n) && this.group.dirty(t.id, t.fieldName || "__exists")), n;
    }, e.prototype.clear = function() {
      this.replace(null);
    }, e.prototype.extract = function() {
      var t = this, r = this.toObject(), n = [];
      return this.getRootIdSet().forEach(function(i) {
        le.call(t.policies.rootTypenamesById, i) || n.push(i);
      }), n.length && (r.__META = { extraRootIds: n.sort() }), r;
    }, e.prototype.replace = function(t) {
      var r = this;
      if (Object.keys(this.data).forEach(function(a) {
        t && le.call(t, a) || r.delete(a);
      }), t) {
        var n = t.__META, i = Ae(t, ["__META"]);
        Object.keys(i).forEach(function(a) {
          r.merge(a, i[a]);
        }), n && n.extraRootIds.forEach(this.retain, this);
      }
    }, e.prototype.retain = function(t) {
      return this.rootIds[t] = (this.rootIds[t] || 0) + 1;
    }, e.prototype.release = function(t) {
      if (this.rootIds[t] > 0) {
        var r = --this.rootIds[t];
        return r || delete this.rootIds[t], r;
      }
      return 0;
    }, e.prototype.getRootIdSet = function(t) {
      return t === void 0 && (t = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(t.add, t), this instanceof Ue ? this.parent.getRootIdSet(t) : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t), t;
    }, e.prototype.gc = function() {
      var t = this, r = this.getRootIdSet(), n = this.toObject();
      r.forEach(function(o) {
        le.call(n, o) && (Object.keys(t.findChildRefIds(o)).forEach(r.add, r), delete n[o]);
      });
      var i = Object.keys(n);
      if (i.length) {
        for (var a = this; a instanceof Ue; )
          a = a.parent;
        i.forEach(function(o) {
          return a.delete(o);
        });
      }
      return i;
    }, e.prototype.findChildRefIds = function(t) {
      if (!le.call(this.refs, t)) {
        var r = this.refs[t] = /* @__PURE__ */ Object.create(null), n = this.data[t];
        if (!n)
          return r;
        var i = /* @__PURE__ */ new Set([n]);
        i.forEach(function(a) {
          Y(a) && (r[a.__ref] = !0), ae(a) && Object.keys(a).forEach(function(o) {
            var s = a[o];
            ae(s) && i.add(s);
          });
        });
      }
      return this.refs[t];
    }, e.prototype.makeCacheKey = function() {
      return this.group.keyMaker.lookupArray(arguments);
    }, e;
  })()
), rl = (
  /** @class */
  (function() {
    function e(t, r) {
      r === void 0 && (r = null), this.caching = t, this.parent = r, this.d = null, this.resetCaching();
    }
    return e.prototype.resetCaching = function() {
      this.d = this.caching ? Ec() : null, this.keyMaker = new Le(ht);
    }, e.prototype.depend = function(t, r) {
      if (this.d) {
        this.d(Qn(t, r));
        var n = rt(r);
        n !== r && this.d(Qn(t, n)), this.parent && this.parent.depend(t, r);
      }
    }, e.prototype.dirty = function(t, r) {
      this.d && this.d.dirty(
        Qn(t, r),
        // When storeFieldName === "__exists", that means the entity identified
        // by dataId has either disappeared from the cache or was newly added,
        // so the result caching system would do well to "forget everything it
        // knows" about that object. To achieve that kind of invalidation, we
        // not only dirty the associated result cache entry, but also remove it
        // completely from the dependency graph. For the optimism implementation
        // details, see https://github.com/benjamn/optimism/pull/195.
        r === "__exists" ? "forget" : "setDirty"
      );
    }, e;
  })()
);
function Qn(e, t) {
  return t + "#" + e;
}
function ss(e, t) {
  cr(e) && e.group.depend(t, "__exists");
}
(function(e) {
  var t = (
    /** @class */
    (function(r) {
      Ee(n, r);
      function n(i) {
        var a = i.policies, o = i.resultCaching, s = o === void 0 ? !0 : o, u = i.seed, c = r.call(this, a, new rl(s)) || this;
        return c.stump = new kg(c), c.storageTrie = new Le(ht), u && c.replace(u), c;
      }
      return n.prototype.addLayer = function(i, a) {
        return this.stump.addLayer(i, a);
      }, n.prototype.removeLayer = function() {
        return this;
      }, n.prototype.getStorage = function() {
        return this.storageTrie.lookupArray(arguments);
      }, n;
    })(e)
  );
  e.Root = t;
})(br || (br = {}));
var Ue = (
  /** @class */
  (function(e) {
    Ee(t, e);
    function t(r, n, i, a) {
      var o = e.call(this, n.policies, a) || this;
      return o.id = r, o.parent = n, o.replay = i, o.group = a, i(o), o;
    }
    return t.prototype.addLayer = function(r, n) {
      return new t(r, this, n, this.group);
    }, t.prototype.removeLayer = function(r) {
      var n = this, i = this.parent.removeLayer(r);
      return r === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(a) {
        var o = n.data[a], s = i.lookup(a);
        s ? o ? o !== s && Object.keys(o).forEach(function(u) {
          re(o[u], s[u]) || n.group.dirty(a, u);
        }) : (n.group.dirty(a, "__exists"), Object.keys(s).forEach(function(u) {
          n.group.dirty(a, u);
        })) : n.delete(a);
      }), i) : i === this.parent ? this : i.addLayer(this.id, this.replay);
    }, t.prototype.toObject = function() {
      return _(_({}, this.parent.toObject()), this.data);
    }, t.prototype.findChildRefIds = function(r) {
      var n = this.parent.findChildRefIds(r);
      return le.call(this.data, r) ? _(_({}, n), e.prototype.findChildRefIds.call(this, r)) : n;
    }, t.prototype.getStorage = function() {
      for (var r = this.parent; r.parent; )
        r = r.parent;
      return r.getStorage.apply(
        r,
        // @ts-expect-error
        arguments
      );
    }, t;
  })(br)
), kg = (
  /** @class */
  (function(e) {
    Ee(t, e);
    function t(r) {
      return e.call(this, "EntityStore.Stump", r, function() {
      }, new rl(r.group.caching, r.group)) || this;
    }
    return t.prototype.removeLayer = function() {
      return this;
    }, t.prototype.merge = function(r, n) {
      return this.parent.merge(r, n);
    }, t;
  })(Ue)
);
function xg(e, t, r) {
  var n = e[r], i = t[r];
  return re(n, i) ? n : i;
}
function cr(e) {
  return !!(e instanceof br && e.group.caching);
}
function Fg(e) {
  return ae(e) ? oe(e) ? e.slice(0) : _({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var us = (
  /** @class */
  (function() {
    function e() {
      this.known = new (pa ? WeakSet : Set)(), this.pool = new Le(ht), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
    }
    return e.prototype.isKnown = function(t) {
      return ae(t) && this.known.has(t);
    }, e.prototype.pass = function(t) {
      if (ae(t)) {
        var r = Fg(t);
        return this.passes.set(r, t), r;
      }
      return t;
    }, e.prototype.admit = function(t) {
      var r = this;
      if (ae(t)) {
        var n = this.passes.get(t);
        if (n)
          return n;
        var i = Object.getPrototypeOf(t);
        switch (i) {
          case Array.prototype: {
            if (this.known.has(t))
              return t;
            var a = t.map(this.admit, this), o = this.pool.lookupArray(a);
            return o.array || (this.known.add(o.array = a), globalThis.__DEV__ !== !1 && Object.freeze(a)), o.array;
          }
          case null:
          case Object.prototype: {
            if (this.known.has(t))
              return t;
            var s = Object.getPrototypeOf(t), u = [s], c = this.sortedKeys(t);
            u.push(c.json);
            var l = u.length;
            c.sorted.forEach(function(p) {
              u.push(r.admit(t[p]));
            });
            var o = this.pool.lookupArray(u);
            if (!o.object) {
              var d = o.object = Object.create(s);
              this.known.add(d), c.sorted.forEach(function(p, y) {
                d[p] = u[l + y];
              }), globalThis.__DEV__ !== !1 && Object.freeze(d);
            }
            return o.object;
          }
        }
      }
      return t;
    }, e.prototype.sortedKeys = function(t) {
      var r = Object.keys(t), n = this.pool.lookupArray(r);
      if (!n.keys) {
        r.sort();
        var i = JSON.stringify(r);
        (n.keys = this.keysByJSON.get(i)) || this.keysByJSON.set(i, n.keys = { sorted: r, json: i });
      }
      return n.keys;
    }, e;
  })()
);
function cs(e) {
  return [
    e.selectionSet,
    e.objectOrReference,
    e.context,
    // We split out this property so we can pass different values
    // independently without modifying options.context itself.
    e.context.canonizeResults
  ];
}
var Cg = (
  /** @class */
  (function() {
    function e(t) {
      var r = this;
      this.knownResults = new (ht ? WeakMap : Map)(), this.config = Rt(t, {
        addTypename: t.addTypename !== !1,
        canonizeResults: Zc(t)
      }), this.canon = t.canon || new us(), this.executeSelectionSet = yr(function(n) {
        var i, a = n.context.canonizeResults, o = cs(n);
        o[3] = !a;
        var s = (i = r.executeSelectionSet).peek.apply(i, o);
        return s ? a ? _(_({}, s), {
          // If we previously read this result without canonizing it, we can
          // reuse that result simply by canonizing it now.
          result: r.canon.admit(s.result)
        }) : s : (ss(n.context.store, n.enclosingRef.__ref), r.execSelectionSetImpl(n));
      }, {
        max: this.config.resultCacheMaxSize || Ne["inMemoryCache.executeSelectionSet"] || 5e4,
        keyArgs: cs,
        // Note that the parameters of makeCacheKey are determined by the
        // array returned by keyArgs.
        makeCacheKey: function(n, i, a, o) {
          if (cr(a.store))
            return a.store.makeCacheKey(n, Y(i) ? i.__ref : i, a.varString, o);
        }
      }), this.executeSubSelectedArray = yr(function(n) {
        return ss(n.context.store, n.enclosingRef.__ref), r.execSubSelectedArrayImpl(n);
      }, {
        max: this.config.resultCacheMaxSize || Ne["inMemoryCache.executeSubSelectedArray"] || 1e4,
        makeCacheKey: function(n) {
          var i = n.field, a = n.array, o = n.context;
          if (cr(o.store))
            return o.store.makeCacheKey(i, a, o.varString);
        }
      });
    }
    return e.prototype.resetCanon = function() {
      this.canon = new us();
    }, e.prototype.diffQueryAgainstStore = function(t) {
      var r = t.store, n = t.query, i = t.rootId, a = i === void 0 ? "ROOT_QUERY" : i, o = t.variables, s = t.returnPartialData, u = s === void 0 ? !0 : s, c = t.canonizeResults, l = c === void 0 ? this.config.canonizeResults : c, d = this.config.cache.policies;
      o = _(_({}, ha(lc(n))), o);
      var f = kt(a), p = this.executeSelectionSet({
        selectionSet: Vt(n).selectionSet,
        objectOrReference: f,
        enclosingRef: f,
        context: _({ store: r, query: n, policies: d, variables: o, varString: Ye(o), canonizeResults: l }, tl(n, this.config.fragments))
      }), y;
      if (p.missing && (y = [
        new Jc(Ag(p.missing), p.missing, n, o)
      ], !u))
        throw y[0];
      return {
        result: p.result,
        complete: !y,
        missing: y
      };
    }, e.prototype.isFresh = function(t, r, n, i) {
      if (cr(i.store) && this.knownResults.get(t) === n) {
        var a = this.executeSelectionSet.peek(
          n,
          r,
          i,
          // If result is canonical, then it could only have been previously
          // cached by the canonizing version of executeSelectionSet, so we can
          // avoid checking both possibilities here.
          this.canon.isKnown(t)
        );
        if (a && t === a.result)
          return !0;
      }
      return !1;
    }, e.prototype.execSelectionSetImpl = function(t) {
      var r = this, n = t.selectionSet, i = t.objectOrReference, a = t.enclosingRef, o = t.context;
      if (Y(i) && !o.policies.rootTypenamesById[i.__ref] && !o.store.has(i.__ref))
        return {
          result: this.canon.empty,
          missing: "Dangling reference to missing ".concat(i.__ref, " object")
        };
      var s = o.variables, u = o.policies, c = o.store, l = c.getFieldValue(i, "__typename"), d = [], f, p = new tt();
      this.config.addTypename && typeof l == "string" && !u.rootIdsByTypename[l] && d.push({ __typename: l });
      function y(E, D) {
        var I;
        return E.missing && (f = p.merge(f, (I = {}, I[D] = E.missing, I))), E.result;
      }
      var m = new Set(n.selections);
      m.forEach(function(E) {
        var D, I;
        if (Er(E, s))
          if (Ze(E)) {
            var O = u.readField({
              fieldName: E.name.value,
              field: E,
              variables: o.variables,
              from: i
            }, o), x = Re(E);
            O === void 0 ? va.added(E) || (f = p.merge(f, (D = {}, D[x] = "Can't find field '".concat(E.name.value, "' on ").concat(Y(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), D))) : oe(O) ? O.length > 0 && (O = y(r.executeSubSelectedArray({
              field: E,
              array: O,
              enclosingRef: a,
              context: o
            }), x)) : E.selectionSet ? O != null && (O = y(r.executeSelectionSet({
              selectionSet: E.selectionSet,
              objectOrReference: O,
              enclosingRef: Y(O) ? O : a,
              context: o
            }), x)) : o.canonizeResults && (O = r.canon.pass(O)), O !== void 0 && d.push((I = {}, I[x] = O, I));
          } else {
            var P = un(E, o.lookupFragment);
            if (!P && E.kind === C.FRAGMENT_SPREAD)
              throw ve(10, E.name.value);
            P && u.fragmentMatches(P, l) && P.selectionSet.selections.forEach(m.add, m);
          }
      });
      var v = dn(d), g = { result: v, missing: f }, b = o.canonizeResults ? this.canon.admit(g) : Hr(g);
      return b.result && this.knownResults.set(b.result, n), b;
    }, e.prototype.execSubSelectedArrayImpl = function(t) {
      var r = this, n = t.field, i = t.array, a = t.enclosingRef, o = t.context, s, u = new tt();
      function c(l, d) {
        var f;
        return l.missing && (s = u.merge(s, (f = {}, f[d] = l.missing, f))), l.result;
      }
      return n.selectionSet && (i = i.filter(o.store.canRead)), i = i.map(function(l, d) {
        return l === null ? null : oe(l) ? c(r.executeSubSelectedArray({
          field: n,
          array: l,
          enclosingRef: a,
          context: o
        }), d) : n.selectionSet ? c(r.executeSelectionSet({
          selectionSet: n.selectionSet,
          objectOrReference: l,
          enclosingRef: Y(l) ? l : a,
          context: o
        }), d) : (globalThis.__DEV__ !== !1 && $g(o.store, n, l), l);
      }), {
        result: o.canonizeResults ? this.canon.admit(i) : i,
        missing: s
      };
    }, e;
  })()
);
function Ag(e) {
  try {
    JSON.stringify(e, function(t, r) {
      if (typeof r == "string")
        throw r;
      return r;
    });
  } catch (t) {
    return t;
  }
}
function $g(e, t, r) {
  if (!t.selectionSet) {
    var n = /* @__PURE__ */ new Set([r]);
    n.forEach(function(i) {
      ae(i) && ($(
        !Y(i),
        11,
        Ig(e, i),
        t.name.value
      ), Object.values(i).forEach(n.add, n));
    });
  }
}
var wa = new Dr(), ls = /* @__PURE__ */ new WeakMap();
function lr(e) {
  var t = ls.get(e);
  return t || ls.set(e, t = {
    vars: /* @__PURE__ */ new Set(),
    dep: Ec()
  }), t;
}
function fs(e) {
  lr(e).vars.forEach(function(t) {
    return t.forgetCache(e);
  });
}
function Pg(e) {
  lr(e).vars.forEach(function(t) {
    return t.attachCache(e);
  });
}
function Ng(e) {
  var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = function(a) {
    if (arguments.length > 0) {
      if (e !== a) {
        e = a, t.forEach(function(u) {
          lr(u).dep.dirty(n), Rg(u);
        });
        var o = Array.from(r);
        r.clear(), o.forEach(function(u) {
          return u(e);
        });
      }
    } else {
      var s = wa.getValue();
      s && (i(s), lr(s).dep(n));
    }
    return e;
  };
  n.onNextChange = function(a) {
    return r.add(a), function() {
      r.delete(a);
    };
  };
  var i = n.attachCache = function(a) {
    return t.add(a), lr(a).vars.add(n), n;
  };
  return n.forgetCache = function(a) {
    return t.delete(a);
  }, n;
}
function Rg(e) {
  e.broadcastWatches && e.broadcastWatches();
}
var ds = /* @__PURE__ */ Object.create(null);
function Ta(e) {
  var t = JSON.stringify(e);
  return ds[t] || (ds[t] = /* @__PURE__ */ Object.create(null));
}
function ps(e) {
  var t = Ta(e);
  return t.keyFieldsFn || (t.keyFieldsFn = function(r, n) {
    var i = function(o, s) {
      return n.readField(s, o);
    }, a = n.keyObject = Ia(e, function(o) {
      var s = Ft(
        n.storeObject,
        o,
        // Using context.readField to extract paths from context.storeObject
        // allows the extraction to see through Reference objects and respect
        // custom read functions.
        i
      );
      return s === void 0 && r !== n.storeObject && le.call(r, o[0]) && (s = Ft(r, o, il)), $(s !== void 0, 5, o.join("."), r), s;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(a));
  });
}
function hs(e) {
  var t = Ta(e);
  return t.keyArgsFn || (t.keyArgsFn = function(r, n) {
    var i = n.field, a = n.variables, o = n.fieldName, s = Ia(e, function(c) {
      var l = c[0], d = l.charAt(0);
      if (d === "@") {
        if (i && Ce(i.directives)) {
          var f = l.slice(1), p = i.directives.find(function(g) {
            return g.name.value === f;
          }), y = p && cn(p, a);
          return y && Ft(
            y,
            // If keyPath.length === 1, this code calls extractKeyPath with an
            // empty path, which works because it uses directiveArgs as the
            // extracted value.
            c.slice(1)
          );
        }
        return;
      }
      if (d === "$") {
        var m = l.slice(1);
        if (a && le.call(a, m)) {
          var v = c.slice(0);
          return v[0] = m, Ft(a, v);
        }
        return;
      }
      if (r)
        return Ft(r, c);
    }), u = JSON.stringify(s);
    return (r || u !== "{}") && (o += ":" + u), o;
  });
}
function Ia(e, t) {
  var r = new tt();
  return nl(e).reduce(function(n, i) {
    var a, o = t(i);
    if (o !== void 0) {
      for (var s = i.length - 1; s >= 0; --s)
        o = (a = {}, a[i[s]] = o, a);
      n = r.merge(n, o);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function nl(e) {
  var t = Ta(e);
  if (!t.paths) {
    var r = t.paths = [], n = [];
    e.forEach(function(i, a) {
      oe(i) ? (nl(i).forEach(function(o) {
        return r.push(n.concat(o));
      }), n.length = 0) : (n.push(i), oe(e[a + 1]) || (r.push(n.slice(0)), n.length = 0));
    });
  }
  return t.paths;
}
function il(e, t) {
  return e[t];
}
function Ft(e, t, r) {
  return r = r || il, al(t.reduce(function n(i, a) {
    return oe(i) ? i.map(function(o) {
      return n(o, a);
    }) : i && r(i, a);
  }, e));
}
function al(e) {
  return ae(e) ? oe(e) ? e.map(al) : Ia(Object.keys(e).sort(), function(t) {
    return Ft(e, t);
  }) : e;
}
function Gi(e) {
  return e.args !== void 0 ? e.args : e.field ? cn(e.field, e.variables) : null;
}
var Mg = function() {
}, ms = function(e, t) {
  return t.fieldName;
}, gs = function(e, t, r) {
  var n = r.mergeObjects;
  return n(e, t);
}, ys = function(e, t) {
  return t;
}, Lg = (
  /** @class */
  (function() {
    function e(t) {
      this.config = t, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = _({ dataIdFromObject: Kc }, t), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), t.possibleTypes && this.addPossibleTypes(t.possibleTypes), t.typePolicies && this.addTypePolicies(t.typePolicies);
    }
    return e.prototype.identify = function(t, r) {
      var n, i = this, a = r && (r.typename || ((n = r.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || t.__typename;
      if (a === this.rootTypenamesById.ROOT_QUERY)
        return ["ROOT_QUERY"];
      var o = r && r.storeObject || t, s = _(_({}, r), { typename: a, storeObject: o, readField: r && r.readField || function() {
        var d = Oa(arguments, o);
        return i.readField(d, {
          store: i.cache.data,
          variables: d.variables
        });
      } }), u, c = a && this.getTypePolicy(a), l = c && c.keyFn || this.config.dataIdFromObject;
      return Da.withValue(!0, function() {
        for (; l; ) {
          var d = l(_(_({}, t), o), s);
          if (oe(d))
            l = ps(d);
          else {
            u = d;
            break;
          }
        }
      }), u = u ? String(u) : void 0, s.keyObject ? [u, s.keyObject] : [u];
    }, e.prototype.addTypePolicies = function(t) {
      var r = this;
      Object.keys(t).forEach(function(n) {
        var i = t[n], a = i.queryType, o = i.mutationType, s = i.subscriptionType, u = Ae(i, ["queryType", "mutationType", "subscriptionType"]);
        a && r.setRootTypename("Query", n), o && r.setRootTypename("Mutation", n), s && r.setRootTypename("Subscription", n), le.call(r.toBeAdded, n) ? r.toBeAdded[n].push(u) : r.toBeAdded[n] = [u];
      });
    }, e.prototype.updateTypePolicy = function(t, r) {
      var n = this, i = this.getTypePolicy(t), a = r.keyFields, o = r.fields;
      function s(u, c) {
        u.merge = typeof c == "function" ? c : c === !0 ? gs : c === !1 ? ys : u.merge;
      }
      s(i, r.merge), i.keyFn = // Pass false to disable normalization for this typename.
      a === !1 ? Mg : oe(a) ? ps(a) : typeof a == "function" ? a : i.keyFn, o && Object.keys(o).forEach(function(u) {
        var c = n.getFieldPolicy(t, u, !0), l = o[u];
        if (typeof l == "function")
          c.read = l;
        else {
          var d = l.keyArgs, f = l.read, p = l.merge;
          c.keyFn = // Pass false to disable argument-based differentiation of
          // field identities.
          d === !1 ? ms : oe(d) ? hs(d) : typeof d == "function" ? d : c.keyFn, typeof f == "function" && (c.read = f), s(c, p);
        }
        c.read && c.merge && (c.keyFn = c.keyFn || ms);
      });
    }, e.prototype.setRootTypename = function(t, r) {
      r === void 0 && (r = t);
      var n = "ROOT_" + t.toUpperCase(), i = this.rootTypenamesById[n];
      r !== i && ($(!i || i === t, 6, t), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[r] = n, this.rootTypenamesById[n] = r);
    }, e.prototype.addPossibleTypes = function(t) {
      var r = this;
      this.usingPossibleTypes = !0, Object.keys(t).forEach(function(n) {
        r.getSupertypeSet(n, !0), t[n].forEach(function(i) {
          r.getSupertypeSet(i, !0).add(n);
          var a = i.match(el);
          (!a || a[0] !== i) && r.fuzzySubtypes.set(i, new RegExp(i));
        });
      });
    }, e.prototype.getTypePolicy = function(t) {
      var r = this;
      if (!le.call(this.typePolicies, t)) {
        var n = this.typePolicies[t] = /* @__PURE__ */ Object.create(null);
        n.fields = /* @__PURE__ */ Object.create(null);
        var i = this.supertypeMap.get(t);
        !i && this.fuzzySubtypes.size && (i = this.getSupertypeSet(t, !0), this.fuzzySubtypes.forEach(function(o, s) {
          if (o.test(t)) {
            var u = r.supertypeMap.get(s);
            u && u.forEach(function(c) {
              return i.add(c);
            });
          }
        })), i && i.size && i.forEach(function(o) {
          var s = r.getTypePolicy(o), u = s.fields, c = Ae(s, ["fields"]);
          Object.assign(n, c), Object.assign(n.fields, u);
        });
      }
      var a = this.toBeAdded[t];
      return a && a.length && a.splice(0).forEach(function(o) {
        r.updateTypePolicy(t, o);
      }), this.typePolicies[t];
    }, e.prototype.getFieldPolicy = function(t, r, n) {
      if (t) {
        var i = this.getTypePolicy(t).fields;
        return i[r] || n && (i[r] = /* @__PURE__ */ Object.create(null));
      }
    }, e.prototype.getSupertypeSet = function(t, r) {
      var n = this.supertypeMap.get(t);
      return !n && r && this.supertypeMap.set(t, n = /* @__PURE__ */ new Set()), n;
    }, e.prototype.fragmentMatches = function(t, r, n, i) {
      var a = this;
      if (!t.typeCondition)
        return !0;
      if (!r)
        return !1;
      var o = t.typeCondition.name.value;
      if (r === o)
        return !0;
      if (this.usingPossibleTypes && this.supertypeMap.has(o))
        for (var s = this.getSupertypeSet(r, !0), u = [s], c = function(y) {
          var m = a.getSupertypeSet(y, !1);
          m && m.size && u.indexOf(m) < 0 && u.push(m);
        }, l = !!(n && this.fuzzySubtypes.size), d = !1, f = 0; f < u.length; ++f) {
          var p = u[f];
          if (p.has(o))
            return s.has(o) || (d && globalThis.__DEV__ !== !1 && $.warn(7, r, o), s.add(o)), !0;
          p.forEach(c), l && // Start checking fuzzy subtypes only after exhausting all
          // non-fuzzy subtypes (after the final iteration of the loop).
          f === u.length - 1 && // We could wait to compare fragment.selectionSet to result
          // after we verify the supertype, but this check is often less
          // expensive than that search, and we will have to do the
          // comparison anyway whenever we find a potential match.
          Bi(t.selectionSet, n, i) && (l = !1, d = !0, this.fuzzySubtypes.forEach(function(y, m) {
            var v = r.match(y);
            v && v[0] === r && c(m);
          }));
        }
      return !1;
    }, e.prototype.hasKeyArgs = function(t, r) {
      var n = this.getFieldPolicy(t, r, !1);
      return !!(n && n.keyFn);
    }, e.prototype.getStoreFieldName = function(t) {
      var r = t.typename, n = t.fieldName, i = this.getFieldPolicy(r, n, !1), a, o = i && i.keyFn;
      if (o && r)
        for (var s = {
          typename: r,
          fieldName: n,
          field: t.field || null,
          variables: t.variables
        }, u = Gi(t); o; ) {
          var c = o(u, s);
          if (oe(c))
            o = hs(c);
          else {
            a = c || n;
            break;
          }
        }
      return a === void 0 && (a = t.field ? sm(t.field, t.variables) : cc(n, Gi(t))), a === !1 ? n : n === rt(a) ? a : n + ":" + a;
    }, e.prototype.readField = function(t, r) {
      var n = t.from;
      if (n) {
        var i = t.field || t.fieldName;
        if (i) {
          if (t.typename === void 0) {
            var a = r.store.getFieldValue(n, "__typename");
            a && (t.typename = a);
          }
          var o = this.getStoreFieldName(t), s = rt(o), u = r.store.getFieldValue(n, o), c = this.getFieldPolicy(t.typename, s, !1), l = c && c.read;
          if (l) {
            var d = vs(this, n, t, r, r.store.getStorage(Y(n) ? n.__ref : n, o));
            return wa.withValue(this.cache, l, [
              u,
              d
            ]);
          }
          return u;
        }
      }
    }, e.prototype.getReadFunction = function(t, r) {
      var n = this.getFieldPolicy(t, r, !1);
      return n && n.read;
    }, e.prototype.getMergeFunction = function(t, r, n) {
      var i = this.getFieldPolicy(t, r, !1), a = i && i.merge;
      return !a && n && (i = this.getTypePolicy(n), a = i && i.merge), a;
    }, e.prototype.runMergeFunction = function(t, r, n, i, a) {
      var o = n.field, s = n.typename, u = n.merge;
      return u === gs ? ol(i.store)(t, r) : u === ys ? r : (i.overwrite && (t = void 0), u(t, r, vs(
        this,
        // Unlike options.readField for read functions, we do not fall
        // back to the current object if no foreignObjOrRef is provided,
        // because it's not clear what the current object should be for
        // merge functions: the (possibly undefined) existing object, or
        // the incoming object? If you think your merge function needs
        // to read sibling fields in order to produce a new value for
        // the current field, you might want to rethink your strategy,
        // because that's a recipe for making merge behavior sensitive
        // to the order in which fields are written into the cache.
        // However, readField(name, ref) is useful for merge functions
        // that need to deduplicate child objects and references.
        void 0,
        {
          typename: s,
          fieldName: o.name.value,
          field: o,
          variables: i.variables
        },
        i,
        a || /* @__PURE__ */ Object.create(null)
      )));
    }, e;
  })()
);
function vs(e, t, r, n, i) {
  var a = e.getStoreFieldName(r), o = rt(a), s = r.variables || n.variables, u = n.store, c = u.toReference, l = u.canRead;
  return {
    args: Gi(r),
    field: r.field || null,
    fieldName: o,
    storeFieldName: a,
    variables: s,
    isReference: Y,
    toReference: c,
    storage: i,
    cache: e.cache,
    canRead: l,
    readField: function() {
      return e.readField(Oa(arguments, t, s), n);
    },
    mergeObjects: ol(n.store)
  };
}
function Oa(e, t, r) {
  var n = e[0], i = e[1], a = e.length, o;
  return typeof n == "string" ? o = {
    fieldName: n,
    // Default to objectOrReference only when no second argument was
    // passed for the from parameter, not when undefined is explicitly
    // passed as the second argument.
    from: a > 1 ? i : t
  } : (o = _({}, n), le.call(o, "from") || (o.from = t)), globalThis.__DEV__ !== !1 && o.from === void 0 && globalThis.__DEV__ !== !1 && $.warn(8, Gu(Array.from(e))), o.variables === void 0 && (o.variables = r), o;
}
function ol(e) {
  return function(r, n) {
    if (oe(r) || oe(n))
      throw ve(9);
    if (ae(r) && ae(n)) {
      var i = e.getFieldValue(r, "__typename"), a = e.getFieldValue(n, "__typename"), o = i && a && i !== a;
      if (o)
        return n;
      if (Y(r) && wt(n))
        return e.merge(r.__ref, n), r;
      if (wt(r) && Y(n))
        return e.merge(r, n.__ref), n;
      if (wt(r) && wt(n))
        return _(_({}, r), n);
    }
    return n;
  };
}
function Wn(e, t, r) {
  var n = "".concat(t).concat(r), i = e.flavors.get(n);
  return i || e.flavors.set(n, i = e.clientOnly === t && e.deferred === r ? e : _(_({}, e), { clientOnly: t, deferred: r })), i;
}
var jg = (
  /** @class */
  (function() {
    function e(t, r, n) {
      this.cache = t, this.reader = r, this.fragments = n;
    }
    return e.prototype.writeToStore = function(t, r) {
      var n = this, i = r.query, a = r.result, o = r.dataId, s = r.variables, u = r.overwrite, c = pt(i), l = Og();
      s = _(_({}, ha(c)), s);
      var d = _(_({ store: t, written: /* @__PURE__ */ Object.create(null), merge: function(p, y) {
        return l.merge(p, y);
      }, variables: s, varString: Ye(s) }, tl(i, this.fragments)), { overwrite: !!u, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), f = this.processSelectionSet({
        result: a || /* @__PURE__ */ Object.create(null),
        dataId: o,
        selectionSet: c.selectionSet,
        mergeTree: { map: /* @__PURE__ */ new Map() },
        context: d
      });
      if (!Y(f))
        throw ve(12, a);
      return d.incomingById.forEach(function(p, y) {
        var m = p.storeObject, v = p.mergeTree, g = p.fieldNodeSet, b = kt(y);
        if (v && v.map.size) {
          var E = n.applyMerges(v, b, m, d);
          if (Y(E))
            return;
          m = E;
        }
        if (globalThis.__DEV__ !== !1 && !d.overwrite) {
          var D = /* @__PURE__ */ Object.create(null);
          g.forEach(function(x) {
            x.selectionSet && (D[x.name.value] = !0);
          });
          var I = function(x) {
            return D[rt(x)] === !0;
          }, O = function(x) {
            var P = v && v.map.get(x);
            return !!(P && P.info && P.info.merge);
          };
          Object.keys(m).forEach(function(x) {
            I(x) && !O(x) && qg(b, m, x, d.store);
          });
        }
        t.merge(y, m);
      }), t.retain(f.__ref), f;
    }, e.prototype.processSelectionSet = function(t) {
      var r = this, n = t.dataId, i = t.result, a = t.selectionSet, o = t.context, s = t.mergeTree, u = this.cache.policies, c = /* @__PURE__ */ Object.create(null), l = n && u.rootTypenamesById[n] || Ni(i, a, o.fragmentMap) || n && o.store.get(n, "__typename");
      typeof l == "string" && (c.__typename = l);
      var d = function() {
        var E = Oa(arguments, c, o.variables);
        if (Y(E.from)) {
          var D = o.incomingById.get(E.from.__ref);
          if (D) {
            var I = u.readField(_(_({}, E), { from: D.storeObject }), o);
            if (I !== void 0)
              return I;
          }
        }
        return u.readField(E, o);
      }, f = /* @__PURE__ */ new Set();
      this.flattenFields(
        a,
        i,
        // This WriteContext will be the default context value for fields returned
        // by the flattenFields method, but some fields may be assigned a modified
        // context, depending on the presence of @client and other directives.
        o,
        l
      ).forEach(function(E, D) {
        var I, O = Re(D), x = i[O];
        if (f.add(D), x !== void 0) {
          var P = u.getStoreFieldName({
            typename: l,
            fieldName: D.name.value,
            field: D,
            variables: E.variables
          }), L = bs(s, P), q = r.processFieldValue(
            x,
            D,
            // Reset context.clientOnly and context.deferred to their default
            // values before processing nested selection sets.
            D.selectionSet ? Wn(E, !1, !1) : E,
            L
          ), G = void 0;
          D.selectionSet && (Y(q) || wt(q)) && (G = d("__typename", q));
          var ce = u.getMergeFunction(l, D.name.value, G);
          ce ? L.info = {
            // TODO Check compatibility against any existing childTree.field?
            field: D,
            typename: l,
            merge: ce
          } : Ss(s, P), c = E.merge(c, (I = {}, I[P] = q, I));
        } else globalThis.__DEV__ !== !1 && !E.clientOnly && !E.deferred && !va.added(D) && // If the field has a read function, it may be a synthetic field or
        // provide a default value, so its absence from the written data should
        // not be cause for alarm.
        !u.getReadFunction(l, D.name.value) && globalThis.__DEV__ !== !1 && $.error(13, Re(D), i);
      });
      try {
        var p = u.identify(i, {
          typename: l,
          selectionSet: a,
          fragmentMap: o.fragmentMap,
          storeObject: c,
          readField: d
        }), y = p[0], m = p[1];
        n = n || y, m && (c = o.merge(c, m));
      } catch (E) {
        if (!n)
          throw E;
      }
      if (typeof n == "string") {
        var v = kt(n), g = o.written[n] || (o.written[n] = []);
        if (g.indexOf(a) >= 0 || (g.push(a), this.reader && this.reader.isFresh(i, v, a, o)))
          return v;
        var b = o.incomingById.get(n);
        return b ? (b.storeObject = o.merge(b.storeObject, c), b.mergeTree = zi(b.mergeTree, s), f.forEach(function(E) {
          return b.fieldNodeSet.add(E);
        })) : o.incomingById.set(n, {
          storeObject: c,
          // Save a reference to mergeTree only if it is not empty, because
          // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
          // reused for entirely different parts of the result tree.
          mergeTree: Yr(s) ? void 0 : s,
          fieldNodeSet: f
        }), v;
      }
      return c;
    }, e.prototype.processFieldValue = function(t, r, n, i) {
      var a = this;
      return !r.selectionSet || t === null ? globalThis.__DEV__ !== !1 ? Fc(t) : t : oe(t) ? t.map(function(o, s) {
        var u = a.processFieldValue(o, r, n, bs(i, s));
        return Ss(i, s), u;
      }) : this.processSelectionSet({
        result: t,
        selectionSet: r.selectionSet,
        context: n,
        mergeTree: i
      });
    }, e.prototype.flattenFields = function(t, r, n, i) {
      i === void 0 && (i = Ni(r, t, n.fragmentMap));
      var a = /* @__PURE__ */ new Map(), o = this.cache.policies, s = new Le(!1);
      return (function u(c, l) {
        var d = s.lookup(
          c,
          // Because we take inheritedClientOnly and inheritedDeferred into
          // consideration here (in addition to selectionSet), it's possible for
          // the same selection set to be flattened more than once, if it appears
          // in the query with different @client and/or @directive configurations.
          l.clientOnly,
          l.deferred
        );
        d.visited || (d.visited = !0, c.selections.forEach(function(f) {
          if (Er(f, n.variables)) {
            var p = l.clientOnly, y = l.deferred;
            if (
              // Since the presence of @client or @defer on this field can only
              // cause clientOnly or deferred to become true, we can skip the
              // forEach loop if both clientOnly and deferred are already true.
              !(p && y) && Ce(f.directives) && f.directives.forEach(function(g) {
                var b = g.name.value;
                if (b === "client" && (p = !0), b === "defer") {
                  var E = cn(g, n.variables);
                  (!E || E.if !== !1) && (y = !0);
                }
              }), Ze(f)
            ) {
              var m = a.get(f);
              m && (p = p && m.clientOnly, y = y && m.deferred), a.set(f, Wn(n, p, y));
            } else {
              var v = un(f, n.lookupFragment);
              if (!v && f.kind === C.FRAGMENT_SPREAD)
                throw ve(14, f.name.value);
              v && o.fragmentMatches(v, i, r, n.variables) && u(v.selectionSet, Wn(n, p, y));
            }
          }
        }));
      })(t, n), a;
    }, e.prototype.applyMerges = function(t, r, n, i, a) {
      var o, s = this;
      if (t.map.size && !Y(n)) {
        var u = (
          // Items in the same position in different arrays are not
          // necessarily related to each other, so when incoming is an array
          // we process its elements as if there was no existing data.
          !oe(n) && // Likewise, existing must be either a Reference or a StoreObject
          // in order for its fields to be safe to merge with the fields of
          // the incoming object.
          (Y(r) || wt(r)) ? r : void 0
        ), c = n;
        u && !a && (a = [Y(u) ? u.__ref : u]);
        var l, d = function(f, p) {
          return oe(f) ? typeof p == "number" ? f[p] : void 0 : i.store.getFieldValue(f, String(p));
        };
        t.map.forEach(function(f, p) {
          var y = d(u, p), m = d(c, p);
          if (m !== void 0) {
            a && a.push(p);
            var v = s.applyMerges(f, y, m, i, a);
            v !== m && (l = l || /* @__PURE__ */ new Map(), l.set(p, v)), a && $(a.pop() === p);
          }
        }), l && (n = oe(c) ? c.slice(0) : _({}, c), l.forEach(function(f, p) {
          n[p] = f;
        }));
      }
      return t.info ? this.cache.policies.runMergeFunction(r, n, t.info, i, a && (o = i.store).getStorage.apply(o, a)) : n;
    }, e;
  })()
), sl = [];
function bs(e, t) {
  var r = e.map;
  return r.has(t) || r.set(t, sl.pop() || { map: /* @__PURE__ */ new Map() }), r.get(t);
}
function zi(e, t) {
  if (e === t || !t || Yr(t))
    return e;
  if (!e || Yr(e))
    return t;
  var r = e.info && t.info ? _(_({}, e.info), t.info) : e.info || t.info, n = e.map.size && t.map.size, i = n ? /* @__PURE__ */ new Map() : e.map.size ? e.map : t.map, a = { info: r, map: i };
  if (n) {
    var o = new Set(t.map.keys());
    e.map.forEach(function(s, u) {
      a.map.set(u, zi(s, t.map.get(u))), o.delete(u);
    }), o.forEach(function(s) {
      a.map.set(s, zi(t.map.get(s), e.map.get(s)));
    });
  }
  return a;
}
function Yr(e) {
  return !e || !(e.info || e.map.size);
}
function Ss(e, t) {
  var r = e.map, n = r.get(t);
  n && Yr(n) && (sl.push(n), r.delete(t));
}
var _s = /* @__PURE__ */ new Set();
function qg(e, t, r, n) {
  var i = function(d) {
    var f = n.getFieldValue(d, r);
    return typeof f == "object" && f;
  }, a = i(e);
  if (a) {
    var o = i(t);
    if (o && !Y(a) && !re(a, o) && !Object.keys(a).every(function(d) {
      return n.getFieldValue(o, d) !== void 0;
    })) {
      var s = n.getFieldValue(e, "__typename") || n.getFieldValue(t, "__typename"), u = rt(r), c = "".concat(s, ".").concat(u);
      if (!_s.has(c)) {
        _s.add(c);
        var l = [];
        !oe(a) && !oe(o) && [a, o].forEach(function(d) {
          var f = n.getFieldValue(d, "__typename");
          typeof f == "string" && !l.includes(f) && l.push(f);
        }), globalThis.__DEV__ !== !1 && $.warn(15, u, s, l.length ? "either ensure all objects of type " + l.join(" and ") + " have an ID or a custom merge function, or " : "", c, _({}, a), _({}, o));
      }
    }
  }
}
var ka = (
  /** @class */
  (function(e) {
    Ee(t, e);
    function t(r) {
      r === void 0 && (r = {});
      var n = e.call(this) || this;
      return n.watches = /* @__PURE__ */ new Set(), n.addTypenameTransform = new Dc(va), n.assumeImmutableResults = !0, n.makeVar = Ng, n.txCount = 0, n.config = Tg(r), n.addTypename = !!n.config.addTypename, n.policies = new Lg({
        cache: n,
        dataIdFromObject: n.config.dataIdFromObject,
        possibleTypes: n.config.possibleTypes,
        typePolicies: n.config.typePolicies
      }), n.init(), n;
    }
    return t.prototype.init = function() {
      var r = this.data = new br.Root({
        policies: this.policies,
        resultCaching: this.config.resultCaching
      });
      this.optimisticData = r.stump, this.resetResultCache();
    }, t.prototype.resetResultCache = function(r) {
      var n = this, i = this.storeReader, a = this.config.fragments;
      this.storeWriter = new jg(this, this.storeReader = new Cg({
        cache: this,
        addTypename: this.addTypename,
        resultCacheMaxSize: this.config.resultCacheMaxSize,
        canonizeResults: Zc(this.config),
        canon: r ? void 0 : i && i.canon,
        fragments: a
      }), a), this.maybeBroadcastWatch = yr(function(o, s) {
        return n.broadcastWatch(o, s);
      }, {
        max: this.config.resultCacheMaxSize || Ne["inMemoryCache.maybeBroadcastWatch"] || 5e3,
        makeCacheKey: function(o) {
          var s = o.optimistic ? n.optimisticData : n.data;
          if (cr(s)) {
            var u = o.optimistic, c = o.id, l = o.variables;
            return s.makeCacheKey(
              o.query,
              // Different watches can have the same query, optimistic
              // status, rootId, and variables, but if their callbacks are
              // different, the (identical) result needs to be delivered to
              // each distinct callback. The easiest way to achieve that
              // separation is to include c.callback in the cache key for
              // maybeBroadcastWatch calls. See issue #5733.
              o.callback,
              Ye({ optimistic: u, id: c, variables: l })
            );
          }
        }
      }), (/* @__PURE__ */ new Set([this.data.group, this.optimisticData.group])).forEach(function(o) {
        return o.resetCaching();
      });
    }, t.prototype.restore = function(r) {
      return this.init(), r && this.data.replace(r), this;
    }, t.prototype.extract = function(r) {
      return r === void 0 && (r = !1), (r ? this.optimisticData : this.data).extract();
    }, t.prototype.read = function(r) {
      var n = r.returnPartialData, i = n === void 0 ? !1 : n;
      try {
        return this.storeReader.diffQueryAgainstStore(_(_({}, r), { store: r.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: i })).result || null;
      } catch (a) {
        if (a instanceof Jc)
          return null;
        throw a;
      }
    }, t.prototype.write = function(r) {
      try {
        return ++this.txCount, this.storeWriter.writeToStore(this.data, r);
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
      }
    }, t.prototype.modify = function(r) {
      if (le.call(r, "id") && !r.id)
        return !1;
      var n = r.optimistic ? this.optimisticData : this.data;
      try {
        return ++this.txCount, n.modify(r.id || "ROOT_QUERY", r.fields);
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
      }
    }, t.prototype.diff = function(r) {
      return this.storeReader.diffQueryAgainstStore(_(_({}, r), { store: r.optimistic ? this.optimisticData : this.data, rootId: r.id || "ROOT_QUERY", config: this.config }));
    }, t.prototype.watch = function(r) {
      var n = this;
      return this.watches.size || Pg(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r), function() {
        n.watches.delete(r) && !n.watches.size && fs(n), n.maybeBroadcastWatch.forget(r);
      };
    }, t.prototype.gc = function(r) {
      var n;
      Ye.reset(), We.reset(), this.addTypenameTransform.resetCache(), (n = this.config.fragments) === null || n === void 0 || n.resetCaches();
      var i = this.optimisticData.gc();
      return r && !this.txCount && (r.resetResultCache ? this.resetResultCache(r.resetResultIdentities) : r.resetResultIdentities && this.storeReader.resetCanon()), i;
    }, t.prototype.retain = function(r, n) {
      return (n ? this.optimisticData : this.data).retain(r);
    }, t.prototype.release = function(r, n) {
      return (n ? this.optimisticData : this.data).release(r);
    }, t.prototype.identify = function(r) {
      if (Y(r))
        return r.__ref;
      try {
        return this.policies.identify(r)[0];
      } catch (n) {
        globalThis.__DEV__ !== !1 && $.warn(n);
      }
    }, t.prototype.evict = function(r) {
      if (!r.id) {
        if (le.call(r, "id"))
          return !1;
        r = _(_({}, r), { id: "ROOT_QUERY" });
      }
      try {
        return ++this.txCount, this.optimisticData.evict(r, this.data);
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
      }
    }, t.prototype.reset = function(r) {
      var n = this;
      return this.init(), Ye.reset(), r && r.discardWatches ? (this.watches.forEach(function(i) {
        return n.maybeBroadcastWatch.forget(i);
      }), this.watches.clear(), fs(this)) : this.broadcastWatches(), Promise.resolve();
    }, t.prototype.removeOptimistic = function(r) {
      var n = this.optimisticData.removeLayer(r);
      n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches());
    }, t.prototype.batch = function(r) {
      var n = this, i = r.update, a = r.optimistic, o = a === void 0 ? !0 : a, s = r.removeOptimistic, u = r.onWatchUpdated, c, l = function(f) {
        var p = n, y = p.data, m = p.optimisticData;
        ++n.txCount, f && (n.data = n.optimisticData = f);
        try {
          return c = i(n);
        } finally {
          --n.txCount, n.data = y, n.optimisticData = m;
        }
      }, d = /* @__PURE__ */ new Set();
      return u && !this.txCount && this.broadcastWatches(_(_({}, r), { onWatchUpdated: function(f) {
        return d.add(f), !1;
      } })), typeof o == "string" ? this.optimisticData = this.optimisticData.addLayer(o, l) : o === !1 ? l(this.data) : l(), typeof s == "string" && (this.optimisticData = this.optimisticData.removeLayer(s)), u && d.size ? (this.broadcastWatches(_(_({}, r), { onWatchUpdated: function(f, p) {
        var y = u.call(this, f, p);
        return y !== !1 && d.delete(f), y;
      } })), d.size && d.forEach(function(f) {
        return n.maybeBroadcastWatch.dirty(f);
      })) : this.broadcastWatches(r), c;
    }, t.prototype.performTransaction = function(r, n) {
      return this.batch({
        update: r,
        optimistic: n || n !== null
      });
    }, t.prototype.transformDocument = function(r) {
      return this.addTypenameToDocument(this.addFragmentsToDocument(r));
    }, t.prototype.fragmentMatches = function(r, n) {
      return this.policies.fragmentMatches(r, n);
    }, t.prototype.lookupFragment = function(r) {
      var n;
      return ((n = this.config.fragments) === null || n === void 0 ? void 0 : n.lookup(r)) || null;
    }, t.prototype.broadcastWatches = function(r) {
      var n = this;
      this.txCount || this.watches.forEach(function(i) {
        return n.maybeBroadcastWatch(i, r);
      });
    }, t.prototype.addFragmentsToDocument = function(r) {
      var n = this.config.fragments;
      return n ? n.transform(r) : r;
    }, t.prototype.addTypenameToDocument = function(r) {
      return this.addTypename ? this.addTypenameTransform.transformDocument(r) : r;
    }, t.prototype.broadcastWatch = function(r, n) {
      var i = r.lastDiff, a = this.diff(r);
      n && (r.optimistic && typeof n.optimistic == "string" && (a.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, r, a, i) === !1) || (!i || !re(i.result, a.result)) && r.callback(r.lastDiff = a, i);
    }, t;
  })(Yc)
);
globalThis.__DEV__ !== !1 && (ka.prototype.getMemoryInternals = Bh);
var W;
(function(e) {
  e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(W || (W = {}));
function Tt(e) {
  return e ? e < 7 : !1;
}
var Es = Object.assign, Ug = Object.hasOwnProperty, Ur = (
  /** @class */
  (function(e) {
    Ee(t, e);
    function t(r) {
      var n = r.queryManager, i = r.queryInfo, a = r.options, o = this, s = t.inactiveOnCreation.getValue();
      o = e.call(this, function(g) {
        o._getOrCreateQuery();
        try {
          var b = g._subscription._observer;
          b && !b.error && (b.error = Vg);
        } catch {
        }
        var E = !o.observers.size;
        o.observers.add(g);
        var D = o.last;
        return D && D.error ? g.error && g.error(D.error) : D && D.result && g.next && g.next(o.maskResult(D.result)), E && o.reobserve().catch(function() {
        }), function() {
          o.observers.delete(g) && !o.observers.size && o.tearDownQuery();
        };
      }) || this, o.observers = /* @__PURE__ */ new Set(), o.subscriptions = /* @__PURE__ */ new Set(), o.dirty = !1, o._getOrCreateQuery = function() {
        return s && (n.queries.set(o.queryId, i), s = !1), o.queryManager.getOrCreateQuery(o.queryId);
      }, o.queryInfo = i, o.queryManager = n, o.waitForOwnResult = Hn(a.fetchPolicy), o.isTornDown = !1, o.subscribeToMore = o.subscribeToMore.bind(o), o.maskResult = o.maskResult.bind(o);
      var u = n.defaultOptions.watchQuery, c = u === void 0 ? {} : u, l = c.fetchPolicy, d = l === void 0 ? "cache-first" : l, f = a.fetchPolicy, p = f === void 0 ? d : f, y = a.initialFetchPolicy, m = y === void 0 ? p === "standby" ? d : p : y;
      o.options = _(_({}, a), {
        // Remember the initial options.fetchPolicy so we can revert back to this
        // policy when variables change. This information can also be specified
        // (or overridden) by providing options.initialFetchPolicy explicitly.
        initialFetchPolicy: m,
        // This ensures this.options.fetchPolicy always has a string value, in
        // case options.fetchPolicy was not provided.
        fetchPolicy: p
      }), o.queryId = i.queryId || n.generateQueryId();
      var v = pt(o.query);
      return o.queryName = v && v.name && v.name.value, o;
    }
    return Object.defineProperty(t.prototype, "query", {
      // The `query` computed property will always reflect the document transformed
      // by the last run query. `this.options.query` will always reflect the raw
      // untransformed query to ensure document transforms with runtime conditionals
      // are run on the original document.
      get: function() {
        return this.lastQuery || this.options.query;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "variables", {
      // Computed shorthand for this.options.variables, preserved for
      // backwards compatibility.
      /**
       * An object containing the variables that were provided for the query.
       */
      get: function() {
        return this.options.variables;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.result = function() {
      var r = this;
      return new Promise(function(n, i) {
        var a = {
          next: function(s) {
            n(s), r.observers.delete(a), r.observers.size || r.queryManager.removeQuery(r.queryId), setTimeout(function() {
              o.unsubscribe();
            }, 0);
          },
          error: i
        }, o = r.subscribe(a);
      });
    }, t.prototype.resetDiff = function() {
      this.queryInfo.resetDiff();
    }, t.prototype.getCurrentFullResult = function(r) {
      r === void 0 && (r = !0);
      var n = this.getLastResult(!0), i = this.queryInfo.networkStatus || n && n.networkStatus || W.ready, a = _(_({}, n), { loading: Tt(i), networkStatus: i }), o = this.options.fetchPolicy, s = o === void 0 ? "cache-first" : o;
      if (
        // These fetch policies should never deliver data from the cache, unless
        // redelivering a previously delivered result.
        !(Hn(s) || // If this.options.query has @client(always: true) fields, we cannot
        // trust diff.result, since it was read from the cache without running
        // local resolvers (and it's too late to run resolvers now, since we must
        // return a result synchronously).
        this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)
      ) if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var u = this.queryInfo.getDiff();
        (u.complete || this.options.returnPartialData) && (a.data = u.result), re(a.data, {}) && (a.data = void 0), u.complete ? (delete a.partial, u.complete && a.networkStatus === W.loading && (s === "cache-first" || s === "cache-only") && (a.networkStatus = W.ready, a.loading = !1)) : a.partial = !0, a.networkStatus === W.ready && (a.error || a.errors) && (a.networkStatus = W.error), globalThis.__DEV__ !== !1 && !u.complete && !this.options.partialRefetch && !a.loading && !a.data && !a.error && ul(u.missing);
      }
      return r && this.updateLastResult(a), a;
    }, t.prototype.getCurrentResult = function(r) {
      return r === void 0 && (r = !0), this.maskResult(this.getCurrentFullResult(r));
    }, t.prototype.isDifferentFromLastResult = function(r, n) {
      if (!this.last)
        return !0;
      var i = this.queryManager.getDocumentInfo(this.query), a = this.queryManager.dataMasking, o = a ? i.nonReactiveQuery : this.query, s = a || i.hasNonreactiveDirective ? !Bc(o, this.last.result, r, this.variables) : !re(this.last.result, r);
      return s || n && !re(this.last.variables, n);
    }, t.prototype.getLast = function(r, n) {
      var i = this.last;
      if (i && i[r] && (!n || re(i.variables, this.variables)))
        return i[r];
    }, t.prototype.getLastResult = function(r) {
      return this.getLast("result", r);
    }, t.prototype.getLastError = function(r) {
      return this.getLast("error", r);
    }, t.prototype.resetLastResults = function() {
      delete this.last, this.isTornDown = !1;
    }, t.prototype.resetQueryStoreErrors = function() {
      this.queryManager.resetErrors(this.queryId);
    }, t.prototype.refetch = function(r) {
      var n, i = {
        // Always disable polling for refetches.
        pollInterval: 0
      }, a = this.options.fetchPolicy;
      if (a === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && r && Ug.call(r, "variables")) {
        var o = lc(this.query), s = o.variableDefinitions;
        (!s || !s.some(function(u) {
          return u.variable.name.value === "variables";
        })) && globalThis.__DEV__ !== !1 && $.warn(
          21,
          r,
          ((n = o.name) === null || n === void 0 ? void 0 : n.value) || o
        );
      }
      return r && !re(this.options.variables, r) && (i.variables = this.options.variables = _(_({}, this.options.variables), r)), this.queryInfo.resetLastWrite(), this.reobserve(i, W.refetch);
    }, t.prototype.fetchMore = function(r) {
      var n = this, i = _(_({}, r.query ? r : _(_(_(_({}, this.options), { query: this.options.query }), r), { variables: _(_({}, this.options.variables), r.variables) })), {
        // The fetchMore request goes immediately to the network and does
        // not automatically write its result to the cache (hence no-cache
        // instead of network-only), because we allow the caller of
        // fetchMore to provide an updateQuery callback that determines how
        // the data gets written to the cache.
        fetchPolicy: "no-cache"
      });
      i.query = this.transformDocument(i.query);
      var a = this.queryManager.generateQueryId();
      this.lastQuery = r.query ? this.transformDocument(this.options.query) : i.query;
      var o = this.queryInfo, s = o.networkStatus;
      o.networkStatus = W.fetchMore, i.notifyOnNetworkStatusChange && this.observe();
      var u = /* @__PURE__ */ new Set(), c = r?.updateQuery, l = this.options.fetchPolicy !== "no-cache";
      return l || $(c, 22), this.queryManager.fetchQuery(a, i, W.fetchMore).then(function(d) {
        if (n.queryManager.removeQuery(a), o.networkStatus === W.fetchMore && (o.networkStatus = s), l)
          n.queryManager.cache.batch({
            update: function(y) {
              var m = r.updateQuery;
              m ? y.updateQuery({
                query: n.query,
                variables: n.variables,
                returnPartialData: !0,
                optimistic: !1
              }, function(v) {
                return m(v, {
                  fetchMoreResult: d.data,
                  variables: i.variables
                });
              }) : y.writeQuery({
                query: i.query,
                variables: i.variables,
                data: d.data
              });
            },
            onWatchUpdated: function(y) {
              u.add(y.query);
            }
          });
        else {
          var f = n.getLast("result"), p = c(f.data, {
            fetchMoreResult: d.data,
            variables: i.variables
          });
          n.reportResult(_(_({}, f), { networkStatus: s, loading: Tt(s), data: p }), n.variables);
        }
        return n.maskResult(d);
      }).finally(function() {
        l && !u.has(n.query) && n.reobserveCacheFirst();
      });
    }, t.prototype.subscribeToMore = function(r) {
      var n = this, i = this.queryManager.startGraphQLSubscription({
        query: r.document,
        variables: r.variables,
        context: r.context
      }).subscribe({
        next: function(a) {
          var o = r.updateQuery;
          o && n.updateQuery(function(s, u) {
            return o(s, _({ subscriptionData: a }, u));
          });
        },
        error: function(a) {
          if (r.onError) {
            r.onError(a);
            return;
          }
          globalThis.__DEV__ !== !1 && $.error(23, a);
        }
      });
      return this.subscriptions.add(i), function() {
        n.subscriptions.delete(i) && i.unsubscribe();
      };
    }, t.prototype.setOptions = function(r) {
      return this.reobserve(r);
    }, t.prototype.silentSetOptions = function(r) {
      var n = Rt(this.options, r || {});
      Es(this.options, n);
    }, t.prototype.setVariables = function(r) {
      return re(this.variables, r) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = r, this.observers.size ? this.reobserve({
        // Reset options.fetchPolicy to its original value.
        fetchPolicy: this.options.initialFetchPolicy,
        variables: r
      }, W.setVariables) : Promise.resolve());
    }, t.prototype.updateQuery = function(r) {
      var n = this.queryManager, i = n.cache.diff({
        query: this.options.query,
        variables: this.variables,
        returnPartialData: !0,
        optimistic: !1
      }), a = i.result, o = i.complete, s = r(a, {
        variables: this.variables,
        complete: !!o,
        previousData: a
      });
      s && (n.cache.writeQuery({
        query: this.options.query,
        data: s,
        variables: this.variables
      }), n.broadcastQueries());
    }, t.prototype.startPolling = function(r) {
      this.options.pollInterval = r, this.updatePolling();
    }, t.prototype.stopPolling = function() {
      this.options.pollInterval = 0, this.updatePolling();
    }, t.prototype.applyNextFetchPolicy = function(r, n) {
      if (n.nextFetchPolicy) {
        var i = n.fetchPolicy, a = i === void 0 ? "cache-first" : i, o = n.initialFetchPolicy, s = o === void 0 ? a : o;
        a === "standby" || (typeof n.nextFetchPolicy == "function" ? n.fetchPolicy = n.nextFetchPolicy(a, {
          reason: r,
          options: n,
          observable: this,
          initialFetchPolicy: s
        }) : r === "variables-changed" ? n.fetchPolicy = s : n.fetchPolicy = n.nextFetchPolicy);
      }
      return n.fetchPolicy;
    }, t.prototype.fetch = function(r, n, i) {
      var a = this._getOrCreateQuery();
      return a.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(a, r, n, i);
    }, t.prototype.updatePolling = function() {
      var r = this;
      if (!this.queryManager.ssrMode) {
        var n = this, i = n.pollingInfo, a = n.options.pollInterval;
        if (!a || !this.hasObservers()) {
          i && (clearTimeout(i.timeout), delete this.pollingInfo);
          return;
        }
        if (!(i && i.interval === a)) {
          $(a, 24);
          var o = i || (this.pollingInfo = {});
          o.interval = a;
          var s = function() {
            var c, l;
            r.pollingInfo && (!Tt(r.queryInfo.networkStatus) && !(!((l = (c = r.options).skipPollAttempt) === null || l === void 0) && l.call(c)) ? r.reobserve({
              // Most fetchPolicy options don't make sense to use in a polling context, as
              // users wouldn't want to be polling the cache directly. However, network-only and
              // no-cache are both useful for when the user wants to control whether or not the
              // polled results are written to the cache.
              fetchPolicy: r.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
            }, W.poll).then(u, u) : u());
          }, u = function() {
            var c = r.pollingInfo;
            c && (clearTimeout(c.timeout), c.timeout = setTimeout(s, c.interval));
          };
          u();
        }
      }
    }, t.prototype.updateLastResult = function(r, n) {
      n === void 0 && (n = this.variables);
      var i = this.getLastError();
      return i && this.last && !re(n, this.last.variables) && (i = void 0), this.last = _({ result: this.queryManager.assumeImmutableResults ? r : Fc(r), variables: n }, i ? { error: i } : null);
    }, t.prototype.reobserveAsConcast = function(r, n) {
      var i = this;
      this.isTornDown = !1;
      var a = (
        // Refetching uses a disposable Concast to allow refetches using different
        // options/variables, without permanently altering the options of the
        // original ObservableQuery.
        n === W.refetch || // The fetchMore method does not actually call the reobserve method, but,
        // if it did, it would definitely use a disposable Concast.
        n === W.fetchMore || // Polling uses a disposable Concast so the polling options (which force
        // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
        n === W.poll
      ), o = this.options.variables, s = this.options.fetchPolicy, u = Rt(this.options, r || {}), c = a ? (
        // Disposable Concast fetches receive a shallow copy of this.options
        // (merged with newOptions), leaving this.options unmodified.
        u
      ) : Es(this.options, u), l = this.transformDocument(c.query);
      this.lastQuery = l, a || (this.updatePolling(), r && r.variables && !re(r.variables, o) && // Don't mess with the fetchPolicy if it's currently "standby".
      c.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
      // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
      (c.fetchPolicy === s || // A `nextFetchPolicy` function has even higher priority, though,
      // so in that case `applyNextFetchPolicy` must be called.
      typeof c.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", c), n === void 0 && (n = W.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = Hn(c.fetchPolicy));
      var d = function() {
        i.concast === y && (i.waitForOwnResult = !1);
      }, f = c.variables && _({}, c.variables), p = this.fetch(c, n, l), y = p.concast, m = p.fromLink, v = {
        next: function(g) {
          re(i.variables, f) && (d(), i.reportResult(g, f));
        },
        error: function(g) {
          re(i.variables, f) && (Nc(g) || (g = new Qe({ networkError: g })), d(), i.reportError(g, f));
        }
      };
      return !a && (m || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = y, this.observer = v), y.addObserver(v), y;
    }, t.prototype.reobserve = function(r, n) {
      return Rm(this.reobserveAsConcast(r, n).promise.then(this.maskResult));
    }, t.prototype.resubscribeAfterError = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      var i = this.last;
      this.resetLastResults();
      var a = this.subscribe.apply(this, r);
      return this.last = i, a;
    }, t.prototype.observe = function() {
      this.reportResult(
        // Passing false is important so that this.getCurrentResult doesn't
        // save the fetchMore result as this.lastResult, causing it to be
        // ignored due to the this.isDifferentFromLastResult check in
        // this.reportResult.
        this.getCurrentFullResult(!1),
        this.variables
      );
    }, t.prototype.reportResult = function(r, n) {
      var i = this.getLastError(), a = this.isDifferentFromLastResult(r, n);
      (i || !r.partial || this.options.returnPartialData) && this.updateLastResult(r, n), (i || a) && ur(this.observers, "next", this.maskResult(r));
    }, t.prototype.reportError = function(r, n) {
      var i = _(_({}, this.getLastResult()), { error: r, errors: r.graphQLErrors, networkStatus: W.error, loading: !1 });
      this.updateLastResult(i, n), ur(this.observers, "error", this.last.error = r);
    }, t.prototype.hasObservers = function() {
      return this.observers.size > 0;
    }, t.prototype.tearDownQuery = function() {
      this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(r) {
        return r.unsubscribe();
      }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
    }, t.prototype.transformDocument = function(r) {
      return this.queryManager.transform(r);
    }, t.prototype.maskResult = function(r) {
      return r && "data" in r ? _(_({}, r), { data: this.queryManager.maskOperation({
        document: this.query,
        data: r.data,
        fetchPolicy: this.options.fetchPolicy,
        id: this.queryId
      }) }) : r;
    }, t.prototype.resetNotifications = function() {
      this.cancelNotifyTimeout(), this.dirty = !1;
    }, t.prototype.cancelNotifyTimeout = function() {
      this.notifyTimeout && (clearTimeout(this.notifyTimeout), this.notifyTimeout = void 0);
    }, t.prototype.scheduleNotify = function() {
      var r = this;
      this.dirty || (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
        return r.notify();
      }, 0)));
    }, t.prototype.notify = function() {
      if (this.cancelNotifyTimeout(), this.dirty && (this.options.fetchPolicy == "cache-only" || this.options.fetchPolicy == "cache-and-network" || !Tt(this.queryInfo.networkStatus))) {
        var r = this.queryInfo.getDiff();
        r.fromOptimisticTransaction ? this.observe() : this.reobserveCacheFirst();
      }
      this.dirty = !1;
    }, t.prototype.reobserveCacheFirst = function() {
      var r = this.options, n = r.fetchPolicy, i = r.nextFetchPolicy;
      return n === "cache-and-network" || n === "network-only" ? this.reobserve({
        fetchPolicy: "cache-first",
        // Use a temporary nextFetchPolicy function that replaces itself with the
        // previous nextFetchPolicy value and returns the original fetchPolicy.
        nextFetchPolicy: function(a, o) {
          return this.nextFetchPolicy = i, typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(a, o) : n;
        }
      }) : this.reobserve();
    }, t.inactiveOnCreation = new Dr(), t;
  })(H)
);
Cc(Ur);
function Vg(e) {
  globalThis.__DEV__ !== !1 && $.error(25, e.message, e.stack);
}
function ul(e) {
  globalThis.__DEV__ !== !1 && e && globalThis.__DEV__ !== !1 && $.debug(26, e);
}
function Hn(e) {
  return e === "network-only" || e === "no-cache" || e === "standby";
}
var It = new (ht ? WeakMap : Map)();
function Yn(e, t) {
  var r = e[t];
  typeof r == "function" && (e[t] = function() {
    return It.set(
      e,
      // The %1e15 allows the count to wrap around to 0 safely every
      // quadrillion evictions, so there's no risk of overflow. To be
      // clear, this is more of a pedantic principle than something
      // that matters in any conceivable practical scenario.
      (It.get(e) + 1) % 1e15
    ), r.apply(this, arguments);
  });
}
var Jn = (
  /** @class */
  (function() {
    function e(t, r) {
      r === void 0 && (r = t.generateQueryId()), this.queryId = r, this.document = null, this.lastRequestId = 1, this.stopped = !1, this.observableQuery = null;
      var n = this.cache = t.cache;
      It.has(n) || (It.set(n, 0), Yn(n, "evict"), Yn(n, "modify"), Yn(n, "reset"));
    }
    return e.prototype.init = function(t) {
      var r = t.networkStatus || W.loading;
      return this.variables && this.networkStatus !== W.loading && !re(this.variables, t.variables) && (r = W.setVariables), re(t.variables, this.variables) || (this.lastDiff = void 0, this.cancel()), Object.assign(this, {
        document: t.document,
        variables: t.variables,
        networkError: null,
        graphQLErrors: this.graphQLErrors || [],
        networkStatus: r
      }), t.observableQuery && this.setObservableQuery(t.observableQuery), t.lastRequestId && (this.lastRequestId = t.lastRequestId), this;
    }, e.prototype.resetDiff = function() {
      this.lastDiff = void 0;
    }, e.prototype.getDiff = function() {
      var t = this.getDiffOptions();
      if (this.lastDiff && re(t, this.lastDiff.options))
        return this.lastDiff.diff;
      this.updateWatch(this.variables);
      var r = this.observableQuery;
      if (r && r.options.fetchPolicy === "no-cache")
        return { complete: !1 };
      var n = this.cache.diff(t);
      return this.updateLastDiff(n, t), n;
    }, e.prototype.updateLastDiff = function(t, r) {
      this.lastDiff = t ? {
        diff: t,
        options: r || this.getDiffOptions()
      } : void 0;
    }, e.prototype.getDiffOptions = function(t) {
      var r;
      return t === void 0 && (t = this.variables), {
        query: this.document,
        variables: t,
        returnPartialData: !0,
        optimistic: !0,
        canonizeResults: (r = this.observableQuery) === null || r === void 0 ? void 0 : r.options.canonizeResults
      };
    }, e.prototype.setDiff = function(t) {
      var r, n, i = this.lastDiff && this.lastDiff.diff;
      t && !t.complete && (!((r = this.observableQuery) === null || r === void 0) && r.getLastError()) || (this.updateLastDiff(t), re(i && i.result, t && t.result) || (n = this.observableQuery) === null || n === void 0 || n.scheduleNotify());
    }, e.prototype.setObservableQuery = function(t) {
      t !== this.observableQuery && (this.observableQuery = t, t && (t.queryInfo = this));
    }, e.prototype.stop = function() {
      var t;
      if (!this.stopped) {
        this.stopped = !0, (t = this.observableQuery) === null || t === void 0 || t.resetNotifications(), this.cancel();
        var r = this.observableQuery;
        r && r.stopPolling();
      }
    }, e.prototype.cancel = function() {
      var t;
      (t = this.cancelWatch) === null || t === void 0 || t.call(this), this.cancelWatch = void 0;
    }, e.prototype.updateWatch = function(t) {
      var r = this;
      t === void 0 && (t = this.variables);
      var n = this.observableQuery;
      if (!(n && n.options.fetchPolicy === "no-cache")) {
        var i = _(_({}, this.getDiffOptions(t)), { watcher: this, callback: function(a) {
          return r.setDiff(a);
        } });
        (!this.lastWatch || !re(i, this.lastWatch)) && (this.cancel(), this.cancelWatch = this.cache.watch(this.lastWatch = i));
      }
    }, e.prototype.resetLastWrite = function() {
      this.lastWrite = void 0;
    }, e.prototype.shouldWrite = function(t, r) {
      var n = this.lastWrite;
      return !(n && // If cache.evict has been called since the last time we wrote this
      // data into the cache, there's a chance writing this result into
      // the cache will repair what was evicted.
      n.dmCount === It.get(this.cache) && re(r, n.variables) && re(t.data, n.result.data));
    }, e.prototype.markResult = function(t, r, n, i) {
      var a = this, o, s = new tt(), u = Ce(t.errors) ? t.errors.slice(0) : [];
      if ((o = this.observableQuery) === null || o === void 0 || o.resetNotifications(), "incremental" in t && Ce(t.incremental)) {
        var c = Ac(this.getDiff().result, t);
        t.data = c;
      } else if ("hasNext" in t && t.hasNext) {
        var l = this.getDiff();
        t.data = s.merge(l.result, t.data);
      }
      this.graphQLErrors = u, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: t.data, complete: !0 }, this.getDiffOptions(n.variables)) : i !== 0 && (Qi(t, n.errorPolicy) ? this.cache.performTransaction(function(d) {
        if (a.shouldWrite(t, n.variables))
          d.writeQuery({
            query: r,
            data: t.data,
            variables: n.variables,
            overwrite: i === 1
          }), a.lastWrite = {
            result: t,
            variables: n.variables,
            dmCount: It.get(a.cache)
          };
        else if (a.lastDiff && a.lastDiff.diff.complete) {
          t.data = a.lastDiff.diff.result;
          return;
        }
        var f = a.getDiffOptions(n.variables), p = d.diff(f);
        !a.stopped && re(a.variables, n.variables) && a.updateWatch(n.variables), a.updateLastDiff(p, f), p.complete && (t.data = p.result);
      }) : this.lastWrite = void 0);
    }, e.prototype.markReady = function() {
      return this.networkError = null, this.networkStatus = W.ready;
    }, e.prototype.markError = function(t) {
      var r;
      return this.networkStatus = W.error, this.lastWrite = void 0, (r = this.observableQuery) === null || r === void 0 || r.resetNotifications(), t.graphQLErrors && (this.graphQLErrors = t.graphQLErrors), t.networkError && (this.networkError = t.networkError), t;
    }, e;
  })()
);
function Qi(e, t) {
  t === void 0 && (t = "none");
  var r = t === "ignore" || t === "all", n = !Lr(e);
  return !n && r && e.data && (n = !0), n;
}
var Bg = Object.prototype.hasOwnProperty, Ds = /* @__PURE__ */ Object.create(null), Gg = (
  /** @class */
  (function() {
    function e(t) {
      var r = this;
      this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new ic(
        Ne["queryManager.getDocumentInfo"] || 2e3
        /* defaultCacheSizes["queryManager.getDocumentInfo"] */
      ), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new Le(!1), this.noCacheWarningsByQueryId = /* @__PURE__ */ new Set();
      var n = new Dc(
        function(a) {
          return r.cache.transformDocument(a);
        },
        // Allow the apollo cache to manage its own transform caches
        { cache: !1 }
      );
      this.cache = t.cache, this.link = t.link, this.defaultOptions = t.defaultOptions, this.queryDeduplication = t.queryDeduplication, this.clientAwareness = t.clientAwareness, this.localState = t.localState, this.ssrMode = t.ssrMode, this.assumeImmutableResults = t.assumeImmutableResults, this.dataMasking = t.dataMasking;
      var i = t.documentTransform;
      this.documentTransform = i ? n.concat(i).concat(n) : n, this.defaultContext = t.defaultContext || /* @__PURE__ */ Object.create(null), (this.onBroadcast = t.onBroadcast) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
    }
    return e.prototype.stop = function() {
      var t = this;
      this.queries.forEach(function(r, n) {
        t.stopQueryNoBroadcast(n);
      }), this.cancelPendingFetches(ve(27));
    }, e.prototype.cancelPendingFetches = function(t) {
      this.fetchCancelFns.forEach(function(r) {
        return r(t);
      }), this.fetchCancelFns.clear();
    }, e.prototype.mutate = function(t) {
      return Be(this, arguments, void 0, function(r) {
        var n, i, a, o, s, u, c, l = r.mutation, d = r.variables, f = r.optimisticResponse, p = r.updateQueries, y = r.refetchQueries, m = y === void 0 ? [] : y, v = r.awaitRefetchQueries, g = v === void 0 ? !1 : v, b = r.update, E = r.onQueryUpdated, D = r.fetchPolicy, I = D === void 0 ? ((u = this.defaultOptions.mutate) === null || u === void 0 ? void 0 : u.fetchPolicy) || "network-only" : D, O = r.errorPolicy, x = O === void 0 ? ((c = this.defaultOptions.mutate) === null || c === void 0 ? void 0 : c.errorPolicy) || "none" : O, P = r.keepRootFields, L = r.context;
        return Ge(this, function(q) {
          switch (q.label) {
            case 0:
              return $(l, 28), $(I === "network-only" || I === "no-cache", 29), n = this.generateMutationId(), l = this.cache.transformForLink(this.transform(l)), i = this.getDocumentInfo(l).hasClientExports, d = this.getVariables(l, d), i ? [4, this.localState.addExportedVariables(l, d, L)] : [3, 2];
            case 1:
              d = q.sent(), q.label = 2;
            case 2:
              return a = this.mutationStore && (this.mutationStore[n] = {
                mutation: l,
                variables: d,
                loading: !0,
                error: null
              }), o = f && this.markMutationOptimistic(f, {
                mutationId: n,
                document: l,
                variables: d,
                fetchPolicy: I,
                errorPolicy: x,
                context: L,
                updateQueries: p,
                update: b,
                keepRootFields: P
              }), this.broadcastQueries(), s = this, [2, new Promise(function(G, ce) {
                return Vn(s.getObservableFromLink(l, _(_({}, L), { optimisticResponse: o ? f : void 0 }), d, {}, !1), function(ne) {
                  if (Lr(ne) && x === "none")
                    throw new Qe({
                      graphQLErrors: ji(ne)
                    });
                  a && (a.loading = !1, a.error = null);
                  var he = _({}, ne);
                  return typeof m == "function" && (m = m(he)), x === "ignore" && Lr(he) && delete he.errors, s.markMutationResult({
                    mutationId: n,
                    result: he,
                    document: l,
                    variables: d,
                    fetchPolicy: I,
                    errorPolicy: x,
                    context: L,
                    update: b,
                    updateQueries: p,
                    awaitRefetchQueries: g,
                    refetchQueries: m,
                    removeOptimistic: o ? n : void 0,
                    onQueryUpdated: E,
                    keepRootFields: P
                  });
                }).subscribe({
                  next: function(ne) {
                    s.broadcastQueries(), (!("hasNext" in ne) || ne.hasNext === !1) && G(_(_({}, ne), { data: s.maskOperation({
                      document: l,
                      data: ne.data,
                      fetchPolicy: I,
                      id: n
                    }) }));
                  },
                  error: function(ne) {
                    a && (a.loading = !1, a.error = ne), o && s.cache.removeOptimistic(n), s.broadcastQueries(), ce(ne instanceof Qe ? ne : new Qe({
                      networkError: ne
                    }));
                  }
                });
              })];
          }
        });
      });
    }, e.prototype.markMutationResult = function(t, r) {
      var n = this;
      r === void 0 && (r = this.cache);
      var i = t.result, a = [], o = t.fetchPolicy === "no-cache";
      if (!o && Qi(i, t.errorPolicy)) {
        if (xt(i) || a.push({
          result: i.data,
          dataId: "ROOT_MUTATION",
          query: t.document,
          variables: t.variables
        }), xt(i) && Ce(i.incremental)) {
          var s = r.diff({
            id: "ROOT_MUTATION",
            // The cache complains if passed a mutation where it expects a
            // query, so we transform mutations and subscriptions to queries
            // (only once, thanks to this.transformCache).
            query: this.getDocumentInfo(t.document).asQuery,
            variables: t.variables,
            optimistic: !1,
            returnPartialData: !0
          }), u = void 0;
          s.result && (u = Ac(s.result, i)), typeof u < "u" && (i.data = u, a.push({
            result: u,
            dataId: "ROOT_MUTATION",
            query: t.document,
            variables: t.variables
          }));
        }
        var c = t.updateQueries;
        c && this.queries.forEach(function(d, f) {
          var p = d.observableQuery, y = p && p.queryName;
          if (!(!y || !Bg.call(c, y))) {
            var m = c[y], v = n.queries.get(f), g = v.document, b = v.variables, E = r.diff({
              query: g,
              variables: b,
              returnPartialData: !0,
              optimistic: !1
            }), D = E.result, I = E.complete;
            if (I && D) {
              var O = m(D, {
                mutationResult: i,
                queryName: g && nr(g) || void 0,
                queryVariables: b
              });
              O && a.push({
                result: O,
                dataId: "ROOT_QUERY",
                query: g,
                variables: b
              });
            }
          }
        });
      }
      if (a.length > 0 || (t.refetchQueries || "").length > 0 || t.update || t.onQueryUpdated || t.removeOptimistic) {
        var l = [];
        if (this.refetchQueries({
          updateCache: function(d) {
            o || a.forEach(function(m) {
              return d.write(m);
            });
            var f = t.update, p = !Um(i) || xt(i) && !i.hasNext;
            if (f) {
              if (!o) {
                var y = d.diff({
                  id: "ROOT_MUTATION",
                  // The cache complains if passed a mutation where it expects a
                  // query, so we transform mutations and subscriptions to queries
                  // (only once, thanks to this.transformCache).
                  query: n.getDocumentInfo(t.document).asQuery,
                  variables: t.variables,
                  optimistic: !1,
                  returnPartialData: !0
                });
                y.complete && (i = _(_({}, i), { data: y.result }), "incremental" in i && delete i.incremental, "hasNext" in i && delete i.hasNext);
              }
              p && f(d, i, {
                context: t.context,
                variables: t.variables
              });
            }
            !o && !t.keepRootFields && p && d.modify({
              id: "ROOT_MUTATION",
              fields: function(m, v) {
                var g = v.fieldName, b = v.DELETE;
                return g === "__typename" ? m : b;
              }
            });
          },
          include: t.refetchQueries,
          // Write the final mutation.result to the root layer of the cache.
          optimistic: !1,
          // Remove the corresponding optimistic layer at the same time as we
          // write the final non-optimistic result.
          removeOptimistic: t.removeOptimistic,
          // Let the caller of client.mutate optionally determine the refetching
          // behavior for watched queries after the mutation.update function runs.
          // If no onQueryUpdated function was provided for this mutation, pass
          // null instead of undefined to disable the default refetching behavior.
          onQueryUpdated: t.onQueryUpdated || null
        }).forEach(function(d) {
          return l.push(d);
        }), t.awaitRefetchQueries || t.onQueryUpdated)
          return Promise.all(l).then(function() {
            return i;
          });
      }
      return Promise.resolve(i);
    }, e.prototype.markMutationOptimistic = function(t, r) {
      var n = this, i = typeof t == "function" ? t(r.variables, { IGNORE: Ds }) : t;
      return i === Ds ? !1 : (this.cache.recordOptimisticTransaction(function(a) {
        try {
          n.markMutationResult(_(_({}, r), { result: { data: i } }), a);
        } catch (o) {
          globalThis.__DEV__ !== !1 && $.error(o);
        }
      }, r.mutationId), !0);
    }, e.prototype.fetchQuery = function(t, r, n) {
      return this.fetchConcastWithInfo(this.getOrCreateQuery(t), r, n).concast.promise;
    }, e.prototype.getQueryStore = function() {
      var t = /* @__PURE__ */ Object.create(null);
      return this.queries.forEach(function(r, n) {
        t[n] = {
          variables: r.variables,
          networkStatus: r.networkStatus,
          networkError: r.networkError,
          graphQLErrors: r.graphQLErrors
        };
      }), t;
    }, e.prototype.resetErrors = function(t) {
      var r = this.queries.get(t);
      r && (r.networkError = void 0, r.graphQLErrors = []);
    }, e.prototype.transform = function(t) {
      return this.documentTransform.transformDocument(t);
    }, e.prototype.getDocumentInfo = function(t) {
      var r = this.transformCache;
      if (!r.has(t)) {
        var n = {
          // TODO These three calls (hasClientExports, shouldForceResolvers, and
          // usesNonreactiveDirective) are performing independent full traversals
          // of the transformed document. We should consider merging these
          // traversals into a single pass in the future, though the work is
          // cached after the first time.
          hasClientExports: Dh(t),
          hasForcedResolvers: this.localState.shouldForceResolvers(t),
          hasNonreactiveDirective: mr(["nonreactive"], t),
          nonReactiveQuery: Tm(t),
          clientQuery: this.localState.clientQuery(t),
          serverQuery: Tc([
            { name: "client", remove: !0 },
            { name: "connection" },
            { name: "nonreactive" },
            { name: "unmask" }
          ], t),
          defaultVars: ha(pt(t)),
          // Transform any mutation or subscription operations to query operations
          // so we can read/write them from/to the cache.
          asQuery: _(_({}, t), { definitions: t.definitions.map(function(i) {
            return i.kind === "OperationDefinition" && i.operation !== "query" ? _(_({}, i), { operation: "query" }) : i;
          }) })
        };
        r.set(t, n);
      }
      return r.get(t);
    }, e.prototype.getVariables = function(t, r) {
      return _(_({}, this.getDocumentInfo(t).defaultVars), r);
    }, e.prototype.watchQuery = function(t) {
      var r = this.transform(t.query);
      t = _(_({}, t), { variables: this.getVariables(r, t.variables) }), typeof t.notifyOnNetworkStatusChange > "u" && (t.notifyOnNetworkStatusChange = !1);
      var n = new Jn(this), i = new Ur({
        queryManager: this,
        queryInfo: n,
        options: t
      });
      return i.lastQuery = r, Ur.inactiveOnCreation.getValue() || this.queries.set(i.queryId, n), n.init({
        document: r,
        observableQuery: i,
        variables: i.variables
      }), i;
    }, e.prototype.query = function(t, r) {
      var n = this;
      r === void 0 && (r = this.generateQueryId()), $(t.query, 30), $(t.query.kind === "Document", 31), $(!t.returnPartialData, 32), $(!t.pollInterval, 33);
      var i = this.transform(t.query);
      return this.fetchQuery(r, _(_({}, t), { query: i })).then(function(a) {
        return a && _(_({}, a), { data: n.maskOperation({
          document: i,
          data: a.data,
          fetchPolicy: t.fetchPolicy,
          id: r
        }) });
      }).finally(function() {
        return n.stopQuery(r);
      });
    }, e.prototype.generateQueryId = function() {
      return String(this.queryIdCounter++);
    }, e.prototype.generateRequestId = function() {
      return this.requestIdCounter++;
    }, e.prototype.generateMutationId = function() {
      return String(this.mutationIdCounter++);
    }, e.prototype.stopQueryInStore = function(t) {
      this.stopQueryInStoreNoBroadcast(t), this.broadcastQueries();
    }, e.prototype.stopQueryInStoreNoBroadcast = function(t) {
      var r = this.queries.get(t);
      r && r.stop();
    }, e.prototype.clearStore = function(t) {
      return t === void 0 && (t = {
        discardWatches: !0
      }), this.cancelPendingFetches(ve(34)), this.queries.forEach(function(r) {
        r.observableQuery ? r.networkStatus = W.loading : r.stop();
      }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(t);
    }, e.prototype.getObservableQueries = function(t) {
      var r = this;
      t === void 0 && (t = "active");
      var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
      return Array.isArray(t) && t.forEach(function(s) {
        if (typeof s == "string")
          i.set(s, s), a.set(s, !1);
        else if (Kh(s)) {
          var u = We(r.transform(s));
          i.set(u, nr(s)), a.set(u, !1);
        } else ae(s) && s.query && o.add(s);
      }), this.queries.forEach(function(s, u) {
        var c = s.observableQuery, l = s.document;
        if (c) {
          if (t === "all") {
            n.set(u, c);
            return;
          }
          var d = c.queryName, f = c.options.fetchPolicy;
          if (f === "standby" || t === "active" && !c.hasObservers())
            return;
          (t === "active" || d && a.has(d) || l && a.has(We(l))) && (n.set(u, c), d && a.set(d, !0), l && a.set(We(l), !0));
        }
      }), o.size && o.forEach(function(s) {
        var u = Oi("legacyOneTimeQuery"), c = r.getOrCreateQuery(u).init({
          document: s.query,
          variables: s.variables
        }), l = new Ur({
          queryManager: r,
          queryInfo: c,
          options: _(_({}, s), { fetchPolicy: "network-only" })
        });
        $(l.queryId === u), c.setObservableQuery(l), n.set(u, l);
      }), globalThis.__DEV__ !== !1 && a.size && a.forEach(function(s, u) {
        if (!s) {
          var c = i.get(u);
          c ? globalThis.__DEV__ !== !1 && $.warn(35, c) : globalThis.__DEV__ !== !1 && $.warn(36);
        }
      }), n;
    }, e.prototype.reFetchObservableQueries = function(t) {
      var r = this;
      t === void 0 && (t = !1);
      var n = [];
      return this.getObservableQueries(t ? "all" : "active").forEach(function(i, a) {
        var o = i.options.fetchPolicy;
        i.resetLastResults(), (t || o !== "standby" && o !== "cache-only") && n.push(i.refetch()), (r.queries.get(a) || i.queryInfo).setDiff(null);
      }), this.broadcastQueries(), Promise.all(n);
    }, e.prototype.startGraphQLSubscription = function(t) {
      var r = this, n = t.query, i = t.variables, a = t.fetchPolicy, o = t.errorPolicy, s = o === void 0 ? "none" : o, u = t.context, c = u === void 0 ? {} : u, l = t.extensions, d = l === void 0 ? {} : l;
      n = this.transform(n), i = this.getVariables(n, i);
      var f = function(y) {
        return r.getObservableFromLink(n, c, y, d).map(function(m) {
          a !== "no-cache" && (Qi(m, s) && r.cache.write({
            query: n,
            result: m.data,
            dataId: "ROOT_SUBSCRIPTION",
            variables: y
          }), r.broadcastQueries());
          var v = Lr(m), g = Pc(m);
          if (v || g) {
            var b = {};
            if (v && (b.graphQLErrors = m.errors), g && (b.protocolErrors = m.extensions[pn]), s === "none" || g)
              throw new Qe(b);
          }
          return s === "ignore" && delete m.errors, m;
        });
      };
      if (this.getDocumentInfo(n).hasClientExports) {
        var p = this.localState.addExportedVariables(n, i, c).then(f);
        return new H(function(y) {
          var m = null;
          return p.then(function(v) {
            return m = v.subscribe(y);
          }, y.error), function() {
            return m && m.unsubscribe();
          };
        });
      }
      return f(i);
    }, e.prototype.stopQuery = function(t) {
      this.stopQueryNoBroadcast(t), this.broadcastQueries();
    }, e.prototype.stopQueryNoBroadcast = function(t) {
      this.stopQueryInStoreNoBroadcast(t), this.removeQuery(t);
    }, e.prototype.removeQuery = function(t) {
      var r;
      this.fetchCancelFns.delete(t), this.queries.has(t) && ((r = this.queries.get(t)) === null || r === void 0 || r.stop(), this.queries.delete(t));
    }, e.prototype.broadcastQueries = function() {
      this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(t) {
        var r;
        return (r = t.observableQuery) === null || r === void 0 ? void 0 : r.notify();
      });
    }, e.prototype.getLocalState = function() {
      return this.localState;
    }, e.prototype.getObservableFromLink = function(t, r, n, i, a) {
      var o = this, s;
      a === void 0 && (a = (s = r?.queryDeduplication) !== null && s !== void 0 ? s : this.queryDeduplication);
      var u, c = this.getDocumentInfo(t), l = c.serverQuery, d = c.clientQuery;
      if (l) {
        var f = this, p = f.inFlightLinkObservables, y = f.link, m = {
          query: l,
          variables: n,
          operationName: nr(l) || void 0,
          context: this.prepareContext(_(_({}, r), { forceFetch: !a })),
          extensions: i
        };
        if (r = m.context, a) {
          var v = We(l), g = Ye(n), b = p.lookup(v, g);
          if (u = b.observable, !u) {
            var E = new St([
              qi(y, m)
            ]);
            u = b.observable = E, E.beforeNext(function D(I, O) {
              I === "next" && "hasNext" in O && O.hasNext ? E.beforeNext(D) : p.remove(v, g);
            });
          }
        } else
          u = new St([
            qi(y, m)
          ]);
      } else
        u = new St([H.of({ data: {} })]), r = this.prepareContext(r);
      return d && (u = Vn(u, function(D) {
        return o.localState.runResolvers({
          document: d,
          remoteResult: D,
          context: r,
          variables: n
        });
      })), u;
    }, e.prototype.getResultsFromLink = function(t, r, n) {
      var i = t.lastRequestId = this.generateRequestId(), a = this.cache.transformForLink(n.query);
      return Vn(this.getObservableFromLink(a, n.context, n.variables), function(o) {
        var s = ji(o), u = s.length > 0, c = n.errorPolicy;
        if (i >= t.lastRequestId) {
          if (u && c === "none")
            throw t.markError(new Qe({
              graphQLErrors: s
            }));
          t.markResult(o, a, n, r), t.markReady();
        }
        var l = {
          data: o.data,
          loading: !1,
          networkStatus: W.ready
        };
        return u && c === "none" && (l.data = void 0), u && c !== "ignore" && (l.errors = s, l.networkStatus = W.error), l;
      }, function(o) {
        var s = Nc(o) ? o : new Qe({ networkError: o });
        throw i >= t.lastRequestId && t.markError(s), s;
      });
    }, e.prototype.fetchConcastWithInfo = function(t, r, n, i) {
      var a = this;
      n === void 0 && (n = W.loading), i === void 0 && (i = r.query);
      var o = this.getVariables(i, r.variables), s = this.defaultOptions.watchQuery, u = r.fetchPolicy, c = u === void 0 ? s && s.fetchPolicy || "cache-first" : u, l = r.errorPolicy, d = l === void 0 ? s && s.errorPolicy || "none" : l, f = r.returnPartialData, p = f === void 0 ? !1 : f, y = r.notifyOnNetworkStatusChange, m = y === void 0 ? !1 : y, v = r.context, g = v === void 0 ? {} : v, b = Object.assign({}, r, {
        query: i,
        variables: o,
        fetchPolicy: c,
        errorPolicy: d,
        returnPartialData: p,
        notifyOnNetworkStatusChange: m,
        context: g
      }), E = function(P) {
        b.variables = P;
        var L = a.fetchQueryByPolicy(t, b, n);
        return (
          // If we're in standby, postpone advancing options.fetchPolicy using
          // applyNextFetchPolicy.
          b.fetchPolicy !== "standby" && // The "standby" policy currently returns [] from fetchQueryByPolicy, so
          // this is another way to detect when nothing was done/fetched.
          L.sources.length > 0 && t.observableQuery && t.observableQuery.applyNextFetchPolicy("after-fetch", r), L
        );
      }, D = function() {
        return a.fetchCancelFns.delete(t.queryId);
      };
      this.fetchCancelFns.set(t.queryId, function(P) {
        D(), setTimeout(function() {
          return I.cancel(P);
        });
      });
      var I, O;
      if (this.getDocumentInfo(b.query).hasClientExports)
        I = new St(this.localState.addExportedVariables(b.query, b.variables, b.context).then(E).then(function(P) {
          return P.sources;
        })), O = !0;
      else {
        var x = E(b.variables);
        O = x.fromLink, I = new St(x.sources);
      }
      return I.promise.then(D, D), {
        concast: I,
        fromLink: O
      };
    }, e.prototype.refetchQueries = function(t) {
      var r = this, n = t.updateCache, i = t.include, a = t.optimistic, o = a === void 0 ? !1 : a, s = t.removeOptimistic, u = s === void 0 ? o ? Oi("refetchQueries") : void 0 : s, c = t.onQueryUpdated, l = /* @__PURE__ */ new Map();
      i && this.getObservableQueries(i).forEach(function(f, p) {
        l.set(p, {
          oq: f,
          lastDiff: (r.queries.get(p) || f.queryInfo).getDiff()
        });
      });
      var d = /* @__PURE__ */ new Map();
      return n && this.cache.batch({
        update: n,
        // Since you can perform any combination of cache reads and/or writes in
        // the cache.batch update function, its optimistic option can be either
        // a boolean or a string, representing three distinct modes of
        // operation:
        //
        // * false: read/write only the root layer
        // * true: read/write the topmost layer
        // * string: read/write a fresh optimistic layer with that ID string
        //
        // When typeof optimistic === "string", a new optimistic layer will be
        // temporarily created within cache.batch with that string as its ID. If
        // we then pass that same string as the removeOptimistic option, we can
        // make cache.batch immediately remove the optimistic layer after
        // running the updateCache function, triggering only one broadcast.
        //
        // However, the refetchQueries method accepts only true or false for its
        // optimistic option (not string). We interpret true to mean a temporary
        // optimistic layer should be created, to allow efficiently rolling back
        // the effect of the updateCache function, which involves passing a
        // string instead of true as the optimistic option to cache.batch, when
        // refetchQueries receives optimistic: true.
        //
        // In other words, we are deliberately not supporting the use case of
        // writing to an *existing* optimistic layer (using the refetchQueries
        // updateCache function), since that would potentially interfere with
        // other optimistic updates in progress. Instead, you can read/write
        // only the root layer by passing optimistic: false to refetchQueries,
        // or you can read/write a brand new optimistic layer that will be
        // automatically removed by passing optimistic: true.
        optimistic: o && u || !1,
        // The removeOptimistic option can also be provided by itself, even if
        // optimistic === false, to remove some previously-added optimistic
        // layer safely and efficiently, like we do in markMutationResult.
        //
        // If an explicit removeOptimistic string is provided with optimistic:
        // true, the removeOptimistic string will determine the ID of the
        // temporary optimistic layer, in case that ever matters.
        removeOptimistic: u,
        onWatchUpdated: function(f, p, y) {
          var m = f.watcher instanceof Jn && f.watcher.observableQuery;
          if (m) {
            if (c) {
              l.delete(m.queryId);
              var v = c(m, p, y);
              return v === !0 && (v = m.refetch()), v !== !1 && d.set(m, v), v;
            }
            c !== null && l.set(m.queryId, { oq: m, lastDiff: y, diff: p });
          }
        }
      }), l.size && l.forEach(function(f, p) {
        var y = f.oq, m = f.lastDiff, v = f.diff, g;
        c && (v || (v = r.cache.diff(y.queryInfo.getDiffOptions())), g = c(y, v, m)), (!c || g === !0) && (g = y.refetch()), g !== !1 && d.set(y, g), p.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(p);
      }), u && this.cache.removeOptimistic(u), d;
    }, e.prototype.maskOperation = function(t) {
      var r, n, i, a = t.document, o = t.data;
      if (globalThis.__DEV__ !== !1) {
        var s = t.fetchPolicy, u = t.id, c = (r = pt(a)) === null || r === void 0 ? void 0 : r.operation, l = ((n = c?.[0]) !== null && n !== void 0 ? n : "o") + u;
        this.dataMasking && s === "no-cache" && !$h(a) && !this.noCacheWarningsByQueryId.has(l) && (this.noCacheWarningsByQueryId.add(l), globalThis.__DEV__ !== !1 && $.warn(
          37,
          (i = nr(a)) !== null && i !== void 0 ? i : "Unnamed ".concat(c ?? "operation")
        ));
      }
      return this.dataMasking ? wg(o, a, this.cache) : o;
    }, e.prototype.maskFragment = function(t) {
      var r = t.data, n = t.fragment, i = t.fragmentName;
      return this.dataMasking ? Hc(r, n, this.cache, i) : r;
    }, e.prototype.fetchQueryByPolicy = function(t, r, n) {
      var i = this, a = r.query, o = r.variables, s = r.fetchPolicy, u = r.refetchWritePolicy, c = r.errorPolicy, l = r.returnPartialData, d = r.context, f = r.notifyOnNetworkStatusChange, p = t.networkStatus;
      t.init({
        document: a,
        variables: o,
        networkStatus: n
      });
      var y = function() {
        return t.getDiff();
      }, m = function(D, I) {
        I === void 0 && (I = t.networkStatus || W.loading);
        var O = D.result;
        globalThis.__DEV__ !== !1 && !l && !re(O, {}) && ul(D.missing);
        var x = function(P) {
          return H.of(_({ data: P, loading: Tt(I), networkStatus: I }, D.complete ? null : { partial: !0 }));
        };
        return O && i.getDocumentInfo(a).hasForcedResolvers ? i.localState.runResolvers({
          document: a,
          remoteResult: { data: O },
          context: d,
          variables: o,
          onlyRunForcedResolvers: !0
        }).then(function(P) {
          return x(P.data || void 0);
        }) : c === "none" && I === W.refetch && Array.isArray(D.missing) ? x(void 0) : x(O);
      }, v = s === "no-cache" ? 0 : n === W.refetch && u !== "merge" ? 1 : 2, g = function() {
        return i.getResultsFromLink(t, v, {
          query: a,
          variables: o,
          context: d,
          fetchPolicy: s,
          errorPolicy: c
        });
      }, b = f && typeof p == "number" && p !== n && Tt(n);
      switch (s) {
        default:
        case "cache-first": {
          var E = y();
          return E.complete ? {
            fromLink: !1,
            sources: [m(E, t.markReady())]
          } : l || b ? {
            fromLink: !0,
            sources: [m(E), g()]
          } : { fromLink: !0, sources: [g()] };
        }
        case "cache-and-network": {
          var E = y();
          return E.complete || l || b ? {
            fromLink: !0,
            sources: [m(E), g()]
          } : { fromLink: !0, sources: [g()] };
        }
        case "cache-only":
          return {
            fromLink: !1,
            sources: [m(y(), t.markReady())]
          };
        case "network-only":
          return b ? {
            fromLink: !0,
            sources: [m(y()), g()]
          } : { fromLink: !0, sources: [g()] };
        case "no-cache":
          return b ? {
            fromLink: !0,
            // Note that queryInfo.getDiff() for no-cache queries does not call
            // cache.diff, but instead returns a { complete: false } stub result
            // when there is no queryInfo.diff already defined.
            sources: [m(t.getDiff()), g()]
          } : { fromLink: !0, sources: [g()] };
        case "standby":
          return { fromLink: !1, sources: [] };
      }
    }, e.prototype.getOrCreateQuery = function(t) {
      return t && !this.queries.has(t) && this.queries.set(t, new Jn(this, t)), this.queries.get(t);
    }, e.prototype.prepareContext = function(t) {
      t === void 0 && (t = {});
      var r = this.localState.prepareContext(t);
      return _(_(_({}, this.defaultContext), r), { clientAwareness: this.clientAwareness });
    }, e;
  })()
), zg = (
  /** @class */
  (function() {
    function e(t) {
      var r = t.cache, n = t.client, i = t.resolvers, a = t.fragmentMatcher;
      this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = r, n && (this.client = n), i && this.addResolvers(i), a && this.setFragmentMatcher(a);
    }
    return e.prototype.addResolvers = function(t) {
      var r = this;
      this.resolvers = this.resolvers || {}, Array.isArray(t) ? t.forEach(function(n) {
        r.resolvers = Go(r.resolvers, n);
      }) : this.resolvers = Go(this.resolvers, t);
    }, e.prototype.setResolvers = function(t) {
      this.resolvers = {}, this.addResolvers(t);
    }, e.prototype.getResolvers = function() {
      return this.resolvers || {};
    }, e.prototype.runResolvers = function(t) {
      return Be(this, arguments, void 0, function(r) {
        var n = r.document, i = r.remoteResult, a = r.context, o = r.variables, s = r.onlyRunForcedResolvers, u = s === void 0 ? !1 : s;
        return Ge(this, function(c) {
          return n ? [2, this.resolveDocument(n, i.data, a, o, this.fragmentMatcher, u).then(function(l) {
            return _(_({}, i), { data: l.result });
          })] : [2, i];
        });
      });
    }, e.prototype.setFragmentMatcher = function(t) {
      this.fragmentMatcher = t;
    }, e.prototype.getFragmentMatcher = function() {
      return this.fragmentMatcher;
    }, e.prototype.clientQuery = function(t) {
      return mr(["client"], t) && this.resolvers ? t : null;
    }, e.prototype.serverQuery = function(t) {
      return Ic(t);
    }, e.prototype.prepareContext = function(t) {
      var r = this.cache;
      return _(_({}, t), {
        cache: r,
        // Getting an entry's cache key is useful for local state resolvers.
        getCacheKey: function(n) {
          return r.identify(n);
        }
      });
    }, e.prototype.addExportedVariables = function(t) {
      return Be(this, arguments, void 0, function(r, n, i) {
        return n === void 0 && (n = {}), i === void 0 && (i = {}), Ge(this, function(a) {
          return r ? [2, this.resolveDocument(r, this.buildRootValueFromCache(r, n) || {}, this.prepareContext(i), n).then(function(o) {
            return _(_({}, n), o.exportedVariables);
          })] : [2, _({}, n)];
        });
      });
    }, e.prototype.shouldForceResolvers = function(t) {
      var r = !1;
      return Te(t, {
        Directive: {
          enter: function(n) {
            if (n.name.value === "client" && n.arguments && (r = n.arguments.some(function(i) {
              return i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0;
            }), r))
              return on;
          }
        }
      }), r;
    }, e.prototype.buildRootValueFromCache = function(t, r) {
      return this.cache.diff({
        query: wm(t),
        variables: r,
        returnPartialData: !0,
        optimistic: !1
      }).result;
    }, e.prototype.resolveDocument = function(t, r) {
      return Be(this, arguments, void 0, function(n, i, a, o, s, u) {
        var c, l, d, f, p, y, m, v, g, b, E;
        return a === void 0 && (a = {}), o === void 0 && (o = {}), s === void 0 && (s = function() {
          return !0;
        }), u === void 0 && (u = !1), Ge(this, function(D) {
          return c = Vt(n), l = Ut(n), d = jt(l), f = this.collectSelectionsToResolve(c, d), p = c.operation, y = p ? p.charAt(0).toUpperCase() + p.slice(1) : "Query", m = this, v = m.cache, g = m.client, b = {
            fragmentMap: d,
            context: _(_({}, a), { cache: v, client: g }),
            variables: o,
            fragmentMatcher: s,
            defaultOperationType: y,
            exportedVariables: {},
            selectionsToResolve: f,
            onlyRunForcedResolvers: u
          }, E = !1, [2, this.resolveSelectionSet(c.selectionSet, E, i, b).then(function(I) {
            return {
              result: I,
              exportedVariables: b.exportedVariables
            };
          })];
        });
      });
    }, e.prototype.resolveSelectionSet = function(t, r, n, i) {
      return Be(this, void 0, void 0, function() {
        var a, o, s, u, c, l = this;
        return Ge(this, function(d) {
          return a = i.fragmentMap, o = i.context, s = i.variables, u = [n], c = function(f) {
            return Be(l, void 0, void 0, function() {
              var p, y;
              return Ge(this, function(m) {
                return !r && !i.selectionsToResolve.has(f) ? [
                  2
                  /*return*/
                ] : Er(f, s) ? Ze(f) ? [2, this.resolveField(f, r, n, i).then(function(v) {
                  var g;
                  typeof v < "u" && u.push((g = {}, g[Re(f)] = v, g));
                })] : (cm(f) ? p = f : (p = a[f.name.value], $(p, 19, f.name.value)), p && p.typeCondition && (y = p.typeCondition.name.value, i.fragmentMatcher(n, y, o)) ? [2, this.resolveSelectionSet(p.selectionSet, r, n, i).then(function(v) {
                  u.push(v);
                })] : [
                  2
                  /*return*/
                ]) : [
                  2
                  /*return*/
                ];
              });
            });
          }, [2, Promise.all(t.selections.map(c)).then(function() {
            return dn(u);
          })];
        });
      });
    }, e.prototype.resolveField = function(t, r, n, i) {
      return Be(this, void 0, void 0, function() {
        var a, o, s, u, c, l, d, f, p, y = this;
        return Ge(this, function(m) {
          return n ? (a = i.variables, o = t.name.value, s = Re(t), u = o !== s, c = n[s] || n[o], l = Promise.resolve(c), (!i.onlyRunForcedResolvers || this.shouldForceResolvers(t)) && (d = n.__typename || i.defaultOperationType, f = this.resolvers && this.resolvers[d], f && (p = f[u ? o : s], p && (l = Promise.resolve(
            // In case the resolve function accesses reactive variables,
            // set cacheSlot to the current cache instance.
            wa.withValue(this.cache, p, [
              n,
              cn(t, a),
              i.context,
              { field: t, fragmentMap: i.fragmentMap }
            ])
          )))), [2, l.then(function(v) {
            var g, b;
            if (v === void 0 && (v = c), t.directives && t.directives.forEach(function(D) {
              D.name.value === "export" && D.arguments && D.arguments.forEach(function(I) {
                I.name.value === "as" && I.value.kind === "StringValue" && (i.exportedVariables[I.value.value] = v);
              });
            }), !t.selectionSet || v == null)
              return v;
            var E = (b = (g = t.directives) === null || g === void 0 ? void 0 : g.some(function(D) {
              return D.name.value === "client";
            })) !== null && b !== void 0 ? b : !1;
            if (Array.isArray(v))
              return y.resolveSubSelectedArray(t, r || E, v, i);
            if (t.selectionSet)
              return y.resolveSelectionSet(t.selectionSet, r || E, v, i);
          })]) : [2, null];
        });
      });
    }, e.prototype.resolveSubSelectedArray = function(t, r, n, i) {
      var a = this;
      return Promise.all(n.map(function(o) {
        if (o === null)
          return null;
        if (Array.isArray(o))
          return a.resolveSubSelectedArray(t, r, o, i);
        if (t.selectionSet)
          return a.resolveSelectionSet(t.selectionSet, r, o, i);
      }));
    }, e.prototype.collectSelectionsToResolve = function(t, r) {
      var n = function(o) {
        return !Array.isArray(o);
      }, i = this.selectionsToResolveCache;
      function a(o) {
        if (!i.has(o)) {
          var s = /* @__PURE__ */ new Set();
          i.set(o, s), Te(o, {
            Directive: function(u, c, l, d, f) {
              u.name.value === "client" && f.forEach(function(p) {
                n(p) && No(p) && s.add(p);
              });
            },
            FragmentSpread: function(u, c, l, d, f) {
              var p = r[u.name.value];
              $(p, 20, u.name.value);
              var y = a(p);
              y.size > 0 && (f.forEach(function(m) {
                n(m) && No(m) && s.add(m);
              }), s.add(u), y.forEach(function(m) {
                s.add(m);
              }));
            }
          });
        }
        return i.get(o);
      }
      return a(t);
    }, e;
  })()
), ws = !1, xa = (
  /** @class */
  (function() {
    function e(t) {
      var r = this, n;
      if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !t.cache)
        throw ve(16);
      var i = t.uri, a = t.credentials, o = t.headers, s = t.cache, u = t.documentTransform, c = t.ssrMode, l = c === void 0 ? !1 : c, d = t.ssrForceFetchDelay, f = d === void 0 ? 0 : d, p = t.connectToDevTools, y = t.queryDeduplication, m = y === void 0 ? !0 : y, v = t.defaultOptions, g = t.defaultContext, b = t.assumeImmutableResults, E = b === void 0 ? s.assumeImmutableResults : b, D = t.resolvers, I = t.typeDefs, O = t.fragmentMatcher, x = t.name, P = t.version, L = t.devtools, q = t.dataMasking, G = t.link;
      G || (G = i ? new gg({ uri: i, credentials: a, headers: o }) : Ie.empty()), this.link = G, this.cache = s, this.disableNetworkFetches = l || f > 0, this.queryDeduplication = m, this.defaultOptions = v || /* @__PURE__ */ Object.create(null), this.typeDefs = I, this.devtoolsConfig = _(_({}, L), { enabled: (n = L?.enabled) !== null && n !== void 0 ? n : p }), this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1), f && setTimeout(function() {
        return r.disableNetworkFetches = !1;
      }, f), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = ua, this.localState = new zg({
        cache: s,
        client: this,
        resolvers: D,
        fragmentMatcher: O
      }), this.queryManager = new Gg({
        cache: this.cache,
        link: this.link,
        defaultOptions: this.defaultOptions,
        defaultContext: g,
        documentTransform: u,
        queryDeduplication: m,
        ssrMode: l,
        dataMasking: !!q,
        clientAwareness: {
          name: x,
          version: P
        },
        localState: this.localState,
        assumeImmutableResults: E,
        onBroadcast: this.devtoolsConfig.enabled ? function() {
          r.devToolsHookCb && r.devToolsHookCb({
            action: {},
            state: {
              queries: r.queryManager.getQueryStore(),
              mutations: r.queryManager.mutationStore || {}
            },
            dataWithOptimisticResults: r.cache.extract(!0)
          });
        } : void 0
      }), this.devtoolsConfig.enabled && this.connectToDevTools();
    }
    return e.prototype.connectToDevTools = function() {
      if (!(typeof window > "u")) {
        var t = window, r = Symbol.for("apollo.devtools");
        (t[r] = t[r] || []).push(this), t.__APOLLO_CLIENT__ = this, !ws && globalThis.__DEV__ !== !1 && (ws = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
          if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
            var n = window.navigator, i = n && n.userAgent, a = void 0;
            typeof i == "string" && (i.indexOf("Chrome/") > -1 ? a = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : i.indexOf("Firefox/") > -1 && (a = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), a && globalThis.__DEV__ !== !1 && $.log("Download the Apollo DevTools for a better development experience: %s", a);
          }
        }, 1e4));
      }
    }, Object.defineProperty(e.prototype, "documentTransform", {
      /**
       * The `DocumentTransform` used to modify GraphQL documents before a request
       * is made. If a custom `DocumentTransform` is not provided, this will be the
       * default document transform.
       */
      get: function() {
        return this.queryManager.documentTransform;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.stop = function() {
      this.queryManager.stop();
    }, e.prototype.watchQuery = function(t) {
      return this.defaultOptions.watchQuery && (t = Bn(this.defaultOptions.watchQuery, t)), this.disableNetworkFetches && (t.fetchPolicy === "network-only" || t.fetchPolicy === "cache-and-network") && (t = _(_({}, t), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(t);
    }, e.prototype.query = function(t) {
      return this.defaultOptions.query && (t = Bn(this.defaultOptions.query, t)), $(t.fetchPolicy !== "cache-and-network", 17), this.disableNetworkFetches && t.fetchPolicy === "network-only" && (t = _(_({}, t), { fetchPolicy: "cache-first" })), this.queryManager.query(t);
    }, e.prototype.mutate = function(t) {
      return this.defaultOptions.mutate && (t = Bn(this.defaultOptions.mutate, t)), this.queryManager.mutate(t);
    }, e.prototype.subscribe = function(t) {
      var r = this, n = this.queryManager.generateQueryId();
      return this.queryManager.startGraphQLSubscription(t).map(function(i) {
        return _(_({}, i), { data: r.queryManager.maskOperation({
          document: t.query,
          data: i.data,
          fetchPolicy: t.fetchPolicy,
          id: n
        }) });
      });
    }, e.prototype.readQuery = function(t, r) {
      return r === void 0 && (r = !1), this.cache.readQuery(t, r);
    }, e.prototype.watchFragment = function(t) {
      var r;
      return this.cache.watchFragment(_(_({}, t), (r = {}, r[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, r)));
    }, e.prototype.readFragment = function(t, r) {
      return r === void 0 && (r = !1), this.cache.readFragment(t, r);
    }, e.prototype.writeQuery = function(t) {
      var r = this.cache.writeQuery(t);
      return t.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
    }, e.prototype.writeFragment = function(t) {
      var r = this.cache.writeFragment(t);
      return t.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
    }, e.prototype.__actionHookForDevTools = function(t) {
      this.devToolsHookCb = t;
    }, e.prototype.__requestRaw = function(t) {
      return qi(this.link, t);
    }, e.prototype.resetStore = function() {
      var t = this;
      return Promise.resolve().then(function() {
        return t.queryManager.clearStore({
          discardWatches: !1
        });
      }).then(function() {
        return Promise.all(t.resetStoreCallbacks.map(function(r) {
          return r();
        }));
      }).then(function() {
        return t.reFetchObservableQueries();
      });
    }, e.prototype.clearStore = function() {
      var t = this;
      return Promise.resolve().then(function() {
        return t.queryManager.clearStore({
          discardWatches: !0
        });
      }).then(function() {
        return Promise.all(t.clearStoreCallbacks.map(function(r) {
          return r();
        }));
      });
    }, e.prototype.onResetStore = function(t) {
      var r = this;
      return this.resetStoreCallbacks.push(t), function() {
        r.resetStoreCallbacks = r.resetStoreCallbacks.filter(function(n) {
          return n !== t;
        });
      };
    }, e.prototype.onClearStore = function(t) {
      var r = this;
      return this.clearStoreCallbacks.push(t), function() {
        r.clearStoreCallbacks = r.clearStoreCallbacks.filter(function(n) {
          return n !== t;
        });
      };
    }, e.prototype.reFetchObservableQueries = function(t) {
      return this.queryManager.reFetchObservableQueries(t);
    }, e.prototype.refetchQueries = function(t) {
      var r = this.queryManager.refetchQueries(t), n = [], i = [];
      r.forEach(function(o, s) {
        n.push(s), i.push(o);
      });
      var a = Promise.all(i);
      return a.queries = n, a.results = i, a.catch(function(o) {
        globalThis.__DEV__ !== !1 && $.debug(18, o);
      }), a;
    }, e.prototype.getObservableQueries = function(t) {
      return t === void 0 && (t = "active"), this.queryManager.getObservableQueries(t);
    }, e.prototype.extract = function(t) {
      return this.cache.extract(t);
    }, e.prototype.restore = function(t) {
      return this.cache.restore(t);
    }, e.prototype.addResolvers = function(t) {
      this.localState.addResolvers(t);
    }, e.prototype.setResolvers = function(t) {
      this.localState.setResolvers(t);
    }, e.prototype.getResolvers = function() {
      return this.localState.getResolvers();
    }, e.prototype.setLocalStateFragmentMatcher = function(t) {
      this.localState.setFragmentMatcher(t);
    }, e.prototype.setLink = function(t) {
      this.link = this.queryManager.link = t;
    }, Object.defineProperty(e.prototype, "defaultContext", {
      get: function() {
        return this.queryManager.defaultContext;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  })()
);
globalThis.__DEV__ !== !1 && (xa.prototype.getMemoryInternals = Vh);
var Vr = /* @__PURE__ */ new Map(), Wi = /* @__PURE__ */ new Map(), cl = !0, Jr = !1;
function ll(e) {
  return e.replace(/[\s,]+/g, " ").trim();
}
function Qg(e) {
  return ll(e.source.body.substring(e.start, e.end));
}
function Wg(e) {
  var t = /* @__PURE__ */ new Set(), r = [];
  return e.definitions.forEach(function(n) {
    if (n.kind === "FragmentDefinition") {
      var i = n.name.value, a = Qg(n.loc), o = Wi.get(i);
      o && !o.has(a) ? cl && console.warn("Warning: fragment with name " + i + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : o || Wi.set(i, o = /* @__PURE__ */ new Set()), o.add(a), t.has(a) || (t.add(a), r.push(n));
    } else
      r.push(n);
  }), _(_({}, e), { definitions: r });
}
function Hg(e) {
  var t = new Set(e.definitions);
  t.forEach(function(n) {
    n.loc && delete n.loc, Object.keys(n).forEach(function(i) {
      var a = n[i];
      a && typeof a == "object" && t.add(a);
    });
  });
  var r = e.loc;
  return r && (delete r.startToken, delete r.endToken), e;
}
function Yg(e) {
  var t = ll(e);
  if (!Vr.has(t)) {
    var r = ph(e, {
      experimentalFragmentVariables: Jr,
      allowLegacyFragmentVariables: Jr
    });
    if (!r || r.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    Vr.set(t, Hg(Wg(r)));
  }
  return Vr.get(t);
}
function h(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  typeof e == "string" && (e = [e]);
  var n = e[0];
  return t.forEach(function(i, a) {
    i && i.kind === "Document" ? n += i.loc.source.body : n += i, n += e[a + 1];
  }), Yg(n);
}
function Jg() {
  Vr.clear(), Wi.clear();
}
function Kg() {
  cl = !1;
}
function Xg() {
  Jr = !0;
}
function Zg() {
  Jr = !1;
}
var Xt = {
  gql: h,
  resetCaches: Jg,
  disableFragmentWarnings: Kg,
  enableExperimentalFragmentVariables: Xg,
  disableExperimentalFragmentVariables: Zg
};
(function(e) {
  e.gql = Xt.gql, e.resetCaches = Xt.resetCaches, e.disableFragmentWarnings = Xt.disableFragmentWarnings, e.enableExperimentalFragmentVariables = Xt.enableExperimentalFragmentVariables, e.disableExperimentalFragmentVariables = Xt.disableExperimentalFragmentVariables;
})(h || (h = {}));
h.default = h;
var Ts;
(function(e) {
  e.Database = "DATABASE", e.Filesystem = "FILESYSTEM";
})(Ts || (Ts = {}));
var Is;
(function(e) {
  e.Add = "ADD", e.Remove = "REMOVE", e.Set = "SET";
})(Is || (Is = {}));
var Os;
(function(e) {
  e.Cut = "CUT", e.Uncut = "UNCUT";
})(Os || (Os = {}));
var ks;
(function(e) {
  e.Between = "BETWEEN", e.Equals = "EQUALS", e.Excludes = "EXCLUDES", e.GreaterThan = "GREATER_THAN", e.Includes = "INCLUDES", e.IncludesAll = "INCLUDES_ALL", e.IsNull = "IS_NULL", e.LessThan = "LESS_THAN", e.MatchesRegex = "MATCHES_REGEX", e.NotBetween = "NOT_BETWEEN", e.NotEquals = "NOT_EQUALS", e.NotMatchesRegex = "NOT_MATCHES_REGEX", e.NotNull = "NOT_NULL";
})(ks || (ks = {}));
var xs;
(function(e) {
  e.Galleries = "GALLERIES", e.Groups = "GROUPS", e.Images = "IMAGES", e.Movies = "MOVIES", e.Performers = "PERFORMERS", e.Scenes = "SCENES", e.SceneMarkers = "SCENE_MARKERS", e.Studios = "STUDIOS", e.Tags = "TAGS";
})(xs || (xs = {}));
var Fs;
(function(e) {
  e.Female = "FEMALE", e.Intersex = "INTERSEX", e.Male = "MALE", e.NonBinary = "NON_BINARY", e.TransgenderFemale = "TRANSGENDER_FEMALE", e.TransgenderMale = "TRANSGENDER_MALE";
})(Fs || (Fs = {}));
var Cs;
(function(e) {
  e.Md5 = "MD5", e.Oshash = "OSHASH";
})(Cs || (Cs = {}));
var As;
(function(e) {
  e.Ignore = "IGNORE", e.Merge = "MERGE", e.Overwrite = "OVERWRITE";
})(As || (As = {}));
var $s;
(function(e) {
  e.FitX = "FIT_X", e.FitXy = "FIT_XY", e.Original = "ORIGINAL";
})($s || ($s = {}));
var Ps;
(function(e) {
  e.PanY = "PAN_Y", e.Zoom = "ZOOM";
})(Ps || (Ps = {}));
var Ns;
(function(e) {
  e.Fail = "FAIL", e.Ignore = "IGNORE", e.Overwrite = "OVERWRITE";
})(Ns || (Ns = {}));
var Rs;
(function(e) {
  e.Create = "CREATE", e.Fail = "FAIL", e.Ignore = "IGNORE";
})(Rs || (Rs = {}));
var Ms;
(function(e) {
  e.Cancelled = "CANCELLED", e.Failed = "FAILED", e.Finished = "FINISHED", e.Ready = "READY", e.Running = "RUNNING", e.Stopping = "STOPPING";
})(Ms || (Ms = {}));
var Ls;
(function(e) {
  e.Add = "ADD", e.Remove = "REMOVE", e.Update = "UPDATE";
})(Ls || (Ls = {}));
var js;
(function(e) {
  e.Debug = "Debug", e.Error = "Error", e.Info = "Info", e.Progress = "Progress", e.Trace = "Trace", e.Warning = "Warning";
})(js || (js = {}));
var qs;
(function(e) {
  e.Landscape = "LANDSCAPE", e.Portrait = "PORTRAIT", e.Square = "SQUARE";
})(qs || (qs = {}));
var Us;
(function(e) {
  e.Plugin = "Plugin", e.Scraper = "Scraper";
})(Us || (Us = {}));
var Vs;
(function(e) {
  e.Boolean = "BOOLEAN", e.Number = "NUMBER", e.String = "STRING";
})(Vs || (Vs = {}));
var Bs;
(function(e) {
  e.Fast = "fast", e.Medium = "medium", e.Slow = "slow", e.Slower = "slower", e.Ultrafast = "ultrafast", e.Veryfast = "veryfast", e.Veryslow = "veryslow";
})(Bs || (Bs = {}));
var Gs;
(function(e) {
  e.EightK = "EIGHT_K", e.FiveK = "FIVE_K", e.FourK = "FOUR_K", e.FullHd = "FULL_HD", e.Huge = "HUGE", e.Low = "LOW", e.QuadHd = "QUAD_HD", e.R360P = "R360P", e.SevenK = "SEVEN_K", e.SixK = "SIX_K", e.Standard = "STANDARD", e.StandardHd = "STANDARD_HD", e.VeryLow = "VERY_LOW", e.VrHd = "VR_HD", e.WebHd = "WEB_HD";
})(Gs || (Gs = {}));
var zs;
(function(e) {
  e.Gallery = "GALLERY", e.Group = "GROUP", e.Image = "IMAGE", e.Movie = "MOVIE", e.Performer = "PERFORMER", e.Scene = "SCENE";
})(zs || (zs = {}));
var Qs;
(function(e) {
  e.Fragment = "FRAGMENT", e.Name = "NAME", e.Url = "URL";
})(Qs || (Qs = {}));
var Ws;
(function(e) {
  e.Asc = "ASC", e.Desc = "DESC";
})(Ws || (Ws = {}));
var Hs;
(function(e) {
  e.FourK = "FOUR_K", e.FullHd = "FULL_HD", e.Low = "LOW", e.Original = "ORIGINAL", e.Standard = "STANDARD", e.StandardHd = "STANDARD_HD";
})(Hs || (Hs = {}));
var Ys;
(function(e) {
  e.NeedsMigration = "NEEDS_MIGRATION", e.Ok = "OK", e.Setup = "SETUP";
})(Ys || (Ys = {}));
const fl = h`
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
    `, dl = h`
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
    `, pl = h`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  port
  whitelistedIPs
  interfaces
  videoSortOrder
}
    `, hl = h`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `, ey = h`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `, ty = h`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `, ry = h`
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
    ${ty}`, ml = h`
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
    ${ey}
${ry}`, ny = h`
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
${ml}`;
h`
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
    `;
const Fa = h`
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
    `, iy = h`
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
    `, ay = h`
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
    `, gl = h`
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
    `, hn = h`
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
    ${gl}`, yl = h`
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
    `, vl = h`
    fragment FolderData on Folder {
  id
  path
}
    `, Ca = h`
    fragment GalleryChapterData on GalleryChapter {
  id
  title
  image_index
  gallery {
    id
  }
}
    `, mn = h`
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
    `, mt = h`
    fragment SlimTagData on Tag {
  id
  name
  sort_name
  aliases
  image_path
  parent_count
  child_count
}
    `, nt = h`
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
    ${mt}`, bl = h`
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
    `, Bt = h`
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
    ${bl}`, Gt = h`
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
${Ca}
${mn}
${mt}
${nt}
${Bt}`, oy = h`
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
    ${Gt}
${mn}
${mt}
${nt}
${gl}`, Sl = h`
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
    `, _l = h`
    fragment LogEntryData on LogEntry {
  time
  level
  message
}
    `, zt = h`
    fragment PackageData on Package {
  package_id
  name
  version
  date
  metadata
  sourceURL
}
    `;
h`
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
    `;
const sy = h`
    fragment SelectPerformerData on Performer {
  id
  name
  disambiguation
  alias_list
  image_path
  birthdate
  death_date
}
    `, uy = h`
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
    `, gt = h`
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
    ${uy}`, El = h`
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
${Bt}`, cy = h`
    fragment SlimGroupData on Group {
  id
  name
  front_image_path
  rating100
}
    `, Qt = h`
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
    ${mn}
${mt}
${cy}`, it = h`
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
${gt}
${El}
${mn}
${Qt}
${mt}
${nt}`, ly = h`
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
    `, fy = h`
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
    `, at = h`
    fragment ScrapedSceneTagData on ScrapedTag {
  stored_id
  name
}
    `, Aa = h`
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
    ${at}`, Dl = h`
    fragment ScrapedGroupStudioData on ScrapedStudio {
  stored_id
  name
  url
}
    `, dy = h`
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
${at}`, gn = h`
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
    `, wr = h`
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
    ${at}`, wl = h`
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
${at}`, $a = h`
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
    ${gn}
${at}
${wr}
${wl}`, Tl = h`
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
    ${gn}
${at}
${wr}`, Il = h`
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
    ${gn}
${at}
${wr}`;
h`
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
    ${gn}
${at}
${wr}
${wl}`;
h`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${wr}`;
const yn = h`
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
    ${mt}`, py = h`
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
    `, Wt = h`
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
    ${mt}`, hy = h`
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
    `;
h`
    mutation Setup($input: SetupInput!) {
  setup(input: $input)
}
    `;
h`
    mutation Migrate($input: MigrateInput!) {
  migrate(input: $input)
}
    `;
h`
    mutation DownloadFFMpeg {
  downloadFFMpeg
}
    `;
h`
    mutation ConfigureGeneral($input: ConfigGeneralInput!) {
  configureGeneral(input: $input) {
    ...ConfigGeneralData
  }
}
    ${fl}`;
h`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${dl}`;
h`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${pl}`;
h`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${hl}`;
h`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${ml}`;
h`
    mutation ConfigureUI($input: Map, $partial: Map) {
  configureUI(input: $input, partial: $partial)
}
    `;
h`
    mutation ConfigureUISetting($key: String!, $value: Any) {
  configureUISetting(key: $key, value: $value)
}
    `;
h`
    mutation GenerateAPIKey($input: GenerateAPIKeyInput!) {
  generateAPIKey(input: $input)
}
    `;
h`
    mutation EnableDLNA($input: EnableDLNAInput!) {
  enableDLNA(input: $input)
}
    `;
h`
    mutation DisableDLNA($input: DisableDLNAInput!) {
  disableDLNA(input: $input)
}
    `;
h`
    mutation AddTempDLNAIP($input: AddTempDLNAIPInput!) {
  addTempDLNAIP(input: $input)
}
    `;
h`
    mutation RemoveTempDLNAIP($input: RemoveTempDLNAIPInput!) {
  removeTempDLNAIP(input: $input)
}
    `;
h`
    mutation DeleteFiles($ids: [ID!]!) {
  deleteFiles(ids: $ids)
}
    `;
h`
    mutation SaveFilter($input: SaveFilterInput!) {
  saveFilter(input: $input) {
    ...SavedFilterData
  }
}
    ${Fa}`;
h`
    mutation DestroySavedFilter($input: DestroyFilterInput!) {
  destroySavedFilter(input: $input)
}
    `;
h`
    mutation GalleryChapterCreate($title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterCreate(
    input: {title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${Ca}`;
h`
    mutation GalleryChapterUpdate($id: ID!, $title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterUpdate(
    input: {id: $id, title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${Ca}`;
h`
    mutation GalleryChapterDestroy($id: ID!) {
  galleryChapterDestroy(id: $id)
}
    `;
h`
    mutation GalleryCreate($input: GalleryCreateInput!) {
  galleryCreate(input: $input) {
    ...GalleryData
  }
}
    ${Gt}`;
h`
    mutation GalleryUpdate($input: GalleryUpdateInput!) {
  galleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${Gt}`;
h`
    mutation BulkGalleryUpdate($input: BulkGalleryUpdateInput!) {
  bulkGalleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${Gt}`;
h`
    mutation GalleriesUpdate($input: [GalleryUpdateInput!]!) {
  galleriesUpdate(input: $input) {
    ...GalleryData
  }
}
    ${Gt}`;
h`
    mutation GalleryDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  galleryDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
h`
    mutation AddGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  addGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `;
h`
    mutation RemoveGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  removeGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `;
h`
    mutation SetGalleryCover($gallery_id: ID!, $cover_image_id: ID!) {
  setGalleryCover(
    input: {gallery_id: $gallery_id, cover_image_id: $cover_image_id}
  )
}
    `;
h`
    mutation ResetGalleryCover($gallery_id: ID!) {
  resetGalleryCover(input: {gallery_id: $gallery_id})
}
    `;
h`
    mutation GroupCreate($input: GroupCreateInput!) {
  groupCreate(input: $input) {
    ...GroupData
  }
}
    ${Qt}`;
h`
    mutation GroupUpdate($input: GroupUpdateInput!) {
  groupUpdate(input: $input) {
    ...GroupData
  }
}
    ${Qt}`;
h`
    mutation BulkGroupUpdate($input: BulkGroupUpdateInput!) {
  bulkGroupUpdate(input: $input) {
    ...GroupData
  }
}
    ${Qt}`;
h`
    mutation GroupDestroy($id: ID!) {
  groupDestroy(input: {id: $id})
}
    `;
h`
    mutation GroupsDestroy($ids: [ID!]!) {
  groupsDestroy(ids: $ids)
}
    `;
h`
    mutation AddGroupSubGroups($input: GroupSubGroupAddInput!) {
  addGroupSubGroups(input: $input)
}
    `;
h`
    mutation RemoveGroupSubGroups($input: GroupSubGroupRemoveInput!) {
  removeGroupSubGroups(input: $input)
}
    `;
h`
    mutation ReorderSubGroups($input: ReorderSubGroupsInput!) {
  reorderSubGroups(input: $input)
}
    `;
h`
    mutation ImageUpdate($input: ImageUpdateInput!) {
  imageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${hn}`;
h`
    mutation BulkImageUpdate($input: BulkImageUpdateInput!) {
  bulkImageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${hn}`;
h`
    mutation ImagesUpdate($input: [ImageUpdateInput!]!) {
  imagesUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${hn}`;
h`
    mutation ImageIncrementO($id: ID!) {
  imageIncrementO(id: $id)
}
    `;
h`
    mutation ImageDecrementO($id: ID!) {
  imageDecrementO(id: $id)
}
    `;
h`
    mutation ImageResetO($id: ID!) {
  imageResetO(id: $id)
}
    `;
h`
    mutation ImageDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  imageDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
h`
    mutation ImagesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  imagesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
h`
    mutation StopJob($job_id: ID!) {
  stopJob(job_id: $job_id)
}
    `;
h`
    mutation StopAllJobs {
  stopAllJobs
}
    `;
h`
    mutation MetadataImport {
  metadataImport
}
    `;
h`
    mutation MetadataExport {
  metadataExport
}
    `;
h`
    mutation ExportObjects($input: ExportObjectsInput!) {
  exportObjects(input: $input)
}
    `;
h`
    mutation ImportObjects($input: ImportObjectsInput!) {
  importObjects(input: $input)
}
    `;
h`
    mutation MetadataScan($input: ScanMetadataInput!) {
  metadataScan(input: $input)
}
    `;
h`
    mutation MetadataGenerate($input: GenerateMetadataInput!) {
  metadataGenerate(input: $input)
}
    `;
h`
    mutation MetadataAutoTag($input: AutoTagMetadataInput!) {
  metadataAutoTag(input: $input)
}
    `;
h`
    mutation MetadataIdentify($input: IdentifyMetadataInput!) {
  metadataIdentify(input: $input)
}
    `;
h`
    mutation MetadataClean($input: CleanMetadataInput!) {
  metadataClean(input: $input)
}
    `;
h`
    mutation MetadataCleanGenerated($input: CleanGeneratedInput!) {
  metadataCleanGenerated(input: $input)
}
    `;
h`
    mutation MigrateHashNaming {
  migrateHashNaming
}
    `;
h`
    mutation BackupDatabase($input: BackupDatabaseInput!) {
  backupDatabase(input: $input)
}
    `;
h`
    mutation AnonymiseDatabase($input: AnonymiseDatabaseInput!) {
  anonymiseDatabase(input: $input)
}
    `;
h`
    mutation OptimiseDatabase {
  optimiseDatabase
}
    `;
h`
    mutation MigrateSceneScreenshots($input: MigrateSceneScreenshotsInput!) {
  migrateSceneScreenshots(input: $input)
}
    `;
h`
    mutation MigrateBlobs($input: MigrateBlobsInput!) {
  migrateBlobs(input: $input)
}
    `;
h`
    mutation PerformerCreate($input: PerformerCreateInput!) {
  performerCreate(input: $input) {
    ...PerformerData
  }
}
    ${nt}`;
h`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${nt}`;
h`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${nt}`;
h`
    mutation PerformerDestroy($id: ID!) {
  performerDestroy(input: {id: $id})
}
    `;
h`
    mutation PerformersDestroy($ids: [ID!]!) {
  performersDestroy(ids: $ids)
}
    `;
h`
    mutation ReloadPlugins {
  reloadPlugins
}
    `;
h`
    mutation RunPluginTask($plugin_id: ID!, $task_name: String!, $args_map: Map) {
  runPluginTask(plugin_id: $plugin_id, task_name: $task_name, args_map: $args_map)
}
    `;
const my = h`
    mutation ConfigurePlugin($plugin_id: ID!, $input: Map!) {
  configurePlugin(plugin_id: $plugin_id, input: $input)
}
    `;
h`
    mutation SetPluginsEnabled($enabledMap: BoolMap!) {
  setPluginsEnabled(enabledMap: $enabledMap)
}
    `;
h`
    mutation InstallPluginPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Plugin, packages: $packages)
}
    `;
h`
    mutation UpdatePluginPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Plugin, packages: $packages)
}
    `;
h`
    mutation UninstallPluginPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Plugin, packages: $packages)
}
    `;
h`
    mutation SceneMarkerCreate($title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerCreate(
    input: {title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${gt}`;
h`
    mutation SceneMarkerUpdate($id: ID!, $title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerUpdate(
    input: {id: $id, title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${gt}`;
h`
    mutation SceneMarkerDestroy($id: ID!) {
  sceneMarkerDestroy(id: $id)
}
    `;
h`
    mutation SceneMarkersDestroy($ids: [ID!]!) {
  sceneMarkersDestroy(ids: $ids)
}
    `;
h`
    mutation SceneCreate($input: SceneCreateInput!) {
  sceneCreate(input: $input) {
    ...SceneData
  }
}
    ${it}`;
h`
    mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${it}`;
h`
    mutation BulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${it}`;
h`
    mutation ScenesUpdate($input: [SceneUpdateInput!]!) {
  scenesUpdate(input: $input) {
    ...SceneData
  }
}
    ${it}`;
h`
    mutation SceneSaveActivity($id: ID!, $resume_time: Float, $playDuration: Float) {
  sceneSaveActivity(
    id: $id
    resume_time: $resume_time
    playDuration: $playDuration
  )
}
    `;
h`
    mutation SceneResetActivity($id: ID!, $reset_resume: Boolean!, $reset_duration: Boolean!) {
  sceneResetActivity(
    id: $id
    reset_resume: $reset_resume
    reset_duration: $reset_duration
  )
}
    `;
h`
    mutation SceneAddPlay($id: ID!, $times: [Timestamp!]) {
  sceneAddPlay(id: $id, times: $times) {
    count
    history
  }
}
    `;
h`
    mutation SceneDeletePlay($id: ID!, $times: [Timestamp!]) {
  sceneDeletePlay(id: $id, times: $times) {
    count
    history
  }
}
    `;
h`
    mutation SceneResetPlayCount($id: ID!) {
  sceneResetPlayCount(id: $id)
}
    `;
h`
    mutation SceneAddO($id: ID!, $times: [Timestamp!]) {
  sceneAddO(id: $id, times: $times) {
    count
    history
  }
}
    `;
h`
    mutation SceneDeleteO($id: ID!, $times: [Timestamp!]) {
  sceneDeleteO(id: $id, times: $times) {
    count
    history
  }
}
    `;
h`
    mutation SceneResetO($id: ID!) {
  sceneResetO(id: $id)
}
    `;
h`
    mutation SceneDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  sceneDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
h`
    mutation ScenesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  scenesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
h`
    mutation SceneGenerateScreenshot($id: ID!, $at: Float) {
  sceneGenerateScreenshot(id: $id, at: $at)
}
    `;
h`
    mutation SceneAssignFile($input: AssignSceneFileInput!) {
  sceneAssignFile(input: $input)
}
    `;
h`
    mutation SceneMerge($input: SceneMergeInput!) {
  sceneMerge(input: $input) {
    id
  }
}
    `;
h`
    mutation ReloadScrapers {
  reloadScrapers
}
    `;
h`
    mutation InstallScraperPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Scraper, packages: $packages)
}
    `;
h`
    mutation UpdateScraperPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Scraper, packages: $packages)
}
    `;
h`
    mutation UninstallScraperPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Scraper, packages: $packages)
}
    `;
h`
    mutation SubmitStashBoxFingerprints($input: StashBoxFingerprintSubmissionInput!) {
  submitStashBoxFingerprints(input: $input)
}
    `;
h`
    mutation StashBoxBatchPerformerTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchPerformerTag(input: $input)
}
    `;
h`
    mutation StashBoxBatchStudioTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchStudioTag(input: $input)
}
    `;
h`
    mutation SubmitStashBoxSceneDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxSceneDraft(input: $input)
}
    `;
h`
    mutation SubmitStashBoxPerformerDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxPerformerDraft(input: $input)
}
    `;
h`
    mutation StudioCreate($input: StudioCreateInput!) {
  studioCreate(input: $input) {
    ...StudioData
  }
}
    ${yn}`;
h`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${yn}`;
h`
    mutation StudioDestroy($id: ID!) {
  studioDestroy(input: {id: $id})
}
    `;
h`
    mutation StudiosDestroy($ids: [ID!]!) {
  studiosDestroy(ids: $ids)
}
    `;
h`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${Wt}`;
h`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `;
h`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `;
h`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${Wt}`;
h`
    mutation BulkTagUpdate($input: BulkTagUpdateInput!) {
  bulkTagUpdate(input: $input) {
    ...TagData
  }
}
    ${Wt}`;
h`
    mutation TagsMerge($source: [ID!]!, $destination: ID!) {
  tagsMerge(input: {source: $source, destination: $destination}) {
    ...TagData
  }
}
    ${Wt}`;
h`
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
    `;
h`
    query FindSavedFilter($id: ID!) {
  findSavedFilter(id: $id) {
    ...SavedFilterData
  }
}
    ${Fa}`;
h`
    query FindSavedFilters($mode: FilterMode) {
  findSavedFilters(mode: $mode) {
    ...SavedFilterData
  }
}
    ${Fa}`;
h`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${El}`;
h`
    query FindGallery($id: ID!) {
  findGallery(id: $id) {
    ...GalleryData
  }
}
    ${Gt}`;
h`
    query FindGalleriesForSelect($filter: FindFilterType, $gallery_filter: GalleryFilterType, $ids: [ID!]) {
  findGalleries(filter: $filter, gallery_filter: $gallery_filter, ids: $ids) {
    count
    galleries {
      ...SelectGalleryData
    }
  }
}
    ${iy}`;
h`
    query FindGalleryImageID($id: ID!, $index: Int!) {
  findGallery(id: $id) {
    image(index: $index) {
      id
    }
  }
}
    `;
h`
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
    ${hn}`;
h`
    query FindImage($id: ID!, $checksum: String) {
  findImage(id: $id, checksum: $checksum) {
    ...ImageData
  }
}
    ${oy}`;
h`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${Sl}`;
h`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${Sl}`;
h`
    query SceneWall($q: String) {
  sceneWall(q: $q) {
    ...SceneData
  }
}
    ${it}`;
h`
    query MarkerWall($q: String) {
  markerWall(q: $q) {
    ...SceneMarkerData
  }
}
    ${gt}`;
h`
    query MarkerStrings($q: String, $sort: String) {
  markerStrings(q: $q, sort: $sort) {
    id
    count
    title
  }
}
    `;
h`
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
    `;
h`
    query Logs {
  logs {
    ...LogEntryData
  }
}
    ${_l}`;
h`
    query Version {
  version {
    version
    hash
    build_time
  }
}
    `;
h`
    query LatestVersion {
  latestversion {
    version
    shorthash
    release_date
    url
  }
}
    `;
h`
    query FindGroups($filter: FindFilterType, $group_filter: GroupFilterType) {
  findGroups(filter: $filter, group_filter: $group_filter) {
    count
    groups {
      ...GroupData
    }
  }
}
    ${Qt}`;
h`
    query FindGroup($id: ID!) {
  findGroup(id: $id) {
    ...GroupData
  }
}
    ${Qt}`;
h`
    query FindGroupsForSelect($filter: FindFilterType, $group_filter: GroupFilterType, $ids: [ID!]) {
  findGroups(filter: $filter, group_filter: $group_filter, ids: $ids) {
    count
    groups {
      ...SelectGroupData
    }
  }
}
    ${ay}`;
h`
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
    ${nt}`;
h`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${nt}`;
h`
    query FindPerformersForSelect($filter: FindFilterType, $performer_filter: PerformerFilterType, $ids: [ID!]) {
  findPerformers(filter: $filter, performer_filter: $performer_filter, ids: $ids) {
    count
    performers {
      ...SelectPerformerData
    }
  }
}
    ${sy}`;
h`
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
    `;
h`
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
    `;
h`
    query InstalledPluginPackages {
  installedPackages(type: Plugin) {
    ...PackageData
  }
}
    ${zt}`;
h`
    query InstalledPluginPackagesStatus {
  installedPackages(type: Plugin) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${zt}`;
h`
    query AvailablePluginPackages($source: String!) {
  availablePackages(source: $source, type: Plugin) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${zt}`;
h`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${gt}`;
h`
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
    ${Bt}`;
h`
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
    ${Bt}`;
h`
    query FindDuplicateScenes($distance: Int, $duration_diff: Float) {
  findDuplicateScenes(distance: $distance, duration_diff: $duration_diff) {
    ...SlimSceneData
  }
}
    ${Bt}`;
h`
    query FindScene($id: ID!, $checksum: String) {
  findScene(id: $id, checksum: $checksum) {
    ...SceneData
  }
}
    ${it}`;
h`
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
    ${gt}`;
h`
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
    ${Bt}`;
h`
    query SceneStreams($id: ID!) {
  findScene(id: $id) {
    sceneStreams {
      url
      mime_type
      label
    }
  }
}
    `;
h`
    query FindScenesForSelect($filter: FindFilterType, $scene_filter: SceneFilterType, $ids: [ID!]) {
  findScenes(filter: $filter, scene_filter: $scene_filter, ids: $ids) {
    count
    scenes {
      ...SelectSceneData
    }
  }
}
    ${ly}`;
h`
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
    `;
h`
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
    `;
h`
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
    `;
h`
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
    `;
h`
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
    `;
h`
    query ScrapeSingleStudio($source: ScraperSourceInput!, $input: ScrapeSingleStudioInput!) {
  scrapeSingleStudio(source: $source, input: $input) {
    ...ScrapedStudioData
  }
}
    ${fy}`;
h`
    query ScrapeSinglePerformer($source: ScraperSourceInput!, $input: ScrapeSinglePerformerInput!) {
  scrapeSinglePerformer(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${Aa}`;
h`
    query ScrapeMultiPerformers($source: ScraperSourceInput!, $input: ScrapeMultiPerformersInput!) {
  scrapeMultiPerformers(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${Aa}`;
h`
    query ScrapePerformerURL($url: String!) {
  scrapePerformerURL(url: $url) {
    ...ScrapedPerformerData
  }
}
    ${Aa}`;
h`
    query ScrapeSingleScene($source: ScraperSourceInput!, $input: ScrapeSingleSceneInput!) {
  scrapeSingleScene(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${$a}`;
h`
    query ScrapeMultiScenes($source: ScraperSourceInput!, $input: ScrapeMultiScenesInput!) {
  scrapeMultiScenes(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${$a}`;
h`
    query ScrapeSceneURL($url: String!) {
  scrapeSceneURL(url: $url) {
    ...ScrapedSceneData
  }
}
    ${$a}`;
h`
    query ScrapeSingleGallery($source: ScraperSourceInput!, $input: ScrapeSingleGalleryInput!) {
  scrapeSingleGallery(source: $source, input: $input) {
    ...ScrapedGalleryData
  }
}
    ${Tl}`;
h`
    query ScrapeSingleImage($source: ScraperSourceInput!, $input: ScrapeSingleImageInput!) {
  scrapeSingleImage(source: $source, input: $input) {
    ...ScrapedImageData
  }
}
    ${Il}`;
h`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${Tl}`;
h`
    query ScrapeImageURL($url: String!) {
  scrapeImageURL(url: $url) {
    ...ScrapedImageData
  }
}
    ${Il}`;
h`
    query ScrapeGroupURL($url: String!) {
  scrapeGroupURL(url: $url) {
    ...ScrapedGroupData
  }
}
    ${dy}`;
h`
    query InstalledScraperPackages {
  installedPackages(type: Scraper) {
    ...PackageData
  }
}
    ${zt}`;
h`
    query InstalledScraperPackagesStatus {
  installedPackages(type: Scraper) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${zt}`;
h`
    query AvailableScraperPackages($source: String!) {
  availablePackages(source: $source, type: Scraper) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${zt}`;
const gy = h`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${ny}`;
h`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `;
h`
    query ValidateStashBox($input: StashBoxInput!) {
  validateStashBoxCredentials(input: $input) {
    valid
    status
  }
}
    `;
h`
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
    `;
h`
    query FindStudios($filter: FindFilterType, $studio_filter: StudioFilterType) {
  findStudios(filter: $filter, studio_filter: $studio_filter) {
    count
    studios {
      ...StudioData
    }
  }
}
    ${yn}`;
h`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${yn}`;
h`
    query FindStudiosForSelect($filter: FindFilterType, $studio_filter: StudioFilterType, $ids: [ID!]) {
  findStudios(filter: $filter, studio_filter: $studio_filter, ids: $ids) {
    count
    studios {
      ...SelectStudioData
    }
  }
}
    ${py}`;
h`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagData
    }
  }
}
    ${Wt}`;
h`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${Wt}`;
h`
    query FindTagsForSelect($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...SelectTagData
    }
  }
}
    ${hy}`;
h`
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
    ${it}`;
h`
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
    ${gt}
${it}`;
h`
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
    `;
h`
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
    `;
h`
    subscription LoggingSubscribe {
  loggingSubscribe {
    ...LogEntryData
  }
}
    ${_l}`;
const yy = h`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `;
function vy(e) {
  return ae(e) && "code" in e && "reason" in e;
}
function by(e) {
  var t;
  return ae(e) && ((t = e.target) === null || t === void 0 ? void 0 : t.readyState) === WebSocket.CLOSED;
}
var Sy = (
  /** @class */
  (function(e) {
    Ee(t, e);
    function t(r) {
      var n = e.call(this) || this;
      return n.client = r, n;
    }
    return t.prototype.request = function(r) {
      var n = this;
      return new H(function(i) {
        return n.client.subscribe(_(_({}, r), { query: We(r.query) }), {
          next: i.next.bind(i),
          complete: i.complete.bind(i),
          error: function(a) {
            if (a instanceof Error)
              return i.error(a);
            var o = vy(a);
            return o || by(a) ? i.error(
              // reason will be available on clean closes
              new Error("Socket closed".concat(o ? " with event ".concat(a.code) : "").concat(o ? " ".concat(a.reason) : ""))
            ) : i.error(new Qe({
              graphQLErrors: Array.isArray(a) ? a : [a]
            }));
          }
          // casting around a wrong type in graphql-ws, which incorrectly expects `Sink<ExecutionResult>`
        });
      });
    }, t;
  })(Ie)
);
function be(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function st(e) {
  return be(e) === "object";
}
function _y(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function Js(e, t) {
  return e.length < 124 ? e : t;
}
const Ey = "graphql-transport-ws";
var Se;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(Se || (Se = {}));
var se;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(se || (se = {}));
function Ol(e) {
  if (!st(e))
    throw new Error(`Message is expected to be an object, but got ${be(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${be(e.type)}`);
  switch (e.type) {
    case se.ConnectionInit:
    case se.ConnectionAck:
    case se.Ping:
    case se.Pong: {
      if (e.payload != null && !st(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case se.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${be(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!st(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${be(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${be(e.payload.query)}`);
      if (e.payload.variables != null && !st(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${be(e.payload.variables)}`);
      if (e.payload.operationName != null && be(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${be(e.payload.operationName)}`);
      if (e.payload.extensions != null && !st(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${be(e.payload.extensions)}`);
      break;
    }
    case se.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${be(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!st(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${be(e.payload)}`);
      break;
    }
    case se.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${be(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!_y(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case se.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${be(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function Dy(e, t) {
  return Ol(typeof e == "string" ? JSON.parse(e, t) : e);
}
function Zt(e, t) {
  return Ol(e), JSON.stringify(e, t);
}
var Ct = function(e) {
  return this instanceof Ct ? (this.v = e, this) : new Ct(e);
}, wy = function(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(p) {
    return function(y) {
      return Promise.resolve(y).then(p, d);
    };
  }
  function s(p, y) {
    n[p] && (i[p] = function(m) {
      return new Promise(function(v, g) {
        a.push([p, m, v, g]) > 1 || u(p, m);
      });
    }, y && (i[p] = y(i[p])));
  }
  function u(p, y) {
    try {
      c(n[p](y));
    } catch (m) {
      f(a[0][3], m);
    }
  }
  function c(p) {
    p.value instanceof Ct ? Promise.resolve(p.value.v).then(l, d) : f(a[0][2], p);
  }
  function l(p) {
    u("next", p);
  }
  function d(p) {
    u("throw", p);
  }
  function f(p, y) {
    p(y), a.shift(), a.length && u(a[0][0], a[0][1]);
  }
};
function Ty(e) {
  const {
    url: t,
    connectionParams: r,
    lazy: n = !0,
    onNonLazyError: i = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: o = 0,
    disablePong: s,
    connectionAckWaitTimeout: u = 0,
    retryAttempts: c = 5,
    retryWait: l = async function(J) {
      let S = 1e3;
      for (let w = 0; w < J; w++)
        S *= 2;
      await new Promise((w) => setTimeout(w, S + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * 2700 + 300)));
    },
    shouldRetry: d = Kn,
    isFatalConnectionProblem: f,
    on: p,
    webSocketImpl: y,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: m = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (J) => {
        const S = Math.random() * 16 | 0;
        return (J == "x" ? S : S & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: v,
    jsonMessageReviver: g
  } = e;
  let b;
  if (y) {
    if (!Oy(y))
      throw new Error("Invalid WebSocket implementation provided");
    b = y;
  } else typeof WebSocket < "u" ? b = WebSocket : typeof global < "u" ? b = global.WebSocket || // @ts-expect-error: Support more browsers
  global.MozWebSocket : typeof window < "u" && (b = window.WebSocket || // @ts-expect-error: Support more browsers
  window.MozWebSocket);
  if (!b)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const E = b, D = (() => {
    const M = /* @__PURE__ */ (() => {
      const S = {};
      return {
        on(w, F) {
          return S[w] = F, () => {
            delete S[w];
          };
        },
        emit(w) {
          var F;
          "id" in w && ((F = S[w.id]) === null || F === void 0 || F.call(S, w));
        }
      };
    })(), J = {
      connecting: p?.connecting ? [p.connecting] : [],
      opened: p?.opened ? [p.opened] : [],
      connected: p?.connected ? [p.connected] : [],
      ping: p?.ping ? [p.ping] : [],
      pong: p?.pong ? [p.pong] : [],
      message: p?.message ? [M.emit, p.message] : [M.emit],
      closed: p?.closed ? [p.closed] : [],
      error: p?.error ? [p.error] : []
    };
    return {
      onMessage: M.on,
      on(S, w) {
        const F = J[S];
        return F.push(w), () => {
          F.splice(F.indexOf(w), 1);
        };
      },
      emit(S, ...w) {
        for (const F of [...J[S]])
          F(...w);
      }
    };
  })();
  function I(M) {
    const J = [
      // errors are fatal and more critical than close events, throw them first
      D.on("error", (S) => {
        J.forEach((w) => w()), M(S);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      D.on("closed", (S) => {
        J.forEach((w) => w()), M(S);
      })
    ];
  }
  let O, x = 0, P, L = !1, q = 0, G = !1;
  async function ce() {
    clearTimeout(P);
    const [M, J] = await (O ?? (O = new Promise((F, j) => (async () => {
      if (L) {
        if (await l(q), !x)
          return O = void 0, j({ code: 1e3, reason: "All Subscriptions Gone" });
        q++;
      }
      D.emit("connecting", L);
      const N = new E(typeof t == "function" ? await t() : t, Ey);
      let V, K;
      function X() {
        isFinite(o) && o > 0 && (clearTimeout(K), K = setTimeout(() => {
          N.readyState === E.OPEN && (N.send(Zt({ type: se.Ping })), D.emit("ping", !1, void 0));
        }, o));
      }
      I((ee) => {
        O = void 0, clearTimeout(V), clearTimeout(K), j(ee), ee instanceof Ks && (N.close(4499, "Terminated"), N.onerror = null, N.onclose = null);
      }), N.onerror = (ee) => D.emit("error", ee), N.onclose = (ee) => D.emit("closed", ee), N.onopen = async () => {
        try {
          D.emit("opened", N);
          const ee = typeof r == "function" ? await r() : r;
          if (N.readyState !== E.OPEN)
            return;
          N.send(Zt(ee ? {
            type: se.ConnectionInit,
            payload: ee
          } : {
            type: se.ConnectionInit
            // payload is completely absent if not provided
          }, v)), isFinite(u) && u > 0 && (V = setTimeout(() => {
            N.close(Se.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, u)), X();
        } catch (ee) {
          D.emit("error", ee), N.close(Se.InternalClientError, Js(ee instanceof Error ? ee.message : new Error(ee).message, "Internal client error"));
        }
      };
      let Z = !1;
      N.onmessage = ({ data: ee }) => {
        try {
          const de = Dy(ee, g);
          if (D.emit("message", de), de.type === "ping" || de.type === "pong") {
            D.emit(de.type, !0, de.payload), de.type === "pong" ? X() : s || (N.send(Zt(de.payload ? {
              type: se.Pong,
              payload: de.payload
            } : {
              type: se.Pong
              // payload is completely absent if not provided
            })), D.emit("pong", !1, de.payload));
            return;
          }
          if (Z)
            return;
          if (de.type !== se.ConnectionAck)
            throw new Error(`First message cannot be of type ${de.type}`);
          clearTimeout(V), Z = !0, D.emit("connected", N, de.payload, L), L = !1, q = 0, F([
            N,
            new Promise((Qy, Al) => I(Al))
          ]);
        } catch (de) {
          N.onmessage = null, D.emit("error", de), N.close(Se.BadResponse, Js(de instanceof Error ? de.message : new Error(de).message, "Bad response"));
        }
      };
    })())));
    M.readyState === E.CLOSING && await J;
    let S = () => {
    };
    const w = new Promise((F) => S = F);
    return [
      M,
      S,
      Promise.race([
        // wait for
        w.then(() => {
          if (!x) {
            const F = () => M.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? P = setTimeout(() => {
              M.readyState === E.OPEN && F();
            }, a) : F();
          }
        }),
        // or
        J
      ])
    ];
  }
  function ne(M) {
    if (Kn(M) && (Iy(M.code) || [
      Se.InternalServerError,
      Se.InternalClientError,
      Se.BadRequest,
      Se.BadResponse,
      Se.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      Se.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      Se.SubscriberAlreadyExists,
      Se.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(M.code)))
      throw M;
    if (G)
      return !1;
    if (Kn(M) && M.code === 1e3)
      return x > 0;
    if (!c || q >= c || !d(M) || f?.(M))
      throw M;
    return L = !0;
  }
  n || (async () => {
    for (x++; ; )
      try {
        const [, , M] = await ce();
        await M;
      } catch (M) {
        try {
          if (!ne(M))
            return;
        } catch (J) {
          return i?.(J);
        }
      }
  })();
  function he(M, J) {
    const S = m(M);
    let w = !1, F = !1, j = () => {
      x--, w = !0;
    };
    return (async () => {
      for (x++; ; )
        try {
          const [N, V, K] = await ce();
          if (w)
            return V();
          const X = D.onMessage(S, (Z) => {
            switch (Z.type) {
              case se.Next: {
                J.next(Z.payload);
                return;
              }
              case se.Error: {
                F = !0, w = !0, J.error(Z.payload), j();
                return;
              }
              case se.Complete: {
                w = !0, j();
                return;
              }
            }
          });
          N.send(Zt({
            id: S,
            type: se.Subscribe,
            payload: M
          }, v)), j = () => {
            !w && N.readyState === E.OPEN && N.send(Zt({
              id: S,
              type: se.Complete
            }, v)), x--, w = !0, V();
          }, await K.finally(X);
          return;
        } catch (N) {
          if (!ne(N))
            return;
        }
    })().then(() => {
      F || J.complete();
    }).catch((N) => {
      J.error(N);
    }), () => {
      w || j();
    };
  }
  return {
    on: D.on,
    subscribe: he,
    iterate(M) {
      const J = [], S = {
        done: !1,
        error: null,
        resolve: () => {
        }
      }, w = he(M, {
        next(j) {
          J.push(j), S.resolve();
        },
        error(j) {
          S.done = !0, S.error = j, S.resolve();
        },
        complete() {
          S.done = !0, S.resolve();
        }
      }), F = (function() {
        return wy(this, arguments, function* () {
          for (; ; ) {
            for (J.length || (yield Ct(new Promise((V) => S.resolve = V))); J.length; )
              yield yield Ct(J.shift());
            if (S.error)
              throw S.error;
            if (S.done)
              return yield Ct(void 0);
          }
        });
      })();
      return F.throw = async (j) => (S.done || (S.done = !0, S.error = j, S.resolve()), { done: !0, value: void 0 }), F.return = async () => (w(), { done: !0, value: void 0 }), F;
    },
    async dispose() {
      if (G = !0, O) {
        const [M] = await O;
        M.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      O && D.emit("closed", new Ks());
    }
  };
}
class Ks extends Error {
  constructor() {
    super(...arguments), this.name = "TerminatedCloseEvent", this.message = "4499: Terminated", this.code = 4499, this.reason = "Terminated", this.wasClean = !1;
  }
}
function Kn(e) {
  return st(e) && "code" in e && "reason" in e;
}
function Iy(e) {
  return [
    1e3,
    // Normal Closure is not an erroneous close code
    1001,
    // Going Away
    1006,
    // Abnormal Closure
    1005,
    // No Status Received
    1012,
    // Service Restart
    1013,
    // Try Again Later
    1014
    // Bad Gateway
  ].includes(e) ? !1 : e >= 1e3 && e <= 1999;
}
function Oy(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
function kl(e) {
  return new Ie(function(t, r) {
    return new H(function(n) {
      var i, a, o;
      try {
        i = r(t).subscribe({
          next: function(s) {
            if (s.errors ? o = e({
              graphQLErrors: s.errors,
              response: s,
              operation: t,
              forward: r
            }) : Pc(s) && (o = e({
              protocolErrors: s.extensions[pn],
              response: s,
              operation: t,
              forward: r
            })), o) {
              a = o.subscribe({
                next: n.next.bind(n),
                error: n.error.bind(n),
                complete: n.complete.bind(n)
              });
              return;
            }
            n.next(s);
          },
          error: function(s) {
            if (o = e({
              operation: t,
              networkError: s,
              //Network errors can return GraphQL errors on for example a 403
              graphQLErrors: s && s.result && s.result.errors || void 0,
              forward: r
            }), o) {
              a = o.subscribe({
                next: n.next.bind(n),
                error: n.error.bind(n),
                complete: n.complete.bind(n)
              });
              return;
            }
            n.error(s);
          },
          complete: function() {
            o || n.complete.bind(n)();
          }
        });
      } catch (s) {
        e({ networkError: s, operation: t, forward: r }), n.error(s);
      }
      return function() {
        i && i.unsubscribe(), a && i.unsubscribe();
      };
    });
  });
}
(function(e) {
  Ee(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n.link = kl(r), n;
  }
  return t.prototype.request = function(r, n) {
    return this.link.request(r, n);
  }, t;
})(Ie);
function ky(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function xy(e, t, r = "") {
  if (!arguments.length) throw new TypeError("Argument 1 `value` is required.");
  if (typeof t != "function")
    throw new TypeError("Argument 2 `isExtractable` must be a function.");
  if (typeof r != "string")
    throw new TypeError("Argument 3 `path` must be a string.");
  const n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  function a(o, s, u) {
    if (t(o)) {
      const d = i.get(o);
      return d ? d.push(s) : i.set(o, [s]), null;
    }
    const c = Array.isArray(o) || typeof FileList < "u" && o instanceof FileList, l = ky(o);
    if (c || l) {
      let d = n.get(o);
      const f = !d;
      if (f && (d = c ? [] : (
        // Replicate if the plain object is an `Object` instance.
        o instanceof /** @type {any} */
        Object ? {} : /* @__PURE__ */ Object.create(null)
      ), n.set(
        o,
        /** @type {Clone} */
        d
      )), !u.has(o)) {
        const p = s ? `${s}.` : "", y = new Set(u).add(o);
        if (c) {
          let m = 0;
          for (const v of o) {
            const g = a(
              v,
              p + m++,
              y
            );
            f && d.push(g);
          }
        } else
          for (const m in o) {
            const v = a(
              o[m],
              p + m,
              y
            );
            f && (d[m] = v);
          }
      }
      return d;
    }
    return o;
  }
  return {
    clone: a(e, r, /* @__PURE__ */ new Set()),
    files: i
  };
}
function Fy(e, t, r) {
  "name" in r ? e.append(t, r, r.name) : e.append(t, r);
}
function Cy(e) {
  return typeof File < "u" && e instanceof File || typeof Blob < "u" && e instanceof Blob;
}
function Ay({
  uri: e = "/graphql",
  useGETForQueries: t,
  isExtractableFile: r = Cy,
  FormData: n,
  formDataAppendFile: i = Fy,
  print: a = jc,
  fetch: o,
  fetchOptions: s,
  credentials: u,
  headers: c,
  includeExtensions: l
} = {}) {
  const d = {
    http: { includeExtensions: l },
    options: s,
    credentials: u,
    headers: c
  };
  return new Ie((f) => {
    const p = (
      /**
       * @type {import("@apollo/client/core/types.js").DefaultContext & {
       *   clientAwareness?: {
       *     name?: string,
       *     version?: string,
       *   },
       * }}
       */
      f.getContext()
    ), {
      // Apollo Studio client awareness `name` and `version` can be configured
      // via `ApolloClient` constructor options:
      // https://www.apollographql.com/docs/graphos/metrics/client-awareness/#setup
      clientAwareness: { name: y, version: m } = {},
      headers: v
    } = p, g = {
      http: p.http,
      options: p.fetchOptions,
      credentials: p.credentials,
      headers: {
        // Client awareness headers can be overridden by context `headers`.
        ...y && { "apollographql-client-name": y },
        ...m && { "apollographql-client-version": m },
        ...v
      }
    }, { options: b, body: E } = qc(
      f,
      a,
      Lc,
      d,
      g
    ), { clone: D, files: I } = xy(E, r, "");
    let O = Uc(f, e);
    if (I.size) {
      b.headers && delete b.headers["content-type"];
      const L = n || FormData, q = new L();
      q.append("operations", vr(D, "Payload"));
      const G = {};
      let ce = 0;
      I.forEach((ne) => {
        G[++ce] = ne;
      }), q.append("map", JSON.stringify(G)), ce = 0, I.forEach((ne, he) => {
        i(q, String(++ce), he);
      }), b.body = q;
    } else if (t && // If the operation contains some mutations GET shouldn’t be used.
    !f.query.definitions.some(
      (L) => L.kind === "OperationDefinition" && L.operation === "mutation"
    ) && (b.method = "GET"), b.method === "GET") {
      const { newURI: L, parseError: q } = Vc(O, E);
      if (q)
        return new H((G) => {
          G.error(q);
        });
      O = L;
    } else b.body = vr(D, "Payload");
    const { controller: x } = hg();
    typeof x != "boolean" && (b.signal && (b.signal.aborted ? (
      // Signal already aborted, so immediately abort.
      x.abort()
    ) : (
      // Signal not already aborted, so setup a listener to abort when it
      // does.
      b.signal.addEventListener(
        "abort",
        () => {
          x.abort();
        },
        {
          // Prevent a memory leak if the user configured abort controller
          // is long lasting, or controls multiple things.
          once: !0
        }
      )
    )), b.signal = x.signal);
    const P = o || fetch;
    return new H((L) => {
      let q;
      return P(O, b).then((G) => (f.setContext({ response: G }), G)).then(Mc(f)).then((G) => {
        L.next(G), L.complete();
      }).catch((G) => {
        q || (G.result && G.result.errors && G.result.data && L.next(G.result), L.error(G));
      }), () => {
        q = !0, typeof x != "boolean" && x.abort();
      };
    });
  });
}
var Xn, Zn;
const qe = (e) => (t, { args: r, canRead: n, toReference: i }) => n(t) ? t : i({
  __typename: e,
  id: r?.id
}), er = (e, { canRead: t }) => {
  if (e !== void 0)
    return t(e) ? e : null;
}, $y = {
  Query: {
    fields: {
      findImage: {
        read: qe("Image")
      },
      findPerformer: {
        read: qe("Performer")
      },
      findStudio: {
        read: qe("Studio")
      },
      findGroup: {
        read: qe("Group")
      },
      findGallery: {
        read: qe("Gallery")
      },
      findScene: {
        read: qe("Scene")
      },
      findTag: {
        read: qe("Tag")
      },
      findSavedFilter: {
        read: qe("SavedFilter")
      }
    }
  },
  Scene: {
    fields: {
      studio: {
        read: er
      }
    }
  },
  Image: {
    fields: {
      studio: {
        read: er
      },
      paths: {
        merge: !1
      }
    }
  },
  Group: {
    fields: {
      studio: {
        read: er
      }
    }
  },
  Gallery: {
    fields: {
      studio: {
        read: er
      }
    }
  },
  Studio: {
    fields: {
      parent_studio: {
        read: er
      }
    }
  }
}, Py = {
  BaseFile: ["VideoFile", "ImageFile", "GalleryFile"],
  VisualFile: ["VideoFile", "ImageFile"]
}, Ny = (Zn = (Xn = document.querySelector("base")) === null || Xn === void 0 ? void 0 : Xn.getAttribute("href")) !== null && Zn !== void 0 ? Zn : "/", ei = (e) => {
  let t = new URL(window.location.origin + Ny);
  return e && (t.pathname += e), t;
}, Ry = () => {
  const e = ei("graphql"), t = ei("graphql");
  t.protocol === "https:" ? t.protocol = "wss:" : t.protocol = "ws:";
  const r = Ay({ uri: e.toString() }), n = Ty({
    url: t.toString(),
    retryAttempts: 1 / 0,
    shouldRetry() {
      return !0;
    }
  }), i = new Sy(n), a = kl(({ networkError: l }) => {
    if (l && l.statusCode === 401) {
      const d = new URL(ei("login"), window.location.toString());
      d.searchParams.append("returnURL", window.location.href), window.location.href = d.toString();
    }
  }), o = Hm(({ query: l }) => {
    const d = Vt(l);
    return d.kind === "OperationDefinition" && d.operation === "subscription";
  }, i, r), s = Wm([a, o]), u = new ka({
    typePolicies: $y,
    possibleTypes: Py
  }), c = new xa({
    link: s,
    cache: u
  });
  return c.subscribe({
    query: yy
  }).subscribe({
    next: () => {
      c.resetStore();
    }
  }), {
    cache: u,
    client: c,
    wsClient: n
  };
}, { client: My } = Ry(), Ly = () => My;
function jy() {
  const e = Ly(), t = "config" in e.cache ? e.cache.config : {}, r = new ka({
    ...t
  });
  return new xa({
    link: e.link,
    cache: r
  });
}
const xl = jy(), qy = {
  getItem: async (e) => await Fl().then((t) => t?.[e] || null).catch(console.error),
  setItem: async (e, t) => await Xs((r) => ({ ...r, [e]: t })).catch(console.error),
  removeItem: async (e) => {
    await Xs(
      (t) => {
        const { [e]: r, ...n } = t;
        return n;
      }
    );
  }
};
async function Fl() {
  return (await xl.query({
    query: gy
  })).data?.configuration.plugins[He];
}
async function Xs(e) {
  Fl().then((t) => xl.mutate({
    mutation: my,
    variables: {
      plugin_id: He,
      input: e(t)
    }
  }));
}
const ti = {
  showSettings: !1,
  fullscreen: !1,
  sceneInfoOpen: !1,
  tvConfigLoaded: !1
}, ri = Mu()(
  (e, t) => ({
    ...ti,
    set: (r, n) => {
      if (!t().tvConfigLoaded && r !== "tvConfigLoaded") {
        console.warn(`Tried to set ${r} to "${n}" before store was loaded`);
        return;
      }
      e((i) => {
        const a = typeof n == "function" ? n(i[r]) : n;
        return {
          [r]: a
        };
      });
    },
    setToDefault: (r) => {
      if (!t().tvConfigLoaded) {
        console.warn(`Tried to set ${r} to default before store was loaded`);
        return;
      }
      e((n) => ({
        [r]: ti[r]
      }));
    },
    getDefault: (r) => ti[r],
    get: (r) => t()[r]
  })
), Oe = "app-state", ni = {
  volume: 0,
  showSubtitles: !1,
  letterboxing: !1,
  forceLandscape: !1,
  looping: !1,
  uiVisible: !0,
  isRandomised: !1,
  crtEffect: !1,
  crtEffectStrength: 1,
  scenePreviewOnly: !1,
  markerPreviewOnly: !1,
  preferredStreamLabel: void 0,
  onlyShowMatchingOrientation: !1,
  maxMedia: void 0,
  autoPlay: !0,
  startPosition: "resume",
  endPosition: "video-end",
  showGuideOverlay: !0,
  showDevOptions: !1,
  logLevel: $p,
  pageSize: 5,
  loggersToShow: [],
  loggersToHide: [],
  showDebuggingInfo: [],
  renderedMediaItemsBuffer: 2,
  videoJsEventsToLog: [],
  actionButtonStackConfig: [
    { id: "1", type: "button", buttonType: "ui-visibility", pinned: !0 },
    { id: "2", type: "button", buttonType: "settings", pinned: !1 },
    { id: "3", type: "button", buttonType: "show-scene-info", pinned: !1 },
    { id: "12", type: "folder", pinned: !1, contents: [
      { id: "12.1", type: "button", buttonType: "rate-scene", pinned: !1 },
      { id: "12.2", type: "button", buttonType: "o-counter", pinned: !1 },
      { id: "12.3", type: "button", buttonType: "set-organized", pinned: !1 },
      { id: "12.4", type: "button", buttonType: "edit-tags", pinned: !1, pinnedTagIds: [] },
      { id: "12.5", type: "button", buttonType: "delete-media-item", pinned: !1 }
    ] },
    { id: "6", type: "button", buttonType: "force-landscape", pinned: !1 },
    { id: "8", type: "button", buttonType: "volume", pinned: !1 },
    { id: "9", type: "button", buttonType: "letterboxing", pinned: !1 },
    { id: "13", type: "folder", pinned: !1, contents: [
      { id: "13.1", type: "button", buttonType: "loop", pinned: !1 },
      { id: "13.2", type: "button", buttonType: "playback-rate", pinned: !1 },
      { id: "13.3", type: "button", buttonType: "subtitles", pinned: !1 },
      { id: "13.4", type: "button", buttonType: "fullscreen", pinned: !1 }
    ] }
  ],
  playbackRate: 1
}, Uy = [
  "forceLandscape"
], Vy = () => {
  const e = qy, t = localStorage;
  return {
    getItem: async (r) => {
      const [n, i] = await Promise.all([
        e.getItem(r),
        Promise.resolve(t.getItem(`${r}-local`))
      ]);
      if (!n && !i) return null;
      const a = n ? JSON.parse(n).state : {}, o = i ? JSON.parse(i).state : {};
      return JSON.stringify({
        state: { ...a, ...o },
        version: a?.version ?? o?.version ?? 0
      });
    },
    setItem: async (r, n) => {
      const i = JSON.parse(n), a = i.state, o = {}, s = {};
      for (const [c, l] of Object.entries(a))
        Uy.includes(c) ? s[c] = l : o[c] = l;
      const u = [];
      Object.keys(o).length > 0 && u.push(e.setItem(r, JSON.stringify({ ...i, state: o }))), Object.keys(s).length > 0 && u.push(Promise.resolve(
        t.setItem(`${r}-local`, JSON.stringify({ ...i, state: s }))
      )), await Promise.all(u);
    },
    removeItem: async (r) => {
      await Promise.all([
        e.removeItem(r),
        Promise.resolve(t.removeItem(`${r}-local`))
      ]);
    }
  };
};
Mu()(
  Tp(
    (e, t) => ({
      ...ni,
      set: (r, n) => {
        if (!ri.getState().tvConfigLoaded) {
          console.warn(`Tried to set ${r} to "${n}" before config was loaded`);
          return;
        }
        e((i) => {
          const a = typeof n == "function" ? n(i[r]) : n;
          if (r === "showDebuggingInfo") {
            const o = a.includes("render-debugging");
            localStorage.getItem("enableRenderDebugging") === "true" !== o && setTimeout(() => {
              localStorage.setItem("enableRenderDebugging", JSON.stringify(o)), window.location.reload();
            }, 300);
          }
          return {
            [r]: a
          };
        });
      },
      setToDefault: (r) => {
        if (!ri.getState().tvConfigLoaded) {
          console.warn(`Tried to set ${r} to default before store was loaded`);
          return;
        }
        e((n) => ({
          [r]: ni[r]
        }));
      },
      getDefault: (r) => ni[r],
      get: (r) => t()[r]
    }),
    {
      name: Oe,
      storage: Lu(() => Vy()),
      onRehydrateStorage: (e) => () => ri.setState({ tvConfigLoaded: !0 }),
      version: 2,
      migrate: (e, t) => {
        if (t === 0 && e && typeof e == "object" && ("audioMuted" in e && (e.volume = e.audioMuted ? 0 : 1, delete e.audioMuted), "actionButtonsConfig" in e && Array.isArray(e.actionButtonsConfig)))
          for (const r of e.actionButtonsConfig)
            r.type === "mute" && (r.type = "volume");
        if (t < 2 && e && typeof e == "object" && "actionButtonsConfig" in e && Array.isArray(e.actionButtonsConfig)) {
          const r = e.actionButtonsConfig;
          e.actionButtonStackConfig = r, delete e.actionButtonsConfig;
          for (const n of r)
            n.buttonType = n.type, n.type = "button";
        }
        return e;
      }
    }
  )
);
const { PluginApi: me } = window, { React: Q } = me, Pa = me.utils.StashService.getClient();
Cl(
  async (e) => e?.initialSetupComplete ? null : (await zy(), {
    ...e,
    initialSetupComplete: !0
  })
);
me.patch.instead(
  "PluginSettings",
  function(e, t, r) {
    const [n, i] = Q.useState(!1), [a, o] = me.React.useState(null);
    if (e.pluginID !== He) return /* @__PURE__ */ Q.createElement(r, { ...e });
    const s = async () => {
      i(!1), await Cl(() => ({})), o(null), i(!0);
    };
    me.React.useEffect(() => {
      Na().then((c) => o(c.plugins[He]));
    }, []);
    const u = me.React.useMemo(
      () => JSON.parse(
        a && Oe in a && typeof a[Oe] == "string" ? a[Oe] : "{}"
      )?.state?.showDevOptions,
      [a]
    );
    return [
      /* @__PURE__ */ Q.createElement(r, { ...e }),
      /* @__PURE__ */ Q.createElement("div", { className: "plugin-settings" }, /* @__PURE__ */ Q.createElement("div", { className: "setting" }), " ", /* @__PURE__ */ Q.createElement("div", { className: "setting" }, /* @__PURE__ */ Q.createElement("div", null, /* @__PURE__ */ Q.createElement("h3", null, "Reset all Stash TV settings"), /* @__PURE__ */ Q.createElement("div", { className: "sub-heading" }, "Stash TV has its own settings which are configurable from the settings panel in the Stash TV interface. This resets those settings to default.")), /* @__PURE__ */ Q.createElement("div", null, /* @__PURE__ */ Q.createElement(me.libraries.Bootstrap.Button, { onClick: s, variant: "warning" }, n && /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(
        rn,
        {
          icon: me.libraries.FontAwesomeSolid.faCheck
        }
      ), " "), "Reset"))), u && /* @__PURE__ */ Q.createElement("div", { className: "setting" }, /* @__PURE__ */ Q.createElement("div", null, /* @__PURE__ */ Q.createElement("details", null, /* @__PURE__ */ Q.createElement("summary", null, /* @__PURE__ */ Q.createElement("h3", { style: { display: "inline" } }, "Stash TV settings JSON")), /* @__PURE__ */ Q.createElement("pre", null, JSON.stringify(
        a && Oe in a && typeof a[Oe] == "string" ? { ...a, [Oe]: "<app state data>" } : a,
        null,
        2
      )), a && Oe in a && typeof a[Oe] == "string" && /* @__PURE__ */ Q.createElement(Q.Fragment, null, "App state stored in Stash TV config:", /* @__PURE__ */ Q.createElement("pre", null, JSON.stringify(JSON.parse(a[Oe]), null, 2))))), /* @__PURE__ */ Q.createElement("div", null), " "))
    ];
  }
);
me.patch.instead;
me.patch.instead(
  "MainNavBar.MenuItems",
  function({ children: e, ...t }, r, n) {
    const { data: i, loading: a } = me.GQL.useConfigurationQuery(), o = i?.configuration?.interface?.menuItems?.includes("tv");
    return [
      /* @__PURE__ */ Q.createElement(n, { ...t }, e, !a && o && /* @__PURE__ */ Q.createElement(By, null))
    ];
  }
);
me.patch.before(
  "CheckboxGroup",
  function(...e) {
    const [t, ...r] = e;
    return t.groupId !== "menu-items" ? [t, ...r] : [
      {
        ...t,
        items: [
          ...t.items,
          { id: "tv", headingID: "TV" }
        ]
      },
      ...r
    ];
  }
);
const By = () => {
  const e = "/plugin/" + He + "/assets/app/";
  return /* @__PURE__ */ Q.createElement(
    "div",
    {
      "data-rb-event-key": e,
      className: "col-4 col-sm-3 col-md-2 col-lg-auto nav-link",
      id: "StashTVButton"
    },
    /* @__PURE__ */ Q.createElement(
      "a",
      {
        href: e,
        className: "minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center btn btn-primary",
        target: "_blank"
      },
      /* @__PURE__ */ Q.createElement(
        rn,
        {
          className: "fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0",
          icon: me.libraries.FontAwesomeSolid.faTelevision
        }
      ),
      /* @__PURE__ */ Q.createElement("span", null, "TV")
    )
  );
};
async function Cl(e) {
  Na().then(
    async (t) => typeof e == "function" ? await e(t.plugins[He], t) : { ...t.plugins[He], ...e }
  ).then((t) => {
    if (t)
      return Pa.mutate({
        mutation: me.GQL.ConfigurePluginDocument,
        variables: {
          plugin_id: He,
          input: t
        }
      });
  });
}
async function Gy(e) {
  Na().then(
    (t) => typeof e == "function" ? e(t.interface) : { ...t.interface, ...e }
  ).then((t) => Pa.mutate({
    mutation: me.GQL.ConfigureInterfaceDocument,
    variables: {
      input: t
    }
  }));
}
async function Na() {
  return (await Pa.query({
    query: me.GQL.ConfigurationDocument
  })).data?.configuration;
}
async function zy() {
  Gy(
    (e) => ({
      ...e,
      menuItems: Array.from(/* @__PURE__ */ new Set([...e.menuItems || [], "tv"]))
    })
  );
}
