var e = Object.defineProperty,
  t = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  n = (t, r, o) =>
    r in t
      ? e(t, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[r] = o),
  i = (e, t) => {
    for (var r in t || (t = {})) a.call(t, r) && n(e, r, t[r]);
    if (o) for (var r of o(t)) s.call(t, r) && n(e, r, t[r]);
    return e;
  },
  l = (e, o) => t(e, r(o)),
  c = (e, t) => {
    var r = {};
    for (var n in e) a.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (null != e && o)
      for (var n of o(e)) t.indexOf(n) < 0 && s.call(e, n) && (r[n] = e[n]);
    return r;
  };
import {
  r as p,
  _ as f,
  y as d,
  x as m,
  j as u,
  e as v,
  F as y,
} from './vendor.81f97c66.js';
import { c as h, u as b } from './ThemeProvider.869a7bec.js';
import { F as x, a as N } from './FormGroup.c96accb6.js';
import { c as g } from './createWithBsPrefix.439c8819.js';
import { C as P } from './Col.0eeb879f.js';
function F(e) {
  return 'default' + e.charAt(0).toUpperCase() + e.substr(1);
}
function S(e) {
  var t = (function (e, t) {
    if ('object' != typeof e || null === e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 !== r) {
      var o = r.call(e, t || 'default');
      if ('object' != typeof o) return o;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
  })(e, 'string');
  return 'symbol' == typeof t ? t : String(t);
}
function w(e, t, r) {
  var o = p.exports.useRef(void 0 !== e),
    a = p.exports.useState(t),
    s = a[0],
    n = a[1],
    i = void 0 !== e,
    l = o.current;
  return (
    (o.current = i),
    !i && l && s !== t && n(t),
    [
      i ? e : s,
      p.exports.useCallback(
        function (e) {
          for (
            var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            o[a - 1] = arguments[a];
          r && r.apply(void 0, [e].concat(o)), n(e);
        },
        [r],
      ),
    ]
  );
}
function I(e, t) {
  return Object.keys(t).reduce(function (r, o) {
    var a,
      s = r,
      n = s[F(o)],
      i = s[o],
      l = f(s, [F(o), o].map(S)),
      c = t[o],
      p = w(i, n, e[c]),
      m = p[0],
      u = p[1];
    return d({}, l, (((a = {})[o] = m), (a[c] = u), a));
  }, e);
}
function k() {
  var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
  null != e && this.setState(e);
}
function C(e) {
  this.setState(
    function (t) {
      var r = this.constructor.getDerivedStateFromProps(e, t);
      return null != r ? r : null;
    }.bind(this),
  );
}
function U(e, t) {
  try {
    var r = this.props,
      o = this.state;
    (this.props = e),
      (this.state = t),
      (this.__reactInternalSnapshotFlag = !0),
      (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(r, o));
  } finally {
    (this.props = r), (this.state = o);
  }
}
function _(e) {
  var t = e.prototype;
  if (!t || !t.isReactComponent)
    throw new Error('Can only polyfill class components');
  if (
    'function' != typeof e.getDerivedStateFromProps &&
    'function' != typeof t.getSnapshotBeforeUpdate
  )
    return e;
  var r = null,
    o = null,
    a = null;
  if (
    ('function' == typeof t.componentWillMount
      ? (r = 'componentWillMount')
      : 'function' == typeof t.UNSAFE_componentWillMount &&
        (r = 'UNSAFE_componentWillMount'),
    'function' == typeof t.componentWillReceiveProps
      ? (o = 'componentWillReceiveProps')
      : 'function' == typeof t.UNSAFE_componentWillReceiveProps &&
        (o = 'UNSAFE_componentWillReceiveProps'),
    'function' == typeof t.componentWillUpdate
      ? (a = 'componentWillUpdate')
      : 'function' == typeof t.UNSAFE_componentWillUpdate &&
        (a = 'UNSAFE_componentWillUpdate'),
    null !== r || null !== o || null !== a)
  ) {
    var s = e.displayName || e.name,
      n =
        'function' == typeof e.getDerivedStateFromProps
          ? 'getDerivedStateFromProps()'
          : 'getSnapshotBeforeUpdate()';
    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        s +
        ' uses ' +
        n +
        ' but also contains the following legacy lifecycles:' +
        (null !== r ? '\n  ' + r : '') +
        (null !== o ? '\n  ' + o : '') +
        (null !== a ? '\n  ' + a : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks',
    );
  }
  if (
    ('function' == typeof e.getDerivedStateFromProps &&
      ((t.componentWillMount = k), (t.componentWillReceiveProps = C)),
    'function' == typeof t.getSnapshotBeforeUpdate)
  ) {
    if ('function' != typeof t.componentDidUpdate)
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype',
      );
    t.componentWillUpdate = U;
    var i = t.componentDidUpdate;
    t.componentDidUpdate = function (e, t, r) {
      var o = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : r;
      i.call(this, e, t, o);
    };
  }
  return e;
}
function R(e, t) {
  let r = 0;
  return p.exports.Children.map(e, e =>
    p.exports.isValidElement(e) ? t(e, r++) : e,
  );
}
(k.__suppressDeprecationWarning = !0),
  (C.__suppressDeprecationWarning = !0),
  (U.__suppressDeprecationWarning = !0);
const j = { type: m.string, tooltip: m.bool, as: m.elementType },
  O = p.exports.forwardRef((e, t) => {
    var r = e,
      { as: o = 'div', className: a, type: s = 'valid', tooltip: n = !1 } = r,
      p = c(r, ['as', 'className', 'type', 'tooltip']);
    return u(
      o,
      l(i({}, p), {
        ref: t,
        className: h(a, `${s}-${n ? 'tooltip' : 'feedback'}`),
      }),
    );
  });
(O.displayName = 'Feedback'), (O.propTypes = j);
var W = O;
const D = p.exports.forwardRef((e, t) => {
  var r = e,
    {
      id: o,
      bsPrefix: a,
      className: s,
      type: n = 'checkbox',
      isValid: f = !1,
      isInvalid: d = !1,
      as: m = 'input',
    } = r,
    v = c(r, [
      'id',
      'bsPrefix',
      'className',
      'type',
      'isValid',
      'isInvalid',
      'as',
    ]);
  const { controlId: y } = p.exports.useContext(x);
  return (
    (a = b(a, 'form-check-input')),
    u(
      m,
      l(i({}, v), {
        ref: t,
        type: n,
        id: o || y,
        className: h(s, a, f && 'is-valid', d && 'is-invalid'),
      }),
    )
  );
});
D.displayName = 'FormCheckInput';
var E = D;
const T = p.exports.forwardRef((e, t) => {
  var r = e,
    { bsPrefix: o, className: a, htmlFor: s } = r,
    n = c(r, ['bsPrefix', 'className', 'htmlFor']);
  const { controlId: f } = p.exports.useContext(x);
  return (
    (o = b(o, 'form-check-label')),
    u('label', l(i({}, n), { ref: t, htmlFor: s || f, className: h(a, o) }))
  );
});
T.displayName = 'FormCheckLabel';
var $ = T;
const V = p.exports.forwardRef((e, t) => {
  var r = e,
    {
      id: o,
      bsPrefix: a,
      bsSwitchPrefix: s,
      inline: n = !1,
      disabled: f = !1,
      isValid: d = !1,
      isInvalid: m = !1,
      feedbackTooltip: N = !1,
      feedback: g,
      feedbackType: P,
      className: F,
      style: S,
      title: w = '',
      type: I = 'checkbox',
      label: k,
      children: C,
      as: U = 'input',
    } = r,
    _ = c(r, [
      'id',
      'bsPrefix',
      'bsSwitchPrefix',
      'inline',
      'disabled',
      'isValid',
      'isInvalid',
      'feedbackTooltip',
      'feedback',
      'feedbackType',
      'className',
      'style',
      'title',
      'type',
      'label',
      'children',
      'as',
    ]);
  (a = b(a, 'form-check')), (s = b(s, 'form-switch'));
  const { controlId: R } = p.exports.useContext(x),
    j = p.exports.useMemo(() => ({ controlId: o || R }), [R, o]),
    O =
      (!C && null != k && !1 !== k) ||
      (function (e, t) {
        return p.exports.Children.toArray(e).some(
          e => p.exports.isValidElement(e) && e.type === t,
        );
      })(C, $),
    D = u(
      E,
      l(i({}, _), {
        type: 'switch' === I ? 'checkbox' : I,
        ref: t,
        isValid: d,
        isInvalid: m,
        disabled: f,
        as: U,
      }),
    );
  return u(x.Provider, {
    value: j,
    children: u('div', {
      style: S,
      className: h(F, O && a, n && `${a}-inline`, 'switch' === I && s),
      children:
        C ||
        v(y, {
          children: [
            D,
            O && u($, { title: w, children: k }),
            g && u(W, { type: P, tooltip: N, children: g }),
          ],
        }),
    }),
  });
});
V.displayName = 'FormCheck';
var z = Object.assign(V, { Input: E, Label: $ });
const A = p.exports.forwardRef((e, t) => {
  var r = e,
    {
      bsPrefix: o,
      type: a,
      size: s,
      htmlSize: n,
      id: f,
      className: d,
      isValid: m = !1,
      isInvalid: v = !1,
      plaintext: y,
      readOnly: N,
      as: g = 'input',
    } = r,
    P = c(r, [
      'bsPrefix',
      'type',
      'size',
      'htmlSize',
      'id',
      'className',
      'isValid',
      'isInvalid',
      'plaintext',
      'readOnly',
      'as',
    ]);
  const { controlId: F } = p.exports.useContext(x);
  let S;
  return (
    (o = b(o, 'form-control')),
    (S = y ? { [`${o}-plaintext`]: !0 } : { [o]: !0, [`${o}-${s}`]: s }),
    u(
      g,
      l(i({}, P), {
        type: a,
        size: n,
        ref: t,
        readOnly: N,
        id: f || F,
        className: h(
          d,
          S,
          m && 'is-valid',
          v && 'is-invalid',
          'color' === a && `${o}-color`,
        ),
      }),
    )
  );
});
A.displayName = 'FormControl';
var L = Object.assign(A, { Feedback: W }),
  B = g('form-floating');
const M = p.exports.forwardRef((e, t) => {
  var r = e,
    {
      as: o = 'label',
      bsPrefix: a,
      column: s,
      visuallyHidden: n,
      className: l,
      htmlFor: f,
    } = r,
    d = c(r, [
      'as',
      'bsPrefix',
      'column',
      'visuallyHidden',
      'className',
      'htmlFor',
    ]);
  const { controlId: m } = p.exports.useContext(x);
  a = b(a, 'form-label');
  let v = 'col-form-label';
  'string' == typeof s && (v = `${v} ${v}-${s}`);
  const y = h(l, a, n && 'visually-hidden', s && v);
  return (
    (f = f || m),
    s
      ? u(P, i({ ref: t, as: 'label', className: y, htmlFor: f }, d))
      : u(o, i({ ref: t, className: y, htmlFor: f }, d))
  );
});
(M.displayName = 'FormLabel'),
  (M.defaultProps = { column: !1, visuallyHidden: !1 });
var H = M;
const G = p.exports.forwardRef((e, t) => {
  var r = e,
    { bsPrefix: o, className: a, id: s } = r,
    n = c(r, ['bsPrefix', 'className', 'id']);
  const { controlId: f } = p.exports.useContext(x);
  return (
    (o = b(o, 'form-range')),
    u(
      'input',
      l(i({}, n), { type: 'range', ref: t, className: h(a, o), id: s || f }),
    )
  );
});
G.displayName = 'FormRange';
var q = G;
const J = p.exports.forwardRef((e, t) => {
  var r = e,
    {
      bsPrefix: o,
      size: a,
      htmlSize: s,
      className: n,
      isValid: f = !1,
      isInvalid: d = !1,
      id: m,
    } = r,
    v = c(r, [
      'bsPrefix',
      'size',
      'htmlSize',
      'className',
      'isValid',
      'isInvalid',
      'id',
    ]);
  const { controlId: y } = p.exports.useContext(x);
  return (
    (o = b(o, 'form-select')),
    u(
      'select',
      l(i({}, v), {
        size: s,
        ref: t,
        className: h(
          n,
          o,
          a && `${o}-${a}`,
          f && 'is-valid',
          d && 'is-invalid',
        ),
        id: m || y,
      }),
    )
  );
});
J.displayName = 'FormSelect';
var K = J;
const Q = p.exports.forwardRef((e, t) => {
  var r = e,
    { bsPrefix: o, className: a, as: s = 'small', muted: n } = r,
    p = c(r, ['bsPrefix', 'className', 'as', 'muted']);
  return (
    (o = b(o, 'form-text')),
    u(s, l(i({}, p), { ref: t, className: h(a, o, n && 'text-muted') }))
  );
});
Q.displayName = 'FormText';
var X = Q;
const Y = p.exports.forwardRef((e, t) =>
  u(z, l(i({}, e), { ref: t, type: 'switch' })),
);
Y.displayName = 'Switch';
var Z = Object.assign(Y, { Input: z.Input, Label: z.Label });
const ee = p.exports.forwardRef((e, t) => {
  var r = e,
    { bsPrefix: o, className: a, children: s, controlId: n, label: p } = r,
    f = c(r, ['bsPrefix', 'className', 'children', 'controlId', 'label']);
  return (
    (o = b(o, 'form-floating')),
    v(
      N,
      l(i({ ref: t, className: h(a, o), controlId: n }, f), {
        children: [s, u('label', { htmlFor: n, children: p })],
      }),
    )
  );
});
ee.displayName = 'FloatingLabel';
var te = ee;
const re = { _ref: m.any, validated: m.bool, as: m.elementType },
  oe = p.exports.forwardRef((e, t) => {
    var r = e,
      { className: o, validated: a, as: s = 'form' } = r,
      n = c(r, ['className', 'validated', 'as']);
    return u(s, l(i({}, n), { ref: t, className: h(o, a && 'was-validated') }));
  });
(oe.displayName = 'Form'), (oe.propTypes = re);
var ae = Object.assign(oe, {
  Group: N,
  Control: L,
  Floating: B,
  Check: z,
  Switch: Z,
  Label: H,
  Text: X,
  Range: q,
  Select: K,
  FloatingLabel: te,
});
export { ae as F, w as a, R as m, _ as p, I as u };
