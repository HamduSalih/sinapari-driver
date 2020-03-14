import React from 'react';
import {AsyncStorage,
        ImageBackground,
        Image,
        Text } from 'react-native';
import styles from './AuthLoadScreenStyles';
import { Actions } from 'react-native-router-flux';

const sinabg = require('../../assets/img/sina-bg.jpg')
const sinalogo = require('../../assets/img/sinalogo.jpg')

export default class navAuthLoad extends React.Component{
    componentDidMount() {
        setTimeout(this._bootstrapAsync);
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
        if(userToken !== '1'){
            Actions.login();
        } else{
            Actions.driverhome({userId: driverLicense});
        }
    }

    render(){
        return(
            <ImageBackground 
                source={sinabg} 
                style={styles.container}
                 >
            </ImageBackground>
        )
    }
}