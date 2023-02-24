import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { Logo } from './Logo/Logo';
import { Header, HeaderContainer, /* LinkLogin, */ LinkNews } from './AppBar.styled';
import { Container } from '../Сontainer';

import { Navigation } from './Navigation/Navigation';

/* import { useScrollPosition } from '../../hooks/useScrollPosition'; */

const AppBarContainer = () => {
  return (
    <Header position="static">
      <Container>
        <HeaderContainer >
          <Stack direction="row" alignItems="center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, p: 0 }}
            >
              <Logo />
            </IconButton>
            <LinkNews role="news" to="/news">
              News
            </LinkNews>
          </Stack>

          <Navigation />
        </HeaderContainer>
      </Container>
    </Header>
  );

  /*  const { scrollY } = useScrollPosition();

  return (
    <Header role="banner" scrolledMobile={scrollY >= 120} scrolledTablet={scrollY >= 70}>
      <Container>
        <HeaderContainer>
          <Logo />
          <Navigation />
        </HeaderContainer>
      </Container>
    </Header>
  ); */
};

export default AppBarContainer;
