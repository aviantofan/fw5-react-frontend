const dataState = {
  vehiclePopular: [],
  pageInfo: {},
  isLoading: false,
  error: false,
  errorMsg: ''
};

const vehiclePopular = (state = dataState, action) => {
  switch (action.type) {
  case 'GET_VEHICLE_POPULAR_PENDING': {
    state.isLoading = true;
    state.isError = false;
    return { ...state };
  }
  case 'GET_VEHICLE_POPULAR_FULFILLED': {
    const { data } = action.payload;
    state.vehiclePopular = data.results;
    state.pageInfo = data.pageInfo;
    state.isLoading = false;
    state.isError = false;
    return { ...state };
  }
  case 'GET_VEHICLE_POPULAR_REJECTED': {
    const { message } = action.payload.response.data;
    state.isLoading = false;
    state.isError = true;
    state.errorMsg = message;
    return { ...state };
  }
  default: {
    return { ...state };
  }
  }
};

export default vehiclePopular;