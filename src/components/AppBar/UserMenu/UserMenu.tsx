import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
/* import { useDispatch, useSelector } from 'react-redux'; */

import { authSelectors } from '../../../redux/authorization';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { logOut } from '../../../redux/authorization/auth-slice';

import { /* Container,  */ LinkProfile, NameUser /* , ButtonExit */ } from './UserMenu.styled';
import BackgroundLetterAvatars from './Avatar/Avatar';
import { relative } from 'path';

export default function UserMenu() {
  const dispatch = useAppDispatch();
  /*  const nameUser = useSelector(authSelectors.getUserName); */
  const nameUser = useAppSelector(authSelectors.getUserName);
  const { t } = useTranslation(['header']); //react-i18next
  //console.log(nameUser);

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <LinkProfile role="profile" to="/profile">
        <BackgroundLetterAvatars />
        <NameUser variant="body1">
          {t('welcome', { ns: ['header'] })}, {nameUser}
        </NameUser>
      </LinkProfile>
      <Button
        variant="text"
        sx={{
          p: 0,
          pt: 0.1,
          color: 'yellow',
          fontSize: 16,
          textTransform: 'none',
          '&:hover': {
            color: 'red',
            textDecoration: 'underline',
          },
        }}
        onClick={() => dispatch(logOut())}
      >
        {t('exit', { ns: ['header'] })}
      </Button>
    </Stack>
  );
}
