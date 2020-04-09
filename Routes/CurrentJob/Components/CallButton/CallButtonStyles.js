import React from 'react';
import { Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window');

const iconTopSpace = (5/100) * height
const iconLeftSpace = (90/100) * width

const styles = {
    iconButton:{
        position: 'absolute',
        top: iconTopSpace,
        left: iconLeftSpace
    }
}

export default styles