import React from "react";
import { StyleSheet } from 'react-native';
import { Actions, Scene, ActionConst } from "react-native-router-flux";
import LoginScreenContainer from './LoginScreen/Containers/LoginScreenContainer';
import SignInOneContainer from './SignInOne/Containers/SignInOneContainer';
import SignInTwoContainer from './SignInTwo/Containers/SignInTwoContainer';
import SignInThreeContainer from './SignInThree/Containers/SignInThreeContainer';
import RegProcessContainer from './RegProcess/Containers/RegProcessContainer';
import AuthLoadScreen from './AuthScreens/AuthLoadScreen';
import DriverHomeContainer from './DriverHome/Containers/DriverHomeContainer';
import DriverJobDetailsContainer from './DriverJobDetails/Containers/DriverJobDetailsContainer';
import BidProcessContainer from './bidProcess/Containers/BidProcessContainer';
import MyBidContainer from './MyBids/Containers/MyBidContainer';
import CurrentJobContainer from './CurrentJob/Containers/CurrentJobContainer';
import BottomTab from '../Navigtions/BottomTab'
import navAuthLoad from '../Navigtions/DriverHomeNav'
import DriverProfileContainer from "./DriverProfile/Containers/DriverProfileContainer";
import ReportContainer from "./Report/Containers/ReportContainer";
import SelectPartnerContainer from "./SelectPartner/Containers/SelectPartnerContainer";
import TmsHomeContainer from "./TmsHome/Containers/TmsHomeContainer";
import TmsCurrentJobContainer from "./TmsCurrentJob/Containers/TmsCurrentJobContainer";
import TmsDriverProfileContainer from "./TmsDriverProfile/Containers/TmsDriverProfileContainer";
import TmsReportContainer from "./TmsReport/Containers/TmsReportContainer";



const scenes = Actions.create(
	<Scene key="root">
		<Scene key="authLoad" hideNavBar component={AuthLoadScreen} title="AuthLoad"  initial/>
		<Scene key="login" type={ActionConst.RESET} component={LoginScreenContainer} title="Login" />
		<Scene key="signin" component={SignInOneContainer} title="Sign In" />
		<Scene key="signintwo" component={SignInTwoContainer} title="Sign In" />
		<Scene key="signinthree" component={SignInThreeContainer} title="Sign In" />
		<Scene key="regprocess" type={ActionConst.RESET} component={RegProcessContainer} title="Processing" />
		<Scene key="driverhome" tabBarComponent={BottomTab} type={ActionConst.RESET} component={DriverHomeContainer} title="Home" />
		<Scene key="driverhome2" tabBarComponent={BottomTab} component={DriverHomeContainer} title="Home" />
		<Scene key="driverjobdetails" component={DriverJobDetailsContainer} title="Job Details" />
		<Scene key="bidProcess" hideNavBar type={ActionConst.RESET} component={BidProcessContainer} title="Bid Processing" />
		<Scene key="myBids" component={MyBidContainer} title="My Bids" />
		<Scene key="currentJob" hideNavBar component={CurrentJobContainer} title="Current Job" />
		<Scene key="driverProfile" component={DriverProfileContainer} title="Edit Profile" />
		<Scene key="driverBotTab" hideNavBar component={navAuthLoad} title="DriverBotTab" />
		<Scene key="report"  component={ReportContainer} title="Send Report" />
		<Scene key="selectPartner"  component={SelectPartnerContainer} title="Select Your Company" />
		<Scene key="tmsHome" hideNavBar type={ActionConst.RESET} component={TmsHomeContainer} title="Home" />
		<Scene key="tmsCurrentJob" hideNavBar component={TmsCurrentJobContainer} title="Current Job" />
		<Scene key="tmsDriverProfile" component={TmsDriverProfileContainer} title="Edit Profile" />
		<Scene key="tmsReport"  component={TmsReportContainer} title="Send Report" />
	</Scene>

);

const styles = StyleSheet.create({
	tabBar: {
	height: 50,
	borderTopColor: 'darkgrey',
	borderTopWidth: 1,
	opacity: 0.98,
	justifyContent:'space-between'
	}
	});

export default scenes;