import React from "react";
import {View, Text} from "react-native";
import { Container }  from "native-base";
import { Actions } from 'react-native-router-flux';
import MapContainer from "./MapContainer";
import Constants from 'expo-constants';

const sinaLogo = require("../../../assets/img/sinapari_blue.png");
const truckMarker = require("../../../assets/img/truck_marker.png");

class DriverHome extends React.Component{
	constructor(props){
		super(props);
	}

	state = {
		driverLicense: this.props.userId
	}

	componentDidMount(){
		this.props.getDriverLocation(this.state.driverLicense);
		this.props.getUserData(this.state.driverLicense);
  	}

  componentDidUpdate(prevProps, prevState){
	/**if(this.props.booking.status === 'confirmed'){
		Actions.trackDriver({type:'reset'});
	} */
  }
render(){
	const region = {
		latitude: 5.6604616,
		  longitude: -0.0077599,
		 latitudeDelta: 0.045,
		 longitudeDelta: 0.045
	}
		return(
			<Container>
				<View style={{height: Constants.statusBarHeight,}} />
				<View style={{flex:1}}>
					<MapContainer 
						region={region}							
					/>
				</View>
			</Container>
		);

	}
}

export default DriverHome;