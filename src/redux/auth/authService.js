import { loginUserThunk, userCreateThunk, logOutThunk } from './authThunk';
import { authInitialState } from './initialState';
export const arrAuthTunk = [loginUserThunk, userCreateThunk, logOutThunk];

export const hendleFulfilled = (state, { payload }) => {
  if (payload.token) {
    state.token = payload.token;
    state.userName = payload.user.name;
    state.isLoading = false;
  }
  return;
};
export const hendlePanding = state => {
  state.isLoading = true;
  state.error = '';
};
export const hendleRrejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.messege;
};
export const hendLogOut = () => ({ ...authInitialState });
