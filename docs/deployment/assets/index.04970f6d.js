var t = Object.defineProperty,
  e = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  s = (e, n, a) =>
    n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[n] = a),
  o = (t, e, n) => (s(t, 'symbol' != typeof e ? e + '' : e, n), n);
import {
  R as c,
  P as l,
  r as u,
  a as d,
  s as h,
  $ as f,
  c as p,
  b as m,
  u as g,
  d as v,
  S as y,
  j as b,
  T as w,
  e as _,
  F as E,
  f as x,
  g as k,
  p as T,
  h as S,
  i as P,
  t as O,
  k as R,
  l as C,
  m as N,
  n as A,
  o as I,
  q as j,
  v as D,
  H as M,
} from './vendor.81f97c66.js';
!(function () {
  const t = document.createElement('link').relList;
  if (!(t && t.supports && t.supports('modulepreload'))) {
    for (const t of document.querySelectorAll('link[rel="modulepreload"]'))
      e(t);
    new MutationObserver(t => {
      for (const n of t)
        if ('childList' === n.type)
          for (const t of n.addedNodes)
            'LINK' === t.tagName && 'modulepreload' === t.rel && e(t);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function e(t) {
    if (t.ep) return;
    t.ep = !0;
    const e = (function (t) {
      const e = {};
      return (
        t.integrity && (e.integrity = t.integrity),
        t.referrerpolicy && (e.referrerPolicy = t.referrerpolicy),
        'use-credentials' === t.crossorigin
          ? (e.credentials = 'include')
          : 'anonymous' === t.crossorigin
          ? (e.credentials = 'omit')
          : (e.credentials = 'same-origin'),
        e
      );
    })(t);
    fetch(t.href, e);
  }
})();
const L = {},
  q = function (t, e) {
    return e && 0 !== e.length
      ? Promise.all(
          e.map(t => {
            if ((t = `${t}`) in L) return;
            L[t] = !0;
            const e = t.endsWith('.css'),
              n = e ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${t}"]${n}`)) return;
            const a = document.createElement('link');
            return (
              (a.rel = e ? 'stylesheet' : 'modulepreload'),
              e || ((a.as = 'script'), (a.crossOrigin = '')),
              (a.href = t),
              document.head.appendChild(a),
              e
                ? new Promise((t, e) => {
                    a.addEventListener('load', t),
                      a.addEventListener('error', e);
                  })
                : void 0
            );
          }),
        ).then(() => t())
      : t();
  };
var z = '_mainWindow_1g0xg_7',
  U = '_gameArea_1g0xg_14',
  F =
    (globalThis && globalThis.__awaiter) ||
    function (t, e, n, a) {
      return new (n || (n = Promise))(function (i, r) {
        function s(t) {
          try {
            c(a.next(t));
          } catch (e) {
            r(e);
          }
        }
        function o(t) {
          try {
            c(a.throw(t));
          } catch (e) {
            r(e);
          }
        }
        function c(t) {
          var e;
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  })).then(s, o);
        }
        c((a = a.apply(t, e || [])).next());
      });
    };
const H = 'http://localhost:8080'.replace(/\/+$/, '');
class B {
  constructor(t = new G()) {
    (this.configuration = t),
      (this.fetchApi = (t, e) =>
        F(this, void 0, void 0, function* () {
          let n = { url: t, init: e };
          for (const t of this.middleware)
            t.pre &&
              (n =
                (yield t.pre(Object.assign({ fetch: this.fetchApi }, n))) || n);
          let a = yield (this.configuration.fetchApi || fetch)(n.url, n.init);
          for (const t of this.middleware)
            t.post &&
              (a =
                (yield t.post({
                  fetch: this.fetchApi,
                  url: n.url,
                  init: n.init,
                  response: a.clone(),
                })) || a);
          return a;
        })),
      (this.middleware = t.middleware);
  }
  withMiddleware(...t) {
    const e = this.clone();
    return (e.middleware = e.middleware.concat(...t)), e;
  }
  withPreMiddleware(...t) {
    const e = t.map(t => ({ pre: t }));
    return this.withMiddleware(...e);
  }
  withPostMiddleware(...t) {
    const e = t.map(t => ({ post: t }));
    return this.withMiddleware(...e);
  }
  request(t, e) {
    return F(this, void 0, void 0, function* () {
      const { url: n, init: a } = this.createFetchParams(t, e),
        i = yield this.fetchApi(n, a);
      if (i.status >= 200 && i.status < 300) return i;
      throw i;
    });
  }
  createFetchParams(t, e) {
    let n = this.configuration.basePath + t.path;
    void 0 !== t.query &&
      0 !== Object.keys(t.query).length &&
      (n += '?' + this.configuration.queryParamsStringify(t.query));
    const a =
      ('undefined' != typeof FormData && t.body instanceof FormData) ||
      t.body instanceof URLSearchParams ||
      ((i = t.body), 'undefined' != typeof Blob && i instanceof Blob)
        ? t.body
        : JSON.stringify(t.body);
    var i;
    const r = Object.assign({}, this.configuration.headers, t.headers);
    return {
      url: n,
      init: Object.assign(
        {
          method: t.method,
          headers: r,
          body: a,
          credentials: this.configuration.credentials,
        },
        e,
      ),
    };
  }
  clone() {
    const t = new (0, this.constructor)(this.configuration);
    return (t.middleware = this.middleware.slice()), t;
  }
}
class Y extends Error {
  constructor(t, e) {
    super(e), (this.field = t), (this.name = 'RequiredError');
  }
}
class G {
  constructor(t = {}) {
    this.configuration = t;
  }
  get basePath() {
    return null != this.configuration.basePath
      ? this.configuration.basePath
      : H;
  }
  get fetchApi() {
    return this.configuration.fetchApi;
  }
  get middleware() {
    return this.configuration.middleware || [];
  }
  get queryParamsStringify() {
    return this.configuration.queryParamsStringify || V;
  }
  get username() {
    return this.configuration.username;
  }
  get password() {
    return this.configuration.password;
  }
  get apiKey() {
    const t = this.configuration.apiKey;
    if (t) return 'function' == typeof t ? t : () => t;
  }
  get accessToken() {
    const t = this.configuration.accessToken;
    if (t)
      return 'function' == typeof t
        ? t
        : () =>
            F(this, void 0, void 0, function* () {
              return t;
            });
  }
  get headers() {
    return this.configuration.headers;
  }
  get credentials() {
    return this.configuration.credentials;
  }
}
function V(t, e = '') {
  return Object.keys(t)
    .map(n => {
      const a = e + (e.length ? `[${n}]` : n),
        i = t[n];
      if (i instanceof Array) {
        const t = i
          .map(t => encodeURIComponent(String(t)))
          .join(`&${encodeURIComponent(a)}=`);
        return `${encodeURIComponent(a)}=${t}`;
      }
      return i instanceof Date
        ? `${encodeURIComponent(a)}=${encodeURIComponent(i.toISOString())}`
        : i instanceof Object
        ? V(i, a)
        : `${encodeURIComponent(a)}=${encodeURIComponent(String(i))}`;
    })
    .filter(t => t.length > 0)
    .join('&');
}
class W {
  constructor(t, e = t => t) {
    (this.raw = t), (this.transformer = e);
  }
  value() {
    return F(this, void 0, void 0, function* () {
      return this.transformer(yield this.raw.json());
    });
  }
}
class X {
  constructor(t) {
    this.raw = t;
  }
  value() {
    return F(this, void 0, void 0, function* () {});
  }
}
class $ {
  constructor(t) {
    this.raw = t;
  }
  value() {
    return F(this, void 0, void 0, function* () {
      return yield this.raw.text();
    });
  }
}
var J =
  (globalThis && globalThis.__awaiter) ||
  function (t, e, n, a) {
    return new (n || (n = Promise))(function (i, r) {
      function s(t) {
        try {
          c(a.next(t));
        } catch (e) {
          r(e);
        }
      }
      function o(t) {
        try {
          c(a.throw(t));
        } catch (e) {
          r(e);
        }
      }
      function c(t) {
        var e;
        t.done
          ? i(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(s, o);
      }
      c((a = a.apply(t, e || [])).next());
    });
  };
class K extends B {
  forgotPasswordRaw(t, e) {
    return J(this, void 0, void 0, function* () {
      if (
        null === t.forgotPasswordRequest ||
        void 0 === t.forgotPasswordRequest
      )
        throw new Y(
          'forgotPasswordRequest',
          'Required parameter requestParameters.forgotPasswordRequest was null or undefined when calling forgotPassword.',
        );
      const n = { 'Content-Type': 'application/json' },
        a = yield this.request(
          {
            path: '/auth/forgot-password',
            method: 'POST',
            headers: n,
            query: {},
            body: t.forgotPasswordRequest,
          },
          e,
        );
      return new X(a);
    });
  }
  forgotPassword(t, e) {
    return J(this, void 0, void 0, function* () {
      yield this.forgotPasswordRaw({ forgotPasswordRequest: t }, e);
    });
  }
  getAuthStatusRaw(t) {
    return J(this, void 0, void 0, function* () {
      const e = {};
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          n = yield t('http-bearer', []);
        n && (e.Authorization = `Bearer ${n}`);
      }
      const n = yield this.request(
        { path: '/auth/status', method: 'GET', headers: e, query: {} },
        t,
      );
      return new W(n);
    });
  }
  getAuthStatus(t) {
    return J(this, void 0, void 0, function* () {
      const e = yield this.getAuthStatusRaw(t);
      return yield e.value();
    });
  }
  passwordLoginRaw(t, e) {
    return J(this, void 0, void 0, function* () {
      if (null === t.passwordLoginRequest || void 0 === t.passwordLoginRequest)
        throw new Y(
          'passwordLoginRequest',
          'Required parameter requestParameters.passwordLoginRequest was null or undefined when calling passwordLogin.',
        );
      const n = { 'Content-Type': 'application/json' },
        a = yield this.request(
          {
            path: '/auth/login/password',
            method: 'POST',
            headers: n,
            query: {},
            body: t.passwordLoginRequest,
          },
          e,
        );
      return new W(a);
    });
  }
  passwordLogin(t, e) {
    return J(this, void 0, void 0, function* () {
      const n = yield this.passwordLoginRaw({ passwordLoginRequest: t }, e);
      return yield n.value();
    });
  }
  resetPasswordRaw(t, e) {
    return J(this, void 0, void 0, function* () {
      if (null === t.resetPasswordRequest || void 0 === t.resetPasswordRequest)
        throw new Y(
          'resetPasswordRequest',
          'Required parameter requestParameters.resetPasswordRequest was null or undefined when calling resetPassword.',
        );
      const n = { 'Content-Type': 'application/json' },
        a = yield this.request(
          {
            path: '/auth/reset-password',
            method: 'POST',
            headers: n,
            query: {},
            body: t.resetPasswordRequest,
          },
          e,
        );
      return new X(a);
    });
  }
  resetPassword(t, e) {
    return J(this, void 0, void 0, function* () {
      yield this.resetPasswordRaw({ resetPasswordRequest: t }, e);
    });
  }
}
var Z =
  (globalThis && globalThis.__awaiter) ||
  function (t, e, n, a) {
    return new (n || (n = Promise))(function (i, r) {
      function s(t) {
        try {
          c(a.next(t));
        } catch (e) {
          r(e);
        }
      }
      function o(t) {
        try {
          c(a.throw(t));
        } catch (e) {
          r(e);
        }
      }
      function c(t) {
        var e;
        t.done
          ? i(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(s, o);
      }
      c((a = a.apply(t, e || [])).next());
    });
  };
class Q extends B {
  createCodeRevisionRaw(t, e) {
    return Z(this, void 0, void 0, function* () {
      if (
        null === t.createCodeRevisionRequest ||
        void 0 === t.createCodeRevisionRequest
      )
        throw new Y(
          'createCodeRevisionRequest',
          'Required parameter requestParameters.createCodeRevisionRequest was null or undefined when calling createCodeRevision.',
        );
      const n = { 'Content-Type': 'application/json' };
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          e = yield t('http-bearer', []);
        e && (n.Authorization = `Bearer ${e}`);
      }
      const a = yield this.request(
        {
          path: '/user/code/revisions',
          method: 'POST',
          headers: n,
          query: {},
          body: t.createCodeRevisionRequest,
        },
        e,
      );
      return new X(a);
    });
  }
  createCodeRevision(t, e) {
    return Z(this, void 0, void 0, function* () {
      yield this.createCodeRevisionRaw({ createCodeRevisionRequest: t }, e);
    });
  }
  getCodeRevisionsRaw(t) {
    return Z(this, void 0, void 0, function* () {
      const e = {};
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          n = yield t('http-bearer', []);
        n && (e.Authorization = `Bearer ${n}`);
      }
      const n = yield this.request(
        { path: '/user/code/revisions', method: 'GET', headers: e, query: {} },
        t,
      );
      return new W(n);
    });
  }
  getCodeRevisions(t) {
    return Z(this, void 0, void 0, function* () {
      const e = yield this.getCodeRevisionsRaw(t);
      return yield e.value();
    });
  }
  getLatestCodeRaw(t) {
    return Z(this, void 0, void 0, function* () {
      const e = {};
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          n = yield t('http-bearer', []);
        n && (e.Authorization = `Bearer ${n}`);
      }
      const n = yield this.request(
        { path: '/user/code/latest', method: 'GET', headers: e, query: {} },
        t,
      );
      return new W(n);
    });
  }
  getLatestCode(t) {
    return Z(this, void 0, void 0, function* () {
      const e = yield this.getLatestCodeRaw(t);
      return yield e.value();
    });
  }
  updateLatestCodeRaw(t, e) {
    return Z(this, void 0, void 0, function* () {
      if (
        null === t.updateLatestCodeRequest ||
        void 0 === t.updateLatestCodeRequest
      )
        throw new Y(
          'updateLatestCodeRequest',
          'Required parameter requestParameters.updateLatestCodeRequest was null or undefined when calling updateLatestCode.',
        );
      const n = { 'Content-Type': 'application/json' };
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          e = yield t('http-bearer', []);
        e && (n.Authorization = `Bearer ${e}`);
      }
      const a = yield this.request(
        {
          path: '/user/code/latest',
          method: 'POST',
          headers: n,
          query: {},
          body: t.updateLatestCodeRequest,
        },
        e,
      );
      return new X(a);
    });
  }
  updateLatestCode(t, e) {
    return Z(this, void 0, void 0, function* () {
      yield this.updateLatestCodeRaw({ updateLatestCodeRequest: t }, e);
    });
  }
}
var tt =
  (globalThis && globalThis.__awaiter) ||
  function (t, e, n, a) {
    return new (n || (n = Promise))(function (i, r) {
      function s(t) {
        try {
          c(a.next(t));
        } catch (e) {
          r(e);
        }
      }
      function o(t) {
        try {
          c(a.throw(t));
        } catch (e) {
          r(e);
        }
      }
      function c(t) {
        var e;
        t.done
          ? i(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(s, o);
      }
      c((a = a.apply(t, e || [])).next());
    });
  };
class et extends B {
  completeUserProfileRaw(t, e) {
    return tt(this, void 0, void 0, function* () {
      if (
        null === t.completeProfileRequest ||
        void 0 === t.completeProfileRequest
      )
        throw new Y(
          'completeProfileRequest',
          'Required parameter requestParameters.completeProfileRequest was null or undefined when calling completeUserProfile.',
        );
      const n = { 'Content-Type': 'application/json' };
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          e = yield t('http-bearer', []);
        e && (n.Authorization = `Bearer ${e}`);
      }
      const a = yield this.request(
        {
          path: '/user/complete-profile',
          method: 'POST',
          headers: n,
          query: {},
          body: t.completeProfileRequest,
        },
        e,
      );
      return new X(a);
    });
  }
  completeUserProfile(t, e) {
    return tt(this, void 0, void 0, function* () {
      yield this.completeUserProfileRaw({ completeProfileRequest: t }, e);
    });
  }
  getCurrentUserRaw(t) {
    return tt(this, void 0, void 0, function* () {
      const e = {};
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          n = yield t('http-bearer', []);
        n && (e.Authorization = `Bearer ${n}`);
      }
      const n = yield this.request(
        { path: '/user', method: 'GET', headers: e, query: {} },
        t,
      );
      return new W(n);
    });
  }
  getCurrentUser(t) {
    return tt(this, void 0, void 0, function* () {
      const e = yield this.getCurrentUserRaw(t);
      return yield e.value();
    });
  }
  updateCurrentUserRaw(t, e) {
    return tt(this, void 0, void 0, function* () {
      if (
        null === t.updateCurrentUserProfile ||
        void 0 === t.updateCurrentUserProfile
      )
        throw new Y(
          'updateCurrentUserProfile',
          'Required parameter requestParameters.updateCurrentUserProfile was null or undefined when calling updateCurrentUser.',
        );
      const n = { 'Content-Type': 'application/json' };
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          e = yield t('http-bearer', []);
        e && (n.Authorization = `Bearer ${e}`);
      }
      const a = yield this.request(
        {
          path: '/user',
          method: 'PATCH',
          headers: n,
          query: {},
          body: t.updateCurrentUserProfile,
        },
        e,
      );
      return new X(a);
    });
  }
  updateCurrentUser(t, e) {
    return tt(this, void 0, void 0, function* () {
      yield this.updateCurrentUserRaw({ updateCurrentUserProfile: t }, e);
    });
  }
  updatePasswordRaw(t, e) {
    return tt(this, void 0, void 0, function* () {
      if (
        null === t.updatePasswordRequest ||
        void 0 === t.updatePasswordRequest
      )
        throw new Y(
          'updatePasswordRequest',
          'Required parameter requestParameters.updatePasswordRequest was null or undefined when calling updatePassword.',
        );
      const n = { 'Content-Type': 'application/json' };
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          e = yield t('http-bearer', []);
        e && (n.Authorization = `Bearer ${e}`);
      }
      const a = yield this.request(
        {
          path: '/user/password',
          method: 'POST',
          headers: n,
          query: {},
          body: t.updatePasswordRequest,
        },
        e,
      );
      return new X(a);
    });
  }
  updatePassword(t, e) {
    return tt(this, void 0, void 0, function* () {
      yield this.updatePasswordRaw({ updatePasswordRequest: t }, e);
    });
  }
}
var nt =
  (globalThis && globalThis.__awaiter) ||
  function (t, e, n, a) {
    return new (n || (n = Promise))(function (i, r) {
      function s(t) {
        try {
          c(a.next(t));
        } catch (e) {
          r(e);
        }
      }
      function o(t) {
        try {
          c(a.throw(t));
        } catch (e) {
          r(e);
        }
      }
      function c(t) {
        var e;
        t.done
          ? i(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(s, o);
      }
      c((a = a.apply(t, e || [])).next());
    });
  };
class at extends B {
  getGameLogsByGameIdRaw(t, e) {
    return nt(this, void 0, void 0, function* () {
      if (null === t.gameId || void 0 === t.gameId)
        throw new Y(
          'gameId',
          'Required parameter requestParameters.gameId was null or undefined when calling getGameLogsByGameId.',
        );
      const n = {};
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          e = yield t('http-bearer', []);
        e && (n.Authorization = `Bearer ${e}`);
      }
      const a = yield this.request(
        {
          path: '/games/{gameId}/logs'.replace(
            '{gameId}',
            encodeURIComponent(String(t.gameId)),
          ),
          method: 'GET',
          headers: n,
          query: {},
        },
        e,
      );
      return new $(a);
    });
  }
  getGameLogsByGameId(t, e) {
    return nt(this, void 0, void 0, function* () {
      const n = yield this.getGameLogsByGameIdRaw({ gameId: t }, e);
      return yield n.value();
    });
  }
}
var it =
  (globalThis && globalThis.__awaiter) ||
  function (t, e, n, a) {
    return new (n || (n = Promise))(function (i, r) {
      function s(t) {
        try {
          c(a.next(t));
        } catch (e) {
          r(e);
        }
      }
      function o(t) {
        try {
          c(a.throw(t));
        } catch (e) {
          r(e);
        }
      }
      function c(t) {
        var e;
        t.done
          ? i(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(s, o);
      }
      c((a = a.apply(t, e || [])).next());
    });
  };
class rt extends B {
  getLeaderboardRaw(t, e) {
    return it(this, void 0, void 0, function* () {
      const n = {};
      void 0 !== t.page && (n.page = t.page),
        void 0 !== t.size && (n.size = t.size);
      const a = {};
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          e = yield t('http-bearer', []);
        e && (a.Authorization = `Bearer ${e}`);
      }
      const i = yield this.request(
        { path: '/leaderboard', method: 'GET', headers: a, query: n },
        e,
      );
      return new W(i);
    });
  }
  getLeaderboard(t, e, n) {
    return it(this, void 0, void 0, function* () {
      const a = yield this.getLeaderboardRaw({ page: t, size: e }, n);
      return yield a.value();
    });
  }
}
var st =
  (globalThis && globalThis.__awaiter) ||
  function (t, e, n, a) {
    return new (n || (n = Promise))(function (i, r) {
      function s(t) {
        try {
          c(a.next(t));
        } catch (e) {
          r(e);
        }
      }
      function o(t) {
        try {
          c(a.throw(t));
        } catch (e) {
          r(e);
        }
      }
      function c(t) {
        var e;
        t.done
          ? i(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(s, o);
      }
      c((a = a.apply(t, e || [])).next());
    });
  };
class ot extends B {
  createMapRevisionRaw(t, e) {
    return st(this, void 0, void 0, function* () {
      if (
        null === t.createMapRevisionRequest ||
        void 0 === t.createMapRevisionRequest
      )
        throw new Y(
          'createMapRevisionRequest',
          'Required parameter requestParameters.createMapRevisionRequest was null or undefined when calling createMapRevision.',
        );
      const n = { 'Content-Type': 'application/json' };
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          e = yield t('http-bearer', []);
        e && (n.Authorization = `Bearer ${e}`);
      }
      const a = yield this.request(
        {
          path: '/user/map/revisions',
          method: 'POST',
          headers: n,
          query: {},
          body: t.createMapRevisionRequest,
        },
        e,
      );
      return new X(a);
    });
  }
  createMapRevision(t, e) {
    return st(this, void 0, void 0, function* () {
      yield this.createMapRevisionRaw({ createMapRevisionRequest: t }, e);
    });
  }
  getLatestMapRaw(t) {
    return st(this, void 0, void 0, function* () {
      const e = {};
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          n = yield t('http-bearer', []);
        n && (e.Authorization = `Bearer ${n}`);
      }
      const n = yield this.request(
        { path: '/user/map/latest', method: 'GET', headers: e, query: {} },
        t,
      );
      return new W(n);
    });
  }
  getLatestMap(t) {
    return st(this, void 0, void 0, function* () {
      const e = yield this.getLatestMapRaw(t);
      return yield e.value();
    });
  }
  getMapRevisionsRaw(t) {
    return st(this, void 0, void 0, function* () {
      const e = {};
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          n = yield t('http-bearer', []);
        n && (e.Authorization = `Bearer ${n}`);
      }
      const n = yield this.request(
        { path: '/user/map/revisions', method: 'GET', headers: e, query: {} },
        t,
      );
      return new W(n);
    });
  }
  getMapRevisions(t) {
    return st(this, void 0, void 0, function* () {
      const e = yield this.getMapRevisionsRaw(t);
      return yield e.value();
    });
  }
  updateLatestMapRaw(t, e) {
    return st(this, void 0, void 0, function* () {
      if (
        null === t.updateLatestMapRequest ||
        void 0 === t.updateLatestMapRequest
      )
        throw new Y(
          'updateLatestMapRequest',
          'Required parameter requestParameters.updateLatestMapRequest was null or undefined when calling updateLatestMap.',
        );
      const n = { 'Content-Type': 'application/json' };
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          e = yield t('http-bearer', []);
        e && (n.Authorization = `Bearer ${e}`);
      }
      const a = yield this.request(
        {
          path: '/user/map/latest',
          method: 'POST',
          headers: n,
          query: {},
          body: t.updateLatestMapRequest,
        },
        e,
      );
      return new X(a);
    });
  }
  updateLatestMap(t, e) {
    return st(this, void 0, void 0, function* () {
      yield this.updateLatestMapRaw({ updateLatestMapRequest: t }, e);
    });
  }
}
var ct =
  (globalThis && globalThis.__awaiter) ||
  function (t, e, n, a) {
    return new (n || (n = Promise))(function (i, r) {
      function s(t) {
        try {
          c(a.next(t));
        } catch (e) {
          r(e);
        }
      }
      function o(t) {
        try {
          c(a.throw(t));
        } catch (e) {
          r(e);
        }
      }
      function c(t) {
        var e;
        t.done
          ? i(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(s, o);
      }
      c((a = a.apply(t, e || [])).next());
    });
  };
class lt extends B {
  createMatchRaw(t, e) {
    return ct(this, void 0, void 0, function* () {
      if (null === t.createMatchRequest || void 0 === t.createMatchRequest)
        throw new Y(
          'createMatchRequest',
          'Required parameter requestParameters.createMatchRequest was null or undefined when calling createMatch.',
        );
      const n = { 'Content-Type': 'application/json' };
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          e = yield t('http-bearer', []);
        e && (n.Authorization = `Bearer ${e}`);
      }
      const a = yield this.request(
        {
          path: '/user/matches',
          method: 'POST',
          headers: n,
          query: {},
          body: t.createMatchRequest,
        },
        e,
      );
      return new X(a);
    });
  }
  createMatch(t, e) {
    return ct(this, void 0, void 0, function* () {
      yield this.createMatchRaw({ createMatchRequest: t }, e);
    });
  }
  getTopMatchesRaw(t) {
    return ct(this, void 0, void 0, function* () {
      const e = {};
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          n = yield t('http-bearer', []);
        n && (e.Authorization = `Bearer ${n}`);
      }
      const n = yield this.request(
        { path: '/top-matches', method: 'GET', headers: e, query: {} },
        t,
      );
      return new W(n);
    });
  }
  getTopMatches(t) {
    return ct(this, void 0, void 0, function* () {
      const e = yield this.getTopMatchesRaw(t);
      return yield e.value();
    });
  }
  getUserMatchesRaw(t) {
    return ct(this, void 0, void 0, function* () {
      const e = {};
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          n = yield t('http-bearer', []);
        n && (e.Authorization = `Bearer ${n}`);
      }
      const n = yield this.request(
        { path: '/user/matches', method: 'GET', headers: e, query: {} },
        t,
      );
      return new W(n);
    });
  }
  getUserMatches(t) {
    return ct(this, void 0, void 0, function* () {
      const e = yield this.getUserMatchesRaw(t);
      return yield e.value();
    });
  }
}
var ut =
  (globalThis && globalThis.__awaiter) ||
  function (t, e, n, a) {
    return new (n || (n = Promise))(function (i, r) {
      function s(t) {
        try {
          c(a.next(t));
        } catch (e) {
          r(e);
        }
      }
      function o(t) {
        try {
          c(a.throw(t));
        } catch (e) {
          r(e);
        }
      }
      function c(t) {
        var e;
        t.done
          ? i(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(s, o);
      }
      c((a = a.apply(t, e || [])).next());
    });
  };
class dt extends B {
  getAllNotificationsRaw(t) {
    return ut(this, void 0, void 0, function* () {
      const e = {};
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          n = yield t('http-bearer', []);
        n && (e.Authorization = `Bearer ${n}`);
      }
      const n = yield this.request(
        { path: '/user/notifications', method: 'GET', headers: e, query: {} },
        t,
      );
      return new W(n);
    });
  }
  getAllNotifications(t) {
    return ut(this, void 0, void 0, function* () {
      const e = yield this.getAllNotificationsRaw(t);
      return yield e.value();
    });
  }
  saveNotificationReadStatusRaw(t, e) {
    return ut(this, void 0, void 0, function* () {
      if (null === t.notificationId || void 0 === t.notificationId)
        throw new Y(
          'notificationId',
          'Required parameter requestParameters.notificationId was null or undefined when calling saveNotificationReadStatus.',
        );
      if (null === t.body || void 0 === t.body)
        throw new Y(
          'body',
          'Required parameter requestParameters.body was null or undefined when calling saveNotificationReadStatus.',
        );
      const n = { 'Content-Type': 'application/json' };
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          e = yield t('http-bearer', []);
        e && (n.Authorization = `Bearer ${e}`);
      }
      const a = yield this.request(
        {
          path: '/user/notifications/{notificationId}/read'.replace(
            '{notificationId}',
            encodeURIComponent(String(t.notificationId)),
          ),
          method: 'PUT',
          headers: n,
          query: {},
          body: t.body,
        },
        e,
      );
      return new X(a);
    });
  }
  saveNotificationReadStatus(t, e, n) {
    return ut(this, void 0, void 0, function* () {
      yield this.saveNotificationReadStatusRaw(
        { notificationId: t, body: e },
        n,
      );
    });
  }
}
var ht,
  ft,
  pt,
  mt,
  gt,
  vt,
  yt,
  bt,
  wt,
  _t,
  Et =
    (globalThis && globalThis.__awaiter) ||
    function (t, e, n, a) {
      return new (n || (n = Promise))(function (i, r) {
        function s(t) {
          try {
            c(a.next(t));
          } catch (e) {
            r(e);
          }
        }
        function o(t) {
          try {
            c(a.throw(t));
          } catch (e) {
            r(e);
          }
        }
        function c(t) {
          var e;
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  })).then(s, o);
        }
        c((a = a.apply(t, e || [])).next());
      });
    };
