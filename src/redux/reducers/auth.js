const initialState = {
  token: null,
  userData: {},
  isLoading: false,
  isError: false,
  errorMsg: '',
  isSuccess: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
  case 'AUTH_REGISTER_PENDING': {
    state.isLoading = true;
    state.isError = false;
    return { ...state };
  }
  case 'AUTH_REGISTER_FULFILLED': {
    const { data } = action.payload;
    state.isLoading = false;
    state.isError = false;
    state.errorMsg = data.message;
    return { ...state };
  }
  case 'AUTH_REGISTER_REJECTED': {
    const { message } = action.payload.response.data;
    state.isLoading = false;
    state.isError = true;
    state.errorMsg = message;
    return { ...state };
  }
  case 'AUTH_LOGIN_PENDING': {
    state.isLoading = true;
    state.isError = false;
    return { ...state };
  }
  case 'AUTH_LOGIN_FULFILLED': {
    const { data } = action.payload;
    state.isLoading = false;
    state.isError = false;
    state.token = data.result.token;
    window.localStorage.setItem('token', state.token);
    return { ...state };
  }
  case 'AUTH_LOGIN_REJECTED': {
    const { message } = action.payload.response.data;
    state.isLoading = false;
    state.isError = true;
    state.errorMsg = message;
    return { ...state };
  }
  case 'AUTH_FORGOT_PASSWORD_PENDING': {
    state.isLoading = true;
    return state;
  }
  case 'AUTH_FORGOT_PASSWORD_FULFILLED': {
    const { data } = action.payload;
    state.isLoading = false;
    state.isError = false;
    state.errorMsg = data.message;
    return { ...state };
  }
  case 'AUTH_FORGOT_PASSWORD_REJECTED': {
    const { message } = action.payload.response.data;
    state.isLoading = false;
    state.isError = true;
    state.errorMsg = message;
    return { ...state };
  }
  case 'AUTH_CHANGE_PASSWORD_PENDING': {
    state.isLoading = true;
    return state;
  }
  case 'AUTH_CHANGE_PASSWORD_FULFILLED': {
    const { data } = action.payload;
    state.isLoading = false;
    state.isError = false;
    state.errorMsg = data.message;
    return { ...state };
  }
  case 'AUTH_CHANGE_PASSWORD_REJECTED': {
    const { message } = action.payload.response.data;
    state.isLoading = false;
    state.isError = true;
    state.errorMsg = message;
    return { ...state };
  }
  case 'AUTH_USERDATA_PENDING': {
    state.isLoading = true;
    return { ...state };
  }
  case 'AUTH_USERDATA_FULFILLED': {
    const { data } = action.payload;
    state.isLoading = false;
    state.userData = data.result;
    return { ...state };
  }
  case 'UPDATE_PROFILE_PENDING': {
    state.isLoading = true;
    state.isError = false;
    state.isSuccess = false;
    return { ...state };
  }
  case 'UPDATE_PROFILE_FULFILLED': {
    const { data } = action.payload;
    state.isLoading = false;
    state.isError = false;
    state.userData = data.result;
    state.isSuccess = true;
    return { ...state };
  }
  case 'UPDATE_PROFILE_REJECTED': {
    const { data } = action.payload;
    state.isError = true;
    state.errorMsg = data.message;
    state.isSuccess = false;
    return { ...state };
  }
  case 'AUTH_LOGOUT': {
    state.token = null;
    state.userData = {};
    window.localStorage.removeItem('token');
    return { ...state };
  }
  default: {
    return { ...state };
  }
  }
};

export default auth;