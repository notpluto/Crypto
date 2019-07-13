// eslint-disable-next-line prettier/prettier
import { combineReducers } from 'redux';
// eslint-disable-next-line prettier/prettier
import CryptoReducer from './CryptoReducer';

export default combineReducers({
  crypto: CryptoReducer,
});
