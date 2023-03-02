import * as React from 'react';

import Typography from '@mui/material/Typography';

import LoginForm from '../../components/Form/Form';
import { Container } from '../../components/Сontainer';
import Footer from '../../components/Footer/Footer';

import { BoxContainer } from './LoginPage.styled';

export default function LoginPage() {
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
            Sign in to the app so we can save your data
          </Typography>

          <LoginForm />
        </BoxContainer>
      </Container>

      <Footer />
    </>
  );
}
