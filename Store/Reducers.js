import { combineReducers } from "redux";
import { HomeReducer as home } from "../Routes/Home/Modules/Home";
import { TrackDriverReducer as trackDriver } from "../Routes/TrackDriver/Modules/TrackDriver";
import { LoginReducer as login } from '../Routes/LoginScreen/Modules/LoginScreen';


export const makeRootReducer = () => {
	return combineReducers({
		login,
		home,
		trackDriver
	});
}

export default makeRootReducer;