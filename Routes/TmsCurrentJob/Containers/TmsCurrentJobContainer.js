import { connect } from "react-redux";
import TmsCurrentJob from "../Components/TmsCurrentJob";
import {
} from "../Modules/TmsCurrentJob";
//states from modules home.js
const mapStateToProps = (state) => ({
});

const mapActionCreators = {
};
export default connect(mapStateToProps, mapActionCreators)(TmsCurrentJob);