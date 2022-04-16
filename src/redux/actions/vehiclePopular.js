import http from '../../helpers/http';

export const getVehiclePopular = () => {
  return {
    type: 'GET_VEHICLE_POPULAR',
    payload: http().get('/vehicles/p/populars?limit=4')
  };
};