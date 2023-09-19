import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { optThunk } from 'redux/contacts/servises';
import { authInitialState } from './initialState';
import {
  hendleFulfilled,
  hendlePanding,
  hendleRrejected,
  arrAuthTunk,
  hendLogOut,
} from './authService';
import { logOutThunk } from './authThunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
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
