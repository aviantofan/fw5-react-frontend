import http from '../../helpers/http';

export const insertVehicle = (data) =>{
  const params = new FormData();
  const token = window.localStorage.getItem('token');
  params.append ('image', data.image);
  params.append ('name', data.name);
  params.append ('color', data.color);
  params.append ('loc', data.loc);
  params.append ('isAvailable', data.isAvailable);
  params.append ('capacity', data.capacity);
  params.append ('categoryId', data.categoryId);
  params.append ('reservationBefore', data.reservationBefore);
  params.append ('paymentMethod', data.paymentMethod);
  params.append ('price', data.price);
  params.append ('stock', data.stock);
  return({
    type:'VEHICLE_INSERT',
    payload: http(token).post('/vehicles', params)
  });
};