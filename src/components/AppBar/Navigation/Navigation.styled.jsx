import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const MenuItem = styled.li`
  transition: border-bottom 500ms;

  position: relative;

  &:not(:last-child) {
    margin-right: 12px;
  }
  &:hover,
  &:focus {
    &:after {
      position: absolute;

      content: '';
      top: 100%;
      left: 0;
      height: 2px;
      width: 100%;
      border-bottom: 2px solid ${props => props.theme.colors.$styleColor};
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
`;

export const MenuLink = styled.a`
  padding-top: 5px;
  padding-bottom: 5px;

  font-size: 16px;
  line-height: 22px;
  color: ${props => props.theme.colors.$white};
  transition: color 500ms;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.$styleColor};
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 18px;
    line-height: 25px;
  }
`;
