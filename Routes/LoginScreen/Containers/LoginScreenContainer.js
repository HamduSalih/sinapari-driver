import { connect } from "react-redux";
import Home from "../Components/LoginScreen";
import {
	
} from "../Modules/LoginScreen";
//states from modules home.js
const mapStateToProps = (state) => ({
	
});

const mapActionCreators = {
	
};
export default connect(mapStateToProps, mapActionCreators)(Home);