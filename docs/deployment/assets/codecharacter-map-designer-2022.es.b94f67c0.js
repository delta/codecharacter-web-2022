import {
  R as e,
  P as t,
  G as n,
  r,
  s as a,
  $ as i,
  a as o,
} from './vendor.81f97c66.js';
var l,
  s = Object.defineProperty,
  u = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  f = Object.getOwnPropertySymbols,
  d = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable,
  h = (e, t, n) =>
    t in e
      ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  m = (e, t) => {
    for (var n in t || (t = {})) d.call(t, n) && h(e, n, t[n]);
    if (f) for (var n of f(t)) p.call(t, n) && h(e, n, t[n]);
    return e;
  },
  v = (e, t) => u(e, c(t)),
  g = (e, t) => {
    var n = {};
    for (var r in e) d.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && f)
      for (var r of f(e)) t.indexOf(r) < 0 && p.call(e, r) && (n[r] = e[r]);
    return n;
  },
  b = (e, t, n) => (h(e, 'symbol' != typeof t ? t + '' : t, n), n),
  y = {
    prefix: 'fas',
    iconName: 'arrows-alt',
    icon: [
      512,
      512,
      [],
      'f0b2',
      'M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z',
    ],
  },
  w = {
    prefix: 'fas',
    iconName: 'eraser',
    icon: [
      512,
      512,
      [],
      'f12d',
      'M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z',
    ],
  },
  x = {
    prefix: 'fas',
    iconName: 'save',
    icon: [
      448,
      512,
      [],
      'f0c7',
      'M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z',
    ],
  },
  k = {
    prefix: 'fas',
    iconName: 'times-circle',
    icon: [
      512,
      512,
      [],
      'f057',
      'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z',
    ],
  };
function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? E(Object(n), !0).forEach(function (t) {
          C(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : E(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function O(e) {
  return (O =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
}
function _(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function C(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function P(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, t) {
      var n =
        null == e
          ? null
          : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
            e['@@iterator'];
      if (null == n) return;
      var r,
        a,
        i = [],
        o = !0,
        l = !1;
      try {
        for (
          n = n.call(e);
          !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t);
          o = !0
        );
      } catch (s) {
        (l = !0), (a = s);
      } finally {
        try {
          o || null == n.return || n.return();
        } finally {
          if (l) throw a;
        }
      }
      return i;
    })(e, t) ||
    T(e, t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function N(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return D(e);
    })(e) ||
    (function (e) {
      if (
        ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e['@@iterator']
      )
        return Array.from(e);
    })(e) ||
    T(e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function T(e, t) {
  if (e) {
    if ('string' == typeof e) return D(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(e)
        : 'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? D(e, t)
        : void 0
    );
  }
}
function D(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var L = function () {},
  A = {},
  M = {},
  z = null,
  j = { mark: L, measure: L };
try {
  'undefined' != typeof window && (A = window),
    'undefined' != typeof document && (M = document),
    'undefined' != typeof MutationObserver && (z = MutationObserver),
    'undefined' != typeof performance && (j = performance);
} catch (vg) {}
var R = (A.navigator || {}).userAgent,
  I = void 0 === R ? '' : R,
  F = A,
  U = M,
  H = z,
  W = j;
F.document;
var V =
    !!U.documentElement &&
    !!U.head &&
    'function' == typeof U.addEventListener &&
    'function' == typeof U.createElement,
  B = ~I.indexOf('MSIE') || ~I.indexOf('Trident/'),
  Y = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  X = (function () {
    try {
      return !0;
    } catch (vg) {
      return !1;
    }
  })(),
  $ = {
    fas: 'solid',
    'fa-solid': 'solid',
    far: 'regular',
    'fa-regular': 'regular',
    fal: 'light',
    'fa-light': 'light',
    fat: 'thin',
    'fa-thin': 'thin',
    fad: 'duotone',
    'fa-duotone': 'duotone',
    fab: 'brands',
    'fa-brands': 'brands',
    fak: 'kit',
    'fa-kit': 'kit',
    fa: 'solid',
  },
  Q = {
    solid: 'fas',
    regular: 'far',
    light: 'fal',
    thin: 'fat',
    duotone: 'fad',
    brands: 'fab',
    kit: 'fak',
  },
  G = {
    fab: 'fa-brands',
    fad: 'fa-duotone',
    fak: 'fa-kit',
    fal: 'fa-light',
    far: 'fa-regular',
    fas: 'fa-solid',
    fat: 'fa-thin',
  },
  q = {
    'fa-brands': 'fab',
    'fa-duotone': 'fad',
    'fa-kit': 'fak',
    'fa-light': 'fal',
    'fa-regular': 'far',
    'fa-solid': 'fas',
    'fa-thin': 'fat',
  },
  K = /fa[srltdbk\-\ ]/,
  J =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,
  Z = { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' },
  ee = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  te = ee.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  ne = [
    'class',
    'data-prefix',
    'data-icon',
    'data-fa-transform',
    'data-fa-mask',
  ],
  re = 'duotone-group',
  ae = 'swap-opacity',
  ie = 'primary',
  oe = 'secondary',
  le = []
    .concat(N(Object.keys(Q)), [
      '2xs',
      'xs',
      'sm',
      'lg',
      'xl',
      '2xl',
      'beat',
      'border',
      'fade',
      'beat-fade',
      'bounce',
      'flip-both',
      'flip-horizontal',
      'flip-vertical',
      'flip',
      'fw',
      'inverse',
      'layers-counter',
      'layers-text',
      'layers',
      'li',
      'pull-left',
      'pull-right',
      'pulse',
      'rotate-180',
      'rotate-270',
      'rotate-90',
      'rotate-by',
      'shake',
      'spin-pulse',
      'spin-reverse',
      'spin',
      'stack-1x',
      'stack-2x',
      'stack',
      'ul',
      re,
      ae,
      ie,
      oe,
    ])
    .concat(
      ee.map(function (e) {
        return ''.concat(e, 'x');
      }),
    )
    .concat(
      te.map(function (e) {
        return 'w-'.concat(e);
      }),
    ),
  se = F.FontAwesomeConfig || {};
if (U && 'function' == typeof U.querySelector) {
  [
    ['data-family-prefix', 'familyPrefix'],
    ['data-style-default', 'styleDefault'],
    ['data-replacement-class', 'replacementClass'],
    ['data-auto-replace-svg', 'autoReplaceSvg'],
    ['data-auto-add-css', 'autoAddCss'],
    ['data-auto-a11y', 'autoA11y'],
    ['data-search-pseudo-elements', 'searchPseudoElements'],
    ['data-observe-mutations', 'observeMutations'],
    ['data-mutate-approach', 'mutateApproach'],
    ['data-keep-original-source', 'keepOriginalSource'],
    ['data-measure-performance', 'measurePerformance'],
    ['data-show-missing-icons', 'showMissingIcons'],
  ].forEach(function (e) {
    var t = P(e, 2),
      n = t[0],
      r = t[1],
      a = (function (e) {
        return '' === e || ('false' !== e && ('true' === e || e));
      })(
        (function (e) {
          var t = U.querySelector('script[' + e + ']');
          if (t) return t.getAttribute(e);
        })(n),
      );
    null != a && (se[r] = a);
  });
}
var ue = S(
  S(
    {},
    {
      familyPrefix: 'fa',
      styleDefault: 'solid',
      replacementClass: 'svg-inline--fa',
      autoReplaceSvg: !0,
      autoAddCss: !0,
      autoA11y: !0,
      searchPseudoElements: !1,
      observeMutations: !0,
      mutateApproach: 'async',
      keepOriginalSource: !0,
      measurePerformance: !1,
      showMissingIcons: !0,
    },
  ),
  se,
);
ue.autoReplaceSvg || (ue.observeMutations = !1);
var ce = {};
Object.keys(ue).forEach(function (e) {
  Object.defineProperty(ce, e, {
    enumerable: !0,
    set: function (t) {
      (ue[e] = t),
        fe.forEach(function (e) {
          return e(ce);
        });
    },
    get: function () {
      return ue[e];
    },
  });
}),
  (F.FontAwesomeConfig = ce);
var fe = [];
var de = 16,
  pe = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function he() {
  for (var e = 12, t = ''; e-- > 0; )
    t += '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[
      (62 * Math.random()) | 0
    ];
  return t;
}
function me(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function ve(e) {
  return e.classList
    ? me(e.classList)
    : (e.getAttribute('class') || '').split(' ').filter(function (e) {
        return e;
      });
}
function ge(e) {
  return ''
    .concat(e)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function be(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + ''.concat(n, ': ').concat(e[n].trim(), ';');
  }, '');
}
function ye(e) {
  return (
    e.size !== pe.size ||
    e.x !== pe.x ||
    e.y !== pe.y ||
    e.rotate !== pe.rotate ||
    e.flipX ||
    e.flipY
  );
}
function we() {
  var e = 'fa',
    t = 'svg-inline--fa',
    n = ce.familyPrefix,
    r = ce.replacementClass,
    a =
      ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
  if (n !== e || r !== t) {
    var i = new RegExp('\\.'.concat(e, '\\-'), 'g'),
      o = new RegExp('\\--'.concat(e, '\\-'), 'g'),
      l = new RegExp('\\.'.concat(t), 'g');
    a = a
      .replace(i, '.'.concat(n, '-'))
      .replace(o, '--'.concat(n, '-'))
      .replace(l, '.'.concat(r));
  }
  return a;
}
var xe = !1;
function ke() {
  ce.autoAddCss &&
    !xe &&
    (!(function (e) {
      if (e && V) {
        var t = U.createElement('style');
        t.setAttribute('type', 'text/css'), (t.innerHTML = e);
        for (
          var n = U.head.childNodes, r = null, a = n.length - 1;
          a > -1;
          a--
        ) {
          var i = n[a],
            o = (i.tagName || '').toUpperCase();
          ['STYLE', 'LINK'].indexOf(o) > -1 && (r = i);
        }
        U.head.insertBefore(t, r);
      }
    })(we()),
    (xe = !0));
}
var Ee = {
    mixout: function () {
      return { dom: { css: we, insertCss: ke } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          ke();
        },
        beforeI2svg: function () {
          ke();
        },
      };
    },
  },
  Se = F || {};
Se.___FONT_AWESOME___ || (Se.___FONT_AWESOME___ = {}),
  Se.___FONT_AWESOME___.styles || (Se.___FONT_AWESOME___.styles = {}),
  Se.___FONT_AWESOME___.hooks || (Se.___FONT_AWESOME___.hooks = {}),
  Se.___FONT_AWESOME___.shims || (Se.___FONT_AWESOME___.shims = []);
var Oe = Se.___FONT_AWESOME___,
  _e = [],
  Ce = !1;
function Pe(e) {
  V && (Ce ? setTimeout(e, 0) : _e.push(e));
}
function Ne(e) {
  var t = e.tag,
    n = e.attributes,
    r = void 0 === n ? {} : n,
    a = e.children,
    i = void 0 === a ? [] : a;
  return 'string' == typeof e
    ? ge(e)
    : '<'
        .concat(t, ' ')
        .concat(
          (function (e) {
            return Object.keys(e || {})
              .reduce(function (t, n) {
                return t + ''.concat(n, '="').concat(ge(e[n]), '" ');
              }, '')
              .trim();
          })(r),
          '>',
        )
        .concat(i.map(Ne).join(''), '</')
        .concat(t, '>');
}
function Te(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
V &&
  ((Ce = (U.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    U.readyState,
  )) ||
    U.addEventListener('DOMContentLoaded', function e() {
      U.removeEventListener('DOMContentLoaded', e),
        (Ce = 1),
        _e.map(function (e) {
          return e();
        });
    }));
var De = function (e, t, n, r) {
  var a,
    i,
    o,
    l = Object.keys(e),
    s = l.length,
    u =
      void 0 !== r
        ? (function (e, t) {
            return function (n, r, a, i) {
              return e.call(t, n, r, a, i);
            };
          })(t, r)
        : t;
  for (void 0 === n ? ((a = 1), (o = e[l[0]])) : ((a = 0), (o = n)); a < s; a++)
    o = u(o, e[(i = l[a])], i, e);
  return o;
};
function Le(e) {
  var t = (function (e) {
    for (var t = [], n = 0, r = e.length; n < r; ) {
      var a = e.charCodeAt(n++);
      if (a >= 55296 && a <= 56319 && n < r) {
        var i = e.charCodeAt(n++);
        56320 == (64512 & i)
          ? t.push(((1023 & a) << 10) + (1023 & i) + 65536)
          : (t.push(a), n--);
      } else t.push(a);
    }
    return t;
  })(e);
  return 1 === t.length ? t[0].toString(16) : null;
}
function Ae(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n];
    return !!r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function Me(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    r = n.skipHooks,
    a = void 0 !== r && r,
    i = Ae(t);
  'function' != typeof Oe.hooks.addPack || a
    ? (Oe.styles[e] = S(S({}, Oe.styles[e] || {}), i))
    : Oe.hooks.addPack(e, Ae(t)),
    'fas' === e && Me('fa', t);
}
var ze = Oe.styles,
  je = Oe.shims,
  Re = Object.values(G),
  Ie = null,
  Fe = {},
  Ue = {},
  He = {},
  We = {},
  Ve = {},
  Be = Object.keys($);
function Ye(e, t) {
  var n,
    r = t.split('-'),
    a = r[0],
    i = r.slice(1).join('-');
  return a !== e || '' === i || ((n = i), ~le.indexOf(n)) ? null : i;
}
var Xe,
  $e = function () {
    var e = function (e) {
      return De(
        ze,
        function (t, n, r) {
          return (t[r] = De(n, e, {})), t;
        },
        {},
      );
    };
    (Fe = e(function (e, t, n) {
      (t[3] && (e[t[3]] = n), t[2]) &&
        t[2]
          .filter(function (e) {
            return 'number' == typeof e;
          })
          .forEach(function (t) {
            e[t.toString(16)] = n;
          });
      return e;
    })),
      (Ue = e(function (e, t, n) {
        ((e[n] = n), t[2]) &&
          t[2]
            .filter(function (e) {
              return 'string' == typeof e;
            })
            .forEach(function (t) {
              e[t] = n;
            });
        return e;
      })),
      (Ve = e(function (e, t, n) {
        var r = t[2];
        return (
          (e[n] = n),
          r.forEach(function (t) {
            e[t] = n;
          }),
          e
        );
      }));
    var t = 'far' in ze || ce.autoFetchSvg,
      n = De(
        je,
        function (e, n) {
          var r = n[0],
            a = n[1],
            i = n[2];
          return (
            'far' !== a || t || (a = 'fas'),
            'string' == typeof r && (e.names[r] = { prefix: a, iconName: i }),
            'number' == typeof r &&
              (e.unicodes[r.toString(16)] = { prefix: a, iconName: i }),
            e
          );
        },
        { names: {}, unicodes: {} },
      );
    (He = n.names), (We = n.unicodes), (Ie = Je(ce.styleDefault));
  };
function Qe(e, t) {
  return (Fe[e] || {})[t];
}
function Ge(e, t) {
  return (Ve[e] || {})[t];
}
function qe(e) {
  return He[e] || { prefix: null, iconName: null };
}
function Ke() {
  return Ie;
}
(Xe = function (e) {
  Ie = Je(e.styleDefault);
}),
  fe.push(Xe),
  $e();
function Je(e) {
  var t = Q[e] || Q[$[e]],
    n = e in Oe.styles ? e : null;
  return t || n || null;
}
function Ze(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = t.skipLookups,
    r = void 0 !== n && n,
    a = null,
    i = e.reduce(
      function (e, t) {
        var n = Ye(ce.familyPrefix, t);
        if (
          (ze[t]
            ? ((t = Re.includes(t) ? q[t] : t), (a = t), (e.prefix = t))
            : Be.indexOf(t) > -1
            ? ((a = t), (e.prefix = Je(t)))
            : n
            ? (e.iconName = n)
            : t !== ce.replacementClass && e.rest.push(t),
          !r && e.prefix && e.iconName)
        ) {
          var i = 'fa' === a ? qe(e.iconName) : {},
            o = Ge(e.prefix, e.iconName);
          i.prefix && (a = null),
            (e.iconName = i.iconName || o || e.iconName),
            (e.prefix = i.prefix || e.prefix),
            'far' !== e.prefix ||
              ze.far ||
              !ze.fas ||
              ce.autoFetchSvg ||
              (e.prefix = 'fas');
        }
        return e;
      },
      { prefix: null, iconName: null, rest: [] },
    );
  return ('fa' !== i.prefix && 'fa' !== a) || (i.prefix = Ke() || 'fas'), i;
}
var et = (function () {
    function e() {
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      })(this, e),
        (this.definitions = {});
    }
    var t, n, r;
    return (
      (t = e),
      (n = [
        {
          key: 'add',
          value: function () {
            for (
              var e = this, t = arguments.length, n = new Array(t), r = 0;
              r < t;
              r++
            )
              n[r] = arguments[r];
            var a = n.reduce(this._pullDefinitions, {});
            Object.keys(a).forEach(function (t) {
              (e.definitions[t] = S(S({}, e.definitions[t] || {}), a[t])),
                Me(t, a[t]);
              var n = G[t];
              n && Me(n, a[t]), $e();
            });
          },
        },
        {
          key: 'reset',
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: '_pullDefinitions',
          value: function (e, t) {
            var n = t.prefix && t.iconName && t.icon ? { 0: t } : t;
            return (
              Object.keys(n).map(function (t) {
                var r = n[t],
                  a = r.prefix,
                  i = r.iconName,
                  o = r.icon,
                  l = o[2];
                e[a] || (e[a] = {}),
                  l.length > 0 &&
                    l.forEach(function (t) {
                      'string' == typeof t && (e[a][t] = o);
                    }),
                  (e[a][i] = o);
              }),
              e
            );
          },
        },
      ]),
      n && _(t.prototype, n),
      r && _(t, r),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      e
    );
  })(),
  tt = [],
  nt = {},
  rt = {},
  at = Object.keys(rt);
function it(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
    a < n;
    a++
  )
    r[a - 2] = arguments[a];
  var i = nt[e] || [];
  return (
    i.forEach(function (e) {
      t = e.apply(null, [t].concat(r));
    }),
    t
  );
}
function ot(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var a = nt[e] || [];
  a.forEach(function (e) {
    e.apply(null, n);
  });
}
function lt() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return rt[e] ? rt[e].apply(null, t) : void 0;
}
function st(e) {
  'fa' === e.prefix && (e.prefix = 'fas');
  var t = e.iconName,
    n = e.prefix || Ke();
  if (t)
    return (t = Ge(n, t) || t), Te(ut.definitions, n, t) || Te(Oe.styles, n, t);
}
var ut = new et(),
  ct = {
    i2svg: function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return V
        ? (ot('beforeI2svg', e), lt('pseudoElements2svg', e), lt('i2svg', e))
        : Promise.reject('Operation requires a DOM of some kind.');
    },
    watch: function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.autoReplaceSvgRoot;
      !1 === ce.autoReplaceSvg && (ce.autoReplaceSvg = !0),
        (ce.observeMutations = !0),
        Pe(function () {
          dt({ autoReplaceSvgRoot: t }), ot('watch', e);
        });
    },
  },
  ft = {
    noAuto: function () {
      (ce.autoReplaceSvg = !1), (ce.observeMutations = !1), ot('noAuto');
    },
    config: ce,
    dom: ct,
    parse: {
      icon: function (e) {
        if (null === e) return null;
        if ('object' === O(e) && e.prefix && e.iconName)
          return {
            prefix: e.prefix,
            iconName: Ge(e.prefix, e.iconName) || e.iconName,
          };
        if (Array.isArray(e) && 2 === e.length) {
          var t = 0 === e[1].indexOf('fa-') ? e[1].slice(3) : e[1],
            n = Je(e[0]);
          return { prefix: n, iconName: Ge(n, t) || t };
        }
        if (
          'string' == typeof e &&
          (e.indexOf(''.concat(ce.familyPrefix, '-')) > -1 || e.match(K))
        ) {
          var r = Ze(e.split(' '), { skipLookups: !0 });
          return {
            prefix: r.prefix || Ke(),
            iconName: Ge(r.prefix, r.iconName) || r.iconName,
          };
        }
        if ('string' == typeof e) {
          var a = Ke();
          return { prefix: a, iconName: Ge(a, e) || e };
        }
      },
    },
    library: ut,
    findIconDefinition: st,
    toHtml: Ne,
  },
  dt = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.autoReplaceSvgRoot,
      n = void 0 === t ? U : t;
    (Object.keys(Oe.styles).length > 0 || ce.autoFetchSvg) &&
      V &&
      ce.autoReplaceSvg &&
      ft.dom.i2svg({ node: n });
  };
function pt(e, t) {
  return (
    Object.defineProperty(e, 'abstract', { get: t }),
    Object.defineProperty(e, 'html', {
      get: function () {
        return e.abstract.map(function (e) {
          return Ne(e);
        });
      },
    }),
    Object.defineProperty(e, 'node', {
      get: function () {
        if (V) {
          var t = U.createElement('div');
          return (t.innerHTML = e.html), t.children;
        }
      },
    }),
    e
  );
}
function ht(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    a = e.prefix,
    i = e.iconName,
    o = e.transform,
    l = e.symbol,
    s = e.title,
    u = e.maskId,
    c = e.titleId,
    f = e.extra,
    d = e.watchable,
    p = void 0 !== d && d,
    h = r.found ? r : n,
    m = h.width,
    v = h.height,
    g = 'fak' === a,
    b = [
      ce.replacementClass,
      i ? ''.concat(ce.familyPrefix, '-').concat(i) : '',
    ]
      .filter(function (e) {
        return -1 === f.classes.indexOf(e);
      })
      .filter(function (e) {
        return '' !== e || !!e;
      })
      .concat(f.classes)
      .join(' '),
    y = {
      children: [],
      attributes: S(
        S({}, f.attributes),
        {},
        {
          'data-prefix': a,
          'data-icon': i,
          class: b,
          role: f.attributes.role || 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 '.concat(m, ' ').concat(v),
        },
      ),
    },
    w =
      g && !~f.classes.indexOf('fa-fw')
        ? { width: ''.concat((m / v) * 16 * 0.0625, 'em') }
        : {};
  p && (y.attributes['data-fa-i2svg'] = ''),
    s &&
      (y.children.push({
        tag: 'title',
        attributes: {
          id: y.attributes['aria-labelledby'] || 'title-'.concat(c || he()),
        },
        children: [s],
      }),
      delete y.attributes.title);
  var x = S(
      S({}, y),
      {},
      {
        prefix: a,
        iconName: i,
        main: n,
        mask: r,
        maskId: u,
        transform: o,
        symbol: l,
        styles: S(S({}, w), f.styles),
      },
    ),
    k =
      r.found && n.found
        ? lt('generateAbstractMask', x) || { children: [], attributes: {} }
        : lt('generateAbstractIcon', x) || { children: [], attributes: {} },
    E = k.children,
    O = k.attributes;
  return (
    (x.children = E),
    (x.attributes = O),
    l
      ? (function (e) {
          var t = e.prefix,
            n = e.iconName,
            r = e.children,
            a = e.attributes,
            i = e.symbol,
            o =
              !0 === i
                ? ''.concat(t, '-').concat(ce.familyPrefix, '-').concat(n)
                : i;
          return [
            {
              tag: 'svg',
              attributes: { style: 'display: none;' },
              children: [
                {
                  tag: 'symbol',
                  attributes: S(S({}, a), {}, { id: o }),
                  children: r,
                },
              ],
            },
          ];
        })(x)
      : (function (e) {
          var t = e.children,
            n = e.main,
            r = e.mask,
            a = e.attributes,
            i = e.styles,
            o = e.transform;
          if (ye(o) && n.found && !r.found) {
            var l = { x: n.width / n.height / 2, y: 0.5 };
            a.style = be(
              S(
                S({}, i),
                {},
                {
                  'transform-origin': ''
                    .concat(l.x + o.x / 16, 'em ')
                    .concat(l.y + o.y / 16, 'em'),
                },
              ),
            );
          }
          return [{ tag: 'svg', attributes: a, children: t }];
        })(x)
  );
}
function mt(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    a = e.transform,
    i = e.title,
    o = e.extra,
    l = e.watchable,
    s = void 0 !== l && l,
    u = S(
      S(S({}, o.attributes), i ? { title: i } : {}),
      {},
      { class: o.classes.join(' ') },
    );
  s && (u['data-fa-i2svg'] = '');
  var c = S({}, o.styles);
  ye(a) &&
    ((c.transform = (function (e) {
      var t = e.transform,
        n = e.width,
        r = void 0 === n ? 16 : n,
        a = e.height,
        i = void 0 === a ? 16 : a,
        o = e.startCentered,
        l = void 0 !== o && o,
        s = '';
      return (
        (s +=
          l && B
            ? 'translate('
                .concat(t.x / de - r / 2, 'em, ')
                .concat(t.y / de - i / 2, 'em) ')
            : l
            ? 'translate(calc(-50% + '
                .concat(t.x / de, 'em), calc(-50% + ')
                .concat(t.y / de, 'em)) ')
            : 'translate('.concat(t.x / de, 'em, ').concat(t.y / de, 'em) ')),
        (s += 'scale('
          .concat((t.size / de) * (t.flipX ? -1 : 1), ', ')
          .concat((t.size / de) * (t.flipY ? -1 : 1), ') ')),
        s + 'rotate('.concat(t.rotate, 'deg) ')
      );
    })({ transform: a, startCentered: !0, width: n, height: r })),
    (c['-webkit-transform'] = c.transform));
  var f = be(c);
  f.length > 0 && (u.style = f);
  var d = [];
  return (
    d.push({ tag: 'span', attributes: u, children: [t] }),
    i &&
      d.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [i] }),
    d
  );
}
function vt(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    a = S(
      S(S({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(' ') },
    ),
    i = be(r.styles);
  i.length > 0 && (a.style = i);
  var o = [];
  return (
    o.push({ tag: 'span', attributes: a, children: [t] }),
    n &&
      o.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [n] }),
    o
  );
}
var gt = Oe.styles;
function bt(e) {
  var t = e[0],
    n = e[1],
    r = P(e.slice(4), 1)[0];
  return {
    found: !0,
    width: t,
    height: n,
    icon: Array.isArray(r)
      ? {
          tag: 'g',
          attributes: { class: ''.concat(ce.familyPrefix, '-').concat(re) },
          children: [
            {
              tag: 'path',
              attributes: {
                class: ''.concat(ce.familyPrefix, '-').concat(oe),
                fill: 'currentColor',
                d: r[0],
              },
            },
            {
              tag: 'path',
              attributes: {
                class: ''.concat(ce.familyPrefix, '-').concat(ie),
                fill: 'currentColor',
                d: r[1],
              },
            },
          ],
        }
      : { tag: 'path', attributes: { fill: 'currentColor', d: r } },
  };
}
var yt = { found: !1, width: 512, height: 512 };
function wt(e, t) {
  var n = t;
  return (
    'fa' === t && null !== ce.styleDefault && (t = Ke()),
    new Promise(function (r, a) {
      if ((lt('missingIconAbstract'), 'fa' === n)) {
        var i = qe(e) || {};
        (e = i.iconName || e), (t = i.prefix || t);
      }
      if (e && t && gt[t] && gt[t][e]) return r(bt(gt[t][e]));
      !(function (e, t) {
        X ||
          ce.showMissingIcons ||
          !e ||
          console.error(
            'Icon with name "'
              .concat(e, '" and prefix "')
              .concat(t, '" is missing.'),
          );
      })(e, t),
        r(
          S(
            S({}, yt),
            {},
            {
              icon:
                (ce.showMissingIcons && e && lt('missingIconAbstract')) || {},
            },
          ),
        );
    })
  );
}
var xt = function () {},
  kt =
    ce.measurePerformance && W && W.mark && W.measure
      ? W
      : { mark: xt, measure: xt },
  Et = function (e) {
    kt.mark(''.concat('FA "6.0.0"', ' ').concat(e, ' ends')),
      kt.measure(
        ''.concat('FA "6.0.0"', ' ').concat(e),
        ''.concat('FA "6.0.0"', ' ').concat(e, ' begins'),
        ''.concat('FA "6.0.0"', ' ').concat(e, ' ends'),
      );
  },
  St = function (e) {
    return (
      kt.mark(''.concat('FA "6.0.0"', ' ').concat(e, ' begins')),
      function () {
        return Et(e);
      }
    );
  },
  Ot = function () {};
function _t(e) {
  return (
    'string' == typeof (e.getAttribute ? e.getAttribute('data-fa-i2svg') : null)
  );
}
function Ct(e) {
  return U.createElementNS('http://www.w3.org/2000/svg', e);
}
function Pt(e) {
  return U.createElement(e);
}
function Nt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = t.ceFn,
    r = void 0 === n ? ('svg' === e.tag ? Ct : Pt) : n;
  if ('string' == typeof e) return U.createTextNode(e);
  var a = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (t) {
    a.setAttribute(t, e.attributes[t]);
  });
  var i = e.children || [];
  return (
    i.forEach(function (e) {
      a.appendChild(Nt(e, { ceFn: r }));
    }),
    a
  );
}
var Tt = {
  replace: function (e) {
    var t = e[0];
    if (t.parentNode)
      if (
        (e[1].forEach(function (e) {
          t.parentNode.insertBefore(Nt(e), t);
        }),
        null === t.getAttribute('data-fa-i2svg') && ce.keepOriginalSource)
      ) {
        var n = U.createComment(
          (function (e) {
            var t = ' '.concat(e.outerHTML, ' ');
            return ''.concat(t, 'Font Awesome fontawesome.com ');
          })(t),
        );
        t.parentNode.replaceChild(n, t);
      } else t.remove();
  },
  nest: function (e) {
    var t = e[0],
      n = e[1];
    if (~ve(t).indexOf(ce.replacementClass)) return Tt.replace(e);
    var r = new RegExp(''.concat(ce.familyPrefix, '-.*'));
    if ((delete n[0].attributes.id, n[0].attributes.class)) {
      var a = n[0].attributes.class.split(' ').reduce(
        function (e, t) {
          return (
            t === ce.replacementClass || t.match(r)
              ? e.toSvg.push(t)
              : e.toNode.push(t),
            e
          );
        },
        { toNode: [], toSvg: [] },
      );
      (n[0].attributes.class = a.toSvg.join(' ')),
        0 === a.toNode.length
          ? t.removeAttribute('class')
          : t.setAttribute('class', a.toNode.join(' '));
    }
    var i = n
      .map(function (e) {
        return Ne(e);
      })
      .join('\n');
    t.setAttribute('data-fa-i2svg', ''), (t.innerHTML = i);
  },
};
function Dt(e) {
  e();
}
function Lt(e, t) {
  var n = 'function' == typeof t ? t : Ot;
  if (0 === e.length) n();
  else {
    var r = Dt;
    'async' === ce.mutateApproach && (r = F.requestAnimationFrame || Dt),
      r(function () {
        var t =
            !0 === ce.autoReplaceSvg
              ? Tt.replace
              : Tt[ce.autoReplaceSvg] || Tt.replace,
          r = St('mutate');
        e.map(t), r(), n();
      });
  }
}
var At = !1;
function Mt() {
  At = !0;
}
function zt() {
  At = !1;
}
var jt = null;
function Rt(e) {
  if (H && ce.observeMutations) {
    var t = e.treeCallback,
      n = void 0 === t ? Ot : t,
      r = e.nodeCallback,
      a = void 0 === r ? Ot : r,
      i = e.pseudoElementsCallback,
      o = void 0 === i ? Ot : i,
      l = e.observeMutationsRoot,
      s = void 0 === l ? U : l;
    (jt = new H(function (e) {
      if (!At) {
        var t = Ke();
        me(e).forEach(function (e) {
          if (
            ('childList' === e.type &&
              e.addedNodes.length > 0 &&
              !_t(e.addedNodes[0]) &&
              (ce.searchPseudoElements && o(e.target), n(e.target)),
            'attributes' === e.type &&
              e.target.parentNode &&
              ce.searchPseudoElements &&
              o(e.target.parentNode),
            'attributes' === e.type &&
              _t(e.target) &&
              ~ne.indexOf(e.attributeName))
          )
            if (
              'class' === e.attributeName &&
              (function (e) {
                var t = e.getAttribute ? e.getAttribute('data-prefix') : null,
                  n = e.getAttribute ? e.getAttribute('data-icon') : null;
                return t && n;
              })(e.target)
            ) {
              var r = Ze(ve(e.target)),
                i = r.prefix,
                l = r.iconName;
              e.target.setAttribute('data-prefix', i || t),
                l && e.target.setAttribute('data-icon', l);
            } else
              (s = e.target) &&
                s.classList &&
                s.classList.contains &&
                s.classList.contains(ce.replacementClass) &&
                a(e.target);
          var s;
        });
      }
    })),
      V &&
        jt.observe(s, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function It(e) {
  var t = e.getAttribute('style'),
    n = [];
  return (
    t &&
      (n = t.split(';').reduce(function (e, t) {
        var n = t.split(':'),
          r = n[0],
          a = n.slice(1);
        return r && a.length > 0 && (e[r] = a.join(':').trim()), e;
      }, {})),
    n
  );
}
function Ft(e) {
  var t,
    n,
    r = e.getAttribute('data-prefix'),
    a = e.getAttribute('data-icon'),
    i = void 0 !== e.innerText ? e.innerText.trim() : '',
    o = Ze(ve(e));
  return (
    o.prefix || (o.prefix = Ke()),
    r && a && ((o.prefix = r), (o.iconName = a)),
    (o.iconName && o.prefix) ||
      (o.prefix &&
        i.length > 0 &&
        (o.iconName =
          ((t = o.prefix),
          (n = e.innerText),
          (Ue[t] || {})[n] || Qe(o.prefix, Le(e.innerText))))),
    o
  );
}
function Ut(e) {
  var t = me(e.attributes).reduce(function (e, t) {
      return (
        'class' !== e.name && 'style' !== e.name && (e[t.name] = t.value), e
      );
    }, {}),
    n = e.getAttribute('title'),
    r = e.getAttribute('data-fa-title-id');
  return (
    ce.autoA11y &&
      (n
        ? (t['aria-labelledby'] = ''
            .concat(ce.replacementClass, '-title-')
            .concat(r || he()))
        : ((t['aria-hidden'] = 'true'), (t.focusable = 'false'))),
    t
  );
}
function Ht(e) {
  var t =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { styleParser: !0 },
    n = Ft(e),
    r = n.iconName,
    a = n.prefix,
    i = n.rest,
    o = Ut(e),
    l = it('parseNodeAttributes', {}, e),
    s = t.styleParser ? It(e) : [];
  return S(
    {
      iconName: r,
      title: e.getAttribute('title'),
      titleId: e.getAttribute('data-fa-title-id'),
      prefix: a,
      transform: pe,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: i, styles: s, attributes: o },
    },
    l,
  );
}
var Wt = Oe.styles;
function Vt(e) {
  var t = 'nest' === ce.autoReplaceSvg ? Ht(e, { styleParser: !1 }) : Ht(e);
  return ~t.extra.classes.indexOf('fa-layers-text')
    ? lt('generateLayersText', e, t)
    : lt('generateSvgReplacementMutation', e, t);
}
function Bt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if (!V) return Promise.resolve();
  var n = U.documentElement.classList,
    r = function (e) {
      return n.add(''.concat('fontawesome-i2svg', '-').concat(e));
    },
    a = function (e) {
      return n.remove(''.concat('fontawesome-i2svg', '-').concat(e));
    },
    i = ce.autoFetchSvg ? Object.keys($) : Object.keys(Wt),
    o = ['.'.concat('fa-layers-text', ':not([').concat('data-fa-i2svg', '])')]
      .concat(
        i.map(function (e) {
          return '.'.concat(e, ':not([').concat('data-fa-i2svg', '])');
        }),
      )
      .join(', ');
  if (0 === o.length) return Promise.resolve();
  var l = [];
  try {
    l = me(e.querySelectorAll(o));
  } catch (vg) {}
  if (!(l.length > 0)) return Promise.resolve();
  r('pending'), a('complete');
  var s = St('onTree'),
    u = l.reduce(function (e, t) {
      try {
        var n = Vt(t);
        n && e.push(n);
      } catch (vg) {
        X || ('MissingIcon' === vg.name && console.error(vg));
      }
      return e;
    }, []);
  return new Promise(function (e, n) {
    Promise.all(u)
      .then(function (n) {
        Lt(n, function () {
          r('active'),
            r('complete'),
            a('pending'),
            'function' == typeof t && t(),
            s(),
            e();
        });
      })
      .catch(function (e) {
        s(), n(e);
      });
  });
}
function Yt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  Vt(e).then(function (e) {
    e && Lt([e], t);
  });
}
var Xt = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = t.transform,
      r = void 0 === n ? pe : n,
      a = t.symbol,
      i = void 0 !== a && a,
      o = t.mask,
      l = void 0 === o ? null : o,
      s = t.maskId,
      u = void 0 === s ? null : s,
      c = t.title,
      f = void 0 === c ? null : c,
      d = t.titleId,
      p = void 0 === d ? null : d,
      h = t.classes,
      m = void 0 === h ? [] : h,
      v = t.attributes,
      g = void 0 === v ? {} : v,
      b = t.styles,
      y = void 0 === b ? {} : b;
    if (e) {
      var w = e.prefix,
        x = e.iconName,
        k = e.icon;
      return pt(S({ type: 'icon' }, e), function () {
        return (
          ot('beforeDOMElementCreation', { iconDefinition: e, params: t }),
          ce.autoA11y &&
            (f
              ? (g['aria-labelledby'] = ''
                  .concat(ce.replacementClass, '-title-')
                  .concat(p || he()))
              : ((g['aria-hidden'] = 'true'), (g.focusable = 'false'))),
          ht({
            icons: {
              main: bt(k),
              mask: l
                ? bt(l.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: w,
            iconName: x,
            transform: S(S({}, pe), r),
            symbol: i,
            title: f,
            maskId: u,
            titleId: p,
            extra: { attributes: g, styles: y, classes: m },
          })
        );
      });
    }
  },
  $t = {
    mixout: function () {
      return {
        icon:
          ((e = Xt),
          function (t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = (t || {}).icon ? t : st(t || {}),
              a = n.mask;
            return (
              a && (a = (a || {}).icon ? a : st(a || {})),
              e(r, S(S({}, n), {}, { mask: a }))
            );
          }),
      };
      var e;
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (e) {
          return (e.treeCallback = Bt), (e.nodeCallback = Yt), e;
        },
      };
    },
    provides: function (e) {
      (e.i2svg = function (e) {
        var t = e.node,
          n = void 0 === t ? U : t,
          r = e.callback;
        return Bt(n, void 0 === r ? function () {} : r);
      }),
        (e.generateSvgReplacementMutation = function (e, t) {
          var n = t.iconName,
            r = t.title,
            a = t.titleId,
            i = t.prefix,
            o = t.transform,
            l = t.symbol,
            s = t.mask,
            u = t.maskId,
            c = t.extra;
          return new Promise(function (t, f) {
            Promise.all([
              wt(n, i),
              s.iconName
                ? wt(s.iconName, s.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (s) {
                var f = P(s, 2),
                  d = f[0],
                  p = f[1];
                t([
                  e,
                  ht({
                    icons: { main: d, mask: p },
                    prefix: i,
                    iconName: n,
                    transform: o,
                    symbol: l,
                    maskId: u,
                    title: r,
                    titleId: a,
                    extra: c,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(f);
          });
        }),
        (e.generateAbstractIcon = function (e) {
          var t,
            n = e.children,
            r = e.attributes,
            a = e.main,
            i = e.transform,
            o = be(e.styles);
          return (
            o.length > 0 && (r.style = o),
            ye(i) &&
              (t = lt('generateAbstractTransformGrouping', {
                main: a,
                transform: i,
                containerWidth: a.width,
                iconWidth: a.width,
              })),
            n.push(t || a.icon),
            { children: n, attributes: r }
          );
        });
    },
  },
  Qt = {
    mixout: function () {
      return {
        layer: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.classes,
            r = void 0 === n ? [] : n;
          return pt({ type: 'layer' }, function () {
            ot('beforeDOMElementCreation', { assembler: e, params: t });
            var n = [];
            return (
              e(function (e) {
                Array.isArray(e)
                  ? e.map(function (e) {
                      n = n.concat(e.abstract);
                    })
                  : (n = n.concat(e.abstract));
              }),
              [
                {
                  tag: 'span',
                  attributes: {
                    class: [''.concat(ce.familyPrefix, '-layers')]
                      .concat(N(r))
                      .join(' '),
                  },
                  children: n,
                },
              ]
            );
          });
        },
      };
    },
  },
  Gt = {
    mixout: function () {
      return {
        counter: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.title,
            r = void 0 === n ? null : n,
            a = t.classes,
            i = void 0 === a ? [] : a,
            o = t.attributes,
            l = void 0 === o ? {} : o,
            s = t.styles,
            u = void 0 === s ? {} : s;
          return pt({ type: 'counter', content: e }, function () {
            return (
              ot('beforeDOMElementCreation', { content: e, params: t }),
              vt({
                content: e.toString(),
                title: r,
                extra: {
                  attributes: l,
                  styles: u,
                  classes: [
                    ''.concat(ce.familyPrefix, '-layers-counter'),
                  ].concat(N(i)),
                },
              })
            );
          });
        },
      };
    },
  },
  qt = {
    mixout: function () {
      return {
        text: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.transform,
            r = void 0 === n ? pe : n,
            a = t.title,
            i = void 0 === a ? null : a,
            o = t.classes,
            l = void 0 === o ? [] : o,
            s = t.attributes,
            u = void 0 === s ? {} : s,
            c = t.styles,
            f = void 0 === c ? {} : c;
          return pt({ type: 'text', content: e }, function () {
            return (
              ot('beforeDOMElementCreation', { content: e, params: t }),
              mt({
                content: e,
                transform: S(S({}, pe), r),
                title: i,
                extra: {
                  attributes: u,
                  styles: f,
                  classes: [''.concat(ce.familyPrefix, '-layers-text')].concat(
                    N(l),
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (e) {
      e.generateLayersText = function (e, t) {
        var n = t.title,
          r = t.transform,
          a = t.extra,
          i = null,
          o = null;
        if (B) {
          var l = parseInt(getComputedStyle(e).fontSize, 10),
            s = e.getBoundingClientRect();
          (i = s.width / l), (o = s.height / l);
        }
        return (
          ce.autoA11y && !n && (a.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            e,
            mt({
              content: e.innerHTML,
              width: i,
              height: o,
              transform: r,
              title: n,
              extra: a,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  Kt = new RegExp('"', 'ug'),
  Jt = [1105920, 1112319];
function Zt(e, t) {
  var n = ''
    .concat('data-fa-pseudo-element-pending')
    .concat(t.replace(':', '-'));
  return new Promise(function (r, a) {
    if (null !== e.getAttribute(n)) return r();
    var i,
      o,
      l,
      s = me(e.children).filter(function (e) {
        return e.getAttribute('data-fa-pseudo-element') === t;
      })[0],
      u = F.getComputedStyle(e, t),
      c = u.getPropertyValue('font-family').match(J),
      f = u.getPropertyValue('font-weight'),
      d = u.getPropertyValue('content');
    if (s && !c) return e.removeChild(s), r();
    if (c && 'none' !== d && '' !== d) {
      var p = u.getPropertyValue('content'),
        h = ~[
          'Solid',
          'Regular',
          'Light',
          'Thin',
          'Duotone',
          'Brands',
          'Kit',
        ].indexOf(c[2])
          ? Q[c[2].toLowerCase()]
          : Z[f],
        m = (function (e) {
          var t,
            n,
            r,
            a,
            i,
            o = e.replace(Kt, ''),
            l =
              ((n = 0),
              (a = (t = o).length),
              (i = t.charCodeAt(n)) >= 55296 &&
              i <= 56319 &&
              a > n + 1 &&
              (r = t.charCodeAt(n + 1)) >= 56320 &&
              r <= 57343
                ? 1024 * (i - 55296) + r - 56320 + 65536
                : i),
            s = l >= Jt[0] && l <= Jt[1],
            u = 2 === o.length && o[0] === o[1];
          return { value: Le(u ? o[0] : o), isSecondary: s || u };
        })(p),
        v = m.value,
        g = m.isSecondary,
        b = c[0].startsWith('FontAwesome'),
        y = Qe(h, v),
        w = y;
      if (b) {
        var x =
          ((o = We[(i = v)]),
          (l = Qe('fas', i)),
          o ||
            (l ? { prefix: 'fas', iconName: l } : null) || {
              prefix: null,
              iconName: null,
            });
        x.iconName && x.prefix && ((y = x.iconName), (h = x.prefix));
      }
      if (
        !y ||
        g ||
        (s &&
          s.getAttribute('data-prefix') === h &&
          s.getAttribute('data-icon') === w)
      )
        r();
      else {
        e.setAttribute(n, w), s && e.removeChild(s);
        var k = {
            iconName: null,
            title: null,
            titleId: null,
            prefix: null,
            transform: pe,
            symbol: !1,
            mask: { iconName: null, prefix: null, rest: [] },
            maskId: null,
            extra: { classes: [], styles: {}, attributes: {} },
          },
          E = k.extra;
        (E.attributes['data-fa-pseudo-element'] = t),
          wt(y, h)
            .then(function (a) {
              var i = ht(
                  S(
                    S({}, k),
                    {},
                    {
                      icons: {
                        main: a,
                        mask: { prefix: null, iconName: null, rest: [] },
                      },
                      prefix: h,
                      iconName: w,
                      extra: E,
                      watchable: !0,
                    },
                  ),
                ),
                o = U.createElement('svg');
              '::before' === t
                ? e.insertBefore(o, e.firstChild)
                : e.appendChild(o),
                (o.outerHTML = i
                  .map(function (e) {
                    return Ne(e);
                  })
                  .join('\n')),
                e.removeAttribute(n),
                r();
            })
            .catch(a);
      }
    } else r();
  });
}
function en(e) {
  return Promise.all([Zt(e, '::before'), Zt(e, '::after')]);
}
function tn(e) {
  return !(
    e.parentNode === document.head ||
    ~Y.indexOf(e.tagName.toUpperCase()) ||
    e.getAttribute('data-fa-pseudo-element') ||
    (e.parentNode && 'svg' === e.parentNode.tagName)
  );
}
function nn(e) {
  if (V)
    return new Promise(function (t, n) {
      var r = me(e.querySelectorAll('*')).filter(tn).map(en),
        a = St('searchPseudoElements');
      Mt(),
        Promise.all(r)
          .then(function () {
            a(), zt(), t();
          })
          .catch(function () {
            a(), zt(), n();
          });
    });
}
var rn = !1,
  an = function (e) {
    return e
      .toLowerCase()
      .split(' ')
      .reduce(
        function (e, t) {
          var n = t.toLowerCase().split('-'),
            r = n[0],
            a = n.slice(1).join('-');
          if (r && 'h' === a) return (e.flipX = !0), e;
          if (r && 'v' === a) return (e.flipY = !0), e;
          if (((a = parseFloat(a)), isNaN(a))) return e;
          switch (r) {
            case 'grow':
              e.size = e.size + a;
              break;
            case 'shrink':
              e.size = e.size - a;
              break;
            case 'left':
              e.x = e.x - a;
              break;
            case 'right':
              e.x = e.x + a;
              break;
            case 'up':
              e.y = e.y - a;
              break;
            case 'down':
              e.y = e.y + a;
              break;
            case 'rotate':
              e.rotate = e.rotate + a;
          }
          return e;
        },
        { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 },
      );
  },
  on = {
    mixout: function () {
      return {
        parse: {
          transform: function (e) {
            return an(e);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (e, t) {
          var n = t.getAttribute('data-fa-transform');
          return n && (e.transform = an(n)), e;
        },
      };
    },
    provides: function (e) {
      e.generateAbstractTransformGrouping = function (e) {
        var t = e.main,
          n = e.transform,
          r = e.containerWidth,
          a = e.iconWidth,
          i = { transform: 'translate('.concat(r / 2, ' 256)') },
          o = 'translate('.concat(32 * n.x, ', ').concat(32 * n.y, ') '),
          l = 'scale('
            .concat((n.size / 16) * (n.flipX ? -1 : 1), ', ')
            .concat((n.size / 16) * (n.flipY ? -1 : 1), ') '),
          s = 'rotate('.concat(n.rotate, ' 0 0)'),
          u = {
            outer: i,
            inner: { transform: ''.concat(o, ' ').concat(l, ' ').concat(s) },
            path: { transform: 'translate('.concat((a / 2) * -1, ' -256)') },
          };
        return {
          tag: 'g',
          attributes: S({}, u.outer),
          children: [
            {
              tag: 'g',
              attributes: S({}, u.inner),
              children: [
                {
                  tag: t.icon.tag,
                  children: t.icon.children,
                  attributes: S(S({}, t.icon.attributes), u.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  ln = { x: 0, y: 0, width: '100%', height: '100%' };
function sn(e) {
  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = 'black'), e
  );
}
var un,
  cn = {
    hooks: function () {
      return {
        parseNodeAttributes: function (e, t) {
          var n = t.getAttribute('data-fa-mask'),
            r = n
              ? Ze(
                  n.split(' ').map(function (e) {
                    return e.trim();
                  }),
                )
              : { prefix: null, iconName: null, rest: [] };
          return (
            r.prefix || (r.prefix = Ke()),
            (e.mask = r),
            (e.maskId = t.getAttribute('data-fa-mask-id')),
            e
          );
        },
      };
    },
    provides: function (e) {
      e.generateAbstractMask = function (e) {
        var t,
          n = e.children,
          r = e.attributes,
          a = e.main,
          i = e.mask,
          o = e.maskId,
          l = e.transform,
          s = a.width,
          u = a.icon,
          c = i.width,
          f = i.icon,
          d = (function (e) {
            var t = e.transform,
              n = e.containerWidth,
              r = e.iconWidth,
              a = { transform: 'translate('.concat(n / 2, ' 256)') },
              i = 'translate('.concat(32 * t.x, ', ').concat(32 * t.y, ') '),
              o = 'scale('
                .concat((t.size / 16) * (t.flipX ? -1 : 1), ', ')
                .concat((t.size / 16) * (t.flipY ? -1 : 1), ') '),
              l = 'rotate('.concat(t.rotate, ' 0 0)');
            return {
              outer: a,
              inner: { transform: ''.concat(i, ' ').concat(o, ' ').concat(l) },
              path: { transform: 'translate('.concat((r / 2) * -1, ' -256)') },
            };
          })({ transform: l, containerWidth: c, iconWidth: s }),
          p = { tag: 'rect', attributes: S(S({}, ln), {}, { fill: 'white' }) },
          h = u.children ? { children: u.children.map(sn) } : {},
          m = {
            tag: 'g',
            attributes: S({}, d.inner),
            children: [
              sn(
                S(
                  { tag: u.tag, attributes: S(S({}, u.attributes), d.path) },
                  h,
                ),
              ),
            ],
          },
          v = { tag: 'g', attributes: S({}, d.outer), children: [m] },
          g = 'mask-'.concat(o || he()),
          b = 'clip-'.concat(o || he()),
          y = {
            tag: 'mask',
            attributes: S(
              S({}, ln),
              {},
              {
                id: g,
                maskUnits: 'userSpaceOnUse',
                maskContentUnits: 'userSpaceOnUse',
              },
            ),
            children: [p, v],
          },
          w = {
            tag: 'defs',
            children: [
              {
                tag: 'clipPath',
                attributes: { id: b },
                children: ((t = f), 'g' === t.tag ? t.children : [t]),
              },
              y,
            ],
          };
        return (
          n.push(w, {
            tag: 'rect',
            attributes: S(
              {
                fill: 'currentColor',
                'clip-path': 'url(#'.concat(b, ')'),
                mask: 'url(#'.concat(g, ')'),
              },
              ln,
            ),
          }),
          { children: n, attributes: r }
        );
      };
    },
  };
(un = { mixoutsTo: ft }.mixoutsTo),
  (tt = [
    Ee,
    $t,
    Qt,
    Gt,
    qt,
    {
      hooks: function () {
        return {
          mutationObserverCallbacks: function (e) {
            return (e.pseudoElementsCallback = nn), e;
          },
        };
      },
      provides: function (e) {
        e.pseudoElements2svg = function (e) {
          var t = e.node,
            n = void 0 === t ? U : t;
          ce.searchPseudoElements && nn(n);
        };
      },
    },
    {
      mixout: function () {
        return {
          dom: {
            unwatch: function () {
              Mt(), (rn = !0);
            },
          },
        };
      },
      hooks: function () {
        return {
          bootstrap: function () {
            Rt(it('mutationObserverCallbacks', {}));
          },
          noAuto: function () {
            jt && jt.disconnect();
          },
          watch: function (e) {
            var t = e.observeMutationsRoot;
            rn
              ? zt()
              : Rt(
                  it('mutationObserverCallbacks', { observeMutationsRoot: t }),
                );
          },
        };
      },
    },
    on,
    cn,
    {
      provides: function (e) {
        var t = !1;
        F.matchMedia &&
          (t = F.matchMedia('(prefers-reduced-motion: reduce)').matches),
          (e.missingIconAbstract = function () {
            var e = [],
              n = { fill: 'currentColor' },
              r = {
                attributeType: 'XML',
                repeatCount: 'indefinite',
                dur: '2s',
              };
            e.push({
              tag: 'path',
              attributes: S(
                S({}, n),
                {},
                {
                  d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
                },
              ),
            });
            var a = S(S({}, r), {}, { attributeName: 'opacity' }),
              i = {
                tag: 'circle',
                attributes: S(S({}, n), {}, { cx: '256', cy: '364', r: '28' }),
                children: [],
              };
            return (
              t ||
                i.children.push(
                  {
                    tag: 'animate',
                    attributes: S(
                      S({}, r),
                      {},
                      { attributeName: 'r', values: '28;14;28;28;14;28;' },
                    ),
                  },
                  {
                    tag: 'animate',
                    attributes: S(S({}, a), {}, { values: '1;0;1;1;0;1;' }),
                  },
                ),
              e.push(i),
              e.push({
                tag: 'path',
                attributes: S(
                  S({}, n),
                  {},
                  {
                    opacity: '1',
                    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                  },
                ),
                children: t
                  ? []
                  : [
                      {
                        tag: 'animate',
                        attributes: S(S({}, a), {}, { values: '1;0;0;0;0;1;' }),
                      },
                    ],
              }),
              t ||
                e.push({
                  tag: 'path',
                  attributes: S(
                    S({}, n),
                    {},
                    {
                      opacity: '0',
                      d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                    },
                  ),
                  children: [
                    {
                      tag: 'animate',
                      attributes: S(S({}, a), {}, { values: '0;0;1;1;0;0;' }),
                    },
                  ],
                }),
              { tag: 'g', attributes: { class: 'missing' }, children: e }
            );
          });
      },
    },
    {
      hooks: function () {
        return {
          parseNodeAttributes: function (e, t) {
            var n = t.getAttribute('data-fa-symbol'),
              r = null !== n && ('' === n || n);
            return (e.symbol = r), e;
          },
        };
      },
    },
  ]),
  (nt = {}),
  Object.keys(rt).forEach(function (e) {
    -1 === at.indexOf(e) && delete rt[e];
  }),
  tt.forEach(function (e) {
    var t = e.mixout ? e.mixout() : {};
    if (
      (Object.keys(t).forEach(function (e) {
        'function' == typeof t[e] && (un[e] = t[e]),
          'object' === O(t[e]) &&
            Object.keys(t[e]).forEach(function (n) {
              un[e] || (un[e] = {}), (un[e][n] = t[e][n]);
            });
      }),
      e.hooks)
    ) {
      var n = e.hooks();
      Object.keys(n).forEach(function (e) {
        nt[e] || (nt[e] = []), nt[e].push(n[e]);
      });
    }
    e.provides && e.provides(rt);
  });
var fn = ft.parse,
  dn = ft.icon,
  pn = { exports: {} };
function hn() {}
function mn() {}
mn.resetWarningCache = hn;
pn.exports = (function () {
  function e(e, t, n, r, a, i) {
    if ('SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED' !== i) {
      var o = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      );
      throw ((o.name = 'Invariant Violation'), o);
    }
  }
  function t() {
    return e;
  }
  e.isRequired = e;
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: mn,
    resetWarningCache: hn,
  };
  return (n.PropTypes = n), n;
})();
var vn = pn.exports;
function gn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? gn(Object(n), !0).forEach(function (t) {
          wn(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : gn(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function yn(e) {
  return (yn =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
}
function wn(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function xn(e, t) {
  if (null == e) return {};
  var n,
    r,
    a = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      (n = i[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
  }
  return a;
}
function kn(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return En(e);
    })(e) ||
    (function (e) {
      if (
        ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e['@@iterator']
      )
        return Array.from(e);
    })(e) ||
    (function (e, t) {
      if (!e) return;
      if ('string' == typeof e) return En(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      'Object' === n && e.constructor && (n = e.constructor.name);
      if ('Map' === n || 'Set' === n) return Array.from(e);
      if (
        'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return En(e, t);
    })(e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function En(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Sn(e) {
  return (function (e) {
    return (e -= 0) == e;
  })(e)
    ? e
    : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
        return t ? t.toUpperCase() : '';
      }))
        .substr(0, 1)
        .toLowerCase() + e.substr(1);
}
var On = ['style'];
function _n(e) {
  return e
    .split(';')
    .map(function (e) {
      return e.trim();
    })
    .filter(function (e) {
      return e;
    })
    .reduce(function (e, t) {
      var n,
        r = t.indexOf(':'),
        a = Sn(t.slice(0, r)),
        i = t.slice(r + 1).trim();
      return (
        a.startsWith('webkit')
          ? (e[((n = a), n.charAt(0).toUpperCase() + n.slice(1))] = i)
          : (e[a] = i),
        e
      );
    }, {});
}
var Cn = !1;
try {
  Cn = !0;
} catch (vg) {}
function Pn(e) {
  return e && 'object' === yn(e) && e.prefix && e.iconName && e.icon
    ? e
    : fn.icon
    ? fn.icon(e)
    : null === e
    ? null
    : e && 'object' === yn(e) && e.prefix && e.iconName
    ? e
    : Array.isArray(e) && 2 === e.length
    ? { prefix: e[0], iconName: e[1] }
    : 'string' == typeof e
    ? { prefix: 'fas', iconName: e }
    : void 0;
}
function Nn(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? wn({}, e, t)
    : {};
}
var Tn = ['forwardedRef'];
function Dn(e) {
  var t = e.forwardedRef,
    n = xn(e, Tn),
    r = n.icon,
    a = n.mask,
    i = n.symbol,
    o = n.className,
    l = n.title,
    s = n.titleId,
    u = Pn(r),
    c = Nn(
      'classes',
      [].concat(
        kn(
          (function (e) {
            var t,
              n = e.beat,
              r = e.fade,
              a = e.flash,
              i = e.spin,
              o = e.spinPulse,
              l = e.spinReverse,
              s = e.pulse,
              u = e.fixedWidth,
              c = e.inverse,
              f = e.border,
              d = e.listItem,
              p = e.flip,
              h = e.size,
              m = e.rotation,
              v = e.pull,
              g =
                (wn(
                  (t = {
                    'fa-beat': n,
                    'fa-fade': r,
                    'fa-flash': a,
                    'fa-spin': i,
                    'fa-spin-reverse': l,
                    'fa-spin-pulse': o,
                    'fa-pulse': s,
                    'fa-fw': u,
                    'fa-inverse': c,
                    'fa-border': f,
                    'fa-li': d,
                    'fa-flip-horizontal': 'horizontal' === p || 'both' === p,
                    'fa-flip-vertical': 'vertical' === p || 'both' === p,
                  }),
                  'fa-'.concat(h),
                  null != h,
                ),
                wn(t, 'fa-rotate-'.concat(m), null != m && 0 !== m),
                wn(t, 'fa-pull-'.concat(v), null != v),
                wn(t, 'fa-swap-opacity', e.swapOpacity),
                t);
            return Object.keys(g)
              .map(function (e) {
                return g[e] ? e : null;
              })
              .filter(function (e) {
                return e;
              });
          })(n),
        ),
        kn(o.split(' ')),
      ),
    ),
    f = Nn(
      'transform',
      'string' == typeof n.transform ? fn.transform(n.transform) : n.transform,
    ),
    d = Nn('mask', Pn(a)),
    p = dn(
      u,
      bn(bn(bn(bn({}, c), f), d), {}, { symbol: i, title: l, titleId: s }),
    );
  if (!p)
    return (
      (function () {
        var e;
        !Cn &&
          console &&
          'function' == typeof console.error &&
          (e = console).error.apply(e, arguments);
      })('Could not find icon', u),
      null
    );
  var h = p.abstract,
    m = { ref: t };
  return (
    Object.keys(n).forEach(function (e) {
      Dn.defaultProps.hasOwnProperty(e) || (m[e] = n[e]);
    }),
    Ln(h[0], m)
  );
}
(Dn.displayName = 'FontAwesomeIcon'),
  (Dn.propTypes = {
    beat: vn.bool,
    border: vn.bool,
    className: vn.string,
    fade: vn.bool,
    flash: vn.bool,
    mask: vn.oneOfType([vn.object, vn.array, vn.string]),
    fixedWidth: vn.bool,
    inverse: vn.bool,
    flip: vn.oneOf(['horizontal', 'vertical', 'both']),
    icon: vn.oneOfType([vn.object, vn.array, vn.string]),
    listItem: vn.bool,
    pull: vn.oneOf(['right', 'left']),
    pulse: vn.bool,
    rotation: vn.oneOf([0, 90, 180, 270]),
    size: vn.oneOf([
      '2xs',
      'xs',
      'sm',
      'lg',
      'xl',
      '2xl',
      '1x',
      '2x',
      '3x',
      '4x',
      '5x',
      '6x',
      '7x',
      '8x',
      '9x',
      '10x',
    ]),
    spin: vn.bool,
    spinPulse: vn.bool,
    spinReverse: vn.bool,
    symbol: vn.oneOfType([vn.bool, vn.string]),
    title: vn.string,
    transform: vn.oneOfType([vn.string, vn.object]),
    swapOpacity: vn.bool,
  }),
  (Dn.defaultProps = {
    border: !1,
    className: '',
    mask: null,
    fixedWidth: !1,
    inverse: !1,
    flip: null,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    symbol: !1,
    title: '',
    transform: null,
    swapOpacity: !1,
  });
var Ln = function e(t, n) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if ('string' == typeof n) return n;
  var a = (n.children || []).map(function (n) {
      return e(t, n);
    }),
    i = Object.keys(n.attributes || {}).reduce(
      function (e, t) {
        var r = n.attributes[t];
        switch (t) {
          case 'class':
            (e.attrs.className = r), delete n.attributes.class;
            break;
          case 'style':
            e.attrs.style = _n(r);
            break;
          default:
            0 === t.indexOf('aria-') || 0 === t.indexOf('data-')
              ? (e.attrs[t.toLowerCase()] = r)
              : (e.attrs[Sn(t)] = r);
        }
        return e;
      },
      { attrs: {} },
    ),
    o = r.style,
    l = void 0 === o ? {} : o,
    s = xn(r, On);
  return (
    (i.attrs.style = bn(bn({}, i.attrs.style), l)),
    t.apply(void 0, [n.tag, bn(bn({}, i.attrs), s)].concat(kn(a)))
  );
}.bind(null, e.createElement);
const An = new Set(['children', 'localName', 'ref', 'style', 'className']),
  Mn = new WeakMap(),
  zn = (e, t, n, r, a) => {
    const i = null == a ? void 0 : a[t];
    void 0 !== i
      ? n !== r &&
        ((e, t, n) => {
          let r = Mn.get(e);
          void 0 === r && Mn.set(e, (r = new Map()));
          let a = r.get(t);
          void 0 !== n
            ? void 0 === a
              ? (r.set(t, (a = { handleEvent: n })), e.addEventListener(t, a))
              : (a.handleEvent = n)
            : void 0 !== a && (r.delete(t), e.removeEventListener(t, a));
        })(e, i, n)
      : (e[t] = n);
  };
var jn,
  Rn = { exports: {} };
(jn = Rn),
  (function () {
    var e = {}.hasOwnProperty;
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) {
        var a = arguments[r];
        if (a) {
          var i = typeof a;
          if ('string' === i || 'number' === i) n.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var o = t.apply(null, a);
              o && n.push(o);
            }
          } else if ('object' === i)
            if (a.toString === Object.prototype.toString)
              for (var l in a) e.call(a, l) && a[l] && n.push(l);
            else n.push(a.toString());
        }
      }
      return n.join(' ');
    }
    jn.exports ? ((t.default = t), (jn.exports = t)) : (window.classNames = t);
  })();
var In = Rn.exports;
function Fn(e, t) {
  return (Fn =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
var Un = { exports: {} },
  Hn = {},
  Wn = Object.getOwnPropertySymbols,
  Vn = Object.prototype.hasOwnProperty,
  Bn = Object.prototype.propertyIsEnumerable;
function Yn(e) {
  if (null == e)
    throw new TypeError(
      'Object.assign cannot be called with null or undefined',
    );
  return Object(e);
}
var Xn = (function () {
    try {
      if (!Object.assign) return !1;
      var e = new String('abc');
      if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
      for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
      if (
        '0123456789' !==
        Object.getOwnPropertyNames(t)
          .map(function (e) {
            return t[e];
          })
          .join('')
      )
        return !1;
      var r = {};
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function (e) {
          r[e] = e;
        }),
        'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
      );
    } catch (a) {
      return !1;
    }
  })()
    ? Object.assign
    : function (e, t) {
        for (var n, r, a = Yn(e), i = 1; i < arguments.length; i++) {
          for (var o in (n = Object(arguments[i])))
            Vn.call(n, o) && (a[o] = n[o]);
          if (Wn) {
            r = Wn(n);
            for (var l = 0; l < r.length; l++)
              Bn.call(n, r[l]) && (a[r[l]] = n[r[l]]);
          }
        }
        return a;
      },
  $n = e,
  Qn = 60103;
if (((Hn.Fragment = 60107), 'function' == typeof Symbol && Symbol.for)) {
  var Gn = Symbol.for;
  (Qn = Gn('react.element')), (Hn.Fragment = Gn('react.fragment'));
}
var qn =
    $n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Kn = Object.prototype.hasOwnProperty,
  Jn = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zn(e, t, n) {
  var r,
    a = {},
    i = null,
    o = null;
  for (r in (void 0 !== n && (i = '' + n),
  void 0 !== t.key && (i = '' + t.key),
  void 0 !== t.ref && (o = t.ref),
  t))
    Kn.call(t, r) && !Jn.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps)
    for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
  return {
    $$typeof: Qn,
    type: e,
    key: i,
    ref: o,
    props: a,
    _owner: qn.current,
  };
}
(Hn.jsx = Zn), (Hn.jsxs = Zn), (Un.exports = Hn);
const er = r.exports.createContext({ prefixes: {} });
function tr(e, t) {
  const { prefixes: n } = r.exports.useContext(er);
  return e || n[t] || t;
}
function nr() {
  const { dir: e } = r.exports.useContext(er);
  return 'rtl' === e;
}
function rr(e) {
  return (e && e.ownerDocument) || document;
}
function ar(e, t) {
  return (function (e) {
    var t = rr(e);
    return (t && t.defaultView) || window;
  })(e).getComputedStyle(e, t);
}
var ir = /([A-Z])/g;
var or = /^ms-/;
function lr(e) {
  return (function (e) {
    return e.replace(ir, '-$1').toLowerCase();
  })(e).replace(or, '-ms-');
}
var sr =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function ur(e, t) {
  var n = '',
    r = '';
  if ('string' == typeof t)
    return e.style.getPropertyValue(lr(t)) || ar(e).getPropertyValue(lr(t));
  Object.keys(t).forEach(function (a) {
    var i = t[a];
    i || 0 === i
      ? !(function (e) {
          return !(!e || !sr.test(e));
        })(a)
        ? (n += lr(a) + ': ' + i + ';')
        : (r += a + '(' + i + ') ')
      : e.style.removeProperty(lr(a));
  }),
    r && (n += 'transform: ' + r + ';'),
    (e.style.cssText += ';' + n);
}
var cr = { exports: {} },
  fr = {},
  dr = { exports: {} },
  pr = {};
!(function (e) {
  var t, n, r, a;
  if ('object' == typeof performance && 'function' == typeof performance.now) {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  if ('undefined' == typeof window || 'function' != typeof MessageChannel) {
    var s = null,
      u = null,
      c = function () {
        if (null !== s)
          try {
            var t = e.unstable_now();
            s(!0, t), (s = null);
          } catch (n) {
            throw (setTimeout(c, 0), n);
          }
      };
    (t = function (e) {
      null !== s ? setTimeout(t, 0, e) : ((s = e), setTimeout(c, 0));
    }),
      (n = function (e, t) {
        u = setTimeout(e, t);
      }),
      (r = function () {
        clearTimeout(u);
      }),
      (e.unstable_shouldYield = function () {
        return !1;
      }),
      (a = e.unstable_forceFrameRate = function () {});
  } else {
    var f = window.setTimeout,
      d = window.clearTimeout;
    if ('undefined' != typeof console) {
      var p = window.cancelAnimationFrame;
      'function' != typeof window.requestAnimationFrame &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
        ),
        'function' != typeof p &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
          );
    }
    var h = !1,
      m = null,
      v = -1,
      g = 5,
      b = 0;
    (e.unstable_shouldYield = function () {
      return e.unstable_now() >= b;
    }),
      (a = function () {}),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
            )
          : (g = 0 < e ? Math.floor(1e3 / e) : 5);
      });
    var y = new MessageChannel(),
      w = y.port2;
    (y.port1.onmessage = function () {
      if (null !== m) {
        var t = e.unstable_now();
        b = t + g;
        try {
          m(!0, t) ? w.postMessage(null) : ((h = !1), (m = null));
        } catch (n) {
          throw (w.postMessage(null), n);
        }
      } else h = !1;
    }),
      (t = function (e) {
        (m = e), h || ((h = !0), w.postMessage(null));
      }),
      (n = function (t, n) {
        v = f(function () {
          t(e.unstable_now());
        }, n);
      }),
      (r = function () {
        d(v), (v = -1);
      });
  }
  function x(e, t) {
    var n = e.length;
    e.push(t);
    e: for (;;) {
      var r = (n - 1) >>> 1,
        a = e[r];
      if (!(void 0 !== a && 0 < S(a, t))) break e;
      (e[r] = t), (e[n] = a), (n = r);
    }
  }
  function k(e) {
    return void 0 === (e = e[0]) ? null : e;
  }
  function E(e) {
    var t = e[0];
    if (void 0 !== t) {
      var n = e.pop();
      if (n !== t) {
        e[0] = n;
        e: for (var r = 0, a = e.length; r < a; ) {
          var i = 2 * (r + 1) - 1,
            o = e[i],
            l = i + 1,
            s = e[l];
          if (void 0 !== o && 0 > S(o, n))
            void 0 !== s && 0 > S(s, o)
              ? ((e[r] = s), (e[l] = n), (r = l))
              : ((e[r] = o), (e[i] = n), (r = i));
          else {
            if (!(void 0 !== s && 0 > S(s, n))) break e;
            (e[r] = s), (e[l] = n), (r = l);
          }
        }
      }
      return t;
    }
    return null;
  }
  function S(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
  }
  var O = [],
    _ = [],
    C = 1,
    P = null,
    N = 3,
    T = !1,
    D = !1,
    L = !1;
  function A(e) {
    for (var t = k(_); null !== t; ) {
      if (null === t.callback) E(_);
      else {
        if (!(t.startTime <= e)) break;
        E(_), (t.sortIndex = t.expirationTime), x(O, t);
      }
      t = k(_);
    }
  }
  function M(e) {
    if (((L = !1), A(e), !D))
      if (null !== k(O)) (D = !0), t(z);
      else {
        var r = k(_);
        null !== r && n(M, r.startTime - e);
      }
  }
  function z(t, a) {
    (D = !1), L && ((L = !1), r()), (T = !0);
    var i = N;
    try {
      for (
        A(a), P = k(O);
        null !== P &&
        (!(P.expirationTime > a) || (t && !e.unstable_shouldYield()));

      ) {
        var o = P.callback;
        if ('function' == typeof o) {
          (P.callback = null), (N = P.priorityLevel);
          var l = o(P.expirationTime <= a);
          (a = e.unstable_now()),
            'function' == typeof l ? (P.callback = l) : P === k(O) && E(O),
            A(a);
        } else E(O);
        P = k(O);
      }
      if (null !== P) var s = !0;
      else {
        var u = k(_);
        null !== u && n(M, u.startTime - a), (s = !1);
      }
      return s;
    } finally {
      (P = null), (N = i), (T = !1);
    }
  }
  var j = a;
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (e) {
      e.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      D || T || ((D = !0), t(z));
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return N;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return k(O);
    }),
    (e.unstable_next = function (e) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = N;
      }
      var n = N;
      N = t;
      try {
        return e();
      } finally {
        N = n;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = j),
    (e.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var n = N;
      N = e;
      try {
        return t();
      } finally {
        N = n;
      }
    }),
    (e.unstable_scheduleCallback = function (a, i, o) {
      var l = e.unstable_now();
      switch (
        ('object' == typeof o && null !== o
          ? (o = 'number' == typeof (o = o.delay) && 0 < o ? l + o : l)
          : (o = l),
        a)
      ) {
        case 1:
          var s = -1;
          break;
        case 2:
          s = 250;
          break;
        case 5:
          s = 1073741823;
          break;
        case 4:
          s = 1e4;
          break;
        default:
          s = 5e3;
      }
      return (
        (a = {
          id: C++,
          callback: i,
          priorityLevel: a,
          startTime: o,
          expirationTime: (s = o + s),
          sortIndex: -1,
        }),
        o > l
          ? ((a.sortIndex = o),
            x(_, a),
            null === k(O) && a === k(_) && (L ? r() : (L = !0), n(M, o - l)))
          : ((a.sortIndex = s), x(O, a), D || T || ((D = !0), t(z))),
        a
      );
    }),
    (e.unstable_wrapCallback = function (e) {
      var t = N;
      return function () {
        var n = N;
        N = t;
        try {
          return e.apply(this, arguments);
        } finally {
          N = n;
        }
      };
    });
})(pr),
  (dr.exports = pr);
var hr = e,
  mr = Xn,
  vr = dr.exports;
function gr(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
if (!hr) throw Error(gr(227));
var br = new Set(),
  yr = {};
function wr(e, t) {
  xr(e, t), xr(e + 'Capture', t);
}
function xr(e, t) {
  for (yr[e] = t, e = 0; e < t.length; e++) br.add(t[e]);
}
var kr = !(
    'undefined' == typeof window ||
    void 0 === window.document ||
    void 0 === window.document.createElement
  ),
  Er =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Sr = Object.prototype.hasOwnProperty,
  Or = {},
  _r = {};
function Cr(e, t, n, r, a, i, o) {
  (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
    (this.attributeName = r),
    (this.attributeNamespace = a),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Pr = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Pr[e] = new Cr(e, 0, !1, e, null, !1, !1);
  }),
  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(function (e) {
    var t = e[0];
    Pr[t] = new Cr(t, 1, !1, e[1], null, !1, !1);
  }),
  ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    Pr[e] = new Cr(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }),
  [
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
  ].forEach(function (e) {
    Pr[e] = new Cr(e, 2, !1, e, null, !1, !1);
  }),
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
      Pr[e] = new Cr(e, 3, !1, e.toLowerCase(), null, !1, !1);
    }),
  ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    Pr[e] = new Cr(e, 3, !0, e, null, !1, !1);
  }),
  ['capture', 'download'].forEach(function (e) {
    Pr[e] = new Cr(e, 4, !1, e, null, !1, !1);
  }),
  ['cols', 'rows', 'size', 'span'].forEach(function (e) {
    Pr[e] = new Cr(e, 6, !1, e, null, !1, !1);
  }),
  ['rowSpan', 'start'].forEach(function (e) {
    Pr[e] = new Cr(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
var Nr = /[\-:]([a-z])/g;
function Tr(e) {
  return e[1].toUpperCase();
}
function Dr(e, t, n, r) {
  var a = Pr.hasOwnProperty(t) ? Pr[t] : null;
  (null !== a
    ? 0 === a.type
    : !r &&
      2 < t.length &&
      ('o' === t[0] || 'O' === t[0]) &&
      ('n' === t[1] || 'N' === t[1])) ||
    ((function (e, t, n, r) {
      if (
        null == t ||
        (function (e, t, n, r) {
          if (null !== n && 0 === n.type) return !1;
          switch (typeof t) {
            case 'function':
            case 'symbol':
              return !0;
            case 'boolean':
              return (
                !r &&
                (null !== n
                  ? !n.acceptsBooleans
                  : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                    'aria-' !== e)
              );
            default:
              return !1;
          }
        })(e, t, n, r)
      )
        return !0;
      if (r) return !1;
      if (null !== n)
        switch (n.type) {
          case 3:
            return !t;
          case 4:
            return !1 === t;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    })(t, n, a, r) && (n = null),
    r || null === a
      ? (function (e) {
          return (
            !!Sr.call(_r, e) ||
            (!Sr.call(Or, e) &&
              (Er.test(e) ? (_r[e] = !0) : ((Or[e] = !0), !1)))
          );
        })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : a.mustUseProperty
      ? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
      : ((t = a.attributeName),
        (r = a.attributeNamespace),
        null === n
          ? e.removeAttribute(t)
          : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Nr, Tr);
    Pr[t] = new Cr(t, 1, !1, e, null, !1, !1);
  }),
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(Nr, Tr);
      Pr[t] = new Cr(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(Nr, Tr);
    Pr[t] = new Cr(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
  }),
  ['tabIndex', 'crossOrigin'].forEach(function (e) {
    Pr[e] = new Cr(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }),
  (Pr.xlinkHref = new Cr(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1,
  )),
  ['src', 'href', 'action', 'formAction'].forEach(function (e) {
    Pr[e] = new Cr(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
var Lr = hr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ar = 60103,
  Mr = 60106,
  zr = 60107,
  jr = 60108,
  Rr = 60114,
  Ir = 60109,
  Fr = 60110,
  Ur = 60112,
  Hr = 60113,
  Wr = 60120,
  Vr = 60115,
  Br = 60116,
  Yr = 60121,
  Xr = 60128,
  $r = 60129,
  Qr = 60130,
  Gr = 60131;
if ('function' == typeof Symbol && Symbol.for) {
  var qr = Symbol.for;
  (Ar = qr('react.element')),
    (Mr = qr('react.portal')),
    (zr = qr('react.fragment')),
    (jr = qr('react.strict_mode')),
    (Rr = qr('react.profiler')),
    (Ir = qr('react.provider')),
    (Fr = qr('react.context')),
    (Ur = qr('react.forward_ref')),
    (Hr = qr('react.suspense')),
    (Wr = qr('react.suspense_list')),
    (Vr = qr('react.memo')),
    (Br = qr('react.lazy')),
    (Yr = qr('react.block')),
    qr('react.scope'),
    (Xr = qr('react.opaque.id')),
    ($r = qr('react.debug_trace_mode')),
    (Qr = qr('react.offscreen')),
    (Gr = qr('react.legacy_hidden'));
}
var Kr,
  Jr = 'function' == typeof Symbol && Symbol.iterator;
function Zr(e) {
  return null === e || 'object' != typeof e
    ? null
    : 'function' == typeof (e = (Jr && e[Jr]) || e['@@iterator'])
    ? e
    : null;
}
function ea(e) {
  if (void 0 === Kr)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Kr = (t && t[1]) || '';
    }
  return '\n' + Kr + e;
}
var ta = !1;
function na(e, t) {
  if (!e || ta) return '';
  ta = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        'object' == typeof Reflect && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && 'string' == typeof s.stack) {
      for (
        var a = s.stack.split('\n'),
          i = r.stack.split('\n'),
          o = a.length - 1,
          l = i.length - 1;
        1 <= o && 0 <= l && a[o] !== i[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (a[o] !== i[l]) {
          if (1 !== o || 1 !== l)
            do {
              if ((o--, 0 > --l || a[o] !== i[l]))
                return '\n' + a[o].replace(' at new ', ' at ');
            } while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (ta = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? ea(e) : '';
}
function ra(e) {
  switch (e.tag) {
    case 5:
      return ea(e.type);
    case 16:
      return ea('Lazy');
    case 13:
      return ea('Suspense');
    case 19:
      return ea('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = na(e.type, !1));
    case 11:
      return (e = na(e.type.render, !1));
    case 22:
      return (e = na(e.type._render, !1));
    case 1:
      return (e = na(e.type, !0));
    default:
      return '';
  }
}
function aa(e) {
  if (null == e) return null;
  if ('function' == typeof e) return e.displayName || e.name || null;
  if ('string' == typeof e) return e;
  switch (e) {
    case zr:
      return 'Fragment';
    case Mr:
      return 'Portal';
    case Rr:
      return 'Profiler';
    case jr:
      return 'StrictMode';
    case Hr:
      return 'Suspense';
    case Wr:
      return 'SuspenseList';
  }
  if ('object' == typeof e)
    switch (e.$$typeof) {
      case Fr:
        return (e.displayName || 'Context') + '.Consumer';
      case Ir:
        return (e._context.displayName || 'Context') + '.Provider';
      case Ur:
        var t = e.render;
        return (
          (t = t.displayName || t.name || ''),
          e.displayName || ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
        );
      case Vr:
        return aa(e.type);
      case Yr:
        return aa(e._render);
      case Br:
        (t = e._payload), (e = e._init);
        try {
          return aa(e(t));
        } catch (n) {}
    }
  return null;
}
function ia(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'object':
    case 'string':
    case 'undefined':
      return e;
    default:
      return '';
  }
}
function oa(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    'input' === e.toLowerCase() &&
    ('checkbox' === t || 'radio' === t)
  );
}
function la(e) {
  e._valueTracker ||
    (e._valueTracker = (function (e) {
      var t = oa(e) ? 'checked' : 'value',
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = '' + e[t];
      if (
        !e.hasOwnProperty(t) &&
        void 0 !== n &&
        'function' == typeof n.get &&
        'function' == typeof n.set
      ) {
        var a = n.get,
          i = n.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return a.call(this);
            },
            set: function (e) {
              (r = '' + e), i.call(this, e);
            },
          }),
          Object.defineProperty(e, t, { enumerable: n.enumerable }),
          {
            getValue: function () {
              return r;
            },
            setValue: function (e) {
              r = '' + e;
            },
            stopTracking: function () {
              (e._valueTracker = null), delete e[t];
            },
          }
        );
      }
    })(e));
}
function sa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = oa(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r) !== n && (t.setValue(e), !0)
  );
}
function ua(e) {
  if (
    void 0 === (e = e || ('undefined' != typeof document ? document : void 0))
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch (t) {
    return e.body;
  }
}
function ca(e, t) {
  var n = t.checked;
  return mr({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != n ? n : e._wrapperState.initialChecked,
  });
}
function fa(e, t) {
  var n = null == t.defaultValue ? '' : t.defaultValue,
    r = null != t.checked ? t.checked : t.defaultChecked;
  (n = ia(null != t.value ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        'checkbox' === t.type || 'radio' === t.type
          ? null != t.checked
          : null != t.value,
    });
}
function da(e, t) {
  null != (t = t.checked) && Dr(e, 'checked', t, !1);
}
function pa(e, t) {
  da(e, t);
  var n = ia(t.value),
    r = t.type;
  if (null != n)
    'number' === r
      ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if ('submit' === r || 'reset' === r)
    return void e.removeAttribute('value');
  t.hasOwnProperty('value')
    ? ma(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && ma(e, t.type, ia(t.defaultValue)),
    null == t.checked &&
      null != t.defaultChecked &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ha(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        ('submit' !== r && 'reset' !== r) ||
        (void 0 !== t.value && null !== t.value)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  '' !== (n = e.name) && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    '' !== n && (e.name = n);
}
function ma(e, t, n) {
  ('number' === t && ua(e.ownerDocument) === e) ||
    (null == n
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
function va(e, t) {
  return (
    (e = mr({ children: void 0 }, t)),
    (t = (function (e) {
      var t = '';
      return (
        hr.Children.forEach(e, function (e) {
          null != e && (t += e);
        }),
        t
      );
    })(t.children)) && (e.children = t),
    e
  );
}
function ga(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
    for (n = 0; n < e.length; n++)
      (a = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== a && (e[n].selected = a),
        a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + ia(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n)
        return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
      null !== t || e[a].disabled || (t = e[a]);
    }
    null !== t && (t.selected = !0);
  }
}
function ba(e, t) {
  if (null != t.dangerouslySetInnerHTML) throw Error(gr(91));
  return mr({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function ya(e, t) {
  var n = t.value;
  if (null == n) {
    if (((n = t.children), (t = t.defaultValue), null != n)) {
      if (null != t) throw Error(gr(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(gr(93));
        n = n[0];
      }
      t = n;
    }
    null == t && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: ia(n) };
}
function wa(e, t) {
  var n = ia(t.value),
    r = ia(t.defaultValue);
  null != n &&
    ((n = '' + n) !== e.value && (e.value = n),
    null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
    null != r && (e.defaultValue = '' + r);
}
function xa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
}
var ka = 'http://www.w3.org/1999/xhtml',
  Ea = 'http://www.w3.org/2000/svg';
function Sa(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Oa(e, t) {
  return null == e || 'http://www.w3.org/1999/xhtml' === e
    ? Sa(t)
    : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var _a,
  Ca,
  Pa =
    ((Ca = function (e, t) {
      if (e.namespaceURI !== Ea || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          (_a = _a || document.createElement('div')).innerHTML =
            '<svg>' + t.valueOf().toString() + '</svg>',
            t = _a.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    }),
    'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
      ? function (e, t, n, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return Ca(e, t);
          });
        }
      : Ca);
function Na(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && 3 === n.nodeType)
      return void (n.nodeValue = t);
  }
  e.textContent = t;
}
var Ta = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Da = ['Webkit', 'ms', 'Moz', 'O'];
function La(e, t, n) {
  return null == t || 'boolean' == typeof t || '' === t
    ? ''
    : n || 'number' != typeof t || 0 === t || (Ta.hasOwnProperty(e) && Ta[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Aa(e, t) {
  for (var n in ((e = e.style), t))
    if (t.hasOwnProperty(n)) {
      var r = 0 === n.indexOf('--'),
        a = La(n, t[n], r);
      'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a);
    }
}
Object.keys(Ta).forEach(function (e) {
  Da.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ta[t] = Ta[e]);
  });
});
var Ma = mr(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function za(e, t) {
  if (t) {
    if (Ma[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
      throw Error(gr(137, e));
    if (null != t.dangerouslySetInnerHTML) {
      if (null != t.children) throw Error(gr(60));
      if (
        'object' != typeof t.dangerouslySetInnerHTML ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(gr(61));
    }
    if (null != t.style && 'object' != typeof t.style) throw Error(gr(62));
  }
}
function ja(e, t) {
  if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
function Ra(e) {
  return (
    (e = e.target || e.srcElement || window).correspondingUseElement &&
      (e = e.correspondingUseElement),
    3 === e.nodeType ? e.parentNode : e
  );
}
var Ia = null,
  Fa = null,
  Ua = null;
function Ha(e) {
  if ((e = hs(e))) {
    if ('function' != typeof Ia) throw Error(gr(280));
    var t = e.stateNode;
    t && ((t = vs(t)), Ia(e.stateNode, e.type, t));
  }
}
function Wa(e) {
  Fa ? (Ua ? Ua.push(e) : (Ua = [e])) : (Fa = e);
}
function Va() {
  if (Fa) {
    var e = Fa,
      t = Ua;
    if (((Ua = Fa = null), Ha(e), t)) for (e = 0; e < t.length; e++) Ha(t[e]);
  }
}
function Ba(e, t) {
  return e(t);
}
function Ya(e, t, n, r, a) {
  return e(t, n, r, a);
}
function Xa() {}
var $a = Ba,
  Qa = !1,
  Ga = !1;
function qa() {
  (null === Fa && null === Ua) || (Xa(), Va());
}
function Ka(e, t) {
  var n = e.stateNode;
  if (null === n) return null;
  var r = vs(n);
  if (null === r) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        (r = !(
          'button' === (e = e.type) ||
          'input' === e ||
          'select' === e ||
          'textarea' === e
        )),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && 'function' != typeof n) throw Error(gr(231, t, typeof n));
  return n;
}
var Ja = !1;
if (kr)
  try {
    var Za = {};
    Object.defineProperty(Za, 'passive', {
      get: function () {
        Ja = !0;
      },
    }),
      window.addEventListener('test', Za, Za),
      window.removeEventListener('test', Za, Za);
  } catch (Ca) {
    Ja = !1;
  }
function ei(e, t, n, r, a, i, o, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (fg) {
    this.onError(fg);
  }
}
var ti = !1,
  ni = null,
  ri = !1,
  ai = null,
  ii = {
    onError: function (e) {
      (ti = !0), (ni = e);
    },
  };
function oi(e, t, n, r, a, i, o, l, s) {
  (ti = !1), (ni = null), ei.apply(ii, arguments);
}
function li(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do {
      0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return);
    } while (e);
  }
  return 3 === t.tag ? n : null;
}
function si(e) {
  if (13 === e.tag) {
    var t = e.memoizedState;
    if (
      (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
      null !== t)
    )
      return t.dehydrated;
  }
  return null;
}
function ui(e) {
  if (li(e) !== e) throw Error(gr(188));
}
function ci(e) {
  if (
    ((e = (function (e) {
      var t = e.alternate;
      if (!t) {
        if (null === (t = li(e))) throw Error(gr(188));
        return t !== e ? null : e;
      }
      for (var n = e, r = t; ; ) {
        var a = n.return;
        if (null === a) break;
        var i = a.alternate;
        if (null === i) {
          if (null !== (r = a.return)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === i.child) {
          for (i = a.child; i; ) {
            if (i === n) return ui(a), e;
            if (i === r) return ui(a), t;
            i = i.sibling;
          }
          throw Error(gr(188));
        }
        if (n.return !== r.return) (n = a), (r = i);
        else {
          for (var o = !1, l = a.child; l; ) {
            if (l === n) {
              (o = !0), (n = a), (r = i);
              break;
            }
            if (l === r) {
              (o = !0), (r = a), (n = i);
              break;
            }
            l = l.sibling;
          }
          if (!o) {
            for (l = i.child; l; ) {
              if (l === n) {
                (o = !0), (n = i), (r = a);
                break;
              }
              if (l === r) {
                (o = !0), (r = i), (n = a);
                break;
              }
              l = l.sibling;
            }
            if (!o) throw Error(gr(189));
          }
        }
        if (n.alternate !== r) throw Error(gr(190));
      }
      if (3 !== n.tag) throw Error(gr(188));
      return n.stateNode.current === n ? e : t;
    })(e)),
    !e)
  )
    return null;
  for (var t = e; ; ) {
    if (5 === t.tag || 6 === t.tag) return t;
    if (t.child) (t.child.return = t), (t = t.child);
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return null;
}
function fi(e, t) {
  for (var n = e.alternate; null !== t; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var di,
  pi,
  hi,
  mi,
  vi = !1,
  gi = [],
  bi = null,
  yi = null,
  wi = null,
  xi = new Map(),
  ki = new Map(),
  Ei = [],
  Si =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Oi(e, t, n, r, a) {
  return {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: 16 | n,
    nativeEvent: a,
    targetContainers: [r],
  };
}
function _i(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      bi = null;
      break;
    case 'dragenter':
    case 'dragleave':
      yi = null;
      break;
    case 'mouseover':
    case 'mouseout':
      wi = null;
      break;
    case 'pointerover':
    case 'pointerout':
      xi.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      ki.delete(t.pointerId);
  }
}
function Ci(e, t, n, r, a, i) {
  return null === e || e.nativeEvent !== i
    ? ((e = Oi(t, n, r, a, i)), null !== t && null !== (t = hs(t)) && pi(t), e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      null !== a && -1 === t.indexOf(a) && t.push(a),
      e);
}
function Pi(e) {
  var t = ps(e.target);
  if (null !== t) {
    var n = li(t);
    if (null !== n)
      if (13 === (t = n.tag)) {
        if (null !== (t = si(n)))
          return (
            (e.blockedOn = t),
            void mi(e.lanePriority, function () {
              vr.unstable_runWithPriority(e.priority, function () {
                hi(n);
              });
            })
          );
      } else if (3 === t && n.stateNode.hydrate)
        return void (e.blockedOn =
          3 === n.tag ? n.stateNode.containerInfo : null);
  }
  e.blockedOn = null;
}
function Ni(e) {
  if (null !== e.blockedOn) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = co(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (null !== n) return null !== (t = hs(n)) && pi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ti(e, t, n) {
  Ni(e) && n.delete(t);
}
function Di() {
  for (vi = !1; 0 < gi.length; ) {
    var e = gi[0];
    if (null !== e.blockedOn) {
      null !== (e = hs(e.blockedOn)) && di(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = co(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (null !== n) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    null === e.blockedOn && gi.shift();
  }
  null !== bi && Ni(bi) && (bi = null),
    null !== yi && Ni(yi) && (yi = null),
    null !== wi && Ni(wi) && (wi = null),
    xi.forEach(Ti),
    ki.forEach(Ti);
}
function Li(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    vi ||
      ((vi = !0),
      vr.unstable_scheduleCallback(vr.unstable_NormalPriority, Di)));
}
function Ai(e) {
  function t(t) {
    return Li(t, e);
  }
  if (0 < gi.length) {
    Li(gi[0], e);
    for (var n = 1; n < gi.length; n++) {
      var r = gi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    null !== bi && Li(bi, e),
      null !== yi && Li(yi, e),
      null !== wi && Li(wi, e),
      xi.forEach(t),
      ki.forEach(t),
      n = 0;
    n < Ei.length;
    n++
  )
    (r = Ei[n]).blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ei.length && null === (n = Ei[0]).blockedOn; )
    Pi(n), null === n.blockedOn && Ei.shift();
}
function Mi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var zi = {
    animationend: Mi('Animation', 'AnimationEnd'),
    animationiteration: Mi('Animation', 'AnimationIteration'),
    animationstart: Mi('Animation', 'AnimationStart'),
    transitionend: Mi('Transition', 'TransitionEnd'),
  },
  ji = {},
  Ri = {};
function Ii(e) {
  if (ji[e]) return ji[e];
  if (!zi[e]) return e;
  var t,
    n = zi[e];
  for (t in n) if (n.hasOwnProperty(t) && t in Ri) return (ji[e] = n[t]);
  return e;
}
kr &&
  ((Ri = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete zi.animationend.animation,
    delete zi.animationiteration.animation,
    delete zi.animationstart.animation),
  'TransitionEvent' in window || delete zi.transitionend.transition);
var Fi = Ii('animationend'),
  Ui = Ii('animationiteration'),
  Hi = Ii('animationstart'),
  Wi = Ii('transitionend'),
  Vi = new Map(),
  Bi = new Map(),
  Yi = [
    'abort',
    'abort',
    Fi,
    'animationEnd',
    Ui,
    'animationIteration',
    Hi,
    'animationStart',
    'canplay',
    'canPlay',
    'canplaythrough',
    'canPlayThrough',
    'durationchange',
    'durationChange',
    'emptied',
    'emptied',
    'encrypted',
    'encrypted',
    'ended',
    'ended',
    'error',
    'error',
    'gotpointercapture',
    'gotPointerCapture',
    'load',
    'load',
    'loadeddata',
    'loadedData',
    'loadedmetadata',
    'loadedMetadata',
    'loadstart',
    'loadStart',
    'lostpointercapture',
    'lostPointerCapture',
    'playing',
    'playing',
    'progress',
    'progress',
    'seeking',
    'seeking',
    'stalled',
    'stalled',
    'suspend',
    'suspend',
    'timeupdate',
    'timeUpdate',
    Wi,
    'transitionEnd',
    'waiting',
    'waiting',
  ];
function Xi(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n],
      a = e[n + 1];
    (a = 'on' + (a[0].toUpperCase() + a.slice(1))),
      Bi.set(r, t),
      Vi.set(r, a),
      wr(a, [r]);
  }
}
(0, vr.unstable_now)();
var $i = 8;
function Qi(e) {
  if (0 != (1 & e)) return ($i = 15), 1;
  if (0 != (2 & e)) return ($i = 14), 2;
  if (0 != (4 & e)) return ($i = 13), 4;
  var t = 24 & e;
  return 0 !== t
    ? (($i = 12), t)
    : 0 != (32 & e)
    ? (($i = 11), 32)
    : 0 !== (t = 192 & e)
    ? (($i = 10), t)
    : 0 != (256 & e)
    ? (($i = 9), 256)
    : 0 !== (t = 3584 & e)
    ? (($i = 8), t)
    : 0 != (4096 & e)
    ? (($i = 7), 4096)
    : 0 !== (t = 4186112 & e)
    ? (($i = 6), t)
    : 0 !== (t = 62914560 & e)
    ? (($i = 5), t)
    : 67108864 & e
    ? (($i = 4), 67108864)
    : 0 != (134217728 & e)
    ? (($i = 3), 134217728)
    : 0 !== (t = 805306368 & e)
    ? (($i = 2), t)
    : 0 != (1073741824 & e)
    ? (($i = 1), 1073741824)
    : (($i = 8), e);
}
function Gi(e, t) {
  var n = e.pendingLanes;
  if (0 === n) return ($i = 0);
  var r = 0,
    a = 0,
    i = e.expiredLanes,
    o = e.suspendedLanes,
    l = e.pingedLanes;
  if (0 !== i) (r = i), (a = $i = 15);
  else if (0 !== (i = 134217727 & n)) {
    var s = i & ~o;
    0 !== s
      ? ((r = Qi(s)), (a = $i))
      : 0 !== (l &= i) && ((r = Qi(l)), (a = $i));
  } else
    0 !== (i = n & ~o)
      ? ((r = Qi(i)), (a = $i))
      : 0 !== l && ((r = Qi(l)), (a = $i));
  if (0 === r) return 0;
  if (
    ((r = n & (((0 > (r = 31 - to(r)) ? 0 : 1 << r) << 1) - 1)),
    0 !== t && t !== r && 0 == (t & o))
  ) {
    if ((Qi(t), a <= $i)) return t;
    $i = a;
  }
  if (0 !== (t = e.entangledLanes))
    for (e = e.entanglements, t &= r; 0 < t; )
      (a = 1 << (n = 31 - to(t))), (r |= e[n]), (t &= ~a);
  return r;
}
function qi(e) {
  return 0 !== (e = -1073741825 & e.pendingLanes)
    ? e
    : 1073741824 & e
    ? 1073741824
    : 0;
}
function Ki(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return 0 === (e = Ji(24 & ~t)) ? Ki(10, t) : e;
    case 10:
      return 0 === (e = Ji(192 & ~t)) ? Ki(8, t) : e;
    case 8:
      return (
        0 === (e = Ji(3584 & ~t)) && 0 === (e = Ji(4186112 & ~t)) && (e = 512),
        e
      );
    case 2:
      return 0 === (t = Ji(805306368 & ~t)) && (t = 268435456), t;
  }
  throw Error(gr(358, e));
}
function Ji(e) {
  return e & -e;
}
function Zi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function eo(e, t, n) {
  e.pendingLanes |= t;
  var r = t - 1;
  (e.suspendedLanes &= r),
    (e.pingedLanes &= r),
    ((e = e.eventTimes)[(t = 31 - to(t))] = n);
}
var to = Math.clz32
    ? Math.clz32
    : function (e) {
        return 0 === e ? 32 : (31 - ((no(e) / ro) | 0)) | 0;
      },
  no = Math.log,
  ro = Math.LN2;
var ao = vr.unstable_UserBlockingPriority,
  io = vr.unstable_runWithPriority,
  oo = !0;
function lo(e, t, n, r) {
  Qa || Xa();
  var a = uo,
    i = Qa;
  Qa = !0;
  try {
    Ya(a, e, t, n, r);
  } finally {
    (Qa = i) || qa();
  }
}
function so(e, t, n, r) {
  io(ao, uo.bind(null, e, t, n, r));
}
function uo(e, t, n, r) {
  var a;
  if (oo)
    if ((a = 0 == (4 & t)) && 0 < gi.length && -1 < Si.indexOf(e))
      (e = Oi(null, e, t, n, r)), gi.push(e);
    else {
      var i = co(e, t, n, r);
      if (null === i) a && _i(e, r);
      else {
        if (a) {
          if (-1 < Si.indexOf(e))
            return (e = Oi(i, e, t, n, r)), void gi.push(e);
          if (
            (function (e, t, n, r, a) {
              switch (t) {
                case 'focusin':
                  return (bi = Ci(bi, e, t, n, r, a)), !0;
                case 'dragenter':
                  return (yi = Ci(yi, e, t, n, r, a)), !0;
                case 'mouseover':
                  return (wi = Ci(wi, e, t, n, r, a)), !0;
                case 'pointerover':
                  var i = a.pointerId;
                  return xi.set(i, Ci(xi.get(i) || null, e, t, n, r, a)), !0;
                case 'gotpointercapture':
                  return (
                    (i = a.pointerId),
                    ki.set(i, Ci(ki.get(i) || null, e, t, n, r, a)),
                    !0
                  );
              }
              return !1;
            })(i, e, t, n, r)
          )
            return;
          _i(e, r);
        }
        Xl(e, t, r, null, n);
      }
    }
}
function co(e, t, n, r) {
  var a = Ra(r);
  if (null !== (a = ps(a))) {
    var i = li(a);
    if (null === i) a = null;
    else {
      var o = i.tag;
      if (13 === o) {
        if (null !== (a = si(i))) return a;
        a = null;
      } else if (3 === o) {
        if (i.stateNode.hydrate)
          return 3 === i.tag ? i.stateNode.containerInfo : null;
        a = null;
      } else i !== a && (a = null);
    }
  }
  return Xl(e, t, r, a, n), null;
}
var fo = null,
  po = null,
  ho = null;
function mo() {
  if (ho) return ho;
  var e,
    t,
    n = po,
    r = n.length,
    a = 'value' in fo ? fo.value : fo.textContent,
    i = a.length;
  for (e = 0; e < r && n[e] === a[e]; e++);
  var o = r - e;
  for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
  return (ho = a.slice(e, 1 < t ? 1 - t : void 0));
}
function vo(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
    10 === e && (e = 13),
    32 <= e || 13 === e ? e : 0
  );
}
function go() {
  return !0;
}
function bo() {
  return !1;
}
function yo(e) {
  function t(t, n, r, a, i) {
    for (var o in ((this._reactName = t),
    (this._targetInst = r),
    (this.type = n),
    (this.nativeEvent = a),
    (this.target = i),
    (this.currentTarget = null),
    e))
      e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
    return (
      (this.isDefaultPrevented = (
        null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
      )
        ? go
        : bo),
      (this.isPropagationStopped = bo),
      this
    );
  }
  return (
    mr(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = go));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = go));
      },
      persist: function () {},
      isPersistent: go,
    }),
    t
  );
}
var wo,
  xo,
  ko,
  Eo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  So = yo(Eo),
  Oo = mr({}, Eo, { view: 0, detail: 0 }),
  _o = yo(Oo),
  Co = mr({}, Oo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Fo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return void 0 === e.relatedTarget
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== ko &&
            (ko && 'mousemove' === e.type
              ? ((wo = e.screenX - ko.screenX), (xo = e.screenY - ko.screenY))
              : (xo = wo = 0),
            (ko = e)),
          wo);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : xo;
    },
  }),
  Po = yo(Co),
  No = yo(mr({}, Co, { dataTransfer: 0 })),
  To = yo(mr({}, Oo, { relatedTarget: 0 })),
  Do = yo(mr({}, Eo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
  Lo = mr({}, Eo, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ao = yo(Lo),
  Mo = yo(mr({}, Eo, { data: 0 })),
  zo = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  jo = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Ro = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Io(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = Ro[e]) && !!t[e];
}
function Fo() {
  return Io;
}
var Uo = mr({}, Oo, {
    key: function (e) {
      if (e.key) {
        var t = zo[e.key] || e.key;
        if ('Unidentified' !== t) return t;
      }
      return 'keypress' === e.type
        ? 13 === (e = vo(e))
          ? 'Enter'
          : String.fromCharCode(e)
        : 'keydown' === e.type || 'keyup' === e.type
        ? jo[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fo,
    charCode: function (e) {
      return 'keypress' === e.type ? vo(e) : 0;
    },
    keyCode: function (e) {
      return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
    },
    which: function (e) {
      return 'keypress' === e.type
        ? vo(e)
        : 'keydown' === e.type || 'keyup' === e.type
        ? e.keyCode
        : 0;
    },
  }),
  Ho = yo(Uo),
  Wo = yo(
    mr({}, Co, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
  ),
  Vo = yo(
    mr({}, Oo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fo,
    }),
  ),
  Bo = yo(mr({}, Eo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
  Yo = mr({}, Co, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Xo = yo(Yo),
  $o = [9, 13, 27, 32],
  Qo = kr && 'CompositionEvent' in window,
  Go = null;
kr && 'documentMode' in document && (Go = document.documentMode);
var qo = kr && 'TextEvent' in window && !Go,
  Ko = kr && (!Qo || (Go && 8 < Go && 11 >= Go)),
  Jo = String.fromCharCode(32),
  Zo = !1;
function el(e, t) {
  switch (e) {
    case 'keyup':
      return -1 !== $o.indexOf(t.keyCode);
    case 'keydown':
      return 229 !== t.keyCode;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function tl(e) {
  return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var nl = !1;
var rl = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function al(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return 'input' === t ? !!rl[e.type] : 'textarea' === t;
}
function il(e, t, n, r) {
  Wa(r),
    0 < (t = Ql(t, 'onChange')).length &&
      ((n = new So('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ol = null,
  ll = null;
function sl(e) {
  Ul(e, 0);
}
function ul(e) {
  if (sa(ms(e))) return e;
}
function cl(e, t) {
  if ('change' === e) return t;
}
var fl = !1;
if (kr) {
  var dl;
  if (kr) {
    var pl = 'oninput' in document;
    if (!pl) {
      var hl = document.createElement('div');
      hl.setAttribute('oninput', 'return;'),
        (pl = 'function' == typeof hl.oninput);
    }
    dl = pl;
  } else dl = !1;
  fl = dl && (!document.documentMode || 9 < document.documentMode);
}
function ml() {
  ol && (ol.detachEvent('onpropertychange', vl), (ll = ol = null));
}
function vl(e) {
  if ('value' === e.propertyName && ul(ll)) {
    var t = [];
    if ((il(t, ll, e, Ra(e)), (e = sl), Qa)) e(t);
    else {
      Qa = !0;
      try {
        Ba(e, t);
      } finally {
        (Qa = !1), qa();
      }
    }
  }
}
function gl(e, t, n) {
  'focusin' === e
    ? (ml(), (ll = n), (ol = t).attachEvent('onpropertychange', vl))
    : 'focusout' === e && ml();
}
function bl(e) {
  if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
    return ul(ll);
}
function yl(e, t) {
  if ('click' === e) return ul(t);
}
function wl(e, t) {
  if ('input' === e || 'change' === e) return ul(t);
}
var xl =
    'function' == typeof Object.is
      ? Object.is
      : function (e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        },
  kl = Object.prototype.hasOwnProperty;
function El(e, t) {
  if (xl(e, t)) return !0;
  if ('object' != typeof e || null === e || 'object' != typeof t || null === t)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++)
    if (!kl.call(t, n[r]) || !xl(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function Sl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ol(e, t) {
  var n,
    r = Sl(e);
  for (e = 0; r; ) {
    if (3 === r.nodeType) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Sl(r);
  }
}
function _l(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || 3 !== e.nodeType) &&
        (t && 3 === t.nodeType
          ? _l(e, t.parentNode)
          : 'contains' in e
          ? e.contains(t)
          : !!e.compareDocumentPosition &&
            !!(16 & e.compareDocumentPosition(t)))))
  );
}
function Cl() {
  for (var e = window, t = ua(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = 'string' == typeof t.contentWindow.location.href;
    } catch (r) {
      n = !1;
    }
    if (!n) break;
    t = ua((e = t.contentWindow).document);
  }
  return t;
}
function Pl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    (('input' === t &&
      ('text' === e.type ||
        'search' === e.type ||
        'tel' === e.type ||
        'url' === e.type ||
        'password' === e.type)) ||
      'textarea' === t ||
      'true' === e.contentEditable)
  );
}
var Nl = kr && 'documentMode' in document && 11 >= document.documentMode,
  Tl = null,
  Dl = null,
  Ll = null,
  Al = !1;
function Ml(e, t, n) {
  var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
  Al ||
    null == Tl ||
    Tl !== ua(r) ||
    ('selectionStart' in (r = Tl) && Pl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : (r = {
          anchorNode: (r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()).anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        }),
    (Ll && El(Ll, r)) ||
      ((Ll = r),
      0 < (r = Ql(Dl, 'onSelect')).length &&
        ((t = new So('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Tl))));
}
Xi(
  'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
    ' ',
  ),
  0,
),
  Xi(
    'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
      ' ',
    ),
    1,
  ),
  Xi(Yi, 2);
for (
  var zl =
      'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
        ' ',
      ),
    jl = 0;
  jl < zl.length;
  jl++
)
  Bi.set(zl[jl], 0);
xr('onMouseEnter', ['mouseout', 'mouseover']),
  xr('onMouseLeave', ['mouseout', 'mouseover']),
  xr('onPointerEnter', ['pointerout', 'pointerover']),
  xr('onPointerLeave', ['pointerout', 'pointerover']),
  wr(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
      ' ',
    ),
  ),
  wr(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
      ' ',
    ),
  ),
  wr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
  wr(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' '),
  ),
  wr(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
  ),
  wr(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
  );
var Rl =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Il = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Rl));
function Fl(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n),
    (function (e, t, n, r, a, i, o, l, s) {
      if ((oi.apply(this, arguments), ti)) {
        if (!ti) throw Error(gr(198));
        var u = ni;
        (ti = !1), (ni = null), ri || ((ri = !0), (ai = u));
      }
    })(r, t, void 0, e),
    (e.currentTarget = null);
}
function Ul(e, t) {
  t = 0 != (4 & t);
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      a = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== i && a.isPropagationStopped())) break e;
          Fl(a, l, u), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = (l = r[o]).instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== i && a.isPropagationStopped())
          )
            break e;
          Fl(a, l, u), (i = s);
        }
    }
  }
  if (ri) throw ((e = ai), (ri = !1), (ai = null), e);
}
function Hl(e, t) {
  var n = gs(t),
    r = e + '__bubble';
  n.has(r) || (Yl(t, e, 2, !1), n.add(r));
}
var Wl = '_reactListening' + Math.random().toString(36).slice(2);
function Vl(e) {
  e[Wl] ||
    ((e[Wl] = !0),
    br.forEach(function (t) {
      Il.has(t) || Bl(t, !1, e, null), Bl(t, !0, e, null);
    }));
}
function Bl(e, t, n, r) {
  var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
    i = n;
  if (
    ('selectionchange' === e && 9 !== n.nodeType && (i = n.ownerDocument),
    null !== r && !t && Il.has(e))
  ) {
    if ('scroll' !== e) return;
    (a |= 2), (i = r);
  }
  var o = gs(i),
    l = e + '__' + (t ? 'capture' : 'bubble');
  o.has(l) || (t && (a |= 4), Yl(i, e, a, t), o.add(l));
}
function Yl(e, t, n, r) {
  var a = Bi.get(t);
  switch (void 0 === a ? 2 : a) {
    case 0:
      a = lo;
      break;
    case 1:
      a = so;
      break;
    default:
      a = uo;
  }
  (n = a.bind(null, t, n, e)),
    (a = void 0),
    !Ja ||
      ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
      (a = !0),
    r
      ? void 0 !== a
        ? e.addEventListener(t, n, { capture: !0, passive: a })
        : e.addEventListener(t, n, !0)
      : void 0 !== a
      ? e.addEventListener(t, n, { passive: a })
      : e.addEventListener(t, n, !1);
}
function Xl(e, t, n, r, a) {
  var i = r;
  if (0 == (1 & t) && 0 == (2 & t) && null !== r)
    e: for (;;) {
      if (null === r) return;
      var o = r.tag;
      if (3 === o || 4 === o) {
        var l = r.stateNode.containerInfo;
        if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
        if (4 === o)
          for (o = r.return; null !== o; ) {
            var s = o.tag;
            if (
              (3 === s || 4 === s) &&
              ((s = o.stateNode.containerInfo) === a ||
                (8 === s.nodeType && s.parentNode === a))
            )
              return;
            o = o.return;
          }
        for (; null !== l; ) {
          if (null === (o = ps(l))) return;
          if (5 === (s = o.tag) || 6 === s) {
            r = i = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  !(function (e, t, n) {
    if (Ga) return e(t, n);
    Ga = !0;
    try {
      $a(e, t, n);
    } finally {
      (Ga = !1), qa();
    }
  })(function () {
    var r = i,
      a = Ra(n),
      o = [];
    e: {
      var l = Vi.get(e);
      if (void 0 !== l) {
        var s = So,
          u = e;
        switch (e) {
          case 'keypress':
            if (0 === vo(n)) break e;
          case 'keydown':
          case 'keyup':
            s = Ho;
            break;
          case 'focusin':
            (u = 'focus'), (s = To);
            break;
          case 'focusout':
            (u = 'blur'), (s = To);
            break;
          case 'beforeblur':
          case 'afterblur':
            s = To;
            break;
          case 'click':
            if (2 === n.button) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            s = Po;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            s = No;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            s = Vo;
            break;
          case Fi:
          case Ui:
          case Hi:
            s = Do;
            break;
          case Wi:
            s = Bo;
            break;
          case 'scroll':
            s = _o;
            break;
          case 'wheel':
            s = Xo;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            s = Ao;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            s = Wo;
        }
        var c = 0 != (4 & t),
          f = !c && 'scroll' === e,
          d = c ? (null !== l ? l + 'Capture' : null) : l;
        c = [];
        for (var p, h = r; null !== h; ) {
          var m = (p = h).stateNode;
          if (
            (5 === p.tag &&
              null !== m &&
              ((p = m),
              null !== d && null != (m = Ka(h, d)) && c.push($l(h, m, p))),
            f)
          )
            break;
          h = h.return;
        }
        0 < c.length &&
          ((l = new s(l, u, null, n, a)), o.push({ event: l, listeners: c }));
      }
    }
    if (0 == (7 & t)) {
      if (
        ((s = 'mouseout' === e || 'pointerout' === e),
        (!(l = 'mouseover' === e || 'pointerover' === e) ||
          0 != (16 & t) ||
          !(u = n.relatedTarget || n.fromElement) ||
          (!ps(u) && !u[fs])) &&
          (s || l) &&
          ((l =
            a.window === a
              ? a
              : (l = a.ownerDocument)
              ? l.defaultView || l.parentWindow
              : window),
          s
            ? ((s = r),
              null !==
                (u = (u = n.relatedTarget || n.toElement) ? ps(u) : null) &&
                (u !== (f = li(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                (u = null))
            : ((s = null), (u = r)),
          s !== u))
      ) {
        if (
          ((c = Po),
          (m = 'onMouseLeave'),
          (d = 'onMouseEnter'),
          (h = 'mouse'),
          ('pointerout' !== e && 'pointerover' !== e) ||
            ((c = Wo),
            (m = 'onPointerLeave'),
            (d = 'onPointerEnter'),
            (h = 'pointer')),
          (f = null == s ? l : ms(s)),
          (p = null == u ? l : ms(u)),
          ((l = new c(m, h + 'leave', s, n, a)).target = f),
          (l.relatedTarget = p),
          (m = null),
          ps(a) === r &&
            (((c = new c(d, h + 'enter', u, n, a)).target = p),
            (c.relatedTarget = f),
            (m = c)),
          (f = m),
          s && u)
        )
          e: {
            for (d = u, h = 0, p = c = s; p; p = Gl(p)) h++;
            for (p = 0, m = d; m; m = Gl(m)) p++;
            for (; 0 < h - p; ) (c = Gl(c)), h--;
            for (; 0 < p - h; ) (d = Gl(d)), p--;
            for (; h--; ) {
              if (c === d || (null !== d && c === d.alternate)) break e;
              (c = Gl(c)), (d = Gl(d));
            }
            c = null;
          }
        else c = null;
        null !== s && ql(o, l, s, c, !1),
          null !== u && null !== f && ql(o, f, u, c, !0);
      }
      if (
        'select' ===
          (s = (l = r ? ms(r) : window).nodeName && l.nodeName.toLowerCase()) ||
        ('input' === s && 'file' === l.type)
      )
        var v = cl;
      else if (al(l))
        if (fl) v = wl;
        else {
          v = bl;
          var g = gl;
        }
      else
        (s = l.nodeName) &&
          'input' === s.toLowerCase() &&
          ('checkbox' === l.type || 'radio' === l.type) &&
          (v = yl);
      switch (
        (v && (v = v(e, r))
          ? il(o, v, n, a)
          : (g && g(e, l, r),
            'focusout' === e &&
              (g = l._wrapperState) &&
              g.controlled &&
              'number' === l.type &&
              ma(l, 'number', l.value)),
        (g = r ? ms(r) : window),
        e)
      ) {
        case 'focusin':
          (al(g) || 'true' === g.contentEditable) &&
            ((Tl = g), (Dl = r), (Ll = null));
          break;
        case 'focusout':
          Ll = Dl = Tl = null;
          break;
        case 'mousedown':
          Al = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Al = !1), Ml(o, n, a);
          break;
        case 'selectionchange':
          if (Nl) break;
        case 'keydown':
        case 'keyup':
          Ml(o, n, a);
      }
      var b;
      if (Qo)
        e: {
          switch (e) {
            case 'compositionstart':
              var y = 'onCompositionStart';
              break e;
            case 'compositionend':
              y = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              y = 'onCompositionUpdate';
              break e;
          }
          y = void 0;
        }
      else
        nl
          ? el(e, n) && (y = 'onCompositionEnd')
          : 'keydown' === e && 229 === n.keyCode && (y = 'onCompositionStart');
      y &&
        (Ko &&
          'ko' !== n.locale &&
          (nl || 'onCompositionStart' !== y
            ? 'onCompositionEnd' === y && nl && (b = mo())
            : ((po = 'value' in (fo = a) ? fo.value : fo.textContent),
              (nl = !0))),
        0 < (g = Ql(r, y)).length &&
          ((y = new Mo(y, e, null, n, a)),
          o.push({ event: y, listeners: g }),
          b ? (y.data = b) : null !== (b = tl(n)) && (y.data = b))),
        (b = qo
          ? (function (e, t) {
              switch (e) {
                case 'compositionend':
                  return tl(t);
                case 'keypress':
                  return 32 !== t.which ? null : ((Zo = !0), Jo);
                case 'textInput':
                  return (e = t.data) === Jo && Zo ? null : e;
                default:
                  return null;
              }
            })(e, n)
          : (function (e, t) {
              if (nl)
                return 'compositionend' === e || (!Qo && el(e, t))
                  ? ((e = mo()), (ho = po = fo = null), (nl = !1), e)
                  : null;
              switch (e) {
                case 'paste':
                default:
                  return null;
                case 'keypress':
                  if (
                    !(t.ctrlKey || t.altKey || t.metaKey) ||
                    (t.ctrlKey && t.altKey)
                  ) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                  }
                  return null;
                case 'compositionend':
                  return Ko && 'ko' !== t.locale ? null : t.data;
              }
            })(e, n)) &&
          0 < (r = Ql(r, 'onBeforeInput')).length &&
          ((a = new Mo('onBeforeInput', 'beforeinput', null, n, a)),
          o.push({ event: a, listeners: r }),
          (a.data = b));
    }
    Ul(o, t);
  });
}
function $l(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ql(e, t) {
  for (var n = t + 'Capture', r = []; null !== e; ) {
    var a = e,
      i = a.stateNode;
    5 === a.tag &&
      null !== i &&
      ((a = i),
      null != (i = Ka(e, n)) && r.unshift($l(e, i, a)),
      null != (i = Ka(e, t)) && r.push($l(e, i, a))),
      (e = e.return);
  }
  return r;
}
function Gl(e) {
  if (null === e) return null;
  do {
    e = e.return;
  } while (e && 5 !== e.tag);
  return e || null;
}
function ql(e, t, n, r, a) {
  for (var i = t._reactName, o = []; null !== n && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (null !== s && s === r) break;
    5 === l.tag &&
      null !== u &&
      ((l = u),
      a
        ? null != (s = Ka(n, i)) && o.unshift($l(n, s, l))
        : a || (null != (s = Ka(n, i)) && o.push($l(n, s, l)))),
      (n = n.return);
  }
  0 !== o.length && e.push({ event: t, listeners: o });
}
function Kl() {}
var Jl = null,
  Zl = null;
function es(e, t) {
  switch (e) {
    case 'button':
    case 'input':
    case 'select':
    case 'textarea':
      return !!t.autoFocus;
  }
  return !1;
}
function ts(e, t) {
  return (
    'textarea' === e ||
    'option' === e ||
    'noscript' === e ||
    'string' == typeof t.children ||
    'number' == typeof t.children ||
    ('object' == typeof t.dangerouslySetInnerHTML &&
      null !== t.dangerouslySetInnerHTML &&
      null != t.dangerouslySetInnerHTML.__html)
  );
}
var ns = 'function' == typeof setTimeout ? setTimeout : void 0,
  rs = 'function' == typeof clearTimeout ? clearTimeout : void 0;
function as(e) {
  1 === e.nodeType
    ? (e.textContent = '')
    : 9 === e.nodeType && null != (e = e.body) && (e.textContent = '');
}
function is(e) {
  for (; null != e; e = e.nextSibling) {
    var t = e.nodeType;
    if (1 === t || 3 === t) break;
  }
  return e;
}
function os(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (8 === e.nodeType) {
      var n = e.data;
      if ('$' === n || '$!' === n || '$?' === n) {
        if (0 === t) return e;
        t--;
      } else '/$' === n && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ls = 0;
var ss = Math.random().toString(36).slice(2),
  us = '__reactFiber$' + ss,
  cs = '__reactProps$' + ss,
  fs = '__reactContainer$' + ss,
  ds = '__reactEvents$' + ss;
function ps(e) {
  var t = e[us];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[fs] || n[us])) {
      if (
        ((n = t.alternate),
        null !== t.child || (null !== n && null !== n.child))
      )
        for (e = os(e); null !== e; ) {
          if ((n = e[us])) return n;
          e = os(e);
        }
      return t;
    }
    n = (e = n).parentNode;
  }
  return null;
}
function hs(e) {
  return !(e = e[us] || e[fs]) ||
    (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
    ? null
    : e;
}
function ms(e) {
  if (5 === e.tag || 6 === e.tag) return e.stateNode;
  throw Error(gr(33));
}
function vs(e) {
  return e[cs] || null;
}
function gs(e) {
  var t = e[ds];
  return void 0 === t && (t = e[ds] = new Set()), t;
}
var bs = [],
  ys = -1;
function ws(e) {
  return { current: e };
}
function xs(e) {
  0 > ys || ((e.current = bs[ys]), (bs[ys] = null), ys--);
}
function ks(e, t) {
  ys++, (bs[ys] = e.current), (e.current = t);
}
var Es = {},
  Ss = ws(Es),
  Os = ws(!1),
  _s = Es;
function Cs(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Es;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var a,
    i = {};
  for (a in n) i[a] = t[a];
  return (
    r &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ps(e) {
  return null != (e = e.childContextTypes);
}
function Ns() {
  xs(Os), xs(Ss);
}
function Ts(e, t, n) {
  if (Ss.current !== Es) throw Error(gr(168));
  ks(Ss, t), ks(Os, n);
}
function Ds(e, t, n) {
  var r = e.stateNode;
  if (((e = t.childContextTypes), 'function' != typeof r.getChildContext))
    return n;
  for (var a in (r = r.getChildContext()))
    if (!(a in e)) throw Error(gr(108, aa(t) || 'Unknown', a));
  return mr({}, n, r);
}
function Ls(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Es),
    (_s = Ss.current),
    ks(Ss, e),
    ks(Os, Os.current),
    !0
  );
}
function As(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(gr(169));
  n
    ? ((e = Ds(e, t, _s)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      xs(Os),
      xs(Ss),
      ks(Ss, e))
    : xs(Os),
    ks(Os, n);
}
var Ms = null,
  zs = null,
  js = vr.unstable_runWithPriority,
  Rs = vr.unstable_scheduleCallback,
  Is = vr.unstable_cancelCallback,
  Fs = vr.unstable_shouldYield,
  Us = vr.unstable_requestPaint,
  Hs = vr.unstable_now,
  Ws = vr.unstable_getCurrentPriorityLevel,
  Vs = vr.unstable_ImmediatePriority,
  Bs = vr.unstable_UserBlockingPriority,
  Ys = vr.unstable_NormalPriority,
  Xs = vr.unstable_LowPriority,
  $s = vr.unstable_IdlePriority,
  Qs = {},
  Gs = void 0 !== Us ? Us : function () {},
  qs = null,
  Ks = null,
  Js = !1,
  Zs = Hs(),
  eu =
    1e4 > Zs
      ? Hs
      : function () {
          return Hs() - Zs;
        };
function tu() {
  switch (Ws()) {
    case Vs:
      return 99;
    case Bs:
      return 98;
    case Ys:
      return 97;
    case Xs:
      return 96;
    case $s:
      return 95;
    default:
      throw Error(gr(332));
  }
}
function nu(e) {
  switch (e) {
    case 99:
      return Vs;
    case 98:
      return Bs;
    case 97:
      return Ys;
    case 96:
      return Xs;
    case 95:
      return $s;
    default:
      throw Error(gr(332));
  }
}
function ru(e, t) {
  return (e = nu(e)), js(e, t);
}
function au(e, t, n) {
  return (e = nu(e)), Rs(e, t, n);
}
function iu() {
  if (null !== Ks) {
    var e = Ks;
    (Ks = null), Is(e);
  }
  ou();
}
function ou() {
  if (!Js && null !== qs) {
    Js = !0;
    var e = 0;
    try {
      var t = qs;
      ru(99, function () {
        for (; e < t.length; e++) {
          var n = t[e];
          do {
            n = n(!0);
          } while (null !== n);
        }
      }),
        (qs = null);
    } catch (n) {
      throw (null !== qs && (qs = qs.slice(e + 1)), Rs(Vs, iu), n);
    } finally {
      Js = !1;
    }
  }
}
var lu = Lr.ReactCurrentBatchConfig;
function su(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = mr({}, t)), (e = e.defaultProps)))
      void 0 === t[n] && (t[n] = e[n]);
    return t;
  }
  return t;
}
var uu = ws(null),
  cu = null,
  fu = null,
  du = null;
function pu() {
  du = fu = cu = null;
}
function hu(e) {
  var t = uu.current;
  xs(uu), (e.type._context._currentValue = t);
}
function mu(e, t) {
  for (; null !== e; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (null === n || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
    e = e.return;
  }
}
function vu(e, t) {
  (cu = e),
    (du = fu = null),
    null !== (e = e.dependencies) &&
      null !== e.firstContext &&
      (0 != (e.lanes & t) && ($c = !0), (e.firstContext = null));
}
function gu(e, t) {
  if (du !== e && !1 !== t && 0 !== t)
    if (
      (('number' == typeof t && 1073741823 !== t) ||
        ((du = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      null === fu)
    ) {
      if (null === cu) throw Error(gr(308));
      (fu = t),
        (cu.dependencies = { lanes: 0, firstContext: t, responders: null });
    } else fu = fu.next = t;
  return e._currentValue;
}
var bu = !1;
function yu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  };
}
function wu(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function xu(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ku(e, t) {
  if (null !== (e = e.updateQueue)) {
    var n = (e = e.shared).pending;
    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
}
function Eu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (null !== r && n === (r = r.updateQueue)) {
    var a = null,
      i = null;
    if (null !== (n = n.firstBaseUpdate)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
      } while (null !== n);
      null === i ? (a = i = t) : (i = i.next = t);
    } else a = i = t;
    return (
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
      void (e.updateQueue = n)
    );
  }
  null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Su(e, t, n, r) {
  var a = e.updateQueue;
  bu = !1;
  var i = a.firstBaseUpdate,
    o = a.lastBaseUpdate,
    l = a.shared.pending;
  if (null !== l) {
    a.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), null === o ? (i = u) : (o.next = u), (o = s);
    var c = e.alternate;
    if (null !== c) {
      var f = (c = c.updateQueue).lastBaseUpdate;
      f !== o &&
        (null === f ? (c.firstBaseUpdate = u) : (f.next = u),
        (c.lastBaseUpdate = s));
    }
  }
  if (null !== i) {
    for (f = a.baseState, o = 0, c = u = s = null; ; ) {
      l = i.lane;
      var d = i.eventTime;
      if ((r & l) === l) {
        null !== c &&
          (c = c.next =
            {
              eventTime: d,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var p = e,
            h = i;
          switch (((l = t), (d = n), h.tag)) {
            case 1:
              if ('function' == typeof (p = h.payload)) {
                f = p.call(d, f, l);
                break e;
              }
              f = p;
              break e;
            case 3:
              p.flags = (-4097 & p.flags) | 64;
            case 0:
              if (
                null ==
                (l = 'function' == typeof (p = h.payload) ? p.call(d, f, l) : p)
              )
                break e;
              f = mr({}, f, l);
              break e;
            case 2:
              bu = !0;
          }
        }
        null !== i.callback &&
          ((e.flags |= 32),
          null === (l = a.effects) ? (a.effects = [i]) : l.push(i));
      } else
        (d = {
          eventTime: d,
          lane: l,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          null === c ? ((u = c = d), (s = f)) : (c = c.next = d),
          (o |= l);
      if (null === (i = i.next)) {
        if (null === (l = a.shared.pending)) break;
        (i = l.next),
          (l.next = null),
          (a.lastBaseUpdate = l),
          (a.shared.pending = null);
      }
    }
    null === c && (s = f),
      (a.baseState = s),
      (a.firstBaseUpdate = u),
      (a.lastBaseUpdate = c),
      (Jf |= o),
      (e.lanes = o),
      (e.memoizedState = f);
  }
}
function Ou(e, t, n) {
  if (((e = t.effects), (t.effects = null), null !== e))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        a = r.callback;
      if (null !== a) {
        if (((r.callback = null), (r = n), 'function' != typeof a))
          throw Error(gr(191, a));
        a.call(r);
      }
    }
}
var _u = new hr.Component().refs;
function Cu(e, t, n, r) {
  (n = null == (n = n(r, (t = e.memoizedState))) ? t : mr({}, t, n)),
    (e.memoizedState = n),
    0 === e.lanes && (e.updateQueue.baseState = n);
}
var Pu = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && li(e) === e;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ed(),
      a = Sd(e),
      i = xu(r, a);
    (i.payload = t), null != n && (i.callback = n), ku(e, i), Od(e, a, r);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ed(),
      a = Sd(e),
      i = xu(r, a);
    (i.tag = 1),
      (i.payload = t),
      null != n && (i.callback = n),
      ku(e, i),
      Od(e, a, r);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ed(),
      r = Sd(e),
      a = xu(n, r);
    (a.tag = 2), null != t && (a.callback = t), ku(e, a), Od(e, r, n);
  },
};
function Nu(e, t, n, r, a, i, o) {
  return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
    ? e.shouldComponentUpdate(r, i, o)
    : !t.prototype ||
        !t.prototype.isPureReactComponent ||
        !El(n, r) ||
        !El(a, i);
}
function Tu(e, t, n) {
  var r = !1,
    a = Es,
    i = t.contextType;
  return (
    'object' == typeof i && null !== i
      ? (i = gu(i))
      : ((a = Ps(t) ? _s : Ss.current),
        (i = (r = null != (r = t.contextTypes)) ? Cs(e, a) : Es)),
    (t = new t(n, i)),
    (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
    (t.updater = Pu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Du(e, t, n, r) {
  (e = t.state),
    'function' == typeof t.componentWillReceiveProps &&
      t.componentWillReceiveProps(n, r),
    'function' == typeof t.UNSAFE_componentWillReceiveProps &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Pu.enqueueReplaceState(t, t.state, null);
}
function Lu(e, t, n, r) {
  var a = e.stateNode;
  (a.props = n), (a.state = e.memoizedState), (a.refs = _u), yu(e);
  var i = t.contextType;
  'object' == typeof i && null !== i
    ? (a.context = gu(i))
    : ((i = Ps(t) ? _s : Ss.current), (a.context = Cs(e, i))),
    Su(e, n, a, r),
    (a.state = e.memoizedState),
    'function' == typeof (i = t.getDerivedStateFromProps) &&
      (Cu(e, t, i, n), (a.state = e.memoizedState)),
    'function' == typeof t.getDerivedStateFromProps ||
      'function' == typeof a.getSnapshotBeforeUpdate ||
      ('function' != typeof a.UNSAFE_componentWillMount &&
        'function' != typeof a.componentWillMount) ||
      ((t = a.state),
      'function' == typeof a.componentWillMount && a.componentWillMount(),
      'function' == typeof a.UNSAFE_componentWillMount &&
        a.UNSAFE_componentWillMount(),
      t !== a.state && Pu.enqueueReplaceState(a, a.state, null),
      Su(e, n, a, r),
      (a.state = e.memoizedState)),
    'function' == typeof a.componentDidMount && (e.flags |= 4);
}
var Au = Array.isArray;
function Mu(e, t, n) {
  if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
    if (n._owner) {
      if ((n = n._owner)) {
        if (1 !== n.tag) throw Error(gr(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(gr(147, e));
      var a = '' + e;
      return null !== t &&
        null !== t.ref &&
        'function' == typeof t.ref &&
        t.ref._stringRef === a
        ? t.ref
        : (((t = function (e) {
            var t = r.refs;
            t === _u && (t = r.refs = {}),
              null === e ? delete t[a] : (t[a] = e);
          })._stringRef = a),
          t);
    }
    if ('string' != typeof e) throw Error(gr(284));
    if (!n._owner) throw Error(gr(290, e));
  }
  return e;
}
function zu(e, t) {
  if ('textarea' !== e.type)
    throw Error(
      gr(
        31,
        '[object Object]' === Object.prototype.toString.call(t)
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : t,
      ),
    );
}
function ju(e) {
  function t(t, n) {
    if (e) {
      var r = t.lastEffect;
      null !== r
        ? ((r.nextEffect = n), (t.lastEffect = n))
        : (t.firstEffect = t.lastEffect = n),
        (n.nextEffect = null),
        (n.flags = 8);
    }
  }
  function n(n, r) {
    if (!e) return null;
    for (; null !== r; ) t(n, r), (r = r.sibling);
    return null;
  }
  function r(e, t) {
    for (e = new Map(); null !== t; )
      null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
    return e;
  }
  function a(e, t) {
    return ((e = rp(e, t)).index = 0), (e.sibling = null), e;
  }
  function i(t, n, r) {
    return (
      (t.index = r),
      e
        ? null !== (r = t.alternate)
          ? (r = r.index) < n
            ? ((t.flags = 2), n)
            : r
          : ((t.flags = 2), n)
        : n
    );
  }
  function o(t) {
    return e && null === t.alternate && (t.flags = 2), t;
  }
  function l(e, t, n, r) {
    return null === t || 6 !== t.tag
      ? (((t = lp(n, e.mode, r)).return = e), t)
      : (((t = a(t, n)).return = e), t);
  }
  function s(e, t, n, r) {
    return null !== t && t.elementType === n.type
      ? (((r = a(t, n.props)).ref = Mu(e, t, n)), (r.return = e), r)
      : (((r = ap(n.type, n.key, n.props, null, e.mode, r)).ref = Mu(e, t, n)),
        (r.return = e),
        r);
  }
  function u(e, t, n, r) {
    return null === t ||
      4 !== t.tag ||
      t.stateNode.containerInfo !== n.containerInfo ||
      t.stateNode.implementation !== n.implementation
      ? (((t = sp(n, e.mode, r)).return = e), t)
      : (((t = a(t, n.children || [])).return = e), t);
  }
  function c(e, t, n, r, i) {
    return null === t || 7 !== t.tag
      ? (((t = ip(n, e.mode, r, i)).return = e), t)
      : (((t = a(t, n)).return = e), t);
  }
  function f(e, t, n) {
    if ('string' == typeof t || 'number' == typeof t)
      return ((t = lp('' + t, e.mode, n)).return = e), t;
    if ('object' == typeof t && null !== t) {
      switch (t.$$typeof) {
        case Ar:
          return (
            ((n = ap(t.type, t.key, t.props, null, e.mode, n)).ref = Mu(
              e,
              null,
              t,
            )),
            (n.return = e),
            n
          );
        case Mr:
          return ((t = sp(t, e.mode, n)).return = e), t;
      }
      if (Au(t) || Zr(t)) return ((t = ip(t, e.mode, n, null)).return = e), t;
      zu(e, t);
    }
    return null;
  }
  function d(e, t, n, r) {
    var a = null !== t ? t.key : null;
    if ('string' == typeof n || 'number' == typeof n)
      return null !== a ? null : l(e, t, '' + n, r);
    if ('object' == typeof n && null !== n) {
      switch (n.$$typeof) {
        case Ar:
          return n.key === a
            ? n.type === zr
              ? c(e, t, n.props.children, r, a)
              : s(e, t, n, r)
            : null;
        case Mr:
          return n.key === a ? u(e, t, n, r) : null;
      }
      if (Au(n) || Zr(n)) return null !== a ? null : c(e, t, n, r, null);
      zu(e, n);
    }
    return null;
  }
  function p(e, t, n, r, a) {
    if ('string' == typeof r || 'number' == typeof r)
      return l(t, (e = e.get(n) || null), '' + r, a);
    if ('object' == typeof r && null !== r) {
      switch (r.$$typeof) {
        case Ar:
          return (
            (e = e.get(null === r.key ? n : r.key) || null),
            r.type === zr ? c(t, e, r.props.children, a, r.key) : s(t, e, r, a)
          );
        case Mr:
          return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
      }
      if (Au(r) || Zr(r)) return c(t, (e = e.get(n) || null), r, a, null);
      zu(t, r);
    }
    return null;
  }
  return function (l, s, u, c) {
    var h =
      'object' == typeof u && null !== u && u.type === zr && null === u.key;
    h && (u = u.props.children);
    var m = 'object' == typeof u && null !== u;
    if (m)
      switch (u.$$typeof) {
        case Ar:
          e: {
            for (m = u.key, h = s; null !== h; ) {
              if (h.key === m) {
                if (7 === h.tag) {
                  if (u.type === zr) {
                    n(l, h.sibling),
                      ((s = a(h, u.props.children)).return = l),
                      (l = s);
                    break e;
                  }
                } else if (h.elementType === u.type) {
                  n(l, h.sibling),
                    ((s = a(h, u.props)).ref = Mu(l, h, u)),
                    (s.return = l),
                    (l = s);
                  break e;
                }
                n(l, h);
                break;
              }
              t(l, h), (h = h.sibling);
            }
            u.type === zr
              ? (((s = ip(u.props.children, l.mode, c, u.key)).return = l),
                (l = s))
              : (((c = ap(u.type, u.key, u.props, null, l.mode, c)).ref = Mu(
                  l,
                  s,
                  u,
                )),
                (c.return = l),
                (l = c));
          }
          return o(l);
        case Mr:
          e: {
            for (h = u.key; null !== s; ) {
              if (s.key === h) {
                if (
                  4 === s.tag &&
                  s.stateNode.containerInfo === u.containerInfo &&
                  s.stateNode.implementation === u.implementation
                ) {
                  n(l, s.sibling),
                    ((s = a(s, u.children || [])).return = l),
                    (l = s);
                  break e;
                }
                n(l, s);
                break;
              }
              t(l, s), (s = s.sibling);
            }
            ((s = sp(u, l.mode, c)).return = l), (l = s);
          }
          return o(l);
      }
    if ('string' == typeof u || 'number' == typeof u)
      return (
        (u = '' + u),
        null !== s && 6 === s.tag
          ? (n(l, s.sibling), ((s = a(s, u)).return = l), (l = s))
          : (n(l, s), ((s = lp(u, l.mode, c)).return = l), (l = s)),
        o(l)
      );
    if (Au(u))
      return (function (a, o, l, s) {
        for (
          var u = null, c = null, h = o, m = (o = 0), v = null;
          null !== h && m < l.length;
          m++
        ) {
          h.index > m ? ((v = h), (h = null)) : (v = h.sibling);
          var g = d(a, h, l[m], s);
          if (null === g) {
            null === h && (h = v);
            break;
          }
          e && h && null === g.alternate && t(a, h),
            (o = i(g, o, m)),
            null === c ? (u = g) : (c.sibling = g),
            (c = g),
            (h = v);
        }
        if (m === l.length) return n(a, h), u;
        if (null === h) {
          for (; m < l.length; m++)
            null !== (h = f(a, l[m], s)) &&
              ((o = i(h, o, m)),
              null === c ? (u = h) : (c.sibling = h),
              (c = h));
          return u;
        }
        for (h = r(a, h); m < l.length; m++)
          null !== (v = p(h, a, m, l[m], s)) &&
            (e && null !== v.alternate && h.delete(null === v.key ? m : v.key),
            (o = i(v, o, m)),
            null === c ? (u = v) : (c.sibling = v),
            (c = v));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          u
        );
      })(l, s, u, c);
    if (Zr(u))
      return (function (a, o, l, s) {
        var u = Zr(l);
        if ('function' != typeof u) throw Error(gr(150));
        if (null == (l = u.call(l))) throw Error(gr(151));
        for (
          var c = (u = null), h = o, m = (o = 0), v = null, g = l.next();
          null !== h && !g.done;
          m++, g = l.next()
        ) {
          h.index > m ? ((v = h), (h = null)) : (v = h.sibling);
          var b = d(a, h, g.value, s);
          if (null === b) {
            null === h && (h = v);
            break;
          }
          e && h && null === b.alternate && t(a, h),
            (o = i(b, o, m)),
            null === c ? (u = b) : (c.sibling = b),
            (c = b),
            (h = v);
        }
        if (g.done) return n(a, h), u;
        if (null === h) {
          for (; !g.done; m++, g = l.next())
            null !== (g = f(a, g.value, s)) &&
              ((o = i(g, o, m)),
              null === c ? (u = g) : (c.sibling = g),
              (c = g));
          return u;
        }
        for (h = r(a, h); !g.done; m++, g = l.next())
          null !== (g = p(h, a, m, g.value, s)) &&
            (e && null !== g.alternate && h.delete(null === g.key ? m : g.key),
            (o = i(g, o, m)),
            null === c ? (u = g) : (c.sibling = g),
            (c = g));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          u
        );
      })(l, s, u, c);
    if ((m && zu(l, u), void 0 === u && !h))
      switch (l.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(gr(152, aa(l.type) || 'Component'));
      }
    return n(l, s);
  };
}
var Ru = ju(!0),
  Iu = ju(!1),
  Fu = {},
  Uu = ws(Fu),
  Hu = ws(Fu),
  Wu = ws(Fu);
function Vu(e) {
  if (e === Fu) throw Error(gr(174));
  return e;
}
function Bu(e, t) {
  switch ((ks(Wu, t), ks(Hu, e), ks(Uu, Fu), (e = t.nodeType))) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Oa(null, '');
      break;
    default:
      t = Oa(
        (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
        (e = e.tagName),
      );
  }
  xs(Uu), ks(Uu, t);
}
function Yu() {
  xs(Uu), xs(Hu), xs(Wu);
}
function Xu(e) {
  Vu(Wu.current);
  var t = Vu(Uu.current),
    n = Oa(t, e.type);
  t !== n && (ks(Hu, e), ks(Uu, n));
}
function $u(e) {
  Hu.current === e && (xs(Uu), xs(Hu));
}
var Qu = ws(0);
function Gu(e) {
  for (var t = e; null !== t; ) {
    if (13 === t.tag) {
      var n = t.memoizedState;
      if (
        null !== n &&
        (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)
      )
        return t;
    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
      if (0 != (64 & t.flags)) return t;
    } else if (null !== t.child) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; null === t.sibling; ) {
      if (null === t.return || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var qu = null,
  Ku = null,
  Ju = !1;
function Zu(e, t) {
  var n = tp(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.type = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (n.flags = 8),
    null !== e.lastEffect
      ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
      : (e.firstEffect = e.lastEffect = n);
}
function ec(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        null !==
          (t =
            1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t) && ((e.stateNode = t), !0)
      );
    case 6:
      return (
        null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
        ((e.stateNode = t), !0)
      );
    default:
      return !1;
  }
}
function tc(e) {
  if (Ju) {
    var t = Ku;
    if (t) {
      var n = t;
      if (!ec(e, t)) {
        if (!(t = is(n.nextSibling)) || !ec(e, t))
          return (e.flags = (-1025 & e.flags) | 2), (Ju = !1), void (qu = e);
        Zu(qu, n);
      }
      (qu = e), (Ku = is(t.firstChild));
    } else (e.flags = (-1025 & e.flags) | 2), (Ju = !1), (qu = e);
  }
}
function nc(e) {
  for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
    e = e.return;
  qu = e;
}
function rc(e) {
  if (e !== qu) return !1;
  if (!Ju) return nc(e), (Ju = !0), !1;
  var t = e.type;
  if (5 !== e.tag || ('head' !== t && 'body' !== t && !ts(t, e.memoizedProps)))
    for (t = Ku; t; ) Zu(e, t), (t = is(t.nextSibling));
  if ((nc(e), 13 === e.tag)) {
    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
      throw Error(gr(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ('/$' === n) {
            if (0 === t) {
              Ku = is(e.nextSibling);
              break e;
            }
            t--;
          } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
        }
        e = e.nextSibling;
      }
      Ku = null;
    }
  } else Ku = qu ? is(e.stateNode.nextSibling) : null;
  return !0;
}
function ac() {
  (Ku = qu = null), (Ju = !1);
}
var ic = [];
function oc() {
  for (var e = 0; e < ic.length; e++)
    ic[e]._workInProgressVersionPrimary = null;
  ic.length = 0;
}
var lc = Lr.ReactCurrentDispatcher,
  sc = Lr.ReactCurrentBatchConfig,
  uc = 0,
  cc = null,
  fc = null,
  dc = null,
  pc = !1,
  hc = !1;
function mc() {
  throw Error(gr(321));
}
function vc(e, t) {
  if (null === t) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!xl(e[n], t[n])) return !1;
  return !0;
}
function gc(e, t, n, r, a, i) {
  if (
    ((uc = i),
    (cc = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (lc.current = null === e || null === e.memoizedState ? Vc : Bc),
    (e = n(r, a)),
    hc)
  ) {
    i = 0;
    do {
      if (((hc = !1), !(25 > i))) throw Error(gr(301));
      (i += 1),
        (dc = fc = null),
        (t.updateQueue = null),
        (lc.current = Yc),
        (e = n(r, a));
    } while (hc);
  }
  if (
    ((lc.current = Wc),
    (t = null !== fc && null !== fc.next),
    (uc = 0),
    (dc = fc = cc = null),
    (pc = !1),
    t)
  )
    throw Error(gr(300));
  return e;
}
function bc() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return null === dc ? (cc.memoizedState = dc = e) : (dc = dc.next = e), dc;
}
function yc() {
  if (null === fc) {
    var e = cc.alternate;
    e = null !== e ? e.memoizedState : null;
  } else e = fc.next;
  var t = null === dc ? cc.memoizedState : dc.next;
  if (null !== t) (dc = t), (fc = e);
  else {
    if (null === e) throw Error(gr(310));
    (e = {
      memoizedState: (fc = e).memoizedState,
      baseState: fc.baseState,
      baseQueue: fc.baseQueue,
      queue: fc.queue,
      next: null,
    }),
      null === dc ? (cc.memoizedState = dc = e) : (dc = dc.next = e);
  }
  return dc;
}
function wc(e, t) {
  return 'function' == typeof t ? t(e) : t;
}
function xc(e) {
  var t = yc(),
    n = t.queue;
  if (null === n) throw Error(gr(311));
  n.lastRenderedReducer = e;
  var r = fc,
    a = r.baseQueue,
    i = n.pending;
  if (null !== i) {
    if (null !== a) {
      var o = a.next;
      (a.next = i.next), (i.next = o);
    }
    (r.baseQueue = a = i), (n.pending = null);
  }
  if (null !== a) {
    (a = a.next), (r = r.baseState);
    var l = (o = i = null),
      s = a;
    do {
      var u = s.lane;
      if ((uc & u) === u)
        null !== l &&
          (l = l.next =
            {
              lane: 0,
              action: s.action,
              eagerReducer: s.eagerReducer,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
      else {
        var c = {
          lane: u,
          action: s.action,
          eagerReducer: s.eagerReducer,
          eagerState: s.eagerState,
          next: null,
        };
        null === l ? ((o = l = c), (i = r)) : (l = l.next = c),
          (cc.lanes |= u),
          (Jf |= u);
      }
      s = s.next;
    } while (null !== s && s !== a);
    null === l ? (i = r) : (l.next = o),
      xl(r, t.memoizedState) || ($c = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  return [t.memoizedState, n.dispatch];
}
function kc(e) {
  var t = yc(),
    n = t.queue;
  if (null === n) throw Error(gr(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    a = n.pending,
    i = t.memoizedState;
  if (null !== a) {
    n.pending = null;
    var o = (a = a.next);
    do {
      (i = e(i, o.action)), (o = o.next);
    } while (o !== a);
    xl(i, t.memoizedState) || ($c = !0),
      (t.memoizedState = i),
      null === t.baseQueue && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ec(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var a = t._workInProgressVersionPrimary;
  if (
    (null !== a
      ? (e = a === r)
      : ((e = e.mutableReadLanes),
        (e = (uc & e) === e) &&
          ((t._workInProgressVersionPrimary = r), ic.push(t))),
    e)
  )
    return n(t._source);
  throw (ic.push(t), Error(gr(350)));
}
function Sc(e, t, n, r) {
  var a = Bf;
  if (null === a) throw Error(gr(349));
  var i = t._getVersion,
    o = i(t._source),
    l = lc.current,
    s = l.useState(function () {
      return Ec(a, t, n);
    }),
    u = s[1],
    c = s[0];
  s = dc;
  var f = e.memoizedState,
    d = f.refs,
    p = d.getSnapshot,
    h = f.source;
  f = f.subscribe;
  var m = cc;
  return (
    (e.memoizedState = { refs: d, source: t, subscribe: r }),
    l.useEffect(
      function () {
        (d.getSnapshot = n), (d.setSnapshot = u);
        var e = i(t._source);
        if (!xl(o, e)) {
          (e = n(t._source)),
            xl(c, e) ||
              (u(e), (e = Sd(m)), (a.mutableReadLanes |= e & a.pendingLanes)),
            (e = a.mutableReadLanes),
            (a.entangledLanes |= e);
          for (var r = a.entanglements, l = e; 0 < l; ) {
            var s = 31 - to(l),
              f = 1 << s;
            (r[s] |= e), (l &= ~f);
          }
        }
      },
      [n, t, r],
    ),
    l.useEffect(
      function () {
        return r(t._source, function () {
          var e = d.getSnapshot,
            n = d.setSnapshot;
          try {
            n(e(t._source));
            var r = Sd(m);
            a.mutableReadLanes |= r & a.pendingLanes;
          } catch (i) {
            n(function () {
              throw i;
            });
          }
        });
      },
      [t, r],
    ),
    (xl(p, n) && xl(h, t) && xl(f, r)) ||
      (((e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: wc,
        lastRenderedState: c,
      }).dispatch = u =
        Hc.bind(null, cc, e)),
      (s.queue = e),
      (s.baseQueue = null),
      (c = Ec(a, t, n)),
      (s.memoizedState = s.baseState = c)),
    c
  );
}
function Oc(e, t, n) {
  return Sc(yc(), e, t, n);
}
function _c(e) {
  var t = bc();
  return (
    'function' == typeof e && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = (e = t.queue =
      {
        pending: null,
        dispatch: null,
        lastRenderedReducer: wc,
        lastRenderedState: e,
      }).dispatch =
      Hc.bind(null, cc, e)),
    [t.memoizedState, e]
  );
}
function Cc(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    null === (t = cc.updateQueue)
      ? ((t = { lastEffect: null }),
        (cc.updateQueue = t),
        (t.lastEffect = e.next = e))
      : null === (n = t.lastEffect)
      ? (t.lastEffect = e.next = e)
      : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
    e
  );
}
function Pc(e) {
  return (e = { current: e }), (bc().memoizedState = e);
}
function Nc() {
  return yc().memoizedState;
}
function Tc(e, t, n, r) {
  var a = bc();
  (cc.flags |= e),
    (a.memoizedState = Cc(1 | t, n, void 0, void 0 === r ? null : r));
}
function Dc(e, t, n, r) {
  var a = yc();
  r = void 0 === r ? null : r;
  var i = void 0;
  if (null !== fc) {
    var o = fc.memoizedState;
    if (((i = o.destroy), null !== r && vc(r, o.deps)))
      return void Cc(t, n, i, r);
  }
  (cc.flags |= e), (a.memoizedState = Cc(1 | t, n, i, r));
}
function Lc(e, t) {
  return Tc(516, 4, e, t);
}
function Ac(e, t) {
  return Dc(516, 4, e, t);
}
function Mc(e, t) {
  return Dc(4, 2, e, t);
}
function zc(e, t) {
  return 'function' == typeof t
    ? ((e = e()),
      t(e),
      function () {
        t(null);
      })
    : null != t
    ? ((e = e()),
      (t.current = e),
      function () {
        t.current = null;
      })
    : void 0;
}
function jc(e, t, n) {
  return (
    (n = null != n ? n.concat([e]) : null), Dc(4, 2, zc.bind(null, t, e), n)
  );
}
function Rc() {}
function Ic(e, t) {
  var n = yc();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== r && null !== t && vc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Fc(e, t) {
  var n = yc();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== r && null !== t && vc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Uc(e, t) {
  var n = tu();
  ru(98 > n ? 98 : n, function () {
    e(!0);
  }),
    ru(97 < n ? 97 : n, function () {
      var n = sc.transition;
      sc.transition = 1;
      try {
        e(!1), t();
      } finally {
        sc.transition = n;
      }
    });
}
function Hc(e, t, n) {
  var r = Ed(),
    a = Sd(e),
    i = {
      lane: a,
      action: n,
      eagerReducer: null,
      eagerState: null,
      next: null,
    },
    o = t.pending;
  if (
    (null === o ? (i.next = i) : ((i.next = o.next), (o.next = i)),
    (t.pending = i),
    (o = e.alternate),
    e === cc || (null !== o && o === cc))
  )
    hc = pc = !0;
  else {
    if (
      0 === e.lanes &&
      (null === o || 0 === o.lanes) &&
      null !== (o = t.lastRenderedReducer)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, n);
        if (((i.eagerReducer = o), (i.eagerState = s), xl(s, l))) return;
      } catch (u) {}
    Od(e, a, r);
  }
}
var Wc = {
    readContext: gu,
    useCallback: mc,
    useContext: mc,
    useEffect: mc,
    useImperativeHandle: mc,
    useLayoutEffect: mc,
    useMemo: mc,
    useReducer: mc,
    useRef: mc,
    useState: mc,
    useDebugValue: mc,
    useDeferredValue: mc,
    useTransition: mc,
    useMutableSource: mc,
    useOpaqueIdentifier: mc,
    unstable_isNewReconciler: !1,
  },
  Vc = {
    readContext: gu,
    useCallback: function (e, t) {
      return (bc().memoizedState = [e, void 0 === t ? null : t]), e;
    },
    useContext: gu,
    useEffect: Lc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = null != n ? n.concat([e]) : null), Tc(4, 2, zc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Tc(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = bc();
      return (
        (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = bc();
      return (
        (t = void 0 !== n ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = (e = r.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }).dispatch =
          Hc.bind(null, cc, e)),
        [r.memoizedState, e]
      );
    },
    useRef: Pc,
    useState: _c,
    useDebugValue: Rc,
    useDeferredValue: function (e) {
      var t = _c(e),
        n = t[0],
        r = t[1];
      return (
        Lc(
          function () {
            var t = sc.transition;
            sc.transition = 1;
            try {
              r(e);
            } finally {
              sc.transition = t;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = _c(!1),
        t = e[0];
      return Pc((e = Uc.bind(null, e[1]))), [e, t];
    },
    useMutableSource: function (e, t, n) {
      var r = bc();
      return (
        (r.memoizedState = {
          refs: { getSnapshot: t, setSnapshot: null },
          source: e,
          subscribe: n,
        }),
        Sc(r, e, t, n)
      );
    },
    useOpaqueIdentifier: function () {
      if (Ju) {
        var e = !1,
          t = (function (e) {
            return { $$typeof: Xr, toString: e, valueOf: e };
          })(function () {
            throw (
              (e || ((e = !0), n('r:' + (ls++).toString(36))), Error(gr(355)))
            );
          }),
          n = _c(t)[1];
        return (
          0 == (2 & cc.mode) &&
            ((cc.flags |= 516),
            Cc(
              5,
              function () {
                n('r:' + (ls++).toString(36));
              },
              void 0,
              null,
            )),
          t
        );
      }
      return _c((t = 'r:' + (ls++).toString(36))), t;
    },
    unstable_isNewReconciler: !1,
  },
  Bc = {
    readContext: gu,
    useCallback: Ic,
    useContext: gu,
    useEffect: Ac,
    useImperativeHandle: jc,
    useLayoutEffect: Mc,
    useMemo: Fc,
    useReducer: xc,
    useRef: Nc,
    useState: function () {
      return xc(wc);
    },
    useDebugValue: Rc,
    useDeferredValue: function (e) {
      var t = xc(wc),
        n = t[0],
        r = t[1];
      return (
        Ac(
          function () {
            var t = sc.transition;
            sc.transition = 1;
            try {
              r(e);
            } finally {
              sc.transition = t;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = xc(wc)[0];
      return [Nc().current, e];
    },
    useMutableSource: Oc,
    useOpaqueIdentifier: function () {
      return xc(wc)[0];
    },
    unstable_isNewReconciler: !1,
  },
  Yc = {
    readContext: gu,
    useCallback: Ic,
    useContext: gu,
    useEffect: Ac,
    useImperativeHandle: jc,
    useLayoutEffect: Mc,
    useMemo: Fc,
    useReducer: kc,
    useRef: Nc,
    useState: function () {
      return kc(wc);
    },
    useDebugValue: Rc,
    useDeferredValue: function (e) {
      var t = kc(wc),
        n = t[0],
        r = t[1];
      return (
        Ac(
          function () {
            var t = sc.transition;
            sc.transition = 1;
            try {
              r(e);
            } finally {
              sc.transition = t;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = kc(wc)[0];
      return [Nc().current, e];
    },
    useMutableSource: Oc,
    useOpaqueIdentifier: function () {
      return kc(wc)[0];
    },
    unstable_isNewReconciler: !1,
  },
  Xc = Lr.ReactCurrentOwner,
  $c = !1;
function Qc(e, t, n, r) {
  t.child = null === e ? Iu(t, null, n, r) : Ru(t, e.child, n, r);
}
function Gc(e, t, n, r, a) {
  n = n.render;
  var i = t.ref;
  return (
    vu(t, a),
    (r = gc(e, t, n, r, i, a)),
    null === e || $c
      ? ((t.flags |= 1), Qc(e, t, r, a), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~a),
        vf(e, t, a))
  );
}
function qc(e, t, n, r, a, i) {
  if (null === e) {
    var o = n.type;
    return 'function' != typeof o ||
      np(o) ||
      void 0 !== o.defaultProps ||
      null !== n.compare ||
      void 0 !== n.defaultProps
      ? (((e = ap(n.type, null, r, t, t.mode, i)).ref = t.ref),
        (e.return = t),
        (t.child = e))
      : ((t.tag = 15), (t.type = o), Kc(e, t, o, r, a, i));
  }
  return (
    (o = e.child),
    0 == (a & i) &&
    ((a = o.memoizedProps),
    (n = null !== (n = n.compare) ? n : El)(a, r) && e.ref === t.ref)
      ? vf(e, t, i)
      : ((t.flags |= 1),
        ((e = rp(o, r)).ref = t.ref),
        (e.return = t),
        (t.child = e))
  );
}
function Kc(e, t, n, r, a, i) {
  if (null !== e && El(e.memoizedProps, r) && e.ref === t.ref) {
    if ((($c = !1), 0 == (i & a))) return (t.lanes = e.lanes), vf(e, t, i);
    0 != (16384 & e.flags) && ($c = !0);
  }
  return ef(e, t, n, r, i);
}
function Jc(e, t, n) {
  var r = t.pendingProps,
    a = r.children,
    i = null !== e ? e.memoizedState : null;
  if ('hidden' === r.mode || 'unstable-defer-without-hiding' === r.mode)
    if (0 == (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), Ad(t, n);
    else {
      if (0 == (1073741824 & n))
        return (
          (e = null !== i ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e }),
          Ad(t, e),
          null
        );
      (t.memoizedState = { baseLanes: 0 }), Ad(t, null !== i ? i.baseLanes : n);
    }
  else
    null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ad(t, r);
  return Qc(e, t, a, n), t.child;
}
function Zc(e, t) {
  var n = t.ref;
  ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
    (t.flags |= 128);
}
function ef(e, t, n, r, a) {
  var i = Ps(n) ? _s : Ss.current;
  return (
    (i = Cs(t, i)),
    vu(t, a),
    (n = gc(e, t, n, r, i, a)),
    null === e || $c
      ? ((t.flags |= 1), Qc(e, t, n, a), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~a),
        vf(e, t, a))
  );
}
function tf(e, t, n, r, a) {
  if (Ps(n)) {
    var i = !0;
    Ls(t);
  } else i = !1;
  if ((vu(t, a), null === t.stateNode))
    null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      Tu(t, n, r),
      Lu(t, n, r, a),
      (r = !0);
  else if (null === e) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var s = o.context,
      u = n.contextType;
    'object' == typeof u && null !== u
      ? (u = gu(u))
      : (u = Cs(t, (u = Ps(n) ? _s : Ss.current)));
    var c = n.getDerivedStateFromProps,
      f =
        'function' == typeof c ||
        'function' == typeof o.getSnapshotBeforeUpdate;
    f ||
      ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
        'function' != typeof o.componentWillReceiveProps) ||
      ((l !== r || s !== u) && Du(t, o, r, u)),
      (bu = !1);
    var d = t.memoizedState;
    (o.state = d),
      Su(t, r, o, a),
      (s = t.memoizedState),
      l !== r || d !== s || Os.current || bu
        ? ('function' == typeof c && (Cu(t, n, c, r), (s = t.memoizedState)),
          (l = bu || Nu(t, n, l, r, d, s, u))
            ? (f ||
                ('function' != typeof o.UNSAFE_componentWillMount &&
                  'function' != typeof o.componentWillMount) ||
                ('function' == typeof o.componentWillMount &&
                  o.componentWillMount(),
                'function' == typeof o.UNSAFE_componentWillMount &&
                  o.UNSAFE_componentWillMount()),
              'function' == typeof o.componentDidMount && (t.flags |= 4))
            : ('function' == typeof o.componentDidMount && (t.flags |= 4),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = u),
          (r = l))
        : ('function' == typeof o.componentDidMount && (t.flags |= 4),
          (r = !1));
  } else {
    (o = t.stateNode),
      wu(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : su(t.type, l)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      'object' == typeof (s = n.contextType) && null !== s
        ? (s = gu(s))
        : (s = Cs(t, (s = Ps(n) ? _s : Ss.current)));
    var p = n.getDerivedStateFromProps;
    (c =
      'function' == typeof p ||
      'function' == typeof o.getSnapshotBeforeUpdate) ||
      ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
        'function' != typeof o.componentWillReceiveProps) ||
      ((l !== f || d !== s) && Du(t, o, r, s)),
      (bu = !1),
      (d = t.memoizedState),
      (o.state = d),
      Su(t, r, o, a);
    var h = t.memoizedState;
    l !== f || d !== h || Os.current || bu
      ? ('function' == typeof p && (Cu(t, n, p, r), (h = t.memoizedState)),
        (u = bu || Nu(t, n, u, r, d, h, s))
          ? (c ||
              ('function' != typeof o.UNSAFE_componentWillUpdate &&
                'function' != typeof o.componentWillUpdate) ||
              ('function' == typeof o.componentWillUpdate &&
                o.componentWillUpdate(r, h, s),
              'function' == typeof o.UNSAFE_componentWillUpdate &&
                o.UNSAFE_componentWillUpdate(r, h, s)),
            'function' == typeof o.componentDidUpdate && (t.flags |= 4),
            'function' == typeof o.getSnapshotBeforeUpdate && (t.flags |= 256))
          : ('function' != typeof o.componentDidUpdate ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            'function' != typeof o.getSnapshotBeforeUpdate ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (o.props = r),
        (o.state = h),
        (o.context = s),
        (r = u))
      : ('function' != typeof o.componentDidUpdate ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        'function' != typeof o.getSnapshotBeforeUpdate ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 256),
        (r = !1));
  }
  return nf(e, t, n, r, i, a);
}
function nf(e, t, n, r, a, i) {
  Zc(e, t);
  var o = 0 != (64 & t.flags);
  if (!r && !o) return a && As(t, n, !1), vf(e, t, i);
  (r = t.stateNode), (Xc.current = t);
  var l =
    o && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
  return (
    (t.flags |= 1),
    null !== e && o
      ? ((t.child = Ru(t, e.child, null, i)), (t.child = Ru(t, null, l, i)))
      : Qc(e, t, l, i),
    (t.memoizedState = r.state),
    a && As(t, n, !0),
    t.child
  );
}
function rf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ts(0, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ts(0, t.context, !1),
    Bu(e, t.containerInfo);
}
var af,
  of,
  lf,
  sf = { dehydrated: null, retryLane: 0 };
function uf(e, t, n) {
  var r,
    a = t.pendingProps,
    i = Qu.current,
    o = !1;
  return (
    (r = 0 != (64 & t.flags)) ||
      (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
    r
      ? ((o = !0), (t.flags &= -65))
      : (null !== e && null === e.memoizedState) ||
        void 0 === a.fallback ||
        !0 === a.unstable_avoidThisFallback ||
        (i |= 1),
    ks(Qu, 1 & i),
    null === e
      ? (void 0 !== a.fallback && tc(t),
        (e = a.children),
        (i = a.fallback),
        o
          ? ((e = cf(t, e, i, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = sf),
            e)
          : 'number' == typeof a.unstable_expectedLoadTime
          ? ((e = cf(t, e, i, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = sf),
            (t.lanes = 33554432),
            e)
          : (((n = op(
              { mode: 'visible', children: e },
              t.mode,
              n,
              null,
            )).return = t),
            (t.child = n)))
      : (e.memoizedState,
        o
          ? ((a = df(e, t, a.children, a.fallback, n)),
            (o = t.child),
            (i = e.child.memoizedState),
            (o.memoizedState =
              null === i ? { baseLanes: n } : { baseLanes: i.baseLanes | n }),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = sf),
            a)
          : ((n = ff(e, t, a.children, n)), (t.memoizedState = null), n))
  );
}
function cf(e, t, n, r) {
  var a = e.mode,
    i = e.child;
  return (
    (t = { mode: 'hidden', children: t }),
    0 == (2 & a) && null !== i
      ? ((i.childLanes = 0), (i.pendingProps = t))
      : (i = op(t, a, 0, null)),
    (n = ip(n, a, r, null)),
    (i.return = e),
    (n.return = e),
    (i.sibling = n),
    (e.child = i),
    n
  );
}
function ff(e, t, n, r) {
  var a = e.child;
  return (
    (e = a.sibling),
    (n = rp(a, { mode: 'visible', children: n })),
    0 == (2 & t.mode) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    null !== e &&
      ((e.nextEffect = null),
      (e.flags = 8),
      (t.firstEffect = t.lastEffect = e)),
    (t.child = n)
  );
}
function df(e, t, n, r, a) {
  var i = t.mode,
    o = e.child;
  e = o.sibling;
  var l = { mode: 'hidden', children: n };
  return (
    0 == (2 & i) && t.child !== o
      ? (((n = t.child).childLanes = 0),
        (n.pendingProps = l),
        null !== (o = n.lastEffect)
          ? ((t.firstEffect = n.firstEffect),
            (t.lastEffect = o),
            (o.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (n = rp(o, l)),
    null !== e ? (r = rp(e, r)) : ((r = ip(r, i, a, null)).flags |= 2),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  );
}
function pf(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  null !== n && (n.lanes |= t), mu(e.return, t);
}
function hf(e, t, n, r, a, i) {
  var o = e.memoizedState;
  null === o
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: a,
        lastEffect: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = a),
      (o.lastEffect = i));
}
function mf(e, t, n) {
  var r = t.pendingProps,
    a = r.revealOrder,
    i = r.tail;
  if ((Qc(e, t, r.children, n), 0 != (2 & (r = Qu.current))))
    (r = (1 & r) | 2), (t.flags |= 64);
  else {
    if (null !== e && 0 != (64 & e.flags))
      e: for (e = t.child; null !== e; ) {
        if (13 === e.tag) null !== e.memoizedState && pf(e, n);
        else if (19 === e.tag) pf(e, n);
        else if (null !== e.child) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; null === e.sibling; ) {
          if (null === e.return || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ks(Qu, r), 0 == (2 & t.mode))) t.memoizedState = null;
  else
    switch (a) {
      case 'forwards':
        for (n = t.child, a = null; null !== n; )
          null !== (e = n.alternate) && null === Gu(e) && (a = n),
            (n = n.sibling);
        null === (n = a)
          ? ((a = t.child), (t.child = null))
          : ((a = n.sibling), (n.sibling = null)),
          hf(t, !1, a, n, i, t.lastEffect);
        break;
      case 'backwards':
        for (n = null, a = t.child, t.child = null; null !== a; ) {
          if (null !== (e = a.alternate) && null === Gu(e)) {
            t.child = a;
            break;
          }
          (e = a.sibling), (a.sibling = n), (n = a), (a = e);
        }
        hf(t, !0, n, null, i, t.lastEffect);
        break;
      case 'together':
        hf(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function vf(e, t, n) {
  if (
    (null !== e && (t.dependencies = e.dependencies),
    (Jf |= t.lanes),
    0 != (n & t.childLanes))
  ) {
    if (null !== e && t.child !== e.child) throw Error(gr(153));
    if (null !== t.child) {
      for (
        n = rp((e = t.child), e.pendingProps), t.child = n, n.return = t;
        null !== e.sibling;

      )
        (e = e.sibling), ((n = n.sibling = rp(e, e.pendingProps)).return = t);
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
function gf(e, t) {
  if (!Ju)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; null !== t; )
          null !== t.alternate && (n = t), (t = t.sibling);
        null === n ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; null !== n; )
          null !== n.alternate && (r = n), (n = n.sibling);
        null === r
          ? t || null === e.tail
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function bf(e, t, n) {
  var r = t.pendingProps;
  switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
    case 17:
      return Ps(t.type) && Ns(), null;
    case 3:
      return (
        Yu(),
        xs(Os),
        xs(Ss),
        oc(),
        (r = t.stateNode).pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (null !== e && null !== e.child) ||
          (rc(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
        null
      );
    case 5:
      $u(t);
      var a = Vu(Wu.current);
      if (((n = t.type), null !== e && null != t.stateNode))
        of(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (null === t.stateNode) throw Error(gr(166));
          return null;
        }
        if (((e = Vu(Uu.current)), rc(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[us] = t), (r[cs] = i), n)) {
            case 'dialog':
              Hl('cancel', r), Hl('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Hl('load', r);
              break;
            case 'video':
            case 'audio':
              for (e = 0; e < Rl.length; e++) Hl(Rl[e], r);
              break;
            case 'source':
              Hl('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              Hl('error', r), Hl('load', r);
              break;
            case 'details':
              Hl('toggle', r);
              break;
            case 'input':
              fa(r, i), Hl('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Hl('invalid', r);
              break;
            case 'textarea':
              ya(r, i), Hl('invalid', r);
          }
          for (var o in (za(n, i), (e = null), i))
            i.hasOwnProperty(o) &&
              ((a = i[o]),
              'children' === o
                ? 'string' == typeof a
                  ? r.textContent !== a && (e = ['children', a])
                  : 'number' == typeof a &&
                    r.textContent !== '' + a &&
                    (e = ['children', '' + a])
                : yr.hasOwnProperty(o) &&
                  null != a &&
                  'onScroll' === o &&
                  Hl('scroll', r));
          switch (n) {
            case 'input':
              la(r), ha(r, i, !0);
              break;
            case 'textarea':
              la(r), xa(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              'function' == typeof i.onClick && (r.onclick = Kl);
          }
          (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
        } else {
          switch (
            ((o = 9 === a.nodeType ? a : a.ownerDocument),
            e === ka && (e = Sa(n)),
            e === ka
              ? 'script' === n
                ? (((e = o.createElement('div')).innerHTML =
                    '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : 'string' == typeof r.is
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  'select' === n &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[us] = t),
            (e[cs] = r),
            af(e, t),
            (t.stateNode = e),
            (o = ja(n, r)),
            n)
          ) {
            case 'dialog':
              Hl('cancel', e), Hl('close', e), (a = r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Hl('load', e), (a = r);
              break;
            case 'video':
            case 'audio':
              for (a = 0; a < Rl.length; a++) Hl(Rl[a], e);
              a = r;
              break;
            case 'source':
              Hl('error', e), (a = r);
              break;
            case 'img':
            case 'image':
            case 'link':
              Hl('error', e), Hl('load', e), (a = r);
              break;
            case 'details':
              Hl('toggle', e), (a = r);
              break;
            case 'input':
              fa(e, r), (a = ca(e, r)), Hl('invalid', e);
              break;
            case 'option':
              a = va(e, r);
              break;
            case 'select':
              (e._wrapperState = { wasMultiple: !!r.multiple }),
                (a = mr({}, r, { value: void 0 })),
                Hl('invalid', e);
              break;
            case 'textarea':
              ya(e, r), (a = ba(e, r)), Hl('invalid', e);
              break;
            default:
              a = r;
          }
          za(n, a);
          var l = a;
          for (i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              'style' === i
                ? Aa(e, s)
                : 'dangerouslySetInnerHTML' === i
                ? null != (s = s ? s.__html : void 0) && Pa(e, s)
                : 'children' === i
                ? 'string' == typeof s
                  ? ('textarea' !== n || '' !== s) && Na(e, s)
                  : 'number' == typeof s && Na(e, '' + s)
                : 'suppressContentEditableWarning' !== i &&
                  'suppressHydrationWarning' !== i &&
                  'autoFocus' !== i &&
                  (yr.hasOwnProperty(i)
                    ? null != s && 'onScroll' === i && Hl('scroll', e)
                    : null != s && Dr(e, i, s, o));
            }
          switch (n) {
            case 'input':
              la(e), ha(e, r, !1);
              break;
            case 'textarea':
              la(e), xa(e);
              break;
            case 'option':
              null != r.value && e.setAttribute('value', '' + ia(r.value));
              break;
            case 'select':
              (e.multiple = !!r.multiple),
                null != (i = r.value)
                  ? ga(e, !!r.multiple, i, !1)
                  : null != r.defaultValue &&
                    ga(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              'function' == typeof a.onClick && (e.onclick = Kl);
          }
          es(n, r) && (t.flags |= 4);
        }
        null !== t.ref && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && null != t.stateNode) lf(0, t, e.memoizedProps, r);
      else {
        if ('string' != typeof r && null === t.stateNode) throw Error(gr(166));
        (n = Vu(Wu.current)),
          Vu(Uu.current),
          rc(t)
            ? ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[us] = t),
              r.nodeValue !== n && (t.flags |= 4))
            : (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                r,
              ))[us] = t),
              (t.stateNode = r));
      }
      return null;
    case 13:
      return (
        xs(Qu),
        (r = t.memoizedState),
        0 != (64 & t.flags)
          ? ((t.lanes = n), t)
          : ((r = null !== r),
            (n = !1),
            null === e
              ? void 0 !== t.memoizedProps.fallback && rc(t)
              : (n = null !== e.memoizedState),
            r &&
              !n &&
              0 != (2 & t.mode) &&
              ((null === e &&
                !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
              0 != (1 & Qu.current)
                ? 0 === Gf && (Gf = 3)
                : ((0 !== Gf && 3 !== Gf) || (Gf = 4),
                  null === Bf ||
                    (0 == (134217727 & Jf) && 0 == (134217727 & Zf)) ||
                    Nd(Bf, Xf))),
            (r || n) && (t.flags |= 4),
            null)
      );
    case 4:
      return Yu(), null === e && Vl(t.stateNode.containerInfo), null;
    case 10:
      return hu(t), null;
    case 19:
      if ((xs(Qu), null === (r = t.memoizedState))) return null;
      if (((i = 0 != (64 & t.flags)), null === (o = r.rendering)))
        if (i) gf(r, !1);
        else {
          if (0 !== Gf || (null !== e && 0 != (64 & e.flags)))
            for (e = t.child; null !== e; ) {
              if (null !== (o = Gu(e))) {
                for (
                  t.flags |= 64,
                    gf(r, !1),
                    null !== (i = o.updateQueue) &&
                      ((t.updateQueue = i), (t.flags |= 4)),
                    null === r.lastEffect && (t.firstEffect = null),
                    t.lastEffect = r.lastEffect,
                    r = n,
                    n = t.child;
                  null !== n;

                )
                  (e = r),
                    ((i = n).flags &= 2),
                    (i.nextEffect = null),
                    (i.firstEffect = null),
                    (i.lastEffect = null),
                    null === (o = i.alternate)
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          null === e
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ks(Qu, (1 & Qu.current) | 2), t.child;
              }
              e = e.sibling;
            }
          null !== r.tail &&
            eu() > rd &&
            ((t.flags |= 64), (i = !0), gf(r, !1), (t.lanes = 33554432));
        }
      else {
        if (!i)
          if (null !== (e = Gu(o))) {
            if (
              ((t.flags |= 64),
              (i = !0),
              null !== (n = e.updateQueue) &&
                ((t.updateQueue = n), (t.flags |= 4)),
              gf(r, !0),
              null === r.tail && 'hidden' === r.tailMode && !o.alternate && !Ju)
            )
              return (
                null !== (t = t.lastEffect = r.lastEffect) &&
                  (t.nextEffect = null),
                null
              );
          } else
            2 * eu() - r.renderingStartTime > rd &&
              1073741824 !== n &&
              ((t.flags |= 64), (i = !0), gf(r, !1), (t.lanes = 33554432));
        r.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : (null !== (n = r.last) ? (n.sibling = o) : (t.child = o),
            (r.last = o));
      }
      return null !== r.tail
        ? ((n = r.tail),
          (r.rendering = n),
          (r.tail = n.sibling),
          (r.lastEffect = t.lastEffect),
          (r.renderingStartTime = eu()),
          (n.sibling = null),
          (t = Qu.current),
          ks(Qu, i ? (1 & t) | 2 : 1 & t),
          n)
        : null;
    case 23:
    case 24:
      return (
        Md(),
        null !== e &&
          (null !== e.memoizedState) != (null !== t.memoizedState) &&
          'unstable-defer-without-hiding' !== r.mode &&
          (t.flags |= 4),
        null
      );
  }
  throw Error(gr(156, t.tag));
}
function yf(e) {
  switch (e.tag) {
    case 1:
      Ps(e.type) && Ns();
      var t = e.flags;
      return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
    case 3:
      if ((Yu(), xs(Os), xs(Ss), oc(), 0 != (64 & (t = e.flags))))
        throw Error(gr(285));
      return (e.flags = (-4097 & t) | 64), e;
    case 5:
      return $u(e), null;
    case 13:
      return (
        xs(Qu), 4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
      );
    case 19:
      return xs(Qu), null;
    case 4:
      return Yu(), null;
    case 10:
      return hu(e), null;
    case 23:
    case 24:
      return Md(), null;
    default:
      return null;
  }
}
function wf(e, t) {
  try {
    var n = '',
      r = t;
    do {
      (n += ra(r)), (r = r.return);
    } while (r);
    var a = n;
  } catch (i) {
    a = '\nError generating stack: ' + i.message + '\n' + i.stack;
  }
  return { value: e, source: t, stack: a };
}
function xf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
(af = function (e, t) {
  for (var n = t.child; null !== n; ) {
    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
    else if (4 !== n.tag && null !== n.child) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; null === n.sibling; ) {
      if (null === n.return || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}),
  (of = function (e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      (e = t.stateNode), Vu(Uu.current);
      var i,
        o = null;
      switch (n) {
        case 'input':
          (a = ca(e, a)), (r = ca(e, r)), (o = []);
          break;
        case 'option':
          (a = va(e, a)), (r = va(e, r)), (o = []);
          break;
        case 'select':
          (a = mr({}, a, { value: void 0 })),
            (r = mr({}, r, { value: void 0 })),
            (o = []);
          break;
        case 'textarea':
          (a = ba(e, a)), (r = ba(e, r)), (o = []);
          break;
        default:
          'function' != typeof a.onClick &&
            'function' == typeof r.onClick &&
            (e.onclick = Kl);
      }
      for (u in (za(n, r), (n = null), a))
        if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
          if ('style' === u) {
            var l = a[u];
            for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
          } else
            'dangerouslySetInnerHTML' !== u &&
              'children' !== u &&
              'suppressContentEditableWarning' !== u &&
              'suppressHydrationWarning' !== u &&
              'autoFocus' !== u &&
              (yr.hasOwnProperty(u)
                ? o || (o = [])
                : (o = o || []).push(u, null));
      for (u in r) {
        var s = r[u];
        if (
          ((l = null != a ? a[u] : void 0),
          r.hasOwnProperty(u) && s !== l && (null != s || null != l))
        )
          if ('style' === u)
            if (l) {
              for (i in l)
                !l.hasOwnProperty(i) ||
                  (s && s.hasOwnProperty(i)) ||
                  (n || (n = {}), (n[i] = ''));
              for (i in s)
                s.hasOwnProperty(i) &&
                  l[i] !== s[i] &&
                  (n || (n = {}), (n[i] = s[i]));
            } else n || (o || (o = []), o.push(u, n)), (n = s);
          else
            'dangerouslySetInnerHTML' === u
              ? ((s = s ? s.__html : void 0),
                (l = l ? l.__html : void 0),
                null != s && l !== s && (o = o || []).push(u, s))
              : 'children' === u
              ? ('string' != typeof s && 'number' != typeof s) ||
                (o = o || []).push(u, '' + s)
              : 'suppressContentEditableWarning' !== u &&
                'suppressHydrationWarning' !== u &&
                (yr.hasOwnProperty(u)
                  ? (null != s && 'onScroll' === u && Hl('scroll', e),
                    o || l === s || (o = []))
                  : 'object' == typeof s && null !== s && s.$$typeof === Xr
                  ? s.toString()
                  : (o = o || []).push(u, s));
      }
      n && (o = o || []).push('style', n);
      var u = o;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  }),
  (lf = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  });
var kf = 'function' == typeof WeakMap ? WeakMap : Map;
function Ef(e, t, n) {
  ((n = xu(-1, n)).tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ld || ((ld = !0), (sd = r)), xf(0, t);
    }),
    n
  );
}
function Sf(e, t, n) {
  (n = xu(-1, n)).tag = 3;
  var r = e.type.getDerivedStateFromError;
  if ('function' == typeof r) {
    var a = t.value;
    n.payload = function () {
      return xf(0, t), r(a);
    };
  }
  var i = e.stateNode;
  return (
    null !== i &&
      'function' == typeof i.componentDidCatch &&
      (n.callback = function () {
        'function' != typeof r &&
          (null === ud ? (ud = new Set([this])) : ud.add(this), xf(0, t));
        var e = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: null !== e ? e : '',
        });
      }),
    n
  );
}
var Of = 'function' == typeof WeakSet ? WeakSet : Set;
function _f(e) {
  var t = e.ref;
  if (null !== t)
    if ('function' == typeof t)
      try {
        t(null);
      } catch (n) {
        Kd(e, n);
      }
    else t.current = null;
}
function Cf(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
    case 5:
    case 6:
    case 4:
    case 17:
      return;
    case 1:
      if (256 & t.flags && null !== e) {
        var n = e.memoizedProps,
          r = e.memoizedState;
        (t = (e = t.stateNode).getSnapshotBeforeUpdate(
          t.elementType === t.type ? n : su(t.type, n),
          r,
        )),
          (e.__reactInternalSnapshotBeforeUpdate = t);
      }
      return;
    case 3:
      return void (256 & t.flags && as(t.stateNode.containerInfo));
  }
  throw Error(gr(163));
}
function Pf(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
        e = t = t.next;
        do {
          if (3 == (3 & e.tag)) {
            var r = e.create;
            e.destroy = r();
          }
          e = e.next;
        } while (e !== t);
      }
      if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
        e = t = t.next;
        do {
          var a = e;
          (r = a.next),
            0 != (4 & (a = a.tag)) && 0 != (1 & a) && (Qd(n, e), $d(n, e)),
            (e = r);
        } while (e !== t);
      }
      return;
    case 1:
      return (
        (e = n.stateNode),
        4 & n.flags &&
          (null === t
            ? e.componentDidMount()
            : ((r =
                n.elementType === n.type
                  ? t.memoizedProps
                  : su(n.type, t.memoizedProps)),
              e.componentDidUpdate(
                r,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate,
              ))),
        void (null !== (t = n.updateQueue) && Ou(n, t, e))
      );
    case 3:
      if (null !== (t = n.updateQueue)) {
        if (((e = null), null !== n.child))
          switch (n.child.tag) {
            case 5:
            case 1:
              e = n.child.stateNode;
          }
        Ou(n, t, e);
      }
      return;
    case 5:
      return (
        (e = n.stateNode),
        void (
          null === t &&
          4 & n.flags &&
          es(n.type, n.memoizedProps) &&
          e.focus()
        )
      );
    case 6:
    case 4:
    case 12:
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
    case 13:
      return void (
        null === n.memoizedState &&
        ((n = n.alternate),
        null !== n &&
          ((n = n.memoizedState),
          null !== n && ((n = n.dehydrated), null !== n && Ai(n))))
      );
  }
  throw Error(gr(163));
}
function Nf(e, t) {
  for (var n = e; ; ) {
    if (5 === n.tag) {
      var r = n.stateNode;
      if (t)
        'function' == typeof (r = r.style).setProperty
          ? r.setProperty('display', 'none', 'important')
          : (r.display = 'none');
      else {
        r = n.stateNode;
        var a = n.memoizedProps.style;
        (a = null != a && a.hasOwnProperty('display') ? a.display : null),
          (r.style.display = La('display', a));
      }
    } else if (6 === n.tag) n.stateNode.nodeValue = t ? '' : n.memoizedProps;
    else if (
      ((23 !== n.tag && 24 !== n.tag) || null === n.memoizedState || n === e) &&
      null !== n.child
    ) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; null === n.sibling; ) {
      if (null === n.return || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function Tf(e, t) {
  if (zs && 'function' == typeof zs.onCommitFiberUnmount)
    try {
      zs.onCommitFiberUnmount(Ms, t);
    } catch (i) {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
        var n = (e = e.next);
        do {
          var r = n,
            a = r.destroy;
          if (((r = r.tag), void 0 !== a))
            if (0 != (4 & r)) Qd(t, n);
            else {
              r = t;
              try {
                a();
              } catch (i) {
                Kd(r, i);
              }
            }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if ((_f(t), 'function' == typeof (e = t.stateNode).componentWillUnmount))
        try {
          (e.props = t.memoizedProps),
            (e.state = t.memoizedState),
            e.componentWillUnmount();
        } catch (i) {
          Kd(t, i);
        }
      break;
    case 5:
      _f(t);
      break;
    case 4:
      jf(e, t);
  }
}
function Df(e) {
  (e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null);
}
function Lf(e) {
  return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function Af(e) {
  e: {
    for (var t = e.return; null !== t; ) {
      if (Lf(t)) break e;
      t = t.return;
    }
    throw Error(gr(160));
  }
  var n = t;
  switch (((t = n.stateNode), n.tag)) {
    case 5:
      var r = !1;
      break;
    case 3:
    case 4:
      (t = t.containerInfo), (r = !0);
      break;
    default:
      throw Error(gr(161));
  }
  16 & n.flags && (Na(t, ''), (n.flags &= -17));
  e: t: for (n = e; ; ) {
    for (; null === n.sibling; ) {
      if (null === n.return || Lf(n.return)) {
        n = null;
        break e;
      }
      n = n.return;
    }
    for (
      n.sibling.return = n.return, n = n.sibling;
      5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

    ) {
      if (2 & n.flags) continue t;
      if (null === n.child || 4 === n.tag) continue t;
      (n.child.return = n), (n = n.child);
    }
    if (!(2 & n.flags)) {
      n = n.stateNode;
      break e;
    }
  }
  r ? Mf(e, n, t) : zf(e, n, t);
}
function Mf(e, t, n) {
  var r = e.tag,
    a = 5 === r || 6 === r;
  if (a)
    (e = a ? e.stateNode : e.stateNode.instance),
      t
        ? 8 === n.nodeType
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (8 === n.nodeType
            ? (t = n.parentNode).insertBefore(e, n)
            : (t = n).appendChild(e),
          null != (n = n._reactRootContainer) ||
            null !== t.onclick ||
            (t.onclick = Kl));
  else if (4 !== r && null !== (e = e.child))
    for (Mf(e, t, n), e = e.sibling; null !== e; ) Mf(e, t, n), (e = e.sibling);
}
function zf(e, t, n) {
  var r = e.tag,
    a = 5 === r || 6 === r;
  if (a)
    (e = a ? e.stateNode : e.stateNode.instance),
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (4 !== r && null !== (e = e.child))
    for (zf(e, t, n), e = e.sibling; null !== e; ) zf(e, t, n), (e = e.sibling);
}
function jf(e, t) {
  for (var n, r, a = t, i = !1; ; ) {
    if (!i) {
      i = a.return;
      e: for (;;) {
        if (null === i) throw Error(gr(160));
        switch (((n = i.stateNode), i.tag)) {
          case 5:
            r = !1;
            break e;
          case 3:
          case 4:
            (n = n.containerInfo), (r = !0);
            break e;
        }
        i = i.return;
      }
      i = !0;
    }
    if (5 === a.tag || 6 === a.tag) {
      e: for (var o = e, l = a, s = l; ; )
        if ((Tf(o, s), null !== s.child && 4 !== s.tag))
          (s.child.return = s), (s = s.child);
        else {
          if (s === l) break e;
          for (; null === s.sibling; ) {
            if (null === s.return || s.return === l) break e;
            s = s.return;
          }
          (s.sibling.return = s.return), (s = s.sibling);
        }
      r
        ? ((o = n),
          (l = a.stateNode),
          8 === o.nodeType ? o.parentNode.removeChild(l) : o.removeChild(l))
        : n.removeChild(a.stateNode);
    } else if (4 === a.tag) {
      if (null !== a.child) {
        (n = a.stateNode.containerInfo),
          (r = !0),
          (a.child.return = a),
          (a = a.child);
        continue;
      }
    } else if ((Tf(e, a), null !== a.child)) {
      (a.child.return = a), (a = a.child);
      continue;
    }
    if (a === t) break;
    for (; null === a.sibling; ) {
      if (null === a.return || a.return === t) return;
      4 === (a = a.return).tag && (i = !1);
    }
    (a.sibling.return = a.return), (a = a.sibling);
  }
}
function Rf(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var n = t.updateQueue;
      if (null !== (n = null !== n ? n.lastEffect : null)) {
        var r = (n = n.next);
        do {
          3 == (3 & r.tag) &&
            ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()),
            (r = r.next);
        } while (r !== n);
      }
      return;
    case 1:
    case 12:
    case 17:
      return;
    case 5:
      if (null != (n = t.stateNode)) {
        r = t.memoizedProps;
        var a = null !== e ? e.memoizedProps : r;
        e = t.type;
        var i = t.updateQueue;
        if (((t.updateQueue = null), null !== i)) {
          for (
            n[cs] = r,
              'input' === e && 'radio' === r.type && null != r.name && da(n, r),
              ja(e, a),
              t = ja(e, r),
              a = 0;
            a < i.length;
            a += 2
          ) {
            var o = i[a],
              l = i[a + 1];
            'style' === o
              ? Aa(n, l)
              : 'dangerouslySetInnerHTML' === o
              ? Pa(n, l)
              : 'children' === o
              ? Na(n, l)
              : Dr(n, o, l, t);
          }
          switch (e) {
            case 'input':
              pa(n, r);
              break;
            case 'textarea':
              wa(n, r);
              break;
            case 'select':
              (e = n._wrapperState.wasMultiple),
                (n._wrapperState.wasMultiple = !!r.multiple),
                null != (i = r.value)
                  ? ga(n, !!r.multiple, i, !1)
                  : e !== !!r.multiple &&
                    (null != r.defaultValue
                      ? ga(n, !!r.multiple, r.defaultValue, !0)
                      : ga(n, !!r.multiple, r.multiple ? [] : '', !1));
          }
        }
      }
      return;
    case 6:
      if (null === t.stateNode) throw Error(gr(162));
      return void (t.stateNode.nodeValue = t.memoizedProps);
    case 3:
      return void (
        (n = t.stateNode).hydrate && ((n.hydrate = !1), Ai(n.containerInfo))
      );
    case 13:
      return (
        null !== t.memoizedState && ((nd = eu()), Nf(t.child, !0)), void If(t)
      );
    case 19:
      return void If(t);
    case 23:
    case 24:
      return void Nf(t, null !== t.memoizedState);
  }
  throw Error(gr(163));
}
function If(e) {
  var t = e.updateQueue;
  if (null !== t) {
    e.updateQueue = null;
    var n = e.stateNode;
    null === n && (n = e.stateNode = new Of()),
      t.forEach(function (t) {
        var r = Zd.bind(null, e, t);
        n.has(t) || (n.add(t), t.then(r, r));
      });
  }
}
function Ff(e, t) {
  return (
    null !== e &&
    (null === (e = e.memoizedState) || null !== e.dehydrated) &&
    null !== (t = t.memoizedState) &&
    null === t.dehydrated
  );
}
var Uf = Math.ceil,
  Hf = Lr.ReactCurrentDispatcher,
  Wf = Lr.ReactCurrentOwner,
  Vf = 0,
  Bf = null,
  Yf = null,
  Xf = 0,
  $f = 0,
  Qf = ws(0),
  Gf = 0,
  qf = null,
  Kf = 0,
  Jf = 0,
  Zf = 0,
  ed = 0,
  td = null,
  nd = 0,
  rd = 1 / 0;
function ad() {
  rd = eu() + 500;
}
var id,
  od = null,
  ld = !1,
  sd = null,
  ud = null,
  cd = !1,
  fd = null,
  dd = 90,
  pd = [],
  hd = [],
  md = null,
  vd = 0,
  gd = null,
  bd = -1,
  yd = 0,
  wd = 0,
  xd = null,
  kd = !1;
function Ed() {
  return 0 != (48 & Vf) ? eu() : -1 !== bd ? bd : (bd = eu());
}
function Sd(e) {
  if (0 == (2 & (e = e.mode))) return 1;
  if (0 == (4 & e)) return 99 === tu() ? 1 : 2;
  if ((0 === yd && (yd = Kf), 0 !== lu.transition)) {
    0 !== wd && (wd = null !== td ? td.pendingLanes : 0), (e = yd);
    var t = 4186112 & ~wd;
    return (
      0 === (t &= -t) && 0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192), t
    );
  }
  return (
    (e = tu()),
    0 != (4 & Vf) && 98 === e
      ? (e = Ki(12, yd))
      : (e = Ki(
          (e = (function (e) {
            switch (e) {
              case 99:
                return 15;
              case 98:
                return 10;
              case 97:
              case 96:
                return 8;
              case 95:
                return 2;
              default:
                return 0;
            }
          })(e)),
          yd,
        )),
    e
  );
}
function Od(e, t, n) {
  if (50 < vd) throw ((vd = 0), (gd = null), Error(gr(185)));
  if (null === (e = _d(e, t))) return null;
  eo(e, t, n), e === Bf && ((Zf |= t), 4 === Gf && Nd(e, Xf));
  var r = tu();
  1 === t
    ? 0 != (8 & Vf) && 0 == (48 & Vf)
      ? Td(e)
      : (Cd(e, n), 0 === Vf && (ad(), iu()))
    : (0 == (4 & Vf) ||
        (98 !== r && 99 !== r) ||
        (null === md ? (md = new Set([e])) : md.add(e)),
      Cd(e, n)),
    (td = e);
}
function _d(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
    (e.childLanes |= t),
      null !== (n = e.alternate) && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return 3 === n.tag ? n.stateNode : null;
}
function Cd(e, t) {
  for (
    var n = e.callbackNode,
      r = e.suspendedLanes,
      a = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - to(o),
      s = 1 << l,
      u = i[l];
    if (-1 === u) {
      if (0 == (s & r) || 0 != (s & a)) {
        (u = t), Qi(s);
        var c = $i;
        i[l] = 10 <= c ? u + 250 : 6 <= c ? u + 5e3 : -1;
      }
    } else u <= t && (e.expiredLanes |= s);
    o &= ~s;
  }
  if (((r = Gi(e, e === Bf ? Xf : 0)), (t = $i), 0 === r))
    null !== n &&
      (n !== Qs && Is(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else {
    if (null !== n) {
      if (e.callbackPriority === t) return;
      n !== Qs && Is(n);
    }
    15 === t
      ? ((n = Td.bind(null, e)),
        null === qs ? ((qs = [n]), (Ks = Rs(Vs, ou))) : qs.push(n),
        (n = Qs))
      : 14 === t
      ? (n = au(99, Td.bind(null, e)))
      : ((n = (function (e) {
          switch (e) {
            case 15:
            case 14:
              return 99;
            case 13:
            case 12:
            case 11:
            case 10:
              return 98;
            case 9:
            case 8:
            case 7:
            case 6:
            case 4:
            case 5:
              return 97;
            case 3:
            case 2:
            case 1:
              return 95;
            case 0:
              return 90;
            default:
              throw Error(gr(358, e));
          }
        })(t)),
        (n = au(n, Pd.bind(null, e)))),
      (e.callbackPriority = t),
      (e.callbackNode = n);
  }
}
function Pd(e) {
  if (((bd = -1), (wd = yd = 0), 0 != (48 & Vf))) throw Error(gr(327));
  var t = e.callbackNode;
  if (Xd() && e.callbackNode !== t) return null;
  var n = Gi(e, e === Bf ? Xf : 0);
  if (0 === n) return null;
  var r = n,
    a = Vf;
  Vf |= 16;
  var i = Rd();
  for ((Bf === e && Xf === r) || (ad(), zd(e, r)); ; )
    try {
      Ud();
      break;
    } catch (Gn) {
      jd(e, Gn);
    }
  if (
    (pu(),
    (Hf.current = i),
    (Vf = a),
    null !== Yf ? (r = 0) : ((Bf = null), (Xf = 0), (r = Gf)),
    0 != (Kf & Zf))
  )
    zd(e, 0);
  else if (0 !== r) {
    if (
      (2 === r &&
        ((Vf |= 64),
        e.hydrate && ((e.hydrate = !1), as(e.containerInfo)),
        0 !== (n = qi(e)) && (r = Id(e, n))),
      1 === r)
    )
      throw ((t = qf), zd(e, 0), Nd(e, n), Cd(e, eu()), t);
    switch (
      ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
    ) {
      case 0:
      case 1:
        throw Error(gr(345));
      case 2:
      case 5:
        Vd(e);
        break;
      case 3:
        if ((Nd(e, n), (62914560 & n) === n && 10 < (r = nd + 500 - eu()))) {
          if (0 !== Gi(e, 0)) break;
          if (((a = e.suspendedLanes) & n) !== n) {
            Ed(), (e.pingedLanes |= e.suspendedLanes & a);
            break;
          }
          e.timeoutHandle = ns(Vd.bind(null, e), r);
          break;
        }
        Vd(e);
        break;
      case 4:
        if ((Nd(e, n), (4186112 & n) === n)) break;
        for (r = e.eventTimes, a = -1; 0 < n; ) {
          var o = 31 - to(n);
          (i = 1 << o), (o = r[o]) > a && (a = o), (n &= ~i);
        }
        if (
          ((n = a),
          10 <
            (n =
              (120 > (n = eu() - n)
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * Uf(n / 1960)) - n))
        ) {
          e.timeoutHandle = ns(Vd.bind(null, e), n);
          break;
        }
        Vd(e);
        break;
      default:
        throw Error(gr(329));
    }
  }
  return Cd(e, eu()), e.callbackNode === t ? Pd.bind(null, e) : null;
}
function Nd(e, t) {
  for (
    t &= ~ed,
      t &= ~Zf,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - to(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Td(e) {
  if (0 != (48 & Vf)) throw Error(gr(327));
  if ((Xd(), e === Bf && 0 != (e.expiredLanes & Xf))) {
    var t = Xf,
      n = Id(e, t);
    0 != (Kf & Zf) && (n = Id(e, (t = Gi(e, t))));
  } else n = Id(e, (t = Gi(e, 0)));
  if (
    (0 !== e.tag &&
      2 === n &&
      ((Vf |= 64),
      e.hydrate && ((e.hydrate = !1), as(e.containerInfo)),
      0 !== (t = qi(e)) && (n = Id(e, t))),
    1 === n)
  )
    throw ((n = qf), zd(e, 0), Nd(e, t), Cd(e, eu()), n);
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Vd(e),
    Cd(e, eu()),
    null
  );
}
function Dd(e, t) {
  var n = Vf;
  Vf |= 1;
  try {
    return e(t);
  } finally {
    0 === (Vf = n) && (ad(), iu());
  }
}
function Ld(e, t) {
  var n = Vf;
  (Vf &= -2), (Vf |= 8);
  try {
    return e(t);
  } finally {
    0 === (Vf = n) && (ad(), iu());
  }
}
function Ad(e, t) {
  ks(Qf, $f), ($f |= t), (Kf |= t);
}
function Md() {
  ($f = Qf.current), xs(Qf);
}
function zd(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((-1 !== n && ((e.timeoutHandle = -1), rs(n)), null !== Yf))
    for (n = Yf.return; null !== n; ) {
      var r = n;
      switch (r.tag) {
        case 1:
          null != (r = r.type.childContextTypes) && Ns();
          break;
        case 3:
          Yu(), xs(Os), xs(Ss), oc();
          break;
        case 5:
          $u(r);
          break;
        case 4:
          Yu();
          break;
        case 13:
        case 19:
          xs(Qu);
          break;
        case 10:
          hu(r);
          break;
        case 23:
        case 24:
          Md();
      }
      n = n.return;
    }
  (Bf = e),
    (Yf = rp(e.current, null)),
    (Xf = $f = Kf = t),
    (Gf = 0),
    (qf = null),
    (ed = Zf = Jf = 0);
}
function jd(e, t) {
  for (;;) {
    var n = Yf;
    try {
      if ((pu(), (lc.current = Wc), pc)) {
        for (var r = cc.memoizedState; null !== r; ) {
          var a = r.queue;
          null !== a && (a.pending = null), (r = r.next);
        }
        pc = !1;
      }
      if (
        ((uc = 0),
        (dc = fc = cc = null),
        (hc = !1),
        (Wf.current = null),
        null === n || null === n.return)
      ) {
        (Gf = 1), (qf = t), (Yf = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          l = n,
          s = t;
        if (
          ((t = Xf),
          (l.flags |= 2048),
          (l.firstEffect = l.lastEffect = null),
          null !== s && 'object' == typeof s && 'function' == typeof s.then)
        ) {
          var u = s;
          if (0 == (2 & l.mode)) {
            var c = l.alternate;
            c
              ? ((l.updateQueue = c.updateQueue),
                (l.memoizedState = c.memoizedState),
                (l.lanes = c.lanes))
              : ((l.updateQueue = null), (l.memoizedState = null));
          }
          var f = 0 != (1 & Qu.current),
            d = o;
          do {
            var p;
            if ((p = 13 === d.tag)) {
              var h = d.memoizedState;
              if (null !== h) p = null !== h.dehydrated;
              else {
                var m = d.memoizedProps;
                p =
                  void 0 !== m.fallback &&
                  (!0 !== m.unstable_avoidThisFallback || !f);
              }
            }
            if (p) {
              var v = d.updateQueue;
              if (null === v) {
                var g = new Set();
                g.add(u), (d.updateQueue = g);
              } else v.add(u);
              if (0 == (2 & d.mode)) {
                if (
                  ((d.flags |= 64),
                  (l.flags |= 16384),
                  (l.flags &= -2981),
                  1 === l.tag)
                )
                  if (null === l.alternate) l.tag = 17;
                  else {
                    var b = xu(-1, 1);
                    (b.tag = 2), ku(l, b);
                  }
                l.lanes |= 1;
                break e;
              }
              (s = void 0), (l = t);
              var y = i.pingCache;
              if (
                (null === y
                  ? ((y = i.pingCache = new kf()), (s = new Set()), y.set(u, s))
                  : void 0 === (s = y.get(u)) && ((s = new Set()), y.set(u, s)),
                !s.has(l))
              ) {
                s.add(l);
                var w = Jd.bind(null, i, u, l);
                u.then(w, w);
              }
              (d.flags |= 4096), (d.lanes = t);
              break e;
            }
            d = d.return;
          } while (null !== d);
          s = Error(
            (aa(l.type) || 'A React component') +
              ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.',
          );
        }
        5 !== Gf && (Gf = 2), (s = wf(s, l)), (d = o);
        do {
          switch (d.tag) {
            case 3:
              (i = s),
                (d.flags |= 4096),
                (t &= -t),
                (d.lanes |= t),
                Eu(d, Ef(0, i, t));
              break e;
            case 1:
              i = s;
              var x = d.type,
                k = d.stateNode;
              if (
                0 == (64 & d.flags) &&
                ('function' == typeof x.getDerivedStateFromError ||
                  (null !== k &&
                    'function' == typeof k.componentDidCatch &&
                    (null === ud || !ud.has(k))))
              ) {
                (d.flags |= 4096),
                  (t &= -t),
                  (d.lanes |= t),
                  Eu(d, Sf(d, i, t));
                break e;
              }
          }
          d = d.return;
        } while (null !== d);
      }
      Wd(n);
    } catch (E) {
      (t = E), Yf === n && null !== n && (Yf = n = n.return);
      continue;
    }
    break;
  }
}
function Rd() {
  var e = Hf.current;
  return (Hf.current = Wc), null === e ? Wc : e;
}
function Id(e, t) {
  var n = Vf;
  Vf |= 16;
  var r = Rd();
  for ((Bf === e && Xf === t) || zd(e, t); ; )
    try {
      Fd();
      break;
    } catch (vg) {
      jd(e, vg);
    }
  if ((pu(), (Vf = n), (Hf.current = r), null !== Yf)) throw Error(gr(261));
  return (Bf = null), (Xf = 0), Gf;
}
function Fd() {
  for (; null !== Yf; ) Hd(Yf);
}
function Ud() {
  for (; null !== Yf && !Fs(); ) Hd(Yf);
}
function Hd(e) {
  var t = id(e.alternate, e, $f);
  (e.memoizedProps = e.pendingProps),
    null === t ? Wd(e) : (Yf = t),
    (Wf.current = null);
}
function Wd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), 0 == (2048 & t.flags))) {
      if (null !== (n = bf(n, t, $f))) return void (Yf = n);
      if (
        (24 !== (n = t).tag && 23 !== n.tag) ||
        null === n.memoizedState ||
        0 != (1073741824 & $f) ||
        0 == (4 & n.mode)
      ) {
        for (var r = 0, a = n.child; null !== a; )
          (r |= a.lanes | a.childLanes), (a = a.sibling);
        n.childLanes = r;
      }
      null !== e &&
        0 == (2048 & e.flags) &&
        (null === e.firstEffect && (e.firstEffect = t.firstEffect),
        null !== t.lastEffect &&
          (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect),
          (e.lastEffect = t.lastEffect)),
        1 < t.flags &&
          (null !== e.lastEffect
            ? (e.lastEffect.nextEffect = t)
            : (e.firstEffect = t),
          (e.lastEffect = t)));
    } else {
      if (null !== (n = yf(t))) return (n.flags &= 2047), void (Yf = n);
      null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
    }
    if (null !== (t = t.sibling)) return void (Yf = t);
    Yf = t = e;
  } while (null !== t);
  0 === Gf && (Gf = 5);
}
function Vd(e) {
  var t = tu();
  return ru(99, Bd.bind(null, e, t)), null;
}
function Bd(e, t) {
  do {
    Xd();
  } while (null !== fd);
  if (0 != (48 & Vf)) throw Error(gr(327));
  var n = e.finishedWork;
  if (null === n) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(gr(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes,
    a = r,
    i = e.pendingLanes & ~a;
  (e.pendingLanes = a),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= a),
    (e.mutableReadLanes &= a),
    (e.entangledLanes &= a),
    (a = e.entanglements);
  for (var o = e.eventTimes, l = e.expirationTimes; 0 < i; ) {
    var s = 31 - to(i),
      u = 1 << s;
    (a[s] = 0), (o[s] = -1), (l[s] = -1), (i &= ~u);
  }
  if (
    (null !== md && 0 == (24 & r) && md.has(e) && md.delete(e),
    e === Bf && ((Yf = Bf = null), (Xf = 0)),
    1 < n.flags
      ? null !== n.lastEffect
        ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
        : (r = n)
      : (r = n.firstEffect),
    null !== r)
  ) {
    if (
      ((a = Vf), (Vf |= 32), (Wf.current = null), (Jl = oo), Pl((o = Cl())))
    ) {
      if ('selectionStart' in o)
        l = { start: o.selectionStart, end: o.selectionEnd };
      else
        e: if (
          ((l = ((l = o.ownerDocument) && l.defaultView) || window),
          (u = l.getSelection && l.getSelection()) && 0 !== u.rangeCount)
        ) {
          (l = u.anchorNode),
            (i = u.anchorOffset),
            (s = u.focusNode),
            (u = u.focusOffset);
          try {
            l.nodeType, s.nodeType;
          } catch (O) {
            l = null;
            break e;
          }
          var c = 0,
            f = -1,
            d = -1,
            p = 0,
            h = 0,
            m = o,
            v = null;
          t: for (;;) {
            for (
              var g;
              m !== l || (0 !== i && 3 !== m.nodeType) || (f = c + i),
                m !== s || (0 !== u && 3 !== m.nodeType) || (d = c + u),
                3 === m.nodeType && (c += m.nodeValue.length),
                null !== (g = m.firstChild);

            )
              (v = m), (m = g);
            for (;;) {
              if (m === o) break t;
              if (
                (v === l && ++p === i && (f = c),
                v === s && ++h === u && (d = c),
                null !== (g = m.nextSibling))
              )
                break;
              v = (m = v).parentNode;
            }
            m = g;
          }
          l = -1 === f || -1 === d ? null : { start: f, end: d };
        } else l = null;
      l = l || { start: 0, end: 0 };
    } else l = null;
    (Zl = { focusedElem: o, selectionRange: l }),
      (oo = !1),
      (xd = null),
      (kd = !1),
      (od = r);
    do {
      try {
        Yd();
      } catch (O) {
        if (null === od) throw Error(gr(330));
        Kd(od, O), (od = od.nextEffect);
      }
    } while (null !== od);
    (xd = null), (od = r);
    do {
      try {
        for (o = e; null !== od; ) {
          var b = od.flags;
          if ((16 & b && Na(od.stateNode, ''), 128 & b)) {
            var y = od.alternate;
            if (null !== y) {
              var w = y.ref;
              null !== w &&
                ('function' == typeof w ? w(null) : (w.current = null));
            }
          }
          switch (1038 & b) {
            case 2:
              Af(od), (od.flags &= -3);
              break;
            case 6:
              Af(od), (od.flags &= -3), Rf(od.alternate, od);
              break;
            case 1024:
              od.flags &= -1025;
              break;
            case 1028:
              (od.flags &= -1025), Rf(od.alternate, od);
              break;
            case 4:
              Rf(od.alternate, od);
              break;
            case 8:
              jf(o, (l = od));
              var x = l.alternate;
              Df(l), null !== x && Df(x);
          }
          od = od.nextEffect;
        }
      } catch (O) {
        if (null === od) throw Error(gr(330));
        Kd(od, O), (od = od.nextEffect);
      }
    } while (null !== od);
    if (
      ((w = Zl),
      (y = Cl()),
      (b = w.focusedElem),
      (o = w.selectionRange),
      y !== b && b && b.ownerDocument && _l(b.ownerDocument.documentElement, b))
    ) {
      null !== o &&
        Pl(b) &&
        ((y = o.start),
        void 0 === (w = o.end) && (w = y),
        'selectionStart' in b
          ? ((b.selectionStart = y),
            (b.selectionEnd = Math.min(w, b.value.length)))
          : (w = ((y = b.ownerDocument || document) && y.defaultView) || window)
              .getSelection &&
            ((w = w.getSelection()),
            (l = b.textContent.length),
            (x = Math.min(o.start, l)),
            (o = void 0 === o.end ? x : Math.min(o.end, l)),
            !w.extend && x > o && ((l = o), (o = x), (x = l)),
            (l = Ol(b, x)),
            (i = Ol(b, o)),
            l &&
              i &&
              (1 !== w.rangeCount ||
                w.anchorNode !== l.node ||
                w.anchorOffset !== l.offset ||
                w.focusNode !== i.node ||
                w.focusOffset !== i.offset) &&
              ((y = y.createRange()).setStart(l.node, l.offset),
              w.removeAllRanges(),
              x > o
                ? (w.addRange(y), w.extend(i.node, i.offset))
                : (y.setEnd(i.node, i.offset), w.addRange(y))))),
        (y = []);
      for (w = b; (w = w.parentNode); )
        1 === w.nodeType &&
          y.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
      for ('function' == typeof b.focus && b.focus(), b = 0; b < y.length; b++)
        ((w = y[b]).element.scrollLeft = w.left), (w.element.scrollTop = w.top);
    }
    (oo = !!Jl), (Zl = Jl = null), (e.current = n), (od = r);
    do {
      try {
        for (b = e; null !== od; ) {
          var k = od.flags;
          if ((36 & k && Pf(b, od.alternate, od), 128 & k)) {
            y = void 0;
            var E = od.ref;
            if (null !== E) {
              var S = od.stateNode;
              od.tag, (y = S), 'function' == typeof E ? E(y) : (E.current = y);
            }
          }
          od = od.nextEffect;
        }
      } catch (O) {
        if (null === od) throw Error(gr(330));
        Kd(od, O), (od = od.nextEffect);
      }
    } while (null !== od);
    (od = null), Gs(), (Vf = a);
  } else e.current = n;
  if (cd) (cd = !1), (fd = e), (dd = t);
  else
    for (od = r; null !== od; )
      (t = od.nextEffect),
        (od.nextEffect = null),
        8 & od.flags && (((k = od).sibling = null), (k.stateNode = null)),
        (od = t);
  if (
    (0 === (r = e.pendingLanes) && (ud = null),
    1 === r ? (e === gd ? vd++ : ((vd = 0), (gd = e))) : (vd = 0),
    (n = n.stateNode),
    zs && 'function' == typeof zs.onCommitFiberRoot)
  )
    try {
      zs.onCommitFiberRoot(Ms, n, void 0, 64 == (64 & n.current.flags));
    } catch (O) {}
  if ((Cd(e, eu()), ld)) throw ((ld = !1), (e = sd), (sd = null), e);
  return 0 != (8 & Vf) || iu(), null;
}
function Yd() {
  for (; null !== od; ) {
    var e = od.alternate;
    kd ||
      null === xd ||
      (0 != (8 & od.flags)
        ? fi(od, xd) && (kd = !0)
        : 13 === od.tag && Ff(e, od) && fi(od, xd) && (kd = !0));
    var t = od.flags;
    0 != (256 & t) && Cf(e, od),
      0 == (512 & t) ||
        cd ||
        ((cd = !0),
        au(97, function () {
          return Xd(), null;
        })),
      (od = od.nextEffect);
  }
}
function Xd() {
  if (90 !== dd) {
    var e = 97 < dd ? 97 : dd;
    return (dd = 90), ru(e, Gd);
  }
  return !1;
}
function $d(e, t) {
  pd.push(t, e),
    cd ||
      ((cd = !0),
      au(97, function () {
        return Xd(), null;
      }));
}
function Qd(e, t) {
  hd.push(t, e),
    cd ||
      ((cd = !0),
      au(97, function () {
        return Xd(), null;
      }));
}
function Gd() {
  if (null === fd) return !1;
  var e = fd;
  if (((fd = null), 0 != (48 & Vf))) throw Error(gr(331));
  var t = Vf;
  Vf |= 32;
  var n = hd;
  hd = [];
  for (var r = 0; r < n.length; r += 2) {
    var a = n[r],
      i = n[r + 1],
      o = a.destroy;
    if (((a.destroy = void 0), 'function' == typeof o))
      try {
        o();
      } catch (s) {
        if (null === i) throw Error(gr(330));
        Kd(i, s);
      }
  }
  for (n = pd, pd = [], r = 0; r < n.length; r += 2) {
    (a = n[r]), (i = n[r + 1]);
    try {
      var l = a.create;
      a.destroy = l();
    } catch (s) {
      if (null === i) throw Error(gr(330));
      Kd(i, s);
    }
  }
  for (l = e.current.firstEffect; null !== l; )
    (e = l.nextEffect),
      (l.nextEffect = null),
      8 & l.flags && ((l.sibling = null), (l.stateNode = null)),
      (l = e);
  return (Vf = t), iu(), !0;
}
function qd(e, t, n) {
  ku(e, (t = Ef(0, (t = wf(n, t)), 1))),
    (t = Ed()),
    null !== (e = _d(e, 1)) && (eo(e, 1, t), Cd(e, t));
}
function Kd(e, t) {
  if (3 === e.tag) qd(e, e, t);
  else
    for (var n = e.return; null !== n; ) {
      if (3 === n.tag) {
        qd(n, e, t);
        break;
      }
      if (1 === n.tag) {
        var r = n.stateNode;
        if (
          'function' == typeof n.type.getDerivedStateFromError ||
          ('function' == typeof r.componentDidCatch &&
            (null === ud || !ud.has(r)))
        ) {
          var a = Sf(n, (e = wf(t, e)), 1);
          if ((ku(n, a), (a = Ed()), null !== (n = _d(n, 1))))
            eo(n, 1, a), Cd(n, a);
          else if (
            'function' == typeof r.componentDidCatch &&
            (null === ud || !ud.has(r))
          )
            try {
              r.componentDidCatch(t, e);
            } catch (i) {}
          break;
        }
      }
      n = n.return;
    }
}
function Jd(e, t, n) {
  var r = e.pingCache;
  null !== r && r.delete(t),
    (t = Ed()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Bf === e &&
      (Xf & n) === n &&
      (4 === Gf || (3 === Gf && (62914560 & Xf) === Xf && 500 > eu() - nd)
        ? zd(e, 0)
        : (ed |= n)),
    Cd(e, t);
}
function Zd(e, t) {
  var n = e.stateNode;
  null !== n && n.delete(t),
    0 === (t = 0) &&
      (0 == (2 & (t = e.mode))
        ? (t = 1)
        : 0 == (4 & t)
        ? (t = 99 === tu() ? 1 : 2)
        : (0 === yd && (yd = Kf),
          0 === (t = Ji(62914560 & ~yd)) && (t = 4194304))),
    (n = Ed()),
    null !== (e = _d(e, t)) && (eo(e, t, n), Cd(e, n));
}
function ep(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function tp(e, t, n, r) {
  return new ep(e, t, n, r);
}
function np(e) {
  return !(!(e = e.prototype) || !e.isReactComponent);
}
function rp(e, t) {
  var n = e.alternate;
  return (
    null === n
      ? (((n = tp(e.tag, t, e.key, e.mode)).elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.nextEffect = null),
        (n.firstEffect = null),
        (n.lastEffect = null)),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ap(e, t, n, r, a, i) {
  var o = 2;
  if (((r = e), 'function' == typeof e)) np(e) && (o = 1);
  else if ('string' == typeof e) o = 5;
  else
    e: switch (e) {
      case zr:
        return ip(n.children, a, i, t);
      case $r:
        (o = 8), (a |= 16);
        break;
      case jr:
        (o = 8), (a |= 1);
        break;
      case Rr:
        return (
          ((e = tp(12, n, t, 8 | a)).elementType = Rr),
          (e.type = Rr),
          (e.lanes = i),
          e
        );
      case Hr:
        return (
          ((e = tp(13, n, t, a)).type = Hr),
          (e.elementType = Hr),
          (e.lanes = i),
          e
        );
      case Wr:
        return ((e = tp(19, n, t, a)).elementType = Wr), (e.lanes = i), e;
      case Qr:
        return op(n, a, i, t);
      case Gr:
        return ((e = tp(24, n, t, a)).elementType = Gr), (e.lanes = i), e;
      default:
        if ('object' == typeof e && null !== e)
          switch (e.$$typeof) {
            case Ir:
              o = 10;
              break e;
            case Fr:
              o = 9;
              break e;
            case Ur:
              o = 11;
              break e;
            case Vr:
              o = 14;
              break e;
            case Br:
              (o = 16), (r = null);
              break e;
            case Yr:
              o = 22;
              break e;
          }
        throw Error(gr(130, null == e ? e : typeof e, ''));
    }
  return ((t = tp(o, n, t, a)).elementType = e), (t.type = r), (t.lanes = i), t;
}
function ip(e, t, n, r) {
  return ((e = tp(7, e, r, t)).lanes = n), e;
}
function op(e, t, n, r) {
  return ((e = tp(23, e, r, t)).elementType = Qr), (e.lanes = n), e;
}
function lp(e, t, n) {
  return ((e = tp(6, e, null, t)).lanes = n), e;
}
function sp(e, t, n) {
  return (
    ((t = tp(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function up(e, t, n) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = n),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Zi(0)),
    (this.expirationTimes = Zi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zi(0)),
    (this.mutableSourceEagerHydrationData = null);
}
function cp(e, t, n) {
  var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: Mr,
    key: null == r ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function fp(e, t, n, r) {
  var a = t.current,
    i = Ed(),
    o = Sd(a);
  e: if (n) {
    t: {
      if (li((n = n._reactInternals)) !== n || 1 !== n.tag)
        throw Error(gr(170));
      var l = n;
      do {
        switch (l.tag) {
          case 3:
            l = l.stateNode.context;
            break t;
          case 1:
            if (Ps(l.type)) {
              l = l.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        l = l.return;
      } while (null !== l);
      throw Error(gr(171));
    }
    if (1 === n.tag) {
      var s = n.type;
      if (Ps(s)) {
        n = Ds(n, s, l);
        break e;
      }
    }
    n = l;
  } else n = Es;
  return (
    null === t.context ? (t.context = n) : (t.pendingContext = n),
    ((t = xu(i, o)).payload = { element: e }),
    null !== (r = void 0 === r ? null : r) && (t.callback = r),
    ku(a, t),
    Od(a, o, i),
    o
  );
}
function dp(e) {
  return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function pp(e, t) {
  if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
    var n = e.retryLane;
    e.retryLane = 0 !== n && n < t ? n : t;
  }
}
function hp(e, t) {
  pp(e, t), (e = e.alternate) && pp(e, t);
}
function mp(e, t, n) {
  var r =
    (null != n &&
      null != n.hydrationOptions &&
      n.hydrationOptions.mutableSources) ||
    null;
  if (
    ((n = new up(e, t, null != n && !0 === n.hydrate)),
    (t = tp(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
    (n.current = t),
    (t.stateNode = n),
    yu(t),
    (e[fs] = n.current),
    Vl(8 === e.nodeType ? e.parentNode : e),
    r)
  )
    for (e = 0; e < r.length; e++) {
      var a = (t = r[e])._getVersion;
      (a = a(t._source)),
        null == n.mutableSourceEagerHydrationData
          ? (n.mutableSourceEagerHydrationData = [t, a])
          : n.mutableSourceEagerHydrationData.push(t, a);
    }
  this._internalRoot = n;
}
function vp(e) {
  return !(
    !e ||
    (1 !== e.nodeType &&
      9 !== e.nodeType &&
      11 !== e.nodeType &&
      (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
  );
}
function gp(e, t, n, r, a) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i._internalRoot;
    if ('function' == typeof a) {
      var l = a;
      a = function () {
        var e = dp(o);
        l.call(e);
      };
    }
    fp(t, o, e, a);
  } else {
    if (
      ((i = n._reactRootContainer =
        (function (e, t) {
          if (
            (t ||
              (t = !(
                !(t = e
                  ? 9 === e.nodeType
                    ? e.documentElement
                    : e.firstChild
                  : null) ||
                1 !== t.nodeType ||
                !t.hasAttribute('data-reactroot')
              )),
            !t)
          )
            for (var n; (n = e.lastChild); ) e.removeChild(n);
          return new mp(e, 0, t ? { hydrate: !0 } : void 0);
        })(n, r)),
      (o = i._internalRoot),
      'function' == typeof a)
    ) {
      var s = a;
      a = function () {
        var e = dp(o);
        s.call(e);
      };
    }
    Ld(function () {
      fp(t, o, e, a);
    });
  }
  return dp(o);
}
function bp(e, t) {
  var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!vp(t)) throw Error(gr(200));
  return cp(e, t, null, n);
}
(id = function (e, t, n) {
  var r = t.lanes;
  if (null !== e)
    if (e.memoizedProps !== t.pendingProps || Os.current) $c = !0;
    else {
      if (0 == (n & r)) {
        switch ((($c = !1), t.tag)) {
          case 3:
            rf(t), ac();
            break;
          case 5:
            Xu(t);
            break;
          case 1:
            Ps(t.type) && Ls(t);
            break;
          case 4:
            Bu(t, t.stateNode.containerInfo);
            break;
          case 10:
            r = t.memoizedProps.value;
            var a = t.type._context;
            ks(uu, a._currentValue), (a._currentValue = r);
            break;
          case 13:
            if (null !== t.memoizedState)
              return 0 != (n & t.child.childLanes)
                ? uf(e, t, n)
                : (ks(Qu, 1 & Qu.current),
                  null !== (t = vf(e, t, n)) ? t.sibling : null);
            ks(Qu, 1 & Qu.current);
            break;
          case 19:
            if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
              if (r) return mf(e, t, n);
              t.flags |= 64;
            }
            if (
              (null !== (a = t.memoizedState) &&
                ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
              ks(Qu, Qu.current),
              r)
            )
              break;
            return null;
          case 23:
          case 24:
            return (t.lanes = 0), Jc(e, t, n);
        }
        return vf(e, t, n);
      }
      $c = 0 != (16384 & e.flags);
    }
  else $c = !1;
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      if (
        ((r = t.type),
        null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps),
        (a = Cs(t, Ss.current)),
        vu(t, n),
        (a = gc(null, t, r, e, a, n)),
        (t.flags |= 1),
        'object' == typeof a &&
          null !== a &&
          'function' == typeof a.render &&
          void 0 === a.$$typeof)
      ) {
        if (
          ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), Ps(r))
        ) {
          var i = !0;
          Ls(t);
        } else i = !1;
        (t.memoizedState =
          null !== a.state && void 0 !== a.state ? a.state : null),
          yu(t);
        var o = r.getDerivedStateFromProps;
        'function' == typeof o && Cu(t, r, o, e),
          (a.updater = Pu),
          (t.stateNode = a),
          (a._reactInternals = t),
          Lu(t, r, e, n),
          (t = nf(null, t, r, !0, i, n));
      } else (t.tag = 0), Qc(null, t, a, n), (t = t.child);
      return t;
    case 16:
      a = t.elementType;
      e: {
        switch (
          (null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (a = (i = a._init)(a._payload)),
          (t.type = a),
          (i = t.tag =
            (function (e) {
              if ('function' == typeof e) return np(e) ? 1 : 0;
              if (null != e) {
                if ((e = e.$$typeof) === Ur) return 11;
                if (e === Vr) return 14;
              }
              return 2;
            })(a)),
          (e = su(a, e)),
          i)
        ) {
          case 0:
            t = ef(null, t, a, e, n);
            break e;
          case 1:
            t = tf(null, t, a, e, n);
            break e;
          case 11:
            t = Gc(null, t, a, e, n);
            break e;
          case 14:
            t = qc(null, t, a, su(a.type, e), r, n);
            break e;
        }
        throw Error(gr(306, a, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (a = t.pendingProps),
        ef(e, t, r, (a = t.elementType === r ? a : su(r, a)), n)
      );
    case 1:
      return (
        (r = t.type),
        (a = t.pendingProps),
        tf(e, t, r, (a = t.elementType === r ? a : su(r, a)), n)
      );
    case 3:
      if ((rf(t), (r = t.updateQueue), null === e || null === r))
        throw Error(gr(282));
      if (
        ((r = t.pendingProps),
        (a = null !== (a = t.memoizedState) ? a.element : null),
        wu(e, t),
        Su(t, r, null, n),
        (r = t.memoizedState.element) === a)
      )
        ac(), (t = vf(e, t, n));
      else {
        if (
          ((i = (a = t.stateNode).hydrate) &&
            ((Ku = is(t.stateNode.containerInfo.firstChild)),
            (qu = t),
            (i = Ju = !0)),
          i)
        ) {
          if (null != (e = a.mutableSourceEagerHydrationData))
            for (a = 0; a < e.length; a += 2)
              ((i = e[a])._workInProgressVersionPrimary = e[a + 1]), ic.push(i);
          for (n = Iu(t, null, r, n), t.child = n; n; )
            (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
        } else Qc(e, t, r, n), ac();
        t = t.child;
      }
      return t;
    case 5:
      return (
        Xu(t),
        null === e && tc(t),
        (r = t.type),
        (a = t.pendingProps),
        (i = null !== e ? e.memoizedProps : null),
        (o = a.children),
        ts(r, a) ? (o = null) : null !== i && ts(r, i) && (t.flags |= 16),
        Zc(e, t),
        Qc(e, t, o, n),
        t.child
      );
    case 6:
      return null === e && tc(t), null;
    case 13:
      return uf(e, t, n);
    case 4:
      return (
        Bu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        null === e ? (t.child = Ru(t, null, r, n)) : Qc(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (a = t.pendingProps),
        Gc(e, t, r, (a = t.elementType === r ? a : su(r, a)), n)
      );
    case 7:
      return Qc(e, t, t.pendingProps, n), t.child;
    case 8:
    case 12:
      return Qc(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        (r = t.type._context),
          (a = t.pendingProps),
          (o = t.memoizedProps),
          (i = a.value);
        var l = t.type._context;
        if ((ks(uu, l._currentValue), (l._currentValue = i), null !== o))
          if (
            ((l = o.value),
            0 ===
              (i = xl(l, i)
                ? 0
                : 0 |
                  ('function' == typeof r._calculateChangedBits
                    ? r._calculateChangedBits(l, i)
                    : 1073741823)))
          ) {
            if (o.children === a.children && !Os.current) {
              t = vf(e, t, n);
              break e;
            }
          } else
            for (null !== (l = t.child) && (l.return = t); null !== l; ) {
              var s = l.dependencies;
              if (null !== s) {
                o = l.child;
                for (var u = s.firstContext; null !== u; ) {
                  if (u.context === r && 0 != (u.observedBits & i)) {
                    1 === l.tag && (((u = xu(-1, n & -n)).tag = 2), ku(l, u)),
                      (l.lanes |= n),
                      null !== (u = l.alternate) && (u.lanes |= n),
                      mu(l.return, n),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else o = 10 === l.tag && l.type === t.type ? null : l.child;
              if (null !== o) o.return = l;
              else
                for (o = l; null !== o; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (null !== (l = o.sibling)) {
                    (l.return = o.return), (o = l);
                    break;
                  }
                  o = o.return;
                }
              l = o;
            }
        Qc(e, t, a.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (a = t.type),
        (r = (i = t.pendingProps).children),
        vu(t, n),
        (r = r((a = gu(a, i.unstable_observedBits)))),
        (t.flags |= 1),
        Qc(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (i = su((a = t.type), t.pendingProps)),
        qc(e, t, a, (i = su(a.type, i)), r, n)
      );
    case 15:
      return Kc(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : su(r, a)),
        null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        Ps(r) ? ((e = !0), Ls(t)) : (e = !1),
        vu(t, n),
        Tu(t, r, a),
        Lu(t, r, a, n),
        nf(null, t, r, !0, e, n)
      );
    case 19:
      return mf(e, t, n);
    case 23:
    case 24:
      return Jc(e, t, n);
  }
  throw Error(gr(156, t.tag));
}),
  (mp.prototype.render = function (e) {
    fp(e, this._internalRoot, null, null);
  }),
  (mp.prototype.unmount = function () {
    var e = this._internalRoot,
      t = e.containerInfo;
    fp(null, e, null, function () {
      t[fs] = null;
    });
  }),
  (di = function (e) {
    13 === e.tag && (Od(e, 4, Ed()), hp(e, 4));
  }),
  (pi = function (e) {
    13 === e.tag && (Od(e, 67108864, Ed()), hp(e, 67108864));
  }),
  (hi = function (e) {
    if (13 === e.tag) {
      var t = Ed(),
        n = Sd(e);
      Od(e, n, t), hp(e, n);
    }
  }),
  (mi = function (e, t) {
    return t();
  }),
  (Ia = function (e, t, n) {
    switch (t) {
      case 'input':
        if ((pa(e, n), (t = n.name), 'radio' === n.type && null != t)) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = vs(r);
              if (!a) throw Error(gr(90));
              sa(r), pa(r, a);
            }
          }
        }
        break;
      case 'textarea':
        wa(e, n);
        break;
      case 'select':
        null != (t = n.value) && ga(e, !!n.multiple, t, !1);
    }
  }),
  (Ba = Dd),
  (Ya = function (e, t, n, r, a) {
    var i = Vf;
    Vf |= 4;
    try {
      return ru(98, e.bind(null, t, n, r, a));
    } finally {
      0 === (Vf = i) && (ad(), iu());
    }
  }),
  (Xa = function () {
    0 == (49 & Vf) &&
      ((function () {
        if (null !== md) {
          var e = md;
          (md = null),
            e.forEach(function (e) {
              (e.expiredLanes |= 24 & e.pendingLanes), Cd(e, eu());
            });
        }
        iu();
      })(),
      Xd());
  }),
  ($a = function (e, t) {
    var n = Vf;
    Vf |= 2;
    try {
      return e(t);
    } finally {
      0 === (Vf = n) && (ad(), iu());
    }
  });
var yp = { Events: [hs, ms, vs, Wa, Va, Xd, { current: !1 }] },
  wp = {
    findFiberByHostInstance: ps,
    bundleType: 0,
    version: '17.0.2',
    rendererPackageName: 'react-dom',
  },
  xp = {
    bundleType: wp.bundleType,
    version: wp.version,
    rendererPackageName: wp.rendererPackageName,
    rendererConfig: wp.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return null === (e = ci(e)) ? null : e.stateNode;
    },
    findFiberByHostInstance:
      wp.findFiberByHostInstance ||
      function () {
        return null;
      },
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  };
if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var kp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!kp.isDisabled && kp.supportsFiber)
    try {
      (Ms = kp.inject(xp)), (zs = kp);
    } catch (Ca) {}
}
(fr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp),
  (fr.createPortal = bp),
  (fr.findDOMNode = function (e) {
    if (null == e) return null;
    if (1 === e.nodeType) return e;
    var t = e._reactInternals;
    if (void 0 === t) {
      if ('function' == typeof e.render) throw Error(gr(188));
      throw Error(gr(268, Object.keys(e)));
    }
    return (e = null === (e = ci(t)) ? null : e.stateNode);
  }),
  (fr.flushSync = function (e, t) {
    var n = Vf;
    if (0 != (48 & n)) return e(t);
    Vf |= 1;
    try {
      if (e) return ru(99, e.bind(null, t));
    } finally {
      (Vf = n), iu();
    }
  }),
  (fr.hydrate = function (e, t, n) {
    if (!vp(t)) throw Error(gr(200));
    return gp(null, e, t, !0, n);
  }),
  (fr.render = function (e, t, n) {
    if (!vp(t)) throw Error(gr(200));
    return gp(null, e, t, !1, n);
  }),
  (fr.unmountComponentAtNode = function (e) {
    if (!vp(e)) throw Error(gr(40));
    return (
      !!e._reactRootContainer &&
      (Ld(function () {
        gp(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[fs] = null);
        });
      }),
      !0)
    );
  }),
  (fr.unstable_batchedUpdates = Dd),
  (fr.unstable_createPortal = function (e, t) {
    return bp(
      e,
      t,
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
    );
  }),
  (fr.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!vp(n)) throw Error(gr(200));
    if (null == e || void 0 === e._reactInternals) throw Error(gr(38));
    return gp(e, t, n, !1, r);
  }),
  (fr.version = '17.0.2'),
  (function e() {
    if (
      'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  })(),
  (cr.exports = fr);
var Ep = cr.exports,
  Sp = !1,
  Op = e.createContext(null),
  _p = (function (t) {
    var n, r;
    function a(e, n) {
      var r;
      r = t.call(this, e, n) || this;
      var a,
        i = n && !n.isMounting ? e.enter : e.appear;
      return (
        (r.appearStatus = null),
        e.in
          ? i
            ? ((a = 'exited'), (r.appearStatus = 'entering'))
            : (a = 'entered')
          : (a = e.unmountOnExit || e.mountOnEnter ? 'unmounted' : 'exited'),
        (r.state = { status: a }),
        (r.nextCallback = null),
        r
      );
    }
    (r = t),
      ((n = a).prototype = Object.create(r.prototype)),
      (n.prototype.constructor = n),
      Fn(n, r),
      (a.getDerivedStateFromProps = function (e, t) {
        return e.in && 'unmounted' === t.status ? { status: 'exited' } : null;
      });
    var i = a.prototype;
    return (
      (i.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (i.componentDidUpdate = function (e) {
        var t = null;
        if (e !== this.props) {
          var n = this.state.status;
          this.props.in
            ? 'entering' !== n && 'entered' !== n && (t = 'entering')
            : ('entering' !== n && 'entered' !== n) || (t = 'exiting');
        }
        this.updateStatus(!1, t);
      }),
      (i.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (i.getTimeouts = function () {
        var e,
          t,
          n,
          r = this.props.timeout;
        return (
          (e = t = n = r),
          null != r &&
            'number' != typeof r &&
            ((e = r.exit),
            (t = r.enter),
            (n = void 0 !== r.appear ? r.appear : t)),
          { exit: e, enter: t, appear: n }
        );
      }),
      (i.updateStatus = function (e, t) {
        void 0 === e && (e = !1),
          null !== t
            ? (this.cancelNextCallback(),
              'entering' === t ? this.performEnter(e) : this.performExit())
            : this.props.unmountOnExit &&
              'exited' === this.state.status &&
              this.setState({ status: 'unmounted' });
      }),
      (i.performEnter = function (e) {
        var t = this,
          n = this.props.enter,
          r = this.context ? this.context.isMounting : e,
          a = this.props.nodeRef ? [r] : [Ep.findDOMNode(this), r],
          i = a[0],
          o = a[1],
          l = this.getTimeouts(),
          s = r ? l.appear : l.enter;
        (!e && !n) || Sp
          ? this.safeSetState({ status: 'entered' }, function () {
              t.props.onEntered(i);
            })
          : (this.props.onEnter(i, o),
            this.safeSetState({ status: 'entering' }, function () {
              t.props.onEntering(i, o),
                t.onTransitionEnd(s, function () {
                  t.safeSetState({ status: 'entered' }, function () {
                    t.props.onEntered(i, o);
                  });
                });
            }));
      }),
      (i.performExit = function () {
        var e = this,
          t = this.props.exit,
          n = this.getTimeouts(),
          r = this.props.nodeRef ? void 0 : Ep.findDOMNode(this);
        t && !Sp
          ? (this.props.onExit(r),
            this.safeSetState({ status: 'exiting' }, function () {
              e.props.onExiting(r),
                e.onTransitionEnd(n.exit, function () {
                  e.safeSetState({ status: 'exited' }, function () {
                    e.props.onExited(r);
                  });
                });
            }))
          : this.safeSetState({ status: 'exited' }, function () {
              e.props.onExited(r);
            });
      }),
      (i.cancelNextCallback = function () {
        null !== this.nextCallback &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (i.safeSetState = function (e, t) {
        (t = this.setNextCallback(t)), this.setState(e, t);
      }),
      (i.setNextCallback = function (e) {
        var t = this,
          n = !0;
        return (
          (this.nextCallback = function (r) {
            n && ((n = !1), (t.nextCallback = null), e(r));
          }),
          (this.nextCallback.cancel = function () {
            n = !1;
          }),
          this.nextCallback
        );
      }),
      (i.onTransitionEnd = function (e, t) {
        this.setNextCallback(t);
        var n = this.props.nodeRef
            ? this.props.nodeRef.current
            : Ep.findDOMNode(this),
          r = null == e && !this.props.addEndListener;
        if (n && !r) {
          if (this.props.addEndListener) {
            var a = this.props.nodeRef
                ? [this.nextCallback]
                : [n, this.nextCallback],
              i = a[0],
              o = a[1];
            this.props.addEndListener(i, o);
          }
          null != e && setTimeout(this.nextCallback, e);
        } else setTimeout(this.nextCallback, 0);
      }),
      (i.render = function () {
        var t = this.state.status;
        if ('unmounted' === t) return null;
        var n = this.props,
          r = n.children;
        n.in,
          n.mountOnEnter,
          n.unmountOnExit,
          n.appear,
          n.enter,
          n.exit,
          n.timeout,
          n.addEndListener,
          n.onEnter,
          n.onEntering,
          n.onEntered,
          n.onExit,
          n.onExiting,
          n.onExited,
          n.nodeRef;
        var a = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a;
        })(n, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return e.createElement(
          Op.Provider,
          { value: null },
          'function' == typeof r
            ? r(t, a)
            : e.cloneElement(e.Children.only(r), a),
        );
      }),
      a
    );
  })(e.Component);
function Cp() {}
(_p.contextType = Op),
  (_p.propTypes = {}),
  (_p.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: Cp,
    onEntering: Cp,
    onEntered: Cp,
    onExit: Cp,
    onExiting: Cp,
    onExited: Cp,
  }),
  (_p.UNMOUNTED = 'unmounted'),
  (_p.EXITED = 'exited'),
  (_p.ENTERING = 'entering'),
  (_p.ENTERED = 'entered'),
  (_p.EXITING = 'exiting');
var Pp = !(
    'undefined' == typeof window ||
    !window.document ||
    !window.document.createElement
  ),
  Np = !1,
  Tp = !1;
try {
  var Dp = {
    get passive() {
      return (Np = !0);
    },
    get once() {
      return (Tp = Np = !0);
    },
  };
  Pp &&
    (window.addEventListener('test', Dp, Dp),
    window.removeEventListener('test', Dp, !0));
} catch (vg) {}
function Lp(e, t, n, r) {
  return (
    (function (e, t, n, r) {
      if (r && 'boolean' != typeof r && !Tp) {
        var a = r.once,
          i = r.capture,
          o = n;
        !Tp &&
          a &&
          ((o =
            n.__once ||
            function e(r) {
              this.removeEventListener(t, e, i), n.call(this, r);
            }),
          (n.__once = o)),
          e.addEventListener(t, o, Np ? r : i);
      }
      e.addEventListener(t, n, r);
    })(e, t, n, r),
    function () {
      !(function (e, t, n, r) {
        var a = r && 'boolean' != typeof r ? r.capture : r;
        e.removeEventListener(t, n, a),
          n.__once && e.removeEventListener(t, n.__once, a);
      })(e, t, n, r);
    }
  );
}
function Ap(e, t, n) {
  void 0 === n && (n = 5);
  var r = !1,
    a = setTimeout(function () {
      r ||
        (function (e, t, n, r) {
          if ((void 0 === n && (n = !1), void 0 === r && (r = !0), e)) {
            var a = document.createEvent('HTMLEvents');
            a.initEvent(t, n, r), e.dispatchEvent(a);
          }
        })(e, 'transitionend', !0);
    }, t + n),
    i = Lp(
      e,
      'transitionend',
      function () {
        r = !0;
      },
      { once: !0 },
    );
  return function () {
    clearTimeout(a), i();
  };
}
function Mp(e, t, n, r) {
  var a, i;
  null == n &&
    ((a = ur(e, 'transitionDuration') || ''),
    (i = -1 === a.indexOf('ms') ? 1e3 : 1),
    (n = parseFloat(a) * i || 0));
  var o = Ap(e, n, r),
    l = Lp(e, 'transitionend', t);
  return function () {
    o(), l();
  };
}
function zp(e, t) {
  const n = ur(e, t) || '',
    r = -1 === n.indexOf('ms') ? 1e3 : 1;
  return parseFloat(n) * r;
}
function jp(e, t) {
  const n = zp(e, 'transitionDuration'),
    r = zp(e, 'transitionDelay'),
    a = Mp(
      e,
      n => {
        n.target === e && (a(), t(n));
      },
      n + r,
    );
}
var Rp = function (e) {
  return e && 'function' != typeof e
    ? function (t) {
        e.current = t;
      }
    : e;
};
function Ip(e, t) {
  return r.exports.useMemo(
    function () {
      return (function (e, t) {
        var n = Rp(e),
          r = Rp(t);
        return function (e) {
          n && n(e), r && r(e);
        };
      })(e, t);
    },
    [e, t],
  );
}
function Fp(e) {
  return e && 'setState' in e ? Ep.findDOMNode(e) : null != e ? e : null;
}
var Up = e.forwardRef((t, n) => {
  var a = t,
    {
      onEnter: i,
      onEntering: o,
      onEntered: l,
      onExit: s,
      onExiting: u,
      onExited: c,
      addEndListener: f,
      children: d,
      childRef: p,
    } = a,
    h = g(a, [
      'onEnter',
      'onEntering',
      'onEntered',
      'onExit',
      'onExiting',
      'onExited',
      'addEndListener',
      'children',
      'childRef',
    ]);
  const b = r.exports.useRef(null),
    y = Ip(b, p),
    w = e => {
      y(Fp(e));
    },
    x = e => t => {
      e && b.current && e(b.current, t);
    },
    k = r.exports.useCallback(x(i), [i]),
    E = r.exports.useCallback(x(o), [o]),
    S = r.exports.useCallback(x(l), [l]),
    O = r.exports.useCallback(x(s), [s]),
    _ = r.exports.useCallback(x(u), [u]),
    C = r.exports.useCallback(x(c), [c]),
    P = r.exports.useCallback(x(f), [f]);
  return Un.exports.jsx(
    _p,
    v(m({ ref: n }, h), {
      onEnter: k,
      onEntered: S,
      onEntering: E,
      onExit: O,
      onExited: C,
      onExiting: _,
      addEndListener: P,
      nodeRef: b,
      children:
        'function' == typeof d
          ? (e, t) => d(e, v(m({}, t), { ref: w }))
          : e.cloneElement(d, { ref: w }),
    }),
  );
});
function Hp(e) {
  var t = (function (e) {
    var t = r.exports.useRef(e);
    return (
      r.exports.useEffect(
        function () {
          t.current = e;
        },
        [e],
      ),
      t
    );
  })(e);
  return r.exports.useCallback(
    function () {
      return t.current && t.current.apply(t, arguments);
    },
    [t],
  );
}
function Wp() {
  return r.exports.useState(null);
}
function Vp() {
  var e = r.exports.useRef(!0),
    t = r.exports.useRef(function () {
      return e.current;
    });
  return (
    r.exports.useEffect(function () {
      return function () {
        e.current = !1;
      };
    }, []),
    t.current
  );
}
const Bp = ['as', 'disabled'];
function Yp({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: a,
  onClick: i,
  tabIndex: o = 0,
  type: l,
}) {
  e || (e = null != n || null != r || null != a ? 'a' : 'button');
  const s = { tagName: e };
  if ('button' === e) return [{ type: l || 'button', disabled: t }, s];
  const u = r => {
    (t ||
      ('a' === e &&
        (function (e) {
          return !e || '#' === e.trim();
        })(n))) &&
      r.preventDefault(),
      t ? r.stopPropagation() : null == i || i(r);
  };
  return (
    'a' === e && (n || (n = '#'), t && (n = void 0)),
    [
      {
        role: 'button',
        disabled: void 0,
        tabIndex: t ? void 0 : o,
        href: n,
        target: 'a' === e ? r : void 0,
        'aria-disabled': t || void 0,
        rel: 'a' === e ? a : void 0,
        onClick: u,
        onKeyDown: e => {
          ' ' === e.key && (e.preventDefault(), u(e));
        },
      },
      s,
    ]
  );
}
const Xp = r.exports.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    a = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    })(e, Bp);
  const [i, { tagName: o }] = Yp(Object.assign({ tagName: n, disabled: r }, a));
  return Un.exports.jsx(o, Object.assign({}, a, i, { ref: t }));
});
Xp.displayName = 'Button';
const $p = { entering: 'show', entered: 'show' },
  Qp = r.exports.forwardRef((e, t) => {
    var n = e,
      { className: a, children: i, transitionClasses: o = {} } = n,
      l = g(n, ['className', 'children', 'transitionClasses']);
    const s = r.exports.useCallback(
      (e, t) => {
        !(function (e) {
          e.offsetHeight;
        })(e),
          null == l.onEnter || l.onEnter(e, t);
      },
      [l],
    );
    return Un.exports.jsx(
      Up,
      v(m({ ref: t, addEndListener: jp }, l), {
        onEnter: s,
        childRef: i.ref,
        children: (e, t) =>
          r.exports.cloneElement(
            i,
            v(m({}, t), {
              className: In('fade', a, i.props.className, $p[e], o[e]),
            }),
          ),
      }),
    );
  });
(Qp.defaultProps = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
}),
  (Qp.displayName = 'Fade');
var Gp = Qp,
  qp = /-(.)/g;
const Kp = e => {
  return (
    e[0].toUpperCase() +
    ((t = e),
    t.replace(qp, function (e, t) {
      return t.toUpperCase();
    })).slice(1)
  );
  var t;
};
function Jp(e, { displayName: t = Kp(e), Component: n, defaultProps: a } = {}) {
  const i = r.exports.forwardRef((t, r) => {
    var a = t,
      { className: i, bsPrefix: o, as: l = n || 'div' } = a,
      s = g(a, ['className', 'bsPrefix', 'as']);
    const u = tr(o, e);
    return Un.exports.jsx(l, m({ ref: r, className: In(i, u) }, s));
  });
  return (i.defaultProps = a), (i.displayName = t), i;
}
const Zp = r.exports.forwardRef((e, t) => {
  var n = e,
    { as: r, bsPrefix: a, variant: i, size: o, active: l, className: s } = n,
    u = g(n, ['as', 'bsPrefix', 'variant', 'size', 'active', 'className']);
  const c = tr(a, 'btn'),
    [f, { tagName: d }] = Yp(m({ tagName: r }, u)),
    p = d;
  return Un.exports.jsx(
    p,
    v(m(m({}, f), u), {
      ref: t,
      className: In(
        s,
        c,
        l && 'active',
        i && `${c}-${i}`,
        o && `${c}-${o}`,
        u.href && u.disabled && 'disabled',
      ),
    }),
  );
});
(Zp.displayName = 'Button'),
  (Zp.defaultProps = { variant: 'primary', active: !1, disabled: !1 });
var eh = Zp;
const th = r.exports.forwardRef((e, t) => {
  var n = e,
    { bsPrefix: r, size: a, vertical: i, className: o, as: l = 'div' } = n,
    s = g(n, ['bsPrefix', 'size', 'vertical', 'className', 'as']);
  const u = tr(r, 'btn-group');
  let c = u;
  return (
    i && (c = `${u}-vertical`),
    Un.exports.jsx(
      l,
      v(m({}, s), { ref: t, className: In(o, c, a && `${u}-${a}`) }),
    )
  );
});
(th.displayName = 'ButtonGroup'),
  (th.defaultProps = { vertical: !1, role: 'group' });
var nh = th;
const rh = r.exports.forwardRef((e, t) => {
  var n = e,
    { bsPrefix: r, className: a } = n,
    i = g(n, ['bsPrefix', 'className']);
  const o = tr(r, 'btn-toolbar');
  return Un.exports.jsx('div', v(m({}, i), { ref: t, className: In(a, o) }));
});
(rh.displayName = 'ButtonToolbar'), (rh.defaultProps = { role: 'toolbar' });
var ah = rh;
function ih(e) {
  var t,
    n,
    a = ((t = e), ((n = r.exports.useRef(t)).current = t), n);
  r.exports.useEffect(function () {
    return function () {
      return a.current();
    };
  }, []);
}
var oh = Math.pow(2, 31) - 1;
function lh(e, t, n) {
  var r = n - Date.now();
  e.current =
    r <= oh
      ? setTimeout(t, r)
      : setTimeout(function () {
          return lh(e, t, n);
        }, oh);
}
function sh() {
  var e = Vp(),
    t = r.exports.useRef();
  return (
    ih(function () {
      return clearTimeout(t.current);
    }),
    r.exports.useMemo(function () {
      var n = function () {
        return clearTimeout(t.current);
      };
      return {
        set: function (r, a) {
          void 0 === a && (a = 0),
            e() &&
              (n(),
              a <= oh
                ? (t.current = setTimeout(r, a))
                : lh(t, r, Date.now() + a));
        },
        clear: n,
      };
    }, [])
  );
}
var uh = Object.prototype.hasOwnProperty;
function ch(e, t, n) {
  for (n of e.keys()) if (fh(n, t)) return n;
}
function fh(e, t) {
  var n, r, a;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length) for (; r-- && fh(e[r], t[r]); );
      return -1 === r;
    }
    if (n === Set) {
      if (e.size !== t.size) return !1;
      for (r of e) {
        if ((a = r) && 'object' == typeof a && !(a = ch(t, a))) return !1;
        if (!t.has(a)) return !1;
      }
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size) return !1;
      for (r of e) {
        if ((a = r[0]) && 'object' == typeof a && !(a = ch(t, a))) return !1;
        if (!fh(r[1], t.get(a))) return !1;
      }
      return !0;
    }
    if (n === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
    else if (n === DataView) {
      if ((r = e.byteLength) === t.byteLength)
        for (; r-- && e.getInt8(r) === t.getInt8(r); );
      return -1 === r;
    }
    if (ArrayBuffer.isView(e)) {
      if ((r = e.byteLength) === t.byteLength) for (; r-- && e[r] === t[r]; );
      return -1 === r;
    }
    if (!n || 'object' == typeof e) {
      for (n in ((r = 0), e)) {
        if (uh.call(e, n) && ++r && !uh.call(t, n)) return !1;
        if (!(n in t) || !fh(e[n], t[n])) return !1;
      }
      return Object.keys(t).length === r;
    }
  }
  return e != e && t != t;
}
var dh = 'top',
  ph = 'bottom',
  hh = 'right',
  mh = 'left',
  vh = [dh, ph, hh, mh],
  gh = vh.reduce(function (e, t) {
    return e.concat([t + '-start', t + '-end']);
  }, []),
  bh = [].concat(vh, ['auto']).reduce(function (e, t) {
    return e.concat([t, t + '-start', t + '-end']);
  }, []),
  yh = [
    'beforeRead',
    'read',
    'afterRead',
    'beforeMain',
    'main',
    'afterMain',
    'beforeWrite',
    'write',
    'afterWrite',
  ];
function wh(e) {
  return e.split('-')[0];
}
function xh(e) {
  if (null == e) return window;
  if ('[object Window]' !== e.toString()) {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function kh(e) {
  return e instanceof xh(e).Element || e instanceof Element;
}
function Eh(e) {
  return e instanceof xh(e).HTMLElement || e instanceof HTMLElement;
}
function Sh(e) {
  return (
    'undefined' != typeof ShadowRoot &&
    (e instanceof xh(e).ShadowRoot || e instanceof ShadowRoot)
  );
}
var Oh = Math.max,
  _h = Math.min,
  Ch = Math.round;
function Ph(e, t) {
  void 0 === t && (t = !1);
  var n = e.getBoundingClientRect(),
    r = 1,
    a = 1;
  if (Eh(e) && t) {
    var i = e.offsetHeight,
      o = e.offsetWidth;
    o > 0 && (r = Ch(n.width) / o || 1), i > 0 && (a = Ch(n.height) / i || 1);
  }
  return {
    width: n.width / r,
    height: n.height / a,
    top: n.top / a,
    right: n.right / r,
    bottom: n.bottom / a,
    left: n.left / r,
    x: n.left / r,
    y: n.top / a,
  };
}
function Nh(e) {
  var t = Ph(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function Th(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Sh(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Dh(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function Lh(e) {
  return xh(e).getComputedStyle(e);
}
function Ah(e) {
  return ['table', 'td', 'th'].indexOf(Dh(e)) >= 0;
}
function Mh(e) {
  return ((kh(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function zh(e) {
  return 'html' === Dh(e)
    ? e
    : e.assignedSlot || e.parentNode || (Sh(e) ? e.host : null) || Mh(e);
}
function jh(e) {
  return Eh(e) && 'fixed' !== Lh(e).position ? e.offsetParent : null;
}
function Rh(e) {
  for (var t = xh(e), n = jh(e); n && Ah(n) && 'static' === Lh(n).position; )
    n = jh(n);
  return n &&
    ('html' === Dh(n) || ('body' === Dh(n) && 'static' === Lh(n).position))
    ? t
    : n ||
        (function (e) {
          var t = -1 !== navigator.userAgent.toLowerCase().indexOf('firefox');
          if (
            -1 !== navigator.userAgent.indexOf('Trident') &&
            Eh(e) &&
            'fixed' === Lh(e).position
          )
            return null;
          for (var n = zh(e); Eh(n) && ['html', 'body'].indexOf(Dh(n)) < 0; ) {
            var r = Lh(n);
            if (
              'none' !== r.transform ||
              'none' !== r.perspective ||
              'paint' === r.contain ||
              -1 !== ['transform', 'perspective'].indexOf(r.willChange) ||
              (t && 'filter' === r.willChange) ||
              (t && r.filter && 'none' !== r.filter)
            )
              return n;
            n = n.parentNode;
          }
          return null;
        })(e) ||
        t;
}
function Ih(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function Fh(e, t, n) {
  return Oh(e, _h(t, n));
}
function Uh(e) {
  return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
}
function Hh(e, t) {
  return t.reduce(function (t, n) {
    return (t[n] = e), t;
  }, {});
}
var Wh = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: function (e) {
    var t,
      n = e.state,
      r = e.name,
      a = e.options,
      i = n.elements.arrow,
      o = n.modifiersData.popperOffsets,
      l = wh(n.placement),
      s = Ih(l),
      u = [mh, hh].indexOf(l) >= 0 ? 'height' : 'width';
    if (i && o) {
      var c = (function (e, t) {
          return Uh(
            'number' !=
              typeof (e =
                'function' == typeof e
                  ? e(Object.assign({}, t.rects, { placement: t.placement }))
                  : e)
              ? e
              : Hh(e, vh),
          );
        })(a.padding, n),
        f = Nh(i),
        d = 'y' === s ? dh : mh,
        p = 'y' === s ? ph : hh,
        h =
          n.rects.reference[u] +
          n.rects.reference[s] -
          o[s] -
          n.rects.popper[u],
        m = o[s] - n.rects.reference[s],
        v = Rh(i),
        g = v ? ('y' === s ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
        b = h / 2 - m / 2,
        y = c[d],
        w = g - f[u] - c[p],
        x = g / 2 - f[u] / 2 + b,
        k = Fh(y, x, w),
        E = s;
      n.modifiersData[r] = (((t = {})[E] = k), (t.centerOffset = k - x), t);
    }
  },
  effect: function (e) {
    var t = e.state,
      n = e.options.element,
      r = void 0 === n ? '[data-popper-arrow]' : n;
    null != r &&
      ('string' != typeof r || (r = t.elements.popper.querySelector(r))) &&
      Th(t.elements.popper, r) &&
      (t.elements.arrow = r);
  },
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function Vh(e) {
  return e.split('-')[1];
}
var Bh = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function Yh(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    a = e.placement,
    i = e.variation,
    o = e.offsets,
    l = e.position,
    s = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    f = e.isFixed,
    d = o.x,
    p = void 0 === d ? 0 : d,
    h = o.y,
    m = void 0 === h ? 0 : h,
    v = 'function' == typeof c ? c({ x: p, y: m }) : { x: p, y: m };
  (p = v.x), (m = v.y);
  var g = o.hasOwnProperty('x'),
    b = o.hasOwnProperty('y'),
    y = mh,
    w = dh,
    x = window;
  if (u) {
    var k = Rh(n),
      E = 'clientHeight',
      S = 'clientWidth';
    if (
      (k === xh(n) &&
        'static' !== Lh((k = Mh(n))).position &&
        'absolute' === l &&
        ((E = 'scrollHeight'), (S = 'scrollWidth')),
      (k = k),
      a === dh || ((a === mh || a === hh) && 'end' === i))
    )
      (w = ph),
        (m -=
          (f && x.visualViewport ? x.visualViewport.height : k[E]) - r.height),
        (m *= s ? 1 : -1);
    if (a === mh || ((a === dh || a === ph) && 'end' === i))
      (y = hh),
        (p -=
          (f && x.visualViewport ? x.visualViewport.width : k[S]) - r.width),
        (p *= s ? 1 : -1);
  }
  var O,
    _ = Object.assign({ position: l }, u && Bh),
    C =
      !0 === c
        ? (function (e) {
            var t = e.x,
              n = e.y,
              r = window.devicePixelRatio || 1;
            return { x: Ch(t * r) / r || 0, y: Ch(n * r) / r || 0 };
          })({ x: p, y: m })
        : { x: p, y: m };
  return (
    (p = C.x),
    (m = C.y),
    s
      ? Object.assign(
          {},
          _,
          (((O = {})[w] = b ? '0' : ''),
          (O[y] = g ? '0' : ''),
          (O.transform =
            (x.devicePixelRatio || 1) <= 1
              ? 'translate(' + p + 'px, ' + m + 'px)'
              : 'translate3d(' + p + 'px, ' + m + 'px, 0)'),
          O),
        )
      : Object.assign(
          {},
          _,
          (((t = {})[w] = b ? m + 'px' : ''),
          (t[y] = g ? p + 'px' : ''),
          (t.transform = ''),
          t),
        )
  );
}
var Xh = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = n.gpuAcceleration,
        a = void 0 === r || r,
        i = n.adaptive,
        o = void 0 === i || i,
        l = n.roundOffsets,
        s = void 0 === l || l,
        u = {
          placement: wh(t.placement),
          variation: Vh(t.placement),
          popper: t.elements.popper,
          popperRect: t.rects.popper,
          gpuAcceleration: a,
          isFixed: 'fixed' === t.options.strategy,
        };
      null != t.modifiersData.popperOffsets &&
        (t.styles.popper = Object.assign(
          {},
          t.styles.popper,
          Yh(
            Object.assign({}, u, {
              offsets: t.modifiersData.popperOffsets,
              position: t.options.strategy,
              adaptive: o,
              roundOffsets: s,
            }),
          ),
        )),
        null != t.modifiersData.arrow &&
          (t.styles.arrow = Object.assign(
            {},
            t.styles.arrow,
            Yh(
              Object.assign({}, u, {
                offsets: t.modifiersData.arrow,
                position: 'absolute',
                adaptive: !1,
                roundOffsets: s,
              }),
            ),
          )),
        (t.attributes.popper = Object.assign({}, t.attributes.popper, {
          'data-popper-placement': t.placement,
        }));
    },
    data: {},
  },
  $h = { passive: !0 };
var Qh = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: function (e) {
      var t = e.state,
        n = e.instance,
        r = e.options,
        a = r.scroll,
        i = void 0 === a || a,
        o = r.resize,
        l = void 0 === o || o,
        s = xh(t.elements.popper),
        u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
      return (
        i &&
          u.forEach(function (e) {
            e.addEventListener('scroll', n.update, $h);
          }),
        l && s.addEventListener('resize', n.update, $h),
        function () {
          i &&
            u.forEach(function (e) {
              e.removeEventListener('scroll', n.update, $h);
            }),
            l && s.removeEventListener('resize', n.update, $h);
        }
      );
    },
    data: {},
  },
  Gh = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function qh(e) {
  return e.replace(/left|right|bottom|top/g, function (e) {
    return Gh[e];
  });
}
var Kh = { start: 'end', end: 'start' };
function Jh(e) {
  return e.replace(/start|end/g, function (e) {
    return Kh[e];
  });
}
function Zh(e) {
  var t = xh(e);
  return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function em(e) {
  return Ph(Mh(e)).left + Zh(e).scrollLeft;
}
function tm(e) {
  var t = Lh(e),
    n = t.overflow,
    r = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function nm(e) {
  return ['html', 'body', '#document'].indexOf(Dh(e)) >= 0
    ? e.ownerDocument.body
    : Eh(e) && tm(e)
    ? e
    : nm(zh(e));
}
function rm(e, t) {
  var n;
  void 0 === t && (t = []);
  var r = nm(e),
    a = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
    i = xh(r),
    o = a ? [i].concat(i.visualViewport || [], tm(r) ? r : []) : r,
    l = t.concat(o);
  return a ? l : l.concat(rm(zh(o)));
}
function am(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function im(e, t) {
  return 'viewport' === t
    ? am(
        (function (e) {
          var t = xh(e),
            n = Mh(e),
            r = t.visualViewport,
            a = n.clientWidth,
            i = n.clientHeight,
            o = 0,
            l = 0;
          return (
            r &&
              ((a = r.width),
              (i = r.height),
              /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                ((o = r.offsetLeft), (l = r.offsetTop))),
            { width: a, height: i, x: o + em(e), y: l }
          );
        })(e),
      )
    : kh(t)
    ? (function (e) {
        var t = Ph(e);
        return (
          (t.top = t.top + e.clientTop),
          (t.left = t.left + e.clientLeft),
          (t.bottom = t.top + e.clientHeight),
          (t.right = t.left + e.clientWidth),
          (t.width = e.clientWidth),
          (t.height = e.clientHeight),
          (t.x = t.left),
          (t.y = t.top),
          t
        );
      })(t)
    : am(
        (function (e) {
          var t,
            n = Mh(e),
            r = Zh(e),
            a = null == (t = e.ownerDocument) ? void 0 : t.body,
            i = Oh(
              n.scrollWidth,
              n.clientWidth,
              a ? a.scrollWidth : 0,
              a ? a.clientWidth : 0,
            ),
            o = Oh(
              n.scrollHeight,
              n.clientHeight,
              a ? a.scrollHeight : 0,
              a ? a.clientHeight : 0,
            ),
            l = -r.scrollLeft + em(e),
            s = -r.scrollTop;
          return (
            'rtl' === Lh(a || n).direction &&
              (l += Oh(n.clientWidth, a ? a.clientWidth : 0) - i),
            { width: i, height: o, x: l, y: s }
          );
        })(Mh(e)),
      );
}
function om(e, t, n) {
  var r =
      'clippingParents' === t
        ? (function (e) {
            var t = rm(zh(e)),
              n =
                ['absolute', 'fixed'].indexOf(Lh(e).position) >= 0 && Eh(e)
                  ? Rh(e)
                  : e;
            return kh(n)
              ? t.filter(function (e) {
                  return kh(e) && Th(e, n) && 'body' !== Dh(e);
                })
              : [];
          })(e)
        : [].concat(t),
    a = [].concat(r, [n]),
    i = a[0],
    o = a.reduce(function (t, n) {
      var r = im(e, n);
      return (
        (t.top = Oh(r.top, t.top)),
        (t.right = _h(r.right, t.right)),
        (t.bottom = _h(r.bottom, t.bottom)),
        (t.left = Oh(r.left, t.left)),
        t
      );
    }, im(e, i));
  return (
    (o.width = o.right - o.left),
    (o.height = o.bottom - o.top),
    (o.x = o.left),
    (o.y = o.top),
    o
  );
}
function lm(e) {
  var t,
    n = e.reference,
    r = e.element,
    a = e.placement,
    i = a ? wh(a) : null,
    o = a ? Vh(a) : null,
    l = n.x + n.width / 2 - r.width / 2,
    s = n.y + n.height / 2 - r.height / 2;
  switch (i) {
    case dh:
      t = { x: l, y: n.y - r.height };
      break;
    case ph:
      t = { x: l, y: n.y + n.height };
      break;
    case hh:
      t = { x: n.x + n.width, y: s };
      break;
    case mh:
      t = { x: n.x - r.width, y: s };
      break;
    default:
      t = { x: n.x, y: n.y };
  }
  var u = i ? Ih(i) : null;
  if (null != u) {
    var c = 'y' === u ? 'height' : 'width';
    switch (o) {
      case 'start':
        t[u] = t[u] - (n[c] / 2 - r[c] / 2);
        break;
      case 'end':
        t[u] = t[u] + (n[c] / 2 - r[c] / 2);
    }
  }
  return t;
}
function sm(e, t) {
  void 0 === t && (t = {});
  var n = t,
    r = n.placement,
    a = void 0 === r ? e.placement : r,
    i = n.boundary,
    o = void 0 === i ? 'clippingParents' : i,
    l = n.rootBoundary,
    s = void 0 === l ? 'viewport' : l,
    u = n.elementContext,
    c = void 0 === u ? 'popper' : u,
    f = n.altBoundary,
    d = void 0 !== f && f,
    p = n.padding,
    h = void 0 === p ? 0 : p,
    m = Uh('number' != typeof h ? h : Hh(h, vh)),
    v = 'popper' === c ? 'reference' : 'popper',
    g = e.rects.popper,
    b = e.elements[d ? v : c],
    y = om(kh(b) ? b : b.contextElement || Mh(e.elements.popper), o, s),
    w = Ph(e.elements.reference),
    x = lm({ reference: w, element: g, strategy: 'absolute', placement: a }),
    k = am(Object.assign({}, g, x)),
    E = 'popper' === c ? k : w,
    S = {
      top: y.top - E.top + m.top,
      bottom: E.bottom - y.bottom + m.bottom,
      left: y.left - E.left + m.left,
      right: E.right - y.right + m.right,
    },
    O = e.modifiersData.offset;
  if ('popper' === c && O) {
    var _ = O[a];
    Object.keys(S).forEach(function (e) {
      var t = [hh, ph].indexOf(e) >= 0 ? 1 : -1,
        n = [dh, ph].indexOf(e) >= 0 ? 'y' : 'x';
      S[e] += _[n] * t;
    });
  }
  return S;
}
var um = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: function (e) {
    var t = e.state,
      n = e.options,
      r = e.name;
    if (!t.modifiersData[r]._skip) {
      for (
        var a = n.mainAxis,
          i = void 0 === a || a,
          o = n.altAxis,
          l = void 0 === o || o,
          s = n.fallbackPlacements,
          u = n.padding,
          c = n.boundary,
          f = n.rootBoundary,
          d = n.altBoundary,
          p = n.flipVariations,
          h = void 0 === p || p,
          m = n.allowedAutoPlacements,
          v = t.options.placement,
          g = wh(v),
          b =
            s ||
            (g === v || !h
              ? [qh(v)]
              : (function (e) {
                  if ('auto' === wh(e)) return [];
                  var t = qh(e);
                  return [Jh(e), t, Jh(t)];
                })(v)),
          y = [v].concat(b).reduce(function (e, n) {
            return e.concat(
              'auto' === wh(n)
                ? (function (e, t) {
                    void 0 === t && (t = {});
                    var n = t,
                      r = n.placement,
                      a = n.boundary,
                      i = n.rootBoundary,
                      o = n.padding,
                      l = n.flipVariations,
                      s = n.allowedAutoPlacements,
                      u = void 0 === s ? bh : s,
                      c = Vh(r),
                      f = c
                        ? l
                          ? gh
                          : gh.filter(function (e) {
                              return Vh(e) === c;
                            })
                        : vh,
                      d = f.filter(function (e) {
                        return u.indexOf(e) >= 0;
                      });
                    0 === d.length && (d = f);
                    var p = d.reduce(function (t, n) {
                      return (
                        (t[n] = sm(e, {
                          placement: n,
                          boundary: a,
                          rootBoundary: i,
                          padding: o,
                        })[wh(n)]),
                        t
                      );
                    }, {});
                    return Object.keys(p).sort(function (e, t) {
                      return p[e] - p[t];
                    });
                  })(t, {
                    placement: n,
                    boundary: c,
                    rootBoundary: f,
                    padding: u,
                    flipVariations: h,
                    allowedAutoPlacements: m,
                  })
                : n,
            );
          }, []),
          w = t.rects.reference,
          x = t.rects.popper,
          k = new Map(),
          E = !0,
          S = y[0],
          O = 0;
        O < y.length;
        O++
      ) {
        var _ = y[O],
          C = wh(_),
          P = 'start' === Vh(_),
          N = [dh, ph].indexOf(C) >= 0,
          T = N ? 'width' : 'height',
          D = sm(t, {
            placement: _,
            boundary: c,
            rootBoundary: f,
            altBoundary: d,
            padding: u,
          }),
          L = N ? (P ? hh : mh) : P ? ph : dh;
        w[T] > x[T] && (L = qh(L));
        var A = qh(L),
          M = [];
        if (
          (i && M.push(D[C] <= 0),
          l && M.push(D[L] <= 0, D[A] <= 0),
          M.every(function (e) {
            return e;
          }))
        ) {
          (S = _), (E = !1);
          break;
        }
        k.set(_, M);
      }
      if (E)
        for (
          var z = function (e) {
              var t = y.find(function (t) {
                var n = k.get(t);
                if (n)
                  return n.slice(0, e).every(function (e) {
                    return e;
                  });
              });
              if (t) return (S = t), 'break';
            },
            j = h ? 3 : 1;
          j > 0;
          j--
        ) {
          if ('break' === z(j)) break;
        }
      t.placement !== S &&
        ((t.modifiersData[r]._skip = !0), (t.placement = S), (t.reset = !0));
    }
  },
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
};
function cm(e, t, n) {
  return (
    void 0 === n && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function fm(e) {
  return [dh, hh, ph, mh].some(function (t) {
    return e[t] >= 0;
  });
}
var dm = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: function (e) {
    var t = e.state,
      n = e.name,
      r = t.rects.reference,
      a = t.rects.popper,
      i = t.modifiersData.preventOverflow,
      o = sm(t, { elementContext: 'reference' }),
      l = sm(t, { altBoundary: !0 }),
      s = cm(o, r),
      u = cm(l, a, i),
      c = fm(s),
      f = fm(u);
    (t.modifiersData[n] = {
      referenceClippingOffsets: s,
      popperEscapeOffsets: u,
      isReferenceHidden: c,
      hasPopperEscaped: f,
    }),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        'data-popper-reference-hidden': c,
        'data-popper-escaped': f,
      }));
  },
};
var pm = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: function (e) {
    var t = e.state,
      n = e.options,
      r = e.name,
      a = n.offset,
      i = void 0 === a ? [0, 0] : a,
      o = bh.reduce(function (e, n) {
        return (
          (e[n] = (function (e, t, n) {
            var r = wh(e),
              a = [mh, dh].indexOf(r) >= 0 ? -1 : 1,
              i =
                'function' == typeof n
                  ? n(Object.assign({}, t, { placement: e }))
                  : n,
              o = i[0],
              l = i[1];
            return (
              (o = o || 0),
              (l = (l || 0) * a),
              [mh, hh].indexOf(r) >= 0 ? { x: l, y: o } : { x: o, y: l }
            );
          })(n, t.rects, i)),
          e
        );
      }, {}),
      l = o[t.placement],
      s = l.x,
      u = l.y;
    null != t.modifiersData.popperOffsets &&
      ((t.modifiersData.popperOffsets.x += s),
      (t.modifiersData.popperOffsets.y += u)),
      (t.modifiersData[r] = o);
  },
};
var hm = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: function (e) {
    var t = e.state,
      n = e.name;
    t.modifiersData[n] = lm({
      reference: t.rects.reference,
      element: t.rects.popper,
      strategy: 'absolute',
      placement: t.placement,
    });
  },
  data: {},
};
var mm = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: function (e) {
    var t = e.state,
      n = e.options,
      r = e.name,
      a = n.mainAxis,
      i = void 0 === a || a,
      o = n.altAxis,
      l = void 0 !== o && o,
      s = n.boundary,
      u = n.rootBoundary,
      c = n.altBoundary,
      f = n.padding,
      d = n.tether,
      p = void 0 === d || d,
      h = n.tetherOffset,
      m = void 0 === h ? 0 : h,
      v = sm(t, { boundary: s, rootBoundary: u, padding: f, altBoundary: c }),
      g = wh(t.placement),
      b = Vh(t.placement),
      y = !b,
      w = Ih(g),
      x = 'x' === w ? 'y' : 'x',
      k = t.modifiersData.popperOffsets,
      E = t.rects.reference,
      S = t.rects.popper,
      O =
        'function' == typeof m
          ? m(Object.assign({}, t.rects, { placement: t.placement }))
          : m,
      _ =
        'number' == typeof O
          ? { mainAxis: O, altAxis: O }
          : Object.assign({ mainAxis: 0, altAxis: 0 }, O),
      C = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
      P = { x: 0, y: 0 };
    if (k) {
      if (i) {
        var N,
          T = 'y' === w ? dh : mh,
          D = 'y' === w ? ph : hh,
          L = 'y' === w ? 'height' : 'width',
          A = k[w],
          M = A + v[T],
          z = A - v[D],
          j = p ? -S[L] / 2 : 0,
          R = 'start' === b ? E[L] : S[L],
          I = 'start' === b ? -S[L] : -E[L],
          F = t.elements.arrow,
          U = p && F ? Nh(F) : { width: 0, height: 0 },
          H = t.modifiersData['arrow#persistent']
            ? t.modifiersData['arrow#persistent'].padding
            : { top: 0, right: 0, bottom: 0, left: 0 },
          W = H[T],
          V = H[D],
          B = Fh(0, E[L], U[L]),
          Y = y ? E[L] / 2 - j - B - W - _.mainAxis : R - B - W - _.mainAxis,
          X = y ? -E[L] / 2 + j + B + V + _.mainAxis : I + B + V + _.mainAxis,
          $ = t.elements.arrow && Rh(t.elements.arrow),
          Q = $ ? ('y' === w ? $.clientTop || 0 : $.clientLeft || 0) : 0,
          G = null != (N = null == C ? void 0 : C[w]) ? N : 0,
          q = A + X - G,
          K = Fh(p ? _h(M, A + Y - G - Q) : M, A, p ? Oh(z, q) : z);
        (k[w] = K), (P[w] = K - A);
      }
      if (l) {
        var J,
          Z = 'x' === w ? dh : mh,
          ee = 'x' === w ? ph : hh,
          te = k[x],
          ne = 'y' === x ? 'height' : 'width',
          re = te + v[Z],
          ae = te - v[ee],
          ie = -1 !== [dh, mh].indexOf(g),
          oe = null != (J = null == C ? void 0 : C[x]) ? J : 0,
          le = ie ? re : te - E[ne] - S[ne] - oe + _.altAxis,
          se = ie ? te + E[ne] + S[ne] - oe - _.altAxis : ae,
          ue =
            p && ie
              ? (fe = Fh(le, te, (ce = se))) > ce
                ? ce
                : fe
              : Fh(p ? le : re, te, p ? se : ae);
        (k[x] = ue), (P[x] = ue - te);
      }
      var ce, fe;
      t.modifiersData[r] = P;
    }
  },
  requiresIfExists: ['offset'],
};
function vm(e, t, n) {
  void 0 === n && (n = !1);
  var r,
    a,
    i = Eh(t),
    o =
      Eh(t) &&
      (function (e) {
        var t = e.getBoundingClientRect(),
          n = Ch(t.width) / e.offsetWidth || 1,
          r = Ch(t.height) / e.offsetHeight || 1;
        return 1 !== n || 1 !== r;
      })(t),
    l = Mh(t),
    s = Ph(e, o),
    u = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (i || (!i && !n)) &&
      (('body' !== Dh(t) || tm(l)) &&
        (u =
          (r = t) !== xh(r) && Eh(r)
            ? { scrollLeft: (a = r).scrollLeft, scrollTop: a.scrollTop }
            : Zh(r)),
      Eh(t)
        ? (((c = Ph(t, !0)).x += t.clientLeft), (c.y += t.clientTop))
        : l && (c.x = em(l))),
    {
      x: s.left + u.scrollLeft - c.x,
      y: s.top + u.scrollTop - c.y,
      width: s.width,
      height: s.height,
    }
  );
}
function gm(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  function a(e) {
    n.add(e.name),
      []
        .concat(e.requires || [], e.requiresIfExists || [])
        .forEach(function (e) {
          if (!n.has(e)) {
            var r = t.get(e);
            r && a(r);
          }
        }),
      r.push(e);
  }
  return (
    e.forEach(function (e) {
      t.set(e.name, e);
    }),
    e.forEach(function (e) {
      n.has(e.name) || a(e);
    }),
    r
  );
}
var bm = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function ym() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (e) {
    return !(e && 'function' == typeof e.getBoundingClientRect);
  });
}
const wm = (function (e) {
    void 0 === e && (e = {});
    var t = e,
      n = t.defaultModifiers,
      r = void 0 === n ? [] : n,
      a = t.defaultOptions,
      i = void 0 === a ? bm : a;
    return function (e, t, n) {
      void 0 === n && (n = i);
      var a,
        o,
        l = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, bm, i),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        s = [],
        u = !1,
        c = {
          state: l,
          setOptions: function (n) {
            var a = 'function' == typeof n ? n(l.options) : n;
            f(),
              (l.options = Object.assign({}, i, l.options, a)),
              (l.scrollParents = {
                reference: kh(e)
                  ? rm(e)
                  : e.contextElement
                  ? rm(e.contextElement)
                  : [],
                popper: rm(t),
              });
            var o,
              u,
              d = (function (e) {
                var t = gm(e);
                return yh.reduce(function (e, n) {
                  return e.concat(
                    t.filter(function (e) {
                      return e.phase === n;
                    }),
                  );
                }, []);
              })(
                ((o = [].concat(r, l.options.modifiers)),
                (u = o.reduce(function (e, t) {
                  var n = e[t.name];
                  return (
                    (e[t.name] = n
                      ? Object.assign({}, n, t, {
                          options: Object.assign({}, n.options, t.options),
                          data: Object.assign({}, n.data, t.data),
                        })
                      : t),
                    e
                  );
                }, {})),
                Object.keys(u).map(function (e) {
                  return u[e];
                })),
              );
            return (
              (l.orderedModifiers = d.filter(function (e) {
                return e.enabled;
              })),
              l.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  n = e.options,
                  r = void 0 === n ? {} : n,
                  a = e.effect;
                if ('function' == typeof a) {
                  var i = a({ state: l, name: t, instance: c, options: r }),
                    o = function () {};
                  s.push(i || o);
                }
              }),
              c.update()
            );
          },
          forceUpdate: function () {
            if (!u) {
              var e = l.elements,
                t = e.reference,
                n = e.popper;
              if (ym(t, n)) {
                (l.rects = {
                  reference: vm(t, Rh(n), 'fixed' === l.options.strategy),
                  popper: Nh(n),
                }),
                  (l.reset = !1),
                  (l.placement = l.options.placement),
                  l.orderedModifiers.forEach(function (e) {
                    return (l.modifiersData[e.name] = Object.assign(
                      {},
                      e.data,
                    ));
                  });
                for (var r = 0; r < l.orderedModifiers.length; r++)
                  if (!0 !== l.reset) {
                    var a = l.orderedModifiers[r],
                      i = a.fn,
                      o = a.options,
                      s = void 0 === o ? {} : o,
                      f = a.name;
                    'function' == typeof i &&
                      (l =
                        i({ state: l, options: s, name: f, instance: c }) || l);
                  } else (l.reset = !1), (r = -1);
              }
            }
          },
          update:
            ((a = function () {
              return new Promise(function (e) {
                c.forceUpdate(), e(l);
              });
            }),
            function () {
              return (
                o ||
                  (o = new Promise(function (e) {
                    Promise.resolve().then(function () {
                      (o = void 0), e(a());
                    });
                  })),
                o
              );
            }),
          destroy: function () {
            f(), (u = !0);
          },
        };
      if (!ym(e, t)) return c;
      function f() {
        s.forEach(function (e) {
          return e();
        }),
          (s = []);
      }
      return (
        c.setOptions(n).then(function (e) {
          !u && n.onFirstUpdate && n.onFirstUpdate(e);
        }),
        c
      );
    };
  })({ defaultModifiers: [dm, hm, Xh, Qh, pm, um, mm, Wh] }),
  xm = ['enabled', 'placement', 'strategy', 'modifiers'];
const km = {
    name: 'applyStyles',
    enabled: !1,
    phase: 'afterWrite',
    fn: () => {},
  },
  Em = {
    name: 'ariaDescribedBy',
    enabled: !0,
    phase: 'afterWrite',
    effect:
      ({ state: e }) =>
      () => {
        const { reference: t, popper: n } = e.elements;
        if ('removeAttribute' in t) {
          const e = (t.getAttribute('aria-describedby') || '')
            .split(',')
            .filter(e => e.trim() !== n.id);
          e.length
            ? t.setAttribute('aria-describedby', e.join(','))
            : t.removeAttribute('aria-describedby');
        }
      },
    fn: ({ state: e }) => {
      var t;
      const { popper: n, reference: r } = e.elements,
        a = null == (t = n.getAttribute('role')) ? void 0 : t.toLowerCase();
      if (n.id && 'tooltip' === a && 'setAttribute' in r) {
        const e = r.getAttribute('aria-describedby');
        if (e && -1 !== e.split(',').indexOf(n.id)) return;
        r.setAttribute('aria-describedby', e ? `${e},${n.id}` : n.id);
      }
    },
  },
  Sm = [];
function Om(e, t, n = {}) {
  let {
      enabled: a = !0,
      placement: i = 'bottom',
      strategy: o = 'absolute',
      modifiers: l = Sm,
    } = n,
    s = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    })(n, xm);
  const u = r.exports.useRef(l),
    c = r.exports.useRef(),
    f = r.exports.useCallback(() => {
      var e;
      null == (e = c.current) || e.update();
    }, []),
    d = r.exports.useCallback(() => {
      var e;
      null == (e = c.current) || e.forceUpdate();
    }, []),
    [p, h] =
      ((m = r.exports.useState({
        placement: i,
        update: f,
        forceUpdate: d,
        attributes: {},
        styles: { popper: {}, arrow: {} },
      })),
      (v = Vp()),
      [
        m[0],
        r.exports.useCallback(
          function (e) {
            if (v()) return m[1](e);
          },
          [v, m[1]],
        ),
      ]);
  var m, v;
  const g = r.exports.useMemo(
      () => ({
        name: 'updateStateModifier',
        enabled: !0,
        phase: 'write',
        requires: ['computeStyles'],
        fn: ({ state: e }) => {
          const t = {},
            n = {};
          Object.keys(e.elements).forEach(r => {
            (t[r] = e.styles[r]), (n[r] = e.attributes[r]);
          }),
            h({
              state: e,
              styles: t,
              attributes: n,
              update: f,
              forceUpdate: d,
              placement: e.placement,
            });
        },
      }),
      [f, d, h],
    ),
    b = r.exports.useMemo(
      () => (fh(u.current, l) || (u.current = l), u.current),
      [l],
    );
  return (
    r.exports.useEffect(() => {
      c.current &&
        a &&
        c.current.setOptions({
          placement: i,
          strategy: o,
          modifiers: [...b, g, km],
        });
    }, [o, i, g, a, b]),
    r.exports.useEffect(() => {
      if (a && null != e && null != t)
        return (
          (c.current = wm(
            e,
            t,
            Object.assign({}, s, {
              placement: i,
              strategy: o,
              modifiers: [...b, Em, g],
            }),
          )),
          () => {
            null != c.current &&
              (c.current.destroy(),
              (c.current = void 0),
              h(e =>
                Object.assign({}, e, {
                  attributes: {},
                  styles: { popper: {} },
                }),
              ));
          }
        );
    }, [a, e, t]),
    p
  );
}
function _m(e, t) {
  return e.contains
    ? e.contains(t)
    : e.compareDocumentPosition
    ? e === t || !!(16 & e.compareDocumentPosition(t))
    : void 0;
}
const Cm = () => {};
const Pm = e => e && ('current' in e ? e.current : e);
function Nm(e = {}) {
  return Array.isArray(e)
    ? e
    : Object.keys(e).map(t => ((e[t].name = t), e[t]));
}
function Tm({
  enabled: e,
  enableEvents: t,
  placement: n,
  flip: r,
  offset: a,
  fixed: i,
  containerPadding: o,
  arrowElement: l,
  popperConfig: s = {},
}) {
  var u, c, f, d;
  const p = (function (e) {
    const t = {};
    return Array.isArray(e)
      ? (null == e ||
          e.forEach(e => {
            t[e.name] = e;
          }),
        t)
      : e || t;
  })(s.modifiers);
  return Object.assign({}, s, {
    placement: n,
    enabled: e,
    strategy: i ? 'fixed' : s.strategy,
    modifiers: Nm(
      Object.assign({}, p, {
        eventListeners: { enabled: t },
        preventOverflow: Object.assign({}, p.preventOverflow, {
          options: o
            ? Object.assign(
                { padding: o },
                null == (u = p.preventOverflow) ? void 0 : u.options,
              )
            : null == (c = p.preventOverflow)
            ? void 0
            : c.options,
        }),
        offset: {
          options: Object.assign(
            { offset: a },
            null == (f = p.offset) ? void 0 : f.options,
          ),
        },
        arrow: Object.assign({}, p.arrow, {
          enabled: !!l,
          options: Object.assign(
            {},
            null == (d = p.arrow) ? void 0 : d.options,
            { element: l },
          ),
        }),
        flip: Object.assign({ enabled: !!r }, p.flip),
      }),
    ),
  });
}
const Dm = r.exports.createContext(Pp ? window : void 0);
Dm.Provider;
const Lm = (e, t) => {
  var n;
  return Pp
    ? null == e
      ? (t || rr()).body
      : ('function' == typeof e && (e = e()),
        e && 'current' in e && (e = e.current),
        (null != (n = e) && n.nodeType && e) || null)
    : null;
};
function Am(e, t) {
  const n = r.exports.useContext(Dm),
    [a, i] = r.exports.useState(() => Lm(e, null == n ? void 0 : n.document));
  if (!a) {
    const t = Lm(e);
    t && i(t);
  }
  return (
    r.exports.useEffect(() => {
      t && a && t(a);
    }, [t, a]),
    r.exports.useEffect(() => {
      const t = Lm(e);
      t !== a && i(t);
    }, [e, a]),
    a
  );
}
const Mm = () => {};
function zm(e, t, { disabled: n, clickTrigger: a } = {}) {
  const i = t || Mm;
  !(function (e, t = Cm, { disabled: n, clickTrigger: a = 'click' } = {}) {
    const i = r.exports.useRef(!1),
      o = r.exports.useCallback(
        t => {
          const n = Pm(e);
          var r;
          i.current = !(
            n &&
            ((r = t), !(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey)) &&
            (function (e) {
              return 0 === e.button;
            })(t) &&
            !_m(n, t.target)
          );
        },
        [e],
      ),
      l = Hp(e => {
        i.current || t(e);
      });
    r.exports.useEffect(() => {
      if (n || null == e) return;
      const t = rr(Pm(e));
      let r = (t.defaultView || window).event;
      const i = Lp(t, a, o, !0),
        s = Lp(t, a, e => {
          e !== r ? l(e) : (r = void 0);
        });
      let u = [];
      return (
        'ontouchstart' in t.documentElement &&
          (u = [].slice.call(t.body.children).map(e => Lp(e, 'mousemove', Cm))),
        () => {
          i(), s(), u.forEach(e => e());
        }
      );
    }, [e, n, a, o, l]);
  })(e, i, { disabled: n, clickTrigger: a });
  const o = Hp(e => {
    27 === e.keyCode && i(e);
  });
  r.exports.useEffect(() => {
    if (n || null == e) return;
    const t = rr(Pm(e));
    let r = (t.defaultView || window).event;
    const a = Lp(t, 'keyup', e => {
      e !== r ? o(e) : (r = void 0);
    });
    return () => {
      a();
    };
  }, [e, n, o]);
}
const jm = r.exports.forwardRef((e, t) => {
  const {
      flip: n,
      offset: a,
      placement: i,
      containerPadding: o,
      popperConfig: l = {},
      transition: s,
    } = e,
    [u, c] = Wp(),
    [f, d] = Wp(),
    p = Ip(c, t),
    h = Am(e.container),
    m = Am(e.target),
    [v, g] = r.exports.useState(!e.show),
    b = Om(
      m,
      u,
      Tm({
        placement: i,
        enableEvents: !!e.show,
        containerPadding: o || 5,
        flip: n,
        offset: a,
        arrowElement: f,
        popperConfig: l,
      }),
    );
  e.show ? v && g(!1) : e.transition || v || g(!0);
  const y = (...t) => {
      g(!0), e.onExited && e.onExited(...t);
    },
    w = e.show || (s && !v);
  if (
    (zm(u, e.onHide, {
      disabled: !e.rootClose || e.rootCloseDisabled,
      clickTrigger: e.rootCloseEvent,
    }),
    !w)
  )
    return null;
  let x = e.children(
    Object.assign({}, b.attributes.popper, { style: b.styles.popper, ref: p }),
    {
      popper: b,
      placement: i,
      show: !!e.show,
      arrowProps: Object.assign({}, b.attributes.arrow, {
        style: b.styles.arrow,
        ref: d,
      }),
    },
  );
  if (s) {
    const {
      onExit: t,
      onExiting: n,
      onEnter: r,
      onEntering: a,
      onEntered: i,
    } = e;
    x = Un.exports.jsx(s, {
      in: e.show,
      appear: !0,
      onExit: t,
      onExiting: n,
      onExited: y,
      onEnter: r,
      onEntering: a,
      onEntered: i,
      children: x,
    });
  }
  return h ? Ep.createPortal(x, h) : null;
});
jm.displayName = 'Overlay';
var Rm = Jp('popover-header'),
  Im = Jp('popover-body');
function Fm(e, t) {
  let n = e;
  return (
    'left' === e
      ? (n = t ? 'end' : 'start')
      : 'right' === e && (n = t ? 'start' : 'end'),
    n
  );
}
const Um = r.exports.forwardRef((e, t) => {
  var n = e,
    {
      bsPrefix: r,
      placement: a,
      className: i,
      style: o,
      children: l,
      body: s,
      arrowProps: u,
      popper: c,
      show: f,
    } = n,
    d = g(n, [
      'bsPrefix',
      'placement',
      'className',
      'style',
      'children',
      'body',
      'arrowProps',
      'popper',
      'show',
    ]);
  const p = tr(r, 'popover'),
    h = nr(),
    [b] = (null == a ? void 0 : a.split('-')) || [],
    y = Fm(b, h);
  return Un.exports.jsxs(
    'div',
    v(
      m(
        {
          ref: t,
          role: 'tooltip',
          style: o,
          'x-placement': b,
          className: In(i, p, b && `bs-popover-${y}`),
        },
        d,
      ),
      {
        children: [
          Un.exports.jsx('div', m({ className: 'popover-arrow' }, u)),
          s ? Un.exports.jsx(Im, { children: l }) : l,
        ],
      },
    ),
  );
});
Um.defaultProps = { placement: 'right' };
var Hm = Object.assign(Um, { Header: Rm, Body: Im, POPPER_OFFSET: [0, 8] });
const Wm = { transition: Gp, rootClose: !1, show: !1, placement: 'top' };
const Vm = r.exports.forwardRef((e, t) => {
  var n = e,
    { children: a, transition: i, popperConfig: o = {} } = n,
    l = g(n, ['children', 'transition', 'popperConfig']);
  const s = r.exports.useRef({}),
    [u, c] = (function () {
      const e = r.exports.useRef(null),
        t = tr(void 0, 'popover'),
        n = r.exports.useMemo(
          () => ({
            name: 'offset',
            options: {
              offset: () => {
                return e.current &&
                  ((n = e.current),
                  (r = t),
                  n.classList
                    ? r && n.classList.contains(r)
                    : -1 !==
                      (
                        ' ' +
                        (n.className.baseVal || n.className) +
                        ' '
                      ).indexOf(' ' + r + ' '))
                  ? Hm.POPPER_OFFSET
                  : [0, 0];
                var n, r;
              },
            },
          }),
          [t],
        );
      return [e, [n]];
    })(),
    f = Ip(t, u),
    d = !0 === i ? Gp : i || void 0;
  return Un.exports.jsx(
    jm,
    v(m({}, l), {
      ref: f,
      popperConfig: v(m({}, o), { modifiers: c.concat(o.modifiers || []) }),
      transition: d,
      children: (e, { arrowProps: t, popper: n, show: o }) => {
        var l, u;
        !(function (e, t) {
          const { ref: n } = e,
            { ref: r } = t;
          (e.ref = n.__wrapped || (n.__wrapped = e => n(Fp(e)))),
            (t.ref = r.__wrapped || (r.__wrapped = e => r(Fp(e))));
        })(e, t);
        const c = null == n ? void 0 : n.placement,
          f = Object.assign(s.current, {
            state: null == n ? void 0 : n.state,
            scheduleUpdate: null == n ? void 0 : n.update,
            placement: c,
            outOfBoundaries:
              (null == n ||
              null == (l = n.state) ||
              null == (u = l.modifiersData.hide)
                ? void 0
                : u.isReferenceHidden) || !1,
          });
        return 'function' == typeof a
          ? a(
              v(
                m(
                  v(m({}, e), { placement: c, show: o }),
                  !i && o && { className: 'show' },
                ),
                { popper: f, arrowProps: t },
              ),
            )
          : r.exports.cloneElement(
              a,
              v(m({}, e), {
                placement: c,
                arrowProps: t,
                popper: f,
                className: In(a.props.className, !i && o && 'show'),
                style: m(m({}, a.props.style), e.style),
              }),
            );
      },
    }),
  );
});
(Vm.displayName = 'Overlay'), (Vm.defaultProps = Wm);
var Bm = Vm;
function Ym(e, t, n) {
  const [r] = t,
    a = r.currentTarget,
    i = r.relatedTarget || r.nativeEvent[n];
  (i && i === a) || _m(a, i) || e(...t);
}
function Xm(e) {
  var t = e,
    {
      trigger: n,
      overlay: a,
      children: i,
      popperConfig: o = {},
      show: l,
      defaultShow: s = !1,
      onToggle: u,
      delay: c,
      placement: f,
      flip: d = f && -1 !== f.indexOf('auto'),
    } = t,
    p = g(t, [
      'trigger',
      'overlay',
      'children',
      'popperConfig',
      'show',
      'defaultShow',
      'onToggle',
      'delay',
      'placement',
      'flip',
    ]);
  const h = r.exports.useRef(null),
    b = Ip(h, i.ref),
    y = sh(),
    w = r.exports.useRef(''),
    [x, k] =
      ((E = l),
      (S = s),
      (O = u),
      (_ = r.exports.useRef(void 0 !== E)),
      (C = r.exports.useState(S)),
      (P = C[0]),
      (N = C[1]),
      (T = void 0 !== E),
      (D = _.current),
      (_.current = T),
      !T && D && P !== S && N(S),
      [
        T ? E : P,
        r.exports.useCallback(
          function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            O && O.apply(void 0, [e].concat(n)), N(e);
          },
          [O],
        ),
      ]);
  var E, S, O, _, C, P, N, T, D;
  const L = (function (e) {
      return e && 'object' == typeof e ? e : { show: e, hide: e };
    })(c),
    {
      onFocus: A,
      onBlur: M,
      onClick: z,
    } = 'function' != typeof i ? r.exports.Children.only(i).props : {},
    j = r.exports.useCallback(() => {
      y.clear(),
        (w.current = 'show'),
        L.show
          ? y.set(() => {
              'show' === w.current && k(!0);
            }, L.show)
          : k(!0);
    }, [L.show, k, y]),
    R = r.exports.useCallback(() => {
      y.clear(),
        (w.current = 'hide'),
        L.hide
          ? y.set(() => {
              'hide' === w.current && k(!1);
            }, L.hide)
          : k(!1);
    }, [L.hide, k, y]),
    I = r.exports.useCallback(
      (...e) => {
        j(), null == A || A(...e);
      },
      [j, A],
    ),
    F = r.exports.useCallback(
      (...e) => {
        R(), null == M || M(...e);
      },
      [R, M],
    ),
    U = r.exports.useCallback(
      (...e) => {
        k(!x), null == z || z(...e);
      },
      [z, k, x],
    ),
    H = r.exports.useCallback(
      (...e) => {
        Ym(j, e, 'fromElement');
      },
      [j],
    ),
    W = r.exports.useCallback(
      (...e) => {
        Ym(R, e, 'toElement');
      },
      [R],
    ),
    V = null == n ? [] : [].concat(n),
    B = {
      ref: e => {
        b(Fp(e));
      },
    };
  return (
    -1 !== V.indexOf('click') && (B.onClick = U),
    -1 !== V.indexOf('focus') && ((B.onFocus = I), (B.onBlur = F)),
    -1 !== V.indexOf('hover') && ((B.onMouseOver = H), (B.onMouseOut = W)),
    Un.exports.jsxs(Un.exports.Fragment, {
      children: [
        'function' == typeof i ? i(B) : r.exports.cloneElement(i, B),
        Un.exports.jsx(
          Bm,
          v(m({}, p), {
            show: x,
            onHide: R,
            flip: d,
            placement: f,
            popperConfig: o,
            target: h.current,
            children: a,
          }),
        ),
      ],
    })
  );
}
Xm.defaultProps = { defaultShow: !1, trigger: ['hover', 'focus'] };
const $m = r.exports.forwardRef((e, t) => {
  var n = e,
    {
      bsPrefix: r,
      placement: a,
      className: i,
      style: o,
      children: l,
      arrowProps: s,
      popper: u,
      show: c,
    } = n,
    f = g(n, [
      'bsPrefix',
      'placement',
      'className',
      'style',
      'children',
      'arrowProps',
      'popper',
      'show',
    ]);
  r = tr(r, 'tooltip');
  const d = nr(),
    [p] = (null == a ? void 0 : a.split('-')) || [],
    h = Fm(p, d);
  return Un.exports.jsxs(
    'div',
    v(
      m(
        {
          ref: t,
          style: o,
          role: 'tooltip',
          'x-placement': p,
          className: In(i, r, `bs-tooltip-${h}`),
        },
        f,
      ),
      {
        children: [
          Un.exports.jsx('div', m({ className: 'tooltip-arrow' }, s)),
          Un.exports.jsx('div', { className: `${r}-inner`, children: l }),
        ],
      },
    ),
  );
});
($m.defaultProps = { placement: 'right' }), ($m.displayName = 'Tooltip');
var Qm = $m;
class Gm {
  constructor(e, t, n, r, a) {
    b(this, 'tileId'),
      b(this, 'name'),
      b(this, 'asset'),
      b(this, 'thumbnailAsset'),
      b(this, 'price'),
      (this.tileId = e),
      (this.name = t),
      (this.asset = n),
      (this.thumbnailAsset = r),
      (this.price = a);
  }
}
class qm {}
b(qm, 'towers', [
  new Gm(2, 'tower1', 'tower_round.png', 'tower_round_thumbnail.png', 100),
  new Gm(3, 'tower2', 'tower_square.png', 'tower_square_thumbnail.png', 200),
]);
class Km {}
b(Km, 'TOWER_SELECTED', 'TOWER_SELECTED'),
  b(Km, 'ERASER_SELECTED', 'ERASER_SELECTED'),
  b(Km, 'MOVE_SELECTED', 'MOVE_SELECTED'),
  b(Km, 'COINS_CHANGED', 'COINS_CHANGED'),
  b(Km, 'LOAD_MAP', 'LOAD_MAP'),
  b(Km, 'MAP_DATA_CHANGED', 'MAP_DATA_CHANGED'),
  b(Km, 'CLEAR_MAP', 'CLEAR_MAP');
const Jm = new t.Events.EventEmitter();
var Zm;
null === (Zm = window.HTMLSlotElement) ||
  void 0 === Zm ||
  Zm.prototype.assignedElements;
var ev = {
  setEventEmitter(e, t) {
    return (
      void 0 === t && (t = Phaser.Events.EventEmitter),
      (this._privateEE = !0 === e || void 0 === e),
      (this._eventEmitter = this._privateEE ? new t() : e),
      this
    );
  },
  destroyEventEmitter() {
    return (
      this._eventEmitter && this._privateEE && this._eventEmitter.shutdown(),
      this
    );
  },
  getEventEmitter() {
    return this._eventEmitter;
  },
  on: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.on.apply(this._eventEmitter, arguments),
      this
    );
  },
  once: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.once.apply(this._eventEmitter, arguments),
      this
    );
  },
  off: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.off.apply(this._eventEmitter, arguments),
      this
    );
  },
  emit: function (e) {
    return (
      this._eventEmitter &&
        e &&
        this._eventEmitter.emit.apply(this._eventEmitter, arguments),
      this
    );
  },
  addListener: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.addListener.apply(this._eventEmitter, arguments),
      this
    );
  },
  removeListener: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.removeListener.apply(this._eventEmitter, arguments),
      this
    );
  },
  removeAllListeners: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.removeAllListeners.apply(
          this._eventEmitter,
          arguments,
        ),
      this
    );
  },
  listenerCount: function () {
    return this._eventEmitter
      ? this._eventEmitter.listenerCount.apply(this._eventEmitter, arguments)
      : 0;
  },
  listeners: function () {
    return this._eventEmitter
      ? this._eventEmitter.listeners.apply(this._eventEmitter, arguments)
      : [];
  },
  eventNames: function () {
    return this._eventEmitter
      ? this._eventEmitter.eventNames.apply(this._eventEmitter, arguments)
      : [];
  },
};
const tv = Phaser.Scene;
var nv = function (e) {
    return e instanceof tv;
  },
  rv = function (e) {
    return null == e || 'object' != typeof e
      ? null
      : nv(e)
      ? e
      : e.scene && nv(e.scene)
      ? e.scene
      : e.parent && e.parent.scene && nv(e.parent.scene)
      ? e.parent.scene
      : void 0;
  };
const av = Phaser.Utils.Objects.GetValue;
class iv {
  constructor(e, t) {
    (this.parent = e),
      (this.scene = rv(e)),
      (this.isShutdown = !1),
      this.setEventEmitter(av(t, 'eventEmitter', !0)),
      this.parent && this.parent === this.scene
        ? this.scene.events.once('shutdown', this.onSceneDestroy, this)
        : this.parent &&
          this.parent.once &&
          this.parent.once('destroy', this.onParentDestroy, this);
  }
  shutdown(e) {
    this.isShutdown ||
      (this.parent && this.parent === this.scene
        ? this.scene.events.off('shutdown', this.onSceneDestroy, this)
        : this.parent &&
          this.parent.once &&
          this.parent.off('destroy', this.onParentDestroy, this),
      this.destroyEventEmitter(),
      (this.parent = void 0),
      (this.scene = void 0),
      (this.isShutdown = !0));
  }
  destroy(e) {
    this.shutdown(e);
  }
  onSceneDestroy() {
    this.destroy(!0);
  }
  onParentDestroy(e, t) {
    this.destroy(t);
  }
}
Object.assign(iv.prototype, ev);
const ov = Phaser.Utils.Objects.GetValue;
class lv extends iv {
  constructor(e, t) {
    super(e, t),
      (this._isRunning = !1),
      (this.isPaused = !1),
      (this.tickingState = !1),
      this.setTickingMode(ov(t, 'tickingMode', 1));
  }
  boot() {
    2 !== this.tickingMode || this.tickingState || this.startTicking();
  }
  shutdown(e) {
    this.isShutdown ||
      (this.stop(), this.tickingState && this.stopTicking(), super.shutdown(e));
  }
  setTickingMode(e) {
    'string' == typeof e && (e = sv[e]), (this.tickingMode = e);
  }
  startTicking() {
    this.tickingState = !0;
  }
  stopTicking() {
    this.tickingState = !1;
  }
  get isRunning() {
    return this._isRunning;
  }
  set isRunning(e) {
    this._isRunning !== e &&
      ((this._isRunning = e),
      1 === this.tickingMode &&
        e != this.tickingState &&
        (e ? this.startTicking() : this.stopTicking()));
  }
  start() {
    return (this.isPaused = !1), (this.isRunning = !0), this;
  }
  pause() {
    return (
      this.isRunning && ((this.isPaused = !0), (this.isRunning = !1)), this
    );
  }
  resume() {
    return this.isPaused && (this.isRunning = !0), this;
  }
  stop() {
    return (this.isPaused = !1), (this.isRunning = !1), this;
  }
  complete() {
    (this.isPaused = !1),
      (this.isRunning = !1),
      this.emit('complete', this.parent, this);
  }
}
const sv = { no: 0, lazy: 1, always: 2 },
  uv = Phaser.Utils.Objects.GetValue;
class cv extends lv {
  constructor(e, t) {
    var n = rv(e);
    n === e && (e = void 0),
      super(n, t),
      (this.gameObject = e),
      e && e.setInteractive(uv(t, 'inputConfig', void 0)),
      (this._enable = void 0),
      this.resetFromJSON(t),
      this.boot();
  }
  resetFromJSON(e) {
    return (
      this.setEnable(uv(e, 'enable', !0)),
      this.setDetectBounds(),
      void 0 === this.gameObject
        ? this.setDetectBounds(uv(e, 'bounds', void 0))
        : this.setDetectBounds(),
      (this.tracerState = fv),
      (this.pointer = void 0),
      (this.lastPointer = void 0),
      (this.movedState = !1),
      (this.isTouchingAnyObject = !1),
      this
    );
  }
  boot() {
    super.boot(),
      this.gameObject
        ? this.gameObject.on('pointerdown', this.onPointerDown, this)
        : this.scene.input.on('pointerdown', this.onPointerDown, this),
      this.scene.input.on('pointerup', this.onPointerUp, this),
      this.scene.input.on('pointermove', this.onPointerMove, this),
      this.scene.events.once('shutdown', this.destroy, this);
  }
  shutdown(e) {
    this.scene &&
      (this.gameObject ||
        this.scene.input.off('pointerdown', this.onPointerDown, this),
      this.scene.input.off('pointerup', this.onPointerUp, this),
      this.scene.input.off('pointermove', this.onPointerMove, this),
      this.scene.events.off('shutdown', this.destroy, this),
      (this.gameObject = void 0),
      (this.bounds = void 0),
      (this.pointer = void 0),
      (this.lastPointer = void 0),
      (this.movedState = !1),
      super.shutdown(e));
  }
  get enable() {
    return this._enable;
  }
  set enable(e) {
    if (this._enable !== e)
      return e || this.dragCancel(), (this._enable = e), this;
  }
  setEnable(e) {
    return void 0 === e && (e = !0), (this.enable = e), this;
  }
  setDetectBounds(e) {
    return (this.bounds = e), this;
  }
  toggleEnable() {
    return this.setEnable(!this.enable), this;
  }
  onPointerDown(e, t) {
    this.enable &&
      void 0 === this.pointer &&
      (!this.bounds || this.bounds.contains(e.x, e.y)) &&
      this.pointer !== e &&
      ((this.pointer = e),
      (this.lastPointer = e),
      (this.movedState = !1),
      (this.tracerState = dv),
      void 0 === this.gameObject && (this.isTouchingAnyObject = t.length > 0),
      this.onDragStart());
  }
  onPointerUp(e) {
    this.enable &&
      (!this.bounds || this.bounds.contains(e.x, e.y)) &&
      this.pointer === e &&
      ((this.pointer = void 0),
      (this.movedState = !1),
      (this.tracerState = fv),
      this.onDragEnd());
  }
  onPointerMove(e) {
    if (this.enable && e.isDown) {
      var t = !this.bounds || this.bounds.contains(e.x, e.y),
        n = this.pointer === e;
      (!n && t) ||
        (n && !t
          ? this.onPointerUp(e)
          : (this.movedState ||
              (this.movedState = e.x !== e.downX || e.y !== e.downY),
            this.movedState && this.onDrag()));
    }
  }
  dragCancel() {
    return (
      this.tracerState === dv && this.onDragEnd(),
      (this.pointer = void 0),
      (this.tracerState = fv),
      this
    );
  }
  onDragStart() {
    this.emit('dragstart', this);
  }
  onDragEnd() {
    this.emit('dragend', this);
  }
  onDrag() {
    this.emit('drag', this);
  }
  preUpdate(e, t) {}
  postUpdate(e, t) {}
  startTicking() {
    super.startTicking(),
      this.scene.events.on('preupdate', this.preUpdate, this),
      this.scene.events.on('postupdate', this.postUpdate, this);
  }
  stopTicking() {
    super.stopTicking(),
      this.scene &&
        (this.scene.events.off('preupdate', this.preUpdate, this),
        this.scene.events.off('postupdate', this.postUpdate, this));
  }
  setRecongizedStateObject(e) {
    return (this.recongizedState = e), this;
  }
  get state() {
    return this.recongizedState.state;
  }
  set state(e) {
    this.recongizedState.state = e;
  }
  cancel() {
    return (this.state = pv), this;
  }
}
const fv = 0,
  dv = 1,
  pv = 'IDLE';
var hv = function (e, t, n) {
  if (e && 'number' != typeof e) {
    if (e.hasOwnProperty(t)) return e[t];
    if (-1 !== t.indexOf('.')) {
      for (var r = t.split('.'), a = e, i = n, o = 0; o < r.length; o++) {
        if (!a.hasOwnProperty(r[o])) {
          i = n;
          break;
        }
        (i = a[r[o]]), (a = a[r[o]]);
      }
      return i;
    }
    return n;
  }
  return n;
};
class mv {
  constructor(e) {
    var t = hv(e, 'states', void 0);
    t && this.addStates(t);
    var n = hv(e, 'extend', void 0);
    if (n)
      for (var r in n)
        (this.hasOwnProperty(r) && void 0 !== this[r]) || (this[r] = n[r]);
    var a = hv(e, 'eventEmitter', void 0),
      i = hv(e, 'EventEmitterClass', void 0);
    this.setEventEmitter(a, i), (this._stateLock = !1), this.resetFromJSON(e);
  }
  shutdown() {
    this.destroyEventEmitter();
  }
  destroy() {
    this.shutdown();
  }
  resetFromJSON(e) {
    this.setEnable(hv(e, 'enable', !0)), this.start(hv(e, 'start', void 0));
    var t = hv(e, 'init', void 0);
    return t && t.call(this), this;
  }
  toJSON() {
    return {
      curState: this.state,
      prevState: this.prevState,
      enable: this.enable,
      start: this._start,
    };
  }
  setEnable(e) {
    return void 0 === e && (e = !0), (this.enable = e), this;
  }
  toggleEnable() {
    return this.setEnable(!this.enable), this;
  }
  set state(e) {
    if (this.enable && !this._stateLock && this._state !== e) {
      if (
        ((this._prevState = this._state),
        (this._state = e),
        (this._stateLock = !0),
        this.emit('statechange', this),
        null != this._prevState)
      ) {
        var t = 'exit_' + this._prevState,
          n = this[t];
        n && n.call(this), this.emit(t, this);
      }
      if (((this._stateLock = !1), null != this._state)) {
        var r = 'enter_' + this._state,
          a = this[r];
        a && a.call(this), this.emit(r, this);
      }
    }
  }
  get state() {
    return this._state;
  }
  get prevState() {
    return this._prevState;
  }
  start(e) {
    return (
      (this._start = e), (this._prevState = void 0), (this._state = e), this
    );
  }
  goto(e) {
    return null != e && (this.state = e), this;
  }
  next() {
    var e,
      t = this['next_' + this.state];
    return (
      t && (e = 'string' == typeof t ? t : t.call(this)), this.goto(e), this
    );
  }
  addState(e, t) {
    var n = hv(t, 'next', void 0);
    n && (this['next_' + e] = n);
    var r = hv(t, 'exit', void 0);
    r && (this['exit_' + e] = r);
    var a = hv(t, 'enter', void 0);
    return a && (this['enter_' + e] = a), this;
  }
  addStates(e) {
    for (var t in e) this.addState(t, e[t]);
    return this;
  }
  update(e, t, n) {
    void 0 === n && (n = 'update');
    var r = this[n + '_' + this.state];
    r && r.call(this, e, t);
  }
  preupdate(e, t) {
    this.update(e, t, 'preupdate');
  }
  postupdate(e, t) {
    this.update(e, t, 'postupdate');
  }
}
Object.assign(mv.prototype, ev),
  Phaser.Utils.Objects.GetValue,
  Phaser.Math.Distance.Between,
  Phaser.Utils.Objects.GetValue;
const vv = Phaser.Utils.Objects.GetValue;
class gv extends cv {
  constructor(e, t) {
    super(e, t);
    var n = this,
      r = {
        states: {
          IDLE: {},
          BEGIN: {
            enter: function () {
              var e = n.pointer;
              (n.startX = e.x),
                (n.startY = e.y),
                (n.startWorldX = e.worldX),
                (n.startWorldY = e.worldY);
            },
          },
          RECOGNIZED: {
            enter: function () {
              n.emit('panstart', n, n.gameObject, n.lastPointer);
            },
            exit: function () {
              var e = n.lastPointer;
              (n.endX = e.x),
                (n.endY = e.y),
                (n.endWorldX = e.worldX),
                (n.endWorldY = e.worldY),
                n.emit('panend', n, n.gameObject, n.lastPointer);
            },
          },
        },
        init: function () {
          this.state = bv;
        },
        eventEmitter: !1,
      };
    this.setRecongizedStateObject(new mv(r));
  }
  resetFromJSON(e) {
    return (
      super.resetFromJSON(e),
      this.setDragThreshold(vv(e, 'threshold', 10)),
      this
    );
  }
  onDragStart() {
    (this.state = yv), 0 === this.dragThreshold && (this.state = wv);
  }
  onDragEnd() {
    this.state = bv;
  }
  onDrag() {
    switch (this.state) {
      case yv:
        this.pointer.getDistance() >= this.dragThreshold && (this.state = wv);
        break;
      case wv:
        var e = this.pointer.position,
          t = this.pointer.prevPosition;
        (this.dx = e.x - t.x), (this.dy = e.y - t.y);
        var n = this.pointer;
        (this.x = n.x),
          (this.y = n.y),
          (this.worldX = n.worldX),
          (this.worldY = n.worldY),
          this.emit('pan', this, this.gameObject, this.lastPointer);
    }
  }
  get isPanned() {
    return this.state === wv;
  }
  setDragThreshold(e) {
    return (this.dragThreshold = e), this;
  }
}
const bv = 'IDLE',
  yv = 'BEGIN',
  wv = 'RECOGNIZED',
  xv = Phaser.Math.Distance.Between,
  kv = Phaser.Math.Angle.Between;
var Ev = {
    getDt: function () {
      return this.scene.sys.game.loop.delta;
    },
    getVelocity: function () {
      var e = this.pointer.position,
        t = this.pointer.prevPosition;
      return xv(t.x, t.y, e.x, e.y) / (0.001 * this.getDt());
    },
    getVelocityX: function () {
      var e = this.pointer.position,
        t = this.pointer.prevPosition;
      return Math.abs(e.x - t.x) / (0.001 * this.getDt());
    },
    getVelocityY: function () {
      var e = this.pointer.position,
        t = this.pointer.prevPosition;
      return Math.abs(e.y - t.y) / (0.001 * this.getDt());
    },
    getVelocityAngle: function () {
      var e = this.pointer.position,
        t = this.pointer.prevPosition;
      return kv(t.x, t.y, e.x, e.y);
    },
  },
  Sv = { 'up&down': 0, 'left&right': 1, '4dir': 2, '8dir': 3 },
  Ov = {};
const _v = Phaser.Utils.Objects.GetValue,
  Cv = Phaser.Math.RadToDeg;
Object.assign(
  class extends cv {
    constructor(e, t) {
      super(e, t);
      var n = this,
        r = {
          states: {
            IDLE: {
              enter: function () {
                (n.x = 0), (n.y = 0), (n.worldX = 0), (n.worldY = 0);
              },
              exit: function () {
                var e = n.lastPointer;
                (n.x = e.x),
                  (n.y = e.y),
                  (n.worldX = e.worldX),
                  (n.worldY = e.worldY);
              },
            },
            BEGIN: {
              enter: function () {
                n.validDrag = !1;
              },
            },
            RECOGNIZED: {
              enter: function () {
                n.start(),
                  n.updateDirectionStates(),
                  n.emit('swipe', n, n.gameObject, n.lastPointer);
              },
              exit: function () {
                n.stop(), n.clearDirectionStates();
              },
            },
          },
          init: function () {
            this.state = Pv;
          },
          eventEmitter: !1,
        };
      this.setRecongizedStateObject(new mv(r)), this.clearDirectionStates();
    }
    resetFromJSON(e) {
      return (
        super.resetFromJSON(e),
        this.setDragThreshold(_v(e, 'threshold', 10)),
        this.setVelocityThreshold(_v(e, 'velocityThreshold', 1e3)),
        this.setDirectionMode(_v(e, 'dir', '8dir')),
        this
      );
    }
    onDragStart() {
      this.state = Nv;
    }
    onDragEnd() {
      this.state = Pv;
    }
    onDrag() {
      this.state === Nv &&
        (this.validDrag ||
          (this.validDrag =
            0 === this.dragThreshold ||
            this.pointer.getDistance() >= this.dragThreshold),
        this.validDrag &&
          this.dragVelocity > this.velocityThreshold &&
          (this.state = Tv));
    }
    postUpdate(e, t) {
      this.isRunning && this.enable && this.state === Tv && (this.state = Pv);
    }
    get isSwiped() {
      return this.state === Tv;
    }
    get dragVelocity() {
      var e;
      switch (this.dirMode) {
        case 0:
          e = this.getVelocityY();
          break;
        case 1:
          e = this.getVelocityX();
          break;
        default:
          e = this.getVelocity();
      }
      return e;
    }
    setDragThreshold(e) {
      return (this.dragThreshold = e), this;
    }
    setVelocityThreshold(e) {
      return (this.velocityThreshold = e), this;
    }
    setDirectionMode(e) {
      return 'string' == typeof e && (e = Sv[e]), (this.dirMode = e), this;
    }
    updateDirectionStates() {
      return (
        (function (e, t, n) {
          switch (
            (void 0 === n ? (n = {}) : !0 === n && (n = Ov),
            (n.left = !1),
            (n.right = !1),
            (n.up = !1),
            (n.down = !1),
            (e = (e + 360) % 360),
            t)
          ) {
            case 0:
              e < 180 ? (n.down = !0) : (n.up = !0);
              break;
            case 1:
              e > 90 && e <= 270 ? (n.left = !0) : (n.right = !0);
              break;
            case 2:
              e > 45 && e <= 135
                ? (n.down = !0)
                : e > 135 && e <= 225
                ? (n.left = !0)
                : e > 225 && e <= 315
                ? (n.up = !0)
                : (n.right = !0);
              break;
            case 3:
              e > 22.5 && e <= 67.5
                ? ((n.down = !0), (n.right = !0))
                : e > 67.5 && e <= 112.5
                ? (n.down = !0)
                : e > 112.5 && e <= 157.5
                ? ((n.down = !0), (n.left = !0))
                : e > 157.5 && e <= 202.5
                ? (n.left = !0)
                : e > 202.5 && e <= 247.5
                ? ((n.left = !0), (n.up = !0))
                : e > 247.5 && e <= 292.5
                ? (n.up = !0)
                : e > 292.5 && e <= 337.5
                ? ((n.up = !0), (n.right = !0))
                : (n.right = !0);
          }
        })(Cv(this.getVelocityAngle()), this.dirMode, this),
        this
      );
    }
    clearDirectionStates() {
      return (
        (this.left = !1),
        (this.right = !1),
        (this.up = !1),
        (this.down = !1),
        this
      );
    }
  }.prototype,
  Ev,
);
const Pv = 'IDLE',
  Nv = 'BEGIN',
  Tv = 'RECOGNIZED';
var Dv = function (e) {
  if (Array.isArray(e)) e.length = 0;
  else for (var t in e) delete e[t];
};
const Lv = Phaser.Utils.Objects.GetValue,
  Av = Phaser.Utils.Array.SpliceOne,
  Mv = Phaser.Math.Distance.Between,
  zv = Phaser.Math.Angle.Between;
class jv {
  constructor(e, t) {
    var n = e.input.manager.pointersTotal - 1;
    n < 2 && e.input.addPointer(2 - n),
      (this.scene = e),
      this.setEventEmitter(Lv(t, 'eventEmitter', void 0)),
      (this._enable = void 0),
      (this.pointers = []),
      (this.movedState = {}),
      this.resetFromJSON(t),
      this.boot();
  }
  resetFromJSON(e) {
    return (
      this.setEnable(Lv(e, 'enable', !0)),
      (this.bounds = Lv(e, 'bounds', void 0)),
      (this.tracerState = Iv),
      (this.pointers.length = 0),
      Dv(this.movedState),
      this
    );
  }
  boot() {
    this.scene.input.on('pointerdown', this.onPointerDown, this),
      this.scene.input.on('pointerup', this.onPointerUp, this),
      this.scene.input.on('pointermove', this.onPointerMove, this),
      this.scene.events.once('shutdown', this.destroy, this);
  }
  shutdown() {
    this.scene &&
      (this.destroyEventEmitter(),
      (this.pointers.length = 0),
      Dv(this.movedState),
      this.scene.input.off('pointerdown', this.onPointerDown, this),
      this.scene.input.off('pointerup', this.onPointerUp, this),
      this.scene.input.off('pointermove', this.onPointerMove, this),
      this.scene.events.off('shutdown', this.destroy, this),
      (this.scene = void 0));
  }
  destroy() {
    this.shutdown();
  }
  get enable() {
    return this._enable;
  }
  set enable(e) {
    if (this._enable !== e)
      return e || this.dragCancel(), (this._enable = e), this;
  }
  setEnable(e) {
    return void 0 === e && (e = !0), (this.enable = e), this;
  }
  toggleEnable() {
    return this.setEnable(!this.enable), this;
  }
  onPointerDown(e) {
    if (
      this.enable &&
      2 !== this.pointers.length &&
      (!this.bounds || this.bounds.contains(e.x, e.y)) &&
      -1 === this.pointers.indexOf(e)
    )
      switch (
        ((this.movedState[e.id] = !1), this.pointers.push(e), this.tracerState)
      ) {
        case Iv:
          (this.tracerState = Fv), this.onDrag1Start();
          break;
        case Fv:
          (this.tracerState = Uv), this.onDrag2Start();
      }
  }
  onPointerUp(e) {
    if (this.enable && (!this.bounds || this.bounds.contains(e.x, e.y))) {
      var t = this.pointers.indexOf(e);
      if (-1 !== t)
        switch (
          (delete this.movedState[e.id], Av(this.pointers, t), this.tracerState)
        ) {
          case Fv:
            (this.tracerState = Iv), this.onDrag1End();
            break;
          case Uv:
            (this.tracerState = Fv), this.onDrag2End(), this.onDrag1Start();
        }
    }
  }
  onPointerMove(e) {
    if (this.enable && e.isDown) {
      var t = !this.bounds || this.bounds.contains(e.x, e.y),
        n = -1 !== this.pointers.indexOf(e);
      if (!n && t);
      else if (n && !t) this.onPointerUp(e);
      else if (
        (this.movedState[e.id] ||
          (this.movedState[e.id] = e.x !== e.downX || e.y !== e.downY),
        this.movedState[e.id])
      )
        switch (this.tracerState) {
          case Fv:
            this.onDrag1();
            break;
          case Uv:
            this.onDrag2();
        }
    }
  }
  dragCancel() {
    return (
      this.tracerState === Uv && this.onDrag2End(),
      (this.pointers.length = 0),
      Dv(this.movedState),
      (this.tracerState = Iv),
      this
    );
  }
  onDrag1Start() {
    this.emit('drag1start', this);
  }
  onDrag1End() {
    this.emit('drag1end', this);
  }
  onDrag1() {
    this.emit('drag1', this);
  }
  onDrag2Start() {
    this.emit('drag2start', this);
  }
  onDrag2End() {
    this.emit('drag2end', this);
  }
  onDrag2() {
    this.emit('drag2', this);
  }
  get distanceBetween() {
    if (this.tracerState !== Uv) return 0;
    var e = this.pointers[0],
      t = this.pointers[1];
    return Mv(e.x, e.y, t.x, t.y);
  }
  get angleBetween() {
    if (this.tracerState !== Uv) return 0;
    var e = this.pointers[0],
      t = this.pointers[1];
    return zv(e.x, e.y, t.x, t.y);
  }
  get drag1Vector() {
    var e = this.pointers[0];
    if (e && this.movedState[e.id]) {
      var t = e.position,
        n = e.prevPosition;
      (Rv.x = t.x - n.x), (Rv.y = t.y - n.y);
    } else (Rv.x = 0), (Rv.y = 0);
    return Rv;
  }
  get centerX() {
    if (this.tracerState !== Uv) return 0;
    var e = this.pointers[0].position,
      t = this.pointers[1].position;
    return (e.x + t.x) / 2;
  }
  get centerY() {
    if (this.tracerState !== Uv) return 0;
    var e = this.pointers[0].position,
      t = this.pointers[1].position;
    return (e.y + t.y) / 2;
  }
  get prevCenterX() {
    if (this.tracerState !== Uv) return 0;
    var e = this.movedState[this.pointers[0].id]
        ? this.pointers[0].prevPosition
        : this.pointers[0].position,
      t = this.movedState[this.pointers[1].id]
        ? this.pointers[1].prevPosition
        : this.pointers[1].position;
    return (e.x + t.x) / 2;
  }
  get prevCenterY() {
    if (this.tracerState !== Uv) return 0;
    var e = this.movedState[this.pointers[0].id]
        ? this.pointers[0].prevPosition
        : this.pointers[0].position,
      t = this.movedState[this.pointers[1].id]
        ? this.pointers[1].prevPosition
        : this.pointers[1].position;
    return (e.y + t.y) / 2;
  }
  get movementCenterX() {
    return this.centerX - this.prevCenterX;
  }
  get movementCenterY() {
    return this.centerY - this.prevCenterY;
  }
  setRecongizedStateObject(e) {
    return (this.recongizedState = e), this;
  }
  get state() {
    return this.recongizedState.state;
  }
  set state(e) {
    this.recongizedState.state = e;
  }
  cancel() {
    return (this.state = Hv), this;
  }
}
Object.assign(jv.prototype, ev);
var Rv = {};
const Iv = 0,
  Fv = 1,
  Uv = 2,
  Hv = 'IDLE',
  Wv = Phaser.Utils.Objects.GetValue;
class Vv extends jv {
  constructor(e, t) {
    super(e, t);
    var n = this,
      r = {
        states: {
          IDLE: {
            enter: function () {
              (n.prevDistance = void 0), (n.scaleFactor = 1);
            },
          },
          BEGIN: {},
          RECOGNIZED: {
            enter: function () {
              n.emit('pinchstart', n);
            },
            exit: function () {
              n.emit('pinchend', n);
            },
          },
        },
        init: function () {
          this.state = Bv;
        },
        eventEmitter: !1,
      };
    this.setRecongizedStateObject(new mv(r));
  }
  resetFromJSON(e) {
    return (
      super.resetFromJSON(e), this.setDragThreshold(Wv(e, 'threshold', 0)), this
    );
  }
  onDrag2Start() {
    (this.scaleFactor = 1),
      (this.prevDistance = this.distanceBetween),
      (this.state = Yv),
      0 === this.dragThreshold && (this.state = Xv);
  }
  onDrag2End() {
    this.state = Bv;
  }
  onDrag2() {
    switch (this.state) {
      case Yv:
        if (
          this.pointers[0].getDistance() >= this.dragThreshold &&
          this.pointers[1].getDistance() >= this.dragThreshold
        ) {
          var e = this.distanceBetween;
          (this.scaleFactor = e / this.prevDistance),
            (this.prevDistance = e),
            (this.state = Xv);
        }
        break;
      case Xv:
        e = this.distanceBetween;
        (this.scaleFactor = e / this.prevDistance),
          this.emit('pinch', this),
          (this.prevDistance = e);
    }
  }
  get isPinched() {
    return this.state === Xv;
  }
  setDragThreshold(e) {
    return (this.dragThreshold = e), this;
  }
}
const Bv = 'IDLE',
  Yv = 'BEGIN',
  Xv = 'RECOGNIZED',
  $v = Phaser.Math.RotateAround;
var Qv = function (e, t, n, r) {
    return $v(e, t, n, r), (e.rotation += r), e;
  },
  Gv = {};
const qv = Phaser.Utils.Objects.GetValue,
  Kv = Phaser.Math.Angle.WrapDegrees,
  Jv = Phaser.Math.Angle.ShortestBetween,
  Zv = Phaser.Math.RadToDeg,
  eg = Phaser.Math.DegToRad;
var tg = {
  spinObject: function (e, t) {
    if (!this.isRotation) return this;
    void 0 === t && (t = this.pointers[0].camera);
    var n = this.movementCenterX,
      r = this.movementCenterY;
    t.getWorldPoint(this.centerX, this.centerY, Gv);
    var a = Gv.x,
      i = Gv.y,
      o = this.rotation;
    if (Array.isArray(e))
      for (var l = e, s = 0, u = l.length; s < u; s++)
        ((e = l[s]).x += n), (e.y += r), Qv(e, a, i, o);
    else (e.x += n), (e.y += r), Qv(e, a, i, o);
    return this;
  },
};
Object.assign(
  class extends jv {
    constructor(e, t) {
      super(e, t);
      var n = this,
        r = {
          states: {
            IDLE: {
              enter: function () {
                (n.prevAngle = void 0), (n.angle = 0);
              },
            },
            BEGIN: {},
            RECOGNIZED: {
              enter: function () {
                n.emit('rotatestart', n);
              },
              exit: function () {
                n.emit('rotateend', n);
              },
            },
          },
          init: function () {
            this.state = ng;
          },
          eventEmitter: !1,
        };
      this.setRecongizedStateObject(new mv(r));
    }
    resetFromJSON(e) {
      return (
        super.resetFromJSON(e),
        this.setDragThreshold(qv(e, 'threshold', 0)),
        this
      );
    }
    onDrag2Start() {
      (this.prevAngle = Kv(Zv(this.angleBetween))),
        (this.state = rg),
        0 === this.dragThreshold && (this.state = ag);
    }
    onDrag2End() {
      this.state = ng;
    }
    onDrag2() {
      switch (this.state) {
        case rg:
          if (
            this.pointers[0].getDistance() >= this.dragThreshold &&
            this.pointers[1].getDistance() >= this.dragThreshold
          ) {
            var e = Kv(Zv(this.angleBetween));
            (this.angle = Jv(this.prevAngle, e)),
              (this.prevAngle = e),
              (this.state = ag);
          }
          break;
        case ag:
          e = Kv(Zv(this.angleBetween));
          (this.angle = Jv(this.prevAngle, e)),
            (this.prevAngle = e),
            this.emit('rotate', this);
      }
    }
    get isRotated() {
      return this.state === ag;
    }
    get rotation() {
      return eg(this.angle);
    }
    setDragThreshold(e) {
      return (this.dragThreshold = e), this;
    }
  }.prototype,
  tg,
);
const ng = 'IDLE',
  rg = 'BEGIN',
  ag = 'RECOGNIZED';
class ig extends Phaser.GameObjects.Image {
  constructor(e, t, n, r) {
    super(e, n, r, `${t.name}-sprite`),
      b(this, 'towerType'),
      (this.towerType = t),
      (this.depth = r);
  }
}
class og {}
b(og, 'mapWidth', 64),
  b(og, 'mapHeight', 64),
  b(og, 'gridCellWidth', 128),
  b(og, 'gridCellHeight', 64),
  b(og, 'mapTileWidth', 512),
  b(og, 'mapTileHalfWidth', 256),
  b(og, 'mapTileHeight', 512),
  b(og, 'mapTileHalfHeight', 256),
  b(og, 'mapTileOffsetX', 256),
  b(og, 'mapTileOffsetY', 256),
  b(og, 'totalCoins', 1e4),
  b(og, 'mapLocalStorageKey', 'cc-map-designer-map');
class lg extends t.Scene {
  constructor() {
    super({ key: 'TileMap' }),
      b(this, '_selectedObjectType', 0),
      b(this, '_selectedTower', qm.towers[0]),
      b(this, 'controls'),
      b(this, 'map'),
      b(this, 'groundLayer'),
      b(this, 'coinsUsed', 0),
      b(this, '_currentTowers', new Map());
  }
  preload() {
    this.load.image('tile', './assets/tile.png'),
      this.load.image('tile_crystal_N', './assets/tile_crystal_N.png'),
      this.load.image('tile_E', './assets/tile_E.png'),
      this.load.image('tile_treeQuad_N', './assets/tile_treeQuad_N.png'),
      qm.towers.forEach(e => {
        this.load.image(`${e.name}-sprite`, `./assets/${e.asset}`);
      }),
      this.load.tilemapTiledJSON('map', './assets/map-2.json');
  }
  create() {
    this.map = this.add.tilemap('map');
    const e = [
      this.map.addTilesetImage('tile.png', 'tile'),
      this.map.addTilesetImage('tile_crystal_N.png', 'tile_crystal_N'),
      this.map.addTilesetImage('tile_E.png', 'tile_E'),
      this.map.addTilesetImage('tile_treeQuad_N.png', 'tile_treeQuad_N'),
    ];
    (this.groundLayer = this.map.createLayer('Ground', e, 0, 0)),
      this.groundLayer.setDepth(0),
      this.groundLayer.setCullPadding(6, 6),
      Jm.on(Km.TOWER_SELECTED, e => {
        (this._selectedObjectType = 0), (this._selectedTower = e);
      }),
      Jm.on(Km.ERASER_SELECTED, () => {
        this._selectedObjectType = 1;
      }),
      Jm.on(Km.MOVE_SELECTED, () => {
        this._selectedObjectType = 2;
      }),
      Jm.on(Km.LOAD_MAP, e => {
        this._loadMap(e);
      });
    const n = new Vv(this),
      r = new gv(this),
      a = this.cameras.main;
    (a.zoom = 0.1),
      a.setScroll(-200, 2e3),
      n.on(
        'pinch',
        () => {
          if (2 === this._selectedObjectType) {
            const {
                scaleFactor: e,
                centerX: t,
                centerY: r,
                movementCenterX: i,
                movementCenterY: o,
              } = n,
              l = a.zoom,
              s = l * e,
              { width: u, height: c } = this.game.canvas,
              f = t - u / 2,
              d = r - c / 2;
            (a.scrollX += f / l - f / s - i * s),
              (a.scrollY += d / l - d / s - o * s),
              a.setZoom(s);
          }
        },
        this,
      ),
      r.on(
        'pan',
        e => {
          const { dx: t, dy: n } = e;
          (this.input.activePointer.middleButtonDown() ||
            2 === this._selectedObjectType) &&
            ((a.scrollX -= t / a.zoom), (a.scrollY -= n / a.zoom));
        },
        this,
      ),
      this.input.on(t.Input.Events.POINTER_MOVE, e => {
        const n = this.map.getTileAtWorldXY(
          e.worldX - og.mapTileOffsetX,
          e.worldY - og.mapTileOffsetY,
          !1,
          a,
          this.groundLayer,
        );
        n &&
          this.game.device.os.desktop &&
          this.tweens.addCounter({
            from: 200,
            to: 255,
            duration: 500,
            onUpdate(e) {
              const r = Math.floor(e.getValue());
              n.tint = t.Display.Color.GetColor(r, r, r);
            },
          }),
          n &&
            this.input.activePointer.primaryDown &&
            this._performActionAt(n.x, n.y);
      }),
      this.input.on(t.Input.Events.POINTER_DOWN, e => {
        const t = this.map.getTileAtWorldXY(
          e.worldX - og.mapTileOffsetX,
          e.worldY - og.mapTileOffsetY,
          !1,
          a,
          this.groundLayer,
        );
        !t ||
          (!this.input.activePointer.leftButtonDown() &&
            !this.input.activePointer.wasTouch) ||
          n.isPinched ||
          r.isPanned ||
          this._performActionAt(t.x, t.y);
      }),
      this.input.on(t.Input.Events.POINTER_WHEEL, e => {
        const t = a.zoom,
          n = t * (e.deltaY > 0 ? 0.9 : 1.1),
          { width: r, height: i } = this.game.canvas,
          o = e.x - r / 2,
          l = e.y - i / 2;
        a.setZoom(n),
          (a.scrollX += o / t - o / n),
          (a.scrollY += l / t - l / n);
      }),
      Jm.emit(Km.COINS_CHANGED, og.totalCoins);
    const i = localStorage.getItem(og.mapLocalStorageKey);
    i ? this._loadMap(JSON.parse(i)) : this._loadMap(this._getEmptyMap()),
      Jm.on(Km.CLEAR_MAP, () => {
        this._loadMap(this._getEmptyMap());
      }),
      this.events.on(t.Scenes.Events.SHUTDOWN, () => {
        this.input.off(t.Input.Events.POINTER_UP),
          this.input.off(t.Input.Events.POINTER_MOVE),
          this.input.off(t.Input.Events.POINTER_DOWN),
          this.input.off(t.Input.Events.POINTER_WHEEL);
      });
  }
  _performActionAt(e, t) {
    var n, r, a;
    if (2 === this._selectedObjectType) return;
    if (0 === e || 0 === t || e === og.mapWidth - 1 || t === og.mapHeight - 1)
      return;
    if (
      0 === this._selectedObjectType &&
      this._selectedTower.price > og.totalCoins - this.coinsUsed
    )
      return;
    if (1 === this._selectedObjectType) {
      const r = 100 * e + t;
      return void (
        this._currentTowers.has(r) &&
        (null == (n = this._currentTowers.get(r)) || n.destroy(),
        this._currentTowers.delete(r),
        this._updateMap())
      );
    }
    const i = this.groundLayer.getTileAt(e, t),
      o = 100 * e + t;
    (this._currentTowers.has(o) &&
      (null == (r = this._currentTowers.get(o)) ? void 0 : r.towerType) ===
        this._selectedTower) ||
      (null == (a = this._currentTowers.get(o)) || a.destroy(),
      this._currentTowers.set(
        o,
        this.add.existing(
          new ig(
            this,
            this._selectedTower,
            i.pixelX + og.mapTileHalfWidth,
            i.pixelY + og.mapTileHalfHeight,
          ),
        ),
      ),
      this._updateMap());
  }
  _updateMap() {
    var e;
    const t = [];
    let n = 0;
    for (let r = 0; r < og.mapHeight; r++) {
      const a = [];
      for (let t = 0; t < og.mapWidth; t++)
        if (this._currentTowers.has(100 * t + r)) {
          const i = this._currentTowers.get(100 * t + r).towerType,
            o = qm.towers.findIndex(e => e.tileId === i.tileId);
          a.push(o + 1),
            (n += null != (e = null == i ? void 0 : i.price) ? e : 0);
        } else a.push(0);
      t.push(a);
    }
    Jm.emit(Km.MAP_DATA_CHANGED, t),
      localStorage.setItem(og.mapLocalStorageKey, JSON.stringify(t)),
      (this.coinsUsed = n),
      Jm.emit(Km.COINS_CHANGED, og.totalCoins - n);
  }
  _getEmptyMap() {
    const e = [];
    for (let t = 0; t < og.mapHeight; t++) {
      const t = [];
      for (let e = 0; e < og.mapWidth; e++) t.push(0);
      e.push(t);
    }
    return e;
  }
  _loadMap(e) {
    for (const n of this._currentTowers.values()) n.destroy();
    this._currentTowers.clear(),
      localStorage.setItem(og.mapLocalStorageKey, JSON.stringify(e));
    let t = 0;
    for (let n = 0; n < og.mapHeight; n++)
      for (let r = 0; r < og.mapWidth; r++) {
        const a = e[n][r];
        if (a >= 1) {
          const e = a - 1,
            i = this.groundLayer.getTileAt(r, n),
            o = 100 * r + n;
          this._currentTowers.set(
            o,
            this.add.existing(
              new ig(
                this,
                qm.towers[e],
                i.pixelX + og.mapTileHalfWidth,
                i.pixelY + og.mapTileHalfHeight,
              ),
            ),
          ),
            (t += qm.towers[e].price);
        }
      }
    (this.coinsUsed = t),
      Jm.emit(Km.COINS_CHANGED, og.totalCoins - t),
      this._updateMap();
  }
}
var sg = Object.defineProperty,
  ug = Object.getOwnPropertyDescriptor;
let cg =
  ((l = class extends a {
    constructor() {
      super(...arguments), b(this, '_game');
    }
    firstUpdated() {
      var e, n;
      this._game = new t.Game({
        type: t.AUTO,
        parent:
          null !=
          (n =
            null == (e = this.shadowRoot)
              ? void 0
              : e.querySelector('#map-designer'))
            ? n
            : void 0,
        scene: [lg],
        dom: { createContainer: !1 },
        scale: { mode: t.Scale.RESIZE, autoCenter: t.Scale.CENTER_BOTH },
        fps: { min: 10, target: 30, smoothStep: !0 },
      });
    }
    disconnectedCallback() {
      this._game.scene.getScene('TileMap').events.removeAllListeners(),
        this._game.destroy(!0);
    }
    render() {
      return i` <div id="map-designer"></div> `;
    }
  }),
  b(
    l,
    'styles',
    n`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
  ),
  l);
var fg;
cg = ((e, t, n, r) => {
  for (
    var a, i = r > 1 ? void 0 : r ? ug(t, n) : t, o = e.length - 1;
    o >= 0;
    o--
  )
    (a = e[o]) && (i = (r ? a(t, n, i) : a(i)) || i);
  return r && i && sg(t, n, i), i;
})(
  [
    ((fg = 'cc-map-designer'),
    e => {
      return 'function' == typeof e
        ? ((t = fg), (n = e), window.customElements.define(t, n), n)
        : ((e, t) => {
            const { kind: n, elements: r } = t;
            return {
              kind: n,
              elements: r,
              finisher(t) {
                window.customElements.define(e, t);
              },
            };
          })(fg, e);
      var t, n;
    }),
  ],
  cg,
);
const dg = ((e, t, n, r, a) => {
    const i = e.Component,
      o = e.createElement,
      l = new Set(Object.keys(null != r ? r : {}));
    for (const c in n.prototype)
      c in HTMLElement.prototype ||
        (An.has(c)
          ? console.warn(
              `${t} contains property ${c} which is a React reserved property. It will be used by React and not set on the element.`,
            )
          : l.add(c));
    class s extends i {
      constructor() {
        super(...arguments), (this.t = null);
      }
      o(e) {
        if (null !== this.t)
          for (const t in this.i)
            zn(this.t, t, this.props[t], e ? e[t] : void 0, r);
      }
      componentDidMount() {
        this.o();
      }
      componentDidUpdate(e) {
        this.o(e);
      }
      render() {
        const e = this.props.l;
        (void 0 !== this.h && this.u === e) ||
          (this.h = t => {
            var n, r;
            null === this.t && (this.t = t),
              null !== e &&
                ((r = t),
                'function' == typeof (n = e) ? n(r) : (n.current = r)),
              (this.u = e);
          });
        const n = { ref: this.h };
        this.i = {};
        for (const [t, r] of Object.entries(this.props))
          l.has(t) ? (this.i[t] = r) : (n['className' === t ? 'class' : t] = r);
        return o(t, n);
      }
    }
    s.displayName = null != a ? a : n.name;
    const u = e.forwardRef((e, t) =>
      o(s, v(m({}, e), { l: t }), null == e ? void 0 : e.children),
    );
    return (u.displayName = s.displayName), u;
  })(o, 'cc-map-designer', cg),
  pg = () => {
    const [e, t] = r.exports.useState(0);
    return (
      r.exports.useEffect(() => {
        const e = n => {
          t(n),
            Jm.removeAllListeners(Km.COINS_CHANGED),
            Jm.once(Km.COINS_CHANGED, e);
        };
        return (
          Jm.once(Km.COINS_CHANGED, e),
          function () {
            Jm.removeAllListeners(Km.COINS_CHANGED);
          }
        );
      }, [e]),
      r.exports.createElement(
        'p',
        {
          style: {
            textAlign: 'center',
            margin: '0',
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: '1.5rem',
            padding: '1rem 1rem 0',
          },
        },
        'Coins remaining ',
        r.exports.createElement('br', null),
        ' ',
        e,
      )
    );
  };
function hg(e) {
  const [t, n] = r.exports.useState([]);
  return (
    r.exports.useEffect(() => {
      const e = t => {
        n(t),
          Jm.removeAllListeners(Km.MAP_DATA_CHANGED),
          Jm.once(Km.MAP_DATA_CHANGED, e);
      };
      return (
        Jm.once(Km.MAP_DATA_CHANGED, e),
        function () {
          Jm.removeAllListeners(Km.MAP_DATA_CHANGED);
        }
      );
    }, [t]),
    e.readonly
      ? r.exports.createElement(
          'div',
          { style: { pointerEvents: 'none' } },
          r.exports.createElement(dg, null),
        )
      : r.exports.createElement(
          r.exports.Fragment,
          null,
          r.exports.createElement(
            ah,
            {
              className: 'justify-content-evenly',
              style: {
                position: 'absolute',
                padding: '0rem 2rem',
                width: '100%',
                alignItems: 'center',
                pointerEvents: 'none',
              },
            },
            r.exports.createElement(
              nh,
              { style: { pointerEvents: 'auto', padding: '1rem 1rem 0' } },
              qm.towers.map(e =>
                r.exports.createElement(
                  Xm,
                  {
                    key: `${e.name}-overlay`,
                    placement: 'bottom',
                    delay: { show: 50, hide: 100 },
                    overlay: t =>
                      r.exports.createElement(
                        Qm,
                        m({ id: `${e.name}-tooltip` }, t),
                        'Name: ',
                        e.name,
                        ' ',
                        r.exports.createElement('br', null),
                        ' Price: ',
                        e.price,
                      ),
                  },
                  r.exports.createElement(
                    eh,
                    {
                      key: e.name,
                      variant: 'outline-light',
                      onClick: () => {
                        Jm.emit(Km.TOWER_SELECTED, e);
                      },
                    },
                    r.exports.createElement('img', {
                      src: `../assets/${e.thumbnailAsset}`,
                      alt: e.name,
                    }),
                    r.exports.createElement('br', null),
                    r.exports.createElement('span', null, e.name),
                  ),
                ),
              ),
            ),
            r.exports.createElement(
              nh,
              { style: { pointerEvents: 'auto', padding: '1rem 1rem 0' } },
              r.exports.createElement(
                eh,
                {
                  key: 'move',
                  variant: 'outline-light',
                  onClick: () => {
                    Jm.emit(Km.MOVE_SELECTED);
                  },
                },
                r.exports.createElement(Dn, { size: '2x', icon: y }),
                r.exports.createElement('br', null),
                r.exports.createElement('span', null, 'Move'),
              ),
              r.exports.createElement(
                eh,
                {
                  key: 'clear',
                  variant: 'outline-light',
                  onClick: () => {
                    Jm.emit(Km.CLEAR_MAP);
                  },
                },
                r.exports.createElement(Dn, { size: '2x', icon: k }),
                r.exports.createElement('br', null),
                r.exports.createElement('span', null, 'Clear'),
              ),
              r.exports.createElement(
                eh,
                {
                  key: 'erase',
                  variant: 'outline-light',
                  onClick: () => {
                    Jm.emit(Km.ERASER_SELECTED);
                  },
                },
                r.exports.createElement(Dn, { size: '2x', icon: w }),
                r.exports.createElement('br', null),
                r.exports.createElement('span', null, 'Erase'),
              ),
              r.exports.createElement(
                eh,
                {
                  key: 'save',
                  variant: 'outline-light',
                  onClick: () => e.saveMapCallback(t),
                },
                r.exports.createElement(Dn, { size: '2x', icon: x }),
                r.exports.createElement('br', null),
                r.exports.createElement('span', null, 'Save'),
              ),
            ),
            r.exports.createElement(pg, null),
          ),
          r.exports.createElement(dg, null),
        )
  );
}
class mg {
  static loadMap(e) {
    Jm.emit(Km.LOAD_MAP, e);
  }
  static setTotalCoins(e) {
    og.totalCoins = e;
  }
  static preloadMap(e) {
    localStorage.setItem(og.mapLocalStorageKey, JSON.stringify(e));
  }
}
export { hg as M, mg as a };
