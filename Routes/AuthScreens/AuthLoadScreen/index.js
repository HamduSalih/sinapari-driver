import React from 'react';
import {AsyncStorage,
        ImageBackground,
        Image,
        Text } from 'react-native';
import styles from './AuthLoadScreenStyles';
import { Actions } from 'react-native-router-flux';
import * as Location from 'expo-location';

const sinabg = require('../../../assets/img/sina-bg.jpg')
const sinalogo = require('../../../assets/img/sinalogo.jpg')

export default class AuthLoadScreen extends React.Component{
    async componentDidMount() {
        let { status } = await Location.requestPermissionsAsync();
        if (status == 'granted') {
            setTimeout(this._bootstrapAsync, 5000);
        }else{
            alert('Please grant location access in Settings in Applications')
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
                     <Image 
                        source={sinalogo}
                        resizeMode='center'
                        style={{padding:0,marginVertical:-45}} />
                    <Text style={{color:'#eef0ef', padding:0}}>The Future of Logistics Transportation</Text>
            </ImageBackground>
        )
    }
}