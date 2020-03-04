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
	GET_DRIVER_LOCATION,
	GET_USER_DATA,
	GET_USER_ACCOUNTS,
	GET_USER_JOBS,
	GET_ALL_JOBS,
	DRIVER_BIDS,
	UPDATE_BIDS
	  } = constants;


const {width, height} = Dimensions.get("window");
let ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.035;
const LONGITUDE_DELTA = 0.035; 
//---------------
//Actions
//---------------
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

export function getUserData(userId){	
	return (dispatch)=>{
		var driverUserData = database.collection('drivers').doc(userId.toString());
		driverUserData.get()
		.then((doc)=>{
			if(doc.exists){
				dispatch({
					type:GET_USER_DATA,
					payload: doc.data()	
				})
			}
		});

		var driverAccountsData = database.collection('accounts').doc(userId.toString());
		var driverJobsData = database.collection('jobsInfo').doc(userId.toString());

		driverAccountsData.get()
		.then((doc)=>{
			if(doc.exists){
				dispatch({
					type:GET_USER_ACCOUNTS,
					payload: doc.data()	
				})
			}
		});

		driverJobsData.get()
		.then((doc)=>{
			if(doc.exists){
				dispatch({
					type:GET_USER_JOBS,
					payload: doc.data()	
				})
			}
		});
	}	
}

export function getAllJobs(){
	var jobsCollection = database.collection('jobs');
	var jobsObject = {};
	return(dispatch) => {
		jobsCollection.get()
		.then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				// doc.data() is never undefined for query doc snapshots
				var docId = doc.id;
				jobsObject[docId] = doc.data();
			});
		})
		.then(()=>{
			dispatch({
				type:GET_ALL_JOBS,
				payload: jobsObject	
			})
		})
	}
}

export function getDriverBids(userId){
	var bidsCollection = database.collection('bids');
	var allBids = [];
	return (dispatch) => {
		bidsCollection.where('driverId', '==', userId.toString())
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

function handleGetUserData(state, action){
	return update(state, {
		userData:{
			$set: action.payload
		}
	})
}

function handleGetUserAccount(state, action){
	return update(state, {
		userAccount:{
			$set: action.payload
		}
	})
}

function handleGetUserJobs(state, action){
	return update(state, {
		userJobs:{
			$set: action.payload
		}
	})
}

function handleGetAllJobs(state, action){
	return update(state, {
		allJobs:{
			$set: action.payload
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
  GET_DRIVER_LOCATION:handleGetDriverLocation,
  GET_USER_DATA:handleGetUserData,
  GET_USER_ACCOUNTS:handleGetUserAccount,
  GET_USER_JOBS:handleGetUserJobs,
  GET_ALL_JOBS:handleGetAllJobs,
  DRIVER_BIDS:handleGetDriverBids,
}
const initialState = {
  region:{},
  allBids: {}
};

export function DriverHomeReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}