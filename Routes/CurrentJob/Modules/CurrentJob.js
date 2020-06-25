import update from "react-addons-update";
import constants from "./actionConstants";
//helps you get latidue delta from main size of window
import { Dimensions, AsyncStorage } from "react-native"
import RNGooglePlaces from "react-native-google-places";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
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

//--------------------
//Constants
//--------------------
//THESE ARE ACTIONS CONSTANTS THEY SHOULD BE CALLED 
//IN actionConstants.js
const {
  DRIVER_BIDS
	  } = constants;


const {width, height} = Dimensions.get("window");
let ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.035;
const LONGITUDE_DELTA = 0.035; 
//---------------
//Actions
//---------------
export function updateBidTripStatus(bid, buttonText){
	var collections = database.collection('bids');
	var jobCollections = database.collection('jobs')
	var accountsCollections = database.collection('accounts')
	var docId = '';
	var allBids = [];

	if(buttonText == 'started'){
		return (dispatch)=>{
			collections.where('driverId', '==', bid.driverId)
			.where('bidId', '==', bid.bidId)
			.where('status', '==', 'accepted')
			.get().then((querySnapshot)=>{
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
			.then(()=>{
			collections.where('driverId', '==', bid.driverId)
			.get()
			.then((querySnapshot)=>{
				querySnapshot.forEach((doc)=>{
				allBids.push(doc.data());
				})
			})
			.then(()=>{
				jobCollections.where('jobId', '==', bid.jobId)
				.get()
				.then((querySnapshot)=>{
					querySnapshot.foreach((doc)=>{
						docId = doc.id
					})
				})
				.then(()=>{
					jobCollections.doc(docId)
					.update({
						status:'live'
					})
				})
			})
			.then(()=>{
				dispatch({
				type: DRIVER_BIDS,
				payload: allBids
				})
			})
			.then(()=>{
				accountsCollections.doc(bid.driverId)
				.get()
				.then((doc)=>{
					if((doc.data()).amountIn == null){
						accountsCollections.doc(bid.driverId)
						.update({
							amountIn: bid.amount
						})
					}else{
						accountsCollections.doc(bid.driverId)
						.update({
							amountIn: (parseInt((doc.data()).amountIn) + parseInt(bid.amount)).toString()
						})
					}
				})
			})
			})
		}
	}

	if(buttonText == 'completed'){
		return (dispatch)=>{
			collections.where('driverId', '==', bid.driverId)
			.where('bidId', '==', bid.bidId)
			.where('tripStatus', '==', 'live')
			.get().then((querySnapshot)=>{
				querySnapshot.forEach((doc)=>{
					docId = doc.id
				})
			})
			.then(()=>{
				collections.doc(docId)
				.update({
					tripStatus: 'completed'
				})
		})
		.then(()=>{
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
		})
	}
	}
}


//--------------------
//Action Handlers
//--------------------
function handleGetDriverBids(state, action){
	return update(state, {
		allBids:{
			$set: action.payload
		}
	})
}


const ACTION_HANDLERS = {
  DRIVER_BIDS: handleGetDriverBids
}

const initialState = {
  
};

export function CurrentJobReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}