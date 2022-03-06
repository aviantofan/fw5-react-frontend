const initialState = {
  num: 1
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTER_INCREMENT': {
      state.num = state.num + 1
      return { ...state }
    }
    case 'COUNTER_DECREMENT': {
      if (state.num > 0) {
        state.num = state.num - 1
        return { ...state }
      } break
    }
    default: {
      return { ...state }
    }
  }
}

export default counter