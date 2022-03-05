import { combineReducers } from "redux";
import auth from './auth'
import vehiclePopular from './vehiclePopular'
import vehicleCategoryCar from './vehicleCategoryCar'
import vehicleCategoryMotorbike from "./vehicleCategoryMotorbike";
import vehicleCategoryBike from "./vehicleCategoryBike";

const rootReducers = combineReducers({
  auth,
  vehiclePopular,
  vehicleCategoryCar,
  vehicleCategoryMotorbike,
  vehicleCategoryBike
})

export default rootReducers