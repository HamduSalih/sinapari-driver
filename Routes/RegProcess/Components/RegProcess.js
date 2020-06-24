import React from 'react';
import { View, 
        ActivityIndicator, 
        Text,
        ImageBackground,
        AsyncStorage} from 'react-native';
import styles from './RegProcessStyles';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBICeaakAkGPlVOVjObj7BDaoZvmgibDA8",
    authDomain: "sinapari-6dbbd.firebaseapp.com",
    databaseURL: "https://sinapari-6dbbd.firebaseio.com",
    projectId: "sinapari-6dbbd",
    storageBucket: "sinapari-6dbbd.appspot.com",
    messagingSenderId: "501482455468",
    appId: "1:501482455468:web:4a21086028e2e8237fba09",
    measurementId: "G-Y9TJXZG88L"
  };
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const database = firebase.firestore();



const sinabg = require('../../../assets/img/sina-bg.jpg')
const sinalogo = require('../../../assets/img/sinalogo.jpg')

export default class RegProcess extends React.Component{
    static navigationOptions = {
        headerShown: false
    }

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        let old_state = this.props.userData;
        this.state = old_state;
    }
    //first 
    _firstRegister = async() => {
        const userData = this.state;
        const userAccount = {
            number: this.state.phone_number,
            total_income: null,
            amountIn: null,
            amountOut: null
        };
        const userJobsInfo = {
            distanceTravelled: null,
            jobCompleted: null,
            reports: null,
            status: 'inactive'
        };
        

        if(userData.affiliate == 'independent'){
            const locations = {
                id: this.state.driver_license,
                name: this.state.fullname,
                lat: null,
                long: null,
                geocode: null
            }
            database.collection('drivers').doc(this.state.driver_license).set(userData)
            .then(()=>{
                database.collection('accounts').doc(this.state.driver_license).set(userAccount);
            })
            .then(()=>{
                database.collection('jobsInfo').doc(this.state.driver_license).set(userJobsInfo);
            })
            .then(()=>{
                database.collection('locations').doc(this.state.driver_license).set(locations);
            })
            .then(async() => {
                await AsyncStorage.setItem('isLoggedIn', '1');
                await AsyncStorage.setItem('driverLicense', this.state.driver_license);
                await AsyncStorage.setItem('userType', 'independent')
            })
            .then(()=>{
                Actions.driverhome({userId: this.state.driver_license});
            })
            .catch((err)=>{
                console.log(err)
            });
        }else if(userData.affiliate == 'under_partner'){
            const locations = {
                id: this.state.driver_license,
                name: this.state.fullname,
                lat: null,
                long: null,
                geocode: null,
                company: userData.company
            }
            database.collection('tms_drivers').doc(this.state.driver_license).set(userData)
            .then(()=>{
                database.collection('accounts').doc(this.state.driver_license).set(userAccount);
            })
            .then(()=>{
                database.collection('jobsInfo').doc(this.state.driver_license).set(userJobsInfo);
            })
            .then(()=>{
                database.collection('locations').doc(this.state.driver_license).set(locations);
            })
            .then(async() => {
                await AsyncStorage.setItem('isLoggedIn', '1');
                await AsyncStorage.setItem('driverLicense', this.state.driver_license);
                await AsyncStorage.setItem('userType', 'under_partner')
            })
            .then(()=>{
                Actions.tmsHome({userId: this.state.driver_license});
            })
            .catch((err)=>{
                console.log(err)
            });
        }
    }

    componentDidMount() {
        //this._bootstrapAsync();
        //setTimeout(this._bootstrapAsync, 5000);
        //this.props.registerUser('Hamdu');
        this._firstRegister();
    }

    //fetch token from storage and navigate to appropriate screen

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('isLoggedIn');
        this.props.navigation.navigate( userToken !== '1' ? 'Auth' : 'App');
    }

    render(){
        return(
            <ImageBackground 
                source={sinabg} 
                style={styles.container}
                 >
                <ActivityIndicator size="large" color="#eef0ef"/>
                <Text style={{color:'white', padding:10}}>Please be patient as we get things ready</Text>
            </ImageBackground>
        )
    }
}