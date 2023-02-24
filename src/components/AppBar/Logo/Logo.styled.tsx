import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkHome = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    transform: scale(1.04);

    filter: brightness(120%); // Змінює прозорість Лого
  }
  img {
    /* margin-right: 8px; */
    width: 70px;
    /*  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 70px;
    } */
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      width: 80px;
    }
    /* height: 31px; */
  }
`;
