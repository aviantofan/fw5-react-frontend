const detailState = {
  pageInfo: {},
  isLoading: false,
  isError: false,
};

const transactions = (state = detailState, action) => {
  switch (action.type) {
  case 'POST_TRANSACTION_PENDING': {
    state.isLoading = true;
    state.isError = false;
    return { ...state };
  }
  case 'POST_TRANSACTION_FULFILLED': {
    const { data } = action.payload;
    state.detail = data.result;
    state.pageInfo = data.info;
    state.isLoading = false;
    return { ...state };
  }
  case 'POST_TRANSACTION_REJECTED': {
    state.isLoading = false;
    state.isError = true;
    return { ...state };
  }
  default: {
    return { ...state };
  }
  }
};

export default transactions;