import http from '../../helpers/http';

export const profile = (data, id) => {
  const token = window.localStorage.getItem('token');
  const params = new FormData();
  if (data?.image) {
    params.append('image', data.image);
  }
  if (data?.gender) {
    params.append('gender', data.gender);
  }
  if (data?.email) {
    params.append('email', data.email);
  }
  if (data?.address) {
    params.append('address', data.address);
  }
  if (data?.phone) {
    params.append('phone', data.phone);
  }
  if (data?.name) {
    params.append('username', data.name);
  }
  if (data?.birthdate) {
    params.append('birthdate', data.birthdate);
  }
  return ({
    type: 'UPDATE_PROFILE',
    payload: http(token).patch(`/users/${id}`, params),
  });
};