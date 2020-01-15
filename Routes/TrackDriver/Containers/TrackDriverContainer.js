import { connect } from "react-redux";
import Home from "../Components/Home";
import {
	getCurrentLocation
} from "../Modules/TrackDriver";
//states from modules home.js
const mapStateToProps = (state) => ({
	region: state.home.region
});

const mapActionCreators = {
	getCurrentLocation
};
export default connect(mapStateToProps, mapActionCreators)(Home);