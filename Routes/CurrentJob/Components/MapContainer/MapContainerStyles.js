import { StyleSheet } from "react-native";
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get("window");

const viewHeight = (height / 2) - Constants.statusBarHeight;

const styles = {
	container:{
		flex:1,
		justifyContent:"center",
		alignItems:"center",
	},
	map:{
		height: viewHeight,
		//...StyleSheet.absoluteFillObject
	}
}

export default styles;