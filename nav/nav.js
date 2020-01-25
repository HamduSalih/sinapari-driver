import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../Routes/LoginScreen/Components/LoginScreen.js';
import Root from '../main';
import AuthLoadScreen from '../Routes/AuthScreens/AuthLoadScreen';
import SignInOne from '../Routes/SignInOne/Components/SignInOne';
import SignInTwo from '../Routes/SignInTwo/Components/SignInTwo';

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginScreen
    }
})

const AppStack = createStackNavigator({
    /*Login: {
        screen: LoginScreen
    },*/
    Root: {
        screen: Root
    },
    SignInOne: {
        screen: SignInOne
    },
    SignInTwo: {
        screen: SignInTwo
    }
},
{
    //initialRouteName: 'Login',
});

export default Screens = createAppContainer(createSwitchNavigator({
    AuthLoading: {
        screen: AuthLoadScreen
    },
    App: AppStack,
    Auth: AuthStack
},
{
    initialRouteName: 'AuthLoading'
}));