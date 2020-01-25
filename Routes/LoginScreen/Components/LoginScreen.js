import React, { Component } from 'react';
import { StyleSheet, 
        Text, 
        View, 
        TextInput,
        TouchableOpacity, 
        Image,
        AsyncStorage } from 'react-native';
import Constants from 'expo-constants';
const sinaLogo = require("../../../assets/img/sinapari_blue.png");

const userInfo = {
    username:'admin', 
    password:'12345'
}

export default class LoginScreen extends Component{
    static navigationOptions = {
        headerShown: false
    }

    state = {
        username:'',
        password:''
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
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.statusBar} />
                <Image 
                    source={sinaLogo}
                    resizeMode='contain'
                    style={{width:300, height:100, marginBottom:-10}}
                />
                <Text style={styles.welcome}>Welcome Partner</Text>
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
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.userButton}
                        onPress={this._login}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userButton}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b2b2ff'
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
        backgroundColor: '#0000ff',
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
        color: '#fff'

    },
    statusBar: {
        backgroundColor: "#C2185B",
        height: Constants.statusBarHeight,
    }
})