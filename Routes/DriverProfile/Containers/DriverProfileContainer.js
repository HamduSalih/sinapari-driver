import { connect } from "react-redux";
import DriverProfile from "../Components/DriverProfile";
import {
	updateProfile
} from "../Modules/DriverProfile";
//states from modules home.js
const mapStateToProps = (state) => ({
	userData: state.driverhome.userData
});

const mapActionCreators = {
	updateProfile
};
export default connect(mapStateToProps, mapActionCreators)(DriverProfile);