class xt extends B {
  activateUserRaw(t, e) {
    return Et(this, void 0, void 0, function* () {
      if (null === t.userId || void 0 === t.userId)
        throw new Y(
          'userId',
          'Required parameter requestParameters.userId was null or undefined when calling activateUser.',
        );
      if (null === t.activateUserRequest || void 0 === t.activateUserRequest)
        throw new Y(
          'activateUserRequest',
          'Required parameter requestParameters.activateUserRequest was null or undefined when calling activateUser.',
        );
      const n = { 'Content-Type': 'application/json' },
        a = yield this.request(
          {
            path: '/users/{userId}/activate'.replace(
              '{userId}',
              encodeURIComponent(String(t.userId)),
            ),
            method: 'POST',
            headers: n,
            query: {},
            body: t.activateUserRequest,
          },
          e,
        );
      return new X(a);
    });
  }
  activateUser(t, e, n) {
    return Et(this, void 0, void 0, function* () {
      yield this.activateUserRaw({ userId: t, activateUserRequest: e }, n);
    });
  }
  getRatingHistoryRaw(t, e) {
    return Et(this, void 0, void 0, function* () {
      if (null === t.userId || void 0 === t.userId)
        throw new Y(
          'userId',
          'Required parameter requestParameters.userId was null or undefined when calling getRatingHistory.',
        );
      const n = {};
      if (this.configuration && this.configuration.accessToken) {
        const t = this.configuration.accessToken,
          e = yield t('http-bearer', []);
        e && (n.Authorization = `Bearer ${e}`);
      }
      const a = yield this.request(
        {
          path: '/users/{userId}/ratingHistory'.replace(
            '{userId}',
            encodeURIComponent(String(t.userId)),
          ),
          method: 'GET',
          headers: n,
          query: {},
        },
        e,
      );
      return new W(a);
    });
  }
  getRatingHistory(t, e) {
    return Et(this, void 0, void 0, function* () {
      const n = yield this.getRatingHistoryRaw({ userId: t }, e);
      return yield n.value();
    });
  }
  registerRaw(t, e) {
    return Et(this, void 0, void 0, function* () {
      if (null === t.registerUserRequest || void 0 === t.registerUserRequest)
        throw new Y(
          'registerUserRequest',
          'Required parameter requestParameters.registerUserRequest was null or undefined when calling register.',
        );
      const n = { 'Content-Type': 'application/json' },
        a = yield this.request(
          {
            path: '/users',
            method: 'POST',
            headers: n,
            query: {},
            body: t.registerUserRequest,
          },
          e,
        );
      return new X(a);
    });
  }
  register(t, e) {
    return Et(this, void 0, void 0, function* () {
      yield this.registerRaw({ registerUserRequest: t }, e);
    });
  }
}
((ft = ht || (ht = {})).Authenticated = 'AUTHENTICATED'),
  (ft.ProfileIncomplete = 'PROFILE_INCOMPLETE'),
  (ft.ActivationPending = 'ACTIVATION_PENDING'),
  ((mt = pt || (pt = {})).Idle = 'IDLE'),
  (mt.Executing = 'EXECUTING'),
  (mt.Executed = 'EXECUTED'),
  (mt.ExecuteError = 'EXECUTE_ERROR'),
  ((vt = gt || (gt = {})).C = 'C'),
  (vt.Cpp = 'CPP'),
  (vt.Java = 'JAVA'),
  (vt.Python = 'PYTHON'),
  ((bt = yt || (yt = {})).Self = 'SELF'),
  (bt.Manual = 'MANUAL'),
  (bt.Auto = 'AUTO'),
  ((_t = wt || (wt = {})).Player1 = 'PLAYER1'),
  (_t.Player2 = 'PLAYER2'),
  (_t.Tie = 'TIE');
const kt =
    'https://stoplight.io/mocks/rinish-api-testbed/codecharacter/14036190',
  Tt = 'YOUR SITE KEY';
class St extends Error {
  constructor(t, e) {
    super(e),
      o(this, 'status'),
      o(this, 'message'),
      (this.status = t),
      (this.message = e);
  }
}
const Pt = new G({
    basePath: kt,
    headers: {},
    middleware: [
      {
        pre: async t => {
          const o = t.init.headers;
          var c, l;
          return (
            (t.init.headers =
              ((c = ((t, e) => {
                for (var n in e || (e = {})) i.call(e, n) && s(t, n, e[n]);
                if (a) for (var n of a(e)) r.call(e, n) && s(t, n, e[n]);
                return t;
              })({}, o)),
              (l = {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
              }),
              e(c, n(l)))),
            t
          );
        },
        post: async t => {
          var e;
          const n = t.response.status;
          if (401 === n)
            (window.location.href = 'http://localhost:3000/#/login'),
              window.history.forward();
          else if (403 === n) {
            new K(Pt).getAuthStatus().then(t => {
              const { status: e } = t;
              'PROFILE_INCOMPLETE' === e &&
                ((window.location.href =
                  'http://localhost:3000/#/incomplete-profile'),
                window.history.forward());
            });
          }
          if (n >= 400) {
            const a = await t.response.json();
            throw new St(
              n,
              null != (e = null == a ? void 0 : a.message)
                ? e
                : 'Unknown error',
            );
          }
          return t.response;
        },
      },
    ],
  }),
  Ot = new G({
    basePath: kt,
    headers: {},
    middleware: [
      {
        post: async t => {
          var e;
          const n = t.response.status;
          if (n >= 400) {
            const a = await t.response.json();
            throw new St(
              n,
              null != (e = null == a ? void 0 : a.message)
                ? e
                : 'Unknown error',
            );
          }
          return t.response;
        },
      },
    ],
  });
var Rt = Object.defineProperty,
  Ct = Object.defineProperties,
  Nt = Object.getOwnPropertyDescriptors,
  At = Object.getOwnPropertySymbols,
  It = Object.prototype.hasOwnProperty,
  jt = Object.prototype.propertyIsEnumerable,
  Dt = (t, e, n) =>
    e in t
      ? Rt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  Mt = (t, e) => {
    for (var n in e || (e = {})) It.call(e, n) && Dt(t, n, e[n]);
    if (At) for (var n of At(e)) jt.call(e, n) && Dt(t, n, e[n]);
    return t;
  },
  Lt = (t, e) => Ct(t, Nt(e)),
  qt = (t, e) => {
    var n = {};
    for (var a in t) It.call(t, a) && e.indexOf(a) < 0 && (n[a] = t[a]);
    if (null != t && At)
      for (var a of At(t)) e.indexOf(a) < 0 && jt.call(t, a) && (n[a] = t[a]);
    return n;
  },
  zt = (t, e, n) => (Dt(t, 'symbol' != typeof e ? e + '' : e, n), n),
  Ut = {
    prefix: 'fas',
    iconName: 'compress',
    icon: [
      448,
      512,
      [],
      'f066',
      'M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z',
    ],
  },
  Ft = {
    prefix: 'fas',
    iconName: 'expand',
    icon: [
      448,
      512,
      [],
      'f065',
      'M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z',
    ],
  },
  Ht = {
    prefix: 'fas',
    iconName: 'minus',
    icon: [
      448,
      512,
      [],
      'f068',
      'M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z',
    ],
  },
  Bt = {
    prefix: 'fas',
    iconName: 'pause',
    icon: [
      448,
      512,
      [],
      'f04c',
      'M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z',
    ],
  },
  Yt = {
    prefix: 'fas',
    iconName: 'play',
    icon: [
      448,
      512,
      [],
      'f04b',
      'M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z',
    ],
  },
  Gt = {
    prefix: 'fas',
    iconName: 'plus',
    icon: [
      448,
      512,
      [],
      'f067',
      'M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z',
    ],
  },
  Vt = {
    prefix: 'fas',
    iconName: 'redo',
    icon: [
      512,
      512,
      [],
      'f01e',
      'M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z',
    ],
  };
function Wt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e &&
      (a = a.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      n.push.apply(n, a);
  }
  return n;
}
function Xt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? Wt(Object(n), !0).forEach(function (e) {
          Kt(t, e, n[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : Wt(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
  }
  return t;
}
function $t(t) {
  return ($t =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function Jt(t, e) {
  for (var n = 0; n < e.length; n++) {
    var a = e[n];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      'value' in a && (a.writable = !0),
      Object.defineProperty(t, a.key, a);
  }
}
function Kt(t, e, n) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function Zt(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      var n =
        null == t
          ? null
          : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
            t['@@iterator'];
      if (null == n) return;
      var a,
        i,
        r = [],
        s = !0,
        o = !1;
      try {
        for (
          n = n.call(t);
          !(s = (a = n.next()).done) && (r.push(a.value), !e || r.length !== e);
          s = !0
        );
      } catch (c) {
        (o = !0), (i = c);
      } finally {
        try {
          s || null == n.return || n.return();
        } finally {
          if (o) throw i;
        }
      }
      return r;
    })(t, e) ||
    te(t, e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function Qt(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return ee(t);
    })(t) ||
    (function (t) {
      if (
        ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t['@@iterator']
      )
        return Array.from(t);
    })(t) ||
    te(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function te(t, e) {
  if (t) {
    if ('string' == typeof t) return ee(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return (
      'Object' === n && t.constructor && (n = t.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(t)
        : 'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? ee(t, e)
        : void 0
    );
  }
}
function ee(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
  return a;
}
var ne = function () {},
  ae = {},
  ie = {},
  re = null,
  se = { mark: ne, measure: ne };
try {
  'undefined' != typeof window && (ae = window),
    'undefined' != typeof document && (ie = document),
    'undefined' != typeof MutationObserver && (re = MutationObserver),
    'undefined' != typeof performance && (se = performance);
} catch (yc) {}
var oe = (ae.navigator || {}).userAgent,
  ce = void 0 === oe ? '' : oe,
  le = ae,
  ue = ie,
  de = re,
  he = se;
le.document;
var fe =
    !!ue.documentElement &&
    !!ue.head &&
    'function' == typeof ue.addEventListener &&
    'function' == typeof ue.createElement,
  pe = ~ce.indexOf('MSIE') || ~ce.indexOf('Trident/'),
  me = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  ge = (function () {
    try {
      return !0;
    } catch (yc) {
      return !1;
    }
  })(),
  ve = {
    fas: 'solid',
    'fa-solid': 'solid',
    far: 'regular',
    'fa-regular': 'regular',
    fal: 'light',
    'fa-light': 'light',
    fat: 'thin',
    'fa-thin': 'thin',
    fad: 'duotone',
    'fa-duotone': 'duotone',
    fab: 'brands',
    'fa-brands': 'brands',
    fak: 'kit',
    'fa-kit': 'kit',
    fa: 'solid',
  },
  ye = {
    solid: 'fas',
    regular: 'far',
    light: 'fal',
    thin: 'fat',
    duotone: 'fad',
    brands: 'fab',
    kit: 'fak',
  },
  be = {
    fab: 'fa-brands',
    fad: 'fa-duotone',
    fak: 'fa-kit',
    fal: 'fa-light',
    far: 'fa-regular',
    fas: 'fa-solid',
    fat: 'fa-thin',
  },
  we = {
    'fa-brands': 'fab',
    'fa-duotone': 'fad',
    'fa-kit': 'fak',
    'fa-light': 'fal',
    'fa-regular': 'far',
    'fa-solid': 'fas',
    'fa-thin': 'fat',
  },
  _e = /fa[srltdbk\-\ ]/,
  Ee =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,
  xe = { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' },
  ke = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Te = ke.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  Se = [
    'class',
    'data-prefix',
    'data-icon',
    'data-fa-transform',
    'data-fa-mask',
  ],
  Pe = 'duotone-group',
  Oe = 'swap-opacity',
  Re = 'primary',
  Ce = 'secondary',
  Ne = []
    .concat(Qt(Object.keys(ye)), [
      '2xs',
      'xs',
      'sm',
      'lg',
      'xl',
      '2xl',
      'beat',
      'border',
      'fade',
      'beat-fade',
      'bounce',
      'flip-both',
      'flip-horizontal',
      'flip-vertical',
      'flip',
      'fw',
      'inverse',
      'layers-counter',
      'layers-text',
      'layers',
      'li',
      'pull-left',
      'pull-right',
      'pulse',
      'rotate-180',
      'rotate-270',
      'rotate-90',
      'rotate-by',
      'shake',
      'spin-pulse',
      'spin-reverse',
      'spin',
      'stack-1x',
      'stack-2x',
      'stack',
      'ul',
      Pe,
      Oe,
      Re,
      Ce,
    ])
    .concat(
      ke.map(function (t) {
        return ''.concat(t, 'x');
      }),
    )
    .concat(
      Te.map(function (t) {
        return 'w-'.concat(t);
      }),
    ),
  Ae = le.FontAwesomeConfig || {};
if (ue && 'function' == typeof ue.querySelector) {
  [
    ['data-family-prefix', 'familyPrefix'],
    ['data-style-default', 'styleDefault'],
    ['data-replacement-class', 'replacementClass'],
    ['data-auto-replace-svg', 'autoReplaceSvg'],
    ['data-auto-add-css', 'autoAddCss'],
    ['data-auto-a11y', 'autoA11y'],
    ['data-search-pseudo-elements', 'searchPseudoElements'],
    ['data-observe-mutations', 'observeMutations'],
    ['data-mutate-approach', 'mutateApproach'],
    ['data-keep-original-source', 'keepOriginalSource'],
    ['data-measure-performance', 'measurePerformance'],
    ['data-show-missing-icons', 'showMissingIcons'],
  ].forEach(function (t) {
    var e = Zt(t, 2),
      n = e[0],
      a = e[1],
      i = (function (t) {
        return '' === t || ('false' !== t && ('true' === t || t));
      })(
        (function (t) {
          var e = ue.querySelector('script[' + t + ']');
          if (e) return e.getAttribute(t);
        })(n),
      );
    null != i && (Ae[a] = i);
  });
}
var Ie = Xt(
  Xt(
    {},
    {
      familyPrefix: 'fa',
      styleDefault: 'solid',
      replacementClass: 'svg-inline--fa',
      autoReplaceSvg: !0,
      autoAddCss: !0,
      autoA11y: !0,
      searchPseudoElements: !1,
      observeMutations: !0,
      mutateApproach: 'async',
      keepOriginalSource: !0,
      measurePerformance: !1,
      showMissingIcons: !0,
    },
  ),
  Ae,
);
Ie.autoReplaceSvg || (Ie.observeMutations = !1);
var je = {};
Object.keys(Ie).forEach(function (t) {
  Object.defineProperty(je, t, {
    enumerable: !0,
    set: function (e) {
      (Ie[t] = e),
        De.forEach(function (t) {
          return t(je);
        });
    },
    get: function () {
      return Ie[t];
    },
  });
}),
  (le.FontAwesomeConfig = je);
var De = [];
var Me = 16,
  Le = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function qe() {
  for (var t = 12, e = ''; t-- > 0; )
    e += '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[
      (62 * Math.random()) | 0
    ];
  return e;
}
function ze(t) {
  for (var e = [], n = (t || []).length >>> 0; n--; ) e[n] = t[n];
  return e;
}
function Ue(t) {
  return t.classList
    ? ze(t.classList)
    : (t.getAttribute('class') || '').split(' ').filter(function (t) {
        return t;
      });
}
function Fe(t) {
  return ''
    .concat(t)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function He(t) {
  return Object.keys(t || {}).reduce(function (e, n) {
    return e + ''.concat(n, ': ').concat(t[n].trim(), ';');
  }, '');
}
function Be(t) {
  return (
    t.size !== Le.size ||
    t.x !== Le.x ||
    t.y !== Le.y ||
    t.rotate !== Le.rotate ||
    t.flipX ||
    t.flipY
  );
}
function Ye() {
  var t = 'fa',
    e = 'svg-inline--fa',
    n = je.familyPrefix,
    a = je.replacementClass,
    i =
      ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
  if (n !== t || a !== e) {
    var r = new RegExp('\\.'.concat(t, '\\-'), 'g'),
      s = new RegExp('\\--'.concat(t, '\\-'), 'g'),
      o = new RegExp('\\.'.concat(e), 'g');
    i = i
      .replace(r, '.'.concat(n, '-'))
      .replace(s, '--'.concat(n, '-'))
      .replace(o, '.'.concat(a));
  }
  return i;
}
var Ge = !1;
function Ve() {
  je.autoAddCss &&
    !Ge &&
    (!(function (t) {
      if (t && fe) {
        var e = ue.createElement('style');
        e.setAttribute('type', 'text/css'), (e.innerHTML = t);
        for (
          var n = ue.head.childNodes, a = null, i = n.length - 1;
          i > -1;
          i--
        ) {
          var r = n[i],
            s = (r.tagName || '').toUpperCase();
          ['STYLE', 'LINK'].indexOf(s) > -1 && (a = r);
        }
        ue.head.insertBefore(e, a);
      }
    })(Ye()),
    (Ge = !0));
}
var We = {
    mixout: function () {
      return { dom: { css: Ye, insertCss: Ve } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          Ve();
        },
        beforeI2svg: function () {
          Ve();
        },
      };
    },
  },
  Xe = le || {};
Xe.___FONT_AWESOME___ || (Xe.___FONT_AWESOME___ = {}),
  Xe.___FONT_AWESOME___.styles || (Xe.___FONT_AWESOME___.styles = {}),
  Xe.___FONT_AWESOME___.hooks || (Xe.___FONT_AWESOME___.hooks = {}),
  Xe.___FONT_AWESOME___.shims || (Xe.___FONT_AWESOME___.shims = []);
var $e = Xe.___FONT_AWESOME___,
  Je = [],
  Ke = !1;
function Ze(t) {
  fe && (Ke ? setTimeout(t, 0) : Je.push(t));
}
function Qe(t) {
  var e = t.tag,
    n = t.attributes,
    a = void 0 === n ? {} : n,
    i = t.children,
    r = void 0 === i ? [] : i;
  return 'string' == typeof t
    ? Fe(t)
    : '<'
        .concat(e, ' ')
        .concat(
          (function (t) {
            return Object.keys(t || {})
              .reduce(function (e, n) {
                return e + ''.concat(n, '="').concat(Fe(t[n]), '" ');
              }, '')
              .trim();
          })(a),
          '>',
        )
        .concat(r.map(Qe).join(''), '</')
        .concat(e, '>');
}
function tn(t, e, n) {
  if (t && t[e] && t[e][n]) return { prefix: e, iconName: n, icon: t[e][n] };
}
fe &&
  ((Ke = (ue.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    ue.readyState,
  )) ||
    ue.addEventListener('DOMContentLoaded', function t() {
      ue.removeEventListener('DOMContentLoaded', t),
        (Ke = 1),
        Je.map(function (t) {
          return t();
        });
    }));
var en = function (t, e, n, a) {
  var i,
    r,
    s,
    o = Object.keys(t),
    c = o.length,
    l =
      void 0 !== a
        ? (function (t, e) {
            return function (n, a, i, r) {
              return t.call(e, n, a, i, r);
            };
          })(e, a)
        : e;
  for (void 0 === n ? ((i = 1), (s = t[o[0]])) : ((i = 0), (s = n)); i < c; i++)
    s = l(s, t[(r = o[i])], r, t);
  return s;
};
function nn(t) {
  var e = (function (t) {
    for (var e = [], n = 0, a = t.length; n < a; ) {
      var i = t.charCodeAt(n++);
      if (i >= 55296 && i <= 56319 && n < a) {
        var r = t.charCodeAt(n++);
        56320 == (64512 & r)
          ? e.push(((1023 & i) << 10) + (1023 & r) + 65536)
          : (e.push(i), n--);
      } else e.push(i);
    }
    return e;
  })(t);
  return 1 === e.length ? e[0].toString(16) : null;
}
function an(t) {
  return Object.keys(t).reduce(function (e, n) {
    var a = t[n];
    return !!a.icon ? (e[a.iconName] = a.icon) : (e[n] = a), e;
  }, {});
}
function rn(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    a = n.skipHooks,
    i = void 0 !== a && a,
    r = an(e);
  'function' != typeof $e.hooks.addPack || i
    ? ($e.styles[t] = Xt(Xt({}, $e.styles[t] || {}), r))
    : $e.hooks.addPack(t, an(e)),
    'fas' === t && rn('fa', e);
}
var sn = $e.styles,
  on = $e.shims,
  cn = Object.values(be),
  ln = null,
  un = {},
  dn = {},
  hn = {},
  fn = {},
  pn = {},
  mn = Object.keys(ve);
function gn(t, e) {
  var n,
    a = e.split('-'),
    i = a[0],
    r = a.slice(1).join('-');
  return i !== t || '' === r || ((n = r), ~Ne.indexOf(n)) ? null : r;
}
var vn,
  yn = function () {
    var t = function (t) {
      return en(
        sn,
        function (e, n, a) {
          return (e[a] = en(n, t, {})), e;
        },
        {},
      );
    };
    (un = t(function (t, e, n) {
      (e[3] && (t[e[3]] = n), e[2]) &&
        e[2]
          .filter(function (t) {
            return 'number' == typeof t;
          })
          .forEach(function (e) {
            t[e.toString(16)] = n;
          });
      return t;
    })),
      (dn = t(function (t, e, n) {
        ((t[n] = n), e[2]) &&
          e[2]
            .filter(function (t) {
              return 'string' == typeof t;
            })
            .forEach(function (e) {
              t[e] = n;
            });
        return t;
      })),
      (pn = t(function (t, e, n) {
        var a = e[2];
        return (
          (t[n] = n),
          a.forEach(function (e) {
            t[e] = n;
          }),
          t
        );
      }));
    var e = 'far' in sn || je.autoFetchSvg,
      n = en(
        on,
        function (t, n) {
          var a = n[0],
            i = n[1],
            r = n[2];
          return (
            'far' !== i || e || (i = 'fas'),
            'string' == typeof a && (t.names[a] = { prefix: i, iconName: r }),
            'number' == typeof a &&
              (t.unicodes[a.toString(16)] = { prefix: i, iconName: r }),
            t
          );
        },
        { names: {}, unicodes: {} },
      );
    (hn = n.names), (fn = n.unicodes), (ln = xn(je.styleDefault));
  };
function bn(t, e) {
  return (un[t] || {})[e];
}
function wn(t, e) {
  return (pn[t] || {})[e];
}
function _n(t) {
  return hn[t] || { prefix: null, iconName: null };
}
function En() {
  return ln;
}
(vn = function (t) {
  ln = xn(t.styleDefault);
}),
  De.push(vn),
  yn();
function xn(t) {
  var e = ye[t] || ye[ve[t]],
    n = t in $e.styles ? t : null;
  return e || n || null;
}
function kn(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = e.skipLookups,
    a = void 0 !== n && n,
    i = null,
    r = t.reduce(
      function (t, e) {
        var n = gn(je.familyPrefix, e);
        if (
          (sn[e]
            ? ((e = cn.includes(e) ? we[e] : e), (i = e), (t.prefix = e))
            : mn.indexOf(e) > -1
            ? ((i = e), (t.prefix = xn(e)))
            : n
            ? (t.iconName = n)
            : e !== je.replacementClass && t.rest.push(e),
          !a && t.prefix && t.iconName)
        ) {
          var r = 'fa' === i ? _n(t.iconName) : {},
            s = wn(t.prefix, t.iconName);
          r.prefix && (i = null),
            (t.iconName = r.iconName || s || t.iconName),
            (t.prefix = r.prefix || t.prefix),
            'far' !== t.prefix ||
              sn.far ||
              !sn.fas ||
              je.autoFetchSvg ||
              (t.prefix = 'fas');
        }
        return t;
      },
      { prefix: null, iconName: null, rest: [] },
    );
  return ('fa' !== r.prefix && 'fa' !== i) || (r.prefix = En() || 'fas'), r;
}
var Tn = (function () {
    function t() {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      })(this, t),
        (this.definitions = {});
    }
    var e, n, a;
    return (
      (e = t),
      (n = [
        {
          key: 'add',
          value: function () {
            for (
              var t = this, e = arguments.length, n = new Array(e), a = 0;
              a < e;
              a++
            )
              n[a] = arguments[a];
            var i = n.reduce(this._pullDefinitions, {});
            Object.keys(i).forEach(function (e) {
              (t.definitions[e] = Xt(Xt({}, t.definitions[e] || {}), i[e])),
                rn(e, i[e]);
              var n = be[e];
              n && rn(n, i[e]), yn();
            });
          },
        },
        {
          key: 'reset',
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: '_pullDefinitions',
          value: function (t, e) {
            var n = e.prefix && e.iconName && e.icon ? { 0: e } : e;
            return (
              Object.keys(n).map(function (e) {
                var a = n[e],
                  i = a.prefix,
                  r = a.iconName,
                  s = a.icon,
                  o = s[2];
                t[i] || (t[i] = {}),
                  o.length > 0 &&
                    o.forEach(function (e) {
                      'string' == typeof e && (t[i][e] = s);
                    }),
                  (t[i][r] = s);
              }),
              t
            );
          },
        },
      ]),
      n && Jt(e.prototype, n),
      a && Jt(e, a),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      t
    );
  })(),
  Sn = [],
  Pn = {},
  On = {},
  Rn = Object.keys(On);
function Cn(t, e) {
  for (
    var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2;
    i < n;
    i++
  )
    a[i - 2] = arguments[i];
  var r = Pn[t] || [];
  return (
    r.forEach(function (t) {
      e = t.apply(null, [e].concat(a));
    }),
    e
  );
}
function Nn(t) {
  for (
    var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), a = 1;
    a < e;
    a++
  )
    n[a - 1] = arguments[a];
  var i = Pn[t] || [];
  i.forEach(function (t) {
    t.apply(null, n);
  });
}
function An() {
  var t = arguments[0],
    e = Array.prototype.slice.call(arguments, 1);
  return On[t] ? On[t].apply(null, e) : void 0;
}
function In(t) {
  'fa' === t.prefix && (t.prefix = 'fas');
  var e = t.iconName,
    n = t.prefix || En();
  if (e)
    return (e = wn(n, e) || e), tn(jn.definitions, n, e) || tn($e.styles, n, e);
}
var jn = new Tn(),
  Dn = {
    i2svg: function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return fe
        ? (Nn('beforeI2svg', t), An('pseudoElements2svg', t), An('i2svg', t))
        : Promise.reject('Operation requires a DOM of some kind.');
    },
    watch: function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = t.autoReplaceSvgRoot;
      !1 === je.autoReplaceSvg && (je.autoReplaceSvg = !0),
        (je.observeMutations = !0),
        Ze(function () {
          Ln({ autoReplaceSvgRoot: e }), Nn('watch', t);
        });
    },
  },
  Mn = {
    noAuto: function () {
      (je.autoReplaceSvg = !1), (je.observeMutations = !1), Nn('noAuto');
    },
    config: je,
    dom: Dn,
    parse: {
      icon: function (t) {
        if (null === t) return null;
        if ('object' === $t(t) && t.prefix && t.iconName)
          return {
            prefix: t.prefix,
            iconName: wn(t.prefix, t.iconName) || t.iconName,
          };
        if (Array.isArray(t) && 2 === t.length) {
          var e = 0 === t[1].indexOf('fa-') ? t[1].slice(3) : t[1],
            n = xn(t[0]);
          return { prefix: n, iconName: wn(n, e) || e };
        }
        if (
          'string' == typeof t &&
          (t.indexOf(''.concat(je.familyPrefix, '-')) > -1 || t.match(_e))
        ) {
          var a = kn(t.split(' '), { skipLookups: !0 });
          return {
            prefix: a.prefix || En(),
            iconName: wn(a.prefix, a.iconName) || a.iconName,
          };
        }
        if ('string' == typeof t) {
          var i = En();
          return { prefix: i, iconName: wn(i, t) || t };
        }
      },
    },
    library: jn,
    findIconDefinition: In,
    toHtml: Qe,
  },
  Ln = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = t.autoReplaceSvgRoot,
      n = void 0 === e ? ue : e;
    (Object.keys($e.styles).length > 0 || je.autoFetchSvg) &&
      fe &&
      je.autoReplaceSvg &&
      Mn.dom.i2svg({ node: n });
  };
function qn(t, e) {
  return (
    Object.defineProperty(t, 'abstract', { get: e }),
    Object.defineProperty(t, 'html', {
      get: function () {
        return t.abstract.map(function (t) {
          return Qe(t);
        });
      },
    }),
    Object.defineProperty(t, 'node', {
      get: function () {
        if (fe) {
          var e = ue.createElement('div');
          return (e.innerHTML = t.html), e.children;
        }
      },
    }),
    t
  );
}
function zn(t) {
  var e = t.icons,
    n = e.main,
    a = e.mask,
    i = t.prefix,
    r = t.iconName,
    s = t.transform,
    o = t.symbol,
    c = t.title,
    l = t.maskId,
    u = t.titleId,
    d = t.extra,
    h = t.watchable,
    f = void 0 !== h && h,
    p = a.found ? a : n,
    m = p.width,
    g = p.height,
    v = 'fak' === i,
    y = [
      je.replacementClass,
      r ? ''.concat(je.familyPrefix, '-').concat(r) : '',
    ]
      .filter(function (t) {
        return -1 === d.classes.indexOf(t);
      })
      .filter(function (t) {
        return '' !== t || !!t;
      })
      .concat(d.classes)
      .join(' '),
    b = {
      children: [],
      attributes: Xt(
        Xt({}, d.attributes),
        {},
        {
          'data-prefix': i,
          'data-icon': r,
          class: y,
          role: d.attributes.role || 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 '.concat(m, ' ').concat(g),
        },
      ),
    },
    w =
      v && !~d.classes.indexOf('fa-fw')
        ? { width: ''.concat((m / g) * 16 * 0.0625, 'em') }
        : {};
  f && (b.attributes['data-fa-i2svg'] = ''),
    c &&
      (b.children.push({
        tag: 'title',
        attributes: {
          id: b.attributes['aria-labelledby'] || 'title-'.concat(u || qe()),
        },
        children: [c],
      }),
      delete b.attributes.title);
  var _ = Xt(
      Xt({}, b),
      {},
      {
        prefix: i,
        iconName: r,
        main: n,
        mask: a,
        maskId: l,
        transform: s,
        symbol: o,
        styles: Xt(Xt({}, w), d.styles),
      },
    ),
    E =
      a.found && n.found
        ? An('generateAbstractMask', _) || { children: [], attributes: {} }
        : An('generateAbstractIcon', _) || { children: [], attributes: {} },
    x = E.children,
    k = E.attributes;
  return (
    (_.children = x),
    (_.attributes = k),
    o
      ? (function (t) {
          var e = t.prefix,
            n = t.iconName,
            a = t.children,
            i = t.attributes,
            r = t.symbol,
            s =
              !0 === r
                ? ''.concat(e, '-').concat(je.familyPrefix, '-').concat(n)
                : r;
          return [
            {
              tag: 'svg',
              attributes: { style: 'display: none;' },
              children: [
                {
                  tag: 'symbol',
                  attributes: Xt(Xt({}, i), {}, { id: s }),
                  children: a,
                },
              ],
            },
          ];
        })(_)
      : (function (t) {
          var e = t.children,
            n = t.main,
            a = t.mask,
            i = t.attributes,
            r = t.styles,
            s = t.transform;
          if (Be(s) && n.found && !a.found) {
            var o = { x: n.width / n.height / 2, y: 0.5 };
            i.style = He(
              Xt(
                Xt({}, r),
                {},
                {
                  'transform-origin': ''
                    .concat(o.x + s.x / 16, 'em ')
                    .concat(o.y + s.y / 16, 'em'),
                },
              ),
            );
          }
          return [{ tag: 'svg', attributes: i, children: e }];
        })(_)
  );
}
function Un(t) {
  var e = t.content,
    n = t.width,
    a = t.height,
    i = t.transform,
    r = t.title,
    s = t.extra,
    o = t.watchable,
    c = void 0 !== o && o,
    l = Xt(
      Xt(Xt({}, s.attributes), r ? { title: r } : {}),
      {},
      { class: s.classes.join(' ') },
    );
  c && (l['data-fa-i2svg'] = '');
  var u = Xt({}, s.styles);
  Be(i) &&
    ((u.transform = (function (t) {
      var e = t.transform,
        n = t.width,
        a = void 0 === n ? 16 : n,
        i = t.height,
        r = void 0 === i ? 16 : i,
        s = t.startCentered,
        o = void 0 !== s && s,
        c = '';
      return (
        (c +=
          o && pe
            ? 'translate('
                .concat(e.x / Me - a / 2, 'em, ')
                .concat(e.y / Me - r / 2, 'em) ')
            : o
            ? 'translate(calc(-50% + '
                .concat(e.x / Me, 'em), calc(-50% + ')
                .concat(e.y / Me, 'em)) ')
            : 'translate('.concat(e.x / Me, 'em, ').concat(e.y / Me, 'em) ')),
        (c += 'scale('
          .concat((e.size / Me) * (e.flipX ? -1 : 1), ', ')
          .concat((e.size / Me) * (e.flipY ? -1 : 1), ') ')),
        c + 'rotate('.concat(e.rotate, 'deg) ')
      );
    })({ transform: i, startCentered: !0, width: n, height: a })),
    (u['-webkit-transform'] = u.transform));
  var d = He(u);
  d.length > 0 && (l.style = d);
  var h = [];
  return (
    h.push({ tag: 'span', attributes: l, children: [e] }),
    r &&
      h.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [r] }),
    h
  );
}
function Fn(t) {
  var e = t.content,
    n = t.title,
    a = t.extra,
    i = Xt(
      Xt(Xt({}, a.attributes), n ? { title: n } : {}),
      {},
      { class: a.classes.join(' ') },
    ),
    r = He(a.styles);
  r.length > 0 && (i.style = r);
  var s = [];
  return (
    s.push({ tag: 'span', attributes: i, children: [e] }),
    n &&
      s.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [n] }),
    s
  );
}
var Hn = $e.styles;
function Bn(t) {
  var e = t[0],
    n = t[1],
    a = Zt(t.slice(4), 1)[0];
  return {
    found: !0,
    width: e,
    height: n,
    icon: Array.isArray(a)
      ? {
          tag: 'g',
          attributes: { class: ''.concat(je.familyPrefix, '-').concat(Pe) },
          children: [
            {
              tag: 'path',
              attributes: {
                class: ''.concat(je.familyPrefix, '-').concat(Ce),
                fill: 'currentColor',
                d: a[0],
              },
            },
            {
              tag: 'path',
              attributes: {
                class: ''.concat(je.familyPrefix, '-').concat(Re),
                fill: 'currentColor',
                d: a[1],
              },
            },
          ],
        }
      : { tag: 'path', attributes: { fill: 'currentColor', d: a } },
  };
}
var Yn = { found: !1, width: 512, height: 512 };
function Gn(t, e) {
  var n = e;
  return (
    'fa' === e && null !== je.styleDefault && (e = En()),
    new Promise(function (a, i) {
      if ((An('missingIconAbstract'), 'fa' === n)) {
        var r = _n(t) || {};
        (t = r.iconName || t), (e = r.prefix || e);
      }
      if (t && e && Hn[e] && Hn[e][t]) return a(Bn(Hn[e][t]));
      !(function (t, e) {
        ge ||
          je.showMissingIcons ||
          !t ||
          console.error(
            'Icon with name "'
              .concat(t, '" and prefix "')
              .concat(e, '" is missing.'),
          );
      })(t, e),
        a(
          Xt(
            Xt({}, Yn),
            {},
            {
              icon:
                (je.showMissingIcons && t && An('missingIconAbstract')) || {},
            },
          ),
        );
    })
  );
}
var Vn = function () {},
  Wn =
    je.measurePerformance && he && he.mark && he.measure
      ? he
      : { mark: Vn, measure: Vn },
  Xn = function (t) {
    Wn.mark(''.concat('FA "6.0.0"', ' ').concat(t, ' ends')),
      Wn.measure(
        ''.concat('FA "6.0.0"', ' ').concat(t),
        ''.concat('FA "6.0.0"', ' ').concat(t, ' begins'),
        ''.concat('FA "6.0.0"', ' ').concat(t, ' ends'),
      );
  },
  $n = function (t) {
    return (
      Wn.mark(''.concat('FA "6.0.0"', ' ').concat(t, ' begins')),
      function () {
        return Xn(t);
      }
    );
  },
  Jn = function () {};
