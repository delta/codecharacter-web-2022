var r = Object.defineProperty,
  e = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  t = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  f = (e, a, o) =>
    a in e
      ? r(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[a] = o);
import { u as i, c as l } from './ThemeProvider.869a7bec.js';
import { r as n, j as c } from './vendor.81f97c66.js';
const p = n.exports.forwardRef((r, n) => {
  var p = r,
    { bsPrefix: b, fluid: d, as: u = 'div', className: v } = p,
    m = ((r, e) => {
      var a = {};
      for (var f in r) t.call(r, f) && e.indexOf(f) < 0 && (a[f] = r[f]);
      if (null != r && o)
        for (var f of o(r)) e.indexOf(f) < 0 && s.call(r, f) && (a[f] = r[f]);
      return a;
    })(p, ['bsPrefix', 'fluid', 'as', 'className']);
  const O = i(b, 'container'),
    y = 'string' == typeof d ? `-${d}` : '-fluid';
  return c(
    u,
    ((j = ((r, e) => {
      for (var a in e || (e = {})) t.call(e, a) && f(r, a, e[a]);
      if (o) for (var a of o(e)) s.call(e, a) && f(r, a, e[a]);
      return r;
    })({ ref: n }, m)),
    (P = { className: l(v, d ? `${O}${y}` : O) }),
    e(j, a(P))),
  );
  var j, P;
});
(p.displayName = 'Container'), (p.defaultProps = { fluid: !1 });
var b = p;
export { b as C };
