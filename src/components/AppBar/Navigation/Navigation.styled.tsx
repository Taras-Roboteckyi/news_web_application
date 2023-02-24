import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkLogin = styled(NavLink)`
  color: ${props => props.theme.colors.$white};

  font-size: 16px;
  font-weight: 500;
  line-height: 22px;

  cursor: pointer;

  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: ${props => props.theme.colors.$styleColor};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 18px;
    line-height: 25px;
  }
`;
