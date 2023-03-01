import { createSlice, combineReducers, PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts, deletePosts } from './postsOperations';

/* let loading: boolean = false; */

interface PostState {
  body: string;
  id: number;
  reactions?: number;
  tags?: string[];
  title?: string;
  userId?: number;
}
interface TPayload {
  limit?: number;
  posts: PostState[];
  skip?: number;
  total?: number;
}
const initialState = {
  posts: [],
  /* loading, */
} as TPayload;

const itemsReducer = createSlice({
  name: 'items',
  initialState,
  reducers: {
    /*  [deleteContacts.fulfilled](state, action) {
      //console.log(action);
      return state.filter(({ id }) => {
        //console.log(id);
        return id !== action.meta.arg;
      });
    }, */
  },
  extraReducers: builder => {
    builder

      .addCase(fetchPosts.fulfilled, (state, { payload }: PayloadAction<TPayload>) => {
        state.posts = [...state.posts, ...payload.posts];
      })
      .addCase(deletePosts.fulfilled, (state, { payload }) => {
        state.posts = state.posts.filter(({ id }) => {
          //console.log(id);
          return id !== payload.id;
        });
      });
  },
});

/* export const { addItems, deleteItems } = itemsReducer.actions; */

/* const filterReducer = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(_, { payload }) {
      return payload;
    },
  },
}); */

/* export const { changeFilter } = filterReducer.actions;
 */
export const reducer = combineReducers({
  items: itemsReducer.reducer,
  /* filter: filterReducer.reducer, */
});
