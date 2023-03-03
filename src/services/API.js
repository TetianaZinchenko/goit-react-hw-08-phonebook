import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchAllContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const postContact = async newContact => {
  const response = await axios.post('/contacts', newContact);
  return response.data;
};

export const deleteContactById = async contactId => {
  await axios.delete(`/contacts/${contactId}`);
};
