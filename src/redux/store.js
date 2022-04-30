import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import rootReducers from './reducers';
import {persistStore} from 'redux-persist';

export default () => {
  const store = createStore(rootReducers, applyMiddleware(promise, logger));

  const persistor = persistStore(store);
  return {store, persistor};
};

// const store = createStore(
//   rootReducers,
//   applyMiddleware(
//     promise,
//     logger
//   )
// );

// export default store;