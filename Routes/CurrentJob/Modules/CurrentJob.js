import update from "react-addons-update";
import constants from "./actionConstants";
//helps you get latidue delta from main size of window
import { Dimensions, AsyncStorage } from "react-native"
import RNGooglePlaces from "react-native-google-places";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import request from '../../../util/Request';
import calculateFare from '../../../util/FareCalculator';
import * as Network from 'expo-network';
import Constants from "expo-constants";
import * as firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBICeaakAkGPlVOVjObj7BDaoZvmgibDA8",
    authDomain: "sinapari-6dbbd.firebaseapp.com",
    databaseURL: "https://sinapari-6dbbd.firebaseio.com",
    projectId: "sinapari-6dbbd",
    storageBucket: "sinapari-6dbbd.appspot.com",
    messagingSenderId: "501482455468",
    appId: "1:501482455468:web:4a21086028e2e8237fba09",
    measurementId: "G-Y9TJXZG88L"
  };
//firebase.analytics();

const database = firebase.firestore();

const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;

//--------------------
//Constants
//--------------------
//THESE ARE ACTIONS CONSTANTS THEY SHOULD BE CALLED 
//IN actionConstants.js
const { 
  LIVE_LOCATION,
  DRIVER_BIDS
	  } = constants;


const {width, height} = Dimensions.get("window");
let ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.035;
const LONGITUDE_DELTA = 0.035; 
//---------------
//Actions
//---------------
export function getDriverLocation(bid){
	var dbLocations = database.collection('liveJobs');
	return(dispatch)=>{
		//navigator is used to return geolocation object to display users current location 
		navigator.geolocation.watchPosition(
		  (position)=>{
			dbLocations.add({
        driverId: bid.driverId,
        jobId: bid.jobId,
				lat: position.coords.latitude,
				long: position.coords.longitude
			})
			.then(()=>{
				dispatch({
					type:LIVE_LOCATION,
					payload:position
				});
			});
		  },
		  (error) => console.log(error.message),
		  {enableHighAccuracy: true, timeout:2000, maximumAge:10000}
		)
	  }
}


export function updateBidTripStatus(bid){
	var collections = database.collection('bids');
	var docId = '';
	var allBids = [];

	return (dispatch) => {
		collections.where('driverId', '==', bid.driverId)
		.where('bidId', '==', bid.bidId)
		.where('status', '==', 'accepted')
		.get()
		.then((querySnapshot)=>{
			querySnapshot.forEach((doc)=>{
				docId = doc.id
			})
		})
		.then(()=>{
			collections.doc(docId)
			.update({
			tripStatus: 'live'
			})
		})

		collections.where('driverId', '==', bid.driverId)
		.get()
		.then((querySnapshot)=>{
			querySnapshot.forEach((doc)=>{
				allBids.push(doc.data());
			})
		})
		.then(()=>{
			dispatch({
				type: DRIVER_BIDS,
				payload: allBids
			})
		})
	}
}


//--------------------
//Action Handlers
//--------------------
function handleLiveJob(state, action){
	return update(state, {
		jobRegion:{
			latitude:{
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

function handleGetDriverBids(state, action){
	return update(state, {
		allBids:{
			$set: action.payload
		}
	})
}


const ACTION_HANDLERS = {
  LIVE_LOCATION:handleLiveJob,
  DRIVER_BIDS: handleGetDriverBids
}

const initialState = {
  
};

export function CurrentJobReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}