import { connect } from "react-redux";
import TmsDriverProfile from "../Components/TmsDriverProfile";
import {
	updateProfile
} from "../Modules/TmsDriverProfile";
//states from modules home.js
const mapStateToProps = (state) => ({
	userData: state.tmsHome.userData
});

const mapActionCreators = {
	updateProfile
};
export default connect(mapStateToProps, mapActionCreators)(TmsDriverProfile);