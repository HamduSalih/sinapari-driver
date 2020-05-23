import update from "react-addons-update";
import constants from "./actionConstants";
//helps you get latidue delta from main size of window
import { Dimensions } from "react-native"
import * as firebase from 'firebase';
import '@firebase/firestore';
import Constants from "expo-constants";
const database = firebase.firestore();

//--------------------
//Constants
//--------------------
//THESE ARE ACTIONS CONSTANTS THEY SHOULD BE CALLED 
//IN actionConstants.js
const {
	REPORT_SENT
	  } = constants;


const {width, height} = Dimensions.get("window");
let ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.035;
const LONGITUDE_DELTA = 0.035; 
//---------------
//Actions
//---------------
export function sendReport(params){
	var reportCollection = database.collection('reports')
	return(dispatch)=>{
		reportCollection.add(params)
		.then(()=>{
			dispatch({
				type: REPORT_SENT,
				payload: params
			})
		})
	}
}


//--------------------
//Action Handlers
//--------------------
function handleSendReport(state, action){
	return update(state, {
		report:{
			$set: action.payload
		}
	})
}

const ACTION_HANDLERS = {
	REPORT_SENT:handleSendReport
}
const initialState = {
  
};

export function ReportReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}