/* eslint-disable prettier/prettier */
import { Platform } from 'react-native';
// React Native provides a module that detects the platform in which the app is running.
import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './Reducers';

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
  RootReducer,
  compose(
    middleware,
    devTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678,
    }),
  )
);

export default Store;
