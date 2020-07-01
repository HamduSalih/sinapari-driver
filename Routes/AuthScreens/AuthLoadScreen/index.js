import React from 'react';
import {AsyncStorage,
        ImageBackground,
        Image,
        Text } from 'react-native';
import styles from './AuthLoadScreenStyles';
import { Actions } from 'react-native-router-flux';
import * as Location from 'expo-location';
import * as firebase from 'firebase';
import '@firebase/firestore';

const database = firebase.firestore()
const sinabg = require('../../../assets/img/sina-bg.jpg')
const sinalogo = require('../../../assets/img/sinalogo.jpg')

export default class AuthLoadScreen extends React.Component{
    async componentDidMount() {
        let { status } = await Location.requestPermissionsAsync();
        if (status == 'granted') {
            var version = "1.0.0"
            var versionControl = database.collection('versionControl').doc('versionControl')
            versionControl
            .get()
            .then((doc)=>{
                if((doc.data()).version == version){
                    setTimeout(() => {
                        this._bootstrapAsync();
                    }, 5000);
                }else{
                    if(alert('Please close app and update to the latest version')){

                    }
                }
            })
            .catch((error)=>{
                console.log(error)
            })		
        }else{
            let { status } = await Location.requestPermissionsAsync();
        }
    }

    //fetch token from storage and navigate to appropriate screen

    _bootstrapAsync = async () => {
        /**
         * AsyncStorage.clear()
        .then(()=>{
            console.log('worked');
            return userToken = AsyncStorage.getItem('isLoggedIn');
        })
        .catch((err)=>{
            console.log(err)
        })
         */
        const userToken = await AsyncStorage.getItem('isLoggedIn');
        const driverLicense = await AsyncStorage.getItem('driverLicense');
        const userType = await AsyncStorage.getItem('userType')
        if(userToken !== '1'){
            Actions.login();
        } else if(userType == 'independent'){
            //alert(driverLicense)
            Actions.driverhome({userId: driverLicense});
        }else if(userType == 'under_partner'){
            //alert(driverLicense)
            Actions.tmsHome({userId: driverLicense});
        }
    }

    render(){
        return(
            <ImageBackground 
                source={sinabg} 
                style={styles.container}
                 >
                    <Text
                        style={{color:'#eef0ef', padding:0, fontSize: 35}}>SinaPari Driver</Text>
                    <Text style={{color:'#eef0ef', padding:0, fontSize: 10}}>The Future of Logistics Transportation</Text>
            </ImageBackground>
        )
    }
}