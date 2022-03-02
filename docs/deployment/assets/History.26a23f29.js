var e = Object.defineProperty,
  n = Object.defineProperties,
  t = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  l = (n, t, a) =>
    t in n
      ? e(n, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (n[t] = a),
  i = (e, n) => {
    for (var t in n || (n = {})) r.call(n, t) && l(e, t, n[t]);
    if (a) for (var t of a(n)) o.call(n, t) && l(e, t, n[t]);
    return e;
  },
  s = (e, a) => n(e, t(a));
import {
  r as c,
  j as u,
  z as d,
  A as p,
  e as g,
  D as f,
  R as m,
  y as h,
  C as b,
  F as v,
  T as y,
} from './vendor.81f97c66.js';
import { B as w } from './Button.7eb63b50.js';
import { u as x, c as k, b as C } from './ThemeProvider.869a7bec.js';
import { F as S, n as _ } from './index.es.b7d0ea5d.js';
import {
  a as N,
  O as A,
  P as F,
  Q as E,
  R as O,
  L as j,
  A as L,
  M as P,
  s as M,
  N as B,
  a1 as T,
  a2 as I,
} from './index.04970f6d.js';
import { _ as z, a as D } from './toConsumableArray.f9a08daa.js';
import {
  M as $,
  a as R,
} from './codecharacter-map-designer-2022.es.b94f67c0.js';
import { C as V } from './Container.8990cc41.js';
import { R as H } from './Row.1411b6b5.js';
import { C as q } from './Col.0eeb879f.js';
const U = c.exports.forwardRef((e, n) => {
  var t = e,
    { bsPrefix: l, size: c, vertical: d, className: p, as: g = 'div' } = t,
    f = ((e, n) => {
      var t = {};
      for (var l in e) r.call(e, l) && n.indexOf(l) < 0 && (t[l] = e[l]);
      if (null != e && a)
        for (var l of a(e)) n.indexOf(l) < 0 && o.call(e, l) && (t[l] = e[l]);
      return t;
    })(t, ['bsPrefix', 'size', 'vertical', 'className', 'as']);
  const m = x(l, 'btn-group');
  let h = m;
  return (
    d && (h = `${m}-vertical`),
    u(g, s(i({}, f), { ref: n, className: k(p, h, c && `${m}-${c}`) }))
  );
});
(U.displayName = 'ButtonGroup'),
  (U.defaultProps = { vertical: !1, role: 'group' });
var W = U,
  Z = { __esModule: !0, default: void 0 },
  G = J(c.exports),
  K = J(d.exports),
  Y = J(C.exports);
function J(e) {
  return e && e.__esModule ? e : { default: e };
}
const Q = ({
  animate: e,
  className: n,
  layout: t,
  lineColor: a,
  children: r,
}) => (
  'object' == typeof window &&
    document.documentElement.style.setProperty('--line-color', a),
  G.default.createElement(
    'div',
    {
      className: (0, Y.default)(n, 'vertical-timeline', {
        'vertical-timeline--animate': e,
        'vertical-timeline--two-columns': '2-columns' === t,
        'vertical-timeline--one-column-left':
          '1-column' === t || '1-column-left' === t,
        'vertical-timeline--one-column-right': '1-column-right' === t,
      }),
    },
    r,
  )
);
(Q.propTypes = {
  children: K.default.oneOfType([
    K.default.arrayOf(K.default.node),
    K.default.node,
  ]).isRequired,
  className: K.default.string,
  animate: K.default.bool,
  layout: K.default.oneOf([
    '1-column-left',
    '1-column',
    '2-columns',
    '1-column-right',
  ]),
  lineColor: K.default.string,
}),
  (Q.defaultProps = {
    animate: !0,
    className: '',
    layout: '2-columns',
    lineColor: '#FFF',
  });
var X = Q;
Z.default = X;
var ee = {};
function ne() {
  return (
    (ne =
      Object.assign ||
      function (e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n];
          for (var a in t)
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        }
        return e;
      }),
    ne.apply(this, arguments)
  );
}
function te(e, n) {
  return (te =
    Object.setPrototypeOf ||
    function (e, n) {
      return (e.__proto__ = n), e;
    })(e, n);
}
var ae = new Map(),
  re = new WeakMap(),
  oe = 0,
  le = void 0;
function ie(e) {
  return Object.keys(e)
    .sort()
    .filter(function (n) {
      return void 0 !== e[n];
    })
    .map(function (n) {
      return (
        n +
        '_' +
        ('root' === n
          ? (t = e.root)
            ? (re.has(t) || ((oe += 1), re.set(t, oe.toString())), re.get(t))
            : '0'
          : e[n])
      );
      var t;
    })
    .toString();
}
function se(e, n, t, a) {
  if (
    (void 0 === t && (t = {}),
    void 0 === a && (a = le),
    void 0 === window.IntersectionObserver && void 0 !== a)
  ) {
    var r = e.getBoundingClientRect();
    return (
      n(a, {
        isIntersecting: a,
        target: e,
        intersectionRatio: 'number' == typeof t.threshold ? t.threshold : 0,
        time: 0,
        boundingClientRect: r,
        intersectionRect: r,
        rootBounds: r,
      }),
      function () {}
    );
  }
  var o = (function (e) {
      var n = ie(e),
        t = ae.get(n);
      if (!t) {
        var a,
          r = new Map(),
          o = new IntersectionObserver(function (n) {
            n.forEach(function (n) {
              var t,
                o =
                  n.isIntersecting &&
                  a.some(function (e) {
                    return n.intersectionRatio >= e;
                  });
              e.trackVisibility && void 0 === n.isVisible && (n.isVisible = o),
                null == (t = r.get(n.target)) ||
                  t.forEach(function (e) {
                    e(o, n);
                  });
            });
          }, e);
        (a =
          o.thresholds ||
          (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
          (t = { id: n, observer: o, elements: r }),
          ae.set(n, t);
      }
      return t;
    })(t),
    l = o.id,
    i = o.observer,
    s = o.elements,
    c = s.get(e) || [];
  return (
    s.has(e) || s.set(e, c),
    c.push(n),
    i.observe(e),
    function () {
      c.splice(c.indexOf(n), 1),
        0 === c.length && (s.delete(e), i.unobserve(e)),
        0 === s.size && (i.disconnect(), ae.delete(l));
    }
  );
}
var ce = [
  'children',
  'as',
  'tag',
  'triggerOnce',
  'threshold',
  'root',
  'rootMargin',
  'onChange',
  'skip',
  'trackVisibility',
  'delay',
  'initialInView',
  'fallbackInView',
];
function ue(e) {
  return 'function' != typeof e.children;
}
var de = (function (e) {
  var n, t;
  function a(n) {
    var t;
    return (
      ((t = e.call(this, n) || this).node = null),
      (t._unobserveCb = null),
      (t.handleNode = function (e) {
        t.node &&
          (t.unobserve(),
          e ||
            t.props.triggerOnce ||
            t.props.skip ||
            t.setState({ inView: !!t.props.initialInView, entry: void 0 })),
          (t.node = e || null),
          t.observeNode();
      }),
      (t.handleChange = function (e, n) {
        e && t.props.triggerOnce && t.unobserve(),
          ue(t.props) || t.setState({ inView: e, entry: n }),
          t.props.onChange && t.props.onChange(e, n);
      }),
      (t.state = { inView: !!n.initialInView, entry: void 0 }),
      t
    );
  }
  (t = e),
    ((n = a).prototype = Object.create(t.prototype)),
    (n.prototype.constructor = n),
    te(n, t);
  var r = a.prototype;
  return (
    (r.componentDidUpdate = function (e) {
      (e.rootMargin === this.props.rootMargin &&
        e.root === this.props.root &&
        e.threshold === this.props.threshold &&
        e.skip === this.props.skip &&
        e.trackVisibility === this.props.trackVisibility &&
        e.delay === this.props.delay) ||
        (this.unobserve(), this.observeNode());
    }),
    (r.componentWillUnmount = function () {
      this.unobserve(), (this.node = null);
    }),
    (r.observeNode = function () {
      if (this.node && !this.props.skip) {
        var e = this.props,
          n = e.threshold,
          t = e.root,
          a = e.rootMargin,
          r = e.trackVisibility,
          o = e.delay,
          l = e.fallbackInView;
        this._unobserveCb = se(
          this.node,
          this.handleChange,
          {
            threshold: n,
            root: t,
            rootMargin: a,
            trackVisibility: r,
            delay: o,
          },
          l,
        );
      }
    }),
    (r.unobserve = function () {
      this._unobserveCb && (this._unobserveCb(), (this._unobserveCb = null));
    }),
    (r.render = function () {
      if (!ue(this.props)) {
        var e = this.state,
          n = e.inView,
          t = e.entry;
        return this.props.children({
          inView: n,
          entry: t,
          ref: this.handleNode,
        });
      }
      var a = this.props,
        r = a.children,
        o = a.as,
        l = a.tag,
        i = (function (e, n) {
          if (null == e) return {};
          var t,
            a,
            r = {},
            o = Object.keys(e);
          for (a = 0; a < o.length; a++)
            (t = o[a]), n.indexOf(t) >= 0 || (r[t] = e[t]);
          return r;
        })(a, ce);
      return c.exports.createElement(
        o || l || 'div',
        ne({ ref: this.handleNode }, i),
        r,
      );
    }),
    a
  );
})(c.exports.Component);
(de.displayName = 'InView'),
  (de.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 });
var pe = p(
  Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    InView: de,
    default: de,
    defaultFallbackInView: function (e) {
      le = e;
    },
    observe: se,
    useInView: function (e) {
      var n = void 0 === e ? {} : e,
        t = n.threshold,
        a = n.delay,
        r = n.trackVisibility,
        o = n.rootMargin,
        l = n.root,
        i = n.triggerOnce,
        s = n.skip,
        u = n.initialInView,
        d = n.fallbackInView,
        p = c.exports.useRef(),
        g = c.exports.useState({ inView: !!u }),
        f = g[0],
        m = g[1],
        h = c.exports.useCallback(
          function (e) {
            void 0 !== p.current && (p.current(), (p.current = void 0)),
              s ||
                (e &&
                  (p.current = se(
                    e,
                    function (e, n) {
                      m({ inView: e, entry: n }),
                        n.isIntersecting &&
                          i &&
                          p.current &&
                          (p.current(), (p.current = void 0));
                    },
                    {
                      root: l,
                      rootMargin: o,
                      threshold: t,
                      trackVisibility: r,
                      delay: a,
                    },
                    d,
                  )));
          },
          [Array.isArray(t) ? t.toString() : t, l, o, i, s, r, d, a],
        );
      c.exports.useEffect(function () {
        p.current || !f.entry || i || s || m({ inView: !!u });
      });
      var b = [h, f.inView, f.entry];
      return (b.ref = b[0]), (b.inView = b[1]), (b.entry = b[2]), b;
    },
  }),
);
(ee.__esModule = !0), (ee.default = void 0);
var ge = be(c.exports),
  fe = be(d.exports),
  me = be(C.exports),
  he = pe;
function be(e) {
  return e && e.__esModule ? e : { default: e };
}
const ve = ({
  children: e,
  className: n,
  contentArrowStyle: t,
  contentStyle: a,
  date: r,
  dateClassName: o,
  icon: l,
  iconClassName: i,
  iconOnClick: s,
  onTimelineElementClick: c,
  iconStyle: u,
  id: d,
  position: p,
  style: g,
  textClassName: f,
  intersectionObserverProps: m,
  visible: h,
}) =>
  ge.default.createElement(he.InView, m, ({ inView: m, ref: b }) =>
    ge.default.createElement(
      'div',
      {
        ref: b,
        id: d,
        className: (0, me.default)(n, 'vertical-timeline-element', {
          'vertical-timeline-element--left': 'left' === p,
          'vertical-timeline-element--right': 'right' === p,
          'vertical-timeline-element--no-children': '' === e,
        }),
        style: g,
      },
      ge.default.createElement(
        ge.default.Fragment,
        null,
        ge.default.createElement(
          'span',
          {
            style: u,
            onClick: s,
            className: (0, me.default)(i, 'vertical-timeline-element-icon', {
              'bounce-in': m || h,
              'is-hidden': !(m || h),
            }),
          },
          l,
        ),
        ge.default.createElement(
          'div',
          {
            style: a,
            onClick: c,
            className: (0, me.default)(f, 'vertical-timeline-element-content', {
              'bounce-in': m || h,
              'is-hidden': !(m || h),
            }),
          },
          ge.default.createElement('div', {
            style: t,
            className: 'vertical-timeline-element-content-arrow',
          }),
          e,
          ge.default.createElement(
            'span',
            { className: (0, me.default)(o, 'vertical-timeline-element-date') },
            r,
          ),
        ),
      ),
    ),
  );
