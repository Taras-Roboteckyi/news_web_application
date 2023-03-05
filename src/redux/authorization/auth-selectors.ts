import type { RootState } from '../store';

export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const getUserName = (state: RootState) => state.auth.user.userName;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
};

export default authSelectors;
