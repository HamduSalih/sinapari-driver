import { connect } from "react-redux";
import TmsCurrentJob from "../Components/TmsCurrentJob";
import {
    updateBidTripStatus
} from "../Modules/TmsCurrentJob";
//states from modules home.js
const mapStateToProps = (state) => ({
    jobs: state.tmsHome.jobs || [],
    region: state.tmsHome.region
});

const mapActionCreators = {
    updateBidTripStatus
};
export default connect(mapStateToProps, mapActionCreators)(TmsCurrentJob);