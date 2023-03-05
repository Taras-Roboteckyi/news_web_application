import type { RootState } from '../store';

export const getPosts = (state: RootState) => state.news.items.posts;
export const getLoading = (state: RootState) => state.news.items.loading;
export const getPage = (state: RootState) => state.news.items.page;
/* export const getFilter = state => state.contacts.filter; */

/* export const getVisibleItems = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
}; */
