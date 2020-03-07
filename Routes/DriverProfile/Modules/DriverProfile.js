import update from "react-addons-update";
import constants from "./actionConstants";
//helps you get latidue delta from main size of window
import { Dimensions } from "react-native"
import RNGooglePlaces from "react-native-google-places";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import request from '../../../util/Request';
import * as firebase from 'firebase';
import '@firebase/firestore';
import Constants from "expo-constants";

const { manifest } = Constants;
const database = firebase.firestore();
const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;

//--------------------
//Constants
//--------------------
//THESE ARE ACTIONS CONSTANTS THEY SHOULD BE CALLED 
//IN actionConstants.js
const { 
	UPDATE_PROFILE
	  } = constants;


const {width, height} = Dimensions.get("window");
let ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.035;
const LONGITUDE_DELTA = 0.035; 
//---------------
//Actions
//---------------
export function updateProfile(data){
	var collections = database.collection('drivers').doc(data.driverId.toString());
	return(dispatch)=>{
		collections.update({
			phone_number: data.phone_number,
			affiliate: data.affiliation,
			trailer_length: data.trailer_length,
			trailer_type: data.trailer_type,
			truck_number: data.truck_number
		})
		.then(()=>{
			collections.get()
			.then((doc)=>{
				if(doc.exists){
					dispatch({
						type: UPDATE_PROFILE,
						payload: doc.data()	
					})
				}
			})
		})
	}
}

//--------------------
//Action Handlers
//--------------------
function handleUpdateProfile(state, action){
	return update(state, {
		userData:{
			$set: action.payload
		}
	})
}

const ACTION_HANDLERS = {
  UPDATE_PROFILE:handleUpdateProfile
}
const initialState = {
  
};

export function DriverProfileReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}