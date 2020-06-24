import { connect } from "react-redux";
import TmsHome from "../Components/TmsHome";
import {
    getUserData,
    getDriverLocation,
    getDriversJob
} from "../Modules/TmsHome";
//states from modules home.js
const mapStateToProps = (state) => ({
    userData: state.tmsHome.userData || {},
    region: state.tmsHome.region || {},
    jobs: state.tmsHome.jobs || []
});

const mapActionCreators = {
    getUserData,
    getDriverLocation,
    getDriversJob
};
export default connect(mapStateToProps, mapActionCreators)(TmsHome);