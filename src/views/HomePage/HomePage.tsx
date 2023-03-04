import { Paper } from '@mui/material';
import * as React from 'react';
import Footer from '../../components/Footer/Footer';
import { TextContainer } from '../../components/TextContainer/TextContainer';

import { Container } from '../../components/Сontainer';

export default function HomePage() {
  return (
    <>
      <Container>
        <TextContainer />
      </Container>
      <Footer />
    </>
  );
}
