import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';
import styles from './RenderBidsStyles';

const RenderBids = ({allBids}) => {
    var DATA = allBids;
        function Item({ title }) {
          function _navigate(param){
            Actions.driverjobdetails({jobDetails: param});
          }
          return (
            <Card>
              <TouchableOpacity>
              
              </TouchableOpacity>
            </Card>
          );
        }
    return(
        <SafeAreaView style={styles.container}>
        <View style={{paddingTop:10, paddingHorizontal:15}}>
          <Text style={styles.headerText}>
            Available Jobs
          </Text>
        </View>
        <FlatList 
          data={DATA}
          renderItem={({item})=>
            <Item title={item}/>
          }
        />
      </SafeAreaView>
    );
}

export default RenderBids;