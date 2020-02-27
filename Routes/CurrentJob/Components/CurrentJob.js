import React from "react";
import {View, Text, YellowBox} from "react-native";
import { Container }  from "native-base";
import { Actions } from 'react-native-router-flux';
import MapContainer from "./MapContainer";
import Constants from 'expo-constants';
import RenderJobs from './RenderJobs';
import BottomTab from '../../../Navigtions/BottomTab'

const sinaLogo = require("../../../assets/img/sinapari_blue.png");
const truckMarker = require("../../../assets/img/truck_marker.png");

class CurrentJob extends React.Component{
	constructor(props){
		super(props);
		
	}

	state = {
		driverLicense: this.props.userId,
	}

	componentDidMount(){
		
  	}

  componentDidUpdate(prevProps, prevState){
	/**if(this.props.booking.status === 'confirmed'){
		Actions.trackDriver({type:'reset'});
	} */
  } 

render(){
	const region = this.props.region

		return(
			<View style={{flex:1}}>
				<MapContainer 
					region={region}							
				/>
			</View>
		);

	}
}

export default CurrentJob;