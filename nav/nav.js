import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../Routes/LoginScreen/Components/LoginScreen.js';
import Root from '../main';
import AuthLoadScreen from '../Routes/AuthScreens/AuthLoadScreen';
import SignInOne from '../Routes/SignInOne/Components/SignInOne';
import SignInTwo from '../Routes/SignInTwo/Components/SignInTwo';
import SignInThree from '../Routes/SignInThree/Components/SignInThree';
import RegProcess from '../Routes/RegProcess/Components/RegProcess';

const AuthStack = createStackNavigator({
    Login: LoginScreen
});

const AppStack = createStackNavigator({
    Root: Root,
    SignInOne: SignInOne,
    SignInTwo: SignInTwo,
    SignInThree:SignInThree,
    RegProcess:RegProcess
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