import * as React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { Logo } from './Logo/Logo';
import { Header, HeaderContainer } from './AppBar.styled';
import { Container } from '../Сontainer';

import { Navigation } from './Navigation/Navigation';
/* import { useScrollPosition } from '../../hooks/useScrollPosition'; */

const AppBarContainer = () => {
  return (
    <Header position="static">
      <Container>
        <Toolbar sx={{ px: 2 }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Logo />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
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
