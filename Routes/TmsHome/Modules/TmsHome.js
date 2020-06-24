import update from "react-addons-update";
import constants from "./actionConstants";
//helps you get latidue delta from main size of window
import { Dimensions, AsyncStorage } from "react-native"
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

//--------------------
//Constants
//--------------------
//THESE ARE ACTIONS CONSTANTS THEY SHOULD BE CALLED 
//IN actionConstants.js
const {
  GET_USER_DATA,
  GET_DRIVER_LOCATION,
  GET_DRIVER_JOBS
	  } = constants;


const {width, height} = Dimensions.get("window");
let ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.005;
const LONGITUDE_DELTA = 0.005; 
//---------------
//Actions
//---------------
export function getUserData(userId){
  return (dispatch)=>{
    var driverUserData = database.collection('tms_drivers').doc(userId.toString());
		driverUserData.get()
		.then((doc)=>{
			if(doc.exists){
				dispatch({
					type:GET_USER_DATA,
					payload: doc.data()	
				})
			}
		});
  }
}

export function getDriverLocation(userId){
	var dbLocations = database.collection('locations').doc(userId.toString());
	return(dispatch)=>{
		//navigator is used to return geolocation object to display users current location 
		navigator.geolocation.watchPosition(
		  (position)=>{
			dbLocations.update({
				lat: position.coords.latitude,
				long: position.coords.longitude
			})
			.then(()=>{
				dispatch({
					type:GET_DRIVER_LOCATION,
					payload:position
				});
			});
		  },
		  (error) => console.log(error.message),
		  {enableHighAccuracy: true, timeout:2000, maximumAge:10000}
		)
	  }
}

export function getDriversJob(driverId){
	var bidsCollection = database.collection('bids')
	
	return (dispatch)=>{
		bidsCollection.where('driverId', '==', driverId.toString())
		.where('status', '==', 'accepted')
		.get()
		.then((querySnapshot)=>{
			var myJobs = []
			querySnapshot.forEach((doc)=>{
				myJobs.push(doc.data())
			})
			dispatch({
				type: GET_DRIVER_JOBS,
				payload: myJobs
			})
		})
	}
}

//--------------------
//Action Handlers
//--------------------
function handleGetUserData(state, action){
  return update( state, {
    userData:{
      $set: action.payload
    }
  })
}

function handleGetDriverLocation(state, action){
  return update(state, {
    region:{
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

function handleGetDriversJobs(state, action){
	return update(state, {
		jobs:{
			$set: action.payload
		}
	})
}

const ACTION_HANDLERS = {
  GET_USER_DATA:handleGetUserData,
  GET_DRIVER_LOCATION:handleGetDriverLocation,
  GET_DRIVER_JOBS: handleGetDriversJobs
}
const initialState = {
  region:{},
};

export function TmsHomeReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}