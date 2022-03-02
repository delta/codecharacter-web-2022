var r = Object.defineProperty,
  e = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  t = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  i = (e, a, t) =>
    a in e
      ? r(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[a] = t),
  c = (r, e) => {
    for (var a in e || (e = {})) s.call(e, a) && i(r, a, e[a]);
    if (t) for (var a of t(e)) o.call(e, a) && i(r, a, e[a]);
    return r;
  },
  d = (r, t) => e(r, a(t)),
  n = (r, e) => {
    var a = {};
    for (var i in r) s.call(r, i) && e.indexOf(i) < 0 && (a[i] = r[i]);
    if (null != r && t)
      for (var i of t(r)) e.indexOf(i) < 0 && o.call(r, i) && (a[i] = r[i]);
    return a;
  };
import { u as l, c as f } from './ThemeProvider.869a7bec.js';
import { r as m, j as b } from './vendor.81f97c66.js';
import { c as p } from './createWithBsPrefix.439c8819.js';
import { d as v } from './divWithClassName.7695ab43.js';
const x = m.exports.forwardRef((r, e) => {
  var a = r,
    { bsPrefix: t, className: s, variant: o, as: i = 'img' } = a,
    d = n(a, ['bsPrefix', 'className', 'variant', 'as']);
  const m = l(t, 'card-img');
  return b(i, c({ ref: e, className: f(o ? `${m}-${o}` : m, s) }, d));
});
x.displayName = 'CardImg';
var y = x;
const u = m.exports.createContext(null);
u.displayName = 'CardHeaderContext';
var P = u;
const N = m.exports.forwardRef((r, e) => {
  var a = r,
    { bsPrefix: t, className: s, as: o = 'div' } = a,
    i = n(a, ['bsPrefix', 'className', 'as']);
  const p = l(t, 'card-header'),
    v = m.exports.useMemo(() => ({ cardHeaderBsPrefix: p }), [p]);
  return b(P.Provider, {
    value: v,
    children: b(o, d(c({ ref: e }, i), { className: f(s, p) })),
  });
});
N.displayName = 'CardHeader';
var g = N;
const O = v('h5'),
  h = v('h6'),
  j = p('card-body'),
  C = p('card-title', { Component: O }),
  w = p('card-subtitle', { Component: h }),
  $ = p('card-link', { Component: 'a' }),
  H = p('card-text', { Component: 'p' }),
  I = p('card-footer'),
  B = p('card-img-overlay'),
  R = m.exports.forwardRef((r, e) => {
    var a = r,
      {
        bsPrefix: t,
        className: s,
        bg: o,
        text: i,
        border: m,
        body: p,
        children: v,
        as: x = 'div',
      } = a,
      y = n(a, [
        'bsPrefix',
        'className',
        'bg',
        'text',
        'border',
        'body',
        'children',
        'as',
      ]);
    const u = l(t, 'card');
    return b(
      x,
      d(c({ ref: e }, y), {
        className: f(
          s,
          u,
          o && `bg-${o}`,
          i && `text-${i}`,
          m && `border-${m}`,
        ),
        children: p ? b(j, { children: v }) : v,
      }),
    );
  });
(R.displayName = 'Card'), (R.defaultProps = { body: !1 });
var T = Object.assign(R, {
  Img: y,
  Title: C,
  Subtitle: w,
  Body: j,
  Link: $,
  Text: H,
  Header: g,
  Footer: I,
  ImgOverlay: B,
});
export { T as C };
