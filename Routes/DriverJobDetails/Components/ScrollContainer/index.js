import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { View } from 'native-base';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

const ScrollContainer = ({jobDetails}) => {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return(
        <View style={styles.container}>
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
                {/** add price input and bid button */}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollStyle:{
        padding: 10
    },
    distanceContainer:{
        flexDirection: 'row',
        marginBottom: 20
    },
    viewContainer:{
        marginBottom: 20
    },
    distanceHeader:{
        marginBottom: 5,
        fontSize: 12
    },
    distanceFigure:{
        fontSize: 20
    },
    locView: {
        flexDirection: 'row',
      },
      locIcon: {
        marginRight: 10,
      },
      locText: {
        fontWeight: 'bold'
      },
      headerText:{
        fontSize: 18,
        borderWidth: 1,
        padding: 5,
        backgroundColor:'#eef0ef',
        borderColor: 'grey',
        width: '50%'
      },
      dateStyle:{
        fontSize: 12,
        marginLeft: 18,
        fontWeight: '100'
      }
});

export default ScrollContainer;

