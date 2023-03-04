import * as React from 'react';

import { useTranslation } from 'react-i18next';

import { List, ListItem, ListItemText, Typography } from '@mui/material';

/* import { createStyles, makeStyles } from '@mui/styles'; */

export const TextList = ({ textItem }) => {
  const { t } = useTranslation(['main']);

  return (
    <>
      <List disablePadding sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item', mb: 2, p: 0 }}>
          {textItem ? (
            <Typography variant="body2" sx={{ fontSize: '1rem' }}>
              {t('text.name')}
            </Typography>
          ) : (
            <Typography variant="body2" sx={{ fontSize: '1rem' }}>
              {t('stack.technologies')}
            </Typography>
          )}
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 2, p: 0 }}>
          {textItem ? (
            <Typography variant="body2" sx={{ fontSize: '1rem' }}>
              {t('text.password')}
            </Typography>
          ) : (
            <Typography variant="body2" sx={{ fontSize: '1rem' }}>
              {t('stack.design')}
            </Typography>
          )}
        </ListItem>
      </List>
    </>
  );
};
