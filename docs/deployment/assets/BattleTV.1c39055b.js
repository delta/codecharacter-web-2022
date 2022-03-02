import { e, j as a, r as s, k as t, F as i } from './vendor.81f97c66.js';
import { R as r } from './react-paginate.76321380.js';
import {
  u as n,
  ae as d,
  e as c,
  a as l,
  af as o,
  ag as m,
  ah as u,
} from './index.04970f6d.js';
import { g as h } from './Avatar.7b557cd5.js';
var _ = {
  title: '_title_86db0_10',
  battlecardHeader: '_battlecardHeader_86db0_21',
  coinused: '_coinused_86db0_35',
  destruction: '_destruction_86db0_36',
  battlecard: '_battlecard_86db0_21',
  battlecardwin: '_battlecardwin_86db0_58',
  battlecardlose: '_battlecardlose_86db0_61',
  battlecardtie: '_battlecardtie_86db0_64',
  pic: '_pic_86db0_78',
  username: '_username_86db0_83',
  left: '_left_86db0_89',
  right: '_right_86db0_93',
  vs: '_vs_86db0_109',
  watchButton: '_watchButton_86db0_114',
  paginationouter: '_paginationouter_86db0_134',
  pagination: '_pagination_86db0_134',
  headingcoinused: '_headingcoinused_86db0_173',
};
function v(e, a) {
  if (e.username === a.user1.username) {
    if (a.matchVerdict === u.Player1) return _.battlecardwin;
    if (a.matchVerdict == u.Player2) return _.battlecardlose;
  } else {
    if (a.matchVerdict === u.Player1) return _.battlecardlose;
    if (a.matchVerdict == u.Player2) return _.battlecardwin;
  }
  return _.battlecardtie;
}
function b(e, a) {
  const s = [...a.games.values()];
  return e.username == a.user1.username ? s[0] : s[s.length - 1];
}
function g() {
  const [u, g] = s.exports.useState(0),
    [p, N] = s.exports.useState(0),
    [f, C] = s.exports.useState([]),
    k = t(),
    { battletv: x, loading: y, hasbeenFetched: j, hasErrors: w } = n(d),
    L = n(c),
    P = l();
  j || P(o()),
    s.exports.useEffect(() => {
      const e = p + 4;
      C(x.slice(p, e)), g(Math.ceil(x.length / 4));
    }, [p, 4, x]);
  return e(i, {
    children: [
      a(i, {
        children:
          y || w
            ? a('div', {
                className: 'd-flex justify-content-center',
                children: a('div', {
                  className: 'spinner-border text-white',
                  role: 'status',
                  children: a('span', {
                    className: 'sr-only',
                    children: 'Loading...',
                  }),
                }),
              })
            : a(i, {
                children:
                  f &&
                  f.map(s =>
                    a(
                      'div',
                      {
                        className: _.item,
                        children: e('div', {
                          className: _.battlecard + ' ' + v(L, s),
                          children: [
                            a('div', {
                              className: _.pic,
                              children: a('img', {
                                src: h(s.user1.avatarId).url,
                              }),
                            }),
                            a('div', {
                              className: [_.username, _.left].join(' '),
                              children: s.user1.username,
                            }),
                            a('div', {
                              className: _.coinused,
                              children: [...s.games.values()][0].coinsUsed,
                            }),
                            a('div', {
                              className: _.destruction,
                              children: [
                                ...s.games.values(),
                              ][0].destruction.toFixed(2),
                            }),
                            a('div', {
                              className: _.watchButton,
                              onClick: () => {
                                P(
                                  m({
                                    id: b(L, s).id,
                                    callback: () => {
                                      k('/dashboard');
                                    },
                                  }),
                                );
                              },
                              children: 'Watch',
                            }),
                            a('div', {
                              className: _.destruction,
                              children: [...s.games.values()][
                                1 === [...s.games.values()].length ? 0 : 1
                              ].destruction.toFixed(2),
                            }),
                            a('div', {
                              className: _.coinused,
                              children: [...s.games.values()][
                                1 === [...s.games.values()].length ? 0 : 1
                              ].coinsUsed,
                            }),
                            a('div', {
                              className: [_.username, _.right].join(' '),
                              children: s.user2.username,
                            }),
                            a('div', {
                              className: _.pic,
                              children: a('img', {
                                src: h(s.user2.avatarId).url,
                              }),
                            }),
                          ],
                        }),
                      },
                      s.id,
                    ),
                  ),
              }),
      }),
      a('nav', {
        className: _.paginationouter,
        children: a(r, {
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
          pageCount: u,
          marginPagesDisplayed: 2,
          pageRangeDisplayed: 5,
          onPageChange: e => {
            const a = (4 * e.selected) % x.length;
            N(a);
          },
          containerClassName: _.pagination,
          activeClassName: 'active',
        }),
      }),
    ],
  });
}
function p() {
  return e('div', {
    className: _.body,
    children: [
      a('div', { className: _.title, children: 'Battle TV' }),
      a('div', {
        className: _.item,
        children: e('div', {
          className: _.battlecardHeader,
          style: { backgroundColor: '#' },
          children: [
            a('div', { className: _.pic }),
            a('div', { className: _.username }),
            a('div', { className: _.coinused, children: 'Coins Used' }),
            a('div', { className: _.destruction, children: 'Destruction %' }),
            a('div', { className: _.vs, children: 'VS' }),
            a('div', { className: _.destruction, children: 'Destruction %' }),
            a('div', { className: _.coinused, children: 'Coins Used' }),
            a('div', { className: _.username }),
            a('div', { className: _.pic }),
          ],
        }),
      }),
      a(g, {}),
    ],
  });
}
export { p as default };
