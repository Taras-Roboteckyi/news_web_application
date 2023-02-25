import * as React from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../../redux/authorization';

import UserMenu from '../UserMenu/UserMenu';

import { LinkLogin } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  /* console.log(isLoggedIn); */
  /* const isLoggedIn = false; */

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
