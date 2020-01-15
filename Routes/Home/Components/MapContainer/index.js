import React from "react";
import { View } from "native-base";
import MapView from "react-native-maps";
import SearchBox from '../SearchBox/index.js';
import styles from "./MapContainerStyles.js";
import SearchResults from '../SearchResults/index';
import GooglePlacesInput from '../GooglePlacesInput';

export const MapContainer = ({
		region,
		getInputData,
		getInputType,
		getAddressPredictions,
		resultTypes,
		getSelectedAddress,
		selectedAddress,
		truckMarker,
		nearByDrivers
	})=>{
			
		const { LoadAddress, DropAddress } = selectedAddress || {};

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
				

				{
					nearByDrivers && nearByDrivers.map((marker, index)=>
						<MapView.Marker
							key={index}
							coordinate={{latitude:marker.coordinate.coordinates[1], longitude:marker.coordinate.coordinates[0]}}
							image={truckMarker}
							style={{
								width: 32,
								height:32,
							  }}
						/>
					)
				}					

			</MapView>
			<GooglePlacesInput 
			getSelectedAddress={getSelectedAddress}
			getInputType={getInputType}/>
		</View>
	)
}

export default MapContainer;