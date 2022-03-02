import { e, j as i, N as a } from './vendor.81f97c66.js';
var r = '_footerContainer_p15lu_1',
  d = '_heading_p15lu_16',
  n = '_container_p15lu_23',
  c = '_links_p15lu_27';
function l() {
  return e('div', {
    className: r,
    children: [
      i('div', {
        children: e('div', {
          children: [
            i('div', { className: d, children: ' Contact' }),
            e('div', {
              className: n,
              children: [
                i('div', { children: 'Subramanian: 9499926470' }),
                i('div', { children: 'Rinish: 9442129406' }),
                i('div', { children: 'Dipesh: 9654220462' }),
                i('div', { children: 'Vikash: 7050352720' }),
              ],
            }),
          ],
        }),
      }),
      i('div', {
        children: e('div', {
          children: [
            i('div', { className: d, children: 'Quick Links' }),
            e('div', {
              className: n,
              children: [
                i('div', {
                  children: i(a, {
                    className: c,
                    to: '/dashboard',
                    children: 'DashBoard',
                  }),
                }),
                i('div', {
                  children: i('a', {
                    className: c,
                    href: 'https://codecharacter-docs-2022.vercel.app/',
                    rel: 'noreferrer noopener',
                    children: 'Documentation',
                  }),
                }),
                i('div', {
                  children: i('a', {
                    className: c,
                    href: 'https://discord.gg/ePQrhrSNk5',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    children: 'Forum',
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
var s = '_container_1dvd5_1',
  t = '_textContainer_1dvd5_6',
  o = '_glitchtext_1dvd5_10';
function h(a) {
  return i('div', {
    className: s,
    children: e('div', {
      className: t,
      children: [
        i('div', { className: o, children: a.value }),
        i('div', { className: o, children: a.value }),
        i('div', { className: o, children: a.value }),
      ],
    }),
  });
}
var v = '_title_qc6ov_1',
  m = '_about_qc6ov_11',
  _ = '_details_qc6ov_17',
  u = '_descriptionContainer_qc6ov_26',
  g = '_imageContainer_qc6ov_38';
function p() {
  return e('div', {
    children: [
      i('div', {
        className: m,
        children: i('div', {
          className: 'container',
          children: e('div', {
            className: 'row',
            children: [
              i('div', {
                className: `col-lg-6 col-sm-12 ${g}`,
                children: i('img', { src: 'assets/renderer.69be8076.png' }),
              }),
              i('div', {
                className: `col-lg-6 col-sm-12 ${u}`,
                children: e('div', {
                  children: [
                    i('div', { className: v, children: 'About' }),
                    e('div', {
                      children: [
                        i('div', {
                          children:
                            'Code Character is a strategy based programming game where you control troops in a turn-based game with the code you write in one of the multiple programming languages (C++, Python, Java) available in the game.',
                        }),
                        e('div', {
                          children: [
                            'The objective is to destroy and vanquish the ',
                            "opponent's",
                            'territory by writing code and creating defenses via the in-game map.',
                          ],
                        }),
                        i('div', {
                          children:
                            'With progress and implementation of new competitive strategies, fight your way through, and dominate the top of the leaderboard.',
                        }),
                        i('div', {
                          children:
                            'What are you waiting for, jump in to this world controlled by AI and get chances to win exciting prizes.',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      i('div', {
        className: _,
        children: i('div', {
          className: 'container',
          children: e('div', {
            className: 'row flex-row-reverse',
            children: [
              i('div', {
                className: `col-lg-6 col-sm-12 ${g}`,
                children: i('div', {
                  children: i('img', {
                    src: 'assets/home-trophy.8b4acb40.png',
                  }),
                }),
              }),
              i('div', {
                className: `col-lg-6 col-sm-12 ${u}`,
                children: e('div', {
                  children: [
                    i('div', { className: v, children: 'Details' }),
                    e('div', {
                      children: [
                        i('div', { children: 'Date - 1st March, 2022' }),
                        i('div', {
                          children:
                            'Mode - Online and individual participation',
                        }),
                        i('div', { children: 'Prizes Worth - ₹ 20,000' }),
                        i('div', {
                          children:
                            'Prizes would be decided by in-game leaderbaord',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
var N = '_mainContainer_1xdaf_1',
  f = '_jumbotron_1xdaf_7',
  b = '_delta_1xdaf_25',
  w = '_heart_1xdaf_34';
function y() {
  return e('main', {
    className: N,
    children: [
      i('div', { className: f, children: i(h, { value: 'Code Character' }) }),
      i(p, {}),
      i(l, {}),
      i('div', {
        className: b,
        children: e('div', {
          children: [
            'Made with ',
            i('span', { className: w, children: '❤' }),
            ' by',
            ' ',
            i('a', {
              href: 'https://delta.nitt.edu/',
              children: 'Delta Force',
            }),
          ],
        }),
      }),
    ],
  });
}
export { y as default };
