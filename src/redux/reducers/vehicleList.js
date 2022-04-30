const initialState = {
  vehicleList: [],
  pageInfo: {},
  isLoading: false,
  error: false,
  errorMsg: ''
};

const vehicleList = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_LIST_PENDING': {
    state.isLoading = true;
    state.error = false;
    return { ...state };
  }
  case 'GET_LIST_FULFILLED': {
    const { data } = action.payload;
    state.vehicleList = data.results;
    state.pageInfo = data.pageInfo;
    state.isLoading = false;
    state.error = false;
    return { ...state };
  }
  case 'GET_LIST_REJECTED': {
    const { message } = action.payload.response.data;
    state.isLoading = false;
    state.error = true;
    state.errorMsg = message;
    return { ...state };
  }
  default: {
    return { ...state };
  }
  }
};

export default vehicleList;