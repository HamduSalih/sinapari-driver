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

export default class SignInOne extends Component{
    static navigationOptions = {
        headerShown: false
    }

    state = {
        fullname:'',
        age:'',
        phone_number:'',
        truck_model:'',
        trailer_length:'',
        trailer_type:'',
        truck_number:'',
        id_number:'',
        driver_license:'',
        affiliate:'',
        picture:null
    }

    _navigate = (page) => {
        let param = this.state;
        this.props.navigation.navigate(page, {param});
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
                        onPress={ this._navigate.bind(this, 'SignInTwo') }>
                        <Text style={styles.buttonText}>Next</Text>
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