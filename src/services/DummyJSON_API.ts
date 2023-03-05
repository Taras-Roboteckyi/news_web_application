import axios from 'axios';

export async function fetchAllPosts(page: number) {
  const { data } = await axios.get(`https://dummyjson.com/posts?limit=10&skip=${page}`);

  return data;
}

export async function deletePostsByID(postID: string) {
  const { data } = await axios.delete(`https://dummyjson.com/posts/${postID}`);

  return data;
}
