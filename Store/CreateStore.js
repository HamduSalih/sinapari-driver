import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import makeRootReducer from "./Reducers";
import { createLogger } from "redux-logger";
import Constants from "expo-constants";

const log =  createLogger({ diff: true, collapsed: true });

// a function which can create our store and auto-persist the data
const Store = (initialState = {}) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================
    const middleware = [thunk, log];

    // ======================================================
    // Store Enhancers
    // ======================================================
    const enhancers = [];

    // ======================================================
    // Store Instantiation
    // ======================================================
    const store = createStore(
        makeRootReducer(),
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );
    return store;
};
export default Store;