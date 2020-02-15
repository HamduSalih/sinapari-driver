import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { View } from 'native-base';

const ScrollContainer = ({jobDetails}) => {
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollStyle}>
                <Text>Job Details</Text>
                <View>
                    <Text>TRUCK/TRAILER TYPE</Text>
    <Text>{jobDetails.trailerType} {jobDetails.vehicleType}</Text>
                </View>
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
    }
});

export default ScrollContainer;

