import React from "react";
import createStore from "./Store/CreateStore";
import AppContainer from "./AppContainer";
export default class Root extends React.Component{
	static navigationOptions = {
        headerShown: false
    }
	renderApp(){
		const initialState = window.___INTITIAL_STATE__;
		const store = createStore(initialState);

		return (
			<AppContainer store={store} />

		);

	}

	render(){
		return this.renderApp();
	}
}