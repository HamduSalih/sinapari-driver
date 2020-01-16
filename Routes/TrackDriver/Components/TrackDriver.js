import React from "react";
import {View, Text} from "react-native";
import { Container }  from "native-base";
import HeaderComponent from '../../../components/HeaderComponent';
import MapTrack from './MapTrack';
import DriverFound from './DriverFound';

const sinaLogo = require("../../../assets/img/sinapari_blue.png");
const truckMarker = require("../../../assets/img/truck_marker.png");

class TrackDriver extends React.Component{
  componentDidMount(){
		this.props.getCurrentLocation();
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
                {   this.props.region.latitude &&
                    <MapTrack 
                        region={this.props.latitude}
                        selectedAddress={this.props.selectedAddress}
                    />
                }
                
				{
					this.props.showDriverFound && 
					<DriverFound 
						driverInfo={this.props.driverInfo}
					/>
				}
			</Container>

		);

	}
}

export default TrackDriver;