(ve.propTypes = {
  children: fe.default.oneOfType([
    fe.default.arrayOf(fe.default.node),
    fe.default.node,
  ]),
  className: fe.default.string,
  contentArrowStyle: fe.default.shape({}),
  contentStyle: fe.default.shape({}),
  date: fe.default.node,
  dateClassName: fe.default.string,
  icon: fe.default.element,
  iconClassName: fe.default.string,
  iconStyle: fe.default.shape({}),
  iconOnClick: fe.default.func,
  onTimelineElementClick: fe.default.func,
  id: fe.default.string,
  position: fe.default.string,
  style: fe.default.shape({}),
  textClassName: fe.default.string,
  visible: fe.default.bool,
  intersectionObserverProps: fe.default.shape({
    root: fe.default.object,
    rootMargin: fe.default.string,
    threshold: fe.default.number,
    triggerOnce: fe.default.bool,
  }),
}),
  (ve.defaultProps = {
    children: '',
    className: '',
    contentArrowStyle: null,
    contentStyle: null,
    icon: null,
    iconClassName: '',
    iconOnClick: null,
    onTimelineElementClick: null,
    iconStyle: null,
    id: '',
    style: null,
    date: '',
    dateClassName: '',
    position: '',
    textClassName: '',
    visible: !1,
    intersectionObserverProps: {
      rootMargin: '0px 0px -40px 0px',
      triggerOnce: !0,
    },
  });
