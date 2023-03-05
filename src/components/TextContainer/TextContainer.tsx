import * as React from 'react';

import { useTranslation } from 'react-i18next';

import { Box, Typography } from '@mui/material';

import { TextListPages } from './TextListPages/TextListPages';
import { TextListLinks } from './TextListLinks/TextListLinks';
import { TextList } from './TextList/TextList';

export const TextContainer = () => {
  const { t } = useTranslation(['main']); //react-i18next

  return (
    <Box sx={{ pb: 5 }}>
      <Typography
        variant="h1"
        sx={{
          mt: 3,
          mb: 3,
          fontSize: 25,
          textAlign: 'center',
          color: 'info.dark',
        }}
      >
        {t('welcome')}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 2,
          textAlign: 'center',
          color: 'info.light',
        }}
      >
        {t('paragraph')}
      </Typography>

      <Typography
        variant="h2"
        sx={{
          mb: 2,
          fontSize: 18,
          fontWeight: 500,
        }}
      >
        {t('pages.paragraph')}
      </Typography>

      <TextListPages />

      <Typography
        variant="h3"
        sx={{
          mb: 2,
          fontSize: 18,
          fontWeight: 500,
        }}
      >
        {t('links.paragraph')}
      </Typography>
      <TextListLinks />
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontSize: 18,
          fontWeight: 500,
        }}
      >
        {t('text.paragraph')}
      </Typography>
      <TextList textItem />
      <Typography
        variant="body2"
        sx={{
          fontSize: 16,
          mb: 2,
        }}
      >
        {t('message')}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          fontSize: 18,
          fontWeight: 500,
        }}
      >
        {t('stack.paragraph')}
      </Typography>
      <TextList textItem={false} />
    </Box>
  );
};
