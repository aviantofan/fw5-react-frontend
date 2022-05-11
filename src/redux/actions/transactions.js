import http from '../../helpers/http';

export const postTransaction = (token, data) => {
  const params = new URLSearchParams();
  params.append('userId', data.userId);
  params.append('vehicleId', data.vehicleId);
  params.append('rentStartDate', data.rentStartDate);
  params.append('rentEndDate', data.rentEndDate);
  params.append('prepayment', data.prepayment);
  params.append('isReturned', data.isReturned);
  return ({
    type: 'POST_TRANSACTION',
    payload: http(token).post('/histories', params)
  });
};

export const getDataTransaction = (dataTransaction) => {
  const data = {
    'rentStartDate' : dataTransaction.rentStartDate,
    'rentEndDate' : dataTransaction.rentEndDate
  };
  return({
    type:'GET_DATA_TRANSACTION',
    payload : data
  });
};