var ye = ve;
ee.default = ye;
var we = { VerticalTimeline: Z.default, VerticalTimelineElement: ee.default };
var xe = {
  historyMain: '_historyMain_hy38x_1',
  viewContainer: '_viewContainer_hy38x_9',
  codeView: '_codeView_hy38x_13',
  buttonContainer: '_buttonContainer_hy38x_18',
  largeButton: '_largeButton_hy38x_25',
  smallButton: '_smallButton_hy38x_37',
  codeBox: '_codeBox_hy38x_55',
  mapBox: '_mapBox_hy38x_73',
  timeline: '_timeline_hy38x_80',
  select: '_select_hy38x_85',
  selectButton: '_selectButton_hy38x_90',
  completeTimeline: '_completeTimeline_hy38x_111',
  noCommitDataHeader: '_noCommitDataHeader_hy38x_124',
  selectBtn: '_selectBtn_hy38x_142',
};
function ke(e) {
  const n = { background: '#DFFF00', color: '#fff' },
    t = N(),
    [a, r] = c.exports.useState('0');
  const o = e => {
    const n = new Date(e);
    return `${n.toDateString().substring(4, 10)} at ${n.toLocaleTimeString()}`;
  };
  return u('div', {
    children:
      e.commitHistoryDetails && e.commitHistoryDetails.length > 0
        ? e.commitHistoryDetails.map(l =>
            g(
              we.VerticalTimelineElement,
              {
                className: 'vertical-timeline-element--work',
                contentStyle: { background: '#242a3c', color: '#fff' },
                contentArrowStyle: {
                  borderRight: '7px solid  rgb(33, 150, 243)',
                },
                date: o(l.createdAt.toString()),
                iconStyle:
                  a == l.id
                    ? n
                    : { background: 'rgb(33, 150, 243)', color: '#fff' },
                onTimelineElementClick: () => {
                  r(l.id), e.commitID(l.id);
                },
                children: [
                  u('h6', {
                    className: 'vertical-timeline-element-title',
                    children: l.message,
                  }),
                  u('div', {
                    className: 'flex d-flex justify-content-start',
                    onClick: n =>
                      (function (n) {
                        var a, r, o, l, i, s, c, u, d, p, g, f, m;
                        const h = n.target;
                        null === h.getAttribute('data-uuid')
                          ? null !==
                            (null == (a = h.parentNode)
                              ? void 0
                              : a.getAttribute('data-uuid'))
                            ? 'Code' === e.BigButton
                              ? (t(
                                  A(
                                    (null == (r = h.parentNode)
                                      ? void 0
                                      : r.getAttribute('data-name')) || '',
                                  ),
                                ),
                                t(
                                  F(
                                    (null == (o = h.parentNode)
                                      ? void 0
                                      : o.getAttribute('data-uuid')) || '',
                                  ),
                                ))
                              : (t(
                                  E(
                                    (null == (l = h.parentNode)
                                      ? void 0
                                      : l.getAttribute('data-name')) || '',
                                  ),
                                ),
                                t(
                                  O(
                                    (null == (i = h.parentNode)
                                      ? void 0
                                      : i.getAttribute('data-uuid')) || '',
                                  ),
                                ))
                            : 'Code' === e.BigButton
                            ? (t(
                                A(
                                  (null ==
                                  (c =
                                    null == (s = h.parentNode)
                                      ? void 0
                                      : s.parentNode)
                                    ? void 0
                                    : c.getAttribute('data-name')) || '',
                                ),
                              ),
                              t(
                                F(
                                  (null ==
                                  (d =
                                    null == (u = h.parentNode)
                                      ? void 0
                                      : u.parentNode)
                                    ? void 0
                                    : d.getAttribute('data-uuid')) || '',
                                ),
                              ))
                            : (t(
                                E(
                                  (null ==
                                  (g =
                                    null == (p = h.parentNode)
                                      ? void 0
                                      : p.parentNode)
                                    ? void 0
                                    : g.getAttribute('data-name')) || '',
                                ),
                              ),
                              t(
                                O(
                                  (null ==
                                  (m =
                                    null == (f = h.parentNode)
                                      ? void 0
                                      : f.parentNode)
                                    ? void 0
                                    : m.getAttribute('data-uuid')) || '',
                                ),
                              ))
                          : 'Code' === e.BigButton
                          ? (t(A(h.getAttribute('data-name') || '')),
                            t(F(h.getAttribute('data-uuid') || '')))
                          : (t(E(h.getAttribute('data-name') || '')),
                            t(O(h.getAttribute('data-uuid') || ''))),
                          t(j(!0));
                      })(n),
                    children: g(w, {
                      className: xe.selectBtn,
                      'data-name': l.message,
                      'data-uuid': l.id,
                      children: [
                        ' ',
                        u(S, { icon: _ }),
                        ' ',
                        u('b', { children: 'Simulate' }),
                        ' ',
                      ],
                    }),
                  }),
                ],
              },
              l.id.toString(),
            ),
          )
        : u('h1', {
            className: 'noCommitStyle',
            children: 'No Commits available',
          }),
  });
}
function Ce(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? Object(arguments[n]) : {},
      a = Object.keys(t);
    'function' == typeof Object.getOwnPropertySymbols &&
      a.push.apply(
        a,
        Object.getOwnPropertySymbols(t).filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        }),
      ),
      a.forEach(function (n) {
        f(e, n, t[n]);
      });
  }
  return e;
}
var Se = {};
function _e(e) {
  if (0 === e.length || 1 === e.length) return e;
  var n,
    t,
    a = e.join('.');
  return (
    Se[a] ||
      (Se[a] =
        0 === (t = (n = e).length) || 1 === t
          ? n
          : 2 === t
          ? [
              n[0],
              n[1],
              ''.concat(n[0], '.').concat(n[1]),
              ''.concat(n[1], '.').concat(n[0]),
            ]
          : 3 === t
          ? [
              n[0],
              n[1],
              n[2],
              ''.concat(n[0], '.').concat(n[1]),
              ''.concat(n[0], '.').concat(n[2]),
              ''.concat(n[1], '.').concat(n[0]),
              ''.concat(n[1], '.').concat(n[2]),
              ''.concat(n[2], '.').concat(n[0]),
              ''.concat(n[2], '.').concat(n[1]),
              ''.concat(n[0], '.').concat(n[1], '.').concat(n[2]),
              ''.concat(n[0], '.').concat(n[2], '.').concat(n[1]),
              ''.concat(n[1], '.').concat(n[0], '.').concat(n[2]),
              ''.concat(n[1], '.').concat(n[2], '.').concat(n[0]),
              ''.concat(n[2], '.').concat(n[0], '.').concat(n[1]),
              ''.concat(n[2], '.').concat(n[1], '.').concat(n[0]),
            ]
          : t >= 4
          ? [
              n[0],
              n[1],
              n[2],
              n[3],
              ''.concat(n[0], '.').concat(n[1]),
              ''.concat(n[0], '.').concat(n[2]),
              ''.concat(n[0], '.').concat(n[3]),
              ''.concat(n[1], '.').concat(n[0]),
              ''.concat(n[1], '.').concat(n[2]),
              ''.concat(n[1], '.').concat(n[3]),
              ''.concat(n[2], '.').concat(n[0]),
              ''.concat(n[2], '.').concat(n[1]),
              ''.concat(n[2], '.').concat(n[3]),
              ''.concat(n[3], '.').concat(n[0]),
              ''.concat(n[3], '.').concat(n[1]),
              ''.concat(n[3], '.').concat(n[2]),
              ''.concat(n[0], '.').concat(n[1], '.').concat(n[2]),
              ''.concat(n[0], '.').concat(n[1], '.').concat(n[3]),
              ''.concat(n[0], '.').concat(n[2], '.').concat(n[1]),
              ''.concat(n[0], '.').concat(n[2], '.').concat(n[3]),
              ''.concat(n[0], '.').concat(n[3], '.').concat(n[1]),
              ''.concat(n[0], '.').concat(n[3], '.').concat(n[2]),
              ''.concat(n[1], '.').concat(n[0], '.').concat(n[2]),
              ''.concat(n[1], '.').concat(n[0], '.').concat(n[3]),
              ''.concat(n[1], '.').concat(n[2], '.').concat(n[0]),
              ''.concat(n[1], '.').concat(n[2], '.').concat(n[3]),
              ''.concat(n[1], '.').concat(n[3], '.').concat(n[0]),
              ''.concat(n[1], '.').concat(n[3], '.').concat(n[2]),
              ''.concat(n[2], '.').concat(n[0], '.').concat(n[1]),
              ''.concat(n[2], '.').concat(n[0], '.').concat(n[3]),
              ''.concat(n[2], '.').concat(n[1], '.').concat(n[0]),
              ''.concat(n[2], '.').concat(n[1], '.').concat(n[3]),
              ''.concat(n[2], '.').concat(n[3], '.').concat(n[0]),
              ''.concat(n[2], '.').concat(n[3], '.').concat(n[1]),
              ''.concat(n[3], '.').concat(n[0], '.').concat(n[1]),
              ''.concat(n[3], '.').concat(n[0], '.').concat(n[2]),
              ''.concat(n[3], '.').concat(n[1], '.').concat(n[0]),
              ''.concat(n[3], '.').concat(n[1], '.').concat(n[2]),
              ''.concat(n[3], '.').concat(n[2], '.').concat(n[0]),
              ''.concat(n[3], '.').concat(n[2], '.').concat(n[1]),
              ''
                .concat(n[0], '.')
                .concat(n[1], '.')
                .concat(n[2], '.')
                .concat(n[3]),
              ''
                .concat(n[0], '.')
                .concat(n[1], '.')
                .concat(n[3], '.')
                .concat(n[2]),
              ''
                .concat(n[0], '.')
                .concat(n[2], '.')
                .concat(n[1], '.')
                .concat(n[3]),
              ''
                .concat(n[0], '.')
                .concat(n[2], '.')
                .concat(n[3], '.')
                .concat(n[1]),
              ''
                .concat(n[0], '.')
                .concat(n[3], '.')
                .concat(n[1], '.')
                .concat(n[2]),
              ''
                .concat(n[0], '.')
                .concat(n[3], '.')
                .concat(n[2], '.')
                .concat(n[1]),
              ''
                .concat(n[1], '.')
                .concat(n[0], '.')
                .concat(n[2], '.')
                .concat(n[3]),
              ''
                .concat(n[1], '.')
                .concat(n[0], '.')
                .concat(n[3], '.')
                .concat(n[2]),
              ''
                .concat(n[1], '.')
                .concat(n[2], '.')
                .concat(n[0], '.')
                .concat(n[3]),
              ''
                .concat(n[1], '.')
                .concat(n[2], '.')
                .concat(n[3], '.')
                .concat(n[0]),
              ''
                .concat(n[1], '.')
                .concat(n[3], '.')
                .concat(n[0], '.')
                .concat(n[2]),
              ''
                .concat(n[1], '.')
                .concat(n[3], '.')
                .concat(n[2], '.')
                .concat(n[0]),
              ''
                .concat(n[2], '.')
                .concat(n[0], '.')
                .concat(n[1], '.')
                .concat(n[3]),
              ''
                .concat(n[2], '.')
                .concat(n[0], '.')
                .concat(n[3], '.')
                .concat(n[1]),
              ''
                .concat(n[2], '.')
                .concat(n[1], '.')
                .concat(n[0], '.')
                .concat(n[3]),
              ''
                .concat(n[2], '.')
                .concat(n[1], '.')
                .concat(n[3], '.')
                .concat(n[0]),
              ''
                .concat(n[2], '.')
                .concat(n[3], '.')
                .concat(n[0], '.')
                .concat(n[1]),
              ''
                .concat(n[2], '.')
                .concat(n[3], '.')
                .concat(n[1], '.')
                .concat(n[0]),
              ''
                .concat(n[3], '.')
                .concat(n[0], '.')
                .concat(n[1], '.')
                .concat(n[2]),
              ''
                .concat(n[3], '.')
                .concat(n[0], '.')
                .concat(n[2], '.')
                .concat(n[1]),
              ''
                .concat(n[3], '.')
                .concat(n[1], '.')
                .concat(n[0], '.')
                .concat(n[2]),
              ''
                .concat(n[3], '.')
                .concat(n[1], '.')
                .concat(n[2], '.')
                .concat(n[0]),
              ''
                .concat(n[3], '.')
                .concat(n[2], '.')
                .concat(n[0], '.')
                .concat(n[1]),
              ''
                .concat(n[3], '.')
                .concat(n[2], '.')
                .concat(n[1], '.')
                .concat(n[0]),
            ]
          : void 0),
    Se[a]
  );
}
function Ne(e) {
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    t = arguments.length > 2 ? arguments[2] : void 0,
    a = e.filter(function (e) {
      return 'token' !== e;
    }),
    r = _e(a);
  return r.reduce(function (e, n) {
    return Ce({}, e, t[n]);
  }, n);
}
function Ae(e) {
  return e.join(' ');
}
function Fe(e) {
  var n = e.node,
    t = e.stylesheet,
    a = e.style,
    r = void 0 === a ? {} : a,
    o = e.useInlineStyles,
    l = e.key,
    i = n.properties,
    s = n.type,
    c = n.tagName,
    u = n.value;
  if ('text' === s) return u;
  if (c) {
    var d,
      p = (function (e, n) {
        var t = 0;
        return function (a) {
          return (
            (t += 1),
            a.map(function (a, r) {
              return Fe({
                node: a,
                stylesheet: e,
                useInlineStyles: n,
                key: 'code-segment-'.concat(t, '-').concat(r),
              });
            })
          );
        };
      })(t, o);
    if (o) {
      var g = Object.keys(t).reduce(function (e, n) {
          return (
            n.split('.').forEach(function (n) {
              e.includes(n) || e.push(n);
            }),
            e
          );
        }, []),
        f = i.className && i.className.includes('token') ? ['token'] : [],
        b =
          i.className &&
          f.concat(
            i.className.filter(function (e) {
              return !g.includes(e);
            }),
          );
      d = Ce({}, i, {
        className: Ae(b) || void 0,
        style: Ne(i.className, Object.assign({}, i.style, r), t),
      });
    } else d = Ce({}, i, { className: Ae(i.className) });
    var v = p(n.children);
    return m.createElement(c, h({ key: l }, d), v);
  }
}
var Ee = /\n/g;
function Oe(e) {
  var n = e.codeString,
    t = e.codeStyle,
    a = e.containerStyle,
    r = void 0 === a ? { float: 'left', paddingRight: '10px' } : a,
    o = e.numberStyle,
    l = void 0 === o ? {} : o,
    i = e.startingLineNumber;
  return m.createElement(
    'code',
    { style: Object.assign({}, t, r) },
    (function (e) {
      var n = e.lines,
        t = e.startingLineNumber,
        a = e.style;
      return n.map(function (e, n) {
        var r = n + t;
        return m.createElement(
          'span',
          {
            key: 'line-'.concat(n),
            className: 'react-syntax-highlighter-line-number',
            style: 'function' == typeof a ? a(r) : a,
          },
          ''.concat(r, '\n'),
        );
      });
    })({
      lines: n.replace(/\n$/, '').split('\n'),
      style: l,
      startingLineNumber: i,
    }),
  );
}
function je(e, n) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      key: 'line-number--'.concat(e),
      className: [
        'comment',
        'linenumber',
        'react-syntax-highlighter-line-number',
      ],
      style: n,
    },
    children: [{ type: 'text', value: e }],
  };
}
function Le(e, n, t) {
  var a;
  return Ce(
    {},
    {
      display: 'inline-block',
      minWidth: ((a = t), ''.concat(a.toString().length, '.25em')),
      paddingRight: '1em',
      textAlign: 'right',
      userSelect: 'none',
    },
    'function' == typeof e ? e(n) : e,
  );
}
function Pe(e) {
  var n = e.children,
    t = e.lineNumber,
    a = e.lineNumberStyle,
    r = e.largestLineNumber,
    o = e.showInlineLineNumbers,
    l = e.lineProps,
    i = void 0 === l ? {} : l,
    s = e.className,
    c = void 0 === s ? [] : s,
    u = e.showLineNumbers,
    d = e.wrapLongLines,
    p = 'function' == typeof i ? i(t) : i;
  if (((p.className = c), t && o)) {
    var g = Le(a, t, r);
    n.unshift(je(t, g));
  }
  return (
    d & u && (p.style = Ce({}, p.style, { display: 'flex' })),
    { type: 'element', tagName: 'span', properties: p, children: n }
  );
}
function Me(e) {
  for (
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      a = 0;
    a < e.length;
    a++
  ) {
    var r = e[a];
    if ('text' === r.type)
      t.push(Pe({ children: [r], className: D(new Set(n)) }));
    else if (r.children) {
      var o = n.concat(r.properties.className);
      t = t.concat(Me(r.children, o));
    }
  }
  return t;
}
function Be(e, n, t, a, r, o, l, i, s) {
  var c,
    u = Me(e.value),
    d = [],
    p = -1,
    g = 0;
  function f(e, n) {
    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    return Pe({
      children: e,
      lineNumber: n,
      lineNumberStyle: i,
      largestLineNumber: l,
      showInlineLineNumbers: r,
      lineProps: t,
      className: o,
      showLineNumbers: a,
      wrapLongLines: s,
    });
  }
  function m(e, n) {
    if (a && n && r) {
      var t = Le(i, n, l);
      e.unshift(je(n, t));
    }
    return e;
  }
  function h(e, t) {
    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    return n || a.length > 0 ? f(e, t, a) : m(e, t);
  }
  for (
    var b = function () {
      var e = u[g],
        n = e.children[0].value;
      if (n.match(Ee)) {
        var t = n.split('\n');
        t.forEach(function (n, r) {
          var l = a && d.length + o,
            i = { type: 'text', value: ''.concat(n, '\n') };
          if (0 === r) {
            var s = h(
              u
                .slice(p + 1, g)
                .concat(
                  Pe({ children: [i], className: e.properties.className }),
                ),
              l,
            );
            d.push(s);
          } else if (r === t.length - 1) {
            if (u[g + 1] && u[g + 1].children && u[g + 1].children[0]) {
              var c = Pe({
                children: [{ type: 'text', value: ''.concat(n) }],
                className: e.properties.className,
              });
              u.splice(g + 1, 0, c);
            } else {
              var f = h([i], l, e.properties.className);
              d.push(f);
            }
          } else {
            var m = h([i], l, e.properties.className);
            d.push(m);
          }
        }),
          (p = g);
      }
      g++;
    };
    g < u.length;

  )
    b();
  if (p !== u.length - 1) {
    var v = u.slice(p + 1, u.length);
    if (v && v.length) {
      var y = h(v, a && d.length + o);
      d.push(y);
    }
  }
  return n ? d : (c = []).concat.apply(c, d);
}
function Te(e) {
  var n = e.rows,
    t = e.stylesheet,
    a = e.useInlineStyles;
  return n.map(function (e, n) {
    return Fe({
      node: e,
      stylesheet: t,
      useInlineStyles: a,
      key: 'code-segement'.concat(n),
    });
  });
}
function Ie(e) {
  return e && void 0 !== e.highlightAuto;
}
var ze = function () {
    for (var e = {}, n = 0; n < arguments.length; n++) {
      var t = arguments[n];
      for (var a in t) De.call(t, a) && (e[a] = t[a]);
    }
    return e;
  },
  De = Object.prototype.hasOwnProperty;
var $e = Ve,
  Re = Ve.prototype;
function Ve(e, n, t) {
  (this.property = e), (this.normal = n), t && (this.space = t);
}
(Re.space = null), (Re.normal = {}), (Re.property = {});
var He = ze,
  qe = $e,
  Ue = function (e) {
    var n,
      t,
      a = e.length,
      r = [],
      o = [],
      l = -1;
    for (; ++l < a; )
      (n = e[l]), r.push(n.property), o.push(n.normal), (t = n.space);
    return new qe(He.apply(null, r), He.apply(null, o), t);
  };
var We = function (e) {
  return e.toLowerCase();
};
var Ze = Ke,
  Ge = Ke.prototype;
function Ke(e, n) {
  (this.property = e), (this.attribute = n);
}
(Ge.space = null),
  (Ge.attribute = null),
  (Ge.property = null),
  (Ge.boolean = !1),
  (Ge.booleanish = !1),
  (Ge.overloadedBoolean = !1),
  (Ge.number = !1),
  (Ge.commaSeparated = !1),
  (Ge.spaceSeparated = !1),
  (Ge.commaOrSpaceSeparated = !1),
  (Ge.mustUseProperty = !1),
  (Ge.defined = !1);
var Ye = {},
  Je = 0;
function Qe() {
  return Math.pow(2, ++Je);
}
(Ye.boolean = Qe()),
  (Ye.booleanish = Qe()),
  (Ye.overloadedBoolean = Qe()),
  (Ye.number = Qe()),
  (Ye.spaceSeparated = Qe()),
  (Ye.commaSeparated = Qe()),
  (Ye.commaOrSpaceSeparated = Qe());
var Xe = Ze,
  en = Ye,
  nn = rn;
(rn.prototype = new Xe()), (rn.prototype.defined = !0);
var tn = [
    'boolean',
    'booleanish',
    'overloadedBoolean',
    'number',
    'commaSeparated',
    'spaceSeparated',
    'commaOrSpaceSeparated',
  ],
  an = tn.length;
