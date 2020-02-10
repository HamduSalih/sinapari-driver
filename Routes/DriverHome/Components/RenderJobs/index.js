import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import Constants from 'expo-constants';

const RenderJobs = ({allJobs}) => {
        var jobStore = Object.entries(allJobs);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return(
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {
            jobStore.map((jobInfo, index)=>
              <Card key = {index}>
                <Text>{jobInfo[1].distance}</Text>
                <Text>{jobInfo[1].pickUp.address}</Text>
                <Text>{new Date(jobInfo[1].pickUp.time.seconds * 1000).getDate() + ' ' + months[new Date(jobInfo[1].pickUp.time.seconds * 1000).getMonth()] + ' ' + new Date(jobInfo[1].pickUp.time.seconds * 1000).getFullYear()}</Text>
                <Text>{jobInfo[1].dropOff.address}</Text>
                <Text>{new Date(jobInfo[1].dropOff.Time.seconds * 1000).getDate() + ' ' + months[new Date(jobInfo[1].dropOff.Time.seconds * 1000).getMonth()] + ' ' + new Date(jobInfo[1].dropOff.Time.seconds * 1000).getFullYear()}</Text>
              </Card>
            )
          }
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#C2185B',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default RenderJobs;