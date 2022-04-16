const dataState = {
  vehicleCategoryMotorbike: [],
  pageInfo: {},
  isLoading: false,
  error: false,
  errorMsg: ''
};

const vehicleCategoryMotorbike = (state = dataState, action) => {
  switch (action.type) {
  case 'GET_MOTORBIKE_PENDING': {
    state.isLoading = true;
    state.isError = false;
    return { ...state };
  }
  case 'GET_MOTORBIKE_FULFILLED': {
    const { data } = action.payload;
    state.vehicleCategoryMotorbike = data.results;
    state.pageInfo = data.pageInfo;
    state.isLoading = false;
    state.isError = false;
    return { ...state };
  }
  case 'GET_MOTORBIKE_REJECTED': {
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

export default vehicleCategoryMotorbike;