import { r as e, e as a, F as s, j as t, T as r } from './vendor.81f97c66.js';
import { M as c } from './codecharacter-map-designer-2022.es.b94f67c0.js';
import { N as i, s as o, A as n } from './index.04970f6d.js';
import { M as m } from './Modal.f49e15c5.js';
import { C as l } from './Container.8990cc41.js';
import { R as d } from './Row.1411b6b5.js';
import './ThemeProvider.869a7bec.js';
import './Fade.6981a97a.js';
import './scrollbarSize.a78508fb.js';
import './hasClass.105c66bc.js';
import './AbstractModalHeader.205d102b.js';
import './CloseButton.0522e079.js';
import './createWithBsPrefix.439c8819.js';
import './divWithClassName.7695ab43.js';
var p = '_mapDesignerContainer_11x59_1',
  h = '_modalHeader_11x59_7',
  u = '_modalContent_11x59_17',
  f = '_contentP_11x59_24',
  b = '_buttonRow_11x59_35',
  N = '_modalButton_11x59_42',
  _ = '_commitNameInput_11x59_53',
  C = '_commitModalError_11x59_59';
const v = () => {
  const [v, S] = e.exports.useState(!1),
    [M, x] = e.exports.useState(!1),
    [j, g] = e.exports.useState(''),
    [k, w] = e.exports.useState(''),
    [y, B] = e.exports.useState(),
    H = new i(o);
  e.exports.useEffect(() => {
    H.getLatestMap().then(e => {
      B(JSON.parse(e.map));
    });
  }, []);
  const T = () => S(!1),
    O = () => {
      w(''), g(''), x(!1);
    },
    J = e => {
      if (y) {
        switch (e) {
          case 'save':
            T(),
              H.updateLatestMap({ map: JSON.stringify(y), lock: !1 })
                .then(() => {
                  r.success('Map Saved');
                })
                .catch(e => {
                  e instanceof n && r.error(e.message);
                });
            break;
          case 'submit':
            T(),
              H.updateLatestMap({ map: JSON.stringify(y), lock: !0 })
                .then(() => {
                  r.success('Map Submitted');
                })
                .catch(e => {
                  e instanceof n && r.error(e.message);
                });
            break;
          case 'commit':
            if (!j) return void w('Commit name cannot be empty!');
            O(),
              H.createMapRevision({ map: JSON.stringify(y), message: j })
                .then(() => {
                  r.success('Map Commit Created');
                })
                .catch(e => {
                  e instanceof n && r.error(e.message);
                });
        }
        B(void 0), T();
      }
    };
  return a(s, {
    children: [
      t('div', {
        className: p,
        children: t(c, {
          saveMapCallback: e => {
            S(!0), B(e);
          },
          readonly: !1,
        }),
      }),
      a(m, {
        show: v,
        centered: !0,
        onHide: T,
        children: [
          t(m.Header, {
            className: h,
            closeButton: !0,
            children: t(m.Title, {
              className: 'fw-bold fs-3',
              children: 'Save Map?',
            }),
          }),
          a(m.Body, {
            className: u,
            children: [
              a(l, {
                fluid: !0,
                children: [
                  t(d, {
                    children: a('p', {
                      className: f,
                      children: [
                        t('span', { children: 'SAVE' }),
                        ' : Save map only.',
                      ],
                    }),
                  }),
                  t(d, {
                    children: a('p', {
                      className: f,
                      children: [
                        t('span', { children: 'SUBMIT' }),
                        ' : Save map and submit to Leaderboard.',
                      ],
                    }),
                  }),
                  t(d, {
                    children: a('p', {
                      className: f,
                      children: [
                        t('span', { children: 'COMMIT' }),
                        ' : Create a commit revision with the current map.',
                      ],
                    }),
                  }),
                ],
              }),
              a(l, {
                fluid: !0,
                className: b,
                children: [
                  t('button', {
                    className: N,
                    onClick: () => {
                      J('save');
                    },
                    children: 'Save',
                  }),
                  t('button', {
                    className: N,
                    onClick: () => {
                      J('submit');
                    },
                    children: 'Submit',
                  }),
                  t('button', {
                    className: N,
                    onClick: () => {
                      T(), x(!0);
                    },
                    children: 'Commit',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      a(m, {
        show: M,
        centered: !0,
        onHide: O,
        children: [
          t(m.Header, {
            className: h,
            closeButton: !0,
            children: t(m.Title, {
              className: 'fw-bold fs-2',
              children: 'Commit Name',
            }),
          }),
          a(m.Body, {
            className: u,
            children: [
              t(d, {
                children: t('input', {
                  className: _,
                  onChange: e => {
                    g(e.target.value);
                  },
                }),
              }),
              t('p', { className: C, children: k }),
              t('div', {
                className: b,
                children: t('button', {
                  className: N,
                  onClick: () => {
                    J('commit');
                  },
                  children: 'Create Map Commit',
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
export { v as default };
