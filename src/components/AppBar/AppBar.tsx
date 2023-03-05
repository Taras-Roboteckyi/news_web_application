import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, IconButton } from '@mui/material';

import { Logo } from './Logo/Logo';
import { Container } from '../Сontainer';
import { Navigation } from './Navigation/Navigation';
import { TranslationMenu } from './TranslationMenu/TranslationMenu';

import { Header, HeaderContainer, LinkNews } from './AppBar.styled';

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
};

export default AppBarContainer;
