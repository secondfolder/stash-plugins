/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Jl(e, t, r) {
  return (t = Xl(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Za(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Za(Object(r), !0).forEach(function(n) {
      Jl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Za(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Kl(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xl(e) {
  var t = Kl(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const eo = () => {
};
let fa = {}, vu = {}, bu = null, Su = {
  mark: eo,
  measure: eo
};
try {
  typeof window < "u" && (fa = window), typeof document < "u" && (vu = document), typeof MutationObserver < "u" && (bu = MutationObserver), typeof performance < "u" && (Su = performance);
} catch {
}
const {
  userAgent: to = ""
} = fa.navigator || {}, ft = fa, he = vu, ro = bu, qr = Su;
ft.document;
const Xe = !!he.documentElement && !!he.head && typeof he.addEventListener == "function" && typeof he.createElement == "function", _u = ~to.indexOf("MSIE") || ~to.indexOf("Trident/");
var Zl = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, ef = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, wu = {
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
}, tf = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Eu = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], xe = "classic", mn = "duotone", rf = "sharp", nf = "sharp-duotone", Du = [xe, mn, rf, nf], af = {
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
}, of = {
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
}, sf = /* @__PURE__ */ new Map([["classic", {
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
}]]), uf = {
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
}, cf = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], no = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, lf = ["kit"], ff = {
  kit: {
    "fa-kit": "fak"
  }
}, df = ["fak", "fakd"], pf = {
  kit: {
    fak: "fa-kit"
  }
}, io = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Br = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, hf = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], mf = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], gf = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, yf = {
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
}, vf = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, _i = {
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
}, bf = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], wi = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...hf, ...bf], Sf = ["solid", "regular", "light", "thin", "duotone", "brands"], Iu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], _f = Iu.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), wf = [...Object.keys(vf), ...Sf, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Br.GROUP, Br.SWAP_OPACITY, Br.PRIMARY, Br.SECONDARY].concat(Iu.map((e) => "".concat(e, "x"))).concat(_f.map((e) => "w-".concat(e))), Ef = {
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
const Ye = "___FONT_AWESOME___", Ei = 16, Tu = "fa", ku = "svg-inline--fa", It = "data-fa-i2svg", Di = "data-fa-pseudo-element", Df = "data-fa-pseudo-element-pending", da = "data-prefix", pa = "data-icon", ao = "fontawesome-i2svg", If = "async", Tf = ["HTML", "HEAD", "STYLE", "SCRIPT"], Ou = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
function Rr(e) {
  return new Proxy(e, {
    get(t, r) {
      return r in t ? t[r] : t[xe];
    }
  });
}
const xu = L({}, wu);
xu[xe] = L(L(L(L({}, {
  "fa-duotone": "duotone"
}), wu[xe]), no.kit), no["kit-duotone"]);
const kf = Rr(xu), Ii = L({}, uf);
Ii[xe] = L(L(L(L({}, {
  duotone: "fad"
}), Ii[xe]), io.kit), io["kit-duotone"]);
const oo = Rr(Ii), Ti = L({}, _i);
Ti[xe] = L(L({}, Ti[xe]), pf.kit);
const ha = Rr(Ti), ki = L({}, yf);
ki[xe] = L(L({}, ki[xe]), ff.kit);
Rr(ki);
const Of = Zl, Au = "fa-layers-text", xf = ef, Af = L({}, af);
Rr(Af);
const Ff = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Rn = tf, Cf = [...lf, ...wf], _r = ft.FontAwesomeConfig || {};
function Pf(e) {
  var t = he.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function $f(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
he && typeof he.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [r, n] = t;
  const i = $f(Pf(r));
  i != null && (_r[n] = i);
});
const Fu = {
  styleDefault: "solid",
  familyDefault: xe,
  cssPrefix: Tu,
  replacementClass: ku,
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
_r.familyPrefix && (_r.cssPrefix = _r.familyPrefix);
const Yt = L(L({}, Fu), _r);
Yt.autoReplaceSvg || (Yt.observeMutations = !1);
const X = {};
Object.keys(Fu).forEach((e) => {
  Object.defineProperty(X, e, {
    enumerable: !0,
    set: function(t) {
      Yt[e] = t, wr.forEach((r) => r(X));
    },
    get: function() {
      return Yt[e];
    }
  });
});
Object.defineProperty(X, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Yt.cssPrefix = e, wr.forEach((t) => t(X));
  },
  get: function() {
    return Yt.cssPrefix;
  }
});
ft.FontAwesomeConfig = X;
const wr = [];
function Nf(e) {
  return wr.push(e), () => {
    wr.splice(wr.indexOf(e), 1);
  };
}
const et = Ei, Ge = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Rf(e) {
  if (!e || !Xe)
    return;
  const t = he.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const r = he.head.childNodes;
  let n = null;
  for (let i = r.length - 1; i > -1; i--) {
    const a = r[i], o = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (n = a);
  }
  return he.head.insertBefore(t, n), e;
}
const Mf = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function kr() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Mf[Math.random() * 62 | 0];
  return t;
}
function Zt(e) {
  const t = [];
  for (let r = (e || []).length >>> 0; r--; )
    t[r] = e[r];
  return t;
}
function ma(e) {
  return e.classList ? Zt(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Cu(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Lf(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, '="').concat(Cu(e[r]), '" '), "").trim();
}
function gn(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, ": ").concat(e[r].trim(), ";"), "");
}
function ga(e) {
  return e.size !== Ge.size || e.x !== Ge.x || e.y !== Ge.y || e.rotate !== Ge.rotate || e.flipX || e.flipY;
}
function jf(e) {
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
function Uf(e) {
  let {
    transform: t,
    width: r = Ei,
    height: n = Ei,
    startCentered: i = !1
  } = e, a = "";
  return i && _u ? a += "translate(".concat(t.x / et - r / 2, "em, ").concat(t.y / et - n / 2, "em) ") : i ? a += "translate(calc(-50% + ".concat(t.x / et, "em), calc(-50% + ").concat(t.y / et, "em)) ") : a += "translate(".concat(t.x / et, "em, ").concat(t.y / et, "em) "), a += "scale(".concat(t.size / et * (t.flipX ? -1 : 1), ", ").concat(t.size / et * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var qf = `:root, :host {
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
function Pu() {
  const e = Tu, t = ku, r = X.cssPrefix, n = X.replacementClass;
  let i = qf;
  if (r !== e || n !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(s, ".".concat(n));
  }
  return i;
}
let so = !1;
function Mn() {
  X.autoAddCss && !so && (Rf(Pu()), so = !0);
}
var Bf = {
  mixout() {
    return {
      dom: {
        css: Pu,
        insertCss: Mn
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Mn();
      },
      beforeI2svg() {
        Mn();
      }
    };
  }
};
const He = ft || {};
He[Ye] || (He[Ye] = {});
He[Ye].styles || (He[Ye].styles = {});
He[Ye].hooks || (He[Ye].hooks = {});
He[Ye].shims || (He[Ye].shims = []);
var ze = He[Ye];
const $u = [], Nu = function() {
  he.removeEventListener("DOMContentLoaded", Nu), sn = 1, $u.map((e) => e());
};
let sn = !1;
Xe && (sn = (he.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(he.readyState), sn || he.addEventListener("DOMContentLoaded", Nu));
function Vf(e) {
  Xe && (sn ? setTimeout(e, 0) : $u.push(e));
}
function Mr(e) {
  const {
    tag: t,
    attributes: r = {},
    children: n = []
  } = e;
  return typeof e == "string" ? Cu(e) : "<".concat(t, " ").concat(Lf(r), ">").concat(n.map(Mr).join(""), "</").concat(t, ">");
}
function uo(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var Ln = function(t, r, n, i) {
  var a = Object.keys(t), o = a.length, s = r, u, c, l;
  for (n === void 0 ? (u = 1, l = t[a[0]]) : (u = 0, l = n); u < o; u++)
    c = a[u], l = s(l, t[c], c, t);
  return l;
};
function Gf(e) {
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
function Oi(e) {
  const t = Gf(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function zf(e, t) {
  const r = e.length;
  let n = e.charCodeAt(t), i;
  return n >= 55296 && n <= 56319 && r > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (n - 55296) * 1024 + i - 56320 + 65536 : n;
}
function co(e) {
  return Object.keys(e).reduce((t, r) => {
    const n = e[r];
    return !!n.icon ? t[n.iconName] = n.icon : t[r] = n, t;
  }, {});
}
function xi(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: n = !1
  } = r, i = co(t);
  typeof ze.hooks.addPack == "function" && !n ? ze.hooks.addPack(e, co(t)) : ze.styles[e] = L(L({}, ze.styles[e] || {}), i), e === "fas" && xi("fa", t);
}
const {
  styles: Or,
  shims: Qf
} = ze, Ru = Object.keys(ha), Wf = Ru.reduce((e, t) => (e[t] = Object.keys(ha[t]), e), {});
let ya = null, Mu = {}, Lu = {}, ju = {}, Uu = {}, qu = {};
function Yf(e) {
  return ~Cf.indexOf(e);
}
function Hf(e, t) {
  const r = t.split("-"), n = r[0], i = r.slice(1).join("-");
  return n === e && i !== "" && !Yf(i) ? i : null;
}
const Bu = () => {
  const e = (n) => Ln(Or, (i, a, o) => (i[o] = Ln(a, n, {}), i), {});
  Mu = e((n, i, a) => (i[3] && (n[i[3]] = a), i[2] && i[2].filter((s) => typeof s == "number").forEach((s) => {
    n[s.toString(16)] = a;
  }), n)), Lu = e((n, i, a) => (n[a] = a, i[2] && i[2].filter((s) => typeof s == "string").forEach((s) => {
    n[s] = a;
  }), n)), qu = e((n, i, a) => {
    const o = i[2];
    return n[a] = a, o.forEach((s) => {
      n[s] = a;
    }), n;
  });
  const t = "far" in Or || X.autoFetchSvg, r = Ln(Qf, (n, i) => {
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
  ju = r.names, Uu = r.unicodes, ya = yn(X.styleDefault, {
    family: X.familyDefault
  });
};
Nf((e) => {
  ya = yn(e.styleDefault, {
    family: X.familyDefault
  });
});
Bu();
function va(e, t) {
  return (Mu[e] || {})[t];
}
function Jf(e, t) {
  return (Lu[e] || {})[t];
}
function Dt(e, t) {
  return (qu[e] || {})[t];
}
function Vu(e) {
  return ju[e] || {
    prefix: null,
    iconName: null
  };
}
function Kf(e) {
  const t = Uu[e], r = va("fas", e);
  return t || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function dt() {
  return ya;
}
const Gu = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Xf(e) {
  let t = xe;
  const r = Ru.reduce((n, i) => (n[i] = "".concat(X.cssPrefix, "-").concat(i), n), {});
  return Du.forEach((n) => {
    (e.includes(r[n]) || e.some((i) => Wf[n].includes(i))) && (t = n);
  }), t;
}
function yn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: r = xe
  } = t, n = kf[r][e];
  if (r === mn && !e)
    return "fad";
  const i = oo[r][e] || oo[r][n], a = e in ze.styles ? e : null;
  return i || a || null;
}
function Zf(e) {
  let t = [], r = null;
  return e.forEach((n) => {
    const i = Hf(X.cssPrefix, n);
    i ? r = i : n && t.push(n);
  }), {
    iconName: r,
    rest: t
  };
}
function lo(e) {
  return e.sort().filter((t, r, n) => n.indexOf(t) === r);
}
function vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: r = !1
  } = t;
  let n = null;
  const i = wi.concat(mf), a = lo(e.filter((d) => i.includes(d))), o = lo(e.filter((d) => !wi.includes(d))), s = a.filter((d) => (n = d, !Eu.includes(d))), [u = null] = s, c = Xf(a), l = L(L({}, Zf(o)), {}, {
    prefix: yn(u, {
      family: c
    })
  });
  return L(L(L({}, l), nd({
    values: e,
    family: c,
    styles: Or,
    config: X,
    canonical: l,
    givenPrefix: n
  })), ed(r, n, l));
}
function ed(e, t, r) {
  let {
    prefix: n,
    iconName: i
  } = r;
  if (e || !n || !i)
    return {
      prefix: n,
      iconName: i
    };
  const a = t === "fa" ? Vu(i) : {}, o = Dt(n, i);
  return i = a.iconName || o || i, n = a.prefix || n, n === "far" && !Or.far && Or.fas && !X.autoFetchSvg && (n = "fas"), {
    prefix: n,
    iconName: i
  };
}
const td = Du.filter((e) => e !== xe || e !== mn), rd = Object.keys(_i).filter((e) => e !== xe).map((e) => Object.keys(_i[e])).flat();
function nd(e) {
  const {
    values: t,
    family: r,
    canonical: n,
    givenPrefix: i = "",
    styles: a = {},
    config: o = {}
  } = e, s = r === mn, u = t.includes("fa-duotone") || t.includes("fad"), c = o.familyDefault === "duotone", l = n.prefix === "fad" || n.prefix === "fa-duotone";
  if (!s && (u || c || l) && (n.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (n.prefix = "fab"), !n.prefix && td.includes(r) && (Object.keys(a).find((f) => rd.includes(f)) || o.autoFetchSvg)) {
    const f = sf.get(r).defaultShortPrefixId;
    n.prefix = f, n.iconName = Dt(n.prefix, n.iconName) || n.iconName;
  }
  return (n.prefix === "fa" || i === "fa") && (n.prefix = dt() || "fas"), n;
}
class id {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    const i = r.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((a) => {
      this.definitions[a] = L(L({}, this.definitions[a] || {}), i[a]), xi(a, i[a]);
      const o = ha[xe][a];
      o && xi(o, i[a]), Bu();
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
let fo = [], Mt = {};
const Vt = {}, ad = Object.keys(Vt);
function od(e, t) {
  let {
    mixoutsTo: r
  } = t;
  return fo = e, Mt = {}, Object.keys(Vt).forEach((n) => {
    ad.indexOf(n) === -1 && delete Vt[n];
  }), fo.forEach((n) => {
    const i = n.mixout ? n.mixout() : {};
    if (Object.keys(i).forEach((a) => {
      typeof i[a] == "function" && (r[a] = i[a]), typeof i[a] == "object" && Object.keys(i[a]).forEach((o) => {
        r[a] || (r[a] = {}), r[a][o] = i[a][o];
      });
    }), n.hooks) {
      const a = n.hooks();
      Object.keys(a).forEach((o) => {
        Mt[o] || (Mt[o] = []), Mt[o].push(a[o]);
      });
    }
    n.provides && n.provides(Vt);
  }), r;
}
function Ai(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  return (Mt[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...n]);
  }), t;
}
function Tt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  (Mt[e] || []).forEach((a) => {
    a.apply(null, r);
  });
}
function pt() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Vt[e] ? Vt[e].apply(null, t) : void 0;
}
function Fi(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const r = e.prefix || dt();
  if (t)
    return t = Dt(r, t) || t, uo(zu.definitions, r, t) || uo(ze.styles, r, t);
}
const zu = new id(), sd = () => {
  X.autoReplaceSvg = !1, X.observeMutations = !1, Tt("noAuto");
}, ud = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Xe ? (Tt("beforeI2svg", e), pt("pseudoElements2svg", e), pt("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    X.autoReplaceSvg === !1 && (X.autoReplaceSvg = !0), X.observeMutations = !0, Vf(() => {
      ld({
        autoReplaceSvgRoot: t
      }), Tt("watch", e);
    });
  }
}, cd = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Dt(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], r = yn(e[0]);
      return {
        prefix: r,
        iconName: Dt(r, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(X.cssPrefix, "-")) > -1 || e.match(Of))) {
      const t = vn(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || dt(),
        iconName: Dt(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = dt();
      return {
        prefix: t,
        iconName: Dt(t, e) || e
      };
    }
  }
}, Ne = {
  noAuto: sd,
  config: X,
  dom: ud,
  parse: cd,
  library: zu,
  findIconDefinition: Fi,
  toHtml: Mr
}, ld = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = he
  } = e;
  (Object.keys(ze.styles).length > 0 || X.autoFetchSvg) && Xe && X.autoReplaceSvg && Ne.dom.i2svg({
    node: t
  });
};
function bn(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((r) => Mr(r));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!Xe) return;
      const r = he.createElement("div");
      return r.innerHTML = e.html, r.children;
    }
  }), e;
}
function fd(e) {
  let {
    children: t,
    main: r,
    mask: n,
    attributes: i,
    styles: a,
    transform: o
  } = e;
  if (ga(o) && r.found && !n.found) {
    const {
      width: s,
      height: u
    } = r, c = {
      x: s / u / 2,
      y: 0.5
    };
    i.style = gn(L(L({}, a), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function dd(e) {
  let {
    prefix: t,
    iconName: r,
    children: n,
    attributes: i,
    symbol: a
  } = e;
  const o = a === !0 ? "".concat(t, "-").concat(X.cssPrefix, "-").concat(r) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: L(L({}, i), {}, {
        id: o
      }),
      children: n
    }]
  }];
}
function ba(e) {
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
  } = r.found ? r : t, y = df.includes(n), S = [X.replacementClass, i ? "".concat(X.cssPrefix, "-").concat(i) : ""].filter((P) => l.classes.indexOf(P) === -1).filter((P) => P !== "" || !!P).concat(l.classes).join(" ");
  let h = {
    children: [],
    attributes: L(L({}, l.attributes), {}, {
      "data-prefix": n,
      "data-icon": i,
      class: S,
      role: l.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(f, " ").concat(p)
    })
  };
  const g = y && !~l.classes.indexOf("fa-fw") ? {
    width: "".concat(f / p * 16 * 0.0625, "em")
  } : {};
  d && (h.attributes[It] = ""), s && (h.children.push({
    tag: "title",
    attributes: {
      id: h.attributes["aria-labelledby"] || "title-".concat(c || kr())
    },
    children: [s]
  }), delete h.attributes.title);
  const _ = L(L({}, h), {}, {
    prefix: n,
    iconName: i,
    main: t,
    mask: r,
    maskId: u,
    transform: a,
    symbol: o,
    styles: L(L({}, g), l.styles)
  }), {
    children: I,
    attributes: k
  } = r.found && t.found ? pt("generateAbstractMask", _) || {
    children: [],
    attributes: {}
  } : pt("generateAbstractIcon", _) || {
    children: [],
    attributes: {}
  };
  return _.children = I, _.attributes = k, o ? dd(_) : fd(_);
}
function po(e) {
  const {
    content: t,
    width: r,
    height: n,
    transform: i,
    title: a,
    extra: o,
    watchable: s = !1
  } = e, u = L(L(L({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  s && (u[It] = "");
  const c = L({}, o.styles);
  ga(i) && (c.transform = Uf({
    transform: i,
    startCentered: !0,
    width: r,
    height: n
  }), c["-webkit-transform"] = c.transform);
  const l = gn(c);
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
function pd(e) {
  const {
    content: t,
    title: r,
    extra: n
  } = e, i = L(L(L({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), a = gn(n.styles);
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
  styles: jn
} = ze;
function Ci(e) {
  const t = e[0], r = e[1], [n] = e.slice(4);
  let i = null;
  return Array.isArray(n) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(X.cssPrefix, "-").concat(Rn.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(X.cssPrefix, "-").concat(Rn.SECONDARY),
        fill: "currentColor",
        d: n[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(X.cssPrefix, "-").concat(Rn.PRIMARY),
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
const hd = {
  found: !1,
  width: 512,
  height: 512
};
function md(e, t) {
  !Ou && !X.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Pi(e, t) {
  let r = t;
  return t === "fa" && X.styleDefault !== null && (t = dt()), new Promise((n, i) => {
    if (r === "fa") {
      const a = Vu(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && jn[t] && jn[t][e]) {
      const a = jn[t][e];
      return n(Ci(a));
    }
    md(e, t), n(L(L({}, hd), {}, {
      icon: X.showMissingIcons && e ? pt("missingIconAbstract") || {} : {}
    }));
  });
}
const ho = () => {
}, $i = X.measurePerformance && qr && qr.mark && qr.measure ? qr : {
  mark: ho,
  measure: ho
}, yr = 'FA "6.7.2"', gd = (e) => ($i.mark("".concat(yr, " ").concat(e, " begins")), () => Qu(e)), Qu = (e) => {
  $i.mark("".concat(yr, " ").concat(e, " ends")), $i.measure("".concat(yr, " ").concat(e), "".concat(yr, " ").concat(e, " begins"), "".concat(yr, " ").concat(e, " ends"));
};
var Sa = {
  begin: gd,
  end: Qu
};
const Jr = () => {
};
function mo(e) {
  return typeof (e.getAttribute ? e.getAttribute(It) : null) == "string";
}
function yd(e) {
  const t = e.getAttribute ? e.getAttribute(da) : null, r = e.getAttribute ? e.getAttribute(pa) : null;
  return t && r;
}
function vd(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(X.replacementClass);
}
function bd() {
  return X.autoReplaceSvg === !0 ? Kr.replace : Kr[X.autoReplaceSvg] || Kr.replace;
}
function Sd(e) {
  return he.createElementNS("http://www.w3.org/2000/svg", e);
}
function _d(e) {
  return he.createElement(e);
}
function Wu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: r = e.tag === "svg" ? Sd : _d
  } = t;
  if (typeof e == "string")
    return he.createTextNode(e);
  const n = r(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    n.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    n.appendChild(Wu(a, {
      ceFn: r
    }));
  }), n;
}
function wd(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Kr = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((r) => {
        t.parentNode.insertBefore(Wu(r), t);
      }), t.getAttribute(It) === null && X.keepOriginalSource) {
        let r = he.createComment(wd(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], r = e[1];
    if (~ma(t).indexOf(X.replacementClass))
      return Kr.replace(e);
    const n = new RegExp("".concat(X.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      const a = r[0].attributes.class.split(" ").reduce((o, s) => (s === X.replacementClass || s.match(n) ? o.toSvg.push(s) : o.toNode.push(s), o), {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const i = r.map((a) => Mr(a)).join(`
`);
    t.setAttribute(It, ""), t.innerHTML = i;
  }
};
function go(e) {
  e();
}
function Yu(e, t) {
  const r = typeof t == "function" ? t : Jr;
  if (e.length === 0)
    r();
  else {
    let n = go;
    X.mutateApproach === If && (n = ft.requestAnimationFrame || go), n(() => {
      const i = bd(), a = Sa.begin("mutate");
      e.map(i), a(), r();
    });
  }
}
let _a = !1;
function Hu() {
  _a = !0;
}
function Ni() {
  _a = !1;
}
let un = null;
function yo(e) {
  if (!ro || !X.observeMutations)
    return;
  const {
    treeCallback: t = Jr,
    nodeCallback: r = Jr,
    pseudoElementsCallback: n = Jr,
    observeMutationsRoot: i = he
  } = e;
  un = new ro((a) => {
    if (_a) return;
    const o = dt();
    Zt(a).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !mo(s.addedNodes[0]) && (X.searchPseudoElements && n(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && X.searchPseudoElements && n(s.target.parentNode), s.type === "attributes" && mo(s.target) && ~Ff.indexOf(s.attributeName))
        if (s.attributeName === "class" && yd(s.target)) {
          const {
            prefix: u,
            iconName: c
          } = vn(ma(s.target));
          s.target.setAttribute(da, u || o), c && s.target.setAttribute(pa, c);
        } else vd(s.target) && r(s.target);
    });
  }), Xe && un.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Ed() {
  un && un.disconnect();
}
function Dd(e) {
  const t = e.getAttribute("style");
  let r = [];
  return t && (r = t.split(";").reduce((n, i) => {
    const a = i.split(":"), o = a[0], s = a.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), r;
}
function Id(e) {
  const t = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = vn(ma(e));
  return i.prefix || (i.prefix = dt()), t && r && (i.prefix = t, i.iconName = r), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = Jf(i.prefix, e.innerText) || va(i.prefix, Oi(e.innerText))), !i.iconName && X.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function Td(e) {
  const t = Zt(e.attributes).reduce((i, a) => (i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i), {}), r = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return X.autoA11y && (r ? t["aria-labelledby"] = "".concat(X.replacementClass, "-title-").concat(n || kr()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function kd() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Ge,
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
function vo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: r,
    prefix: n,
    rest: i
  } = Id(e), a = Td(e), o = Ai("parseNodeAttributes", {}, e);
  let s = t.styleParser ? Dd(e) : [];
  return L({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: n,
    transform: Ge,
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
  styles: Od
} = ze;
function Ju(e) {
  const t = X.autoReplaceSvg === "nest" ? vo(e, {
    styleParser: !1
  }) : vo(e);
  return ~t.extra.classes.indexOf(Au) ? pt("generateLayersText", e, t) : pt("generateSvgReplacementMutation", e, t);
}
function xd() {
  return [...cf, ...wi];
}
function bo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Xe) return Promise.resolve();
  const r = he.documentElement.classList, n = (l) => r.add("".concat(ao, "-").concat(l)), i = (l) => r.remove("".concat(ao, "-").concat(l)), a = X.autoFetchSvg ? xd() : Eu.concat(Object.keys(Od));
  a.includes("fa") || a.push("fa");
  const o = [".".concat(Au, ":not([").concat(It, "])")].concat(a.map((l) => ".".concat(l, ":not([").concat(It, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = Zt(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    n("pending"), i("complete");
  else
    return Promise.resolve();
  const u = Sa.begin("onTree"), c = s.reduce((l, d) => {
    try {
      const f = Ju(d);
      f && l.push(f);
    } catch (f) {
      Ou || f.name === "MissingIcon" && console.error(f);
    }
    return l;
  }, []);
  return new Promise((l, d) => {
    Promise.all(c).then((f) => {
      Yu(f, () => {
        n("active"), n("complete"), i("pending"), typeof t == "function" && t(), u(), l();
      });
    }).catch((f) => {
      u(), d(f);
    });
  });
}
function Ad(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Ju(e).then((r) => {
    r && Yu([r], t);
  });
}
function Fd(e) {
  return function(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = (t || {}).icon ? t : Fi(t || {});
    let {
      mask: i
    } = r;
    return i && (i = (i || {}).icon ? i : Fi(i || {})), e(n, L(L({}, r), {}, {
      mask: i
    }));
  };
}
const Cd = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: r = Ge,
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
  return bn(L({
    type: "icon"
  }, e), () => (Tt("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), X.autoA11y && (o ? c["aria-labelledby"] = "".concat(X.replacementClass, "-title-").concat(s || kr()) : (c["aria-hidden"] = "true", c.focusable = "false")), ba({
    icons: {
      main: Ci(p),
      mask: i ? Ci(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: d,
    iconName: f,
    transform: L(L({}, Ge), r),
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
var Pd = {
  mixout() {
    return {
      icon: Fd(Cd)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = bo, e.nodeCallback = Ad, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: r = he,
        callback: n = () => {
        }
      } = t;
      return bo(r, n);
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
        Promise.all([Pi(n, o), c.iconName ? Pi(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((y) => {
          let [S, h] = y;
          f([t, ba({
            icons: {
              main: S,
              mask: h
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
      const s = gn(o);
      s.length > 0 && (n.style = s);
      let u;
      return ga(a) && (u = pt("generateAbstractTransformGrouping", {
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
}, $d = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: r = []
        } = t;
        return bn({
          type: "layer"
        }, () => {
          Tt("beforeDOMElementCreation", {
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
              class: ["".concat(X.cssPrefix, "-layers"), ...r].join(" ")
            },
            children: n
          }];
        });
      }
    };
  }
}, Nd = {
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
        return bn({
          type: "counter",
          content: e
        }, () => (Tt("beforeDOMElementCreation", {
          content: e,
          params: t
        }), pd({
          content: e.toString(),
          title: r,
          extra: {
            attributes: i,
            styles: a,
            classes: ["".concat(X.cssPrefix, "-layers-counter"), ...n]
          }
        })));
      }
    };
  }
}, Rd = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: r = Ge,
          title: n = null,
          classes: i = [],
          attributes: a = {},
          styles: o = {}
        } = t;
        return bn({
          type: "text",
          content: e
        }, () => (Tt("beforeDOMElementCreation", {
          content: e,
          params: t
        }), po({
          content: e,
          transform: L(L({}, Ge), r),
          title: n,
          extra: {
            attributes: a,
            styles: o,
            classes: ["".concat(X.cssPrefix, "-layers-text"), ...i]
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
      if (_u) {
        const u = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        o = c.width / u, s = c.height / u;
      }
      return X.autoA11y && !n && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, po({
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
const Md = new RegExp('"', "ug"), So = [1105920, 1112319], _o = L(L(L(L({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), of), Ef), gf), Ri = Object.keys(_o).reduce((e, t) => (e[t.toLowerCase()] = _o[t], e), {}), Ld = Object.keys(Ri).reduce((e, t) => {
  const r = Ri[t];
  return e[t] = r[900] || [...Object.entries(r)][0][1], e;
}, {});
function jd(e) {
  const t = e.replace(Md, ""), r = zf(t, 0), n = r >= So[0] && r <= So[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Oi(i ? t[0] : t),
    isSecondary: n || i
  };
}
function Ud(e, t) {
  const r = e.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(t), i = isNaN(n) ? "normal" : n;
  return (Ri[r] || {})[i] || Ld[r];
}
function wo(e, t) {
  const r = "".concat(Df).concat(t.replace(":", "-"));
  return new Promise((n, i) => {
    if (e.getAttribute(r) !== null)
      return n();
    const o = Zt(e.children).filter((f) => f.getAttribute(Di) === t)[0], s = ft.getComputedStyle(e, t), u = s.getPropertyValue("font-family"), c = u.match(xf), l = s.getPropertyValue("font-weight"), d = s.getPropertyValue("content");
    if (o && !c)
      return e.removeChild(o), n();
    if (c && d !== "none" && d !== "") {
      const f = s.getPropertyValue("content");
      let p = Ud(u, l);
      const {
        value: y,
        isSecondary: S
      } = jd(f), h = c[0].startsWith("FontAwesome");
      let g = va(p, y), _ = g;
      if (h) {
        const I = Kf(y);
        I.iconName && I.prefix && (g = I.iconName, p = I.prefix);
      }
      if (g && !S && (!o || o.getAttribute(da) !== p || o.getAttribute(pa) !== _)) {
        e.setAttribute(r, _), o && e.removeChild(o);
        const I = kd(), {
          extra: k
        } = I;
        k.attributes[Di] = t, Pi(g, p).then((P) => {
          const w = ba(L(L({}, I), {}, {
            icons: {
              main: P,
              mask: Gu()
            },
            prefix: p,
            iconName: _,
            extra: k,
            watchable: !0
          })), x = he.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(x, e.firstChild) : e.appendChild(x), x.outerHTML = w.map((v) => Mr(v)).join(`
`), e.removeAttribute(r), n();
        }).catch(i);
      } else
        n();
    } else
      n();
  });
}
function qd(e) {
  return Promise.all([wo(e, "::before"), wo(e, "::after")]);
}
function Bd(e) {
  return e.parentNode !== document.head && !~Tf.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Di) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Eo(e) {
  if (Xe)
    return new Promise((t, r) => {
      const n = Zt(e.querySelectorAll("*")).filter(Bd).map(qd), i = Sa.begin("searchPseudoElements");
      Hu(), Promise.all(n).then(() => {
        i(), Ni(), t();
      }).catch(() => {
        i(), Ni(), r();
      });
    });
}
var Vd = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Eo, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: r = he
      } = t;
      X.searchPseudoElements && Eo(r);
    };
  }
};
let Do = !1;
var Gd = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Hu(), Do = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        yo(Ai("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Ed();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Do ? Ni() : yo(Ai("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Io = (e) => {
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
var zd = {
  mixout() {
    return {
      parse: {
        transform: (e) => Io(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-transform");
        return r && (e.transform = Io(r)), e;
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
        attributes: L({}, f.outer),
        children: [{
          tag: "g",
          attributes: L({}, f.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: L(L({}, r.icon.attributes), f.path)
          }]
        }]
      };
    };
  }
};
const Un = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function To(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Qd(e) {
  return e.tag === "g" ? e.children : [e];
}
var Wd = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-mask"), n = r ? vn(r.split(" ").map((i) => i.trim())) : Gu();
        return n.prefix || (n.prefix = dt()), e.mask = n, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
      } = a, f = jf({
        transform: s,
        containerWidth: l,
        iconWidth: u
      }), p = {
        tag: "rect",
        attributes: L(L({}, Un), {}, {
          fill: "white"
        })
      }, y = c.children ? {
        children: c.children.map(To)
      } : {}, S = {
        tag: "g",
        attributes: L({}, f.inner),
        children: [To(L({
          tag: c.tag,
          attributes: L(L({}, c.attributes), f.path)
        }, y))]
      }, h = {
        tag: "g",
        attributes: L({}, f.outer),
        children: [S]
      }, g = "mask-".concat(o || kr()), _ = "clip-".concat(o || kr()), I = {
        tag: "mask",
        attributes: L(L({}, Un), {}, {
          id: g,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [p, h]
      }, k = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: _
          },
          children: Qd(d)
        }, I]
      };
      return r.push(k, {
        tag: "rect",
        attributes: L({
          fill: "currentColor",
          "clip-path": "url(#".concat(_, ")"),
          mask: "url(#".concat(g, ")")
        }, Un)
      }), {
        children: r,
        attributes: n
      };
    };
  }
}, Yd = {
  provides(e) {
    let t = !1;
    ft.matchMedia && (t = ft.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const r = [], n = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: L(L({}, n), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = L(L({}, i), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: L(L({}, n), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || o.children.push({
        tag: "animate",
        attributes: L(L({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: L(L({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(o), r.push({
        tag: "path",
        attributes: L(L({}, n), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: L(L({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || r.push({
        tag: "path",
        attributes: L(L({}, n), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: L(L({}, a), {}, {
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
}, Hd = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-symbol"), n = r === null ? !1 : r === "" ? !0 : r;
        return e.symbol = n, e;
      }
    };
  }
}, Jd = [Bf, Pd, $d, Nd, Rd, Vd, Gd, zd, Wd, Yd, Hd];
od(Jd, {
  mixoutsTo: Ne
});
Ne.noAuto;
Ne.config;
Ne.library;
Ne.dom;
const Mi = Ne.parse;
Ne.findIconDefinition;
Ne.toHtml;
const Kd = Ne.icon;
Ne.layer;
Ne.text;
Ne.counter;
function Sn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qn = { exports: {} }, Bn, ko;
function Xd() {
  if (ko) return Bn;
  ko = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Bn = e, Bn;
}
var Vn, Oo;
function Zd() {
  if (Oo) return Vn;
  Oo = 1;
  var e = /* @__PURE__ */ Xd();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Vn = function() {
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
  }, Vn;
}
var xo;
function ep() {
  return xo || (xo = 1, qn.exports = /* @__PURE__ */ Zd()()), qn.exports;
}
var tp = /* @__PURE__ */ ep();
const ee = /* @__PURE__ */ Sn(tp);
var Gn = { exports: {} }, ie = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var zn, Ao;
function rp() {
  if (Ao) return zn;
  Ao = 1;
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
  return zn = i() ? Object.assign : function(a, o) {
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
  }, zn;
}
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fo;
function np() {
  if (Fo) return ie;
  Fo = 1;
  var e = rp(), t = 60103, r = 60106;
  ie.Fragment = 60107, ie.StrictMode = 60108, ie.Profiler = 60114;
  var n = 60109, i = 60110, a = 60112;
  ie.Suspense = 60113;
  var o = 60115, s = 60116;
  if (typeof Symbol == "function" && Symbol.for) {
    var u = Symbol.for;
    t = u("react.element"), r = u("react.portal"), ie.Fragment = u("react.fragment"), ie.StrictMode = u("react.strict_mode"), ie.Profiler = u("react.profiler"), n = u("react.provider"), i = u("react.context"), a = u("react.forward_ref"), ie.Suspense = u("react.suspense"), o = u("react.memo"), s = u("react.lazy");
  }
  var c = typeof Symbol == "function" && Symbol.iterator;
  function l(O) {
    return O === null || typeof O != "object" ? null : (O = c && O[c] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  function d(O) {
    for (var N = "https://reactjs.org/docs/error-decoder.html?invariant=" + O, M = 1; M < arguments.length; M++) N += "&args[]=" + encodeURIComponent(arguments[M]);
    return "Minified React error #" + O + "; visit " + N + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var f = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, p = {};
  function y(O, N, M) {
    this.props = O, this.context = N, this.refs = p, this.updater = M || f;
  }
  y.prototype.isReactComponent = {}, y.prototype.setState = function(O, N) {
    if (typeof O != "object" && typeof O != "function" && O != null) throw Error(d(85));
    this.updater.enqueueSetState(this, O, N, "setState");
  }, y.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function S() {
  }
  S.prototype = y.prototype;
  function h(O, N, M) {
    this.props = O, this.context = N, this.refs = p, this.updater = M || f;
  }
  var g = h.prototype = new S();
  g.constructor = h, e(g, y.prototype), g.isPureReactComponent = !0;
  var _ = { current: null }, I = Object.prototype.hasOwnProperty, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(O, N, M) {
    var W, Y = {}, Z = null, ne = null;
    if (N != null) for (W in N.ref !== void 0 && (ne = N.ref), N.key !== void 0 && (Z = "" + N.key), N) I.call(N, W) && !k.hasOwnProperty(W) && (Y[W] = N[W]);
    var se = arguments.length - 2;
    if (se === 1) Y.children = M;
    else if (1 < se) {
      for (var ae = Array(se), oe = 0; oe < se; oe++) ae[oe] = arguments[oe + 2];
      Y.children = ae;
    }
    if (O && O.defaultProps) for (W in se = O.defaultProps, se) Y[W] === void 0 && (Y[W] = se[W]);
    return { $$typeof: t, type: O, key: Z, ref: ne, props: Y, _owner: _.current };
  }
  function w(O, N) {
    return { $$typeof: t, type: O.type, key: N, ref: O.ref, props: O.props, _owner: O._owner };
  }
  function x(O) {
    return typeof O == "object" && O !== null && O.$$typeof === t;
  }
  function v(O) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(M) {
      return N[M];
    });
  }
  var D = /\/+/g;
  function b(O, N) {
    return typeof O == "object" && O !== null && O.key != null ? v("" + O.key) : N.toString(36);
  }
  function A(O, N, M, W, Y) {
    var Z = typeof O;
    (Z === "undefined" || Z === "boolean") && (O = null);
    var ne = !1;
    if (O === null) ne = !0;
    else switch (Z) {
      case "string":
      case "number":
        ne = !0;
        break;
      case "object":
        switch (O.$$typeof) {
          case t:
          case r:
            ne = !0;
        }
    }
    if (ne) return ne = O, Y = Y(ne), O = W === "" ? "." + b(ne, 0) : W, Array.isArray(Y) ? (M = "", O != null && (M = O.replace(D, "$&/") + "/"), A(Y, N, M, "", function(oe) {
      return oe;
    })) : Y != null && (x(Y) && (Y = w(Y, M + (!Y.key || ne && ne.key === Y.key ? "" : ("" + Y.key).replace(D, "$&/") + "/") + O)), N.push(Y)), 1;
    if (ne = 0, W = W === "" ? "." : W + ":", Array.isArray(O)) for (var se = 0; se < O.length; se++) {
      Z = O[se];
      var ae = W + b(Z, se);
      ne += A(Z, N, M, ae, Y);
    }
    else if (ae = l(O), typeof ae == "function") for (O = ae.call(O), se = 0; !(Z = O.next()).done; ) Z = Z.value, ae = W + b(Z, se++), ne += A(Z, N, M, ae, Y);
    else if (Z === "object") throw N = "" + O, Error(d(31, N === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : N));
    return ne;
  }
  function $(O, N, M) {
    if (O == null) return O;
    var W = [], Y = 0;
    return A(O, W, "", "", function(Z) {
      return N.call(M, Z, Y++);
    }), W;
  }
  function Q(O) {
    if (O._status === -1) {
      var N = O._result;
      N = N(), O._status = 0, O._result = N, N.then(function(M) {
        O._status === 0 && (M = M.default, O._status = 1, O._result = M);
      }, function(M) {
        O._status === 0 && (O._status = 2, O._result = M);
      });
    }
    if (O._status === 1) return O._result;
    throw O._result;
  }
  var H = { current: null };
  function j() {
    var O = H.current;
    if (O === null) throw Error(d(321));
    return O;
  }
  var q = { ReactCurrentDispatcher: H, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: _, IsSomeRendererActing: { current: !1 }, assign: e };
  return ie.Children = { map: $, forEach: function(O, N, M) {
    $(O, function() {
      N.apply(this, arguments);
    }, M);
  }, count: function(O) {
    var N = 0;
    return $(O, function() {
      N++;
    }), N;
  }, toArray: function(O) {
    return $(O, function(N) {
      return N;
    }) || [];
  }, only: function(O) {
    if (!x(O)) throw Error(d(143));
    return O;
  } }, ie.Component = y, ie.PureComponent = h, ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q, ie.cloneElement = function(O, N, M) {
    if (O == null) throw Error(d(267, O));
    var W = e({}, O.props), Y = O.key, Z = O.ref, ne = O._owner;
    if (N != null) {
      if (N.ref !== void 0 && (Z = N.ref, ne = _.current), N.key !== void 0 && (Y = "" + N.key), O.type && O.type.defaultProps) var se = O.type.defaultProps;
      for (ae in N) I.call(N, ae) && !k.hasOwnProperty(ae) && (W[ae] = N[ae] === void 0 && se !== void 0 ? se[ae] : N[ae]);
    }
    var ae = arguments.length - 2;
    if (ae === 1) W.children = M;
    else if (1 < ae) {
      se = Array(ae);
      for (var oe = 0; oe < ae; oe++) se[oe] = arguments[oe + 2];
      W.children = se;
    }
    return {
      $$typeof: t,
      type: O.type,
      key: Y,
      ref: Z,
      props: W,
      _owner: ne
    };
  }, ie.createContext = function(O, N) {
    return N === void 0 && (N = null), O = { $$typeof: i, _calculateChangedBits: N, _currentValue: O, _currentValue2: O, _threadCount: 0, Provider: null, Consumer: null }, O.Provider = { $$typeof: n, _context: O }, O.Consumer = O;
  }, ie.createElement = P, ie.createFactory = function(O) {
    var N = P.bind(null, O);
    return N.type = O, N;
  }, ie.createRef = function() {
    return { current: null };
  }, ie.forwardRef = function(O) {
    return { $$typeof: a, render: O };
  }, ie.isValidElement = x, ie.lazy = function(O) {
    return { $$typeof: s, _payload: { _status: -1, _result: O }, _init: Q };
  }, ie.memo = function(O, N) {
    return { $$typeof: o, type: O, compare: N === void 0 ? null : N };
  }, ie.useCallback = function(O, N) {
    return j().useCallback(O, N);
  }, ie.useContext = function(O, N) {
    return j().useContext(O, N);
  }, ie.useDebugValue = function() {
  }, ie.useEffect = function(O, N) {
    return j().useEffect(O, N);
  }, ie.useImperativeHandle = function(O, N, M) {
    return j().useImperativeHandle(O, N, M);
  }, ie.useLayoutEffect = function(O, N) {
    return j().useLayoutEffect(O, N);
  }, ie.useMemo = function(O, N) {
    return j().useMemo(O, N);
  }, ie.useReducer = function(O, N, M) {
    return j().useReducer(O, N, M);
  }, ie.useRef = function(O) {
    return j().useRef(O);
  }, ie.useState = function(O) {
    return j().useState(O);
  }, ie.version = "17.0.2", ie;
}
var Co;
function wa() {
  return Co || (Co = 1, Gn.exports = np()), Gn.exports;
}
var ip = wa();
const Ea = /* @__PURE__ */ Sn(ip);
function Li(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ap(e) {
  if (Array.isArray(e)) return e;
}
function op(e) {
  if (Array.isArray(e)) return Li(e);
}
function nt(e, t, r) {
  return (t = hp(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function sp(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function up(e, t) {
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
function cp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Po(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Po(Object(r), !0).forEach(function(n) {
      nt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Po(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fp(e, t) {
  if (e == null) return {};
  var r, n, i = dp(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function dp(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function $o(e, t) {
  return ap(e) || up(e, t) || Ku(e, t) || cp();
}
function ji(e) {
  return op(e) || sp(e) || Ku(e) || lp();
}
function pp(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hp(e) {
  var t = pp(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function cn(e) {
  "@babel/helpers - typeof";
  return cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cn(e);
}
function Ku(e, t) {
  if (e) {
    if (typeof e == "string") return Li(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Li(e, t) : void 0;
  }
}
var mp = "7.0.0-alpha1", Ui;
try {
  var gp = require("@fortawesome/fontawesome-svg-core/package.json");
  Ui = gp.version;
} catch {
  Ui = "sss";
}
function yp(e) {
  var t = e.beat, r = e.fade, n = e.beatFade, i = e.bounce, a = e.shake, o = e.flash, s = e.spin, u = e.spinPulse, c = e.spinReverse, l = e.pulse, d = e.fixedWidth, f = e.inverse, p = e.border, y = e.listItem, S = e.flip, h = e.size, g = e.rotation, _ = e.pull, I = e.swapOpacity, k = e.rotateBy, P = e.widthAuto, w = vp(Ui, mp), x = nt(nt(nt(nt(nt(nt({
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
    "fa-flip": S === !0,
    "fa-flip-horizontal": S === "horizontal" || S === "both",
    "fa-flip-vertical": S === "vertical" || S === "both"
  }, "fa-".concat(h), typeof h < "u" && h !== null), "fa-rotate-".concat(g), typeof g < "u" && g !== null && g !== 0), "fa-pull-".concat(_), typeof _ < "u" && _ !== null), "fa-swap-opacity", I), "fa-rotate-by", w && k), "fa-width-auto", w && P);
  return Object.keys(x).map(function(v) {
    return x[v] ? v : null;
  }).filter(function(v) {
    return v;
  });
}
function vp(e, t) {
  for (var r = e.split("-"), n = $o(r, 2), i = n[0], a = n[1], o = t.split("-"), s = $o(o, 2), u = s[0], c = s[1], l = i.split("."), d = u.split("."), f = 0; f < Math.max(l.length, d.length); f++) {
    var p = l[f] || "0", y = d[f] || "0", S = parseInt(p, 10), h = parseInt(y, 10);
    if (S !== h)
      return S > h;
  }
  for (var g = 0; g < Math.max(l.length, d.length); g++) {
    var _ = l[g] || "0", I = d[g] || "0";
    if (_ !== I && _.length !== I.length)
      return _.length < I.length;
  }
  return !(a && !c);
}
function bp(e) {
  return e = e - 0, e === e;
}
function Xu(e) {
  return bp(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, r) {
    return r ? r.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Sp = ["style"];
function _p(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function wp(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, r) {
    var n = r.indexOf(":"), i = Xu(r.slice(0, n)), a = r.slice(n + 1).trim();
    return i.startsWith("webkit") ? t[_p(i)] = a : t[i] = a, t;
  }, {});
}
function Zu(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var n = (t.children || []).map(function(u) {
    return Zu(e, u);
  }), i = Object.keys(t.attributes || {}).reduce(function(u, c) {
    var l = t.attributes[c];
    switch (c) {
      case "class":
        u.attrs.className = l, delete t.attributes.class;
        break;
      case "style":
        u.attrs.style = wp(l);
        break;
      default:
        c.indexOf("aria-") === 0 || c.indexOf("data-") === 0 ? u.attrs[c.toLowerCase()] = l : u.attrs[Xu(c)] = l;
    }
    return u;
  }, {
    attrs: {}
  }), a = r.style, o = a === void 0 ? {} : a, s = fp(r, Sp);
  return i.attrs.style = Ve(Ve({}, i.attrs.style), o), e.apply(void 0, [t.tag, Ve(Ve({}, i.attrs), s)].concat(ji(n)));
}
var ec = !1;
try {
  ec = !0;
} catch {
}
function Ep() {
  if (!ec && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function No(e) {
  if (e && cn(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Mi.icon)
    return Mi.icon(e);
  if (e === null)
    return null;
  if (e && cn(e) === "object" && e.prefix && e.iconName)
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
function Qn(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? nt({}, e, t) : {};
}
var Ro = {
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
}, _n = /* @__PURE__ */ Ea.forwardRef(function(e, t) {
  var r = Ve(Ve({}, Ro), e), n = r.icon, i = r.mask, a = r.symbol, o = r.className, s = r.title, u = r.titleId, c = r.maskId, l = No(n), d = Qn("classes", [].concat(ji(yp(r)), ji((o || "").split(" ")))), f = Qn("transform", typeof r.transform == "string" ? Mi.transform(r.transform) : r.transform), p = Qn("mask", No(i)), y = Kd(l, Ve(Ve(Ve(Ve({}, d), f), p), {}, {
    symbol: a,
    title: s,
    titleId: u,
    maskId: c
  }));
  if (!y)
    return Ep("Could not find icon", l), null;
  var S = y.abstract, h = {
    ref: t
  };
  return Object.keys(r).forEach(function(g) {
    Ro.hasOwnProperty(g) || (h[g] = r[g]);
  }), Dp(S[0], h);
});
_n.displayName = "FontAwesomeIcon";
_n.propTypes = {
  beat: ee.bool,
  border: ee.bool,
  beatFade: ee.bool,
  bounce: ee.bool,
  className: ee.string,
  fade: ee.bool,
  flash: ee.bool,
  mask: ee.oneOfType([ee.object, ee.array, ee.string]),
  maskId: ee.string,
  // the fixedWidth property has been deprecated as of version 7
  fixedWidth: ee.bool,
  inverse: ee.bool,
  flip: ee.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: ee.oneOfType([ee.object, ee.array, ee.string]),
  listItem: ee.bool,
  pull: ee.oneOf(["right", "left"]),
  pulse: ee.bool,
  rotation: ee.oneOf([0, 90, 180, 270]),
  rotateBy: ee.bool,
  shake: ee.bool,
  size: ee.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: ee.bool,
  spinPulse: ee.bool,
  spinReverse: ee.bool,
  symbol: ee.oneOfType([ee.bool, ee.string]),
  title: ee.string,
  titleId: ee.string,
  transform: ee.oneOfType([ee.string, ee.object]),
  swapOpacity: ee.bool,
  widthAuto: ee.bool
};
var Dp = Zu.bind(null, Ea.createElement);
const ct = "stash-tv", Ip = {}, Mo = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (l, d) => {
    const f = typeof l == "function" ? l(t) : l;
    if (!Object.is(f, t)) {
      const p = t;
      t = d ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), r.forEach((y) => y(t, p));
    }
  }, i = () => t, u = { setState: n, getState: i, getInitialState: () => c, subscribe: (l) => (r.add(l), () => r.delete(l)), destroy: () => {
    (Ip ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } }, c = t = e(n, i, u);
  return u;
}, Tp = (e) => e ? Mo(e) : Mo;
var Wn = { exports: {} }, Yn = {}, Hn = { exports: {} }, Jn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function kp() {
  if (Lo) return Jn;
  Lo = 1;
  var e = wa();
  function t(d, f) {
    return d === f && (d !== 0 || 1 / d === 1 / f) || d !== d && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, a = e.useLayoutEffect, o = e.useDebugValue;
  function s(d, f) {
    var p = f(), y = n({ inst: { value: p, getSnapshot: f } }), S = y[0].inst, h = y[1];
    return a(
      function() {
        S.value = p, S.getSnapshot = f, u(S) && h({ inst: S });
      },
      [d, p, f]
    ), i(
      function() {
        return u(S) && h({ inst: S }), d(function() {
          u(S) && h({ inst: S });
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
  return Jn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l, Jn;
}
var jo;
function Op() {
  return jo || (jo = 1, Hn.exports = kp()), Hn.exports;
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
var Uo;
function xp() {
  if (Uo) return Yn;
  Uo = 1;
  var e = wa(), t = Op();
  function r(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, a = e.useRef, o = e.useEffect, s = e.useMemo, u = e.useDebugValue;
  return Yn.useSyncExternalStoreWithSelector = function(c, l, d, f, p) {
    var y = a(null);
    if (y.current === null) {
      var S = { hasValue: !1, value: null };
      y.current = S;
    } else S = y.current;
    y = s(
      function() {
        function g(w) {
          if (!_) {
            if (_ = !0, I = w, w = f(w), p !== void 0 && S.hasValue) {
              var x = S.value;
              if (p(x, w))
                return k = x;
            }
            return k = w;
          }
          if (x = k, n(I, w)) return x;
          var v = f(w);
          return p !== void 0 && p(x, v) ? (I = w, x) : (I = w, k = v);
        }
        var _ = !1, I, k, P = d === void 0 ? null : d;
        return [
          function() {
            return g(l());
          },
          P === null ? void 0 : function() {
            return g(P());
          }
        ];
      },
      [l, d, f, p]
    );
    var h = i(c, y[0], y[1]);
    return o(
      function() {
        S.hasValue = !0, S.value = h;
      },
      [h]
    ), u(h), h;
  }, Yn;
}
var qo;
function Ap() {
  return qo || (qo = 1, Wn.exports = xp()), Wn.exports;
}
var Fp = Ap();
const Cp = /* @__PURE__ */ Sn(Fp), tc = {}, { useDebugValue: Pp } = Ea, { useSyncExternalStoreWithSelector: $p } = Cp;
let Bo = !1;
const Np = (e) => e;
function Rp(e, t = Np, r) {
  (tc ? "production" : void 0) !== "production" && r && !Bo && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Bo = !0);
  const n = $p(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r
  );
  return Pp(n), n;
}
const Mp = (e) => {
  (tc ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? Tp(e) : e, r = (n, i) => Rp(t, n, i);
  return Object.assign(r, t), r;
}, Lp = (e) => Mp, jp = {};
function rc(e, t) {
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
const xr = (e) => (t) => {
  try {
    const r = e(t);
    return r instanceof Promise ? r : {
      then(n) {
        return xr(n)(r);
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
        return xr(n)(r);
      }
    };
  }
}, Up = (e, t) => (r, n, i) => {
  let a = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (h) => h,
    version: 0,
    merge: (h, g) => ({
      ...g,
      ...h
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
      (...h) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), r(...h);
      },
      n,
      i
    );
  const l = xr(a.serialize), d = () => {
    const h = a.partialize({ ...n() });
    let g;
    const _ = l({ state: h, version: a.version }).then(
      (I) => c.setItem(a.name, I)
    ).catch((I) => {
      g = I;
    });
    if (g)
      throw g;
    return _;
  }, f = i.setState;
  i.setState = (h, g) => {
    f(h, g), d();
  };
  const p = e(
    (...h) => {
      r(...h), d();
    },
    n,
    i
  );
  let y;
  const S = () => {
    var h;
    if (!c) return;
    o = !1, s.forEach((_) => _(n()));
    const g = ((h = a.onRehydrateStorage) == null ? void 0 : h.call(a, n())) || void 0;
    return xr(c.getItem.bind(c))(a.name).then((_) => {
      if (_)
        return a.deserialize(_);
    }).then((_) => {
      if (_)
        if (typeof _.version == "number" && _.version !== a.version) {
          if (a.migrate)
            return a.migrate(
              _.state,
              _.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return _.state;
    }).then((_) => {
      var I;
      return y = a.merge(
        _,
        (I = n()) != null ? I : p
      ), r(y, !0), d();
    }).then(() => {
      g?.(y, void 0), o = !0, u.forEach((_) => _(y));
    }).catch((_) => {
      g?.(void 0, _);
    });
  };
  return i.persist = {
    setOptions: (h) => {
      a = {
        ...a,
        ...h
      }, h.getStorage && (c = h.getStorage());
    },
    clearStorage: () => {
      c?.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => S(),
    hasHydrated: () => o,
    onHydrate: (h) => (s.add(h), () => {
      s.delete(h);
    }),
    onFinishHydration: (h) => (u.add(h), () => {
      u.delete(h);
    })
  }, S(), y || p;
}, qp = (e, t) => (r, n, i) => {
  let a = {
    storage: rc(() => localStorage),
    partialize: (S) => S,
    version: 0,
    merge: (S, h) => ({
      ...h,
      ...S
    }),
    ...t
  }, o = !1;
  const s = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let c = a.storage;
  if (!c)
    return e(
      (...S) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), r(...S);
      },
      n,
      i
    );
  const l = () => {
    const S = a.partialize({ ...n() });
    return c.setItem(a.name, {
      state: S,
      version: a.version
    });
  }, d = i.setState;
  i.setState = (S, h) => {
    d(S, h), l();
  };
  const f = e(
    (...S) => {
      r(...S), l();
    },
    n,
    i
  );
  i.getInitialState = () => f;
  let p;
  const y = () => {
    var S, h;
    if (!c) return;
    o = !1, s.forEach((_) => {
      var I;
      return _((I = n()) != null ? I : f);
    });
    const g = ((h = a.onRehydrateStorage) == null ? void 0 : h.call(a, (S = n()) != null ? S : f)) || void 0;
    return xr(c.getItem.bind(c))(a.name).then((_) => {
      if (_)
        if (typeof _.version == "number" && _.version !== a.version) {
          if (a.migrate)
            return [
              !0,
              a.migrate(
                _.state,
                _.version
              )
            ];
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, _.state];
      return [!1, void 0];
    }).then((_) => {
      var I;
      const [k, P] = _;
      if (p = a.merge(
        P,
        (I = n()) != null ? I : f
      ), r(p, !0), k)
        return l();
    }).then(() => {
      g?.(p, void 0), p = n(), o = !0, u.forEach((_) => _(p));
    }).catch((_) => {
      g?.(void 0, _);
    });
  };
  return i.persist = {
    setOptions: (S) => {
      a = {
        ...a,
        ...S
      }, S.storage && (c = S.storage);
    },
    clearStorage: () => {
      c?.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => y(),
    hasHydrated: () => o,
    onHydrate: (S) => (s.add(S), () => {
      s.delete(S);
    }),
    onFinishHydration: (S) => (u.add(S), () => {
      u.delete(S);
    })
  }, a.skipHydration || y(), p || f;
}, Bp = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ((jp ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), Up(e, t)) : qp(e, t), Vp = Bp;
function qi(e, t) {
  const r = t?.compact === !0 ? void 0 : 2;
  return JSON.stringify(e, null, r);
}
const Gp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  inspect: qi
}, Symbol.toStringTag, { value: "Module" })), nc = {
  trace: "TRC",
  debug: "DBG",
  info: "INF",
  warning: "WRN",
  error: "ERR",
  fatal: "FTL"
}, Vo = typeof document < "u" || typeof navigator < "u" && navigator.product === "ReactNative" ? (e) => JSON.stringify(e) : "Deno" in globalThis && "inspect" in globalThis.Deno && typeof globalThis.Deno.inspect == "function" ? (e, t) => globalThis.Deno.inspect(e, {
  strAbbreviateSize: 1 / 0,
  iterableLimit: 1 / 0,
  ...t
}) : Gp != null && typeof qi == "function" ? (e, t) => qi(e, {
  ...t
}) : (e) => JSON.stringify(e);
function de(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Pt(e) {
  return e < 10 ? `00${e}` : e < 100 ? `0${e}` : `${e}`;
}
const Vr = {
  "date-time-timezone": (e) => {
    const t = new Date(e), r = t.getUTCFullYear(), n = de(t.getUTCMonth() + 1), i = de(t.getUTCDate()), a = de(t.getUTCHours()), o = de(t.getUTCMinutes()), s = de(t.getUTCSeconds()), u = Pt(t.getUTCMilliseconds());
    return `${r}-${n}-${i} ${a}:${o}:${s}.${u} +00:00`;
  },
  "date-time-tz": (e) => {
    const t = new Date(e), r = t.getUTCFullYear(), n = de(t.getUTCMonth() + 1), i = de(t.getUTCDate()), a = de(t.getUTCHours()), o = de(t.getUTCMinutes()), s = de(t.getUTCSeconds()), u = Pt(t.getUTCMilliseconds());
    return `${r}-${n}-${i} ${a}:${o}:${s}.${u} +00`;
  },
  "date-time": (e) => {
    const t = new Date(e), r = t.getUTCFullYear(), n = de(t.getUTCMonth() + 1), i = de(t.getUTCDate()), a = de(t.getUTCHours()), o = de(t.getUTCMinutes()), s = de(t.getUTCSeconds()), u = Pt(t.getUTCMilliseconds());
    return `${r}-${n}-${i} ${a}:${o}:${s}.${u}`;
  },
  "time-timezone": (e) => {
    const t = new Date(e), r = de(t.getUTCHours()), n = de(t.getUTCMinutes()), i = de(t.getUTCSeconds()), a = Pt(t.getUTCMilliseconds());
    return `${r}:${n}:${i}.${a} +00:00`;
  },
  "time-tz": (e) => {
    const t = new Date(e), r = de(t.getUTCHours()), n = de(t.getUTCMinutes()), i = de(t.getUTCSeconds()), a = Pt(t.getUTCMilliseconds());
    return `${r}:${n}:${i}.${a} +00`;
  },
  time: (e) => {
    const t = new Date(e), r = de(t.getUTCHours()), n = de(t.getUTCMinutes()), i = de(t.getUTCSeconds()), a = Pt(t.getUTCMilliseconds());
    return `${r}:${n}:${i}.${a}`;
  },
  date: (e) => {
    const t = new Date(e), r = t.getUTCFullYear(), n = de(t.getUTCMonth() + 1), i = de(t.getUTCDate());
    return `${r}-${n}-${i}`;
  },
  rfc3339: (e) => new Date(e).toISOString(),
  none: () => null
}, $t = {
  ABBR: nc,
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
function ic(e) {
  return e === "crlf" ? `\r
` : `
`;
}
function Gr(e, t) {
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
function ac(e = {}) {
  const t = (() => {
    const s = e.timestamp;
    return s == null ? Vr["date-time-timezone"] : s === "disabled" ? Vr.none : typeof s == "string" && s in Vr ? Vr[s] : s;
  })(), r = e.category ?? "·", n = e.value ? (s) => e.value(s, Vo) : Vo, i = (() => {
    const s = e.level;
    return s == null || s === "ABBR" ? (u) => $t.ABBR[u] : s === "abbr" ? (u) => $t.abbr[u] : s === "FULL" ? (u) => $t.FULL[u] : s === "full" ? (u) => $t.full[u] : s === "L" ? (u) => $t.L[u] : s === "l" ? (u) => $t.l[u] : s;
  })(), a = ic(e.lineEnding), o = e.format ?? (({ timestamp: s, level: u, category: c, message: l }) => `${s ? `${s} ` : ""}[${u}] ${c}: ${l}`);
  return (s) => {
    const u = s.message, c = u.length;
    let l;
    if (c === 1) l = u[0];
    else if (c <= 6) {
      l = "";
      for (let S = 0; S < c; S++) l += S % 2 === 0 ? u[S] : n(u[S]);
    } else {
      const S = new Array(c);
      for (let h = 0; h < c; h++) S[h] = h % 2 === 0 ? u[h] : n(u[h]);
      l = S.join("");
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
ac();
const Kn = "\x1B[0m", Xn = {
  black: "\x1B[30m",
  red: "\x1B[31m",
  green: "\x1B[32m",
  yellow: "\x1B[33m",
  blue: "\x1B[34m",
  magenta: "\x1B[35m",
  cyan: "\x1B[36m",
  white: "\x1B[37m"
}, Zn = {
  bold: "\x1B[1m",
  dim: "\x1B[2m",
  italic: "\x1B[3m",
  underline: "\x1B[4m",
  strikethrough: "\x1B[9m"
}, zp = {
  trace: null,
  debug: "blue",
  info: "green",
  warning: "yellow",
  error: "red",
  fatal: "magenta"
};
function Qp(e = {}) {
  const t = e.format, r = typeof e.timestampStyle > "u" ? "dim" : e.timestampStyle, n = e.timestampColor ?? null, i = `${r == null ? "" : Zn[r]}${n == null ? "" : Xn[n]}`, a = r == null && n == null ? "" : Kn, o = typeof e.levelStyle > "u" ? "bold" : e.levelStyle, s = e.levelColors ?? zp, u = typeof e.categoryStyle > "u" ? "dim" : e.categoryStyle, c = e.categoryColor ?? null, l = `${u == null ? "" : Zn[u]}${c == null ? "" : Xn[c]}`, d = u == null && c == null ? "" : Kn;
  return ac({
    timestamp: "date-time-tz",
    value(f, p) {
      return p(f, { colors: !0 });
    },
    ...e,
    format({ timestamp: f, level: p, category: y, message: S, record: h }) {
      const g = s[h.level];
      return f = f == null ? null : `${i}${f}${a}`, p = `${o == null ? "" : Zn[o]}${g == null ? "" : Xn[g]}${p}${o == null && g == null ? "" : Kn}`, t == null ? `${f == null ? "" : `${f} `}${p} ${l}${y}:${d} ${S}` : t({
        timestamp: f,
        level: p,
        category: `${l}${y}${d}`,
        message: S,
        record: h
      });
    }
  });
}
Qp();
function Wp(e = {}) {
  const t = ic(e.lineEnding);
  if (!e.categorySeparator && !e.message && !e.properties) return (s) => {
    if (s.message.length === 3) return JSON.stringify({
      "@timestamp": new Date(s.timestamp).toISOString(),
      level: s.level === "warning" ? "WARN" : s.level.toUpperCase(),
      message: s.message[0] + JSON.stringify(s.message[1]) + s.message[2],
      logger: s.category.join("."),
      properties: s.properties
    }, Gr) + t;
    if (s.message.length === 1) return JSON.stringify({
      "@timestamp": new Date(s.timestamp).toISOString(),
      level: s.level === "warning" ? "WARN" : s.level.toUpperCase(),
      message: s.message[0],
      logger: s.category.join("."),
      properties: s.properties
    }, Gr) + t;
    let u = s.message[0];
    for (let c = 1; c < s.message.length; c++) u += c & 1 ? JSON.stringify(s.message[c]) : s.message[c];
    return JSON.stringify({
      "@timestamp": new Date(s.timestamp).toISOString(),
      level: s.level === "warning" ? "WARN" : s.level.toUpperCase(),
      message: u,
      logger: s.category.join("."),
      properties: s.properties
    }, Gr) + t;
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
  }, Gr) + t;
}
Wp();
const Yp = {
  trace: "background-color: gray; color: white;",
  debug: "background-color: gray; color: white;",
  info: "background-color: white; color: black;",
  warning: "background-color: orange; color: black;",
  error: "background-color: red; color: white;",
  fatal: "background-color: maroon; color: white;"
};
function Hp(e) {
  let t = "";
  const r = [];
  for (let a = 0; a < e.message.length; a++) a % 2 === 0 ? t += e.message[a] : (t += "%o", r.push(e.message[a]));
  const n = new Date(e.timestamp);
  return [
    `%c${`${n.getUTCHours().toString().padStart(2, "0")}:${n.getUTCMinutes().toString().padStart(2, "0")}:${n.getUTCSeconds().toString().padStart(2, "0")}.${n.getUTCMilliseconds().toString().padStart(3, "0")}`} %c${nc[e.level]}%c %c${e.category.join("·")} %c${t}`,
    "color: gray;",
    Yp[e.level],
    "background-color: default;",
    "color: gray;",
    "color: default;",
    ...r
  ];
}
function Jp(e = {}) {
  const t = e.formatter ?? Hp, r = {
    trace: "debug",
    debug: "debug",
    info: "info",
    warning: "warn",
    error: "error",
    fatal: "error",
    ...e.levelMap ?? {}
  }, n = e.console ?? globalThis.console, i = (g) => {
    const _ = t(g), I = r[g.level];
    if (I === void 0) throw new TypeError(`Invalid log level: ${g.level}.`);
    if (typeof _ == "string") {
      const k = _.replace(/\r?\n$/, "");
      n[I](k);
    } else n[I](..._);
  };
  if (!e.nonBlocking) return i;
  const a = e.nonBlocking === !0 ? {} : e.nonBlocking, o = a.bufferSize ?? 100, s = a.flushInterval ?? 100, u = [];
  let c = null, l = !1, d = !1;
  const f = o * 2;
  function p() {
    if (u.length === 0) return;
    const g = u.splice(0);
    for (const _ of g) try {
      i(_);
    } catch {
    }
  }
  function y() {
    d || (d = !0, setTimeout(() => {
      d = !1, p();
    }, 0));
  }
  function S() {
    c !== null || l || (c = setInterval(() => {
      p();
    }, s));
  }
  const h = (g) => {
    l || (u.length >= f && u.shift(), u.push(g), u.length >= o ? y() : c === null && S());
  };
  return h[Symbol.dispose] = () => {
    l = !0, c !== null && (clearInterval(c), c = null), p();
  }, h;
}
Jp();
const Kp = "warning";
var Bi = function(e, t) {
  return Bi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Bi(e, t);
};
function Re(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Bi(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var C = function() {
  return C = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, C.apply(this, arguments);
};
function We(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function it(e, t, r, n) {
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
function at(e, t) {
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
function Oe(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, a; n < i; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ei = "Invariant Violation", Go = Object.setPrototypeOf, Xp = Go === void 0 ? function(e, t) {
  return e.__proto__ = t, e;
} : Go, oc = (
  /** @class */
  (function(e) {
    Re(t, e);
    function t(r) {
      r === void 0 && (r = ei);
      var n = e.call(this, typeof r == "number" ? ei + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
      return n.framesToPop = 1, n.name = ei, Xp(n, t.prototype), n;
    }
    return t;
  })(Error)
);
function Et(e, t) {
  if (!e)
    throw new oc(t);
}
var sc = ["debug", "log", "warn", "error", "silent"], Zp = sc.indexOf("log");
function zr(e) {
  return function() {
    if (sc.indexOf(e) >= Zp) {
      var t = console[e] || console.log;
      return t.apply(console, arguments);
    }
  };
}
(function(e) {
  e.debug = zr("debug"), e.log = zr("log"), e.warn = zr("warn"), e.error = zr("error");
})(Et || (Et = {}));
var Da = "3.13.9";
function je(e) {
  try {
    return e();
  } catch {
  }
}
const Vi = je(function() {
  return globalThis;
}) || je(function() {
  return window;
}) || je(function() {
  return self;
}) || je(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
je(function() {
  return je.constructor("return this")();
});
var zo = /* @__PURE__ */ new Map();
function Gi(e) {
  var t = zo.get(e) || 1;
  return zo.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2));
}
function uc(e, t) {
  t === void 0 && (t = 0);
  var r = Gi("stringifyForDisplay");
  return JSON.stringify(e, function(n, i) {
    return i === void 0 ? r : i;
  }, t).split(JSON.stringify(r)).join("<undefined>");
}
function Qr(e) {
  return function(t) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    if (typeof t == "number") {
      var i = t;
      t = Ia(i), t || (t = Ta(i, r), r = []);
    }
    e.apply(void 0, [t].concat(r));
  };
}
var K = Object.assign(function(t, r) {
  for (var n = [], i = 2; i < arguments.length; i++)
    n[i - 2] = arguments[i];
  t || Et(t, Ia(r, n) || Ta(r, n));
}, {
  debug: Qr(Et.debug),
  log: Qr(Et.log),
  warn: Qr(Et.warn),
  error: Qr(Et.error)
});
function Ae(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return new oc(Ia(e, t) || Ta(e, t));
}
var Qo = Symbol.for("ApolloErrorMessageHandler_" + Da);
function cc(e) {
  if (typeof e == "string")
    return e;
  try {
    return uc(e, 2).slice(0, 1e3);
  } catch {
    return "<non-serializable>";
  }
}
function Ia(e, t) {
  if (t === void 0 && (t = []), !!e)
    return Vi[Qo] && Vi[Qo](e, t.map(cc));
}
function Ta(e, t) {
  if (t === void 0 && (t = []), !!e)
    return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
      version: Da,
      message: e,
      args: t.map(cc)
    })));
}
function Xr(e, t) {
  if (!!!e)
    throw new Error(t);
}
function eh(e) {
  return typeof e == "object" && e !== null;
}
function th(e, t) {
  if (!!!e)
    throw new Error(
      "Unexpected invariant triggered."
    );
}
const rh = /\r\n|[\n\r]/g;
function zi(e, t) {
  let r = 0, n = 1;
  for (const i of e.body.matchAll(rh)) {
    if (typeof i.index == "number" || th(!1), i.index >= t)
      break;
    r = i.index + i[0].length, n += 1;
  }
  return {
    line: n,
    column: t + 1 - r
  };
}
function nh(e) {
  return lc(
    e.source,
    zi(e.source, e.start)
  );
}
function lc(e, t) {
  const r = e.locationOffset.column - 1, n = "".padStart(r) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, o = t.line + a, s = t.line === 1 ? r : 0, u = t.column + s, c = `${e.name}:${o}:${u}
`, l = n.split(/\r\n|[\n\r]/g), d = l[i];
  if (d.length > 120) {
    const f = Math.floor(u / 80), p = u % 80, y = [];
    for (let S = 0; S < d.length; S += 80)
      y.push(d.slice(S, S + 80));
    return c + Wo([
      [`${o} |`, y[0]],
      ...y.slice(1, f + 1).map((S) => ["|", S]),
      ["|", "^".padStart(p)],
      ["|", y[f + 1]]
    ]);
  }
  return c + Wo([
    // Lines specified like this: ["prefix", "string"],
    [`${o - 1} |`, l[i - 1]],
    [`${o} |`, d],
    ["|", "^".padStart(u)],
    [`${o + 1} |`, l[i + 1]]
  ]);
}
function Wo(e) {
  const t = e.filter(([n, i]) => i !== void 0), r = Math.max(...t.map(([n]) => n.length));
  return t.map(([n, i]) => n.padStart(r) + (i ? " " + i : "")).join(`
`);
}
function ih(e) {
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
class ka extends Error {
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
    const { nodes: o, source: s, positions: u, path: c, originalError: l, extensions: d } = ih(r);
    super(t), this.name = "GraphQLError", this.path = c ?? void 0, this.originalError = l ?? void 0, this.nodes = Yo(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const f = Yo(
      (n = this.nodes) === null || n === void 0 ? void 0 : n.map((y) => y.loc).filter((y) => y != null)
    );
    this.source = s ?? (f == null || (i = f[0]) === null || i === void 0 ? void 0 : i.source), this.positions = u ?? f?.map((y) => y.start), this.locations = u && s ? u.map((y) => zi(s, y)) : f?.map((y) => zi(y.source, y.start));
    const p = eh(
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
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, ka) : Object.defineProperty(this, "stack", {
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

` + nh(r.loc));
    else if (this.source && this.locations)
      for (const r of this.locations)
        t += `

` + lc(this.source, r);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function Yo(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
function Ie(e, t, r) {
  return new ka(`Syntax Error: ${r}`, {
    source: e,
    positions: [t]
  });
}
class ah {
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
class fc {
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
const dc = {
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
}, oh = new Set(Object.keys(dc));
function Ho(e) {
  const t = e?.kind;
  return typeof t == "string" && oh.has(t);
}
var Lt;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(Lt || (Lt = {}));
var Qi;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(Qi || (Qi = {}));
var G;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(G || (G = {}));
function Wi(e) {
  return e === 9 || e === 32;
}
function Ar(e) {
  return e >= 48 && e <= 57;
}
function pc(e) {
  return e >= 97 && e <= 122 || // A-Z
  e >= 65 && e <= 90;
}
function hc(e) {
  return pc(e) || e === 95;
}
function sh(e) {
  return pc(e) || Ar(e) || e === 95;
}
function uh(e) {
  var t;
  let r = Number.MAX_SAFE_INTEGER, n = null, i = -1;
  for (let o = 0; o < e.length; ++o) {
    var a;
    const s = e[o], u = ch(s);
    u !== s.length && (n = (a = n) !== null && a !== void 0 ? a : o, i = o, o !== 0 && u < r && (r = u));
  }
  return e.map((o, s) => s === 0 ? o : o.slice(r)).slice(
    (t = n) !== null && t !== void 0 ? t : 0,
    i + 1
  );
}
function ch(e) {
  let t = 0;
  for (; t < e.length && Wi(e.charCodeAt(t)); )
    ++t;
  return t;
}
function lh(e, t) {
  const r = e.replace(/"""/g, '\\"""'), n = r.split(/\r\n|[\n\r]/g), i = n.length === 1, a = n.length > 1 && n.slice(1).every((p) => p.length === 0 || Wi(p.charCodeAt(0))), o = r.endsWith('\\"""'), s = e.endsWith('"') && !o, u = e.endsWith("\\"), c = s || u, l = (
    // add leading and trailing new lines only if it improves readability
    !i || e.length > 70 || c || a || o
  );
  let d = "";
  const f = i && Wi(e.charCodeAt(0));
  return (l && !f || a) && (d += `
`), d += r, (l || c) && (d += `
`), '"""' + d + '"""';
}
var R;
(function(e) {
  e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
})(R || (R = {}));
class fh {
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
    const r = new fc(R.SOF, 0, 0, 0, 0);
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
    if (t.kind !== R.EOF)
      do
        if (t.next)
          t = t.next;
        else {
          const r = ph(this, t.end);
          t.next = r, r.prev = t, t = r;
        }
      while (t.kind === R.COMMENT);
    return t;
  }
}
function dh(e) {
  return e === R.BANG || e === R.DOLLAR || e === R.AMP || e === R.PAREN_L || e === R.PAREN_R || e === R.SPREAD || e === R.COLON || e === R.EQUALS || e === R.AT || e === R.BRACKET_L || e === R.BRACKET_R || e === R.BRACE_L || e === R.PIPE || e === R.BRACE_R;
}
function er(e) {
  return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
}
function wn(e, t) {
  return mc(e.charCodeAt(t)) && gc(e.charCodeAt(t + 1));
}
function mc(e) {
  return e >= 55296 && e <= 56319;
}
function gc(e) {
  return e >= 56320 && e <= 57343;
}
function kt(e, t) {
  const r = e.source.body.codePointAt(t);
  if (r === void 0)
    return R.EOF;
  if (r >= 32 && r <= 126) {
    const n = String.fromCodePoint(r);
    return n === '"' ? `'"'` : `"${n}"`;
  }
  return "U+" + r.toString(16).toUpperCase().padStart(4, "0");
}
function _e(e, t, r, n, i) {
  const a = e.line, o = 1 + r - e.lineStart;
  return new fc(t, r, n, a, o, i);
}
function ph(e, t) {
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
        return hh(e, i);
      // Token ::
      //   - Punctuator
      //   - Name
      //   - IntValue
      //   - FloatValue
      //   - StringValue
      //
      // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }
      case 33:
        return _e(e, R.BANG, i, i + 1);
      case 36:
        return _e(e, R.DOLLAR, i, i + 1);
      case 38:
        return _e(e, R.AMP, i, i + 1);
      case 40:
        return _e(e, R.PAREN_L, i, i + 1);
      case 41:
        return _e(e, R.PAREN_R, i, i + 1);
      case 46:
        if (r.charCodeAt(i + 1) === 46 && r.charCodeAt(i + 2) === 46)
          return _e(e, R.SPREAD, i, i + 3);
        break;
      case 58:
        return _e(e, R.COLON, i, i + 1);
      case 61:
        return _e(e, R.EQUALS, i, i + 1);
      case 64:
        return _e(e, R.AT, i, i + 1);
      case 91:
        return _e(e, R.BRACKET_L, i, i + 1);
      case 93:
        return _e(e, R.BRACKET_R, i, i + 1);
      case 123:
        return _e(e, R.BRACE_L, i, i + 1);
      case 124:
        return _e(e, R.PIPE, i, i + 1);
      case 125:
        return _e(e, R.BRACE_R, i, i + 1);
      // StringValue
      case 34:
        return r.charCodeAt(i + 1) === 34 && r.charCodeAt(i + 2) === 34 ? Sh(e, i) : gh(e, i);
    }
    if (Ar(a) || a === 45)
      return mh(e, i, a);
    if (hc(a))
      return _h(e, i);
    throw Ie(
      e.source,
      i,
      a === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : er(a) || wn(r, i) ? `Unexpected character: ${kt(e, i)}.` : `Invalid character: ${kt(e, i)}.`
    );
  }
  return _e(e, R.EOF, n, n);
}
function hh(e, t) {
  const r = e.source.body, n = r.length;
  let i = t + 1;
  for (; i < n; ) {
    const a = r.charCodeAt(i);
    if (a === 10 || a === 13)
      break;
    if (er(a))
      ++i;
    else if (wn(r, i))
      i += 2;
    else
      break;
  }
  return _e(
    e,
    R.COMMENT,
    t,
    i,
    r.slice(t + 1, i)
  );
}
function mh(e, t, r) {
  const n = e.source.body;
  let i = t, a = r, o = !1;
  if (a === 45 && (a = n.charCodeAt(++i)), a === 48) {
    if (a = n.charCodeAt(++i), Ar(a))
      throw Ie(
        e.source,
        i,
        `Invalid number, unexpected digit after 0: ${kt(
          e,
          i
        )}.`
      );
  } else
    i = ti(e, i, a), a = n.charCodeAt(i);
  if (a === 46 && (o = !0, a = n.charCodeAt(++i), i = ti(e, i, a), a = n.charCodeAt(i)), (a === 69 || a === 101) && (o = !0, a = n.charCodeAt(++i), (a === 43 || a === 45) && (a = n.charCodeAt(++i)), i = ti(e, i, a), a = n.charCodeAt(i)), a === 46 || hc(a))
    throw Ie(
      e.source,
      i,
      `Invalid number, expected digit but got: ${kt(
        e,
        i
      )}.`
    );
  return _e(
    e,
    o ? R.FLOAT : R.INT,
    t,
    i,
    n.slice(t, i)
  );
}
function ti(e, t, r) {
  if (!Ar(r))
    throw Ie(
      e.source,
      t,
      `Invalid number, expected digit but got: ${kt(
        e,
        t
      )}.`
    );
  const n = e.source.body;
  let i = t + 1;
  for (; Ar(n.charCodeAt(i)); )
    ++i;
  return i;
}
function gh(e, t) {
  const r = e.source.body, n = r.length;
  let i = t + 1, a = i, o = "";
  for (; i < n; ) {
    const s = r.charCodeAt(i);
    if (s === 34)
      return o += r.slice(a, i), _e(e, R.STRING, t, i + 1, o);
    if (s === 92) {
      o += r.slice(a, i);
      const u = r.charCodeAt(i + 1) === 117 ? r.charCodeAt(i + 2) === 123 ? yh(e, i) : vh(e, i) : bh(e, i);
      o += u.value, i += u.size, a = i;
      continue;
    }
    if (s === 10 || s === 13)
      break;
    if (er(s))
      ++i;
    else if (wn(r, i))
      i += 2;
    else
      throw Ie(
        e.source,
        i,
        `Invalid character within String: ${kt(
          e,
          i
        )}.`
      );
  }
  throw Ie(e.source, i, "Unterminated string.");
}
function yh(e, t) {
  const r = e.source.body;
  let n = 0, i = 3;
  for (; i < 12; ) {
    const a = r.charCodeAt(t + i++);
    if (a === 125) {
      if (i < 5 || !er(n))
        break;
      return {
        value: String.fromCodePoint(n),
        size: i
      };
    }
    if (n = n << 4 | vr(a), n < 0)
      break;
  }
  throw Ie(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${r.slice(
      t,
      t + i
    )}".`
  );
}
function vh(e, t) {
  const r = e.source.body, n = Jo(r, t + 2);
  if (er(n))
    return {
      value: String.fromCodePoint(n),
      size: 6
    };
  if (mc(n) && r.charCodeAt(t + 6) === 92 && r.charCodeAt(t + 7) === 117) {
    const i = Jo(r, t + 8);
    if (gc(i))
      return {
        value: String.fromCodePoint(n, i),
        size: 12
      };
  }
  throw Ie(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${r.slice(t, t + 6)}".`
  );
}
function Jo(e, t) {
  return vr(e.charCodeAt(t)) << 12 | vr(e.charCodeAt(t + 1)) << 8 | vr(e.charCodeAt(t + 2)) << 4 | vr(e.charCodeAt(t + 3));
}
function vr(e) {
  return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function bh(e, t) {
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
  throw Ie(
    e.source,
    t,
    `Invalid character escape sequence: "${r.slice(
      t,
      t + 2
    )}".`
  );
}
function Sh(e, t) {
  const r = e.source.body, n = r.length;
  let i = e.lineStart, a = t + 3, o = a, s = "";
  const u = [];
  for (; a < n; ) {
    const c = r.charCodeAt(a);
    if (c === 34 && r.charCodeAt(a + 1) === 34 && r.charCodeAt(a + 2) === 34) {
      s += r.slice(o, a), u.push(s);
      const l = _e(
        e,
        R.BLOCK_STRING,
        t,
        a + 3,
        // Return a string of the lines joined with U+000A.
        uh(u).join(`
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
    if (er(c))
      ++a;
    else if (wn(r, a))
      a += 2;
    else
      throw Ie(
        e.source,
        a,
        `Invalid character within String: ${kt(
          e,
          a
        )}.`
      );
  }
  throw Ie(e.source, a, "Unterminated string.");
}
function _h(e, t) {
  const r = e.source.body, n = r.length;
  let i = t + 1;
  for (; i < n; ) {
    const a = r.charCodeAt(i);
    if (sh(a))
      ++i;
    else
      break;
  }
  return _e(
    e,
    R.NAME,
    t,
    i,
    r.slice(t, i)
  );
}
const wh = 10, yc = 2;
function Oa(e) {
  return En(e, []);
}
function En(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return Eh(e, t);
    default:
      return String(e);
  }
}
function Eh(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const r = [...t, e];
  if (Dh(e)) {
    const n = e.toJSON();
    if (n !== e)
      return typeof n == "string" ? n : En(n, r);
  } else if (Array.isArray(e))
    return Th(e, r);
  return Ih(e, r);
}
function Dh(e) {
  return typeof e.toJSON == "function";
}
function Ih(e, t) {
  const r = Object.entries(e);
  return r.length === 0 ? "{}" : t.length > yc ? "[" + kh(e) + "]" : "{ " + r.map(
    ([i, a]) => i + ": " + En(a, t)
  ).join(", ") + " }";
}
function Th(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > yc)
    return "[Array]";
  const r = Math.min(wh, e.length), n = e.length - r, i = [];
  for (let a = 0; a < r; ++a)
    i.push(En(e[a], t));
  return n === 1 ? i.push("... 1 more item") : n > 1 && i.push(`... ${n} more items`), "[" + i.join(", ") + "]";
}
function kh(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const r = e.constructor.name;
    if (typeof r == "string" && r !== "")
      return r;
  }
  return t;
}
const Oh = globalThis.process && // eslint-disable-next-line no-undef
!0, xh = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  Oh ? function(t, r) {
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
        const o = Oa(t);
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
class vc {
  constructor(t, r = "GraphQL request", n = {
    line: 1,
    column: 1
  }) {
    typeof t == "string" || Xr(!1, `Body must be a string. Received: ${Oa(t)}.`), this.body = t, this.name = r, this.locationOffset = n, this.locationOffset.line > 0 || Xr(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || Xr(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function Ah(e) {
  return xh(e, vc);
}
function Fh(e, t) {
  const r = new Ch(e, t), n = r.parseDocument();
  return Object.defineProperty(n, "tokenCount", {
    enumerable: !1,
    value: r.tokenCount
  }), n;
}
class Ch {
  constructor(t, r = {}) {
    const n = Ah(t) ? t : new vc(t);
    this._lexer = new fh(n), this._options = r, this._tokenCounter = 0;
  }
  get tokenCount() {
    return this._tokenCounter;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const t = this.expectToken(R.NAME);
    return this.node(t, {
      kind: G.NAME,
      value: t.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: G.DOCUMENT,
      definitions: this.many(
        R.SOF,
        this.parseDefinition,
        R.EOF
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
    if (this.peek(R.BRACE_L))
      return this.parseOperationDefinition();
    const t = this.peekDescription(), r = t ? this._lexer.lookahead() : this._lexer.token;
    if (r.kind === R.NAME) {
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
        throw Ie(
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
    if (this.peek(R.BRACE_L))
      return this.node(t, {
        kind: G.OPERATION_DEFINITION,
        operation: Lt.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    const r = this.parseOperationType();
    let n;
    return this.peek(R.NAME) && (n = this.parseName()), this.node(t, {
      kind: G.OPERATION_DEFINITION,
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
    const t = this.expectToken(R.NAME);
    switch (t.value) {
      case "query":
        return Lt.QUERY;
      case "mutation":
        return Lt.MUTATION;
      case "subscription":
        return Lt.SUBSCRIPTION;
    }
    throw this.unexpected(t);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      R.PAREN_L,
      this.parseVariableDefinition,
      R.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: G.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(R.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(R.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const t = this._lexer.token;
    return this.expectToken(R.DOLLAR), this.node(t, {
      kind: G.VARIABLE,
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
      kind: G.SELECTION_SET,
      selections: this.many(
        R.BRACE_L,
        this.parseSelection,
        R.BRACE_R
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
    return this.peek(R.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const t = this._lexer.token, r = this.parseName();
    let n, i;
    return this.expectOptionalToken(R.COLON) ? (n = r, i = this.parseName()) : i = r, this.node(t, {
      kind: G.FIELD,
      alias: n,
      name: i,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek(R.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(t) {
    const r = t ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(R.PAREN_L, r, R.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(t = !1) {
    const r = this._lexer.token, n = this.parseName();
    return this.expectToken(R.COLON), this.node(r, {
      kind: G.ARGUMENT,
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
    this.expectToken(R.SPREAD);
    const r = this.expectOptionalKeyword("on");
    return !r && this.peek(R.NAME) ? this.node(t, {
      kind: G.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1)
    }) : this.node(t, {
      kind: G.INLINE_FRAGMENT,
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
      kind: G.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      variableDefinitions: this.parseVariableDefinitions(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    }) : this.node(t, {
      kind: G.FRAGMENT_DEFINITION,
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
      case R.BRACKET_L:
        return this.parseList(t);
      case R.BRACE_L:
        return this.parseObject(t);
      case R.INT:
        return this.advanceLexer(), this.node(r, {
          kind: G.INT,
          value: r.value
        });
      case R.FLOAT:
        return this.advanceLexer(), this.node(r, {
          kind: G.FLOAT,
          value: r.value
        });
      case R.STRING:
      case R.BLOCK_STRING:
        return this.parseStringLiteral();
      case R.NAME:
        switch (this.advanceLexer(), r.value) {
          case "true":
            return this.node(r, {
              kind: G.BOOLEAN,
              value: !0
            });
          case "false":
            return this.node(r, {
              kind: G.BOOLEAN,
              value: !1
            });
          case "null":
            return this.node(r, {
              kind: G.NULL
            });
          default:
            return this.node(r, {
              kind: G.ENUM,
              value: r.value
            });
        }
      case R.DOLLAR:
        if (t)
          if (this.expectToken(R.DOLLAR), this._lexer.token.kind === R.NAME) {
            const n = this._lexer.token.value;
            throw Ie(
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
      kind: G.STRING,
      value: t.value,
      block: t.kind === R.BLOCK_STRING
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
      kind: G.LIST,
      values: this.any(R.BRACKET_L, r, R.BRACKET_R)
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
      kind: G.OBJECT,
      fields: this.any(R.BRACE_L, r, R.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(t) {
    const r = this._lexer.token, n = this.parseName();
    return this.expectToken(R.COLON), this.node(r, {
      kind: G.OBJECT_FIELD,
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
    for (; this.peek(R.AT); )
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
    return this.expectToken(R.AT), this.node(r, {
      kind: G.DIRECTIVE,
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
    if (this.expectOptionalToken(R.BRACKET_L)) {
      const n = this.parseTypeReference();
      this.expectToken(R.BRACKET_R), r = this.node(t, {
        kind: G.LIST_TYPE,
        type: n
      });
    } else
      r = this.parseNamedType();
    return this.expectOptionalToken(R.BANG) ? this.node(t, {
      kind: G.NON_NULL_TYPE,
      type: r
    }) : r;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: G.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(R.STRING) || this.peek(R.BLOCK_STRING);
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
      R.BRACE_L,
      this.parseOperationTypeDefinition,
      R.BRACE_R
    );
    return this.node(t, {
      kind: G.SCHEMA_DEFINITION,
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
    this.expectToken(R.COLON);
    const n = this.parseNamedType();
    return this.node(t, {
      kind: G.OPERATION_TYPE_DEFINITION,
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
      kind: G.SCALAR_TYPE_DEFINITION,
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
      kind: G.OBJECT_TYPE_DEFINITION,
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
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(R.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      R.BRACE_L,
      this.parseFieldDefinition,
      R.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const t = this._lexer.token, r = this.parseDescription(), n = this.parseName(), i = this.parseArgumentDefs();
    this.expectToken(R.COLON);
    const a = this.parseTypeReference(), o = this.parseConstDirectives();
    return this.node(t, {
      kind: G.FIELD_DEFINITION,
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
      R.PAREN_L,
      this.parseInputValueDef,
      R.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const t = this._lexer.token, r = this.parseDescription(), n = this.parseName();
    this.expectToken(R.COLON);
    const i = this.parseTypeReference();
    let a;
    this.expectOptionalToken(R.EQUALS) && (a = this.parseConstValueLiteral());
    const o = this.parseConstDirectives();
    return this.node(t, {
      kind: G.INPUT_VALUE_DEFINITION,
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
      kind: G.INTERFACE_TYPE_DEFINITION,
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
      kind: G.UNION_TYPE_DEFINITION,
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
    return this.expectOptionalToken(R.EQUALS) ? this.delimitedMany(R.PIPE, this.parseNamedType) : [];
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
      kind: G.ENUM_TYPE_DEFINITION,
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
      R.BRACE_L,
      this.parseEnumValueDefinition,
      R.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const t = this._lexer.token, r = this.parseDescription(), n = this.parseEnumValueName(), i = this.parseConstDirectives();
    return this.node(t, {
      kind: G.ENUM_VALUE_DEFINITION,
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
      throw Ie(
        this._lexer.source,
        this._lexer.token.start,
        `${Wr(
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
      kind: G.INPUT_OBJECT_TYPE_DEFINITION,
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
      R.BRACE_L,
      this.parseInputValueDef,
      R.BRACE_R
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
    if (t.kind === R.NAME)
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
      R.BRACE_L,
      this.parseOperationTypeDefinition,
      R.BRACE_R
    );
    if (r.length === 0 && n.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: G.SCHEMA_EXTENSION,
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
      kind: G.SCALAR_TYPE_EXTENSION,
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
      kind: G.OBJECT_TYPE_EXTENSION,
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
      kind: G.INTERFACE_TYPE_EXTENSION,
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
      kind: G.UNION_TYPE_EXTENSION,
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
      kind: G.ENUM_TYPE_EXTENSION,
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
      kind: G.INPUT_OBJECT_TYPE_EXTENSION,
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
    this.expectKeyword("directive"), this.expectToken(R.AT);
    const n = this.parseName(), i = this.parseArgumentDefs(), a = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const o = this.parseDirectiveLocations();
    return this.node(t, {
      kind: G.DIRECTIVE_DEFINITION,
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
    return this.delimitedMany(R.PIPE, this.parseDirectiveLocation);
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
    if (Object.prototype.hasOwnProperty.call(Qi, r.value))
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
    return this._options.noLocation !== !0 && (r.loc = new ah(
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
    throw Ie(
      this._lexer.source,
      r.start,
      `Expected ${bc(t)}, found ${Wr(r)}.`
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
    if (r.kind === R.NAME && r.value === t)
      this.advanceLexer();
    else
      throw Ie(
        this._lexer.source,
        r.start,
        `Expected "${t}", found ${Wr(r)}.`
      );
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(t) {
    const r = this._lexer.token;
    return r.kind === R.NAME && r.value === t ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(t) {
    const r = t ?? this._lexer.token;
    return Ie(
      this._lexer.source,
      r.start,
      `Unexpected ${Wr(r)}.`
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
    if (r.kind !== R.EOF && (++this._tokenCounter, t !== void 0 && this._tokenCounter > t))
      throw Ie(
        this._lexer.source,
        r.start,
        `Document contains more that ${t} tokens. Parsing aborted.`
      );
  }
}
function Wr(e) {
  const t = e.value;
  return bc(e.kind) + (t != null ? ` "${t}"` : "");
}
function bc(e) {
  return dh(e) ? `"${e}"` : e;
}
function Ph(e) {
  return `"${e.replace($h, Nh)}"`;
}
const $h = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Nh(e) {
  return Rh[e.charCodeAt(0)];
}
const Rh = [
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
], Dn = Object.freeze({});
function Ue(e, t, r = dc) {
  const n = /* @__PURE__ */ new Map();
  for (const g of Object.values(G))
    n.set(g, Mh(t, g));
  let i, a = Array.isArray(e), o = [e], s = -1, u = [], c = e, l, d;
  const f = [], p = [];
  do {
    s++;
    const g = s === o.length, _ = g && u.length !== 0;
    if (g) {
      if (l = p.length === 0 ? void 0 : f[f.length - 1], c = d, d = p.pop(), _)
        if (a) {
          c = c.slice();
          let k = 0;
          for (const [P, w] of u) {
            const x = P - k;
            w === null ? (c.splice(x, 1), k++) : c[x] = w;
          }
        } else {
          c = { ...c };
          for (const [k, P] of u)
            c[k] = P;
        }
      s = i.index, o = i.keys, u = i.edits, a = i.inArray, i = i.prev;
    } else if (d) {
      if (l = a ? s : o[s], c = d[l], c == null)
        continue;
      f.push(l);
    }
    let I;
    if (!Array.isArray(c)) {
      var y, S;
      Ho(c) || Xr(!1, `Invalid AST Node: ${Oa(c)}.`);
      const k = g ? (y = n.get(c.kind)) === null || y === void 0 ? void 0 : y.leave : (S = n.get(c.kind)) === null || S === void 0 ? void 0 : S.enter;
      if (I = k?.call(t, c, l, d, f, p), I === Dn)
        break;
      if (I === !1) {
        if (!g) {
          f.pop();
          continue;
        }
      } else if (I !== void 0 && (u.push([l, I]), !g))
        if (Ho(I))
          c = I;
        else {
          f.pop();
          continue;
        }
    }
    if (I === void 0 && _ && u.push([l, c]), g)
      f.pop();
    else {
      var h;
      i = {
        inArray: a,
        index: s,
        keys: o,
        edits: u,
        prev: i
      }, a = Array.isArray(c), o = a ? c : (h = r[c.kind]) !== null && h !== void 0 ? h : [], s = -1, u = [], d && p.push(d), d = c;
    }
  } while (i !== void 0);
  return u.length !== 0 ? u[u.length - 1][1] : e;
}
function Mh(e, t) {
  const r = e[t];
  return typeof r == "object" ? r : typeof r == "function" ? {
    enter: r,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function Lh(e) {
  return Ue(e, Uh);
}
const jh = 80, Uh = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => J(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const t = te("(", J(e.variableDefinitions, ", "), ")"), r = J(
        [
          e.operation,
          J([e.name, t]),
          J(e.directives, " ")
        ],
        " "
      );
      return (r === "query" ? "" : r + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: r, directives: n }) => e + ": " + t + te(" = ", r) + te(" ", J(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => Le(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: r, directives: n, selectionSet: i }) {
      const a = te("", e, ": ") + t;
      let o = a + te("(", J(r, ", "), ")");
      return o.length > jh && (o = a + te(`(
`, Zr(J(r, `
`)), `
)`)), J([o, J(n, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + te(" ", J(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: r }) => J(
      [
        "...",
        te("on ", e),
        J(t, " "),
        r
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: r, directives: n, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${e}${te("(", J(r, ", "), ")")} on ${t} ${te("", J(n, " "), " ")}` + i
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
    leave: ({ value: e, block: t }) => t ? lh(e) : Ph(e)
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
    leave: ({ values: e }) => "[" + J(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + J(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + te("(", J(t, ", "), ")")
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
    leave: ({ description: e, directives: t, operationTypes: r }) => te("", e, `
`) + J(["schema", J(t, " "), Le(r)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: r }) => te("", e, `
`) + J(["scalar", t, J(r, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => te("", e, `
`) + J(
      [
        "type",
        t,
        te("implements ", J(r, " & ")),
        J(n, " "),
        Le(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: r, type: n, directives: i }) => te("", e, `
`) + t + (Ko(r) ? te(`(
`, Zr(J(r, `
`)), `
)`) : te("(", J(r, ", "), ")")) + ": " + n + te(" ", J(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: r, defaultValue: n, directives: i }) => te("", e, `
`) + J(
      [t + ": " + r, te("= ", n), J(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => te("", e, `
`) + J(
      [
        "interface",
        t,
        te("implements ", J(r, " & ")),
        J(n, " "),
        Le(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, types: n }) => te("", e, `
`) + J(
      ["union", t, J(r, " "), te("= ", J(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, values: n }) => te("", e, `
`) + J(["enum", t, J(r, " "), Le(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: r }) => te("", e, `
`) + J([t, J(r, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, fields: n }) => te("", e, `
`) + J(["input", t, J(r, " "), Le(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: r, repeatable: n, locations: i }) => te("", e, `
`) + "directive @" + t + (Ko(r) ? te(`(
`, Zr(J(r, `
`)), `
)`) : te("(", J(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + J(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => J(
      ["extend schema", J(e, " "), Le(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => J(["extend scalar", e, J(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => J(
      [
        "extend type",
        e,
        te("implements ", J(t, " & ")),
        J(r, " "),
        Le(n)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => J(
      [
        "extend interface",
        e,
        te("implements ", J(t, " & ")),
        J(r, " "),
        Le(n)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: r }) => J(
      [
        "extend union",
        e,
        J(t, " "),
        te("= ", J(r, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: r }) => J(["extend enum", e, J(t, " "), Le(r)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: r }) => J(["extend input", e, J(t, " "), Le(r)], " ")
  }
};
function J(e, t = "") {
  var r;
  return (r = e?.filter((n) => n).join(t)) !== null && r !== void 0 ? r : "";
}
function Le(e) {
  return te(`{
`, Zr(J(e, `
`)), `
}`);
}
function te(e, t, r = "") {
  return t != null && t !== "" ? e + t + r : "";
}
function Zr(e) {
  return te("  ", e.replace(/\n/g, `
  `));
}
function Ko(e) {
  var t;
  return (t = e?.some((r) => r.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function Xo(e) {
  return e.kind === G.FIELD || e.kind === G.FRAGMENT_SPREAD || e.kind === G.INLINE_FRAGMENT;
}
function Lr(e, t) {
  var r = e.directives;
  return !r || !r.length ? !0 : Vh(r).every(function(n) {
    var i = n.directive, a = n.ifArgument, o = !1;
    return a.value.kind === "Variable" ? (o = t && t[a.value.name.value], K(o !== void 0, 78, i.name.value)) : o = a.value.value, i.name.value === "skip" ? !o : o;
  });
}
function Fr(e, t, r) {
  var n = new Set(e), i = n.size;
  return Ue(t, {
    Directive: function(a) {
      if (n.delete(a.name.value) && (!r || !n.size))
        return Dn;
    }
  }), r ? !n.size : n.size < i;
}
function qh(e) {
  return e && Fr(["client", "export"], e, !0);
}
function Bh(e) {
  var t = e.name.value;
  return t === "skip" || t === "include";
}
function Vh(e) {
  var t = [];
  return e && e.length && e.forEach(function(r) {
    if (Bh(r)) {
      var n = r.arguments, i = r.name.value;
      K(n && n.length === 1, 79, i);
      var a = n[0];
      K(a.name && a.name.value === "if", 80, i);
      var o = a.value;
      K(o && (o.kind === "Variable" || o.kind === "BooleanValue"), 81, i), t.push({ directive: r, ifArgument: a });
    }
  }), t;
}
function Gh(e) {
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
  return globalThis.__DEV__ !== !1 && i && (i.value.kind === G.VARIABLE ? globalThis.__DEV__ !== !1 && K.warn(82) : i.value.kind !== G.STRING ? globalThis.__DEV__ !== !1 && K.warn(83) : i.value.value !== "migrate" && globalThis.__DEV__ !== !1 && K.warn(84, i.value.value)), i && "value" in i.value && i.value.value === "migrate" ? "migrate" : "unmask";
}
const zh = () => /* @__PURE__ */ Object.create(null), { forEach: Qh, slice: Zo } = Array.prototype, { hasOwnProperty: Wh } = Object.prototype;
class Ze {
  constructor(t = !0, r = zh) {
    this.weakness = t, this.makeData = r;
  }
  lookup() {
    return this.lookupArray(arguments);
  }
  lookupArray(t) {
    let r = this;
    return Qh.call(t, (n) => r = r.getChildTrie(n)), Wh.call(r, "data") ? r.data : r.data = this.makeData(Zo.call(t));
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
      a && (r = a.removeArray(Zo.call(t, 1)), !a.data && !a.weak && !(a.strong && a.strong.size) && i.delete(n));
    } else
      r = this.data, delete this.data;
    return r;
  }
  getChildTrie(t) {
    const r = this.mapFor(t, !0);
    let n = r.get(t);
    return n || r.set(t, n = new Ze(this.weakness, this.makeData)), n;
  }
  mapFor(t, r) {
    return this.weakness && Yh(t) ? this.weak || (r ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (r ? this.strong = /* @__PURE__ */ new Map() : void 0);
  }
}
function Yh(e) {
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
var Hh = je(function() {
  return navigator.product;
}) == "ReactNative", xt = typeof WeakMap == "function" && !(Hh && !global.HermesInternal), xa = typeof WeakSet == "function", Sc = typeof Symbol == "function" && typeof Symbol.for == "function", In = Sc && Symbol.asyncIterator;
je(function() {
  return window.document.createElement;
});
je(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function me(e) {
  return e !== null && typeof e == "object";
}
function Jh(e, t) {
  var r = t, n = [];
  e.definitions.forEach(function(a) {
    if (a.kind === "OperationDefinition")
      throw Ae(
        85,
        a.operation,
        a.name ? " named '".concat(a.name.value, "'") : ""
      );
    a.kind === "FragmentDefinition" && n.push(a);
  }), typeof r > "u" && (K(n.length === 1, 86, n.length), r = n[0].name.value);
  var i = C(C({}, e), { definitions: Oe([
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
function tr(e) {
  e === void 0 && (e = []);
  var t = {};
  return e.forEach(function(r) {
    t[r.name.value] = r;
  }), t;
}
function Tn(e, t) {
  switch (e.kind) {
    case "InlineFragment":
      return e;
    case "FragmentSpread": {
      var r = e.name.value;
      if (typeof t == "function")
        return t(r);
      var n = t && t[r];
      return K(n, 87, r), n || null;
    }
    default:
      return null;
  }
}
function Kh(e) {
  var t = !0;
  return Ue(e, {
    FragmentSpread: function(r) {
      if (t = !!r.directives && r.directives.some(function(n) {
        return n.name.value === "unmask";
      }), !t)
        return Dn;
    }
  }), t;
}
function Xh() {
}
class Yi {
  constructor(t = 1 / 0, r = Xh) {
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
function Hi() {
}
const Zh = Hi, em = typeof WeakRef < "u" ? WeakRef : function(e) {
  return { deref: () => e };
}, tm = typeof WeakMap < "u" ? WeakMap : Map, rm = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
  return {
    register: Hi,
    unregister: Hi
  };
}, nm = 10024;
class ln {
  constructor(t = 1 / 0, r = Zh) {
    this.max = t, this.dispose = r, this.map = new tm(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
      const n = this.unfinalizedNodes.values();
      for (let i = 0; i < nm; i++) {
        const a = n.next().value;
        if (!a)
          break;
        this.unfinalizedNodes.delete(a);
        const o = a.key;
        delete a.key, a.keyRef = new em(o), this.registry.register(o, a, a);
      }
      this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
    }, this.registry = new rm(this.deleteNode.bind(this));
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
var ri = /* @__PURE__ */ new WeakSet();
function _c(e) {
  e.size <= (e.max || -1) || ri.has(e) || (ri.add(e), setTimeout(function() {
    e.clean(), ri.delete(e);
  }, 100));
}
var wc = function(e, t) {
  var r = new ln(e, t);
  return r.set = function(n, i) {
    var a = ln.prototype.set.call(this, n, i);
    return _c(this), a;
  }, r;
}, im = function(e, t) {
  var r = new Yi(e, t);
  return r.set = function(n, i) {
    var a = Yi.prototype.set.call(this, n, i);
    return _c(this), a;
  }, r;
}, am = Symbol.for("apollo.cacheSize"), Je = C({}, Vi[am]), _t = {};
function Ec(e, t) {
  _t[e] = t;
}
var om = globalThis.__DEV__ !== !1 ? lm : void 0, sm = globalThis.__DEV__ !== !1 ? fm : void 0, um = globalThis.__DEV__ !== !1 ? Dc : void 0;
function cm() {
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
      Je[r] || n
    ];
  }));
}
function lm() {
  var e, t, r, n, i;
  if (globalThis.__DEV__ === !1)
    throw new Error("only supported in development mode");
  return {
    limits: cm(),
    sizes: C({ print: (e = _t.print) === null || e === void 0 ? void 0 : e.call(_t), parser: (t = _t.parser) === null || t === void 0 ? void 0 : t.call(_t), canonicalStringify: (r = _t.canonicalStringify) === null || r === void 0 ? void 0 : r.call(_t), links: Ki(this.link), queryManager: {
      getDocumentInfo: this.queryManager.transformCache.size,
      documentTransforms: Tc(this.queryManager.documentTransform)
    } }, (i = (n = this.cache).getMemoryInternals) === null || i === void 0 ? void 0 : i.call(n))
  };
}
function Dc() {
  return {
    cache: {
      fragmentQueryDocuments: ot(this.getFragmentDoc)
    }
  };
}
function fm() {
  var e = this.config.fragments;
  return C(C({}, Dc.apply(this)), { addTypenameDocumentTransform: Tc(this.addTypenameTransform), inMemoryCache: {
    executeSelectionSet: ot(this.storeReader.executeSelectionSet),
    executeSubSelectedArray: ot(this.storeReader.executeSubSelectedArray),
    maybeBroadcastWatch: ot(this.maybeBroadcastWatch)
  }, fragmentRegistry: {
    findFragmentSpreads: ot(e?.findFragmentSpreads),
    lookup: ot(e?.lookup),
    transform: ot(e?.transform)
  } });
}
function dm(e) {
  return !!e && "dirtyKey" in e;
}
function ot(e) {
  return dm(e) ? e.size : void 0;
}
function Ic(e) {
  return e != null;
}
function Tc(e) {
  return Ji(e).map(function(t) {
    return { cache: t };
  });
}
function Ji(e) {
  return e ? Oe(Oe([
    ot(e?.performWork)
  ], Ji(e?.left), !0), Ji(e?.right), !0).filter(Ic) : [];
}
function Ki(e) {
  var t;
  return e ? Oe(Oe([
    (t = e?.getMemoryInternals) === null || t === void 0 ? void 0 : t.call(e)
  ], Ki(e?.left), !0), Ki(e?.right), !0).filter(Ic) : [];
}
var lt = Object.assign(function(t) {
  return JSON.stringify(t, pm);
}, {
  reset: function() {
    jt = new im(
      Je.canonicalStringify || 1e3
      /* defaultCacheSizes.canonicalStringify */
    );
  }
});
globalThis.__DEV__ !== !1 && Ec("canonicalStringify", function() {
  return jt.size;
});
var jt;
lt.reset();
function pm(e, t) {
  if (t && typeof t == "object") {
    var r = Object.getPrototypeOf(t);
    if (r === Object.prototype || r === null) {
      var n = Object.keys(t);
      if (n.every(hm))
        return t;
      var i = JSON.stringify(n), a = jt.get(i);
      if (!a) {
        n.sort();
        var o = JSON.stringify(n);
        a = jt.get(o) || n, jt.set(i, a), jt.set(o, a);
      }
      var s = Object.create(r);
      return a.forEach(function(u) {
        s[u] = t[u];
      }), s;
    }
  }
  return t;
}
function hm(e, t, r) {
  return t === 0 || r[t - 1] <= e;
}
function Gt(e) {
  return { __ref: String(e) };
}
function fe(e) {
  return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function mm(e) {
  return me(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function gm(e) {
  return e.kind === "StringValue";
}
function ym(e) {
  return e.kind === "BooleanValue";
}
function vm(e) {
  return e.kind === "IntValue";
}
function bm(e) {
  return e.kind === "FloatValue";
}
function Sm(e) {
  return e.kind === "Variable";
}
function _m(e) {
  return e.kind === "ObjectValue";
}
function wm(e) {
  return e.kind === "ListValue";
}
function Em(e) {
  return e.kind === "EnumValue";
}
function Dm(e) {
  return e.kind === "NullValue";
}
function Ht(e, t, r, n) {
  if (vm(r) || bm(r))
    e[t.value] = Number(r.value);
  else if (ym(r) || gm(r))
    e[t.value] = r.value;
  else if (_m(r)) {
    var i = {};
    r.fields.map(function(o) {
      return Ht(i, o.name, o.value, n);
    }), e[t.value] = i;
  } else if (Sm(r)) {
    var a = (n || {})[r.name.value];
    e[t.value] = a;
  } else if (wm(r))
    e[t.value] = r.values.map(function(o) {
      var s = {};
      return Ht(s, t, o, n), s[t.value];
    });
  else if (Em(r))
    e[t.value] = r.value;
  else if (Dm(r))
    e[t.value] = null;
  else
    throw Ae(96, t.value, r.kind);
}
function Im(e, t) {
  var r = null;
  e.directives && (r = {}, e.directives.forEach(function(i) {
    r[i.name.value] = {}, i.arguments && i.arguments.forEach(function(a) {
      var o = a.name, s = a.value;
      return Ht(r[i.name.value], o, s, t);
    });
  }));
  var n = null;
  return e.arguments && e.arguments.length && (n = {}, e.arguments.forEach(function(i) {
    var a = i.name, o = i.value;
    return Ht(n, a, o, t);
  })), kc(e.name.value, n, r);
}
var Tm = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
], lr = lt, kc = Object.assign(function(e, t, r) {
  if (t && r && r.connection && r.connection.key)
    if (r.connection.filter && r.connection.filter.length > 0) {
      var n = r.connection.filter ? r.connection.filter : [];
      n.sort();
      var i = {};
      return n.forEach(function(s) {
        i[s] = t[s];
      }), "".concat(r.connection.key, "(").concat(lr(i), ")");
    } else
      return r.connection.key;
  var a = e;
  if (t) {
    var o = lr(t);
    a += "(".concat(o, ")");
  }
  return r && Object.keys(r).forEach(function(s) {
    Tm.indexOf(s) === -1 && (r[s] && Object.keys(r[s]).length ? a += "@".concat(s, "(").concat(lr(r[s]), ")") : a += "@".concat(s));
  }), a;
}, {
  setStringify: function(e) {
    var t = lr;
    return lr = e, t;
  }
});
function kn(e, t) {
  if (e.arguments && e.arguments.length) {
    var r = {};
    return e.arguments.forEach(function(n) {
      var i = n.name, a = n.value;
      return Ht(r, i, a, t);
    }), r;
  }
  return null;
}
function Ke(e) {
  return e.alias ? e.alias.value : e.name.value;
}
function Xi(e, t, r) {
  for (var n, i = 0, a = t.selections; i < a.length; i++) {
    var o = a[i];
    if (ht(o)) {
      if (o.name.value === "__typename")
        return e[Ke(o)];
    } else n ? n.push(o) : n = [o];
  }
  if (typeof e.__typename == "string")
    return e.__typename;
  if (n)
    for (var s = 0, u = n; s < u.length; s++) {
      var o = u[s], c = Xi(e, Tn(o, r).selectionSet, r);
      if (typeof c == "string")
        return c;
    }
}
function ht(e) {
  return e.kind === "Field";
}
function km(e) {
  return e.kind === "InlineFragment";
}
function rr(e) {
  K(e && e.kind === "Document", 88);
  var t = e.definitions.filter(function(r) {
    return r.kind !== "FragmentDefinition";
  }).map(function(r) {
    if (r.kind !== "OperationDefinition")
      throw Ae(89, r.kind);
    return r;
  });
  return K(t.length <= 1, 90, t.length), e;
}
function Ot(e) {
  return rr(e), e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition";
  })[0];
}
function br(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition" && !!t.name;
  }).map(function(t) {
    return t.name.value;
  })[0] || null;
}
function nr(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "FragmentDefinition";
  });
}
function Oc(e) {
  var t = Ot(e);
  return K(t && t.operation === "query", 91), t;
}
function xc(e) {
  K(e.kind === "Document", 92), K(e.definitions.length <= 1, 93);
  var t = e.definitions[0];
  return K(t.kind === "FragmentDefinition", 94), t;
}
function ir(e) {
  rr(e);
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
  throw Ae(95);
}
function Aa(e) {
  var t = /* @__PURE__ */ Object.create(null), r = e && e.variableDefinitions;
  return r && r.length && r.forEach(function(n) {
    n.defaultValue && Ht(t, n.variable.name, n.defaultValue);
  }), t;
}
let Te = null;
const es = {};
let Om = 1;
const xm = () => class {
  constructor() {
    this.id = [
      "slot",
      Om++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let t = Te; t; t = t.parent)
      if (this.id in t.slots) {
        const r = t.slots[this.id];
        if (r === es)
          break;
        return t !== Te && (Te.slots[this.id] = r), !0;
      }
    return Te && (Te.slots[this.id] = es), !1;
  }
  getValue() {
    if (this.hasValue())
      return Te.slots[this.id];
  }
  withValue(t, r, n, i) {
    const a = {
      __proto__: null,
      [this.id]: t
    }, o = Te;
    Te = { parent: o, slots: a };
    try {
      return r.apply(i, n);
    } finally {
      Te = o;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(t) {
    const r = Te;
    return function() {
      const n = Te;
      try {
        return Te = r, t.apply(this, arguments);
      } finally {
        Te = n;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(t, r, n) {
    if (Te) {
      const i = Te;
      try {
        return Te = null, t.apply(n, r);
      } finally {
        Te = i;
      }
    } else
      return t.apply(n, r);
  }
};
function ts(e) {
  try {
    return e();
  } catch {
  }
}
const ni = "@wry/context:Slot", Am = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  ts(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  ts(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), rs = Am, jr = rs[ni] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[ni] || (function(e) {
  try {
    Object.defineProperty(rs, ni, {
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
})(xm()), { bind: hv, noContext: mv } = jr, On = new jr(), { hasOwnProperty: Fm } = Object.prototype, Fa = Array.from || function(e) {
  const t = [];
  return e.forEach((r) => t.push(r)), t;
};
function Ca(e) {
  const { unsubscribe: t } = e;
  typeof t == "function" && (e.unsubscribe = void 0, t());
}
const Cr = [], Cm = 100;
function Jt(e, t) {
  if (!e)
    throw new Error(t || "assertion failure");
}
function Ac(e, t) {
  const r = e.length;
  return (
    // Unknown values are not equal to each other.
    r > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    r === t.length && // The underlying value or exception must be the same.
    e[r - 1] === t[r - 1]
  );
}
function Fc(e) {
  switch (e.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return e[0];
    case 2:
      throw e[1];
  }
}
function Cc(e) {
  return e.slice(0);
}
class xn {
  constructor(t) {
    this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++xn.count;
  }
  peek() {
    if (this.value.length === 1 && !mt(this))
      return ns(this), this.value[0];
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(t) {
    return Jt(!this.recomputing, "already recomputing"), ns(this), mt(this) ? Pm(this, t) : Fc(this.value);
  }
  setDirty() {
    this.dirty || (this.dirty = !0, Pc(this), Ca(this));
  }
  dispose() {
    this.setDirty(), Lc(this), Pa(this, (t, r) => {
      t.setDirty(), jc(t, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(t) {
    t.add(this), this.deps || (this.deps = Cr.pop() || /* @__PURE__ */ new Set()), this.deps.add(t);
  }
  forgetDeps() {
    this.deps && (Fa(this.deps).forEach((t) => t.delete(this)), this.deps.clear(), Cr.push(this.deps), this.deps = null);
  }
}
xn.count = 0;
function ns(e) {
  const t = On.getValue();
  if (t)
    return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), mt(e) ? Nc(t, e) : Rc(t, e), t;
}
function Pm(e, t) {
  return Lc(e), On.withValue(e, $m, [e, t]), Rm(e, t) && Nm(e), Fc(e.value);
}
function $m(e, t) {
  e.recomputing = !0;
  const { normalizeResult: r } = e;
  let n;
  r && e.value.length === 1 && (n = Cc(e.value)), e.value.length = 0;
  try {
    if (e.value[0] = e.fn.apply(null, t), r && n && !Ac(n, e.value))
      try {
        e.value[0] = r(e.value[0], n[0]);
      } catch {
      }
  } catch (i) {
    e.value[1] = i;
  }
  e.recomputing = !1;
}
function mt(e) {
  return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function Nm(e) {
  e.dirty = !1, !mt(e) && $c(e);
}
function Pc(e) {
  Pa(e, Nc);
}
function $c(e) {
  Pa(e, Rc);
}
function Pa(e, t) {
  const r = e.parents.size;
  if (r) {
    const n = Fa(e.parents);
    for (let i = 0; i < r; ++i)
      t(n[i], e);
  }
}
function Nc(e, t) {
  Jt(e.childValues.has(t)), Jt(mt(t));
  const r = !mt(e);
  if (!e.dirtyChildren)
    e.dirtyChildren = Cr.pop() || /* @__PURE__ */ new Set();
  else if (e.dirtyChildren.has(t))
    return;
  e.dirtyChildren.add(t), r && Pc(e);
}
function Rc(e, t) {
  Jt(e.childValues.has(t)), Jt(!mt(t));
  const r = e.childValues.get(t);
  r.length === 0 ? e.childValues.set(t, Cc(t.value)) : Ac(r, t.value) || e.setDirty(), Mc(e, t), !mt(e) && $c(e);
}
function Mc(e, t) {
  const r = e.dirtyChildren;
  r && (r.delete(t), r.size === 0 && (Cr.length < Cm && Cr.push(r), e.dirtyChildren = null));
}
function Lc(e) {
  e.childValues.size > 0 && e.childValues.forEach((t, r) => {
    jc(e, r);
  }), e.forgetDeps(), Jt(e.dirtyChildren === null);
}
function jc(e, t) {
  t.parents.delete(e), e.childValues.delete(t), Mc(e, t);
}
function Rm(e, t) {
  if (typeof e.subscribe == "function")
    try {
      Ca(e), e.unsubscribe = e.subscribe.apply(null, t);
    } catch {
      return e.setDirty(), !1;
    }
  return !0;
}
const Mm = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function Uc(e) {
  const t = /* @__PURE__ */ new Map();
  function r(n) {
    const i = On.getValue();
    if (i) {
      let a = t.get(n);
      a || t.set(n, a = /* @__PURE__ */ new Set()), i.dependOn(a);
    }
  }
  return r.dirty = function(i, a) {
    const o = t.get(i);
    if (o) {
      const s = a && Fm.call(Mm, a) ? a : "setDirty";
      Fa(o).forEach((u) => u[s]()), t.delete(i), Ca(o);
    }
  }, r;
}
let is;
function Lm(...e) {
  return (is || (is = new Ze(typeof WeakMap == "function"))).lookupArray(e);
}
const ii = /* @__PURE__ */ new Set();
function Pr(e, { max: t = Math.pow(2, 16), keyArgs: r, makeCacheKey: n = Lm, normalizeResult: i, subscribe: a, cache: o = Yi } = /* @__PURE__ */ Object.create(null)) {
  const s = typeof o == "function" ? new o(t, (f) => f.dispose()) : o, u = function() {
    const f = n.apply(null, r ? r.apply(null, arguments) : arguments);
    if (f === void 0)
      return e.apply(null, arguments);
    let p = s.get(f);
    p || (s.set(f, p = new xn(e)), p.normalizeResult = i, p.subscribe = a, p.forget = () => s.delete(f));
    const y = p.recompute(Array.prototype.slice.call(arguments));
    return s.set(f, p), ii.add(s), On.hasValue() || (ii.forEach((S) => S.clean()), ii.clear()), y;
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
function jm(e) {
  return e;
}
var qc = (
  /** @class */
  (function() {
    function e(t, r) {
      r === void 0 && (r = /* @__PURE__ */ Object.create(null)), this.resultCache = xa ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = t, r.getCacheKey && (this.getCacheKey = r.getCacheKey), this.cached = r.cache !== !1, this.resetCache();
    }
    return e.prototype.getCacheKey = function(t) {
      return [t];
    }, e.identity = function() {
      return new e(jm, { cache: !1 });
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
        var r = new Ze(xt);
        this.performWork = Pr(e.prototype.performWork.bind(this), {
          makeCacheKey: function(n) {
            var i = t.getCacheKey(n);
            if (i)
              return K(Array.isArray(i), 77), r.lookupArray(i);
          },
          max: Je["documentTransform.cache"],
          cache: ln
        });
      }
    }, e.prototype.performWork = function(t) {
      return rr(t), this.transform(t);
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
), Er, ut = Object.assign(function(e) {
  var t = Er.get(e);
  return t || (t = Lh(e), Er.set(e, t)), t;
}, {
  reset: function() {
    Er = new wc(
      Je.print || 2e3
      /* defaultCacheSizes.print */
    );
  }
});
ut.reset();
globalThis.__DEV__ !== !1 && Ec("print", function() {
  return Er ? Er.size : 0;
});
var ye = Array.isArray;
function Qe(e) {
  return Array.isArray(e) && e.length > 0;
}
var as = {
  kind: G.FIELD,
  name: {
    kind: G.NAME,
    value: "__typename"
  }
};
function Bc(e, t) {
  return !e || e.selectionSet.selections.every(function(r) {
    return r.kind === G.FRAGMENT_SPREAD && Bc(t[r.name.value], t);
  });
}
function Um(e) {
  return Bc(Ot(e) || xc(e), tr(nr(e))) ? null : e;
}
function qm(e) {
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
function os(e) {
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
function Vc(e, t) {
  rr(t);
  for (var r = os(""), n = os(""), i = function(g) {
    for (var _ = 0, I = void 0; _ < g.length && (I = g[_]); ++_)
      if (!ye(I)) {
        if (I.kind === G.OPERATION_DEFINITION)
          return r(I.name && I.name.value);
        if (I.kind === G.FRAGMENT_DEFINITION)
          return n(I.name.value);
      }
    return globalThis.__DEV__ !== !1 && K.error(97), null;
  }, a = 0, o = t.definitions.length - 1; o >= 0; --o)
    t.definitions[o].kind === G.OPERATION_DEFINITION && ++a;
  var s = qm(e), u = function(g) {
    return Qe(g) && g.map(s).some(function(_) {
      return _ && _.remove;
    });
  }, c = /* @__PURE__ */ new Map(), l = !1, d = {
    enter: function(g) {
      if (u(g.directives))
        return l = !0, null;
    }
  }, f = Ue(t, {
    // These two AST node types share the same implementation, defined above.
    Field: d,
    InlineFragment: d,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(g, _, I, k, P) {
        var w = i(P);
        w && w.variables.add(g.name.value);
      }
    },
    FragmentSpread: {
      enter: function(g, _, I, k, P) {
        if (u(g.directives))
          return l = !0, null;
        var w = i(P);
        w && w.fragmentSpreads.add(g.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(g, _, I, k) {
        c.set(JSON.stringify(k), g);
      },
      leave: function(g, _, I, k) {
        var P = c.get(JSON.stringify(k));
        if (g === P)
          return g;
        if (
          // This logic applies only if the document contains one or more
          // operations, since removing all fragments from a document containing
          // only fragments makes the document useless.
          a > 0 && g.selectionSet.selections.every(function(w) {
            return w.kind === G.FIELD && w.name.value === "__typename";
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
    return g.transitiveVars || (g.transitiveVars = new Set(g.variables), g.removed || g.fragmentSpreads.forEach(function(_) {
      p(n(_)).transitiveVars.forEach(function(I) {
        g.transitiveVars.add(I);
      });
    })), g;
  }, y = /* @__PURE__ */ new Set();
  f.definitions.forEach(function(g) {
    g.kind === G.OPERATION_DEFINITION ? p(r(g.name && g.name.value)).fragmentSpreads.forEach(function(_) {
      y.add(_);
    }) : g.kind === G.FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
    // definitions count as usages of their own fragment names. This heuristic
    // prevents accidentally removing all fragment definitions from the
    // document just because it contains no operations that use the fragments.
    a === 0 && !n(g.name.value).removed && y.add(g.name.value);
  }), y.forEach(function(g) {
    p(n(g)).fragmentSpreads.forEach(function(_) {
      y.add(_);
    });
  });
  var S = function(g) {
    return !!// A fragment definition will be removed if there are no spreads that refer
    // to it, or the fragment was explicitly removed because it had no fields
    // other than __typename.
    (!y.has(g) || n(g).removed);
  }, h = {
    enter: function(g) {
      if (S(g.name.value))
        return null;
    }
  };
  return Um(Ue(f, {
    // If the fragment is going to be removed, then leaving any dangling
    // FragmentSpread nodes with the same name would be a mistake.
    FragmentSpread: h,
    // This is where the fragment definition is actually removed.
    FragmentDefinition: h,
    OperationDefinition: {
      leave: function(g) {
        if (g.variableDefinitions) {
          var _ = p(
            // If an operation is anonymous, we use the empty string as its key.
            r(g.name && g.name.value)
          ).transitiveVars;
          if (_.size < g.variableDefinitions.length)
            return C(C({}, g), { variableDefinitions: g.variableDefinitions.filter(function(I) {
              return _.has(I.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var $a = Object.assign(function(e) {
  return Ue(e, {
    SelectionSet: {
      enter: function(t, r, n) {
        if (!(n && n.kind === G.OPERATION_DEFINITION)) {
          var i = t.selections;
          if (i) {
            var a = i.some(function(s) {
              return ht(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!a) {
              var o = n;
              if (!(ht(o) && o.directives && o.directives.some(function(s) {
                return s.name.value === "export";
              })))
                return C(C({}, t), { selections: Oe(Oe([], i, !0), [as], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(e) {
    return e === as;
  }
});
function Bm(e) {
  var t = ir(e), r = t.operation;
  if (r === "query")
    return e;
  var n = Ue(e, {
    OperationDefinition: {
      enter: function(i) {
        return C(C({}, i), { operation: "query" });
      }
    }
  });
  return n;
}
function Gc(e) {
  rr(e);
  var t = Vc([
    {
      test: function(r) {
        return r.name.value === "client";
      },
      remove: !0
    }
  ], e);
  return t;
}
function Vm(e) {
  return rr(e), Ue(e, {
    FragmentSpread: function(t) {
      var r;
      if (!(!((r = t.directives) === null || r === void 0) && r.some(function(n) {
        return n.name.value === "unmask";
      })))
        return C(C({}, t), { directives: Oe(Oe([], t.directives || [], !0), [
          {
            kind: G.DIRECTIVE,
            name: { kind: G.NAME, value: "nonreactive" }
          }
        ], !1) });
    }
  });
}
var Gm = Object.prototype.hasOwnProperty;
function ss() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return An(e);
}
function An(e) {
  var t = e[0] || {}, r = e.length;
  if (r > 1)
    for (var n = new gt(), i = 1; i < r; ++i)
      t = n.merge(t, e[i]);
  return t;
}
var zm = function(e, t, r) {
  return this.merge(e[r], t[r]);
}, gt = (
  /** @class */
  (function() {
    function e(t) {
      t === void 0 && (t = zm), this.reconciler = t, this.isObject = me, this.pastCopies = /* @__PURE__ */ new Set();
    }
    return e.prototype.merge = function(t, r) {
      for (var n = this, i = [], a = 2; a < arguments.length; a++)
        i[a - 2] = arguments[a];
      return me(r) && me(t) ? (Object.keys(r).forEach(function(o) {
        if (Gm.call(t, o)) {
          var s = t[o];
          if (r[o] !== s) {
            var u = n.reconciler.apply(n, Oe([
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
      return me(t) && (this.pastCopies.has(t) || (Array.isArray(t) ? t = t.slice(0) : t = C({ __proto__: Object.getPrototypeOf(t) }, t), this.pastCopies.add(t))), t;
    }, e;
  })()
);
function Qm(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Wm(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wm(e, t) {
  if (e) {
    if (typeof e == "string") return us(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return us(e, t);
  }
}
function us(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function cs(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Na(e, t, r) {
  return t && cs(e.prototype, t), r && cs(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Ra = function() {
  return typeof Symbol == "function";
}, Ma = function(e) {
  return Ra() && !!Symbol[e];
}, La = function(e) {
  return Ma(e) ? Symbol[e] : "@@" + e;
};
Ra() && !Ma("observable") && (Symbol.observable = Symbol("observable"));
var Ym = La("iterator"), Zi = La("observable"), zc = La("species");
function fn(e, t) {
  var r = e[t];
  if (r != null) {
    if (typeof r != "function") throw new TypeError(r + " is not a function");
    return r;
  }
}
function fr(e) {
  var t = e.constructor;
  return t !== void 0 && (t = t[zc], t === null && (t = void 0)), t !== void 0 ? t : le;
}
function Hm(e) {
  return e instanceof le;
}
function Kt(e) {
  Kt.log ? Kt.log(e) : setTimeout(function() {
    throw e;
  });
}
function en(e) {
  Promise.resolve().then(function() {
    try {
      e();
    } catch (t) {
      Kt(t);
    }
  });
}
function Qc(e) {
  var t = e._cleanup;
  if (t !== void 0 && (e._cleanup = void 0, !!t))
    try {
      if (typeof t == "function")
        t();
      else {
        var r = fn(t, "unsubscribe");
        r && r.call(t);
      }
    } catch (n) {
      Kt(n);
    }
}
function ea(e) {
  e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function Jm(e) {
  var t = e._queue;
  if (t) {
    e._queue = void 0, e._state = "ready";
    for (var r = 0; r < t.length && (Wc(e, t[r].type, t[r].value), e._state !== "closed"); ++r)
      ;
  }
}
function Wc(e, t, r) {
  e._state = "running";
  var n = e._observer;
  try {
    var i = fn(n, t);
    switch (t) {
      case "next":
        i && i.call(n, r);
        break;
      case "error":
        if (ea(e), i) i.call(n, r);
        else throw r;
        break;
      case "complete":
        ea(e), i && i.call(n);
        break;
    }
  } catch (a) {
    Kt(a);
  }
  e._state === "closed" ? Qc(e) : e._state === "running" && (e._state = "ready");
}
function ai(e, t, r) {
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
      }], en(function() {
        return Jm(e);
      });
      return;
    }
    Wc(e, t, r);
  }
}
var Km = /* @__PURE__ */ (function() {
  function e(r, n) {
    this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
    var i = new Xm(this);
    try {
      this._cleanup = n.call(void 0, i);
    } catch (a) {
      i.error(a);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var t = e.prototype;
  return t.unsubscribe = function() {
    this._state !== "closed" && (ea(this), Qc(this));
  }, Na(e, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), e;
})(), Xm = /* @__PURE__ */ (function() {
  function e(r) {
    this._subscription = r;
  }
  var t = e.prototype;
  return t.next = function(n) {
    ai(this._subscription, "next", n);
  }, t.error = function(n) {
    ai(this._subscription, "error", n);
  }, t.complete = function() {
    ai(this._subscription, "complete");
  }, Na(e, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), e;
})(), le = /* @__PURE__ */ (function() {
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
    }), new Km(n, this._subscriber);
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
    var a = fr(this);
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
    var a = fr(this);
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
    var a = fr(this), o = arguments.length > 1, s = !1, u = arguments[1], c = u;
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
    var s = fr(this);
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
    var a = fr(this);
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
  }, t[Zi] = function() {
    return this;
  }, e.from = function(n) {
    var i = typeof this == "function" ? this : e;
    if (n == null) throw new TypeError(n + " is not an object");
    var a = fn(n, Zi);
    if (a) {
      var o = a.call(n);
      if (Object(o) !== o) throw new TypeError(o + " is not an object");
      return Hm(o) && o.constructor === i ? o : new i(function(s) {
        return o.subscribe(s);
      });
    }
    if (Ma("iterator") && (a = fn(n, Ym), a))
      return new i(function(s) {
        en(function() {
          if (!s.closed) {
            for (var u = Qm(a.call(n)), c; !(c = u()).done; ) {
              var l = c.value;
              if (s.next(l), s.closed) return;
            }
            s.complete();
          }
        });
      });
    if (Array.isArray(n))
      return new i(function(s) {
        en(function() {
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
      en(function() {
        if (!s.closed) {
          for (var u = 0; u < i.length; ++u)
            if (s.next(i[u]), s.closed) return;
          s.complete();
        }
      });
    });
  }, Na(e, null, [{
    key: zc,
    get: function() {
      return this;
    }
  }]), e;
})();
Ra() && Object.defineProperty(le, Symbol("extensions"), {
  value: {
    symbol: Zi,
    hostReportError: Kt
  },
  configurable: !0
});
function Zm(e) {
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
var Nt;
typeof self < "u" ? Nt = self : typeof window < "u" ? Nt = window : typeof global < "u" ? Nt = global : typeof module < "u" ? Nt = module : Nt = Function("return this")();
Zm(Nt);
var ls = le.prototype, fs = "@@observable";
ls[fs] || (ls[fs] = function() {
  return this;
});
function eg(e) {
  return e.catch(function() {
  }), e;
}
var tg = Object.prototype.toString;
function Yc(e) {
  return ta(e);
}
function ta(e, t) {
  switch (tg.call(e)) {
    case "[object Array]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var r = e.slice(0);
      return t.set(e, r), r.forEach(function(i, a) {
        r[a] = ta(i, t);
      }), r;
    }
    case "[object Object]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var n = Object.create(Object.getPrototypeOf(e));
      return t.set(e, n), Object.keys(e).forEach(function(i) {
        n[i] = ta(e[i], t);
      }), n;
    }
    default:
      return e;
  }
}
function rg(e) {
  var t = /* @__PURE__ */ new Set([e]);
  return t.forEach(function(r) {
    me(r) && ng(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
      me(r[n]) && t.add(r[n]);
    });
  }), e;
}
function ng(e) {
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
function dn(e) {
  return globalThis.__DEV__ !== !1 && rg(e), e;
}
function Dr(e, t, r) {
  var n = [];
  e.forEach(function(i) {
    return i[t] && n.push(i);
  }), n.forEach(function(i) {
    return i[t](r);
  });
}
function oi(e, t, r) {
  return new le(function(n) {
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
function Hc(e) {
  function t(r) {
    Object.defineProperty(e, r, { value: le });
  }
  return Sc && Symbol.species && t(Symbol.species), t("@@species"), e;
}
function ds(e) {
  return e && typeof e.then == "function";
}
var Rt = (
  /** @class */
  (function(e) {
    Re(t, e);
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
          n.sub !== null && (n.latest = ["next", i], n.notify("next", i), Dr(n.observers, "next", i));
        },
        error: function(i) {
          var a = n.sub;
          a !== null && (a && setTimeout(function() {
            return a.unsubscribe();
          }), n.sub = null, n.latest = ["error", i], n.reject(i), n.notify("error", i), Dr(n.observers, "error", i));
        },
        complete: function() {
          var i = n, a = i.sub, o = i.sources, s = o === void 0 ? [] : o;
          if (a !== null) {
            var u = s.shift();
            u ? ds(u) ? u.then(function(c) {
              return n.sub = c.subscribe(n.handlers);
            }, n.handlers.error) : n.sub = u.subscribe(n.handlers) : (a && setTimeout(function() {
              return a.unsubscribe();
            }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), Dr(n.observers, "complete"));
          }
        }
      }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(i) {
        n.reject(i), n.sources = [], n.handlers.error(i);
      }, n.promise.catch(function(i) {
      }), typeof r == "function" && (r = [new le(r)]), ds(r) ? r.then(function(i) {
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
  })(le)
);
Hc(Rt);
function zt(e) {
  return "incremental" in e;
}
function ig(e) {
  return "hasNext" in e && "data" in e;
}
function ag(e) {
  return zt(e) || ig(e);
}
function og(e) {
  return me(e) && "payload" in e;
}
function Jc(e, t) {
  var r = e, n = new gt();
  return zt(t) && Qe(t.incremental) && t.incremental.forEach(function(i) {
    for (var a = i.data, o = i.path, s = o.length - 1; s >= 0; --s) {
      var u = o[s], c = !isNaN(+u), l = c ? [] : {};
      l[u] = a, a = l;
    }
    r = n.merge(r, a);
  }), r;
}
function tn(e) {
  var t = ra(e);
  return Qe(t);
}
function ra(e) {
  var t = Qe(e.errors) ? e.errors.slice(0) : [];
  return zt(e) && Qe(e.incremental) && e.incremental.forEach(function(r) {
    r.errors && t.push.apply(t, r.errors);
  }), t;
}
function Xt() {
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
function si(e, t) {
  return Xt(e, t, t.variables && {
    variables: Xt(C(C({}, e && e.variables), t.variables))
  });
}
function ui(e) {
  return new le(function(t) {
    t.error(e);
  });
}
var Kc = function(e, t, r) {
  var n = new Error(r);
  throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = t, n;
};
function sg(e) {
  for (var t = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], r = 0, n = Object.keys(e); r < n.length; r++) {
    var i = n[r];
    if (t.indexOf(i) < 0)
      throw Ae(46, i);
  }
  return e;
}
function ug(e, t) {
  var r = C({}, e), n = function(a) {
    typeof a == "function" ? r = C(C({}, r), a(r)) : r = C(C({}, r), a);
  }, i = function() {
    return C({}, r);
  };
  return Object.defineProperty(t, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(t, "getContext", {
    enumerable: !1,
    value: i
  }), t;
}
function cg(e) {
  var t = {
    variables: e.variables || {},
    extensions: e.extensions || {},
    operationName: e.operationName,
    query: e.query
  };
  return t.operationName || (t.operationName = typeof t.query != "string" ? br(t.query) || void 0 : ""), t;
}
function lg(e, t) {
  var r = C({}, e), n = new Set(Object.keys(e));
  return Ue(t, {
    Variable: function(i, a, o) {
      o && o.kind !== "VariableDefinition" && n.delete(i.name.value);
    }
  }), n.forEach(function(i) {
    delete r[i];
  }), r;
}
function ps(e, t) {
  return t ? t(e) : le.of();
}
function dr(e) {
  return typeof e == "function" ? new qe(e) : e;
}
function Yr(e) {
  return e.request.length <= 1;
}
var qe = (
  /** @class */
  (function() {
    function e(t) {
      t && (this.request = t);
    }
    return e.empty = function() {
      return new e(function() {
        return le.of();
      });
    }, e.from = function(t) {
      return t.length === 0 ? e.empty() : t.map(dr).reduce(function(r, n) {
        return r.concat(n);
      });
    }, e.split = function(t, r, n) {
      var i = dr(r), a = dr(n || new e(ps)), o;
      return Yr(i) && Yr(a) ? o = new e(function(s) {
        return t(s) ? i.request(s) || le.of() : a.request(s) || le.of();
      }) : o = new e(function(s, u) {
        return t(s) ? i.request(s, u) || le.of() : a.request(s, u) || le.of();
      }), Object.assign(o, { left: i, right: a });
    }, e.execute = function(t, r) {
      return t.request(ug(r.context, cg(sg(r)))) || le.of();
    }, e.concat = function(t, r) {
      var n = dr(t);
      if (Yr(n))
        return globalThis.__DEV__ !== !1 && K.warn(38, n), n;
      var i = dr(r), a;
      return Yr(i) ? a = new e(function(o) {
        return n.request(o, function(s) {
          return i.request(s) || le.of();
        }) || le.of();
      }) : a = new e(function(o, s) {
        return n.request(o, function(u) {
          return i.request(u, s) || le.of();
        }) || le.of();
      }), Object.assign(a, { left: n, right: i });
    }, e.prototype.split = function(t, r, n) {
      return this.concat(e.split(t, r, n || new e(ps)));
    }, e.prototype.concat = function(t) {
      return e.concat(this, t);
    }, e.prototype.request = function(t, r) {
      throw Ae(39);
    }, e.prototype.onError = function(t, r) {
      if (r && r.error)
        return r.error(t), !1;
      throw t;
    }, e.prototype.setOnError = function(t) {
      return this.onError = t, this;
    }, e;
  })()
), fg = qe.from, dg = qe.split, na = qe.execute;
function pg(e) {
  var t, r = e[Symbol.asyncIterator]();
  return t = {
    next: function() {
      return r.next();
    }
  }, t[Symbol.asyncIterator] = function() {
    return this;
  }, t;
}
function hg(e) {
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
  return In && (l[Symbol.asyncIterator] = function() {
    return this;
  }), l;
}
function mg(e) {
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
  return In && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
function hs(e) {
  var t = {
    next: function() {
      return e.read();
    }
  };
  return In && (t[Symbol.asyncIterator] = function() {
    return this;
  }), t;
}
function gg(e) {
  return !!e.body;
}
function yg(e) {
  return !!e.getReader;
}
function vg(e) {
  return !!(In && e[Symbol.asyncIterator]);
}
function bg(e) {
  return !!e.stream;
}
function Sg(e) {
  return !!e.arrayBuffer;
}
function _g(e) {
  return !!e.pipe;
}
function wg(e) {
  var t = e;
  if (gg(e) && (t = e.body), vg(t))
    return pg(t);
  if (yg(t))
    return hs(t.getReader());
  if (bg(t))
    return hs(t.stream().getReader());
  if (Sg(t))
    return mg(t.arrayBuffer());
  if (_g(t))
    return hg(t);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var Fn = Symbol();
function Xc(e) {
  return e.extensions ? Array.isArray(e.extensions[Fn]) : !1;
}
function Zc(e) {
  return e.hasOwnProperty("graphQLErrors");
}
var Eg = function(e) {
  var t = Oe(Oe(Oe([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
  return e.networkError && t.push(e.networkError), t.map(function(r) {
    return me(r) && r.message || "Error message not found.";
  }).join(`
`);
}, st = (
  /** @class */
  (function(e) {
    Re(t, e);
    function t(r) {
      var n = r.graphQLErrors, i = r.protocolErrors, a = r.clientErrors, o = r.networkError, s = r.errorMessage, u = r.extraInfo, c = e.call(this, s) || this;
      return c.name = "ApolloError", c.graphQLErrors = n || [], c.protocolErrors = i || [], c.clientErrors = a || [], c.networkError = o || null, c.message = s || Eg(c), c.extraInfo = u, c.cause = Oe(Oe(Oe([
        o
      ], n || [], !0), i || [], !0), a || [], !0).find(function(l) {
        return !!l;
      }) || null, c.__proto__ = t.prototype, c;
    }
    return t;
  })(Error)
), ms = Object.prototype.hasOwnProperty;
function Dg(e, t) {
  return it(this, void 0, void 0, function() {
    var r, n, i, a, o, s, u, c, l, d, f, p, y, S, h, g, _, I, k, P, w, x, v, D;
    return at(this, function(b) {
      switch (b.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          r = new TextDecoder("utf-8"), n = (D = e.headers) === null || D === void 0 ? void 0 : D.get("content-type"), i = "boundary=", a = n?.includes(i) ? n?.substring(n?.indexOf(i) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", o = `\r
--`.concat(a), s = "", u = wg(e), c = !0, b.label = 1;
        case 1:
          return c ? [4, u.next()] : [3, 3];
        case 2:
          for (l = b.sent(), d = l.value, f = l.done, p = typeof d == "string" ? d : r.decode(d), y = s.length - o.length + 1, c = !f, s += p, S = s.indexOf(o, y); S > -1; ) {
            if (h = void 0, x = [
              s.slice(0, S),
              s.slice(S + o.length)
            ], h = x[0], s = x[1], g = h.indexOf(`\r
\r
`), _ = Ig(h.slice(0, g)), I = _["content-type"], I && I.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (k = h.slice(g), k) {
              if (P = el(e, k), Object.keys(P).length > 1 || "data" in P || "incremental" in P || "errors" in P || "payload" in P)
                if (og(P)) {
                  if (w = {}, "payload" in P) {
                    if (Object.keys(P).length === 1 && P.payload === null)
                      return [
                        2
                        /*return*/
                      ];
                    w = C({}, P.payload);
                  }
                  "errors" in P && (w = C(C({}, w), { extensions: C(C({}, "extensions" in w ? w.extensions : null), (v = {}, v[Fn] = P.errors, v)) })), t(w);
                } else
                  t(P);
              else if (
                // If the chunk contains only a "hasNext: false", we can call
                // observer.complete() immediately.
                Object.keys(P).length === 1 && "hasNext" in P && !P.hasNext
              )
                return [
                  2
                  /*return*/
                ];
            }
            S = s.indexOf(o);
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
function Ig(e) {
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
function el(e, t) {
  if (e.status >= 300) {
    var r = function() {
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    };
    Kc(e, r(), "Response not successful: Received status code ".concat(e.status));
  }
  try {
    return JSON.parse(t);
  } catch (i) {
    var n = i;
    throw n.name = "ServerParseError", n.response = e, n.statusCode = e.status, n.bodyText = t, n;
  }
}
function Tg(e, t) {
  e.result && e.result.errors && e.result.data && t.next(e.result), t.error(e);
}
function tl(e) {
  return function(t) {
    return t.text().then(function(r) {
      return el(t, r);
    }).then(function(r) {
      return !Array.isArray(r) && !ms.call(r, "data") && !ms.call(r, "errors") && Kc(t, r, "Server response was missing for query '".concat(Array.isArray(e) ? e.map(function(n) {
        return n.operationName;
      }) : e.operationName, "'.")), r;
    });
  };
}
var $r = function(e, t) {
  var r;
  try {
    r = JSON.stringify(e);
  } catch (i) {
    var n = Ae(42, t, i.message);
    throw n.parseError = i, n;
  }
  return r;
}, kg = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, Og = {
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
}, xg = {
  method: "POST"
}, rl = {
  http: kg,
  headers: Og,
  options: xg
}, nl = function(e, t) {
  return t(e);
};
function il(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = {}, a = {};
  r.forEach(function(d) {
    i = C(C(C({}, i), d.options), { headers: C(C({}, i.headers), d.headers) }), d.credentials && (i.credentials = d.credentials), a = C(C({}, a), d.http);
  }), i.headers && (i.headers = Ag(i.headers, a.preserveHeaderCase));
  var o = e.operationName, s = e.extensions, u = e.variables, c = e.query, l = { operationName: o, variables: u };
  return a.includeExtensions && (l.extensions = s), a.includeQuery && (l.query = t(c, ut)), {
    options: i,
    body: l
  };
}
function Ag(e, t) {
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
var Fg = function(e) {
  if (!e && typeof fetch > "u")
    throw Ae(40);
}, Cg = function() {
  if (typeof AbortController > "u")
    return { controller: !1, signal: !1 };
  var e = new AbortController(), t = e.signal;
  return { controller: e, signal: t };
}, al = function(e, t) {
  var r = e.getContext(), n = r.uri;
  return n || (typeof t == "function" ? t(e) : t || "/graphql");
};
function ol(e, t) {
  var r = [], n = function(d, f) {
    r.push("".concat(d, "=").concat(encodeURIComponent(f)));
  };
  if ("query" in t && n("query", t.query), t.operationName && n("operationName", t.operationName), t.variables) {
    var i = void 0;
    try {
      i = $r(t.variables, "Variables map");
    } catch (d) {
      return { parseError: d };
    }
    n("variables", i);
  }
  if (t.extensions) {
    var a = void 0;
    try {
      a = $r(t.extensions, "Extensions map");
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
var gs = je(function() {
  return fetch;
}), Pg = function(e) {
  e === void 0 && (e = {});
  var t = e.uri, r = t === void 0 ? "/graphql" : t, n = e.fetch, i = e.print, a = i === void 0 ? nl : i, o = e.includeExtensions, s = e.preserveHeaderCase, u = e.useGETForQueries, c = e.includeUnusedVariables, l = c === void 0 ? !1 : c, d = We(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  globalThis.__DEV__ !== !1 && Fg(n || gs);
  var f = {
    http: { includeExtensions: o, preserveHeaderCase: s },
    options: d.fetchOptions,
    credentials: d.credentials,
    headers: d.headers
  };
  return new qe(function(p) {
    var y = al(p, r), S = p.getContext(), h = {};
    if (S.clientAwareness) {
      var g = S.clientAwareness, _ = g.name, I = g.version;
      _ && (h["apollographql-client-name"] = _), I && (h["apollographql-client-version"] = I);
    }
    var k = C(C({}, h), S.headers), P = {
      http: S.http,
      options: S.fetchOptions,
      credentials: S.credentials,
      headers: k
    };
    if (Fr(["client"], p.query)) {
      var w = Gc(p.query);
      if (!w)
        return ui(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      p.query = w;
    }
    var x = il(p, a, rl, f, P), v = x.options, D = x.body;
    D.variables && !l && (D.variables = lg(D.variables, p.query));
    var b;
    !v.signal && typeof AbortController < "u" && (b = new AbortController(), v.signal = b.signal);
    var A = function(M) {
      return M.kind === "OperationDefinition" && M.operation === "mutation";
    }, $ = function(M) {
      return M.kind === "OperationDefinition" && M.operation === "subscription";
    }, Q = $(ir(p.query)), H = Fr(["defer"], p.query);
    if (u && !p.query.definitions.some(A) && (v.method = "GET"), H || Q) {
      v.headers = v.headers || {};
      var j = "multipart/mixed;";
      Q && H && globalThis.__DEV__ !== !1 && K.warn(41), Q ? j += "boundary=graphql;subscriptionSpec=1.0,application/json" : H && (j += "deferSpec=20220824,application/json"), v.headers.accept = j;
    }
    if (v.method === "GET") {
      var q = ol(y, D), O = q.newURI, N = q.parseError;
      if (N)
        return ui(N);
      y = O;
    } else
      try {
        v.body = $r(D, "Payload");
      } catch (M) {
        return ui(M);
      }
    return new le(function(M) {
      var W = n || je(function() {
        return fetch;
      }) || gs, Y = M.next.bind(M);
      return W(y, v).then(function(Z) {
        var ne;
        p.setContext({ response: Z });
        var se = (ne = Z.headers) === null || ne === void 0 ? void 0 : ne.get("content-type");
        return se !== null && /^multipart\/mixed/i.test(se) ? Dg(Z, Y) : tl(p)(Z).then(Y);
      }).then(function() {
        b = void 0, M.complete();
      }).catch(function(Z) {
        b = void 0, Tg(Z, M);
      }), function() {
        b && b.abort();
      };
    });
  });
}, $g = (
  /** @class */
  (function(e) {
    Re(t, e);
    function t(r) {
      r === void 0 && (r = {});
      var n = e.call(this, Pg(r).request) || this;
      return n.options = r, n;
    }
    return t;
  })(qe)
);
const { toString: ys, hasOwnProperty: Ng } = Object.prototype, vs = Function.prototype.toString, ia = /* @__PURE__ */ new Map();
function pe(e, t) {
  try {
    return aa(e, t);
  } finally {
    ia.clear();
  }
}
function aa(e, t) {
  if (e === t)
    return !0;
  const r = ys.call(e), n = ys.call(t);
  if (r !== n)
    return !1;
  switch (r) {
    case "[object Array]":
      if (e.length !== t.length)
        return !1;
    // Fall through to object case...
    case "[object Object]": {
      if (Ss(e, t))
        return !0;
      const i = bs(e), a = bs(t), o = i.length;
      if (o !== a.length)
        return !1;
      for (let s = 0; s < o; ++s)
        if (!Ng.call(t, i[s]))
          return !1;
      for (let s = 0; s < o; ++s) {
        const u = i[s];
        if (!aa(e[u], t[u]))
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
      if (Ss(e, t))
        return !0;
      const i = e.entries(), a = r === "[object Map]";
      for (; ; ) {
        const o = i.next();
        if (o.done)
          break;
        const [s, u] = o.value;
        if (!t.has(s) || a && !aa(u, t.get(s)))
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
      const i = vs.call(e);
      return i !== vs.call(t) ? !1 : !Lg(i, Mg);
    }
  }
  return !1;
}
function bs(e) {
  return Object.keys(e).filter(Rg, e);
}
function Rg(e) {
  return this[e] !== void 0;
}
const Mg = "{ [native code] }";
function Lg(e, t) {
  const r = e.length - t.length;
  return r >= 0 && e.indexOf(t, r) === r;
}
function Ss(e, t) {
  let r = ia.get(e);
  if (r) {
    if (r.has(t))
      return !0;
  } else
    ia.set(e, r = /* @__PURE__ */ new Set());
  return r.add(t), !1;
}
function sl(e, t, r, n) {
  var i = t.data, a = We(t, ["data"]), o = r.data, s = We(r, ["data"]);
  return pe(a, s) && rn(ir(e).selectionSet, i, o, {
    fragmentMap: tr(nr(e)),
    variables: n
  });
}
function rn(e, t, r, n) {
  if (t === r)
    return !0;
  var i = /* @__PURE__ */ new Set();
  return e.selections.every(function(a) {
    if (i.has(a) || (i.add(a), !Lr(a, n.variables)) || _s(a))
      return !0;
    if (ht(a)) {
      var o = Ke(a), s = t && t[o], u = r && r[o], c = a.selectionSet;
      if (!c)
        return pe(s, u);
      var l = Array.isArray(s), d = Array.isArray(u);
      if (l !== d)
        return !1;
      if (l && d) {
        var f = s.length;
        if (u.length !== f)
          return !1;
        for (var p = 0; p < f; ++p)
          if (!rn(c, s[p], u[p], n))
            return !1;
        return !0;
      }
      return rn(c, s, u, n);
    } else {
      var y = Tn(a, n.fragmentMap);
      if (y)
        return _s(y) ? !0 : rn(
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
function _s(e) {
  return !!e.directives && e.directives.some(jg);
}
function jg(e) {
  return e.name.value === "nonreactive";
}
var ul = xt ? WeakMap : Map, cl = xa ? WeakSet : Set, ja = new jr(), ws = !1;
function ll() {
  ws || (ws = !0, globalThis.__DEV__ !== !1 && K.warn(52));
}
function fl(e, t, r) {
  return ja.withValue(!0, function() {
    var n = Sr(e, t, r, !1);
    return Object.isFrozen(e) && dn(n), n;
  });
}
function Ug(e, t) {
  if (t.has(e))
    return t.get(e);
  var r = Array.isArray(e) ? [] : /* @__PURE__ */ Object.create(null);
  return t.set(e, r), r;
}
function Sr(e, t, r, n, i) {
  var a, o = r.knownChanged, s = Ug(e, r.mutableTargets);
  if (Array.isArray(e)) {
    for (var u = 0, c = Array.from(e.entries()); u < c.length; u++) {
      var l = c[u], d = l[0], f = l[1];
      if (f === null) {
        s[d] = null;
        continue;
      }
      var p = Sr(f, t, r, n, globalThis.__DEV__ !== !1 ? "".concat(i || "", "[").concat(d, "]") : void 0);
      o.has(p) && o.add(s), s[d] = p;
    }
    return o.has(s) ? s : e;
  }
  for (var y = 0, S = t.selections; y < S.length; y++) {
    var h = S[y], g = void 0;
    if (n && o.add(s), h.kind === G.FIELD) {
      var _ = Ke(h), I = h.selectionSet;
      if (g = s[_] || e[_], g === void 0)
        continue;
      if (I && g !== null) {
        var p = Sr(e[_], I, r, n, globalThis.__DEV__ !== !1 ? "".concat(i || "", ".").concat(_) : void 0);
        o.has(p) && (g = p);
      }
      globalThis.__DEV__ === !1 && (s[_] = g), globalThis.__DEV__ !== !1 && (n && _ !== "__typename" && // either the field is not present in the memo object
      // or it has a `get` descriptor, not a `value` descriptor
      // => it is a warning accessor and we can overwrite it
      // with another accessor
      !(!((a = Object.getOwnPropertyDescriptor(s, _)) === null || a === void 0) && a.value) ? Object.defineProperty(s, _, qg(_, g, i || "", r.operationName, r.operationType)) : (delete s[_], s[_] = g));
    }
    if (h.kind === G.INLINE_FRAGMENT && (!h.typeCondition || r.cache.fragmentMatches(h, e.__typename)) && (g = Sr(e, h.selectionSet, r, n, i)), h.kind === G.FRAGMENT_SPREAD) {
      var k = h.name.value, P = r.fragmentMap[k] || (r.fragmentMap[k] = r.cache.lookupFragment(k));
      K(P, 47, k);
      var w = Gh(h);
      w !== "mask" && (g = Sr(e, P.selectionSet, r, w === "migrate", i));
    }
    o.has(g) && o.add(s);
  }
  return "__typename" in e && !("__typename" in s) && (s.__typename = e.__typename), Object.keys(s).length !== Object.keys(e).length && o.add(s), o.has(s) ? s : e;
}
function qg(e, t, r, n, i) {
  var a = function() {
    return ja.getValue() || (globalThis.__DEV__ !== !1 && K.warn(48, n ? "".concat(i, " '").concat(n, "'") : "anonymous ".concat(i), "".concat(r, ".").concat(e).replace(/^\./, "")), a = function() {
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
function dl(e, t, r, n) {
  if (!r.fragmentMatches)
    return globalThis.__DEV__ !== !1 && ll(), e;
  var i = t.definitions.filter(function(o) {
    return o.kind === G.FRAGMENT_DEFINITION;
  });
  typeof n > "u" && (K(i.length === 1, 49, i.length), n = i[0].name.value);
  var a = i.find(function(o) {
    return o.name.value === n;
  });
  return K(!!a, 50, n), e == null || pe(e, {}) ? e : fl(e, a.selectionSet, {
    operationType: "fragment",
    operationName: a.name.value,
    fragmentMap: tr(nr(t)),
    cache: r,
    mutableTargets: new ul(),
    knownChanged: new cl()
  });
}
function Bg(e, t, r) {
  var n;
  if (!r.fragmentMatches)
    return globalThis.__DEV__ !== !1 && ll(), e;
  var i = Ot(t);
  return K(i, 51), e == null ? e : fl(e, i.selectionSet, {
    operationType: i.operation,
    operationName: (n = i.name) === null || n === void 0 ? void 0 : n.value,
    fragmentMap: tr(nr(t)),
    cache: r,
    mutableTargets: new ul(),
    knownChanged: new cl()
  });
}
var pl = (
  /** @class */
  (function() {
    function e() {
      this.assumeImmutableResults = !1, this.getFragmentDoc = Pr(Jh, {
        max: Je["cache.fragmentQueryDocuments"] || 1e3,
        cache: ln
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
      return r === void 0 && (r = !!t.optimistic), this.read(C(C({}, t), { rootId: t.id || "ROOT_QUERY", optimistic: r }));
    }, e.prototype.watchFragment = function(t) {
      var r = this, n = t.fragment, i = t.fragmentName, a = t.from, o = t.optimistic, s = o === void 0 ? !0 : o, u = We(t, ["fragment", "fragmentName", "from", "optimistic"]), c = this.getFragmentDoc(n, i), l = typeof a > "u" || typeof a == "string" ? a : this.identify(a), d = !!t[Symbol.for("apollo.dataMasking")];
      if (globalThis.__DEV__ !== !1) {
        var f = i || xc(n).name.value;
        l || globalThis.__DEV__ !== !1 && K.warn(1, f);
      }
      var p = C(C({}, u), { returnPartialData: !0, id: l, query: c, optimistic: s }), y;
      return new le(function(S) {
        return r.watch(C(C({}, p), { immediate: !0, callback: function(h) {
          var g = d ? dl(h.result, n, r, i) : h.result;
          if (
            // Always ensure we deliver the first result
            !(y && sl(
              c,
              { data: y.result },
              { data: g },
              // TODO: Fix the type on WatchFragmentOptions so that TVars
              // extends OperationVariables
              t.variables
            ))
          ) {
            var _ = {
              data: g,
              complete: !!h.complete
            };
            h.missing && (_.missing = An(h.missing.map(function(I) {
              return I.missing;
            }))), y = C(C({}, h), { result: g }), S.next(_);
          }
        } }));
      });
    }, e.prototype.readFragment = function(t, r) {
      return r === void 0 && (r = !!t.optimistic), this.read(C(C({}, t), { query: this.getFragmentDoc(t.fragment, t.fragmentName), rootId: t.id, optimistic: r }));
    }, e.prototype.writeQuery = function(t) {
      var r = t.id, n = t.data, i = We(t, ["id", "data"]);
      return this.write(Object.assign(i, {
        dataId: r || "ROOT_QUERY",
        result: n
      }));
    }, e.prototype.writeFragment = function(t) {
      var r = t.id, n = t.data, i = t.fragment, a = t.fragmentName, o = We(t, ["id", "data", "fragment", "fragmentName"]);
      return this.write(Object.assign(o, {
        query: this.getFragmentDoc(i, a),
        dataId: r,
        result: n
      }));
    }, e.prototype.updateQuery = function(t, r) {
      return this.batch({
        update: function(n) {
          var i = n.readQuery(t), a = r(i);
          return a == null ? i : (n.writeQuery(C(C({}, t), { data: a })), a);
        }
      });
    }, e.prototype.updateFragment = function(t, r) {
      return this.batch({
        update: function(n) {
          var i = n.readFragment(t), a = r(i);
          return a == null ? i : (n.writeFragment(C(C({}, t), { data: a })), a);
        }
      });
    }, e;
  })()
);
globalThis.__DEV__ !== !1 && (pl.prototype.getMemoryInternals = um);
var hl = (
  /** @class */
  (function(e) {
    Re(t, e);
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
), De = Object.prototype.hasOwnProperty;
function pr(e) {
  return e == null;
}
function ml(e, t) {
  var r = e.__typename, n = e.id, i = e._id;
  if (typeof r == "string" && (t && (t.keyObject = pr(n) ? pr(i) ? void 0 : { _id: i } : { id: n }), pr(n) && !pr(i) && (n = i), !pr(n)))
    return "".concat(r, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var gl = {
  dataIdFromObject: ml,
  addTypename: !0,
  resultCaching: !0,
  // Thanks to the shouldCanonizeResults helper, this should be the only line
  // you have to change to reenable canonization by default in the future.
  canonizeResults: !1
};
function Vg(e) {
  return Xt(gl, e);
}
function yl(e) {
  var t = e.canonizeResults;
  return t === void 0 ? gl.canonizeResults : t;
}
function Gg(e, t) {
  return fe(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
}
var vl = /^[_a-z][_0-9a-z]*/i;
function yt(e) {
  var t = e.match(vl);
  return t ? t[0] : e;
}
function oa(e, t, r) {
  return me(t) ? ye(t) ? t.every(function(n) {
    return oa(e, n, r);
  }) : e.selections.every(function(n) {
    if (ht(n) && Lr(n, r)) {
      var i = Ke(n);
      return De.call(t, i) && (!n.selectionSet || oa(n.selectionSet, t[i], r));
    }
    return !0;
  }) : !1;
}
function Ut(e) {
  return me(e) && !fe(e) && !ye(e);
}
function zg() {
  return new gt();
}
function bl(e, t) {
  var r = tr(nr(e));
  return {
    fragmentMap: r,
    lookupFragment: function(n) {
      var i = r[n];
      return !i && t && (i = t.lookup(n)), i || null;
    }
  };
}
var nn = /* @__PURE__ */ Object.create(null), ci = function() {
  return nn;
}, Es = /* @__PURE__ */ Object.create(null), Nr = (
  /** @class */
  (function() {
    function e(t, r) {
      var n = this;
      this.policies = t, this.group = r, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(i, a) {
        return dn(fe(i) ? n.get(i.__ref, a) : i && i[a]);
      }, this.canRead = function(i) {
        return fe(i) ? n.has(i.__ref) : typeof i == "object";
      }, this.toReference = function(i, a) {
        if (typeof i == "string")
          return Gt(i);
        if (fe(i))
          return i;
        var o = n.policies.identify(i)[0];
        if (o) {
          var s = Gt(o);
          return a && n.merge(o, i), s;
        }
      };
    }
    return e.prototype.toObject = function() {
      return C({}, this.data);
    }, e.prototype.has = function(t) {
      return this.lookup(t, !0) !== void 0;
    }, e.prototype.get = function(t, r) {
      if (this.group.depend(t, r), De.call(this.data, t)) {
        var n = this.data[t];
        if (n && De.call(n, r))
          return n[r];
      }
      if (r === "__typename" && De.call(this.policies.rootTypenamesById, t))
        return this.policies.rootTypenamesById[t];
      if (this instanceof rt)
        return this.parent.get(t, r);
    }, e.prototype.lookup = function(t, r) {
      if (r && this.group.depend(t, "__exists"), De.call(this.data, t))
        return this.data[t];
      if (this instanceof rt)
        return this.parent.lookup(t, r);
      if (this.policies.rootTypenamesById[t])
        return /* @__PURE__ */ Object.create(null);
    }, e.prototype.merge = function(t, r) {
      var n = this, i;
      fe(t) && (t = t.__ref), fe(r) && (r = r.__ref);
      var a = typeof t == "string" ? this.lookup(i = t) : t, o = typeof r == "string" ? this.lookup(i = r) : r;
      if (o) {
        K(typeof i == "string", 2);
        var s = new gt(Wg).merge(a, o);
        if (this.data[i] = s, s !== a && (delete this.refs[i], this.group.caching)) {
          var u = /* @__PURE__ */ Object.create(null);
          a || (u.__exists = 1), Object.keys(o).forEach(function(c) {
            if (!a || a[c] !== s[c]) {
              u[c] = 1;
              var l = yt(c);
              l !== c && !n.policies.hasKeyArgs(s.__typename, l) && (u[l] = 1), s[c] === void 0 && !(n instanceof rt) && delete s[c];
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
          DELETE: nn,
          INVALIDATE: Es,
          isReference: fe,
          toReference: this.toReference,
          canRead: this.canRead,
          readField: function(c, l) {
            return n.policies.readField(typeof c == "string" ? {
              fieldName: c,
              from: l || Gt(t)
            } : c, { store: n });
          }
        };
        if (Object.keys(i).forEach(function(c) {
          var l = yt(c), d = i[c];
          if (d !== void 0) {
            var f = typeof r == "function" ? r : r[c] || r[l];
            if (f) {
              var p = f === ci ? nn : f(dn(d), C(C({}, u), { fieldName: l, storeFieldName: c, storage: n.getStorage(t, c) }));
              if (p === Es)
                n.group.dirty(t, c);
              else if (p === nn && (p = void 0), p !== d && (a[c] = p, o = !0, d = p, globalThis.__DEV__ !== !1)) {
                var y = function(P) {
                  if (n.lookup(P.__ref) === void 0)
                    return globalThis.__DEV__ !== !1 && K.warn(3, P), !0;
                };
                if (fe(p))
                  y(p);
                else if (Array.isArray(p))
                  for (var S = !1, h = void 0, g = 0, _ = p; g < _.length; g++) {
                    var I = _[g];
                    if (fe(I)) {
                      if (S = !0, y(I))
                        break;
                    } else if (typeof I == "object" && I) {
                      var k = n.policies.identify(I)[0];
                      k && (h = I);
                    }
                    if (S && h !== void 0) {
                      globalThis.__DEV__ !== !1 && K.warn(4, h);
                      break;
                    }
                  }
              }
            }
            d !== void 0 && (s = !1);
          }
        }), o)
          return this.merge(t, a), s && (this instanceof rt ? this.data[t] = void 0 : delete this.data[t], this.group.dirty(t, "__exists")), !0;
      }
      return !1;
    }, e.prototype.delete = function(t, r, n) {
      var i, a = this.lookup(t);
      if (a) {
        var o = this.getFieldValue(a, "__typename"), s = r && n ? this.policies.getStoreFieldName({ typename: o, fieldName: r, args: n }) : r;
        return this.modify(t, s ? (i = {}, i[s] = ci, i) : ci);
      }
      return !1;
    }, e.prototype.evict = function(t, r) {
      var n = !1;
      return t.id && (De.call(this.data, t.id) && (n = this.delete(t.id, t.fieldName, t.args)), this instanceof rt && this !== r && (n = this.parent.evict(t, r) || n), (t.fieldName || n) && this.group.dirty(t.id, t.fieldName || "__exists")), n;
    }, e.prototype.clear = function() {
      this.replace(null);
    }, e.prototype.extract = function() {
      var t = this, r = this.toObject(), n = [];
      return this.getRootIdSet().forEach(function(i) {
        De.call(t.policies.rootTypenamesById, i) || n.push(i);
      }), n.length && (r.__META = { extraRootIds: n.sort() }), r;
    }, e.prototype.replace = function(t) {
      var r = this;
      if (Object.keys(this.data).forEach(function(a) {
        t && De.call(t, a) || r.delete(a);
      }), t) {
        var n = t.__META, i = We(t, ["__META"]);
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
      return t === void 0 && (t = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(t.add, t), this instanceof rt ? this.parent.getRootIdSet(t) : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t), t;
    }, e.prototype.gc = function() {
      var t = this, r = this.getRootIdSet(), n = this.toObject();
      r.forEach(function(o) {
        De.call(n, o) && (Object.keys(t.findChildRefIds(o)).forEach(r.add, r), delete n[o]);
      });
      var i = Object.keys(n);
      if (i.length) {
        for (var a = this; a instanceof rt; )
          a = a.parent;
        i.forEach(function(o) {
          return a.delete(o);
        });
      }
      return i;
    }, e.prototype.findChildRefIds = function(t) {
      if (!De.call(this.refs, t)) {
        var r = this.refs[t] = /* @__PURE__ */ Object.create(null), n = this.data[t];
        if (!n)
          return r;
        var i = /* @__PURE__ */ new Set([n]);
        i.forEach(function(a) {
          fe(a) && (r[a.__ref] = !0), me(a) && Object.keys(a).forEach(function(o) {
            var s = a[o];
            me(s) && i.add(s);
          });
        });
      }
      return this.refs[t];
    }, e.prototype.makeCacheKey = function() {
      return this.group.keyMaker.lookupArray(arguments);
    }, e;
  })()
), Sl = (
  /** @class */
  (function() {
    function e(t, r) {
      r === void 0 && (r = null), this.caching = t, this.parent = r, this.d = null, this.resetCaching();
    }
    return e.prototype.resetCaching = function() {
      this.d = this.caching ? Uc() : null, this.keyMaker = new Ze(xt);
    }, e.prototype.depend = function(t, r) {
      if (this.d) {
        this.d(li(t, r));
        var n = yt(r);
        n !== r && this.d(li(t, n)), this.parent && this.parent.depend(t, r);
      }
    }, e.prototype.dirty = function(t, r) {
      this.d && this.d.dirty(
        li(t, r),
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
function li(e, t) {
  return t + "#" + e;
}
function Ds(e, t) {
  Ir(e) && e.group.depend(t, "__exists");
}
(function(e) {
  var t = (
    /** @class */
    (function(r) {
      Re(n, r);
      function n(i) {
        var a = i.policies, o = i.resultCaching, s = o === void 0 ? !0 : o, u = i.seed, c = r.call(this, a, new Sl(s)) || this;
        return c.stump = new Qg(c), c.storageTrie = new Ze(xt), u && c.replace(u), c;
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
})(Nr || (Nr = {}));
var rt = (
  /** @class */
  (function(e) {
    Re(t, e);
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
          pe(o[u], s[u]) || n.group.dirty(a, u);
        }) : (n.group.dirty(a, "__exists"), Object.keys(s).forEach(function(u) {
          n.group.dirty(a, u);
        })) : n.delete(a);
      }), i) : i === this.parent ? this : i.addLayer(this.id, this.replay);
    }, t.prototype.toObject = function() {
      return C(C({}, this.parent.toObject()), this.data);
    }, t.prototype.findChildRefIds = function(r) {
      var n = this.parent.findChildRefIds(r);
      return De.call(this.data, r) ? C(C({}, n), e.prototype.findChildRefIds.call(this, r)) : n;
    }, t.prototype.getStorage = function() {
      for (var r = this.parent; r.parent; )
        r = r.parent;
      return r.getStorage.apply(
        r,
        // @ts-expect-error
        arguments
      );
    }, t;
  })(Nr)
), Qg = (
  /** @class */
  (function(e) {
    Re(t, e);
    function t(r) {
      return e.call(this, "EntityStore.Stump", r, function() {
      }, new Sl(r.group.caching, r.group)) || this;
    }
    return t.prototype.removeLayer = function() {
      return this;
    }, t.prototype.merge = function(r, n) {
      return this.parent.merge(r, n);
    }, t;
  })(rt)
);
function Wg(e, t, r) {
  var n = e[r], i = t[r];
  return pe(n, i) ? n : i;
}
function Ir(e) {
  return !!(e instanceof Nr && e.group.caching);
}
function Yg(e) {
  return me(e) ? ye(e) ? e.slice(0) : C({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var Is = (
  /** @class */
  (function() {
    function e() {
      this.known = new (xa ? WeakSet : Set)(), this.pool = new Ze(xt), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
    }
    return e.prototype.isKnown = function(t) {
      return me(t) && this.known.has(t);
    }, e.prototype.pass = function(t) {
      if (me(t)) {
        var r = Yg(t);
        return this.passes.set(r, t), r;
      }
      return t;
    }, e.prototype.admit = function(t) {
      var r = this;
      if (me(t)) {
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
function Ts(e) {
  return [
    e.selectionSet,
    e.objectOrReference,
    e.context,
    // We split out this property so we can pass different values
    // independently without modifying options.context itself.
    e.context.canonizeResults
  ];
}
var Hg = (
  /** @class */
  (function() {
    function e(t) {
      var r = this;
      this.knownResults = new (xt ? WeakMap : Map)(), this.config = Xt(t, {
        addTypename: t.addTypename !== !1,
        canonizeResults: yl(t)
      }), this.canon = t.canon || new Is(), this.executeSelectionSet = Pr(function(n) {
        var i, a = n.context.canonizeResults, o = Ts(n);
        o[3] = !a;
        var s = (i = r.executeSelectionSet).peek.apply(i, o);
        return s ? a ? C(C({}, s), {
          // If we previously read this result without canonizing it, we can
          // reuse that result simply by canonizing it now.
          result: r.canon.admit(s.result)
        }) : s : (Ds(n.context.store, n.enclosingRef.__ref), r.execSelectionSetImpl(n));
      }, {
        max: this.config.resultCacheMaxSize || Je["inMemoryCache.executeSelectionSet"] || 5e4,
        keyArgs: Ts,
        // Note that the parameters of makeCacheKey are determined by the
        // array returned by keyArgs.
        makeCacheKey: function(n, i, a, o) {
          if (Ir(a.store))
            return a.store.makeCacheKey(n, fe(i) ? i.__ref : i, a.varString, o);
        }
      }), this.executeSubSelectedArray = Pr(function(n) {
        return Ds(n.context.store, n.enclosingRef.__ref), r.execSubSelectedArrayImpl(n);
      }, {
        max: this.config.resultCacheMaxSize || Je["inMemoryCache.executeSubSelectedArray"] || 1e4,
        makeCacheKey: function(n) {
          var i = n.field, a = n.array, o = n.context;
          if (Ir(o.store))
            return o.store.makeCacheKey(i, a, o.varString);
        }
      });
    }
    return e.prototype.resetCanon = function() {
      this.canon = new Is();
    }, e.prototype.diffQueryAgainstStore = function(t) {
      var r = t.store, n = t.query, i = t.rootId, a = i === void 0 ? "ROOT_QUERY" : i, o = t.variables, s = t.returnPartialData, u = s === void 0 ? !0 : s, c = t.canonizeResults, l = c === void 0 ? this.config.canonizeResults : c, d = this.config.cache.policies;
      o = C(C({}, Aa(Oc(n))), o);
      var f = Gt(a), p = this.executeSelectionSet({
        selectionSet: ir(n).selectionSet,
        objectOrReference: f,
        enclosingRef: f,
        context: C({ store: r, query: n, policies: d, variables: o, varString: lt(o), canonizeResults: l }, bl(n, this.config.fragments))
      }), y;
      if (p.missing && (y = [
        new hl(Jg(p.missing), p.missing, n, o)
      ], !u))
        throw y[0];
      return {
        result: p.result,
        complete: !y,
        missing: y
      };
    }, e.prototype.isFresh = function(t, r, n, i) {
      if (Ir(i.store) && this.knownResults.get(t) === n) {
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
      if (fe(i) && !o.policies.rootTypenamesById[i.__ref] && !o.store.has(i.__ref))
        return {
          result: this.canon.empty,
          missing: "Dangling reference to missing ".concat(i.__ref, " object")
        };
      var s = o.variables, u = o.policies, c = o.store, l = c.getFieldValue(i, "__typename"), d = [], f, p = new gt();
      this.config.addTypename && typeof l == "string" && !u.rootIdsByTypename[l] && d.push({ __typename: l });
      function y(I, k) {
        var P;
        return I.missing && (f = p.merge(f, (P = {}, P[k] = I.missing, P))), I.result;
      }
      var S = new Set(n.selections);
      S.forEach(function(I) {
        var k, P;
        if (Lr(I, s))
          if (ht(I)) {
            var w = u.readField({
              fieldName: I.name.value,
              field: I,
              variables: o.variables,
              from: i
            }, o), x = Ke(I);
            w === void 0 ? $a.added(I) || (f = p.merge(f, (k = {}, k[x] = "Can't find field '".concat(I.name.value, "' on ").concat(fe(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), k))) : ye(w) ? w.length > 0 && (w = y(r.executeSubSelectedArray({
              field: I,
              array: w,
              enclosingRef: a,
              context: o
            }), x)) : I.selectionSet ? w != null && (w = y(r.executeSelectionSet({
              selectionSet: I.selectionSet,
              objectOrReference: w,
              enclosingRef: fe(w) ? w : a,
              context: o
            }), x)) : o.canonizeResults && (w = r.canon.pass(w)), w !== void 0 && d.push((P = {}, P[x] = w, P));
          } else {
            var v = Tn(I, o.lookupFragment);
            if (!v && I.kind === G.FRAGMENT_SPREAD)
              throw Ae(10, I.name.value);
            v && u.fragmentMatches(v, l) && v.selectionSet.selections.forEach(S.add, S);
          }
      });
      var h = An(d), g = { result: h, missing: f }, _ = o.canonizeResults ? this.canon.admit(g) : dn(g);
      return _.result && this.knownResults.set(_.result, n), _;
    }, e.prototype.execSubSelectedArrayImpl = function(t) {
      var r = this, n = t.field, i = t.array, a = t.enclosingRef, o = t.context, s, u = new gt();
      function c(l, d) {
        var f;
        return l.missing && (s = u.merge(s, (f = {}, f[d] = l.missing, f))), l.result;
      }
      return n.selectionSet && (i = i.filter(o.store.canRead)), i = i.map(function(l, d) {
        return l === null ? null : ye(l) ? c(r.executeSubSelectedArray({
          field: n,
          array: l,
          enclosingRef: a,
          context: o
        }), d) : n.selectionSet ? c(r.executeSelectionSet({
          selectionSet: n.selectionSet,
          objectOrReference: l,
          enclosingRef: fe(l) ? l : a,
          context: o
        }), d) : (globalThis.__DEV__ !== !1 && Kg(o.store, n, l), l);
      }), {
        result: o.canonizeResults ? this.canon.admit(i) : i,
        missing: s
      };
    }, e;
  })()
);
function Jg(e) {
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
function Kg(e, t, r) {
  if (!t.selectionSet) {
    var n = /* @__PURE__ */ new Set([r]);
    n.forEach(function(i) {
      me(i) && (K(
        !fe(i),
        11,
        Gg(e, i),
        t.name.value
      ), Object.values(i).forEach(n.add, n));
    });
  }
}
var Ua = new jr(), ks = /* @__PURE__ */ new WeakMap();
function Tr(e) {
  var t = ks.get(e);
  return t || ks.set(e, t = {
    vars: /* @__PURE__ */ new Set(),
    dep: Uc()
  }), t;
}
function Os(e) {
  Tr(e).vars.forEach(function(t) {
    return t.forgetCache(e);
  });
}
function Xg(e) {
  Tr(e).vars.forEach(function(t) {
    return t.attachCache(e);
  });
}
function Zg(e) {
  var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = function(a) {
    if (arguments.length > 0) {
      if (e !== a) {
        e = a, t.forEach(function(u) {
          Tr(u).dep.dirty(n), ey(u);
        });
        var o = Array.from(r);
        r.clear(), o.forEach(function(u) {
          return u(e);
        });
      }
    } else {
      var s = Ua.getValue();
      s && (i(s), Tr(s).dep(n));
    }
    return e;
  };
  n.onNextChange = function(a) {
    return r.add(a), function() {
      r.delete(a);
    };
  };
  var i = n.attachCache = function(a) {
    return t.add(a), Tr(a).vars.add(n), n;
  };
  return n.forgetCache = function(a) {
    return t.delete(a);
  }, n;
}
function ey(e) {
  e.broadcastWatches && e.broadcastWatches();
}
var xs = /* @__PURE__ */ Object.create(null);
function qa(e) {
  var t = JSON.stringify(e);
  return xs[t] || (xs[t] = /* @__PURE__ */ Object.create(null));
}
function As(e) {
  var t = qa(e);
  return t.keyFieldsFn || (t.keyFieldsFn = function(r, n) {
    var i = function(o, s) {
      return n.readField(s, o);
    }, a = n.keyObject = Ba(e, function(o) {
      var s = Qt(
        n.storeObject,
        o,
        // Using context.readField to extract paths from context.storeObject
        // allows the extraction to see through Reference objects and respect
        // custom read functions.
        i
      );
      return s === void 0 && r !== n.storeObject && De.call(r, o[0]) && (s = Qt(r, o, wl)), K(s !== void 0, 5, o.join("."), r), s;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(a));
  });
}
function Fs(e) {
  var t = qa(e);
  return t.keyArgsFn || (t.keyArgsFn = function(r, n) {
    var i = n.field, a = n.variables, o = n.fieldName, s = Ba(e, function(c) {
      var l = c[0], d = l.charAt(0);
      if (d === "@") {
        if (i && Qe(i.directives)) {
          var f = l.slice(1), p = i.directives.find(function(g) {
            return g.name.value === f;
          }), y = p && kn(p, a);
          return y && Qt(
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
        var S = l.slice(1);
        if (a && De.call(a, S)) {
          var h = c.slice(0);
          return h[0] = S, Qt(a, h);
        }
        return;
      }
      if (r)
        return Qt(r, c);
    }), u = JSON.stringify(s);
    return (r || u !== "{}") && (o += ":" + u), o;
  });
}
function Ba(e, t) {
  var r = new gt();
  return _l(e).reduce(function(n, i) {
    var a, o = t(i);
    if (o !== void 0) {
      for (var s = i.length - 1; s >= 0; --s)
        o = (a = {}, a[i[s]] = o, a);
      n = r.merge(n, o);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function _l(e) {
  var t = qa(e);
  if (!t.paths) {
    var r = t.paths = [], n = [];
    e.forEach(function(i, a) {
      ye(i) ? (_l(i).forEach(function(o) {
        return r.push(n.concat(o));
      }), n.length = 0) : (n.push(i), ye(e[a + 1]) || (r.push(n.slice(0)), n.length = 0));
    });
  }
  return t.paths;
}
function wl(e, t) {
  return e[t];
}
function Qt(e, t, r) {
  return r = r || wl, El(t.reduce(function n(i, a) {
    return ye(i) ? i.map(function(o) {
      return n(o, a);
    }) : i && r(i, a);
  }, e));
}
function El(e) {
  return me(e) ? ye(e) ? e.map(El) : Ba(Object.keys(e).sort(), function(t) {
    return Qt(e, t);
  }) : e;
}
function sa(e) {
  return e.args !== void 0 ? e.args : e.field ? kn(e.field, e.variables) : null;
}
var ty = function() {
}, Cs = function(e, t) {
  return t.fieldName;
}, Ps = function(e, t, r) {
  var n = r.mergeObjects;
  return n(e, t);
}, $s = function(e, t) {
  return t;
}, ry = (
  /** @class */
  (function() {
    function e(t) {
      this.config = t, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = C({ dataIdFromObject: ml }, t), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), t.possibleTypes && this.addPossibleTypes(t.possibleTypes), t.typePolicies && this.addTypePolicies(t.typePolicies);
    }
    return e.prototype.identify = function(t, r) {
      var n, i = this, a = r && (r.typename || ((n = r.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || t.__typename;
      if (a === this.rootTypenamesById.ROOT_QUERY)
        return ["ROOT_QUERY"];
      var o = r && r.storeObject || t, s = C(C({}, r), { typename: a, storeObject: o, readField: r && r.readField || function() {
        var d = Va(arguments, o);
        return i.readField(d, {
          store: i.cache.data,
          variables: d.variables
        });
      } }), u, c = a && this.getTypePolicy(a), l = c && c.keyFn || this.config.dataIdFromObject;
      return ja.withValue(!0, function() {
        for (; l; ) {
          var d = l(C(C({}, t), o), s);
          if (ye(d))
            l = As(d);
          else {
            u = d;
            break;
          }
        }
      }), u = u ? String(u) : void 0, s.keyObject ? [u, s.keyObject] : [u];
    }, e.prototype.addTypePolicies = function(t) {
      var r = this;
      Object.keys(t).forEach(function(n) {
        var i = t[n], a = i.queryType, o = i.mutationType, s = i.subscriptionType, u = We(i, ["queryType", "mutationType", "subscriptionType"]);
        a && r.setRootTypename("Query", n), o && r.setRootTypename("Mutation", n), s && r.setRootTypename("Subscription", n), De.call(r.toBeAdded, n) ? r.toBeAdded[n].push(u) : r.toBeAdded[n] = [u];
      });
    }, e.prototype.updateTypePolicy = function(t, r) {
      var n = this, i = this.getTypePolicy(t), a = r.keyFields, o = r.fields;
      function s(u, c) {
        u.merge = typeof c == "function" ? c : c === !0 ? Ps : c === !1 ? $s : u.merge;
      }
      s(i, r.merge), i.keyFn = // Pass false to disable normalization for this typename.
      a === !1 ? ty : ye(a) ? As(a) : typeof a == "function" ? a : i.keyFn, o && Object.keys(o).forEach(function(u) {
        var c = n.getFieldPolicy(t, u, !0), l = o[u];
        if (typeof l == "function")
          c.read = l;
        else {
          var d = l.keyArgs, f = l.read, p = l.merge;
          c.keyFn = // Pass false to disable argument-based differentiation of
          // field identities.
          d === !1 ? Cs : ye(d) ? Fs(d) : typeof d == "function" ? d : c.keyFn, typeof f == "function" && (c.read = f), s(c, p);
        }
        c.read && c.merge && (c.keyFn = c.keyFn || Cs);
      });
    }, e.prototype.setRootTypename = function(t, r) {
      r === void 0 && (r = t);
      var n = "ROOT_" + t.toUpperCase(), i = this.rootTypenamesById[n];
      r !== i && (K(!i || i === t, 6, t), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[r] = n, this.rootTypenamesById[n] = r);
    }, e.prototype.addPossibleTypes = function(t) {
      var r = this;
      this.usingPossibleTypes = !0, Object.keys(t).forEach(function(n) {
        r.getSupertypeSet(n, !0), t[n].forEach(function(i) {
          r.getSupertypeSet(i, !0).add(n);
          var a = i.match(vl);
          (!a || a[0] !== i) && r.fuzzySubtypes.set(i, new RegExp(i));
        });
      });
    }, e.prototype.getTypePolicy = function(t) {
      var r = this;
      if (!De.call(this.typePolicies, t)) {
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
          var s = r.getTypePolicy(o), u = s.fields, c = We(s, ["fields"]);
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
          var S = a.getSupertypeSet(y, !1);
          S && S.size && u.indexOf(S) < 0 && u.push(S);
        }, l = !!(n && this.fuzzySubtypes.size), d = !1, f = 0; f < u.length; ++f) {
          var p = u[f];
          if (p.has(o))
            return s.has(o) || (d && globalThis.__DEV__ !== !1 && K.warn(7, r, o), s.add(o)), !0;
          p.forEach(c), l && // Start checking fuzzy subtypes only after exhausting all
          // non-fuzzy subtypes (after the final iteration of the loop).
          f === u.length - 1 && // We could wait to compare fragment.selectionSet to result
          // after we verify the supertype, but this check is often less
          // expensive than that search, and we will have to do the
          // comparison anyway whenever we find a potential match.
          oa(t.selectionSet, n, i) && (l = !1, d = !0, this.fuzzySubtypes.forEach(function(y, S) {
            var h = r.match(y);
            h && h[0] === r && c(S);
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
        }, u = sa(t); o; ) {
          var c = o(u, s);
          if (ye(c))
            o = Fs(c);
          else {
            a = c || n;
            break;
          }
        }
      return a === void 0 && (a = t.field ? Im(t.field, t.variables) : kc(n, sa(t))), a === !1 ? n : n === yt(a) ? a : n + ":" + a;
    }, e.prototype.readField = function(t, r) {
      var n = t.from;
      if (n) {
        var i = t.field || t.fieldName;
        if (i) {
          if (t.typename === void 0) {
            var a = r.store.getFieldValue(n, "__typename");
            a && (t.typename = a);
          }
          var o = this.getStoreFieldName(t), s = yt(o), u = r.store.getFieldValue(n, o), c = this.getFieldPolicy(t.typename, s, !1), l = c && c.read;
          if (l) {
            var d = Ns(this, n, t, r, r.store.getStorage(fe(n) ? n.__ref : n, o));
            return Ua.withValue(this.cache, l, [
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
      return u === Ps ? Dl(i.store)(t, r) : u === $s ? r : (i.overwrite && (t = void 0), u(t, r, Ns(
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
function Ns(e, t, r, n, i) {
  var a = e.getStoreFieldName(r), o = yt(a), s = r.variables || n.variables, u = n.store, c = u.toReference, l = u.canRead;
  return {
    args: sa(r),
    field: r.field || null,
    fieldName: o,
    storeFieldName: a,
    variables: s,
    isReference: fe,
    toReference: c,
    storage: i,
    cache: e.cache,
    canRead: l,
    readField: function() {
      return e.readField(Va(arguments, t, s), n);
    },
    mergeObjects: Dl(n.store)
  };
}
function Va(e, t, r) {
  var n = e[0], i = e[1], a = e.length, o;
  return typeof n == "string" ? o = {
    fieldName: n,
    // Default to objectOrReference only when no second argument was
    // passed for the from parameter, not when undefined is explicitly
    // passed as the second argument.
    from: a > 1 ? i : t
  } : (o = C({}, n), De.call(o, "from") || (o.from = t)), globalThis.__DEV__ !== !1 && o.from === void 0 && globalThis.__DEV__ !== !1 && K.warn(8, uc(Array.from(e))), o.variables === void 0 && (o.variables = r), o;
}
function Dl(e) {
  return function(r, n) {
    if (ye(r) || ye(n))
      throw Ae(9);
    if (me(r) && me(n)) {
      var i = e.getFieldValue(r, "__typename"), a = e.getFieldValue(n, "__typename"), o = i && a && i !== a;
      if (o)
        return n;
      if (fe(r) && Ut(n))
        return e.merge(r.__ref, n), r;
      if (Ut(r) && fe(n))
        return e.merge(r, n.__ref), n;
      if (Ut(r) && Ut(n))
        return C(C({}, r), n);
    }
    return n;
  };
}
function fi(e, t, r) {
  var n = "".concat(t).concat(r), i = e.flavors.get(n);
  return i || e.flavors.set(n, i = e.clientOnly === t && e.deferred === r ? e : C(C({}, e), { clientOnly: t, deferred: r })), i;
}
var ny = (
  /** @class */
  (function() {
    function e(t, r, n) {
      this.cache = t, this.reader = r, this.fragments = n;
    }
    return e.prototype.writeToStore = function(t, r) {
      var n = this, i = r.query, a = r.result, o = r.dataId, s = r.variables, u = r.overwrite, c = Ot(i), l = zg();
      s = C(C({}, Aa(c)), s);
      var d = C(C({ store: t, written: /* @__PURE__ */ Object.create(null), merge: function(p, y) {
        return l.merge(p, y);
      }, variables: s, varString: lt(s) }, bl(i, this.fragments)), { overwrite: !!u, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), f = this.processSelectionSet({
        result: a || /* @__PURE__ */ Object.create(null),
        dataId: o,
        selectionSet: c.selectionSet,
        mergeTree: { map: /* @__PURE__ */ new Map() },
        context: d
      });
      if (!fe(f))
        throw Ae(12, a);
      return d.incomingById.forEach(function(p, y) {
        var S = p.storeObject, h = p.mergeTree, g = p.fieldNodeSet, _ = Gt(y);
        if (h && h.map.size) {
          var I = n.applyMerges(h, _, S, d);
          if (fe(I))
            return;
          S = I;
        }
        if (globalThis.__DEV__ !== !1 && !d.overwrite) {
          var k = /* @__PURE__ */ Object.create(null);
          g.forEach(function(x) {
            x.selectionSet && (k[x.name.value] = !0);
          });
          var P = function(x) {
            return k[yt(x)] === !0;
          }, w = function(x) {
            var v = h && h.map.get(x);
            return !!(v && v.info && v.info.merge);
          };
          Object.keys(S).forEach(function(x) {
            P(x) && !w(x) && iy(_, S, x, d.store);
          });
        }
        t.merge(y, S);
      }), t.retain(f.__ref), f;
    }, e.prototype.processSelectionSet = function(t) {
      var r = this, n = t.dataId, i = t.result, a = t.selectionSet, o = t.context, s = t.mergeTree, u = this.cache.policies, c = /* @__PURE__ */ Object.create(null), l = n && u.rootTypenamesById[n] || Xi(i, a, o.fragmentMap) || n && o.store.get(n, "__typename");
      typeof l == "string" && (c.__typename = l);
      var d = function() {
        var I = Va(arguments, c, o.variables);
        if (fe(I.from)) {
          var k = o.incomingById.get(I.from.__ref);
          if (k) {
            var P = u.readField(C(C({}, I), { from: k.storeObject }), o);
            if (P !== void 0)
              return P;
          }
        }
        return u.readField(I, o);
      }, f = /* @__PURE__ */ new Set();
      this.flattenFields(
        a,
        i,
        // This WriteContext will be the default context value for fields returned
        // by the flattenFields method, but some fields may be assigned a modified
        // context, depending on the presence of @client and other directives.
        o,
        l
      ).forEach(function(I, k) {
        var P, w = Ke(k), x = i[w];
        if (f.add(k), x !== void 0) {
          var v = u.getStoreFieldName({
            typename: l,
            fieldName: k.name.value,
            field: k,
            variables: I.variables
          }), D = Rs(s, v), b = r.processFieldValue(
            x,
            k,
            // Reset context.clientOnly and context.deferred to their default
            // values before processing nested selection sets.
            k.selectionSet ? fi(I, !1, !1) : I,
            D
          ), A = void 0;
          k.selectionSet && (fe(b) || Ut(b)) && (A = d("__typename", b));
          var $ = u.getMergeFunction(l, k.name.value, A);
          $ ? D.info = {
            // TODO Check compatibility against any existing childTree.field?
            field: k,
            typename: l,
            merge: $
          } : Ms(s, v), c = I.merge(c, (P = {}, P[v] = b, P));
        } else globalThis.__DEV__ !== !1 && !I.clientOnly && !I.deferred && !$a.added(k) && // If the field has a read function, it may be a synthetic field or
        // provide a default value, so its absence from the written data should
        // not be cause for alarm.
        !u.getReadFunction(l, k.name.value) && globalThis.__DEV__ !== !1 && K.error(13, Ke(k), i);
      });
      try {
        var p = u.identify(i, {
          typename: l,
          selectionSet: a,
          fragmentMap: o.fragmentMap,
          storeObject: c,
          readField: d
        }), y = p[0], S = p[1];
        n = n || y, S && (c = o.merge(c, S));
      } catch (I) {
        if (!n)
          throw I;
      }
      if (typeof n == "string") {
        var h = Gt(n), g = o.written[n] || (o.written[n] = []);
        if (g.indexOf(a) >= 0 || (g.push(a), this.reader && this.reader.isFresh(i, h, a, o)))
          return h;
        var _ = o.incomingById.get(n);
        return _ ? (_.storeObject = o.merge(_.storeObject, c), _.mergeTree = ua(_.mergeTree, s), f.forEach(function(I) {
          return _.fieldNodeSet.add(I);
        })) : o.incomingById.set(n, {
          storeObject: c,
          // Save a reference to mergeTree only if it is not empty, because
          // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
          // reused for entirely different parts of the result tree.
          mergeTree: pn(s) ? void 0 : s,
          fieldNodeSet: f
        }), h;
      }
      return c;
    }, e.prototype.processFieldValue = function(t, r, n, i) {
      var a = this;
      return !r.selectionSet || t === null ? globalThis.__DEV__ !== !1 ? Yc(t) : t : ye(t) ? t.map(function(o, s) {
        var u = a.processFieldValue(o, r, n, Rs(i, s));
        return Ms(i, s), u;
      }) : this.processSelectionSet({
        result: t,
        selectionSet: r.selectionSet,
        context: n,
        mergeTree: i
      });
    }, e.prototype.flattenFields = function(t, r, n, i) {
      i === void 0 && (i = Xi(r, t, n.fragmentMap));
      var a = /* @__PURE__ */ new Map(), o = this.cache.policies, s = new Ze(!1);
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
          if (Lr(f, n.variables)) {
            var p = l.clientOnly, y = l.deferred;
            if (
              // Since the presence of @client or @defer on this field can only
              // cause clientOnly or deferred to become true, we can skip the
              // forEach loop if both clientOnly and deferred are already true.
              !(p && y) && Qe(f.directives) && f.directives.forEach(function(g) {
                var _ = g.name.value;
                if (_ === "client" && (p = !0), _ === "defer") {
                  var I = kn(g, n.variables);
                  (!I || I.if !== !1) && (y = !0);
                }
              }), ht(f)
            ) {
              var S = a.get(f);
              S && (p = p && S.clientOnly, y = y && S.deferred), a.set(f, fi(n, p, y));
            } else {
              var h = Tn(f, n.lookupFragment);
              if (!h && f.kind === G.FRAGMENT_SPREAD)
                throw Ae(14, f.name.value);
              h && o.fragmentMatches(h, i, r, n.variables) && u(h.selectionSet, fi(n, p, y));
            }
          }
        }));
      })(t, n), a;
    }, e.prototype.applyMerges = function(t, r, n, i, a) {
      var o, s = this;
      if (t.map.size && !fe(n)) {
        var u = (
          // Items in the same position in different arrays are not
          // necessarily related to each other, so when incoming is an array
          // we process its elements as if there was no existing data.
          !ye(n) && // Likewise, existing must be either a Reference or a StoreObject
          // in order for its fields to be safe to merge with the fields of
          // the incoming object.
          (fe(r) || Ut(r)) ? r : void 0
        ), c = n;
        u && !a && (a = [fe(u) ? u.__ref : u]);
        var l, d = function(f, p) {
          return ye(f) ? typeof p == "number" ? f[p] : void 0 : i.store.getFieldValue(f, String(p));
        };
        t.map.forEach(function(f, p) {
          var y = d(u, p), S = d(c, p);
          if (S !== void 0) {
            a && a.push(p);
            var h = s.applyMerges(f, y, S, i, a);
            h !== S && (l = l || /* @__PURE__ */ new Map(), l.set(p, h)), a && K(a.pop() === p);
          }
        }), l && (n = ye(c) ? c.slice(0) : C({}, c), l.forEach(function(f, p) {
          n[p] = f;
        }));
      }
      return t.info ? this.cache.policies.runMergeFunction(r, n, t.info, i, a && (o = i.store).getStorage.apply(o, a)) : n;
    }, e;
  })()
), Il = [];
function Rs(e, t) {
  var r = e.map;
  return r.has(t) || r.set(t, Il.pop() || { map: /* @__PURE__ */ new Map() }), r.get(t);
}
function ua(e, t) {
  if (e === t || !t || pn(t))
    return e;
  if (!e || pn(e))
    return t;
  var r = e.info && t.info ? C(C({}, e.info), t.info) : e.info || t.info, n = e.map.size && t.map.size, i = n ? /* @__PURE__ */ new Map() : e.map.size ? e.map : t.map, a = { info: r, map: i };
  if (n) {
    var o = new Set(t.map.keys());
    e.map.forEach(function(s, u) {
      a.map.set(u, ua(s, t.map.get(u))), o.delete(u);
    }), o.forEach(function(s) {
      a.map.set(s, ua(t.map.get(s), e.map.get(s)));
    });
  }
  return a;
}
function pn(e) {
  return !e || !(e.info || e.map.size);
}
function Ms(e, t) {
  var r = e.map, n = r.get(t);
  n && pn(n) && (Il.push(n), r.delete(t));
}
var Ls = /* @__PURE__ */ new Set();
function iy(e, t, r, n) {
  var i = function(d) {
    var f = n.getFieldValue(d, r);
    return typeof f == "object" && f;
  }, a = i(e);
  if (a) {
    var o = i(t);
    if (o && !fe(a) && !pe(a, o) && !Object.keys(a).every(function(d) {
      return n.getFieldValue(o, d) !== void 0;
    })) {
      var s = n.getFieldValue(e, "__typename") || n.getFieldValue(t, "__typename"), u = yt(r), c = "".concat(s, ".").concat(u);
      if (!Ls.has(c)) {
        Ls.add(c);
        var l = [];
        !ye(a) && !ye(o) && [a, o].forEach(function(d) {
          var f = n.getFieldValue(d, "__typename");
          typeof f == "string" && !l.includes(f) && l.push(f);
        }), globalThis.__DEV__ !== !1 && K.warn(15, u, s, l.length ? "either ensure all objects of type " + l.join(" and ") + " have an ID or a custom merge function, or " : "", c, C({}, a), C({}, o));
      }
    }
  }
}
var Ga = (
  /** @class */
  (function(e) {
    Re(t, e);
    function t(r) {
      r === void 0 && (r = {});
      var n = e.call(this) || this;
      return n.watches = /* @__PURE__ */ new Set(), n.addTypenameTransform = new qc($a), n.assumeImmutableResults = !0, n.makeVar = Zg, n.txCount = 0, n.config = Vg(r), n.addTypename = !!n.config.addTypename, n.policies = new ry({
        cache: n,
        dataIdFromObject: n.config.dataIdFromObject,
        possibleTypes: n.config.possibleTypes,
        typePolicies: n.config.typePolicies
      }), n.init(), n;
    }
    return t.prototype.init = function() {
      var r = this.data = new Nr.Root({
        policies: this.policies,
        resultCaching: this.config.resultCaching
      });
      this.optimisticData = r.stump, this.resetResultCache();
    }, t.prototype.resetResultCache = function(r) {
      var n = this, i = this.storeReader, a = this.config.fragments;
      this.storeWriter = new ny(this, this.storeReader = new Hg({
        cache: this,
        addTypename: this.addTypename,
        resultCacheMaxSize: this.config.resultCacheMaxSize,
        canonizeResults: yl(this.config),
        canon: r ? void 0 : i && i.canon,
        fragments: a
      }), a), this.maybeBroadcastWatch = Pr(function(o, s) {
        return n.broadcastWatch(o, s);
      }, {
        max: this.config.resultCacheMaxSize || Je["inMemoryCache.maybeBroadcastWatch"] || 5e3,
        makeCacheKey: function(o) {
          var s = o.optimistic ? n.optimisticData : n.data;
          if (Ir(s)) {
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
              lt({ optimistic: u, id: c, variables: l })
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
        return this.storeReader.diffQueryAgainstStore(C(C({}, r), { store: r.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: i })).result || null;
      } catch (a) {
        if (a instanceof hl)
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
      if (De.call(r, "id") && !r.id)
        return !1;
      var n = r.optimistic ? this.optimisticData : this.data;
      try {
        return ++this.txCount, n.modify(r.id || "ROOT_QUERY", r.fields);
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
      }
    }, t.prototype.diff = function(r) {
      return this.storeReader.diffQueryAgainstStore(C(C({}, r), { store: r.optimistic ? this.optimisticData : this.data, rootId: r.id || "ROOT_QUERY", config: this.config }));
    }, t.prototype.watch = function(r) {
      var n = this;
      return this.watches.size || Xg(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r), function() {
        n.watches.delete(r) && !n.watches.size && Os(n), n.maybeBroadcastWatch.forget(r);
      };
    }, t.prototype.gc = function(r) {
      var n;
      lt.reset(), ut.reset(), this.addTypenameTransform.resetCache(), (n = this.config.fragments) === null || n === void 0 || n.resetCaches();
      var i = this.optimisticData.gc();
      return r && !this.txCount && (r.resetResultCache ? this.resetResultCache(r.resetResultIdentities) : r.resetResultIdentities && this.storeReader.resetCanon()), i;
    }, t.prototype.retain = function(r, n) {
      return (n ? this.optimisticData : this.data).retain(r);
    }, t.prototype.release = function(r, n) {
      return (n ? this.optimisticData : this.data).release(r);
    }, t.prototype.identify = function(r) {
      if (fe(r))
        return r.__ref;
      try {
        return this.policies.identify(r)[0];
      } catch (n) {
        globalThis.__DEV__ !== !1 && K.warn(n);
      }
    }, t.prototype.evict = function(r) {
      if (!r.id) {
        if (De.call(r, "id"))
          return !1;
        r = C(C({}, r), { id: "ROOT_QUERY" });
      }
      try {
        return ++this.txCount, this.optimisticData.evict(r, this.data);
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
      }
    }, t.prototype.reset = function(r) {
      var n = this;
      return this.init(), lt.reset(), r && r.discardWatches ? (this.watches.forEach(function(i) {
        return n.maybeBroadcastWatch.forget(i);
      }), this.watches.clear(), Os(this)) : this.broadcastWatches(), Promise.resolve();
    }, t.prototype.removeOptimistic = function(r) {
      var n = this.optimisticData.removeLayer(r);
      n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches());
    }, t.prototype.batch = function(r) {
      var n = this, i = r.update, a = r.optimistic, o = a === void 0 ? !0 : a, s = r.removeOptimistic, u = r.onWatchUpdated, c, l = function(f) {
        var p = n, y = p.data, S = p.optimisticData;
        ++n.txCount, f && (n.data = n.optimisticData = f);
        try {
          return c = i(n);
        } finally {
          --n.txCount, n.data = y, n.optimisticData = S;
        }
      }, d = /* @__PURE__ */ new Set();
      return u && !this.txCount && this.broadcastWatches(C(C({}, r), { onWatchUpdated: function(f) {
        return d.add(f), !1;
      } })), typeof o == "string" ? this.optimisticData = this.optimisticData.addLayer(o, l) : o === !1 ? l(this.data) : l(), typeof s == "string" && (this.optimisticData = this.optimisticData.removeLayer(s)), u && d.size ? (this.broadcastWatches(C(C({}, r), { onWatchUpdated: function(f, p) {
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
      n && (r.optimistic && typeof n.optimistic == "string" && (a.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, r, a, i) === !1) || (!i || !pe(i.result, a.result)) && r.callback(r.lastDiff = a, i);
    }, t;
  })(pl)
);
globalThis.__DEV__ !== !1 && (Ga.prototype.getMemoryInternals = sm);
var ce;
(function(e) {
  e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(ce || (ce = {}));
function qt(e) {
  return e ? e < 7 : !1;
}
var js = Object.assign, ay = Object.hasOwnProperty, an = (
  /** @class */
  (function(e) {
    Re(t, e);
    function t(r) {
      var n = r.queryManager, i = r.queryInfo, a = r.options, o = this, s = t.inactiveOnCreation.getValue();
      o = e.call(this, function(g) {
        o._getOrCreateQuery();
        try {
          var _ = g._subscription._observer;
          _ && !_.error && (_.error = oy);
        } catch {
        }
        var I = !o.observers.size;
        o.observers.add(g);
        var k = o.last;
        return k && k.error ? g.error && g.error(k.error) : k && k.result && g.next && g.next(o.maskResult(k.result)), I && o.reobserve().catch(function() {
        }), function() {
          o.observers.delete(g) && !o.observers.size && o.tearDownQuery();
        };
      }) || this, o.observers = /* @__PURE__ */ new Set(), o.subscriptions = /* @__PURE__ */ new Set(), o.dirty = !1, o._getOrCreateQuery = function() {
        return s && (n.queries.set(o.queryId, i), s = !1), o.queryManager.getOrCreateQuery(o.queryId);
      }, o.queryInfo = i, o.queryManager = n, o.waitForOwnResult = di(a.fetchPolicy), o.isTornDown = !1, o.subscribeToMore = o.subscribeToMore.bind(o), o.maskResult = o.maskResult.bind(o);
      var u = n.defaultOptions.watchQuery, c = u === void 0 ? {} : u, l = c.fetchPolicy, d = l === void 0 ? "cache-first" : l, f = a.fetchPolicy, p = f === void 0 ? d : f, y = a.initialFetchPolicy, S = y === void 0 ? p === "standby" ? d : p : y;
      o.options = C(C({}, a), {
        // Remember the initial options.fetchPolicy so we can revert back to this
        // policy when variables change. This information can also be specified
        // (or overridden) by providing options.initialFetchPolicy explicitly.
        initialFetchPolicy: S,
        // This ensures this.options.fetchPolicy always has a string value, in
        // case options.fetchPolicy was not provided.
        fetchPolicy: p
      }), o.queryId = i.queryId || n.generateQueryId();
      var h = Ot(o.query);
      return o.queryName = h && h.name && h.name.value, o;
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
      var n = this.getLastResult(!0), i = this.queryInfo.networkStatus || n && n.networkStatus || ce.ready, a = C(C({}, n), { loading: qt(i), networkStatus: i }), o = this.options.fetchPolicy, s = o === void 0 ? "cache-first" : o;
      if (
        // These fetch policies should never deliver data from the cache, unless
        // redelivering a previously delivered result.
        !(di(s) || // If this.options.query has @client(always: true) fields, we cannot
        // trust diff.result, since it was read from the cache without running
        // local resolvers (and it's too late to run resolvers now, since we must
        // return a result synchronously).
        this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)
      ) if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var u = this.queryInfo.getDiff();
        (u.complete || this.options.returnPartialData) && (a.data = u.result), pe(a.data, {}) && (a.data = void 0), u.complete ? (delete a.partial, u.complete && a.networkStatus === ce.loading && (s === "cache-first" || s === "cache-only") && (a.networkStatus = ce.ready, a.loading = !1)) : a.partial = !0, a.networkStatus === ce.ready && (a.error || a.errors) && (a.networkStatus = ce.error), globalThis.__DEV__ !== !1 && !u.complete && !this.options.partialRefetch && !a.loading && !a.data && !a.error && Tl(u.missing);
      }
      return r && this.updateLastResult(a), a;
    }, t.prototype.getCurrentResult = function(r) {
      return r === void 0 && (r = !0), this.maskResult(this.getCurrentFullResult(r));
    }, t.prototype.isDifferentFromLastResult = function(r, n) {
      if (!this.last)
        return !0;
      var i = this.queryManager.getDocumentInfo(this.query), a = this.queryManager.dataMasking, o = a ? i.nonReactiveQuery : this.query, s = a || i.hasNonreactiveDirective ? !sl(o, this.last.result, r, this.variables) : !pe(this.last.result, r);
      return s || n && !pe(this.last.variables, n);
    }, t.prototype.getLast = function(r, n) {
      var i = this.last;
      if (i && i[r] && (!n || pe(i.variables, this.variables)))
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
      if (a === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && r && ay.call(r, "variables")) {
        var o = Oc(this.query), s = o.variableDefinitions;
        (!s || !s.some(function(u) {
          return u.variable.name.value === "variables";
        })) && globalThis.__DEV__ !== !1 && K.warn(
          21,
          r,
          ((n = o.name) === null || n === void 0 ? void 0 : n.value) || o
        );
      }
      return r && !pe(this.options.variables, r) && (i.variables = this.options.variables = C(C({}, this.options.variables), r)), this.queryInfo.resetLastWrite(), this.reobserve(i, ce.refetch);
    }, t.prototype.fetchMore = function(r) {
      var n = this, i = C(C({}, r.query ? r : C(C(C(C({}, this.options), { query: this.options.query }), r), { variables: C(C({}, this.options.variables), r.variables) })), {
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
      o.networkStatus = ce.fetchMore, i.notifyOnNetworkStatusChange && this.observe();
      var u = /* @__PURE__ */ new Set(), c = r?.updateQuery, l = this.options.fetchPolicy !== "no-cache";
      return l || K(c, 22), this.queryManager.fetchQuery(a, i, ce.fetchMore).then(function(d) {
        if (n.queryManager.removeQuery(a), o.networkStatus === ce.fetchMore && (o.networkStatus = s), l)
          n.queryManager.cache.batch({
            update: function(y) {
              var S = r.updateQuery;
              S ? y.updateQuery({
                query: n.query,
                variables: n.variables,
                returnPartialData: !0,
                optimistic: !1
              }, function(h) {
                return S(h, {
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
          n.reportResult(C(C({}, f), { networkStatus: s, loading: qt(s), data: p }), n.variables);
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
            return o(s, C({ subscriptionData: a }, u));
          });
        },
        error: function(a) {
          if (r.onError) {
            r.onError(a);
            return;
          }
          globalThis.__DEV__ !== !1 && K.error(23, a);
        }
      });
      return this.subscriptions.add(i), function() {
        n.subscriptions.delete(i) && i.unsubscribe();
      };
    }, t.prototype.setOptions = function(r) {
      return this.reobserve(r);
    }, t.prototype.silentSetOptions = function(r) {
      var n = Xt(this.options, r || {});
      js(this.options, n);
    }, t.prototype.setVariables = function(r) {
      return pe(this.variables, r) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = r, this.observers.size ? this.reobserve({
        // Reset options.fetchPolicy to its original value.
        fetchPolicy: this.options.initialFetchPolicy,
        variables: r
      }, ce.setVariables) : Promise.resolve());
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
          K(a, 24);
          var o = i || (this.pollingInfo = {});
          o.interval = a;
          var s = function() {
            var c, l;
            r.pollingInfo && (!qt(r.queryInfo.networkStatus) && !(!((l = (c = r.options).skipPollAttempt) === null || l === void 0) && l.call(c)) ? r.reobserve({
              // Most fetchPolicy options don't make sense to use in a polling context, as
              // users wouldn't want to be polling the cache directly. However, network-only and
              // no-cache are both useful for when the user wants to control whether or not the
              // polled results are written to the cache.
              fetchPolicy: r.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
            }, ce.poll).then(u, u) : u());
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
      return i && this.last && !pe(n, this.last.variables) && (i = void 0), this.last = C({ result: this.queryManager.assumeImmutableResults ? r : Yc(r), variables: n }, i ? { error: i } : null);
    }, t.prototype.reobserveAsConcast = function(r, n) {
      var i = this;
      this.isTornDown = !1;
      var a = (
        // Refetching uses a disposable Concast to allow refetches using different
        // options/variables, without permanently altering the options of the
        // original ObservableQuery.
        n === ce.refetch || // The fetchMore method does not actually call the reobserve method, but,
        // if it did, it would definitely use a disposable Concast.
        n === ce.fetchMore || // Polling uses a disposable Concast so the polling options (which force
        // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
        n === ce.poll
      ), o = this.options.variables, s = this.options.fetchPolicy, u = Xt(this.options, r || {}), c = a ? (
        // Disposable Concast fetches receive a shallow copy of this.options
        // (merged with newOptions), leaving this.options unmodified.
        u
      ) : js(this.options, u), l = this.transformDocument(c.query);
      this.lastQuery = l, a || (this.updatePolling(), r && r.variables && !pe(r.variables, o) && // Don't mess with the fetchPolicy if it's currently "standby".
      c.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
      // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
      (c.fetchPolicy === s || // A `nextFetchPolicy` function has even higher priority, though,
      // so in that case `applyNextFetchPolicy` must be called.
      typeof c.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", c), n === void 0 && (n = ce.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = di(c.fetchPolicy));
      var d = function() {
        i.concast === y && (i.waitForOwnResult = !1);
      }, f = c.variables && C({}, c.variables), p = this.fetch(c, n, l), y = p.concast, S = p.fromLink, h = {
        next: function(g) {
          pe(i.variables, f) && (d(), i.reportResult(g, f));
        },
        error: function(g) {
          pe(i.variables, f) && (Zc(g) || (g = new st({ networkError: g })), d(), i.reportError(g, f));
        }
      };
      return !a && (S || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = y, this.observer = h), y.addObserver(h), y;
    }, t.prototype.reobserve = function(r, n) {
      return eg(this.reobserveAsConcast(r, n).promise.then(this.maskResult));
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
      (i || !r.partial || this.options.returnPartialData) && this.updateLastResult(r, n), (i || a) && Dr(this.observers, "next", this.maskResult(r));
    }, t.prototype.reportError = function(r, n) {
      var i = C(C({}, this.getLastResult()), { error: r, errors: r.graphQLErrors, networkStatus: ce.error, loading: !1 });
      this.updateLastResult(i, n), Dr(this.observers, "error", this.last.error = r);
    }, t.prototype.hasObservers = function() {
      return this.observers.size > 0;
    }, t.prototype.tearDownQuery = function() {
      this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(r) {
        return r.unsubscribe();
      }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
    }, t.prototype.transformDocument = function(r) {
      return this.queryManager.transform(r);
    }, t.prototype.maskResult = function(r) {
      return r && "data" in r ? C(C({}, r), { data: this.queryManager.maskOperation({
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
      if (this.cancelNotifyTimeout(), this.dirty && (this.options.fetchPolicy == "cache-only" || this.options.fetchPolicy == "cache-and-network" || !qt(this.queryInfo.networkStatus))) {
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
    }, t.inactiveOnCreation = new jr(), t;
  })(le)
);
Hc(an);
function oy(e) {
  globalThis.__DEV__ !== !1 && K.error(25, e.message, e.stack);
}
function Tl(e) {
  globalThis.__DEV__ !== !1 && e && globalThis.__DEV__ !== !1 && K.debug(26, e);
}
function di(e) {
  return e === "network-only" || e === "no-cache" || e === "standby";
}
var Bt = new (xt ? WeakMap : Map)();
function pi(e, t) {
  var r = e[t];
  typeof r == "function" && (e[t] = function() {
    return Bt.set(
      e,
      // The %1e15 allows the count to wrap around to 0 safely every
      // quadrillion evictions, so there's no risk of overflow. To be
      // clear, this is more of a pedantic principle than something
      // that matters in any conceivable practical scenario.
      (Bt.get(e) + 1) % 1e15
    ), r.apply(this, arguments);
  });
}
var hi = (
  /** @class */
  (function() {
    function e(t, r) {
      r === void 0 && (r = t.generateQueryId()), this.queryId = r, this.document = null, this.lastRequestId = 1, this.stopped = !1, this.observableQuery = null;
      var n = this.cache = t.cache;
      Bt.has(n) || (Bt.set(n, 0), pi(n, "evict"), pi(n, "modify"), pi(n, "reset"));
    }
    return e.prototype.init = function(t) {
      var r = t.networkStatus || ce.loading;
      return this.variables && this.networkStatus !== ce.loading && !pe(this.variables, t.variables) && (r = ce.setVariables), pe(t.variables, this.variables) || (this.lastDiff = void 0, this.cancel()), Object.assign(this, {
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
      if (this.lastDiff && pe(t, this.lastDiff.options))
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
      t && !t.complete && (!((r = this.observableQuery) === null || r === void 0) && r.getLastError()) || (this.updateLastDiff(t), pe(i && i.result, t && t.result) || (n = this.observableQuery) === null || n === void 0 || n.scheduleNotify());
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
        var i = C(C({}, this.getDiffOptions(t)), { watcher: this, callback: function(a) {
          return r.setDiff(a);
        } });
        (!this.lastWatch || !pe(i, this.lastWatch)) && (this.cancel(), this.cancelWatch = this.cache.watch(this.lastWatch = i));
      }
    }, e.prototype.resetLastWrite = function() {
      this.lastWrite = void 0;
    }, e.prototype.shouldWrite = function(t, r) {
      var n = this.lastWrite;
      return !(n && // If cache.evict has been called since the last time we wrote this
      // data into the cache, there's a chance writing this result into
      // the cache will repair what was evicted.
      n.dmCount === Bt.get(this.cache) && pe(r, n.variables) && pe(t.data, n.result.data));
    }, e.prototype.markResult = function(t, r, n, i) {
      var a = this, o, s = new gt(), u = Qe(t.errors) ? t.errors.slice(0) : [];
      if ((o = this.observableQuery) === null || o === void 0 || o.resetNotifications(), "incremental" in t && Qe(t.incremental)) {
        var c = Jc(this.getDiff().result, t);
        t.data = c;
      } else if ("hasNext" in t && t.hasNext) {
        var l = this.getDiff();
        t.data = s.merge(l.result, t.data);
      }
      this.graphQLErrors = u, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: t.data, complete: !0 }, this.getDiffOptions(n.variables)) : i !== 0 && (ca(t, n.errorPolicy) ? this.cache.performTransaction(function(d) {
        if (a.shouldWrite(t, n.variables))
          d.writeQuery({
            query: r,
            data: t.data,
            variables: n.variables,
            overwrite: i === 1
          }), a.lastWrite = {
            result: t,
            variables: n.variables,
            dmCount: Bt.get(a.cache)
          };
        else if (a.lastDiff && a.lastDiff.diff.complete) {
          t.data = a.lastDiff.diff.result;
          return;
        }
        var f = a.getDiffOptions(n.variables), p = d.diff(f);
        !a.stopped && pe(a.variables, n.variables) && a.updateWatch(n.variables), a.updateLastDiff(p, f), p.complete && (t.data = p.result);
      }) : this.lastWrite = void 0);
    }, e.prototype.markReady = function() {
      return this.networkError = null, this.networkStatus = ce.ready;
    }, e.prototype.markError = function(t) {
      var r;
      return this.networkStatus = ce.error, this.lastWrite = void 0, (r = this.observableQuery) === null || r === void 0 || r.resetNotifications(), t.graphQLErrors && (this.graphQLErrors = t.graphQLErrors), t.networkError && (this.networkError = t.networkError), t;
    }, e;
  })()
);
function ca(e, t) {
  t === void 0 && (t = "none");
  var r = t === "ignore" || t === "all", n = !tn(e);
  return !n && r && e.data && (n = !0), n;
}
var sy = Object.prototype.hasOwnProperty, Us = /* @__PURE__ */ Object.create(null), uy = (
  /** @class */
  (function() {
    function e(t) {
      var r = this;
      this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new wc(
        Je["queryManager.getDocumentInfo"] || 2e3
        /* defaultCacheSizes["queryManager.getDocumentInfo"] */
      ), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new Ze(!1), this.noCacheWarningsByQueryId = /* @__PURE__ */ new Set();
      var n = new qc(
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
      }), this.cancelPendingFetches(Ae(27));
    }, e.prototype.cancelPendingFetches = function(t) {
      this.fetchCancelFns.forEach(function(r) {
        return r(t);
      }), this.fetchCancelFns.clear();
    }, e.prototype.mutate = function(t) {
      return it(this, arguments, void 0, function(r) {
        var n, i, a, o, s, u, c, l = r.mutation, d = r.variables, f = r.optimisticResponse, p = r.updateQueries, y = r.refetchQueries, S = y === void 0 ? [] : y, h = r.awaitRefetchQueries, g = h === void 0 ? !1 : h, _ = r.update, I = r.onQueryUpdated, k = r.fetchPolicy, P = k === void 0 ? ((u = this.defaultOptions.mutate) === null || u === void 0 ? void 0 : u.fetchPolicy) || "network-only" : k, w = r.errorPolicy, x = w === void 0 ? ((c = this.defaultOptions.mutate) === null || c === void 0 ? void 0 : c.errorPolicy) || "none" : w, v = r.keepRootFields, D = r.context;
        return at(this, function(b) {
          switch (b.label) {
            case 0:
              return K(l, 28), K(P === "network-only" || P === "no-cache", 29), n = this.generateMutationId(), l = this.cache.transformForLink(this.transform(l)), i = this.getDocumentInfo(l).hasClientExports, d = this.getVariables(l, d), i ? [4, this.localState.addExportedVariables(l, d, D)] : [3, 2];
            case 1:
              d = b.sent(), b.label = 2;
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
                fetchPolicy: P,
                errorPolicy: x,
                context: D,
                updateQueries: p,
                update: _,
                keepRootFields: v
              }), this.broadcastQueries(), s = this, [2, new Promise(function(A, $) {
                return oi(s.getObservableFromLink(l, C(C({}, D), { optimisticResponse: o ? f : void 0 }), d, {}, !1), function(Q) {
                  if (tn(Q) && x === "none")
                    throw new st({
                      graphQLErrors: ra(Q)
                    });
                  a && (a.loading = !1, a.error = null);
                  var H = C({}, Q);
                  return typeof S == "function" && (S = S(H)), x === "ignore" && tn(H) && delete H.errors, s.markMutationResult({
                    mutationId: n,
                    result: H,
                    document: l,
                    variables: d,
                    fetchPolicy: P,
                    errorPolicy: x,
                    context: D,
                    update: _,
                    updateQueries: p,
                    awaitRefetchQueries: g,
                    refetchQueries: S,
                    removeOptimistic: o ? n : void 0,
                    onQueryUpdated: I,
                    keepRootFields: v
                  });
                }).subscribe({
                  next: function(Q) {
                    s.broadcastQueries(), (!("hasNext" in Q) || Q.hasNext === !1) && A(C(C({}, Q), { data: s.maskOperation({
                      document: l,
                      data: Q.data,
                      fetchPolicy: P,
                      id: n
                    }) }));
                  },
                  error: function(Q) {
                    a && (a.loading = !1, a.error = Q), o && s.cache.removeOptimistic(n), s.broadcastQueries(), $(Q instanceof st ? Q : new st({
                      networkError: Q
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
      if (!o && ca(i, t.errorPolicy)) {
        if (zt(i) || a.push({
          result: i.data,
          dataId: "ROOT_MUTATION",
          query: t.document,
          variables: t.variables
        }), zt(i) && Qe(i.incremental)) {
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
          s.result && (u = Jc(s.result, i)), typeof u < "u" && (i.data = u, a.push({
            result: u,
            dataId: "ROOT_MUTATION",
            query: t.document,
            variables: t.variables
          }));
        }
        var c = t.updateQueries;
        c && this.queries.forEach(function(d, f) {
          var p = d.observableQuery, y = p && p.queryName;
          if (!(!y || !sy.call(c, y))) {
            var S = c[y], h = n.queries.get(f), g = h.document, _ = h.variables, I = r.diff({
              query: g,
              variables: _,
              returnPartialData: !0,
              optimistic: !1
            }), k = I.result, P = I.complete;
            if (P && k) {
              var w = S(k, {
                mutationResult: i,
                queryName: g && br(g) || void 0,
                queryVariables: _
              });
              w && a.push({
                result: w,
                dataId: "ROOT_QUERY",
                query: g,
                variables: _
              });
            }
          }
        });
      }
      if (a.length > 0 || (t.refetchQueries || "").length > 0 || t.update || t.onQueryUpdated || t.removeOptimistic) {
        var l = [];
        if (this.refetchQueries({
          updateCache: function(d) {
            o || a.forEach(function(S) {
              return d.write(S);
            });
            var f = t.update, p = !ag(i) || zt(i) && !i.hasNext;
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
                y.complete && (i = C(C({}, i), { data: y.result }), "incremental" in i && delete i.incremental, "hasNext" in i && delete i.hasNext);
              }
              p && f(d, i, {
                context: t.context,
                variables: t.variables
              });
            }
            !o && !t.keepRootFields && p && d.modify({
              id: "ROOT_MUTATION",
              fields: function(S, h) {
                var g = h.fieldName, _ = h.DELETE;
                return g === "__typename" ? S : _;
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
      var n = this, i = typeof t == "function" ? t(r.variables, { IGNORE: Us }) : t;
      return i === Us ? !1 : (this.cache.recordOptimisticTransaction(function(a) {
        try {
          n.markMutationResult(C(C({}, r), { result: { data: i } }), a);
        } catch (o) {
          globalThis.__DEV__ !== !1 && K.error(o);
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
          hasClientExports: qh(t),
          hasForcedResolvers: this.localState.shouldForceResolvers(t),
          hasNonreactiveDirective: Fr(["nonreactive"], t),
          nonReactiveQuery: Vm(t),
          clientQuery: this.localState.clientQuery(t),
          serverQuery: Vc([
            { name: "client", remove: !0 },
            { name: "connection" },
            { name: "nonreactive" },
            { name: "unmask" }
          ], t),
          defaultVars: Aa(Ot(t)),
          // Transform any mutation or subscription operations to query operations
          // so we can read/write them from/to the cache.
          asQuery: C(C({}, t), { definitions: t.definitions.map(function(i) {
            return i.kind === "OperationDefinition" && i.operation !== "query" ? C(C({}, i), { operation: "query" }) : i;
          }) })
        };
        r.set(t, n);
      }
      return r.get(t);
    }, e.prototype.getVariables = function(t, r) {
      return C(C({}, this.getDocumentInfo(t).defaultVars), r);
    }, e.prototype.watchQuery = function(t) {
      var r = this.transform(t.query);
      t = C(C({}, t), { variables: this.getVariables(r, t.variables) }), typeof t.notifyOnNetworkStatusChange > "u" && (t.notifyOnNetworkStatusChange = !1);
      var n = new hi(this), i = new an({
        queryManager: this,
        queryInfo: n,
        options: t
      });
      return i.lastQuery = r, an.inactiveOnCreation.getValue() || this.queries.set(i.queryId, n), n.init({
        document: r,
        observableQuery: i,
        variables: i.variables
      }), i;
    }, e.prototype.query = function(t, r) {
      var n = this;
      r === void 0 && (r = this.generateQueryId()), K(t.query, 30), K(t.query.kind === "Document", 31), K(!t.returnPartialData, 32), K(!t.pollInterval, 33);
      var i = this.transform(t.query);
      return this.fetchQuery(r, C(C({}, t), { query: i })).then(function(a) {
        return a && C(C({}, a), { data: n.maskOperation({
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
      }), this.cancelPendingFetches(Ae(34)), this.queries.forEach(function(r) {
        r.observableQuery ? r.networkStatus = ce.loading : r.stop();
      }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(t);
    }, e.prototype.getObservableQueries = function(t) {
      var r = this;
      t === void 0 && (t = "active");
      var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
      return Array.isArray(t) && t.forEach(function(s) {
        if (typeof s == "string")
          i.set(s, s), a.set(s, !1);
        else if (mm(s)) {
          var u = ut(r.transform(s));
          i.set(u, br(s)), a.set(u, !1);
        } else me(s) && s.query && o.add(s);
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
          (t === "active" || d && a.has(d) || l && a.has(ut(l))) && (n.set(u, c), d && a.set(d, !0), l && a.set(ut(l), !0));
        }
      }), o.size && o.forEach(function(s) {
        var u = Gi("legacyOneTimeQuery"), c = r.getOrCreateQuery(u).init({
          document: s.query,
          variables: s.variables
        }), l = new an({
          queryManager: r,
          queryInfo: c,
          options: C(C({}, s), { fetchPolicy: "network-only" })
        });
        K(l.queryId === u), c.setObservableQuery(l), n.set(u, l);
      }), globalThis.__DEV__ !== !1 && a.size && a.forEach(function(s, u) {
        if (!s) {
          var c = i.get(u);
          c ? globalThis.__DEV__ !== !1 && K.warn(35, c) : globalThis.__DEV__ !== !1 && K.warn(36);
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
        return r.getObservableFromLink(n, c, y, d).map(function(S) {
          a !== "no-cache" && (ca(S, s) && r.cache.write({
            query: n,
            result: S.data,
            dataId: "ROOT_SUBSCRIPTION",
            variables: y
          }), r.broadcastQueries());
          var h = tn(S), g = Xc(S);
          if (h || g) {
            var _ = {};
            if (h && (_.graphQLErrors = S.errors), g && (_.protocolErrors = S.extensions[Fn]), s === "none" || g)
              throw new st(_);
          }
          return s === "ignore" && delete S.errors, S;
        });
      };
      if (this.getDocumentInfo(n).hasClientExports) {
        var p = this.localState.addExportedVariables(n, i, c).then(f);
        return new le(function(y) {
          var S = null;
          return p.then(function(h) {
            return S = h.subscribe(y);
          }, y.error), function() {
            return S && S.unsubscribe();
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
        var f = this, p = f.inFlightLinkObservables, y = f.link, S = {
          query: l,
          variables: n,
          operationName: br(l) || void 0,
          context: this.prepareContext(C(C({}, r), { forceFetch: !a })),
          extensions: i
        };
        if (r = S.context, a) {
          var h = ut(l), g = lt(n), _ = p.lookup(h, g);
          if (u = _.observable, !u) {
            var I = new Rt([
              na(y, S)
            ]);
            u = _.observable = I, I.beforeNext(function k(P, w) {
              P === "next" && "hasNext" in w && w.hasNext ? I.beforeNext(k) : p.remove(h, g);
            });
          }
        } else
          u = new Rt([
            na(y, S)
          ]);
      } else
        u = new Rt([le.of({ data: {} })]), r = this.prepareContext(r);
      return d && (u = oi(u, function(k) {
        return o.localState.runResolvers({
          document: d,
          remoteResult: k,
          context: r,
          variables: n
        });
      })), u;
    }, e.prototype.getResultsFromLink = function(t, r, n) {
      var i = t.lastRequestId = this.generateRequestId(), a = this.cache.transformForLink(n.query);
      return oi(this.getObservableFromLink(a, n.context, n.variables), function(o) {
        var s = ra(o), u = s.length > 0, c = n.errorPolicy;
        if (i >= t.lastRequestId) {
          if (u && c === "none")
            throw t.markError(new st({
              graphQLErrors: s
            }));
          t.markResult(o, a, n, r), t.markReady();
        }
        var l = {
          data: o.data,
          loading: !1,
          networkStatus: ce.ready
        };
        return u && c === "none" && (l.data = void 0), u && c !== "ignore" && (l.errors = s, l.networkStatus = ce.error), l;
      }, function(o) {
        var s = Zc(o) ? o : new st({ networkError: o });
        throw i >= t.lastRequestId && t.markError(s), s;
      });
    }, e.prototype.fetchConcastWithInfo = function(t, r, n, i) {
      var a = this;
      n === void 0 && (n = ce.loading), i === void 0 && (i = r.query);
      var o = this.getVariables(i, r.variables), s = this.defaultOptions.watchQuery, u = r.fetchPolicy, c = u === void 0 ? s && s.fetchPolicy || "cache-first" : u, l = r.errorPolicy, d = l === void 0 ? s && s.errorPolicy || "none" : l, f = r.returnPartialData, p = f === void 0 ? !1 : f, y = r.notifyOnNetworkStatusChange, S = y === void 0 ? !1 : y, h = r.context, g = h === void 0 ? {} : h, _ = Object.assign({}, r, {
        query: i,
        variables: o,
        fetchPolicy: c,
        errorPolicy: d,
        returnPartialData: p,
        notifyOnNetworkStatusChange: S,
        context: g
      }), I = function(v) {
        _.variables = v;
        var D = a.fetchQueryByPolicy(t, _, n);
        return (
          // If we're in standby, postpone advancing options.fetchPolicy using
          // applyNextFetchPolicy.
          _.fetchPolicy !== "standby" && // The "standby" policy currently returns [] from fetchQueryByPolicy, so
          // this is another way to detect when nothing was done/fetched.
          D.sources.length > 0 && t.observableQuery && t.observableQuery.applyNextFetchPolicy("after-fetch", r), D
        );
      }, k = function() {
        return a.fetchCancelFns.delete(t.queryId);
      };
      this.fetchCancelFns.set(t.queryId, function(v) {
        k(), setTimeout(function() {
          return P.cancel(v);
        });
      });
      var P, w;
      if (this.getDocumentInfo(_.query).hasClientExports)
        P = new Rt(this.localState.addExportedVariables(_.query, _.variables, _.context).then(I).then(function(v) {
          return v.sources;
        })), w = !0;
      else {
        var x = I(_.variables);
        w = x.fromLink, P = new Rt(x.sources);
      }
      return P.promise.then(k, k), {
        concast: P,
        fromLink: w
      };
    }, e.prototype.refetchQueries = function(t) {
      var r = this, n = t.updateCache, i = t.include, a = t.optimistic, o = a === void 0 ? !1 : a, s = t.removeOptimistic, u = s === void 0 ? o ? Gi("refetchQueries") : void 0 : s, c = t.onQueryUpdated, l = /* @__PURE__ */ new Map();
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
          var S = f.watcher instanceof hi && f.watcher.observableQuery;
          if (S) {
            if (c) {
              l.delete(S.queryId);
              var h = c(S, p, y);
              return h === !0 && (h = S.refetch()), h !== !1 && d.set(S, h), h;
            }
            c !== null && l.set(S.queryId, { oq: S, lastDiff: y, diff: p });
          }
        }
      }), l.size && l.forEach(function(f, p) {
        var y = f.oq, S = f.lastDiff, h = f.diff, g;
        c && (h || (h = r.cache.diff(y.queryInfo.getDiffOptions())), g = c(y, h, S)), (!c || g === !0) && (g = y.refetch()), g !== !1 && d.set(y, g), p.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(p);
      }), u && this.cache.removeOptimistic(u), d;
    }, e.prototype.maskOperation = function(t) {
      var r, n, i, a = t.document, o = t.data;
      if (globalThis.__DEV__ !== !1) {
        var s = t.fetchPolicy, u = t.id, c = (r = Ot(a)) === null || r === void 0 ? void 0 : r.operation, l = ((n = c?.[0]) !== null && n !== void 0 ? n : "o") + u;
        this.dataMasking && s === "no-cache" && !Kh(a) && !this.noCacheWarningsByQueryId.has(l) && (this.noCacheWarningsByQueryId.add(l), globalThis.__DEV__ !== !1 && K.warn(
          37,
          (i = br(a)) !== null && i !== void 0 ? i : "Unnamed ".concat(c ?? "operation")
        ));
      }
      return this.dataMasking ? Bg(o, a, this.cache) : o;
    }, e.prototype.maskFragment = function(t) {
      var r = t.data, n = t.fragment, i = t.fragmentName;
      return this.dataMasking ? dl(r, n, this.cache, i) : r;
    }, e.prototype.fetchQueryByPolicy = function(t, r, n) {
      var i = this, a = r.query, o = r.variables, s = r.fetchPolicy, u = r.refetchWritePolicy, c = r.errorPolicy, l = r.returnPartialData, d = r.context, f = r.notifyOnNetworkStatusChange, p = t.networkStatus;
      t.init({
        document: a,
        variables: o,
        networkStatus: n
      });
      var y = function() {
        return t.getDiff();
      }, S = function(k, P) {
        P === void 0 && (P = t.networkStatus || ce.loading);
        var w = k.result;
        globalThis.__DEV__ !== !1 && !l && !pe(w, {}) && Tl(k.missing);
        var x = function(v) {
          return le.of(C({ data: v, loading: qt(P), networkStatus: P }, k.complete ? null : { partial: !0 }));
        };
        return w && i.getDocumentInfo(a).hasForcedResolvers ? i.localState.runResolvers({
          document: a,
          remoteResult: { data: w },
          context: d,
          variables: o,
          onlyRunForcedResolvers: !0
        }).then(function(v) {
          return x(v.data || void 0);
        }) : c === "none" && P === ce.refetch && Array.isArray(k.missing) ? x(void 0) : x(w);
      }, h = s === "no-cache" ? 0 : n === ce.refetch && u !== "merge" ? 1 : 2, g = function() {
        return i.getResultsFromLink(t, h, {
          query: a,
          variables: o,
          context: d,
          fetchPolicy: s,
          errorPolicy: c
        });
      }, _ = f && typeof p == "number" && p !== n && qt(n);
      switch (s) {
        default:
        case "cache-first": {
          var I = y();
          return I.complete ? {
            fromLink: !1,
            sources: [S(I, t.markReady())]
          } : l || _ ? {
            fromLink: !0,
            sources: [S(I), g()]
          } : { fromLink: !0, sources: [g()] };
        }
        case "cache-and-network": {
          var I = y();
          return I.complete || l || _ ? {
            fromLink: !0,
            sources: [S(I), g()]
          } : { fromLink: !0, sources: [g()] };
        }
        case "cache-only":
          return {
            fromLink: !1,
            sources: [S(y(), t.markReady())]
          };
        case "network-only":
          return _ ? {
            fromLink: !0,
            sources: [S(y()), g()]
          } : { fromLink: !0, sources: [g()] };
        case "no-cache":
          return _ ? {
            fromLink: !0,
            // Note that queryInfo.getDiff() for no-cache queries does not call
            // cache.diff, but instead returns a { complete: false } stub result
            // when there is no queryInfo.diff already defined.
            sources: [S(t.getDiff()), g()]
          } : { fromLink: !0, sources: [g()] };
        case "standby":
          return { fromLink: !1, sources: [] };
      }
    }, e.prototype.getOrCreateQuery = function(t) {
      return t && !this.queries.has(t) && this.queries.set(t, new hi(this, t)), this.queries.get(t);
    }, e.prototype.prepareContext = function(t) {
      t === void 0 && (t = {});
      var r = this.localState.prepareContext(t);
      return C(C(C({}, this.defaultContext), r), { clientAwareness: this.clientAwareness });
    }, e;
  })()
), cy = (
  /** @class */
  (function() {
    function e(t) {
      var r = t.cache, n = t.client, i = t.resolvers, a = t.fragmentMatcher;
      this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = r, n && (this.client = n), i && this.addResolvers(i), a && this.setFragmentMatcher(a);
    }
    return e.prototype.addResolvers = function(t) {
      var r = this;
      this.resolvers = this.resolvers || {}, Array.isArray(t) ? t.forEach(function(n) {
        r.resolvers = ss(r.resolvers, n);
      }) : this.resolvers = ss(this.resolvers, t);
    }, e.prototype.setResolvers = function(t) {
      this.resolvers = {}, this.addResolvers(t);
    }, e.prototype.getResolvers = function() {
      return this.resolvers || {};
    }, e.prototype.runResolvers = function(t) {
      return it(this, arguments, void 0, function(r) {
        var n = r.document, i = r.remoteResult, a = r.context, o = r.variables, s = r.onlyRunForcedResolvers, u = s === void 0 ? !1 : s;
        return at(this, function(c) {
          return n ? [2, this.resolveDocument(n, i.data, a, o, this.fragmentMatcher, u).then(function(l) {
            return C(C({}, i), { data: l.result });
          })] : [2, i];
        });
      });
    }, e.prototype.setFragmentMatcher = function(t) {
      this.fragmentMatcher = t;
    }, e.prototype.getFragmentMatcher = function() {
      return this.fragmentMatcher;
    }, e.prototype.clientQuery = function(t) {
      return Fr(["client"], t) && this.resolvers ? t : null;
    }, e.prototype.serverQuery = function(t) {
      return Gc(t);
    }, e.prototype.prepareContext = function(t) {
      var r = this.cache;
      return C(C({}, t), {
        cache: r,
        // Getting an entry's cache key is useful for local state resolvers.
        getCacheKey: function(n) {
          return r.identify(n);
        }
      });
    }, e.prototype.addExportedVariables = function(t) {
      return it(this, arguments, void 0, function(r, n, i) {
        return n === void 0 && (n = {}), i === void 0 && (i = {}), at(this, function(a) {
          return r ? [2, this.resolveDocument(r, this.buildRootValueFromCache(r, n) || {}, this.prepareContext(i), n).then(function(o) {
            return C(C({}, n), o.exportedVariables);
          })] : [2, C({}, n)];
        });
      });
    }, e.prototype.shouldForceResolvers = function(t) {
      var r = !1;
      return Ue(t, {
        Directive: {
          enter: function(n) {
            if (n.name.value === "client" && n.arguments && (r = n.arguments.some(function(i) {
              return i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0;
            }), r))
              return Dn;
          }
        }
      }), r;
    }, e.prototype.buildRootValueFromCache = function(t, r) {
      return this.cache.diff({
        query: Bm(t),
        variables: r,
        returnPartialData: !0,
        optimistic: !1
      }).result;
    }, e.prototype.resolveDocument = function(t, r) {
      return it(this, arguments, void 0, function(n, i, a, o, s, u) {
        var c, l, d, f, p, y, S, h, g, _, I;
        return a === void 0 && (a = {}), o === void 0 && (o = {}), s === void 0 && (s = function() {
          return !0;
        }), u === void 0 && (u = !1), at(this, function(k) {
          return c = ir(n), l = nr(n), d = tr(l), f = this.collectSelectionsToResolve(c, d), p = c.operation, y = p ? p.charAt(0).toUpperCase() + p.slice(1) : "Query", S = this, h = S.cache, g = S.client, _ = {
            fragmentMap: d,
            context: C(C({}, a), { cache: h, client: g }),
            variables: o,
            fragmentMatcher: s,
            defaultOperationType: y,
            exportedVariables: {},
            selectionsToResolve: f,
            onlyRunForcedResolvers: u
          }, I = !1, [2, this.resolveSelectionSet(c.selectionSet, I, i, _).then(function(P) {
            return {
              result: P,
              exportedVariables: _.exportedVariables
            };
          })];
        });
      });
    }, e.prototype.resolveSelectionSet = function(t, r, n, i) {
      return it(this, void 0, void 0, function() {
        var a, o, s, u, c, l = this;
        return at(this, function(d) {
          return a = i.fragmentMap, o = i.context, s = i.variables, u = [n], c = function(f) {
            return it(l, void 0, void 0, function() {
              var p, y;
              return at(this, function(S) {
                return !r && !i.selectionsToResolve.has(f) ? [
                  2
                  /*return*/
                ] : Lr(f, s) ? ht(f) ? [2, this.resolveField(f, r, n, i).then(function(h) {
                  var g;
                  typeof h < "u" && u.push((g = {}, g[Ke(f)] = h, g));
                })] : (km(f) ? p = f : (p = a[f.name.value], K(p, 19, f.name.value)), p && p.typeCondition && (y = p.typeCondition.name.value, i.fragmentMatcher(n, y, o)) ? [2, this.resolveSelectionSet(p.selectionSet, r, n, i).then(function(h) {
                  u.push(h);
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
            return An(u);
          })];
        });
      });
    }, e.prototype.resolveField = function(t, r, n, i) {
      return it(this, void 0, void 0, function() {
        var a, o, s, u, c, l, d, f, p, y = this;
        return at(this, function(S) {
          return n ? (a = i.variables, o = t.name.value, s = Ke(t), u = o !== s, c = n[s] || n[o], l = Promise.resolve(c), (!i.onlyRunForcedResolvers || this.shouldForceResolvers(t)) && (d = n.__typename || i.defaultOperationType, f = this.resolvers && this.resolvers[d], f && (p = f[u ? o : s], p && (l = Promise.resolve(
            // In case the resolve function accesses reactive variables,
            // set cacheSlot to the current cache instance.
            Ua.withValue(this.cache, p, [
              n,
              kn(t, a),
              i.context,
              { field: t, fragmentMap: i.fragmentMap }
            ])
          )))), [2, l.then(function(h) {
            var g, _;
            if (h === void 0 && (h = c), t.directives && t.directives.forEach(function(k) {
              k.name.value === "export" && k.arguments && k.arguments.forEach(function(P) {
                P.name.value === "as" && P.value.kind === "StringValue" && (i.exportedVariables[P.value.value] = h);
              });
            }), !t.selectionSet || h == null)
              return h;
            var I = (_ = (g = t.directives) === null || g === void 0 ? void 0 : g.some(function(k) {
              return k.name.value === "client";
            })) !== null && _ !== void 0 ? _ : !1;
            if (Array.isArray(h))
              return y.resolveSubSelectedArray(t, r || I, h, i);
            if (t.selectionSet)
              return y.resolveSelectionSet(t.selectionSet, r || I, h, i);
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
          i.set(o, s), Ue(o, {
            Directive: function(u, c, l, d, f) {
              u.name.value === "client" && f.forEach(function(p) {
                n(p) && Xo(p) && s.add(p);
              });
            },
            FragmentSpread: function(u, c, l, d, f) {
              var p = r[u.name.value];
              K(p, 20, u.name.value);
              var y = a(p);
              y.size > 0 && (f.forEach(function(S) {
                n(S) && Xo(S) && s.add(S);
              }), s.add(u), y.forEach(function(S) {
                s.add(S);
              }));
            }
          });
        }
        return i.get(o);
      }
      return a(t);
    }, e;
  })()
), qs = !1, za = (
  /** @class */
  (function() {
    function e(t) {
      var r = this, n;
      if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !t.cache)
        throw Ae(16);
      var i = t.uri, a = t.credentials, o = t.headers, s = t.cache, u = t.documentTransform, c = t.ssrMode, l = c === void 0 ? !1 : c, d = t.ssrForceFetchDelay, f = d === void 0 ? 0 : d, p = t.connectToDevTools, y = t.queryDeduplication, S = y === void 0 ? !0 : y, h = t.defaultOptions, g = t.defaultContext, _ = t.assumeImmutableResults, I = _ === void 0 ? s.assumeImmutableResults : _, k = t.resolvers, P = t.typeDefs, w = t.fragmentMatcher, x = t.name, v = t.version, D = t.devtools, b = t.dataMasking, A = t.link;
      A || (A = i ? new $g({ uri: i, credentials: a, headers: o }) : qe.empty()), this.link = A, this.cache = s, this.disableNetworkFetches = l || f > 0, this.queryDeduplication = S, this.defaultOptions = h || /* @__PURE__ */ Object.create(null), this.typeDefs = P, this.devtoolsConfig = C(C({}, D), { enabled: (n = D?.enabled) !== null && n !== void 0 ? n : p }), this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1), f && setTimeout(function() {
        return r.disableNetworkFetches = !1;
      }, f), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = Da, this.localState = new cy({
        cache: s,
        client: this,
        resolvers: k,
        fragmentMatcher: w
      }), this.queryManager = new uy({
        cache: this.cache,
        link: this.link,
        defaultOptions: this.defaultOptions,
        defaultContext: g,
        documentTransform: u,
        queryDeduplication: S,
        ssrMode: l,
        dataMasking: !!b,
        clientAwareness: {
          name: x,
          version: v
        },
        localState: this.localState,
        assumeImmutableResults: I,
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
        (t[r] = t[r] || []).push(this), t.__APOLLO_CLIENT__ = this, !qs && globalThis.__DEV__ !== !1 && (qs = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
          if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
            var n = window.navigator, i = n && n.userAgent, a = void 0;
            typeof i == "string" && (i.indexOf("Chrome/") > -1 ? a = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : i.indexOf("Firefox/") > -1 && (a = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), a && globalThis.__DEV__ !== !1 && K.log("Download the Apollo DevTools for a better development experience: %s", a);
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
      return this.defaultOptions.watchQuery && (t = si(this.defaultOptions.watchQuery, t)), this.disableNetworkFetches && (t.fetchPolicy === "network-only" || t.fetchPolicy === "cache-and-network") && (t = C(C({}, t), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(t);
    }, e.prototype.query = function(t) {
      return this.defaultOptions.query && (t = si(this.defaultOptions.query, t)), K(t.fetchPolicy !== "cache-and-network", 17), this.disableNetworkFetches && t.fetchPolicy === "network-only" && (t = C(C({}, t), { fetchPolicy: "cache-first" })), this.queryManager.query(t);
    }, e.prototype.mutate = function(t) {
      return this.defaultOptions.mutate && (t = si(this.defaultOptions.mutate, t)), this.queryManager.mutate(t);
    }, e.prototype.subscribe = function(t) {
      var r = this, n = this.queryManager.generateQueryId();
      return this.queryManager.startGraphQLSubscription(t).map(function(i) {
        return C(C({}, i), { data: r.queryManager.maskOperation({
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
      return this.cache.watchFragment(C(C({}, t), (r = {}, r[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, r)));
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
      return na(this.link, t);
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
        globalThis.__DEV__ !== !1 && K.debug(18, o);
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
globalThis.__DEV__ !== !1 && (za.prototype.getMemoryInternals = om);
var on = /* @__PURE__ */ new Map(), la = /* @__PURE__ */ new Map(), kl = !0, hn = !1;
function Ol(e) {
  return e.replace(/[\s,]+/g, " ").trim();
}
function ly(e) {
  return Ol(e.source.body.substring(e.start, e.end));
}
function fy(e) {
  var t = /* @__PURE__ */ new Set(), r = [];
  return e.definitions.forEach(function(n) {
    if (n.kind === "FragmentDefinition") {
      var i = n.name.value, a = ly(n.loc), o = la.get(i);
      o && !o.has(a) ? kl && console.warn("Warning: fragment with name " + i + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : o || la.set(i, o = /* @__PURE__ */ new Set()), o.add(a), t.has(a) || (t.add(a), r.push(n));
    } else
      r.push(n);
  }), C(C({}, e), { definitions: r });
}
function dy(e) {
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
function py(e) {
  var t = Ol(e);
  if (!on.has(t)) {
    var r = Fh(e, {
      experimentalFragmentVariables: hn,
      allowLegacyFragmentVariables: hn
    });
    if (!r || r.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    on.set(t, dy(fy(r)));
  }
  return on.get(t);
}
function E(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  typeof e == "string" && (e = [e]);
  var n = e[0];
  return t.forEach(function(i, a) {
    i && i.kind === "Document" ? n += i.loc.source.body : n += i, n += e[a + 1];
  }), py(n);
}
function hy() {
  on.clear(), la.clear();
}
function my() {
  kl = !1;
}
function gy() {
  hn = !0;
}
function yy() {
  hn = !1;
}
var hr = {
  gql: E,
  resetCaches: hy,
  disableFragmentWarnings: my,
  enableExperimentalFragmentVariables: gy,
  disableExperimentalFragmentVariables: yy
};
(function(e) {
  e.gql = hr.gql, e.resetCaches = hr.resetCaches, e.disableFragmentWarnings = hr.disableFragmentWarnings, e.enableExperimentalFragmentVariables = hr.enableExperimentalFragmentVariables, e.disableExperimentalFragmentVariables = hr.disableExperimentalFragmentVariables;
})(E || (E = {}));
E.default = E;
var Bs;
(function(e) {
  e.Database = "DATABASE", e.Filesystem = "FILESYSTEM";
})(Bs || (Bs = {}));
var Vs;
(function(e) {
  e.Add = "ADD", e.Remove = "REMOVE", e.Set = "SET";
})(Vs || (Vs = {}));
var Gs;
(function(e) {
  e.Cut = "CUT", e.Uncut = "UNCUT";
})(Gs || (Gs = {}));
var zs;
(function(e) {
  e.Between = "BETWEEN", e.Equals = "EQUALS", e.Excludes = "EXCLUDES", e.GreaterThan = "GREATER_THAN", e.Includes = "INCLUDES", e.IncludesAll = "INCLUDES_ALL", e.IsNull = "IS_NULL", e.LessThan = "LESS_THAN", e.MatchesRegex = "MATCHES_REGEX", e.NotBetween = "NOT_BETWEEN", e.NotEquals = "NOT_EQUALS", e.NotMatchesRegex = "NOT_MATCHES_REGEX", e.NotNull = "NOT_NULL";
})(zs || (zs = {}));
var Qs;
(function(e) {
  e.Galleries = "GALLERIES", e.Groups = "GROUPS", e.Images = "IMAGES", e.Movies = "MOVIES", e.Performers = "PERFORMERS", e.Scenes = "SCENES", e.SceneMarkers = "SCENE_MARKERS", e.Studios = "STUDIOS", e.Tags = "TAGS";
})(Qs || (Qs = {}));
var Ws;
(function(e) {
  e.Female = "FEMALE", e.Intersex = "INTERSEX", e.Male = "MALE", e.NonBinary = "NON_BINARY", e.TransgenderFemale = "TRANSGENDER_FEMALE", e.TransgenderMale = "TRANSGENDER_MALE";
})(Ws || (Ws = {}));
var Ys;
(function(e) {
  e.Md5 = "MD5", e.Oshash = "OSHASH";
})(Ys || (Ys = {}));
var Hs;
(function(e) {
  e.Ignore = "IGNORE", e.Merge = "MERGE", e.Overwrite = "OVERWRITE";
})(Hs || (Hs = {}));
var Js;
(function(e) {
  e.FitX = "FIT_X", e.FitXy = "FIT_XY", e.Original = "ORIGINAL";
})(Js || (Js = {}));
var Ks;
(function(e) {
  e.PanY = "PAN_Y", e.Zoom = "ZOOM";
})(Ks || (Ks = {}));
var Xs;
(function(e) {
  e.Fail = "FAIL", e.Ignore = "IGNORE", e.Overwrite = "OVERWRITE";
})(Xs || (Xs = {}));
var Zs;
(function(e) {
  e.Create = "CREATE", e.Fail = "FAIL", e.Ignore = "IGNORE";
})(Zs || (Zs = {}));
var eu;
(function(e) {
  e.Cancelled = "CANCELLED", e.Failed = "FAILED", e.Finished = "FINISHED", e.Ready = "READY", e.Running = "RUNNING", e.Stopping = "STOPPING";
})(eu || (eu = {}));
var tu;
(function(e) {
  e.Add = "ADD", e.Remove = "REMOVE", e.Update = "UPDATE";
})(tu || (tu = {}));
var ru;
(function(e) {
  e.Debug = "Debug", e.Error = "Error", e.Info = "Info", e.Progress = "Progress", e.Trace = "Trace", e.Warning = "Warning";
})(ru || (ru = {}));
var nu;
(function(e) {
  e.Landscape = "LANDSCAPE", e.Portrait = "PORTRAIT", e.Square = "SQUARE";
})(nu || (nu = {}));
var iu;
(function(e) {
  e.Plugin = "Plugin", e.Scraper = "Scraper";
})(iu || (iu = {}));
var au;
(function(e) {
  e.Boolean = "BOOLEAN", e.Number = "NUMBER", e.String = "STRING";
})(au || (au = {}));
var ou;
(function(e) {
  e.Fast = "fast", e.Medium = "medium", e.Slow = "slow", e.Slower = "slower", e.Ultrafast = "ultrafast", e.Veryfast = "veryfast", e.Veryslow = "veryslow";
})(ou || (ou = {}));
var su;
(function(e) {
  e.EightK = "EIGHT_K", e.FiveK = "FIVE_K", e.FourK = "FOUR_K", e.FullHd = "FULL_HD", e.Huge = "HUGE", e.Low = "LOW", e.QuadHd = "QUAD_HD", e.R360P = "R360P", e.SevenK = "SEVEN_K", e.SixK = "SIX_K", e.Standard = "STANDARD", e.StandardHd = "STANDARD_HD", e.VeryLow = "VERY_LOW", e.VrHd = "VR_HD", e.WebHd = "WEB_HD";
})(su || (su = {}));
var uu;
(function(e) {
  e.Gallery = "GALLERY", e.Group = "GROUP", e.Image = "IMAGE", e.Movie = "MOVIE", e.Performer = "PERFORMER", e.Scene = "SCENE";
})(uu || (uu = {}));
var cu;
(function(e) {
  e.Fragment = "FRAGMENT", e.Name = "NAME", e.Url = "URL";
})(cu || (cu = {}));
var lu;
(function(e) {
  e.Asc = "ASC", e.Desc = "DESC";
})(lu || (lu = {}));
var fu;
(function(e) {
  e.FourK = "FOUR_K", e.FullHd = "FULL_HD", e.Low = "LOW", e.Original = "ORIGINAL", e.Standard = "STANDARD", e.StandardHd = "STANDARD_HD";
})(fu || (fu = {}));
var du;
(function(e) {
  e.NeedsMigration = "NEEDS_MIGRATION", e.Ok = "OK", e.Setup = "SETUP";
})(du || (du = {}));
const xl = E`
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
    `, Al = E`
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
    `, Fl = E`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  port
  whitelistedIPs
  interfaces
  videoSortOrder
}
    `, Cl = E`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `, vy = E`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `, by = E`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `, Sy = E`
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
    ${by}`, Pl = E`
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
    ${vy}
${Sy}`, _y = E`
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
    ${xl}
${Al}
${Fl}
${Cl}
${Pl}`;
E`
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
const Qa = E`
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
    `, wy = E`
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
    `, Ey = E`
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
    `, $l = E`
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
    `, Cn = E`
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
    ${$l}`, Nl = E`
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
    `, Rl = E`
    fragment FolderData on Folder {
  id
  path
}
    `, Wa = E`
    fragment GalleryChapterData on GalleryChapter {
  id
  title
  image_index
  gallery {
    id
  }
}
    `, Pn = E`
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
    `, At = E`
    fragment SlimTagData on Tag {
  id
  name
  sort_name
  aliases
  image_path
  parent_count
  child_count
}
    `, vt = E`
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
    ${At}`, Ml = E`
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
    `, ar = E`
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
    ${Ml}`, or = E`
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
    ${Nl}
${Rl}
${Wa}
${Pn}
${At}
${vt}
${ar}`, Dy = E`
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
    ${or}
${Pn}
${At}
${vt}
${$l}`, Ll = E`
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
    `, jl = E`
    fragment LogEntryData on LogEntry {
  time
  level
  message
}
    `, sr = E`
    fragment PackageData on Package {
  package_id
  name
  version
  date
  metadata
  sourceURL
}
    `;
E`
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
const Iy = E`
    fragment SelectPerformerData on Performer {
  id
  name
  disambiguation
  alias_list
  image_path
  birthdate
  death_date
}
    `, Ty = E`
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
    `, Ft = E`
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
    ${Ty}`, Ul = E`
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
    ${Nl}
${Rl}
${ar}`, ky = E`
    fragment SlimGroupData on Group {
  id
  name
  front_image_path
  rating100
}
    `, ur = E`
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
    ${Pn}
${At}
${ky}`, bt = E`
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
    ${Ml}
${Ft}
${Ul}
${Pn}
${ur}
${At}
${vt}`, Oy = E`
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
    `, xy = E`
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
    `, St = E`
    fragment ScrapedSceneTagData on ScrapedTag {
  stored_id
  name
}
    `, Ya = E`
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
    ${St}`, ql = E`
    fragment ScrapedGroupStudioData on ScrapedStudio {
  stored_id
  name
  url
}
    `, Ay = E`
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
    ${ql}
${St}`, $n = E`
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
    `, Ur = E`
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
    ${St}`, Bl = E`
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
    ${ql}
${St}`, Ha = E`
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
    ${$n}
${St}
${Ur}
${Bl}`, Vl = E`
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
    ${$n}
${St}
${Ur}`, Gl = E`
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
    ${$n}
${St}
${Ur}`;
E`
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
    ${$n}
${St}
${Ur}
${Bl}`;
E`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${Ur}`;
const Nn = E`
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
    ${At}`, Fy = E`
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
    `, cr = E`
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
    ${At}`, Cy = E`
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
E`
    mutation Setup($input: SetupInput!) {
  setup(input: $input)
}
    `;
E`
    mutation Migrate($input: MigrateInput!) {
  migrate(input: $input)
}
    `;
E`
    mutation DownloadFFMpeg {
  downloadFFMpeg
}
    `;
E`
    mutation ConfigureGeneral($input: ConfigGeneralInput!) {
  configureGeneral(input: $input) {
    ...ConfigGeneralData
  }
}
    ${xl}`;
E`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${Al}`;
E`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${Fl}`;
E`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${Cl}`;
E`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${Pl}`;
E`
    mutation ConfigureUI($input: Map, $partial: Map) {
  configureUI(input: $input, partial: $partial)
}
    `;
E`
    mutation ConfigureUISetting($key: String!, $value: Any) {
  configureUISetting(key: $key, value: $value)
}
    `;
E`
    mutation GenerateAPIKey($input: GenerateAPIKeyInput!) {
  generateAPIKey(input: $input)
}
    `;
E`
    mutation EnableDLNA($input: EnableDLNAInput!) {
  enableDLNA(input: $input)
}
    `;
E`
    mutation DisableDLNA($input: DisableDLNAInput!) {
  disableDLNA(input: $input)
}
    `;
E`
    mutation AddTempDLNAIP($input: AddTempDLNAIPInput!) {
  addTempDLNAIP(input: $input)
}
    `;
E`
    mutation RemoveTempDLNAIP($input: RemoveTempDLNAIPInput!) {
  removeTempDLNAIP(input: $input)
}
    `;
E`
    mutation DeleteFiles($ids: [ID!]!) {
  deleteFiles(ids: $ids)
}
    `;
E`
    mutation SaveFilter($input: SaveFilterInput!) {
  saveFilter(input: $input) {
    ...SavedFilterData
  }
}
    ${Qa}`;
E`
    mutation DestroySavedFilter($input: DestroyFilterInput!) {
  destroySavedFilter(input: $input)
}
    `;
E`
    mutation GalleryChapterCreate($title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterCreate(
    input: {title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${Wa}`;
E`
    mutation GalleryChapterUpdate($id: ID!, $title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterUpdate(
    input: {id: $id, title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${Wa}`;
E`
    mutation GalleryChapterDestroy($id: ID!) {
  galleryChapterDestroy(id: $id)
}
    `;
E`
    mutation GalleryCreate($input: GalleryCreateInput!) {
  galleryCreate(input: $input) {
    ...GalleryData
  }
}
    ${or}`;
E`
    mutation GalleryUpdate($input: GalleryUpdateInput!) {
  galleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${or}`;
E`
    mutation BulkGalleryUpdate($input: BulkGalleryUpdateInput!) {
  bulkGalleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${or}`;
E`
    mutation GalleriesUpdate($input: [GalleryUpdateInput!]!) {
  galleriesUpdate(input: $input) {
    ...GalleryData
  }
}
    ${or}`;
E`
    mutation GalleryDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  galleryDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
E`
    mutation AddGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  addGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `;
E`
    mutation RemoveGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  removeGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `;
E`
    mutation SetGalleryCover($gallery_id: ID!, $cover_image_id: ID!) {
  setGalleryCover(
    input: {gallery_id: $gallery_id, cover_image_id: $cover_image_id}
  )
}
    `;
E`
    mutation ResetGalleryCover($gallery_id: ID!) {
  resetGalleryCover(input: {gallery_id: $gallery_id})
}
    `;
E`
    mutation GroupCreate($input: GroupCreateInput!) {
  groupCreate(input: $input) {
    ...GroupData
  }
}
    ${ur}`;
E`
    mutation GroupUpdate($input: GroupUpdateInput!) {
  groupUpdate(input: $input) {
    ...GroupData
  }
}
    ${ur}`;
E`
    mutation BulkGroupUpdate($input: BulkGroupUpdateInput!) {
  bulkGroupUpdate(input: $input) {
    ...GroupData
  }
}
    ${ur}`;
E`
    mutation GroupDestroy($id: ID!) {
  groupDestroy(input: {id: $id})
}
    `;
E`
    mutation GroupsDestroy($ids: [ID!]!) {
  groupsDestroy(ids: $ids)
}
    `;
E`
    mutation AddGroupSubGroups($input: GroupSubGroupAddInput!) {
  addGroupSubGroups(input: $input)
}
    `;
E`
    mutation RemoveGroupSubGroups($input: GroupSubGroupRemoveInput!) {
  removeGroupSubGroups(input: $input)
}
    `;
E`
    mutation ReorderSubGroups($input: ReorderSubGroupsInput!) {
  reorderSubGroups(input: $input)
}
    `;
E`
    mutation ImageUpdate($input: ImageUpdateInput!) {
  imageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Cn}`;
E`
    mutation BulkImageUpdate($input: BulkImageUpdateInput!) {
  bulkImageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Cn}`;
E`
    mutation ImagesUpdate($input: [ImageUpdateInput!]!) {
  imagesUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Cn}`;
E`
    mutation ImageIncrementO($id: ID!) {
  imageIncrementO(id: $id)
}
    `;
E`
    mutation ImageDecrementO($id: ID!) {
  imageDecrementO(id: $id)
}
    `;
E`
    mutation ImageResetO($id: ID!) {
  imageResetO(id: $id)
}
    `;
E`
    mutation ImageDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  imageDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
E`
    mutation ImagesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  imagesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
E`
    mutation StopJob($job_id: ID!) {
  stopJob(job_id: $job_id)
}
    `;
E`
    mutation StopAllJobs {
  stopAllJobs
}
    `;
E`
    mutation MetadataImport {
  metadataImport
}
    `;
E`
    mutation MetadataExport {
  metadataExport
}
    `;
E`
    mutation ExportObjects($input: ExportObjectsInput!) {
  exportObjects(input: $input)
}
    `;
E`
    mutation ImportObjects($input: ImportObjectsInput!) {
  importObjects(input: $input)
}
    `;
E`
    mutation MetadataScan($input: ScanMetadataInput!) {
  metadataScan(input: $input)
}
    `;
E`
    mutation MetadataGenerate($input: GenerateMetadataInput!) {
  metadataGenerate(input: $input)
}
    `;
E`
    mutation MetadataAutoTag($input: AutoTagMetadataInput!) {
  metadataAutoTag(input: $input)
}
    `;
E`
    mutation MetadataIdentify($input: IdentifyMetadataInput!) {
  metadataIdentify(input: $input)
}
    `;
E`
    mutation MetadataClean($input: CleanMetadataInput!) {
  metadataClean(input: $input)
}
    `;
E`
    mutation MetadataCleanGenerated($input: CleanGeneratedInput!) {
  metadataCleanGenerated(input: $input)
}
    `;
E`
    mutation MigrateHashNaming {
  migrateHashNaming
}
    `;
E`
    mutation BackupDatabase($input: BackupDatabaseInput!) {
  backupDatabase(input: $input)
}
    `;
E`
    mutation AnonymiseDatabase($input: AnonymiseDatabaseInput!) {
  anonymiseDatabase(input: $input)
}
    `;
E`
    mutation OptimiseDatabase {
  optimiseDatabase
}
    `;
E`
    mutation MigrateSceneScreenshots($input: MigrateSceneScreenshotsInput!) {
  migrateSceneScreenshots(input: $input)
}
    `;
E`
    mutation MigrateBlobs($input: MigrateBlobsInput!) {
  migrateBlobs(input: $input)
}
    `;
E`
    mutation PerformerCreate($input: PerformerCreateInput!) {
  performerCreate(input: $input) {
    ...PerformerData
  }
}
    ${vt}`;
E`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${vt}`;
E`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${vt}`;
E`
    mutation PerformerDestroy($id: ID!) {
  performerDestroy(input: {id: $id})
}
    `;
E`
    mutation PerformersDestroy($ids: [ID!]!) {
  performersDestroy(ids: $ids)
}
    `;
E`
    mutation ReloadPlugins {
  reloadPlugins
}
    `;
E`
    mutation RunPluginTask($plugin_id: ID!, $task_name: String!, $args_map: Map) {
  runPluginTask(plugin_id: $plugin_id, task_name: $task_name, args_map: $args_map)
}
    `;
const Py = E`
    mutation ConfigurePlugin($plugin_id: ID!, $input: Map!) {
  configurePlugin(plugin_id: $plugin_id, input: $input)
}
    `;
E`
    mutation SetPluginsEnabled($enabledMap: BoolMap!) {
  setPluginsEnabled(enabledMap: $enabledMap)
}
    `;
E`
    mutation InstallPluginPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Plugin, packages: $packages)
}
    `;
E`
    mutation UpdatePluginPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Plugin, packages: $packages)
}
    `;
E`
    mutation UninstallPluginPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Plugin, packages: $packages)
}
    `;
E`
    mutation SceneMarkerCreate($title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerCreate(
    input: {title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${Ft}`;
E`
    mutation SceneMarkerUpdate($id: ID!, $title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerUpdate(
    input: {id: $id, title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${Ft}`;
E`
    mutation SceneMarkerDestroy($id: ID!) {
  sceneMarkerDestroy(id: $id)
}
    `;
E`
    mutation SceneMarkersDestroy($ids: [ID!]!) {
  sceneMarkersDestroy(ids: $ids)
}
    `;
E`
    mutation SceneCreate($input: SceneCreateInput!) {
  sceneCreate(input: $input) {
    ...SceneData
  }
}
    ${bt}`;
E`
    mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${bt}`;
E`
    mutation BulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${bt}`;
E`
    mutation ScenesUpdate($input: [SceneUpdateInput!]!) {
  scenesUpdate(input: $input) {
    ...SceneData
  }
}
    ${bt}`;
E`
    mutation SceneSaveActivity($id: ID!, $resume_time: Float, $playDuration: Float) {
  sceneSaveActivity(
    id: $id
    resume_time: $resume_time
    playDuration: $playDuration
  )
}
    `;
E`
    mutation SceneResetActivity($id: ID!, $reset_resume: Boolean!, $reset_duration: Boolean!) {
  sceneResetActivity(
    id: $id
    reset_resume: $reset_resume
    reset_duration: $reset_duration
  )
}
    `;
E`
    mutation SceneAddPlay($id: ID!, $times: [Timestamp!]) {
  sceneAddPlay(id: $id, times: $times) {
    count
    history
  }
}
    `;
E`
    mutation SceneDeletePlay($id: ID!, $times: [Timestamp!]) {
  sceneDeletePlay(id: $id, times: $times) {
    count
    history
  }
}
    `;
E`
    mutation SceneResetPlayCount($id: ID!) {
  sceneResetPlayCount(id: $id)
}
    `;
E`
    mutation SceneAddO($id: ID!, $times: [Timestamp!]) {
  sceneAddO(id: $id, times: $times) {
    count
    history
  }
}
    `;
E`
    mutation SceneDeleteO($id: ID!, $times: [Timestamp!]) {
  sceneDeleteO(id: $id, times: $times) {
    count
    history
  }
}
    `;
E`
    mutation SceneResetO($id: ID!) {
  sceneResetO(id: $id)
}
    `;
E`
    mutation SceneDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  sceneDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
E`
    mutation ScenesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  scenesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
E`
    mutation SceneGenerateScreenshot($id: ID!, $at: Float) {
  sceneGenerateScreenshot(id: $id, at: $at)
}
    `;
E`
    mutation SceneAssignFile($input: AssignSceneFileInput!) {
  sceneAssignFile(input: $input)
}
    `;
E`
    mutation SceneMerge($input: SceneMergeInput!) {
  sceneMerge(input: $input) {
    id
  }
}
    `;
E`
    mutation ReloadScrapers {
  reloadScrapers
}
    `;
E`
    mutation InstallScraperPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Scraper, packages: $packages)
}
    `;
E`
    mutation UpdateScraperPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Scraper, packages: $packages)
}
    `;
E`
    mutation UninstallScraperPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Scraper, packages: $packages)
}
    `;
E`
    mutation SubmitStashBoxFingerprints($input: StashBoxFingerprintSubmissionInput!) {
  submitStashBoxFingerprints(input: $input)
}
    `;
E`
    mutation StashBoxBatchPerformerTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchPerformerTag(input: $input)
}
    `;
E`
    mutation StashBoxBatchStudioTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchStudioTag(input: $input)
}
    `;
E`
    mutation SubmitStashBoxSceneDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxSceneDraft(input: $input)
}
    `;
E`
    mutation SubmitStashBoxPerformerDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxPerformerDraft(input: $input)
}
    `;
E`
    mutation StudioCreate($input: StudioCreateInput!) {
  studioCreate(input: $input) {
    ...StudioData
  }
}
    ${Nn}`;
E`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${Nn}`;
E`
    mutation StudioDestroy($id: ID!) {
  studioDestroy(input: {id: $id})
}
    `;
E`
    mutation StudiosDestroy($ids: [ID!]!) {
  studiosDestroy(ids: $ids)
}
    `;
E`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${cr}`;
E`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `;
E`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `;
E`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${cr}`;
E`
    mutation BulkTagUpdate($input: BulkTagUpdateInput!) {
  bulkTagUpdate(input: $input) {
    ...TagData
  }
}
    ${cr}`;
E`
    mutation TagsMerge($source: [ID!]!, $destination: ID!) {
  tagsMerge(input: {source: $source, destination: $destination}) {
    ...TagData
  }
}
    ${cr}`;
E`
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
E`
    query FindSavedFilter($id: ID!) {
  findSavedFilter(id: $id) {
    ...SavedFilterData
  }
}
    ${Qa}`;
E`
    query FindSavedFilters($mode: FilterMode) {
  findSavedFilters(mode: $mode) {
    ...SavedFilterData
  }
}
    ${Qa}`;
E`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${Ul}`;
E`
    query FindGallery($id: ID!) {
  findGallery(id: $id) {
    ...GalleryData
  }
}
    ${or}`;
E`
    query FindGalleriesForSelect($filter: FindFilterType, $gallery_filter: GalleryFilterType, $ids: [ID!]) {
  findGalleries(filter: $filter, gallery_filter: $gallery_filter, ids: $ids) {
    count
    galleries {
      ...SelectGalleryData
    }
  }
}
    ${wy}`;
E`
    query FindGalleryImageID($id: ID!, $index: Int!) {
  findGallery(id: $id) {
    image(index: $index) {
      id
    }
  }
}
    `;
E`
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
    ${Cn}`;
E`
    query FindImage($id: ID!, $checksum: String) {
  findImage(id: $id, checksum: $checksum) {
    ...ImageData
  }
}
    ${Dy}`;
E`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${Ll}`;
E`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${Ll}`;
E`
    query SceneWall($q: String) {
  sceneWall(q: $q) {
    ...SceneData
  }
}
    ${bt}`;
E`
    query MarkerWall($q: String) {
  markerWall(q: $q) {
    ...SceneMarkerData
  }
}
    ${Ft}`;
E`
    query MarkerStrings($q: String, $sort: String) {
  markerStrings(q: $q, sort: $sort) {
    id
    count
    title
  }
}
    `;
E`
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
E`
    query Logs {
  logs {
    ...LogEntryData
  }
}
    ${jl}`;
E`
    query Version {
  version {
    version
    hash
    build_time
  }
}
    `;
E`
    query LatestVersion {
  latestversion {
    version
    shorthash
    release_date
    url
  }
}
    `;
E`
    query FindGroups($filter: FindFilterType, $group_filter: GroupFilterType) {
  findGroups(filter: $filter, group_filter: $group_filter) {
    count
    groups {
      ...GroupData
    }
  }
}
    ${ur}`;
E`
    query FindGroup($id: ID!) {
  findGroup(id: $id) {
    ...GroupData
  }
}
    ${ur}`;
E`
    query FindGroupsForSelect($filter: FindFilterType, $group_filter: GroupFilterType, $ids: [ID!]) {
  findGroups(filter: $filter, group_filter: $group_filter, ids: $ids) {
    count
    groups {
      ...SelectGroupData
    }
  }
}
    ${Ey}`;
E`
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
    ${vt}`;
E`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${vt}`;
E`
    query FindPerformersForSelect($filter: FindFilterType, $performer_filter: PerformerFilterType, $ids: [ID!]) {
  findPerformers(filter: $filter, performer_filter: $performer_filter, ids: $ids) {
    count
    performers {
      ...SelectPerformerData
    }
  }
}
    ${Iy}`;
E`
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
E`
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
E`
    query InstalledPluginPackages {
  installedPackages(type: Plugin) {
    ...PackageData
  }
}
    ${sr}`;
E`
    query InstalledPluginPackagesStatus {
  installedPackages(type: Plugin) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${sr}`;
E`
    query AvailablePluginPackages($source: String!) {
  availablePackages(source: $source, type: Plugin) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${sr}`;
E`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${Ft}`;
E`
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
    ${ar}`;
E`
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
    ${ar}`;
E`
    query FindDuplicateScenes($distance: Int, $duration_diff: Float) {
  findDuplicateScenes(distance: $distance, duration_diff: $duration_diff) {
    ...SlimSceneData
  }
}
    ${ar}`;
E`
    query FindScene($id: ID!, $checksum: String) {
  findScene(id: $id, checksum: $checksum) {
    ...SceneData
  }
}
    ${bt}`;
E`
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
    ${Ft}`;
E`
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
    ${ar}`;
E`
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
E`
    query FindScenesForSelect($filter: FindFilterType, $scene_filter: SceneFilterType, $ids: [ID!]) {
  findScenes(filter: $filter, scene_filter: $scene_filter, ids: $ids) {
    count
    scenes {
      ...SelectSceneData
    }
  }
}
    ${Oy}`;
E`
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
E`
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
E`
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
E`
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
E`
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
E`
    query ScrapeSingleStudio($source: ScraperSourceInput!, $input: ScrapeSingleStudioInput!) {
  scrapeSingleStudio(source: $source, input: $input) {
    ...ScrapedStudioData
  }
}
    ${xy}`;
E`
    query ScrapeSinglePerformer($source: ScraperSourceInput!, $input: ScrapeSinglePerformerInput!) {
  scrapeSinglePerformer(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${Ya}`;
E`
    query ScrapeMultiPerformers($source: ScraperSourceInput!, $input: ScrapeMultiPerformersInput!) {
  scrapeMultiPerformers(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${Ya}`;
E`
    query ScrapePerformerURL($url: String!) {
  scrapePerformerURL(url: $url) {
    ...ScrapedPerformerData
  }
}
    ${Ya}`;
E`
    query ScrapeSingleScene($source: ScraperSourceInput!, $input: ScrapeSingleSceneInput!) {
  scrapeSingleScene(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${Ha}`;
E`
    query ScrapeMultiScenes($source: ScraperSourceInput!, $input: ScrapeMultiScenesInput!) {
  scrapeMultiScenes(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${Ha}`;
E`
    query ScrapeSceneURL($url: String!) {
  scrapeSceneURL(url: $url) {
    ...ScrapedSceneData
  }
}
    ${Ha}`;
E`
    query ScrapeSingleGallery($source: ScraperSourceInput!, $input: ScrapeSingleGalleryInput!) {
  scrapeSingleGallery(source: $source, input: $input) {
    ...ScrapedGalleryData
  }
}
    ${Vl}`;
E`
    query ScrapeSingleImage($source: ScraperSourceInput!, $input: ScrapeSingleImageInput!) {
  scrapeSingleImage(source: $source, input: $input) {
    ...ScrapedImageData
  }
}
    ${Gl}`;
E`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${Vl}`;
E`
    query ScrapeImageURL($url: String!) {
  scrapeImageURL(url: $url) {
    ...ScrapedImageData
  }
}
    ${Gl}`;
E`
    query ScrapeGroupURL($url: String!) {
  scrapeGroupURL(url: $url) {
    ...ScrapedGroupData
  }
}
    ${Ay}`;
E`
    query InstalledScraperPackages {
  installedPackages(type: Scraper) {
    ...PackageData
  }
}
    ${sr}`;
E`
    query InstalledScraperPackagesStatus {
  installedPackages(type: Scraper) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${sr}`;
E`
    query AvailableScraperPackages($source: String!) {
  availablePackages(source: $source, type: Scraper) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${sr}`;
const $y = E`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${_y}`;
E`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `;
E`
    query ValidateStashBox($input: StashBoxInput!) {
  validateStashBoxCredentials(input: $input) {
    valid
    status
  }
}
    `;
E`
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
E`
    query FindStudios($filter: FindFilterType, $studio_filter: StudioFilterType) {
  findStudios(filter: $filter, studio_filter: $studio_filter) {
    count
    studios {
      ...StudioData
    }
  }
}
    ${Nn}`;
E`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${Nn}`;
E`
    query FindStudiosForSelect($filter: FindFilterType, $studio_filter: StudioFilterType, $ids: [ID!]) {
  findStudios(filter: $filter, studio_filter: $studio_filter, ids: $ids) {
    count
    studios {
      ...SelectStudioData
    }
  }
}
    ${Fy}`;
E`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagData
    }
  }
}
    ${cr}`;
E`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${cr}`;
E`
    query FindTagsForSelect($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...SelectTagData
    }
  }
}
    ${Cy}`;
E`
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
    ${bt}`;
E`
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
    ${Ft}
${bt}`;
E`
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
E`
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
E`
    subscription LoggingSubscribe {
  loggingSubscribe {
    ...LogEntryData
  }
}
    ${jl}`;
const Ny = E`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `;
function Ry(e) {
  return me(e) && "code" in e && "reason" in e;
}
function My(e) {
  var t;
  return me(e) && ((t = e.target) === null || t === void 0 ? void 0 : t.readyState) === WebSocket.CLOSED;
}
var Ly = (
  /** @class */
  (function(e) {
    Re(t, e);
    function t(r) {
      var n = e.call(this) || this;
      return n.client = r, n;
    }
    return t.prototype.request = function(r) {
      var n = this;
      return new le(function(i) {
        return n.client.subscribe(C(C({}, r), { query: ut(r.query) }), {
          next: i.next.bind(i),
          complete: i.complete.bind(i),
          error: function(a) {
            if (a instanceof Error)
              return i.error(a);
            var o = Ry(a);
            return o || My(a) ? i.error(
              // reason will be available on clean closes
              new Error("Socket closed".concat(o ? " with event ".concat(a.code) : "").concat(o ? " ".concat(a.reason) : ""))
            ) : i.error(new st({
              graphQLErrors: Array.isArray(a) ? a : [a]
            }));
          }
          // casting around a wrong type in graphql-ws, which incorrectly expects `Sink<ExecutionResult>`
        });
      });
    }, t;
  })(qe)
);
function Pe(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function wt(e) {
  return Pe(e) === "object";
}
function jy(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function pu(e, t) {
  return e.length < 124 ? e : t;
}
const Uy = "graphql-transport-ws";
var $e;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})($e || ($e = {}));
var ve;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(ve || (ve = {}));
function zl(e) {
  if (!wt(e))
    throw new Error(`Message is expected to be an object, but got ${Pe(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${Pe(e.type)}`);
  switch (e.type) {
    case ve.ConnectionInit:
    case ve.ConnectionAck:
    case ve.Ping:
    case ve.Pong: {
      if (e.payload != null && !wt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case ve.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Pe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!wt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Pe(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${Pe(e.payload.query)}`);
      if (e.payload.variables != null && !wt(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Pe(e.payload.variables)}`);
      if (e.payload.operationName != null && Pe(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Pe(e.payload.operationName)}`);
      if (e.payload.extensions != null && !wt(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Pe(e.payload.extensions)}`);
      break;
    }
    case ve.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Pe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!wt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Pe(e.payload)}`);
      break;
    }
    case ve.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Pe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!jy(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case ve.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Pe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function qy(e, t) {
  return zl(typeof e == "string" ? JSON.parse(e, t) : e);
}
function mr(e, t) {
  return zl(e), JSON.stringify(e, t);
}
var Wt = function(e) {
  return this instanceof Wt ? (this.v = e, this) : new Wt(e);
}, By = function(e, t, r) {
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
    n[p] && (i[p] = function(S) {
      return new Promise(function(h, g) {
        a.push([p, S, h, g]) > 1 || u(p, S);
      });
    }, y && (i[p] = y(i[p])));
  }
  function u(p, y) {
    try {
      c(n[p](y));
    } catch (S) {
      f(a[0][3], S);
    }
  }
  function c(p) {
    p.value instanceof Wt ? Promise.resolve(p.value.v).then(l, d) : f(a[0][2], p);
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
function Vy(e) {
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
    retryWait: l = async function(q) {
      let O = 1e3;
      for (let N = 0; N < q; N++)
        O *= 2;
      await new Promise((N) => setTimeout(N, O + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * 2700 + 300)));
    },
    shouldRetry: d = mi,
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
    generateID: S = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (q) => {
        const O = Math.random() * 16 | 0;
        return (q == "x" ? O : O & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: h,
    jsonMessageReviver: g
  } = e;
  let _;
  if (y) {
    if (!zy(y))
      throw new Error("Invalid WebSocket implementation provided");
    _ = y;
  } else typeof WebSocket < "u" ? _ = WebSocket : typeof global < "u" ? _ = global.WebSocket || // @ts-expect-error: Support more browsers
  global.MozWebSocket : typeof window < "u" && (_ = window.WebSocket || // @ts-expect-error: Support more browsers
  window.MozWebSocket);
  if (!_)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const I = _, k = (() => {
    const j = /* @__PURE__ */ (() => {
      const O = {};
      return {
        on(N, M) {
          return O[N] = M, () => {
            delete O[N];
          };
        },
        emit(N) {
          var M;
          "id" in N && ((M = O[N.id]) === null || M === void 0 || M.call(O, N));
        }
      };
    })(), q = {
      connecting: p?.connecting ? [p.connecting] : [],
      opened: p?.opened ? [p.opened] : [],
      connected: p?.connected ? [p.connected] : [],
      ping: p?.ping ? [p.ping] : [],
      pong: p?.pong ? [p.pong] : [],
      message: p?.message ? [j.emit, p.message] : [j.emit],
      closed: p?.closed ? [p.closed] : [],
      error: p?.error ? [p.error] : []
    };
    return {
      onMessage: j.on,
      on(O, N) {
        const M = q[O];
        return M.push(N), () => {
          M.splice(M.indexOf(N), 1);
        };
      },
      emit(O, ...N) {
        for (const M of [...q[O]])
          M(...N);
      }
    };
  })();
  function P(j) {
    const q = [
      // errors are fatal and more critical than close events, throw them first
      k.on("error", (O) => {
        q.forEach((N) => N()), j(O);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      k.on("closed", (O) => {
        q.forEach((N) => N()), j(O);
      })
    ];
  }
  let w, x = 0, v, D = !1, b = 0, A = !1;
  async function $() {
    clearTimeout(v);
    const [j, q] = await (w ?? (w = new Promise((M, W) => (async () => {
      if (D) {
        if (await l(b), !x)
          return w = void 0, W({ code: 1e3, reason: "All Subscriptions Gone" });
        b++;
      }
      k.emit("connecting", D);
      const Y = new I(typeof t == "function" ? await t() : t, Uy);
      let Z, ne;
      function se() {
        isFinite(o) && o > 0 && (clearTimeout(ne), ne = setTimeout(() => {
          Y.readyState === I.OPEN && (Y.send(mr({ type: ve.Ping })), k.emit("ping", !1, void 0));
        }, o));
      }
      P((oe) => {
        w = void 0, clearTimeout(Z), clearTimeout(ne), W(oe), oe instanceof hu && (Y.close(4499, "Terminated"), Y.onerror = null, Y.onclose = null);
      }), Y.onerror = (oe) => k.emit("error", oe), Y.onclose = (oe) => k.emit("closed", oe), Y.onopen = async () => {
        try {
          k.emit("opened", Y);
          const oe = typeof r == "function" ? await r() : r;
          if (Y.readyState !== I.OPEN)
            return;
          Y.send(mr(oe ? {
            type: ve.ConnectionInit,
            payload: oe
          } : {
            type: ve.ConnectionInit
            // payload is completely absent if not provided
          }, h)), isFinite(u) && u > 0 && (Z = setTimeout(() => {
            Y.close($e.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, u)), se();
        } catch (oe) {
          k.emit("error", oe), Y.close($e.InternalClientError, pu(oe instanceof Error ? oe.message : new Error(oe).message, "Internal client error"));
        }
      };
      let ae = !1;
      Y.onmessage = ({ data: oe }) => {
        try {
          const be = qy(oe, g);
          if (k.emit("message", be), be.type === "ping" || be.type === "pong") {
            k.emit(be.type, !0, be.payload), be.type === "pong" ? se() : s || (Y.send(mr(be.payload ? {
              type: ve.Pong,
              payload: be.payload
            } : {
              type: ve.Pong
              // payload is completely absent if not provided
            })), k.emit("pong", !1, be.payload));
            return;
          }
          if (ae)
            return;
          if (be.type !== ve.ConnectionAck)
            throw new Error(`First message cannot be of type ${be.type}`);
          clearTimeout(Z), ae = !0, k.emit("connected", Y, be.payload, D), D = !1, b = 0, M([
            Y,
            new Promise((V, m) => P(m))
          ]);
        } catch (be) {
          Y.onmessage = null, k.emit("error", be), Y.close($e.BadResponse, pu(be instanceof Error ? be.message : new Error(be).message, "Bad response"));
        }
      };
    })())));
    j.readyState === I.CLOSING && await q;
    let O = () => {
    };
    const N = new Promise((M) => O = M);
    return [
      j,
      O,
      Promise.race([
        // wait for
        N.then(() => {
          if (!x) {
            const M = () => j.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? v = setTimeout(() => {
              j.readyState === I.OPEN && M();
            }, a) : M();
          }
        }),
        // or
        q
      ])
    ];
  }
  function Q(j) {
    if (mi(j) && (Gy(j.code) || [
      $e.InternalServerError,
      $e.InternalClientError,
      $e.BadRequest,
      $e.BadResponse,
      $e.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      $e.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      $e.SubscriberAlreadyExists,
      $e.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(j.code)))
      throw j;
    if (A)
      return !1;
    if (mi(j) && j.code === 1e3)
      return x > 0;
    if (!c || b >= c || !d(j) || f?.(j))
      throw j;
    return D = !0;
  }
  n || (async () => {
    for (x++; ; )
      try {
        const [, , j] = await $();
        await j;
      } catch (j) {
        try {
          if (!Q(j))
            return;
        } catch (q) {
          return i?.(q);
        }
      }
  })();
  function H(j, q) {
    const O = S(j);
    let N = !1, M = !1, W = () => {
      x--, N = !0;
    };
    return (async () => {
      for (x++; ; )
        try {
          const [Y, Z, ne] = await $();
          if (N)
            return Z();
          const se = k.onMessage(O, (ae) => {
            switch (ae.type) {
              case ve.Next: {
                q.next(ae.payload);
                return;
              }
              case ve.Error: {
                M = !0, N = !0, q.error(ae.payload), W();
                return;
              }
              case ve.Complete: {
                N = !0, W();
                return;
              }
            }
          });
          Y.send(mr({
            id: O,
            type: ve.Subscribe,
            payload: j
          }, h)), W = () => {
            !N && Y.readyState === I.OPEN && Y.send(mr({
              id: O,
              type: ve.Complete
            }, h)), x--, N = !0, Z();
          }, await ne.finally(se);
          return;
        } catch (Y) {
          if (!Q(Y))
            return;
        }
    })().then(() => {
      M || q.complete();
    }).catch((Y) => {
      q.error(Y);
    }), () => {
      N || W();
    };
  }
  return {
    on: k.on,
    subscribe: H,
    iterate(j) {
      const q = [], O = {
        done: !1,
        error: null,
        resolve: () => {
        }
      }, N = H(j, {
        next(W) {
          q.push(W), O.resolve();
        },
        error(W) {
          O.done = !0, O.error = W, O.resolve();
        },
        complete() {
          O.done = !0, O.resolve();
        }
      }), M = (function() {
        return By(this, arguments, function* () {
          for (; ; ) {
            for (q.length || (yield Wt(new Promise((Z) => O.resolve = Z))); q.length; )
              yield yield Wt(q.shift());
            if (O.error)
              throw O.error;
            if (O.done)
              return yield Wt(void 0);
          }
        });
      })();
      return M.throw = async (W) => (O.done || (O.done = !0, O.error = W, O.resolve()), { done: !0, value: void 0 }), M.return = async () => (N(), { done: !0, value: void 0 }), M;
    },
    async dispose() {
      if (A = !0, w) {
        const [j] = await w;
        j.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      w && k.emit("closed", new hu());
    }
  };
}
class hu extends Error {
  constructor() {
    super(...arguments), this.name = "TerminatedCloseEvent", this.message = "4499: Terminated", this.code = 4499, this.reason = "Terminated", this.wasClean = !1;
  }
}
function mi(e) {
  return wt(e) && "code" in e && "reason" in e;
}
function Gy(e) {
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
function zy(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
function Ql(e) {
  return new qe(function(t, r) {
    return new le(function(n) {
      var i, a, o;
      try {
        i = r(t).subscribe({
          next: function(s) {
            if (s.errors ? o = e({
              graphQLErrors: s.errors,
              response: s,
              operation: t,
              forward: r
            }) : Xc(s) && (o = e({
              protocolErrors: s.extensions[Fn],
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
  Re(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n.link = Ql(r), n;
  }
  return t.prototype.request = function(r, n) {
    return this.link.request(r, n);
  }, t;
})(qe);
function Qy(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Wy(e, t, r = "") {
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
    const c = Array.isArray(o) || typeof FileList < "u" && o instanceof FileList, l = Qy(o);
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
          let S = 0;
          for (const h of o) {
            const g = a(
              h,
              p + S++,
              y
            );
            f && d.push(g);
          }
        } else
          for (const S in o) {
            const h = a(
              o[S],
              p + S,
              y
            );
            f && (d[S] = h);
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
function Yy(e, t, r) {
  "name" in r ? e.append(t, r, r.name) : e.append(t, r);
}
function Hy(e) {
  return typeof File < "u" && e instanceof File || typeof Blob < "u" && e instanceof Blob;
}
function Jy({
  uri: e = "/graphql",
  useGETForQueries: t,
  isExtractableFile: r = Hy,
  FormData: n,
  formDataAppendFile: i = Yy,
  print: a = nl,
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
  return new qe((f) => {
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
      clientAwareness: { name: y, version: S } = {},
      headers: h
    } = p, g = {
      http: p.http,
      options: p.fetchOptions,
      credentials: p.credentials,
      headers: {
        // Client awareness headers can be overridden by context `headers`.
        ...y && { "apollographql-client-name": y },
        ...S && { "apollographql-client-version": S },
        ...h
      }
    }, { options: _, body: I } = il(
      f,
      a,
      rl,
      d,
      g
    ), { clone: k, files: P } = Wy(I, r, "");
    let w = al(f, e);
    if (P.size) {
      _.headers && delete _.headers["content-type"];
      const D = n || FormData, b = new D();
      b.append("operations", $r(k, "Payload"));
      const A = {};
      let $ = 0;
      P.forEach((Q) => {
        A[++$] = Q;
      }), b.append("map", JSON.stringify(A)), $ = 0, P.forEach((Q, H) => {
        i(b, String(++$), H);
      }), _.body = b;
    } else if (t && // If the operation contains some mutations GET shouldn’t be used.
    !f.query.definitions.some(
      (D) => D.kind === "OperationDefinition" && D.operation === "mutation"
    ) && (_.method = "GET"), _.method === "GET") {
      const { newURI: D, parseError: b } = ol(w, I);
      if (b)
        return new le((A) => {
          A.error(b);
        });
      w = D;
    } else _.body = $r(k, "Payload");
    const { controller: x } = Cg();
    typeof x != "boolean" && (_.signal && (_.signal.aborted ? (
      // Signal already aborted, so immediately abort.
      x.abort()
    ) : (
      // Signal not already aborted, so setup a listener to abort when it
      // does.
      _.signal.addEventListener(
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
    )), _.signal = x.signal);
    const v = o || fetch;
    return new le((D) => {
      let b;
      return v(w, _).then((A) => (f.setContext({ response: A }), A)).then(tl(f)).then((A) => {
        D.next(A), D.complete();
      }).catch((A) => {
        b || (A.result && A.result.errors && A.result.data && D.next(A.result), D.error(A));
      }), () => {
        b = !0, typeof x != "boolean" && x.abort();
      };
    });
  });
}
var gi, yi;
const tt = (e) => (t, { args: r, canRead: n, toReference: i }) => n(t) ? t : i({
  __typename: e,
  id: r?.id
}), gr = (e, { canRead: t }) => {
  if (e !== void 0)
    return t(e) ? e : null;
}, Ky = {
  Query: {
    fields: {
      findImage: {
        read: tt("Image")
      },
      findPerformer: {
        read: tt("Performer")
      },
      findStudio: {
        read: tt("Studio")
      },
      findGroup: {
        read: tt("Group")
      },
      findGallery: {
        read: tt("Gallery")
      },
      findScene: {
        read: tt("Scene")
      },
      findTag: {
        read: tt("Tag")
      },
      findSavedFilter: {
        read: tt("SavedFilter")
      }
    }
  },
  Scene: {
    fields: {
      studio: {
        read: gr
      }
    }
  },
  Image: {
    fields: {
      studio: {
        read: gr
      },
      paths: {
        merge: !1
      }
    }
  },
  Group: {
    fields: {
      studio: {
        read: gr
      }
    }
  },
  Gallery: {
    fields: {
      studio: {
        read: gr
      }
    }
  },
  Studio: {
    fields: {
      parent_studio: {
        read: gr
      }
    }
  }
}, Xy = {
  BaseFile: ["VideoFile", "ImageFile", "GalleryFile"],
  VisualFile: ["VideoFile", "ImageFile"]
}, Zy = (yi = (gi = document.querySelector("base")) === null || gi === void 0 ? void 0 : gi.getAttribute("href")) !== null && yi !== void 0 ? yi : "/", vi = (e) => {
  let t = new URL(window.location.origin + Zy);
  return e && (t.pathname += e), t;
}, ev = () => {
  const e = vi("graphql"), t = vi("graphql");
  t.protocol === "https:" ? t.protocol = "wss:" : t.protocol = "ws:";
  const r = Jy({ uri: e.toString() }), n = Vy({
    url: t.toString(),
    retryAttempts: 1 / 0,
    shouldRetry() {
      return !0;
    }
  }), i = new Ly(n), a = Ql(({ networkError: l }) => {
    if (l && l.statusCode === 401) {
      const d = new URL(vi("login"), window.location.toString());
      d.searchParams.append("returnURL", window.location.href), window.location.href = d.toString();
    }
  }), o = dg(({ query: l }) => {
    const d = ir(l);
    return d.kind === "OperationDefinition" && d.operation === "subscription";
  }, i, r), s = fg([a, o]), u = new Ga({
    typePolicies: Ky,
    possibleTypes: Xy
  }), c = new za({
    link: s,
    cache: u
  });
  return c.subscribe({
    query: Ny
  }).subscribe({
    next: () => {
      c.resetStore();
    }
  }), {
    cache: u,
    client: c,
    wsClient: n
  };
}, { client: tv } = ev(), rv = () => tv;
function Hr(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var bi = { exports: {} }, mu;
function nv() {
  return mu || (mu = 1, (function(e, t) {
    (function(r) {
      e.exports = r();
    })(function() {
      return (function r(n, i, a) {
        function o(c, l) {
          if (!i[c]) {
            if (!n[c]) {
              var d = typeof Hr == "function" && Hr;
              if (!l && d) return d(c, !0);
              if (s) return s(c, !0);
              throw new Error("Cannot find module '" + c + "'");
            }
            l = i[c] = { exports: {} }, n[c][0].call(l.exports, function(f) {
              var p = n[c][1][f];
              return o(p || f);
            }, l, l.exports, r, n, i, a);
          }
          return i[c].exports;
        }
        for (var s = typeof Hr == "function" && Hr, u = 0; u < a.length; u++) o(a[u]);
        return o;
      })({ 1: [function(r, n, i) {
        (function(a, o, s, u, c, l, d, f, p) {
          var y = r("crypto");
          function S(w, x) {
            x = _(w, x);
            var v;
            return (v = x.algorithm !== "passthrough" ? y.createHash(x.algorithm) : new P()).write === void 0 && (v.write = v.update, v.end = v.update), k(x, v).dispatch(w), v.update || v.end(""), v.digest ? v.digest(x.encoding === "buffer" ? void 0 : x.encoding) : (w = v.read(), x.encoding !== "buffer" ? w.toString(x.encoding) : w);
          }
          (i = n.exports = S).sha1 = function(w) {
            return S(w);
          }, i.keys = function(w) {
            return S(w, { excludeValues: !0, algorithm: "sha1", encoding: "hex" });
          }, i.MD5 = function(w) {
            return S(w, { algorithm: "md5", encoding: "hex" });
          }, i.keysMD5 = function(w) {
            return S(w, { algorithm: "md5", encoding: "hex", excludeValues: !0 });
          };
          var h = y.getHashes ? y.getHashes().slice() : ["sha1", "md5"], g = (h.push("passthrough"), ["buffer", "hex", "binary", "base64"]);
          function _(w, x) {
            var v = {};
            if (v.algorithm = (x = x || {}).algorithm || "sha1", v.encoding = x.encoding || "hex", v.excludeValues = !!x.excludeValues, v.algorithm = v.algorithm.toLowerCase(), v.encoding = v.encoding.toLowerCase(), v.ignoreUnknown = x.ignoreUnknown === !0, v.respectType = x.respectType !== !1, v.respectFunctionNames = x.respectFunctionNames !== !1, v.respectFunctionProperties = x.respectFunctionProperties !== !1, v.unorderedArrays = x.unorderedArrays === !0, v.unorderedSets = x.unorderedSets !== !1, v.unorderedObjects = x.unorderedObjects !== !1, v.replacer = x.replacer || void 0, v.excludeKeys = x.excludeKeys || void 0, w === void 0) throw new Error("Object argument required.");
            for (var D = 0; D < h.length; ++D) h[D].toLowerCase() === v.algorithm.toLowerCase() && (v.algorithm = h[D]);
            if (h.indexOf(v.algorithm) === -1) throw new Error('Algorithm "' + v.algorithm + '"  not supported. supported values: ' + h.join(", "));
            if (g.indexOf(v.encoding) === -1 && v.algorithm !== "passthrough") throw new Error('Encoding "' + v.encoding + '"  not supported. supported values: ' + g.join(", "));
            return v;
          }
          function I(w) {
            if (typeof w == "function") return /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(w)) != null;
          }
          function k(w, x, v) {
            v = v || [];
            function D(b) {
              return x.update ? x.update(b, "utf8") : x.write(b, "utf8");
            }
            return { dispatch: function(b) {
              return this["_" + ((b = w.replacer ? w.replacer(b) : b) === null ? "null" : typeof b)](b);
            }, _object: function(b) {
              var A, $ = Object.prototype.toString.call(b), Q = /\[object (.*)\]/i.exec($);
              if (Q = (Q = Q ? Q[1] : "unknown:[" + $ + "]").toLowerCase(), 0 <= ($ = v.indexOf(b))) return this.dispatch("[CIRCULAR:" + $ + "]");
              if (v.push(b), s !== void 0 && s.isBuffer && s.isBuffer(b)) return D("buffer:"), D(b);
              if (Q === "object" || Q === "function" || Q === "asyncfunction") return $ = Object.keys(b), w.unorderedObjects && ($ = $.sort()), w.respectType === !1 || I(b) || $.splice(0, 0, "prototype", "__proto__", "constructor"), w.excludeKeys && ($ = $.filter(function(H) {
                return !w.excludeKeys(H);
              })), D("object:" + $.length + ":"), A = this, $.forEach(function(H) {
                A.dispatch(H), D(":"), w.excludeValues || A.dispatch(b[H]), D(",");
              });
              if (!this["_" + Q]) {
                if (w.ignoreUnknown) return D("[" + Q + "]");
                throw new Error('Unknown object type "' + Q + '"');
              }
              this["_" + Q](b);
            }, _array: function(b, H) {
              H = H !== void 0 ? H : w.unorderedArrays !== !1;
              var $ = this;
              if (D("array:" + b.length + ":"), !H || b.length <= 1) return b.forEach(function(j) {
                return $.dispatch(j);
              });
              var Q = [], H = b.map(function(j) {
                var q = new P(), O = v.slice();
                return k(w, q, O).dispatch(j), Q = Q.concat(O.slice(v.length)), q.read().toString();
              });
              return v = v.concat(Q), H.sort(), this._array(H, !1);
            }, _date: function(b) {
              return D("date:" + b.toJSON());
            }, _symbol: function(b) {
              return D("symbol:" + b.toString());
            }, _error: function(b) {
              return D("error:" + b.toString());
            }, _boolean: function(b) {
              return D("bool:" + b.toString());
            }, _string: function(b) {
              D("string:" + b.length + ":"), D(b.toString());
            }, _function: function(b) {
              D("fn:"), I(b) ? this.dispatch("[native]") : this.dispatch(b.toString()), w.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(b.name)), w.respectFunctionProperties && this._object(b);
            }, _number: function(b) {
              return D("number:" + b.toString());
            }, _xml: function(b) {
              return D("xml:" + b.toString());
            }, _null: function() {
              return D("Null");
            }, _undefined: function() {
              return D("Undefined");
            }, _regexp: function(b) {
              return D("regex:" + b.toString());
            }, _uint8array: function(b) {
              return D("uint8array:"), this.dispatch(Array.prototype.slice.call(b));
            }, _uint8clampedarray: function(b) {
              return D("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(b));
            }, _int8array: function(b) {
              return D("int8array:"), this.dispatch(Array.prototype.slice.call(b));
            }, _uint16array: function(b) {
              return D("uint16array:"), this.dispatch(Array.prototype.slice.call(b));
            }, _int16array: function(b) {
              return D("int16array:"), this.dispatch(Array.prototype.slice.call(b));
            }, _uint32array: function(b) {
              return D("uint32array:"), this.dispatch(Array.prototype.slice.call(b));
            }, _int32array: function(b) {
              return D("int32array:"), this.dispatch(Array.prototype.slice.call(b));
            }, _float32array: function(b) {
              return D("float32array:"), this.dispatch(Array.prototype.slice.call(b));
            }, _float64array: function(b) {
              return D("float64array:"), this.dispatch(Array.prototype.slice.call(b));
            }, _arraybuffer: function(b) {
              return D("arraybuffer:"), this.dispatch(new Uint8Array(b));
            }, _url: function(b) {
              return D("url:" + b.toString());
            }, _map: function(b) {
              return D("map:"), b = Array.from(b), this._array(b, w.unorderedSets !== !1);
            }, _set: function(b) {
              return D("set:"), b = Array.from(b), this._array(b, w.unorderedSets !== !1);
            }, _file: function(b) {
              return D("file:"), this.dispatch([b.name, b.size, b.type, b.lastModfied]);
            }, _blob: function() {
              if (w.ignoreUnknown) return D("[blob]");
              throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`);
            }, _domwindow: function() {
              return D("domwindow");
            }, _bigint: function(b) {
              return D("bigint:" + b.toString());
            }, _process: function() {
              return D("process");
            }, _timer: function() {
              return D("timer");
            }, _pipe: function() {
              return D("pipe");
            }, _tcp: function() {
              return D("tcp");
            }, _udp: function() {
              return D("udp");
            }, _tty: function() {
              return D("tty");
            }, _statwatcher: function() {
              return D("statwatcher");
            }, _securecontext: function() {
              return D("securecontext");
            }, _connection: function() {
              return D("connection");
            }, _zlib: function() {
              return D("zlib");
            }, _context: function() {
              return D("context");
            }, _nodescript: function() {
              return D("nodescript");
            }, _httpparser: function() {
              return D("httpparser");
            }, _dataview: function() {
              return D("dataview");
            }, _signal: function() {
              return D("signal");
            }, _fsevent: function() {
              return D("fsevent");
            }, _tlswrap: function() {
              return D("tlswrap");
            } };
          }
          function P() {
            return { buf: "", write: function(w) {
              this.buf += w;
            }, end: function(w) {
              this.buf += w;
            }, read: function() {
              return this.buf;
            } };
          }
          i.writeToStream = function(w, x, v) {
            return v === void 0 && (v = x, x = {}), k(x = _(w, x), v).dispatch(w);
          };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/");
      }, { buffer: 3, crypto: 5, lYpoI2: 11 }], 2: [function(r, n, i) {
        (function(a, o, s, u, c, l, d, f, p) {
          (function(y) {
            var S = typeof Uint8Array < "u" ? Uint8Array : Array, h = 43, g = 47, _ = 48, I = 97, k = 65, P = 45, w = 95;
            function x(v) {
              return v = v.charCodeAt(0), v === h || v === P ? 62 : v === g || v === w ? 63 : v < _ ? -1 : v < _ + 10 ? v - _ + 26 + 26 : v < k + 26 ? v - k : v < I + 26 ? v - I + 26 : void 0;
            }
            y.toByteArray = function(v) {
              var D, b;
              if (0 < v.length % 4) throw new Error("Invalid string. Length must be a multiple of 4");
              var A = v.length, A = v.charAt(A - 2) === "=" ? 2 : v.charAt(A - 1) === "=" ? 1 : 0, $ = new S(3 * v.length / 4 - A), Q = 0 < A ? v.length - 4 : v.length, H = 0;
              function j(q) {
                $[H++] = q;
              }
              for (D = 0; D < Q; D += 4, 0) j((16711680 & (b = x(v.charAt(D)) << 18 | x(v.charAt(D + 1)) << 12 | x(v.charAt(D + 2)) << 6 | x(v.charAt(D + 3)))) >> 16), j((65280 & b) >> 8), j(255 & b);
              return A == 2 ? j(255 & (b = x(v.charAt(D)) << 2 | x(v.charAt(D + 1)) >> 4)) : A == 1 && (j((b = x(v.charAt(D)) << 10 | x(v.charAt(D + 1)) << 4 | x(v.charAt(D + 2)) >> 2) >> 8 & 255), j(255 & b)), $;
            }, y.fromByteArray = function(v) {
              var D, b, A, $, Q = v.length % 3, H = "";
              function j(q) {
                return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(q);
              }
              for (D = 0, A = v.length - Q; D < A; D += 3) b = (v[D] << 16) + (v[D + 1] << 8) + v[D + 2], H += j(($ = b) >> 18 & 63) + j($ >> 12 & 63) + j($ >> 6 & 63) + j(63 & $);
              switch (Q) {
                case 1:
                  H = (H += j((b = v[v.length - 1]) >> 2)) + j(b << 4 & 63) + "==";
                  break;
                case 2:
                  H = (H = (H += j((b = (v[v.length - 2] << 8) + v[v.length - 1]) >> 10)) + j(b >> 4 & 63)) + j(b << 2 & 63) + "=";
              }
              return H;
            };
          })(i === void 0 ? this.base64js = {} : i);
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
      }, { buffer: 3, lYpoI2: 11 }], 3: [function(r, n, i) {
        (function(a, o, h, u, c, l, d, f, p) {
          var y = r("base64-js"), S = r("ieee754");
          function h(m, T, F) {
            if (!(this instanceof h)) return new h(m, T, F);
            var B, U, z, re, ge = typeof m;
            if (T === "base64" && ge == "string") for (m = (re = m).trim ? re.trim() : re.replace(/^\s+|\s+$/g, ""); m.length % 4 != 0; ) m += "=";
            if (ge == "number") B = N(m);
            else if (ge == "string") B = h.byteLength(m, T);
            else {
              if (ge != "object") throw new Error("First argument needs to be a number, array or string.");
              B = N(m.length);
            }
            if (h._useTypedArrays ? U = h._augment(new Uint8Array(B)) : ((U = this).length = B, U._isBuffer = !0), h._useTypedArrays && typeof m.byteLength == "number") U._set(m);
            else if (M(re = m) || h.isBuffer(re) || re && typeof re == "object" && typeof re.length == "number") for (z = 0; z < B; z++) h.isBuffer(m) ? U[z] = m.readUInt8(z) : U[z] = m[z];
            else if (ge == "string") U.write(m, 0, T);
            else if (ge == "number" && !h._useTypedArrays && !F) for (z = 0; z < B; z++) U[z] = 0;
            return U;
          }
          function g(m, T, F, B) {
            return h._charsWritten = ne((function(U) {
              for (var z = [], re = 0; re < U.length; re++) z.push(255 & U.charCodeAt(re));
              return z;
            })(T), m, F, B);
          }
          function _(m, T, F, B) {
            return h._charsWritten = ne((function(U) {
              for (var z, re, ge = [], we = 0; we < U.length; we++) re = U.charCodeAt(we), z = re >> 8, re = re % 256, ge.push(re), ge.push(z);
              return ge;
            })(T), m, F, B);
          }
          function I(m, T, F) {
            var B = "";
            F = Math.min(m.length, F);
            for (var U = T; U < F; U++) B += String.fromCharCode(m[U]);
            return B;
          }
          function k(m, T, F, z) {
            z || (V(typeof F == "boolean", "missing or invalid endian"), V(T != null, "missing offset"), V(T + 1 < m.length, "Trying to read beyond buffer length"));
            var U, z = m.length;
            if (!(z <= T)) return F ? (U = m[T], T + 1 < z && (U |= m[T + 1] << 8)) : (U = m[T] << 8, T + 1 < z && (U |= m[T + 1])), U;
          }
          function P(m, T, F, z) {
            z || (V(typeof F == "boolean", "missing or invalid endian"), V(T != null, "missing offset"), V(T + 3 < m.length, "Trying to read beyond buffer length"));
            var U, z = m.length;
            if (!(z <= T)) return F ? (T + 2 < z && (U = m[T + 2] << 16), T + 1 < z && (U |= m[T + 1] << 8), U |= m[T], T + 3 < z && (U += m[T + 3] << 24 >>> 0)) : (T + 1 < z && (U = m[T + 1] << 16), T + 2 < z && (U |= m[T + 2] << 8), T + 3 < z && (U |= m[T + 3]), U += m[T] << 24 >>> 0), U;
          }
          function w(m, T, F, B) {
            if (B || (V(typeof F == "boolean", "missing or invalid endian"), V(T != null, "missing offset"), V(T + 1 < m.length, "Trying to read beyond buffer length")), !(m.length <= T)) return B = k(m, T, F, !0), 32768 & B ? -1 * (65535 - B + 1) : B;
          }
          function x(m, T, F, B) {
            if (B || (V(typeof F == "boolean", "missing or invalid endian"), V(T != null, "missing offset"), V(T + 3 < m.length, "Trying to read beyond buffer length")), !(m.length <= T)) return B = P(m, T, F, !0), 2147483648 & B ? -1 * (4294967295 - B + 1) : B;
          }
          function v(m, T, F, B) {
            return B || (V(typeof F == "boolean", "missing or invalid endian"), V(T + 3 < m.length, "Trying to read beyond buffer length")), S.read(m, T, F, 23, 4);
          }
          function D(m, T, F, B) {
            return B || (V(typeof F == "boolean", "missing or invalid endian"), V(T + 7 < m.length, "Trying to read beyond buffer length")), S.read(m, T, F, 52, 8);
          }
          function b(m, T, F, B, U) {
            if (U || (V(T != null, "missing value"), V(typeof B == "boolean", "missing or invalid endian"), V(F != null, "missing offset"), V(F + 1 < m.length, "trying to write beyond buffer length"), ae(T, 65535)), U = m.length, !(U <= F)) for (var z = 0, re = Math.min(U - F, 2); z < re; z++) m[F + z] = (T & 255 << 8 * (B ? z : 1 - z)) >>> 8 * (B ? z : 1 - z);
          }
          function A(m, T, F, B, U) {
            if (U || (V(T != null, "missing value"), V(typeof B == "boolean", "missing or invalid endian"), V(F != null, "missing offset"), V(F + 3 < m.length, "trying to write beyond buffer length"), ae(T, 4294967295)), U = m.length, !(U <= F)) for (var z = 0, re = Math.min(U - F, 4); z < re; z++) m[F + z] = T >>> 8 * (B ? z : 3 - z) & 255;
          }
          function $(m, T, F, B, U) {
            U || (V(T != null, "missing value"), V(typeof B == "boolean", "missing or invalid endian"), V(F != null, "missing offset"), V(F + 1 < m.length, "Trying to write beyond buffer length"), oe(T, 32767, -32768)), m.length <= F || b(m, 0 <= T ? T : 65535 + T + 1, F, B, U);
          }
          function Q(m, T, F, B, U) {
            U || (V(T != null, "missing value"), V(typeof B == "boolean", "missing or invalid endian"), V(F != null, "missing offset"), V(F + 3 < m.length, "Trying to write beyond buffer length"), oe(T, 2147483647, -2147483648)), m.length <= F || A(m, 0 <= T ? T : 4294967295 + T + 1, F, B, U);
          }
          function H(m, T, F, B, U) {
            U || (V(T != null, "missing value"), V(typeof B == "boolean", "missing or invalid endian"), V(F != null, "missing offset"), V(F + 3 < m.length, "Trying to write beyond buffer length"), be(T, 34028234663852886e22, -34028234663852886e22)), m.length <= F || S.write(m, T, F, B, 23, 4);
          }
          function j(m, T, F, B, U) {
            U || (V(T != null, "missing value"), V(typeof B == "boolean", "missing or invalid endian"), V(F != null, "missing offset"), V(F + 7 < m.length, "Trying to write beyond buffer length"), be(T, 17976931348623157e292, -17976931348623157e292)), m.length <= F || S.write(m, T, F, B, 52, 8);
          }
          i.Buffer = h, i.SlowBuffer = h, i.INSPECT_MAX_BYTES = 50, h.poolSize = 8192, h._useTypedArrays = (function() {
            try {
              var m = new ArrayBuffer(0), T = new Uint8Array(m);
              return T.foo = function() {
                return 42;
              }, T.foo() === 42 && typeof T.subarray == "function";
            } catch {
              return !1;
            }
          })(), h.isEncoding = function(m) {
            switch (String(m).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "raw":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }, h.isBuffer = function(m) {
            return !(m == null || !m._isBuffer);
          }, h.byteLength = function(m, T) {
            var F;
            switch (m += "", T || "utf8") {
              case "hex":
                F = m.length / 2;
                break;
              case "utf8":
              case "utf-8":
                F = Y(m).length;
                break;
              case "ascii":
              case "binary":
              case "raw":
                F = m.length;
                break;
              case "base64":
                F = Z(m).length;
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                F = 2 * m.length;
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return F;
          }, h.concat = function(m, T) {
            if (V(M(m), `Usage: Buffer.concat(list, [totalLength])
list should be an Array.`), m.length === 0) return new h(0);
            if (m.length === 1) return m[0];
            if (typeof T != "number") for (U = T = 0; U < m.length; U++) T += m[U].length;
            for (var F = new h(T), B = 0, U = 0; U < m.length; U++) {
              var z = m[U];
              z.copy(F, B), B += z.length;
            }
            return F;
          }, h.prototype.write = function(m, T, F, B) {
            isFinite(T) ? isFinite(F) || (B = F, F = void 0) : (we = B, B = T, T = F, F = we), T = Number(T) || 0;
            var U, z, re, ge, we = this.length - T;
            switch ((!F || we < (F = Number(F))) && (F = we), B = String(B || "utf8").toLowerCase()) {
              case "hex":
                U = (function(Me, Fe, Ce, Ee) {
                  Ce = Number(Ce) || 0;
                  var Se = Me.length - Ce;
                  (!Ee || Se < (Ee = Number(Ee))) && (Ee = Se), V((Se = Fe.length) % 2 == 0, "Invalid hex string"), Se / 2 < Ee && (Ee = Se / 2);
                  for (var Ct = 0; Ct < Ee; Ct++) {
                    var Xa = parseInt(Fe.substr(2 * Ct, 2), 16);
                    V(!isNaN(Xa), "Invalid hex string"), Me[Ce + Ct] = Xa;
                  }
                  return h._charsWritten = 2 * Ct, Ct;
                })(this, m, T, F);
                break;
              case "utf8":
              case "utf-8":
                z = this, re = T, ge = F, U = h._charsWritten = ne(Y(m), z, re, ge);
                break;
              case "ascii":
              case "binary":
                U = g(this, m, T, F);
                break;
              case "base64":
                z = this, re = T, ge = F, U = h._charsWritten = ne(Z(m), z, re, ge);
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                U = _(this, m, T, F);
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return U;
          }, h.prototype.toString = function(m, T, F) {
            var B, U, z, re, ge = this;
            if (m = String(m || "utf8").toLowerCase(), T = Number(T) || 0, (F = F !== void 0 ? Number(F) : ge.length) === T) return "";
            switch (m) {
              case "hex":
                B = (function(we, Me, Fe) {
                  var Ce = we.length;
                  (!Me || Me < 0) && (Me = 0), (!Fe || Fe < 0 || Ce < Fe) && (Fe = Ce);
                  for (var Ee = "", Se = Me; Se < Fe; Se++) Ee += W(we[Se]);
                  return Ee;
                })(ge, T, F);
                break;
              case "utf8":
              case "utf-8":
                B = (function(we, Me, Fe) {
                  var Ce = "", Ee = "";
                  Fe = Math.min(we.length, Fe);
                  for (var Se = Me; Se < Fe; Se++) we[Se] <= 127 ? (Ce += se(Ee) + String.fromCharCode(we[Se]), Ee = "") : Ee += "%" + we[Se].toString(16);
                  return Ce + se(Ee);
                })(ge, T, F);
                break;
              case "ascii":
              case "binary":
                B = I(ge, T, F);
                break;
              case "base64":
                U = ge, re = F, B = (z = T) === 0 && re === U.length ? y.fromByteArray(U) : y.fromByteArray(U.slice(z, re));
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                B = (function(we, Me, Fe) {
                  for (var Ce = we.slice(Me, Fe), Ee = "", Se = 0; Se < Ce.length; Se += 2) Ee += String.fromCharCode(Ce[Se] + 256 * Ce[Se + 1]);
                  return Ee;
                })(ge, T, F);
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return B;
          }, h.prototype.toJSON = function() {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          }, h.prototype.copy = function(m, T, F, B) {
            if (T = T || 0, (B = B || B === 0 ? B : this.length) !== (F = F || 0) && m.length !== 0 && this.length !== 0) {
              V(F <= B, "sourceEnd < sourceStart"), V(0 <= T && T < m.length, "targetStart out of bounds"), V(0 <= F && F < this.length, "sourceStart out of bounds"), V(0 <= B && B <= this.length, "sourceEnd out of bounds"), B > this.length && (B = this.length);
              var U = (B = m.length - T < B - F ? m.length - T + F : B) - F;
              if (U < 100 || !h._useTypedArrays) for (var z = 0; z < U; z++) m[z + T] = this[z + F];
              else m._set(this.subarray(F, F + U), T);
            }
          }, h.prototype.slice = function(m, T) {
            var F = this.length;
            if (m = O(m, F, 0), T = O(T, F, F), h._useTypedArrays) return h._augment(this.subarray(m, T));
            for (var B = T - m, U = new h(B, void 0, !0), z = 0; z < B; z++) U[z] = this[z + m];
            return U;
          }, h.prototype.get = function(m) {
            return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(m);
          }, h.prototype.set = function(m, T) {
            return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(m, T);
          }, h.prototype.readUInt8 = function(m, T) {
            if (T || (V(m != null, "missing offset"), V(m < this.length, "Trying to read beyond buffer length")), !(m >= this.length)) return this[m];
          }, h.prototype.readUInt16LE = function(m, T) {
            return k(this, m, !0, T);
          }, h.prototype.readUInt16BE = function(m, T) {
            return k(this, m, !1, T);
          }, h.prototype.readUInt32LE = function(m, T) {
            return P(this, m, !0, T);
          }, h.prototype.readUInt32BE = function(m, T) {
            return P(this, m, !1, T);
          }, h.prototype.readInt8 = function(m, T) {
            if (T || (V(m != null, "missing offset"), V(m < this.length, "Trying to read beyond buffer length")), !(m >= this.length)) return 128 & this[m] ? -1 * (255 - this[m] + 1) : this[m];
          }, h.prototype.readInt16LE = function(m, T) {
            return w(this, m, !0, T);
          }, h.prototype.readInt16BE = function(m, T) {
            return w(this, m, !1, T);
          }, h.prototype.readInt32LE = function(m, T) {
            return x(this, m, !0, T);
          }, h.prototype.readInt32BE = function(m, T) {
            return x(this, m, !1, T);
          }, h.prototype.readFloatLE = function(m, T) {
            return v(this, m, !0, T);
          }, h.prototype.readFloatBE = function(m, T) {
            return v(this, m, !1, T);
          }, h.prototype.readDoubleLE = function(m, T) {
            return D(this, m, !0, T);
          }, h.prototype.readDoubleBE = function(m, T) {
            return D(this, m, !1, T);
          }, h.prototype.writeUInt8 = function(m, T, F) {
            F || (V(m != null, "missing value"), V(T != null, "missing offset"), V(T < this.length, "trying to write beyond buffer length"), ae(m, 255)), T >= this.length || (this[T] = m);
          }, h.prototype.writeUInt16LE = function(m, T, F) {
            b(this, m, T, !0, F);
          }, h.prototype.writeUInt16BE = function(m, T, F) {
            b(this, m, T, !1, F);
          }, h.prototype.writeUInt32LE = function(m, T, F) {
            A(this, m, T, !0, F);
          }, h.prototype.writeUInt32BE = function(m, T, F) {
            A(this, m, T, !1, F);
          }, h.prototype.writeInt8 = function(m, T, F) {
            F || (V(m != null, "missing value"), V(T != null, "missing offset"), V(T < this.length, "Trying to write beyond buffer length"), oe(m, 127, -128)), T >= this.length || (0 <= m ? this.writeUInt8(m, T, F) : this.writeUInt8(255 + m + 1, T, F));
          }, h.prototype.writeInt16LE = function(m, T, F) {
            $(this, m, T, !0, F);
          }, h.prototype.writeInt16BE = function(m, T, F) {
            $(this, m, T, !1, F);
          }, h.prototype.writeInt32LE = function(m, T, F) {
            Q(this, m, T, !0, F);
          }, h.prototype.writeInt32BE = function(m, T, F) {
            Q(this, m, T, !1, F);
          }, h.prototype.writeFloatLE = function(m, T, F) {
            H(this, m, T, !0, F);
          }, h.prototype.writeFloatBE = function(m, T, F) {
            H(this, m, T, !1, F);
          }, h.prototype.writeDoubleLE = function(m, T, F) {
            j(this, m, T, !0, F);
          }, h.prototype.writeDoubleBE = function(m, T, F) {
            j(this, m, T, !1, F);
          }, h.prototype.fill = function(m, T, F) {
            if (T = T || 0, F = F || this.length, V(typeof (m = typeof (m = m || 0) == "string" ? m.charCodeAt(0) : m) == "number" && !isNaN(m), "value is not a number"), V(T <= F, "end < start"), F !== T && this.length !== 0) {
              V(0 <= T && T < this.length, "start out of bounds"), V(0 <= F && F <= this.length, "end out of bounds");
              for (var B = T; B < F; B++) this[B] = m;
            }
          }, h.prototype.inspect = function() {
            for (var m = [], T = this.length, F = 0; F < T; F++) if (m[F] = W(this[F]), F === i.INSPECT_MAX_BYTES) {
              m[F + 1] = "...";
              break;
            }
            return "<Buffer " + m.join(" ") + ">";
          }, h.prototype.toArrayBuffer = function() {
            if (typeof Uint8Array > "u") throw new Error("Buffer.toArrayBuffer not supported in this browser");
            if (h._useTypedArrays) return new h(this).buffer;
            for (var m = new Uint8Array(this.length), T = 0, F = m.length; T < F; T += 1) m[T] = this[T];
            return m.buffer;
          };
          var q = h.prototype;
          function O(m, T, F) {
            return typeof m != "number" ? F : T <= (m = ~~m) ? T : 0 <= m || 0 <= (m += T) ? m : 0;
          }
          function N(m) {
            return (m = ~~Math.ceil(+m)) < 0 ? 0 : m;
          }
          function M(m) {
            return (Array.isArray || function(T) {
              return Object.prototype.toString.call(T) === "[object Array]";
            })(m);
          }
          function W(m) {
            return m < 16 ? "0" + m.toString(16) : m.toString(16);
          }
          function Y(m) {
            for (var T = [], F = 0; F < m.length; F++) {
              var B = m.charCodeAt(F);
              if (B <= 127) T.push(m.charCodeAt(F));
              else for (var U = F, z = (55296 <= B && B <= 57343 && F++, encodeURIComponent(m.slice(U, F + 1)).substr(1).split("%")), re = 0; re < z.length; re++) T.push(parseInt(z[re], 16));
            }
            return T;
          }
          function Z(m) {
            return y.toByteArray(m);
          }
          function ne(m, T, F, B) {
            for (var U = 0; U < B && !(U + F >= T.length || U >= m.length); U++) T[U + F] = m[U];
            return U;
          }
          function se(m) {
            try {
              return decodeURIComponent(m);
            } catch {
              return "�";
            }
          }
          function ae(m, T) {
            V(typeof m == "number", "cannot write a non-number as a number"), V(0 <= m, "specified a negative value for writing an unsigned value"), V(m <= T, "value is larger than maximum value for type"), V(Math.floor(m) === m, "value has a fractional component");
          }
          function oe(m, T, F) {
            V(typeof m == "number", "cannot write a non-number as a number"), V(m <= T, "value larger than maximum allowed value"), V(F <= m, "value smaller than minimum allowed value"), V(Math.floor(m) === m, "value has a fractional component");
          }
          function be(m, T, F) {
            V(typeof m == "number", "cannot write a non-number as a number"), V(m <= T, "value larger than maximum allowed value"), V(F <= m, "value smaller than minimum allowed value");
          }
          function V(m, T) {
            if (!m) throw new Error(T || "Failed assertion");
          }
          h._augment = function(m) {
            return m._isBuffer = !0, m._get = m.get, m._set = m.set, m.get = q.get, m.set = q.set, m.write = q.write, m.toString = q.toString, m.toLocaleString = q.toString, m.toJSON = q.toJSON, m.copy = q.copy, m.slice = q.slice, m.readUInt8 = q.readUInt8, m.readUInt16LE = q.readUInt16LE, m.readUInt16BE = q.readUInt16BE, m.readUInt32LE = q.readUInt32LE, m.readUInt32BE = q.readUInt32BE, m.readInt8 = q.readInt8, m.readInt16LE = q.readInt16LE, m.readInt16BE = q.readInt16BE, m.readInt32LE = q.readInt32LE, m.readInt32BE = q.readInt32BE, m.readFloatLE = q.readFloatLE, m.readFloatBE = q.readFloatBE, m.readDoubleLE = q.readDoubleLE, m.readDoubleBE = q.readDoubleBE, m.writeUInt8 = q.writeUInt8, m.writeUInt16LE = q.writeUInt16LE, m.writeUInt16BE = q.writeUInt16BE, m.writeUInt32LE = q.writeUInt32LE, m.writeUInt32BE = q.writeUInt32BE, m.writeInt8 = q.writeInt8, m.writeInt16LE = q.writeInt16LE, m.writeInt16BE = q.writeInt16BE, m.writeInt32LE = q.writeInt32LE, m.writeInt32BE = q.writeInt32BE, m.writeFloatLE = q.writeFloatLE, m.writeFloatBE = q.writeFloatBE, m.writeDoubleLE = q.writeDoubleLE, m.writeDoubleBE = q.writeDoubleBE, m.fill = q.fill, m.inspect = q.inspect, m.toArrayBuffer = q.toArrayBuffer, m;
          };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
      }, { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 }], 4: [function(r, n, i) {
        (function(a, o, y, u, c, l, d, f, p) {
          var y = r("buffer").Buffer, S = 4, h = new y(S);
          h.fill(0), n.exports = { hash: function(g, _, I, k) {
            for (var P = _((function(b, A) {
              b.length % S != 0 && ($ = b.length + (S - b.length % S), b = y.concat([b, h], $));
              for (var $, Q = [], H = A ? b.readInt32BE : b.readInt32LE, j = 0; j < b.length; j += S) Q.push(H.call(b, j));
              return Q;
            })(g = y.isBuffer(g) ? g : new y(g), k), 8 * g.length), _ = k, w = new y(I), x = _ ? w.writeInt32BE : w.writeInt32LE, v = 0; v < P.length; v++) x.call(w, P[v], 4 * v, !0);
            return w;
          } };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { buffer: 3, lYpoI2: 11 }], 5: [function(r, n, i) {
        (function(a, o, y, u, c, l, d, f, p) {
          var y = r("buffer").Buffer, S = r("./sha"), h = r("./sha256"), g = r("./rng"), _ = { sha1: S, sha256: h, md5: r("./md5") }, I = 64, k = new y(I);
          function P(b, A) {
            var $ = _[b = b || "sha1"], Q = [];
            return $ || w("algorithm:", b, "is not yet supported"), { update: function(H) {
              return y.isBuffer(H) || (H = new y(H)), Q.push(H), H.length, this;
            }, digest: function(H) {
              var j = y.concat(Q), j = A ? (function(q, O, N) {
                y.isBuffer(O) || (O = new y(O)), y.isBuffer(N) || (N = new y(N)), O.length > I ? O = q(O) : O.length < I && (O = y.concat([O, k], I));
                for (var M = new y(I), W = new y(I), Y = 0; Y < I; Y++) M[Y] = 54 ^ O[Y], W[Y] = 92 ^ O[Y];
                return N = q(y.concat([M, N])), q(y.concat([W, N]));
              })($, A, j) : $(j);
              return Q = null, H ? j.toString(H) : j;
            } };
          }
          function w() {
            var b = [].slice.call(arguments).join(" ");
            throw new Error([b, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join(`
`));
          }
          k.fill(0), i.createHash = function(b) {
            return P(b);
          }, i.createHmac = P, i.randomBytes = function(b, A) {
            if (!A || !A.call) return new y(g(b));
            try {
              A.call(this, void 0, new y(g(b)));
            } catch ($) {
              A($);
            }
          };
          var x, v = ["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], D = function(b) {
            i[b] = function() {
              w("sorry,", b, "is not implemented yet");
            };
          };
          for (x in v) D(v[x]);
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./md5": 6, "./rng": 7, "./sha": 8, "./sha256": 9, buffer: 3, lYpoI2: 11 }], 6: [function(r, n, i) {
        (function(a, o, s, u, c, l, d, f, p) {
          var y = r("./helpers");
          function S(w, x) {
            w[x >> 5] |= 128 << x % 32, w[14 + (x + 64 >>> 9 << 4)] = x;
            for (var v = 1732584193, D = -271733879, b = -1732584194, A = 271733878, $ = 0; $ < w.length; $ += 16) {
              var Q = v, H = D, j = b, q = A, v = g(v, D, b, A, w[$ + 0], 7, -680876936), A = g(A, v, D, b, w[$ + 1], 12, -389564586), b = g(b, A, v, D, w[$ + 2], 17, 606105819), D = g(D, b, A, v, w[$ + 3], 22, -1044525330);
              v = g(v, D, b, A, w[$ + 4], 7, -176418897), A = g(A, v, D, b, w[$ + 5], 12, 1200080426), b = g(b, A, v, D, w[$ + 6], 17, -1473231341), D = g(D, b, A, v, w[$ + 7], 22, -45705983), v = g(v, D, b, A, w[$ + 8], 7, 1770035416), A = g(A, v, D, b, w[$ + 9], 12, -1958414417), b = g(b, A, v, D, w[$ + 10], 17, -42063), D = g(D, b, A, v, w[$ + 11], 22, -1990404162), v = g(v, D, b, A, w[$ + 12], 7, 1804603682), A = g(A, v, D, b, w[$ + 13], 12, -40341101), b = g(b, A, v, D, w[$ + 14], 17, -1502002290), v = _(v, D = g(D, b, A, v, w[$ + 15], 22, 1236535329), b, A, w[$ + 1], 5, -165796510), A = _(A, v, D, b, w[$ + 6], 9, -1069501632), b = _(b, A, v, D, w[$ + 11], 14, 643717713), D = _(D, b, A, v, w[$ + 0], 20, -373897302), v = _(v, D, b, A, w[$ + 5], 5, -701558691), A = _(A, v, D, b, w[$ + 10], 9, 38016083), b = _(b, A, v, D, w[$ + 15], 14, -660478335), D = _(D, b, A, v, w[$ + 4], 20, -405537848), v = _(v, D, b, A, w[$ + 9], 5, 568446438), A = _(A, v, D, b, w[$ + 14], 9, -1019803690), b = _(b, A, v, D, w[$ + 3], 14, -187363961), D = _(D, b, A, v, w[$ + 8], 20, 1163531501), v = _(v, D, b, A, w[$ + 13], 5, -1444681467), A = _(A, v, D, b, w[$ + 2], 9, -51403784), b = _(b, A, v, D, w[$ + 7], 14, 1735328473), v = I(v, D = _(D, b, A, v, w[$ + 12], 20, -1926607734), b, A, w[$ + 5], 4, -378558), A = I(A, v, D, b, w[$ + 8], 11, -2022574463), b = I(b, A, v, D, w[$ + 11], 16, 1839030562), D = I(D, b, A, v, w[$ + 14], 23, -35309556), v = I(v, D, b, A, w[$ + 1], 4, -1530992060), A = I(A, v, D, b, w[$ + 4], 11, 1272893353), b = I(b, A, v, D, w[$ + 7], 16, -155497632), D = I(D, b, A, v, w[$ + 10], 23, -1094730640), v = I(v, D, b, A, w[$ + 13], 4, 681279174), A = I(A, v, D, b, w[$ + 0], 11, -358537222), b = I(b, A, v, D, w[$ + 3], 16, -722521979), D = I(D, b, A, v, w[$ + 6], 23, 76029189), v = I(v, D, b, A, w[$ + 9], 4, -640364487), A = I(A, v, D, b, w[$ + 12], 11, -421815835), b = I(b, A, v, D, w[$ + 15], 16, 530742520), v = k(v, D = I(D, b, A, v, w[$ + 2], 23, -995338651), b, A, w[$ + 0], 6, -198630844), A = k(A, v, D, b, w[$ + 7], 10, 1126891415), b = k(b, A, v, D, w[$ + 14], 15, -1416354905), D = k(D, b, A, v, w[$ + 5], 21, -57434055), v = k(v, D, b, A, w[$ + 12], 6, 1700485571), A = k(A, v, D, b, w[$ + 3], 10, -1894986606), b = k(b, A, v, D, w[$ + 10], 15, -1051523), D = k(D, b, A, v, w[$ + 1], 21, -2054922799), v = k(v, D, b, A, w[$ + 8], 6, 1873313359), A = k(A, v, D, b, w[$ + 15], 10, -30611744), b = k(b, A, v, D, w[$ + 6], 15, -1560198380), D = k(D, b, A, v, w[$ + 13], 21, 1309151649), v = k(v, D, b, A, w[$ + 4], 6, -145523070), A = k(A, v, D, b, w[$ + 11], 10, -1120210379), b = k(b, A, v, D, w[$ + 2], 15, 718787259), D = k(D, b, A, v, w[$ + 9], 21, -343485551), v = P(v, Q), D = P(D, H), b = P(b, j), A = P(A, q);
            }
            return Array(v, D, b, A);
          }
          function h(w, x, v, D, b, A) {
            return P((x = P(P(x, w), P(D, A))) << b | x >>> 32 - b, v);
          }
          function g(w, x, v, D, b, A, $) {
            return h(x & v | ~x & D, w, x, b, A, $);
          }
          function _(w, x, v, D, b, A, $) {
            return h(x & D | v & ~D, w, x, b, A, $);
          }
          function I(w, x, v, D, b, A, $) {
            return h(x ^ v ^ D, w, x, b, A, $);
          }
          function k(w, x, v, D, b, A, $) {
            return h(v ^ (x | ~D), w, x, b, A, $);
          }
          function P(w, x) {
            var v = (65535 & w) + (65535 & x);
            return (w >> 16) + (x >> 16) + (v >> 16) << 16 | 65535 & v;
          }
          n.exports = function(w) {
            return y.hash(w, S, 16);
          };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 7: [function(r, n, i) {
        (function(a, o, s, u, c, l, d, f, p) {
          n.exports = function(y) {
            for (var S, h = new Array(y), g = 0; g < y; g++) (3 & g) == 0 && (S = 4294967296 * Math.random()), h[g] = S >>> ((3 & g) << 3) & 255;
            return h;
          };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { buffer: 3, lYpoI2: 11 }], 8: [function(r, n, i) {
        (function(a, o, s, u, c, l, d, f, p) {
          var y = r("./helpers");
          function S(_, I) {
            _[I >> 5] |= 128 << 24 - I % 32, _[15 + (I + 64 >> 9 << 4)] = I;
            for (var k, P, w, x = Array(80), v = 1732584193, D = -271733879, b = -1732584194, A = 271733878, $ = -1009589776, Q = 0; Q < _.length; Q += 16) {
              for (var H = v, j = D, q = b, O = A, N = $, M = 0; M < 80; M++) {
                x[M] = M < 16 ? _[Q + M] : g(x[M - 3] ^ x[M - 8] ^ x[M - 14] ^ x[M - 16], 1);
                var W = h(h(g(v, 5), (W = D, P = b, w = A, (k = M) < 20 ? W & P | ~W & w : !(k < 40) && k < 60 ? W & P | W & w | P & w : W ^ P ^ w)), h(h($, x[M]), (k = M) < 20 ? 1518500249 : k < 40 ? 1859775393 : k < 60 ? -1894007588 : -899497514)), $ = A, A = b, b = g(D, 30), D = v, v = W;
              }
              v = h(v, H), D = h(D, j), b = h(b, q), A = h(A, O), $ = h($, N);
            }
            return Array(v, D, b, A, $);
          }
          function h(_, I) {
            var k = (65535 & _) + (65535 & I);
            return (_ >> 16) + (I >> 16) + (k >> 16) << 16 | 65535 & k;
          }
          function g(_, I) {
            return _ << I | _ >>> 32 - I;
          }
          n.exports = function(_) {
            return y.hash(_, S, 20, !0);
          };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 9: [function(r, n, i) {
        (function(a, o, s, u, c, l, d, f, p) {
          function y(I, k) {
            var P = (65535 & I) + (65535 & k);
            return (I >> 16) + (k >> 16) + (P >> 16) << 16 | 65535 & P;
          }
          function S(I, k) {
            var P, w = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), x = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), v = new Array(64);
            I[k >> 5] |= 128 << 24 - k % 32, I[15 + (k + 64 >> 9 << 4)] = k;
            for (var D, b, A = 0; A < I.length; A += 16) {
              for (var $ = x[0], Q = x[1], H = x[2], j = x[3], q = x[4], O = x[5], N = x[6], M = x[7], W = 0; W < 64; W++) v[W] = W < 16 ? I[W + A] : y(y(y((b = v[W - 2], g(b, 17) ^ g(b, 19) ^ _(b, 10)), v[W - 7]), (b = v[W - 15], g(b, 7) ^ g(b, 18) ^ _(b, 3))), v[W - 16]), P = y(y(y(y(M, g(b = q, 6) ^ g(b, 11) ^ g(b, 25)), q & O ^ ~q & N), w[W]), v[W]), D = y(g(D = $, 2) ^ g(D, 13) ^ g(D, 22), $ & Q ^ $ & H ^ Q & H), M = N, N = O, O = q, q = y(j, P), j = H, H = Q, Q = $, $ = y(P, D);
              x[0] = y($, x[0]), x[1] = y(Q, x[1]), x[2] = y(H, x[2]), x[3] = y(j, x[3]), x[4] = y(q, x[4]), x[5] = y(O, x[5]), x[6] = y(N, x[6]), x[7] = y(M, x[7]);
            }
            return x;
          }
          var h = r("./helpers"), g = function(I, k) {
            return I >>> k | I << 32 - k;
          }, _ = function(I, k) {
            return I >>> k;
          };
          n.exports = function(I) {
            return h.hash(I, S, 32, !0);
          };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 10: [function(r, n, i) {
        (function(a, o, s, u, c, l, d, f, p) {
          i.read = function(y, S, h, g, A) {
            var I, k, P = 8 * A - g - 1, w = (1 << P) - 1, x = w >> 1, v = -7, D = h ? A - 1 : 0, b = h ? -1 : 1, A = y[S + D];
            for (D += b, I = A & (1 << -v) - 1, A >>= -v, v += P; 0 < v; I = 256 * I + y[S + D], D += b, v -= 8) ;
            for (k = I & (1 << -v) - 1, I >>= -v, v += g; 0 < v; k = 256 * k + y[S + D], D += b, v -= 8) ;
            if (I === 0) I = 1 - x;
            else {
              if (I === w) return k ? NaN : 1 / 0 * (A ? -1 : 1);
              k += Math.pow(2, g), I -= x;
            }
            return (A ? -1 : 1) * k * Math.pow(2, I - g);
          }, i.write = function(y, S, h, g, _, $) {
            var k, P, w = 8 * $ - _ - 1, x = (1 << w) - 1, v = x >> 1, D = _ === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = g ? 0 : $ - 1, A = g ? 1 : -1, $ = S < 0 || S === 0 && 1 / S < 0 ? 1 : 0;
            for (S = Math.abs(S), isNaN(S) || S === 1 / 0 ? (P = isNaN(S) ? 1 : 0, k = x) : (k = Math.floor(Math.log(S) / Math.LN2), S * (g = Math.pow(2, -k)) < 1 && (k--, g *= 2), 2 <= (S += 1 <= k + v ? D / g : D * Math.pow(2, 1 - v)) * g && (k++, g /= 2), x <= k + v ? (P = 0, k = x) : 1 <= k + v ? (P = (S * g - 1) * Math.pow(2, _), k += v) : (P = S * Math.pow(2, v - 1) * Math.pow(2, _), k = 0)); 8 <= _; y[h + b] = 255 & P, b += A, P /= 256, _ -= 8) ;
            for (k = k << _ | P, w += _; 0 < w; y[h + b] = 255 & k, b += A, k /= 256, w -= 8) ;
            y[h + b - A] |= 128 * $;
          };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754");
      }, { buffer: 3, lYpoI2: 11 }], 11: [function(r, n, i) {
        (function(a, o, s, u, c, l, d, f, p) {
          var y, S, h;
          function g() {
          }
          (a = n.exports = {}).nextTick = (S = typeof window < "u" && window.setImmediate, h = typeof window < "u" && window.postMessage && window.addEventListener, S ? function(_) {
            return window.setImmediate(_);
          } : h ? (y = [], window.addEventListener("message", function(_) {
            var I = _.source;
            I !== window && I !== null || _.data !== "process-tick" || (_.stopPropagation(), 0 < y.length && y.shift()());
          }, !0), function(_) {
            y.push(_), window.postMessage("process-tick", "*");
          }) : function(_) {
            setTimeout(_, 0);
          }), a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.on = g, a.addListener = g, a.once = g, a.off = g, a.removeListener = g, a.removeAllListeners = g, a.emit = g, a.binding = function(_) {
            throw new Error("process.binding is not supported");
          }, a.cwd = function() {
            return "/";
          }, a.chdir = function(_) {
            throw new Error("process.chdir is not supported");
          };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
      }, { buffer: 3, lYpoI2: 11 }] }, {}, [1])(1);
    });
  })(bi)), bi.exports;
}
var iv = nv();
const gu = /* @__PURE__ */ Sn(iv);
function av() {
  const e = rv(), t = "config" in e.cache ? e.cache.config : {}, r = new Ga({
    ...t,
    typePolicies: {
      ...t.typePolicies,
      Query: {
        ...t.typePolicies?.Query,
        fields: {
          ...t.typePolicies?.Query.fields,
          findScenes: {
            ...t.typePolicies?.Query.fields?.findScenes,
            keyArgs: (a) => gu({
              ...a,
              filter: {
                ...a?.filter,
                page: void 0,
                per_page: void 0
              }
            }),
            merge(a = { scenes: [] }, o) {
              return {
                ...a,
                ...o,
                scenes: [
                  ...a.scenes,
                  ...o.scenes.filter(
                    (s) => !a.scenes.some((u) => u.__ref === s.__ref)
                  )
                ]
              };
            }
          },
          findSceneMarkers: {
            ...t.typePolicies?.Query.fields?.findSceneMarkers,
            keyArgs: (a) => gu({
              ...a,
              filter: {
                ...a?.filter,
                page: void 0,
                per_page: void 0
              }
            }),
            merge(a = { scene_markers: [] }, o) {
              return {
                ...a,
                ...o,
                scene_markers: [
                  ...a.scene_markers,
                  ...o.scene_markers.filter(
                    (s) => !a.scene_markers.some((u) => u.__ref === s.__ref)
                  )
                ]
              };
            }
          }
        }
      }
    }
  }), n = new za({
    link: e.link,
    cache: r
  }), i = r.modify;
  return r.modify = (a, ...o) => {
    const { fields: s = {} } = a;
    if ("findScenes" in s && typeof s.findScenes == "function") {
      const u = s.findScenes;
      s.findScenes = (...c) => {
        const [l, { DELETE: d }] = c, f = u(...c);
        return f === d ? l : f;
      };
    }
    return i.apply(r, [a, ...o]);
  }, n;
}
const Wl = av(), ov = {
  getItem: async (e) => await Yl().then((t) => t?.[e] || null).catch(console.error),
  setItem: async (e, t) => await yu((r) => ({ ...r, [e]: t })).catch(console.error),
  removeItem: async (e) => {
    await yu(
      (t) => {
        const { [e]: r, ...n } = t;
        return n;
      }
    );
  }
};
async function Yl() {
  return (await Wl.query({
    query: $y
  })).data?.configuration.plugins[ct];
}
async function yu(e) {
  Yl().then((t) => Wl.mutate({
    mutation: Py,
    variables: {
      plugin_id: ct,
      input: e(t)
    }
  }));
}
const Be = "app-state", Si = {
  showSettings: !1,
  volume: 0,
  showSubtitles: !1,
  fullscreen: !1,
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
  logLevel: Kp,
  loggersToShow: [],
  loggersToHide: [],
  showDebuggingInfo: [],
  videoJsEventsToLog: [],
  storeLoaded: !1,
  actionButtonsConfig: [
    { id: "1", type: "ui-visibility", pinned: !0 },
    { id: "2", type: "settings", pinned: !1 },
    { id: "3", type: "show-scene-info", pinned: !1 },
    { id: "4", type: "rate-scene", pinned: !1 },
    { id: "5", type: "o-counter", pinned: !1 },
    { id: "6", type: "force-landscape", pinned: !1 },
    { id: "7", type: "fullscreen", pinned: !1 },
    { id: "8", type: "volume", pinned: !1 },
    { id: "9", type: "letterboxing", pinned: !1 },
    { id: "10", type: "loop", pinned: !1 },
    { id: "11", type: "subtitles", pinned: !1 }
  ],
  playbackRate: 1
}, sv = [
  "storeLoaded",
  "showSettings",
  "fullscreen"
], uv = [
  "forceLandscape"
], cv = () => {
  const e = ov, t = localStorage;
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
        uv.includes(c) ? s[c] = l : sv.includes(c) || (o[c] = l);
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
Lp()(
  Vp(
    (e, t) => ({
      ...Si,
      set: (r, n) => {
        if (!t().storeLoaded && r !== "storeLoaded") {
          console.warn(`Tried to set ${r} to "${n}" before store was loaded`);
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
        if (!t().storeLoaded) {
          console.warn(`Tried to set ${r} to default before store was loaded`);
          return;
        }
        e((n) => ({
          [r]: Si[r]
        }));
      },
      getDefault: (r) => Si[r],
      get: (r) => t()[r]
    }),
    {
      name: Be,
      storage: rc(() => cv()),
      onRehydrateStorage: (e) => () => e.set("storeLoaded", !0),
      version: 1,
      migrate: (e, t) => {
        if (t === 0 && e && typeof e == "object" && ("audioMuted" in e && (e.volume = e.audioMuted ? 0 : 1, delete e.audioMuted), "actionButtonsConfig" in e && Array.isArray(e.actionButtonsConfig)))
          for (const r of e.actionButtonsConfig)
            r.type === "mute" && (r.type = "volume");
        return e;
      }
    }
  )
);
const { PluginApi: ke } = window, { React: ue } = ke, Ja = ke.utils.StashService.getClient();
Hl(
  async (e) => e?.initialSetupComplete ? null : (await dv(), {
    ...e,
    initialSetupComplete: !0
  })
);
ke.patch.instead(
  "PluginSettings",
  function(e, t, r) {
    const [n, i] = ue.useState(!1), [a, o] = ke.React.useState(null);
    if (e.pluginID !== ct) return /* @__PURE__ */ ue.createElement(r, { ...e });
    const s = async () => {
      i(!1), await Hl(() => ({})), o(null), i(!0);
    };
    ke.React.useEffect(() => {
      Ka().then((c) => o(c.plugins[ct]));
    }, []);
    const u = ke.React.useMemo(
      () => JSON.parse(
        a && Be in a && typeof a[Be] == "string" ? a[Be] : "{}"
      )?.state?.showDevOptions,
      [a]
    );
    return [
      /* @__PURE__ */ ue.createElement(r, { ...e }),
      /* @__PURE__ */ ue.createElement("div", { className: "plugin-settings" }, /* @__PURE__ */ ue.createElement("div", { className: "setting" }), " ", /* @__PURE__ */ ue.createElement("div", { className: "setting" }, /* @__PURE__ */ ue.createElement("div", null, /* @__PURE__ */ ue.createElement("h3", null, "Reset all Stash TV settings"), /* @__PURE__ */ ue.createElement("div", { className: "sub-heading" }, "Stash TV has its own settings which are configurable from the settings panel in the Stash TV interface. This resets those settings to default.")), /* @__PURE__ */ ue.createElement("div", null, /* @__PURE__ */ ue.createElement(ke.libraries.Bootstrap.Button, { onClick: s, variant: "warning" }, n && /* @__PURE__ */ ue.createElement(ue.Fragment, null, /* @__PURE__ */ ue.createElement(
        _n,
        {
          icon: ke.libraries.FontAwesomeSolid.faCheck
        }
      ), " "), "Reset"))), u && /* @__PURE__ */ ue.createElement("div", { className: "setting" }, /* @__PURE__ */ ue.createElement("div", null, /* @__PURE__ */ ue.createElement("details", null, /* @__PURE__ */ ue.createElement("summary", null, /* @__PURE__ */ ue.createElement("h3", { style: { display: "inline" } }, "Stash TV settings JSON")), /* @__PURE__ */ ue.createElement("pre", null, JSON.stringify(
        a && Be in a && typeof a[Be] == "string" ? { ...a, [Be]: "<app state data>" } : a,
        null,
        2
      )), a && Be in a && typeof a[Be] == "string" && /* @__PURE__ */ ue.createElement(ue.Fragment, null, "App state stored in Stash TV config:", /* @__PURE__ */ ue.createElement("pre", null, JSON.stringify(JSON.parse(a[Be]), null, 2))))), /* @__PURE__ */ ue.createElement("div", null), " "))
    ];
  }
);
ke.patch.instead;
ke.patch.instead(
  "MainNavBar.MenuItems",
  function({ children: e, ...t }, r, n) {
    const { data: i, loading: a } = ke.GQL.useConfigurationQuery(), o = i?.configuration?.interface?.menuItems?.includes("tv");
    return [
      /* @__PURE__ */ ue.createElement(n, { ...t }, e, !a && o && /* @__PURE__ */ ue.createElement(lv, null))
    ];
  }
);
ke.patch.before(
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
const lv = () => {
  const e = "/plugin/" + ct + "/assets/app/";
  return /* @__PURE__ */ ue.createElement(
    "div",
    {
      "data-rb-event-key": e,
      className: "col-4 col-sm-3 col-md-2 col-lg-auto nav-link",
      id: "StashTVButton"
    },
    /* @__PURE__ */ ue.createElement(
      "a",
      {
        href: e,
        className: "minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center btn btn-primary",
        target: "_blank"
      },
      /* @__PURE__ */ ue.createElement(
        _n,
        {
          className: "fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0",
          icon: ke.libraries.FontAwesomeSolid.faTelevision
        }
      ),
      /* @__PURE__ */ ue.createElement("span", null, "TV")
    )
  );
};
async function Hl(e) {
  Ka().then(
    async (t) => typeof e == "function" ? await e(t.plugins[ct], t) : { ...t.plugins[ct], ...e }
  ).then((t) => {
    if (t)
      return Ja.mutate({
        mutation: ke.GQL.ConfigurePluginDocument,
        variables: {
          plugin_id: ct,
          input: t
        }
      });
  });
}
async function fv(e) {
  Ka().then(
    (t) => typeof e == "function" ? e(t.interface) : { ...t.interface, ...e }
  ).then((t) => Ja.mutate({
    mutation: ke.GQL.ConfigureInterfaceDocument,
    variables: {
      input: t
    }
  }));
}
async function Ka() {
  return (await Ja.query({
    query: ke.GQL.ConfigurationDocument
  })).data?.configuration;
}
async function dv() {
  fv(
    (e) => ({
      ...e,
      menuItems: Array.from(/* @__PURE__ */ new Set([...e.menuItems || [], "tv"]))
    })
  );
}
