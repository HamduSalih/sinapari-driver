import React from "react";
import {View, Text, YellowBox} from "react-native";
import { Container }  from "native-base";
import { Actions } from 'react-native-router-flux';
import MapContainer from "./MapContainer";
import Constants from 'expo-constants';
import ScrollContainer from './ScrollContainer';
import BottomTab from '../../../Navigtions/BottomTabContainer';

const sinaLogo = require("../../../assets/img/sinapari_blue.png");
const truckMarker = require("../../../assets/img/truck_marker.png");

class DriverJobDetails extends React.Component{
	constructor(props){
		super(props);
		this.state.jobDetails = this.props.jobDetails
	}

	state = {
		driverLicense: this.props.userId
	}

	componentDidMount(){
		console.log(this.props.jobDetails);
  	}

  componentDidUpdate(prevProps, prevState){
	/**if(this.props.booking.status === 'confirmed'){
		Actions.trackDriver({type:'reset'});
	} */
  } 

render(){
	const initialRegion = {
		latitude: 5.6604616,
		  longitude: -0.0077599,
		 latitudeDelta: 0.045,
		 longitudeDelta: 0.045
	}
		return(
			<View style={{flex:1}}>
				<MapContainer 
					region={this.props.region}
					jobDetails={this.state.jobDetails}							
				/>
				<ScrollContainer 
					jobDetails={this.state.jobDetails}
					userData={this.props.userData}
				/>
				<BottomTab />
			</View>
		);

	}
}

export default DriverJobDetails;