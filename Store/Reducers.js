import { combineReducers } from "redux";
import { HomeReducer as home } from "../Routes/Home/Modules/Home";
import { TrackDriverReducer as trackDriver } from "../Routes/TrackDriver/Modules/TrackDriver";
import { LoginReducer as login } from '../Routes/LoginScreen/Modules/LoginScreen';
import { SignInOneReducer as signinone } from '../Routes/SignInOne/Modules/SignInOne';
import { SignInTwoReducer as signintwo } from '../Routes/SignInTwo/Modules/SignInTwo';


export const makeRootReducer = () => {
	return combineReducers({
		login,
		signinone,
		signintwo,
		home,
		trackDriver
	});
}

export default makeRootReducer;