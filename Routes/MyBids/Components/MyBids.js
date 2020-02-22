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
		const renderJobs = () => {
			return <Text style={{position:'absolute', fontSize:30, color:'black'}}>Working</Text>
		}
	}

	state = {
		driverLicense: this.props.userId
	}

	componentDidMount(){
		this.props.getDriverLocation(this.state.driverLicense);
		this.props.getUserData(this.state.driverLicense);
		this.props.getAllJobs();
  	}

  componentDidUpdate(prevProps, prevState){
	/**if(this.props.booking.status === 'confirmed'){
		Actions.trackDriver({type:'reset'});
	} */
  } 

	render(){
		return();
	}
}

export default MyBids;