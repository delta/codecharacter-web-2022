import { r as n } from './vendor.81f97c66.js';
import { c as t, o as e } from './Fade.6981a97a.js';
function r() {
  var t = n.exports.useRef(!0),
    e = n.exports.useRef(function () {
      return t.current;
    });
  return (
    n.exports.useEffect(function () {
      return function () {
        t.current = !1;
      };
    }, []),
    e.current
  );
}
function o(t) {
  var e,
    r,
    o = ((e = t), ((r = n.exports.useRef(e)).current = e), r);
  n.exports.useEffect(function () {
    return function () {
      return o.current();
    };
  }, []);
}
function s(n, t) {
  return n.contains
    ? n.contains(t)
    : n.compareDocumentPosition
    ? n === t || !!(16 & n.compareDocumentPosition(t))
    : void 0;
}
const u = n.exports.createContext(t ? window : void 0);
function c() {
  return n.exports.useContext(u);
}
u.Provider;
const a = (n, r) => {
  var o;
  return t
    ? null == n
      ? (r || e()).body
      : ('function' == typeof n && (n = n()),
        n && 'current' in n && (n = n.current),
        (null != (o = n) && o.nodeType && n) || null)
    : null;
};
function i(t, e) {
  const r = c(),
    [o, s] = n.exports.useState(() => a(t, null == r ? void 0 : r.document));
  if (!o) {
    const n = a(t);
    n && s(n);
  }
  return (
    n.exports.useEffect(() => {
      e && o && e(o);
    }, [e, o]),
    n.exports.useEffect(() => {
      const n = a(t);
      n !== o && s(n);
    }, [t, o]),
    o
  );
}
function f(n, t) {
  return n.classList
    ? !!t && n.classList.contains(t)
    : -1 !==
        (' ' + (n.className.baseVal || n.className) + ' ').indexOf(
          ' ' + t + ' ',
        );
}
export { r as a, o as b, s as c, c as d, f as h, i as u };
