import { combineReducers } from "redux";
import { HomeReducer as home } from "../Routes/Home/Modules/Home";
import { TrackDriverReducer as trackDriver } from "../Routes/TrackDriver/Modules/TrackDriver";
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
		currentJob
	});
}

export default makeRootReducer;