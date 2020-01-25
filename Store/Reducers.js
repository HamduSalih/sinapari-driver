import { combineReducers } from "redux";
import { HomeReducer as home } from "../Routes/Home/Modules/Home";
import { TrackDriverReducer as trackDriver } from "../Routes/TrackDriver/Modules/TrackDriver";
import { LoginReducer as login } from '../Routes/LoginScreen/Modules/LoginScreen';
import { SignInOneReducer as signinone } from '../Routes/SignInOne/Modules/SignInOne';


export const makeRootReducer = () => {
	return combineReducers({
		login,
		signinone,
		home,
		trackDriver
	});
}

export default makeRootReducer;