function rn(e, n, t, a) {
  var r,
    o = -1;
  for (on(this, 'space', a), Xe.call(this, e, n); ++o < an; )
    on(this, (r = tn[o]), (t & en[r]) === en[r]);
}
function on(e, n, t) {
  t && (e[n] = t);
}
var ln = We,
  sn = $e,
  cn = nn,
  un = function (e) {
    var n,
      t,
      a = e.space,
      r = e.mustUseProperty || [],
      o = e.attributes || {},
      l = e.properties,
      i = e.transform,
      s = {},
      c = {};
    for (n in l)
      (t = new cn(n, i(o, n), l[n], a)),
        -1 !== r.indexOf(n) && (t.mustUseProperty = !0),
        (s[n] = t),
        (c[ln(n)] = n),
        (c[ln(t.attribute)] = n);
    return new sn(s, c, a);
  };
var dn = un({
  space: 'xlink',
  transform: function (e, n) {
    return 'xlink:' + n.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null,
  },
});
var pn = un({
  space: 'xml',
  transform: function (e, n) {
    return 'xml:' + n.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
});
var gn = function (e, n) {
    return n in e ? e[n] : n;
  },
  fn = function (e, n) {
    return gn(e, n.toLowerCase());
  };
var mn = un({
    space: 'xmlns',
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    transform: fn,
    properties: { xmlns: null, xmlnsXLink: null },
  }),
  hn = Ye,
  bn = un,
  vn = hn.booleanish,
  yn = hn.number,
  wn = hn.spaceSeparated,
  xn = bn({
    transform: function (e, n) {
      return 'role' === n ? n : 'aria-' + n.slice(4).toLowerCase();
    },
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: vn,
      ariaAutoComplete: null,
      ariaBusy: vn,
      ariaChecked: vn,
      ariaColCount: yn,
      ariaColIndex: yn,
      ariaColSpan: yn,
      ariaControls: wn,
      ariaCurrent: null,
      ariaDescribedBy: wn,
      ariaDetails: null,
      ariaDisabled: vn,
      ariaDropEffect: wn,
      ariaErrorMessage: null,
      ariaExpanded: vn,
      ariaFlowTo: wn,
      ariaGrabbed: vn,
      ariaHasPopup: null,
      ariaHidden: vn,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: wn,
      ariaLevel: yn,
      ariaLive: null,
      ariaModal: vn,
      ariaMultiLine: vn,
      ariaMultiSelectable: vn,
      ariaOrientation: null,
      ariaOwns: wn,
      ariaPlaceholder: null,
      ariaPosInSet: yn,
      ariaPressed: vn,
      ariaReadOnly: vn,
      ariaRelevant: null,
      ariaRequired: vn,
      ariaRoleDescription: wn,
      ariaRowCount: yn,
      ariaRowIndex: yn,
      ariaRowSpan: yn,
      ariaSelected: vn,
      ariaSetSize: yn,
      ariaSort: null,
      ariaValueMax: yn,
      ariaValueMin: yn,
      ariaValueNow: yn,
      ariaValueText: null,
      role: null,
    },
  });
var kn = Ye,
  Cn = un,
  Sn = fn,
  _n = kn.boolean,
  Nn = kn.overloadedBoolean,
  An = kn.booleanish,
  Fn = kn.number,
  En = kn.spaceSeparated,
  On = kn.commaSeparated,
  jn = Ue([
    pn,
    dn,
    mn,
    xn,
    Cn({
      space: 'html',
      attributes: {
        acceptcharset: 'accept-charset',
        classname: 'class',
        htmlfor: 'for',
        httpequiv: 'http-equiv',
      },
      transform: Sn,
      mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
      properties: {
        abbr: null,
        accept: On,
        acceptCharset: En,
        accessKey: En,
        action: null,
        allow: null,
        allowFullScreen: _n,
        allowPaymentRequest: _n,
        allowUserMedia: _n,
        alt: null,
        as: null,
        async: _n,
        autoCapitalize: null,
        autoComplete: En,
        autoFocus: _n,
        autoPlay: _n,
        capture: _n,
        charSet: null,
        checked: _n,
        cite: null,
        className: En,
        cols: Fn,
        colSpan: null,
        content: null,
        contentEditable: An,
        controls: _n,
        controlsList: En,
        coords: Fn | On,
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: _n,
        defer: _n,
        dir: null,
        dirName: null,
        disabled: _n,
        download: Nn,
        draggable: An,
        encType: null,
        enterKeyHint: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: _n,
        formTarget: null,
        headers: En,
        height: Fn,
        hidden: _n,
        high: Fn,
        href: null,
        hrefLang: null,
        htmlFor: En,
        httpEquiv: En,
        id: null,
        imageSizes: null,
        imageSrcSet: On,
        inputMode: null,
        integrity: null,
        is: null,
        isMap: _n,
        itemId: null,
        itemProp: En,
        itemRef: En,
        itemScope: _n,
        itemType: En,
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: _n,
        low: Fn,
        manifest: null,
        max: null,
        maxLength: Fn,
        media: null,
        method: null,
        min: null,
        minLength: Fn,
        multiple: _n,
        muted: _n,
        name: null,
        nonce: null,
        noModule: _n,
        noValidate: _n,
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforePrint: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextMenu: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: _n,
        optimum: Fn,
        pattern: null,
        ping: En,
        placeholder: null,
        playsInline: _n,
        poster: null,
        preload: null,
        readOnly: _n,
        referrerPolicy: null,
        rel: En,
        required: _n,
        reversed: _n,
        rows: Fn,
        rowSpan: Fn,
        sandbox: En,
        scope: null,
        scoped: _n,
        seamless: _n,
        selected: _n,
        shape: null,
        size: Fn,
        sizes: null,
        slot: null,
        span: Fn,
        spellCheck: An,
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: On,
        start: Fn,
        step: null,
        style: null,
        tabIndex: Fn,
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: _n,
        useMap: null,
        value: An,
        width: Fn,
        wrap: null,
        align: null,
        aLink: null,
        archive: En,
        axis: null,
        background: null,
        bgColor: null,
        border: Fn,
        borderColor: null,
        bottomMargin: Fn,
        cellPadding: null,
        cellSpacing: null,
        char: null,
        charOff: null,
        classId: null,
        clear: null,
        code: null,
        codeBase: null,
        codeType: null,
        color: null,
        compact: _n,
        declare: _n,
        event: null,
        face: null,
        frame: null,
        frameBorder: null,
        hSpace: Fn,
        leftMargin: Fn,
        link: null,
        longDesc: null,
        lowSrc: null,
        marginHeight: Fn,
        marginWidth: Fn,
        noResize: _n,
        noHref: _n,
        noShade: _n,
        noWrap: _n,
        object: null,
        profile: null,
        prompt: null,
        rev: null,
        rightMargin: Fn,
        rules: null,
        scheme: null,
        scrolling: An,
        standby: null,
        summary: null,
        text: null,
        topMargin: Fn,
        valueType: null,
        version: null,
        vAlign: null,
        vLink: null,
        vSpace: Fn,
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: _n,
        disableRemotePlayback: _n,
        prefix: null,
        property: null,
        results: Fn,
        security: null,
        unselectable: null,
      },
    }),
  ]),
  Ln = We,
  Pn = nn,
  Mn = Ze,
  Bn = function (e, n) {
    var t = Ln(n),
      a = n,
      r = Mn;
    if (t in e.normal) return e.property[e.normal[t]];
    t.length > 4 &&
      'data' === t.slice(0, 4) &&
      Tn.test(n) &&
      ('-' === n.charAt(4)
        ? (a = (function (e) {
            var n = e.slice(5).replace(In, $n);
            return 'data' + n.charAt(0).toUpperCase() + n.slice(1);
          })(n))
        : (n = (function (e) {
            var n = e.slice(4);
            if (In.test(n)) return e;
            '-' !== (n = n.replace(zn, Dn)).charAt(0) && (n = '-' + n);
            return 'data' + n;
          })(n)),
      (r = Pn));
    return new r(a, n);
  },
  Tn = /^data[-\w.:]+$/i,
  In = /-[a-z]/g,
  zn = /[A-Z]/g;
