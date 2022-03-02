var e = Object.defineProperty,
  r = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  t = Object.prototype.propertyIsEnumerable,
  l = (r, s, a) =>
    s in r
      ? e(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (r[s] = a),
  n = (e, r) => {
    for (var s in r || (r = {})) o.call(r, s) && l(e, s, r[s]);
    if (a) for (var s of a(r)) t.call(r, s) && l(e, s, r[s]);
    return e;
  },
  c = (e, a) => r(e, s(a)),
  f = (e, r) => {
    var s = {};
    for (var l in e) o.call(e, l) && r.indexOf(l) < 0 && (s[l] = e[l]);
    if (null != e && a)
      for (var l of a(e)) r.indexOf(l) < 0 && t.call(e, l) && (s[l] = e[l]);
    return s;
  };
import { c as p, u as i } from './ThemeProvider.869a7bec.js';
import { r as b, j as m } from './vendor.81f97c66.js';
const u = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const d = b.exports.forwardRef((e, r) => {
  const [s, ...a] = (function (e) {
      var r = e,
        { as: s, bsPrefix: a, className: o } = r,
        t = f(r, ['as', 'bsPrefix', 'className']);
      a = i(a, 'col');
      const l = [],
        b = [];
      return (
        u.forEach(e => {
          const r = t[e];
          let s, o, n;
          delete t[e],
            'object' == typeof r && null != r
              ? ({ span: s, offset: o, order: n } = r)
              : (s = r);
          const c = 'xs' !== e ? `-${e}` : '';
          s && l.push(!0 === s ? `${a}${c}` : `${a}${c}-${s}`),
            null != n && b.push(`order${c}-${n}`),
            null != o && b.push(`offset${c}-${o}`);
        }),
        [
          c(n({}, t), { className: p(o, ...l, ...b) }),
          { as: s, bsPrefix: a, spans: l },
        ]
      );
    })(e),
    o = s,
    { className: t } = o,
    l = f(o, ['className']),
    [{ as: b = 'div', bsPrefix: d, spans: x }] = a;
  return m(b, c(n({}, l), { ref: r, className: p(t, !x.length && d) }));
});
d.displayName = 'Col';
var x = d;
export { x as C };
