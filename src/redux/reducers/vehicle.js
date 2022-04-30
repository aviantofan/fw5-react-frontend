const initialState={
  vehicle:{},
  pageInfo:{},
  num:0,
  isLoading: false,
  isError: false,
  errorMsg: '',
  isSuccess: false
};

const vehicle = (state=initialState, action)=>{
  switch(action.type){
  case 'VEHICLE_INSERT_PENDING':{
    state.isLoading = true;
    state.isError = false;
    return {...state};
  }
  case 'VEHICLE_INSERT_FULLFILLED':{
    const {data} = action.payload;
    state.isLoading = false;
    state.isError = false;
    state.num = 0;
    state.errorMsg = data.message;
    return{...state};
  }
  case 'VEHICLE_INSERT_REJECTED':{
    const {message} = action.payload.response.data;
    state.isLoading = false;
    state.isError = true;
    state.errorMsg = message;
    return {...state};
  }
  default:{
    return{...state};
  }
  }
};

export default vehicle;