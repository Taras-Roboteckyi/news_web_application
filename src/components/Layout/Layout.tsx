import * as React from 'react';

import { Outlet } from 'react-router-dom';

import AppBarContainer from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBarContainer />

      <Outlet />
    </>
  );
};
