import http from '../../helpers/http';

export const getCategoryCar = () => {
  return {
    type: 'GET_CAR',
    payload: http().get('/vehicles/category?categoryId=1&limit=4')
  };
};