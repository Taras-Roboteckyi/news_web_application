import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';

/* export const Container = styled.div`
  display: flex;
`;
 */

export const LinkProfile = styled(NavLink)`
  display: flex;
  margin-right: 10px;
  white-space: nowrap;
  color: ${props => props.theme.colors.$white};

  /* font-size: 2px; */
  font-weight: 500;
  line-height: 22px;

  cursor: pointer;

  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: ${props => props.theme.colors.$hoverColor};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const NameUser = styled(Typography)`
  /* margin-right: 10px; */
  position: relative;
  font-size: 2px;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  :hover,
  :focus {
    &:after {
      position: absolute;
      content: '';
      top: 85%;
      left: 0;
      height: 2px;
      width: 100%;
      border-bottom: 1px solid ${props => props.theme.colors.$hoverColor};
    }
  }
`;

/* export const ButtonExit = styled(Button)`
 padding: 0;
 padding-top: 5px;

  color: ${props => props.theme.colors.$styleColor};
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;

  background-color: ${props => props.theme.colors.primary};

  :hover {
    background-color: ${props => props.theme.colors.secondPrimary};
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
    color: ${props => props.theme.colors.text};
  }
`; */
