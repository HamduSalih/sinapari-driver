import { connect } from "react-redux";
import Home from "../Components/SignInThree";
import {
	
} from "../Modules/SignInThree";
//states from modules home.js
const mapStateToProps = (state) => ({
	
});

const mapActionCreators = {
	
};
export default connect(mapStateToProps, mapActionCreators)(Home);