function Dn(e) {
  return '-' + e.toLowerCase();
}
function $n(e) {
  return e.charAt(1).toUpperCase();
}
var Rn = function (e, n) {
    var t,
      a,
      r,
      o = e || '',
      l = n || 'div',
      i = {},
      s = 0;
    for (; s < o.length; )
      (Vn.lastIndex = s),
        (r = Vn.exec(o)),
        (t = o.slice(s, r ? r.index : o.length)) &&
          (a
            ? '#' === a
              ? (i.id = t)
              : i.className
              ? i.className.push(t)
              : (i.className = [t])
            : (l = t),
          (s += t.length)),
        r && ((a = r[0]), s++);
    return { type: 'element', tagName: l, properties: i, children: [] };
  },
  Vn = /[#.]/g;
var Hn = {
    parse: function (e) {
      var n = String(e || '').trim();
      return '' === n ? [] : n.split(qn);
    },
    stringify: function (e) {
      return e.join(' ').trim();
    },
  },
  qn = /[ \t\n\r\f]+/g;
var Un = {
  parse: function (e) {
    var n,
      t = [],
      a = String(e || ''),
      r = a.indexOf(','),
      o = 0,
      l = !1;
    for (; !l; )
      -1 === r && ((r = a.length), (l = !0)),
        (!(n = a.slice(o, r).trim()) && l) || t.push(n),
        (o = r + 1),
        (r = a.indexOf(',', o));
    return t;
  },
  stringify: function (e, n) {
    var t = n || {},
      a = !1 === t.padLeft ? '' : ' ',
      r = t.padRight ? ' ' : '';
    '' === e[e.length - 1] && (e = e.concat(''));
    return e.join(r + ',' + a).trim();
  },
};
var Wn = Bn,
  Zn = We,
  Gn = Rn,
  Kn = Hn.parse,
  Yn = Un.parse,
  Jn = function (e, n, t) {
    var a = t
      ? (function (e) {
          var n,
            t = e.length,
            a = -1,
            r = {};
          for (; ++a < t; ) r[(n = e[a]).toLowerCase()] = n;
          return r;
        })(t)
      : null;
    return function (e, t) {
      var o,
        l = Gn(e, n),
        i = Array.prototype.slice.call(arguments, 2),
        s = l.tagName.toLowerCase();
      (l.tagName = a && Qn.call(a, s) ? a[s] : s),
        t && Xn(t, l) && (i.unshift(t), (t = null));
      if (t) for (o in t) r(l.properties, o, t[o]);
      et(l.children, i),
        'template' === l.tagName &&
          ((l.content = { type: 'root', children: l.children }),
          (l.children = []));
      return l;
    };
    function r(n, t, a) {
      var r, o, l;
      null != a &&
        a == a &&
        ((o = (r = Wn(e, t)).property),
        'string' == typeof (l = a) &&
          (r.spaceSeparated
            ? (l = Kn(l))
            : r.commaSeparated
            ? (l = Yn(l))
            : r.commaOrSpaceSeparated && (l = Kn(Yn(l).join(' ')))),
        'style' === o &&
          'string' != typeof a &&
          (l = (function (e) {
            var n,
              t = [];
            for (n in e) t.push([n, e[n]].join(': '));
            return t.join('; ');
          })(l)),
        'className' === o && n.className && (l = n.className.concat(l)),
        (n[o] = (function (e, n, t) {
          var a, r, o;
          if ('object' != typeof t || !('length' in t)) return nt(e, n, t);
          (r = t.length), (a = -1), (o = []);
          for (; ++a < r; ) o[a] = nt(e, n, t[a]);
          return o;
        })(r, o, l)));
    }
  },
  Qn = {}.hasOwnProperty;
function Xn(e, n) {
  return (
    'string' == typeof e ||
    'length' in e ||
    (function (e, n) {
      var t = n.type;
      if ('input' === e || !t || 'string' != typeof t) return !1;
      if ('object' == typeof n.children && 'length' in n.children) return !0;
      if (((t = t.toLowerCase()), 'button' === e))
        return (
          'menu' !== t && 'submit' !== t && 'reset' !== t && 'button' !== t
        );
      return 'value' in n;
    })(n.tagName, e)
  );
}
function et(e, n) {
  var t, a;
  if ('string' != typeof n && 'number' != typeof n)
    if ('object' == typeof n && 'length' in n)
      for (t = -1, a = n.length; ++t < a; ) et(e, n[t]);
    else {
      if ('object' != typeof n || !('type' in n))
        throw new Error('Expected node, nodes, or string, got `' + n + '`');
      e.push(n);
    }
  else e.push({ type: 'text', value: String(n) });
}
function nt(e, n, t) {
  var a = t;
  return (
    e.number || e.positiveNumber
      ? isNaN(a) || '' === a || (a = Number(a))
      : (e.boolean || e.overloadedBoolean) &&
        ('string' != typeof a || ('' !== a && Zn(t) !== Zn(n)) || (a = !0)),
    a
  );
}
var tt = Jn(jn, 'div');
tt.displayName = 'html';
var at = tt;
var rt = function (e) {
  var n = 'string' == typeof e ? e.charCodeAt(0) : e;
  return n >= 48 && n <= 57;
};
var ot,
  lt = function (e) {
    var n = 'string' == typeof e ? e.charCodeAt(0) : e;
    return (n >= 97 && n <= 122) || (n >= 65 && n <= 90);
  },
  it = rt;
var st = {
    AElig: 'Æ',
    AMP: '&',
    Aacute: 'Á',
    Acirc: 'Â',
    Agrave: 'À',
    Aring: 'Å',
    Atilde: 'Ã',
    Auml: 'Ä',
    COPY: '©',
    Ccedil: 'Ç',
    ETH: 'Ð',
    Eacute: 'É',
    Ecirc: 'Ê',
    Egrave: 'È',
    Euml: 'Ë',
    GT: '>',
    Iacute: 'Í',
    Icirc: 'Î',
    Igrave: 'Ì',
    Iuml: 'Ï',
    LT: '<',
    Ntilde: 'Ñ',
    Oacute: 'Ó',
    Ocirc: 'Ô',
    Ograve: 'Ò',
    Oslash: 'Ø',
    Otilde: 'Õ',
    Ouml: 'Ö',
    QUOT: '"',
    REG: '®',
    THORN: 'Þ',
    Uacute: 'Ú',
    Ucirc: 'Û',
    Ugrave: 'Ù',
    Uuml: 'Ü',
    Yacute: 'Ý',
    aacute: 'á',
    acirc: 'â',
    acute: '´',
    aelig: 'æ',
    agrave: 'à',
    amp: '&',
    aring: 'å',
    atilde: 'ã',
    auml: 'ä',
    brvbar: '¦',
    ccedil: 'ç',
    cedil: '¸',
    cent: '¢',
    copy: '©',
    curren: '¤',
    deg: '°',
    divide: '÷',
    eacute: 'é',
    ecirc: 'ê',
    egrave: 'è',
    eth: 'ð',
    euml: 'ë',
    frac12: '½',
    frac14: '¼',
    frac34: '¾',
    gt: '>',
    iacute: 'í',
    icirc: 'î',
    iexcl: '¡',
    igrave: 'ì',
    iquest: '¿',
    iuml: 'ï',
    laquo: '«',
    lt: '<',
    macr: '¯',
    micro: 'µ',
    middot: '·',
    nbsp: ' ',
    not: '¬',
    ntilde: 'ñ',
    oacute: 'ó',
    ocirc: 'ô',
    ograve: 'ò',
    ordf: 'ª',
    ordm: 'º',
    oslash: 'ø',
    otilde: 'õ',
    ouml: 'ö',
    para: '¶',
    plusmn: '±',
    pound: '£',
    quot: '"',
    raquo: '»',
    reg: '®',
    sect: '§',
    shy: '­',
    sup1: '¹',
    sup2: '²',
    sup3: '³',
    szlig: 'ß',
    thorn: 'þ',
    times: '×',
    uacute: 'ú',
    ucirc: 'û',
    ugrave: 'ù',
    uml: '¨',
    uuml: 'ü',
    yacute: 'ý',
    yen: '¥',
    yuml: 'ÿ',
  },
  ct = {
    0: '�',
    128: '€',
    130: '‚',
    131: 'ƒ',
    132: '„',
    133: '…',
    134: '†',
    135: '‡',
    136: 'ˆ',
    137: '‰',
    138: 'Š',
    139: '‹',
    140: 'Œ',
    142: 'Ž',
    145: '‘',
    146: '’',
    147: '“',
    148: '”',
    149: '•',
    150: '–',
    151: '—',
    152: '˜',
    153: '™',
    154: 'š',
    155: '›',
    156: 'œ',
    158: 'ž',
    159: 'Ÿ',
  },
  ut = rt,
  dt = function (e) {
    var n = 'string' == typeof e ? e.charCodeAt(0) : e;
    return (
      (n >= 97 && n <= 102) || (n >= 65 && n <= 70) || (n >= 48 && n <= 57)
    );
  },
  pt = function (e) {
    return lt(e) || it(e);
  },
  gt = function (e) {
    var n,
      t = '&' + e + ';';
    if (
      (((ot = ot || document.createElement('i')).innerHTML = t),
      59 === (n = ot.textContent).charCodeAt(n.length - 1) && 'semi' !== e)
    )
      return !1;
    return n !== t && n;
  },
  ft = function (e, n) {
    var t,
      a,
      r = {};
    n || (n = {});
    for (a in vt) (t = n[a]), (r[a] = null == t ? vt[a] : t);
    (r.position.indent || r.position.start) &&
      ((r.indent = r.position.indent || []), (r.position = r.position.start));
    return (function (e, n) {
      var t,
        a,
        r,
        o,
        l,
        i,
        s,
        c,
        u,
        d,
        p,
        g,
        f,
        m,
        h,
        b,
        v,
        y,
        w,
        x = n.additional,
        k = n.nonTerminated,
        C = n.text,
        S = n.reference,
        _ = n.warning,
        N = n.textContext,
        A = n.referenceContext,
        F = n.warningContext,
        E = n.position,
        O = n.indent || [],
        j = e.length,
        L = 0,
        P = -1,
        M = E.column || 1,
        B = E.line || 1,
        T = '',
        I = [];
      'string' == typeof x && (x = x.charCodeAt(0));
      (b = z()), (c = _ ? D : bt), L--, j++;
      for (; ++L < j; )
        if ((10 === l && (M = O[P] || 1), 38 === (l = e.charCodeAt(L)))) {
          if (
            9 === (s = e.charCodeAt(L + 1)) ||
            10 === s ||
            12 === s ||
            32 === s ||
            38 === s ||
            60 === s ||
            s != s ||
            (x && s === x)
          ) {
            (T += ht(l)), M++;
            continue;
          }
          for (
            g = f = L + 1,
              w = f,
              35 === s
                ? ((w = ++g),
                  88 === (s = e.charCodeAt(w)) || 120 === s
                    ? ((m = wt), (w = ++g))
                    : (m = xt))
                : (m = yt),
              t = '',
              p = '',
              o = '',
              h = Ct[m],
              w--;
            ++w < j && h((s = e.charCodeAt(w)));

          )
            (o += ht(s)), m === yt && mt.call(st, o) && ((t = o), (p = st[o]));
          (r = 59 === e.charCodeAt(w)) &&
            (w++, (a = m === yt && gt(o)) && ((t = o), (p = a))),
            (y = 1 + w - f),
            (r || k) &&
              (o
                ? m === yt
                  ? (r && !p
                      ? c(5, 1)
                      : (t !== o &&
                          ((y = 1 + (w = g + t.length) - g), (r = !1)),
                        r ||
                          ((u = t ? 1 : 3),
                          n.attribute
                            ? 61 === (s = e.charCodeAt(w))
                              ? (c(u, y), (p = null))
                              : pt(s)
                              ? (p = null)
                              : c(u, y)
                            : c(u, y))),
                    (i = p))
                  : (r || c(2, y),
                    _t((i = parseInt(o, kt[m])))
                      ? (c(7, y), (i = ht(65533)))
                      : i in ct
                      ? (c(6, y), (i = ct[i]))
                      : ((d = ''),
                        Nt(i) && c(6, y),
                        i > 65535 &&
                          ((d += ht(((i -= 65536) >>> 10) | 55296)),
                          (i = 56320 | (1023 & i))),
                        (i = d + ht(i))))
                : m !== yt && c(4, y)),
            i
              ? ($(),
                (b = z()),
                (L = w - 1),
                (M += w - f + 1),
                I.push(i),
                (v = z()).offset++,
                S && S.call(A, i, { start: b, end: v }, e.slice(f - 1, w)),
                (b = v))
              : ((o = e.slice(f - 1, w)),
                (T += o),
                (M += o.length),
                (L = w - 1));
        } else
          10 === l && (B++, P++, (M = 0)), l == l ? ((T += ht(l)), M++) : $();
      return I.join('');
      function z() {
        return { line: B, column: M, offset: L + (E.offset || 0) };
      }
      function D(e, n) {
        var t = z();
        (t.column += n), (t.offset += n), _.call(F, St[e], t, e);
      }
      function $() {
        T && (I.push(T), C && C.call(N, T, { start: b, end: z() }), (T = ''));
      }
    })(e, r);
  },
  mt = {}.hasOwnProperty,
  ht = String.fromCharCode,
  bt = Function.prototype,
  vt = {
    warning: null,
    reference: null,
    text: null,
    warningContext: null,
    referenceContext: null,
    textContext: null,
    position: {},
    additional: null,
    attribute: !1,
    nonTerminated: !0,
  },
  yt = 'named',
  wt = 'hexadecimal',
  xt = 'decimal',
  kt = { hexadecimal: 16, decimal: 10 },
  Ct = {};
(Ct.named = pt), (Ct[xt] = ut), (Ct[wt] = dt);
var St = {};
function _t(e) {
  return (e >= 55296 && e <= 57343) || e > 1114111;
}
function Nt(e) {
  return (
    (e >= 1 && e <= 8) ||
    11 === e ||
    (e >= 13 && e <= 31) ||
    (e >= 127 && e <= 159) ||
    (e >= 64976 && e <= 65007) ||
    65535 == (65535 & e) ||
    65534 == (65535 & e)
  );
}
(St[1] = 'Named character references must be terminated by a semicolon'),
  (St[2] = 'Numeric character references must be terminated by a semicolon'),
  (St[3] = 'Named character references cannot be empty'),
  (St[4] = 'Numeric character references cannot be empty'),
  (St[5] = 'Named character references must be known'),
  (St[6] = 'Numeric character references cannot be disallowed'),
  (St[7] =
    'Numeric character references cannot be outside the permissible Unicode range');
var At,
  Ft,
  Et = { exports: {} };
(At = Et),
  (Ft = (function (e) {
    var n = /\blang(?:uage)?-([\w-]+)\b/i,
      t = 0,
      a = {},
      r = {
        manual: e.Prism && e.Prism.manual,
        disableWorkerMessageHandler:
          e.Prism && e.Prism.disableWorkerMessageHandler,
        util: {
          encode: function e(n) {
            return n instanceof o
              ? new o(n.type, e(n.content), n.alias)
              : Array.isArray(n)
              ? n.map(e)
              : n
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/\u00a0/g, ' ');
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function (e) {
            return (
              e.__id || Object.defineProperty(e, '__id', { value: ++t }), e.__id
            );
          },
          clone: function e(n, t) {
            var a, o;
            switch (((t = t || {}), r.util.type(n))) {
              case 'Object':
                if (((o = r.util.objId(n)), t[o])) return t[o];
                for (var l in ((a = {}), (t[o] = a), n))
                  n.hasOwnProperty(l) && (a[l] = e(n[l], t));
                return a;
              case 'Array':
                return (
                  (o = r.util.objId(n)),
                  t[o]
                    ? t[o]
                    : ((a = []),
                      (t[o] = a),
                      n.forEach(function (n, r) {
                        a[r] = e(n, t);
                      }),
                      a)
                );
              default:
                return n;
            }
          },
          getLanguage: function (e) {
            for (; e && !n.test(e.className); ) e = e.parentElement;
            return e
              ? (e.className.match(n) || [, 'none'])[1].toLowerCase()
              : 'none';
          },
          currentScript: function () {
            if ('undefined' == typeof document) return null;
            if ('currentScript' in document) return document.currentScript;
            try {
              throw new Error();
            } catch (a) {
              var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack) ||
                [])[1];
              if (e) {
                var n = document.getElementsByTagName('script');
                for (var t in n) if (n[t].src == e) return n[t];
              }
              return null;
            }
          },
          isActive: function (e, n, t) {
            for (var a = 'no-' + n; e; ) {
              var r = e.classList;
              if (r.contains(n)) return !0;
              if (r.contains(a)) return !1;
              e = e.parentElement;
            }
            return !!t;
          },
        },
        languages: {
          plain: a,
          plaintext: a,
          text: a,
          txt: a,
          extend: function (e, n) {
            var t = r.util.clone(r.languages[e]);
            for (var a in n) t[a] = n[a];
            return t;
          },
          insertBefore: function (e, n, t, a) {
            var o = (a = a || r.languages)[e],
              l = {};
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                if (i == n)
                  for (var s in t) t.hasOwnProperty(s) && (l[s] = t[s]);
                t.hasOwnProperty(i) || (l[i] = o[i]);
              }
            var c = a[e];
            return (
              (a[e] = l),
              r.languages.DFS(r.languages, function (n, t) {
                t === c && n != e && (this[n] = l);
              }),
              l
            );
          },
          DFS: function e(n, t, a, o) {
            o = o || {};
            var l = r.util.objId;
            for (var i in n)
              if (n.hasOwnProperty(i)) {
                t.call(n, i, n[i], a || i);
                var s = n[i],
                  c = r.util.type(s);
                'Object' !== c || o[l(s)]
                  ? 'Array' !== c || o[l(s)] || ((o[l(s)] = !0), e(s, t, i, o))
                  : ((o[l(s)] = !0), e(s, t, null, o));
              }
          },
        },
        plugins: {},
        highlightAll: function (e, n) {
          r.highlightAllUnder(document, e, n);
        },
        highlightAllUnder: function (e, n, t) {
          var a = {
            callback: t,
            container: e,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          };
          r.hooks.run('before-highlightall', a),
            (a.elements = Array.prototype.slice.apply(
              a.container.querySelectorAll(a.selector),
            )),
            r.hooks.run('before-all-elements-highlight', a);
          for (var o, l = 0; (o = a.elements[l++]); )
            r.highlightElement(o, !0 === n, a.callback);
        },
        highlightElement: function (t, a, o) {
          var l = r.util.getLanguage(t),
            i = r.languages[l];
          t.className =
            t.className.replace(n, '').replace(/\s+/g, ' ') + ' language-' + l;
          var s = t.parentElement;
          s &&
            'pre' === s.nodeName.toLowerCase() &&
            (s.className =
              s.className.replace(n, '').replace(/\s+/g, ' ') +
              ' language-' +
              l);
          var c = { element: t, language: l, grammar: i, code: t.textContent };
          function u(e) {
            (c.highlightedCode = e),
              r.hooks.run('before-insert', c),
              (c.element.innerHTML = c.highlightedCode),
              r.hooks.run('after-highlight', c),
              r.hooks.run('complete', c),
              o && o.call(c.element);
          }
          if (
            (r.hooks.run('before-sanity-check', c),
            (s = c.element.parentElement) &&
              'pre' === s.nodeName.toLowerCase() &&
              !s.hasAttribute('tabindex') &&
              s.setAttribute('tabindex', '0'),
            !c.code)
          )
            return r.hooks.run('complete', c), void (o && o.call(c.element));
          if ((r.hooks.run('before-highlight', c), c.grammar))
            if (a && e.Worker) {
              var d = new Worker(r.filename);
              (d.onmessage = function (e) {
                u(e.data);
              }),
                d.postMessage(
                  JSON.stringify({
                    language: c.language,
                    code: c.code,
                    immediateClose: !0,
                  }),
                );
            } else u(r.highlight(c.code, c.grammar, c.language));
          else u(r.util.encode(c.code));
        },
        highlight: function (e, n, t) {
          var a = { code: e, grammar: n, language: t };
          return (
            r.hooks.run('before-tokenize', a),
            (a.tokens = r.tokenize(a.code, a.grammar)),
            r.hooks.run('after-tokenize', a),
            o.stringify(r.util.encode(a.tokens), a.language)
          );
        },
        tokenize: function (e, n) {
          var t = n.rest;
          if (t) {
            for (var a in t) n[a] = t[a];
            delete n.rest;
          }
          var r = new s();
          return (
            c(r, r.head, e),
            i(e, r, n, r.head, 0),
            (function (e) {
              for (var n = [], t = e.head.next; t !== e.tail; )
                n.push(t.value), (t = t.next);
              return n;
            })(r)
          );
        },
        hooks: {
          all: {},
          add: function (e, n) {
            var t = r.hooks.all;
            (t[e] = t[e] || []), t[e].push(n);
          },
          run: function (e, n) {
            var t = r.hooks.all[e];
            if (t && t.length) for (var a, o = 0; (a = t[o++]); ) a(n);
          },
        },
        Token: o,
      };
    function o(e, n, t, a) {
      (this.type = e),
        (this.content = n),
        (this.alias = t),
        (this.length = 0 | (a || '').length);
    }
    function l(e, n, t, a) {
      e.lastIndex = n;
      var r = e.exec(t);
      if (r && a && r[1]) {
        var o = r[1].length;
        (r.index += o), (r[0] = r[0].slice(o));
      }
      return r;
    }
    function i(e, n, t, a, s, d) {
      for (var p in t)
        if (t.hasOwnProperty(p) && t[p]) {
          var g = t[p];
          g = Array.isArray(g) ? g : [g];
          for (var f = 0; f < g.length; ++f) {
            if (d && d.cause == p + ',' + f) return;
            var m = g[f],
              h = m.inside,
              b = !!m.lookbehind,
              v = !!m.greedy,
              y = m.alias;
            if (v && !m.pattern.global) {
              var w = m.pattern.toString().match(/[imsuy]*$/)[0];
              m.pattern = RegExp(m.pattern.source, w + 'g');
            }
            for (
              var x = m.pattern || m, k = a.next, C = s;
              k !== n.tail && !(d && C >= d.reach);
              C += k.value.length, k = k.next
            ) {
              var S = k.value;
              if (n.length > e.length) return;
              if (!(S instanceof o)) {
                var _,
                  N = 1;
                if (v) {
                  if (!(_ = l(x, C, e, b))) break;
                  var A = _.index,
                    F = _.index + _[0].length,
                    E = C;
                  for (E += k.value.length; A >= E; )
                    E += (k = k.next).value.length;
                  if (((C = E -= k.value.length), k.value instanceof o))
                    continue;
                  for (
                    var O = k;
                    O !== n.tail && (E < F || 'string' == typeof O.value);
                    O = O.next
                  )
                    N++, (E += O.value.length);
                  N--, (S = e.slice(C, E)), (_.index -= C);
                } else if (!(_ = l(x, 0, S, b))) continue;
                A = _.index;
                var j = _[0],
                  L = S.slice(0, A),
                  P = S.slice(A + j.length),
                  M = C + S.length;
                d && M > d.reach && (d.reach = M);
                var B = k.prev;
                if (
                  (L && ((B = c(n, B, L)), (C += L.length)),
                  u(n, B, N),
                  (k = c(n, B, new o(p, h ? r.tokenize(j, h) : j, y, j))),
                  P && c(n, k, P),
                  N > 1)
                ) {
                  var T = { cause: p + ',' + f, reach: M };
                  i(e, n, t, k.prev, C, T),
                    d && T.reach > d.reach && (d.reach = T.reach);
                }
              }
            }
          }
        }
    }
    function s() {
      var e = { value: null, prev: null, next: null },
        n = { value: null, prev: e, next: null };
      (e.next = n), (this.head = e), (this.tail = n), (this.length = 0);
    }
    function c(e, n, t) {
      var a = n.next,
        r = { value: t, prev: n, next: a };
      return (n.next = r), (a.prev = r), e.length++, r;
    }
    function u(e, n, t) {
      for (var a = n.next, r = 0; r < t && a !== e.tail; r++) a = a.next;
      (n.next = a), (a.prev = n), (e.length -= r);
    }
    if (
      ((e.Prism = r),
      (o.stringify = function e(n, t) {
        if ('string' == typeof n) return n;
        if (Array.isArray(n)) {
          var a = '';
          return (
            n.forEach(function (n) {
              a += e(n, t);
            }),
            a
          );
        }
        var o = {
            type: n.type,
            content: e(n.content, t),
            tag: 'span',
            classes: ['token', n.type],
            attributes: {},
            language: t,
          },
          l = n.alias;
        l &&
          (Array.isArray(l)
            ? Array.prototype.push.apply(o.classes, l)
            : o.classes.push(l)),
          r.hooks.run('wrap', o);
        var i = '';
        for (var s in o.attributes)
          i +=
            ' ' +
            s +
            '="' +
            (o.attributes[s] || '').replace(/"/g, '&quot;') +
            '"';
        return (
          '<' +
          o.tag +
          ' class="' +
          o.classes.join(' ') +
          '"' +
          i +
          '>' +
          o.content +
          '</' +
          o.tag +
          '>'
        );
      }),
      !e.document)
    )
      return e.addEventListener
        ? (r.disableWorkerMessageHandler ||
            e.addEventListener(
              'message',
              function (n) {
                var t = JSON.parse(n.data),
                  a = t.language,
                  o = t.code,
                  l = t.immediateClose;
                e.postMessage(r.highlight(o, r.languages[a], a)),
                  l && e.close();
              },
              !1,
            ),
          r)
        : r;
    var d = r.util.currentScript();
    function p() {
      r.manual || r.highlightAll();
    }
    if (
      (d &&
        ((r.filename = d.src),
        d.hasAttribute('data-manual') && (r.manual = !0)),
      !r.manual)
    ) {
      var g = document.readyState;
      'loading' === g || ('interactive' === g && d && d.defer)
        ? document.addEventListener('DOMContentLoaded', p)
        : window.requestAnimationFrame
        ? window.requestAnimationFrame(p)
        : window.setTimeout(p, 16);
    }
    return r;
  })(
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
      ? self
      : {},
  )),
  At.exports && (At.exports = Ft),
  void 0 !== b && (b.Prism = Ft);
