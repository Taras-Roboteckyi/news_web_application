import styled from 'styled-components';

import { Box, Typography } from '@mui/material';

export const LanguageContainer = styled(Box)`
  margin: 15px 0px 10px 0px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 15px;
  }
`;

export const NameLanguage = styled(Typography)`
  position: relative;
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.colors.$white};
`;
