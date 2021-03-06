import { connect } from "react-redux";
import BidProcess from "../Components/BidProcess";
import {
	addBidToDb
} from "../Modules/BidProcess";
//states from modules home.js
const mapStateToProps = (state) => ({
	userData: state.driverhome.userData,
	bids: state.bidProcess.bids
});

const mapActionCreators = {
	addBidToDb
};
export default connect(mapStateToProps, mapActionCreators)(BidProcess);