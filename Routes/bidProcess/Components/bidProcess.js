import React, { Component } from 'react';
import { StyleSheet, 
        Text, 
        View, 
        TextInput,
        TouchableOpacity, 
        Image,
        AsyncStorage,
        ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { Actions } from 'react-native-router-flux';

const sinabg = require('../../../assets/img/sina-bg.jpg')
const sinaLogo = require("../../../assets/img/sinalogo.jpg");

export default class LoginScreen extends Component{
    static navigationOptions = {
        headerShown: true
    }

    componentDidMount() {
        
    }

    _navigate = () => {
        let param = this.state;
        Actions.signin({userData:param});
    }

    render(){
        return(
            <ImageBackground 
                source={sinabg} 
                style={styles.container}
            >
                <View style={styles.statusBar} />
                
                <View style={{margin:20}}>
                    <Image 
                            source={sinaLogo}
                            resizeMode='center'
                            style={{padding:0,marginBottom:-60}} />
                    <Text style={styles.welcome}>We are processong your bid</Text>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#b2b2ff'
    },
    welcome: {
        fontSize: 15,
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