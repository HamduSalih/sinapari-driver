import React from "react";
import { View } from "react-native";
import Constants from 'expo-constants'
import MapView from "react-native-maps";
import styles from "./MapStyles.js";
import MapViewDirections from 'react-native-maps-directions';

const markerImage = require('../../../../assets/img/truck_marker.png')

export const MapContainer = ({
	driverLocations,
	region
	})=>{
		
		const GOOGLE_MAPS_APIKEY = 'AIzaSyCspx_yMJwX4bTjLXTUHebo9TwYxTaLa6E';
        /**const region={
            latitude: 8.2790473,
            longitude: -1.1188077,
            latitudeDelta: 4,
            longitudeDelta: 4
		 }*/
		
		const testCoords = driverLocations

		return(
			<View style={{flex:1, paddingTop: Constants.statusBarHeight}}>
				<MapView
					provider={MapView.PROVIDER_GOOGLE}
					style={styles.map}
					region={region}
					showsTraffic={true}
					showsMyLocationButton={true}
					showsUserLocation={true}
					followsUserLocation
				/>
			</View>
	)
}

export default MapContainer;