import * as React from 'react';

import { Navigate } from 'react-router-dom';

import { authSelectors } from '../../redux/authorization';
import { useAppSelector } from '../../hooks/reduxHooks';

export default function PublicRoute({ children, restricted = false, redirectTo = '/' }) {
  const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;

  return <>{shouldRedirect ? <Navigate replace to={redirectTo} /> : children}</>;
}
