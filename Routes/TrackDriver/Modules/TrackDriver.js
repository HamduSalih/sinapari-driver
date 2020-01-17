import update from "react-addons-update";
import constants from "./actionConstants";
//helps you get latidue delta from main size of window
import { Dimensions } from "react-native"
import RNGooglePlaces from "react-native-google-places";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import request from '../../../util/Request';
import calculateFare from '../../../util/FareCalculator';
import * as Network from 'expo-network';
import Constants from "expo-constants";

const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;

//--------------------
//Constants
//--------------------
//THESE ARE ACTIONS CONSTANTS THEY SHOULD BE CALLED 
//IN actionConstants.js
const { 
  GET_CURRENT_LOCATION,
  GET_DRIVER_INFORMATION
	  } = constants;


const {width, height} = Dimensions.get("window");
let ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.035;
const LONGITUDE_DELTA = 0.035; 
//---------------
//Actions
//---------------
export function getCurrentLocation(){
  return(dispatch)=>{
    //navigator is used to return geolocation object to display users current location 
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        dispatch({
          type:GET_CURRENT_LOCATION,
          payload:position
        });
      },
      (error) => console.log(error.message),
      {enableHighAccuracy: true, timeout:2000, maximumAge:10000}
    )
  }
}

//Get driver's info

export function getDriverInfo(){
	return (dispatch, store)=>{
		let id = store().home.booking.driverId;
		request.get(uri + '/api/driver/' + id)
		.finish((error, res)=>{
			dispatch({
				type:GET_DRIVER_INFORMATION,
				payload:res.body
			});
		});
	}
}


//--------------------
//Action Handlers
//--------------------
function handleGetCurrentLocation(state, action){
  return update(state, {
    region:{
      latitude: {
        $set: action.payload.coords.latitude
      },
      longitude:{
        $set: action.payload.coords.longitude
      },
      latitudeDelta:{
        $set:LATITUDE_DELTA
      },
      longitudeDelta:{
        $set:LONGITUDE_DELTA
      }
    }
  })
}

function handleGetDriverInfo(state, action){
	return update(state, {
		driverInfo:{
			$set:action.payload
		}
	});
}

function handleUpdateDriverLocation(state, action){
  return update(state, {
		driverLocation:{
			$set:action.payload
		}
	});
}

const ACTION_HANDLERS = {
  GET_CURRENT_LOCATION:handleGetCurrentLocation,
  GET_DRIVER_INFORMATION:handleGetDriverInfo,
  UPDATE_DRIVER_LOCATION:handleUpdateDriverLocation
}
const initialState = {
  region:{}
};

export function TrackDriverReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}