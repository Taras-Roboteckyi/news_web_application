import * as React from 'react';
import { useTranslation } from 'react-i18next';

/* import Stack from '@mui/material/Stack'; */
/* import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; */
/* import IconButton from '@mui/material/IconButton'; */
/* import MenuIcon from '@mui/icons-material/Menu'; */
import { Stack, IconButton } from '@mui/material';

import { Logo } from './Logo/Logo';
import { Header, HeaderContainer, /* LinkLogin, */ LinkNews } from './AppBar.styled';
import { Container } from '../Сontainer';

import { Navigation } from './Navigation/Navigation';
import { TranslationMenu } from './TranslationMenu/TranslationMenu';

/* import { useScrollPosition } from '../../hooks/useScrollPosition'; */

const AppBarContainer = () => {
  const { t } = useTranslation(['header']); //react-i18next

  return (
    <Header position="static">
      <Container>
        <HeaderContainer>
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
              {t('news', { ns: ['header'] })}
            </LinkNews>
          </Stack>
          <TranslationMenu />
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
