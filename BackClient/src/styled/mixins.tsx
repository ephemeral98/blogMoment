import styled, { css } from 'styled-components';

/**
 * flex 方向
 * pos: 'flex-start','center','flex-end';
 */
export const flexPos = css`
  display: flex;
  justify-content: ${(props) => props.pos || 'center'};
  align-items: ${(props) => props.pos || 'center'};
`;
