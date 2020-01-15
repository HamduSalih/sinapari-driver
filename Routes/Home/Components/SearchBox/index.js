//this is a stateless component
import React from "react";
import { Text } from "react-native";
import { View, InputGroup, Input } from 'native-base';
import styles from './SearchBoxStyles';
import { Ionicons } from '@expo/vector-icons';

//pass getinputdata function from modules/home
export const SearchBox = ({getInputData, toggleSearchResultModal, getAddressPredictions})=> {
	function handleInput(key, val){
		//pass values to getinput as objects
		getInputData({
			key,
			value:val
		});
	}
  return(
    <View style={styles.searchBox}>
				<View style={styles.inputWrapper}>
					<Text style={styles.label}>PICK UP</Text>
					<InputGroup>
						<Ionicons name="md-search" size={15} color="blue"/>
						<Input
							onFocus={()=>toggleSearchResultModal('pickUp')} 
							style={styles.inputSearch}
							placeholder="Choose pick-up location"
							onChangeText={handleInput.bind(this, 'pickUp')}
						/>
					</InputGroup>
				</View>
				<View style={styles.secondInputWrapper}>
					<Text style={styles.label}>DROP-OFF</Text>
					<InputGroup>
						<Ionicons name="md-search" size={15} color="blue"/>
						<Input
							onFocus={()=>toggleSearchResultModal('dropOff')} 
							style={styles.inputSearch}
							placeholder="Choose drop-off location"
							onChangeText={handleInput.bind(this, 'dropOff')}
						/>
					</InputGroup>
				</View>
			</View>
  )
}

export default SearchBox;