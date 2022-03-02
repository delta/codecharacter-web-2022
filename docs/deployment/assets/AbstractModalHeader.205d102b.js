var e = Object.defineProperty,
  t = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  a = (t, r, o) =>
    r in t
      ? e(t, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[r] = o);
import { o as i, s as l, c, u as d, l as u } from './Fade.6981a97a.js';
import {
  u as h,
  a as f,
  c as p,
  b as m,
  d as g,
  h as b,
} from './hasClass.105c66bc.js';
import { r as v, j as y, F as x, o as E, e as w } from './vendor.81f97c66.js';
import { C as O } from './CloseButton.0522e079.js';
var k = Function.prototype.bind.call(Function.prototype.call, [].slice);
function C(e, t) {
  return k(e.querySelectorAll(t));
}
function R(e) {
  void 0 === e && (e = i());
  try {
    var t = e.activeElement;
    return t && t.nodeName ? t : null;
  } catch (r) {
    return e.body;
  }
}
const j = `data-rr-ui-${'modal-open'}`;
class L {
  constructor({
    ownerDocument: e,
    handleContainerOverflow: t = !0,
    isRTL: r = !1,
  } = {}) {
    (this.handleContainerOverflow = t),
      (this.isRTL = r),
      (this.modals = []),
      (this.ownerDocument = e);
  }
  getScrollbarWidth() {
    return (function (e = document) {
      const t = e.defaultView;
      return Math.abs(t.innerWidth - e.documentElement.clientWidth);
    })(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(e) {}
  removeModalAttributes(e) {}
  setContainerStyle(e) {
    const t = { overflow: 'hidden' },
      r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      o = this.getElement();
    (e.style = { overflow: o.style.overflow, [r]: o.style[r] }),
      e.scrollBarWidth &&
        (t[r] = `${parseInt(l(o, r) || '0', 10) + e.scrollBarWidth}px`),
      o.setAttribute(j, ''),
      l(o, t);
  }
  reset() {
    [...this.modals].forEach(e => this.remove(e));
  }
  removeContainerStyle(e) {
    const t = this.getElement();
    t.removeAttribute(j), Object.assign(t.style, e.style);
  }
  add(e) {
    let t = this.modals.indexOf(e);
    return -1 !== t
      ? t
      : ((t = this.modals.length),
        this.modals.push(e),
        this.setModalAttributes(e),
        0 !== t ||
          ((this.state = {
            scrollBarWidth: this.getScrollbarWidth(),
            style: {},
          }),
          this.handleContainerOverflow && this.setContainerStyle(this.state)),
        t);
  }
  remove(e) {
    const t = this.modals.indexOf(e);
    -1 !== t &&
      (this.modals.splice(t, 1),
      !this.modals.length &&
        this.handleContainerOverflow &&
        this.removeContainerStyle(this.state),
      this.removeModalAttributes(e));
  }
  isTopModal(e) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === e;
  }
}
const S = [
  'show',
  'role',
  'className',
  'style',
  'children',
  'backdrop',
  'keyboard',
  'onBackdropClick',
  'onEscapeKeyDown',
  'transition',
  'backdropTransition',
  'autoFocus',
  'enforceFocus',
  'restoreFocus',
  'restoreFocusOptions',
  'renderDialog',
  'renderBackdrop',
  'manager',
  'container',
  'onShow',
  'onHide',
  'onExit',
  'onExited',
  'onExiting',
  'onEnter',
  'onEntering',
  'onEntered',
];
let B;
function T(e) {
  const t = g(),
    r =
      e ||
      (function (e) {
        return (
          B || (B = new L({ ownerDocument: null == e ? void 0 : e.document })),
          B
        );
      })(t),
    o = v.exports.useRef({ dialog: null, backdrop: null });
  return Object.assign(o.current, {
    add: () => r.add(o.current),
    remove: () => r.remove(o.current),
    isTopModal: () => r.isTopModal(o.current),
    setDialogRef: v.exports.useCallback(e => {
      o.current.dialog = e;
    }, []),
    setBackdropRef: v.exports.useCallback(e => {
      o.current.backdrop = e;
    }, []),
  });
}
const N = v.exports.forwardRef((e, t) => {
  let {
      show: r = !1,
      role: o = 'dialog',
      className: s,
      style: n,
      children: a,
      backdrop: i = !0,
      keyboard: l = !0,
      onBackdropClick: g,
      onEscapeKeyDown: b,
      transition: O,
      backdropTransition: k,
      autoFocus: C = !0,
      enforceFocus: j = !0,
      restoreFocus: L = !0,
      restoreFocusOptions: B,
      renderDialog: N,
      renderBackdrop: A = e => y('div', Object.assign({}, e)),
      manager: F,
      container: M,
      onShow: D,
      onHide: W = () => {},
      onExit: P,
      onExited: H,
      onExiting: $,
      onEnter: V,
      onEntering: I,
      onEntered: K,
    } = e,
    q = (function (e, t) {
      if (null == e) return {};
      var r,
        o,
        s = {},
        n = Object.keys(e);
      for (o = 0; o < n.length; o++)
        (r = n[o]), t.indexOf(r) >= 0 || (s[r] = e[r]);
      return s;
    })(e, S);
  const z = h(M),
    G = T(F),
    J = f(),
    Q = (function (e) {
      var t = v.exports.useRef(null);
      return (
        v.exports.useEffect(function () {
          t.current = e;
        }),
        t.current
      );
    })(r),
    [U, X] = v.exports.useState(!r),
    Y = v.exports.useRef(null);
  v.exports.useImperativeHandle(t, () => G, [G]),
    c && !Q && r && (Y.current = R()),
    O || r || U ? r && U && X(!1) : X(!0);
  const Z = d(() => {
      if (
        (G.add(),
        (se.current = u(document, 'keydown', re)),
        (oe.current = u(document, 'focus', () => setTimeout(ee), !0)),
        D && D(),
        C)
      ) {
        const e = R(document);
        G.dialog && e && !p(G.dialog, e) && ((Y.current = e), G.dialog.focus());
      }
    }),
    _ = d(() => {
      var e;
      (G.remove(),
      null == se.current || se.current(),
      null == oe.current || oe.current(),
      L) &&
        (null == (e = Y.current) || null == e.focus || e.focus(B),
        (Y.current = null));
    });
  v.exports.useEffect(() => {
    r && z && Z();
  }, [r, z, Z]),
    v.exports.useEffect(() => {
      U && _();
    }, [U, _]),
    m(() => {
      _();
    });
  const ee = d(() => {
      if (!j || !J() || !G.isTopModal()) return;
      const e = R();
      G.dialog && e && !p(G.dialog, e) && G.dialog.focus();
    }),
    te = d(e => {
      e.target === e.currentTarget && (null == g || g(e), !0 === i && W());
    }),
    re = d(e => {
      l &&
        27 === e.keyCode &&
        G.isTopModal() &&
        (null == b || b(e), e.defaultPrevented || W());
    }),
    oe = v.exports.useRef(),
    se = v.exports.useRef(),
    ne = (...e) => {
      X(!0), null == H || H(...e);
    },
    ae = O;
  if (!z || !(r || (ae && !U))) return null;
  const ie = Object.assign(
    { role: o, ref: G.setDialogRef, 'aria-modal': 'dialog' === o || void 0 },
    q,
    { style: n, className: s, tabIndex: -1 },
  );
  let le = N
    ? N(ie)
    : y(
        'div',
        Object.assign({}, ie, {
          children: v.exports.cloneElement(a, { role: 'document' }),
        }),
      );
  ae &&
    (le = y(ae, {
      appear: !0,
      unmountOnExit: !0,
      in: !!r,
      onExit: P,
      onExiting: $,
      onExited: ne,
      onEnter: V,
      onEntering: I,
      onEntered: K,
      children: le,
    }));
  let ce = null;
  if (i) {
    const e = k;
    (ce = A({ ref: G.setBackdropRef, onClick: te })),
      e && (ce = y(e, { appear: !0, in: !!r, children: ce }));
  }
  return y(x, { children: E.createPortal(w(x, { children: [ce, le] }), z) });
});
N.displayName = 'Modal';
var A = Object.assign(N, { Manager: L });
function F(e, t) {
  return e
    .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '');
}
const M = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  D = '.sticky-top',
  W = '.navbar-toggler';
