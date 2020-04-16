import React from 'react';
import { Dimensions } from 'react-native'
const {width, height} = Dimensions.get('window');

const iconTopSpace = (3/100) * height
const iconLeftSpace = (85/100) * width

const styles = {
    iconButton:{
        position: 'absolute',
        top: iconTopSpace,
        left: iconLeftSpace,
        backgroundColor: '#141d48',
        borderRadius: 10
    }
}

export default styles