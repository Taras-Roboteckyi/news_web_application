/* import * as React from 'react'; */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/items/itemsOperations';

/* import  Container './HomePage.styled'; */

export default function NewsPage() {
  const user = useSelector(state => state.items);
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const skipPage = 10;

  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [dispatch, page]);

  const handleClickLoadMore = () => {
    setPage(prevPage => prevPage + skipPage);
  };

  return (
    <div>
      <h4>Redux toolkit with async API call using createAsyncThunk -</h4>

      <button onClick={handleClickLoadMore}>Next</button>
    </div>
  );
}
