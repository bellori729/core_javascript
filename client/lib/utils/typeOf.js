function typeOf(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

export const isObject = (data) => typeOf(data) === 'object';
export const isArray = (data) => typeOf(data) === 'array';
export const isBoolean = (data) => typeOf(data) === 'boolean';
export const isNull = (data) => typeOf(data) === 'null';
export const isUndefined = (data) => typeOf(data) === 'undefined';
export const isBinInt = (data) => typeOf(data) === 'bigint';
export const isFunction = (data) => typeOf(data) === 'function';
export const isSymbol = (data) => typeOf(data) === 'symbol';
export const isNumber = (data) => typeOf(data) === 'number';
/** 문자열인지 확인 */
export const isString = (data) => typeOf(data) === 'string';
/** NaN인지 아닌지 알려주는 함수입니다. */
export function isNumericString(data) {
  return isNaN(Number(data));
}
