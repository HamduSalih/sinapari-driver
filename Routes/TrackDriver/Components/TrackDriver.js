import React from "react";
import {View, Text} from "react-native";
import { Container }  from "native-base";
import { Actions } from 'react-native-router-flux';
import MapContainer from "./MapContainer";
import HeaderComponent from '../../../components/HeaderComponent';
import FooterComponent from '../../../components/FooterComponent';
import Fare from './Fare';
import Fab from './Fab';
import FindDriver from './FindDriver'

const sinaLogo = require("../../../assets/img/sinapari_blue.png");
const truckMarker = require("../../../assets/img/truck_marker.png");

class TrackDriver extends React.Component{
  componentDidMount(){
		this.props.getCurrentLocation();
  }

  componentDidUpdate(prevProps, prevState){
	if(this.props.booking.status === 'confirmed'){
		Actions.trackDriver({type:'reset'});
	}
  }
render(){
		const region = {
			latitude: 5.6604616,
      		longitude: -0.0077599,
		 	latitudeDelta: 0.045,
     		longitudeDelta: 0.045
		}

		const { status } = this.props.booking
    
		return(
			<Container>
				<HeaderComponent logo={sinaLogo} />
			</Container>

		);

	}
}

export default TrackDriver;