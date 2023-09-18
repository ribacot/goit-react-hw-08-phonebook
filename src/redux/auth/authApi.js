import { instance } from './instansAxiosAPI';

export const createUserAPI = async data => {
  try {
    const resp = await instance({
      url: '/users/signup',
      method: 'POST',
      data,
    });

    instance.defaults.headers.common['Authorization'] = `Bearer ${resp.data.token}`;
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
export const loginUserAPI = async data => {
  try {
    const resp = await instance({ url: '/users/login', method: 'POST', data });
    instance.defaults.headers.common['Authorization'] =  `Bearer ${resp.data.token}`;
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
export const logOutApi = async () => {
  try {
    const resp = await instance({ url: '/users/logout', method: 'POST' });
    instance.defaults.headers.common['Authorization'] = '';

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
// export const currentUserApi = async () => {
//   try {
//     const resp = await instance({ url: '/users/current' });
//     console.log('current', resp.data);
//     return resp.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
