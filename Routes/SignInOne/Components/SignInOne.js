import React, { Component } from 'react';
import { StyleSheet, 
        Text, 
        View, 
        TextInput,
        TouchableOpacity, 
        Image,
        ImageBackground,
        KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import { Actions } from 'react-native-router-flux';
const sinabg = require('../../../assets/img/sina-bg.jpg')
const sinaLogo = require("../../../assets/img/sinalogo.jpg");

const userInfo = {
    username:'admin', 
    password:'12345'
}

export default class SignInOne extends Component{
    static navigationOptions = {
        headerShown: false
    }
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        let old_state = this.props.userData;
        this.state = old_state;
    }

    _navigate = () => {
        let param = this.state;
        Actions.signintwo({userData:param});
    }

    render(){
        return(
            <KeyboardAvoidingView
                    style={styles.container}>
                <ImageBackground source={sinabg} style={{flex:1,  justifyContent:'center', alignItems:'center'}}>
                    
                    <Text style={styles.welcome}>Register</Text>

                    <TextInput 
                        style={styles.input}
                        placeholder='Fullname'
                        onChangeText={(fullname)=> this.setState({fullname})}
                        value={this.state.fullname}
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='Age'
                        keyboardType='number-pad'
                        onChangeText={(age)=> this.setState({age})}
                        value={this.state.age}
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='Phone Number'
                        keyboardType='number-pad'
                        onChangeText={(phone_number)=> this.setState({phone_number})}
                        value={this.state.phone_number}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                            style={styles.userButton}
                            onPress={ this._navigate }>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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