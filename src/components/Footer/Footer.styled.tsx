import styled from 'styled-components';

import Box from '@mui/material/Box';

export const FooterContainer = styled(Box)`
  text-align: center;
  padding: 10px 0px;
  height: 90px;
  width: 100%;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 80px;
    padding-top: 30px;
  }
`;
