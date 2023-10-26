import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer,DefaultTheme,DarkTheme,useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TeamHomeCare from '../screens/TeamHomeCare';
import BookNurse from "../screens/BookNurse";
import MyLocation from "../screens/MyLocation";
import NurseDoctor from "../screens/NurseDoctor";
import WorkerLogin from "../screens/WorkerLogin";
import NurseRegister from "../screens/NurseRegister";
import DoctorRegister from "../screens/DoctorRegister";
import Dashboard from "../screens/Dashboard";
import Settings from "../screens/Settings";

import UserRegister from "../screens/UserRegister";
import UserLogin from "../screens/UserLogin";
import DepositMoney from "../screens/DepositMoney";
import PatientDetails from "../screens/PatientDetails";
import Estimate from "../screens/Estimate";
import Orders from "../screens/Orders";
import MyAccount from "../screens/MyAccount";

import SignUp from '../screens/SignUp';
//import Login from '../screens/LoginVerify';
import LoginVerify from '../screens/LoginVerify';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Matching from '../screens/Matching';

import CancelOrder from '../screens/CancelOrder';
import Money from '../screens/Money';
import EmailVerify from '../screens/EmailVerify';
import OTP from '../screens/OTP';
import Hospitals from '../screens/Hospitals';
import ProductUpdates from '../screens/ProductUpdates';
import ResetPwd from '../screens/ResetPwd';
import CheckEmail from '../screens/CheckEmail';



const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = () => {
    return (
        <Tabs.Navigator
            screenOptions={({route}) => ({
                headerShown:false,
                tabBarIcon:({color}) => {
                    let iconName;
                    if(route.name === 'THomeCare'){
                        iconName = "home";
                    }else if (route.name === 'Orders'){
                        iconName = "reorder-horizontal";
                    }else if (route.name === 'MyAccount'){
                        iconName = "account";
                    }
                    return (
                        <MaterialCommunityIcons name={iconName} size={32} color="black" />
                    )
                },
                tabBarLabelStyle:{fontSize:16},
                tabBarActiveTintColor:'#28a6e0',
                tabBarInactiveTintColor:'black'
                
            })}
        > 
            <Tabs.Screen name='THomeCare' 
                screenOptions={{headerShown:false}}
                component={HomeStack}
               
            />
            <Tabs.Screen name="Orders" component={Orders} />
            <Tabs.Screen name="MyAccount" component={MyAccount} />
        </Tabs.Navigator>
    )
}


const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name="Home" component ={TeamHomeCare} />
            <Stack.Screen name="Register" component={UserRegister} />
            <Stack.Screen name="Login"    component={UserLogin} />
            <Stack.Screen name="Nurse Register" component={NurseRegister} />
            <Stack.Screen name="Worker Login" component={WorkerLogin} />
            <Stack.Screen name="DoctorRegister" component={DoctorRegister} />
            <Stack.Screen   
                name="NurseDoctor" component={NurseDoctor} />
            <Stack.Screen name="BookNurse" component={BookNurse} />
            <Stack.Screen options={{headerShown:false}} name="Dashboard" component={Dashboard} />
            <Stack.Screen name="MyLocation" 
                options={{headerShown:false}} component={MyLocation} />
            <Stack.Screen name="Deposit" component={DepositMoney} />
            <Stack.Screen name="Patient Details" component={PatientDetails} />
            <Stack.Screen name="Pricing" component={Estimate} />
            <Stack.Screen    name="Settings" component={Settings} />
            <Stack.Screen name="Matching"  options={{headerShown:false}}  component={Matching} />
            <Stack.Screen name="CancelOrder" component={CancelOrder} />
            <Stack.Screen name="Money" component={Money} />
            <Stack.Screen  options={{headerShown:false}} name='SignUp' component={SignUp} />
            <Stack.Screen  options={{headerShown:false}} 
                name='LoginVerify' component={LoginVerify} />
            <Stack.Screen  
                name='EmailVerify' component={EmailVerify} />
            <Stack.Screen options={{headerShown:false}} name='Reset' component={ResetPwd} />
            <Stack.Screen options={{headerShown:false}} name="Check Email" component={CheckEmail} />
            <Stack.Screen name='OTP' component={OTP} />
            <Stack.Screen name='Book Specialists' component={Hospitals} />
            <Stack.Screen name='Product Updates' component={ProductUpdates} />

        </Stack.Navigator>
    )
}




const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  options={{headerShown:false}} name="rootHome" component={RootHome} />
                <Stack.Screen options={{headerShown:false}} name="Home" component={HomeStack} />
                <Stack.Screen name="Orders" component={Orders} />
                <Stack.Screen name="MyAccount" component={MyAccount} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;