import { combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filterSlise';
import { contactsReducer } from './contacts/contactsSlice';

export const reducer = combineReducers({
  filter: filterReducer,
  contacts:contactsReducer
});
