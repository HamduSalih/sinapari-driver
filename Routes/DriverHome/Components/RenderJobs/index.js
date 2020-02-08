import React from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

const RenderJobs = ({allJobs}) => {
        var jobStore = Object.entries(allJobs);
    return(
        <SafeAreaView style = {styles.container}>
            <ScrollView style = {styles.scrollView}>        
                <Text style={{fontSize:30, position:'absolute'}}>{jobStore[0][1].client}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
});

export default RenderJobs;