var e = Object.defineProperty,
  r = Object.defineProperties,
  t = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  o = (r, t, a) =>
    t in r
      ? e(r, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (r[t] = a),
  i = (e, r) => {
    for (var t in r || (r = {})) n.call(r, t) && o(e, t, r[t]);
    if (a) for (var t of a(r)) s.call(r, t) && o(e, t, r[t]);
    return e;
  },
  c = (e, a) => r(e, t(a)),
  d = (e, r) => {
    var t = {};
    for (var o in e) n.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
    if (null != e && a)
      for (var o of a(e)) r.indexOf(o) < 0 && s.call(e, o) && (t[o] = e[o]);
    return t;
  };
import {
  r as l,
  j as p,
  R as h,
  x as m,
  I as u,
  e as f,
  F as v,
  k as g,
  T as b,
  N as w,
} from './vendor.81f97c66.js';
import {
  F as y,
  r as x,
  s as C,
  a as N,
  b as _,
  t as E,
  u as S,
  e as R,
  f as P,
  p as j,
  q as O,
} from './index.es.b7d0ea5d.js';
import { s as k } from './auth.module.fa7fd44a.js';
import {
  u as L,
  l as I,
  a as F,
  a8 as z,
  a9 as A,
  aa as U,
  ab as B,
} from './index.04970f6d.js';
import { A as D } from './Alert.87b3ae07.js';
import { m as $, F as T } from './Form.6d298630.js';
import { P as H } from './PassworAlert.eb87f102.js';
import { O as G } from './OtherDetails.c37c6a5c.js';
import { u as Z, c as q } from './ThemeProvider.869a7bec.js';
import { C as W } from './Card.699e5227.js';
import { C as M } from './Container.8990cc41.js';
import { B as V } from './Button.7eb63b50.js';
import './Fade.6981a97a.js';
import './CloseButton.0522e079.js';
import './divWithClassName.7695ab43.js';
import './createWithBsPrefix.439c8819.js';
import './FormGroup.c96accb6.js';
import './Col.0eeb879f.js';
import './index.esm.9a519a65.js';
import './Avatar.7b557cd5.js';
function J(e, r, t) {
  const a = ((e - r) / (t - r)) * 100;
  return Math.round(1e3 * a) / 1e3;
}
function K(e, r) {
  var t = e,
    {
      min: a,
      now: n,
      max: s,
      label: o,
      visuallyHidden: l,
      striped: h,
      animated: m,
      className: u,
      style: f,
      variant: v,
      bsPrefix: g,
    } = t,
    b = d(t, [
      'min',
      'now',
      'max',
      'label',
      'visuallyHidden',
      'striped',
      'animated',
      'className',
      'style',
      'variant',
      'bsPrefix',
    ]);
  return p(
    'div',
    c(i({ ref: r }, b), {
      role: 'progressbar',
      className: q(u, `${g}-bar`, {
        [`bg-${v}`]: v,
        [`${g}-bar-animated`]: m,
        [`${g}-bar-striped`]: m || h,
      }),
      style: i({ width: `${J(n, a, s)}%` }, f),
      'aria-valuenow': n,
      'aria-valuemin': a,
      'aria-valuemax': s,
      children: l
        ? p('span', { className: 'visually-hidden', children: o })
        : o,
    }),
  );
}
const Q = l.exports.forwardRef((e, r) => {
  var t = e,
    { isChild: a } = t,
    n = d(t, ['isChild']);
  if (((n.bsPrefix = Z(n.bsPrefix, 'progress')), a)) return K(n, r);
  const s = n,
    {
      min: o,
      now: h,
      max: m,
      label: u,
      visuallyHidden: f,
      striped: v,
      animated: g,
      bsPrefix: b,
      variant: w,
      className: y,
      children: x,
    } = s,
    C = d(s, [
      'min',
      'now',
      'max',
      'label',
      'visuallyHidden',
      'striped',
      'animated',
      'bsPrefix',
      'variant',
      'className',
      'children',
    ]);
  return p(
    'div',
    c(i({ ref: r }, C), {
      className: q(y, b),
      children: x
        ? $(x, e => l.exports.cloneElement(e, { isChild: !0 }))
        : K(
            {
              min: o,
              now: h,
              max: m,
              label: u,
              visuallyHidden: f,
              striped: v,
              animated: g,
              bsPrefix: b,
              variant: w,
            },
            r,
          ),
    }),
  );
});
(Q.displayName = 'ProgressBar'),
  (Q.defaultProps = {
    min: 0,
    max: 100,
    animated: !1,
    isChild: !1,
    visuallyHidden: !1,
    striped: !1,
  });
var X = Q;
function Y() {
  return (
    (Y =
      Object.assign ||
      function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var a in t)
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        }
        return e;
      }),
    Y.apply(this, arguments)
  );
}
function ee(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
var re = (function (e) {
  var r, t;
  function a() {
    var r;
    return (
      ((r = e.call(this) || this).handleExpired = r.handleExpired.bind(ee(r))),
      (r.handleErrored = r.handleErrored.bind(ee(r))),
      (r.handleChange = r.handleChange.bind(ee(r))),
      (r.handleRecaptchaRef = r.handleRecaptchaRef.bind(ee(r))),
      r
    );
  }
  (t = e),
    ((r = a).prototype = Object.create(t.prototype)),
    (r.prototype.constructor = r),
    (r.__proto__ = t);
  var n = a.prototype;
  return (
    (n.getValue = function () {
      return this.props.grecaptcha && void 0 !== this._widgetId
        ? this.props.grecaptcha.getResponse(this._widgetId)
        : null;
    }),
    (n.getWidgetId = function () {
      return this.props.grecaptcha && void 0 !== this._widgetId
        ? this._widgetId
        : null;
    }),
    (n.execute = function () {
      var e = this.props.grecaptcha;
      if (e && void 0 !== this._widgetId) return e.execute(this._widgetId);
      this._executeRequested = !0;
    }),
    (n.executeAsync = function () {
      var e = this;
      return new Promise(function (r, t) {
        (e.executionResolve = r), (e.executionReject = t), e.execute();
      });
    }),
    (n.reset = function () {
      this.props.grecaptcha &&
        void 0 !== this._widgetId &&
        this.props.grecaptcha.reset(this._widgetId);
    }),
    (n.handleExpired = function () {
      this.props.onExpired ? this.props.onExpired() : this.handleChange(null);
    }),
    (n.handleErrored = function () {
      this.props.onErrored && this.props.onErrored(),
        this.executionReject &&
          (this.executionReject(),
          delete this.executionResolve,
          delete this.executionReject);
    }),
    (n.handleChange = function (e) {
      this.props.onChange && this.props.onChange(e),
        this.executionResolve &&
          (this.executionResolve(e),
          delete this.executionReject,
          delete this.executionResolve);
    }),
    (n.explicitRender = function () {
      if (
        this.props.grecaptcha &&
        this.props.grecaptcha.render &&
        void 0 === this._widgetId
      ) {
        var e = document.createElement('div');
        (this._widgetId = this.props.grecaptcha.render(e, {
          sitekey: this.props.sitekey,
          callback: this.handleChange,
          theme: this.props.theme,
          type: this.props.type,
          tabindex: this.props.tabindex,
          'expired-callback': this.handleExpired,
          'error-callback': this.handleErrored,
          size: this.props.size,
          stoken: this.props.stoken,
          hl: this.props.hl,
          badge: this.props.badge,
        })),
          this.captcha.appendChild(e);
      }
      this._executeRequested &&
        this.props.grecaptcha &&
        void 0 !== this._widgetId &&
        ((this._executeRequested = !1), this.execute());
    }),
    (n.componentDidMount = function () {
      this.explicitRender();
    }),
    (n.componentDidUpdate = function () {
      this.explicitRender();
    }),
    (n.componentWillUnmount = function () {
      void 0 !== this._widgetId &&
        (this.delayOfCaptchaIframeRemoving(), this.reset());
    }),
    (n.delayOfCaptchaIframeRemoving = function () {
      var e = document.createElement('div');
      for (
        document.body.appendChild(e), e.style.display = 'none';
        this.captcha.firstChild;

      )
        e.appendChild(this.captcha.firstChild);
      setTimeout(function () {
        document.body.removeChild(e);
      }, 5e3);
    }),
    (n.handleRecaptchaRef = function (e) {
      this.captcha = e;
    }),
    (n.render = function () {
      var e = this.props;
      e.sitekey,
        e.onChange,
        e.theme,
        e.type,
        e.tabindex,
        e.onExpired,
        e.onErrored,
        e.size,
        e.stoken,
        e.grecaptcha,
        e.badge,
        e.hl;
      var r = (function (e, r) {
        if (null == e) return {};
        var t,
          a,
          n = {},
          s = Object.keys(e);
        for (a = 0; a < s.length; a++)
          (t = s[a]), r.indexOf(t) >= 0 || (n[t] = e[t]);
        return n;
      })(e, [
        'sitekey',
        'onChange',
        'theme',
        'type',
        'tabindex',
        'onExpired',
        'onErrored',
        'size',
        'stoken',
        'grecaptcha',
        'badge',
        'hl',
      ]);
      return h.createElement('div', Y({}, r, { ref: this.handleRecaptchaRef }));
    }),
    a
  );
})(h.Component);
function te() {
  return (
    (te =
      Object.assign ||
      function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var a in t)
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        }
        return e;
      }),
    te.apply(this, arguments)
  );
}
(re.displayName = 'ReCAPTCHA'),
  (re.propTypes = {
    sitekey: m.string.isRequired,
    onChange: m.func,
    grecaptcha: m.object,
    theme: m.oneOf(['dark', 'light']),
    type: m.oneOf(['image', 'audio']),
    tabindex: m.number,
    onExpired: m.func,
    onErrored: m.func,
    size: m.oneOf(['compact', 'normal', 'invisible']),
    stoken: m.string,
    hl: m.string,
    badge: m.oneOf(['bottomright', 'bottomleft', 'inline']),
  }),
  (re.defaultProps = {
    onChange: function () {},
    theme: 'light',
    type: 'image',
    tabindex: 0,
    size: 'normal',
    badge: 'bottomright',
  });
