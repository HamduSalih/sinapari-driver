import { connect } from "react-redux";
import TrackDriver from "../Components/TrackDriver";
import {
	getCurrentLocation,
	getDriverInfo,
	getDriverLocation,
	getDistanceFromDriver
} from "../Modules/TrackDriver";
//states from modules home.js
const mapStateToProps = (state) => ({
	region: state.trackDriver.region,
	selectedAddress: state.home.selectedAddress || {},
	driverInfo: state.trackDriver.driverInfo || {},
	driverLocation: state.trackDriver.driverLocation,
	showDriverFound:state.trackDriver.showDriverFound,
	showCarMarker:state.trackDriver.showCarMarker,
	distanceFromDriver:state.trackDriver.distanceFromDriver || {} 
});

const mapActionCreators = {
	getCurrentLocation,
	getDriverInfo,
	getDriverLocation,
	getDistanceFromDriver
};
export default connect(mapStateToProps, mapActionCreators)(TrackDriver);