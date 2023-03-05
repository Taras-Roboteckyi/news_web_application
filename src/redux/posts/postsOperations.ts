import { createAsyncThunk } from '@reduxjs/toolkit';

import * as DummyJsonApi from '../../services/DummyJSON_API';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (page: number, { rejectWithValue }) => {
    try {
      const data = await DummyJsonApi.fetchAllPosts(page);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deletePosts = createAsyncThunk(
  'posts/deletePosts',
  async (id: string, { rejectWithValue }) => {
    try {
      const data = await DummyJsonApi.deletePostsByID(id);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
