import React from "react";
import {View, Text, YellowBox} from "react-native";
import { Container }  from "native-base";
import { Actions } from 'react-native-router-flux';
import BottomTab from '../../../Navigtions/TmsBottomTab';
import MapContainer from "./MapContainer";
import ScrollContainer from './ScrollContainer'

const sinaLogo = require("../../../assets/img/sinapari_blue.png");
const truckMarker = require("../../../assets/img/truck_marker.png");

class TmsCurrentJob extends React.Component{
	constructor(props){
		super(props);
		
	}

	state = {
		
	}

	componentDidMount(){
		console.log(this.props.jobs)
  	}

  componentDidUpdate(prevProps, prevState){
	/**if(this.props.booking.status === 'confirmed'){
		Actions.trackDriver({type:'reset'});
	} */
  } 

render(){
	const region = this.props.region

		return(
			<Container>
				<View style={{flex:1}}>
				{
					!this.props.region.latitude &&
					<View style={{
						flex:1, justifyContent:'center', alignItems:'center'
					}}>
						<Text style={{
							width:'100%',
							textAlign:'center',
							fontSize:14,
							lineHeight: 16
						}}>Loading job data...</Text>
					</View>
					||
					<View style={{flex:1}}>
						<MapContainer 
						jobDetails={(this.props.jobs)[0]}
						region={this.props.region}/>
						<ScrollContainer
							jobDetails={(this.props.jobs)[0]}
							updateBidTripStatus={this.props.updateBidTripStatus}/>
					</View>
				}
				</View>
			</Container>
		);

	}
}

export default TmsCurrentJob;