import * as React from 'react';

import { useTranslation } from 'react-i18next';

import { List, ListItem, ListItemText, Typography } from '@mui/material';

/* import { createStyles, makeStyles } from '@mui/styles'; */

export const TextListLinks = () => {
  const { t } = useTranslation(['main']);

  return (
    <>
      <List disablePadding sx={{ listStyleType: 'disc', pl: 4, mb: 2 }}>
        <ListItem sx={{ display: 'list-item', mb: 2, p: 0 }}>
          <Typography variant="body2" sx={{ fontSize: '1rem' }}>
            {t('links.item1')}
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 2, p: 0 }}>
          <Typography variant="body2" sx={{ fontSize: '1rem' }}>
            {t('links.item2')}
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 2, p: 0 }}>
          <Typography variant="body2" sx={{ fontSize: '1rem' }}>
            {t('links.item3')}
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 2, p: 0 }}>
          <Typography variant="body2" sx={{ fontSize: '1rem' }}>
            {t('links.item4')}
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0 }}>
          <Typography variant="body2" sx={{ fontSize: '1rem' }}>
            {t('links.item5')}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};
