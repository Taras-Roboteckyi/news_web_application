import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../../components/PostList/PostList';
import { Container } from '../../components/Сontainer';
/* import  Container './HomePage.styled'; */

export default function NewsPage() {
  return (
    <Container>
      <PostList />
    </Container>
  );
}
