import { connect } from "react-redux";
import DriverHome from "../Components/DriverHome";
import {
	getDriverLocation,
	getUserData
} from "../Modules/DriverHome";
//states from modules home.js
const mapStateToProps = (state) => ({
	region: state.driverhome.region,
	userData: state.driverhome.userData
});

const mapActionCreators = {
	getDriverLocation,
	getUserData
};
export default connect(mapStateToProps, mapActionCreators)(DriverHome);