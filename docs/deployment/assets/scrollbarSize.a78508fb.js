import { r as t } from './vendor.81f97c66.js';
import { c as e } from './Fade.6981a97a.js';
function o() {
  return t.exports.useState(null);
}
var r;
function s(t) {
  if (((!r && 0 !== r) || t) && e) {
    var o = document.createElement('div');
    (o.style.position = 'absolute'),
      (o.style.top = '-9999px'),
      (o.style.width = '50px'),
      (o.style.height = '50px'),
      (o.style.overflow = 'scroll'),
      document.body.appendChild(o),
      (r = o.offsetWidth - o.clientWidth),
      document.body.removeChild(o);
  }
  return r;
}
export { s, o as u };
