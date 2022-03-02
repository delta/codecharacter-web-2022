var r = Object.defineProperty,
  e = Object.defineProperties,
  t = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  p = (e, t, o) =>
    t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
import { r as c, j as f } from './vendor.81f97c66.js';
import { c as i } from './ThemeProvider.869a7bec.js';
var n = r =>
  c.exports.forwardRef((c, n) => {
    return f(
      'div',
      ((b = ((r, e) => {
        for (var t in e || (e = {})) a.call(e, t) && p(r, t, e[t]);
        if (o) for (var t of o(e)) s.call(e, t) && p(r, t, e[t]);
        return r;
      })({}, c)),
      (l = { ref: n, className: i(c.className, r) }),
      e(b, t(l))),
    );
    var b, l;
  });
export { n as d };
