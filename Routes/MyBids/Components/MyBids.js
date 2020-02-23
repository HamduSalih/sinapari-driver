import React from "react";
import {View, Text, YellowBox} from "react-native";
import { Container }  from "native-base";
import { Actions } from 'react-native-router-flux';
import Constants from 'expo-constants';

const sinaLogo = require("../../../assets/img/sinapari_blue.png");
const truckMarker = require("../../../assets/img/truck_marker.png");

class MyBids extends React.Component{
	constructor(props){
		super(props);
		this.state.bids = this.props.bids
	}

	state = {
		driverLicense: this.props.userId
	}

	componentDidMount(){
		console.log(this.state.bids);
  	}

  componentDidUpdate(prevProps, prevState){
	/**if(this.props.booking.status === 'confirmed'){
		Actions.trackDriver({type:'reset'});
	} */
  } 

	render(){
		return(
			<View style={{flex: 1}}>

			</View>
		);
	}
}

export default MyBids;