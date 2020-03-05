import { connect } from "react-redux";
import CurrentJob from "../Components/CurrentJob";
import {
	getDriverLocation,
	updateBidTripStatus
} from "../Modules/CurrentJob";
//states from modules home.js
const mapStateToProps = (state) => ({
	region: state.driverhome.region,
	liveJob: state.currentJob.liveJob
});

const mapActionCreators = {
	getDriverLocation,
	updateBidTripStatus
};
export default connect(mapStateToProps, mapActionCreators)(CurrentJob);