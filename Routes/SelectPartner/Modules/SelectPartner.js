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
    GET_AFFILIATES
	  } = constants;


const {width, height} = Dimensions.get("window");
let ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.035;
const LONGITUDE_DELTA = 0.035; 
//---------------
//Actions
//---------------
export function getAffiliates(){
    var tmsUsersCollection = database.collection('tms_users')
    var affiliates = []
    return (dispatch)=>{
        tmsUsersCollection
        .get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                affiliates.push(doc.data())
            })
        })
        .then(()=>{
            dispatch({
                type: GET_AFFILIATES,
                payload: affiliates
            })
        })
    }
}


//--------------------
//Action Handlers
//--------------------
function handleGetAffiliates( state, action ){
    return update( state, {
        affiliates:{
            $set: action.payload
        }
    })
}

const ACTION_HANDLERS = {
    GET_AFFILIATES: handleGetAffiliates
}
const initialState = {
  affiliates: []
};

export function SelectPartnerReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}