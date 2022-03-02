import { r as e, T as s, e as a, j as t } from './vendor.81f97c66.js';
import {
  u as o,
  C as r,
  D as l,
  G as n,
  H as c,
  J as i,
  a as m,
  p as d,
  A as u,
  L as h,
  r as f,
  s as p,
  M as C,
  N as g,
  O as M,
  P as N,
  Q as _,
  R as v,
  S as j,
  U as b,
} from './index.04970f6d.js';
import { M as S } from './Modal.f49e15c5.js';
import { C as w } from './Container.8990cc41.js';
import { R as x } from './Row.1411b6b5.js';
import { C as B } from './Col.0eeb879f.js';
import { a as I } from './FormGroup.c96accb6.js';
import { B as R } from './Button.7eb63b50.js';
import './ThemeProvider.869a7bec.js';
import './Fade.6981a97a.js';
import './scrollbarSize.a78508fb.js';
import './hasClass.105c66bc.js';
import './AbstractModalHeader.205d102b.js';
import './CloseButton.0522e079.js';
import './createWithBsPrefix.439c8819.js';
import './divWithClassName.7695ab43.js';
var H = '_selfMatchModalHeader_t4sou_1',
  T = '_selfMatchModalBody_t4sou_12',
  A = '_selfMatchModalFormGroup_t4sou_19',
  k = '_selfMatchModalLabel_t4sou_26',
  D = '_selfMatchModalDropdown_t4sou_34',
  E = '_dropdownOptions_t4sou_44',
  F = '_selfMatchModalSimulateBtn_t4sou_48';
const G = () => {
  const G = o(r),
    P = o(l),
    y = o(n),
    L = o(c),
    O = o(i),
    U = m(),
    [W, z] = e.exports.useState([]),
    [J, Q] = e.exports.useState([]),
    q = o(d);
  return (
    e.exports.useEffect(() => {
      if (null !== localStorage.getItem('token')) {
        new f(p)
          .getAuthStatus()
          .then(e => {
            const { status: a } = e;
            if (
              'AUTHENTICATED' === a &&
              null != localStorage.getItem('token')
            ) {
              new C(p)
                .getCodeRevisions()
                .then(e => z(e))
                .catch(e => {
                  e instanceof u && s.error(e.message);
                });
              new g(p)
                .getMapRevisions()
                .then(e => Q(e))
                .catch(e => {
                  e instanceof u && s.error(e.message);
                });
            }
          })
          .catch(e => {
            e instanceof u && s.error(e.message);
          });
      }
    }, [q]),
    a(S, {
      show: G,
      centered: !0,
      onHide: () => U(h(!1)),
      children: [
        t(S.Header, {
          className: H,
          closeButton: !0,
          children: t(S.Title, {
            className: 'fw-bold fs-3',
            children: 'Self Match',
          }),
        }),
        t(S.Body, {
          className: T,
          children: t(w, {
            fluid: !0,
            children: a(x, {
              children: [
                t(B, {
                  xs: 12,
                  className: A,
                  children: a(I, {
                    controlId: 'codeCommitName',
                    children: [
                      t('div', { className: k, children: 'Code Commit Name' }),
                      a('select', {
                        className: D,
                        value: L,
                        onChange: e =>
                          (function (e) {
                            if ('Current Code' === e)
                              U(M('Current Code')), U(N(null));
                            else {
                              const s = W.filter(s => s.message === e);
                              U(M(s[0].message)), U(N(s[0].id));
                            }
                          })(e.target.value),
                        children: [
                          t(
                            'option',
                            {
                              value: 'Current Code',
                              className: E,
                              children: 'Current Code',
                            },
                            'Current Code',
                          ),
                          W.map(e =>
                            t(
                              'option',
                              {
                                value: e.message,
                                className: E,
                                children: e.message,
                              },
                              e.message,
                            ),
                          ),
                        ],
                      }),
                    ],
                  }),
                }),
                a(B, {
                  xs: 12,
                  className: A,
                  children: [
                    a(I, {
                      controlId: 'mapCommitName',
                      children: [
                        t('div', { className: k, children: 'Map Commit Name' }),
                        a('select', {
                          className: D,
                          value: O,
                          onChange: e =>
                            (function (e) {
                              if ('Current Map' === e)
                                U(_('Current Map')), U(v(null));
                              else {
                                const s = J.filter(s => s.message === e);
                                U(_(s[0].message)), U(v(s[0].id));
                              }
                            })(e.target.value),
                          children: [
                            t(
                              'option',
                              {
                                value: 'Current Map',
                                className: E,
                                children: 'Current Map',
                              },
                              'Current Map',
                            ),
                            J.map(e =>
                              t(
                                'option',
                                {
                                  value: e.message,
                                  className: E,
                                  children: e.message,
                                },
                                e.message,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                    t(R, {
                      className: F,
                      onClick: function () {
                        new b(p)
                          .createMatch({
                            mode: j.Self,
                            codeRevisionId: P,
                            mapRevisionId: y,
                          })
                          .catch(e => {
                            e instanceof u && s.error(e.message);
                          });
                      },
                      children: 'Simulate',
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    })
  );
};
export { G as default };
