import styled from 'styled-components';

export const LinkHome = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  margin-bottom: 16px;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    transform: scale(1.04);

    filter: brightness(120%); // Змінює прозорість Лого
  }
  img {
    /* margin-right: 8px; */
    width: 50px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 70px;
    }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      width: 100px;
    }
    /* height: 31px; */
  }
  p {
    font-size: 28px;
    line-height: 38px;
    color: ${props => props.theme.colors.$styleColor};
  }
  span {
    color: ${props => props.theme.colors.$white};
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 0;
    p {
      font-size: 35px;
      line-height: 48px;
    }
  }
`;
