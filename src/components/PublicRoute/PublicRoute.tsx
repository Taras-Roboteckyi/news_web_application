import * as React from 'react';

import { Navigate } from 'react-router-dom';
/* import { useSelector } from 'react-redux';

 */
import { authSelectors } from '../../redux/authorization';
import { useAppSelector } from '../../hooks/reduxHooks';
/* import { authSelectors } from '../../redux/authorization'; */

export default function PublicRoute({ children, restricted = false, redirectTo = '/' }) {
  /* const isLoggedIn = useSelector(authSelectors.getIsLoggedIn); */
  const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;

  return <>{shouldRedirect ? <Navigate replace to={redirectTo} /> : children}</>;
}
