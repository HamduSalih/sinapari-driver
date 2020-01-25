import React from "react";
import { Actions, Scene } from "react-native-router-flux";
import HomeContainer from "./Home/Containers/HomeContainer";
import TrackDriverContainer from "./TrackDriver/Containers/TrackDriverContainer";
import LoginScreenContainer from './LoginScreen/Containers/LoginScreenContainer';
import SignInOneContainer from './SignInOne/Containers/SignInOneContainer';
import SignInTwoContainer from './SignInTwo/Containers/SignInTwoContainer';


const scenes = Actions.create(
	<Scene key="root" hideNavBar>
		<Scene key="login" component={LoginScreenContainer} title="login" initial />
		<Scene key="signin" component={SignInOneContainer} title="signin" />
		<Scene key="signintwo" component={SignInTwoContainer} title="signintwo" />
		<Scene key="home" component={HomeContainer} title="home" />
		<Scene key="trackDriver" component={TrackDriverContainer} title="trackDriver" />
	</Scene>

);

export default scenes;