var Ot = jt;
function jt(e) {
  (e.languages.markup = {
    comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
    prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
    doctype: {
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        'internal-subset': {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null,
        },
        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
        punctuation: /^<!|>$|[[\]]/,
        'doctype-tag': /^DOCTYPE/i,
        name: /[^\s<>'"]+/,
      },
    },
    cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
        },
        'special-attr': [],
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
          },
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: { namespace: /^[^\s>\/:]+:/ },
        },
      },
    },
    entity: [
      { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
      /&#x?[\da-f]{1,8};/i,
    ],
  }),
    (e.languages.markup.tag.inside['attr-value'].inside.entity =
      e.languages.markup.entity),
    (e.languages.markup.doctype.inside['internal-subset'].inside =
      e.languages.markup),
    e.hooks.add('wrap', function (e) {
      'entity' === e.type &&
        (e.attributes.title = e.content.value.replace(/&amp;/, '&'));
    }),
    Object.defineProperty(e.languages.markup.tag, 'addInlined', {
      value: function (n, t) {
        var a = {};
        (a['language-' + t] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: e.languages[t],
        }),
          (a.cdata = /^<!\[CDATA\[|\]\]>$/i);
        var r = {
          'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: a },
        };
        r['language-' + t] = { pattern: /[\s\S]+/, inside: e.languages[t] };
        var o = {};
        (o[n] = {
          pattern: RegExp(
            /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              function () {
                return n;
              },
            ),
            'i',
          ),
          lookbehind: !0,
          greedy: !0,
          inside: r,
        }),
          e.languages.insertBefore('markup', 'cdata', o);
      },
    }),
    Object.defineProperty(e.languages.markup.tag, 'addAttribute', {
      value: function (n, t) {
        e.languages.markup.tag.inside['special-attr'].push({
          pattern: RegExp(
            /(^|["'\s])/.source +
              '(?:' +
              n +
              ')' +
              /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            'i',
          ),
          lookbehind: !0,
          inside: {
            'attr-name': /^[^\s=]+/,
            'attr-value': {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [t, 'language-' + t],
                  inside: e.languages[t],
                },
                punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
              },
            },
          },
        });
      },
    }),
    (e.languages.html = e.languages.markup),
    (e.languages.mathml = e.languages.markup),
    (e.languages.svg = e.languages.markup),
    (e.languages.xml = e.languages.extend('markup', {})),
    (e.languages.ssml = e.languages.xml),
    (e.languages.atom = e.languages.xml),
    (e.languages.rss = e.languages.xml);
}
(jt.displayName = 'markup'),
  (jt.aliases = ['html', 'mathml', 'svg', 'xml', 'ssml', 'atom', 'rss']);
