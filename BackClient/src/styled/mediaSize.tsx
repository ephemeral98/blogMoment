import styled, { css } from 'styled-components';
import { $sm, $md, $lg, svw, mvw } from './var';

export const _width = css`
  //
  @media (max-width: ${$sm}) {
    background-color: plum;
    height: ${(props) => console.log('-宽度', props)};
  }

  @media (min-width: $sm) and (max-width: ${$md}) {
    width: ${(props) => `${props.w}${mvw}`};

    background-color: gold;
  }

  @media (min-width: ${$md}) and (max-width: ${$lg}) {
    width: 500px;
    background-color: darkblue;
  }
`;
