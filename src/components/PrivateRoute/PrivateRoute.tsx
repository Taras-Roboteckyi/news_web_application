import * as React from 'react';

import { Navigate } from 'react-router-dom';

import { authSelectors } from '../../redux/authorization';
import { useAppSelector } from '../../hooks/reduxHooks';

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn);

  return <>{isLoggedIn ? children : <Navigate replace to={redirectTo} />}</>;
}
