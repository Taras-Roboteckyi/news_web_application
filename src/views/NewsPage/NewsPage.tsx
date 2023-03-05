import * as React from 'react';

import Footer from '../../components/Footer/Footer';
import PostList from '../../components/PostList/PostList';
import { Container } from '../../components/Сontainer';

export function NewsPage() {
  return (
    <>
      <Container>
        <PostList />
      </Container>
      <Footer />
    </>
  );
}
