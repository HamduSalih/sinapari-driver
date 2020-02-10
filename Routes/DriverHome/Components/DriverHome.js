import React from "react";
import {View, Text, YellowBox} from "react-native";
import { Container }  from "native-base";
import { Actions } from 'react-native-router-flux';
import MapContainer from "./MapContainer";
import Constants from 'expo-constants';
import RenderJobs from './RenderJobs';

const sinaLogo = require("../../../assets/img/sinapari_blue.png");
const truckMarker = require("../../../assets/img/truck_marker.png");

class DriverHome extends React.Component{
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
					{this.props.region.latitude &&
						<MapContainer 
							region={this.props.region}
							allJobs={this.props.allJobs}
							userJobs={this.props.userJobs}							
						/>
					}
					{
						this.props.allJobs && this.props.userJobs && this.props.userJobs.status == 'inactive' && 
						<RenderJobs 
							style={{flex:1}}
							allJobs={this.props.allJobs}
						/>
					}	
					</View>
			</Container>
		);

	}
}

export default DriverHome;