var Lt = Pt;
function Pt(e) {
  !(function (e) {
    var n =
      /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    (e.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          'selector-function-argument': {
            pattern:
              /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: 'selector',
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0,
          },
        },
      },
      url: {
        pattern: RegExp(
          '\\burl\\((?:' +
            n.source +
            '|' +
            /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
            ')\\)',
          'i',
        ),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: { pattern: RegExp('^' + n.source + '$'), alias: 'url' },
        },
      },
      selector: {
        pattern: RegExp(
          '(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' +
            n.source +
            ')*(?=\\s*\\{)',
        ),
        lookbehind: !0,
      },
      string: { pattern: n, greedy: !0 },
      property: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0,
      },
      important: /!important\b/i,
      function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
      punctuation: /[(){};:,]/,
    }),
      (e.languages.css.atrule.inside.rest = e.languages.css);
    var t = e.languages.markup;
    t && (t.tag.addInlined('style', 'css'), t.tag.addAttribute('style', 'css'));
  })(e);
}
(Pt.displayName = 'css'), (Pt.aliases = []);
var Mt = Bt;
function Bt(e) {
  e.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0,
      },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0,
    },
    'class-name': {
      pattern:
        /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ },
    },
    keyword:
      /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/,
  };
}
(Bt.displayName = 'clike'), (Bt.aliases = []);
var Tt = It;
function It(e) {
  (e.languages.javascript = e.languages.extend('clike', {
    'class-name': [
      e.languages.clike['class-name'],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
        lookbehind: !0,
      },
    ],
    keyword: [
      { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0,
      },
    ],
    function:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number:
      /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
  })),
    (e.languages.javascript['class-name'][0].pattern =
      /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
    e.languages.insertBefore('javascript', 'keyword', {
      regex: {
        pattern:
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          'regex-source': {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: 'language-regex',
            inside: e.languages.regex,
          },
          'regex-delimiter': /^\/|\/$/,
          'regex-flags': /^[a-z]+$/,
        },
      },
      'function-variable': {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: 'function',
      },
      parameter: [
        {
          pattern:
            /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: e.languages.javascript,
        },
        {
          pattern:
            /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: e.languages.javascript,
        },
        {
          pattern:
            /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: e.languages.javascript,
        },
        {
          pattern:
            /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: e.languages.javascript,
        },
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    e.languages.insertBefore('javascript', 'string', {
      hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
      'template-string': {
        pattern:
          /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
          interpolation: {
            pattern:
              /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              'interpolation-punctuation': {
                pattern: /^\$\{|\}$/,
                alias: 'punctuation',
              },
              rest: e.languages.javascript,
            },
          },
          string: /[\s\S]+/,
        },
      },
    }),
    e.languages.markup &&
      (e.languages.markup.tag.addInlined('script', 'javascript'),
      e.languages.markup.tag.addAttribute(
        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
          .source,
        'javascript',
      )),
    (e.languages.js = e.languages.javascript);
}
(It.displayName = 'javascript'), (It.aliases = ['js']);
var zt,
  Dt,
  $t =
    'object' == typeof globalThis
      ? globalThis
      : 'object' == typeof self
      ? self
      : 'object' == typeof window
      ? window
      : 'object' == typeof b
      ? b
      : {},
  Rt =
    ((Dt = (zt = 'Prism' in $t) ? $t.Prism : void 0),
    function () {
      zt ? ($t.Prism = Dt) : delete $t.Prism, (zt = void 0), (Dt = void 0);
    });
$t.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
var Vt = at,
  Ht = ft,
  qt = Et.exports,
  Ut = Ot,
  Wt = Lt,
  Zt = Mt,
  Gt = Tt;
Rt();
var Kt = {}.hasOwnProperty;
function Yt() {}
Yt.prototype = qt;
var Jt = new Yt(),
  Qt = Jt;
function Xt(e) {
  if ('function' != typeof e || !e.displayName)
    throw new Error('Expected `function` for `grammar`, got `' + e + '`');
  void 0 === Jt.languages[e.displayName] && e(Jt);
}
(Jt.highlight = function (e, n) {
  var t,
    a = qt.highlight;
  if ('string' != typeof e)
    throw new Error('Expected `string` for `value`, got `' + e + '`');
  if ('Object' === Jt.util.type(n)) (t = n), (n = null);
  else {
    if ('string' != typeof n)
      throw new Error('Expected `string` for `name`, got `' + n + '`');
    if (!Kt.call(Jt.languages, n))
      throw new Error('Unknown language: `' + n + '` is not registered');
    t = Jt.languages[n];
  }
  return a.call(this, e, t, n);
}),
  (Jt.register = Xt),
  (Jt.alias = function (e, n) {
    var t,
      a,
      r,
      o,
      l = Jt.languages,
      i = e;
    n && ((i = {})[e] = n);
    for (t in i)
      for (
        a = i[t], r = (a = 'string' == typeof a ? [a] : a).length, o = -1;
        ++o < r;

      )
        l[a[o]] = l[t];
  }),
  (Jt.registered = function (e) {
    if ('string' != typeof e)
      throw new Error('Expected `string` for `language`, got `' + e + '`');
    return Kt.call(Jt.languages, e);
  }),
  (Jt.listLanguages = function () {
    var e,
      n = Jt.languages,
      t = [];
    for (e in n) Kt.call(n, e) && 'object' == typeof n[e] && t.push(e);
    return t;
  }),
  Xt(Ut),
  Xt(Wt),
  Xt(Zt),
  Xt(Gt),
  (Jt.util.encode = function (e) {
    return e;
  }),
  (Jt.Token.stringify = function (e, n, t) {
    var a;
    if ('string' == typeof e) return { type: 'text', value: e };
    if ('Array' === Jt.util.type(e))
      return (function (e, n) {
        var t,
          a = [],
          r = e.length,
          o = -1;
        for (; ++o < r; ) '' !== (t = e[o]) && null != t && a.push(t);
        (o = -1), (r = a.length);
        for (; ++o < r; ) (t = a[o]), (a[o] = Jt.Token.stringify(t, n, a));
        return a;
      })(e, n);
    (a = {
      type: e.type,
      content: Jt.Token.stringify(e.content, n, t),
      tag: 'span',
      classes: ['token', e.type],
      attributes: {},
      language: n,
      parent: t,
    }),
      e.alias && (a.classes = a.classes.concat(e.alias));
    return (
      Jt.hooks.run('wrap', a),
      Vt(
        a.tag + '.' + a.classes.join('.'),
        (function (e) {
          var n;
          for (n in e) e[n] = Ht(e[n]);
          return e;
        })(a.attributes),
        a.content,
      )
    );
  });
var ea,
  na,
  ta =
    ((ea = Qt),
    (na = {}),
    function (e) {
      var n = e.language,
        t = e.children,
        a = e.style,
        r = void 0 === a ? na : a,
        o = e.customStyle,
        l = void 0 === o ? {} : o,
        i = e.codeTagProps,
        s =
          void 0 === i
            ? {
                className: n ? 'language-'.concat(n) : void 0,
                style: Ce(
                  {},
                  r['code[class*="language-"]'],
                  r['code[class*="language-'.concat(n, '"]')],
                ),
              }
            : i,
        c = e.useInlineStyles,
        u = void 0 === c || c,
        d = e.showLineNumbers,
        p = void 0 !== d && d,
        g = e.showInlineLineNumbers,
        f = void 0 === g || g,
        h = e.startingLineNumber,
        b = void 0 === h ? 1 : h,
        v = e.lineNumberContainerStyle,
        y = e.lineNumberStyle,
        w = void 0 === y ? {} : y,
        x = e.wrapLines,
        k = e.wrapLongLines,
        C = void 0 !== k && k,
        S = e.lineProps,
        _ = void 0 === S ? {} : S,
        N = e.renderer,
        A = e.PreTag,
        F = void 0 === A ? 'pre' : A,
        E = e.CodeTag,
        O = void 0 === E ? 'code' : E,
        j = e.code,
        L = void 0 === j ? (Array.isArray(t) ? t[0] : t) : j,
        P = e.astGenerator,
        M = z(e, [
          'language',
          'children',
          'style',
          'customStyle',
          'codeTagProps',
          'useInlineStyles',
          'showLineNumbers',
          'showInlineLineNumbers',
          'startingLineNumber',
          'lineNumberContainerStyle',
          'lineNumberStyle',
          'wrapLines',
          'wrapLongLines',
          'lineProps',
          'renderer',
          'PreTag',
          'CodeTag',
          'code',
          'astGenerator',
        ]);
      P = P || ea;
      var B = p
          ? m.createElement(Oe, {
              containerStyle: v,
              codeStyle: s.style || {},
              numberStyle: w,
              startingLineNumber: b,
              codeString: L,
            })
          : null,
        T = r.hljs ||
          r['pre[class*="language-"]'] || { backgroundColor: '#fff' },
        I = Ie(P) ? 'hljs' : 'prismjs',
        D = u
          ? Object.assign({}, M, { style: Object.assign({}, T, l) })
          : Object.assign({}, M, {
              className: M.className
                ? ''.concat(I, ' ').concat(M.className)
                : I,
              style: Object.assign({}, l),
            });
      if (!P) return m.createElement(F, D, B, m.createElement(O, s, L));
      ((void 0 === x && N) || C) && (x = !0), (N = N || Te);
      var $ = [{ type: 'text', value: L }],
        R = (function (e) {
          var n = e.astGenerator,
            t = e.language,
            a = e.code,
            r = e.defaultCodeValue;
          if (Ie(n)) {
            var o = (function (e, n) {
              return -1 !== e.listLanguages().indexOf(n);
            })(n, t);
            return 'text' === t
              ? { value: r, language: 'text' }
              : o
              ? n.highlight(t, a)
              : n.highlightAuto(a);
          }
          try {
            return t && 'text' !== t
              ? { value: n.highlight(a, t) }
              : { value: r };
          } catch (l) {
            return { value: r };
          }
        })({ astGenerator: P, language: n, code: L, defaultCodeValue: $ });
      null === R.language && (R.value = $);
      var V = Be(R, x, _, p, f, b, R.value.length + b, w, C);
      return (
        (s.style = Ce(
          {},
          s.style,
          C ? { whiteSpace: 'pre-wrap' } : { whiteSpace: 'pre' },
        )),
        m.createElement(
          F,
          D,
          m.createElement(
            O,
            s,
            !f && B,
            N({ rows: V, stylesheet: r, useInlineStyles: u }),
          ),
        )
      );
    });
ta.registerLanguage = function (e, n) {
  return Qt.register(n);
};
var aa = ta,
  ra = oa;
