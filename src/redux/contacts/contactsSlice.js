import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsInitalState as initialState } from './initialState';
import * as thunk from './productThunk';
import * as servises from './servises';

const {
  hendleFulfilledAdd,
  hendleFulfilledDel,
  hendleFulfilledget,
  hendlePanding,
  hendleRrejected,
  optThunk,
  arrContactsThunk,
} = servises;

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    const { getContactsThunk, addContactsThunk, delContactsThunk } = thunk;
    builder
      .addCase(getContactsThunk.fulfilled, hendleFulfilledget)
      .addCase(addContactsThunk.fulfilled, hendleFulfilledAdd)
      .addCase(delContactsThunk.fulfilled, hendleFulfilledDel)
      .addMatcher(
        isAnyOf(...optThunk({ type: 'pending', arr: arrContactsThunk })),
        hendlePanding
      )
      .addMatcher(
        isAnyOf(...optThunk({ type: 'rejected', arr: arrContactsThunk })),
        hendleRrejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
