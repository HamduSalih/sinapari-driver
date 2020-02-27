import React from "react";
import Constants from 'expo-constants';
import { View } from 'native-base'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Ionicons } from '@expo/vector-icons';
import styles from "./GooglePlacesStyles";;

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

const GooglePlacesInput = ({getSelectedAddress,getInputType}) => {
  function handleGetSelectedAddress(placeID, resType){
    getSelectedAddress(placeID, resType);
  }
  function handleInputType(theInput){
    getInputType(theInput);
  }
    return (
      <View style={styles.searchBox}>
      <View>
        <GooglePlacesAutocomplete
      placeholder='Loading Point'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed={false}    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        //console.log(data, details);
        handleGetSelectedAddress({
          name:data.structured_formatting.main_text,
          address:data.description,
          placeID:data.place_id,
          latitude:details.geometry.location.lat,
          longitude:details.geometry.location.lng
        }, 'loadPoint');
        handleInputType('loadPoint');
      }}

      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyCspx_yMJwX4bTjLXTUHebo9TwYxTaLa6E',
        language: 'en', // language of the results
      }}

      styles={{
        textInputContainer: {
          width: '100%',
          marginTop:20
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}

      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      />
      </View>
      <View>
        <GooglePlacesAutocomplete
      placeholder='Loading Point'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed={false}    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description}
       // custom description render
       onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
       //console.log(data, details);
       handleGetSelectedAddress({
         name:data.structured_formatting.main_text,
         address:data.description,
         placeID:data.place_id,
         latitude:details.geometry.location.lat,
         longitude:details.geometry.location.lng
       }, 'dropPoint');
       handleInputType('dropPoint');
     }}
      
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyCspx_yMJwX4bTjLXTUHebo9TwYxTaLa6E',
        language: 'en', // language of the results
        components:{country:'GH'}
      }}

      styles={{
        textInputContainer: {
          width: '100%',
          marginTop:20
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}

      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      />
      </View>
    </View>
    );
}
  
  export default GooglePlacesInput;