import { r } from './vendor.81f97c66.js';
var t,
  e = { exports: {} };
(t = e),
  (function () {
    var r = {}.hasOwnProperty;
    function e() {
      for (var t = [], o = 0; o < arguments.length; o++) {
        var s = arguments[o];
        if (s) {
          var n = typeof s;
          if ('string' === n || 'number' === n) t.push(s);
          else if (Array.isArray(s)) {
            if (s.length) {
              var a = e.apply(null, s);
              a && t.push(a);
            }
          } else if ('object' === n)
            if (s.toString === Object.prototype.toString)
              for (var i in s) r.call(s, i) && s[i] && t.push(i);
            else t.push(s.toString());
        }
      }
      return t.join(' ');
    }
    t.exports ? ((e.default = e), (t.exports = e)) : (window.classNames = e);
  })();
var o = e.exports;
const s = r.exports.createContext({ prefixes: {} });
function n(t, e) {
  const { prefixes: o } = r.exports.useContext(s);
  return t || o[e] || e;
}
function a() {
  const { dir: t } = r.exports.useContext(s);
  return 'rtl' === t;
}
export { a, e as b, o as c, n as u };
