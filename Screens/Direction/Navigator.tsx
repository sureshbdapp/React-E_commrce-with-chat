import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import Dashboard from "../ Dashboard"
import SplashScreen from "../SplashScreen"

const Root = createNativeStackNavigator()




const MyNavigator = () => {
    return (
        <NavigationContainer>
            <Root.Navigator initialRouteName="Splash">
                <Root.Screen name="Splash" component={SplashScreen} />
                <Root.Screen name="Dashboard" component={Dashboard} />
            </Root.Navigator>
        </NavigationContainer>
    )
}
export default MyNavigator