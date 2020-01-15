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

class Home extends React.Component{
  componentDidMount(){
	var rx = this;
		this.props.getCurrentLocation();
	setTimeout(function(){
		rx.props.getNearByDrivers();
	}, 10000);
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
				{ (status !== "pending") &&
					<View style={{flex:1}}>
						<HeaderComponent logo={sinaLogo} />
						{this.props.region.latitude &&
						<MapContainer 
							region={this.props.region}
							getInputData={this.props.getInputData}
							getInputType={this.props.getInputType}
							getAddressPredictions={this.props.getAddressPredictions}
							resultTypes={this.props.resultTypes}
							getSelectedAddress={this.props.getSelectedAddress}
							truckMarker={truckMarker}
							nearByDrivers={this.props.nearByDrivers}
							selectedAddress={this.props.selectedAddress}
							/>
						}

						<Fab onPressAction={()=>this.props.bookTruck()}/>

						{
							this.props.fare &&
							<Fare fare={this.props.fare} />
						}	
						<FooterComponent />	
					</View>
					||
					<FindDriver selectedAddress={this.props.selectedAddress} />		
				}
			</Container>

		);

	}
}

export default Home;