import { F as e, a, b as r, f as o } from './index.es.b7d0ea5d.js';
import {
  r as s,
  j as t,
  e as i,
  F as n,
  T as l,
  k as c,
  N as d,
} from './vendor.81f97c66.js';
import { A as m } from './Alert.87b3ae07.js';
import { s as h } from './auth.module.fa7fd44a.js';
import { c as u } from './ThemeProvider.869a7bec.js';
import {
  r as p,
  a3 as f,
  A as v,
  a as g,
  u as b,
  l as C,
  a4 as N,
  a5 as z,
  a6 as w,
  a7 as j,
} from './index.04970f6d.js';
import { M as x } from './Modal.f49e15c5.js';
import { F as A } from './Form.6d298630.js';
import { B as P } from './Button.7eb63b50.js';
import { C as S } from './Card.699e5227.js';
import { C as _ } from './Container.8990cc41.js';
import './Fade.6981a97a.js';
import './CloseButton.0522e079.js';
import './divWithClassName.7695ab43.js';
import './createWithBsPrefix.439c8819.js';
import './scrollbarSize.a78508fb.js';
import './hasClass.105c66bc.js';
import './AbstractModalHeader.205d102b.js';
import './FormGroup.c96accb6.js';
import './Col.0eeb879f.js';
var k = {
    prefix: 'fab',
    iconName: 'github',
    icon: [
      496,
      512,
      [],
      'f09b',
      'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
    ],
  },
  F = {
    prefix: 'fab',
    iconName: 'google',
    icon: [
      488,
      512,
      [],
      'f1a0',
      'M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z',
    ],
  };
var Z = '_modalContainer_1dvo4_1',
  B = '_modalHeader_1dvo4_9',
  y = '_error_1dvo4_18',
  E = '_normal_1dvo4_26';
