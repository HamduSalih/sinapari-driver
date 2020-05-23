import React, { Component } from 'react';
import { StyleSheet, 
        KeyboardAvoidingView, 
        View, } from 'react-native';
import Constants from 'expo-constants';
import FormComponents from './FormComponents'
import BottomTab from '../../../Navigtions/BottomTabContainer';

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

export default class Report extends Component{
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
    }

    _navigate = () => {

    }

    render(){
        return(
            <KeyboardAvoidingView
                style={styles.container}>
                <FormComponents 
                    userData={this.props.userData}
                    sendReport={this.props.sendReport}
                />
                <BottomTab />
            </KeyboardAvoidingView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})