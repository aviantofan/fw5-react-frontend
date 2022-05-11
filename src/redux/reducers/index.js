import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth';
import vehicle from './vehicle';
import vehicleList from './vehicleList';
import vehiclePopular from './vehiclePopular';
import vehicleCategoryCar from './vehicleCategoryCar';
import vehicleCategoryMotorbike from './vehicleCategoryMotorbike';
import vehicleCategoryBike from './vehicleCategoryBike';
import vehicleDetail from './vehicleDetail';
import transactions from './transaction';
import history from './history';
import counter from './counter';

const persistAuth = {
  key: 'auth',
  storage,
};

const rootReducers = combineReducers({
  auth: persistReducer(persistAuth, auth),
  vehicle,
  vehicleList,
  vehiclePopular,
  vehicleCategoryCar,
  vehicleCategoryMotorbike,
  vehicleCategoryBike,
  vehicleDetail,
  transactions,
  history,
  counter
});

export default rootReducers;