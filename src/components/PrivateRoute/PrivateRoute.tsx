import * as React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { authSelectors } from '../../redux/authorization';
import { useAppSelector } from '../../hooks/reduxHooks';

export default function PrivateRoute({ children, redirectTo = '/' }) {
  /*  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn); */
  const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn);

  return <>{isLoggedIn ? children : <Navigate replace to={redirectTo} />}</>;
}
