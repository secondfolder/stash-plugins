/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function $l(e, t, n) {
  return (t = Nl(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ra(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ra(Object(n), !0).forEach(function(r) {
      $l(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ra(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Pl(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
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
} = Hi.navigator || {}, Je = Hi, ie = Zs, ja = eu, In = tu;
Je.document;
const Me = !!ie.documentElement && !!ie.head && typeof ie.addEventListener == "function" && typeof ie.createElement == "function", nu = ~La.indexOf("MSIE") || ~La.indexOf("Trident/");
var Rl = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Ml = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, ru = {
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
}, iu = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], ye = "classic", Xn = "duotone", jl = "sharp", ql = "sharp-duotone", au = [ye, Xn, jl, ql], Ul = {
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
}, On = {
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
}, tf = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], ai = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Jl, ...tf], nf = ["solid", "regular", "light", "thin", "duotone", "brands"], ou = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], rf = ou.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), af = [...Object.keys(ef), ...nf, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", On.GROUP, On.SWAP_OPACITY, On.PRIMARY, On.SECONDARY].concat(ou.map((e) => "".concat(e, "x"))).concat(rf.map((e) => "w-".concat(e))), of = {
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
function _n(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[ye];
    }
  });
}
const lu = k({}, ru);
lu[ye] = k(k(k(k({}, {
  "fa-duotone": "duotone"
}), ru[ye]), qa.kit), qa["kit-duotone"]);
const lf = _n(lu), ui = k({}, Gl);
ui[ye] = k(k(k(k({}, {
  duotone: "fad"
}), ui[ye]), Ua.kit), Ua["kit-duotone"]);
const Ba = _n(ui), ci = k({}, ii);
ci[ye] = k(k({}, ci[ye]), Yl.kit);
const Ki = _n(ci), li = k({}, Zl);
li[ye] = k(k({}, li[ye]), Wl.kit);
_n(li);
const ff = Rl, fu = "fa-layers-text", df = Ml, pf = k({}, Ul);
_n(pf);
const hf = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], vr = Ll, mf = [...Ql, ...af], on = Je.FontAwesomeConfig || {};
function gf(e) {
  var t = ie.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function yf(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ie && typeof ie.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const i = yf(gf(n));
  i != null && (on[r] = i);
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
on.familyPrefix && (on.cssPrefix = on.familyPrefix);
const At = k(k({}, du), on);
At.autoReplaceSvg || (At.observeMutations = !1);
const R = {};
Object.keys(du).forEach((e) => {
  Object.defineProperty(R, e, {
    enumerable: !0,
    set: function(t) {
      At[e] = t, sn.forEach((n) => n(R));
    },
    get: function() {
      return At[e];
    }
  });
});
Object.defineProperty(R, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    At.cssPrefix = e, sn.forEach((t) => t(R));
  },
  get: function() {
    return At.cssPrefix;
  }
});
Je.FontAwesomeConfig = R;
const sn = [];
function vf(e) {
  return sn.push(e), () => {
    sn.splice(sn.indexOf(e), 1);
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
  const n = ie.head.childNodes;
  let r = null;
  for (let i = n.length - 1; i > -1; i--) {
    const a = n[i], o = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
  }
  return ie.head.insertBefore(t, r), e;
}
const Sf = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function dn() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Sf[Math.random() * 62 | 0];
  return t;
}
function Mt(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Xi(e) {
  return e.classList ? Mt(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function pu(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function _f(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(pu(e[n]), '" '), "").trim();
}
function Zn(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Zi(e) {
  return e.size !== xe.size || e.x !== xe.x || e.y !== xe.y || e.rotate !== xe.rotate || e.flipX || e.flipY;
}
function Ef(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const i = {
    transform: "translate(".concat(n / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), u = {
    transform: "".concat(a, " ").concat(o, " ").concat(s)
  }, c = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
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
    width: n = oi,
    height: r = oi,
    startCentered: i = !1
  } = e, a = "";
  return i && nu ? a += "translate(".concat(t.x / je - n / 2, "em, ").concat(t.y / je - r / 2, "em) ") : i ? a += "translate(calc(-50% + ".concat(t.x / je, "em), calc(-50% + ").concat(t.y / je, "em)) ") : a += "translate(".concat(t.x / je, "em, ").concat(t.y / je, "em) "), a += "scale(".concat(t.size / je * (t.flipX ? -1 : 1), ", ").concat(t.size / je * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
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
  const e = su, t = uu, n = R.cssPrefix, r = R.replacementClass;
  let i = wf;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return i;
}
let Ga = !1;
function br() {
  R.autoAddCss && !Ga && (bf(hu()), Ga = !0);
}
var Tf = {
  mixout() {
    return {
      dom: {
        css: hu,
        insertCss: br
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        br();
      },
      beforeI2svg() {
        br();
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
  ie.removeEventListener("DOMContentLoaded", gu), Gn = 1, mu.map((e) => e());
};
let Gn = !1;
Me && (Gn = (ie.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ie.readyState), Gn || ie.addEventListener("DOMContentLoaded", gu));
function If(e) {
  Me && (Gn ? setTimeout(e, 0) : mu.push(e));
}
function En(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? pu(e) : "<".concat(t, " ").concat(_f(n), ">").concat(r.map(En).join(""), "</").concat(t, ">");
}
function za(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Sr = function(t, n, r, i) {
  var a = Object.keys(t), o = a.length, s = n, u, c, l;
  for (r === void 0 ? (u = 1, l = t[a[0]]) : (u = 0, l = r); u < o; u++)
    c = a[u], l = s(l, t[c], c, t);
  return l;
};
function Of(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      const a = e.charCodeAt(n++);
      (a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i), n--);
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
  const n = e.length;
  let r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function Qa(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function di(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, i = Qa(t);
  typeof Fe.hooks.addPack == "function" && !r ? Fe.hooks.addPack(e, Qa(t)) : Fe.styles[e] = k(k({}, Fe.styles[e] || {}), i), e === "fas" && di("fa", t);
}
const {
  styles: pn,
  shims: xf
} = Fe, yu = Object.keys(Ki), Ff = yu.reduce((e, t) => (e[t] = Object.keys(Ki[t]), e), {});
let ea = null, vu = {}, bu = {}, Su = {}, _u = {}, Eu = {};
function Cf(e) {
  return ~mf.indexOf(e);
}
function Af(e, t) {
  const n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !Cf(i) ? i : null;
}
const Du = () => {
  const e = (r) => Sr(pn, (i, a, o) => (i[o] = Sr(a, r, {}), i), {});
  vu = e((r, i, a) => (i[3] && (r[i[3]] = a), i[2] && i[2].filter((s) => typeof s == "number").forEach((s) => {
    r[s.toString(16)] = a;
  }), r)), bu = e((r, i, a) => (r[a] = a, i[2] && i[2].filter((s) => typeof s == "string").forEach((s) => {
    r[s] = a;
  }), r)), Eu = e((r, i, a) => {
    const o = i[2];
    return r[a] = a, o.forEach((s) => {
      r[s] = a;
    }), r;
  });
  const t = "far" in pn || R.autoFetchSvg, n = Sr(xf, (r, i) => {
    const a = i[0];
    let o = i[1];
    const s = i[2];
    return o === "far" && !t && (o = "fas"), typeof a == "string" && (r.names[a] = {
      prefix: o,
      iconName: s
    }), typeof a == "number" && (r.unicodes[a.toString(16)] = {
      prefix: o,
      iconName: s
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Su = n.names, _u = n.unicodes, ea = er(R.styleDefault, {
    family: R.familyDefault
  });
};
vf((e) => {
  ea = er(e.styleDefault, {
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
  const t = _u[e], n = ta("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
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
  const n = yu.reduce((r, i) => (r[i] = "".concat(R.cssPrefix, "-").concat(i), r), {});
  return au.forEach((r) => {
    (e.includes(n[r]) || e.some((i) => Ff[r].includes(i))) && (t = r);
  }), t;
}
function er(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = ye
  } = t, r = lf[n][e];
  if (n === Xn && !e)
    return "fad";
  const i = Ba[n][e] || Ba[n][r], a = e in Fe.styles ? e : null;
  return i || a || null;
}
function Rf(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const i = Af(R.cssPrefix, r);
    i ? n = i : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function Wa(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function tr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const i = ai.concat(Kl), a = Wa(e.filter((d) => i.includes(d))), o = Wa(e.filter((d) => !ai.includes(d))), s = a.filter((d) => (r = d, !iu.includes(d))), [u = null] = s, c = Nf(a), l = k(k({}, Rf(o)), {}, {
    prefix: er(u, {
      family: c
    })
  });
  return k(k(k({}, l), qf({
    values: e,
    family: c,
    styles: pn,
    config: R,
    canonical: l,
    givenPrefix: r
  })), Mf(n, r, l));
}
function Mf(e, t, n) {
  let {
    prefix: r,
    iconName: i
  } = n;
  if (e || !r || !i)
    return {
      prefix: r,
      iconName: i
    };
  const a = t === "fa" ? wu(i) : {}, o = ct(r, i);
  return i = a.iconName || o || i, r = a.prefix || r, r === "far" && !pn.far && pn.fas && !R.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: i
  };
}
const Lf = au.filter((e) => e !== ye || e !== Xn), jf = Object.keys(ii).filter((e) => e !== ye).map((e) => Object.keys(ii[e])).flat();
function qf(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: i = "",
    styles: a = {},
    config: o = {}
  } = e, s = n === Xn, u = t.includes("fa-duotone") || t.includes("fad"), c = o.familyDefault === "duotone", l = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!s && (u || c || l) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Lf.includes(n) && (Object.keys(a).find((f) => jf.includes(f)) || o.autoFetchSvg)) {
    const f = Bl.get(n).defaultShortPrefixId;
    r.prefix = f, r.iconName = ct(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || i === "fa") && (r.prefix = Ke() || "fas"), r;
}
class Uf {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const i = n.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((a) => {
      this.definitions[a] = k(k({}, this.definitions[a] || {}), i[a]), di(a, i[a]);
      const o = Ki[ye][a];
      o && di(o, i[a]), Du();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((i) => {
      const {
        prefix: a,
        iconName: o,
        icon: s
      } = r[i], u = s[2];
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
    mixoutsTo: n
  } = t;
  return Ha = e, _t = {}, Object.keys(Ot).forEach((r) => {
    Vf.indexOf(r) === -1 && delete Ot[r];
  }), Ha.forEach((r) => {
    const i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach((a) => {
      typeof i[a] == "function" && (n[a] = i[a]), typeof i[a] == "object" && Object.keys(i[a]).forEach((o) => {
        n[a] || (n[a] = {}), n[a][o] = i[a][o];
      });
    }), r.hooks) {
      const a = r.hooks();
      Object.keys(a).forEach((o) => {
        _t[o] || (_t[o] = []), _t[o].push(a[o]);
      });
    }
    r.provides && r.provides(Ot);
  }), n;
}
function pi(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  return (_t[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...r]);
  }), t;
}
function ft(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (_t[e] || []).forEach((a) => {
    a.apply(null, n);
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
  const n = e.prefix || Ke();
  if (t)
    return t = ct(n, t) || t, za(Iu.definitions, n, t) || za(Fe.styles, n, t);
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
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = er(e[0]);
      return {
        prefix: n,
        iconName: ct(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(R.cssPrefix, "-")) > -1 || e.match(ff))) {
      const t = tr(e.split(" "), {
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
  toHtml: En
}, Wf = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = ie
  } = e;
  (Object.keys(Fe.styles).length > 0 || R.autoFetchSvg) && Me && R.autoReplaceSvg && _e.dom.i2svg({
    node: t
  });
};
function nr(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => En(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!Me) return;
      const n = ie.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Hf(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: i,
    styles: a,
    transform: o
  } = e;
  if (Zi(o) && n.found && !r.found) {
    const {
      width: s,
      height: u
    } = n, c = {
      x: s / u / 2,
      y: 0.5
    };
    i.style = Zn(k(k({}, a), {}, {
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
    iconName: n,
    children: r,
    attributes: i,
    symbol: a
  } = e;
  const o = a === !0 ? "".concat(t, "-").concat(R.cssPrefix, "-").concat(n) : a;
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
      children: r
    }]
  }];
}
function na(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
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
  } = n.found ? n : t, y = Hl.includes(r), m = [R.replacementClass, i ? "".concat(R.cssPrefix, "-").concat(i) : ""].filter((I) => l.classes.indexOf(I) === -1).filter((I) => I !== "" || !!I).concat(l.classes).join(" ");
  let v = {
    children: [],
    attributes: k(k({}, l.attributes), {}, {
      "data-prefix": r,
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
      id: v.attributes["aria-labelledby"] || "title-".concat(c || dn())
    },
    children: [s]
  }), delete v.attributes.title);
  const b = k(k({}, v), {}, {
    prefix: r,
    iconName: i,
    main: t,
    mask: n,
    maskId: u,
    transform: a,
    symbol: o,
    styles: k(k({}, g), l.styles)
  }), {
    children: E,
    attributes: D
  } = n.found && t.found ? Xe("generateAbstractMask", b) || {
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
    width: n,
    height: r,
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
    width: n,
    height: r
  }), c["-webkit-transform"] = c.transform);
  const l = Zn(c);
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
    title: n,
    extra: r
  } = e, i = k(k(k({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = Zn(r.styles);
  a.length > 0 && (i.style = a);
  const o = [];
  return o.push({
    tag: "span",
    attributes: i,
    children: [t]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
const {
  styles: _r
} = Fe;
function mi(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let i = null;
  return Array.isArray(r) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(R.cssPrefix, "-").concat(vr.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(R.cssPrefix, "-").concat(vr.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(R.cssPrefix, "-").concat(vr.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
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
  let n = t;
  return t === "fa" && R.styleDefault !== null && (t = Ke()), new Promise((r, i) => {
    if (n === "fa") {
      const a = wu(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && _r[t] && _r[t][e]) {
      const a = _r[t][e];
      return r(mi(a));
    }
    Xf(e, t), r(k(k({}, Kf), {}, {
      icon: R.showMissingIcons && e ? Xe("missingIconAbstract") || {} : {}
    }));
  });
}
const Ja = () => {
}, yi = R.measurePerformance && In && In.mark && In.measure ? In : {
  mark: Ja,
  measure: Ja
}, tn = 'FA "6.7.2"', Zf = (e) => (yi.mark("".concat(tn, " ").concat(e, " begins")), () => Ou(e)), Ou = (e) => {
  yi.mark("".concat(tn, " ").concat(e, " ends")), yi.measure("".concat(tn, " ").concat(e), "".concat(tn, " ").concat(e, " begins"), "".concat(tn, " ").concat(e, " ends"));
};
var ra = {
  begin: Zf,
  end: Ou
};
const Pn = () => {
};
function Ka(e) {
  return typeof (e.getAttribute ? e.getAttribute(lt) : null) == "string";
}
function ed(e) {
  const t = e.getAttribute ? e.getAttribute(Yi) : null, n = e.getAttribute ? e.getAttribute(Ji) : null;
  return t && n;
}
function td(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(R.replacementClass);
}
function nd() {
  return R.autoReplaceSvg === !0 ? Nn.replace : Nn[R.autoReplaceSvg] || Nn.replace;
}
function rd(e) {
  return ie.createElementNS("http://www.w3.org/2000/svg", e);
}
function id(e) {
  return ie.createElement(e);
}
function ku(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? rd : id
  } = t;
  if (typeof e == "string")
    return ie.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    r.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    r.appendChild(ku(a, {
      ceFn: n
    }));
  }), r;
}
function ad(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Nn = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(ku(n), t);
      }), t.getAttribute(lt) === null && R.keepOriginalSource) {
        let n = ie.createComment(ad(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Xi(t).indexOf(R.replacementClass))
      return Nn.replace(e);
    const r = new RegExp("".concat(R.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const a = n[0].attributes.class.split(" ").reduce((o, s) => (s === R.replacementClass || s.match(r) ? o.toSvg.push(s) : o.toNode.push(s), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const i = n.map((a) => En(a)).join(`
`);
    t.setAttribute(lt, ""), t.innerHTML = i;
  }
};
function Xa(e) {
  e();
}
function xu(e, t) {
  const n = typeof t == "function" ? t : Pn;
  if (e.length === 0)
    n();
  else {
    let r = Xa;
    R.mutateApproach === uf && (r = Je.requestAnimationFrame || Xa), r(() => {
      const i = nd(), a = ra.begin("mutate");
      e.map(i), a(), n();
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
let zn = null;
function Za(e) {
  if (!ja || !R.observeMutations)
    return;
  const {
    treeCallback: t = Pn,
    nodeCallback: n = Pn,
    pseudoElementsCallback: r = Pn,
    observeMutationsRoot: i = ie
  } = e;
  zn = new ja((a) => {
    if (ia) return;
    const o = Ke();
    Mt(a).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !Ka(s.addedNodes[0]) && (R.searchPseudoElements && r(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && R.searchPseudoElements && r(s.target.parentNode), s.type === "attributes" && Ka(s.target) && ~hf.indexOf(s.attributeName))
        if (s.attributeName === "class" && ed(s.target)) {
          const {
            prefix: u,
            iconName: c
          } = tr(Xi(s.target));
          s.target.setAttribute(Yi, u || o), c && s.target.setAttribute(Ji, c);
        } else td(s.target) && n(s.target);
    });
  }), Me && zn.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function od() {
  zn && zn.disconnect();
}
function sd(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, i) => {
    const a = i.split(":"), o = a[0], s = a.slice(1);
    return o && s.length > 0 && (r[o] = s.join(":").trim()), r;
  }, {})), n;
}
function ud(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = tr(Xi(e));
  return i.prefix || (i.prefix = Ke()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = $f(i.prefix, e.innerText) || ta(i.prefix, fi(e.innerText))), !i.iconName && R.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function cd(e) {
  const t = Mt(e.attributes).reduce((i, a) => (i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return R.autoA11y && (n ? t["aria-labelledby"] = "".concat(R.replacementClass, "-title-").concat(r || dn()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
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
    iconName: n,
    prefix: r,
    rest: i
  } = ud(e), a = cd(e), o = pi("parseNodeAttributes", {}, e);
  let s = t.styleParser ? sd(e) : [];
  return k({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
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
  const n = ie.documentElement.classList, r = (l) => n.add("".concat(Va, "-").concat(l)), i = (l) => n.remove("".concat(Va, "-").concat(l)), a = R.autoFetchSvg ? dd() : iu.concat(Object.keys(fd));
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
    r("pending"), i("complete");
  else
    return Promise.resolve();
  const u = ra.begin("onTree"), c = s.reduce((l, d) => {
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
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), u(), l();
      });
    }).catch((f) => {
      u(), d(f);
    });
  });
}
function pd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Cu(e).then((n) => {
    n && xu([n], t);
  });
}
function hd(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : hi(t || {});
    let {
      mask: i
    } = n;
    return i && (i = (i || {}).icon ? i : hi(i || {})), e(r, k(k({}, n), {}, {
      mask: i
    }));
  };
}
const md = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = xe,
    symbol: r = !1,
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
  return nr(k({
    type: "icon"
  }, e), () => (ft("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), R.autoA11y && (o ? c["aria-labelledby"] = "".concat(R.replacementClass, "-title-").concat(s || dn()) : (c["aria-hidden"] = "true", c.focusable = "false")), na({
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
    transform: k(k({}, xe), n),
    symbol: r,
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
        node: n = ie,
        callback: r = () => {
        }
      } = t;
      return to(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: i,
        titleId: a,
        prefix: o,
        transform: s,
        symbol: u,
        mask: c,
        maskId: l,
        extra: d
      } = n;
      return new Promise((f, p) => {
        Promise.all([gi(r, o), c.iconName ? gi(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((y) => {
          let [m, v] = y;
          f([t, na({
            icons: {
              main: m,
              mask: v
            },
            prefix: o,
            iconName: r,
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
        children: n,
        attributes: r,
        main: i,
        transform: a,
        styles: o
      } = t;
      const s = Zn(o);
      s.length > 0 && (r.style = s);
      let u;
      return Zi(a) && (u = Xe("generateAbstractTransformGrouping", {
        main: i,
        transform: a,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(u || i.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, yd = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return nr({
          type: "layer"
        }, () => {
          ft("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((i) => {
            Array.isArray(i) ? i.map((a) => {
              r = r.concat(a.abstract);
            }) : r = r.concat(i.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(R.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
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
          title: n = null,
          classes: r = [],
          attributes: i = {},
          styles: a = {}
        } = t;
        return nr({
          type: "counter",
          content: e
        }, () => (ft("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Jf({
          content: e.toString(),
          title: n,
          extra: {
            attributes: i,
            styles: a,
            classes: ["".concat(R.cssPrefix, "-layers-counter"), ...r]
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
          transform: n = xe,
          title: r = null,
          classes: i = [],
          attributes: a = {},
          styles: o = {}
        } = t;
        return nr({
          type: "text",
          content: e
        }, () => (ft("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Ya({
          content: e,
          transform: k(k({}, xe), n),
          title: r,
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
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: i,
        extra: a
      } = n;
      let o = null, s = null;
      if (nu) {
        const u = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        o = c.width / u, s = c.height / u;
      }
      return R.autoA11y && !r && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, Ya({
        content: t.innerHTML,
        width: o,
        height: s,
        transform: i,
        title: r,
        extra: a,
        watchable: !0
      })]);
    };
  }
};
const Sd = new RegExp('"', "ug"), no = [1105920, 1112319], ro = k(k(k(k({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Vl), of), Xl), bi = Object.keys(ro).reduce((e, t) => (e[t.toLowerCase()] = ro[t], e), {}), _d = Object.keys(bi).reduce((e, t) => {
  const n = bi[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function Ed(e) {
  const t = e.replace(Sd, ""), n = kf(t, 0), r = n >= no[0] && n <= no[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: fi(i ? t[0] : t),
    isSecondary: r || i
  };
}
function Dd(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
  return (bi[n] || {})[i] || _d[n];
}
function io(e, t) {
  const n = "".concat(sf).concat(t.replace(":", "-"));
  return new Promise((r, i) => {
    if (e.getAttribute(n) !== null)
      return r();
    const o = Mt(e.children).filter((f) => f.getAttribute(si) === t)[0], s = Je.getComputedStyle(e, t), u = s.getPropertyValue("font-family"), c = u.match(df), l = s.getPropertyValue("font-weight"), d = s.getPropertyValue("content");
    if (o && !c)
      return e.removeChild(o), r();
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
        e.setAttribute(n, b), o && e.removeChild(o);
        const E = ld(), {
          extra: D
        } = E;
        D.attributes[si] = t, gi(g, p).then((I) => {
          const O = na(k(k({}, E), {}, {
            icons: {
              main: I,
              mask: Tu()
            },
            prefix: p,
            iconName: b,
            extra: D,
            watchable: !0
          })), x = ie.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(x, e.firstChild) : e.appendChild(x), x.outerHTML = O.map((P) => En(P)).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
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
    return new Promise((t, n) => {
      const r = Mt(e.querySelectorAll("*")).filter(Td).map(wd), i = ra.begin("searchPseudoElements");
      Fu(), Promise.all(r).then(() => {
        i(), vi(), t();
      }).catch(() => {
        i(), vi(), n();
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
        node: n = ie
      } = t;
      R.searchPseudoElements && ao(n);
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
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const i = r.toLowerCase().split("-"), a = i[0];
    let o = i.slice(1).join("-");
    if (a && o === "h")
      return n.flipX = !0, n;
    if (a && o === "v")
      return n.flipY = !0, n;
    if (o = parseFloat(o), isNaN(o))
      return n;
    switch (a) {
      case "grow":
        n.size = n.size + o;
        break;
      case "shrink":
        n.size = n.size - o;
        break;
      case "left":
        n.x = n.x - o;
        break;
      case "right":
        n.x = n.x + o;
        break;
      case "up":
        n.y = n.y - o;
        break;
      case "down":
        n.y = n.y + o;
        break;
      case "rotate":
        n.rotate = n.rotate + o;
        break;
    }
    return n;
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
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = so(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: i,
        iconWidth: a
      } = t;
      const o = {
        transform: "translate(".concat(i / 2, " 256)")
      }, s = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), u = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), c = "rotate(".concat(r.rotate, " 0 0)"), l = {
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
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: k(k({}, n.icon.attributes), f.path)
          }]
        }]
      };
    };
  }
};
const Er = {
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
        const n = t.getAttribute("data-fa-mask"), r = n ? tr(n.split(" ").map((i) => i.trim())) : Tu();
        return r.prefix || (r.prefix = Ke()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
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
        attributes: k(k({}, Er), {}, {
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
      }, g = "mask-".concat(o || dn()), b = "clip-".concat(o || dn()), E = {
        tag: "mask",
        attributes: k(k({}, Er), {}, {
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
      return n.push(D, {
        tag: "rect",
        attributes: k({
          fill: "currentColor",
          "clip-path": "url(#".concat(b, ")"),
          mask: "url(#".concat(g, ")")
        }, Er)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Cd = {
  provides(e) {
    let t = !1;
    Je.matchMedia && (t = Je.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: k(k({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = k(k({}, i), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: k(k({}, r), {}, {
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
      }), n.push(o), n.push({
        tag: "path",
        attributes: k(k({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: k(k({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: k(k({}, r), {}, {
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
        children: n
      };
    };
  }
}, Ad = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
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
var Dr = { exports: {} }, wr, co;
function Nd() {
  if (co) return wr;
  co = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wr = e, wr;
}
var Tr, lo;
function Rd() {
  if (lo) return Tr;
  lo = 1;
  var e = /* @__PURE__ */ Nd();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Tr = function() {
    function r(o, s, u, c, l, d) {
      if (d !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Tr;
}
var fo;
function Md() {
  return fo || (fo = 1, Dr.exports = /* @__PURE__ */ Rd()()), Dr.exports;
}
var Ld = /* @__PURE__ */ Md();
const U = /* @__PURE__ */ aa(Ld);
var Ir = { exports: {} }, z = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Or, po;
function jd() {
  if (po) return Or;
  po = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
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
  return Or = i() ? Object.assign : function(a, o) {
    for (var s, u = r(a), c, l = 1; l < arguments.length; l++) {
      s = Object(arguments[l]);
      for (var d in s)
        t.call(s, d) && (u[d] = s[d]);
      if (e) {
        c = e(s);
        for (var f = 0; f < c.length; f++)
          n.call(s, c[f]) && (u[c[f]] = s[c[f]]);
      }
    }
    return u;
  }, Or;
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
  var e = jd(), t = 60103, n = 60106;
  z.Fragment = 60107, z.StrictMode = 60108, z.Profiler = 60114;
  var r = 60109, i = 60110, a = 60112;
  z.Suspense = 60113;
  var o = 60115, s = 60116;
  if (typeof Symbol == "function" && Symbol.for) {
    var u = Symbol.for;
    t = u("react.element"), n = u("react.portal"), z.Fragment = u("react.fragment"), z.StrictMode = u("react.strict_mode"), z.Profiler = u("react.profiler"), r = u("react.provider"), i = u("react.context"), a = u("react.forward_ref"), z.Suspense = u("react.suspense"), o = u("react.memo"), s = u("react.lazy");
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
          case n:
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
  function re(S) {
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
    return w === void 0 && (w = null), S = { $$typeof: i, _calculateChangedBits: w, _currentValue: S, _currentValue2: S, _threadCount: 0, Provider: null, Consumer: null }, S.Provider = { $$typeof: r, _context: S }, S.Consumer = S;
  }, z.createElement = I, z.createFactory = function(S) {
    var w = I.bind(null, S);
    return w.type = S, w;
  }, z.createRef = function() {
    return { current: null };
  }, z.forwardRef = function(S) {
    return { $$typeof: a, render: S };
  }, z.isValidElement = x, z.lazy = function(S) {
    return { $$typeof: s, _payload: { _status: -1, _result: S }, _init: re };
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
  return mo || (mo = 1, Ir.exports = qd()), Ir.exports;
}
var Ud = oa();
const sa = /* @__PURE__ */ aa(Ud);
function _i(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Vd(e) {
  if (Array.isArray(e)) return e;
}
function Bd(e) {
  if (Array.isArray(e)) return _i(e);
}
function Ve(e, t, n) {
  return (t = Kd(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Gd(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function zd(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, a, o, s = [], u = !0, c = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(u = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); u = !0) ;
    } catch (l) {
      c = !0, i = l;
    } finally {
      try {
        if (!u && n.return != null && (o = n.return(), Object(o) !== o)) return;
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
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? go(Object(n), !0).forEach(function(r) {
      Ve(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : go(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Hd(e, t) {
  if (e == null) return {};
  var n, r, i = Yd(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  }
  return i;
}
function Yd(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function yo(e, t) {
  return Vd(e) || zd(e, t) || Au(e, t) || Qd();
}
function Ei(e) {
  return Bd(e) || Gd(e) || Au(e) || Wd();
}
function Jd(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Kd(e) {
  var t = Jd(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Qn(e) {
  "@babel/helpers - typeof";
  return Qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qn(e);
}
function Au(e, t) {
  if (e) {
    if (typeof e == "string") return _i(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _i(e, t) : void 0;
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
  var t = e.beat, n = e.fade, r = e.beatFade, i = e.bounce, a = e.shake, o = e.flash, s = e.spin, u = e.spinPulse, c = e.spinReverse, l = e.pulse, d = e.fixedWidth, f = e.inverse, p = e.border, y = e.listItem, m = e.flip, v = e.size, g = e.rotation, b = e.pull, E = e.swapOpacity, D = e.rotateBy, I = e.widthAuto, O = tp(Di, Xd), x = Ve(Ve(Ve(Ve(Ve(Ve({
    "fa-beat": t,
    "fa-fade": n,
    "fa-beat-fade": r,
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
  for (var n = e.split("-"), r = yo(n, 2), i = r[0], a = r[1], o = t.split("-"), s = yo(o, 2), u = s[0], c = s[1], l = i.split("."), d = u.split("."), f = 0; f < Math.max(l.length, d.length); f++) {
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
function np(e) {
  return e = e - 0, e === e;
}
function $u(e) {
  return np(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var rp = ["style"];
function ip(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ap(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = $u(n.slice(0, r)), a = n.slice(r + 1).trim();
    return i.startsWith("webkit") ? t[ip(i)] = a : t[i] = a, t;
  }, {});
}
function Pu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(u) {
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
  }), a = n.style, o = a === void 0 ? {} : a, s = Hd(n, rp);
  return i.attrs.style = ke(ke({}, i.attrs.style), o), e.apply(void 0, [t.tag, ke(ke({}, i.attrs), s)].concat(Ei(r)));
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
  if (e && Qn(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Si.icon)
    return Si.icon(e);
  if (e === null)
    return null;
  if (e && Qn(e) === "object" && e.prefix && e.iconName)
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
function kr(e, t) {
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
}, rr = /* @__PURE__ */ sa.forwardRef(function(e, t) {
  var n = ke(ke({}, bo), e), r = n.icon, i = n.mask, a = n.symbol, o = n.className, s = n.title, u = n.titleId, c = n.maskId, l = vo(r), d = kr("classes", [].concat(Ei(ep(n)), Ei((o || "").split(" ")))), f = kr("transform", typeof n.transform == "string" ? Si.transform(n.transform) : n.transform), p = kr("mask", vo(i)), y = Pd(l, ke(ke(ke(ke({}, d), f), p), {}, {
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
  return Object.keys(n).forEach(function(g) {
    bo.hasOwnProperty(g) || (v[g] = n[g]);
  }), sp(m[0], v);
});
rr.displayName = "FontAwesomeIcon";
rr.propTypes = {
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
  const n = /* @__PURE__ */ new Set(), r = (l, d) => {
    const f = typeof l == "function" ? l(t) : l;
    if (!Object.is(f, t)) {
      const p = t;
      t = d ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), n.forEach((y) => y(t, p));
    }
  }, i = () => t, u = { setState: r, getState: i, getInitialState: () => c, subscribe: (l) => (n.add(l), () => n.delete(l)), destroy: () => {
    (up ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, c = t = e(r, i, u);
  return u;
}, cp = (e) => e ? So(e) : So;
var xr = { exports: {} }, Fr = {}, Cr = { exports: {} }, Ar = {};
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
  if (_o) return Ar;
  _o = 1;
  var e = oa();
  function t(d, f) {
    return d === f && (d !== 0 || 1 / d === 1 / f) || d !== d && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, i = e.useEffect, a = e.useLayoutEffect, o = e.useDebugValue;
  function s(d, f) {
    var p = f(), y = r({ inst: { value: p, getSnapshot: f } }), m = y[0].inst, v = y[1];
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
      return !n(d, p);
    } catch {
      return !0;
    }
  }
  function c(d, f) {
    return f();
  }
  var l = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : s;
  return Ar.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l, Ar;
}
var Eo;
function fp() {
  return Eo || (Eo = 1, Cr.exports = lp()), Cr.exports;
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
  if (Do) return Fr;
  Do = 1;
  var e = oa(), t = fp();
  function n(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var r = typeof Object.is == "function" ? Object.is : n, i = t.useSyncExternalStore, a = e.useRef, o = e.useEffect, s = e.useMemo, u = e.useDebugValue;
  return Fr.useSyncExternalStoreWithSelector = function(c, l, d, f, p) {
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
          if (x = D, r(E, O)) return x;
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
  }, Fr;
}
var wo;
function pp() {
  return wo || (wo = 1, xr.exports = dp()), xr.exports;
}
var hp = pp();
const mp = /* @__PURE__ */ aa(hp), Ru = {}, { useDebugValue: gp } = sa, { useSyncExternalStoreWithSelector: yp } = mp;
let To = !1;
const vp = (e) => e;
function bp(e, t = vp, n) {
  (Ru ? "production" : void 0) !== "production" && n && !To && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), To = !0);
  const r = yp(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return gp(r), r;
}
const Sp = (e) => {
  (Ru ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? cp(e) : e, n = (r, i) => bp(t, r, i);
  return Object.assign(n, t), n;
}, Mu = (e) => Sp, _p = {};
function Lu(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (i) => {
      var a;
      const o = (u) => u === null ? null : JSON.parse(u, void 0), s = (a = n.getItem(i)) != null ? a : null;
      return s instanceof Promise ? s.then(o) : o(s);
    },
    setItem: (i, a) => n.setItem(
      i,
      JSON.stringify(a, void 0)
    ),
    removeItem: (i) => n.removeItem(i)
  };
}
const hn = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return hn(r)(n);
      },
      catch(r) {
        return this;
      }
    };
  } catch (n) {
    return {
      then(r) {
        return this;
      },
      catch(r) {
        return hn(r)(n);
      }
    };
  }
}, Ep = (e, t) => (n, r, i) => {
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
        ), n(...v);
      },
      r,
      i
    );
  const l = hn(a.serialize), d = () => {
    const v = a.partialize({ ...r() });
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
      n(...v), d();
    },
    r,
    i
  );
  let y;
  const m = () => {
    var v;
    if (!c) return;
    o = !1, s.forEach((b) => b(r()));
    const g = ((v = a.onRehydrateStorage) == null ? void 0 : v.call(a, r())) || void 0;
    return hn(c.getItem.bind(c))(a.name).then((b) => {
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
        (E = r()) != null ? E : p
      ), n(y, !0), d();
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
}, Dp = (e, t) => (n, r, i) => {
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
        ), n(...m);
      },
      r,
      i
    );
  const l = () => {
    const m = a.partialize({ ...r() });
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
      n(...m), l();
    },
    r,
    i
  );
  i.getInitialState = () => f;
  let p;
  const y = () => {
    var m, v;
    if (!c) return;
    o = !1, s.forEach((b) => {
      var E;
      return b((E = r()) != null ? E : f);
    });
    const g = ((v = a.onRehydrateStorage) == null ? void 0 : v.call(a, (m = r()) != null ? m : f)) || void 0;
    return hn(c.getItem.bind(c))(a.name).then((b) => {
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
        (E = r()) != null ? E : f
      ), n(p, !0), D)
        return l();
    }).then(() => {
      g?.(p, void 0), p = r(), o = !0, u.forEach((b) => b(p));
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
  const n = t?.compact === !0 ? void 0 : 2;
  return JSON.stringify(e, null, n);
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
const kn = {
  "date-time-timezone": (e) => {
    const t = new Date(e), n = t.getUTCFullYear(), r = te(t.getUTCMonth() + 1), i = te(t.getUTCDate()), a = te(t.getUTCHours()), o = te(t.getUTCMinutes()), s = te(t.getUTCSeconds()), u = yt(t.getUTCMilliseconds());
    return `${n}-${r}-${i} ${a}:${o}:${s}.${u} +00:00`;
  },
  "date-time-tz": (e) => {
    const t = new Date(e), n = t.getUTCFullYear(), r = te(t.getUTCMonth() + 1), i = te(t.getUTCDate()), a = te(t.getUTCHours()), o = te(t.getUTCMinutes()), s = te(t.getUTCSeconds()), u = yt(t.getUTCMilliseconds());
    return `${n}-${r}-${i} ${a}:${o}:${s}.${u} +00`;
  },
  "date-time": (e) => {
    const t = new Date(e), n = t.getUTCFullYear(), r = te(t.getUTCMonth() + 1), i = te(t.getUTCDate()), a = te(t.getUTCHours()), o = te(t.getUTCMinutes()), s = te(t.getUTCSeconds()), u = yt(t.getUTCMilliseconds());
    return `${n}-${r}-${i} ${a}:${o}:${s}.${u}`;
  },
  "time-timezone": (e) => {
    const t = new Date(e), n = te(t.getUTCHours()), r = te(t.getUTCMinutes()), i = te(t.getUTCSeconds()), a = yt(t.getUTCMilliseconds());
    return `${n}:${r}:${i}.${a} +00:00`;
  },
  "time-tz": (e) => {
    const t = new Date(e), n = te(t.getUTCHours()), r = te(t.getUTCMinutes()), i = te(t.getUTCSeconds()), a = yt(t.getUTCMilliseconds());
    return `${n}:${r}:${i}.${a} +00`;
  },
  time: (e) => {
    const t = new Date(e), n = te(t.getUTCHours()), r = te(t.getUTCMinutes()), i = te(t.getUTCSeconds()), a = yt(t.getUTCMilliseconds());
    return `${n}:${r}:${i}.${a}`;
  },
  date: (e) => {
    const t = new Date(e), n = t.getUTCFullYear(), r = te(t.getUTCMonth() + 1), i = te(t.getUTCDate());
    return `${n}-${r}-${i}`;
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
function xn(e, t) {
  if (!(t instanceof Error)) return t;
  const n = {
    name: t.name,
    message: t.message
  };
  typeof t.stack == "string" && (n.stack = t.stack);
  const r = t.cause;
  r !== void 0 && (n.cause = r), typeof AggregateError < "u" && t instanceof AggregateError && (n.errors = t.errors);
  for (const i of Object.keys(t)) i in n || (n[i] = t[i]);
  return n;
}
function Uu(e = {}) {
  const t = (() => {
    const s = e.timestamp;
    return s == null ? kn["date-time-timezone"] : s === "disabled" ? kn.none : typeof s == "string" && s in kn ? kn[s] : s;
  })(), n = e.category ?? "·", r = e.value ? (s) => e.value(s, Io) : Io, i = (() => {
    const s = e.level;
    return s == null || s === "ABBR" ? (u) => vt.ABBR[u] : s === "abbr" ? (u) => vt.abbr[u] : s === "FULL" ? (u) => vt.FULL[u] : s === "full" ? (u) => vt.full[u] : s === "L" ? (u) => vt.L[u] : s === "l" ? (u) => vt.l[u] : s;
  })(), a = qu(e.lineEnding), o = e.format ?? (({ timestamp: s, level: u, category: c, message: l }) => `${s ? `${s} ` : ""}[${u}] ${c}: ${l}`);
  return (s) => {
    const u = s.message, c = u.length;
    let l;
    if (c === 1) l = u[0];
    else if (c <= 6) {
      l = "";
      for (let m = 0; m < c; m++) l += m % 2 === 0 ? u[m] : r(u[m]);
    } else {
      const m = new Array(c);
      for (let v = 0; v < c; v++) m[v] = v % 2 === 0 ? u[v] : r(u[v]);
      l = m.join("");
    }
    const d = t(s.timestamp), f = i(s.level), p = typeof n == "function" ? n(s.category) : s.category.join(n);
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
const $r = "\x1B[0m", Pr = {
  black: "\x1B[30m",
  red: "\x1B[31m",
  green: "\x1B[32m",
  yellow: "\x1B[33m",
  blue: "\x1B[34m",
  magenta: "\x1B[35m",
  cyan: "\x1B[36m",
  white: "\x1B[37m"
}, Nr = {
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
  const t = e.format, n = typeof e.timestampStyle > "u" ? "dim" : e.timestampStyle, r = e.timestampColor ?? null, i = `${n == null ? "" : Nr[n]}${r == null ? "" : Pr[r]}`, a = n == null && r == null ? "" : $r, o = typeof e.levelStyle > "u" ? "bold" : e.levelStyle, s = e.levelColors ?? Op, u = typeof e.categoryStyle > "u" ? "dim" : e.categoryStyle, c = e.categoryColor ?? null, l = `${u == null ? "" : Nr[u]}${c == null ? "" : Pr[c]}`, d = u == null && c == null ? "" : $r;
  return Uu({
    timestamp: "date-time-tz",
    value(f, p) {
      return p(f, { colors: !0 });
    },
    ...e,
    format({ timestamp: f, level: p, category: y, message: m, record: v }) {
      const g = s[v.level];
      return f = f == null ? null : `${i}${f}${a}`, p = `${o == null ? "" : Nr[o]}${g == null ? "" : Pr[g]}${p}${o == null && g == null ? "" : $r}`, t == null ? `${f == null ? "" : `${f} `}${p} ${l}${y}:${d} ${m}` : t({
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
    }, xn) + t;
    if (s.message.length === 1) return JSON.stringify({
      "@timestamp": new Date(s.timestamp).toISOString(),
      level: s.level === "warning" ? "WARN" : s.level.toUpperCase(),
      message: s.message[0],
      logger: s.category.join("."),
      properties: s.properties
    }, xn) + t;
    let u = s.message[0];
    for (let c = 1; c < s.message.length; c++) u += c & 1 ? JSON.stringify(s.message[c]) : s.message[c];
    return JSON.stringify({
      "@timestamp": new Date(s.timestamp).toISOString(),
      level: s.level === "warning" ? "WARN" : s.level.toUpperCase(),
      message: u,
      logger: s.category.join("."),
      properties: s.properties
    }, xn) + t;
  };
  const n = e.message === "template", r = e.properties ?? "nest:properties";
  let i;
  if (typeof e.categorySeparator == "function") i = e.categorySeparator;
  else {
    const s = e.categorySeparator ?? ".";
    i = (u) => u.join(s);
  }
  let a;
  if (r === "flatten") a = (s) => s;
  else if (r.startsWith("prepend:")) {
    const s = r.substring(8);
    if (s === "") throw new TypeError(`Invalid properties option: ${JSON.stringify(r)}. It must be of the form "prepend:<prefix>" where <prefix> is a non-empty string.`);
    a = (u) => {
      const c = {};
      for (const l in u) c[`${s}${l}`] = u[l];
      return c;
    };
  } else if (r.startsWith("nest:")) {
    const s = r.substring(5);
    a = (u) => ({ [s]: u });
  } else throw new TypeError(`Invalid properties option: ${JSON.stringify(r)}. It must be "flatten", "prepend:<prefix>", or "nest:<key>".`);
  let o;
  return n ? o = (s) => {
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
  }, xn) + t;
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
  const n = [];
  for (let a = 0; a < e.message.length; a++) a % 2 === 0 ? t += e.message[a] : (t += "%o", n.push(e.message[a]));
  const r = new Date(e.timestamp);
  return [
    `%c${`${r.getUTCHours().toString().padStart(2, "0")}:${r.getUTCMinutes().toString().padStart(2, "0")}:${r.getUTCSeconds().toString().padStart(2, "0")}.${r.getUTCMilliseconds().toString().padStart(3, "0")}`} %c${ju[e.level]}%c %c${e.category.join("·")} %c${t}`,
    "color: gray;",
    Fp[e.level],
    "background-color: default;",
    "color: gray;",
    "color: default;",
    ...n
  ];
}
function Ap(e = {}) {
  const t = e.formatter ?? Cp, n = {
    trace: "debug",
    debug: "debug",
    info: "info",
    warning: "warn",
    error: "error",
    fatal: "error",
    ...e.levelMap ?? {}
  }, r = e.console ?? globalThis.console, i = (g) => {
    const b = t(g), E = n[g.level];
    if (E === void 0) throw new TypeError(`Invalid log level: ${g.level}.`);
    if (typeof b == "string") {
      const D = b.replace(/\r?\n$/, "");
      r[E](D);
    } else r[E](...b);
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
  return Ti = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Ti(e, t);
};
function Ee(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ti(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var _ = function() {
  return _ = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, _.apply(this, arguments);
};
function Ae(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Be(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function s(l) {
      try {
        c(r.next(l));
      } catch (d) {
        o(d);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (d) {
        o(d);
      }
    }
    function c(l) {
      l.done ? a(l.value) : i(l.value).then(s, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function Ge(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(c) {
    return function(l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; ) try {
      if (r = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done) return a;
      switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
        case 0:
        case 1:
          a = c;
          break;
        case 4:
          return n.label++, { value: c[1], done: !1 };
        case 5:
          n.label++, i = c[1], c = [0];
          continue;
        case 7:
          c = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            n = 0;
            continue;
          }
          if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
            n.label = c[1];
            break;
          }
          if (c[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = c;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(c);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      c = t.call(e, n);
    } catch (l) {
      c = [6, l], i = 0;
    } finally {
      r = a = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function ge(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Rr = "Invariant Violation", Oo = Object.setPrototypeOf, Pp = Oo === void 0 ? function(e, t) {
  return e.__proto__ = t, e;
} : Oo, Vu = (
  /** @class */
  (function(e) {
    Ee(t, e);
    function t(n) {
      n === void 0 && (n = Rr);
      var r = e.call(this, typeof n == "number" ? Rr + ": " + n + " (see https://github.com/apollographql/invariant-packages)" : n) || this;
      return r.framesToPop = 1, r.name = Rr, Pp(r, t.prototype), r;
    }
    return t;
  })(Error)
);
function ut(e, t) {
  if (!e)
    throw new Vu(t);
}
var Bu = ["debug", "log", "warn", "error", "silent"], Np = Bu.indexOf("log");
function Fn(e) {
  return function() {
    if (Bu.indexOf(e) >= Np) {
      var t = console[e] || console.log;
      return t.apply(console, arguments);
    }
  };
}
(function(e) {
  e.debug = Fn("debug"), e.log = Fn("log"), e.warn = Fn("warn"), e.error = Fn("error");
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
  var n = Oi("stringifyForDisplay");
  return JSON.stringify(e, function(r, i) {
    return i === void 0 ? n : i;
  }, t).split(JSON.stringify(n)).join("<undefined>");
}
function Cn(e) {
  return function(t) {
    for (var n = [], r = 1; r < arguments.length; r++)
      n[r - 1] = arguments[r];
    if (typeof t == "number") {
      var i = t;
      t = ca(i), t || (t = la(i, n), n = []);
    }
    e.apply(void 0, [t].concat(n));
  };
}
var $ = Object.assign(function(t, n) {
  for (var r = [], i = 2; i < arguments.length; i++)
    r[i - 2] = arguments[i];
  t || ut(t, ca(n, r) || la(n, r));
}, {
  debug: Cn(ut.debug),
  log: Cn(ut.log),
  warn: Cn(ut.warn),
  error: Cn(ut.error)
});
function ve(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
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
function Rn(e, t) {
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
  let n = 0, r = 1;
  for (const i of e.body.matchAll(Lp)) {
    if (typeof i.index == "number" || Mp(!1), i.index >= t)
      break;
    n = i.index + i[0].length, r += 1;
  }
  return {
    line: r,
    column: t + 1 - n
  };
}
function jp(e) {
  return Qu(
    e.source,
    ki(e.source, e.start)
  );
}
function Qu(e, t) {
  const n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, o = t.line + a, s = t.line === 1 ? n : 0, u = t.column + s, c = `${e.name}:${o}:${u}
`, l = r.split(/\r\n|[\n\r]/g), d = l[i];
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
  const t = e.filter(([r, i]) => i !== void 0), n = Math.max(...t.map(([r]) => r.length));
  return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
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
  constructor(t, ...n) {
    var r, i, a;
    const { nodes: o, source: s, positions: u, path: c, originalError: l, extensions: d } = qp(n);
    super(t), this.name = "GraphQLError", this.path = c ?? void 0, this.originalError = l ?? void 0, this.nodes = Co(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const f = Co(
      (r = this.nodes) === null || r === void 0 ? void 0 : r.map((y) => y.loc).filter((y) => y != null)
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
      for (const n of this.nodes)
        n.loc && (t += `

` + jp(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t += `

` + Qu(this.source, n);
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
function fe(e, t, n) {
  return new fa(`Syntax Error: ${n}`, {
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
  constructor(t, n, r) {
    this.start = t.start, this.end = n.end, this.startToken = t, this.endToken = n, this.source = r;
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
  constructor(t, n, r, i, a, o) {
    this.kind = t, this.start = n, this.end = r, this.line = i, this.column = a, this.value = o, this.prev = null, this.next = null;
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
function mn(e) {
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
  return Yu(e) || mn(e) || e === 95;
}
function Gp(e) {
  var t;
  let n = Number.MAX_SAFE_INTEGER, r = null, i = -1;
  for (let o = 0; o < e.length; ++o) {
    var a;
    const s = e[o], u = zp(s);
    u !== s.length && (r = (a = r) !== null && a !== void 0 ? a : o, i = o, o !== 0 && u < n && (n = u));
  }
  return e.map((o, s) => s === 0 ? o : o.slice(n)).slice(
    (t = r) !== null && t !== void 0 ? t : 0,
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
  const n = e.replace(/"""/g, '\\"""'), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, a = r.length > 1 && r.slice(1).every((p) => p.length === 0 || Fi(p.charCodeAt(0))), o = n.endsWith('\\"""'), s = e.endsWith('"') && !o, u = e.endsWith("\\"), c = s || u, l = (
    // add leading and trailing new lines only if it improves readability
    !i || e.length > 70 || c || a || o
  );
  let d = "";
  const f = i && Fi(e.charCodeAt(0));
  return (l && !f || a) && (d += `
`), d += n, (l || c) && (d += `
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
    const n = new Wu(T.SOF, 0, 0, 0, 0);
    this.source = t, this.lastToken = n, this.token = n, this.line = 1, this.lineStart = 0;
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
          const n = Yp(this, t.end);
          t.next = n, n.prev = t, t = n;
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
function ir(e, t) {
  return Ku(e.charCodeAt(t)) && Xu(e.charCodeAt(t + 1));
}
function Ku(e) {
  return e >= 55296 && e <= 56319;
}
function Xu(e) {
  return e >= 56320 && e <= 57343;
}
function dt(e, t) {
  const n = e.source.body.codePointAt(t);
  if (n === void 0)
    return T.EOF;
  if (n >= 32 && n <= 126) {
    const r = String.fromCodePoint(n);
    return r === '"' ? `'"'` : `"${r}"`;
  }
  return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function ue(e, t, n, r, i) {
  const a = e.line, o = 1 + n - e.lineStart;
  return new Wu(t, n, r, a, o, i);
}
function Yp(e, t) {
  const n = e.source.body, r = n.length;
  let i = t;
  for (; i < r; ) {
    const a = n.charCodeAt(i);
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
        n.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++e.line, e.lineStart = i;
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
        if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46)
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
        return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? nh(e, i) : Xp(e, i);
    }
    if (mn(a) || a === 45)
      return Kp(e, i, a);
    if (Ju(a))
      return rh(e, i);
    throw fe(
      e.source,
      i,
      a === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : Lt(a) || ir(n, i) ? `Unexpected character: ${dt(e, i)}.` : `Invalid character: ${dt(e, i)}.`
    );
  }
  return ue(e, T.EOF, r, r);
}
function Jp(e, t) {
  const n = e.source.body, r = n.length;
  let i = t + 1;
  for (; i < r; ) {
    const a = n.charCodeAt(i);
    if (a === 10 || a === 13)
      break;
    if (Lt(a))
      ++i;
    else if (ir(n, i))
      i += 2;
    else
      break;
  }
  return ue(
    e,
    T.COMMENT,
    t,
    i,
    n.slice(t + 1, i)
  );
}
function Kp(e, t, n) {
  const r = e.source.body;
  let i = t, a = n, o = !1;
  if (a === 45 && (a = r.charCodeAt(++i)), a === 48) {
    if (a = r.charCodeAt(++i), mn(a))
      throw fe(
        e.source,
        i,
        `Invalid number, unexpected digit after 0: ${dt(
          e,
          i
        )}.`
      );
  } else
    i = Mr(e, i, a), a = r.charCodeAt(i);
  if (a === 46 && (o = !0, a = r.charCodeAt(++i), i = Mr(e, i, a), a = r.charCodeAt(i)), (a === 69 || a === 101) && (o = !0, a = r.charCodeAt(++i), (a === 43 || a === 45) && (a = r.charCodeAt(++i)), i = Mr(e, i, a), a = r.charCodeAt(i)), a === 46 || Ju(a))
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
    r.slice(t, i)
  );
}
function Mr(e, t, n) {
  if (!mn(n))
    throw fe(
      e.source,
      t,
      `Invalid number, expected digit but got: ${dt(
        e,
        t
      )}.`
    );
  const r = e.source.body;
  let i = t + 1;
  for (; mn(r.charCodeAt(i)); )
    ++i;
  return i;
}
function Xp(e, t) {
  const n = e.source.body, r = n.length;
  let i = t + 1, a = i, o = "";
  for (; i < r; ) {
    const s = n.charCodeAt(i);
    if (s === 34)
      return o += n.slice(a, i), ue(e, T.STRING, t, i + 1, o);
    if (s === 92) {
      o += n.slice(a, i);
      const u = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? Zp(e, i) : eh(e, i) : th(e, i);
      o += u.value, i += u.size, a = i;
      continue;
    }
    if (s === 10 || s === 13)
      break;
    if (Lt(s))
      ++i;
    else if (ir(n, i))
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
  const n = e.source.body;
  let r = 0, i = 3;
  for (; i < 12; ) {
    const a = n.charCodeAt(t + i++);
    if (a === 125) {
      if (i < 5 || !Lt(r))
        break;
      return {
        value: String.fromCodePoint(r),
        size: i
      };
    }
    if (r = r << 4 | nn(a), r < 0)
      break;
  }
  throw fe(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${n.slice(
      t,
      t + i
    )}".`
  );
}
function eh(e, t) {
  const n = e.source.body, r = $o(n, t + 2);
  if (Lt(r))
    return {
      value: String.fromCodePoint(r),
      size: 6
    };
  if (Ku(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
    const i = $o(n, t + 8);
    if (Xu(i))
      return {
        value: String.fromCodePoint(r, i),
        size: 12
      };
  }
  throw fe(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`
  );
}
function $o(e, t) {
  return nn(e.charCodeAt(t)) << 12 | nn(e.charCodeAt(t + 1)) << 8 | nn(e.charCodeAt(t + 2)) << 4 | nn(e.charCodeAt(t + 3));
}
function nn(e) {
  return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function th(e, t) {
  const n = e.source.body;
  switch (n.charCodeAt(t + 1)) {
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
    `Invalid character escape sequence: "${n.slice(
      t,
      t + 2
    )}".`
  );
}
function nh(e, t) {
  const n = e.source.body, r = n.length;
  let i = e.lineStart, a = t + 3, o = a, s = "";
  const u = [];
  for (; a < r; ) {
    const c = n.charCodeAt(a);
    if (c === 34 && n.charCodeAt(a + 1) === 34 && n.charCodeAt(a + 2) === 34) {
      s += n.slice(o, a), u.push(s);
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
    if (c === 92 && n.charCodeAt(a + 1) === 34 && n.charCodeAt(a + 2) === 34 && n.charCodeAt(a + 3) === 34) {
      s += n.slice(o, a), o = a + 1, a += 4;
      continue;
    }
    if (c === 10 || c === 13) {
      s += n.slice(o, a), u.push(s), c === 13 && n.charCodeAt(a + 1) === 10 ? a += 2 : ++a, s = "", o = a, i = a;
      continue;
    }
    if (Lt(c))
      ++a;
    else if (ir(n, a))
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
function rh(e, t) {
  const n = e.source.body, r = n.length;
  let i = t + 1;
  for (; i < r; ) {
    const a = n.charCodeAt(i);
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
    n.slice(t, i)
  );
}
const ih = 10, Zu = 2;
function da(e) {
  return ar(e, []);
}
function ar(e, t) {
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
  const n = [...t, e];
  if (oh(e)) {
    const r = e.toJSON();
    if (r !== e)
      return typeof r == "string" ? r : ar(r, n);
  } else if (Array.isArray(e))
    return uh(e, n);
  return sh(e, n);
}
function oh(e) {
  return typeof e.toJSON == "function";
}
function sh(e, t) {
  const n = Object.entries(e);
  return n.length === 0 ? "{}" : t.length > Zu ? "[" + ch(e) + "]" : "{ " + n.map(
    ([i, a]) => i + ": " + ar(a, t)
  ).join(", ") + " }";
}
function uh(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > Zu)
    return "[Array]";
  const n = Math.min(ih, e.length), r = e.length - n, i = [];
  for (let a = 0; a < n; ++a)
    i.push(ar(e[a], t));
  return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function ch(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const n = e.constructor.name;
    if (typeof n == "string" && n !== "")
      return n;
  }
  return t;
}
const lh = globalThis.process && // eslint-disable-next-line no-undef
!0, fh = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  lh ? function(t, n) {
    return t instanceof n;
  } : function(t, n) {
    if (t instanceof n)
      return !0;
    if (typeof t == "object" && t !== null) {
      var r;
      const i = n.prototype[Symbol.toStringTag], a = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in t ? t[Symbol.toStringTag] : (r = t.constructor) === null || r === void 0 ? void 0 : r.name
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
  constructor(t, n = "GraphQL request", r = {
    line: 1,
    column: 1
  }) {
    typeof t == "string" || Rn(!1, `Body must be a string. Received: ${da(t)}.`), this.body = t, this.name = n, this.locationOffset = r, this.locationOffset.line > 0 || Rn(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || Rn(
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
  const n = new hh(e, t), r = n.parseDocument();
  return Object.defineProperty(r, "tokenCount", {
    enumerable: !1,
    value: n.tokenCount
  }), r;
}
class hh {
  constructor(t, n = {}) {
    const r = dh(t) ? t : new ec(t);
    this._lexer = new Wp(r), this._options = n, this._tokenCounter = 0;
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
    const t = this.peekDescription(), n = t ? this._lexer.lookahead() : this._lexer.token;
    if (n.kind === T.NAME) {
      switch (n.value) {
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
      switch (n.value) {
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
    throw this.unexpected(n);
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
    const n = this.parseOperationType();
    let r;
    return this.peek(T.NAME) && (r = this.parseName()), this.node(t, {
      kind: C.OPERATION_DEFINITION,
      operation: n,
      name: r,
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
    const t = this._lexer.token, n = this.parseName();
    let r, i;
    return this.expectOptionalToken(T.COLON) ? (r = n, i = this.parseName()) : i = n, this.node(t, {
      kind: C.FIELD,
      alias: r,
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
    const n = t ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(T.PAREN_L, n, T.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(t = !1) {
    const n = this._lexer.token, r = this.parseName();
    return this.expectToken(T.COLON), this.node(n, {
      kind: C.ARGUMENT,
      name: r,
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
    const n = this.expectOptionalKeyword("on");
    return !n && this.peek(T.NAME) ? this.node(t, {
      kind: C.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1)
    }) : this.node(t, {
      kind: C.INLINE_FRAGMENT,
      typeCondition: n ? this.parseNamedType() : void 0,
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
    const n = this._lexer.token;
    switch (n.kind) {
      case T.BRACKET_L:
        return this.parseList(t);
      case T.BRACE_L:
        return this.parseObject(t);
      case T.INT:
        return this.advanceLexer(), this.node(n, {
          kind: C.INT,
          value: n.value
        });
      case T.FLOAT:
        return this.advanceLexer(), this.node(n, {
          kind: C.FLOAT,
          value: n.value
        });
      case T.STRING:
      case T.BLOCK_STRING:
        return this.parseStringLiteral();
      case T.NAME:
        switch (this.advanceLexer(), n.value) {
          case "true":
            return this.node(n, {
              kind: C.BOOLEAN,
              value: !0
            });
          case "false":
            return this.node(n, {
              kind: C.BOOLEAN,
              value: !1
            });
          case "null":
            return this.node(n, {
              kind: C.NULL
            });
          default:
            return this.node(n, {
              kind: C.ENUM,
              value: n.value
            });
        }
      case T.DOLLAR:
        if (t)
          if (this.expectToken(T.DOLLAR), this._lexer.token.kind === T.NAME) {
            const r = this._lexer.token.value;
            throw fe(
              this._lexer.source,
              n.start,
              `Unexpected variable "$${r}" in constant value.`
            );
          } else
            throw this.unexpected(n);
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
    const n = () => this.parseValueLiteral(t);
    return this.node(this._lexer.token, {
      kind: C.LIST,
      values: this.any(T.BRACKET_L, n, T.BRACKET_R)
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
    const n = () => this.parseObjectField(t);
    return this.node(this._lexer.token, {
      kind: C.OBJECT,
      fields: this.any(T.BRACE_L, n, T.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(t) {
    const n = this._lexer.token, r = this.parseName();
    return this.expectToken(T.COLON), this.node(n, {
      kind: C.OBJECT_FIELD,
      name: r,
      value: this.parseValueLiteral(t)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(t) {
    const n = [];
    for (; this.peek(T.AT); )
      n.push(this.parseDirective(t));
    return n;
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
    const n = this._lexer.token;
    return this.expectToken(T.AT), this.node(n, {
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
    let n;
    if (this.expectOptionalToken(T.BRACKET_L)) {
      const r = this.parseTypeReference();
      this.expectToken(T.BRACKET_R), n = this.node(t, {
        kind: C.LIST_TYPE,
        type: r
      });
    } else
      n = this.parseNamedType();
    return this.expectOptionalToken(T.BANG) ? this.node(t, {
      kind: C.NON_NULL_TYPE,
      type: n
    }) : n;
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
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("schema");
    const r = this.parseConstDirectives(), i = this.many(
      T.BRACE_L,
      this.parseOperationTypeDefinition,
      T.BRACE_R
    );
    return this.node(t, {
      kind: C.SCHEMA_DEFINITION,
      description: n,
      directives: r,
      operationTypes: i
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const t = this._lexer.token, n = this.parseOperationType();
    this.expectToken(T.COLON);
    const r = this.parseNamedType();
    return this.node(t, {
      kind: C.OPERATION_TYPE_DEFINITION,
      operation: n,
      type: r
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("scalar");
    const r = this.parseName(), i = this.parseConstDirectives();
    return this.node(t, {
      kind: C.SCALAR_TYPE_DEFINITION,
      description: n,
      name: r,
      directives: i
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("type");
    const r = this.parseName(), i = this.parseImplementsInterfaces(), a = this.parseConstDirectives(), o = this.parseFieldsDefinition();
    return this.node(t, {
      kind: C.OBJECT_TYPE_DEFINITION,
      description: n,
      name: r,
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
    const t = this._lexer.token, n = this.parseDescription(), r = this.parseName(), i = this.parseArgumentDefs();
    this.expectToken(T.COLON);
    const a = this.parseTypeReference(), o = this.parseConstDirectives();
    return this.node(t, {
      kind: C.FIELD_DEFINITION,
      description: n,
      name: r,
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
    const t = this._lexer.token, n = this.parseDescription(), r = this.parseName();
    this.expectToken(T.COLON);
    const i = this.parseTypeReference();
    let a;
    this.expectOptionalToken(T.EQUALS) && (a = this.parseConstValueLiteral());
    const o = this.parseConstDirectives();
    return this.node(t, {
      kind: C.INPUT_VALUE_DEFINITION,
      description: n,
      name: r,
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
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("interface");
    const r = this.parseName(), i = this.parseImplementsInterfaces(), a = this.parseConstDirectives(), o = this.parseFieldsDefinition();
    return this.node(t, {
      kind: C.INTERFACE_TYPE_DEFINITION,
      description: n,
      name: r,
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
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("union");
    const r = this.parseName(), i = this.parseConstDirectives(), a = this.parseUnionMemberTypes();
    return this.node(t, {
      kind: C.UNION_TYPE_DEFINITION,
      description: n,
      name: r,
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
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("enum");
    const r = this.parseName(), i = this.parseConstDirectives(), a = this.parseEnumValuesDefinition();
    return this.node(t, {
      kind: C.ENUM_TYPE_DEFINITION,
      description: n,
      name: r,
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
    const t = this._lexer.token, n = this.parseDescription(), r = this.parseEnumValueName(), i = this.parseConstDirectives();
    return this.node(t, {
      kind: C.ENUM_VALUE_DEFINITION,
      description: n,
      name: r,
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
        `${An(
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
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("input");
    const r = this.parseName(), i = this.parseConstDirectives(), a = this.parseInputFieldsDefinition();
    return this.node(t, {
      kind: C.INPUT_OBJECT_TYPE_DEFINITION,
      description: n,
      name: r,
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
    const n = this.parseConstDirectives(), r = this.optionalMany(
      T.BRACE_L,
      this.parseOperationTypeDefinition,
      T.BRACE_R
    );
    if (n.length === 0 && r.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: C.SCHEMA_EXTENSION,
      directives: n,
      operationTypes: r
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const n = this.parseName(), r = this.parseConstDirectives();
    if (r.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: C.SCALAR_TYPE_EXTENSION,
      name: n,
      directives: r
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
    const n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), a = this.parseFieldsDefinition();
    if (r.length === 0 && i.length === 0 && a.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: C.OBJECT_TYPE_EXTENSION,
      name: n,
      interfaces: r,
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
    const n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), a = this.parseFieldsDefinition();
    if (r.length === 0 && i.length === 0 && a.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: C.INTERFACE_TYPE_EXTENSION,
      name: n,
      interfaces: r,
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
    const n = this.parseName(), r = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
    if (r.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: C.UNION_TYPE_EXTENSION,
      name: n,
      directives: r,
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
    const n = this.parseName(), r = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
    if (r.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: C.ENUM_TYPE_EXTENSION,
      name: n,
      directives: r,
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
    const n = this.parseName(), r = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
    if (r.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: C.INPUT_OBJECT_TYPE_EXTENSION,
      name: n,
      directives: r,
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
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(T.AT);
    const r = this.parseName(), i = this.parseArgumentDefs(), a = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const o = this.parseDirectiveLocations();
    return this.node(t, {
      kind: C.DIRECTIVE_DEFINITION,
      description: n,
      name: r,
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
    const t = this._lexer.token, n = this.parseName();
    if (Object.prototype.hasOwnProperty.call(xi, n.value))
      return n;
    throw this.unexpected(t);
  }
  // Core parsing utility functions
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node(t, n) {
    return this._options.noLocation !== !0 && (n.loc = new Up(
      t,
      this._lexer.lastToken,
      this._lexer.source
    )), n;
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
    const n = this._lexer.token;
    if (n.kind === t)
      return this.advanceLexer(), n;
    throw fe(
      this._lexer.source,
      n.start,
      `Expected ${tc(t)}, found ${An(n)}.`
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
    const n = this._lexer.token;
    if (n.kind === T.NAME && n.value === t)
      this.advanceLexer();
    else
      throw fe(
        this._lexer.source,
        n.start,
        `Expected "${t}", found ${An(n)}.`
      );
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(t) {
    const n = this._lexer.token;
    return n.kind === T.NAME && n.value === t ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(t) {
    const n = t ?? this._lexer.token;
    return fe(
      this._lexer.source,
      n.start,
      `Unexpected ${An(n)}.`
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(t, n, r) {
    this.expectToken(t);
    const i = [];
    for (; !this.expectOptionalToken(r); )
      i.push(n.call(this));
    return i;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(t, n, r) {
    if (this.expectOptionalToken(t)) {
      const i = [];
      do
        i.push(n.call(this));
      while (!this.expectOptionalToken(r));
      return i;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(t, n, r) {
    this.expectToken(t);
    const i = [];
    do
      i.push(n.call(this));
    while (!this.expectOptionalToken(r));
    return i;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(t, n) {
    this.expectOptionalToken(t);
    const r = [];
    do
      r.push(n.call(this));
    while (this.expectOptionalToken(t));
    return r;
  }
  advanceLexer() {
    const { maxTokens: t } = this._options, n = this._lexer.advance();
    if (n.kind !== T.EOF && (++this._tokenCounter, t !== void 0 && this._tokenCounter > t))
      throw fe(
        this._lexer.source,
        n.start,
        `Document contains more that ${t} tokens. Parsing aborted.`
      );
  }
}
function An(e) {
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
], or = Object.freeze({});
function Te(e, t, n = Hu) {
  const r = /* @__PURE__ */ new Map();
  for (const g of Object.values(C))
    r.set(g, bh(t, g));
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
      Ao(c) || Rn(!1, `Invalid AST Node: ${da(c)}.`);
      const D = g ? (y = r.get(c.kind)) === null || y === void 0 ? void 0 : y.leave : (m = r.get(c.kind)) === null || m === void 0 ? void 0 : m.enter;
      if (E = D?.call(t, c, l, d, f, p), E === or)
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
      }, a = Array.isArray(c), o = a ? c : (v = n[c.kind]) !== null && v !== void 0 ? v : [], s = -1, u = [], d && p.push(d), d = c;
    }
  } while (i !== void 0);
  return u.length !== 0 ? u[u.length - 1][1] : e;
}
function bh(e, t) {
  const n = e[t];
  return typeof n == "object" ? n : typeof n == "function" ? {
    enter: n,
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
      const t = B("(", A(e.variableDefinitions, ", "), ")"), n = A(
        [
          e.operation,
          A([e.name, t]),
          A(e.directives, " ")
        ],
        " "
      );
      return (n === "query" ? "" : n + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: n, directives: r }) => e + ": " + t + B(" = ", n) + B(" ", A(r, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => De(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
      const a = B("", e, ": ") + t;
      let o = a + B("(", A(n, ", "), ")");
      return o.length > _h && (o = a + B(`(
`, Mn(A(n, `
`)), `
)`)), A([o, A(r, " "), i], " ");
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
    leave: ({ typeCondition: e, directives: t, selectionSet: n }) => A(
      [
        "...",
        B("on ", e),
        A(t, " "),
        n
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${e}${B("(", A(n, ", "), ")")} on ${t} ${B("", A(r, " "), " ")}` + i
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
    leave: ({ description: e, directives: t, operationTypes: n }) => B("", e, `
`) + A(["schema", A(t, " "), De(n)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: n }) => B("", e, `
`) + A(["scalar", t, A(n, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => B("", e, `
`) + A(
      [
        "type",
        t,
        B("implements ", A(n, " & ")),
        A(r, " "),
        De(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => B("", e, `
`) + t + (Po(n) ? B(`(
`, Mn(A(n, `
`)), `
)`) : B("(", A(n, ", "), ")")) + ": " + r + B(" ", A(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => B("", e, `
`) + A(
      [t + ": " + n, B("= ", r), A(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => B("", e, `
`) + A(
      [
        "interface",
        t,
        B("implements ", A(n, " & ")),
        A(r, " "),
        De(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, types: r }) => B("", e, `
`) + A(
      ["union", t, A(n, " "), B("= ", A(r, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, values: r }) => B("", e, `
`) + A(["enum", t, A(n, " "), De(r)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: n }) => B("", e, `
`) + A([t, A(n, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, fields: r }) => B("", e, `
`) + A(["input", t, A(n, " "), De(r)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i }) => B("", e, `
`) + "directive @" + t + (Po(n) ? B(`(
`, Mn(A(n, `
`)), `
)`) : B("(", A(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + A(i, " | ")
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
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) => A(
      [
        "extend type",
        e,
        B("implements ", A(t, " & ")),
        A(n, " "),
        De(r)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) => A(
      [
        "extend interface",
        e,
        B("implements ", A(t, " & ")),
        A(n, " "),
        De(r)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: n }) => A(
      [
        "extend union",
        e,
        A(t, " "),
        B("= ", A(n, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: n }) => A(["extend enum", e, A(t, " "), De(n)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: n }) => A(["extend input", e, A(t, " "), De(n)], " ")
  }
};
function A(e, t = "") {
  var n;
  return (n = e?.filter((r) => r).join(t)) !== null && n !== void 0 ? n : "";
}
function De(e) {
  return B(`{
`, Mn(A(e, `
`)), `
}`);
}
function B(e, t, n = "") {
  return t != null && t !== "" ? e + t + n : "";
}
function Mn(e) {
  return B("  ", e.replace(/\n/g, `
  `));
}
function Po(e) {
  var t;
  return (t = e?.some((n) => n.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function No(e) {
  return e.kind === C.FIELD || e.kind === C.FRAGMENT_SPREAD || e.kind === C.INLINE_FRAGMENT;
}
function Dn(e, t) {
  var n = e.directives;
  return !n || !n.length ? !0 : Th(n).every(function(r) {
    var i = r.directive, a = r.ifArgument, o = !1;
    return a.value.kind === "Variable" ? (o = t && t[a.value.name.value], $(o !== void 0, 78, i.name.value)) : o = a.value.value, i.name.value === "skip" ? !o : o;
  });
}
function gn(e, t, n) {
  var r = new Set(e), i = r.size;
  return Te(t, {
    Directive: function(a) {
      if (r.delete(a.name.value) && (!n || !r.size))
        return or;
    }
  }), n ? !r.size : r.size < i;
}
function Dh(e) {
  return e && gn(["client", "export"], e, !0);
}
function wh(e) {
  var t = e.name.value;
  return t === "skip" || t === "include";
}
function Th(e) {
  var t = [];
  return e && e.length && e.forEach(function(n) {
    if (wh(n)) {
      var r = n.arguments, i = n.name.value;
      $(r && r.length === 1, 79, i);
      var a = r[0];
      $(a.name && a.name.value === "if", 80, i);
      var o = a.value;
      $(o && (o.kind === "Variable" || o.kind === "BooleanValue"), 81, i), t.push({ directive: n, ifArgument: a });
    }
  }), t;
}
function Ih(e) {
  var t, n, r = (t = e.directives) === null || t === void 0 ? void 0 : t.find(function(a) {
    var o = a.name;
    return o.value === "unmask";
  });
  if (!r)
    return "mask";
  var i = (n = r.arguments) === null || n === void 0 ? void 0 : n.find(function(a) {
    var o = a.name;
    return o.value === "mode";
  });
  return globalThis.__DEV__ !== !1 && i && (i.value.kind === C.VARIABLE ? globalThis.__DEV__ !== !1 && $.warn(82) : i.value.kind !== C.STRING ? globalThis.__DEV__ !== !1 && $.warn(83) : i.value.value !== "migrate" && globalThis.__DEV__ !== !1 && $.warn(84, i.value.value)), i && "value" in i.value && i.value.value === "migrate" ? "migrate" : "unmask";
}
const Oh = () => /* @__PURE__ */ Object.create(null), { forEach: kh, slice: Ro } = Array.prototype, { hasOwnProperty: xh } = Object.prototype;
class Le {
  constructor(t = !0, n = Oh) {
    this.weakness = t, this.makeData = n;
  }
  lookup() {
    return this.lookupArray(arguments);
  }
  lookupArray(t) {
    let n = this;
    return kh.call(t, (r) => n = n.getChildTrie(r)), xh.call(n, "data") ? n.data : n.data = this.makeData(Ro.call(t));
  }
  peek() {
    return this.peekArray(arguments);
  }
  peekArray(t) {
    let n = this;
    for (let r = 0, i = t.length; n && r < i; ++r) {
      const a = n.mapFor(t[r], !1);
      n = a && a.get(t[r]);
    }
    return n && n.data;
  }
  remove() {
    return this.removeArray(arguments);
  }
  removeArray(t) {
    let n;
    if (t.length) {
      const r = t[0], i = this.mapFor(r, !1), a = i && i.get(r);
      a && (n = a.removeArray(Ro.call(t, 1)), !a.data && !a.weak && !(a.strong && a.strong.size) && i.delete(r));
    } else
      n = this.data, delete this.data;
    return n;
  }
  getChildTrie(t) {
    const n = this.mapFor(t, !0);
    let r = n.get(t);
    return r || n.set(t, r = new Le(this.weakness, this.makeData)), r;
  }
  mapFor(t, n) {
    return this.weakness && Fh(t) ? this.weak || (n ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (n ? this.strong = /* @__PURE__ */ new Map() : void 0);
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
}) == "ReactNative", ht = typeof WeakMap == "function" && !(Ch && !global.HermesInternal), pa = typeof WeakSet == "function", nc = typeof Symbol == "function" && typeof Symbol.for == "function", sr = nc && Symbol.asyncIterator;
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
  var n = t, r = [];
  e.definitions.forEach(function(a) {
    if (a.kind === "OperationDefinition")
      throw ve(
        85,
        a.operation,
        a.name ? " named '".concat(a.name.value, "'") : ""
      );
    a.kind === "FragmentDefinition" && r.push(a);
  }), typeof n > "u" && ($(r.length === 1, 86, r.length), n = r[0].name.value);
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
              value: n
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
  return e.forEach(function(n) {
    t[n.name.value] = n;
  }), t;
}
function ur(e, t) {
  switch (e.kind) {
    case "InlineFragment":
      return e;
    case "FragmentSpread": {
      var n = e.name.value;
      if (typeof t == "function")
        return t(n);
      var r = t && t[n];
      return $(r, 87, n), r || null;
    }
    default:
      return null;
  }
}
function $h(e) {
  var t = !0;
  return Te(e, {
    FragmentSpread: function(n) {
      if (t = !!n.directives && n.directives.some(function(r) {
        return r.name.value === "unmask";
      }), !t)
        return or;
    }
  }), t;
}
function Ph() {
}
class Ci {
  constructor(t = 1 / 0, n = Ph) {
    this.max = t, this.dispose = n, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
  }
  has(t) {
    return this.map.has(t);
  }
  get(t) {
    const n = this.getNode(t);
    return n && n.value;
  }
  get size() {
    return this.map.size;
  }
  getNode(t) {
    const n = this.map.get(t);
    if (n && n !== this.newest) {
      const { older: r, newer: i } = n;
      i && (i.older = r), r && (r.newer = i), n.older = this.newest, n.older.newer = n, n.newer = null, this.newest = n, n === this.oldest && (this.oldest = i);
    }
    return n;
  }
  set(t, n) {
    let r = this.getNode(t);
    return r ? r.value = n : (r = {
      key: t,
      value: n,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = r), this.newest = r, this.oldest = this.oldest || r, this.map.set(t, r), r.value);
  }
  clean() {
    for (; this.oldest && this.map.size > this.max; )
      this.delete(this.oldest.key);
  }
  delete(t) {
    const n = this.map.get(t);
    return n ? (n === this.newest && (this.newest = n.older), n === this.oldest && (this.oldest = n.newer), n.newer && (n.newer.older = n.older), n.older && (n.older.newer = n.newer), this.map.delete(t), this.dispose(n.value, t), !0) : !1;
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
class Wn {
  constructor(t = 1 / 0, n = Nh) {
    this.max = t, this.dispose = n, this.map = new Mh(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
      const r = this.unfinalizedNodes.values();
      for (let i = 0; i < jh; i++) {
        const a = r.next().value;
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
    const n = this.getNode(t);
    return n && n.value;
  }
  getNode(t) {
    const n = this.map.get(t);
    if (n && n !== this.newest) {
      const { older: r, newer: i } = n;
      i && (i.older = r), r && (r.newer = i), n.older = this.newest, n.older.newer = n, n.newer = null, this.newest = n, n === this.oldest && (this.oldest = i);
    }
    return n;
  }
  set(t, n) {
    let r = this.getNode(t);
    return r ? r.value = n : (r = {
      key: t,
      value: n,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = r), this.newest = r, this.oldest = this.oldest || r, this.scheduleFinalization(r), this.map.set(t, r), this.size++, r.value);
  }
  clean() {
    for (; this.oldest && this.size > this.max; )
      this.deleteNode(this.oldest);
  }
  deleteNode(t) {
    t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.size--;
    const n = t.key || t.keyRef && t.keyRef.deref();
    this.dispose(t.value, n), t.keyRef ? this.registry.unregister(t) : this.unfinalizedNodes.delete(t), n && this.map.delete(n);
  }
  delete(t) {
    const n = this.map.get(t);
    return n ? (this.deleteNode(n), !0) : !1;
  }
  scheduleFinalization(t) {
    this.unfinalizedNodes.add(t), this.finalizationScheduled || (this.finalizationScheduled = !0, queueMicrotask(this.finalize));
  }
}
var Lr = /* @__PURE__ */ new WeakSet();
function rc(e) {
  e.size <= (e.max || -1) || Lr.has(e) || (Lr.add(e), setTimeout(function() {
    e.clean(), Lr.delete(e);
  }, 100));
}
var ic = function(e, t) {
  var n = new Wn(e, t);
  return n.set = function(r, i) {
    var a = Wn.prototype.set.call(this, r, i);
    return rc(this), a;
  }, n;
}, qh = function(e, t) {
  var n = new Ci(e, t);
  return n.set = function(r, i) {
    var a = Ci.prototype.set.call(this, r, i);
    return rc(this), a;
  }, n;
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
    var n = t[0], r = t[1];
    return [
      n,
      Ne[n] || r
    ];
  }));
}
function Qh() {
  var e, t, n, r, i;
  if (globalThis.__DEV__ === !1)
    throw new Error("only supported in development mode");
  return {
    limits: zh(),
    sizes: _({ print: (e = ot.print) === null || e === void 0 ? void 0 : e.call(ot), parser: (t = ot.parser) === null || t === void 0 ? void 0 : t.call(ot), canonicalStringify: (n = ot.canonicalStringify) === null || n === void 0 ? void 0 : n.call(ot), links: Pi(this.link), queryManager: {
      getDocumentInfo: this.queryManager.transformCache.size,
      documentTransforms: uc(this.queryManager.documentTransform)
    } }, (i = (r = this.cache).getMemoryInternals) === null || i === void 0 ? void 0 : i.call(r))
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
    var n = Object.getPrototypeOf(t);
    if (n === Object.prototype || n === null) {
      var r = Object.keys(t);
      if (r.every(Jh))
        return t;
      var i = JSON.stringify(r), a = Dt.get(i);
      if (!a) {
        r.sort();
        var o = JSON.stringify(r);
        a = Dt.get(o) || r, Dt.set(i, a), Dt.set(o, a);
      }
      var s = Object.create(n);
      return a.forEach(function(u) {
        s[u] = t[u];
      }), s;
    }
  }
  return t;
}
function Jh(e, t, n) {
  return t === 0 || n[t - 1] <= e;
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
function nm(e) {
  return e.kind === "Variable";
}
function rm(e) {
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
function $t(e, t, n, r) {
  if (em(n) || tm(n))
    e[t.value] = Number(n.value);
  else if (Zh(n) || Xh(n))
    e[t.value] = n.value;
  else if (rm(n)) {
    var i = {};
    n.fields.map(function(o) {
      return $t(i, o.name, o.value, r);
    }), e[t.value] = i;
  } else if (nm(n)) {
    var a = (r || {})[n.name.value];
    e[t.value] = a;
  } else if (im(n))
    e[t.value] = n.values.map(function(o) {
      var s = {};
      return $t(s, t, o, r), s[t.value];
    });
  else if (am(n))
    e[t.value] = n.value;
  else if (om(n))
    e[t.value] = null;
  else
    throw ve(96, t.value, n.kind);
}
function sm(e, t) {
  var n = null;
  e.directives && (n = {}, e.directives.forEach(function(i) {
    n[i.name.value] = {}, i.arguments && i.arguments.forEach(function(a) {
      var o = a.name, s = a.value;
      return $t(n[i.name.value], o, s, t);
    });
  }));
  var r = null;
  return e.arguments && e.arguments.length && (r = {}, e.arguments.forEach(function(i) {
    var a = i.name, o = i.value;
    return $t(r, a, o, t);
  })), cc(e.name.value, r, n);
}
var um = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
], Ht = Ye, cc = Object.assign(function(e, t, n) {
  if (t && n && n.connection && n.connection.key)
    if (n.connection.filter && n.connection.filter.length > 0) {
      var r = n.connection.filter ? n.connection.filter : [];
      r.sort();
      var i = {};
      return r.forEach(function(s) {
        i[s] = t[s];
      }), "".concat(n.connection.key, "(").concat(Ht(i), ")");
    } else
      return n.connection.key;
  var a = e;
  if (t) {
    var o = Ht(t);
    a += "(".concat(o, ")");
  }
  return n && Object.keys(n).forEach(function(s) {
    um.indexOf(s) === -1 && (n[s] && Object.keys(n[s]).length ? a += "@".concat(s, "(").concat(Ht(n[s]), ")") : a += "@".concat(s));
  }), a;
}, {
  setStringify: function(e) {
    var t = Ht;
    return Ht = e, t;
  }
});
function cr(e, t) {
  if (e.arguments && e.arguments.length) {
    var n = {};
    return e.arguments.forEach(function(r) {
      var i = r.name, a = r.value;
      return $t(n, i, a, t);
    }), n;
  }
  return null;
}
function Re(e) {
  return e.alias ? e.alias.value : e.name.value;
}
function Ni(e, t, n) {
  for (var r, i = 0, a = t.selections; i < a.length; i++) {
    var o = a[i];
    if (Ze(o)) {
      if (o.name.value === "__typename")
        return e[Re(o)];
    } else r ? r.push(o) : r = [o];
  }
  if (typeof e.__typename == "string")
    return e.__typename;
  if (r)
    for (var s = 0, u = r; s < u.length; s++) {
      var o = u[s], c = Ni(e, ur(o, n).selectionSet, n);
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
  var t = e.definitions.filter(function(n) {
    return n.kind !== "FragmentDefinition";
  }).map(function(n) {
    if (n.kind !== "OperationDefinition")
      throw ve(89, n.kind);
    return n;
  });
  return $(t.length <= 1, 90, t.length), e;
}
function pt(e) {
  return qt(e), e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition";
  })[0];
}
function rn(e) {
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
  for (var t, n = 0, r = e.definitions; n < r.length; n++) {
    var i = r[n];
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
  var t = /* @__PURE__ */ Object.create(null), n = e && e.variableDefinitions;
  return n && n.length && n.forEach(function(r) {
    r.defaultValue && $t(t, r.variable.name, r.defaultValue);
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
        const n = t.slots[this.id];
        if (n === Mo)
          break;
        return t !== pe && (pe.slots[this.id] = n), !0;
      }
    return pe && (pe.slots[this.id] = Mo), !1;
  }
  getValue() {
    if (this.hasValue())
      return pe.slots[this.id];
  }
  withValue(t, n, r, i) {
    const a = {
      __proto__: null,
      [this.id]: t
    }, o = pe;
    pe = { parent: o, slots: a };
    try {
      return n.apply(i, r);
    } finally {
      pe = o;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(t) {
    const n = pe;
    return function() {
      const r = pe;
      try {
        return pe = n, t.apply(this, arguments);
      } finally {
        pe = r;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(t, n, r) {
    if (pe) {
      const i = pe;
      try {
        return pe = null, t.apply(r, n);
      } finally {
        pe = i;
      }
    } else
      return t.apply(r, n);
  }
};
function Lo(e) {
  try {
    return e();
  } catch {
  }
}
const jr = "@wry/context:Slot", dm = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Lo(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Lo(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), jo = dm, wn = jo[jr] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[jr] || (function(e) {
  try {
    Object.defineProperty(jo, jr, {
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
})(fm()), { bind: Hy, noContext: Yy } = wn, lr = new wn(), { hasOwnProperty: pm } = Object.prototype, ma = Array.from || function(e) {
  const t = [];
  return e.forEach((n) => t.push(n)), t;
};
function ga(e) {
  const { unsubscribe: t } = e;
  typeof t == "function" && (e.unsubscribe = void 0, t());
}
const yn = [], hm = 100;
function Pt(e, t) {
  if (!e)
    throw new Error(t || "assertion failure");
}
function dc(e, t) {
  const n = e.length;
  return (
    // Unknown values are not equal to each other.
    n > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    n === t.length && // The underlying value or exception must be the same.
    e[n - 1] === t[n - 1]
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
class fr {
  constructor(t) {
    this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++fr.count;
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
    this.setDirty(), Sc(this), ya(this, (t, n) => {
      t.setDirty(), _c(t, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(t) {
    t.add(this), this.deps || (this.deps = yn.pop() || /* @__PURE__ */ new Set()), this.deps.add(t);
  }
  forgetDeps() {
    this.deps && (ma(this.deps).forEach((t) => t.delete(this)), this.deps.clear(), yn.push(this.deps), this.deps = null);
  }
}
fr.count = 0;
function qo(e) {
  const t = lr.getValue();
  if (t)
    return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), et(e) ? yc(t, e) : vc(t, e), t;
}
function mm(e, t) {
  return Sc(e), lr.withValue(e, gm, [e, t]), vm(e, t) && ym(e), pc(e.value);
}
function gm(e, t) {
  e.recomputing = !0;
  const { normalizeResult: n } = e;
  let r;
  n && e.value.length === 1 && (r = hc(e.value)), e.value.length = 0;
  try {
    if (e.value[0] = e.fn.apply(null, t), n && r && !dc(r, e.value))
      try {
        e.value[0] = n(e.value[0], r[0]);
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
  const n = e.parents.size;
  if (n) {
    const r = ma(e.parents);
    for (let i = 0; i < n; ++i)
      t(r[i], e);
  }
}
function yc(e, t) {
  Pt(e.childValues.has(t)), Pt(et(t));
  const n = !et(e);
  if (!e.dirtyChildren)
    e.dirtyChildren = yn.pop() || /* @__PURE__ */ new Set();
  else if (e.dirtyChildren.has(t))
    return;
  e.dirtyChildren.add(t), n && mc(e);
}
function vc(e, t) {
  Pt(e.childValues.has(t)), Pt(!et(t));
  const n = e.childValues.get(t);
  n.length === 0 ? e.childValues.set(t, hc(t.value)) : dc(n, t.value) || e.setDirty(), bc(e, t), !et(e) && gc(e);
}
function bc(e, t) {
  const n = e.dirtyChildren;
  n && (n.delete(t), n.size === 0 && (yn.length < hm && yn.push(n), e.dirtyChildren = null));
}
function Sc(e) {
  e.childValues.size > 0 && e.childValues.forEach((t, n) => {
    _c(e, n);
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
  function n(r) {
    const i = lr.getValue();
    if (i) {
      let a = t.get(r);
      a || t.set(r, a = /* @__PURE__ */ new Set()), i.dependOn(a);
    }
  }
  return n.dirty = function(i, a) {
    const o = t.get(i);
    if (o) {
      const s = a && pm.call(bm, a) ? a : "setDirty";
      ma(o).forEach((u) => u[s]()), t.delete(i), ga(o);
    }
  }, n;
}
let Uo;
function Sm(...e) {
  return (Uo || (Uo = new Le(typeof WeakMap == "function"))).lookupArray(e);
}
const qr = /* @__PURE__ */ new Set();
function vn(e, { max: t = Math.pow(2, 16), keyArgs: n, makeCacheKey: r = Sm, normalizeResult: i, subscribe: a, cache: o = Ci } = /* @__PURE__ */ Object.create(null)) {
  const s = typeof o == "function" ? new o(t, (f) => f.dispose()) : o, u = function() {
    const f = r.apply(null, n ? n.apply(null, arguments) : arguments);
    if (f === void 0)
      return e.apply(null, arguments);
    let p = s.get(f);
    p || (s.set(f, p = new fr(e)), p.normalizeResult = i, p.subscribe = a, p.forget = () => s.delete(f));
    const y = p.recompute(Array.prototype.slice.call(arguments));
    return s.set(f, p), qr.add(s), lr.hasValue() || (qr.forEach((m) => m.clean()), qr.clear()), y;
  };
  Object.defineProperty(u, "size", {
    get: () => s.size,
    configurable: !1,
    enumerable: !1
  }), Object.freeze(u.options = {
    max: t,
    keyArgs: n,
    makeCacheKey: r,
    normalizeResult: i,
    subscribe: a,
    cache: s
  });
  function c(f) {
    const p = f && s.get(f);
    p && p.setDirty();
  }
  u.dirtyKey = c, u.dirty = function() {
    c(r.apply(null, arguments));
  };
  function l(f) {
    const p = f && s.get(f);
    if (p)
      return p.peek();
  }
  u.peekKey = l, u.peek = function() {
    return l(r.apply(null, arguments));
  };
  function d(f) {
    return f ? s.delete(f) : !1;
  }
  return u.forgetKey = d, u.forget = function() {
    return d(r.apply(null, arguments));
  }, u.makeCacheKey = r, u.getKey = n ? function() {
    return r.apply(null, n.apply(null, arguments));
  } : r, Object.freeze(u);
}
function _m(e) {
  return e;
}
var Dc = (
  /** @class */
  (function() {
    function e(t, n) {
      n === void 0 && (n = /* @__PURE__ */ Object.create(null)), this.resultCache = pa ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = t, n.getCacheKey && (this.getCacheKey = n.getCacheKey), this.cached = n.cache !== !1, this.resetCache();
    }
    return e.prototype.getCacheKey = function(t) {
      return [t];
    }, e.identity = function() {
      return new e(_m, { cache: !1 });
    }, e.split = function(t, n, r) {
      return r === void 0 && (r = e.identity()), Object.assign(new e(
        function(i) {
          var a = t(i) ? n : r;
          return a.transformDocument(i);
        },
        // Reasonably assume both `left` and `right` transforms handle their own caching
        { cache: !1 }
      ), { left: n, right: r });
    }, e.prototype.resetCache = function() {
      var t = this;
      if (this.cached) {
        var n = new Le(ht);
        this.performWork = vn(e.prototype.performWork.bind(this), {
          makeCacheKey: function(r) {
            var i = t.getCacheKey(r);
            if (i)
              return $(Array.isArray(i), 77), n.lookupArray(i);
          },
          max: Ne["documentTransform.cache"],
          cache: Wn
        });
      }
    }, e.prototype.performWork = function(t) {
      return qt(t), this.transform(t);
    }, e.prototype.transformDocument = function(t) {
      if (this.resultCache.has(t))
        return t;
      var n = this.performWork(t);
      return this.resultCache.add(n), n;
    }, e.prototype.concat = function(t) {
      var n = this;
      return Object.assign(new e(
        function(r) {
          return t.transformDocument(n.transformDocument(r));
        },
        // Reasonably assume both transforms handle their own caching
        { cache: !1 }
      ), {
        left: this,
        right: t
      });
    }, e;
  })()
), un, We = Object.assign(function(e) {
  var t = un.get(e);
  return t || (t = Sh(e), un.set(e, t)), t;
}, {
  reset: function() {
    un = new ic(
      Ne.print || 2e3
      /* defaultCacheSizes.print */
    );
  }
});
We.reset();
globalThis.__DEV__ !== !1 && ac("print", function() {
  return un ? un.size : 0;
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
  return !e || e.selectionSet.selections.every(function(n) {
    return n.kind === C.FRAGMENT_SPREAD && wc(t[n.name.value], t);
  });
}
function Em(e) {
  return wc(pt(e) || fc(e), jt(Ut(e))) ? null : e;
}
function Dm(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  return e.forEach(function(r) {
    r && (r.name ? t.set(r.name, r) : r.test && n.set(r.test, r));
  }), function(r) {
    var i = t.get(r.name.value);
    return !i && n.size && n.forEach(function(a, o) {
      o(r) && (i = a);
    }), i;
  };
}
function Bo(e) {
  var t = /* @__PURE__ */ new Map();
  return function(r) {
    r === void 0 && (r = e);
    var i = t.get(r);
    return i || t.set(r, i = {
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
  for (var n = Bo(""), r = Bo(""), i = function(g) {
    for (var b = 0, E = void 0; b < g.length && (E = g[b]); ++b)
      if (!oe(E)) {
        if (E.kind === C.OPERATION_DEFINITION)
          return n(E.name && E.name.value);
        if (E.kind === C.FRAGMENT_DEFINITION)
          return r(E.name.value);
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
          return r(g.name.value).removed = !0, l = !0, null;
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
      p(r(b)).transitiveVars.forEach(function(E) {
        g.transitiveVars.add(E);
      });
    })), g;
  }, y = /* @__PURE__ */ new Set();
  f.definitions.forEach(function(g) {
    g.kind === C.OPERATION_DEFINITION ? p(n(g.name && g.name.value)).fragmentSpreads.forEach(function(b) {
      y.add(b);
    }) : g.kind === C.FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
    // definitions count as usages of their own fragment names. This heuristic
    // prevents accidentally removing all fragment definitions from the
    // document just because it contains no operations that use the fragments.
    a === 0 && !r(g.name.value).removed && y.add(g.name.value);
  }), y.forEach(function(g) {
    p(r(g)).fragmentSpreads.forEach(function(b) {
      y.add(b);
    });
  });
  var m = function(g) {
    return !!// A fragment definition will be removed if there are no spreads that refer
    // to it, or the fragment was explicitly removed because it had no fields
    // other than __typename.
    (!y.has(g) || r(g).removed);
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
            n(g.name && g.name.value)
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
      enter: function(t, n, r) {
        if (!(r && r.kind === C.OPERATION_DEFINITION)) {
          var i = t.selections;
          if (i) {
            var a = i.some(function(s) {
              return Ze(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!a) {
              var o = r;
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
  var t = Vt(e), n = t.operation;
  if (n === "query")
    return e;
  var r = Te(e, {
    OperationDefinition: {
      enter: function(i) {
        return _(_({}, i), { operation: "query" });
      }
    }
  });
  return r;
}
function Ic(e) {
  qt(e);
  var t = Tc([
    {
      test: function(n) {
        return n.name.value === "client";
      },
      remove: !0
    }
  ], e);
  return t;
}
function Tm(e) {
  return qt(e), Te(e, {
    FragmentSpread: function(t) {
      var n;
      if (!(!((n = t.directives) === null || n === void 0) && n.some(function(r) {
        return r.name.value === "unmask";
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
  return dr(e);
}
function dr(e) {
  var t = e[0] || {}, n = e.length;
  if (n > 1)
    for (var r = new tt(), i = 1; i < n; ++i)
      t = r.merge(t, e[i]);
  return t;
}
var Om = function(e, t, n) {
  return this.merge(e[n], t[n]);
}, tt = (
  /** @class */
  (function() {
    function e(t) {
      t === void 0 && (t = Om), this.reconciler = t, this.isObject = ae, this.pastCopies = /* @__PURE__ */ new Set();
    }
    return e.prototype.merge = function(t, n) {
      for (var r = this, i = [], a = 2; a < arguments.length; a++)
        i[a - 2] = arguments[a];
      return ae(n) && ae(t) ? (Object.keys(n).forEach(function(o) {
        if (Im.call(t, o)) {
          var s = t[o];
          if (n[o] !== s) {
            var u = r.reconciler.apply(r, ge([
              t,
              n,
              o
            ], i, !1));
            u !== s && (t = r.shallowCopyForMerge(t), t[o] = u);
          }
        } else
          t = r.shallowCopyForMerge(t), t[o] = n[o];
      }), t) : n;
    }, e.prototype.shallowCopyForMerge = function(t) {
      return ae(t) && (this.pastCopies.has(t) || (Array.isArray(t) ? t = t.slice(0) : t = _({ __proto__: Object.getPrototypeOf(t) }, t), this.pastCopies.add(t))), t;
    }, e;
  })()
);
function km(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n) return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = xm(e)) || t) {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xm(e, t) {
  if (e) {
    if (typeof e == "string") return zo(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return zo(e, t);
  }
}
function zo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Qo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ba(e, t, n) {
  return t && Qo(e.prototype, t), n && Qo(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
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
function Hn(e, t) {
  var n = e[t];
  if (n != null) {
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    return n;
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
function Ln(e) {
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
        var n = Hn(t, "unsubscribe");
        n && n.call(t);
      }
    } catch (r) {
      Nt(r);
    }
}
function Mi(e) {
  e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function Am(e) {
  var t = e._queue;
  if (t) {
    e._queue = void 0, e._state = "ready";
    for (var n = 0; n < t.length && (xc(e, t[n].type, t[n].value), e._state !== "closed"); ++n)
      ;
  }
}
function xc(e, t, n) {
  e._state = "running";
  var r = e._observer;
  try {
    var i = Hn(r, t);
    switch (t) {
      case "next":
        i && i.call(r, n);
        break;
      case "error":
        if (Mi(e), i) i.call(r, n);
        else throw n;
        break;
      case "complete":
        Mi(e), i && i.call(r);
        break;
    }
  } catch (a) {
    Nt(a);
  }
  e._state === "closed" ? kc(e) : e._state === "running" && (e._state = "ready");
}
function Ur(e, t, n) {
  if (e._state !== "closed") {
    if (e._state === "buffering") {
      e._queue.push({
        type: t,
        value: n
      });
      return;
    }
    if (e._state !== "ready") {
      e._state = "buffering", e._queue = [{
        type: t,
        value: n
      }], Ln(function() {
        return Am(e);
      });
      return;
    }
    xc(e, t, n);
  }
}
var $m = /* @__PURE__ */ (function() {
  function e(n, r) {
    this._cleanup = void 0, this._observer = n, this._queue = void 0, this._state = "initializing";
    var i = new Pm(this);
    try {
      this._cleanup = r.call(void 0, i);
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
  function e(n) {
    this._subscription = n;
  }
  var t = e.prototype;
  return t.next = function(r) {
    Ur(this._subscription, "next", r);
  }, t.error = function(r) {
    Ur(this._subscription, "error", r);
  }, t.complete = function() {
    Ur(this._subscription, "complete");
  }, ba(e, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), e;
})(), H = /* @__PURE__ */ (function() {
  function e(n) {
    if (!(this instanceof e)) throw new TypeError("Observable cannot be called as a function");
    if (typeof n != "function") throw new TypeError("Observable initializer must be a function");
    this._subscriber = n;
  }
  var t = e.prototype;
  return t.subscribe = function(r) {
    return (typeof r != "object" || r === null) && (r = {
      next: r,
      error: arguments[1],
      complete: arguments[2]
    }), new $m(r, this._subscriber);
  }, t.forEach = function(r) {
    var i = this;
    return new Promise(function(a, o) {
      if (typeof r != "function") {
        o(new TypeError(r + " is not a function"));
        return;
      }
      function s() {
        u.unsubscribe(), a();
      }
      var u = i.subscribe({
        next: function(c) {
          try {
            r(c, s);
          } catch (l) {
            o(l), u.unsubscribe();
          }
        },
        error: o,
        complete: a
      });
    });
  }, t.map = function(r) {
    var i = this;
    if (typeof r != "function") throw new TypeError(r + " is not a function");
    var a = Yt(this);
    return new a(function(o) {
      return i.subscribe({
        next: function(s) {
          try {
            s = r(s);
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
  }, t.filter = function(r) {
    var i = this;
    if (typeof r != "function") throw new TypeError(r + " is not a function");
    var a = Yt(this);
    return new a(function(o) {
      return i.subscribe({
        next: function(s) {
          try {
            if (!r(s)) return;
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
  }, t.reduce = function(r) {
    var i = this;
    if (typeof r != "function") throw new TypeError(r + " is not a function");
    var a = Yt(this), o = arguments.length > 1, s = !1, u = arguments[1], c = u;
    return new a(function(l) {
      return i.subscribe({
        next: function(d) {
          var f = !s;
          if (s = !0, !f || o)
            try {
              c = r(c, d);
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
    for (var r = this, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
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
      return d(r), function() {
        c && (c.unsubscribe(), c = void 0);
      };
    });
  }, t.flatMap = function(r) {
    var i = this;
    if (typeof r != "function") throw new TypeError(r + " is not a function");
    var a = Yt(this);
    return new a(function(o) {
      var s = [], u = i.subscribe({
        next: function(l) {
          if (r)
            try {
              l = r(l);
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
  }, e.from = function(r) {
    var i = typeof this == "function" ? this : e;
    if (r == null) throw new TypeError(r + " is not an object");
    var a = Hn(r, Ri);
    if (a) {
      var o = a.call(r);
      if (Object(o) !== o) throw new TypeError(o + " is not an object");
      return Cm(o) && o.constructor === i ? o : new i(function(s) {
        return o.subscribe(s);
      });
    }
    if (_a("iterator") && (a = Hn(r, Fm), a))
      return new i(function(s) {
        Ln(function() {
          if (!s.closed) {
            for (var u = km(a.call(r)), c; !(c = u()).done; ) {
              var l = c.value;
              if (s.next(l), s.closed) return;
            }
            s.complete();
          }
        });
      });
    if (Array.isArray(r))
      return new i(function(s) {
        Ln(function() {
          if (!s.closed) {
            for (var u = 0; u < r.length; ++u)
              if (s.next(r[u]), s.closed) return;
            s.complete();
          }
        });
      });
    throw new TypeError(r + " is not observable");
  }, e.of = function() {
    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
      i[a] = arguments[a];
    var o = typeof this == "function" ? this : e;
    return new o(function(s) {
      Ln(function() {
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
  var t, n = e.Symbol;
  if (typeof n == "function")
    if (n.observable)
      t = n.observable;
    else {
      typeof n.for == "function" ? t = n.for("https://github.com/benlesh/symbol-observable") : t = n("https://github.com/benlesh/symbol-observable");
      try {
        n.observable = t;
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
      var n = e.slice(0);
      return t.set(e, n), n.forEach(function(i, a) {
        n[a] = Li(i, t);
      }), n;
    }
    case "[object Object]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var r = Object.create(Object.getPrototypeOf(e));
      return t.set(e, r), Object.keys(e).forEach(function(i) {
        r[i] = Li(e[i], t);
      }), r;
    }
    default:
      return e;
  }
}
function Lm(e) {
  var t = /* @__PURE__ */ new Set([e]);
  return t.forEach(function(n) {
    ae(n) && jm(n) === n && Object.getOwnPropertyNames(n).forEach(function(r) {
      ae(n[r]) && t.add(n[r]);
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
function Yn(e) {
  return globalThis.__DEV__ !== !1 && Lm(e), e;
}
function cn(e, t, n) {
  var r = [];
  e.forEach(function(i) {
    return i[t] && r.push(i);
  }), r.forEach(function(i) {
    return i[t](n);
  });
}
function Vr(e, t, n) {
  return new H(function(r) {
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
            return r.closed ? (
              /* will be swallowed */
              0
            ) : u(l);
          };
          i = i.then(d, d).then(function(f) {
            return r.next(f);
          }, function(f) {
            return r.error(f);
          });
        } else
          r[c](l);
      };
    }
    var o = {
      next: a(t, "next"),
      error: a(n, "error"),
      complete: function() {
        i.then(function() {
          return r.complete();
        });
      }
    }, s = e.subscribe(o);
    return function() {
      return s.unsubscribe();
    };
  });
}
function Cc(e) {
  function t(n) {
    Object.defineProperty(e, n, { value: H });
  }
  return nc && Symbol.species && t(Symbol.species), t("@@species"), e;
}
function Yo(e) {
  return e && typeof e.then == "function";
}
var St = (
  /** @class */
  (function(e) {
    Ee(t, e);
    function t(n) {
      var r = e.call(this, function(i) {
        return r.addObserver(i), function() {
          return r.removeObserver(i);
        };
      }) || this;
      return r.observers = /* @__PURE__ */ new Set(), r.promise = new Promise(function(i, a) {
        r.resolve = i, r.reject = a;
      }), r.handlers = {
        next: function(i) {
          r.sub !== null && (r.latest = ["next", i], r.notify("next", i), cn(r.observers, "next", i));
        },
        error: function(i) {
          var a = r.sub;
          a !== null && (a && setTimeout(function() {
            return a.unsubscribe();
          }), r.sub = null, r.latest = ["error", i], r.reject(i), r.notify("error", i), cn(r.observers, "error", i));
        },
        complete: function() {
          var i = r, a = i.sub, o = i.sources, s = o === void 0 ? [] : o;
          if (a !== null) {
            var u = s.shift();
            u ? Yo(u) ? u.then(function(c) {
              return r.sub = c.subscribe(r.handlers);
            }, r.handlers.error) : r.sub = u.subscribe(r.handlers) : (a && setTimeout(function() {
              return a.unsubscribe();
            }), r.sub = null, r.latest && r.latest[0] === "next" ? r.resolve(r.latest[1]) : r.resolve(), r.notify("complete"), cn(r.observers, "complete"));
          }
        }
      }, r.nextResultListeners = /* @__PURE__ */ new Set(), r.cancel = function(i) {
        r.reject(i), r.sources = [], r.handlers.error(i);
      }, r.promise.catch(function(i) {
      }), typeof n == "function" && (n = [new H(n)]), Yo(n) ? n.then(function(i) {
        return r.start(i);
      }, r.handlers.error) : r.start(n), r;
    }
    return t.prototype.start = function(n) {
      this.sub === void 0 && (this.sources = Array.from(n), this.handlers.complete());
    }, t.prototype.deliverLastMessage = function(n) {
      if (this.latest) {
        var r = this.latest[0], i = n[r];
        i && i.call(n, this.latest[1]), this.sub === null && r === "next" && n.complete && n.complete();
      }
    }, t.prototype.addObserver = function(n) {
      this.observers.has(n) || (this.deliverLastMessage(n), this.observers.add(n));
    }, t.prototype.removeObserver = function(n) {
      this.observers.delete(n) && this.observers.size < 1 && this.handlers.complete();
    }, t.prototype.notify = function(n, r) {
      var i = this.nextResultListeners;
      i.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), i.forEach(function(a) {
        return a(n, r);
      }));
    }, t.prototype.beforeNext = function(n) {
      var r = !1;
      this.nextResultListeners.add(function(i, a) {
        r || (r = !0, n(i, a));
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
  var n = e, r = new tt();
  return xt(t) && Ce(t.incremental) && t.incremental.forEach(function(i) {
    for (var a = i.data, o = i.path, s = o.length - 1; s >= 0; --s) {
      var u = o[s], c = !isNaN(+u), l = c ? [] : {};
      l[u] = a, a = l;
    }
    n = r.merge(n, a);
  }), n;
}
function jn(e) {
  var t = ji(e);
  return Ce(t);
}
function ji(e) {
  var t = Ce(e.errors) ? e.errors.slice(0) : [];
  return xt(e) && Ce(e.incremental) && e.incremental.forEach(function(n) {
    n.errors && t.push.apply(t, n.errors);
  }), t;
}
function Rt() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = /* @__PURE__ */ Object.create(null);
  return e.forEach(function(r) {
    r && Object.keys(r).forEach(function(i) {
      var a = r[i];
      a !== void 0 && (n[i] = a);
    });
  }), n;
}
function Br(e, t) {
  return Rt(e, t, t.variables && {
    variables: Rt(_(_({}, e && e.variables), t.variables))
  });
}
function Gr(e) {
  return new H(function(t) {
    t.error(e);
  });
}
var $c = function(e, t, n) {
  var r = new Error(n);
  throw r.name = "ServerError", r.response = e, r.statusCode = e.status, r.result = t, r;
};
function Bm(e) {
  for (var t = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], n = 0, r = Object.keys(e); n < r.length; n++) {
    var i = r[n];
    if (t.indexOf(i) < 0)
      throw ve(46, i);
  }
  return e;
}
function Gm(e, t) {
  var n = _({}, e), r = function(a) {
    typeof a == "function" ? n = _(_({}, n), a(n)) : n = _(_({}, n), a);
  }, i = function() {
    return _({}, n);
  };
  return Object.defineProperty(t, "setContext", {
    enumerable: !1,
    value: r
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
  return t.operationName || (t.operationName = typeof t.query != "string" ? rn(t.query) || void 0 : ""), t;
}
function Qm(e, t) {
  var n = _({}, e), r = new Set(Object.keys(e));
  return Te(t, {
    Variable: function(i, a, o) {
      o && o.kind !== "VariableDefinition" && r.delete(i.name.value);
    }
  }), r.forEach(function(i) {
    delete n[i];
  }), n;
}
function Jo(e, t) {
  return t ? t(e) : H.of();
}
function Jt(e) {
  return typeof e == "function" ? new Ie(e) : e;
}
function $n(e) {
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
      return t.length === 0 ? e.empty() : t.map(Jt).reduce(function(n, r) {
        return n.concat(r);
      });
    }, e.split = function(t, n, r) {
      var i = Jt(n), a = Jt(r || new e(Jo)), o;
      return $n(i) && $n(a) ? o = new e(function(s) {
        return t(s) ? i.request(s) || H.of() : a.request(s) || H.of();
      }) : o = new e(function(s, u) {
        return t(s) ? i.request(s, u) || H.of() : a.request(s, u) || H.of();
      }), Object.assign(o, { left: i, right: a });
    }, e.execute = function(t, n) {
      return t.request(Gm(n.context, zm(Bm(n)))) || H.of();
    }, e.concat = function(t, n) {
      var r = Jt(t);
      if ($n(r))
        return globalThis.__DEV__ !== !1 && $.warn(38, r), r;
      var i = Jt(n), a;
      return $n(i) ? a = new e(function(o) {
        return r.request(o, function(s) {
          return i.request(s) || H.of();
        }) || H.of();
      }) : a = new e(function(o, s) {
        return r.request(o, function(u) {
          return i.request(u, s) || H.of();
        }) || H.of();
      }), Object.assign(a, { left: r, right: i });
    }, e.prototype.split = function(t, n, r) {
      return this.concat(e.split(t, n, r || new e(Jo)));
    }, e.prototype.concat = function(t) {
      return e.concat(this, t);
    }, e.prototype.request = function(t, n) {
      throw ve(39);
    }, e.prototype.onError = function(t, n) {
      if (n && n.error)
        return n.error(t), !1;
      throw t;
    }, e.prototype.setOnError = function(t) {
      return this.onError = t, this;
    }, e;
  })()
), Wm = Ie.from, Hm = Ie.split, qi = Ie.execute;
function Ym(e) {
  var t, n = e[Symbol.asyncIterator]();
  return t = {
    next: function() {
      return n.next();
    }
  }, t[Symbol.asyncIterator] = function() {
    return this;
  }, t;
}
function Jm(e) {
  var t = null, n = null, r = !1, i = [], a = [];
  function o(d) {
    if (!n) {
      if (a.length) {
        var f = a.shift();
        if (Array.isArray(f) && f[0])
          return f[0]({ value: d, done: !1 });
      }
      i.push(d);
    }
  }
  function s(d) {
    n = d;
    var f = a.slice();
    f.forEach(function(p) {
      p[1](d);
    }), !t || t();
  }
  function u() {
    r = !0;
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
      if (n)
        return f(n);
      if (i.length)
        return d({ value: i.shift(), done: !1 });
      if (r)
        return d({ value: void 0, done: !0 });
      a.push([d, f]);
    });
  }
  var l = {
    next: function() {
      return c();
    }
  };
  return sr && (l[Symbol.asyncIterator] = function() {
    return this;
  }), l;
}
function Km(e) {
  var t = !1, n = {
    next: function() {
      return t ? Promise.resolve({
        value: void 0,
        done: !0
      }) : (t = !0, new Promise(function(r, i) {
        e.then(function(a) {
          r({ value: a, done: !1 });
        }).catch(i);
      }));
    }
  };
  return sr && (n[Symbol.asyncIterator] = function() {
    return this;
  }), n;
}
function Ko(e) {
  var t = {
    next: function() {
      return e.read();
    }
  };
  return sr && (t[Symbol.asyncIterator] = function() {
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
  return !!(sr && e[Symbol.asyncIterator]);
}
function tg(e) {
  return !!e.stream;
}
function ng(e) {
  return !!e.arrayBuffer;
}
function rg(e) {
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
  if (ng(t))
    return Km(t.arrayBuffer());
  if (rg(t))
    return Jm(t);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var pr = Symbol();
function Pc(e) {
  return e.extensions ? Array.isArray(e.extensions[pr]) : !1;
}
function Nc(e) {
  return e.hasOwnProperty("graphQLErrors");
}
var ag = function(e) {
  var t = ge(ge(ge([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
  return e.networkError && t.push(e.networkError), t.map(function(n) {
    return ae(n) && n.message || "Error message not found.";
  }).join(`
`);
}, Qe = (
  /** @class */
  (function(e) {
    Ee(t, e);
    function t(n) {
      var r = n.graphQLErrors, i = n.protocolErrors, a = n.clientErrors, o = n.networkError, s = n.errorMessage, u = n.extraInfo, c = e.call(this, s) || this;
      return c.name = "ApolloError", c.graphQLErrors = r || [], c.protocolErrors = i || [], c.clientErrors = a || [], c.networkError = o || null, c.message = s || ag(c), c.extraInfo = u, c.cause = ge(ge(ge([
        o
      ], r || [], !0), i || [], !0), a || [], !0).find(function(l) {
        return !!l;
      }) || null, c.__proto__ = t.prototype, c;
    }
    return t;
  })(Error)
), Xo = Object.prototype.hasOwnProperty;
function og(e, t) {
  return Be(this, void 0, void 0, function() {
    var n, r, i, a, o, s, u, c, l, d, f, p, y, m, v, g, b, E, D, I, O, x, P, L;
    return Ge(this, function(q) {
      switch (q.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          n = new TextDecoder("utf-8"), r = (L = e.headers) === null || L === void 0 ? void 0 : L.get("content-type"), i = "boundary=", a = r?.includes(i) ? r?.substring(r?.indexOf(i) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", o = `\r
--`.concat(a), s = "", u = ig(e), c = !0, q.label = 1;
        case 1:
          return c ? [4, u.next()] : [3, 3];
        case 2:
          for (l = q.sent(), d = l.value, f = l.done, p = typeof d == "string" ? d : n.decode(d), y = s.length - o.length + 1, c = !f, s += p, m = s.indexOf(o, y); m > -1; ) {
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
                  "errors" in I && (O = _(_({}, O), { extensions: _(_({}, "extensions" in O ? O.extensions : null), (P = {}, P[pr] = I.errors, P)) })), t(O);
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
`).forEach(function(n) {
    var r = n.indexOf(":");
    if (r > -1) {
      var i = n.slice(0, r).trim().toLowerCase(), a = n.slice(r + 1).trim();
      t[i] = a;
    }
  }), t;
}
function Rc(e, t) {
  if (e.status >= 300) {
    var n = function() {
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    };
    $c(e, n(), "Response not successful: Received status code ".concat(e.status));
  }
  try {
    return JSON.parse(t);
  } catch (i) {
    var r = i;
    throw r.name = "ServerParseError", r.response = e, r.statusCode = e.status, r.bodyText = t, r;
  }
}
function ug(e, t) {
  e.result && e.result.errors && e.result.data && t.next(e.result), t.error(e);
}
function Mc(e) {
  return function(t) {
    return t.text().then(function(n) {
      return Rc(t, n);
    }).then(function(n) {
      return !Array.isArray(n) && !Xo.call(n, "data") && !Xo.call(n, "errors") && $c(t, n, "Server response was missing for query '".concat(Array.isArray(e) ? e.map(function(r) {
        return r.operationName;
      }) : e.operationName, "'.")), n;
    });
  };
}
var bn = function(e, t) {
  var n;
  try {
    n = JSON.stringify(e);
  } catch (i) {
    var r = ve(42, t, i.message);
    throw r.parseError = i, r;
  }
  return n;
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
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = {}, a = {};
  n.forEach(function(d) {
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
    var n = {};
    return Object.keys(Object(e)).forEach(function(a) {
      n[a.toLowerCase()] = e[a];
    }), n;
  }
  var r = {};
  Object.keys(Object(e)).forEach(function(a) {
    r[a.toLowerCase()] = {
      originalName: a,
      value: e[a]
    };
  });
  var i = {};
  return Object.keys(r).forEach(function(a) {
    i[r[a].originalName] = r[a].value;
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
  var n = e.getContext(), r = n.uri;
  return r || (typeof t == "function" ? t(e) : t || "/graphql");
};
function Vc(e, t) {
  var n = [], r = function(d, f) {
    n.push("".concat(d, "=").concat(encodeURIComponent(f)));
  };
  if ("query" in t && r("query", t.query), t.operationName && r("operationName", t.operationName), t.variables) {
    var i = void 0;
    try {
      i = bn(t.variables, "Variables map");
    } catch (d) {
      return { parseError: d };
    }
    r("variables", i);
  }
  if (t.extensions) {
    var a = void 0;
    try {
      a = bn(t.extensions, "Extensions map");
    } catch (d) {
      return { parseError: d };
    }
    r("extensions", a);
  }
  var o = "", s = e, u = e.indexOf("#");
  u !== -1 && (o = e.substr(u), s = e.substr(0, u));
  var c = s.indexOf("?") === -1 ? "?" : "&", l = s + c + n.join("&") + o;
  return { newURI: l };
}
var Zo = we(function() {
  return fetch;
}), mg = function(e) {
  e === void 0 && (e = {});
  var t = e.uri, n = t === void 0 ? "/graphql" : t, r = e.fetch, i = e.print, a = i === void 0 ? jc : i, o = e.includeExtensions, s = e.preserveHeaderCase, u = e.useGETForQueries, c = e.includeUnusedVariables, l = c === void 0 ? !1 : c, d = Ae(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  globalThis.__DEV__ !== !1 && pg(r || Zo);
  var f = {
    http: { includeExtensions: o, preserveHeaderCase: s },
    options: d.fetchOptions,
    credentials: d.credentials,
    headers: d.headers
  };
  return new Ie(function(p) {
    var y = Uc(p, n), m = p.getContext(), v = {};
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
    if (gn(["client"], p.query)) {
      var O = Ic(p.query);
      if (!O)
        return Gr(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
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
    }, re = ce(Vt(p.query)), he = gn(["defer"], p.query);
    if (u && !p.query.definitions.some(G) && (P.method = "GET"), he || re) {
      P.headers = P.headers || {};
      var M = "multipart/mixed;";
      re && he && globalThis.__DEV__ !== !1 && $.warn(41), re ? M += "boundary=graphql;subscriptionSpec=1.0,application/json" : he && (M += "deferSpec=20220824,application/json"), P.headers.accept = M;
    }
    if (P.method === "GET") {
      var J = Vc(y, L), S = J.newURI, w = J.parseError;
      if (w)
        return Gr(w);
      y = S;
    } else
      try {
        P.body = bn(L, "Payload");
      } catch (F) {
        return Gr(F);
      }
    return new H(function(F) {
      var j = r || we(function() {
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
    function t(n) {
      n === void 0 && (n = {});
      var r = e.call(this, mg(n).request) || this;
      return r.options = n, r;
    }
    return t;
  })(Ie)
);
const { toString: es, hasOwnProperty: yg } = Object.prototype, ts = Function.prototype.toString, Ui = /* @__PURE__ */ new Map();
function ne(e, t) {
  try {
    return Vi(e, t);
  } finally {
    Ui.clear();
  }
}
function Vi(e, t) {
  if (e === t)
    return !0;
  const n = es.call(e), r = es.call(t);
  if (n !== r)
    return !1;
  switch (n) {
    case "[object Array]":
      if (e.length !== t.length)
        return !1;
    // Fall through to object case...
    case "[object Object]": {
      if (rs(e, t))
        return !0;
      const i = ns(e), a = ns(t), o = i.length;
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
      if (rs(e, t))
        return !0;
      const i = e.entries(), a = n === "[object Map]";
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
function ns(e) {
  return Object.keys(e).filter(vg, e);
}
function vg(e) {
  return this[e] !== void 0;
}
const bg = "{ [native code] }";
function Sg(e, t) {
  const n = e.length - t.length;
  return n >= 0 && e.indexOf(t, n) === n;
}
function rs(e, t) {
  let n = Ui.get(e);
  if (n) {
    if (n.has(t))
      return !0;
  } else
    Ui.set(e, n = /* @__PURE__ */ new Set());
  return n.add(t), !1;
}
function Bc(e, t, n, r) {
  var i = t.data, a = Ae(t, ["data"]), o = n.data, s = Ae(n, ["data"]);
  return ne(a, s) && qn(Vt(e).selectionSet, i, o, {
    fragmentMap: jt(Ut(e)),
    variables: r
  });
}
function qn(e, t, n, r) {
  if (t === n)
    return !0;
  var i = /* @__PURE__ */ new Set();
  return e.selections.every(function(a) {
    if (i.has(a) || (i.add(a), !Dn(a, r.variables)) || is(a))
      return !0;
    if (Ze(a)) {
      var o = Re(a), s = t && t[o], u = n && n[o], c = a.selectionSet;
      if (!c)
        return ne(s, u);
      var l = Array.isArray(s), d = Array.isArray(u);
      if (l !== d)
        return !1;
      if (l && d) {
        var f = s.length;
        if (u.length !== f)
          return !1;
        for (var p = 0; p < f; ++p)
          if (!qn(c, s[p], u[p], r))
            return !1;
        return !0;
      }
      return qn(c, s, u, r);
    } else {
      var y = ur(a, r.fragmentMap);
      if (y)
        return is(y) ? !0 : qn(
          y.selectionSet,
          // Notice that we reuse the same aResult and bResult values here,
          // since the fragment ...spread does not specify a field name, but
          // consists of multiple fields (within the fragment's selection set)
          // that should be applied to the current result value(s).
          t,
          n,
          r
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
var Gc = ht ? WeakMap : Map, zc = pa ? WeakSet : Set, Da = new wn(), as = !1;
function Qc() {
  as || (as = !0, globalThis.__DEV__ !== !1 && $.warn(52));
}
function Wc(e, t, n) {
  return Da.withValue(!0, function() {
    var r = an(e, t, n, !1);
    return Object.isFrozen(e) && Yn(r), r;
  });
}
function Eg(e, t) {
  if (t.has(e))
    return t.get(e);
  var n = Array.isArray(e) ? [] : /* @__PURE__ */ Object.create(null);
  return t.set(e, n), n;
}
function an(e, t, n, r, i) {
  var a, o = n.knownChanged, s = Eg(e, n.mutableTargets);
  if (Array.isArray(e)) {
    for (var u = 0, c = Array.from(e.entries()); u < c.length; u++) {
      var l = c[u], d = l[0], f = l[1];
      if (f === null) {
        s[d] = null;
        continue;
      }
      var p = an(f, t, n, r, globalThis.__DEV__ !== !1 ? "".concat(i || "", "[").concat(d, "]") : void 0);
      o.has(p) && o.add(s), s[d] = p;
    }
    return o.has(s) ? s : e;
  }
  for (var y = 0, m = t.selections; y < m.length; y++) {
    var v = m[y], g = void 0;
    if (r && o.add(s), v.kind === C.FIELD) {
      var b = Re(v), E = v.selectionSet;
      if (g = s[b] || e[b], g === void 0)
        continue;
      if (E && g !== null) {
        var p = an(e[b], E, n, r, globalThis.__DEV__ !== !1 ? "".concat(i || "", ".").concat(b) : void 0);
        o.has(p) && (g = p);
      }
      globalThis.__DEV__ === !1 && (s[b] = g), globalThis.__DEV__ !== !1 && (r && b !== "__typename" && // either the field is not present in the memo object
      // or it has a `get` descriptor, not a `value` descriptor
      // => it is a warning accessor and we can overwrite it
      // with another accessor
      !(!((a = Object.getOwnPropertyDescriptor(s, b)) === null || a === void 0) && a.value) ? Object.defineProperty(s, b, Dg(b, g, i || "", n.operationName, n.operationType)) : (delete s[b], s[b] = g));
    }
    if (v.kind === C.INLINE_FRAGMENT && (!v.typeCondition || n.cache.fragmentMatches(v, e.__typename)) && (g = an(e, v.selectionSet, n, r, i)), v.kind === C.FRAGMENT_SPREAD) {
      var D = v.name.value, I = n.fragmentMap[D] || (n.fragmentMap[D] = n.cache.lookupFragment(D));
      $(I, 47, D);
      var O = Ih(v);
      O !== "mask" && (g = an(e, I.selectionSet, n, O === "migrate", i));
    }
    o.has(g) && o.add(s);
  }
  return "__typename" in e && !("__typename" in s) && (s.__typename = e.__typename), Object.keys(s).length !== Object.keys(e).length && o.add(s), o.has(s) ? s : e;
}
function Dg(e, t, n, r, i) {
  var a = function() {
    return Da.getValue() || (globalThis.__DEV__ !== !1 && $.warn(48, r ? "".concat(i, " '").concat(r, "'") : "anonymous ".concat(i), "".concat(n, ".").concat(e).replace(/^\./, "")), a = function() {
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
function Hc(e, t, n, r) {
  if (!n.fragmentMatches)
    return globalThis.__DEV__ !== !1 && Qc(), e;
  var i = t.definitions.filter(function(o) {
    return o.kind === C.FRAGMENT_DEFINITION;
  });
  typeof r > "u" && ($(i.length === 1, 49, i.length), r = i[0].name.value);
  var a = i.find(function(o) {
    return o.name.value === r;
  });
  return $(!!a, 50, r), e == null || ne(e, {}) ? e : Wc(e, a.selectionSet, {
    operationType: "fragment",
    operationName: a.name.value,
    fragmentMap: jt(Ut(t)),
    cache: n,
    mutableTargets: new Gc(),
    knownChanged: new zc()
  });
}
function wg(e, t, n) {
  var r;
  if (!n.fragmentMatches)
    return globalThis.__DEV__ !== !1 && Qc(), e;
  var i = pt(t);
  return $(i, 51), e == null ? e : Wc(e, i.selectionSet, {
    operationType: i.operation,
    operationName: (r = i.name) === null || r === void 0 ? void 0 : r.value,
    fragmentMap: jt(Ut(t)),
    cache: n,
    mutableTargets: new Gc(),
    knownChanged: new zc()
  });
}
var Yc = (
  /** @class */
  (function() {
    function e() {
      this.assumeImmutableResults = !1, this.getFragmentDoc = vn(Ah, {
        max: Ne["cache.fragmentQueryDocuments"] || 1e3,
        cache: Wn
      });
    }
    return e.prototype.lookupFragment = function(t) {
      return null;
    }, e.prototype.batch = function(t) {
      var n = this, r = typeof t.optimistic == "string" ? t.optimistic : t.optimistic === !1 ? null : void 0, i;
      return this.performTransaction(function() {
        return i = t.update(n);
      }, r), i;
    }, e.prototype.recordOptimisticTransaction = function(t, n) {
      this.performTransaction(t, n);
    }, e.prototype.transformDocument = function(t) {
      return t;
    }, e.prototype.transformForLink = function(t) {
      return t;
    }, e.prototype.identify = function(t) {
    }, e.prototype.gc = function() {
      return [];
    }, e.prototype.modify = function(t) {
      return !1;
    }, e.prototype.readQuery = function(t, n) {
      return n === void 0 && (n = !!t.optimistic), this.read(_(_({}, t), { rootId: t.id || "ROOT_QUERY", optimistic: n }));
    }, e.prototype.watchFragment = function(t) {
      var n = this, r = t.fragment, i = t.fragmentName, a = t.from, o = t.optimistic, s = o === void 0 ? !0 : o, u = Ae(t, ["fragment", "fragmentName", "from", "optimistic"]), c = this.getFragmentDoc(r, i), l = typeof a > "u" || typeof a == "string" ? a : this.identify(a), d = !!t[Symbol.for("apollo.dataMasking")];
      if (globalThis.__DEV__ !== !1) {
        var f = i || fc(r).name.value;
        l || globalThis.__DEV__ !== !1 && $.warn(1, f);
      }
      var p = _(_({}, u), { returnPartialData: !0, id: l, query: c, optimistic: s }), y;
      return new H(function(m) {
        return n.watch(_(_({}, p), { immediate: !0, callback: function(v) {
          var g = d ? Hc(v.result, r, n, i) : v.result;
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
            v.missing && (b.missing = dr(v.missing.map(function(E) {
              return E.missing;
            }))), y = _(_({}, v), { result: g }), m.next(b);
          }
        } }));
      });
    }, e.prototype.readFragment = function(t, n) {
      return n === void 0 && (n = !!t.optimistic), this.read(_(_({}, t), { query: this.getFragmentDoc(t.fragment, t.fragmentName), rootId: t.id, optimistic: n }));
    }, e.prototype.writeQuery = function(t) {
      var n = t.id, r = t.data, i = Ae(t, ["id", "data"]);
      return this.write(Object.assign(i, {
        dataId: n || "ROOT_QUERY",
        result: r
      }));
    }, e.prototype.writeFragment = function(t) {
      var n = t.id, r = t.data, i = t.fragment, a = t.fragmentName, o = Ae(t, ["id", "data", "fragment", "fragmentName"]);
      return this.write(Object.assign(o, {
        query: this.getFragmentDoc(i, a),
        dataId: n,
        result: r
      }));
    }, e.prototype.updateQuery = function(t, n) {
      return this.batch({
        update: function(r) {
          var i = r.readQuery(t), a = n(i);
          return a == null ? i : (r.writeQuery(_(_({}, t), { data: a })), a);
        }
      });
    }, e.prototype.updateFragment = function(t, n) {
      return this.batch({
        update: function(r) {
          var i = r.readFragment(t), a = n(i);
          return a == null ? i : (r.writeFragment(_(_({}, t), { data: a })), a);
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
    function t(n, r, i, a) {
      var o, s = e.call(this, n) || this;
      if (s.message = n, s.path = r, s.query = i, s.variables = a, Array.isArray(s.path)) {
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
  var n = e.__typename, r = e.id, i = e._id;
  if (typeof n == "string" && (t && (t.keyObject = Kt(r) ? Kt(i) ? void 0 : { _id: i } : { id: r }), Kt(r) && !Kt(i) && (r = i), !Kt(r)))
    return "".concat(n, ":").concat(typeof r == "number" || typeof r == "string" ? r : JSON.stringify(r));
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
function nt(e) {
  var t = e.match(el);
  return t ? t[0] : e;
}
function Bi(e, t, n) {
  return ae(t) ? oe(t) ? t.every(function(r) {
    return Bi(e, r, n);
  }) : e.selections.every(function(r) {
    if (Ze(r) && Dn(r, n)) {
      var i = Re(r);
      return le.call(t, i) && (!r.selectionSet || Bi(r.selectionSet, t[i], n));
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
  var n = jt(Ut(e));
  return {
    fragmentMap: n,
    lookupFragment: function(r) {
      var i = n[r];
      return !i && t && (i = t.lookup(r)), i || null;
    }
  };
}
var Un = /* @__PURE__ */ Object.create(null), zr = function() {
  return Un;
}, os = /* @__PURE__ */ Object.create(null), Sn = (
  /** @class */
  (function() {
    function e(t, n) {
      var r = this;
      this.policies = t, this.group = n, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(i, a) {
        return Yn(Y(i) ? r.get(i.__ref, a) : i && i[a]);
      }, this.canRead = function(i) {
        return Y(i) ? r.has(i.__ref) : typeof i == "object";
      }, this.toReference = function(i, a) {
        if (typeof i == "string")
          return kt(i);
        if (Y(i))
          return i;
        var o = r.policies.identify(i)[0];
        if (o) {
          var s = kt(o);
          return a && r.merge(o, i), s;
        }
      };
    }
    return e.prototype.toObject = function() {
      return _({}, this.data);
    }, e.prototype.has = function(t) {
      return this.lookup(t, !0) !== void 0;
    }, e.prototype.get = function(t, n) {
      if (this.group.depend(t, n), le.call(this.data, t)) {
        var r = this.data[t];
        if (r && le.call(r, n))
          return r[n];
      }
      if (n === "__typename" && le.call(this.policies.rootTypenamesById, t))
        return this.policies.rootTypenamesById[t];
      if (this instanceof Ue)
        return this.parent.get(t, n);
    }, e.prototype.lookup = function(t, n) {
      if (n && this.group.depend(t, "__exists"), le.call(this.data, t))
        return this.data[t];
      if (this instanceof Ue)
        return this.parent.lookup(t, n);
      if (this.policies.rootTypenamesById[t])
        return /* @__PURE__ */ Object.create(null);
    }, e.prototype.merge = function(t, n) {
      var r = this, i;
      Y(t) && (t = t.__ref), Y(n) && (n = n.__ref);
      var a = typeof t == "string" ? this.lookup(i = t) : t, o = typeof n == "string" ? this.lookup(i = n) : n;
      if (o) {
        $(typeof i == "string", 2);
        var s = new tt(xg).merge(a, o);
        if (this.data[i] = s, s !== a && (delete this.refs[i], this.group.caching)) {
          var u = /* @__PURE__ */ Object.create(null);
          a || (u.__exists = 1), Object.keys(o).forEach(function(c) {
            if (!a || a[c] !== s[c]) {
              u[c] = 1;
              var l = nt(c);
              l !== c && !r.policies.hasKeyArgs(s.__typename, l) && (u[l] = 1), s[c] === void 0 && !(r instanceof Ue) && delete s[c];
            }
          }), u.__typename && !(a && a.__typename) && // Since we return default root __typename strings
          // automatically from store.get, we don't need to dirty the
          // ROOT_QUERY.__typename field if merged.__typename is equal
          // to the default string (usually "Query").
          this.policies.rootTypenamesById[i] === s.__typename && delete u.__typename, Object.keys(u).forEach(function(c) {
            return r.group.dirty(i, c);
          });
        }
      }
    }, e.prototype.modify = function(t, n) {
      var r = this, i = this.lookup(t);
      if (i) {
        var a = /* @__PURE__ */ Object.create(null), o = !1, s = !0, u = {
          DELETE: Un,
          INVALIDATE: os,
          isReference: Y,
          toReference: this.toReference,
          canRead: this.canRead,
          readField: function(c, l) {
            return r.policies.readField(typeof c == "string" ? {
              fieldName: c,
              from: l || kt(t)
            } : c, { store: r });
          }
        };
        if (Object.keys(i).forEach(function(c) {
          var l = nt(c), d = i[c];
          if (d !== void 0) {
            var f = typeof n == "function" ? n : n[c] || n[l];
            if (f) {
              var p = f === zr ? Un : f(Yn(d), _(_({}, u), { fieldName: l, storeFieldName: c, storage: r.getStorage(t, c) }));
              if (p === os)
                r.group.dirty(t, c);
              else if (p === Un && (p = void 0), p !== d && (a[c] = p, o = !0, d = p, globalThis.__DEV__ !== !1)) {
                var y = function(I) {
                  if (r.lookup(I.__ref) === void 0)
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
                      var D = r.policies.identify(E)[0];
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
    }, e.prototype.delete = function(t, n, r) {
      var i, a = this.lookup(t);
      if (a) {
        var o = this.getFieldValue(a, "__typename"), s = n && r ? this.policies.getStoreFieldName({ typename: o, fieldName: n, args: r }) : n;
        return this.modify(t, s ? (i = {}, i[s] = zr, i) : zr);
      }
      return !1;
    }, e.prototype.evict = function(t, n) {
      var r = !1;
      return t.id && (le.call(this.data, t.id) && (r = this.delete(t.id, t.fieldName, t.args)), this instanceof Ue && this !== n && (r = this.parent.evict(t, n) || r), (t.fieldName || r) && this.group.dirty(t.id, t.fieldName || "__exists")), r;
    }, e.prototype.clear = function() {
      this.replace(null);
    }, e.prototype.extract = function() {
      var t = this, n = this.toObject(), r = [];
      return this.getRootIdSet().forEach(function(i) {
        le.call(t.policies.rootTypenamesById, i) || r.push(i);
      }), r.length && (n.__META = { extraRootIds: r.sort() }), n;
    }, e.prototype.replace = function(t) {
      var n = this;
      if (Object.keys(this.data).forEach(function(a) {
        t && le.call(t, a) || n.delete(a);
      }), t) {
        var r = t.__META, i = Ae(t, ["__META"]);
        Object.keys(i).forEach(function(a) {
          n.merge(a, i[a]);
        }), r && r.extraRootIds.forEach(this.retain, this);
      }
    }, e.prototype.retain = function(t) {
      return this.rootIds[t] = (this.rootIds[t] || 0) + 1;
    }, e.prototype.release = function(t) {
      if (this.rootIds[t] > 0) {
        var n = --this.rootIds[t];
        return n || delete this.rootIds[t], n;
      }
      return 0;
    }, e.prototype.getRootIdSet = function(t) {
      return t === void 0 && (t = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(t.add, t), this instanceof Ue ? this.parent.getRootIdSet(t) : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t), t;
    }, e.prototype.gc = function() {
      var t = this, n = this.getRootIdSet(), r = this.toObject();
      n.forEach(function(o) {
        le.call(r, o) && (Object.keys(t.findChildRefIds(o)).forEach(n.add, n), delete r[o]);
      });
      var i = Object.keys(r);
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
        var n = this.refs[t] = /* @__PURE__ */ Object.create(null), r = this.data[t];
        if (!r)
          return n;
        var i = /* @__PURE__ */ new Set([r]);
        i.forEach(function(a) {
          Y(a) && (n[a.__ref] = !0), ae(a) && Object.keys(a).forEach(function(o) {
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
), nl = (
  /** @class */
  (function() {
    function e(t, n) {
      n === void 0 && (n = null), this.caching = t, this.parent = n, this.d = null, this.resetCaching();
    }
    return e.prototype.resetCaching = function() {
      this.d = this.caching ? Ec() : null, this.keyMaker = new Le(ht);
    }, e.prototype.depend = function(t, n) {
      if (this.d) {
        this.d(Qr(t, n));
        var r = nt(n);
        r !== n && this.d(Qr(t, r)), this.parent && this.parent.depend(t, n);
      }
    }, e.prototype.dirty = function(t, n) {
      this.d && this.d.dirty(
        Qr(t, n),
        // When storeFieldName === "__exists", that means the entity identified
        // by dataId has either disappeared from the cache or was newly added,
        // so the result caching system would do well to "forget everything it
        // knows" about that object. To achieve that kind of invalidation, we
        // not only dirty the associated result cache entry, but also remove it
        // completely from the dependency graph. For the optimism implementation
        // details, see https://github.com/benjamn/optimism/pull/195.
        n === "__exists" ? "forget" : "setDirty"
      );
    }, e;
  })()
);
function Qr(e, t) {
  return t + "#" + e;
}
function ss(e, t) {
  ln(e) && e.group.depend(t, "__exists");
}
(function(e) {
  var t = (
    /** @class */
    (function(n) {
      Ee(r, n);
      function r(i) {
        var a = i.policies, o = i.resultCaching, s = o === void 0 ? !0 : o, u = i.seed, c = n.call(this, a, new nl(s)) || this;
        return c.stump = new kg(c), c.storageTrie = new Le(ht), u && c.replace(u), c;
      }
      return r.prototype.addLayer = function(i, a) {
        return this.stump.addLayer(i, a);
      }, r.prototype.removeLayer = function() {
        return this;
      }, r.prototype.getStorage = function() {
        return this.storageTrie.lookupArray(arguments);
      }, r;
    })(e)
  );
  e.Root = t;
})(Sn || (Sn = {}));
var Ue = (
  /** @class */
  (function(e) {
    Ee(t, e);
    function t(n, r, i, a) {
      var o = e.call(this, r.policies, a) || this;
      return o.id = n, o.parent = r, o.replay = i, o.group = a, i(o), o;
    }
    return t.prototype.addLayer = function(n, r) {
      return new t(n, this, r, this.group);
    }, t.prototype.removeLayer = function(n) {
      var r = this, i = this.parent.removeLayer(n);
      return n === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(a) {
        var o = r.data[a], s = i.lookup(a);
        s ? o ? o !== s && Object.keys(o).forEach(function(u) {
          ne(o[u], s[u]) || r.group.dirty(a, u);
        }) : (r.group.dirty(a, "__exists"), Object.keys(s).forEach(function(u) {
          r.group.dirty(a, u);
        })) : r.delete(a);
      }), i) : i === this.parent ? this : i.addLayer(this.id, this.replay);
    }, t.prototype.toObject = function() {
      return _(_({}, this.parent.toObject()), this.data);
    }, t.prototype.findChildRefIds = function(n) {
      var r = this.parent.findChildRefIds(n);
      return le.call(this.data, n) ? _(_({}, r), e.prototype.findChildRefIds.call(this, n)) : r;
    }, t.prototype.getStorage = function() {
      for (var n = this.parent; n.parent; )
        n = n.parent;
      return n.getStorage.apply(
        n,
        // @ts-expect-error
        arguments
      );
    }, t;
  })(Sn)
), kg = (
  /** @class */
  (function(e) {
    Ee(t, e);
    function t(n) {
      return e.call(this, "EntityStore.Stump", n, function() {
      }, new nl(n.group.caching, n.group)) || this;
    }
    return t.prototype.removeLayer = function() {
      return this;
    }, t.prototype.merge = function(n, r) {
      return this.parent.merge(n, r);
    }, t;
  })(Ue)
);
function xg(e, t, n) {
  var r = e[n], i = t[n];
  return ne(r, i) ? r : i;
}
function ln(e) {
  return !!(e instanceof Sn && e.group.caching);
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
        var n = Fg(t);
        return this.passes.set(n, t), n;
      }
      return t;
    }, e.prototype.admit = function(t) {
      var n = this;
      if (ae(t)) {
        var r = this.passes.get(t);
        if (r)
          return r;
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
              u.push(n.admit(t[p]));
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
      var n = Object.keys(t), r = this.pool.lookupArray(n);
      if (!r.keys) {
        n.sort();
        var i = JSON.stringify(n);
        (r.keys = this.keysByJSON.get(i)) || this.keysByJSON.set(i, r.keys = { sorted: n, json: i });
      }
      return r.keys;
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
      var n = this;
      this.knownResults = new (ht ? WeakMap : Map)(), this.config = Rt(t, {
        addTypename: t.addTypename !== !1,
        canonizeResults: Zc(t)
      }), this.canon = t.canon || new us(), this.executeSelectionSet = vn(function(r) {
        var i, a = r.context.canonizeResults, o = cs(r);
        o[3] = !a;
        var s = (i = n.executeSelectionSet).peek.apply(i, o);
        return s ? a ? _(_({}, s), {
          // If we previously read this result without canonizing it, we can
          // reuse that result simply by canonizing it now.
          result: n.canon.admit(s.result)
        }) : s : (ss(r.context.store, r.enclosingRef.__ref), n.execSelectionSetImpl(r));
      }, {
        max: this.config.resultCacheMaxSize || Ne["inMemoryCache.executeSelectionSet"] || 5e4,
        keyArgs: cs,
        // Note that the parameters of makeCacheKey are determined by the
        // array returned by keyArgs.
        makeCacheKey: function(r, i, a, o) {
          if (ln(a.store))
            return a.store.makeCacheKey(r, Y(i) ? i.__ref : i, a.varString, o);
        }
      }), this.executeSubSelectedArray = vn(function(r) {
        return ss(r.context.store, r.enclosingRef.__ref), n.execSubSelectedArrayImpl(r);
      }, {
        max: this.config.resultCacheMaxSize || Ne["inMemoryCache.executeSubSelectedArray"] || 1e4,
        makeCacheKey: function(r) {
          var i = r.field, a = r.array, o = r.context;
          if (ln(o.store))
            return o.store.makeCacheKey(i, a, o.varString);
        }
      });
    }
    return e.prototype.resetCanon = function() {
      this.canon = new us();
    }, e.prototype.diffQueryAgainstStore = function(t) {
      var n = t.store, r = t.query, i = t.rootId, a = i === void 0 ? "ROOT_QUERY" : i, o = t.variables, s = t.returnPartialData, u = s === void 0 ? !0 : s, c = t.canonizeResults, l = c === void 0 ? this.config.canonizeResults : c, d = this.config.cache.policies;
      o = _(_({}, ha(lc(r))), o);
      var f = kt(a), p = this.executeSelectionSet({
        selectionSet: Vt(r).selectionSet,
        objectOrReference: f,
        enclosingRef: f,
        context: _({ store: n, query: r, policies: d, variables: o, varString: Ye(o), canonizeResults: l }, tl(r, this.config.fragments))
      }), y;
      if (p.missing && (y = [
        new Jc(Ag(p.missing), p.missing, r, o)
      ], !u))
        throw y[0];
      return {
        result: p.result,
        complete: !y,
        missing: y
      };
    }, e.prototype.isFresh = function(t, n, r, i) {
      if (ln(i.store) && this.knownResults.get(t) === r) {
        var a = this.executeSelectionSet.peek(
          r,
          n,
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
      var n = this, r = t.selectionSet, i = t.objectOrReference, a = t.enclosingRef, o = t.context;
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
      var m = new Set(r.selections);
      m.forEach(function(E) {
        var D, I;
        if (Dn(E, s))
          if (Ze(E)) {
            var O = u.readField({
              fieldName: E.name.value,
              field: E,
              variables: o.variables,
              from: i
            }, o), x = Re(E);
            O === void 0 ? va.added(E) || (f = p.merge(f, (D = {}, D[x] = "Can't find field '".concat(E.name.value, "' on ").concat(Y(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), D))) : oe(O) ? O.length > 0 && (O = y(n.executeSubSelectedArray({
              field: E,
              array: O,
              enclosingRef: a,
              context: o
            }), x)) : E.selectionSet ? O != null && (O = y(n.executeSelectionSet({
              selectionSet: E.selectionSet,
              objectOrReference: O,
              enclosingRef: Y(O) ? O : a,
              context: o
            }), x)) : o.canonizeResults && (O = n.canon.pass(O)), O !== void 0 && d.push((I = {}, I[x] = O, I));
          } else {
            var P = ur(E, o.lookupFragment);
            if (!P && E.kind === C.FRAGMENT_SPREAD)
              throw ve(10, E.name.value);
            P && u.fragmentMatches(P, l) && P.selectionSet.selections.forEach(m.add, m);
          }
      });
      var v = dr(d), g = { result: v, missing: f }, b = o.canonizeResults ? this.canon.admit(g) : Yn(g);
      return b.result && this.knownResults.set(b.result, r), b;
    }, e.prototype.execSubSelectedArrayImpl = function(t) {
      var n = this, r = t.field, i = t.array, a = t.enclosingRef, o = t.context, s, u = new tt();
      function c(l, d) {
        var f;
        return l.missing && (s = u.merge(s, (f = {}, f[d] = l.missing, f))), l.result;
      }
      return r.selectionSet && (i = i.filter(o.store.canRead)), i = i.map(function(l, d) {
        return l === null ? null : oe(l) ? c(n.executeSubSelectedArray({
          field: r,
          array: l,
          enclosingRef: a,
          context: o
        }), d) : r.selectionSet ? c(n.executeSelectionSet({
          selectionSet: r.selectionSet,
          objectOrReference: l,
          enclosingRef: Y(l) ? l : a,
          context: o
        }), d) : (globalThis.__DEV__ !== !1 && $g(o.store, r, l), l);
      }), {
        result: o.canonizeResults ? this.canon.admit(i) : i,
        missing: s
      };
    }, e;
  })()
);
function Ag(e) {
  try {
    JSON.stringify(e, function(t, n) {
      if (typeof n == "string")
        throw n;
      return n;
    });
  } catch (t) {
    return t;
  }
}
function $g(e, t, n) {
  if (!t.selectionSet) {
    var r = /* @__PURE__ */ new Set([n]);
    r.forEach(function(i) {
      ae(i) && ($(
        !Y(i),
        11,
        Ig(e, i),
        t.name.value
      ), Object.values(i).forEach(r.add, r));
    });
  }
}
var wa = new wn(), ls = /* @__PURE__ */ new WeakMap();
function fn(e) {
  var t = ls.get(e);
  return t || ls.set(e, t = {
    vars: /* @__PURE__ */ new Set(),
    dep: Ec()
  }), t;
}
function fs(e) {
  fn(e).vars.forEach(function(t) {
    return t.forgetCache(e);
  });
}
function Pg(e) {
  fn(e).vars.forEach(function(t) {
    return t.attachCache(e);
  });
}
function Ng(e) {
  var t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = function(a) {
    if (arguments.length > 0) {
      if (e !== a) {
        e = a, t.forEach(function(u) {
          fn(u).dep.dirty(r), Rg(u);
        });
        var o = Array.from(n);
        n.clear(), o.forEach(function(u) {
          return u(e);
        });
      }
    } else {
      var s = wa.getValue();
      s && (i(s), fn(s).dep(r));
    }
    return e;
  };
  r.onNextChange = function(a) {
    return n.add(a), function() {
      n.delete(a);
    };
  };
  var i = r.attachCache = function(a) {
    return t.add(a), fn(a).vars.add(r), r;
  };
  return r.forgetCache = function(a) {
    return t.delete(a);
  }, r;
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
  return t.keyFieldsFn || (t.keyFieldsFn = function(n, r) {
    var i = function(o, s) {
      return r.readField(s, o);
    }, a = r.keyObject = Ia(e, function(o) {
      var s = Ft(
        r.storeObject,
        o,
        // Using context.readField to extract paths from context.storeObject
        // allows the extraction to see through Reference objects and respect
        // custom read functions.
        i
      );
      return s === void 0 && n !== r.storeObject && le.call(n, o[0]) && (s = Ft(n, o, il)), $(s !== void 0, 5, o.join("."), n), s;
    });
    return "".concat(r.typename, ":").concat(JSON.stringify(a));
  });
}
function hs(e) {
  var t = Ta(e);
  return t.keyArgsFn || (t.keyArgsFn = function(n, r) {
    var i = r.field, a = r.variables, o = r.fieldName, s = Ia(e, function(c) {
      var l = c[0], d = l.charAt(0);
      if (d === "@") {
        if (i && Ce(i.directives)) {
          var f = l.slice(1), p = i.directives.find(function(g) {
            return g.name.value === f;
          }), y = p && cr(p, a);
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
      if (n)
        return Ft(n, c);
    }), u = JSON.stringify(s);
    return (n || u !== "{}") && (o += ":" + u), o;
  });
}
function Ia(e, t) {
  var n = new tt();
  return rl(e).reduce(function(r, i) {
    var a, o = t(i);
    if (o !== void 0) {
      for (var s = i.length - 1; s >= 0; --s)
        o = (a = {}, a[i[s]] = o, a);
      r = n.merge(r, o);
    }
    return r;
  }, /* @__PURE__ */ Object.create(null));
}
function rl(e) {
  var t = Ta(e);
  if (!t.paths) {
    var n = t.paths = [], r = [];
    e.forEach(function(i, a) {
      oe(i) ? (rl(i).forEach(function(o) {
        return n.push(r.concat(o));
      }), r.length = 0) : (r.push(i), oe(e[a + 1]) || (n.push(r.slice(0)), r.length = 0));
    });
  }
  return t.paths;
}
function il(e, t) {
  return e[t];
}
function Ft(e, t, n) {
  return n = n || il, al(t.reduce(function r(i, a) {
    return oe(i) ? i.map(function(o) {
      return r(o, a);
    }) : i && n(i, a);
  }, e));
}
function al(e) {
  return ae(e) ? oe(e) ? e.map(al) : Ia(Object.keys(e).sort(), function(t) {
    return Ft(e, t);
  }) : e;
}
function Gi(e) {
  return e.args !== void 0 ? e.args : e.field ? cr(e.field, e.variables) : null;
}
var Mg = function() {
}, ms = function(e, t) {
  return t.fieldName;
}, gs = function(e, t, n) {
  var r = n.mergeObjects;
  return r(e, t);
}, ys = function(e, t) {
  return t;
}, Lg = (
  /** @class */
  (function() {
    function e(t) {
      this.config = t, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = _({ dataIdFromObject: Kc }, t), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), t.possibleTypes && this.addPossibleTypes(t.possibleTypes), t.typePolicies && this.addTypePolicies(t.typePolicies);
    }
    return e.prototype.identify = function(t, n) {
      var r, i = this, a = n && (n.typename || ((r = n.storeObject) === null || r === void 0 ? void 0 : r.__typename)) || t.__typename;
      if (a === this.rootTypenamesById.ROOT_QUERY)
        return ["ROOT_QUERY"];
      var o = n && n.storeObject || t, s = _(_({}, n), { typename: a, storeObject: o, readField: n && n.readField || function() {
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
      var n = this;
      Object.keys(t).forEach(function(r) {
        var i = t[r], a = i.queryType, o = i.mutationType, s = i.subscriptionType, u = Ae(i, ["queryType", "mutationType", "subscriptionType"]);
        a && n.setRootTypename("Query", r), o && n.setRootTypename("Mutation", r), s && n.setRootTypename("Subscription", r), le.call(n.toBeAdded, r) ? n.toBeAdded[r].push(u) : n.toBeAdded[r] = [u];
      });
    }, e.prototype.updateTypePolicy = function(t, n) {
      var r = this, i = this.getTypePolicy(t), a = n.keyFields, o = n.fields;
      function s(u, c) {
        u.merge = typeof c == "function" ? c : c === !0 ? gs : c === !1 ? ys : u.merge;
      }
      s(i, n.merge), i.keyFn = // Pass false to disable normalization for this typename.
      a === !1 ? Mg : oe(a) ? ps(a) : typeof a == "function" ? a : i.keyFn, o && Object.keys(o).forEach(function(u) {
        var c = r.getFieldPolicy(t, u, !0), l = o[u];
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
    }, e.prototype.setRootTypename = function(t, n) {
      n === void 0 && (n = t);
      var r = "ROOT_" + t.toUpperCase(), i = this.rootTypenamesById[r];
      n !== i && ($(!i || i === t, 6, t), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[n] = r, this.rootTypenamesById[r] = n);
    }, e.prototype.addPossibleTypes = function(t) {
      var n = this;
      this.usingPossibleTypes = !0, Object.keys(t).forEach(function(r) {
        n.getSupertypeSet(r, !0), t[r].forEach(function(i) {
          n.getSupertypeSet(i, !0).add(r);
          var a = i.match(el);
          (!a || a[0] !== i) && n.fuzzySubtypes.set(i, new RegExp(i));
        });
      });
    }, e.prototype.getTypePolicy = function(t) {
      var n = this;
      if (!le.call(this.typePolicies, t)) {
        var r = this.typePolicies[t] = /* @__PURE__ */ Object.create(null);
        r.fields = /* @__PURE__ */ Object.create(null);
        var i = this.supertypeMap.get(t);
        !i && this.fuzzySubtypes.size && (i = this.getSupertypeSet(t, !0), this.fuzzySubtypes.forEach(function(o, s) {
          if (o.test(t)) {
            var u = n.supertypeMap.get(s);
            u && u.forEach(function(c) {
              return i.add(c);
            });
          }
        })), i && i.size && i.forEach(function(o) {
          var s = n.getTypePolicy(o), u = s.fields, c = Ae(s, ["fields"]);
          Object.assign(r, c), Object.assign(r.fields, u);
        });
      }
      var a = this.toBeAdded[t];
      return a && a.length && a.splice(0).forEach(function(o) {
        n.updateTypePolicy(t, o);
      }), this.typePolicies[t];
    }, e.prototype.getFieldPolicy = function(t, n, r) {
      if (t) {
        var i = this.getTypePolicy(t).fields;
        return i[n] || r && (i[n] = /* @__PURE__ */ Object.create(null));
      }
    }, e.prototype.getSupertypeSet = function(t, n) {
      var r = this.supertypeMap.get(t);
      return !r && n && this.supertypeMap.set(t, r = /* @__PURE__ */ new Set()), r;
    }, e.prototype.fragmentMatches = function(t, n, r, i) {
      var a = this;
      if (!t.typeCondition)
        return !0;
      if (!n)
        return !1;
      var o = t.typeCondition.name.value;
      if (n === o)
        return !0;
      if (this.usingPossibleTypes && this.supertypeMap.has(o))
        for (var s = this.getSupertypeSet(n, !0), u = [s], c = function(y) {
          var m = a.getSupertypeSet(y, !1);
          m && m.size && u.indexOf(m) < 0 && u.push(m);
        }, l = !!(r && this.fuzzySubtypes.size), d = !1, f = 0; f < u.length; ++f) {
          var p = u[f];
          if (p.has(o))
            return s.has(o) || (d && globalThis.__DEV__ !== !1 && $.warn(7, n, o), s.add(o)), !0;
          p.forEach(c), l && // Start checking fuzzy subtypes only after exhausting all
          // non-fuzzy subtypes (after the final iteration of the loop).
          f === u.length - 1 && // We could wait to compare fragment.selectionSet to result
          // after we verify the supertype, but this check is often less
          // expensive than that search, and we will have to do the
          // comparison anyway whenever we find a potential match.
          Bi(t.selectionSet, r, i) && (l = !1, d = !0, this.fuzzySubtypes.forEach(function(y, m) {
            var v = n.match(y);
            v && v[0] === n && c(m);
          }));
        }
      return !1;
    }, e.prototype.hasKeyArgs = function(t, n) {
      var r = this.getFieldPolicy(t, n, !1);
      return !!(r && r.keyFn);
    }, e.prototype.getStoreFieldName = function(t) {
      var n = t.typename, r = t.fieldName, i = this.getFieldPolicy(n, r, !1), a, o = i && i.keyFn;
      if (o && n)
        for (var s = {
          typename: n,
          fieldName: r,
          field: t.field || null,
          variables: t.variables
        }, u = Gi(t); o; ) {
          var c = o(u, s);
          if (oe(c))
            o = hs(c);
          else {
            a = c || r;
            break;
          }
        }
      return a === void 0 && (a = t.field ? sm(t.field, t.variables) : cc(r, Gi(t))), a === !1 ? r : r === nt(a) ? a : r + ":" + a;
    }, e.prototype.readField = function(t, n) {
      var r = t.from;
      if (r) {
        var i = t.field || t.fieldName;
        if (i) {
          if (t.typename === void 0) {
            var a = n.store.getFieldValue(r, "__typename");
            a && (t.typename = a);
          }
          var o = this.getStoreFieldName(t), s = nt(o), u = n.store.getFieldValue(r, o), c = this.getFieldPolicy(t.typename, s, !1), l = c && c.read;
          if (l) {
            var d = vs(this, r, t, n, n.store.getStorage(Y(r) ? r.__ref : r, o));
            return wa.withValue(this.cache, l, [
              u,
              d
            ]);
          }
          return u;
        }
      }
    }, e.prototype.getReadFunction = function(t, n) {
      var r = this.getFieldPolicy(t, n, !1);
      return r && r.read;
    }, e.prototype.getMergeFunction = function(t, n, r) {
      var i = this.getFieldPolicy(t, n, !1), a = i && i.merge;
      return !a && r && (i = this.getTypePolicy(r), a = i && i.merge), a;
    }, e.prototype.runMergeFunction = function(t, n, r, i, a) {
      var o = r.field, s = r.typename, u = r.merge;
      return u === gs ? ol(i.store)(t, n) : u === ys ? n : (i.overwrite && (t = void 0), u(t, n, vs(
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
function vs(e, t, n, r, i) {
  var a = e.getStoreFieldName(n), o = nt(a), s = n.variables || r.variables, u = r.store, c = u.toReference, l = u.canRead;
  return {
    args: Gi(n),
    field: n.field || null,
    fieldName: o,
    storeFieldName: a,
    variables: s,
    isReference: Y,
    toReference: c,
    storage: i,
    cache: e.cache,
    canRead: l,
    readField: function() {
      return e.readField(Oa(arguments, t, s), r);
    },
    mergeObjects: ol(r.store)
  };
}
function Oa(e, t, n) {
  var r = e[0], i = e[1], a = e.length, o;
  return typeof r == "string" ? o = {
    fieldName: r,
    // Default to objectOrReference only when no second argument was
    // passed for the from parameter, not when undefined is explicitly
    // passed as the second argument.
    from: a > 1 ? i : t
  } : (o = _({}, r), le.call(o, "from") || (o.from = t)), globalThis.__DEV__ !== !1 && o.from === void 0 && globalThis.__DEV__ !== !1 && $.warn(8, Gu(Array.from(e))), o.variables === void 0 && (o.variables = n), o;
}
function ol(e) {
  return function(n, r) {
    if (oe(n) || oe(r))
      throw ve(9);
    if (ae(n) && ae(r)) {
      var i = e.getFieldValue(n, "__typename"), a = e.getFieldValue(r, "__typename"), o = i && a && i !== a;
      if (o)
        return r;
      if (Y(n) && wt(r))
        return e.merge(n.__ref, r), n;
      if (wt(n) && Y(r))
        return e.merge(n, r.__ref), r;
      if (wt(n) && wt(r))
        return _(_({}, n), r);
    }
    return r;
  };
}
function Wr(e, t, n) {
  var r = "".concat(t).concat(n), i = e.flavors.get(r);
  return i || e.flavors.set(r, i = e.clientOnly === t && e.deferred === n ? e : _(_({}, e), { clientOnly: t, deferred: n })), i;
}
var jg = (
  /** @class */
  (function() {
    function e(t, n, r) {
      this.cache = t, this.reader = n, this.fragments = r;
    }
    return e.prototype.writeToStore = function(t, n) {
      var r = this, i = n.query, a = n.result, o = n.dataId, s = n.variables, u = n.overwrite, c = pt(i), l = Og();
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
          var E = r.applyMerges(v, b, m, d);
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
            return D[nt(x)] === !0;
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
      var n = this, r = t.dataId, i = t.result, a = t.selectionSet, o = t.context, s = t.mergeTree, u = this.cache.policies, c = /* @__PURE__ */ Object.create(null), l = r && u.rootTypenamesById[r] || Ni(i, a, o.fragmentMap) || r && o.store.get(r, "__typename");
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
          }), L = bs(s, P), q = n.processFieldValue(
            x,
            D,
            // Reset context.clientOnly and context.deferred to their default
            // values before processing nested selection sets.
            D.selectionSet ? Wr(E, !1, !1) : E,
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
        r = r || y, m && (c = o.merge(c, m));
      } catch (E) {
        if (!r)
          throw E;
      }
      if (typeof r == "string") {
        var v = kt(r), g = o.written[r] || (o.written[r] = []);
        if (g.indexOf(a) >= 0 || (g.push(a), this.reader && this.reader.isFresh(i, v, a, o)))
          return v;
        var b = o.incomingById.get(r);
        return b ? (b.storeObject = o.merge(b.storeObject, c), b.mergeTree = zi(b.mergeTree, s), f.forEach(function(E) {
          return b.fieldNodeSet.add(E);
        })) : o.incomingById.set(r, {
          storeObject: c,
          // Save a reference to mergeTree only if it is not empty, because
          // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
          // reused for entirely different parts of the result tree.
          mergeTree: Jn(s) ? void 0 : s,
          fieldNodeSet: f
        }), v;
      }
      return c;
    }, e.prototype.processFieldValue = function(t, n, r, i) {
      var a = this;
      return !n.selectionSet || t === null ? globalThis.__DEV__ !== !1 ? Fc(t) : t : oe(t) ? t.map(function(o, s) {
        var u = a.processFieldValue(o, n, r, bs(i, s));
        return Ss(i, s), u;
      }) : this.processSelectionSet({
        result: t,
        selectionSet: n.selectionSet,
        context: r,
        mergeTree: i
      });
    }, e.prototype.flattenFields = function(t, n, r, i) {
      i === void 0 && (i = Ni(n, t, r.fragmentMap));
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
          if (Dn(f, r.variables)) {
            var p = l.clientOnly, y = l.deferred;
            if (
              // Since the presence of @client or @defer on this field can only
              // cause clientOnly or deferred to become true, we can skip the
              // forEach loop if both clientOnly and deferred are already true.
              !(p && y) && Ce(f.directives) && f.directives.forEach(function(g) {
                var b = g.name.value;
                if (b === "client" && (p = !0), b === "defer") {
                  var E = cr(g, r.variables);
                  (!E || E.if !== !1) && (y = !0);
                }
              }), Ze(f)
            ) {
              var m = a.get(f);
              m && (p = p && m.clientOnly, y = y && m.deferred), a.set(f, Wr(r, p, y));
            } else {
              var v = ur(f, r.lookupFragment);
              if (!v && f.kind === C.FRAGMENT_SPREAD)
                throw ve(14, f.name.value);
              v && o.fragmentMatches(v, i, n, r.variables) && u(v.selectionSet, Wr(r, p, y));
            }
          }
        }));
      })(t, r), a;
    }, e.prototype.applyMerges = function(t, n, r, i, a) {
      var o, s = this;
      if (t.map.size && !Y(r)) {
        var u = (
          // Items in the same position in different arrays are not
          // necessarily related to each other, so when incoming is an array
          // we process its elements as if there was no existing data.
          !oe(r) && // Likewise, existing must be either a Reference or a StoreObject
          // in order for its fields to be safe to merge with the fields of
          // the incoming object.
          (Y(n) || wt(n)) ? n : void 0
        ), c = r;
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
        }), l && (r = oe(c) ? c.slice(0) : _({}, c), l.forEach(function(f, p) {
          r[p] = f;
        }));
      }
      return t.info ? this.cache.policies.runMergeFunction(n, r, t.info, i, a && (o = i.store).getStorage.apply(o, a)) : r;
    }, e;
  })()
), sl = [];
function bs(e, t) {
  var n = e.map;
  return n.has(t) || n.set(t, sl.pop() || { map: /* @__PURE__ */ new Map() }), n.get(t);
}
function zi(e, t) {
  if (e === t || !t || Jn(t))
    return e;
  if (!e || Jn(e))
    return t;
  var n = e.info && t.info ? _(_({}, e.info), t.info) : e.info || t.info, r = e.map.size && t.map.size, i = r ? /* @__PURE__ */ new Map() : e.map.size ? e.map : t.map, a = { info: n, map: i };
  if (r) {
    var o = new Set(t.map.keys());
    e.map.forEach(function(s, u) {
      a.map.set(u, zi(s, t.map.get(u))), o.delete(u);
    }), o.forEach(function(s) {
      a.map.set(s, zi(t.map.get(s), e.map.get(s)));
    });
  }
  return a;
}
function Jn(e) {
  return !e || !(e.info || e.map.size);
}
function Ss(e, t) {
  var n = e.map, r = n.get(t);
  r && Jn(r) && (sl.push(r), n.delete(t));
}
var _s = /* @__PURE__ */ new Set();
function qg(e, t, n, r) {
  var i = function(d) {
    var f = r.getFieldValue(d, n);
    return typeof f == "object" && f;
  }, a = i(e);
  if (a) {
    var o = i(t);
    if (o && !Y(a) && !ne(a, o) && !Object.keys(a).every(function(d) {
      return r.getFieldValue(o, d) !== void 0;
    })) {
      var s = r.getFieldValue(e, "__typename") || r.getFieldValue(t, "__typename"), u = nt(n), c = "".concat(s, ".").concat(u);
      if (!_s.has(c)) {
        _s.add(c);
        var l = [];
        !oe(a) && !oe(o) && [a, o].forEach(function(d) {
          var f = r.getFieldValue(d, "__typename");
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
    function t(n) {
      n === void 0 && (n = {});
      var r = e.call(this) || this;
      return r.watches = /* @__PURE__ */ new Set(), r.addTypenameTransform = new Dc(va), r.assumeImmutableResults = !0, r.makeVar = Ng, r.txCount = 0, r.config = Tg(n), r.addTypename = !!r.config.addTypename, r.policies = new Lg({
        cache: r,
        dataIdFromObject: r.config.dataIdFromObject,
        possibleTypes: r.config.possibleTypes,
        typePolicies: r.config.typePolicies
      }), r.init(), r;
    }
    return t.prototype.init = function() {
      var n = this.data = new Sn.Root({
        policies: this.policies,
        resultCaching: this.config.resultCaching
      });
      this.optimisticData = n.stump, this.resetResultCache();
    }, t.prototype.resetResultCache = function(n) {
      var r = this, i = this.storeReader, a = this.config.fragments;
      this.storeWriter = new jg(this, this.storeReader = new Cg({
        cache: this,
        addTypename: this.addTypename,
        resultCacheMaxSize: this.config.resultCacheMaxSize,
        canonizeResults: Zc(this.config),
        canon: n ? void 0 : i && i.canon,
        fragments: a
      }), a), this.maybeBroadcastWatch = vn(function(o, s) {
        return r.broadcastWatch(o, s);
      }, {
        max: this.config.resultCacheMaxSize || Ne["inMemoryCache.maybeBroadcastWatch"] || 5e3,
        makeCacheKey: function(o) {
          var s = o.optimistic ? r.optimisticData : r.data;
          if (ln(s)) {
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
    }, t.prototype.restore = function(n) {
      return this.init(), n && this.data.replace(n), this;
    }, t.prototype.extract = function(n) {
      return n === void 0 && (n = !1), (n ? this.optimisticData : this.data).extract();
    }, t.prototype.read = function(n) {
      var r = n.returnPartialData, i = r === void 0 ? !1 : r;
      try {
        return this.storeReader.diffQueryAgainstStore(_(_({}, n), { store: n.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: i })).result || null;
      } catch (a) {
        if (a instanceof Jc)
          return null;
        throw a;
      }
    }, t.prototype.write = function(n) {
      try {
        return ++this.txCount, this.storeWriter.writeToStore(this.data, n);
      } finally {
        !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
      }
    }, t.prototype.modify = function(n) {
      if (le.call(n, "id") && !n.id)
        return !1;
      var r = n.optimistic ? this.optimisticData : this.data;
      try {
        return ++this.txCount, r.modify(n.id || "ROOT_QUERY", n.fields);
      } finally {
        !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
      }
    }, t.prototype.diff = function(n) {
      return this.storeReader.diffQueryAgainstStore(_(_({}, n), { store: n.optimistic ? this.optimisticData : this.data, rootId: n.id || "ROOT_QUERY", config: this.config }));
    }, t.prototype.watch = function(n) {
      var r = this;
      return this.watches.size || Pg(this), this.watches.add(n), n.immediate && this.maybeBroadcastWatch(n), function() {
        r.watches.delete(n) && !r.watches.size && fs(r), r.maybeBroadcastWatch.forget(n);
      };
    }, t.prototype.gc = function(n) {
      var r;
      Ye.reset(), We.reset(), this.addTypenameTransform.resetCache(), (r = this.config.fragments) === null || r === void 0 || r.resetCaches();
      var i = this.optimisticData.gc();
      return n && !this.txCount && (n.resetResultCache ? this.resetResultCache(n.resetResultIdentities) : n.resetResultIdentities && this.storeReader.resetCanon()), i;
    }, t.prototype.retain = function(n, r) {
      return (r ? this.optimisticData : this.data).retain(n);
    }, t.prototype.release = function(n, r) {
      return (r ? this.optimisticData : this.data).release(n);
    }, t.prototype.identify = function(n) {
      if (Y(n))
        return n.__ref;
      try {
        return this.policies.identify(n)[0];
      } catch (r) {
        globalThis.__DEV__ !== !1 && $.warn(r);
      }
    }, t.prototype.evict = function(n) {
      if (!n.id) {
        if (le.call(n, "id"))
          return !1;
        n = _(_({}, n), { id: "ROOT_QUERY" });
      }
      try {
        return ++this.txCount, this.optimisticData.evict(n, this.data);
      } finally {
        !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
      }
    }, t.prototype.reset = function(n) {
      var r = this;
      return this.init(), Ye.reset(), n && n.discardWatches ? (this.watches.forEach(function(i) {
        return r.maybeBroadcastWatch.forget(i);
      }), this.watches.clear(), fs(this)) : this.broadcastWatches(), Promise.resolve();
    }, t.prototype.removeOptimistic = function(n) {
      var r = this.optimisticData.removeLayer(n);
      r !== this.optimisticData && (this.optimisticData = r, this.broadcastWatches());
    }, t.prototype.batch = function(n) {
      var r = this, i = n.update, a = n.optimistic, o = a === void 0 ? !0 : a, s = n.removeOptimistic, u = n.onWatchUpdated, c, l = function(f) {
        var p = r, y = p.data, m = p.optimisticData;
        ++r.txCount, f && (r.data = r.optimisticData = f);
        try {
          return c = i(r);
        } finally {
          --r.txCount, r.data = y, r.optimisticData = m;
        }
      }, d = /* @__PURE__ */ new Set();
      return u && !this.txCount && this.broadcastWatches(_(_({}, n), { onWatchUpdated: function(f) {
        return d.add(f), !1;
      } })), typeof o == "string" ? this.optimisticData = this.optimisticData.addLayer(o, l) : o === !1 ? l(this.data) : l(), typeof s == "string" && (this.optimisticData = this.optimisticData.removeLayer(s)), u && d.size ? (this.broadcastWatches(_(_({}, n), { onWatchUpdated: function(f, p) {
        var y = u.call(this, f, p);
        return y !== !1 && d.delete(f), y;
      } })), d.size && d.forEach(function(f) {
        return r.maybeBroadcastWatch.dirty(f);
      })) : this.broadcastWatches(n), c;
    }, t.prototype.performTransaction = function(n, r) {
      return this.batch({
        update: n,
        optimistic: r || r !== null
      });
    }, t.prototype.transformDocument = function(n) {
      return this.addTypenameToDocument(this.addFragmentsToDocument(n));
    }, t.prototype.fragmentMatches = function(n, r) {
      return this.policies.fragmentMatches(n, r);
    }, t.prototype.lookupFragment = function(n) {
      var r;
      return ((r = this.config.fragments) === null || r === void 0 ? void 0 : r.lookup(n)) || null;
    }, t.prototype.broadcastWatches = function(n) {
      var r = this;
      this.txCount || this.watches.forEach(function(i) {
        return r.maybeBroadcastWatch(i, n);
      });
    }, t.prototype.addFragmentsToDocument = function(n) {
      var r = this.config.fragments;
      return r ? r.transform(n) : n;
    }, t.prototype.addTypenameToDocument = function(n) {
      return this.addTypename ? this.addTypenameTransform.transformDocument(n) : n;
    }, t.prototype.broadcastWatch = function(n, r) {
      var i = n.lastDiff, a = this.diff(n);
      r && (n.optimistic && typeof r.optimistic == "string" && (a.fromOptimisticTransaction = !0), r.onWatchUpdated && r.onWatchUpdated.call(this, n, a, i) === !1) || (!i || !ne(i.result, a.result)) && n.callback(n.lastDiff = a, i);
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
var Es = Object.assign, Ug = Object.hasOwnProperty, Vn = (
  /** @class */
  (function(e) {
    Ee(t, e);
    function t(n) {
      var r = n.queryManager, i = n.queryInfo, a = n.options, o = this, s = t.inactiveOnCreation.getValue();
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
        return s && (r.queries.set(o.queryId, i), s = !1), o.queryManager.getOrCreateQuery(o.queryId);
      }, o.queryInfo = i, o.queryManager = r, o.waitForOwnResult = Hr(a.fetchPolicy), o.isTornDown = !1, o.subscribeToMore = o.subscribeToMore.bind(o), o.maskResult = o.maskResult.bind(o);
      var u = r.defaultOptions.watchQuery, c = u === void 0 ? {} : u, l = c.fetchPolicy, d = l === void 0 ? "cache-first" : l, f = a.fetchPolicy, p = f === void 0 ? d : f, y = a.initialFetchPolicy, m = y === void 0 ? p === "standby" ? d : p : y;
      o.options = _(_({}, a), {
        // Remember the initial options.fetchPolicy so we can revert back to this
        // policy when variables change. This information can also be specified
        // (or overridden) by providing options.initialFetchPolicy explicitly.
        initialFetchPolicy: m,
        // This ensures this.options.fetchPolicy always has a string value, in
        // case options.fetchPolicy was not provided.
        fetchPolicy: p
      }), o.queryId = i.queryId || r.generateQueryId();
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
      var n = this;
      return new Promise(function(r, i) {
        var a = {
          next: function(s) {
            r(s), n.observers.delete(a), n.observers.size || n.queryManager.removeQuery(n.queryId), setTimeout(function() {
              o.unsubscribe();
            }, 0);
          },
          error: i
        }, o = n.subscribe(a);
      });
    }, t.prototype.resetDiff = function() {
      this.queryInfo.resetDiff();
    }, t.prototype.getCurrentFullResult = function(n) {
      n === void 0 && (n = !0);
      var r = this.getLastResult(!0), i = this.queryInfo.networkStatus || r && r.networkStatus || W.ready, a = _(_({}, r), { loading: Tt(i), networkStatus: i }), o = this.options.fetchPolicy, s = o === void 0 ? "cache-first" : o;
      if (
        // These fetch policies should never deliver data from the cache, unless
        // redelivering a previously delivered result.
        !(Hr(s) || // If this.options.query has @client(always: true) fields, we cannot
        // trust diff.result, since it was read from the cache without running
        // local resolvers (and it's too late to run resolvers now, since we must
        // return a result synchronously).
        this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)
      ) if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var u = this.queryInfo.getDiff();
        (u.complete || this.options.returnPartialData) && (a.data = u.result), ne(a.data, {}) && (a.data = void 0), u.complete ? (delete a.partial, u.complete && a.networkStatus === W.loading && (s === "cache-first" || s === "cache-only") && (a.networkStatus = W.ready, a.loading = !1)) : a.partial = !0, a.networkStatus === W.ready && (a.error || a.errors) && (a.networkStatus = W.error), globalThis.__DEV__ !== !1 && !u.complete && !this.options.partialRefetch && !a.loading && !a.data && !a.error && ul(u.missing);
      }
      return n && this.updateLastResult(a), a;
    }, t.prototype.getCurrentResult = function(n) {
      return n === void 0 && (n = !0), this.maskResult(this.getCurrentFullResult(n));
    }, t.prototype.isDifferentFromLastResult = function(n, r) {
      if (!this.last)
        return !0;
      var i = this.queryManager.getDocumentInfo(this.query), a = this.queryManager.dataMasking, o = a ? i.nonReactiveQuery : this.query, s = a || i.hasNonreactiveDirective ? !Bc(o, this.last.result, n, this.variables) : !ne(this.last.result, n);
      return s || r && !ne(this.last.variables, r);
    }, t.prototype.getLast = function(n, r) {
      var i = this.last;
      if (i && i[n] && (!r || ne(i.variables, this.variables)))
        return i[n];
    }, t.prototype.getLastResult = function(n) {
      return this.getLast("result", n);
    }, t.prototype.getLastError = function(n) {
      return this.getLast("error", n);
    }, t.prototype.resetLastResults = function() {
      delete this.last, this.isTornDown = !1;
    }, t.prototype.resetQueryStoreErrors = function() {
      this.queryManager.resetErrors(this.queryId);
    }, t.prototype.refetch = function(n) {
      var r, i = {
        // Always disable polling for refetches.
        pollInterval: 0
      }, a = this.options.fetchPolicy;
      if (a === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && n && Ug.call(n, "variables")) {
        var o = lc(this.query), s = o.variableDefinitions;
        (!s || !s.some(function(u) {
          return u.variable.name.value === "variables";
        })) && globalThis.__DEV__ !== !1 && $.warn(
          21,
          n,
          ((r = o.name) === null || r === void 0 ? void 0 : r.value) || o
        );
      }
      return n && !ne(this.options.variables, n) && (i.variables = this.options.variables = _(_({}, this.options.variables), n)), this.queryInfo.resetLastWrite(), this.reobserve(i, W.refetch);
    }, t.prototype.fetchMore = function(n) {
      var r = this, i = _(_({}, n.query ? n : _(_(_(_({}, this.options), { query: this.options.query }), n), { variables: _(_({}, this.options.variables), n.variables) })), {
        // The fetchMore request goes immediately to the network and does
        // not automatically write its result to the cache (hence no-cache
        // instead of network-only), because we allow the caller of
        // fetchMore to provide an updateQuery callback that determines how
        // the data gets written to the cache.
        fetchPolicy: "no-cache"
      });
      i.query = this.transformDocument(i.query);
      var a = this.queryManager.generateQueryId();
      this.lastQuery = n.query ? this.transformDocument(this.options.query) : i.query;
      var o = this.queryInfo, s = o.networkStatus;
      o.networkStatus = W.fetchMore, i.notifyOnNetworkStatusChange && this.observe();
      var u = /* @__PURE__ */ new Set(), c = n?.updateQuery, l = this.options.fetchPolicy !== "no-cache";
      return l || $(c, 22), this.queryManager.fetchQuery(a, i, W.fetchMore).then(function(d) {
        if (r.queryManager.removeQuery(a), o.networkStatus === W.fetchMore && (o.networkStatus = s), l)
          r.queryManager.cache.batch({
            update: function(y) {
              var m = n.updateQuery;
              m ? y.updateQuery({
                query: r.query,
                variables: r.variables,
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
          var f = r.getLast("result"), p = c(f.data, {
            fetchMoreResult: d.data,
            variables: i.variables
          });
          r.reportResult(_(_({}, f), { networkStatus: s, loading: Tt(s), data: p }), r.variables);
        }
        return r.maskResult(d);
      }).finally(function() {
        l && !u.has(r.query) && r.reobserveCacheFirst();
      });
    }, t.prototype.subscribeToMore = function(n) {
      var r = this, i = this.queryManager.startGraphQLSubscription({
        query: n.document,
        variables: n.variables,
        context: n.context
      }).subscribe({
        next: function(a) {
          var o = n.updateQuery;
          o && r.updateQuery(function(s, u) {
            return o(s, _({ subscriptionData: a }, u));
          });
        },
        error: function(a) {
          if (n.onError) {
            n.onError(a);
            return;
          }
          globalThis.__DEV__ !== !1 && $.error(23, a);
        }
      });
      return this.subscriptions.add(i), function() {
        r.subscriptions.delete(i) && i.unsubscribe();
      };
    }, t.prototype.setOptions = function(n) {
      return this.reobserve(n);
    }, t.prototype.silentSetOptions = function(n) {
      var r = Rt(this.options, n || {});
      Es(this.options, r);
    }, t.prototype.setVariables = function(n) {
      return ne(this.variables, n) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = n, this.observers.size ? this.reobserve({
        // Reset options.fetchPolicy to its original value.
        fetchPolicy: this.options.initialFetchPolicy,
        variables: n
      }, W.setVariables) : Promise.resolve());
    }, t.prototype.updateQuery = function(n) {
      var r = this.queryManager, i = r.cache.diff({
        query: this.options.query,
        variables: this.variables,
        returnPartialData: !0,
        optimistic: !1
      }), a = i.result, o = i.complete, s = n(a, {
        variables: this.variables,
        complete: !!o,
        previousData: a
      });
      s && (r.cache.writeQuery({
        query: this.options.query,
        data: s,
        variables: this.variables
      }), r.broadcastQueries());
    }, t.prototype.startPolling = function(n) {
      this.options.pollInterval = n, this.updatePolling();
    }, t.prototype.stopPolling = function() {
      this.options.pollInterval = 0, this.updatePolling();
    }, t.prototype.applyNextFetchPolicy = function(n, r) {
      if (r.nextFetchPolicy) {
        var i = r.fetchPolicy, a = i === void 0 ? "cache-first" : i, o = r.initialFetchPolicy, s = o === void 0 ? a : o;
        a === "standby" || (typeof r.nextFetchPolicy == "function" ? r.fetchPolicy = r.nextFetchPolicy(a, {
          reason: n,
          options: r,
          observable: this,
          initialFetchPolicy: s
        }) : n === "variables-changed" ? r.fetchPolicy = s : r.fetchPolicy = r.nextFetchPolicy);
      }
      return r.fetchPolicy;
    }, t.prototype.fetch = function(n, r, i) {
      var a = this._getOrCreateQuery();
      return a.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(a, n, r, i);
    }, t.prototype.updatePolling = function() {
      var n = this;
      if (!this.queryManager.ssrMode) {
        var r = this, i = r.pollingInfo, a = r.options.pollInterval;
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
            n.pollingInfo && (!Tt(n.queryInfo.networkStatus) && !(!((l = (c = n.options).skipPollAttempt) === null || l === void 0) && l.call(c)) ? n.reobserve({
              // Most fetchPolicy options don't make sense to use in a polling context, as
              // users wouldn't want to be polling the cache directly. However, network-only and
              // no-cache are both useful for when the user wants to control whether or not the
              // polled results are written to the cache.
              fetchPolicy: n.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
            }, W.poll).then(u, u) : u());
          }, u = function() {
            var c = n.pollingInfo;
            c && (clearTimeout(c.timeout), c.timeout = setTimeout(s, c.interval));
          };
          u();
        }
      }
    }, t.prototype.updateLastResult = function(n, r) {
      r === void 0 && (r = this.variables);
      var i = this.getLastError();
      return i && this.last && !ne(r, this.last.variables) && (i = void 0), this.last = _({ result: this.queryManager.assumeImmutableResults ? n : Fc(n), variables: r }, i ? { error: i } : null);
    }, t.prototype.reobserveAsConcast = function(n, r) {
      var i = this;
      this.isTornDown = !1;
      var a = (
        // Refetching uses a disposable Concast to allow refetches using different
        // options/variables, without permanently altering the options of the
        // original ObservableQuery.
        r === W.refetch || // The fetchMore method does not actually call the reobserve method, but,
        // if it did, it would definitely use a disposable Concast.
        r === W.fetchMore || // Polling uses a disposable Concast so the polling options (which force
        // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
        r === W.poll
      ), o = this.options.variables, s = this.options.fetchPolicy, u = Rt(this.options, n || {}), c = a ? (
        // Disposable Concast fetches receive a shallow copy of this.options
        // (merged with newOptions), leaving this.options unmodified.
        u
      ) : Es(this.options, u), l = this.transformDocument(c.query);
      this.lastQuery = l, a || (this.updatePolling(), n && n.variables && !ne(n.variables, o) && // Don't mess with the fetchPolicy if it's currently "standby".
      c.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
      // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
      (c.fetchPolicy === s || // A `nextFetchPolicy` function has even higher priority, though,
      // so in that case `applyNextFetchPolicy` must be called.
      typeof c.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", c), r === void 0 && (r = W.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = Hr(c.fetchPolicy));
      var d = function() {
        i.concast === y && (i.waitForOwnResult = !1);
      }, f = c.variables && _({}, c.variables), p = this.fetch(c, r, l), y = p.concast, m = p.fromLink, v = {
        next: function(g) {
          ne(i.variables, f) && (d(), i.reportResult(g, f));
        },
        error: function(g) {
          ne(i.variables, f) && (Nc(g) || (g = new Qe({ networkError: g })), d(), i.reportError(g, f));
        }
      };
      return !a && (m || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = y, this.observer = v), y.addObserver(v), y;
    }, t.prototype.reobserve = function(n, r) {
      return Rm(this.reobserveAsConcast(n, r).promise.then(this.maskResult));
    }, t.prototype.resubscribeAfterError = function() {
      for (var n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      var i = this.last;
      this.resetLastResults();
      var a = this.subscribe.apply(this, n);
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
    }, t.prototype.reportResult = function(n, r) {
      var i = this.getLastError(), a = this.isDifferentFromLastResult(n, r);
      (i || !n.partial || this.options.returnPartialData) && this.updateLastResult(n, r), (i || a) && cn(this.observers, "next", this.maskResult(n));
    }, t.prototype.reportError = function(n, r) {
      var i = _(_({}, this.getLastResult()), { error: n, errors: n.graphQLErrors, networkStatus: W.error, loading: !1 });
      this.updateLastResult(i, r), cn(this.observers, "error", this.last.error = n);
    }, t.prototype.hasObservers = function() {
      return this.observers.size > 0;
    }, t.prototype.tearDownQuery = function() {
      this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(n) {
        return n.unsubscribe();
      }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
    }, t.prototype.transformDocument = function(n) {
      return this.queryManager.transform(n);
    }, t.prototype.maskResult = function(n) {
      return n && "data" in n ? _(_({}, n), { data: this.queryManager.maskOperation({
        document: this.query,
        data: n.data,
        fetchPolicy: this.options.fetchPolicy,
        id: this.queryId
      }) }) : n;
    }, t.prototype.resetNotifications = function() {
      this.cancelNotifyTimeout(), this.dirty = !1;
    }, t.prototype.cancelNotifyTimeout = function() {
      this.notifyTimeout && (clearTimeout(this.notifyTimeout), this.notifyTimeout = void 0);
    }, t.prototype.scheduleNotify = function() {
      var n = this;
      this.dirty || (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
        return n.notify();
      }, 0)));
    }, t.prototype.notify = function() {
      if (this.cancelNotifyTimeout(), this.dirty && (this.options.fetchPolicy == "cache-only" || this.options.fetchPolicy == "cache-and-network" || !Tt(this.queryInfo.networkStatus))) {
        var n = this.queryInfo.getDiff();
        n.fromOptimisticTransaction ? this.observe() : this.reobserveCacheFirst();
      }
      this.dirty = !1;
    }, t.prototype.reobserveCacheFirst = function() {
      var n = this.options, r = n.fetchPolicy, i = n.nextFetchPolicy;
      return r === "cache-and-network" || r === "network-only" ? this.reobserve({
        fetchPolicy: "cache-first",
        // Use a temporary nextFetchPolicy function that replaces itself with the
        // previous nextFetchPolicy value and returns the original fetchPolicy.
        nextFetchPolicy: function(a, o) {
          return this.nextFetchPolicy = i, typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(a, o) : r;
        }
      }) : this.reobserve();
    }, t.inactiveOnCreation = new wn(), t;
  })(H)
);
Cc(Vn);
function Vg(e) {
  globalThis.__DEV__ !== !1 && $.error(25, e.message, e.stack);
}
function ul(e) {
  globalThis.__DEV__ !== !1 && e && globalThis.__DEV__ !== !1 && $.debug(26, e);
}
function Hr(e) {
  return e === "network-only" || e === "no-cache" || e === "standby";
}
var It = new (ht ? WeakMap : Map)();
function Yr(e, t) {
  var n = e[t];
  typeof n == "function" && (e[t] = function() {
    return It.set(
      e,
      // The %1e15 allows the count to wrap around to 0 safely every
      // quadrillion evictions, so there's no risk of overflow. To be
      // clear, this is more of a pedantic principle than something
      // that matters in any conceivable practical scenario.
      (It.get(e) + 1) % 1e15
    ), n.apply(this, arguments);
  });
}
var Jr = (
  /** @class */
  (function() {
    function e(t, n) {
      n === void 0 && (n = t.generateQueryId()), this.queryId = n, this.document = null, this.lastRequestId = 1, this.stopped = !1, this.observableQuery = null;
      var r = this.cache = t.cache;
      It.has(r) || (It.set(r, 0), Yr(r, "evict"), Yr(r, "modify"), Yr(r, "reset"));
    }
    return e.prototype.init = function(t) {
      var n = t.networkStatus || W.loading;
      return this.variables && this.networkStatus !== W.loading && !ne(this.variables, t.variables) && (n = W.setVariables), ne(t.variables, this.variables) || (this.lastDiff = void 0, this.cancel()), Object.assign(this, {
        document: t.document,
        variables: t.variables,
        networkError: null,
        graphQLErrors: this.graphQLErrors || [],
        networkStatus: n
      }), t.observableQuery && this.setObservableQuery(t.observableQuery), t.lastRequestId && (this.lastRequestId = t.lastRequestId), this;
    }, e.prototype.resetDiff = function() {
      this.lastDiff = void 0;
    }, e.prototype.getDiff = function() {
      var t = this.getDiffOptions();
      if (this.lastDiff && ne(t, this.lastDiff.options))
        return this.lastDiff.diff;
      this.updateWatch(this.variables);
      var n = this.observableQuery;
      if (n && n.options.fetchPolicy === "no-cache")
        return { complete: !1 };
      var r = this.cache.diff(t);
      return this.updateLastDiff(r, t), r;
    }, e.prototype.updateLastDiff = function(t, n) {
      this.lastDiff = t ? {
        diff: t,
        options: n || this.getDiffOptions()
      } : void 0;
    }, e.prototype.getDiffOptions = function(t) {
      var n;
      return t === void 0 && (t = this.variables), {
        query: this.document,
        variables: t,
        returnPartialData: !0,
        optimistic: !0,
        canonizeResults: (n = this.observableQuery) === null || n === void 0 ? void 0 : n.options.canonizeResults
      };
    }, e.prototype.setDiff = function(t) {
      var n, r, i = this.lastDiff && this.lastDiff.diff;
      t && !t.complete && (!((n = this.observableQuery) === null || n === void 0) && n.getLastError()) || (this.updateLastDiff(t), ne(i && i.result, t && t.result) || (r = this.observableQuery) === null || r === void 0 || r.scheduleNotify());
    }, e.prototype.setObservableQuery = function(t) {
      t !== this.observableQuery && (this.observableQuery = t, t && (t.queryInfo = this));
    }, e.prototype.stop = function() {
      var t;
      if (!this.stopped) {
        this.stopped = !0, (t = this.observableQuery) === null || t === void 0 || t.resetNotifications(), this.cancel();
        var n = this.observableQuery;
        n && n.stopPolling();
      }
    }, e.prototype.cancel = function() {
      var t;
      (t = this.cancelWatch) === null || t === void 0 || t.call(this), this.cancelWatch = void 0;
    }, e.prototype.updateWatch = function(t) {
      var n = this;
      t === void 0 && (t = this.variables);
      var r = this.observableQuery;
      if (!(r && r.options.fetchPolicy === "no-cache")) {
        var i = _(_({}, this.getDiffOptions(t)), { watcher: this, callback: function(a) {
          return n.setDiff(a);
        } });
        (!this.lastWatch || !ne(i, this.lastWatch)) && (this.cancel(), this.cancelWatch = this.cache.watch(this.lastWatch = i));
      }
    }, e.prototype.resetLastWrite = function() {
      this.lastWrite = void 0;
    }, e.prototype.shouldWrite = function(t, n) {
      var r = this.lastWrite;
      return !(r && // If cache.evict has been called since the last time we wrote this
      // data into the cache, there's a chance writing this result into
      // the cache will repair what was evicted.
      r.dmCount === It.get(this.cache) && ne(n, r.variables) && ne(t.data, r.result.data));
    }, e.prototype.markResult = function(t, n, r, i) {
      var a = this, o, s = new tt(), u = Ce(t.errors) ? t.errors.slice(0) : [];
      if ((o = this.observableQuery) === null || o === void 0 || o.resetNotifications(), "incremental" in t && Ce(t.incremental)) {
        var c = Ac(this.getDiff().result, t);
        t.data = c;
      } else if ("hasNext" in t && t.hasNext) {
        var l = this.getDiff();
        t.data = s.merge(l.result, t.data);
      }
      this.graphQLErrors = u, r.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: t.data, complete: !0 }, this.getDiffOptions(r.variables)) : i !== 0 && (Qi(t, r.errorPolicy) ? this.cache.performTransaction(function(d) {
        if (a.shouldWrite(t, r.variables))
          d.writeQuery({
            query: n,
            data: t.data,
            variables: r.variables,
            overwrite: i === 1
          }), a.lastWrite = {
            result: t,
            variables: r.variables,
            dmCount: It.get(a.cache)
          };
        else if (a.lastDiff && a.lastDiff.diff.complete) {
          t.data = a.lastDiff.diff.result;
          return;
        }
        var f = a.getDiffOptions(r.variables), p = d.diff(f);
        !a.stopped && ne(a.variables, r.variables) && a.updateWatch(r.variables), a.updateLastDiff(p, f), p.complete && (t.data = p.result);
      }) : this.lastWrite = void 0);
    }, e.prototype.markReady = function() {
      return this.networkError = null, this.networkStatus = W.ready;
    }, e.prototype.markError = function(t) {
      var n;
      return this.networkStatus = W.error, this.lastWrite = void 0, (n = this.observableQuery) === null || n === void 0 || n.resetNotifications(), t.graphQLErrors && (this.graphQLErrors = t.graphQLErrors), t.networkError && (this.networkError = t.networkError), t;
    }, e;
  })()
);
function Qi(e, t) {
  t === void 0 && (t = "none");
  var n = t === "ignore" || t === "all", r = !jn(e);
  return !r && n && e.data && (r = !0), r;
}
var Bg = Object.prototype.hasOwnProperty, Ds = /* @__PURE__ */ Object.create(null), Gg = (
  /** @class */
  (function() {
    function e(t) {
      var n = this;
      this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new ic(
        Ne["queryManager.getDocumentInfo"] || 2e3
        /* defaultCacheSizes["queryManager.getDocumentInfo"] */
      ), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new Le(!1), this.noCacheWarningsByQueryId = /* @__PURE__ */ new Set();
      var r = new Dc(
        function(a) {
          return n.cache.transformDocument(a);
        },
        // Allow the apollo cache to manage its own transform caches
        { cache: !1 }
      );
      this.cache = t.cache, this.link = t.link, this.defaultOptions = t.defaultOptions, this.queryDeduplication = t.queryDeduplication, this.clientAwareness = t.clientAwareness, this.localState = t.localState, this.ssrMode = t.ssrMode, this.assumeImmutableResults = t.assumeImmutableResults, this.dataMasking = t.dataMasking;
      var i = t.documentTransform;
      this.documentTransform = i ? r.concat(i).concat(r) : r, this.defaultContext = t.defaultContext || /* @__PURE__ */ Object.create(null), (this.onBroadcast = t.onBroadcast) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
    }
    return e.prototype.stop = function() {
      var t = this;
      this.queries.forEach(function(n, r) {
        t.stopQueryNoBroadcast(r);
      }), this.cancelPendingFetches(ve(27));
    }, e.prototype.cancelPendingFetches = function(t) {
      this.fetchCancelFns.forEach(function(n) {
        return n(t);
      }), this.fetchCancelFns.clear();
    }, e.prototype.mutate = function(t) {
      return Be(this, arguments, void 0, function(n) {
        var r, i, a, o, s, u, c, l = n.mutation, d = n.variables, f = n.optimisticResponse, p = n.updateQueries, y = n.refetchQueries, m = y === void 0 ? [] : y, v = n.awaitRefetchQueries, g = v === void 0 ? !1 : v, b = n.update, E = n.onQueryUpdated, D = n.fetchPolicy, I = D === void 0 ? ((u = this.defaultOptions.mutate) === null || u === void 0 ? void 0 : u.fetchPolicy) || "network-only" : D, O = n.errorPolicy, x = O === void 0 ? ((c = this.defaultOptions.mutate) === null || c === void 0 ? void 0 : c.errorPolicy) || "none" : O, P = n.keepRootFields, L = n.context;
        return Ge(this, function(q) {
          switch (q.label) {
            case 0:
              return $(l, 28), $(I === "network-only" || I === "no-cache", 29), r = this.generateMutationId(), l = this.cache.transformForLink(this.transform(l)), i = this.getDocumentInfo(l).hasClientExports, d = this.getVariables(l, d), i ? [4, this.localState.addExportedVariables(l, d, L)] : [3, 2];
            case 1:
              d = q.sent(), q.label = 2;
            case 2:
              return a = this.mutationStore && (this.mutationStore[r] = {
                mutation: l,
                variables: d,
                loading: !0,
                error: null
              }), o = f && this.markMutationOptimistic(f, {
                mutationId: r,
                document: l,
                variables: d,
                fetchPolicy: I,
                errorPolicy: x,
                context: L,
                updateQueries: p,
                update: b,
                keepRootFields: P
              }), this.broadcastQueries(), s = this, [2, new Promise(function(G, ce) {
                return Vr(s.getObservableFromLink(l, _(_({}, L), { optimisticResponse: o ? f : void 0 }), d, {}, !1), function(re) {
                  if (jn(re) && x === "none")
                    throw new Qe({
                      graphQLErrors: ji(re)
                    });
                  a && (a.loading = !1, a.error = null);
                  var he = _({}, re);
                  return typeof m == "function" && (m = m(he)), x === "ignore" && jn(he) && delete he.errors, s.markMutationResult({
                    mutationId: r,
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
                    removeOptimistic: o ? r : void 0,
                    onQueryUpdated: E,
                    keepRootFields: P
                  });
                }).subscribe({
                  next: function(re) {
                    s.broadcastQueries(), (!("hasNext" in re) || re.hasNext === !1) && G(_(_({}, re), { data: s.maskOperation({
                      document: l,
                      data: re.data,
                      fetchPolicy: I,
                      id: r
                    }) }));
                  },
                  error: function(re) {
                    a && (a.loading = !1, a.error = re), o && s.cache.removeOptimistic(r), s.broadcastQueries(), ce(re instanceof Qe ? re : new Qe({
                      networkError: re
                    }));
                  }
                });
              })];
          }
        });
      });
    }, e.prototype.markMutationResult = function(t, n) {
      var r = this;
      n === void 0 && (n = this.cache);
      var i = t.result, a = [], o = t.fetchPolicy === "no-cache";
      if (!o && Qi(i, t.errorPolicy)) {
        if (xt(i) || a.push({
          result: i.data,
          dataId: "ROOT_MUTATION",
          query: t.document,
          variables: t.variables
        }), xt(i) && Ce(i.incremental)) {
          var s = n.diff({
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
            var m = c[y], v = r.queries.get(f), g = v.document, b = v.variables, E = n.diff({
              query: g,
              variables: b,
              returnPartialData: !0,
              optimistic: !1
            }), D = E.result, I = E.complete;
            if (I && D) {
              var O = m(D, {
                mutationResult: i,
                queryName: g && rn(g) || void 0,
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
                  query: r.getDocumentInfo(t.document).asQuery,
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
    }, e.prototype.markMutationOptimistic = function(t, n) {
      var r = this, i = typeof t == "function" ? t(n.variables, { IGNORE: Ds }) : t;
      return i === Ds ? !1 : (this.cache.recordOptimisticTransaction(function(a) {
        try {
          r.markMutationResult(_(_({}, n), { result: { data: i } }), a);
        } catch (o) {
          globalThis.__DEV__ !== !1 && $.error(o);
        }
      }, n.mutationId), !0);
    }, e.prototype.fetchQuery = function(t, n, r) {
      return this.fetchConcastWithInfo(this.getOrCreateQuery(t), n, r).concast.promise;
    }, e.prototype.getQueryStore = function() {
      var t = /* @__PURE__ */ Object.create(null);
      return this.queries.forEach(function(n, r) {
        t[r] = {
          variables: n.variables,
          networkStatus: n.networkStatus,
          networkError: n.networkError,
          graphQLErrors: n.graphQLErrors
        };
      }), t;
    }, e.prototype.resetErrors = function(t) {
      var n = this.queries.get(t);
      n && (n.networkError = void 0, n.graphQLErrors = []);
    }, e.prototype.transform = function(t) {
      return this.documentTransform.transformDocument(t);
    }, e.prototype.getDocumentInfo = function(t) {
      var n = this.transformCache;
      if (!n.has(t)) {
        var r = {
          // TODO These three calls (hasClientExports, shouldForceResolvers, and
          // usesNonreactiveDirective) are performing independent full traversals
          // of the transformed document. We should consider merging these
          // traversals into a single pass in the future, though the work is
          // cached after the first time.
          hasClientExports: Dh(t),
          hasForcedResolvers: this.localState.shouldForceResolvers(t),
          hasNonreactiveDirective: gn(["nonreactive"], t),
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
        n.set(t, r);
      }
      return n.get(t);
    }, e.prototype.getVariables = function(t, n) {
      return _(_({}, this.getDocumentInfo(t).defaultVars), n);
    }, e.prototype.watchQuery = function(t) {
      var n = this.transform(t.query);
      t = _(_({}, t), { variables: this.getVariables(n, t.variables) }), typeof t.notifyOnNetworkStatusChange > "u" && (t.notifyOnNetworkStatusChange = !1);
      var r = new Jr(this), i = new Vn({
        queryManager: this,
        queryInfo: r,
        options: t
      });
      return i.lastQuery = n, Vn.inactiveOnCreation.getValue() || this.queries.set(i.queryId, r), r.init({
        document: n,
        observableQuery: i,
        variables: i.variables
      }), i;
    }, e.prototype.query = function(t, n) {
      var r = this;
      n === void 0 && (n = this.generateQueryId()), $(t.query, 30), $(t.query.kind === "Document", 31), $(!t.returnPartialData, 32), $(!t.pollInterval, 33);
      var i = this.transform(t.query);
      return this.fetchQuery(n, _(_({}, t), { query: i })).then(function(a) {
        return a && _(_({}, a), { data: r.maskOperation({
          document: i,
          data: a.data,
          fetchPolicy: t.fetchPolicy,
          id: n
        }) });
      }).finally(function() {
        return r.stopQuery(n);
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
      var n = this.queries.get(t);
      n && n.stop();
    }, e.prototype.clearStore = function(t) {
      return t === void 0 && (t = {
        discardWatches: !0
      }), this.cancelPendingFetches(ve(34)), this.queries.forEach(function(n) {
        n.observableQuery ? n.networkStatus = W.loading : n.stop();
      }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(t);
    }, e.prototype.getObservableQueries = function(t) {
      var n = this;
      t === void 0 && (t = "active");
      var r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
      return Array.isArray(t) && t.forEach(function(s) {
        if (typeof s == "string")
          i.set(s, s), a.set(s, !1);
        else if (Kh(s)) {
          var u = We(n.transform(s));
          i.set(u, rn(s)), a.set(u, !1);
        } else ae(s) && s.query && o.add(s);
      }), this.queries.forEach(function(s, u) {
        var c = s.observableQuery, l = s.document;
        if (c) {
          if (t === "all") {
            r.set(u, c);
            return;
          }
          var d = c.queryName, f = c.options.fetchPolicy;
          if (f === "standby" || t === "active" && !c.hasObservers())
            return;
          (t === "active" || d && a.has(d) || l && a.has(We(l))) && (r.set(u, c), d && a.set(d, !0), l && a.set(We(l), !0));
        }
      }), o.size && o.forEach(function(s) {
        var u = Oi("legacyOneTimeQuery"), c = n.getOrCreateQuery(u).init({
          document: s.query,
          variables: s.variables
        }), l = new Vn({
          queryManager: n,
          queryInfo: c,
          options: _(_({}, s), { fetchPolicy: "network-only" })
        });
        $(l.queryId === u), c.setObservableQuery(l), r.set(u, l);
      }), globalThis.__DEV__ !== !1 && a.size && a.forEach(function(s, u) {
        if (!s) {
          var c = i.get(u);
          c ? globalThis.__DEV__ !== !1 && $.warn(35, c) : globalThis.__DEV__ !== !1 && $.warn(36);
        }
      }), r;
    }, e.prototype.reFetchObservableQueries = function(t) {
      var n = this;
      t === void 0 && (t = !1);
      var r = [];
      return this.getObservableQueries(t ? "all" : "active").forEach(function(i, a) {
        var o = i.options.fetchPolicy;
        i.resetLastResults(), (t || o !== "standby" && o !== "cache-only") && r.push(i.refetch()), (n.queries.get(a) || i.queryInfo).setDiff(null);
      }), this.broadcastQueries(), Promise.all(r);
    }, e.prototype.startGraphQLSubscription = function(t) {
      var n = this, r = t.query, i = t.variables, a = t.fetchPolicy, o = t.errorPolicy, s = o === void 0 ? "none" : o, u = t.context, c = u === void 0 ? {} : u, l = t.extensions, d = l === void 0 ? {} : l;
      r = this.transform(r), i = this.getVariables(r, i);
      var f = function(y) {
        return n.getObservableFromLink(r, c, y, d).map(function(m) {
          a !== "no-cache" && (Qi(m, s) && n.cache.write({
            query: r,
            result: m.data,
            dataId: "ROOT_SUBSCRIPTION",
            variables: y
          }), n.broadcastQueries());
          var v = jn(m), g = Pc(m);
          if (v || g) {
            var b = {};
            if (v && (b.graphQLErrors = m.errors), g && (b.protocolErrors = m.extensions[pr]), s === "none" || g)
              throw new Qe(b);
          }
          return s === "ignore" && delete m.errors, m;
        });
      };
      if (this.getDocumentInfo(r).hasClientExports) {
        var p = this.localState.addExportedVariables(r, i, c).then(f);
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
      var n;
      this.fetchCancelFns.delete(t), this.queries.has(t) && ((n = this.queries.get(t)) === null || n === void 0 || n.stop(), this.queries.delete(t));
    }, e.prototype.broadcastQueries = function() {
      this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(t) {
        var n;
        return (n = t.observableQuery) === null || n === void 0 ? void 0 : n.notify();
      });
    }, e.prototype.getLocalState = function() {
      return this.localState;
    }, e.prototype.getObservableFromLink = function(t, n, r, i, a) {
      var o = this, s;
      a === void 0 && (a = (s = n?.queryDeduplication) !== null && s !== void 0 ? s : this.queryDeduplication);
      var u, c = this.getDocumentInfo(t), l = c.serverQuery, d = c.clientQuery;
      if (l) {
        var f = this, p = f.inFlightLinkObservables, y = f.link, m = {
          query: l,
          variables: r,
          operationName: rn(l) || void 0,
          context: this.prepareContext(_(_({}, n), { forceFetch: !a })),
          extensions: i
        };
        if (n = m.context, a) {
          var v = We(l), g = Ye(r), b = p.lookup(v, g);
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
        u = new St([H.of({ data: {} })]), n = this.prepareContext(n);
      return d && (u = Vr(u, function(D) {
        return o.localState.runResolvers({
          document: d,
          remoteResult: D,
          context: n,
          variables: r
        });
      })), u;
    }, e.prototype.getResultsFromLink = function(t, n, r) {
      var i = t.lastRequestId = this.generateRequestId(), a = this.cache.transformForLink(r.query);
      return Vr(this.getObservableFromLink(a, r.context, r.variables), function(o) {
        var s = ji(o), u = s.length > 0, c = r.errorPolicy;
        if (i >= t.lastRequestId) {
          if (u && c === "none")
            throw t.markError(new Qe({
              graphQLErrors: s
            }));
          t.markResult(o, a, r, n), t.markReady();
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
    }, e.prototype.fetchConcastWithInfo = function(t, n, r, i) {
      var a = this;
      r === void 0 && (r = W.loading), i === void 0 && (i = n.query);
      var o = this.getVariables(i, n.variables), s = this.defaultOptions.watchQuery, u = n.fetchPolicy, c = u === void 0 ? s && s.fetchPolicy || "cache-first" : u, l = n.errorPolicy, d = l === void 0 ? s && s.errorPolicy || "none" : l, f = n.returnPartialData, p = f === void 0 ? !1 : f, y = n.notifyOnNetworkStatusChange, m = y === void 0 ? !1 : y, v = n.context, g = v === void 0 ? {} : v, b = Object.assign({}, n, {
        query: i,
        variables: o,
        fetchPolicy: c,
        errorPolicy: d,
        returnPartialData: p,
        notifyOnNetworkStatusChange: m,
        context: g
      }), E = function(P) {
        b.variables = P;
        var L = a.fetchQueryByPolicy(t, b, r);
        return (
          // If we're in standby, postpone advancing options.fetchPolicy using
          // applyNextFetchPolicy.
          b.fetchPolicy !== "standby" && // The "standby" policy currently returns [] from fetchQueryByPolicy, so
          // this is another way to detect when nothing was done/fetched.
          L.sources.length > 0 && t.observableQuery && t.observableQuery.applyNextFetchPolicy("after-fetch", n), L
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
      var n = this, r = t.updateCache, i = t.include, a = t.optimistic, o = a === void 0 ? !1 : a, s = t.removeOptimistic, u = s === void 0 ? o ? Oi("refetchQueries") : void 0 : s, c = t.onQueryUpdated, l = /* @__PURE__ */ new Map();
      i && this.getObservableQueries(i).forEach(function(f, p) {
        l.set(p, {
          oq: f,
          lastDiff: (n.queries.get(p) || f.queryInfo).getDiff()
        });
      });
      var d = /* @__PURE__ */ new Map();
      return r && this.cache.batch({
        update: r,
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
          var m = f.watcher instanceof Jr && f.watcher.observableQuery;
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
        c && (v || (v = n.cache.diff(y.queryInfo.getDiffOptions())), g = c(y, v, m)), (!c || g === !0) && (g = y.refetch()), g !== !1 && d.set(y, g), p.indexOf("legacyOneTimeQuery") >= 0 && n.stopQueryNoBroadcast(p);
      }), u && this.cache.removeOptimistic(u), d;
    }, e.prototype.maskOperation = function(t) {
      var n, r, i, a = t.document, o = t.data;
      if (globalThis.__DEV__ !== !1) {
        var s = t.fetchPolicy, u = t.id, c = (n = pt(a)) === null || n === void 0 ? void 0 : n.operation, l = ((r = c?.[0]) !== null && r !== void 0 ? r : "o") + u;
        this.dataMasking && s === "no-cache" && !$h(a) && !this.noCacheWarningsByQueryId.has(l) && (this.noCacheWarningsByQueryId.add(l), globalThis.__DEV__ !== !1 && $.warn(
          37,
          (i = rn(a)) !== null && i !== void 0 ? i : "Unnamed ".concat(c ?? "operation")
        ));
      }
      return this.dataMasking ? wg(o, a, this.cache) : o;
    }, e.prototype.maskFragment = function(t) {
      var n = t.data, r = t.fragment, i = t.fragmentName;
      return this.dataMasking ? Hc(n, r, this.cache, i) : n;
    }, e.prototype.fetchQueryByPolicy = function(t, n, r) {
      var i = this, a = n.query, o = n.variables, s = n.fetchPolicy, u = n.refetchWritePolicy, c = n.errorPolicy, l = n.returnPartialData, d = n.context, f = n.notifyOnNetworkStatusChange, p = t.networkStatus;
      t.init({
        document: a,
        variables: o,
        networkStatus: r
      });
      var y = function() {
        return t.getDiff();
      }, m = function(D, I) {
        I === void 0 && (I = t.networkStatus || W.loading);
        var O = D.result;
        globalThis.__DEV__ !== !1 && !l && !ne(O, {}) && ul(D.missing);
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
      }, v = s === "no-cache" ? 0 : r === W.refetch && u !== "merge" ? 1 : 2, g = function() {
        return i.getResultsFromLink(t, v, {
          query: a,
          variables: o,
          context: d,
          fetchPolicy: s,
          errorPolicy: c
        });
      }, b = f && typeof p == "number" && p !== r && Tt(r);
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
      return t && !this.queries.has(t) && this.queries.set(t, new Jr(this, t)), this.queries.get(t);
    }, e.prototype.prepareContext = function(t) {
      t === void 0 && (t = {});
      var n = this.localState.prepareContext(t);
      return _(_(_({}, this.defaultContext), n), { clientAwareness: this.clientAwareness });
    }, e;
  })()
), zg = (
  /** @class */
  (function() {
    function e(t) {
      var n = t.cache, r = t.client, i = t.resolvers, a = t.fragmentMatcher;
      this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = n, r && (this.client = r), i && this.addResolvers(i), a && this.setFragmentMatcher(a);
    }
    return e.prototype.addResolvers = function(t) {
      var n = this;
      this.resolvers = this.resolvers || {}, Array.isArray(t) ? t.forEach(function(r) {
        n.resolvers = Go(n.resolvers, r);
      }) : this.resolvers = Go(this.resolvers, t);
    }, e.prototype.setResolvers = function(t) {
      this.resolvers = {}, this.addResolvers(t);
    }, e.prototype.getResolvers = function() {
      return this.resolvers || {};
    }, e.prototype.runResolvers = function(t) {
      return Be(this, arguments, void 0, function(n) {
        var r = n.document, i = n.remoteResult, a = n.context, o = n.variables, s = n.onlyRunForcedResolvers, u = s === void 0 ? !1 : s;
        return Ge(this, function(c) {
          return r ? [2, this.resolveDocument(r, i.data, a, o, this.fragmentMatcher, u).then(function(l) {
            return _(_({}, i), { data: l.result });
          })] : [2, i];
        });
      });
    }, e.prototype.setFragmentMatcher = function(t) {
      this.fragmentMatcher = t;
    }, e.prototype.getFragmentMatcher = function() {
      return this.fragmentMatcher;
    }, e.prototype.clientQuery = function(t) {
      return gn(["client"], t) && this.resolvers ? t : null;
    }, e.prototype.serverQuery = function(t) {
      return Ic(t);
    }, e.prototype.prepareContext = function(t) {
      var n = this.cache;
      return _(_({}, t), {
        cache: n,
        // Getting an entry's cache key is useful for local state resolvers.
        getCacheKey: function(r) {
          return n.identify(r);
        }
      });
    }, e.prototype.addExportedVariables = function(t) {
      return Be(this, arguments, void 0, function(n, r, i) {
        return r === void 0 && (r = {}), i === void 0 && (i = {}), Ge(this, function(a) {
          return n ? [2, this.resolveDocument(n, this.buildRootValueFromCache(n, r) || {}, this.prepareContext(i), r).then(function(o) {
            return _(_({}, r), o.exportedVariables);
          })] : [2, _({}, r)];
        });
      });
    }, e.prototype.shouldForceResolvers = function(t) {
      var n = !1;
      return Te(t, {
        Directive: {
          enter: function(r) {
            if (r.name.value === "client" && r.arguments && (n = r.arguments.some(function(i) {
              return i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0;
            }), n))
              return or;
          }
        }
      }), n;
    }, e.prototype.buildRootValueFromCache = function(t, n) {
      return this.cache.diff({
        query: wm(t),
        variables: n,
        returnPartialData: !0,
        optimistic: !1
      }).result;
    }, e.prototype.resolveDocument = function(t, n) {
      return Be(this, arguments, void 0, function(r, i, a, o, s, u) {
        var c, l, d, f, p, y, m, v, g, b, E;
        return a === void 0 && (a = {}), o === void 0 && (o = {}), s === void 0 && (s = function() {
          return !0;
        }), u === void 0 && (u = !1), Ge(this, function(D) {
          return c = Vt(r), l = Ut(r), d = jt(l), f = this.collectSelectionsToResolve(c, d), p = c.operation, y = p ? p.charAt(0).toUpperCase() + p.slice(1) : "Query", m = this, v = m.cache, g = m.client, b = {
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
    }, e.prototype.resolveSelectionSet = function(t, n, r, i) {
      return Be(this, void 0, void 0, function() {
        var a, o, s, u, c, l = this;
        return Ge(this, function(d) {
          return a = i.fragmentMap, o = i.context, s = i.variables, u = [r], c = function(f) {
            return Be(l, void 0, void 0, function() {
              var p, y;
              return Ge(this, function(m) {
                return !n && !i.selectionsToResolve.has(f) ? [
                  2
                  /*return*/
                ] : Dn(f, s) ? Ze(f) ? [2, this.resolveField(f, n, r, i).then(function(v) {
                  var g;
                  typeof v < "u" && u.push((g = {}, g[Re(f)] = v, g));
                })] : (cm(f) ? p = f : (p = a[f.name.value], $(p, 19, f.name.value)), p && p.typeCondition && (y = p.typeCondition.name.value, i.fragmentMatcher(r, y, o)) ? [2, this.resolveSelectionSet(p.selectionSet, n, r, i).then(function(v) {
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
            return dr(u);
          })];
        });
      });
    }, e.prototype.resolveField = function(t, n, r, i) {
      return Be(this, void 0, void 0, function() {
        var a, o, s, u, c, l, d, f, p, y = this;
        return Ge(this, function(m) {
          return r ? (a = i.variables, o = t.name.value, s = Re(t), u = o !== s, c = r[s] || r[o], l = Promise.resolve(c), (!i.onlyRunForcedResolvers || this.shouldForceResolvers(t)) && (d = r.__typename || i.defaultOperationType, f = this.resolvers && this.resolvers[d], f && (p = f[u ? o : s], p && (l = Promise.resolve(
            // In case the resolve function accesses reactive variables,
            // set cacheSlot to the current cache instance.
            wa.withValue(this.cache, p, [
              r,
              cr(t, a),
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
              return y.resolveSubSelectedArray(t, n || E, v, i);
            if (t.selectionSet)
              return y.resolveSelectionSet(t.selectionSet, n || E, v, i);
          })]) : [2, null];
        });
      });
    }, e.prototype.resolveSubSelectedArray = function(t, n, r, i) {
      var a = this;
      return Promise.all(r.map(function(o) {
        if (o === null)
          return null;
        if (Array.isArray(o))
          return a.resolveSubSelectedArray(t, n, o, i);
        if (t.selectionSet)
          return a.resolveSelectionSet(t.selectionSet, n, o, i);
      }));
    }, e.prototype.collectSelectionsToResolve = function(t, n) {
      var r = function(o) {
        return !Array.isArray(o);
      }, i = this.selectionsToResolveCache;
      function a(o) {
        if (!i.has(o)) {
          var s = /* @__PURE__ */ new Set();
          i.set(o, s), Te(o, {
            Directive: function(u, c, l, d, f) {
              u.name.value === "client" && f.forEach(function(p) {
                r(p) && No(p) && s.add(p);
              });
            },
            FragmentSpread: function(u, c, l, d, f) {
              var p = n[u.name.value];
              $(p, 20, u.name.value);
              var y = a(p);
              y.size > 0 && (f.forEach(function(m) {
                r(m) && No(m) && s.add(m);
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
      var n = this, r;
      if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !t.cache)
        throw ve(16);
      var i = t.uri, a = t.credentials, o = t.headers, s = t.cache, u = t.documentTransform, c = t.ssrMode, l = c === void 0 ? !1 : c, d = t.ssrForceFetchDelay, f = d === void 0 ? 0 : d, p = t.connectToDevTools, y = t.queryDeduplication, m = y === void 0 ? !0 : y, v = t.defaultOptions, g = t.defaultContext, b = t.assumeImmutableResults, E = b === void 0 ? s.assumeImmutableResults : b, D = t.resolvers, I = t.typeDefs, O = t.fragmentMatcher, x = t.name, P = t.version, L = t.devtools, q = t.dataMasking, G = t.link;
      G || (G = i ? new gg({ uri: i, credentials: a, headers: o }) : Ie.empty()), this.link = G, this.cache = s, this.disableNetworkFetches = l || f > 0, this.queryDeduplication = m, this.defaultOptions = v || /* @__PURE__ */ Object.create(null), this.typeDefs = I, this.devtoolsConfig = _(_({}, L), { enabled: (r = L?.enabled) !== null && r !== void 0 ? r : p }), this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1), f && setTimeout(function() {
        return n.disableNetworkFetches = !1;
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
          n.devToolsHookCb && n.devToolsHookCb({
            action: {},
            state: {
              queries: n.queryManager.getQueryStore(),
              mutations: n.queryManager.mutationStore || {}
            },
            dataWithOptimisticResults: n.cache.extract(!0)
          });
        } : void 0
      }), this.devtoolsConfig.enabled && this.connectToDevTools();
    }
    return e.prototype.connectToDevTools = function() {
      if (!(typeof window > "u")) {
        var t = window, n = Symbol.for("apollo.devtools");
        (t[n] = t[n] || []).push(this), t.__APOLLO_CLIENT__ = this, !ws && globalThis.__DEV__ !== !1 && (ws = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
          if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
            var r = window.navigator, i = r && r.userAgent, a = void 0;
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
      return this.defaultOptions.watchQuery && (t = Br(this.defaultOptions.watchQuery, t)), this.disableNetworkFetches && (t.fetchPolicy === "network-only" || t.fetchPolicy === "cache-and-network") && (t = _(_({}, t), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(t);
    }, e.prototype.query = function(t) {
      return this.defaultOptions.query && (t = Br(this.defaultOptions.query, t)), $(t.fetchPolicy !== "cache-and-network", 17), this.disableNetworkFetches && t.fetchPolicy === "network-only" && (t = _(_({}, t), { fetchPolicy: "cache-first" })), this.queryManager.query(t);
    }, e.prototype.mutate = function(t) {
      return this.defaultOptions.mutate && (t = Br(this.defaultOptions.mutate, t)), this.queryManager.mutate(t);
    }, e.prototype.subscribe = function(t) {
      var n = this, r = this.queryManager.generateQueryId();
      return this.queryManager.startGraphQLSubscription(t).map(function(i) {
        return _(_({}, i), { data: n.queryManager.maskOperation({
          document: t.query,
          data: i.data,
          fetchPolicy: t.fetchPolicy,
          id: r
        }) });
      });
    }, e.prototype.readQuery = function(t, n) {
      return n === void 0 && (n = !1), this.cache.readQuery(t, n);
    }, e.prototype.watchFragment = function(t) {
      var n;
      return this.cache.watchFragment(_(_({}, t), (n = {}, n[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, n)));
    }, e.prototype.readFragment = function(t, n) {
      return n === void 0 && (n = !1), this.cache.readFragment(t, n);
    }, e.prototype.writeQuery = function(t) {
      var n = this.cache.writeQuery(t);
      return t.broadcast !== !1 && this.queryManager.broadcastQueries(), n;
    }, e.prototype.writeFragment = function(t) {
      var n = this.cache.writeFragment(t);
      return t.broadcast !== !1 && this.queryManager.broadcastQueries(), n;
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
        return Promise.all(t.resetStoreCallbacks.map(function(n) {
          return n();
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
        return Promise.all(t.clearStoreCallbacks.map(function(n) {
          return n();
        }));
      });
    }, e.prototype.onResetStore = function(t) {
      var n = this;
      return this.resetStoreCallbacks.push(t), function() {
        n.resetStoreCallbacks = n.resetStoreCallbacks.filter(function(r) {
          return r !== t;
        });
      };
    }, e.prototype.onClearStore = function(t) {
      var n = this;
      return this.clearStoreCallbacks.push(t), function() {
        n.clearStoreCallbacks = n.clearStoreCallbacks.filter(function(r) {
          return r !== t;
        });
      };
    }, e.prototype.reFetchObservableQueries = function(t) {
      return this.queryManager.reFetchObservableQueries(t);
    }, e.prototype.refetchQueries = function(t) {
      var n = this.queryManager.refetchQueries(t), r = [], i = [];
      n.forEach(function(o, s) {
        r.push(s), i.push(o);
      });
      var a = Promise.all(i);
      return a.queries = r, a.results = i, a.catch(function(o) {
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
var Bn = /* @__PURE__ */ new Map(), Wi = /* @__PURE__ */ new Map(), cl = !0, Kn = !1;
function ll(e) {
  return e.replace(/[\s,]+/g, " ").trim();
}
function Qg(e) {
  return ll(e.source.body.substring(e.start, e.end));
}
function Wg(e) {
  var t = /* @__PURE__ */ new Set(), n = [];
  return e.definitions.forEach(function(r) {
    if (r.kind === "FragmentDefinition") {
      var i = r.name.value, a = Qg(r.loc), o = Wi.get(i);
      o && !o.has(a) ? cl && console.warn("Warning: fragment with name " + i + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : o || Wi.set(i, o = /* @__PURE__ */ new Set()), o.add(a), t.has(a) || (t.add(a), n.push(r));
    } else
      n.push(r);
  }), _(_({}, e), { definitions: n });
}
function Hg(e) {
  var t = new Set(e.definitions);
  t.forEach(function(r) {
    r.loc && delete r.loc, Object.keys(r).forEach(function(i) {
      var a = r[i];
      a && typeof a == "object" && t.add(a);
    });
  });
  var n = e.loc;
  return n && (delete n.startToken, delete n.endToken), e;
}
function Yg(e) {
  var t = ll(e);
  if (!Bn.has(t)) {
    var n = ph(e, {
      experimentalFragmentVariables: Kn,
      allowLegacyFragmentVariables: Kn
    });
    if (!n || n.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    Bn.set(t, Hg(Wg(n)));
  }
  return Bn.get(t);
}
function h(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  typeof e == "string" && (e = [e]);
  var r = e[0];
  return t.forEach(function(i, a) {
    i && i.kind === "Document" ? r += i.loc.source.body : r += i, r += e[a + 1];
  }), Yg(r);
}
function Jg() {
  Bn.clear(), Wi.clear();
}
function Kg() {
  cl = !1;
}
function Xg() {
  Kn = !0;
}
function Zg() {
  Kn = !1;
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
    `, ny = h`
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
${ny}`, ry = h`
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
    `, hr = h`
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
    `, mr = h`
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
    `, rt = h`
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
${mr}
${mt}
${rt}
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
${mr}
${mt}
${rt}
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
    ${mr}
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
${mr}
${Qt}
${mt}
${rt}`, ly = h`
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
${at}`, gr = h`
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
    `, Tn = h`
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
    ${gr}
${at}
${Tn}
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
    ${gr}
${at}
${Tn}`, Il = h`
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
    ${gr}
${at}
${Tn}`;
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
    ${gr}
${at}
${Tn}
${wl}`;
h`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${Tn}`;
const yr = h`
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
    ${hr}`;
h`
    mutation BulkImageUpdate($input: BulkImageUpdateInput!) {
  bulkImageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${hr}`;
h`
    mutation ImagesUpdate($input: [ImageUpdateInput!]!) {
  imagesUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${hr}`;
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
    ${rt}`;
h`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${rt}`;
h`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${rt}`;
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
    ${yr}`;
h`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${yr}`;
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
    ${hr}`;
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
    ${rt}`;
h`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${rt}`;
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
    ${ry}`;
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
    ${yr}`;
h`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${yr}`;
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
    function t(n) {
      var r = e.call(this) || this;
      return r.client = n, r;
    }
    return t.prototype.request = function(n) {
      var r = this;
      return new H(function(i) {
        return r.client.subscribe(_(_({}, n), { query: We(n.query) }), {
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
}, wy = function(e, t, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(p) {
    return function(y) {
      return Promise.resolve(y).then(p, d);
    };
  }
  function s(p, y) {
    r[p] && (i[p] = function(m) {
      return new Promise(function(v, g) {
        a.push([p, m, v, g]) > 1 || u(p, m);
      });
    }, y && (i[p] = y(i[p])));
  }
  function u(p, y) {
    try {
      c(r[p](y));
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
    connectionParams: n,
    lazy: r = !0,
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
    shouldRetry: d = Kr,
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
          const ee = typeof n == "function" ? await n() : n;
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
  function re(M) {
    if (Kr(M) && (Iy(M.code) || [
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
    if (Kr(M) && M.code === 1e3)
      return x > 0;
    if (!c || q >= c || !d(M) || f?.(M))
      throw M;
    return L = !0;
  }
  r || (async () => {
    for (x++; ; )
      try {
        const [, , M] = await ce();
        await M;
      } catch (M) {
        try {
          if (!re(M))
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
          if (!re(N))
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
function Kr(e) {
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
  return new Ie(function(t, n) {
    return new H(function(r) {
      var i, a, o;
      try {
        i = n(t).subscribe({
          next: function(s) {
            if (s.errors ? o = e({
              graphQLErrors: s.errors,
              response: s,
              operation: t,
              forward: n
            }) : Pc(s) && (o = e({
              protocolErrors: s.extensions[pr],
              response: s,
              operation: t,
              forward: n
            })), o) {
              a = o.subscribe({
                next: r.next.bind(r),
                error: r.error.bind(r),
                complete: r.complete.bind(r)
              });
              return;
            }
            r.next(s);
          },
          error: function(s) {
            if (o = e({
              operation: t,
              networkError: s,
              //Network errors can return GraphQL errors on for example a 403
              graphQLErrors: s && s.result && s.result.errors || void 0,
              forward: n
            }), o) {
              a = o.subscribe({
                next: r.next.bind(r),
                error: r.error.bind(r),
                complete: r.complete.bind(r)
              });
              return;
            }
            r.error(s);
          },
          complete: function() {
            o || r.complete.bind(r)();
          }
        });
      } catch (s) {
        e({ networkError: s, operation: t, forward: n }), r.error(s);
      }
      return function() {
        i && i.unsubscribe(), a && i.unsubscribe();
      };
    });
  });
}
(function(e) {
  Ee(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return r.link = kl(n), r;
  }
  return t.prototype.request = function(n, r) {
    return this.link.request(n, r);
  }, t;
})(Ie);
function ky(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function xy(e, t, n = "") {
  if (!arguments.length) throw new TypeError("Argument 1 `value` is required.");
  if (typeof t != "function")
    throw new TypeError("Argument 2 `isExtractable` must be a function.");
  if (typeof n != "string")
    throw new TypeError("Argument 3 `path` must be a string.");
  const r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  function a(o, s, u) {
    if (t(o)) {
      const d = i.get(o);
      return d ? d.push(s) : i.set(o, [s]), null;
    }
    const c = Array.isArray(o) || typeof FileList < "u" && o instanceof FileList, l = ky(o);
    if (c || l) {
      let d = r.get(o);
      const f = !d;
      if (f && (d = c ? [] : (
        // Replicate if the plain object is an `Object` instance.
        o instanceof /** @type {any} */
        Object ? {} : /* @__PURE__ */ Object.create(null)
      ), r.set(
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
    clone: a(e, n, /* @__PURE__ */ new Set()),
    files: i
  };
}
function Fy(e, t, n) {
  "name" in n ? e.append(t, n, n.name) : e.append(t, n);
}
function Cy(e) {
  return typeof File < "u" && e instanceof File || typeof Blob < "u" && e instanceof Blob;
}
function Ay({
  uri: e = "/graphql",
  useGETForQueries: t,
  isExtractableFile: n = Cy,
  FormData: r,
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
    ), { clone: D, files: I } = xy(E, n, "");
    let O = Uc(f, e);
    if (I.size) {
      b.headers && delete b.headers["content-type"];
      const L = r || FormData, q = new L();
      q.append("operations", bn(D, "Payload"));
      const G = {};
      let ce = 0;
      I.forEach((re) => {
        G[++ce] = re;
      }), q.append("map", JSON.stringify(G)), ce = 0, I.forEach((re, he) => {
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
    } else b.body = bn(D, "Payload");
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
var Xr, Zr;
const qe = (e) => (t, { args: n, canRead: r, toReference: i }) => r(t) ? t : i({
  __typename: e,
  id: n?.id
}), en = (e, { canRead: t }) => {
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
        read: en
      }
    }
  },
  Image: {
    fields: {
      studio: {
        read: en
      },
      paths: {
        merge: !1
      }
    }
  },
  Group: {
    fields: {
      studio: {
        read: en
      }
    }
  },
  Gallery: {
    fields: {
      studio: {
        read: en
      }
    }
  },
  Studio: {
    fields: {
      parent_studio: {
        read: en
      }
    }
  }
}, Py = {
  BaseFile: ["VideoFile", "ImageFile", "GalleryFile"],
  VisualFile: ["VideoFile", "ImageFile"]
}, Ny = (Zr = (Xr = document.querySelector("base")) === null || Xr === void 0 ? void 0 : Xr.getAttribute("href")) !== null && Zr !== void 0 ? Zr : "/", ei = (e) => {
  let t = new URL(window.location.origin + Ny);
  return e && (t.pathname += e), t;
}, Ry = () => {
  const e = ei("graphql"), t = ei("graphql");
  t.protocol === "https:" ? t.protocol = "wss:" : t.protocol = "ws:";
  const n = Ay({ uri: e.toString() }), r = Ty({
    url: t.toString(),
    retryAttempts: 1 / 0,
    shouldRetry() {
      return !0;
    }
  }), i = new Sy(r), a = kl(({ networkError: l }) => {
    if (l && l.statusCode === 401) {
      const d = new URL(ei("login"), window.location.toString());
      d.searchParams.append("returnURL", window.location.href), window.location.href = d.toString();
    }
  }), o = Hm(({ query: l }) => {
    const d = Vt(l);
    return d.kind === "OperationDefinition" && d.operation === "subscription";
  }, i, n), s = Wm([a, o]), u = new ka({
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
    wsClient: r
  };
}, { client: My } = Ry(), Ly = () => My;
function jy() {
  const e = Ly(), t = "config" in e.cache ? e.cache.config : {}, n = new ka({
    ...t
  });
  return new xa({
    link: e.link,
    cache: n
  });
}
const xl = jy(), qy = {
  getItem: async (e) => await Fl().then((t) => t?.[e] || null).catch(console.error),
  setItem: async (e, t) => await Xs((n) => ({ ...n, [e]: t })).catch(console.error),
  removeItem: async (e) => {
    await Xs(
      (t) => {
        const { [e]: n, ...r } = t;
        return r;
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
}, ni = Mu()(
  (e, t) => ({
    ...ti,
    set: (n, r) => {
      if (!t().tvConfigLoaded && n !== "tvConfigLoaded") {
        console.warn(`Tried to set ${n} to "${r}" before store was loaded`);
        return;
      }
      e((i) => {
        const a = typeof r == "function" ? r(i[n]) : r;
        return {
          [n]: a
        };
      });
    },
    setToDefault: (n) => {
      if (!t().tvConfigLoaded) {
        console.warn(`Tried to set ${n} to default before store was loaded`);
        return;
      }
      e((r) => ({
        [n]: ti[n]
      }));
    },
    getDefault: (n) => ti[n],
    get: (n) => t()[n]
  })
), Oe = "app-state", ri = {
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
    getItem: async (n) => {
      const [r, i] = await Promise.all([
        e.getItem(n),
        Promise.resolve(t.getItem(`${n}-local`))
      ]);
      if (!r && !i) return null;
      const a = r ? JSON.parse(r).state : {}, o = i ? JSON.parse(i).state : {};
      return JSON.stringify({
        state: { ...a, ...o },
        version: a?.version ?? o?.version ?? 0
      });
    },
    setItem: async (n, r) => {
      const i = JSON.parse(r), a = i.state, o = {}, s = {};
      for (const [c, l] of Object.entries(a))
        Uy.includes(c) ? s[c] = l : o[c] = l;
      const u = [];
      Object.keys(o).length > 0 && u.push(e.setItem(n, JSON.stringify({ ...i, state: o }))), Object.keys(s).length > 0 && u.push(Promise.resolve(
        t.setItem(`${n}-local`, JSON.stringify({ ...i, state: s }))
      )), await Promise.all(u);
    },
    removeItem: async (n) => {
      await Promise.all([
        e.removeItem(n),
        Promise.resolve(t.removeItem(`${n}-local`))
      ]);
    }
  };
};
Mu()(
  Tp(
    (e, t) => ({
      ...ri,
      set: (n, r) => {
        if (!ni.getState().tvConfigLoaded) {
          console.warn(`Tried to set ${n} to "${r}" before config was loaded`);
          return;
        }
        e((i) => {
          const a = typeof r == "function" ? r(i[n]) : r;
          if (n === "showDebuggingInfo") {
            const o = a.includes("render-debugging");
            localStorage.getItem("enableRenderDebugging") === "true" !== o && setTimeout(() => {
              localStorage.setItem("enableRenderDebugging", JSON.stringify(o)), window.location.reload();
            }, 300);
          }
          return {
            [n]: a
          };
        });
      },
      setToDefault: (n) => {
        if (!ni.getState().tvConfigLoaded) {
          console.warn(`Tried to set ${n} to default before store was loaded`);
          return;
        }
        e((r) => ({
          [n]: ri[n]
        }));
      },
      getDefault: (n) => ri[n],
      get: (n) => t()[n]
    }),
    {
      name: Oe,
      storage: Lu(() => Vy()),
      onRehydrateStorage: (e) => () => ni.setState({ tvConfigLoaded: !0 }),
      version: 2,
      migrate: (e, t) => {
        if (t === 0 && e && typeof e == "object" && ("audioMuted" in e && (e.volume = e.audioMuted ? 0 : 1, delete e.audioMuted), "actionButtonsConfig" in e && Array.isArray(e.actionButtonsConfig)))
          for (const n of e.actionButtonsConfig)
            n.type === "mute" && (n.type = "volume");
        if (t < 2 && e && typeof e == "object" && "actionButtonsConfig" in e && Array.isArray(e.actionButtonsConfig)) {
          const n = e.actionButtonsConfig;
          e.actionButtonStackConfig = n, delete e.actionButtonsConfig;
          for (const r of n)
            r.buttonType = r.type, r.type = "button";
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
  function(e, t, n) {
    const [r, i] = Q.useState(!1), [a, o] = me.React.useState(null);
    if (e.pluginID !== He) return /* @__PURE__ */ Q.createElement(n, { ...e });
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
      /* @__PURE__ */ Q.createElement(n, { ...e }),
      /* @__PURE__ */ Q.createElement("div", { className: "plugin-settings" }, /* @__PURE__ */ Q.createElement("div", { className: "setting" }), " ", /* @__PURE__ */ Q.createElement("div", { className: "setting" }, /* @__PURE__ */ Q.createElement("div", null, /* @__PURE__ */ Q.createElement("h3", null, "Reset all Stash TV settings"), /* @__PURE__ */ Q.createElement("div", { className: "sub-heading" }, "Stash TV has its own settings which are configurable from the settings panel in the Stash TV interface. This resets those settings to default.")), /* @__PURE__ */ Q.createElement("div", null, /* @__PURE__ */ Q.createElement(me.libraries.Bootstrap.Button, { onClick: s, variant: "warning" }, r && /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(
        rr,
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
  function({ children: e, ...t }, n, r) {
    const { data: i, loading: a } = me.GQL.useConfigurationQuery(), o = i?.configuration?.interface?.menuItems?.includes("tv");
    return [
      /* @__PURE__ */ Q.createElement(r, { ...t }, e, !a && o && /* @__PURE__ */ Q.createElement(By, null))
    ];
  }
);
me.patch.before(
  "CheckboxGroup",
  function(...e) {
    const [t, ...n] = e;
    return t.groupId !== "menu-items" ? [t, ...n] : [
      {
        ...t,
        items: [
          ...t.items,
          { id: "tv", headingID: "TV" }
        ]
      },
      ...n
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
        rr,
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
