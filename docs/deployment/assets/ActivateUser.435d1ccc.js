import { A as e, ai as a, a3 as r } from './index.04970f6d.js';
import { w as i, k as t, r as s, j as c, e as n } from './vendor.81f97c66.js';
import { C as o } from './Card.699e5227.js';
import './ThemeProvider.869a7bec.js';
import './createWithBsPrefix.439c8819.js';
import './divWithClassName.7695ab43.js';
var d = '_modalContainer_xkz8h_1',
  l = '_cardContainer_xkz8h_10',
  h = '_cardTitle_xkz8h_15',
  f = '_cardBody_xkz8h_16',
  m = '_cardTitleFailed_xkz8h_22',
  _ = '_cardBodyFailed_xkz8h_23';
const u = () => {
  const u = i(),
    p = t(),
    x = new URLSearchParams(u.search).get('id'),
    v = new URLSearchParams(u.search).get('token'),
    [k, g] = s.exports.useState('Verifying'),
    [j, b] = s.exports.useState('Account can not be verified');
  return (
    s.exports.useEffect(() => {
      'Verified' === k &&
        setTimeout(() => {
          p('/login', { replace: !0 });
        }, 3e3);
    }, [k]),
    s.exports.useEffect(() => {
      if (null != x && null != v) {
        new a(r)
          .activateUser(x, { token: v })
          .then(() => {
            g('Verified'),
              b(
                'Your Account has been verified. You can now start playing \n You will be redirected to the Login page',
              );
          })
          .catch(a => {
            a instanceof e &&
              (g('Verification Failed'),
              b(a.message + '\n Account can not be verfied'));
          });
      }
    }, [x, v]),
    c('div', {
      className: d,
      children: c(o, {
        className: l,
        children: n(o.Body, {
          children: [
            c(o.Title, { className: 'Verified' === k ? h : m, children: k }),
            c('div', {
              className: 'Verified' === k ? f : _,
              children: c(o.Text, { children: j }),
            }),
          ],
        }),
      }),
    })
  );
};
export { u as default };