class P extends L {
  adjustAndStore(e, t, r) {
    const o = t.style[e];
    (t.dataset[e] = o), l(t, { [e]: `${parseFloat(l(t, e)) + r}px` });
  }
  restore(e, t) {
    const r = t.dataset[e];
    void 0 !== r && (delete t.dataset[e], l(t, { [e]: r }));
  }
  setContainerStyle(e) {
    super.setContainerStyle(e);
    const t = this.getElement();
    var r, o;
    if (
      ((o = 'modal-open'),
      (r = t).classList
        ? r.classList.add(o)
        : b(r, o) ||
          ('string' == typeof r.className
            ? (r.className = r.className + ' ' + o)
            : r.setAttribute(
                'class',
                ((r.className && r.className.baseVal) || '') + ' ' + o,
              )),
      !e.scrollBarWidth)
    )
      return;
    const s = this.isRTL ? 'paddingLeft' : 'paddingRight',
      n = this.isRTL ? 'marginLeft' : 'marginRight';
    C(t, M).forEach(t => this.adjustAndStore(s, t, e.scrollBarWidth)),
      C(t, D).forEach(t => this.adjustAndStore(n, t, -e.scrollBarWidth)),
      C(t, W).forEach(t => this.adjustAndStore(n, t, e.scrollBarWidth));
  }
  removeContainerStyle(e) {
    super.removeContainerStyle(e);
    const t = this.getElement();
    var r, o;
    (o = 'modal-open'),
      (r = t).classList
        ? r.classList.remove(o)
        : 'string' == typeof r.className
        ? (r.className = F(r.className, o))
        : r.setAttribute(
            'class',
            F((r.className && r.className.baseVal) || '', o),
          );
    const s = this.isRTL ? 'paddingLeft' : 'paddingRight',
      n = this.isRTL ? 'marginLeft' : 'marginRight';
    C(t, M).forEach(e => this.restore(s, e)),
      C(t, D).forEach(e => this.restore(n, e)),
      C(t, W).forEach(e => this.restore(n, e));
  }
}
let H;
function $(e) {
  return H || (H = new P(e)), H;
}
var V = v.exports.createContext({ onHide() {} });
const I = v.exports.forwardRef((e, i) => {
  var l = e,
    {
      closeLabel: c,
      closeVariant: u,
      closeButton: h,
      onHide: f,
      children: p,
    } = l,
    m = ((e, t) => {
      var r = {};
      for (var a in e) s.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
      if (null != e && o)
        for (var a of o(e)) t.indexOf(a) < 0 && n.call(e, a) && (r[a] = e[a]);
      return r;
    })(l, ['closeLabel', 'closeVariant', 'closeButton', 'onHide', 'children']);
  const g = v.exports.useContext(V),
    b = d(() => {
      null == g || g.onHide(), null == f || f();
    });
  return w(
    'div',
    ((x = ((e, t) => {
      for (var r in t || (t = {})) s.call(t, r) && a(e, r, t[r]);
      if (o) for (var r of o(t)) n.call(t, r) && a(e, r, t[r]);
      return e;
    })({ ref: i }, m)),
    t(
      x,
      r({
        children: [p, h && y(O, { 'aria-label': c, variant: u, onClick: b })],
      }),
    )),
  );
  var x;
});
I.defaultProps = { closeLabel: 'Close', closeButton: !1 };
var K = I;
export { K as A, A as B, V as M, P as a, $ as g };
