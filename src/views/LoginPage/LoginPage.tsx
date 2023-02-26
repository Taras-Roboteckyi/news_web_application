import * as React from 'react';

import LoginForm from '../../components/Form/Form';
import { Container } from '../../components/Сontainer';
import { BoxContainer } from './LoginPage.styled';

export default function LoginPage() {
  return (
    <Container>
      <BoxContainer>
        <LoginForm />
      </BoxContainer>
    </Container>
  );
}
