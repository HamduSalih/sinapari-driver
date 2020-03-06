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
        buttonText: 'Start Job'
    };

    async componentDidMount(){
        if(this.props.jobDetails.tripStatus !== 'live'){
            this.setState({buttonText: 'Start Job'});
        }else if(this.props.jobDetails.tripStatus == 'live'){
            this.setState({buttonText: 'Complete Job'});
        }else if(this.props.jobDetails.tripStatus == 'completed'){
            this.setState({buttonText: 'Job Completed'});
        }
    }

    componentWillReceiveProps(nextProps){
       /**
        *  if(nextProps.jobDetails.tripStatus !== 'live'){
            this.setState({buttonText: 'Start Job'});
        }else if(nextProps.jobDetails.tripStatus == 'live'){
            this.setState({buttonText: 'Complete Trip'});
        }
        */
    }

    onPressEvent = () => {
        if(this.state.buttonText == 'Start Job'){
            /**this.props.updateBidTripStatus(this.props.jobDetails),
            this.setState({buttonText: 'Complete Job'}),
            this.props.createLiveJob(this.props.jobDetails) */
            this.props.updateBidTripStatus(this.props.jobDetails, 
                this.setState({buttonText: 'Complete Job'}))}
    }

    componentDidUpdate(){
        //console.log(this.state);
    }

    _navigate = () => {
        
    }

    render(){
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var jobDetails = this.props.jobDetails;
        var minutesSourcePickUp = new Date(jobDetails.pickUpAddress.time.seconds * 1000).getMinutes();
        var minutesPickUp = minutesSourcePickUp < 10 ? '0' + minutesSourcePickUp : minutesSourcePickUp;

        var minutesSourceDropOff = new Date(jobDetails.pickUpAddress.time.seconds * 1000).getMinutes();
        var minutesDropOff = minutesSourceDropOff < 10 ? '0' + minutesSourceDropOff : minutesSourceDropOff;
        return(
            <View
              style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollStyle}>
                    <Text style={styles.pickUpTime}>Pick Up at {new Date(jobDetails.pickUpAddress.time.seconds * 1000).getDate() + ' ' + months[new Date(jobDetails.pickUpAddress.time.seconds * 1000).getMonth()] + ' ' + new Date(jobDetails.pickUpAddress.time.seconds * 1000).getFullYear() + ', ' + new Date(jobDetails.pickUpAddress.time.seconds * 1000).getHours() + ' ' + ':' + minutesPickUp}</Text>
                    <View style={styles.payoutView}>
                        <View style={styles.payoutViewViews, {borderRightWidth: 1, borderRightColor: 'grey', paddingRight: 40}}>
                            <Text>Payout</Text>
                            <Text style={{fontSize: 20}}>GHS {jobDetails.amount}</Text>
                        </View>
                        <View style={styles.payoutViewViews}>
                            <Text>Driver Id</Text>
                            <Text style={{fontSize: 20}}>{jobDetails.driverId}</Text>
                        </View>
                    </View>
                    <View style={styles.standAloneViews}>
                        <Text>Job Id: {jobDetails.jobId}</Text>
                    </View>

                    <View style={styles.standAloneViews, {alignItems: 'center', marginTop: 40}}>
                        <Text
                            style={{
                                width: '50%',
                                textAlign: 'center',
                                textTransform: 'uppercase',
                                borderColor: '#141d48',
                                borderRadius: 10,
                                borderWidth: 1
                            }}
                        >
                            Job Summary</Text>
                    </View>

                    <View
                        style={{
                            padding: 10
                        }}
                    >
                        <View style = {styles.locView}>
                            <FontAwesome style={styles.locIcon} size={20} name='dot-circle-o'/>
                            <Text style={styles.locText}>{jobDetails.pickUpAddress.address}</Text>
                        </View>
                        <View style={styles.locView}>
                          <View style={{ 
                            height:35,
                            borderLeftWidth:2, 
                            marginLeft:7}}/>
                          <Text style={styles.dateStyle}>{new Date(jobDetails.pickUpAddress.time.seconds * 1000).getDate() + ' ' + months[new Date(jobDetails.pickUpAddress.time.seconds * 1000).getMonth()] + ' ' + new Date(jobDetails.pickUpAddress.time.seconds * 1000).getFullYear() + ', ' + new Date(jobDetails.pickUpAddress.time.seconds * 1000).getHours() + ':' + minutesPickUp}</Text>
                        </View>
                        <View style={styles.locView}>
                            <Entypo style={styles.locIcon} size={17} name='circle'/>
                            <Text>{jobDetails.dropOffAddress.address}</Text> 
                        </View>
                        <View style={styles.locView}>
                            <View style={{
                            marginLeft:7}}/>
                            <Text style={styles.dateStyle}>{new Date(jobDetails.dropOffAddress.time.seconds * 1000).getDate() + ' ' + months[new Date(jobDetails.dropOffAddress.time.seconds * 1000).getMonth()] + ' ' + new Date(jobDetails.dropOffAddress.time.seconds * 1000).getFullYear() + ', ' + new Date(jobDetails.dropOffAddress.time.seconds * 1000).getHours() + ':' + minutesDropOff}</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{
                    borderColor: 'grey',
                    borderTopWidth: 1,
                    padding: 10,
                    alignItems: 'center',
                    backgroundColor: 'white',
                }}>
                    <TouchableOpacity style={{
                        width: '90%',
                        backgroundColor: '#141d48',
                        borderRadius: 50
                    }}
                        onPress={ this.onPressEvent }
                    >
                        <Text style={{
                            color: 'white',
                            textAlign: 'center',
                            padding: 7,
                            fontSize: 17
                        }}>{this.state.buttonText}</Text>
                    </TouchableOpacity>
                </View>                 
            </View>
        )
    }
}
export default ScrollContainer;