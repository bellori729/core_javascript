export function copy(text) {
  return navigator.clipboard.writeText(text); // 브라우저에서 제공해주는 복사 기능 (브라우저와 통신 / promise 리턴)
}
