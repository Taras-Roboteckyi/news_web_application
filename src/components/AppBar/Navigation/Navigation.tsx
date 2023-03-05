import * as React from 'react';

import { Translation } from 'react-i18next';

import { authSelectors } from '../../../redux/authorization';
import { useAppSelector } from '../../../hooks/reduxHooks';

import UserMenu from '../UserMenu/UserMenu';

import { LinkLogin } from './Navigation.styled';

export const Navigation = () => {
  /* const isLoggedIn = useSelector(authSelectors.getIsLoggedIn); */
  const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn);
  /* console.log(isLoggedIn); */
  /* const isLoggedIn = false; */

  return (
    <>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <Translation ns="header">
          {t => (
            <LinkLogin role="login" to="/login">
              {t('login')}
            </LinkLogin>
          )}
        </Translation>
      )}
    </>
  );
};
