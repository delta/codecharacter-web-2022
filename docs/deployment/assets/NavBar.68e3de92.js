var e = Object.defineProperty,
  a = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  t = (a, s, r) =>
    s in a
      ? e(a, s, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (a[s] = r),
  l = (e, a) => {
    for (var s in a || (a = {})) o.call(a, s) && t(e, s, a[s]);
    if (r) for (var s of r(a)) n.call(a, s) && t(e, s, a[s]);
    return e;
  },
  i = (e, r) => a(e, s(r)),
  c = (e, a) => {
    var s = {};
    for (var t in e) o.call(e, t) && a.indexOf(t) < 0 && (s[t] = e[t]);
    if (null != e && r)
      for (var t of r(e)) a.indexOf(t) < 0 && n.call(e, t) && (s[t] = e[t]);
    return s;
  };
import {
  r as d,
  j as m,
  k as p,
  e as u,
  F as f,
  w as _,
  T as v,
  L as h,
  N as g,
} from './vendor.81f97c66.js';
import { A as w } from './Alert.87b3ae07.js';
import { F as N, f as b, a as x, b as C, c as j } from './index.es.b7d0ea5d.js';
import { R as P } from './index.esm.9a519a65.js';
import { u as k, c as y } from './ThemeProvider.869a7bec.js';
import {
  u as E,
  i as S,
  l as I,
  a as O,
  b as F,
  c as L,
  d as B,
  e as T,
  g as A,
  f as $,
  h as q,
  j as H,
  n as R,
  k as D,
  m as G,
  o as M,
  p as z,
  q as U,
  A as W,
  r as K,
  s as Y,
} from './index.04970f6d.js';
import { P as Z } from './PassworAlert.eb87f102.js';
import { g as J, a as Q } from './Avatar.7b557cd5.js';
import {
  T as V,
  t as X,
  E as ee,
  a as ae,
  b as se,
  u as re,
  F as oe,
} from './Fade.6981a97a.js';
import {
  A as ne,
  M as te,
  B as le,
  a as ie,
  g as ce,
} from './AbstractModalHeader.205d102b.js';
import { c as de } from './createWithBsPrefix.439c8819.js';
import { d as me } from './divWithClassName.7695ab43.js';
import { C as pe } from './CloseButton.0522e079.js';
import { F as ue } from './Form.6d298630.js';
import { B as fe } from './Button.7eb63b50.js';
import './hasClass.105c66bc.js';
import './FormGroup.c96accb6.js';
import './Col.0eeb879f.js';
const _e = d.exports.createContext(null);
_e.displayName = 'NavbarContext';
var ve = _e,
  he = de('offcanvas-body');
const ge = { [ee]: 'show', [se]: 'show' },
  we = d.exports.forwardRef((e, a) => {
    var s = e,
      { bsPrefix: r, className: o, children: n } = s,
      t = c(s, ['bsPrefix', 'className', 'children']);
    return (
      (r = k(r, 'offcanvas')),
      m(
        V,
        i(l({ ref: a, addEndListener: X }, t), {
          childRef: n.ref,
          children: (e, a) =>
            d.exports.cloneElement(
              n,
              i(l({}, a), {
                className: y(
                  o,
                  n.props.className,
                  (e === ee || e === ae) && `${r}-toggling`,
                  ge[e],
                ),
              }),
            ),
        }),
      )
    );
  });
(we.defaultProps = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1 }),
  (we.displayName = 'OffcanvasToggling');
var Ne = we;
const be = d.exports.forwardRef((e, a) => {
  var s = e,
    { bsPrefix: r, className: o } = s,
    n = c(s, ['bsPrefix', 'className']);
  return (
    (r = k(r, 'offcanvas-header')),
    m(ne, i(l({ ref: a }, n), { className: y(o, r) }))
  );
});
(be.displayName = 'OffcanvasHeader'),
  (be.defaultProps = { closeLabel: 'Close', closeButton: !1 });
