import React from 'react';
import { 
    View,
    Text, 
    TextInput,
    TouchableOpacity,
    Picker,
    ScrollView } from 'react-native'

import styles from './FormComponentsStyles'

export default class FormComponents extends React.Component{
    state={
        driverId: this.props.userData.driver_license
    }

    _updateProfile = (data) => {
        this.props.updateProfile(data)
    }

    render(){
        return(
            <View style={{flex: 1, paddingHorizontal: 10}}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.componentContainer}>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput style={styles.inputs}
                            onChangeText={(phone_number)=> this.setState({phone_number})}
                        />
                    </View>
                    <View style={styles.componentContainer}>
                        <Text style={styles.label}>Affiliation</Text>
                        <View style={{borderColor:'grey', borderWidth: 1}}>
                            <Picker
                                selectedValue={this.state.affiliation}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({affiliation: itemValue})
                                }
                            >
                                <Picker.Item label="Select" value="Select" />
                                <Picker.Item label="Independent" value="independent" />
                                <Picker.Item label="Under Partner" value="under_partner" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{
                        paddingVertical: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}>
                        <View style={{
                            width: '45%'
                        }}>
                            <Text style={styles.label}>Trailer Length</Text>
                            <View style={{borderColor:'grey', borderWidth: 1}}>
                                <Picker
                                    selectedValue={this.state.trailer_length}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({trailer_length: itemValue})
                                    }
                                >
                                    <Picker.Item label="Select" value="Select" />
                                    <Picker.Item label="20ft" value="20ft" />
                                    <Picker.Item label="40ft" value="40ft" />
                                </Picker>
                            </View>
                        </View>
                        <View style={{
                            width: '50%'
                        }}>
                            <Text style={styles.label}>Trailer Type</Text>
                            <View style={{borderColor:'grey', borderWidth: 1}}>
                                <Picker
                                    selectedValue={this.state.trailer_type}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({trailer_type: itemValue})
                                    }
                                >
                                    <Picker.Item label="Select" value="Select" />
                                    <Picker.Item label="Flatbed" value="flatbed" />
                                    <Picker.Item label="Transit" value="transit" />
                                    <Picker.Item label="Box-cargo" value="box-cargo" />
                                </Picker>
                            </View>
                        </View>
                    </View>
                    <View style={styles.componentContainer}>
                        <Text style={styles.label}>Truck Number</Text>
                        <TextInput style={styles.inputs}
                            onChangeText={(truck_number)=> this.setState({truck_number})}
                        />
                    </View>
                    <View style={{
                        paddingVertical: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}>
                        <TouchableOpacity style={styles.button}
                            onPress={this._updateProfile.bind(this, this.state)}
                        >
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}