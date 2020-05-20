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
import * as firebase from 'firebase';
import '@firebase/firestore';
import * as Random from 'expo-random';
import { Actions } from 'react-native-router-flux';

const database = firebase.firestore()
var bidsContainer = []

class ScrollContainer extends Component{
    state={
        bidId: null,
        amount: null,
        jobId: this.props.jobDetails.jobId,
        driverId: null,
        driverName: this.props.userData.fullname,
        truck_number: this.props.userData.truck_number,
        rating: this.props.userData.rating,
        phone_number: this.props.userData.phone_number,
        client_number: this.props.jobDetails.client_number,
        paid: false,
        status: 'pending',
        goodsDescription: this.props.jobDetails.goodsDescription,
        pickUpAddress: {
            address: this.props.jobDetails.pickUp.address,
            lat: this.props.jobDetails.pickUp.lat,
            long: this.props.jobDetails.pickUp.long,
            time: this.props.jobDetails.pickUp.time
        },
        dropOffAddress: {
            address: this.props.jobDetails.dropOff.address,
            lat: this.props.jobDetails.dropOff.lat,
            long: this.props.jobDetails.dropOff.long,
            time: this.props.jobDetails.dropOff.Time
        },
        client: this.props.jobDetails.client,
        tripStatus: null,
        ownerStatus: null
    };

    async componentDidMount(){
        var bidCollections = database.collection('bids');
        bidCollections.where('jobId', '==', this.state.jobId)
        .where('tripStatus', '==', 'live')
        .get()
        .then((querySnapshot)=>{
            querySnapshot.foreach((doc)=>{
                bidsContainer.push(doc.data())
            })
        })

        const randomBytes = await Random.getRandomBytesAsync(9);
        var i = 0;
        var bidId = '';
        while(i < randomBytes.length){
            bidId = bidId + randomBytes[i];
            i = i + 1;
        }
        const driverId = await AsyncStorage.getItem('driverLicense');
        this.setState({bidId: bidId});
        this.setState({driverId: driverId});

    }

    componentDidUpdate(){
        //console.log(this.state);
    }

    _navigate = () => {
        let param = this.state;
        if(bidsContainer.length > 0){
            alert('')
        } else if(this.state.amount === null || this.state.amount === ' ' || this.state.amount === ' '){
            alert('Please add your price');
        }
        else{
            Actions.bidProcess({jobDetails: param});
        }
    }

    render(){
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const jobDetails = this.props.jobDetails;
        return(
            <View
                style={styles.container}>
                <ScrollView contentContainerStyle={{padding:15}}>
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
                            <Text style={styles.dateStyle}>{new Date(jobDetails.pickUp.time * 1000).getDate() + ' ' + months[new Date(jobDetails.pickUp.time * 1000).getMonth()] + ' ' + new Date(jobDetails.pickUp.time * 1000).getFullYear() + ', ' + new Date(jobDetails.pickUp.time * 1000).getHours() + ':' + new Date(jobDetails.pickUp.time * 1000).getMinutes()}</Text>
                        </View>
                        <View style={styles.locView}>
                            <Entypo style={styles.locIcon} size={17} name='circle'/>
                            <Text>{jobDetails.dropOff.address}</Text>
                        </View>
                        <View style={styles.locView}>
                            <View style={{
                            marginLeft:7}}/>
                            <Text style={styles.dateStyle}>{new Date(jobDetails.dropOff.Time * 1000).getDate() + ' ' + months[new Date(jobDetails.dropOff.Time * 1000).getMonth()] + ' ' + new Date(jobDetails.dropOff.Time * 1000).getFullYear() + ', ' + new Date(jobDetails.dropOff.Time * 1000).getHours() + ':' + new Date(jobDetails.dropOff.Time * 1000).getMinutes()}</Text>
                        </View>
                    </View>
                </ScrollView>
                {/** add price input and bid button */}
                <View
                    style={styles.bidContainer}
                >
                    <TextInput 
                        placeholder='Your price in GHS'
                        style={styles.bidInput}
                        onChangeText={(amount)=> this.setState({amount})}
                        value={this.state.amount}
                        keyboardType='decimal-pad'
                    />
                    <TouchableOpacity
                        style={styles.bidButton}
                        onPress={this._navigate}
                    >
                        <Text 
                            style={styles.bidButtonText}
                         >
                            Place Bid
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default ScrollContainer;

