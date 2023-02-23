import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';

import HeroImg from '../../images/background.jpg';

export const Header = styled(AppBar)`
  padding-top: 22px;
  padding-bottom: 12px;

  background-color: #00000040; // 40 - aльфа канал який додає прозорість
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${HeroImg});
  background-position: center;
  background-size: cover;

  transition: background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-bottom: 22px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-top: 35px;
  }
`;

export const HeaderContainer = styled.div`
  /* padding-left: 20px;
  padding-right: 20px; */
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding-left: 32px;
    padding-right: 32px; */
  }
`;
