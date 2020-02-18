import React, { Component } from 'react';
import { AsyncStorage, Text, ScrollView, 
        TextInput,
        TouchableOpacity,
        KeyboardAvoidingView} from 'react-native';
import { View } from 'native-base';
import styles from './scrollContainerStyles'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

const randomString = require('crypto-random-string');

class ScrollContainer extends Component{
    state={
        bidId: randomString({length: 15}),
        amount: null,
        jobId: this.props.jobDetails.JobId,
        driverId: AsyncStorage.getItem('driverLicense'),
        
    };

    render(){
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const jobDetails = this.props.jobDetails;
        return(
            <KeyboardAvoidingView style={styles.container}
                behavior="padding" enabled
            >
                <ScrollView contentContainerStyle={styles.scrollStyle}>
                    <View style = {styles.distanceContainer}>
                        <View style={{borderRightColor: 'grey', 
                            borderRightWidth: 1,
                            paddingRight: 10}}>
                            <Text style={styles.distanceHeader}>Total Distance</Text>
                            <Text style={styles.distanceFigure}>{jobDetails.distance}</Text>
                        </View>
                        <View style={{paddingLeft: 10}}>
                            <Text style={styles.distanceHeader}>Total Weight (TONNES)</Text>
                            <Text style={styles.distanceFigure}>{jobDetails.weight}</Text>
                        </View>
                    </View>
                    <View style={styles.viewContainer}>
                        <Text style={styles.distanceHeader}>TRUCK/TRAILER TYPE</Text>
                        <Text style={styles.distanceFigure}>{jobDetails.trailerType} {jobDetails.vehicleType}</Text>
                    </View>
                    <View style={styles.viewContainer}>
                        <Text style={styles.distanceHeader}>REQUIREMENTS</Text>
                        <Text style={styles.distanceFigure}>{jobDetails.accessories}</Text>
                    </View>
                    <View style={styles.viewContainer}>
                        <Text style={styles.distanceHeader}>SHIPPER</Text>
                        <Text style={styles.distanceFigure}>{jobDetails.client}</Text>
                    </View>
                    <View style={styles.viewContainer}>
                        <Text style={styles.distanceHeader}>LOAD DESCRIPTION</Text>
                        <Text style={styles.distanceFigure}>{jobDetails.goodsDescription}</Text>
                    </View>
    
    
                    <View style={{
                        borderTopWidth: 1,
                        borderTopColor: 'grey',
                        paddingTop: 20
                    }}>
                        <View style = {styles.locView}>
                            <FontAwesome style={styles.locIcon} size={20} name='dot-circle-o'/>
                            <Text style={styles.locText}>{jobDetails.pickUp.address}</Text>
                        </View>
                        <View style={styles.locView}>
                            <View style={{ 
                            height:35,
                            borderLeftWidth:2, 
                            marginLeft:7}}/>
                            <Text style={styles.dateStyle}>{new Date(jobDetails.pickUp.time.seconds * 1000).getDate() + ' ' + months[new Date(jobDetails.pickUp.time.seconds * 1000).getMonth()] + ' ' + new Date(jobDetails.pickUp.time.seconds * 1000).getFullYear() + ', ' + new Date(jobDetails.pickUp.time.seconds * 1000).getHours() + ':' + new Date(jobDetails.pickUp.time.seconds * 1000).getMinutes()}</Text>
                        </View>
                        <View style={styles.locView}>
                            <Entypo style={styles.locIcon} size={17} name='circle'/>
                            <Text>{jobDetails.dropOff.address}</Text>
                        </View>
                        <View style={styles.locView}>
                            <View style={{
                            marginLeft:7}}/>
                            <Text style={styles.dateStyle}>{new Date(jobDetails.dropOff.Time.seconds * 1000).getDate() + ' ' + months[new Date(jobDetails.dropOff.Time.seconds * 1000).getMonth()] + ' ' + new Date(jobDetails.dropOff.Time.seconds * 1000).getFullYear() + ', ' + new Date(jobDetails.dropOff.Time.seconds * 1000).getHours() + ':' + new Date(jobDetails.dropOff.Time.seconds * 1000).getMinutes()}</Text>
                        </View>
                    </View>
                </ScrollView>
                {/** add price input and bid button */}
                <View style={styles.bidContainer}>
                    <TextInput 
                        placeholder='Your price in GHS'
                        style={styles.bidInput}
                        onChangeText={(amount)=> this.setState({amount})}
                        value={this.state.amount}
                        keyboardType='decimal-pad'
                    />
                    <TouchableOpacity
                        style={styles.bidButton}
                    >
                        <Text 
                            style={styles.bidButtonText}
                        >
                            Place Bid
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
export default ScrollContainer;

