var r = Object.defineProperty,
  e = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  t = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  l = (e, o, t) =>
    o in e
      ? r(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[o] = t),
  c = (r, e) => {
    for (var o in e || (e = {})) a.call(e, o) && l(r, o, e[o]);
    if (t) for (var o of t(e)) n.call(e, o) && l(r, o, e[o]);
    return r;
  };
import { r as s, j as p } from './vendor.81f97c66.js';
var f = s.exports.createContext({});
const i = s.exports.forwardRef((r, l) => {
  var i = r,
    { controlId: v, as: d = 'div' } = i,
    b = ((r, e) => {
      var o = {};
      for (var l in r) a.call(r, l) && e.indexOf(l) < 0 && (o[l] = r[l]);
      if (null != r && t)
        for (var l of t(r)) e.indexOf(l) < 0 && n.call(r, l) && (o[l] = r[l]);
      return o;
    })(i, ['controlId', 'as']);
  const u = s.exports.useMemo(() => ({ controlId: v }), [v]);
  return p(f.Provider, {
    value: u,
    children: p(d, ((O = c({}, b)), (y = { ref: l }), e(O, o(y)))),
  });
  var O, y;
});
i.displayName = 'FormGroup';
var v = i;
export { f as F, v as a };
