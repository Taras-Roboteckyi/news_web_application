import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { fetchPosts, /* addContacts, */ deleteContacts } from './itemsOperations';

const itemsReducer = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: {
    [fetchPosts.fulfilled]: (state, { payload }) => {
      console.log('payload', payload);

      console.log('state', state);
      console.log('payload.posts', payload.posts);
      /*  return (state = payload.posts.filter(item => {
        return state.every(item2 => item2.id === item.id) ? payload.posts : state;
      })); */
      /* return (state = [...payload.posts]); */
      /*  const a = [...state, ...payload.posts];
      console.log('a', a); */
      return (state = [...state, ...payload.posts]);
    },
    /*  [addContacts.fulfilled]: (state, { payload }) => {
      return (state = [...state, payload]);
    }, */

    [deleteContacts.fulfilled](state, action) {
      //console.log(action);
      return state.filter(({ id }) => {
        //console.log(id);
        return id !== action.meta.arg;
      });
    },
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
