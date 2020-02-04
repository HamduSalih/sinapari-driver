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


const userInfo = {
    username:'admin', 
    password:'12345'
}

export default class LoginScreen extends Component{
    static navigationOptions = {
        headerShown: false
    }

    state = {
        username:null,
        password:null,
        fullname:null,
        age:null,
        phone_number:null,
        truck_model:null,
        trailer_length:null,
        trailer_type:null,
        truck_number:null,
        id_number:null,
        driver_license:null,
        affiliate:null,
        picture:null,
        rating:0,
    }

    componentDidMount() {
        
    }

    _login = async() => {
        if(userInfo.username === this.state.username && userInfo.password === this.state.password){
            //alert('Logged In');
            await AsyncStorage.setItem('isLoggedIn', '1');
            this.props.navigation.navigate('Root');
        }else{
            alert('User info not corrected')
        }
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
                    <Text style={styles.welcome}>Welcome Partner</Text>
                </View>

                
                    <TextInput 
                        style={styles.input}
                        placeholder='Username'
                        onChangeText={(username)=> this.setState({username})}
                        value={this.state.username}
                        autoCapitalize='none'
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry
                        onChangeText={(password)=> this.setState({password})}
                        value={this.state.password}
                        autoCapitalize='none'
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                            style={styles.userButton}
                            onPress={this._login}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.userButton}
                            onPress={ this._navigate }>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
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