var ae = {},
  ne = 0;
var se,
  oe,
  ie = ((se = function () {
    return (
      'https://' +
      ((('undefined' != typeof window && window.recaptchaOptions) || {})
        .useRecaptchaNet
        ? 'recaptcha.net'
        : 'www.google.com') +
      '/recaptcha/api.js?onload=onloadcallback&render=explicit'
    );
  }),
  (oe =
    (oe = { callbackName: 'onloadcallback', globalName: 'grecaptcha' }) || {}),
  function (e) {
    var r = e.displayName || e.name || 'Component',
      t = (function (r) {
        var t, a;
        function n(e, t) {
          var a;
          return (
            ((a = r.call(this, e, t) || this).state = {}),
            (a.__scriptURL = ''),
            a
          );
        }
        (a = r),
          ((t = n).prototype = Object.create(a.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = a);
        var s = n.prototype;
        return (
          (s.asyncScriptLoaderGetScriptLoaderID = function () {
            return (
              this.__scriptLoaderID ||
                (this.__scriptLoaderID = 'async-script-loader-' + ne++),
              this.__scriptLoaderID
            );
          }),
          (s.setupScriptURL = function () {
            return (
              (this.__scriptURL = 'function' == typeof se ? se() : se),
              this.__scriptURL
            );
          }),
          (s.asyncScriptLoaderHandleLoad = function (e) {
            var r = this;
            this.setState(e, function () {
              return (
                r.props.asyncScriptOnLoad && r.props.asyncScriptOnLoad(r.state)
              );
            });
          }),
          (s.asyncScriptLoaderTriggerOnScriptLoaded = function () {
            var e = ae[this.__scriptURL];
            if (!e || !e.loaded) throw new Error('Script is not loaded.');
            for (var r in e.observers) e.observers[r](e);
            delete window[oe.callbackName];
          }),
          (s.componentDidMount = function () {
            var e = this,
              r = this.setupScriptURL(),
              t = this.asyncScriptLoaderGetScriptLoaderID(),
              a = oe,
              n = a.globalName,
              s = a.callbackName,
              o = a.scriptId;
            if (
              (n &&
                void 0 !== window[n] &&
                (ae[r] = { loaded: !0, observers: {} }),
              ae[r])
            ) {
              var i = ae[r];
              return i && (i.loaded || i.errored)
                ? void this.asyncScriptLoaderHandleLoad(i)
                : void (i.observers[t] = function (r) {
                    return e.asyncScriptLoaderHandleLoad(r);
                  });
            }
            var c = {};
            (c[t] = function (r) {
              return e.asyncScriptLoaderHandleLoad(r);
            }),
              (ae[r] = { loaded: !1, observers: c });
            var d = document.createElement('script');
            for (var l in ((d.src = r), (d.async = !0), oe.attributes))
              d.setAttribute(l, oe.attributes[l]);
            o && (d.id = o);
            var p = function (e) {
              if (ae[r]) {
                var t = ae[r].observers;
                for (var a in t) e(t[a]) && delete t[a];
              }
            };
            s &&
              'undefined' != typeof window &&
              (window[s] = function () {
                return e.asyncScriptLoaderTriggerOnScriptLoaded();
              }),
              (d.onload = function () {
                var e = ae[r];
                e &&
                  ((e.loaded = !0),
                  p(function (r) {
                    return !s && (r(e), !0);
                  }));
              }),
              (d.onerror = function () {
                var e = ae[r];
                e &&
                  ((e.errored = !0),
                  p(function (r) {
                    return r(e), !0;
                  }));
              }),
              document.body.appendChild(d);
          }),
          (s.componentWillUnmount = function () {
            var e = this.__scriptURL;
            if (!0 === oe.removeOnUnmount)
              for (
                var r = document.getElementsByTagName('script'), t = 0;
                t < r.length;
                t += 1
              )
                r[t].src.indexOf(e) > -1 &&
                  r[t].parentNode &&
                  r[t].parentNode.removeChild(r[t]);
            var a = ae[e];
            a &&
              (delete a.observers[this.asyncScriptLoaderGetScriptLoaderID()],
              !0 === oe.removeOnUnmount && delete ae[e]);
          }),
          (s.render = function () {
            var r = oe.globalName,
              t = this.props;
            t.asyncScriptOnLoad;
            var a = t.forwardedRef,
              n = (function (e, r) {
                if (null == e) return {};
                var t,
                  a,
                  n = {},
                  s = Object.keys(e);
                for (a = 0; a < s.length; a++)
                  (t = s[a]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                return n;
              })(t, ['asyncScriptOnLoad', 'forwardedRef']);
            return (
              r &&
                'undefined' != typeof window &&
                (n[r] = void 0 !== window[r] ? window[r] : void 0),
              (n.ref = a),
              l.exports.createElement(e, n)
            );
          }),
          n
        );
      })(l.exports.Component),
      a = l.exports.forwardRef(function (e, r) {
        return l.exports.createElement(t, te({}, e, { forwardedRef: r }));
      });
    return (
      (a.displayName = 'AsyncScriptLoader(' + r + ')'),
      (a.propTypes = { asyncScriptOnLoad: m.func }),
      u(a, e)
    );
  })(re);
var ce = '_levelTitle_1nmcg_1',
  de = '_error_1nmcg_8',
  le = '_correct_1nmcg_12',
  pe = '_normal_1nmcg_16',
  he = '_eyeContainer_1nmcg_27',
  me = '_eye_1nmcg_27';
function ue(e) {
  return f('div', {
    children: [
      p('div', { className: ce, children: 'User Details' }),
      f(T.Group, {
        className: 'mb-3',
        controlId: 'formBasicFullName',
        children: [
          p(T.Label, { children: 'Fullname' }),
          p(T.Control, {
            type: 'text',
            placeholder: 'Fullname',
            autoComplete: 'off',
            value: e.fullName,
            onChange: e.handleFullNameChange,
            className: e.submitFirst ? (e.fullNameError ? de : le) : pe,
          }),
          e.submitFirst && e.fullNameError
            ? p(D, {
                err: e.fullNameError,
                content: 'Name should be atleast 5 characters',
              })
            : p(v, {}),
        ],
      }),
      f(T.Group, {
        className: 'mb-3',
        controlId: 'formBasicUserName',
        children: [
          p(T.Label, { children: 'Username' }),
          p(T.Control, {
            type: 'text',
            placeholder: 'Username',
            autoComplete: 'off',
            value: e.userName,
            onChange: e.handleUserNameChange,
            className: e.submitFirst ? (e.userNameError ? de : le) : pe,
          }),
          e.submitFirst && e.userNameError
            ? p(D, {
                err: e.userNameError,
                content: 'Username should be atleast 5 characters',
              })
            : p(v, {}),
        ],
      }),
      f(T.Group, {
        className: 'mb-3',
        controlId: 'formBasicEmail',
        children: [
          p(T.Label, { children: 'Email' }),
          p(T.Control, {
            type: 'text',
            placeholder: 'Email',
            value: e.email,
            className: e.submitFirst ? (e.emailError ? de : le) : pe,
            onChange: e.handleEmailChange,
          }),
          e.submitFirst && e.emailError
            ? p(D, {
                err: e.emailError,
                content: 'Please! Enter a valid email',
              })
            : p(v, {}),
        ],
      }),
    ],
  });
}
function fe(e) {
  const [r, t] = l.exports.useState(!0),
    [a, n] = l.exports.useState({
      password: 'password',
      confirmPassword: 'password',
    }),
    s = () => {
      'password' === a.password
        ? n({ password: 'text', confirmPassword: a.confirmPassword })
        : n({ password: 'password', confirmPassword: a.confirmPassword });
    },
    o = () => {
      'password' === a.confirmPassword
        ? n({ password: a.password, confirmPassword: 'text' })
        : n({ password: a.password, confirmPassword: 'password' });
    },
    i = () => {
      t(!r);
    };
  return f('div', {
    children: [
      p('div', { className: ce, children: 'User Credentials' }),
      f(T.Group, {
        className: 'mb-3',
        controlId: 'formBasicPassword',
        children: [
          f(T.Label, {
            children: [
              'Password',
              ' ',
              r && '' == e.password
                ? p(y, { icon: x, size: 'sm', onClick: i })
                : p(y, { icon: C, size: 'sm', onClick: i }),
            ],
          }),
          p(H, { err: r && '' == e.password, variantColor: 'info' }),
          f('div', {
            className: he,
            children: [
              p(T.Control, {
                type: a.password,
                placeholder: 'Password',
                value: e.password,
                onChange: e.handlePasswordChange,
                className: e.submitSecond ? (e.passwordError ? de : le) : pe,
              }),
              p('div', {
                className: me,
                children:
                  'password' === a.password
                    ? p(y, { size: 'sm', icon: N, onClick: s })
                    : p(y, { size: 'sm', icon: _, onClick: s }),
              }),
            ],
          }),
          p(H, {
            err: e.submitSecond && e.passwordError,
            variantColor: 'danger',
          }),
        ],
      }),
      f(T.Group, {
        className: 'mb-3',
        controlId: 'formBasicConfirmPassword',
        children: [
          p(T.Label, { children: 'Confirm password' }),
          f('div', {
            className: he,
            children: [
              p(T.Control, {
                type: a.confirmPassword,
                placeholder: 'Confirm Password',
                value: e.confirmPassword,
                onChange: e.handleConfirmPasswordChange,
                className: e.submitSecond
                  ? e.confirmpasswordError
                    ? de
                    : le
                  : pe,
              }),
              p('div', {
                className: me,
                children:
                  'password' === a.confirmPassword
                    ? p(y, { size: 'sm', icon: N, onClick: o })
                    : p(y, { size: 'sm', icon: _, onClick: o }),
              }),
            ],
          }),
          e.submitSecond && e.confirmpasswordError
            ? p(D, {
                err: e.confirmpasswordError,
                content: 'Please! check your password',
              })
            : p(v, {}),
        ],
      }),
    ],
  });
}
var ve = '_progressBarContainer_1vr01_1',
  ge = '_progressBar_1vr01_1',
  be = '_levelContainer_1vr01_13',
  we = '_levelInitiated_1vr01_33',
  ye = '_levelCompleted_1vr01_42';
function xe(e) {
  return p('div', {
    children: f('div', {
      className: ve,
      children: [
        p('div', {
          children: p('div', {
            children: p(X, {
              now: null != e.formNumber ? 50 * (e.formNumber - 1) : 0,
              className: ge,
            }),
          }),
        }),
        f('div', {
          className: be,
          children: [
            f('div', {
              children: [
                ' ',
                p('button', {
                  className: null != e.formNumber && e.formNumber > 1 ? ye : we,
                  onClick: e.handleForm1,
                  children: p(y, { icon: E }),
                }),
              ],
            }),
            f('div', {
              children: [
                ' ',
                p('button', {
                  className: null != e.formNumber && e.formNumber > 2 ? ye : we,
                  onClick: e.handleForm2,
                  children: p(y, { icon: S }),
                }),
              ],
            }),
            f('div', {
              children: [
                ' ',
                p('button', {
                  className: e.completed ? ye : we,
                  children: p(y, { icon: R }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
let Ce = 1,
  Ne = 0;
function _e() {
  const [e, r] = l.exports.useState('IN'),
    [t, a] = l.exports.useState(1),
    [n, s] = l.exports.useState(''),
    [o, i] = l.exports.useState(''),
    [c, d] = l.exports.useState(''),
    [h, m] = l.exports.useState(''),
    [u, x] = l.exports.useState(''),
    [C, N] = l.exports.useState(''),
    [_, E] = l.exports.useState(!1),
    [S, R] = l.exports.useState(!1),
    [D, $] = l.exports.useState(!1),
    [H, Z] = l.exports.useState(!1),
    [q, J] = l.exports.useState(!1),
    [K, Q] = l.exports.useState(!1),
    [X, Y] = l.exports.useState(!1),
    [ee, re] = l.exports.useState(!1),
    [te, ae] = l.exports.useState(!1),
    [ne, se] = l.exports.useState(!1),
    [oe, ce] = l.exports.useState(!1),
    [de, le] = l.exports.useState(0),
    pe = L(I),
    he = F(),
    me = g();
  let ve = !1;
  ve = L(z);
  const ge = L(A);
  l.exports.useEffect(() => {
    null != localStorage.getItem('token') && me('/dashboard', { replace: !0 });
  }, []),
    l.exports.useEffect(() => {
      if ('Username/Email already exists' === ge)
        a(1), (Ce = 1), m(''), Z(!0), s(''), Q(!0), ae(!1);
    }, [ge]),
    l.exports.useEffect(() => {
      ve &&
        (a(1),
        (Ce = 1),
        b.success('Registeration Successful'),
        me('/login', { replace: !0 }));
    }, [ve]);
  const be = e => {
      switch (e) {
        case 1:
          E(!0),
            (Ne = 0),
            o.trim().length < 5 ? (J(!0), (Ne += 1)) : J(!1),
            h.trim().length < 5 || h.length < 5 ? ((Ne += 1), Z(!0)) : Z(!1),
            n.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
              ? Q(!1)
              : (Q(!0), (Ne += 1));
          break;
        case 2:
          R(!0),
            (Ne = 0),
            u.match(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
            )
              ? Y(!1)
              : (Y(!0), (Ne += 1)),
            u === C &&
            C.match(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
            )
              ? re(!1)
              : (re(!0), (Ne += 1));
      }
    },
    we = e => {
      0 == Ne && (1 == e && (Ce += 1), -1 == e && (Ce -= 1)), a(Ce);
    },
    ye = e => {
      const r = new Intl.DisplayNames(['en'], { type: 'region' }).of(e);
      return r || 'INDIA';
    },
    _e = async () => {
      ae(!0),
        he(
          B({
            id: '',
            username: h,
            name: o,
            email: n,
            password: u,
            confirmPassword: C,
            country: ye(e),
            college: c,
            avatarId: de,
          }),
        );
    };
  return p('div', {
    className: k.mainContainer,
    children: f(W, {
      className: k.cardContainer,
      children: [
        f('div', {
          className: k.titleContainer,
          children: [
            p('h1', { children: ' Register to CodeCharacter' }),
            p(M, {
              className: k.subTitle,
              children: p('p', {
                children: ' Register now and code your way through! ',
              }),
            }),
          ],
        }),
        p(xe, {
          formNumber: t,
          completed: te,
          handleForm1: () => {
            t > 1 && (a(1), (Ce = 1));
          },
          handleForm2: () => {
            t > 2 && (a(2), (Ce = 2));
          },
        }),
        f('div', {
          className: k.formContainer,
          children: [
            p(T, {
              children: p(
                v,
                1 === t
                  ? {
                      children: p(ue, {
                        submitFirst: _,
                        handleFullNameChange: e => {
                          i(e.target.value),
                            _ &&
                              (e.target.value.trim().length < 5 || o.length < 4
                                ? J(!0)
                                : J(!1));
                        },
                        handleUserNameChange: e => {
                          m(e.target.value),
                            _ &&
                              (e.target.value.trim().length < 5 || h.length < 4
                                ? Z(!0)
                                : Z(!1));
                        },
                        handleEmailChange: e => {
                          if ((s(e.target.value), _)) {
                            const r =
                              /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                            e.target.value.match(r) || n.match(r)
                              ? Q(!1)
                              : Q(!0);
                          }
                        },
                        fullName: o,
                        fullNameError: q,
                        userName: h,
                        userNameError: H,
                        email: n,
                        emailError: K,
                        register: !0,
                      }),
                    }
                  : 2 === t
                  ? {
                      children: p(fe, {
                        submitSecond: S,
                        handlePasswordChange: e => {
                          const r =
                            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/;
                          x(e.target.value),
                            S && (e.target.value.match(r) ? Y(!1) : Y(!0));
                        },
                        handleConfirmPasswordChange: e => {
                          N(e.target.value),
                            S && (e.target.value != u ? re(!0) : re(!1));
                        },
                        password: u,
                        passwordError: X,
                        confirmPassword: C,
                        confirmpasswordError: ee,
                      }),
                    }
                  : 3 === t
                  ? {
                      children: f('div', {
                        children: [
                          p(G, {
                            selectedCode: e,
                            handleFlagSelect: e => {
                              r(e);
                            },
                            formNumber: t,
                            handleCollegeChange: e => {
                              d(e.target.value),
                                D &&
                                  (0 == e.target.value.trim().length
                                    ? se(!0)
                                    : se(!1));
                            },
                            handleAvatarChange: e => {
                              le(e);
                            },
                            college: c,
                            collegeError: ne,
                            submitThird: D,
                            register: !0,
                          }),
                          p('div', {
                            className:
                              'form-row d-flex justify-content-center my-1',
                            children: p('div', {
                              className:
                                'd-flex justify-content-center input-group',
                              children: p(ie, {
                                sitekey: U,
                                onChange: e => {
                                  e && ce(!0);
                                },
                                theme: 'dark',
                              }),
                            }),
                          }),
                          p('div', {
                            className: k.registerButton,
                            children: p('div', {
                              className: 'd-grid gap-2',
                              children: f(V, {
                                variant: 'outline-success',
                                onClick: () => {
                                  $(!0),
                                    0 == c.trim().length || '' == c.trim()
                                      ? ((Ne += 1), se(!0))
                                      : (se(!1), _e());
                                },
                                disabled: !oe,
                                children: [
                                  'Register',
                                  '  ',
                                  pe ? p(y, { icon: P }) : p(v, {}),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    }
                  : {},
              ),
            }),
            f('div', {
              className: k.linkContainer,
              children: [
                'Already have an account?',
                ' ',
                f('span', {
                  children: [
                    ' ',
                    p('b', {
                      children: f(w, {
                        to: '/login',
                        className: k.link,
                        children: [' ', 'Login now', ' '],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        f('div', {
          className: k.footerContainer,
          children: [
            p('div', {
              children:
                t > 1
                  ? p(V, {
                      variant: 'primary',
                      onClick: () => {
                        be(t - 1), we(-1), ae(!1);
                      },
                      type: 'submit',
                      className: k.previous,
                      children: p(y, { icon: j }),
                    })
                  : p(v, {}),
            }),
            p('div', {
              children:
                t < 3
                  ? p(V, {
                      variant: 'primary',
                      onClick: () => {
                        be(t), we(1);
                      },
                      className: k.next,
                      children: p(y, { icon: O }),
                    })
                  : p(v, {}),
            }),
          ],
        }),
      ],
    }),
  });
}
function Ee() {
  return p(_e, {});
}
export { Ee as default };
