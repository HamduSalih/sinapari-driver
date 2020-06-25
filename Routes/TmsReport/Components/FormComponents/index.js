import React from 'react';
import { 
    View,
    Text, 
    TextInput,
    TouchableOpacity,
    Picker,
    ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './FormComponentsStyles'

export default class FormComponents extends React.Component{
    state={
        clientId: this.props.userData.id_number,
        name: this.props.userData.fullname
    }

    _sendReport = (data) => {
        console.log(data)
        this.props.sendReport(data)
    }

    render(){
        return(
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.componentContainer}>
                        <Text style={styles.label}>Report Subject</Text>
                        <TextInput style={styles.inputs}
                            onChangeText={(subject)=> this.setState({subject})}
                        />
                    </View>
                    <View style={styles.componentContainer}>
                        <Text style={styles.label}>Details</Text>
                        <TextInput style={styles.inputs}
                            multiline={true}
                            onChangeText={(details)=> this.setState({details})}
                        />
                    </View>
                    <View style={{
                        paddingVertical: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}>
                        <TouchableOpacity style={styles.button}
                            onPress={this._sendReport.bind(this, this.state)}
                        >
                            <Text style={styles.buttonText}>Send</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={()=>Actions.pop()}
                        >
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        )
    }
}