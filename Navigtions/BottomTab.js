import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Footer, FooterTab, Button } from 'native-base';
import {MaterialIcons} from '@expo/vector-icons'

export default class BottomTab extends React.Component {
    _navigate = async (scenceLoc) => {
        try {
            const driverLicense = await AsyncStorage.getItem('driverLicense');
            if (driverLicense !== null){
                console.log(driverLicense)
                Actions[scenceLoc].call();
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount(){
       
    }
  render() {

    //tab bar items
    const tabs = [{
        title:'Home',
        subTitle:'',
        icon:'home',
        sceneKey: 'driverBotTab'
    },
    {
        title:'My Bids',
        subTitle:'',
        icon:'monetization-on',
        sceneKey: 'myBids'
    },
    {
        title:'Profile',
        subTitle:'',
        icon:'person',
        sceneKey: 'driverProfile'
    }
    ];

    return (
        <Footer>
            <FooterTab style={{backgroundColor: 'white'}}>
                {
                    tabs.map((obj, index)=>{
                        return(
                            <Button key={index}
                                onPress={ this._navigate.bind(this, obj.sceneKey) }    
                            >
                                <MaterialIcons size={20} name={obj.icon} color={'#141d48'} />
                                <Text style={{fontSize:12}}>{obj.title}</Text>
                            </Button>
                        )
                    })
                }
            </FooterTab>
        </Footer>
    );
  }
}

const styles = StyleSheet.create({
    footerContainer:{
        backgroundColor:'white'
    },
    subText:{
        fontSize:8,
        textAlign: 'center'
    }
})