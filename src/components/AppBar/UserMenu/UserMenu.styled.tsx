import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';

/* export const Container = styled.div`
  display: flex;
`;
 */
export const NameUser = styled(Typography)`
  /* margin-right: 10px; */
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
`;

export const LinkProfile = styled(NavLink)`
  display: flex;
  margin-right: 10px;

  color: ${props => props.theme.colors.$white};

  font-size: 16px;
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

/* export const ButtonExit = styled.button`
  padding: 5px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  border-radius: 5px;
  border: none;
  color: ${props => props.theme.colors.background};
  cursor: pointer;
  font-weight: 400;

  background-color: ${props => props.theme.colors.primary};

  :hover {
    background-color: ${props => props.theme.colors.secondPrimary};
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
    color: ${props => props.theme.colors.text};
  }
`;
 */
