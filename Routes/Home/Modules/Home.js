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
  GET_INPUT,
  TOGGLE_SEARCH_RESULT,
  GET_SELECTED_ADDRESS,
  GET_DISTANCE_MATRIX,
  GET_FARE,
  BOOK_TRUCK,
  GET_NEARBY_DRIVERS
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

//get user input
export function getInputData(payload){
  return{
    type: GET_INPUT,
    payload
  }
}



//toggle search result
export function getInputType(payload){
  return{
    type:TOGGLE_SEARCH_RESULT,
    payload
  }
}

//GET ADDRESS PREDICTIONS FROM GOOGLE PLACES
export function getAddressPredictions(){
  return(dispatch, store)=>{
    let userInput = store().home.resultTypes.pickUp ? store().home.inputData.pickUp : store().home.inputData.dropOff;
    RNGooglePlaces.getAutocompletePredictions(userInput,
      {
        country:'GH'
      }  
    )
    .then((results)=>
      dispatch({
        type: GET_ADDRESS_PREDICTIONS,
        payload:results
      })
    )
    .catch((error)=> console.log(error.message));
  };
}

//GET SELECTED ADDRESS  
export function getSelectedAddress(payload, resType){
  const dummyNumbers = {
    baseFare: 0.4,
    timeRate: 0.14,
    distanceRate: 0.97,
    surge: 1
  }
  return(dispatch, store)=>{
    if(store().home.selectedLoadPoint === true){
      dispatch({
        type:GET_SELECTED_ADDRESS,
        payload,
        resType
      })
      //get the distance and time
      if(store().home.selectedLoadPoint && store().home.selectedDropPoint){
        request.get('https://maps.googleapis.com/maps/api/distancematrix/json')
        .query({
          origins:store().home.selectedLoadAddress.latitude + ',' + store().home.selectedLoadAddress.longitude,
          destinations:store().home.selectedDropAddress.latitude + ',' + store().home.selectedDropAddress.longitude,
          mode:'driving',
          key:'AIzaSyCspx_yMJwX4bTjLXTUHebo9TwYxTaLa6E'
        })
        .finish((error, res)=>{
          dispatch({
            type:GET_DISTANCE_MATRIX,
            payload:res.body
          })
        })
      }
      setTimeout(function(){
        if(store().home.selectedLoadPoint && store().home.selectedDropPoint){
          const fare = calculateFare(
            dummyNumbers.baseFare,
            dummyNumbers.timeRate,
            store().home.distanceMatrix.rows[0].elements[0].duration.value,
            dummyNumbers.distanceRate,
            store().home.distanceMatrix.rows[0].elements[0].distance.value,
            dummyNumbers.surge
          );
          dispatch({
            type:GET_FARE,
            payload: fare
          })
        }
      }, 1000)
    }else{
      dispatch({
        type:GET_SELECTED_ADDRESS,
        payload,
        resType
      })
    }
  }
}


//book truck
export function bookTruck(){
  return(dispatch, store)=>{
    const nearByDrivers = store().home.nearByDrivers;
    const nearByDriver = nearByDrivers[Math.floor(Math.random() * nearByDrivers.length)];
    const payload = {
      data:{
        userName:'Hamdu',
        loadPoint:{
          address:store().home.selectedLoadAddress.address,
          name:store().home.selectedLoadAddress.name,
          latitude:store().home.selectedLoadAddress.latitude,
          longitude:store().home.selectedLoadAddress.longitude
        },
        dropPoint:{
          address:store().home.selectedDropAddress.address,
          name:store().home.selectedDropAddress.name,
          latitude:store().home.selectedDropAddress.latitude,
          longitude:store().home.selectedDropAddress.longitude
        },
        fare:store().home.fare,
        status:'pending'
      },
      nearByDriver:{
        socketId:nearByDriver.socketId,
        driverId:nearByDriver.driverId,
        latitude:nearByDriver.coordinate.coordinates[1],
        longitude:nearByDriver.coordinate.coordinates[0]
      }
    };

    request.post(uri + '/api/bookings')
      .send(payload)
      .finish((error, res)=>{
        dispatch({
          type:BOOK_TRUCK,
          payload:res.body
        });
      });
    
  }
}

//get nearby drivers
export function getNearByDrivers(){
	return(dispatch, store)=>{
		request.get(uri + '/api/driverLocation')
		.query({
			latitude:store().home.region.latitude,
			longitude:store().home.region.longitude
		})
		.finish((error, res)=>{
			if(res){
				dispatch({
					type:GET_NEARBY_DRIVERS,
					payload:res.body
				});
			}

		});
	};
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

function handleGetInputDate(state, action){
  //constant taken from payload
  const {key, value} = action.payload;
  return update(state, {
    inputData: {
      [key]:{
        $set: value
      }
    }
  });
}

function handleGetInputType(state, action){
  if(action.payload === 'loadPoint'){
    return update(state, {
       resultTypes:{
         pickUp:{
           $set:true,
         },
         dropOff:{
           $set:false,
         }
       },
       selectedLoadPoint:{
         $set:true
       }
    });
  }

  if(action.payload === 'dropPoint'){
    return update(state, {
       resultTypes:{
         pickUp:{
           $set:false,
         },
         dropOff:{
           $set:true,
         }
       },
       selectedDropPoint:{
         $set:true
       }
    });
  }
}

function handleGetAddressPredictions(state, action){
  return update(state, {
    predictions:{
      $set:action.payload
    }
  })
}

function handleGetSelectedAddress(state, action){
  if (action.resType === 'loadPoint'){
    return update(state, {
      selectedLoadAddress:{
        $set:action.payload
      },
      selectedAddress:{
        LoadAddress:{
          $set:action.payload
        },
      }
    })
  }
  if (action.resType === 'dropPoint'){
    return update(state, {
      selectedDropAddress:{
        $set:action.payload
      },
      selectedAddress:{
        DropAddress:{
          $set:action.payload
        },
      }
    })
  }
}

function handleGetDistanceMatrix(state, action){
  return update(state, {
    distanceMatrix:{
      $set:action.payload
    }
  })
}

function handleGetFare(state, action){
  return update(state, {
    fare:{
      $set:action.payload
    }
  })
}

function handleBookTruck(state, action){
  return update(state, {
    booking:{
      $set:action.payload
    }
  })
}

function handleGetNearByDrivers(state, action){
  return update(state, {
    nearByDrivers:{
      $set:action.payload
    }
  })
}

function handleConfirmBooking(state, action){
  return update(state, {
    booking:{
      $set:action.payload
    }
  })
}

const ACTION_HANDLERS = {
  GET_CURRENT_LOCATION:handleGetCurrentLocation,
  GET_INPUT:handleGetInputDate,
  TOGGLE_SEARCH_RESULT:handleGetInputType,
  GET_SELECTED_ADDRESS:handleGetSelectedAddress,
  GET_DISTANCE_MATRIX:handleGetDistanceMatrix,
  GET_FARE:handleGetFare,
  BOOK_TRUCK:handleBookTruck,
  GET_NEARBY_DRIVERS:handleGetNearByDrivers,
  BOOKING_CONFIRMED:handleConfirmBooking
}
const initialState = {
  region:{},
  inputData:{},
  resultTypes:{},
  selectedLoadAddress:{},
  selectedDropAddress:{},
  selectedLoadPoint:{},
  selectedDropPoint:{},
  selectedAddress:{}
};

export function HomeReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}