import React from "react";
import {View, Text, YellowBox} from "react-native";
import { Container }  from "native-base";
import { Actions } from 'react-native-router-flux';
import BottomTab from '../../../Navigtions/TmsBottomTab';

const sinaLogo = require("../../../assets/img/sinapari_blue.png");
const truckMarker = require("../../../assets/img/truck_marker.png");

class TmsCurrentJob extends React.Component{
	constructor(props){
		super(props);
		
	}

	state = {
		
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
				<Text>Hello World</Text>
			</View>
		);

	}
}

export default TmsCurrentJob;