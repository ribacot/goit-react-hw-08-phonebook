import {
  loginUserThunk,
  userCreateThunk,
  // currentUserThunk,
  logOutThunk,
} from './authThunk';

export const initialState = {
  token: '',
  userName: '',
  isLoading: false,
  error: '',
  currentUser: null,
};
export const arrAuthTunk = [
  loginUserThunk,
  userCreateThunk,
  // currentUserThunk,
  logOutThunk,
];

export const hendleFulfilled = (state, { payload }) => {
  if (payload.token) {
    state.token = payload.token;
    state.userName = payload.user.name;
    state.isLoading = false;
  }
  return;
};
// export const hendleFulfilledCurrentUser = (state, { payload }) => {
//   // if (payload.token) {
//     state.currentUser = payload;
//     state.isLoading = false;
//     state.error = '';
//   // }
//   return;
// };

export const hendlePanding = state => {
  state.isLoading = true;
  state.error = '';
};
export const hendleRrejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.messege;
};
export const hendLogOut = state => ({...state,...initialState})
