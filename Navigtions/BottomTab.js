import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Footer, FooterTab } from 'native-base';

export default class BottomTab extends React.Component {
    _navigate = (scenceLoc) => {
        Actions[scenceLoc].call({userId: this.state.userId});
        //alert(this.props.userData.driver_license)
    }

    componentDidMount(){
        async function getToken () {
            const driverLicense = await AsyncStorage.getItem('driverLicense');
            this.setState({ userId: driverLicense })
        }

        getToken();
    }
  render() {

    //tab bar items
    const tabs = [{
        title:'Home',
        subTitle:'',
        icon:'',
        sceneKey: 'driverhome'
    },
    {
        title:'My Bids',
        subTitle:'',
        icon:'',
        sceneKey: 'myBids'
    },
    {
        title:'Profile',
        subTitle:'',
        icon:'',
        sceneKey: 'driverProfile'
    }
    ];

    return (
        <Footer>
            <FooterTab>
                {
                    tabs.map((obj, index)=>{
                        return(
                            <TouchableOpacity key={index}
                                onPress={ this._navigate.bind(this, obj.sceneKey) }    
                            >
                                <Text style={{fontSize:12}}>{obj.title}</Text>
                                <Text style={styles.subText}>{obj.subTitle}</Text>
                            </TouchableOpacity>
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
        backgroundColor:'#fff'
    },
    subText:{
        fontSize:8,
        textAlign: 'center'
    }
})