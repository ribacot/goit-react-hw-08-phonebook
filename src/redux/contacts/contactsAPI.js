import { instance } from 'redux/auth/instansAxiosAPI';

export const getContacts = async () => {
  const data = await instance({ url: '/contacts' });
  return data.data;
};

export const addContact = async contact => {

  const data = await instance({
    url: '/contacts',
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    data: contact,
  
  });
  return data.data;
};

export const delContact = async id => {
  const data = await instance({
    url: `/contacts/${id}`,
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
  });

  return  data.data;
};