function Kn(t) {
  return (
    'string' == typeof (t.getAttribute ? t.getAttribute('data-fa-i2svg') : null)
  );
}
function Zn(t) {
  return ue.createElementNS('http://www.w3.org/2000/svg', t);
}
function Qn(t) {
  return ue.createElement(t);
}
function ta(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = e.ceFn,
    a = void 0 === n ? ('svg' === t.tag ? Zn : Qn) : n;
  if ('string' == typeof t) return ue.createTextNode(t);
  var i = a(t.tag);
  Object.keys(t.attributes || []).forEach(function (e) {
    i.setAttribute(e, t.attributes[e]);
  });
  var r = t.children || [];
  return (
    r.forEach(function (t) {
      i.appendChild(ta(t, { ceFn: a }));
    }),
    i
  );
}
var ea = {
  replace: function (t) {
    var e = t[0];
    if (e.parentNode)
      if (
        (t[1].forEach(function (t) {
          e.parentNode.insertBefore(ta(t), e);
        }),
        null === e.getAttribute('data-fa-i2svg') && je.keepOriginalSource)
      ) {
        var n = ue.createComment(
          (function (t) {
            var e = ' '.concat(t.outerHTML, ' ');
            return ''.concat(e, 'Font Awesome fontawesome.com ');
          })(e),
        );
        e.parentNode.replaceChild(n, e);
      } else e.remove();
  },
  nest: function (t) {
    var e = t[0],
      n = t[1];
    if (~Ue(e).indexOf(je.replacementClass)) return ea.replace(t);
    var a = new RegExp(''.concat(je.familyPrefix, '-.*'));
    if ((delete n[0].attributes.id, n[0].attributes.class)) {
      var i = n[0].attributes.class.split(' ').reduce(
        function (t, e) {
          return (
            e === je.replacementClass || e.match(a)
              ? t.toSvg.push(e)
              : t.toNode.push(e),
            t
          );
        },
        { toNode: [], toSvg: [] },
      );
      (n[0].attributes.class = i.toSvg.join(' ')),
        0 === i.toNode.length
          ? e.removeAttribute('class')
          : e.setAttribute('class', i.toNode.join(' '));
    }
    var r = n
      .map(function (t) {
        return Qe(t);
      })
      .join('\n');
    e.setAttribute('data-fa-i2svg', ''), (e.innerHTML = r);
  },
};
function na(t) {
  t();
}
function aa(t, e) {
  var n = 'function' == typeof e ? e : Jn;
  if (0 === t.length) n();
  else {
    var a = na;
    'async' === je.mutateApproach && (a = le.requestAnimationFrame || na),
      a(function () {
        var e =
            !0 === je.autoReplaceSvg
              ? ea.replace
              : ea[je.autoReplaceSvg] || ea.replace,
          a = $n('mutate');
        t.map(e), a(), n();
      });
  }
}
var ia = !1;
function ra() {
  ia = !0;
}
function sa() {
  ia = !1;
}
var oa = null;
function ca(t) {
  if (de && je.observeMutations) {
    var e = t.treeCallback,
      n = void 0 === e ? Jn : e,
      a = t.nodeCallback,
      i = void 0 === a ? Jn : a,
      r = t.pseudoElementsCallback,
      s = void 0 === r ? Jn : r,
      o = t.observeMutationsRoot,
      c = void 0 === o ? ue : o;
    (oa = new de(function (t) {
      if (!ia) {
        var e = En();
        ze(t).forEach(function (t) {
          if (
            ('childList' === t.type &&
              t.addedNodes.length > 0 &&
              !Kn(t.addedNodes[0]) &&
              (je.searchPseudoElements && s(t.target), n(t.target)),
            'attributes' === t.type &&
              t.target.parentNode &&
              je.searchPseudoElements &&
              s(t.target.parentNode),
            'attributes' === t.type &&
              Kn(t.target) &&
              ~Se.indexOf(t.attributeName))
          )
            if (
              'class' === t.attributeName &&
              (function (t) {
                var e = t.getAttribute ? t.getAttribute('data-prefix') : null,
                  n = t.getAttribute ? t.getAttribute('data-icon') : null;
                return e && n;
              })(t.target)
            ) {
              var a = kn(Ue(t.target)),
                r = a.prefix,
                o = a.iconName;
              t.target.setAttribute('data-prefix', r || e),
                o && t.target.setAttribute('data-icon', o);
            } else
              (c = t.target) &&
                c.classList &&
                c.classList.contains &&
                c.classList.contains(je.replacementClass) &&
                i(t.target);
          var c;
        });
      }
    })),
      fe &&
        oa.observe(c, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function la(t) {
  var e = t.getAttribute('style'),
    n = [];
  return (
    e &&
      (n = e.split(';').reduce(function (t, e) {
        var n = e.split(':'),
          a = n[0],
          i = n.slice(1);
        return a && i.length > 0 && (t[a] = i.join(':').trim()), t;
      }, {})),
    n
  );
}
function ua(t) {
  var e,
    n,
    a = t.getAttribute('data-prefix'),
    i = t.getAttribute('data-icon'),
    r = void 0 !== t.innerText ? t.innerText.trim() : '',
    s = kn(Ue(t));
  return (
    s.prefix || (s.prefix = En()),
    a && i && ((s.prefix = a), (s.iconName = i)),
    (s.iconName && s.prefix) ||
      (s.prefix &&
        r.length > 0 &&
        (s.iconName =
          ((e = s.prefix),
          (n = t.innerText),
          (dn[e] || {})[n] || bn(s.prefix, nn(t.innerText))))),
    s
  );
}
function da(t) {
  var e = ze(t.attributes).reduce(function (t, e) {
      return (
        'class' !== t.name && 'style' !== t.name && (t[e.name] = e.value), t
      );
    }, {}),
    n = t.getAttribute('title'),
    a = t.getAttribute('data-fa-title-id');
  return (
    je.autoA11y &&
      (n
        ? (e['aria-labelledby'] = ''
            .concat(je.replacementClass, '-title-')
            .concat(a || qe()))
        : ((e['aria-hidden'] = 'true'), (e.focusable = 'false'))),
    e
  );
}
function ha(t) {
  var e =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { styleParser: !0 },
    n = ua(t),
    a = n.iconName,
    i = n.prefix,
    r = n.rest,
    s = da(t),
    o = Cn('parseNodeAttributes', {}, t),
    c = e.styleParser ? la(t) : [];
  return Xt(
    {
      iconName: a,
      title: t.getAttribute('title'),
      titleId: t.getAttribute('data-fa-title-id'),
      prefix: i,
      transform: Le,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: r, styles: c, attributes: s },
    },
    o,
  );
}
var fa = $e.styles;
function pa(t) {
  var e = 'nest' === je.autoReplaceSvg ? ha(t, { styleParser: !1 }) : ha(t);
  return ~e.extra.classes.indexOf('fa-layers-text')
    ? An('generateLayersText', t, e)
    : An('generateSvgReplacementMutation', t, e);
}
function ma(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if (!fe) return Promise.resolve();
  var n = ue.documentElement.classList,
    a = function (t) {
      return n.add(''.concat('fontawesome-i2svg', '-').concat(t));
    },
    i = function (t) {
      return n.remove(''.concat('fontawesome-i2svg', '-').concat(t));
    },
    r = je.autoFetchSvg ? Object.keys(ve) : Object.keys(fa),
    s = ['.'.concat('fa-layers-text', ':not([').concat('data-fa-i2svg', '])')]
      .concat(
        r.map(function (t) {
          return '.'.concat(t, ':not([').concat('data-fa-i2svg', '])');
        }),
      )
      .join(', ');
  if (0 === s.length) return Promise.resolve();
  var o = [];
  try {
    o = ze(t.querySelectorAll(s));
  } catch (yc) {}
  if (!(o.length > 0)) return Promise.resolve();
  a('pending'), i('complete');
  var c = $n('onTree'),
    l = o.reduce(function (t, e) {
      try {
        var n = pa(e);
        n && t.push(n);
      } catch (yc) {
        ge || ('MissingIcon' === yc.name && console.error(yc));
      }
      return t;
    }, []);
  return new Promise(function (t, n) {
    Promise.all(l)
      .then(function (n) {
        aa(n, function () {
          a('active'),
            a('complete'),
            i('pending'),
            'function' == typeof e && e(),
            c(),
            t();
        });
      })
      .catch(function (t) {
        c(), n(t);
      });
  });
}
function ga(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  pa(t).then(function (t) {
    t && aa([t], e);
  });
}
var va = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = e.transform,
      a = void 0 === n ? Le : n,
      i = e.symbol,
      r = void 0 !== i && i,
      s = e.mask,
      o = void 0 === s ? null : s,
      c = e.maskId,
      l = void 0 === c ? null : c,
      u = e.title,
      d = void 0 === u ? null : u,
      h = e.titleId,
      f = void 0 === h ? null : h,
      p = e.classes,
      m = void 0 === p ? [] : p,
      g = e.attributes,
      v = void 0 === g ? {} : g,
      y = e.styles,
      b = void 0 === y ? {} : y;
    if (t) {
      var w = t.prefix,
        _ = t.iconName,
        E = t.icon;
      return qn(Xt({ type: 'icon' }, t), function () {
        return (
          Nn('beforeDOMElementCreation', { iconDefinition: t, params: e }),
          je.autoA11y &&
            (d
              ? (v['aria-labelledby'] = ''
                  .concat(je.replacementClass, '-title-')
                  .concat(f || qe()))
              : ((v['aria-hidden'] = 'true'), (v.focusable = 'false'))),
          zn({
            icons: {
              main: Bn(E),
              mask: o
                ? Bn(o.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: w,
            iconName: _,
            transform: Xt(Xt({}, Le), a),
            symbol: r,
            title: d,
            maskId: l,
            titleId: f,
            extra: { attributes: v, styles: b, classes: m },
          })
        );
      });
    }
  },
  ya = {
    mixout: function () {
      return {
        icon:
          ((t = va),
          function (e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              a = (e || {}).icon ? e : In(e || {}),
              i = n.mask;
            return (
              i && (i = (i || {}).icon ? i : In(i || {})),
              t(a, Xt(Xt({}, n), {}, { mask: i }))
            );
          }),
      };
      var t;
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (t) {
          return (t.treeCallback = ma), (t.nodeCallback = ga), t;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (t) {
        var e = t.node,
          n = void 0 === e ? ue : e,
          a = t.callback;
        return ma(n, void 0 === a ? function () {} : a);
      }),
        (t.generateSvgReplacementMutation = function (t, e) {
          var n = e.iconName,
            a = e.title,
            i = e.titleId,
            r = e.prefix,
            s = e.transform,
            o = e.symbol,
            c = e.mask,
            l = e.maskId,
            u = e.extra;
          return new Promise(function (e, d) {
            Promise.all([
              Gn(n, r),
              c.iconName
                ? Gn(c.iconName, c.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (c) {
                var d = Zt(c, 2),
                  h = d[0],
                  f = d[1];
                e([
                  t,
                  zn({
                    icons: { main: h, mask: f },
                    prefix: r,
                    iconName: n,
                    transform: s,
                    symbol: o,
                    maskId: l,
                    title: a,
                    titleId: i,
                    extra: u,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(d);
          });
        }),
        (t.generateAbstractIcon = function (t) {
          var e,
            n = t.children,
            a = t.attributes,
            i = t.main,
            r = t.transform,
            s = He(t.styles);
          return (
            s.length > 0 && (a.style = s),
            Be(r) &&
              (e = An('generateAbstractTransformGrouping', {
                main: i,
                transform: r,
                containerWidth: i.width,
                iconWidth: i.width,
              })),
            n.push(e || i.icon),
            { children: n, attributes: a }
          );
        });
    },
  },
  ba = {
    mixout: function () {
      return {
        layer: function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e.classes,
            a = void 0 === n ? [] : n;
          return qn({ type: 'layer' }, function () {
            Nn('beforeDOMElementCreation', { assembler: t, params: e });
            var n = [];
            return (
              t(function (t) {
                Array.isArray(t)
                  ? t.map(function (t) {
                      n = n.concat(t.abstract);
                    })
                  : (n = n.concat(t.abstract));
              }),
              [
                {
                  tag: 'span',
                  attributes: {
                    class: [''.concat(je.familyPrefix, '-layers')]
                      .concat(Qt(a))
                      .join(' '),
                  },
                  children: n,
                },
              ]
            );
          });
        },
      };
    },
  },
  wa = {
    mixout: function () {
      return {
        counter: function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e.title,
            a = void 0 === n ? null : n,
            i = e.classes,
            r = void 0 === i ? [] : i,
            s = e.attributes,
            o = void 0 === s ? {} : s,
            c = e.styles,
            l = void 0 === c ? {} : c;
          return qn({ type: 'counter', content: t }, function () {
            return (
              Nn('beforeDOMElementCreation', { content: t, params: e }),
              Fn({
                content: t.toString(),
                title: a,
                extra: {
                  attributes: o,
                  styles: l,
                  classes: [
                    ''.concat(je.familyPrefix, '-layers-counter'),
                  ].concat(Qt(r)),
                },
              })
            );
          });
        },
      };
    },
  },
  _a = {
    mixout: function () {
      return {
        text: function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e.transform,
            a = void 0 === n ? Le : n,
            i = e.title,
            r = void 0 === i ? null : i,
            s = e.classes,
            o = void 0 === s ? [] : s,
            c = e.attributes,
            l = void 0 === c ? {} : c,
            u = e.styles,
            d = void 0 === u ? {} : u;
          return qn({ type: 'text', content: t }, function () {
            return (
              Nn('beforeDOMElementCreation', { content: t, params: e }),
              Un({
                content: t,
                transform: Xt(Xt({}, Le), a),
                title: r,
                extra: {
                  attributes: l,
                  styles: d,
                  classes: [''.concat(je.familyPrefix, '-layers-text')].concat(
                    Qt(o),
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (t, e) {
        var n = e.title,
          a = e.transform,
          i = e.extra,
          r = null,
          s = null;
        if (pe) {
          var o = parseInt(getComputedStyle(t).fontSize, 10),
            c = t.getBoundingClientRect();
          (r = c.width / o), (s = c.height / o);
        }
        return (
          je.autoA11y && !n && (i.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            t,
            Un({
              content: t.innerHTML,
              width: r,
              height: s,
              transform: a,
              title: n,
              extra: i,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  Ea = new RegExp('"', 'ug'),
  xa = [1105920, 1112319];
function ka(t, e) {
  var n = ''
    .concat('data-fa-pseudo-element-pending')
    .concat(e.replace(':', '-'));
  return new Promise(function (a, i) {
    if (null !== t.getAttribute(n)) return a();
    var r,
      s,
      o,
      c = ze(t.children).filter(function (t) {
        return t.getAttribute('data-fa-pseudo-element') === e;
      })[0],
      l = le.getComputedStyle(t, e),
      u = l.getPropertyValue('font-family').match(Ee),
      d = l.getPropertyValue('font-weight'),
      h = l.getPropertyValue('content');
    if (c && !u) return t.removeChild(c), a();
    if (u && 'none' !== h && '' !== h) {
      var f = l.getPropertyValue('content'),
        p = ~[
          'Solid',
          'Regular',
          'Light',
          'Thin',
          'Duotone',
          'Brands',
          'Kit',
        ].indexOf(u[2])
          ? ye[u[2].toLowerCase()]
          : xe[d],
        m = (function (t) {
          var e,
            n,
            a,
            i,
            r,
            s = t.replace(Ea, ''),
            o =
              ((n = 0),
              (i = (e = s).length),
              (r = e.charCodeAt(n)) >= 55296 &&
              r <= 56319 &&
              i > n + 1 &&
              (a = e.charCodeAt(n + 1)) >= 56320 &&
              a <= 57343
                ? 1024 * (r - 55296) + a - 56320 + 65536
                : r),
            c = o >= xa[0] && o <= xa[1],
            l = 2 === s.length && s[0] === s[1];
          return { value: nn(l ? s[0] : s), isSecondary: c || l };
        })(f),
        g = m.value,
        v = m.isSecondary,
        y = u[0].startsWith('FontAwesome'),
        b = bn(p, g),
        w = b;
      if (y) {
        var _ =
          ((s = fn[(r = g)]),
          (o = bn('fas', r)),
          s ||
            (o ? { prefix: 'fas', iconName: o } : null) || {
              prefix: null,
              iconName: null,
            });
        _.iconName && _.prefix && ((b = _.iconName), (p = _.prefix));
      }
      if (
        !b ||
        v ||
        (c &&
          c.getAttribute('data-prefix') === p &&
          c.getAttribute('data-icon') === w)
      )
        a();
      else {
        t.setAttribute(n, w), c && t.removeChild(c);
        var E = {
            iconName: null,
            title: null,
            titleId: null,
            prefix: null,
            transform: Le,
            symbol: !1,
            mask: { iconName: null, prefix: null, rest: [] },
            maskId: null,
            extra: { classes: [], styles: {}, attributes: {} },
          },
          x = E.extra;
        (x.attributes['data-fa-pseudo-element'] = e),
          Gn(b, p)
            .then(function (i) {
              var r = zn(
                  Xt(
                    Xt({}, E),
                    {},
                    {
                      icons: {
                        main: i,
                        mask: { prefix: null, iconName: null, rest: [] },
                      },
                      prefix: p,
                      iconName: w,
                      extra: x,
                      watchable: !0,
                    },
                  ),
                ),
                s = ue.createElement('svg');
              '::before' === e
                ? t.insertBefore(s, t.firstChild)
                : t.appendChild(s),
                (s.outerHTML = r
                  .map(function (t) {
                    return Qe(t);
                  })
                  .join('\n')),
                t.removeAttribute(n),
                a();
            })
            .catch(i);
      }
    } else a();
  });
}
function Ta(t) {
  return Promise.all([ka(t, '::before'), ka(t, '::after')]);
}
function Sa(t) {
  return !(
    t.parentNode === document.head ||
    ~me.indexOf(t.tagName.toUpperCase()) ||
    t.getAttribute('data-fa-pseudo-element') ||
    (t.parentNode && 'svg' === t.parentNode.tagName)
  );
}
function Pa(t) {
  if (fe)
    return new Promise(function (e, n) {
      var a = ze(t.querySelectorAll('*')).filter(Sa).map(Ta),
        i = $n('searchPseudoElements');
      ra(),
        Promise.all(a)
          .then(function () {
            i(), sa(), e();
          })
          .catch(function () {
            i(), sa(), n();
          });
    });
}
var Oa = !1,
  Ra = function (t) {
    return t
      .toLowerCase()
      .split(' ')
      .reduce(
        function (t, e) {
          var n = e.toLowerCase().split('-'),
            a = n[0],
            i = n.slice(1).join('-');
          if (a && 'h' === i) return (t.flipX = !0), t;
          if (a && 'v' === i) return (t.flipY = !0), t;
          if (((i = parseFloat(i)), isNaN(i))) return t;
          switch (a) {
            case 'grow':
              t.size = t.size + i;
              break;
            case 'shrink':
              t.size = t.size - i;
              break;
            case 'left':
              t.x = t.x - i;
              break;
            case 'right':
              t.x = t.x + i;
              break;
            case 'up':
              t.y = t.y - i;
              break;
            case 'down':
              t.y = t.y + i;
              break;
            case 'rotate':
              t.rotate = t.rotate + i;
          }
          return t;
        },
        { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 },
      );
  },
  Ca = {
    mixout: function () {
      return {
        parse: {
          transform: function (t) {
            return Ra(t);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (t, e) {
          var n = e.getAttribute('data-fa-transform');
          return n && (t.transform = Ra(n)), t;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (t) {
        var e = t.main,
          n = t.transform,
          a = t.containerWidth,
          i = t.iconWidth,
          r = { transform: 'translate('.concat(a / 2, ' 256)') },
          s = 'translate('.concat(32 * n.x, ', ').concat(32 * n.y, ') '),
          o = 'scale('
            .concat((n.size / 16) * (n.flipX ? -1 : 1), ', ')
            .concat((n.size / 16) * (n.flipY ? -1 : 1), ') '),
          c = 'rotate('.concat(n.rotate, ' 0 0)'),
          l = {
            outer: r,
            inner: { transform: ''.concat(s, ' ').concat(o, ' ').concat(c) },
            path: { transform: 'translate('.concat((i / 2) * -1, ' -256)') },
          };
        return {
          tag: 'g',
          attributes: Xt({}, l.outer),
          children: [
            {
              tag: 'g',
              attributes: Xt({}, l.inner),
              children: [
                {
                  tag: e.icon.tag,
                  children: e.icon.children,
                  attributes: Xt(Xt({}, e.icon.attributes), l.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  Na = { x: 0, y: 0, width: '100%', height: '100%' };
function Aa(t) {
  var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  return (
    t.attributes && (t.attributes.fill || e) && (t.attributes.fill = 'black'), t
  );
}
var Ia,
  ja = {
    hooks: function () {
      return {
        parseNodeAttributes: function (t, e) {
          var n = e.getAttribute('data-fa-mask'),
            a = n
              ? kn(
                  n.split(' ').map(function (t) {
                    return t.trim();
                  }),
                )
              : { prefix: null, iconName: null, rest: [] };
          return (
            a.prefix || (a.prefix = En()),
            (t.mask = a),
            (t.maskId = e.getAttribute('data-fa-mask-id')),
            t
          );
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (t) {
        var e,
          n = t.children,
          a = t.attributes,
          i = t.main,
          r = t.mask,
          s = t.maskId,
          o = t.transform,
          c = i.width,
          l = i.icon,
          u = r.width,
          d = r.icon,
          h = (function (t) {
            var e = t.transform,
              n = t.containerWidth,
              a = t.iconWidth,
              i = { transform: 'translate('.concat(n / 2, ' 256)') },
              r = 'translate('.concat(32 * e.x, ', ').concat(32 * e.y, ') '),
              s = 'scale('
                .concat((e.size / 16) * (e.flipX ? -1 : 1), ', ')
                .concat((e.size / 16) * (e.flipY ? -1 : 1), ') '),
              o = 'rotate('.concat(e.rotate, ' 0 0)');
            return {
              outer: i,
              inner: { transform: ''.concat(r, ' ').concat(s, ' ').concat(o) },
              path: { transform: 'translate('.concat((a / 2) * -1, ' -256)') },
            };
          })({ transform: o, containerWidth: u, iconWidth: c }),
          f = {
            tag: 'rect',
            attributes: Xt(Xt({}, Na), {}, { fill: 'white' }),
          },
          p = l.children ? { children: l.children.map(Aa) } : {},
          m = {
            tag: 'g',
            attributes: Xt({}, h.inner),
            children: [
              Aa(
                Xt(
                  { tag: l.tag, attributes: Xt(Xt({}, l.attributes), h.path) },
                  p,
                ),
              ),
            ],
          },
          g = { tag: 'g', attributes: Xt({}, h.outer), children: [m] },
          v = 'mask-'.concat(s || qe()),
          y = 'clip-'.concat(s || qe()),
          b = {
            tag: 'mask',
            attributes: Xt(
              Xt({}, Na),
              {},
              {
                id: v,
                maskUnits: 'userSpaceOnUse',
                maskContentUnits: 'userSpaceOnUse',
              },
            ),
            children: [f, g],
          },
          w = {
            tag: 'defs',
            children: [
              {
                tag: 'clipPath',
                attributes: { id: y },
                children: ((e = d), 'g' === e.tag ? e.children : [e]),
              },
              b,
            ],
          };
        return (
          n.push(w, {
            tag: 'rect',
            attributes: Xt(
              {
                fill: 'currentColor',
                'clip-path': 'url(#'.concat(y, ')'),
                mask: 'url(#'.concat(v, ')'),
              },
              Na,
            ),
          }),
          { children: n, attributes: a }
        );
      };
    },
  };
(Ia = { mixoutsTo: Mn }.mixoutsTo),
  (Sn = [
    We,
    ya,
    ba,
    wa,
    _a,
    {
      hooks: function () {
        return {
          mutationObserverCallbacks: function (t) {
            return (t.pseudoElementsCallback = Pa), t;
          },
        };
      },
      provides: function (t) {
        t.pseudoElements2svg = function (t) {
          var e = t.node,
            n = void 0 === e ? ue : e;
          je.searchPseudoElements && Pa(n);
        };
      },
    },
    {
      mixout: function () {
        return {
          dom: {
            unwatch: function () {
              ra(), (Oa = !0);
            },
          },
        };
      },
      hooks: function () {
        return {
          bootstrap: function () {
            ca(Cn('mutationObserverCallbacks', {}));
          },
          noAuto: function () {
            oa && oa.disconnect();
          },
          watch: function (t) {
            var e = t.observeMutationsRoot;
            Oa
              ? sa()
              : ca(
                  Cn('mutationObserverCallbacks', { observeMutationsRoot: e }),
                );
          },
        };
      },
    },
    Ca,
    ja,
    {
      provides: function (t) {
        var e = !1;
        le.matchMedia &&
          (e = le.matchMedia('(prefers-reduced-motion: reduce)').matches),
          (t.missingIconAbstract = function () {
            var t = [],
              n = { fill: 'currentColor' },
              a = {
                attributeType: 'XML',
                repeatCount: 'indefinite',
                dur: '2s',
              };
            t.push({
              tag: 'path',
              attributes: Xt(
                Xt({}, n),
                {},
                {
                  d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
                },
              ),
            });
            var i = Xt(Xt({}, a), {}, { attributeName: 'opacity' }),
              r = {
                tag: 'circle',
                attributes: Xt(
                  Xt({}, n),
                  {},
                  { cx: '256', cy: '364', r: '28' },
                ),
                children: [],
              };
            return (
              e ||
                r.children.push(
                  {
                    tag: 'animate',
                    attributes: Xt(
                      Xt({}, a),
                      {},
                      { attributeName: 'r', values: '28;14;28;28;14;28;' },
                    ),
                  },
                  {
                    tag: 'animate',
                    attributes: Xt(Xt({}, i), {}, { values: '1;0;1;1;0;1;' }),
                  },
                ),
              t.push(r),
              t.push({
                tag: 'path',
                attributes: Xt(
                  Xt({}, n),
                  {},
                  {
                    opacity: '1',
                    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                  },
                ),
                children: e
                  ? []
                  : [
                      {
                        tag: 'animate',
                        attributes: Xt(
                          Xt({}, i),
                          {},
                          { values: '1;0;0;0;0;1;' },
                        ),
                      },
                    ],
              }),
              e ||
                t.push({
                  tag: 'path',
                  attributes: Xt(
                    Xt({}, n),
                    {},
                    {
                      opacity: '0',
                      d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                    },
                  ),
                  children: [
                    {
                      tag: 'animate',
                      attributes: Xt(Xt({}, i), {}, { values: '0;0;1;1;0;0;' }),
                    },
                  ],
                }),
              { tag: 'g', attributes: { class: 'missing' }, children: t }
            );
          });
      },
    },
    {
      hooks: function () {
        return {
          parseNodeAttributes: function (t, e) {
            var n = e.getAttribute('data-fa-symbol'),
              a = null !== n && ('' === n || n);
            return (t.symbol = a), t;
          },
        };
      },
    },
  ]),
  (Pn = {}),
  Object.keys(On).forEach(function (t) {
    -1 === Rn.indexOf(t) && delete On[t];
  }),
  Sn.forEach(function (t) {
    var e = t.mixout ? t.mixout() : {};
    if (
      (Object.keys(e).forEach(function (t) {
        'function' == typeof e[t] && (Ia[t] = e[t]),
          'object' === $t(e[t]) &&
            Object.keys(e[t]).forEach(function (n) {
              Ia[t] || (Ia[t] = {}), (Ia[t][n] = e[t][n]);
            });
      }),
      t.hooks)
    ) {
      var n = t.hooks();
      Object.keys(n).forEach(function (t) {
        Pn[t] || (Pn[t] = []), Pn[t].push(n[t]);
      });
    }
    t.provides && t.provides(On);
  });
var Da = Mn.parse,
  Ma = Mn.icon;
function La(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
    ? t.default
    : t;
}
var qa = { exports: {} };
function za() {}
function Ua() {}
Ua.resetWarningCache = za;
qa.exports = (function () {
  function t(t, e, n, a, i, r) {
    if ('SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED' !== r) {
      var s = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      );
      throw ((s.name = 'Invariant Violation'), s);
    }
  }
  function e() {
    return t;
  }
  t.isRequired = t;
  var n = {
    array: t,
    bigint: t,
    bool: t,
    func: t,
    number: t,
    object: t,
    string: t,
    symbol: t,
    any: t,
    arrayOf: e,
    element: t,
    elementType: t,
    instanceOf: e,
    node: t,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes: Ua,
    resetWarningCache: za,
  };
  return (n.PropTypes = n), n;
})();
var Fa = qa.exports;
function Ha(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e &&
      (a = a.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      n.push.apply(n, a);
  }
  return n;
}
function Ba(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? Ha(Object(n), !0).forEach(function (e) {
          Ga(t, e, n[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : Ha(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
  }
  return t;
}
function Ya(t) {
  return (Ya =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
function Ga(t, e, n) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function Va(t, e) {
  if (null == t) return {};
  var n,
    a,
    i = (function (t, e) {
      if (null == t) return {};
      var n,
        a,
        i = {},
        r = Object.keys(t);
      for (a = 0; a < r.length; a++)
        (n = r[a]), e.indexOf(n) >= 0 || (i[n] = t[n]);
      return i;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    for (a = 0; a < r.length; a++)
      (n = r[a]),
        e.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]));
  }
  return i;
}
function Wa(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return Xa(t);
    })(t) ||
    (function (t) {
      if (
        ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t['@@iterator']
      )
        return Array.from(t);
    })(t) ||
    (function (t, e) {
      if (!t) return;
      if ('string' == typeof t) return Xa(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      'Object' === n && t.constructor && (n = t.constructor.name);
      if ('Map' === n || 'Set' === n) return Array.from(t);
      if (
        'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return Xa(t, e);
    })(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function Xa(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
  return a;
}
function $a(t) {
  return (function (t) {
    return (t -= 0) == t;
  })(t)
    ? t
    : (t = t.replace(/[\-_\s]+(.)?/g, function (t, e) {
        return e ? e.toUpperCase() : '';
      }))
        .substr(0, 1)
        .toLowerCase() + t.substr(1);
}
var Ja = ['style'];
function Ka(t) {
  return t
    .split(';')
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, e) {
      var n,
        a = e.indexOf(':'),
        i = $a(e.slice(0, a)),
        r = e.slice(a + 1).trim();
      return (
        i.startsWith('webkit')
          ? (t[((n = i), n.charAt(0).toUpperCase() + n.slice(1))] = r)
          : (t[i] = r),
        t
      );
    }, {});
}
var Za = !1;
try {
  Za = !0;
} catch (yc) {}
function Qa(t) {
  return t && 'object' === Ya(t) && t.prefix && t.iconName && t.icon
    ? t
    : Da.icon
    ? Da.icon(t)
    : null === t
    ? null
    : t && 'object' === Ya(t) && t.prefix && t.iconName
    ? t
    : Array.isArray(t) && 2 === t.length
    ? { prefix: t[0], iconName: t[1] }
    : 'string' == typeof t
    ? { prefix: 'fas', iconName: t }
    : void 0;
}
function ti(t, e) {
  return (Array.isArray(e) && e.length > 0) || (!Array.isArray(e) && e)
    ? Ga({}, t, e)
    : {};
}
var ei = ['forwardedRef'];
function ni(t) {
  var e = t.forwardedRef,
    n = Va(t, ei),
    a = n.icon,
    i = n.mask,
    r = n.symbol,
    s = n.className,
    o = n.title,
    c = n.titleId,
    l = Qa(a),
    u = ti(
      'classes',
      [].concat(
        Wa(
          (function (t) {
            var e,
              n = t.beat,
              a = t.fade,
              i = t.flash,
              r = t.spin,
              s = t.spinPulse,
              o = t.spinReverse,
              c = t.pulse,
              l = t.fixedWidth,
              u = t.inverse,
              d = t.border,
              h = t.listItem,
              f = t.flip,
              p = t.size,
              m = t.rotation,
              g = t.pull,
              v =
                (Ga(
                  (e = {
                    'fa-beat': n,
                    'fa-fade': a,
                    'fa-flash': i,
                    'fa-spin': r,
                    'fa-spin-reverse': o,
                    'fa-spin-pulse': s,
                    'fa-pulse': c,
                    'fa-fw': l,
                    'fa-inverse': u,
                    'fa-border': d,
                    'fa-li': h,
                    'fa-flip-horizontal': 'horizontal' === f || 'both' === f,
                    'fa-flip-vertical': 'vertical' === f || 'both' === f,
                  }),
                  'fa-'.concat(p),
                  null != p,
                ),
                Ga(e, 'fa-rotate-'.concat(m), null != m && 0 !== m),
                Ga(e, 'fa-pull-'.concat(g), null != g),
                Ga(e, 'fa-swap-opacity', t.swapOpacity),
                e);
            return Object.keys(v)
              .map(function (t) {
                return v[t] ? t : null;
              })
              .filter(function (t) {
                return t;
              });
          })(n),
        ),
        Wa(s.split(' ')),
      ),
    ),
    d = ti(
      'transform',
      'string' == typeof n.transform ? Da.transform(n.transform) : n.transform,
    ),
    h = ti('mask', Qa(i)),
    f = Ma(
      l,
      Ba(Ba(Ba(Ba({}, u), d), h), {}, { symbol: r, title: o, titleId: c }),
    );
  if (!f)
    return (
      (function () {
        var t;
        !Za &&
          console &&
          'function' == typeof console.error &&
          (t = console).error.apply(t, arguments);
      })('Could not find icon', l),
      null
    );
  var p = f.abstract,
    m = { ref: e };
  return (
    Object.keys(n).forEach(function (t) {
      ni.defaultProps.hasOwnProperty(t) || (m[t] = n[t]);
    }),
    ai(p[0], m)
  );
}
(ni.displayName = 'FontAwesomeIcon'),
  (ni.propTypes = {
    beat: Fa.bool,
    border: Fa.bool,
    className: Fa.string,
    fade: Fa.bool,
    flash: Fa.bool,
    mask: Fa.oneOfType([Fa.object, Fa.array, Fa.string]),
    fixedWidth: Fa.bool,
    inverse: Fa.bool,
    flip: Fa.oneOf(['horizontal', 'vertical', 'both']),
    icon: Fa.oneOfType([Fa.object, Fa.array, Fa.string]),
    listItem: Fa.bool,
    pull: Fa.oneOf(['right', 'left']),
    pulse: Fa.bool,
    rotation: Fa.oneOf([0, 90, 180, 270]),
    size: Fa.oneOf([
      '2xs',
      'xs',
      'sm',
      'lg',
      'xl',
      '2xl',
      '1x',
      '2x',
      '3x',
      '4x',
      '5x',
      '6x',
      '7x',
      '8x',
      '9x',
      '10x',
    ]),
    spin: Fa.bool,
    spinPulse: Fa.bool,
    spinReverse: Fa.bool,
    symbol: Fa.oneOfType([Fa.bool, Fa.string]),
    title: Fa.string,
    transform: Fa.oneOfType([Fa.string, Fa.object]),
    swapOpacity: Fa.bool,
  }),
  (ni.defaultProps = {
    border: !1,
    className: '',
    mask: null,
    fixedWidth: !1,
    inverse: !1,
    flip: null,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    symbol: !1,
    title: '',
    transform: null,
    swapOpacity: !1,
  });
var ai = function t(e, n) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if ('string' == typeof n) return n;
  var i = (n.children || []).map(function (n) {
      return t(e, n);
    }),
    r = Object.keys(n.attributes || {}).reduce(
      function (t, e) {
        var a = n.attributes[e];
        switch (e) {
          case 'class':
            (t.attrs.className = a), delete n.attributes.class;
            break;
          case 'style':
            t.attrs.style = Ka(a);
            break;
          default:
            0 === e.indexOf('aria-') || 0 === e.indexOf('data-')
              ? (t.attrs[e.toLowerCase()] = a)
              : (t.attrs[$a(e)] = a);
        }
        return t;
      },
      { attrs: {} },
    ),
    s = a.style,
    o = void 0 === s ? {} : s,
    c = Va(a, Ja);
  return (
    (r.attrs.style = Ba(Ba({}, r.attrs.style), o)),
    e.apply(void 0, [n.tag, Ba(Ba({}, r.attrs), c)].concat(Wa(i)))
  );
}.bind(null, c.createElement);
const ii = new Set(['children', 'localName', 'ref', 'style', 'className']),
  ri = new WeakMap(),
  si = (t, e, n, a, i) => {
    const r = null == i ? void 0 : i[e];
    void 0 !== r
      ? n !== a &&
        ((t, e, n) => {
          let a = ri.get(t);
          void 0 === a && ri.set(t, (a = new Map()));
          let i = a.get(e);
          void 0 !== n
            ? void 0 === i
              ? (a.set(e, (i = { handleEvent: n })), t.addEventListener(e, i))
              : (i.handleEvent = n)
            : void 0 !== i && (a.delete(e), t.removeEventListener(e, i));
        })(t, r, n)
      : (t[e] = n);
  };
var oi,
  ci = { exports: {} };
(oi = ci),
  (function () {
    var t = {}.hasOwnProperty;
    function e() {
      for (var n = [], a = 0; a < arguments.length; a++) {
        var i = arguments[a];
        if (i) {
          var r = typeof i;
          if ('string' === r || 'number' === r) n.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = e.apply(null, i);
              s && n.push(s);
            }
          } else if ('object' === r)
            if (i.toString === Object.prototype.toString)
              for (var o in i) t.call(i, o) && i[o] && n.push(o);
            else n.push(i.toString());
        }
      }
      return n.join(' ');
    }
    oi.exports ? ((e.default = e), (oi.exports = e)) : (window.classNames = e);
  })();
var li = ci.exports,
  ui = { exports: {} },
  di = {};
Object.getOwnPropertySymbols,
  Object.prototype.hasOwnProperty,
  Object.prototype.propertyIsEnumerable;
!(function () {
  try {
    if (!Object.assign) return !1;
    var t = new String('abc');
    if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0])) return !1;
    for (var e = {}, n = 0; n < 10; n++) e['_' + String.fromCharCode(n)] = n;
    if (
      '0123456789' !==
      Object.getOwnPropertyNames(e)
        .map(function (t) {
          return e[t];
        })
        .join('')
    )
      return !1;
    var a = {};
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function (t) {
        a[t] = t;
      }),
      'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, a)).join('')
    );
  } catch (i) {
    return !1;
  }
})() || Object.assign;
var hi = c,
  fi = 60103;
if (((di.Fragment = 60107), 'function' == typeof Symbol && Symbol.for)) {
  var pi = Symbol.for;
  (fi = pi('react.element')), (di.Fragment = pi('react.fragment'));
}
var mi =
    hi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  gi = Object.prototype.hasOwnProperty,
  vi = { key: !0, ref: !0, __self: !0, __source: !0 };
function yi(t, e, n) {
  var a,
    i = {},
    r = null,
    s = null;
  for (a in (void 0 !== n && (r = '' + n),
  void 0 !== e.key && (r = '' + e.key),
  void 0 !== e.ref && (s = e.ref),
  e))
    gi.call(e, a) && !vi.hasOwnProperty(a) && (i[a] = e[a]);
  if (t && t.defaultProps)
    for (a in (e = t.defaultProps)) void 0 === i[a] && (i[a] = e[a]);
  return {
    $$typeof: fi,
    type: t,
    key: r,
    ref: s,
    props: i,
    _owner: mi.current,
  };
}
(di.jsx = yi), (di.jsxs = yi), (ui.exports = di);
const bi = u.exports.createContext({ prefixes: {} });
function wi(t, e) {
  const { prefixes: n } = u.exports.useContext(bi);
  return t || n[e] || e;
}
const _i = ['as', 'disabled'];
function Ei({
  tagName: t,
  disabled: e,
  href: n,
  target: a,
  rel: i,
  onClick: r,
  tabIndex: s = 0,
  type: o,
}) {
  t || (t = null != n || null != a || null != i ? 'a' : 'button');
  const c = { tagName: t };
  if ('button' === t) return [{ type: o || 'button', disabled: e }, c];
  const l = a => {
    (e ||
      ('a' === t &&
        (function (t) {
          return !t || '#' === t.trim();
        })(n))) &&
      a.preventDefault(),
      e ? a.stopPropagation() : null == r || r(a);
  };
  return (
    'a' === t && (n || (n = '#'), e && (n = void 0)),
    [
      {
        role: 'button',
        disabled: void 0,
        tabIndex: e ? void 0 : s,
        href: n,
        target: 'a' === t ? a : void 0,
        'aria-disabled': e || void 0,
        rel: 'a' === t ? i : void 0,
        onClick: l,
        onKeyDown: t => {
          ' ' === t.key && (t.preventDefault(), l(t));
        },
      },
      c,
    ]
  );
}
const xi = u.exports.forwardRef((t, e) => {
  let { as: n, disabled: a } = t,
    i = (function (t, e) {
      if (null == t) return {};
      var n,
        a,
        i = {},
        r = Object.keys(t);
      for (a = 0; a < r.length; a++)
        (n = r[a]), e.indexOf(n) >= 0 || (i[n] = t[n]);
      return i;
    })(t, _i);
  const [r, { tagName: s }] = Ei(Object.assign({ tagName: n, disabled: a }, i));
  return ui.exports.jsx(s, Object.assign({}, i, r, { ref: e }));
});
xi.displayName = 'Button';
const ki = u.exports.forwardRef((t, e) => {
  var n = t,
    { as: a, bsPrefix: i, variant: r, size: s, active: o, className: c } = n,
    l = qt(n, ['as', 'bsPrefix', 'variant', 'size', 'active', 'className']);
  const u = wi(i, 'btn'),
    [d, { tagName: h }] = Ei(Mt({ tagName: a }, l)),
    f = h;
  return ui.exports.jsx(
    f,
    Lt(Mt(Mt({}, d), l), {
      ref: e,
      className: li(
        c,
        u,
        o && 'active',
        r && `${u}-${r}`,
        s && `${u}-${s}`,
        l.href && l.disabled && 'disabled',
      ),
    }),
  );
});
(ki.displayName = 'Button'),
  (ki.defaultProps = { variant: 'primary', active: !1, disabled: !1 });
var Ti = ki;
const Si = u.exports.forwardRef((t, e) => {
  var n = t,
    { bsPrefix: a, size: i, vertical: r, className: s, as: o = 'div' } = n,
    c = qt(n, ['bsPrefix', 'size', 'vertical', 'className', 'as']);
  const l = wi(a, 'btn-group');
  let u = l;
  return (
    r && (u = `${l}-vertical`),
    ui.exports.jsx(
      o,
      Lt(Mt({}, c), { ref: e, className: li(s, u, i && `${l}-${i}`) }),
    )
  );
});
(Si.displayName = 'ButtonGroup'),
  (Si.defaultProps = { vertical: !1, role: 'group' });
var Pi = Si;
const Oi = u.exports.forwardRef((t, e) => {
  var n = t,
    { bsPrefix: a, className: i } = n,
    r = qt(n, ['bsPrefix', 'className']);
  const s = wi(a, 'btn-toolbar');
  return ui.exports.jsx('div', Lt(Mt({}, r), { ref: e, className: li(i, s) }));
});
(Oi.displayName = 'ButtonToolbar'), (Oi.defaultProps = { role: 'toolbar' });
var Ri = Oi,
  Ci = {},
  Ni = { exports: {} };
!(function (t) {
  (t.exports = function (t) {
    return t && t.__esModule ? t : { default: t };
  }),
    (t.exports.__esModule = !0),
    (t.exports.default = t.exports);
})(Ni);
var Ai = {},
  Ii = { exports: {} };
!(function (t) {
  var e, n, a, i, r;
  (e =
    'undefined' != typeof window && void 0 !== window.document
      ? window.document
      : {}),
    (n = t.exports),
    (a = (function () {
      for (
        var t,
          n = [
            [
              'requestFullscreen',
              'exitFullscreen',
              'fullscreenElement',
              'fullscreenEnabled',
              'fullscreenchange',
              'fullscreenerror',
            ],
            [
              'webkitRequestFullscreen',
              'webkitExitFullscreen',
              'webkitFullscreenElement',
              'webkitFullscreenEnabled',
              'webkitfullscreenchange',
              'webkitfullscreenerror',
            ],
            [
              'webkitRequestFullScreen',
              'webkitCancelFullScreen',
              'webkitCurrentFullScreenElement',
              'webkitCancelFullScreen',
              'webkitfullscreenchange',
              'webkitfullscreenerror',
            ],
            [
              'mozRequestFullScreen',
              'mozCancelFullScreen',
              'mozFullScreenElement',
              'mozFullScreenEnabled',
              'mozfullscreenchange',
              'mozfullscreenerror',
            ],
            [
              'msRequestFullscreen',
              'msExitFullscreen',
              'msFullscreenElement',
              'msFullscreenEnabled',
              'MSFullscreenChange',
              'MSFullscreenError',
            ],
          ],
          a = 0,
          i = n.length,
          r = {};
        a < i;
        a++
      )
        if ((t = n[a]) && t[1] in e) {
          for (a = 0; a < t.length; a++) r[n[0][a]] = t[a];
          return r;
        }
      return !1;
    })()),
    (i = { change: a.fullscreenchange, error: a.fullscreenerror }),
    (r = {
      request: function (t, n) {
        return new Promise(
          function (i, r) {
            var s = function () {
              this.off('change', s), i();
            }.bind(this);
            this.on('change', s);
            var o = (t = t || e.documentElement)[a.requestFullscreen](n);
            o instanceof Promise && o.then(s).catch(r);
          }.bind(this),
        );
      },
      exit: function () {
        return new Promise(
          function (t, n) {
            if (this.isFullscreen) {
              var i = function () {
                this.off('change', i), t();
              }.bind(this);
              this.on('change', i);
              var r = e[a.exitFullscreen]();
              r instanceof Promise && r.then(i).catch(n);
            } else t();
          }.bind(this),
        );
      },
      toggle: function (t, e) {
        return this.isFullscreen ? this.exit() : this.request(t, e);
      },
      onchange: function (t) {
        this.on('change', t);
      },
      onerror: function (t) {
        this.on('error', t);
      },
      on: function (t, n) {
        var a = i[t];
        a && e.addEventListener(a, n, !1);
      },
      off: function (t, n) {
        var a = i[t];
        a && e.removeEventListener(a, n, !1);
      },
      raw: a,
    }),
    a
      ? (Object.defineProperties(r, {
          isFullscreen: {
            get: function () {
              return Boolean(e[a.fullscreenElement]);
            },
          },
          element: {
            enumerable: !0,
            get: function () {
              return e[a.fullscreenElement];
            },
          },
          isEnabled: {
            enumerable: !0,
            get: function () {
              return Boolean(e[a.fullscreenEnabled]);
            },
          },
        }),
        n ? (t.exports = r) : (window.screenfull = r))
      : n
      ? (t.exports = { isEnabled: !1 })
      : (window.screenfull = { isEnabled: !1 });
})(Ii),
  (function (t) {
    var e = Ni.exports;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = t.FullScreenComponent = void 0);
    var n = c,
      a = e(qa.exports),
      i = e(Ii.exports),
      r = function (t) {
        var e = t.children,
          a = t.onChange,
          r = t.onError,
          s = (0, n.useRef)();
        return (
          (0, n.useEffect)(function () {
            i.default.onchange(function () {
              a && a();
            }),
              i.default.on('error', function (t) {
                r && r();
              });
          }, []),
          e({
            ref: s,
            isEnabled: i.default.isEnabled,
            onToggle: function () {
              i.default.toggle(s.current);
            },
            onRequest: function () {
              i.default.request(s.current);
            },
            onExit: function () {
              i.default.exit(s.current);
            },
          })
        );
      };
    (t.FullScreenComponent = r),
      (r.propTypes = {
        children: a.default.func,
        onChange: a.default.func,
        onError: a.default.func,
      });
    var s = (0, n.memo)(r);
    t.default = s;
  })(Ai),
  (function (t) {
    var e = Ni.exports;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      Object.defineProperty(t, 'default', {
        enumerable: !0,
        get: function () {
          return n.default;
        },
      });
    var n = e(Ai);
  })(Ci);
var ji = La(Ci);
class Di {}
zt(Di, 'PLACE_TOWER', 'PLACE_TOWER'),
  zt(Di, 'NEXT_TURN', 'NEXT_TURN'),
  zt(Di, 'MOVE_TROOP', 'MOVE_ATTACKER'),
  zt(Di, 'SPAWN_TROOP', 'SPAWN_ATTACKER'),
  zt(Di, 'SHOOT_TROOP', 'SHOOT_TROOP'),
  zt(Di, 'SHOOT_TOWER', 'SHOOT_TOWER'),
  zt(Di, 'DEAD', 'DEAD'),
  zt(Di, 'CHANGE_DESTRUCTION', 'CHANGE_DESTRUCTION'),
  zt(Di, 'CHANGE_COINS', 'CHANGE_COINS'),
  zt(Di, 'PAUSE', 'PAUSE'),
  zt(Di, 'RESUME', 'RESUME'),
  zt(Di, 'RESET', 'RESET'),
  zt(Di, 'RESET_UI', 'RESET_UI'),
  zt(Di, 'SHUTDOWN', 'SHUTDOWN'),
  zt(Di, 'LOAD_LOG', 'LOAD_LOG');
const Mi = new l.Events.EventEmitter();
class Li {}
zt(Li, 'timePerTurn', 1e3),
  zt(Li, 'mapWidth', 64),
  zt(Li, 'mapHeight', 64),
  zt(Li, 'gridCellWidth', 128),
  zt(Li, 'gridCellHeight', 64),
  zt(Li, 'mapTileWidth', 512),
  zt(Li, 'mapTileHeight', 512),
  zt(Li, 'mapTileHalfWidth', 256),
  zt(Li, 'mapTileHalfHeight', 256);
var qi = {
  setEventEmitter(t, e) {
    return (
      void 0 === e && (e = Phaser.Events.EventEmitter),
      (this._privateEE = !0 === t || void 0 === t),
      (this._eventEmitter = this._privateEE ? new e() : t),
      this
    );
  },
  destroyEventEmitter() {
    return (
      this._eventEmitter && this._privateEE && this._eventEmitter.shutdown(),
      this
    );
  },
  getEventEmitter() {
    return this._eventEmitter;
  },
  on: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.on.apply(this._eventEmitter, arguments),
      this
    );
  },
  once: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.once.apply(this._eventEmitter, arguments),
      this
    );
  },
  off: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.off.apply(this._eventEmitter, arguments),
      this
    );
  },
  emit: function (t) {
    return (
      this._eventEmitter &&
        t &&
        this._eventEmitter.emit.apply(this._eventEmitter, arguments),
      this
    );
  },
  addListener: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.addListener.apply(this._eventEmitter, arguments),
      this
    );
  },
  removeListener: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.removeListener.apply(this._eventEmitter, arguments),
      this
    );
  },
  removeAllListeners: function () {
    return (
      this._eventEmitter &&
        this._eventEmitter.removeAllListeners.apply(
          this._eventEmitter,
          arguments,
        ),
      this
    );
  },
  listenerCount: function () {
    return this._eventEmitter
      ? this._eventEmitter.listenerCount.apply(this._eventEmitter, arguments)
      : 0;
  },
  listeners: function () {
    return this._eventEmitter
      ? this._eventEmitter.listeners.apply(this._eventEmitter, arguments)
      : [];
  },
  eventNames: function () {
    return this._eventEmitter
      ? this._eventEmitter.eventNames.apply(this._eventEmitter, arguments)
      : [];
  },
};
const zi = Phaser.Scene;
var Ui = function (t) {
    return t instanceof zi;
  },
  Fi = function (t) {
    return null == t || 'object' != typeof t
      ? null
      : Ui(t)
      ? t
      : t.scene && Ui(t.scene)
      ? t.scene
      : t.parent && t.parent.scene && Ui(t.parent.scene)
      ? t.parent.scene
      : void 0;
  };
const Hi = Phaser.Utils.Objects.GetValue;
class Bi {
  constructor(t, e) {
    (this.parent = t),
      (this.scene = Fi(t)),
      (this.isShutdown = !1),
      this.setEventEmitter(Hi(e, 'eventEmitter', !0)),
      this.parent && this.parent === this.scene
        ? this.scene.events.once('shutdown', this.onSceneDestroy, this)
        : this.parent &&
          this.parent.once &&
          this.parent.once('destroy', this.onParentDestroy, this);
  }
  shutdown(t) {
    this.isShutdown ||
      (this.parent && this.parent === this.scene
        ? this.scene.events.off('shutdown', this.onSceneDestroy, this)
        : this.parent &&
          this.parent.once &&
          this.parent.off('destroy', this.onParentDestroy, this),
      this.destroyEventEmitter(),
      (this.parent = void 0),
      (this.scene = void 0),
      (this.isShutdown = !0));
  }
  destroy(t) {
    this.shutdown(t);
  }
  onSceneDestroy() {
    this.destroy(!0);
  }
  onParentDestroy(t, e) {
    this.destroy(e);
  }
}
Object.assign(Bi.prototype, qi);
const Yi = Phaser.Utils.Objects.GetValue;
class Gi extends Bi {
  constructor(t, e) {
    super(t, e),
      (this._isRunning = !1),
      (this.isPaused = !1),
      (this.tickingState = !1),
      this.setTickingMode(Yi(e, 'tickingMode', 1));
  }
  boot() {
    2 !== this.tickingMode || this.tickingState || this.startTicking();
  }
  shutdown(t) {
    this.isShutdown ||
      (this.stop(), this.tickingState && this.stopTicking(), super.shutdown(t));
  }
  setTickingMode(t) {
    'string' == typeof t && (t = Vi[t]), (this.tickingMode = t);
  }
  startTicking() {
    this.tickingState = !0;
  }
  stopTicking() {
    this.tickingState = !1;
  }
  get isRunning() {
    return this._isRunning;
  }
  set isRunning(t) {
    this._isRunning !== t &&
      ((this._isRunning = t),
      1 === this.tickingMode &&
        t != this.tickingState &&
        (t ? this.startTicking() : this.stopTicking()));
  }
  start() {
    return (this.isPaused = !1), (this.isRunning = !0), this;
  }
  pause() {
    return (
      this.isRunning && ((this.isPaused = !0), (this.isRunning = !1)), this
    );
  }
  resume() {
    return this.isPaused && (this.isRunning = !0), this;
  }
  stop() {
    return (this.isPaused = !1), (this.isRunning = !1), this;
  }
  complete() {
    (this.isPaused = !1),
      (this.isRunning = !1),
      this.emit('complete', this.parent, this);
  }
}
const Vi = { no: 0, lazy: 1, always: 2 },
  Wi = Phaser.Utils.Objects.GetValue;
class Xi extends Gi {
  constructor(t, e) {
    var n = Fi(t);
    n === t && (t = void 0),
      super(n, e),
      (this.gameObject = t),
      t && t.setInteractive(Wi(e, 'inputConfig', void 0)),
      (this._enable = void 0),
      this.resetFromJSON(e),
      this.boot();
  }
  resetFromJSON(t) {
    return (
      this.setEnable(Wi(t, 'enable', !0)),
      this.setDetectBounds(),
      void 0 === this.gameObject
        ? this.setDetectBounds(Wi(t, 'bounds', void 0))
        : this.setDetectBounds(),
      (this.tracerState = $i),
      (this.pointer = void 0),
      (this.lastPointer = void 0),
      (this.movedState = !1),
      (this.isTouchingAnyObject = !1),
      this
    );
  }
  boot() {
    super.boot(),
      this.gameObject
        ? this.gameObject.on('pointerdown', this.onPointerDown, this)
        : this.scene.input.on('pointerdown', this.onPointerDown, this),
      this.scene.input.on('pointerup', this.onPointerUp, this),
      this.scene.input.on('pointermove', this.onPointerMove, this),
      this.scene.events.once('shutdown', this.destroy, this);
  }
  shutdown(t) {
    this.scene &&
      (this.gameObject ||
        this.scene.input.off('pointerdown', this.onPointerDown, this),
      this.scene.input.off('pointerup', this.onPointerUp, this),
      this.scene.input.off('pointermove', this.onPointerMove, this),
      this.scene.events.off('shutdown', this.destroy, this),
      (this.gameObject = void 0),
      (this.bounds = void 0),
      (this.pointer = void 0),
      (this.lastPointer = void 0),
      (this.movedState = !1),
      super.shutdown(t));
  }
  get enable() {
    return this._enable;
  }
  set enable(t) {
    if (this._enable !== t)
      return t || this.dragCancel(), (this._enable = t), this;
  }
  setEnable(t) {
    return void 0 === t && (t = !0), (this.enable = t), this;
  }
  setDetectBounds(t) {
    return (this.bounds = t), this;
  }
  toggleEnable() {
    return this.setEnable(!this.enable), this;
  }
  onPointerDown(t, e) {
    this.enable &&
      void 0 === this.pointer &&
      (!this.bounds || this.bounds.contains(t.x, t.y)) &&
      this.pointer !== t &&
      ((this.pointer = t),
      (this.lastPointer = t),
      (this.movedState = !1),
      (this.tracerState = Ji),
      void 0 === this.gameObject && (this.isTouchingAnyObject = e.length > 0),
      this.onDragStart());
  }
  onPointerUp(t) {
    this.enable &&
      (!this.bounds || this.bounds.contains(t.x, t.y)) &&
      this.pointer === t &&
      ((this.pointer = void 0),
      (this.movedState = !1),
      (this.tracerState = $i),
      this.onDragEnd());
  }
  onPointerMove(t) {
    if (this.enable && t.isDown) {
      var e = !this.bounds || this.bounds.contains(t.x, t.y),
        n = this.pointer === t;
      (!n && e) ||
        (n && !e
          ? this.onPointerUp(t)
          : (this.movedState ||
              (this.movedState = t.x !== t.downX || t.y !== t.downY),
            this.movedState && this.onDrag()));
    }
  }
  dragCancel() {
    return (
      this.tracerState === Ji && this.onDragEnd(),
      (this.pointer = void 0),
      (this.tracerState = $i),
      this
    );
  }
  onDragStart() {
    this.emit('dragstart', this);
  }
  onDragEnd() {
    this.emit('dragend', this);
  }
  onDrag() {
    this.emit('drag', this);
  }
  preUpdate(t, e) {}
  postUpdate(t, e) {}
  startTicking() {
    super.startTicking(),
      this.scene.events.on('preupdate', this.preUpdate, this),
      this.scene.events.on('postupdate', this.postUpdate, this);
  }
  stopTicking() {
    super.stopTicking(),
      this.scene &&
        (this.scene.events.off('preupdate', this.preUpdate, this),
        this.scene.events.off('postupdate', this.postUpdate, this));
  }
  setRecongizedStateObject(t) {
    return (this.recongizedState = t), this;
  }
  get state() {
    return this.recongizedState.state;
  }
  set state(t) {
    this.recongizedState.state = t;
  }
  cancel() {
    return (this.state = Ki), this;
  }
}
const $i = 0,
  Ji = 1,
  Ki = 'IDLE';
var Zi = function (t, e, n) {
  if (t && 'number' != typeof t) {
    if (t.hasOwnProperty(e)) return t[e];
    if (-1 !== e.indexOf('.')) {
      for (var a = e.split('.'), i = t, r = n, s = 0; s < a.length; s++) {
        if (!i.hasOwnProperty(a[s])) {
          r = n;
          break;
        }
        (r = i[a[s]]), (i = i[a[s]]);
      }
      return r;
    }
    return n;
  }
  return n;
};
class Qi {
  constructor(t) {
    var e = Zi(t, 'states', void 0);
    e && this.addStates(e);
    var n = Zi(t, 'extend', void 0);
    if (n)
      for (var a in n)
        (this.hasOwnProperty(a) && void 0 !== this[a]) || (this[a] = n[a]);
    var i = Zi(t, 'eventEmitter', void 0),
      r = Zi(t, 'EventEmitterClass', void 0);
    this.setEventEmitter(i, r), (this._stateLock = !1), this.resetFromJSON(t);
  }
  shutdown() {
    this.destroyEventEmitter();
  }
  destroy() {
    this.shutdown();
  }
  resetFromJSON(t) {
    this.setEnable(Zi(t, 'enable', !0)), this.start(Zi(t, 'start', void 0));
    var e = Zi(t, 'init', void 0);
    return e && e.call(this), this;
  }
  toJSON() {
    return {
      curState: this.state,
      prevState: this.prevState,
      enable: this.enable,
      start: this._start,
    };
  }
  setEnable(t) {
    return void 0 === t && (t = !0), (this.enable = t), this;
  }
  toggleEnable() {
    return this.setEnable(!this.enable), this;
  }
  set state(t) {
    if (this.enable && !this._stateLock && this._state !== t) {
      if (
        ((this._prevState = this._state),
        (this._state = t),
        (this._stateLock = !0),
        this.emit('statechange', this),
        null != this._prevState)
      ) {
        var e = 'exit_' + this._prevState,
          n = this[e];
        n && n.call(this), this.emit(e, this);
      }
      if (((this._stateLock = !1), null != this._state)) {
        var a = 'enter_' + this._state,
          i = this[a];
        i && i.call(this), this.emit(a, this);
      }
    }
  }
  get state() {
    return this._state;
  }
  get prevState() {
    return this._prevState;
  }
  start(t) {
    return (
      (this._start = t), (this._prevState = void 0), (this._state = t), this
    );
  }
  goto(t) {
    return null != t && (this.state = t), this;
  }
  next() {
    var t,
      e = this['next_' + this.state];
    return (
      e && (t = 'string' == typeof e ? e : e.call(this)), this.goto(t), this
    );
  }
  addState(t, e) {
    var n = Zi(e, 'next', void 0);
    n && (this['next_' + t] = n);
    var a = Zi(e, 'exit', void 0);
    a && (this['exit_' + t] = a);
    var i = Zi(e, 'enter', void 0);
    return i && (this['enter_' + t] = i), this;
  }
  addStates(t) {
    for (var e in t) this.addState(e, t[e]);
    return this;
  }
  update(t, e, n) {
    void 0 === n && (n = 'update');
    var a = this[n + '_' + this.state];
    a && a.call(this, t, e);
  }
  preupdate(t, e) {
    this.update(t, e, 'preupdate');
  }
  postupdate(t, e) {
    this.update(t, e, 'postupdate');
  }
}
Object.assign(Qi.prototype, qi),
  Phaser.Utils.Objects.GetValue,
  Phaser.Math.Distance.Between,
  Phaser.Utils.Objects.GetValue;
const tr = Phaser.Utils.Objects.GetValue;
class er extends Xi {
  constructor(t, e) {
    super(t, e);
    var n = this,
      a = {
        states: {
          IDLE: {},
          BEGIN: {
            enter: function () {
              var t = n.pointer;
              (n.startX = t.x),
                (n.startY = t.y),
                (n.startWorldX = t.worldX),
                (n.startWorldY = t.worldY);
            },
          },
          RECOGNIZED: {
            enter: function () {
              n.emit('panstart', n, n.gameObject, n.lastPointer);
            },
            exit: function () {
              var t = n.lastPointer;
              (n.endX = t.x),
                (n.endY = t.y),
                (n.endWorldX = t.worldX),
                (n.endWorldY = t.worldY),
                n.emit('panend', n, n.gameObject, n.lastPointer);
            },
          },
        },
        init: function () {
          this.state = nr;
        },
        eventEmitter: !1,
      };
    this.setRecongizedStateObject(new Qi(a));
  }
  resetFromJSON(t) {
    return (
      super.resetFromJSON(t),
      this.setDragThreshold(tr(t, 'threshold', 10)),
      this
    );
  }
  onDragStart() {
    (this.state = ar), 0 === this.dragThreshold && (this.state = ir);
  }
  onDragEnd() {
    this.state = nr;
  }
  onDrag() {
    switch (this.state) {
      case ar:
        this.pointer.getDistance() >= this.dragThreshold && (this.state = ir);
        break;
      case ir:
        var t = this.pointer.position,
          e = this.pointer.prevPosition;
        (this.dx = t.x - e.x), (this.dy = t.y - e.y);
        var n = this.pointer;
        (this.x = n.x),
          (this.y = n.y),
          (this.worldX = n.worldX),
          (this.worldY = n.worldY),
          this.emit('pan', this, this.gameObject, this.lastPointer);
    }
  }
  get isPanned() {
    return this.state === ir;
  }
  setDragThreshold(t) {
    return (this.dragThreshold = t), this;
  }
}
const nr = 'IDLE',
  ar = 'BEGIN',
  ir = 'RECOGNIZED',
  rr = Phaser.Math.Distance.Between,
  sr = Phaser.Math.Angle.Between;
var or = {
    getDt: function () {
      return this.scene.sys.game.loop.delta;
    },
    getVelocity: function () {
      var t = this.pointer.position,
        e = this.pointer.prevPosition;
      return rr(e.x, e.y, t.x, t.y) / (0.001 * this.getDt());
    },
    getVelocityX: function () {
      var t = this.pointer.position,
        e = this.pointer.prevPosition;
      return Math.abs(t.x - e.x) / (0.001 * this.getDt());
    },
    getVelocityY: function () {
      var t = this.pointer.position,
        e = this.pointer.prevPosition;
      return Math.abs(t.y - e.y) / (0.001 * this.getDt());
    },
    getVelocityAngle: function () {
      var t = this.pointer.position,
        e = this.pointer.prevPosition;
      return sr(e.x, e.y, t.x, t.y);
    },
  },
  cr = { 'up&down': 0, 'left&right': 1, '4dir': 2, '8dir': 3 },
  lr = {};
const ur = Phaser.Utils.Objects.GetValue,
  dr = Phaser.Math.RadToDeg;
Object.assign(
  class extends Xi {
    constructor(t, e) {
      super(t, e);
      var n = this,
        a = {
          states: {
            IDLE: {
              enter: function () {
                (n.x = 0), (n.y = 0), (n.worldX = 0), (n.worldY = 0);
              },
              exit: function () {
                var t = n.lastPointer;
                (n.x = t.x),
                  (n.y = t.y),
                  (n.worldX = t.worldX),
                  (n.worldY = t.worldY);
              },
            },
            BEGIN: {
              enter: function () {
                n.validDrag = !1;
              },
            },
            RECOGNIZED: {
              enter: function () {
                n.start(),
                  n.updateDirectionStates(),
                  n.emit('swipe', n, n.gameObject, n.lastPointer);
              },
              exit: function () {
                n.stop(), n.clearDirectionStates();
              },
            },
          },
          init: function () {
            this.state = hr;
          },
          eventEmitter: !1,
        };
      this.setRecongizedStateObject(new Qi(a)), this.clearDirectionStates();
    }
    resetFromJSON(t) {
      return (
        super.resetFromJSON(t),
        this.setDragThreshold(ur(t, 'threshold', 10)),
        this.setVelocityThreshold(ur(t, 'velocityThreshold', 1e3)),
        this.setDirectionMode(ur(t, 'dir', '8dir')),
        this
      );
    }
    onDragStart() {
      this.state = fr;
    }
    onDragEnd() {
      this.state = hr;
    }
    onDrag() {
      this.state === fr &&
        (this.validDrag ||
          (this.validDrag =
            0 === this.dragThreshold ||
            this.pointer.getDistance() >= this.dragThreshold),
        this.validDrag &&
          this.dragVelocity > this.velocityThreshold &&
          (this.state = pr));
    }
    postUpdate(t, e) {
      this.isRunning && this.enable && this.state === pr && (this.state = hr);
    }
    get isSwiped() {
      return this.state === pr;
    }
    get dragVelocity() {
      var t;
      switch (this.dirMode) {
        case 0:
          t = this.getVelocityY();
          break;
        case 1:
          t = this.getVelocityX();
          break;
        default:
          t = this.getVelocity();
      }
      return t;
    }
    setDragThreshold(t) {
      return (this.dragThreshold = t), this;
    }
    setVelocityThreshold(t) {
      return (this.velocityThreshold = t), this;
    }
    setDirectionMode(t) {
      return 'string' == typeof t && (t = cr[t]), (this.dirMode = t), this;
    }
    updateDirectionStates() {
      return (
        (function (t, e, n) {
          switch (
            (void 0 === n ? (n = {}) : !0 === n && (n = lr),
            (n.left = !1),
            (n.right = !1),
            (n.up = !1),
            (n.down = !1),
            (t = (t + 360) % 360),
            e)
          ) {
            case 0:
              t < 180 ? (n.down = !0) : (n.up = !0);
              break;
            case 1:
              t > 90 && t <= 270 ? (n.left = !0) : (n.right = !0);
              break;
            case 2:
              t > 45 && t <= 135
                ? (n.down = !0)
                : t > 135 && t <= 225
                ? (n.left = !0)
                : t > 225 && t <= 315
                ? (n.up = !0)
                : (n.right = !0);
              break;
            case 3:
              t > 22.5 && t <= 67.5
                ? ((n.down = !0), (n.right = !0))
                : t > 67.5 && t <= 112.5
                ? (n.down = !0)
                : t > 112.5 && t <= 157.5
                ? ((n.down = !0), (n.left = !0))
                : t > 157.5 && t <= 202.5
                ? (n.left = !0)
                : t > 202.5 && t <= 247.5
                ? ((n.left = !0), (n.up = !0))
                : t > 247.5 && t <= 292.5
                ? (n.up = !0)
                : t > 292.5 && t <= 337.5
                ? ((n.up = !0), (n.right = !0))
                : (n.right = !0);
          }
        })(dr(this.getVelocityAngle()), this.dirMode, this),
        this
      );
    }
    clearDirectionStates() {
      return (
        (this.left = !1),
        (this.right = !1),
        (this.up = !1),
        (this.down = !1),
        this
      );
    }
  }.prototype,
  or,
);
const hr = 'IDLE',
  fr = 'BEGIN',
  pr = 'RECOGNIZED';
var mr = function (t) {
  if (Array.isArray(t)) t.length = 0;
  else for (var e in t) delete t[e];
};
const gr = Phaser.Utils.Objects.GetValue,
  vr = Phaser.Utils.Array.SpliceOne,
  yr = Phaser.Math.Distance.Between,
  br = Phaser.Math.Angle.Between;
class wr {
  constructor(t, e) {
    var n = t.input.manager.pointersTotal - 1;
    n < 2 && t.input.addPointer(2 - n),
      (this.scene = t),
      this.setEventEmitter(gr(e, 'eventEmitter', void 0)),
      (this._enable = void 0),
      (this.pointers = []),
      (this.movedState = {}),
      this.resetFromJSON(e),
      this.boot();
  }
  resetFromJSON(t) {
    return (
      this.setEnable(gr(t, 'enable', !0)),
      (this.bounds = gr(t, 'bounds', void 0)),
      (this.tracerState = Er),
      (this.pointers.length = 0),
      mr(this.movedState),
      this
    );
  }
  boot() {
    this.scene.input.on('pointerdown', this.onPointerDown, this),
      this.scene.input.on('pointerup', this.onPointerUp, this),
      this.scene.input.on('pointermove', this.onPointerMove, this),
      this.scene.events.once('shutdown', this.destroy, this);
  }
  shutdown() {
    this.scene &&
      (this.destroyEventEmitter(),
      (this.pointers.length = 0),
      mr(this.movedState),
      this.scene.input.off('pointerdown', this.onPointerDown, this),
      this.scene.input.off('pointerup', this.onPointerUp, this),
      this.scene.input.off('pointermove', this.onPointerMove, this),
      this.scene.events.off('shutdown', this.destroy, this),
      (this.scene = void 0));
  }
  destroy() {
    this.shutdown();
  }
  get enable() {
    return this._enable;
  }
  set enable(t) {
    if (this._enable !== t)
      return t || this.dragCancel(), (this._enable = t), this;
  }
  setEnable(t) {
    return void 0 === t && (t = !0), (this.enable = t), this;
  }
  toggleEnable() {
    return this.setEnable(!this.enable), this;
  }
  onPointerDown(t) {
    if (
      this.enable &&
      2 !== this.pointers.length &&
      (!this.bounds || this.bounds.contains(t.x, t.y)) &&
      -1 === this.pointers.indexOf(t)
    )
      switch (
        ((this.movedState[t.id] = !1), this.pointers.push(t), this.tracerState)
      ) {
        case Er:
          (this.tracerState = xr), this.onDrag1Start();
          break;
        case xr:
          (this.tracerState = kr), this.onDrag2Start();
      }
  }
  onPointerUp(t) {
    if (this.enable && (!this.bounds || this.bounds.contains(t.x, t.y))) {
      var e = this.pointers.indexOf(t);
      if (-1 !== e)
        switch (
          (delete this.movedState[t.id], vr(this.pointers, e), this.tracerState)
        ) {
          case xr:
            (this.tracerState = Er), this.onDrag1End();
            break;
          case kr:
            (this.tracerState = xr), this.onDrag2End(), this.onDrag1Start();
        }
    }
  }
  onPointerMove(t) {
    if (this.enable && t.isDown) {
      var e = !this.bounds || this.bounds.contains(t.x, t.y),
        n = -1 !== this.pointers.indexOf(t);
      if (!n && e);
      else if (n && !e) this.onPointerUp(t);
      else if (
        (this.movedState[t.id] ||
          (this.movedState[t.id] = t.x !== t.downX || t.y !== t.downY),
        this.movedState[t.id])
      )
        switch (this.tracerState) {
          case xr:
            this.onDrag1();
            break;
          case kr:
            this.onDrag2();
        }
    }
  }
  dragCancel() {
    return (
      this.tracerState === kr && this.onDrag2End(),
      (this.pointers.length = 0),
      mr(this.movedState),
      (this.tracerState = Er),
      this
    );
  }
  onDrag1Start() {
    this.emit('drag1start', this);
  }
  onDrag1End() {
    this.emit('drag1end', this);
  }
  onDrag1() {
    this.emit('drag1', this);
  }
  onDrag2Start() {
    this.emit('drag2start', this);
  }
  onDrag2End() {
    this.emit('drag2end', this);
  }
  onDrag2() {
    this.emit('drag2', this);
  }
  get distanceBetween() {
    if (this.tracerState !== kr) return 0;
    var t = this.pointers[0],
      e = this.pointers[1];
    return yr(t.x, t.y, e.x, e.y);
  }
  get angleBetween() {
    if (this.tracerState !== kr) return 0;
    var t = this.pointers[0],
      e = this.pointers[1];
    return br(t.x, t.y, e.x, e.y);
  }
  get drag1Vector() {
    var t = this.pointers[0];
    if (t && this.movedState[t.id]) {
      var e = t.position,
        n = t.prevPosition;
      (_r.x = e.x - n.x), (_r.y = e.y - n.y);
    } else (_r.x = 0), (_r.y = 0);
    return _r;
  }
  get centerX() {
    if (this.tracerState !== kr) return 0;
    var t = this.pointers[0].position,
      e = this.pointers[1].position;
    return (t.x + e.x) / 2;
  }
  get centerY() {
    if (this.tracerState !== kr) return 0;
    var t = this.pointers[0].position,
      e = this.pointers[1].position;
    return (t.y + e.y) / 2;
  }
  get prevCenterX() {
    if (this.tracerState !== kr) return 0;
    var t = this.movedState[this.pointers[0].id]
        ? this.pointers[0].prevPosition
        : this.pointers[0].position,
      e = this.movedState[this.pointers[1].id]
        ? this.pointers[1].prevPosition
        : this.pointers[1].position;
    return (t.x + e.x) / 2;
  }
  get prevCenterY() {
    if (this.tracerState !== kr) return 0;
    var t = this.movedState[this.pointers[0].id]
        ? this.pointers[0].prevPosition
        : this.pointers[0].position,
      e = this.movedState[this.pointers[1].id]
        ? this.pointers[1].prevPosition
        : this.pointers[1].position;
    return (t.y + e.y) / 2;
  }
  get movementCenterX() {
    return this.centerX - this.prevCenterX;
  }
  get movementCenterY() {
    return this.centerY - this.prevCenterY;
  }
  setRecongizedStateObject(t) {
    return (this.recongizedState = t), this;
  }
  get state() {
    return this.recongizedState.state;
  }
  set state(t) {
    this.recongizedState.state = t;
  }
  cancel() {
    return (this.state = Tr), this;
  }
}
Object.assign(wr.prototype, qi);
var _r = {};
const Er = 0,
  xr = 1,
  kr = 2,
  Tr = 'IDLE',
  Sr = Phaser.Utils.Objects.GetValue;
class Pr extends wr {
  constructor(t, e) {
    super(t, e);
    var n = this,
      a = {
        states: {
          IDLE: {
            enter: function () {
              (n.prevDistance = void 0), (n.scaleFactor = 1);
            },
          },
          BEGIN: {},
          RECOGNIZED: {
            enter: function () {
              n.emit('pinchstart', n);
            },
            exit: function () {
              n.emit('pinchend', n);
            },
          },
        },
        init: function () {
          this.state = Or;
        },
        eventEmitter: !1,
      };
    this.setRecongizedStateObject(new Qi(a));
  }
  resetFromJSON(t) {
    return (
      super.resetFromJSON(t), this.setDragThreshold(Sr(t, 'threshold', 0)), this
    );
  }
  onDrag2Start() {
    (this.scaleFactor = 1),
      (this.prevDistance = this.distanceBetween),
      (this.state = Rr),
      0 === this.dragThreshold && (this.state = Cr);
  }
  onDrag2End() {
    this.state = Or;
  }
  onDrag2() {
    switch (this.state) {
      case Rr:
        if (
          this.pointers[0].getDistance() >= this.dragThreshold &&
          this.pointers[1].getDistance() >= this.dragThreshold
        ) {
          var t = this.distanceBetween;
          (this.scaleFactor = t / this.prevDistance),
            (this.prevDistance = t),
            (this.state = Cr);
        }
        break;
      case Cr:
        t = this.distanceBetween;
        (this.scaleFactor = t / this.prevDistance),
          this.emit('pinch', this),
          (this.prevDistance = t);
    }
  }
  get isPinched() {
    return this.state === Cr;
  }
  setDragThreshold(t) {
    return (this.dragThreshold = t), this;
  }
}
const Or = 'IDLE',
  Rr = 'BEGIN',
  Cr = 'RECOGNIZED',
  Nr = Phaser.Math.RotateAround;
var Ar = function (t, e, n, a) {
    return Nr(t, e, n, a), (t.rotation += a), t;
  },
  Ir = {};
const jr = Phaser.Utils.Objects.GetValue,
  Dr = Phaser.Math.Angle.WrapDegrees,
  Mr = Phaser.Math.Angle.ShortestBetween,
  Lr = Phaser.Math.RadToDeg,
  qr = Phaser.Math.DegToRad;
var zr = {
  spinObject: function (t, e) {
    if (!this.isRotation) return this;
    void 0 === e && (e = this.pointers[0].camera);
    var n = this.movementCenterX,
      a = this.movementCenterY;
    e.getWorldPoint(this.centerX, this.centerY, Ir);
    var i = Ir.x,
      r = Ir.y,
      s = this.rotation;
    if (Array.isArray(t))
      for (var o = t, c = 0, l = o.length; c < l; c++)
        ((t = o[c]).x += n), (t.y += a), Ar(t, i, r, s);
    else (t.x += n), (t.y += a), Ar(t, i, r, s);
    return this;
  },
};
Object.assign(
  class extends wr {
    constructor(t, e) {
      super(t, e);
      var n = this,
        a = {
          states: {
            IDLE: {
              enter: function () {
                (n.prevAngle = void 0), (n.angle = 0);
              },
            },
            BEGIN: {},
            RECOGNIZED: {
              enter: function () {
                n.emit('rotatestart', n);
              },
              exit: function () {
                n.emit('rotateend', n);
              },
            },
          },
          init: function () {
            this.state = Ur;
          },
          eventEmitter: !1,
        };
      this.setRecongizedStateObject(new Qi(a));
    }
    resetFromJSON(t) {
      return (
        super.resetFromJSON(t),
        this.setDragThreshold(jr(t, 'threshold', 0)),
        this
      );
    }
    onDrag2Start() {
      (this.prevAngle = Dr(Lr(this.angleBetween))),
        (this.state = Fr),
        0 === this.dragThreshold && (this.state = Hr);
    }
    onDrag2End() {
      this.state = Ur;
    }
    onDrag2() {
      switch (this.state) {
        case Fr:
          if (
            this.pointers[0].getDistance() >= this.dragThreshold &&
            this.pointers[1].getDistance() >= this.dragThreshold
          ) {
            var t = Dr(Lr(this.angleBetween));
            (this.angle = Mr(this.prevAngle, t)),
              (this.prevAngle = t),
              (this.state = Hr);
          }
          break;
        case Hr:
          t = Dr(Lr(this.angleBetween));
          (this.angle = Mr(this.prevAngle, t)),
            (this.prevAngle = t),
            this.emit('rotate', this);
      }
    }
    get isRotated() {
      return this.state === Hr;
    }
    get rotation() {
      return qr(this.angle);
    }
    setDragThreshold(t) {
      return (this.dragThreshold = t), this;
    }
  }.prototype,
  zr,
);
const Ur = 'IDLE',
  Fr = 'BEGIN',
  Hr = 'RECOGNIZED';
class Br {
  constructor(t, e, n, a, i, r, s) {
    zt(this, 'tileId'),
      zt(this, 'name'),
      zt(this, 'asset'),
      zt(this, 'thumbnailAsset'),
      zt(this, 'hp'),
      zt(this, 'range'),
      zt(this, 'price'),
      (this.tileId = t),
      (this.name = e),
      (this.asset = n),
      (this.thumbnailAsset = a),
      (this.hp = i),
      (this.range = r),
      (this.price = s);
  }
}
class Yr {}
zt(Yr, 'towers', [
  new Br(
    2,
    'tower1',
    'tower_round.png',
    'tower_round_thumbnail.png',
    100,
    4,
    100,
  ),
  new Br(
    3,
    'tower2',
    'tower_square.png',
    'tower_square_thumbnail.png',
    100,
    6,
    100,
  ),
]);
class Gr {
  constructor(t, e) {
    zt(this, 'hp'), zt(this, 'range'), (this.hp = t), (this.range = e);
  }
}
class Vr {}
zt(Vr, 'troops', [new Gr(10, 3), new Gr(10, 3)]);
class Wr {}
zt(Wr, 'log', ''),
  zt(Wr, 'updateLogCallback', t => {
    console.log(t);
  });
class Xr {
  constructor(t, e, n) {
    zt(this, 'bar'),
      zt(this, 'x'),
      zt(this, 'y'),
      zt(this, 'value'),
      zt(this, 'p'),
      (this.bar = new l.GameObjects.Graphics(t)),
      (this.x = e),
      (this.y = n),
      (this.value = 100),
      (this.p = 0.6),
      this.draw(),
      t.add.existing(this.bar);
  }
  setPosition(t, e) {
    (this.x = t), (this.y = e), this.draw();
  }
  setHp(t) {
    return (
      (this.value = t),
      this.value < 0 && (this.value = 0),
      this.draw(),
      0 === this.value
    );
  }
  setDepth(t) {
    this.bar.setDepth(t);
  }
  draw() {
    this.bar.clear(),
      this.bar.fillStyle(16777215),
      this.bar.fillRect(this.x, this.y, 60, 4),
      this.value < 30
        ? this.bar.fillStyle(16711680)
        : this.bar.fillStyle(65280);
    const t = Math.floor(this.p * this.value);
    this.bar.fillRect(this.x, this.y, t, 4);
  }
  destroy() {
    this.bar.destroy();
  }
}
class $r extends Phaser.GameObjects.Image {
  constructor(t, e, n, a, i) {
    super(t, n, a, `${e.name}-sprite`),
      zt(this, 'towerType'),
      zt(this, 'healthBar'),
      (this.towerType = e),
      (this.healthBar = i);
  }
  setHp(t) {
    this.healthBar.setHp((t / this.towerType.hp) * 100);
  }
}
const Jr = {
    east: { offset: 128, x: 2, y: 0 },
    northEast: { offset: 96, x: 2, y: -1 },
    north: { offset: 64, x: 0, y: -2 },
    northWest: { offset: 32, x: -2, y: -1 },
    west: { offset: 0, x: -2, y: 0 },
    southWest: { offset: 224, x: -2, y: 1 },
    south: { offset: 192, x: 0, y: 2 },
    southEast: { offset: 160, x: 2, y: 1 },
  },
  Kr = {
    idle: { startFrame: 0, endFrame: 4 },
    walk: { startFrame: 4, endFrame: 12 },
    attack: { startFrame: 12, endFrame: 20 },
    die: { startFrame: 20, endFrame: 28 },
    shoot: { startFrame: 28, endFrame: 32 },
  };
class Zr extends l.GameObjects.Image {
  constructor(t, e, n, a, i, r) {
    super(t, n, a, 'skeleton'),
      zt(this, 'troopType'),
      zt(this, 'destinationX'),
      zt(this, 'destinationY'),
      zt(this, 'motion'),
      zt(this, 'animation'),
      zt(this, 'direction'),
      zt(this, 'speed'),
      zt(this, 'f'),
      zt(this, 'healthBar'),
      zt(this, 'idleTimer'),
      zt(this, 'frameTimer'),
      zt(this, 'idleTimerConfig', {
        delay: 5 * Li.timePerTurn,
        callback: this._switchToIdle,
        callbackScope: this,
      }),
      (this.troopType = e),
      (this.destinationX = n),
      (this.destinationY = a),
      (this.motion = i),
      (this.animation = Kr[i]),
      (this.direction = Jr[null != r ? r : 'east']),
      (this.speed = Li.timePerTurn / 1e4),
      (this.angle = 0),
      (this.f = this.animation.startFrame),
      (this.healthBar = new Xr(t, n - 30, a - 30)),
      this.healthBar.setDepth(this.y),
      (this.depth = 50),
      (this.frameTimer = t.time.delayedCall(
        1e3 * this.speed,
        this.changeFrame,
        [],
        this,
      )),
      (this.idleTimer = t.time.addEvent(this.idleTimerConfig));
  }
  changeFrame() {
    if (((this.f += 1), this.f === this.animation.endFrame)) {
      if ('die' === this.motion) return;
      this.f = this.animation.startFrame;
    } else this.frame = this.texture.get(this.direction.offset + this.f);
    this.frameTimer = this.scene.time.delayedCall(
      1e3 * this.speed,
      this.changeFrame,
      [],
      this,
    );
  }
  _setDirectionFromDelta(t, e) {
    let n = Math.atan2(e, t);
    (n = n < 0 ? n + 2 * Math.PI : n), (this.angle = n);
    const a = n / (2 * Math.PI);
    this.direction = Jr[Object.keys(Jr)[Math.floor(8 * a)] || 'north'];
  }
  _switchToIdle() {
    (this.motion = 'idle'),
      (this.animation = Kr[this.motion]),
      (this.f = this.animation.startFrame);
  }
  moveTo(t, e) {
    if (
      (this.idleTimer.reset(this.idleTimerConfig),
      this.destinationX === t && this.destinationY === e)
    )
      return (
        (this.motion = 'idle'),
        (this.animation = Kr[this.motion]),
        void (this.f = this.animation.startFrame)
      );
    const n = this.motion;
    (this.motion = 'walk'),
      (this.animation = Kr[this.motion]),
      'walk' !== n && (this.f = this.animation.startFrame),
      this.scene.tweens.add({
        targets: this,
        x: { value: t, duration: Li.timePerTurn },
        y: { value: e, duration: Li.timePerTurn },
        onUpdate: () => {
          this.healthBar.setPosition(this.x - 30, this.y - 30),
            this.setDepth(this.y),
            this.healthBar.setDepth(this.y);
        },
      }),
      (this.x = this.destinationX),
      (this.y = this.destinationY),
      (this.destinationX = t),
      (this.destinationY = e);
    const a = t - this.x,
      i = e - this.y;
    this._setDirectionFromDelta(a, -i);
  }
  attack(t, e) {
    this.idleTimer.reset(this.idleTimerConfig),
      (this.motion = 'attack'),
      (this.animation = Kr[this.motion]),
      (this.f = this.animation.startFrame),
      (this.x = this.destinationX),
      (this.y = this.destinationY),
      this.healthBar.setPosition(this.x - 40, this.y - 50);
    const n = t - this.x,
      a = e - this.y;
    this._setDirectionFromDelta(n, -a);
  }
  dead() {
    this.idleTimer.reset(this.idleTimerConfig),
      (this.motion = 'die'),
      (this.animation = Kr[this.motion]),
      (this.f = this.animation.startFrame);
  }
  setHp(t) {
    this.healthBar.setHp((t / this.troopType.hp) * 100);
  }
  destroy(t) {
    this.healthBar.destroy(),
      this.frameTimer.destroy(),
      this.idleTimer.destroy(),
      super.destroy(t);
  }
}
class Qr {}
class ts {
  constructor(t) {
    zt(this, 'turnNo'), (this.turnNo = t);
  }
}
class es {
  constructor(t, e, n, a, i) {
    zt(this, 'id'),
      zt(this, 'typeId'),
      zt(this, 'posX'),
      zt(this, 'posY'),
      zt(this, 'hp'),
      (this.id = t),
      (this.typeId = e),
      (this.posX = n),
      (this.posY = a),
      (this.hp = i);
  }
}
class ns {
  constructor(t) {
    zt(this, 'towers'), (this.towers = t);
  }
}
class as {
  constructor(t, e, n) {
    zt(this, 'id'),
      zt(this, 'posX'),
      zt(this, 'posY'),
      (this.id = t),
      (this.posX = e),
      (this.posY = n);
  }
}
class is {
  constructor(t, e, n, a) {
    zt(this, 'target'),
      zt(this, 'id1'),
      zt(this, 'id2'),
      zt(this, 'targetNewHp'),
      (this.target = t),
      (this.id1 = e),
      (this.id2 = n),
      (this.targetNewHp = a);
  }
}
class rs {
  constructor(t, e, n, a, i) {
    zt(this, 'id'),
      zt(this, 'typeId'),
      zt(this, 'posX'),
      zt(this, 'posY'),
      zt(this, 'hp'),
      (this.id = t),
      (this.typeId = e),
      (this.posX = n),
      (this.posY = a),
      (this.hp = i);
  }
}
class ss {
  constructor(t, e) {
    zt(this, 'actorType'), zt(this, 'id'), (this.actorType = t), (this.id = e);
  }
}
class os {
  constructor(t) {
    zt(this, 'message'), (this.message = t);
  }
}
class cs {
  constructor(t) {
    zt(this, 'percent'), (this.percent = t);
  }
}
class ls {
  constructor(t) {
    zt(this, 'coin'), (this.coin = t);
  }
}
class us {
  constructor(t) {
    zt(this, 'errorInfo'), (this.errorInfo = t);
  }
}
class ds {}
class hs {}
function fs(t) {
  const e = t.split(', ');
  if (0 === e.length) return new ds();
  if ('INIT' === e[0]) return new Qr();
  if ('TOWERS' === e[0]) {
    const e = /\(.*?\)/g,
      n = t.match(e);
    if (n) {
      const t = n.map(t => {
        const e = t.replace(/[()]/g, '').split(', ');
        return new es(
          Number(e[0]),
          Number(e[1]),
          Number(e[2]),
          Number(e[3]),
          Number(e[4]),
        );
      });
      return new ns(t);
    }
  }
  return 'TURN' === e[0]
    ? new ts(Number(e[1]))
    : 'MOVE' === e[0]
    ? new as(Number(e[1]), Number(e[2]), Number(e[3]))
    : 'SHOOT' === e[0]
    ? new is(String(e[1]), Number(e[2]), Number(e[3]), Number(e[4]))
    : 'SPAWN' === e[0]
    ? new rs(
        Number(e[1]),
        Number(e[2]),
        Number(e[3]),
        Number(e[4]),
        Number(e[5]),
      )
    : 'DEAD' === e[0]
    ? new ss(String(e[1]), Number(e[2]))
    : 'PRINT' === e[0]
    ? new os(e[1])
    : 'DESTRUCTION' === e[0]
    ? new cs(Number(e[1].replace('%', '')))
    : 'COINS' === e[0]
    ? new ls(Number(e[1]))
    : 'ERRORS' === e[0]
    ? new us(e[1])
    : 'END' === e[0]
    ? new hs()
    : new ds();
}
class ps extends l.Scene {
  constructor() {
    super({ key: 'TileMap' }),
      zt(this, 'controls'),
      zt(this, 'troops', []),
      zt(this, 'towers', []),
      zt(this, 'spriteGroup'),
      zt(this, 'groundLayer'),
      zt(this, 'nextTurnTimeout');
  }
  preload() {
    this.load.image('tile', './assets/tile.png'),
      this.load.image('tile_crystal_N', './assets/tile_crystal_N.png'),
      this.load.image('tile_E', './assets/tile_E.png'),
      this.load.image('tile_treeQuad_N', './assets/tile_treeQuad_N.png'),
      Yr.towers.forEach(t => {
        this.load.image(`${t.name}-sprite`, `./assets/${t.asset}`);
      }),
      this.load.tilemapTiledJSON('map', './assets/map-2.json'),
      this.load.spritesheet('skeleton', './assets/skeleton8.png', {
        frameWidth: 128,
        frameHeight: 128,
      });
  }
  create() {
    const t = this.add.tilemap('map'),
      e = [
        t.addTilesetImage('tile.png', 'tile'),
        t.addTilesetImage('tile_crystal_N.png', 'tile_crystal_N'),
        t.addTilesetImage('tile_E.png', 'tile_E'),
        t.addTilesetImage('tile_treeQuad_N.png', 'tile_treeQuad_N'),
      ];
    (this.groundLayer = t.createLayer('Ground', e, 0, 0)),
      this.groundLayer.setDepth(0),
      this.groundLayer.setCullPadding(6, 6);
    const n = new Pr(this),
      a = new er(this),
      i = this.cameras.main;
    (i.zoom = 0.1),
      i.setScroll(-200, 2e3),
      n.on(
        'pinch',
        () => {
          const {
              scaleFactor: t,
              centerX: e,
              centerY: a,
              movementCenterX: r,
              movementCenterY: s,
            } = n,
            o = i.zoom,
            c = o * t,
            { width: l, height: u } = this.game.canvas,
            d = e - l / 2,
            h = a - u / 2;
          (i.scrollX += d / o - d / c - r * c),
            (i.scrollY += h / o - h / c - s * c),
            i.setZoom(c);
        },
        this,
      ),
      a.on(
        'pan',
        t => {
          const { dx: e, dy: n } = t;
          (i.scrollX -= e / i.zoom), (i.scrollY -= n / i.zoom);
        },
        this,
      ),
      this.input.on(l.Input.Events.POINTER_WHEEL, t => {
        const e = i.zoom,
          n = e * (t.deltaY > 0 ? 0.9 : 1.1),
          { width: a, height: r } = this.game.canvas,
          s = t.x - a / 2,
          o = t.y - r / 2;
        i.setZoom(n),
          (i.scrollX += s / e - s / n),
          (i.scrollY += o / e - o / n);
      }),
      Mi.on(Di.PLACE_TOWER, (t, e, n) => {
        const a = Yr.towers[t - 1],
          i = this.groundLayer.getTileAt(e, n),
          r = new Xr(
            this,
            i.pixelX + Li.mapTileHalfWidth - 30,
            i.pixelY + Li.mapTileHalfHeight - 120,
          ),
          s = new $r(
            this,
            a,
            i.pixelX + Li.mapTileHalfWidth,
            i.pixelY + Li.mapTileHalfHeight,
            r,
          );
        s.setDepth(s.y),
          r.setDepth(s.depth),
          this.towers.push(this.add.existing(s));
      }),
      Mi.on(Di.SPAWN_TROOP, (t, e, n) => {
        const a = this.groundLayer.getTileAt(e, n);
        let i = 'northEast';
        0 === n
          ? (i =
              0 === e ? 'south' : e === Li.mapWidth - 1 ? 'west' : 'southWest')
          : n === Li.mapHeight - 1
          ? (i =
              0 === e ? 'east' : e === Li.mapWidth - 1 ? 'north' : 'northEast')
          : 0 === e
          ? (i = 'southEast')
          : e === Li.mapWidth - 1 && (i = 'northWest');
        const r = new Zr(
          this,
          Vr.troops[t - 1],
          a.pixelX + Li.mapTileHalfWidth,
          a.pixelY + Li.mapTileHalfHeight,
          'idle',
          i,
        );
        r.setDepth(r.y), this.troops.push(this.add.existing(r));
      }),
      Mi.on(Di.MOVE_TROOP, (t, e, n) => {
        const a = this.troops[t],
          i = this.groundLayer.getTileAt(e, n);
        a.moveTo(
          i.pixelX + Li.mapTileHalfWidth,
          i.pixelY + Li.mapTileHalfHeight,
        );
      }),
      Mi.on(Di.SHOOT_TROOP, (t, e, n) => {
        const a = this.troops[e],
          i = this.towers[t];
        a.setHp(n);
        const r = a.x - i.x,
          s = a.y - i.y,
          o = l.Math.RadToDeg(Math.atan2(s, r / 2)),
          c = this.add.arc(i.x, i.y, Li.gridCellHeight / 2, o - 20, o + 20);
        (c.closePath = !1),
          c.setStrokeStyle(3, 16711680),
          this.tweens.add({
            targets: [c],
            scaleX: 2 * i.towerType.range,
            scaleY: i.towerType.range,
            alpha: 0,
            duration: Li.timePerTurn,
            ease: 'Power2',
            onComplete: () => c.destroy(),
          });
      }),
      Mi.on(Di.SHOOT_TOWER, (t, e, n) => {
        const a = this.troops[t],
          i = this.towers[e],
          r = i.x - a.x,
          s = i.y - a.y,
          o = l.Math.RadToDeg(Math.atan2(s, r / 2)),
          c = this.add.arc(
            a.x,
            a.y,
            Li.gridCellHeight / 2,
            o - 20,
            o + 20,
            !1,
            16777215,
          );
        (c.closePath = !1),
          c.setStrokeStyle(3, 16711680),
          this.tweens.add({
            targets: [c],
            scaleX: 2 * a.troopType.range,
            scaleY: a.troopType.range,
            alpha: 0,
            duration: Li.timePerTurn,
            ease: 'Power2',
            onComplete: () => c.destroy(),
          }),
          i.healthBar.setHp(n),
          a.attack(i.x, i.y);
      }),
      Mi.on(Di.DEAD, (t, e) => {
        if ('A' === t) {
          const t = this.troops[e];
          t.dead(),
            this.tweens.add({
              targets: [t, t.healthBar.bar],
              alpha: 0,
              delay: Li.timePerTurn,
              duration: Li.timePerTurn,
              onComplete: () => {
                t.healthBar.destroy();
              },
            });
        } else if ('D' === t) {
          const t = this.towers[e];
          this.tweens.add({
            targets: [t, t.healthBar],
            alpha: 0,
            delay: Li.timePerTurn,
            duration: Li.timePerTurn,
            onComplete: () => {
              t.healthBar.destroy();
            },
          });
        }
      }),
      Mi.on(Di.LOAD_LOG, t => {
        this._loadLog(t);
      }),
      this.events.on(l.Scenes.Events.SHUTDOWN, () => {
        this._reset(),
          this.input.off(l.Input.Events.POINTER_UP),
          this.input.off(l.Input.Events.POINTER_MOVE),
          this.input.off(l.Input.Events.POINTER_DOWN),
          this.input.off(l.Input.Events.POINTER_WHEEL);
      }),
      this.scene.pause();
  }
  _loadLog(t) {
    this._reset(), this.scene.isPaused() && this.scene.resume();
    let e = 0;
    (Wr.log = ''), Wr.updateLogCallback(Wr.log);
    const n = t.split('\n'),
      a = t => {
        for (e = t; e < n.length; e += 1) {
          const t = fs(n[e]);
          if (t instanceof ns)
            t.towers.forEach(t => {
              Mi.emit(Di.PLACE_TOWER, t.typeId, t.posX, t.posY);
            });
          else if (t instanceof rs)
            Mi.emit(Di.SPAWN_TROOP, t.typeId, t.posX, t.posY);
          else if (t instanceof as)
            Mi.emit(Di.MOVE_TROOP, t.id, t.posX, t.posY);
          else if (t instanceof is)
            'A' === t.target
              ? Mi.emit(Di.SHOOT_TROOP, t.id1, t.id2, t.targetNewHp)
              : 'D' === t.target &&
                Mi.emit(Di.SHOOT_TOWER, t.id1, t.id2, t.targetNewHp);
          else if (t instanceof ss) Mi.emit(Di.DEAD, t.actorType, t.id);
          else if (t instanceof ls) Mi.emit(Di.CHANGE_COINS, t.coin);
          else if (t instanceof cs) Mi.emit(Di.CHANGE_DESTRUCTION, t.percent);
          else {
            if (t instanceof ts) {
              Mi.emit(Di.NEXT_TURN, t.turnNo),
                (this.nextTurnTimeout = setTimeout(() => {
                  a(e + 1);
                }, Li.timePerTurn));
              break;
            }
            if (t instanceof os)
              (Wr.log += `${t.message}\n`), Wr.updateLogCallback(Wr.log);
            else if (t instanceof us)
              (Wr.log += `${t.errorInfo}\n`), Wr.updateLogCallback(Wr.log);
            else if (t instanceof hs)
              return (
                (Wr.log += 'Match ended!\n'), void Wr.updateLogCallback(Wr.log)
              );
          }
        }
      };
    Mi.on(Di.PAUSE, () => {
      clearTimeout(this.nextTurnTimeout), this.scene.pause();
    }),
      Mi.on(Di.RESUME, () => {
        this.scene.resume(), a(e + 1);
      }),
      Mi.on(Di.RESET, () => {
        this._reset(),
          this.scene.isPaused() && this.scene.resume(),
          (e = 0),
          a(e);
      }),
      Mi.on(Di.SHUTDOWN, () => {
        this._reset();
      }),
      a(0);
  }
  _reset() {
    clearTimeout(this.nextTurnTimeout),
      this.troops.forEach(t => {
        t.removeAllListeners(), t.healthBar.destroy(), t.destroy();
      }),
      this.towers.forEach(t => {
        t.removeAllListeners(), t.healthBar.destroy(), t.destroy();
      }),
      (this.troops = []),
      (this.towers = []);
    this.tweens.getAllTweens().forEach(t => {
      t.complete();
    });
  }
  update() {
    this.troops.forEach(t => {
      t.update();
    });
  }
}
var ms;
null === (ms = window.HTMLSlotElement) ||
  void 0 === ms ||
  ms.prototype.assignedElements;
var gs = Object.defineProperty,
  vs = Object.getOwnPropertyDescriptor;
let ys = class extends h {
  constructor() {
    super(...arguments), zt(this, '_game');
  }
  firstUpdated() {
    var t, e;
    this._game = new l.Game({
      type: l.AUTO,
      parent:
        null !=
        (e =
          null == (t = this.shadowRoot) ? void 0 : t.querySelector('#renderer'))
          ? e
          : void 0,
      scene: [ps],
      dom: { createContainer: !1 },
      scale: { mode: l.Scale.RESIZE, autoCenter: l.Scale.CENTER_BOTH },
      backgroundColor: '#18729b',
    });
  }
  disconnectedCallback() {
    Mi.emit(Di.SHUTDOWN),
      Mi.removeAllListeners(),
      this._game.scene.getScene('TileMap').events.removeAllListeners(),
      this._game.destroy(!0);
  }
  render() {
    return f` <div id="renderer"></div> `;
  }
};
var bs;
ys = ((t, e, n, a) => {
  for (
    var i, r = a > 1 ? void 0 : a ? vs(e, n) : e, s = t.length - 1;
    s >= 0;
    s--
  )
    (i = t[s]) && (r = (a ? i(e, n, r) : i(r)) || r);
  return a && r && gs(e, n, r), r;
})(
  [
    ((bs = 'cc-renderer'),
    t => {
      return 'function' == typeof t
        ? ((e = bs), (n = t), window.customElements.define(e, n), n)
        : ((t, e) => {
            const { kind: n, elements: a } = e;
            return {
              kind: n,
              elements: a,
              finisher(e) {
                window.customElements.define(t, e);
              },
            };
          })(bs, t);
      var e, n;
    }),
  ],
  ys,
);
const ws = ((t, e, n, a, i) => {
    const r = t.Component,
      s = t.createElement,
      o = new Set(Object.keys(null != a ? a : {}));
    for (const u in n.prototype)
      u in HTMLElement.prototype ||
        (ii.has(u)
          ? console.warn(
              `${e} contains property ${u} which is a React reserved property. It will be used by React and not set on the element.`,
            )
          : o.add(u));
    class c extends r {
      constructor() {
        super(...arguments), (this.t = null);
      }
      o(t) {
        if (null !== this.t)
          for (const e in this.i)
            si(this.t, e, this.props[e], t ? t[e] : void 0, a);
      }
      componentDidMount() {
        this.o();
      }
      componentDidUpdate(t) {
        this.o(t);
      }
      render() {
        const t = this.props.l;
        (void 0 !== this.h && this.u === t) ||
          (this.h = e => {
            var n, a;
            null === this.t && (this.t = e),
              null !== t &&
                ((a = e),
                'function' == typeof (n = t) ? n(a) : (n.current = a)),
              (this.u = t);
          });
        const n = { ref: this.h };
        this.i = {};
        for (const [e, a] of Object.entries(this.props))
          o.has(e) ? (this.i[e] = a) : (n['className' === e ? 'class' : e] = a);
        return s(e, n);
      }
    }
    c.displayName = null != i ? i : n.name;
    const l = t.forwardRef((t, e) =>
      s(c, Lt(Mt({}, t), { l: e }), null == t ? void 0 : t.children),
    );
    return (l.displayName = c.displayName), l;
  })(d, 'cc-renderer', ys),
  _s = () => {
    const [t, e] = u.exports.useState(0),
      [n, a] = u.exports.useState(0),
      [i, r] = u.exports.useState(0);
    return (
      u.exports.useEffect(() => {
        const t = e => {
          a(e),
            Mi.removeAllListeners(Di.CHANGE_COINS),
            Mi.once(Di.CHANGE_COINS, t);
        };
        Mi.once(Di.CHANGE_COINS, t);
      }, [n]),
      u.exports.useEffect(() => {
        const t = n => {
          e(n), Mi.removeAllListeners(Di.NEXT_TURN), Mi.once(Di.NEXT_TURN, t);
        };
        Mi.once(Di.NEXT_TURN, t);
      }, [t]),
      u.exports.useEffect(() => {
        const t = e => {
          r(e),
            Mi.removeAllListeners(Di.CHANGE_DESTRUCTION),
            Mi.once(Di.CHANGE_DESTRUCTION, t);
        };
        Mi.once(Di.CHANGE_DESTRUCTION, t);
      }, [i]),
      u.exports.createElement(
        'p',
        {
          style: {
            textAlign: 'right',
            color: 'white',
            fontFamily: 'monospace',
            fontSize: '1rem',
            padding: '1rem',
          },
        },
        'Turn : ',
        String(t).padStart(8, ' '),
        u.exports.createElement('br', null),
        'Coins : ',
        String(n).padStart(8, ' '),
        u.exports.createElement('br', null),
        'Destruction : ',
        String(i.toFixed(2)).padStart(6, ' '),
        ' %',
      )
    );
  };
function Es() {
  const [t, e] = u.exports.useState(!1),
    [n, a] = u.exports.useState(!1);
  return (
    u.exports.useEffect(() => {
      const t = () => {
        e(!1), Mi.removeAllListeners(Di.RESET_UI), Mi.once(Di.RESET_UI, t);
      };
      Mi.once(Di.RESET_UI, t);
    }, [t]),
    u.exports.createElement(ji, null, ({ onRequest: i, onExit: r }) =>
      u.exports.createElement(
        u.exports.Fragment,
        null,
        u.exports.createElement(
          Ri,
          {
            className: 'justify-content-between',
            style: {
              position: 'absolute',
              padding: '1rem 3rem',
              width: '100%',
              alignItems: 'center',
              pointerEvents: 'none',
            },
          },
          u.exports.createElement(
            Pi,
            { style: { pointerEvents: 'auto' } },
            u.exports.createElement(
              Ti,
              {
                key: 'play-pause',
                variant: 'outline-light',
                onClick: () => {
                  t ? (e(!1), Mi.emit(Di.RESUME)) : (e(!0), Mi.emit(Di.PAUSE));
                },
              },
              u.exports.createElement(ni, { icon: t ? Yt : Bt }),
            ),
            u.exports.createElement(
              Ti,
              {
                key: 'speed-up',
                variant: 'outline-light',
                onClick: () => {
                  Li.timePerTurn = Math.max(100, Li.timePerTurn / 1.2);
                },
              },
              u.exports.createElement(ni, { icon: Gt }),
            ),
            u.exports.createElement(
              Ti,
              {
                key: 'slow-down',
                variant: 'outline-light',
                onClick: () => {
                  Li.timePerTurn *= 1.2;
                },
              },
              u.exports.createElement(ni, { icon: Ht }),
            ),
            u.exports.createElement(
              Ti,
              {
                key: 'reset',
                variant: 'outline-light',
                onClick: () => {
                  Mi.emit(Di.RESET), e(!1);
                },
              },
              u.exports.createElement(ni, { icon: Vt }),
            ),
            u.exports.createElement(
              Ti,
              {
                key: 'full-screen',
                variant: 'outline-light',
                onClick: () => {
                  n ? (a(!1), r()) : (a(!0), i());
                },
              },
              n
                ? u.exports.createElement(ni, { icon: Ut })
                : u.exports.createElement(ni, { icon: Ft }),
            ),
          ),
          u.exports.createElement(_s, null),
        ),
        u.exports.createElement(ws, null),
      ),
    )
  );
}
class xs {
  static loadLog(t) {
    Mi.emit(Di.LOAD_LOG, t), Mi.emit(Di.RESET_UI);
  }
  static setUpdateLogCallback(t) {
    Wr.updateLogCallback = t;
  }
}
zt(xs, 'debugLog', Wr.log);
const ks = p('logs/getLogs', async t => {
  try {
    return (
      ((e = t.id),
      new Promise((t, n) => {
        new at(Pt)
          .getGameLogsByGameId(e)
          .then(e => {
            t(e);
          })
          .catch(t => {
            t instanceof St && n();
          });
      })).then(e => {
        t.callback(),
          setTimeout(() => {
            xs.loadLog(e);
          }, 1e3);
      }),
      ''
    );
  } catch (n) {
    throw n;
  }
  var e;
});
var Ts = m({
  name: 'logs',
  initialState: { logs: '' },
  reducers: {},
  extraReducers: t => {
    t.addCase(ks.fulfilled, (t, e) => {
      t.logs = e.payload;
    });
  },
}).reducer;
const Ss = () => g(),
  Ps = v,
  Os = () => {
    const t = new et(Pt),
      e = Ss();
    return (
      u.exports.useEffect(() => {
        null !== localStorage.getItem('token') &&
          t.getCurrentUser().then(t => {
            const n = `${kt.replace('http', 'ws')}/ws`,
              a = y.over(() => new WebSocket(n));
            a.brokerURL = n;
            (a.onConnect = () => {
              a.subscribe(`/updates/${t.id}`, t => {
                const n = JSON.parse(t.body);
                switch (n.status) {
                  case pt.Executing:
                    w.success('Executing now...');
                    break;
                  case pt.Executed:
                    w.success('Executed successfully!'),
                      e(
                        ks({
                          id: n.id,
                          callback: () =>
                            (window.location.href = './#/dashboard'),
                        }),
                      );
                    break;
                  case pt.ExecuteError:
                    w.error('Execution error!'),
                      e(
                        ks({
                          id: n.id,
                          callback: () =>
                            (window.location.href = './#/dashboard'),
                        }),
                      );
                }
                t.ack();
              }),
                a.subscribe(`/notifications/${t.id}`, t => {
                  const e = JSON.parse(t.body);
                  w(() =>
                    _('div', {
                      children: [b('h3', { children: e.title }), e.content],
                    }),
                  ),
                    t.ack();
                });
            }),
              a.activate();
          });
      }, []),
      b('div', {})
    );
  },
  Rs = () =>
    _(E, {
      children: [
        b(x, {
          position: 'bottom-right',
          toastOptions: {
            style: {
              background: '#242a3b',
              color: '#ffffff',
              fontFamily: 'Montserrat',
              borderRadius: '5px',
            },
          },
        }),
        b(Os, {}),
      ],
    });
const Cs = {
    user: {
      id: '',
      username: '',
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      country: '',
      college: '',
      avatarId: 0,
    },
    loading: !1,
    isRegistered: !1,
    isloggedIn: !1,
    isSuccess: !1,
    isSuccessUser: !1,
    isSuccessCreditonals: !1,
    isLogout: !1,
    error: !1,
    loginError: 'NIL',
    registerError: 'NIL',
  },
  Ns = p('user/registerAction', async (t, { rejectWithValue: e }) => {
    try {
      const e = await (t =>
        new Promise((e, n) => {
          new xt(Ot)
            .register({
              username: t.username,
              name: t.name,
              email: t.email,
              password: t.password,
              passwordConfirmation: t.confirmPassword,
              country: t.country,
              college: t.college,
              avatarId: t.avatarId,
            })
            .then(() => {
              e({ user: t });
            })
            .catch(t => {
              t instanceof St && n(t.message);
            });
        }))(t);
      return e.user;
    } catch (n) {
      throw e(n);
    }
  }),
  As = p('user/loginAction', async (t, { rejectWithValue: e }) => {
    try {
      const e = await (function (t = { email: ' ', password: '' }) {
        return new Promise((e, n) => {
          new K(Ot)
            .passwordLogin({ email: t.email, password: t.password })
            .then(n => {
              localStorage.setItem('token', n.token), e({ user: t });
            })
            .catch(t => {
              t instanceof St && n(t);
            });
        });
      })(t);
      return e;
    } catch (n) {
      if (n instanceof St) throw e(n.message);
    }
  }),
  Is = p('user/userAction', async () => {
    try {
      return await new Promise((t, e) => {
        new et(Pt)
          .getCurrentUser()
          .then(e => {
            t({
              id: e.id,
              fullName: e.name,
              userName: e.username,
              email: e.email,
              admin: e.isProfileComplete,
              college: e.college,
              country: e.country,
              avatarId: e.avatarId,
            });
          })
          .catch(t => {
            t instanceof St && e();
          });
      });
    } catch (t) {
      throw t;
    }
  }),
  js = p('user/changeUserDetails', async (t, { rejectWithValue: e }) => {
    try {
      return await ((n = t),
      new Promise((t, e) => {
        new et(Pt)
          .updateCurrentUser({
            name: n.userName,
            college: n.college,
            country: n.country,
            avatarId: n.avatarId,
          })
          .then(() => {
            t({ user: n }), w.success('Profile Updated');
          })
          .catch(t => {
            t instanceof St && (w.error(t.message), e());
          });
      }));
    } catch (a) {
      throw e('error');
    }
    var n;
  }),
  Ds = p('user/changeUserCreditionals', async t => {
    try {
      const e = await (t =>
        new Promise((e, n) => {
          new et(Pt)
            .updatePassword({
              oldPassword: t.oldPassword,
              password: t.newPassword,
              passwordConfirmation: t.confirmPassword,
            })
            .then(() => {
              e(t.confirmPassword);
            })
            .catch(t => {
              t instanceof St && n({ error: t.message });
            });
        }))(t);
      return e;
    } catch (e) {
      throw e;
    }
  }),
  Ms = m({
    name: 'register',
    initialState: Cs,
    reducers: {
      switchRegister: t => {
        t.isRegistered = !1;
      },
      loggedIn: t => {
        t.isloggedIn = !0;
      },
      logout: t => {
        (t.user = Cs.user),
          (t.isloggedIn = Cs.isloggedIn),
          (t.loading = Cs.loading),
          (t.isSuccess = Cs.isSuccess),
          (t.isLogout = !0);
      },
      creditionals: t => {
        t.isSuccessCreditonals = !1;
      },
    },
    extraReducers: t => {
      t.addCase(Ns.pending, t => {
        (t.loading = !0), (t.registerError = Cs.registerError);
      })
        .addCase(Ns.fulfilled, (t, e) => {
          (t.loading = !1),
            (t.user = e.payload),
            (t.isRegistered = !0),
            (t.registerError = Cs.registerError);
        })
        .addCase(Ns.rejected, (t, e) => {
          (t.loading = !1),
            (t.isRegistered = !1),
            'string' == typeof e.payload && (t.registerError = e.payload);
        })
        .addCase(As.pending, t => {
          (t.loading = !0), (t.loginError = 'NIL');
        })
        .addCase(As.fulfilled, (t, e) => {
          var n, a;
          (null == (n = e.payload) ? void 0 : n.user.email) &&
            (t.user.email = null == (a = e.payload) ? void 0 : a.user.email),
            (t.loading = !1),
            (t.isloggedIn = !0),
            (t.loginError = 'NIL');
        })
        .addCase(As.rejected, (t, e) => {
          'string' == typeof e.payload && (t.loginError = e.payload),
            (t.loading = !1),
            (t.isloggedIn = !1);
        })
        .addCase(Is.pending, t => {
          (t.loading = !0), (t.isSuccess = !1);
        })
        .addCase(Is.fulfilled, (t, e) => {
          (t.loading = !1),
            (t.isSuccess = !0),
            (t.user.name = e.payload.fullName),
            (t.user.username = e.payload.userName),
            (t.user.country = e.payload.country),
            (t.user.college = e.payload.college),
            (t.user.avatarId = e.payload.avatarId);
        })
        .addCase(Is.rejected, t => {
          (t.loading = !1), (t.isSuccess = !1);
        })
        .addCase(js.pending, t => {
          (t.loading = !0), (t.isSuccessUser = !1);
        })
        .addCase(js.fulfilled, (t, e) => {
          (t.loading = !1),
            (t.isSuccessUser = !0),
            (t.user.username = e.payload.user.userName),
            (t.user.country = e.payload.user.country),
            (t.user.college = e.payload.user.college),
            (t.user.avatarId = e.payload.user.avatarId);
        })
        .addCase(js.rejected, t => {
          (t.loading = !1), (t.isSuccessUser = !1);
        })
        .addCase(Ds.pending, t => {
          (t.loading = !0), (t.isSuccessCreditonals = !1);
        })
        .addCase(Ds.fulfilled, t => {
          (t.loading = !1), (t.isSuccessCreditonals = !0), (t.error = !1);
        })
        .addCase(Ds.rejected, t => {
          (t.loading = !1), (t.isSuccessCreditonals = !1), (t.error = !0);
        });
    },
  }),
  {
    switchRegister: Ls,
    logout: qs,
    creditionals: zs,
    loggedIn: Us,
  } = Ms.actions,
  Fs = t => t.user.user,
  Hs = t => t.user.loading,
  Bs = t => t.user.isRegistered,
  Ys = t => t.user.isloggedIn,
  Gs = t => (t.user.loginError ? t.user.loginError : 'NIL'),
  Vs = t => (t.user.registerError ? t.user.registerError : 'NIL'),
  Ws = t => t.user.error,
  Xs = t => t.user.isSuccessCreditonals,
  $s = t => t.user.isSuccessUser;
var Js = Ms.reducer;
const Ks = m({
    name: 'BattleTv',
    initialState: {
      loading: !1,
      hasErrors: !1,
      hasbeenFetched: !1,
      battletv: [],
    },
    reducers: {
      getBattleTv: t => {
        t.loading = !0;
      },
      getBattleTvSuccess: (t, { payload: e }) => {
        (t.battletv = e),
          (t.loading = !1),
          (t.hasbeenFetched = !0),
          (t.hasErrors = !1);
      },
      getBattleTvFailure: t => {
        (t.loading = !1), (t.hasErrors = !0);
      },
    },
  }),
  {
    getBattleTv: Zs,
    getBattleTvSuccess: Qs,
    getBattleTvFailure: to,
  } = Ks.actions,
  eo = t => t.battletv;
var no = Ks.reducer;
function ao() {
  return async t => {
    t(Zs());
    new lt(Pt)
      .getUserMatches()
      .then(e => {
        t(Qs(e));
      })
      .catch(e => {
        e instanceof St && w.error(e.message), t(to());
      });
  };
}
const io = p('notifs/getNotifs', async () => {
    try {
      return await new Promise((t, e) => {
        new dt(Pt)
          .getAllNotifications()
          .then(e => {
            t(e);
          })
          .catch(t => {
            t instanceof St && e();
          });
      });
    } catch (t) {
      throw t;
    }
  }),
  ro = p(
    'notifs/markAsRead',
    async (t, { rejectWithValue: e, getState: n }) => {
      try {
        const { notifs: t } = n();
        return void t.notifs.map(async t => {
          if (!1 === t.read)
            try {
              await ((n = t.id),
              new Promise((t, e) => {
                new dt(Pt)
                  .saveNotificationReadStatus(n, !0)
                  .then(() => t())
                  .catch(t => {
                    t instanceof St && e();
                  });
              }));
            } catch (a) {
              e(a);
            }
          var n;
        });
      } catch (yc) {
        e(yc);
      }
    },
  ),
  so = p('notifs/addNotifToState', async t => t),
  oo = t => t.notifs.notifs,
  co = t => t.notifs.unreadNotifs;
var lo = m({
  name: 'notifs',
  initialState: { notifs: [], unreadNotifs: 0 },
  reducers: {},
  extraReducers: t => {
    t.addCase(io.pending, t => {
      t.notifs = [];
    })
      .addCase(io.fulfilled, (t, e) => {
        t.notifs = e.payload;
        const n = t.notifs.filter(t => !1 === t.read).length;
        t.unreadNotifs = n;
      })
      .addCase(so.fulfilled, (t, e) => {
        t.notifs.push(e.payload), (t.unreadNotifs += 1);
      })
      .addCase(ro.fulfilled, t => {
        t.notifs.map(t => {
          t.read = !0;
        }),
          (t.unreadNotifs = 0);
      });
  },
}).reducer;
const uo = m({
    name: 'historyEditor',
    initialState: { code: '', map: [] },
    reducers: {
      changeHistoryEditorCode: (t, e) => {
        t.code = e.payload;
      },
      changeHistoryEditorMap: (t, e) => {
        t.map = e.payload;
      },
    },
  }),
  { changeHistoryEditorCode: ho, changeHistoryEditorMap: fo } = uo.actions;
var po = uo.reducer;
const mo = ['c_cpp', 'python', 'java'],
  go = m({
    name: 'editorState',
    initialState: {
      allLanguagesCode: [
        '#include "player_code.h"\n\n// This initial code is well commented and serves as a small tutorial for game\n// APIs, for more information you can refer to the documentation\n\n// This is the function player has to fill\n// You can define any new functions here that you want\nGame run(const State &state) {\n\n  // Always start by instantiating a Game class object\n  Game game;\n\n  size_t remaining_coins = state.get_coins_left();\n\n  game.logr() << "TURN " << state.get_turn_no() << " LOGS:";\n\n  // Get all the attackers and defenders in the game and store it\n  const std::vector<Attacker> &attackers = state.get_attackers();\n  const std::vector<Defender> &defenders = state.get_defenders();\n\n  // The function get_all_valid_spawn_positions() is a helper which will give us\n  // the list of valid spawn positions in map.\n  // If the position  we\'re spawning is not one of these, the player will be\n  // penalized by deducting the spawn cost but not spawning the attacker\n  std::vector<Position> all_valid_spawn_positions =\n      get_all_valid_spawn_positions();\n\n  // Lets say I want to spawn an attacker of each of the type in one turn\n  // and I want to use the all_valid_spawn_positions list as well. In order to\n  // keep traack of the last index in the list that we spawned at, we can use a\n  // static variable in c++\n\n  static int last_spawned = 0;\n\n  // If there\'s no defenders left,we can stop spawning and save up on coins,\n  // which are important for boosting game score\n  if (!defenders.empty()) {\n    for (size_t type_id = 1; type_id <= Constants::NO_OF_ATTACKER_TYPES;\n         type_id++) {\n      // Spawn the attacker of type_id at position\n      // all_valid_spawn_positions[last_spawned]\n\n      // There are two cases when you might be panalized\n      //    - Spawning at invalid position\n      //    - Spawning at position where you have already spawned one attacker\n      //    in the same turn\n      //\n      // We have provided helpers to check just that\n\n      // game class will keep track of all your spawned positions for you and\n      // provides a helper method called already_spawned_at_position(Position)\n      // to check if you already spawned in the position\n\n      // Mostly a good practice to check with these two helpers before spawning,\n      // to save up on accidental penalties\n      if (is_valid_spawn_position(all_valid_spawn_positions[last_spawned]) &&\n          !game.already_spawned_at_position(\n              all_valid_spawn_positions[last_spawned])) {\n        // If lets say you had run out of coins left, the game will just ignore\n        // the spawn\n        game.spawn_attacker(type_id, all_valid_spawn_positions[last_spawned]);\n\n        // This has the starting attributes for the attacker we are about to\n        // spawn\n        // For full information about the Attributes class refer the\n        // documentation\n        // This can be used for strategizing\n        Attributes attackers_attributes =\n            Constants::ATTACKER_TYPE_ATTRIBUTES.at(type_id);\n\n        // You can use the logger we provide to show log messages in the\n        // rendered game\n        game.logr() << "To to be spawned at Position("\n                    << all_valid_spawn_positions[last_spawned].get_x() << ","\n                    << all_valid_spawn_positions[last_spawned].get_y() << ")"\n                    << \'\\n\';\n        (last_spawned += 1) %= all_valid_spawn_positions.size();\n      }\n    }\n  }\n\n  // Now lets say you always want to set the target for the attackers[0] to\n  // defenders[0]\n  // To do that you do\n  if (!attackers.empty() && !defenders.empty()) {\n    // check if they are empty beforehand to be safe from unexpected errors\n    game.set_target(attackers.front(), defenders.front());\n  }\n\n  // Lets log all the spawned positions for this turn\n  for (auto &[type_id, pos] : game.get_spawn_positions()) {\n    // you can use logger macro as well, which is an alias for game.logr()\n    logger << "Type " << type_id << " at Position (" << pos.get_x() << ","\n           << pos.get_y() << ")\\n";\n  }\n\n  // always  return the game object\n  return game;\n}\n',
        'from player_code import (\n    Position,\n    Attacker,\n    Defender,\n    AttackerType,\n    DefenderType,\n    Constants,\n    Map,\n    State,\n    Game,\n    is_valid_spawn_position,\n    get_all_valid_spawn_positions,\n)\n\n# This initial code is well commented and serves as a small tutorial for game\n# APIs, for more information you can refer to the documentation\n\n# This is the function player has to fill\n# You can define any new functions here that you want\n\n\nlast_spawned = 0\n\ndef run(state: State) -> Game:\n    global last_spawned\n    # Always start by instantiating a Game class object\n    game = Game()\n\n    remaining_coins = state.no_of_coins_left\n\n    game.log("TURN {} LOGS:\\n".format(state.turn_no))\n    \n    # Get all the attackers and defenders in the game and store it\n    attackers = state.attackers\n    defenders = state.defenders\n    \n    # The function get_all_valid_spawn_positions() is a helper which will give us\n    # the list of valid spawn positions in map.\n    # If the position  we\'re spawning is not one of these, the player will be\n    # penalized by deducting the spawn cost but not spawning the attacker\n    all_valid_spawn_positions = get_all_valid_spawn_positions()\n    \n    # If there\'s no defenders left,we can stop spawning and save up on coins,\n    # which are important for boosting game score\n    if len(defenders) != 0:\n        for type_id in range(1,Constants.NO_OF_ATTACKER_TYPES+1):\n            \n            # Spawn the attacker of type_id at position\n            # all_valid_spawn_positions[last_spawned]\n\n            # There are two cases when you might be panalized\n            #    - Spawning at invalid position\n            #    - Spawning at position where you have already spawned one attacker\n            #    in the same turn\n             \n            # We have provided helpers to check just that\n\n            # game class will keep track of all your spawned positions for you and\n            # provides a helper method called is_already_spawned_at_position(Position)\n            # to check if you already spawned in the position\n\n            # Mostly a good practice to check with these two helpers before spawning,\n            # to save up on accidental penalties\n\n            if is_valid_spawn_position(all_valid_spawn_positions[last_spawned]) and\\\n                    not game.is_already_spawned_at_position(all_valid_spawn_positions[last_spawned]):\n                        \n                # If lets say you had run out of coins left, the game will just ignore\n                # the spawn\n                game.spawn_attacker(type_id, all_valid_spawn_positions[last_spawned])\n                \n                # You can use the logger we provide to show log messages in the\n                # rendered game\n                # For full information about the AttackerType class refer the\n                # documentation\n                # This information can be used for strategizing\n                attackers_attributes: AttackerType = Constants.ATTACKER_TYPE_ATTRIBUTES[type_id]\n\n                # You can use the logger we provide to show log messages in the\n                # rendered game\n                pos = all_valid_spawn_positions[last_spawned]\n                game.log("To be spawned at Position({},{})\\n".format(pos.x,pos.y))\n\n                last_spawned = last_spawned + 1\n                last_spawned = last_spawned % len(all_valid_spawn_positions)\n                \n    #Now lets say you always want to set the target for the attackers[0] to\n    #defenders[0]\n    #To do that you do\n    if len(attackers)!=0 and len(defenders)!=0:\n        game.set_target(attackers[0].id,defenders[0].id)\n        \n    #Lets log all the spawned positions for this turn\n    for type_id, pos in game.spawn_positions:\n        game.log("Type {} at Position ({},{})".\n            format(type_id, pos.x, pos.y))\n\n    #always  return the game object\n    return game\n\n',
        'import java.util.ArrayList;\nimport java.util.List;\n\n// This initial code is well commented and serves as a small tutorial for game\n// APIs, for more information you can refer to the documentation\n\n// This is the function player has to fill\n// You can define any new functions here that you want\npublic class Run {\n\n    // Lets say I want to spawn an attacker of each of the type in one turn\n    // and I want to use the Helpers.getAllValidSpawnPositions list as well. In\n    // order to keep track of the last index in the list that we spawned at, we can\n    // use a private variable. We\'ll initialize it in the constructor for this\n    // class. This class is only instantiated once so it\'s safe to use a private\n    // variable.\n    private int lastSpawned;\n\n    public Run() {\n        this.lastSpawned = 0;\n    }\n\n    public Game run(State state) {\n\n        // Always start by instantiating a Game class object\n        Game game = new Game();\n\n        int remainingCoins = state.getCoinsLeft();\n        game.log("TURN " + state.getTurnNo() + " LOGS:");\n\n        // Get all the attackers and defenders in the game and store it\n        List<Attacker> attackers = state.getAttackers();\n        List<Defender> defenders = state.getDefenders();\n\n        // The function get_all_valid_spawn_positions() is a helper which will give us\n        // the list of valid spawn positions in map.\n        // If the position we\'re spawning is not one of these, the player will be\n        // penalized by deducting the spawn cost but not spawning the attacker\n\n        // The Helpers.getAllValidSpawnPositions() function\n        // returns a Set<Position>, if we want to index on it,\n        // we must convert to an indexable collection\n        List<Position> allValidSpawnPositons = new ArrayList<Position>(Helpers.getAllValidSpawnPositions());\n\n        // If there\'s no defenders left,we can stop spawning and save up on coins,\n        // which are important for boosting game score\n        if (!defenders.isEmpty()) {\n            for (int typeId = 1; typeId <= Constants.NO_OF_ATTACKER_TYPES; typeId++) {\n                // Spawn the attacker of typeId at position\n                // allValidSpawnPositions[last_spawned]\n\n                // There are two cases when you might be panalized\n                // - Spawning at invalid position\n                // - Spawning at position where you have already spawned one attacker\n                // in the same turn\n                //\n                // We have provided helpers to check just that\n\n                // game class will keep track of all your spawned positions for you and\n                // provides a helper method called already_spawned_at_position(Position)\n                // to check if you already spawned in the position\n\n                // Mostly a good practice to check with these two helpers before spawning,\n                // to save up on accidental penalties\n                //\n\n                if (Helpers.isValidSpawnPosition(allValidSpawnPositons.get(lastSpawned)) &&\n                        !game.alreadySpawnedAtPosition(\n                                allValidSpawnPositons.get(lastSpawned))) {\n\n                    // If lets say you had run out of coins left, the game will just ignore\n                    // the spawn\n                    game.spawnAttacker(typeId, allValidSpawnPositons.get(lastSpawned));\n\n                    // This has the starting attributes for the attacker we are about to\n                    // spawn\n                    // For full information about the Attributes class refer the\n                    // documentation\n                    // This information can be used for strategizing\n                    Attributes attackersAttributes = Constants.ATTACKER_TYPE_ATTRIBUTES.get(typeId);\n\n                    Position pos = allValidSpawnPositons.get(lastSpawned);\n                    game.log(String.format("To be spawned at Position(%d,%d)\\n", pos.getX(), pos.getY()));\n\n                    lastSpawned += 1;\n                    lastSpawned %= allValidSpawnPositons.size();\n                }\n\n            }\n        }\n\n        // Now lets say you always want to set the target for the attackers[0] to\n        // defenders[0]\n        // To do that you do\n        if (!attackers.isEmpty() && !defenders.isEmpty()) {\n            // check if they are empty beforehand to be safe from unexpected errors\n            game.setTarget(attackers.get(0).getId(), defenders.get(0).getId());\n        }\n\n        // Lets log all the spawned positions for this turn\n        for (var entry : game.getSpawnPositions()) {\n            game.log(String.format("Type %d at Position(%d, %d)",\n                    entry.getTypeId(), entry.getPos().getX(),\n                    entry.getPos().getY()));\n        }\n\n        // always return the game object\n        return game;\n    }\n}\n',
      ],
      userCode: '',
      language: '',
      lastSavedAt: new Date(),
    },
    reducers: {
      initializeEditorStates: (t, e) => {
        (t.userCode = e.payload.code),
          'C' === e.payload.language || 'CPP' === e.payload.language
            ? (t.language = 'c_cpp')
            : 'PYTHON' === e.payload.language
            ? (t.language = 'python')
            : 'JAVA' === e.payload.language && (t.language = 'java'),
          (t.lastSavedAt = e.payload.lastSavedAt);
        const n = mo.indexOf(t.language);
        t.allLanguagesCode[n] = e.payload.code;
      },
      updateUserCode: (t, e) => {
        const n = e.payload.currentUserLanguage,
          a = mo.indexOf(n);
        (t.allLanguagesCode[a] = e.payload.currentUserCode),
          (t.userCode = e.payload.currentUserCode);
      },
      changeLanguage: (t, e) => {
        const n = e.payload,
          a = mo.indexOf(n);
        (t.userCode = t.allLanguagesCode[a]), (t.language = e.payload);
      },
    },
  }),
  {
    updateUserCode: vo,
    changeLanguage: yo,
    initializeEditorStates: bo,
  } = go.actions,
  wo = t => t.codeEditorReducer.editorState.userCode,
  _o = t => t.codeEditorReducer.editorState.language;
var Eo = go.reducer;
const xo = m({
    name: 'settingsState',
    initialState: {
      isSettingsOpen: !1,
      fontSize: 16,
      theme: 'monokai',
      keyboardHandler: 'default',
      enableBasicAutoComplete: !0,
      enableSnippets: !0,
    },
    reducers: {
      isSettingsOpened: (t, e) => {
        t.isSettingsOpen = e.payload;
      },
      fontSizeChanged: (t, e) => {
        t.fontSize = e.payload;
      },
      themeChanged: (t, e) => {
        t.theme = e.payload;
      },
      keyboardHandlerChanged: (t, e) => {
        t.keyboardHandler = e.payload;
      },
      enableBasicAutoCompleteChanged: (t, e) => {
        t.enableBasicAutoComplete = e.payload;
      },
      enableSnippetsChanged: (t, e) => {
        t.enableSnippets = e.payload;
      },
    },
  }),
  {
    isSettingsOpened: ko,
    fontSizeChanged: To,
    themeChanged: So,
    keyboardHandlerChanged: Po,
    enableBasicAutoCompleteChanged: Oo,
    enableSnippetsChanged: Ro,
  } = xo.actions,
  Co = t => t.codeEditorReducer.settingsState.isSettingsOpen,
  No = t => t.codeEditorReducer.settingsState.fontSize,
  Ao = t => t.codeEditorReducer.settingsState.theme,
  Io = t => t.codeEditorReducer.settingsState.keyboardHandler,
  jo = t => t.codeEditorReducer.settingsState.enableBasicAutoComplete,
  Do = t => t.codeEditorReducer.settingsState.enableSnippets;
var Mo = xo.reducer;
const Lo = m({
    name: 'selfMatchModalState',
    initialState: {
      isSelfMatchModalOpen: !1,
      codeCommitID: null,
      mapCommitID: null,
      codeCommitName: 'Current Code',
      mapCommitName: 'Current Map',
    },
    reducers: {
      isSelfMatchModalOpened: (t, e) => {
        t.isSelfMatchModalOpen = e.payload;
      },
      codeCommitIDChanged: (t, e) => {
        t.codeCommitID = e.payload;
      },
      mapCommitIDChanged: (t, e) => {
        t.mapCommitID = e.payload;
      },
      codeCommitNameChanged: (t, e) => {
        t.codeCommitName = e.payload;
      },
      mapCommitNameChanged: (t, e) => {
        t.mapCommitName = e.payload;
      },
    },
  }),
  {
    isSelfMatchModalOpened: qo,
    codeCommitIDChanged: zo,
    mapCommitIDChanged: Uo,
    codeCommitNameChanged: Fo,
    mapCommitNameChanged: Ho,
  } = Lo.actions,
  Bo = t => t.selfMatchModal.isSelfMatchModalOpen,
  Yo = t => t.selfMatchModal.codeCommitID,
  Go = t => t.selfMatchModal.mapCommitID,
  Vo = t => t.selfMatchModal.codeCommitName,
  Wo = t => t.selfMatchModal.mapCommitName;
var Xo = Lo.reducer;
const $o = S({
  reducer: {
    user: Js,
    battletv: no,
    notifs: lo,
    historyEditor: po,
    codeEditorReducer: T(
      { key: 'root', storage: P },
      k({ editorState: Eo, settingsState: Mo }),
    ),
    logs: Ts,
    selfMatchModal: Xo,
  },
  middleware: [O],
});
var Jo = '_overlayBackground_276w4_1',
  Ko = '_container_276w4_14',
  Zo = '_dot_276w4_24';
function Qo() {
  return b('div', {
    className: Jo,
    children: _('div', {
      className: Ko,
      children: [
        b('div', { className: Zo }),
        b('div', { className: Zo }),
        b('div', { className: Zo }),
        b('div', { className: Zo }),
        b('div', { className: Zo }),
      ],
    }),
  });
}
function tc() {
  const t = Ps(Ys),
    e = R();
  return (
    u.exports.useEffect(() => {
      e(t ? '/dashboard' : '/login', { replace: !0 });
    }, []),
    null
  );
}
const ec = u.exports.lazy(() =>
    q(
      () => import('./Home.fbed2abb.js'),
      [
        'assets/Home.fbed2abb.js',
        'assets/Home.6bb28b22.css',
        'assets/vendor.81f97c66.js',
      ],
    ),
  ),
  nc = u.exports.lazy(() =>
    q(
      () => import('./Dashboard.774dcfc6.js'),
      [
        'assets/Dashboard.774dcfc6.js',
        'assets/Dashboard.8277b0fe.css',
        'assets/vendor.81f97c66.js',
        'assets/index.es.b7d0ea5d.js',
        'assets/Form.6d298630.js',
        'assets/ThemeProvider.869a7bec.js',
        'assets/FormGroup.c96accb6.js',
        'assets/createWithBsPrefix.439c8819.js',
        'assets/Col.0eeb879f.js',
        'assets/Fade.6981a97a.js',
        'assets/toConsumableArray.f9a08daa.js',
        'assets/scrollbarSize.a78508fb.js',
        'assets/Row.1411b6b5.js',
        'assets/Button.7eb63b50.js',
        'assets/hasClass.105c66bc.js',
      ],
    ),
  ),
  ac = u.exports.lazy(() =>
    q(
      () => import('./MapDesigner.7f95f4e3.js'),
      [
        'assets/MapDesigner.7f95f4e3.js',
        'assets/MapDesigner.7a04b6dc.css',
        'assets/vendor.81f97c66.js',
        'assets/codecharacter-map-designer-2022.es.b94f67c0.js',
        'assets/Modal.f49e15c5.js',
        'assets/ThemeProvider.869a7bec.js',
        'assets/Fade.6981a97a.js',
        'assets/scrollbarSize.a78508fb.js',
        'assets/hasClass.105c66bc.js',
        'assets/AbstractModalHeader.205d102b.js',
        'assets/CloseButton.0522e079.js',
        'assets/createWithBsPrefix.439c8819.js',
        'assets/divWithClassName.7695ab43.js',
        'assets/Container.8990cc41.js',
        'assets/Row.1411b6b5.js',
      ],
    ),
  ),
  ic = u.exports.lazy(() =>
    q(
      () => import('./History.26a23f29.js'),
      [
        'assets/History.26a23f29.js',
        'assets/History.b22b2f78.css',
        'assets/vendor.81f97c66.js',
        'assets/Button.7eb63b50.js',
        'assets/ThemeProvider.869a7bec.js',
        'assets/index.es.b7d0ea5d.js',
        'assets/toConsumableArray.f9a08daa.js',
        'assets/codecharacter-map-designer-2022.es.b94f67c0.js',
        'assets/Container.8990cc41.js',
        'assets/Row.1411b6b5.js',
        'assets/Col.0eeb879f.js',
      ],
    ),
  ),
  rc = u.exports.lazy(() =>
    q(
      () => import('./LoginForm.e626266b.js'),
      [
        'assets/LoginForm.e626266b.js',
        'assets/LoginForm.d0e27a3f.css',
        'assets/index.es.b7d0ea5d.js',
        'assets/vendor.81f97c66.js',
        'assets/Alert.87b3ae07.js',
        'assets/Alert.bcf3e57b.css',
        'assets/ThemeProvider.869a7bec.js',
        'assets/Form.6d298630.js',
        'assets/FormGroup.c96accb6.js',
        'assets/createWithBsPrefix.439c8819.js',
        'assets/Col.0eeb879f.js',
        'assets/Fade.6981a97a.js',
        'assets/Button.7eb63b50.js',
        'assets/CloseButton.0522e079.js',
        'assets/divWithClassName.7695ab43.js',
        'assets/auth.module.fa7fd44a.js',
        'assets/auth.module.72949271.css',
        'assets/Modal.f49e15c5.js',
        'assets/scrollbarSize.a78508fb.js',
        'assets/hasClass.105c66bc.js',
        'assets/AbstractModalHeader.205d102b.js',
        'assets/Card.699e5227.js',
        'assets/Container.8990cc41.js',
      ],
    ),
  ),
  sc = u.exports.lazy(() =>
    q(
      () => import('./RegisterForm.03632054.js'),
      [
        'assets/RegisterForm.03632054.js',
        'assets/RegisterForm.05612214.css',
        'assets/vendor.81f97c66.js',
        'assets/index.es.b7d0ea5d.js',
        'assets/auth.module.fa7fd44a.js',
        'assets/auth.module.72949271.css',
        'assets/Alert.87b3ae07.js',
        'assets/Alert.bcf3e57b.css',
        'assets/ThemeProvider.869a7bec.js',
        'assets/Form.6d298630.js',
        'assets/FormGroup.c96accb6.js',
        'assets/createWithBsPrefix.439c8819.js',
        'assets/Col.0eeb879f.js',
        'assets/Fade.6981a97a.js',
        'assets/Button.7eb63b50.js',
        'assets/CloseButton.0522e079.js',
        'assets/divWithClassName.7695ab43.js',
        'assets/PassworAlert.eb87f102.js',
        'assets/OtherDetails.c37c6a5c.js',
        'assets/OtherDetails.b532eab3.css',
        'assets/index.esm.9a519a65.js',
        'assets/Avatar.7b557cd5.js',
        'assets/Card.699e5227.js',
        'assets/Container.8990cc41.js',
      ],
    ),
  ),
  oc = u.exports.lazy(() =>
    q(
      () => import('./Leaderboard.eb3b53e7.js'),
      [
        'assets/Leaderboard.eb3b53e7.js',
        'assets/Leaderboard.6d0f298b.css',
        'assets/vendor.81f97c66.js',
        'assets/react-paginate.76321380.js',
        'assets/Avatar.7b557cd5.js',
        'assets/Modal.f49e15c5.js',
        'assets/ThemeProvider.869a7bec.js',
        'assets/Fade.6981a97a.js',
        'assets/scrollbarSize.a78508fb.js',
        'assets/hasClass.105c66bc.js',
        'assets/AbstractModalHeader.205d102b.js',
        'assets/CloseButton.0522e079.js',
        'assets/createWithBsPrefix.439c8819.js',
        'assets/divWithClassName.7695ab43.js',
        'assets/Button.7eb63b50.js',
      ],
    ),
  ),
  cc = u.exports.lazy(() =>
    q(
      () => import('./BattleTV.1c39055b.js'),
      [
        'assets/BattleTV.1c39055b.js',
        'assets/BattleTV.3f276600.css',
        'assets/vendor.81f97c66.js',
        'assets/react-paginate.76321380.js',
        'assets/Avatar.7b557cd5.js',
      ],
    ),
  ),
  lc = u.exports.lazy(() =>
    q(
      () => import('./ActivateUser.435d1ccc.js'),
      [
        'assets/ActivateUser.435d1ccc.js',
        'assets/ActivateUser.1df46c6e.css',
        'assets/vendor.81f97c66.js',
        'assets/Card.699e5227.js',
        'assets/ThemeProvider.869a7bec.js',
        'assets/createWithBsPrefix.439c8819.js',
        'assets/divWithClassName.7695ab43.js',
      ],
    ),
  ),
  uc = u.exports.lazy(() =>
    q(
      () => import('./ResetpasswordVerifcation.88285933.js'),
      [
        'assets/ResetpasswordVerifcation.88285933.js',
        'assets/index.es.b7d0ea5d.js',
        'assets/vendor.81f97c66.js',
        'assets/Alert.87b3ae07.js',
        'assets/Alert.bcf3e57b.css',
        'assets/ThemeProvider.869a7bec.js',
        'assets/Form.6d298630.js',
        'assets/FormGroup.c96accb6.js',
        'assets/createWithBsPrefix.439c8819.js',
        'assets/Col.0eeb879f.js',
        'assets/Fade.6981a97a.js',
        'assets/Button.7eb63b50.js',
        'assets/CloseButton.0522e079.js',
        'assets/divWithClassName.7695ab43.js',
        'assets/PassworAlert.eb87f102.js',
        'assets/auth.module.fa7fd44a.js',
        'assets/auth.module.72949271.css',
        'assets/Card.699e5227.js',
      ],
    ),
  ),
  dc = u.exports.lazy(() =>
    q(
      () => import('./incompeleteProfile.70dc3d4f.js'),
      [
        'assets/incompeleteProfile.70dc3d4f.js',
        'assets/auth.module.fa7fd44a.js',
        'assets/auth.module.72949271.css',
        'assets/OtherDetails.c37c6a5c.js',
        'assets/OtherDetails.b532eab3.css',
        'assets/vendor.81f97c66.js',
        'assets/index.esm.9a519a65.js',
        'assets/Alert.87b3ae07.js',
        'assets/Alert.bcf3e57b.css',
        'assets/ThemeProvider.869a7bec.js',
        'assets/Form.6d298630.js',
        'assets/FormGroup.c96accb6.js',
        'assets/createWithBsPrefix.439c8819.js',
        'assets/Col.0eeb879f.js',
        'assets/Fade.6981a97a.js',
        'assets/Button.7eb63b50.js',
        'assets/CloseButton.0522e079.js',
        'assets/divWithClassName.7695ab43.js',
        'assets/Avatar.7b557cd5.js',
        'assets/index.es.b7d0ea5d.js',
        'assets/Card.699e5227.js',
        'assets/Container.8990cc41.js',
      ],
    ),
  );
function hc() {
  const t = Ss(),
    e = Ps(Ys);
  return (
    u.exports.useEffect(() => {
      null != localStorage.getItem('token') && t(Us());
    }, []),
    _(
      C,
      e
        ? {
            children: [
              b(N, { path: '/', element: b(ec, {}) }),
              b(N, { path: '/dashboard', element: b(nc, {}) }),
              b(N, { path: '/mapdesigner', element: b(ac, {}) }),
              b(N, { path: '/history', element: b(ic, {}) }),
              b(N, { path: '/leaderboard', element: b(oc, {}) }),
              b(N, { path: '/battletv', element: b(cc, {}) }),
              b(N, { path: '/activate', element: b(lc, {}) }),
              b(N, { path: '/incomplete-profile', element: b(dc, {}) }),
              b(N, { path: '*', element: b(tc, {}) }),
            ],
          }
        : {
            children: [
              b(N, { path: '/', element: b(ec, {}) }),
              b(N, { path: '/login', element: b(rc, {}) }),
              b(N, { path: '/register', element: b(sc, {}) }),
              b(N, { path: '/activate', element: b(lc, {}) }),
              b(N, { path: '/incomplete-profile', element: b(dc, {}) }),
              b(N, { path: '/reset-password', element: b(uc, {}) }),
              b(N, { path: '*', element: b(tc, {}) }),
            ],
          },
    )
  );
}
const fc = A($o),
  pc = u.exports.lazy(() =>
    q(
      () => import('./NavBar.68e3de92.js'),
      [
        'assets/NavBar.68e3de92.js',
        'assets/NavBar.1785876c.css',
        'assets/vendor.81f97c66.js',
        'assets/Alert.87b3ae07.js',
        'assets/Alert.bcf3e57b.css',
        'assets/ThemeProvider.869a7bec.js',
        'assets/Form.6d298630.js',
        'assets/FormGroup.c96accb6.js',
        'assets/createWithBsPrefix.439c8819.js',
        'assets/Col.0eeb879f.js',
        'assets/Fade.6981a97a.js',
        'assets/Button.7eb63b50.js',
        'assets/CloseButton.0522e079.js',
        'assets/divWithClassName.7695ab43.js',
        'assets/index.es.b7d0ea5d.js',
        'assets/index.esm.9a519a65.js',
        'assets/PassworAlert.eb87f102.js',
        'assets/Avatar.7b557cd5.js',
        'assets/AbstractModalHeader.205d102b.js',
        'assets/hasClass.105c66bc.js',
      ],
    ),
  ),
  mc = u.exports.lazy(() =>
    q(
      () => import('./SideBar.9dea8497.js'),
      [
        'assets/SideBar.9dea8497.js',
        'assets/SideBar.370c3eb1.css',
        'assets/index.es.b7d0ea5d.js',
        'assets/vendor.81f97c66.js',
      ],
    ),
  ),
  gc = u.exports.lazy(() =>
    q(
      () => import('./EditorSettings.74fa51bf.js'),
      [
        'assets/EditorSettings.74fa51bf.js',
        'assets/EditorSettings.58cba075.css',
        'assets/vendor.81f97c66.js',
        'assets/Modal.f49e15c5.js',
        'assets/ThemeProvider.869a7bec.js',
        'assets/Fade.6981a97a.js',
        'assets/scrollbarSize.a78508fb.js',
        'assets/hasClass.105c66bc.js',
        'assets/AbstractModalHeader.205d102b.js',
        'assets/CloseButton.0522e079.js',
        'assets/createWithBsPrefix.439c8819.js',
        'assets/divWithClassName.7695ab43.js',
        'assets/Container.8990cc41.js',
        'assets/Row.1411b6b5.js',
        'assets/Col.0eeb879f.js',
        'assets/FormGroup.c96accb6.js',
      ],
    ),
  ),
  vc = u.exports.lazy(() =>
    q(
      () => import('./SelfMatchMakeModal.41e2a50d.js'),
      [
        'assets/SelfMatchMakeModal.41e2a50d.js',
        'assets/SelfMatchMakeModal.a90d7f8b.css',
        'assets/vendor.81f97c66.js',
        'assets/Modal.f49e15c5.js',
        'assets/ThemeProvider.869a7bec.js',
        'assets/Fade.6981a97a.js',
        'assets/scrollbarSize.a78508fb.js',
        'assets/hasClass.105c66bc.js',
        'assets/AbstractModalHeader.205d102b.js',
        'assets/CloseButton.0522e079.js',
        'assets/createWithBsPrefix.439c8819.js',
        'assets/divWithClassName.7695ab43.js',
        'assets/Container.8990cc41.js',
        'assets/Row.1411b6b5.js',
        'assets/Col.0eeb879f.js',
        'assets/FormGroup.c96accb6.js',
        'assets/Button.7eb63b50.js',
      ],
    ),
  );
I.render(
  b(c.StrictMode, {
    children: b(j, {
      store: $o,
      children: _(D, {
        loading: null,
        persistor: fc,
        children: [
          b(M, {
            children: _(u.exports.Suspense, {
              fallback: b(Qo, {}),
              children: [
                b(gc, {}),
                b(vc, {}),
                b(pc, {}),
                _('div', {
                  className: z,
                  children: [
                    b(mc, {}),
                    b('div', { className: U, children: b(hc, {}) }),
                  ],
                }),
              ],
            }),
          }),
          b(Rs, {}),
        ],
      }),
    }),
  }),
  document.getElementById('root'),
);
export {
  yo as $,
  St as A,
  Ro as B,
  Bo as C,
  Yo as D,
  jo as E,
  No as F,
  Go as G,
  Vo as H,
  Co as I,
  Wo as J,
  Io as K,
  qo as L,
  Q as M,
  ot as N,
  Fo as O,
  zo as P,
  Ho as Q,
  Uo as R,
  yt as S,
  Ao as T,
  lt as U,
  wo as V,
  vo as W,
  xs as X,
  _o as Y,
  bo as Z,
  Es as _,
  Ss as a,
  gt as a0,
  ho as a1,
  fo as a2,
  Ot as a3,
  Gs as a4,
  kt as a5,
  As as a6,
  Ls as a7,
  Bs as a8,
  Vs as a9,
  Tt as aa,
  Ns as ab,
  Qo as ac,
  rt as ad,
  eo as ae,
  ao as af,
  ks as ag,
  wt as ah,
  xt as ai,
  et as aj,
  Xs as b,
  $s as c,
  qs as d,
  Fs as e,
  zs as f,
  Is as g,
  js as h,
  Ws as i,
  Ds as j,
  co as k,
  Hs as l,
  io as m,
  oo as n,
  ro as o,
  Ys as p,
  Us as q,
  K as r,
  Pt as s,
  ko as t,
  Ps as u,
  Do as v,
  To as w,
  So as x,
  Po as y,
  Oo as z,
};
