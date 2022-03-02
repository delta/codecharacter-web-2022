var t = Object.defineProperty,
  e = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  a = (e, n, r) =>
    n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r),
  s = (t, e) => {
    for (var n in e || (e = {})) o.call(e, n) && a(t, n, e[n]);
    if (r) for (var n of r(e)) i.call(e, n) && a(t, n, e[n]);
    return t;
  },
  u = (t, r) => e(t, n(r)),
  c = (t, e) => {
    var n = {};
    for (var a in t) o.call(t, a) && e.indexOf(a) < 0 && (n[a] = t[a]);
    if (null != t && r)
      for (var a of r(t)) e.indexOf(a) < 0 && i.call(t, a) && (n[a] = t[a]);
    return n;
  };
import { R as l, o as p, _ as d, r as f, j as E } from './vendor.81f97c66.js';
import { c as x } from './ThemeProvider.869a7bec.js';
function h(t, e) {
  return (h =
    Object.setPrototypeOf ||
    function (t, e) {
      return (t.__proto__ = e), t;
    })(t, e);
}
function m(t) {
  return (t && t.ownerDocument) || document;
}
function v(t, e) {
  return (function (t) {
    var e = m(t);
    return (e && e.defaultView) || window;
  })(t).getComputedStyle(t, e);
}
var b = /([A-Z])/g;
var g = /^ms-/;
function y(t) {
  return (function (t) {
    return t.replace(b, '-$1').toLowerCase();
  })(t).replace(g, '-ms-');
}
var C =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function O(t, e) {
  var n = '',
    r = '';
  if ('string' == typeof e)
    return t.style.getPropertyValue(y(e)) || v(t).getPropertyValue(y(e));
  Object.keys(e).forEach(function (o) {
    var i = e[o];
    i || 0 === i
      ? !(function (t) {
          return !(!t || !C.test(t));
        })(o)
        ? (n += y(o) + ': ' + i + ';')
        : (r += o + '(' + i + ') ')
      : t.style.removeProperty(y(o));
  }),
    r && (n += 'transform: ' + r + ';'),
    (t.style.cssText += ';' + n);
}
var k = !1,
  S = l.createContext(null),
  w = 'entering',
  N = 'entered',
  T = 'exiting',
  L = (function (t) {
    var e, n;
    function r(e, n) {
      var r;
      r = t.call(this, e, n) || this;
      var o,
        i = n && !n.isMounting ? e.enter : e.appear;
      return (
        (r.appearStatus = null),
        e.in
          ? i
            ? ((o = 'exited'), (r.appearStatus = 'entering'))
            : (o = 'entered')
          : (o = e.unmountOnExit || e.mountOnEnter ? 'unmounted' : 'exited'),
        (r.state = { status: o }),
        (r.nextCallback = null),
        r
      );
    }
    (n = t),
      ((e = r).prototype = Object.create(n.prototype)),
      (e.prototype.constructor = e),
      h(e, n),
      (r.getDerivedStateFromProps = function (t, e) {
        return t.in && 'unmounted' === e.status ? { status: 'exited' } : null;
      });
    var o = r.prototype;
    return (
      (o.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (o.componentDidUpdate = function (t) {
        var e = null;
        if (t !== this.props) {
          var n = this.state.status;
          this.props.in
            ? 'entering' !== n && 'entered' !== n && (e = 'entering')
            : ('entering' !== n && 'entered' !== n) || (e = 'exiting');
        }
        this.updateStatus(!1, e);
      }),
      (o.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (o.getTimeouts = function () {
        var t,
          e,
          n,
          r = this.props.timeout;
        return (
          (t = e = n = r),
          null != r &&
            'number' != typeof r &&
            ((t = r.exit),
            (e = r.enter),
            (n = void 0 !== r.appear ? r.appear : e)),
          { exit: t, enter: e, appear: n }
        );
      }),
      (o.updateStatus = function (t, e) {
        void 0 === t && (t = !1),
          null !== e
            ? (this.cancelNextCallback(),
              'entering' === e ? this.performEnter(t) : this.performExit())
            : this.props.unmountOnExit &&
              'exited' === this.state.status &&
              this.setState({ status: 'unmounted' });
      }),
      (o.performEnter = function (t) {
        var e = this,
          n = this.props.enter,
          r = this.context ? this.context.isMounting : t,
          o = this.props.nodeRef ? [r] : [p.findDOMNode(this), r],
          i = o[0],
          a = o[1],
          s = this.getTimeouts(),
          u = r ? s.appear : s.enter;
        (!t && !n) || k
          ? this.safeSetState({ status: 'entered' }, function () {
              e.props.onEntered(i);
            })
          : (this.props.onEnter(i, a),
            this.safeSetState({ status: 'entering' }, function () {
              e.props.onEntering(i, a),
                e.onTransitionEnd(u, function () {
                  e.safeSetState({ status: 'entered' }, function () {
                    e.props.onEntered(i, a);
                  });
                });
            }));
      }),
      (o.performExit = function () {
        var t = this,
          e = this.props.exit,
          n = this.getTimeouts(),
          r = this.props.nodeRef ? void 0 : p.findDOMNode(this);
        e && !k
          ? (this.props.onExit(r),
            this.safeSetState({ status: 'exiting' }, function () {
              t.props.onExiting(r),
                t.onTransitionEnd(n.exit, function () {
                  t.safeSetState({ status: 'exited' }, function () {
                    t.props.onExited(r);
                  });
                });
            }))
          : this.safeSetState({ status: 'exited' }, function () {
              t.props.onExited(r);
            });
      }),
      (o.cancelNextCallback = function () {
        null !== this.nextCallback &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (o.safeSetState = function (t, e) {
        (e = this.setNextCallback(e)), this.setState(t, e);
      }),
      (o.setNextCallback = function (t) {
        var e = this,
          n = !0;
        return (
          (this.nextCallback = function (r) {
            n && ((n = !1), (e.nextCallback = null), t(r));
          }),
          (this.nextCallback.cancel = function () {
            n = !1;
          }),
          this.nextCallback
        );
      }),
      (o.onTransitionEnd = function (t, e) {
        this.setNextCallback(e);
        var n = this.props.nodeRef
            ? this.props.nodeRef.current
            : p.findDOMNode(this),
          r = null == t && !this.props.addEndListener;
        if (n && !r) {
          if (this.props.addEndListener) {
            var o = this.props.nodeRef
                ? [this.nextCallback]
                : [n, this.nextCallback],
              i = o[0],
              a = o[1];
            this.props.addEndListener(i, a);
          }
          null != t && setTimeout(this.nextCallback, t);
        } else setTimeout(this.nextCallback, 0);
      }),
      (o.render = function () {
        var t = this.state.status;
        if ('unmounted' === t) return null;
        var e = this.props,
          n = e.children;
        e.in,
          e.mountOnEnter,
          e.unmountOnExit,
          e.appear,
          e.enter,
          e.exit,
          e.timeout,
          e.addEndListener,
          e.onEnter,
          e.onEntering,
          e.onEntered,
          e.onExit,
          e.onExiting,
          e.onExited,
          e.nodeRef;
        var r = d(e, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return l.createElement(
          S.Provider,
          { value: null },
          'function' == typeof n
            ? n(t, r)
            : l.cloneElement(l.Children.only(n), r),
        );
      }),
      r
    );
  })(l.Component);
function R() {}
(L.contextType = S),
  (L.propTypes = {}),
  (L.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: R,
    onEntering: R,
    onEntered: R,
    onExit: R,
    onExiting: R,
    onExited: R,
  }),
  (L.UNMOUNTED = 'unmounted'),
  (L.EXITED = 'exited'),
  (L.ENTERING = 'entering'),
  (L.ENTERED = 'entered'),
  (L.EXITING = 'exiting');
var D = !(
    'undefined' == typeof window ||
    !window.document ||
    !window.document.createElement
  ),
  P = !1,
  _ = !1;
try {
  var j = {
    get passive() {
      return (P = !0);
    },
    get once() {
      return (_ = P = !0);
    },
  };
  D &&
    (window.addEventListener('test', j, j),
    window.removeEventListener('test', j, !0));
} catch (B) {}
function M(t, e, n, r) {
  if (r && 'boolean' != typeof r && !_) {
    var o = r.once,
      i = r.capture,
      a = n;
    !_ &&
      o &&
      ((a =
        n.__once ||
        function t(r) {
          this.removeEventListener(e, t, i), n.call(this, r);
        }),
      (n.__once = a)),
      t.addEventListener(e, a, P ? r : i);
  }
  t.addEventListener(e, n, r);
}
function F(t, e, n, r) {
  var o = r && 'boolean' != typeof r ? r.capture : r;
  t.removeEventListener(e, n, o),
    n.__once && t.removeEventListener(e, n.__once, o);
}
function I(t, e, n, r) {
  return (
    M(t, e, n, r),
    function () {
      F(t, e, n, r);
    }
  );
}
function U(t, e, n) {
  void 0 === n && (n = 5);
  var r = !1,
    o = setTimeout(function () {
      r ||
        (function (t, e, n, r) {
          if ((void 0 === n && (n = !1), void 0 === r && (r = !0), t)) {
            var o = document.createEvent('HTMLEvents');
            o.initEvent(e, n, r), t.dispatchEvent(o);
          }
        })(t, 'transitionend', !0);
    }, e + n),
    i = I(
      t,
      'transitionend',
      function () {
        r = !0;
      },
      { once: !0 },
    );
  return function () {
    clearTimeout(o), i();
  };
}
function X(t, e, n, r) {
  var o, i;
  null == n &&
    ((o = O(t, 'transitionDuration') || ''),
    (i = -1 === o.indexOf('ms') ? 1e3 : 1),
    (n = parseFloat(o) * i || 0));
  var a = U(t, n, r),
    s = I(t, 'transitionend', e);
  return function () {
    a(), s();
  };
}
function V(t, e) {
  const n = O(t, e) || '',
    r = -1 === n.indexOf('ms') ? 1e3 : 1;
  return parseFloat(n) * r;
}
function G(t, e) {
  const n = V(t, 'transitionDuration'),
    r = V(t, 'transitionDelay'),
    o = X(
      t,
      n => {
        n.target === t && (o(), e(n));
      },
      n + r,
    );
}
var H = function (t) {
  return t && 'function' != typeof t
    ? function (e) {
        t.current = e;
      }
    : t;
};
function Y(t, e) {
  return f.exports.useMemo(
    function () {
      return (function (t, e) {
        var n = H(t),
          r = H(e);
        return function (t) {
          n && n(t), r && r(t);
        };
      })(t, e);
    },
    [t, e],
  );
}
function Z(t) {
  return t && 'setState' in t ? p.findDOMNode(t) : null != t ? t : null;
}
var $ = l.forwardRef((t, e) => {
  var n = t,
    {
      onEnter: r,
      onEntering: o,
      onEntered: i,
      onExit: a,
      onExiting: p,
      onExited: d,
      addEndListener: x,
      children: h,
      childRef: m,
    } = n,
    v = c(n, [
      'onEnter',
      'onEntering',
      'onEntered',
      'onExit',
      'onExiting',
      'onExited',
      'addEndListener',
      'children',
      'childRef',
    ]);
  const b = f.exports.useRef(null),
    g = Y(b, m),
    y = t => {
      g(Z(t));
    },
    C = t => e => {
      t && b.current && t(b.current, e);
    },
    O = f.exports.useCallback(C(r), [r]),
    k = f.exports.useCallback(C(o), [o]),
    S = f.exports.useCallback(C(i), [i]),
    w = f.exports.useCallback(C(a), [a]),
    N = f.exports.useCallback(C(p), [p]),
    T = f.exports.useCallback(C(d), [d]),
    R = f.exports.useCallback(C(x), [x]);
  return E(
    L,
    u(s({ ref: e }, v), {
      onEnter: O,
      onEntered: S,
      onEntering: k,
      onExit: w,
      onExited: T,
      onExiting: N,
      addEndListener: R,
      nodeRef: b,
      children:
        'function' == typeof h
          ? (t, e) => h(t, u(s({}, e), { ref: y }))
          : l.cloneElement(h, { ref: y }),
    }),
  );
});
function A(t) {
  var e = (function (t) {
    var e = f.exports.useRef(t);
    return (
      f.exports.useEffect(
        function () {
          e.current = t;
        },
        [t],
      ),
      e
    );
  })(t);
  return f.exports.useCallback(
    function () {
      return e.current && e.current.apply(e, arguments);
    },
    [e],
  );
}
const W = { entering: 'show', entered: 'show' },
  q = f.exports.forwardRef((t, e) => {
    var n = t,
      { className: r, children: o, transitionClasses: i = {} } = n,
      a = c(n, ['className', 'children', 'transitionClasses']);
    const l = f.exports.useCallback(
      (t, e) => {
        !(function (t) {
          t.offsetHeight;
        })(t),
          null == a.onEnter || a.onEnter(t, e);
      },
      [a],
    );
    return E(
      $,
      u(s({ ref: e, addEndListener: G }, a), {
        onEnter: l,
        childRef: o.ref,
        children: (t, e) =>
          f.exports.cloneElement(
            o,
            u(s({}, e), {
              className: x('fade', r, o.props.className, W[t], i[t]),
            }),
          ),
      }),
    );
  });
(q.defaultProps = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
}),
  (q.displayName = 'Fade');
var z = q;
export {
  w as E,
  z as F,
  $ as T,
  h as _,
  T as a,
  N as b,
  D as c,
  Y as d,
  M as e,
  X as f,
  Z as g,
  I as l,
  m as o,
  F as r,
  O as s,
  G as t,
  A as u,
};
