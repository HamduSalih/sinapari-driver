import React from 'react';
import { Text } from 'react-native';

const RenderJobs = ({allJobs}) => {
        var jobStore = Object.entries(allJobs);
    return(
        <Text style={{fontSize:30, position:'absolute'}}>{jobStore[0][1].client}</Text>
    );
}

export default RenderJobs;