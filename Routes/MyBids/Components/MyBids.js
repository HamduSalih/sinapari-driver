import React from "react";
import {View, Text, YellowBox} from "react-native";
import { Container }  from "native-base";
import { Actions } from 'react-native-router-flux';
import Constants from 'expo-constants';
import BottomTab from '../../../Navigtions/BottomTab'
import RenderBids from './RenderBids'
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
			<Container>
				<View style={{flex:1}}>
					{
						this.props.allBids &&
						<RenderBids 
							allBids = {this.props.allBids}
						/>
					}
					<BottomTab />
				</View>
			</Container>
		);
	}
}

export default MyBids;