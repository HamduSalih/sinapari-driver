import { connect } from "react-redux";
import RegProcess from "../Components/RegProcess";
import {
	registerUser
} from "../Modules/RegProcess";
//states from modules home.js
const mapStateToProps = (state) => ({
	UserData: state.regprocess.UserData || {}
});

const mapActionCreators = {
	registerUser
};
export default connect(mapStateToProps, mapActionCreators)(RegProcess);