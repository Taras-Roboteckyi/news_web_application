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

export default class DummyJsonApiService {
  constructor() {
    this.searchName = '';
    this.perPage = 10;
    this.page = 10;
  }

  async fetchAllPosts() {
    const { data } = await axios.get(
      `https://dummyjson.com/posts?search?q=${this.searchName}&limit=${this.perPage}&skip=${this.page}'`,
    );
    console.log('data', data);
    /*  const fetchImages = fetch(
      `https://pixabay.com/api/?key=24371516-b10d2b2a42c8e4a8969a3fdf2&q=${this.searchName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.page}`,
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error('Sorry, there are no images matching your search query. Please try again.'),
      );
    }); */

    this.incrementPage();

    return data;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchName;
  }

  set query(newQuery) {
    this.searchName = newQuery;
  }
}
