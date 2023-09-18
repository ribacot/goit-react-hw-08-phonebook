import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserAPI,  logOutApi,  loginUserAPI } from './authApi';

export const userCreateThunk = createAsyncThunk('auth/createUser', async body => {
  const  data  = await createUserAPI(body);
  return data
});

export const loginUserThunk = createAsyncThunk('auth/loginUser', async body => {
  const  data  = await loginUserAPI(body);
  return data
});
// export const currentUserThunk = createAsyncThunk('auth/currentUser', async () => {
//   const  data  = await currentUserApi();
//   return data
// });
export const logOutThunk = createAsyncThunk('auth/logOut', async () => {
  const  data  = await logOutApi();
  return data
});


