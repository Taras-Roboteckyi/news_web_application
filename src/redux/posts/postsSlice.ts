import { createSlice, combineReducers, PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts, deletePosts } from './postsOperations';

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

const PostsState = {
  posts: [],
} as TPayload;

const page: number = 0;

const initialState = Object.assign({}, PostsState, { loading: false }, { page });

const itemsReducer = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addPage(state) {
      state.page += 10;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
      })

      .addCase(fetchPosts.fulfilled, (state, { payload }: PayloadAction<TPayload>) => {
        const result = payload.posts.filter(o1 => !state.posts.some(o2 => o1.id === o2.id));

        state.posts = state.posts.length === 0 ? [...payload.posts] : [...state.posts, ...result];

        state.loading = false;
      })

      .addCase(fetchPosts.rejected, state => {
        state.loading = false;
      })

      .addCase(deletePosts.fulfilled, (state, { payload }) => {
        state.posts = state.posts.filter(({ id }) => {
          return id !== payload.id;
        });
      });
  },
});

export const { addPage } = itemsReducer.actions;

export const reducer = combineReducers({
  items: itemsReducer.reducer,
});
