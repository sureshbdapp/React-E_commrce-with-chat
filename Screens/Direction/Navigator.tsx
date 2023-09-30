import React from "react"
import { NativeStackHeaderProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import Dashboard from "../ Dashboard"
import SplashScreen from "../SplashScreen"
import Login from "../Login"
import { Header } from "react-native/Libraries/NewAppScreen"

const Root = createNativeStackNavigator()



const Navigator = () => {
    return (
        <NavigationContainer>
            <Root.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
                <Root.Screen name="Splash" component={SplashScreen} />
                <Root.Screen name="Dashboard" component={Dashboard} />
                <Root.Screen name="Login" component={Login} />
            </Root.Navigator>
        </NavigationContainer>
    )
}
export default Navigator;