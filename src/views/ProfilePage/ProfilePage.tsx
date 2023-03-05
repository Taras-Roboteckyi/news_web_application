import * as React from 'react';

import { useTranslation } from 'react-i18next';

import { Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { Container } from '../../components/Сontainer';
import Footer from '../../components/Footer/Footer';

import { BoxContainer } from './ProfilePage.styled';

export default function ProfilePage() {
  const { t } = useTranslation(['auth']); //react-i18next

  return (
    <>
      <Container>
        <BoxContainer>
          <svg>
            <CheckCircleOutlineIcon color="success" />
          </svg>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: 20,
              color: 'success.light',
              textAlign: 'center',
            }}
          >
            {t('profile.paragraph')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: 20,

              textAlign: 'center',
            }}
          >
            {t('profile.text')}
          </Typography>
        </BoxContainer>
      </Container>

      <Footer />
    </>
  );
}
