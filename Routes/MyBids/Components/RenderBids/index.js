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
                <View style={styles.locView}>
                    <Text style={{width: '50%'}}>{title.goodsDescription}</Text>
                    <Text style={{width: '50%', textAlign: 'right', marginBottom: 10}}>{title.status}</Text>
                </View>
                <View>
                    <Text>Client: { title.client }</Text>
                    <Text>Amount Bid: { title.amount }</Text>
                </View>
                <View style = {styles.locView}>
                    <FontAwesome style={styles.locIcon} size={20} name='dot-circle-o'/>
                    <Text style={styles.locText}>{title.pickUpAddress.address}</Text>
                </View>
                <View style={styles.locView}>
                    <View style={{ 
                      height:35,
                      borderLeftWidth:2, 
                      marginLeft:7}}/>
                    <Text style={styles.dateStyle}>{new Date(title.pickUpAddress.time.seconds * 1000).getDate() + ' ' + months[new Date(title.pickUpAddress.time.seconds * 1000).getMonth()] + ' ' + new Date(title.pickUpAddress.time.seconds * 1000).getFullYear() + ', ' + new Date(title.pickUpAddress.time.seconds * 1000).getHours() + ':' + new Date(title.pickUpAddress.time.seconds * 1000).getMinutes()}</Text>
                  </View>
                  <View style={styles.locView}>
                    <Entypo style={styles.locIcon} size={17} name='circle'/>
                    <Text>{title.dropOffAddress.address}</Text>
                  </View>
                  <View style={styles.locView}>
                    <View style={{
                      marginLeft:7}}/>
                      <Text style={styles.dateStyle}>{new Date(title.dropOffAddress.time.seconds * 1000).getDate() + ' ' + months[new Date(title.dropOffAddress.time.seconds * 1000).getMonth()] + ' ' + new Date(title.dropOffAddress.time.seconds * 1000).getFullYear() + ', ' + new Date(title.dropOffAddress.time.seconds * 1000).getHours() + ':' + new Date(title.dropOffAddress.time.seconds * 1000).getMinutes()}</Text>
                  </View> 
              </TouchableOpacity>
            </Card>
          );
        }
    return(
        <SafeAreaView style={styles.container}>
        <View style={{paddingTop:10, paddingHorizontal:15}}>
          <Text style={styles.headerText}>
            My Bids
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