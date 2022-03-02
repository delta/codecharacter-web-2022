var e = Object.defineProperty,
  a = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  t = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  n = (a, s, t) =>
    s in a
      ? e(a, s, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (a[s] = t);
import { r as c, j as o, e as l, T as d, F as m } from './vendor.81f97c66.js';
import { R as h } from './react-paginate.76321380.js';
import {
  u as p,
  e as _,
  A as u,
  ac as f,
  ad as g,
  s as v,
  S as b,
  U as N,
} from './index.04970f6d.js';
import { g as x } from './Avatar.7b557cd5.js';
import { M as y } from './Modal.f49e15c5.js';
import { B as k } from './Button.7eb63b50.js';
import { u as j, c as C } from './ThemeProvider.869a7bec.js';
import './Fade.6981a97a.js';
import './scrollbarSize.a78508fb.js';
import './hasClass.105c66bc.js';
import './AbstractModalHeader.205d102b.js';
import './CloseButton.0522e079.js';
import './createWithBsPrefix.439c8819.js';
import './divWithClassName.7695ab43.js';
var B = c.exports.forwardRef((e, c) => {
  var l = e,
    {
      bsPrefix: d,
      className: m,
      striped: h,
      bordered: p,
      borderless: _,
      hover: u,
      size: f,
      variant: g,
      responsive: v,
    } = l,
    b = ((e, a) => {
      var s = {};
      for (var n in e) r.call(e, n) && a.indexOf(n) < 0 && (s[n] = e[n]);
      if (null != e && t)
        for (var n of t(e)) a.indexOf(n) < 0 && i.call(e, n) && (s[n] = e[n]);
      return s;
    })(l, [
      'bsPrefix',
      'className',
      'striped',
      'bordered',
      'borderless',
      'hover',
      'size',
      'variant',
      'responsive',
    ]);
  const N = j(d, 'table'),
    x = C(
      m,
      N,
      g && `${N}-${g}`,
      f && `${N}-${f}`,
      h && `${N}-striped`,
      p && `${N}-bordered`,
      _ && `${N}-borderless`,
      u && `${N}-hover`,
    ),
    y = o(
      'table',
      ((k = ((e, a) => {
        for (var s in a || (a = {})) r.call(a, s) && n(e, s, a[s]);
        if (t) for (var s of t(a)) i.call(a, s) && n(e, s, a[s]);
        return e;
      })({}, b)),
      a(k, s({ className: x, ref: c }))),
    );
  var k;
  if (v) {
    let e = `${N}-responsive`;
    return (
      'string' == typeof v && (e = `${e}-${v}`),
      o('div', { className: e, children: y })
    );
  }
  return y;
});
var w = {
  header: '_header_1xeyi_11',
  header__icon: '_header__icon_1xeyi_24',
  header__title: '_header__title_1xeyi_30',
  ranklist: '_ranklist_1xeyi_38',
  list: '_list_1xeyi_47',
  item: '_item_1xeyi_61',
  currentUserItem: '_currentUserItem_1xeyi_65',
  pos: '_pos_1xeyi_69',
  pic: '_pic_1xeyi_73',
  name: '_name_1xeyi_82',
  score: '_score_1xeyi_91',
  attackButton: '_attackButton_1xeyi_102',
  attackImg: '_attackImg_1xeyi_107',
  paginationouter: '_paginationouter_1xeyi_117',
  pagination: '_pagination_1xeyi_117',
  matchHeader: '_matchHeader_1xeyi_128',
  matchBody: '_matchBody_1xeyi_139',
  matchFooter: '_matchFooter_1xeyi_144',
  matchButton: '_matchButton_1xeyi_149',
};
function O() {
  const [e, a] = c.exports.useState(0),
    [s, t] = c.exports.useState(0),
    [r, i] = c.exports.useState([]),
    [n, j] = c.exports.useState([]),
    [C, O] = c.exports.useState(!1),
    [P, S] = c.exports.useState(!1),
    [$, I] = c.exports.useState(''),
    L = () => S(!1),
    F = p(_).username;
  c.exports.useEffect(() => {
    R();
  }, []),
    c.exports.useEffect(() => {
      const e = s + 8;
      j(r.slice(s, e)), a(Math.ceil(r.length / 8));
    }, [s, 8, r]);
  const R = () => {
    O(!1);
    new g(v)
      .getLeaderboard(0, 1e4)
      .then(e => {
        i(e), O(!0);
      })
      .catch(e => {
        e instanceof u && d.error(e.message);
      });
  };
  return l(m, {
    children: [
      o(m, {
        children: C
          ? o(m, {
              children: l('div', {
                className: w.list,
                children: [
                  l(y, {
                    show: P,
                    onHide: L,
                    children: [
                      o(y.Header, {
                        className: w.matchHeader,
                        closeButton: !0,
                        children: o(y.Title, { children: 'Start a new match' }),
                      }),
                      l(y.Body, {
                        className: w.matchBody,
                        children: [
                          'Do you want to start a match against ',
                          $,
                          '?',
                        ],
                      }),
                      l(y.Footer, {
                        className: w.matchFooter,
                        children: [
                          o(k, {
                            variant: 'secondary',
                            onClick: L,
                            children: 'Close',
                          }),
                          o(k, {
                            className: w.matchButton,
                            onClick: () =>
                              (async function () {
                                new N(v)
                                  .createMatch({
                                    mode: b.Manual,
                                    opponentUsername: $,
                                    codeRevisionId: void 0,
                                    mapRevisionId: void 0,
                                  })
                                  .catch(e => {
                                    e instanceof u && console.log(e);
                                  }),
                                  S(!1);
                              })(),
                            children: 'Start match',
                          }),
                        ],
                      }),
                    ],
                  }),
                  l(B, {
                    hover: !0,
                    className: w.list,
                    responsive: !0,
                    children: [
                      o('thead', {
                        children: l('tr', {
                          className: w.item,
                          children: [
                            o('th', {}),
                            o('th', {}),
                            o('th', {}),
                            o('th', {}),
                            o('th', {
                              className: w.score,
                              children: 'Ratings',
                            }),
                            o('th', { className: w.score, children: 'Won' }),
                            o('th', { className: w.score, children: 'Tied' }),
                            o('th', { className: w.score, children: 'Lost' }),
                          ],
                        }),
                      }),
                      o('tbody', {
                        children:
                          n &&
                          n.map(e =>
                            l(
                              'tr',
                              {
                                className:
                                  w.item +
                                  ' ' +
                                  (F === e.user.username
                                    ? w.currentUserItem
                                    : ''),
                                children: [
                                  o('td', {
                                    className: w.pos,
                                    children: s + 1 + n.indexOf(e),
                                  }),
                                  o('td', {
                                    children: o('img', {
                                      className: w.pic,
                                      src: x(e.user.avatarId).url,
                                    }),
                                  }),
                                  o('td', {
                                    className: w.name,
                                    children: e.user.username,
                                  }),
                                  F === e.user.username
                                    ? o('td', { children: '---' })
                                    : o('td', {
                                        className: w.attackButton,
                                        onClick: () => {
                                          return (
                                            (a = e.user.username),
                                            I(a),
                                            void S(!0)
                                          );
                                          var a;
                                        },
                                        children: o('img', {
                                          className: w.attackImg,
                                          src: 'assets/sword.dfaa178e.png',
                                        }),
                                      }),
                                  o('td', {
                                    className: w.score,
                                    children: e.stats.rating.toFixed(3),
                                  }),
                                  o('td', {
                                    className: w.score,
                                    children: e.stats.wins,
                                  }),
                                  o('td', {
                                    className: w.score,
                                    children: e.stats.ties,
                                  }),
                                  o('td', {
                                    className: w.score,
                                    children: e.stats.losses,
                                  }),
                                ],
                              },
                              e.user.username,
                            ),
                          ),
                      }),
                    ],
                  }),
                ],
              }),
            })
          : o(f, {}),
      }),
      l('nav', {
        className: w.paginationouter,
        children: [
          o(h, {
            previousLabel: 'Previous',
            nextLabel: 'Next',
            pageClassName: 'page-item',
            pageLinkClassName: 'page-link',
            previousClassName: 'page-item',
            previousLinkClassName: 'page-link',
            nextClassName: 'page-item',
            nextLinkClassName: 'page-link',
            breakLabel: '...',
            breakClassName: 'page-item',
            breakLinkClassName: 'page-link',
            pageCount: e,
            marginPagesDisplayed: 2,
            pageRangeDisplayed: 5,
            onPageChange: e => {
              const a = (8 * e.selected) % r.length;
              t(a);
            },
            containerClassName: w.pagination,
            activeClassName: 'active',
          }),
          o('button', {
            type: 'button',
            className: 'btn m-2 btn-outline-light',
            onClick: R,
            children: 'Refresh',
          }),
        ],
      }),
    ],
  });
}
function P() {
  return l('div', {
    className: w.body,
    children: [
      l('div', {
        className: w.header,
        children: [
          o('img', {
            className: w.header__icon,
            src: 'assets/trophy.145c6dfe.png',
          }),
          o('h1', {
            className: w.header__title,
            children: o('span', { children: 'Leaderboard' }),
          }),
        ],
      }),
      o('div', {
        className: w.center,
        children: o('div', { className: w.ranklist, children: o(O, {}) }),
      }),
    ],
  });
}
export { P as default };
