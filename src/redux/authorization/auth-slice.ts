import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userName: string;
  password: string;
}

interface AuthState {
  user: UserState;

  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: { userName: '', password: '' },

  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    createProfile(state, action: PayloadAction<UserState>) {
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
