import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { images } from '../utils/CoinIcons';

const styles = StyleSheet.create({
	// scrollView: {
 //    backgroundColor: "#fff",
 //  },
  container: {
    display: "flex",
    marginBottom: 20,
    borderBottomColor: "#0f7c7e",
    borderBottomWidth: 3,
    padding: 20
  },
  upperRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: "bold",        
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20
  },
  seperator: {
    marginTop: 10,
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: 10,
    fontWeight: "bold",        
  },
  image: {
    width: 35,
    height: 35,
  },
  dollarSymbol: {
    fontWeight: "bold",
  },
  statisticsContainer: {
    display: "flex",
    borderTopColor: "#FAFAFA",
    borderTopWidth: 2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  percentChangePlus: {
    color: "#00BFA5",
    fontWeight: "bold",
    marginLeft: 5
  },
  percentChangeMinus: {
    color: "#DD2C00",
    fontWeight: "bold",
    marginLeft: 5
  }
})

const { container, image, dollarSymbol, upperRow, coinSymbol, coinName,coinPrice, statisticsContainer, seperator, percentChangePlus, percentChangeMinus} = styles;

const CoinCard = (props) => {
  // console.log(props.crypto.data, 'inside render of coincard')
	return (
		<View>
			<ScrollView contentInsetAdjustmentBehavior="automatic">
				{props.crypto.data ? props.crypto.data.map((el, i) => 
				<View style={container} key={i}>
					<View style={upperRow} >
					<Image style={image} source={{ uri: images[el.symbol] }} />
						<Text style={coinSymbol}>{el.symbol}</Text>
						<Text style={seperator}>|</Text>
						<Text style={coinName}>{el.name}</Text>
						<Text style={coinPrice}>{el.quote.USD.price}
							<Text style={dollarSymbol}>$ </Text>
						</Text>
					</View>

					<View style={statisticsContainer}>
					  <Text>24h:
					    <Text style={el.quote.USD.percent_change_24h < 0 ? el.quote.USD.percentChangeMinus : el.quote.USD.percentChangePlus }> {el.quote.USD.percent_change_24h} % </Text>
					  </Text>
					  <Text>7d:
					    <Text style={el.quote.USD.percent_change_7d < 0 ? el.quote.USD.percentChangeMinus : el.quote.USD.percentChangePlus }> {el.quote.USD.percent_change_7d} % </Text>
					  </Text>
					</View>
				</View>
					): null}
			</ScrollView>
		</View>
	)
}

function mapStateToProps(state){
  console.log(state.crypto.data, 'inside map of coincard')
  return {
    crypto: state.crypto,
  };
}

export default connect(mapStateToProps)(CoinCard);