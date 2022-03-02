var e = Object.defineProperty,
  r = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  t = Object.prototype.propertyIsEnumerable,
  n = (r, o, a) =>
    o in r
      ? e(r, o, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (r[o] = a),
  l = (e, r) => {
    for (var o in r || (r = {})) s.call(r, o) && n(e, o, r[o]);
    if (a) for (var o of a(r)) t.call(r, o) && n(e, o, r[o]);
    return e;
  },
  i = (e, a) => r(e, o(a)),
  c = (e, r) => {
    var o = {};
    for (var n in e) s.call(e, n) && r.indexOf(n) < 0 && (o[n] = e[n]);
    if (null != e && a)
      for (var n of a(e)) r.indexOf(n) < 0 && t.call(e, n) && (o[n] = e[n]);
    return o;
  };
import { u as d, c as u, a as m } from './ThemeProvider.869a7bec.js';
import {
  d as f,
  u as p,
  r as b,
  F as g,
  e as y,
  c as N,
  o as v,
  f as x,
} from './Fade.6981a97a.js';
import { u as h, s as w } from './scrollbarSize.a78508fb.js';
import { b as E } from './hasClass.105c66bc.js';
import { r as O, j as F } from './vendor.81f97c66.js';
import {
  A as k,
  M as P,
  B as j,
  g as C,
} from './AbstractModalHeader.205d102b.js';
import { c as R } from './createWithBsPrefix.439c8819.js';
import { d as D } from './divWithClassName.7695ab43.js';
var T = R('modal-body');
const $ = O.exports.forwardRef((e, r) => {
  var o = e,
    {
      bsPrefix: a,
      className: s,
      contentClassName: t,
      centered: n,
      size: m,
      fullscreen: f,
      children: p,
      scrollable: b,
    } = o,
    g = c(o, [
      'bsPrefix',
      'className',
      'contentClassName',
      'centered',
      'size',
      'fullscreen',
      'children',
      'scrollable',
    ]);
  const y = `${(a = d(a, 'modal'))}-dialog`,
    N = 'string' == typeof f ? `${a}-fullscreen-${f}` : `${a}-fullscreen`;
  return F(
    'div',
    i(l({}, g), {
      ref: r,
      className: u(
        y,
        s,
        m && `${a}-${m}`,
        n && `${y}-centered`,
        b && `${y}-scrollable`,
        f && N,
      ),
      children: F('div', { className: u(`${a}-content`, t), children: p }),
    }),
  );
});
$.displayName = 'ModalDialog';
var A = $,
  S = R('modal-footer');
const H = O.exports.forwardRef((e, r) => {
  var o = e,
    { bsPrefix: a, className: s } = o,
    t = c(o, ['bsPrefix', 'className']);
  return (
    (a = d(a, 'modal-header')),
    F(k, i(l({ ref: r }, t), { className: u(s, a) }))
  );
});
(H.displayName = 'ModalHeader'),
  (H.defaultProps = { closeLabel: 'Close', closeButton: !1 });
var M = H;
var I = R('modal-title', { Component: D('h4') });
const z = {
  show: !1,
  backdrop: !0,
  keyboard: !0,
  autoFocus: !0,
  enforceFocus: !0,
  restoreFocus: !0,
  animation: !0,
  dialogAs: A,
};
function B(e) {
  return F(g, i(l({}, e), { timeout: null }));
}
function K(e) {
  return F(g, i(l({}, e), { timeout: null }));
}
const L = O.exports.forwardRef((e, r) => {
  var o = e,
    {
      bsPrefix: a,
      className: s,
      style: t,
      dialogClassName: n,
      contentClassName: g,
      children: k,
      dialogAs: R,
      'aria-labelledby': D,
      show: T,
      animation: $,
      backdrop: A,
      keyboard: S,
      onEscapeKeyDown: H,
      onShow: M,
      onHide: I,
      container: z,
      autoFocus: L,
      enforceFocus: U,
      restoreFocus: W,
      restoreFocusOptions: _,
      onEntered: q,
      onExit: G,
      onExiting: J,
      onEnter: Q,
      onEntering: V,
      onExited: X,
      backdropClassName: Y,
      manager: Z,
    } = o,
    ee = c(o, [
      'bsPrefix',
      'className',
      'style',
      'dialogClassName',
      'contentClassName',
      'children',
      'dialogAs',
      'aria-labelledby',
      'show',
      'animation',
      'backdrop',
      'keyboard',
      'onEscapeKeyDown',
      'onShow',
      'onHide',
      'container',
      'autoFocus',
      'enforceFocus',
      'restoreFocus',
      'restoreFocusOptions',
      'onEntered',
      'onExit',
      'onExiting',
      'onEnter',
      'onEntering',
      'onExited',
      'backdropClassName',
      'manager',
    ]);
  const [re, oe] = O.exports.useState({}),
    [ae, se] = O.exports.useState(!1),
    te = O.exports.useRef(!1),
    ne = O.exports.useRef(!1),
    le = O.exports.useRef(null),
    [ie, ce] = h(),
    de = f(r, ce),
    ue = p(I),
    me = m();
  a = d(a, 'modal');
  const fe = O.exports.useMemo(() => ({ onHide: ue }), [ue]);
  function pe() {
    return Z || C({ isRTL: me });
  }
  function be(e) {
    if (!N) return;
    const r = pe().getScrollbarWidth() > 0,
      o = e.scrollHeight > v(e).documentElement.clientHeight;
    oe({
      paddingRight: r && !o ? w() : void 0,
      paddingLeft: !r && o ? w() : void 0,
    });
  }
  const ge = p(() => {
    ie && be(ie.dialog);
  });
  E(() => {
    b(window, 'resize', ge), null == le.current || le.current();
  });
  const ye = () => {
      te.current = !0;
    },
    Ne = e => {
      te.current && ie && e.target === ie.dialog && (ne.current = !0),
        (te.current = !1);
    },
    ve = () => {
      se(!0),
        (le.current = x(ie.dialog, () => {
          se(!1);
        }));
    },
    xe = e => {
      'static' !== A
        ? ne.current || e.target !== e.currentTarget
          ? (ne.current = !1)
          : null == I || I()
        : (e => {
            e.target === e.currentTarget && ve();
          })(e);
    },
    he = O.exports.useCallback(
      e =>
        F(
          'div',
          i(l({}, e), { className: u(`${a}-backdrop`, Y, !$ && 'show') }),
        ),
      [$, Y, a],
    ),
    we = l(l({}, t), re);
  $ || (we.display = 'block');
  return F(P.Provider, {
    value: fe,
    children: F(j, {
      show: T,
      ref: de,
      backdrop: A,
      container: z,
      keyboard: !0,
      autoFocus: L,
      enforceFocus: U,
      restoreFocus: W,
      restoreFocusOptions: _,
      onEscapeKeyDown: e => {
        S || 'static' !== A ? S && H && H(e) : (e.preventDefault(), ve());
      },
      onShow: M,
      onHide: I,
      onEnter: (e, r) => {
        e && ((e.style.display = 'block'), be(e)), null == Q || Q(e, r);
      },
      onEntering: (e, r) => {
        null == V || V(e, r), y(window, 'resize', ge);
      },
      onEntered: q,
      onExit: e => {
        null == le.current || le.current(), null == G || G(e);
      },
      onExiting: J,
      onExited: e => {
        e && (e.style.display = ''), null == X || X(e), b(window, 'resize', ge);
      },
      manager: pe(),
      transition: $ ? B : void 0,
      backdropTransition: $ ? K : void 0,
      renderBackdrop: he,
      renderDialog: e =>
        F(
          'div',
          i(l({ role: 'dialog' }, e), {
            style: we,
            className: u(s, a, ae && `${a}-static`),
            onClick: A ? xe : void 0,
            onMouseUp: Ne,
            'aria-labelledby': D,
            children: F(
              R,
              i(l({}, ee), {
                onMouseDown: ye,
                className: n,
                contentClassName: g,
                children: k,
              }),
            ),
          }),
        ),
    }),
  });
});
(L.displayName = 'Modal'), (L.defaultProps = z);
var U = Object.assign(L, {
  Body: T,
  Header: M,
  Title: I,
  Footer: S,
  Dialog: A,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150,
});
export { U as M };
