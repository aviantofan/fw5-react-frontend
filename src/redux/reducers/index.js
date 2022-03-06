import { combineReducers } from "redux";
import auth from './auth'
import vehiclePopular from './vehiclePopular'
import vehicleCategoryCar from './vehicleCategoryCar'
import vehicleCategoryMotorbike from "./vehicleCategoryMotorbike";
import vehicleCategoryBike from "./vehicleCategoryBike";
import vehicleDetail from "./vehicleDetail";
import counter from "./counter";

const rootReducers = combineReducers({
  auth,
  vehiclePopular,
  vehicleCategoryCar,
  vehicleCategoryMotorbike,
  vehicleCategoryBike,
  vehicleDetail,
  counter
})

export default rootReducers