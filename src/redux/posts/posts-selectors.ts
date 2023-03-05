import type { RootState } from '../store';

export const getPosts = (state: RootState) => state.news.items.posts;
export const getLoading = (state: RootState) => state.news.items.loading;
export const getPage = (state: RootState) => state.news.items.page;
