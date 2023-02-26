import * as React from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
/* import { useDispatch, useSelector } from 'react-redux'; */

import { authSelectors } from '../../../redux/authorization';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { logOut } from '../../../redux/authorization/auth-slice';

import { /* Container,  */ LinkProfile, NameUser /* , ButtonExit  */ } from './UserMenu.styled';
import BackgroundLetterAvatars from './Avatar/Avatar';

export default function UserMenu() {
  const dispatch = useAppDispatch();
  /*  const nameUser = useSelector(authSelectors.getUserName); */
  const nameUser = useAppSelector(authSelectors.getUserName);
  //console.log(nameUser);

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <LinkProfile role="profile" to="/profile">
        <BackgroundLetterAvatars />
        <NameUser variant="body1">Welcome, {nameUser}</NameUser>
      </LinkProfile>
      <Button
        variant="text"
        sx={{
          p: 0,
          pt: 0.5,
          color: 'yellow',
          fontSize: 13,
          '&:hover': { color: 'red' },
        }}
        onClick={() => dispatch(logOut())}
      >
        Sign Out
      </Button>
    </Stack>
  );
}
