import React, { Component } from 'react';
import { StyleSheet, 
        Text, 
        View, 
        TextInput,
        TouchableOpacity,
        Picker,
        AsyncStorage } from 'react-native';
import Constants from 'expo-constants';
const sinaLogo = require("../../../assets/img/sinapari_blue.png");

export default class SignInTwo extends Component{
    static navigationOptions = {
        headerShown: false
    }

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        const { navigation } = this.props;
        let old_state = navigation.getParam('param', '');
        this.state = old_state;
    }

    _navigate = (page) => {
        let param = this.state;
        this.props.navigation.navigate(page, {param});
    }

    render(){        
        return(
            <View style={styles.container}>
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
                        onPress={ this._navigate.bind(this, 'SignInThree') }>
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