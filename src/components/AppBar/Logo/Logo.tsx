import * as React from 'react';

import logoImg from '../../../images/logo_news.png';
import { LinkHome } from './Logo.styled';

export const Logo = () => {
  return (
    <LinkHome role="logo" to="/">
      <img role="link" src={`${logoImg}`} alt="Open book icon" />
    </LinkHome>
  );
};
