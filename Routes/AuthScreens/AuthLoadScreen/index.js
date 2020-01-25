import React from 'react';
import { View, 
        ActivityIndicator, 
        StatusBar,
        AsyncStorage } from 'react-native';
import styles from './AuthLoadScreenStyles';

export default class AuthLoadScreen extends React.Component{
    componentDidMount() {
        this._bootstrapAsync();
    }

    //fetch token from storage and navigate to appropriate screen

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('isLoggedIn');
        this.props.navigation.navigate( userToken !== '1' ? 'Auth' : 'App');
    }

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator/>
                <StatusBar barStyle='default' />
            </View>
        )
    }
}