var e = Object.defineProperty,
  r = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  t = Object.prototype.propertyIsEnumerable,
  l = (r, o, a) =>
    o in r
      ? e(r, o, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (r[o] = a);
import { u as c, c as n } from './ThemeProvider.869a7bec.js';
import { r as f, j as i } from './vendor.81f97c66.js';
const p = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  b = f.exports.forwardRef((e, f) => {
    var b = e,
      { bsPrefix: m, className: v, as: u = 'div' } = b,
      d = ((e, r) => {
        var o = {};
        for (var l in e) s.call(e, l) && r.indexOf(l) < 0 && (o[l] = e[l]);
        if (null != e && a)
          for (var l of a(e)) r.indexOf(l) < 0 && t.call(e, l) && (o[l] = e[l]);
        return o;
      })(b, ['bsPrefix', 'className', 'as']);
    const x = c(m, 'row'),
      O = `${x}-cols`,
      j = [];
    return (
      p.forEach(e => {
        const r = d[e];
        let o;
        delete d[e],
          null != r && 'object' == typeof r ? ({ cols: o } = r) : (o = r);
        const a = 'xs' !== e ? `-${e}` : '';
        null != o && j.push(`${O}${a}-${o}`);
      }),
      i(
        u,
        ((y = ((e, r) => {
          for (var o in r || (r = {})) s.call(r, o) && l(e, o, r[o]);
          if (a) for (var o of a(r)) t.call(r, o) && l(e, o, r[o]);
          return e;
        })({ ref: f }, d)),
        (P = { className: n(v, x, ...j) }),
        r(y, o(P))),
      )
    );
    var y, P;
  });
b.displayName = 'Row';
var m = b;
export { m as R };
