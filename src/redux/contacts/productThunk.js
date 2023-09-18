import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './contactsAPI';

export const getContactsThunk = createAsyncThunk('contacts/get', () =>
  api.getContacts()
);
export const addContactsThunk = createAsyncThunk('contacts/add', contact =>
  api.addContact(contact)
);
export const delContactsThunk = createAsyncThunk('contacts/del', id =>
  api.delContact(id)
);
