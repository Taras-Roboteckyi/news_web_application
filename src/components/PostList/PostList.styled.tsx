import styled from 'styled-components';
/* import { styled } from '@mui/material/styles'; */

import Box from '@mui/material/Box';

export const Basic = styled(Box)`
  text-align: center;
  padding-bottom: 50px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 80px 50px 80px;
  }
`;
