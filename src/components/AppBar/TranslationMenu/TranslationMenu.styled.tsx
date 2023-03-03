import styled from 'styled-components';
/* import { styled } from '@mui/material/styles'; */

import Box from '@mui/material/Box';

export const LanguageContainer = styled(Box)`
  margin: 15px 0px 10px 0px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin: 0;
  }
`;
