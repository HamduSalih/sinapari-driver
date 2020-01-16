import React from "react";
import {Text, Image} from "react-native";
import { View, Button} from "native-base";

import styles from "./DriverStyles";

const DriverFound = ({driverImage})=>{
    const { profilePic } = driverImage || '';
    return(
        <View style={styles.findDriverContainer}>
            <View style={styles.content}>
                <Text>Yip! Driver Found</Text>
                <Image resizeMode='contain' style={styles.driverPic} source={{uri:profilePic}} />
            </View>
        </View>
    )
}

export default DriverFound;