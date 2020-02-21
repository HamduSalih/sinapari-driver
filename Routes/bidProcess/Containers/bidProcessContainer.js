import { connect } from "react-redux";
import LoginScreen from "../Components/LoginScreen";
import {
	registerUser
} from "../Modules/LoginScreen";
//states from modules home.js
const mapStateToProps = (state) => ({
	UserData: state.login.UserData
});

const mapActionCreators = {
	registerUser
};
export default connect(mapStateToProps, mapActionCreators)(LoginScreen);