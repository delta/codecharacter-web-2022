import { F as e, a as s, b as a, f as r } from './index.es.b7d0ea5d.js';
import {
  r as o,
  k as t,
  w as n,
  j as i,
  e as c,
  F as l,
  T as d,
} from './vendor.81f97c66.js';
import { A as m } from './Alert.87b3ae07.js';
import { P as p } from './PassworAlert.eb87f102.js';
import { s as h } from './auth.module.fa7fd44a.js';
import { c as f } from './ThemeProvider.869a7bec.js';
import { A as u, r as w, a3 as C } from './index.04970f6d.js';
import { C as v } from './Card.699e5227.js';
import { F as N } from './Form.6d298630.js';
import { B as j } from './Button.7eb63b50.js';
import './Fade.6981a97a.js';
import './CloseButton.0522e079.js';
import './divWithClassName.7695ab43.js';
import './createWithBsPrefix.439c8819.js';
import './FormGroup.c96accb6.js';
import './Col.0eeb879f.js';
function P() {
  const [P, b] = o.exports.useState(!1),
    [g, x] = o.exports.useState(!1),
    [S, k] = o.exports.useState(''),
    [y, z] = o.exports.useState(''),
    [A, B] = o.exports.useState('password'),
    [F, L] = o.exports.useState(!1),
    [$, I] = o.exports.useState('password'),
    [R, G] = o.exports.useState('NIL'),
    Z = t(),
    T = n(),
    W = new URLSearchParams(T.search).get('token'),
    E = () => {
      B('password' === A ? 'text' : 'password');
    },
    U = () => {
      I('password' === $ ? 'text' : 'password');
    };
  return i('div', {
    className: h.mainContainer,
    children: c(v, {
      className: h.cardContainer,
      children: [
        i('div', {
          className: h.titleContainer,
          children: i('h2', {
            className: h.name,
            children: 'CodeCharacter Reset-Password',
          }),
        }),
        i('div', { children: i(p, { err: !0, variantColor: 'info' }) }),
        c('form', {
          className: h.formContainer,
          children: [
            c(N.Group, {
              className: 'mb-3',
              controlId: 'formBasicPassword',
              children: [
                i(N.Label, { children: 'New Password' }),
                c('div', {
                  className: h.eyeContainer,
                  children: [
                    i(N.Control, {
                      type: A,
                      placeholder: 'New Password',
                      value: y,
                      onChange: e => {
                        null != e.target.value && z(e.target.value);
                        e.target.value
                          .toString()
                          .match(
                            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
                          )
                          ? x(!1)
                          : x(!0);
                      },
                      className: g ? h.error : h.normal,
                    }),
                    i('div', {
                      className: h.eye,
                      children: i(
                        e,
                        'password' === A
                          ? { size: 'sm', icon: s, onClick: E }
                          : { size: 'sm', icon: a, onClick: E },
                      ),
                    }),
                  ],
                }),
                i(
                  l,
                  g
                    ? {
                        children: i(m, {
                          err: g,
                          content: 'Password did not match the format',
                        }),
                      }
                    : {},
                ),
              ],
            }),
            i('div', {
              children: c(N.Group, {
                className: 'mb-3',
                controlId: 'formBasicConfirmPassword',
                children: [
                  i(N.Label, { children: 'Confirm Password' }),
                  c('div', {
                    className: h.eyeContainer,
                    children: [
                      i(N.Control, {
                        type: $,
                        placeholder: 'Confirm Password',
                        value: S,
                        className: P ? h.error : h.normal,
                        onChange: e => {
                          k(e.target.value);
                          e.target.value.match(
                            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
                          ) && e.target.value === y
                            ? b(!1)
                            : b(!0);
                        },
                      }),
                      i('div', {
                        className: h.eye,
                        children: i(
                          e,
                          'password' === $
                            ? { size: 'sm', icon: s, onClick: U }
                            : { size: 'sm', icon: a, onClick: U },
                        ),
                      }),
                    ],
                  }),
                  S
                    ? i(m, {
                        err: P,
                        content: 'Please Enter the password correctly',
                      })
                    : i(l, {}),
                ],
              }),
            }),
            i('div', {
              children: 'NIL' != R ? i(m, { err: !0, content: R }) : i(l, {}),
            }),
            i('div', {
              className: f('d-grid gap-2', h.submitContainer),
              children: c(j, {
                variant: 'outline-primary',
                onClick: () => {
                  if (
                    (y.match(
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
                    )
                      ? x(!1)
                      : x(!0),
                    b(S !== y),
                    !y || !P)
                  ) {
                    const e = new w(C);
                    L(!0),
                      e
                        .resetPassword({
                          token: null != W ? W : 'no-token',
                          password: y,
                          passwordConfirmation: S,
                        })
                        .then(() => {
                          L(!1),
                            G('NIL'),
                            d.success('Password Reset done successfully'),
                            Z('/login', { replace: !0 });
                        })
                        .catch(e => {
                          e instanceof u && (d.error(e.message), G(e.message));
                        });
                  }
                },
                children: [
                  'Reset Password',
                  ' ',
                  F ? i(e, { icon: r }) : i(l, {}),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
export { P as default };
