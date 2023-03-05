import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { AppBar, Toolbar } from '@mui/material';

import HeroImg from '../../images/background.jpg';

export const Header = styled(AppBar)`
  height: 150px;
  background-color: #00000040; // 40 - aльфа канал який додає прозорість
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${HeroImg});
  background-position: center;
  background-size: cover;

  transition: background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 100px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const HeaderContainer = styled(Toolbar)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const LinkNews = styled(NavLink)`
  position: relative;
  color: ${props => props.theme.colors.$white};
  margin-left: 30px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;

  cursor: pointer;
  transition: border-bottom 500ms;

  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    &:after {
      position: absolute;
      content: '';
      top: 85%;
      left: 0;
      height: 2px;
      width: 100%;
      border-bottom: 2px solid ${props => props.theme.colors.$styleColor};
    }
    color: ${props => props.theme.colors.$styleColor};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 18px;
    line-height: 25px;
  }
`;
