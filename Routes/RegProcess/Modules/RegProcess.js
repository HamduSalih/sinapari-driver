import update from "react-addons-update";
import constants from "./actionConstants";
//helps you get latidue delta from main size of window
import { Dimensions } from "react-native"
import RNGooglePlaces from "react-native-google-places";
import request from '../../../util/Request';
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
  REGISTER_USER
	  } = constants;


const {width, height} = Dimensions.get("window");
let ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.035;
const LONGITUDE_DELTA = 0.035; 
//---------------
//Actions
//---------------
export function registerUser(payload){
	return{
		type:REGISTER_USER,
		payload	
	}
}

//--------------------
//Action Handlers
//--------------------
function handleRegisterUser(state, action){
	return update(state, {
		UserData:{
		  $set:action.payload
		}
	})
}

const ACTION_HANDLERS = {
	REGISTER_USER:handleRegisterUser  
}
const initialState = {
  UserData:{}
};

export function RegProcessReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}