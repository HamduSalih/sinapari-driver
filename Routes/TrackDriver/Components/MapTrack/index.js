import React from "react";
import { View } from "native-base";
import MapView from "react-native-maps";
import SearchBox from '../SearchBox/index.js';
import styles from "./MapTrackStyles";
import SearchResults from '../SearchResults/index';
import GooglePlacesInput from '../GooglePlacesInput';

export const MapContainer = ({
		region,
		driverLocation,
		showCarMaker
	})=>{
			
		const { LoadAddress, DropAddress } = selectedAddress || {};
		const { showCarMarker } = 
	return(
		<View style={styles.container}>
			<MapView
				showsUserLocation
				followsUserLocation
				provider={MapView.PROVIDER_GOOGLE}
				style={styles.map}
				region={region}
			>

				{	LoadAddress &&
					<MapView.Marker
						coordinate={{latitude:LoadAddress.latitude, longitude:LoadAddress.longitude}}
						pinColor="blue"
					/>
				}
				{	DropAddress &&
					<MapView.Marker
						coordinate={{latitude:DropAddress.latitude, longitude:DropAddress.longitude}}
						pinColor="blue"
					/>
				}	
				{	showCarMarker &&
					<MapView.Marker
						coordinate={{latitude:driverLocation.coordinate.coordinates[1], longitude:driverLocation.coordinate.coordinates[0]}}
						pinColor="blue"
					/>
				}					

			</MapView>
		</View>
	)
}

export default MapContainer;