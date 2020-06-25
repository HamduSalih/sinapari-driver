import React, { Component } from 'react';
import { StyleSheet, 
        Text, 
        View, 
        TextInput,
        TouchableOpacity,
        Picker,
        Image,
        ImageBackground,
        KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import FormComponents from './FormComponents'
import TmsBottomTab from '../../../Navigtions/TmsBottomTab';

const sinabg = require('../../../assets/img/sina-bg.jpg');
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
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

export default class TmsDriverProfile extends Component{
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
    }

    _navigate = () => {

    }

    render(){
        return(
            <KeyboardAvoidingView
                behavior="padding" 
                    style={styles.container}>
                <ImageBackground source={sinabg} style={{flex:1,  justifyContent:'flex-end'}}>
                    <FormComponents 
                        userData={this.props.userData}
                        updateProfile={this.props.updateProfile}
                    />
                    <TmsBottomTab />
                </ImageBackground>
            </KeyboardAvoidingView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff'
   },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    input: {
        width: '90%',
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
        borderRadius: 5
    },
    userButton: {
        backgroundColor: '#eef0ef',
        padding: 15,
        width: '45%',
        borderRadius: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#141d48',
    },
    statusBar: {
        backgroundColor: "#C2185B",
        height: Constants.statusBarHeight,
    }
})