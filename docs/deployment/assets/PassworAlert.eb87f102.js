import { a, s as r } from './Alert.87b3ae07.js';
import { j as e, F as s, e as t } from './vendor.81f97c66.js';
var l = l =>
  e(s, {
    children: t(a, {
      variant: l.variantColor,
      show: l.err,
      className: r.alert,
      children: [
        e('li', { children: 'Password should be greater than 8 characters' }),
        e('li', {
          children:
            'Password should contain atleast 1 UpperCase letter, 1 Special Character, 1 number',
        }),
      ],
    }),
  });
export { l as P };
