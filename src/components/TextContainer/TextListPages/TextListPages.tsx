import * as React from 'react';

import { useTranslation } from 'react-i18next';

import { List, ListItem, Typography } from '@mui/material';

export const TextListPages = () => {
  const { t } = useTranslation(['main']);

  return (
    <>
      <List disablePadding sx={{ listStyleType: 'disc', pl: 4, mb: 2 }}>
        <ListItem sx={{ display: 'list-item', mb: 2, p: 0 }}>
          <Typography variant="body2" sx={{ fontSize: '1rem' }}>
            {t('pages.item1')}
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 2, p: 0 }}>
          <Typography variant="body2" sx={{ fontSize: '1rem' }}>
            {t('pages.item2')}
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 2, p: 0 }}>
          <Typography variant="body2" sx={{ fontSize: '1rem' }}>
            {t('pages.item3')}
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0 }}>
          <Typography variant="body2" sx={{ fontSize: '1rem' }}>
            {t('pages.item4')}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};
