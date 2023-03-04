import * as React from 'react';
import Avatar from '@mui/material/Avatar';
/* import { deepOrange } from '@mui/material/colors'; */

import { authSelectors } from '../../../../redux/authorization';
import { useAppSelector } from '../../../../hooks/reduxHooks';
import getRandomHexColor from '../../../../utilities/GetRandomHexColor';

function stringAvatar(name: string) {
  return {
    children: `${name.charAt(0)}`,
  };
}

export default function BackgroundLetterAvatars() {
  const nameUser = useAppSelector(authSelectors.getUserName);

  return (
    <Avatar
      {...stringAvatar(nameUser)}
      sx={{ mr: 1, width: 24, height: 24, fontSize: 14, bgcolor: getRandomHexColor() }}
    />
  );
}
