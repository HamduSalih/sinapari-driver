import React from "react";
import {View, Text} from "react-native";
import { Container }  from "native-base";
import HeaderComponent from '../../../components/HeaderComponent';
import MapTrack from './MapTrack';
import DriverFooterProfile from './DriverFooterProfile';
import DriverOnTheWayFooter from './DriverOnTheWayFooter';

const sinaLogo = require("../../../assets/img/sinapari_blue.png");
const truckMarker = require("../../../assets/img/truck_marker.png");

class TrackDriver extends React.Component{
  componentDidMount(){
		this.props.getCurrentLocation();
		this.props.getDriverInfo();
  }

	componentWillReceiveProps(nextProps){
		if(this.props.driverLocation && nextProps.driverLocation !== this.props.driverLocation){
			this.props.getDistanceFromDriver();
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
				<HeaderComponent />
                {   this.props.region &&
                    <MapTrack 
                        region={this.props.region}
						selectedAddress={this.props.selectedAddress}
						driverLocation={this.props.driverLocation}
						showCarMaker={this.props.showCarMaker}
						truckMarker={truckMarker}
                    />
                }

				<DriverOnTheWayFooter 
					driverInfo={this.props.driverInfo}
				/>
                
				<DriverFooterProfile 
					driverInfo={this.props.driverInfo}
				/>

				{
					this.props.showDriverFound && 
					<DriverFound 
						driverInfo={this.props.driverInfo}
						getDriverLocation={this.props.getDriverLocation}
					/>
				}
			</Container>

		);

	}
}

export default TrackDriver;