var xe = be;
var Ce = de('offcanvas-title', { Component: me('h5') });
function je(e) {
  return m(Ne, l({}, e));
}
function Pe(e) {
  return m(oe, l({}, e));
}
const ke = d.exports.forwardRef((e, a) => {
  var s = e,
    {
      bsPrefix: r,
      className: o,
      children: n,
      'aria-labelledby': t,
      placement: p,
      show: u,
      backdrop: f,
      keyboard: _,
      scroll: v,
      onEscapeKeyDown: h,
      onShow: g,
      onHide: w,
      container: N,
      autoFocus: b,
      enforceFocus: x,
      restoreFocus: C,
      restoreFocusOptions: j,
      onEntered: P,
      onExit: E,
      onExiting: S,
      onEnter: I,
      onEntering: O,
      onExited: F,
      backdropClassName: L,
      manager: B,
    } = s,
    T = c(s, [
      'bsPrefix',
      'className',
      'children',
      'aria-labelledby',
      'placement',
      'show',
      'backdrop',
      'keyboard',
      'scroll',
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
  const A = d.exports.useRef();
  r = k(r, 'offcanvas');
  const { onToggle: $ } = d.exports.useContext(ve) || {},
    q = re(() => {
      null == $ || $(), null == w || w();
    }),
    H = d.exports.useMemo(() => ({ onHide: q }), [q]);
  const R = d.exports.useCallback(
    e => m('div', i(l({}, e), { className: y(`${r}-backdrop`, L) })),
    [L, r],
  );
  return m(te.Provider, {
    value: H,
    children: m(le, {
      show: u,
      ref: a,
      backdrop: f,
      container: N,
      keyboard: _,
      autoFocus: b,
      enforceFocus: x && !v,
      restoreFocus: C,
      restoreFocusOptions: j,
      onEscapeKeyDown: h,
      onShow: g,
      onHide: q,
      onEnter: (e, ...a) => {
        e && (e.style.visibility = 'visible'), null == I || I(e, ...a);
      },
      onEntering: O,
      onEntered: P,
      onExit: E,
      onExiting: S,
      onExited: (e, ...a) => {
        e && (e.style.visibility = ''), null == F || F(...a);
      },
      manager:
        B ||
        (v
          ? (A.current || (A.current = new ie({ handleContainerOverflow: !1 })),
            A.current)
          : ce()),
      transition: je,
      backdropTransition: Pe,
      renderBackdrop: R,
      renderDialog: e =>
        m(
          'div',
          i(l(l({ role: 'dialog' }, e), T), {
            className: y(o, r, `${r}-${p}`),
            'aria-labelledby': t,
            children: n,
          }),
        ),
    }),
  });
});
(ke.displayName = 'Offcanvas'),
  (ke.defaultProps = {
    show: !1,
    backdrop: !0,
    keyboard: !0,
    scroll: !1,
    autoFocus: !0,
    enforceFocus: !0,
    restoreFocus: !0,
    placement: 'start',
  });
var ye = Object.assign(ke, { Body: he, Header: xe, Title: Ce });
var Ee = '_navBar_qowss_1',
  Se = '_navBarContainer_qowss_10',
  Ie = '_navContainer_qowss_14',
  Oe = '_navLink_qowss_18',
  Fe = '_navLogo_qowss_29',
  Le = '_logoLink_qowss_36',
  Be = '_branding_qowss_40',
  Te = '_profileIcons_qowss_44',
  Ae = '_profile_qowss_44',
  $e = '_ProfileIcon_qowss_61',
  qe = '_profileIconImg_qowss_67',
  He = '_profileName_qowss_72',
  Re = '_notifIcon_qowss_81';
var De = '_canvas_1ji0u_1',
  Ge = '_Container_1ji0u_5',
  Me = '_header_1ji0u_10',
  ze = '_close_1ji0u_15',
  Ue = '_divider_1ji0u_19',
  We = '_body_1ji0u_25',
  Ke = '_profileContainer_1ji0u_30',
  Ye = '_imageContainer_1ji0u_37',
  Ze = '_profileName_1ji0u_50',
  Je = '_formContainer_1ji0u_54',
  Qe = '_formField_1ji0u_58',
  Ve = '_flagContainer_1ji0u_62',
  Xe = '_footer_1ji0u_69',
  ea = '_error_1ji0u_75',
  aa = '_correct_1ji0u_79',
  sa = '_normal_1ji0u_83',
  ra = '_submitContainer_1ji0u_87',
  oa = '_eyeContainer_1ji0u_94',
  na = '_eye_1ji0u_94',
  ta = '_linkButton_1ji0u_105',
  la = '_avatarContainer_1ji0u_109',
  ia = '_avatar_1ji0u_109',
  ca = '_avatarSelected_1ji0u_148',
  da = '_avatarImg_1ji0u_152';
const ma = e => {
  const a = p(),
    s = Q(),
    [r, o] = d.exports.useState('IN'),
    [n, t] = d.exports.useState(''),
    [l, i] = d.exports.useState(''),
    [c, _] = d.exports.useState(''),
    [v, h] = d.exports.useState(!1),
    [g, j] = d.exports.useState(!1),
    [k, R] = d.exports.useState(!1),
    [D, G] = d.exports.useState(''),
    [M, z] = d.exports.useState(''),
    [U, W] = d.exports.useState(!1),
    [K, Y] = d.exports.useState(!1),
    [V, X] = d.exports.useState(1),
    [ee, ae] = d.exports.useState(!1),
    [se, re] = d.exports.useState(!1),
    [oe, ne] = d.exports.useState(!1),
    [te, le] = d.exports.useState(!1),
    [ie, ce] = d.exports.useState(!1),
    [de, me] = d.exports.useState(0),
    [_e, ve] = d.exports.useState({
      oldpassword: 'password',
      password: 'password',
      confirmPassword: 'password',
    }),
    he = E(S),
    ge = () => {
      'password' === _e.oldpassword
        ? ve({
            oldpassword: 'text',
            password: _e.password,
            confirmPassword: _e.confirmPassword,
          })
        : ve({
            oldpassword: 'password',
            password: _e.password,
            confirmPassword: _e.confirmPassword,
          });
    },
    we = () => {
      'password' === _e.password
        ? ve({
            oldpassword: _e.oldpassword,
            password: 'text',
            confirmPassword: _e.confirmPassword,
          })
        : ve({
            oldpassword: _e.oldpassword,
            password: 'password',
            confirmPassword: _e.confirmPassword,
          });
    },
    Ne = () => {
      'password' === _e.confirmPassword
        ? ve({
            oldpassword: _e.oldpassword,
            password: _e.password,
            confirmPassword: 'text',
          })
        : ve({
            oldpassword: _e.oldpassword,
            password: _e.password,
            confirmPassword: 'password',
          });
    },
    be = E(I),
    xe = O();
  d.exports.useEffect(() => {
    he && ce(!0);
  }, [be, he]);
  const Ce = E(F),
    je = E(L);
  d.exports.useEffect(() => {
    je && (z(''), G(''), ae(!1), re(!1), Y(!1), W(!1));
  }, [je]),
    d.exports.useEffect(() => {
      k &&
        0 == he &&
        (_(''),
        t(''),
        i(''),
        h(!1),
        R(!1),
        j(!1),
        ne(!1),
        ce(!1),
        le(!1),
        xe(B()),
        localStorage.removeItem('token'),
        a('/login', { replace: !0 }));
    }, [Ce]);
  const Pe = E(T);
  d.exports.useEffect(() => {
    me(Pe.avatarId);
  }, [Pe]),
    d.exports.useEffect(() => {
      null != localStorage.getItem('token') && xe(A());
    }, [Pe]);
  const ke = e => {
    const a = new Intl.DisplayNames(['en'], { type: 'region' }).of(e);
    return a || 'INDIA';
  };
  return m('div', {
    children: m('div', {
      children: u(ye, {
        show: e.open,
        placement: 'end',
        className: Ge,
        backdropClassName: De,
        children: [
          u(ye.Header, {
            className: Me,
            children: [
              m(ye.Title, {
                children: u('h3', { children: ['Hey ', Pe.username, '!'] }),
              }),
              m(pe, { className: ze, onClick: e.handleClose }),
            ],
          }),
          m('hr', { className: Ue }),
          u(ye.Body, {
            className: We,
            children: [
              1 == V
                ? u('div', {
                    className: Ke,
                    children: [
                      m('div', {
                        className: Ye,
                        children: m('img', {
                          src: J(Pe.avatarId).url,
                          alt: 'User Avatar',
                        }),
                      }),
                      u('div', {
                        className: Ze,
                        children: [' ', m('b', { children: Pe.name })],
                      }),
                    ],
                  })
                : m(f, {}),
              u('div', {
                children: [
                  m(ue, {
                    className: Je,
                    children: u(
                      'div',
                      1 == V
                        ? {
                            children: [
                              u(ue.Group, {
                                className: y('mb-3', Qe),
                                controlId: 'formBasicUserName',
                                children: [
                                  m(ue.Label, { children: 'Full Name' }),
                                  m(ue.Control, {
                                    type: 'text',
                                    placeholder: Pe.name,
                                    value: M,
                                    className: K ? (ee ? ea : aa) : sa,
                                    onChange: e => {
                                      z(e.target.value),
                                        Y(!0),
                                        e.target.value.trim().length < 5
                                          ? ae(!0)
                                          : ae(!1);
                                    },
                                  }),
                                  K && ee
                                    ? m(w, { err: ee, content: 'Invalid name' })
                                    : m(f, {}),
                                ],
                              }),
                              u(ue.Group, {
                                className: 'mb-3',
                                controlId: 'formBasicCollege',
                                children: [
                                  m(ue.Label, { children: 'College' }),
                                  m(ue.Control, {
                                    type: 'text',
                                    placeholder: Pe.college,
                                    value: D,
                                    className: U ? (se ? ea : aa) : sa,
                                    onChange: e => {
                                      G(e.target.value),
                                        W(!0),
                                        0 == e.target.value.trim().length
                                          ? re(!0)
                                          : re(!1);
                                    },
                                  }),
                                  se
                                    ? m(w, {
                                        err: se,
                                        content:
                                          'Please enter a valid College name',
                                      })
                                    : m(f, {}),
                                ],
                              }),
                              u(ue.Group, {
                                className: y('mb-3', Qe),
                                controlId: 'formBasicEmail',
                                children: [
                                  m(ue.Label, { children: 'Country' }),
                                  m('div', {
                                    className: Ve,
                                    children: m(P, {
                                      selected: r,
                                      searchable: !0,
                                      id: 'flags',
                                      placeholder: 'Search your country',
                                      onSelect: e => {
                                        o(e);
                                      },
                                    }),
                                  }),
                                  ' ',
                                ],
                              }),
                              u(ue.Group, {
                                className: 'mb-3',
                                controlId: 'formBasicAvatar',
                                children: [
                                  m(ue.Label, { children: 'Avatar' }),
                                  m('div', {
                                    children: m('div', {
                                      className: la,
                                      children: s.map((e, a) =>
                                        m(
                                          'div',
                                          {
                                            className: `${ia} ${
                                              de === e.id ? ca : ''
                                            }`,
                                            onClick: () => {
                                              var a;
                                              me(e.id), (a = e.id), me(a);
                                            },
                                            children: m('img', {
                                              className: da,
                                              src: e.url,
                                              alt: 'avatar',
                                            }),
                                          },
                                          a,
                                        ),
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                              m('div', {
                                className: y('d-grid gap-2', ra),
                                children: u(fe, {
                                  variant: 'light',
                                  onClick: () => {
                                    xe(
                                      q({
                                        userName:
                                          '' === M.toString().trim()
                                            ? Pe.name
                                            : M,
                                        college:
                                          '' === D.toString().trim()
                                            ? Pe.college
                                            : D,
                                        country: ke(r),
                                        avatarId: de,
                                      }),
                                    );
                                  },
                                  disabled:
                                    M.length < 5 &&
                                    0 == D.length &&
                                    de === Pe.avatarId,
                                  children: [
                                    'Save Changes',
                                    ' ',
                                    be ? m(N, { icon: b }) : m(f, {}),
                                  ],
                                }),
                              }),
                            ],
                          }
                        : {
                            children: [
                              u(ue.Group, {
                                className: 'mb-3',
                                controlId: 'formBasicoldPassword',
                                children: [
                                  m(ue.Label, { children: 'Old Password' }),
                                  u('div', {
                                    className: oa,
                                    children: [
                                      m(ue.Control, {
                                        type: _e.oldpassword,
                                        placeholder: 'Old Password',
                                        value: c,
                                        onChange: e => {
                                          _(e.target.value),
                                            k &&
                                              (e.target.value.length < 8
                                                ? ce(!0)
                                                : ce(!1));
                                        },
                                        className: k
                                          ? ie && he
                                            ? ea
                                            : 0 == ie && 0 == he
                                            ? aa
                                            : sa
                                          : sa,
                                      }),
                                      m('div', {
                                        className: na,
                                        children:
                                          'password' === _e.oldpassword
                                            ? m(N, {
                                                size: 'sm',
                                                icon: x,
                                                onClick: ge,
                                              })
                                            : m(N, {
                                                size: 'sm',
                                                icon: C,
                                                onClick: ge,
                                              }),
                                      }),
                                    ],
                                  }),
                                  ie && he
                                    ? m(w, {
                                        err: ie,
                                        content: 'Incorrect Old Password',
                                      })
                                    : m(f, {}),
                                ],
                              }),
                              u(ue.Group, {
                                className: y('mb-3', Qe),
                                controlId: 'formBasicPassword',
                                children: [
                                  m(ue.Label, { children: 'Password' }),
                                  u('div', {
                                    className: oa,
                                    children: [
                                      m(ue.Control, {
                                        type: _e.password,
                                        placeholder: 'Password',
                                        value: n,
                                        onChange: e => {
                                          t(e.target.value), h(!0);
                                          e.target.value.match(
                                            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
                                          )
                                            ? ne(!1)
                                            : ne(!0);
                                        },
                                        className: v ? (oe ? ea : aa) : sa,
                                      }),
                                      m('div', {
                                        className: na,
                                        children:
                                          'password' === _e.password
                                            ? m(N, {
                                                size: 'sm',
                                                icon: x,
                                                onClick: we,
                                              })
                                            : m(N, {
                                                size: 'sm',
                                                icon: C,
                                                onClick: we,
                                              }),
                                      }),
                                    ],
                                  }),
                                  m(Z, {
                                    err: v && oe,
                                    variantColor: 'danger',
                                  }),
                                ],
                              }),
                              u(ue.Group, {
                                className: y('mb-3', Qe),
                                controlId: 'formBasicConfirmPassword',
                                children: [
                                  m(ue.Label, { children: 'Confirm password' }),
                                  u('div', {
                                    className: oa,
                                    children: [
                                      m(ue.Control, {
                                        type: _e.confirmPassword,
                                        placeholder: 'Confirm Password',
                                        value: l,
                                        className: g ? (te ? ea : aa) : sa,
                                        onChange: e => {
                                          i(e.target.value),
                                            j(!0),
                                            e.target.value != n
                                              ? le(!0)
                                              : le(!1);
                                        },
                                      }),
                                      m('div', {
                                        className: na,
                                        children:
                                          'password' === _e.confirmPassword
                                            ? m(N, {
                                                size: 'sm',
                                                icon: x,
                                                onClick: Ne,
                                              })
                                            : m(N, {
                                                size: 'sm',
                                                icon: C,
                                                onClick: Ne,
                                              }),
                                      }),
                                    ],
                                  }),
                                  te
                                    ? m(w, {
                                        err: te,
                                        content: 'Please check your password',
                                      })
                                    : m(f, {}),
                                ],
                              }),
                              m('div', {
                                className: y('d-grid gap-2', ra),
                                children: u(fe, {
                                  variant: 'light',
                                  onClick: () => {
                                    R(!0),
                                      xe(
                                        H({
                                          oldPassword: c,
                                          newPassword: n,
                                          confirmPassword: l,
                                        }),
                                      );
                                  },
                                  disabled:
                                    ie ||
                                    oe ||
                                    te ||
                                    0 == c.length ||
                                    0 == n.length ||
                                    0 == l.length,
                                  children: [
                                    'Submit',
                                    ' ',
                                    be ? m(N, { icon: b }) : m(f, {}),
                                  ],
                                }),
                              }),
                            ],
                          },
                    ),
                  }),
                  m('div', {
                    className: Xe,
                    children: m(
                      fe,
                      1 == V
                        ? {
                            variant: 'link',
                            onClick: () => {
                              X(2), xe($());
                            },
                            className: ta,
                            children: 'Want to Change Credentials?',
                          }
                        : {
                            variant: 'link',
                            onClick: () => {
                              X(1);
                            },
                            className: ta,
                            children: 'Go Back',
                          },
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
};
var pa = '_notifIconContainer_g5v8g_1',
  ua = '_notifIcon_g5v8g_1',
  fa = '_notifIconShow_g5v8g_17',
  _a = '_notifUnreadCounter_g5v8g_20',
  va = '_notifModal_g5v8g_36',
  ha = '_notifModalShow_g5v8g_54',
  ga = '_notifModalTriangle_g5v8g_57',
  wa = '_notifTriangleShow_g5v8g_68',
  Na = '_notif_g5v8g_1',
  ba = '_notifRead_g5v8g_81',
  xa = '_notifLine_g5v8g_84',
  Ca = '_notifHeader_g5v8g_89',
  ja = '_notifContent_g5v8g_95',
  Pa = '_notifTime_g5v8g_99',
  ka = '_notifTimeSection_g5v8g_102';
const ya = () => {
    const e = d.exports.useRef(null),
      a = d.exports.useRef(null),
      s = d.exports.useRef(null),
      r = E(R).slice().reverse(),
      o = E(D),
      n = O();
    d.exports.useEffect(() => {
      n(G());
    }, []),
      d.exports.useEffect(() => {
        const s = s => {
          var r, o, n;
          const l = s.target;
          (null == (r = e.current) ? void 0 : r.contains(l)) ||
            (null == (o = a.current) ? void 0 : o.contains(l)) ||
            !(null == (n = e.current) ? void 0 : n.classList.contains(ha)) ||
            t();
        };
        return (
          window.addEventListener('click', s),
          () => {
            window.removeEventListener('click', s);
          }
        );
      }, [o]);
    const t = () => {
        var r, t, l, i;
        (null == (r = e.current) ? void 0 : r.classList.contains(ha)) &&
          o > 0 &&
          n(M()),
          null == (t = e.current) || t.classList.toggle(ha),
          null == (l = a.current) || l.classList.toggle(fa),
          null == (i = s.current) || i.classList.toggle(wa);
      },
      l = e => {
        const a = new Date(e),
          s = Math.round((new Date().getTime() - a.getTime()) / 864e5);
        return `${0 === s ? 'Today' : 1 === s ? 'Yesterday' : `${s} days`}`;
      },
      i = e => {
        const a = new Date(e);
        return `${a.getHours()}:${a.getMinutes()}`;
      };
    return u(f, {
      children: [
        u('div', {
          className: pa,
          ref: a,
          onClick: t,
          children: [
            m(N, { size: '1x', className: ua, icon: j }),
            o > 0 ? m('div', { className: _a, children: o }) : null,
          ],
        }),
        m('div', { className: ga, ref: s }),
        m('div', {
          className: va,
          ref: e,
          children: r.map(e =>
            u(
              'div',
              {
                className: `${Na} ${e.read ? ba : ''}`,
                children: [
                  u('div', {
                    className: xa,
                    children: [
                      m('h5', { className: Ca, children: e.title }),
                      u('div', {
                        className: ka,
                        children: [
                          m('p', { className: Pa, children: i(e.createdAt) }),
                          m('p', { className: Pa, children: l(e.createdAt) }),
                        ],
                      }),
                    ],
                  }),
                  m('div', {
                    className: xa,
                    children: m('p', { className: ja, children: e.content }),
                  }),
                ],
              },
              e.id,
            ),
          ),
        }),
      ],
    });
  },
  Ea = () => {
    const e = O(),
      a = p(),
      s = _(),
      r = E(T),
      o = E(z);
    d.exports.useEffect(() => {
      document.cookie.split(';').map(a => {
        if (0 != a.trim().startsWith('bearer-token')) {
          const s = a.indexOf('=') + 1,
            r = a.slice(s);
          localStorage.setItem('token', r), e(U());
        }
      });
    }, [document.cookie]),
      d.exports.useEffect(() => {
        null != localStorage.getItem('token') && e(A());
      }, [r]),
      d.exports.useEffect(() => {
        if (null != localStorage.getItem('token')) {
          new K(Y)
            .getAuthStatus()
            .then(e => {
              const { status: s } = e;
              'PROFILE_INCOMPLETE' === s
                ? a('/incomplete-profile', { replace: !0 })
                : 'AUTHENTICATED' === s &&
                  (null != localStorage.getItem('token')
                    ? a('/dashboard', { replace: !0 })
                    : l());
            })
            .catch(e => {
              e instanceof W && v.error(e.message);
            });
        }
      }, [o]);
    const [n, t] = d.exports.useState(!1),
      l = () => {
        t(!1);
      };
    return u('div', {
      className: Ee,
      children: [
        u('div', {
          className: Se,
          children: [
            m(ma, { open: n, handleClose: l }),
            m('div', {
              className: Be,
              children: m(h, {
                to: '/',
                className: Le,
                children: m('div', {
                  className: Fe,
                  children: 'CodeCharacter',
                }),
              }),
            }),
            '/' === s.pathname &&
              u('div', {
                className: Ie,
                children: [
                  m(g, { to: '/login', className: `${Oe}`, children: 'Login' }),
                  m(g, {
                    to: '/register',
                    className: `${Oe}`,
                    children: 'Register',
                  }),
                ],
              }),
          ],
        }),
        null != localStorage.getItem('token') &&
        '/incomplete-profile' != s.pathname &&
        '/' != s.pathname
          ? u('div', {
              className: Te,
              children: [
                m('div', { className: Re, children: m(ya, {}) }),
                u('div', {
                  className: Ae,
                  onClick: () => {
                    t(!0);
                  },
                  children: [
                    m('div', {
                      className: $e,
                      children: m('img', {
                        className: qe,
                        src: J(r.avatarId).url,
                        alt: 'Profile Icon',
                      }),
                    }),
                    m('h3', {
                      className: He,
                      children: null == r ? void 0 : r.username,
                    }),
                  ],
                }),
              ],
            })
          : m(f, {}),
      ],
    });
  };
export { Ea as default };
