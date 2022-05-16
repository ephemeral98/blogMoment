import styled, { css } from 'styled-components';

export const $sm = '750px'; // 手机端
export const $md = '1280px'; // pad端
export const $lg = '1920px'; // pc端

// vw单位，以 手机端设计稿为基础 进行缩放
/* export const svw = css`
  ${(props) =>  calc((props.svw / $phone_base_width) * 100vw);}

`; */

export const svw = css`
  ${(props) => `${(props.svw / 750) * 100}vw`}
`;

export const mvw = css`
  ${(props) => `${(props.svw / 1280) * 100}vw`}
`;
