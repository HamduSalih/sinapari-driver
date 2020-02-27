import React from "react";
import { View } from "native-base";
import MapView from "react-native-maps";
import styles from "./MapContainerStyles.js";
import MapViewDirections from 'react-native-maps-directions';

export const MapContainer = ({
		region,
	})=>{
		

		const origin = {
			latitude: 5.6604616,
			longitude: -0.0077599,
			latitudeDelta: 0.9,
		 	longitudeDelta: 0.9};
		const destination = {
			latitude: 5.6060955, 
			longitude: -0.1681235,
			latitudeDelta: 0.045,
			longitudeDelta: 0.045};
			 
		const pickUpOrigin = region
		const pickUpDestination = origin
		const GOOGLE_MAPS_APIKEY = 'AIzaSyCspx_yMJwX4bTjLXTUHebo9TwYxTaLa6E';


		return(
			<MapView
				showsUserLocation
				followsUserLocation
				provider={MapView.PROVIDER_GOOGLE}
				style={styles.map}
				region={region}
			>
				<MapViewDirections 
					origin={pickUpOrigin}
					destination={pickUpDestination}
					apikey={GOOGLE_MAPS_APIKEY}
					strokeWidth={3}
					strokeColor={'green'}
				/>
				<MapViewDirections 
					origin={origin}
					destination={destination}
					apikey={GOOGLE_MAPS_APIKEY}
					strokeWidth={3}
					strokeColor={'blue'}
				/>
			</MapView>
	)
}

export default MapContainer;