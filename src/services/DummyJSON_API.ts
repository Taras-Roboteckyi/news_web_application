import axios from 'axios';

/* axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchContacts() {
  const { data } = await axios.get(`https://dummyjson.com/posts`);
  console.log('data', data);
  return data;
}
fetchContacts();
export async function addContacts(createContact) {
  const { data } = await axios.post(`/contacts`, createContact);
  return data;
}

export async function deleteContacts(contactsID) {
  const { data } = await axios.delete(`/contacts/${contactsID}`);

  return data;
} */
export async function fetchAllPosts(page) {
  const { data } = await axios.get(`https://dummyjson.com/posts?limit=10&skip=${page}`);
  console.log('data', data);
  return data;
}

export async function deletePostsByID(postID) {
  const { data } = await axios.delete(`https://dummyjson.com/posts/${postID}`);

  return data;
}
