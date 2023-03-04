import * as React from 'react';

import { useTranslation } from 'react-i18next';

import Typography from '@mui/material/Typography';

import LoginForm from '../../components/Form/Form';
import { Container } from '../../components/Сontainer';
import Footer from '../../components/Footer/Footer';

import { BoxContainer } from './LoginPage.styled';

export default function LoginPage() {
  const { t } = useTranslation(['auth']); //react-i18next

  return (
    <>
      <Container>
        <BoxContainer>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: 20,
            }}
          >
            {t('login.paragraph')}
          </Typography>

          <LoginForm />
        </BoxContainer>
      </Container>

      <Footer />
    </>
  );
}
