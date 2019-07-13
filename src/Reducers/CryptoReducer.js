/* eslint-disable prettier/prettier */
import { FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAILED } from '../utils/ActionTypes';

const initialState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null,
}

export default function(state = initialState, action) {

  switch (action.type) {
    case FETCHING_COIN_DATA:
      return {
        ...state,
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null,
      };

    case FETCHING_COIN_DATA_SUCCESS:
      // console.log('reducer', action.payload)
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null,
      };

    case FETCHING_COIN_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        hasError: true,
        errorMessage: action.err,
      };

    default:
      return state;
  }
}
