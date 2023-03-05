import * as React from 'react';

import { useTranslation } from 'react-i18next';

import { Stack, Button } from '@mui/material';

import { authSelectors } from '../../../redux/authorization';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { logOut } from '../../../redux/authorization/auth-slice';

import BackgroundLetterAvatars from './Avatar/Avatar';

import { LinkProfile, NameUser } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useAppDispatch();

  const nameUser = useAppSelector(authSelectors.getUserName);

  const { t } = useTranslation(['header']); //react-i18next

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <LinkProfile role="profile" to="/profile">
        <BackgroundLetterAvatars />
        <NameUser variant="body1">
          {t('welcome')}, {nameUser}
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
        {t('exit')}
      </Button>
    </Stack>
  );
}
