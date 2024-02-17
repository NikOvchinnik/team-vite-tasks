import axios from 'axios';

axios.defaults.baseURL = 'https://64859281a795d24810b7146a.mockapi.io/work';

async function getContacts() {
  const data = await axios.get('/contacts');
  console.log(data.data);
}

async function getContactsById(id) {
  const data = await axios.get(`/contacts/${id}`);
  console.log(data.data);
}
