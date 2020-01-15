//this is a stateless component
import React from "react";
import { Text } from "react-native";
import { View, List, ListItem, Left } from 'native-base';
import styles from './SearchResultsStyles';
import { MaterialIcons } from '@expo/vector-icons';

//pass getinputdata function from modules/home
export const SearchResults = ()=> {
	
  return(
    <View style={styles.searchResultsWrapper}>
        <List>
            <ListItem button avatar>
              <Left style={styles.leftContainer}>
                <MaterialIcons name="location-on" style={styles.leftIcon}/>
              </Left>
                <Text>List 1</Text>
            </ListItem>
            <ListItem>
                <Text>List 2</Text>
            </ListItem>
        </List>
                
	</View>
  )
}

export default SearchResults;