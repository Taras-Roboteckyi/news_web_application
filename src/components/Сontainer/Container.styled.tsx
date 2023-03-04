import styled from 'styled-components';

export const Div = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  min-height: calc(100vh - 70px);

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 768px;
    padding: 0px;
  }
  @media screen and (min-width: 1360px) {
    width: 1360px;
  }
`;
