import { connect } from "react-redux";
import CurrentJob from "../Components/CurrentJob";
import {

} from "../Modules/CurrentJob";
//states from modules home.js
const mapStateToProps = (state) => ({
	
});

const mapActionCreators = {
	region: state.driverhome.region
};
export default connect(mapStateToProps, mapActionCreators)(CurrentJob);