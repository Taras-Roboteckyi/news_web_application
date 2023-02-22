import axios from 'axios';

export async function fetchHumorData() {
  const { data } = await axios.get(`/contacts`);
  return data;
}
