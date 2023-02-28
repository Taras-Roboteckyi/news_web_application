import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
/* import DummyJsonApi from '../../services/JSONPlaceholder_API'; */

/* const newsApi = new DummyJsonApi();
newsApi.fetchAllPosts(); */
import * as DummyJsonApi from '../../services/JSONPlaceholder_API';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (page, { rejectWithValue }) => {
    try {
      const data = await DummyJsonApi.fetchAllPosts(page);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

/* export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await contactShelfAPI.addContacts(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
); */

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      /*  const data = await contactShelfAPI.deleteContacts(id); */
      //console.log(data);
      /* return data; */
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
