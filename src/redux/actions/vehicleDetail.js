import http from '../../helpers/http';

export const getVehicleDetail = (id) => {
  return {
    type: 'GET_DETAIL',
    payload: http().get(`/vehicles/${id}`)
  };
};

export const updateDataVehicle = (data, id) =>{
  const token = window.localStorage.getItem('token');
  const params = new FormData();
  if (data?.image) {
    params.append('image', data.image);
  }
  if (data?.name) {
    params.append('name', data.name);
  }
  if (data?.color) {
    params.append('color', data.color);
  }
  if (data?.loc) {
    params.append('loc', data.loc);
  }
  if (data?.isAvailable) {
    params.append('isAvailable', data.isAvailable);
  }
  if (data?.isPrepay) {
    params.append('isPrepay', data.isPrepay);
  }
  if (data?.capacity) {
    params.append('capacity', data.capacity);
  }
  if (data?.categoryId) {
    params.append('categoryId', data.categoryId);
  }
  if (data?.reservationBefore) {
    params.append('reservationBefore', data.reservationBefore);
  }
  if (data?.paymentMethod) {
    params.append('paymentMethod', data.paymentMethod);
  }
  if (data?.price) {
    params.append('price', data.price);
  }
  if (data?.stock) {
    params.append('stock', data.stock);
  }
  return {
    type:'UPDATE_DATA_VEHICLE',
    payload: http(token).patch(`/vehicles/${id}`, params)
  };
};

export const deleteVehicle = (id) => {
  const token = window.localStorage.getItem('token');
  return {
    type: 'DELETE_VEHICLE',
    payload: http(token).delete(`/vehicles/${id}`)
  };
};