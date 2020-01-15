import { connect } from "react-redux";
import Home from "../Components/Home";
import {
	getCurrentLocation,
	getInputData,
	getInputType,
	getAddressPredictions,
	getSelectedAddress,
	bookTruck,
	getNearByDrivers
} from "../Modules/Home";
//states from modules home.js
const mapStateToProps = (state) => ({
	region: state.home.region,
	inputData: state.home.inputData || {},
	resultTypes: state.home.resultTypes || {},
	predictions: state.home.predictions || [],
	fare: state.home.fare,
	booking: state.home.booking || {},
	nearByDrivers: state.home.nearByDrivers || [],
	selectedAddress:state.home.selectedAddress || {}
});

const mapActionCreators = {
	getCurrentLocation,
	getInputData,
	getInputType,
	getAddressPredictions,
	getSelectedAddress,
	bookTruck,
	getNearByDrivers
};
export default connect(mapStateToProps, mapActionCreators)(Home);