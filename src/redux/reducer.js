import { combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filterSlise';
import { contactsReducer } from './contacts/contactsSlice';
import { authReduser } from './auth/authSlice';

export const reducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
  auth: authReduser,
});