const $ = e => {
  const [a, r] = s.exports.useState(''),
    [o, c] = s.exports.useState(!1);
  return t('div', {
    children: i(x, {
      show: e.open,
      onHide: e.handleForgetPassword,
      'aria-labelledby': 'contained-modal-title-vcenter',
      centered: !0,
      children: [
        t(x.Header, {
          closeButton: !0,
          className: B,
          children: t(x.Title, { children: 'Forgot Password' }),
        }),
        i(x.Body, {
          className: Z,
          children: [
            t('div', {
              children: i(A.Group, {
                className: 'mb-3',
                controlId: 'formBasicEmail',
                children: [
                  t(A.Label, { children: 'Email' }),
                  t(A.Control, {
                    type: 'name',
                    placeholder: 'Email',
                    value: a,
                    className: o ? y : E,
                    onChange: e => {
                      r(e.target.value);
                      e.target.value.match(
                        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      )
                        ? c(!1)
                        : c(!0);
                    },
                  }),
                  o
                    ? t(m, {
                        err: o,
                        content: 'Please ! Enter a valid Email ID',
                      })
                    : t(n, {}),
                ],
              }),
            }),
            ' ',
          ],
        }),
        t(x.Footer, {
          className: Z,
          children: t(P, {
            variant: 'light',
            onClick: () => {
              a.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) &&
                new p(f)
                  .forgotPassword({ email: a })
                  .then(() => {
                    l.success('Forget password email sent');
                  })
                  .catch(e => {
                    e instanceof v && l.error(e.message);
                  }),
                null != e.handleForgetPassword && e.handleForgetPassword();
            },
            children: 'Submit',
          }),
        }),
      ],
    }),
  });
};
function I() {
  const l = c(),
    [p, f] = s.exports.useState(!1),
    [v, x] = s.exports.useState(!1),
    [Z, B] = s.exports.useState(''),
    [y, E] = s.exports.useState(''),
    [I, L] = s.exports.useState(!1),
    [M, G] = s.exports.useState('password'),
    [H, T] = s.exports.useState(!1),
    [D, W] = s.exports.useState(!1),
    U = () => {
      G('password' === M ? 'text' : 'password');
    },
    q = g(),
    J = b(C),
    K = b(N);
  s.exports.useEffect(() => {
    switch (K) {
      case 'Invalid Password':
        E(''), x(!0);
        break;
      case 'User not found':
        B(''), f(!0), E(''), x(!0), L(!1);
    }
  }, [K]),
    s.exports.useEffect(() => {
      null != localStorage.getItem('token') && l('/dashboard', { replace: !0 });
    }, [localStorage.getItem('token')]);
  const O = () => {
    W(0 == D);
  };
  return t('div', {
    className: h.mainContainer,
    children: i(S, {
      className: h.cardContainer,
      children: [
        i('div', {
          className: h.titleContainer,
          children: [
            t('h1', {
              className: h.name,
              children: 'Welcome To CodeCharacter!',
            }),
            i(_, {
              className: h.subTitle,
              children: ['Log in to access your dashboard and profile', ' '],
            }),
          ],
        }),
        i('form', {
          className: h.formContainer,
          children: [
            t('div', {
              children: i(A.Group, {
                className: 'mb-3',
                controlId: 'formBasicEmail',
                children: [
                  t(A.Label, { children: 'Email' }),
                  t(A.Control, {
                    type: 'name',
                    placeholder: 'Email',
                    value: Z,
                    className: I ? (p ? h.error : h.correct) : h.normal,
                    onChange: e => {
                      B(e.target.value);
                      e.target.value.match(
                        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      )
                        ? f(!1)
                        : f(!0);
                    },
                  }),
                  p && I
                    ? t(m, { err: p, content: 'Please enter a valid Email ID' })
                    : t(n, {}),
                ],
              }),
            }),
            i(A.Group, {
              className: 'mb-3',
              controlId: 'formBasicPassword',
              children: [
                t(A.Label, { children: 'Password' }),
                i('div', {
                  className: h.eyeContainer,
                  children: [
                    t(A.Control, {
                      type: M,
                      placeholder: 'Password',
                      value: y,
                      onChange: e => {
                        null != e.target.value && (E(e.target.value), T(!0));
                        e.target.value
                          .toString()
                          .match(
                            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
                          )
                          ? x(!1)
                          : x(!0);
                      },
                      className: I ? (v ? h.error : h.correct) : h.normal,
                    }),
                    t('div', {
                      className: h.eye,
                      children: t(
                        e,
                        'password' === M
                          ? { size: 'sm', icon: a, onClick: U }
                          : { size: 'sm', icon: r, onClick: U },
                      ),
                    }),
                  ],
                }),
                t(
                  n,
                  v && I
                    ? {
                        children: t(m, {
                          err: v,
                          content: 'Check your password',
                        }),
                      }
                    : {},
                ),
              ],
            }),
            'NIL' != K ? t(m, { err: !H, content: K }) : t(n, {}),
            t('div', {
              className: u('d-grid gap-2', h.submitContainer),
              children: i(P, {
                variant: 'outline-primary',
                onClick: () => {
                  L(!0);
                  Z.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/)
                    ? f(!1)
                    : f(!0),
                    y.match(
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
                    )
                      ? x(!1)
                      : x(!0),
                    (p && v) || (T(!1), q(w({ email: Z, password: y })));
                },
                children: ['Login', ' ', J ? t(e, { icon: o }) : t(n, {})],
              }),
            }),
            i('div', {
              className: h.forgotPassword,
              children: [
                i(P, {
                  variant: 'link',
                  onClick: O,
                  children: [' ', 'Forgot Password?', ' '],
                }),
                t($, { open: D, handleForgetPassword: O }),
              ],
            }),
          ],
        }),
        i('div', {
          className: h.externalAuthButtons,
          children: [
            t('div', {
              className: h.googleButton,
              children: t('a', {
                href: `${z}/oauth2/authorization/google`,
                rel: 'noreferrer',
                children: t(P, {
                  variant: 'primary',
                  children: i('div', {
                    children: [t(e, { icon: F }), ' Login with Google'],
                  }),
                }),
              }),
            }),
            t('div', {
              className: h.githubButton,
              children: t('a', {
                href: `${z}/oauth2/authorization/github`,
                rel: 'noreferrer',
                children: t(P, {
                  variant: 'dark',
                  children: i('div', {
                    children: [t(e, { icon: k }), ' Login with Github'],
                  }),
                }),
              }),
            }),
          ],
        }),
        i('div', {
          className: h.linkContainer,
          children: [
            'Do not have an account?',
            ' ',
            i('span', {
              children: [
                ' ',
                i(d, {
                  to: '/register',
                  className: h.link,
                  onClick: () => {
                    q(j());
                  },
                  children: [' ', t('b', { children: 'register' })],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function L() {
  return t(I, {});
}
export { L as default };
