import * as React from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';

/* import { authSelectors, authOperations } from '../../redux/auth'; */

import { /* Container,  */ NameUser /* , ButtonExit  */ } from './UserMenu.styled';
import BackgroundLetterAvatars from './Avatar/Avatar';

export default function UserMenu() {
  const dispatch = useDispatch();
  /* const nameUser = useSelector(authSelectors.getUsername); */
  //console.log(nameUser);

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <BackgroundLetterAvatars />

      <NameUser variant="body1">Welcome, {/* {nameUser} */}</NameUser>
      <Button variant="text" sx={{ p: 0, pt: 0.5, color: 'yellow', '&:hover': { color: 'red' } }}>
        Sign Out
      </Button>
    </Stack>
  );
}
