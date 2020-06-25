import { combineReducers } from "redux";

import { LoginReducer as login } from '../Routes/LoginScreen/Modules/LoginScreen';
import { SignInOneReducer as signinone } from '../Routes/SignInOne/Modules/SignInOne';
import { SignInTwoReducer as signintwo } from '../Routes/SignInTwo/Modules/SignInTwo';
import { SignInThreeReducer as signinthree } from '../Routes/SignInThree/Modules/SignInThree';
import { RegProcessReducer as regprocess } from '../Routes/RegProcess/Modules/RegProcess';
import { DriverHomeReducer as driverhome } from '../Routes/DriverHome/Modules/DriverHome';
import { DriverJobDetailsReducer as driverjobdetails } from '../Routes/DriverJobDetails/Modules/DriverJobDetails';
import { BidProcessReducer as bidProcess } from '../Routes/bidProcess/Modules/BidProcess';
import { MyBidsReducer as myBids } from '../Routes/MyBids/Modules/MyBids';
import { CurrentJobReducer as currentJob } from '../Routes/CurrentJob/Modules/CurrentJob';
import { DriverProfileReducer as driverProfile } from '../Routes/DriverProfile/Modules/DriverProfile';
import { ReportReducer as report } from '../Routes/Report/Modules/Report';
import { SelectPartnerReducer as selectPartner } from '../Routes/SelectPartner/Modules/SelectPartner';
import { TmsHomeReducer as tmsHome } from '../Routes/TmsHome/Modules/TmsHome';
import { TmsCurrentJobReducer as tmsCurrentJob } from '../Routes/TmsCurrentJob/Modules/TmsCurrentJob';
import { TmsDriverProfileReducer as tmsDriverProfile } from '../Routes/TmsDriverProfile/Modules/TmsDriverProfile';
import { TmsReportReducer as tmsReport } from '../Routes/TmsReport/Modules/TmsReport';

export const makeRootReducer = () => {
	return combineReducers({
		login,
		signinone,
		signintwo,
		signinthree,
		regprocess,
		driverhome,
		driverjobdetails,
		bidProcess,
		myBids,
		currentJob,
		driverProfile,
		report,
		selectPartner,
		tmsHome,
		tmsCurrentJob,
		tmsDriverProfile,
		tmsReport
	});
}

export default makeRootReducer;