import React from "react";
import { View } from "native-base";
import MapView from "react-native-maps";
import styles from "./MapContainerStyles.js";

import RenderJobs from '../RenderJobs';

export const MapContainer = ({
		region,
		allJobs,
		userJobs
	})=>{
			
		return(
		<View style={styles.container}>
			<MapView
				showsUserLocation
				followsUserLocation
				provider={MapView.PROVIDER_GOOGLE}
				style={styles.map}
				region={region}
			/>		
		</View>
	)
}

export default MapContainer;