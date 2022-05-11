const dataState = {
  history: [],
  isLoading: false,
  error: false,
  errorMsg: '',
  isSuccess: false
};

const history = (state = dataState, action) =>{
  switch (action.type) {
  case 'GET_HISTORY_PENDING':{
    state.isLoading = true;
    state.history=[];
    state.error = false;
    return { ...state };
  }
  case 'GET_HISTORY_FULFILLED':{
    const { data } = action.payload;
    state.history = data.result;
    state.isLoading = false;
    state.error = false;
    return { ...state };
  }
  case 'GET_HISTORY_REJECTED':{
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

export default history;