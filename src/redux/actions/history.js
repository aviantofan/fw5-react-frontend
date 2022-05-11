import http from '../../helpers/http';

export const getHistory = (id) => {
  const token = window.localStorage.getItem('token');
  return {
    type: 'GET_HISTORY',
    payload: http(token).get(`/histories/${id}`)
  };
};