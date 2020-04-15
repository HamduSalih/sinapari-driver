import React, { Component } from 'react';
import { StyleSheet, 
        Text, 
        View, 
        TextInput,
        TouchableOpacity, 
        Image,
        AsyncStorage,
        ImageBackground,
        KeyboardAvoidingView,
        ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import '@firebase/firestore';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const database = firebase.firestore()

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
        var driverCollection = database.collection('drivers')

        driverCollection.where('username', '==', this.state.username)
        .where('password', '==', this.state.password)
        .get()
        .then(async(querySnapshot)=>{
            querySnapshot.forEach(async(doc)=>{
                await AsyncStorage.setItem('isLoggedIn', '1');
                await AsyncStorage.setItem('driverLicense', doc.data().id_number);
            })
        })
        .then(async()=>{
            const userToken = await AsyncStorage.getItem('isLoggedIn');
            const driverLicense = await AsyncStorage.getItem('driverLicense');
            if(userToken !== '1'){
                Actions.login();
            } else{
                Actions.driverhome({userId: driverLicense});
            }
        })
        .catch((error)=>{
            console.log(error)
        })

        /**if(userInfo.username === this.state.username && userInfo.password === this.state.password){
            //alert('Logged In');
            await AsyncStorage.setItem('isLoggedIn', '1');
            this.props.navigation.navigate('Root');
        }else{
            alert('User info not corrected')
        } */
    }

    _navigate = () => {
        let param = this.state;
        Actions.signin({userData:param});
    }

    render(){
        return(
            
                <KeyboardAvoidingView
                behavior="padding" 
                    style={styles.container}>
                        <ImageBackground source={sinabg} style={{flex:1,  justifyContent:'flex-end'}}>
                            <ScrollView contentContainerStyle={{alignItems:'center', justifyContent:'center', flex:1}}>
                                <View>
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
                            </ScrollView>
                        </ImageBackground>
                    </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 25,
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