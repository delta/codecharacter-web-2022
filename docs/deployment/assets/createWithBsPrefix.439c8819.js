var r = Object.defineProperty,
  e = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  t = (e, a, o) =>
    a in e
      ? r(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[a] = o);
import { u as s, c as n } from './ThemeProvider.869a7bec.js';
import { r as l, j as f } from './vendor.81f97c66.js';
var c = /-(.)/g;
const p = r => {
  return (
    r[0].toUpperCase() +
    ((e = r),
    e.replace(c, function (r, e) {
      return e.toUpperCase();
    })).slice(1)
  );
  var e;
};
function i(r, { displayName: c = p(r), Component: i, defaultProps: u } = {}) {
  const m = l.exports.forwardRef((l, c) => {
    var p = l,
      { className: u, bsPrefix: m, as: v = i || 'div' } = p,
      b = ((r, t) => {
        var s = {};
        for (var n in r) a.call(r, n) && t.indexOf(n) < 0 && (s[n] = r[n]);
        if (null != r && e)
          for (var n of e(r)) t.indexOf(n) < 0 && o.call(r, n) && (s[n] = r[n]);
        return s;
      })(p, ['className', 'bsPrefix', 'as']);
    const d = s(m, r);
    return f(
      v,
      ((r, s) => {
        for (var n in s || (s = {})) a.call(s, n) && t(r, n, s[n]);
        if (e) for (var n of e(s)) o.call(s, n) && t(r, n, s[n]);
        return r;
      })({ ref: c, className: n(u, d) }, b),
    );
  });
  return (m.defaultProps = u), (m.displayName = c), m;
}
export { i as c };
