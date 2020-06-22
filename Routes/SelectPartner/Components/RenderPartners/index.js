import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';
import { Button } from 'native-base'

const RenderPartners = ({affiliates, userData}) => {
        var DATA = affiliates;
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        
        function Item({ title }) {
            var newUserData = {
                affiliate: userData.affiliate,
                age: userData.age,
                driver_license: userData.driver_license,
                fullname: userData.fullname,
                id_number: userData.id_number,
                password: userData.password,
                phone_number: userData.phone_number,
                picture: userData.picture,
                rating: userData.rating,
                trailer_length: userData.trailer_length,
                trailer_type: userData.trailer_type,
                truck_model: userData.truck_model,
                truck_number: userData.truck_number,
                username: userData.username,
                company: title.companyName
            }
          function _navigate(param){
              Actions.regprocess({userData: param});
          }
          return (
            <Card style={{flex:1}}>
              <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    width: '100%'
                    }}>
                    <View style={{
                        width:'65%'
                    }}>
                        <Text>{title.companyName}</Text>
                        <Text>{title.fullname}</Text>
                    </View>

                    <View style={{
                        width:'35%'
                    }}>
                        <Button style={{
                            backgroundColor:'#141d48'
                        }}
                            onPress={()=>{_navigate(newUserData)}}
                        >
                        <Text style={{textAlign:'center', width:'100%', color:'white'}}>Select</Text>
                        </Button>
                    </View>
                </View>
            </Card>
          );
        }
    return(
      <SafeAreaView style={styles.container}>
         <FlatList 
          data={DATA}
          renderItem={({item})=>
            <Item title={item}/>
          }
        />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141d48'
  },
  scrollView: {
    backgroundColor: '#C2185B',
  },
  text: {
    fontSize: 42,
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
    width: '100%'
  },
  dateStyle:{
    fontSize: 12,
    marginLeft: 18,
    fontWeight: '100'
  }
});

export default RenderPartners;