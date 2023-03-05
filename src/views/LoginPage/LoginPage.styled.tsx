import styled from 'styled-components';

import Box from '@mui/material/Box';

export const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 0px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 80px 0px;
  }
`;
