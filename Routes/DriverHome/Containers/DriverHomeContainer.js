import { connect } from "react-redux";
import DriverHome from "../Components/DriverHome";
import {
	getDriverLocation,
	getUserData,
	getAllJobs
} from "../Modules/DriverHome";
//states from modules home.js
const mapStateToProps = (state) => ({
	region: state.driverhome.region,
	userData: state.driverhome.userData,
	userAccount: state.driverhome.userAccount,
	userJobs: state.driverhome.userJobs,
	allJobs: state.driverhome.allJobs,
});

const mapActionCreators = {
	getDriverLocation,
	getUserData,
	getAllJobs
};
export default connect(mapStateToProps, mapActionCreators)(DriverHome);