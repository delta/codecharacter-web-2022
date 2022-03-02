import { _ as r } from './vendor.81f97c66.js';
function t(t, e) {
  if (null == t) return {};
  var n,
    o,
    a = r(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        e.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n]));
  }
  return a;
}
function e(r, t) {
  (null == t || t > r.length) && (t = r.length);
  for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
  return n;
}
function n(r, t) {
  if (r) {
    if ('string' == typeof r) return e(r, t);
    var n = Object.prototype.toString.call(r).slice(8, -1);
    return (
      'Object' === n && r.constructor && (n = r.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(r)
        : 'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? e(r, t)
        : void 0
    );
  }
}
function o(r) {
  return (
    (function (r) {
      if (Array.isArray(r)) return e(r);
    })(r) ||
    (function (r) {
      if (
        ('undefined' != typeof Symbol && null != r[Symbol.iterator]) ||
        null != r['@@iterator']
      )
        return Array.from(r);
    })(r) ||
    n(r) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
export { t as _, o as a, n as b };
