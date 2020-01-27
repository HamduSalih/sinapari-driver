import React, { Component } from 'react';
import { StyleSheet, 
        Text, 
        View, 
        TextInput,
        TouchableOpacity,
        Picker,
        Image,
        AsyncStorage } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';
import * as firebase from 'firebase';

const sinaLogo = require("../../../assets/img/sinapari_blue.png");
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
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

export default class SignInThree extends Component{
    static navigationOptions = {
        headerShown: false
    }

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        const { navigation } = this.props;
        let old_state = navigation.getParam('param', '');
        this.state = old_state;
    }

    _navigate = (page) => {
        let param = this.state;
        this.props.navigation.navigate(page, {param});
    }

    _upload = async(img_src) => {
        //const response = await fetch(img_src);
        //const blob = await response.blob();
        var ref = firebase.storage().ref().child(this.state.driver_license.toString() + '.jpg');
        //ref.getMetadata().then(function(metadata){
         //   console.log(metadata);
        //});
        //ref.getDownloadURL().then(function(url){
          //  console.log(url);
        //})
        //return ref.put(blob);
    }

    render(){   
        let { picture } = this.state;   
        let g = 'https://firebasestorage.googleapis.com/v0/b/sinapari-6dbbd.appspot.com/o/123.jpg?alt=media&token=0597b22e-fefd-4942-bdb4-8bc688d5319c';
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.userButton}
                    onPress={this._pickImage}
                >
                    <Text style={styles.buttonText}>Pick an Image</Text>
                </TouchableOpacity>
                {
                    picture && 
                    <Image source={{uri: picture}} style={{width: 200, height:200, padding:10}}/>
                }
                <Image source={{uri: g}} style={{width: 200, height:200, padding:10}}/>
                <TextInput 
                    style={styles.input}
                    placeholder='Identification Number'
                    onChangeText={(id_number)=> this.setState({id_number})}
                    value={this.state.id_number}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Driver's License"
                    onChangeText={(driver_license)=> this.setState({driver_license})}
                    value={this.state.driver_license}
                />
                <Picker
                    selectedValue={this.state.affiliate}
                    style={styles.input}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({affiliate: itemValue})
                    }>
                        <Picker.Item label="Affiliation" value="" />
                        <Picker.Item label="Independent" value="independent" />
                        <Picker.Item label="Under Partner" value="under_partner" />
                </Picker>
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.userButton}
                        onPress={ this._upload.bind(this, this.state.picture) }>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }

    componentDidMount(){
        this.getPermissionAsync();
        console.log('hi');
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      }
    
      _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ picture: result.uri });
        }
      };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b2b2ff'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff'
   },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    input: {
        width: '90%',
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
        borderRadius: 5
    },
    userButton: {
        backgroundColor: '#0000ff',
        padding: 15,
        width: '45%',
        borderRadius: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff'

    },
    statusBar: {
        backgroundColor: "#C2185B",
        height: Constants.statusBarHeight,
    }
})