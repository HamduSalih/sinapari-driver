import React from "react";
import { View } from "native-base";
import MapView from "react-native-maps";
import styles from "./MapContainerStyles.js";
import MapViewDirections from 'react-native-maps-directions';
import Constants from 'expo-constants'

export const MapContainer = ({
		region,
		jobDetails
	})=>{
		

		const origin = {
			latitude: jobDetails.pickUpAddress.lat,
			longitude: jobDetails.pickUpAddress.long,
			latitudeDelta: 0.9,
		 	longitudeDelta: 0.9};
		const destination = {
			latitude: jobDetails.dropOffAddress.lat,
			longitude: jobDetails.dropOffAddress.long,
			latitudeDelta: 0.9,
			longitudeDelta: 0.9};
			 
		const pickUpOrigin = region
		const pickUpDestination = origin
		const GOOGLE_MAPS_APIKEY = 'AIzaSyCspx_yMJwX4bTjLXTUHebo9TwYxTaLa6E';


		return(
			<View>
				<View 
					style={{
						height: Constants.statusBarHeight
					}}
				/>
				<MapView
					showsUserLocation={true}
					followsUserLocation={true}
					showsMyLocationButton={true}
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
			</View>
	)
}

export default MapContainer;