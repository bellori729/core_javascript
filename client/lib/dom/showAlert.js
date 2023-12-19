import { isString } from '../utils/typeOf.js';
import { addClass, removeClass } from './css.js';
import { getNode } from './getNode.js';

/**
 * @param {HTMLElement | string} node
 * @param {String} message
 * @param {Number} timeout
 * @returns void
 */
export function showAlert(node, message, timeout = 1000) {
  // 타이머 기본값 1초
  if (isString(node)) {
    node = getNode(node);
  }
  node.textContent = message; // alert 메시지 커스텀
  addClass(node, 'is-active'); // 'is-active' 클래스 추가해서 화면에 띄우기
  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout); // 지속 노출하면 안 되기 때문에 1.5초 뒤에 제거
}
