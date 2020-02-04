import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import makeRootReducer from "./Reducers";
import { createLogger } from "redux-logger";
import Constants from "expo-constants";
const { manifest } = Constants;
import createSocketIoMiddleware from "redux-socket.io";

import io from "socket.io-client/dist/socket.io";

const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;

let socket = io(uri, {jsonp:false});
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const log =  createLogger({ diff: true, collapsed: true });

// a function which can create our store and auto-persist the data
const Store = (initialState = {}) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================
    const middleware = [thunk, log, socketIoMiddleware];

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