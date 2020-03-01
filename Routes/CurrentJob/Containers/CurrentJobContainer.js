import { connect } from "react-redux";
import CurrentJob from "../Components/CurrentJob";
import {
	createLiveJob
} from "../Modules/CurrentJob";
//states from modules home.js
const mapStateToProps = (state) => ({
	region: state.driverhome.region,
	liveJob: state.currentJob.liveJob
});

const mapActionCreators = {
	createLiveJob
};
export default connect(mapStateToProps, mapActionCreators)(CurrentJob);