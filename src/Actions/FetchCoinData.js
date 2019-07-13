import axios from 'axios';

/* eslint-disable prettier/prettier */
import { apiBaseURL } from './../utils/Constants';
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAILED,
} from './../utils/ActionTypes';

export default function FetchCoinData() {
  return dispatch => {
    dispatch({ type: FETCHING_COIN_DATA });
    return fetch(`${apiBaseURL}/v1/cryptocurrency/listings/latest?start=1&limit=10`, {
      headers: {
        'X-CMC_PRO_API_KEY': '422145a6-4563-481f-b8d6-a646742a0a98',
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(res => res.json()).then(d => {
        // console.log(res, 'c3', 'Printing the response here');
          dispatch({
            type: FETCHING_COIN_DATA_SUCCESS,
            payload: d.data,
          });
        }
      )
      .catch(
        err => {
        console.log(err, 'error');
          dispatch({
            type: FETCHING_COIN_DATA_FAILED, 
            payload: err.data,
          });
        }
      );
  };
}




