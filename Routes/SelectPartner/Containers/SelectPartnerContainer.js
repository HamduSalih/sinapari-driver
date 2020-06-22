import { connect } from "react-redux";
import SelectPartner from "../Components/SelectPartner";
import {
    getAffiliates
} from "../Modules/SelectPartner";
//states from modules home.js
const mapStateToProps = (state) => ({
    affiliates: state.selectPartner.affiliates || []
});

const mapActionCreators = {
    getAffiliates
};
export default connect(mapStateToProps, mapActionCreators)(SelectPartner);