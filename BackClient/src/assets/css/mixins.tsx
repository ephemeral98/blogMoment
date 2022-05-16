import styled, { css } from 'styled-components';

let mixin = css`
  & {
    color: red;
    ${{
      position: 'absolute',
      left: '100px',
      top: '100px',
    }}
    .title {
      color: blue;
    }
    .content {
      font-size: ${(props) => props.someCondition.fontSize};
      color: pink;
    }
  }
`;

export const flexPos = css`
  display: flex;
  justify-content: ${(props) => props.pos || 'center'};
  align-items: ${(props) => props.pos || 'center'};
`;

export const _width = css`
  @media (max-width: 750px) {
    width: 150px;
    background-color: plum;
    height: ${props => console.log('-宽度', props)};
  }

  @media (min-width: 750px) and (max-width: 1280px) {
    width: 300px;
    background-color: gold;
  }

  @media (min-width: 1280px) and (max-width: 1920px) {
    width: 500px;
    background-color: darkblue;
  }
`;

export { styled };
