const dataState = {
  vehicleCategoryCar: [],
  pageInfo: {},
  isLoading: false,
  error: false,
  errorMsg: ''
};

const vehicleCategoryCar = (state = dataState, action) => {
  switch (action.type) {
  case 'GET_CAR_PENDING': {
    state.isLoading = true;
    state.isError = false;
    return { ...state };
  }
  case 'GET_CAR_FULFILLED': {
    const { data } = action.payload;
    state.vehicleCategoryCar = data.results;
    state.pageInfo = data.pageInfo;
    state.isLoading = false;
    state.isError = false;
    return { ...state };
  }
  case 'GET_CAR_REJECTED': {
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

export default vehicleCategoryCar;