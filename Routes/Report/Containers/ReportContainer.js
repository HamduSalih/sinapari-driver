import { connect } from "react-redux";
import Report from "../Components/Report";
import {
    sendReport
} from "../Modules/Report";
//states from modules home.js
const mapStateToProps = (state) => ({
    userData: state.driverhome.userData || {}
});

const mapActionCreators = {
    sendReport
};
export default connect(mapStateToProps, mapActionCreators)(Report);