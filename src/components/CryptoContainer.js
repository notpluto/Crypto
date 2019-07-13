/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {

  componentDidMount() {
    console.log('inside cdm')
    this.props.dispatch(FetchCoinData());
    // console.log(this.props.crypto, 'data');
  }

  render() {
  // console.log(this.props.crypto, 'inside render')
  const {crypto} = this.props;
  if(crypto.isFetching){
    return (
      <View>
        <Spinner visible={crypto.isFetching} textContent={"Loading..."} textStyle={{color: "#253145"}} animation="fade" />
      </View>
      )
  }

    return (
      <View>
        <CoinCard />
      </View>
    );
  }
}

function mapStateToProps(state){
  console.log(state.crypto.data, 'inside map')
  return {
    crypto: state.crypto,
  };
}

export default connect(mapStateToProps)(CryptoContainer);
