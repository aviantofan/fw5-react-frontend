import { combineReducers } from 'redux';
import auth from './auth';
import vehicle from './vehicle';
import vehiclePopular from './vehiclePopular';
import vehicleCategoryCar from './vehicleCategoryCar';
import vehicleCategoryMotorbike from './vehicleCategoryMotorbike';
import vehicleCategoryBike from './vehicleCategoryBike';
import vehicleDetail from './vehicleDetail';
import transactions from './transaction';
import counter from './counter';

const rootReducers = combineReducers({
  auth,
  vehicle,
  vehiclePopular,
  vehicleCategoryCar,
  vehicleCategoryMotorbike,
  vehicleCategoryBike,
  vehicleDetail,
  transactions,
  counter
});

export default rootReducers;