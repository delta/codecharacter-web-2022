import {
  u as e,
  I as a,
  F as s,
  T as l,
  K as r,
  E as i,
  v as o,
  a as n,
  t,
  w as c,
  x as d,
  y as m,
  z as h,
  B as p,
} from './index.04970f6d.js';
import { e as u, j as v } from './vendor.81f97c66.js';
import { M as b } from './Modal.f49e15c5.js';
import { C as N } from './Container.8990cc41.js';
import { R as g } from './Row.1411b6b5.js';
import { C as f } from './Col.0eeb879f.js';
import { a as _ } from './FormGroup.c96accb6.js';
import './ThemeProvider.869a7bec.js';
import './Fade.6981a97a.js';
import './scrollbarSize.a78508fb.js';
import './hasClass.105c66bc.js';
import './AbstractModalHeader.205d102b.js';
import './CloseButton.0522e079.js';
import './createWithBsPrefix.439c8819.js';
import './divWithClassName.7695ab43.js';
var j = '_settingFormGroup_rc1nd_3',
  C = '_editorSettingsHeader_rc1nd_10',
  x = '_editorSettingsBody_rc1nd_22',
  w = '_settingLabel_rc1nd_29',
  B = '_settingDropdown_rc1nd_37',
  S = '_optionsDropdown_rc1nd_51';
const z = () => {
  const z = e(a),
    I = e(s),
    y = e(l),
    F = e(r),
    T = e(i),
    H = e(o),
    k = n(),
    A = [];
  for (let e = 8; e <= 40; e += 2) A.push(e);
  return u(b, {
    show: z,
    centered: !0,
    onHide: () => k(t(!1)),
    children: [
      v(b.Header, {
        className: C,
        closeButton: !0,
        children: v(b.Title, {
          className: 'fw-bold fs-3',
          children: 'Settings',
        }),
      }),
      v(b.Body, {
        className: x,
        children: v(N, {
          fluid: !0,
          children: u(g, {
            children: [
              v(f, {
                xs: 12,
                className: j,
                children: u(_, {
                  controlId: 'fontSize',
                  children: [
                    v('div', { className: w, children: 'Font Size' }),
                    v('select', {
                      className: B,
                      value: I,
                      onChange: e => {
                        return (a = Number(e.target.value)), void k(c(a));
                        var a;
                      },
                      children: A.map(e =>
                        v('option', { value: e, className: S, children: e }, e),
                      ),
                    }),
                  ],
                }),
              }),
              v(f, {
                xs: 12,
                className: j,
                children: u(_, {
                  controlId: 'editorTheme',
                  children: [
                    v('div', { className: w, children: 'Editor Theme' }),
                    v('select', {
                      className: B,
                      value: y,
                      onChange: e => {
                        return (a = e.target.value), void k(d(a));
                        var a;
                      },
                      children: [
                        'monokai',
                        'github',
                        'tomorrow',
                        'kuroir',
                        'twilight',
                        'xcode',
                        'textmate',
                        'solarized_dark',
                        'solarized_light',
                        'terminal',
                        'chaos',
                        'chrome',
                        'eclipse',
                        'dracula',
                      ].map(e =>
                        v('option', { value: e, className: S, children: e }, e),
                      ),
                    }),
                  ],
                }),
              }),
              v(f, {
                xs: 12,
                className: j,
                children: u(_, {
                  controlId: 'editorKeybinding',
                  children: [
                    v('div', { className: w, children: 'Editor Keybinding' }),
                    v('select', {
                      className: B,
                      value: F,
                      onChange: e => {
                        return (a = e.target.value), void k(m(a));
                        var a;
                      },
                      children: ['default', 'emacs', 'vim'].map(e =>
                        v('option', { value: e, className: S, children: e }, e),
                      ),
                    }),
                  ],
                }),
              }),
              v(f, {
                xs: 12,
                className: j,
                children: u(_, {
                  controlId: 'basicAutoCompletion',
                  children: [
                    v('div', {
                      className: w,
                      children: 'Basic Auto Completion',
                    }),
                    u('select', {
                      className: B,
                      value: T ? 'enable' : 'disable',
                      onChange: e => {
                        return (a = 'enable' === e.target.value), void k(h(a));
                        var a;
                      },
                      children: [
                        v(
                          'option',
                          { value: 'enable', className: S, children: 'enable' },
                          'enable',
                        ),
                        v(
                          'option',
                          {
                            value: 'disable',
                            className: S,
                            children: 'disable',
                          },
                          'disable',
                        ),
                      ],
                    }),
                  ],
                }),
              }),
              v(f, {
                xs: 12,
                className: j,
                children: u(_, {
                  controlId: 'snippets',
                  children: [
                    v('div', { className: w, children: 'Snippets' }),
                    u('select', {
                      className: B,
                      value: H ? 'enable' : 'disable',
                      onChange: e => {
                        return (a = 'enable' === e.target.value), void k(p(a));
                        var a;
                      },
                      children: [
                        v(
                          'option',
                          { value: 'enable', className: S, children: 'enable' },
                          'enable',
                        ),
                        v(
                          'option',
                          {
                            value: 'disable',
                            className: S,
                            children: 'disable',
                          },
                          'disable',
                        ),
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
};
export { z as default };
