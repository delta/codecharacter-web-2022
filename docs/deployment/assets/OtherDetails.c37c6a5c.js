import { r as e, e as a, j as r, F as l } from './vendor.81f97c66.js';
import { R as o } from './index.esm.9a519a65.js';
import { A as t } from './Alert.87b3ae07.js';
import { a as c } from './Avatar.7b557cd5.js';
import { F as s } from './Form.6d298630.js';
var n = '_levelTitle_u6gv6_1',
  d = '_flagContainer_u6gv6_8',
  i = '_avatarContainer_u6gv6_15',
  m = '_avatar_u6gv6_15',
  v = '_avatarSelected_u6gv6_54',
  g = '_avatarImg_u6gv6_58',
  _ = '_error_u6gv6_63',
  u = '_correct_u6gv6_67',
  h = '_normal_u6gv6_71';
function C(C) {
  const [N, f] = e.exports.useState(0),
    p = c();
  return a('div', {
    children: [
      C.register
        ? r('div', { className: n, children: 'Other Details' })
        : r(l, {}),
      a(s.Group, {
        className: 'mb-3',
        controlId: 'formBasicCountryName',
        children: [
          r(s.Label, { children: 'Country' }),
          r('div', {
            className: d,
            children: r(o, {
              searchable: !0,
              selected: null != C.selectedCode ? C.selectedCode : 'IN',
              onSelect:
                null != C.handleFlagSelect ? C.handleFlagSelect : () => {},
            }),
          }),
        ],
      }),
      a(s.Group, {
        className: 'mb-3',
        controlId: 'formBasicCollegename',
        children: [
          r(s.Label, { children: 'College' }),
          r(s.Control, {
            type: 'text',
            placeholder: 'College',
            value: C.college,
            onChange: C.handleCollegeChange,
            className:
              3 === C.formNumber && C.submitThird
                ? C.collegeError
                  ? _
                  : u
                : h,
          }),
          3 == C.formNumber && C.collegeError
            ? r(t, {
                err: C.collegeError,
                content: 'Please Enter your College Name',
              })
            : r(l, {}),
        ],
      }),
      a(s.Group, {
        className: 'mb-3',
        controlId: 'formBasicAvatar',
        children: [
          r(s.Label, { children: 'Avatar' }),
          r('div', {
            children: r('div', {
              className: i,
              children: p.map((e, a) =>
                r(
                  'div',
                  {
                    className: `${m} ${N === e.id ? v : ''}`,
                    onClick: () => {
                      f(e.id), C.handleAvatarChange(e.id);
                    },
                    children: r('img', {
                      className: g,
                      src: e.url,
                      alt: 'avatar',
                    }),
                  },
                  a,
                ),
              ),
            }),
          }),
        ],
      }),
    ],
  });
}
export { C as O };
