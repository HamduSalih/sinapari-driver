import React from 'react';
import { View, Platform, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import styles from './CallButtonStyles'

const CallButton = (bidDetails) => {
    function dialCall (){
        let phoneNumber = '';
	
		if (Platform.OS === 'android') {
		  phoneNumber = 'tel:${'+bidDetails.bidDetails.client_number+'}';
		}
		else {
		  phoneNumber = 'telprompt:${'+bidDetails.bidDetails.client_number+'}';
		}
	
        Linking.openURL(phoneNumber);
	  };
    return(
        <MaterialIcons 
            size={50} 
            name='call'
            color={'#fff'}
            style={styles.iconButton}
            onPress={()=> dialCall()}
        />
    )
}

export default CallButton;