import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { optThunk } from 'redux/contacts/servises';
import {
  hendleFulfilled,
  hendlePanding,
  hendleRrejected,
  arrAuthTunk,
  initialState,
  hendleFulfilledCurrentUser,
  hendLogOut,
} from './authService';
import {  logOutThunk } from './authThunk';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
    //   .addCase(currentUserThunk.fulfilled, hendleFulfilledCurrentUser)
      .addCase(logOutThunk.fulfilled, hendLogOut)

      .addMatcher(
        isAnyOf(...optThunk({ type: 'fulfilled', arr: arrAuthTunk })),
        hendleFulfilled
      )
      .addMatcher(
        isAnyOf(...optThunk({ type: 'pending', arr: arrAuthTunk })),
        hendlePanding
      )
      .addMatcher(
        isAnyOf(...optThunk({ type: 'rejected', arr: arrAuthTunk })),
        hendleRrejected
      );
  },
});

export const authReduser = authSlice.reducer;
