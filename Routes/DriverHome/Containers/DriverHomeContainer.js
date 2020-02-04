import { connect } from "react-redux";
import DriverHome from "../Components/DriverHome";
import {
	getDriverLocation
} from "../Modules/DriverHome";
//states from modules home.js
const mapStateToProps = (state) => ({
	region: state.driverhome.getDriverLocation
});

const mapActionCreators = {
	getDriverLocation
};
export default connect(mapStateToProps, mapActionCreators)(DriverHome);