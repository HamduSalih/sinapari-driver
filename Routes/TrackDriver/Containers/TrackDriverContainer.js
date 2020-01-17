import { connect } from "react-redux";
import TrackDriver from "../Components/TrackDriver";
import {
	getCurrentLocation,
	getDriverInfo
} from "../Modules/TrackDriver";
//states from modules home.js
const mapStateToProps = (state) => ({
	region: state.trackDriver.region,
	selectedAddress: state.home.selectedAddress || {},
	driverInfo: state.trackDriver.driverInfo || {},
	driverLocation: state.trackDriver.driverLocation 
});

const mapActionCreators = {
	getCurrentLocation,
	getDriverInfo
};
export default connect(mapStateToProps, mapActionCreators)(TrackDriver);