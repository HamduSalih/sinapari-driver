import { connect } from "react-redux";
import Home from "../Components/SignInOne";
import {
	
} from "../Modules/SignInOne";
//states from modules home.js
const mapStateToProps = (state) => ({
	
});

const mapActionCreators = {
	
};
export default connect(mapStateToProps, mapActionCreators)(Home);