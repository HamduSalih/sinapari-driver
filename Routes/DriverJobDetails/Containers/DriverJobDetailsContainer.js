import { connect } from "react-redux";
import DriverJobDetails from "../Components/DriverJobDetails";
import {
	
} from "../Modules/DriverJobDetails";
//states from modules home.js
const mapStateToProps = (state) => ({
	userData: state.driverhome.userData,
	region: state.driverhome.region
});

const mapActionCreators = {
	
};
export default connect(mapStateToProps, mapActionCreators)(DriverJobDetails);