import http from '../../helpers/http';

export const getCategoryMotorbike = () => {
  return {
    type: 'GET_MOTORBIKE',
    payload: http().get('/vehicles/category?categoryId=2&limit=4&sort&order')
  };
};