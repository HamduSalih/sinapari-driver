import React, { Component } from 'react';
import { StyleSheet, 
        Text, 
        View, 
        TextInput,
        TouchableOpacity, 
        Image,
        ActivityIndicator,
        ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { Actions } from 'react-native-router-flux';

const sinabg = require('../../../assets/img/sina-bg.jpg')
const sinaLogo = require("../../../assets/img/sinalogo.jpg");

export default class BidProcess extends Component{
    constructor(props){
        super(props);
        this.state = this.props.jobDetails;
    }

    componentDidMount() {
        this.props.addBidToDb(this.state);
        /**if(this.props.addBidToDb(this.state)){
            alert('Bid Added Successfully')
            Actions.driverhome({userId: this.props.userData.driver_license});
        } */
    }

    _navigate = () => {
        
    }

    render(){
        return(
            <ImageBackground 
                source={sinabg} 
                style={styles.container}
            >
                
                <View style={{margin:20}}>
                    <Image 
                            source={sinaLogo}
                            resizeMode='center'
                            style={{padding:0,marginBottom:-60}} />
                    <Text style={styles.welcome}>We are processong your bid</Text>
                </View>
                <ActivityIndicator size="large" color="#eef0ef"/>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#b2b2ff',
        justifyContent: 'center',
        ...StyleSheet.absoluteFillObject
    },
    welcome: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        color: '#fff'
   },
    statusBar: {
        backgroundColor: "#C2185B",
        height: Constants.statusBarHeight,
    }
})