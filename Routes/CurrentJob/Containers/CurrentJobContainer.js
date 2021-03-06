import { connect } from "react-redux";
import CurrentJob from "../Components/CurrentJob";
import {
	updateBidTripStatus
} from "../Modules/CurrentJob";
//states from modules home.js
const mapStateToProps = (state) => ({
	region: state.driverhome.region,
});

const mapActionCreators = {
	updateBidTripStatus
};
export default connect(mapStateToProps, mapActionCreators)(CurrentJob);