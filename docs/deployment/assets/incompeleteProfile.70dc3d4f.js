import { s as e } from './auth.module.fa7fd44a.js';
import { O as r } from './OtherDetails.c37c6a5c.js';
import {
  r as a,
  k as t,
  j as s,
  e as o,
  F as l,
  T as i,
} from './vendor.81f97c66.js';
import { F as m, f as n } from './index.es.b7d0ea5d.js';
import { c } from './ThemeProvider.869a7bec.js';
import { a as d, g as p, A as h, aj as u, s as g } from './index.04970f6d.js';
import { A as f } from './Alert.87b3ae07.js';
import { C } from './Card.699e5227.js';
import { C as j } from './Container.8990cc41.js';
import { F as b } from './Form.6d298630.js';
import { B as v } from './Button.7eb63b50.js';
import './index.esm.9a519a65.js';
import './Avatar.7b557cd5.js';
import './Fade.6981a97a.js';
import './CloseButton.0522e079.js';
import './divWithClassName.7695ab43.js';
import './createWithBsPrefix.439c8819.js';
import './FormGroup.c96accb6.js';
import './Col.0eeb879f.js';
function x() {
  const [x, N] = a.exports.useState(''),
    [S, F] = a.exports.useState('IN'),
    [y, B] = a.exports.useState(!1),
    [P, A] = a.exports.useState(!1),
    [T, U] = a.exports.useState(''),
    [I, G] = a.exports.useState(!1),
    [L, k] = a.exports.useState(''),
    [O, W] = a.exports.useState(!1),
    [w, D] = a.exports.useState(!1),
    [E, q] = a.exports.useState(0),
    z = d(),
    H = t(),
    J = () => {
      T.trim().length < 5 || T.length < 5 ? G(!0) : G(!1);
    },
    K = () => {
      L.trim().length < 5 ? W(!0) : W(!1);
    };
  return s('div', {
    className: e.mainContainer,
    children: o(C, {
      className: e.cardContainer,
      children: [
        o('div', {
          className: e.titleContainer,
          children: [
            s('h1', { className: e.name, children: 'Profile Completion' }),
            s(j, {
              className: e.subTitle,
              children: 'Please complete your profile to start playing',
            }),
          ],
        }),
        s('div', {
          style: { marginTop: '3rem' },
          children: o(b, {
            children: [
              o(b.Group, {
                className: 'mb-3',
                controlId: 'formBasicFullName',
                children: [
                  s(b.Label, { children: 'Full Name' }),
                  s(b.Control, {
                    type: 'text',
                    placeholder: 'Fullname',
                    autoComplete: 'off',
                    value: L,
                    onChange: e => {
                      k(e.target.value),
                        P &&
                          (e.target.value.trim().length < 5 || L.length < 4
                            ? W(!0)
                            : W(!1));
                    },
                    className: P ? (O ? e.error : e.correct) : e.normal,
                  }),
                  P && O
                    ? s(f, {
                        err: O,
                        content: 'Name should be atleast 5 characters',
                      })
                    : s(l, {}),
                ],
              }),
              o(b.Group, {
                className: 'mb-3',
                controlId: 'formBasicUserName',
                children: [
                  s(b.Label, { children: 'Username' }),
                  s(b.Control, {
                    type: 'text',
                    placeholder: 'Username',
                    autoComplete: 'off',
                    value: T,
                    onChange: e => {
                      U(e.target.value),
                        P &&
                          (e.target.value.trim().length < 5 || T.length < 4
                            ? G(!0)
                            : G(!1));
                    },
                    className: P ? (I ? e.error : e.correct) : e.normal,
                  }),
                  P && I
                    ? s(f, {
                        err: I,
                        content: 'Username should be atleast 5 characters',
                      })
                    : s(l, {}),
                ],
              }),
            ],
          }),
        }),
        s('div', {
          children: s(r, {
            selectedCode: S,
            handleFlagSelect: e => {
              F(e);
            },
            formNumber: 3,
            handleCollegeChange: e => {
              N(e.target.value),
                P && (0 == e.target.value.trim().length ? B(!0) : B(!1));
            },
            college: x,
            collegeError: y,
            submitThird: P,
            register: !1,
            handleAvatarChange: q,
          }),
        }),
        s('div', {
          className: c('d-grid gap-2', e.submitContainer),
          children: o(v, {
            variant: 'outline-primary',
            onClick: () => {
              K(),
                J(),
                A(!0),
                0 == x.trim().length || '' == x.trim() ? B(!0) : B(!1);
              const e = new u(g);
              D(!0),
                e
                  .completeUserProfile({
                    username: T,
                    name: L,
                    country: S,
                    college: x,
                    avatarId: E,
                  })
                  .then(() => {
                    D(!1),
                      z(p()),
                      i.success('Profile Submitted'),
                      H('/login', { replace: !0 });
                  })
                  .catch(e => {
                    e instanceof h && i.error(e.message);
                  });
            },
            children: ['Login', ' ', w ? s(m, { icon: n }) : s(l, {})],
          }),
        }),
      ],
    }),
  });
}
export { x as default };
