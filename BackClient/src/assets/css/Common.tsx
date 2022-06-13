import { createGlobalStyle } from 'styled-components';

export const Common = createGlobalStyle`
.page-wrap {
  width:  80%;
  margin: 0.3rem auto 0;
}

  .tag {
  font-size: 0.14rem;
  background-image: linear-gradient(to right bottom, rgb(144, 210, 237), rgb(221, 149, 185));
  color: #fff;
  border-radius: 0.1rem;
  padding: 0.1rem;
  border-radius: 0.1rem;

  &:not(:first-child){
    margin-left: 0.1rem;
  }
}
`;
