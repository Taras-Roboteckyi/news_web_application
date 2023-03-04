import styled from 'styled-components';
/* import { styled } from '@mui/material/styles'; */
/* import Avatar from '@mui/material/Avatar'; */
/* import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box'; */
import { Box, Typography } from '@mui/material';

export const LanguageContainer = styled(Box)`
  margin: 15px 0px 10px 0px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin: 0;
  }
`;

export const NameLanguage = styled(Typography)`
  /* margin-right: 10px; */
  position: relative;
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.colors.$white};
`;
