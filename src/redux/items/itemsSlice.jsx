import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './itemsOperations';

const itemsReducer = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      return (state = [...payload]);
    },
    [addContacts.fulfilled]: (state, { payload }) => {
      return (state = [...state, payload]);
    },

    [deleteContacts.fulfilled](state, action) {
      //console.log(action);
      return state.filter(({ id }) => {
        //console.log(id);
        return id !== action.meta.arg;
      });
    },
  },
});

export const { addItems, deleteItems } = itemsReducer.actions;

const filterReducer = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { changeFilter } = filterReducer.actions;

export const reducer = combineReducers({
  items: itemsReducer.reducer,
  filter: filterReducer.reducer,
});
