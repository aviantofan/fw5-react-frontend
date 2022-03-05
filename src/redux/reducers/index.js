import { combineReducers } from "redux";
import auth from './auth'
import vehiclePopular from './vehiclePopular'
import vehicleCategoryCar from './vehicleCategoryCar'

const rootReducers = combineReducers({
  auth,
  vehiclePopular,
  vehicleCategoryCar
})

export default rootReducers