const dataState = {
  vehicleCategoryBike: [],
  pageInfo: {},
  isLoading: false,
  error: false,
  errorMsg: ''
};

const vehicleCategoryBike = (state = dataState, action) => {
  switch (action.type) {
  case 'GET_BIKE_PENDING': {
    state.isLoading = true;
    state.isError = false;
    return { ...state };
  }
  case 'GET_BIKE_FULFILLED': {
    const { data } = action.payload;
    state.vehicleCategoryBike = data.results;
    state.pageInfo = data.pageInfo;
    state.isLoading = false;
    state.isError = false;
    return { ...state };
  }
  case 'GET_BIKE_REJECTED': {
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

export default vehicleCategoryBike;