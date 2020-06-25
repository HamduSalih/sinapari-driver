import { connect } from "react-redux";
import TmsReport from "../Components/TmsReport";
import {
    sendReport
} from "../Modules/TmsReport";
//states from modules home.js
const mapStateToProps = (state) => ({
    userData: state.tmsHome.userData || {}
});

const mapActionCreators = {
    sendReport
};
export default connect(mapStateToProps, mapActionCreators)(TmsReport);