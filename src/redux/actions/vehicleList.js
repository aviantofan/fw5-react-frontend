import http from '../../helpers/http';

export const getVehicleList = () => {
  return {
    type: 'GET_LIST',
    payload: http().get('/vehicles?limit=8')
  };
};