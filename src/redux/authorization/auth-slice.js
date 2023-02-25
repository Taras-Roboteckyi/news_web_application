import { createSlice, combineReducers } from '@reduxjs/toolkit';
/* import authOperations from './auth-operations'; */

const initialState = {
  user: { userName: null, password: null },

  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isReducerSpinner: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    createProfile(state, action) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
    },
  },
});

export const { createProfile } = authSlice.actions;

export const reducer = authSlice.reducer;
