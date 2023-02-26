import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
/* import authOperations from './auth-operations'; */

interface userState { userName: string, password: string}

interface AuthState {
  user: userState,

  isLoggedIn: boolean,
 /*  isFetchingCurrentUser: boolean,
  isReducerSpinner: boolean, */
}

const initialState:AuthState = {
  user: { userName: '', password: '' },

  isLoggedIn: false,
  /* isFetchingCurrentUser: false,
  isReducerSpinner: false, */
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    createProfile(state, action: PayloadAction<userState>) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
    },
     logOut(state) {
      state.user = { userName: '', password: '' };
      state.isLoggedIn = false;
    },
  },
});

export const { createProfile, logOut } = authSlice.actions;

export const reducer = authSlice.reducer;
