import React from "react";
import {Text} from "react-native";
import { View, Button} from "native-base";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from "./FindDriverStyles.js";

var Spinner = require('react-native-spinkit');

const FindDriver = ({selectedAddress})=>{
  const { LoadAddress, DropAddress } = selectedAddress || {};
    return(
        <View style={styles.findDriverContainer}>

            <View style={styles.content}>
                <Text style={styles.text}>Processing your request</Text>
                <FontAwesome style={styles.locationIcon} name='map-marker' />

                <View style={styles.pickup}>
                    <Text>{ LoadAddress.name }</Text>
                </View>

                <FontAwesome style={styles.toArrow} name='long-arrow-down' />
                <View style={styles.dropoff}>
                    <Text>{ DropAddress.name }</Text>
                </View>

                <View>
                    <Text style={styles.termsText}>By booking you confirm that you accept out T and C</Text>
                    <Button style={styles.cancelBtn}>
                        <Text style={styles.cancelBtnText}>Cancel</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default FindDriver;