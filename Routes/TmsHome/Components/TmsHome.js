import React from "react";
import {View, StyleSheet, ActivityIndicator, Dimensions, Text} from "react-native";
import { Container }  from "native-base";
import { Actions } from 'react-native-router-flux';
import Constants from 'expo-constants';
import TmsBottomTab from '../../../Navigtions/TmsBottomTab'
import * as firebase from 'firebase';
import '@firebase/firestore';
import MapContainer from './MapContainer'

const database = firebase.firestore();

const {width, height} = Dimensions.get("window");
const sinaLogo = require("../../../assets/img/sinapari_blue.png");
const truckMarker = require("../../../assets/img/truck_marker.png");

class Home extends React.Component{
	constructor(props){
		super(props);
		this.state.userId = this.props.userId
	}

	state={

	}

	componentDidMount(){
		console.log(this.state.userId)
		if( Object.entries(this.props.userData) < 1){
			this.props.getUserData(this.state.userId)
			if(Object.entries(this.props.region) < 1){
				this.props.getDriverLocation(this.state.userId)
			}
			this.props.getDriversJob(this.state.userId)
		}
	}

	async componentWillReceiveProps(nextProps){
		
	}

render(){
		return(
			<Container>
				<View style={{flex:1}}>
                    {
						this.props.region.latitude &&
						<MapContainer 
							region={this.props.region} />
					}
                </View>
				<TmsBottomTab />
			</Container>
		);

	}
}

export default Home;

const styles = StyleSheet.create({
	activityIndicator:{
		marginTop: (40/100)*(height),
	},
	status:{
		height: Constants.statusBarHeight
	}
})