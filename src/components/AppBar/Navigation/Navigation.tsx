import * as React from 'react';
import { useSelector } from 'react-redux';
/* import { authSelectors } from '../../redux/auth'; */
import UserMenu from '../UserMenu/UserMenu';

import { LinkLogin } from './Navigation.styled';

export const Navigation = () => {
  /* const isLoggedIn = useSelector(authSelectors.getIsLoggedIn); */
  const isLoggedIn = false;

  return (
    <>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <LinkLogin role="login" to="/login">
          Login
        </LinkLogin>
      )}
    </>
  );
};
