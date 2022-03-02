var e = Object.defineProperty,
  a = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  t = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  i = (a, r, t) =>
    r in a
      ? e(a, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (a[r] = t),
  s = (e, a) => {
    for (var r in a || (a = {})) n.call(a, r) && i(e, r, a[r]);
    if (t) for (var r of t(a)) o.call(a, r) && i(e, r, a[r]);
    return e;
  };
import { u as l, c as d } from './ThemeProvider.869a7bec.js';
import { r as f, j as c } from './vendor.81f97c66.js';
const b = ['as', 'disabled'];
function u({
  tagName: e,
  disabled: a,
  href: r,
  target: t,
  rel: n,
  onClick: o,
  tabIndex: i = 0,
  type: s,
}) {
  e || (e = null != r || null != t || null != n ? 'a' : 'button');
  const l = { tagName: e };
  if ('button' === e) return [{ type: s || 'button', disabled: a }, l];
  const d = t => {
    (a ||
      ('a' === e &&
        (function (e) {
          return !e || '#' === e.trim();
        })(r))) &&
      t.preventDefault(),
      a ? t.stopPropagation() : null == o || o(t);
  };
  return (
    'a' === e && (r || (r = '#'), a && (r = void 0)),
    [
      {
        role: 'button',
        disabled: void 0,
        tabIndex: a ? void 0 : i,
        href: r,
        target: 'a' === e ? t : void 0,
        'aria-disabled': a || void 0,
        rel: 'a' === e ? n : void 0,
        onClick: d,
        onKeyDown: e => {
          ' ' === e.key && (e.preventDefault(), d(e));
        },
      },
      l,
    ]
  );
}
f.exports.forwardRef((e, a) => {
  let { as: r, disabled: t } = e,
    n = (function (e, a) {
      if (null == e) return {};
      var r,
        t,
        n = {},
        o = Object.keys(e);
      for (t = 0; t < o.length; t++)
        (r = o[t]), a.indexOf(r) >= 0 || (n[r] = e[r]);
      return n;
    })(e, b);
  const [o, { tagName: i }] = u(Object.assign({ tagName: r, disabled: t }, n));
  return c(i, Object.assign({}, n, o, { ref: a }));
}).displayName = 'Button';
const v = f.exports.forwardRef((e, i) => {
  var f = e,
    { as: b, bsPrefix: v, variant: p, size: m, active: y, className: g } = f,
    O = ((e, a) => {
      var r = {};
      for (var i in e) n.call(e, i) && a.indexOf(i) < 0 && (r[i] = e[i]);
      if (null != e && t)
        for (var i of t(e)) a.indexOf(i) < 0 && o.call(e, i) && (r[i] = e[i]);
      return r;
    })(f, ['as', 'bsPrefix', 'variant', 'size', 'active', 'className']);
  const j = l(v, 'btn'),
    [N, { tagName: x }] = u(s({ tagName: b }, O));
  return c(
    x,
    ((P = s(s({}, N), O)),
    (w = {
      ref: i,
      className: d(
        g,
        j,
        y && 'active',
        p && `${j}-${p}`,
        m && `${j}-${m}`,
        O.href && O.disabled && 'disabled',
      ),
    }),
    a(P, r(w))),
  );
  var P, w;
});
(v.displayName = 'Button'),
  (v.defaultProps = { variant: 'primary', active: !1, disabled: !1 });
var p = v;
export { p as B, u };
