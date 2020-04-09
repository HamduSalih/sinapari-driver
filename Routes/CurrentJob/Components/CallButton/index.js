import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import styles from './CallButtonStyles'

const CallButton = () => {
    return(
        <View>
            <MaterialIcons 
                size={50} 
                name='call'
                color={'#fff'}
                onPress = {() => Actions.addJob()}
                style={styles.iconButton}
            />
        </View>
    )
}

export default CallButton;