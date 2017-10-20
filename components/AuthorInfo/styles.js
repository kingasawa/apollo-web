import styled from 'styled-components';
// import { A } from '../Theme';

const mainRed = 'red';
// eslint-disable-next-line import/prefer-default-export
export const Header = styled.section`
  color: ${mainRed};
  > h1 {
    margin-top: 0;
    text-decoration: underline;
  }

  > p {
    font-size: 17px;
  }
`;

// export { A };
