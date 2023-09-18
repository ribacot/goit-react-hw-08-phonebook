import * as thunk from './productThunk';

const arrThunk = [
  thunk.getContactsThunk,
  thunk.addContactsThunk,
  thunk.delContactsThunk,
];

export const optThunk = type => arrThunk.map(el => el[type]);

export const hendlePanding = state => ({
  ...state,
  isLoading: true,
});

export const hendleFulfilledget = (state, { payload }) => ({
  ...state,
  contacts: [...payload],
  isLoading: false,
  error: null,
});

export const hendleFulfilledAdd = (state, { payload }) => ({
  ...state,
  contacts: [...state.contacts, payload],
  isLoading: false,
  error: null,
});

export const hendleFulfilledDel = (state, { payload }) => ({
  ...state,
  contacts: state.contacts.filter(contact => contact.id !== payload.id),
  isLoading: false,
  error: null,
});

export const hendleRrejected = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: payload,
});



