import React from "react";
import { Actions, Scene, ActionConst } from "react-native-router-flux";
import HomeContainer from "./Home/Containers/HomeContainer";
import TrackDriverContainer from "./TrackDriver/Containers/TrackDriverContainer";
import LoginScreenContainer from './LoginScreen/Containers/LoginScreenContainer';
import SignInOneContainer from './SignInOne/Containers/SignInOneContainer';
import SignInTwoContainer from './SignInTwo/Containers/SignInTwoContainer';
import SignInThreeContainer from './SignInThree/Containers/SignInThreeContainer';
import RegProcessContainer from './RegProcess/Containers/RegProcessContainer';
import AuthLoadScreen from './AuthScreens/AuthLoadScreen';
import DriverHomeContainer from './DriverHome/Containers/DriverHomeContainer';
import DriverJobDetailsContainer from './DriverJobDetails/Containers/DriverJobDetailsContainer';
import BidProcessContainer from './bidProcess/Containers/BidProcessContainer';



const scenes = Actions.create(
	<Scene key="root">
		<Scene key="authLoad" hideNavBar component={AuthLoadScreen} title="AuthLoad"  initial/>
		<Scene key="login" type={ActionConst.RESET} component={LoginScreenContainer} title="Login" />
		<Scene key="signin" component={SignInOneContainer} title="Sign In" />
		<Scene key="signintwo" component={SignInTwoContainer} title="Sign In" />
		<Scene key="signinthree" component={SignInThreeContainer} title="Sign In" />
		<Scene key="regprocess" type={ActionConst.RESET} component={RegProcessContainer} title="Processing" />
		<Scene key="home" component={HomeContainer} title="Home"/>
		<Scene key="trackDriver" component={TrackDriverContainer} title="Driver" />
		<Scene key="driverhome" type={ActionConst.RESET} component={DriverHomeContainer} title="Home" />
		<Scene key="driverjobdetails" component={DriverJobDetailsContainer} title="Job Details" />
		<Scene key="bidProcess" hideNavBar type={ActionConst.RESET} component={BidProcessContainer} title="Bid Processing" />
	</Scene>

);

export default scenes;