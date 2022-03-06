const dataState = {
  vehicleDetail: [],
  pageInfo: {},
  isLoading: false,
  error: false,
  errorMsg: ''
}

const vehicleDetail = (state = dataState, action) => {
  switch (action.type) {
    case 'GET_DETAIL_PENDING': {
      state.isLoading = true
      state.isError = false
      return { ...state }
    }
    case 'GET_DETAIL_FULFILLED': {
      const { data } = action.payload
      state.vehicleDetail = data.results
      state.pageInfo = data.pageInfo
      state.isLoading = false
      state.isError = false
      return { ...state }
    }
    case 'GET_DETAIL_REJECTED': {
      const { message } = action.payload.response.data
      state.isLoading = false
      state.isError = true
      state.errorMsg = message
      return { ...state }
    }
    default: {
      return { ...state }
    }
  }
}

export default vehicleDetail