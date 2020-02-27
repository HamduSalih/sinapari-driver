import React, { Component } from 'react';
import { AsyncStorage, Text, ScrollView, 
        TextInput,
        TouchableOpacity,
        KeyboardAvoidingView,
        Platform} from 'react-native';
import { View } from 'native-base';
import styles from './scrollContainerStyles'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

import * as Random from 'expo-random';
import { Actions } from 'react-native-router-flux';

class ScrollContainer extends Component{
    state={
        
    };

    async componentDidMount(){
        
    }

    componentDidUpdate(){
        //console.log(this.state);
    }

    _navigate = () => {
        
    }

    render(){
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var jobDetails = this.props.jobDetails;
        var minutesSource = new Date(jobDetails.pickUpAddress.time.seconds * 1000).getMinutes();
        var minutes = minutesSource < 10 ? '0' + minutesSource : minutesSource;
        return(
            <View
              style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollStyle}>
                    <Text style={styles.pickUpTime}>Pick Up at {new Date(jobDetails.pickUpAddress.time.seconds * 1000).getDate() + ' ' + months[new Date(jobDetails.pickUpAddress.time.seconds * 1000).getMonth()] + ' ' + new Date(jobDetails.pickUpAddress.time.seconds * 1000).getFullYear() + ', ' + new Date(jobDetails.pickUpAddress.time.seconds * 1000).getHours() + ':' + minutes}</Text>
                    <View>
                        <Text>Payout: GHS {jobDetails.amount}</Text>
                    </View>
                </ScrollView>                 
            </View>
        )
    }
}
export default ScrollContainer;