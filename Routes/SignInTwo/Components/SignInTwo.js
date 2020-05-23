import React, { Component } from 'react';
import { StyleSheet, 
        Text, 
        View, 
        TextInput,
        TouchableOpacity,
        Picker,
        ImageBackground,
        KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Constants from 'expo-constants';
const sinabg = require('../../../assets/img/sina-bg.jpg');

export default class SignInTwo extends Component{
    static navigationOptions = {
        headerShown: false
    }

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        const { navigation } = this.props;
        let old_state = this.props.userData;
        this.state = old_state;
    }

    _navigate = () => {
        let param = this.state;
        Actions.signinthree({userData:param});
    }

    render(){        
        return(
            <KeyboardAvoidingView
                    style={styles.container}>
                <ImageBackground source={sinabg} style={{flex:1,  justifyContent:'center', alignItems:'center'}}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Truck Model/Name'
                        onChangeText={(truck_model)=> this.setState({truck_model})}
                        value={this.state.truck_model}
                    />
                    <Picker
                        selectedValue={this.state.trailer_length}
                        style={styles.input}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({trailer_length: itemValue})
                        }>
                            <Picker.Item label="Trailer Length" value="" />
                            <Picker.Item label="20ft" value="20ft" />
                            <Picker.Item label="40ft" value="40ft" />
                    </Picker>
                    <Picker
                        selectedValue={this.state.trailer_type}
                        style={styles.input}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({trailer_type: itemValue})
                        }>
                            <Picker.Item label="Trailer Type" value="" />
                            <Picker.Item label="Flatbed" value="flatbed" />
                            <Picker.Item label="Transit" value="transit" />
                            <Picker.Item label="Box-cargo" value="box-cargo" />
                            <Picker.Item label="Oil-tanker" value="oil-tanker" />
                    </Picker>
                    <TextInput 
                        style={styles.input}
                        placeholder='Truck Number'
                        onChangeText={(truck_number)=> this.setState({truck_number})}
                        value={this.state.truck_number}
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