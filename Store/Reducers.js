import { combineReducers } from "redux";
import { HomeReducer as home } from "../Routes/Home/Modules/Home";
import { TrackDriverReducer as trackDriver } from "../Routes/TrackDriver/Modules/TrackDriver";


export const makeRootReducer = () => {
	return combineReducers({
		home,
		trackDriver
	});
}

export default makeRootReducer;