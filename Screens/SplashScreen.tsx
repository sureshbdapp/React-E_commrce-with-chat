import { useNavigation } from "@react-navigation/native";
import React from "react"
import { useEffect } from "react"
import {
    Text, View, SafeAreaView, Image, useColorScheme
} from "react-native"
import MyNavigator from "./Direction/Navigator";


function SplashScreen(): JSX.Element {

    return (
        <SafeAreaView>
            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }} >
                    <Image style={{}} source={require('../assets/logo_icon.png')} />
                    <Text style={{ fontSize: 25 }}>
                        Successfully
                    </Text> 
                   
                </View>

            </View>
        </SafeAreaView>
    )


}

export default SplashScreen



