import type { RootState } from '../store';

export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const getUserName = (state: RootState) => state.auth.user.userName;
/* 
export const getUserName = state => state.auth.user?.name;

export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

export const getIsReducerSpinner = state => state.auth.isReducerSpinner;

export const getUserDataCalories = state => state.auth.userData.calories;

export const getNotAllowedProducts = state => state.auth.notAllowedProducts; */

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  /* getUserName,
  getIsFetchingCurrent,
  getIsReducerSpinner,
  getUserDataCalories,
  getNotAllowedProducts, */
};

export default authSelectors;
