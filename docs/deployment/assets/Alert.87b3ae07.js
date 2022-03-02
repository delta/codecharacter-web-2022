var e = Object.defineProperty,
  r = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  t = Object.prototype.propertyIsEnumerable,
  n = (r, a, o) =>
    a in r
      ? e(r, a, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (r[a] = o),
  i = (e, r) => {
    for (var a in r || (r = {})) s.call(r, a) && n(e, a, r[a]);
    if (o) for (var a of o(r)) t.call(r, a) && n(e, a, r[a]);
    return e;
  },
  l = (e, o) => r(e, a(o));
import { r as c, j as f, e as m, F as d } from './vendor.81f97c66.js';
import { u as b, c as p } from './ThemeProvider.869a7bec.js';
import { u } from './Form.6d298630.js';
import { u as v, F as j } from './Fade.6981a97a.js';
import { u as h } from './Button.7eb63b50.js';
import { C as y } from './CloseButton.0522e079.js';
import { d as O } from './divWithClassName.7695ab43.js';
import { c as w } from './createWithBsPrefix.439c8819.js';
const g = ['onKeyDown'];
const x = c.exports.forwardRef((e, r) => {
  let { onKeyDown: a } = e,
    o = (function (e, r) {
      if (null == e) return {};
      var a,
        o,
        s = {},
        t = Object.keys(e);
      for (o = 0; o < t.length; o++)
        (a = t[o]), r.indexOf(a) >= 0 || (s[a] = e[a]);
      return s;
    })(e, g);
  const [s] = h(Object.assign({ tagName: 'a' }, o)),
    t = v(e => {
      s.onKeyDown(e), null == a || a(e);
    });
  return (((n = o.href) && '#' !== n.trim()) || o.role) && 'button' !== o.role
    ? f('a', Object.assign({ ref: r }, o, { onKeyDown: a }))
    : f('a', Object.assign({ ref: r }, o, s, { onKeyDown: t }));
  var n;
});
x.displayName = 'Anchor';
const C = O('h4');
C.displayName = 'DivStyledAsH4';
const P = w('alert-heading', { Component: C }),
  N = w('alert-link', { Component: x }),
  D = {
    variant: 'primary',
    show: !0,
    transition: j,
    closeLabel: 'Close alert',
  },
  K = c.exports.forwardRef((e, r) => {
    const a = u(e, { show: 'onClose' }),
      {
        bsPrefix: n,
        show: c,
        closeLabel: d,
        closeVariant: h,
        className: O,
        children: w,
        variant: g,
        onClose: x,
        dismissible: C,
        transition: P,
      } = a,
      N = ((e, r) => {
        var a = {};
        for (var n in e) s.call(e, n) && r.indexOf(n) < 0 && (a[n] = e[n]);
        if (null != e && o)
          for (var n of o(e)) r.indexOf(n) < 0 && t.call(e, n) && (a[n] = e[n]);
        return a;
      })(a, [
        'bsPrefix',
        'show',
        'closeLabel',
        'closeVariant',
        'className',
        'children',
        'variant',
        'onClose',
        'dismissible',
        'transition',
      ]),
      D = b(n, 'alert'),
      K = v(e => {
        x && x(!1, e);
      }),
      k = !0 === P ? j : P,
      A = m(
        'div',
        l(i({ role: 'alert' }, k ? void 0 : N), {
          ref: r,
          className: p(O, D, g && `${D}-${g}`, C && `${D}-dismissible`),
          children: [C && f(y, { onClick: K, 'aria-label': d, variant: h }), w],
        }),
      );
    return k
      ? f(
          k,
          l(i({ unmountOnExit: !0 }, N), { ref: void 0, in: c, children: A }),
        )
      : c
      ? A
      : null;
  });
(K.displayName = 'Alert'), (K.defaultProps = D);
var k = Object.assign(K, { Link: N, Heading: P });
var A = { alert: '_alert_19wr6_1' };
var F = e =>
  f(d, {
    children: e.err
      ? f(k, { variant: 'danger', className: A.alert, children: e.content })
      : f(d, {}),
  });
export { F as A, k as a, A as s };
