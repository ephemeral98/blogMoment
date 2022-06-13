import { createGlobalStyle } from 'styled-components';

/**
 * 多行溢出打点
 * @param n 行数
 * @returns 
 */
function _overDots(n) {
  return {
    'overflow': 'hidden',
    'text-overflow': 'ellipsis',
    'display': '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': `${n}` //行数
  }
}

export const OverDots = createGlobalStyle`
  .over-dots-1 {
    ${_overDots(1)}
  }
  .over-dots-2 {
    ${_overDots(2)}
  }
  .over-dots-3 {
    ${_overDots(3)}
  }
  .over-dots-4 {
    ${_overDots(4)}
  }
  .over-dots-5 {
    ${_overDots(5)}
  }
`
