var r = Object.defineProperty,
  e = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  t = (e, a, o) =>
    a in e
      ? r(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[a] = o);
import { x as l, r as n, j as s } from './vendor.81f97c66.js';
import { c as i } from './ThemeProvider.869a7bec.js';
const f = {
    'aria-label': l.string,
    onClick: l.func,
    variant: l.oneOf(['white']),
  },
  c = n.exports.forwardRef((r, l) => {
    var n = r,
      { className: f, variant: c } = n,
      p = ((r, t) => {
        var l = {};
        for (var n in r) a.call(r, n) && t.indexOf(n) < 0 && (l[n] = r[n]);
        if (null != r && e)
          for (var n of e(r)) t.indexOf(n) < 0 && o.call(r, n) && (l[n] = r[n]);
        return l;
      })(n, ['className', 'variant']);
    return s(
      'button',
      ((r, l) => {
        for (var n in l || (l = {})) a.call(l, n) && t(r, n, l[n]);
        if (e) for (var n of e(l)) o.call(l, n) && t(r, n, l[n]);
        return r;
      })(
        {
          ref: l,
          type: 'button',
          className: i('btn-close', c && `btn-close-${c}`, f),
        },
        p,
      ),
    );
  });
(c.displayName = 'CloseButton'),
  (c.propTypes = f),
  (c.defaultProps = { 'aria-label': 'Close' });
var p = c;
export { p as C };
