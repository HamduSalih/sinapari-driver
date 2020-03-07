import React from 'react';
import { 
    View,
    Text, 
    TextInput,
    TouchableOpacity,
    Picker,
    ScrollView } from 'react-native'

import styles from './FormComponentsStyles'

const FormComponents = () => {
    return(
        <View style={{flex: 1, padding: 10}}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View>
                    <Text>Phone Number</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Affiliate</Text>
                    <Picker />
                </View>
                <View>
                    <View>
                        <Text>Affiliate</Text>
                        <Picker />
                    </View>
                    <View>
                        <Text>Affiliate</Text>
                        <Picker />
                    </View>
                </View>
                <View>
                    <Text>Affiliate</Text>
                    <Picker />
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default FormComponents;