function oa(e) {
  (e.languages.c = e.languages.extend('clike', {
    comment: {
      pattern:
        /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: !0,
    },
    'class-name': {
      pattern:
        /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
      lookbehind: !0,
    },
    keyword:
      /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    number:
      /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
  })),
    e.languages.insertBefore('c', 'string', {
      macro: {
        pattern:
          /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
        lookbehind: !0,
        greedy: !0,
        alias: 'property',
        inside: {
          string: [
            { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
            e.languages.c.string,
          ],
          comment: e.languages.c.comment,
          'macro-name': [
            { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
            {
              pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
              lookbehind: !0,
              alias: 'function',
            },
          ],
          directive: {
            pattern: /^(#\s*)[a-z]+/,
            lookbehind: !0,
            alias: 'keyword',
          },
          'directive-hash': /^#/,
          punctuation: /##|\\(?=[\r\n])/,
          expression: { pattern: /\S[\s\S]*/, inside: e.languages.c },
        },
      },
      constant:
        /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/,
    }),
    delete e.languages.c.boolean;
}
(oa.displayName = 'c'), (oa.aliases = []);
var la = ra,
  ia = ra,
  sa = ca;
function ca(e) {
  var n, t, a;
  e.register(ia),
    (n = e),
    (t =
      /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/),
    (a = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(
      /<keyword>/g,
      function () {
        return t.source;
      },
    )),
    (n.languages.cpp = n.languages.extend('c', {
      'class-name': [
        {
          pattern: RegExp(
            /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
              /<keyword>/g,
              function () {
                return t.source;
              },
            ),
          ),
          lookbehind: !0,
        },
        /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
        /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
        /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
      ],
      keyword: t,
      number: {
        pattern:
          /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
        greedy: !0,
      },
      operator:
        />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
      boolean: /\b(?:true|false)\b/,
    })),
    n.languages.insertBefore('cpp', 'string', {
      module: {
        pattern: RegExp(
          /(\b(?:module|import)\s+)/.source +
            '(?:' +
            /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
            '|' +
            /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(
              /<mod-name>/g,
              function () {
                return a;
              },
            ) +
            ')',
        ),
        lookbehind: !0,
        greedy: !0,
        inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ },
      },
      'raw-string': {
        pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
        alias: 'string',
        greedy: !0,
      },
    }),
    n.languages.insertBefore('cpp', 'keyword', {
      'generic-function': {
        pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
        inside: {
          function: /^\w+/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: 'class-name',
            inside: n.languages.cpp,
          },
        },
      },
    }),
    n.languages.insertBefore('cpp', 'operator', {
      'double-colon': { pattern: /::/, alias: 'punctuation' },
    }),
    n.languages.insertBefore('cpp', 'class-name', {
      'base-clause': {
        pattern:
          /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
        lookbehind: !0,
        greedy: !0,
        inside: n.languages.extend('cpp', {}),
      },
    }),
    n.languages.insertBefore(
      'inside',
      'double-colon',
      { 'class-name': /\b[a-z_]\w*\b(?!\s*::)/i },
      n.languages.cpp['base-clause'],
    );
}
(ca.displayName = 'cpp'), (ca.aliases = []);
var ua = sa,
  da = pa;
function pa(e) {
  var n, t, a, r;
  (n = e),
    (t =
      /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/),
    (a = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source),
    (r = {
      pattern: RegExp(a + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
      lookbehind: !0,
      inside: {
        namespace: {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: { punctuation: /\./ },
        },
        punctuation: /\./,
      },
    }),
    (n.languages.java = n.languages.extend('clike', {
      'class-name': [
        r,
        {
          pattern: RegExp(a + /[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),
          lookbehind: !0,
          inside: r.inside,
        },
      ],
      keyword: t,
      function: [
        n.languages.clike.function,
        { pattern: /(::\s*)[a-z_]\w*/, lookbehind: !0 },
      ],
      number:
        /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
      operator: {
        pattern:
          /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
        lookbehind: !0,
      },
    })),
    n.languages.insertBefore('java', 'string', {
      'triple-quoted-string': {
        pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
        greedy: !0,
        alias: 'string',
      },
    }),
    n.languages.insertBefore('java', 'class-name', {
      annotation: {
        pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
        lookbehind: !0,
        alias: 'punctuation',
      },
      generics: {
        pattern:
          /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
        inside: {
          'class-name': r,
          keyword: t,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/,
        },
      },
      namespace: {
        pattern: RegExp(
          /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(
            /<keyword>/g,
            function () {
              return t.source;
            },
          ),
        ),
        lookbehind: !0,
        inside: { punctuation: /\./ },
      },
    });
}
(pa.displayName = 'java'), (pa.aliases = []);
var ga = da,
  fa = ma;
function ma(e) {
  (e.languages.python = {
    comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
    'string-interpolation': {
      pattern:
        /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
      greedy: !0,
      inside: {
        interpolation: {
          pattern:
            /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
          lookbehind: !0,
          inside: {
            'format-spec': { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 },
            'conversion-option': {
              pattern: /![sra](?=[:}]$)/,
              alias: 'punctuation',
            },
            rest: null,
          },
        },
        string: /[\s\S]+/,
      },
    },
    'triple-quoted-string': {
      pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
      greedy: !0,
      alias: 'string',
    },
    string: {
      pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
      greedy: !0,
    },
    function: {
      pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
      lookbehind: !0,
    },
    'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
    decorator: {
      pattern: /(^[\t ]*)@\w+(?:\.\w+)*/im,
      lookbehind: !0,
      alias: ['annotation', 'punctuation'],
      inside: { punctuation: /\./ },
    },
    keyword:
      /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin:
      /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:True|False|None)\b/,
    number:
      /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?\b/i,
    operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/,
  }),
    (e.languages.python[
      'string-interpolation'
    ].inside.interpolation.inside.rest = e.languages.python),
    (e.languages.py = e.languages.python);
}
(ma.displayName = 'python'), (ma.aliases = ['py']);
var ha = fa,
  ba = {
    'code[class*="language-"]': {
      color: '#c5c8c6',
      textShadow: '0 1px rgba(0, 0, 0, 0.3)',
      fontFamily:
        "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
      direction: 'ltr',
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      lineHeight: '1.5',
      MozTabSize: '4',
      OTabSize: '4',
      tabSize: '4',
      WebkitHyphens: 'none',
      MozHyphens: 'none',
      msHyphens: 'none',
      hyphens: 'none',
    },
    'pre[class*="language-"]': {
      color: '#c5c8c6',
      textShadow: '0 1px rgba(0, 0, 0, 0.3)',
      fontFamily:
        "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
      direction: 'ltr',
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      lineHeight: '1.5',
      MozTabSize: '4',
      OTabSize: '4',
      tabSize: '4',
      WebkitHyphens: 'none',
      MozHyphens: 'none',
      msHyphens: 'none',
      hyphens: 'none',
      padding: '1em',
      margin: '.5em 0',
      overflow: 'auto',
      borderRadius: '0.3em',
      background: '#1d1f21',
    },
    ':not(pre) > code[class*="language-"]': {
      background: '#1d1f21',
      padding: '.1em',
      borderRadius: '.3em',
    },
    comment: { color: '#7C7C7C' },
    prolog: { color: '#7C7C7C' },
    doctype: { color: '#7C7C7C' },
    cdata: { color: '#7C7C7C' },
    punctuation: { color: '#c5c8c6' },
    '.namespace': { Opacity: '.7' },
    property: { color: '#96CBFE' },
    keyword: { color: '#96CBFE' },
    tag: { color: '#96CBFE' },
    'class-name': { color: '#FFFFB6', textDecoration: 'underline' },
    boolean: { color: '#99CC99' },
    constant: { color: '#99CC99' },
    symbol: { color: '#f92672' },
    deleted: { color: '#f92672' },
    number: { color: '#FF73FD' },
    selector: { color: '#A8FF60' },
    'attr-name': { color: '#A8FF60' },
    string: { color: '#A8FF60' },
    char: { color: '#A8FF60' },
    builtin: { color: '#A8FF60' },
    inserted: { color: '#A8FF60' },
    variable: { color: '#C6C5FE' },
    operator: { color: '#EDEDED' },
    entity: { color: '#FFFFB6', cursor: 'help' },
    url: { color: '#96CBFE' },
    '.language-css .token.string': { color: '#87C38A' },
    '.style .token.string': { color: '#87C38A' },
    atrule: { color: '#F9EE98' },
    'attr-value': { color: '#F9EE98' },
    function: { color: '#DAD085' },
    regex: { color: '#E9C062' },
    important: { color: '#fd971f', fontWeight: 'bold' },
    bold: { fontWeight: 'bold' },
    italic: { fontStyle: 'italic' },
  };
function va(e) {
  return u(aa, {
    language: e.codeLang,
    style: ba,
    showLineNumbers: '' != e.code,
    children: e.code,
  });
}
function ya(e) {
  const n = e => e;
  return e.mapCoordinates.length > 0
    ? u(
        $,
        s(i({ saveMapCallback: n }, R.preloadMap(e.mapCoordinates)), {
          readonly: !0,
        }),
      )
    : u(v, {});
}
function wa() {
  const [e, n] = c.exports.useState('Code'),
    [t, a] = c.exports.useState([]),
    [r, o] = c.exports.useState([]),
    [l, i] = c.exports.useState(''),
    [s, d] = c.exports.useState(''),
    [p, f] = c.exports.useState([]),
    m = N();
  c.exports.useEffect(() => {
    new P(M)
      .getCodeRevisions()
      .then(e => {
        a(
          e.sort((e, n) =>
            e.createdAt < n.createdAt ? -1 : e.createdAt > n.createdAt ? 1 : 0,
          ),
        );
      })
      .catch(e => {
        e instanceof L && y.error(e.message);
      });
    new B(M)
      .getMapRevisions()
      .then(e => {
        o(e.reverse());
      })
      .catch(e => {
        e instanceof L && y.error(e.message);
      });
  }, []);
  return g(V, {
    className: xe.historyMain,
    children: [
      u('div', {
        className: xe.buttonContainer,
        children: u('div', {
          className: xe.codeMapButton,
          children: g(W, {
            children: [
              u(w, {
                className: 'Code' == e ? xe.largeButton : xe.smallButton,
                onClick: () => {
                  n('Code');
                },
                children: 'Code',
              }),
              u(w, {
                className: 'Map' == e ? xe.largeButton : xe.smallButton,
                onClick: () => {
                  n('Map');
                },
                children: 'Map',
              }),
            ],
          }),
        }),
      }),
      g(H, {
        className: xe.viewContainer,
        children: [
          g(q, {
            lg: '3',
            children: [
              u('div', {}),
              u('div', {
                className: xe.completeTimeline,
                children:
                  r && t
                    ? u(ke, {
                        commitID: e => {
                          t.forEach(n => {
                            n.id == e &&
                              (i(n.code), d(n.language.toLowerCase()));
                          }),
                            r.forEach(n => {
                              n.id == e && f(JSON.parse(n.map));
                            });
                        },
                        commitHistoryDetails: 'Code' === e ? t : r,
                        BigButton: e,
                      })
                    : u('h1', {
                        className: xe.noCommitDataHeader,
                        children: 'Loading...',
                      }),
              }),
              u('div', {}),
            ],
          }),
          g(q, {
            lg: '9',
            className: xe.codeView,
            children: [
              u('div', {
                className: 'Code' == e ? xe.codeBox : xe.mapBox,
                children:
                  'Code' == e
                    ? u(va, { code: l, codeLang: s })
                    : u(ya, { mapCoordinates: p }),
              }),
              u('div', {
                className: xe.select,
                children: u(w, {
                  className: xe.selectButton,
                  variant: 'primary',
                  size: 'lg',
                  onClick: () => {
                    'Code' == e && '' != l
                      ? m(T(l))
                      : 'Map' == e && p != [] && m(I(p));
                  },
                  children: 'Select',
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
aa.registerLanguage('c', la),
  aa.registerLanguage('cpp', ua),
  aa.registerLanguage('python', ha),
  aa.registerLanguage('java', ga);
export { wa as default };
